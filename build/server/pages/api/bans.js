"use strict";(()=>{var e={};e.id=9074,e.ids=[9074],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},16034:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>d,default:()=>u,routeModule:()=>m});var s=a(4145),n=a(99019),i=a(37251),l=a(13075),o=e([l]);l=(o.then?(await o)():o)[0];let u=(0,i.l)(l,"default"),d=(0,i.l)(l,"config"),m=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/bans",pathname:"/api/bans",bundlePath:"",filename:""},userland:l});r()}catch(e){r(e)}})},13075:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>y});var s=a(2782),n=a(36492),i=a(28243),l=a(51951),o=a(79289),u=a(18470),d=a(90901),m=a(93095),c=a(95591),p=e([s,n,i,l,o,u,d,m,c]);[s,n,i,l,o,u,d,m,c]=p.then?(await p)():p;let y=async(e,t)=>{await i.Z.run(e,t);let{method:a}=e;if(!n.Z)return t.status(500).json({message:"Database not connected"});switch(a){case"GET":{let{page:a,rows:r,query:s}=l.Z.parse(e.query),i=await (0,o.Z)(e),d=!!await n.Z.settings.getByKey("showAdminName",!1)||!!i,m=await n.Z.bans.getAll(a,r,s),c=await n.Z.bans.count(),p=[...m.map(e=>e.player_steamid),...m.map(e=>e.admin_steamid)].filter(e=>!!e),y=await (0,u.Z)(p),f=(await Promise.all(m.map(async e=>{let{admin_name:t,admin_steamid:a,created:r,duration:s,ends:n,id:l,reason:o,status:u,player_name:m,player_steamid:c,server_id:p,comment:f,unban_reason:g,player_ip:h}=e;return{admin_name:d?t:null,admin_steamid:d?a:null,admin_avatar:y.find(e=>e.steamid===a)?.avatar||null,created:r,duration:s,ends:n,id:l,reason:o,status:u,player_name:m,player_steamid:c,player_avatar:y.find(e=>e.steamid===c)?.avatar||null,server_id:p,comment:i?f:null,unban_reason:i?g:null,player_ip:i?h:null}}))).filter(e=>!!e);return t.status(200).json({results:f,count:c})}case"POST":try{let a=await (0,d.Z)(e,t);if(!a)return;let{player_steamid:r,player_ip:i,reason:l,duration:o,comment:u}=m.Z.parse(e.body),p=null;if(r&&!(p=await (0,s.GetSteamUser)(r)))return t.status(400).send("Invalid player_steamid");let y=new Date,f=new Date(y.getTime()+6e4*Number(o)),g=a.player_name,h=a.player_steamid;return await n.Z.bans.create({player_name:p?p.personaname:null,player_steamid:p?p.steamid:null,player_ip:i||null,reason:l,duration:Number(o),comment:u,admin_steamid:h,admin_name:g,created:y,ends:f}),(0,c.Z)("Ban Create",`Admin ${e.user?.displayName} (${e.user?.id}) banned "${p?.personaname}" (${r}) with reason: ${l} and duration: ${o} minutes`,e.user?.id,"adminCommandsDiscordWebhook"),t.status(201).json({message:"Ban created"})}catch(e){return t.status(400).json({error:e})}}};r()}catch(e){r(e)}})},18470:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>l});var s=a(2782),n=e([s]);s=(n.then?(await n)():n)[0];let i=new Map,l=async e=>{try{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));if(!t.length)return[];let a=t.filter(e=>i.has(e)),r=t.filter(e=>!i.has(e)),n=a.map(e=>i.get(e)).filter(e=>void 0!==e)||[],l=[];return r.length>0&&(l=await (0,s.From64ToUser)(r,1e3)||[]).forEach(e=>i.set(e.steamid,e)),[...n,...l]}catch(e){return error(`Failed to get steam users ${e}`),[]}};r()}catch(e){r(e)}})},79289:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(36492),n=e([s]);s=(n.then?(await n)():n)[0];let i=async e=>{if(!s.Z||!e.user)return!1;let t=e.user.id;return!!await s.Z.admins.getBySteam64(t)};r()}catch(e){r(e)}})},95591:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>l});var s=a(36492),n=a(47271),i=e([s,n]);[s,n]=i.then?(await i)():i;let l=async(e,t,a,r="discordWebhook")=>{if(s.Z)try{s.Z.logs.create(e,t,a);let i=await s.Z.settings.getByKey(r,!1);i&&"string"==typeof i&&(0,n.Z)({url:i,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};r()}catch(e){r(e)}})},28243:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>d});var s=a(51284),n=a(45616),i=a(429),l=a.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let u=(0,n.default)();u.use(l()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(s.Z.initialize()),u.use(s.Z.session());let d=u;r()}catch(e){r(e)}})},51284:(e,t,a)=>{a.d(t,{Z:()=>l});let r=require("passport");var s=a.n(r);let n=require("passport-steam");s().serializeUser(async(e,t)=>{t(null,e)}),s().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),s().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,a)=>(t.identifier=e,a(null,t))));let l=s()},90901:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(36492),n=e([s]);s=(n.then?(await n)():n)[0];let i=(e,t,a,r="AND")=>new Promise(async(n,i)=>{if(!s.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let l=e.user.id,o=await s.Z.admins.getBySteam64(l);if(!o)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!a)return n(o);let u=null;if("object"==typeof o.flags)u=o.flags;else{let e=await s.Z.adminGroups.getById(o.flags);e&&(u=e.flags)}if(null===u||!("AND"===r?a.every(e=>u.includes(e)):a.some(e=>u.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(o)});r()}catch(e){r(e)}})},93095:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(9926),n=e([s]);let i=(s=(n.then?(await n)():n)[0]).z.object({player_steamid:s.z.string().optional(),player_ip:s.z.string().optional(),reason:s.z.string().min(3),duration:s.z.string(),comment:s.z.string().optional()});r()}catch(e){r(e)}})},51951:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>i});var s=a(9926),n=e([s]);let i=(s=(n.then?(await n)():n)[0]).default.object({page:s.default.string().default("1").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).transform(e=>Number(e)),rows:s.default.string().default("10").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).refine(e=>50>Number(e),{message:"Rows must be less than 50"}).transform(e=>Number(e)),query:s.default.string().optional()});r()}catch(e){r(e)}})}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[3607],()=>a(16034));module.exports=r})();