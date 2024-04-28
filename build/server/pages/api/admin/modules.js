"use strict";(()=>{var e={};e.id=7774,e.ids=[7774],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},58187:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>u,routeModule:()=>d});var a=s(44614),n=s(49531),i=s(55621),l=s(46613),o=e([l]);l=(o.then?(await o)():o)[0];let u=(0,i.l)(l,"default"),c=(0,i.l)(l,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/modules",pathname:"/api/admin/modules",bundlePath:"",filename:""},userland:l});r()}catch(e){r(e)}})},46613:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>u});var a=s(18391),n=s(26993),i=s(10474),l=s(73907),o=e([a,n,i,l]);[a,n,i,l]=o.then?(await o)():o;let u=async(e,t)=>{await i.Z.run(e,t);let{method:s}=e;if(await (0,n.Z)(e,t,["@web/root","@css/root"],"OR"))switch(s){case"GET":try{if(await (0,a.ZW)(),!l.Z)return t.status(500).json({message:"Database connection failed"});let e=await (0,a.By)(),s=await Promise.all(e.map(async e=>{let{enabled:t,settings:s,license:r}=await (0,a.ed)(e.identifier)||{enabled:!1,settings:{},license:null};return{...e,license:r,enabled:!!r&&t,settings:s}}));return t.status(200).json(s)}catch(e){return error(e),t.status(500).json(e)}case"POST":try{let{moduleId:s,method:r}=e.body;if(!s||!r)return t.status(400).end();let n=(await (0,a.By)()).find(e=>e.identifier===s);if(!n)return t.status(404).end();if((await (0,a.ed)(s)).enabled||!n.paymentCycle.includes(r))return t.status(400).end();let i=await (0,a.$6)({method:r,moduleId:s});if(!i)return t.status(500).end();if("string"==typeof i)return t.status(200).send(i);return t.status(201).json(i)}catch(e){return error("Failed to createa a license process:",e),t.status(500).json(e)}default:return t.status(405).end()}};r()}catch(e){r(e)}})},18391:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{$6:()=>u,By:()=>c,GQ:()=>f,ZW:()=>o,ed:()=>m});var a=s(73907),n=s(99648),i=e([a,n]);[a,n]=i.then?(await i)():i;let l=process.env.DOMAIN?.replace("http://","").replace("https://",""),o=async()=>await g.post("/hosts",{identifier:l}).then(()=>{log("Registered/Logged in to liceses API")}),u=async({method:e,moduleId:t})=>{try{let{data:s}=await g.post("/licenses/start",{cycle:e,hostId:l,moduleId:t,returnUrl:`${process.env.DOMAIN}/admin/modules`});return log(`Created license process for ${t}, method: ${e}`),log(s,typeof s),s}catch(e){throw e}},c=async()=>{try{let{data:e}=await g.get("/modules/css-panel");return log(`Loaded ${e.length} modules`),e}catch(e){return error(e),[]}},d=null,p=null,y=async()=>{if(d&&p&&Date.now()<p)return d;try{let{data:e}=await g.get(`/licenses/${l}`);return log(`Loaded ${e.length} licenses`),d=e,p=Date.now()+1e4,e}catch(e){return error(e),[]}},f=async e=>{try{return(await y()).find(t=>t.module.identifier===e)||null}catch(e){return error(e),null}},m=async e=>{try{if(!a.Z)return{enabled:!1,settings:{},license:null};let t=await f(e);if(!t)return{enabled:!1,settings:{},license:null};let s=await a.Z.settings.getByKey("modules",!1),r=s?.find(t=>t.identifier===e),n=!!r?.enabled,i=r?.settings||{};return{enabled:n,settings:i,license:t}}catch(e){return error(e),{enabled:!1,settings:{},license:null}}},g=n.default.create({baseURL:"https://li.csspanel.dev/v1"});r()}catch(e){r(e)}})},10474:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>c});var a=s(60276),n=s(45616),i=s(429),l=s.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let u=(0,n.default)();u.use(l()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let c=u;r()}catch(e){r(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>l});let r=require("passport");var a=s.n(r);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let l=a()},26993:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>i});var a=s(73907),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,s,r="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let l=e.user.id,o=await a.Z.admins.getBySteam64(l);if(!o)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return n(o);let u=null;if("object"==typeof o.flags)u=o.flags;else{let e=await a.Z.adminGroups.getById(o.flags);e&&(u=e.flags)}if(null===u||!("AND"===r?s.every(e=>u.includes(e)):s.some(e=>u.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(o)});r()}catch(e){r(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[8747],()=>s(58187));module.exports=r})();