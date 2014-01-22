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
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

lt.plugins.lt_markdown.setMarkDownHTML_BANG_ = (function setMarkDownHTML_BANG_(ed,obj){return lt.object.__GT_content.call(null,obj).innerHTML = new cljs.core.Keyword(null,"converter","converter",664173842).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)).makeHtml(lt.objs.editor.__GT_cm_ed.call(null,ed).getValue());
});

lt.plugins.lt_markdown.markdown_skeleton = (function markdown_skeleton(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-markdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with markdown content eventually"], null)], null));var seq__8571_8577 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8572_8578 = null;var count__8573_8579 = 0;var i__8574_8580 = 0;while(true){
if((i__8574_8580 < count__8573_8579))
{var vec__8575_8581 = cljs.core._nth.call(null,chunk__8572_8578,i__8574_8580);var ev__8082__auto___8582 = cljs.core.nth.call(null,vec__8575_8581,0,null);var func__8083__auto___8583 = cljs.core.nth.call(null,vec__8575_8581,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8582,func__8083__auto___8583);
{
var G__8584 = seq__8571_8577;
var G__8585 = chunk__8572_8578;
var G__8586 = count__8573_8579;
var G__8587 = (i__8574_8580 + 1);
seq__8571_8577 = G__8584;
chunk__8572_8578 = G__8585;
count__8573_8579 = G__8586;
i__8574_8580 = G__8587;
continue;
}
} else
{var temp__4092__auto___8588 = cljs.core.seq.call(null,seq__8571_8577);if(temp__4092__auto___8588)
{var seq__8571_8589__$1 = temp__4092__auto___8588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8571_8589__$1))
{var c__7470__auto___8590 = cljs.core.chunk_first.call(null,seq__8571_8589__$1);{
var G__8591 = cljs.core.chunk_rest.call(null,seq__8571_8589__$1);
var G__8592 = c__7470__auto___8590;
var G__8593 = cljs.core.count.call(null,c__7470__auto___8590);
var G__8594 = 0;
seq__8571_8577 = G__8591;
chunk__8572_8578 = G__8592;
count__8573_8579 = G__8593;
i__8574_8580 = G__8594;
continue;
}
} else
{var vec__8576_8595 = cljs.core.first.call(null,seq__8571_8589__$1);var ev__8082__auto___8596 = cljs.core.nth.call(null,vec__8576_8595,0,null);var func__8083__auto___8597 = cljs.core.nth.call(null,vec__8576_8595,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8596,func__8083__auto___8597);
{
var G__8598 = cljs.core.next.call(null,seq__8571_8589__$1);
var G__8599 = null;
var G__8600 = 0;
var G__8601 = 0;
seq__8571_8577 = G__8598;
chunk__8572_8578 = G__8599;
count__8573_8579 = G__8600;
i__8574_8580 = G__8601;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.markdown","lt.plugins.lt-markdown/lt-markdown.markdown",3639064275),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-markdown.markdown","lt-markdown.markdown",1369865595)], null),new cljs.core.Keyword(null,"name","name",1017277949),"markdown",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",664173842)], null),(function (){return (new Showdown.converter({"extensions": ["github"]}));
}));
return lt.plugins.lt_markdown.markdown_skeleton.call(null,this$);
}));

lt.plugins.lt_markdown.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8602 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8602))
{var ts_8603 = temp__4092__auto___8602;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8603))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8603);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_markdown.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.plugins.lt_markdown.__BEH__read_editor = (function __BEH__read_editor(this$){lt.objs.console.log.call(null,"Reading editor");
var markdown_obj = new cljs.core.Keyword(null,"markdown","markdown",1260843105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.lt_markdown.setMarkDownHTML_BANG_.call(null,this$,markdown_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_markdown.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790)], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-markdown","watch-editor","lt.plugins.lt-markdown/watch-editor",3190337205),new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.console.log.call(null,"saving editor");
var markdown_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.markdown","lt.plugins.lt-markdown/lt-markdown.markdown",3639064275));var ed = lt.objs.editor.pool.last_active.call(null);lt.objs.tabs.add_or_focus_BANG_.call(null,markdown_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1260843105)], null),(function (){return markdown_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790));
})], null));

}

//# sourceMappingURL=