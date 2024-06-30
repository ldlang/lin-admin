import{a as g,h as R,i as h,d as D,c as F,u as I,G as L}from"./element-plus-BDoPU4Qm.js";import{l as N}from"./lodash-es-Bwfjn3gr.js";import{d as T,r as i,O as c,o as V,V as _,U as t,R as o,Y as b,a2 as j,u as a}from"./@vue-D3v7N18w.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-ub14C6LV.js";import"./@element-plus-_FnQvSGo.js";import"./dayjs-Bkv9doWi.js";import"./crypto-js-aX0Vy_I7.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";const X=T({__name:"crud-form",emits:["submitOk"],setup(z,{expose:v,emit:k}){const U=k,n=i(!1),m=i(!1),p=i(),l=c({id:0,name:"",age:0,gender:"",email:"",phone:"",address:""}),w=c({name:[{required:!0,message:"请输入姓名",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}]});function C(u){n.value=!0,N(u)||Object.assign(l,u)}function E(u){u()}const q=()=>{n.value=!1},x=async()=>{var u;await((u=p.value)==null?void 0:u.validate(e=>{if(e)m.value=!0,setTimeout(()=>{m.value=!1,n.value=!1,g.success("提交成功！"),U("submitOk")},1e3);else return g.error("验证不通过！"),!1}))};return v({open:C}),(u,e)=>{const s=R,d=h,y=D,f=F,O=I,B=L;return V(),_(O,{modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=r=>n.value=r),title:"编辑",size:"30%","append-to-body":"","close-on-click-modal":!1,"before-close":E},{footer:t(()=>[o(f,{onClick:q},{default:t(()=>[b("取 消")]),_:1}),o(f,{type:"primary",loading:m.value,onClick:x},{default:t(()=>[b("提 交")]),_:1},8,["loading"])]),default:t(()=>[j((V(),_(y,{model:a(l),ref_key:"formRef",ref:p,"label-width":"auto",rules:a(w)},{default:t(()=>[o(d,{label:"姓名",prop:"name"},{default:t(()=>[o(s,{modelValue:a(l).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(l).name=r),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),o(d,{label:"年龄",prop:"age"},{default:t(()=>[o(s,{modelValue:a(l).age,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).age=r),placeholder:"请输入年龄"},null,8,["modelValue"])]),_:1}),o(d,{label:"性别",prop:"gender"},{default:t(()=>[o(s,{modelValue:a(l).gender,"onUpdate:modelValue":e[2]||(e[2]=r=>a(l).gender=r),placeholder:"请输入性别"},null,8,["modelValue"])]),_:1}),o(d,{label:"邮箱",prop:"email"},{default:t(()=>[o(s,{modelValue:a(l).email,"onUpdate:modelValue":e[3]||(e[3]=r=>a(l).email=r),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),o(d,{label:"手机号",prop:"phone"},{default:t(()=>[o(s,{modelValue:a(l).phone,"onUpdate:modelValue":e[4]||(e[4]=r=>a(l).phone=r),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),o(d,{label:"地址",prop:"address"},{default:t(()=>[o(s,{modelValue:a(l).address,"onUpdate:modelValue":e[5]||(e[5]=r=>a(l).address=r),placeholder:"请输入地址"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[B,m.value]])]),_:1},8,["modelValue"])}}});export{X as default};