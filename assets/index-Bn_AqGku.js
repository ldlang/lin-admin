import{bh as ke,K as p,cf as je,az as Fe,r as V,ae as G,ai as J,b8 as Ue,a0 as We,aP as we,U as _e,b2 as Ye,V as ae,ay as Se,a4 as Xe,a1 as oe,b as Pe,a_ as Ge,I as Je,J as Ce,bg as Ze,cs as qe,ct as Qe,a3 as et,aE as tt,aF as P,C as at,ak as ot,o as v,c as S,n as m,F as ne,M as y,f as t,L as _,j as N,k as I,w as A,l as Y,H as L,am as se,e as nt,Y as st,a8 as lt,a5 as it,G as X,O as rt,N as ut,aD as Ie,P as ct}from"./index-dFPmeL4W.js";import{U as le}from"./event-BB_Ol6Sd.js";import{b as dt,c as pt,a as ft,u as vt}from"./use-form-item-DPjt9aXn.js";import{d as Ee}from"./error-Cq9Fpw4b.js";const mt=()=>ke&&/firefox/i.test(window.navigator.userAgent),ht=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),yt=["class","style"],gt=/^on[A-Z]/,bt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(yt)),i=Fe();return i?p(()=>{var r;return je(Object.entries((r=i.proxy)==null?void 0:r.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&gt.test(c))))}):p(()=>({}))};function xt(o){const f=V();function u(){if(o.value==null)return;const{selectionStart:i,selectionEnd:r,value:c}=o.value;if(i==null||r==null)return;const g=c.slice(0,Math.max(0,i)),d=c.slice(Math.max(0,r));f.value={selectionStart:i,selectionEnd:r,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:i}=o.value,{beforeTxt:r,afterTxt:c,selectionStart:g}=f.value;if(r==null||c==null||g==null)return;let d=i.length;if(i.endsWith(c))d=i.length-c.length;else if(i.startsWith(r))d=r.length;else{const x=r[g-1],w=i.indexOf(x,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function wt(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const i=Fe(),{emit:r}=i,c=G(),g=V(!1),d=l=>{g.value||(g.value=!0,r("focus",l),f==null||f())},x=l=>{var T;We(u)&&u(l)||l.relatedTarget&&((T=c.value)!=null&&T.contains(l.relatedTarget))||(g.value=!1,r("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return J(c,l=>{l&&l.setAttribute("tabindex","-1")}),Ue(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:x}}let b;const St=`
  height:0 !important;
  visibility:hidden !important;
  ${mt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),i=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:u}}function ze(o,f=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:i,borderSize:r,boxSizing:c,contextStyle:g}=It(o);b.setAttribute("style",`${g};${St}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const x={};c==="border-box"?d=d+r:c==="content-box"&&(d=d-i),b.value="";const w=b.scrollHeight-i;if(we(f)){let l=w*f;c==="border-box"&&(l=l+i+r),d=Math.max(l,d),x.minHeight=`${l}px`}if(we(u)){let l=w*u;c==="border-box"&&(l=l+i+r),d=Math.min(l,d)}return x.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const Et=_e({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>Xe({})},autofocus:{type:Boolean,default:!1}}),zt={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},kt=["role"],Ft=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Pt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Nt=Pe({name:"ElInput",inheritAttrs:!1}),Vt=Pe({...Nt,props:Et,emits:zt,setup(o,{expose:f,emit:u}){const a=o,i=Ge(),r=Je(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?re.b():s.b(),s.m(ie.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:r.prepend||r.append,[s.bm("group","append")]:r.append,[s.bm("group","prepend")]:r.prepend,[s.m("prefix")]:r.prefix||a.prefixIcon,[s.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:U.value&&Q.value,[s.b("hidden")]:a.type==="hidden"},i.class]),d=p(()=>[s.e("wrapper"),s.is("focus",q.value)]),x=bt({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:l}=dt(),{inputId:T}=pt(a,{formItemContext:l}),ie=ft(),z=vt(),s=Ce("input"),re=Ce("textarea"),O=G(),C=G(),Z=V(!1),R=V(!1),H=V(!1),ue=V(),D=G(a.inputStyle),k=p(()=>O.value||C.value),{wrapperRef:Ne,isFocused:q,handleFocus:K,handleBlur:j}=wt(k,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ee()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(l==null?void 0:l.validateState)||""),de=p(()=>B.value&&Ze[B.value]),Ve=p(()=>H.value?qe:Qe),Te=p(()=>[i.style]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=p(()=>et(a.modelValue)?"":String(a.modelValue)),U=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(q.value||Z.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||q.value)),F=p(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!F.value&&ee.value>Number(a.maxlength)),Be=p(()=>!!r.suffix||!!a.suffixIcon||U.value||a.showPassword||F.value||!!B.value&&ce.value),[Me,$e]=xt(O);tt(C,e=>{if(Ae(),!F.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const M=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const h=Ie(n)?n.minRows:void 0,W=Ie(n)?n.maxRows:void 0,xe=ze(C.value,h,W);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Ae=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(M),$=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Me();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){$();return}u(le,n),u("input",n),await P(),$(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,W=h[h.length-1]||"";R.value=!ht(W)},he=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},Le=()=>{H.value=!H.value,ye()},ye=async()=>{var e;await P(),(e=k.value)==null||e.focus()},Oe=()=>{var e;return(e=k.value)==null?void 0:e.blur()},He=e=>{Z.value=!1,u("mouseleave",e)},De=e=>{Z.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},Ke=()=>{var e;(e=k.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return J(()=>a.modelValue,()=>{var e;P(()=>M()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ee()))}),J(E,()=>$()),J(()=>a.type,async()=>{await P(),$(),M()}),at(()=>{!a.formatter&&a.parser,$(),P(M)}),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:ot(a,"autosize"),focus:ye,blur:Oe,select:Ke,clear:be,resizeTextarea:M}),(e,n)=>(v(),S("div",se(t(c),{class:t(g),style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:He}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(t(s).be("group","prepend"))},[_(e.$slots,"prepend")],2)):m("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Ne,class:y(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(L),{key:0,class:y(t(s).e("icon"))},{default:A(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),N("input",se({id:t(T),ref_key:"input",ref:O,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Ft),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(U)||!t(Q)||!t(F)?(v(),S(ne,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(L),{key:0,class:y(t(s).e("icon"))},{default:A(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(U)?(v(),I(t(L),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:lt(t(it),["prevent"]),onClick:be},{default:A(()=>[nt(t(st))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),I(t(L),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Le},{default:A(()=>[(v(),I(Y(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(F)?(v(),S("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},X(t(ee))+" / "+X(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t(L),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:A(()=>[(v(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(t(s).be("group","append"))},[_(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),N("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:t(re).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Pt),t(F)?(v(),S("span",{key:0,style:rt(ue.value),class:y(t(s).e("count"))},X(t(ee))+" / "+X(e.maxlength),7)):m("v-if",!0)],64))],16,kt))}});var Tt=ut(Vt,[["__file","input.vue"]]);const Lt=ct(Tt);export{Lt as E,wt as a,ht as i,bt as u};
