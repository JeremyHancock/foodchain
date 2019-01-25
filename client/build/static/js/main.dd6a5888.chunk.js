(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(92)},40:function(e,t,a){},42:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),s=a.n(r),l=(a(40),a(6)),c=a(7),i=a(10),u=a(8),d=a(9),m=(a(42),a(94)),h=a(96),p=a(95),b=a(15),g=a(1),f=a(5),v=a.n(f),E={getConsumer:function(e){return v.a.get("/api/consumers/"+e)},getConsumers:function(){return v.a.get("/api/consumers/")},deleteConsumer:function(e){return v.a.delete("/api/consumers/"+e)},postConsumer:function(e){return v.a.post("/api/consumers",e)},getVendor:function(e){return v.a.get("/api/vendors/user/"+e)},getVendorById:function(e){return v.a.get("/api/vendors/id/"+e)},getVendors:function(){return v.a.get("/api/vendors/")},deleteVendor:function(e){return v.a.delete("/api/vendors/"+e)},postVendor:function(e){return v.a.post("/api/vendors",e)},getProduct:function(e){return v.a.get("/api/products/"+e)},getProducts:function(){return v.a.get("/api/products/")},deleteProduct:function(e){return v.a.delete("/api/products/"+e)},postProduct:function(e){return v.a.post("/api/products",e)},getLink:function(e){return v.a.get("/api/links/"+e)},getLinks:function(){return v.a.get("/api/links/")},deleteLink:function(e){return v.a.delete("/api/links/"+e)},postLink:function(e){return v.a.post("/api/links",e)}};var _=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"Customer Sign In"),o.a.createElement("p",{onClick:e.isNew},"Or Sign Up"),o.a.createElement("div",{className:"form-group"},o.a.createElement("form",{onSubmit:e.handleConsumerFormSubmit},o.a.createElement("p",{className:"form-label"},"User Name:"),o.a.createElement("input",{name:"user_name",className:"form-control",type:"text",value:e.user_name,placeholder:"username",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Password:"),o.a.createElement("input",{name:"user_password",className:"form-control",type:"password",value:e.user_password,placeholder:"password",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-success"},"Submit"))))};var w=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"Vendor Sign In"),o.a.createElement("p",{onClick:e.isNew},"Or Sign Up"),o.a.createElement("div",{className:"form-group"},o.a.createElement("form",{onSubmit:e.handleVendorFormSubmit},o.a.createElement("p",{className:"form-label"},"User Name:"),o.a.createElement("input",{name:"user_name",className:"form-control",type:"text",value:e.user_name,placeholder:"username",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Password:"),o.a.createElement("input",{name:"user_password",className:"form-control",type:"password",value:e.user_password,placeholder:"password",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-success"},"Submit"))))};var C=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Customer Signup"),o.a.createElement("p",{onClick:e.isNew},"Or Sign In"),o.a.createElement("div",{className:"form-group"},o.a.createElement("form",{onSubmit:e.handleNewConsumerSubmit},o.a.createElement("p",{className:"form-label"},"Name:"),o.a.createElement("input",{name:"person_name",className:"form-control",type:"text",value:e.person_name,placeholder:"First Lasterson",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Email:"),o.a.createElement("input",{name:"email",className:"form-control",type:"text",value:e.email,placeholder:"me@me.com",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Mobile:"),o.a.createElement("input",{name:"phone_number",className:"form-control",type:"text",value:e.phone_number,placeholder:"789-123-4560",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"User Name:"),o.a.createElement("input",{name:"user_name",className:"form-control",type:"text",value:e.user_name,placeholder:"username",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Password:"),o.a.createElement("input",{name:"user_password",className:"form-control",type:"password",value:e.user_password,placeholder:"password",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-success"},"Submit"))))};var N=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Vendor Signup"),o.a.createElement("p",{onClick:e.isNew},"Or Sign In"),o.a.createElement("div",{className:"form-group"},o.a.createElement("form",{onSubmit:e.handleNewVendorSubmit},o.a.createElement("p",{className:"form-label"},"Company Name:"),o.a.createElement("input",{name:"company_name",className:"form-control",type:"text",value:e.company_name,placeholder:"Good Business, Inc.",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Location:"),o.a.createElement("input",{name:"location",className:"form-control",type:"text",value:e.location,placeholder:"City, State/Province, Country",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Email:"),o.a.createElement("input",{name:"email",className:"form-control",type:"text",value:e.email,placeholder:"me@goodbusiness.com",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Phone Number:"),o.a.createElement("input",{name:"phone_number",className:"form-control",type:"text",value:e.phone_number,placeholder:"789-123-4560",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Website:"),o.a.createElement("input",{name:"website",className:"form-control",type:"text",value:e.website,placeholder:"www.goodbusiness.com",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"User Name:"),o.a.createElement("input",{name:"user_name",className:"form-control",type:"text",value:e.user_name,placeholder:"username",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Password:"),o.a.createElement("input",{name:"user_password",className:"form-control",type:"password",value:e.user_password,placeholder:"password",onChange:e.handleChange}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-success"},"Submit"))))},k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:!1,isVendor:!1,isNew:!1,user_name:"",user_password:"",email:"",phone_number:"",person_name:"",website:"",location:"",company_name:""},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.checkVendorLogIn=a.checkVendorLogIn.bind(Object(g.a)(Object(g.a)(a))),a.checkConsumerLogIn=a.checkConsumerLogIn.bind(Object(g.a)(Object(g.a)(a))),a.handleConsumerFormSubmit=a.handleConsumerFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a.handleVendorFormSubmit=a.handleVendorFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a.isVendor=a.isVendor.bind(Object(g.a)(Object(g.a)(a))),a.isNew=a.isNew.bind(Object(g.a)(Object(g.a)(a))),a.handleNewVendorSubmit=a.handleNewVendorSubmit.bind(Object(g.a)(Object(g.a)(a))),a.handleNewConsumerSubmit=a.handleNewConsumerSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isVendor",value:function(){this.state.isVendor?this.setState({isVendor:!1}):this.setState({isVendor:!0})}},{key:"isNew",value:function(){this.state.isNew?this.setState({isNew:!1}):this.setState({isNew:!0})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(b.a)({},a,n))}},{key:"checkConsumerLogIn",value:function(e,t){e.user_name===t.user_name&&e.user_password===t.user_password&&this.setState({isLoggedIn:!0,user_name:e.user_name})}},{key:"handleConsumerFormSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;E.getConsumers().then(function(e){e.data.map(function(e){return t.checkConsumerLogIn(a,e)})}).then(function(e){t.state.isLoggedIn?window.location.pathname="/consumer/".concat(t.state.user_name):alert("Username or password is incorrect. Please try again or sign up.")}).catch(function(e){return console.log(e)})}},{key:"checkVendorLogIn",value:function(e,t){e.user_name===t.user_name&&e.user_password===t.user_password&&this.setState({isLoggedIn:!0,user_name:e.user_name})}},{key:"handleVendorFormSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;E.getVendors().then(function(e){e.data.map(function(e){return t.checkVendorLogIn(a,e)})}).then(function(e){t.state.isLoggedIn?window.location.pathname="/vendor/".concat(t.state.user_name):alert("Username or password is incorrect. Please try again or sign up.")}).catch(function(e){return console.log(e)})}},{key:"handleNewVendorSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;E.getVendors().then(function(e){e.data.map(function(e){return e.user_name===a.user_name?alert("That username is already in use. Please select something else."):console.log("not a match")})}),a.company_name&&a.email&&a.phone_number&&a.user_password&&a.location&&a.user_name?console.log("good entry"):alert("You must fill in all fields to create a profile."),E.postVendor(a).then(function(e){console.log("Vendor saved! "+JSON.stringify(e.data)),window.location.pathname="/vendor/".concat(t.state.user_name)}).catch(function(e){return console.log(e)})}},{key:"handleNewConsumerSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;E.getConsumers().then(function(e){e.data.map(function(e){return e.user_name===a.user_name?alert("That user name is already in use. Please select something else."):console.log("Unique!")})}),a.user_name&&a.email&&a.phone_number&&a.user_password&&a.person_name?console.log("All fields found!"):alert("You must fill in all fields to create a profile."),E.postConsumer(a).then(function(e){console.log("Consumer saved! "+JSON.stringify(e.data)),window.location.pathname="/consumer/".concat(t.state.user_name)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("form",null,o.a.createElement("h3",null,"I am a","  ",o.a.createElement("input",{type:"radio",name:"isConsumer",value:"consumer",checked:!this.state.isVendor,onChange:this.isVendor})," Consumer","  ",o.a.createElement("input",{type:"radio",name:"isVendor",value:"vendor",checked:this.state.isVendor,onChange:this.isVendor})," Producer"))),!this.state.isNew&&this.state.isVendor?o.a.createElement(w,Object.assign({},this.state,{handleChange:this.handleChange,handleVendorFormSubmit:this.handleVendorFormSubmit,isVendor:this.isVendor,isNew:this.isNew})):null,this.state.isNew||this.state.isVendor?null:o.a.createElement(_,Object.assign({},this.state,{handleChange:this.handleChange,handleConsumerFormSubmit:this.handleConsumerFormSubmit,isVendor:this.isVendor,isNew:this.isNew})),this.state.isNew&&!this.state.isVendor?o.a.createElement(C,Object.assign({},this.state,{handleChange:this.handleChange,handleNewConsumerSubmit:this.handleNewConsumerSubmit,isVendor:this.isVendor,isNew:this.isNew})):null,this.state.isNew&&this.state.isVendor?o.a.createElement(N,Object.assign({},this.state,{handleChange:this.handleChange,handleNewVendorSubmit:this.handleNewVendorSubmit,isVendor:this.isVendor,isNew:this.isNew})):null)}}]),t}(n.Component),y=(a(62),window.location.href.split("/")),O=y[4]?y[4].split("lki"):[];O.length;console.log(O);var S=[],j=[],V=[],P=[],F=[],L=[],x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={product_name:"",chemicals_used:"",harvest_date:"",product_createdAt:"",certified_organic:!1,company_names:[],vendor_locations:[],vendor_notes:[],link_locations:[],link_createdAt:[],link_notes:[],websites:[],code_data:O[0],product_id:O[1],link_id:O.slice(2),loading:!0},e.getVendorInfo=e.getVendorInfo.bind(Object(g.a)(Object(g.a)(e))),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.getProduct(this.state.product_id).then(function(e){L.push(e.data)}).then(function(){e.state.link_id.forEach(function(t){return E.getLink(t).then(function(t){j.push(t.data.createdAt),S.push(t.data.location),e.getVendorInfo(t.data.vendor_id)})})})}},{key:"getVendorInfo",value:function(e){var t=this,a=e;E.getVendorById(a).then(function(e){e.data&&(V.push(e.data.company_name),P.push(e.data.location),F.push(e.data.website))}).then(function(){t.setState({loading:!1,product_name:L[0].product_name,harvest_date:L[0].harvest_date,chemicals_used:L[0].chemicals_used,certified_organic:L[0].certified_organic,vendor_notes:L[0].vendor_notes,product_createdAt:L[0].createdAt,link_locations:S,link_createdAt:j,company_names:V,websites:F,vendor_locations:P})})}},{key:"render",value:function(){var e,t=this.state.company_names.slice(1,this.state.company_names.length),a=this.state.vendor_locations.slice(1,this.state.vendor_locations.length),n=this.state.link_createdAt.slice(1,this.state.link_createdAt.length),r=[];!function(){console.log(a.length);for(var o=0;o<a.length;o++)e="From there, it arrived at ".concat(t[o]," in ").concat(a[o]," on ").concat(n[o]),r.push(e)}();var s=r.map(function(e){return o.a.createElement("p",null," ",e," ")});return o.a.createElement("div",null,this.state.loading?o.a.createElement("div",null,"Loading ... "):o.a.createElement("div",null,o.a.createElement("p",null,"This ".concat(this.state.product_name," started out at ").concat(this.state.company_names[0]," \n                in ").concat(this.state.vendor_locations[0],'. They wanted us to tell you this: "').concat(this.state.vendor_notes,'"')),o.a.createElement("div",null,s)))}}]),t}(n.Component),I=a(16),U=a.n(I),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={result:"Please scan a product",scannerOn:!0},a.handleScan=function(e){if(e){var t=e.split("scan");console.log(t),a.setState({result:e,scannerOn:!1}),window.location.pathname="scan".concat(t[1])}},a.handleError=function(e){console.error(e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"scanner"},o.a.createElement(U.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}})),o.a.createElement("p",null,this.state.result))}}]),t}(n.Component),A=a(33);function R(){a(90).saveSvgAsPng(document.getElementById("qr"),"foodchain.png",{scale:10})}var T=function(e){return o.a.createElement("div",{className:"qr-holder"},o.a.createElement(A.QRCode,{onClick:R,id:"qr",bgColor:"#FFFFFF",fgColor:"#000000",level:"Q",style:{width:200},value:e.codedUrl}),o.a.createElement("button",{className:"btn btn-success",onClick:R},"Save"))},Y=(new Date).toLocaleDateString(),J=[],z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={product_id:1,product_name:"",link_id:1,harvest_date:Y,chemicals_used:"",glyphosphate:!1,atrazine:!1,metolachlorS:!1,dichloropropene:!1,twoFourD:!1,certified_organic:!1,vendor_notes:"",code_value:e.code_value,codedUrl:"",location:"",vendor_id:e.vendor_id},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleFormSubmit=a.handleFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a.isOrganic=a.isOrganic.bind(Object(g.a)(Object(g.a)(a))),a.hasChemicals=a.hasChemicals.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isOrganic",value:function(){this.state.certified_organic?this.setState({certified_organic:!1}):this.setState({certified_organic:!0})}},{key:"hasChemicals",value:function(){this.state.glyphosphate&&J.push("Glyphosphate"),this.state.atrazine&&J.push("Atrazine"),this.state.metolachlorS&&J.push("Metolachlor-S"),this.state.dichloropropene&&J.push("Dichloropropene"),this.state.twoFourD&&J.push("2,4-D"),console.log("Line 81: "+J),this.setState({chemicals_used:J.toString()}),console.log("Line 83: "+J.toString())}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,o=t.type,r=t.checked;"checkbox"===o?this.setState(Object(b.a)({},a,r)):this.setState(Object(b.a)({},a,n))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault(),this.hasChemicals();var a=this.state;a.harvest_date&&a.product_name&&a.certified_organic?console.log(this.state):alert("You must fill in all required fields to create a new product."),E.postProduct(a).then(function(e){console.log("Product saved! "+JSON.stringify(e.data)),t.setState({product_id:e.data.id}),console.log("New product's id: "+t.state.product_id)}).then(function(e){var a=t.state;E.postLink(a).then(function(e){console.log("Link saved! "+JSON.stringify(e.data)),t.setState({link_id:e.data.id,codedUrl:"https://foodchains.herokuapp.com/scan/".concat(a.code_value,"lki").concat(a.product_id,"lki").concat(e.data.id)}),console.log("New link's id: "+t.state.link_id)}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.codedUrl?o.a.createElement("div",null,o.a.createElement(T,{codedUrl:this.state.codedUrl}),o.a.createElement("div",null,o.a.createElement("p",null,"Success! You scanned a ",this.state.product_name,"."),o.a.createElement("p",null,"You have created the first link in a Foodchain! This code needs to be sent with your product so that it can be scanned by the next link in the Foodchain."),o.a.createElement("p",null,"Please save or print this image. It can be included with invoices, shipping manifests, or printed and displayed on shelf labels.")),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{className:"btn btn-success",onClick:this.props.windowReset},"Scan a code"),o.a.createElement("button",{className:"btn btn-success",onClick:this.props.isProduct},"Enter a new item"))):o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-success new-product-nav",onClick:this.props.isProduct},"Scan a code"),o.a.createElement("h1",null,"Create Product"),o.a.createElement("div",{className:"form-group"},o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("p",{className:"form-label"},"Product Name:"),o.a.createElement("input",{name:"product_name",className:"form-control",type:"text",value:this.state.product_name,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Harvest Date:"),o.a.createElement("input",{name:"harvest_date",className:"form-control",type:"text",value:this.state.harvest_date,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("p",{className:"form-label"},"Chemicals Used?"),o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",name:"glyphosphate",checked:this.state.glyphosphate,onChange:this.handleChange}),"  ","Glyphosphate","  "),o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",name:"atrazine",checked:this.state.atrazine,onChange:this.handleChange}),"  ","Atrazine","  "),o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",name:"metolachlorS",checked:this.state.metolachlorS,onChange:this.handleChange}),"  ","Metolchlor-S","  "),o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",name:"dichloropropene",checked:this.state.dichloropropene,onChange:this.handleChange}),"  ","Dichloropropene","  "),o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",name:"twoFourD",checked:this.state.twoFourD,onChange:this.handleChange}),"  ","2,4-D ",o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",name:"other",checked:this.state.other,onChange:this.handleChange}),"  ","Other (list):"," ",o.a.createElement("input",{id:"other",name:"other",className:"form-control",type:"text",value:this.state.other,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("p",null,"Is This Product Certified Organic?"),o.a.createElement("p",null,o.a.createElement("input",{type:"radio",name:"certified_organic",value:"true",checked:!0===this.state.certified_organic,onChange:this.isOrganic}),"Yes"," ",o.a.createElement("input",{type:"radio",name:"certified_organic",value:"false",checked:!1===this.state.certified_organic,onChange:this.isOrganic}),"  ","No"),o.a.createElement("p",{className:"form-label"},"Notes / Comments:"),o.a.createElement("input",{name:"vendor_notes",className:"form-control",type:"text",value:this.state.vendor_notes,placeholder:"Additional details...",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-success"},"Submit")," "))))}}]),t}(n.Component),B=(new Date).toLocaleTimeString(),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleScan=function(e){if(e){var t=e.split("scan")[1].split("lki");console.log(t),E.getProduct(t[1]).then(function(n){a.setState({result:e,scannerOn:!1,product_id:t[1],vendor_id:a.props.vendor_id,product_name:n.data.product_name,linkCreated:!0}),a.postLink()})}},a.handleError=function(e){console.error(e)},a.state={result:"",scannerOn:!0,vendor_id:a.props.vendor_id,link_date:B,product_id:a.props.product_id,location:a.props.location,link_id:"",codedUrl:"",linkCreated:!1},a.postLink=a.postLink.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"postLink",value:function(){var e=this,t=this.state;E.postLink(t).then(function(t){e.setState({link_id:t.data.id,codedUrl:"".concat(e.state.result,"lki").concat(t.data.id),linkCreated:!0}),console.log("Link saved! "+JSON.stringify(t.data))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.scannerOn?o.a.createElement("div",null,o.a.createElement(U.a,{className:"scanner",delay:300,onError:this.handleError,onScan:this.handleScan}),o.a.createElement("div",{className:"instructions"},o.a.createElement("p",null," Please scan the Foodchain code with your camera. Use the viewer box to center the code."),o.a.createElement("p",null,"If asked, please allow this application access to your camera."),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{className:"btn btn-success"},"Scan a code"),o.a.createElement("button",{className:"btn btn-success",onClick:this.props.isProduct},"Enter a new item")))):null,o.a.createElement("div",{className:"confirm-info"},this.state.linkCreated?o.a.createElement("div",null,o.a.createElement("p",null,"Success! You scanned a ",this.state.product_name,"."),o.a.createElement("p",null,"You have created a new link in the Foodchain! This code needs to be sent with your product so that it can be scanned by the next link in the Foodchain."),o.a.createElement("p",null,"Please save or print this image. It can be included with invoices, shipping manifests, or printed and displayed on shelf labels."),o.a.createElement("p",null,"The code you just scanned can be discarded. This code now contains all the information about this ",this.state.product_name,".")):o.a.createElement("div",null,o.a.createElement("ul",null,"Your information",o.a.createElement("li",null,"Company name: ",this.props.company_name),o.a.createElement("li",null,"Location: ",this.props.location)))),o.a.createElement("div",null,o.a.createElement("div",null,this.state.codedUrl?o.a.createElement("div",null,o.a.createElement(T,{codedUrl:this.state.codedUrl}),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{className:"btn btn-success",onClick:this.props.windowReset},"Scan a code"),o.a.createElement("button",{className:"btn btn-success",onClick:this.props.isProduct},"Enter a new item"))):null)))}}]),t}(n.Component),M=window.location.href.split("/")[4],W=window.location.pathname,G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).windowReset=function(){window.location.pathname=W},a.state={result:"Add a new product",newProduct:!1,newScan:!0,vendor_id:"",code_value:"cvl",company_name:"",location:"",website:"",product_id:""},a.windowReset=a.windowReset.bind(Object(g.a)(Object(g.a)(a))),a.isProduct=a.isProduct.bind(Object(g.a)(Object(g.a)(a))),a.getVendor=a.getVendor.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getVendor()}},{key:"getVendor",value:function(){var e=this;E.getVendor(M).then(function(t){e.setState({company_name:t.data.company_name,location:t.data.location,website:t.data.website,vendor_id:t.data.id}),console.log(e.state)})}},{key:"isProduct",value:function(){this.state.newProduct?this.setState({newProduct:!1,newScan:!0,result:"Scan a code"}):this.setState({newProduct:!0,newScan:!1,result:"Add a new product"})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.newProduct?o.a.createElement(z,{vendor_id:this.state.vendor_id,code_value:this.state.code_value,isProduct:this.isProduct,windowReset:this.windowReset}):o.a.createElement(q,{vendor_id:this.state.vendor_id,company_name:this.state.company_name,location:this.state.location,website:this.state.website,code_value:this.state.code_value,product_id:this.state.product_id,isProduct:this.isProduct,windowReset:this.windowReset}))}}]),t}(n.Component);var H=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))};var Q=function(){return o.a.createElement("nav",{className:"navbar navbar-dark navbar-fixed-top"},o.a.createElement("a",{className:"navbar-brand mx-auto navbar-text",href:"/"},"FOODCHAIN"))};var $=function(){return o.a.createElement("nav",{className:"footer"},o.a.createElement("div",{className:"footer-text"},"Food Chain is a farm-to-table app to track how food travels from growers to consumers."))},K=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Q,null),o.a.createElement(m.a,null,o.a.createElement("div",{className:"main"},o.a.createElement(h.a,null,o.a.createElement(p.a,{exact:!0,path:"/",component:k}),o.a.createElement(p.a,{path:"/consumer",component:D}),o.a.createElement(p.a,{path:"/scan",component:x}),o.a.createElement(p.a,{path:"/vendor",component:G}),o.a.createElement(p.a,{component:H})))),o.a.createElement($,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.dd6a5888.chunk.js.map