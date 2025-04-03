"use strict";(()=>{var e={};e.id=2361,e.ids=[2361],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},46698:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>m,default:()=>u,routeModule:()=>d});var s=a(4145),i=a(99019),n=a(37251),l=a(83637),o=e([l]);l=(o.then?(await o)():o)[0];let u=(0,n.l)(l,"default"),m=(0,n.l)(l,"config"),d=new s.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/mutes",pathname:"/api/mutes",bundlePath:"",filename:""},userland:l});r()}catch(e){r(e)}})},83637:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>y});var s=a(2782),i=a(36492),n=a(28243),l=a(51951),o=a(79289),u=a(18470),m=a(90901),d=a(58979),c=a(95591),p=e([s,i,n,l,o,u,m,d,c]);[s,i,n,l,o,u,m,d,c]=p.then?(await p)():p;let y=async(e,t)=>{await n.Z.run(e,t);let{method:a}=e;if(!i.Z)return t.status(500).json({message:"Database not connected"});switch(a){case"GET":{let{page:a,rows:r,query:s}=l.Z.parse(e.query),n=await (0,o.Z)(e),m=!!await i.Z.settings.getByKey("showAdminName",!1)||!!n,d=await i.Z.mutes.getAll(a,r,s),c=await i.Z.mutes.count(),p=[...d.map(e=>e.player_steamid),...d.map(e=>e.admin_steamid)].filter(e=>!!e),y=await (0,u.Z)(p),f=(await Promise.all(d.map(async e=>{let{admin_name:t,admin_steamid:a,created:r,duration:s,ends:i,id:l,reason:o,status:u,player_name:d,player_steamid:c,server_id:p,type:f,comment:g,unmute_reason:h}=e;return{admin_name:m?t:null,admin_steamid:m?a:null,admin_avatar:y.find(e=>e.steamid===a)?.avatar||null,created:r,duration:s,ends:i,id:l,reason:o,status:u,player_name:d,player_steamid:c,player_avatar:y.find(e=>e.steamid===c)?.avatar||null,server_id:p,comment:n?g:null,unmute_reason:n?h:null,type:f}}))).filter(e=>!!e);return t.status(200).json({results:f,count:c})}case"POST":try{let a=await (0,m.Z)(e,t);if(!a)return;let{player_steamid:r,reason:n,duration:l,comment:o,type:u}=d.Z.parse(e.body),p=await (0,s.GetSteamUser)(r);if(!p)return t.status(400).send("Invalid player_steamid");let y=new Date,f=new Date(y.getTime()+6e4*Number(l)),g=a.player_name,h=a.player_steamid;return await i.Z.mutes.create({player_name:p.personaname,player_steamid:r,reason:n,duration:Number(l),comment:o,admin_steamid:h,admin_name:g,created:y,ends:f,type:u}),(0,c.Z)("Mute Create",`Admin ${e.user?.displayName} (${e.user?.id}) muted "${p?.personaname}" (${r}) with reason: ${n} and duration: ${l} minutes`,e.user?.id,"adminCommandsDiscordWebhook"),t.status(201).json({message:"Mute created"})}catch(e){return t.status(400).json({error:e})}}};r()}catch(e){r(e)}})},18470:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>l});var s=a(2782),i=e([s]);s=(i.then?(await i)():i)[0];let n=new Map,l=async e=>{try{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));if(!t.length)return[];let a=t.filter(e=>n.has(e)),r=t.filter(e=>!n.has(e)),i=a.map(e=>n.get(e)).filter(e=>void 0!==e)||[],l=[];return r.length>0&&(l=await (0,s.From64ToUser)(r,1e3)||[]).forEach(e=>n.set(e.steamid,e)),[...i,...l]}catch(e){return error(`Failed to get steam users ${e}`),[]}};r()}catch(e){r(e)}})},79289:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>n});var s=a(36492),i=e([s]);s=(i.then?(await i)():i)[0];let n=async e=>{if(!s.Z||!e.user)return!1;let t=e.user.id;return!!await s.Z.admins.getBySteam64(t)};r()}catch(e){r(e)}})},95591:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>l});var s=a(36492),i=a(47271),n=e([s,i]);[s,i]=n.then?(await n)():n;let l=async(e,t,a,r="discordWebhook")=>{if(s.Z)try{s.Z.logs.create(e,t,a);let n=await s.Z.settings.getByKey(r,!1);n&&"string"==typeof n&&(0,i.Z)({url:n,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};r()}catch(e){r(e)}})},28243:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>m});var s=a(51284),i=a(45616),n=a(429),l=a.n(n),o=e([i]);i=(o.then?(await o)():o)[0];let u=(0,i.default)();u.use(l()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(s.Z.initialize()),u.use(s.Z.session());let m=u;r()}catch(e){r(e)}})},51284:(e,t,a)=>{a.d(t,{Z:()=>l});let r=require("passport");var s=a.n(r);let i=require("passport-steam");s().serializeUser(async(e,t)=>{t(null,e)}),s().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),s().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,a)=>(t.identifier=e,a(null,t))));let l=s()},90901:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>n});var s=a(36492),i=e([s]);s=(i.then?(await i)():i)[0];let n=(e,t,a,r="AND")=>new Promise(async(i,n)=>{if(!s.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return n(t.status(400).json({success:!1,error:"Protected Route"}));let l=e.user.id,o=await s.Z.admins.getBySteam64(l);if(!o)return n(t.status(401).json({success:!1,error:"Protected Route"}));if(!a)return i(o);let u=null;if("object"==typeof o.flags)u=o.flags;else{let e=await s.Z.adminGroups.getById(o.flags);e&&(u=e.flags)}if(null===u||!("AND"===r?a.every(e=>u.includes(e)):a.some(e=>u.includes(e))))return n(t.status(403).json({success:!1,error:"Protected Route"}));i(o)});r()}catch(e){r(e)}})},58979:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{P:()=>n,Z:()=>l});var s=a(9926),i=e([s]);let n=(s=(i.then?(await i)():i)[0]).z.enum(["GAG","MUTE","SILENCE"]),l=s.z.object({player_steamid:s.z.string(),reason:s.z.string().min(3),duration:s.z.string(),comment:s.z.string().optional(),type:n});r()}catch(e){r(e)}})},51951:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>n});var s=a(9926),i=e([s]);let n=(s=(i.then?(await i)():i)[0]).default.object({page:s.default.string().default("1").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).transform(e=>Number(e)),rows:s.default.string().default("10").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).refine(e=>50>Number(e),{message:"Rows must be less than 50"}).transform(e=>Number(e)),query:s.default.string().optional()});r()}catch(e){r(e)}})}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[3607],()=>a(46698));module.exports=r})();