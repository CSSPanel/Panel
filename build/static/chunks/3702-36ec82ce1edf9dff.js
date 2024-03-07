"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3702],{9779:function(e,n,t){var a=t(1840),s=t(7040),r=t(964),i=t(7743),l=t(9226),o=t(9954),c=t(776);n.Z=e=>{let{open:n,children:t,action:d,handleClose:u,isLoading:m,actionText:h}=e;return(0,a.jsx)(s.R,{isOpen:n,onOpenChange:!m&&u||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:(0,a.jsx)(r.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.k,{className:"flex flex-col gap-1",children:"Confirmation"}),(0,a.jsx)(l.I,{children:t}),(0,a.jsxs)(o.R,{children:[(0,a.jsx)(c.A,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),(0,a.jsx)(c.A,{color:"primary",onPress:d,isLoading:m,children:h||"Confirm"})]})]})})})}},9325:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(1840),s=t(7100),r=t(2819),i=t(4838),l=t(4740),o=(e,n)=>{(0,l.useEffect)(()=>{let t=t=>{let a=null==e?void 0:e.current;!a||(null==a?void 0:a.contains(t.target))||n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,n])},c=t(2523),d=e=>{let{open:n,x:t,y:d,handleCloseMenu:u,items:m}=e,h=(0,l.useRef)(null);return o(h,u),n&&(0,a.jsx)(c.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:t,top:d},ref:h,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},children:(0,a.jsx)(s.X,{variant:"flat","aria-label":"Listbox menu with sections",items:m,children:m.map(e=>{let{category:n,items:t}=e;return(0,a.jsx)(r.y,{title:n,children:t.map(e=>{let{key:n,description:t,icon:s,color:r,onClick:l}=e;return(0,a.jsx)(i.R,{description:(0,a.jsx)("span",{className:"text-foreground-700",children:t}),startContent:(0,a.jsx)(s,{}),color:r||"default",onClick:()=>{l&&l(),u()},children:n},n)})},n)})})})}},3702:function(e,n,t){t.r(n),t.d(n,{MUTE_OPTIONS:function(){return K},default:function(){return B}});var a=t(1840),s=t(1174),r=t(6374),i=t(995),l=t(6637),o=t(181),c=t(8332),d=t(4740),u=t(2097),m=t(4838),h=t(3691),x=t(3186),j=t(7917),p=t(8659),v=t(8639),g=t(7463),y=t(5023),f=t(1318),b=t(1160),w=t(7890),C=t(2281),T=t(4591),E=t(776),z=t(175),N=t(917),P=e=>{switch(e){case"ACTIVE":return(0,a.jsx)(y.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return(0,a.jsx)(y.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNMUTED":return(0,a.jsx)(y.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return(0,a.jsx)(y.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}},_=t(3910),D=t(1916),Z=t(2573),R=t(5549),M=t(646),L=t(4631),S=t(9325),A=t(9779),k=t(5370),I=t(7670),U=t(7040),X=t(964),Y=t(7743),F=t(9226),G=t(9954),O=t(1204),V=e=>{let{open:n,setOpen:t,mutate:s}=e,[r,i]=(0,d.useState)(!1),l=async()=>{if(!r){i(!0);try{await (0,D.Z)("/api/mutes",{method:"POST",data:o.values}),await s(),Z.Am.success("Succesfully muted player!"),t(!1)}catch(t){var e;let n=(null==t?void 0:null===(e=t.response)||void 0===e?void 0:e.data)||(null==t?void 0:t.message);console.error(t),Z.Am.error("Failed to create mute!\n".concat(n||t))}i(!1)}},o=(0,k.c)({initialValues:{player_steamid:"",reason:"",duration:"",comment:"",type:"MUTE"},validate:(0,I.F)(O.Z)});return(0,a.jsx)(U.R,{isOpen:n,onOpenChange:r?void 0:t,children:(0,a.jsx)(X.A,{children:e=>(0,a.jsxs)("form",{onSubmit:o.onSubmit(l),children:[(0,a.jsx)(Y.k,{className:"flex flex-col gap-1",children:"Create new mute"}),(0,a.jsxs)(F.I,{children:[(0,a.jsx)(g.Y,{...o.getInputProps("player_steamid"),errorMessage:o.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:r,autoFocus:!0}),(0,a.jsx)(u.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[o.values.type],onChange:e=>o.setValues({type:e.target.value}),isDisabled:r,disallowEmptySelection:!0,children:K.map(e=>(0,a.jsx)(m.R,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(g.Y,{...o.getInputProps("reason"),errorMessage:o.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:r}),(0,a.jsx)(g.Y,{...o.getInputProps("duration"),errorMessage:o.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:r}),(0,a.jsx)(g.Y,{...o.getInputProps("comment"),errorMessage:o.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:r}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start now ",(0,a.jsxs)("b",{children:["(",(0,R.Z)(),")"]})]}),(0,a.jsxs)("span",{children:["and will end at"," ",(0,a.jsx)("b",{children:"0"===o.values.duration?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,R.Z)(new Date().getTime()+6e4*Number(o.values.duration))})]})]})]}),(0,a.jsxs)(G.R,{children:[(0,a.jsx)(E.A,{color:"danger",variant:"flat",onPress:e,isDisabled:r,children:"Cancel"}),(0,a.jsx)(E.A,{color:"primary",type:"submit",isLoading:r,children:"Mute player"})]})]})})})},J=t(8787),W=t(1326);let H=(0,J.Ue)(e=>({action:null,setAction:n=>e({action:n}),isLoading:!1,setIsLoading:n=>e({isLoading:n}),details:null,setDetails:n=>e({details:n}),reset:()=>e({action:null,isLoading:!1,details:null})}));W.z.object({reason:W.z.string()}),W.z.object({reason:W.z.string(),duration:W.z.string(),type:O.P}),W.z.object({comment:W.z.string()}),W.z.object({reason:W.z.string(),duration:W.z.string(),type:O.P}),W.z.enum(["unmute","remute","comment","edit","delete"]);let K=[{name:"Gag (Chat)",value:"GAG"},{name:"Mute (Voice)",value:"MUTE"},{name:"Silence (Both)",value:"SILENCE"}];var B=e=>{var n;let{type:t}=e,[k,I]=(0,d.useState)(!1),[U,X]=(0,d.useState)(1),Y=10;"/"===(0,f.usePathname)()&&(Y=5);let{data:F,isLoading:G,mutate:O}=(0,N.ZP)("/api/mutes?page=".concat(U,"&rows=").concat(Y),z.Z,{keepPreviousData:!0}),J=(0,d.useMemo)(()=>(null==F?void 0:F.count)?Math.ceil(F.count/Y):0,[null==F?void 0:F.count,Y]),{admin:W}=(0,M.ZP)(),{x:B,y:q,open:Q,handleCloseMenu:$,handleOpen:ee,info:en}=(0,L.Z)(),et=H(e=>e.action),ea=H(e=>e.setAction),es=H(e=>e.details),er=H(e=>e.setDetails),ei=H(e=>e.isLoading),el=H(e=>e.setIsLoading),eo=H(e=>e.reset),ec=async()=>{if(et&&!ei&&en){el(!0);try{await D.Z.post("/api/mutes/".concat(en.id),{action:et,details:es}),await O(),eo(),Z.ZP.success("Player ".concat(et,"ed successfully"))}catch(e){Z.ZP.error("Error ".concat(et," player"))}el(!1)}},ed=(e,n)=>{var t,s,r;switch(n){case"player_name":return(0,a.jsx)(_.default,{href:"https://steamcommunity.com/profiles/".concat(e.player_steamid),target:"_blank",passHref:!0,children:(0,a.jsx)(v.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:null===(t=e.player_name)||void 0===t?void 0:t.slice(0,10)})});case"status":return P(e.status);case"reason":return e.reason.length>10?(0,a.jsx)(p.e,{content:e.reason,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.reason});case"unmute_reason":return e.unmute_reason&&e.unmute_reason.length>10?(0,a.jsx)(p.e,{content:e.unmute_reason,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:null===(s=e.unmute_reason)||void 0===s?void 0:s.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.unmute_reason});case"type":return(0,a.jsx)(y.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:e.type});case"duration":return(0,a.jsx)(y.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":"".concat(e.duration," minutes")});case"admin_name":return e.admin_name?"Console"===e.admin_name?(0,a.jsx)(y.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):(0,a.jsx)(_.default,{href:"https://steamcommunity.com/profiles/".concat(e.admin_steamid),target:"_blank",passHref:!0,children:(0,a.jsx)(v.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):(0,a.jsx)(a.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return(0,a.jsx)(y.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNMUTED"===e.status||"EXPIRED"===e.status)return(0,a.jsx)(x.W,{color:"success",value:100,isStriped:!0});let i=new Date,l=new Date(e.created),o=new Date(e.ends),c=Math.round((i.getTime()-l.getTime())/(o.getTime()-l.getTime())*100)||0,d=Math.round((o.getTime()-i.getTime())/6e4),u=c<50?"warning":c>=100?"success":"primary";return d>0?(0,a.jsx)(p.e,{content:"".concat(d," minutes left"),color:u,showArrow:!0,children:(0,a.jsx)(x.W,{color:u,value:c,isStriped:!0})}):(0,a.jsx)(x.W,{color:u,value:c,isStriped:!0});case"comment":return e.comment?e.comment.length>10?(0,a.jsx)(p.e,{content:e.comment,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:null===(r=e.comment)||void 0===r?void 0:r.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.comment}):(0,a.jsx)(a.Fragment,{children:"-"});default:return(0,a.jsx)(a.Fragment,{})}},eu=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Admin"},"admin_name"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft")]});switch(t){case"MANAGE":eu=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Admin"},"admin_name"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft"),(0,a.jsx)(r.j,{children:"Comment"},"comment")]});break;case"SMALL":eu=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft")]});break;case"NORMAL":eu=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Admin"},"admin_name"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft")]})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.b,{className:"!overflow-auto",topContent:(0,a.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,a.jsxs)("div",{className:"text-start",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Mutes"}),(0,a.jsxs)("code",{className:"text-sm font-normal",children:["total: ",(null==F?void 0:F.count)||""]})]}),W&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(E.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>I(!0),children:[(0,a.jsx)(b.Z,{}),"New mute"]}),(0,a.jsx)(V,{open:k,setOpen:I,mutate:O})]})]}),bottomContent:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex w-full justify-center",children:(0,a.jsx)(h.g,{color:"primary",page:U,total:J,onChange:e=>X(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),W&&"MANAGE"===t&&(0,a.jsx)("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[eu,(0,a.jsx)(l.y,{items:null!==(n=null==F?void 0:F.results)&&void 0!==n?n:[],loadingContent:(0,a.jsx)(j.c,{}),loadingState:G?"loading":"idle",children:e=>(0,a.jsx)(o.g,{onContextMenu:n=>W&&ee&&ee(n,e)||void 0,children:n=>(0,a.jsx)(c.X,{children:ed(e,n)})},e.id)})]}),W&&(0,a.jsx)(S.Z,{open:Q,x:B,y:q,handleCloseMenu:$,items:[{category:"Mute Actions",items:[{key:"Comment",description:"Write a comment on this mute, this will be visible to other admins",icon:w.Z,color:"default",onClick:()=>{ea("comment"),er({comment:(null==en?void 0:en.comment)||""})}},{key:(null==en?void 0:en.status)==="UNMUTED"||(null==en?void 0:en.status)==="EXPIRED"?"Re-mute":"Remove Mute (shorten)",description:(null==en?void 0:en.status)==="UNMUTED"||(null==en?void 0:en.status)==="EXPIRED"?"Re-mute the player":"Remove the player mute (shorten the duration)",icon:C.Z,color:"default",onClick:()=>{(null==en?void 0:en.status)==="UNMUTED"||(null==en?void 0:en.status)==="EXPIRED"?(ea("remute"),er({reason:"",duration:"0",type:"MUTE"})):(ea("unmute"),er({reason:""}))}},{key:"Edit Mute",description:"Edit the mute duration or reason",icon:w.Z,color:"primary",onClick:()=>{ea("edit"),er({reason:(null==en?void 0:en.reason)||"",duration:(null==en?void 0:en.duration.toString())||"0",type:(null==en?void 0:en.type)||"MUTE"})}},{key:"Delete Mute",description:"Delete the mute from the database (permanent action)",icon:T.Z,color:"danger",onClick:()=>{ea("delete")}}]}]}),W&&(0,a.jsxs)(A.Z,{open:"comment"===et,handleClose:eo,action:ec,isLoading:ei,actionText:"Save",children:[(0,a.jsx)("div",{children:"Write a comment on this mute, this will be visible to other admins"}),(0,a.jsx)(g.Y,{label:"Comment",value:(null==es?void 0:es.comment)||"",onValueChange:e=>er({comment:e})})]}),W&&(0,a.jsxs)(A.Z,{open:"unmute"===et,handleClose:eo,action:ec,isLoading:ei,actionText:"Unmute",children:[(0,a.jsx)("div",{children:"You sure you want to unmute the user?"}),(0,a.jsx)(g.Y,{label:"Reason",value:(null==es?void 0:es.reason)||"",onValueChange:e=>er({reason:e})})]}),W&&(0,a.jsxs)(A.Z,{open:"remute"===et,handleClose:eo,action:ec,isLoading:ei,actionText:"Remute",children:[(0,a.jsx)("div",{children:"You sure you want to remute the user?"}),(0,a.jsx)(g.Y,{label:"Reason",value:(null==es?void 0:es.reason)||"",onValueChange:e=>er({...es,reason:e})}),(0,a.jsx)(u.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==es?void 0:es.type],onChange:e=>er({...es,type:e.target.value}),disallowEmptySelection:!0,children:K.map(e=>(0,a.jsx)(m.R,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(g.Y,{label:"Time (in minutes)",type:"number",value:(null==es?void 0:es.duration)||"",onValueChange:e=>er({...es,duration:e}),description:"Time in minutes, 0 = Permanent mute"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start again at ",(0,a.jsx)("b",{children:(0,R.Z)()})]}),(0,a.jsxs)("span",{children:["the mute will end at"," ",(0,a.jsx)("b",{children:(null==es?void 0:es.duration)==="0"?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,R.Z)(new Date().getTime()+6e4*Number(null==es?void 0:es.duration))})]})]})]}),W&&(0,a.jsxs)(A.Z,{open:"edit"===et,handleClose:eo,action:ec,isLoading:ei,actionText:"Edit",children:[(0,a.jsx)("div",{children:"This will replace the mute duration or reason"}),(0,a.jsx)(g.Y,{label:"Mute Reason",value:null==es?void 0:es.reason,onValueChange:e=>er({...es,reason:e})}),(0,a.jsx)(u.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==es?void 0:es.type],onChange:e=>er({...es,type:e.target.value}),disallowEmptySelection:!0,children:K.map(e=>(0,a.jsx)(m.R,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(g.Y,{label:"Mute Time (in minutes)",type:"number",value:(null==es?void 0:es.duration)||"",onValueChange:e=>er({...es,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent mute (will replace the duration)"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute started at ",(0,a.jsx)("b",{children:(0,R.Z)(null==en?void 0:en.created)})]}),(0,a.jsxs)("span",{children:["After the edit, the mute will end at"," ",(0,a.jsx)("b",{children:(null==es?void 0:es.duration)==="0"?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,R.Z)(new Date((null==en?void 0:en.created)||"").getTime()+6e4*Number(null==es?void 0:es.duration))})]})]})]}),W&&(0,a.jsx)(A.Z,{open:"delete"===et,handleClose:eo,action:ec,isLoading:ei,actionText:"Delete",children:(0,a.jsx)("div",{children:"Are you sure you want to delete the mute? this action is permanent and cannot be undone"})})]})}},175:function(e,n,t){var a=t(1916);n.Z=e=>a.Z.get(e).then(e=>e.data)},5549:function(e,n){n.Z=e=>{let n=e?new Date(e):new Date;return n.toLocaleDateString()+" - "+n.toLocaleTimeString()}},646:function(e,n,t){t.d(n,{hY:function(){return l},jc:function(){return o}});var a=t(2573),s=t(917),r=t(175),i=t(1916);let l=async()=>{await (0,i.Z)("/api/auth/logout"),await (0,s.JG)("/api/auth"),a.Am.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,n=window.innerHeight/2-400,t=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(n,", left=").concat(e)),r=setInterval(async()=>{t&&t.closed&&(await (0,s.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(r))},1e3)};n.ZP=()=>{let{data:e,isLoading:n,error:t}=(0,s.ZP)("/api/auth",r.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:t||!e?null:e.user,admin:t||!e?null:e.admin,isLoading:n}}},4631:function(e,n,t){var a=t(4740);n.Z=()=>{let[e,n]=(0,a.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{n({...e,open:!1})},handleOpen:(e,t)=>{e.preventDefault();let{pageX:a,pageY:s}=e;n({open:!0,x:a,y:s,info:t})},info:e.info}}},1204:function(e,n,t){t.d(n,{P:function(){return s}});var a=t(1326);let s=a.z.enum(["GAG","MUTE","SILENCE"]),r=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:s});n.Z=r}}]);