// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.cookies');
goog.require('cljs.core');
goog.require('goog.net.Cookies');
/**
 * Get cookie with name
 */
portal_cljs.cookies.get_cookie = (function portal_cljs$cookies$get_cookie(name){
var cookie = (new goog.net.Cookies(document));
return cookie.get(name);
});
/**
 * Create cookie with name and value with optional max-age
 */
portal_cljs.cookies.set_cookie_BANG_ = (function portal_cljs$cookies$set_cookie_BANG_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___21529 = arguments.length;
var i__21233__auto___21530 = (0);
while(true){
if((i__21233__auto___21530 < len__21232__auto___21529)){
args__21239__auto__.push((arguments[i__21233__auto___21530]));

var G__21531 = (i__21233__auto___21530 + (1));
i__21233__auto___21530 = G__21531;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((2) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((2)),(0),null)):null);
return portal_cljs.cookies.set_cookie_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21240__auto__);
});

portal_cljs.cookies.set_cookie_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (name,value,p__21525){
var vec__21526 = p__21525;
var max_age = cljs.core.nth.call(null,vec__21526,(0),null);
var cookie = (new goog.net.Cookies(document));
var max_age__$1 = (function (){var or__20157__auto__ = max_age;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return (-1);
}
})();
return cookie.set(name,value,max_age__$1);
});

portal_cljs.cookies.set_cookie_BANG_.cljs$lang$maxFixedArity = (2);

portal_cljs.cookies.set_cookie_BANG_.cljs$lang$applyTo = (function (seq21522){
var G__21523 = cljs.core.first.call(null,seq21522);
var seq21522__$1 = cljs.core.next.call(null,seq21522);
var G__21524 = cljs.core.first.call(null,seq21522__$1);
var seq21522__$2 = cljs.core.next.call(null,seq21522__$1);
return portal_cljs.cookies.set_cookie_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21523,G__21524,seq21522__$2);
});

/**
 * Change the value and optionally max-age of cookie
 * with name. Returns nil if no cookie was set.
 */
portal_cljs.cookies.change_cookie_BANG_ = (function portal_cljs$cookies$change_cookie_BANG_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___21539 = arguments.length;
var i__21233__auto___21540 = (0);
while(true){
if((i__21233__auto___21540 < len__21232__auto___21539)){
args__21239__auto__.push((arguments[i__21233__auto___21540]));

var G__21541 = (i__21233__auto___21540 + (1));
i__21233__auto___21540 = G__21541;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((2) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((2)),(0),null)):null);
return portal_cljs.cookies.change_cookie_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21240__auto__);
});

portal_cljs.cookies.change_cookie_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (name,value,p__21535){
var vec__21536 = p__21535;
var max_age = cljs.core.nth.call(null,vec__21536,(0),null);
var cookie = (new goog.net.Cookies(document));
var max_age__$1 = (function (){var or__20157__auto__ = max_age;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return (-1);
}
})();
if(cljs.core.truth_(cookie.get(name))){
return cookie.set(name,value,max_age__$1);
} else {
return null;
}
});

portal_cljs.cookies.change_cookie_BANG_.cljs$lang$maxFixedArity = (2);

portal_cljs.cookies.change_cookie_BANG_.cljs$lang$applyTo = (function (seq21532){
var G__21533 = cljs.core.first.call(null,seq21532);
var seq21532__$1 = cljs.core.next.call(null,seq21532);
var G__21534 = cljs.core.first.call(null,seq21532__$1);
var seq21532__$2 = cljs.core.next.call(null,seq21532__$1);
return portal_cljs.cookies.change_cookie_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21533,G__21534,seq21532__$2);
});

/**
 * Remove the cookie with name.
 */
portal_cljs.cookies.remove_cookie_BANG_ = (function portal_cljs$cookies$remove_cookie_BANG_(name){
var cookie = (new goog.net.Cookies(document));
return cookie.remove(name);
});

//# sourceMappingURL=cookies.js.map?rel=1473888607055