(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8314],{7872:function(e,t,n){Promise.resolve().then(n.bind(n,679)),Promise.resolve().then(n.bind(n,4773))},679:function(e,t,n){"use strict";var i=n(2412),r=n(165),l=n(5979),o=n(1402),s=n(4837);t.default=e=>{let{children:t,flags:n}=e,{admin:a,isLoading:u}=(0,s.ZP)(),c=(0,l.useRouter)();return(0,o.useEffect)(()=>{if(!u){if(!a)return c.push("/");if(n.length>0&&!n.some(e=>{var t;return null===(t=a.flags)||void 0===t?void 0:t.includes(e)}))return c.push("/admin")}},[a,u,c,n]),u?(0,i.jsx)(r.c,{}):a?(0,i.jsx)(i.Fragment,{children:t}):(0,i.jsx)(i.Fragment,{children:"No Access"})}},4773:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var i=n(2412),r=n(5979),l=n(8365),o=n(3327);t.default=()=>{let e=(0,r.usePathname)(),t=(0,r.useRouter)();return(0,i.jsx)(l.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:s,children:e=>(0,i.jsx)(o.r,{title:e.title},e.path)})};let s=[{path:"/admin",title:"Statistics",permissions:[]},{path:"/admin/modules",title:"Modules",permissions:[]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},5979:function(e,t,n){"use strict";var i=n(4760);n.o(i,"usePathname")&&n.d(t,{usePathname:function(){return i.usePathname}}),n.o(i,"useRouter")&&n.d(t,{useRouter:function(){return i.useRouter}}),n.o(i,"useSearchParams")&&n.d(t,{useSearchParams:function(){return i.useSearchParams}})},1920:function(e,t,n){"use strict";var i=n(52);t.Z=e=>i.Z.get(e).then(e=>e.data)},4837:function(e,t,n){"use strict";n.d(t,{hY:function(){return s},jc:function(){return a}});var i=n(5414),r=n(1281),l=n(1920),o=n(52);let s=async()=>{await (0,o.Z)("/api/auth/logout"),await (0,r.JG)("/api/auth"),i.Am.success("Logged out successfully")},a=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,n=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),l=setInterval(async()=>{n&&n.closed&&(await (0,r.JG)("/api/auth"),i.Am.success("Logged in successfully!"),clearInterval(l))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:n}=(0,r.ZP)("/api/auth",l.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:n||!e?null:e.user,admin:n||!e?null:e.admin,isLoading:t}}},293:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var i=n(1402);function r(e={}){let{rerender:t=!1,delay:n=0}=e,r=(0,i.useRef)(!1),[l,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{r.current=!0;let e=null;return t&&(n>0?e=setTimeout(()=>{o(!0)},n):o(!0)),()=>{r.current=!1,t&&o(!1),e&&clearTimeout(e)}},[t]),[(0,i.useCallback)(()=>r.current,[]),l]}},7498:function(e,t,n){"use strict";n.d(t,{BA:function(){return u},n_:function(){return a}});var i=n(8058),r=n(1402),l=n(7796),o=n(3617);class s{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let n=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)n(t)};for(let t of e)n(t);let i=0;for(let[e,n]of this.keyMap)t?(t.nextKey=e,n.prevKey=t.key):(this.firstKey=e,n.prevKey=void 0),"item"===n.type&&(n.index=i++),(t=n).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function a(e){let{filter:t}=e,n=(0,i.q)(e),o=(0,r.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=(0,r.useCallback)(e=>new s(t?t(e):e),[t]),u=(0,r.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),c=(0,l.Kx)(e,a,u),d=(0,r.useMemo)(()=>new i.Z(c,n),[c,n]),h=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(null!=n.focusedKey&&!c.getItem(n.focusedKey)){let e;let t=h.current.getItem(n.focusedKey),i=[...h.current.getKeys()].map(e=>{let t=h.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),r=[...c.getKeys()].map(e=>{let t=c.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),l=i.length-r.length,o=Math.min(l>1?Math.max(t.index-l+1,0):t.index,r.length-1);for(;o>=0;){if(!d.isDisabled(r[o].key)){e=r[o];break}o<r.length-1?o++:(o>t.index&&(o=t.index),o--)}n.setFocusedKey(e?e.key:null)}h.current=c},[c,d,n,n.focusedKey]),{collection:c,disabledKeys:o,selectionManager:d}}function u(e){var t;let[n,i]=(0,o.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),l=(0,r.useMemo)(()=>null!=n?[n]:[],[n]),{collection:s,disabledKeys:u,selectionManager:c}=a({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:l,onSelectionChange:t=>{var r;let l=null!==(r=t.values().next().value)&&void 0!==r?r:null;l===n&&e.onSelectionChange&&e.onSelectionChange(l),i(l)}}),d=null!=n?s.getItem(n):null;return{collection:s,disabledKeys:u,selectionManager:c,selectedKey:n,setSelectedKey:i,selectedItem:d}}},4966:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});let i=e=>"object"==typeof e&&null!=e&&1===e.nodeType,r=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,l=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return r(n.overflowY,t)||r(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},o=(e,t,n,i,r,l,o,s)=>l<e&&o>t||l>e&&o<t?0:l<=e&&s<=n||o>=t&&s>=n?l-e-i:o>t&&s<n||l<e&&s>n?o-t+r:0,s=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},a=(e,t)=>{var n,r,a,u;if("undefined"==typeof document)return[];let{scrollMode:c,block:d,inline:h,boundary:f,skipOverflowHiddenElements:m}=t,p="function"==typeof f?f:e=>e!==f;if(!i(e))throw TypeError("Invalid target");let g=document.scrollingElement||document.documentElement,y=[],b=e;for(;i(b)&&p(b);){if((b=s(b))===g){y.push(b);break}null!=b&&b===document.body&&l(b)&&!l(document.documentElement)||null!=b&&l(b,m)&&y.push(b)}let w=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,v=null!=(u=null==(a=window.visualViewport)?void 0:a.height)?u:innerHeight,{scrollX:M,scrollY:K}=window,{height:k,width:x,top:S,right:W,bottom:C,left:E}=e.getBoundingClientRect(),{top:I,right:H,bottom:N,left:P}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),R="start"===d||"nearest"===d?S-I:"end"===d?C+N:S+k/2-I+N,j="center"===h?E+x/2-P+H:"end"===h?W+H:E-P,T=[];for(let e=0;e<y.length;e++){let t=y[e],{height:n,width:i,top:r,right:l,bottom:s,left:a}=t.getBoundingClientRect();if("if-needed"===c&&S>=0&&E>=0&&C<=v&&W<=w&&S>=r&&C<=s&&E>=a&&W<=l)break;let u=getComputedStyle(t),f=parseInt(u.borderLeftWidth,10),m=parseInt(u.borderTopWidth,10),p=parseInt(u.borderRightWidth,10),b=parseInt(u.borderBottomWidth,10),I=0,H=0,N="offsetWidth"in t?t.offsetWidth-t.clientWidth-f-p:0,P="offsetHeight"in t?t.offsetHeight-t.clientHeight-m-b:0,Z="offsetWidth"in t?0===t.offsetWidth?0:i/t.offsetWidth:0,F="offsetHeight"in t?0===t.offsetHeight?0:n/t.offsetHeight:0;if(g===t)I="start"===d?R:"end"===d?R-v:"nearest"===d?o(K,K+v,v,m,b,K+R,K+R+k,k):R-v/2,H="start"===h?j:"center"===h?j-w/2:"end"===h?j-w:o(M,M+w,w,f,p,M+j,M+j+x,x),I=Math.max(0,I+K),H=Math.max(0,H+M);else{I="start"===d?R-r-m:"end"===d?R-s+b+P:"nearest"===d?o(r,s,n,m,b+P,R,R+k,k):R-(r+n/2)+P/2,H="start"===h?j-a-f:"center"===h?j-(a+i/2)+N/2:"end"===h?j-l+p+N:o(a,l,i,f,p+N,j,j+x,x);let{scrollLeft:e,scrollTop:u}=t;I=0===F?0:Math.max(0,Math.min(u+I/F,t.scrollHeight-n/F+P)),H=0===Z?0:Math.max(0,Math.min(e+H/Z,t.scrollWidth-i/Z+N)),R+=u-I,j+=e-H}T.push({el:t,top:I,left:H})}return T},u=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function c(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(a(e,t));let n="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:i,top:r,left:l}of a(e,u(t)))i.scroll({top:r,left:l,behavior:n})}}},function(e){e.O(0,[687,9208,1281,5414,6187,5204,3866,7416,1744],function(){return e(e.s=7872)}),_N_E=e.O()}]);