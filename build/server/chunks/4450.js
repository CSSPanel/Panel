"use strict";exports.id=4450,exports.ids=[4450],exports.modules={77003:(e,t,l)=>{l.d(t,{r:()=>r});var r=l(93530).ck},7408:(e,t,l)=>{l.d(t,{n:()=>P});var r=l(29853),a=l(71711),s=l(3411),n=l(76729),i=l(74435),o=l(73530),d=l(22173),u=l(14246);let c=new WeakMap;function b(e,t,l){"string"==typeof t&&(t=t.replace(/\s+/g,""));let r=c.get(e);return`${r}-${l}-${t}`}class g{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}getFirstKey(){let e=this.collection.getFirstKey();return null!=e&&this.disabledKeys.has(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return null!=e&&this.disabledKeys.has(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do null==(e=this.collection.getKeyAfter(e))&&(e=this.collection.getFirstKey());while(this.disabledKeys.has(e));return e}getPreviousKey(e){do null==(e=this.collection.getKeyBefore(e))&&(e=this.collection.getLastKey());while(this.disabledKeys.has(e));return e}constructor(e,t,l,r=new Set){this.collection=e,this.flipDirection="rtl"===t&&"horizontal"===l,this.disabledKeys=r}}var f=l(98284),p=(0,r.Gp)((e,t)=>{var l,r,i;let{as:d,state:u,className:c,slots:g,classNames:p,...h}=e,y=(0,a.gy)(t),{tabPanelProps:m}=function(e,t,l){var r;let a=(0,o.pu)(l)?void 0:0,s=b(t,null!==(r=e.id)&&void 0!==r?r:null==t?void 0:t.selectedKey,"tabpanel"),i=(0,n.bE)({...e,id:s,"aria-labelledby":b(t,null==t?void 0:t.selectedKey,"tab")});return{tabPanelProps:(0,n.dG)(i,{tabIndex:a,role:"tabpanel","aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]})}}(e,u,y),{focusProps:v,isFocused:x,isFocusVisible:K}=(0,o.Fx)(),w=u.selectedItem,k=null==(l=null==w?void 0:w.props)?void 0:l.children,M=(0,s.W)(null==p?void 0:p.panel,c,null==(r=null==w?void 0:w.props)?void 0:r.className);return k?(0,f.jsx)(d||"div",{ref:y,"data-focus":x,"data-focus-visible":K,...(0,n.dG)(m,v,h),className:null==(i=g.panel)?void 0:i.call(g,{class:M}),"data-slot":"panel",children:k}):null});p.displayName="NextUI.TabPanel";var h=l(15546),y=l(31865),m=l(58258),v=l(28397),x=l(99804),K=l(82863),w=(0,r.Gp)((e,t)=>{var l;let{className:r,as:d,item:u,state:c,classNames:g,isDisabled:p,listRef:w,slots:k,motionProps:M,disableAnimation:C,disableCursorAnimation:N,shouldSelectOnPressUp:L,onClick:S,...A}=e,{key:D}=u,P=(0,a.gy)(t),W=d||(e.href?"a":"button"),{tabProps:I,isSelected:E,isDisabled:B,isPressed:F}=function(e,t,l){var r;let{key:a,isDisabled:s,shouldSelectOnPressUp:o}=e,{selectionManager:d,selectedKey:u}=t,c=a===u,g=s||t.isDisabled||t.disabledKeys.has(a),{itemProps:f,isPressed:p}=(0,i.Cs)({selectionManager:d,key:a,ref:l,isDisabled:g,shouldSelectOnPressUp:o,linkBehavior:"selection"}),h=b(t,a,"tab"),y=b(t,a,"tabpanel"),{tabIndex:m}=f,v=t.collection.getItem(a),x=(0,n.zL)(null==v?void 0:v.props,{isLink:!!(null==v?void 0:null===(r=v.props)||void 0===r?void 0:r.href),labelable:!0});return delete x.id,{tabProps:(0,n.dG)(x,f,{id:h,"aria-selected":c,"aria-disabled":g||void 0,"aria-controls":c?y:void 0,tabIndex:g?void 0:m,role:"tab"}),isSelected:c,isDisabled:g,isPressed:p}}({key:D,isDisabled:p,shouldSelectOnPressUp:L},c,P),j=p||B,{focusProps:R,isFocused:z,isFocusVisible:H}=(0,o.Fx)(),{hoverProps:T,isHovered:O}=(0,v.XI)({isDisabled:j}),V=(0,s.W)(null==g?void 0:g.tab,r),[,G]=(0,K.t)({rerender:!0});return(0,f.jsxs)(W,{ref:P,"data-disabled":(0,y.PB)(B),"data-focus":(0,y.PB)(z),"data-focus-visible":(0,y.PB)(H),"data-hover":(0,y.PB)(O),"data-hover-unselected":(0,y.PB)((O||F)&&!E),"data-pressed":(0,y.PB)(F),"data-selected":(0,y.PB)(E),"data-slot":"tab",...(0,n.dG)(I,j?{}:{...R,...T},(0,h.z)(A,{enabled:"string"==typeof W,omitPropNames:new Set(["title"])})),className:null==(l=k.tab)?void 0:l.call(k,{class:V}),title:null==A?void 0:A.titleValue,type:"button"===W?"button":void 0,onClick:()=>{(0,n.tS)(S,I.onClick),(null==P?void 0:P.current)&&(null==w?void 0:w.current)&&(0,m.Z)(P.current,{scrollMode:"if-needed",behavior:"smooth",block:"end",inline:"end",boundary:null==w?void 0:w.current})},children:[E&&!C&&!N&&G?(0,f.jsx)(x.E.span,{className:k.cursor({class:null==g?void 0:g.cursor}),"data-slot":"cursor",layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.5},...M}):null,(0,f.jsx)("div",{className:k.tabContent({class:null==g?void 0:g.tabContent}),"data-slot":"tabContent",children:u.rendered})]})});w.displayName="NextUI.Tab";var k=l(29677),M=l(14090),C=l(33244),N=(0,M.tv)({slots:{base:"inline-flex",tabList:["flex","p-1","h-fit","gap-2","items-center","flex-nowrap","overflow-x-scroll","scrollbar-hide","bg-default-100"],tab:["z-0","w-full","px-3","py-1","flex","group","relative","justify-center","items-center","outline-none","cursor-pointer","transition-opacity","tap-highlight-transparent","data-[disabled=true]:cursor-not-allowed","data-[disabled=true]:opacity-30","data-[hover-unselected=true]:opacity-disabled",...C.Dh],tabContent:["relative","z-10","text-inherit","whitespace-nowrap","transition-colors","text-default-500","group-data-[selected=true]:text-foreground"],cursor:["absolute","z-0","bg-white"],panel:["py-3","px-1","outline-none",...C.Dh]},variants:{variant:{solid:{cursor:"inset-0"},light:{tabList:"bg-transparent dark:bg-transparent",cursor:"inset-0"},underlined:{tabList:"bg-transparent dark:bg-transparent",cursor:"h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"},bordered:{tabList:"bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",cursor:"inset-0"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{tabList:"rounded-medium",tab:"h-7 text-tiny rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"h-8 text-small rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"h-9 text-medium rounded-medium",cursor:"rounded-medium"}},radius:{none:{tabList:"rounded-none",tab:"rounded-none",cursor:"rounded-none"},sm:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"rounded-medium",cursor:"rounded-medium"},full:{tabList:"rounded-full",tab:"rounded-full",cursor:"rounded-full"}},fullWidth:{true:{base:"w-full",tabList:"w-full"}},isDisabled:{true:{tabList:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{tab:"transition-none",tabContent:"transition-none"}}},defaultVariants:{color:"default",variant:"solid",size:"md",fullWidth:!1,isDisabled:!1,disableAnimation:!1},compoundVariants:[{variant:["solid","bordered","light"],color:"default",class:{cursor:["bg-background","dark:bg-default","shadow-small"],tabContent:"group-data-[selected=true]:text-default-foreground"}},{variant:["solid","bordered","light"],color:"primary",class:{cursor:k.J.solid.primary,tabContent:"group-data-[selected=true]:text-primary-foreground"}},{variant:["solid","bordered","light"],color:"secondary",class:{cursor:k.J.solid.secondary,tabContent:"group-data-[selected=true]:text-secondary-foreground"}},{variant:["solid","bordered","light"],color:"success",class:{cursor:k.J.solid.success,tabContent:"group-data-[selected=true]:text-success-foreground"}},{variant:["solid","bordered","light"],color:"warning",class:{cursor:k.J.solid.warning,tabContent:"group-data-[selected=true]:text-warning-foreground"}},{variant:["solid","bordered","light"],color:"danger",class:{cursor:k.J.solid.danger,tabContent:"group-data-[selected=true]:text-danger-foreground"}},{variant:"underlined",color:"default",class:{cursor:"bg-foreground",tabContent:"group-data-[selected=true]:text-foreground"}},{variant:"underlined",color:"primary",class:{cursor:"bg-primary",tabContent:"group-data-[selected=true]:text-primary"}},{variant:"underlined",color:"secondary",class:{cursor:"bg-secondary",tabContent:"group-data-[selected=true]:text-secondary"}},{variant:"underlined",color:"success",class:{cursor:"bg-success",tabContent:"group-data-[selected=true]:text-success"}},{variant:"underlined",color:"warning",class:{cursor:"bg-warning",tabContent:"group-data-[selected=true]:text-warning"}},{variant:"underlined",color:"danger",class:{cursor:"bg-danger",tabContent:"group-data-[selected=true]:text-danger"}},{disableAnimation:!0,variant:"underlined",class:{tab:["after:content-['']","after:absolute","after:bottom-0","after:h-[2px]","after:w-[80%]","after:opacity-0","after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]","data-[selected=true]:after:opacity-100"]}},{disableAnimation:!0,color:"default",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-default data-[selected=true]:text-default-foreground"}},{disableAnimation:!0,color:"primary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"}},{disableAnimation:!0,color:"secondary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground"}},{disableAnimation:!0,color:"success",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-success data-[selected=true]:text-success-foreground"}},{disableAnimation:!0,color:"warning",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground"}},{disableAnimation:!0,color:"danger",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground"}},{disableAnimation:!0,color:"default",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-foreground"}},{disableAnimation:!0,color:"primary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-primary"}},{disableAnimation:!0,color:"secondary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-secondary"}},{disableAnimation:!0,color:"success",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-success"}},{disableAnimation:!0,color:"warning",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-warning"}},{disableAnimation:!0,color:"danger",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-danger"}}],compoundSlots:[{variant:"underlined",slots:["tab","tabList","cursor"],class:["rounded-none"]}]}),L=l(8694);function S(e,t){let l=null;if(e){for(l=e.getFirstKey();t.has(l)&&l!==e.getLastKey();)l=e.getKeyAfter(l);t.has(l)&&l===e.getLastKey()&&(l=e.getFirstKey())}return l}var A=l(61788);function D(e,t){var l;let{Component:o,values:b,state:y,getBaseProps:m,getTabListProps:v}=function(e){let[t,l]=(0,r.oe)(e,N.variantKeys),{ref:o,as:b,className:f,classNames:p,children:y,disableCursorAnimation:m,shouldSelectOnPressUp:v=!0,motionProps:x,...K}=t,w=b||"div",k="string"==typeof w,M=(0,a.gy)(o),C=function(e){var t;let l=(0,L.BA)({...e,suppressTextValueWarning:!0,defaultSelectedKey:null!==(t=e.defaultSelectedKey)&&void 0!==t?t:S(e.collection,e.disabledKeys?new Set(e.disabledKeys):new Set)}),{selectionManager:r,collection:a,selectedKey:s}=l,n=(0,d.useRef)(s);return(0,d.useEffect)(()=>{let e=s;(r.isEmpty||!a.getItem(e))&&null!=(e=S(a,l.disabledKeys))&&r.setSelectedKeys([e]),(null==e||null!=r.focusedKey)&&(r.isFocused||e===n.current)||r.setFocusedKey(e),n.current=e}),{...l,isDisabled:e.isDisabled||!1}}({children:y,...K}),{tabListProps:A}=function(e,t,l){let{orientation:r="horizontal",keyboardActivation:a="automatic"}=e,{collection:s,selectionManager:o,disabledKeys:b}=t,{direction:f}=(0,u.bU)(),p=(0,d.useMemo)(()=>new g(s,f,r,b),[s,b,r,f]),{collectionProps:h}=(0,i.gq)({ref:l,selectionManager:o,keyboardDelegate:p,selectOnFocus:"automatic"===a,disallowEmptySelection:!0,scrollRef:l,linkBehavior:"selection"}),y=(0,n.Me)();c.set(t,y);let m=(0,n.bE)({...e,id:y});return{tabListProps:{...(0,n.dG)(h,m),role:"tablist","aria-orientation":r,tabIndex:void 0}}}(K,C,M),D=(0,d.useMemo)(()=>N({...l,className:f}),[...Object.values(l),f]),P=(0,s.W)(null==p?void 0:p.base,f),W=(0,d.useMemo)(()=>({state:C,slots:D,classNames:p,motionProps:x,listRef:M,shouldSelectOnPressUp:v,disableCursorAnimation:m,isDisabled:null==e?void 0:e.isDisabled,disableAnimation:null==e?void 0:e.disableAnimation}),[C,D,M,x,m,v,null==e?void 0:e.disableAnimation,null==e?void 0:e.isDisabled,p]),I=(0,d.useCallback)(e=>({"data-slot":"base",className:D.base({class:(0,s.W)(P,null==e?void 0:e.className)}),...(0,n.dG)((0,h.z)(K,{enabled:k}),e)}),[P,K,D]),E=(0,d.useCallback)(e=>({ref:M,"data-slot":"tabList",className:D.tabList({class:(0,s.W)(null==p?void 0:p.tabList,null==e?void 0:e.className)}),...(0,n.dG)(A,e)}),[M,A,p,D]);return{Component:w,domRef:M,state:C,values:W,getBaseProps:I,getTabListProps:E}}({...e,ref:t}),x=(0,d.useId)(),K=!e.disableAnimation&&!e.disableCursorAnimation,k={state:y,listRef:b.listRef,slots:b.slots,classNames:b.classNames,isDisabled:b.isDisabled,motionProps:b.motionProps,disableAnimation:b.disableAnimation,shouldSelectOnPressUp:b.shouldSelectOnPressUp,disableCursorAnimation:b.disableCursorAnimation},M=[...y.collection].map(e=>(0,f.jsx)(w,{item:e,...k,...e.props},e.key));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{...m(),children:(0,f.jsx)(o,{...v(),children:K?(0,f.jsx)(A.S,{id:x,children:M}):M})}),(0,f.jsx)(p,{classNames:b.classNames,slots:b.slots,state:b.state},null==(l=y.selectedItem)?void 0:l.key)]})}var P=(0,r.Gp)(D);D.displayName="NextUI.Tabs"},8694:(e,t,l)=>{l.d(t,{BA:()=>d,n_:()=>o});var r=l(9784),a=l(22173),s=l(44984),n=l(80547);class i{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let l=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)l(t)};for(let t of e)l(t);let r=0;for(let[e,l]of this.keyMap)t?(t.nextKey=e,l.prevKey=t.key):(this.firstKey=e,l.prevKey=void 0),"item"===l.type&&(l.index=r++),(t=l).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function o(e){let{filter:t}=e,l=(0,r.q)(e),n=(0,a.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),o=(0,a.useCallback)(e=>new i(t?t(e):e),[t]),d=(0,a.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),u=(0,s.Kx)(e,o,d),c=(0,a.useMemo)(()=>new r.Z(u,l),[u,l]),b=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(null!=l.focusedKey&&!u.getItem(l.focusedKey)){let e;let t=b.current.getItem(l.focusedKey),r=[...b.current.getKeys()].map(e=>{let t=b.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),a=[...u.getKeys()].map(e=>{let t=u.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),s=r.length-a.length,n=Math.min(s>1?Math.max(t.index-s+1,0):t.index,a.length-1);for(;n>=0;){if(!c.isDisabled(a[n].key)){e=a[n];break}n<a.length-1?n++:(n>t.index&&(n=t.index),n--)}l.setFocusedKey(e?e.key:null)}b.current=u},[u,c,l,l.focusedKey]),{collection:u,disabledKeys:n,selectionManager:c}}function d(e){var t;let[l,r]=(0,n.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),s=(0,a.useMemo)(()=>null!=l?[l]:[],[l]),{collection:i,disabledKeys:d,selectionManager:u}=o({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:s,onSelectionChange:t=>{var a;let s=null!==(a=t.values().next().value)&&void 0!==a?a:null;s===l&&e.onSelectionChange&&e.onSelectionChange(s),r(s)}}),c=null!=l?i.getItem(l):null;return{collection:i,disabledKeys:d,selectionManager:u,selectedKey:l,setSelectedKey:r,selectedItem:c}}},61788:(e,t,l)=>{l.d(t,{S:()=>u});var r=l(22173),a=l(4471);let s=(0,r.createContext)(null);var n=l(93879);let i=e=>!e.isLayoutDirty&&e.willUpdate(!1),o=e=>!0===e,d=e=>o(!0===e)||"id"===e,u=({children:e,id:t,inherit:l=!0})=>{let u=(0,r.useContext)(a.p),c=(0,r.useContext)(s),[b,g]=(0,n.N)(),f=(0,r.useRef)(null),p=u.id||c;null===f.current&&(d(l)&&p&&(t=t?p+"-"+t:p),f.current={id:t,group:o(l)&&u.group||function(){let e=new Set,t=new WeakMap,l=()=>e.forEach(i);return{add:r=>{e.add(r),t.set(r,r.addEventListener("willUpdate",l))},remove:r=>{e.delete(r);let a=t.get(r);a&&(a(),t.delete(r)),l()},dirty:l}}()});let h=(0,r.useMemo)(()=>({...f.current,forceRender:b}),[g]);return r.createElement(a.p.Provider,{value:h},e)}},58258:(e,t,l)=>{l.d(t,{Z:()=>u});let r=e=>"object"==typeof e&&null!=e&&1===e.nodeType,a=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,s=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let l=getComputedStyle(e,null);return a(l.overflowY,t)||a(l.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},n=(e,t,l,r,a,s,n,i)=>s<e&&n>t||s>e&&n<t?0:s<=e&&i<=l||n>=t&&i>=l?s-e-r:n>t&&i<l||s<e&&i>l?n-t+a:0,i=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},o=(e,t)=>{var l,a,o,d;if("undefined"==typeof document)return[];let{scrollMode:u,block:c,inline:b,boundary:g,skipOverflowHiddenElements:f}=t,p="function"==typeof g?g:e=>e!==g;if(!r(e))throw TypeError("Invalid target");let h=document.scrollingElement||document.documentElement,y=[],m=e;for(;r(m)&&p(m);){if((m=i(m))===h){y.push(m);break}null!=m&&m===document.body&&s(m)&&!s(document.documentElement)||null!=m&&s(m,f)&&y.push(m)}let v=null!=(a=null==(l=window.visualViewport)?void 0:l.width)?a:innerWidth,x=null!=(d=null==(o=window.visualViewport)?void 0:o.height)?d:innerHeight,{scrollX:K,scrollY:w}=window,{height:k,width:M,top:C,right:N,bottom:L,left:S}=e.getBoundingClientRect(),{top:A,right:D,bottom:P,left:W}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),I="start"===c||"nearest"===c?C-A:"end"===c?L+P:C+k/2-A+P,E="center"===b?S+M/2-W+D:"end"===b?N+D:S-W,B=[];for(let e=0;e<y.length;e++){let t=y[e],{height:l,width:r,top:a,right:s,bottom:i,left:o}=t.getBoundingClientRect();if("if-needed"===u&&C>=0&&S>=0&&L<=x&&N<=v&&C>=a&&L<=i&&S>=o&&N<=s)break;let d=getComputedStyle(t),g=parseInt(d.borderLeftWidth,10),f=parseInt(d.borderTopWidth,10),p=parseInt(d.borderRightWidth,10),m=parseInt(d.borderBottomWidth,10),A=0,D=0,P="offsetWidth"in t?t.offsetWidth-t.clientWidth-g-p:0,W="offsetHeight"in t?t.offsetHeight-t.clientHeight-f-m:0,F="offsetWidth"in t?0===t.offsetWidth?0:r/t.offsetWidth:0,j="offsetHeight"in t?0===t.offsetHeight?0:l/t.offsetHeight:0;if(h===t)A="start"===c?I:"end"===c?I-x:"nearest"===c?n(w,w+x,x,f,m,w+I,w+I+k,k):I-x/2,D="start"===b?E:"center"===b?E-v/2:"end"===b?E-v:n(K,K+v,v,g,p,K+E,K+E+M,M),A=Math.max(0,A+w),D=Math.max(0,D+K);else{A="start"===c?I-a-f:"end"===c?I-i+m+W:"nearest"===c?n(a,i,l,f,m+W,I,I+k,k):I-(a+l/2)+W/2,D="start"===b?E-o-g:"center"===b?E-(o+r/2)+P/2:"end"===b?E-s+p+P:n(o,s,r,g,p+P,E,E+M,M);let{scrollLeft:e,scrollTop:d}=t;A=0===j?0:Math.max(0,Math.min(d+A/j,t.scrollHeight-l/j+W)),D=0===F?0:Math.max(0,Math.min(e+D/F,t.scrollWidth-r/F+P)),I+=d-A,E+=e-D}B.push({el:t,top:A,left:D})}return B},d=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function u(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(o(e,t));let l="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:r,top:a,left:s}of o(e,d(t)))r.scroll({top:a,left:s,behavior:l})}}};