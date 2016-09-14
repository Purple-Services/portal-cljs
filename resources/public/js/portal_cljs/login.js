// Compiled by ClojureScript 1.9.229 {}
goog.provide('portal_cljs.login');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('portal_cljs.components');
goog.require('portal_cljs.cookies');
goog.require('portal_cljs.utils');
goog.require('portal_cljs.xhr');
goog.require('reagent.core');
/**
 * Process the response used when logging in
 */
portal_cljs.login.process_login = (function portal_cljs$login$process_login(error_message,retrieving_QMARK_,response){
var success = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(success)){
(window["location"] = portal_cljs.utils.base_url);
} else {
}

if(cljs.core.truth_(success)){
return null;
} else {
cljs.core.reset_BANG_.call(null,retrieving_QMARK_,false);

return cljs.core.reset_BANG_.call(null,error_message,[cljs.core.str("Error: "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response))].join(''));
}
});
/**
 * A form for logging into the dashboard
 */
portal_cljs.login.login_form = (function portal_cljs$login$login_form(){
var email = reagent.core.atom.call(null,"");
var password = reagent.core.atom.call(null,"");
var error_message = reagent.core.atom.call(null,"");
var retrieving_QMARK_ = reagent.core.atom.call(null,false);
return ((function (email,password,error_message,retrieving_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-fluid"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-form"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.TextInput,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,email),new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,email),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email,password,error_message,retrieving_QMARK_){
return (function (p1__28884_SHARP_){
return cljs.core.reset_BANG_.call(null,email,portal_cljs.utils.get_input_value.call(null,p1__28884_SHARP_));
});})(email,password,error_message,retrieving_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.PasswordInput,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,password),new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email,password,error_message,retrieving_QMARK_){
return (function (p1__28885_SHARP_){
return cljs.core.reset_BANG_.call(null,password,portal_cljs.utils.get_input_value.call(null,p1__28885_SHARP_));
});})(email,password,error_message,retrieving_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.FormSubmit,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retrieving?","retrieving?",-273642200),retrieving_QMARK_,new cljs.core.Keyword(null,"text","text",-1790561697),"Login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (email,password,error_message,retrieving_QMARK_){
return (function (event){
event.preventDefault();

cljs.core.reset_BANG_.call(null,retrieving_QMARK_,true);

cljs.core.reset_BANG_.call(null,error_message,"");

return portal_cljs.xhr.retrieve_url.call(null,[cljs.core.str(portal_cljs.utils.base_url),cljs.core.str("login")].join(''),"POST",portal_cljs.utils.clj__GT_js_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref.call(null,email),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref.call(null,password)], null)),portal_cljs.xhr.process_json_response.call(null,cljs.core.partial.call(null,portal_cljs.login.process_login,error_message,retrieving_QMARK_)));
});})(email,password,error_message,retrieving_QMARK_))
], null)], null),((!(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,error_message))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.components.ErrorComp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),cljs.core.deref.call(null,error_message)], null)], null):null)], null)], null)], null)], null)], null)], null)], null);
});
;})(email,password,error_message,retrieving_QMARK_))
});
/**
 * Login form
 */
portal_cljs.login.login = (function portal_cljs$login$login(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal_cljs.login.login_form], null),document.getElementById("login"));
});

//# sourceMappingURL=login.js.map?rel=1473888615261