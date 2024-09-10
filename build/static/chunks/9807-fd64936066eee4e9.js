"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9807],{18468:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(89478),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,u=n.useEffect,l=n.useLayoutEffect,o=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return l(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),o(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},96827:function(e,t,r){e.exports=r(18468)},32820:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(66378),i=r(47931),a=r(86950),u=r(57530),l=r(89478),o=r(10401),s=(0,n.Gp)((e,t)=>{let{slots:r,classNames:s,label:c,getSpinnerProps:d}=function(e){let[t,r]=(0,n.oe)(e,i.l.variantKeys),{children:o,className:s,classNames:c,label:d,...f}=t,g=(0,l.useMemo)(()=>(0,i.l)({...r}),[(0,a.Xx)(r)]),E=(0,u.W)(null==c?void 0:c.base,s),v=d||o,p=(0,l.useMemo)(()=>v&&"string"==typeof v?v:f["aria-label"]?"":"Loading",[o,v,f["aria-label"]]),h=(0,l.useCallback)(()=>({"aria-label":p,className:g.base({class:E}),...f}),[p,g,E,f]);return{label:v,slots:g,classNames:c,getSpinnerProps:h}}({...e});return(0,o.jsxs)("div",{ref:t,...d(),children:[(0,o.jsxs)("div",{className:r.wrapper({class:null==s?void 0:s.wrapper}),children:[(0,o.jsx)("i",{className:r.circle1({class:null==s?void 0:s.circle1})}),(0,o.jsx)("i",{className:r.circle2({class:null==s?void 0:s.circle2})})]}),c&&(0,o.jsx)("span",{className:r.label({class:null==s?void 0:s.label}),children:c})]})});s.displayName="NextUI.Spinner";var c=s},27981:function(e,t,r){let n;r.d(t,{ZP:function(){return ee},JG:function(){return $}});var i=r(89478),a=r(96827);let u=()=>{},l=u(),o=Object,s=e=>e===l,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),g=new WeakMap,E=0,v=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(o(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=g.get(e))return t;if(t=++E+"~",g.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=v(e[r])+",";g.set(e,t)}if(i==o){t="#";let n=o.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+v(e[r])+",");g.set(e,t)}}return t},p=new WeakMap,h={},w={},y="undefined",m=typeof window!=y,b=typeof document!=y,_=()=>m&&typeof window.requestAnimationFrame!=y,R=(e,t)=>{let r=p.get(e);return[()=>!s(t)&&e.get(t)||h,n=>{if(!s(t)){let i=e.get(t);t in w||(w[t]=i),r[5](t,d(i,n),i||h)}},r[6],()=>!s(t)&&t in w?w[t]:!s(t)&&e.get(t)||h]},T=!0,[S,O]=m&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],V={initFocus:e=>(b&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{b&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{T=!0,e()},r=()=>{T=!1};return S("online",t),S("offline",r),()=>{O("online",t),O("offline",r)}}},L=!i.useId,N=!m||"Deno"in window,k=e=>_()?window.requestAnimationFrame(e):setTimeout(e,1),C=N?i.useEffect:i.useLayoutEffect,x="undefined"!=typeof navigator&&navigator.connection,D=!N&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),A=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?v(e):"",t]},I=0,M=()=>++I;var j={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(...e){let[t,r,n,i]=e,a=d({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=a.populateCache,o=a.rollbackOnError,g=a.optimisticData,E=e=>"function"==typeof o?o(e):!1!==o,v=a.throwOnError;if(c(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(h))}return h(r);async function h(r){let i;let[o]=A(r);if(!o)return;let[d,h]=R(t,o),[w,y,m,b]=p.get(t),_=()=>{let e=w[o];return(c(a.revalidate)?a.revalidate(d().data,r):!1!==a.revalidate)&&(delete m[o],delete b[o],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return _();let T=n,S=M();y[o]=[S,0];let O=!s(g),V=d(),L=V.data,N=V._c,k=s(N)?L:N;if(O&&h({data:g=c(g)?g(k,L):g,_c:k}),c(T))try{T=T(k)}catch(e){i=e}if(T&&f(T)){if(T=await T.catch(e=>{i=e}),S!==y[o][0]){if(i)throw i;return T}i&&O&&E(i)&&(u=!0,h({data:k,_c:l}))}if(u&&!i&&(c(u)?h({data:u(T,k),error:l,_c:l}):h({data:T,error:l,_c:l})),y[o][1]=M(),Promise.resolve(_()).then(()=>{h({_c:l})}),i){if(v)throw i;return}return T}}let P=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},U=(e,t)=>{if(!p.has(e)){let r=d(V,t),n={},i=F.bind(l,e),a=u,o={},s=(e,t)=>{let r=o[e]||[];return o[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=o[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!p.has(e)&&(p.set(e,[n,{},{},{},i,c,s]),!N)){let t=r.initFocus(setTimeout.bind(l,P.bind(l,n,0))),i=r.initReconnect(setTimeout.bind(l,P.bind(l,n,1)));a=()=>{t&&t(),i&&i(),p.delete(e)}}};return f(),[e,i,f,a]}return[e,p.get(e)[4]]},[W,$]=U(new Map),q=d({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,l=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(s(a)||!(u>a))&&setTimeout(n,l,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:(e,t)=>v(e)==v(t),isPaused:()=>!1,cache:W,mutate:$,fallback:{}},{isOnline:()=>T,isVisible:()=>{let e=b&&document.visibilityState;return s(e)||"hidden"!==e}}),J=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=d(i,u))}return r},G=(0,i.createContext)({}),K=m&&window.__SWR_DEVTOOLS_USE__,X=K?window.__SWR_DEVTOOLS_USE__:[],Z=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],z=()=>d(q,(0,i.useContext)(G)),B=X.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=A(t),[,,,i]=p.get(W);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return s(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),H=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};K&&(window.__SWR_DEVTOOLS_REACT__=i);let Q=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};o.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(G),n=c(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),u=(0,i.useMemo)(()=>n?a:J(r,a),[n,r,a]),o=a&&a.provider,s=(0,i.useRef)(l);o&&!s.current&&(s.current=U(o(u.cache||W),a));let f=s.current;return f&&(u.cache=f[0],u.mutate=f[1]),C(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)(G.Provider,d(e,{value:u}))},"defaultValue",{value:q});let ee=(n=(e,t,r)=>{let{cache:n,compare:u,suspense:o,fallbackData:f,revalidateOnMount:g,revalidateIfStale:E,refreshInterval:v,refreshWhenHidden:h,refreshWhenOffline:w,keepPreviousData:y}=r,[m,b,_,T]=p.get(n),[S,O]=A(e),V=(0,i.useRef)(!1),x=(0,i.useRef)(!1),D=(0,i.useRef)(S),I=(0,i.useRef)(t),P=(0,i.useRef)(r),U=()=>P.current,W=()=>U().isVisible()&&U().isOnline(),[$,q,J,G]=R(n,S),K=(0,i.useRef)({}).current,X=s(f)?r.fallback[S]:f,Z=(e,t)=>{for(let r in K)if("data"===r){if(!u(e[r],t[r])&&(!s(e[r])||!u(eu,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},z=(0,i.useMemo)(()=>{let e=!!S&&!!t&&(s(g)?!U().isPaused()&&!o&&(!!s(E)||E):g),r=t=>{let r=d(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=$(),i=G(),a=r(n),u=n===i?a:r(i),l=a;return[()=>{let e=r($());return Z(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>u]},[n,S]),B=(0,a.useSyncExternalStore)((0,i.useCallback)(e=>J(S,(t,r)=>{Z(r,t)||e()}),[n,S]),z[0],z[1]),ee=!V.current,et=m[S]&&m[S].length>0,er=B.data,en=s(er)?X:er,ei=B.error,ea=(0,i.useRef)(en),eu=y?s(er)?ea.current:er:en,el=(!et||!!s(ei))&&(ee&&!s(g)?g:!U().isPaused()&&(o?!s(en)&&E:s(en)||E)),eo=!!(S&&t&&ee&&el),es=s(B.isValidating)?eo:B.isValidating,ec=s(B.isLoading)?eo:B.isLoading,ed=(0,i.useCallback)(async e=>{let t,n;let i=I.current;if(!S||!i||x.current||U().isPaused())return!1;let a=!0,o=e||{},d=!_[S]||!o.dedupe,f=()=>L?!x.current&&S===D.current&&V.current:S===D.current,g={isValidating:!1,isLoading:!1},E=()=>{q(g)},v=()=>{let e=_[S];e&&e[1]===n&&delete _[S]},p={isValidating:!0};s($().data)&&(p.isLoading=!0);try{if(d&&(q(p),r.loadingTimeout&&s($().data)&&setTimeout(()=>{a&&f()&&U().onLoadingSlow(S,r)},r.loadingTimeout),_[S]=[i(O),M()]),[t,n]=_[S],t=await t,d&&setTimeout(v,r.dedupingInterval),!_[S]||_[S][1]!==n)return d&&f()&&U().onDiscarded(S),!1;g.error=l;let e=b[S];if(!s(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return E(),d&&f()&&U().onDiscarded(S),!1;let o=$().data;g.data=u(o,t)?o:t,d&&f()&&U().onSuccess(t,S,r)}catch(r){v();let e=U(),{shouldRetryOnError:t}=e;!e.isPaused()&&(g.error=r,d&&f()&&(e.onError(r,S,e),(!0===t||c(t)&&t(r))&&(!U().revalidateOnFocus||!U().revalidateOnReconnect||W())&&e.onErrorRetry(r,S,e,e=>{let t=m[S];t&&t[0]&&t[0](j.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return a=!1,E(),!0},[S,n]),ef=(0,i.useCallback)((...e)=>F(n,D.current,...e),[]);if(C(()=>{I.current=t,P.current=r,s(er)||(ea.current=er)}),C(()=>{if(!S)return;let e=ed.bind(l,Y),t=0,r=H(S,m,(r,n={})=>{if(r==j.FOCUS_EVENT){let r=Date.now();U().revalidateOnFocus&&r>t&&W()&&(t=r+U().focusThrottleInterval,e())}else if(r==j.RECONNECT_EVENT)U().revalidateOnReconnect&&W()&&e();else if(r==j.MUTATE_EVENT)return ed();else if(r==j.ERROR_REVALIDATE_EVENT)return ed(n)});return x.current=!1,D.current=S,V.current=!0,q({_k:O}),el&&(s(en)||N?e():k(e)),()=>{x.current=!0,r()}},[S]),C(()=>{let e;function t(){let t=c(v)?v($().data):v;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!$().error&&(h||U().isVisible())&&(w||U().isOnline())?ed(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[v,h,w,S]),(0,i.useDebugValue)(eu),o&&s(en)&&S){if(!L&&N)throw Error("Fallback data is required when using suspense in SSR.");I.current=t,P.current=r,x.current=!1;let e=T[S];if(s(e)||Q(ef(e)),s(ei)){let e=ed(Y);s(eu)||(e.status="fulfilled",e.value=!0),Q(e)}else throw ei}return{mutate:ef,get data(){return K.data=!0,eu},get error(){return K.error=!0,ei},get isValidating(){return K.isValidating=!0,es},get isLoading(){return K.isLoading=!0,ec}}},function(...e){let t=z(),[r,i,a]=Z(e),u=J(t,a),l=n,{use:o}=u,s=(o||[]).concat(B);for(let e=s.length;e--;)l=s[e](l);return l(r,i||u.fetcher||null,u)})}}]);