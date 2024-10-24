import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as N}from"./index-BP8_t0zE.js";import{G as K}from"./index-B98Pt2jl.js";import{d as L}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as j}from"./theme-DV-fQgRe.js";import{I as Q}from"./Input-B6p2Evf3.js";import{R as U}from"./RouteCard-Dix3uWcG.js";import{c as P}from"./routes-Ss6aDr-t.js";import{C as W}from"./Card-D3lXULz8.js";import{T as y}from"./Title-NR0nO8_X.js";import{F as D}from"./Flex-DfchtKyW.js";import{b,g as X}from"./get-size-ZIjN6hcg.js";import{c as $}from"./create-vars-resolver-BkjTnGuP.js";import{f as A,u as E,d as F,B as J}from"./factory-Cmy58O58.js";import{C as Y}from"./CloseButton-Bf40-Csk.js";import{c as M}from"./Input-2PvRR_UE.js";const[bs,V]=M(),[Z,H]=M();var v={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};const B={},ss=$((r,{gap:a},{size:o})=>({group:{"--pg-gap":a!==void 0?b(a):b(o,"pg-gap")}})),R=A((r,a)=>{const o=E("PillGroup",B,r),{classNames:m,className:i,style:p,styles:u,unstyled:n,vars:t,size:h,disabled:f,...g}=o,l=V(),s=(l==null?void 0:l.size)||h||void 0,z=F({name:"PillGroup",classes:v,props:o,className:i,style:p,classNames:m,styles:u,unstyled:n,vars:t,varsResolver:ss,stylesCtx:{size:s},rootSelector:"group"});return e.jsx(Z,{value:{size:s,disabled:f},children:e.jsx(J,{ref:a,size:s,...z("group"),...g})})});R.classes=v;R.displayName="@mantine/core/PillGroup";const es={variant:"default"},os=$((r,{radius:a},{size:o})=>({root:{"--pill-fz":b(o,"pill-fz"),"--pill-height":b(o,"pill-height"),"--pill-radius":a===void 0?void 0:X(a)}})),C=A((r,a)=>{const o=E("Pill",es,r),{classNames:m,className:i,style:p,styles:u,unstyled:n,vars:t,variant:h,children:f,withRemoveButton:g,onRemove:l,removeButtonProps:s,radius:z,size:O,disabled:w,mod:T,...q}=o,c=H(),S=V(),G=O||(c==null?void 0:c.size)||void 0,I=(S==null?void 0:S.variant)==="filled"?"contrast":h||"default",_=F({name:"Pill",classes:v,props:o,className:i,style:p,classNames:m,styles:u,unstyled:n,vars:t,varsResolver:os,stylesCtx:{size:G}});return e.jsxs(J,{component:"span",ref:a,variant:I,size:G,..._("root",{variant:I}),mod:[{"with-remove":g&&!w,disabled:w||(c==null?void 0:c.disabled)},T],...q,children:[e.jsx("span",{..._("label"),children:f}),g&&e.jsx(Y,{variant:"transparent",radius:z,tabIndex:-1,"aria-hidden":!0,unstyled:n,...s,..._("remove",{className:s==null?void 0:s.className,style:s==null?void 0:s.style}),onMouseDown:d=>{var x;d.preventDefault(),d.stopPropagation(),(x=s==null?void 0:s.onMouseDown)==null||x.call(s,d)},onClick:d=>{var x;d.stopPropagation(),l==null||l(),(x=s==null?void 0:s.onClick)==null||x.call(s,d)}})]})});C.classes=v;C.displayName="@mantine/core/Pill";C.Group=R;const k=L.div`
  cursor: pointer;

  .root {
    background-color: ${r=>r.theme.colors.red[5]};
    color: white;
    text-transform: none;
  }

  .new-route-card {
    border: 1px solid ${r=>r.theme.colors.gray[0]};
    border-radius: 8px;
  }
`,rs=({formattedJobData:r,setHighlightRoute:a})=>{const[o,m]=N.useState(null),[i,p]=N.useState(""),u=t=>{p(t)};function n(t){m(t)}return N.useEffect(()=>{o&&a([o])},[o,a]),e.jsxs(e.Fragment,{children:[e.jsx(Q,{placeholder:"Search",icon:K,value:i,onChange:u}),e.jsx("p",{children:i}),r.routesInfo.map((t,h)=>{const f=P[h%P.length];return e.jsx("div",{children:e.jsx(U,{route:t,color:t.color||f,onCardClick:n})},t.studentRouteId)}),e.jsx(k,{theme:j,children:e.jsxs(W,{className:"new-route-card",padding:12,children:[e.jsx(y,{order:3,mb:4,children:"New Route"}),e.jsx(y,{order:5,fw:500,c:j.colors.gray[5],children:"Add Manually"})]})}),e.jsx(k,{theme:j,children:e.jsxs(D,{gap:8,align:"center",mt:24,children:[e.jsx(y,{order:3,c:j.colors.gray[6],children:"Abandoned Students"}),e.jsx(C,{classNames:{root:"root"},children:e.jsx(D,{align:"center",justify:"center",w:"100%",h:"100%",children:e.jsx(y,{order:5,size:12,children:r.totalAbandonedStudents})})})]})})]})};rs.__docgenInfo={description:"",methods:[],displayName:"JobDetailsRoutes"};export{rs as J};
