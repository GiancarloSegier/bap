(this.webpackJsonpbap=this.webpackJsonpbap||[]).push([[0],{1:function(e,t,a){e.exports={container:"Auth_container__3Qr6g",error:"Auth_error___ehqt",errorHidden:"Auth_errorHidden__2SXF3"}},11:function(e,t,a){e.exports={sideNav:"SideNav_sideNav__1ZDpT",rightMenu:"SideNav_rightMenu__2dGwl",navLink:"SideNav_navLink__26L7o",logo:"SideNav_logo__3-w2O",darkLink:"SideNav_darkLink__25X1D",active:"SideNav_active__Nmkx9",activeDark:"SideNav_activeDark__82bYz"}},17:function(e,t,a){e.exports={form:"Auth_form__1gJBF"}},33:function(e,t,a){e.exports=a(46)},4:function(e,t,a){e.exports={navbar:"Navbar_navbar__31-FB",rightMenu:"Navbar_rightMenu__2YlhS",navLink:"Navbar_navLink__1J5_h",logo:"Navbar_logo__1nFMD",darkLink:"Navbar_darkLink__3YW7i",active:"Navbar_active__3BiYV",activeDark:"Navbar_activeDark__G_Ua1"}},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),l=a.n(r),c=a(21),i=a.n(c),o=a(3),s=a(9),u=a(15),m=a(18),h=a(16),d=a(19),p=a(13),v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Hallo allemaalkes")))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Toolkit")))},E={home:"/",toolkit:"/toolkit",designstudio:"/designstudio",login:"/login",request:"/request",register:"/register",dashboard:"/dashboard",dashboardHome:"/dashboard",teams:"/dashboard/teams",requests:"/dashboard/requests",updates:"/dashboard/updates"},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Designstudio")))},b=a(1),N=a.n(b),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),""!==a.state.email&&""!==a.state.pwd?a.props.userStore.login(a.state.email,a.state.pwd).then((function(){a.props.userStore.authUser?a.props.history.push(E.dashboard):a.setState({error:!0,checkUser:!0})})):a.setState({error:!0})},a.checkInput=function(e,t){var n=e.target.value;a.setState({checkUser:!1}),"email"===t&&(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)?a.setState({email:n,emailError:!1}):a.setState({email:"",emailError:!0})),"pwd"===t&&a.setState({pwd:n}),a.checkFilledForm()},a.state={email:"",pwd:"",emailError:!1,error:!1,disabled:!0,checkUser:!1},console.log(e),a.emailInput=l.a.createRef(),a.pwdInput=l.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"checkFilledForm",value:function(){console.log(this.state),""!==this.state.email&&""!==this.state.pwd&&this.state.pwd.length>1?this.setState({disabled:!1,error:!1}):this.setState({disabled:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:N.a.container},l.a.createElement("form",{onSubmit:this.handleSubmit,className:N.a.form},l.a.createElement("h2",null,"Login"),l.a.createElement("input",{name:"email",id:"email=",placeholder:"email",ref:this.emailInput,className:N.a.input,onChange:function(t){return e.checkInput(t,"email")}}),l.a.createElement("p",{className:this.state.emailError?N.a.error:N.a.errorHidden},"You have to fill in a valid email"),l.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"password",ref:this.pwdInput,className:N.a.input,onChange:function(t){return e.checkInput(t,"pwd")}}),l.a.createElement("input",{type:"submit",value:"login",className:N.a.button}),l.a.createElement("p",{className:this.state.error?N.a.error:N.a.errorHidden},this.state.checkUser?"Incorrect email or password":"Please fill in all fields correctly"),l.a.createElement("p",{className:N.a.subLink},"No account?"," ",l.a.createElement(o.b,{to:E.request,className:N.a.link},"Send a request!")))))}}]),t}(l.a.Component),w=Object(n.b)("userStore")(Object(p.f)(k)),_=a(17),S=a.n(_),y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:S.a.form},l.a.createElement(w,null)))},j=Object(n.b)("userStore")(Object(p.f)((function(e){var t=e.userStore,n=(e.history,l.a.createRef()),r=l.a.createRef(),c=l.a.createRef(),i=l.a.createRef(),o=l.a.createRef();console.log(t);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:N.a.container},l.a.createElement("form",{onSubmit:function(e){var t=a(42),l=r.current.value,s=n.current.value,u=c.current.value,m=o.current.value,h=i.current.value,d=t();e.preventDefault(),fetch("http://127.0.0.1:4000/send-email?recipient=".concat(s,"&text=").concat(m,"&city=").concat(l,"&country=").concat(u,"&phone=").concat(h,"&id=").concat(d)).catch((function(e){return console.log(e)})),r.current.value="",n.current.value="",c.current.value="",o.current.value="",i.current.value=""},className:N.a.form},l.a.createElement("h2",null,"Request acces"),l.a.createElement("input",{type:"email",name:"email",id:"email=",placeholder:"email",ref:n,className:N.a.input}),l.a.createElement("input",{type:"text",name:"country",id:"country=",placeholder:"country",ref:c,className:N.a.input}),l.a.createElement("input",{type:"text",name:"city",id:"city",placeholder:"city",ref:r,className:N.a.input}),l.a.createElement("input",{type:"text",name:"phone",id:"phone=",placeholder:"phone",ref:i,className:N.a.input}),l.a.createElement("textarea",{name:"text",id:"text",placeholder:"text",ref:o,className:N.a.input}),l.a.createElement("input",{type:"submit",value:"send request",className:N.a.button}))))}))),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:S.a.form},l.a.createElement(j,null)))},L=a(4),C=a.n(L),x=Object(n.b)("userStore")(Object(n.c)((function(e){var t=e.userStore;return l.a.createElement("ul",{className:C.a.navbar},l.a.createElement("li",{className:C.a.logo},l.a.createElement(o.c,{exact:!0,className:C.a.navLink,to:E.home,activeClassName:C.a.active},"Logo")),l.a.createElement("div",{className:C.a.rightMenu},t.authUser?l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:C.a.navLink,to:E.dashboard,activeClassName:C.a.activeDark},"Dashboard")):null,l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:C.a.navLink,to:E.designstudio,activeClassName:C.a.active},"Designstudio")),l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:C.a.navLink,to:E.toolkit,activeClassName:C.a.activeDark},"Toolkit")),t.authUser?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,t.authUser.name),l.a.createElement(o.c,{exact:!0,onClick:function(e){t.logout()},className:C.a.navLink+" "+C.a.darkLink,to:E.home},"Log out")):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:C.a.navLink+" "+C.a.darkLink,to:E.login,activeClassName:C.a.activeDark},"Member login")),l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:C.a.navLink+" "+C.a.darkLink,to:E.request,activeClassName:C.a.activeDark},"Request acces")))))}))),F=a(32),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=t.currentTarget,n=Object(F.a)({},e.state);n[a.name]=a.value,e.setState(n)},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.userStore,r=a.history,l=e.state,c=l.email,i=l.pwd,o=l.name;n.register(o,c,i).then((function(){r.push(E.login)}))},e.state={email:"",pwd:"",pwd2:"",name:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.pwd,n=e.pwd2,r=e.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:N.a.container},l.a.createElement("form",{onSubmit:this.handleSubmit,className:N.a.form},l.a.createElement("h2",null,"Register"),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("input",{type:"test",name:"name",id:"name=",value:r,onChange:this.handleChange,className:N.a.input,placeholder:"Username"})),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("input",{type:"email",name:"email",id:"email=",value:t,onChange:this.handleChange,className:N.a.input,placeholder:"Email"})),l.a.createElement("label",{htmlFor:"username"},l.a.createElement("input",{type:"password",name:"pwd",id:"pwd",value:a,onChange:this.handleChange,className:N.a.input,placeholder:"Password"})),l.a.createElement("label",{htmlFor:"username"},l.a.createElement("input",{type:"password",name:"pwd2",id:"pwd2",ref:n,onChange:this.handleChange,className:N.a.input,placeholder:"Confirm password"})),l.a.createElement("input",{type:"submit",value:"Register",disabled:a&&a!==n||!t||!r||!a,className:N.a.button}),l.a.createElement("p",{className:N.a.subLink},"Have an account?"," ",l.a.createElement(o.b,{to:E.login,className:N.a.link},"Login!")))))}}]),t}(r.Component),D=Object(n.b)("userStore")(Object(p.f)(U)),q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:S.a.form},l.a.createElement(D,null)))},R=a(11),P=a.n(R),A=Object(n.b)("userStore")(Object(n.c)((function(e){e.userStore;return l.a.createElement("ul",{className:P.a.sideNav},l.a.createElement("div",{className:P.a.rightMenu},l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:P.a.navLink,to:E.dashboardHome,activeClassName:P.a.active},"Dashboard")),l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:P.a.navLink,to:E.teams,activeClassName:P.a.active},"Teams")),l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:P.a.navLink,to:E.requests,activeClassName:P.a.active},"Requests")),l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,className:P.a.navLink,to:E.updates,activeClassName:P.a.active},"Updates"))))}))),T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Teams")))},H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Requests")))},I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Updates")))},W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Goeiemorgen jurgen")))},M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:E.dashboardHome,exact:!0,strict:!0,component:W}),l.a.createElement(p.a,{path:E.teams,strict:!0,component:T}),l.a.createElement(p.a,{path:E.requests,strict:!0,component:H}),l.a.createElement(p.a,{path:E.updates,strict:!0,component:I})))},J=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(x,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:E.home,exact:!0,strict:!0,component:v}),l.a.createElement(p.a,{path:E.toolkit,strict:!0,component:f}),l.a.createElement(p.a,{path:E.designstudio,strict:!0,component:g}),l.a.createElement(p.a,{path:E.login,strict:!0,component:y}),l.a.createElement(p.a,{path:E.request,strict:!0,component:O}),l.a.createElement(p.a,{path:E.register,strict:!0,component:q}),this.props.userStore.authUser?l.a.createElement(p.a,{path:E.dashboard,strict:!0,component:M}):null))}}]),t}(r.Component),B=Object(n.b)("userStore")(Object(n.c)(J)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=a(2),Z=function e(){Object(s.a)(this,e),this.login=function(e,t){return fetch("/auth/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(200!==e.status)return e.json().then((function(e){Promise.reject(e)}));Promise.resolve()}))},this.logout=function(){return fetch("/auth/logout",{method:"POST",headers:{"content-type":"application/json"}})},this.register=function(e,t,a){return fetch("/auth/register",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,email:t,password:a})}).then((function(e){200===e.status?Promise.resolve():Promise.reject()}))}},X=a(31),$=a.n(X),Q=function(){var e=$.a.get("token");return e?function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(window.atob(t))}(e):null},V=function e(t){var a=this;Object(s.a)(this,e),this.authUser=null,this.setUser=function(e){return a.authUser=e},this.login=function(e,t){return a.authService.login(e,t).then((function(){a.setUser(Q()),Promise.resolve()})).catch((function(){a.setUser(null),Promise.reject()}))},this.register=function(e,t,n){return a.authService.register(e,t,n)},this.logout=function(){a.authService.logout().then((function(){return a.setUser(null)}))},this.rootStore=t,this.authService=new Z,this.setUser(Q())};Object(G.h)(V,{authUser:G.m,setUser:G.d});var K=V,ee=new function e(){Object(s.a)(this,e),this.userStore=new K(this)};a(45);i.a.render(l.a.createElement(n.a,ee,l.a.createElement(o.a,null,l.a.createElement(B,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.20096569.chunk.js.map