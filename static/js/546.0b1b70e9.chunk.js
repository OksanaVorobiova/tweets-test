"use strict";(self.webpackChunktweets_test=self.webpackChunktweets_test||[]).push([[546],{311:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r=t(165),a=t(433),i=t(861),s=t(439),o=t(791),c=t(243);c.Z.defaults.baseURL="https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users",c.Z.defaults.params={limit:6};var l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{page:e}},n.prev=1,n.next=4,c.Z.get("",t);case 4:return a=n.sent,n.abrupt("return",a.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();c.Z.defaults.baseURL="https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users";var p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{isFollowing:e}},n.prev=1,n.next=4,c.Z.get("",t);case 4:return a=n.sent,n.abrupt("return",a.data.length);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();var u,d,f,x,g=t.p+"static/media/logo.f9b856ffe6d2621975d985e43d0d707c.svg",h=t(168),b=t(444),w=b.ZP.div(u||(u=(0,h.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  height: 460px;\n  border-radius: 20px;\n  padding: 20px;\n  background-image: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px\n    #0000003b;\n"]))),m=t.p+"static/media/background.b186e544641a66e17d83.png",v=t.p+"static/media/background@2x.2bdca439e1ee32db9691.png",Z=b.ZP.div(d||(d=(0,h.Z)(["\n  display: inline-block;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 50%;\n  background-size: contain;\n  margin: 0 auto;\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n"])),m,v),k=b.ZP.div(f||(f=(0,h.Z)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  position: absolute;\n  top: 42.5%;\n  left: 25%;\n\n  img {\n    width: 62px;\n    border-radius: 50%;\n    border: 8px solid #ebd8ff;\n    box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,\n      0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f,\n      0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 1.2;\n    color: #ebd8ff;\n    margin-top: 26px;\n    margin-bottom: 0;\n    font-family: "Montserrat", sans-serif;\n    text-transform: uppercase;\n  }\n\n  p:last-child {\n    margin-top: 16px;\n  }\n\n  button {\n    width: 196px;\n    margin-top: 26px;\n    border-radius: 10.31px;\n    padding: 14px 28px;\n    color: #373737;\n    font-family: "Montserrat", sans-serif;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 1.2;\n    background-color: #ebd8ff;\n    border: none;\n    transition: 1s ease-in;\n  }\n\n  button.active,\n  button:hover {\n    background-color: #5cd3a8;\n    transition: 1s ease-in;\n  }\n']))),j=b.ZP.div(x||(x=(0,h.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,\n    0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f,\n    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;\n"]))),E=t(683);c.Z.defaults.baseURL="https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users";var y=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/".concat(e));case 3:return t=n.sent,a=t.data,n.next=7,c.Z.put("/".concat(e),(0,E.Z)((0,E.Z)({},a),{},{isFollowing:!a.isFollowing,followers:a.isFollowing?a.followers-1:a.followers+1}));case 7:return i=n.sent,n.abrupt("return",i.data);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),D=t(184),F=function(n){var e=n.tweetInfo,t=e.tweets,a=e.followers,c=e.avatar,l=e.id,p=e.isFollowing,u=(0,o.useState)(!1),d=(0,s.Z)(u,2),f=d[0],x=d[1],h=(0,o.useState)(null),b=(0,s.Z)(h,2),m=b[0],v=b[1];return(0,D.jsx)("li",{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(Z,{children:(0,D.jsx)("img",{width:"76",height:"22",src:g,alt:"logo"})}),(0,D.jsx)(j,{}),(0,D.jsxs)(k,{children:[(0,D.jsx)("img",{src:c,alt:"avatar"}),(0,D.jsxs)("p",{children:[t," tweets"]}),(0,D.jsxs)("p",{children:[new Intl.NumberFormat("en-US").format(m||a)," ","followers"]}),(0,D.jsx)("button",{className:p||f?"active":"passive",type:"button",id:l,onClick:function(n){function e(){return e=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y(e);case 3:return t=n.sent,x(t.isFollowing),v(t.followers),n.abrupt("return",{followers:t.followers,isFollowing:t.isFollowing});case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(n.target.id)},children:p||f?"Following":"Follow"})]})]})})};var L,N,R,S,I=t.p+"static/media/slick.e874ae2396ded66230643590d42338cd.svg",P=b.ZP.div(L||(L=(0,h.Z)(["\n  padding: 20px;\n  margin: -15px 0 0 50%;\n\n  border-radius: 5px;\n  border: 1px solid #471ca9;\n  width: 160px;\n  list-style-type: none;\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    align-items: flex-start;\n    padding: 0;\n    gap: 0;\n  }\n\n  li {\n    text-align: left;\n    font-weight: 500;\n    font-size: 16px;\n    padding: 8px;\n    width: 90%;\n    border-bottom: 1px solid #471ca9;\n    cursor: pointer;\n  }\n"]))),C=function(n){var e=n.filter;return(0,D.jsx)(P,{children:(0,D.jsxs)("ul",{onClick:e,children:[(0,D.jsx)("li",{className:"all",children:"All"}),(0,D.jsx)("li",{className:"follow",children:"Follow"}),(0,D.jsx)("li",{className:"followings",children:"Followings"})]})})},T=b.ZP.button(N||(N=(0,h.Z)(["\n  width: 200px;\n  padding: 14px 28px;\n  background-color: #ebd8ff;\n  color: #373737;\n  border-radius: 5px;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 18px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-left: 50%;\n  margin-top: -70px;\n"]))),z=function(n){var e=n.filterTweets,t=(0,o.useState)(!1),r=(0,s.Z)(t,2),a=r[0],i=r[1];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(T,{onClick:function(n){i((function(n){return!n}))},children:["Filter",(0,D.jsx)("img",{src:I,alt:"slick"})]}),a&&(0,D.jsx)(C,{filter:function(n){e(n.target.className)}})]})},O=b.ZP.section(R||(R=(0,h.Z)(["\n  width: 100vw;\n  padding: 100px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n\n  ul {\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 0;\n    margin: 0 auto;\n  }\n"]))),J=t(689),U=t(87),V=(0,b.ZP)(U.OL)(S||(S=(0,h.Z)(["\n  width: 145px;\n  background-color: #ebd8ff;\n  color: #373737;\n  border-radius: 5px;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 18px;\n  padding: 14px 28px;\n  margin-right: 50%;\n"]))),G=t(870);c.Z.defaults.baseURL="https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users";var B=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={params:{isFollowing:e,page:t}},n.prev=1,n.next=4,c.Z.get("",a);case 4:return i=n.sent,n.abrupt("return",i.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),M=(0,o.lazy)((function(){return t.e(300).then(t.bind(t,300))})),_={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"};function A(){var n,e,t=(0,o.useState)([]),c=(0,s.Z)(t,2),u=c[0],d=c[1],f=(0,o.useState)(_.IDLE),x=(0,s.Z)(f,2),g=x[0],h=x[1],b=(0,o.useState)(2),w=(0,s.Z)(b,2),m=w[0],v=w[1],Z=(0,o.useState)(0),k=(0,s.Z)(Z,2),j=k[0],E=k[1],y=(0,J.TH)(),L=(0,o.useRef)(null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");function N(){return R.apply(this,arguments)}function R(){return(R=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l(1);case 3:return e=n.sent,n.next=6,p();case 6:t=n.sent,e.length>0?(d((0,a.Z)(e)),E(t),h(_.RESOLVED)):h(_.IDLE),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),h(_.REJECTED);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function S(n){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(_.PENDING),v(1),n.next=5,B(e,1);case 5:return t=n.sent,n.next=8,p(e);case 8:i=n.sent,t.length>0?(d((0,a.Z)(t)),E(i),v(2),h(_.RESOLVED)):h(_.IDLE),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),h(_.REJECTED);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}(0,o.useEffect)((function(){h(_.PENDING),N()}),[]);return g===_.PENDING?(0,D.jsxs)(O,{children:[(0,D.jsx)(G.rj,{color:"#471ca9"}),";"]}):g===_.REJECTED?(0,D.jsxs)(O,{children:[(0,D.jsx)(V,{to:L.current,children:"Back"}),(0,D.jsx)("p",{children:"Error"})]}):g===_.IDLE?(0,D.jsxs)(O,{children:[(0,D.jsx)(V,{to:L.current,children:"Back"}),(0,D.jsx)("p",{children:"No tweets :("})]}):g===_.RESOLVED?(0,D.jsxs)(O,{children:[(0,D.jsx)(V,{to:L.current,children:"Back"}),(0,D.jsx)(z,{filterTweets:function(n){"all"===n?(N(),v(2)):"follow"===n?S(!1):"followings"===n&&S(!0)}}),(0,D.jsx)("ul",{children:u.map((function(n){return(0,D.jsx)(F,{tweetInfo:n},n.id)}))}),u.length>=6&&u.length<j&&(0,D.jsx)(M,{onClick:function(){function n(){return n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l(e);case 3:t=n.sent,v((function(n){return n+1})),d([].concat((0,a.Z)(u),(0,a.Z)(t))),h(_.RESOLVED),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message),h(_.REJECTED);case 13:case"end":return n.stop()}}),n,null,[[0,9]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(m)}})]}):void 0}}}]);
//# sourceMappingURL=546.0b1b70e9.chunk.js.map