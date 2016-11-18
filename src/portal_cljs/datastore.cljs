(ns portal-cljs.datastore
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan pub put! sub <! >!]]
            [clojure.set :refer [difference intersection project union
                                 subset?]]
            [portal-cljs.cookies :refer [get-user-id account-manager?]]
            [portal-cljs.state :refer [landing-state]]
            [portal-cljs.utils :refer [base-url continuous-update get-by-id]]
            [portal-cljs.xhr :refer [process-json-response retrieve-url]]
            [reagent.core :as r]))

;; This namespace contains the global state of the app and the fn's associated
;; with managing this data.

;; There are a few large sets of data, stored in an r/atom, upon which the app
;; is built around. These include sets such as users and couriers. The data in
;; these sets is managed by sync-state!
;;
;; data flow for large sets
;;
;; reagent atoms are used to read data
;; r/atom -> components
;;
;; core.async channels are used to modify data
;; r/atom <- sync-state! <- chan <- component, fn's, etc.
;;
;; Currently, new data is put! on 'modify-data-chan'
;; as a map. :topic corresponds to the dataset atom to update.
;; :data is a coll of maps.
;;
;; ex.:
;; (put! modify-data-chan
;;       {:topic "orders"
;;        :data order})
;;
;; "orders" is the name of atom which contains the data set.
;;  order   is a vector with one order map

(defn set-ids
  "Given a set, return a set of just the vals for key :id"
  [xrel]
  (set (map :id xrel)))

(defn get-by-ids
  "Given a set of ids, return the subset of s1 :id vals that are contained
  in ids"
  [ids s1]
  (filter #(contains? ids (:id %)) s1))

;; this only takes care of situations where CRU and not D can happen!
(defn sync-sets
  "Given a set s1 and s2 of maps where each map has a unique val for its :id
  keyword, return a new set with maps from s1 updated with s2.
  'updated' is defined as the union of:

  stable set - maps in s1 whose :id's vals are not in s2
  mod set    - maps whose :id's vals are shared between s1 and s2,
               taken from s2
  new set    - maps in s2 whose :id's vals are not in s1"
  [s1 s2]
  (let [new-ids    (difference (project s2 [:id]) (project s1 [:id]))
        mod-ids    (intersection (project s1 [:id]) (project s2 [:id]))
        stable-ids (difference (project s1 [:id]) mod-ids)
        new-set    (get-by-ids (set-ids new-ids) s2)
        stable-set (get-by-ids (set-ids stable-ids) s1)
        mod-set    (get-by-ids (set-ids mod-ids) s2)]
    (set (union stable-set mod-set new-set))))

;; Not currently utilized. Included for possible future use
(defn sync-element!
  "Given an atom and el, sync the element with the one in atom. If the element
  a  does not exist in atom, add it to the set. If the element is the same as 
  atom content, do nothing. If the element is different from atom content, 
  update the atom with new element.
  
  Assumes atom is a set composed of maps with  unique values for the key :id"
  [atom el]
  (let [atom-el (get-by-id @atom (:id el))]
    (cond (nil? atom-el) (swap! atom conj el)
          (not= atom-el el) (reset! atom (conj (disj @atom atom-el) el))
          :else nil)))

(defn sync-state!
  "Sync the state of atom with data from chan. atom is a set of maps. It should
  be a reagent atom so that any components derefing atom automatically update.
  Each map is assumed to have an :id key with a unique val. chan is a sub 
  channel where data is sent as the same format as atom. New values are added
  to atom, old values are used to modify the current state.

  example usage: 

  (def modify-data-chan (chan))
  (def read-data-chan (pub modify-data-chan :topic))

  (def users (r/atom #{}))

  (sync-state users (sub read-data-chan \"users\" (chan)))

  ;; put data on the channel
  (put! modify-data-chan {:topic \"users\"
                          :data #{{:id 1 :active? false}
                                  {:id 2 :active? true}}})"
  [atom chan]
  (go-loop [data (:data (<! chan))]
    (let [old-state @atom
          new-state (sync-sets old-state data)]
      (reset! atom new-state)
      (reset-meta! atom {:processed true}))
    (recur (:data (<! chan)))))

;; below are the definitions for the app's datastore

(def modify-data-chan (chan))
(def read-data-chan (pub modify-data-chan :topic))

;; object sets
(def vehicles (r/atom #{}))
(def orders (r/atom #{}))
(def users (r/atom #{}))

(defn retrieve-vehicles!
  [& {:keys [after-response]
      :or {after-response (constantly true)}}]
  (retrieve-url
   (str base-url "user/" (get-user-id) "/vehicles")
   "GET"
   {}
   (process-json-response
    (fn [response]
      (when-not (empty? response)
        (put! modify-data-chan
              {:topic "vehicles"
               :data response}))
      (after-response)))))

(defn retrieve-orders!
  [& {:keys [after-response]
      :or {after-response (constantly true)}}]
  (retrieve-url
   (str base-url "user/" (get-user-id) "/orders")
   "GET"
   {}
   (process-json-response
    (fn [response]
      (when-not (empty? response)
        (put! modify-data-chan
              {:topic "orders"
               :data response}))
      (after-response)))))

(defn retrieve-users!
  [& {:keys [after-response]
      :or {after-response (constantly true)}}]
  (retrieve-url
   (str base-url "account-manager/" (get-user-id) "/users")
   "GET"
   {}
   (process-json-response
    (fn [response]
      (when-not (empty? response)
        (put! modify-data-chan
              {:topic "users"
               :data response}))
      (after-response)))))

(defn retrieve-email!
  []
  (retrieve-url
   (str base-url "user/" (get-user-id) "/email")
   "GET"
   {}
   (process-json-response
    (fn [response]
      (when-not (empty? response)
        (reset! (r/cursor landing-state [:user-email]) (:email response)))))))

(defn init-datastore
  "Initialize the datastore for the app. Should be called once when launching
  the app."
  []
  (let [user-id (get-user-id)]
    ;; get the user email to display in info bar
    (retrieve-email!)
    ;; vehicles
    (sync-state! vehicles (sub read-data-chan "vehicles" (chan)))
    (retrieve-vehicles!)
    ;; orders
    (sync-state! orders (sub read-data-chan "orders" (chan)))
    (retrieve-orders!)
    ;; users
    (when (account-manager?)
      (sync-state! users (sub read-data-chan "users" (chan)))
      (retrieve-users!))))
