import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{a as p}from"./index-B98Pt2jl.js";import{d}from"./styled-components.browser.esm-Dx2qpfAi.js";import{B as c}from"./Button-DgKJQOcJ.js";import{C as b}from"./ContentHeader-BeoyYu9o.js";import{L as x}from"./List-Cksbtp4j.js";import{J as s}from"./JobCards-DrXGYQCP.js";import{J as u}from"./JobForm-BVL8fADL.js";import{M as f}from"./Modal-DjE8Gf6o.js";const g=d.div`
  width: 100%;
  height: 100%;

  flex: 1;

  .job-list-section {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`,j=({setFocusedJobId:e,focusedJobId:n})=>{const[r,i]=l.useState("Current Jobs"),a=[{label:"Current Jobs",content:o.jsx(s,{setFocusedJobId:e,focusedJobId:n})},{label:"Archived Jobs",content:o.jsx(s,{setFocusedJobId:e,focusedJobId:n})}],m=()=>console.log("Not implemented");return o.jsx(g,{children:o.jsxs("div",{className:"job-list-section",children:[o.jsx(b,{primaryTitle:"Routing Jobs",secondaryTitle:"ROUTE PLANNER",activeTab:r,renderHeaderButtonComponent:()=>o.jsx(f,{trigger:t=>o.jsx(c,{text:"New Routing Job",variant:"light",padding:"8px 10px",isIconOnLeft:!0,icon:p,onClick:t}),modalContent:t=>o.jsx(u,{onClose:t,onSave:m})}),renderHeaderButtonTab:"Current Jobs"}),o.jsx(x,{tabs:a,activeTab:r,setActiveTab:i})]})})};j.__docgenInfo={description:"",methods:[],displayName:"JobRoutingList"};export{j as J};
