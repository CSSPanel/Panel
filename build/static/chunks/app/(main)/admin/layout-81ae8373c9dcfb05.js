(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2788],{1542:(e,s,t)=>{"use strict";t.d(s,{Ay:()=>l,mg:()=>u,vx:()=>r});var i=t(4394),n=t(4452),a=t(87031),o=t(59241);let r=async()=>{await (0,o.A)("/api/auth/logout"),await (0,n.Tk)("/api/auth"),i.oR.success("Logged out successfully")},u=()=>{let e=window.innerWidth/2-300,s=window.innerHeight/2-400,t=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(s,", left=").concat(e)),a=setInterval(async()=>{t&&t.closed&&(await (0,n.Tk)("/api/auth"),i.oR.success("Logged in successfully!"),clearInterval(a))},1e3)},l=()=>{let{data:e,isLoading:s,error:t}=(0,n.Ay)("/api/auth",a.A);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:t||!e?null:e.user,admin:t||!e?null:e.admin,masterAdmin:!t&&!!e&&e.masterAdmin,isLoading:s}}},9351:(e,s,t)=>{"use strict";t.d(s,{default:()=>u});var i=t(75819),n=t(19219),a=t(26935),o=t(56027),r=t(1542);let u=e=>{let{children:s,flags:t}=e,{admin:u,isLoading:l}=(0,r.Ay)(),d=(0,a.useRouter)();return(0,o.useEffect)(()=>{if(!l&&(!u||t.length>0&&!t.some(e=>{var s;return null===(s=u.flags)||void 0===s?void 0:s.includes(e)})))return d.push("/")},[u,l,d,t]),l?(0,i.jsx)(n.o,{}):u?(0,i.jsx)(i.Fragment,{children:s}):(0,i.jsx)(i.Fragment,{children:"No Access"})}},19500:(e,s,t)=>{"use strict";t.d(s,{b:()=>d,default:()=>l});var i=t(75819),n=t(95889),a=t(26935),o=t(74735),r=t(96904),u=t(1542);let l=()=>{let e=(0,a.usePathname)(),s=(0,a.useRouter)(),{admin:t}=(0,u.Ay)(),l=(null==t?void 0:t.flags)||[],m=(0,n.q)(e=>e.modules),c=d.filter(e=>e.permissions.some(e=>l.includes(e))).filter(e=>{if(e.module){let s=m.find(s=>s.identifier===e.module);if(!s||!s.enabled)return!1}return!0});return(0,i.jsx)(o.r,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>s.push(e),items:c,children:e=>(0,i.jsx)(r.i,{title:e.title},e.path)})},d=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},26935:(e,s,t)=>{"use strict";var i=t(80607);t.o(i,"usePathname")&&t.d(s,{usePathname:function(){return i.usePathname}}),t.o(i,"useRouter")&&t.d(s,{useRouter:function(){return i.useRouter}}),t.o(i,"useSearchParams")&&t.d(s,{useSearchParams:function(){return i.useSearchParams}})},81194:(e,s,t)=>{Promise.resolve().then(t.bind(t,9351)),Promise.resolve().then(t.bind(t,19500))},87031:(e,s,t)=>{"use strict";t.d(s,{A:()=>n});var i=t(59241);let n=e=>i.A.get(e).then(e=>e.data)},95889:(e,s,t)=>{"use strict";t.d(s,{A:()=>l,q:()=>u});var i=t(75819),n=t(56027),a=t(33004),o=t(87031),r=t(4452);let u=(0,a.vt)(e=>({modules:[],setModules:s=>e(()=>({modules:s,isLoading:!1})),isLoading:!0,setLoading:s=>e(()=>({isLoading:s}))})),l=()=>{let{data:e,isLoading:s}=(0,r.Ay)("/api/modules",o.A),t=u(e=>e.setModules),a=u(e=>e.setLoading);return(0,n.useEffect)(()=>{e&&(t(e),a(!1))},[e,s,t,a]),(0,i.jsx)(i.Fragment,{})}}},e=>{var s=s=>e(e.s=s);e.O(0,[4047,4394,7166,494,5168,8552,6054,388,7358],()=>s(81194)),_N_E=e.O()}]);