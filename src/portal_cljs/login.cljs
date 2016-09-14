(ns portal-cljs.login
  (:require [clojure.string :as s]
            [portal-cljs.components :refer [FormGroup TextInput PasswordInput
                                            FormSubmit ErrorComp]]
            [portal-cljs.cookies :as cookies]
            [portal-cljs.utils :refer [base-url get-input-value clj->js-string]]
            [portal-cljs.xhr :refer [retrieve-url xhrio-wrapper
                                     process-json-response]]
            [reagent.core :as r]))

(defn process-login
  "Process the response used when logging in"
  [error-message retrieving? response]
  (let [success (:success response)]
    (when success
      (aset js/window "location" base-url))
    (when-not success
      (reset! retrieving? false)
      (reset! error-message (str "Error: " (:message response))))))

(defn login-form
  "A form for logging into the dashboard"
  []
  (let [email (r/atom "")
        password (r/atom "")
        error-message    (r/atom "")
        retrieving? (r/atom false)]
    (fn []
      [:div {:class "fluid-container"}
       [:div {:class "row"
              :style {:padding-top "8em"}}
        [:div {:class "col-lg-4"}]
        [:div {:class "col-lg-4"}
         [:div {:class "panel panel-default"}
          [:div {:style {:background-color "#4E4084"
                         :padding-top "1em"}}
           [:img {:src (str base-url "images/logo.png")
                  :alt "PURPLE"
                  :class "purple-login-logo"
                  :style {:display "block"
                          :margin "0 auto"}}]]
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
                            (reset! retrieving? true)
                            (reset! error-message "")
                            (retrieve-url
                             (str base-url "login")
                             "POST"
                             (clj->js-string {:email @email
                                              :password @password})
                             (process-json-response
                              (partial
                               process-login error-message retrieving?))))}]
             (when (not (s/blank? @error-message))
               [ErrorComp {:error-message @error-message}])]]]]]]])))

(defn login
  "Login form"
  []
  (r/render-component [login-form] (.getElementById js/document "login")))
