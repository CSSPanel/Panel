"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7166],{18294:(e,t,n)=>{n.d(t,{n1:()=>c,C7:()=>y,N$:()=>T,Pu:()=>m});var r=n(49722),o=n(3417),l=n(70260),u=n(56027);let i=u.createContext(null),a=null;function c(e){var t,n,r,c,s;let d,f,{children:m,contain:y,restoreFocus:R,autoFocus:w}=e,L=(0,u.useRef)(null),C=(0,u.useRef)(null),M=(0,u.useRef)([]),{parentNode:F}=(0,u.useContext)(i)||{},A=(0,u.useMemo)(()=>new S({scopeRef:M}),[M]);(0,l.N)(()=>{let e=F||x.root;if(x.getTreeNode(e.scopeRef)&&a&&!E(a,e.scopeRef)){let t=x.getTreeNode(a);t&&(e=t)}e.addChild(A),x.addNode(A)},[A,F]),(0,l.N)(()=>{let e=x.getTreeNode(M);e&&(e.contain=!!y)},[y]),(0,l.N)(()=>{var e;let t=null===(e=L.current)||void 0===e?void 0:e.nextSibling,n=[];for(;t&&t!==C.current;)n.push(t),t=t.nextSibling;M.current=n},[m]),t=M,n=R,r=y,(0,l.N)(()=>{if(n||r)return;let e=t.current,l=(0,o.T)(e?e[0]:void 0),u=e=>{let n=e.target;b(n,t.current)?a=t:!h(n)&&(a=null)};return l.addEventListener("focusin",u,!1),null==e||e.forEach(e=>e.addEventListener("focusin",u,!1)),()=>{l.removeEventListener("focusin",u,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",u,!1))}},[t,n,r]),c=M,s=y,d=(0,u.useRef)(),f=(0,u.useRef)(),(0,l.N)(()=>{let e=c.current;if(!s){f.current&&(cancelAnimationFrame(f.current),f.current=void 0);return}let t=(0,o.T)(e?e[0]:void 0),n=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!p(c)||e.isComposing)return;let n=t.activeElement,r=c.current;if(!r||!b(n,r))return;let o=T(v(r),{tabbable:!0},r);if(!n)return;o.currentNode=n;let l=e.shiftKey?o.previousNode():o.nextNode();l||(o.currentNode=e.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,l=e.shiftKey?o.previousNode():o.nextNode()),e.preventDefault(),l&&N(l,!0)},r=e=>{(!a||E(a,c))&&b(e.target,c.current)?(a=c,d.current=e.target):p(c)&&!h(e.target,c)?d.current?d.current.focus():a&&a.current&&g(a.current):p(c)&&(d.current=e.target)},l=e=>{f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{if(t.activeElement&&p(c)&&!h(t.activeElement,c)){if(a=c,t.body.contains(e.target)){var n;d.current=e.target,null===(n=d.current)||void 0===n||n.focus()}else a.current&&g(a.current)}})};return t.addEventListener("keydown",n,!1),t.addEventListener("focusin",r,!1),null==e||e.forEach(e=>e.addEventListener("focusin",r,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",l,!1)),()=>{t.removeEventListener("keydown",n,!1),t.removeEventListener("focusin",r,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",r,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",l,!1))}},[c,s]),(0,l.N)(()=>()=>{f.current&&cancelAnimationFrame(f.current)},[f]),function(e,t,n){let r=(0,u.useRef)("undefined"!=typeof document?(0,o.T)(e.current?e.current[0]:void 0).activeElement:null);(0,l.N)(()=>{let r=e.current,l=(0,o.T)(r?r[0]:void 0);if(!t||n)return;let u=()=>{(!a||E(a,e))&&b(l.activeElement,e.current)&&(a=e)};return l.addEventListener("focusin",u,!1),null==r||r.forEach(e=>e.addEventListener("focusin",u,!1)),()=>{l.removeEventListener("focusin",u,!1),null==r||r.forEach(e=>e.removeEventListener("focusin",u,!1))}},[e,n]),(0,l.N)(()=>{let r=(0,o.T)(e.current?e.current[0]:void 0);if(!t)return;let l=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!p(e)||t.isComposing)return;let n=r.activeElement;if(!b(n,e.current))return;let o=x.getTreeNode(e);if(!o)return;let l=o.nodeToRestore,u=T(r.body,{tabbable:!0});u.currentNode=n;let i=t.shiftKey?u.previousNode():u.nextNode();if(l&&r.body.contains(l)&&l!==r.body||(l=void 0,o.nodeToRestore=void 0),(!i||!b(i,e.current))&&l){u.currentNode=l;do i=t.shiftKey?u.previousNode():u.nextNode();while(b(i,e.current));(t.preventDefault(),t.stopPropagation(),i)?N(i,!0):h(l)?N(l,!0):n.blur()}};return n||r.addEventListener("keydown",l,!0),()=>{n||r.removeEventListener("keydown",l,!0)}},[e,t,n]),(0,l.N)(()=>{var n;let l=(0,o.T)(e.current?e.current[0]:void 0);if(!t)return;let u=x.getTreeNode(e);if(u)return u.nodeToRestore=null!==(n=r.current)&&void 0!==n?n:void 0,()=>{let n=x.getTreeNode(e);if(!n)return;let r=n.nodeToRestore;if(t&&r&&(b(l.activeElement,e.current)||l.activeElement===l.body&&function(e){let t=x.getTreeNode(a);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=x.clone();requestAnimationFrame(()=>{if(l.activeElement===l.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){N(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&x.getTreeNode(n.scopeRef)){g(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(M,R,y),function(e,t){let n=u.useRef(t);(0,u.useEffect)(()=>{n.current&&(a=e,!b((0,o.T)(e.current?e.current[0]:void 0).activeElement,a.current)&&e.current&&g(e.current)),n.current=!1},[e])}(M,w),(0,u.useEffect)(()=>{let e=(0,o.T)(M.current?M.current[0]:void 0).activeElement,t=null;if(b(e,M.current)){for(let n of x.traverse())n.scopeRef&&b(e,n.scopeRef.current)&&(t=n);t===x.getTreeNode(M)&&(a=t.scopeRef)}},[M]),(0,l.N)(()=>()=>{var e,t,n;let r=null!==(n=null===(t=x.getTreeNode(M))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(M===a||E(M,a))&&(!r||x.getTreeNode(r))&&(a=r),x.removeTreeNode(M)},[M]);let k=(0,u.useMemo)(()=>{var e;return e=M,{focusNext(t={}){let n=e.current,{from:r,tabbable:l,wrap:u,accept:i}=t,a=r||(0,o.T)(n[0]).activeElement,c=n[0].previousElementSibling,s=T(v(n),{tabbable:l,accept:i},n);s.currentNode=b(a,n)?a:c;let d=s.nextNode();return!d&&u&&(s.currentNode=c,d=s.nextNode()),d&&N(d,!0),d},focusPrevious(t={}){let n=e.current,{from:r,tabbable:l,wrap:u,accept:i}=t,a=r||(0,o.T)(n[0]).activeElement,c=n[n.length-1].nextElementSibling,s=T(v(n),{tabbable:l,accept:i},n);s.currentNode=b(a,n)?a:c;let d=s.previousNode();return!d&&u&&(s.currentNode=c,d=s.previousNode()),d&&N(d,!0),d},focusFirst(t={}){let n=e.current,{tabbable:r,accept:o}=t,l=T(v(n),{tabbable:r,accept:o},n);l.currentNode=n[0].previousElementSibling;let u=l.nextNode();return u&&N(u,!0),u},focusLast(t={}){let n=e.current,{tabbable:r,accept:o}=t,l=T(v(n),{tabbable:r,accept:o},n);l.currentNode=n[n.length-1].nextElementSibling;let u=l.previousNode();return u&&N(u,!0),u}}},[]),I=(0,u.useMemo)(()=>({focusManager:k,parentNode:A}),[A,k]);return u.createElement(i.Provider,{value:I},u.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:L}),m,u.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:C}))}let s=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],d=s.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let f=s.join(':not([hidden]):not([tabindex="-1"]),');function v(e){return e[0].parentElement}function p(e){let t=x.getTreeNode(a);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function b(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function h(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of x.traverse(x.getTreeNode(t)))if(n&&b(e,n.current))return!0;return!1}function m(e){return h(e,a)}function E(e,t){var n;let r=null===(n=x.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function N(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{(0,r.l)(e)}catch(e){}}function g(e,t=!0){let n=e[0].previousElementSibling,r=v(e),o=T(r,{tabbable:t},e);o.currentNode=n;let l=o.nextNode();t&&!l&&((o=T(r=v(e),{tabbable:!1},e)).currentNode=n,l=o.nextNode()),N(l)}function T(e,t,n){let r=(null==t?void 0:t.tabbable)?f:d,l=(0,o.T)(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var l;return(null==t?void 0:null===(l=t.from)||void 0===l?void 0:l.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=(0,o.m)(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:r}=e.style,l="none"!==n&&"hidden"!==r&&"collapse"!==r;if(l){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:r}=t(e);l="none"!==n&&"hidden"!==r&&"collapse"!==r}return l}(t)&&!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||b(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(l.currentNode=t.from),l}function y(e,t={}){return{focusNext(n={}){let r=e.current;if(!r)return null;let{from:l,tabbable:u=t.tabbable,wrap:i=t.wrap,accept:a=t.accept}=n,c=l||(0,o.T)(r).activeElement,s=T(r,{tabbable:u,accept:a});r.contains(c)&&(s.currentNode=c);let d=s.nextNode();return!d&&i&&(s.currentNode=r,d=s.nextNode()),d&&N(d,!0),d},focusPrevious(n=t){let r=e.current;if(!r)return null;let{from:l,tabbable:u=t.tabbable,wrap:i=t.wrap,accept:a=t.accept}=n,c=l||(0,o.T)(r).activeElement,s=T(r,{tabbable:u,accept:a});if(r.contains(c))s.currentNode=c;else{let e=R(s);return e&&N(e,!0),null!=e?e:null}let d=s.previousNode();if(!d&&i){s.currentNode=r;let e=R(s);if(!e)return null;d=e}return d&&N(d,!0),null!=d?d:null},focusFirst(n=t){let r=e.current;if(!r)return null;let{tabbable:o=t.tabbable,accept:l=t.accept}=n,u=T(r,{tabbable:o,accept:l}).nextNode();return u&&N(u,!0),u},focusLast(n=t){let r=e.current;if(!r)return null;let{tabbable:o=t.tabbable,accept:l=t.accept}=n,u=R(T(r,{tabbable:o,accept:l}));return u&&N(u,!0),null!=u?u:null}}}function R(e){let t,n;do(t=e.lastChild())&&(n=t);while(t);return n}class w{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new S({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&b(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new w;for(let r of this.traverse())n.addTreeNode(r.scopeRef,null!==(t=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new S({scopeRef:null}),this.fastMap.set(null,this.root)}}class S{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let x=new w},33004:(e,t,n)=>{n.d(t,{vt:()=>f});let r=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,l={setState:r,getState:o,getInitialState:()=>u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,o,l);return l},o=e=>e?r(e):r;var l=n(56027),u=n(58786);let{useDebugValue:i}=l,{useSyncExternalStoreWithSelector:a}=u,c=!1,s=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=s,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let r=a(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return i(r),r})(t,e,n);return Object.assign(n,t),n},f=e=>e?d(e):d},58786:(e,t,n)=>{e.exports=n(69982)},59325:(e,t,n)=>{var r=n(56027),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=r.useState,u=r.useEffect,i=r.useLayoutEffect,a=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var s="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=l({inst:{value:n,getSnapshot:t}}),o=r[0].inst,s=r[1];return i(function(){o.value=n,o.getSnapshot=t,c(o)&&s({inst:o})},[e,n,t]),u(function(){return c(o)&&s({inst:o}),e(function(){c(o)&&s({inst:o})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:s},63600:(e,t,n)=>{n.d(t,{C:()=>b,Y:()=>h});let r=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),o=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function l(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return r.has(t.script)}let t=e.split("-")[0];return o.has(t)}var u=n(56027),i=n(83073);let a=Symbol.for("react-aria.i18n.locale");function c(){let e="undefined"!=typeof window&&window[a]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:l(e)?"rtl":"ltr"}}let s=c(),d=new Set;function f(){for(let e of(s=c(),d))e(s)}function v(){let e=(0,i.wR)(),[t,n]=(0,u.useState)(s);return((0,u.useEffect)(()=>(0===d.size&&window.addEventListener("languagechange",f),d.add(n),()=>{d.delete(n),0===d.size&&window.removeEventListener("languagechange",f)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let p=u.createContext(null);function b(e){let{locale:t,children:n}=e,r=v(),o=t?{locale:t,direction:l(t)?"rtl":"ltr"}:r;return u.createElement(p.Provider,{value:o},n)}function h(){let e=v();return(0,u.useContext)(p)||e}},69982:(e,t,n)=>{var r=n(56027),o=n(74084),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=o.useSyncExternalStore,i=r.useRef,a=r.useEffect,c=r.useMemo,s=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=i(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var v=u(e,(d=c(function(){function e(e){if(!a){if(a=!0,u=e,e=r(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return i=t}return i=e}if(t=i,l(u,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(u=e,i=n)}var u,i,a=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,o]))[0],d[1]);return a(function(){f.hasValue=!0,f.value=v},[v]),s(v),v}},74084:(e,t,n)=>{e.exports=n(59325)},77629:(e,t,n)=>{n.d(t,{o:()=>r});function r(e,t){let n=window.getComputedStyle(e),r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}}}]);