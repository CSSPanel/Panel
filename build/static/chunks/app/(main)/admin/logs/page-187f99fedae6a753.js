(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6567],{9609:function(e,t,r){Promise.resolve().then(r.bind(r,2509))},679:function(e,t,r){"use strict";var n=r(2412),o=r(165),l=r(5979),s=r(1402),i=r(4837);t.default=e=>{let{children:t,flags:r}=e,{admin:a,isLoading:d}=(0,i.ZP)(),u=(0,l.useRouter)();return(0,s.useEffect)(()=>{if(!d&&(!a||r.length>0&&!r.some(e=>{var t;return null===(t=a.flags)||void 0===t?void 0:t.includes(e)})))return u.push("/")},[a,d,u,r]),d?(0,n.jsx)(o.c,{}):a?(0,n.jsx)(n.Fragment,{children:t}):(0,n.jsx)(n.Fragment,{children:"No Access"})}},4773:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});var n=r(2412),o=r(5979),l=r(8365),s=r(3327),i=r(4837);t.default=()=>{let e=(0,o.usePathname)(),t=(0,o.useRouter)(),{admin:r}=(0,i.ZP)(),d=(null==r?void 0:r.flags)||[],u=a.filter(e=>e.permissions.some(e=>d.includes(e)));return(0,n.jsx)(l.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:u,children:e=>(0,n.jsx)(s.r,{title:e.title},e.path)})};let a=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},2509:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(2412),o=r(1402),l=r(7284),s=r(2409),i=r(593),a=r(7543),d=r(1740),u=r(165),c=r(5979),m=r(4773),h=r(889),p=r(2155),f=r(679),g=r(1920),b=r(1281),v=r(8312),y=r(3958),w=r(3162),x=e=>{var t,r,o;let{admin:d,message:u,title:c,time:m}=e;return(0,n.jsxs)(l.w,{fullWidth:!0,children:[d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.u,{className:"flex gap-3",children:[(0,n.jsx)(v.J,{alt:(null===(t=d.user)||void 0===t?void 0:t.personaname)||d.player_name,height:40,radius:"sm",src:null===(r=d.user)||void 0===r?void 0:r.avatarmedium,width:40}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("p",{className:"text-md font-medium",children:(null===(o=d.user)||void 0===o?void 0:o.personaname)||d.player_name}),(0,n.jsx)("p",{className:"text-small text-default-500",children:"Flags"})]})]}),(0,n.jsx)(y.j,{})]}),(0,n.jsxs)(i.G,{children:[(0,n.jsx)("h4",{className:"text-lg font-medium",children:c}),(0,n.jsx)("p",{className:"text-sm",children:u})]}),(0,n.jsx)(y.j,{}),(0,n.jsx)(a.i,{className:"text-sm",children:(0,w.Q)(m)+" ago"})]})},j=()=>{var e;let[t,r]=(0,o.useState)(1),[v,y]=(0,o.useState)(""),[w]=(0,p.Nr)(v,1e3),{data:j,isLoading:k}=(0,b.ZP)("/api/admin/logs?page=".concat(t,"&rows=").concat(20,"&query=").concat(w),g.Z,{keepPreviousData:!0}),M=(0,o.useMemo)(()=>(null==j?void 0:j.count)?Math.ceil(j.count/20):0,[null==j?void 0:j.count,20]),N=(0,c.usePathname)(),K=m.r.find(e=>e.path===N);return(0,n.jsx)(f.default,{flags:(null==K?void 0:K.permissions)||[],children:(0,n.jsxs)(l.w,{children:[(0,n.jsxs)(s.u,{className:"text-2xl font-medium flex flex-row justify-between items-center",children:[(0,n.jsx)("div",{children:"Logs"}),(0,n.jsx)(h.Y,{label:"Search...",placeholder:"You can search by title or message...",className:"w-1/5",value:v,onValueChange:y,isClearable:!0})]}),(0,n.jsx)(i.G,{className:"grid lg:grid-cols-3 gap-4",children:k?(0,n.jsx)(u.c,{}):j&&(null===(e=j.results)||void 0===e?void 0:e.map(e=>(0,o.createElement)(x,{...e,key:e.id})))}),(0,n.jsx)(a.i,{children:(0,n.jsx)(d.g,{color:"primary",page:t,total:M,onChange:e=>r(e),className:"mx-auto mt-10",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})})]})})}},5979:function(e,t,r){"use strict";var n=r(4760);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},1920:function(e,t,r){"use strict";var n=r(52);t.Z=e=>n.Z.get(e).then(e=>e.data)},4837:function(e,t,r){"use strict";r.d(t,{hY:function(){return i},jc:function(){return a}});var n=r(5414),o=r(1281),l=r(1920),s=r(52);let i=async()=>{await (0,s.Z)("/api/auth/logout"),await (0,o.JG)("/api/auth"),n.Am.success("Logged out successfully")},a=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,r=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),l=setInterval(async()=>{r&&r.closed&&(await (0,o.JG)("/api/auth"),n.Am.success("Logged in successfully!"),clearInterval(l))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:r}=(0,o.ZP)("/api/auth",l.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:r||!e?null:e.user,admin:r||!e?null:e.admin,isLoading:t}}},7543:function(e,t,r){"use strict";r.d(t,{i:function(){return d}});var n=r(6500),o=r(7923),l=r(4299),s=r(1780),i=r(2412),a=(0,o.Gp)((e,t)=>{var r;let{as:o,className:a,children:d,...u}=e,c=(0,l.gy)(t),{slots:m,classNames:h}=(0,n.R)(),p=(0,s.W)(null==h?void 0:h.footer,a);return(0,i.jsx)(o||"div",{ref:c,className:null==(r=m.footer)?void 0:r.call(m,{class:p}),...u,children:d})});a.displayName="NextUI.CardFooter";var d=a},3958:function(e,t,r){"use strict";r.d(t,{j:function(){return d}});var n=r(453),o=(0,r(1319).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),l=r(1402),s=r(7923),i=r(2412),a=(0,s.Gp)((e,t)=>{let{Component:r,getDividerProps:s}=function(e){var t;let r,s;let{as:i,className:a,orientation:d,...u}=e,c=i||"hr";"hr"===c&&"vertical"===d&&(c="div");let{separatorProps:m}=(t={elementType:"string"==typeof c?c:"hr",orientation:d},s=(0,n.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...s,role:"separator","aria-orientation":r}}:{separatorProps:s}),h=(0,l.useMemo)(()=>o({orientation:d,className:a}),[d,a]);return{Component:c,getDividerProps:(0,l.useCallback)((e={})=>({className:h,role:"separator","data-orientation":d,...m,...u,...e}),[h,d,m,u])}}({...e});return(0,i.jsx)(r,{ref:t,...s()})});a.displayName="NextUI.Divider";var d=a},8312:function(e,t,r){"use strict";r.d(t,{J:function(){return m}});var n=r(1402),o=r(7923),l=(0,r(1319).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),s=r(4299),i=r(1780),a=r(5459),d=r(8562),u=r(2412),c=(0,o.Gp)((e,t)=>{let{Component:r,domRef:c,slots:m,classNames:h,isBlurred:p,isZoomed:f,fallbackSrc:g,removeWrapper:b,disableSkeleton:v,getImgProps:y,getWrapperProps:w,getBlurredImgProps:x}=function(e){let[t,r]=(0,o.oe)(e,l.variantKeys),{ref:u,as:c,src:m,className:h,classNames:p,loading:f,isBlurred:g,fallbackSrc:b,isLoading:v,disableSkeleton:y=!!b,removeWrapper:w=!1,onError:x,onLoad:j,srcSet:k,sizes:M,crossOrigin:N,...K}=t,W=(0,d.d)({src:m,loading:f,onError:x,onLoad:j,ignoreFallback:!1,srcSet:k,sizes:M,crossOrigin:N}),I="loaded"===W&&!v,S="loading"===W||v,C=e.isZoomed,P=(0,s.gy)(u),{w:z}=(0,n.useMemo)(()=>({w:t.width?"number"==typeof t.width?"".concat(t.width,"px"):t.width:"fit-content"}),[null==t?void 0:t.width]),E=(!m||!I)&&!!b,Z=S&&!y,H=(0,n.useMemo)(()=>l({...r,showSkeleton:Z}),[...Object.values(r),Z]),R=(0,i.W)(h,null==p?void 0:p.img),F=(0,n.useCallback)(()=>{let e=E?{backgroundImage:"url(".concat(b,")")}:{};return{className:H.wrapper({class:null==p?void 0:p.wrapper}),style:{...e,maxWidth:z}}},[H,E,b,null==p?void 0:p.wrapper]),T=(0,n.useCallback)(()=>({src:m,"aria-hidden":(0,a.PB)(!0),className:H.blurredImg({class:null==p?void 0:p.blurredImg})}),[H,m,null==p?void 0:p.blurredImg]);return{Component:c||"img",domRef:P,slots:H,classNames:p,isBlurred:g,disableSkeleton:y,fallbackSrc:b,removeWrapper:w,isZoomed:C,isLoading:S,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.W)(R,null==e?void 0:e.className);return{src:m,ref:P,"data-loaded":(0,a.PB)(I),className:H.img({class:t}),loading:f,srcSet:k,sizes:M,crossOrigin:N,...K}},getWrapperProps:F,getBlurredImgProps:T}}({...e,ref:t}),j=(0,u.jsx)(r,{ref:c,...y()});if(b)return j;let k=(0,u.jsx)("div",{className:m.zoomedWrapper({class:null==h?void 0:h.zoomedWrapper}),children:j});return p?(0,u.jsxs)("div",{...w(),children:[f?k:j,(0,n.cloneElement)(j,x())]}):f||!v||g?(0,u.jsxs)("div",{...w(),children:[" ",f?k:j]}):j});c.displayName="NextUI.Image";var m=c},7498:function(e,t,r){"use strict";r.d(t,{BA:function(){return d},n_:function(){return a}});var n=r(8058),o=r(1402),l=r(2896),s=r(3617);class i{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let r=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)r(t)};for(let t of e)r(t);let n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),"item"===r.type&&(r.index=n++),(t=r).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function a(e){let{filter:t}=e,r=(0,n.q)(e),s=(0,o.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=(0,o.useCallback)(e=>new i(t?t(e):e),[t]),d=(0,o.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),u=(0,l.Kx)(e,a,d),c=(0,o.useMemo)(()=>new n.Z(u,r),[u,r]),m=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(null!=r.focusedKey&&!u.getItem(r.focusedKey)){let e;let t=m.current.getItem(r.focusedKey),n=[...m.current.getKeys()].map(e=>{let t=m.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),o=[...u.getKeys()].map(e=>{let t=u.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),l=n.length-o.length,s=Math.min(l>1?Math.max(t.index-l+1,0):t.index,o.length-1);for(;s>=0;){if(!c.isDisabled(o[s].key)){e=o[s];break}s<o.length-1?s++:(s>t.index&&(s=t.index),s--)}r.setFocusedKey(e?e.key:null)}m.current=u},[u,c,r,r.focusedKey]),{collection:u,disabledKeys:s,selectionManager:c}}function d(e){var t;let[r,n]=(0,s.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),l=(0,o.useMemo)(()=>null!=r?[r]:[],[r]),{collection:i,disabledKeys:d,selectionManager:u}=a({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:l,onSelectionChange:t=>{var o;let l=null!==(o=t.values().next().value)&&void 0!==o?o:null;l===r&&e.onSelectionChange&&e.onSelectionChange(l),n(l)}}),c=null!=r?i.getItem(r):null;return{collection:i,disabledKeys:d,selectionManager:u,selectedKey:r,setSelectedKey:n,selectedItem:c}}},4966:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});let n=e=>"object"==typeof e&&null!=e&&1===e.nodeType,o=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,l=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},s=(e,t,r,n,o,l,s,i)=>l<e&&s>t||l>e&&s<t?0:l<=e&&i<=r||s>=t&&i>=r?l-e-n:s>t&&i<r||l<e&&i>r?s-t+o:0,i=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},a=(e,t)=>{var r,o,a,d;if("undefined"==typeof document)return[];let{scrollMode:u,block:c,inline:m,boundary:h,skipOverflowHiddenElements:p}=t,f="function"==typeof h?h:e=>e!==h;if(!n(e))throw TypeError("Invalid target");let g=document.scrollingElement||document.documentElement,b=[],v=e;for(;n(v)&&f(v);){if((v=i(v))===g){b.push(v);break}null!=v&&v===document.body&&l(v)&&!l(document.documentElement)||null!=v&&l(v,p)&&b.push(v)}let y=null!=(o=null==(r=window.visualViewport)?void 0:r.width)?o:innerWidth,w=null!=(d=null==(a=window.visualViewport)?void 0:a.height)?d:innerHeight,{scrollX:x,scrollY:j}=window,{height:k,width:M,top:N,right:K,bottom:W,left:I}=e.getBoundingClientRect(),{top:S,right:C,bottom:P,left:z}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),E="start"===c||"nearest"===c?N-S:"end"===c?W+P:N+k/2-S+P,Z="center"===m?I+M/2-z+C:"end"===m?K+C:I-z,H=[];for(let e=0;e<b.length;e++){let t=b[e],{height:r,width:n,top:o,right:l,bottom:i,left:a}=t.getBoundingClientRect();if("if-needed"===u&&N>=0&&I>=0&&W<=w&&K<=y&&N>=o&&W<=i&&I>=a&&K<=l)break;let d=getComputedStyle(t),h=parseInt(d.borderLeftWidth,10),p=parseInt(d.borderTopWidth,10),f=parseInt(d.borderRightWidth,10),v=parseInt(d.borderBottomWidth,10),S=0,C=0,P="offsetWidth"in t?t.offsetWidth-t.clientWidth-h-f:0,z="offsetHeight"in t?t.offsetHeight-t.clientHeight-p-v:0,R="offsetWidth"in t?0===t.offsetWidth?0:n/t.offsetWidth:0,F="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(g===t)S="start"===c?E:"end"===c?E-w:"nearest"===c?s(j,j+w,w,p,v,j+E,j+E+k,k):E-w/2,C="start"===m?Z:"center"===m?Z-y/2:"end"===m?Z-y:s(x,x+y,y,h,f,x+Z,x+Z+M,M),S=Math.max(0,S+j),C=Math.max(0,C+x);else{S="start"===c?E-o-p:"end"===c?E-i+v+z:"nearest"===c?s(o,i,r,p,v+z,E,E+k,k):E-(o+r/2)+z/2,C="start"===m?Z-a-h:"center"===m?Z-(a+n/2)+P/2:"end"===m?Z-l+f+P:s(a,l,n,h,f+P,Z,Z+M,M);let{scrollLeft:e,scrollTop:d}=t;S=0===F?0:Math.max(0,Math.min(d+S/F,t.scrollHeight-r/F+z)),C=0===R?0:Math.max(0,Math.min(e+C/R,t.scrollWidth-n/R+P)),E+=d-S,Z+=e-C}H.push({el:t,top:S,left:C})}return H},d=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function u(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(a(e,t));let r="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:n,top:o,left:l}of a(e,d(t)))n.scroll({top:o,left:l,behavior:r})}}},function(e){e.O(0,[687,2879,9208,1281,5414,6187,2163,5204,1973,5586,3866,7416,1744],function(){return e(e.s=9609)}),_N_E=e.O()}]);