import{d as u,Q as y,b as n,c as d,F as f,m as x,f as c,p as h,M as b,A as v,q as M,u as i,l as w,o as $,a as I,w as m,e as s,h as S,g as C}from"./app-CcnZhHxB.js";import{c as l}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-1-bd680A.js";import{_ as A,a as P}from"./Layout.vue_vue_type_script_setup_true_lang-Dcbr3Bjr.js";import{u as B,_ as L}from"./onlinePresence-C9FVf_aQ.js";import"./index-oKGWnIIN.js";import"./VisuallyHidden-BSdl-J_Y.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l("MonitorIcon",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=l("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),D={class:"inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800"},E=["onClick"],F={class:"ml-1.5 text-sm"},N=u({__name:"AppearanceTabs",setup(_){const{appearance:o,updateAppearance:t}=y(),a=[{value:"light",Icon:z,label:"Light"},{value:"dark",Icon:q,label:"Dark"},{value:"system",Icon:j,label:"System"}];return(p,r)=>(n(),d("div",D,[(n(),d(f,null,x(a,({value:e,Icon:k,label:g})=>c("button",{key:e,onClick:V=>i(t)(e),class:M(["flex items-center rounded-md px-3.5 py-1.5 transition-colors",i(o)===e?"bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100":"text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60"])},[(n(),h(b(k),{class:"-ml-1 h-4 w-4"})),c("span",F,v(g),1)],10,E)),64))]))}}),T={class:"space-y-6"},J=u({__name:"Appearance",setup(_){const o=[{title:"Настройки внешнего вида",href:"/settings/appearance"}],t=B(),a=C(),p=w();return $(()=>{window.Echo.private(`chat.${a.props.auth.user.id}`).listen("MessageSent",r=>{const e=r.chatMessage;p.info(`${e.sender.name}: ${e.message}`)}),t.joinPresence()}),I(()=>{window.Echo.private(`chat.${a.props.auth.user.id}`).stopListening("MessageSent"),t.leavePresence()}),(r,e)=>(n(),h(L,{breadcrumbs:o},{default:m(()=>[s(i(S),{title:"Настройки внешнего вида"}),s(A,null,{default:m(()=>[c("div",T,[s(P,{title:"Настройки внешнего вида",description:"Обновите настройки внешнего вида вашей учетной записи."}),s(N)])]),_:1})]),_:1}))}});export{J as default};
