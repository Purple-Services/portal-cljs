// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30787 = [];
var len__21232__auto___30790 = arguments.length;
var i__21233__auto___30791 = (0);
while(true){
if((i__21233__auto___30791 < len__21232__auto___30790)){
args30787.push((arguments[i__21233__auto___30791]));

var G__30792 = (i__21233__auto___30791 + (1));
i__21233__auto___30791 = G__30792;
continue;
} else {
}
break;
}

var G__30789 = args30787.length;
switch (G__30789) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30787.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21239__auto__ = [];
var len__21232__auto___30795 = arguments.length;
var i__21233__auto___30796 = (0);
while(true){
if((i__21233__auto___30796 < len__21232__auto___30795)){
args__21239__auto__.push((arguments[i__21233__auto___30796]));

var G__30797 = (i__21233__auto___30796 + (1));
i__21233__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30794){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30794));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21239__auto__ = [];
var len__21232__auto___30799 = arguments.length;
var i__21233__auto___30800 = (0);
while(true){
if((i__21233__auto___30800 < len__21232__auto___30799)){
args__21239__auto__.push((arguments[i__21233__auto___30800]));

var G__30801 = (i__21233__auto___30800 + (1));
i__21233__auto___30800 = G__30801;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30798){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30798));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30802 = cljs.core._EQ_;
var expr__30803 = (function (){var or__20157__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30806){if((e30806 instanceof Error)){
var e = e30806;
return false;
} else {
throw e30806;

}
}})();
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30802.call(null,"true",expr__30803))){
return true;
} else {
if(cljs.core.truth_(pred__30802.call(null,"false",expr__30803))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30803)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30808){if((e30808 instanceof Error)){
var e = e30808;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30808;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30809){
var map__30812 = p__30809;
var map__30812__$1 = ((((!((map__30812 == null)))?((((map__30812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30812):map__30812);
var message = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20157__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20145__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20145__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20145__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24954__auto___30974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___30974,ch){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___30974,ch){
return (function (state_30943){
var state_val_30944 = (state_30943[(1)]);
if((state_val_30944 === (7))){
var inst_30939 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
var statearr_30945_30975 = state_30943__$1;
(statearr_30945_30975[(2)] = inst_30939);

(statearr_30945_30975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (1))){
var state_30943__$1 = state_30943;
var statearr_30946_30976 = state_30943__$1;
(statearr_30946_30976[(2)] = null);

(statearr_30946_30976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (4))){
var inst_30896 = (state_30943[(7)]);
var inst_30896__$1 = (state_30943[(2)]);
var state_30943__$1 = (function (){var statearr_30947 = state_30943;
(statearr_30947[(7)] = inst_30896__$1);

return statearr_30947;
})();
if(cljs.core.truth_(inst_30896__$1)){
var statearr_30948_30977 = state_30943__$1;
(statearr_30948_30977[(1)] = (5));

} else {
var statearr_30949_30978 = state_30943__$1;
(statearr_30949_30978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (15))){
var inst_30903 = (state_30943[(8)]);
var inst_30918 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30903);
var inst_30919 = cljs.core.first.call(null,inst_30918);
var inst_30920 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30919);
var inst_30921 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30920)].join('');
var inst_30922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30921);
var state_30943__$1 = state_30943;
var statearr_30950_30979 = state_30943__$1;
(statearr_30950_30979[(2)] = inst_30922);

(statearr_30950_30979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (13))){
var inst_30927 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
var statearr_30951_30980 = state_30943__$1;
(statearr_30951_30980[(2)] = inst_30927);

(statearr_30951_30980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (6))){
var state_30943__$1 = state_30943;
var statearr_30952_30981 = state_30943__$1;
(statearr_30952_30981[(2)] = null);

(statearr_30952_30981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (17))){
var inst_30925 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
var statearr_30953_30982 = state_30943__$1;
(statearr_30953_30982[(2)] = inst_30925);

(statearr_30953_30982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (3))){
var inst_30941 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30943__$1,inst_30941);
} else {
if((state_val_30944 === (12))){
var inst_30902 = (state_30943[(9)]);
var inst_30916 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30902,opts);
var state_30943__$1 = state_30943;
if(cljs.core.truth_(inst_30916)){
var statearr_30954_30983 = state_30943__$1;
(statearr_30954_30983[(1)] = (15));

} else {
var statearr_30955_30984 = state_30943__$1;
(statearr_30955_30984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (2))){
var state_30943__$1 = state_30943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30943__$1,(4),ch);
} else {
if((state_val_30944 === (11))){
var inst_30903 = (state_30943[(8)]);
var inst_30908 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30909 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30903);
var inst_30910 = cljs.core.async.timeout.call(null,(1000));
var inst_30911 = [inst_30909,inst_30910];
var inst_30912 = (new cljs.core.PersistentVector(null,2,(5),inst_30908,inst_30911,null));
var state_30943__$1 = state_30943;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30943__$1,(14),inst_30912);
} else {
if((state_val_30944 === (9))){
var inst_30903 = (state_30943[(8)]);
var inst_30929 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30930 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30903);
var inst_30931 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30930);
var inst_30932 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30931)].join('');
var inst_30933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30932);
var state_30943__$1 = (function (){var statearr_30956 = state_30943;
(statearr_30956[(10)] = inst_30929);

return statearr_30956;
})();
var statearr_30957_30985 = state_30943__$1;
(statearr_30957_30985[(2)] = inst_30933);

