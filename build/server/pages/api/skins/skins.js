"use strict";(()=>{var e={};e.id=6106,e.ids=[6106],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},7157:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>l,default:()=>u,routeModule:()=>p});var a=t(44614),n=t(49531),o=t(55621),i=t(98294),c=e([i]);i=(c.then?(await c)():c)[0];let u=(0,o.l)(i,"default"),l=(0,o.l)(i,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/skins/skins",pathname:"/api/skins/skins",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},98294:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>p});var a=t(22567),n=t(18391),o=t(88022),i=t(52497),c=t(73907),u=t(10474),l=e([a,o,i,c,u]);[a,o,i,c,u]=l.then?(await l)():l;let p=async(e,r)=>{if(!c.Z)return r.status(500).json({message:"Database not connected"});if(!(0,n.e)("skins"))return r.status(404).json({message:"Module not found"});await u.Z.run(e,r);let{method:t}=e,s=await (0,o.Z)(e,r);if(s)switch(t){case"GET":try{let e=s.id,t=await c.Z.skins.skins.getBySteamId(e);return r.status(200).json(t)}catch(e){return console.error(e),r.status(500).json({message:"Internal server error"})}case"POST":try{let t=s.id,n=i.Z.parse(e.body);return await c.Z.skins.skins.setBySteamId({steamid:t,...n}),(0,a.x)(`css_fexec ${s.id} css_wp`),r.status(200).json({message:"Skin set"})}catch(e){return console.error(e),r.status(500).json({message:"Internal server error"})}}};s()}catch(e){s(e)}})},22567:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>u,x:()=>c});var a=t(43582),n=t(73907),o=e([n]);n=(o.then?(await o)():o)[0];let i=async(e,r)=>{if(!n.Z)throw Error("Database not connected");try{let t=await n.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:o}=t,[i,c]=s.split(":");if(!o)throw Error("Server has no rcon password");let u=await (0,a.RCON)({ip:i,port:Number(c),password:o,enableWarns:!0,retries:2,timeout:2e3});u.authenticate();let l=await u.exec(r);if(!l)return"No response from server";return l}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!n.Z)throw Error("Database not connected");let r=await n.Z.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await i(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},u=i;s()}catch(e){s(e)}})},18391:(e,r,t)=>{t.d(r,{e:()=>a,g:()=>s});let s=e=>!!process.env.MODULES&&process.env.MODULES.split(",").includes(e),a=e=>s(e)&&!!process.env.MODULES_ENABLED&&process.env.MODULES_ENABLED.split(",").includes(e)},10474:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>l});var a=t(60276),n=t(45616),o=t(429),i=t.n(o),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,n.default)();u.use(i()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let l=u;s()}catch(e){s(e)}})},60276:(e,r,t)=>{t.d(r,{Z:()=>i});let s=require("passport");var a=t.n(s);let n=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),a().use(new n.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let i=a()},88022:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>o});var a=t(73907),n=e([a]);a=(n.then?(await n)():n)[0];let o=(e,r)=>new Promise(async(t,s)=>a.Z?e.user?void t(e.user):s(r.status(400).json({success:!1,error:"Protected Route"})):r.status(500).json({message:"Database not connected"}));s()}catch(e){s(e)}})},52497:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>o});var a=t(9926),n=e([a]);let o=(a=(n.then?(await n)():n)[0]).z.object({weapon_defindex:a.z.number(),weapon_paint_id:a.z.number(),weapon_wear:a.z.number(),weapon_seed:a.z.number()});s()}catch(e){s(e)}})}};var r=require("../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[2867],()=>t(7157));module.exports=s})();