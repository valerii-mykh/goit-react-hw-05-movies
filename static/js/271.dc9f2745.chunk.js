"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[271],{639:function(n,e,r){r.d(e,{a:function(){return o}});var t="Loader_overlay__vojGq",i="Loader_ldsRoller__5cE1k",s=r(184);function o(){return(0,s.jsx)("div",{className:t,children:(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})}},271:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,i,s,o,a,u,c,x=r(439),p=r(791),d=r(87),l=r(639),f=r(168),h=r(444),m=h.ZP.input(t||(t=(0,f.Z)(["\nmargin: 20px 0px 20px 20px;\npadding: 6px 12px;\n  width: 250px;\n\n  border-radius:6px 0px 0px 6px;\n  border: 2px solid;\n  border-right:none;\n  outline: none;\n  \n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    border-color:#2196f3;\n  }\n"]))),v=h.ZP.button(i||(i=(0,f.Z)(["\n  padding: 6px 12px;\n  \n\n  border-radius:0px 6px 6px 0px;\n  border: 2px solid;\n  outline: none;\n  \n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    background-color:#b1e0f2;\n  }\n"]))),g=r(184),j=function(n){var e=n.setSearchParams,r=(0,p.useState)(""),t=(0,x.Z)(r,2),i=t[0],s=t[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(""!==i?{query:i.trim()}:{}),s("")},children:[(0,g.jsx)(m,{onChange:function(n){var e=n.target.value;s(e)},type:"text",name:"searchInput",value:i,placeholder:"Enter movie name"}),(0,g.jsx)(v,{children:"Search"})]})})},b=r(689),Z=h.ZP.h2(s||(s=(0,f.Z)(["\n  margin-left: 20px;\n  margin-bottom: 20px;\n"]))),_=h.ZP.ul(o||(o=(0,f.Z)(["\n  margin-left: 50px;\n  margin-bottom: 15px;\n  list-style-type: disc;\n"]))),y=h.ZP.li(a||(a=(0,f.Z)(["\n  margin-bottom: 5px;\n\n  :hover,\n  :focus {\n    color: #2196f3;\n  }\n"]))),S=function(n){var e=n.movies,r=(0,b.TH)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{children:"Search results"}),(0,g.jsx)(_,{children:e.map((function(n){return(0,g.jsx)(y,{children:(0,g.jsx)(d.rU,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})]})},w=r(861),P=r(757),k=r.n(P),L=r(388),q=function(){var n=(0,w.Z)(k().mark((function n(e){var r,t;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/search/movie",baseURL:"https://api.themoviedb.org/3",params:{api_key:"65573c76cf88d807ccbaf09ca79feb15",query:e}},n.next=3,(0,L.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),z=h.ZP.section(u||(u=(0,f.Z)(["\n  margin: 20px 20px;\n"]))),C=(h.ZP.input(c||(c=(0,f.Z)(["\nmargin: 20px 0px 20px 20px;\npadding: 6px 12px;\n  width: 250px;\n\n  border-radius:6px 0px 0px 6px;\n  border: 2px solid;\n  outline: none;\n  \n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    border-color:#2196f3;\n  }\n"]))),function(){var n,e=(0,p.useState)([]),r=(0,x.Z)(e,2),t=r[0],i=r[1],s=(0,p.useState)(!1),o=(0,x.Z)(s,2),a=o[0],u=o[1],c=(0,p.useState)(null),f=(0,x.Z)(c,2),h=f[0],m=f[1],v=(0,p.useState)(!1),b=(0,x.Z)(v,2),Z=b[0],_=b[1],y=(0,d.lr)(),w=(0,x.Z)(y,2),P=w[0],k=w[1],L=null!==(n=P.get("query"))&&void 0!==n?n:"";return(0,p.useEffect)((function(){L&&(_(!1),m(null),u(!0),q(L).then((function(n){i(n),0===n.length&&_(!0)})).catch((function(n){return m(n.message)})).finally((function(){u(!1)})))}),[L]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(z,{children:(0,g.jsx)(j,{setSearchParams:k})}),h&&(0,g.jsxs)("p",{style:{marginLeft:"50px"},children:["Oops, some error:",h]}),t.length>0&&(0,g.jsx)(z,{children:(0,g.jsx)(S,{movies:t})}),Z&&(0,g.jsx)("p",{style:{marginLeft:"50px"},children:"Oops...Nothing was found.Try to enter something else."}),a&&(0,g.jsx)(l.a,{})]})})}}]);
//# sourceMappingURL=271.dc9f2745.chunk.js.map