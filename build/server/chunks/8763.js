"use strict";exports.id=8763,exports.ids=[8763],exports.modules={64670:(e,a,r)=>{r.d(a,{Z:()=>i});var i=(0,r(43926).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},25897:(e,a,r)=>{r.d(a,{K:()=>V});var i=r(28818);function t(e){let{isSelected:a,disableAnimation:r,...t}=e;return(0,i.jsx)("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...t,children:(0,i.jsx)("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!r&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function l(e){let{isSelected:a,disableAnimation:r,...t}=e;return(0,i.jsx)("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...t,children:(0,i.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function o(e){let{isIndeterminate:a,...r}=e;return(0,i.jsx)(a?l:t,{...r})}var[n,d]=(0,r(3748).k)({name:"CheckboxGroupContext",strict:!1}),s=r(57705),u=r(11982),c=r(60962),b=r(69514),f=(0,c.tv)({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...b.ID],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});(0,c.tv)({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});var p=r(49775),m=r(91681),v=r(77834),h=r(30649),g=r(39719),x=r(51710),y=r(28557),w=r(98939),k=r(7043),R=r(3718),P=r(9440),C=r(16449);function I(e,a,r){let i=(0,P.Q3)({...e,value:a.isSelected}),{isInvalid:t,validationErrors:l,validationDetails:o}=i.displayValidation,{labelProps:n,inputProps:d,isSelected:u,isPressed:c,isDisabled:b,isReadOnly:f}=(0,C.O)({...e,isInvalid:t},a,r);(0,R.Q)(e,i,r);let{isIndeterminate:p,isRequired:m,validationBehavior:v="aria"}=e;return(0,s.useEffect)(()=>{r.current&&(r.current.indeterminate=!!p)}),{labelProps:n,inputProps:{...d,checked:u,"aria-required":m&&"aria"===v||void 0,required:m&&"native"===v},isSelected:u,isPressed:c,isDisabled:b,isReadOnly:f,isInvalid:t,validationErrors:l,validationDetails:o}}let D=new WeakMap;var S=r(20386),j=r(7855),B=(0,S.Gp)((e,a)=>{let{Component:r,children:t,icon:l=(0,i.jsx)(o,{}),getBaseProps:n,getWrapperProps:c,getInputProps:b,getIconProps:R,getLabelProps:C}=function(e={}){var a,r,i,t,l,o;let n=d(),{as:c,ref:b,value:R="",children:C,icon:S,name:j,isRequired:B=!1,isReadOnly:V=!1,autoFocus:O=!1,isSelected:G,validationState:M,size:T=null!=(a=null==n?void 0:n.size)?a:"md",color:q=null!=(r=null==n?void 0:n.color)?r:"primary",radius:N=null==n?void 0:n.radius,lineThrough:z=null!=(i=null==n?void 0:n.lineThrough)&&i,isDisabled:A=null!=(t=null==n?void 0:n.isDisabled)&&t,disableAnimation:E=null!=(l=null==n?void 0:n.disableAnimation)&&l,isInvalid:L=M?"invalid"===M:null!=(o=null==n?void 0:n.isInvalid)&&o,isIndeterminate:W=!1,defaultSelected:Z,classNames:F,onChange:Q,className:U,onValueChange:K,...X}=e;n&&x.Ts&&(G&&(0,y.Z)("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),Z&&(0,y.Z)("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));let $=(0,s.useRef)(null),H=(0,g.rV)(b,$),J=(0,s.useId)(),Y=(0,s.useMemo)(()=>({name:j,value:R,children:C,autoFocus:O,defaultSelected:Z,isIndeterminate:W,isRequired:B,isInvalid:L,isSelected:G,isDisabled:A,isReadOnly:V,"aria-label":(0,w.x)(X["aria-label"],C),"aria-labelledby":X["aria-labelledby"]||J,onChange:K}),[R,j,J,C,O,L,W,A,V,G,Z,X["aria-label"],X["aria-labelledby"],K]),{inputProps:_,isSelected:ee,isDisabled:ea,isReadOnly:er,isPressed:ei}=n?function(e,a,r){var i,t;let l=(0,u.l)({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(r){r?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(r)}}),{name:o,descriptionId:n,errorMessageId:d,validationBehavior:c}=D.get(a);c=null!==(i=e.validationBehavior)&&void 0!==i?i:c;let{realtimeValidation:b}=(0,P.Q3)({...e,value:l.isSelected,name:void 0,validationBehavior:"aria"}),f=(0,s.useRef)(P.PS),p=()=>{a.setInvalid(e.value,b.isInvalid?b:f.current)};(0,s.useEffect)(p);let m=a.realtimeValidation.isInvalid?a.realtimeValidation:b,v="native"===c?a.displayValidation:m,h=I({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||o,isRequired:null!==(t=e.isRequired)&&void 0!==t?t:a.isRequired,validationBehavior:c,[P.tL]:{realtimeValidation:m,displayValidation:v,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(e){f.current=e,p()}}},l,r);return{...h,inputProps:{...h.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?d:null,n].filter(Boolean).join(" ")||void 0}}}({...Y,isInvalid:L},n.groupState,$):I(Y,(0,u.l)(Y),$),et=ea||er,[el,eo]=(0,s.useState)(!1),{pressProps:en}=(0,m.r)({isDisabled:et,onPressStart(e){"keyboard"!==e.pointerType&&eo(!0)},onPressEnd(e){"keyboard"!==e.pointerType&&eo(!1)}}),ed=!et&&(el||ei);B&&(_.required=!0);let{hoverProps:es,isHovered:eu}=(0,p.XI)({isDisabled:_.disabled}),{focusProps:ec,isFocused:eb,isFocusVisible:ef}=(0,v.Fx)({autoFocus:_.autoFocus}),ep=(0,s.useMemo)(()=>f({color:q,size:T,radius:N,isInvalid:L,lineThrough:z,isDisabled:ea,disableAnimation:E}),[q,T,N,L,z,ea,E]),em=(0,k.W)(null==F?void 0:F.base,U),ev=(0,s.useCallback)(()=>({ref:H,className:ep.base({class:em}),"data-disabled":(0,x.PB)(ea),"data-selected":(0,x.PB)(ee||W),"data-invalid":(0,x.PB)(L),"data-hover":(0,x.PB)(eu),"data-focus":(0,x.PB)(eb),"data-pressed":(0,x.PB)(ed),"data-readonly":(0,x.PB)(_.readOnly),"data-focus-visible":(0,x.PB)(ef),"data-indeterminate":(0,x.PB)(W),...(0,h.dG)(es,en,X)}),[ep,em,ea,ee,W,L,eu,eb,ed,_.readOnly,ef,es,en,X]),eh=(0,s.useCallback)((e={})=>({...e,"aria-hidden":!0,className:(0,k.W)(ep.wrapper({class:(0,k.W)(null==F?void 0:F.wrapper,null==e?void 0:e.className)}))}),[ep,null==F?void 0:F.wrapper]),eg=(0,s.useCallback)(()=>({ref:$,...(0,h.dG)(_,ec),onChange:(0,h.tS)(_.onChange,Q)}),[_,ec,Q]),ex=(0,s.useCallback)(()=>({id:J,className:ep.label({class:null==F?void 0:F.label})}),[ep,null==F?void 0:F.label,ea,ee,L]),ey=(0,s.useCallback)(()=>({isSelected:ee,isIndeterminate:!!W,disableAnimation:!!E,className:ep.icon({class:null==F?void 0:F.icon})}),[ep,null==F?void 0:F.icon,ee,W,E]);return{Component:c||"label",icon:S,children:C,isSelected:ee,isDisabled:ea,isInvalid:L,isFocused:eb,isHovered:eu,isFocusVisible:ef,getBaseProps:ev,getWrapperProps:eh,getInputProps:eg,getLabelProps:ex,getIconProps:ey}}({...e,ref:a}),S="function"==typeof l?l(R()):(0,s.cloneElement)(l,R());return(0,i.jsxs)(r,{...n(),children:[(0,i.jsx)(j.T,{children:(0,i.jsx)("input",{...b()})}),(0,i.jsx)("span",{...c(),children:S}),t&&(0,i.jsx)("span",{...C(),children:t})]})});B.displayName="NextUI.Checkbox";var V=B},56288:(e,a,r)=>{r.d(a,{v:()=>t});var i=r(28818),t=({strokeWidth:e=1.5,...a})=>(0,i.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e,viewBox:"0 0 24 24",width:"1em",...a,children:(0,i.jsx)("path",{d:"m6 9 6 6 6-6"})})},16449:(e,a,r)=>{r.d(a,{O:()=>o});var i=r(30649),t=r(77834),l=r(49775);function o(e,a,r){let{isDisabled:o=!1,isReadOnly:n=!1,value:d,name:s,children:u,"aria-label":c,"aria-labelledby":b,validationState:f="valid",isInvalid:p}=e;null!=u||null!=c||null!=b||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:m,isPressed:v}=(0,l.r7)({isDisabled:o}),{pressProps:h,isPressed:g}=(0,l.r7)({isDisabled:o||n,onPress(){a.toggle()}}),{focusableProps:x}=(0,t.kc)(e,r),y=(0,i.dG)(m,x),w=(0,i.zL)(e,{labelable:!0});return(0,i.y$)(r,a.isSelected,a.setSelected),{labelProps:(0,i.dG)(h,{onClick:e=>e.preventDefault()}),inputProps:(0,i.dG)(w,{"aria-invalid":p||"invalid"===f||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":n||void 0,onChange:e=>{e.stopPropagation(),a.setSelected(e.target.checked)},disabled:o,...null==d?{}:{value:d},name:s,type:"checkbox",...y}),isSelected:a.isSelected,isPressed:v||g,isDisabled:o,isReadOnly:n,isInvalid:p||"invalid"===f}}}};