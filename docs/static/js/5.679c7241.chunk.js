(this.webpackJsonpstore_mockup=this.webpackJsonpstore_mockup||[]).push([[5],{90:function(e,t,r){e.exports={Order:"Order_Order__1sLhU",OrderContainer:"Order_OrderContainer__2Km0o",ItemsContainer:"Order_ItemsContainer__d8Lvz"}},92:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(5),u=r(34),l=r(90),o=r.n(l),i=r(12);t.default=function(e){var t=Object(c.c)((function(e){return e.orders.userOrder})),r=Object(c.c)((function(e){return e.auth.token})),l=Object(c.c)((function(e){return e.auth.userId})),s=Object(c.b)(),m=Object(n.useCallback)((function(e,t){return s(i.d(e,t))}),[s]);Object(n.useEffect)((function(){m(r,l)}),[m,r,l]);var d=a.a.createElement(u.a,null);return t&&(d=t.map((function(e){return a.a.createElement("div",{key:e.id,className:o.a.OrderContainer},a.a.createElement("p",null,"ORDER ID: ",a.a.createElement("strong",null,e.id)),a.a.createElement("div",null,e.cart.map((function(e,t){return a.a.createElement("div",{className:o.a.ItemsContainer,key:t},a.a.createElement("p",null,"Item: ",e.name),a.a.createElement("p",null,"Price: $",e.price))}))),a.a.createElement("p",null,"Total: ",a.a.createElement("strong",null,"$",e.price)))}))),a.a.createElement("div",{className:o.a.Order},d)}}}]);
//# sourceMappingURL=5.679c7241.chunk.js.map