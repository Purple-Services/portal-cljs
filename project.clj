(defproject portal-cljs "0.1.0-SNAPSHOT"
  :description "Purple Portal client. Utilizes to portal-service API"
  :url "http://dashboard.purpleapp.com"
  :dependencies [[crate "0.2.5"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]
            [lein-cljsbuild "1.1.4"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src"]
             :compiler {:main portal-cljs.dev
                        :output-to "out/portal_cljs.js"
                        :output-dir "out"
                        :optimizations :none
                        :source-map true
                        :verbose true}}
            {:id "release"
             :source-paths ["src"]
             :compiler {:main portal-cljs.core
                        :output-to "../portal-service/src/public/js/portal_cljs.js"
                        :optimizations :advanced
                        :verbose true}}]})
