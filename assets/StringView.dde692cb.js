import{f as H,g as d,r as i,o as _,c as S,e as t,w as e,b as o,a as m,u as s,l as v,m as y,i as z,t as O,_ as R}from"./app.5b6a6178.js";const j={class:"btns"},q=H({__name:"StringView",setup(E){const u=d(null),x={type:"object",properties:{string1:{title:"基本使用",type:"string",ui:{showRequired:!0,placeholder:"Basic usage",errors:{required:"请输入"},change:r=>console.log(r)}},string2_1:{title:"前缀和后缀",type:"string",ui:{placeholder:"prefix and suffix",prefix:"￥",suffix:"RMB"}},string2_2:{title:"前缀和后缀slot",type:"string",ui:{placeholder:"prefix and suffix with slot",slotNameOfPrefix:"string2_2_prefix",slotNameOfSuffix:"string2_2_suffix"}},string3_1:{title:"前置/后置标签",type:"string",default:"mysite",ui:{placeholder:"addonBefore/addonAfter",addonBefore:"Http://",addonAfter:".com"}},string3_2:{title:"前置/后置标签slot",type:"string",ui:{placeholder:"addonBefore/addonAfter with slot",slotNameOfAddonBefore:"string3_1_addon_before",slotNameOfAddonAfter:"string3_2_addon_after"}},string4:{title:"带移除图标",type:"string",ui:{placeholder:"input with clear icon",allowClear:!0}},string5_1:{title:"大",type:"string",ui:{placeholder:"large size",size:"large",grid:{span:8}}},string5_2:{title:"默认",type:"string",ui:{placeholder:"default size",grid:{span:8}}},string5_3:{title:"小",type:"string",ui:{placeholder:"small size",size:"small",grid:{span:8}}},string6:{title:"密码框",type:"string",ui:{placeholder:"input password",type:"password",slotNameOfSuffix:"string6_suffix"}},string7:{title:"正则表达式",type:"string",pattern:"^[abc]+$",ui:{placeholder:"^[abc]+$",errors:{pattern:"数据格式不正确"}}}},required:["string1"]};let n=d({}),a=d(!1);function h(){n.value=null}async function w(){await u.value.validate()&&console.log(O(s(n)))}function b(){a.value=!a.value;const r=u.value.getContext("/string6");r.ui.value.type=a.value?"text":"password"}return(r,f)=>{const k=i("user-outlined"),B=i("info-circle-outlined"),C=i("a-tooltip"),l=i("a-select-option"),c=i("a-select"),V=i("eye-invisible-outlined"),N=i("eye-outlined"),A=i("v-formly-v3"),p=i("a-button");return _(),S("div",null,[t(A,{ref_key:"form",ref:u,modelValue:s(n),"onUpdate:modelValue":f[0]||(f[0]=g=>z(n)?n.value=g:n=g),meta:x},{string2_2_prefix:e(()=>[t(k)]),string2_2_suffix:e(()=>[t(C,{title:"Extra information"},{default:e(()=>[t(B)]),_:1})]),string3_1_addon_before:e(()=>[t(c,{"default-value":"Http://",style:{width:"90px"}},{default:e(()=>[t(l,{value:"Http://"},{default:e(()=>[o(" Http:// ")]),_:1}),t(l,{value:"Https://"},{default:e(()=>[o(" Https:// ")]),_:1})]),_:1})]),string3_2_addon_after:e(()=>[t(c,{"default-value":".com",style:{width:"80px"}},{default:e(()=>[t(l,{value:".com"},{default:e(()=>[o(" .com ")]),_:1}),t(l,{value:".jp"},{default:e(()=>[o(" .jp ")]),_:1}),t(l,{value:".cn"},{default:e(()=>[o(" .cn ")]),_:1}),t(l,{value:".org"},{default:e(()=>[o(" .org ")]),_:1})]),_:1})]),string6_suffix:e(()=>[m("div",{style:{cursor:"pointer"},onClick:b},[s(a)?y("v-if",!0):(_(),v(V,{key:0})),s(a)?(_(),v(N,{key:1})):y("v-if",!0)])]),_:1},8,["modelValue"]),m("div",j,[t(p,{type:"danger",onClick:h},{default:e(()=>[o(" 重置 ")]),_:1}),t(p,{type:"primary",onClick:w},{default:e(()=>[o(" 提交 ")]),_:1})])])}}}),D=R(q,[["__file","StringView.vue"]]);export{D as default};