// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22065 = arguments.length;
var i__21233__auto___22066 = (0);
while(true){
if((i__21233__auto___22066 < len__21232__auto___22065)){
args__21239__auto__.push((arguments[i__21233__auto___22066]));

var G__22067 = (i__21233__auto___22066 + (1));
i__21233__auto___22066 = G__22067;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq22064){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22064));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22069 = arguments.length;
var i__21233__auto___22070 = (0);
while(true){
if((i__21233__auto___22070 < len__21232__auto___22069)){
args__21239__auto__.push((arguments[i__21233__auto___22070]));

var G__22071 = (i__21233__auto___22070 + (1));
i__21233__auto___22070 = G__22071;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq22068){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22068));
});

var g_QMARK__22072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_22073 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22072){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__22072))
,null));
var mkg_22074 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22072,g_22073){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__22072,g_22073))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__22072,g_22073,mkg_22074){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__22072).call(null,x);
});})(g_QMARK__22072,g_22073,mkg_22074))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__22072,g_22073,mkg_22074){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_22074).call(null,gfn);
});})(g_QMARK__22072,g_22073,mkg_22074))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__22072,g_22073,mkg_22074){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_22073).call(null,generator);
});})(g_QMARK__22072,g_22073,mkg_22074))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22036__auto___22093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__22036__auto___22093){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22094 = arguments.length;
var i__21233__auto___22095 = (0);
while(true){
if((i__21233__auto___22095 < len__21232__auto___22094)){
args__21239__auto__.push((arguments[i__21233__auto___22095]));

var G__22096 = (i__21233__auto___22095 + (1));
i__21233__auto___22095 = G__22096;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22093))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22093),args);
});})(g__22036__auto___22093))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__22036__auto___22093){
return (function (seq22075){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22075));
});})(g__22036__auto___22093))
;


var g__22036__auto___22097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__22036__auto___22097){
return (function cljs$spec$impl$gen$list(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22098 = arguments.length;
var i__21233__auto___22099 = (0);
while(true){
if((i__21233__auto___22099 < len__21232__auto___22098)){
args__21239__auto__.push((arguments[i__21233__auto___22099]));

var G__22100 = (i__21233__auto___22099 + (1));
i__21233__auto___22099 = G__22100;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22097))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22097),args);
});})(g__22036__auto___22097))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__22036__auto___22097){
return (function (seq22076){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22076));
});})(g__22036__auto___22097))
;


var g__22036__auto___22101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__22036__auto___22101){
return (function cljs$spec$impl$gen$map(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22102 = arguments.length;
var i__21233__auto___22103 = (0);
while(true){
if((i__21233__auto___22103 < len__21232__auto___22102)){
args__21239__auto__.push((arguments[i__21233__auto___22103]));

var G__22104 = (i__21233__auto___22103 + (1));
i__21233__auto___22103 = G__22104;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22101))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22101),args);
});})(g__22036__auto___22101))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__22036__auto___22101){
return (function (seq22077){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22077));
});})(g__22036__auto___22101))
;


var g__22036__auto___22105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__22036__auto___22105){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22106 = arguments.length;
var i__21233__auto___22107 = (0);
while(true){
if((i__21233__auto___22107 < len__21232__auto___22106)){
args__21239__auto__.push((arguments[i__21233__auto___22107]));

var G__22108 = (i__21233__auto___22107 + (1));
i__21233__auto___22107 = G__22108;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22105))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22105),args);
});})(g__22036__auto___22105))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__22036__auto___22105){
return (function (seq22078){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22078));
});})(g__22036__auto___22105))
;


var g__22036__auto___22109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__22036__auto___22109){
return (function cljs$spec$impl$gen$set(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22110 = arguments.length;
var i__21233__auto___22111 = (0);
while(true){
if((i__21233__auto___22111 < len__21232__auto___22110)){
args__21239__auto__.push((arguments[i__21233__auto___22111]));

var G__22112 = (i__21233__auto___22111 + (1));
i__21233__auto___22111 = G__22112;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22109))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22109),args);
});})(g__22036__auto___22109))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__22036__auto___22109){
return (function (seq22079){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22079));
});})(g__22036__auto___22109))
;


