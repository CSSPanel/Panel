"use strict";(()=>{var e={};e.id=2361,e.ids=[2361],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},92832:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>m,default:()=>o,routeModule:()=>d});var s=a(88667),n=a(25828),i=a(38051),u=a(90153),l=e([u]);u=(l.then?(await l)():l)[0];let o=(0,i.l)(u,"default"),m=(0,i.l)(u,"config"),d=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/mutes",pathname:"/api/mutes",bundlePath:"",filename:""},userland:u});r()}catch(e){r(e)}})},90153:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>y});var s=a(2782),n=a(6995),i=a(74186),u=a(8909),l=a(77028),o=a(59788),m=a(73153),d=a(54144),c=a(46634),p=e([s,n,i,u,l,o,m,d,c]);[s,n,i,u,l,o,m,d,c]=p.then?(await p)():p;let y=async(e,t)=>{await i.Z.run(e,t);let{method:a}=e;if(!n.Z)return t.status(500).json({message:"Database not connected"});switch(a){case"GET":{let{page:a,rows:r}=u.Z.parse(e.query),s=await (0,l.Z)(e),i=!!await n.Z.settings.getByKey("showAdminName",!1)||!!s,m=await n.Z.mutes.getAll(a,r),d=await n.Z.mutes.count(),c=[...m.map(e=>e.player_steamid),...m.map(e=>e.admin_steamid)].filter(e=>!!e),p=await (0,o.Z)(c),y=(await Promise.all(m.map(async e=>{let{admin_name:t,admin_steamid:a,created:r,duration:n,ends:u,id:l,reason:o,status:m,player_name:d,player_steamid:c,server_id:y,type:f,comment:g,unmute_reason:w}=e;return{admin_name:i?t:null,admin_steamid:i?a:null,admin_avatar:p.find(e=>e.steamid===a)?.avatar||null,created:r,duration:n,ends:u,id:l,reason:o,status:m,player_name:d,player_steamid:c,player_avatar:p.find(e=>e.steamid===c)?.avatar||null,server_id:y,comment:s?g:null,unmute_reason:s?w:null,type:f}}))).filter(e=>!!e);return t.status(200).json({results:y,count:d})}case"POST":try{let a=await (0,m.Z)(e,t);if(!a)return;let{player_steamid:r,reason:i,duration:u,comment:l,type:o}=d.Z.parse(e.body),p=await (0,s.GetSteamUser)(r);if(!p)return t.status(400).send("Invalid player_steamid");let y=new Date,f=new Date(y.getTime()+6e4*Number(u)),g=a.player_name,w=a.player_steamid;return await n.Z.mutes.create({player_name:p.personaname,player_steamid:r,reason:i,duration:Number(u),comment:l,admin_steamid:w,admin_name:g,created:y,ends:f,type:o}),(0,c.Z)("Mute Create",`Admin ${e.user?.displayName} (${e.user?.id}) muted "${p?.personaname}" (${r}) with reason: ${i} and duration: ${u} minutes`,e.user?.id),t.status(201).json({message:"Mute created"})}catch(e){return t.status(400).json({error:e})}}};r()}catch(e){r(e)}})},59788:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(2782),n=e([s]);s=(n.then?(await n)():n)[0];let i=async e=>{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));return t.length&&await (0,s.From64ToUser)(t)||[]};r()}catch(e){r(e)}})},77028:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(6995),n=e([s]);s=(n.then?(await n)():n)[0];let i=async e=>{if(!s.Z||!e.user)return!1;let t=e.user.id;return!!await s.Z.admins.getBySteam64(t)};r()}catch(e){r(e)}})},46634:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>u});var s=a(6995),n=a(899),i=e([s,n]);[s,n]=i.then?(await i)():i;let u=async(e,t,a)=>{if(s.Z)try{s.Z.logs.create(e,t,a);let r=await s.Z.settings.getByKey("discordWebhook",!1);r&&(0,n.Z)({url:r,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};r()}catch(e){r(e)}})},74186:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>m});var s=a(15313),n=a(45616),i=a(429),u=a.n(i),l=e([n]);n=(l.then?(await l)():l)[0];let o=(0,n.default)();o.use(u()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),o.use(s.Z.initialize()),o.use(s.Z.session());let m=o;r()}catch(e){r(e)}})},15313:(e,t,a)=>{a.d(t,{Z:()=>u});let r=require("passport");var s=a.n(r);let n=require("passport-steam");s().serializeUser(async(e,t)=>{t(null,e)}),s().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),s().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,a)=>(t.identifier=e,a(null,t))));let u=s()},73153:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(6995),n=e([s]);s=(n.then?(await n)():n)[0];let i=(e,t,a,r="AND")=>new Promise(async(n,i)=>{if(!s.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let u=e.user.id,l=await s.Z.admins.getBySteam64(u);if(!l)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!a)return n(l);let o=null;if("object"==typeof l.flags)o=l.flags;else{let e=await s.Z.adminGroups.getById(l.flags);e&&(o=e.flags)}if(null===o||!("AND"===r?a.every(e=>o.includes(e)):a.some(e=>o.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(l)});r()}catch(e){r(e)}})},54144:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{P:()=>i,Z:()=>u});var s=a(9926),n=e([s]);let i=(s=(n.then?(await n)():n)[0]).z.enum(["GAG","MUTE","SILENCE"]),u=s.z.object({player_steamid:s.z.string(),reason:s.z.string().min(3),duration:s.z.string(),comment:s.z.string().optional(),type:i});r()}catch(e){r(e)}})},8909:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(9926),n=e([s]);let i=(s=(n.then?(await n)():n)[0]).default.object({page:s.default.string().default("1").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).transform(e=>Number(e)),rows:s.default.string().default("10").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).refine(e=>50>Number(e),{message:"Rows must be less than 50"}).transform(e=>Number(e)),query:s.default.string().optional()});r()}catch(e){r(e)}})}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[6037],()=>a(92832));module.exports=r})();