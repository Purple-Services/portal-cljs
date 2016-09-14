// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.pikaday.with_moment');
goog.require('portal_cljs.utils');
/**
 * Props is of the form:
 *   {:value       ; str, to display
 * :caption     ; string, that describe the maps in set-atom
 * :panel-class ; string, additional classes to assign to root div
 *               ex: panel-primary results in a blue panel
 *                   panel-green   results in a green panel
 *   }
 *   Returns a panel that reports (count (:set-atom props))
 *   
 */
portal_cljs.components.CountPanel = (function portal_cljs$components$CountPanel(props){
return (function (p__23787,props__$1){
var map__23788 = p__23787;
var map__23788__$1 = ((((!((map__23788 == null)))?((((map__23788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23788):map__23788);
var value = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"value","value",305978217));
var caption = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
var panel_class = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"panel-class","panel-class",-108196163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"huge"], null),value], null),[cljs.core.str(" "),cljs.core.str(caption)].join('')], null);
});
});
/**
 * props contains:
 *   {
 *   :table-header  ; reagenet component to render the table header with
 *   :table-row     ; reagent component to render a row
 *   }
 *   data is the reagent atom to display with this table.
 */
portal_cljs.components.StaticTable = (function portal_cljs$components$StaticTable(props,data){
return (function (props__$1,data__$1){
var table_data = data__$1;
var sort_fn = (((new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011).cljs$core$IFn$_invoke$arity$1(props__$1) == null))?cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"id","id",-1388402092)):new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011).cljs$core$IFn$_invoke$arity$1(props__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-bordered table-hover table-striped"], null),new cljs.core.Keyword(null,"table-header","table-header",564803008).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,((function (table_data,sort_fn){
return (function (element){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-row","table-row",118957987).cljs$core$IFn$_invoke$arity$1(props__$1),element], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element)], null));
});})(table_data,sort_fn))
,data__$1)], null)], null);
});
});
/**
 * props is:
 *   {
 *   :keyword        ; keyword associated with this field to sort by
 *   :sort-keyword   ; reagent atom keyword
 *   :sort-reversed? ; is the sort being reversed?
 *   }
 *   text is the text used in field
 */
portal_cljs.components.TableHeadSortable = (function portal_cljs$components$TableHeadSortable(props,text){
return (function (props__$1,text__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fake-link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"sort-keyword","sort-keyword",-1170773374).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(props__$1));

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"sort-reversed?","sort-reversed?",-1865244789).cljs$core$IFn$_invoke$arity$1(props__$1),cljs.core.not);
})], null),text__$1,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sort-keyword","sort-keyword",-1170773374).cljs$core$IFn$_invoke$arity$1(props__$1)),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(props__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fa fa-fw "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"sort-reversed?","sort-reversed?",-1865244789).cljs$core$IFn$_invoke$arity$1(props__$1)))?"fa-angle-down":"fa-angle-up"))].join('')], null)], null):null)], null);
});
});
/**
 * props is:
 *   {
 *   :refresh-fn ; fn, called when the refresh button is pressed
 *            ; is a function of refreshing? which is essentially
 *            ; just the status of the button
 *   :refreshing? ; ratom, optional
 *   }
 */
portal_cljs.components.RefreshButton = (function portal_cljs$components$RefreshButton(props){
var refreshing_QMARK_ = (function (){var or__20157__auto__ = new cljs.core.Keyword(null,"refreshing?","refreshing?",-1286106423).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return reagent.core.atom.call(null,false);
}
})();
return ((function (refreshing_QMARK_){
return (function (props__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (refreshing_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,refreshing_QMARK_))){
return new cljs.core.Keyword(null,"refresh-fn","refresh-fn",-1753059887).cljs$core$IFn$_invoke$arity$1(props__$1).call(null,refreshing_QMARK_);
} else {
return null;
}
});})(refreshing_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fa fa-lg fa-refresh "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,refreshing_QMARK_))?"fa-pulse":null))].join('')], null)], null)], null);
});
;})(refreshing_QMARK_))
});
/**
 * Display key and val
 */
portal_cljs.components.KeyVal = (function portal_cljs$components$KeyVal(key,val){
return (function (key__$1,val__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"info-window-label"], null),[cljs.core.str(key__$1),cljs.core.str(": ")].join('')], null),val__$1], null);
});
});
/**
 * Given n, display the star rating. The value of n is assumed to be within
 *   the range of 0-5
 */
