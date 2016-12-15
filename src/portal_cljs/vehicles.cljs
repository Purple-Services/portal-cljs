(ns portal-cljs.vehicles
  (:require [cljs.core.async :refer [put!]]
            [cljsjs.react-select]
            [portal-cljs.components :refer [TableFilterButtonGroup
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
            [portal-cljs.vehicles-list :as vehicles-list]
            [portal-cljs.xhr :refer [process-json-response retrieve-url]]
            [reagent.core :as r]))

(def AutoComplete
  (r/adapt-react-class js/Select.Creatable))

(def default-form-target
  [:div {:style {:display "none"}}])

(def vehicle-years
  (clj->js (mapv #(hash-map :value (str %)
                            :label (str %))
                 (map name (sort (keys vehicles-list/vehicles-list))))))

(defn available-makes
  [year]
  (into [] (sort (map name (keys ((keyword year)
                                  vehicles-list/vehicles-list))))))
(defn vehicle-makes
  [year]
  (clj->js (mapv #(hash-map :value %
                            :label %)
                 (available-makes year))))

(defn available-models
  [year make]
  (into [] (sort ((keyword make)
                  ((keyword year) vehicles-list/vehicles-list)))))

(defn vehicle-models
  [year make]
  (clj->js (mapv #(hash-map :value %
                            :label %)
                 (available-models year make))))

(def car-colors
  (clj->js (mapv #(hash-map :value %
                            :label %)
                 ["White", "Black", "Silver", "Gray", "Red", "Blue", "Brown",
                  "Biege", "Cream","Yellow", "Gold", "Green", "Pink", "Purple",
                  "Copper", "Camo"])))

(def default-new-vehicle {:user_id (get-user-id)
                          :active true
                          :year ""
                          :make ""
                          :model ""
                          :color ""
                          :gas_type "87"
                          :only_top_tier true
                          :license_plate ""})

(def state (r/atom {:current-vehicle nil
                    :alert-success ""
                    :add-vehicle-state {:new-vehicle default-new-vehicle
                                        :confirming? false
                                        :retrieving? false
                                        :editing? false}
                    :edit-vehicle-state {:edit-vehicle default-new-vehicle
                                         :confrming? false
                                         :retrieving? false
                                         :editing? false}}))

(defn reset-editing-atoms!
  []
  (reset! (r/cursor state [:add-vehicle-state :editing?]) false)
  (reset! (r/cursor state [:edit-vehicle-state :editing?]) false))

;; this is a hack for now. It should be that
;; (= vehicle (form-vehicle->server-vehicle
;; (server-vehicle->form-vehicle vehicle)))
;; this would also mean changing the user, octane select
;; options
;; perhaps some other parts of the form as well
(defn get-Select-val
  [val]
  (if (string? val)
    val
    (:value (js->clj val
                     :keywordize-keys
                     true))))
(defn VehicleFormComp
  [{:keys [vehicle errors]}]
  (fn [{:keys [vehicle errors]}]
    (let [user-id (r/cursor vehicle [:user_id])
          active? (r/cursor vehicle [:active])
          year (r/cursor vehicle [:year])
          make (r/cursor vehicle [:make])
          model (r/cursor vehicle [:model])
          color (r/cursor vehicle [:color])
          gas-type (r/cursor vehicle [:gas_type])
          only-top-tier? (r/cursor vehicle [:only_top_tier])
          license-plate (r/cursor vehicle [:license_plate])]
      [:div
       [:div {:class "row"}
        [:div {:class "col-lg-4 col-sm-12"}
         [FormGroup {:label "year"
                     :errors (:year @errors)}
          [AutoComplete {:value @year
                         :aria-labelledby "Year"
                         :on-change (fn [value]
                                      (reset! year value))
                         :placeholder "Year"
                         :options vehicle-years}]]]
        [:div {:class "col-lg-4 col-sm-12"}
         [FormGroup {:label "make"
                     :errors (:make @errors)}
          [AutoComplete {:value @make
                         :aria-labelledby "Make"
                         :on-change (fn [value]
                                      (reset! make value))
                         :placeholder "Make"
                         :options (vehicle-makes
                                   (get-Select-val @year))}]]]
        [:div {:class "col-lg-4 col-sm-12"}
         [FormGroup {:label "model"
                     :errors (:model @errors)}
          [AutoComplete {:value @model
                         :on-change (fn [value]
                                      (reset! model value))
                         :aria-labelledby "Model"
                         :placeholder "Model"
                         :options (vehicle-models
                                   (get-Select-val @year)
                                   (get-Select-val @make))}]]]]
       [:div {:class "row"}
        [:div {:class "col-lg-6 col-sm-12"}
         [FormGroup {:label "color"
                     :errors (:color @errors)}
          [AutoComplete {:value @color
                         :on-change (fn [value]
                                      (reset! color value))
                         :aria-labelledby "Color"
                         :placeholder "Color"
                         :options car-colors}]]]
        [:div {:class "col-lg-6 col-sm-12"}
         [FormGroup {:label ""
                     :errors (:license_plate @errors)}
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
         [:p "Fuel Type"]]
        [:div {:class "col-lg-3 col-sm-3"}
         [FormGroup {:label "Fuel Type"
                     :errors (:gas_type @errors)}
          [Select {:value gas-type
                   :options #{{:id 87 :octane "87 Octane"}
                              {:id 91 :octane "91 Octane"}}
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
                                           (.-checked))))}]]]]])))
