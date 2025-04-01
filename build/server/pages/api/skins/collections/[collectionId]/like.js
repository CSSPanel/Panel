"use strict";(()=>{var e={};e.id=5434,e.ids=[5434],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},69668:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>u,routeModule:()=>d});var a=s(12521),i=s(73251),o=s(4858),n=s(22116),l=e([n]);n=(l.then?(await l)():l)[0];let u=(0,o.l)(n,"default"),c=(0,o.l)(n,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/skins/collections/[collectionId]/like",pathname:"/api/skins/collections/[collectionId]/like",bundlePath:"",filename:""},userland:n});r()}catch(e){r(e)}})},22116:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>u});var a=s(73101),i=s(72701),o=s(44277),n=s(18724),l=e([a,i,o,n]);[a,i,o,n]=l.then?(await l)():l;let u=async(e,t)=>{if(!o.Z)return t.status(500).json({message:"Database not connected"});if(!(await (0,a.ed)("skins-collections")).enabled)return t.status(404).json({message:"Module not found"});await n.Z.run(e,t);let{method:s}=e,{collectionId:r}=e.query,l=await o.Z.skins.collections.getById(Number(r));if(!l)return t.status(404).json({message:"Collection not found"});if("POST"===s){let s=await (0,i.Z)(e,t);if(!s)return;let a=l.likes,n=a.includes(s.id)?a.filter(e=>e!==s.id):[...a,s.id];return await o.Z.skins.collections.updateLikes(Number(r),n),t.status(200).json({likes:n})}};r()}catch(e){r(e)}})},18724:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>c});var a=s(79326),i=s(45616),o=s(429),n=s.n(o),l=e([i]);i=(l.then?(await l)():l)[0];let u=(0,i.default)();u.use(n()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let c=u;r()}catch(e){r(e)}})},79326:(e,t,s)=>{s.d(t,{Z:()=>n});let r=require("passport");var a=s.n(r);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),a().use(new i.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let n=a()},72701:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>o});var a=s(44277),i=e([a]);a=(i.then?(await i)():i)[0];let o=(e,t)=>new Promise(async(s,r)=>a.Z?e.user?void s(e.user):r(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));r()}catch(e){r(e)}})}};var t=require("../../../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[9477],()=>s(69668));module.exports=r})();