portal_cljs.components.StarRating = (function portal_cljs$components$StarRating(n){
return (function (n__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__20937__auto__ = (function portal_cljs$components$StarRating_$_iter__23798(s__23799){
return (new cljs.core.LazySeq(null,(function (){
var s__23799__$1 = s__23799;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23799__$1);
if(temp__4657__auto__){
var s__23799__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23799__$2)){
var c__20935__auto__ = cljs.core.chunk_first.call(null,s__23799__$2);
var size__20936__auto__ = cljs.core.count.call(null,c__20935__auto__);
var b__23801 = cljs.core.chunk_buffer.call(null,size__20936__auto__);
if((function (){var i__23800 = (0);
while(true){
if((i__23800 < size__20936__auto__)){
var x = cljs.core._nth.call(null,c__20935__auto__,i__23800);
cljs.core.chunk_append.call(null,b__23801,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-star fa-lg"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__23806 = (i__23800 + (1));
i__23800 = G__23806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23801),portal_cljs$components$StarRating_$_iter__23798.call(null,cljs.core.chunk_rest.call(null,s__23799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23801),null);
}
} else {
var x = cljs.core.first.call(null,s__23799__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-star fa-lg"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),portal_cljs$components$StarRating_$_iter__23798.call(null,cljs.core.rest.call(null,s__23799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20937__auto__.call(null,cljs.core.range.call(null,n__$1));
})(),(function (){var iter__20937__auto__ = (function portal_cljs$components$StarRating_$_iter__23802(s__23803){
return (new cljs.core.LazySeq(null,(function (){
var s__23803__$1 = s__23803;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23803__$1);
if(temp__4657__auto__){
var s__23803__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23803__$2)){
var c__20935__auto__ = cljs.core.chunk_first.call(null,s__23803__$2);
var size__20936__auto__ = cljs.core.count.call(null,c__20935__auto__);
var b__23805 = cljs.core.chunk_buffer.call(null,size__20936__auto__);
if((function (){var i__23804 = (0);
while(true){
if((i__23804 < size__20936__auto__)){
var x = cljs.core._nth.call(null,c__20935__auto__,i__23804);
cljs.core.chunk_append.call(null,b__23805,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-star-o fa-lg"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__23807 = (i__23804 + (1));
i__23804 = G__23807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23805),portal_cljs$components$StarRating_$_iter__23802.call(null,cljs.core.chunk_rest.call(null,s__23803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23805),null);
}
} else {
var x = cljs.core.first.call(null,s__23803__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-star-o fa-lg"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),portal_cljs$components$StarRating_$_iter__23802.call(null,cljs.core.rest.call(null,s__23803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20937__auto__.call(null,cljs.core.range.call(null,((5) - n__$1)));
})()], null);
});
});
/**
 * Given an error message, display it in an alert box
 */
portal_cljs.components.ErrorComp = (function portal_cljs$components$ErrorComp(props){
return (function (p__23811,props__$1){
var map__23812 = p__23811;
var map__23812__$1 = ((((!((map__23812 == null)))?((((map__23812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23812):map__23812);
var error_message = cljs.core.get.call(null,map__23812__$1,new cljs.core.Keyword(null,"error-message","error-message",1756021561));
var dismiss_fn = cljs.core.get.call(null,map__23812__$1,new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"alert alert-danger alert-dismissible",new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),(cljs.core.truth_(dismiss_fn)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-times",new cljs.core.Keyword(null,"on-click","on-click",1632826543),dismiss_fn], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sr-only"], null),"Error:"], null),error_message], null);
});
});
/**
 * A component for picking dates. exp-date is an r/atom
 *   which is a unix epoch number
 */
portal_cljs.components.DatePicker = (function portal_cljs$components$DatePicker(exp_date){
var pikaday_instance = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (pikaday_instance){
return (function (this$){
return cljs.core.reset_BANG_.call(null,pikaday_instance,(new Pikaday(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),reagent.core.dom_node.call(null,this$),new cljs.core.Keyword(null,"format","format",-1306924766),"M/D/YYYY",new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (pikaday_instance){
return (function (input){
return cljs.core.reset_BANG_.call(null,exp_date,moment(input).endOf("day").unix());
});})(pikaday_instance))
,new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),((function (pikaday_instance){
return (function (){
if(!((cljs.core.deref.call(null,pikaday_instance) == null))){
return cljs.core.deref.call(null,pikaday_instance).setMoment(moment.unix(cljs.core.deref.call(null,exp_date)).endOf("day"));
} else {
return null;
}
});})(pikaday_instance))
], null)))));
});})(pikaday_instance))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (pikaday_instance){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control date-picker",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Choose Date",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),moment.unix(cljs.core.deref.call(null,exp_date)).endOf("day").format("M/D/YYYY"),new cljs.core.Keyword(null,"value","value",305978217),moment.unix(cljs.core.deref.call(null,exp_date)).endOf("day").format("M/D/YYYY"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (pikaday_instance){
return (function (input){
return cljs.core.reset_BANG_.call(null,exp_date,moment(input).endOf("day").unix());
});})(pikaday_instance))
], null)], null);
});})(pikaday_instance))
], null));
});
/**
 * props is:
 *   {:total-pages  integer ; the amount of pages
 * :current-page integer ; r/atom, the current page number we are on
 * :on-click     fn      ; called whenever a pager element is clicked,optional
 *   }
 */
