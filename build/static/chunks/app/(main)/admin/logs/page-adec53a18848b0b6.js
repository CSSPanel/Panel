(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6567],{88810:function(e,t,r){Promise.resolve().then(r.bind(r,90945))},92891:function(e,t,r){"use strict";var a=r(10401),s=r(32820),n=r(68549),o=r(89478),i=r(90296);t.default=e=>{let{children:t,flags:r}=e,{admin:l,isLoading:d}=(0,i.ZP)(),u=(0,n.useRouter)();return(0,o.useEffect)(()=>{if(!d&&(!l||r.length>0&&!r.some(e=>{var t;return null===(t=l.flags)||void 0===t?void 0:t.includes(e)})))return u.push("/")},[l,d,u,r]),d?(0,a.jsx)(s.c,{}):l?(0,a.jsx)(a.Fragment,{children:t}):(0,a.jsx)(a.Fragment,{children:"No Access"})}},13627:function(e,t,r){"use strict";r.d(t,{r:function(){return d}});var a=r(10401),s=r(69492),n=r(68549),o=r(76322),i=r(71068),l=r(90296);t.default=()=>{let e=(0,n.usePathname)(),t=(0,n.useRouter)(),{admin:r}=(0,l.ZP)(),u=(null==r?void 0:r.flags)||[],c=(0,s.k)(e=>e.modules),m=d.filter(e=>e.permissions.some(e=>u.includes(e))).filter(e=>{if(e.module){let t=c.find(t=>t.identifier===e.module);if(!t||!t.enabled)return!1}return!0});return(0,a.jsx)(o.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:m,children:e=>(0,a.jsx)(i.r,{title:e.title},e.path)})};let d=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/advertisements",title:"Advertisements",permissions:["@web/root","@css/root"],module:"advertisements"},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},90945:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a=r(10401),s=r(89478),n=r(36857),o=r(3086),i=r(91495),l=r(44753),d=r(33063),u=r(32820),c=r(68549),m=r(13627),p=r(54529),h=r(51592),f=r(92891),g=r(75799),v=r(27981),b=r(44089),w=r(34121),x=r(62640),y=e=>{var t,r,s;let{admin:d,message:u,title:c,time:m}=e;return(0,a.jsxs)(n.w,{fullWidth:!0,children:[d&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.u,{className:"flex gap-3",children:[(0,a.jsx)(b.J,{alt:(null===(t=d.user)||void 0===t?void 0:t.personaname)||d.player_name,height:40,radius:"sm",src:null===(r=d.user)||void 0===r?void 0:r.avatarmedium,width:40}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"text-md font-medium",children:(null===(s=d.user)||void 0===s?void 0:s.personaname)||d.player_name}),(0,a.jsx)("p",{className:"text-small text-default-500",children:"Flags"})]})]}),(0,a.jsx)(w.j,{})]}),(0,a.jsxs)(i.G,{children:[(0,a.jsx)("h4",{className:"text-lg font-medium",children:c}),(0,a.jsx)("p",{className:"text-sm",children:u})]}),(0,a.jsx)(w.j,{}),(0,a.jsx)(l.i,{className:"text-sm",children:(0,x.Q)(m)+" ago"})]})},j=()=>{var e;let[t,r]=(0,s.useState)(1),[b,w]=(0,s.useState)(""),[x]=(0,h.Nr)(b,1e3),{data:j,isLoading:N}=(0,v.ZP)("/api/admin/logs?page=".concat(t,"&rows=").concat(20,"&query=").concat(x),g.Z,{keepPreviousData:!0}),k=(0,s.useMemo)(()=>(null==j?void 0:j.count)?Math.ceil(j.count/20):0,[null==j?void 0:j.count,20]),P=(0,c.usePathname)(),z=m.r.find(e=>e.path===P);return(0,a.jsx)(f.default,{flags:(null==z?void 0:z.permissions)||[],children:(0,a.jsxs)(n.w,{children:[(0,a.jsxs)(o.u,{className:"text-2xl font-medium flex flex-row justify-between items-center",children:[(0,a.jsx)("div",{children:"Logs"}),(0,a.jsx)(p.Y,{label:"Search...",placeholder:"You can search by title or message...",className:"w-1/5",value:b,onValueChange:w,isClearable:!0})]}),(0,a.jsx)(i.G,{className:"grid lg:grid-cols-3 gap-4",children:N?(0,a.jsx)(u.c,{}):j&&(null===(e=j.results)||void 0===e?void 0:e.map(e=>(0,s.createElement)(y,{...e,key:e.id})))}),(0,a.jsx)(l.i,{children:(0,a.jsx)(d.g,{color:"primary",page:t,total:k,onChange:e=>r(e),className:"mx-auto mt-10",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})})]})})}},68549:function(e,t,r){"use strict";var a=r(54979);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},75799:function(e,t,r){"use strict";var a=r(82187);t.Z=e=>a.Z.get(e).then(e=>e.data)},90296:function(e,t,r){"use strict";r.d(t,{hY:function(){return i},jc:function(){return l}});var a=r(94711),s=r(27981),n=r(75799),o=r(82187);let i=async()=>{await (0,o.Z)("/api/auth/logout"),await (0,s.JG)("/api/auth"),a.Am.success("Logged out successfully")},l=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,r=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),n=setInterval(async()=>{r&&r.closed&&(await (0,s.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(n))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:r}=(0,s.ZP)("/api/auth",n.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:r||!e?null:e.user,admin:r||!e?null:e.admin,masterAdmin:!r&&!!e&&e.masterAdmin,isLoading:t}}},69492:function(e,t,r){"use strict";r.d(t,{k:function(){return l}});var a=r(10401),s=r(89478),n=r(65277),o=r(75799),i=r(27981);let l=(0,n.Ue)(e=>({modules:[],setModules:t=>e(()=>({modules:t,isLoading:!1})),isLoading:!0,setLoading:t=>e(()=>({isLoading:t}))}));t.Z=()=>{let{data:e,isLoading:t}=(0,i.ZP)("/api/modules",o.Z),r=l(e=>e.setModules),n=l(e=>e.setLoading);return(0,s.useEffect)(()=>{e&&(r(e),n(!1))},[e,t,r,n]),(0,a.jsx)(a.Fragment,{})}},44753:function(e,t,r){"use strict";r.d(t,{i:function(){return d}});var a=r(19507),s=r(66378),n=r(21562),o=r(57530),i=r(10401),l=(0,s.Gp)((e,t)=>{var r;let{as:s,className:l,children:d,...u}=e,c=(0,n.gy)(t),{slots:m,classNames:p}=(0,a.R)(),h=(0,o.W)(null==p?void 0:p.footer,l);return(0,i.jsx)(s||"div",{ref:c,className:null==(r=m.footer)?void 0:r.call(m,{class:h}),...u,children:d})});l.displayName="NextUI.CardFooter";var d=l},34121:function(e,t,r){"use strict";r.d(t,{j:function(){return d}});var a=r(83750),s=(0,r(48692).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),n=r(89478),o=r(66378),i=r(10401),l=(0,o.Gp)((e,t)=>{let{Component:r,getDividerProps:o}=function(e){var t;let r,o;let{as:i,className:l,orientation:d,...u}=e,c=i||"hr";"hr"===c&&"vertical"===d&&(c="div");let{separatorProps:m}=(t={elementType:"string"==typeof c?c:"hr",orientation:d},o=(0,a.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...o,role:"separator","aria-orientation":r}}:{separatorProps:o}),p=(0,n.useMemo)(()=>s({orientation:d,className:l}),[d,l]);return{Component:c,getDividerProps:(0,n.useCallback)((e={})=>({className:p,role:"separator","data-orientation":d,...m,...u,...e}),[p,d,m,u])}}({...e});return(0,i.jsx)(r,{ref:t,...o()})});l.displayName="NextUI.Divider";var d=l},44089:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var a=r(89478),s=r(66378),n=(0,r(48692).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),o=r(21562),i=r(86950),l=r(57530),d=r(41604),u=r(77892),c=r(10401),m=(0,s.Gp)((e,t)=>{let{Component:r,domRef:m,slots:p,classNames:h,isBlurred:f,isZoomed:g,fallbackSrc:v,removeWrapper:b,disableSkeleton:w,getImgProps:x,getWrapperProps:y,getBlurredImgProps:j}=function(e){let[t,r]=(0,s.oe)(e,n.variantKeys),{ref:c,as:m,src:p,className:h,classNames:f,loading:g,isBlurred:v,fallbackSrc:b,isLoading:w,disableSkeleton:x=!!b,removeWrapper:y=!1,onError:j,onLoad:N,srcSet:k,sizes:P,crossOrigin:z,...C}=t,I=(0,u.d)({src:p,loading:g,onError:j,onLoad:N,ignoreFallback:!1,srcSet:k,sizes:P,crossOrigin:z}),Z="loaded"===I&&!w,S="loading"===I||w,M=e.isZoomed,W=(0,o.gy)(c),{w:A}=(0,a.useMemo)(()=>({w:t.width?"number"==typeof t.width?"".concat(t.width,"px"):t.width:"fit-content"}),[null==t?void 0:t.width]),L=(!p||!Z)&&!!b,_=S&&!x,F=(0,a.useMemo)(()=>n({...r,showSkeleton:_}),[(0,i.Xx)(r),_]),R=(0,l.W)(h,null==f?void 0:f.img),E=(0,a.useCallback)(()=>{let e=L?{backgroundImage:"url(".concat(b,")")}:{};return{className:F.wrapper({class:null==f?void 0:f.wrapper}),style:{...e,maxWidth:A}}},[F,L,b,null==f?void 0:f.wrapper]),G=(0,a.useCallback)(()=>({src:p,"aria-hidden":(0,d.PB)(!0),className:F.blurredImg({class:null==f?void 0:f.blurredImg})}),[F,p,null==f?void 0:f.blurredImg]);return{Component:m||"img",domRef:W,slots:F,classNames:f,isBlurred:v,disableSkeleton:x,fallbackSrc:b,removeWrapper:y,isZoomed:M,isLoading:S,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.W)(R,null==e?void 0:e.className);return{src:p,ref:W,"data-loaded":(0,d.PB)(Z),className:F.img({class:t}),loading:g,srcSet:k,sizes:P,crossOrigin:z,...C}},getWrapperProps:E,getBlurredImgProps:G}}({...e,ref:t}),N=(0,c.jsx)(r,{ref:m,...x()});if(b)return N;let k=(0,c.jsx)("div",{className:p.zoomedWrapper({class:null==h?void 0:h.zoomedWrapper}),children:N});return f?(0,c.jsxs)("div",{...y(),children:[g?k:N,(0,a.cloneElement)(N,j())]}):g||!w||v?(0,c.jsxs)("div",{...y(),children:[" ",g?k:N]}):N});m.displayName="NextUI.Image";var p=m},19793:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});var a=r(86950),s=r(89478);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,s.useState)([]);return{ripples:t,onClick:(0,s.useCallback)(e=>{let t=e.currentTarget,s=Math.max(t.clientWidth,t.clientHeight),n=t.getBoundingClientRect();r(t=>[...t,{key:(0,a.QI)(t.length.toString()),size:s,x:e.clientX-n.left-s/2,y:e.clientY-n.top-s/2}])},[]),onClear:(0,s.useCallback)(e=>{r(t=>t.filter(t=>t.key!==e))},[]),...e}}},39594:function(e,t,r){"use strict";r.d(t,{L:function(){return u}});var a=r(49729),s=r(83545),n=r(59316),o=r(89322),i=r(72868),l=r(10401),d=e=>{let{ripples:t=[],motionProps:r,color:d="currentColor",style:u,onClear:c}=e;return(0,l.jsx)(l.Fragment,{children:t.map(e=>{let t=(0,i.uZ)(.01*e.size,.2,e.size>100?.75:.5);return(0,l.jsx)(a.M,{mode:"popLayout",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.X,{features:n.H,children:(0,l.jsx)(o.m.span,{animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:d,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",overflow:"hidden",inset:0,zIndex:0,top:e.y,left:e.x,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),...u},transition:{duration:t},onAnimationComplete:()=>{c(e.key)},...r})})})},e.key)})})};d.displayName="NextUI.Ripple";var u=d}},function(e){e.O(0,[3660,9548,4711,9242,9807,2781,4529,7668,2845,9493,4370,3843,1744],function(){return e(e.s=88810)}),_N_E=e.O()}]);