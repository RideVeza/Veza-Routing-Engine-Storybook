import{f as B,u as b,a as R,j as c,B as f,c as G,r as w,e as L,g as T}from"./factory-BYdAncit.js";import"./index-BP8_t0zE.js";import{p as U}from"./polymorphic-factory-BBVriERq.js";import{L as $}from"./Loader-DYJrnaLT.js";import{T as k}from"./Transition-BCGcMdvv.js";import{U as D}from"./UnstyledButton-BYy9qxQd.js";var l={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};const z={orientation:"horizontal"},E=G((o,{borderWidth:e})=>({group:{"--ai-border-width":w(e)}})),g=B((o,e)=>{const t=b("ActionIconGroup",z,o),{className:s,style:n,classNames:r,styles:d,unstyled:a,orientation:m,vars:i,borderWidth:x,variant:p,mod:A,...I}=b("ActionIconGroup",z,o),u=R({name:"ActionIconGroup",props:t,classes:l,className:s,style:n,classNames:r,styles:d,unstyled:a,vars:i,varsResolver:E,rootSelector:"group"});return c.jsx(f,{...u("group"),ref:e,variant:p,mod:[{"data-orientation":m},A],role:"group",...I})});g.classes=l;g.displayName="@mantine/core/ActionIconGroup";const F={},V=G((o,{size:e,radius:t,variant:s,gradient:n,color:r,autoContrast:d})=>{const a=o.variantColorResolver({color:r||o.primaryColor,theme:o,gradient:n,variant:s||"filled",autoContrast:d});return{root:{"--ai-size":L(e,"ai-size"),"--ai-radius":t===void 0?void 0:T(t),"--ai-bg":r||s?a.background:void 0,"--ai-hover":r||s?a.hover:void 0,"--ai-hover-color":r||s?a.hoverColor:void 0,"--ai-color":a.color,"--ai-bd":r||s?a.border:void 0}}}),h=U((o,e)=>{const t=b("ActionIcon",F,o),{className:s,unstyled:n,variant:r,classNames:d,styles:a,style:m,loading:i,loaderProps:x,size:p,color:A,radius:I,__staticSelector:u,gradient:W,vars:N,children:S,disabled:v,"data-disabled":j,autoContrast:q,mod:_,...C}=t,y=R({name:["ActionIcon",u],props:t,className:s,style:m,classes:l,classNames:d,styles:a,unstyled:n,vars:N,varsResolver:V});return c.jsxs(D,{...y("root",{active:!v&&!i&&!j}),...C,unstyled:n,variant:r,size:p,disabled:v||i,ref:e,mod:[{loading:i,disabled:v||j},_],children:[c.jsx(k,{mounted:!!i,transition:"slide-down",duration:150,children:P=>c.jsx(f,{component:"span",...y("loader",{style:P}),"aria-hidden":!0,children:c.jsx($,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...x})})}),c.jsx(f,{component:"span",mod:{loading:i},...y("icon"),children:S})]})});h.classes=l;h.displayName="@mantine/core/ActionIcon";h.Group=g;export{h as A};