portal_cljs.components.TablePager = (function portal_cljs$components$TablePager(props){
return (function (p__23818,props__$1){
var map__23819 = p__23818;
var map__23819__$1 = ((((!((map__23819 == null)))?((((map__23819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23819):map__23819);
var total_pages = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"total-pages","total-pages",685894112));
var current_page = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var on_click = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var page_width = (5);
var pages = cljs.core.partition_all.call(null,page_width,cljs.core.range.call(null,(1),((1) + total_pages)));
var displayed_pages = cljs.core.first.call(null,cljs.core.filter.call(null,((function (page_width,pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (i){
return cljs.core.some.call(null,((function (page_width,pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (p1__23814_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_page),p1__23814_SHARP_);
});})(page_width,pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
,i);
});})(page_width,pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
,pages));
if((cljs.core.deref.call(null,current_page) > displayed_pages)){
cljs.core.reset_BANG_.call(null,current_page,(1));
} else {
}

if((total_pages > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pagination"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"page-link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (e){
e.preventDefault();

cljs.core.reset_BANG_.call(null,current_page,(1));

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
], null),"\u00AB"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"page-link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (e){
e.preventDefault();

var new_current_page_23821 = (cljs.core.first.call(null,displayed_pages) - (1));
if((new_current_page_23821 < (1))){
cljs.core.reset_BANG_.call(null,current_page,(1));
} else {
cljs.core.reset_BANG_.call(null,current_page,new_current_page_23821);
}

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
], null),"\u2039"], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (page_number){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("page-item "),cljs.core.str(((cljs.core._EQ_.call(null,page_number,cljs.core.deref.call(null,current_page)))?"active ":null)),cljs.core.str(((cljs.core._EQ_.call(null,(1)))?null:null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"page-link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (e){
e.preventDefault();

cljs.core.reset_BANG_.call(null,current_page,page_number);

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
], null),page_number], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page_number], null));
});})(page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
,displayed_pages)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"page-link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (e){
e.preventDefault();

var new_current_page_23822 = (cljs.core.last.call(null,displayed_pages) + (1));
if((new_current_page_23822 > total_pages)){
cljs.core.reset_BANG_.call(null,current_page,total_pages);
} else {
cljs.core.reset_BANG_.call(null,current_page,new_current_page_23822);
}

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
], null),"\u203A"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"page-link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click){
return (function (e){
e.preventDefault();

cljs.core.reset_BANG_.call(null,current_page,total_pages);

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(page_width,pages,displayed_pages,map__23819,map__23819__$1,total_pages,current_page,on_click))
], null),"\u00BB"], null)], null)], null)], null);
} else {
return null;
}
});
});
/**
 * An alert for confirming or cancelling an action.
 *   props is
 *   {
 *   :cancel-on-click      fn  ; user clicks cancel, same fn used for dismissing
 *                          ; alert
 *   :confirm-on-click     fn  ; user clicks confirm
 *   :confirmation-message str ; message to display
 *   :retrieving?       r/atom ; boolean, are we still retrieving from the server?
 *   }
 */
portal_cljs.components.ConfirmationAlert = (function portal_cljs$components$ConfirmationAlert(props){
return (function (p__23826,props__$1){
var map__23827 = p__23826;
var map__23827__$1 = ((((!((map__23827 == null)))?((((map__23827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23827):map__23827);
var cancel_on_click = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"cancel-on-click","cancel-on-click",285495112));
var confirm_on_click = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"confirm-on-click","confirm-on-click",-535752393));
var confirmation_message = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"confirmation-message","confirmation-message",-1177008026));
var retrieving_QMARK_ = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alert alert-danger alert-dismissible"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-times",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_on_click], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [confirmation_message], null),((cljs.core.not.call(null,cljs.core.deref.call(null,retrieving_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),confirm_on_click], null),"Yes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_on_click], null),"No"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,retrieving_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-spinner fa-pulse"], null)], null):null)], null)], null);
});
});
/**
 * Filter button for btn-group. Shows number of records that meet filter.
 */
portal_cljs.components.TableFilterButton = (function portal_cljs$components$TableFilterButton(props){
return (function (p__23832){
var map__23833 = p__23832;
var map__23833__$1 = ((((!((map__23833 == null)))?((((map__23833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833):map__23833);
var text = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var filter_fn = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675));
var hide_count = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"hide-count","hide-count",2120236192));
var on_click = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var data = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selected_filter = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"selected-filter","selected-filter",-21551936));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_filter),text))?"active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23833,map__23833__$1,text,filter_fn,hide_count,on_click,data,selected_filter){
return (function (e){
cljs.core.reset_BANG_.call(null,selected_filter,text);

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(map__23833,map__23833__$1,text,filter_fn,hide_count,on_click,data,selected_filter))
], null),text,(cljs.core.truth_(hide_count)?null:[cljs.core.str(" ("),cljs.core.str(cljs.core.count.call(null,cljs.core.filter.call(null,filter_fn,data))),cljs.core.str(")")].join(''))], null);
});
});
/**
 * Group of filter buttons for a table.
 */
