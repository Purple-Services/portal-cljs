(ns portal-cljs.vehicles
  (:require [portal-cljs.components :refer [TableFilterButtonGroup
                                            TablePager RefreshButton
                                            DynamicTable TextInput
                                            FormSubmit FormGroup
                                            SubmitDismissConfirmGroup
                                            ConfirmationAlert
                                            Select]]
            [portal-cljs.cookies :refer [get-user-id]]
            [portal-cljs.datastore :as datastore]
            [portal-cljs.forms :refer [entity-save edit-on-success
                                       edit-on-error]]
            [portal-cljs.utils :as utils]
            [portal-cljs.xhr :refer [process-json-response retrieve-url]]
            [reagent.core :as r]))

(def default-form-target
  [:div {:style {:display "none"}}])

(def default-new-vehicle {:user_id (get-user-id)
                          :active true
                          :year ""
                          :make ""
                          :model ""
                          :color ""
                          :gas_type "87"
                          :only_top_tier false
                          :license_plate ""})

(def state (r/atom {:current-vehicle nil
                    :alert-success ""
                    :add-vehicle-state {:new-vehicle default-new-vehicle
                                        :editing? false
                                        :confirming? false
                                        :retrieving? false}}))

(defn AddVehicleForm
  []
  (let [add-vehicle-state (r/cursor state [:add-vehicle-state])
        new-vehicle (r/cursor add-vehicle-state [:new-vehicle])
        user-id (r/cursor new-vehicle [:user_id])
        active? (r/cursor new-vehicle [:active])
        year (r/cursor new-vehicle [:year])
        make (r/cursor new-vehicle [:make])
        model (r/cursor new-vehicle [:model])
        color (r/cursor new-vehicle [:color])
        gas-type (r/cursor new-vehicle [:gas_type])
        only-top-tier? (r/cursor new-vehicle [:only_top_tier])
        license-plate (r/cursor new-vehicle [:license_plate])
        retrieving? (r/cursor add-vehicle-state [:retrieving?])
        confirming? (r/cursor add-vehicle-state [:confirming?])
        editing? (r/cursor add-vehicle-state [:editing?])
        errors (r/atom {})
        alert-success (r/atom "")]
    (fn []
      (let [;; helper fns
            confirm-msg (fn [new-vehicle]
                          (let [{:keys [email full-name]} new-vehicle]
                            [:div
                             [:p (str "Are you sure you want to create a new "
                                      "vehicle with the following values?")]
                             [:h4 "Make: " @make]
                             [:h4 "Model: " @model]
                             [:h4 "Year: " @year]
                             [:h4 "Color: " @color ]
                             [:h4 "Gas Type: " @gas-type]
                             [:h4 "Only Top Tier: " (if @only-top-tier?
                                                      "Yes"
                                                      "No")]
                             [:h4 "License Plate: " @license-plate]
                             [:h4 "Active: " (if @active?
                                               "Yes"
                                               "No")]
                             (when (datastore/account-manager?)
                               [:h4 "User: "
                                (:name
                                 (utils/get-by-id @portal-cljs.datastore/users
                                                  @user-id))])]))
            submit-on-click (fn [e]
                              (.preventDefault e)
                              (if @editing?
                                (do
                                  (reset! confirming? true))
                                (do
                                  (reset! alert-success "")
                                  (reset! editing? true))))
            confirm-on-click (fn [_]
                               (entity-save
                                @new-vehicle
                                (str "user/" (get-user-id) "/add-vehicle")
                                "POST"
                                retrieving?
                                (edit-on-success
                                 {:entity-type "vehicle"
                                  :entity-get-url-fn
                                  (fn [id]
                                    (str utils/base-url
                                         "user/"
                                         (get-user-id)
                                         "/vehicle/"
                                         id))
                                  :edit-entity new-vehicle
                                  :current-entity (r/atom {})
                                  :alert-success alert-success
                                  :aux-fn
                                  (fn []
                                    (reset! confirming? false)
                                    (reset! retrieving? false)
                                    (reset! editing? false))})
                                (edit-on-error new-vehicle
                                               :aux-fn
                                               (fn []
                                                 (reset! confirming? false)
                                                 (reset! retrieving? false)
                                                 (reset! alert-success ""))
                                               :response-fn
                                               (fn [response]
                                                 (reset! errors response)))))
            dismiss-fn (fn [e]
                         ;; reset any errors
                         (reset! errors nil)
                         ;; no longer editing
                         (reset! editing? false)
                         ;; reset edit-zone
                         (reset! new-vehicle default-new-vehicle)
                         ;; reset confirming
                         (reset! confirming? false))]
        [:div {:class "form-border"
               :style {:margin-top "15px"}}
         [:form {:class "form-horizontal"}
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [FormGroup {:label "make"
                        :errors (:make @errors)}
             [TextInput {:value @make
                         :placeholder "Make"
                         :on-change #(reset! make
                                             (utils/get-input-value %))}]]]]
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [FormGroup {:label ""
                        :errors (:model @errors)}
             [TextInput {:value @model
                         :placeholder "Model"
                         :on-change #(reset! model
                                             (utils/get-input-value %))}]]]]
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [FormGroup {:label "year"
                        :errors (:year @errors)}
             [TextInput {:value @year
                         :placeholder "Year"
                         :on-change #(reset! year
                                             (utils/get-input-value %))}]]]]
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [FormGroup {:label ""
                        :errors (:color @errors)}
             [TextInput {:value @color
                         :placeholder "Color"
                         :on-change #(reset! color
                                             (utils/get-input-value %))}]]]]
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [FormGroup {:label ""
                        :errors (:color @license-plate)}
             [TextInput {:value @license-plate
                         :placeholder "License Plate"
                         :on-change #(reset! license-plate
                                             (utils/get-input-value %))}]]]]
          ;; user select
          (when (datastore/account-manager?)
            [:div {:class "row"}
             [:div {:class "col-lg-3 col-sm-3"}
              [:p "User"]]
             [:div {:class "col-lg-3 col-sm-3"}
              [FormGroup {:label "User"
                          :errors (:user_id @errors)}
               [Select {:value user-id
                        :options @portal-cljs.datastore/users
                        :display-key :name
                        :sort-keyword :name}]]]])
          ;; gas type, a select
          [:div {:class "row"}
           [:div {:class "col-lg-3 col-sm-3"}
            [:p "Gas Type"]]
           [:div {:class "col-lg-3 col-sm-3"}
            [FormGroup {:label "Gas Type"
                        :errors (:gas_type @errors)}
             [Select {:value gas-type
                      :options #{{:id 87 :octane "87"}
                                 {:id 91 :octane "91"}}
                      :display-key :octane
                      :sort-keyword :id}]]]]
          ;; only top tier, a select
          [:div {:class "row"}
           [:div {:class "col-lg-3 col-sm-3"}
            [:p "Only Top Tier Gas?"]]
           [:div {:class "col-lg-3 col-sm-3"}
            [FormGroup {:label "Only Top Tier Gas?"
                        :errors (:only_top_tier @errors)}
             [:input {:type "checkbox"
                      :checked @only-top-tier?
                      :style {:margin-left "4px"}
                      :on-change (fn [e] (reset!
                                          only-top-tier?
                                          (-> e
                                              (.-target)
                                              (.-checked))))}]]]]
          ;; active, a select
          [:div {:class "row"}
           [:div {:class "col-lg-3 col-sm-3"}
            [:p "Active? "]]
           [:div {:class "col-lg-3 col-sm-3"}
            [FormGroup {:label "Active? "
                        :errors (:active @errors)}
             [:input {:type "checkbox"
                      :checked @active?
                      :style {:margin-left "4px"}
                      :on-change (fn [e] (reset!
                                          active?
                                          (-> e
                                              (.-target)
                                              (.-checked))))}]]]]
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [SubmitDismissConfirmGroup
             {:confirming? confirming?
              :editing? editing?
              :retrieving? retrieving?
              :submit-fn submit-on-click
              :dismiss-fn dismiss-fn
              :edit-btn-content "Create Vehicle"}]
            (when @confirming?
              [ConfirmationAlert
               {:confirmation-message (fn [] (confirm-msg @new-vehicle))
                :cancel-on-click dismiss-fn
                :confirm-on-click confirm-on-click
                :retrieving? retrieving?
                }])]]]]))))

