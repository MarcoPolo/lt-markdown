if(!lt.util.load.provided_QMARK_('lt.plugins.lt-markdown')) {
goog.provide('lt.plugins.lt_markdown');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.tabs');
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

lt.plugins.lt_markdown.hello_panel = (function hello_panel(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"markdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from lt-markdown"], null)], null));var seq__8974_8980 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8975_8981 = null;var count__8976_8982 = 0;var i__8977_8983 = 0;while(true){
if((i__8977_8983 < count__8976_8982))
{var vec__8978_8984 = cljs.core._nth.call(null,chunk__8975_8981,i__8977_8983);var ev__8082__auto___8985 = cljs.core.nth.call(null,vec__8978_8984,0,null);var func__8083__auto___8986 = cljs.core.nth.call(null,vec__8978_8984,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8985,func__8083__auto___8986);
{
var G__8987 = seq__8974_8980;
var G__8988 = chunk__8975_8981;
var G__8989 = count__8976_8982;
var G__8990 = (i__8977_8983 + 1);
seq__8974_8980 = G__8987;
chunk__8975_8981 = G__8988;
count__8976_8982 = G__8989;
i__8977_8983 = G__8990;
continue;
}
} else
{var temp__4092__auto___8991 = cljs.core.seq.call(null,seq__8974_8980);if(temp__4092__auto___8991)
{var seq__8974_8992__$1 = temp__4092__auto___8991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8974_8992__$1))
{var c__7470__auto___8993 = cljs.core.chunk_first.call(null,seq__8974_8992__$1);{
var G__8994 = cljs.core.chunk_rest.call(null,seq__8974_8992__$1);
var G__8995 = c__7470__auto___8993;
var G__8996 = cljs.core.count.call(null,c__7470__auto___8993);
var G__8997 = 0;
seq__8974_8980 = G__8994;
chunk__8975_8981 = G__8995;
count__8976_8982 = G__8996;
i__8977_8983 = G__8997;
continue;
}
} else
{var vec__8979_8998 = cljs.core.first.call(null,seq__8974_8992__$1);var ev__8082__auto___8999 = cljs.core.nth.call(null,vec__8979_8998,0,null);var func__8083__auto___9000 = cljs.core.nth.call(null,vec__8979_8998,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8999,func__8083__auto___9000);
{
var G__9001 = cljs.core.next.call(null,seq__8974_8992__$1);
var G__9002 = null;
var G__9003 = 0;
var G__9004 = 0;
seq__8974_8980 = G__9001;
chunk__8975_8981 = G__9002;
count__8976_8982 = G__9003;
i__8977_8983 = G__9004;
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

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.hello","lt.plugins.lt-markdown/lt-markdown.hello",4322758338),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-markdown.hello","lt-markdown.hello",2296849770)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-markdown",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561),new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",664173842)], null),(function (){return (new Showdown.converter({"extensions": ["github"]}));
}));
return lt.plugins.lt_markdown.hello_panel.call(null,this$);
}));

lt.plugins.lt_markdown.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9005 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9005))
{var ts_9006 = temp__4092__auto___9005;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9006))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9006);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","on-close-destroy","lt.plugins.lt-markdown/on-close-destroy",3379618561),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_markdown.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.plugins.lt_markdown.__BEH__read_editor = (function __BEH__read_editor(this$,data){return console.log.call(null,"editor Changed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_markdown.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106)], null));

lt.plugins.lt_markdown.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-markdown","lt-markdown.hello","lt.plugins.lt-markdown/lt-markdown.hello",4322758338));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-markdown","say-hello","lt.plugins.lt-markdown/say-hello",4484573754),new cljs.core.Keyword(null,"desc","desc",1016984067),"lt-markdown: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.lt_markdown.hello);
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-markdown","watch-editor","lt.plugins.lt-markdown/watch-editor",3190337205),new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.console.log.call(null,"saving editor");
return lt.object.update_BANG_.call(null,lt.plugins.lt_markdown.hello,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",4001043679)], null),(function (){return lt.objs.editor.pool.last_active.call(null);
}));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-markdown","read-editor","lt.plugins.lt-markdown/read-editor",3739859790),new cljs.core.Keyword(null,"desc","desc",1016984067),"Markdown: Read the content inside an editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return console.log.call(null,"editor Changed");
})], null));


}

//# sourceMappingURL=