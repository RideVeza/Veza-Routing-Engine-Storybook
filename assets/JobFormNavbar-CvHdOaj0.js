import{j as e}from"./factory-BYdAncit.js";import{r as c}from"./index-BP8_t0zE.js";import{B as N,a as S}from"./index-5GZWFLL7.js";import{G as F}from"./index-b0ruTied.js";import{d as M,e as k,f as I,g as B}from"./index-DHgPtaHi.js";import{L as R}from"./index-DGnWBzQX.js";import{f as p,g as J}from"./index-CQDxHXwo.js";import{d as b}from"./styled-components.browser.esm-BzjHiQVu.js";import{p as O}from"./jobs-DYeHrbtM.js";import{t as a}from"./theme-CBi4L4pb.js";import{B as d}from"./Button-BmZH4clo.js";import{M as T}from"./Modal-BJIPIsOn.js";import{F as x}from"./Flex-DB8_OMZA.js";import{T as r}from"./Title-BF1HBFC0.js";import{L as E}from"./Loader-DYJrnaLT.js";import{n as h}from"./notifications.store-rT8tHzW-.js";const L=b.div`
  width: 254px;
  padding: 20px;

  .navbar {
    height: 100%;
  }

  .tab {
    cursor: pointer;
    text-decoration: none;
    border-radius: 12px;
    transition: padding 0.3s;
    color: ${o=>o.theme.colors.gray[9]};

    &:hover {
      background-color: ${o=>o.theme.colors.gray[0]};
    }

    &[data-active] {
      &,
      &:hover {
        background-color: ${o=>o.theme.colors.gray[0]};
        color: ${o=>o.theme.colors.primary[6]};

        .tab-icon {
          ${o=>o.theme.colors.primary[6]}
        }
      }
    }
  }

  .tab-text {
    display: 'block';
    transition: display 0.3s;
  }
`,q=b.div`
  height: 245px;

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 32px 24px;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  /* .modal-text-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  } */
`,$=[{label:"Information",icon:k},{label:"Students",icon:I},{label:"Schools",icon:B},{label:"Staff",icon:R},{label:"Vehicles",icon:N},{label:"Business rules",icon:J},{label:"Summary",icon:S}],z=({activeStep:o,setActiveStep:f,onContinue:g})=>{const[j,n]=c.useState(!1),[s,m]=c.useState(!1),[i,l]=c.useState(null),y=o==="Business rules"?"Next Step":o==="Summary"?"Generate Routes":"Continue",u=()=>{window.location.assign("/route-planner"),n(!1),l(null)},v=async()=>{const t=g();try{m(!0),n(!0),await O(t),l(!1),h.show({color:"green",title:"Success",message:"Job creation requested!"})}catch{l(!0),h.show({color:"red",title:"Error",message:"Failed to create job"})}m(!1)},C=()=>{v().catch(t=>{console.error("Error during job creation:",t)})},w=$.map(t=>e.jsx("div",{className:"tab","data-active":t.label===o||void 0,onClick:()=>{f(t.label)},children:e.jsxs(x,{align:"center",justify:"left",gap:12,mb:16,p:"12px 16px",children:[e.jsx(t.icon,{className:"tab-icon",size:16}),e.jsx(r,{order:4,className:"tab-text",children:t.label})]})},t.label));return e.jsxs(e.Fragment,{children:[e.jsx(L,{theme:a,children:e.jsx("nav",{className:"navbar",children:e.jsxs(x,{h:"100%",direction:"column",justify:"space-between",children:[e.jsx("div",{className:"navbarMain",children:w}),e.jsx(d,{text:y,variant:"filled",radius:12,isLoading:s,isFullWidth:!0,icon:o==="Summary"?p:F,onClick:C})]})})}),e.jsx(T,{modalContent:()=>e.jsxs(q,{children:[s&&i===null&&e.jsxs("div",{className:"modal-content",children:[e.jsx(E,{size:50,color:a.colors.primary[6]}),e.jsx(r,{order:3,children:"The routing job is being created"})]}),!s&&i===!1&&e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-text-container",children:[e.jsx(p,{size:40,color:a.colors.primary[5]}),e.jsx(r,{order:2,children:"Routing Job Queued"}),e.jsx(r,{order:6,mb:24,children:"Your routing job is in queue and will be ready for review shortly."})]}),e.jsx(d,{text:"View Status",isFullWidth:!1,onClick:u})]}),!s&&i===!0&&e.jsx("div",{className:"modal-content",children:e.jsxs("div",{className:"modal-text-container",children:[e.jsx(M,{size:40,color:a.colors.primary[5]}),e.jsx(r,{order:3,mb:24,children:"Failed to create job."}),e.jsx(d,{text:"Back",onClick:()=>n(!1)})]})})]}),modalWidth:"397px",modalHeight:"auto",isOpen:j,onClose:u,shouldCloseOnClickOutside:!1})]})};z.__docgenInfo={description:"",methods:[],displayName:"JobFormNavbar",props:{activeStep:{required:!0,tsType:{name:"string"},description:""},setActiveStep:{required:!0,tsType:{name:"signature",type:"function",raw:"(step: string) => void",signature:{arguments:[{type:{name:"string"},name:"step"}],return:{name:"void"}}},description:""},onContinue:{required:!0,tsType:{name:"signature",type:"function",raw:"() => RoutePayload",signature:{arguments:[],return:{name:"RoutePayload"}}},description:""}}};export{z as J};