var g__22036__auto___22113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__22036__auto___22113){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22114 = arguments.length;
var i__21233__auto___22115 = (0);
while(true){
if((i__21233__auto___22115 < len__21232__auto___22114)){
args__21239__auto__.push((arguments[i__21233__auto___22115]));

var G__22116 = (i__21233__auto___22115 + (1));
i__21233__auto___22115 = G__22116;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22113))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22113),args);
});})(g__22036__auto___22113))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__22036__auto___22113){
return (function (seq22080){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22080));
});})(g__22036__auto___22113))
;


var g__22036__auto___22117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__22036__auto___22117){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22118 = arguments.length;
var i__21233__auto___22119 = (0);
while(true){
if((i__21233__auto___22119 < len__21232__auto___22118)){
args__21239__auto__.push((arguments[i__21233__auto___22119]));

var G__22120 = (i__21233__auto___22119 + (1));
i__21233__auto___22119 = G__22120;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22117))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22117),args);
});})(g__22036__auto___22117))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__22036__auto___22117){
return (function (seq22081){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22081));
});})(g__22036__auto___22117))
;


var g__22036__auto___22121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__22036__auto___22121){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22122 = arguments.length;
var i__21233__auto___22123 = (0);
while(true){
if((i__21233__auto___22123 < len__21232__auto___22122)){
args__21239__auto__.push((arguments[i__21233__auto___22123]));

var G__22124 = (i__21233__auto___22123 + (1));
i__21233__auto___22123 = G__22124;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22121))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22121),args);
});})(g__22036__auto___22121))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__22036__auto___22121){
return (function (seq22082){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22082));
});})(g__22036__auto___22121))
;


var g__22036__auto___22125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__22036__auto___22125){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22126 = arguments.length;
var i__21233__auto___22127 = (0);
while(true){
if((i__21233__auto___22127 < len__21232__auto___22126)){
args__21239__auto__.push((arguments[i__21233__auto___22127]));

var G__22128 = (i__21233__auto___22127 + (1));
i__21233__auto___22127 = G__22128;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22125))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22125),args);
});})(g__22036__auto___22125))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__22036__auto___22125){
return (function (seq22083){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22083));
});})(g__22036__auto___22125))
;


var g__22036__auto___22129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__22036__auto___22129){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22130 = arguments.length;
var i__21233__auto___22131 = (0);
while(true){
if((i__21233__auto___22131 < len__21232__auto___22130)){
args__21239__auto__.push((arguments[i__21233__auto___22131]));

var G__22132 = (i__21233__auto___22131 + (1));
i__21233__auto___22131 = G__22132;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22129))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22129),args);
});})(g__22036__auto___22129))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__22036__auto___22129){
return (function (seq22084){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22084));
});})(g__22036__auto___22129))
;


var g__22036__auto___22133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__22036__auto___22133){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22134 = arguments.length;
var i__21233__auto___22135 = (0);
while(true){
if((i__21233__auto___22135 < len__21232__auto___22134)){
args__21239__auto__.push((arguments[i__21233__auto___22135]));

var G__22136 = (i__21233__auto___22135 + (1));
i__21233__auto___22135 = G__22136;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22133))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22133),args);
});})(g__22036__auto___22133))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__22036__auto___22133){
return (function (seq22085){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22085));
});})(g__22036__auto___22133))
;


var g__22036__auto___22137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__22036__auto___22137){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22138 = arguments.length;
var i__21233__auto___22139 = (0);
while(true){
if((i__21233__auto___22139 < len__21232__auto___22138)){
args__21239__auto__.push((arguments[i__21233__auto___22139]));

var G__22140 = (i__21233__auto___22139 + (1));
i__21233__auto___22139 = G__22140;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22137))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22137),args);
});})(g__22036__auto___22137))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__22036__auto___22137){
return (function (seq22086){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22086));
});})(g__22036__auto___22137))
;


