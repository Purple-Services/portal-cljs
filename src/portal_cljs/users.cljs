(ns portal-cljs.users
  (:require [cljs.core.async :refer [put!]]
            [portal-cljs.components :refer [TableFilterButtonGroup
                                            TablePager RefreshButton
                                            DynamicTable TextInput
                                            FormSubmit FormGroup
                                            SubmitDismissConfirmGroup
                                            ConfirmationAlert
                                            ]]
            [portal-cljs.cookies :refer [get-user-id]]
            [portal-cljs.datastore :as datastore]
            [portal-cljs.forms :refer [entity-save edit-on-success
                                       edit-on-error]] 
            [portal-cljs.utils :as utils]
            [portal-cljs.xhr :refer [process-json-response retrieve-url]]
            [reagent.core :as r]))

(def default-form-target
  [:div {:style {:display "none"}}])

(def default-new-user {:email ""
                       :name ""
                       :phone_number ""})

(def state (r/atom {:current-user nil
                    :alert-success ""
                    :add-user-state {:new-user default-new-user
                                     :editing? false
                                     :confirming? false
                                     :retrieving? false}
                    :edit-user-state {:edit-user default-new-user
                                      :confrming? false
                                      :retrieving? false
                                      :editing? false}
                    :form-target default-form-target}))
(defn reset-editing-atoms!
  []
  (reset! (r/cursor state [:add-user-state :editing?]) false)
  (reset! (r/cursor state [:edit-user-state :editing?]) false))

(defn UserFormComp
  [{:keys [user errors]}]
  (fn [{:keys [user errors]}]
    (let [email (r/cursor user [:email])
          name (r/cursor user [:name])
          phone-number (r/cursor user [:phone_number])
          editing-current-user? (r/cursor state [:edit-user-state :editing?])]
      [:div {:class "row"}
       (when-not @editing-current-user?
         [:div {:class "col-lg-4 col-sm-4"}
          [FormGroup {:label "email"
                      :errors (:email @errors)}
           [TextInput {:value @email
                       :placeholder "Email Address"
                       :on-change #(reset! email
                                           (utils/get-input-value %))}]]])
       [:div {:class "col-lg-4 col-sm-4"}
        [FormGroup {:label "name"
                    :errors (:name @errors)}
         [TextInput {:value @name
                     :placeholder "User's Full Name"
                     :on-change #(reset! name
                                         (utils/get-input-value %))}]]]
       [:div {:class "col-lg-4 col-sm-4"}
        [FormGroup {:label "phone-number"
                    :errors (:phone_number @errors)}
         [TextInput {:value @phone-number
                     :placeholder "User's Phone Number"
                     :on-change #(reset! phone-number
                                         (utils/get-input-value %))}]]]])))

;; This is a stub function in case transformations need to be added later
(defn server-user->form-user
  [user]
  (let [{:keys [email name phone_number]} user]
    user))

(defn form-user->server-user
  [user]
  (let [{:keys [email name phone_number]} user]
    user))