portal_cljs.components.TableFilterButtonGroup = (function portal_cljs$components$TableFilterButtonGroup(props){
return (function (p__23843){
var map__23844 = p__23843;
var map__23844__$1 = ((((!((map__23844 == null)))?((((map__23844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23844):map__23844);
var hide_counts = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"hide-counts","hide-counts",-660028422));
var on_click = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var filters = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var data = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selected_filter = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"selected-filter","selected-filter",-21551936));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),(function (){var iter__20937__auto__ = ((function (map__23844,map__23844__$1,hide_counts,on_click,filters,data,selected_filter){
return (function portal_cljs$components$TableFilterButtonGroup_$_iter__23846(s__23847){
return (new cljs.core.LazySeq(null,((function (map__23844,map__23844__$1,hide_counts,on_click,filters,data,selected_filter){
return (function (){
var s__23847__$1 = s__23847;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23847__$1);
if(temp__4657__auto__){
var s__23847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23847__$2)){
var c__20935__auto__ = cljs.core.chunk_first.call(null,s__23847__$2);
var size__20936__auto__ = cljs.core.count.call(null,c__20935__auto__);
var b__23849 = cljs.core.chunk_buffer.call(null,size__20936__auto__);
if((function (){var i__23848 = (0);
while(true){
if((i__23848 < size__20936__auto__)){
var f = cljs.core._nth.call(null,c__20935__auto__,i__23848);
cljs.core.chunk_append.call(null,b__23849,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.TableFilterButton,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(f)], null)));

var G__23850 = (i__23848 + (1));
i__23848 = G__23850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23849),portal_cljs$components$TableFilterButtonGroup_$_iter__23846.call(null,cljs.core.chunk_rest.call(null,s__23847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23849),null);
}
} else {
var f = cljs.core.first.call(null,s__23847__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.TableFilterButton,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(f)], null)),portal_cljs$components$TableFilterButtonGroup_$_iter__23846.call(null,cljs.core.rest.call(null,s__23847__$2)));
}
} else {
return null;
}
break;
}
});})(map__23844,map__23844__$1,hide_counts,on_click,filters,data,selected_filter))
,null,null));
});})(map__23844,map__23844__$1,hide_counts,on_click,filters,data,selected_filter))
;
return iter__20937__auto__.call(null,cljs.core.map.call(null,((function (iter__20937__auto__,map__23844,map__23844__$1,hide_counts,on_click,filters,data,selected_filter){
return (function (p1__23835_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),new cljs.core.Keyword(null,"hide-count","hide-count",2120236192),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-filter","selected-filter",-21551936)],[cljs.core.key.call(null,p1__23835_SHARP_),new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__23835_SHARP_)),cljs.core.contains_QMARK_.call(null,hide_counts,cljs.core.key.call(null,p1__23835_SHARP_)),on_click,data,selected_filter]);
});})(iter__20937__auto__,map__23844,map__23844__$1,hide_counts,on_click,filters,data,selected_filter))
,filters));
})()], null);
});
});
/**
 * 
 */
portal_cljs.components.LoadScreen = (function portal_cljs$components$LoadScreen(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),"40%",new cljs.core.Keyword(null,"top","top",-1856271961),"40%",new cljs.core.Keyword(null,"height","height",1025178622),"2em",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),"Loading   ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-spinner fa-pulse",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null)], null)], null)], null)], null);
});
});
/**
 * An alert for when an action is successfully completed
 *   props is
 *   {
 *   :message str ; message to display
 *   :dismiss fn  ; user dismisses this dialgoue
 *   }
 */
portal_cljs.components.AlertSuccess = (function portal_cljs$components$AlertSuccess(props){
return (function (p__23854,props__$1){
var map__23855 = p__23854;
var map__23855__$1 = ((((!((map__23855 == null)))?((((map__23855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23855):map__23855);
var message = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var dismiss = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"dismiss","dismiss",412569545));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alert alert-success alert-dismissible"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-times",new cljs.core.Keyword(null,"on-click","on-click",1632826543),dismiss], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),message], null)], null);
});
});
/**
 * props is:
 *   {
 *   :value          ; str
 *   :default-value  ; str
 *   :placeholder    ; str, optional
 *   :on-change      ; fn, fn to execute on change
 *   }
 *   
 */
