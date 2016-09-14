// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23311){
var map__23336 = p__23311;
var map__23336__$1 = ((((!((map__23336 == null)))?((((map__23336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23336):map__23336);
var m = map__23336__$1;
var n = cljs.core.get.call(null,map__23336__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23338_23360 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23339_23361 = null;
var count__23340_23362 = (0);
var i__23341_23363 = (0);
while(true){
if((i__23341_23363 < count__23340_23362)){
var f_23364 = cljs.core._nth.call(null,chunk__23339_23361,i__23341_23363);
cljs.core.println.call(null,"  ",f_23364);

var G__23365 = seq__23338_23360;
var G__23366 = chunk__23339_23361;
var G__23367 = count__23340_23362;
var G__23368 = (i__23341_23363 + (1));
seq__23338_23360 = G__23365;
chunk__23339_23361 = G__23366;
count__23340_23362 = G__23367;
i__23341_23363 = G__23368;
continue;
} else {
var temp__4657__auto___23369 = cljs.core.seq.call(null,seq__23338_23360);
if(temp__4657__auto___23369){
var seq__23338_23370__$1 = temp__4657__auto___23369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23338_23370__$1)){
var c__20968__auto___23371 = cljs.core.chunk_first.call(null,seq__23338_23370__$1);
var G__23372 = cljs.core.chunk_rest.call(null,seq__23338_23370__$1);
var G__23373 = c__20968__auto___23371;
var G__23374 = cljs.core.count.call(null,c__20968__auto___23371);
var G__23375 = (0);
seq__23338_23360 = G__23372;
chunk__23339_23361 = G__23373;
count__23340_23362 = G__23374;
i__23341_23363 = G__23375;
continue;
} else {
var f_23376 = cljs.core.first.call(null,seq__23338_23370__$1);
cljs.core.println.call(null,"  ",f_23376);

var G__23377 = cljs.core.next.call(null,seq__23338_23370__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__23338_23360 = G__23377;
chunk__23339_23361 = G__23378;
count__23340_23362 = G__23379;
i__23341_23363 = G__23380;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23381 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20157__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23381);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23381)))?cljs.core.second.call(null,arglists_23381):arglists_23381));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23342_23382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23343_23383 = null;
var count__23344_23384 = (0);
var i__23345_23385 = (0);
while(true){
if((i__23345_23385 < count__23344_23384)){
var vec__23346_23386 = cljs.core._nth.call(null,chunk__23343_23383,i__23345_23385);
var name_23387 = cljs.core.nth.call(null,vec__23346_23386,(0),null);
var map__23349_23388 = cljs.core.nth.call(null,vec__23346_23386,(1),null);
var map__23349_23389__$1 = ((((!((map__23349_23388 == null)))?((((map__23349_23388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23349_23388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23349_23388):map__23349_23388);
var doc_23390 = cljs.core.get.call(null,map__23349_23389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23391 = cljs.core.get.call(null,map__23349_23389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23387);

cljs.core.println.call(null," ",arglists_23391);

if(cljs.core.truth_(doc_23390)){
cljs.core.println.call(null," ",doc_23390);
} else {
}

var G__23392 = seq__23342_23382;
var G__23393 = chunk__23343_23383;
var G__23394 = count__23344_23384;
var G__23395 = (i__23345_23385 + (1));
seq__23342_23382 = G__23392;
chunk__23343_23383 = G__23393;
count__23344_23384 = G__23394;
i__23345_23385 = G__23395;
continue;
} else {
var temp__4657__auto___23396 = cljs.core.seq.call(null,seq__23342_23382);
if(temp__4657__auto___23396){
var seq__23342_23397__$1 = temp__4657__auto___23396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23342_23397__$1)){
var c__20968__auto___23398 = cljs.core.chunk_first.call(null,seq__23342_23397__$1);
var G__23399 = cljs.core.chunk_rest.call(null,seq__23342_23397__$1);
var G__23400 = c__20968__auto___23398;
var G__23401 = cljs.core.count.call(null,c__20968__auto___23398);
var G__23402 = (0);
seq__23342_23382 = G__23399;
chunk__23343_23383 = G__23400;
count__23344_23384 = G__23401;
i__23345_23385 = G__23402;
continue;
} else {
var vec__23351_23403 = cljs.core.first.call(null,seq__23342_23397__$1);
var name_23404 = cljs.core.nth.call(null,vec__23351_23403,(0),null);
var map__23354_23405 = cljs.core.nth.call(null,vec__23351_23403,(1),null);
var map__23354_23406__$1 = ((((!((map__23354_23405 == null)))?((((map__23354_23405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23354_23405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23354_23405):map__23354_23405);
var doc_23407 = cljs.core.get.call(null,map__23354_23406__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23408 = cljs.core.get.call(null,map__23354_23406__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23404);

cljs.core.println.call(null," ",arglists_23408);

if(cljs.core.truth_(doc_23407)){
cljs.core.println.call(null," ",doc_23407);
} else {
}

var G__23409 = cljs.core.next.call(null,seq__23342_23397__$1);
var G__23410 = null;
var G__23411 = (0);
var G__23412 = (0);
seq__23342_23382 = G__23409;
chunk__23343_23383 = G__23410;
count__23344_23384 = G__23411;
i__23345_23385 = G__23412;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__23356 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23357 = null;
var count__23358 = (0);
var i__23359 = (0);
while(true){
if((i__23359 < count__23358)){
var role = cljs.core._nth.call(null,chunk__23357,i__23359);
var temp__4657__auto___23413__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___23413__$1)){
var spec_23414 = temp__4657__auto___23413__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_23414));
} else {
}

var G__23415 = seq__23356;
var G__23416 = chunk__23357;
var G__23417 = count__23358;
var G__23418 = (i__23359 + (1));
seq__23356 = G__23415;
chunk__23357 = G__23416;
count__23358 = G__23417;
i__23359 = G__23418;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__23356);
if(temp__4657__auto____$1){
var seq__23356__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23356__$1)){
var c__20968__auto__ = cljs.core.chunk_first.call(null,seq__23356__$1);
var G__23419 = cljs.core.chunk_rest.call(null,seq__23356__$1);
var G__23420 = c__20968__auto__;
var G__23421 = cljs.core.count.call(null,c__20968__auto__);
var G__23422 = (0);
seq__23356 = G__23419;
chunk__23357 = G__23420;
count__23358 = G__23421;
i__23359 = G__23422;
continue;
} else {
var role = cljs.core.first.call(null,seq__23356__$1);
var temp__4657__auto___23423__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___23423__$2)){
var spec_23424 = temp__4657__auto___23423__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_23424));
} else {
}

var G__23425 = cljs.core.next.call(null,seq__23356__$1);
var G__23426 = null;
var G__23427 = (0);
var G__23428 = (0);
seq__23356 = G__23425;
chunk__23357 = G__23426;
count__23358 = G__23427;
i__23359 = G__23428;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1473888610817