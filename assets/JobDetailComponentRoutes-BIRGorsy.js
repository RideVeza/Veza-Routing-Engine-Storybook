import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as h}from"./index-BP8_t0zE.js";import{d as a,e as g}from"./index-DhrrqPsw.js";import{J as y}from"./JobDetailComponentTabsStyle-Cfk8PQm0.js";import{a as R,J as f}from"./jobs-DhiDD4xb.js";import{t as o}from"./theme-DV-fQgRe.js";import{B as S}from"./Button-DgKJQOcJ.js";import{S as N}from"./ScrollArea-D4tNmDXS.js";import{S as T}from"./Skeleton-C45Pgd_S.js";import{C as v}from"./Card-D3lXULz8.js";import{F as n}from"./Flex-DfchtKyW.js";import{T as i}from"./Title-NR0nO8_X.js";import{B as A}from"./Badge-DqJ7v24Y.js";import{T as B}from"./Text-C4QCCHSP.js";const C=({formattedJobData:s,isLoading:m})=>{var d;const[t,p]=h.useState(null),l=s&&!m,c=((d=s==null?void 0:s.routes)==null?void 0:d.length)===0,u=(s==null?void 0:s.status)===R.FAILED,x=u?"The job didn't generate routes.":"Routes have not yet been generated.";return h.useEffect(()=>{s&&!c&&p({...s,routes:[{dayOfTheWeek:s.routes[0].dayOfTheWeek,formattedRouteStopsByDay:s.routes[0].formattedRouteStopsByDay.filter(r=>r.shift===f.AM)}]})},[s]),e.jsx(y,{theme:o,children:e.jsx(N,{h:"70vh",children:e.jsxs("div",{className:"inputs-section",children:[!l&&e.jsx(e.Fragment,{children:Array.from({length:4}).map((r,j)=>e.jsx(T,{height:100,radius:"md",mt:15},j))}),l&&!c&&(t==null?void 0:t.routes[0].formattedRouteStopsByDay.map(r=>e.jsx("div",{children:e.jsx("div",{className:"route-card",children:e.jsx(v,{shadow:"sm",radius:8,children:e.jsxs(n,{justify:"space-between",align:"center",children:[e.jsxs(n,{justify:"space-between",gap:4,direction:"column",children:[e.jsxs(n,{gap:8,children:[e.jsx(i,{order:4,children:(s==null?void 0:s.shortHandJobName)??"-"}),e.jsx(A,{p:5,classNames:{root:"badge-root"},color:o.colors.green[0],children:e.jsx(i,{order:5,size:12,c:o.colors.green[5],children:"Ready"})})]}),e.jsx(i,{order:4,children:r.schoolName})]}),e.jsx(S,{text:"VIEW",variant:"transparent",isFullWidth:!1,icon:a,isIconOnLeft:!1,onClick:()=>console.log("Not implemented")})]})})})},r.studentRouteId))),l&&(c||u)&&e.jsxs(n,{direction:"column",gap:8,justify:"center",align:"center",mt:50,children:[e.jsx(g,{size:51}),e.jsx(i,{order:2,children:"No Routes"}),e.jsx(B,{size:"16px",c:o.colors.gray[6],children:x})]})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"JobDetailComponentRoutes"};export{C as J};
