"use strict";(()=>{var e={};e.id=7243,e.ids=[7243],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},18174:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>u,default:()=>l,routeModule:()=>d});var a=t(4145),o=t(99019),i=t(37251),n=t(6959),c=e([n]);n=(c.then?(await c)():c)[0];let l=(0,i.l)(n,"default"),u=(0,i.l)(n,"config"),d=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/admin/servers-groups",pathname:"/api/admin/servers-groups",bundlePath:"",filename:""},userland:n});s()}catch(e){s(e)}})},6959:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>d});var a=t(36492),o=t(28243),i=t(49798),n=t(90901),c=t(95591),l=t(85130),u=e([a,o,i,n,c,l]);[a,o,i,n,c,l]=u.then?(await u)():u;let d=async(e,r)=>{await o.Z.run(e,r);let{method:t}=e;if(await (0,n.Z)(e,r,["@web/root","@web/servers","@css/root","@web/rcon"],"OR")){if(!a.Z)return r.status(500).json({message:"Database not connected"});switch(t){case"GET":{let e=await a.Z.serversGroups.getAll();return r.status(200).json(e)}case"POST":{let{name:t,servers:s}=i.Z.parse(e.body);return await a.Z.serversGroups.create({name:t,servers:s}),(0,c.Z)("Servers Group Create",`Admin ${e.user?.displayName} (${e.user?.id}) created servers group: ${t}`,e.user?.id,"adminActionsDiscordWebhook"),await (0,l.x)("css_reloadadmins"),r.status(201).send("Servers group created")}default:return r.status(405).json({message:"Method not allowed"})}}};s()}catch(e){s(e)}})},85130:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>l,x:()=>c});var a=t(43582),o=t(36492),i=e([o]);o=(i.then?(await i)():i)[0];let n=async(e,r)=>{if(!o.Z)throw Error("Database not connected");try{let t=await o.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:i}=t,[n,c]=s.split(":");if(!i)throw Error("Server has no rcon password");let l=await (0,a.RCON)({ip:n,port:Number(c),password:i,enableWarns:!0,retries:2,timeout:2e3});l.authenticate();let u=await l.exec(r);if(!u)return"No response from server";return u}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!o.Z)throw Error("Database not connected");let r=await o.Z.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await n(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},l=n;s()}catch(e){s(e)}})},95591:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>n});var a=t(36492),o=t(47271),i=e([a,o]);[a,o]=i.then?(await i)():i;let n=async(e,r,t,s="discordWebhook")=>{if(a.Z)try{a.Z.logs.create(e,r,t);let i=await a.Z.settings.getByKey(s,!1);i&&"string"==typeof i&&(0,o.Z)({url:i,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:r,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},28243:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>u});var a=t(51284),o=t(45616),i=t(429),n=t.n(i),c=e([o]);o=(c.then?(await c)():c)[0];let l=(0,o.default)();l.use(n()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let u=l;s()}catch(e){s(e)}})},51284:(e,r,t)=>{t.d(r,{Z:()=>n});let s=require("passport");var a=t.n(s);let o=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new o.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let n=a()},90901:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(36492),o=e([a]);a=(o.then?(await o)():o)[0];let i=(e,r,t,s="AND")=>new Promise(async(o,i)=>{if(!a.Z)return r.status(500).json({message:"Database not connected"});if(!e.user)return i(r.status(400).json({success:!1,error:"Protected Route"}));let n=e.user.id,c=await a.Z.admins.getBySteam64(n);if(!c)return i(r.status(401).json({success:!1,error:"Protected Route"}));if(!t)return o(c);let l=null;if("object"==typeof c.flags)l=c.flags;else{let e=await a.Z.adminGroups.getById(c.flags);e&&(l=e.flags)}if(null===l||!("AND"===s?t.every(e=>l.includes(e)):t.some(e=>l.includes(e))))return i(r.status(403).json({success:!1,error:"Protected Route"}));o(c)});s()}catch(e){s(e)}})},49798:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(9926),o=e([a]);let i=(a=(o.then?(await o)():o)[0]).z.object({name:a.z.string().min(3),servers:a.z.array(a.z.string())});s()}catch(e){s(e)}})}};var r=require("../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[3607],()=>t(18174));module.exports=s})();