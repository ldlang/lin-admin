import{U as P,ay as _,V as B,b3 as $,br as Z,r as c,bs as q,K as D,bb as G,ai as x,aF as K,C as j,az as H,bt as J,aA as F,bh as Q}from"./index-dFPmeL4W.js";import{U as T}from"./event-BB_Ol6Sd.js";import{u as I}from"./constants-UV50Wn-e.js";import{a as W}from"./el-overlay-m8jjUE04.js";import{i as X}from"./focus-trap-DAb4nyX_.js";const Y=P({center:Boolean,alignCenter:Boolean,closeIcon:{type:_},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ae={close:()=>!0},se=P({...Y,appendToBody:Boolean,appendTo:{type:B(String),default:"body"},beforeClose:{type:B(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ue={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[T]:e=>$(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ie=(e,a)=>{var m;const l=H().emit,{nextZIndex:b}=Z();let C="";const h=I(),S=I(),n=c(!1),r=c(!1),i=c(!1),d=c((m=e.zIndex)!=null?m:b());let s,u;const A=q("namespace",J),E=D(()=>{const o={},t=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(o[`${t}-margin-top`]=e.top),e.width&&(o[`${t}-width`]=G(e.width))),o}),O=D(()=>e.alignCenter?{display:"flex"}:{});function k(){l("opened")}function w(){l("closed"),l(T,!1),e.destroyOnClose&&(i.value=!1)}function L(){l("close")}function p(){u==null||u(),s==null||s(),e.openDelay&&e.openDelay>0?{stop:s}=F(()=>g(),e.openDelay):g()}function f(){s==null||s(),u==null||u(),e.closeDelay&&e.closeDelay>0?{stop:u}=F(()=>v(),e.closeDelay):v()}function y(){function o(t){t||(r.value=!0,n.value=!1)}e.beforeClose?e.beforeClose(o):f()}function N(){e.closeOnClickModal&&y()}function g(){Q&&(n.value=!0)}function v(){n.value=!1}function z(){l("openAutoFocus")}function M(){l("closeAutoFocus")}function U(o){var t;((t=o.detail)==null?void 0:t.focusReason)==="pointer"&&o.preventDefault()}e.lockScroll&&W(n);function V(){e.closeOnPressEscape&&y()}return x(()=>e.modelValue,o=>{o?(r.value=!1,p(),i.value=!0,d.value=X(e.zIndex)?b():d.value++,K(()=>{l("open"),a.value&&(a.value.scrollTop=0)})):n.value&&f()}),x(()=>e.fullscreen,o=>{a.value&&(o?(C=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=C)}),j(()=>{e.modelValue&&(n.value=!0,i.value=!0,p())}),{afterEnter:k,afterLeave:w,beforeLeave:L,handleClose:y,onModalClick:N,close:f,doClose:v,onOpenAutoFocus:z,onCloseAutoFocus:M,onCloseRequested:V,onFocusoutPrevented:U,titleId:h,bodyId:S,closed:r,style:E,overlayDialogStyle:O,rendered:i,visible:n,zIndex:d}};export{ae as a,se as b,ue as c,Y as d,ie as u};
