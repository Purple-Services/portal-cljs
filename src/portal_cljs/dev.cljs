(ns portal-cljs.dev
  (:require [portal-cljs.core :as core]))

(defn ^:export on-jsload
  []
  (core/reset-password))
