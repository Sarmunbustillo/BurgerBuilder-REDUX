(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{102:function(e,t,a){e.exports={Auth:"Auth_Auth__3VjcD"}},103:function(e,t,a){"use strict";a.r(t);var n=a(18),i=a(4),l=a(5),r=a(7),u=a(6),o=a(8),s=a(0),c=a.n(s),d=a(15),h=a(21),p=a(97),g=a(34),m=a(102),v=a.n(m),f=a(16),b=a(42),j=a(3),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementCofig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementCofig:{type:"password",placeholder:"password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},a.inputChangedHandler=function(e,t){var i=Object(j.b)(a.state.controls,Object(n.a)({},t,Object(j.b)(a.state.controls[t],{value:e.target.value,valid:Object(j.a)(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:i})},a.submitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.isSignUp)},a.switchAuthModeHandler=function(){a.setState((function(e){return{isSignUp:!e.isSignUp}}))},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return c.a.createElement(p.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementCofig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}));this.props.loading&&(n=c.a.createElement(b.a,null));var i=null;this.props.error&&(i=c.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuthenticated&&(l=c.a.createElement(h.a,{to:this.props.authRedirectPath})),c.a.createElement("div",{className:v.a.Auth},l,i,c.a.createElement("form",{onSubmit:this.submitHandler},n,c.a.createElement(g.a,{btnType:"Success"},"SUBMIT")),c.a.createElement(g.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignUp?"SIGNIN":"SINGUP"))}}]),t}(s.Component);t.default=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(f.b(t,a,n))},onSetAuthRedirectPath:function(){return e(f.j("/"))}}}))(E)},97:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(98),r=a.n(l);t.a=function(e){var t=null,a=[r.a.Input];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(r.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.label},e.label),t)}},98:function(e,t,a){e.exports={Input:"Input_Input__2Boxr",Label:"Input_Label__21igQ",Invalid:"Input_Invalid__mUVp4"}}}]);
//# sourceMappingURL=4.49f1f5ae.chunk.js.map