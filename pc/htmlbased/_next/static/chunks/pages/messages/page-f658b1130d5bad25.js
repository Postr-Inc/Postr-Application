(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{5821:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/messages/page",function(){return a(651)}])},651:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var t=a(5893),r=a(9866),l=a(7294),n=a(2545),o=a(8565);function d(e){let s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;var t=this;return function(){for(var r=arguments.length,l=Array(r),n=0;n<r;n++)l[n]=arguments[n];clearTimeout(s),s=setTimeout(()=>{e.apply(t,l)},a)}}function c(e){let[s,a]=(0,l.useState)(null),[c,i]=(0,l.useState)([]),[h,m]=(0,l.useState)(!1),[x,u]=(0,l.useState)([]),[p,w]=(0,l.useState)(!1),[g,v]=(0,l.useState)(""),[f,j]=(0,l.useState)(""),[b,N]=(0,l.useState)([]);(0,l.useLayoutEffect)(()=>{if(n.h.cacheStore.get("chats-".concat(n.h.authStore.model().id))){i(JSON.parse(n.h.cacheStore.get("chats-".concat(n.h.authStore.model().id))).value);return}n.h.list({collection:"chats",cacheKey:"chats-".concat(n.h.authStore.model().id),cacheTime:36e5,filter:'members ~"'.concat(n.h.authStore.model().id,'"'),limit:100,page:0,expand:["members","messages","messages.owner"]}).then(e=>{console.log(e),n.h.cacheStore.set("chats-".concat(n.h.authStore.model().id),e.items,36e5),i(e.items)})},[]);let k=d(e=>{n.h.list({collection:"users",cacheKey:"search-".concat(e),cacheTime:36e5,filter:'username ~"'.concat(e,'" && id != "').concat(n.h.authStore.model().id,'"'),limit:100,page:0,expand:["followers","following"]}).then(e=>{console.log(e),u(e.items)})},300);(0,l.useEffect)(()=>{let e=e=>{w(!0)},s=()=>{w(!1),k(g)};return document.getElementById("search-people").addEventListener("keydown",e),document.getElementById("search-people").addEventListener("keyup",s),()=>{document.getElementById("search-people")&&(document.getElementById("search-people").removeEventListener("keydown",e),document.getElementById("search-people").removeEventListener("keyup",s))}},[g]),s&&setTimeout(()=>{document.getElementById("message-container").scrollTo({top:1e6,behavior:"smooth"})},1e3),s&&!n.h.isSubscribed("chat-".concat(s.id))&&n.h.subscribe({event:"*",collection:"chats",userId:n.h.authStore.model().id},e=>{if(e.record.chat===s.id&&e.record.owner!==n.h.authStore.model().id){var a;N([...b,e.record]),s.messages.push(e.record.id),s.expand.hasOwnProperty("messages")?s.expand.messages.push(e.record):s.expand.messages=[e.record],n.h.cacheStore.set("chat-".concat(n.h.authStore.model().id,"-").concat(s.id),s,36e5),null===(a=document.getElementById("message-".concat(e.record.id)))||void 0===a||a.scrollTo({top:1e6,behavior:"smooth"})}});let S=d(()=>{N([...b,{content:f,owner:n.h.authStore.model().id,expand:{owner:n.h.authStore.model()}}]);let e=n.h.authStore.model();delete e.email,delete e.token,n.h.create({collection:"messages",expand:["chat"],cacheKey:"message-".concat(n.h.authStore.model().id,"-").concat(s.id),record:{content:f,expand:{owner:e,chat:s},chat:s.id,owner:n.h.authStore.model().id}}).then(e=>{n.h.update({collection:"chats",id:s.id,expand:["members","messages"],cacheKey:"chat-".concat(n.h.authStore.model().id,"-").concat(s.id),record:{messages:[...s.messages,e.id]}}),s.messages.push(e.id),s.expand.messages.push(e),n.h.cacheStore.set("chat-".concat(n.h.authStore.model().id,"-").concat(s.id),s,36e5)})},300);return(0,l.useEffect)(()=>{},[f]),(0,t.jsxs)(r.Z,{...e,hideRight:!0,hideBottomNav:s,children:[(0,t.jsxs)("div",{className:"flex  xl:w-[62.5vw] lg:w-[62.5vw] md:w-[62.5vw]",children:[(0,t.jsxs)("div",{className:"      text-md   \n         relative  w-full p-2\n          \n         ",children:[(0,t.jsx)("div",{className:"sm:hidden",children:(0,t.jsxs)("div",{className:"flex justify-between mt-2  p-2  w-full",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:"Messages"}),(0,t.jsxs)("span",{className:"flex gap-2",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})]}),(0,t.jsx)("svg",{onClick:()=>{document.getElementById("createChat").showModal()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7 cursor-pointer",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"})})]})]})}),(0,t.jsx)("div",{className:"xl:hidden lg:hidden md:hidden",children:s?(0,t.jsxs)("div",{className:"flex justify-between mt-2   p-2  w-full",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-7 h-7",onClick:()=>{a(null)},children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z",clipRule:"evenodd"})}),(0,t.jsxs)("div",{className:"flex flex-col  hero ",children:[(0,t.jsx)("img",{src:n.h.cdn.url({collection:"users",id:s.expand.members[0].id===n.h.authStore.model().id?s.expand.members[1].id:s.expand.members[0].id,file:s.expand.members[0].avatar===n.h.authStore.model().avatar?s.expand.members[1].avatar:s.expand.members[0].avatar}),className:"w-7 h-7 rounded"}),(0,t.jsx)("h1",{className:"text-lg font-bold",children:s?s.expand.members[0].username===n.h.authStore.model().username?s.expand.members[1].username:s.expand.members[0].username:"Messages"}),(0,t.jsx)("p",{className:"text-sm",children:s.expand.members[0].username===n.h.authStore.model().username?s.expand.members[1].bio:s.expand.members[0].bio})]}),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})]})]}):(0,t.jsxs)("div",{className:"flex justify-between mt-2  p-2  w-full",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:s?s.expand.members[0].username===n.h.authStore.model().username?s.expand.members[1].username:s.expand.members[0].username:"Messages"}),(0,t.jsxs)("span",{className:"flex gap-2",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})]}),(0,t.jsx)("svg",{onClick:()=>{document.getElementById("createChat").showModal()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"})})]})]})}),(0,t.jsx)("div",{className:"sm:hidden",children:c.length>0?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-5 mt-2",children:[(0,t.jsx)("input",{type:"text",id:"search",className:"w-full p-3 rounded-full",placeholder:"Search Direct Messages"}),(0,t.jsx)("br",{}),c.map(e=>(0,t.jsxs)("div",{onClick:()=>{e.expand.hasOwnProperty("messages")?N(e.expand.messages):N([]),a(e)},className:"flex flex-row gap-2 p-3 mt-2 first-letter:\n                       \n                        ".concat("dark"===theme?"hover:bg-[#313131]":"hover:bg-[#f9f9f9]","\n                            cursor-pointer"),children:[(0,t.jsx)("img",{src:n.h.cdn.url({collection:"users",id:e.expand.members[0].id===n.h.authStore.model().id?e.expand.members[1].id:e.expand.members[0].id,file:e.expand.members[0].avatar===n.h.authStore.model().avatar?e.expand.members[1].avatar:e.expand.members[0].avatar}),className:"w-10 h-10 rounded-full"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"font-bold",children:e.expand.members[0].username===n.h.authStore.model().username?e.expand.members[1].username:e.expand.members[0].username}),(0,t.jsx)("p",{className:"text-sm",children:e.expand.messages&&e.expand.messages.length>0?e.expand.messages[e.expand.messages.length-1].content:"Start a conversation"})]})]},e.id))]})}):(0,t.jsxs)("div",{className:"mt-12 p-2 sm:hidden",children:[(0,t.jsx)("h1",{className:"text-2xl font-extrabold sm:h",children:"Welcome to your mailbox!"}),(0,t.jsx)("p",{className:"text-sm",children:"Drop some memes, share posts, and chat with friends with private conversations"}),(0,t.jsx)("button",{onClick:()=>{document.getElementById("createChat").showModal()},className:"bg-[#1a4173] text-white rounded-full p-5 w-fit mt-5",children:"Start chatting"})]})})]}),(0,t.jsx)("div",{className:" sm:hidden     text-md   \n         relative  w-full  relative\n         ".concat("dark"===theme?"xl:border xl:border-[#121212]":"border border-[#e5e7eb]","\n         "),children:(0,t.jsx)("div",{className:"flex justify-between mt-2   p-2  w-full",children:s?(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("h1",{children:s.expand.members[0].username===n.h.authStore.model().username?s.expand.members[1].username:s.expand.members[0].username}),(0,t.jsx)("div",{id:"message-container",className:"scroll",style:{overflowX:"scroll",width:"100%"},children:b.length>0?b.map(e=>e.owner===n.h.authStore.model().id?(0,t.jsxs)("div",{id:"message-".concat(e.id),className:"chat chat-start",children:[(0,t.jsx)("div",{className:"chat-image avatar",children:(0,t.jsx)("div",{className:"w-10 rounded-full",children:(0,t.jsx)("img",{alt:e.expand.owner.username,src:n.h.cdn.url({collection:"users",id:e.owner,file:e.expand.owner.avatar})})})}),(0,t.jsxs)("div",{className:"chat-header mx-5",children:[e.expand.owner.username,(0,t.jsx)("time",{className:"text-xs opacity-50 mx-5",children:new Date(e.created).toLocaleTimeString()})]}),(0,t.jsx)("div",{className:"chat-bubble rounded-full",children:e.content}),(0,t.jsx)("div",{className:"chat-footer opacity-50",children:"Delivered"})]}):(0,t.jsxs)("div",{id:"message-".concat(e.id),className:"chat chat-end w-full",children:[(0,t.jsx)("div",{className:"chat-image avatar",children:(0,t.jsx)("div",{className:"w-10 rounded-full",children:(0,t.jsx)("img",{alt:e.expand.owner.username,src:n.h.cdn.url({collection:"users",id:e.owner,file:e.expand.owner.avatar})})})}),(0,t.jsxs)("div",{className:"chat-header",children:[e.expand.owner.username,(0,t.jsx)("time",{className:"text-xs opacity-50 mx-5",children:new Date(e.created).toLocaleTimeString()})]}),(0,t.jsx)("div",{className:"chat-bubble rounded-full",children:e.content}),(0,t.jsx)("div",{className:"chat-footer opacity-50",children:"Seen at 12:46"})]})):(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:"Start a conversation"})})}),(0,t.jsx)("div",{className:"\n                 absolute bottom-0  left-0 right-0 p-3\n                    \n                    ",children:(0,t.jsxs)("div",{className:"flex flex-row gap-2 bg-base-200 hero rounded-md p-3",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})}),(0,t.jsx)("span",{contentEditable:!0,className:"w-full focus:outline-none mx-5   overflow-hidden    ",onInput:e=>{j(e.target.innerText)},onFocus:e=>{e.target.innerText=""},children:"Send a message"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",onClick:S,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})})]})})]}):(0,t.jsxs)("div",{className:"justify-center  p-2    flex flex-col mt-[200px]",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:"Select a message "}),(0,t.jsx)("p",{className:"text-sm",children:"Open existing messages, or start a new conversation with a group or individual."}),(0,t.jsx)("button",{onClick:()=>{document.getElementById("createChat").showModal()},className:"bg-[#1a4173] text-white rounded-full p-5 w-fit mt-5",children:"Start a new conversation"})]})})})]}),(0,t.jsx)("div",{className:"xl:hidden lg:hidden md:hidden mt-2 mx-2 border-slate-200 overflow-auto",children:s||c.length>0?s?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"scroll overflow-auto",style:{height:"calc(100vh - 210px)",width:"100%"},children:b.length>0?b.map((e,s)=>e.owner===n.h.authStore.model().id?(0,t.jsxs)("div",{id:"message-".concat(e.id),className:"chat chat-start",style:{...s===b.length-1?{marginBottom:"100px"}:{}},children:[(0,t.jsx)("div",{className:"chat-image avatar",children:(0,t.jsx)("div",{className:"w-10 rounded-full",children:(0,t.jsx)("img",{alt:e.expand.owner.username,src:n.h.cdn.url({collection:"users",id:e.owner,file:e.expand.owner.avatar})})})}),(0,t.jsxs)("div",{className:"chat-header mx-5",children:[e.expand.owner.username,(0,t.jsx)("time",{className:"text-xs opacity-50 mx-5",children:new Date(e.created).toLocaleTimeString()})]}),(0,t.jsx)("div",{className:"chat-bubble border-none rounded-full",children:e.content}),(0,t.jsx)("div",{className:"chat-footer opacity-50",children:"Delivered"})]}):(0,t.jsxs)("div",{id:"message-".concat(e.id),className:"chat chat-end w-full",children:[(0,t.jsx)("div",{className:"chat-image avatar",children:(0,t.jsx)("div",{className:"w-10 rounded-full",children:(0,t.jsx)("img",{alt:e.expand.owner.username,src:n.h.cdn.url({collection:"users",id:e.owner,file:e.expand.owner.avatar})})})}),(0,t.jsxs)("div",{className:"chat-header",children:[e.expand.owner.username,(0,t.jsx)("time",{className:"text-xs opacity-50 mx-5",children:new Date(e.created).toLocaleTimeString()})]}),(0,t.jsx)("div",{className:"chat-bubble rounded-full",children:e.content}),(0,t.jsx)("div",{className:"chat-footer opacity-50",children:"Seen at 12:46"})]})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h1",{children:"Start a conversation"})})}),(0,t.jsx)("div",{className:"\n                 absolute bottom-0  left-0 right-0 p-3\n                    ".concat("dark"===theme?"border border-l-0 border-r-0 border-[#313131]  bg-[#121212]":"  bg-white","\n                    "),children:(0,t.jsxs)("div",{className:"flex flex-row gap-2 bg-base-200 hero rounded-full p-3",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})}),(0,t.jsx)("span",{contentEditable:!0,className:"w-full focus:outline-none mx-5   overflow-hidden    ",onInput:e=>{j(e.target.innerText)},onFocus:e=>{e.target.innerText=""},children:"Send a message"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",onClick:S,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})})]})}),(0,t.jsx)(o.L,{...e})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"text",id:"search",className:"w-full p-3 rounded-full",placeholder:"Search Direct Messages"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"mt-5",children:c.map(e=>(0,t.jsx)("div",{onClick:()=>{a(e),e.expand.hasOwnProperty("messages")?N(e.expand.messages):N([])},className:"flex flex-row gap-2  first-letter:\n                     \n                    ".concat("dark"===theme?"hover:bg-[#11111175]":"hover:bg-[#f9f9f9]","\n                        cursor-pointer"),children:(0,t.jsx)("div",{className:"flex flex-col gap-2",children:(0,t.jsxs)("div",{className:"flex hero",children:[(0,t.jsx)("img",{src:n.h.cdn.url({collection:"users",id:e.expand.members[0].id===n.h.authStore.model().id?e.expand.members[1].id:e.expand.members[0].id,file:e.expand.members[0].avatar===n.h.authStore.model().avatar?e.expand.members[1].avatar:e.expand.members[0].avatar}),className:"w-12 h-12 rounded-full"}),(0,t.jsxs)("div",{className:"flexmt-2 flex-col gap-2",children:[(0,t.jsxs)("p",{className:"text-md  font-bold mx-2 first-letter:uppercase",children:[e.expand.members[0].username===n.h.authStore.model().username?e.expand.members[1].username:e.expand.members[0].username,"\xa0 @ ",e.expand.members[0].username===n.h.authStore.model().username?e.expand.members[1].username:e.expand.members[0].username]}),(0,t.jsx)("p",{className:"text-md mx-2",children:e.expand.messages&&e.expand.messages.length>0?e.expand.messages[e.expand.messages.length-1].content:"Start a conversation"})]})]})})},e.id))})]}):(0,t.jsxs)("div",{className:" flex flex-col gap-2 mt-12 p-5 h-full",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:"Welcome to your MailBox!"}),(0,t.jsx)("p",{className:"text-sm",children:"Drop some memes, share posts, and chat with friends with private conversations"}),(0,t.jsx)("button",{onClick:()=>{document.getElementById("createChat").showModal()},className:"bg-[#1a4173] text-white   rounded-full p-5 w-fit mt-2",children:"Start a new conversation"})]})}),(0,t.jsx)("dialog",{id:"createChat",className:"dialog  \n        ".concat("dark"===theme?"bg-[#121212] text-white":"bg-white text-black","  \n        "),style:{borderRadius:"10px"},children:(0,t.jsxs)("div",{className:"  \n          ".concat("dark"===theme?"bg-[#121212] text-white":"bg-white text-black","\n          xl:w-[500px]  w-screen h-screen xl:h-80 lg:h-80 scroll lg:relative fixed top-0 left-0 xl:relative"),children:[(0,t.jsxs)("div",{className:"flex justify-between hero p-2",children:[h?(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",onClick:()=>{m(!1)},className:"w-7 h-7",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z",clipRule:"evenodd"})}):(0,t.jsx)("svg",{onClick:()=>{document.getElementById("createChat").close()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 cursor-pointer h-7",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})}),h?"Create a group":"Start a new conversation",(0,t.jsx)("button",{className:"btn btn-sm rounded-full",children:"Next"})]}),(0,t.jsxs)("div",{className:"flex hero gap-5 p-2 mt-5\n          ".concat("dark"===theme?"border border-l-0 border-r-0 border-[#313131] border-t-0":"border border-[#eeeeee]","\n          "),children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-7 h-7",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),(0,t.jsx)("div",{id:"search-people",contentEditable:!0,className:"w-full focus:outline-none ",onInput:e=>{v(e.target.innerText)},onFocus:e=>{e.target.innerText=""},onBlur:e=>{e.target.innerText=h?"Add people to group":"Search People"},children:h?"Add people to group":"Search People"})]}),!h&&x.length<1&&(0,t.jsx)("div",{className:"\n                 p-3\n                  ".concat("dark"===theme?"border border-l-0 border-r-0 border-[#313131] border-t-0":"border border-[#eeeeee]","\n                  "),children:(0,t.jsxs)("button",{onClick:()=>{m(!0)},className:"w-full flex  hero gap-2  ",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-7 fill-blue-500 h-7",children:(0,t.jsx)("path",{d:"M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z"})}),"Create a group",(0,t.jsx)("div",{})]})}),(0,t.jsx)("div",{className:"flex flex-col",children:x.map(e=>(0,t.jsxs)("div",{onClick:async()=>{if(!h){let s=await n.h.create({collection:"chats",cacheKey:"chat-".concat(e.id,"-").concat(n.h.authStore.model().id),invalidateCache:["chats-".concat(n.h.authStore.model().id)],expand:["members","messages"],record:{members:[e.id,n.h.authStore.model().id],messages:[],isGroupChat:!1}});a(s),i([...c,s]),n.h.cacheStore.set("chats-".concat(n.h.authStore.model().id),[...c,s])}},className:"flex flex-row gap-2 p-3 first-letter:\n                    ".concat("dark"===theme?"border border-l-0 border-r-0 border-[#313131] border-t-0":"border border-[#cacaca]","\n                    ").concat("dark"===theme?"hover:bg-[#313131]":"hover:bg-[#f9f9f9]","\n                            cursor-pointer"),children:[(0,t.jsx)("img",{src:n.h.cdn.url({collection:"users",id:e.id,file:e.avatar}),className:"w-10 h-10 rounded-full"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"font-bold",children:e.username}),(0,t.jsx)("p",{className:"text-sm",children:e.bio})]})]},e.id))})]})})]})}},3188:function(e,s,a){"use strict";a.d(s,{Z:function(){return l}});var t=a(5893),r=a(2545);function l(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("dialog",{style:{border:"dark"==theme?"1px solid #2d2d2d":"1px solid #f9f9f9",borderRadius:"10px"},id:"logout-modal",className:" rounded-box   modal-middle \n            \n            ",children:(0,t.jsxs)("div",{style:{borderRadius:"10px",border:"dark"==theme?"1px solid #2d2d2d":"1px solid #f9f9f9"},className:"flex p-5 xl:w-[15vw] h-[45vh] xl:h-[35vh] rounded-box items-center \n             ".concat("dark"===theme?"bg-black text-white":"bg-white text-black ","\n            justify-center flex-col mx-auto"),children:[(0,t.jsx)("img",{src:"/icons/icon-blue.jpg",className:"rounded",alt:"postr logo",width:40,height:40}),(0,t.jsx)("p",{className:"font-bold text-xl mt-2",children:"Loging out of Postr?"}),(0,t.jsx)("p",{className:"text-sm mt-2",children:"You can always log back in at any time."}),(0,t.jsx)("button",{className:"btn btn-ghost rounded-full w-full  \n                ".concat("dark"===theme?"bg-white text-black":"bg-black text-white","\n                mt-5"),onClick:()=>{e.swapPage("login"),r.h.authStore.clear()},children:"Logout"}),(0,t.jsx)("form",{method:"dialog",className:"w-full",children:(0,t.jsx)("button",{className:"btn btn-ghost mt-5 w-full rounded-full bg-base-200 ",children:"Cancel"})})]})})})}},9866:function(e,s,a){"use strict";a.d(s,{Z:function(){return d}});var t=a(5893),r=a(230),l=a(7294),n=a(3188),o=a(8565);function d(e){let[s,a]=(0,l.useState)(!1),[d,c]=(0,l.useState)(!1);return(0,t.jsxs)("div",{className:"relative xl:flex xl:w-[35vw]   md:w-[50vw]  xl:p-0  lg:flex   2xl:w-[80vw]   justify-center xl:mx-auto    ",children:[(0,t.jsx)(r.k,{...e}),e.children,s&&!d?(0,t.jsx)("div",{onClick:()=>{c(!0)},className:"toast toast-end sm:toast-center  text-sm sm:hidden xsm:hidden  sm:top-0 ",children:(0,t.jsxs)("div",{className:"alert bg-[#f82d2df5] text-white  hero flex flex-row gap-2   font-bold shadow rounded-box",children:[(0,t.jsx)("span",{children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),(0,t.jsxs)("p",{children:["Poor connection detected.",(0,t.jsx)("p",{children:"Likely due to your internet connection."}),(0,t.jsx)("span",{className:"text-sm",children:" Click to Dismiss"})]})]})}):"",e.hideRight?"":(0,t.jsx)(r.h,{...e}),(0,t.jsx)(n.Z,{...e}),e.hideBottomNav?"":(0,t.jsx)("div",{className:"xl:hidden lg:hidden",children:(0,t.jsx)(o.L,{...e})})]},e.key)}}},function(e){e.O(0,[774,545,355,888,179],function(){return e(e.s=5821)}),_N_E=e.O()}]);