import{f as s,g as o,r as p,o as m,c as i,e as u,_ as c}from"./app.5b6a6178.js";const y=s({__name:"ArrayLayoutView",setup(_){const r=o(null),e=o({}),a={type:"object",properties:{product:{type:"array",title:"产品清单",items:{type:"object",properties:{name:{type:"string",title:"名称"},desc:{type:"string",title:"简介"}}},ui:{grid:{arraySpan:18}}}}};return(f,t)=>{const n=p("v-formly-v3");return m(),i("div",null,[u(n,{ref_key:"form",ref:r,modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),meta:a},null,8,["modelValue"])])}}}),v=c(y,[["__file","ArrayLayoutView.vue"]]);export{v as default};