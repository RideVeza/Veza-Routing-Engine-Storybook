import{j as r}from"./jsx-runtime-CexXSJP5.js";import{b as c}from"./index-DUW3t7VM.js";import{h as l,i as t}from"./index-DhrrqPsw.js";import{d as n}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as o}from"./theme-DV-fQgRe.js";import{C as p}from"./Card-D3lXULz8.js";import{F as s}from"./Flex-DfchtKyW.js";import{T as a}from"./Title-NR0nO8_X.js";import{B as x}from"./Badge-DqJ7v24Y.js";const m=n.div`
  cursor: pointer;

  .route-card {
    border: 1px solid ${e=>e.theme.colors.gray[0]};
    border-radius: 8px;
    border-left: 8px solid ${e=>e.color};
    margin-bottom: 8px;
    padding: 12px;
  }

  .passengers-pills {
    border: 0.5px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 47px;
    padding: 4px 8px;
  }

  .route-card-details-pill {
    border: 1px solid ${e=>e.theme.colors.gray[0]};
    border-radius: 16px;
    padding: 1px 1px 1px 8px;
  }

  .badge-root {
    text-transform: none;
  }
`,g=({route:e,color:d,onCardClick:i})=>r.jsx(m,{color:d,theme:o,children:r.jsx(p,{onClick:()=>i(e.studentRouteId),className:"route-card",children:r.jsxs(s,{justify:"space-between",gap:12,direction:"column",children:[r.jsxs(s,{justify:"space-between",align:"center",children:[r.jsxs(s,{direction:"column",children:[r.jsx(a,{order:3,children:e.shortHandRouteName}),r.jsx(a,{order:5,fw:500,c:o.colors.gray[5],children:e.schoolName})]}),r.jsx(l,{size:24})]}),r.jsxs(s,{justify:"space-between",align:"center",children:[r.jsxs(s,{gap:6,align:"center",className:"route-card-details-pill",children:[r.jsx(a,{order:5,c:o.colors.gray[6],children:`${e.maxTime} HR`}),r.jsx(a,{order:2,c:o.colors.gray[2],children:"•"}),r.jsx(a,{order:5,c:o.colors.gray[6],children:`${e.maxDistance} KM`}),r.jsxs(s,{gap:1,align:"center",p:"6px 8px",className:"passengers-pills",children:[r.jsx(c,{size:16,color:o.colors.primary[6]}),r.jsx(a,{order:5,c:o.colors.gray[6],children:e.numberStaffsNeeded})]})]}),r.jsx(x,{p:5,classNames:{root:"badge-root"},radius:4,color:o.colors.green[5],children:r.jsxs(s,{gap:4,p:3,align:"center",children:[r.jsx(t,{size:12,color:"white"}),r.jsx(a,{order:5,size:12,c:"white",children:"Ready"})]})})]})]})})});g.__docgenInfo={description:"",methods:[],displayName:"RouteCard"};export{g as R};
