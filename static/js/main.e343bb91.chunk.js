(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(13),s=n.n(c),i=n(3),d=n(15),o=(n(20),a.a.createContext({})),l=n(0),j=function(){var e=Object(r.useContext)(o);function t(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(l.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var n=e.login,r=e.name,a=e.picture,c=e.phone,s=e.email,i=e.dob;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(l.jsx)("img",{src:a.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(l.jsxs)("td",{"data-th":"Name",className:"align-middle",children:[r.first," ",r.last]}),Object(l.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(l.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(l.jsx)("a",{href:"mailto:"+s,target:"__blank",children:s})}),Object(l.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},n.uuid)})):Object(l.jsx)(l.Fragment,{})})},h=function(){var e=Object(r.useContext)(o);return console.log(e.developerState.headings[1].order),Object(l.jsx)("div",{className:"datatable mt-5",children:Object(l.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:e.developerState.headings.map((function(t){var n=t.name,r=t.width,a=t.order,c="nocarrot";return"Image"!==n&&(c="carrot".concat(a)),Object(l.jsxs)("th",{className:"col",id:n,style:{width:r},onClick:function(){e.handleSort(n)},children:[n,Object(l.jsx)("span",{className:c})]},n)}))})}),Object(l.jsx)(j,{})]})})},u=function(){var e=Object(r.useContext)(o);return Object(l.jsx)("div",{className:"input-group",children:Object(l.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})})},m=(n(22),function(){return Object(l.jsx)("div",{className:"bg-light",children:Object(l.jsx)("div",{className:"search-area col-4",children:Object(l.jsx)(u,{})})})}),b=n(14),f=n.n(b),O={getUsers:function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")}},g=(n(41),function(){var e=Object(r.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){O.getUsers().then((function(e){a(Object(i.a)(Object(i.a)({},n),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(l.jsxs)(o.Provider,{value:{developerState:n,handleSearchChange:function(e){var t=e.target.value,r=n.users.filter((function(e){return-1!=="".concat(e.name.first.toLowerCase()," ").concat(e.name.last.toLowerCase()).indexOf(t.toLowerCase())?e:""}));a(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:r}))},handleSort:function(e){var t=n.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var r=n.filteredUsers.sort((function(n,r){return"ascend"===t?void 0===n[e]?1:void 0===r[e]?-1:"name"===e?n[e].first.localeCompare(r[e].first):"dob"===e?n[e].age-r[e].age:n[e].localeCompare(r[e]):void 0===n[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(n[e].first):"dob"===e?r[e].age-n[e].age:r[e].localeCompare(n[e])})),c=n.headings.map((function(n){return n.order=n.name===e?t:n.order,n}));a(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:r,headings:c}))}},children:[Object(l.jsx)(m,{}),Object(l.jsx)("div",{className:"data-area",children:n.filteredUsers.length>0?Object(l.jsx)(h,{}):Object(l.jsx)("div",{})})]})}),x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(g,{})})},p=function(e){var t=e.children;return Object(l.jsx)("div",{className:"wrapper",children:t})},v=(n(42),function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"Employee Directory"}),Object(l.jsx)("p",{children:"Use the search box to find employees by name and click the column headings to sort."})]})});n(43);var N=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(p,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(x,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(44);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),C()}},[[45,1,2]]]);
//# sourceMappingURL=main.e343bb91.chunk.js.map