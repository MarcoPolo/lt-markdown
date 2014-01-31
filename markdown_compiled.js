if(!lt.util.load.provided_QMARK_('lt.plugins.lt-markdown')) {
goog.provide('lt.plugins.lt_markdown');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_markdown.setMarkDownHTML_BANG_ = (function setMarkDownHTML_BANG_(ed,obj){return lt.object.__GT_content.call(null,obj).innerHTML = marked(lt.objs.editor.__GT_cm_ed.call(null,ed).getValue());
});
lt.plugins.lt_markdown.get_filename = (function get_filename(ed){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.lt_markdown.markdown_skeleton = (function markdown_skeleton(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-markdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with markdown content eventually"], null)], null));var seq__8189_8205 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8190_8206 = null;var count__8191_8207 = 0;var i__8192_8208 = 0;while(true){
if((i__8192_8208 < count__8191_8207))
{var vec__8193_8209 = cljs.core._nth.call(null,chunk__8190_8206,i__8192_8208);var ev__8100__auto___8210 = cljs.core.nth.call(null,vec__8193_8209,0,null);var func__8101__auto___8211 = cljs.core.nth.call(null,vec__8193_8209,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8210,func__8101__auto___8211);
{
var G__8212 = seq__8189_8205;
var G__8213 = chunk__8190_8206;
var G__8214 = count__8191_8207;
var G__8215 = (i__8192_8208 + 1);
seq__8189_8205 = G__8212;
chunk__8190_8206 = G__8213;
count__8191_8207 = G__8214;
i__8192_8208 = G__8215;
continue;
}
} else
{var temp__4092__auto___8216 = cljs.core.seq.call(null,seq__8189_8205);if(temp__4092__auto___8216)
{var seq__8189_8217__$1 = temp__4092__auto___8216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8189_8217__$1))
{var c__7485__auto___8218 = cljs.core.chunk_first.call(null,seq__8189_8217__$1);{
var G__8219 = cljs.core.chunk_rest.call(null,seq__8189_8217__$1);
var G__8220 = c__7485__auto___8218;
var G__8221 = cljs.core.count.call(null,c__7485__auto___8218);
var G__8222 = 0;
seq__8189_8205 = G__8219;
chunk__8190_8206 = G__8220;
count__8191_8207 = G__8221;
i__8192_8208 = G__8222;
continue;
}
} else
{var vec__8194_8223 = cljs.core.first.call(null,seq__8189_8217__$1);var ev__8100__auto___8224 = cljs.core.nth.call(null,vec__8194_8223,0,null);var func__8101__auto___8225 = cljs.core.nth.call(null,vec__8194_8223,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8224,func__8101__auto___8225);
{
var G__8226 = cljs.core.next.call(null,seq__8189_8217__$1);
var G__8227 = null;
var G__8228 = 0;
var G__8229 = 0;
seq__8189_8205 = G__8226;
chunk__8190_8206 = G__8227;
count__8191_8207 = G__8228;
i__8192_8208 = G__8229;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.markdown","lt.plugins.lt-markdown/lt-markdown.markdown",3639064275),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-markdown.markdown","lt-markdown.markdown",1369865595)], null),new cljs.core.Keyword(null,"name","name",1017277949),"markdown",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.lt_markdown.markdown_skeleton.call(null,this$);
}));
lt.plugins.lt_markdown.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8230 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8230))
{var ts_8231 = temp__4092__auto___8230;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8231))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8231);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_markdown.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_markdown.__BEH__read_editor = (function __BEH__read_editor(this$){var markdown_obj = new cljs.core.Keyword(null,"markdown","markdown",1260843105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.lt_markdown.setMarkDownHTML_BANG_.call(null,this$,markdown_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_markdown.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-markdown","watch-editor","lt.plugins.lt-markdown/watch-editor",3190337205),new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var filename = lt.plugins.lt_markdown.get_filename.call(null,ed);var markdown_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.markdown","lt.plugins.lt-markdown/lt-markdown.markdown",3639064275),filename);lt.objs.tabs.add_or_focus_BANG_.call(null,markdown_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1260843105)], null),(function (){return markdown_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790));
})], null));
}

//# sourceMappingURL=markdown_compiled.js.map