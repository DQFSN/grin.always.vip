(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},11:function(e,t,n){e.exports={header:"Box_header__2eM58",header_title:"Box_header_title__KkvuV",header_logo:"Box_header_logo__1DwV-",cardSkeleton:"Box_cardSkeleton__1-4a5",cardSkeleton_card:"Box_cardSkeleton_card__2zuX2",itemSkeleton:"Box_itemSkeleton__3T6Bj",navItemCard:"Box_navItemCard__2ba-h",navItemCard_card:"Box_navItemCard_card__2Go7C",cardItem:"Box_cardItem__2TlOT",footer:"Box_footer__3nxP2",footer_title:"Box_footer_title__6Y7qN",footer_sponsored:"Box_footer_sponsored__2-_4u"}},110:function(e,t,n){"use strict";n.r(t);var a,r=n(2),c=n(0),i=n.n(c),o=n(9),s=n.n(o),l=n(33),d=n.n(l),u=n(48),j=n(15),h=n(16),f=n(19),g=n(18),b=n(142),x=n(143),m=n(148),p=n(147),O=n(111),v=n(67),_=n(141),y=n(144),w=n(145),k=n(137),C=n(146),N=n(138),B=n(134),L=n(25),I=n.n(L),S=n(61),z=n.n(S),D=n(46),R=n(69),E=function(e){var t=e.id,n=e.className,a=e.style,c=e.children,i=e.onClick,o=Object(R.a)(e,["id","className","style","children","onClick"]),s={m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:["ml","mr"],my:["mt","mb"],p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:["pl","pr"],py:["pt","pb"]},l=["position","display","flex","flexWrap","flexDirection","justifyContent","alignItems","width","height","fontWeight","fontSize","lineHeight","textAlign","color","backgroundColor","border","borderTop","borderRight","borderBottom","borderLeft","borderColor","borderRadius","boxShadow","wordBreak","cursor","userSelect"],d={};try{Object.keys(o).forEach((function(e){s[e]&&(/(x|y)/.test(e)?s[e].forEach((function(t){d[s[t]]=8*o[e]})):d[s[e]]=8*o[e])}))}catch(j){}var u={};try{Object.keys(o).forEach((function(e){l.indexOf(e)>-1&&(u[e]=o[e])}))}catch(j){}return Object(r.jsx)("div",{style:Object(D.a)(Object(D.a)(Object(D.a)({},u),d),a),onClick:i,id:t,className:n,children:c})},T=n.p+"static/media/logo_title_new.edc9ef3d.svg",V=n(26),A=n.n(V),P=".",H=".",U=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=[],n=0;n<e;n++)t.push(n);return t},K=function(){return"en"===window.localStorage.getItem("i18nextLng")?"en":"zh"},M=function(e,t){try{window._hmt.push(["_trackEvent",e,"click",t])}catch(n){console.log(n)}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?e.indexOf("http")>-1?e:(/\S+\.svg$/.test(e),"".concat(H).concat(e)):""},F=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={sticky:!1,activeKey:"Home",top:0},e.initActiveKey=function(){var t=e.props.tagList,n=window.location.hash,a=n?n.split("#")[1]:encodeURI((t[0]||{}).tag_en);e.setState({activeKey:a})},e.onScroll=function(){var t=0,n=document.documentElement.scrollTop;a>window.innerHeight-234&&(t=n>document.body.clientHeight/2?-(n/(document.body.clientHeight/2)-1)*(a-window.innerHeight+234+166):0),e.setState({top:parseInt(t,10),sticky:n>157,activeKey:e.getCurrentAnchor()})},e.getCurrentAnchor=function(){var t=e.props.tagList,n=[];if(t.forEach((function(t){var a=encodeURI(t.tag_en),r=document.getElementById(a);if(r){var c=e.getOffsetTop(r);n.push({link:a,top:c})}})),n.length)for(var a=1;a<n.length;a++)if(n[a].top>0)return n[a-1].link;return""},e.getOffsetTop=function(e){var t=e.getBoundingClientRect();if(t.width||t.height)return t.top-e.ownerDocument.documentElement.clientTop},e.renderWebNavList=function(){var t=e.props,n=t.tagList,a=t.language,c=e.state,i=c.sticky,o=c.top,s=c.activeKey;if(!(n||[]).length){var l=+window.localStorage.getItem("tagListLength"),d=U(l||30);return Object(r.jsx)(E,{display:"flex",flexDirection:"column",pl:1,pr:1,style:{top:o},children:d.map((function(e,t){return Object(r.jsx)(E,{pt:1,pr:2,pb:1,pl:2,children:Object(r.jsx)(B.a,{variant:"text",width:80})},"".concat(e,"-").concat(t))}))})}return Object(r.jsx)(E,{pl:1,pr:1,display:"flex",flexDirection:"column",id:"NavBar",className:I()(A.a.NavBar,i?A.a.NavBa_fixed:{}),style:{top:o},children:(n||[]).map((function(e,t){var n=e.tag,c=e.tag_en,i="zh"===a?n:c;return Object(r.jsx)(k.a,{href:"#".concat(c),className:I()(A.a.link,s===encodeURI(c)?A.a.link_active:{}),color:"textPrimary",underline:"none",children:i},c)}))})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=(this.props.tagList||[]).length;e&&(window.localStorage.setItem("tagListLength",e),a=36*e,this.initActiveKey(),window.addEventListener("scroll",z()(this.onScroll,16.7)))}},{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.language,a=e.drawerVisible,c=e.onClose,i=this.state.activeKey;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{lgUp:!0,children:Object(r.jsx)(C.a,{open:a,onClose:c,children:Object(r.jsxs)(E,{display:"flex",flexDirection:"column",style:{height:"inherit",overflow:"hideen"},children:[Object(r.jsx)(E,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:2,children:Object(r.jsx)("img",{src:T,alt:"eth123",height:17})}),Object(r.jsx)(N.a,{}),Object(r.jsx)(E,{flex:"1",style:{overflow:"auto"},onClick:c,children:(t||[]).map((function(e,t){var a=e.tag,c=e.tag_en,o="zh"===n?a:c;return Object(r.jsx)(k.a,{href:"#".concat(c),className:I()(A.a.drawer_link,i===encodeURI(c)?A.a.drawer_link_active:{}),color:"textPrimary",underline:"none",children:Object(r.jsx)(E,{pl:4,pr:4,pt:1,pb:1,children:o})},c)}))})]})})}),Object(r.jsx)(m.a,{mdDown:!0,children:this.renderWebNavList()})]})}}]),n}(c.PureComponent),G=n(139),J=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.navList,n=e.tagList,a=e.language;if(!(n||[]).length||!(t||[]).length){var c=U();return Object(r.jsx)("div",{id:encodeURI((n[0]||{}).tag_en),style:{marginBottom:16},children:Object(r.jsx)(G.a,{container:!0,spacing:2,children:c.map((function(e,t){return Object(r.jsx)(G.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)("div",{className:"skeletonHotCard",style:{backgroundColor:"#fff",borderRadius:8}})},"".concat(e,"-").concat(t))}))})})}return Object(r.jsx)("div",{id:encodeURI((n[0]||{}).tag_en),style:{marginBottom:16},children:Object(r.jsx)(G.a,{container:!0,spacing:2,children:(t||[]).filter((function(e){return(e.tag_en||"").indexOf("Hot")>-1})).map((function(e,t){return Object(r.jsx)(G.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(k.a,{color:"textPrimary",href:"".concat("zh"===a?e.url:e.url_en||e.url,"?utm_resource=grin.always.vip"),target:"_blank",underline:"none",onClick:function(){M(e.tag_en,e.name_en||e.name)},children:Object(r.jsx)(E,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",py:2,borderRadius:8,backgroundColor:"#fff",className:"hotCard",children:Object(r.jsx)("img",{src:W(e.image),alt:""})})})},"Hot-".concat(t))}))})})}}]),n}(c.PureComponent),q=n(11),Q=n.n(q),X=function(){return(U()||[]).map((function(e,t){return Object(r.jsx)(G.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsxs)(E,{display:"flex",flexDirection:"row",className:Q.a.itemSkeleton,children:[Object(r.jsx)(E,{mr:1,children:Object(r.jsx)(B.a,{variant:"circle",width:30,height:30})}),Object(r.jsxs)(E,{flex:"1",children:[Object(r.jsx)(B.a,{variant:"text"}),Object(r.jsx)(B.a,{variant:"text"})]})]})},"".concat(e,"-").concat(t))}))},Y=function(){return(U()||[]).map((function(e){return Object(r.jsxs)(E,{mb:2,backgroundColor:"white",borderRadius:16,className:Q.a.cardSkeleton,children:[Object(r.jsx)(E,{py:2,borderBottom:"1px solid #f5f5f5",children:Object(r.jsx)(B.a,{variant:"text",width:100})}),Object(r.jsx)(E,{className:Q.a.cardSkeleton_card,children:Object(r.jsx)(G.a,{container:!0,spacing:2,children:Object(r.jsx)(X,{})})})]},"".concat(e,"-index"))}))},$=n(149),Z=n(65),ee=n.n(Z),te=function(e){var t=e.item,n=t.tag_en,a=t.logo,c=t.name,i=t.name_en,o=t.desc,s=t.desc_en,l=t.url,d=t.url_en,u=t.logoWidthAuto,j=t.logoHeightAuto,h=e.language,f=30,g="zh"===h?l:d||l;return Object(r.jsx)(G.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(k.a,{color:"textPrimary",href:"".concat(g),target:"_blank",underline:"none",onClick:function(){M(n,i||c)},children:Object(r.jsxs)(E,{display:"flex",flexDirection:"row",className:I()("cardItem",Q.a.cardItem),borderRadius:8,children:[Object(r.jsx)(E,{mr:1,children:Object(r.jsx)(ee.a,{height:f,style:{width:f},once:!0,children:Object(r.jsx)($.a,{alt:"zh"===h?c:i||c,src:W(a),style:{height:j?"auto":f,width:u?"auto":f},imgProps:{height:j?"auto":f,width:u?"auto":f},children:("zh"===h?c:i||c).slice(0,1)})})}),Object(r.jsxs)(E,{children:[Object(r.jsx)(O.a,{variant:"body1",className:"cardItem_title",style:{fontWeight:500},children:"zh"===h?c:i||c}),Object(r.jsx)(O.a,{variant:"caption",style:{color:"#999",wordBreak:"break-all"},children:function(){if("zh"===h&&o)return o;if("en"===h&&s)return s;var e=(g||"").replace(/htt(p|ps):\/\//,"");return"/"===e.slice("-1")&&(e=e.slice(0,e.length-1)),e}()})]})]})})})},ne=n(68),ae=n(140),re=function(e){var t=e.list,n=e.language,a=Object(c.useState)(!1),i=Object(ne.a)(a,2),o=i[0],s=i[1];return o?(t||[]).slice(7).map((function(e,t){return Object(r.jsx)(te,{item:e,language:n},t)})):Object(r.jsx)(G.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(E,{display:"flex",flexDirection:"column",justifyContent:"center",className:"toggleBtnWrap",children:Object(r.jsx)(E,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",className:"toggleBtn",borderRadius:4,onClick:function(){s(!0)},children:Object(r.jsx)(ae.a,{})})})},"toggleBtnGrid")},ce=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tag,n=e.navList,a=e.language;if(!(n||[]).length)return Object(r.jsx)(X,{});var c=(n||[]).filter((function(e){return e.tag_en===t})),i=[],o=c.length<=8?8:7;return i=c.slice(0,o).map((function(e,t){return Object(r.jsx)(te,{item:e,language:a},t)})),c.length>8&&i.push(Object(r.jsx)(re,{list:c,language:a},"NavExpandItem")),i}}]),n}(c.PureComponent),ie=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.navList,a=e.language;return(t||[]).length?(t||[]).slice(1).map((function(e){return Object(r.jsxs)(E,{backgroundColor:"white",borderRadius:16,mb:2,id:encodeURI(e.tag_en),className:Q.a.navItemCard,children:[Object(r.jsx)(E,{py:2,borderBottom:"1px solid #f5f5f5",children:Object(r.jsx)(O.a,{children:"zh"===a?e.tag:e.tag_en})}),Object(r.jsx)(E,{className:Q.a.navItemCard_card,children:Object(r.jsx)(G.a,{container:!0,spacing:2,children:Object(r.jsx)(ce,{tag:e.tag_en,navList:n,language:a})})})]},e.tag_en)})):Object(r.jsx)(Y,{})}}]),n}(c.PureComponent),oe=function(e){e.style;return Object(r.jsx)("svg",{t:"1609996857387",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1102",width:"48",height:"48",children:Object(r.jsx)("path",{d:"M512 1024c282.784 0 512-229.216 512-512S794.784 0 512 0 0 229.216 0 512s229.216 512 512 512z m0-928c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96zM192 512v64c0 140.8 115.2 256 256 256h128c140.8 0 256-115.2 256-256v-64H192z m192 244.992a193.056 193.056 0 0 1-71.552-45.44A190.56 190.56 0 0 1 256 576h128v180.992zM576 768h-128v-192h128v192z m135.552-56.448A192.256 192.256 0 0 1 640 756.992V576h128a190.72 190.72 0 0 1-56.448 135.552zM225.344 384c9.76 0 18.112-7.04 19.712-16.704C251.2 330.624 282.72 304 319.968 304s68.768 26.624 74.912 63.296a20 20 0 0 0 39.424 0.032A116.128 116.128 0 0 0 319.936 232a116.128 116.128 0 0 0-114.368 135.328 20 20 0 0 0 19.712 16.672z m384 0c9.76 0 18.112-7.04 19.712-16.704 6.144-36.672 37.664-63.296 74.912-63.296s68.768 26.624 74.912 63.296a20 20 0 0 0 39.424 0.032 116.128 116.128 0 0 0-114.368-135.328 116.128 116.128 0 0 0-114.368 135.328 20 20 0 0 0 19.744 16.672z","p-id":"1103",fill:"#f4ea2a"})})},se=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.footerVisible,n=e.t;return t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(E,{display:"flex",flexDirection:"column",alignItems:"center",className:I()("footer",Q.a.footer),children:[Object(r.jsx)(E,{className:Q.a.footer_title,children:Object(r.jsx)(O.a,{variant:"h5",className:"footer_title",children:n("more")})}),Object(r.jsx)(p.a,{variant:"contained",className:"submitBtn",color:"primary",style:{textTransform:"none",backgroundColor:"gold"},onClick:function(){window.open("https://github.com/DQFSN/grin.always.vip/issues")},children:n("submit")})]}),Object(r.jsxs)(E,{display:"flex",flexDirection:"row",justifyContent:"center",className:Q.a.footer_sponsored,children:[Object(r.jsx)("div",{children:"Sponsored By\xa0"}),Object(r.jsx)("div",{style:{color:"#ff7"},children:Object(r.jsx)(k.a,{href:"https://www.grin.mw",underline:"none",children:"xiaojay"})})]})]}):null}}]),n}(c.PureComponent),le=n(66),de=n.n(le).a.create();function ue(e,t){return de({method:"get",url:e,params:t})}de.interceptors.response.use((function(e){return e.data}));n(108);var je=Object(v.a)({palette:{primary:{main:"#ff7828",contrastText:"#fff"}}}),he={zh:{subTitle:"\u53e4\u7075\u751f\u6001\u8d44\u6e90\u5bfc\u822a",more:"\u4e00\u8d77\u53d1\u73b0\u66f4\u591a\u65b0\u4ea7\u54c1",submit:"\u63d0\u3000\u4ea4"},en:{subTitle:"A Portal to Grin Ecosystem",more:"Discover more new products",submit:"Submit"}},fe=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={tagList:[],navList:[],language:K(),drawerVisible:!1,footerVisible:!1},e.fetchTagList=function(){var t=Object(u.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue("".concat(P,"/tagList.json"));case 2:(a=t.sent)&&(a||[]).length&&e.setState({tagList:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchNavList=Object(u.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue("".concat(P,"/resource.json"));case 2:(n=t.sent)&&(n||[]).length&&e.setState({navList:n,footerVisible:!0});case 4:case"end":return t.stop()}}),t)}))),e.translate=function(t){var n=e.state.language;return he[n][t]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchTagList(),this.fetchNavList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.navList,a=t.tagList,c=t.footerVisible,i=t.language,o=t.drawerVisible,s=this.translate;return Object(r.jsxs)(_.a,{theme:je,children:[Object(r.jsx)(b.a,{}),Object(r.jsxs)(x.a,{children:[Object(r.jsxs)(E,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",className:Q.a.header,children:[Object(r.jsx)(m.a,{lgUp:!0,children:Object(r.jsx)(E,{style:{cursor:"pointer"},onClick:function(){e.setState({drawerVisible:!0})},children:Object(r.jsx)(y.a,{})})}),Object(r.jsx)(E,{flex:"1"}),Object(r.jsx)(p.a,{disableElevation:!0,variant:"outlined",onClick:function(){var t="zh"===i?"en":"zh";window.localStorage.setItem("i18nextLng",t),document.cookie="i18next=".concat(t,";path=/;domain=.eth123.org"),e.setState({language:t})},size:"small",startIcon:Object(r.jsx)(w.a,{}),className:"languageBtn",style:{textTransform:"none"},children:Object(r.jsx)(E,{fontWeight:"400",className:"languageBtn_text",children:"zh"===i?"English":"\u4e2d\u6587"})})]}),Object(r.jsxs)(E,{display:"flex",flexDirection:"column",alignItems:"center",className:Q.a.header_title,children:[Object(r.jsx)(E,{className:Q.a.header_logo,children:Object(r.jsx)(oe,{})}),Object(r.jsx)(E,{children:Object(r.jsxs)(O.a,{color:"textSecondary",children:["-- ",s("subTitle")," --"]})})]}),Object(r.jsxs)(E,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(F,{tagList:a,language:i,drawerVisible:o,onClose:function(){e.setState({drawerVisible:!1})}},"NavBar-".concat((a||[]).length)),Object(r.jsx)(E,{flex:"1"}),Object(r.jsxs)(E,{className:"tagContent",children:[Object(r.jsx)(J,{navList:n,tagList:a,language:i}),Object(r.jsx)(ie,{navList:n,tagList:a,language:i})]},(n||[]).length),Object(r.jsx)(m.a,{lgUp:!0,children:Object(r.jsx)(E,{flex:"1"})})]})]}),Object(r.jsx)(se,{footerVisible:c,t:s})]})}}]),n}(i.a.Component);n(109);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(fe,{})}),document.getElementById("root"))},26:function(e,t,n){e.exports={NavBa_fixed:"styles_NavBa_fixed__EbRnh",link:"styles_link__3NeEE",NavBar:"styles_NavBar__34su-",link_active:"styles_link_active__13com",drawer_link:"styles_drawer_link___-O06",drawer_link_active:"styles_drawer_link_active__1h1PE"}}},[[110,1,2]]]);
//# sourceMappingURL=main.ce423f80.chunk.js.map