var g__22036__auto___22141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__22036__auto___22141){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22142 = arguments.length;
var i__21233__auto___22143 = (0);
while(true){
if((i__21233__auto___22143 < len__21232__auto___22142)){
args__21239__auto__.push((arguments[i__21233__auto___22143]));

var G__22144 = (i__21233__auto___22143 + (1));
i__21233__auto___22143 = G__22144;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22141))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22141),args);
});})(g__22036__auto___22141))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__22036__auto___22141){
return (function (seq22087){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22087));
});})(g__22036__auto___22141))
;


var g__22036__auto___22145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__22036__auto___22145){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22146 = arguments.length;
var i__21233__auto___22147 = (0);
while(true){
if((i__21233__auto___22147 < len__21232__auto___22146)){
args__21239__auto__.push((arguments[i__21233__auto___22147]));

var G__22148 = (i__21233__auto___22147 + (1));
i__21233__auto___22147 = G__22148;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22145))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22145),args);
});})(g__22036__auto___22145))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__22036__auto___22145){
return (function (seq22088){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22088));
});})(g__22036__auto___22145))
;


var g__22036__auto___22149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__22036__auto___22149){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22150 = arguments.length;
var i__21233__auto___22151 = (0);
while(true){
if((i__21233__auto___22151 < len__21232__auto___22150)){
args__21239__auto__.push((arguments[i__21233__auto___22151]));

var G__22152 = (i__21233__auto___22151 + (1));
i__21233__auto___22151 = G__22152;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22149))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22149),args);
});})(g__22036__auto___22149))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__22036__auto___22149){
return (function (seq22089){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22089));
});})(g__22036__auto___22149))
;


var g__22036__auto___22153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__22036__auto___22153){
return (function cljs$spec$impl$gen$return(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22154 = arguments.length;
var i__21233__auto___22155 = (0);
while(true){
if((i__21233__auto___22155 < len__21232__auto___22154)){
args__21239__auto__.push((arguments[i__21233__auto___22155]));

var G__22156 = (i__21233__auto___22155 + (1));
i__21233__auto___22155 = G__22156;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22153))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22153),args);
});})(g__22036__auto___22153))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__22036__auto___22153){
return (function (seq22090){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22090));
});})(g__22036__auto___22153))
;


var g__22036__auto___22157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__22036__auto___22157){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22158 = arguments.length;
var i__21233__auto___22159 = (0);
while(true){
if((i__21233__auto___22159 < len__21232__auto___22158)){
args__21239__auto__.push((arguments[i__21233__auto___22159]));

var G__22160 = (i__21233__auto___22159 + (1));
i__21233__auto___22159 = G__22160;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22157))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22157),args);
});})(g__22036__auto___22157))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__22036__auto___22157){
return (function (seq22091){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22091));
});})(g__22036__auto___22157))
;


var g__22036__auto___22161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__22036__auto___22161){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22162 = arguments.length;
var i__21233__auto___22163 = (0);
while(true){
if((i__21233__auto___22163 < len__21232__auto___22162)){
args__21239__auto__.push((arguments[i__21233__auto___22163]));

var G__22164 = (i__21233__auto___22163 + (1));
i__21233__auto___22163 = G__22164;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22036__auto___22161))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22036__auto___22161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22036__auto___22161),args);
});})(g__22036__auto___22161))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__22036__auto___22161){
return (function (seq22092){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22092));
});})(g__22036__auto___22161))
;

var g__22049__auto___22186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__22049__auto___22186){
return (function cljs$spec$impl$gen$any(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22187 = arguments.length;
var i__21233__auto___22188 = (0);
while(true){
if((i__21233__auto___22188 < len__21232__auto___22187)){
args__21239__auto__.push((arguments[i__21233__auto___22188]));

var G__22189 = (i__21233__auto___22188 + (1));
i__21233__auto___22188 = G__22189;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22186))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22186){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22186);
});})(g__22049__auto___22186))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__22049__auto___22186){
return (function (seq22165){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22165));
});})(g__22049__auto___22186))
;


