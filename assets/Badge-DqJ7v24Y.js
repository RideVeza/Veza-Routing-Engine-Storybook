import{j as i}from"./jsx-runtime-CexXSJP5.js";import"./index-BP8_t0zE.js";import{b as m,g as j}from"./get-size-ZIjN6hcg.js";import{c as R}from"./create-vars-resolver-BkjTnGuP.js";import{a as S}from"./default-theme-BUmQqxa3.js";import{u as C,d as _,B as N}from"./factory-Cmy58O58.js";import{p as k}from"./polymorphic-factory-DpGZ7QIF.js";var b={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const w={},P=R((s,{radius:r,color:o,gradient:l,variant:e,size:a,autoContrast:c})=>{const t=s.variantColorResolver({color:o||s.primaryColor,theme:s,gradient:l,variant:e||"filled",autoContrast:c});return{root:{"--badge-height":m(a,"badge-height"),"--badge-padding-x":m(a,"badge-padding-x"),"--badge-fz":m(a,"badge-fz"),"--badge-radius":r===void 0?void 0:j(r),"--badge-bg":o||e?t.background:void 0,"--badge-color":o||e?t.color:void 0,"--badge-bd":o||e?t.border:void 0,"--badge-dot-color":e==="dot"?S(o,s):void 0}}}),f=k((s,r)=>{const o=C("Badge",w,s),{classNames:l,className:e,style:a,styles:c,unstyled:t,vars:h,radius:z,color:E,gradient:F,leftSection:n,rightSection:g,children:u,variant:p,fullWidth:v,autoContrast:T,circle:x,mod:y,...B}=o,d=_({name:"Badge",props:o,classes:b,className:e,style:a,classNames:l,styles:c,unstyled:t,vars:h,varsResolver:P});return i.jsxs(N,{variant:p,mod:[{block:v,circle:x,"with-right-section":!!g,"with-left-section":!!n},y],...d("root",{variant:p}),ref:r,...B,children:[n&&i.jsx("span",{...d("section"),"data-position":"left",children:n}),i.jsx("span",{...d("label"),children:u}),g&&i.jsx("span",{...d("section"),"data-position":"right",children:g})]})});f.classes=b;f.displayName="@mantine/core/Badge";export{f as B};
