(this.webpackJsonpreditor=this.webpackJsonpreditor||[]).push([[4],{44:function(e,t,a){e.exports={topbar:"style_topbar__2ls54",topbarMask:"style_topbarMask__2e_vC",topbarBackIcon:"style_topbarBackIcon__gzBlo",topbarEditIcon:"style_topbarEditIcon__3Wo3s",draftTip:"style_draftTip__3eO0F",articleContainer:"style_articleContainer__2CpH7",title:"style_title__2sp66",time:"style_time__1b4w2",splitLine:"style_splitLine__2v8tP",article:"style_article__2DT5X"}},53:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(0),c=a.n(n),o=a(15),i=a(9),l=a(44),s=a.n(l),p=a(11);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.default=Object(o.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}))((function(e){var t=Object(i.f)(),a=Object(i.g)().id,r=e.notes||{},n=r.list[r.searchMap[a]];return c.a.createElement("div",null,c.a.createElement("header",{className:s.a.topbar,style:{backgroundImage:"url(".concat(n.cover,")")}},c.a.createElement("div",{className:s.a.topbarMask}),c.a.createElement("i",{onClick:function(){return t.goBack()},className:"iconfont icon-jiantou-px ".concat(s.a.topbarBackIcon)}),c.a.createElement("span",{onClick:function(){return t.push("/edit/".concat(n._id))},className:s.a.topbarEditIcon},"EDIT")),n.last_edited_content?c.a.createElement("div",{className:s.a.draftTip},"\u8be5\u7b14\u8bb0\u6709\u6682\u672a\u53d1\u5e03\u7684\u8349\u7a3f\uff0c\u70b9\u51fb\u7f16\u8f91\u7ee7\u7eed\u521b\u4f5c~"):null,c.a.createElement("div",{className:s.a.articleContainer},c.a.createElement("h1",{className:s.a.title},n.title),c.a.createElement("p",{className:s.a.time},Object(p.c)(new Date(n.created_at))),c.a.createElement("div",{className:s.a.splitLine}),c.a.createElement("article",{className:s.a.article,dangerouslySetInnerHTML:{__html:n.content}})))}))}}]);
//# sourceMappingURL=4.9ef2fb74.chunk.js.map