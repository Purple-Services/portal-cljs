(ns portal-cljs.utils)

(def base-url (-> (.getElementById js/document "base-url")
                  (.getAttribute "value")))
