"use strict";exports.id=9118,exports.ids=[9118],exports.modules={39118:(e,a,n)=>{n.d(a,{default:()=>G});var s=n(82478),r=n(78064),t=n(70375),i=n(72461),l=n(97674),o=n(59158),d=n(28923),c=n(1018),m=n(95972),u=n(34962),h=n(57399),x=n(63107),b=n(14034),j=n(50089),p=n(54316),g=n(49081),f=n(63397),y=n(7099),v=n(38994),w=n(25660),N=n(53273),P=n(80404),C=n(81242),D=n(92070);let R=(0,C.Ue)(e=>({action:null,setAction:a=>e({action:a}),isLoading:!1,setIsLoading:a=>e({isLoading:a}),details:null,setDetails:a=>e({details:a}),reset:()=>e({action:null,isLoading:!1,details:null})}));D.z.object({reason:D.z.string()}),D.z.object({reason:D.z.string(),duration:D.z.string()}),D.z.object({comment:D.z.string()}),D.z.object({reason:D.z.string(),duration:D.z.string()}),D.z.enum(["unban","reban","comment","edit","delete"]);var _=n(45956),T=n(83284),z=n(33247),A=n(21499),S=n(97091),Z=n(31324),E=n(86620),I=n(73512),L=n(21357),k=n(233),B=n(5548),M=n(77891),Y=n(15260),X=n(49620),$=n(25657);let U=D.z.object({player_steamid:D.z.string().optional(),player_ip:D.z.string().optional(),reason:D.z.string().min(3),duration:D.z.string(),comment:D.z.string().optional()}),F=({open:e,setOpen:a,mutate:n})=>{let[r,t]=(0,x.useState)(!1),i=async()=>{if(!r){t(!0);try{await (0,$.Z)("/api/bans",{method:"POST",data:l.values}),await n(),E.Am.success("Succesfully banned player!"),a(!1)}catch(a){let e=a?.response?.data||a?.message;console.error(a),E.Am.error(`Failed to create ban!
${e||a}`)}t(!1)}},l=(0,I.c)({initialValues:{player_steamid:"",player_ip:"",reason:"",duration:"",comment:""},validate:(0,L.F)(U)});return s.jsx(k.R,{isOpen:e,onOpenChange:r?void 0:a,children:s.jsx(B.A,{children:e=>(0,s.jsxs)("form",{onSubmit:l.onSubmit(i),children:[s.jsx(M.k,{className:"flex flex-col gap-1",children:"Create new ban"}),(0,s.jsxs)(Y.I,{children:[s.jsx("p",{children:"You can ban a player by either their Steam64 / SteamId / Profile URL or their IP address."}),s.jsx(w.Y,{...l.getInputProps("player_steamid"),errorMessage:l.errors.player_steamid,isInvalid:!!l.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:r||!!l.values.player_ip,autoFocus:!0}),s.jsx(w.Y,{...l.getInputProps("player_ip"),errorMessage:l.errors.player_ip,isInvalid:!!l.errors.player_ip,label:"IP Address",placeholder:"1.1.1.1",variant:"bordered",isDisabled:r||!!l.values.player_steamid}),s.jsx(w.Y,{...l.getInputProps("reason"),errorMessage:l.errors.reason,isInvalid:!!l.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:r}),s.jsx(w.Y,{...l.getInputProps("duration"),errorMessage:l.errors.duration,isInvalid:!!l.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:r}),s.jsx(w.Y,{...l.getInputProps("comment"),errorMessage:l.errors.comment,isInvalid:!!l.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:r}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start now ",(0,s.jsxs)("b",{children:["(",(0,_.Z)(),")"]})]}),(0,s.jsxs)("span",{children:["and will end at"," ",s.jsx("b",{children:"0"===l.values.duration?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,_.Z)(new Date().getTime()+6e4*Number(l.values.duration))})]})]})]}),(0,s.jsxs)(X.R,{children:[s.jsx(y.A,{color:"danger",variant:"flat",onPress:e,isDisabled:r,children:"Cancel"}),s.jsx(y.A,{color:"primary",type:"submit",isLoading:r,children:"Ban player"})]})]})})})},V=e=>{switch(e){case"ACTIVE":return s.jsx(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return s.jsx(N.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNBANNED":return s.jsx(N.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return s.jsx(N.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}};var W=n(72962),O=n(62687);let G=({type:e})=>{let[a,n]=(0,x.useState)(!1),[C,D]=(0,x.useState)(1),[I,L]=(0,x.useState)(""),[k]=(0,v.Nr)(I,500),B=10;"/"===(0,f.usePathname)()&&(B=5);let{data:M,isLoading:Y,mutate:X}=(0,O.ZP)(`/api/bans?page=${C}&rows=${B}&query=${k}`,Z.Z,{keepPreviousData:!0}),U=(0,x.useMemo)(()=>M?.count?Math.ceil(M.count/B):0,[M?.count,B]),{admin:G}=(0,S.ZP)(),{x:J,y:H,open:q,handleCloseMenu:K,handleOpen:Q,info:ee}=(0,z.Z)(),ea=R(e=>e.action),en=R(e=>e.setAction),es=R(e=>e.details),er=R(e=>e.setDetails),et=R(e=>e.isLoading),ei=R(e=>e.setIsLoading),el=R(e=>e.reset),eo=async()=>{if(ea&&!et&&ee){ei(!0);try{await $.Z.post(`/api/bans/${ee.id}`,{action:ea,details:es}),await X(),el(),E.ZP.success(`Player ${ea}ed successfully`)}catch(e){E.ZP.error(`Error ${ea} player`)}ei(!1)}},ed=(e,a)=>{switch(a){case"player_name":return s.jsx(W.default,{href:`https://steamcommunity.com/profiles/${e.player_steamid}`,target:"_blank",passHref:!0,children:s.jsx(P.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:e.player_name?.slice(0,10)})});case"status":return V(e.status);case"reason":return e.reason.length>10?s.jsx(g.e,{content:e.reason,"aria-label":"Reason",showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.reason});case"unban_reason":return e.unban_reason&&e.unban_reason.length>10?s.jsx(g.e,{content:e.unban_reason,"aria-label":"Remove Reason",showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.unban_reason?.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.unban_reason});case"duration":return s.jsx(N.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":`${e.duration} minutes`});case"admin_name":return e.admin_name?"Console"===e.admin_name?s.jsx(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):s.jsx(W.default,{href:`https://steamcommunity.com/profiles/${e.admin_steamid}`,target:"_blank",passHref:!0,children:s.jsx(P.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):s.jsx(s.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return s.jsx(N.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNBANNED"===e.status||"EXPIRED"===e.status)return s.jsx(j.W,{color:"success",value:100,"aria-label":"Expired"});let n=new Date,r=new Date(e.created),t=new Date(e.ends),i=Math.round((n.getTime()-r.getTime())/(t.getTime()-r.getTime())*100),l=Math.round((t.getTime()-n.getTime())/6e4),o=i<50?"warning":i>=100?"success":"primary";return l>0?s.jsx(g.e,{content:`${l} minutes left`,color:o,"aria-label":"Time left",showArrow:!0,children:s.jsx(j.W,{color:o,value:i,"aria-label":`${l} minutes left`})}):s.jsx(j.W,{color:o,value:i,"aria-label":"Expired"});case"comment":return e.comment?e.comment.length>10?s.jsx(g.e,{content:e.comment,"aria-label":"Comment",showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)}):s.jsx(s.Fragment,{children:"-"});case"created":return(0,_.Z)(e.created);default:return s.jsx(s.Fragment,{})}},ec=s.jsx(s.Fragment,{});switch(e){case"MANAGE":ec=(0,s.jsxs)(r.J,{children:[s.jsx(t.j,{"aria-label":"Player",children:"Player"},"player_name"),s.jsx(t.j,{"aria-label":"Status",children:"Status"},"status"),s.jsx(t.j,{"aria-label":"Admin",children:"Admin"},"admin_name"),s.jsx(t.j,{"aria-label":"Reason",children:"Reason"},"reason"),s.jsx(t.j,{"aria-label":"Remove Reason",children:"Remove Reason"},"unban_reason"),s.jsx(t.j,{"aria-label":"Date/Time",children:"Date/Time"},"created"),s.jsx(t.j,{"aria-label":"Duration",children:"Duration"},"duration"),s.jsx(t.j,{"aria-label":"Time left",children:"Time left"},"timeLeft"),s.jsx(t.j,{"aria-label":"Comment",children:"Comment"},"comment")]});break;case"SMALL":ec=(0,s.jsxs)(r.J,{children:[s.jsx(t.j,{"aria-label":"Player",children:"Player"},"player_name"),s.jsx(t.j,{"aria-label":"Status",children:"Status"},"status"),s.jsx(t.j,{"aria-label":"Reason",children:"Reason"},"reason"),s.jsx(t.j,{"aria-label":"Duration",children:"Duration"},"duration"),s.jsx(t.j,{"aria-label":"Time left",children:"Time left"},"timeLeft")]});break;case"NORMAL":ec=(0,s.jsxs)(r.J,{children:[s.jsx(t.j,{"aria-label":"Player",children:"Player"},"player_name"),s.jsx(t.j,{"aria-label":"Status",children:"Status"},"status"),s.jsx(t.j,{"aria-label":"Admin",children:"Admin"},"admin_name"),s.jsx(t.j,{"aria-label":"Reason",children:"Reason"},"reason"),s.jsx(t.j,{"aria-label":"Remove Reason",children:"Remove Reason"},"unban_reason"),s.jsx(t.j,{"aria-label":"Date/Time",children:"Date/Time"},"created"),s.jsx(t.j,{"aria-label":"Duration",children:"Duration"},"duration"),s.jsx(t.j,{"aria-label":"Time left",children:"Time left"},"timeLeft")]})}let em=["@web/root","@css/root","@web/bans"],eu=G?.flags?.some(e=>em.includes(e))||!1;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.b,{topContent:(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"text-start",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Bans"}),(0,s.jsxs)("code",{className:"text-sm font-normal",children:["total: ",M?.count||""]})]}),(0,s.jsxs)("div",{className:"flex",children:[s.jsx(g.e,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,"aria-label":"Search",children:s.jsx(w.Y,{label:"Search",labelPlacement:"outside-left",value:I,onValueChange:L,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},"aria-label":"Search",isClearable:!0})}),G&&eu&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>n(!0),"aria-label":"New ban",children:[s.jsx(c.Z,{size:46,"aria-label":"New ban"}),"New ban"]}),s.jsx(F,{open:a,setOpen:n,mutate:X})]})]})]}),bottomContent:(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"flex w-full justify-center",children:s.jsx(b.g,{color:"primary",page:C,total:U,onChange:e=>D(e),"aria-label":"Pagination",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),G&&"MANAGE"===e&&s.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[ec,s.jsx(l.y,{items:M?.results??[],loadingContent:s.jsx(p.c,{"aria-label":"Loading"}),loadingState:Y?"loading":"idle",children:e=>s.jsx(o.g,{onContextMenu:a=>G&&Q&&Q(a,e)||void 0,"aria-label":e.player_name||"",children:a=>s.jsx(d.X,{"aria-label":a.toString(),children:ed(e,a)})},e.id)})]}),G&&s.jsx(A.Z,{open:q,x:J,y:H,handleCloseMenu:K,items:[{category:"Ban Actions",items:[{key:"Comment",description:"Write a comment on this ban, this will be visible to other admins",icon:m.Z,color:"default",onClick:()=>{en("comment"),er({comment:ee?.comment||""})},flags:["@css/root","@web/bans","@web/root"]},{key:ee?.status==="UNBANNED"||ee?.status==="EXPIRED"?"Reban":"Remove Ban (shorten)",description:ee?.status==="UNBANNED"||ee?.status==="EXPIRED"?"Reban the player":"Remove the player ban (shorten the duration)",icon:u.Z,color:"default",onClick:()=>{ee?.status==="UNBANNED"||ee?.status==="EXPIRED"?(en("reban"),er({reason:"",duration:"0"})):(en("unban"),er({reason:""}))},flags:["@css/root","@web/bans","@web/root"]},{key:"Edit Ban",description:"Edit the ban duration or reason",icon:m.Z,color:"primary",onClick:()=>{en("edit"),er({reason:ee?.reason||"",duration:ee?.duration?.toString()||"0"})},flags:["@css/root","@web/bans","@web/root"]},{key:"Delete Ban",description:"Delete the ban from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{en("delete")},flags:["@css/root","@web/bans","@web/root"]}]}]}),G&&(0,s.jsxs)(T.Z,{open:"comment"===ea,handleClose:el,action:eo,isLoading:et,actionText:"Save",children:[s.jsx("div",{children:"Write a comment on this ban, this will be visible to other admins"}),s.jsx(w.Y,{label:"Comment",value:es?.comment||"",onValueChange:e=>er({comment:e}),"aria-label":"Comment"})]}),G&&(0,s.jsxs)(T.Z,{open:"unban"===ea,handleClose:el,action:eo,isLoading:et,actionText:"Unban",children:[s.jsx("div",{children:"You sure you want to unban the user?"}),s.jsx(w.Y,{label:"Reason",value:es?.reason||"",onValueChange:e=>er({reason:e}),"aria-label":"Unban Reason"})]}),G&&(0,s.jsxs)(T.Z,{open:"reban"===ea,handleClose:el,action:eo,isLoading:et,actionText:"Reban",children:[s.jsx("div",{children:"You sure you want to reban the user?"}),s.jsx(w.Y,{label:"Reason",value:es?.reason||"",onValueChange:e=>er({...es,reason:e}),"aria-label":"Ban Reason"}),s.jsx(w.Y,{label:"Time (in minutes)",type:"number",value:es?.duration||"",onValueChange:e=>er({...es,duration:e}),description:"Time in minutes, 0 = Permanent ban","aria-label":"Ban Time"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start again at ",s.jsx("b",{children:(0,_.Z)()})]}),(0,s.jsxs)("span",{children:["the ban will end at"," ",s.jsx("b",{children:es?.duration==="0"?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,_.Z)(new Date().getTime()+6e4*Number(es?.duration))})]})]})]}),G&&(0,s.jsxs)(T.Z,{open:"edit"===ea,handleClose:el,action:eo,isLoading:et,actionText:"Edit",children:[s.jsx("div",{children:"This will replace the ban duration or reason"}),s.jsx(w.Y,{label:"Ban Reason",value:es?.reason||"",onValueChange:e=>er({...es,reason:e}),"aria-label":"Ban Reason"}),s.jsx(w.Y,{label:"Ban Time (in minutes)",type:"number",value:es?.duration||"",onValueChange:e=>er({...es,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent ban (will replace the duration)","aria-label":"Ban Time"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban started at ",s.jsx("b",{children:(0,_.Z)(ee?.created)})]}),(0,s.jsxs)("span",{children:["After the edit, the ban will end at"," ",s.jsx("b",{children:es?.duration==="0"?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,_.Z)(new Date(ee?.created||"").getTime()+6e4*Number(es?.duration))})]})]})]}),G&&s.jsx(T.Z,{open:"delete"===ea,handleClose:el,action:eo,isLoading:et,actionText:"Delete",children:s.jsx("div",{children:"Are you sure you want to delete the ban? this action is permanent and cannot be undone"})})]})}}};