(defn server-vehicle->form-vehicle
  [vehicle]
  (let [{:keys [make model year color gas_type only_top_tier
                license_plate user_id]} vehicle]
    (assoc vehicle
           :gas_type (str gas_type " Octane")
           :only_top_tier (if only_top_tier
                            "Yes"
                            "No")
           :user_id (if (datastore/account-manager?)
                      (:name (utils/get-by-id @portal-cljs.datastore/users
                                              user_id))
                      ""))))

(defn form-vehicle->server-vehicle
  [vehicle]
  (let [{:keys [make model color year]} vehicle
        get-value (fn [js-val] (:value (js->clj js-val
                                                :keywordize-keys
                                                true)))
        convert-select-val (fn [val]
                             (if (string? val)
                               val
                               (get-value val)))]
    (assoc vehicle
           :make  (convert-select-val make)
           :model (convert-select-val model)
           :color (convert-select-val color)
           :year  (convert-select-val year))))

(defn EditVehicleForm
  [vehicle]
  (let [edit-vehicle-state (r/cursor state [:edit-vehicle-state])
        retrieving? (r/cursor edit-vehicle-state [:retrieving?])
        confirming? (r/cursor edit-vehicle-state [:confirming?])
        editing? (r/cursor edit-vehicle-state [:editing?])
        errors (r/atom {})
        alert-success (r/atom "")]
    (fn [vehicle]
      (let [current-vehicle vehicle ; before changes made to the the vehicle
            edit-vehicle (r/cursor edit-vehicle-state [:edit-vehicle])
            ;; helper fns
            diff-key-str {:make "Make"
                          :model "Model"
                          :year "Year"
                          :color "Color"
                          :gas_type "Fuel Type"
                          :only_top_tier "Only Top Tier"
                          :license_plate "License Plate"
                          :user_id "User"}
            diff-msg-gen (fn [edit current]
                           (utils/diff-message
                            edit
                            current
                            (select-keys
                             diff-key-str (concat (keys edit)
                                                  (keys current)))))
            diff-msg-gen-vehicle (fn [edit-vehicle current-vehicle]
                                   (diff-msg-gen
                                    (server-vehicle->form-vehicle
                                     edit-vehicle)
                                    (server-vehicle->form-vehicle
                                     current-vehicle)))
            confirm-msg (fn []
                          [:div "The following changes will be made "
                           (map (fn [el]
                                  ^{:key el}
                                  [:h4 el])
                                (diff-msg-gen-vehicle
                                 (form-vehicle->server-vehicle
                                  @edit-vehicle)
                                 current-vehicle))])
            submit-on-click (fn [e]
                              (.preventDefault e)
                              (if @editing?
                                (if (every? nil?
                                            (diff-msg-gen-vehicle
                                             @edit-vehicle
                                             current-vehicle))
                                  ;; there isn't a diff message,no changes
                                  (reset! editing? false)
                                  ;; there is a diff message, confirm changes
                                  (reset! confirming? true))
                                (do
                                  ;; reset edit vehicle
                                  (reset! edit-vehicle
                                          (server-vehicle->form-vehicle
                                           @vehicle))
                                  (reset! alert-success "")
                                  (reset! editing? true))))
            confirm-on-click (fn [_]
                               (entity-save
                                (form-vehicle->server-vehicle @edit-vehicle)
                                (if (datastore/account-manager?)
                                  (str (datastore/account-manager-context-uri)
                                       "/edit-vehicle")
                                  (str utils/base-url "user/" (get-user-id) "/edit-vehicle"))
                                "PUT"
                                retrieving?
                                (edit-on-success
                                 {:entity-type "vehicle"
                                  :entity-get-url-fn
                                  (fn [id]
                                    (if (datastore/account-manager?)
                                      (str
                                       (datastore/account-manager-context-uri)
                                       "/vehicle/" id)
                                      (str utils/base-url
                                           "user/"
                                           (get-user-id)
                                           "/vehicle/"
                                           id)))
                                  :edit-entity edit-vehicle
                                  :alert-success alert-success
                                  :aux-fn
                                  (fn []
                                    (reset! confirming? false)
                                    (reset! retrieving? false)
                                    (reset! editing? false))})
                                (edit-on-error edit-vehicle
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
                         (reset-editing-atoms!)
                         ;; reset edit-vehicle
                         (reset! edit-vehicle
                                 current-vehicle)
                         ;; reset confirming
                         (reset! confirming? false))]
        [:div {:class "form-border"
               :style {:margin-top "15px"}}
         [:form
          [VehicleFormComp {:vehicle edit-vehicle
                            :errors errors}]
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
               {:confirmation-message confirm-msg
                :cancel-on-click dismiss-fn
                :confirm-on-click confirm-on-click
                :retrieving? retrieving?}])]]]]))))

