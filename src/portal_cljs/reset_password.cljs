(ns portal-cljs.reset-password
  (:require [clojure.string :as string]
            [portal-cljs.components :refer [FormGroup TextInput PasswordInput
                                            FormSubmit MessageComp]]
            [portal-cljs.login :refer [login-form]]
            [portal-cljs.utils :refer [base-url get-input-value clj->js-string]]
            [portal-cljs.xhr :refer [retrieve-url xhrio-wrapper
                                     process-json-response]]
            [reagent.core :as r]))

(def state (r/atom {:retrieving? false
                    :error-message ""
                    :success-message ""}))

(def retrieving? (r/cursor state [:retrieving?]))
(def success-message (r/cursor state [:success-message]))
(def error-message (r/cursor state [:error-message]))

(defn reset-state! []
  (reset! retrieving? true)
  (reset! error-message "")
  (reset! success-message ""))

(defn process-reset-password
  "Process the response when reset password is clicked"
  [response]
  (let [success (:success response)]
    (when success
      (reset! retrieving? false)
      (r/render-component
       [login-form]
       (.getElementById js/document "reset-password")))
    (when-not success
      (reset! retrieving? false)
      (reset! error-message (str "Error: " (:message response))))))

(defn reset-password-form
  "A form for reseting a user's password"
  []
  (let [password (r/atom "")
        confirm-password (r/atom "")
        email (.getAttribute (.getElementById js/document "email") "data-email")
        reset-key  (.getAttribute
                    (.getElementById js/document "reset-key") "data-reset-key")]
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
            [:h4 "Please enter a new password for "
             [:span {:class "light-purple-color"} email]]
            [:form
             [:div {:class "form-group"
                    :style {:margin-left "1px"}}
              [PasswordInput {:value @password
                              :default-value @password
                              :placeholder "password"
                              :on-change #(reset!
                                           password
                                           (get-input-value %))}]]
             [:div {:class "form-group"
                    :style {:margin-left "1px"}}
              [PasswordInput {:value @confirm-password
                              :default-value @confirm-password
                              :placeholder "confirm password"
                              :on-change #(reset!
                                           confirm-password
                                           (get-input-value %))}]]
             [FormSubmit {:retrieving? retrieving?
                          :text "RESET PASSWORD"
                          :on-click
                          (fn [event]
                            (.preventDefault event)
                            (reset-state!)
                            (if (= @password @confirm-password)
                              (retrieve-url
                               (str base-url "reset-password")
                               "POST"
                               (clj->js-string {:password @password
                                                :reset-key reset-key})
                               (process-json-response
                                process-reset-password))
                              (do
                                (reset! retrieving? false)
                                (reset! error-message
                                        (str "Error: Passwords do not match.")))
                              ))}]
             (when-not (string/blank? @error-message)
               [MessageComp {:message @error-message
                             :type "error"}])
             (when-not (string/blank? @success-message)
               [MessageComp {:message @success-message
                             :type "success"}])]]]]]]])))

(defn reset-password
  "Reset password form"
  []
  (r/render-component [reset-password-form]
                      (.getElementById js/document "reset-password")))

