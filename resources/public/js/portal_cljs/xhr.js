// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.xhr');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
/**
 * Send a xhr to url using callback and HTTP method.
 */
portal_cljs.xhr.send_xhr = (function portal_cljs$xhr$send_xhr(var_args){
var args__21239__auto__ = [];
var len__21232__auto___28867 = arguments.length;
var i__21233__auto___28868 = (0);
while(true){
if((i__21233__auto___28868 < len__21232__auto___28867)){
args__21239__auto__.push((arguments[i__21233__auto___28868]));

var G__28869 = (i__21233__auto___28868 + (1));
i__21233__auto___28868 = G__28869;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((3) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((3)),(0),null)):null);
return portal_cljs.xhr.send_xhr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21240__auto__);
});

portal_cljs.xhr.send_xhr.cljs$core$IFn$_invoke$arity$variadic = (function (url,callback,method,p__28863){
var vec__28864 = p__28863;
var data = cljs.core.nth.call(null,vec__28864,(0),null);
var headers = cljs.core.nth.call(null,vec__28864,(1),null);
var timeout = cljs.core.nth.call(null,vec__28864,(2),null);
return goog.net.XhrIo.send(url,callback,method,data,headers,timeout);
});

portal_cljs.xhr.send_xhr.cljs$lang$maxFixedArity = (3);

portal_cljs.xhr.send_xhr.cljs$lang$applyTo = (function (seq28859){
var G__28860 = cljs.core.first.call(null,seq28859);
var seq28859__$1 = cljs.core.next.call(null,seq28859);
var G__28861 = cljs.core.first.call(null,seq28859__$1);
var seq28859__$2 = cljs.core.next.call(null,seq28859__$1);
var G__28862 = cljs.core.first.call(null,seq28859__$2);
var seq28859__$3 = cljs.core.next.call(null,seq28859__$2);
return portal_cljs.xhr.send_xhr.cljs$core$IFn$_invoke$arity$variadic(G__28860,G__28861,G__28862,seq28859__$3);
});

/**
 * A callback for processing the xhrio response event. If
 *   response.target.isSuccess() is true, call f on the json response
 */
portal_cljs.xhr.xhrio_wrapper = (function portal_cljs$xhr$xhrio_wrapper(f,response){
var target = response.target;
if(cljs.core.truth_(target.isSuccess())){
return f.call(null,target.getResponseJson());
} else {
return console.log([cljs.core.str("xhrio-wrapper error:"),cljs.core.str((target["lastError_"]))].join(''));
}
});
/**
 * Retrieve and process json response with f from url using HTTP method and json
 *   data. Optionally, define a timeout in ms.
 */
portal_cljs.xhr.retrieve_url = (function portal_cljs$xhr$retrieve_url(var_args){
var args__21239__auto__ = [];
var len__21232__auto___28879 = arguments.length;
var i__21233__auto___28880 = (0);
while(true){
if((i__21233__auto___28880 < len__21232__auto___28879)){
args__21239__auto__.push((arguments[i__21233__auto___28880]));

var G__28881 = (i__21233__auto___28880 + (1));
i__21233__auto___28880 = G__28881;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((4) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((4)),(0),null)):null);
return portal_cljs.xhr.retrieve_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21240__auto__);
});

portal_cljs.xhr.retrieve_url.cljs$core$IFn$_invoke$arity$variadic = (function (url,method,data,f,p__28875){
var vec__28876 = p__28875;
var timeout = cljs.core.nth.call(null,vec__28876,(0),null);
var header = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null));
return portal_cljs.xhr.send_xhr.call(null,url,f,method,data,header,timeout);
});

portal_cljs.xhr.retrieve_url.cljs$lang$maxFixedArity = (4);

portal_cljs.xhr.retrieve_url.cljs$lang$applyTo = (function (seq28870){
var G__28871 = cljs.core.first.call(null,seq28870);
var seq28870__$1 = cljs.core.next.call(null,seq28870);
var G__28872 = cljs.core.first.call(null,seq28870__$1);
var seq28870__$2 = cljs.core.next.call(null,seq28870__$1);
var G__28873 = cljs.core.first.call(null,seq28870__$2);
var seq28870__$3 = cljs.core.next.call(null,seq28870__$2);
var G__28874 = cljs.core.first.call(null,seq28870__$3);
var seq28870__$4 = cljs.core.next.call(null,seq28870__$3);
return portal_cljs.xhr.retrieve_url.cljs$core$IFn$_invoke$arity$variadic(G__28871,G__28872,G__28873,G__28874,seq28870__$4);
});

/**
 * Take a response, convert it a clj map and call f on the resulting map.
 */
portal_cljs.xhr.process_json = (function portal_cljs$xhr$process_json(f,response){
return f.call(null,cljs.core.js__GT_clj.call(null,response,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
/**
 * Assuming the server will respond with JSON, convert the response to JSON
 *   and call f on it.
 */
portal_cljs.xhr.process_json_response = (function portal_cljs$xhr$process_json_response(f){
return cljs.core.partial.call(null,portal_cljs.xhr.xhrio_wrapper,cljs.core.partial.call(null,portal_cljs.xhr.process_json,f));
});

//# sourceMappingURL=xhr.js.map?rel=1473888615223