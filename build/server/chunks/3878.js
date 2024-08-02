"use strict";exports.id=3878,exports.ids=[3878],exports.modules={68527:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(37307),n=s(54567),r=s(79952),i=s(24787),l=s(58211),o=s(84410),c=s(89284);let d=({open:e,children:t,action:s,handleClose:d,isLoading:m,actionText:u})=>a.jsx(n.R,{isOpen:e,onOpenChange:!m&&d||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:a.jsx(r.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.k,{className:"flex flex-col gap-1",children:"Confirmation"}),a.jsx(l.I,{children:t}),(0,a.jsxs)(o.R,{children:[a.jsx(c.A,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),a.jsx(c.A,{color:"primary",onPress:s,isLoading:m,children:u||"Confirm"})]})]})})})},89157:(e,t,s)=>{s.d(t,{Z:()=>m});var a=s(37307),n=s(9292),r=s(63445),i=s(68511),l=s(68506),o=s(23169);let c=(e,t)=>{(0,o.useEffect)(()=>{let s=s=>{let a=e?.current;!a||a?.contains(s.target)||t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}},[e,t])};var d=s(94900);let m=({open:e,x:t,y:s,handleCloseMenu:m,items:u})=>{let h=(0,o.useRef)(null);c(h,m);let{admin:x}=(0,d.ZP)(),j=x?.flags,p=u.map(({category:e,items:t})=>({category:e,items:t.filter(({flags:e})=>!e||e.some(e=>j?.includes(e)))}));return e&&a.jsx(l.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:t,top:s},ref:h,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},children:a.jsx(n.X,{variant:"flat","aria-label":"Listbox menu with sections",items:u,children:p.map(({category:e,items:t})=>a.jsx(r.y,{title:e,children:t.map(({key:e,description:t,icon:s,color:n,onClick:r})=>a.jsx(i.R,{description:a.jsx("span",{className:"text-foreground-700",children:t}),startContent:a.jsx(s,{}),color:n||"default",onClick:()=>{r&&r(),m()},children:e},e))},e))})})}},93878:(e,t,s)=>{s.d(t,{f:()=>H,default:()=>q});var a=s(37307),n=s(67078),r=s(21504),i=s(76884),l=s(29844),o=s(84245),c=s(18811),d=s(65192),m=s(4136),u=s(705),h=s(34371),x=s(7713),j=s(68511),p=s(38848),g=s(69246),y=s(45944),v=s(51673),f=s(78156),b=s(89284),w=s(78758),C=s(86624),T=s(23169),z=s(52855),E=s(10644),N=s(87235),P=s(32371),D=s(89983);let S=(0,P.Ue)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));D.z.object({reason:D.z.string()}),D.z.object({reason:D.z.string(),duration:D.z.string(),type:N.P}),D.z.object({comment:D.z.string()}),D.z.object({reason:D.z.string(),duration:D.z.string(),type:N.P}),D.z.enum(["unmute","remute","comment","edit","delete"]);var M=s(14231),R=s(68527),Z=s(50436),_=s(89157),L=s(94900),A=s(38375),k=s(74410),I=s(20618),U=s(96161),X=s(54567),Y=s(79952),F=s(24787),V=s(58211),$=s(84410),G=s(31672);let O=({open:e,setOpen:t,mutate:s})=>{let[n,r]=(0,T.useState)(!1),i=async()=>{if(!n){r(!0);try{await (0,G.Z)("/api/mutes",{method:"POST",data:l.values}),await s(),k.Am.success("Succesfully muted player!"),t(!1)}catch(t){let e=t?.response?.data||t?.message;console.error(t),k.Am.error(`Failed to create mute!
${e||t}`)}r(!1)}},l=(0,I.c)({initialValues:{player_steamid:"",reason:"",duration:"",comment:"",type:"MUTE"},validate:(0,U.F)(N.Z)});return a.jsx(X.R,{isOpen:e,onOpenChange:n?void 0:t,children:a.jsx(Y.A,{children:e=>(0,a.jsxs)("form",{onSubmit:l.onSubmit(i),children:[a.jsx(F.k,{className:"flex flex-col gap-1",children:"Create new mute"}),(0,a.jsxs)(V.I,{children:[a.jsx(C.Y,{...l.getInputProps("player_steamid"),errorMessage:l.errors.player_steamid,isInvalid:!!l.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:n,autoFocus:!0}),a.jsx(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[l.values.type],onChange:e=>l.setValues({type:e.target.value}),isDisabled:n,disallowEmptySelection:!0,children:H.map(e=>a.jsx(j.R,{value:e.value,children:e.name},e.value))}),a.jsx(C.Y,{...l.getInputProps("reason"),errorMessage:l.errors.reason,isInvalid:!!l.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:n}),a.jsx(C.Y,{...l.getInputProps("duration"),errorMessage:l.errors.duration,isInvalid:!!l.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:n}),a.jsx(C.Y,{...l.getInputProps("comment"),errorMessage:l.errors.comment,isInvalid:!!l.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:n}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start now ",(0,a.jsxs)("b",{children:["(",(0,M.Z)(),")"]})]}),(0,a.jsxs)("span",{children:["and will end at"," ",a.jsx("b",{children:"0"===l.values.duration?a.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,M.Z)(new Date().getTime()+6e4*Number(l.values.duration))})]})]})]}),(0,a.jsxs)($.R,{children:[a.jsx(b.A,{color:"danger",variant:"flat",onPress:e,isDisabled:n,children:"Cancel"}),a.jsx(b.A,{color:"primary",type:"submit",isLoading:n,children:"Mute player"})]})]})})})},W=e=>{switch(e){case"ACTIVE":return a.jsx(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return a.jsx(E.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNMUTED":return a.jsx(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return a.jsx(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}};var J=s(25640),K=s(84841);let H=[{name:"Gag (Chat)",value:"GAG"},{name:"Mute (Voice)",value:"MUTE"},{name:"Silence (Both)",value:"SILENCE"}],q=({type:e})=>{let[t,s]=(0,T.useState)(!1),[N,P]=(0,T.useState)(1),[D,I]=(0,T.useState)(""),[U]=(0,w.Nr)(D,500),X=10;"/"===(0,v.usePathname)()&&(X=5);let{data:Y,isLoading:F,mutate:V}=(0,K.ZP)(`/api/mutes?page=${N}&rows=${X}&query=${U}`,A.Z,{keepPreviousData:!0}),$=(0,T.useMemo)(()=>Y?.count?Math.ceil(Y.count/X):0,[Y?.count,X]),{admin:q}=(0,L.ZP)(),{x:B,y:Q,open:ee,handleCloseMenu:et,handleOpen:es,info:ea}=(0,Z.Z)(),en=S(e=>e.action),er=S(e=>e.setAction),ei=S(e=>e.details),el=S(e=>e.setDetails),eo=S(e=>e.isLoading),ec=S(e=>e.setIsLoading),ed=S(e=>e.reset),em=async()=>{if(en&&!eo&&ea){ec(!0);try{await G.Z.post(`/api/mutes/${ea.id}`,{action:en,details:ei}),await V(),ed(),k.ZP.success(`Player ${en}ed successfully`)}catch(e){k.ZP.error(`Error ${en} player`)}ec(!1)}},eu=(e,t)=>{switch(t){case"player_name":return a.jsx(J.default,{href:`https://steamcommunity.com/profiles/${e.player_steamid}`,target:"_blank",passHref:!0,children:a.jsx(z.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:e.player_name?.slice(0,10)})});case"status":return W(e.status);case"reason":return e.reason.length>10?a.jsx(f.e,{content:e.reason,showArrow:!0,children:a.jsx("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):a.jsx("div",{className:"text-xs font-light",children:e.reason});case"unmute_reason":return e.unmute_reason&&e.unmute_reason.length>10?a.jsx(f.e,{content:e.unmute_reason,showArrow:!0,children:a.jsx("div",{className:"text-xs font-light",children:e.unmute_reason?.slice(0,10)})}):a.jsx("div",{className:"text-xs font-light",children:e.unmute_reason});case"type":return a.jsx(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:e.type});case"duration":return a.jsx(E.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":`${e.duration} minutes`});case"admin_name":return e.admin_name?"Console"===e.admin_name?a.jsx(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):a.jsx(J.default,{href:`https://steamcommunity.com/profiles/${e.admin_steamid}`,target:"_blank",passHref:!0,children:a.jsx(z.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):a.jsx(a.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return a.jsx(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNMUTED"===e.status||"EXPIRED"===e.status)return a.jsx(g.W,{color:"success",value:100,isStriped:!0});let s=new Date,n=new Date(e.created),r=new Date(e.ends),i=Math.round((s.getTime()-n.getTime())/(r.getTime()-n.getTime())*100)||0,l=Math.round((r.getTime()-s.getTime())/6e4),o=i<50?"warning":i>=100?"success":"primary";return l>0?a.jsx(f.e,{content:`${l} minutes left`,color:o,showArrow:!0,children:a.jsx(g.W,{color:o,value:i,isStriped:!0})}):a.jsx(g.W,{color:o,value:i,isStriped:!0});case"comment":return e.comment?e.comment.length>10?a.jsx(f.e,{content:e.comment,showArrow:!0,children:a.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)})}):a.jsx("div",{className:"text-xs font-light",children:e.comment}):a.jsx(a.Fragment,{children:"-"});case"created":return(0,M.Z)(e.created);default:return a.jsx(a.Fragment,{})}},eh=a.jsx(a.Fragment,{});switch(e){case"MANAGE":eh=(0,a.jsxs)(n.J,{children:[a.jsx(r.j,{children:"Player"},"player_name"),a.jsx(r.j,{children:"Status"},"status"),a.jsx(r.j,{children:"Admin"},"admin_name"),a.jsx(r.j,{children:"Type"},"type"),a.jsx(r.j,{children:"Reason"},"reason"),a.jsx(r.j,{children:"Remove Reason"},"unmute_reason"),a.jsx(r.j,{children:"Duration"},"duration"),a.jsx(r.j,{children:"Time left"},"timeLeft"),a.jsx(r.j,{children:"Comment"},"comment")]});break;case"SMALL":eh=(0,a.jsxs)(n.J,{children:[a.jsx(r.j,{children:"Player"},"player_name"),a.jsx(r.j,{children:"Status"},"status"),a.jsx(r.j,{children:"Type"},"type"),a.jsx(r.j,{children:"Reason"},"reason"),a.jsx(r.j,{children:"Duration"},"duration"),a.jsx(r.j,{children:"Time left"},"timeLeft")]});break;case"NORMAL":eh=(0,a.jsxs)(n.J,{children:[a.jsx(r.j,{children:"Player"},"player_name"),a.jsx(r.j,{children:"Status"},"status"),a.jsx(r.j,{children:"Admin"},"admin_name"),a.jsx(r.j,{children:"Type"},"type"),a.jsx(r.j,{children:"Reason"},"reason"),a.jsx(r.j,{children:"Remove Reason"},"unmute_reason"),a.jsx(r.j,{children:"Duration"},"duration"),a.jsx(r.j,{children:"Time left"},"timeLeft")]})}let ex=["@css/generic","@css/root","@web/mutes"],ej=q?.flags?.some(e=>ex.includes(e))||!1;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.b,{topContent:(0,a.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,a.jsxs)("div",{className:"text-start",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Mutes"}),(0,a.jsxs)("code",{className:"text-sm font-normal",children:["total: ",Y?.count||""]})]}),(0,a.jsxs)("div",{className:"flex",children:[a.jsx(f.e,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,children:a.jsx(C.Y,{label:"Search",labelPlacement:"outside-left",value:D,onValueChange:I,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},isClearable:!0})}),q&&ej&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>s(!0),children:[a.jsx(d.Z,{size:46}),"New mute"]}),a.jsx(O,{open:t,setOpen:s,mutate:V})]})]})]}),bottomContent:(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"flex w-full justify-center",children:a.jsx(p.g,{color:"primary",page:N,total:$,onChange:e=>P(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),q&&"MANAGE"===e&&a.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[eh,a.jsx(l.y,{items:Y?.results??[],loadingContent:a.jsx(y.c,{}),loadingState:F?"loading":"idle",children:e=>a.jsx(o.g,{onContextMenu:t=>q&&es&&es(t,e)||void 0,children:t=>a.jsx(c.X,{children:eu(e,t)})},e.id)})]}),q&&a.jsx(_.Z,{open:ee,x:B,y:Q,handleCloseMenu:et,items:[{category:"Mute Actions",items:[{key:"Comment",description:"Write a comment on this mute, this will be visible to other admins",icon:m.Z,color:"default",onClick:()=>{er("comment"),el({comment:ea?.comment||""})},flags:["@css/root","@web/mutes","@web/root"]},{key:ea?.status==="UNMUTED"||ea?.status==="EXPIRED"?"Re-mute":"Remove Mute (shorten)",description:ea?.status==="UNMUTED"||ea?.status==="EXPIRED"?"Re-mute the player":"Remove the player mute (shorten the duration)",icon:u.Z,color:"default",onClick:()=>{ea?.status==="UNMUTED"||ea?.status==="EXPIRED"?(er("remute"),el({reason:"",duration:"0",type:"MUTE"})):(er("unmute"),el({reason:""}))},flags:["@css/root","@web/mutes","@web/root"]},{key:"Edit Mute",description:"Edit the mute duration or reason",icon:m.Z,color:"primary",onClick:()=>{er("edit"),el({reason:ea?.reason||"",duration:ea?.duration.toString()||"0",type:ea?.type||"MUTE"})},flags:["@css/root","@web/mutes","@web/root"]},{key:"Delete Mute",description:"Delete the mute from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{er("delete")},flags:["@css/root","@web/mutes","@web/root"]}]}]}),q&&(0,a.jsxs)(R.Z,{open:"comment"===en,handleClose:ed,action:em,isLoading:eo,actionText:"Save",children:[a.jsx("div",{children:"Write a comment on this mute, this will be visible to other admins"}),a.jsx(C.Y,{label:"Comment",value:ei?.comment||"",onValueChange:e=>el({comment:e})})]}),q&&(0,a.jsxs)(R.Z,{open:"unmute"===en,handleClose:ed,action:em,isLoading:eo,actionText:"Unmute",children:[a.jsx("div",{children:"You sure you want to unmute the user?"}),a.jsx(C.Y,{label:"Reason",value:ei?.reason||"",onValueChange:e=>el({reason:e})})]}),q&&(0,a.jsxs)(R.Z,{open:"remute"===en,handleClose:ed,action:em,isLoading:eo,actionText:"Remute",children:[a.jsx("div",{children:"You sure you want to remute the user?"}),a.jsx(C.Y,{label:"Reason",value:ei?.reason||"",onValueChange:e=>el({...ei,reason:e})}),a.jsx(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[ei?.type],onChange:e=>el({...ei,type:e.target.value}),disallowEmptySelection:!0,children:H.map(e=>a.jsx(j.R,{value:e.value,children:e.name},e.value))}),a.jsx(C.Y,{label:"Time (in minutes)",type:"number",value:ei?.duration||"",onValueChange:e=>el({...ei,duration:e}),description:"Time in minutes, 0 = Permanent mute"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start again at ",a.jsx("b",{children:(0,M.Z)()})]}),(0,a.jsxs)("span",{children:["the mute will end at"," ",a.jsx("b",{children:ei?.duration==="0"?a.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,M.Z)(new Date().getTime()+6e4*Number(ei?.duration))})]})]})]}),q&&(0,a.jsxs)(R.Z,{open:"edit"===en,handleClose:ed,action:em,isLoading:eo,actionText:"Edit",children:[a.jsx("div",{children:"This will replace the mute duration or reason"}),a.jsx(C.Y,{label:"Mute Reason",value:ei?.reason,onValueChange:e=>el({...ei,reason:e})}),a.jsx(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[ei?.type],onChange:e=>el({...ei,type:e.target.value}),disallowEmptySelection:!0,children:H.map(e=>a.jsx(j.R,{value:e.value,children:e.name},e.value))}),a.jsx(C.Y,{label:"Mute Time (in minutes)",type:"number",value:ei?.duration||"",onValueChange:e=>el({...ei,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent mute (will replace the duration)"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute started at ",a.jsx("b",{children:(0,M.Z)(ea?.created)})]}),(0,a.jsxs)("span",{children:["After the edit, the mute will end at"," ",a.jsx("b",{children:ei?.duration==="0"?a.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,M.Z)(new Date(ea?.created||"").getTime()+6e4*Number(ei?.duration))})]})]})]}),q&&a.jsx(R.Z,{open:"delete"===en,handleClose:ed,action:em,isLoading:eo,actionText:"Delete",children:a.jsx("div",{children:"Are you sure you want to delete the mute? this action is permanent and cannot be undone"})})]})}},14231:(e,t,s)=>{s.d(t,{Z:()=>a});let a=e=>{let t=e?new Date(e):new Date;return t.toLocaleDateString()+" - "+t.toLocaleTimeString()}},50436:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(23169);let n=()=>{let[e,t]=(0,a.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{t({...e,open:!1})},handleOpen:(e,s)=>{e.preventDefault();let{pageX:a,pageY:n}=e;t({open:!0,x:a,y:n,info:s})},info:e.info}}},87235:(e,t,s)=>{s.d(t,{P:()=>n,Z:()=>r});var a=s(89983);let n=a.z.enum(["GAG","MUTE","SILENCE"]),r=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:n})}};