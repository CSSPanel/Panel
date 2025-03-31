"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4125],{12274:(e,a,s)=>{s.d(a,{A:()=>r});var r=(0,s(83864).A)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},18310:(e,a,s)=>{s.d(a,{A:()=>r});var r=(0,s(83864).A)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},26331:(e,a,s)=>{s.d(a,{Z:()=>C});var r=s(68305),t=s(94997),o=s(99235),n=(0,t.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...o.zb],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),l=s(56027),i=s(95547),d=s(61964),c=s(38419),u=s(14748),b=s(97750),m=s(77919),p=s(24711),f=s(92735),g=s(300),h=s(93232),v=s(43999),w=s(57719),k=s(95637),y=s(75819),x=(0,m.Rf)((e,a)=>{let{children:s,context:t,Component:o,isPressable:x,disableAnimation:C,disableRipple:z,getCardProps:E,getRippleProps:N}=function(e){let[a,s]=(0,m.rE)(e,n.variantKeys),{ref:r,as:t,children:o,disableRipple:k=!1,onClick:y,onPress:x,autoFocus:C,className:z,classNames:E,allowTextSelectionOnPress:N=!0,...j}=a,I=(0,v.zD)(r),B=t||(e.isPressable?"button":"div"),D="string"==typeof B,M=(0,p.$)(null==E?void 0:E.base,z),{onClick:A,onClear:P,ripples:S}=(0,w.k)(),W=a=>{e.disableAnimation||k||!I.current||A(a)},{buttonProps:F,isPressed:R}=(0,b.l)({onPress:x,elementType:t,isDisabled:!e.isPressable,onClick:(0,i.c)(y,W),allowTextSelectionOnPress:N,...j},I),{hoverProps:O,isHovered:V}=(0,u.M)({isDisabled:!e.isHoverable,...j}),{isFocusVisible:$,isFocused:H,focusProps:U}=(0,c.o)({autoFocus:C}),_=(0,l.useMemo)(()=>n({...s}),[(0,f.t6)(s)]),Z=(0,l.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:_,classNames:E}),[_,E,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),K=(0,l.useCallback)(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:I,className:_.base({class:M}),tabIndex:e.isPressable?0:-1,"data-hover":(0,g.sE)(V),"data-pressed":(0,g.sE)(R),"data-focus":(0,g.sE)(H),"data-focus-visible":(0,g.sE)($),"data-disabled":(0,g.sE)(e.isDisabled),...(0,d.v)(e.isPressable?{...F,...U,role:"button"}:{},e.isHoverable?O:{},(0,h.$)(j,{enabled:D}),(0,h.$)(a))}},[I,_,M,D,e.isPressable,e.isHoverable,e.isDisabled,V,R,$,F,U,O,j]),L=(0,l.useCallback)(()=>({ripples:S,onClear:P}),[S,P]);return{context:Z,domRef:I,Component:B,classNames:E,children:o,isHovered:V,isPressed:R,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:k,handleClick:W,isFocusVisible:$,getCardProps:K,getRippleProps:L}}({...e,ref:a});return(0,y.jsxs)(o,{...E(),children:[(0,y.jsx)(r.u,{value:t,children:s}),x&&!C&&!z&&(0,y.jsx)(k.j,{...N()})]})});x.displayName="NextUI.Card";var C=x},53804:(e,a,s)=>{s.d(a,{l:()=>o});var r=s(56027),t=s(28402);function o(e={}){let{loading:a,src:s,srcSet:n,onLoad:l,onError:i,crossOrigin:d,sizes:c,ignoreFallback:u}=e,[b,m]=(0,r.useState)("pending");(0,r.useEffect)(()=>{m(s?"loading":"pending")},[s]);let p=(0,r.useRef)(),f=(0,r.useCallback)(()=>{if(!s)return;g();let e=new Image;e.src=s,d&&(e.crossOrigin=d),n&&(e.srcset=n),c&&(e.sizes=c),a&&(e.loading=a),e.onload=e=>{g(),m("loaded"),null==l||l(e)},e.onerror=e=>{g(),m("failed"),null==i||i(e)},p.current=e},[s,d,n,c,l,i,a]),g=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,t.U)(()=>{if(!u)return"loading"===b&&f(),()=>{g()}},[b,f,u]),u?"loaded":b}},57719:(e,a,s)=>{s.d(a,{k:()=>o});var r=s(92735),t=s(56027);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[a,s]=(0,t.useState)([]);return{ripples:a,onClick:(0,t.useCallback)(e=>{let a=e.currentTarget,t=Math.max(a.clientWidth,a.clientHeight),o=a.getBoundingClientRect();s(a=>[...a,{key:(0,r.Lz)(a.length.toString()),size:t,x:e.clientX-o.left-t/2,y:e.clientY-o.top-t/2}])},[]),onClear:(0,t.useCallback)(e=>{s(a=>a.filter(a=>a.key!==e))},[]),...e}}},68305:(e,a,s)=>{s.d(a,{f:()=>t,u:()=>r});var[r,t]=(0,s(69029).q)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},77751:(e,a,s)=>{s.d(a,{U:()=>d});var r=s(68305),t=s(77919),o=s(43999),n=s(24711),l=s(75819),i=(0,t.Rf)((e,a)=>{var s;let{as:t,className:i,children:d,...c}=e,u=(0,o.zD)(a),{slots:b,classNames:m}=(0,r.f)(),p=(0,n.$)(null==m?void 0:m.body,i);return(0,l.jsx)(t||"div",{ref:u,className:null==(s=b.body)?void 0:s.call(b,{class:p}),...c,children:d})});i.displayName="NextUI.CardBody";var d=i},86114:(e,a,s)=>{s.d(a,{R:()=>v});var r=s(77919),t=s(61964),o=s(12591),n=s(38419),l=s(4272),i=s(94997),d=s(99235),c=(0,i.tv)({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...d.$1,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:l.k.solid.default}},{variant:"solid",color:"primary",class:{base:l.k.solid.primary}},{variant:"solid",color:"secondary",class:{base:l.k.solid.secondary}},{variant:"solid",color:"success",class:{base:l.k.solid.success}},{variant:"solid",color:"warning",class:{base:l.k.solid.warning}},{variant:"solid",color:"danger",class:{base:l.k.solid.danger}},{variant:"shadow",color:"default",class:{base:l.k.shadow.default}},{variant:"shadow",color:"primary",class:{base:l.k.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:l.k.shadow.secondary}},{variant:"shadow",color:"success",class:{base:l.k.shadow.success}},{variant:"shadow",color:"warning",class:{base:l.k.shadow.warning}},{variant:"shadow",color:"danger",class:{base:l.k.shadow.danger}},{variant:"bordered",color:"default",class:{base:l.k.bordered.default}},{variant:"bordered",color:"primary",class:{base:l.k.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:l.k.bordered.secondary}},{variant:"bordered",color:"success",class:{base:l.k.bordered.success}},{variant:"bordered",color:"warning",class:{base:l.k.bordered.warning}},{variant:"bordered",color:"danger",class:{base:l.k.bordered.danger}},{variant:"flat",color:"default",class:{base:l.k.flat.default}},{variant:"flat",color:"primary",class:{base:l.k.flat.primary}},{variant:"flat",color:"secondary",class:{base:l.k.flat.secondary}},{variant:"flat",color:"success",class:{base:l.k.flat.success}},{variant:"flat",color:"warning",class:{base:l.k.flat.warning}},{variant:"flat",color:"danger",class:{base:l.k.flat.danger}},{variant:"faded",color:"default",class:{base:l.k.faded.default}},{variant:"faded",color:"primary",class:{base:l.k.faded.primary}},{variant:"faded",color:"secondary",class:{base:l.k.faded.secondary}},{variant:"faded",color:"success",class:{base:l.k.faded.success}},{variant:"faded",color:"warning",class:{base:l.k.faded.warning}},{variant:"faded",color:"danger",class:{base:l.k.faded.danger}},{variant:"light",color:"default",class:{base:l.k.light.default}},{variant:"light",color:"primary",class:{base:l.k.light.primary}},{variant:"light",color:"secondary",class:{base:l.k.light.secondary}},{variant:"light",color:"success",class:{base:l.k.light.success}},{variant:"light",color:"warning",class:{base:l.k.light.warning}},{variant:"light",color:"danger",class:{base:l.k.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),u=s(43999),b=s(24711),m=s(92735),p=s(56027),f=s(77457),g=s(75819),h=(0,r.Rf)((e,a)=>{let{Component:s,children:l,slots:i,classNames:d,isDot:h,isCloseable:v,startContent:w,endContent:k,getCloseButtonProps:y,getChipProps:x}=function(e){let[a,s]=(0,r.rE)(e,c.variantKeys),{ref:l,as:i,children:d,avatar:f,startContent:g,endContent:h,onClose:v,classNames:w,className:k,...y}=a,x=(0,u.zD)(l),C=(0,b.$)(null==w?void 0:w.base,k),z=!!v,E="dot"===e.variant,{focusProps:N,isFocusVisible:j}=(0,n.o)(),I=(0,p.useMemo)(()=>"string"==typeof d&&(null==d?void 0:d.length)===1,[d]),B=(0,p.useMemo)(()=>!!f||!!g,[f,g]),D=(0,p.useMemo)(()=>!!h||z,[h,z]),M=(0,p.useMemo)(()=>c({...s,hasStartContent:B,hasEndContent:D,isOneChar:I,isCloseable:z,isCloseButtonFocusVisible:j}),[(0,m.t6)(s),j,B,D,I,z]),{pressProps:A}=(0,o.d)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:v}),P=e=>(0,p.isValidElement)(e)?(0,p.cloneElement)(e,{className:(0,b.$)("max-h-[80%]",e.props.className)}):null;return{Component:i||"div",children:d,slots:M,classNames:w,isDot:E,isCloseable:z,startContent:((0,p.isValidElement)(f)?(0,p.cloneElement)(f,{className:M.avatar({class:null==w?void 0:w.avatar})}):null)||P(g),endContent:P(h),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:M.closeButton({class:null==w?void 0:w.closeButton}),...(0,t.v)(A,N)}),getChipProps:()=>({ref:x,className:M.base({class:C}),...y})}}({...e,ref:a}),C=(0,p.useMemo)(()=>h&&!w?(0,g.jsx)("span",{className:i.dot({class:null==d?void 0:d.dot})}):w,[i,w,h]),z=(0,p.useMemo)(()=>v?(0,g.jsx)("span",{...y(),children:k||(0,g.jsx)(f.o,{})}):k,[k,v,y]);return(0,g.jsxs)(s,{...x(),children:[C,(0,g.jsx)("span",{className:i.content({class:null==d?void 0:d.content}),children:l}),z]})});h.displayName="NextUI.Chip";var v=h},92506:(e,a,s)=>{s.d(a,{W:()=>m});var r=s(56027),t=s(77919),o=(0,s(94997).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),n=s(43999),l=s(92735),i=s(24711),d=s(300),c=s(53804),u=s(75819),b=(0,t.Rf)((e,a)=>{let{Component:s,domRef:b,slots:m,classNames:p,isBlurred:f,isZoomed:g,fallbackSrc:h,removeWrapper:v,disableSkeleton:w,getImgProps:k,getWrapperProps:y,getBlurredImgProps:x}=function(e){let[a,s]=(0,t.rE)(e,o.variantKeys),{ref:u,as:b,src:m,className:p,classNames:f,loading:g,isBlurred:h,fallbackSrc:v,isLoading:w,disableSkeleton:k=!!v,removeWrapper:y=!1,onError:x,onLoad:C,srcSet:z,sizes:E,crossOrigin:N,...j}=a,I=(0,c.l)({src:m,loading:g,onError:x,onLoad:C,ignoreFallback:!1,srcSet:z,sizes:E,crossOrigin:N}),B="loaded"===I&&!w,D="loading"===I||w,M=e.isZoomed,A=(0,n.zD)(u),{w:P}=(0,r.useMemo)(()=>({w:a.width?"number"==typeof a.width?"".concat(a.width,"px"):a.width:"fit-content"}),[null==a?void 0:a.width]),S=(!m||!B)&&!!v,W=D&&!k,F=(0,r.useMemo)(()=>o({...s,showSkeleton:W}),[(0,l.t6)(s),W]),R=(0,i.$)(p,null==f?void 0:f.img),O=(0,r.useCallback)(()=>{let e=S?{backgroundImage:"url(".concat(v,")")}:{};return{className:F.wrapper({class:null==f?void 0:f.wrapper}),style:{...e,maxWidth:P}}},[F,S,v,null==f?void 0:f.wrapper]),V=(0,r.useCallback)(()=>({src:m,"aria-hidden":(0,d.sE)(!0),className:F.blurredImg({class:null==f?void 0:f.blurredImg})}),[F,m,null==f?void 0:f.blurredImg]);return{Component:b||"img",domRef:A,slots:F,classNames:f,isBlurred:h,disableSkeleton:k,fallbackSrc:v,removeWrapper:y,isZoomed:M,isLoading:D,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,i.$)(R,null==e?void 0:e.className);return{src:m,ref:A,"data-loaded":(0,d.sE)(B),className:F.img({class:a}),loading:g,srcSet:z,sizes:E,crossOrigin:N,...j}},getWrapperProps:O,getBlurredImgProps:V}}({...e,ref:a}),C=(0,u.jsx)(s,{ref:b,...k()});if(v)return C;let z=(0,u.jsx)("div",{className:m.zoomedWrapper({class:null==p?void 0:p.zoomedWrapper}),children:C});return f?(0,u.jsxs)("div",{...y(),children:[g?z:C,(0,r.cloneElement)(C,x())]}):g||!w||h?(0,u.jsxs)("div",{...y(),children:[" ",g?z:C]}):C});b.displayName="NextUI.Image";var m=b},95637:(e,a,s)=>{s.d(a,{j:()=>c});var r=s(16015),t=s(58153),o=s(73963),n=s(13556),l=s(26681),i=s(75819),d=e=>{let{ripples:a=[],motionProps:s,color:d="currentColor",style:c,onClear:u}=e;return(0,i.jsx)(i.Fragment,{children:a.map(e=>{let a=(0,l.qE)(.01*e.size,.2,e.size>100?.75:.5);return(0,i.jsx)(r.N,{mode:"popLayout",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.F,{features:o.l,children:(0,i.jsx)(n.m.span,{animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:d,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",overflow:"hidden",inset:0,zIndex:0,top:e.y,left:e.x,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),...c},transition:{duration:a},onAnimationComplete:()=>{u(e.key)},...s})})})},e.key)})})};d.displayName="NextUI.Ripple";var c=d}}]);