var g__22049__auto___22190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__22049__auto___22190){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22191 = arguments.length;
var i__21233__auto___22192 = (0);
while(true){
if((i__21233__auto___22192 < len__21232__auto___22191)){
args__21239__auto__.push((arguments[i__21233__auto___22192]));

var G__22193 = (i__21233__auto___22192 + (1));
i__21233__auto___22192 = G__22193;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22190))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22190){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22190);
});})(g__22049__auto___22190))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__22049__auto___22190){
return (function (seq22166){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22166));
});})(g__22049__auto___22190))
;


var g__22049__auto___22194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__22049__auto___22194){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22195 = arguments.length;
var i__21233__auto___22196 = (0);
while(true){
if((i__21233__auto___22196 < len__21232__auto___22195)){
args__21239__auto__.push((arguments[i__21233__auto___22196]));

var G__22197 = (i__21233__auto___22196 + (1));
i__21233__auto___22196 = G__22197;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22194))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22194){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22194);
});})(g__22049__auto___22194))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__22049__auto___22194){
return (function (seq22167){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22167));
});})(g__22049__auto___22194))
;


var g__22049__auto___22198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__22049__auto___22198){
return (function cljs$spec$impl$gen$char(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22199 = arguments.length;
var i__21233__auto___22200 = (0);
while(true){
if((i__21233__auto___22200 < len__21232__auto___22199)){
args__21239__auto__.push((arguments[i__21233__auto___22200]));

var G__22201 = (i__21233__auto___22200 + (1));
i__21233__auto___22200 = G__22201;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22198))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22198){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22198);
});})(g__22049__auto___22198))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__22049__auto___22198){
return (function (seq22168){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22168));
});})(g__22049__auto___22198))
;


var g__22049__auto___22202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__22049__auto___22202){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22203 = arguments.length;
var i__21233__auto___22204 = (0);
while(true){
if((i__21233__auto___22204 < len__21232__auto___22203)){
args__21239__auto__.push((arguments[i__21233__auto___22204]));

var G__22205 = (i__21233__auto___22204 + (1));
i__21233__auto___22204 = G__22205;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22202))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22202){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22202);
});})(g__22049__auto___22202))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__22049__auto___22202){
return (function (seq22169){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22169));
});})(g__22049__auto___22202))
;


var g__22049__auto___22206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__22049__auto___22206){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22207 = arguments.length;
var i__21233__auto___22208 = (0);
while(true){
if((i__21233__auto___22208 < len__21232__auto___22207)){
args__21239__auto__.push((arguments[i__21233__auto___22208]));

var G__22209 = (i__21233__auto___22208 + (1));
i__21233__auto___22208 = G__22209;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22206))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22206){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22206);
});})(g__22049__auto___22206))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__22049__auto___22206){
return (function (seq22170){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22170));
});})(g__22049__auto___22206))
;


var g__22049__auto___22210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__22049__auto___22210){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22211 = arguments.length;
var i__21233__auto___22212 = (0);
while(true){
if((i__21233__auto___22212 < len__21232__auto___22211)){
args__21239__auto__.push((arguments[i__21233__auto___22212]));

var G__22213 = (i__21233__auto___22212 + (1));
i__21233__auto___22212 = G__22213;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22210))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22210){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22210);
});})(g__22049__auto___22210))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__22049__auto___22210){
return (function (seq22171){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22171));
});})(g__22049__auto___22210))
;


var g__22049__auto___22214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__22049__auto___22214){
return (function cljs$spec$impl$gen$double(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22215 = arguments.length;
var i__21233__auto___22216 = (0);
while(true){
if((i__21233__auto___22216 < len__21232__auto___22215)){
args__21239__auto__.push((arguments[i__21233__auto___22216]));

var G__22217 = (i__21233__auto___22216 + (1));
i__21233__auto___22216 = G__22217;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22214))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22214){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22214);
});})(g__22049__auto___22214))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__22049__auto___22214){
return (function (seq22172){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22172));
});})(g__22049__auto___22214))
;


