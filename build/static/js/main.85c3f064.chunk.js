(this.webpackJsonpjustinblayney=this.webpackJsonpjustinblayney||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),a=n(20),s=n.n(a),u=n(8),o=n(9),j=n(12),l=n(10),d=n(11),b=n(2),m=n(14);n(27);function O(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://dev.justinblayney.com/wp-json/menus/v1/menus/main-menu").then((function(e){return e.json()})).then((function(e){r(e.items)})).then((function(e){return console.log(e)}))})),Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object.keys(n).map((function(e,t){return Object(c.jsx)("li",{id:t,children:Object(c.jsx)(m.b,{to:n[e].slug,children:n[e].title})},t)}))})})}var h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("div",{className:"logo",children:"Logo"}),Object(c.jsx)(O,{})]})})})})}}]),n}(i.Component),f=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("footer",{children:"\xa9Justin Blayney"})}}]),n}(i.Component);var p=function(){return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h1",{children:"Home Page"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})};function x(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://dev.justinblayney.com/wp-json/menus/v1/menus/main-menu").then((function(e){return e.json()})).then((function(e){r(e.items)})).then((function(e){return console.log(e)}))})),Object(c.jsx)(c.Fragment,{children:Object.keys(n).map((function(e,t){return Object(c.jsx)(b.a,{exact:!0,path:n[e].slug,component:n[e].ID,id:t},t)}))})}var v=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{}),Object(c.jsx)(b.a,{exact:!0,path:"/",component:p}),Object(c.jsx)(x,{}),Object(c.jsx)(f,{})]})})}}]),n}(i.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.85c3f064.chunk.js.map