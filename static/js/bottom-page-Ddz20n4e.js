import{H as l}from"./element-plus-Cj9DeCuo.js";import{d as c,aA as n,aB as u,w as g,o as d,V as f}from"./@vue-DkoY_x4p.js";import"./lodash-es-Bwfjn3gr.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DDWqxRth.js";import"./@element-plus-9WxlJayY.js";import"./dayjs-Bkv9doWi.js";import"./crypto-js-aX0Vy_I7.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";const _=c({__name:"bottom-page",props:n({total:{}},{currentPage:{required:!0},currentPageModifiers:{},pageSize:{required:!0},pageSizeModifiers:{}}),emits:n(["pageChange"],["update:currentPage","update:pageSize"]),setup(p,{emit:s}){const i=s,a=u(p,"currentPage"),r=u(p,"pageSize");return g(r,(t,e)=>{t!==e&&(a.value===1&&i("pageChange",a.value,t),a.value=1)}),g(a,(t,e)=>{t!==e&&i("pageChange",t,r.value)}),(t,e)=>{const m=l;return d(),f(m,{"page-size":r.value,"onUpdate:pageSize":e[0]||(e[0]=o=>r.value=o),"pager-count":9,layout:"prev, pager, next,sizes, jumper, total",total:t.total,"page-sizes":[10,20,30,40,50,100],"current-page":a.value,"onUpdate:currentPage":e[1]||(e[1]=o=>a.value=o)},null,8,["page-size","total","current-page"])}}});export{_ as default};