var g__22049__auto___22218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__22049__auto___22218){
return (function cljs$spec$impl$gen$int(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22219 = arguments.length;
var i__21233__auto___22220 = (0);
while(true){
if((i__21233__auto___22220 < len__21232__auto___22219)){
args__21239__auto__.push((arguments[i__21233__auto___22220]));

var G__22221 = (i__21233__auto___22220 + (1));
i__21233__auto___22220 = G__22221;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22218))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22218){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22218);
});})(g__22049__auto___22218))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__22049__auto___22218){
return (function (seq22173){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22173));
});})(g__22049__auto___22218))
;


var g__22049__auto___22222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__22049__auto___22222){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22223 = arguments.length;
var i__21233__auto___22224 = (0);
while(true){
if((i__21233__auto___22224 < len__21232__auto___22223)){
args__21239__auto__.push((arguments[i__21233__auto___22224]));

var G__22225 = (i__21233__auto___22224 + (1));
i__21233__auto___22224 = G__22225;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22222))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22222){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22222);
});})(g__22049__auto___22222))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__22049__auto___22222){
return (function (seq22174){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22174));
});})(g__22049__auto___22222))
;


var g__22049__auto___22226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__22049__auto___22226){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22227 = arguments.length;
var i__21233__auto___22228 = (0);
while(true){
if((i__21233__auto___22228 < len__21232__auto___22227)){
args__21239__auto__.push((arguments[i__21233__auto___22228]));

var G__22229 = (i__21233__auto___22228 + (1));
i__21233__auto___22228 = G__22229;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22226))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22226){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22226);
});})(g__22049__auto___22226))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__22049__auto___22226){
return (function (seq22175){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22175));
});})(g__22049__auto___22226))
;


var g__22049__auto___22230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__22049__auto___22230){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22231 = arguments.length;
var i__21233__auto___22232 = (0);
while(true){
if((i__21233__auto___22232 < len__21232__auto___22231)){
args__21239__auto__.push((arguments[i__21233__auto___22232]));

var G__22233 = (i__21233__auto___22232 + (1));
i__21233__auto___22232 = G__22233;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22230))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22230){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22230);
});})(g__22049__auto___22230))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__22049__auto___22230){
return (function (seq22176){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22176));
});})(g__22049__auto___22230))
;


var g__22049__auto___22234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__22049__auto___22234){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22235 = arguments.length;
var i__21233__auto___22236 = (0);
while(true){
if((i__21233__auto___22236 < len__21232__auto___22235)){
args__21239__auto__.push((arguments[i__21233__auto___22236]));

var G__22237 = (i__21233__auto___22236 + (1));
i__21233__auto___22236 = G__22237;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22234))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22234){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22234);
});})(g__22049__auto___22234))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__22049__auto___22234){
return (function (seq22177){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22177));
});})(g__22049__auto___22234))
;


var g__22049__auto___22238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__22049__auto___22238){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22239 = arguments.length;
var i__21233__auto___22240 = (0);
while(true){
if((i__21233__auto___22240 < len__21232__auto___22239)){
args__21239__auto__.push((arguments[i__21233__auto___22240]));

var G__22241 = (i__21233__auto___22240 + (1));
i__21233__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22238))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22238){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22238);
});})(g__22049__auto___22238))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__22049__auto___22238){
return (function (seq22178){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22178));
});})(g__22049__auto___22238))
;


var g__22049__auto___22242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__22049__auto___22242){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22243 = arguments.length;
var i__21233__auto___22244 = (0);
while(true){
if((i__21233__auto___22244 < len__21232__auto___22243)){
args__21239__auto__.push((arguments[i__21233__auto___22244]));

var G__22245 = (i__21233__auto___22244 + (1));
i__21233__auto___22244 = G__22245;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22242))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22242){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22242);
});})(g__22049__auto___22242))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__22049__auto___22242){
return (function (seq22179){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22179));
});})(g__22049__auto___22242))
;


