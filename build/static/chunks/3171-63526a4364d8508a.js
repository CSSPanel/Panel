"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3171],{27850:function(e,t,n){n.d(t,{k:function(){return o}});var r=n(12533);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:o}=e,i=r.createContext(void 0);return i.displayName=o,[i.Provider,function e(){var o;let u=r.useContext(i);if(!u&&t){let t=Error(n);throw t.name="ContextError",null==(o=Error.captureStackTrace)||o.call(Error,t,e),t}return u},i]}},47880:function(e,t,n){function r(e,t){return Array.from({length:t-e+1},(t,n)=>n+e)}function o(e,t,n){return Math.min(Math.max(e,t),n)}function i(e,t=100){return Math.min(Math.max(e,0),t)}n.d(t,{Ez:function(){return i},uZ:function(){return o},w6:function(){return r}})},62736:function(e,t,n){n.d(t,{j:function(){return a}});var r=n(72812),o=n(20419),i=n(41349),u=n(82637);function a(e,t){let n,{elementType:a="button",isDisabled:s,onPress:l,onPressStart:c,onPressEnd:d,onPressChange:p,preventFocusOnPress:f,allowFocusWhenDisabled:h,onClick:m,href:v,target:x,rel:b,type:g="button",allowTextSelectionOnPress:P}=e;n="button"===a?{type:g,disabled:s}:{role:"button",tabIndex:s?void 0:0,href:"a"===a&&s?void 0:v,target:"a"===a?x:void 0,type:"input"===a?g:void 0,disabled:"input"===a?s:void 0,"aria-disabled":s&&"input"!==a?s:void 0,rel:"a"===a?b:void 0};let{pressProps:C,isPressed:E}=(0,u.r)({onPressStart:c,onPressEnd:d,onPressChange:p,onPress:l,isDisabled:s,preventFocusOnPress:f,allowTextSelectionOnPress:P,ref:t}),{focusableProps:w}=(0,i.kc)(e,t);h&&(w.tabIndex=s?-1:w.tabIndex);let k=(0,r.d)(w,C,(0,o.z)(e,{labelable:!0}));return{isPressed:E,buttonProps:(0,r.d)(n,k,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{null==m||m(e)}})}}},41349:function(e,t,n){n.d(t,{kc:function(){return c}});var r=n(93721),o=n(59272),i=n(43688),u=n(21525),a=n(72812),s=n(12533);let l=s.createContext(null);function c(e,t){let{focusProps:n}=(0,o.K)(e),{keyboardProps:c}=(0,i.v)(e),d=(0,a.d)(n,c),p=function(e){let t=(0,s.useContext)(l)||{};(0,u.l)(t,e);let{ref:n,...r}=t;return r}(t),f=e.isDisabled?{}:p,h=(0,s.useRef)(e.autoFocus);(0,s.useEffect)(()=>{h.current&&t.current&&(0,r.e)(t.current),h.current=!1},[t]);let m=e.excludeFromTabOrder?-1:0;return e.isDisabled&&(m=void 0),{focusableProps:(0,a.d)({...d,tabIndex:m},f)}}},43688:function(e,t,n){function r(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){t?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):t=!0},continuePropagation(){t=!1},isPropagationStopped:()=>t}),t&&n.stopPropagation()}}function o(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:r(e.onKeyDown),onKeyUp:r(e.onKeyUp)}}}n.d(t,{v:function(){return o}})},46908:function(e,t,n){n.d(t,{M:function(){return x}});var r=n(74018),o=n(12533),i=n(13975),u=n(86821),a=n(67362);class s extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l(e){let{children:t,isPresent:n}=e,i=(0,o.useId)(),u=(0,o.useRef)(null),l=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,o.useContext)(a._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:o}=l.current;if(n||!u.current||!e||!t)return;u.current.dataset.motionPopId=i;let a=document.createElement("style");return c&&(a.nonce=c),document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}},[n]),(0,r.jsx)(s,{isPresent:n,childRef:u,sizeRef:l,children:o.cloneElement(t,{ref:u})})}let c=e=>{let{children:t,initial:n,isPresent:a,onExitComplete:s,custom:c,presenceAffectsLayout:p,mode:f}=e,h=(0,u.h)(d),m=(0,o.useId)(),v=(0,o.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;s&&s()},[h,s]),x=(0,o.useMemo)(()=>({id:m,initial:n,isPresent:a,custom:c,onExitComplete:v,register:e=>(h.set(e,!1),()=>h.delete(e))}),p?[Math.random(),v]:[a,v]);return(0,o.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[a]),o.useEffect(()=>{a||h.size||!s||s()},[a]),"popLayout"===f&&(t=(0,r.jsx)(l,{isPresent:a,children:t})),(0,r.jsx)(i.O.Provider,{value:x,children:t})};function d(){return new Map}var p=n(77664),f=n(34719);let h=e=>e.key||"";function m(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var v=n(21961);let x=e=>{let{children:t,exitBeforeEnter:n,custom:i,initial:a=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:d="sync"}=e;(0,f.k)(!n,"Replace exitBeforeEnter with mode='wait'");let x=(0,o.useMemo)(()=>m(t),[t]),b=x.map(h),g=(0,o.useRef)(!0),P=(0,o.useRef)(x),C=(0,u.h)(()=>new Map),[E,w]=(0,o.useState)(x),[k,y]=(0,o.useState)(x);(0,v.L)(()=>{g.current=!1,P.current=x;for(let e=0;e<k.length;e++){let t=h(k[e]);b.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}},[k,b.length,b.join("-")]);let R=[];if(x!==E){let e=[...x];for(let t=0;t<k.length;t++){let n=k[t],r=h(n);b.includes(r)||(e.splice(t,0,n),R.push(n))}"wait"===d&&R.length&&(e=R),y(m(e)),w(x);return}let{forceRender:M}=(0,o.useContext)(p.p);return(0,r.jsx)(r.Fragment,{children:k.map(e=>{let t=h(e),n=x===k||b.includes(t);return(0,r.jsx)(c,{isPresent:n,initial:(!g.current||!!a)&&void 0,custom:n?void 0:i,presenceAffectsLayout:l,mode:d,onExitComplete:n?void 0:()=>{if(!C.has(t))return;C.set(t,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(null==M||M(),y(P.current),s&&s())},children:e},t)})})}}}]);