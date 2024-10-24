import{j as e}from"./jsx-runtime-CexXSJP5.js";import{d as N}from"./styled-components.browser.esm-Dx2qpfAi.js";import{r as w}from"./road-form-image-CgI51JcC.js";import{t}from"./theme-DV-fQgRe.js";import{C as T}from"./ContentHeader-BeoyYu9o.js";import{D as u}from"./DateInput-C5HhRdua.js";import{T as S}from"./Tooltip-CGEdOYwP.js";import{F as a}from"./Flex-DfchtKyW.js";import{T as r}from"./Title-NR0nO8_X.js";import{T as p}from"./Text-C4QCCHSP.js";const D=N.div`
  display: flex;
  gap: 16px;
  padding: 20px;
  background-color: ${s=>s.theme.colors.gray[0]};
  height: 100%;

  .form-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .data-section {
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 0 0 15px 15px;
    padding: 0 20px 0 20px;
  }

  .data-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid ${s=>s.theme.colors.gray[0]};
  }

  .data-container {
    width: 50%;
  }

  .image-container {
    width: 60%;
    border-radius: 15px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,E=e.jsxs(e.Fragment,{children:["Mocked data:",e.jsx("br",{}),"shift, yards, bellTimeAndDay (time and dayOfTheWeek)",e.jsx("br",{}),e.jsx("br",{}),"Note:",e.jsx("br",{}),"Shift is being set to 'AM', bell time to '09:00', and bell dayOfTheWeek to 'Monday'."]}),F=({form:s})=>{var i,o,n,d;const j=()=>{var l,c,m,h,x;const g=(((l=s.values.staffs)==null?void 0:l.drivers)??[]).length,f=(((c=s.values.staffs)==null?void 0:c.attendant)??[]).length,b=(((m=s.values.staffs)==null?void 0:m.hca)??[]).length,v=(((h=s.values.staffs)==null?void 0:h.consultant)??[]).length,y=(((x=s.values.staffs)==null?void 0:x.therapist)??[]).length;return g+f+b+v+y};return e.jsxs(D,{theme:t,children:[e.jsxs("div",{className:"form-section",children:[e.jsx(S,{width:200,label:E}),e.jsx(T,{primaryTitle:"Summary",secondaryTitle:`${s.values.jobName} • ${s.values.shortHandJobName}`,shouldInvertTitles:!0}),e.jsxs("div",{className:"data-section",children:[e.jsxs("div",{className:"data-group",children:[e.jsx(a,{w:"50%",direction:"column",gap:1,children:e.jsx(r,{order:5,c:t.colors.gray[6],children:"STUDENTS"})}),e.jsx(a,{w:"50%",className:"data-container",children:e.jsx(r,{order:3,children:((i=s.values.students)==null?void 0:i.length)??0})})]}),e.jsxs("div",{className:"data-group",children:[e.jsxs(a,{w:"50%",direction:"column",gap:1,children:[e.jsx(r,{order:5,c:t.colors.gray[6],children:"SCHOOLS"}),e.jsx(p,{fw:500,size:"12px",c:t.colors.gray[4],children:"Automatically pulled from students"})]}),e.jsx(a,{w:"50%",className:"data-container",children:e.jsx(r,{order:3,children:((o=s.values.schools)==null?void 0:o.length)??0})})]}),e.jsxs("div",{className:"data-group",children:[e.jsx(a,{w:"50%",direction:"column",gap:1,children:e.jsx(r,{order:5,c:t.colors.gray[6],children:"STAFF"})}),e.jsx(a,{w:"50%",className:"data-container",children:e.jsx(r,{order:3,children:j()})})]}),e.jsxs("div",{className:"data-group",children:[e.jsxs(a,{w:"50%",direction:"column",gap:1,children:[e.jsx(r,{order:5,c:t.colors.gray[6],children:"ROUTES"}),e.jsx(p,{fw:500,size:"12px",c:t.colors.gray[4],children:"Maximum number of routes"})]}),e.jsx(a,{w:"50%",className:"data-container",children:e.jsx(r,{order:3,children:((n=s.values.business_rule_params)==null?void 0:n.num_routes)??0})})]}),e.jsxs("div",{className:"data-group",children:[e.jsx(a,{w:"50%",direction:"column",gap:1,children:e.jsx(r,{order:5,c:t.colors.gray[6],children:"VEHICLES"})}),e.jsx(a,{w:"50%",className:"data-container",children:e.jsx(r,{order:3,children:((d=s.values.vehicles)==null?void 0:d.length)??0})})]}),e.jsxs("div",{className:"data-group",children:[e.jsx(a,{w:"50%",direction:"column",gap:1,children:e.jsx(r,{order:5,c:t.colors.gray[6],children:"START DATE"})}),e.jsx(a,{w:"50%",justify:"left",className:"data-container",children:e.jsx(u,{isDisabled:!0,value:s.values.startDate})})]}),e.jsxs("div",{className:"data-group",children:[e.jsx(a,{w:"50%",direction:"column",gap:1,children:e.jsx(r,{order:5,c:t.colors.gray[6],children:"END DATE"})}),e.jsx(a,{w:"50%",justify:"left",className:"data-container",children:e.jsx(u,{isDisabled:!0,value:s.values.endDate})})]})]})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:w,alt:"Road"})})]})};F.__docgenInfo={description:"",methods:[],displayName:"JobFormSummary"};export{F as J};
