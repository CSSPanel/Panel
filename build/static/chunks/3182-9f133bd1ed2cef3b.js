"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3182],{2835:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,l[o]))return!1;for(o=n;0!=o--;){var n,o,l,a=l[o];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},4093:function(e,t,r){r.d(t,{F:function(){return n}});function n(e){return t=>{let r=e.safeParse(t);if(r.success)return{};let n={};return r.error.errors.forEach(e=>{n[e.path.join(".")]=e.message}),n}}},5939:function(e,t,r){r.d(t,{c:function(){return k}});var n=r(1402),o=r(2835);let l="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function a(e,t){l(()=>{if(e)return window.addEventListener(e,t),()=>window.removeEventListener(e,t)},[e])}function c(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((t,r)=>{let n=e[r];return null!=n&&!1!==n&&(t[r]=n),t},{})}function i(e,t){let r=Object.keys(e);if("string"==typeof t){let n=r.filter(e=>e.startsWith("".concat(t,".")));return e[t]||n.some(t=>e[t])||!1}return r.some(t=>e[t])}function u(e,t){if(null===t||"object"!=typeof t)return{};let r={...t};return Object.keys(t).forEach(t=>{t.includes("".concat(String(e),"."))&&delete r[t]}),r}function s(e,t){return parseInt(e.substring(t.length+1).split(".")[0],10)}function f(e,t,r,n){if(void 0===t)return r;let o="".concat(String(e)),l=r;-1===n&&(l=u("".concat(o,".").concat(t),l));let a={...l},c=new Set;return Object.entries(l).filter(e=>{let[r]=e;if(!r.startsWith("".concat(o,".")))return!1;let n=s(r,o);return!Number.isNaN(n)&&n>=t}).forEach(e=>{let[t,r]=e,l=s(t,o),i=t.replace("".concat(o,".").concat(l),"".concat(o,".").concat(l+n));a[i]=r,c.add(i),c.has(t)||delete a[t]}),a}function d(e){return"string"!=typeof e?[]:e.split(".")}function p(e,t){let r=d(e);if(0===r.length||"object"!=typeof t||null===t)return;let n=t[r[0]];for(let e=1;e<r.length&&void 0!==n;e+=1)n=n[r[e]];return n}function b(e,t,r){"object"==typeof r.value&&(r.value=y(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function y(e){if("object"!=typeof e)return e;var t,r,n,o=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?n=Object.create(e.__proto__||null):"[object Array]"===l?n=Array(e.length):"[object Set]"===l?(n=new Set,e.forEach(function(e){n.add(y(e))})):"[object Map]"===l?(n=new Map,e.forEach(function(e,t){n.set(y(t),y(e))})):"[object Date]"===l?n=new Date(+e):"[object RegExp]"===l?n=new RegExp(e.source,e.flags):"[object DataView]"===l?n=new e.constructor(y(e.buffer)):"[object ArrayBuffer]"===l?n=e.slice(0):"Array]"===l.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)b(n,r[o],Object.getOwnPropertyDescriptor(e,r[o]));for(o=0,r=Object.getOwnPropertyNames(e);o<r.length;o++)Object.hasOwnProperty.call(n,t=r[o])&&n[t]===e[t]||b(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}function h(e,t,r){let n=d(e);if(0===n.length)return r;let o=y(r);if(1===n.length)return o[n[0]]=t,o;let l=o[n[0]];for(let e=1;e<n.length-1;e+=1){if(void 0===l)return o;l=l[n[e]]}return l[n[n.length-1]]=t,o}function m(e){let t=c(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function g(e,t){return"function"==typeof e?m(e(t)):m(function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"object"!=typeof t||null===t?o:Object.keys(t).reduce((o,l)=>{let a=t[l],c="".concat(""===n?"":"".concat(n,".")).concat(l),i=p(c,r),u=!1;return"function"==typeof a&&(o[c]=a(i,r,c)),"object"==typeof a&&Array.isArray(i)&&(u=!0,i.forEach((t,n)=>e(a,r,"".concat(c,".").concat(n),o))),"object"!=typeof a||"object"!=typeof i||null===i||u||e(a,r,c,o),o},o)}(e,t))}function v(e,t,r){if("string"!=typeof e)return{hasError:!1,error:null};let n=g(t,r),o=Object.keys(n.errors).find(t=>e.split(".").every((e,r)=>e===t.split(".")[r]));return{hasError:!!o,error:o?n.errors[o]:null}}function j(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,".".concat("__MANTINE_FORM_INDEX__"))))}function k(){let{name:e,initialValues:t,initialErrors:r={},initialDirty:l={},initialTouched:s={},clearInputErrorOnChange:d=!0,validateInputOnChange:b=!1,validateInputOnBlur:y=!1,onValuesChange:m,transformValues:k=e=>e,enhanceGetInputProps:E,validate:O}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[w,C]=(0,n.useState)(s),[A,S]=(0,n.useState)(l),[_,D]=(0,n.useState)(t||{}),[I,P]=(0,n.useState)(c(r)),[x,L]=(0,n.useState)(!1),N=(0,n.useRef)(t||{}),F=e=>{N.current=e},T=(0,n.useCallback)(e=>{x||(L(!0),D(e))},[x]),M=(0,n.useCallback)(()=>C({}),[]),V=(0,n.useCallback)(e=>P(t=>c("function"==typeof e?e(t):e)),[]),R=(0,n.useCallback)(()=>P({}),[]),W=(0,n.useCallback)(()=>{D(N.current),R(),S({}),M()},[]),H=(0,n.useCallback)((e,t)=>V(r=>({...r,[e]:t})),[]),B=(0,n.useCallback)(e=>V(t=>{if("string"!=typeof e)return t;let r={...t};return delete r[e],r}),[]),z=(0,n.useCallback)(e=>S(t=>{if("string"!=typeof e)return t;let r=u(e,t);return delete r[e],r}),[]),X=(0,n.useCallback)((e,t)=>{let r=j(e,b);z(e),C(t=>({...t,[e]:!0})),D(n=>{let o=h(e,t,n);if(r){let t=v(e,O,o);t.hasError?H(e,t.error):B(e)}return null==m||m(o),o}),!r&&d&&H(e,null)},[]),Z=(0,n.useCallback)(e=>{D(t=>{let r="function"==typeof e?e(t):e,n={...t,...r};return null==m||m(n),n}),d&&R()},[]),$=(0,n.useCallback)((e,t)=>{z(e),D(r=>{let n=function(e,t,r){let{from:n,to:o}=t,l=p(e,r);if(!Array.isArray(l))return r;let a=[...l],c=l[n];return a.splice(n,1),a.splice(o,0,c),h(e,a,r)}(e,t,r);return null==m||m(n),n}),P(r=>(function(e,t,r){let{from:n,to:o}=t,l="".concat(e,".").concat(n),a="".concat(e,".").concat(o),c={...r};return Object.keys(r).every(e=>{let t,r;if(e.startsWith(l)&&(t=e,r=e.replace(l,a)),e.startsWith(a)&&(t=e.replace(a,l),r=e),t&&r){let e=c[t],n=c[r];return void 0===n?delete c[t]:c[t]=n,void 0===e?delete c[r]:c[r]=e,!1}return!0}),c})(e,t,r))},[]),q=(0,n.useCallback)((e,t)=>{z(e),D(r=>{let n=function(e,t,r){let n=p(e,r);return Array.isArray(n)?h(e,n.filter((e,r)=>r!==t),r):r}(e,t,r);return null==m||m(n),n}),P(r=>f(e,t,r,-1))},[]),G=(0,n.useCallback)((e,t,r)=>{z(e),D(n=>{let o=function(e,t,r,n){let o=p(e,n);if(!Array.isArray(o))return n;let l=[...o];return l.splice("number"==typeof r?r:l.length,0,t),h(e,l,n)}(e,t,r,n);return null==m||m(o),o}),P(t=>f(e,r,t,1))},[]),J=(0,n.useCallback)(()=>{let e=g(O,_);return P(e.errors),e},[_,O]),K=(0,n.useCallback)(e=>{let t=v(e,O,_);return t.hasError?H(e,t.error):B(e),t},[_,O]),Q=(0,n.useCallback)(e=>{e.preventDefault(),W()},[]),U=(0,n.useCallback)(e=>i(w,e),[w]),Y=(0,n.useCallback)(e=>e?!v(e,O,_).hasError:!g(O,_).hasErrors,[_,O]),ee={initialized:x,values:_,errors:I,initialize:T,setValues:Z,setInitialValues:F,setErrors:V,setFieldValue:X,setFieldError:H,clearFieldError:B,clearErrors:R,reset:W,validate:J,validateField:K,reorderListItem:$,removeListItem:q,insertListItem:G,getInputProps:function(e){var t;let{type:r="input",withError:n=!0,withFocus:o=!0,...l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a={onChange:(t=t=>X(e,t),e=>{if(e){if("function"==typeof e)t(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:r}=e;r instanceof HTMLInputElement?"checkbox"===r.type?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}else t(e)})};return n&&(a.error=I[e]),"checkbox"===r?a.checked=p(e,_):a.value=p(e,_),o&&(a.onFocus=()=>C(t=>({...t,[e]:!0})),a.onBlur=()=>{if(j(e,y)){let t=v(e,O,_);t.hasError?H(e,t.error):B(e)}}),Object.assign(a,null==E?void 0:E({inputProps:a,field:e,options:{type:r,withError:n,withFocus:o,...l},form:ee}))},onSubmit:(e,t)=>r=>{null==r||r.preventDefault();let n=J();n.hasErrors?null==t||t(n.errors,_,r):null==e||e(k(_),r)},onReset:Q,isDirty:e=>{if(e){let t=p(e,A);return"boolean"==typeof t?t:!o(p(e,_),p(e,N.current))}return Object.keys(A).length>0?i(A):!o(_,N.current)},isTouched:U,setTouched:C,setDirty:S,resetTouched:M,resetDirty:e=>{F(e?{..._,...e}:_),S({})},isValid:Y,getTransformedValues:e=>k(e||_)};return e&&function(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw Error('[@mantine/use-form] Form name "'.concat(e,'" is invalid, it should contain only letters, numbers and dashes'))}(e),a("mantine-form:".concat(e,":set-field-value"),e=>ee.setFieldValue(e.detail.path,e.detail.value)),a("mantine-form:".concat(e,":set-values"),e=>ee.setValues(e.detail)),a("mantine-form:".concat(e,":set-initial-values"),e=>ee.setInitialValues(e.detail)),a("mantine-form:".concat(e,":set-errors"),e=>ee.setErrors(e.detail)),a("mantine-form:".concat(e,":set-field-error"),e=>ee.setFieldError(e.detail.path,e.detail.error)),a("mantine-form:".concat(e,":clear-field-error"),e=>ee.clearFieldError(e.detail)),a("mantine-form:".concat(e,":clear-errors"),ee.clearErrors),a("mantine-form:".concat(e,":reset"),ee.reset),a("mantine-form:".concat(e,":validate"),ee.validate),a("mantine-form:".concat(e,":validate-field"),e=>ee.validateField(e.detail)),a("mantine-form:".concat(e,":reorder-list-item"),e=>ee.reorderListItem(e.detail.path,e.detail.payload)),a("mantine-form:".concat(e,":remove-list-item"),e=>ee.removeListItem(e.detail.path,e.detail.index)),a("mantine-form:".concat(e,":insert-list-item"),e=>ee.insertListItem(e.detail.path,e.detail.item,e.detail.index)),a("mantine-form:".concat(e,":set-dirty"),e=>ee.setDirty(e.detail)),a("mantine-form:".concat(e,":set-touched"),e=>ee.setTouched(e.detail)),a("mantine-form:".concat(e,":reset-dirty"),e=>ee.resetDirty(e.detail)),a("mantine-form:".concat(e,":reset-touched"),ee.resetTouched),ee}}}]);