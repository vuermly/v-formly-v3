import{f as N,g as n,p as r,q as V,s as A,v as q,x as P,u as e,o as y,c as E,m,a as s,l as j,y as F,e as C,w as x,z as v,T as w,A as R,B as k,h as H,D as G,E as J,_ as K}from"./app.5b6a6178.js";const O={class:"demo-content"},Q=["innerHTML"],X=["innerHTML"],Y=["onClick"],T=new Map,Z=N({__name:"Demo",props:{component:null,info:null,highlightCode:null,code:null},setup(M){const p=M,D=n(null),_=n(null),a=n(null),B=n(null),u=n(null),f=n(!1),d=n(!1),i=n(!1),I=n(0),l=n(!1),h=r(()=>decodeURIComponent(p.info)),S=r(()=>decodeURIComponent(p.highlightCode)),U=r(()=>decodeURIComponent(p.code)),W=r(()=>h.value?e(B).clientHeight+e(u).clientHeight+20:e(u).clientHeight),b=r(()=>e(l)?"成功":"复制");V(d,t=>{e(a)&&(e(a).style.height=t?`${e(W)+1}px`:"0"),t||(i.value=!1,L()),setTimeout(()=>{var o;_.value=document,(o=e(_))==null||o.addEventListener("scroll",g),g()},200)}),A(()=>{q(()=>{I.value=e(u).offsetWidth})}),P(()=>{L()});function z(t){if(!e(l))try{navigator.clipboard.writeText(e(U)),l.value=!0;const o=t.target;clearTimeout(T.get(o));const c=setTimeout(()=>{o.blur(),T.delete(o),l.value=!1},1500);T.set(o,c)}catch{console.error("复制代码失败")}}function g(){if(e(a)){const{top:t,bottom:o,left:c}=e(a).getBoundingClientRect(),$=document.documentElement.clientHeight;i.value=o>$&&t+44<=$,e(D).style.left=e(i)?`${c}px`:"0"}}function L(){var t;(t=e(_))==null||t.removeEventListener("scroll",g)}return(t,o)=>(y(),E("div",{class:v(["demo",{hover:f.value}]),onMouseenter:o[1]||(o[1]=c=>f.value=!0),onMouseleave:o[2]||(o[2]=c=>f.value=!1)},[m(" 组件展示 "),s("div",O,[(y(),j(F(M.component)))]),m(" 代码展示 "),s("div",{ref_key:"codeWrapRef",ref:a,class:"demo-show"},[e(h)?(y(),E("div",{key:0,ref_key:"descRef",ref:B,class:"demo-show_desc",innerHTML:e(h)},null,8,Q)):m("v-if",!0),s("div",{ref_key:"codeRef",ref:u,class:"demo-show-code language-vue",innerHTML:e(S)},null,8,X)],512),m(" 切换按钮 "),s("div",{ref_key:"controlRef",ref:D,class:v(["demo-control",{fixed:i.value}]),style:J({width:i.value?`${I.value}px`:"unset"}),onClick:o[0]||(o[0]=c=>d.value=!d.value)},[C(w,{name:"arrow-slide"},{default:x(()=>[s("i",{class:v(["demo-control-icon",d.value?"demo-control-icon_up":"demo-control-icon_down"])},null,2)]),_:1}),C(w,{name:"text-slide",persisted:""},{default:x(()=>[R(s("span",{class:"demo-control-tip"},H(d.value?"隐藏":"显示"),513),[[k,f.value]])]),_:1}),R(s("span",{class:v(["demo-control-copy",{copying:l.value}]),onClick:G(z,["stop"])},H(e(b)),11,Y),[[k,!l.value]]),C(w,{name:"bounce",persisted:""},{default:x(()=>[R(s("span",{class:"demo-control-copy success"},H(e(b)),513),[[k,l.value]])]),_:1})],6)],34))}});const oe=K(Z,[["__scopeId","data-v-90ccdceb"],["__file","Demo.vue"]]);export{oe as default};