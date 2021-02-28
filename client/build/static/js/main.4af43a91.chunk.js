(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(31),i=n.n(s),c=(n(37),n(9)),r=n(10),l=n(12),h=n(11),b=(n(38),n(14)),j=n(2),u=n(0),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(u.jsx)(b.b,{to:"/",className:"navbar-brand",children:"Fruits Shop"}),Object(u.jsx)("div",{className:"collpase navbar-collapse",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(b.b,{to:"/",className:"nav-link",children:"Shops and stocks "})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(b.b,{to:"/add",className:"nav-link",children:"Add or remove stocks"})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(b.b,{to:"/edit",className:"nav-link",children:"Transfer fruits"})})]})})]})}}]),n}(a.Component),d=n(13),m=n.n(d);var O=function(e){var t=e.fruit;return Object(u.jsx)("td",{children:e.tableau.stock[t]})};var v=function(e){return Object(u.jsx)("th",{scope:"col",children:e.tableau.shopLocation})},x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={tableaux:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://fruit-shop-project.herokuapp.com/api/v1/list").then((function(t){return e.setState({tableaux:t.data})})).catch((function(e){console.log(e)}))}},{key:"tableList",value:function(e){return this.state.tableaux.map((function(t){return Object(u.jsx)(O,{fruit:e,tableau:t},t._id)}))}},{key:"tableHeader",value:function(){return this.state.tableaux.map((function(e){return Object(u.jsx)(v,{tableau:e},e._id)}))}},{key:"render",value:function(){return Object(u.jsxs)("table",{className:"table table-dark",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),this.tableHeader()]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:"Orange"}),this.tableList("orange")]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:"Banane"}),this.tableList("banane")]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:"Pomme"}),this.tableList("pomme")]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:"Fraise"}),this.tableList("fraise")]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:"Cerise"}),this.tableList("cerise")]})]})]})}}]),n}(a.Component),g=n(17),f=n(8);var C=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"Input-label",children:e.name}),Object(u.jsx)("input",{required:!0,type:"number",className:"Input-fruit",name:e.name,onChange:e.onChange})]})},L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChangeShopLocation=a.onChangeShopLocation.bind(Object(f.a)(a)),a.onChangeShopLocationDestination=a.onChangeShopLocationDestination.bind(Object(f.a)(a)),a.onChangeNumber=a.onChangeNumber.bind(Object(f.a)(a)),a.onSubmit=a.onSubmit.bind(Object(f.a)(a)),a.state={shopLocation:"",shopLocationDestination:"",stock:{orange:0,banane:0,pomme:0,fraise:0,cerise:0}},a}return Object(r.a)(n,[{key:"onChangeShopLocation",value:function(e){this.setState({shopLocation:e.target.value})}},{key:"onChangeShopLocationDestination",value:function(e){this.setState({shopLocationDestination:e.target.value})}},{key:"onChangeNumber",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={shopLocation:this.state.shopLocation,shopLocationDestination:this.state.shopLocationDestination,stock:{orange:this.state.orange,banane:this.state.banane,pomme:this.state.pomme,fraise:this.state.fraise,cerise:this.state.cerise}};console.log(JSON.stringify(t)),m.a.post("https://fruit-shop-project.herokuapp.com/api/v1/edit",t).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Transfer de fruits "}),Object(u.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Shop Location From: "}),Object(u.jsxs)("select",{ref:"shopLocationInput",required:!0,className:"form-control",value:this.state.shopLocation,onChange:this.onChangeShopLocation,children:[Object(u.jsx)("option",{value:"",children:"--Choisir--"}),Object(u.jsx)("option",{value:"marseille",children:"Marseille"}),Object(u.jsx)("option",{value:"paris",children:"Paris"}),Object(u.jsx)("option",{value:"dijon",children:"Dijon"}),Object(u.jsx)("option",{value:"nice",children:"Nice"}),Object(u.jsx)("option",{value:"lille",children:"Lille"})]}),Object(u.jsx)("label",{children:"Shop Location To: "}),Object(u.jsxs)("select",{ref:"shopLocationToInput",required:!0,className:"form-control",value:this.state.shopLocationDestination,onChange:this.onChangeShopLocationDestination,children:[Object(u.jsx)("option",{value:"",children:"--Choisir--"}),Object(u.jsx)("option",{value:"marseille",children:"Marseille"}),Object(u.jsx)("option",{value:"paris",children:"Paris"}),Object(u.jsx)("option",{value:"dijon",children:"Dijon"}),Object(u.jsx)("option",{value:"nice",children:"Nice"}),Object(u.jsx)("option",{value:"lille",children:"Lille"})]})]}),Object(u.jsx)(C,{name:"orange",value:this.state.stock.orange,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"banane",value:this.state.stock.banane,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"pomme",value:this.state.stock.pomme,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"fraise",value:this.state.stock.fraise,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"cerise",value:this.state.stock.cerise,onChange:this.onChangeNumber}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"submit",value:"Send",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChangeShopLocation=a.onChangeShopLocation.bind(Object(f.a)(a)),a.onChangeNumber=a.onChangeNumber.bind(Object(f.a)(a)),a.onSubmit=a.onSubmit.bind(Object(f.a)(a)),a.state={shopLocation:"",stock:{orange:0,banane:0,pomme:0,fraise:0,cerise:0}},a}return Object(r.a)(n,[{key:"onChangeShopLocation",value:function(e){this.setState({shopLocation:e.target.value})}},{key:"onChangeNumber",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={shopLocation:this.state.shopLocation,stock:{orange:this.state.orange,banane:this.state.banane,pomme:this.state.pomme,fraise:this.state.fraise,cerise:this.state.cerise}};console.log(JSON.stringify(t)),m.a.post("https://fruit-shop-project.herokuapp.com/api/v1/add",t).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Transfer de fruits "}),Object(u.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Shop Location where to add or remove fruits (you can use negative numbers): "}),Object(u.jsxs)("select",{ref:"shopLocationInput",required:!0,className:"form-control",value:this.state.shopLocation,onChange:this.onChangeShopLocation,children:[Object(u.jsx)("option",{value:"",children:"--Choisir--"}),Object(u.jsx)("option",{value:"marseille",children:"Marseille"}),Object(u.jsx)("option",{value:"paris",children:"Paris"}),Object(u.jsx)("option",{value:"dijon",children:"Dijon"}),Object(u.jsx)("option",{value:"nice",children:"Nice"}),Object(u.jsx)("option",{value:"lille",children:"Lille"})]})]}),Object(u.jsx)(C,{name:"orange",value:this.state.stock.orange,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"banane",value:this.state.stock.banane,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"pomme",value:this.state.stock.pomme,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"fraise",value:this.state.stock.fraise,onChange:this.onChangeNumber}),Object(u.jsx)(C,{name:"cerise",value:this.state.stock.cerise,onChange:this.onChangeNumber}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"submit",value:"Send",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),N=(n(63),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={response:{}},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/api/v1/posts").then((function(t){var n=t.data;e.setState({response:n}),console.log(n)}))}},{key:"render",value:function(){return Object(u.jsx)(b.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(p,{}),Object(u.jsx)("br",{}),Object(u.jsx)(j.a,{path:"/",exact:!0,component:x}),Object(u.jsx)(j.a,{path:"/add",component:k}),Object(u.jsx)(j.a,{path:"/edit",component:L})]})})}}]),n}(a.Component)),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.4af43a91.chunk.js.map