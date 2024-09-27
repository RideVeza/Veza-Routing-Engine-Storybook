import{j as e}from"./factory-BYdAncit.js";import{r as h}from"./index-BP8_t0zE.js";import{f as x}from"./index-DHgPtaHi.js";import{d as f}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as u}from"./theme-CBi4L4pb.js";import{B as S}from"./Button-BmZH4clo.js";import{J as T}from"./JobFormContentHeader-CpwVJsvY.js";import{T as j}from"./Table-CPynlTVo.js";import{T as C}from"./Tooltip-Bd5wOlBI.js";import{M as F}from"./Modal-BJIPIsOn.js";import{s as M,S as I}from"./StudentTable-CIrk78iY.js";import{a as v,b as A}from"./StudentTableData-D9Yt8CLD.js";import{C as N}from"./Card-sx5hwF33.js";import{F as W}from"./Flex-DB8_OMZA.js";import{T as p}from"./Title-BF1HBFC0.js";const J=f.div`
  background-color: ${s=>s.theme.colors.gray[0]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .selected-students-table {
    padding: 20px;
  }

  .main-student-section {
    height: 100%;
  }

  .card-student-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .add-student-card {
    width: 352px;
    height: 235px;
  }

  .student-card-text {
    text-align: center;
  }
`,P=({form:s,selectedStudents:l,setSelectedStudents:o})=>{const[d,i]=h.useState(!1),[_,n]=h.useState([]),c=t=>{y(s,t,o)},b=()=>{const t=l.filter(g=>!_.includes(g.id));y(s,t,o)},a=()=>i(!0),r=()=>i(!1),m=l.length>0;return e.jsxs(J,{theme:u,children:[e.jsx(T,{title:"Students",buttonText:"Add Students",buttonAction:a,itemsCount:l.length}),e.jsx(C,{width:200,label:M}),e.jsxs("div",{className:"main-student-section",children:[!m&&e.jsx("div",{className:"card-student-section",children:e.jsxs(N,{shadow:"lg",padding:"lg",radius:20,className:"add-student-card",children:[e.jsxs(W,{direction:"column",align:"center",gap:8,mb:24,children:[e.jsx(x,{className:"student-icon",size:40,color:u.colors.primary[5]}),e.jsx(p,{order:2,children:"Add Students"}),e.jsx(p,{order:4,className:"student-card-text",c:u.colors.gray[5],children:"Select students from the database to include in this routing job."})]}),e.jsx(S,{text:"Select Students",onClick:a})]})}),m&&e.jsx("div",{className:"selected-students-table",children:e.jsx(j,{elements:l,headers:v,renderCell:A,onSelectionChange:n,onPopoverAction:b,initialSelectedIds:[]})})]}),e.jsx(F,{modalContent:()=>e.jsx(I,{onCancel:r,onSelect:c,selectedStudentIds:l.map(t=>t.id)}),isOpen:d,modalWidth:"75vw",modalHeight:"70vh",onClose:r})]})};function y(s,l,o){const d=[],i=l.map(_=>{const{school:n,...c}=_,b=d.find(t=>t.name===n.name),a=[{id:1,name:"Computer program",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:00"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:30"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"12:00"}}},{id:2,name:"Assistive program",schedule:{Monday:{start_bell_time:"10:30",end_bell_time:"14:30"},Tuesday:{start_bell_time:"10:00",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:30",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:00",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"14:00"}}},{id:3,name:"Logic program",schedule:{Monday:{start_bell_time:"09:00",end_bell_time:"13:00"},Tuesday:{start_bell_time:"09:30",end_bell_time:"13:30"},Wednesday:{start_bell_time:"09:00",end_bell_time:"13:00"},Thursday:{start_bell_time:"09:30",end_bell_time:"13:30"},Friday:{start_bell_time:"09:30",end_bell_time:"12:30"}}},{id:4,name:"IT",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:30"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:00"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"13:00"}}},{id:5,name:"Maths",schedule:{Monday:{start_bell_time:"10:00",end_bell_time:"14:00"},Tuesday:{start_bell_time:"10:30",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:00",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:30",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"13:30"}}}],r=n.id,m=a[0].id;if(!b){const t={...n,programs:a};d.push(t)}return{...c,school_id:r,program_id:m}});s.setFieldValue("students",i),s.setFieldValue("schools",d),o(l)}P.__docgenInfo={description:"",methods:[],displayName:"JobFormStudent"};export{P as J};
