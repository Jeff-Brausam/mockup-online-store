(this.webpackJsonpstore_mockup=this.webpackJsonpstore_mockup||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"j",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"m",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"o",(function(){return u})),n.d(t,"p",(function(){return l})),n.d(t,"n",(function(){return s})),n.d(t,"k",(function(){return m})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return g})),n.d(t,"l",(function(){return I}));var r="ADD_ITEM",a="REMOVE_ITEM",o="REMOVE_ALL_OF_ITEM_TYPE",c="SET_STORE_INVENTORY",i="FETCH_STORE_INVENTORY_FAILED",u="STORE_ORDER_START",l="STORE_ORDER_SUCCESS",s="STORE_ORDER_FAILED",m="SEND_STORE_ORDER",d="FETCH_ORDER_SUCCESS",f="FETCH_ORDER_FAILED",E="AUTH_START",p="AUTH_SUCCESS",_="AUTH_FAIL",g="AUTH_LOGOUT",I="SET_AUTH_REDIRECT_PATH"},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(14),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},o=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return _})),n.d(t,"j",(function(){return g})),n.d(t,"f",(function(){return E})),n.d(t,"c",(function(){return I}));var r=n(1),a=n(15),o=n.n(a),c=function(e){return{type:r.a,itemID:e}},i=function(e){return{type:r.j,itemID:e}},u=function(){return function(e){o.a.get("https://mockup-online-store.firebaseio.com/storeInventory.json").then((function(t){var n;e((n=t.data,{type:r.m,storeInventory:n}))})).catch((function(t){e(function(e){return{type:r.h,error:e}}(t))}))}},l=n(14),s=function(e){return{type:r.i,itemID:e}},m=function(e,t){return function(n){o.a.post("https://mockup-online-store.firebaseio.com/orders.json?auth="+t,e).then((function(e){n(function(e){return{type:r.p,orderData:e}}(e.data))})).catch((function(e){n(function(e){return{type:r.n,error:e}}(e))}))}},d=function(e,t){return function(n){var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';o.a.get("https://mockup-online-store.firebaseio.com/orders.json"+a).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(l.a)(Object(l.a)({},e.data[o]),{},{id:[o]}));n((t=a,{type:r.g,orderData:t}))})).catch((function(e){n(function(e){return{type:r.f,error:e}}(e))}))}},f=function(e,t){return{type:r.e,idToken:e,userId:t}},E=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},p=function(e){return function(t){setTimeout((function(){t(E())}),1e3*e)}},_=function(e,t,n){return function(a){a({type:r.d});var c={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiwoy-R3tLmqwxcsaKxrqdC0GANV3KNY4";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiwoy-R3tLmqwxcsaKxrqdC0GANV3KNY4"),o.a.post(i,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(f(e.data.idToken,e.data.localId)),a(p(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},g=function(e){return{type:r.l,path:e}},I=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(E());else{var r=localStorage.getItem("userId");e(f(t,r)),e(p((n.getTime()-(new Date).getTime())/1e3))}}else e(E())}}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3goFp",active:"NavigationItems_active__3caxk",Notification:"NavigationItems_Notification__303gi",NotificationNumber:"NavigationItems_NotificationNumber__1FtF4"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__183tS",Open:"SideDrawer_Open__2axUj",Close:"SideDrawer_Close__3NC-4"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(30),c=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={StoreItem:"StoreItem_StoreItem__23DZe",Img:"StoreItem_Img__3n6UD",ButtonRow:"StoreItem_ButtonRow__uiFsQ",ItemName:"StoreItem_ItemName__1M8yk",View:"StoreItem_View__1BZ8l",Price:"StoreItem_Price__1TRiA"}},function(e,t,n){e.exports={ItemView:"ItemView_ItemView__2H4mA",Close:"ItemView_Close__dw_yR",ImgContainer:"ItemView_ImgContainer__1W9X2",Description:"ItemView_Description__MQYSA",SpecsContainer:"ItemView_SpecsContainer__59G_m"}},,,,function(e,t,n){e.exports=n.p+"static/media/MockupBrand.95571b5e.svg"},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__39-Js",Logo:"Toolbar_Logo__16S-k",DesktopOnly:"Toolbar_DesktopOnly__2tTjT"}},,,function(e,t,n){e.exports={Button:"Button_Button__1zOxp",ViewItemAdd:"Button_ViewItemAdd__34KGS",ViewItemCheckout:"Button_ViewItemCheckout__1aig1",SubmitSignIn:"Button_SubmitSignIn__DU7Bl",SignUpSwitch:"Button_SignUpSwitch__3B4uk",CartQuantity:"Button_CartQuantity__igMkG",Cancel:"Button_Cancel__2nEKE",Continue:"Button_Continue__2tOME",ContactFormSubmit:"Button_ContactFormSubmit__1HguE"}},function(e,t,n){e.exports={Store:"Store_Store__GUNPu",StoreError:"Store_StoreError__1QhMz"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(50),c=n.n(o);t.a=function(){return a.a.createElement("div",{className:c.a.Loader})}},,,,,,,,,,,,,,function(e,t,n){e.exports={StoreItems:"StoreItems_StoreItems__H_9fe"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2Xqcd"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1NaRz",load3:"Spinner_load3__1b1jp"}},function(e,t,n){e.exports={Modal:"Modal_Modal__zhhib"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2Drr3"}},function(e,t,n){e.exports={Footer:"Footer_Footer__3MkAA"}},function(e,t,n){e.exports={MainPage:"Layout_MainPage__HpAGu"}},function(e,t,n){e.exports=n(84)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return ye}));var r=n(0),a=n.n(r),o=n(24),c=n.n(o),i=n(6),u=n(16),l=n(5),s=n(47),m=(n(64),n(3)),d=n(14),f=n(19),E=n(18),p=n(21),_=n.n(p),g=function(e){return a.a.createElement("div",{className:_.a.StoreItem},a.a.createElement("div",{className:_.a.Img},a.a.createElement("img",{src:e.imgURL,alt:e.name})),a.a.createElement("p",null,a.a.createElement("strong",{className:_.a.ItemName},e.name)),a.a.createElement("div",{className:_.a.ButtonRow},a.a.createElement("span",null,a.a.createElement(E.a,{clicked:function(){return e.viewItem(e.id)}},"View")),a.a.createElement("span",null,a.a.createElement("p",{className:_.a.Price},"$",e.price)),a.a.createElement("span",null,a.a.createElement(E.a,{disabled:!1===e.stockedStatus[e.ind],clicked:function(){return e.addToCart(e.id)}},"Add To Cart"))))},I=n(48),v=n.n(I),S=function(e){var t=e.items.map((function(t,n){return a.a.createElement(g,{name:t.name,price:t.price.toLocaleString(),key:n,ind:n,id:t.itemID,imgURL:t.imgURL,viewItem:e.viewItem,addToCart:e.addToCart,stockedStatus:e.stockedStatus})}));return a.a.createElement("div",{className:v.a.StoreItems},t)},b=n(22),h=n.n(b),k=function(e){var t=Object.keys(e.items.specs).map((function(t){return e.items.specs[t]}));return a.a.createElement("div",{className:h.a.ItemView},a.a.createElement("span",null,a.a.createElement("h3",null,e.items.name),a.a.createElement("button",{className:h.a.Close,onClick:e.clicked},"X")),a.a.createElement("div",{className:h.a.ImgContainer},a.a.createElement("img",{src:e.items.imgURL,alt:e.items.name})),a.a.createElement("p",null,a.a.createElement("strong",null,"$",e.items.price.toLocaleString())),a.a.createElement("hr",null),a.a.createElement("p",{className:h.a.Description},e.items.description),a.a.createElement("span",null,a.a.createElement("div",{className:h.a.SpecsContainer},a.a.createElement("hr",null),a.a.createElement("p",null,"Processor: ",t[0]),a.a.createElement("p",null,"RAM: ",t[1]),a.a.createElement("p",null,"Storage: ",t[2]),a.a.createElement("p",null,"GPU: ",t[3])),a.a.createElement(E.a,{btnType:"ViewItemAdd",disabled:!1===e.stockedStatus[e.viewedIndex],clicked:function(){return e.addToCart(e.items.itemID)}},"Add To Cart"),a.a.createElement(E.a,{btnType:"ViewItemCheckout",clicked:e.toCheckout},"Checkout")))},w=n(49),O=n.n(w),C=function(e){return e.show?a.a.createElement("div",{className:e.show?O.a.Backdrop:null,onClick:e.clicked}):null},y=n(34),T=n(51),N=n.n(T),j=a.a.memo((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:N.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),(function(e,t){return t.show===e.show&&t.children===e.children})),D=n(31),R=n.n(D),x=n(12),L=function(e){var t=Object(r.useState)(null),n=Object(f.a)(t,2),o=n[0],c=n[1],i=Object(r.useState)(null),u=Object(f.a)(i,2),s=u[0],m=u[1],E=Object(r.useState)(!1),p=Object(f.a)(E,2),_=p[0],g=p[1],I=Object(l.c)((function(e){return e.onlineStore.storeInventory})),v=Object(l.c)((function(e){return e.onlineStore.inStockStatus})),b=Object(l.c)((function(e){return e.onlineStore.error})),h=Object(l.c)((function(e){return e.onlineStore.firstLoad})),w=Object(l.b)(),O=function(e){return w(x.a(e))},T=Object(r.useCallback)((function(){return w(x.e())}),[w]);Object(r.useEffect)((function(){h&&T()}),[T,h]);var N=function(){c(null),m(null),g(!_)},D=null,L=b?a.a.createElement("div",{className:R.a.StoreError},a.a.createElement(j,{show:b},"Failed to fetch store items. Try refreshing")):a.a.createElement(y.a,null);return I&&(L=a.a.createElement(S,{items:I,testRemove:function(e){return w(x.h(e))},viewItem:function(e){var t=I.findIndex((function(t){return t.itemID===e})),n=Object(d.a)({},I[t]);c(n),m(t),g(!_)},addToCart:O,stockedStatus:v}),_&&(D=a.a.createElement(k,{items:o,clicked:N,addToCart:O,viewedIndex:s,stockedStatus:v,toCheckout:function(){e.history.push("/checkout")}}))),a.a.createElement("section",{className:R.a.Store},a.a.createElement(C,{show:_,clicked:N}),D,L)},A=function(e){var t=Object(l.b)(),n=Object(r.useCallback)((function(){return t(x.f())}),[t]),o=Object(r.useCallback)((function(){return t(x.e())}),[t]);return Object(r.useEffect)((function(){n(),o()}),[n,o]),a.a.createElement(m.a,{to:"/"})},B=(n(83),n(26)),F=n.n(B),V=n(13),P=n.n(V),U=function(e){var t=Object(l.c)((function(e){return e.onlineStore.cart})),n=Object(l.c)((function(e){return null!==e.auth.token})),r=null;return t.length>=1&&(r=a.a.createElement("span",{className:P.a.Notification},a.a.createElement("p",{className:P.a.NotificationNumber},t.length))),a.a.createElement("ul",{className:P.a.NavigationItems},a.a.createElement("li",null,a.a.createElement(i.c,{to:"/",activeClassName:P.a.active,exact:!0},"Store")),n?a.a.createElement("li",null,a.a.createElement(i.c,{to:"/orders",activeClassName:P.a.active,exact:!0},"Orders")):null,a.a.createElement("li",null,a.a.createElement("span",null,r),a.a.createElement(i.c,{to:"/checkout",activeClassName:P.a.active,exact:!0},"Cart")),n?a.a.createElement("li",null,a.a.createElement(i.c,{to:"/logout",activeClassName:P.a.active},"Logout")):a.a.createElement("li",null,a.a.createElement(i.c,{to:"/signup",activeClassName:P.a.active,exact:!0},"SignUp")))},M=n(17),z=n.n(M),H=function(e){var t=[z.a.SideDrawer,z.a.Close];return e.show&&(t=[z.a.SideDrawer,z.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{show:e.show,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("button",{onClick:e.closed},"X"),a.a.createElement("div",{className:z.a.LogoDiv},a.a.createElement(i.b,{to:"/"},a.a.createElement("img",{src:F.a,className:z.a.Logo,alt:"Top Logo"}))),a.a.createElement("nav",null,a.a.createElement(U,null))))},G=n(52),Y=n.n(G),q=function(e){return a.a.createElement("div",{className:Y.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},K=n(27),$=n.n(K),Q=function(e){return a.a.createElement("header",{className:$.a.Toolbar},a.a.createElement(q,{clicked:e.drawerToggleClicked}),a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{show:e.show,closed:e.closed})),a.a.createElement("div",{className:$.a.Logo},a.a.createElement(i.b,{to:"/"},a.a.createElement("img",{src:F.a,alt:"Top Logo"}))),a.a.createElement("nav",{className:$.a.DesktopOnly},a.a.createElement(U,{hide:e.show})))},W=n(53),X=n.n(W),J=a.a.memo((function(){return a.a.createElement("footer",{className:X.a.Footer},a.a.createElement("p",null,"This is a portfolio project, no items will actually be sold."))})),Z=n(54),ee=n.n(Z),te=function(e){var t=Object(r.useState)(!1),n=Object(f.a)(t,2),o=n[0],c=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,{show:o,closed:function(){c(!1)},drawerToggleClicked:function(){c(!o)}}),a.a.createElement("main",{className:ee.a.MainPage},e.children),a.a.createElement(J,null))},ne=Object(m.g)((function(e){var t=Object(l.c)((function(e){return null!==e.auth.token})),o=Object(l.b)(),c=Object(r.useCallback)((function(){return o(x.c())}),[o]);Object(r.useEffect)((function(){c()}),[c]);var i=a.a.lazy((function(){return n.e(3).then(n.bind(null,94))})),u=a.a.lazy((function(){return n.e(5).then(n.bind(null,92))})),s=a.a.lazy((function(){return n.e(4).then(n.bind(null,93))})),d=a.a.createElement(m.d,null,a.a.createElement(m.b,{path:"/checkout",render:function(e){return a.a.createElement(i,e)}}),a.a.createElement(m.b,{path:"/signup",render:function(e){return a.a.createElement(s,e)}}),a.a.createElement(m.b,{path:"/",exact:!0,component:L}),a.a.createElement(m.a,{to:"/"}));return t&&(d=a.a.createElement(m.d,null,a.a.createElement(m.b,{path:"/checkout",render:function(e){return a.a.createElement(i,e)}}),a.a.createElement(m.b,{path:"/orders",render:function(e){return a.a.createElement(u,e)}}),a.a.createElement(m.b,{path:"/Logout",component:A}),a.a.createElement(m.b,{path:"/",exact:!0,component:L}),a.a.createElement(m.a,{to:"/"}))),a.a.createElement("div",{className:"App"},a.a.createElement(te,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},d)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=n(1),ae=n(4),oe={storeInventory:null,cart:[],totalPrice:0,itemInvCount:null,inStockStatus:null,error:!1,firstLoad:!0,ordering:!1},ce=function(e,t,n){return Object(ae.b)(e,{cart:!1!==e.inStockStatus[n]?e.cart.concat(e.storeInventory.filter((function(e){return e.itemID===t.itemID}))):e.cart,totalPrice:!1!==e.inStockStatus[n]?e.totalPrice+e.storeInventory[n].price:e.totalPrice,itemInvCount:e.itemInvCount.map((function(e,t){return t===n&&0!==e?e-1:e})),inStockStatus:e.itemInvCount[n]-1===0?e.inStockStatus.map((function(e,t){return t===n?e=!1:e})):e.inStockStatus,ordering:!0})},ie=function(e,t,n,r){return Object(ae.b)(e,{cart:e.cart.filter((function(e,t){return t!==n})),totalPrice:0!==e.cart.length?e.totalPrice-e.cart[n].price:0,itemInvCount:e.itemInvCount.map((function(t,n){return n===r&&t!==e.storeInventory[r].inventory?t+1:t})),inStockStatus:0===e.itemInvCount[r]?e.inStockStatus.map((function(e,t){return t===r?e=!0:e})):e.inStockStatus,ordering:!0})},ue=function(e,t,n,r){return Object(ae.b)(e,{cart:e.cart.filter((function(e){return e.itemID!==t.itemID})),totalPrice:0!==e.cart.length?e.totalPrice-e.cart[n].price*(e.storeInventory[r].inventory-e.itemInvCount[r]):0,itemInvCount:e.itemInvCount.map((function(t,n){return n===r&&t!==e.storeInventory[r].inventory?t=e.storeInventory[r].inventory:t})),inStockStatus:e.inStockStatus.map((function(e,t){return t===r?e=!0:e})),ordering:!0})},le=function(e,t){return Object(ae.b)(e,{error:!0})},se=function(e,t){return Object(ae.b)(e,{storeInventory:t.storeInventory,itemInvCount:t.storeInventory.map((function(e){return e.inventory})),inStockStatus:t.storeInventory.map((function(e){return e.inStock})),cart:[],firstLoad:!1,ordering:!1})},me=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,r=arguments.length>1?arguments[1]:void 0;switch(n.storeInventory&&(e=n.storeInventory.findIndex((function(e){return e.itemID===r.itemID})),t=n.cart.findIndex((function(e){return e.itemID===r.itemID}))),r.type){case re.a:return ce(n,r,e);case re.j:return ie(n,0,t,e);case re.i:return ue(n,r,t,e);case re.h:return le(n);case re.m:return se(n,r);default:return n}},de={orders:[],loading:!1,purchased:!1,userOrder:null,error:!1},fe=function(e,t){return Object(ae.b)(e,{loading:!0})},Ee=function(e,t){return Object(ae.b)(e,{orders:e.orders.concat(t.orderData),loading:!1,purchased:!0})},pe=function(e,t){return Object(ae.b)(e,{userOrder:t.orderData,loading:!1})},_e=function(e,t){return Object(ae.b)(e,{error:!0})},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.o:return fe(e);case re.k:return Ee(e,t);case re.g:return pe(e,t);case re.n:return _e(e);default:return e}},Ie={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ve=function(e,t){return Object(ae.b)(e,{error:null,loading:!0})},Se=function(e,t){return Object(ae.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},be=function(e,t){return Object(ae.b)(e,{error:t.error,loading:!1})},he=function(e,t){return Object(ae.b)(e,{token:null,userId:null})},ke=function(e,t){return Object(ae.b)(e,{authRedirectPath:t.path})},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.d:return ve(e);case re.e:return Se(e,t);case re.b:return be(e,t);case re.c:return he(e);case re.l:return ke(e,t);default:return e}},Oe=u.d,Ce=Object(u.c)({onlineStore:me,orders:ge,auth:we}),ye=Object(u.e)(Ce,Oe(Object(u.a)(s.a))),Te=a.a.createElement(l.a,{store:ye},a.a.createElement(i.a,{basename:"/mockup-online-store"},a.a.createElement(ne,null)));c.a.render(a.a.createElement(a.a.StrictMode,null,Te),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.b7e966de.chunk.js.map