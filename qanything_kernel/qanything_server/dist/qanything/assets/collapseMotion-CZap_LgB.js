import{X as u}from"./index-CFso0Nu5.js";function c(t,s,i,n){for(var e=t.length,l=i+(n?1:-1);n?l--:++l<e;)if(s(t[l],l,t))return l;return-1}function f(t){return t!==t}function h(t,s,i){for(var n=i-1,e=t.length;++n<e;)if(t[n]===s)return n;return-1}function g(t,s,i){return s===s?h(t,s,i):c(t,f,i)}function y(t,s){var i=t==null?0:t.length;return!!i&&g(t,s,0)>-1}function x(t,s,i){for(var n=-1,e=t==null?0:t.length;++n<e;)if(i(s,t[n]))return!0;return!1}const p=t=>({[t.componentCls]:{[`${t.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}},[`${t.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}}}),C=p;function r(t,s){return t.classList?t.classList.contains(s):` ${t.className} `.indexOf(` ${s} `)>-1}function a(t,s){t.classList?t.classList.add(s):r(t,s)||(t.className=`${t.className} ${s}`)}function o(t,s){if(t.classList)t.classList.remove(s);else if(r(t,s)){const i=t.className;t.className=` ${i} `.replace(` ${s} `," ")}}const m=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:t,appear:s,css:!0,onBeforeEnter:i=>{i.style.height="0px",i.style.opacity="0",a(i,t)},onEnter:i=>{u(()=>{i.style.height=`${i.scrollHeight}px`,i.style.opacity="1"})},onAfterEnter:i=>{i&&(o(i,t),i.style.height=null,i.style.opacity=null)},onBeforeLeave:i=>{a(i,t),i.style.height=`${i.offsetHeight}px`,i.style.opacity=null},onLeave:i=>{setTimeout(()=>{i.style.height="0px",i.style.opacity="0"})},onAfterLeave:i=>{i&&(o(i,t),i.style&&(i.style.height=null,i.style.opacity=null))}}},v=m;export{a,y as b,v as c,x as d,c as e,C as g,o as r};
