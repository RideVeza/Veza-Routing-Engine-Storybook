import{j as e}from"./jsx-runtime-CexXSJP5.js";import{d as l}from"./styled-components.browser.esm-Dx2qpfAi.js";import{r as d}from"./road-form-image-CgI51JcC.js";import{t as r}from"./theme-DV-fQgRe.js";import{C as p}from"./ContentHeader-BeoyYu9o.js";import{D as t}from"./DateInput-C5HhRdua.js";import{I as c}from"./Input-B6p2Evf3.js";import{F as i}from"./Flex-DfchtKyW.js";import{T as s}from"./Title-NR0nO8_X.js";import{T as a}from"./Text-C4QCCHSP.js";import{I as m}from"./Image-CyM-z9cL.js";const h=l.div`
  background-color: ${o=>o.theme.colors.gray[0]};
  height: 100%;

  .header-container {
    border-bottom: 1px solid ${o=>o.theme.colors.gray[2]};
  }

  .information-form-section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .inputs-section {
    flex: 1;
    width: 100%;
    background-color: white;
    border-radius: 0 0 15px 15px;
    padding: 0 20px 0 20px;
  }

  .input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 16px 0;
    border-bottom: 1px solid ${o=>o.theme.colors.gray[0]};
  }

  .input-container {
    width: 50%;
  }

  .image-container {
    width: 60%;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,x=({form:o})=>e.jsx(h,{theme:r,children:e.jsxs(i,{gap:16,p:20,h:"100%",children:[e.jsxs("div",{className:"information-form-section",children:[e.jsx("div",{className:"header-container",children:e.jsx(p,{primaryTitle:"Information",secondaryTitle:"Basic information for routing job",shouldInvertTitles:!0})}),e.jsxs("div",{className:"inputs-section",children:[e.jsxs("div",{className:"input-group",children:[e.jsxs(i,{w:"50%",direction:"column",gap:1,children:[e.jsx(s,{order:5,c:r.colors.gray[6],children:"ROUTING JOB NAME"}),e.jsx(a,{fw:500,size:"12px",c:r.colors.gray[4],children:"School board name works (optional)"})]}),e.jsx(i,{w:"50%",className:"input-container",children:e.jsx(c,{placeholder:"Calgary Board of Education",value:o.values.jobName,...o.getInputProps("jobName")})})]}),e.jsxs("div",{className:"input-group",children:[e.jsxs(i,{w:"50%",direction:"column",gap:1,children:[e.jsx(s,{order:5,c:r.colors.gray[6],children:"ENTER A SHORT HAND"}),e.jsx(a,{fw:500,size:"12px",c:r.colors.gray[4],children:'3-4 letter abbreviation, eg: "CBE"'})]}),e.jsx(i,{w:"50%",className:"input-container",children:e.jsx(c,{isRequired:!0,placeholder:"CBE",value:o.values.shortHandJobName,...o.getInputProps("shortHandJobName")})})]}),e.jsxs("div",{className:"input-group",children:[e.jsxs(i,{w:"50%",direction:"column",gap:1,children:[e.jsx(s,{order:5,c:r.colors.gray[6],children:"START DATE"}),e.jsx(a,{fw:500,size:"12px",c:r.colors.gray[4],children:"Optional"})]}),e.jsx(i,{w:"50%",justify:"left",children:e.jsx(t,{value:o.values.startDate,onChange:n=>o.setFieldValue("startDate",n)})})]}),e.jsxs("div",{className:"input-group",children:[e.jsxs(i,{w:"50%",direction:"column",gap:1,children:[e.jsx(s,{order:5,c:r.colors.gray[6],children:"END DATE"}),e.jsx(a,{fw:500,size:"12px",c:r.colors.gray[4],children:"Optional"})]}),e.jsx(i,{w:"50%",justify:"left",children:e.jsx(t,{value:o.values.endDate,onChange:n=>o.setFieldValue("endDate",n)})})]})]})]}),e.jsx("div",{className:"image-container",children:e.jsx(m,{radius:15,src:d,alt:"Road"})})]})});x.__docgenInfo={description:"",methods:[],displayName:"JobFormInformation"};export{x as J};
