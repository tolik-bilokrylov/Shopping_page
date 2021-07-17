(this["webpackJsonpreact-gg"]=this["webpackJsonpreact-gg"]||[]).push([[0],{82:function(t,e,n){"use strict";n.r(e);var c,i,a,r,s,o=n(0),d=n(11),l=n.n(d),j=n(48),m=n(28),u=n(52),b=n(51),x=n.n(b),p=n(56),h=n(118),O=n(109),f=n(20),_=n(21),g=_.a.div(c||(c=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  border: 1px solid lightblue;\n  border-radius: 20px;\n  height: 100%;\n  \n  button {\n    border-radius: 0 0 20px 20px;\n  }\n\n  .item__img {\n    max-height: 500px;\n    object-fit:  cover;\n    border-radius:  20px 20px 0 0;\n  }\n\n  .item__text {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n  }\n"]))),v=n(4),C=function(t){var e=t.item,n=t.handleAddToCart;return Object(v.jsxs)(g,{children:[Object(v.jsx)("img",{className:"item__img",src:e.image,alt:e.title}),Object(v.jsxs)("div",{className:"item__text",children:[Object(v.jsx)("h3",{className:"item__title",children:e.title}),Object(v.jsx)("p",{className:"item__discription",children:e.description}),Object(v.jsxs)("h3",{className:"item__priceg",children:["$",e.price]})]}),Object(v.jsx)(O.a,{onClick:function(){return n(e)},children:"Add to catr"})]})},N=_.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightblue;\n  padding-bottom: 20px;\n\n  .cartitem {\n    flex: 1;\n  }\n\n  .cartitem__information,\n  .cartitem__buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .cartitem__img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px;\n  }\n"]))),w=function(t){var e=t.item,n=t.addToCart,c=t.removeFromCart;return Object(v.jsxs)(N,{children:[Object(v.jsxs)("div",{className:"cartitem",children:[Object(v.jsx)("h3",{className:"cartitem__title",children:e.title}),Object(v.jsxs)("div",{className:"cartitem__information",children:[Object(v.jsxs)("p",{className:"cartitem__cost",children:["Price: $",e.price]}),Object(v.jsxs)("p",{className:"cartitem__cost",children:["Total: $",(e.amount*e.price).toFixed(2)]})]}),Object(v.jsxs)("div",{className:"cartitem__buttons",children:[Object(v.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return c(e.id)},children:"-"}),Object(v.jsx)("p",{className:"cartitem__cost",children:e.amount}),Object(v.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return n(e)},children:"+"})]})]}),Object(v.jsx)("img",{className:"cartitem__img",src:e.image,alt:e.title})]})},y=_.a.aside(a||(a=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  width: 500px;\n  padding: 20px;\n"]))),k=function(t){var e,n=t.cartItems,c=t.addToCart,i=t.removeFromCart;return Object(v.jsxs)(y,{children:[Object(v.jsx)("h2",{className:"cart__title",children:"Your Shopping Cart"}),0===n.length?Object(v.jsx)("p",{children:"No items in cart."}):null,n.map((function(t){return Object(v.jsx)(w,{item:t,addToCart:c,removeFromCart:i},t.id)})),Object(v.jsxs)("h2",{className:"cart__title-total",children:["Total: $",(e=n,e.reduce((function(t,e){return t+e.amount*e.price}),0)).toFixed(2)]})]})},T=n(116),A=n(113),F=n(115),S=n(61),$=n.n(S),z=n(114),E=n(112),H=_.a.div(r||(r=Object(f.a)(["\nmargin: 40px;\n"]))),I=Object(_.a)(E.a)(s||(s=Object(f.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 20px;\n  top: 20px;\n"]))),J=function(){var t=Object(p.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fakestoreapi.com/products");case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var t,e=Object(o.useState)(!1),n=Object(u.a)(e,2),c=n[0],i=n[1],a=Object(o.useState)([]),r=Object(u.a)(a,2),s=r[0],d=r[1],l=Object(h.a)("products",J),b=l.data,x=l.isLoading,p=l.error,O=function(t){d((function(e){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{amount:e.amount+1}):e})):[].concat(Object(j.a)(e),[Object(m.a)(Object(m.a)({},t),{},{amount:1})])}))};return x?Object(v.jsx)(A.a,{}):p?Object(v.jsx)("div",{children:"Something went wrong..."}):Object(v.jsxs)(H,{children:[Object(v.jsx)(T.a,{anchor:"right",open:c,onClose:function(){return i(!1)},children:Object(v.jsx)(k,{cartItems:s,addToCart:O,removeFromCart:function(t){d((function(e){return e.reduce((function(e,n){return n.id===t?1===n.amount?e:[].concat(Object(j.a)(e),[Object(m.a)(Object(m.a)({},n),{},{amount:n.amount-1})]):[].concat(Object(j.a)(e),[n])}),[])}))}})}),Object(v.jsx)(I,{onClick:function(){return i(!0)},children:Object(v.jsx)(z.a,{badgeContent:(t=s,t.reduce((function(t,e){return t+e.amount}),0)),color:"error",children:Object(v.jsx)($.a,{})})}),Object(v.jsx)(F.a,{container:!0,spacing:3,children:null===b||void 0===b?void 0:b.map((function(t){return Object(v.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(C,{item:t,handleAddToCart:O})},t.id)}))})]})},L=n(117),P=n(60),Y=new L.a;l.a.render(Object(v.jsx)(P.a,{client:Y,children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.f1540193.chunk.js.map