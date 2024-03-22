"use strict";(()=>{var e={};e.id=7774,e.ids=[7774],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},94e3:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>c,default:()=>u,routeModule:()=>d});var a=t(88667),i=t(25828),n=t(38051),o=t(74165),l=e([o]);o=(l.then?(await l)():l)[0];let u=(0,n.l)(o,"default"),c=(0,n.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/admin/modules",pathname:"/api/admin/modules",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},74165:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>l});var a=t(73153),i=t(94779),n=t(74186),o=e([a,n]);[a,n]=o.then?(await o)():o;let l=async(e,s)=>{if(await n.Z.run(e,s),!await (0,a.Z)(e,s,["@web/root","@css/root"],"OR"))return;let{method:t}=e;if("GET"===t)try{let e=i.Z;return s.status(200).json(e)}catch(e){return error(e),s.status(500).json(e)}return s.status(405).end()};r()}catch(e){r(e)}})},94779:(e,s,t)=>{t.d(s,{Z:()=>a});let r=require("react/jsx-runtime"),a=[{id:"module-skins",name:"Skins",description:(0,r.jsxs)(r.Fragment,{children:["Players can manage their skins, gloves, knives, agents, and music kits through the website.",r.jsx("br",{}),"This modules uses"," ",r.jsx("a",{href:"https://github.com/Nereziel/cs2-WeaponPaints",target:"_blank",children:"WeaponPaints"})," ","for the ingame skins."]}),price:5},{id:"module-skins-collections",name:"Skins Collections",description:r.jsx(r.Fragment,{children:"Players can create and publish their skins collections, including gloves, knives, agents, and music kits."}),price:5}]},74186:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>c});var a=t(15313),i=t(45616),n=t(429),o=t.n(n),l=e([i]);i=(l.then?(await l)():l)[0];let u=(0,i.default)();u.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let c=u;r()}catch(e){r(e)}})},15313:(e,s,t)=>{t.d(s,{Z:()=>o});let r=require("passport");var a=t.n(r);let i=require("passport-steam");a().serializeUser(async(e,s)=>{s(null,e)}),a().deserializeUser(async(e,s)=>{s(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,s,t)=>(s.identifier=e,t(null,s))));let o=a()},73153:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.d(s,{Z:()=>n});var a=t(6995),i=e([a]);a=(i.then?(await i)():i)[0];let n=(e,s,t,r="AND")=>new Promise(async(i,n)=>{if(!a.Z)return s.status(500).json({message:"Database not connected"});if(!e.user)return n(s.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,l=await a.Z.admins.getBySteam64(o);if(!l)return n(s.status(401).json({success:!1,error:"Protected Route"}));if(!t)return i(l);let u=null;if("object"==typeof l.flags)u=l.flags;else{let e=await a.Z.adminGroups.getById(l.flags);e&&(u=e.flags)}if(null===u||!("AND"===r?t.every(e=>u.includes(e)):t.some(e=>u.includes(e))))return n(s.status(403).json({success:!1,error:"Protected Route"}));i(l)});r()}catch(e){r(e)}})}};var s=require("../../../webpack-api-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[6037],()=>t(94e3));module.exports=r})();