(defn EditUserForm
  [user]
  (let [edit-user-state (r/cursor state [:edit-user-state])
        retrieving? (r/cursor edit-user-state [:retrieving?])
        confirming? (r/cursor edit-user-state [:confirming?])
        editing? (r/cursor edit-user-state [:editing?])
        errors (r/atom {})
        alert-success (r/atom "")]
    (fn [user]
      (let [current-user user ; before changes made to the the user
            edit-user (r/cursor edit-user-state [:edit-user])
            ;; helper fns
            diff-key-str {:name "Name"
                          :phone_number "Phone Number"}
            diff-msg-gen (fn [edit current]
                           (utils/diff-message
                            edit
                            current
                            (select-keys
                             diff-key-str (concat (keys edit)
                                                  (keys current)))))
            diff-msg-gen-user (fn [edit-user current-user]
                                (diff-msg-gen
                                 (server-user->form-user
                                  edit-user)
                                 (server-user->form-user
                                  current-user)))
            confirm-msg (fn []
                          [:div "The following changes will be made "
                           (map (fn [el]
                                  ^{:key el}
                                  [:h4 el])
                                (diff-msg-gen-user
                                 (form-user->server-user
                                  @edit-user)
                                 current-user))])
            submit-on-click (fn [e]
                              (.preventDefault e)
                              (if @editing?
                                (if (every? nil?
                                            (diff-msg-gen-user
                                             @edit-user
                                             current-user))
                                  ;; there isn't a diff message,no changes
                                  (reset! editing? false)
                                  ;; there is a diff message, confirm changes
                                  (reset! confirming? true))
                                (do
                                  ;; reset edit user
                                  (reset! edit-user
                                          (server-user->form-user
                                           @user))
                                  (reset! alert-success "")
                                  (reset! editing? true))))
            confirm-on-click (fn [_]
                               (entity-save
                                (form-user->server-user @edit-user)
                                (str (datastore/account-manager-context-uri)
                                     "/edit-user")
                                "PUT"
                                retrieving?
                                (edit-on-success
                                 {:entity-type "user"
                                  :entity-get-url-fn
                                  (fn [id]
                                    (str
                                     (datastore/account-manager-context-uri)
                                     "/user/" id))
                                  :edit-entity edit-user
                                  :alert-success alert-success
                                  :aux-fn
                                  (fn []
                                    (reset! confirming? false)
                                    (reset! retrieving? false)
                                    (reset! editing? false))})
                                (edit-on-error edit-user
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
                         ;; reset edit-user
                         (reset! edit-user
                                 current-user)
                         ;; reset confirming
                         (reset! confirming? false))]
        [:div {:class "form-border"
               :style {:margin-top "15px"}}
         [:form
          [UserFormComp {:user edit-user
                         :errors errors}]
          [:div {:class "row"}
           [:div {:class "col-lg-6 col-sm-6"}
            [SubmitDismissConfirmGroup
             {:confirming? confirming?
              :editing? editing?
              :retrieving? retrieving?
              :submit-fn submit-on-click
              :dismiss-fn dismiss-fn
              :edit-btn-content "Create User"}]
            (when @confirming?
              [ConfirmationAlert
               {:confirmation-message confirm-msg
                :cancel-on-click dismiss-fn
                :confirm-on-click confirm-on-click
                :retrieving? retrieving?}])]]]]))))

(defn AddUserForm
  []
  (let [add-user-state (r/cursor state [:add-user-state])
        new-user (r/cursor add-user-state [:new-user])
        retrieving? (r/cursor add-user-state [:retrieving?])
        confirming? (r/cursor add-user-state [:confirming?])
        editing? (r/cursor add-user-state [:editing?])
        errors (r/atom {})
        alert-success (r/atom "")]
    (fn []
      (let [;; helper fns
            confirm-msg (fn [new-user]
                          (let [{:keys [email name]} new-user]
                            [:div
                             [:p (str "Are you sure you want to create a new "
                                      "user with the following values?")]
                             [:h4 "Email: " email]
                             [:h4 "Full Name: " name]
                             [:p (str "A set password email wil be sent to "
                                      email ". Their account will be pending "
                                      "until they have set their password."
                                      )]]))
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
                                @new-user
                                (str (datastore/account-manager-context-uri)
                                     "/add-user")
                                "POST"
                                retrieving?
                                (edit-on-success
                                 {:entity-type "user"
                                  :entity-get-url-fn
                                  (fn [id]
                                    (str (datastore/account-manager-context-uri)
                                         "/user/" id))
                                  :edit-entity new-user
                                  :alert-success alert-success
                                  :aux-fn
                                  (fn []
                                    (reset! confirming? false)
                                    (reset! retrieving? false)
                                    (reset! editing? false))})
                                (edit-on-error new-user
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
                         (reset! new-user default-new-user)
                         ;; reset confirming
                         (reset! confirming? false))]
        [:div {:class "form-border"
               :style {:margin-top "15px"}}
         [:form
          [UserFormComp {:user new-user
                         :errors errors}]
          [:div {:class "row"}
           [:div {:class "col-lg-12"}
            [SubmitDismissConfirmGroup
             {:confirming? confirming?
              :editing? editing?
              :retrieving? retrieving?
              :submit-fn submit-on-click
              :dismiss-fn dismiss-fn
              :edit-btn-content "Create User"}]
            (when @confirming?
              [ConfirmationAlert
               {:confirmation-message (fn [] (confirm-msg @new-user))
                :cancel-on-click dismiss-fn
                :confirm-on-click confirm-on-click
                :retrieving? retrieving?}])]]]]))))

(defn AddUser
  [state]
  (let [add-user-state (r/cursor state [:add-user-state])
        new-editing? (r/cursor add-user-state [:editing?])
        old-editing? (r/cursor state [:edit-user-state :editing?])
        form-target (r/cursor state [:form-target])
        new-user (r/cursor add-user-state [:new-user])]
    (fn [state]
      (when-not (datastore/is-child-user?)
        (when @new-editing?
          (reset! new-user default-new-user)
          (when-not @old-editing?
            (reset! form-target [AddUserForm]))
          default-form-target)
        (when-not (or @new-editing?
                      @old-editing?)
          (reset! form-target default-form-target)
          [:button {:type "button"
                    :class "btn btn-default"
                    :on-click (fn [e]
                                (reset! new-editing? true))}
           [:i {:class "fa fa-plus"}] " Add"])))))

(defn UsersTools
  [user]
  (let [old-editing? (r/cursor state [:edit-user-state :editing?])
        edit-user (r/cursor state [:edit-user-state :edit-user])
        form-target (r/cursor state [:form-target])]
    (fn [user]
      [:div
       [:a {:on-click
            (fn [_]
              (reset! old-editing? true)
              (reset! edit-user
                      (utils/get-by-id
                       @datastore/users
                       (:id user)))
              (reset! form-target [EditUserForm
                                   @edit-user]))}
        [:i {:class (str "fa fa-pencil-square-o fa-2 "
                         "fake-link")}]]
       (when-not (:is-manager user)
         (let [retrieving? (:retrieving? user)
               active? (:active user)
               switch-status
               (fn [_]
                 (put! datastore/modify-data-chan
                       {:topic "users"
                        :data [(assoc user :retrieving? true)]})
                 (entity-save
                  (assoc user
                         :active
                         (not active?))
                  (str (datastore/account-manager-context-uri)
                       "/edit-user")
                  "PUT"
                  (r/atom {})
                  (edit-on-success
                   {:entity-type "user"
                    :entity-get-url-fn
                    (fn [id]
                      (str
                       (datastore/account-manager-context-uri)
                       "/user/" id))
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
                "Activate")])))])))

(defn UsersPanel
  [users]
  (let [current-user (r/cursor state [:current-user])
        sort-keyword (r/atom :make)
        sort-reversed? (r/atom false)
        current-page (r/atom 1)
        page-size 15
        selected-filter (r/atom "Active")
        filters {"Pending"  {:filter-fn :pending}
                 "Active" {:filter-fn :active}
                 "Deactivated" {:filter-fn (comp not :active)}}
        processed-users (fn [users]
                          (->
                           users
                           ((utils/filter-fn filters @selected-filter))
                           ((utils/sort-fn @sort-reversed? @sort-keyword))))
        paginated-users (fn [users]
                          (-> users
                              processed-users
                              (utils/paginate-items page-size)))
        get-current-users-page (fn [users]
                                 (utils/get-page
                                  (paginated-users users)
                                  @current-page))
        table-pager-on-click (fn [users]
                               (reset! current-user
                                       (first
                                        (get-current-users-page users))))
        ;; datastore doesn't recognize D ops, this is a hack for now
        refresh-fn (fn [refreshing?]
                     (reset! refreshing? true)
                     (datastore/retrieve-users!
                      {:after-response
                       (fn []
                         (reset! refreshing? false))}))]
    (fn [users]
      (when (nil? @current-user)
        (table-pager-on-click users))
      [:div {:class "panel panel-default"}
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         [:div {:class "btn-toolbar"
                :role "toolbar"}
          [TableFilterButtonGroup {:on-click (fn [_]
                                               (reset! current-page 1))
                                   :filters filters
                                   :data users
                                   :selected-filter selected-filter}]
          [:div {:class "btn-group"
                 :role "group"}
           [RefreshButton {:refresh-fn refresh-fn}]]
          [:div {:class "btn-group"
                 :role "group"}]
          [AddUser state]]]]
       @(r/cursor state [:form-target])
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         (if (empty? users)
           [:div [:h3 "No users currently associated with account"]]
           [:div {:class "table-responsive"}
            [DynamicTable {:current-item current-user
                           :on-click (fn [_ user]
                                       (reset! current-user user)
                                       (reset! (r/cursor state
                                                         [:alert-success]) ""))
                           :sort-keyword sort-keyword
                           :sort-reversed? sort-reversed?
                           :table-vecs
                           [["Name" :name :name]
                            ["Email" :email :email]
                            ["Phone Number" :phone_number :phone_number]
                            ["Manager?" :is-manager #(if (:is-manager %)
                                                       "Yes"
                                                       "No")]
                            ["Created" :timestamp_created
                             #(utils/unix-epoch->fmt
                               (:timestamp_created %) "M/D/YYYY")]
                            [""
                             (constantly true)
                             (fn [user] [UsersTools user])]]}
             (get-current-users-page users)]])]]
       [:div {:class "row"}
        [:div {:class "col-lg-12"}
         [TablePager
          {:total-pages (count (paginated-users users))
           :current-page current-page
           :on-click table-pager-on-click}]]]])))
