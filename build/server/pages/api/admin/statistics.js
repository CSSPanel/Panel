"use strict";(()=>{var e={};e.id=1070,e.ids=[1070],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},96915:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>c,default:()=>l,routeModule:()=>p});var a=r(12521),n=r(73251),i=r(4858),o=r(16116),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,i.l)(o,"default"),c=(0,i.l)(o,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/statistics",pathname:"/api/admin/statistics",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},13609:(e,t,r)=>{r.d(t,{Z:()=>s});let s=e=>{let t=new Date,r=[];for(let s=0;s<e;s++){let e=new Date(t.getTime()-864e5*s).toISOString().slice(0,10);r.push(e)}return r.reverse()}},16116:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>c});var a=r(13609),n=r(35160),i=r(15985),o=r(44277),u=r(18724),l=e([n,i,o,u]);[n,i,o,u]=l.then?(await l)():l;let c=async(e,t)=>{if(await u.Z.run(e,t),!await (0,n.Z)(e,t,["@web/root","@web/logs","@css/root","@web/stats"],"OR"))return;let{method:r}=e;if(!o.Z)return t.status(500).json({message:"Database not connected"});if("GET"===r){let{days:r,servers:s}=i.Z.parse(e.query),n="ALL"===s?await o.Z.statistics.getEntriesByDays(Number(r)):await o.Z.statistics.getEntriesByServersAndDays(s.split(",").map(e=>Number(e)),Number(r)),u=(0,a.Z)(parseInt(r)).map(e=>{let t=n.filter(t=>new Date(t.connectDate).toDateString()===new Date(e).toDateString());return t?{date:e,number:t.length}:{date:e,number:0}}),l=(0,a.Z)(parseInt(r)).map(e=>{let t=n.filter(t=>new Date(t.connectDate).toDateString()===new Date(e).toDateString()),r=new Set(t.map(e=>e.playerId));return t?{date:e,number:r.size}:{date:e,number:0}});return t.status(200).json({servers:u,serversUnique:l})}};s()}catch(e){s(e)}})},18724:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>c});var a=r(79326),n=r(45616),i=r(429),o=r.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let l=(0,n.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let c=l;s()}catch(e){s(e)}})},79326:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()},35160:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(44277),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,r,s="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await a.Z.admins.getBySteam64(o);if(!u)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!r)return n(u);let l=null;if("object"==typeof u.flags)l=u.flags;else{let e=await a.Z.adminGroups.getById(u.flags);e&&(l=e.flags)}if(null===l||!("AND"===s?r.every(e=>l.includes(e)):r.some(e=>l.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(u)});s()}catch(e){s(e)}})},15985:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(9926),n=e([a]);let i=(a=(n.then?(await n)():n)[0]).default.object({days:a.default.string().default("3").refine(e=>Number(e)>0&&365>Number(e),{message:"Days must be greater than 0 and less than 365"}),servers:a.default.string().default("ALL")});s()}catch(e){s(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[9477],()=>r(96915));module.exports=s})();