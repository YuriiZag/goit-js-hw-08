function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,r,a,o,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,a=r;return i=r=void 0,l=t,o=e.apply(a,n)}function S(e){return l=e,u=setTimeout(j,t),c?b(e):o}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function j(){var e=g();if(O(e))return T(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,a-(e-l)):n}(e))}function T(e){return u=void 0,v&&i?b(e):(i=r=void 0,o)}function h(){var e=g(),n=O(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),o}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},h.flush=function(){return void 0===u?o:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b={},S={email:"",message:""},O=document.querySelector(".feedback-form"),j=document.querySelector('[name = "message"]'),T=document.querySelector('[name = "email"] '),h=localStorage.getItem("feedback-form-state"),w=JSON.parse(h);void 0!==w.message?j.value=w.message:j.value="",void 0!==w.email?T.value=w.email:T.value="",O.addEventListener("submit",(function(e){return e.preventDefault(),b.email=e.target.email.value,b.message=e.target.message.value,S.email=" ",S.message=" ",localStorage.setItem("feedback-form-state",JSON.stringify(S)),e.currentTarget.reset(),console.log(b),b})),j.addEventListener("input",e(t)((function(e){return S.email=T.value,S.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),T.addEventListener("input",e(t)((function(e){return S.email=e.target.value,S.message=j.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));
//# sourceMappingURL=03-feedback.451aed04.js.map