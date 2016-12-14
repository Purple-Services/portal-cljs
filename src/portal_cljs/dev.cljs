(ns portal-cljs.dev
  (:require [portal-cljs.core :as core]
            [portal-cljs.state :as state]
            [portal-cljs.utils :as utils]
            [reagent.core :as r]))

(defn ^:export on-jsload
  []
  (core/init-app)
  (utils/select-toggle-key! (r/cursor state/landing-state [:tab-content-toggle])
                            :vehicles-view))
