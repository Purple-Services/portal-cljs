// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.dev');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('portal_cljs.core');
if(cljs.core.truth_(weasel.repl.alive_QMARK_.call(null))){
} else {
weasel.repl.connect.call(null,"ws://127.0.0.1:9001");
}

//# sourceMappingURL=dev.js.map?rel=1473888615279