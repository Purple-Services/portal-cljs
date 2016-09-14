(ns portal-cljs.state
  (:require [reagent.core :as r]))

;; Global state is stored here. This namespace should NOT depend on any other
;; namespace in dashboard-cljs. It is solely for storing r/atoms that are
;; needed globally.

(def landing-state (r/atom {:tab-content-toggle {}
                            :nav-bar-collapse true}))
