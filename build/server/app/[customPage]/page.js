(()=>{var e={};e.id=9177,e.ids=[9177],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},99693:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>l,pages:()=>d,routeModule:()=>f,tree:()=>c}),r(18309),r(47148),r(17655);var n=r(29887),s=r(691),o=r(91284),i=r.n(o),u=r(88234),a={};for(let e in u)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>u[e]);r.d(t,a);let c=["",{children:["[customPage]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,18309)),"C:\\Projects\\CSS-Panel\\app\\[customPage]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,47148)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,17655,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Projects\\CSS-Panel\\app\\[customPage]\\page.tsx"],l="/[customPage]/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[customPage]/page",pathname:"/[customPage]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},78505:()=>{},92179:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(9780),s=r(46560),o=r(7764);let i=({image:e,html:t,css:r,height:s})=>"0"===s?n.jsx(n.Fragment,{}):(0,n.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-center bg-cover relative",style:{backgroundImage:`url(${e})`,height:`${s}px`},children:[n.jsx("div",{className:"h-full w-full flex flex-col justify-center items-center",dangerouslySetInnerHTML:{__html:t}}),n.jsx("style",{children:r})]}),u=(0,s.Rb)(),a=async()=>{let e=await o.Z?.settings.getByKey("headerImage")||u.headerImage,t=await o.Z?.settings.getByKey("headerCodeHTML")||u.headerCodeHTML,r=await o.Z?.settings.getByKey("headerCodeCSS")||u.headerCodeCSS,s=await o.Z?.settings.getByKey("headerHeight")||u.headerHeight;return n.jsx(i,{image:e||"",html:t||"",css:r||"",height:s||""})}},18309:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,dynamic:()=>u});var n=r(9780),s=r(84482),o=r(92179),i=r(7764);let u="force-dynamic",a=async({params:e})=>{let{customPage:t}=e,r=await i.Z?.settings.getByKey("customPages"),u=e=>e.replace(" ","-").toLowerCase(),a=r?.find(e=>u(e.title)===u(t));return a?(0,n.jsxs)(n.Fragment,{children:[a.includeBanner&&n.jsx(o.Z,{}),n.jsx("div",{dangerouslySetInnerHTML:{__html:a.contentHtml}})]}):(0,s.notFound)()}},84482:(e,t,r)=>{"use strict";var n=r(36541);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"redirect")&&r.d(t,{redirect:function(){return n.redirect}})},36541:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return s.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(86670),s=r(95966);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95966:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return s},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5639:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86670:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return a},getRedirectStatusCodeFromError:function(){return g},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return l},permanentRedirect:function(){return d},redirect:function(){return c}});let s=r(54580),o=r(72934),i=r(5639),u="NEXT_REDIRECT";function a(e,t,r){void 0===r&&(r=i.RedirectStatusCode.TemporaryRedirect);let n=Error(u);n.digest=u+";"+t+";"+e+";"+r+";";let o=s.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw a(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw a(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,s]=e.digest.split(";",4),o=Number(s);return t===u&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(o)&&o in i.RedirectStatusCode}function p(e){return l(e)?e.digest.split(";",3)[2]:null}function f(e){if(!l(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function g(e){if(!l(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[8256,7861],()=>r(99693));module.exports=n})();