(statearr_30957_30985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (5))){
var inst_30896 = (state_30943[(7)]);
var inst_30898 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30899 = (new cljs.core.PersistentArrayMap(null,2,inst_30898,null));
var inst_30900 = (new cljs.core.PersistentHashSet(null,inst_30899,null));
var inst_30901 = figwheel.client.focus_msgs.call(null,inst_30900,inst_30896);
var inst_30902 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30901);
var inst_30903 = cljs.core.first.call(null,inst_30901);
var inst_30904 = figwheel.client.autoload_QMARK_.call(null);
var state_30943__$1 = (function (){var statearr_30958 = state_30943;
(statearr_30958[(9)] = inst_30902);

(statearr_30958[(8)] = inst_30903);

return statearr_30958;
})();
if(cljs.core.truth_(inst_30904)){
var statearr_30959_30986 = state_30943__$1;
(statearr_30959_30986[(1)] = (8));

} else {
var statearr_30960_30987 = state_30943__$1;
(statearr_30960_30987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (14))){
var inst_30914 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
var statearr_30961_30988 = state_30943__$1;
(statearr_30961_30988[(2)] = inst_30914);

(statearr_30961_30988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (16))){
var state_30943__$1 = state_30943;
var statearr_30962_30989 = state_30943__$1;
(statearr_30962_30989[(2)] = null);

(statearr_30962_30989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (10))){
var inst_30935 = (state_30943[(2)]);
var state_30943__$1 = (function (){var statearr_30963 = state_30943;
(statearr_30963[(11)] = inst_30935);

return statearr_30963;
})();
var statearr_30964_30990 = state_30943__$1;
(statearr_30964_30990[(2)] = null);

(statearr_30964_30990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (8))){
var inst_30902 = (state_30943[(9)]);
var inst_30906 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30902,opts);
var state_30943__$1 = state_30943;
if(cljs.core.truth_(inst_30906)){
var statearr_30965_30991 = state_30943__$1;
(statearr_30965_30991[(1)] = (11));

} else {
var statearr_30966_30992 = state_30943__$1;
(statearr_30966_30992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24954__auto___30974,ch))
;
return ((function (switch__24842__auto__,c__24954__auto___30974,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24843__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24843__auto____0 = (function (){
var statearr_30970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30970[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24843__auto__);

(statearr_30970[(1)] = (1));

return statearr_30970;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24843__auto____1 = (function (state_30943){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_30943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e30971){if((e30971 instanceof Object)){
var ex__24846__auto__ = e30971;
var statearr_30972_30993 = state_30943;
(statearr_30972_30993[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30994 = state_30943;
state_30943 = G__30994;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24843__auto__ = function(state_30943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24843__auto____1.call(this,state_30943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24843__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24843__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___30974,ch))
})();
var state__24956__auto__ = (function (){var statearr_30973 = f__24955__auto__.call(null);
(statearr_30973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___30974);

return statearr_30973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___30974,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30995_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30995_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30998 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30998){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30997){if((e30997 instanceof Error)){
var e = e30997;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30998], null));
} else {
var e = e30997;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30998))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30999){
var map__31008 = p__30999;
var map__31008__$1 = ((((!((map__31008 == null)))?((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31008):map__31008);
var opts = map__31008__$1;
var build_id = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31008,map__31008__$1,opts,build_id){
return (function (p__31010){
var vec__31011 = p__31010;
var seq__31012 = cljs.core.seq.call(null,vec__31011);
var first__31013 = cljs.core.first.call(null,seq__31012);
var seq__31012__$1 = cljs.core.next.call(null,seq__31012);
var map__31014 = first__31013;
var map__31014__$1 = ((((!((map__31014 == null)))?((((map__31014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31014):map__31014);
var msg = map__31014__$1;
var msg_name = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31012__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31011,seq__31012,first__31013,seq__31012__$1,map__31014,map__31014__$1,msg,msg_name,_,map__31008,map__31008__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31011,seq__31012,first__31013,seq__31012__$1,map__31014,map__31014__$1,msg,msg_name,_,map__31008,map__31008__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31008,map__31008__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31022){
var vec__31023 = p__31022;
var seq__31024 = cljs.core.seq.call(null,vec__31023);
var first__31025 = cljs.core.first.call(null,seq__31024);
var seq__31024__$1 = cljs.core.next.call(null,seq__31024);
var map__31026 = first__31025;
var map__31026__$1 = ((((!((map__31026 == null)))?((((map__31026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31026):map__31026);
var msg = map__31026__$1;
var msg_name = cljs.core.get.call(null,map__31026__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31024__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31028){
var map__31040 = p__31028;
var map__31040__$1 = ((((!((map__31040 == null)))?((((map__31040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31040):map__31040);
var on_compile_warning = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31040,map__31040__$1,on_compile_warning,on_compile_fail){
return (function (p__31042){
var vec__31043 = p__31042;
var seq__31044 = cljs.core.seq.call(null,vec__31043);
var first__31045 = cljs.core.first.call(null,seq__31044);
var seq__31044__$1 = cljs.core.next.call(null,seq__31044);
var map__31046 = first__31045;
var map__31046__$1 = ((((!((map__31046 == null)))?((((map__31046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31046):map__31046);
var msg = map__31046__$1;
var msg_name = cljs.core.get.call(null,map__31046__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31044__$1;
var pred__31048 = cljs.core._EQ_;
var expr__31049 = msg_name;
if(cljs.core.truth_(pred__31048.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31049))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31048.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31049))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31040,map__31040__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__,msg_hist,msg_names,msg){
return (function (state_31257){
var state_val_31258 = (state_31257[(1)]);
if((state_val_31258 === (7))){
var inst_31185 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31185)){
var statearr_31259_31305 = state_31257__$1;
(statearr_31259_31305[(1)] = (8));

} else {
var statearr_31260_31306 = state_31257__$1;
(statearr_31260_31306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (20))){
var inst_31251 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31261_31307 = state_31257__$1;
(statearr_31261_31307[(2)] = inst_31251);

(statearr_31261_31307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (27))){
var inst_31247 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31262_31308 = state_31257__$1;
(statearr_31262_31308[(2)] = inst_31247);

(statearr_31262_31308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (1))){
var inst_31178 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31178)){
var statearr_31263_31309 = state_31257__$1;
(statearr_31263_31309[(1)] = (2));

} else {
var statearr_31264_31310 = state_31257__$1;
(statearr_31264_31310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (24))){
var inst_31249 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31265_31311 = state_31257__$1;
(statearr_31265_31311[(2)] = inst_31249);

(statearr_31265_31311[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (4))){
var inst_31255 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31257__$1,inst_31255);
} else {
if((state_val_31258 === (15))){
var inst_31253 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31266_31312 = state_31257__$1;
(statearr_31266_31312[(2)] = inst_31253);

(statearr_31266_31312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (21))){
var inst_31212 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31267_31313 = state_31257__$1;
(statearr_31267_31313[(2)] = inst_31212);

(statearr_31267_31313[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (31))){
var inst_31236 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31236)){
var statearr_31268_31314 = state_31257__$1;
(statearr_31268_31314[(1)] = (34));

} else {
var statearr_31269_31315 = state_31257__$1;
(statearr_31269_31315[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (32))){
var inst_31245 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31270_31316 = state_31257__$1;
(statearr_31270_31316[(2)] = inst_31245);

(statearr_31270_31316[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (33))){
var inst_31234 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31271_31317 = state_31257__$1;
(statearr_31271_31317[(2)] = inst_31234);

(statearr_31271_31317[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (13))){
var inst_31199 = figwheel.client.heads_up.clear.call(null);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(16),inst_31199);
} else {
if((state_val_31258 === (22))){
var inst_31216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31217 = figwheel.client.heads_up.append_warning_message.call(null,inst_31216);
var state_31257__$1 = state_31257;
var statearr_31272_31318 = state_31257__$1;
(statearr_31272_31318[(2)] = inst_31217);

(statearr_31272_31318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (36))){
var inst_31243 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31273_31319 = state_31257__$1;
(statearr_31273_31319[(2)] = inst_31243);

(statearr_31273_31319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (29))){
var inst_31227 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31274_31320 = state_31257__$1;
(statearr_31274_31320[(2)] = inst_31227);

(statearr_31274_31320[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (6))){
var inst_31180 = (state_31257[(7)]);
var state_31257__$1 = state_31257;
var statearr_31275_31321 = state_31257__$1;
(statearr_31275_31321[(2)] = inst_31180);

(statearr_31275_31321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (28))){
var inst_31223 = (state_31257[(2)]);
var inst_31224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31225 = figwheel.client.heads_up.display_warning.call(null,inst_31224);
var state_31257__$1 = (function (){var statearr_31276 = state_31257;
(statearr_31276[(8)] = inst_31223);

return statearr_31276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(29),inst_31225);
} else {
if((state_val_31258 === (25))){
var inst_31221 = figwheel.client.heads_up.clear.call(null);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(28),inst_31221);
} else {
if((state_val_31258 === (34))){
var inst_31238 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(37),inst_31238);
} else {
if((state_val_31258 === (17))){
var inst_31205 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31277_31322 = state_31257__$1;
(statearr_31277_31322[(2)] = inst_31205);

(statearr_31277_31322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (3))){
var inst_31197 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31197)){
var statearr_31278_31323 = state_31257__$1;
(statearr_31278_31323[(1)] = (13));

} else {
var statearr_31279_31324 = state_31257__$1;
(statearr_31279_31324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (12))){
var inst_31193 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31280_31325 = state_31257__$1;
(statearr_31280_31325[(2)] = inst_31193);

(statearr_31280_31325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (2))){
var inst_31180 = (state_31257[(7)]);
var inst_31180__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31257__$1 = (function (){var statearr_31281 = state_31257;
(statearr_31281[(7)] = inst_31180__$1);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31180__$1)){
var statearr_31282_31326 = state_31257__$1;
(statearr_31282_31326[(1)] = (5));

} else {
var statearr_31283_31327 = state_31257__$1;
(statearr_31283_31327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (23))){
var inst_31219 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31219)){
var statearr_31284_31328 = state_31257__$1;
(statearr_31284_31328[(1)] = (25));

} else {
var statearr_31285_31329 = state_31257__$1;
(statearr_31285_31329[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (35))){
var state_31257__$1 = state_31257;
var statearr_31286_31330 = state_31257__$1;
(statearr_31286_31330[(2)] = null);

(statearr_31286_31330[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (19))){
var inst_31214 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31214)){
var statearr_31287_31331 = state_31257__$1;
(statearr_31287_31331[(1)] = (22));

} else {
var statearr_31288_31332 = state_31257__$1;
(statearr_31288_31332[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (11))){
var inst_31189 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31289_31333 = state_31257__$1;
(statearr_31289_31333[(2)] = inst_31189);

(statearr_31289_31333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (9))){
var inst_31191 = figwheel.client.heads_up.clear.call(null);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(12),inst_31191);
} else {
if((state_val_31258 === (5))){
var inst_31182 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31257__$1 = state_31257;
var statearr_31290_31334 = state_31257__$1;
(statearr_31290_31334[(2)] = inst_31182);

(statearr_31290_31334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (14))){
var inst_31207 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31207)){
var statearr_31291_31335 = state_31257__$1;
(statearr_31291_31335[(1)] = (18));

} else {
var statearr_31292_31336 = state_31257__$1;
(statearr_31292_31336[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (26))){
var inst_31229 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31229)){
var statearr_31293_31337 = state_31257__$1;
(statearr_31293_31337[(1)] = (30));

} else {
var statearr_31294_31338 = state_31257__$1;
(statearr_31294_31338[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (16))){
var inst_31201 = (state_31257[(2)]);
var inst_31202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31203 = figwheel.client.heads_up.display_exception.call(null,inst_31202);
var state_31257__$1 = (function (){var statearr_31295 = state_31257;
(statearr_31295[(9)] = inst_31201);

return statearr_31295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(17),inst_31203);
} else {
if((state_val_31258 === (30))){
var inst_31231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31232 = figwheel.client.heads_up.display_warning.call(null,inst_31231);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(33),inst_31232);
} else {
if((state_val_31258 === (10))){
var inst_31195 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31296_31339 = state_31257__$1;
(statearr_31296_31339[(2)] = inst_31195);

(statearr_31296_31339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (18))){
var inst_31209 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31210 = figwheel.client.heads_up.display_exception.call(null,inst_31209);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(21),inst_31210);
} else {
if((state_val_31258 === (37))){
var inst_31240 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31297_31340 = state_31257__$1;
(statearr_31297_31340[(2)] = inst_31240);

(statearr_31297_31340[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (8))){
var inst_31187 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(11),inst_31187);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24954__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24842__auto__,c__24954__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto____0 = (function (){
var statearr_31301 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31301[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto__);

(statearr_31301[(1)] = (1));

return statearr_31301;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto____1 = (function (state_31257){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_31257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e31302){if((e31302 instanceof Object)){
var ex__24846__auto__ = e31302;
var statearr_31303_31341 = state_31257;
(statearr_31303_31341[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31342 = state_31257;
state_31257 = G__31342;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto__ = function(state_31257){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto____1.call(this,state_31257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__,msg_hist,msg_names,msg))
})();
var state__24956__auto__ = (function (){var statearr_31304 = f__24955__auto__.call(null);
(statearr_31304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_31304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__,msg_hist,msg_names,msg))
);

return c__24954__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24954__auto___31405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___31405,ch){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___31405,ch){
return (function (state_31388){
var state_val_31389 = (state_31388[(1)]);
if((state_val_31389 === (1))){
var state_31388__$1 = state_31388;
var statearr_31390_31406 = state_31388__$1;
(statearr_31390_31406[(2)] = null);

(statearr_31390_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (2))){
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31388__$1,(4),ch);
} else {
if((state_val_31389 === (3))){
var inst_31386 = (state_31388[(2)]);
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31388__$1,inst_31386);
} else {
if((state_val_31389 === (4))){
var inst_31376 = (state_31388[(7)]);
var inst_31376__$1 = (state_31388[(2)]);
var state_31388__$1 = (function (){var statearr_31391 = state_31388;
(statearr_31391[(7)] = inst_31376__$1);

return statearr_31391;
})();
if(cljs.core.truth_(inst_31376__$1)){
var statearr_31392_31407 = state_31388__$1;
(statearr_31392_31407[(1)] = (5));

} else {
var statearr_31393_31408 = state_31388__$1;
(statearr_31393_31408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (5))){
var inst_31376 = (state_31388[(7)]);
var inst_31378 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31376);
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31388__$1,(8),inst_31378);
} else {
if((state_val_31389 === (6))){
var state_31388__$1 = state_31388;
var statearr_31394_31409 = state_31388__$1;
(statearr_31394_31409[(2)] = null);

(statearr_31394_31409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (7))){
var inst_31384 = (state_31388[(2)]);
var state_31388__$1 = state_31388;
var statearr_31395_31410 = state_31388__$1;
(statearr_31395_31410[(2)] = inst_31384);

(statearr_31395_31410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (8))){
var inst_31380 = (state_31388[(2)]);
var state_31388__$1 = (function (){var statearr_31396 = state_31388;
(statearr_31396[(8)] = inst_31380);

return statearr_31396;
})();
var statearr_31397_31411 = state_31388__$1;
(statearr_31397_31411[(2)] = null);

(statearr_31397_31411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24954__auto___31405,ch))
;
return ((function (switch__24842__auto__,c__24954__auto___31405,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24843__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24843__auto____0 = (function (){
var statearr_31401 = [null,null,null,null,null,null,null,null,null];
(statearr_31401[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24843__auto__);

(statearr_31401[(1)] = (1));

return statearr_31401;
});
var figwheel$client$heads_up_plugin_$_state_machine__24843__auto____1 = (function (state_31388){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_31388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e31402){if((e31402 instanceof Object)){
var ex__24846__auto__ = e31402;
var statearr_31403_31412 = state_31388;
(statearr_31403_31412[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31413 = state_31388;
state_31388 = G__31413;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24843__auto__ = function(state_31388){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24843__auto____1.call(this,state_31388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24843__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24843__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___31405,ch))
})();
var state__24956__auto__ = (function (){var statearr_31404 = f__24955__auto__.call(null);
(statearr_31404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___31405);

return statearr_31404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___31405,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (1))){
var inst_31429 = cljs.core.async.timeout.call(null,(3000));
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(2),inst_31429);
} else {
if((state_val_31435 === (2))){
var inst_31431 = (state_31434[(2)]);
var inst_31432 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31434__$1 = (function (){var statearr_31436 = state_31434;
(statearr_31436[(7)] = inst_31431);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
return null;
}
}
});})(c__24954__auto__))
;
return ((function (switch__24842__auto__,c__24954__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24843__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24843__auto____0 = (function (){
var statearr_31440 = [null,null,null,null,null,null,null,null];
(statearr_31440[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24843__auto__);

(statearr_31440[(1)] = (1));

return statearr_31440;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24843__auto____1 = (function (state_31434){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e31441){if((e31441 instanceof Object)){
var ex__24846__auto__ = e31441;
var statearr_31442_31444 = state_31434;
(statearr_31442_31444[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31445 = state_31434;
state_31434 = G__31445;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24843__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24843__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24843__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24843__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__))
})();
var state__24956__auto__ = (function (){var statearr_31443 = f__24955__auto__.call(null);
(statearr_31443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_31443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__))
);

return c__24954__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31468){
var state_val_31469 = (state_31468[(1)]);
if((state_val_31469 === (1))){
var inst_31462 = cljs.core.async.timeout.call(null,(2000));
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(2),inst_31462);
} else {
if((state_val_31469 === (2))){
var inst_31464 = (state_31468[(2)]);
var inst_31465 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31466 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31465);
var state_31468__$1 = (function (){var statearr_31470 = state_31468;
(statearr_31470[(7)] = inst_31464);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31468__$1,inst_31466);
} else {
return null;
}
}
});})(c__24954__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24842__auto__,c__24954__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto____0 = (function (){
var statearr_31474 = [null,null,null,null,null,null,null,null];
(statearr_31474[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto__);

(statearr_31474[(1)] = (1));

return statearr_31474;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto____1 = (function (state_31468){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_31468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e31475){if((e31475 instanceof Object)){
var ex__24846__auto__ = e31475;
var statearr_31476_31478 = state_31468;
(statearr_31476_31478[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31479 = state_31468;
state_31468 = G__31479;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto__ = function(state_31468){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto____1.call(this,state_31468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24956__auto__ = (function (){var statearr_31477 = f__24955__auto__.call(null);
(statearr_31477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__,figwheel_version,temp__4657__auto__))
);

return c__24954__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31480){
var map__31484 = p__31480;
var map__31484__$1 = ((((!((map__31484 == null)))?((((map__31484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31484):map__31484);
var file = cljs.core.get.call(null,map__31484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31486 = "";
var G__31486__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31486),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31486);
var G__31486__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31486__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31486__$1);
if(cljs.core.truth_((function (){var and__20145__auto__ = line;
if(cljs.core.truth_(and__20145__auto__)){
return column;
} else {
return and__20145__auto__;
}
})())){
return [cljs.core.str(G__31486__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31486__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31487){
var map__31494 = p__31487;
var map__31494__$1 = ((((!((map__31494 == null)))?((((map__31494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31494):map__31494);
var ed = map__31494__$1;
var formatted_exception = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31496_31500 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31497_31501 = null;
var count__31498_31502 = (0);
var i__31499_31503 = (0);
while(true){
if((i__31499_31503 < count__31498_31502)){
var msg_31504 = cljs.core._nth.call(null,chunk__31497_31501,i__31499_31503);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31504);

var G__31505 = seq__31496_31500;
var G__31506 = chunk__31497_31501;
var G__31507 = count__31498_31502;
var G__31508 = (i__31499_31503 + (1));
seq__31496_31500 = G__31505;
chunk__31497_31501 = G__31506;
count__31498_31502 = G__31507;
i__31499_31503 = G__31508;
continue;
} else {
var temp__4657__auto___31509 = cljs.core.seq.call(null,seq__31496_31500);
if(temp__4657__auto___31509){
var seq__31496_31510__$1 = temp__4657__auto___31509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31496_31510__$1)){
var c__20968__auto___31511 = cljs.core.chunk_first.call(null,seq__31496_31510__$1);
var G__31512 = cljs.core.chunk_rest.call(null,seq__31496_31510__$1);
var G__31513 = c__20968__auto___31511;
var G__31514 = cljs.core.count.call(null,c__20968__auto___31511);
var G__31515 = (0);
seq__31496_31500 = G__31512;
chunk__31497_31501 = G__31513;
count__31498_31502 = G__31514;
i__31499_31503 = G__31515;
continue;
} else {
var msg_31516 = cljs.core.first.call(null,seq__31496_31510__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31516);

var G__31517 = cljs.core.next.call(null,seq__31496_31510__$1);
var G__31518 = null;
var G__31519 = (0);
var G__31520 = (0);
seq__31496_31500 = G__31517;
chunk__31497_31501 = G__31518;
count__31498_31502 = G__31519;
i__31499_31503 = G__31520;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31521){
var map__31524 = p__31521;
var map__31524__$1 = ((((!((map__31524 == null)))?((((map__31524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31524):map__31524);
var w = map__31524__$1;
var message = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20145__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20145__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20145__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31536 = cljs.core.seq.call(null,plugins);
var chunk__31537 = null;
var count__31538 = (0);
var i__31539 = (0);
while(true){
if((i__31539 < count__31538)){
var vec__31540 = cljs.core._nth.call(null,chunk__31537,i__31539);
var k = cljs.core.nth.call(null,vec__31540,(0),null);
var plugin = cljs.core.nth.call(null,vec__31540,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31546 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31536,chunk__31537,count__31538,i__31539,pl_31546,vec__31540,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31546.call(null,msg_hist);
});})(seq__31536,chunk__31537,count__31538,i__31539,pl_31546,vec__31540,k,plugin))
);
} else {
}

var G__31547 = seq__31536;
var G__31548 = chunk__31537;
var G__31549 = count__31538;
var G__31550 = (i__31539 + (1));
seq__31536 = G__31547;
chunk__31537 = G__31548;
count__31538 = G__31549;
i__31539 = G__31550;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31536);
if(temp__4657__auto__){
var seq__31536__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31536__$1)){
var c__20968__auto__ = cljs.core.chunk_first.call(null,seq__31536__$1);
var G__31551 = cljs.core.chunk_rest.call(null,seq__31536__$1);
var G__31552 = c__20968__auto__;
var G__31553 = cljs.core.count.call(null,c__20968__auto__);
var G__31554 = (0);
seq__31536 = G__31551;
chunk__31537 = G__31552;
count__31538 = G__31553;
i__31539 = G__31554;
continue;
} else {
var vec__31543 = cljs.core.first.call(null,seq__31536__$1);
var k = cljs.core.nth.call(null,vec__31543,(0),null);
var plugin = cljs.core.nth.call(null,vec__31543,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31555 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31536,chunk__31537,count__31538,i__31539,pl_31555,vec__31543,k,plugin,seq__31536__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31555.call(null,msg_hist);
});})(seq__31536,chunk__31537,count__31538,i__31539,pl_31555,vec__31543,k,plugin,seq__31536__$1,temp__4657__auto__))
);
} else {
}

var G__31556 = cljs.core.next.call(null,seq__31536__$1);
var G__31557 = null;
var G__31558 = (0);
var G__31559 = (0);
seq__31536 = G__31556;
chunk__31537 = G__31557;
count__31538 = G__31558;
i__31539 = G__31559;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31560 = [];
var len__21232__auto___31567 = arguments.length;
var i__21233__auto___31568 = (0);
while(true){
if((i__21233__auto___31568 < len__21232__auto___31567)){
args31560.push((arguments[i__21233__auto___31568]));

var G__31569 = (i__21233__auto___31568 + (1));
i__21233__auto___31568 = G__31569;
continue;
} else {
}
break;
}

var G__31562 = args31560.length;
switch (G__31562) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31560.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31563_31571 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31564_31572 = null;
var count__31565_31573 = (0);
var i__31566_31574 = (0);
while(true){
if((i__31566_31574 < count__31565_31573)){
var msg_31575 = cljs.core._nth.call(null,chunk__31564_31572,i__31566_31574);
figwheel.client.socket.handle_incoming_message.call(null,msg_31575);

var G__31576 = seq__31563_31571;
var G__31577 = chunk__31564_31572;
var G__31578 = count__31565_31573;
var G__31579 = (i__31566_31574 + (1));
seq__31563_31571 = G__31576;
chunk__31564_31572 = G__31577;
count__31565_31573 = G__31578;
i__31566_31574 = G__31579;
continue;
} else {
var temp__4657__auto___31580 = cljs.core.seq.call(null,seq__31563_31571);
if(temp__4657__auto___31580){
var seq__31563_31581__$1 = temp__4657__auto___31580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31563_31581__$1)){
var c__20968__auto___31582 = cljs.core.chunk_first.call(null,seq__31563_31581__$1);
var G__31583 = cljs.core.chunk_rest.call(null,seq__31563_31581__$1);
var G__31584 = c__20968__auto___31582;
var G__31585 = cljs.core.count.call(null,c__20968__auto___31582);
var G__31586 = (0);
seq__31563_31571 = G__31583;
chunk__31564_31572 = G__31584;
count__31565_31573 = G__31585;
i__31566_31574 = G__31586;
continue;
} else {
var msg_31587 = cljs.core.first.call(null,seq__31563_31581__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31587);

var G__31588 = cljs.core.next.call(null,seq__31563_31581__$1);
var G__31589 = null;
var G__31590 = (0);
var G__31591 = (0);
seq__31563_31571 = G__31588;
chunk__31564_31572 = G__31589;
count__31565_31573 = G__31590;
i__31566_31574 = G__31591;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21239__auto__ = [];
var len__21232__auto___31596 = arguments.length;
var i__21233__auto___31597 = (0);
while(true){
if((i__21233__auto___31597 < len__21232__auto___31596)){
args__21239__auto__.push((arguments[i__21233__auto___31597]));

var G__31598 = (i__21233__auto___31597 + (1));
i__21233__auto___31597 = G__31598;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31593){
var map__31594 = p__31593;
var map__31594__$1 = ((((!((map__31594 == null)))?((((map__31594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31594):map__31594);
var opts = map__31594__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31592){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31592));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31600){if((e31600 instanceof Error)){
var e = e31600;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31600;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31604){
var map__31605 = p__31604;
var map__31605__$1 = ((((!((map__31605 == null)))?((((map__31605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31605):map__31605);
var msg_name = cljs.core.get.call(null,map__31605__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1473888618514