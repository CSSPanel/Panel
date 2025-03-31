"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4071],{1542:(e,t,n)=>{n.d(t,{Ay:()=>d,mg:()=>o,vx:()=>i});var a=n(4394),s=n(4452),r=n(87031),l=n(59241);let i=async()=>{await (0,l.A)("/api/auth/logout"),await (0,s.Tk)("/api/auth"),a.oR.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,n=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),r=setInterval(async()=>{n&&n.closed&&(await (0,s.Tk)("/api/auth"),a.oR.success("Logged in successfully!"),clearInterval(r))},1e3)},d=()=>{let{data:e,isLoading:t,error:n}=(0,s.Ay)("/api/auth",r.A);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:n||!e?null:e.user,admin:n||!e?null:e.admin,masterAdmin:!n&&!!e&&e.masterAdmin,isLoading:t}}},32243:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(75819),s=n(4980),r=n(1149),l=n(34789),i=n(30514),o=n(56027);let d=(e,t)=>{(0,o.useEffect)(()=>{let n=n=>{let a=null==e?void 0:e.current;!(!a||(null==a?void 0:a.contains(n.target)))&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])};var c=n(1542);let u=e=>{let{open:t,x:n,y:u,handleCloseMenu:m,items:h}=e,x=(0,o.useRef)(null);d(x,m);let{admin:p}=(0,c.Ay)(),v=null==p?void 0:p.flags,j=h.map(e=>{let{category:t,items:n}=e;return{category:t,items:n.filter(e=>{let{flags:t}=e;return!t||t.some(e=>null==v?void 0:v.includes(e))})}});return t&&(0,a.jsx)(i.P.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:n,top:u},ref:x,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},"aria-label":"Context menu",children:(0,a.jsx)(s.K,{variant:"flat","aria-label":"Listbox menu with sections",items:h,children:j.map(e=>{let{category:t,items:n}=e;return(0,a.jsx)(r.K,{title:t,"aria-label":t,children:n.map(e=>{let{key:t,description:n,icon:s,color:r,onClick:i}=e;return(0,a.jsx)(l.y,{description:(0,a.jsx)("span",{className:"text-foreground-700",children:n}),startContent:(0,a.jsx)(s,{"aria-label":t}),color:r||"default",onClick:()=>{i&&i(),m()},"aria-label":t,children:t},t)})},t)})})})}},50580:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(75819),s=n(46777),r=n(88901),l=n(38245),i=n(88780),o=n(38512),d=n(93148);let c=e=>{let{open:t,children:n,action:c,handleClose:u,isLoading:m,actionText:h}=e;return(0,a.jsx)(s.Y,{isOpen:t,onOpenChange:!m&&u||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:(0,a.jsx)(r.g,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.c,{className:"flex flex-col gap-1",children:"Confirmation"}),(0,a.jsx)(i.h,{children:n}),(0,a.jsxs)(o.q,{children:[(0,a.jsx)(d.T,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),(0,a.jsx)(d.T,{color:"primary",onPress:c,isLoading:m,children:h||"Confirm"})]})]})})})}},73332:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(56027);let s=()=>{let[e,t]=(0,a.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{t({...e,open:!1})},handleOpen:(e,n)=>{e.preventDefault();let{pageX:a,pageY:s}=e;t({open:!0,x:a,y:s,info:n})},info:e.info}}},73447:(e,t,n)=>{n.d(t,{A:()=>r,m:()=>s});var a=n(71837);let s=a.z.enum(["GAG","MUTE","SILENCE"]),r=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:s})},87031:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(59241);let s=e=>a.A.get(e).then(e=>e.data)},93110:(e,t,n)=>{n.d(t,{A:()=>a});let a=e=>{let t=e?new Date(e):new Date;return t.toLocaleDateString()+" - "+t.toLocaleTimeString()}},94071:(e,t,n)=>{n.d(t,{v:()=>Q,default:()=>Z});var a=n(75819),s=n(57187),r=n(62989),l=n(38597),i=n(43838),o=n(51936),d=n(35182),c=n(80007),u=n(27114),m=n(75712),h=n(71095),x=n(30589),p=n(34789),v=n(15085),j=n(35190),g=n(19219),y=n(26935),f=n(59384),b=n(93148),w=n(26499),A=n(27580),T=n(56027),C=n(70175),E=n(86114),N=n(73447),D=n(33004),R=n(71837);let _=(0,D.vt)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));R.z.object({reason:R.z.string()}),R.z.object({reason:R.z.string(),duration:R.z.string(),type:N.m}),R.z.object({comment:R.z.string()}),R.z.object({reason:R.z.string(),duration:R.z.string(),type:N.m}),R.z.enum(["unmute","remute","comment","edit","delete"]);var S=n(93110),M=n(50580),P=n(73332),z=n(32243),L=n(1542),I=n(87031),k=n(4394),U=n(72626),X=n(95386),V=n(46777),F=n(88901),G=n(38245),O=n(88780),K=n(38512),W=n(59241);let Y=e=>{let{open:t,setOpen:n,mutate:s}=e,[r,l]=(0,T.useState)(!1),i=async()=>{if(!r){l(!0);try{await (0,W.A)("/api/mutes",{method:"POST",data:o.values}),await s(),k.oR.success("Succesfully muted player!"),n(!1)}catch(n){var e;let t=(null==n?void 0:null===(e=n.response)||void 0===e?void 0:e.data)||(null==n?void 0:n.message);console.error(n),k.oR.error("Failed to create mute!\n".concat(t||n))}l(!1)}},o=(0,U.m)({initialValues:{player_steamid:"",reason:"",duration:"",comment:"",type:"MUTE"},validate:(0,X.u)(N.A)});return(0,a.jsx)(V.Y,{isOpen:t,onOpenChange:r?void 0:n,children:(0,a.jsx)(F.g,{children:e=>(0,a.jsxs)("form",{onSubmit:o.onSubmit(i),children:[(0,a.jsx)(G.c,{className:"flex flex-col gap-1",children:"Create new mute"}),(0,a.jsxs)(O.h,{children:[(0,a.jsx)(A.r,{...o.getInputProps("player_steamid"),errorMessage:o.errors.player_steamid,isInvalid:!!o.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:r,autoFocus:!0}),(0,a.jsx)(x.d,{label:"Type",placeholder:"Select the mute type",selectedKeys:[o.values.type],onChange:e=>o.setValues({type:e.target.value}),isDisabled:r,disallowEmptySelection:!0,children:Q.map(e=>(0,a.jsx)(p.y,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(A.r,{...o.getInputProps("reason"),errorMessage:o.errors.reason,isInvalid:!!o.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:r}),(0,a.jsx)(A.r,{...o.getInputProps("duration"),errorMessage:o.errors.duration,isInvalid:!!o.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:r}),(0,a.jsx)(A.r,{...o.getInputProps("comment"),errorMessage:o.errors.comment,isInvalid:!!o.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:r}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start now ",(0,a.jsxs)("b",{children:["(",(0,S.A)(),")"]})]}),(0,a.jsxs)("span",{children:["and will end at"," ",(0,a.jsx)("b",{children:"0"===o.values.duration?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,S.A)(new Date().getTime()+6e4*Number(o.values.duration))})]})]})]}),(0,a.jsxs)(K.q,{children:[(0,a.jsx)(b.T,{color:"danger",variant:"flat",onPress:e,isDisabled:r,children:"Cancel"}),(0,a.jsx)(b.T,{color:"primary",type:"submit",isLoading:r,children:"Mute player"})]})]})})})},q=e=>{switch(e){case"ACTIVE":return(0,a.jsx)(E.R,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return(0,a.jsx)(E.R,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNMUTED":return(0,a.jsx)(E.R,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return(0,a.jsx)(E.R,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}};var H=n(14738),B=n.n(H),J=n(4452);let Q=[{name:"Gag (Chat)",value:"GAG"},{name:"Mute (Voice)",value:"MUTE"},{name:"Silence (Both)",value:"SILENCE"}],Z=e=>{var t,n;let{type:N}=e,[D,R]=(0,T.useState)(!1),[U,X]=(0,T.useState)(1),[V,F]=(0,T.useState)(""),[G]=(0,w.d7)(V,500),O=10;"/"===(0,y.usePathname)()&&(O=5);let{data:K,isLoading:H,mutate:Z}=(0,J.Ay)("/api/mutes?page=".concat(U,"&rows=").concat(O,"&query=").concat(G),I.A,{keepPreviousData:!0}),$=(0,T.useMemo)(()=>(null==K?void 0:K.count)?Math.ceil(K.count/O):0,[null==K?void 0:K.count,O]),{admin:ee}=(0,L.Ay)(),{x:et,y:en,open:ea,handleCloseMenu:es,handleOpen:er,info:el}=(0,P.A)(),ei=_(e=>e.action),eo=_(e=>e.setAction),ed=_(e=>e.details),ec=_(e=>e.setDetails),eu=_(e=>e.isLoading),em=_(e=>e.setIsLoading),eh=_(e=>e.reset),ex=async()=>{if(ei&&!eu&&el){em(!0);try{await W.A.post("/api/mutes/".concat(el.id),{action:ei,details:ed}),await Z(),eh(),k.Ay.success("Player ".concat(ei,"ed successfully"))}catch(e){k.Ay.error("Error ".concat(ei," player"))}em(!1)}},ep=(e,t)=>{var n,s,r;switch(t){case"player_name":return(0,a.jsx)(B(),{href:"https://steamcommunity.com/profiles/".concat(e.player_steamid),target:"_blank",passHref:!0,children:(0,a.jsx)(C.S,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:null===(n=e.player_name)||void 0===n?void 0:n.slice(0,10)})});case"status":return q(e.status);case"reason":return e.reason.length>10?(0,a.jsx)(f.I,{content:e.reason,"aria-label":e.reason,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.reason});case"unmute_reason":return e.unmute_reason&&e.unmute_reason.length>10?(0,a.jsx)(f.I,{content:e.unmute_reason,"aria-label":e.unmute_reason,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:null===(s=e.unmute_reason)||void 0===s?void 0:s.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.unmute_reason});case"type":return(0,a.jsx)(E.R,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:e.type});case"duration":return(0,a.jsx)(E.R,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":"".concat(e.duration," minutes")});case"admin_name":return e.admin_name?"Console"===e.admin_name?(0,a.jsx)(E.R,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):(0,a.jsx)(B(),{href:"https://steamcommunity.com/profiles/".concat(e.admin_steamid),target:"_blank",passHref:!0,children:(0,a.jsx)(C.S,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):(0,a.jsx)(a.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return(0,a.jsx)(E.R,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNMUTED"===e.status||"EXPIRED"===e.status)return(0,a.jsx)(j.o,{color:"success",value:100,"aria-label":"Expired"});let l=new Date,i=new Date(e.created),o=new Date(e.ends),d=Math.round((l.getTime()-i.getTime())/(o.getTime()-i.getTime())*100)||0,c=Math.round((o.getTime()-l.getTime())/6e4),u=d<50?"warning":d>=100?"success":"primary";return c>0?(0,a.jsx)(f.I,{content:"".concat(c," minutes left"),color:u,"aria-label":"".concat(c," minutes left"),showArrow:!0,children:(0,a.jsx)(j.o,{color:u,value:d,"aria-label":"".concat(c," minutes left")})}):(0,a.jsx)(j.o,{color:u,value:d,"aria-label":"Expired"});case"comment":return e.comment?e.comment.length>10?(0,a.jsx)(f.I,{content:e.comment,"aria-label":e.comment,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:null===(r=e.comment)||void 0===r?void 0:r.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.comment}):(0,a.jsx)(a.Fragment,{children:"-"});case"created":return(0,S.A)(e.created);default:return(0,a.jsx)(a.Fragment,{})}},ev=(0,a.jsx)(a.Fragment,{});switch(N){case"MANAGE":ev=(0,a.jsxs)(s.X,{children:[(0,a.jsx)(r.e,{children:"Player"},"player_name"),(0,a.jsx)(r.e,{children:"Status"},"status"),(0,a.jsx)(r.e,{children:"Admin"},"admin_name"),(0,a.jsx)(r.e,{children:"Type"},"type"),(0,a.jsx)(r.e,{children:"Reason"},"reason"),(0,a.jsx)(r.e,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.e,{children:"Duration"},"duration"),(0,a.jsx)(r.e,{children:"Time left"},"timeLeft"),(0,a.jsx)(r.e,{children:"Comment"},"comment")]});break;case"SMALL":ev=(0,a.jsxs)(s.X,{children:[(0,a.jsx)(r.e,{children:"Player"},"player_name"),(0,a.jsx)(r.e,{children:"Status"},"status"),(0,a.jsx)(r.e,{children:"Type"},"type"),(0,a.jsx)(r.e,{children:"Reason"},"reason"),(0,a.jsx)(r.e,{children:"Duration"},"duration"),(0,a.jsx)(r.e,{children:"Time left"},"timeLeft")]});break;case"NORMAL":ev=(0,a.jsxs)(s.X,{children:[(0,a.jsx)(r.e,{children:"Player"},"player_name"),(0,a.jsx)(r.e,{children:"Status"},"status"),(0,a.jsx)(r.e,{children:"Admin"},"admin_name"),(0,a.jsx)(r.e,{children:"Type"},"type"),(0,a.jsx)(r.e,{children:"Reason"},"reason"),(0,a.jsx)(r.e,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.e,{children:"Duration"},"duration"),(0,a.jsx)(r.e,{children:"Time left"},"timeLeft")]})}let ej=["@css/generic","@css/root","@web/mutes"],eg=(null==ee?void 0:null===(t=ee.flags)||void 0===t?void 0:t.some(e=>ej.includes(e)))||!1;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.j,{topContent:(0,a.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,a.jsxs)("div",{className:"text-start",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Mutes"}),(0,a.jsxs)("code",{className:"text-sm font-normal",children:["total: ",(null==K?void 0:K.count)||""]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(f.I,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,"aria-label":"Search for player name, steamid, IP, reason, etc.",children:(0,a.jsx)(A.r,{label:"Search",labelPlacement:"outside-left",value:V,onValueChange:F,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},isClearable:!0})}),ee&&eg&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b.T,{size:"sm",variant:"flat",color:"primary",onClick:()=>R(!0),children:[(0,a.jsx)(c.A,{size:46}),"New mute"]}),(0,a.jsx)(Y,{open:D,setOpen:R,mutate:Z})]})]})]}),bottomContent:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex w-full justify-center",children:(0,a.jsx)(v.T,{color:"primary",page:U,total:$,onChange:e=>X(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),ee&&"MANAGE"===N&&(0,a.jsx)("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[ev,(0,a.jsx)(i.E,{items:null!==(n=null==K?void 0:K.results)&&void 0!==n?n:[],loadingContent:(0,a.jsx)(g.o,{}),loadingState:H?"loading":"idle",children:e=>(0,a.jsx)(o.s,{onContextMenu:t=>ee&&er&&er(t,e)||void 0,children:t=>(0,a.jsx)(d.w,{children:ep(e,t)})},e.id)})]}),ee&&(0,a.jsx)(z.A,{open:ea,x:et,y:en,handleCloseMenu:es,items:[{category:"Mute Actions",items:[{key:"Comment",description:"Write a comment on this mute, this will be visible to other admins",icon:u.A,color:"default",onClick:()=>{eo("comment"),ec({comment:(null==el?void 0:el.comment)||""})},flags:["@css/root","@web/mutes","@web/root"]},{key:(null==el?void 0:el.status)==="UNMUTED"||(null==el?void 0:el.status)==="EXPIRED"?"Re-mute":"Remove Mute (shorten)",description:(null==el?void 0:el.status)==="UNMUTED"||(null==el?void 0:el.status)==="EXPIRED"?"Re-mute the player":"Remove the player mute (shorten the duration)",icon:m.A,color:"default",onClick:()=>{(null==el?void 0:el.status)==="UNMUTED"||(null==el?void 0:el.status)==="EXPIRED"?(eo("remute"),ec({reason:"",duration:"0",type:"MUTE"})):(eo("unmute"),ec({reason:""}))},flags:["@css/root","@web/mutes","@web/root"]},{key:"Edit Mute",description:"Edit the mute duration or reason",icon:u.A,color:"primary",onClick:()=>{eo("edit"),ec({reason:(null==el?void 0:el.reason)||"",duration:(null==el?void 0:el.duration.toString())||"0",type:(null==el?void 0:el.type)||"MUTE"})},flags:["@css/root","@web/mutes","@web/root"]},{key:"Delete Mute",description:"Delete the mute from the database (permanent action)",icon:h.A,color:"danger",onClick:()=>{eo("delete")},flags:["@css/root","@web/mutes","@web/root"]}]}]}),ee&&(0,a.jsxs)(M.A,{open:"comment"===ei,handleClose:eh,action:ex,isLoading:eu,actionText:"Save",children:[(0,a.jsx)("div",{children:"Write a comment on this mute, this will be visible to other admins"}),(0,a.jsx)(A.r,{label:"Comment",value:(null==ed?void 0:ed.comment)||"",onValueChange:e=>ec({comment:e})})]}),ee&&(0,a.jsxs)(M.A,{open:"unmute"===ei,handleClose:eh,action:ex,isLoading:eu,actionText:"Unmute",children:[(0,a.jsx)("div",{children:"You sure you want to unmute the user?"}),(0,a.jsx)(A.r,{label:"Reason",value:(null==ed?void 0:ed.reason)||"",onValueChange:e=>ec({reason:e})})]}),ee&&(0,a.jsxs)(M.A,{open:"remute"===ei,handleClose:eh,action:ex,isLoading:eu,actionText:"Remute",children:[(0,a.jsx)("div",{children:"You sure you want to remute the user?"}),(0,a.jsx)(A.r,{label:"Reason",value:(null==ed?void 0:ed.reason)||"",onValueChange:e=>ec({...ed,reason:e})}),(0,a.jsx)(x.d,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==ed?void 0:ed.type],onChange:e=>ec({...ed,type:e.target.value}),disallowEmptySelection:!0,children:Q.map(e=>(0,a.jsx)(p.y,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(A.r,{label:"Time (in minutes)",type:"number",value:(null==ed?void 0:ed.duration)||"",onValueChange:e=>ec({...ed,duration:e}),description:"Time in minutes, 0 = Permanent mute"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start again at ",(0,a.jsx)("b",{children:(0,S.A)()})]}),(0,a.jsxs)("span",{children:["the mute will end at"," ",(0,a.jsx)("b",{children:(null==ed?void 0:ed.duration)==="0"?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,S.A)(new Date().getTime()+6e4*Number(null==ed?void 0:ed.duration))})]})]})]}),ee&&(0,a.jsxs)(M.A,{open:"edit"===ei,handleClose:eh,action:ex,isLoading:eu,actionText:"Edit",children:[(0,a.jsx)("div",{children:"This will replace the mute duration or reason"}),(0,a.jsx)(A.r,{label:"Mute Reason",value:null==ed?void 0:ed.reason,onValueChange:e=>ec({...ed,reason:e})}),(0,a.jsx)(x.d,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==ed?void 0:ed.type],onChange:e=>ec({...ed,type:e.target.value}),disallowEmptySelection:!0,children:Q.map(e=>(0,a.jsx)(p.y,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(A.r,{label:"Mute Time (in minutes)",type:"number",value:(null==ed?void 0:ed.duration)||"",onValueChange:e=>ec({...ed,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent mute (will replace the duration)"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute started at ",(0,a.jsx)("b",{children:(0,S.A)(null==el?void 0:el.created)})]}),(0,a.jsxs)("span",{children:["After the edit, the mute will end at"," ",(0,a.jsx)("b",{children:(null==ed?void 0:ed.duration)==="0"?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,S.A)(new Date((null==el?void 0:el.created)||"").getTime()+6e4*Number(null==ed?void 0:ed.duration))})]})]})]}),ee&&(0,a.jsx)(M.A,{open:"delete"===ei,handleClose:eh,action:ex,isLoading:eu,actionText:"Delete",children:(0,a.jsx)("div",{children:"Are you sure you want to delete the mute? this action is permanent and cannot be undone"})})]})}}}]);