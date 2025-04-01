"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9610],{9610:function(e,a,n){n.d(a,{default:function(){return J}});var s=n(74018),r=n(3733),i=n(81451),l=n(54554),t=n(20509),o=n(58835),d=n(64723),c=n(73185),m=n(1005),u=n(94543),h=n(18956),x=n(12533),b=n(86992),j=n(15501),p=n(97630),v=n(65639),g=n(12125),f=n(35607),y=n(95398),w=n(90184),N=n(13526),_=n(7824),C=n(14125),P=n(48148);let D=(0,C.Ue)(e=>({action:null,setAction:a=>e({action:a}),isLoading:!1,setIsLoading:a=>e({isLoading:a}),details:null,setDetails:a=>e({details:a}),reset:()=>e({action:null,isLoading:!1,details:null})}));P.z.object({reason:P.z.string()}),P.z.object({reason:P.z.string(),duration:P.z.string()}),P.z.object({comment:P.z.string()}),P.z.object({reason:P.z.string(),duration:P.z.string()}),P.z.enum(["unban","reban","comment","edit","delete"]);var R=n(50434),T=n(94063),z=n(98895),A=n(34415),S=n(74941),E=n(96530),Z=n(60418),I=n(65699),L=n(80042),k=n(91095),B=n(8645),M=n(8025),Y=n(73166),X=n(22071),U=n(15439);let F=P.z.object({player_steamid:P.z.string().optional(),player_ip:P.z.string().optional(),reason:P.z.string().min(3),duration:P.z.string(),comment:P.z.string().optional()});var V=e=>{let{open:a,setOpen:n,mutate:r}=e,[i,l]=(0,x.useState)(!1),t=async()=>{if(!i){l(!0);try{await (0,U.Z)("/api/bans",{method:"POST",data:o.values}),await r(),Z.Am.success("Succesfully banned player!"),n(!1)}catch(n){var e;let a=(null==n?void 0:null===(e=n.response)||void 0===e?void 0:e.data)||(null==n?void 0:n.message);console.error(n),Z.Am.error("Failed to create ban!\n".concat(a||n))}l(!1)}},o=(0,I.c)({initialValues:{player_steamid:"",player_ip:"",reason:"",duration:"",comment:""},validate:(0,L.F)(F)});return(0,s.jsx)(k.R,{isOpen:a,onOpenChange:i?void 0:n,children:(0,s.jsx)(B.A,{children:e=>(0,s.jsxs)("form",{onSubmit:o.onSubmit(t),children:[(0,s.jsx)(M.k,{className:"flex flex-col gap-1",children:"Create new ban"}),(0,s.jsxs)(Y.I,{children:[(0,s.jsx)("p",{children:"You can ban a player by either their Steam64 / SteamId / Profile URL or their IP address."}),(0,s.jsx)(w.Y,{...o.getInputProps("player_steamid"),errorMessage:o.errors.player_steamid,isInvalid:!!o.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:i||!!o.values.player_ip,autoFocus:!0}),(0,s.jsx)(w.Y,{...o.getInputProps("player_ip"),errorMessage:o.errors.player_ip,isInvalid:!!o.errors.player_ip,label:"IP Address",placeholder:"1.1.1.1",variant:"bordered",isDisabled:i||!!o.values.player_steamid}),(0,s.jsx)(w.Y,{...o.getInputProps("reason"),errorMessage:o.errors.reason,isInvalid:!!o.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:i}),(0,s.jsx)(w.Y,{...o.getInputProps("duration"),errorMessage:o.errors.duration,isInvalid:!!o.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:i}),(0,s.jsx)(w.Y,{...o.getInputProps("comment"),errorMessage:o.errors.comment,isInvalid:!!o.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:i}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start now ",(0,s.jsxs)("b",{children:["(",(0,R.Z)(),")"]})]}),(0,s.jsxs)("span",{children:["and will end at"," ",(0,s.jsx)("b",{children:"0"===o.values.duration?(0,s.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,R.Z)(new Date().getTime()+6e4*Number(o.values.duration))})]})]})]}),(0,s.jsxs)(X.R,{children:[(0,s.jsx)(f.A,{color:"danger",variant:"flat",onPress:e,isDisabled:i,children:"Cancel"}),(0,s.jsx)(f.A,{color:"primary",type:"submit",isLoading:i,children:"Ban player"})]})]})})})},W=e=>{switch(e){case"ACTIVE":return(0,s.jsx)(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return(0,s.jsx)(N.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNBANNED":return(0,s.jsx)(N.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return(0,s.jsx)(N.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}},O=n(9153),G=n(79361),J=e=>{var a,n;let{type:C}=e,[P,I]=(0,x.useState)(!1),[L,k]=(0,x.useState)(1),[B,M]=(0,x.useState)(""),[Y]=(0,y.Nr)(B,500),X=10;"/"===(0,g.usePathname)()&&(X=5);let{data:F,isLoading:J,mutate:H}=(0,G.ZP)("/api/bans?page=".concat(L,"&rows=").concat(X,"&query=").concat(Y),E.Z,{keepPreviousData:!0}),q=(0,x.useMemo)(()=>(null==F?void 0:F.count)?Math.ceil(F.count/X):0,[null==F?void 0:F.count,X]),{admin:K}=(0,S.ZP)(),{x:Q,y:$,open:ee,handleCloseMenu:ea,handleOpen:en,info:es}=(0,z.Z)(),er=D(e=>e.action),ei=D(e=>e.setAction),el=D(e=>e.details),et=D(e=>e.setDetails),eo=D(e=>e.isLoading),ed=D(e=>e.setIsLoading),ec=D(e=>e.reset),em=async()=>{if(er&&!eo&&es){ed(!0);try{await U.Z.post("/api/bans/".concat(es.id),{action:er,details:el}),await H(),ec(),Z.ZP.success("Player ".concat(er,"ed successfully"))}catch(e){Z.ZP.error("Error ".concat(er," player"))}ed(!1)}},eu=(e,a)=>{var n,r,i,l;switch(a){case"player_name":return(0,s.jsx)(O.default,{href:"https://steamcommunity.com/profiles/".concat(e.player_steamid),target:"_blank",passHref:!0,children:(0,s.jsx)(_.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:null===(n=e.player_name)||void 0===n?void 0:n.slice(0,10)})});case"status":return W(e.status);case"reason":return e.reason.length>10?(0,s.jsx)(v.e,{content:e.reason,"aria-label":"Reason",showArrow:!0,children:(0,s.jsx)("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):(0,s.jsx)("div",{className:"text-xs font-light",children:e.reason});case"unban_reason":return e.unban_reason&&e.unban_reason.length>10?(0,s.jsx)(v.e,{content:e.unban_reason,"aria-label":"Remove Reason",showArrow:!0,children:(0,s.jsx)("div",{className:"text-xs font-light",children:null===(r=e.unban_reason)||void 0===r?void 0:r.slice(0,10)})}):(0,s.jsx)("div",{className:"text-xs font-light",children:e.unban_reason});case"duration":return(0,s.jsx)(N.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":"".concat(e.duration," minutes")});case"admin_name":return e.admin_name?"Console"===e.admin_name?(0,s.jsx)(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):(0,s.jsx)(O.default,{href:"https://steamcommunity.com/profiles/".concat(e.admin_steamid),target:"_blank",passHref:!0,children:(0,s.jsx)(_.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):(0,s.jsx)(s.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return(0,s.jsx)(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNBANNED"===e.status||"EXPIRED"===e.status)return(0,s.jsx)(j.W,{color:"success",value:100,"aria-label":"Expired"});let t=new Date,o=new Date(e.created),d=new Date(e.ends),c=Math.round((t.getTime()-o.getTime())/(d.getTime()-o.getTime())*100),m=Math.round((d.getTime()-t.getTime())/6e4),u=c<50?"warning":c>=100?"success":"primary";return m>0?(0,s.jsx)(v.e,{content:"".concat(m," minutes left"),color:u,"aria-label":"Time left",showArrow:!0,children:(0,s.jsx)(j.W,{color:u,value:c,"aria-label":"".concat(m," minutes left")})}):(0,s.jsx)(j.W,{color:u,value:c,"aria-label":"Expired"});case"comment":return e.comment?e.comment.length>10?(0,s.jsx)(v.e,{content:e.comment,"aria-label":"Comment",showArrow:!0,children:(0,s.jsx)("div",{className:"text-xs font-light",children:null===(i=e.comment)||void 0===i?void 0:i.slice(0,10)})}):(0,s.jsx)("div",{className:"text-xs font-light",children:null===(l=e.comment)||void 0===l?void 0:l.slice(0,10)}):(0,s.jsx)(s.Fragment,{children:"-"});case"created":return(0,R.Z)(e.created);default:return(0,s.jsx)(s.Fragment,{})}},eh=(0,s.jsx)(s.Fragment,{});switch(C){case"MANAGE":eh=(0,s.jsxs)(r.J,{children:[(0,s.jsx)(i.j,{"aria-label":"Player",children:"Player"},"player_name"),(0,s.jsx)(i.j,{"aria-label":"Status",children:"Status"},"status"),(0,s.jsx)(i.j,{"aria-label":"Admin",children:"Admin"},"admin_name"),(0,s.jsx)(i.j,{"aria-label":"Reason",children:"Reason"},"reason"),(0,s.jsx)(i.j,{"aria-label":"Remove Reason",children:"Remove Reason"},"unban_reason"),(0,s.jsx)(i.j,{"aria-label":"Date/Time",children:"Date/Time"},"created"),(0,s.jsx)(i.j,{"aria-label":"Duration",children:"Duration"},"duration"),(0,s.jsx)(i.j,{"aria-label":"Time left",children:"Time left"},"timeLeft"),(0,s.jsx)(i.j,{"aria-label":"Comment",children:"Comment"},"comment")]});break;case"SMALL":eh=(0,s.jsxs)(r.J,{children:[(0,s.jsx)(i.j,{"aria-label":"Player",children:"Player"},"player_name"),(0,s.jsx)(i.j,{"aria-label":"Status",children:"Status"},"status"),(0,s.jsx)(i.j,{"aria-label":"Reason",children:"Reason"},"reason"),(0,s.jsx)(i.j,{"aria-label":"Duration",children:"Duration"},"duration"),(0,s.jsx)(i.j,{"aria-label":"Time left",children:"Time left"},"timeLeft")]});break;case"NORMAL":eh=(0,s.jsxs)(r.J,{children:[(0,s.jsx)(i.j,{"aria-label":"Player",children:"Player"},"player_name"),(0,s.jsx)(i.j,{"aria-label":"Status",children:"Status"},"status"),(0,s.jsx)(i.j,{"aria-label":"Admin",children:"Admin"},"admin_name"),(0,s.jsx)(i.j,{"aria-label":"Reason",children:"Reason"},"reason"),(0,s.jsx)(i.j,{"aria-label":"Remove Reason",children:"Remove Reason"},"unban_reason"),(0,s.jsx)(i.j,{"aria-label":"Date/Time",children:"Date/Time"},"created"),(0,s.jsx)(i.j,{"aria-label":"Duration",children:"Duration"},"duration"),(0,s.jsx)(i.j,{"aria-label":"Time left",children:"Time left"},"timeLeft")]})}let ex=["@web/root","@css/root","@web/bans"],eb=(null==K?void 0:null===(a=K.flags)||void 0===a?void 0:a.some(e=>ex.includes(e)))||!1;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.b,{topContent:(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"text-start",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Bans"}),(0,s.jsxs)("code",{className:"text-sm font-normal",children:["total: ",(null==F?void 0:F.count)||""]})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(v.e,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,"aria-label":"Search",children:(0,s.jsx)(w.Y,{label:"Search",labelPlacement:"outside-left",value:B,onValueChange:M,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},"aria-label":"Search",isClearable:!0})}),K&&eb&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>I(!0),"aria-label":"New ban",children:[(0,s.jsx)(c.Z,{size:46,"aria-label":"New ban"}),"New ban"]}),(0,s.jsx)(V,{open:P,setOpen:I,mutate:H})]})]})]}),bottomContent:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex w-full justify-center",children:(0,s.jsx)(b.g,{color:"primary",page:L,total:q,onChange:e=>k(e),"aria-label":"Pagination",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),K&&"MANAGE"===C&&(0,s.jsx)("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[eh,(0,s.jsx)(t.y,{items:null!==(n=null==F?void 0:F.results)&&void 0!==n?n:[],loadingContent:(0,s.jsx)(p.c,{"aria-label":"Loading"}),loadingState:J?"loading":"idle",children:e=>(0,s.jsx)(o.g,{onContextMenu:a=>K&&en&&en(a,e)||void 0,"aria-label":e.player_name||"",children:a=>(0,s.jsx)(d.X,{"aria-label":a.toString(),children:eu(e,a)})},e.id)})]}),K&&(0,s.jsx)(A.Z,{open:ee,x:Q,y:$,handleCloseMenu:ea,items:[{category:"Ban Actions",items:[{key:"Comment",description:"Write a comment on this ban, this will be visible to other admins",icon:m.Z,color:"default",onClick:()=>{ei("comment"),et({comment:(null==es?void 0:es.comment)||""})},flags:["@css/root","@web/bans","@web/root"]},{key:(null==es?void 0:es.status)==="UNBANNED"||(null==es?void 0:es.status)==="EXPIRED"?"Reban":"Remove Ban (shorten)",description:(null==es?void 0:es.status)==="UNBANNED"||(null==es?void 0:es.status)==="EXPIRED"?"Reban the player":"Remove the player ban (shorten the duration)",icon:u.Z,color:"default",onClick:()=>{(null==es?void 0:es.status)==="UNBANNED"||(null==es?void 0:es.status)==="EXPIRED"?(ei("reban"),et({reason:"",duration:"0"})):(ei("unban"),et({reason:""}))},flags:["@css/root","@web/bans","@web/root"]},{key:"Edit Ban",description:"Edit the ban duration or reason",icon:m.Z,color:"primary",onClick:()=>{var e;ei("edit"),et({reason:(null==es?void 0:es.reason)||"",duration:(null==es?void 0:null===(e=es.duration)||void 0===e?void 0:e.toString())||"0"})},flags:["@css/root","@web/bans","@web/root"]},{key:"Delete Ban",description:"Delete the ban from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{ei("delete")},flags:["@css/root","@web/bans","@web/root"]}]}]}),K&&(0,s.jsxs)(T.Z,{open:"comment"===er,handleClose:ec,action:em,isLoading:eo,actionText:"Save",children:[(0,s.jsx)("div",{children:"Write a comment on this ban, this will be visible to other admins"}),(0,s.jsx)(w.Y,{label:"Comment",value:(null==el?void 0:el.comment)||"",onValueChange:e=>et({comment:e}),"aria-label":"Comment"})]}),K&&(0,s.jsxs)(T.Z,{open:"unban"===er,handleClose:ec,action:em,isLoading:eo,actionText:"Unban",children:[(0,s.jsx)("div",{children:"You sure you want to unban the user?"}),(0,s.jsx)(w.Y,{label:"Reason",value:(null==el?void 0:el.reason)||"",onValueChange:e=>et({reason:e}),"aria-label":"Unban Reason"})]}),K&&(0,s.jsxs)(T.Z,{open:"reban"===er,handleClose:ec,action:em,isLoading:eo,actionText:"Reban",children:[(0,s.jsx)("div",{children:"You sure you want to reban the user?"}),(0,s.jsx)(w.Y,{label:"Reason",value:(null==el?void 0:el.reason)||"",onValueChange:e=>et({...el,reason:e}),"aria-label":"Ban Reason"}),(0,s.jsx)(w.Y,{label:"Time (in minutes)",type:"number",value:(null==el?void 0:el.duration)||"",onValueChange:e=>et({...el,duration:e}),description:"Time in minutes, 0 = Permanent ban","aria-label":"Ban Time"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start again at ",(0,s.jsx)("b",{children:(0,R.Z)()})]}),(0,s.jsxs)("span",{children:["the ban will end at"," ",(0,s.jsx)("b",{children:(null==el?void 0:el.duration)==="0"?(0,s.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,R.Z)(new Date().getTime()+6e4*Number(null==el?void 0:el.duration))})]})]})]}),K&&(0,s.jsxs)(T.Z,{open:"edit"===er,handleClose:ec,action:em,isLoading:eo,actionText:"Edit",children:[(0,s.jsx)("div",{children:"This will replace the ban duration or reason"}),(0,s.jsx)(w.Y,{label:"Ban Reason",value:(null==el?void 0:el.reason)||"",onValueChange:e=>et({...el,reason:e}),"aria-label":"Ban Reason"}),(0,s.jsx)(w.Y,{label:"Ban Time (in minutes)",type:"number",value:(null==el?void 0:el.duration)||"",onValueChange:e=>et({...el,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent ban (will replace the duration)","aria-label":"Ban Time"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban started at ",(0,s.jsx)("b",{children:(0,R.Z)(null==es?void 0:es.created)})]}),(0,s.jsxs)("span",{children:["After the edit, the ban will end at"," ",(0,s.jsx)("b",{children:(null==el?void 0:el.duration)==="0"?(0,s.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,R.Z)(new Date((null==es?void 0:es.created)||"").getTime()+6e4*Number(null==el?void 0:el.duration))})]})]})]}),K&&(0,s.jsx)(T.Z,{open:"delete"===er,handleClose:ec,action:em,isLoading:eo,actionText:"Delete",children:(0,s.jsx)("div",{children:"Are you sure you want to delete the ban? this action is permanent and cannot be undone"})})]})}}}]);