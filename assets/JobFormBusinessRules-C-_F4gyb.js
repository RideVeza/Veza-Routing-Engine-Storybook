import{j as s}from"./factory-BYdAncit.js";import{r as E}from"./index-BP8_t0zE.js";import{d as b}from"./styled-components.browser.esm-BzjHiQVu.js";import{c as N}from"./index-DHgPtaHi.js";import{j as S}from"./index-CQDxHXwo.js";import{S as m,b as x}from"./jobs-CSoPBwjn.js";import{t as a}from"./theme-CBi4L4pb.js";import{I as y}from"./Input-E5qBdqnX.js";import{N as o}from"./NumberInput-Bgw8vgZy.js";import{T as d}from"./Tooltip-Bd5wOlBI.js";import{F as r}from"./Flex-DB8_OMZA.js";import{T as n}from"./Title-BF1HBFC0.js";import{S as f}from"./Select-DTnU6ewg.js";import{S as h}from"./Switch-BJ6-SGMt.js";import{T as p}from"./Text-D0XYLr29.js";import{C as R}from"./ContentHeader-CIXz8JLl.js";import{L as A}from"./List-BQStdOE_.js";const k=b.div`
  display: flex;
  gap: 16px;
  height: 100%;
  padding: 20px;
  background-color: #ebeaee;

  .form-section {
    width: 100%;
  }

  .detail-container {
    width: 60%;
    height: 100%;
    border-radius: 15px;
    background-color: #cccad0;
  }
`,_=b.div`
  .inputs-section {
    width: 100%;
    height: 62vh;
    background-color: white;
    border-radius: 0 0 15px 15px;
  }

  .input-group {
    display: flex;
    justify-content: space-between;
    padding: 16px 0 16px 0;
    align-items: center;
    border-bottom: 1px solid #ebeaee;
  }

  .inputs-section {
    padding: 0 20px 0 20px;
  }

  .input-container {
    width: 50%;
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
`,T=({form:e})=>{var i,t,u,j,g;const l=c=>{const I=c.replace(/\D/g,"");e.setFieldValue("business_rule_params.max_walking_distance",Number(I))};return s.jsx(_,{children:s.jsxs("div",{className:"inputs-section",children:[s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",gap:10,align:"center",children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"NUMBER OF ROUTES"}),s.jsx(d,{width:320,label:s.jsx(n,{order:6,children:"Tooltip content"})})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(i=e.values.business_rule_params)==null?void 0:i.num_routes,...e.getInputProps("business_rule_params.num_routes")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",gap:10,align:"center",children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"START & END LOCATION"}),s.jsx(d,{width:320,label:s.jsx(n,{order:6,children:"Tooltip content"})})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(f,{defaultValue:m.YARD,radius:8,variant:"filled",rightSection:s.jsx(N,{}),styles:{input:{backgroundColor:a.colors.gray[0]}},data:[m.YARD,m.DRIVER_HOME,m.DRIVER_PREFERENCE],...e.getInputProps("business_rule_params.start_end_location")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",gap:10,align:"center",children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"MAX WALKING DISTANCE"}),s.jsx(d,{width:320,label:s.jsx(n,{order:6,children:"Tooltip content"})})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(y,{placeholder:"100",RightSectionIcon:S,rightSectionIconColor:a.colors.primary[5],onChange:l,value:`${((t=e.values.business_rule_params)==null?void 0:t.max_walking_distance)||0} Meters`})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",gap:10,align:"center",children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"MIXED SCHOOLS ALLOWED"}),s.jsx(d,{width:320,label:s.jsx(n,{order:6,children:"Tooltip content"})})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(h,{checked:((u=e.values.business_rule_params)==null?void 0:u.allow_mixed_schools)??!1,color:a.colors.primary[5],classNames:{thumb:"thumb",track:"switch-track"},onChange:c=>e.setFieldValue("business_rule_params.allow_mixed_schools",c.currentTarget.checked)})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",gap:10,align:"center",children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"MIXED PICK-UPS/DROP-OFFS"}),s.jsx(d,{width:320,label:s.jsx(n,{order:6,children:"Tooltip content"})})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(h,{checked:((j=e.values.business_rule_params)==null?void 0:j.mixed_pickup_dropoff)??!1,color:a.colors.primary[5],classNames:{thumb:"thumb",track:"switch-track"},onChange:c=>e.setFieldValue("business_rule_params.mixed_pickup_dropoff",c.currentTarget.checked)})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",gap:10,align:"center",children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"CURBSIDE"}),s.jsx(d,{width:320,label:s.jsx(n,{order:6,children:"Avoid street crossing for pick-up/drop-off"})})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(h,{checked:((g=e.values.business_rule_params)==null?void 0:g.curbside_pickup_dropoff)??!1,color:a.colors.primary[5],classNames:{thumb:"thumb",track:"switch-track"},onChange:c=>e.setFieldValue("business_rule_params.curbside_pickup_dropoff",c.currentTarget.checked)})})]})]})})};T.__docgenInfo={description:"",methods:[],displayName:"BusinessRulesGeneralInputs"};const w=({form:e})=>{var l,i,t;return s.jsx(_,{children:s.jsxs("div",{className:"inputs-section",children:[s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{w:"50%",direction:"column",gap:1,children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"STAFF BOARDING"}),s.jsx(p,{fw:500,size:"12px",c:a.colors.gray[4],children:"Select where staff should meet the bus"})]}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(f,{defaultValue:x.ALL_MEET_AT_STARTING_POINT,radius:8,variant:"filled",rightSection:s.jsx(N,{}),styles:{input:{backgroundColor:a.colors.gray[0]}},data:[x.ALL_MEET_AT_STARTING_POINT,x.ALL_PICKED_UP_FROM_HOME,x.PICK_UP_FROM_HOME_THOSE_THAT_NEED_IT],...e.getInputProps("business_rule_params.staff_boarding")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(r,{w:"50%",direction:"column",gap:1,children:s.jsx(n,{order:5,c:a.colors.gray[6],children:"MAX STUDENT PER LPN"})}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(l=e.values.business_rule_params)==null?void 0:l.student_staff_ratio,...e.getInputProps("business_rule_params.student_staff_ratio")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(r,{w:"50%",direction:"column",gap:1,children:s.jsx(n,{order:5,c:a.colors.gray[6],children:"MAX STUDENT PER HCA"})}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(i=e.values.business_rule_params)==null?void 0:i.student_staff_ratio,...e.getInputProps("business_rule_params.student_staff_ratio")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(r,{w:"50%",direction:"column",gap:1,children:s.jsx(n,{order:5,c:a.colors.gray[6],children:"MAX STUDENT PER ATTENDANT"})}),s.jsx(r,{w:"50%",className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(t=e.values.business_rule_params)==null?void 0:t.student_staff_ratio,...e.getInputProps("business_rule_params.student_staff_ratio")})})]})]})})};w.__docgenInfo={description:"",methods:[],displayName:"BusinessRulesSupportStaffInput"};const v=({form:e})=>{var l,i,t,u;return s.jsx(_,{children:s.jsxs("div",{className:"inputs-section",children:[s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{direction:"column",gap:1,children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"STAFF MAX TIME"}),s.jsx(p,{fw:500,size:"12px",c:a.colors.gray[4],children:"Max time on board by staff"})]}),s.jsx("div",{className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(l=e.values.business_rule_params)==null?void 0:l.max_staff_onboarding_time,...e.getInputProps("business_rule_params.max_staff_onboarding_time")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{direction:"column",gap:1,children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"STUDENT MAX TIME"}),s.jsx(p,{fw:500,size:"12px",c:a.colors.gray[4],children:"Max time on board by student"})]}),s.jsx("div",{className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(i=e.values.business_rule_params)==null?void 0:i.max_student_onboarding_time,...e.getInputProps("business_rule_params.max_student_onboarding_time")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{direction:"column",gap:1,children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"STUDENT MAX LOADING TIME"}),s.jsx(p,{fw:500,size:"12px",c:a.colors.gray[4],children:"Max time to load students"})]}),s.jsx("div",{className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(t=e.values.business_rule_params)==null?void 0:t.max_student_loaded_time,...e.getInputProps("business_rule_params.max_student_loaded_time")})})]}),s.jsxs("div",{className:"input-group",children:[s.jsxs(r,{direction:"column",gap:1,children:[s.jsx(n,{order:5,c:a.colors.gray[6],children:"DWELL TIME"}),s.jsx(p,{children:"How long should a bus stop at a stop"})]}),s.jsx("div",{className:"input-container",children:s.jsx(o,{placeholder:"Number",value:(u=e.values.business_rule_params)==null?void 0:u.default_dwell_time,...e.getInputProps("business_rule_params.default_dwell_time")})})]})]})})};v.__docgenInfo={description:"",methods:[],displayName:"BusinessRulesTimeInputs"};const M=s.jsxs(s.Fragment,{children:["Configurations not applied in the backend",s.jsx("br",{}),s.jsx("br",{}),"General Tab:",s.jsx("br",{}),"'Number of routes', 'start & end location', 'max walking distance', 'mixed schools allowed', 'mixed pick-ups/drop-offs'.",s.jsx("br",{}),s.jsx("br",{}),"Time Tab:",s.jsx("br",{}),"'Staff max time', 'dwell time'",s.jsx("br",{}),s.jsx("br",{}),"Support Staff Tab:",s.jsx("br",{}),"'Staff boarding'",s.jsx("br",{}),"Note: 'Max student per lpn', 'hca' and 'attendant' refer to a single field, student_staff_ratio, in the payload."]}),D=({form:e})=>{const[l,i]=E.useState("General"),t=[{label:"General",content:s.jsx(T,{form:e})},{label:"Time",content:s.jsx(v,{form:e})},{label:"Support Staff",content:s.jsx(w,{form:e})}];return s.jsxs(k,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx(d,{width:200,label:M}),s.jsx(R,{primaryTitle:"Business Rules",secondaryTitle:"NEW ROUTING JOB"}),s.jsx(A,{tabs:t,activeTab:l,setActiveTab:i})]}),s.jsx("div",{className:"detail-container"})]})};D.__docgenInfo={description:"",methods:[],displayName:"JobFormBusinessRules"};export{D as J};
