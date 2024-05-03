import{bc as be,aF as $,ap as Ce,N as he,b as Ee,H as Be,c2 as we,c3 as Me,K as C,r as M,a as Se,c4 as Q,ai as x,C as ke,D as Te,A as Ie,S,o as f,k as g,w as m,aw as N,e as h,j as p,M as r,O as _,a8 as z,c as U,l as D,n as k,G as O,a7 as P,L as Ae,p as K,ax as j,T as Oe,bh as $e,a1 as le,aI as re,bY as ie,bX as ee,aD as Re,aO as Ve,a0 as ne,b$ as oe}from"./index-dFPmeL4W.js";import{E as Le}from"./el-button-B88BDSFy.js";import{E as ze}from"./index-Bn_AqGku.js";import{E as De,a as Pe,u as Fe}from"./el-overlay-m8jjUE04.js";import{o as se}from"./aria-nkjrUMQ-.js";import{E as He}from"./focus-trap-DAb4nyX_.js";import{u as te}from"./constants-UV50Wn-e.js";import{u as Ne}from"./index-KkLJGgAP.js";const Ue=e=>["",...be].includes(e),q="_trap-focus-children",E=[],ae=e=>{if(E.length===0)return;const n=E[E.length-1][q];if(n.length>0&&e.code===Ce.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,i=e.target===n[0],l=e.target===n[n.length-1];i&&a&&(e.preventDefault(),n[n.length-1].focus()),l&&!a&&(e.preventDefault(),n[0].focus())}},Ke={beforeMount(e){e[q]=se(e),E.push(e),E.length<=1&&document.addEventListener("keydown",ae)},updated(e){$(()=>{e[q]=se(e)})},unmounted(){E.shift(),E.length===0&&document.removeEventListener("keydown",ae)}},je=Ee({name:"ElMessageBox",directives:{TrapFocus:Ke},components:{ElButton:Le,ElFocusTrap:He,ElInput:ze,ElOverlay:De,ElIcon:Be,...we},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Ue},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:a,zIndex:i,ns:l,size:s}=Me("message-box",C(()=>e.buttonSize)),{t:d}=a,{nextZIndex:c}=i,b=M(!1),o=Se({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:c()}),F=C(()=>{const t=o.type;return{[l.bm("icon",t)]:t&&Q[t]}}),H=te(),u=te(),ue=C(()=>o.icon||Q[o.type]||""),de=C(()=>!!o.message),B=M(),G=M(),I=M(),V=M(),X=M(),fe=C(()=>o.confirmButtonClass);x(()=>o.inputValue,async t=>{await $(),e.boxType==="prompt"&&t!==null&&Y()},{immediate:!0}),x(()=>b.value,t=>{var v,w;t&&(e.boxType!=="prompt"&&(o.autofocus?I.value=(w=(v=X.value)==null?void 0:v.$el)!=null?w:B.value:I.value=B.value),o.zIndex=c()),e.boxType==="prompt"&&(t?$().then(()=>{var J;V.value&&V.value.$el&&(o.autofocus?I.value=(J=ge())!=null?J:B.value:I.value=B.value)}):(o.editorErrorMessage="",o.validateError=!1))});const ce=C(()=>e.draggable),me=C(()=>e.overflow);Ne(B,G,ce,me),ke(async()=>{await $(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),Te(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){b.value&&(b.value=!1,$(()=>{o.action&&n("action",o.action)}))}const W=()=>{e.closeOnClickModal&&L(o.distinguishCancelAndClose?"close":"cancel")},pe=Fe(W),ve=t=>{if(o.inputType!=="textarea")return t.preventDefault(),L("confirm")},L=t=>{var v;e.boxType==="prompt"&&t==="confirm"&&!Y()||(o.action=t,o.beforeClose?(v=o.beforeClose)==null||v.call(o,t,o,A):A())},Y=()=>{if(e.boxType==="prompt"){const t=o.inputPattern;if(t&&!t.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||d("el.messagebox.error"),o.validateError=!0,!1;const v=o.inputValidator;if(typeof v=="function"){const w=v(o.inputValue);if(w===!1)return o.editorErrorMessage=o.inputErrorMessage||d("el.messagebox.error"),o.validateError=!0,!1;if(typeof w=="string")return o.editorErrorMessage=w,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},ge=()=>{const t=V.value.$refs;return t.input||t.textarea},Z=()=>{L("close")},ye=()=>{e.closeOnPressEscape&&Z()};return e.lockScroll&&Pe(b),{...Ie(o),ns:l,overlayEvent:pe,visible:b,hasMessage:de,typeClass:F,contentId:H,inputId:u,btnSize:s,iconComponent:ue,confirmButtonClasses:fe,rootRef:B,focusStartRef:I,headerRef:G,inputRef:V,confirmRef:X,doClose:A,handleClose:Z,onCloseRequested:ye,handleWrapperClick:W,handleInputEnter:ve,handleAction:L,t:d}}}),qe=["aria-label","aria-describedby"],Ge=["aria-label"],Xe=["id"];function We(e,n,a,i,l,s){const d=S("el-icon"),c=S("close"),b=S("el-input"),o=S("el-button"),F=S("el-focus-trap"),H=S("el-overlay");return f(),g(Oe,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[N(h(H,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[h(F,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:_(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=z(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),U("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[p("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),g(D(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),p("span",null,O(e.title),1)],2),e.showClose?(f(),U("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=P(z(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[h(d,{class:r(e.ns.e("close"))},{default:m(()=>[h(c)]),_:1},8,["class"])],42,Ge)):k("v-if",!0)],2)):k("v-if",!0),p("div",{id:e.contentId,class:r(e.ns.e("content"))},[p("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),g(D(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),e.hasMessage?(f(),U("div",{key:1,class:r(e.ns.e("message"))},[Ae(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),g(D(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),g(D(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[K(O(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):k("v-if",!0)],2),N(p("div",{class:r(e.ns.e("input"))},[h(b,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:P(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:r(e.ns.e("errormsg")),style:_({visibility:e.editorErrorMessage?"visible":"hidden"})},O(e.editorErrorMessage),7)],2),[[j,e.showInput]])],10,Xe),p("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),g(o,{key:0,loading:e.cancelButtonLoading,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=P(z(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[K(O(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):k("v-if",!0),N(h(o,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=P(z(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[K(O(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[j,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,qe)]),_:3},8,["z-index","overlay-class","mask"]),[[j,e.visible]])]),_:3})}var Ye=he(je,[["render",We],["__file","index.vue"]]);const R=new Map,Ze=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),oe(e.appendTo)&&(n=e.appendTo),oe(n)||(n=document.body)),n},Je=(e,n,a=null)=>{const i=h(Ye,e,ne(e.message)||re(e.message)?{default:ne(e.message)?e.message:()=>e.message}:null);return i.appContext=a,ie(i,n),Ze(e).appendChild(n.firstElementChild),i.component},Qe=()=>document.createElement("div"),xe=(e,n)=>{const a=Qe();e.onVanish=()=>{ie(null,a),R.delete(l)},e.onAction=s=>{const d=R.get(l);let c;e.showInput?c={value:l.inputValue,action:s}:c=s,e.callback?e.callback(c,i.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(c)};const i=Je(e,a,n),l=i.proxy;for(const s in e)ee(e,s)&&!ee(l.$props,s)&&(l[s]=e[s]);return l.visible=!0,l};function T(e,n=null){if(!$e)return Promise.reject();let a;return le(e)||re(e)?e={message:e}:a=e.callback,new Promise((i,l)=>{const s=xe(e,n??T._context);R.set(s,{options:e,callback:a,resolve:i,reject:l})})}const _e=["alert","confirm","prompt"],en={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};_e.forEach(e=>{T[e]=nn(e)});function nn(e){return(n,a,i,l)=>{let s="";return Re(a)?(i=a,s=""):Ve(a)?s="":s=a,T(Object.assign({title:s,message:n,type:"",...en[e]},i,{boxType:e}),l)}}T.close=()=>{R.forEach((e,n)=>{n.doClose()}),R.clear()};T._context=null;const y=T;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const fn=y;export{fn as E};
