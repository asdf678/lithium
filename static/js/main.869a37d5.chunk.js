(this.webpackJsonpli=this.webpackJsonpli||[]).push([[0],{128:function(e,t,a){e.exports=a(372)},133:function(e,t,a){},134:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),o=(a(133),a(17)),c=a(114),s=a(409),u=(a(134),a(46)),p=a(410),m=a(418),h=a(417),d=a(412),f=a(111),g=a.n(f),y=a(115),E=a(416),x=a(414),b=a(415),v=a(40),w=a.n(v),j=a(419),O=a(35),k=a(110),M=a.n(k),_=a(112),C=a.n(_),L=a(108),T=a.n(L),S=a(113),B=a.n(S),D=a(109),F=a.n(D),I=a(42),z=a(425),N=a(100),R=a(25),P=a.n(R),A=a(51),G=a(376),W=a(104),q=a.n(W),H=a(377),$=a(105),V=a.n($),J=a(43),Z=a.n(J),K=(a(93),a(68)),Q=a.n(K),U=function(){var e=w()();return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",borderTop:"1px solid #4a4a4a",borderBottom:"1px solid #222222",width:"70%"}}),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(O.a,{style:{padding:"30px",color:e.palette.text.primary}},"Released under the MIT License. Copyright \xa9 2020 Matthieu Garrigues."))},X={"getting-started":"https://raw.githubusercontent.com/matt-42/lithium/master/docs/getting_started.md",sql:"https://raw.githubusercontent.com/matt-42/lithium/master/docs/sql.cc","http-server":"https://raw.githubusercontent.com/matt-42/lithium/master/docs/http_server.cc",json:"https://raw.githubusercontent.com/matt-42/lithium/master/docs/json.cc"};function Y(e){return e.toLowerCase().replace("c++","cpp").replace(/[^a-zA-Z0-9]/g,"-")}var ee=function(e){for(var t=[],a=e;a;)t.unshift(a.text),a=a.parent;return"#"+t.map(Y).join("/")},te=function(e){return"/lithium/"+ee(e)},ae=function(e){for(var t=[],a=e;a;)t.unshift(a.text),a=a.parent;return t.join(" / ")};function ne(e,t,a){var n=e.depth-1,r=e.depth-2;if(e.depth>1){for(;r>0&&!a[r];)r--;var l=a[r];l||(console.log(a),console.log(e)),l.children[e.text]={text:e.text,depth:e.depth,children:{},parent:l},a.length=n+1,a[n]=l.children[e.text]}else t[e.text]={text:e.text,depth:e.depth,children:{},parent:null},a.length=n+1,a[0]=t[e.text];return a[n]}var re={},le=[],ie={code:function(e,t,a){return""==t&&(t="c++"),'<pre><code class="hljs '.concat(t,'">').concat(Z.a.highlight(t,e).value,"</code></pre>")},heading:function(e,t){var a=ne({text:e,depth:t},re,le);Y(e);return'\n    <a name="'.concat(ee(a).substring(1),'" class="anchor" href="').concat(ee(a),'" style="top: -90px; display: block;\n    position: relative;\n    top: -60px;\n    visibility: hidden;">\n    <h').concat(t,' class="MuiTypography-root MuiTypography-h').concat(t,'" style="margin-bottom: ').concat(10*(6-t),"px; margin-top: ").concat(10*(6-t),'px">\n    <span class="header-link"></span>\n    </a>\n    ').concat(e.toLowerCase(),"\n    </h").concat(t,">")},paragraph:function(e){return'<p class="MuiTypography-root MuiTypography-body1">'.concat(e,"</p>")},link:function(e,t,a){return"<a href=".concat(e," \n              ").concat(t?"title='".concat(t,"'"):"",' \n              class="MuiTypography-root MuiLink-root MuiLink-underline MuiTypography-colorPrimary">\n              ').concat(a,"\n           </a>")}};function oe(e){var t="__documentation_starts_here__",a=e.indexOf(t);return-1!=a&&(e=e.substring(a+t.length)),e=(e="```c++\n"+(e=(e=e.replace(/\n[\s]*\/\*/g,"\n```\n")).replace(/\n[\s]*\*\//g,"\n```c++\n"))+"```\n").replace(/```c\+\+[\n ]*```/,"")}function ce(){return(ce=Object(A.a)(P.a.mark((function e(){var t,a,n,r,l,i,o,c,s,u,p,m;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a={},n=0,r=Object.values(X);case 3:if(!(n<r.length)){e.next=15;break}return l=r[n],e.next=7,fetch(l).then((function(e){return e.text()}));case 7:i=e.sent,o=Object(K.lexer)("md"==l.split(".").pop()?i:oe(i)),c=[],s=Object(N.a)(o);try{for(s.s();!(u=s.n()).done;)"heading"===(p=u.value).type?(m=p.depth-1,ne(p,a,c),t.push({text:p.text||"",section:c[m]})):c.length&&t.push({text:p.text||"",section:c[c.length-1]})}catch(h){s.e(h)}finally{s.f()}case 12:n++,e.next=3;break;case 15:return e.abrupt("return",[a,t]);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(){return ce.apply(this,arguments)}();function ue(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(A.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q.a.use({renderer:ie}),e.next=3,fetch(t).then((function(e){return e.text()}));case 3:return a=e.sent,e.abrupt("return",Q()("md"==t.split(".").pop()?a:oe(a)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}for(var me={},he=0,de=Object.keys(X);he<de.length;he++){var fe=de[he];me[fe]=ue(X[fe])}var ge=function(e){var t=w()();console.log(t);var a=Object(n.useState)(""),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),m=u[0],h=u[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),g=f[0],y=f[1];function E(e){return e?r.a.createElement(q.a,{disablePadding:!0},Object.values(e).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{key:e.text,button:!0,component:"a",href:te(e),style:{paddingLeft:"".concat(10*e.depth,"px"),color:t.palette.text.primary}},e.parent?r.a.createElement(V.a,null,e.text):r.a.createElement("span",{style:{fontFamily:"Major Mono Display"}},e.text.toLowerCase())),E(e.children))}))):r.a.createElement(r.a.Fragment,null)}return Object(n.useEffect)((function(){Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,se;case 3:e.t1=e.sent[0],t=(0,e.t0)(e.t1),h(t);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(A.a)(P.a.mark((function t(){var a,n,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.hash.split("/"),(n=a[0].substring(1))!=g){t.next=4;break}return t.abrupt("return");case 4:if(console.log("load ",n),y(n),me[n]){t.next=10;break}c(n+": Section not found"),t.next=12;break;case 10:return t.next=12,me[n].then((function(e){return c(e)}));case 12:r=window.location.hash,window.location.hash="",window.location.hash=r;case 15:case"end":return t.stop()}}),t)})))()}),[e.hash]),r.a.createElement("div",null,r.a.createElement(p.a,{style:{paddingLeft:"240px",position:"relative",paddingTop:"100px"}},r.a.createElement("div",{className:"docMenu",style:{position:"fixed",width:"220px",top:"100px",marginLeft:"-240px",height:"100%",overflow:"scroll"}},m),r.a.createElement(H.a,{style:{flexGrow:1,textAlign:"left",padding:"20px"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}})),r.a.createElement(U,null)))},ye=a(428),Ee=a(426),xe=a(427),be=Object(ye.a)({matchFrom:"any",ignoreAccents:!0,ignoreCase:!0,stringify:function(e){return e.text}}),ve=function(){Object(xe.a)();var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){se.then((function(e){console.log(e[1]),l(e[1])}))}),[]);Object(I.a)();return a?r.a.createElement(Ee.a,{id:"doc_search_bar",options:a,style:{width:600},openOnFocus:!1,renderInput:function(e){return r.a.createElement(z.a,Object.assign({},e,{onMouseDownCapture:function(e){return e.stopPropagation()},label:"Search documentation",variant:"outlined"}))},filterOptions:be,onChange:function(e,t){console.log("selected!"),console.log(t),t&&(window.location.hash=ee(t.section))},getOptionLabel:function(e){return""},renderOption:function(e,t){var a=e.text.toLowerCase().indexOf(t.inputValue.toLowerCase()),n=e.text.substring(Math.max(a-50,0),Math.min(a+50,e.text.length));return n=n.replace(t.inputValue,"<u><b>".concat(t.inputValue,"</b></u>")),r.a.createElement("div",{key:ae(e.section)+e.text,style:{display:"flex",flexDirection:"column",borderLeft:"1px solid #999999",paddingLeft:"10px"}},e.section.parent?r.a.createElement("div",null,r.a.createElement(O.a,{variant:"caption"},ae(e.section))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",null,r.a.createElement(O.a,{variant:"h6"},e.section.text)),r.a.createElement("div",null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))}}):r.a.createElement(r.a.Fragment,null)},we=Object(x.a)((function(e){var t;return console.log(e.palette.type,e.palette.text.primary),Object(b.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={color:e.palette.text.primary,display:"none",fontFamily:"Major Mono Display",fontSize:"25px"},Object(u.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(u.a)(t,"textDecoration","none"),t),inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function je(){var e=w()(),t=we(),a=r.a.useState(null),n=Object(o.a)(a,2),l=n[0],i=n[1],c=r.a.useState(null),s=Object(o.a)(c,2),u=s[0],f=s[1],x=Boolean(l),b=Boolean(u),v=function(){f(null)},k=function(){i(null),v()},_=r.a.createElement(y.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:k},r.a.createElement(E.a,{onClick:k},"Profile"),r.a.createElement(E.a,{onClick:k},"My account")),L=r.a.createElement(y.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:v},r.a.createElement(E.a,null,r.a.createElement(d.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(h.a,{badgeContent:4,color:"secondary"},r.a.createElement(T.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(E.a,null,r.a.createElement(d.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(h.a,{badgeContent:11,color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(E.a,{onClick:function(e){i(e.currentTarget)}},r.a.createElement(d.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(M.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:t.grow},r.a.createElement(m.a,{position:"fixed"},r.a.createElement(p.a,null,r.a.createElement(j.a,null,r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/matt-42/lithium/master/images/lithium_logo_white.png",width:"40",style:{paddingRight:"15px",filter:"invert(".concat("dark"==e.palette.type?"0":"100",")")}})),r.a.createElement(O.a,{className:t.title,variant:"h6",noWrap:!0},r.a.createElement(g.a,{className:t.title,underline:"none",href:"#"},"lithium")),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",null,r.a.createElement(ve,null)),r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(d.a,{href:"https://github.com/matt-42/lithium",target:"_blank","aria-label":"Github"},r.a.createElement(C.a,null))),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(d.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit"},r.a.createElement(B.a,null)))))),L,_)}var Oe=a(423),ke=a(421),Me=a(422),_e='"Droid Sans Mono", monospace, monospace, "Droid Sans Fallback"',Ce=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&Z.a.highlightBlock(t.current)}),[null!==t.current]),r.a.createElement("pre",null,r.a.createElement("code",{ref:t,className:"shell"},e.children))},Le=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&Z.a.highlightBlock(t.current)}),[null!==t.current]),r.a.createElement("pre",null,r.a.createElement("code",{ref:t,className:"c++"},e.children))},Te=function(e){return r.a.createElement("span",{style:{fontFamily:_e,fontWeight:"bold"}},e.children)},Se=a(413),Be=a(424),De=a(420),Fe=function(){var e=Object(I.a)();console.log(e);var t=Object(De.a)("(min-width:700px)");return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:t?"row":"column",justifyContent:"center",paddingTop:"100px",color:e.palette.primary.main}},r.a.createElement("img",{src:"https://raw.githubusercontent.com/matt-42/lithium/master/images/lithium_logo_white.png",width:"300",style:{marginRight:"30px",filter:"invert(".concat("dark"==e.palette.type?"0":"100",")")}}),r.a.createElement("div",null,r.a.createElement(O.a,{variant:"h1",color:"textPrimary"},"lithium"),r.a.createElement(O.a,{style:{fontSize:"22px"},color:"textPrimary"},"Build high performance C++ HTTP servers without being a C++ expert."),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},r.a.createElement(ke.a,{variant:"outlined",style:{marginRight:"45px"},href:"#getting-started"},"Get Started"),r.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=matt-42&repo=lithium&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}),r.a.createElement("a",{href:"https://twitter.com/share",className:"twitter-share-button",style:{float:"left",marginLeft:"-37px",paddingTop:"10px"},"data-size":"large"},"Tweet")))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"100px",color:e.palette.text.primary}},r.a.createElement(H.a,{style:{flex:1,marginBottom:"20px",padding:"20px",width:t?"700px":"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(Me.a,null,"get_app"),r.a.createElement("div",{style:{flexBasis:"10px"}}),r.a.createElement(O.a,{variant:"h6"}," Installation")),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(O.a,null,"The simplest way to use Lithium is to download the cli in your path. It compiles and runs the server's code inside a docker container. The only requirements are Docker and Python>=3.6."),r.a.createElement(Ce,null,"$ wget https://raw.githubusercontent.com/matt-42/lithium/master/cli/li\n$ chmod +x ./li"),r.a.createElement(O.a,null,"Lithium can also run locally. ",r.a.createElement(Oe.a,{href:"#getting-started"},r.a.createElement("u",null,"Check the install guide for more info")),".")),r.a.createElement(H.a,{style:{flex:1,padding:"20px",width:t?"700px":"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(Me.a,null,"api"),r.a.createElement("div",{style:{flexBasis:"10px"}}),r.a.createElement(O.a,{variant:"h6"},"Hello World")),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(O.a,null,"Write your first ",r.a.createElement(Te,null,"hello_world")," Lithium server."),r.a.createElement(Le,null,'// main.cc \n#include <lithium_http_server.hh>\n            \nint main() {\n  http_api my_api;\n              \n  my_api.get("/hello_world") = \n  [&](http_request& request, http_response& response) {\n    response.write("hello world.");\n  };\n  http_serve(my_api, 8080);\n}\n'),", history",r.a.createElement(O.a,null,"And run it:"),r.a.createElement(Ce,null,"$ li run ./main.cc"),r.a.createElement(O.a,null,"Behind the scene, ",r.a.createElement(Te,null,"li")," will build a lithium docker image, compile and run the server."),r.a.createElement("p",{style:{textAlign:"right"}},r.a.createElement(ke.a,{variant:"outlined",color:"primary",href:"#getting-started"},"Read the docs"))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{borderTop:"1px solid #4a4a4a",borderBottom:"1px solid #222222",width:"70%"}}),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(O.a,{variant:"h4",style:{fontFamily:"Major Mono Display"}},"lithium's sponsors"),r.a.createElement(Se.a,null,r.a.createElement(G.a,{button:!0,component:"a",target:"_blank",href:"https://github.com/Burnett01"},r.a.createElement(Be.a,{primary:"Steven Agyekum (Burnett01)"}))),"If you find this project helpful and want to support it, give a star to lithium or buy me a coffee!",r.a.createElement(Oe.a,{target:"_blank",href:"https://github.com/sponsors/matt-42"},r.a.createElement("u",null,"More info on my github sponsor page ",r.a.createElement(Me.a,{style:{color:"pink"}},"favorite_border")))),r.a.createElement(U,null))},Ie=Object(c.a)({palette:{type:"dark",primary:{main:"#f5f5f5",dark:"#414141"},secondary:{main:"#f5f5f5",dark:"#414141"}},typography:{h1:{fontFamily:"Major Mono Display",fontSize:"50px"},h2:{fontFamily:"Major Mono Display",fontSize:"30px"},h3:{fontFamily:"Major Mono Display",fontSize:"20px"}}});var ze=function(){var e=Object(n.useState)(window.location.hash),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){window.onhashchange=function(){return l(window.location.hash)}}),[]),r.a.createElement(s.a,{theme:Ie},r.a.createElement(je,null),""==a?r.a.createElement(Fe,null):r.a.createElement(ge,{hash:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.869a37d5.chunk.js.map