// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20157__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20157__auto__){
return or__20157__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20157__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27809_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27809_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27814 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27815 = null;
var count__27816 = (0);
var i__27817 = (0);
while(true){
if((i__27817 < count__27816)){
var n = cljs.core._nth.call(null,chunk__27815,i__27817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27818 = seq__27814;
var G__27819 = chunk__27815;
var G__27820 = count__27816;
var G__27821 = (i__27817 + (1));
seq__27814 = G__27818;
chunk__27815 = G__27819;
count__27816 = G__27820;
i__27817 = G__27821;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27814);
if(temp__4657__auto__){
var seq__27814__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27814__$1)){
var c__20968__auto__ = cljs.core.chunk_first.call(null,seq__27814__$1);
var G__27822 = cljs.core.chunk_rest.call(null,seq__27814__$1);
var G__27823 = c__20968__auto__;
var G__27824 = cljs.core.count.call(null,c__20968__auto__);
var G__27825 = (0);
seq__27814 = G__27822;
chunk__27815 = G__27823;
count__27816 = G__27824;
i__27817 = G__27825;
continue;
} else {
var n = cljs.core.first.call(null,seq__27814__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27826 = cljs.core.next.call(null,seq__27814__$1);
var G__27827 = null;
var G__27828 = (0);
var G__27829 = (0);
seq__27814 = G__27826;
chunk__27815 = G__27827;
count__27816 = G__27828;
i__27817 = G__27829;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27880_27891 = cljs.core.seq.call(null,deps);
var chunk__27881_27892 = null;
var count__27882_27893 = (0);
var i__27883_27894 = (0);
while(true){
if((i__27883_27894 < count__27882_27893)){
var dep_27895 = cljs.core._nth.call(null,chunk__27881_27892,i__27883_27894);
topo_sort_helper_STAR_.call(null,dep_27895,(depth + (1)),state);

var G__27896 = seq__27880_27891;
var G__27897 = chunk__27881_27892;
var G__27898 = count__27882_27893;
var G__27899 = (i__27883_27894 + (1));
seq__27880_27891 = G__27896;
chunk__27881_27892 = G__27897;
count__27882_27893 = G__27898;
i__27883_27894 = G__27899;
continue;
} else {
var temp__4657__auto___27900 = cljs.core.seq.call(null,seq__27880_27891);
if(temp__4657__auto___27900){
var seq__27880_27901__$1 = temp__4657__auto___27900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27880_27901__$1)){
var c__20968__auto___27902 = cljs.core.chunk_first.call(null,seq__27880_27901__$1);
var G__27903 = cljs.core.chunk_rest.call(null,seq__27880_27901__$1);
var G__27904 = c__20968__auto___27902;
var G__27905 = cljs.core.count.call(null,c__20968__auto___27902);
var G__27906 = (0);
seq__27880_27891 = G__27903;
chunk__27881_27892 = G__27904;
count__27882_27893 = G__27905;
i__27883_27894 = G__27906;
continue;
} else {
var dep_27907 = cljs.core.first.call(null,seq__27880_27901__$1);
topo_sort_helper_STAR_.call(null,dep_27907,(depth + (1)),state);

var G__27908 = cljs.core.next.call(null,seq__27880_27901__$1);
var G__27909 = null;
var G__27910 = (0);
var G__27911 = (0);
seq__27880_27891 = G__27908;
chunk__27881_27892 = G__27909;
count__27882_27893 = G__27910;
i__27883_27894 = G__27911;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27884){
var vec__27888 = p__27884;
var seq__27889 = cljs.core.seq.call(null,vec__27888);
var first__27890 = cljs.core.first.call(null,seq__27889);
var seq__27889__$1 = cljs.core.next.call(null,seq__27889);
var x = first__27890;
var xs = seq__27889__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27888,seq__27889,first__27890,seq__27889__$1,x,xs,get_deps__$1){
return (function (p1__27830_SHARP_){
return clojure.set.difference.call(null,p1__27830_SHARP_,x);
});})(vec__27888,seq__27889,first__27890,seq__27889__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27924 = cljs.core.seq.call(null,provides);
var chunk__27925 = null;
var count__27926 = (0);
var i__27927 = (0);
while(true){
if((i__27927 < count__27926)){
var prov = cljs.core._nth.call(null,chunk__27925,i__27927);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27928_27936 = cljs.core.seq.call(null,requires);
var chunk__27929_27937 = null;
var count__27930_27938 = (0);
var i__27931_27939 = (0);
while(true){
if((i__27931_27939 < count__27930_27938)){
var req_27940 = cljs.core._nth.call(null,chunk__27929_27937,i__27931_27939);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27940,prov);

var G__27941 = seq__27928_27936;
var G__27942 = chunk__27929_27937;
var G__27943 = count__27930_27938;
var G__27944 = (i__27931_27939 + (1));
seq__27928_27936 = G__27941;
chunk__27929_27937 = G__27942;
count__27930_27938 = G__27943;
i__27931_27939 = G__27944;
continue;
} else {
var temp__4657__auto___27945 = cljs.core.seq.call(null,seq__27928_27936);
if(temp__4657__auto___27945){
var seq__27928_27946__$1 = temp__4657__auto___27945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27928_27946__$1)){
var c__20968__auto___27947 = cljs.core.chunk_first.call(null,seq__27928_27946__$1);
var G__27948 = cljs.core.chunk_rest.call(null,seq__27928_27946__$1);
var G__27949 = c__20968__auto___27947;
var G__27950 = cljs.core.count.call(null,c__20968__auto___27947);
var G__27951 = (0);
seq__27928_27936 = G__27948;
chunk__27929_27937 = G__27949;
count__27930_27938 = G__27950;
i__27931_27939 = G__27951;
continue;
} else {
var req_27952 = cljs.core.first.call(null,seq__27928_27946__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27952,prov);

var G__27953 = cljs.core.next.call(null,seq__27928_27946__$1);
var G__27954 = null;
var G__27955 = (0);
var G__27956 = (0);
seq__27928_27936 = G__27953;
chunk__27929_27937 = G__27954;
count__27930_27938 = G__27955;
i__27931_27939 = G__27956;
continue;
}
} else {
}
}
break;
}

var G__27957 = seq__27924;
var G__27958 = chunk__27925;
var G__27959 = count__27926;
var G__27960 = (i__27927 + (1));
seq__27924 = G__27957;
chunk__27925 = G__27958;
count__27926 = G__27959;
i__27927 = G__27960;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27924);
if(temp__4657__auto__){
var seq__27924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27924__$1)){
var c__20968__auto__ = cljs.core.chunk_first.call(null,seq__27924__$1);
var G__27961 = cljs.core.chunk_rest.call(null,seq__27924__$1);
var G__27962 = c__20968__auto__;
var G__27963 = cljs.core.count.call(null,c__20968__auto__);
var G__27964 = (0);
seq__27924 = G__27961;
chunk__27925 = G__27962;
count__27926 = G__27963;
i__27927 = G__27964;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27924__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27932_27965 = cljs.core.seq.call(null,requires);
var chunk__27933_27966 = null;
var count__27934_27967 = (0);
var i__27935_27968 = (0);
while(true){
if((i__27935_27968 < count__27934_27967)){
var req_27969 = cljs.core._nth.call(null,chunk__27933_27966,i__27935_27968);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27969,prov);

var G__27970 = seq__27932_27965;
var G__27971 = chunk__27933_27966;
var G__27972 = count__27934_27967;
var G__27973 = (i__27935_27968 + (1));
seq__27932_27965 = G__27970;
chunk__27933_27966 = G__27971;
count__27934_27967 = G__27972;
i__27935_27968 = G__27973;
continue;
} else {
var temp__4657__auto___27974__$1 = cljs.core.seq.call(null,seq__27932_27965);
if(temp__4657__auto___27974__$1){
var seq__27932_27975__$1 = temp__4657__auto___27974__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27932_27975__$1)){
var c__20968__auto___27976 = cljs.core.chunk_first.call(null,seq__27932_27975__$1);
var G__27977 = cljs.core.chunk_rest.call(null,seq__27932_27975__$1);
var G__27978 = c__20968__auto___27976;
var G__27979 = cljs.core.count.call(null,c__20968__auto___27976);
var G__27980 = (0);
seq__27932_27965 = G__27977;
chunk__27933_27966 = G__27978;
count__27934_27967 = G__27979;
i__27935_27968 = G__27980;
continue;
} else {
var req_27981 = cljs.core.first.call(null,seq__27932_27975__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27981,prov);

var G__27982 = cljs.core.next.call(null,seq__27932_27975__$1);
var G__27983 = null;
var G__27984 = (0);
var G__27985 = (0);
seq__27932_27965 = G__27982;
chunk__27933_27966 = G__27983;
count__27934_27967 = G__27984;
i__27935_27968 = G__27985;
continue;
}
} else {
}
}
break;
}

