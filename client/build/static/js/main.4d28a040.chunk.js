(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(47)},24:function(e,a,t){},26:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),s=t.n(r),o=(t(24),t(4)),m=t(5),c=t(8),u=t(6),i=t(7),h=(t(26),t(9)),p=t(1),d=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).state={isLoggedIn:!1},e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleFormSubmit=e.handleFormSubmit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(i.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(h.a)({},t,n))}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var a=this.state;console.log(a)}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("h2",null,"Customer Sign In"),l.a.createElement("a",{href:"#"},"Or Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("p",{className:"form-label"},"User Name:"),l.a.createElement("input",{name:"cust-username",className:"form-control",type:"text",value:this.state.username,placeholder:"username",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Password:"),l.a.createElement("input",{name:"cust-password",className:"form-control",type:"password",value:this.state.password,placeholder:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-dark"},"Submit"))),l.a.createElement("br",null),l.a.createElement("h2",null,"Vendor Sign In"),l.a.createElement("a",{href:"#"},"Or Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("p",{className:"form-label"},"User Name:"),l.a.createElement("input",{name:"vendor-username",className:"form-control",type:"text",value:this.state.username,placeholder:"username",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Password:"),l.a.createElement("input",{name:"vendor-password",className:"form-control",type:"password",value:this.state.password,placeholder:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-dark"},"Submit")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"Food Chain is a farm-to-table app to track how food travels from growers to consumers.")))}}]),a}(n.Component),b=t(3),f=t.n(b),E=function(){return f.a.get("/api/consumers/")},g=function(e){return f.a.post("/api/consumers",e)},v=function(){return f.a.get("/api/vendors/")},C=function(e){return f.a.post("/api/vendors",e)},N=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).state={user_name:"",email:"",phone_number:"",user_password:"",person_name:""},e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleFormSubmit=e.handleFormSubmit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(i.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(h.a)({},t,n))}},{key:"handleFormSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state;E().then(function(e){e.data.map(function(e){return e.user_name===t.user_name?alert("That user name is already in use. Please select something else."):console.log("not a match")})}),t.user_name&&t.email&&t.phone_number&&t.user_password&&t.person_name?console.log("good entry"):alert("You must fill in all fields to create a profile."),g(t).then(function(e){console.log("Consumer saved! "+JSON.stringify(e.data)),a.setState({user_name:"",email:"",phone_number:"",user_password:"",person_name:""})}).catch(function(e){return console.log("ERR---\x3e>> src/components/ConsumerSignup.js line 34: "+e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("h1",null,"Customer Signup"),l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("p",{className:"form-label"},"Name:"),l.a.createElement("input",{name:"person_name",className:"form-control",type:"text",value:this.state.person_name,placeholder:"First Lasterson",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Email:"),l.a.createElement("input",{name:"email",className:"form-control",type:"text",value:this.state.email,placeholder:"me@me.com",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Mobile:"),l.a.createElement("input",{name:"phone_number",className:"form-control",type:"text",value:this.state.phone_number,placeholder:"789-123-4560",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"User Name:"),l.a.createElement("input",{name:"user_name",className:"form-control",type:"text",value:this.state.user_name,placeholder:"username",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Password:"),l.a.createElement("input",{name:"user_password",className:"form-control",type:"password",value:this.state.user_password,placeholder:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-dark"},"Submit"))))}}]),a}(n.Component),w=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).state={company_name:"",email:"",phone_number:"",website:"",location:"",user_name:"",user_password:""},e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleFormSubmit=e.handleFormSubmit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(i.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(h.a)({},t,n))}},{key:"handleFormSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state;v().then(function(e){e.data.map(function(e){return e.user_name===t.user_name?alert("That user name is already in use. Please select something else."):console.log("not a match")})}),t.company_name&&t.email&&t.phone_number&&t.user_password&&t.location&&t.user_name?console.log("good entry"):alert("You must fill in all fields to create a profile."),C(t).then(function(e){console.log("Vendor saved! "+JSON.stringify(e.data)),a.setState({company_name:"",email:"",phone_number:"",website:"",location:"",user_name:"",user_password:""})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("h1",null,"Vendor Signup"),l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("p",{className:"form-label"},"Company Name:"),l.a.createElement("input",{name:"company_name",className:"form-control",type:"text",value:this.state.company_name,placeholder:"Good Business, Inc.",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Location:"),l.a.createElement("input",{name:"location",className:"form-control",type:"text",value:this.state.location,placeholder:"City, State/Province, Country",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Email:"),l.a.createElement("input",{name:"email",className:"form-control",type:"text",value:this.state.email,placeholder:"me@goodbusiness.com",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Phone Number:"),l.a.createElement("input",{name:"phone_number",className:"form-control",type:"text",value:this.state.phone_number,placeholder:"789-123-4560",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Website:"),l.a.createElement("input",{name:"website",className:"form-control",type:"text",value:this.state.website,placeholder:"www.goodbusiness.com",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"User Name:"),l.a.createElement("input",{name:"user_name",className:"form-control",type:"text",value:this.state.user_name,placeholder:"username",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("p",{className:"form-label"},"Password:"),l.a.createElement("input",{name:"user_password",className:"form-control",type:"password",value:this.state.user_password,placeholder:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-dark"},"Submit"))))}}]),a}(n.Component),_=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement(d,null),l.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4d28a040.chunk.js.map