import{j as s,B as t,y as d,f as h,u as R,a as z,c as g,e as w,h as B}from"./factory-BYdAncit.js";import{r as l}from"./index-BP8_t0zE.js";var o={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};const S=l.forwardRef(({className:r,...e},a)=>s.jsxs(t,{component:"span",className:d(o.barsLoader,r),...e,ref:a,children:[s.jsx("span",{className:o.bar}),s.jsx("span",{className:o.bar}),s.jsx("span",{className:o.bar})]})),E=l.forwardRef(({className:r,...e},a)=>s.jsxs(t,{component:"span",className:d(o.dotsLoader,r),...e,ref:a,children:[s.jsx("span",{className:o.dot}),s.jsx("span",{className:o.dot}),s.jsx("span",{className:o.dot})]})),P=l.forwardRef(({className:r,...e},a)=>s.jsx(t,{component:"span",className:d(o.ovalLoader,r),...e,ref:a})),i={bars:S,oval:P,dots:E},C={loaders:i,type:"oval"},D=g((r,{size:e,color:a})=>({root:{"--loader-size":w(e,"loader-size"),"--loader-color":a?B(a,r):void 0}})),n=h((r,e)=>{const a=R("Loader",C,r),{size:f,color:O,type:x,vars:b,className:j,style:v,classNames:L,styles:N,unstyled:u,loaders:y,variant:_,children:c,...m}=a,p=z({name:"Loader",props:a,classes:o,className:j,style:v,classNames:L,styles:N,unstyled:u,vars:b,varsResolver:D});return c?s.jsx(t,{...p("root"),ref:e,...m,children:c}):s.jsx(t,{...p("root"),ref:e,component:y[x],variant:_,size:f,...m})});n.defaultLoaders=i;n.classes=o;n.displayName="@mantine/core/Loader";export{n as L};
