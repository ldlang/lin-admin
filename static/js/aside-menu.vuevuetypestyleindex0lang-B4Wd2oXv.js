function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/js/aside-menu-item--qH61ZVv.js","static/js/index-Wqi4mxba.js","static/js/@vue-DkoY_x4p.js","static/js/element-plus-Cj9DeCuo.js","static/js/lodash-es-Bwfjn3gr.js","static/js/async-validator-DKvM95Vc.js","static/js/@vueuse-DDWqxRth.js","static/js/@element-plus-9WxlJayY.js","static/js/dayjs-Bkv9doWi.js","static/js/crypto-js-aX0Vy_I7.js","static/js/@ctrl-r5W6hzzQ.js","static/js/@sxzz-D9SI2xQl.js","static/js/normalize-wheel-es-B6fDCfyv.js","static/css/element-plus-DTEtLsUb.css","static/js/pinia-DyiTWu1K.js","static/js/vue-demi-Dq6ymT-8.js","static/js/pinia-plugin-persistedstate-n2tMOXAx.js","static/js/vue-router-DiZ_DTqd.js","static/js/nprogress-BxCQX5YL.js","static/css/nprogress-BUMXTAWU.css","static/js/axios-Cm0UX6qg.js","static/js/vite-plugin-mock-CJwX79_S.js","static/js/mockjs-lvB3RZtT.js","static/js/path-to-regexp-mOxPpBbg.js","static/css/index-7wRTiojX.css","static/css/normalize-DxkFTwjz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as b,a as k,_ as w}from"./index-Wqi4mxba.js";import{t as E,q as g}from"./element-plus-Cj9DeCuo.js";import{s as c}from"./pinia-DyiTWu1K.js";import{k as L}from"./lodash-es-Bwfjn3gr.js";import{d as M,r as u,w as m,o as y,V as A,U as d,R as p,P as f,u as a,av as B}from"./@vue-DkoY_x4p.js";const q=M({__name:"aside-menu",props:{mode:{default:"vertical"},isNeedChildren:{type:Boolean,default:!0},activeMenu:{}},setup(_){const h=B(()=>w(()=>import("./aside-menu-item--qH61ZVv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),{menuList:t}=c(b()),{isCollapse:l,theme:r}=c(k()),{isNeedChildren:n}=_,i=u([]);m(()=>n,e=>{var o;i.value=e===!1?(o=L(t.value))==null?void 0:o.map(s=>({...s,children:[]})):t.value},{immediate:!0});const v=u(r.value==="colorful"?"light":"dark");return m(r,e=>{v.value=e==="colorful"?"light":"dark"}),(e,o)=>{const s=E,C=g;return y(),A(C,{class:f(["menu-scrollbar",[e.mode==="vertical"?"vertical-height b-r-1 b-r-solid b-r-eee":"horizontal-height"]])},{default:d(()=>[p(s,{class:f({"aside-menu-collapse":a(l)}),"unique-opened":"","default-active":e.activeMenu||e.$route.path,"collapse-transition":"",mode:e.mode,collapse:a(l),style:{"max-width":"50vw"},ellipsis:""},{default:d(()=>[p(a(h),{menuList:a(i),isNeedChildren:n},null,8,["menuList"])]),_:1},8,["class","default-active","mode","collapse"])]),_:1},8,["class"])}}});export{q as _};
