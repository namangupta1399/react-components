(this.webpackJsonpcomponents=this.webpackJsonpcomponents||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(18),c=n.n(r),o=n(7),s=n(8),i=n(10),u=n(9),m=n(6),p=n(1),b=(n(25),function(e,t){if(e.location.pathname===t)return{background:"none",color:"#fff",border:"2px solid #fff"}}),d=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".navbar-toggler").addEventListener("click",(function(){"none"===document.querySelector(".nav-items").style.display?document.querySelector(".nav-items").style.display="flex":"flex"===document.querySelector(".nav-items").style.display?document.querySelector(".nav-items").style.display="none":document.querySelector(".nav-items").style.display="flex"})),window.addEventListener("resize",(function(){window.innerWidth>=800&&(document.querySelector(".nav-items").style.display="flex")}))}},{key:"render",value:function(){var e=this.props.history;return l.a.createElement("div",{className:"navbar clearfix"},l.a.createElement("div",{className:"clearfix"},l.a.createElement(m.b,{to:"/",className:"navbar-brand"},"Company Logo"),l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png",className:"navbar-toggler",alt:""})),l.a.createElement("ul",{className:"nav-items"},l.a.createElement(m.b,{style:b(e,"/"),className:"nav-link",to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(m.b,{style:b(e,"/about"),className:"nav-link",to:"/about"},l.a.createElement("li",null,"About Us")),l.a.createElement(m.b,{style:b(e,"/resources"),className:"nav-link",to:"/resources"},l.a.createElement("li",null,"Resources")),l.a.createElement(m.b,{style:b(e,"/career"),className:"nav-link",to:"/career"},l.a.createElement("li",null,"Career")),l.a.createElement(m.b,{style:b(e,"/team"),className:"nav-link",to:"/team"},l.a.createElement("li",null,"Team")),l.a.createElement(m.b,{style:b(e,"/contact"),className:"nav-link",to:"/contact"},l.a.createElement("li",null,"Contact Us"))))}}]),n}(a.Component),f=Object(p.f)(d),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),"This is the about page.")}}]),n}(a.Component);n(31);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),"Hello there")},E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("div",{style:{background:"#f00"}},l.a.createElement("p",{style:{color:"#fff"}},"Error 404. Page not found")))}}]),n}(a.Component),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:v}),l.a.createElement(p.a,{path:"/about",component:y}),l.a.createElement(p.a,{component:E})))}}]),n}(a.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a4571339.chunk.js.map