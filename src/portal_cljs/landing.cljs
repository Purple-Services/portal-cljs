(ns portal-cljs.landing
  (:require [portal-cljs.components :refer [Tab TabContent]]
            [portal-cljs.state :refer [landing-state]]
            [portal-cljs.utils :refer [base-url]]
            [reagent.core :as r]))

(def tab-content-toggle (r/cursor landing-state [:tab-content-toggle]))

(defn top-navbar-comp
  "A navbar for the top of the application
  props is:
  {:nav-bar-collapse ; r/atom boolean
  }"
  []
  (let [nav-bar-collapse (r/cursor landing-state [:nav-bar-collapse])]
    (fn []
      [:div
       [:div {:class "navbar-header"}
        [:button {:type "button"
                  :class "navbar-toggle"
                  :on-click #(do (.preventDefault %)
                                 (swap! nav-bar-collapse not))
                  :data-toggle "collapse"
                  :data-target ".navbar-collapse"}
         [:span {:class "sr-only"} "Toggle Navigation"]
         [:span {:class "icon-bar"}]
         [:span {:class "icon-bar"}]
         [:span {:class "icon-bar"}]]
        [:a {:class "navbar-brand" :href "#"}
         [:img {:src (str base-url "/images/logo.png")
                :alt "PURPLE"
                :class "purple-logo"}]]]
       [:ul {:class "nav navbar-right top-nav hidden-xs hidden-sm"}
        ;; [:li
        ;;  [:form {:class "navbar-form" :role "search"}
        ;;   [search/search-bar {:tab-content-toggle
        ;;                       tab-content-toggle}]]]
        [:li
         [:a {:href (str base-url "logout")} "LOG OUT"]]]])))

(defn side-navbar-comp
  "Props contains:
  {
  :tab-content-toggle ; reagent atom, toggles the visibility of tab-content
  :toggle             ; reagent atom, toggles if tab is active
  :toggle-key         ; keyword, the keyword associated with tab in :toggle
  }
  "
  [props]
  (let [nav-bar-collapse (r/cursor landing-state [:nav-bar-collapse])
        on-click-tab (fn []
                       (.scrollTo js/window 0 0)
                       (reset! nav-bar-collapse true))]
    (fn []
      [:div {:class (str "collapse navbar-collapse sidebar-nav "
                         (when-not @nav-bar-collapse
                           "in"))}
       ;; navbar-ex1-collapse
       [:ul {:class "nav navbar-nav side-nav side-nav-color"}
        [:li {:class "hidden-lg hidden-md"}
         [:a {:href (str base-url "logout")} "LOG OUT"]]
        [Tab {:default? true
              :toggle-key :users-view
              :toggle (:tab-content-toggle props)
              :on-click-tab on-click-tab}
         [:div "USERS"]]
        [Tab {:default? false
              :toggle-key :vehicles-view
              :toggle (:tab-content-toggle props)
              :on-click-tab on-click-tab}
         [:div "VEHICLES"]]
        [Tab {:default? false
              :toggle-key :past-invoices-view
              :toggle (:tab-content-toggle props)
              :on-click-tab on-click-tab}
         [:div "PAST INVOICES"]]
        [Tab {:default? false
              :toggle-key :billing-view
              :toggle (:tab-content-toggle props)
              :on-click-tab on-click-tab}
         [:div "BILLING"]]
        ]])))

;; based on https://github.com/IronSummitMedia/startbootstrap-sb-admin
(defn app
  []
  (let []
    (fn []
      [:div {:id "wrapper"}
       [:nav {:class (str "navbar navbar-default navbar-fixed-top "
                          "navbar-inverse nav-bar-color")
              :role "navigation"}
        [top-navbar-comp {}]
        [side-navbar-comp {:tab-content-toggle tab-content-toggle}]]
       [:div {:id "page-wrapper"
              :class "page-wrapper-color"}
        [:div {:class "container-fluid tab-content"}
         ;; users-view
         [TabContent
          {:toggle (r/cursor tab-content-toggle [:users-view])}
          [:div
           [:div {:class "row"}
            [:div {:class "col-lg-12"}
             [:div
              [:h3 "Users View placeholder"]
              ]]]]]
         ;; vehicles page
         [TabContent
          {:toggle (r/cursor tab-content-toggle [:vehicles-view])}
          [:div {:class "row"}
           [:div {:class "col-lg-12"}
            [:div
             [:h3 "Vehicles view placeholder"]]]]]
         ;; past invoices
         [TabContent
          {:toggle (r/cursor tab-content-toggle [:past-invoices-view])}
          [:div {:class "row"}
           [:div {:class "col-lg-12"}
            [:div
             [:h3 "Past invoices placeholder"]]]]]
         ;; billing page
         [TabContent
          {:toggle (r/cursor tab-content-toggle [:billing-view])}
          [:div {:class "row"}
           [:div {:class "col-lg-12"}
            [:div
             [:h3 "billing placeholder"]]]]]]]])))

(defn init-landing
  []
  (r/render-component [app] (.getElementById js/document "app")))
