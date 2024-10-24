import{j as t}from"./jsx-runtime-CexXSJP5.js";import{d as l}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as r}from"./theme-DV-fQgRe.js";import{C as c}from"./Card-D3lXULz8.js";import{F as s}from"./Flex-DfchtKyW.js";import{T as o}from"./Title-NR0nO8_X.js";import{S as a}from"./Switch-DEOlBtZP.js";function u(e){return[{id:1,title:"Target number of Routes",value:e.targetNumberOfRoutes},{id:2,title:"Max time per child",subtitle:"How long should a child be in a bus",value:`${e.targetStudentOnboardingTime} mins`},{id:3,title:"Max time per onboard staff",value:e.targetStaffsOnboardingTime},{id:4,title:"Curbside",subtitle:"Avoid street crossing for pick-up/drop-off.",value:e.curbside_pickup_dropoff},{id:5,title:"Max Distance",subtitle:"Distance traveled throughout out route",value:`${e.maxDistance} KM`},{id:6,title:"Route Start Location",value:e.routeStartLocation},{id:7,title:"Route End Location",value:e.routeEndLocation},{id:8,title:"Vehicle Yard",value:e.vehicleYard}]}const d=l.div`
  .configuration-card {
    border: 1px solid ${e=>e.theme.colors.gray[0]};
    border-radius: 8px;
  }

  .switch-track {
    &:data-checked {
      background-color: green;
    }
  }

  .thumb {
    width: 16px;
    height: 16px;
    border: none;
  }
`,p=({jobFormattedData:e})=>{const n=u(e);return t.jsx(d,{theme:r,children:n.map(i=>t.jsx(c,{padding:12,mb:8,radius:"md",className:"configuration-card",children:t.jsxs(s,{gap:50,justify:"space-between",align:"center",children:[t.jsxs(s,{direction:"column",gap:1,children:[t.jsx(o,{order:3,children:i.title}),i.subtitle&&t.jsx(o,{order:5,fw:500,c:r.colors.gray[4],children:i.subtitle})]}),typeof i.value!="boolean"&&t.jsx(o,{order:5,children:i.value}),typeof i.value=="boolean"&&t.jsx(a,{color:r.colors.primary[5],classNames:{thumb:"thumb",track:"switch-track"},checked:i.value})]})},i.id))})};p.__docgenInfo={description:"",methods:[],displayName:"JobDetailsConfigurations"};export{p as J};
