import"./index-Djzf4RzS.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-l0sNRNKZ.js";/* empty css                 *//* empty css                   */import{l as T}from"./lodash-Bwfjn3gr.js";import{d as h,h as i,k as g,o as c,b as V,w as t,e as o,Q as _,ay as z,u as a,G as b,a1 as D,a2 as F,T as I,S as L,az as N,aA as R}from"./element-plus-DBjmp5RF.js";import"./crypto-js-DzGpDWq6.js";const Y=h({__name:"crud-form",emits:["submitOk"],setup(j,{expose:v,emit:k}){const w=k,n=i(!1),m=i(!1),p=i(),l=g({id:0,name:"",age:0,gender:"",email:"",phone:"",address:""}),C=g({name:[{required:!0,message:"请输入姓名",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}]});function E(s){n.value=!0,T(s)||Object.assign(l,s)}function U(s){s()}const q=()=>{n.value=!1},y=async()=>{var s;await((s=p.value)==null?void 0:s.validate(e=>{if(e)m.value=!0,setTimeout(()=>{m.value=!1,n.value=!1,b.success("提交成功！"),w("submitOk")},1e3);else return b.error("验证不通过！"),!1}))};return v({open:E}),(s,e)=>{const u=D,d=F,x=I,f=L,B=N,O=R;return c(),V(B,{modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=r=>n.value=r),title:"编辑",size:"30%","append-to-body":"","close-on-click-modal":!1,"before-close":U},{footer:t(()=>[o(f,{onClick:q},{default:t(()=>[_("取 消")]),_:1}),o(f,{type:"primary",loading:m.value,onClick:y},{default:t(()=>[_("提 交")]),_:1},8,["loading"])]),default:t(()=>[z((c(),V(x,{model:a(l),ref_key:"formRef",ref:p,"label-width":"auto",rules:a(C)},{default:t(()=>[o(d,{label:"姓名",prop:"name"},{default:t(()=>[o(u,{modelValue:a(l).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(l).name=r),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),o(d,{label:"年龄",prop:"age"},{default:t(()=>[o(u,{modelValue:a(l).age,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).age=r),placeholder:"请输入年龄"},null,8,["modelValue"])]),_:1}),o(d,{label:"性别",prop:"gender"},{default:t(()=>[o(u,{modelValue:a(l).gender,"onUpdate:modelValue":e[2]||(e[2]=r=>a(l).gender=r),placeholder:"请输入性别"},null,8,["modelValue"])]),_:1}),o(d,{label:"邮箱",prop:"email"},{default:t(()=>[o(u,{modelValue:a(l).email,"onUpdate:modelValue":e[3]||(e[3]=r=>a(l).email=r),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),o(d,{label:"手机号",prop:"phone"},{default:t(()=>[o(u,{modelValue:a(l).phone,"onUpdate:modelValue":e[4]||(e[4]=r=>a(l).phone=r),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),o(d,{label:"地址",prop:"address"},{default:t(()=>[o(u,{modelValue:a(l).address,"onUpdate:modelValue":e[5]||(e[5]=r=>a(l).address=r),placeholder:"请输入地址"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[O,m.value]])]),_:1},8,["modelValue"])}}});export{Y as default};
