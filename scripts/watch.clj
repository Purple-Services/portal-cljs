(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'portal-cljs.core
   :output-to "out/portal_cljs.js"
   :output-dir "out"})