portal_cljs.components.TextInput = (function portal_cljs$components$TextInput(props){
return (function (p__23860,props__$1){
var map__23861 = p__23860;
var map__23861__$1 = ((((!((map__23861 == null)))?((((map__23861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23861):map__23861);
var value = cljs.core.get.call(null,map__23861__$1,new cljs.core.Keyword(null,"value","value",305978217));
var default_value = cljs.core.get.call(null,map__23861__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var placeholder = cljs.core.get.call(null,map__23861__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_change = cljs.core.get.call(null,map__23861__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),default_value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
});
/**
 * props is:
 *   {
 *   :value          ; str
 *   :default-value  ; str
 *   :placeholder    ; str, optional
 *   :on-change      ; fn, fn to execute on change
 *   }
 *   
 */
portal_cljs.components.PasswordInput = (function portal_cljs$components$PasswordInput(props){
return (function (p__23866,props__$1){
var map__23867 = p__23866;
var map__23867__$1 = ((((!((map__23867 == null)))?((((map__23867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23867):map__23867);
var value = cljs.core.get.call(null,map__23867__$1,new cljs.core.Keyword(null,"value","value",305978217));
var default_value = cljs.core.get.call(null,map__23867__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var placeholder = cljs.core.get.call(null,map__23867__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_change = cljs.core.get.call(null,map__23867__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),default_value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
});
/**
 * props is:
 *   {
 *   :value          ; str
 *   :default-value  ; str
 *   :placeholder    ; str, optional
 *   :on-change      ; fn, fn to execute on change
 *   :rows           ; number
 *   :cols           : number
 *   }
 *   
 */
portal_cljs.components.TextAreaInput = (function portal_cljs$components$TextAreaInput(props){
return (function (p__23872,props__$1){
var map__23873 = p__23872;
var map__23873__$1 = ((((!((map__23873 == null)))?((((map__23873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23873):map__23873);
var value = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"value","value",305978217));
var default_value = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var placeholder = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_change = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rows = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"cols","cols",-1914801295),cols,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),default_value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
});
/**
 * props is:
 *   {
 *   :value        ; r/atom, id of the currently selected atom
 *   :options      ; set of maps, #{{:id <value> :display-key str}, ...}
 *   :display-key  ; keyword, associated value is displayed
 *   :sort-keyword ; keyword, optional
 *   }
 *   
 */
portal_cljs.components.Select = (function portal_cljs$components$Select(props){
return (function (p__23879,props__$1){
var map__23880 = p__23879;
var map__23880__$1 = ((((!((map__23880 == null)))?((((map__23880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23880):map__23880);
var value = cljs.core.get.call(null,map__23880__$1,new cljs.core.Keyword(null,"value","value",305978217));
var options = cljs.core.get.call(null,map__23880__$1,new cljs.core.Keyword(null,"options","options",99638489));
var display_key = cljs.core.get.call(null,map__23880__$1,new cljs.core.Keyword(null,"display-key","display-key",-1366785151));
var sort_keyword = cljs.core.get.call(null,map__23880__$1,new cljs.core.Keyword(null,"sort-keyword","sort-keyword",-1170773374));
var sort_keyword__$1 = (function (){var or__20157__auto__ = sort_keyword;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (sort_keyword__$1,map__23880,map__23880__$1,value,options,display_key,sort_keyword){
return (function (p1__23875_SHARP_){
return cljs.core.reset_BANG_.call(null,value,((p1__23875_SHARP_["target"])["value"]));
});})(sort_keyword__$1,map__23880,map__23880__$1,value,options,display_key,sort_keyword))
], null),cljs.core.map.call(null,((function (sort_keyword__$1,map__23880,map__23880__$1,value,options,display_key,sort_keyword){
return (function (option){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(option)], null),display_key.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(option)], null));
});})(sort_keyword__$1,map__23880,map__23880__$1,value,options,display_key,sort_keyword))
,cljs.core.sort_by.call(null,sort_keyword__$1,options))], null);
});
});
/**
 * props is:
 *   {
 *   :label                 ; str
 *   :errors                ; str
 *   :input-group-addon     ; optional, hiccup vector
 *   :input-container-class ; optional, str
 *   }
 *   input is hiccup-stype reagent input
 *   
 */
portal_cljs.components.FormGroup = (function portal_cljs$components$FormGroup(props,input){
return (function (props__$1,input__$1){
var map__23884 = props__$1;
var map__23884__$1 = ((((!((map__23884 == null)))?((((map__23884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23884):map__23884);
var label = cljs.core.get.call(null,map__23884__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var errors = cljs.core.get.call(null,map__23884__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var input_group_addon = cljs.core.get.call(null,map__23884__$1,new cljs.core.Keyword(null,"input-group-addon","input-group-addon",1303536431));
var input_container_class = cljs.core.get.call(null,map__23884__$1,new cljs.core.Keyword(null,"input-container-class","input-container-class",-1054488822));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1px"], null)], null),input__$1,(cljs.core.truth_(errors)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alert alert-danger"], null),cljs.core.first.call(null,errors)], null):null)], null);
});
});
portal_cljs.components.ProcessingIcon = (function portal_cljs$components$ProcessingIcon(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-lg fa-spinner fa-pulse ",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null)], null);
});
});
/**
 * A very basic button for submitting forms. props is:
 *   {:retrieving? ; r/atom
 * :on-click    ; fn
 * :text        ; str - what text to display, defaults to "Save"
 */
portal_cljs.components.FormSubmit = (function portal_cljs$components$FormSubmit(props){
return (function (p__23889,props__$1){
var map__23890 = p__23889;
var map__23890__$1 = ((((!((map__23890 == null)))?((((map__23890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23890):map__23890);
var retrieving_QMARK_ = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200));
var on_click = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var text = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"text","text",-1790561697),"Save");
if(cljs.core.truth_(cljs.core.deref.call(null,retrieving_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.ProcessingIcon], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-sm btn-default",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,retrieving_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),text], null);
}
});
});
portal_cljs.components.EditFormSubmit = (function portal_cljs$components$EditFormSubmit(props){
return (function (p__23895,props__$1){
var map__23896 = p__23895;
var map__23896__$1 = ((((!((map__23896 == null)))?((((map__23896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23896):map__23896);
var retrieving_QMARK_ = cljs.core.get.call(null,map__23896__$1,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200));
var editing_QMARK_ = cljs.core.get.call(null,map__23896__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var on_click = cljs.core.get.call(null,map__23896__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var edit_btn_content = cljs.core.get.call(null,map__23896__$1,new cljs.core.Keyword(null,"edit-btn-content","edit-btn-content",2115690179));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-sm btn-default",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,retrieving_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(cljs.core.truth_(cljs.core.deref.call(null,retrieving_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.ProcessingIcon], null):(cljs.core.truth_(cljs.core.deref.call(null,editing_QMARK_))?"Save":((cljs.core.not.call(null,cljs.core.deref.call(null,editing_QMARK_)))?edit_btn_content:null)))], null);
});
});
/**
 * props is
 *   {
 *   dismiss-fn ; fn
 *   class      ; string
 *   }
 */
portal_cljs.components.DismissButton = (function portal_cljs$components$DismissButton(props){
return (function (p__23901,props__$1){
var map__23902 = p__23901;
var map__23902__$1 = ((((!((map__23902 == null)))?((((map__23902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23902):map__23902);
var dismiss_fn = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212));
var class$ = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class$__$1 = (function (){var or__20157__auto__ = class$;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return "btn btn-sm btn-default";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),dismiss_fn], null),"Dismiss"], null);
});
});
portal_cljs.components.SubmitDismiss = (function portal_cljs$components$SubmitDismiss(props,submit,dismiss){
return (function (props__$1,submit__$1,dismiss__$1){
var map__23906 = props__$1;
var map__23906__$1 = ((((!((map__23906 == null)))?((((map__23906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23906):map__23906);
var editing_QMARK_ = cljs.core.get.call(null,map__23906__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var retrieving_QMARK_ = cljs.core.get.call(null,map__23906__$1,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-toolbar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group"], null),submit__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group"], null),(cljs.core.truth_((function (){var or__20157__auto__ = cljs.core.deref.call(null,retrieving_QMARK_);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return cljs.core.not.call(null,cljs.core.deref.call(null,editing_QMARK_));
}
})())?null:dismiss__$1)], null)], null);
});
});
portal_cljs.components.SubmitDismissGroup = (function portal_cljs$components$SubmitDismissGroup(props){
return (function (p__23911,props__$1){
var map__23912 = p__23911;
var map__23912__$1 = ((((!((map__23912 == null)))?((((map__23912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23912):map__23912);
var editing_QMARK_ = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var retrieving_QMARK_ = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200));
var submit_fn = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"submit-fn","submit-fn",1986212071));
var dismiss_fn = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212));
var edit_btn_content = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"edit-btn-content","edit-btn-content",2115690179));
var edit_btn_content__$1 = (function (){var or__20157__auto__ = edit_btn_content;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return "Edit";
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.SubmitDismiss,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200),retrieving_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.EditFormSubmit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200),retrieving_QMARK_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit_fn,new cljs.core.Keyword(null,"edit-btn-content","edit-btn-content",2115690179),edit_btn_content__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.DismissButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212),dismiss_fn], null)], null)], null);
});
});
portal_cljs.components.SubmitDismissConfirm = (function portal_cljs$components$SubmitDismissConfirm(props,submit_dismiss){
return (function (p__23917,props__$1){
var map__23918 = p__23917;
var map__23918__$1 = ((((!((map__23918 == null)))?((((map__23918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23918):map__23918);
var confirming_QMARK_ = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"confirming?","confirming?",914788267));
if(cljs.core.truth_(cljs.core.deref.call(null,confirming_QMARK_))){
return null;
} else {
return submit_dismiss;
}
});
});
portal_cljs.components.SubmitDismissConfirmGroup = (function portal_cljs$components$SubmitDismissConfirmGroup(props){
return (function (p__23923,props__$1){
var map__23924 = p__23923;
var map__23924__$1 = ((((!((map__23924 == null)))?((((map__23924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23924):map__23924);
var confirming_QMARK_ = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"confirming?","confirming?",914788267));
var editing_QMARK_ = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var retrieving_QMARK_ = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200));
var submit_fn = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"submit-fn","submit-fn",1986212071));
var dismiss_fn = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212));
var edit_btn_content = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"edit-btn-content","edit-btn-content",2115690179));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.SubmitDismissConfirm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"confirming?","confirming?",914788267),confirming_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.SubmitDismissGroup,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_,new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200),retrieving_QMARK_,new cljs.core.Keyword(null,"submit-fn","submit-fn",1986212071),submit_fn,new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212),dismiss_fn,new cljs.core.Keyword(null,"edit-btn-content","edit-btn-content",2115690179),edit_btn_content], null)], null)], null);
});
});
/**
 * A button toggling view/hide of information
 *   prop is:
 *   {
 *   :class        ; str, class for the button
 *   :view-content ; str, display when @view? is true
 *   :hide-content ; str, display when @view? is false
 *   :on-click     ; fn
 *   :view?        ; r/atom, boolean
 *   }
 *   
 */
portal_cljs.components.ViewHideButton = (function portal_cljs$components$ViewHideButton(props){
return (function (p__23929,props__$1){
var map__23930 = p__23929;
var map__23930__$1 = ((((!((map__23930 == null)))?((((map__23930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23930):map__23930);
var class$ = cljs.core.get.call(null,map__23930__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var view_content = cljs.core.get.call(null,map__23930__$1,new cljs.core.Keyword(null,"view-content","view-content",-1991785995));
var hide_content = cljs.core.get.call(null,map__23930__$1,new cljs.core.Keyword(null,"hide-content","hide-content",-1057353611));
var on_click = cljs.core.get.call(null,map__23930__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var view_QMARK_ = cljs.core.get.call(null,map__23930__$1,new cljs.core.Keyword(null,"view?","view?",655244230));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(cljs.core.truth_(cljs.core.deref.call(null,view_QMARK_))?hide_content:view_content)], null);
});
});
/**
 * A component that transforms a number into a href tel
 */
portal_cljs.components.TelephoneNumber = (function portal_cljs$components$TelephoneNumber(number){
return (function (number__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("tel:"),cljs.core.str(number__$1)].join('')], null),number__$1], null);
});
});
/**
 * A component that transforms email into a href mailto
 */
portal_cljs.components.Mailto = (function portal_cljs$components$Mailto(email){
return (function (email__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(email__$1)].join('')], null),email__$1], null);
});
});
/**
 * Given a lat, lng create google map link using tex
 */
