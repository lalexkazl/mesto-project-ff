/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,c=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,c=Object.create(o.prototype),a=new P(n||[]);return i(c,"_invoke",{value:C(t,r,a)}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function S(){}var w={};f(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==o&&c.call(E,u)&&(w=E);var q=S.prototype=b.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(o,i,a,u){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&c.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function c(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(c,c):c()}})}function C(t,e,n){var o=h;return function(c,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===c)throw i;return{value:r,done:!0}}for(n.method=c,n.arg=i;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var c=d(o,t.iterator,e.arg);if("throw"===c.type)return e.method="throw",e.arg=c.arg,e.delegate=null,_;var i=c.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(c.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=S,i(q,"constructor",{value:S,configurable:!0}),i(S,"constructor",{value:g,configurable:!0}),g.displayName=f(S,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,l,"GeneratorFunction")),t.prototype=Object.create(q),t},n.awrap=function(t){return{__await:t}},x(k.prototype),f(k.prototype,s,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,c){void 0===c&&(c=Promise);var i=new k(p(t,e,r,o),c);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(q),f(q,l,"Generator"),f(q,u,(function(){return this})),f(q,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=c.call(i,"catchLoc"),s=c.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var i=t.apply(e,n);function a(t){r(i,o,c,a,u,"next",t)}function u(t){r(i,o,c,a,u,"throw",t)}a(void 0)}))}}var o,c,i={baseUrl:"https://nomoreparties.co/v1/wff-cohort-20",headers:{authorization:"ac0298f3-1efe-4555-a98a-c6ed0765bebb","Content-Type":"application/json"}},a=function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))},u=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([u(),s()]));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:r,about:n})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify({name:r,link:n})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:i.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:i.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:i.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:r})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function m(t,e,r,n,i,a,u){var s=e.querySelector(".card").cloneNode(!0),l=s.querySelector(".card__image"),f=s.querySelector(".card__title"),p=s.querySelector(".card__delete-button"),d=s.querySelector(".card__like-button"),h=s.querySelector(".card__like-count"),y=t._id;return l.src=t.link,l.alt="Изображение места: ".concat(t.name),f.textContent=t.name,h.textContent=t.likes.length,t.likes.some((function(t){return t._id===u}))&&d.classList.add("card__like-button_is-active"),d.addEventListener("click",(function(){r(d,h,y)})),l.addEventListener("click",a),t.owner._id!==u?p.classList.add("card__delete-button-unactive"):p.addEventListener("click",(function(){o=y,c=p})),p.addEventListener("click",(function(){n(i())})),s}function _(t){var e=t.cardId,r=t.deleteButton;y(e).then((function(){r.closest(".places__item").remove()})).catch((function(t){console.log(t)}))}function b(){return{cardId:o,deleteButton:c}}function g(t,e,r){(t.classList.contains("card__like-button_is-active")?h:d)(r).then((function(r){t.classList.toggle("card__like-button_is-active"),e.textContent=r.likes.length})).catch((function(t){console.log(t)}))}function S(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",E),t.addEventListener("mousedown",L)}function w(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",E),t.removeEventListener("mousedown",L)}function L(t){t.target===t.currentTarget&&w(t.currentTarget)}function E(t){"Escape"===t.key&&w(document.querySelector(".popup_is-opened"))}var q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},x=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""},k=function(t,e){t.disabled=!0,t.classList.add(e)},C=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r)):k(e,r)},O=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);k(n,e.inactiveButtonClass),r.forEach((function(r){x(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))};function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var A=document.querySelector(".places__list"),P=document.querySelector("#card-template").content,T=document.querySelector(".popup_type_new-card"),N=document.querySelector(".profile__add-button"),I=T.querySelector(".popup__close"),U=document.querySelector('form[name="new-place"]'),B=U.querySelector(".popup__input_type_card-name"),G=U.querySelector(".popup__input_type_url"),D=T.querySelector(".popup__button"),F=document.querySelector(".popup_type_edit"),M=document.querySelector(".profile__edit-button"),V=F.querySelector(".popup__close"),J=document.querySelector('form[name="edit-profile"]'),H=J.querySelector(".popup__input_type_name"),Y=J.querySelector(".popup__input_type_description"),z=document.querySelector(".profile__title"),$=document.querySelector(".profile__description"),K=F.querySelector(".popup__button"),Q=document.querySelector(".popup_type_image"),R=Q.querySelector(".popup__close"),W=Q.querySelector(".popup__image"),X=Q.querySelector(".popup__caption");U.addEventListener("submit",(function(t){t.preventDefault();var e=B.value,r=G.value;Z(!0,U.querySelector(".popup__button")),D.disabled=!0,p(e,r).then((function(t){var e=m(t,P,g,_,b,tt,et);A.prepend(e),w(T)})).catch((function(t){console.log(t)})).finally((function(){U.reset(),Z(!1,U.querySelector(".popup__button"))}))}));var Z=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"};function tt(t){S(Q);var e=t.target.closest(".places__item").querySelector(".card__title");W.setAttribute("src",t.target.src),W.setAttribute("alt",t.target.alt),X.textContent=e.textContent,console.log(e)}N.addEventListener("click",(function(){S(T),O(U,q)})),I.addEventListener("click",(function(){w(T)})),M.addEventListener("click",(function(){S(F),H.value=z.textContent,Y.value=$.textContent,O(J,q)})),V.addEventListener("click",(function(){w(F)})),J.addEventListener("submit",(function(t){t.preventDefault();var e=H.value,r=Y.value;Z(!0,F.querySelector(".popup__button")),K.disabled=!0,f(e,r).then((function(t){z.textContent=t.name,$.textContent=t.about,w(F)})).catch((function(t){console.log(t)})).finally((function(){Z(!1,F.querySelector(".popup__button"))}))})),R.addEventListener("click",(function(){w(Q)}));var et,rt=document.querySelector(".profile__image_cover"),nt=document.querySelector(".profile__image"),ot=document.querySelector(".popup_type_avatar"),ct=ot.querySelector(".popup__close"),it=document.forms.avatar_edit,at=it.querySelector(".popup__input_type_url"),ut=ot.querySelector(".popup__button");rt.addEventListener("click",(function(){S(ot),it.reset(),O(it,q)})),ct.addEventListener("click",(function(){w(ot)})),it.addEventListener("submit",(function(t){t.preventDefault();var e=at.value;nt.style.backgroundImage=e,Z(!0,ot.querySelector(".popup__button")),ut.disabled=!0,v(e).then((function(t){nt.style.backgroundImage="url('".concat(t.avatar,"')"),w(ot)})).catch((function(t){console.log(t)})).finally((function(){it.reset(),Z(!1,it.querySelector(".popup__button"))}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e,r,n,o,c){var i=Array.from(t.querySelectorAll(e)),a=t.querySelector(o);C(i,a,c),i.forEach((function(e){e.addEventListener("input",(function(){!function(t,e,r,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorPattern):e.validity.valueMissing?e.setCustomValidity(e.dataset.errorEmpty):e.validity.typeMismatch?e.setCustomValidity(e.dataset.errorType):e.setCustomValidity(""),e.validity.valid?x(t,e,r,n):function(t,e,r,n,o){var c=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),c.textContent=r,c.classList.add(o)}(t,e,e.validationMessage,r,n)}(t,e,r,n),C(i,a,c)}))}))}(e,t.inputSelector,t.inputErrorClass,t.errorClass,t.submitButtonSelector,t.inactiveButtonClass)}))}(q),l(),Promise.all([u(),s()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c,i,a=[],u=!0,s=!1;try{if(c=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];z.textContent=o.name,$.textContent=o.about,et=o._id,nt.style.backgroundImage="url(".concat(o.avatar,")"),function(t,e){t.forEach((function(t){!function(t,e,r,n,o,c,i,a,u){var s=n(t,r,o,c,i,a,u);e.append(s)}(t,A,P,m,g,_,b,tt,e)}))}(c,et)})).catch((function(t){console.log(t)}))})();