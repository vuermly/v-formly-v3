import{f as _,g as i,r as s,o as b,c as y,e as t,u,i as g,a as V,w as r,b as p,t as w,_ as R}from"./app.5b6a6178.js";const k={class:"btns"},x=_({__name:"RadioView",setup(C){const o=i(null),d={type:"object",properties:{single:{title:"基本",type:"string",ui:{showRequired:!0,component:"radio",options:["同意"]}},multiple:{title:"规格",type:"string",default:"中",ui:{component:"radio",options:["大","中","小"]}},buttonStyle:{title:"按钮样式",type:"string",ui:{component:"radio",options:[{label:"北京",value:"北京"},{label:"上海",value:"上海"},{label:"深圳",value:"深圳",disabled:!0},{label:"广州",value:"广州"}],optionType:"button",buttonStyle:"outline"}},buttonStyleSolid:{title:"按钮样式",type:"string",default:"上海",ui:{component:"radio",options:[{label:"北京",value:"北京"},{label:"上海",value:"上海"},{label:"深圳",value:"深圳",disabled:!0},{label:"广州",value:"广州"}],optionType:"button",buttonStyle:"solid"}},vertical:{title:"竖向排列",type:"string",ui:{component:"radio",options:["大","中","小"],direction:"vertical"}}},required:["single"]};let e=i({});function c(){e.value=null}async function m(){await o.value.validate()&&console.log(w(u(e)))}return(f,l)=>{const v=s("v-formly-v3"),a=s("a-button");return b(),y("div",null,[t(v,{ref_key:"form",ref:o,modelValue:u(e),"onUpdate:modelValue":l[0]||(l[0]=n=>g(e)?e.value=n:e=n),meta:d},null,8,["modelValue"]),V("div",k,[t(a,{type:"danger",onClick:c},{default:r(()=>[p(" 重置 ")]),_:1}),t(a,{type:"primary",onClick:m},{default:r(()=>[p(" 提交 ")]),_:1})])])}}}),B=R(x,[["__file","RadioView.vue"]]);export{B as default};