var g__22049__auto___22246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__22049__auto___22246){
return (function cljs$spec$impl$gen$string(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22247 = arguments.length;
var i__21233__auto___22248 = (0);
while(true){
if((i__21233__auto___22248 < len__21232__auto___22247)){
args__21239__auto__.push((arguments[i__21233__auto___22248]));

var G__22249 = (i__21233__auto___22248 + (1));
i__21233__auto___22248 = G__22249;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22246))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22246){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22246);
});})(g__22049__auto___22246))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__22049__auto___22246){
return (function (seq22180){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22180));
});})(g__22049__auto___22246))
;


var g__22049__auto___22250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__22049__auto___22250){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22251 = arguments.length;
var i__21233__auto___22252 = (0);
while(true){
if((i__21233__auto___22252 < len__21232__auto___22251)){
args__21239__auto__.push((arguments[i__21233__auto___22252]));

var G__22253 = (i__21233__auto___22252 + (1));
i__21233__auto___22252 = G__22253;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22250))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22250){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22250);
});})(g__22049__auto___22250))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__22049__auto___22250){
return (function (seq22181){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22181));
});})(g__22049__auto___22250))
;


var g__22049__auto___22254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__22049__auto___22254){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22255 = arguments.length;
var i__21233__auto___22256 = (0);
while(true){
if((i__21233__auto___22256 < len__21232__auto___22255)){
args__21239__auto__.push((arguments[i__21233__auto___22256]));

var G__22257 = (i__21233__auto___22256 + (1));
i__21233__auto___22256 = G__22257;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22254))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22254){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22254);
});})(g__22049__auto___22254))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__22049__auto___22254){
return (function (seq22182){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22182));
});})(g__22049__auto___22254))
;


var g__22049__auto___22258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__22049__auto___22258){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22259 = arguments.length;
var i__21233__auto___22260 = (0);
while(true){
if((i__21233__auto___22260 < len__21232__auto___22259)){
args__21239__auto__.push((arguments[i__21233__auto___22260]));

var G__22261 = (i__21233__auto___22260 + (1));
i__21233__auto___22260 = G__22261;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22258))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22258){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22258);
});})(g__22049__auto___22258))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__22049__auto___22258){
return (function (seq22183){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22183));
});})(g__22049__auto___22258))
;


var g__22049__auto___22262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__22049__auto___22262){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22263 = arguments.length;
var i__21233__auto___22264 = (0);
while(true){
if((i__21233__auto___22264 < len__21232__auto___22263)){
args__21239__auto__.push((arguments[i__21233__auto___22264]));

var G__22265 = (i__21233__auto___22264 + (1));
i__21233__auto___22264 = G__22265;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22262))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22262){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22262);
});})(g__22049__auto___22262))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__22049__auto___22262){
return (function (seq22184){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22184));
});})(g__22049__auto___22262))
;


var g__22049__auto___22266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__22049__auto___22266){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22267 = arguments.length;
var i__21233__auto___22268 = (0);
while(true){
if((i__21233__auto___22268 < len__21232__auto___22267)){
args__21239__auto__.push((arguments[i__21233__auto___22268]));

var G__22269 = (i__21233__auto___22268 + (1));
i__21233__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});})(g__22049__auto___22266))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22049__auto___22266){
return (function (args){
return cljs.core.deref.call(null,g__22049__auto___22266);
});})(g__22049__auto___22266))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__22049__auto___22266){
return (function (seq22185){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22185));
});})(g__22049__auto___22266))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21239__auto__ = [];
var len__21232__auto___22272 = arguments.length;
var i__21233__auto___22273 = (0);
while(true){
if((i__21233__auto___22273 < len__21232__auto___22272)){
args__21239__auto__.push((arguments[i__21233__auto___22273]));

var G__22274 = (i__21233__auto___22273 + (1));
i__21233__auto___22273 = G__22274;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((0) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21240__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__22270_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__22270_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq22271){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22271));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__22275_SHARP_){
return (new Date(p1__22275_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1473888609265