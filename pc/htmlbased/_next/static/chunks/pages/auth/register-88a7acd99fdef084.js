(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{6659:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return s(5535)}])},5943:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(5893),a=s(8703),l=s(7294);function i(e){let[t,s]=(0,l.useState)(!1),[i,o]=(0,l.useState)(a.h.checkConnection());return(0,l.useEffect)(()=>{s(!0)},[]),(0,l.useEffect)(()=>{i||setTimeout(()=>{o(a.h.checkConnection())},1e3)},[i]),t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" ".concat(e.className,"  flex hero flex-row flex-wrap w-full   gap-5 mx-auto justify-center   xl:w-[30vw]   lg:w-[50vw]"),children:["\xa9 ",new Date().getFullYear()," - Pascal",(0,n.jsxs)("button",{className:"btn-sm btn ",children:["Status: ",i?(0,n.jsx)("span",{className:"text-success",children:"Online"}):(0,n.jsx)("span",{className:"text-error",children:"Offline"})]}),(0,n.jsx)("span",{className:"",children:"Developers"})]})})}},5535:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(5893),a=s(7294),l=s(8703),i=s(5943);function o(e){let[t,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{s(!0)},[]),l.h.authStore.isValid()&&e.swapPage("home");let o=" ";o=window.matchMedia("(prefers-color-scheme: dark)").matches?"darkMode":"lightMode";let[r,c]=(0,a.useState)(!1);async function d(t){await l.h.oauth({provider:t,redirect_uri:"/"}),e.setLastPage("login"),e.swapPage("home")}return(0,a.useEffect)(()=>{r||setTimeout(()=>{c(!1)},1e3)},[r]),(0,n.jsx)(n.Fragment,{children:t?(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:" relative    p-5 w-screen  justify-center flex flex-col gap-5 mx-auto xl:w-[30vw] lg:w-[50vw] ",children:[(0,n.jsxs)("div",{className:" mb-12 flex flex-col gap-5  ",children:[(0,n.jsx)("div",{className:"flex gap-2 hero justify-center",children:(0,n.jsx)("img",{src:"/icons/icon-blue.jpg",alt:"postr logo",width:40,height:40})}),(0,n.jsx)("p",{className:" mt-2 font-bold text-3xl ",children:"Open source is simply better."})]}),(0,n.jsx)("p",{className:"mb-2 font-bold text-2xl ",children:"Join the movement."}),(0,n.jsxs)("button",{onClick:()=>{c(!0),d("google")},className:"darkMode"==o?"btn btn-sm bg-white rounded-full":"btn btn-md w-full   bg-[#121212] text-white hover:bg-[#121212] shadow font-bold  ",children:[(0,n.jsx)("img",{src:"/icons/google.png",width:30,height:30}),"Continue with google ",r?(0,n.jsx)("span",{className:"loading loading-spinner"}):""]}),(0,n.jsxs)("button",{className:"darkMode"==o?"btn btn-sm bg-white rounded-full":"btn btn-md hover:border-2    w-full  text-[#121212]  bg-[#e7e8e7ea]  font-bold  ",children:[(0,n.jsx)("img",{src:"/icons/apple.png",width:30,height:30}),"Continue with  Apple",r?(0,n.jsx)("span",{className:"loading loading-spinner"}):""]}),(0,n.jsxs)("p",{className:"mt-2 mb-2 text-sm",children:["By signing up you are agree to comply with the ",(0,n.jsx)("span",{className:"text-rose-500",children:"Terms"})," and",(0,n.jsx)("span",{className:"text-rose-500",children:" Privacy Policy"}),"."]}),(0,n.jsx)("div",{className:"divider mt-0 h-0 before:opacity-50 after:opacity-50 after:bg-slate-200 before:rounded-full after:rounded-full",children:"Or"}),(0,n.jsx)("button",{onClick:()=>window.location.href="/auth/register",className:"btn  text-white hover:bg-rose-500  bg-rose-500",children:"Create Account"}),(0,n.jsxs)("p",{className:"mt-2 mb-2",children:["Already have an account?  ",(0,n.jsx)("span",{className:"text-rose-500 cursor-pointer",onClick:()=>window.location.href="/auth/login",children:"Login"})]}),(0,n.jsx)(i.Z,{className:"mt-16"})]})}):null})}}},function(e){e.O(0,[774,703,888,179],function(){return e(e.s=6659)}),_N_E=e.O()}]);