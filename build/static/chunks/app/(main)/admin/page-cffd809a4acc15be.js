(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7165],{2229:function(e,a,r){Promise.resolve().then(r.bind(r,7617))},7617:function(e,a,r){"use strict";r.r(a);var s=r(1840),t=r(5458),i=r(673),o=r(1070);a.default=()=>(0,s.jsxs)(t.w,{children:[(0,s.jsx)(i.u,{className:"text-2xl font-medium flex flex-row justify-between",children:"Statistics"}),(0,s.jsx)(o.G,{children:"To be added"})]})},1070:function(e,a,r){"use strict";r.d(a,{G:function(){return d}});var s=r(9226),t=r(6840),i=r(9763),o=r(7614),l=r(1840),n=(0,t.Gp)((e,a)=>{var r;let{as:t,className:n,children:d,...u}=e,b=(0,i.gy)(a),{slots:c,classNames:f}=(0,s.R)(),m=(0,o.W)(null==f?void 0:f.body,n);return(0,l.jsx)(t||"div",{ref:b,className:null==(r=c.body)?void 0:r.call(c,{class:m}),...u,children:d})});n.displayName="NextUI.CardBody";var d=n},5458:function(e,a,r){"use strict";r.d(a,{w:function(){return k}});var s=r(9226),t=r(2419),i=r(9071),o=(0,t.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),l=r(4740),n=r(1808),d=r(8084),u=r(4042),b=r(3309),c=r(6840),f=r(7614),m=r(7232),h=r(6),v=r(9763),x=r(3122),p=r(1033),g=r(1840),w=(0,c.Gp)((e,a)=>{let{children:r,context:t,Component:i,isPressable:w,disableAnimation:k,disableRipple:y,getCardProps:C,getRippleProps:P}=function(e){let[a,r]=(0,c.oe)(e,o.variantKeys),{ref:s,as:t,children:i,disableRipple:p=!1,onClick:g,onPress:w,autoFocus:k,className:y,classNames:C,allowTextSelectionOnPress:P=!0,...N}=a,j=(0,v.gy)(s),B=t||(e.isPressable?"button":"div"),D="string"==typeof B,A=(0,f.W)(null==C?void 0:C.base,y),{onClick:H,onClear:W,ripples:F}=(0,x.i)(),G=a=>{e.disableAnimation||p||!j.current||H(a)},{buttonProps:_,isPressed:I}=(0,b.j)({onPress:w,elementType:t,isDisabled:!e.isPressable,onClick:(0,n.tS)(g,G),allowTextSelectionOnPress:P,...N},j),{hoverProps:z,isHovered:E}=(0,u.XI)({isDisabled:!e.isHoverable,...N}),{isFocusVisible:M,isFocused:O,focusProps:R}=(0,d.Fx)({autoFocus:k}),S=(0,l.useMemo)(()=>o({...r}),[...Object.values(r)]),U=(0,l.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:S,classNames:C}),[S,C,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),T=(0,l.useCallback)(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:j,className:S.base({class:A}),tabIndex:e.isPressable?0:-1,"data-hover":(0,m.PB)(E),"data-pressed":(0,m.PB)(I),"data-focus":(0,m.PB)(O),"data-focus-visible":(0,m.PB)(M),"data-disabled":(0,m.PB)(e.isDisabled),...(0,n.dG)(e.isPressable?{..._,...R,role:"button"}:{},e.isHoverable?z:{},(0,h.z)(N,{enabled:D}),(0,h.z)(a))}},[j,S,A,D,e.isPressable,e.isHoverable,e.isDisabled,E,I,M,_,R,z,N]),V=(0,l.useCallback)(()=>({ripples:F,onClear:W}),[F,W]);return{context:U,domRef:j,Component:B,classNames:C,children:i,isHovered:E,isPressed:I,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:p,handleClick:G,isFocusVisible:M,getCardProps:T,getRippleProps:V}}({...e,ref:a});return(0,g.jsxs)(i,{...C(),children:[(0,g.jsx)(s.k,{value:t,children:r}),w&&!k&&!y&&(0,g.jsx)(p.L,{...P()})]})});w.displayName="NextUI.Card";var k=w},673:function(e,a,r){"use strict";r.d(a,{u:function(){return d}});var s=r(9226),t=r(6840),i=r(9763),o=r(7614),l=r(1840),n=(0,t.Gp)((e,a)=>{var r;let{as:t,className:n,children:d,...u}=e,b=(0,i.gy)(a),{slots:c,classNames:f}=(0,s.R)(),m=(0,o.W)(null==f?void 0:f.header,n);return(0,l.jsx)(t||"div",{ref:b,className:null==(r=c.header)?void 0:r.call(c,{class:m}),...u,children:d})});n.displayName="NextUI.CardHeader";var d=n},9226:function(e,a,r){"use strict";r.d(a,{R:function(){return t},k:function(){return s}});var[s,t]=(0,r(6596).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})}},function(e){e.O(0,[6286,3277,7942,1784,1744],function(){return e(e.s=2229)}),_N_E=e.O()}]);