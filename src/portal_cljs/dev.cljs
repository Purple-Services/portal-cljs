(ns portal-cljs.dev
  (:require [weasel.repl :as repl]
            [portal-cljs.core :as core]))

(when-not (repl/alive?)
  (repl-connect "ws://127.0.0.1:9001"))
