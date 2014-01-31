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
lt.plugins.lt_markdown.setMarkDownHTML_BANG_ = (function setMarkDownHTML_BANG_(ed,obj){lt.plugins.lt_markdown.k = lt.objs.editor.__GT_cm_ed.call(null,ed).getValue();
return lt.object.__GT_content.call(null,obj).innerHTML = marked(lt.objs.editor.__GT_cm_ed.call(null,ed).getValue());
});
lt.plugins.lt_markdown.get_filename = (function get_filename(ed){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.lt_markdown.markdown_skeleton = (function markdown_skeleton(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-markdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with markdown content eventually"], null)], null));var seq__8406_8412 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8407_8413 = null;var count__8408_8414 = 0;var i__8409_8415 = 0;while(true){
if((i__8409_8415 < count__8408_8414))
{var vec__8410_8416 = cljs.core._nth.call(null,chunk__8407_8413,i__8409_8415);var ev__8100__auto___8417 = cljs.core.nth.call(null,vec__8410_8416,0,null);var func__8101__auto___8418 = cljs.core.nth.call(null,vec__8410_8416,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8417,func__8101__auto___8418);
{
var G__8419 = seq__8406_8412;
var G__8420 = chunk__8407_8413;
var G__8421 = count__8408_8414;
var G__8422 = (i__8409_8415 + 1);
seq__8406_8412 = G__8419;
chunk__8407_8413 = G__8420;
count__8408_8414 = G__8421;
i__8409_8415 = G__8422;
continue;
}
} else
{var temp__4092__auto___8423 = cljs.core.seq.call(null,seq__8406_8412);if(temp__4092__auto___8423)
{var seq__8406_8424__$1 = temp__4092__auto___8423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8406_8424__$1))
{var c__7485__auto___8425 = cljs.core.chunk_first.call(null,seq__8406_8424__$1);{
var G__8426 = cljs.core.chunk_rest.call(null,seq__8406_8424__$1);
var G__8427 = c__7485__auto___8425;
var G__8428 = cljs.core.count.call(null,c__7485__auto___8425);
var G__8429 = 0;
seq__8406_8412 = G__8426;
chunk__8407_8413 = G__8427;
count__8408_8414 = G__8428;
i__8409_8415 = G__8429;
continue;
}
} else
{var vec__8411_8430 = cljs.core.first.call(null,seq__8406_8424__$1);var ev__8100__auto___8431 = cljs.core.nth.call(null,vec__8411_8430,0,null);var func__8101__auto___8432 = cljs.core.nth.call(null,vec__8411_8430,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8431,func__8101__auto___8432);
{
var G__8433 = cljs.core.next.call(null,seq__8406_8424__$1);
var G__8434 = null;
var G__8435 = 0;
var G__8436 = 0;
seq__8406_8412 = G__8433;
chunk__8407_8413 = G__8434;
count__8408_8414 = G__8435;
i__8409_8415 = G__8436;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.markdown","lt.plugins.lt-markdown/lt-markdown.markdown",3639064275),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-markdown.markdown","lt-markdown.markdown",1369865595)], null),new cljs.core.Keyword(null,"name","name",1017277949),"markdown",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){cljs.core.println.call(null,"Filename is ",filename);
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.lt_markdown.markdown_skeleton.call(null,this$);
}));
lt.plugins.lt_markdown.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8437 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8437))
{var ts_8438 = temp__4092__auto___8437;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8438))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8438);
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