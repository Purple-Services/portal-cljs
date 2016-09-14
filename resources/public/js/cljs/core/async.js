// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24999 = [];
var len__21232__auto___25005 = arguments.length;
var i__21233__auto___25006 = (0);
while(true){
if((i__21233__auto___25006 < len__21232__auto___25005)){
args24999.push((arguments[i__21233__auto___25006]));

var G__25007 = (i__21233__auto___25006 + (1));
i__21233__auto___25006 = G__25007;
continue;
} else {
}
break;
}

var G__25001 = args24999.length;
switch (G__25001) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24999.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25002 = (function (f,blockable,meta25003){
this.f = f;
this.blockable = blockable;
this.meta25003 = meta25003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25004,meta25003__$1){
var self__ = this;
var _25004__$1 = this;
return (new cljs.core.async.t_cljs$core$async25002(self__.f,self__.blockable,meta25003__$1));
});

cljs.core.async.t_cljs$core$async25002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25004){
var self__ = this;
var _25004__$1 = this;
return self__.meta25003;
});

cljs.core.async.t_cljs$core$async25002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25003","meta25003",-469619427,null)], null);
});

cljs.core.async.t_cljs$core$async25002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25002";

cljs.core.async.t_cljs$core$async25002.cljs$lang$ctorPrWriter = (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async25002");
});

cljs.core.async.__GT_t_cljs$core$async25002 = (function cljs$core$async$__GT_t_cljs$core$async25002(f__$1,blockable__$1,meta25003){
return (new cljs.core.async.t_cljs$core$async25002(f__$1,blockable__$1,meta25003));
});

}

return (new cljs.core.async.t_cljs$core$async25002(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25011 = [];
var len__21232__auto___25014 = arguments.length;
var i__21233__auto___25015 = (0);
while(true){
if((i__21233__auto___25015 < len__21232__auto___25014)){
args25011.push((arguments[i__21233__auto___25015]));

var G__25016 = (i__21233__auto___25015 + (1));
i__21233__auto___25015 = G__25016;
continue;
} else {
}
break;
}

var G__25013 = args25011.length;
switch (G__25013) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25011.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25018 = [];
var len__21232__auto___25021 = arguments.length;
var i__21233__auto___25022 = (0);
while(true){
if((i__21233__auto___25022 < len__21232__auto___25021)){
args25018.push((arguments[i__21233__auto___25022]));

var G__25023 = (i__21233__auto___25022 + (1));
i__21233__auto___25022 = G__25023;
continue;
} else {
}
break;
}

var G__25020 = args25018.length;
switch (G__25020) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25018.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25025 = [];
var len__21232__auto___25028 = arguments.length;
var i__21233__auto___25029 = (0);
while(true){
if((i__21233__auto___25029 < len__21232__auto___25028)){
args25025.push((arguments[i__21233__auto___25029]));

var G__25030 = (i__21233__auto___25029 + (1));
i__21233__auto___25029 = G__25030;
continue;
} else {
}
break;
}

var G__25027 = args25025.length;
switch (G__25027) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25025.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25032 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25032);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25032,ret){
return (function (){
return fn1.call(null,val_25032);
});})(val_25032,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25033 = [];
var len__21232__auto___25036 = arguments.length;
var i__21233__auto___25037 = (0);
while(true){
if((i__21233__auto___25037 < len__21232__auto___25036)){
args25033.push((arguments[i__21233__auto___25037]));

var G__25038 = (i__21233__auto___25037 + (1));
i__21233__auto___25037 = G__25038;
continue;
} else {
}
break;
}

var G__25035 = args25033.length;
switch (G__25035) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25033.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21072__auto___25040 = n;
var x_25041 = (0);
while(true){
if((x_25041 < n__21072__auto___25040)){
(a[x_25041] = (0));

var G__25042 = (x_25041 + (1));
x_25041 = G__25042;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25043 = (i + (1));
i = G__25043;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25047 = (function (alt_flag,flag,meta25048){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25048 = meta25048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25049,meta25048__$1){
var self__ = this;
var _25049__$1 = this;
return (new cljs.core.async.t_cljs$core$async25047(self__.alt_flag,self__.flag,meta25048__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25049){
var self__ = this;
var _25049__$1 = this;
return self__.meta25048;
});})(flag))
;

cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25047.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25048","meta25048",-1582730857,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25047";

cljs.core.async.t_cljs$core$async25047.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async25047");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25047 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25047(alt_flag__$1,flag__$1,meta25048){
return (new cljs.core.async.t_cljs$core$async25047(alt_flag__$1,flag__$1,meta25048));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25047(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25053 = (function (alt_handler,flag,cb,meta25054){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25054 = meta25054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25055,meta25054__$1){
var self__ = this;
var _25055__$1 = this;
return (new cljs.core.async.t_cljs$core$async25053(self__.alt_handler,self__.flag,self__.cb,meta25054__$1));
});

cljs.core.async.t_cljs$core$async25053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25055){
var self__ = this;
var _25055__$1 = this;
return self__.meta25054;
});

cljs.core.async.t_cljs$core$async25053.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25053.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25054","meta25054",-1843150716,null)], null);
});

cljs.core.async.t_cljs$core$async25053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25053";

cljs.core.async.t_cljs$core$async25053.cljs$lang$ctorPrWriter = (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async25053");
});

cljs.core.async.__GT_t_cljs$core$async25053 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25053(alt_handler__$1,flag__$1,cb__$1,meta25054){
return (new cljs.core.async.t_cljs$core$async25053(alt_handler__$1,flag__$1,cb__$1,meta25054));
});

}

