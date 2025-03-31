"use strict";(()=>{var e={};e.id=9204,e.ids=[9204],e.modules={1428:e=>{e.exports=import("axios")},3389:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>u,L:()=>c});var a=t(99545),n=t(19582),o=e([n]);n=(o.then?(await o)():o)[0];let i=async(e,r)=>{if(!n.A)throw Error("Database not connected");try{let t=await n.A.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:o}=t,[i,c]=s.split(":");if(!o)throw Error("Server has no rcon password");let u=await (0,a.RCON)({ip:i,port:Number(c),password:o,enableWarns:!0,retries:2,timeout:2e3});u.authenticate();let l=await u.exec(r);if(!l)return"No response from server";return l}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!n.A)throw Error("Database not connected");let r=await n.A.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await i(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},u=i;s()}catch(e){s(e)}})},3498:e=>{e.exports=require("mysql2/promise")},10788:e=>{e.exports=import("drizzle-orm/mysql-core")},11737:e=>{e.exports=import("drizzle-orm")},18362:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>o});var a=t(42971),n=e([a]);let o=(a=(n.then?(await n)():n)[0]).z.object({weapon_defindex:a.z.number(),weapon_paint_id:a.z.number(),weapon_wear:a.z.number(),weapon_seed:a.z.number()});s()}catch(e){s(e)}})},38218:e=>{e.exports=import("steam-api-sdk")},42971:e=>{e.exports=import("zod")},43580:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>o});var a=t(19582),n=e([a]);a=(n.then?(await n)():n)[0];let o=(e,r)=>new Promise(async(t,s)=>a.A?e.user?void t(e.user):s(r.status(400).json({success:!1,error:"Protected Route"})):r.status(500).json({message:"Database not connected"}));s()}catch(e){s(e)}})},70122:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>p});var a=t(3389),n=t(46958),o=t(43580),i=t(18362),c=t(19582),u=t(93204),l=e([a,n,o,i,c,u]);[a,n,o,i,c,u]=l.then?(await l)():l;let p=async(e,r)=>{if(!c.A)return r.status(500).json({message:"Database not connected"});if(!(await (0,n.iF)("skins")).enabled)return r.status(404).json({message:"Module not found"});await u.A.run(e,r);let{method:t}=e,s=await (0,o.A)(e,r);if(s)switch(t){case"GET":try{let e=s.id,t=await c.A.skins.skins.getBySteamId(e);return r.status(200).json(t)}catch(e){return console.error(e),r.status(500).json({message:"Internal server error"})}case"POST":try{let t=s.id,n=i.A.parse(e.body);return await c.A.skins.skins.setBySteamId({steamid:t,...n}),(0,a.L)(`css_fexec ${s.id} css_wp`),r.status(200).json({message:"Skin set"})}catch(e){return console.error(e),r.status(500).json({message:"Internal server error"})}}};s()}catch(e){s(e)}})},75600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},76404:e=>{e.exports=import("next-connect")},80169:e=>{e.exports=import("chalk")},80546:e=>{e.exports=import("drizzle-orm/mysql2")},85814:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>l,default:()=>u,routeModule:()=>p});var a=t(13088),n=t(57987),o=t(77355),i=t(70122),c=e([i]);i=(c.then?(await c)():c)[0];let u=(0,o.M)(i,"default"),l=(0,o.M)(i,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.A.PAGES_API,page:"/api/skins/skins",pathname:"/api/skins/skins",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},88691:e=>{e.exports=require("cookie-session")},93204:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>l});var a=t(95621),n=t(76404),o=t(88691),i=t.n(o),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,n.default)();u.use(i()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.A.initialize()),u.use(a.A.session());let l=u;s()}catch(e){s(e)}})},95621:(e,r,t)=>{t.d(r,{A:()=>i});let s=require("passport");var a=t.n(s);let n=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),a().use(new n.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let i=a()},99545:e=>{e.exports=require("@fabricio-191/valve-server-query")}};var r=require("../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[937],()=>t(85814));module.exports=s})();