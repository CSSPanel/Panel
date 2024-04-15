"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1146],{3715:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o(e){return function t(){for(var r=this,n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(a,n))}}}function l(e){return({}).toString.call(e).includes("Object")}function u(e){return"function"==typeof e}r.d(t,{ZP:function(){return G}});var s,d,c=o(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),f=function(e,t){return l(t)||c("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&c("changeField"),t},p=function(e){u(e)||c("selectorType")},h=function(e){u(e)||l(e)||c("handlerType"),l(e)&&Object.values(e).some(function(e){return!u(e)})&&c("handlersType")},g=function(e){e||c("initialIsRequired"),l(e)||c("initialType"),Object.keys(e).length||c("initialContent")};function b(e,t){return u(t)?t(e.current):t}function m(e,t){return e.current=i(i({},e.current),t),t}function v(e,t,r){return u(t)?t(e.current):Object.keys(r).forEach(function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])}),r}(s=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return n.length>=s.length?s.apply(this,n):function(){for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return e.apply(t,[].concat(n,a))}})({configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "});var y=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},w={type:"cancelation",msg:"operation is manually canceled"},x=function(e){var t=!1,r=new Promise(function(r,n){e.then(function(e){return t?n(w):r(e)}),e.catch(n)});return r.cancel=function(){return t=!0},r},j=function(e){if(Array.isArray(e))return e}(d=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g(e),h(t);var r={current:e},n=o(v)(r,t),a=o(m)(r),i=o(f)(e),l=o(b)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return p(e),e(r.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(n,a,i,l)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),2!==r.length);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}}(d,2)||function(e,t){if(e){if("string"==typeof e)return n(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,2)}}(d,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),C=j[0],P=j[1];function k(e){return document.body.appendChild(e)}function M(e){var t,r,n=C(function(e){return{config:e.config,reject:e.reject}}),a=(t="".concat(n.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return a.onload=function(){return e()},a.onerror=n.reject,a}function S(){var e=C(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){O(t),e.resolve(t)},function(t){e.reject(t)})}function O(e){C().monaco||P({monaco:e})}var R=new Promise(function(e,t){return P({resolve:e,reject:t})}),E=function(){var e=C(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(P({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),x(R);if(window.monaco&&window.monaco.editor)return O(window.monaco),e.resolve(window.monaco),x(R);y(k,M)(S)}return x(R)},z=r(1402),N={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},A={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},D=function({children:e}){return z.createElement("div",{style:A},e)},I=(0,z.memo)(function({width:e,height:t,isEditorReady:r,loading:n,_ref:a,className:i,wrapperProps:o}){return z.createElement("section",{style:{...N.wrapper,width:e,height:t},...o},!r&&z.createElement(D,null,n),z.createElement("div",{ref:a,style:{...N.fullWidth,...!r&&N.hide},className:i}))}),B=function(e){(0,z.useEffect)(e,[])},W=function(e,t,r=!0){let n=(0,z.useRef)(!0);(0,z.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function T(){}function F(e,t,r,n){return e.editor.getModel(L(e,n))||e.editor.createModel(t,r,n?L(e,n):void 0)}function L(e,t){return e.Uri.parse(t)}(0,z.memo)(function({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:a,originalModelPath:i,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:u=!1,theme:s="light",loading:d="Loading...",options:c={},height:f="100%",width:p="100%",className:h,wrapperProps:g={},beforeMount:b=T,onMount:m=T}){let[v,y]=(0,z.useState)(!1),[w,x]=(0,z.useState)(!0),j=(0,z.useRef)(null),C=(0,z.useRef)(null),P=(0,z.useRef)(null),k=(0,z.useRef)(m),M=(0,z.useRef)(b),S=(0,z.useRef)(!1);B(()=>{let e=E();return e.then(e=>(C.current=e)&&x(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return j.current?(t=j.current?.getModel(),void(l||t?.original?.dispose(),u||t?.modified?.dispose(),j.current?.dispose())):e.cancel()}}),W(()=>{if(j.current&&C.current){let t=j.current.getOriginalEditor(),a=F(C.current,e||"",n||r||"text",i||"");a!==t.getModel()&&t.setModel(a)}},[i],v),W(()=>{if(j.current&&C.current){let e=j.current.getModifiedEditor(),n=F(C.current,t||"",a||r||"text",o||"");n!==e.getModel()&&e.setModel(n)}},[o],v),W(()=>{let e=j.current.getModifiedEditor();e.getOption(C.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],v),W(()=>{j.current?.getModel()?.original.setValue(e||"")},[e],v),W(()=>{let{original:e,modified:t}=j.current.getModel();C.current.editor.setModelLanguage(e,n||r||"text"),C.current.editor.setModelLanguage(t,a||r||"text")},[r,n,a],v),W(()=>{C.current?.editor.setTheme(s)},[s],v),W(()=>{j.current?.updateOptions(c)},[c],v);let O=(0,z.useCallback)(()=>{if(!C.current)return;M.current(C.current);let l=F(C.current,e||"",n||r||"text",i||""),u=F(C.current,t||"",a||r||"text",o||"");j.current?.setModel({original:l,modified:u})},[r,t,a,e,n,i,o]),R=(0,z.useCallback)(()=>{!S.current&&P.current&&(j.current=C.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...c}),O(),C.current?.editor.setTheme(s),y(!0),S.current=!0)},[c,s,O]);return(0,z.useEffect)(()=>{v&&k.current(j.current,C.current)},[v]),(0,z.useEffect)(()=>{w||v||R()},[w,v,R]),z.createElement(I,{width:p,height:f,isEditorReady:v,loading:d,_ref:P,className:h,wrapperProps:g})});var V=function(e){let t=(0,z.useRef)();return(0,z.useEffect)(()=>{t.current=e},[e]),t.current},H=new Map,G=(0,z.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:a,path:i,theme:o="light",line:l,loading:u="Loading...",options:s={},overrideServices:d={},saveViewState:c=!0,keepCurrentModel:f=!1,width:p="100%",height:h="100%",className:g,wrapperProps:b={},beforeMount:m=T,onMount:v=T,onChange:y,onValidate:w=T}){let[x,j]=(0,z.useState)(!1),[C,P]=(0,z.useState)(!0),k=(0,z.useRef)(null),M=(0,z.useRef)(null),S=(0,z.useRef)(null),O=(0,z.useRef)(v),R=(0,z.useRef)(m),N=(0,z.useRef)(),A=(0,z.useRef)(n),D=V(i),L=(0,z.useRef)(!1),G=(0,z.useRef)(!1);B(()=>{let e=E();return e.then(e=>(k.current=e)&&P(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>M.current?void(N.current?.dispose(),f?c&&H.set(i,M.current.saveViewState()):M.current.getModel()?.dispose(),M.current.dispose()):e.cancel()}),W(()=>{let o=F(k.current,e||n||"",t||a||"",i||r||"");o!==M.current?.getModel()&&(c&&H.set(D,M.current?.saveViewState()),M.current?.setModel(o),c&&M.current?.restoreViewState(H.get(i)))},[i],x),W(()=>{M.current?.updateOptions(s)},[s],x),W(()=>{M.current&&void 0!==n&&(M.current.getOption(k.current.editor.EditorOption.readOnly)?M.current.setValue(n):n===M.current.getValue()||(G.current=!0,M.current.executeEdits("",[{range:M.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),M.current.pushUndoStop(),G.current=!1))},[n],x),W(()=>{let e=M.current?.getModel();e&&a&&k.current?.editor.setModelLanguage(e,a)},[a],x),W(()=>{void 0!==l&&M.current?.revealLine(l)},[l],x),W(()=>{k.current?.editor.setTheme(o)},[o],x);let U=(0,z.useCallback)(()=>{if(!(!S.current||!k.current)&&!L.current){R.current(k.current);let u=i||r,f=F(k.current,n||e||"",t||a||"",u||"");M.current=k.current?.editor.create(S.current,{model:f,automaticLayout:!0,...s},d),c&&M.current.restoreViewState(H.get(u)),k.current.editor.setTheme(o),void 0!==l&&M.current.revealLine(l),j(!0),L.current=!0}},[e,t,r,n,a,i,s,d,c,o,l]);return(0,z.useEffect)(()=>{x&&O.current(M.current,k.current)},[x]),(0,z.useEffect)(()=>{C||x||U()},[C,x,U]),A.current=n,(0,z.useEffect)(()=>{x&&y&&(N.current?.dispose(),N.current=M.current?.onDidChangeModelContent(e=>{G.current||y(M.current.getValue(),e)}))},[x,y]),(0,z.useEffect)(()=>{if(x){let e=k.current.editor.onDidChangeMarkers(e=>{let t=M.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=k.current.editor.getModelMarkers({resource:t});w?.(e)}});return()=>{e?.dispose()}}return()=>{}},[x,w]),z.createElement(I,{width:p,height:h,isEditorReady:x,loading:u,_ref:S,className:g,wrapperProps:b})})},593:function(e,t,r){r.d(t,{G:function(){return s}});var n=r(6500),a=r(7923),i=r(4299),o=r(1780),l=r(2412),u=(0,a.Gp)((e,t)=>{var r;let{as:a,className:u,children:s,...d}=e,c=(0,i.gy)(t),{slots:f,classNames:p}=(0,n.R)(),h=(0,o.W)(null==p?void 0:p.body,u);return(0,l.jsx)(a||"div",{ref:c,className:null==(r=f.body)?void 0:r.call(f,{class:h}),...d,children:s})});u.displayName="NextUI.CardBody";var s=u},7284:function(e,t,r){r.d(t,{w:function(){return x}});var n=r(6500),a=r(1319),i=r(4530),o=(0,a.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),l=r(1402),u=r(8322),s=r(7069),d=r(7902),c=r(3590),f=r(7923),p=r(1780),h=r(5459),g=r(453),b=r(4299),m=r(1340),v=r(2013),y=r(2412),w=(0,f.Gp)((e,t)=>{let{children:r,context:a,Component:i,isPressable:w,disableAnimation:x,disableRipple:j,getCardProps:C,getRippleProps:P}=function(e){let[t,r]=(0,f.oe)(e,o.variantKeys),{ref:n,as:a,children:i,disableRipple:v=!1,onClick:y,onPress:w,autoFocus:x,className:j,classNames:C,allowTextSelectionOnPress:P=!0,...k}=t,M=(0,b.gy)(n),S=a||(e.isPressable?"button":"div"),O="string"==typeof S,R=(0,p.W)(null==C?void 0:C.base,j),{onClick:E,onClear:z,ripples:N}=(0,m.i)(),A=t=>{e.disableAnimation||v||!M.current||E(t)},{buttonProps:D,isPressed:I}=(0,c.j)({onPress:w,elementType:a,isDisabled:!e.isPressable,onClick:(0,u.tS)(y,A),allowTextSelectionOnPress:P,...k},M),{hoverProps:B,isHovered:W}=(0,d.XI)({isDisabled:!e.isHoverable,...k}),{isFocusVisible:T,isFocused:F,focusProps:L}=(0,s.Fx)({autoFocus:x}),V=(0,l.useMemo)(()=>o({...r}),[...Object.values(r)]),H=(0,l.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:V,classNames:C}),[V,C,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),G=(0,l.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:M,className:V.base({class:R}),tabIndex:e.isPressable?0:-1,"data-hover":(0,h.PB)(W),"data-pressed":(0,h.PB)(I),"data-focus":(0,h.PB)(F),"data-focus-visible":(0,h.PB)(T),"data-disabled":(0,h.PB)(e.isDisabled),...(0,u.dG)(e.isPressable?{...D,...L,role:"button"}:{},e.isHoverable?B:{},(0,g.z)(k,{enabled:O}),(0,g.z)(t))}},[M,V,R,O,e.isPressable,e.isHoverable,e.isDisabled,W,I,T,D,L,B,k]),U=(0,l.useCallback)(()=>({ripples:N,onClear:z}),[N,z]);return{context:H,domRef:M,Component:S,classNames:C,children:i,isHovered:W,isPressed:I,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:v,handleClick:A,isFocusVisible:T,getCardProps:G,getRippleProps:U}}({...e,ref:t});return(0,y.jsxs)(i,{...C(),children:[(0,y.jsx)(n.k,{value:a,children:r}),w&&!x&&!j&&(0,y.jsx)(v.L,{...P()})]})});w.displayName="NextUI.Card";var x=w},2409:function(e,t,r){r.d(t,{u:function(){return s}});var n=r(6500),a=r(7923),i=r(4299),o=r(1780),l=r(2412),u=(0,a.Gp)((e,t)=>{var r;let{as:a,className:u,children:s,...d}=e,c=(0,i.gy)(t),{slots:f,classNames:p}=(0,n.R)(),h=(0,o.W)(null==p?void 0:p.header,u);return(0,l.jsx)(a||"div",{ref:c,className:null==(r=f.header)?void 0:r.call(f,{class:h}),...d,children:s})});u.displayName="NextUI.CardHeader";var s=u},6500:function(e,t,r){r.d(t,{R:function(){return a},k:function(){return n}});var[n,a]=(0,r(5722).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},6979:function(e,t,r){r.d(t,{Y:function(){return O}});var n=r(5013),a=r(5459),i=r(7923),o=r(8322),l=r(1402);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=l.useLayoutEffect,d=function(e){var t=l.useRef(e);return s(function(){t.current=e}),t},c=function(e,t){if("function"==typeof e){e(t);return}e.current=t},f=function(e,t){var r=(0,l.useRef)();return(0,l.useCallback)(function(n){e.current=n,r.current&&c(r.current,null),r.current=t,t&&c(t,n)},[t])},p={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},h=function(e){Object.keys(p).forEach(function(t){e.style.setProperty(t,p[t],"important")})},g=null,b=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},m=function(){},v=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],y=!!document.documentElement.currentStyle,w=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=v.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;y&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:i}};function x(e,t,r){var n=d(r);l.useLayoutEffect(function(){var r=function(e){return n.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var j=function(e){x(window,"resize",e)},C=function(e){x(document.fonts,"loadingdone",e)},P=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],k=l.forwardRef(function(e,t){var r=e.cacheMeasurements,n=e.maxRows,a=e.minRows,i=e.onChange,o=void 0===i?m:i,s=e.onHeightChange,d=void 0===s?m:s,c=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,P),p=void 0!==c.value,v=l.useRef(null),y=f(v,t),x=l.useRef(0),k=l.useRef(),M=function(){var e,t,i,o,l,u,s,c,f,p,m,y=v.current,j=r&&k.current?k.current:w(y);if(j){k.current=j;var C=(e=y.value||y.placeholder||"x",void 0===(t=a)&&(t=1),void 0===(i=n)&&(i=1/0),g||((g=document.createElement("textarea")).setAttribute("tabindex","-1"),g.setAttribute("aria-hidden","true"),h(g)),null===g.parentNode&&document.body.appendChild(g),o=j.paddingSize,l=j.borderSize,s=(u=j.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){g.style[e]=u[e]}),h(g),g.value=e,c=b(g,j),g.value=e,c=b(g,j),g.value="x",p=(f=g.scrollHeight-o)*t,"border-box"===s&&(p=p+o+l),c=Math.max(p,c),m=f*i,"border-box"===s&&(m=m+o+l),[c=Math.min(m,c),f]),P=C[0],M=C[1];x.current!==P&&(x.current=P,y.style.setProperty("height",P+"px","important"),d(P,{rowHeight:M}))}};return l.useLayoutEffect(M),j(M),C(M),l.createElement("textarea",u({},c,{onChange:function(e){p||M(),o(e)},ref:y}))}),M=r(2412),S=(0,i.Gp)((e,t)=>{let{style:r,minRows:i=3,maxRows:u=8,cacheMeasurements:s=!1,disableAutosize:d=!1,onHeightChange:c,...f}=e,{Component:p,label:h,description:g,startContent:b,endContent:m,hasHelper:v,shouldLabelBeOutside:y,shouldLabelBeInside:w,errorMessage:x,getBaseProps:j,getLabelProps:C,getInputProps:P,getInnerWrapperProps:S,getInputWrapperProps:O,getHelperWrapperProps:R,getDescriptionProps:E,getErrorMessageProps:z}=(0,n.G)({...f,ref:t,isMultiline:!0}),[N,A]=(0,l.useState)(i>1),[D,I]=(0,l.useState)(!1),B=h?(0,M.jsx)("label",{...C(),children:h}):null,W=P(),T=d?(0,M.jsx)("textarea",{...W,style:(0,o.dG)(W.style,null!=r?r:{})}):(0,M.jsx)(k,{...W,cacheMeasurements:s,"data-hide-scroll":(0,a.PB)(!D),maxRows:u,minRows:i,style:(0,o.dG)(W.style,null!=r?r:{}),onHeightChange:(e,t)=>{1===i&&A(e>=2*t.rowHeight),u>i&&I(e>=u*t.rowHeight),null==c||c(e,t)}}),F=(0,l.useMemo)(()=>b||m?(0,M.jsxs)("div",{...S(),children:[b,T,m]}):(0,M.jsx)("div",{...S(),children:T}),[b,W,m,S]);return(0,M.jsxs)(p,{...j(),children:[y?B:null,(0,M.jsxs)("div",{...O(),"data-has-multiple-rows":(0,a.PB)(N),children:[w?B:null,F]}),v?(0,M.jsx)("div",{...R(),children:x?(0,M.jsx)("div",{...z(),children:x}):g?(0,M.jsx)("div",{...E(),children:g}):null}):null]})});S.displayName="NextUI.Textarea";var O=S},2982:function(e,t,r){r.d(t,{i:function(){return w}});var n=r(1402),a=r(7923),i=r(7902),o=r(910),l=r(1319),u=r(4530),s=(0,l.tv)({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",...u.ID],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right"],startContent:"z-0 absolute left-1.5 text-current",endContent:"z-0 absolute right-1.5 text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6 mr-2",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ml-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7 mr-2",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ml-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8 mr-2",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ml-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]}),d=r(8322),c=r(1780),f=r(5459),p=r(4299),h=r(517),g=r(557),b=r(7069),m=r(7093),v=r(2412),y=(0,a.Gp)((e,t)=>{let{Component:r,children:l,startContent:u,endContent:y,thumbIcon:w,getBaseProps:x,getInputProps:j,getWrapperProps:C,getThumbProps:P,getThumbIconProps:k,getLabelProps:M,getStartContentProps:S,getEndContentProps:O}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,a.oe)(e,s.variantKeys),{ref:l,as:u,name:m,value:v="",isReadOnly:y=!1,autoFocus:w=!1,startContent:x,endContent:j,defaultSelected:C,isSelected:P,children:k,thumbIcon:M,className:S,classNames:O,onChange:R,onValueChange:E,...z}=t,N=(0,n.useRef)(null),A=(0,p.rV)(l,N),D=(0,n.useId)(),I=(0,n.useMemo)(()=>{let t=z["aria-label"]||"string"==typeof k?k:void 0;return{name:m,value:v,children:k,autoFocus:w,defaultSelected:C,isSelected:P,isDisabled:!!e.isDisabled,isReadOnly:y,"aria-label":t,"aria-labelledby":z["aria-labelledby"]||D,onChange:E}},[v,m,D,k,w,y,P,C,e.isDisabled,z["aria-label"],z["aria-labelledby"],E]),B=(0,g.l)(I),{inputProps:W,isPressed:T,isReadOnly:F}=function(e,t,r){let{labelProps:n,inputProps:a,isSelected:i,isPressed:o,isDisabled:l,isReadOnly:u}=(0,h.O)(e,t,r);return{labelProps:n,inputProps:{...a,role:"switch",checked:i},isSelected:i,isPressed:o,isDisabled:l,isReadOnly:u}}(I,B,N),{focusProps:L,isFocused:V,isFocusVisible:H}=(0,b.Fx)({autoFocus:W.autoFocus}),{hoverProps:G,isHovered:U}=(0,i.XI)({isDisabled:W.disabled}),_=I.isDisabled||F,[q,K]=(0,n.useState)(!1),{pressProps:X}=(0,o.r)({isDisabled:_,onPressStart(e){"keyboard"!==e.pointerType&&K(!0)},onPressEnd(e){"keyboard"!==e.pointerType&&K(!1)}}),Y=!_&&(q||T),Z=W.checked,$=W.disabled,J=(0,n.useMemo)(()=>s({...r}),[...Object.values(r)]),Q=(0,c.W)(null==O?void 0:O.base,S),ee=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-hidden":!0,className:(0,c.W)(J.wrapper({class:(0,c.W)(null==O?void 0:O.wrapper,null==e?void 0:e.className)}))}},[J,null==O?void 0:O.wrapper]),et=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,className:J.thumb({class:(0,c.W)(null==O?void 0:O.thumb,null==e?void 0:e.className)})}},[J,null==O?void 0:O.thumb]),er=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,id:D,className:J.label({class:(0,c.W)(null==O?void 0:O.label,null==e?void 0:e.className)})}},[J,null==O?void 0:O.label,$,Z]),en=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{includeStateProps:!1};return(0,d.dG)({width:"1em",height:"1em",className:J.thumbIcon({class:(0,c.W)(null==O?void 0:O.thumbIcon)})},e.includeStateProps?{isSelected:Z}:{})},[J,null==O?void 0:O.thumbIcon,Z]),ea=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{width:"1em",height:"1em",...e,className:J.startContent({class:(0,c.W)(null==O?void 0:O.startContent,null==e?void 0:e.className)})}},[J,null==O?void 0:O.startContent,Z]),ei=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{width:"1em",height:"1em",...e,className:J.endContent({class:(0,c.W)(null==O?void 0:O.endContent,null==e?void 0:e.className)})}},[J,null==O?void 0:O.endContent,Z]);return{Component:u||"label",slots:J,classNames:O,domRef:A,children:k,thumbIcon:M,startContent:x,endContent:j,isHovered:U,isSelected:Z,isPressed:Y,isFocused:V,isFocusVisible:H,isDisabled:$,getBaseProps:e=>({...(0,d.dG)(G,X,z,e),ref:A,className:J.base({class:(0,c.W)(Q,null==e?void 0:e.className)}),"data-disabled":(0,f.PB)($),"data-selected":(0,f.PB)(Z),"data-readonly":(0,f.PB)(F),"data-focus":(0,f.PB)(V),"data-focus-visible":(0,f.PB)(H),"data-hover":(0,f.PB)(U),"data-pressed":(0,f.PB)(Y)}),getWrapperProps:ee,getInputProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,d.dG)(W,L,e),ref:N,id:W.id,onChange:(0,d.tS)(R,W.onChange)}},getLabelProps:er,getThumbProps:et,getThumbIconProps:en,getStartContentProps:ea,getEndContentProps:ei}}({...e,ref:t}),R="function"==typeof w?w(k({includeStateProps:!0})):w&&(0,n.cloneElement)(w,k()),E=u&&(0,n.cloneElement)(u,S()),z=y&&(0,n.cloneElement)(y,O());return(0,v.jsxs)(r,{...x(),children:[(0,v.jsx)(m.T,{children:(0,v.jsx)("input",{...j()})}),(0,v.jsxs)("span",{...C(),children:[u&&E,(0,v.jsx)("span",{...P(),children:w&&R}),y&&z]}),l&&(0,v.jsx)("span",{...M(),children:l})]})});y.displayName="NextUI.Switch";var w=y}}]);