(ns portal-cljs.utils)

(def base-url (-> (.getElementById js/document "base-url")
                  (.getAttribute "value")))

;; widely published fn,
;; see:
;; https://dzone.com/articles/clojure-apply-function-each
;;http://blog.jayfields.com/2011/08/clojure-apply-function-to-each-value-of.html
(defn update-values [m f & args]
  "Update all values in map with f and args"
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn get-input-value
  "Get the field value of a form. Useful in on-change"
  [field]
  (-> field
      (aget "target")
      (aget "value")))

(defn clj->js-string
  "Take a clojure map and convert it to a json string. Useful for sending
  JSON to a server"
  [m]
  (js/JSON.stringify (clj->js m)))

(defn select-toggle-key!
  [toggle toggle-key]
  "Given an atom toggle and toggle-key, select only toggle-key"
  (swap! toggle update-values
         (fn [el] false))
  (swap! toggle
         assoc toggle-key true))

(defn continuous-update
  "Call f continuously every n seconds"
  [f n]
  (js/setTimeout #(do (f)
                      (continuous-update f n))
                 n))

(defn get-by-id
  "Get an element by its id from coll."
  [coll id]
  (first (filter #(= (:id %) id) coll)))

(defn parse-timestamp
  "Given a mysql timestamp, convert it to unix epoch seconds"
  [timestamp]
  (quot (.parse js/Date timestamp) 1000))

(defn sort-fn
  [sort-reversed? sort-keyword]
  (if sort-reversed?
    (partial sort-by sort-keyword)
    (comp reverse (partial sort-by sort-keyword))))

(defn filter-fn
  "Given a map of filters and the select-filter key, return a filtering fn.

  filters are of the format:
  {<str> {:filter-fn <fn>}}

  ex:
  {\"Active\"   {:filter-fn :active}
   \"Inactive\" {:filter-fn (comp not :active)}}
  "
  [filters selected-filter]
  (fn [items]
    (filter (:filter-fn
             (get filters selected-filter))
            items)))

(defn paginate-items
  "Given a list of items, partition them into page-size groups"
  [items page-size]
  (partition-all page-size items))

(defn get-page
  "Given a coll of paginated items, get coll n. Return empty
  list if n does not exists"
  [coll n]
  (nth coll (- n 1) '()))
