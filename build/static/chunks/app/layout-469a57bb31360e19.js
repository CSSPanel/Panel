(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{88892:function(e,t,n){Promise.resolve().then(n.bind(n,65971)),Promise.resolve().then(n.t.bind(n,3716,23)),Promise.resolve().then(n.bind(n,70904)),Promise.resolve().then(n.bind(n,13100)),Promise.resolve().then(n.bind(n,16949)),Promise.resolve().then(n.bind(n,60573)),Promise.resolve().then(n.t.bind(n,47520,23)),Promise.resolve().then(n.t.bind(n,16317,23)),Promise.resolve().then(n.t.bind(n,46177,23)),Promise.resolve().then(n.t.bind(n,45110,23))},70904:function(e,t,n){"use strict";var a=n(94773),s=n(15105),r=n(23151),l=n(39720),i=n(35504),o=n(44098),d=n(6389),c=n(46111),u=n(39596),p=n(48695);t.default=()=>{let e=(0,d.k)(e=>e.modules).find(e=>"welcome-popup"===e.identifier),[t,n]=(0,c._)("welcome-popup",0);if(!e||!e.enabled)return null;let m=e.settings;if(!m||!Object.keys(m).length)return null;let f=()=>{n(1)},h=m.picture,g=m.title,x=m.message,b=m.buttonText;return(0,a.jsx)(s.R,{isOpen:1!==t,onOpenChange:f,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},size:"2xl",hideCloseButton:!0,children:(0,a.jsx)(r.A,{className:(0,p.cn)(b?"":"pb-4",g?"":"pt-4"),children:()=>(0,a.jsxs)(a.Fragment,{children:[g&&(0,a.jsx)(l.k,{className:"flex flex-col gap-1",children:g}),(0,a.jsxs)(i.I,{children:[h&&(0,a.jsx)("img",{src:h,alt:"Welcome",className:"w-full max-h-44 object-cover bg-center mb-4 rounded-xl"}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:x}})]}),b&&(0,a.jsx)(o.R,{children:(0,a.jsx)(u.A,{color:"primary",onPress:f,children:b})})]})})})}},16949:function(e,t,n){"use strict";var a=n(94773),s=n(39596),r=n(15105),l=n(23151),i=n(39720),o=n(35504),d=n(44098),c=n(44208),u=n(46736),p=n(96509),m=n(57970),f=n(24909);t.default=()=>{let{admin:e}=(0,u.ZP)(),[t,n]=(0,c.useState)(!1),[h,g]=(0,c.useState)(!1),x=async()=>{g(!0);try{await f.Z.post("/api/admin/update"),p.ZP.success("Panel updated successfully!\nPlease restart the app to apply the changes.")}catch(e){console.error(e),p.ZP.error("An error occurred while updating the panel.")}g(!1)};return e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{size:"sm",variant:"faded",color:"primary",className:"ml-6",onClick:()=>n(!0),children:"Update Available!"}),(0,a.jsx)(r.R,{isOpen:t,onOpenChange:h?()=>{}:n,placement:"top",children:(0,a.jsx)(l.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.k,{children:"Update CSS-Panel"}),(0,a.jsxs)(o.I,{children:["There is a new update available for CSS-Panel!",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"If you are using Easypanel or Docker, you can update the panel by re-deploying the panel (Deploy button)."]}),(0,a.jsxs)(d.R,{children:[(0,a.jsx)(m.default,{href:"https://csspanel.dev/docs/updating",target:"_blank",passHref:!0,children:(0,a.jsx)(s.A,{variant:"solid",color:"default",onClick:e,isDisabled:h,children:"Documentation"})}),(0,a.jsx)(s.A,{variant:"solid",color:"primary",onClick:x,isLoading:h,children:"Update"})]})]})})})]})}},13100:function(e,t,n){"use strict";n.d(t,{default:function(){return P}});var a=n(94773),s=n(10236),r=n(91086),l=n(83467),i=n(35468),o=n(88341),d=n(71582),c=n(39596),u=n(48695),p=n(46736),m=n(66596),f=()=>{let{user:e,admin:t}=(0,p.ZP)();return e?(0,a.jsxs)(s.F,{children:[(0,a.jsx)(r.S,{children:(0,a.jsx)(o.z,{as:"button",avatarProps:{isBordered:!0,src:e.photos[0].value,radius:"sm",className:"mr-1"},className:"transition-transform mr-4",description:t?(null==t?void 0:t.group)?(0,a.jsx)(m.e,{content:"string"!=typeof(null==t?void 0:t.group.flags)?null==t?void 0:t.group.flags.join("\n"):null==t?void 0:t.group.flags,color:"primary",className:"whitespace-pre-wrap",children:(0,a.jsx)("div",{children:null==t?void 0:t.group.name})}):"string"!=typeof t.flags&&t.flags.length>1?(0,a.jsx)(m.e,{content:"string"!=typeof t.flags?t.flags.join("\n"):t.flags,color:"primary",className:"whitespace-pre-wrap",children:(0,a.jsxs)("div",{children:[t.flags.length," Flags"]})}):t.flags[0]:"Player",name:e.displayName,classNames:{name:"text-default-900 font-medium",description:"text-default-500"}})}),(0,a.jsx)(l.a,{variant:"faded",children:(0,a.jsx)(i.W,{className:"text-danger",color:"danger",description:"Logout from your steam account",startContent:(0,a.jsx)(d.Z,{className:(0,u.cn)("text-xl text-default-500 pointer-events-none flex-shrink-0","text-danger")}),onClick:p.hY,children:"Logout"},"logout")})]}):(0,a.jsx)(c.A,{color:"primary",onClick:p.jc,children:"Login"})},h=n(44208),g=n(93803),x=n(78249),b=n(23907),j=n(34851),y=()=>{let{theme:e}=(0,j.Z)(e=>e.settings),[t,n]=(0,h.useState)(!1),{theme:s,setTheme:r,systemTheme:l}=(0,b.F)();return((0,h.useEffect)(()=>{n(!0)},[]),(0,h.useEffect)(()=>{if(e&&t){if(s){let t=null==s?void 0:s.split("-")[0];r("".concat(("system"===t||!t)&&l?l:t||"light","-").concat(e,"-theme"))}else r("".concat(l||"light","-").concat(e,"-theme"))}},[e,r,s]),t)?(0,a.jsx)(c.A,{onClick:()=>r(s==="dark-".concat(e,"-theme")?"light-".concat(e,"-theme"):"dark-".concat(e,"-theme")),size:"sm",variant:"faded",color:"primary",isIconOnly:!0,children:s==="dark-".concat(e,"-theme")?(0,a.jsx)(g.Z,{size:20}):(0,a.jsx)(x.Z,{size:20})}):null},v=n(47484),k=n(93035),z=n(42778),E=n(35787),w=n(6455),D=n(38),C=n(62503),A=n(25662),F=n(54325),Z=n(69154),P=e=>{let{children:t}=e,[n,s]=(0,h.useState)(!1),r=(0,z.usePathname)(),{admin:l}=(0,p.ZP)(),{customPages:i}=(0,j.Z)(e=>e.settings),o=i.filter(e=>"HEADER"===e.placement),d=i.filter(e=>"SIDEBAR"===e.placement);return(0,a.jsxs)(E.R,{onMenuOpenChange:s,classNames:{wrapper:"max-w-[100%]",base:"z-[10000]"},children:[(0,a.jsxs)(w.U,{children:[(0,a.jsx)(D.L,{"aria-label":n?"Close menu":"Open menu",className:"sm:hidden"}),(0,a.jsx)(C.H,{className:"invisible sm:visible",children:t})]}),(0,a.jsx)(w.U,{className:"hidden sm:flex gap-4",justify:"center",children:o.map((e,t)=>(0,a.jsx)(A.k,{children:(0,a.jsx)(k.O,{color:"foreground",href:e.link,target:e.target||"_blank",children:e.title})},t))}),(0,a.jsx)(w.U,{justify:"end",children:"/setup"!==r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.k,{className:"flex flex-row items-center",children:(0,a.jsx)(f,{})}),(0,a.jsx)(A.k,{children:(0,a.jsx)(y,{})})]}):(0,a.jsx)(a.Fragment,{})}),(0,a.jsxs)(F.$,{children:[v.Z.map(e=>{if(e.admin){if(!l)return;let t=l.flags;if(!["@css/rcon","@css/root","@web/admingroups","@web/admins","@web/bans","@web/logs","@web/mutes","@web/root","@web/servers","@web/stats","@web/rcon"].some(e=>t.includes(e)))return null;if(e.flag){let t=e.flag;if(!l.flags.includes(t))return}}return(0,a.jsx)(Z.h,{children:(0,a.jsx)(k.O,{color:"foreground",href:e.path,size:"lg",children:e.name})},"".concat(e.path))}),d.map(e=>(0,a.jsx)(Z.h,{children:(0,a.jsx)(k.O,{color:"foreground",href:e.link,size:"lg",children:e.title})},"".concat(e.link))),o.map(e=>(0,a.jsx)(Z.h,{children:(0,a.jsx)(k.O,{color:("/"===e.link?r===e.link:null==r?void 0:r.startsWith(e.link))?"primary":"foreground",className:"w-full",href:e.link,target:e.target||"_blank",size:"lg",children:e.title})},"".concat(e.link)))]})]})}},47484:function(e,t,n){"use strict";var a=n(75258),s=n(47332),r=n(92300),l=n(11834),i=n(99841),o=n(37303);let d=[{name:"Dashboard",path:"/",icon:a.Z},{name:"Servers",path:"/servers",icon:s.Z},{name:"Bans",path:"/bans",icon:r.Z},{name:"Mutes / Gags",path:"/mutes",icon:l.Z},{name:"Skins",path:"/skins",icon:i.Z,module:"skins"},{name:"Reports",path:"/player-reports",icon:o.Z,admin:!0,module:"player-reports"},{name:"Admin Panel",path:"/admin",icon:s.Z,admin:!0}];t.Z=d},60573:function(e,t,n){"use strict";n.d(t,{default:function(){return g}});var a=n(94773),s=n(44208),r=n(42778),l=n(16780),i=n(2347),o=n(34851),d=n(46736),c=n(47484),u=n(6389),p=n(48695),m=n(93230),f=n(57970),h=e=>{let{name:t,icon:n,path:s,module:l,target:i}=e,o=(0,r.usePathname)(),d="/"===s?o===s:null==o?void 0:o.startsWith(s),c=(0,u.k)(e=>e.modules);if(l){let e=c.find(e=>e.identifier===l);if(!e||!e.enabled)return null}return(0,a.jsx)(f.default,{href:s,target:i||(s.startsWith("http")?"_blank":void 0),children:(0,a.jsxs)("div",{className:(0,p.cn)("px-6 py-4 text-sm flex items-center content-center duration-200","hover:bg-slate-500/5 text-foreground","cursor-pointer relative gap-2 hover:pl-8"),children:[d&&(0,a.jsx)(m.E.span,{layoutId:"underline",className:"absolute left-0 h-full w-1 [box-shadow:_0_0_10px_hsl(var(--css-primary))]",style:{backgroundColor:"hsl(var(--css-primary))"}}),n&&(0,a.jsx)(n,{size:18}),(0,a.jsx)("span",{children:t})]})})},g=()=>{let{admin:e}=(0,d.ZP)(),t=(0,r.usePathname)(),{customPages:n}=(0,o.Z)(e=>e.settings),u=n.filter(e=>"SIDEBAR"===e.placement);return"/setup"!==t?(0,a.jsxs)("div",{className:"hidden sm:flex flex-col min-w-[200px] pt-10",children:[c.Z.map(t=>{if(t.admin){if(!e)return;let n=e.flags;if(!["@css/rcon","@css/root","@web/admingroups","@web/admins","@web/bans","@web/logs","@web/mutes","@web/root","@web/servers","@web/stats","@web/rcon"].some(e=>n.includes(e)))return null;if(t.flag){let n=t.flag;if(!e.flags.includes(n))return}}return(0,s.createElement)(h,{...t,key:t.name})}),u.map((e,t)=>(0,a.jsx)(h,{name:e.title,icon:"LINK"===e.type?l.Z:i.Z,path:"LINK"===e.type?e.link:"/".concat(e.title.replace(" ","-").toLowerCase()),target:e.target},t))]}):(0,a.jsx)(a.Fragment,{})}},65971:function(e,t,n){"use strict";var a=n(94773),s=n(18370),r=n(42778),l=n(23907),i=n(96509),o=n(44208),d=n(34851),c=n(6389),u=n(83455),p=n(83305),m=n(17054);t.default=e=>{let{children:t}=e,n=(0,r.useRouter)(),{data:f}=(0,m.ZP)("/api/settings",u.Z),h=(0,d.Z)(e=>e.setSettings);return(0,o.useEffect)(()=>{f&&h(f)},[f,h]),(0,a.jsxs)(s.w,{navigate:n.push,children:[(0,a.jsxs)(l.f,{themes:Object.keys(p.Z),enableSystem:!0,children:[(0,a.jsx)(i.x7,{containerClassName:"toast-container !z-[10000000]"}),t]}),(0,a.jsx)(c.Z,{}),(0,a.jsx)("style",{children:" .toast-container div { z-index: 1000000 } "})]})}},83305:function(e,t,n){"use strict";n.d(t,{M:function(){return l},Z:function(){return i}});let a={primary:{50:"#e6f1fe",100:"#cce3fd",200:"#99c7fb",300:"#66aaf9",400:"#338ef7",500:"#006FEE",600:"#005bc4",700:"#004493",800:"#002e62",900:"#001731",DEFAULT:"#338ef7"},secondary:{50:"#F2EAFA",100:"#E4D4F4",200:"#C9A9E9",300:"#AE7EDE",400:"#9353D3",500:"#7828C8",600:"#6020A0",700:"#481878",800:"#301050",900:"#180828",DEFAULT:"#7828C8"}},s={primary:{50:"#FEF3D3",100:"#FEE3A7",200:"#FED07B",300:"#FED07B",400:"#FDBC5A",500:"#FC9D24",600:"#D87C1A",700:"#B55F12",800:"#92440B",900:"#783206",DEFAULT:"#FC9D24"},secondary:{50:"#FDF3D7",100:"#FDF3D7",200:"#FCE3B0",300:"#F6CD87",400:"#EEB667",500:"#E49438",600:"#C47428",700:"#A4581C",800:"#843E11",900:"#6D2D0A",DEFAULT:"#E49438"},focus:"#FC9D24"},r={primary:{50:"#127121",100:"#1F8927",200:"#31AA31",300:"#51CB47",400:"#77ED62",500:"#77ED62",600:"#A1F488",700:"#BCF9A1",800:"#D8FDC1",900:"#EEFEE0",DEFAULT:"#77ED62"},secondary:{50:"#05331B",100:"#05331B",200:"#14663C",300:"#14663C",400:"#2E9962",500:"#2E9962",600:"#52CC8D",700:"#52CC8D",800:"#80FFBD",900:"#80FFBD",DEFAULT:"#2E9962"},focus:"#40992E"},l=[{name:"Blue Purple",value:"bluePurple"},{name:"Orange",value:"orange"},{name:"Green",value:"green"}];var i={"light-bluePurple-theme":{extend:"light",colors:a,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-bluePurple-theme":{extend:"dark",colors:a,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"light-orange-theme":{extend:"light",colors:s},"dark-orange-theme":{extend:"dark",colors:s},"light-green-theme":{extend:"light",colors:r,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-green-theme":{extend:"dark",colors:r,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}}}},83455:function(e,t,n){"use strict";var a=n(24909);t.Z=e=>a.Z.get(e).then(e=>e.data)},46736:function(e,t,n){"use strict";n.d(t,{hY:function(){return i},jc:function(){return o}});var a=n(96509),s=n(17054),r=n(83455),l=n(24909);let i=async()=>{await (0,l.Z)("/api/auth/logout"),await (0,s.JG)("/api/auth"),a.Am.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,n=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),r=setInterval(async()=>{n&&n.closed&&(await (0,s.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(r))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:n}=(0,s.ZP)("/api/auth",r.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:n||!e?null:e.user,admin:n||!e?null:e.admin,masterAdmin:!n&&!!e&&e.masterAdmin,isLoading:t}}},6389:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var a=n(94773),s=n(44208),r=n(45478),l=n(83455),i=n(17054);let o=(0,r.Ue)(e=>({modules:[],setModules:t=>e(()=>({modules:t,isLoading:!1})),isLoading:!0,setLoading:t=>e(()=>({isLoading:t}))}));t.Z=()=>{let{data:e,isLoading:t}=(0,i.ZP)("/api/modules",l.Z),n=o(e=>e.setModules),r=o(e=>e.setLoading);return(0,s.useEffect)(()=>{e&&(n(e),r(!1))},[e,t,n,r]),(0,a.jsx)(a.Fragment,{})}},33070:function(e,t,n){"use strict";n.d(t,{Hf:function(){return l},Rb:function(){return o}});var a=n(83305),s=n(68668);let r=s.z.object({id:s.z.string().optional().default(""),title:s.z.string().default(""),link:s.z.string().default(""),target:s.z.enum(["_blank","_self"]).default("_self"),type:s.z.enum(["LINK","CUSTOM_PAGE"]).default("LINK"),placement:s.z.enum(["HEADER","SIDEBAR"]).default("SIDEBAR"),contentHtml:s.z.string().default("<h1>Title</h1>"),includeBanner:s.z.boolean().default(!0)}),l=r.parse({id:Math.random().toString(36).substring(7)}),i=s.z.object({title:s.z.string().optional().default("CSS-Panel"),description:s.z.string().optional().default(""),keywords:s.z.string().optional().default("gaming, cs2"),favicon:s.z.string().optional().default(""),theme:s.z.string().default(a.M[0].value),logo:s.z.string().optional().default(""),logoHeight:s.z.string().optional().default("40"),debugMode:s.z.boolean().optional().default(!1),headerImage:s.z.string().optional().default("https://prosettings.net/wp-content/uploads/inferno-in-cs2-2.jpg"),headerCodeHTML:s.z.string().optional().default(""),headerCodeCSS:s.z.string().optional().default(""),headerHeight:s.z.string().optional().default("288"),earlyAccessFeatures:s.z.boolean().optional().default(!1),serversGrid:s.z.boolean().optional().default(!0),showAdminName:s.z.boolean().optional().default(!1),language:s.z.string().optional().default("en"),discordWebhook:s.z.string().optional().default(""),discordWebhookName:s.z.string().optional().default("CSS-Panel"),discordWebhookAvatar:s.z.string().optional().default("https://cdn.discordapp.com/icons/1202020941459357776/65f3acf53dd2d06a8e08e8f82276f7ef.webp"),debugDiscordWebhook:s.z.string().optional().default(""),errorsDiscordWebhook:s.z.string().optional().default(""),adminActionsDiscordWebhook:s.z.string().optional().default(""),adminCommandsDiscordWebhook:s.z.string().optional().default(""),customPages:s.z.array(r).optional().default([]),modules:s.z.array(s.z.object({identifier:s.z.string(),enabled:s.z.boolean(),settings:s.z.record(s.z.any()).optional().default({})})).optional().default([])});i.partial();let o=()=>i.parse({})},34851:function(e,t,n){"use strict";var a=n(33070);let s=(0,n(45478).Ue)(e=>({settings:(0,a.Rb)(),setSettings:t=>e({settings:t})}));t.Z=s},3716:function(){}},function(e){e.O(0,[2954,4466,2349,4166,7923,6509,6634,9596,7970,3080,9178,3746,8668,79,9869,5848,6812,4694,2162,2463,5147,803,1744],function(){return e(e.s=88892)}),_N_E=e.O()}]);