(defproject portal-cljs "0.3.0-SNAPSHOT"
  :description "Purple Portal client. Utilizes to portal-service API"
  :url "http://dashboard.purpleapp.com"
  :dependencies [[cljsjs/moment "2.10.6-4"]
                 [cljsjs/pikaday "1.4.0-1"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0-rc"]
                 [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]
            [lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.4-7"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["release"]
  :target-path "target"
  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src"]
             :figwheel {:on-jsload "portal-cljs.core/login"}
             :compiler {:main portal-cljs.dev
                        :output-to "resources/public/js/portal_cljs.js"
                        :output-dir "resources/public/js/out"
                        :asset-path "js/out"
                        :optimizations :none
                        :source-map true
                        :verbose true}}
            {:id "release"
             :source-paths ["src"]
             :compiler {:main portal-cljs.core
                        :output-to "../portal-service/src/public/js/portal_cljs.js"
                        :optimizations :advanced
                        :verbose true}}]})
