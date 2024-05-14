(()=>{var e={};e.id=8550,e.ids=[8550],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},19304:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>f,tree:()=>c}),r(55350),r(57779),r(67397);var s=r(57027),a=r(36858),n=r(32124),o=r.n(n),i=r(95994),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["player-reports",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,55350)),"C:\\Projects\\CSS-Panel\\app\\player-reports\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,57779)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,67397,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Projects\\CSS-Panel\\app\\player-reports\\page.tsx"],d="/player-reports/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/player-reports/page",pathname:"/player-reports",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},93859:(e,t,r)=>{Promise.resolve().then(r.bind(r,43056))},43056:(e,t,r)=>{"use strict";r.d(t,{default:()=>P});var s=r(37307),a=r(45944),n=r(86624),o=r(78758),i=r(23169),l=r(38375),c=r(96598),u=r(22693),d=r(50580),p=r(38121),f=r(56396),m=r(42600),h=r(72804),b=r(89284),x=r(52855),g=r(10644),v=r(74410),y=r(25640),j=r(31672);let w=({id:e,reason:t,server:r,time:a,user:n,userId:o,target:l,targetId:w,handlerId:C,handler:P})=>{let[R,S]=(0,i.useState)(!1),_=async()=>{if(!R){S(!0);try{open(`steam://connect/${r.address}`,"_self"),await j.Z.post(`/api/admin/player-reports/${e}`)}catch(e){console.error(e),v.ZP.error("Failed to connect to the server")}finally{S(!1)}}};return(0,s.jsxs)(c.w,{fullWidth:!0,children:[(0,s.jsxs)(u.u,{className:"font-semibold flex gap-3 justify-between text-lg",children:["Report #",e," ",s.jsx("span",{className:"font-normal text-sm",children:(0,m.Q)(a)+" ago"})]}),s.jsx(h.j,{}),(0,s.jsxs)(d.G,{className:"flex gap-2 text-sm p-2",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[s.jsx("b",{children:"Suspect:"}),s.jsx(y.default,{href:"https://steamcommunity.com/profiles/"+w,className:"h-fit contents",target:"_blank",children:s.jsx(x.z,{name:l?.personaname||w,avatarProps:{src:l?.avatar,size:"sm"}})})]}),s.jsx(h.j,{className:"opacity-50"}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[s.jsx("b",{children:"Reason:"})," ",t]}),s.jsx(h.j,{className:"opacity-50"}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[s.jsx("b",{children:"Server:"})," ",r.hostname||r.address||"Unknown"," "]}),s.jsx(h.j,{className:"opacity-50"}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[s.jsx("b",{children:"Status:"})," ",s.jsx(g.z,{size:"sm",color:C?"success":"warning",variant:"flat",children:C?(0,s.jsxs)("div",{className:"flex gap-1 items-center",children:[s.jsx(f.Z,{size:14}),"Handled by"," ",s.jsx(y.default,{href:"https://steamcommunity.com/profiles/"+C,className:"underline",target:"_blank",children:P?.personaname||C})]}):"Pending"})]})]}),s.jsx(h.j,{}),(0,s.jsxs)(p.i,{className:"flex justify-between text-sm",children:[(0,s.jsxs)("div",{children:["Reported by"," ",s.jsx(y.default,{href:"https://steamcommunity.com/profiles/"+o,target:"_blank",className:"text-primary-600 hover:underline",children:n?.personaname||o})," "]}),s.jsx(b.A,{color:"primary",size:"sm",isDisabled:R||!!C,onClick:_,isLoading:R,children:"Connect & Handle"})]})]})};var C=r(84841);let P=()=>{let[e,t]=(0,i.useState)(10),[r]=(0,o.Nr)(e,500),{data:c,isLoading:u}=(0,C.ZP)(`/api/admin/player-reports?minutes=${r}`,l.Z);return(0,s.jsxs)("div",{className:"w-full min-h-unit-24 flex flex-col",children:[(0,s.jsxs)("div",{className:"w-full mb-10 flex justify-between items-start",children:[(0,s.jsxs)("div",{className:"",children:[s.jsx("h1",{className:"text-2xl font-semibold",children:"Player Reports"}),(0,s.jsxs)("p",{className:"text-sm font-normal",children:["Here you can see all the reports that players have sent.",s.jsx("br",{}),"This list is updated in real-time and shows reports from up to 10 minutes.",s.jsx("br",{}),"The page is only visible to admins."]})]}),s.jsx("div",{children:s.jsx(n.Y,{value:e.toString(),onChange:e=>t(parseInt(e.target.value)),label:"Minutes ago",variant:"bordered",placeholder:"10",type:"number"})})]}),u?s.jsx(a.c,{}):s.jsx("div",{className:"grid grid-cols-3 gap-6",children:c&&c.map(e=>s.jsx(w,{...e},e.id))})]})}},56396:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var s=(0,r(60719).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},78758:(e,t,r)=>{"use strict";r.d(t,{Nr:()=>o});var s=r(23169);function a(e,t){return e===t}function n(e,t){return t}function o(e,t,r){var o=r&&r.equalityFn||a,i=(0,s.useReducer)(n,e),l=i[0],c=i[1],u=function(e,t,r){var a=this,n=(0,s.useRef)(null),o=(0,s.useRef)(0),i=(0,s.useRef)(null),l=(0,s.useRef)([]),c=(0,s.useRef)(),u=(0,s.useRef)(),d=(0,s.useRef)(e),p=(0,s.useRef)(!0);d.current=e;var f="undefined"!=typeof window,m=!t&&0!==t&&f;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var h=!!(r=r||{}).leading,b=!("trailing"in r)||!!r.trailing,x="maxWait"in r,g="debounceOnServer"in r&&!!r.debounceOnServer,v=x?Math.max(+r.maxWait||0,t):null;return(0,s.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]),(0,s.useMemo)(function(){var e=function(e){var t=l.current,r=c.current;return l.current=c.current=null,o.current=e,u.current=d.current.apply(r,t)},r=function(e,t){m&&cancelAnimationFrame(i.current),i.current=m?requestAnimationFrame(e):setTimeout(e,t)},s=function(e){if(!p.current)return!1;var r=e-n.current;return!n.current||r>=t||r<0||x&&e-o.current>=v},y=function(t){return i.current=null,b&&l.current?e(t):(l.current=c.current=null,u.current)},j=function e(){var a=Date.now();if(s(a))return y(a);if(p.current){var i=t-(a-n.current);r(e,x?Math.min(i,v-(a-o.current)):i)}},w=function(){if(f||g){var d=Date.now(),m=s(d);if(l.current=[].slice.call(arguments),c.current=a,n.current=d,m){if(!i.current&&p.current)return o.current=n.current,r(j,t),h?e(n.current):u.current;if(x)return r(j,t),e(n.current)}return i.current||r(j,t),u.current}};return w.cancel=function(){i.current&&(m?cancelAnimationFrame(i.current):clearTimeout(i.current)),o.current=0,l.current=n.current=c.current=i.current=null},w.isPending=function(){return!!i.current},w.flush=function(){return i.current?y(Date.now()):u.current},w},[h,x,t,v,b,m,f,g])}((0,s.useCallback)(function(e){return c(e)},[c]),t,r),d=(0,s.useRef)(e);return o(d.current,e)||(u(e),d.current=e),[l,u]}},55350:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(16057),a=r(57355),n=r(88929),o=r(92881);let i=(0,o.createProxy)(String.raw`C:\Projects\CSS-Panel\app\player-reports\UI\Reports.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let u=(0,o.createProxy)(String.raw`C:\Projects\CSS-Panel\app\player-reports\UI\Reports.tsx#default`),d=async()=>(await (0,a.ed)("player-reports")).enabled?s.jsx(u,{}):(0,n.notFound)()},88929:(e,t,r)=>{"use strict";var s=r(42774);r.o(s,"notFound")&&r.d(t,{notFound:function(){return s.notFound}}),r.o(s,"redirect")&&r.d(t,{redirect:function(){return s.redirect}})},42774:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return o},RedirectType:function(){return s.RedirectType},notFound:function(){return a.notFound},permanentRedirect:function(){return s.permanentRedirect},redirect:function(){return s.redirect}});let s=r(90124),a=r(7734);class n extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class o extends URLSearchParams{append(){throw new n}delete(){throw new n}set(){throw new n}sort(){throw new n}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7734:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return a},notFound:function(){return s}});let r="NEXT_NOT_FOUND";function s(){let e=Error(r);throw e.digest=r,e}function a(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16621:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},90124:(e,t,r)=>{"use strict";var s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return s},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return d},permanentRedirect:function(){return u},redirect:function(){return c}});let a=r(54580),n=r(72934),o=r(16621),i="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=o.RedirectStatusCode.TemporaryRedirect);let s=Error(i);s.digest=i+";"+t+";"+e+";"+r+";";let n=a.requestAsyncStorage.getStore();return n&&(s.mutableCookies=n.mutableCookies),s}function c(e,t){void 0===t&&(t="replace");let r=n.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?o.RedirectStatusCode.SeeOther:o.RedirectStatusCode.TemporaryRedirect)}function u(e,t){void 0===t&&(t="replace");let r=n.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?o.RedirectStatusCode.SeeOther:o.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,s,a]=e.digest.split(";",4),n=Number(a);return t===i&&("replace"===r||"push"===r)&&"string"==typeof s&&!isNaN(n)&&n in o.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function f(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(s||(s={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38121:(e,t,r)=>{"use strict";r.d(t,{i:()=>c});var s=r(87179),a=r(69206),n=r(84661),o=r(58462),i=r(37307),l=(0,a.Gp)((e,t)=>{var r;let{as:a,className:l,children:c,...u}=e,d=(0,n.gy)(t),{slots:p,classNames:f}=(0,s.R)(),m=(0,o.W)(null==f?void 0:f.footer,l);return(0,i.jsx)(a||"div",{ref:d,className:null==(r=p.footer)?void 0:r.call(p,{class:m}),...u,children:c})});l.displayName="NextUI.CardFooter";var c=l},10644:(e,t,r)=>{"use strict";r.d(t,{z:()=>g});var s=r(69206),a=r(83877),n=r(8629),o=r(5918),i=r(5145),l=r(97872),c=r(84821),u=(0,l.tv)({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...c.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:i.J.solid.default}},{variant:"solid",color:"primary",class:{base:i.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:i.J.solid.secondary}},{variant:"solid",color:"success",class:{base:i.J.solid.success}},{variant:"solid",color:"warning",class:{base:i.J.solid.warning}},{variant:"solid",color:"danger",class:{base:i.J.solid.danger}},{variant:"shadow",color:"default",class:{base:i.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:i.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:i.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:i.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:i.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:i.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:i.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:i.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:i.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:i.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:i.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:i.J.bordered.danger}},{variant:"flat",color:"default",class:{base:i.J.flat.default}},{variant:"flat",color:"primary",class:{base:i.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:i.J.flat.secondary}},{variant:"flat",color:"success",class:{base:i.J.flat.success}},{variant:"flat",color:"warning",class:{base:i.J.flat.warning}},{variant:"flat",color:"danger",class:{base:i.J.flat.danger}},{variant:"faded",color:"default",class:{base:i.J.faded.default}},{variant:"faded",color:"primary",class:{base:i.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:i.J.faded.secondary}},{variant:"faded",color:"success",class:{base:i.J.faded.success}},{variant:"faded",color:"warning",class:{base:i.J.faded.warning}},{variant:"faded",color:"danger",class:{base:i.J.faded.danger}},{variant:"light",color:"default",class:{base:i.J.light.default}},{variant:"light",color:"primary",class:{base:i.J.light.primary}},{variant:"light",color:"secondary",class:{base:i.J.light.secondary}},{variant:"light",color:"success",class:{base:i.J.light.success}},{variant:"light",color:"warning",class:{base:i.J.light.warning}},{variant:"light",color:"danger",class:{base:i.J.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),d=r(84661),p=r(58462),f=r(41962),m=r(23169),h=r(87242),b=r(37307),x=(0,s.Gp)((e,t)=>{let{Component:r,children:i,slots:l,classNames:c,isDot:x,isCloseable:g,startContent:v,endContent:y,getCloseButtonProps:j,getChipProps:w}=function(e){let[t,r]=(0,s.oe)(e,u.variantKeys),{ref:i,as:l,children:c,avatar:h,startContent:b,endContent:x,onClose:g,classNames:v,className:y,...j}=t,w=(0,d.gy)(i),C=(0,p.W)(null==v?void 0:v.base,y),P=!!g,R="dot"===e.variant,{focusProps:S,isFocusVisible:_}=(0,o.F)(),N=(0,m.useMemo)(()=>"string"==typeof c&&(null==c?void 0:c.length)===1,[c]),q=(0,m.useMemo)(()=>!!h||!!b,[h,b]),J=(0,m.useMemo)(()=>!!x||P,[x,P]),E=(0,m.useMemo)(()=>u({...r,hasStartContent:q,hasEndContent:J,isOneChar:N,isCloseable:P,isCloseButtonFocusVisible:_}),[(0,f.Xx)(r),_,q,J,N,P]),{pressProps:O}=(0,n.r)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:g}),M=e=>(0,m.isValidElement)(e)?(0,m.cloneElement)(e,{className:(0,p.W)("max-h-[80%]",e.props.className)}):null;return{Component:l||"div",children:c,slots:E,classNames:v,isDot:R,isCloseable:P,startContent:((0,m.isValidElement)(h)?(0,m.cloneElement)(h,{className:E.avatar({class:null==v?void 0:v.avatar})}):null)||M(b),endContent:M(x),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:E.closeButton({class:null==v?void 0:v.closeButton}),...(0,a.d)(O,S)}),getChipProps:()=>({ref:w,className:E.base({class:C}),...j})}}({...e,ref:t}),C=(0,m.useMemo)(()=>x&&!v?(0,b.jsx)("span",{className:l.dot({class:null==c?void 0:c.dot})}):v,[l,v,x]),P=(0,m.useMemo)(()=>g?(0,b.jsx)("span",{...j(),children:y||(0,b.jsx)(h.f,{})}):y,[y,g,j]);return(0,b.jsxs)(r,{...w(),children:[C,(0,b.jsx)("span",{className:l.content({class:null==c?void 0:c.content}),children:i}),P]})});x.displayName="NextUI.Chip";var g=x}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[166,6624,5918,96],()=>r(19304));module.exports=s})();