(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6567],{24637:function(e,t,r){Promise.resolve().then(r.bind(r,57301))},42858:function(e,t,r){"use strict";var s=r(97699),a=r(84340),o=r(779),n=r(95320),i=r(21685);t.default=e=>{let{children:t,flags:r}=e,{admin:l,isLoading:d}=(0,i.ZP)(),u=(0,o.useRouter)();return(0,n.useEffect)(()=>{if(!d&&(!l||r.length>0&&!r.some(e=>{var t;return null===(t=l.flags)||void 0===t?void 0:t.includes(e)})))return u.push("/")},[l,d,u,r]),d?(0,s.jsx)(a.c,{}):l?(0,s.jsx)(s.Fragment,{children:t}):(0,s.jsx)(s.Fragment,{children:"No Access"})}},48411:function(e,t,r){"use strict";r.d(t,{r:function(){return d}});var s=r(97699),a=r(43201),o=r(779),n=r(10701),i=r(29850),l=r(21685);t.default=()=>{let e=(0,o.usePathname)(),t=(0,o.useRouter)(),{admin:r}=(0,l.ZP)(),u=(null==r?void 0:r.flags)||[],c=(0,a.k)(e=>e.modules),m=d.filter(e=>e.permissions.some(e=>u.includes(e))).filter(e=>{if(e.module){let t=c.find(t=>t.identifier===e.module);if(!t||!t.enabled)return!1}return!0});return(0,s.jsx)(n.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:m,children:e=>(0,s.jsx)(i.r,{title:e.title},e.path)})};let d=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},57301:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var s=r(97699),a=r(95320),o=r(99304),n=r(9034),i=r(25728),l=r(87121),d=r(37157),u=r(84340),c=r(779),m=r(48411),p=r(34388),h=r(42355),f=r(42858),g=r(74464),v=r(77926),b=r(45402),w=r(42869),x=r(96676),j=e=>{var t,r,a;let{admin:d,message:u,title:c,time:m}=e;return(0,s.jsxs)(o.w,{fullWidth:!0,children:[d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.u,{className:"flex gap-3",children:[(0,s.jsx)(b.J,{alt:(null===(t=d.user)||void 0===t?void 0:t.personaname)||d.player_name,height:40,radius:"sm",src:null===(r=d.user)||void 0===r?void 0:r.avatarmedium,width:40}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"text-md font-medium",children:(null===(a=d.user)||void 0===a?void 0:a.personaname)||d.player_name}),(0,s.jsx)("p",{className:"text-small text-default-500",children:"Flags"})]})]}),(0,s.jsx)(w.j,{})]}),(0,s.jsxs)(i.G,{children:[(0,s.jsx)("h4",{className:"text-lg font-medium",children:c}),(0,s.jsx)("p",{className:"text-sm",children:u})]}),(0,s.jsx)(w.j,{}),(0,s.jsx)(l.i,{className:"text-sm",children:(0,x.Q)(m)+" ago"})]})},y=()=>{var e;let[t,r]=(0,a.useState)(1),[b,w]=(0,a.useState)(""),[x]=(0,h.Nr)(b,1e3),{data:y,isLoading:N}=(0,v.ZP)("/api/admin/logs?page=".concat(t,"&rows=").concat(20,"&query=").concat(x),g.Z,{keepPreviousData:!0}),P=(0,a.useMemo)(()=>(null==y?void 0:y.count)?Math.ceil(y.count/20):0,[null==y?void 0:y.count,20]),k=(0,c.usePathname)(),I=m.r.find(e=>e.path===k);return(0,s.jsx)(f.default,{flags:(null==I?void 0:I.permissions)||[],children:(0,s.jsxs)(o.w,{children:[(0,s.jsxs)(n.u,{className:"text-2xl font-medium flex flex-row justify-between items-center",children:[(0,s.jsx)("div",{children:"Logs"}),(0,s.jsx)(p.Y,{label:"Search...",placeholder:"You can search by title or message...",className:"w-1/5",value:b,onValueChange:w,isClearable:!0})]}),(0,s.jsx)(i.G,{className:"grid lg:grid-cols-3 gap-4",children:N?(0,s.jsx)(u.c,{}):y&&(null===(e=y.results)||void 0===e?void 0:e.map(e=>(0,a.createElement)(j,{...e,key:e.id})))}),(0,s.jsx)(l.i,{children:(0,s.jsx)(d.g,{color:"primary",page:t,total:P,onChange:e=>r(e),className:"mx-auto mt-10",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})})]})})}},779:function(e,t,r){"use strict";var s=r(7373);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},74464:function(e,t,r){"use strict";var s=r(63357);t.Z=e=>s.Z.get(e).then(e=>e.data)},21685:function(e,t,r){"use strict";r.d(t,{hY:function(){return i},jc:function(){return l}});var s=r(83050),a=r(77926),o=r(74464),n=r(63357);let i=async()=>{await (0,n.Z)("/api/auth/logout"),await (0,a.JG)("/api/auth"),s.Am.success("Logged out successfully")},l=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,r=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),o=setInterval(async()=>{r&&r.closed&&(await (0,a.JG)("/api/auth"),s.Am.success("Logged in successfully!"),clearInterval(o))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:r}=(0,a.ZP)("/api/auth",o.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:r||!e?null:e.user,admin:r||!e?null:e.admin,masterAdmin:!r&&!!e&&e.masterAdmin,isLoading:t}}},43201:function(e,t,r){"use strict";r.d(t,{k:function(){return l}});var s=r(97699),a=r(95320),o=r(53733),n=r(74464),i=r(77926);let l=(0,o.Ue)(e=>({modules:[],setModules:t=>e(()=>({modules:t,isLoading:!1})),isLoading:!0,setLoading:t=>e(()=>({isLoading:t}))}));t.Z=()=>{let{data:e,isLoading:t}=(0,i.ZP)("/api/modules",n.Z),r=l(e=>e.setModules),o=l(e=>e.setLoading);return(0,a.useEffect)(()=>{e&&(r(e),o(!1))},[e,t,r,o]),(0,s.jsx)(s.Fragment,{})}},87121:function(e,t,r){"use strict";r.d(t,{i:function(){return d}});var s=r(78553),a=r(26604),o=r(4015),n=r(90790),i=r(97699),l=(0,a.Gp)((e,t)=>{var r;let{as:a,className:l,children:d,...u}=e,c=(0,o.gy)(t),{slots:m,classNames:p}=(0,s.R)(),h=(0,n.W)(null==p?void 0:p.footer,l);return(0,i.jsx)(a||"div",{ref:c,className:null==(r=m.footer)?void 0:r.call(m,{class:h}),...u,children:d})});l.displayName="NextUI.CardFooter";var d=l},42869:function(e,t,r){"use strict";r.d(t,{j:function(){return d}});var s=r(36103),a=(0,r(4919).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),o=r(95320),n=r(26604),i=r(97699),l=(0,n.Gp)((e,t)=>{let{Component:r,getDividerProps:n}=function(e){var t;let r,n;let{as:i,className:l,orientation:d,...u}=e,c=i||"hr";"hr"===c&&"vertical"===d&&(c="div");let{separatorProps:m}=(t={elementType:"string"==typeof c?c:"hr",orientation:d},n=(0,s.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...n,role:"separator","aria-orientation":r}}:{separatorProps:n}),p=(0,o.useMemo)(()=>a({orientation:d,className:l}),[d,l]);return{Component:c,getDividerProps:(0,o.useCallback)((e={})=>({className:p,role:"separator","data-orientation":d,...m,...u,...e}),[p,d,m,u])}}({...e});return(0,i.jsx)(r,{ref:t,...n()})});l.displayName="NextUI.Divider";var d=l},45402:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var s=r(95320),a=r(26604),o=(0,r(4919).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),n=r(4015),i=r(14967),l=r(90790),d=r(21903),u=r(50541),c=r(97699),m=(0,a.Gp)((e,t)=>{let{Component:r,domRef:m,slots:p,classNames:h,isBlurred:f,isZoomed:g,fallbackSrc:v,removeWrapper:b,disableSkeleton:w,getImgProps:x,getWrapperProps:j,getBlurredImgProps:y}=function(e){let[t,r]=(0,a.oe)(e,o.variantKeys),{ref:c,as:m,src:p,className:h,classNames:f,loading:g,isBlurred:v,fallbackSrc:b,isLoading:w,disableSkeleton:x=!!b,removeWrapper:j=!1,onError:y,onLoad:N,srcSet:P,sizes:k,crossOrigin:I,...z}=t,Z=(0,u.d)({src:p,loading:g,onError:y,onLoad:N,ignoreFallback:!1,srcSet:P,sizes:k,crossOrigin:I}),S="loaded"===Z&&!w,W="loading"===Z||w,C=e.isZoomed,M=(0,n.gy)(c),{w:A}=(0,s.useMemo)(()=>({w:t.width?"number"==typeof t.width?"".concat(t.width,"px"):t.width:"fit-content"}),[null==t?void 0:t.width]),_=(!p||!S)&&!!b,L=W&&!x,E=(0,s.useMemo)(()=>o({...r,showSkeleton:L}),[(0,i.Xx)(r),L]),F=(0,l.W)(h,null==f?void 0:f.img),G=(0,s.useCallback)(()=>{let e=_?{backgroundImage:"url(".concat(b,")")}:{};return{className:E.wrapper({class:null==f?void 0:f.wrapper}),style:{...e,maxWidth:A}}},[E,_,b,null==f?void 0:f.wrapper]),R=(0,s.useCallback)(()=>({src:p,"aria-hidden":(0,d.PB)(!0),className:E.blurredImg({class:null==f?void 0:f.blurredImg})}),[E,p,null==f?void 0:f.blurredImg]);return{Component:m||"img",domRef:M,slots:E,classNames:f,isBlurred:v,disableSkeleton:x,fallbackSrc:b,removeWrapper:j,isZoomed:C,isLoading:W,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.W)(F,null==e?void 0:e.className);return{src:p,ref:M,"data-loaded":(0,d.PB)(S),className:E.img({class:t}),loading:g,srcSet:P,sizes:k,crossOrigin:I,...z}},getWrapperProps:G,getBlurredImgProps:R}}({...e,ref:t}),N=(0,c.jsx)(r,{ref:m,...x()});if(b)return N;let P=(0,c.jsx)("div",{className:p.zoomedWrapper({class:null==h?void 0:h.zoomedWrapper}),children:N});return f?(0,c.jsxs)("div",{...j(),children:[g?P:N,(0,s.cloneElement)(N,y())]}):g||!w||v?(0,c.jsxs)("div",{...j(),children:[" ",g?P:N]}):N});m.displayName="NextUI.Image";var p=m}},function(e){e.O(0,[7999,6323,3050,5134,7084,4986,4388,6947,2265,966,8129,8106,1744],function(){return e(e.s=24637)}),_N_E=e.O()}]);