(this["webpackJsonppros-cons"]=this["webpackJsonppros-cons"]||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),i=a(6),u=a(15),o=a(5),s=a(3),d=a(16),p={cons:[""],pros:[""]},f=Object(n.createContext)(),m=function(){return Object(n.useContext)(f)};function v(e){var t=e.children,a=Object(n.useState)(null),l=Object(o.a)(a,2),r=l[0],i=l[1],u=function(e,t,a,n){var c=Object(s.a)(a);c.splice(e,1,t),n(c)},d=function(e,t,a){var n=Object(s.a)(t);n.splice(e,1),a(n)};return c.a.createElement(f.Provider,{value:{defaultData:p,selectedIndex:r,setSelectedIndex:i,handleRemoveData:d,handleChangeData:u,handleInputChangeData:function(e,t,a){var n=e.target.value,c=t.length,l=c-1;n||r===l||1===c?u(r,n,t,a):d(r,t,a),l===r&&n.trim()&&function(e){e((function(e){return[].concat(Object(s.a)(e),[""])}))}(a)}}},t)}a(26);var b=function(e){var t=e.data,a=e.setData,n=e.index,l=e.value,r=m(),i=r.setSelectedIndex,u=r.handleInputChangeData;return c.a.createElement("li",{key:n,onClick:function(){return i(n)}},c.a.createElement("input",{placeholder:"Fill Field",className:"input",value:l,onChange:function(e){return u(e,t,a)}}))},E="input",O=function(e){var t=e.data,a=e.setData,l=e.index,r=e.value,u=e.title,p=(Object(d.a)(e,["data","setData","index","value","title"]),Object(n.useRef)(null)),f=Object(i.c)({item:{index:l,title:u,value:r,prosData:t,setProsData:a,type:E},collect:function(e){return{isDragging:!!e.isDragging()}},canDrag:function(){if(r)return!0}}),m=Object(o.a)(f,2),v=m[0].isDragging,O=m[1],D=Object(i.d)({accept:E,drop:function(e){var n=l,c=Object(s.a)(t),r=e.index,i=c.splice(r,1);if(e.title===u)c.splice.apply(c,[n,0].concat(Object(s.a)(i))),a(c);else{var o=Object(s.a)(t),d=Object(s.a)(e.prosData);d.splice(r,1),e.setProsData(d),o.splice(n,0,e.value),a(o)}},canDrop:function(){if(r)return!0}}),h=Object(o.a)(D,2);h[0];return O((0,h[1])(p)),c.a.createElement("div",{ref:p,style:{opacity:v?.5:1}},c.a.createElement(b,{data:t,index:l,value:r,setData:a}))},D=(a(27),function(e){var t=e.title,a=m().defaultData,l="PROS"===t?a.pros:a.cons,r=Object(n.useState)(l),i=Object(o.a)(r,2),u=i[0],s=i[1];return c.a.createElement("div",{className:"pros-and-cons"},c.a.createElement("h3",null,t),c.a.createElement("hr",null),c.a.createElement("ol",null,u.map((function(e,a){return c.a.createElement(O,{key:a,data:u,index:a,value:e,title:t,setData:s})}))))}),h=(a(28),function(){return c.a.createElement("div",{className:"main"},c.a.createElement(i.b,{backend:u.a},c.a.createElement(D,{title:"PROS"}),c.a.createElement(D,{title:"CONS"})))}),j=(a(29),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Should I Eat At McDonalds?"))}),g=(a(30),function(){return c.a.createElement("div",{className:"app"},c.a.createElement(v,null,c.a.createElement(j,null),c.a.createElement(h,null)))});r.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4a31d19a.chunk.js.map