(defn AddVehicleForm
  []
  (let [add-vehicle-state (r/cursor state [:add-vehicle-state])
        new-vehicle (r/cursor add-vehicle-state [:new-vehicle])
        retrieving? (r/cursor add-vehicle-state [:retrieving?])
        confirming? (r/cursor add-vehicle-state [:confirming?])
        editing? (r/cursor add-vehicle-state [:editing?])
        errors (r/atom {})
        alert-success (r/atom "")]
    (fn []
      (let [;; helper fns
            confirm-msg (fn [new-vehicle]
                          (let [{:keys [make model year
                                        color gas_type only-top-tier?
                                        license_plate active? user_id]}
                                new-vehicle]
                            [:div
                             [:p (str "Are you sure you want to create a new "
                                      "vehicle with the following values?")]
                             [:h4 "Make: " make]
                             [:h4 "Model: " model]
                             [:h4 "Year: " year]
                             [:h4 "Color: " color]
                             [:h4 "Fuel Type: " (str gas_type " Octane")]
                             [:h4 "Only Top Tier: " (if only-top-tier?
                                                      "Yes"
                                                      "No")]
                             [:h4 "License Plate: " license_plate]
                             (when (datastore/account-manager?)
                               [:h4 "User: "
                                (:name
                                 (utils/get-by-id @portal-cljs.datastore/users
                                                  user_id))])]))
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
                                (form-vehicle->server-vehicle
                                 @new-vehicle)
                                (if (datastore/account-manager?)
                                  (str (datastore/account-manager-context-uri)
                                       "/add-vehicle")
                                  (str utils/base-url "user/" (get-user-id) "/add-vehicle"))
                                "POST"
                                retrieving?
                                (edit-on-success
                                 {:entity-type "vehicle"
                                  :entity-get-url-fn
                                  (fn [id]
                                    (if (datastore/account-manager?)
                                      (str
                                       (datastore/account-manager-context-uri)
                                       "/vehicle/" id)
                                      (str utils/base-url
                                           "user/"
                                           (get-user-id)
                                           "/vehicle/"
                                           id)))
                                  :edit-entity new-vehicle
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
                         (reset-editing-atoms!)
                         ;; reset edit-zone
                         (reset! new-vehicle default-new-vehicle)
                         ;; reset confirming
                         (reset! confirming? false))]
        [:div {:class "form-border"
               :style {:margin-top "15px"}}
         [:form
          [VehicleFormComp {:vehicle new-vehicle
                            :errors errors}]
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
               {:confirmation-message
                (fn [] (confirm-msg
                        (form-vehicle->server-vehicle @new-vehicle)))
                :cancel-on-click dismiss-fn
                :confirm-on-click confirm-on-click
                :retrieving? retrieving?}])]]]]))))