portal_cljs.components.GoogleMapLink = (function portal_cljs$components$GoogleMapLink(text,lat,lng){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("https://maps.google.com/?q="),cljs.core.str(lat),cljs.core.str(","),cljs.core.str(lng)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null);
});
/**
 * Tab component inserts child into its anchor element. props is a map of the
 *   following form:
 *   {
 *   :toggle (reagent/atom map) ; required, a map of toggle-key's to toggle visible
 *                           ; content
 *   :toggle-key keyword        ; required, how this tab is identified
 *   :default? boolean          ; optional, is this the default tab?
 *   :on-click-tab              ; optional, fn to be called when tab is clicked
 *   }
 * 
 *   The anchor elements action when clicked is to set the val associated with
 *   :toggle-key to true, while setting all other vals of :toggle to false. It will
 *   also mark the current anchor as active.
 * 
 *   child is the component to display inside of the tab
 */
portal_cljs.components.Tab = (function portal_cljs$components$Tab(props,child){
if(cljs.core.truth_(new cljs.core.Keyword(null,"default?","default?",-1410951180).cljs$core$IFn$_invoke$arity$1(props))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030).cljs$core$IFn$_invoke$arity$1(props),cljs.core.assoc,new cljs.core.Keyword(null,"toggle-key","toggle-key",-1254323941).cljs$core$IFn$_invoke$arity$1(props),true);
} else {
}

