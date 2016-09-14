// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.utils');
goog.require('cljs.core');
portal_cljs.utils.base_url = document.getElementById("base-url").getAttribute("value");
portal_cljs.utils.update_values = (function portal_cljs$utils$update_values(var_args){
var args__21239__auto__ = [];
var len__21232__auto___23779 = arguments.length;
var i__21233__auto___23780 = (0);
while(true){
if((i__21233__auto___23780 < len__21232__auto___23779)){
args__21239__auto__.push((arguments[i__21233__auto___23780]));

var G__23781 = (i__21233__auto___23780 + (1));
i__21233__auto___23780 = G__23781;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((2) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((2)),(0),null)):null);
return portal_cljs.utils.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21240__auto__);
});

portal_cljs.utils.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){

return cljs.core.reduce.call(null,(function (r,p__23775){
var vec__23776 = p__23775;
var k = cljs.core.nth.call(null,vec__23776,(0),null);
var v = cljs.core.nth.call(null,vec__23776,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

portal_cljs.utils.update_values.cljs$lang$maxFixedArity = (2);

portal_cljs.utils.update_values.cljs$lang$applyTo = (function (seq23772){
var G__23773 = cljs.core.first.call(null,seq23772);
var seq23772__$1 = cljs.core.next.call(null,seq23772);
var G__23774 = cljs.core.first.call(null,seq23772__$1);
var seq23772__$2 = cljs.core.next.call(null,seq23772__$1);
return portal_cljs.utils.update_values.cljs$core$IFn$_invoke$arity$variadic(G__23773,G__23774,seq23772__$2);
});

/**
 * Get the field value of a form. Useful in on-change
 */
portal_cljs.utils.get_input_value = (function portal_cljs$utils$get_input_value(field){
return ((field["target"])["value"]);
});
/**
 * Take a clojure map and convert it to a json string. Useful for sending
 *   JSON to a server
 */
portal_cljs.utils.clj__GT_js_string = (function portal_cljs$utils$clj__GT_js_string(m){
return JSON.stringify(cljs.core.clj__GT_js.call(null,m));
});

//# sourceMappingURL=utils.js.map?rel=1473888611576