var G__27986 = cljs.core.next.call(null,seq__27924__$1);
var G__27987 = null;
var G__27988 = (0);
var G__27989 = (0);
seq__27924 = G__27986;
chunk__27925 = G__27987;
count__27926 = G__27988;
i__27927 = G__27989;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27994_27998 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27995_27999 = null;
var count__27996_28000 = (0);
var i__27997_28001 = (0);
while(true){
if((i__27997_28001 < count__27996_28000)){
var ns_28002 = cljs.core._nth.call(null,chunk__27995_27999,i__27997_28001);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28002);

var G__28003 = seq__27994_27998;
var G__28004 = chunk__27995_27999;
var G__28005 = count__27996_28000;
var G__28006 = (i__27997_28001 + (1));
seq__27994_27998 = G__28003;
chunk__27995_27999 = G__28004;
count__27996_28000 = G__28005;
i__27997_28001 = G__28006;
continue;
} else {
var temp__4657__auto___28007 = cljs.core.seq.call(null,seq__27994_27998);
if(temp__4657__auto___28007){
var seq__27994_28008__$1 = temp__4657__auto___28007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27994_28008__$1)){
var c__20968__auto___28009 = cljs.core.chunk_first.call(null,seq__27994_28008__$1);
var G__28010 = cljs.core.chunk_rest.call(null,seq__27994_28008__$1);
var G__28011 = c__20968__auto___28009;
var G__28012 = cljs.core.count.call(null,c__20968__auto___28009);
var G__28013 = (0);
seq__27994_27998 = G__28010;
chunk__27995_27999 = G__28011;
count__27996_28000 = G__28012;
i__27997_28001 = G__28013;
continue;
} else {
var ns_28014 = cljs.core.first.call(null,seq__27994_28008__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28014);

var G__28015 = cljs.core.next.call(null,seq__27994_28008__$1);
var G__28016 = null;
var G__28017 = (0);
var G__28018 = (0);
seq__27994_27998 = G__28015;
chunk__27995_27999 = G__28016;
count__27996_28000 = G__28017;
i__27997_28001 = G__28018;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20157__auto__ = goog.require__;
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28019__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28020__i = 0, G__28020__a = new Array(arguments.length -  0);
while (G__28020__i < G__28020__a.length) {G__28020__a[G__28020__i] = arguments[G__28020__i + 0]; ++G__28020__i;}
  args = new cljs.core.IndexedSeq(G__28020__a,0);
} 
return G__28019__delegate.call(this,args);};
G__28019.cljs$lang$maxFixedArity = 0;
G__28019.cljs$lang$applyTo = (function (arglist__28021){
var args = cljs.core.seq(arglist__28021);
return G__28019__delegate(args);
});
G__28019.cljs$core$IFn$_invoke$arity$variadic = G__28019__delegate;
return G__28019;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28023 = cljs.core._EQ_;
var expr__28024 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28023.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28024))){
var path_parts = ((function (pred__28023,expr__28024){
return (function (p1__28022_SHARP_){
return clojure.string.split.call(null,p1__28022_SHARP_,/[\/\\]/);
});})(pred__28023,expr__28024))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28023,expr__28024){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28026){if((e28026 instanceof Error)){
var e = e28026;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28026;

}
}})());
});
;})(path_parts,sep,root,pred__28023,expr__28024))
} else {
if(cljs.core.truth_(pred__28023.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28024))){
return ((function (pred__28023,expr__28024){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28023,expr__28024){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28023,expr__28024))
);

return deferred.addErrback(((function (deferred,pred__28023,expr__28024){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28023,expr__28024))
);
});
;})(pred__28023,expr__28024))
} else {
return ((function (pred__28023,expr__28024){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28023,expr__28024))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28027,callback){
var map__28030 = p__28027;
var map__28030__$1 = ((((!((map__28030 == null)))?((((map__28030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28030):map__28030);
var file_msg = map__28030__$1;
var request_url = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28030,map__28030__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28030,map__28030__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__){
return (function (state_28054){
var state_val_28055 = (state_28054[(1)]);
if((state_val_28055 === (7))){
var inst_28050 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28056_28076 = state_28054__$1;
(statearr_28056_28076[(2)] = inst_28050);

(statearr_28056_28076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (1))){
var state_28054__$1 = state_28054;
var statearr_28057_28077 = state_28054__$1;
(statearr_28057_28077[(2)] = null);

(statearr_28057_28077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (4))){
var inst_28034 = (state_28054[(7)]);
var inst_28034__$1 = (state_28054[(2)]);
var state_28054__$1 = (function (){var statearr_28058 = state_28054;
(statearr_28058[(7)] = inst_28034__$1);

return statearr_28058;
})();
if(cljs.core.truth_(inst_28034__$1)){
var statearr_28059_28078 = state_28054__$1;
(statearr_28059_28078[(1)] = (5));

} else {
var statearr_28060_28079 = state_28054__$1;
(statearr_28060_28079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (6))){
var state_28054__$1 = state_28054;
var statearr_28061_28080 = state_28054__$1;
(statearr_28061_28080[(2)] = null);

(statearr_28061_28080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (3))){
var inst_28052 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28054__$1,inst_28052);
} else {
if((state_val_28055 === (2))){
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28054__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28055 === (11))){
var inst_28046 = (state_28054[(2)]);
var state_28054__$1 = (function (){var statearr_28062 = state_28054;
(statearr_28062[(8)] = inst_28046);

return statearr_28062;
})();
var statearr_28063_28081 = state_28054__$1;
(statearr_28063_28081[(2)] = null);

(statearr_28063_28081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (9))){
var inst_28038 = (state_28054[(9)]);
var inst_28040 = (state_28054[(10)]);
var inst_28042 = inst_28040.call(null,inst_28038);
var state_28054__$1 = state_28054;
var statearr_28064_28082 = state_28054__$1;
(statearr_28064_28082[(2)] = inst_28042);

(statearr_28064_28082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (5))){
var inst_28034 = (state_28054[(7)]);
var inst_28036 = figwheel.client.file_reloading.blocking_load.call(null,inst_28034);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28054__$1,(8),inst_28036);
} else {
if((state_val_28055 === (10))){
var inst_28038 = (state_28054[(9)]);
var inst_28044 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28038);
var state_28054__$1 = state_28054;
var statearr_28065_28083 = state_28054__$1;
(statearr_28065_28083[(2)] = inst_28044);

(statearr_28065_28083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (8))){
var inst_28040 = (state_28054[(10)]);
var inst_28034 = (state_28054[(7)]);
var inst_28038 = (state_28054[(2)]);
var inst_28039 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28040__$1 = cljs.core.get.call(null,inst_28039,inst_28034);
var state_28054__$1 = (function (){var statearr_28066 = state_28054;
(statearr_28066[(9)] = inst_28038);

(statearr_28066[(10)] = inst_28040__$1);

return statearr_28066;
})();
if(cljs.core.truth_(inst_28040__$1)){
var statearr_28067_28084 = state_28054__$1;
(statearr_28067_28084[(1)] = (9));

} else {
var statearr_28068_28085 = state_28054__$1;
(statearr_28068_28085[(1)] = (10));

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
});})(c__24954__auto__))
;
return ((function (switch__24842__auto__,c__24954__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24843__auto__ = null;
var figwheel$client$file_reloading$state_machine__24843__auto____0 = (function (){
var statearr_28072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28072[(0)] = figwheel$client$file_reloading$state_machine__24843__auto__);

(statearr_28072[(1)] = (1));

return statearr_28072;
});
var figwheel$client$file_reloading$state_machine__24843__auto____1 = (function (state_28054){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_28054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e28073){if((e28073 instanceof Object)){
var ex__24846__auto__ = e28073;
var statearr_28074_28086 = state_28054;
(statearr_28074_28086[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28087 = state_28054;
state_28054 = G__28087;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24843__auto__ = function(state_28054){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24843__auto____1.call(this,state_28054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24843__auto____0;
figwheel$client$file_reloading$state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24843__auto____1;
return figwheel$client$file_reloading$state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__))
})();
var state__24956__auto__ = (function (){var statearr_28075 = f__24955__auto__.call(null);
(statearr_28075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__))
);

return c__24954__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28088,callback){
var map__28091 = p__28088;
var map__28091__$1 = ((((!((map__28091 == null)))?((((map__28091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28091):map__28091);
var file_msg = map__28091__$1;
var namespace = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28091,map__28091__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28091,map__28091__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28093){
var map__28096 = p__28093;
var map__28096__$1 = ((((!((map__28096 == null)))?((((map__28096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28096):map__28096);
var file_msg = map__28096__$1;
var namespace = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20145__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20145__auto__){
var or__20157__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20157__auto__)){
return or__20157__auto__;
} else {
var or__20157__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20157__auto____$1)){
return or__20157__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20145__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28098,callback){
var map__28101 = p__28098;
var map__28101__$1 = ((((!((map__28101 == null)))?((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var file_msg = map__28101__$1;
var request_url = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24954__auto___28205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto___28205,out){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto___28205,out){
return (function (state_28187){
var state_val_28188 = (state_28187[(1)]);
if((state_val_28188 === (1))){
var inst_28161 = cljs.core.seq.call(null,files);
var inst_28162 = cljs.core.first.call(null,inst_28161);
var inst_28163 = cljs.core.next.call(null,inst_28161);
var inst_28164 = files;
var state_28187__$1 = (function (){var statearr_28189 = state_28187;
(statearr_28189[(7)] = inst_28163);

(statearr_28189[(8)] = inst_28162);

(statearr_28189[(9)] = inst_28164);

return statearr_28189;
})();
var statearr_28190_28206 = state_28187__$1;
(statearr_28190_28206[(2)] = null);

(statearr_28190_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (2))){
var inst_28170 = (state_28187[(10)]);
var inst_28164 = (state_28187[(9)]);
var inst_28169 = cljs.core.seq.call(null,inst_28164);
var inst_28170__$1 = cljs.core.first.call(null,inst_28169);
var inst_28171 = cljs.core.next.call(null,inst_28169);
var inst_28172 = (inst_28170__$1 == null);
var inst_28173 = cljs.core.not.call(null,inst_28172);
var state_28187__$1 = (function (){var statearr_28191 = state_28187;
(statearr_28191[(10)] = inst_28170__$1);

(statearr_28191[(11)] = inst_28171);

return statearr_28191;
})();
if(inst_28173){
var statearr_28192_28207 = state_28187__$1;
(statearr_28192_28207[(1)] = (4));

} else {
var statearr_28193_28208 = state_28187__$1;
(statearr_28193_28208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (3))){
var inst_28185 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28187__$1,inst_28185);
} else {
if((state_val_28188 === (4))){
var inst_28170 = (state_28187[(10)]);
var inst_28175 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28170);
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28187__$1,(7),inst_28175);
} else {
if((state_val_28188 === (5))){
var inst_28181 = cljs.core.async.close_BANG_.call(null,out);
var state_28187__$1 = state_28187;
var statearr_28194_28209 = state_28187__$1;
(statearr_28194_28209[(2)] = inst_28181);

(statearr_28194_28209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (6))){
var inst_28183 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
var statearr_28195_28210 = state_28187__$1;
(statearr_28195_28210[(2)] = inst_28183);

(statearr_28195_28210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (7))){
var inst_28171 = (state_28187[(11)]);
var inst_28177 = (state_28187[(2)]);
var inst_28178 = cljs.core.async.put_BANG_.call(null,out,inst_28177);
var inst_28164 = inst_28171;
var state_28187__$1 = (function (){var statearr_28196 = state_28187;
(statearr_28196[(12)] = inst_28178);

(statearr_28196[(9)] = inst_28164);

return statearr_28196;
})();
var statearr_28197_28211 = state_28187__$1;
(statearr_28197_28211[(2)] = null);

(statearr_28197_28211[(1)] = (2));


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
});})(c__24954__auto___28205,out))
;
return ((function (switch__24842__auto__,c__24954__auto___28205,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto____0 = (function (){
var statearr_28201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28201[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto__);

(statearr_28201[(1)] = (1));

return statearr_28201;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto____1 = (function (state_28187){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_28187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e28202){if((e28202 instanceof Object)){
var ex__24846__auto__ = e28202;
var statearr_28203_28212 = state_28187;
(statearr_28203_28212[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28187;
state_28187 = G__28213;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto__ = function(state_28187){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto____1.call(this,state_28187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto___28205,out))
})();
var state__24956__auto__ = (function (){var statearr_28204 = f__24955__auto__.call(null);
(statearr_28204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto___28205);

return statearr_28204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto___28205,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28214,opts){
var map__28218 = p__28214;
var map__28218__$1 = ((((!((map__28218 == null)))?((((map__28218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28218):map__28218);
var eval_body__$1 = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20145__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20145__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20145__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28220){var e = e28220;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28221_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28230){
var vec__28231 = p__28230;
var k = cljs.core.nth.call(null,vec__28231,(0),null);
var v = cljs.core.nth.call(null,vec__28231,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28234){
var vec__28235 = p__28234;
var k = cljs.core.nth.call(null,vec__28235,(0),null);
var v = cljs.core.nth.call(null,vec__28235,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28241,p__28242){
var map__28489 = p__28241;
var map__28489__$1 = ((((!((map__28489 == null)))?((((map__28489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);
var opts = map__28489__$1;
var before_jsload = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28490 = p__28242;
var map__28490__$1 = ((((!((map__28490 == null)))?((((map__28490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);
var msg = map__28490__$1;
var files = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24955__auto__ = (function (){var switch__24842__auto__ = ((function (c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28643){
var state_val_28644 = (state_28643[(1)]);
if((state_val_28644 === (7))){
var inst_28507 = (state_28643[(7)]);
var inst_28505 = (state_28643[(8)]);
var inst_28504 = (state_28643[(9)]);
var inst_28506 = (state_28643[(10)]);
var inst_28512 = cljs.core._nth.call(null,inst_28505,inst_28507);
var inst_28513 = figwheel.client.file_reloading.eval_body.call(null,inst_28512,opts);
var inst_28514 = (inst_28507 + (1));
var tmp28645 = inst_28505;
var tmp28646 = inst_28504;
var tmp28647 = inst_28506;
var inst_28504__$1 = tmp28646;
var inst_28505__$1 = tmp28645;
var inst_28506__$1 = tmp28647;
var inst_28507__$1 = inst_28514;
var state_28643__$1 = (function (){var statearr_28648 = state_28643;
(statearr_28648[(7)] = inst_28507__$1);

(statearr_28648[(8)] = inst_28505__$1);

(statearr_28648[(9)] = inst_28504__$1);

(statearr_28648[(10)] = inst_28506__$1);

(statearr_28648[(11)] = inst_28513);

return statearr_28648;
})();
var statearr_28649_28735 = state_28643__$1;
(statearr_28649_28735[(2)] = null);

(statearr_28649_28735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (20))){
var inst_28547 = (state_28643[(12)]);
var inst_28555 = figwheel.client.file_reloading.sort_files.call(null,inst_28547);
var state_28643__$1 = state_28643;
var statearr_28650_28736 = state_28643__$1;
(statearr_28650_28736[(2)] = inst_28555);

(statearr_28650_28736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (27))){
var state_28643__$1 = state_28643;
var statearr_28651_28737 = state_28643__$1;
(statearr_28651_28737[(2)] = null);

(statearr_28651_28737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (1))){
var inst_28496 = (state_28643[(13)]);
var inst_28493 = before_jsload.call(null,files);
var inst_28494 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28495 = (function (){return ((function (inst_28496,inst_28493,inst_28494,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28238_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28238_SHARP_);
});
;})(inst_28496,inst_28493,inst_28494,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28496__$1 = cljs.core.filter.call(null,inst_28495,files);
var inst_28497 = cljs.core.not_empty.call(null,inst_28496__$1);
var state_28643__$1 = (function (){var statearr_28652 = state_28643;
(statearr_28652[(14)] = inst_28494);

(statearr_28652[(15)] = inst_28493);

(statearr_28652[(13)] = inst_28496__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28497)){
var statearr_28653_28738 = state_28643__$1;
(statearr_28653_28738[(1)] = (2));

} else {
var statearr_28654_28739 = state_28643__$1;
(statearr_28654_28739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (24))){
var state_28643__$1 = state_28643;
var statearr_28655_28740 = state_28643__$1;
(statearr_28655_28740[(2)] = null);

(statearr_28655_28740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (39))){
var inst_28597 = (state_28643[(16)]);
var state_28643__$1 = state_28643;
var statearr_28656_28741 = state_28643__$1;
(statearr_28656_28741[(2)] = inst_28597);

(statearr_28656_28741[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (46))){
var inst_28638 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
var statearr_28657_28742 = state_28643__$1;
(statearr_28657_28742[(2)] = inst_28638);

(statearr_28657_28742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (4))){
var inst_28541 = (state_28643[(2)]);
var inst_28542 = cljs.core.List.EMPTY;
var inst_28543 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28542);
var inst_28544 = (function (){return ((function (inst_28541,inst_28542,inst_28543,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28239_SHARP_){
var and__20145__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28239_SHARP_);
if(cljs.core.truth_(and__20145__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28239_SHARP_));
} else {
return and__20145__auto__;
}
});
;})(inst_28541,inst_28542,inst_28543,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28545 = cljs.core.filter.call(null,inst_28544,files);
var inst_28546 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28547 = cljs.core.concat.call(null,inst_28545,inst_28546);
var state_28643__$1 = (function (){var statearr_28658 = state_28643;
(statearr_28658[(12)] = inst_28547);

(statearr_28658[(17)] = inst_28543);

(statearr_28658[(18)] = inst_28541);

return statearr_28658;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28659_28743 = state_28643__$1;
(statearr_28659_28743[(1)] = (16));

} else {
var statearr_28660_28744 = state_28643__$1;
(statearr_28660_28744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (15))){
var inst_28531 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
var statearr_28661_28745 = state_28643__$1;
(statearr_28661_28745[(2)] = inst_28531);

(statearr_28661_28745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (21))){
var inst_28557 = (state_28643[(19)]);
var inst_28557__$1 = (state_28643[(2)]);
var inst_28558 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28557__$1);
var state_28643__$1 = (function (){var statearr_28662 = state_28643;
(statearr_28662[(19)] = inst_28557__$1);

return statearr_28662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28643__$1,(22),inst_28558);
} else {
if((state_val_28644 === (31))){
var inst_28641 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28643__$1,inst_28641);
} else {
if((state_val_28644 === (32))){
var inst_28597 = (state_28643[(16)]);
var inst_28602 = inst_28597.cljs$lang$protocol_mask$partition0$;
var inst_28603 = (inst_28602 & (64));
var inst_28604 = inst_28597.cljs$core$ISeq$;
var inst_28605 = (inst_28603) || (inst_28604);
var state_28643__$1 = state_28643;
if(cljs.core.truth_(inst_28605)){
var statearr_28663_28746 = state_28643__$1;
(statearr_28663_28746[(1)] = (35));

} else {
var statearr_28664_28747 = state_28643__$1;
(statearr_28664_28747[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (40))){
var inst_28618 = (state_28643[(20)]);
var inst_28617 = (state_28643[(2)]);
var inst_28618__$1 = cljs.core.get.call(null,inst_28617,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28619 = cljs.core.get.call(null,inst_28617,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28620 = cljs.core.not_empty.call(null,inst_28618__$1);
var state_28643__$1 = (function (){var statearr_28665 = state_28643;
(statearr_28665[(21)] = inst_28619);

(statearr_28665[(20)] = inst_28618__$1);

return statearr_28665;
})();
if(cljs.core.truth_(inst_28620)){
var statearr_28666_28748 = state_28643__$1;
(statearr_28666_28748[(1)] = (41));

} else {
var statearr_28667_28749 = state_28643__$1;
(statearr_28667_28749[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (33))){
var state_28643__$1 = state_28643;
var statearr_28668_28750 = state_28643__$1;
(statearr_28668_28750[(2)] = false);

(statearr_28668_28750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (13))){
var inst_28517 = (state_28643[(22)]);
var inst_28521 = cljs.core.chunk_first.call(null,inst_28517);
var inst_28522 = cljs.core.chunk_rest.call(null,inst_28517);
var inst_28523 = cljs.core.count.call(null,inst_28521);
var inst_28504 = inst_28522;
var inst_28505 = inst_28521;
var inst_28506 = inst_28523;
var inst_28507 = (0);
var state_28643__$1 = (function (){var statearr_28669 = state_28643;
(statearr_28669[(7)] = inst_28507);

(statearr_28669[(8)] = inst_28505);

(statearr_28669[(9)] = inst_28504);

(statearr_28669[(10)] = inst_28506);

return statearr_28669;
})();
var statearr_28670_28751 = state_28643__$1;
(statearr_28670_28751[(2)] = null);

(statearr_28670_28751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (22))){
var inst_28560 = (state_28643[(23)]);
var inst_28565 = (state_28643[(24)]);
var inst_28557 = (state_28643[(19)]);
var inst_28561 = (state_28643[(25)]);
var inst_28560__$1 = (state_28643[(2)]);
var inst_28561__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28560__$1);
var inst_28562 = (function (){var all_files = inst_28557;
var res_SINGLEQUOTE_ = inst_28560__$1;
var res = inst_28561__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28560,inst_28565,inst_28557,inst_28561,inst_28560__$1,inst_28561__$1,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28240_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28240_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28560,inst_28565,inst_28557,inst_28561,inst_28560__$1,inst_28561__$1,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28563 = cljs.core.filter.call(null,inst_28562,inst_28560__$1);
var inst_28564 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28565__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28564);
var inst_28566 = cljs.core.not_empty.call(null,inst_28565__$1);
var state_28643__$1 = (function (){var statearr_28671 = state_28643;
(statearr_28671[(26)] = inst_28563);

(statearr_28671[(23)] = inst_28560__$1);

(statearr_28671[(24)] = inst_28565__$1);

(statearr_28671[(25)] = inst_28561__$1);

return statearr_28671;
})();
if(cljs.core.truth_(inst_28566)){
var statearr_28672_28752 = state_28643__$1;
(statearr_28672_28752[(1)] = (23));

} else {
var statearr_28673_28753 = state_28643__$1;
(statearr_28673_28753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (36))){
var state_28643__$1 = state_28643;
var statearr_28674_28754 = state_28643__$1;
(statearr_28674_28754[(2)] = false);

(statearr_28674_28754[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (41))){
var inst_28618 = (state_28643[(20)]);
var inst_28622 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28623 = cljs.core.map.call(null,inst_28622,inst_28618);
var inst_28624 = cljs.core.pr_str.call(null,inst_28623);
var inst_28625 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28624)].join('');
var inst_28626 = figwheel.client.utils.log.call(null,inst_28625);
var state_28643__$1 = state_28643;
var statearr_28675_28755 = state_28643__$1;
(statearr_28675_28755[(2)] = inst_28626);

(statearr_28675_28755[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (43))){
var inst_28619 = (state_28643[(21)]);
var inst_28629 = (state_28643[(2)]);
var inst_28630 = cljs.core.not_empty.call(null,inst_28619);
var state_28643__$1 = (function (){var statearr_28676 = state_28643;
(statearr_28676[(27)] = inst_28629);

return statearr_28676;
})();
if(cljs.core.truth_(inst_28630)){
var statearr_28677_28756 = state_28643__$1;
(statearr_28677_28756[(1)] = (44));

} else {
var statearr_28678_28757 = state_28643__$1;
(statearr_28678_28757[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (29))){
var inst_28563 = (state_28643[(26)]);
var inst_28560 = (state_28643[(23)]);
var inst_28565 = (state_28643[(24)]);
var inst_28557 = (state_28643[(19)]);
var inst_28561 = (state_28643[(25)]);
var inst_28597 = (state_28643[(16)]);
var inst_28593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28596 = (function (){var all_files = inst_28557;
var res_SINGLEQUOTE_ = inst_28560;
var res = inst_28561;
var files_not_loaded = inst_28563;
var dependencies_that_loaded = inst_28565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28597,inst_28593,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28595){
var map__28679 = p__28595;
var map__28679__$1 = ((((!((map__28679 == null)))?((((map__28679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28679):map__28679);
var namespace = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28597,inst_28593,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28597__$1 = cljs.core.group_by.call(null,inst_28596,inst_28563);
var inst_28599 = (inst_28597__$1 == null);
var inst_28600 = cljs.core.not.call(null,inst_28599);
var state_28643__$1 = (function (){var statearr_28681 = state_28643;
(statearr_28681[(16)] = inst_28597__$1);

(statearr_28681[(28)] = inst_28593);

return statearr_28681;
})();
if(inst_28600){
var statearr_28682_28758 = state_28643__$1;
(statearr_28682_28758[(1)] = (32));

} else {
var statearr_28683_28759 = state_28643__$1;
(statearr_28683_28759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (44))){
var inst_28619 = (state_28643[(21)]);
var inst_28632 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28619);
var inst_28633 = cljs.core.pr_str.call(null,inst_28632);
var inst_28634 = [cljs.core.str("not required: "),cljs.core.str(inst_28633)].join('');
var inst_28635 = figwheel.client.utils.log.call(null,inst_28634);
var state_28643__$1 = state_28643;
var statearr_28684_28760 = state_28643__$1;
(statearr_28684_28760[(2)] = inst_28635);

(statearr_28684_28760[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (6))){
var inst_28538 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
var statearr_28685_28761 = state_28643__$1;
(statearr_28685_28761[(2)] = inst_28538);

(statearr_28685_28761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (28))){
var inst_28563 = (state_28643[(26)]);
var inst_28590 = (state_28643[(2)]);
var inst_28591 = cljs.core.not_empty.call(null,inst_28563);
var state_28643__$1 = (function (){var statearr_28686 = state_28643;
(statearr_28686[(29)] = inst_28590);

return statearr_28686;
})();
if(cljs.core.truth_(inst_28591)){
var statearr_28687_28762 = state_28643__$1;
(statearr_28687_28762[(1)] = (29));

} else {
var statearr_28688_28763 = state_28643__$1;
(statearr_28688_28763[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (25))){
var inst_28561 = (state_28643[(25)]);
var inst_28577 = (state_28643[(2)]);
var inst_28578 = cljs.core.not_empty.call(null,inst_28561);
var state_28643__$1 = (function (){var statearr_28689 = state_28643;
(statearr_28689[(30)] = inst_28577);

return statearr_28689;
})();
if(cljs.core.truth_(inst_28578)){
var statearr_28690_28764 = state_28643__$1;
(statearr_28690_28764[(1)] = (26));

} else {
var statearr_28691_28765 = state_28643__$1;
(statearr_28691_28765[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (34))){
var inst_28612 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
if(cljs.core.truth_(inst_28612)){
var statearr_28692_28766 = state_28643__$1;
(statearr_28692_28766[(1)] = (38));

} else {
var statearr_28693_28767 = state_28643__$1;
(statearr_28693_28767[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (17))){
var state_28643__$1 = state_28643;
var statearr_28694_28768 = state_28643__$1;
(statearr_28694_28768[(2)] = recompile_dependents);

(statearr_28694_28768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (3))){
var state_28643__$1 = state_28643;
var statearr_28695_28769 = state_28643__$1;
(statearr_28695_28769[(2)] = null);

(statearr_28695_28769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (12))){
var inst_28534 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
var statearr_28696_28770 = state_28643__$1;
(statearr_28696_28770[(2)] = inst_28534);

(statearr_28696_28770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (2))){
var inst_28496 = (state_28643[(13)]);
var inst_28503 = cljs.core.seq.call(null,inst_28496);
var inst_28504 = inst_28503;
var inst_28505 = null;
var inst_28506 = (0);
var inst_28507 = (0);
var state_28643__$1 = (function (){var statearr_28697 = state_28643;
(statearr_28697[(7)] = inst_28507);

(statearr_28697[(8)] = inst_28505);

(statearr_28697[(9)] = inst_28504);

(statearr_28697[(10)] = inst_28506);

return statearr_28697;
})();
var statearr_28698_28771 = state_28643__$1;
(statearr_28698_28771[(2)] = null);

(statearr_28698_28771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (23))){
var inst_28563 = (state_28643[(26)]);
var inst_28560 = (state_28643[(23)]);
var inst_28565 = (state_28643[(24)]);
var inst_28557 = (state_28643[(19)]);
var inst_28561 = (state_28643[(25)]);
var inst_28568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28570 = (function (){var all_files = inst_28557;
var res_SINGLEQUOTE_ = inst_28560;
var res = inst_28561;
var files_not_loaded = inst_28563;
var dependencies_that_loaded = inst_28565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28568,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28569){
var map__28699 = p__28569;
var map__28699__$1 = ((((!((map__28699 == null)))?((((map__28699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28699):map__28699);
var request_url = cljs.core.get.call(null,map__28699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28568,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28571 = cljs.core.reverse.call(null,inst_28565);
var inst_28572 = cljs.core.map.call(null,inst_28570,inst_28571);
var inst_28573 = cljs.core.pr_str.call(null,inst_28572);
var inst_28574 = figwheel.client.utils.log.call(null,inst_28573);
var state_28643__$1 = (function (){var statearr_28701 = state_28643;
(statearr_28701[(31)] = inst_28568);

return statearr_28701;
})();
var statearr_28702_28772 = state_28643__$1;
(statearr_28702_28772[(2)] = inst_28574);

(statearr_28702_28772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (35))){
var state_28643__$1 = state_28643;
var statearr_28703_28773 = state_28643__$1;
(statearr_28703_28773[(2)] = true);

(statearr_28703_28773[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (19))){
var inst_28547 = (state_28643[(12)]);
var inst_28553 = figwheel.client.file_reloading.expand_files.call(null,inst_28547);
var state_28643__$1 = state_28643;
var statearr_28704_28774 = state_28643__$1;
(statearr_28704_28774[(2)] = inst_28553);

(statearr_28704_28774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (11))){
var state_28643__$1 = state_28643;
var statearr_28705_28775 = state_28643__$1;
(statearr_28705_28775[(2)] = null);

(statearr_28705_28775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (9))){
var inst_28536 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
var statearr_28706_28776 = state_28643__$1;
(statearr_28706_28776[(2)] = inst_28536);

(statearr_28706_28776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (5))){
var inst_28507 = (state_28643[(7)]);
var inst_28506 = (state_28643[(10)]);
var inst_28509 = (inst_28507 < inst_28506);
var inst_28510 = inst_28509;
var state_28643__$1 = state_28643;
if(cljs.core.truth_(inst_28510)){
var statearr_28707_28777 = state_28643__$1;
(statearr_28707_28777[(1)] = (7));

} else {
var statearr_28708_28778 = state_28643__$1;
(statearr_28708_28778[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (14))){
var inst_28517 = (state_28643[(22)]);
var inst_28526 = cljs.core.first.call(null,inst_28517);
var inst_28527 = figwheel.client.file_reloading.eval_body.call(null,inst_28526,opts);
var inst_28528 = cljs.core.next.call(null,inst_28517);
var inst_28504 = inst_28528;
var inst_28505 = null;
var inst_28506 = (0);
var inst_28507 = (0);
var state_28643__$1 = (function (){var statearr_28709 = state_28643;
(statearr_28709[(7)] = inst_28507);

(statearr_28709[(8)] = inst_28505);

(statearr_28709[(9)] = inst_28504);

(statearr_28709[(32)] = inst_28527);

(statearr_28709[(10)] = inst_28506);

return statearr_28709;
})();
var statearr_28710_28779 = state_28643__$1;
(statearr_28710_28779[(2)] = null);

(statearr_28710_28779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (45))){
var state_28643__$1 = state_28643;
var statearr_28711_28780 = state_28643__$1;
(statearr_28711_28780[(2)] = null);

(statearr_28711_28780[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (26))){
var inst_28563 = (state_28643[(26)]);
var inst_28560 = (state_28643[(23)]);
var inst_28565 = (state_28643[(24)]);
var inst_28557 = (state_28643[(19)]);
var inst_28561 = (state_28643[(25)]);
var inst_28580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28582 = (function (){var all_files = inst_28557;
var res_SINGLEQUOTE_ = inst_28560;
var res = inst_28561;
var files_not_loaded = inst_28563;
var dependencies_that_loaded = inst_28565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28580,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28581){
var map__28712 = p__28581;
var map__28712__$1 = ((((!((map__28712 == null)))?((((map__28712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28712):map__28712);
var namespace = cljs.core.get.call(null,map__28712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28580,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28583 = cljs.core.map.call(null,inst_28582,inst_28561);
var inst_28584 = cljs.core.pr_str.call(null,inst_28583);
var inst_28585 = figwheel.client.utils.log.call(null,inst_28584);
var inst_28586 = (function (){var all_files = inst_28557;
var res_SINGLEQUOTE_ = inst_28560;
var res = inst_28561;
var files_not_loaded = inst_28563;
var dependencies_that_loaded = inst_28565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28580,inst_28582,inst_28583,inst_28584,inst_28585,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28563,inst_28560,inst_28565,inst_28557,inst_28561,inst_28580,inst_28582,inst_28583,inst_28584,inst_28585,state_val_28644,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28587 = setTimeout(inst_28586,(10));
var state_28643__$1 = (function (){var statearr_28714 = state_28643;
(statearr_28714[(33)] = inst_28585);

(statearr_28714[(34)] = inst_28580);

return statearr_28714;
})();
var statearr_28715_28781 = state_28643__$1;
(statearr_28715_28781[(2)] = inst_28587);

(statearr_28715_28781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (16))){
var state_28643__$1 = state_28643;
var statearr_28716_28782 = state_28643__$1;
(statearr_28716_28782[(2)] = reload_dependents);

(statearr_28716_28782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (38))){
var inst_28597 = (state_28643[(16)]);
var inst_28614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28597);
var state_28643__$1 = state_28643;
var statearr_28717_28783 = state_28643__$1;
(statearr_28717_28783[(2)] = inst_28614);

(statearr_28717_28783[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (30))){
var state_28643__$1 = state_28643;
var statearr_28718_28784 = state_28643__$1;
(statearr_28718_28784[(2)] = null);

(statearr_28718_28784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (10))){
var inst_28517 = (state_28643[(22)]);
var inst_28519 = cljs.core.chunked_seq_QMARK_.call(null,inst_28517);
var state_28643__$1 = state_28643;
if(inst_28519){
var statearr_28719_28785 = state_28643__$1;
(statearr_28719_28785[(1)] = (13));

} else {
var statearr_28720_28786 = state_28643__$1;
(statearr_28720_28786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (18))){
var inst_28551 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
if(cljs.core.truth_(inst_28551)){
var statearr_28721_28787 = state_28643__$1;
(statearr_28721_28787[(1)] = (19));

} else {
var statearr_28722_28788 = state_28643__$1;
(statearr_28722_28788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (42))){
var state_28643__$1 = state_28643;
var statearr_28723_28789 = state_28643__$1;
(statearr_28723_28789[(2)] = null);

(statearr_28723_28789[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (37))){
var inst_28609 = (state_28643[(2)]);
var state_28643__$1 = state_28643;
var statearr_28724_28790 = state_28643__$1;
(statearr_28724_28790[(2)] = inst_28609);

(statearr_28724_28790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28644 === (8))){
var inst_28504 = (state_28643[(9)]);
var inst_28517 = (state_28643[(22)]);
var inst_28517__$1 = cljs.core.seq.call(null,inst_28504);
var state_28643__$1 = (function (){var statearr_28725 = state_28643;
(statearr_28725[(22)] = inst_28517__$1);

return statearr_28725;
})();
if(inst_28517__$1){
var statearr_28726_28791 = state_28643__$1;
(statearr_28726_28791[(1)] = (10));

} else {
var statearr_28727_28792 = state_28643__$1;
(statearr_28727_28792[(1)] = (11));

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
}
});})(c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24842__auto__,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto____0 = (function (){
var statearr_28731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28731[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto__);

(statearr_28731[(1)] = (1));

return statearr_28731;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto____1 = (function (state_28643){
while(true){
var ret_value__24844__auto__ = (function (){try{while(true){
var result__24845__auto__ = switch__24842__auto__.call(null,state_28643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24845__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object)){
var ex__24846__auto__ = e28732;
var statearr_28733_28793 = state_28643;
(statearr_28733_28793[(5)] = ex__24846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28794 = state_28643;
state_28643 = G__28794;
continue;
} else {
return ret_value__24844__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto__ = function(state_28643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto____1.call(this,state_28643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24843__auto__;
})()
;})(switch__24842__auto__,c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24956__auto__ = (function (){var statearr_28734 = f__24955__auto__.call(null);
(statearr_28734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24954__auto__);

return statearr_28734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24956__auto__);
});})(c__24954__auto__,map__28489,map__28489__$1,opts,before_jsload,on_jsload,reload_dependents,map__28490,map__28490__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24954__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28797,link){
var map__28800 = p__28797;
var map__28800__$1 = ((((!((map__28800 == null)))?((((map__28800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28800):map__28800);
var file = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28800,map__28800__$1,file){
return (function (p1__28795_SHARP_,p2__28796_SHARP_){
if(cljs.core._EQ_.call(null,p1__28795_SHARP_,p2__28796_SHARP_)){
return p1__28795_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28800,map__28800__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28806){
var map__28807 = p__28806;
var map__28807__$1 = ((((!((map__28807 == null)))?((((map__28807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28807):map__28807);
var match_length = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28802_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28802_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28809 = [];
var len__21232__auto___28812 = arguments.length;
var i__21233__auto___28813 = (0);
while(true){
if((i__21233__auto___28813 < len__21232__auto___28812)){
args28809.push((arguments[i__21233__auto___28813]));

var G__28814 = (i__21233__auto___28813 + (1));
i__21233__auto___28813 = G__28814;
continue;
} else {
}
break;
}

var G__28811 = args28809.length;
switch (G__28811) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28809.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28816_SHARP_,p2__28817_SHARP_){
return cljs.core.assoc.call(null,p1__28816_SHARP_,cljs.core.get.call(null,p2__28817_SHARP_,key),p2__28817_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28818){
var map__28821 = p__28818;
var map__28821__$1 = ((((!((map__28821 == null)))?((((map__28821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28821):map__28821);
var f_data = map__28821__$1;
var file = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28823,files_msg){
var map__28830 = p__28823;
var map__28830__$1 = ((((!((map__28830 == null)))?((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var opts = map__28830__$1;
var on_cssload = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28832_28836 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28833_28837 = null;
var count__28834_28838 = (0);
var i__28835_28839 = (0);
while(true){
if((i__28835_28839 < count__28834_28838)){
var f_28840 = cljs.core._nth.call(null,chunk__28833_28837,i__28835_28839);
figwheel.client.file_reloading.reload_css_file.call(null,f_28840);

var G__28841 = seq__28832_28836;
var G__28842 = chunk__28833_28837;
var G__28843 = count__28834_28838;
var G__28844 = (i__28835_28839 + (1));
seq__28832_28836 = G__28841;
chunk__28833_28837 = G__28842;
count__28834_28838 = G__28843;
i__28835_28839 = G__28844;
continue;
} else {
var temp__4657__auto___28845 = cljs.core.seq.call(null,seq__28832_28836);
if(temp__4657__auto___28845){
var seq__28832_28846__$1 = temp__4657__auto___28845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28832_28846__$1)){
var c__20968__auto___28847 = cljs.core.chunk_first.call(null,seq__28832_28846__$1);
var G__28848 = cljs.core.chunk_rest.call(null,seq__28832_28846__$1);
var G__28849 = c__20968__auto___28847;
var G__28850 = cljs.core.count.call(null,c__20968__auto___28847);
var G__28851 = (0);
seq__28832_28836 = G__28848;
chunk__28833_28837 = G__28849;
count__28834_28838 = G__28850;
i__28835_28839 = G__28851;
continue;
} else {
var f_28852 = cljs.core.first.call(null,seq__28832_28846__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28852);

var G__28853 = cljs.core.next.call(null,seq__28832_28846__$1);
var G__28854 = null;
var G__28855 = (0);
var G__28856 = (0);
seq__28832_28836 = G__28853;
chunk__28833_28837 = G__28854;
count__28834_28838 = G__28855;
i__28835_28839 = G__28856;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28830,map__28830__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28830,map__28830__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1473888615155