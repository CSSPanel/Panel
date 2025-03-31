"use strict";(()=>{var e={};e.id=9566,e.ids=[9566],e.modules={1428:e=>{e.exports=import("axios")},3498:e=>{e.exports=require("mysql2/promise")},10788:e=>{e.exports=import("drizzle-orm/mysql-core")},11737:e=>{e.exports=import("drizzle-orm")},29021:e=>{e.exports=require("fs")},33873:e=>{e.exports=require("path")},38218:e=>{e.exports=import("steam-api-sdk")},42971:e=>{e.exports=import("zod")},45414:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>p,routeModule:()=>d});var s=r(13088),n=r(57987),a=r(77355),o=r(59468),m=e([o]);o=(m.then?(await m)():m)[0];let p=(0,a.M)(o,"default"),l=(0,a.M)(o,"config"),d=new s.PagesAPIRouteModule({definition:{kind:n.A.PAGES_API,page:"/api/admin/setup",pathname:"/api/admin/setup",bundlePath:"",filename:""},userland:o});i()}catch(e){i(e)}})},59468:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>u});var s=r(86852),n=r(29021),a=r.n(n),o=r(33873),m=r.n(o),p=r(19582),l=e([s,p]);[s,p]=l.then?(await l)():l;let d=async(e,t)=>{let{method:r}=e;if("POST"===r)try{let r=s.A.parse(e.body);r.SESSION_SECRET=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),Object.keys(r).forEach(e=>{c(e,r[e])}),await p.A?.admins.create({player_steamid:r.MASTER_ADMIN,player_name:"Master Admin",flags:["@css/root","@web/root"],immunity:"100",server_id:null,servers_groups:null}),log("Setup complete!"),t.status(200).send("ok"),process.exit(1)}catch(e){return error(e),t.status(500).json(e)}return t.status(405).end()},c=(e,t)=>{let r=m().join(process.cwd(),".env");a().existsSync(r)||a().writeFileSync(r,"");let i=a().readFileSync(".env","utf8"),s=RegExp(`^${e}=.*$`,"m");s.test(i)?i=i.replace(s,`${e}="${t}"`):i+=`${e}="${t}"
`,a().writeFileSync(".env",i)},u=d;i()}catch(e){i(e)}})},75600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},80169:e=>{e.exports=import("chalk")},80546:e=>{e.exports=import("drizzle-orm/mysql2")},86852:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{A:()=>m,c:()=>o});var s=r(42971),n=e([s]);let a=(s=(n.then?(await n)():n)[0]).z.object({STEAM_API_KEY:s.z.string().min(1),SESSION_SECRET:s.z.string().min(1).optional(),DOMAIN:s.z.string().min(1),DB_HOST:s.z.string().min(1),DB_USER:s.z.string().min(1),DB_PASSWORD:s.z.string().min(1),DB_DATABASE:s.z.string().min(1),DB_PORT:s.z.string().min(1),MASTER_ADMIN:s.z.string().min(1)}),o=s.z.object({DB_HOST:s.z.string().min(1),DB_USER:s.z.string().min(1),DB_PASSWORD:s.z.string().min(1),DB_DATABASE:s.z.string().min(1),DB_PORT:s.z.string().min(1)}),m=a;i()}catch(e){i(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[937],()=>r(45414));module.exports=i})();