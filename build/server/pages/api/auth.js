"use strict";(()=>{var s={};s.id=2508,s.ids=[2508],s.modules={429:s=>{s.exports=require("cookie-session")},62418:s=>{s.exports=require("mysql2/promise")},20145:s=>{s.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:s=>{s.exports=import("axios")},97564:s=>{s.exports=import("chalk")},97612:s=>{s.exports=import("drizzle-orm")},99089:s=>{s.exports=import("drizzle-orm/mysql-core")},63024:s=>{s.exports=import("drizzle-orm/mysql2")},45616:s=>{s.exports=import("next-connect")},2782:s=>{s.exports=import("steam-api-sdk")},9926:s=>{s.exports=import("zod")},92612:(s,e,r)=>{r.a(s,async(s,t)=>{try{r.r(e),r.d(e,{config:()=>u,default:()=>l,routeModule:()=>p});var a=r(4145),i=r(99019),o=r(37251),n=r(70910),c=s([n]);n=(c.then?(await c)():c)[0];let l=(0,o.l)(n,"default"),u=(0,o.l)(n,"config"),p=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth",pathname:"/api/auth",bundlePath:"",filename:""},userland:n});t()}catch(s){t(s)}})},70910:(s,e,r)=>{r.a(s,async(s,t)=>{try{r.r(e),r.d(e,{default:()=>n});var a=r(36492),i=r(28243),o=s([a,i]);[a,i]=o.then?(await o)():o;let n=async(s,e)=>{await i.Z.run(s,e);let{method:r}=s;if(!a.Z)return e.status(500).json({message:"Database not connected"});let t=["@css/ban","@css/permban","@css/changemap","@css/kick","@css/rcon","@css/root","@css/chat","@css/cheats","@css/config","@css/config","@css/cvar","@css/generic","@css/kick","@css/kick","@css/password","@css/password","@css/rcon","@css/reservation","@css/reservation","@css/root","@css/root","@css/slay","@css/unban","@css/unban","@css/vote","@web/admingroups","@web/admins","@web/bans","@web/logs","@web/mutes","@web/root","@web/servers","@web/stats","@web/rcon",...(await a.Z?.adminFlags.getAll()||[]).map(s=>s.flag)];if("GET"===r)try{if(!s.user)return e.status(401).json({error:"Unauthorized"});let r=s.user.id,i=await a.Z.admins.getBySteam64(r);if(i){if("string"==typeof i.flags&&i.flags.startsWith("#")){let s=await a.Z.adminGroups.getById(i.flags);s&&(i.group=s,t.some(e=>s.flags?.includes(e))||(i.flags=[],i.group=void 0))}else t.some(s=>i.flags?.includes(s))||(i.flags=[],i.group=void 0)}let o=process.env.MASTER_ADMIN===r;return o&&!i&&error("GET /api/auth",`Master admin ${r} not found in database`),e.status(200).json({user:s.user,admin:i,masterAdmin:o})}catch(s){return error("GET /api/auth",s),e.status(400).json({error:"Internal Server Error"})}};t()}catch(s){t(s)}})},28243:(s,e,r)=>{r.a(s,async(s,t)=>{try{r.d(e,{Z:()=>u});var a=r(51284),i=r(45616),o=r(429),n=r.n(o),c=s([i]);i=(c.then?(await c)():c)[0];let l=(0,i.default)();l.use(n()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let u=l;t()}catch(s){t(s)}})},51284:(s,e,r)=>{r.d(e,{Z:()=>n});let t=require("passport");var a=r.n(t);let i=require("passport-steam");a().serializeUser(async(s,e)=>{e(null,s)}),a().deserializeUser(async(s,e)=>{e(null,s)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),a().use(new i.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||""},(s,e,r)=>(e.identifier=s,r(null,e))));let n=a()}};var e=require("../../webpack-api-runtime.js");e.C(s);var r=s=>e(e.s=s),t=e.X(0,[3607],()=>r(92612));module.exports=t})();