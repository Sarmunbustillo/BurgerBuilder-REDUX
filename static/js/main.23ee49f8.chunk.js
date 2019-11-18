(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="URCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS ",s="PURCHASE_BURGER_FAIL",l="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",f="AUTH_START",m="AUTH_SUCCESS",b="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(18);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";var r=n(1),a=n(22),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-dylans-burger.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(18);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){var a,o;n((a=t.data.name,o=e,{type:r.l,orderId:a,orderData:o}))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},p=function(){return{type:r.m}},h=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("./orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(l({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},f=n(32),m=n.n(f),b=function(e,t){return{type:r.e,idToken:e,userId:t}},g=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},O=function(e){return function(t){setTimeout((function(){t(g())}),1e3*e)}},E=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGEr5QgOLSKxpQNMuM8q_Zv7KeUuPlm0Q";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGEr5QgOLSKxpQNMuM8q_Zv7KeUuPlm0Q"),m.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(b(e.data.idToken,e.data.localId)),a(O(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},v=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(g());else{var r=localStorage.getItem("userId");e(b(t,r)),e(O((n.getTime()-(new Date).getTime())/1e3))}}else e(g())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return g})),n.d(t,"j",(function(){return v})),n.d(t,"c",(function(){return _}))},,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__Wz5CQ",BreadTop:"BurgerIngredients_BreadTop__3dy1i",Seeds1:"BurgerIngredients_Seeds1__1KskB",Seeds2:"BurgerIngredients_Seeds2__3ALk3",Meat:"BurgerIngredients_Meat__Xw0K6",Cheese:"BurgerIngredients_Cheese__1y93Q",Salad:"BurgerIngredients_Salad__13K2s",Bacon:"BurgerIngredients_Bacon__2I2nP"}},,function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://react-dylans-burger.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__20xMQ",Open:"SideDrawer_Open__1l7j3",Close:"SideDrawer_Close__2u3w9",Logo:"SideDrawer_Logo__p9313"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__FJV2B",Label:"BuildControl_Label__2VWo0",Less:"BuildControl_Less__zU5Np",More:"BuildControl_More__1gl7G"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),s=n.n(u),l=n(64),d=n.n(l),p=n(11),h=n(30),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),s.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=f},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__WN17R",Logo:"Toolbar_Logo__1Wy_w",DekstopOnly:"Toolbar_DekstopOnly__3N15h"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__Ikp6P",active:"NavigationItem_active__2LkG9"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__19mz4",OrderButton:"BuildControls_OrderButton__3Zo4o",enable:"BuildControls_enable__1o2dc"}},function(e,t,n){e.exports={Button:"Button_Button__1wD8N",Success:"Button_Success__3HP74",Danger:"Button_Danger__3vDJY"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(65),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),s=n.n(u),l=n(11),d=n(31);t.a=function(e,t){return function(n){function u(){var e;return Object(r.a)(this,u),(e=Object(o.a)(this,Object(i.a)(u).call(this))).state={error:null},e.errorComfirmedHandler=function(){e.setState({error:null})},e.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return s.a.createElement(l.a,null,s.a.createElement(d.a,{show:this.state.error,modalClosed:this.errorComfirmedHandler},this.state.error?this.state.error.message:null),s.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(63),c=n.n(i),u=n(4),s=n(5),l=n(7),d=n(6),p=n(8),h=n(20),f=n.n(h),m=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:f.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:f.a.BreadTop},o.a.createElement("div",{className:f.a.Seeds1}),o.a.createElement("div",{className:f.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:f.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:f.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:f.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:f.a.Bacon});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(m,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please add ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(m,{type:"bread-top"}),t,o.a.createElement(m,{type:"bread-bottom"}))}},,function(e,t,n){e.exports={Content:"Layout_Content__1SDTm"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__ShAeA"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__XCxGA"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__CfbJj"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__DH7Nq"}},function(e,t,n){e.exports={Burger:"Burger_Burger__16MGe"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3Sb3k"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2dLMY",load2:"Spinner_load2__1s7fv"}},,,function(e,t,n){e.exports=n(96)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=(n(73),n(4)),u=n(5),s=n(7),l=n(6),d=n(8),p=n(21),h=n(15),f=n(11),m=n(56),b=n.n(m),g=n(33),O=n.n(g),E=n(57),v=n.n(E),_=n(58),y=n.n(_),j=function(e){return a.a.createElement("div",{className:y.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:v.a,alt:"Dylas's-Burger"}))},k=n(59),S=n.n(k),C=n(37),w=n.n(C),I=n(24),D=function(e){return a.a.createElement("li",{className:w.a.NavigationItem},a.a.createElement(I.b,{to:e.link,exact:!0,activeClassName:w.a.active},e.children))},N=function(e){return a.a.createElement("ul",{className:S.a.NavigationItems},a.a.createElement(D,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(D,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(D,{link:"/logout"},"Logout"):a.a.createElement(D,{link:"/auth"},"Authenticate"))},B=n(61),T=n.n(B),A=function(e){return a.a.createElement("div",{className:T.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},P=function(e){return a.a.createElement("header",{className:O.a.Toolbar},a.a.createElement(A,{clicked:e.DrawerToggleClicked}),a.a.createElement("div",{className:O.a.Logo},a.a.createElement(j,null)),a.a.createElement("nav",{className:O.a.DekstopOnly},a.a.createElement(N,{isAuthenticated:e.isAuth})))},L=n(25),R=n.n(L),x=n(30),H=function(e){var t=[R.a.SideDrawer,R.a.Close];return e.open&&(t=[R.a.SideDrawer,R.a.Open]),a.a.createElement(f.a,null,a.a.createElement(x.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:R.a.Logo},a.a.createElement(j,null)),a.a.createElement("nav",null,a.a.createElement(N,{isAuthenticated:e.isAuth}))))},M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.SideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.toggleSideDrawerHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(f.a,null,a.a.createElement(P,{isAuth:this.props.isAuthenticated,DrawerToggleClicked:this.toggleSideDrawerHandler}),a.a.createElement(H,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler}),a.a.createElement("main",{className:b.a.Content},this.props.children))}}]),t}(r.Component),U=Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(M),G=n(18),F=n(54),q=n(40),Q=n.n(q),W=n(27),z=n.n(W),K=function(e){return a.a.createElement("div",{className:z.a.BuildControl},a.a.createElement("div",{className:z.a.Label},e.label),a.a.createElement("button",{className:z.a.Lesss,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:z.a.More,onClick:e.added},"More"))},J=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],Y=function(e){return a.a.createElement("div",{className:Q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),J.map((function(t){return a.a.createElement(K,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientsRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN IN TO ORDER"))},Z=n(31),$=n(22),V=n(34),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(f.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(V.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(V.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ee=n(43),te=n(42),ne=n(16);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ae=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchased(),n.props.history.push("/checkout")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(G.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded"):a.a.createElement(te.a,null);return this.props.ings&&(r=a.a.createElement(f.a,null,a.a.createElement(F.a,{ingredients:this.props.ings}),a.a.createElement(Y,{ingredientAdded:this.props.onIngredientAdded,ingredientsRemoved:this.props.onIngredientRemoved,disabled:e,purchaseable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(X,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(f.a,null,a.a.createElement(Z.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),oe=Object(h.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ne.a(t))},onIngredientRemoved:function(t){return e(ne.i(t))},onInitIngredients:function(){return e(ne.e())},onInitPurchased:function(){return e(ne.h())},onSetAuthRedirectPath:function(t){return e(ne.j(t))}}}))(Object(ee.a)(ae,$.a)),ie=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(p.a,{to:"/"})}}]),t}(r.Component),ce=Object(h.b)(null,(function(e){return{onLogout:function(){return e(ne.f())}}}))(ie),ue=function(e){return function(t){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).state={Component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},se=ue((function(){return n.e(3).then(n.bind(null,104))})),le=ue((function(){return n.e(5).then(n.bind(null,105))})),de=ue((function(){return n.e(4).then(n.bind(null,103))})),pe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignIn()}},{key:"render",value:function(){var e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/auth",component:de}),a.a.createElement(p.b,{path:"/",exact:!0,component:oe}),a.a.createElement(p.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/Checkout",component:se}),a.a.createElement(p.b,{path:"/orders",component:le}),a.a.createElement(p.b,{path:"/logout",component:ce}),a.a.createElement(p.b,{path:"/auth",component:de}),a.a.createElement(p.b,{path:"/",exact:!0,component:oe}),a.a.createElement(p.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(U,null,a.a.createElement(p.d,null,e)))}}]),t}(r.Component),he=Object(p.g)(Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignIn:function(){return e(ne.c())}}}))(pe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=n(23),me=n(66),be=n(1),ge=n(3),Oe={ingredients:null,totalPrice:4,error:!1,building:!1},Ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},ve=function(e,t){var n=Object(G.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(ge.b)(e,r)},_e=function(e,t){var n=Object(G.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice-Ee[t.ingredientName],building:!0};return Object(ge.b)(e,r)},ye=function(e,t){return Object(ge.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},je=function(e,t){return Object(ge.b)(e,{error:!0})},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.a:return ve(e,t);case be.n:return _e(e,t);case be.p:return ye(e,t);case be.f:return je(e);default:return e}},Se={orders:[],loading:!1,purchased:!1},Ce=function(e,t){return Object(ge.b)(e,{purchased:!1})},we=function(e,t){return Object(ge.b)(e,{loading:!0})},Ie=function(e,t){var n=Object(ge.b)(t.orderData,{id:t.orderId});return Object(ge.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},De=function(e,t){return Object(ge.b)(e,{loading:!1})},Ne=function(e,t){return Object(ge.b)(e,{loading:!0})},Be=function(e,t){return Object(ge.b)(e,{orders:t.orders,loading:!1})},Te=function(e,t){return Object(ge.b)(e,{loading:!1})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.m:return Ce(e);case be.k:return we(e);case be.l:return Ie(e,t);case be.j:return De(e);case be.h:return Ne(e);case be.i:return Be(e,t);case be.g:return Te(e);default:return e}},Pe={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Le=function(e,t){return Object(ge.b)(e,{error:null,loading:!0})},Re=function(e,t){return Object(ge.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},xe=function(e,t){return Object(ge.b)(e,{error:t.error,loading:!1})},He=function(e,t){return Object(ge.b)(e,{token:null,userId:null})},Me=function(e,t){return Object(ge.b)(e,{authRedirectPath:t.path})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:return Le(e);case be.e:return Re(e,t);case be.b:return xe(e,t);case be.c:return He(e);case be.o:return Me(e,t);default:return e}},Ge=fe.d,Fe=Object(fe.c)({burgerBuilder:ke,order:Ae,auth:Ue}),qe=Object(fe.e)(Fe,Ge(Object(fe.a)(me.a))),Qe=a.a.createElement(h.a,{store:qe},a.a.createElement(I.a,null,a.a.createElement(he,null)));i.a.render(Qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[68,1,2]]]);
//# sourceMappingURL=main.23ee49f8.chunk.js.map