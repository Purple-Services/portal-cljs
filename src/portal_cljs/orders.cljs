(ns portal-cljs.orders
  (:require [cljsjs.moment]
            [portal-cljs.components :refer [TableFilterButtonGroup
                                            TablePager RefreshButton
                                            DynamicTable]]
            [portal-cljs.cookies :refer [get-user-id]]
            [portal-cljs.datastore :as datastore]
            [portal-cljs.utils :as utils]
            [portal-cljs.xhr :refer [process-json-response retrieve-url]]
            [reagent.core :as r]))

(def state (r/atom {:current-order nil
                    :alert-success ""}))

(defn OrdersPanel
  [orders]
  (let [current-order (r/cursor state [:current-order])
        sort-keyword (r/atom :target_time_start)
        sort-reversed? (r/atom false)
        current-page (r/atom 1)
        page-size 20
        processed-orders (fn [orders]
                           (->
                            orders
                            ((utils/sort-fn @sort-reversed? @sort-keyword))))
        paginated-orders (fn [orders]
                           (-> orders
                               processed-orders
                               (utils/paginate-items page-size)))
        get-current-orders-page (fn [orders]
                                  (utils/get-page
                                   (paginated-orders orders)
                                   @current-page))
        table-pager-on-click (fn [orders]
                               (reset! current-order
                                       (first
                                        (get-current-orders-page orders))))
        refresh-fn (fn [refreshing?]
                     (reset! refreshing? true)
                     (datastore/retrieve-orders!
                      {:after-response
                       (reset! refreshing? false)}))
        time-limit (fn [order]
                     (str (.diff (js/moment.unix (:target_time_end order))
                                 (js/moment.unix (:target_time_start order))
                                 "hours")
                          " Hr"))]
    (fn [orders]
      (when (nil? @current-order)
        (table-pager-on-click orders))
      [:div {:class "panel panel-default"}
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         ;; [:div {:class "btn-toolbar pull-left"
         ;;        :role "toolbar"}
         ;;  [TableFilterButtonGroup {:on-click (fn [_]
         ;;                                       (reset! current-page 1))
         ;;                           :filters filters
         ;;                           :data vehicles
         ;;                           :selected-filter selected-filter}]]
         [:div {:class "btn-toolbar"
                :role "toolbar"}
          [:div {:class "btn-group"
                 :role "group"}
           [RefreshButton {:refresh-fn refresh-fn}]]]]]
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         (if (empty? orders)
           [:div [:h3 "No orders currently associated with account"]]
           [:div {:class "table-responsive"}
            [DynamicTable {:current-item current-order
                           :on-click (fn [_ order]
                                       (reset! current-order order)
                                       (reset! (r/cursor state
                                                         [:alert-success]) ""))
                           :sort-keyword sort-keyword
                           :sort-reversed? sort-reversed?
                           :table-vecs
                           [["Status" :status :status]
                            ["Placed" :target_time_start
                             #(utils/unix-epoch->fuller
                               (:target_time_start %))]
                            ["Time" time-limit time-limit]
                            ["Vehicle" :vehicle_description :vehicle_description]
                            ["License Plate" :license_plate :license_plate]
                            ["Location" :address_street :address_street]
                            ["Tire Fill Up"
                             :tire_pressure_check
                             #(if (:tire_pressure_check %)
                                "Yes"
                                "No")]
                            ["Gas Price" :gas_price #(utils/cents->$dollars
                                                      (:gas_price %))]
                            ["Gallons" :gallons :gallons]
                            ["Service Fee" :service_fee
                             #(utils/cents->$dollars
                               (:service_fee %))]
                            ["Total" :total_price #(utils/cents->$dollars
                                                    (:total_price %))]]}
             (get-current-orders-page orders)]])]]
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         [TablePager
          {:total-pages (count (paginated-orders orders))
           :current-page current-page
           :on-click table-pager-on-click}]]]])))