(defn AddVehicle
  [state]
  (let [add-vehicle-state (r/cursor state [:add-vehicle-state])
        new-editing? (r/cursor add-vehicle-state [:editing?])
        old-editing? (r/cursor state [:edit-vehicle-state :editing?])
        form-target (r/cursor state [:form-target])
        new-vehicle (r/cursor add-vehicle-state [:new-vehicle])]
    (fn [state]
      (when-not (datastore/is-child-user?)
        (when @new-editing?
          (reset! new-vehicle default-new-vehicle)
          (when-not @old-editing?
            (reset! form-target [AddVehicleForm]))
          default-form-target)
        (when-not (or @new-editing?
                      @old-editing?)
          (reset! form-target default-form-target)
          [:button {:type "button"
                    :class "btn btn-default"
                    :on-click (fn [e]
                                (reset! new-editing? true))}
           [:i {:class "fa fa-plus"}] " Add"])))))

(defn VehiclesTools
  [vehicle]
  (let [old-editing? (r/cursor state [:edit-vehicle-state :editing?])
        edit-vehicle (r/cursor state [:edit-vehicle-state :edit-vehicle])
        form-target (r/cursor state [:form-target])]
    (fn [vehicle]
      [:div
       [:a {:on-click
            (fn [_]
              (reset! old-editing? true)
              (reset! edit-vehicle
                      (utils/get-by-id
                       @datastore/vehicles
                       (:id vehicle)))
              (reset! form-target [EditVehicleForm
                                   @edit-vehicle]))}
        [:i {:class (str "fa fa-pencil-square-o fa-2 "
                         "fake-link")}]]
       (let [retrieving? (:retrieving? vehicle)
             active? (:active vehicle)
             switch-status
             (fn [_]
               (put! datastore/modify-data-chan
                     {:topic "vehicles"
                      :data [(assoc vehicle :retrieving? true)]})
               (entity-save
                (assoc vehicle
                       :active
                       (not active?))
                (if (datastore/account-manager?)
                  (str (datastore/account-manager-context-uri)
                       "/edit-vehicle")
                  (str utils/base-url "user/" (get-user-id) "/edit-vehicle"))
                "PUT"
                (r/atom {})
                (edit-on-success
                 {:entity-type "vehicle"
                  :entity-get-url-fn
                  (fn [id]
                    (if (datastore/account-manager?)
                      (str
                       (datastore/account-manager-context-uri)
                       "/vehicle/" id)
                      (str utils/base-url
                           "user/"
                           (get-user-id)
                           "/vehicle/"
                           id)))
                  :edit-entity (r/atom {})
                  :alert-success (r/atom {})})
                (fn [_]
                  (.log js/console "Something unexpected occured"))))]
         (if retrieving?
           [:i {:class (str "fa fa-2 fa-spinner fa-pulse")}]
           [:a {:on-click
                switch-status
                :class "fake-link"}
            (if active?
              "Deactivate"
              "Activate")]))])))

(defn VehiclesPanel
  [vehicles]
  (let [current-vehicle (r/cursor state [:current-vehicle])
        form-target (r/cursor state [:form-target])
        sort-keyword (r/atom :make)
        sort-reversed? (r/atom false)
        current-page (r/atom 1)
        page-size 15
        selected-filter (r/atom "Active")
        filters {"Active"   {:filter-fn :active}
                 "Deactivated" {:filter-fn (comp not :active)}}
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
       @form-target
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
                            ["Fuel Type" :gas_type #(str (:gas_type %)
                                                         (when
                                                             (contains?
                                                              #{"87" "91"}
                                                              (:gas_type %)))
                                                         " Octane")]
                            ["Top Tier Only?" :only_top_tier
                             #(if (:only_top_tier %)
                                "Yes"
                                "No")]
                            (when (datastore/account-manager?)
                              ["User"
                               #(:name
                                 (utils/get-by-id @portal-cljs.datastore/users
                                                  (:user_id %)))
                               #(:name
                                 (utils/get-by-id @portal-cljs.datastore/users
                                                  (:user_id %)))])
                            (when-not (datastore/is-child-user?)
                              [""
                               (constantly true)
                               (fn [vehicle] [VehiclesTools vehicle])])]}
             (get-current-vehicles-page vehicles)]])]]
       (when-not (empty? vehicles)
         [:div {:class "row"}
          [:div {:class "col-lg-12"}
           [TablePager
            {:total-pages (count (paginated-vehicles vehicles))
             :current-page current-page
             :on-click table-pager-on-click}]]])])))
