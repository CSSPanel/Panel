"use strict";exports.id=5399,exports.ids=[5399],exports.modules={99251:(e,t,l)=>{l.d(t,{d:()=>R});var r=l(19298),s=l(87904),n=l(31065),a=(0,s.tv)({base:"px-2",variants:{variant:{light:"",shadow:"px-4 shadow-medium rounded-medium bg-content1",bordered:"px-4 border-medium border-divider rounded-medium",splitted:"group is-splitted flex flex-col gap-2"},fullWidth:{true:"w-full"}},defaultVariants:{variant:"light",fullWidth:!0}}),i=(0,s.tv)({slots:{base:["group-[.is-splitted]:px-4","group-[.is-splitted]:bg-content1","group-[.is-splitted]:shadow-medium","group-[.is-splitted]:rounded-medium"],heading:"",trigger:["flex py-4 w-full h-full gap-3 outline-none items-center tap-highlight-transparent",...n.Dh],startContent:"flex-shrink-0",indicator:"text-default-400",titleWrapper:"flex-1 flex flex-col text-start",title:"text-foreground text-large",subtitle:"text-small text-foreground-500 font-normal",content:"py-2"},variants:{isCompact:{true:{trigger:"py-2",title:"text-medium",subtitle:"text-small",indicator:"text-medium",content:"py-1"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},hideIndicator:{true:{indicator:"hidden"}},disableAnimation:{true:{content:"hidden data-[open=true]:block"},false:{indicator:"transition-transform",trigger:"transition-opacity"}},disableIndicatorAnimation:{true:{indicator:"transition-none"},false:{indicator:"rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90"}}},defaultVariants:{size:"md",radius:"lg",isDisabled:!1,hideIndicator:!1,disableAnimation:!1,disableIndicatorAnimation:!1}}),o=l(81062),u=l(88491),d=l(67049),c=l(1528),p=l(87183),h=l(52869),f=l(52646),g=l(39288),m=l(82167),y=l(33210),v=l(32756),b=l(91733),x=l(57394),w=l(35236),P=l(1179),S=l(98248),N=l(25388),C=l(65175),k=l(46405),q=l(83892),M=l(85360);class j extends N.Hg{constructor(){super(...arguments),this.values=[]}add(e){let t=q.G.has(e)?"transform":C.t.has(e)?(0,k.D)(e):void 0;t&&((0,M.y4)(this.values,t),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}var B=l(58731),F=l(13608),I=l(28123),O=l(99447),_=l(87552),D=l(99045),K=(0,w.Gp)((e,t)=>{let{Component:l,classNames:s,slots:n,indicator:a,children:w,title:N,subtitle:C,startContent:k,isOpen:q,isDisabled:M,hideIndicator:K,keepContentMounted:z,disableAnimation:A,motionProps:E,getBaseProps:T,getHeadingProps:U,getButtonProps:R,getTitleProps:W,getSubtitleProps:L,getContentProps:G,getIndicatorProps:H}=function(e){var t;let{ref:l,as:s,item:n,onFocusChange:a}=e,{state:w,className:P,indicator:S,children:N,title:C,subtitle:k,startContent:q,motionProps:M,focusedKey:j,isCompact:B=!1,classNames:F={},isDisabled:I=!1,hideIndicator:O=!1,disableAnimation:_=!1,keepContentMounted:D=!1,disableIndicatorAnimation:K=!1,onPress:z,onPressStart:A,onPressEnd:E,onPressChange:T,onPressUp:U,onClick:R,...W}=e,L=s||"div",G="string"==typeof L,H=(0,c.gy)(l),$=w.disabledKeys.has(n.key)||I,Y=w.selectionManager.isSelected(n.key),{buttonProps:V,regionProps:X}=function(e,t,l){let{item:r,isDisabled:s}=e,n=r.key,a=t.selectionManager,i=(0,h.useId)(),o=(0,h.useId)(),u=t.disabledKeys.has(r.key)||s;(0,h.useEffect)(()=>{n===t.focusedKey&&document.activeElement!==l.current&&l.current&&(0,f.e)(l.current)},[l,n,t.focusedKey]);let d=(0,h.useCallback)(e=>{a.canSelectItem(n)&&(a.select(n,e),t.toggleKey(n))},[n,a]),c=(0,h.useCallback)(e=>{"replace"===a.selectionBehavior&&a.extendSelection(e),a.setFocusedKey(e)},[a]),{buttonProps:p}=function(e,t){let l,{elementType:r="button",isDisabled:s,onPress:n,onPressStart:a,onPressEnd:i,onPressUp:o,onPressChange:u,preventFocusOnPress:d,allowFocusWhenDisabled:c,onClick:p,href:h,target:f,rel:b,type:x="button"}=e;l="button"===r?{type:x,disabled:s}:{role:"button",href:"a"!==r||s?void 0:h,target:"a"===r?f:void 0,type:"input"===r?x:void 0,disabled:"input"===r?s:void 0,"aria-disabled":s&&"input"!==r?s:void 0,rel:"a"===r?b:void 0};let{pressProps:w,isPressed:P}=(0,y.r)({onPressStart:a,onPressEnd:i,onPressChange:u,onPress:n,onPressUp:o,isDisabled:s,preventFocusOnPress:d,ref:t}),{focusableProps:S}=(0,v.kc)(e,t);c&&(S.tabIndex=s?-1:S.tabIndex);let N=(0,g.d)(S,w,(0,m.z)(e,{labelable:!0}));return{isPressed:P,buttonProps:(0,g.d)(l,N,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],"aria-current":e["aria-current"],onClick:e=>{p&&(p(e),console.warn("onClick is deprecated, please use onPress"))}})}}({id:i,elementType:"button",isDisabled:u,onKeyDown:(0,h.useCallback)(e=>{let l={ArrowDown:()=>{let e=t.collection.getKeyAfter(n);if(e&&t.disabledKeys.has(e)){let l=t.collection.getKeyAfter(e);l&&c(l)}else e&&c(e)},ArrowUp:()=>{let e=t.collection.getKeyBefore(n);if(e&&t.disabledKeys.has(e)){let l=t.collection.getKeyBefore(e);l&&c(l)}else e&&c(e)},Home:()=>{let e=t.collection.getFirstKey();e&&c(e)},End:()=>{let e=t.collection.getLastKey();e&&c(e)}}[e.key];l&&(e.preventDefault(),a.canSelectItem(n)&&l(e))},[n,a]),onPress:d},l),b=t.selectionManager.isSelected(r.key);return{buttonProps:{...p,"aria-expanded":b,"aria-controls":b?o:void 0},regionProps:{id:o,role:"region","aria-labelledby":i}}}({item:n,isDisabled:$},{...w,focusedKey:j},H),{onFocus:J,onBlur:Q,...Z}=V,{isFocused:ee,isFocusVisible:et,focusProps:el}=(0,r.F)({autoFocus:null==(t=n.props)?void 0:t.autoFocus}),{isHovered:er,hoverProps:es}=(0,x.X)({isDisabled:$}),{pressProps:en,isPressed:ea}=(0,y.r)({ref:H,isDisabled:$,onPress:z,onPressStart:A,onPressEnd:E,onPressChange:T,onPressUp:U}),ei=(0,h.useCallback)(()=>{null==a||a(!0,n.key)},[]),eo=(0,h.useCallback)(()=>{null==a||a(!1,n.key)},[]),eu=(0,h.useMemo)(()=>({...F}),[(0,o.Xx)(F)]),ed=(0,h.useMemo)(()=>i({isCompact:B,isDisabled:$,hideIndicator:O,disableAnimation:_,disableIndicatorAnimation:K}),[B,$,O,_,K]),ec=(0,u.W)(null==eu?void 0:eu.base,P),ep=(0,h.useCallback)((e={})=>({"data-open":(0,d.PB)(Y),"data-disabled":(0,d.PB)($),className:ed.base({class:ec}),...(0,g.d)((0,p.z)(W,{enabled:G}),e)}),[ec,G,W,ed,n.props,Y,$]),eh=(0,h.useCallback)((e={})=>({"data-open":(0,d.PB)(Y),"data-disabled":(0,d.PB)($),className:ed.content({class:null==eu?void 0:eu.content}),...(0,g.d)(X,e)}),[ed,eu,X,Y,$,null==eu?void 0:eu.content]),ef=(0,h.useCallback)((e={})=>({"aria-hidden":(0,d.PB)(!0),"data-open":(0,d.PB)(Y),"data-disabled":(0,d.PB)($),className:ed.indicator({class:null==eu?void 0:eu.indicator}),...e}),[ed,null==eu?void 0:eu.indicator,Y,$,null==eu?void 0:eu.indicator]),eg=(0,h.useCallback)((e={})=>({"data-open":(0,d.PB)(Y),"data-disabled":(0,d.PB)($),className:ed.heading({class:null==eu?void 0:eu.heading}),...e}),[ed,null==eu?void 0:eu.heading,Y,$,null==eu?void 0:eu.heading]),em=(0,h.useCallback)((e={})=>({"data-open":(0,d.PB)(Y),"data-disabled":(0,d.PB)($),className:ed.title({class:null==eu?void 0:eu.title}),...e}),[ed,null==eu?void 0:eu.title,Y,$,null==eu?void 0:eu.title]),ey=(0,h.useCallback)((e={})=>({"data-open":(0,d.PB)(Y),"data-disabled":(0,d.PB)($),className:ed.subtitle({class:null==eu?void 0:eu.subtitle}),...e}),[ed,eu,Y,$,null==eu?void 0:eu.subtitle]);return{Component:L,item:n,slots:ed,classNames:eu,domRef:H,indicator:S,children:N,title:C,subtitle:k,startContent:q,isOpen:Y,isDisabled:$,hideIndicator:O,keepContentMounted:D,disableAnimation:_,motionProps:M,getBaseProps:ep,getHeadingProps:eg,getButtonProps:(e={})=>{var t,l;return{ref:H,"data-open":(0,d.PB)(Y),"data-focus":(0,d.PB)(ee),"data-focus-visible":(0,d.PB)(et),"data-disabled":(0,d.PB)($),"data-hover":(0,d.PB)(er),"data-pressed":(0,d.PB)(ea),className:ed.trigger({class:null==eu?void 0:eu.trigger}),onFocus:(0,o.v0)(ei,J,el.onFocus,W.onFocus,null==(t=n.props)?void 0:t.onFocus),onBlur:(0,o.v0)(eo,Q,el.onBlur,W.onBlur,null==(l=n.props)?void 0:l.onBlur),...(0,g.d)(Z,es,en,e),onClick:(0,b.t)(en.onClick,R)}},getContentProps:eh,getIndicatorProps:ef,getTitleProps:em,getSubtitleProps:ey}}({...e,ref:t}),$=(0,S.h)(()=>new j("auto")),Y=(0,h.useMemo)(()=>"function"==typeof a?a({indicator:(0,D.jsx)(P.D,{}),isOpen:q,isDisabled:M}):a||null,[a,q,M])||(0,D.jsx)(P.D,{}),V=(0,h.useMemo)(()=>A?(0,D.jsx)("div",{...G(),children:w}):z?(0,D.jsx)(B.X,{features:F.H,children:(0,D.jsx)(I.m.section,{animate:q?"enter":"exit",exit:"exit",initial:"exit",style:{overflowY:"hidden",willChange:$},variants:_.y7.collapse,...E,children:(0,D.jsx)("div",{...G(),children:w})},"accordion-content")}):(0,D.jsx)(O.M,{initial:!1,children:q&&(0,D.jsx)(B.X,{features:F.H,children:(0,D.jsx)(I.m.section,{animate:"enter",exit:"exit",initial:"exit",style:{overflowY:"hidden",willChange:$},variants:_.y7.collapse,...E,children:(0,D.jsx)("div",{...G(),children:w})},"accordion-content")})}),[q,A,z,w,E]);return(0,D.jsxs)(l,{...T(),children:[(0,D.jsx)("h2",{...U(),children:(0,D.jsxs)("button",{...R(),children:[k&&(0,D.jsx)("div",{className:n.startContent({class:null==s?void 0:s.startContent}),children:k}),(0,D.jsxs)("div",{className:n.titleWrapper({class:null==s?void 0:s.titleWrapper}),children:[N&&(0,D.jsx)("span",{...W(),children:N}),C&&(0,D.jsx)("span",{...L(),children:C})]}),!K&&Y&&(0,D.jsx)("span",{...H(),children:Y})]})}),V]})});K.displayName="NextUI.AccordionItem";var z=l(61953),A=l(71593),E=l(13888),T=l(82182),U=(0,w.Gp)((e,t)=>{let{Component:l,values:r,state:s,isSplitted:n,showDivider:i,getBaseProps:o,disableAnimation:u,handleFocusChanged:d,itemClasses:f}=function(e){let{ref:t,as:l,className:r,items:s,variant:n,motionProps:i,expandedKeys:o,disabledKeys:u,selectedKeys:d,children:f,defaultExpandedKeys:m,selectionMode:y="single",selectionBehavior:v="toggle",keepContentMounted:b=!1,disallowEmptySelection:x,defaultSelectedKeys:w,onExpandedChange:P,onSelectionChange:S,dividerProps:N={},isCompact:C=!1,isDisabled:k=!1,showDivider:q=!0,hideIndicator:M=!1,disableAnimation:j=!1,disableIndicatorAnimation:B=!1,itemClasses:F,...I}=e,[O,_]=(0,h.useState)(null),D=l||"div",K="string"==typeof D,E=(0,c.gy)(t),T=(0,h.useMemo)(()=>a({variant:n,className:r}),[n,r]),U={children:(0,h.useMemo)(()=>{let e=[];return h.Children.map(f,t=>{var l;if(h.isValidElement(t)&&"string"!=typeof(null==(l=t.props)?void 0:l.children)){let l=h.cloneElement(t,{hasChildItems:!1});e.push(l)}else e.push(t)}),e},[f]),items:s},R={expandedKeys:o,defaultExpandedKeys:m,onExpandedChange:P},W={disabledKeys:u,selectedKeys:d,selectionMode:y,selectionBehavior:v,disallowEmptySelection:x,defaultSelectedKeys:null!=w?w:m,onSelectionChange:S,...U,...R},L=(0,z.D)(W);L.selectionManager.setFocusedKey=e=>{_(e)};let{accordionProps:G}=function(e,t,l){let{listProps:r}=(0,A._)({...e,...t,allowsTabNavigation:!0,disallowSelectAll:!0,ref:l});return delete r.onKeyDownCapture,{accordionProps:{...r,tabIndex:void 0}}}({...U,...R},L,E);return{Component:D,values:(0,h.useMemo)(()=>({state:L,focusedKey:O,motionProps:i,isCompact:C,isDisabled:k,hideIndicator:M,disableAnimation:j,keepContentMounted:b,disableIndicatorAnimation:B}),[O,C,k,M,d,j,b,null==L?void 0:L.expandedKeys.values,B,L.expandedKeys.size,L.disabledKeys.size,i]),state:L,focusedKey:O,getBaseProps:(0,h.useCallback)((e={})=>({ref:E,className:T,"data-orientation":"vertical",...(0,g.d)(G,(0,p.z)(I,{enabled:K}),e)}),[]),isSplitted:"splitted"===n,classNames:T,showDivider:q,dividerProps:N,disableAnimation:j,handleFocusChanged:(0,h.useCallback)((e,t)=>{e&&_(t)},[]),itemClasses:F}}({...e,ref:t}),m=(0,h.useCallback)((e,t)=>d(e,t),[d]),y=(0,h.useMemo)(()=>[...s.collection].map((e,t)=>{let l={...f,...e.props.classNames||{}};return(0,D.jsxs)(h.Fragment,{children:[(0,D.jsx)(K,{item:e,onFocusChange:m,...r,...e.props,classNames:l}),!e.props.hidden&&!n&&i&&t<s.collection.size-1&&(0,D.jsx)(T.j,{})]},e.key)}),[r,f,m,n,i,s.collection]);return(0,D.jsx)(l,{...o(),children:u?y:(0,D.jsx)(E.S,{children:y})})});U.displayName="NextUI.Accordion";var R=U},58931:(e,t,l)=>{l.d(t,{G:()=>r});var r=l(9854).c},7014:(e,t,l)=>{l.d(t,{u:()=>u});var r=l(91662),s=l(35236),n=l(1528),a=l(88491),i=l(99045),o=(0,s.Gp)((e,t)=>{var l;let{as:s,className:o,children:u,...d}=e,c=(0,n.gy)(t),{slots:p,classNames:h}=(0,r.R)(),f=(0,a.W)(null==h?void 0:h.header,o);return(0,i.jsx)(s||"div",{ref:c,className:null==(l=p.header)?void 0:l.call(p,{class:f}),...d,children:u})});o.displayName="NextUI.CardHeader";var u=o},8066:(e,t,l)=>{l.d(t,{v1:()=>S});var r="object"==typeof localStorage&&(localStorage.getItem("debug")?.includes("next-usequerystate")||localStorage.getItem("debug")?.includes("nuqs"))||!1;function s(e,...t){if(!r)return;let l=function(e,...t){return e.replace(/%[sfdO]/g,e=>{let l=t.shift();return"%O"===e&&l?JSON.stringify(l).replace(/"([^"]+)":/g,"$1:"):String(l)})}(e,...t);performance.mark(l),console.log(e,...t)}function n(e,t,l){try{return e(t)}catch(e){return function(e,...t){r&&console.warn(e,...t)}("[nuqs] Error while parsing value `%s`: %O"+(l?" (for key `%s`)":""),t,e,l),null}}function a(e){function t(t){if(void 0===t)return null;let l="";if(Array.isArray(t)){if(void 0===t[0])return null;l=t[0]}return"string"==typeof t&&(l=t),n(e.parse,l)}return{eq:(e,t)=>e===t,...e,parseServerSide:t,withDefault(e){return{...this,defaultValue:e,parseServerSide:l=>t(l)??e}},withOptions(e){return{...this,...e}}}}a({parse:e=>e,serialize:e=>`${e}`}),a({parse:e=>{let t=parseInt(e);return Number.isNaN(t)?null:t},serialize:e=>Math.round(e).toFixed()}),a({parse:e=>{let t=parseInt(e,16);return Number.isNaN(t)?null:t},serialize:e=>{let t=Math.round(e).toString(16);return t.padStart(t.length+t.length%2,"0")}}),a({parse:e=>{let t=parseFloat(e);return Number.isNaN(t)?null:t},serialize:e=>e.toString()}),a({parse:e=>"true"===e,serialize:e=>e?"true":"false"}),a({parse:e=>{let t=parseInt(e);return Number.isNaN(t)?null:new Date(t)},serialize:e=>e.valueOf().toString()}),a({parse:e=>{let t=new Date(e);return Number.isNaN(t.valueOf())?null:t},serialize:e=>e.toISOString()});var i={409:"Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` was about to load on top.",429:"URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",500:"Empty search params cache. Search params can't be accessed in Layouts.",501:"Search params cache already populated. Have you called `parse` twice?"};function o(e){return`[nuqs] ${i[e]}
  See https://err.47ng.com/NUQS-${e}`}var u=l(42956),d=l(52869),c=function(){if("undefined"==typeof window||!window.GestureEvent)return 50;try{let e=navigator.userAgent?.match(/version\/([\d\.]+) safari/i);return parseFloat(e[1])>=17?120:320}catch{return 320}}(),p=new Map,h={history:"replace",scroll:!1,shallow:!0,throttleMs:c},f=new Set,g=0,m=null;function y(e){return p.get(e)??null}function v(e,t){return(e.split("#")[0]??"")+function(e){if(0===e.size)return"";let t=[];for(let[l,r]of e.entries())t.push(`${l}=${r.replace(/%/g,"%25").replace(/\+/g,"%2B").replace(/ /g,"+").replace(/#/g,"%23").replace(/&/g,"%26").replace(/"/g,"%22").replace(/'/g,"%27").replace(/`/g,"%60").replace(/</g,"%3C").replace(/>/g,"%3E")}`);return"?"+t.join("&")}(t)+location.hash}var b=Symbol("__nuqs__SYNC__"),x="__nuqs__NO_SYNC__",w=Symbol("__nuqs__NOTIFY__"),P=function(e){return{all:e=e||new Map,on:function(t,l){var r=e.get(t);r?r.push(l):e.set(t,[l])},off:function(t,l){var r=e.get(t);r&&(l?r.splice(r.indexOf(l)>>>0,1):e.set(t,[]))},emit:function(t,l){var r=e.get(t);r&&r.slice().map(function(e){e(l)}),(r=e.get("*"))&&r.slice().map(function(e){e(t,l)})}}}();function S(e,{history:t="replace",shallow:l=!0,scroll:r=!1,throttleMs:a=c,parse:i=e=>e,serialize:w=String,eq:S=(e,t)=>e===t,defaultValue:N,clearOnDefault:C=!1,startTransition:k}={history:"replace",scroll:!1,shallow:!0,throttleMs:c,parse:e=>e,serialize:String,eq:(e,t)=>e===t,clearOnDefault:!1,defaultValue:void 0}){let q=(0,u.useRouter)(),M=(0,u.useSearchParams)(),[j,B]=d.useState(()=>{let t=y(e),l=M?.get(e)??null,r=t??l;return null===r?null:n(i,r,e)}),F=d.useRef(j);s("[nuqs `%s`] render - state: %O, iSP: %s",e,j,M?.get(e)??null),d.useEffect(()=>{if(window.next?.version!=="14.0.3")return;let t=M.get(e)??null,l=null===t?null:n(i,t,e);s("[nuqs `%s`] syncFromUseSearchParams %O",e,l),F.current=l,B(l)},[M?.get(e),e]),d.useInsertionEffect(()=>{function t(t){s("[nuqs `%s`] updateInternalState %O",e,t),F.current=t,B(t)}function l(l){let r=l.get(e)??null,a=null===r?null:n(i,r,e);s("[nuqs `%s`] syncFromURL %O",e,a),t(a)}return s("[nuqs `%s`] subscribing to sync",e),P.on(b,l),P.on(e,t),()=>{s("[nuqs `%s`] unsubscribing from sync",e),P.off(b,l),P.off(e,t)}},[e]);let I=d.useCallback((n,i={})=>{let u="function"==typeof n?n(F.current??N??null):n;return(i.clearOnDefault||C)&&null!==u&&void 0!==N&&S(u,N)&&(u=null),P.emit(e,u),function(e,t,l,r){let n=null===t?null:l(t);s("[nuqs queue] Enqueueing %s=%s %O",e,n,r),p.set(e,n),"push"===r.history&&(h.history="push"),r.scroll&&(h.scroll=!0),!1===r.shallow&&(h.shallow=!1),r.startTransition&&(f.add(r.startTransition),h.shallow=!1),h.throttleMs=Math.max(r.throttleMs??c,Number.isFinite(h.throttleMs)?h.throttleMs:0)}(e,u,w,{history:i.history??t,shallow:i.shallow??l,scroll:i.scroll??r,throttleMs:i.throttleMs??a,startTransition:i.startTransition??k}),null===m&&(m=new Promise((e,t)=>{if(!Number.isFinite(h.throttleMs)){s("[nuqs queue] Skipping flush due to throttleMs=Infinity"),e(new URLSearchParams(location.search)),setTimeout(()=>{m=null},0);return}function l(){g=performance.now();let[l,r]=function(e){let t=new URLSearchParams(location.search);if(0===p.size)return[t,null];let l=Array.from(p.entries()),r={...h},n=Array.from(f);for(let[e,n]of(p.clear(),f.clear(),h.history="replace",h.scroll=!1,h.shallow=!0,h.throttleMs=c,s("[nuqs queue] Flushing queue %O with options %O",l,r),l))null===n?t.delete(e):t.set(e,n);try{let l=window.next?.router;if("string"==typeof l?.state?.asPath){let e=v(l.state.asPath.split("?")[0]??"",t);s("[nuqs queue (pages)] Updating url: %s",e),("push"===r.history?l.push:l.replace).call(l,e,e,{scroll:r.scroll,shallow:r.shallow})}else{let l=v(location.origin+location.pathname,t);s("[nuqs queue (app)] Updating url: %s",l);let a="push"===r.history?history.pushState:history.replaceState,i=(window.next?.version??"")>="14.1.0"?null:history.state;a.call(history,i,x,l),r.scroll&&window.scrollTo(0,0),r.shallow||function(e,t){let l=r=>{if(r===e.length)return t();let s=e[r];if(!s)throw Error("Invalid transition function");s(()=>l(r+1))};l(0)}(n,()=>{e.replace(l,{scroll:!1})})}return[t,null]}catch(e){return console.error(o(429),l.map(([e])=>e).join(),e),[t,e]}}(q);null===r?e(l):t(l),m=null}setTimeout(function(){let e=performance.now()-g,t=h.throttleMs,r=Math.max(0,Math.min(t,t-e));s("[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms",r,t),0===r?l():setTimeout(l,r)},0)})),m},[e,t,l,r,a,k]);return[j??N??null,I]}"object"==typeof history&&function(){let e="1.17.2",t=history.__nuqs_patched;if(t){t!==e&&console.error(o(409),t,e);return}for(let t of(s("[nuqs] Patching history with %s",e),["pushState","replaceState"])){let e=history[t].bind(history);history[t]=function(l,r,n){if(!n)return s("[nuqs] history.%s(null) (%s) %O",t,r,l),e(l,r,n);let a=r===x?"internal":"external",i=new URL(n,location.origin).searchParams;if(s("[nuqs] history.%s(%s) (%s) %O",t,n,a,l),"external"===a){for(let[e,t]of i.entries()){let l=y(e);null!==l&&l!==t&&(s("[nuqs] Overwrite detected for key: %s, Server: %s, queue: %s",e,t,l),i.set(e,l))}setTimeout(()=>{s("[nuqs] External history.%s call: triggering sync with %s",t,i),P.emit(b,i),P.emit(w,{search:i,source:a})},0)}else setTimeout(()=>{P.emit(w,{search:i,source:a})},0);return e(l,r===x?"":r,n)}}Object.defineProperty(history,"__nuqs_patched",{value:e,writable:!1,enumerable:!1,configurable:!1})}()}};