return (function (props__$1,child__$1){
var map__23935 = props__$1;
var map__23935__$1 = ((((!((map__23935 == null)))?((((map__23935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23935):map__23935);
var toggle = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var toggle_key = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"toggle-key","toggle-key",-1254323941));
var default_QMARK_ = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"default?","default?",-1410951180));
var on_click_tab = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"on-click-tab","on-click-tab",-1962201872));
var tab_selected_fn = ((function (map__23935,map__23935__$1,toggle,toggle_key,default_QMARK_,on_click_tab){
return (function (){
cljs.core.swap_BANG_.call(null,toggle,portal_cljs.utils.update_values,((function (map__23935,map__23935__$1,toggle,toggle_key,default_QMARK_,on_click_tab){
return (function (el){
return false;
});})(map__23935,map__23935__$1,toggle,toggle_key,default_QMARK_,on_click_tab))
);

cljs.core.swap_BANG_.call(null,toggle,cljs.core.assoc,toggle_key,true);

if(cljs.core.truth_(on_click_tab)){
return on_click_tab.call(null);
} else {
return null;
}
});})(map__23935,map__23935__$1,toggle,toggle_key,default_QMARK_,on_click_tab))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(toggle_key.call(null,cljs.core.deref.call(null,toggle)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23935,map__23935__$1,toggle,toggle_key,default_QMARK_,on_click_tab,tab_selected_fn){
return (function (p1__23932_SHARP_){
p1__23932_SHARP_.preventDefault();

return tab_selected_fn.call(null);
});})(map__23935,map__23935__$1,toggle,toggle_key,default_QMARK_,on_click_tab,tab_selected_fn))
,new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(toggle_key.call(null,cljs.core.deref.call(null,toggle)))?"active":null))].join('')], null),child__$1], null)], null);
});
});
/**
 * TabContent component, presumably controlled by a Tab component.
 *   props is:
 *   {
 *   :toggle ; reagent atom, boolean
 *   }
 *   val in props is a reagent atom. When the val of :toggle is true, the content
 *   is active and thus viewable. Otherwise, when the val of :toggle is false, the
 *   content is not displayed.
 */
