/* SCEditor v2.1.0 | (C) 2017, Sam Clarke | sceditor.com/license */

!function(e){"use strict";e.plugins.autosave=function(){function e(){for(var e=0;e<localStorage.length;e++){var t=localStorage.key(e);/^sce\-autodraft\-/.test(t)&&JSON.parse(localStorage.getItem(a)).time<Date.now()-r&&localStorage.removeItem(t)}}var t,o=this,a="sce-autodraft-"+location.pathname+location.search,r=864e5,s=function(e){localStorage.setItem(a,JSON.stringify(e))},c=function(){return JSON.parse(localStorage.getItem(a))};o.init=function(){var o=(t=this).opts&&t.opts.autosave||{};s=o.save||s,c=o.load||c,a=o.storageKey||a,r=o.expires||r,e()},o.signalReady=function(){var e=c();e&&(t.sourceMode(e.sourceMode),t.val(e.value,!1),t.focus(),e.sourceMode?t.sourceEditorCaret(e.caret):t.getRangeHelper().restoreRange()),s({caret:this.sourceEditorCaret(),sourceMode:this.sourceMode(),value:t.val(null,!1),time:Date.now()})},o.signalValuechangedEvent=function(e){s({caret:this.sourceEditorCaret(),sourceMode:this.sourceMode(),value:e.detail.rawValue,time:Date.now()})}}}(sceditor);