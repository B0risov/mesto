(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._title=n.name,this._link=n.link,this._id=n._id,this._ownerId=n.owner._id,this._userId=o,this._likes=n.likes,this._template=r,this._handlerCardClick=i,this._deleteCardClick=u,this._handlerLikeClick=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var e=this._template.content.querySelector(this._config.cardSelector).cloneNode(!0);return this._gridCardTitle=e.querySelector(this._config.titleSelector),this._gridCardImage=e.querySelector(this._config.imageSelector),e}},{key:"_generateButton",value:function(){this._buttonLike=this._element.querySelector(this._config.likeButtonSelector),this._buttonDelete=this._element.querySelector(this._config.buttonDeleteSelector)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._generateButton(),this._likeQuantity=this._element.querySelector(this._config.likeQuantitySelector),this._ownerId!==this._userId&&this._buttonDelete.remove(),this._likeQuantity.textContent=this._likes.length,this._gridCardTitle.textContent=this._title,this._gridCardImage.src=this._link,this._gridCardImage.alt=this._title,this._element.id=this._id,this._setEventListeners(),this._element}},{key:"_addEventDeleteCardListener",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){e._deleteCardClick(e._element)}))}},{key:"_addLikeActiveListener",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){return e._handlerLikeClick(e)}))}},{key:"_setEventListeners",value:function(){var e=this;this._addEventDeleteCardListener(),this._addLikeActiveListener(),this._gridCardImage.addEventListener("click",(function(){return e._handlerCardClick(e._title,e._link)}))}},{key:"updateLikes",value:function(e){this._likes=e,this._likeQuantity.textContent=e.length}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id==e._userId}))}},{key:"addLikeButton",value:function(){this._buttonLike.classList.add(this._config.likeActiveSelector)}},{key:"removeLikeButton",value:function(){this._buttonLike.classList.remove(this._config.likeActiveSelector)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputList=this._form.querySelectorAll(this._config.inputSelector),this._buttonSubmit=this._form.querySelector(this._config.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_generateElement",value:function(e){this._inputElement=e,this._errorElement=this._form.querySelector(".".concat(this._inputElement.name,"-error"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputError(t),e._toggleButtonState()}))}))}},{key:"_showInputError",value:function(){this._inputElement.classList.add(this._config.inputErrorClass),this._errorElement.classList.add(this._config.errorClass),this._errorElement.textContent=this._inputElement.validationMessage}},{key:"_hideInputError",value:function(){this._inputElement.classList.remove(this._config.inputErrorClass),this._errorElement.classList.remove(this._config.errorClass),this._errorElement.textContent=""}},{key:"_toggleInputError",value:function(e){this._generateElement(e),this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonSubmit.classList.remove(this._config.inactiveButtonClass),this._buttonSubmit.disabled=!1):(this._buttonSubmit.classList.add(this._config.inactiveButtonClass),this._buttonSubmit.disabled=!0)}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._generateElement(t),e._hideInputError()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._submitHandler=t,n._inputElements=n._form.querySelectorAll(".popup__user"),n._submit=n._form.querySelector(".popup__submit"),n}return t=u,n=[{key:"setInputValues",value:function(e){this._inputElements.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;l(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){l(d(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this._submit.textContent=e||"Сохранение..."}},{key:"_getInputValues",value:function(){var e={};return this._inputElements.forEach((function(t){e[t.name]=t.value})),e}}],n&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._cardTitleImage=t._popup.querySelector(".popup-card__title"),t._cardBigImage=t._popup.querySelector(".popup-card__image"),t}return t=u,(n=[{key:"open",value:function(e){b(w(u.prototype),"open",this).call(this),this._cardTitleImage.textContent=e.name,this._cardBigImage.src=e.link,this._cardBigImage.alt=e.name}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameInputProfile=document.querySelector(t),this._jobInputProfile=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameInputProfile.textContent,about:this._jobInputProfile.textContent}}},{key:"setUserInfo",value:function(e){this._nameInputProfile.textContent=e.name,this._jobInputProfile.textContent=e.about}},{key:"getUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O={cardSelector:".grid-card",titleSelector:".grid-card__title",imageSelector:".grid-card__image",likeButtonSelector:".grid-card__like",buttonDeleteSelector:".grid-card__delete",likeQuantitySelector:".grid-card__like-count",likeActiveSelector:"grid-card__like_active"},C=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__add-button"),P=document.querySelector("#grid-card-template"),I=document.querySelector(".profile__avatar-button");function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl="https://mesto.nomoreparties.co/v1/cohort-52/",this._headers={authorization:"26b767c8-a375-4aee-a307-2b3ce9d044ff","Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"_get",value:function(e){var t=this;return fetch(this._baseUrl+e,{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_post",value:function(e,t){var n=this;return fetch(this._baseUrl+e,{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(e){return n._getResponseData(e)}))}},{key:"_patch",value:function(e,t){var n=this;return fetch(this._baseUrl+e,{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(e){return n._getResponseData(e)}))}},{key:"_put",value:function(e){var t=this;return fetch(this._baseUrl+e,{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_delete",value:function(e){var t=this;return fetch(this._baseUrl+e,{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return this._get("cards")}},{key:"getUserInformation",value:function(){return this._get("users/me")}},{key:"setUserUpdate",value:function(e){return this._patch("users/me",e)}},{key:"setCreateCard",value:function(e){return this._post("cards",e)}},{key:"setDeleteCard",value:function(e){return this._delete("cards/".concat(e))}},{key:"setLikeCard",value:function(e){return this._put("cards/".concat(e,"/likes"))}},{key:"setDeleteLikeCard",value:function(e){return this._delete("cards/".concat(e,"/likes"))}},{key:"setUserAvatar",value:function(e){return this._patch("users/me/avatar",e)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function x(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupFormDeleteCard=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setPopupSubmitAction",value:function(e){this._handleSubmitClick=e}},{key:"setEventListeners",value:function(){var e=this;q(V(u.prototype),"setEventListeners",this).call(this),this._popupFormDeleteCard.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitClick()}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N,F=null,J=new D,M=new L(".profile__user-name",".profile__user-vocation",".profile__avatar"),z=new E("#popup-card-image"),G=new i((function(e){var t=Z(e);G.addItem(t)}),".grid-cards"),$=new y("#popup-card",(function(e){$.renderLoading(),J.setCreateCard(e).then((function(e){G.addItem(Z(e)),$.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally((function(){return $.renderLoading("Создать")}))})),K=new y("#popup-profile",(function(e){K.renderLoading(),J.setUserUpdate(e).then((function(e){M.setUserInfo(e),K.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally((function(){return K.renderLoading("Сохранить")}))})),W=new Q("#popup-delete_card"),X=new y("#popup-avatar",(function(e){X.renderLoading(),J.setUserAvatar(e).then((function(e){M.getUserAvatar(e),X.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally((function(){return X.renderLoading("Сохранить")}))})),Y={};function Z(e){var n=new t(O,e,P,F,(function(){return z.open(e)}),ee,te),r=n.createCard();return n.isLiked()&&n.addLikeButton(),r}function ee(e){W.open(),W.setPopupSubmitAction((function(){return function(e){J.setDeleteCard(e.id).then((function(){e.remove(),W.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}(e)}))}function te(e){e.isLiked()?J.setDeleteLikeCard(e._id).then((function(t){e.updateLikes(t.likes),e.removeLikeButton()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})):J.setLikeCard(e._id).then((function(t){e.updateLikes(t.likes),e.addLikeButton()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}N={formSelector:".popup__form",inputSelector:".popup__user",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(N.formSelector)).forEach((function(e){var t=new r(N,e),n=e.getAttribute("name");Y[n]=t,t.enableValidation()})),C.addEventListener("click",(function(){var e=M.getUserInfo();K.setInputValues(e),Y["popup-form-profile"].resetValidation(),K.open()})),j.addEventListener("click",(function(){Y["popup-form-card"].resetValidation(),$.open()})),I.addEventListener("click",(function(){Y["popup-form-avatar"].resetValidation(),X.open()})),Promise.all([J.getUserInformation(),J.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];F=o._id,M.getUserAvatar(o),M.setUserInfo(o),G.renderItems(i)})).catch((function(e){console.log(e)})),K.setEventListeners(),$.setEventListeners(),z.setEventListeners(),X.setEventListeners(),W.setEventListeners()})();