"use strict";(()=>{var e={};e.id=2850,e.ids=[2850],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},6004:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>l,default:()=>u,routeModule:()=>d});var a=t(54396),n=t(76255),o=t(39766),i=t(46608),c=e([i]);i=(c.then?(await c)():c)[0];let u=(0,o.l)(i,"default"),l=(0,o.l)(i,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/skins/knives",pathname:"/api/skins/knives",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},46608:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>d});var a=t(52999),n=t(17077),o=t(24389),i=t(64872),c=t(96610),u=t(93066),l=e([a,n,o,i,c,u]);[a,n,o,i,c,u]=l.then?(await l)():l;let d=async(e,r)=>{if(!c.Z)return r.status(500).json({message:"Database not connected"});if(!(await (0,n.ed)("skins")).enabled)return r.status(404).json({message:"Module not found"});await u.Z.run(e,r);let{method:t}=e,s=await (0,o.Z)(e,r);if(s)switch(t){case"GET":try{let e=s.id,t=await c.Z.skins.knife.getBySteamId(e);return r.status(200).json(t)}catch(e){return console.error(e),r.status(500).json({message:"Internal server error"})}case"POST":try{let t=s.id,n=i.Z.parse(e.body);return await c.Z.skins.knife.setBySteamId({steamid:t,...n}),await (0,a.x)(`css_fexec ${s.id} css_wp`),r.status(200).json({message:"Knife set"})}catch(e){return console.error(e),r.status(500).json({message:"Internal server error"})}}};s()}catch(e){s(e)}})},52999:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>u,x:()=>c});var a=t(43582),n=t(96610),o=e([n]);n=(o.then?(await o)():o)[0];let i=async(e,r)=>{if(!n.Z)throw Error("Database not connected");try{let t=await n.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:o}=t,[i,c]=s.split(":");if(!o)throw Error("Server has no rcon password");let u=await (0,a.RCON)({ip:i,port:Number(c),password:o,enableWarns:!0,retries:2,timeout:2e3});u.authenticate();let l=await u.exec(r);if(!l)return"No response from server";return l}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!n.Z)throw Error("Database not connected");let r=await n.Z.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await i(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},u=i;s()}catch(e){s(e)}})},93066:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>l});var a=t(79809),n=t(45616),o=t(429),i=t.n(o),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,n.default)();u.use(i()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let l=u;s()}catch(e){s(e)}})},79809:(e,r,t)=>{t.d(r,{Z:()=>i});let s=require("passport");var a=t.n(s);let n=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),a().use(new n.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let i=a()},24389:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>o});var a=t(96610),n=e([a]);a=(n.then?(await n)():n)[0];let o=(e,r)=>new Promise(async(t,s)=>a.Z?e.user?void t(e.user):s(r.status(400).json({success:!1,error:"Protected Route"})):r.status(500).json({message:"Database not connected"}));s()}catch(e){s(e)}})},64872:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>o});var a=t(9926),n=e([a]);let o=(a=(n.then?(await n)():n)[0]).z.object({weapon_defindex:a.z.number(),weapon_paint_id:a.z.number(),weapon_wear:a.z.number(),weapon_seed:a.z.number()});s()}catch(e){s(e)}})}};var r=require("../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[9585],()=>t(6004));module.exports=s})();