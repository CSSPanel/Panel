"use strict";(()=>{var e={};e.id=4354,e.ids=[4354],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},66912:e=>{e.exports=import("zustand")},2851:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>u,routeModule:()=>d});var a=r(4145),i=r(99019),n=r(37251),o=r(85885),c=e([o]);o=(c.then?(await c)():c)[0];let u=(0,n.l)(o,"default"),l=(0,n.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/servers/[serverId]/action",pathname:"/api/servers/[serverId]/action",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},74757:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Ae:()=>l,ZT:()=>p,f$:()=>u,nm:()=>c});var a=r(58979),i=r(66912),n=r(9926),o=e([a,i,n]);[a,i,n]=o.then?(await o)():o,(0,i.create)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));let c=n.z.string(),u=n.z.object({duration:n.z.number(),reason:n.z.string()}),l=n.z.object({duration:n.z.number(),reason:n.z.string(),type:a.P}),d=n.z.enum(["kick","ban","mute"]),p=n.z.object({action:d,userId:n.z.number()});s()}catch(e){s(e)}})},85885:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d});var a=r(43582),i=r(90901),n=r(36492),o=r(28243),c=r(74757),u=r(95591),l=e([i,n,o,c,u]);[i,n,o,c,u]=l.then?(await l)():l;let d=async(e,t)=>{await o.Z.run(e,t);let{method:r}=e;if(await (0,i.Z)(e,t)){if(!n.Z)return t.status(500).json({message:"Database not connected"});if("POST"===r)try{let{serverId:r}=e.query,s=await n.Z.servers.getById(Number(r));if(!s)return t.status(404).json({error:"Server not found"});let{address:i,rcon:o}=s,{action:l,userId:d}=c.ZT.parse(e.body),p=e.body.details;if(!p)return t.status(400).json({error:"Details not set"});if(!o)return t.status(500).json({error:"RCON not set"});let[m,y]=i.split(":"),f=await (0,a.RCON)({ip:m,port:Number(y),password:o});switch(f.authenticate(),l){case"kick":{let e=c.nm.parse(p);await f.exec(`css_kick #${d} ${e}`);break}case"ban":{let{reason:e,duration:t}=c.f$.parse(p);await f.exec(`css_ban #${d} ${t} ${e}`);break}case"mute":{let{reason:e,duration:t,type:r}=c.Ae.parse(p),s=`css_${r.toLowerCase()}`;await f.exec(`${s} #${d} ${t} ${e}`)}}return(0,u.Z)("Server Action",`Admin ${e.user?.displayName} (${e.user?.id}) performed action '${l}' on player ${d} on server #${r}`,e.user?.id,"adminCommandsDiscordWebhook"),t.status(200).send("Message sent")}catch(e){return t.status(500).json({error:e})}}};s()}catch(e){s(e)}})},95591:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>o});var a=r(36492),i=r(47271),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=async(e,t,r,s="discordWebhook")=>{if(a.Z)try{a.Z.logs.create(e,t,r);let n=await a.Z.settings.getByKey(s,!1);n&&"string"==typeof n&&(0,i.Z)({url:n,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},28243:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>l});var a=r(51284),i=r(45616),n=r(429),o=r.n(n),c=e([i]);i=(c.then?(await c)():c)[0];let u=(0,i.default)();u.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let l=u;s()}catch(e){s(e)}})},51284:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()},90901:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>n});var a=r(36492),i=e([a]);a=(i.then?(await i)():i)[0];let n=(e,t,r,s="AND")=>new Promise(async(i,n)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return n(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,c=await a.Z.admins.getBySteam64(o);if(!c)return n(t.status(401).json({success:!1,error:"Protected Route"}));if(!r)return i(c);let u=null;if("object"==typeof c.flags)u=c.flags;else{let e=await a.Z.adminGroups.getById(c.flags);e&&(u=e.flags)}if(null===u||!("AND"===s?r.every(e=>u.includes(e)):r.some(e=>u.includes(e))))return n(t.status(403).json({success:!1,error:"Protected Route"}));i(c)});s()}catch(e){s(e)}})},58979:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{P:()=>n,Z:()=>o});var a=r(9926),i=e([a]);let n=(a=(i.then?(await i)():i)[0]).z.enum(["GAG","MUTE","SILENCE"]),o=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:n});s()}catch(e){s(e)}})}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[3275],()=>r(2851));module.exports=s})();