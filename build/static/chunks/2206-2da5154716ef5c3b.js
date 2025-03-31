"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2206],{1294:(e,a,s)=>{s.d(a,{A:()=>l});var l=(0,s(83864).A)("shield","IconShield",[["path",{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",key:"svg-0"}]])},2122:(e,a,s)=>{s.d(a,{A:()=>l});var l=(0,s(83864).A)("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]])},6927:(e,a,s)=>{s.d(a,{default:()=>k});var l=s(75819),r=s(38597),t=s(57187),n=s(62989),i=s(43838),o=s(51936),d=s(35182),c=s(93148),u=s(1294),m=s(44918),p=s(2122),h=s(30164),x=s(59384),g=s(19219),f=s(4394),b=s(56027),v=s(34197),j=s(87031),y=s(14738),A=s.n(y),z=s(4452),w=s(19196),C=s(83450),N=s(39920);let k=()=>{let{data:e,isLoading:a,error:s}=(0,z.Ay)("/api/servers",j.A),y=(0,v.A)(e=>e.setModal),k=a||(null==e?void 0:e.length)===0?"loading":"idle",E=e=>y({open:!0,server:e}),T=(0,b.useCallback)((e,a)=>{let{game:s,map:r,maxPlayers:t,players:n,vac:i,address:o,playersPercentage:d,hostname:g}=e,b="number"!=typeof n,v="number"==typeof n?n===t:n.length===t,j=e.serverIp,y=e.address.split(":")[1],z=j?"".concat(j,":").concat(y):e.address;switch(a){case"hostname":return(0,l.jsx)("span",{children:g});case"game":return(0,l.jsx)("span",{children:s});case"map":return(0,l.jsx)("span",{children:r});case"players":return(0,l.jsxs)("span",{children:[b?n.length:n,"/",t]});case"vac":return null!==i&&((0,l.jsx)(x.I,{content:i?"The server is secured by VAC":"Not VAC Secured","aria-label":i?"VAC Secured":"Not VAC Secured",showArrow:!0,children:(0,l.jsx)(c.T,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm","aria-label":i?"VAC Secured":"Not VAC Secured",isIconOnly:!0,children:i?(0,l.jsx)(u.A,{size:20}):(0,l.jsx)(m.A,{})})})||(0,l.jsx)(l.Fragment,{}));case"actions":return(0,l.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,l.jsxs)(c.T,{onClick:()=>{if(v)return f.oR.error("Server is full!");navigator.clipboard.writeText("connect ".concat(o)),f.oR.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[(0,l.jsx)(p.A,{size:16}),o]}),(0,l.jsx)(A(),{href:"steam://connect/".concat(z),passHref:!0,children:(0,l.jsxs)(c.T,{color:"primary",variant:"solid",size:"sm",children:[(0,l.jsx)(h.A,{size:16}),"Connect"]})})]});default:return(0,l.jsx)(l.Fragment,{})}},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.j,{topContent:(0,l.jsxs)("div",{className:"text-start",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Servers"}),(0,l.jsxs)("code",{className:"text-sm font-normal",children:["total: ",(null==e?void 0:e.length)||0]})]}),children:[(0,l.jsxs)(t.X,{children:[(0,l.jsx)(n.e,{children:"Server Name"},"hostname"),(0,l.jsx)(n.e,{children:"Game"},"game"),(0,l.jsx)(n.e,{children:"Map"},"map"),(0,l.jsx)(n.e,{children:"Players"},"players"),(0,l.jsx)(n.e,{children:"VAC"},"vac"),(0,l.jsx)(n.e,{children:"Actions"},"actions")]}),(0,l.jsx)(i.E,{items:e||[],loadingContent:(0,l.jsx)(g.o,{}),loadingState:k,children:s?(0,l.jsx)(o.s,{children:(0,l.jsx)(d.w,{colSpan:6,children:(0,l.jsx)("div",{className:"text-center",children:"Error fetching servers"})})}):e=>(0,l.jsx)(o.s,{className:"cursor-pointer",onClick:()=>E(e),children:a=>(0,l.jsx)(d.w,{children:T(e,a)})},e.address)})]}),(0,l.jsx)(w.default,{}),(0,l.jsx)(C.default,{}),(0,l.jsx)(N.default,{})]})}},19196:(e,a,s)=>{s.d(a,{default:()=>K});var l=s(75819),r=s(38597),t=s(57187),n=s(62989),i=s(43838),o=s(51936),d=s(35182),c=s(46777),u=s(88901),m=s(38245),p=s(88780),h=s(38512),x=s(70175),g=s(86114),f=(0,s(83864).A)("crown","IconCrown",[["path",{d:"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z",key:"svg-0"}]]),b=s(75712),v=s(27580),j=s(93148),y=s(4452),A=s(30589),z=s(34789),w=s(94071),C=s(73332),N=s(32243),k=s(14738),E=s.n(k),T=s(34197),S=s(1542),I=s(50580),D=s(59241),F=s(4394),M=s(73447),L=s(33004),P=s(71837);let B=(0,L.vt)(e=>({action:null,setAction:a=>e({action:a}),isLoading:!1,setIsLoading:a=>e({isLoading:a}),details:null,setDetails:a=>e({details:a}),reset:()=>e({action:null,isLoading:!1,details:null})}));P.z.string(),P.z.object({duration:P.z.number(),reason:P.z.string()}),P.z.object({duration:P.z.number(),reason:P.z.string(),type:M.m});let V=P.z.enum(["kick","ban","mute"]);P.z.object({action:V,userId:P.z.number()});var W=s(93110),R=s(78058),_=s(95889),O=s(56027);let H=(e,a)=>{let[s,l]=(0,O.useState)(1),r=Math.ceil(e.length/a);return{currentItems:e.slice((s-1)*a,s*a),currentPage:s,setCurrentPage:l,maxPages:r}};var U=s(15085);let K=()=>{var e,a,s,k,M;let L=(0,T.A)(e=>e.modal),P=(0,T.A)(e=>e.setModal),V=(0,T.A)(e=>e.setChatModal),O=(0,R.A)(e=>e.handleOpen),K=B(e=>e.action),Z=B(e=>e.setAction),q=B(e=>e.details),X=B(e=>e.setDetails),Y=B(e=>e.isLoading),G=B(e=>e.setIsLoading),$=B(e=>e.reset),J=(0,_.q)(e=>e.modules).find(e=>"player-reports"===e.identifier),Q=(null==J?void 0:J.enabled)||!1,{user:ee,admin:ea}=(0,S.Ay)(),{open:es,server:el}=L,er=()=>P({...L,open:!1}),{currentItems:et,currentPage:en,maxPages:ei,setCurrentPage:eo}=H(el&&"number"!=typeof el.players?el.players:[],7),ed=null==el?void 0:el.serverIp,ec=null==el?void 0:el.address.split(":")[1],eu=ed?"".concat(ed,":").concat(ec):null==el?void 0:el.address,em=async()=>{if(K&&!Y&&el&&q&&eb){G(!0);try{await D.A.post("/api/servers/".concat(el.id,"/action"),{action:K,userId:eb.userId,details:q}),await new Promise(e=>setTimeout(e,4e3));let e=await (0,y.Tk)("/api/servers/".concat(el.id));e&&P({...L,server:e}),F.Ay.success("Player ".concat(K,"ed successfully")),$()}catch(e){F.Ay.error("Error ".concat(K,"ing player"))}G(!1)}},{x:ep,y:eh,open:ex,handleCloseMenu:eg,handleOpen:ef,info:eb}=(0,C.A)(),ev=(e,a)=>{switch(a){case"userId":return(0,l.jsxs)(g.R,{color:"primary",size:"sm",children:["#",e.userId]});case"playerName":return(0,l.jsx)(E(),{href:"https://steamcommunity.com/profiles/".concat(e.steam64),target:"_blank",children:(0,l.jsxs)(x.S,{avatarProps:{radius:"sm",src:e.avatar,size:"sm"},name:e.playerName,classNames:{name:"flex flex-col gap-2"},children:[e.playerName,(0,l.jsx)("span",{children:e.admin?"(Admin)":""})]})});case"steam64":return(0,l.jsx)(E(),{href:"https://steamcommunity.com/profiles/".concat(e.steam64),target:"_blank",className:"underline decoration-blue-500",children:e.steam64});case"kills":return(0,l.jsx)("span",{children:e.kills||0});case"deaths":return(0,l.jsx)("span",{children:e.deaths||0});case"score":return(0,l.jsx)("span",{children:e.score});case"admin":return(0,l.jsx)("span",{children:e.admin?(0,l.jsx)(f,{size:20}):"-"});case"actions":return ee&&ee.id!==e.steam64&&Q&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(j.T,{color:"secondary",size:"sm",onClick:()=>O(el.id,e.steam64),children:"Report"})});default:return(0,l.jsx)(l.Fragment,{})}};return(0,l.jsxs)(c.Y,{size:"4xl",isOpen:es,onOpenChange:()=>{!ex&&(K||er())},children:[(0,l.jsx)(u.g,{children:e=>el&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(m.c,{className:"flex flex-col text-center gap-1",children:[(0,l.jsx)("h2",{children:el.hostname}),(0,l.jsxs)("span",{className:"font-normal text-foreground-700 text-sm",children:[el.map,(0,l.jsx)("br",{}),"number"==typeof el.players?el.players:el.players.length,"/",el.maxPlayers," Players"]})]}),(0,l.jsxs)(p.h,{children:[(0,l.jsxs)(r.j,{bottomContent:ei>1&&(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(U.T,{onChange:eo,total:ei,page:en})}),isStriped:!0,children:[(0,l.jsxs)(t.X,{children:[(0,l.jsx)(n.e,{children:"#"},"userId"),(0,l.jsx)(n.e,{children:"Player"},"playerName"),(0,l.jsx)(n.e,{children:"SteamID"},"steam64"),(0,l.jsx)(n.e,{children:"Kills"},"kills"),(0,l.jsx)(n.e,{children:"Deaths"},"deaths"),(0,l.jsx)(n.e,{children:"Score"},"score"),(0,l.jsx)(n.e,{children:"Admin"},"admin"),(0,l.jsx)(n.e,{children:"Actions"},"actions")]}),(0,l.jsx)(i.E,{items:et,children:e=>(0,l.jsx)(o.s,{onContextMenu:a=>ea&&ef&&ef(a,e)||void 0,children:a=>(0,l.jsx)(d.w,{className:"pb-1 pt-2",children:ev(e,a)})},e.userId)})]}),ea&&(0,l.jsx)("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions, such as kick, ban, and more!"})]}),(0,l.jsxs)(h.q,{children:[ea&&(0,l.jsx)(j.T,{color:"secondary",variant:"flat",onPress:()=>V({open:!0,server:el}),children:"Open Chat"}),(0,l.jsx)(j.T,{color:"danger",variant:"flat",onPress:e,children:"Close"}),(0,l.jsx)(E(),{href:"steam://connect/".concat(eu),passHref:!0,children:(0,l.jsx)(j.T,{color:"primary",children:"Connect"})})]})]})}),ea&&(0,l.jsxs)(I.A,{open:"kick"===K,handleClose:$,action:em,isLoading:Y,actionText:"Kick",children:[(0,l.jsxs)("div",{children:["Are you sure you want to kick ",null==eb?void 0:eb.playerName,"?"]}),(0,l.jsx)(v.r,{placeholder:"Reason",value:q||"",onValueChange:e=>X(e)})]}),ea&&(0,l.jsxs)(I.A,{open:"ban"===K,handleClose:$,action:em,isLoading:Y,actionText:"Ban",children:[(0,l.jsxs)("div",{children:["Are you sure you want to ban ",null==eb?void 0:eb.playerName,"?"]}),(0,l.jsx)(v.r,{placeholder:"Reason",value:(null==q?void 0:q.reason)||"",onValueChange:e=>X({...q,reason:e})}),(0,l.jsx)(v.r,{placeholder:"Time (in minutes)",type:"number",value:(null==q?void 0:null===(e=q.duration)||void 0===e?void 0:e.toString())||"",onValueChange:e=>X({...q,duration:Number(e)}),description:"Time in minutes, 0 = Permanent ban"}),(0,l.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,l.jsxs)("span",{children:["The ban will start at ",(0,l.jsx)("b",{children:(0,W.A)()})]}),(0,l.jsxs)("span",{children:["the ban will end at"," ",(0,l.jsx)("b",{children:(null==q?void 0:null===(a=q.duration)||void 0===a?void 0:a.toString())==="0"?(0,l.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,W.A)(new Date().getTime()+6e4*Number(null==q?void 0:q.duration))})]})]})]}),ea&&(0,l.jsxs)(I.A,{open:"mute"===K,handleClose:$,action:em,isLoading:Y,actionText:"Mute",children:[(0,l.jsxs)("div",{children:["Are you sure you want to mute ",null==eb?void 0:eb.playerName,"?"]}),(0,l.jsx)(v.r,{placeholder:"Reason",value:(null==q?void 0:q.reason)||"",onValueChange:e=>X({...q,reason:e})}),(0,l.jsx)(A.d,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==q?void 0:q.type],onChange:e=>X({...q,type:e.target.value}),disallowEmptySelection:!0,children:w.v.map(e=>(0,l.jsx)(z.y,{value:e.value,children:e.name},e.value))}),(0,l.jsx)(v.r,{placeholder:"Time (in minutes)",type:"number",value:(null==q?void 0:null===(s=q.duration)||void 0===s?void 0:s.toString())||"",onValueChange:e=>X({...q,duration:Number(e)}),description:"Time in minutes, 0 = Permanent mute"}),(0,l.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,l.jsxs)("span",{children:["The mute will start again at ",(0,l.jsx)("b",{children:(0,W.A)()})]}),(0,l.jsxs)("span",{children:["the mute will end at"," ",(0,l.jsx)("b",{children:(null==q?void 0:null===(k=q.duration)||void 0===k?void 0:k.toString())==="0"?(0,l.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,W.A)(new Date().getTime()+6e4*Number(null==q?void 0:q.duration))})]})]})]}),ea&&(0,l.jsx)(N.A,{open:ex,x:ep,y:eh,handleCloseMenu:eg,items:[{category:"Player Actions",items:((null==eb?void 0:null===(M=eb.admin)||void 0===M?void 0:M.immunity)||0)>ea.immunity?[]:[{key:"Kick",description:"Kick the player from the server",icon:b.A,color:"default",onClick:()=>{Z("kick"),X("")},flags:["@web/bans","@web/root"]},{key:"Ban",description:"Ban the player from the server for specific time",icon:b.A,color:"danger",onClick:()=>{Z("ban"),X({duration:0,reason:""})},flags:["@web/bans","@web/root"]},{key:"Mute",description:"Mute the player for specific time",icon:b.A,color:"danger",onClick:()=>{Z("mute"),X({duration:0,reason:"",type:"MUTE"})},flags:["@web/mutes","@web/root"]}]}]})]})}},21759:(e,a,s)=>{s.d(a,{default:()=>N});var l=s(56027),r=s(75819),t=s(2122),n=s(30164),i=(0,s(83864).A)("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]),o=s(1294),d=s(44918),c=s(26331),u=s(77751),m=s(35190),p=s(59384),h=s(19219),x=s(93148),g=s(92506),f=s(77919),b=s(4394),v=s(53001),j=s(34197),y=s(87031),A=s(14738),z=s.n(A),w=s(4452);let C=e=>{let{id:a,hostname:s,address:l}=e,{data:A,isLoading:C,error:N}=(0,w.Ay)("/api/servers/".concat(a),y.A),k=(0,j.A)(e=>e.setModal),{serverIp:E}=A||{},T=l.split(":")[1],S=E?"".concat(E,":").concat(T):l,{imageHosting:I}=(0,v.A)(e=>e.settings);if(C)return(0,r.jsx)(c.Z,{className:"border-none bg-content1",shadow:"sm",onClick:()=>open("steam://connect/".concat(S),"_self"),isBlurred:!0,isPressable:!0,as:"div",children:(0,r.jsx)(u.U,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[(0,r.jsx)("div",{className:"relative col-span-6 md:col-span-4 h-full",children:(0,r.jsx)(g.W,{alt:"de_dust2",className:(0,f.cn)("object-cover h-full bg-center",C?"animate-pulse grayscale-[10]":C),classNames:{wrapper:"h-full"},shadow:"md",src:"https://files.bo3.gg/uploads/news/16425/title_image/960x480-bc5c4f8a10a0b845105bcab657d4bd58.webp",height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,r.jsx)("h3",{className:"font-semibold text-foreground/90",children:s}),(0,r.jsx)("p",{className:"text-small text-foreground/80",children:"Loading..."})]}),(0,r.jsx)(x.T,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm","aria-label":"Loading...",isIconOnly:!0,children:(0,r.jsx)(h.o,{size:"sm"})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[(0,r.jsx)(m.o,{color:"warning",size:"sm","aria-label":"Loading...",isIndeterminate:!0}),(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("p",{className:"text-small",children:"-"})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(x.T,{onClick:()=>{navigator.clipboard.writeText("connect ".concat(l)),b.oR.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[(0,r.jsx)(t.A,{size:16}),l]}),(0,r.jsx)(z(),{href:"steam://connect/".concat(S),passHref:!0,children:(0,r.jsxs)(x.T,{color:"primary",variant:"solid",size:"sm",children:[(0,r.jsx)(n.A,{size:16}),"Connect"]})})]})]})]})})});if(N||!A)return(0,r.jsx)(c.Z,{className:"border-none bg-content1",shadow:"sm",onClick:()=>open("steam://connect/".concat(S),"_self"),isBlurred:!0,as:"div",isPressable:!0,children:(0,r.jsx)(u.U,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[(0,r.jsx)("div",{className:"relative col-span-6 md:col-span-4 h-full",children:(0,r.jsx)(g.W,{alt:"de_dust2",className:"object-cover h-full bg-center grayscale-[10]",classNames:{wrapper:"h-full"},shadow:"md",src:"https://files.bo3.gg/uploads/news/16425/title_image/960x480-bc5c4f8a10a0b845105bcab657d4bd58.webp",height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,r.jsx)("h3",{className:"font-semibold text-foreground/90",children:s}),(0,r.jsx)("p",{className:"text-small text-foreground/80",children:"Failed to load server info"})]}),(0,r.jsx)(x.T,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm","aria-label":"Failed to load server info",isIconOnly:!0,children:(0,r.jsx)(i,{})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[(0,r.jsx)(m.o,{color:"danger",size:"sm","aria-label":"Failed to load server info"}),(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("p",{className:"text-small",children:"-"})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(x.T,{onClick:()=>{navigator.clipboard.writeText("connect ".concat(l)),b.oR.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[(0,r.jsx)(t.A,{size:16}),l]}),(0,r.jsx)(z(),{href:"steam://connect/".concat(S),passHref:!0,children:(0,r.jsxs)(x.T,{color:"primary",variant:"solid",size:"sm",children:[(0,r.jsx)(n.A,{size:16}),"Connect"]})})]})]})]})})});let{game:D,map:F,maxPlayers:M,players:L,vac:P}=A,B=("number"==typeof L?L:L.length)/M*100,V="number"!=typeof L,W="number"==typeof L?L===M:L.length===M;return(0,r.jsx)(c.Z,{className:"border-none bg-content1",shadow:"sm",onClick:V?()=>k({open:!0,server:A}):()=>W?b.oR.error("Server is full!"):open("steam://connect/".concat(S),"_self"),isBlurred:!0,as:"div",isPressable:!0,children:(0,r.jsx)(u.U,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[(0,r.jsx)("div",{className:"relative col-span-6 md:col-span-4 h-full",children:(0,r.jsx)(g.W,{alt:F,className:"object-cover h-full bg-center",classNames:{wrapper:"h-full"},shadow:"md",src:I.includes("{{map}}")?I.replace("{{map}}",F):"https://image.gametracker.com/images/maps/160x120/csgo/".concat(F,".jpg"),height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,r.jsx)("h3",{className:"font-semibold text-foreground/90",children:s}),(0,r.jsx)("p",{className:"text-small text-foreground/80",children:D})]}),null!==P&&(0,r.jsx)(p.I,{content:P?"The server is secured by VAC":"Not VAC Secured","aria-label":P?"VAC Secured":"Not VAC Secured",showArrow:!0,children:(0,r.jsx)(x.T,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm","aria-label":P?"The server is secured by VAC":"Not VAC Secured",isIconOnly:!0,children:P?(0,r.jsx)(o.A,{size:20}):(0,r.jsx)(d.A,{})})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[(0,r.jsx)(m.o,{color:"secondary",value:B,size:"sm","aria-label":"Players"}),(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsxs)("p",{className:"text-small",children:[F," • ",V?L.length:L,"/",M," Players"]})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(x.T,{onClick:()=>{if(W)return b.oR.error("Server is full!");navigator.clipboard.writeText("connect ".concat(l)),b.oR.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[(0,r.jsx)(t.A,{size:16}),l]}),(0,r.jsx)(z(),{href:"steam://connect/".concat(S),passHref:!0,children:(0,r.jsxs)(x.T,{color:"primary",variant:"solid",size:"sm",children:[(0,r.jsx)(n.A,{size:16}),"Connect"]})})]})]})]})})})},N=e=>{let{servers:a,categories:s}=e,r=(0,j.A)(e=>e.tab);return console.log({tab:r}),a.filter(e=>{if("ALL"===r)return!0;let a=s.find(e=>e.id===r);return null!=a&&!!a.servers.includes(e.id.toString())}).map(e=>(0,l.createElement)(C,{...e,key:e.id}))}},23242:(e,a,s)=>{s.d(a,{default:()=>i});var l=s(75819),r=s(74735),t=s(96904),n=s(34197);let i=e=>{let{categories:a}=e,s=(0,n.A)(e=>e.tab),i=(0,n.A)(e=>e.setTab);return console.log({categories:a}),(0,l.jsx)("div",{className:"flex w-full flex-col",children:(0,l.jsxs)(r.r,{"aria-label":"Servers",selectedKey:"number"==typeof s?s.toString():s,onSelectionChange:e=>"ALL"===e?i("ALL"):i(Number(e)),color:"primary",children:[(0,l.jsx)(t.i,{title:"All servers"},"ALL"),a.map(e=>(0,l.jsx)(t.i,{title:e.name},e.id))]})})}},30164:(e,a,s)=>{s.d(a,{A:()=>l});var l=(0,s(83864).A)("player-play","IconPlayerPlay",[["path",{d:"M7 4v16l13 -8z",key:"svg-0"}]])},34197:(e,a,s)=>{s.d(a,{A:()=>l});let l=(0,s(33004).vt)(e=>({modal:{open:!1,server:null},setModal:a=>e({modal:a}),chatModal:{open:!1,server:null},setChatModal:a=>e({chatModal:a}),tab:"ALL",setTab:a=>e({tab:a})}))},38700:(e,a,s)=>{s.d(a,{y:()=>n,A:()=>i});let l={primary:{50:"#e6f1fe",100:"#cce3fd",200:"#99c7fb",300:"#66aaf9",400:"#338ef7",500:"#006FEE",600:"#005bc4",700:"#004493",800:"#002e62",900:"#001731",DEFAULT:"#338ef7"},secondary:{50:"#F2EAFA",100:"#E4D4F4",200:"#C9A9E9",300:"#AE7EDE",400:"#9353D3",500:"#7828C8",600:"#6020A0",700:"#481878",800:"#301050",900:"#180828",DEFAULT:"#7828C8"}},r={primary:{50:"#FEF3D3",100:"#FEE3A7",200:"#FED07B",300:"#FED07B",400:"#FDBC5A",500:"#FC9D24",600:"#D87C1A",700:"#B55F12",800:"#92440B",900:"#783206",DEFAULT:"#FC9D24"},secondary:{50:"#FDF3D7",100:"#FDF3D7",200:"#FCE3B0",300:"#F6CD87",400:"#EEB667",500:"#E49438",600:"#C47428",700:"#A4581C",800:"#843E11",900:"#6D2D0A",DEFAULT:"#E49438"},focus:"#FC9D24"},t={primary:{50:"#127121",100:"#1F8927",200:"#31AA31",300:"#51CB47",400:"#77ED62",500:"#77ED62",600:"#A1F488",700:"#BCF9A1",800:"#D8FDC1",900:"#EEFEE0",DEFAULT:"#77ED62"},secondary:{50:"#05331B",100:"#05331B",200:"#14663C",300:"#14663C",400:"#2E9962",500:"#2E9962",600:"#52CC8D",700:"#52CC8D",800:"#80FFBD",900:"#80FFBD",DEFAULT:"#2E9962"},focus:"#40992E"},n=[{name:"Blue Purple",value:"bluePurple"},{name:"Orange",value:"orange"},{name:"Green",value:"green"}],i={"light-bluePurple-theme":{extend:"light",colors:l,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-bluePurple-theme":{extend:"dark",colors:l,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"light-orange-theme":{extend:"light",colors:r},"dark-orange-theme":{extend:"dark",colors:r},"light-green-theme":{extend:"light",colors:t,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-green-theme":{extend:"dark",colors:t,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}}}},39920:(e,a,s)=>{s.d(a,{default:()=>x});var l=s(75819),r=s(46777),t=s(88901),n=s(38245),i=s(88780),o=s(38512),d=s(51263),c=s(93148),u=s(56027),m=s(78058),p=s(4394),h=s(59241);let x=()=>{let e=(0,m.A)(e=>e.open),a=(0,m.A)(e=>e.serverId),s=(0,m.A)(e=>e.userId),x=(0,m.A)(e=>e.handleClose),[g,f]=(0,u.useState)(""),[b,v]=(0,u.useState)(!1),j=async e=>{if(e.preventDefault(),!b){v(!0);try{await h.A.post("/api/servers/".concat(a,"/report"),{userId:s,reason:g}),p.Ay.success("Thanks! your report sent!"),f(""),x()}catch(e){var l;console.error(e),p.Ay.error((null==e?void 0:null===(l=e.response)||void 0===l?void 0:l.data)||"An error occurred while sending the report."),f(""),x()}v(!1)}};return(0,l.jsx)(r.Y,{size:"2xl",isOpen:e,onClose:x,backdrop:"blur",children:(0,l.jsx)(t.g,{children:e=>(0,l.jsxs)("form",{onSubmit:j,children:[(0,l.jsx)(n.c,{children:"Report Player"}),(0,l.jsxs)(i.h,{children:[(0,l.jsx)("p",{children:"Please provide a valid detailed reason for the report."}),(0,l.jsx)(d.P,{label:"Reason",type:"text",size:"sm",value:g,variant:"flat",onValueChange:e=>f(e),disabled:b})]}),(0,l.jsxs)(o.q,{className:"flex flex-row items-center gap-4",children:[(0,l.jsx)(c.T,{onClick:x,color:"danger",children:"Close"}),(0,l.jsx)(c.T,{type:"submit",isLoading:b,color:"primary",children:"Report"})]})]})})})}},44918:(e,a,s)=>{s.d(a,{A:()=>l});var l=(0,s(83864).A)("shield-x","IconShieldX",[["path",{d:"M13.252 20.601c-.408 .155 -.826 .288 -1.252 .399a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.19 7.357",key:"svg-0"}],["path",{d:"M22 22l-5 -5",key:"svg-1"}],["path",{d:"M17 22l5 -5",key:"svg-2"}]])},53001:(e,a,s)=>{s.d(a,{A:()=>r});var l=s(81216);let r=(0,s(33004).vt)(e=>({settings:(0,l.XH)(),setSettings:a=>e({settings:a})}))},78058:(e,a,s)=>{s.d(a,{A:()=>l});let l=(0,s(33004).vt)(e=>({open:!1,serverId:0,userId:"",handleClose:()=>e({open:!1}),handleOpen:(a,s)=>e({open:!0,serverId:a,userId:s})}))},81216:(e,a,s)=>{s.d(a,{Dd:()=>n,V:()=>o,XH:()=>c});var l=s(38700),r=s(71837);let t=r.z.object({id:r.z.string().optional().default(""),title:r.z.string().default(""),link:r.z.string().default(""),target:r.z.enum(["_blank","_self"]).default("_self"),type:r.z.enum(["LINK","CUSTOM_PAGE"]).default("LINK"),placement:r.z.enum(["HEADER","SIDEBAR"]).default("SIDEBAR"),contentHtml:r.z.string().default("<h1>Title</h1>"),includeBanner:r.z.boolean().default(!0)}),n=r.z.object({id:r.z.string().optional(),title:r.z.string().default("Package #1"),price:r.z.union([r.z.number(),r.z.string()]).default(5),days:r.z.number().default(30),advantages:r.z.array(r.z.string()).default(["Example #1","Example #2"]),group:r.z.string().default("VIP")}),i=r.z.object({pageTitle:r.z.string().optional().default("Buy VIP"),pageDescription:r.z.string().optional().default(""),plans:r.z.array(n).optional().default([])}),o=t.parse({id:Math.random().toString(36).substring(7)}),d=r.z.object({title:r.z.string().optional().default("CSS-Panel"),description:r.z.string().optional().default(""),keywords:r.z.string().optional().default("gaming, cs2"),favicon:r.z.string().optional().default(""),theme:r.z.string().default(l.y[0].value),themeMode:r.z.enum(["light","dark"]).default("light"),logo:r.z.string().optional().default(""),logoHeight:r.z.string().optional().default("40"),debugMode:r.z.boolean().optional().default(!1),headerImage:r.z.string().optional().default("https://prosettings.net/wp-content/uploads/inferno-in-cs2-2.jpg"),headerCodeHTML:r.z.string().optional().default(""),headerCodeCSS:r.z.string().optional().default(""),headerHeight:r.z.string().optional().default("288"),earlyAccessFeatures:r.z.boolean().optional().default(!1),serversGrid:r.z.boolean().optional().default(!0),showAdminName:r.z.boolean().optional().default(!1),language:r.z.string().optional().default("en"),discordWebhook:r.z.string().optional().default(""),discordWebhookName:r.z.string().optional().default("CSS-Panel"),discordWebhookAvatar:r.z.string().optional().default("https://cdn.discordapp.com/icons/1202020941459357776/65f3acf53dd2d06a8e08e8f82276f7ef.webp"),debugDiscordWebhook:r.z.string().optional().default(""),errorsDiscordWebhook:r.z.string().optional().default(""),adminActionsDiscordWebhook:r.z.string().optional().default(""),adminCommandsDiscordWebhook:r.z.string().optional().default(""),customPages:r.z.array(t).optional().default([]),modules:r.z.array(r.z.object({identifier:r.z.string(),enabled:r.z.boolean(),settings:r.z.record(r.z.any()).optional().default({})})).optional().default([]),imageHosting:r.z.string().optional().default(""),paypalClientId:r.z.string().optional().default(""),paypalClientSecret:r.z.string().optional().default(""),paypalLiveMode:r.z.boolean().optional().default(!1),currency:r.z.string().optional().default("USD"),buyVip:i.optional().default(i.parse({}))});d.partial();let c=()=>d.parse({})},83450:(e,a,s)=>{s.d(a,{default:()=>b});var l=s(75819),r=s(46777),t=s(88901),n=s(88780),i=s(38512),o=s(56027),d=s(59384),c=s(93148),u=s(27580),m=s(53001),p=s(34197),h=s(87031),x=s(4394),g=s(59241),f=s(4452);let b=()=>{let e=(0,p.A)(e=>e.chatModal),{open:a,server:s}=e,b=(0,p.A)(e=>e.setChatModal),{imageHosting:v}=(0,m.A)(e=>e.settings),{data:j,isLoading:y,mutate:A}=(0,f.Ay)(a&&(null==s?void 0:s.id)?"/api/servers/".concat(s.id,"/chat"):void 0,h.A,{refreshInterval:2e3}),[z,w]=(0,o.useState)(""),[C,N]=(0,o.useState)(!1),[k,E]=(0,o.useState)(!1),T=async e=>{if(e.preventDefault(),!k&&s){E(!0),w("");try{await g.A.post("/api/servers/".concat(s.id,"/chat"),{message:z,hideName:C}),await A(),x.Ay.success("Message sent!")}catch(e){console.error(e)}E(!1)}},S=(0,o.useRef)(null);return(0,o.useEffect)(()=>{S.current&&S.current.scroll({top:1e3})},[j]),s&&(0,l.jsx)(r.Y,{size:"4xl",isOpen:a,onClose:()=>b({...e,open:!1}),backdrop:"blur",placement:"bottom",classNames:{base:"bg-cover bg-center bg-no-repeat",body:"min-h-[450px] max-h-[450px] overflow-y-scroll py-4 backdrop-filter backdrop-blur-sm relative",footer:"backdrop-filter backdrop-blur-md border-t-2 border-foreground/20"},children:(0,l.jsx)(t.g,{style:{backgroundImage:"url('".concat(v.includes("{{map}}")?v.replace("{{map}}",s.map):"https://image.gametracker.com/images/maps/160x120/csgo/".concat(s.map,".jpg"),"')")},children:e=>s&&(0,l.jsxs)("form",{onSubmit:T,children:[(0,l.jsx)(n.h,{children:(0,l.jsx)("div",{ref:S,children:j&&j.length>0&&j.map(e=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("b",{children:[e.team?"[TEAM] ":"",e.playerName,":"," "]}),e.message]},e.id))})}),(0,l.jsxs)(i.q,{className:"flex flex-row items-center gap-4",children:[(0,l.jsx)(u.r,{label:"Type a message...",type:"text",size:"sm",value:z,variant:"flat",onValueChange:e=>w(e),disabled:k||y}),(0,l.jsx)(d.I,{content:(0,l.jsxs)(l.Fragment,{children:["Hide your name from the message",(0,l.jsx)("br",{}),"Currently: ",C?"Your name is hidden":"Your name is visible"]}),placement:"top","aria-label":"Hide Name",children:(0,l.jsx)(c.T,{variant:"flat",size:"sm",color:"secondary",onClick:()=>{N(!C)},children:C?"Hide Name":"Show Name"})})]})]})})})}},92506:(e,a,s)=>{s.d(a,{W:()=>p});var l=s(56027),r=s(77919),t=(0,s(94997).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),n=s(43999),i=s(92735),o=s(24711),d=s(300),c=s(53804),u=s(75819),m=(0,r.Rf)((e,a)=>{let{Component:s,domRef:m,slots:p,classNames:h,isBlurred:x,isZoomed:g,fallbackSrc:f,removeWrapper:b,disableSkeleton:v,getImgProps:j,getWrapperProps:y,getBlurredImgProps:A}=function(e){let[a,s]=(0,r.rE)(e,t.variantKeys),{ref:u,as:m,src:p,className:h,classNames:x,loading:g,isBlurred:f,fallbackSrc:b,isLoading:v,disableSkeleton:j=!!b,removeWrapper:y=!1,onError:A,onLoad:z,srcSet:w,sizes:C,crossOrigin:N,...k}=a,E=(0,c.l)({src:p,loading:g,onError:A,onLoad:z,ignoreFallback:!1,srcSet:w,sizes:C,crossOrigin:N}),T="loaded"===E&&!v,S="loading"===E||v,I=e.isZoomed,D=(0,n.zD)(u),{w:F}=(0,l.useMemo)(()=>({w:a.width?"number"==typeof a.width?"".concat(a.width,"px"):a.width:"fit-content"}),[null==a?void 0:a.width]),M=(!p||!T)&&!!b,L=S&&!j,P=(0,l.useMemo)(()=>t({...s,showSkeleton:L}),[(0,i.t6)(s),L]),B=(0,o.$)(h,null==x?void 0:x.img),V=(0,l.useCallback)(()=>{let e=M?{backgroundImage:"url(".concat(b,")")}:{};return{className:P.wrapper({class:null==x?void 0:x.wrapper}),style:{...e,maxWidth:F}}},[P,M,b,null==x?void 0:x.wrapper]),W=(0,l.useCallback)(()=>({src:p,"aria-hidden":(0,d.sE)(!0),className:P.blurredImg({class:null==x?void 0:x.blurredImg})}),[P,p,null==x?void 0:x.blurredImg]);return{Component:m||"img",domRef:D,slots:P,classNames:x,isBlurred:f,disableSkeleton:j,fallbackSrc:b,removeWrapper:y,isZoomed:I,isLoading:S,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,o.$)(B,null==e?void 0:e.className);return{src:p,ref:D,"data-loaded":(0,d.sE)(T),className:P.img({class:a}),loading:g,srcSet:w,sizes:C,crossOrigin:N,...k}},getWrapperProps:V,getBlurredImgProps:W}}({...e,ref:a}),z=(0,u.jsx)(s,{ref:m,...j()});if(b)return z;let w=(0,u.jsx)("div",{className:p.zoomedWrapper({class:null==h?void 0:h.zoomedWrapper}),children:z});return x?(0,u.jsxs)("div",{...y(),children:[g?w:z,(0,l.cloneElement)(z,A())]}):g||!v||f?(0,u.jsxs)("div",{...y(),children:[" ",g?w:z]}):z});m.displayName="NextUI.Image";var p=m},95889:(e,a,s)=>{s.d(a,{A:()=>d,q:()=>o});var l=s(75819),r=s(56027),t=s(33004),n=s(87031),i=s(4452);let o=(0,t.vt)(e=>({modules:[],setModules:a=>e(()=>({modules:a,isLoading:!1})),isLoading:!0,setLoading:a=>e(()=>({isLoading:a}))})),d=()=>{let{data:e,isLoading:a}=(0,i.Ay)("/api/modules",n.A),s=o(e=>e.setModules),t=o(e=>e.setLoading);return(0,r.useEffect)(()=>{e&&(s(e),t(!1))},[e,a,s,t]),(0,l.jsx)(l.Fragment,{})}}}]);