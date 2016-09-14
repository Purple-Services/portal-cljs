// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.core');
goog.require('cljs.core');
goog.require('portal_cljs.login');
goog.require('portal_cljs.landing');
portal_cljs.core.login = (function portal_cljs$core$login(){
return portal_cljs.login.login.call(null);
});
goog.exportSymbol('portal_cljs.core.login', portal_cljs.core.login);
portal_cljs.core.init_app = (function portal_cljs$core$init_app(){
return portal_cljs.landing.init_landing.call(null);
});
goog.exportSymbol('portal_cljs.core.init_app', portal_cljs.core.init_app);

//# sourceMappingURL=core.js.map?rel=1473888615273