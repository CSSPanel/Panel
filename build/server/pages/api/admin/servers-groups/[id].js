"use strict";(()=>{var e={};e.id=8784,e.ids=[8784],e.modules={1428:e=>{e.exports=import("axios")},3389:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>d,L:()=>u});var a=t(99545),o=t(19582),i=e([o]);o=(i.then?(await i)():i)[0];let n=async(e,r)=>{if(!o.A)throw Error("Database not connected");try{let t=await o.A.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:i}=t,[n,u]=s.split(":");if(!i)throw Error("Server has no rcon password");let d=await (0,a.RCON)({ip:n,port:Number(u),password:i,enableWarns:!0,retries:2,timeout:2e3});d.authenticate();let c=await d.exec(r);if(!c)return"No response from server";return c}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},u=async e=>{if(!o.A)throw Error("Database not connected");let r=await o.A.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await n(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},d=n;s()}catch(e){s(e)}})},3498:e=>{e.exports=require("mysql2/promise")},10788:e=>{e.exports=import("drizzle-orm/mysql-core")},11737:e=>{e.exports=import("drizzle-orm")},38218:e=>{e.exports=import("steam-api-sdk")},38548:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>i});var a=t(42971),o=e([a]);let i=(a=(o.then?(await o)():o)[0]).z.object({name:a.z.string().min(3),servers:a.z.array(a.z.string())});s()}catch(e){s(e)}})},41506:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>n});var a=t(19582),o=t(96070),i=e([a,o]);[a,o]=i.then?(await i)():i;let n=async(e,r,t,s="discordWebhook")=>{if(a.A)try{a.A.logs.create(e,r,t);let i=await a.A.settings.getByKey(s,!1);i&&"string"==typeof i&&(0,o.A)({url:i,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:r,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},42971:e=>{e.exports=import("zod")},61890:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>c,default:()=>d,routeModule:()=>l});var a=t(13088),o=t(57987),i=t(77355),n=t(76406),u=e([n]);n=(u.then?(await u)():u)[0];let d=(0,i.M)(n,"default"),c=(0,i.M)(n,"config"),l=new a.PagesAPIRouteModule({definition:{kind:o.A.PAGES_API,page:"/api/admin/servers-groups/[id]",pathname:"/api/admin/servers-groups/[id]",bundlePath:"",filename:""},userland:n});s()}catch(e){s(e)}})},75600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},76404:e=>{e.exports=import("next-connect")},76406:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>l});var a=t(19582),o=t(93204),i=t(38548),n=t(87138),u=t(3389),d=t(41506),c=e([a,o,i,n,u,d]);[a,o,i,n,u,d]=c.then?(await c)():c;let l=async(e,r)=>{await o.A.run(e,r);let{method:t}=e;if(!await (0,n.A)(e,r,["@web/root","@web/servers","@css/root","@web/rcon"],"OR"))return;let{id:s}=e.query;if(!a.A)return r.status(500).json({message:"Database not connected"});let c=await a.A.serversGroups.getById(Number(s));if(!c)return r.status(404).json({message:"Servers group not found"});switch(t){case"PUT":{let{name:t,servers:o}=i.A.parse(e.body);return await a.A.serversGroups.update(Number(s),{name:t,servers:o}),await (0,u.L)("css_reloadadmins"),(0,d.A)("Servers Group Edit",`Admin ${e.user?.displayName} (${e.user?.id}) edited servers group "${c.name}"`,e.user?.id,"adminActionsDiscordWebhook"),r.status(201).json(c)}case"POST":try{let{message:t}=e.body,o=c.servers,i=await a.A.servers.getAll();for await(let e of o){let r=i.find(r=>r.id.toString()===e);r&&await (0,u.A)(r.id,t)}return await (0,u.L)("css_reloadadmins"),(0,d.A)("Servers Group Rcon",`Admin ${e.user?.displayName} (${e.user?.id}) send a rcon command to servers group #${s} (command: ${t})`,e.user?.id,"adminActionsDiscordWebhook"),r.status(201).end()}catch(e){return r.status(500).json(e)}case"DELETE":try{return await a.A.serversGroups.delete(Number(s)),(0,d.A)("Servers Group Delete",`Admin ${e.user?.displayName} (${e.user?.id}) deleted servers group #${c.name}`,e.user?.id,"adminActionsDiscordWebhook"),await (0,u.L)("css_reloadadmins"),r.status(200).send("Servers Group deleted")}catch(e){return r.status(500).json({message:"Error while deleting servers groups",error:e})}default:return r.status(405).json({message:"Method not allowed"})}};s()}catch(e){s(e)}})},80169:e=>{e.exports=import("chalk")},80546:e=>{e.exports=import("drizzle-orm/mysql2")},87138:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>i});var a=t(19582),o=e([a]);a=(o.then?(await o)():o)[0];let i=(e,r,t,s="AND")=>new Promise(async(o,i)=>{let n;if(!a.A)return r.status(500).json({message:"Database not connected"});if(!e.user)return i(r.status(400).json({success:!1,error:"Protected Route"}));let u=e.user.id,d=await a.A.admins.getBySteam64(u);if(!d)return i(r.status(401).json({success:!1,error:"Protected Route"}));if(!t)return o(d);let c=null;if("object"==typeof d.flags)c=d.flags;else{let e=await a.A.adminGroups.getById(d.flags);e&&(c=e.flags)}if(null===c||!("AND"===s?t.every(e=>c.includes(e)):t.some(e=>c.includes(e))))return i(r.status(403).json({success:!1,error:"Protected Route"}));o(d)});s()}catch(e){s(e)}})},88691:e=>{e.exports=require("cookie-session")},93204:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{A:()=>c});var a=t(95621),o=t(76404),i=t(88691),n=t.n(i),u=e([o]);o=(u.then?(await u)():u)[0];let d=(0,o.default)();d.use(n()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(a.A.initialize()),d.use(a.A.session());let c=d;s()}catch(e){s(e)}})},95621:(e,r,t)=>{t.d(r,{A:()=>n});let s=require("passport");var a=t.n(s);let o=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new o.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let n=a()},99545:e=>{e.exports=require("@fabricio-191/valve-server-query")}};var r=require("../../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[937],()=>t(61890));module.exports=s})();