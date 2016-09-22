(ns portal-cljs.login
  (:require [clojure.string :as s]
            [portal-cljs.components :refer [FormGroup TextInput PasswordInput
                                            FormSubmit MessageComp]]
            [portal-cljs.cookies :as cookies]
            [portal-cljs.utils :refer [base-url get-input-value clj->js-string]]
            [portal-cljs.xhr :refer [retrieve-url xhrio-wrapper
                                     process-json-response]]
            [reagent.core :as r]))

(def state (r/atom {:retrieving? false
                    :error-message ""
                    :success-message ""
                    :display-forgot-password? true}))

(def retrieving? (r/cursor state [:retrieving?]))
(def success-message (r/cursor state [:success-message]))
(def error-message (r/cursor state [:error-message]))
(def display-forgot-password? (r/cursor state [:display-forgot-password?]))

(defn reset-state! []
  (reset! retrieving? true)
  (reset! error-message "")
  (reset! success-message ""))

(defn process-login
  "Process the response used when logging in"
  [response]
  (let [success (:success response)]
    (when success
      (aset js/window "location" base-url))
    (when-not success
      (reset! retrieving? false)
      (reset! success-message "")
      (reset! error-message (str "Error: " (:message response))))))

(defn process-forgot-password
  "Process the response used when forgot password is clicked"
  [response]
  (let [success (:success response)]
    (when success
      (reset! display-forgot-password? false)
      (reset! retrieving? false)
      (reset! success-message (:message response)))
    (when-not success
      (reset! retrieving? false)
      (reset! error-message (str "Error: " (:message response))))))

(defn login-form
  "A form for logging into the dashboard"
  []
  (let [email (r/atom "")
        password (r/atom "")]
    (fn []
      [:div {:class "fluid-container"}
       [:div {:class "row purple-login-row"}
        [:div {:class "col-lg-4"}]
        [:div {:class "col-lg-4"}
         [:div {:class "panel panel-default"}
          [:div {:class "purple-div-header"}
           [:img {:src (str base-url "images/logo.png")
                  :alt "PURPLE"
                  :class "purple-login-logo"}]]
          [:div {:class "panel-body"}
           [:div {:id "login-form"}
            [:form
             [:div {:class "form-group"
                    :style {:margin-left "1px"}}
              [TextInput {:value @email
                          :default-value @email
                          :placeholder "email"
                          :on-change #(reset!
                                       email
                                       (get-input-value %))}]]
             [:div {:class "form-group"
                    :style {:margin-left "1px"}}
              [PasswordInput {:value @password
                              :default-value @password
                              :placeholder "password"
                              :on-change #(reset!
                                           password
                                           (get-input-value %))}]]
             [FormSubmit {:retrieving? retrieving?
                          :text "LOGIN"
                          :on-click
                          (fn [event]
                            (.preventDefault event)
                            (reset-state!)
                            (retrieve-url
                             (str base-url "login")
                             "POST"
                             (clj->js-string {:email @email
                                              :password @password})
                             (process-json-response
                              process-login)))}]
             (when (and @display-forgot-password?
                        (not @retrieving?))
               [:a {:href (str base-url "forgot-password")
                    :class "forgot-password"
                    :on-click (fn [event]
                                (.preventDefault event)
                                (reset-state!)
                                (retrieve-url
                                 (str base-url "forgot-password")
                                 "POST"
                                 (clj->js-string {:email @email})
                                 (process-json-response
                                  process-forgot-password)))}
                "Forgot Password?"])
             (when-not (s/blank? @error-message)
               [MessageComp {:message @error-message
                             :type "error"}])
             (when-not (s/blank? @success-message)
               [MessageComp {:message @success-message
                             :type "success"}])]]]]]]])))

(defn login
  "Login form"
  []
  (r/render-component [login-form] (.getElementById js/document "login")))
