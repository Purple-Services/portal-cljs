(ns portal-cljs.vehicles
  (:require [portal-cljs.components :refer [TableFilterButtonGroup
                                            TablePager RefreshButton
                                            DynamicTable]]
            [portal-cljs.cookies :refer [get-user-id]]
            [portal-cljs.datastore :as datastore]
            [portal-cljs.utils :as utils]
            [portal-cljs.xhr :refer [process-json-response retrieve-url]]
            [reagent.core :as r]))

(def state (r/atom {:current-vehicle nil
                    :alert-success ""}))

(defn VehiclesPanel
  [vehicles]
  (let [current-vehicle (r/cursor state [:current-vehicle])
        sort-keyword (r/atom :make)
        sort-reversed? (r/atom false)
        current-page (r/atom 1)
        page-size 15
        selected-filter (r/atom "Active")
        filters {"Active"   {:filter-fn :active}
                 "Inactive" {:filter-fn (comp not :active)}}
        processed-vehicles (fn [vehicles]
                             (->
                              vehicles
                              ((utils/filter-fn filters @selected-filter))
                              ((utils/sort-fn @sort-reversed? @sort-keyword))))
        paginated-vehicles (fn [vehicles]
                             (-> vehicles
                                 processed-vehicles
                                 (utils/paginate-items page-size)))
        get-current-vehicles-page (fn [vehicles]
                                    (utils/get-page
                                     (paginated-vehicles vehicles)
                                     @current-page))
        table-pager-on-click (fn [vehicles]
                               (reset! current-vehicle
                                       (first
                                        (get-current-vehicles-page vehicles))))
        refresh-fn (fn [refreshing?]
                     (reset! refreshing? true)
                     (datastore/retrieve-vehicles!
                      {:after-response
                       (reset! refreshing? false)}))]
    (fn [vehicles]
      (when (nil? @current-vehicle)
        (table-pager-on-click vehicles))
      [:div {:class "panel panel-default"}
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         [:div {:class "btn-toolbar pull-left"
                :role "toolbar"}
          [TableFilterButtonGroup {:on-click (fn [_]
                                               (reset! current-page 1))
                                   :filters filters
                                   :data vehicles
                                   :selected-filter selected-filter}]]
         [:div {:class "btn-toolbar"
                :role "toolbar"}
          [:div {:class "btn-group"
                 :role "group"}
           [RefreshButton {:refresh-fn refresh-fn}]]]]]
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         (if (empty? vehicles)
           [:div [:h3 "No vehicles currently associated with account"]]
           [:div {:class "table-responsive"}
            [DynamicTable {:current-item current-vehicle
                           :on-click (fn [_ vehicle]
                                       (reset! current-vehicle vehicle)
                                       (reset! (r/cursor state
                                                         [:alert-success]) ""))
                           :sort-keyword sort-keyword
                           :sort-reversed? sort-reversed?
                           :table-vecs
                           [["Make" :make :make]
                            ["Model" :model :model]
                            ["Color" :color :color]
                            ["Year" :year :year]
                            ["License Plate" :license_plate :license_plate]
                            ["Fuel Type" :gas_type :gas_type]
                            ["Top Tier" :only_top_tier #(if (:only_top_tier %)
                                                          "Yes"
                                                          "No")]]}
             (get-current-vehicles-page vehicles)]])]]
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         [TablePager
          {:total-pages (count (paginated-vehicles vehicles))
           :current-page current-page
           :on-click table-pager-on-click}]]]])))