(defn AddVehicle
  [state]
  (let [add-vehicle-state (r/cursor state [:add-vehicle-state])
        editing? (r/cursor add-vehicle-state [:editing?])
        form-target (r/cursor state [:form-target])
        new-vehicle (r/cursor add-vehicle-state [:new-vehicle])]
    (fn [state]
      (when-not (datastore/is-child-user?)
        (when @editing?
          (reset! new-vehicle default-new-vehicle)
          (reset! form-target [AddVehicleForm])
          default-form-target)
        (when-not @editing?
          (reset! form-target default-form-target)
          [:button {:type "button"
                    :class "btn btn-default"
                    :on-click (fn [e]
                                (reset! editing? true))}
           [:i {:class "fa fa-plus"}] " Add"])))))

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
                       (fn []
                         (reset! refreshing? false))}))]
    (fn [vehicles]
      (when (nil? @current-vehicle)
        (table-pager-on-click vehicles))
      [:div {:class "panel panel-default"}
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         [:div {:class "btn-toolbar"
                :role "toolbar"}
          (when-not (empty? vehicles)
            [TableFilterButtonGroup {:on-click (fn [_]
                                                 (reset! current-page 1))
                                     :filters filters
                                     :data vehicles
                                     :selected-filter selected-filter}])
          (when-not (empty? vehicles)
            [:div {:class "btn-group"
                   :role "group"}
             [RefreshButton {:refresh-fn refresh-fn}]])
          [:div {:class "btn-group"
                 :role "group"}
           [AddVehicle state]]]]]
       @(r/cursor state [:form-target])
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
                                                          "No")]
                            ["Active" :active #(if (:active %)
                                                 "Yes"
                                                 "No")]
                            (when (datastore/account-manager?)
                              ["User"
                               #(:name
                                 (utils/get-by-id @portal-cljs.datastore/users
                                                  (:user_id %)))
                               #(:name
                                 (utils/get-by-id @portal-cljs.datastore/users
                                                  (:user_id %)))])]}
             (get-current-vehicles-page vehicles)]])]]
       (when-not (empty? vehicles)
         [:div {:class "row"}
          [:div {:class "col-lg-12"}
           [TablePager
            {:total-pages (count (paginated-vehicles vehicles))
             :current-page current-page
             :on-click table-pager-on-click}]]])])))
