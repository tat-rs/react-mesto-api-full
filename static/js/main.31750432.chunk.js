(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),i=n.n(c),o=n(6),r=n(21),l=n(2),u=(n(27),n.p+"static/media/logo.bbe2a6ea.svg"),d=n(3),h=n(0);var j=function(e){return Object(h.jsxs)("div",{className:"button link",onClick:e.handleMenuClick,children:[Object(h.jsx)("span",{className:"button__line ".concat(e.isMenuOpen?"button__line_left":"")}),Object(h.jsx)("span",{className:"button__line ".concat(e.isMenuOpen?"button__line_hidden":"")}),Object(h.jsx)("span",{className:"button__line ".concat(e.isMenuOpen?"button__line_right":"")})]})};var m=function(e){function t(){e.signOutClick(),e.closeAllPopups()}return Object(h.jsxs)(h.Fragment,{children:[e.isMenuOpen&&Object(h.jsxs)("div",{className:"header__container header__container_type_burger-menu",children:[e.isLoggedIn?Object(h.jsx)("p",{className:"header__user",children:e.useremail}):"",Object(h.jsx)(o.b,{to:"/sign-in",className:"header__link-push link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(h.jsxs)("header",{className:"header page__header",children:[Object(h.jsx)(o.b,{className:"logo link",to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(h.jsxs)(d.d,{children:[Object(h.jsxs)(d.b,{exact:!0,path:"/",children:[Object(h.jsxs)("div",{className:"header__container header__container_type_profile-menu",children:[Object(h.jsx)("p",{className:"header__user",children:e.useremail}),Object(h.jsx)(o.b,{to:"/sign-in",className:"header__link-push link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(h.jsx)(j,{handleMenuClick:e.handleMenuClick,isMenuOpen:e.isMenuOpen})]}),Object(h.jsx)(d.b,{path:"/sign-up",children:Object(h.jsx)("div",{className:"header__container",children:Object(h.jsx)(o.b,{to:"/sign-in",className:"header__link-push link",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(h.jsx)(d.b,{path:"/sign-in",children:Object(h.jsx)("div",{className:"header__container",children:Object(h.jsx)(o.b,{to:"/sign-up",className:"header__link-push link header__link-push_color_grey",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})]})]})},b=s.a.createContext();var _=function(e){var t=s.a.useContext(b),n=!!e.card.owner&&e.card.owner._id===t._id,a="cards__delete ".concat(n?"cards__delete_visible":""),c=e.card.likes.some((function(e){return e===t._id})),i="cards__button ".concat(c?"cards__button_active":"");return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("li",{className:"cards__item",children:[Object(h.jsx)("button",{className:a,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onBtnDelete(),e.onCardClick({_id:e.card._id})}}),Object(h.jsx)("img",{className:"cards__image",src:"".concat(e.card.link),alt:"".concat(e.card.name),onClick:function(){e.onCardClick({name:e.card.name,link:e.card.link})}}),Object(h.jsxs)("div",{className:"cards__desc",children:[Object(h.jsx)("h2",{className:"cards__subtitle",children:e.card.name}),Object(h.jsxs)("div",{className:"cards__container-likes",children:[Object(h.jsx)("button",{className:i,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(h.jsx)("p",{className:"cards__sum-likes",children:e.card.likes.length})]})]})]})})};var p=function(e){var t=s.a.useContext(b);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("main",{className:"content page__section",children:[Object(h.jsxs)("section",{className:"profile page__profile",children:[Object(h.jsxs)("div",{className:"profile__container",children:[Object(h.jsx)("button",{className:"profile__image-edit",onClick:e.onEditAvatar,children:Object(h.jsx)("img",{className:"profile__image",src:t.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(h.jsxs)("div",{className:"profile__info",children:[Object(h.jsx)("h1",{className:"profile__name",children:t.name}),Object(h.jsx)("button",{className:"profile__edit link",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditProfile}),Object(h.jsx)("p",{className:"profile__desc",children:t.about})]})]}),Object(h.jsx)("button",{className:"profile__button link",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(h.jsx)("section",{className:"cards page__cards","aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438",children:Object(h.jsx)("ul",{className:"cards__list",children:e.cards.length>0&&e.cards.map((function(t){return Object(h.jsx)(_,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onBtnDelete:e.onBtnDelete},t._id)}))})})]})})};var f=function(){var e=(new Date).getFullYear();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("footer",{className:"footer page__section",children:Object(h.jsxs)("p",{className:"footer__author",children:["\xa9 ",e," Mesto Russia"]})})})},O=n(10),x=n(7);function g(){var e=s.a.useState({}),t=Object(l.a)(e,2),n=t[0],a=t[1],c=s.a.useState({}),i=Object(l.a)(c,2),o=i[0],r=i[1],u=s.a.useState(!1),d=Object(l.a)(u,2),h=d[0],j=d[1];return{values:n,errors:o,isValid:h,setValues:a,setErrors:r,setValid:j,handleChange:function(e){var t=e.target.name,s=e.target.value;a(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},t,s))),r(Object(x.a)(Object(x.a)({},o),{},Object(O.a)({},e.target.name,e.target.validationMessage))),j(e.target.closest(".form").checkValidity())}}}var v=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onMouseDown:e.onClose,children:Object(h.jsxs)("div",{className:"popup__container",onMouseDown:function(e){return e.stopPropagation()},children:[Object(h.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:e.onClose}),Object(h.jsxs)("form",{className:"popup__form form form_type_".concat(e.name),name:"form-".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[Object(h.jsx)("h2",{className:"form__title",children:"".concat(e.title)}),Object(h.jsx)("div",{className:"form__items",children:e.children}),Object(h.jsx)("button",{className:"form__button ".concat(e.disabledButton?"form__button_disabled":""),type:"submit",disabled:e.disabledButton,children:e.button})]})]})})})};var k=function(e){var t=s.a.useState(e.textOfButton),n=Object(l.a)(t,2),a=n[0],c=n[1],i=g(),o=i.values,r=i.errors,u=i.isValid,d=i.handleChange,j=i.setValues,m=i.setErrors,b=i.setValid;return s.a.useEffect((function(){b(!1),j({}),m({}),c(e.textOfButton)}),[e.isOpen,e.textOfButton,j,m,b]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(v,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textOfButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({subtitle:o.subtitle,link:o.link}),c("\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...")},button:a,disabledButton:!u,children:[Object(h.jsx)("input",{className:"form__item",id:"image-subtitle",type:"text",name:"subtitle",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:o.subtitle||"",onChange:d,required:!0}),Object(h.jsx)("span",{className:"form__error image-subtitle-error",children:!u&&r.subtitle}),Object(h.jsx)("input",{className:"form__item",id:"image-link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:o.link||"",onChange:d,required:!0}),Object(h.jsx)("span",{className:"form__error image-link-error",children:!u&&r.link})]})})};var N=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"popup popup_type_image ".concat(e.card.link&&"popup_opened"),onClick:e.onClose,children:Object(h.jsxs)("div",{className:"popup__container popup__container_transparent",onClick:function(e){return e.stopPropagation()},children:[Object(h.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(h.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(h.jsx)("h2",{className:"popup__subtitle",children:e.card.name})]})})})};var C=function(e){var t=s.a.useContext(b),n=s.a.useState(e.textOfButton),a=Object(l.a)(n,2),c=a[0],i=a[1],o=g(),r=o.values,u=o.errors,d=o.isValid,j=o.handleChange,m=o.setValues,_=o.setErrors,p=o.setValid;return s.a.useEffect((function(){p(!1),m(Object(x.a)(Object(x.a)({},r),{},{name:t.name,about:t.about})),_({}),i(e.textOfButton)}),[t,e.isOpen,e.textOfButton,m,_,p]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(v,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r.name,about:r.about}),i("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...")},button:c,disabledButton:!d,children:[Object(h.jsx)("input",{className:"form__item",id:"name-profile",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",value:r.name||"",onChange:j,required:!0}),Object(h.jsx)("span",{className:"form__error",children:!d&&u.name}),Object(h.jsx)("input",{className:"form__item",id:"desc-profile",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",value:r.about||"",onChange:j,required:!0}),Object(h.jsx)("span",{className:"form__error",children:!d&&u.about})]})})};var y=function(e){var t=s.a.useState(e.textOfButton),n=Object(l.a)(t,2),a=n[0],c=n[1],i=g(),o=i.values,r=i.errors,u=i.isValid,d=i.handleChange,j=i.setValues,m=i.setErrors,b=i.setValid;return s.a.useEffect((function(){b(!1),j({}),m({}),c(e.textOfButton)}),[e.isOpen,e.textOfButton,j,m,b]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(v,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:o.avatar}),c("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...")},button:a,disabledButton:!u,children:[Object(h.jsx)("input",{className:"form__item",id:"avatar-link",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",value:o.avatar||"",onChange:d,required:!0}),Object(h.jsx)("span",{className:"form__error avatar-link-error",children:!u&&r.avatar})]})})},S=n(12),B=n(13),w="https://mesto-api22.herokuapp.com",E=new(function(){function e(t){var n=t.url,a=t.headers;Object(S.a)(this,e),this._url=n,this._headers=a}return Object(B.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",credentials:"include",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",credentials:"include",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar/"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({name:e.subtitle,link:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",credentials:"include",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",credentials:"include",headers:this._headers}).then(this._checkResponse)}}]),e}())({url:w,headers:{"content-type":"application/json"}});var L=function(e){var t=s.a.useState(e.textOfButton),n=Object(l.a)(t,2),a=n[0],c=n[1];return s.a.useEffect((function(){c(e.textOfButton)}),[e.isOpen,e.textOfButton]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(v,{name:"delete-confirmation",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.onClose,button:a,onSubmit:function(t){t.preventDefault(),e.removeCard(e.card),c("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...")}})})};var P=function(e){var t=g(),n=t.values,a=t.errors,s=t.isValid,c=t.handleChange;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"form form_color_white",name:"sign-in",onSubmit:function(t){t.preventDefault(),e.onSubmit(n.email,n.password)},noValidate:!0,children:[Object(h.jsx)("h2",{className:"form__title form__title_place_sign-in",children:e.title}),Object(h.jsxs)("div",{className:"form__items form__items_color_white",children:[Object(h.jsx)("input",{className:"form__item form__item_color_white",id:"user-email",type:"email",name:"email",placeholder:"Email",value:n.email||"",onChange:c,required:!0}),Object(h.jsx)("span",{className:"form__error",children:!s&&a.email}),Object(h.jsx)("input",{className:"form__item form__item_color_white",id:"password",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:n.password||"",onChange:c,required:!0}),Object(h.jsx)("span",{className:"form__error",children:!s&&a.password})]}),Object(h.jsx)("button",{className:"form__button form__button_color_white",type:"submit",children:e.textOfButton})]})})};var M=function(e){return Object(h.jsx)("section",{className:"authorize",children:Object(h.jsx)(P,{title:e.title,onSubmit:e.onLogin,textOfButton:e.textOfButton})})};var R=function(e){return Object(h.jsxs)("section",{className:"authorize",children:[Object(h.jsx)(P,{title:e.title,onSubmit:e.onRegister,textOfButton:e.textOfButton}),Object(h.jsxs)("div",{className:"authorize__container",children:[Object(h.jsx)("p",{className:"authorize__text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(h.jsx)(o.b,{to:"/sign-in",className:"authorize__link link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},A=n.p+"static/media/icon-success.a9eb6caf.svg",D=n.p+"static/media/icon-error.d4ce2a26.svg";var V=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),onMouseDown:e.onClose,children:Object(h.jsxs)("div",{className:"popup__container",onMouseDown:function(e){return e.stopPropagation()},children:[Object(h.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:e.onClose}),Object(h.jsxs)("div",{className:"popup__result result",children:[Object(h.jsx)("img",{className:"result__image",src:e.isSuccess?A:D,alt:e.isSuccess?"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442":"\u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),Object(h.jsx)("p",{className:"result__text",children:e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})})},I=n(22),F=["component"],T=function(e){var t=e.component,n=Object(I.a)(e,F);return Object(h.jsx)(d.b,{exact:!0,path:n.path,children:function(){return n.isLoggedIn?Object(h.jsx)(t,Object(x.a)({},n)):Object(h.jsx)(d.a,{to:"/sign-in"})}})},U=new(function(){function e(t){var n=t.url,a=t.headers;Object(S.a)(this,e),this._url=n,this._headers=a}return Object(B.a)(e,[{key:"_checkResponse",value:function(e){try{if(200===e.status||201===e.status)return e.json()}catch(t){return t}}},{key:"register",value:function(e,t){return fetch("".concat(this._url,"/signup"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(this._checkResponse)}},{key:"authorize",value:function(e,t){return fetch("".concat(this._url,"/signin"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(this._checkResponse)}},{key:"getContent",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",credentials:"include",headers:this.headers}).then(this._checkResponse)}},{key:"logout",value:function(){return fetch("".concat(this._url,"/signout"),{method:"GET",credentials:"include",headers:this.headers}).then(this._checkResponse)}}]),e}())({url:w,headers:{"Content-Type":"application/json"}});var q=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),i=Object(l.a)(c,2),o=i[0],u=i[1],j=s.a.useState(!1),_=Object(l.a)(j,2),O=_[0],x=_[1],g=s.a.useState(!1),v=Object(l.a)(g,2),S=v[0],B=v[1],w=s.a.useState({}),P=Object(l.a)(w,2),A=P[0],D=P[1],I=s.a.useState({about:"",avatar:"",cohort:"",name:"",_id:""}),F=Object(l.a)(I,2),q=F[0],z=F[1],J=s.a.useState([]),G=Object(l.a)(J,2),H=G[0],W=G[1],Y=s.a.useState(!1),K=Object(l.a)(Y,2),Q=K[0],X=K[1],Z=s.a.useState(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=s.a.useState(!1),ae=Object(l.a)(ne,2),se=ae[0],ce=ae[1],ie=s.a.useState(!1),oe=Object(l.a)(ie,2),re=oe[0],le=oe[1],ue={lockScroll:s.a.useCallback((function(){var e=window.innerWidth-document.body.offsetWidth;document.body.style.overflow="hidden",document.body.style.paddingRight="".concat(e,"px")}),[]),unlockScroll:s.a.useCallback((function(){document.body.style.overflow="",document.body.style.paddingRight=""}),[])},de=ue.lockScroll,he=ue.unlockScroll,je=localStorage.getItem("email"),me=Object(d.g)();function be(){de(),a(!0)}function _e(){de(),u(!0)}function pe(){de(),x(!0)}function fe(e){de(),D(e)}function Oe(){de(),B(!0)}function xe(){X(!0)}function ge(){te(!1),a(!1),u(!1),x(!1),D({}),B(!1),he(),le(!1)}function ve(){te(!0)}function ke(e){var t=e.likes.some((function(e){return e===q._id}));E.changeLikeCardStatus(e._id,!t).then((function(t){W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}return s.a.useEffect((function(){Q&&je&&Promise.all([E.getAllCards(),E.getUserInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];W(n),z(a)})).catch((function(e){return console.log(e)})),je&&U.getContent().then((function(e){return e})).then((function(e){(null===e||void 0===e?void 0:e.email)&&localStorage.setItem("email",e.email),xe(),me.push("/")})).catch((function(e){return console.log(e)}))}),[Q]),Object(h.jsx)("div",{className:"page__content",children:Object(h.jsxs)(b.Provider,{value:q,children:[Object(h.jsx)(m,{isLoggedIn:Q,useremail:je,signOutClick:function(){U.logout().then((function(e){return e})).catch((function(e){return console.log(e)})),localStorage.removeItem("email"),X(!1),me.push("/sign-in")},handleMenuClick:function(){le(!re)},closeAllPopups:ge,isMenuOpen:re}),Object(h.jsxs)(d.d,{children:[Object(h.jsx)(T,{exact:!0,path:"/",isLoggedIn:Q,component:function(){return Object(h.jsx)(p,{onEditAvatar:be,onEditProfile:_e,onAddPlace:pe,onCardClick:fe,cards:H,onCardLike:ke,onBtnDelete:Oe})}}),Object(h.jsx)(T,{exact:!0,path:"/",isLoggedIn:Q,component:f}),Object(h.jsx)(d.b,{path:"/sign-up",children:Object(h.jsx)(R,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",textOfButton:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onRegister:function(e,t){U.register(e,t).then((function(e){e?(ce(!0),ve(),me.push("/sign-in")):(ve(),ce(!1))})).catch((function(e){return console.log(e)}))}})}),Object(h.jsx)(d.b,{path:"/sign-in",children:Object(h.jsx)(M,{title:"\u0412\u043e\u0439\u0442\u0438",textOfButton:"\u0412\u043e\u0439\u0442\u0438",onLogin:function(e,t){U.authorize(e,t).then((function(t){(null===t||void 0===t?void 0:t.token)&&(localStorage.setItem("email",e),xe(),me.push("/"))})).catch((function(){ve(),ce(!1)}))}})})]}),Object(h.jsx)(V,{isOpen:ee,onClose:ge,isSuccess:se}),Object(h.jsx)(C,{isOpen:o,onClose:ge,onUpdateUser:function(e){E.setUserInfo(e).then((function(e){z(e),ge()})).catch((function(e){return console.log(e)}))},textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(h.jsx)(k,{isOpen:O,onClose:ge,onAddPlace:function(e){E.addNewCard(e).then((function(e){W([e].concat(Object(r.a)(H))),ge()})).catch((function(e){return console.log(e)}))},textOfButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(h.jsx)(y,{isOpen:n,onClose:ge,onUpdateAvatar:function(e){E.setUserAvatar(e).then((function(e){z(e),ge()})).catch((function(e){return console.log(e)}))},textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(h.jsx)(N,{card:A,onClose:ge}),Object(h.jsx)(L,{isOpen:S,onClose:ge,card:A,textOfButton:"\u0414\u0430",removeCard:function(e){E.deleteCard(e._id).then((function(){W((function(t){return t.filter((function(t){return t._id!==e._id}))})),ge()})).catch((function(e){return console.log(e)}))}})]})})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(q,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.31750432.chunk.js.map