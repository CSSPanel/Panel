"use strict";(()=>{var e={};e.id=248,e.ids=[248],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},12281:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>l,default:()=>d,routeModule:()=>p});var a=t(54396),i=t(76255),n=t(39766),o=t(57196),c=e([o]);o=(c.then?(await c)():c)[0];let d=(0,n.l)(o,"default"),l=(0,n.l)(o,"config"),p=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/admin/groups",pathname:"/api/admin/groups",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},57196:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>l});var a=t(96610),i=t(93066),n=t(90741),o=t(57424),c=t(31310),d=e([a,i,n,o,c]);[a,i,n,o,c]=d.then?(await d)():d;let l=async(e,s)=>{await i.Z.run(e,s);let{method:t}=e,r=await (0,o.Z)(e,s,["@web/root","@web/admingroups","@css/root"],"OR");if(r){if(!a.Z)return s.status(500).json({message:"Database not connected"});switch(t){case"GET":{let e=await a.Z.adminGroups.getAll();return s.status(200).json(e)}case"POST":try{let{id:t,name:i,flags:o,immunity:d}=n.Z.parse(e.body),l=r.immunity;if(process.env.MASTER_ADMIN!==r.player_steamid&&"100"!==l&&Number(d)>Number(l))return s.status(403).json({message:"You cannot create an admin group with higher immunity than yours"});let p=await a.Z.adminGroups.create({id:t,name:i,flags:o,immunity:d});return(0,c.Z)("Admin Group Create",`Admin ${e.user?.displayName} (${e.user?.id}) created admin group: ${i}`,e.user?.id,"adminActionsDiscordWebhook"),s.status(201).json(p)}catch(e){return error("Error while creating admin group",e),s.status(500).json({message:"Error while creating admin group",err:e})}default:return s.status(405).json({message:"Method not allowed"})}}};r()}catch(e){r(e)}})},31310:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>o});var a=t(96610),i=t(92770),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=async(e,s,t,r="discordWebhook")=>{if(a.Z)try{a.Z.logs.create(e,s,t);let n=await a.Z.settings.getByKey(r,!1);n&&"string"==typeof n&&(0,i.Z)({url:n,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:s,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};r()}catch(e){r(e)}})},93066:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>l});var a=t(79809),i=t(45616),n=t(429),o=t.n(n),c=e([i]);i=(c.then?(await c)():c)[0];let d=(0,i.default)();d.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(a.Z.initialize()),d.use(a.Z.session());let l=d;r()}catch(e){r(e)}})},79809:(e,s,t)=>{t.d(s,{Z:()=>o});let r=require("passport");var a=t.n(r);let i=require("passport-steam");a().serializeUser(async(e,s)=>{s(null,e)}),a().deserializeUser(async(e,s)=>{s(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,s,t)=>(s.identifier=e,t(null,s))));let o=a()},57424:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>n});var a=t(96610),i=e([a]);a=(i.then?(await i)():i)[0];let n=(e,s,t,r="AND")=>new Promise(async(i,n)=>{if(!a.Z)return s.status(500).json({message:"Database not connected"});if(!e.user)return n(s.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,c=await a.Z.admins.getBySteam64(o);if(!c)return n(s.status(401).json({success:!1,error:"Protected Route"}));if(!t)return i(c);let d=null;if("object"==typeof c.flags)d=c.flags;else{let e=await a.Z.adminGroups.getById(c.flags);e&&(d=e.flags)}if(null===d||!("AND"===r?t.every(e=>d.includes(e)):t.some(e=>d.includes(e))))return n(s.status(403).json({success:!1,error:"Protected Route"}));i(c)});r()}catch(e){r(e)}})},90741:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>o});var a=t(9926),i=t(71755),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=a.z.object({id:a.z.string().min(3).refine(e=>e.startsWith("#"),{message:"The id must start with #"}),name:a.z.string().min(3),flags:a.z.array(i.bH),immunity:a.z.string().min(0).max(100)});r()}catch(e){r(e)}})},71755:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{ZP:()=>o,bH:()=>n});var a=t(9926),i=e([a]);a=(i.then?(await i)():i)[0],[{id:"@css/reservation",description:"Reserved slot access."},{id:"@css/generic",description:"Generic admin."},{id:"@css/kick",description:"Kick other players."},{id:"@css/ban",description:"Ban other players."},{id:"@css/permban",description:"Perma ban other players."},{id:"@css/unban",description:"Remove bans."},{id:"@css/vip",description:"General vip status."},{id:"@css/slay",description:"Slay/harm other players."},{id:"@css/changemap",description:"Change the map or major gameplay features."},{id:"@css/cvar",description:"Change most cvars."},{id:"@css/config",description:"Execute config files."},{id:"@css/chat",description:"Special chat privileges."},{id:"@css/vote",description:"Start or create votes."},{id:"@css/password",description:"Set a password on the server."},{id:"@css/rcon",description:"Use RCON commands."},{id:"@css/cheats",description:"Change sv_cheats or use cheating commands."},{id:"@css/root",description:"Magically enables all flags and ignores immunity values."},{id:"@web/root",description:"Web panel root access."},{id:"@web/admins",description:"Manage web admins."},{id:"@web/admingroups",description:"Manage web admin groups."},{id:"@web/bans",description:"Manage bans."},{id:"@web/mutes",description:"Manage mutes."},{id:"@web/logs",description:"View panel logs."},{id:"@web/stats",description:"View server statistics."},{id:"@web/servers",description:"Manage servers."},{id:"@web/rcon",description:"Manage servers via RCON."}].map(e=>e.id);let n=a.z.string().refine(e=>e.startsWith("@")||e.startsWith("#"),{message:"The flag is not valid"}),o=a.z.object({player_name:a.z.string().min(3).regex(/^[\w\s]+$/),player_steamid:a.z.string().regex(/^7656119\d{10}$/),server_id:a.z.array(a.z.string()).nullable(),servers_groups:a.z.array(a.z.string()).nullable(),flags:a.z.union([a.z.array(n),n]),immunity:a.z.union([a.z.string().min(0).max(100),a.z.number().min(0).max(100)]),ends:a.z.union([a.z.string(),a.z.date()]).nullable()});r()}catch(e){r(e)}})}};var s=require("../../../webpack-api-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[9585],()=>t(12281));module.exports=r})();