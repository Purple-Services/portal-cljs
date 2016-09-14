(ns portal-cljs.core
  (:require [portal-cljs.login :as login]
            [portal-cljs.landing :as landing]))

(defn ^:export login
  []
  (login/login))


(defn ^:export init-app
  []
  (landing/init-landing))
