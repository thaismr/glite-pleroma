(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{647:function(e,t,i){"use strict";var s=i(21),a=i(7),n=i(644),o=i(19),c=i(50),r=i(363),u=i(366),g=Object(a.f)({missingDescriptionMessage:{id:"confirmations.missing_media_description.message",defaultMessage:"At least one media attachment is lacking a description. Consider describing all media attachments for the visually impaired before sending your toot."},missingDescriptionConfirm:{id:"confirmations.missing_media_description.confirm",defaultMessage:"Send anyway"}});t.a=Object(s.connect)(function(e){var t=e.getIn(["local_settings","always_show_spoilers_field"]),i=e.getIn(["compose","in_reply_to"]),s=i?e.getIn(["statuses",i,"visibility"]):null,a=e.getIn(["local_settings","side_arm"]),n=s?Object(u.a)(s,a):null,o=null;switch(e.getIn(["local_settings","side_arm_reply_mode"])){case"copy":o=s;break;case"restrict":o=n}return o=o||a,{advancedOptions:e.getIn(["compose","advanced_options"]),focusDate:e.getIn(["compose","focusDate"]),caretPosition:e.getIn(["compose","caretPosition"]),isSubmitting:e.getIn(["compose","is_submitting"]),isChangingUpload:e.getIn(["compose","is_changing_upload"]),isUploading:e.getIn(["compose","is_uploading"]),layout:e.getIn(["local_settings","layout"]),media:e.getIn(["compose","media_attachments"]),preselectDate:e.getIn(["compose","preselectDate"]),privacy:e.getIn(["compose","privacy"]),contentType:e.getIn(["compose","content_type"]),sideArm:o,sensitive:e.getIn(["compose","sensitive"]),showSearch:e.getIn(["search","submitted"])&&!e.getIn(["search","hidden"]),spoiler:t||e.getIn(["compose","spoiler"]),spoilerText:e.getIn(["compose","spoiler_text"]),suggestions:e.getIn(["compose","suggestions"]),text:e.getIn(["compose","text"]),anyMedia:0<e.getIn(["compose","media_attachments"]).size,spoilersAlwaysOn:t,mediaDescriptionConfirmation:e.getIn(["local_settings","confirm_missing_media_description"]),preselectOnReply:e.getIn(["local_settings","preselect_on_reply"])}},function(a,e){var t=e.intl;return{onChange:function(e){a(Object(o.Q)(e))},onSubmit:function(e){a(Object(o.nb)(e))},onClearSuggestions:function(){a(Object(o.ab)())},onFetchSuggestions:function(e){a(Object(o.db)(e))},onSuggestionSelected:function(e,t,i,s){a(Object(o.mb)(e,t,i,s))},onChangeSpoilerText:function(e){a(Object(o.U)(e))},onChangeContentType:function(e){a(Object(o.S)(e))},onPaste:function(e){a(Object(o.qb)(e))},onPickEmoji:function(e,t){a(Object(o.fb)(e,t))},onChangeSpoilerness:function(){a(Object(o.V)())},onChangeVisibility:function(e){a(Object(o.W)(e))},onMount:function(){a(Object(o.hb)())},onUnmount:function(){a(Object(o.pb)())},onMediaDescriptionConfirm:function(e){a(Object(c.d)("CONFIRM",{message:t.formatMessage(g.missingDescriptionMessage),confirm:t.formatMessage(g.missingDescriptionConfirm),onConfirm:function(){return a(Object(o.nb)(e))},onDoNotAsk:function(){return a(Object(r.b)(["confirm_missing_media_description"],!1))}}))}}})(n.a)},692:function(e,t,i){"use strict";i.r(t);var s,a,n,o,c,r,u,g=i(0),l=i(6),d=i(3),b=i.n(d),m=i(647),f=i(21),p=i(964),O=i(29),h=Object(f.connect)(function(e){return{account:e.getIn(["accounts",O.k])}})(p.a),j=i(7),_=i(12),v=i.n(_),y=i(231),I=i(965),M=Object(f.connect)(function(e){return{value:e.getIn(["search","value"]),submitted:e.getIn(["search","submitted"])}},function(t){return{onChange:function(e){t(Object(y.e)(e))},onClear:function(){t(Object(y.f)())},onSubmit:function(){t(Object(y.h)())},onShow:function(){t(Object(y.g)())}}})(I.a),S=i(192),w=i(45),C=i.n(w),N=i(1),k=i(5),D=i.n(k),T=i(26),x=i.n(T),P=i(630),A=i(911),q=i(25),z=i(966),R=i(317),U=i(967),E=function(e){var t=e.hashtag;return Object(g.a)("div",{className:"trends__item"},void 0,Object(g.a)("div",{className:"trends__item__name"},void 0,Object(g.a)(R.a,{href:t.get("url"),to:"/timelines/tag/"+t.get("name")},void 0,"#",Object(g.a)("span",{},void 0,t.get("name"))),Object(g.a)(j.b,{id:"trends.count_by_accounts",defaultMessage:"{count} {rawCount, plural, one {person} other {people}} talking",values:{rawCount:t.getIn(["history",0,"accounts"]),count:Object(g.a)("strong",{},void 0,Object(U.a)(t.getIn(["history",0,"accounts"])))}})),Object(g.a)("div",{className:"trends__item__current"},void 0,Object(U.a)(t.getIn(["history",0,"uses"]))),Object(g.a)("div",{className:"trends__item__sparkline"},void 0,Object(g.a)(z.Sparklines,{width:50,height:28,data:t.get("history")&&t.get("history").reverse().map(function(e){return e.get("uses")}).toArray()},void 0,Object(g.a)(z.SparklinesCurve,{style:{fill:"none"}}))))},W=i(193),B=Object(j.f)({dismissSuggestion:{id:"suggestions.dismiss",defaultMessage:"Dismiss suggestion"}}),F=Object(j.g)((n=a=function(e){function t(){return e.apply(this,arguments)||this}Object(l.a)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.fetchSuggestions()},i.render=function(){var e,t,i,s=this.props,a=s.intl,n=s.results,o=s.suggestions,c=s.dismissSuggestion;if(n.isEmpty()&&!o.isEmpty())return Object(g.a)("div",{className:"drawer--results"},void 0,Object(g.a)("div",{className:"trends"},void 0,Object(g.a)("div",{className:"trends__header"},void 0,Object(g.a)("i",{className:"fa fa-user-plus fa-fw"}),Object(g.a)(j.b,{id:"suggestions.header",defaultMessage:"You might be interested in…"})),o&&o.map(function(e){return Object(g.a)(P.a,{id:e,actionIcon:"times",actionTitle:a.formatMessage(B.dismissSuggestion),onActionClick:c},e)})));var r=0;return n.get("accounts")&&0<n.get("accounts").size&&(r+=n.get("accounts").size,e=Object(g.a)("section",{},void 0,Object(g.a)("h5",{},void 0,Object(g.a)(W.a,{icon:"users",fixedWidth:!0}),Object(g.a)(j.b,{id:"search_results.accounts",defaultMessage:"People"})),n.get("accounts").map(function(e){return Object(g.a)(P.a,{id:e},e)}))),n.get("statuses")&&0<n.get("statuses").size&&(r+=n.get("statuses").size,t=Object(g.a)("section",{},void 0,Object(g.a)("h5",{},void 0,Object(g.a)(W.a,{icon:"quote-right",fixedWidth:!0}),Object(g.a)(j.b,{id:"search_results.statuses",defaultMessage:"Toots"})),n.get("statuses").map(function(e){return Object(g.a)(A.a,{id:e},e)}))),n.get("hashtags")&&0<n.get("hashtags").size&&(r+=n.get("hashtags").size,i=Object(g.a)("section",{},void 0,Object(g.a)("h5",{},void 0,Object(g.a)(W.a,{icon:"hashtag",fixedWidth:!0}),Object(g.a)(j.b,{id:"search_results.hashtags",defaultMessage:"Hashtags"})),n.get("hashtags").map(function(e){return Object(g.a)(E,{hashtag:e},e.get("name"))}))),Object(g.a)("div",{className:"drawer--results"},void 0,Object(g.a)("header",{className:"search-results__header"},void 0,Object(g.a)(W.a,{icon:"search",fixedWidth:!0}),Object(g.a)(j.b,{id:"search_results.total",defaultMessage:"{count, number} {count, plural, one {result} other {results}}",values:{count:r}})),e,t,i)},t}(q.a),Object(N.a)(a,"propTypes",{results:x.a.map.isRequired,suggestions:x.a.list.isRequired,fetchSuggestions:D.a.func.isRequired,dismissSuggestion:D.a.func.isRequired,intl:D.a.object.isRequired}),s=n))||s,H=i(232),L=Object(f.connect)(function(e){return{results:e.getIn(["search","results"]),suggestions:e.getIn(["suggestions","items"])}},function(t){return{fetchSuggestions:function(){return t(Object(H.f)())},dismissSuggestion:function(e){return t(Object(H.e)(e.get("id")))}}})(F),G=i(50),J=i(358),V=i(354),Y=i(364),Q=Object(j.f)({community:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},home_timeline:{id:"tabs_bar.home",defaultMessage:"Home"},logout:{id:"navigation_bar.logout",defaultMessage:"Logout"},notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},settings:{id:"navigation_bar.app_settings",defaultMessage:"App settings"},start:{id:"getting_started.heading",defaultMessage:"Getting started"}}),X=Object(j.g)((r=c=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,i=e.columns,s=e.unreadNotifications,a=e.showNotificationsBadge,n=e.onSettingsClick,o=V.b.bind(null,function(t){return!i||!i.some(function(e){return e.get("id")===t})});return Object(g.a)("nav",{className:"drawer--header"},void 0,Object(g.a)(J.a,{"aria-label":t.formatMessage(Q.start),title:t.formatMessage(Q.start),to:"/getting-started"},void 0,Object(g.a)(W.a,{icon:"asterisk"})),o("HOME",Object(g.a)(J.a,{"aria-label":t.formatMessage(Q.home_timeline),title:t.formatMessage(Q.home_timeline),to:"/timelines/home"},void 0,Object(g.a)(W.a,{icon:"home"}))),o("NOTIFICATIONS",Object(g.a)(J.a,{"aria-label":t.formatMessage(Q.notifications),title:t.formatMessage(Q.notifications),to:"/notifications"},void 0,Object(g.a)("span",{className:"icon-badge-wrapper"},void 0,Object(g.a)(W.a,{icon:"bell"}),a&&0<s&&Object(g.a)("div",{className:"icon-badge"})))),o("COMMUNITY",Object(g.a)(J.a,{"aria-label":t.formatMessage(Q.community),title:t.formatMessage(Q.community),to:"/timelines/public/local"},void 0,Object(g.a)(W.a,{icon:"users"}))),o("PUBLIC",Object(g.a)(J.a,{"aria-label":t.formatMessage(Q.public),title:t.formatMessage(Q.public),to:"/timelines/public"},void 0,Object(g.a)(W.a,{icon:"globe"}))),Object(g.a)("a",{"aria-label":t.formatMessage(Q.settings),onClick:n,href:"#",title:t.formatMessage(Q.settings)},void 0,Object(g.a)(W.a,{icon:"cogs"})),Object(g.a)("a",{"aria-label":t.formatMessage(Q.logout),"data-method":"delete",href:Y.d,title:t.formatMessage(Q.logout)},void 0,Object(g.a)(W.a,{icon:"sign-out"})))},t}(q.a),Object(N.a)(c,"propTypes",{columns:x.a.list,unreadNotifications:D.a.number,showNotificationsBadge:D.a.bool,intl:D.a.object,onSettingsClick:D.a.func}),o=r))||o,K=Object(f.connect)(function(e){return{columns:e.getIn(["settings","columns"]),unreadNotifications:e.getIn(["notifications","unread"]),showNotificationsBadge:e.getIn(["local_settings","notifications","tab_badge"])}},function(t,e){e.intl;return{onSettingsClick:function(e){e.preventDefault(),e.stopPropagation(),t(Object(G.d)("SETTINGS",{}))}}})(X);i.d(t,"default",function(){return $});var Z=Object(j.f)({compose:{id:"navigation_bar.compose",defaultMessage:"Compose new toot"}}),$=Object(f.connect)(function(e,t){return{showSearch:t.multiColumn?e.getIn(["search","submitted"])&&!e.getIn(["search","hidden"]):t.isSearchPage}})(u=Object(j.g)(u=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,i=e.multiColumn,s=e.isSearchPage,a=e.showSearch,n=v()("drawer","mbstobon");return Object(g.a)("div",{className:n,role:"region","aria-label":t.formatMessage(Z.compose)},void 0,i&&Object(g.a)(K,{}),(i||s)&&Object(g.a)(M,{}),Object(g.a)("div",{className:"drawer__pager"},void 0,!s&&Object(g.a)("div",{className:"drawer__inner"},void 0,Object(g.a)(h,{}),Object(g.a)(m.a,{}),i&&Object(g.a)("div",{className:"drawer__inner__mastodon"},void 0,O.i?Object(g.a)("img",{alt:"",draggable:"false",src:O.i}):Object(g.a)("button",{className:"mastodon"}))),Object(g.a)(S.a,{defaultStyle:{x:s?0:-100},style:{x:C()(a||s?0:-100,{stiffness:210,damping:20})}},void 0,function(e){var t=e.x;return Object(g.a)("div",{className:"drawer__inner darker",style:{transform:"translateX("+t+"%)",visibility:-100===t?"hidden":"visible"}},void 0,Object(g.a)(L,{}))})))},t}(b.a.PureComponent))||u)||u}}]);
//# sourceMappingURL=compose.js.map