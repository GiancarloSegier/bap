(this.webpackJsonpbap=this.webpackJsonpbap||[]).push([[0],{10:function(e,t,a){e.exports={sideNav:"SideNav_sideNav__1ZDpT",rightMenu:"SideNav_rightMenu__2dGwl",navLink:"SideNav_navLink__26L7o",logo:"SideNav_logo__3-w2O",darkLink:"SideNav_darkLink__25X1D",active:"SideNav_active__Nmkx9",activeDark:"SideNav_activeDark__82bYz"}},22:function(e,t,a){e.exports={form:"Auth_form__1gJBF"}},27:function(e,t,a){e.exports={heading1:"Dashboard_heading1__3JUrb",avatar:"Dashboard_avatar__38snW"}},37:function(e,t,a){e.exports={heading1:"MyCommittee_heading1__3NbdN"}},4:function(e,t,a){e.exports={container:"Auth_container__3Qr6g",error:"Auth_error___ehqt",errorHidden:"Auth_errorHidden__2SXF3"}},40:function(e,t,a){e.exports=a(56)},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),i=a(18),o=a.n(i),c=a(6),l=a(5),u=a(9),m=a(14),h=a(13),p=a(15),d=a(19),v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("p",null,"Hallo allemaalkes")))},f=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("p",null,"Toolkit")))},g={home:"/",toolkit:"/toolkit",designstudio:"/designstudio",login:"/login",request:"/request",register:"/register",dashboard:"/dashboard",dashboardHome:"/dashboard",committees:"/dashboard/committees",requests:"/dashboard/requests",updates:"/dashboard/updates",myCommittee:"/dashboard/mycommittee",news:"/dashboard/news",planner:"/dashboard/planner"},b=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("p",null,"Designstudio")))},E=a(4),w=a.n(E),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),""!==a.state.email&&""!==a.state.password?a.props.userStore.login(a.state.email,a.state.password).then((function(){a.props.userStore.authUser?a.props.history.push(g.dashboard):a.setState({error:!0,checkUser:!0})})):a.setState({error:!0})},a.checkInput=function(e,t){var n=e.target.value;a.setState({checkUser:!1}),"email"===t&&(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)?a.setState({email:n,emailError:!1}):a.setState({email:"",emailError:!0})),"password"===t&&a.setState({password:n}),a.checkFilledForm()},a.state={email:"",password:"",emailError:!1,error:!1,disabled:!0,checkUser:!1},console.log(e),a.emailInput=s.a.createRef(),a.passwordInput=s.a.createRef(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"checkFilledForm",value:function(){console.log(this.state),""!==this.state.email&&""!==this.state.password&&this.state.password.length>1?this.setState({disabled:!1,error:!1}):this.setState({disabled:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:w.a.container},s.a.createElement("form",{onSubmit:this.handleSubmit,className:w.a.form},s.a.createElement("h2",null,"Login"),s.a.createElement("input",{name:"email",id:"email=",placeholder:"email",ref:this.emailInput,className:w.a.input,onChange:function(t){return e.checkInput(t,"email")}}),s.a.createElement("p",{className:this.state.emailError?w.a.error:w.a.errorHidden},"You have to fill in a valid email"),s.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"password",ref:this.passwordInput,className:w.a.input,onChange:function(t){return e.checkInput(t,"password")}}),s.a.createElement("input",{type:"submit",value:"login",className:w.a.button}),s.a.createElement("p",{className:this.state.error?w.a.error:w.a.errorHidden},this.state.checkUser?"Incorrect email or password":"Please fill in all fields correctly"),s.a.createElement("p",{className:w.a.subLink},"No account?"," ",s.a.createElement(c.b,{to:g.request,className:w.a.link},"Send a request!")))))}}]),t}(r.Component),S=Object(n.b)("userStore")(Object(d.f)(j)),O=a(22),y=a.n(O),N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:y.a.form},s.a.createElement(S,null)))},k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){var t=a(23)(),r=n.nameInput.current.value,s=n.surnameInput.current.value,i=n.organisationInput.current.value,o=n.phoneInput.current.value,c=n.state.email,l=n.messageInput.current.value;e.preventDefault(),""!==r&&""!==s&&""!==i&&""!==o&&""!==n.state.email&&""!==l?(fetch("http://127.0.0.1:4000/send-mail?type=request&sender=".concat(c,"&message=").concat(l,"&name=").concat(r,"&surname=").concat(s,"&phone=").concat(o,"&organisation=").concat(i,"&id=").concat(t)).catch((function(e){return console.log(e)})),n.props.requestStore.addRequest({id:t,name:r,surname:s,organisation:i,phone:o,email:c,message:l,job:{assignment:"Event Manager",privileges:"admin"},pending:!1}),n.nameInput.current.value="",n.emailInput.current.value="",n.surnameInput.current.value="",n.messageInput.current.value="",n.phoneInput.current.value="",n.organisationInput.current.value=""):n.setState({error:!0})},n.checkEmail=function(e,t){var a=e.target.value;n.setState({checkUser:!1}),"email"===t&&(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?n.setState({email:a,emailError:!1}):n.setState({email:"",emailError:!0})),n.checkFilledForm()},n.nameInput=s.a.createRef(),n.surnameInput=s.a.createRef(),n.organisationInput=s.a.createRef(),n.phoneInput=s.a.createRef(),n.emailInput=s.a.createRef(),n.messageInput=s.a.createRef(),n.state={emailError:!1,error:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"checkFilledForm",value:function(){console.log(this.state),""!==this.state.email&&this.setState({error:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:w.a.container},s.a.createElement("form",{onSubmit:this.handleSubmit,className:w.a.form},s.a.createElement("h2",null,"Request acces"),s.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"name",ref:this.nameInput,className:w.a.input}),s.a.createElement("input",{type:"text",name:"surname",id:"surname=",placeholder:"surname",ref:this.surnameInput,className:w.a.input}),s.a.createElement("input",{type:"text",name:"organisation",id:"organisation",placeholder:"organisation",ref:this.organisationInput,className:w.a.input}),s.a.createElement("input",{type:"tel",name:"phone",id:"phone=",placeholder:"phone",ref:this.phoneInput,className:w.a.input}),s.a.createElement("input",{type:"email",name:"email",id:"email=",placeholder:"email",ref:this.emailInput,className:w.a.input,onChange:function(t){return e.checkEmail(t,"email")}}),s.a.createElement("p",{className:this.state.emailError?w.a.error:w.a.errorHidden},"You have to fill in a valid email"),s.a.createElement("textarea",{name:"message",id:"message",placeholder:"message",ref:this.messageInput,className:w.a.input}),s.a.createElement("input",{type:"submit",value:"send request",className:w.a.button}),s.a.createElement("p",{className:this.state.error?w.a.error:w.a.errorHidden},"Please fill in all fields correctly"))))}}]),t}(r.Component),_=Object(n.b)("userStore","requestStore")(Object(d.f)(k)),C=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:y.a.form},s.a.createElement(_,null)))},q=a(7),F=a.n(q),x=Object(n.b)("userStore")(Object(n.c)((function(e){var t=e.userStore;return s.a.createElement("ul",{className:F.a.navbar},s.a.createElement("li",{className:F.a.logo},s.a.createElement(c.c,{exact:!0,className:F.a.navLink,to:g.home,activeClassName:F.a.active},"Logo")),s.a.createElement("div",{className:F.a.rightMenu},t.authUser?s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:F.a.navLink,to:g.dashboard,activeClassName:F.a.active},"Dashboard")):null,s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:F.a.navLink,to:g.designstudio,activeClassName:F.a.active},"Designstudio")),s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:F.a.navLink,to:g.toolkit,activeClassName:F.a.active},"Toolkit")),t.authUser?s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{className:F.a.avatar,src:t.authUser.avatarUrl,alt:"Avatar from ".concat(t.authUser.name)}),s.a.createElement("p",{className:F.a.navLink},t.authUser.name),s.a.createElement(c.c,{strict:!0,onClick:function(e){t.logout()},className:F.a.navLink+" "+F.a.darkLink,to:g.home},"Log out")):s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:F.a.navLink+" "+F.a.darkLink,to:g.login,activeClassName:F.a.activeDark},"Member login")),s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:F.a.navLink+" "+F.a.darkLink,to:g.request,activeClassName:F.a.activeDark},"Request acces")))))}))),I=a(39),R=a(3),U=a.n(R),L=a(36),A=a.n(L),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(a.getRequestId());case 2:case"end":return e.stop()}}))},a.getRequestId=function(){var e,t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(a.props.location.search),t=e.get("id"),n.next=4,U.a.awrap(a.props.requestStore.getOne(t));case 4:case"end":return n.stop()}}))},a.handleChange=function(e){var t=e.currentTarget,n=Object(I.a)({},a.state);n[t.name]=t.value,a.setState(n)},a.handleSubmit=function(e){var t,n,r,s,i,o,c,l,u,m,h,p,d,v,f,b,E,w;return U.a.async((function(j){for(;;)switch(j.prev=j.next){case 0:return e.preventDefault(),t=a.props,n=t.userStore,r=t.committeeStore,s=t.requestStore,i=t.history,j.next=4,U.a.awrap(a.uploadAvatar());case 4:return o=a.state,c=o.password,l=o.avatarUrl,u=o.newPhone,m=a.props.requestStore.currentRequest,h=m.id,p=m.email,d=m.name,v=m.surname,f=m.phone,b=m.organisation,E=m.job,w=h,a.phone=f||u,console.log(l),j.next=11,U.a.awrap(n.register(d,v,p,c,E,f,b,w,l).then((function(){n.login(p,c)})).then((function(){r.addCommittee({id:w,name:b,raceday:new Date("2020-09-29"),city:"",country:"",description:""})})).then((function(){i.push(g.dashboard)})).then((function(){s.deleteRequest(a.props.requestStore.currentRequest)})));case 11:case"end":return j.stop()}}))},a.uploadAvatar=function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(fetch("http://localhost:4000/image-upload",{method:"POST",body:a.state.formData}).then((function(e){return e.json()})).then((function(e){a.setState({avatarUrl:e[0].url})})));case 2:case"end":return e.stop()}}))},a.changeFile=function(e){console.log(e);var t=Array.from(e);a.setState({uploading:!0});var n=new FormData;t.forEach((function(e,t){n.append(t,e)})),a.setState({formData:n})},a.state={password:"",password2:"",phone:"",images:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.password,a=e.password2,n=e.newPhone,r=this.props.requestStore.currentRequest,i=r.email,o=r.name,l=r.surname,u=r.phone;return i&&o&&l&&u?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:w.a.container},s.a.createElement("form",{onSubmit:this.handleSubmit,className:w.a.form},s.a.createElement("h2",null,"Register"),s.a.createElement(A.a,{withIcon:!0,buttonText:"Choose images",onChange:this.changeFile,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880,withPreview:!0,singleImage:!0}),s.a.createElement("label",{htmlFor:"password"},s.a.createElement("input",{type:"password",name:"password",id:"password",value:t,onChange:this.handleChange,className:w.a.input,placeholder:"Password"})),s.a.createElement("label",{htmlFor:"password2"},s.a.createElement("input",{type:"password",name:"password2",id:"password2",ref:a,onChange:this.handleChange,className:w.a.input,placeholder:"Confirm password"})),u?null:s.a.createElement("label",{htmlFor:"newPhone"},s.a.createElement("input",{type:"text",name:"newPhone",id:"newPhone",value:n,onChange:this.handleChange,className:w.a.input,placeholder:"phone"})),s.a.createElement("input",{type:"submit",value:"Register",disabled:t&&t!==a||!i||!o||!l||!t,className:w.a.button}),s.a.createElement("p",{className:w.a.subLink},"Have an account?"," ",s.a.createElement(c.b,{to:g.login,className:w.a.link},"Login!"))))):s.a.createElement("div",null,s.a.createElement("p",null,"Seems like you haven't received an invitation."),s.a.createElement("p",null,"Or you allready used your invitationlink."))}}]),t}(r.Component),D=Object(n.b)("userStore","jobStore","requestStore","committeeStore")(Object(d.f)(Object(n.c)(P))),J=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:y.a.form},s.a.createElement(D,null)))},M=a(10),H=a.n(M),T=Object(n.b)("userStore")(Object(n.c)((function(e){var t=e.userStore;return s.a.createElement("ul",{className:H.a.sideNav},s.a.createElement("div",{className:H.a.rightMenu},s.a.createElement("li",null,s.a.createElement(c.c,{exact:!0,className:H.a.navLink,to:g.dashboardHome,activeClassName:H.a.active},"Dashboard")),"supervisor"===t.privileges?s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:H.a.navLink,to:g.committees,activeClassName:H.a.active},"Committees")),s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:H.a.navLink,to:g.requests,activeClassName:H.a.active},"Requests")),s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:H.a.navLink,to:g.updates,activeClassName:H.a.active},"Updates"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:H.a.navLink,to:g.myCommittee,activeClassName:H.a.active},"Committee")),s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:H.a.navLink,to:g.planner,activeClassName:H.a.active},"Planner")),s.a.createElement("li",null,s.a.createElement(c.c,{strict:!0,className:H.a.navLink,to:g.news,activeClassName:H.a.active},"News")))))}))),W=Object(n.b)("jobStore")(Object(n.c)((function(e){var t=e.jobStore;return s.a.createElement(s.a.Fragment,null,t.jobs.length>0?s.a.createElement("div",null,s.a.createElement("ul",null,t.jobs.map((function(e){return s.a.createElement("li",null,e.assignment," - privileges: ",e.privileges)})))):s.a.createElement("p",null,"Add a new job, please."))}))),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).approveRequest=function(e){e.setPending(!0),a.setState({currentRequest:e}),a.props.onUpdateRequest(e)},a.state={edit:!1,currentRequest:e.currentRequest},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentRequest;return s.a.createElement("li",null,t.name," - ",t.organisation," - pending:"," ",String(t.pending),!0===t.pending?null:s.a.createElement("button",{onClick:function(){return e.approveRequest(t)}},"Approve request"))}}]),t}(r.Component),Y=Object(n.b)("requestStore")(Object(n.c)(z)),B=Object(n.b)("requestStore")(Object(n.c)((function(e){var t=e.requestStore,a=function(e){return U.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.awrap(t.updateRequest(e));case 2:return a.next=4,U.a.awrap(fetch("http://127.0.0.1:4000/send-mail?type=invite&id=".concat(e.id,"&name=").concat(e.name,"&recipient=").concat(e.email,"&organisation=").concat(e.organisation)).catch((function(e){return console.log(e)})));case 4:case"end":return a.stop()}}))};return s.a.createElement(s.a.Fragment,null,t.requests.length>0?s.a.createElement("div",null,s.a.createElement("ul",null,t.requests.map((function(e){return s.a.createElement(Y,{currentRequest:e,onUpdateRequest:a})})))):s.a.createElement("p",null,"Add a new request, please."))}))),Z=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("p",null,"Updates")))},G=a(27),$=a.n(G),X=Object(n.b)("userStore")(Object(n.c)((function(e){var t=e.userStore;return console.log(t.authUser),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("h1",{className:$.a.heading1},t.authUser.job.privileges),s.a.createElement("img",{className:$.a.avatar,src:t.authUser.avatarUrl,alt:"image"}),s.a.createElement("p",null,"Goeiemorgen ",t.authUser.name," ",t.authUser.surname)))}))),Q=a(37),V=a.n(Q),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={committeeId:e.userStore.authUser.committeeId},a.props.committeeStore.getOne(e.userStore.authUser.committeeId),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.committeeStore.currentCommittee.name;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("h1",null,"MyCommittee"),s.a.createElement("p",{className:V.a.heading1},"Team name: ",e)))}}]),t}(r.Component),ee=Object(n.b)("userStore","committeeStore")(Object(n.c)(K)),te=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("p",null,"News")))},ae=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("p",null,"Planner")))},ne=Object(n.b)("userStore")(Object(n.c)((function(e){var t=e.userStore.authUser.job.privileges;return"supervisor"===t?s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:g.dashboardHome,exact:!0,strict:!0,component:X}),s.a.createElement(d.a,{path:g.committees,strict:!0,component:W}),s.a.createElement(d.a,{path:g.requests,strict:!0,component:B}),s.a.createElement(d.a,{path:g.updates,strict:!0,component:Z}))):"admin"===t?s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:g.dashboardHome,exact:!0,strict:!0,component:X}),s.a.createElement(d.a,{path:g.myCommittee,strict:!0,component:ee}),s.a.createElement(d.a,{path:g.planner,strict:!0,component:ae}),s.a.createElement(d.a,{path:g.news,strict:!0,component:te}))):void 0}))),re=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement(x,null),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:g.home,exact:!0,strict:!0,component:v}),s.a.createElement(d.a,{path:g.toolkit,strict:!0,component:f}),s.a.createElement(d.a,{path:g.designstudio,strict:!0,component:b}),s.a.createElement(d.a,{path:g.login,strict:!0,component:N}),s.a.createElement(d.a,{path:g.request,strict:!0,component:C}),s.a.createElement(d.a,{path:g.register,strict:!0,component:J}),this.props.userStore.authUser?s.a.createElement(d.a,{path:g.dashboard,strict:!0,component:ne}):null))}}]),t}(r.Component),se=Object(n.b)("userStore")(Object(n.c)(re)),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=a(1),le=function e(){Object(l.a)(this,e),this.login=function(e,t){var a;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.awrap(fetch("/auth/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:t})}));case 2:if(200!==(a=n.sent).status){n.next=7;break}Promise.resolve(),n.next=8;break;case 7:return n.abrupt("return",a.json().then((function(e){Promise.reject(e)})));case 8:case"end":return n.stop()}}))},this.logout=function(){return fetch("/auth/logout",{method:"POST",headers:{"content-type":"application/json"}})},this.register=function(e,t,a,n,r,s,i,o,c){return fetch("/auth/register",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,surname:t,email:a,password:n,job:r,phone:s,organisation:i,committeeId:o,avatarUrl:c})}).then((function(e){200===e.status?Promise.resolve():Promise.reject()}))}},ue=a(38),me=a.n(ue),he=function(){var e=me.a.get("token");return e?function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(window.atob(t))}(e):null},pe=function e(t){var a=this;Object(l.a)(this,e),this.authUser=null,this.privileges="public",this.setUser=function(e){a.authUser=e,null!==e&&(a.privileges=e.job.privileges)},this.login=function(e,t){return a.authService.login(e,t).then((function(){a.setUser(he()),Promise.resolve()})).catch((function(){a.setUser(null),Promise.reject()}))},this.register=function(e,t,n,r,s,i,o,c,l){return U.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,U.a.awrap(a.authService.register(e,t,n,r,s,i,o,c,l));case 2:case"end":return u.stop()}}))},this.logout=function(){a.authService.logout().then((function(){return a.setUser(null)}))},this.rootStore=t,this.authService=new le,this.setUser(he())};Object(ce.h)(pe,{authUser:ce.m,setUser:ce.d,privileges:ce.m});var de=pe,ve=(a(23),function(){function e(t,a,n,r,s,i,o,c,u){var m=this;Object(l.a)(this,e),this.setId=function(e){return m.id=e},this.setName=function(e){return m.name=e},this.setSurname=function(e){return m.surname=e},this.setPhone=function(e){return m.phone=e},this.setOrganisation=function(e){return m.organisation=e},this.setEmail=function(e){return m.email=e},this.setMessage=function(e){return m.message=e},this.setJob=function(e){return m.job=e},this.setPending=function(e){return m.pending=e},this.updateFromServer=function(e){console.log(e),m.setId(e._id),m.setName(e.name),m.setSurname(e.surname),m.setPhone(e.phone),m.setOrganisation(e.organisation),m.setEmail(e.email),m.setMessage(e.message),m.setJob(e.job),m.setPending(e.pending)},this.id=t,this.name=a,this.surname=n,this.phone=r,this.organisation=s,this.email=i,this.message=o,this.job=c,this.pending=u}return Object(u.a)(e,[{key:"values",get:function(){return{id:this.id,name:this.name,surname:this.surname,phone:this.phone,organisation:this.organisation,email:this.email,message:this.message,job:this.job,pending:this.pending}}}]),e}());Object(ce.h)(ve,{id:ce.m,setId:ce.d,setName:ce.d,setSurname:ce.d,setOrganisation:ce.d,setPhone:ce.d,setEmail:ce.d,setMessage:ce.d,setJob:ce.d,setPending:ce.d,values:ce.e});var fe=ve,ge=function e(t){var a=this;Object(l.a)(this,e),this.getAll=function(){var e;return U.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.awrap(fetch("/api/".concat(a.entity)));case 2:return e=t.sent,console.log(e),t.next=6,U.a.awrap(e.json());case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}))},this.getOne=function(e){var t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,U.a.awrap(fetch("/api/".concat(a.entity,"/").concat(e)));case 3:if(t=n.sent,console.log(t),!0!==t.ok){n.next=11;break}return n.next=8,U.a.awrap(t.json());case 8:return n.abrupt("return",n.sent);case 11:return n.abrupt("return",null);case 12:case"end":return n.stop()}}))},this.create=function(e){var t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.awrap(fetch("/api/".concat(a.entity),a.getOptions("post",e.values)));case 2:return t=n.sent,n.next=5,U.a.awrap(t.json());case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}))},this.update=function(e){var t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,U.a.awrap(fetch("/api/".concat(a.entity,"/").concat(e.id),a.getOptions("put",e.values)));case 3:return t=n.sent,n.next=6,U.a.awrap(t.json());case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}))},this.delete=function(e){var t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.awrap(fetch("/api/".concat(a.entity,"/").concat(e.id),a.getOptions("delete")));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}))},this.getOptions=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={method:e.toUpperCase()};if(a||(n.headers={"content-type":"application/json"}),t)if(a){var r=new FormData;for(var s in t)r.append(s,t[s]);n.body=r}else n.body=JSON.stringify(t);return n},this.entity=t};Object(ce.f)({enforceActions:"observed"});var be=function e(t){var a=this;Object(l.a)(this,e),this.requests=[],this.currentRequest={},this.getAll=function(){a.api.getAll().then((function(e){return e.forEach(a._addRequest)}))},this.getOne=function(e){a.api.getOne(e).then((function(e){null!==e&&a._getCurrentRequest(e)}))},this.addRequest=function(e){var t=new fe;t.updateFromServer(e),a.requests.push(t),a.api.create(t).then((function(e){return t.updateFromServer(e)}))},this._addRequest=function(e){var t=new fe;t.updateFromServer(e),Object(ce.n)((function(){a.requests.push(t)}))},this._getCurrentRequest=function(e){var t=new fe;t.updateFromServer(e),Object(ce.n)((function(){a.currentRequest=t})),console.log(e)},this.updateRequest=function(e){a.api.update(e).then((function(t){return e.updateFromServer(t)}))},this.deleteRequest=function(e){a.requests.remove(e),a.api.delete(e)},this.rootStore=t,this.api=new ge("requests"),this.getAll()};Object(ce.h)(be,{requests:ce.m,addRequest:ce.d,deleteRequest:ce.d,getOne:ce.d,currentRequest:ce.m});var Ee=be,we=function(){function e(t,a,n){var r=this;Object(l.a)(this,e),this.setId=function(e){return r.id=e},this.setJob=function(e){return r.assignment=e},this.setPrivileges=function(e){return r.privileges=e},this.updateFromServer=function(e){r.setId(e._id),r.setJob(e.assignment),r.setPrivileges(e.privileges)},this.id=t,this.assignment=a,this.privileges=n}return Object(u.a)(e,[{key:"values",get:function(){return{id:this.id,assignment:this.assignment,privileges:this.privileges}}}]),e}();Object(ce.h)(we,{id:ce.m,setId:ce.d,setJob:ce.d,setPrivileges:ce.d,values:ce.e});var je=we;Object(ce.f)({enforceActions:"observed"});var Se=function e(t){var a=this;Object(l.a)(this,e),this.jobs=[],this.getAll=function(){a.api.getAll().then((function(e){return e.forEach(a._addJob)}))},this._addJob=function(e){var t=new je;t.updateFromServer(e),Object(ce.n)((function(){a.jobs.push(t)}))},this.rootStore=t,this.api=new ge("jobs"),this.getAll()};Object(ce.h)(Se,{jobs:ce.m});var Oe=Se,ye=function(){function e(t,a,n,r,s,i){var o=this;Object(l.a)(this,e),this.setId=function(e){return o.id=e},this.setName=function(e){return o.name=e},this.setRaceday=function(e){return o.raceday=e},this.setCity=function(e){return o.city=e},this.setCountry=function(e){return o.country=e},this.setDescription=function(e){return o.description=e},this.updateFromServer=function(e){console.log(e),o.setId(e.id),o.setName(e.name),o.setRaceday(e.raceday),o.setCity(e.city),o.setCountry(e.country),o.setDescription(e.description)},this.id=t,this.name=a,this.raceday=n,this.city=r,this.country=s,this.description=i}return Object(u.a)(e,[{key:"values",get:function(){return{id:this.id,name:this.name,raceday:this.raceday,city:this.city,country:this.country,description:this.description}}}]),e}();Object(ce.h)(ye,{id:ce.m,setId:ce.d,setName:ce.d,setRaceday:ce.d,setCity:ce.d,setCountry:ce.d,setDescription:ce.d,values:ce.e});var Ne=ye;Object(ce.f)({enforceActions:"observed"});var ke=function e(t){var a=this;Object(l.a)(this,e),this.committees=[],this.currentCommittee={},this.getAll=function(){a.api.getAll().then((function(e){return e.forEach(a._addCommittee)}))},this.getOne=function(e){a.api.getOne(e).then((function(e){a._getCurrentCommittee(e)}))},this.addCommittee=function(e){var t=new Ne;t.updateFromServer(e),a.committees.push(t),console.log(t),a.api.create(t).then((function(e){return t.updateFromServer(e)}))},this._addCommittee=function(e){console.log(e);var t=new Ne;t.updateFromServer(e),Object(ce.n)((function(){a.committees.push(t)}))},this._getCurrentCommittee=function(e){console.log(e);var t=new Ne;t.updateFromServer(e),Object(ce.n)((function(){a.currentCommittee=t})),console.log(e)},this.updateCommittee=function(e){a.api.update(e).then((function(t){return e.updateFromServer(t)}))},this.deleteCommittee=function(e){a.committees.remove(e),a.api.delete(e)},this.rootStore=t,this.api=new ge("committees")};Object(ce.h)(ke,{committees:ce.m,addCommittee:ce.d,deleteCommittee:ce.d,getOne:ce.d,currentCommittee:ce.m});var _e=ke,Ce=new function e(){Object(l.a)(this,e),this.userStore=new de(this),this.requestStore=new Ee(this),this.jobStore=new Oe(this),this.committeeStore=new _e(this)};a(55);o.a.render(s.a.createElement(n.a,Ce,s.a.createElement(c.a,null,s.a.createElement(se,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()},7:function(e,t,a){e.exports={navbar:"Navbar_navbar__31-FB",rightMenu:"Navbar_rightMenu__2YlhS",navLink:"Navbar_navLink__1J5_h",logo:"Navbar_logo__1nFMD",darkLink:"Navbar_darkLink__3YW7i",active:"Navbar_active__3BiYV",activeDark:"Navbar_activeDark__G_Ua1",avatar:"Navbar_avatar__2yIAA"}}},[[40,1,2]]]);
//# sourceMappingURL=main.9595f0ef.chunk.js.map