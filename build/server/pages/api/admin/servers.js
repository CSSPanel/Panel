"use strict";(()=>{var e={};e.id=514,e.ids=[514],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},98795:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>u,default:()=>l,routeModule:()=>d});var a=s(44614),i=s(49531),n=s(55621),o=s(86038),c=e([o]);o=(c.then?(await c)():c)[0];let l=(0,n.l)(o,"default"),u=(0,n.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/admin/servers",pathname:"/api/admin/servers",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},86038:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>u});var a=s(73907),i=s(10474),n=s(91415),o=s(26993),c=s(5584),l=e([a,i,n,o,c]);[a,i,n,o,c]=l.then?(await l)():l;let u=async(e,t)=>{await i.Z.run(e,t);let{method:s}=e;if(await (0,o.Z)(e,t,["@web/root","@web/servers","@css/root"],"OR")){if(!a.Z)return t.status(500).json({message:"Database not connected"});switch(s){case"GET":{let e=await a.Z.servers.getAll();return t.status(200).json(e)}case"POST":{let{hostname:s,address:r,rcon:i}=n.Z.parse(e.body);return await a.Z.servers.create({hostname:s,address:r,rcon:i}),(0,c.Z)("Server Create",`Admin ${e.user?.displayName} (${e.user?.id}) created server: ${s}`,e.user?.id),t.status(201).send("Server created")}default:return t.status(405).json({message:"Method not allowed"})}}};r()}catch(e){r(e)}})},5584:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>o});var a=s(73907),i=s(72985),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=async(e,t,s)=>{if(a.Z)try{a.Z.logs.create(e,t,s);let r=await a.Z.settings.getByKey("discordWebhook",!1);r&&(0,i.Z)({url:r,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};r()}catch(e){r(e)}})},10474:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>u});var a=s(60276),i=s(45616),n=s(429),o=s.n(n),c=e([i]);i=(c.then?(await c)():c)[0];let l=(0,i.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let u=l;r()}catch(e){r(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>o});let r=require("passport");var a=s.n(r);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=a()},26993:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>n});var a=s(73907),i=e([a]);a=(i.then?(await i)():i)[0];let n=(e,t,s,r="AND")=>new Promise(async(i,n)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return n(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,c=await a.Z.admins.getBySteam64(o);if(!c)return n(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return i(c);let l=null;if("object"==typeof c.flags)l=c.flags;else{let e=await a.Z.adminGroups.getById(c.flags);e&&(l=e.flags)}if(null===l||!("AND"===r?s.every(e=>l.includes(e)):s.some(e=>l.includes(e))))return n(t.status(403).json({success:!1,error:"Protected Route"}));i(c)});r()}catch(e){r(e)}})},91415:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>n});var a=s(9926),i=e([a]);let n=(a=(i.then?(await i)():i)[0]).z.object({address:a.z.string().refine(e=>e.includes(":"),{message:"IP Address must include a port number"}),hostname:a.z.string().min(3),rcon:a.z.string().min(0).optional()});r()}catch(e){r(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2867],()=>s(98795));module.exports=r})();