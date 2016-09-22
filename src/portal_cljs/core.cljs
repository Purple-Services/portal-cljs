(ns portal-cljs.core
  (:require [portal-cljs.login :as login]
            [portal-cljs.landing :as landing]
            [portal-cljs.reset-password :as reset-password]))

(defn ^:export login
  []
  (login/login))

(defn ^:export init-app
  []
  (landing/init-landing))

(defn ^:export reset-password
  []
  (reset-password/reset-password))
