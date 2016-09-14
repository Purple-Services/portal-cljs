// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__20157__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_23650 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23650){
return (function (){
var _STAR_always_update_STAR_23651 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23651;
}});})(_STAR_always_update_STAR_23650))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23650;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args23652 = [];
var len__21232__auto___23655 = arguments.length;
var i__21233__auto___23656 = (0);
while(true){
if((i__21233__auto___23656 < len__21232__auto___23655)){
args23652.push((arguments[i__21233__auto___23656]));

var G__23657 = (i__21233__auto___23656 + (1));
i__21233__auto___23656 = G__23657;
continue;
} else {
}
break;
}

var G__23654 = args23652.length;
switch (G__23654) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23652.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__23663_23667 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__23664_23668 = null;
var count__23665_23669 = (0);
var i__23666_23670 = (0);
while(true){
if((i__23666_23670 < count__23665_23669)){
var v_23671 = cljs.core._nth.call(null,chunk__23664_23668,i__23666_23670);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23671);

var G__23672 = seq__23663_23667;
var G__23673 = chunk__23664_23668;
var G__23674 = count__23665_23669;
var G__23675 = (i__23666_23670 + (1));
seq__23663_23667 = G__23672;
chunk__23664_23668 = G__23673;
count__23665_23669 = G__23674;
i__23666_23670 = G__23675;
continue;
} else {
var temp__4657__auto___23676 = cljs.core.seq.call(null,seq__23663_23667);
if(temp__4657__auto___23676){
var seq__23663_23677__$1 = temp__4657__auto___23676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23663_23677__$1)){
var c__20968__auto___23678 = cljs.core.chunk_first.call(null,seq__23663_23677__$1);
var G__23679 = cljs.core.chunk_rest.call(null,seq__23663_23677__$1);
var G__23680 = c__20968__auto___23678;
var G__23681 = cljs.core.count.call(null,c__20968__auto___23678);
var G__23682 = (0);
seq__23663_23667 = G__23679;
chunk__23664_23668 = G__23680;
count__23665_23669 = G__23681;
i__23666_23670 = G__23682;
continue;
} else {
var v_23683 = cljs.core.first.call(null,seq__23663_23677__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23683);

var G__23684 = cljs.core.next.call(null,seq__23663_23677__$1);
var G__23685 = null;
var G__23686 = (0);
var G__23687 = (0);
seq__23663_23667 = G__23684;
chunk__23664_23668 = G__23685;
count__23665_23669 = G__23686;
i__23666_23670 = G__23687;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1473888611392