portal_cljs.components.TabContent = (function portal_cljs$components$TabContent(props,content){
return (function (props__$1,content__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("tab-pane "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030).cljs$core$IFn$_invoke$arity$1(props__$1)))?"active":null))].join('')], null),content__$1], null);
});
});
/**
 * Props are:
 *   {:data   javascript array
 * :layout javascript obj ;;
 * :config javascript obj ;; see https://github.com/plotly/plotly.js/blob/master/src/plot_api/plot_config.js
 *   }
 */
portal_cljs.components.Plotly = (function portal_cljs$components$Plotly(props){
var map__23941 = props;
var map__23941__$1 = ((((!((map__23941 == null)))?((((map__23941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23941):map__23941);
var data = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var config = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data__$1 = cljs.core.clj__GT_js.call(null,data);
var layout__$1 = cljs.core.clj__GT_js.call(null,layout);
var config__$1 = cljs.core.clj__GT_js.call(null,config);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__23941,map__23941__$1,data,layout,config,data__$1,layout__$1,config__$1){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
return Plotly.newPlot(node,data__$1,layout__$1,config__$1);
});})(map__23941,map__23941__$1,data,layout,config,data__$1,layout__$1,config__$1))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"PlotlyComponent",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__23941,map__23941__$1,data,layout,config,data__$1,layout__$1,config__$1){
return (function (this$,old_argv){
var map__23943 = reagent.core.props.call(null,this$);
var map__23943__$1 = ((((!((map__23943 == null)))?((((map__23943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23943):map__23943);
var data__$2 = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout__$2 = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var config__$2 = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data__$3 = cljs.core.clj__GT_js.call(null,data__$2);
var layout__$3 = cljs.core.clj__GT_js.call(null,layout__$2);
var config__$3 = cljs.core.clj__GT_js.call(null,config__$2);
return Plotly.newPlot(reagent.core.dom_node.call(null,this$),data__$3,layout__$3,config__$3);
});})(map__23941,map__23941__$1,data,layout,config,data__$1,layout__$1,config__$1))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__23941,map__23941__$1,data,layout,config,data__$1,layout__$1,config__$1){
return (function (args,this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});})(map__23941,map__23941__$1,data,layout,config,data__$1,layout__$1,config__$1))
], null));
});
/**
 * Create a link to download data as a file
 *   see: http://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
 *     http://jsfiddle.net/VBJ9h/319/
 *   Props are:
 *   {:content r/atom str ; data that is being downloaded
 * :filename str ; filename to be downloaded
 *   }
 */
portal_cljs.components.DownloadCSVLink = (function portal_cljs$components$DownloadCSVLink(props,child){
return (function (p__23948,props__$1){
var map__23949 = p__23948;
var map__23949__$1 = ((((!((map__23949 == null)))?((((map__23949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23949):map__23949);
var content = cljs.core.get.call(null,map__23949__$1,new cljs.core.Keyword(null,"content","content",15833224));
var filename = cljs.core.get.call(null,map__23949__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("data:application/octet-stream,"),cljs.core.str(encodeURIComponent(content))].join(''),new cljs.core.Keyword(null,"download","download",-300081668),filename], null),child], null);
});
});
/**
 * A link to the user page for a particular user
 */
portal_cljs.components.UserCrossLink = (function portal_cljs$components$UserCrossLink(props,child){
return (function (props__$1,child__$1){
var map__23953 = props__$1;
var map__23953__$1 = ((((!((map__23953 == null)))?((((map__23953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23953):map__23953);
var on_click = cljs.core.get.call(null,map__23953__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23953,map__23953__$1,on_click){
return (function (e){
e.preventDefault();

return on_click.call(null);
});})(map__23953,map__23953__$1,on_click))
], null),child__$1], null);
});
});

//# sourceMappingURL=components.js.map?rel=1473888611931