return (new cljs.core.async.t_cljs$core$async25053(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25056_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25057_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25057_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20157__auto__ = wport;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25058 = (i + (1));
i = G__25058;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20157__auto__ = ret;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20145__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20145__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20145__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___25064 = arguments.length;
var i__21233__auto___25065 = (0);
while(true){
if((i__21233__auto___25065 < len__21232__auto___25064)){
args__21239__auto__.push((arguments[i__21233__auto___25065]));

var G__25066 = (i__21233__auto___25065 + (1));
i__21233__auto___25065 = G__25066;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((1) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21240__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25061){
var map__25062 = p__25061;
var map__25062__$1 = ((((!((map__25062 == null)))?((((map__25062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25062):map__25062);
var opts = map__25062__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25059){
var G__25060 = cljs.core.first.call(null,seq25059);
var seq25059__$1 = cljs.core.next.call(null,seq25059);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25060,seq25059__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25067 = [];
var len__21232__auto___25117 = arguments.length;
var i__21233__auto___25118 = (0);
while(true){
if((i__21233__auto___25118 < len__21232__auto___25117)){
args25067.push((arguments[i__21233__auto___25118]));

var G__25119 = (i__21233__auto___25118 + (1));
i__21233__auto___25118 = G__25119;
continue;
} else {
}
break;
}

var G__25069 = args25067.length;
switch (G__25069) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25067.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24954__auto___25121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___25121){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___25121){
return (function (state_25093){
var state_val_25094 = (state_25093[(1)]);
if((state_val_25094 === (7))){
var inst_25089 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25095_25122 = state_25093__$1;
(statearr_25095_25122[(2)] = inst_25089);

(statearr_25095_25122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (1))){
var state_25093__$1 = state_25093;
var statearr_25096_25123 = state_25093__$1;
(statearr_25096_25123[(2)] = null);

(statearr_25096_25123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (4))){
var inst_25072 = (state_25093[(7)]);
var inst_25072__$1 = (state_25093[(2)]);
var inst_25073 = (inst_25072__$1 == null);
var state_25093__$1 = (function (){var statearr_25097 = state_25093;
(statearr_25097[(7)] = inst_25072__$1);

return statearr_25097;
})();
if(cljs.core.truth_(inst_25073)){
var statearr_25098_25124 = state_25093__$1;
(statearr_25098_25124[(1)] = (5));

} else {
var statearr_25099_25125 = state_25093__$1;
(statearr_25099_25125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (13))){
var state_25093__$1 = state_25093;
var statearr_25100_25126 = state_25093__$1;
(statearr_25100_25126[(2)] = null);

(statearr_25100_25126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (6))){
var inst_25072 = (state_25093[(7)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25093__$1,(11),to,inst_25072);
} else {
if((state_val_25094 === (3))){
var inst_25091 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25093__$1,inst_25091);
} else {
if((state_val_25094 === (12))){
var state_25093__$1 = state_25093;
var statearr_25101_25127 = state_25093__$1;
(statearr_25101_25127[(2)] = null);

(statearr_25101_25127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (2))){
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(4),from);
} else {
if((state_val_25094 === (11))){
var inst_25082 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
if(cljs.core.truth_(inst_25082)){
var statearr_25102_25128 = state_25093__$1;
(statearr_25102_25128[(1)] = (12));

} else {
var statearr_25103_25129 = state_25093__$1;
(statearr_25103_25129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (9))){
var state_25093__$1 = state_25093;
var statearr_25104_25130 = state_25093__$1;
(statearr_25104_25130[(2)] = null);

(statearr_25104_25130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (5))){
var state_25093__$1 = state_25093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25105_25131 = state_25093__$1;
(statearr_25105_25131[(1)] = (8));

} else {
var statearr_25106_25132 = state_25093__$1;
(statearr_25106_25132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (14))){
var inst_25087 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25107_25133 = state_25093__$1;
(statearr_25107_25133[(2)] = inst_25087);

(statearr_25107_25133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (10))){
var inst_25079 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25108_25134 = state_25093__$1;
(statearr_25108_25134[(2)] = inst_25079);

(statearr_25108_25134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (8))){
var inst_25076 = cljs.core.async.close_BANG_.call(null,to);
var state_25093__$1 = state_25093;
var statearr_25109_25135 = state_25093__$1;
(statearr_25109_25135[(2)] = inst_25076);

(statearr_25109_25135[(1)] = (10));


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
});})(c__24954__auto___25121))
;
return ((function (switch__24842__auto__,c__24954__auto___25121){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_25113 = [null,null,null,null,null,null,null,null];
(statearr_25113[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_25113[(1)] = (1));

return statearr_25113;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_25093){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object)){
var ex__24846__auto__ = e25114;
var statearr_25115_25136 = state_25093;
(statearr_25115_25136[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25137 = state_25093;
state_25093 = G__25137;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_25093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_25093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___25121))
})();
var state__24956__auto__ = (function (){var statearr_25116 = f__24955__auto__.call(null);
(statearr_25116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___25121);

return statearr_25116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___25121))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25325){
var vec__25326 = p__25325;
var v = cljs.core.nth.call(null,vec__25326,(0),null);
var p = cljs.core.nth.call(null,vec__25326,(1),null);
var job = vec__25326;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24954__auto___25512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___25512,res,vec__25326,v,p,job,jobs,results){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___25512,res,vec__25326,v,p,job,jobs,results){
return (function (state_25333){
var state_val_25334 = (state_25333[(1)]);
if((state_val_25334 === (1))){
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,(2),res,v);
} else {
if((state_val_25334 === (2))){
var inst_25330 = (state_25333[(2)]);
var inst_25331 = cljs.core.async.close_BANG_.call(null,res);
var state_25333__$1 = (function (){var statearr_25335 = state_25333;
(statearr_25335[(7)] = inst_25330);

return statearr_25335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else {
return null;
}
}
});})(c__24954__auto___25512,res,vec__25326,v,p,job,jobs,results))
;
return ((function (switch__24842__auto__,c__24954__auto___25512,res,vec__25326,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0 = (function (){
var statearr_25339 = [null,null,null,null,null,null,null,null];
(statearr_25339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__);

(statearr_25339[(1)] = (1));

return statearr_25339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1 = (function (state_25333){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25340){if((e25340 instanceof Object)){
var ex__24846__auto__ = e25340;
var statearr_25341_25513 = state_25333;
(statearr_25341_25513[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25514 = state_25333;
state_25333 = G__25514;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___25512,res,vec__25326,v,p,job,jobs,results))
})();
var state__24956__auto__ = (function (){var statearr_25342 = f__24955__auto__.call(null);
(statearr_25342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___25512);

return statearr_25342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___25512,res,vec__25326,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25343){
var vec__25344 = p__25343;
var v = cljs.core.nth.call(null,vec__25344,(0),null);
var p = cljs.core.nth.call(null,vec__25344,(1),null);
var job = vec__25344;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21072__auto___25515 = n;
var __25516 = (0);
while(true){
if((__25516 < n__21072__auto___25515)){
var G__25347_25517 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25347_25517) {
case "compute":
var c__24954__auto___25519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25516,c__24954__auto___25519,G__25347_25517,n__21072__auto___25515,jobs,results,process,async){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (__25516,c__24954__auto___25519,G__25347_25517,n__21072__auto___25515,jobs,results,process,async){
return (function (state_25360){
var state_val_25361 = (state_25360[(1)]);
if((state_val_25361 === (1))){
var state_25360__$1 = state_25360;
var statearr_25362_25520 = state_25360__$1;
(statearr_25362_25520[(2)] = null);

(statearr_25362_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (2))){
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25360__$1,(4),jobs);
} else {
if((state_val_25361 === (3))){
var inst_25358 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25360__$1,inst_25358);
} else {
if((state_val_25361 === (4))){
var inst_25350 = (state_25360[(2)]);
var inst_25351 = process.call(null,inst_25350);
var state_25360__$1 = state_25360;
if(cljs.core.truth_(inst_25351)){
var statearr_25363_25521 = state_25360__$1;
(statearr_25363_25521[(1)] = (5));

} else {
var statearr_25364_25522 = state_25360__$1;
(statearr_25364_25522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (5))){
var state_25360__$1 = state_25360;
var statearr_25365_25523 = state_25360__$1;
(statearr_25365_25523[(2)] = null);

(statearr_25365_25523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (6))){
var state_25360__$1 = state_25360;
var statearr_25366_25524 = state_25360__$1;
(statearr_25366_25524[(2)] = null);

(statearr_25366_25524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (7))){
var inst_25356 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
var statearr_25367_25525 = state_25360__$1;
(statearr_25367_25525[(2)] = inst_25356);

(statearr_25367_25525[(1)] = (3));


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
});})(__25516,c__24954__auto___25519,G__25347_25517,n__21072__auto___25515,jobs,results,process,async))
;
return ((function (__25516,switch__24842__auto__,c__24954__auto___25519,G__25347_25517,n__21072__auto___25515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0 = (function (){
var statearr_25371 = [null,null,null,null,null,null,null];
(statearr_25371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__);

(statearr_25371[(1)] = (1));

return statearr_25371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1 = (function (state_25360){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25372){if((e25372 instanceof Object)){
var ex__24846__auto__ = e25372;
var statearr_25373_25526 = state_25360;
(statearr_25373_25526[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25527 = state_25360;
state_25360 = G__25527;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = function(state_25360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1.call(this,state_25360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__;
})()
;})(__25516,switch__24842__auto__,c__24954__auto___25519,G__25347_25517,n__21072__auto___25515,jobs,results,process,async))
})();
var state__24956__auto__ = (function (){var statearr_25374 = f__24955__auto__.call(null);
(statearr_25374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___25519);

return statearr_25374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(__25516,c__24954__auto___25519,G__25347_25517,n__21072__auto___25515,jobs,results,process,async))
);


break;
case "async":
var c__24954__auto___25528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25516,c__24954__auto___25528,G__25347_25517,n__21072__auto___25515,jobs,results,process,async){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (__25516,c__24954__auto___25528,G__25347_25517,n__21072__auto___25515,jobs,results,process,async){
return (function (state_25387){
var state_val_25388 = (state_25387[(1)]);
if((state_val_25388 === (1))){
var state_25387__$1 = state_25387;
var statearr_25389_25529 = state_25387__$1;
(statearr_25389_25529[(2)] = null);

(statearr_25389_25529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25388 === (2))){
var state_25387__$1 = state_25387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25387__$1,(4),jobs);
} else {
if((state_val_25388 === (3))){
var inst_25385 = (state_25387[(2)]);
var state_25387__$1 = state_25387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25387__$1,inst_25385);
} else {
if((state_val_25388 === (4))){
var inst_25377 = (state_25387[(2)]);
var inst_25378 = async.call(null,inst_25377);
var state_25387__$1 = state_25387;
if(cljs.core.truth_(inst_25378)){
var statearr_25390_25530 = state_25387__$1;
(statearr_25390_25530[(1)] = (5));

} else {
var statearr_25391_25531 = state_25387__$1;
(statearr_25391_25531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25388 === (5))){
var state_25387__$1 = state_25387;
var statearr_25392_25532 = state_25387__$1;
(statearr_25392_25532[(2)] = null);

(statearr_25392_25532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25388 === (6))){
var state_25387__$1 = state_25387;
var statearr_25393_25533 = state_25387__$1;
(statearr_25393_25533[(2)] = null);

(statearr_25393_25533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25388 === (7))){
var inst_25383 = (state_25387[(2)]);
var state_25387__$1 = state_25387;
var statearr_25394_25534 = state_25387__$1;
(statearr_25394_25534[(2)] = inst_25383);

(statearr_25394_25534[(1)] = (3));


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
});})(__25516,c__24954__auto___25528,G__25347_25517,n__21072__auto___25515,jobs,results,process,async))
;
return ((function (__25516,switch__24842__auto__,c__24954__auto___25528,G__25347_25517,n__21072__auto___25515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0 = (function (){
var statearr_25398 = [null,null,null,null,null,null,null];
(statearr_25398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__);

(statearr_25398[(1)] = (1));

return statearr_25398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1 = (function (state_25387){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object)){
var ex__24846__auto__ = e25399;
var statearr_25400_25535 = state_25387;
(statearr_25400_25535[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25536 = state_25387;
state_25387 = G__25536;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = function(state_25387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1.call(this,state_25387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__;
})()
;})(__25516,switch__24842__auto__,c__24954__auto___25528,G__25347_25517,n__21072__auto___25515,jobs,results,process,async))
})();
var state__24956__auto__ = (function (){var statearr_25401 = f__24955__auto__.call(null);
(statearr_25401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___25528);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(__25516,c__24954__auto___25528,G__25347_25517,n__21072__auto___25515,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25537 = (__25516 + (1));
__25516 = G__25537;
continue;
} else {
}
break;
}

var c__24954__auto___25538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___25538,jobs,results,process,async){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___25538,jobs,results,process,async){
return (function (state_25423){
var state_val_25424 = (state_25423[(1)]);
if((state_val_25424 === (1))){
var state_25423__$1 = state_25423;
var statearr_25425_25539 = state_25423__$1;
(statearr_25425_25539[(2)] = null);

(statearr_25425_25539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (2))){
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25423__$1,(4),from);
} else {
if((state_val_25424 === (3))){
var inst_25421 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25423__$1,inst_25421);
} else {
if((state_val_25424 === (4))){
var inst_25404 = (state_25423[(7)]);
var inst_25404__$1 = (state_25423[(2)]);
var inst_25405 = (inst_25404__$1 == null);
var state_25423__$1 = (function (){var statearr_25426 = state_25423;
(statearr_25426[(7)] = inst_25404__$1);

return statearr_25426;
})();
if(cljs.core.truth_(inst_25405)){
var statearr_25427_25540 = state_25423__$1;
(statearr_25427_25540[(1)] = (5));

} else {
var statearr_25428_25541 = state_25423__$1;
(statearr_25428_25541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (5))){
var inst_25407 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25423__$1 = state_25423;
var statearr_25429_25542 = state_25423__$1;
(statearr_25429_25542[(2)] = inst_25407);

(statearr_25429_25542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (6))){
var inst_25404 = (state_25423[(7)]);
var inst_25409 = (state_25423[(8)]);
var inst_25409__$1 = cljs.core.async.chan.call(null,(1));
var inst_25410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25411 = [inst_25404,inst_25409__$1];
var inst_25412 = (new cljs.core.PersistentVector(null,2,(5),inst_25410,inst_25411,null));
var state_25423__$1 = (function (){var statearr_25430 = state_25423;
(statearr_25430[(8)] = inst_25409__$1);

return statearr_25430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25423__$1,(8),jobs,inst_25412);
} else {
if((state_val_25424 === (7))){
var inst_25419 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25431_25543 = state_25423__$1;
(statearr_25431_25543[(2)] = inst_25419);

(statearr_25431_25543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (8))){
var inst_25409 = (state_25423[(8)]);
var inst_25414 = (state_25423[(2)]);
var state_25423__$1 = (function (){var statearr_25432 = state_25423;
(statearr_25432[(9)] = inst_25414);

return statearr_25432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25423__$1,(9),results,inst_25409);
} else {
if((state_val_25424 === (9))){
var inst_25416 = (state_25423[(2)]);
var state_25423__$1 = (function (){var statearr_25433 = state_25423;
(statearr_25433[(10)] = inst_25416);

return statearr_25433;
})();
var statearr_25434_25544 = state_25423__$1;
(statearr_25434_25544[(2)] = null);

(statearr_25434_25544[(1)] = (2));


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
});})(c__24954__auto___25538,jobs,results,process,async))
;
return ((function (switch__24842__auto__,c__24954__auto___25538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0 = (function (){
var statearr_25438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__);

(statearr_25438[(1)] = (1));

return statearr_25438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1 = (function (state_25423){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25439){if((e25439 instanceof Object)){
var ex__24846__auto__ = e25439;
var statearr_25440_25545 = state_25423;
(statearr_25440_25545[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25546 = state_25423;
state_25423 = G__25546;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___25538,jobs,results,process,async))
})();
var state__24956__auto__ = (function (){var statearr_25441 = f__24955__auto__.call(null);
(statearr_25441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___25538);

return statearr_25441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___25538,jobs,results,process,async))
);


var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__,jobs,results,process,async){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__,jobs,results,process,async){
return (function (state_25479){
var state_val_25480 = (state_25479[(1)]);
if((state_val_25480 === (7))){
var inst_25475 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25481_25547 = state_25479__$1;
(statearr_25481_25547[(2)] = inst_25475);

(statearr_25481_25547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (20))){
var state_25479__$1 = state_25479;
var statearr_25482_25548 = state_25479__$1;
(statearr_25482_25548[(2)] = null);

(statearr_25482_25548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (1))){
var state_25479__$1 = state_25479;
var statearr_25483_25549 = state_25479__$1;
(statearr_25483_25549[(2)] = null);

(statearr_25483_25549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (4))){
var inst_25444 = (state_25479[(7)]);
var inst_25444__$1 = (state_25479[(2)]);
var inst_25445 = (inst_25444__$1 == null);
var state_25479__$1 = (function (){var statearr_25484 = state_25479;
(statearr_25484[(7)] = inst_25444__$1);

return statearr_25484;
})();
if(cljs.core.truth_(inst_25445)){
var statearr_25485_25550 = state_25479__$1;
(statearr_25485_25550[(1)] = (5));

} else {
var statearr_25486_25551 = state_25479__$1;
(statearr_25486_25551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (15))){
var inst_25457 = (state_25479[(8)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25479__$1,(18),to,inst_25457);
} else {
if((state_val_25480 === (21))){
var inst_25470 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25487_25552 = state_25479__$1;
(statearr_25487_25552[(2)] = inst_25470);

(statearr_25487_25552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (13))){
var inst_25472 = (state_25479[(2)]);
var state_25479__$1 = (function (){var statearr_25488 = state_25479;
(statearr_25488[(9)] = inst_25472);

return statearr_25488;
})();
var statearr_25489_25553 = state_25479__$1;
(statearr_25489_25553[(2)] = null);

(statearr_25489_25553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (6))){
var inst_25444 = (state_25479[(7)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25479__$1,(11),inst_25444);
} else {
if((state_val_25480 === (17))){
var inst_25465 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25465)){
var statearr_25490_25554 = state_25479__$1;
(statearr_25490_25554[(1)] = (19));

} else {
var statearr_25491_25555 = state_25479__$1;
(statearr_25491_25555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (3))){
var inst_25477 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25479__$1,inst_25477);
} else {
if((state_val_25480 === (12))){
var inst_25454 = (state_25479[(10)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25479__$1,(14),inst_25454);
} else {
if((state_val_25480 === (2))){
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25479__$1,(4),results);
} else {
if((state_val_25480 === (19))){
var state_25479__$1 = state_25479;
var statearr_25492_25556 = state_25479__$1;
(statearr_25492_25556[(2)] = null);

(statearr_25492_25556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (11))){
var inst_25454 = (state_25479[(2)]);
var state_25479__$1 = (function (){var statearr_25493 = state_25479;
(statearr_25493[(10)] = inst_25454);

return statearr_25493;
})();
var statearr_25494_25557 = state_25479__$1;
(statearr_25494_25557[(2)] = null);

(statearr_25494_25557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (9))){
var state_25479__$1 = state_25479;
var statearr_25495_25558 = state_25479__$1;
(statearr_25495_25558[(2)] = null);

(statearr_25495_25558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (5))){
var state_25479__$1 = state_25479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25496_25559 = state_25479__$1;
(statearr_25496_25559[(1)] = (8));

} else {
var statearr_25497_25560 = state_25479__$1;
(statearr_25497_25560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (14))){
var inst_25459 = (state_25479[(11)]);
var inst_25457 = (state_25479[(8)]);
var inst_25457__$1 = (state_25479[(2)]);
var inst_25458 = (inst_25457__$1 == null);
var inst_25459__$1 = cljs.core.not.call(null,inst_25458);
var state_25479__$1 = (function (){var statearr_25498 = state_25479;
(statearr_25498[(11)] = inst_25459__$1);

(statearr_25498[(8)] = inst_25457__$1);

return statearr_25498;
})();
if(inst_25459__$1){
var statearr_25499_25561 = state_25479__$1;
(statearr_25499_25561[(1)] = (15));

} else {
var statearr_25500_25562 = state_25479__$1;
(statearr_25500_25562[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (16))){
var inst_25459 = (state_25479[(11)]);
var state_25479__$1 = state_25479;
var statearr_25501_25563 = state_25479__$1;
(statearr_25501_25563[(2)] = inst_25459);

(statearr_25501_25563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (10))){
var inst_25451 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25502_25564 = state_25479__$1;
(statearr_25502_25564[(2)] = inst_25451);

(statearr_25502_25564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (18))){
var inst_25462 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25503_25565 = state_25479__$1;
(statearr_25503_25565[(2)] = inst_25462);

(statearr_25503_25565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (8))){
var inst_25448 = cljs.core.async.close_BANG_.call(null,to);
var state_25479__$1 = state_25479;
var statearr_25504_25566 = state_25479__$1;
(statearr_25504_25566[(2)] = inst_25448);

(statearr_25504_25566[(1)] = (10));


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
}
}
}
}
});})(c__24954__auto__,jobs,results,process,async))
;
return ((function (switch__24842__auto__,c__24954__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0 = (function (){
var statearr_25508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__);

(statearr_25508[(1)] = (1));

return statearr_25508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1 = (function (state_25479){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25509){if((e25509 instanceof Object)){
var ex__24846__auto__ = e25509;
var statearr_25510_25567 = state_25479;
(statearr_25510_25567[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25568 = state_25479;
state_25479 = G__25568;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__ = function(state_25479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1.call(this,state_25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24843__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__,jobs,results,process,async))
})();
var state__24956__auto__ = (function (){var statearr_25511 = f__24955__auto__.call(null);
(statearr_25511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_25511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__,jobs,results,process,async))
);

return c__24954__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25569 = [];
var len__21232__auto___25572 = arguments.length;
var i__21233__auto___25573 = (0);
while(true){
if((i__21233__auto___25573 < len__21232__auto___25572)){
args25569.push((arguments[i__21233__auto___25573]));

var G__25574 = (i__21233__auto___25573 + (1));
i__21233__auto___25573 = G__25574;
continue;
} else {
}
break;
}

var G__25571 = args25569.length;
switch (G__25571) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25569.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25576 = [];
var len__21232__auto___25579 = arguments.length;
var i__21233__auto___25580 = (0);
while(true){
if((i__21233__auto___25580 < len__21232__auto___25579)){
args25576.push((arguments[i__21233__auto___25580]));

var G__25581 = (i__21233__auto___25580 + (1));
i__21233__auto___25580 = G__25581;
continue;
} else {
}
break;
}

var G__25578 = args25576.length;
switch (G__25578) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25576.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25583 = [];
var len__21232__auto___25636 = arguments.length;
var i__21233__auto___25637 = (0);
while(true){
if((i__21233__auto___25637 < len__21232__auto___25636)){
args25583.push((arguments[i__21233__auto___25637]));

var G__25638 = (i__21233__auto___25637 + (1));
i__21233__auto___25637 = G__25638;
continue;
} else {
}
break;
}

var G__25585 = args25583.length;
switch (G__25585) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25583.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24954__auto___25640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___25640,tc,fc){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___25640,tc,fc){
return (function (state_25611){
var state_val_25612 = (state_25611[(1)]);
if((state_val_25612 === (7))){
var inst_25607 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25613_25641 = state_25611__$1;
(statearr_25613_25641[(2)] = inst_25607);

(statearr_25613_25641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (1))){
var state_25611__$1 = state_25611;
var statearr_25614_25642 = state_25611__$1;
(statearr_25614_25642[(2)] = null);

(statearr_25614_25642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (4))){
var inst_25588 = (state_25611[(7)]);
var inst_25588__$1 = (state_25611[(2)]);
var inst_25589 = (inst_25588__$1 == null);
var state_25611__$1 = (function (){var statearr_25615 = state_25611;
(statearr_25615[(7)] = inst_25588__$1);

return statearr_25615;
})();
if(cljs.core.truth_(inst_25589)){
var statearr_25616_25643 = state_25611__$1;
(statearr_25616_25643[(1)] = (5));

} else {
var statearr_25617_25644 = state_25611__$1;
(statearr_25617_25644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (13))){
var state_25611__$1 = state_25611;
var statearr_25618_25645 = state_25611__$1;
(statearr_25618_25645[(2)] = null);

(statearr_25618_25645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (6))){
var inst_25588 = (state_25611[(7)]);
var inst_25594 = p.call(null,inst_25588);
var state_25611__$1 = state_25611;
if(cljs.core.truth_(inst_25594)){
var statearr_25619_25646 = state_25611__$1;
(statearr_25619_25646[(1)] = (9));

} else {
var statearr_25620_25647 = state_25611__$1;
(statearr_25620_25647[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (3))){
var inst_25609 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25611__$1,inst_25609);
} else {
if((state_val_25612 === (12))){
var state_25611__$1 = state_25611;
var statearr_25621_25648 = state_25611__$1;
(statearr_25621_25648[(2)] = null);

(statearr_25621_25648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (2))){
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25611__$1,(4),ch);
} else {
if((state_val_25612 === (11))){
var inst_25588 = (state_25611[(7)]);
var inst_25598 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25611__$1,(8),inst_25598,inst_25588);
} else {
if((state_val_25612 === (9))){
var state_25611__$1 = state_25611;
var statearr_25622_25649 = state_25611__$1;
(statearr_25622_25649[(2)] = tc);

(statearr_25622_25649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (5))){
var inst_25591 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25592 = cljs.core.async.close_BANG_.call(null,fc);
var state_25611__$1 = (function (){var statearr_25623 = state_25611;
(statearr_25623[(8)] = inst_25591);

return statearr_25623;
})();
var statearr_25624_25650 = state_25611__$1;
(statearr_25624_25650[(2)] = inst_25592);

(statearr_25624_25650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (14))){
var inst_25605 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25625_25651 = state_25611__$1;
(statearr_25625_25651[(2)] = inst_25605);

(statearr_25625_25651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (10))){
var state_25611__$1 = state_25611;
var statearr_25626_25652 = state_25611__$1;
(statearr_25626_25652[(2)] = fc);

(statearr_25626_25652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (8))){
var inst_25600 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
if(cljs.core.truth_(inst_25600)){
var statearr_25627_25653 = state_25611__$1;
(statearr_25627_25653[(1)] = (12));

} else {
var statearr_25628_25654 = state_25611__$1;
(statearr_25628_25654[(1)] = (13));

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
});})(c__24954__auto___25640,tc,fc))
;
return ((function (switch__24842__auto__,c__24954__auto___25640,tc,fc){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_25632 = [null,null,null,null,null,null,null,null,null];
(statearr_25632[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_25632[(1)] = (1));

return statearr_25632;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_25611){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25633){if((e25633 instanceof Object)){
var ex__24846__auto__ = e25633;
var statearr_25634_25655 = state_25611;
(statearr_25634_25655[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25656 = state_25611;
state_25611 = G__25656;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_25611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_25611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___25640,tc,fc))
})();
var state__24956__auto__ = (function (){var statearr_25635 = f__24955__auto__.call(null);
(statearr_25635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___25640);

return statearr_25635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___25640,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__){
return (function (state_25720){
var state_val_25721 = (state_25720[(1)]);
if((state_val_25721 === (7))){
var inst_25716 = (state_25720[(2)]);
var state_25720__$1 = state_25720;
var statearr_25722_25743 = state_25720__$1;
(statearr_25722_25743[(2)] = inst_25716);

(statearr_25722_25743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (1))){
var inst_25700 = init;
var state_25720__$1 = (function (){var statearr_25723 = state_25720;
(statearr_25723[(7)] = inst_25700);

return statearr_25723;
})();
var statearr_25724_25744 = state_25720__$1;
(statearr_25724_25744[(2)] = null);

(statearr_25724_25744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (4))){
var inst_25703 = (state_25720[(8)]);
var inst_25703__$1 = (state_25720[(2)]);
var inst_25704 = (inst_25703__$1 == null);
var state_25720__$1 = (function (){var statearr_25725 = state_25720;
(statearr_25725[(8)] = inst_25703__$1);

return statearr_25725;
})();
if(cljs.core.truth_(inst_25704)){
var statearr_25726_25745 = state_25720__$1;
(statearr_25726_25745[(1)] = (5));

} else {
var statearr_25727_25746 = state_25720__$1;
(statearr_25727_25746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (6))){
var inst_25703 = (state_25720[(8)]);
var inst_25700 = (state_25720[(7)]);
var inst_25707 = (state_25720[(9)]);
var inst_25707__$1 = f.call(null,inst_25700,inst_25703);
var inst_25708 = cljs.core.reduced_QMARK_.call(null,inst_25707__$1);
var state_25720__$1 = (function (){var statearr_25728 = state_25720;
(statearr_25728[(9)] = inst_25707__$1);

return statearr_25728;
})();
if(inst_25708){
var statearr_25729_25747 = state_25720__$1;
(statearr_25729_25747[(1)] = (8));

} else {
var statearr_25730_25748 = state_25720__$1;
(statearr_25730_25748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (3))){
var inst_25718 = (state_25720[(2)]);
var state_25720__$1 = state_25720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25720__$1,inst_25718);
} else {
if((state_val_25721 === (2))){
var state_25720__$1 = state_25720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25720__$1,(4),ch);
} else {
if((state_val_25721 === (9))){
var inst_25707 = (state_25720[(9)]);
var inst_25700 = inst_25707;
var state_25720__$1 = (function (){var statearr_25731 = state_25720;
(statearr_25731[(7)] = inst_25700);

return statearr_25731;
})();
var statearr_25732_25749 = state_25720__$1;
(statearr_25732_25749[(2)] = null);

(statearr_25732_25749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (5))){
var inst_25700 = (state_25720[(7)]);
var state_25720__$1 = state_25720;
var statearr_25733_25750 = state_25720__$1;
(statearr_25733_25750[(2)] = inst_25700);

(statearr_25733_25750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (10))){
var inst_25714 = (state_25720[(2)]);
var state_25720__$1 = state_25720;
var statearr_25734_25751 = state_25720__$1;
(statearr_25734_25751[(2)] = inst_25714);

(statearr_25734_25751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (8))){
var inst_25707 = (state_25720[(9)]);
var inst_25710 = cljs.core.deref.call(null,inst_25707);
var state_25720__$1 = state_25720;
var statearr_25735_25752 = state_25720__$1;
(statearr_25735_25752[(2)] = inst_25710);

(statearr_25735_25752[(1)] = (10));


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
});})(c__24954__auto__))
;
return ((function (switch__24842__auto__,c__24954__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24843__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24843__auto____0 = (function (){
var statearr_25739 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25739[(0)] = cljs$core$async$reduce_$_state_machine__24843__auto__);

(statearr_25739[(1)] = (1));

return statearr_25739;
});
var cljs$core$async$reduce_$_state_machine__24843__auto____1 = (function (state_25720){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25740){if((e25740 instanceof Object)){
var ex__24846__auto__ = e25740;
var statearr_25741_25753 = state_25720;
(statearr_25741_25753[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25754 = state_25720;
state_25720 = G__25754;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24843__auto__ = function(state_25720){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24843__auto____1.call(this,state_25720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24843__auto____0;
cljs$core$async$reduce_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24843__auto____1;
return cljs$core$async$reduce_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__))
})();
var state__24956__auto__ = (function (){var statearr_25742 = f__24955__auto__.call(null);
(statearr_25742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_25742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__))
);

return c__24954__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25755 = [];
var len__21232__auto___25807 = arguments.length;
var i__21233__auto___25808 = (0);
while(true){
if((i__21233__auto___25808 < len__21232__auto___25807)){
args25755.push((arguments[i__21233__auto___25808]));

var G__25809 = (i__21233__auto___25808 + (1));
i__21233__auto___25808 = G__25809;
continue;
} else {
}
break;
}

var G__25757 = args25755.length;
switch (G__25757) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25755.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__){
return (function (state_25782){
var state_val_25783 = (state_25782[(1)]);
if((state_val_25783 === (7))){
var inst_25764 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
var statearr_25784_25811 = state_25782__$1;
(statearr_25784_25811[(2)] = inst_25764);

(statearr_25784_25811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (1))){
var inst_25758 = cljs.core.seq.call(null,coll);
var inst_25759 = inst_25758;
var state_25782__$1 = (function (){var statearr_25785 = state_25782;
(statearr_25785[(7)] = inst_25759);

return statearr_25785;
})();
var statearr_25786_25812 = state_25782__$1;
(statearr_25786_25812[(2)] = null);

(statearr_25786_25812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (4))){
var inst_25759 = (state_25782[(7)]);
var inst_25762 = cljs.core.first.call(null,inst_25759);
var state_25782__$1 = state_25782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25782__$1,(7),ch,inst_25762);
} else {
if((state_val_25783 === (13))){
var inst_25776 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
var statearr_25787_25813 = state_25782__$1;
(statearr_25787_25813[(2)] = inst_25776);

(statearr_25787_25813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (6))){
var inst_25767 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
if(cljs.core.truth_(inst_25767)){
var statearr_25788_25814 = state_25782__$1;
(statearr_25788_25814[(1)] = (8));

} else {
var statearr_25789_25815 = state_25782__$1;
(statearr_25789_25815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (3))){
var inst_25780 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25782__$1,inst_25780);
} else {
if((state_val_25783 === (12))){
var state_25782__$1 = state_25782;
var statearr_25790_25816 = state_25782__$1;
(statearr_25790_25816[(2)] = null);

(statearr_25790_25816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (2))){
var inst_25759 = (state_25782[(7)]);
var state_25782__$1 = state_25782;
if(cljs.core.truth_(inst_25759)){
var statearr_25791_25817 = state_25782__$1;
(statearr_25791_25817[(1)] = (4));

} else {
var statearr_25792_25818 = state_25782__$1;
(statearr_25792_25818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (11))){
var inst_25773 = cljs.core.async.close_BANG_.call(null,ch);
var state_25782__$1 = state_25782;
var statearr_25793_25819 = state_25782__$1;
(statearr_25793_25819[(2)] = inst_25773);

(statearr_25793_25819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (9))){
var state_25782__$1 = state_25782;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25794_25820 = state_25782__$1;
(statearr_25794_25820[(1)] = (11));

} else {
var statearr_25795_25821 = state_25782__$1;
(statearr_25795_25821[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (5))){
var inst_25759 = (state_25782[(7)]);
var state_25782__$1 = state_25782;
var statearr_25796_25822 = state_25782__$1;
(statearr_25796_25822[(2)] = inst_25759);

(statearr_25796_25822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (10))){
var inst_25778 = (state_25782[(2)]);
var state_25782__$1 = state_25782;
var statearr_25797_25823 = state_25782__$1;
(statearr_25797_25823[(2)] = inst_25778);

(statearr_25797_25823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25783 === (8))){
var inst_25759 = (state_25782[(7)]);
var inst_25769 = cljs.core.next.call(null,inst_25759);
var inst_25759__$1 = inst_25769;
var state_25782__$1 = (function (){var statearr_25798 = state_25782;
(statearr_25798[(7)] = inst_25759__$1);

return statearr_25798;
})();
var statearr_25799_25824 = state_25782__$1;
(statearr_25799_25824[(2)] = null);

(statearr_25799_25824[(1)] = (2));


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
});})(c__24954__auto__))
;
return ((function (switch__24842__auto__,c__24954__auto__){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_25803 = [null,null,null,null,null,null,null,null];
(statearr_25803[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_25803[(1)] = (1));

return statearr_25803;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_25782){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_25782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e25804){if((e25804 instanceof Object)){
var ex__24846__auto__ = e25804;
var statearr_25805_25825 = state_25782;
(statearr_25805_25825[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25826 = state_25782;
state_25782 = G__25826;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_25782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_25782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__))
})();
var state__24956__auto__ = (function (){var statearr_25806 = f__24955__auto__.call(null);
(statearr_25806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_25806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__))
);

return c__24954__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20820__auto__ = (((_ == null))?null:_);
var m__20821__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,_);
} else {
var m__20821__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20821__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m,ch);
} else {
var m__20821__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m);
} else {
var m__20821__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26052 = (function (mult,ch,cs,meta26053){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26053 = meta26053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26054,meta26053__$1){
var self__ = this;
var _26054__$1 = this;
return (new cljs.core.async.t_cljs$core$async26052(self__.mult,self__.ch,self__.cs,meta26053__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26054){
var self__ = this;
var _26054__$1 = this;
return self__.meta26053;
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26053","meta26053",-715621760,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26052";

cljs.core.async.t_cljs$core$async26052.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async26052");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26052 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26052(mult__$1,ch__$1,cs__$1,meta26053){
return (new cljs.core.async.t_cljs$core$async26052(mult__$1,ch__$1,cs__$1,meta26053));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26052(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24954__auto___26277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___26277,cs,m,dchan,dctr,done){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___26277,cs,m,dchan,dctr,done){
return (function (state_26189){
var state_val_26190 = (state_26189[(1)]);
if((state_val_26190 === (7))){
var inst_26185 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26191_26278 = state_26189__$1;
(statearr_26191_26278[(2)] = inst_26185);

(statearr_26191_26278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (20))){
var inst_26088 = (state_26189[(7)]);
var inst_26100 = cljs.core.first.call(null,inst_26088);
var inst_26101 = cljs.core.nth.call(null,inst_26100,(0),null);
var inst_26102 = cljs.core.nth.call(null,inst_26100,(1),null);
var state_26189__$1 = (function (){var statearr_26192 = state_26189;
(statearr_26192[(8)] = inst_26101);

return statearr_26192;
})();
if(cljs.core.truth_(inst_26102)){
var statearr_26193_26279 = state_26189__$1;
(statearr_26193_26279[(1)] = (22));

} else {
var statearr_26194_26280 = state_26189__$1;
(statearr_26194_26280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (27))){
var inst_26132 = (state_26189[(9)]);
var inst_26057 = (state_26189[(10)]);
var inst_26137 = (state_26189[(11)]);
var inst_26130 = (state_26189[(12)]);
var inst_26137__$1 = cljs.core._nth.call(null,inst_26130,inst_26132);
var inst_26138 = cljs.core.async.put_BANG_.call(null,inst_26137__$1,inst_26057,done);
var state_26189__$1 = (function (){var statearr_26195 = state_26189;
(statearr_26195[(11)] = inst_26137__$1);

return statearr_26195;
})();
if(cljs.core.truth_(inst_26138)){
var statearr_26196_26281 = state_26189__$1;
(statearr_26196_26281[(1)] = (30));

} else {
var statearr_26197_26282 = state_26189__$1;
(statearr_26197_26282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (1))){
var state_26189__$1 = state_26189;
var statearr_26198_26283 = state_26189__$1;
(statearr_26198_26283[(2)] = null);

(statearr_26198_26283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (24))){
var inst_26088 = (state_26189[(7)]);
var inst_26107 = (state_26189[(2)]);
var inst_26108 = cljs.core.next.call(null,inst_26088);
var inst_26066 = inst_26108;
var inst_26067 = null;
var inst_26068 = (0);
var inst_26069 = (0);
var state_26189__$1 = (function (){var statearr_26199 = state_26189;
(statearr_26199[(13)] = inst_26066);

(statearr_26199[(14)] = inst_26067);

(statearr_26199[(15)] = inst_26068);

(statearr_26199[(16)] = inst_26107);

(statearr_26199[(17)] = inst_26069);

return statearr_26199;
})();
var statearr_26200_26284 = state_26189__$1;
(statearr_26200_26284[(2)] = null);

(statearr_26200_26284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (39))){
var state_26189__$1 = state_26189;
var statearr_26204_26285 = state_26189__$1;
(statearr_26204_26285[(2)] = null);

(statearr_26204_26285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (4))){
var inst_26057 = (state_26189[(10)]);
var inst_26057__$1 = (state_26189[(2)]);
var inst_26058 = (inst_26057__$1 == null);
var state_26189__$1 = (function (){var statearr_26205 = state_26189;
(statearr_26205[(10)] = inst_26057__$1);

return statearr_26205;
})();
if(cljs.core.truth_(inst_26058)){
var statearr_26206_26286 = state_26189__$1;
(statearr_26206_26286[(1)] = (5));

} else {
var statearr_26207_26287 = state_26189__$1;
(statearr_26207_26287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (15))){
var inst_26066 = (state_26189[(13)]);
var inst_26067 = (state_26189[(14)]);
var inst_26068 = (state_26189[(15)]);
var inst_26069 = (state_26189[(17)]);
var inst_26084 = (state_26189[(2)]);
var inst_26085 = (inst_26069 + (1));
var tmp26201 = inst_26066;
var tmp26202 = inst_26067;
var tmp26203 = inst_26068;
var inst_26066__$1 = tmp26201;
var inst_26067__$1 = tmp26202;
var inst_26068__$1 = tmp26203;
var inst_26069__$1 = inst_26085;
var state_26189__$1 = (function (){var statearr_26208 = state_26189;
(statearr_26208[(13)] = inst_26066__$1);

(statearr_26208[(14)] = inst_26067__$1);

(statearr_26208[(15)] = inst_26068__$1);

(statearr_26208[(18)] = inst_26084);

(statearr_26208[(17)] = inst_26069__$1);

return statearr_26208;
})();
var statearr_26209_26288 = state_26189__$1;
(statearr_26209_26288[(2)] = null);

(statearr_26209_26288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (21))){
var inst_26111 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26213_26289 = state_26189__$1;
(statearr_26213_26289[(2)] = inst_26111);

(statearr_26213_26289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (31))){
var inst_26137 = (state_26189[(11)]);
var inst_26141 = done.call(null,null);
var inst_26142 = cljs.core.async.untap_STAR_.call(null,m,inst_26137);
var state_26189__$1 = (function (){var statearr_26214 = state_26189;
(statearr_26214[(19)] = inst_26141);

return statearr_26214;
})();
var statearr_26215_26290 = state_26189__$1;
(statearr_26215_26290[(2)] = inst_26142);

(statearr_26215_26290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (32))){
var inst_26129 = (state_26189[(20)]);
var inst_26131 = (state_26189[(21)]);
var inst_26132 = (state_26189[(9)]);
var inst_26130 = (state_26189[(12)]);
var inst_26144 = (state_26189[(2)]);
var inst_26145 = (inst_26132 + (1));
var tmp26210 = inst_26129;
var tmp26211 = inst_26131;
var tmp26212 = inst_26130;
var inst_26129__$1 = tmp26210;
var inst_26130__$1 = tmp26212;
var inst_26131__$1 = tmp26211;
var inst_26132__$1 = inst_26145;
var state_26189__$1 = (function (){var statearr_26216 = state_26189;
(statearr_26216[(20)] = inst_26129__$1);

(statearr_26216[(21)] = inst_26131__$1);

(statearr_26216[(9)] = inst_26132__$1);

(statearr_26216[(12)] = inst_26130__$1);

(statearr_26216[(22)] = inst_26144);

return statearr_26216;
})();
var statearr_26217_26291 = state_26189__$1;
(statearr_26217_26291[(2)] = null);

(statearr_26217_26291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (40))){
var inst_26157 = (state_26189[(23)]);
var inst_26161 = done.call(null,null);
var inst_26162 = cljs.core.async.untap_STAR_.call(null,m,inst_26157);
var state_26189__$1 = (function (){var statearr_26218 = state_26189;
(statearr_26218[(24)] = inst_26161);

return statearr_26218;
})();
var statearr_26219_26292 = state_26189__$1;
(statearr_26219_26292[(2)] = inst_26162);

(statearr_26219_26292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (33))){
var inst_26148 = (state_26189[(25)]);
var inst_26150 = cljs.core.chunked_seq_QMARK_.call(null,inst_26148);
var state_26189__$1 = state_26189;
if(inst_26150){
var statearr_26220_26293 = state_26189__$1;
(statearr_26220_26293[(1)] = (36));

} else {
var statearr_26221_26294 = state_26189__$1;
(statearr_26221_26294[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (13))){
var inst_26078 = (state_26189[(26)]);
var inst_26081 = cljs.core.async.close_BANG_.call(null,inst_26078);
var state_26189__$1 = state_26189;
var statearr_26222_26295 = state_26189__$1;
(statearr_26222_26295[(2)] = inst_26081);

(statearr_26222_26295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (22))){
var inst_26101 = (state_26189[(8)]);
var inst_26104 = cljs.core.async.close_BANG_.call(null,inst_26101);
var state_26189__$1 = state_26189;
var statearr_26223_26296 = state_26189__$1;
(statearr_26223_26296[(2)] = inst_26104);

(statearr_26223_26296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (36))){
var inst_26148 = (state_26189[(25)]);
var inst_26152 = cljs.core.chunk_first.call(null,inst_26148);
var inst_26153 = cljs.core.chunk_rest.call(null,inst_26148);
var inst_26154 = cljs.core.count.call(null,inst_26152);
var inst_26129 = inst_26153;
var inst_26130 = inst_26152;
var inst_26131 = inst_26154;
var inst_26132 = (0);
var state_26189__$1 = (function (){var statearr_26224 = state_26189;
(statearr_26224[(20)] = inst_26129);

(statearr_26224[(21)] = inst_26131);

(statearr_26224[(9)] = inst_26132);

(statearr_26224[(12)] = inst_26130);

return statearr_26224;
})();
var statearr_26225_26297 = state_26189__$1;
(statearr_26225_26297[(2)] = null);

(statearr_26225_26297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (41))){
var inst_26148 = (state_26189[(25)]);
var inst_26164 = (state_26189[(2)]);
var inst_26165 = cljs.core.next.call(null,inst_26148);
var inst_26129 = inst_26165;
var inst_26130 = null;
var inst_26131 = (0);
var inst_26132 = (0);
var state_26189__$1 = (function (){var statearr_26226 = state_26189;
(statearr_26226[(20)] = inst_26129);

(statearr_26226[(27)] = inst_26164);

(statearr_26226[(21)] = inst_26131);

(statearr_26226[(9)] = inst_26132);

(statearr_26226[(12)] = inst_26130);

return statearr_26226;
})();
var statearr_26227_26298 = state_26189__$1;
(statearr_26227_26298[(2)] = null);

(statearr_26227_26298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (43))){
var state_26189__$1 = state_26189;
var statearr_26228_26299 = state_26189__$1;
(statearr_26228_26299[(2)] = null);

(statearr_26228_26299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (29))){
var inst_26173 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26229_26300 = state_26189__$1;
(statearr_26229_26300[(2)] = inst_26173);

(statearr_26229_26300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (44))){
var inst_26182 = (state_26189[(2)]);
var state_26189__$1 = (function (){var statearr_26230 = state_26189;
(statearr_26230[(28)] = inst_26182);

return statearr_26230;
})();
var statearr_26231_26301 = state_26189__$1;
(statearr_26231_26301[(2)] = null);

(statearr_26231_26301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (6))){
var inst_26121 = (state_26189[(29)]);
var inst_26120 = cljs.core.deref.call(null,cs);
var inst_26121__$1 = cljs.core.keys.call(null,inst_26120);
var inst_26122 = cljs.core.count.call(null,inst_26121__$1);
var inst_26123 = cljs.core.reset_BANG_.call(null,dctr,inst_26122);
var inst_26128 = cljs.core.seq.call(null,inst_26121__$1);
var inst_26129 = inst_26128;
var inst_26130 = null;
var inst_26131 = (0);
var inst_26132 = (0);
var state_26189__$1 = (function (){var statearr_26232 = state_26189;
(statearr_26232[(20)] = inst_26129);

(statearr_26232[(21)] = inst_26131);

(statearr_26232[(9)] = inst_26132);

(statearr_26232[(30)] = inst_26123);

(statearr_26232[(29)] = inst_26121__$1);

(statearr_26232[(12)] = inst_26130);

return statearr_26232;
})();
var statearr_26233_26302 = state_26189__$1;
(statearr_26233_26302[(2)] = null);

(statearr_26233_26302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (28))){
var inst_26129 = (state_26189[(20)]);
var inst_26148 = (state_26189[(25)]);
var inst_26148__$1 = cljs.core.seq.call(null,inst_26129);
var state_26189__$1 = (function (){var statearr_26234 = state_26189;
(statearr_26234[(25)] = inst_26148__$1);

return statearr_26234;
})();
if(inst_26148__$1){
var statearr_26235_26303 = state_26189__$1;
(statearr_26235_26303[(1)] = (33));

} else {
var statearr_26236_26304 = state_26189__$1;
(statearr_26236_26304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (25))){
var inst_26131 = (state_26189[(21)]);
var inst_26132 = (state_26189[(9)]);
var inst_26134 = (inst_26132 < inst_26131);
var inst_26135 = inst_26134;
var state_26189__$1 = state_26189;
if(cljs.core.truth_(inst_26135)){
var statearr_26237_26305 = state_26189__$1;
(statearr_26237_26305[(1)] = (27));

} else {
var statearr_26238_26306 = state_26189__$1;
(statearr_26238_26306[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (34))){
var state_26189__$1 = state_26189;
var statearr_26239_26307 = state_26189__$1;
(statearr_26239_26307[(2)] = null);

(statearr_26239_26307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (17))){
var state_26189__$1 = state_26189;
var statearr_26240_26308 = state_26189__$1;
(statearr_26240_26308[(2)] = null);

(statearr_26240_26308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (3))){
var inst_26187 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26189__$1,inst_26187);
} else {
if((state_val_26190 === (12))){
var inst_26116 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26241_26309 = state_26189__$1;
(statearr_26241_26309[(2)] = inst_26116);

(statearr_26241_26309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (2))){
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26189__$1,(4),ch);
} else {
if((state_val_26190 === (23))){
var state_26189__$1 = state_26189;
var statearr_26242_26310 = state_26189__$1;
(statearr_26242_26310[(2)] = null);

(statearr_26242_26310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (35))){
var inst_26171 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26243_26311 = state_26189__$1;
(statearr_26243_26311[(2)] = inst_26171);

(statearr_26243_26311[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (19))){
var inst_26088 = (state_26189[(7)]);
var inst_26092 = cljs.core.chunk_first.call(null,inst_26088);
var inst_26093 = cljs.core.chunk_rest.call(null,inst_26088);
var inst_26094 = cljs.core.count.call(null,inst_26092);
var inst_26066 = inst_26093;
var inst_26067 = inst_26092;
var inst_26068 = inst_26094;
var inst_26069 = (0);
var state_26189__$1 = (function (){var statearr_26244 = state_26189;
(statearr_26244[(13)] = inst_26066);

(statearr_26244[(14)] = inst_26067);

(statearr_26244[(15)] = inst_26068);

(statearr_26244[(17)] = inst_26069);

return statearr_26244;
})();
var statearr_26245_26312 = state_26189__$1;
(statearr_26245_26312[(2)] = null);

(statearr_26245_26312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (11))){
var inst_26066 = (state_26189[(13)]);
var inst_26088 = (state_26189[(7)]);
var inst_26088__$1 = cljs.core.seq.call(null,inst_26066);
var state_26189__$1 = (function (){var statearr_26246 = state_26189;
(statearr_26246[(7)] = inst_26088__$1);

return statearr_26246;
})();
if(inst_26088__$1){
var statearr_26247_26313 = state_26189__$1;
(statearr_26247_26313[(1)] = (16));

} else {
var statearr_26248_26314 = state_26189__$1;
(statearr_26248_26314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (9))){
var inst_26118 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26249_26315 = state_26189__$1;
(statearr_26249_26315[(2)] = inst_26118);

(statearr_26249_26315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (5))){
var inst_26064 = cljs.core.deref.call(null,cs);
var inst_26065 = cljs.core.seq.call(null,inst_26064);
var inst_26066 = inst_26065;
var inst_26067 = null;
var inst_26068 = (0);
var inst_26069 = (0);
var state_26189__$1 = (function (){var statearr_26250 = state_26189;
(statearr_26250[(13)] = inst_26066);

(statearr_26250[(14)] = inst_26067);

(statearr_26250[(15)] = inst_26068);

(statearr_26250[(17)] = inst_26069);

return statearr_26250;
})();
var statearr_26251_26316 = state_26189__$1;
(statearr_26251_26316[(2)] = null);

(statearr_26251_26316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (14))){
var state_26189__$1 = state_26189;
var statearr_26252_26317 = state_26189__$1;
(statearr_26252_26317[(2)] = null);

(statearr_26252_26317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (45))){
var inst_26179 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26253_26318 = state_26189__$1;
(statearr_26253_26318[(2)] = inst_26179);

(statearr_26253_26318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (26))){
var inst_26121 = (state_26189[(29)]);
var inst_26175 = (state_26189[(2)]);
var inst_26176 = cljs.core.seq.call(null,inst_26121);
var state_26189__$1 = (function (){var statearr_26254 = state_26189;
(statearr_26254[(31)] = inst_26175);

return statearr_26254;
})();
if(inst_26176){
var statearr_26255_26319 = state_26189__$1;
(statearr_26255_26319[(1)] = (42));

} else {
var statearr_26256_26320 = state_26189__$1;
(statearr_26256_26320[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (16))){
var inst_26088 = (state_26189[(7)]);
var inst_26090 = cljs.core.chunked_seq_QMARK_.call(null,inst_26088);
var state_26189__$1 = state_26189;
if(inst_26090){
var statearr_26257_26321 = state_26189__$1;
(statearr_26257_26321[(1)] = (19));

} else {
var statearr_26258_26322 = state_26189__$1;
(statearr_26258_26322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (38))){
var inst_26168 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26259_26323 = state_26189__$1;
(statearr_26259_26323[(2)] = inst_26168);

(statearr_26259_26323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (30))){
var state_26189__$1 = state_26189;
var statearr_26260_26324 = state_26189__$1;
(statearr_26260_26324[(2)] = null);

(statearr_26260_26324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (10))){
var inst_26067 = (state_26189[(14)]);
var inst_26069 = (state_26189[(17)]);
var inst_26077 = cljs.core._nth.call(null,inst_26067,inst_26069);
var inst_26078 = cljs.core.nth.call(null,inst_26077,(0),null);
var inst_26079 = cljs.core.nth.call(null,inst_26077,(1),null);
var state_26189__$1 = (function (){var statearr_26261 = state_26189;
(statearr_26261[(26)] = inst_26078);

return statearr_26261;
})();
if(cljs.core.truth_(inst_26079)){
var statearr_26262_26325 = state_26189__$1;
(statearr_26262_26325[(1)] = (13));

} else {
var statearr_26263_26326 = state_26189__$1;
(statearr_26263_26326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (18))){
var inst_26114 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26264_26327 = state_26189__$1;
(statearr_26264_26327[(2)] = inst_26114);

(statearr_26264_26327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (42))){
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26189__$1,(45),dchan);
} else {
if((state_val_26190 === (37))){
var inst_26157 = (state_26189[(23)]);
var inst_26057 = (state_26189[(10)]);
var inst_26148 = (state_26189[(25)]);
var inst_26157__$1 = cljs.core.first.call(null,inst_26148);
var inst_26158 = cljs.core.async.put_BANG_.call(null,inst_26157__$1,inst_26057,done);
var state_26189__$1 = (function (){var statearr_26265 = state_26189;
(statearr_26265[(23)] = inst_26157__$1);

return statearr_26265;
})();
if(cljs.core.truth_(inst_26158)){
var statearr_26266_26328 = state_26189__$1;
(statearr_26266_26328[(1)] = (39));

} else {
var statearr_26267_26329 = state_26189__$1;
(statearr_26267_26329[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26190 === (8))){
var inst_26068 = (state_26189[(15)]);
var inst_26069 = (state_26189[(17)]);
var inst_26071 = (inst_26069 < inst_26068);
var inst_26072 = inst_26071;
var state_26189__$1 = state_26189;
if(cljs.core.truth_(inst_26072)){
var statearr_26268_26330 = state_26189__$1;
(statearr_26268_26330[(1)] = (10));

} else {
var statearr_26269_26331 = state_26189__$1;
(statearr_26269_26331[(1)] = (11));

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
});})(c__24954__auto___26277,cs,m,dchan,dctr,done))
;
return ((function (switch__24842__auto__,c__24954__auto___26277,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24843__auto__ = null;
var cljs$core$async$mult_$_state_machine__24843__auto____0 = (function (){
var statearr_26273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26273[(0)] = cljs$core$async$mult_$_state_machine__24843__auto__);

(statearr_26273[(1)] = (1));

return statearr_26273;
});
var cljs$core$async$mult_$_state_machine__24843__auto____1 = (function (state_26189){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_26189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e26274){if((e26274 instanceof Object)){
var ex__24846__auto__ = e26274;
var statearr_26275_26332 = state_26189;
(statearr_26275_26332[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26333 = state_26189;
state_26189 = G__26333;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24843__auto__ = function(state_26189){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24843__auto____1.call(this,state_26189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24843__auto____0;
cljs$core$async$mult_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24843__auto____1;
return cljs$core$async$mult_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___26277,cs,m,dchan,dctr,done))
})();
var state__24956__auto__ = (function (){var statearr_26276 = f__24955__auto__.call(null);
(statearr_26276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___26277);

return statearr_26276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___26277,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26334 = [];
var len__21232__auto___26337 = arguments.length;
var i__21233__auto___26338 = (0);
while(true){
if((i__21233__auto___26338 < len__21232__auto___26337)){
args26334.push((arguments[i__21233__auto___26338]));

var G__26339 = (i__21233__auto___26338 + (1));
i__21233__auto___26338 = G__26339;
continue;
} else {
}
break;
}

var G__26336 = args26334.length;
switch (G__26336) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26334.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m,ch);
} else {
var m__20821__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m,ch);
} else {
var m__20821__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m);
} else {
var m__20821__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m,state_map);
} else {
var m__20821__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20820__auto__ = (((m == null))?null:m);
var m__20821__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,m,mode);
} else {
var m__20821__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21239__auto__ = [];
var len__21232__auto___26351 = arguments.length;
var i__21233__auto___26352 = (0);
while(true){
if((i__21233__auto___26352 < len__21232__auto___26351)){
args__21239__auto__.push((arguments[i__21233__auto___26352]));

var G__26353 = (i__21233__auto___26352 + (1));
i__21233__auto___26352 = G__26353;
continue;
} else {
}
break;
}

var argseq__21240__auto__ = ((((3) < args__21239__auto__.length))?(new cljs.core.IndexedSeq(args__21239__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21240__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26345){
var map__26346 = p__26345;
var map__26346__$1 = ((((!((map__26346 == null)))?((((map__26346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var opts = map__26346__$1;
var statearr_26348_26354 = state;
(statearr_26348_26354[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26346,map__26346__$1,opts){
return (function (val){
var statearr_26349_26355 = state;
(statearr_26349_26355[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26346,map__26346__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26350_26356 = state;
(statearr_26350_26356[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26341){
var G__26342 = cljs.core.first.call(null,seq26341);
var seq26341__$1 = cljs.core.next.call(null,seq26341);
var G__26343 = cljs.core.first.call(null,seq26341__$1);
var seq26341__$2 = cljs.core.next.call(null,seq26341__$1);
var G__26344 = cljs.core.first.call(null,seq26341__$2);
var seq26341__$3 = cljs.core.next.call(null,seq26341__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26342,G__26343,G__26344,seq26341__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26522 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26523){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26523 = meta26523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26524,meta26523__$1){
var self__ = this;
var _26524__$1 = this;
return (new cljs.core.async.t_cljs$core$async26522(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26523__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26524){
var self__ = this;
var _26524__$1 = this;
return self__.meta26523;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26523","meta26523",900032220,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26522";

cljs.core.async.t_cljs$core$async26522.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async26522");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26522 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26523){
return (new cljs.core.async.t_cljs$core$async26522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26523));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26522(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24954__auto___26687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___26687,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___26687,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26624){
var state_val_26625 = (state_26624[(1)]);
if((state_val_26625 === (7))){
var inst_26540 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26626_26688 = state_26624__$1;
(statearr_26626_26688[(2)] = inst_26540);

(statearr_26626_26688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (20))){
var inst_26552 = (state_26624[(7)]);
var state_26624__$1 = state_26624;
var statearr_26627_26689 = state_26624__$1;
(statearr_26627_26689[(2)] = inst_26552);

(statearr_26627_26689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (27))){
var state_26624__$1 = state_26624;
var statearr_26628_26690 = state_26624__$1;
(statearr_26628_26690[(2)] = null);

(statearr_26628_26690[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (1))){
var inst_26528 = (state_26624[(8)]);
var inst_26528__$1 = calc_state.call(null);
var inst_26530 = (inst_26528__$1 == null);
var inst_26531 = cljs.core.not.call(null,inst_26530);
var state_26624__$1 = (function (){var statearr_26629 = state_26624;
(statearr_26629[(8)] = inst_26528__$1);

return statearr_26629;
})();
if(inst_26531){
var statearr_26630_26691 = state_26624__$1;
(statearr_26630_26691[(1)] = (2));

} else {
var statearr_26631_26692 = state_26624__$1;
(statearr_26631_26692[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (24))){
var inst_26575 = (state_26624[(9)]);
var inst_26584 = (state_26624[(10)]);
var inst_26598 = (state_26624[(11)]);
var inst_26598__$1 = inst_26575.call(null,inst_26584);
var state_26624__$1 = (function (){var statearr_26632 = state_26624;
(statearr_26632[(11)] = inst_26598__$1);

return statearr_26632;
})();
if(cljs.core.truth_(inst_26598__$1)){
var statearr_26633_26693 = state_26624__$1;
(statearr_26633_26693[(1)] = (29));

} else {
var statearr_26634_26694 = state_26624__$1;
(statearr_26634_26694[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (4))){
var inst_26543 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26543)){
var statearr_26635_26695 = state_26624__$1;
(statearr_26635_26695[(1)] = (8));

} else {
var statearr_26636_26696 = state_26624__$1;
(statearr_26636_26696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (15))){
var inst_26569 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26569)){
var statearr_26637_26697 = state_26624__$1;
(statearr_26637_26697[(1)] = (19));

} else {
var statearr_26638_26698 = state_26624__$1;
(statearr_26638_26698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (21))){
var inst_26574 = (state_26624[(12)]);
var inst_26574__$1 = (state_26624[(2)]);
var inst_26575 = cljs.core.get.call(null,inst_26574__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26576 = cljs.core.get.call(null,inst_26574__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26577 = cljs.core.get.call(null,inst_26574__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26624__$1 = (function (){var statearr_26639 = state_26624;
(statearr_26639[(13)] = inst_26576);

(statearr_26639[(9)] = inst_26575);

(statearr_26639[(12)] = inst_26574__$1);

return statearr_26639;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26624__$1,(22),inst_26577);
} else {
if((state_val_26625 === (31))){
var inst_26606 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26606)){
var statearr_26640_26699 = state_26624__$1;
(statearr_26640_26699[(1)] = (32));

} else {
var statearr_26641_26700 = state_26624__$1;
(statearr_26641_26700[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (32))){
var inst_26583 = (state_26624[(14)]);
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26624__$1,(35),out,inst_26583);
} else {
if((state_val_26625 === (33))){
var inst_26574 = (state_26624[(12)]);
var inst_26552 = inst_26574;
var state_26624__$1 = (function (){var statearr_26642 = state_26624;
(statearr_26642[(7)] = inst_26552);

return statearr_26642;
})();
var statearr_26643_26701 = state_26624__$1;
(statearr_26643_26701[(2)] = null);

(statearr_26643_26701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (13))){
var inst_26552 = (state_26624[(7)]);
var inst_26559 = inst_26552.cljs$lang$protocol_mask$partition0$;
var inst_26560 = (inst_26559 & (64));
var inst_26561 = inst_26552.cljs$core$ISeq$;
var inst_26562 = (inst_26560) || (inst_26561);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26562)){
var statearr_26644_26702 = state_26624__$1;
(statearr_26644_26702[(1)] = (16));

} else {
var statearr_26645_26703 = state_26624__$1;
(statearr_26645_26703[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (22))){
var inst_26583 = (state_26624[(14)]);
var inst_26584 = (state_26624[(10)]);
var inst_26582 = (state_26624[(2)]);
var inst_26583__$1 = cljs.core.nth.call(null,inst_26582,(0),null);
var inst_26584__$1 = cljs.core.nth.call(null,inst_26582,(1),null);
var inst_26585 = (inst_26583__$1 == null);
var inst_26586 = cljs.core._EQ_.call(null,inst_26584__$1,change);
var inst_26587 = (inst_26585) || (inst_26586);
var state_26624__$1 = (function (){var statearr_26646 = state_26624;
(statearr_26646[(14)] = inst_26583__$1);

(statearr_26646[(10)] = inst_26584__$1);

return statearr_26646;
})();
if(cljs.core.truth_(inst_26587)){
var statearr_26647_26704 = state_26624__$1;
(statearr_26647_26704[(1)] = (23));

} else {
var statearr_26648_26705 = state_26624__$1;
(statearr_26648_26705[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (36))){
var inst_26574 = (state_26624[(12)]);
var inst_26552 = inst_26574;
var state_26624__$1 = (function (){var statearr_26649 = state_26624;
(statearr_26649[(7)] = inst_26552);

return statearr_26649;
})();
var statearr_26650_26706 = state_26624__$1;
(statearr_26650_26706[(2)] = null);

(statearr_26650_26706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (29))){
var inst_26598 = (state_26624[(11)]);
var state_26624__$1 = state_26624;
var statearr_26651_26707 = state_26624__$1;
(statearr_26651_26707[(2)] = inst_26598);

(statearr_26651_26707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (6))){
var state_26624__$1 = state_26624;
var statearr_26652_26708 = state_26624__$1;
(statearr_26652_26708[(2)] = false);

(statearr_26652_26708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (28))){
var inst_26594 = (state_26624[(2)]);
var inst_26595 = calc_state.call(null);
var inst_26552 = inst_26595;
var state_26624__$1 = (function (){var statearr_26653 = state_26624;
(statearr_26653[(15)] = inst_26594);

(statearr_26653[(7)] = inst_26552);

return statearr_26653;
})();
var statearr_26654_26709 = state_26624__$1;
(statearr_26654_26709[(2)] = null);

(statearr_26654_26709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (25))){
var inst_26620 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26655_26710 = state_26624__$1;
(statearr_26655_26710[(2)] = inst_26620);

(statearr_26655_26710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (34))){
var inst_26618 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26656_26711 = state_26624__$1;
(statearr_26656_26711[(2)] = inst_26618);

(statearr_26656_26711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (17))){
var state_26624__$1 = state_26624;
var statearr_26657_26712 = state_26624__$1;
(statearr_26657_26712[(2)] = false);

(statearr_26657_26712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (3))){
var state_26624__$1 = state_26624;
var statearr_26658_26713 = state_26624__$1;
(statearr_26658_26713[(2)] = false);

(statearr_26658_26713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (12))){
var inst_26622 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26624__$1,inst_26622);
} else {
if((state_val_26625 === (2))){
var inst_26528 = (state_26624[(8)]);
var inst_26533 = inst_26528.cljs$lang$protocol_mask$partition0$;
var inst_26534 = (inst_26533 & (64));
var inst_26535 = inst_26528.cljs$core$ISeq$;
var inst_26536 = (inst_26534) || (inst_26535);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26536)){
var statearr_26659_26714 = state_26624__$1;
(statearr_26659_26714[(1)] = (5));

} else {
var statearr_26660_26715 = state_26624__$1;
(statearr_26660_26715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (23))){
var inst_26583 = (state_26624[(14)]);
var inst_26589 = (inst_26583 == null);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26589)){
var statearr_26661_26716 = state_26624__$1;
(statearr_26661_26716[(1)] = (26));

} else {
var statearr_26662_26717 = state_26624__$1;
(statearr_26662_26717[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (35))){
var inst_26609 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26609)){
var statearr_26663_26718 = state_26624__$1;
(statearr_26663_26718[(1)] = (36));

} else {
var statearr_26664_26719 = state_26624__$1;
(statearr_26664_26719[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (19))){
var inst_26552 = (state_26624[(7)]);
var inst_26571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26552);
var state_26624__$1 = state_26624;
var statearr_26665_26720 = state_26624__$1;
(statearr_26665_26720[(2)] = inst_26571);

(statearr_26665_26720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (11))){
var inst_26552 = (state_26624[(7)]);
var inst_26556 = (inst_26552 == null);
var inst_26557 = cljs.core.not.call(null,inst_26556);
var state_26624__$1 = state_26624;
if(inst_26557){
var statearr_26666_26721 = state_26624__$1;
(statearr_26666_26721[(1)] = (13));

} else {
var statearr_26667_26722 = state_26624__$1;
(statearr_26667_26722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (9))){
var inst_26528 = (state_26624[(8)]);
var state_26624__$1 = state_26624;
var statearr_26668_26723 = state_26624__$1;
(statearr_26668_26723[(2)] = inst_26528);

(statearr_26668_26723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (5))){
var state_26624__$1 = state_26624;
var statearr_26669_26724 = state_26624__$1;
(statearr_26669_26724[(2)] = true);

(statearr_26669_26724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (14))){
var state_26624__$1 = state_26624;
var statearr_26670_26725 = state_26624__$1;
(statearr_26670_26725[(2)] = false);

(statearr_26670_26725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (26))){
var inst_26584 = (state_26624[(10)]);
var inst_26591 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26584);
var state_26624__$1 = state_26624;
var statearr_26671_26726 = state_26624__$1;
(statearr_26671_26726[(2)] = inst_26591);

(statearr_26671_26726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (16))){
var state_26624__$1 = state_26624;
var statearr_26672_26727 = state_26624__$1;
(statearr_26672_26727[(2)] = true);

(statearr_26672_26727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (38))){
var inst_26614 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26673_26728 = state_26624__$1;
(statearr_26673_26728[(2)] = inst_26614);

(statearr_26673_26728[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (30))){
var inst_26576 = (state_26624[(13)]);
var inst_26575 = (state_26624[(9)]);
var inst_26584 = (state_26624[(10)]);
var inst_26601 = cljs.core.empty_QMARK_.call(null,inst_26575);
var inst_26602 = inst_26576.call(null,inst_26584);
var inst_26603 = cljs.core.not.call(null,inst_26602);
var inst_26604 = (inst_26601) && (inst_26603);
var state_26624__$1 = state_26624;
var statearr_26674_26729 = state_26624__$1;
(statearr_26674_26729[(2)] = inst_26604);

(statearr_26674_26729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (10))){
var inst_26528 = (state_26624[(8)]);
var inst_26548 = (state_26624[(2)]);
var inst_26549 = cljs.core.get.call(null,inst_26548,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26550 = cljs.core.get.call(null,inst_26548,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26551 = cljs.core.get.call(null,inst_26548,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26552 = inst_26528;
var state_26624__$1 = (function (){var statearr_26675 = state_26624;
(statearr_26675[(16)] = inst_26551);

(statearr_26675[(7)] = inst_26552);

(statearr_26675[(17)] = inst_26549);

(statearr_26675[(18)] = inst_26550);

return statearr_26675;
})();
var statearr_26676_26730 = state_26624__$1;
(statearr_26676_26730[(2)] = null);

(statearr_26676_26730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (18))){
var inst_26566 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26677_26731 = state_26624__$1;
(statearr_26677_26731[(2)] = inst_26566);

(statearr_26677_26731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (37))){
var state_26624__$1 = state_26624;
var statearr_26678_26732 = state_26624__$1;
(statearr_26678_26732[(2)] = null);

(statearr_26678_26732[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (8))){
var inst_26528 = (state_26624[(8)]);
var inst_26545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26528);
var state_26624__$1 = state_26624;
var statearr_26679_26733 = state_26624__$1;
(statearr_26679_26733[(2)] = inst_26545);

(statearr_26679_26733[(1)] = (10));


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
});})(c__24954__auto___26687,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24842__auto__,c__24954__auto___26687,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24843__auto__ = null;
var cljs$core$async$mix_$_state_machine__24843__auto____0 = (function (){
var statearr_26683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26683[(0)] = cljs$core$async$mix_$_state_machine__24843__auto__);

(statearr_26683[(1)] = (1));

return statearr_26683;
});
var cljs$core$async$mix_$_state_machine__24843__auto____1 = (function (state_26624){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_26624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e26684){if((e26684 instanceof Object)){
var ex__24846__auto__ = e26684;
var statearr_26685_26734 = state_26624;
(statearr_26685_26734[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26735 = state_26624;
state_26624 = G__26735;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24843__auto__ = function(state_26624){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24843__auto____1.call(this,state_26624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24843__auto____0;
cljs$core$async$mix_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24843__auto____1;
return cljs$core$async$mix_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___26687,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24956__auto__ = (function (){var statearr_26686 = f__24955__auto__.call(null);
(statearr_26686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___26687);

return statearr_26686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___26687,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20820__auto__ = (((p == null))?null:p);
var m__20821__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20821__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20820__auto__ = (((p == null))?null:p);
var m__20821__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,p,v,ch);
} else {
var m__20821__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26736 = [];
var len__21232__auto___26739 = arguments.length;
var i__21233__auto___26740 = (0);
while(true){
if((i__21233__auto___26740 < len__21232__auto___26739)){
args26736.push((arguments[i__21233__auto___26740]));

var G__26741 = (i__21233__auto___26740 + (1));
i__21233__auto___26740 = G__26741;
continue;
} else {
}
break;
}

var G__26738 = args26736.length;
switch (G__26738) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26736.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20820__auto__ = (((p == null))?null:p);
var m__20821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,p);
} else {
var m__20821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20820__auto__ = (((p == null))?null:p);
var m__20821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20820__auto__)]);
if(!((m__20821__auto__ == null))){
return m__20821__auto__.call(null,p,v);
} else {
var m__20821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20821__auto____$1 == null))){
return m__20821__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26744 = [];
var len__21232__auto___26869 = arguments.length;
var i__21233__auto___26870 = (0);
while(true){
if((i__21233__auto___26870 < len__21232__auto___26869)){
args26744.push((arguments[i__21233__auto___26870]));

var G__26871 = (i__21233__auto___26870 + (1));
i__21233__auto___26870 = G__26871;
continue;
} else {
}
break;
}

var G__26746 = args26744.length;
switch (G__26746) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26744.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20157__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20157__auto__,mults){
return (function (p1__26743_SHARP_){
if(cljs.core.truth_(p1__26743_SHARP_.call(null,topic))){
return p1__26743_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26743_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20157__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26747 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26748){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26748 = meta26748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26749,meta26748__$1){
var self__ = this;
var _26749__$1 = this;
return (new cljs.core.async.t_cljs$core$async26747(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26748__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26749){
var self__ = this;
var _26749__$1 = this;
return self__.meta26748;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26748","meta26748",25351742,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26747";

cljs.core.async.t_cljs$core$async26747.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async26747");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26747 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26747(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26748){
return (new cljs.core.async.t_cljs$core$async26747(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26748));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26747(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24954__auto___26873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___26873,mults,ensure_mult,p){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___26873,mults,ensure_mult,p){
return (function (state_26821){
var state_val_26822 = (state_26821[(1)]);
if((state_val_26822 === (7))){
var inst_26817 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26823_26874 = state_26821__$1;
(statearr_26823_26874[(2)] = inst_26817);

(statearr_26823_26874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (20))){
var state_26821__$1 = state_26821;
var statearr_26824_26875 = state_26821__$1;
(statearr_26824_26875[(2)] = null);

(statearr_26824_26875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (1))){
var state_26821__$1 = state_26821;
var statearr_26825_26876 = state_26821__$1;
(statearr_26825_26876[(2)] = null);

(statearr_26825_26876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (24))){
var inst_26800 = (state_26821[(7)]);
var inst_26809 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26800);
var state_26821__$1 = state_26821;
var statearr_26826_26877 = state_26821__$1;
(statearr_26826_26877[(2)] = inst_26809);

(statearr_26826_26877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (4))){
var inst_26752 = (state_26821[(8)]);
var inst_26752__$1 = (state_26821[(2)]);
var inst_26753 = (inst_26752__$1 == null);
var state_26821__$1 = (function (){var statearr_26827 = state_26821;
(statearr_26827[(8)] = inst_26752__$1);

return statearr_26827;
})();
if(cljs.core.truth_(inst_26753)){
var statearr_26828_26878 = state_26821__$1;
(statearr_26828_26878[(1)] = (5));

} else {
var statearr_26829_26879 = state_26821__$1;
(statearr_26829_26879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (15))){
var inst_26794 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26830_26880 = state_26821__$1;
(statearr_26830_26880[(2)] = inst_26794);

(statearr_26830_26880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (21))){
var inst_26814 = (state_26821[(2)]);
var state_26821__$1 = (function (){var statearr_26831 = state_26821;
(statearr_26831[(9)] = inst_26814);

return statearr_26831;
})();
var statearr_26832_26881 = state_26821__$1;
(statearr_26832_26881[(2)] = null);

(statearr_26832_26881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (13))){
var inst_26776 = (state_26821[(10)]);
var inst_26778 = cljs.core.chunked_seq_QMARK_.call(null,inst_26776);
var state_26821__$1 = state_26821;
if(inst_26778){
var statearr_26833_26882 = state_26821__$1;
(statearr_26833_26882[(1)] = (16));

} else {
var statearr_26834_26883 = state_26821__$1;
(statearr_26834_26883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (22))){
var inst_26806 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
if(cljs.core.truth_(inst_26806)){
var statearr_26835_26884 = state_26821__$1;
(statearr_26835_26884[(1)] = (23));

} else {
var statearr_26836_26885 = state_26821__$1;
(statearr_26836_26885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (6))){
var inst_26800 = (state_26821[(7)]);
var inst_26752 = (state_26821[(8)]);
var inst_26802 = (state_26821[(11)]);
var inst_26800__$1 = topic_fn.call(null,inst_26752);
var inst_26801 = cljs.core.deref.call(null,mults);
var inst_26802__$1 = cljs.core.get.call(null,inst_26801,inst_26800__$1);
var state_26821__$1 = (function (){var statearr_26837 = state_26821;
(statearr_26837[(7)] = inst_26800__$1);

(statearr_26837[(11)] = inst_26802__$1);

return statearr_26837;
})();
if(cljs.core.truth_(inst_26802__$1)){
var statearr_26838_26886 = state_26821__$1;
(statearr_26838_26886[(1)] = (19));

} else {
var statearr_26839_26887 = state_26821__$1;
(statearr_26839_26887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (25))){
var inst_26811 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26840_26888 = state_26821__$1;
(statearr_26840_26888[(2)] = inst_26811);

(statearr_26840_26888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (17))){
var inst_26776 = (state_26821[(10)]);
var inst_26785 = cljs.core.first.call(null,inst_26776);
var inst_26786 = cljs.core.async.muxch_STAR_.call(null,inst_26785);
var inst_26787 = cljs.core.async.close_BANG_.call(null,inst_26786);
var inst_26788 = cljs.core.next.call(null,inst_26776);
var inst_26762 = inst_26788;
var inst_26763 = null;
var inst_26764 = (0);
var inst_26765 = (0);
var state_26821__$1 = (function (){var statearr_26841 = state_26821;
(statearr_26841[(12)] = inst_26787);

(statearr_26841[(13)] = inst_26762);

(statearr_26841[(14)] = inst_26763);

(statearr_26841[(15)] = inst_26764);

(statearr_26841[(16)] = inst_26765);

return statearr_26841;
})();
var statearr_26842_26889 = state_26821__$1;
(statearr_26842_26889[(2)] = null);

(statearr_26842_26889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (3))){
var inst_26819 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26821__$1,inst_26819);
} else {
if((state_val_26822 === (12))){
var inst_26796 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26843_26890 = state_26821__$1;
(statearr_26843_26890[(2)] = inst_26796);

(statearr_26843_26890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (2))){
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26821__$1,(4),ch);
} else {
if((state_val_26822 === (23))){
var state_26821__$1 = state_26821;
var statearr_26844_26891 = state_26821__$1;
(statearr_26844_26891[(2)] = null);

(statearr_26844_26891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (19))){
var inst_26752 = (state_26821[(8)]);
var inst_26802 = (state_26821[(11)]);
var inst_26804 = cljs.core.async.muxch_STAR_.call(null,inst_26802);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26821__$1,(22),inst_26804,inst_26752);
} else {
if((state_val_26822 === (11))){
var inst_26776 = (state_26821[(10)]);
var inst_26762 = (state_26821[(13)]);
var inst_26776__$1 = cljs.core.seq.call(null,inst_26762);
var state_26821__$1 = (function (){var statearr_26845 = state_26821;
(statearr_26845[(10)] = inst_26776__$1);

return statearr_26845;
})();
if(inst_26776__$1){
var statearr_26846_26892 = state_26821__$1;
(statearr_26846_26892[(1)] = (13));

} else {
var statearr_26847_26893 = state_26821__$1;
(statearr_26847_26893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (9))){
var inst_26798 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26848_26894 = state_26821__$1;
(statearr_26848_26894[(2)] = inst_26798);

(statearr_26848_26894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (5))){
var inst_26759 = cljs.core.deref.call(null,mults);
var inst_26760 = cljs.core.vals.call(null,inst_26759);
var inst_26761 = cljs.core.seq.call(null,inst_26760);
var inst_26762 = inst_26761;
var inst_26763 = null;
var inst_26764 = (0);
var inst_26765 = (0);
var state_26821__$1 = (function (){var statearr_26849 = state_26821;
(statearr_26849[(13)] = inst_26762);

(statearr_26849[(14)] = inst_26763);

(statearr_26849[(15)] = inst_26764);

(statearr_26849[(16)] = inst_26765);

return statearr_26849;
})();
var statearr_26850_26895 = state_26821__$1;
(statearr_26850_26895[(2)] = null);

(statearr_26850_26895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (14))){
var state_26821__$1 = state_26821;
var statearr_26854_26896 = state_26821__$1;
(statearr_26854_26896[(2)] = null);

(statearr_26854_26896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (16))){
var inst_26776 = (state_26821[(10)]);
var inst_26780 = cljs.core.chunk_first.call(null,inst_26776);
var inst_26781 = cljs.core.chunk_rest.call(null,inst_26776);
var inst_26782 = cljs.core.count.call(null,inst_26780);
var inst_26762 = inst_26781;
var inst_26763 = inst_26780;
var inst_26764 = inst_26782;
var inst_26765 = (0);
var state_26821__$1 = (function (){var statearr_26855 = state_26821;
(statearr_26855[(13)] = inst_26762);

(statearr_26855[(14)] = inst_26763);

(statearr_26855[(15)] = inst_26764);

(statearr_26855[(16)] = inst_26765);

return statearr_26855;
})();
var statearr_26856_26897 = state_26821__$1;
(statearr_26856_26897[(2)] = null);

(statearr_26856_26897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (10))){
var inst_26762 = (state_26821[(13)]);
var inst_26763 = (state_26821[(14)]);
var inst_26764 = (state_26821[(15)]);
var inst_26765 = (state_26821[(16)]);
var inst_26770 = cljs.core._nth.call(null,inst_26763,inst_26765);
var inst_26771 = cljs.core.async.muxch_STAR_.call(null,inst_26770);
var inst_26772 = cljs.core.async.close_BANG_.call(null,inst_26771);
var inst_26773 = (inst_26765 + (1));
var tmp26851 = inst_26762;
var tmp26852 = inst_26763;
var tmp26853 = inst_26764;
var inst_26762__$1 = tmp26851;
var inst_26763__$1 = tmp26852;
var inst_26764__$1 = tmp26853;
var inst_26765__$1 = inst_26773;
var state_26821__$1 = (function (){var statearr_26857 = state_26821;
(statearr_26857[(17)] = inst_26772);

(statearr_26857[(13)] = inst_26762__$1);

(statearr_26857[(14)] = inst_26763__$1);

(statearr_26857[(15)] = inst_26764__$1);

(statearr_26857[(16)] = inst_26765__$1);

return statearr_26857;
})();
var statearr_26858_26898 = state_26821__$1;
(statearr_26858_26898[(2)] = null);

(statearr_26858_26898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (18))){
var inst_26791 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26859_26899 = state_26821__$1;
(statearr_26859_26899[(2)] = inst_26791);

(statearr_26859_26899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (8))){
var inst_26764 = (state_26821[(15)]);
var inst_26765 = (state_26821[(16)]);
var inst_26767 = (inst_26765 < inst_26764);
var inst_26768 = inst_26767;
var state_26821__$1 = state_26821;
if(cljs.core.truth_(inst_26768)){
var statearr_26860_26900 = state_26821__$1;
(statearr_26860_26900[(1)] = (10));

} else {
var statearr_26861_26901 = state_26821__$1;
(statearr_26861_26901[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__24954__auto___26873,mults,ensure_mult,p))
;
return ((function (switch__24842__auto__,c__24954__auto___26873,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_26865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26865[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_26865[(1)] = (1));

return statearr_26865;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_26821){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_26821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e26866){if((e26866 instanceof Object)){
var ex__24846__auto__ = e26866;
var statearr_26867_26902 = state_26821;
(statearr_26867_26902[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26903 = state_26821;
state_26821 = G__26903;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_26821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_26821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___26873,mults,ensure_mult,p))
})();
var state__24956__auto__ = (function (){var statearr_26868 = f__24955__auto__.call(null);
(statearr_26868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___26873);

return statearr_26868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___26873,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26904 = [];
var len__21232__auto___26907 = arguments.length;
var i__21233__auto___26908 = (0);
while(true){
if((i__21233__auto___26908 < len__21232__auto___26907)){
args26904.push((arguments[i__21233__auto___26908]));

var G__26909 = (i__21233__auto___26908 + (1));
i__21233__auto___26908 = G__26909;
continue;
} else {
}
break;
}

var G__26906 = args26904.length;
switch (G__26906) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26904.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26911 = [];
var len__21232__auto___26914 = arguments.length;
var i__21233__auto___26915 = (0);
while(true){
if((i__21233__auto___26915 < len__21232__auto___26914)){
args26911.push((arguments[i__21233__auto___26915]));

var G__26916 = (i__21233__auto___26915 + (1));
i__21233__auto___26915 = G__26916;
continue;
} else {
}
break;
}

var G__26913 = args26911.length;
switch (G__26913) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26911.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26918 = [];
var len__21232__auto___26989 = arguments.length;
var i__21233__auto___26990 = (0);
while(true){
if((i__21233__auto___26990 < len__21232__auto___26989)){
args26918.push((arguments[i__21233__auto___26990]));

var G__26991 = (i__21233__auto___26990 + (1));
i__21233__auto___26990 = G__26991;
continue;
} else {
}
break;
}

var G__26920 = args26918.length;
switch (G__26920) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26918.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24954__auto___26993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___26993,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___26993,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26959){
var state_val_26960 = (state_26959[(1)]);
if((state_val_26960 === (7))){
var state_26959__$1 = state_26959;
var statearr_26961_26994 = state_26959__$1;
(statearr_26961_26994[(2)] = null);

(statearr_26961_26994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (1))){
var state_26959__$1 = state_26959;
var statearr_26962_26995 = state_26959__$1;
(statearr_26962_26995[(2)] = null);

(statearr_26962_26995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (4))){
var inst_26923 = (state_26959[(7)]);
var inst_26925 = (inst_26923 < cnt);
var state_26959__$1 = state_26959;
if(cljs.core.truth_(inst_26925)){
var statearr_26963_26996 = state_26959__$1;
(statearr_26963_26996[(1)] = (6));

} else {
var statearr_26964_26997 = state_26959__$1;
(statearr_26964_26997[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (15))){
var inst_26955 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
var statearr_26965_26998 = state_26959__$1;
(statearr_26965_26998[(2)] = inst_26955);

(statearr_26965_26998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (13))){
var inst_26948 = cljs.core.async.close_BANG_.call(null,out);
var state_26959__$1 = state_26959;
var statearr_26966_26999 = state_26959__$1;
(statearr_26966_26999[(2)] = inst_26948);

(statearr_26966_26999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (6))){
var state_26959__$1 = state_26959;
var statearr_26967_27000 = state_26959__$1;
(statearr_26967_27000[(2)] = null);

(statearr_26967_27000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (3))){
var inst_26957 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26959__$1,inst_26957);
} else {
if((state_val_26960 === (12))){
var inst_26945 = (state_26959[(8)]);
var inst_26945__$1 = (state_26959[(2)]);
var inst_26946 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26945__$1);
var state_26959__$1 = (function (){var statearr_26968 = state_26959;
(statearr_26968[(8)] = inst_26945__$1);

return statearr_26968;
})();
if(cljs.core.truth_(inst_26946)){
var statearr_26969_27001 = state_26959__$1;
(statearr_26969_27001[(1)] = (13));

} else {
var statearr_26970_27002 = state_26959__$1;
(statearr_26970_27002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (2))){
var inst_26922 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26923 = (0);
var state_26959__$1 = (function (){var statearr_26971 = state_26959;
(statearr_26971[(9)] = inst_26922);

(statearr_26971[(7)] = inst_26923);

return statearr_26971;
})();
var statearr_26972_27003 = state_26959__$1;
(statearr_26972_27003[(2)] = null);

(statearr_26972_27003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (11))){
var inst_26923 = (state_26959[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26959,(10),Object,null,(9));
var inst_26932 = chs__$1.call(null,inst_26923);
var inst_26933 = done.call(null,inst_26923);
var inst_26934 = cljs.core.async.take_BANG_.call(null,inst_26932,inst_26933);
var state_26959__$1 = state_26959;
var statearr_26973_27004 = state_26959__$1;
(statearr_26973_27004[(2)] = inst_26934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26959__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (9))){
var inst_26923 = (state_26959[(7)]);
var inst_26936 = (state_26959[(2)]);
var inst_26937 = (inst_26923 + (1));
var inst_26923__$1 = inst_26937;
var state_26959__$1 = (function (){var statearr_26974 = state_26959;
(statearr_26974[(7)] = inst_26923__$1);

(statearr_26974[(10)] = inst_26936);

return statearr_26974;
})();
var statearr_26975_27005 = state_26959__$1;
(statearr_26975_27005[(2)] = null);

(statearr_26975_27005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (5))){
var inst_26943 = (state_26959[(2)]);
var state_26959__$1 = (function (){var statearr_26976 = state_26959;
(statearr_26976[(11)] = inst_26943);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26959__$1,(12),dchan);
} else {
if((state_val_26960 === (14))){
var inst_26945 = (state_26959[(8)]);
var inst_26950 = cljs.core.apply.call(null,f,inst_26945);
var state_26959__$1 = state_26959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26959__$1,(16),out,inst_26950);
} else {
if((state_val_26960 === (16))){
var inst_26952 = (state_26959[(2)]);
var state_26959__$1 = (function (){var statearr_26977 = state_26959;
(statearr_26977[(12)] = inst_26952);

return statearr_26977;
})();
var statearr_26978_27006 = state_26959__$1;
(statearr_26978_27006[(2)] = null);

(statearr_26978_27006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (10))){
var inst_26927 = (state_26959[(2)]);
var inst_26928 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26959__$1 = (function (){var statearr_26979 = state_26959;
(statearr_26979[(13)] = inst_26927);

return statearr_26979;
})();
var statearr_26980_27007 = state_26959__$1;
(statearr_26980_27007[(2)] = inst_26928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26959__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (8))){
var inst_26941 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
var statearr_26981_27008 = state_26959__$1;
(statearr_26981_27008[(2)] = inst_26941);

(statearr_26981_27008[(1)] = (5));


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
});})(c__24954__auto___26993,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24842__auto__,c__24954__auto___26993,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_26985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26985[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_26985[(1)] = (1));

return statearr_26985;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_26959){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_26959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e26986){if((e26986 instanceof Object)){
var ex__24846__auto__ = e26986;
var statearr_26987_27009 = state_26959;
(statearr_26987_27009[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27010 = state_26959;
state_26959 = G__27010;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_26959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_26959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___26993,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24956__auto__ = (function (){var statearr_26988 = f__24955__auto__.call(null);
(statearr_26988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___26993);

return statearr_26988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___26993,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27012 = [];
var len__21232__auto___27070 = arguments.length;
var i__21233__auto___27071 = (0);
while(true){
if((i__21233__auto___27071 < len__21232__auto___27070)){
args27012.push((arguments[i__21233__auto___27071]));

var G__27072 = (i__21233__auto___27071 + (1));
i__21233__auto___27071 = G__27072;
continue;
} else {
}
break;
}

var G__27014 = args27012.length;
switch (G__27014) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27012.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24954__auto___27074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___27074,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___27074,out){
return (function (state_27046){
var state_val_27047 = (state_27046[(1)]);
if((state_val_27047 === (7))){
var inst_27026 = (state_27046[(7)]);
var inst_27025 = (state_27046[(8)]);
var inst_27025__$1 = (state_27046[(2)]);
var inst_27026__$1 = cljs.core.nth.call(null,inst_27025__$1,(0),null);
var inst_27027 = cljs.core.nth.call(null,inst_27025__$1,(1),null);
var inst_27028 = (inst_27026__$1 == null);
var state_27046__$1 = (function (){var statearr_27048 = state_27046;
(statearr_27048[(7)] = inst_27026__$1);

(statearr_27048[(8)] = inst_27025__$1);

(statearr_27048[(9)] = inst_27027);

return statearr_27048;
})();
if(cljs.core.truth_(inst_27028)){
var statearr_27049_27075 = state_27046__$1;
(statearr_27049_27075[(1)] = (8));

} else {
var statearr_27050_27076 = state_27046__$1;
(statearr_27050_27076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (1))){
var inst_27015 = cljs.core.vec.call(null,chs);
var inst_27016 = inst_27015;
var state_27046__$1 = (function (){var statearr_27051 = state_27046;
(statearr_27051[(10)] = inst_27016);

return statearr_27051;
})();
var statearr_27052_27077 = state_27046__$1;
(statearr_27052_27077[(2)] = null);

(statearr_27052_27077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (4))){
var inst_27016 = (state_27046[(10)]);
var state_27046__$1 = state_27046;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27046__$1,(7),inst_27016);
} else {
if((state_val_27047 === (6))){
var inst_27042 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
var statearr_27053_27078 = state_27046__$1;
(statearr_27053_27078[(2)] = inst_27042);

(statearr_27053_27078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (3))){
var inst_27044 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27046__$1,inst_27044);
} else {
if((state_val_27047 === (2))){
var inst_27016 = (state_27046[(10)]);
var inst_27018 = cljs.core.count.call(null,inst_27016);
var inst_27019 = (inst_27018 > (0));
var state_27046__$1 = state_27046;
if(cljs.core.truth_(inst_27019)){
var statearr_27055_27079 = state_27046__$1;
(statearr_27055_27079[(1)] = (4));

} else {
var statearr_27056_27080 = state_27046__$1;
(statearr_27056_27080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (11))){
var inst_27016 = (state_27046[(10)]);
var inst_27035 = (state_27046[(2)]);
var tmp27054 = inst_27016;
var inst_27016__$1 = tmp27054;
var state_27046__$1 = (function (){var statearr_27057 = state_27046;
(statearr_27057[(11)] = inst_27035);

(statearr_27057[(10)] = inst_27016__$1);

return statearr_27057;
})();
var statearr_27058_27081 = state_27046__$1;
(statearr_27058_27081[(2)] = null);

(statearr_27058_27081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (9))){
var inst_27026 = (state_27046[(7)]);
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27046__$1,(11),out,inst_27026);
} else {
if((state_val_27047 === (5))){
var inst_27040 = cljs.core.async.close_BANG_.call(null,out);
var state_27046__$1 = state_27046;
var statearr_27059_27082 = state_27046__$1;
(statearr_27059_27082[(2)] = inst_27040);

(statearr_27059_27082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (10))){
var inst_27038 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
var statearr_27060_27083 = state_27046__$1;
(statearr_27060_27083[(2)] = inst_27038);

(statearr_27060_27083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (8))){
var inst_27026 = (state_27046[(7)]);
var inst_27025 = (state_27046[(8)]);
var inst_27016 = (state_27046[(10)]);
var inst_27027 = (state_27046[(9)]);
var inst_27030 = (function (){var cs = inst_27016;
var vec__27021 = inst_27025;
var v = inst_27026;
var c = inst_27027;
return ((function (cs,vec__27021,v,c,inst_27026,inst_27025,inst_27016,inst_27027,state_val_27047,c__24954__auto___27074,out){
return (function (p1__27011_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27011_SHARP_);
});
;})(cs,vec__27021,v,c,inst_27026,inst_27025,inst_27016,inst_27027,state_val_27047,c__24954__auto___27074,out))
})();
var inst_27031 = cljs.core.filterv.call(null,inst_27030,inst_27016);
var inst_27016__$1 = inst_27031;
var state_27046__$1 = (function (){var statearr_27061 = state_27046;
(statearr_27061[(10)] = inst_27016__$1);

return statearr_27061;
})();
var statearr_27062_27084 = state_27046__$1;
(statearr_27062_27084[(2)] = null);

(statearr_27062_27084[(1)] = (2));


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
});})(c__24954__auto___27074,out))
;
return ((function (switch__24842__auto__,c__24954__auto___27074,out){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_27066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27066[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_27066[(1)] = (1));

return statearr_27066;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_27046){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27067){if((e27067 instanceof Object)){
var ex__24846__auto__ = e27067;
var statearr_27068_27085 = state_27046;
(statearr_27068_27085[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27086 = state_27046;
state_27046 = G__27086;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_27046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_27046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___27074,out))
})();
var state__24956__auto__ = (function (){var statearr_27069 = f__24955__auto__.call(null);
(statearr_27069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___27074);

return statearr_27069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___27074,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27087 = [];
var len__21232__auto___27136 = arguments.length;
var i__21233__auto___27137 = (0);
while(true){
if((i__21233__auto___27137 < len__21232__auto___27136)){
args27087.push((arguments[i__21233__auto___27137]));

var G__27138 = (i__21233__auto___27137 + (1));
i__21233__auto___27137 = G__27138;
continue;
} else {
}
break;
}

var G__27089 = args27087.length;
switch (G__27089) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27087.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24954__auto___27140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___27140,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___27140,out){
return (function (state_27113){
var state_val_27114 = (state_27113[(1)]);
if((state_val_27114 === (7))){
var inst_27095 = (state_27113[(7)]);
var inst_27095__$1 = (state_27113[(2)]);
var inst_27096 = (inst_27095__$1 == null);
var inst_27097 = cljs.core.not.call(null,inst_27096);
var state_27113__$1 = (function (){var statearr_27115 = state_27113;
(statearr_27115[(7)] = inst_27095__$1);

return statearr_27115;
})();
if(inst_27097){
var statearr_27116_27141 = state_27113__$1;
(statearr_27116_27141[(1)] = (8));

} else {
var statearr_27117_27142 = state_27113__$1;
(statearr_27117_27142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (1))){
var inst_27090 = (0);
var state_27113__$1 = (function (){var statearr_27118 = state_27113;
(statearr_27118[(8)] = inst_27090);

return statearr_27118;
})();
var statearr_27119_27143 = state_27113__$1;
(statearr_27119_27143[(2)] = null);

(statearr_27119_27143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (4))){
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,(7),ch);
} else {
if((state_val_27114 === (6))){
var inst_27108 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27120_27144 = state_27113__$1;
(statearr_27120_27144[(2)] = inst_27108);

(statearr_27120_27144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (3))){
var inst_27110 = (state_27113[(2)]);
var inst_27111 = cljs.core.async.close_BANG_.call(null,out);
var state_27113__$1 = (function (){var statearr_27121 = state_27113;
(statearr_27121[(9)] = inst_27110);

return statearr_27121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else {
if((state_val_27114 === (2))){
var inst_27090 = (state_27113[(8)]);
var inst_27092 = (inst_27090 < n);
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27092)){
var statearr_27122_27145 = state_27113__$1;
(statearr_27122_27145[(1)] = (4));

} else {
var statearr_27123_27146 = state_27113__$1;
(statearr_27123_27146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (11))){
var inst_27090 = (state_27113[(8)]);
var inst_27100 = (state_27113[(2)]);
var inst_27101 = (inst_27090 + (1));
var inst_27090__$1 = inst_27101;
var state_27113__$1 = (function (){var statearr_27124 = state_27113;
(statearr_27124[(10)] = inst_27100);

(statearr_27124[(8)] = inst_27090__$1);

return statearr_27124;
})();
var statearr_27125_27147 = state_27113__$1;
(statearr_27125_27147[(2)] = null);

(statearr_27125_27147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (9))){
var state_27113__$1 = state_27113;
var statearr_27126_27148 = state_27113__$1;
(statearr_27126_27148[(2)] = null);

(statearr_27126_27148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (5))){
var state_27113__$1 = state_27113;
var statearr_27127_27149 = state_27113__$1;
(statearr_27127_27149[(2)] = null);

(statearr_27127_27149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (10))){
var inst_27105 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27128_27150 = state_27113__$1;
(statearr_27128_27150[(2)] = inst_27105);

(statearr_27128_27150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (8))){
var inst_27095 = (state_27113[(7)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(11),out,inst_27095);
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
});})(c__24954__auto___27140,out))
;
return ((function (switch__24842__auto__,c__24954__auto___27140,out){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_27132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27132[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_27132[(1)] = (1));

return statearr_27132;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_27113){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27133){if((e27133 instanceof Object)){
var ex__24846__auto__ = e27133;
var statearr_27134_27151 = state_27113;
(statearr_27134_27151[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27152 = state_27113;
state_27113 = G__27152;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___27140,out))
})();
var state__24956__auto__ = (function (){var statearr_27135 = f__24955__auto__.call(null);
(statearr_27135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___27140);

return statearr_27135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___27140,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27160 = (function (map_LT_,f,ch,meta27161){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27161 = meta27161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27162,meta27161__$1){
var self__ = this;
var _27162__$1 = this;
return (new cljs.core.async.t_cljs$core$async27160(self__.map_LT_,self__.f,self__.ch,meta27161__$1));
});

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27162){
var self__ = this;
var _27162__$1 = this;
return self__.meta27161;
});

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27163 = (function (map_LT_,f,ch,meta27161,_,fn1,meta27164){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27161 = meta27161;
this._ = _;
this.fn1 = fn1;
this.meta27164 = meta27164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27165,meta27164__$1){
var self__ = this;
var _27165__$1 = this;
return (new cljs.core.async.t_cljs$core$async27163(self__.map_LT_,self__.f,self__.ch,self__.meta27161,self__._,self__.fn1,meta27164__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27165){
var self__ = this;
var _27165__$1 = this;
return self__.meta27164;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27153_SHARP_){
return f1.call(null,(((p1__27153_SHARP_ == null))?null:self__.f.call(null,p1__27153_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27163.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27161","meta27161",-374842689,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27160","cljs.core.async/t_cljs$core$async27160",175177249,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27164","meta27164",1248255094,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27163";

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async27163");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27163 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27163(map_LT___$1,f__$1,ch__$1,meta27161__$1,___$2,fn1__$1,meta27164){
return (new cljs.core.async.t_cljs$core$async27163(map_LT___$1,f__$1,ch__$1,meta27161__$1,___$2,fn1__$1,meta27164));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27163(self__.map_LT_,self__.f,self__.ch,self__.meta27161,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20145__auto__ = ret;
if(cljs.core.truth_(and__20145__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20145__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27161","meta27161",-374842689,null)], null);
});

cljs.core.async.t_cljs$core$async27160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27160";

cljs.core.async.t_cljs$core$async27160.cljs$lang$ctorPrWriter = (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async27160");
});

cljs.core.async.__GT_t_cljs$core$async27160 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27160(map_LT___$1,f__$1,ch__$1,meta27161){
return (new cljs.core.async.t_cljs$core$async27160(map_LT___$1,f__$1,ch__$1,meta27161));
});

}

return (new cljs.core.async.t_cljs$core$async27160(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27169 = (function (map_GT_,f,ch,meta27170){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27170 = meta27170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27171,meta27170__$1){
var self__ = this;
var _27171__$1 = this;
return (new cljs.core.async.t_cljs$core$async27169(self__.map_GT_,self__.f,self__.ch,meta27170__$1));
});

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27171){
var self__ = this;
var _27171__$1 = this;
return self__.meta27170;
});

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27170","meta27170",1766408608,null)], null);
});

cljs.core.async.t_cljs$core$async27169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27169";

cljs.core.async.t_cljs$core$async27169.cljs$lang$ctorPrWriter = (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async27169");
});

cljs.core.async.__GT_t_cljs$core$async27169 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27169(map_GT___$1,f__$1,ch__$1,meta27170){
return (new cljs.core.async.t_cljs$core$async27169(map_GT___$1,f__$1,ch__$1,meta27170));
});

}

return (new cljs.core.async.t_cljs$core$async27169(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27175 = (function (filter_GT_,p,ch,meta27176){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27176 = meta27176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27177,meta27176__$1){
var self__ = this;
var _27177__$1 = this;
return (new cljs.core.async.t_cljs$core$async27175(self__.filter_GT_,self__.p,self__.ch,meta27176__$1));
});

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27177){
var self__ = this;
var _27177__$1 = this;
return self__.meta27176;
});

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27176","meta27176",-1725826133,null)], null);
});

cljs.core.async.t_cljs$core$async27175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27175";

cljs.core.async.t_cljs$core$async27175.cljs$lang$ctorPrWriter = (function (this__20763__auto__,writer__20764__auto__,opt__20765__auto__){
return cljs.core._write.call(null,writer__20764__auto__,"cljs.core.async/t_cljs$core$async27175");
});

cljs.core.async.__GT_t_cljs$core$async27175 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27175(filter_GT___$1,p__$1,ch__$1,meta27176){
return (new cljs.core.async.t_cljs$core$async27175(filter_GT___$1,p__$1,ch__$1,meta27176));
});

}

return (new cljs.core.async.t_cljs$core$async27175(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27178 = [];
var len__21232__auto___27222 = arguments.length;
var i__21233__auto___27223 = (0);
while(true){
if((i__21233__auto___27223 < len__21232__auto___27222)){
args27178.push((arguments[i__21233__auto___27223]));

var G__27224 = (i__21233__auto___27223 + (1));
i__21233__auto___27223 = G__27224;
continue;
} else {
}
break;
}

var G__27180 = args27178.length;
switch (G__27180) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27178.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24954__auto___27226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___27226,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___27226,out){
return (function (state_27201){
var state_val_27202 = (state_27201[(1)]);
if((state_val_27202 === (7))){
var inst_27197 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
var statearr_27203_27227 = state_27201__$1;
(statearr_27203_27227[(2)] = inst_27197);

(statearr_27203_27227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (1))){
var state_27201__$1 = state_27201;
var statearr_27204_27228 = state_27201__$1;
(statearr_27204_27228[(2)] = null);

(statearr_27204_27228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (4))){
var inst_27183 = (state_27201[(7)]);
var inst_27183__$1 = (state_27201[(2)]);
var inst_27184 = (inst_27183__$1 == null);
var state_27201__$1 = (function (){var statearr_27205 = state_27201;
(statearr_27205[(7)] = inst_27183__$1);

return statearr_27205;
})();
if(cljs.core.truth_(inst_27184)){
var statearr_27206_27229 = state_27201__$1;
(statearr_27206_27229[(1)] = (5));

} else {
var statearr_27207_27230 = state_27201__$1;
(statearr_27207_27230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (6))){
var inst_27183 = (state_27201[(7)]);
var inst_27188 = p.call(null,inst_27183);
var state_27201__$1 = state_27201;
if(cljs.core.truth_(inst_27188)){
var statearr_27208_27231 = state_27201__$1;
(statearr_27208_27231[(1)] = (8));

} else {
var statearr_27209_27232 = state_27201__$1;
(statearr_27209_27232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (3))){
var inst_27199 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27201__$1,inst_27199);
} else {
if((state_val_27202 === (2))){
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27201__$1,(4),ch);
} else {
if((state_val_27202 === (11))){
var inst_27191 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
var statearr_27210_27233 = state_27201__$1;
(statearr_27210_27233[(2)] = inst_27191);

(statearr_27210_27233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (9))){
var state_27201__$1 = state_27201;
var statearr_27211_27234 = state_27201__$1;
(statearr_27211_27234[(2)] = null);

(statearr_27211_27234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (5))){
var inst_27186 = cljs.core.async.close_BANG_.call(null,out);
var state_27201__$1 = state_27201;
var statearr_27212_27235 = state_27201__$1;
(statearr_27212_27235[(2)] = inst_27186);

(statearr_27212_27235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (10))){
var inst_27194 = (state_27201[(2)]);
var state_27201__$1 = (function (){var statearr_27213 = state_27201;
(statearr_27213[(8)] = inst_27194);

return statearr_27213;
})();
var statearr_27214_27236 = state_27201__$1;
(statearr_27214_27236[(2)] = null);

(statearr_27214_27236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (8))){
var inst_27183 = (state_27201[(7)]);
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27201__$1,(11),out,inst_27183);
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
});})(c__24954__auto___27226,out))
;
return ((function (switch__24842__auto__,c__24954__auto___27226,out){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_27218 = [null,null,null,null,null,null,null,null,null];
(statearr_27218[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_27218[(1)] = (1));

return statearr_27218;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_27201){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27219){if((e27219 instanceof Object)){
var ex__24846__auto__ = e27219;
var statearr_27220_27237 = state_27201;
(statearr_27220_27237[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27238 = state_27201;
state_27201 = G__27238;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_27201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_27201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___27226,out))
})();
var state__24956__auto__ = (function (){var statearr_27221 = f__24955__auto__.call(null);
(statearr_27221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___27226);

return statearr_27221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___27226,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27239 = [];
var len__21232__auto___27242 = arguments.length;
var i__21233__auto___27243 = (0);
while(true){
if((i__21233__auto___27243 < len__21232__auto___27242)){
args27239.push((arguments[i__21233__auto___27243]));

var G__27244 = (i__21233__auto___27243 + (1));
i__21233__auto___27243 = G__27244;
continue;
} else {
}
break;
}

var G__27241 = args27239.length;
switch (G__27241) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27239.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__){
return (function (state_27411){
var state_val_27412 = (state_27411[(1)]);
if((state_val_27412 === (7))){
var inst_27407 = (state_27411[(2)]);
var state_27411__$1 = state_27411;
var statearr_27413_27454 = state_27411__$1;
(statearr_27413_27454[(2)] = inst_27407);

(statearr_27413_27454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (20))){
var inst_27377 = (state_27411[(7)]);
var inst_27388 = (state_27411[(2)]);
var inst_27389 = cljs.core.next.call(null,inst_27377);
var inst_27363 = inst_27389;
var inst_27364 = null;
var inst_27365 = (0);
var inst_27366 = (0);
var state_27411__$1 = (function (){var statearr_27414 = state_27411;
(statearr_27414[(8)] = inst_27365);

(statearr_27414[(9)] = inst_27363);

(statearr_27414[(10)] = inst_27388);

(statearr_27414[(11)] = inst_27364);

(statearr_27414[(12)] = inst_27366);

return statearr_27414;
})();
var statearr_27415_27455 = state_27411__$1;
(statearr_27415_27455[(2)] = null);

(statearr_27415_27455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (1))){
var state_27411__$1 = state_27411;
var statearr_27416_27456 = state_27411__$1;
(statearr_27416_27456[(2)] = null);

(statearr_27416_27456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (4))){
var inst_27352 = (state_27411[(13)]);
var inst_27352__$1 = (state_27411[(2)]);
var inst_27353 = (inst_27352__$1 == null);
var state_27411__$1 = (function (){var statearr_27417 = state_27411;
(statearr_27417[(13)] = inst_27352__$1);

return statearr_27417;
})();
if(cljs.core.truth_(inst_27353)){
var statearr_27418_27457 = state_27411__$1;
(statearr_27418_27457[(1)] = (5));

} else {
var statearr_27419_27458 = state_27411__$1;
(statearr_27419_27458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (15))){
var state_27411__$1 = state_27411;
var statearr_27423_27459 = state_27411__$1;
(statearr_27423_27459[(2)] = null);

(statearr_27423_27459[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (21))){
var state_27411__$1 = state_27411;
var statearr_27424_27460 = state_27411__$1;
(statearr_27424_27460[(2)] = null);

(statearr_27424_27460[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (13))){
var inst_27365 = (state_27411[(8)]);
var inst_27363 = (state_27411[(9)]);
var inst_27364 = (state_27411[(11)]);
var inst_27366 = (state_27411[(12)]);
var inst_27373 = (state_27411[(2)]);
var inst_27374 = (inst_27366 + (1));
var tmp27420 = inst_27365;
var tmp27421 = inst_27363;
var tmp27422 = inst_27364;
var inst_27363__$1 = tmp27421;
var inst_27364__$1 = tmp27422;
var inst_27365__$1 = tmp27420;
var inst_27366__$1 = inst_27374;
var state_27411__$1 = (function (){var statearr_27425 = state_27411;
(statearr_27425[(14)] = inst_27373);

(statearr_27425[(8)] = inst_27365__$1);

(statearr_27425[(9)] = inst_27363__$1);

(statearr_27425[(11)] = inst_27364__$1);

(statearr_27425[(12)] = inst_27366__$1);

return statearr_27425;
})();
var statearr_27426_27461 = state_27411__$1;
(statearr_27426_27461[(2)] = null);

(statearr_27426_27461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (22))){
var state_27411__$1 = state_27411;
var statearr_27427_27462 = state_27411__$1;
(statearr_27427_27462[(2)] = null);

(statearr_27427_27462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (6))){
var inst_27352 = (state_27411[(13)]);
var inst_27361 = f.call(null,inst_27352);
var inst_27362 = cljs.core.seq.call(null,inst_27361);
var inst_27363 = inst_27362;
var inst_27364 = null;
var inst_27365 = (0);
var inst_27366 = (0);
var state_27411__$1 = (function (){var statearr_27428 = state_27411;
(statearr_27428[(8)] = inst_27365);

(statearr_27428[(9)] = inst_27363);

(statearr_27428[(11)] = inst_27364);

(statearr_27428[(12)] = inst_27366);

return statearr_27428;
})();
var statearr_27429_27463 = state_27411__$1;
(statearr_27429_27463[(2)] = null);

(statearr_27429_27463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (17))){
var inst_27377 = (state_27411[(7)]);
var inst_27381 = cljs.core.chunk_first.call(null,inst_27377);
var inst_27382 = cljs.core.chunk_rest.call(null,inst_27377);
var inst_27383 = cljs.core.count.call(null,inst_27381);
var inst_27363 = inst_27382;
var inst_27364 = inst_27381;
var inst_27365 = inst_27383;
var inst_27366 = (0);
var state_27411__$1 = (function (){var statearr_27430 = state_27411;
(statearr_27430[(8)] = inst_27365);

(statearr_27430[(9)] = inst_27363);

(statearr_27430[(11)] = inst_27364);

(statearr_27430[(12)] = inst_27366);

return statearr_27430;
})();
var statearr_27431_27464 = state_27411__$1;
(statearr_27431_27464[(2)] = null);

(statearr_27431_27464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (3))){
var inst_27409 = (state_27411[(2)]);
var state_27411__$1 = state_27411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27411__$1,inst_27409);
} else {
if((state_val_27412 === (12))){
var inst_27397 = (state_27411[(2)]);
var state_27411__$1 = state_27411;
var statearr_27432_27465 = state_27411__$1;
(statearr_27432_27465[(2)] = inst_27397);

(statearr_27432_27465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (2))){
var state_27411__$1 = state_27411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27411__$1,(4),in$);
} else {
if((state_val_27412 === (23))){
var inst_27405 = (state_27411[(2)]);
var state_27411__$1 = state_27411;
var statearr_27433_27466 = state_27411__$1;
(statearr_27433_27466[(2)] = inst_27405);

(statearr_27433_27466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (19))){
var inst_27392 = (state_27411[(2)]);
var state_27411__$1 = state_27411;
var statearr_27434_27467 = state_27411__$1;
(statearr_27434_27467[(2)] = inst_27392);

(statearr_27434_27467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (11))){
var inst_27363 = (state_27411[(9)]);
var inst_27377 = (state_27411[(7)]);
var inst_27377__$1 = cljs.core.seq.call(null,inst_27363);
var state_27411__$1 = (function (){var statearr_27435 = state_27411;
(statearr_27435[(7)] = inst_27377__$1);

return statearr_27435;
})();
if(inst_27377__$1){
var statearr_27436_27468 = state_27411__$1;
(statearr_27436_27468[(1)] = (14));

} else {
var statearr_27437_27469 = state_27411__$1;
(statearr_27437_27469[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (9))){
var inst_27399 = (state_27411[(2)]);
var inst_27400 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27411__$1 = (function (){var statearr_27438 = state_27411;
(statearr_27438[(15)] = inst_27399);

return statearr_27438;
})();
if(cljs.core.truth_(inst_27400)){
var statearr_27439_27470 = state_27411__$1;
(statearr_27439_27470[(1)] = (21));

} else {
var statearr_27440_27471 = state_27411__$1;
(statearr_27440_27471[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (5))){
var inst_27355 = cljs.core.async.close_BANG_.call(null,out);
var state_27411__$1 = state_27411;
var statearr_27441_27472 = state_27411__$1;
(statearr_27441_27472[(2)] = inst_27355);

(statearr_27441_27472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (14))){
var inst_27377 = (state_27411[(7)]);
var inst_27379 = cljs.core.chunked_seq_QMARK_.call(null,inst_27377);
var state_27411__$1 = state_27411;
if(inst_27379){
var statearr_27442_27473 = state_27411__$1;
(statearr_27442_27473[(1)] = (17));

} else {
var statearr_27443_27474 = state_27411__$1;
(statearr_27443_27474[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (16))){
var inst_27395 = (state_27411[(2)]);
var state_27411__$1 = state_27411;
var statearr_27444_27475 = state_27411__$1;
(statearr_27444_27475[(2)] = inst_27395);

(statearr_27444_27475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27412 === (10))){
var inst_27364 = (state_27411[(11)]);
var inst_27366 = (state_27411[(12)]);
var inst_27371 = cljs.core._nth.call(null,inst_27364,inst_27366);
var state_27411__$1 = state_27411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27411__$1,(13),out,inst_27371);
} else {
if((state_val_27412 === (18))){
var inst_27377 = (state_27411[(7)]);
var inst_27386 = cljs.core.first.call(null,inst_27377);
var state_27411__$1 = state_27411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27411__$1,(20),out,inst_27386);
} else {
if((state_val_27412 === (8))){
var inst_27365 = (state_27411[(8)]);
var inst_27366 = (state_27411[(12)]);
var inst_27368 = (inst_27366 < inst_27365);
var inst_27369 = inst_27368;
var state_27411__$1 = state_27411;
if(cljs.core.truth_(inst_27369)){
var statearr_27445_27476 = state_27411__$1;
(statearr_27445_27476[(1)] = (10));

} else {
var statearr_27446_27477 = state_27411__$1;
(statearr_27446_27477[(1)] = (11));

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
}
}
}
}
}
}
});})(c__24954__auto__))
;
return ((function (switch__24842__auto__,c__24954__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24843__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24843__auto____0 = (function (){
var statearr_27450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27450[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24843__auto__);

(statearr_27450[(1)] = (1));

return statearr_27450;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24843__auto____1 = (function (state_27411){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27451){if((e27451 instanceof Object)){
var ex__24846__auto__ = e27451;
var statearr_27452_27478 = state_27411;
(statearr_27452_27478[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27479 = state_27411;
state_27411 = G__27479;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24843__auto__ = function(state_27411){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24843__auto____1.call(this,state_27411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24843__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24843__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__))
})();
var state__24956__auto__ = (function (){var statearr_27453 = f__24955__auto__.call(null);
(statearr_27453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_27453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__))
);

return c__24954__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27480 = [];
var len__21232__auto___27483 = arguments.length;
var i__21233__auto___27484 = (0);
while(true){
if((i__21233__auto___27484 < len__21232__auto___27483)){
args27480.push((arguments[i__21233__auto___27484]));

var G__27485 = (i__21233__auto___27484 + (1));
i__21233__auto___27484 = G__27485;
continue;
} else {
}
break;
}

var G__27482 = args27480.length;
switch (G__27482) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27480.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27487 = [];
var len__21232__auto___27490 = arguments.length;
var i__21233__auto___27491 = (0);
while(true){
if((i__21233__auto___27491 < len__21232__auto___27490)){
args27487.push((arguments[i__21233__auto___27491]));

var G__27492 = (i__21233__auto___27491 + (1));
i__21233__auto___27491 = G__27492;
continue;
} else {
}
break;
}

var G__27489 = args27487.length;
switch (G__27489) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27487.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27494 = [];
var len__21232__auto___27545 = arguments.length;
var i__21233__auto___27546 = (0);
while(true){
if((i__21233__auto___27546 < len__21232__auto___27545)){
args27494.push((arguments[i__21233__auto___27546]));

var G__27547 = (i__21233__auto___27546 + (1));
i__21233__auto___27546 = G__27547;
continue;
} else {
}
break;
}

var G__27496 = args27494.length;
switch (G__27496) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27494.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24954__auto___27549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___27549,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___27549,out){
return (function (state_27520){
var state_val_27521 = (state_27520[(1)]);
if((state_val_27521 === (7))){
var inst_27515 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27522_27550 = state_27520__$1;
(statearr_27522_27550[(2)] = inst_27515);

(statearr_27522_27550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (1))){
var inst_27497 = null;
var state_27520__$1 = (function (){var statearr_27523 = state_27520;
(statearr_27523[(7)] = inst_27497);

return statearr_27523;
})();
var statearr_27524_27551 = state_27520__$1;
(statearr_27524_27551[(2)] = null);

(statearr_27524_27551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (4))){
var inst_27500 = (state_27520[(8)]);
var inst_27500__$1 = (state_27520[(2)]);
var inst_27501 = (inst_27500__$1 == null);
var inst_27502 = cljs.core.not.call(null,inst_27501);
var state_27520__$1 = (function (){var statearr_27525 = state_27520;
(statearr_27525[(8)] = inst_27500__$1);

return statearr_27525;
})();
if(inst_27502){
var statearr_27526_27552 = state_27520__$1;
(statearr_27526_27552[(1)] = (5));

} else {
var statearr_27527_27553 = state_27520__$1;
(statearr_27527_27553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (6))){
var state_27520__$1 = state_27520;
var statearr_27528_27554 = state_27520__$1;
(statearr_27528_27554[(2)] = null);

(statearr_27528_27554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (3))){
var inst_27517 = (state_27520[(2)]);
var inst_27518 = cljs.core.async.close_BANG_.call(null,out);
var state_27520__$1 = (function (){var statearr_27529 = state_27520;
(statearr_27529[(9)] = inst_27517);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27520__$1,inst_27518);
} else {
if((state_val_27521 === (2))){
var state_27520__$1 = state_27520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27520__$1,(4),ch);
} else {
if((state_val_27521 === (11))){
var inst_27500 = (state_27520[(8)]);
var inst_27509 = (state_27520[(2)]);
var inst_27497 = inst_27500;
var state_27520__$1 = (function (){var statearr_27530 = state_27520;
(statearr_27530[(7)] = inst_27497);

(statearr_27530[(10)] = inst_27509);

return statearr_27530;
})();
var statearr_27531_27555 = state_27520__$1;
(statearr_27531_27555[(2)] = null);

(statearr_27531_27555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (9))){
var inst_27500 = (state_27520[(8)]);
var state_27520__$1 = state_27520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27520__$1,(11),out,inst_27500);
} else {
if((state_val_27521 === (5))){
var inst_27497 = (state_27520[(7)]);
var inst_27500 = (state_27520[(8)]);
var inst_27504 = cljs.core._EQ_.call(null,inst_27500,inst_27497);
var state_27520__$1 = state_27520;
if(inst_27504){
var statearr_27533_27556 = state_27520__$1;
(statearr_27533_27556[(1)] = (8));

} else {
var statearr_27534_27557 = state_27520__$1;
(statearr_27534_27557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (10))){
var inst_27512 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27535_27558 = state_27520__$1;
(statearr_27535_27558[(2)] = inst_27512);

(statearr_27535_27558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (8))){
var inst_27497 = (state_27520[(7)]);
var tmp27532 = inst_27497;
var inst_27497__$1 = tmp27532;
var state_27520__$1 = (function (){var statearr_27536 = state_27520;
(statearr_27536[(7)] = inst_27497__$1);

return statearr_27536;
})();
var statearr_27537_27559 = state_27520__$1;
(statearr_27537_27559[(2)] = null);

(statearr_27537_27559[(1)] = (2));


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
});})(c__24954__auto___27549,out))
;
return ((function (switch__24842__auto__,c__24954__auto___27549,out){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_27541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27541[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_27541[(1)] = (1));

return statearr_27541;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_27520){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27542){if((e27542 instanceof Object)){
var ex__24846__auto__ = e27542;
var statearr_27543_27560 = state_27520;
(statearr_27543_27560[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27561 = state_27520;
state_27520 = G__27561;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_27520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_27520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___27549,out))
})();
var state__24956__auto__ = (function (){var statearr_27544 = f__24955__auto__.call(null);
(statearr_27544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___27549);

return statearr_27544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___27549,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27562 = [];
var len__21232__auto___27632 = arguments.length;
var i__21233__auto___27633 = (0);
while(true){
if((i__21233__auto___27633 < len__21232__auto___27632)){
args27562.push((arguments[i__21233__auto___27633]));

var G__27634 = (i__21233__auto___27633 + (1));
i__21233__auto___27633 = G__27634;
continue;
} else {
}
break;
}

var G__27564 = args27562.length;
switch (G__27564) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27562.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24954__auto___27636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___27636,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___27636,out){
return (function (state_27602){
var state_val_27603 = (state_27602[(1)]);
if((state_val_27603 === (7))){
var inst_27598 = (state_27602[(2)]);
var state_27602__$1 = state_27602;
var statearr_27604_27637 = state_27602__$1;
(statearr_27604_27637[(2)] = inst_27598);

(statearr_27604_27637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (1))){
var inst_27565 = (new Array(n));
var inst_27566 = inst_27565;
var inst_27567 = (0);
var state_27602__$1 = (function (){var statearr_27605 = state_27602;
(statearr_27605[(7)] = inst_27567);

(statearr_27605[(8)] = inst_27566);

return statearr_27605;
})();
var statearr_27606_27638 = state_27602__$1;
(statearr_27606_27638[(2)] = null);

(statearr_27606_27638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (4))){
var inst_27570 = (state_27602[(9)]);
var inst_27570__$1 = (state_27602[(2)]);
var inst_27571 = (inst_27570__$1 == null);
var inst_27572 = cljs.core.not.call(null,inst_27571);
var state_27602__$1 = (function (){var statearr_27607 = state_27602;
(statearr_27607[(9)] = inst_27570__$1);

return statearr_27607;
})();
if(inst_27572){
var statearr_27608_27639 = state_27602__$1;
(statearr_27608_27639[(1)] = (5));

} else {
var statearr_27609_27640 = state_27602__$1;
(statearr_27609_27640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (15))){
var inst_27592 = (state_27602[(2)]);
var state_27602__$1 = state_27602;
var statearr_27610_27641 = state_27602__$1;
(statearr_27610_27641[(2)] = inst_27592);

(statearr_27610_27641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (13))){
var state_27602__$1 = state_27602;
var statearr_27611_27642 = state_27602__$1;
(statearr_27611_27642[(2)] = null);

(statearr_27611_27642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (6))){
var inst_27567 = (state_27602[(7)]);
var inst_27588 = (inst_27567 > (0));
var state_27602__$1 = state_27602;
if(cljs.core.truth_(inst_27588)){
var statearr_27612_27643 = state_27602__$1;
(statearr_27612_27643[(1)] = (12));

} else {
var statearr_27613_27644 = state_27602__$1;
(statearr_27613_27644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (3))){
var inst_27600 = (state_27602[(2)]);
var state_27602__$1 = state_27602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27602__$1,inst_27600);
} else {
if((state_val_27603 === (12))){
var inst_27566 = (state_27602[(8)]);
var inst_27590 = cljs.core.vec.call(null,inst_27566);
var state_27602__$1 = state_27602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27602__$1,(15),out,inst_27590);
} else {
if((state_val_27603 === (2))){
var state_27602__$1 = state_27602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27602__$1,(4),ch);
} else {
if((state_val_27603 === (11))){
var inst_27582 = (state_27602[(2)]);
var inst_27583 = (new Array(n));
var inst_27566 = inst_27583;
var inst_27567 = (0);
var state_27602__$1 = (function (){var statearr_27614 = state_27602;
(statearr_27614[(10)] = inst_27582);

(statearr_27614[(7)] = inst_27567);

(statearr_27614[(8)] = inst_27566);

return statearr_27614;
})();
var statearr_27615_27645 = state_27602__$1;
(statearr_27615_27645[(2)] = null);

(statearr_27615_27645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (9))){
var inst_27566 = (state_27602[(8)]);
var inst_27580 = cljs.core.vec.call(null,inst_27566);
var state_27602__$1 = state_27602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27602__$1,(11),out,inst_27580);
} else {
if((state_val_27603 === (5))){
var inst_27570 = (state_27602[(9)]);
var inst_27567 = (state_27602[(7)]);
var inst_27566 = (state_27602[(8)]);
var inst_27575 = (state_27602[(11)]);
var inst_27574 = (inst_27566[inst_27567] = inst_27570);
var inst_27575__$1 = (inst_27567 + (1));
var inst_27576 = (inst_27575__$1 < n);
var state_27602__$1 = (function (){var statearr_27616 = state_27602;
(statearr_27616[(12)] = inst_27574);

(statearr_27616[(11)] = inst_27575__$1);

return statearr_27616;
})();
if(cljs.core.truth_(inst_27576)){
var statearr_27617_27646 = state_27602__$1;
(statearr_27617_27646[(1)] = (8));

} else {
var statearr_27618_27647 = state_27602__$1;
(statearr_27618_27647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (14))){
var inst_27595 = (state_27602[(2)]);
var inst_27596 = cljs.core.async.close_BANG_.call(null,out);
var state_27602__$1 = (function (){var statearr_27620 = state_27602;
(statearr_27620[(13)] = inst_27595);

return statearr_27620;
})();
var statearr_27621_27648 = state_27602__$1;
(statearr_27621_27648[(2)] = inst_27596);

(statearr_27621_27648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (10))){
var inst_27586 = (state_27602[(2)]);
var state_27602__$1 = state_27602;
var statearr_27622_27649 = state_27602__$1;
(statearr_27622_27649[(2)] = inst_27586);

(statearr_27622_27649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (8))){
var inst_27566 = (state_27602[(8)]);
var inst_27575 = (state_27602[(11)]);
var tmp27619 = inst_27566;
var inst_27566__$1 = tmp27619;
var inst_27567 = inst_27575;
var state_27602__$1 = (function (){var statearr_27623 = state_27602;
(statearr_27623[(7)] = inst_27567);

(statearr_27623[(8)] = inst_27566__$1);

return statearr_27623;
})();
var statearr_27624_27650 = state_27602__$1;
(statearr_27624_27650[(2)] = null);

(statearr_27624_27650[(1)] = (2));


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
});})(c__24954__auto___27636,out))
;
return ((function (switch__24842__auto__,c__24954__auto___27636,out){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_27628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27628[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_27628[(1)] = (1));

return statearr_27628;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_27602){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27629){if((e27629 instanceof Object)){
var ex__24846__auto__ = e27629;
var statearr_27630_27651 = state_27602;
(statearr_27630_27651[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27652 = state_27602;
state_27602 = G__27652;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_27602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_27602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___27636,out))
})();
var state__24956__auto__ = (function (){var statearr_27631 = f__24955__auto__.call(null);
(statearr_27631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___27636);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___27636,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27653 = [];
var len__21232__auto___27727 = arguments.length;
var i__21233__auto___27728 = (0);
while(true){
if((i__21233__auto___27728 < len__21232__auto___27727)){
args27653.push((arguments[i__21233__auto___27728]));

var G__27729 = (i__21233__auto___27728 + (1));
i__21233__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var G__27655 = args27653.length;
switch (G__27655) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27653.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24954__auto___27731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___27731,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___27731,out){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27732 = state_27697__$1;
(statearr_27699_27732[(2)] = inst_27693);

(statearr_27699_27732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var inst_27656 = [];
var inst_27657 = inst_27656;
var inst_27658 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27697__$1 = (function (){var statearr_27700 = state_27697;
(statearr_27700[(7)] = inst_27658);

(statearr_27700[(8)] = inst_27657);

return statearr_27700;
})();
var statearr_27701_27733 = state_27697__$1;
(statearr_27701_27733[(2)] = null);

(statearr_27701_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27661 = (state_27697[(9)]);
var inst_27661__$1 = (state_27697[(2)]);
var inst_27662 = (inst_27661__$1 == null);
var inst_27663 = cljs.core.not.call(null,inst_27662);
var state_27697__$1 = (function (){var statearr_27702 = state_27697;
(statearr_27702[(9)] = inst_27661__$1);

return statearr_27702;
})();
if(inst_27663){
var statearr_27703_27734 = state_27697__$1;
(statearr_27703_27734[(1)] = (5));

} else {
var statearr_27704_27735 = state_27697__$1;
(statearr_27704_27735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (15))){
var inst_27687 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27705_27736 = state_27697__$1;
(statearr_27705_27736[(2)] = inst_27687);

(statearr_27705_27736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (13))){
var state_27697__$1 = state_27697;
var statearr_27706_27737 = state_27697__$1;
(statearr_27706_27737[(2)] = null);

(statearr_27706_27737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var inst_27657 = (state_27697[(8)]);
var inst_27682 = inst_27657.length;
var inst_27683 = (inst_27682 > (0));
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27683)){
var statearr_27707_27738 = state_27697__$1;
(statearr_27707_27738[(1)] = (12));

} else {
var statearr_27708_27739 = state_27697__$1;
(statearr_27708_27739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (12))){
var inst_27657 = (state_27697[(8)]);
var inst_27685 = cljs.core.vec.call(null,inst_27657);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(15),out,inst_27685);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),ch);
} else {
if((state_val_27698 === (11))){
var inst_27665 = (state_27697[(10)]);
var inst_27661 = (state_27697[(9)]);
var inst_27675 = (state_27697[(2)]);
var inst_27676 = [];
var inst_27677 = inst_27676.push(inst_27661);
var inst_27657 = inst_27676;
var inst_27658 = inst_27665;
var state_27697__$1 = (function (){var statearr_27709 = state_27697;
(statearr_27709[(7)] = inst_27658);

(statearr_27709[(11)] = inst_27677);

(statearr_27709[(8)] = inst_27657);

(statearr_27709[(12)] = inst_27675);

return statearr_27709;
})();
var statearr_27710_27740 = state_27697__$1;
(statearr_27710_27740[(2)] = null);

(statearr_27710_27740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (9))){
var inst_27657 = (state_27697[(8)]);
var inst_27673 = cljs.core.vec.call(null,inst_27657);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(11),out,inst_27673);
} else {
if((state_val_27698 === (5))){
var inst_27658 = (state_27697[(7)]);
var inst_27665 = (state_27697[(10)]);
var inst_27661 = (state_27697[(9)]);
var inst_27665__$1 = f.call(null,inst_27661);
var inst_27666 = cljs.core._EQ_.call(null,inst_27665__$1,inst_27658);
var inst_27667 = cljs.core.keyword_identical_QMARK_.call(null,inst_27658,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27668 = (inst_27666) || (inst_27667);
var state_27697__$1 = (function (){var statearr_27711 = state_27697;
(statearr_27711[(10)] = inst_27665__$1);

return statearr_27711;
})();
if(cljs.core.truth_(inst_27668)){
var statearr_27712_27741 = state_27697__$1;
(statearr_27712_27741[(1)] = (8));

} else {
var statearr_27713_27742 = state_27697__$1;
(statearr_27713_27742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (14))){
var inst_27690 = (state_27697[(2)]);
var inst_27691 = cljs.core.async.close_BANG_.call(null,out);
var state_27697__$1 = (function (){var statearr_27715 = state_27697;
(statearr_27715[(13)] = inst_27690);

return statearr_27715;
})();
var statearr_27716_27743 = state_27697__$1;
(statearr_27716_27743[(2)] = inst_27691);

(statearr_27716_27743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (10))){
var inst_27680 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27717_27744 = state_27697__$1;
(statearr_27717_27744[(2)] = inst_27680);

(statearr_27717_27744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (8))){
var inst_27665 = (state_27697[(10)]);
var inst_27657 = (state_27697[(8)]);
var inst_27661 = (state_27697[(9)]);
var inst_27670 = inst_27657.push(inst_27661);
var tmp27714 = inst_27657;
var inst_27657__$1 = tmp27714;
var inst_27658 = inst_27665;
var state_27697__$1 = (function (){var statearr_27718 = state_27697;
(statearr_27718[(7)] = inst_27658);

(statearr_27718[(14)] = inst_27670);

(statearr_27718[(8)] = inst_27657__$1);

return statearr_27718;
})();
var statearr_27719_27745 = state_27697__$1;
(statearr_27719_27745[(2)] = null);

(statearr_27719_27745[(1)] = (2));


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
});})(c__24954__auto___27731,out))
;
return ((function (switch__24842__auto__,c__24954__auto___27731,out){
return (function() {
var cljs$core$async$state_machine__24843__auto__ = null;
var cljs$core$async$state_machine__24843__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = cljs$core$async$state_machine__24843__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var cljs$core$async$state_machine__24843__auto____1 = (function (state_27697){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__24846__auto__ = e27724;
var statearr_27725_27746 = state_27697;
(statearr_27725_27746[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27747 = state_27697;
state_27697 = G__27747;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
cljs$core$async$state_machine__24843__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24843__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24843__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24843__auto____0;
cljs$core$async$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24843__auto____1;
return cljs$core$async$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___27731,out))
})();
var state__24956__auto__ = (function (){var statearr_27726 = f__24955__auto__.call(null);
(statearr_27726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___27731);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___27731,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1473888614317