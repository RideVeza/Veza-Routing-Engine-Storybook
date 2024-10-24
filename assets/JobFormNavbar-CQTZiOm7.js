import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{a as S,b as I}from"./index-BB_o3gze.js";import{G as k}from"./index-DDyY_0rn.js";import{d as T,e as B,f as E,g as R}from"./index-L2PmcK6x.js";import{L as J}from"./index-DGnWBzQX.js";import{k as f,l as L}from"./index-DhrrqPsw.js";import{d as y}from"./styled-components.browser.esm-Dx2qpfAi.js";import{p as O}from"./jobs-c2izYkBu.js";import{t as n}from"./theme-DV-fQgRe.js";import{B as u}from"./Button-DgKJQOcJ.js";import{M as q}from"./Modal-DjE8Gf6o.js";import{F as g}from"./Flex-DfchtKyW.js";import{T as s}from"./Title-NR0nO8_X.js";import{L as $}from"./Loader-I3UIFO-P.js";import{n as j}from"./notifications.store-DxWvW9mD.js";const z=y.div`
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
`,P=y.div`
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
`,i=[{label:"Information",icon:B},{label:"Students",icon:E},{label:"Schools",icon:R},{label:"Staff",icon:J},{label:"Vehicles",icon:S},{label:"Business rules",icon:L},{label:"Summary",icon:I}],A=({activeStep:o,setActiveStep:p,onContinue:v})=>{const[C,l]=m.useState(!1),[a,x]=m.useState(!1),[c,d]=m.useState(null),w=o==="Business rules"?"Next Step":o==="Summary"?"Generate Routes":"Continue",h=()=>{window.location.assign("/route-planner"),l(!1),d(null)},N=async()=>{const t=v();try{x(!0),l(!0),await O(t),d(!1),j.show({color:"green",title:"Success",message:"Job creation requested!"})}catch{d(!0),j.show({color:"red",title:"Error",message:"Failed to create job"})}x(!1)},F=()=>{const t=i.findIndex(r=>r.label===o);if(t<i.length-1){const r=i[t+1].label;p(r),setTimeout(()=>{const b=document.activeElement;b instanceof HTMLElement&&b.blur()},0)}else N().catch(r=>{console.error("Error during job creation:",r)})},M=i.map(t=>e.jsx("div",{className:"tab","data-active":t.label===o||void 0,onClick:()=>{p(t.label)},children:e.jsxs(g,{align:"center",justify:"left",gap:12,mb:16,p:"12px 16px",children:[e.jsx(t.icon,{className:"tab-icon",size:16}),e.jsx(s,{order:4,className:"tab-text",children:t.label})]})},t.label));return e.jsxs(e.Fragment,{children:[e.jsx(z,{theme:n,children:e.jsx("nav",{className:"navbar",children:e.jsxs(g,{h:"100%",direction:"column",justify:"space-between",children:[e.jsx("div",{className:"navbarMain",children:M}),e.jsx(u,{text:w,variant:"filled",radius:12,isLoading:a,isFullWidth:!0,icon:o==="Summary"?f:k,onClick:F})]})})}),e.jsx(q,{modalContent:()=>e.jsxs(P,{children:[a&&c===null&&e.jsxs("div",{className:"modal-content",children:[e.jsx($,{size:50,color:n.colors.primary[6]}),e.jsx(s,{order:3,children:"The routing job is being created"})]}),!a&&c===!1&&e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-text-container",children:[e.jsx(f,{size:40,color:n.colors.primary[5]}),e.jsx(s,{order:2,children:"Routing Job Queued"}),e.jsx(s,{order:6,mb:24,children:"Your routing job is in queue and will be ready for review shortly."})]}),e.jsx(u,{text:"View Status",isFullWidth:!1,onClick:h})]}),!a&&c===!0&&e.jsx("div",{className:"modal-content",children:e.jsxs("div",{className:"modal-text-container",children:[e.jsx(T,{size:40,color:n.colors.primary[5]}),e.jsx(s,{order:3,mb:24,children:"Failed to create job."}),e.jsx(u,{text:"Back",onClick:()=>l(!1)})]})})]}),modalWidth:"397px",modalHeight:"auto",isOpen:C,onClose:h,shouldCloseOnClickOutside:!1})]})};A.__docgenInfo={description:"",methods:[],displayName:"JobFormNavbar",props:{activeStep:{required:!0,tsType:{name:"string"},description:""},setActiveStep:{required:!0,tsType:{name:"signature",type:"function",raw:"(step: string) => void",signature:{arguments:[{type:{name:"string"},name:"step"}],return:{name:"void"}}},description:""},onContinue:{required:!0,tsType:{name:"signature",type:"function",raw:"() => RoutePayload",signature:{arguments:[],return:{name:"RoutePayload"}}},description:""}}};export{A as J};
