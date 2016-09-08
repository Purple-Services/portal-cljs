(ns portal-cljs.core
  (:require [portal-cljs.login :as login]))

(defn ^:export login
  []
  (login/login))
