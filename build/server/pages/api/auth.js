"use strict";(()=>{var e={};e.id=2508,e.ids=[2508],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},53281:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>p,default:()=>l,routeModule:()=>d});var a=r(44614),i=r(49531),n=r(55621),o=r(89789),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,n.l)(o,"default"),p=(0,n.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth",pathname:"/api/auth",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},89789:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>o});var a=r(10474),i=r(73907),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=async(e,t)=>{await a.Z.run(e,t);let{method:r}=e;if(!i.Z)return t.status(500).json({message:"Database not connected"});if("GET"===r)try{if(!e.user)return t.status(401).json({error:"Unauthorized"});let r=e.user.id,s=await i.Z.admins.getBySteam64(r);if(s&&"string"==typeof s.flags&&s.flags.startsWith("#")){let e=await i.Z.adminGroups.getById(s.flags);e&&(s.group=e)}return t.status(200).json({user:e.user,admin:s})}catch(e){return error("GET /api/auth",e),t.status(400).json({error:"Internal Server Error"})}};s()}catch(e){s(e)}})},10474:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>p});var a=r(60276),i=r(45616),n=r(429),o=r.n(n),u=e([i]);i=(u.then?(await u)():u)[0];let l=(0,i.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let p=l;s()}catch(e){s(e)}})},60276:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[2867],()=>r(53281));module.exports=s})();