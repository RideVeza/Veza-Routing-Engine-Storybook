import{j as e}from"./factory-BYdAncit.js";import{r as x}from"./index-BP8_t0zE.js";import{L as b}from"./index-DGnWBzQX.js";import{d as j}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as c}from"./theme-CBi4L4pb.js";import{B as C}from"./Button-BmZH4clo.js";import{J as y}from"./JobFormContentHeader-CpwVJsvY.js";import{T}from"./Table-CPynlTVo.js";import{T as v}from"./Tooltip-Bd5wOlBI.js";import{M as F}from"./Modal-BJIPIsOn.js";import{s as N,S as I}from"./StaffTable-rMOStUUG.js";import{a as J,b as M}from"./StaffTableData-AU92TGBw.js";import{C as w}from"./Card-sx5hwF33.js";import{F as _}from"./Flex-DB8_OMZA.js";import{T as g}from"./Title-BF1HBFC0.js";const A=j.div`
  background-color: ${s=>s.theme.colors.gray[0]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .selected-staffs-table {
    padding: 20px;
  }

  .main-staff-section {
    height: 100%;
  }

  .card-staff-section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-staff-card {
    width: 352px;
    height: 235px;
  }

  .staff-card-text {
    text-align: center;
  }
`,L=({form:s,selectedStaffs:a,setSelectedStaffs:i})=>{const[o,r]=x.useState(!1),[l,f]=x.useState([]),d=n=>{S(s,n,i)},t=()=>{const n=a.filter(u=>!l.includes(u.id));S(s,n,i)},m=()=>r(!0),p=()=>r(!1),h=a.length>0;return e.jsxs(A,{theme:c,children:[e.jsx(y,{title:"Staff",buttonText:"Add Staff",buttonAction:m,itemsCount:a.length}),e.jsx(v,{width:200,label:N}),e.jsxs("div",{className:"main-staff-section",children:[!h&&e.jsx("div",{className:"card-staff-section",children:e.jsxs(w,{shadow:"lg",padding:"lg",radius:20,className:"add-staff-card",children:[e.jsxs(_,{direction:"column",align:"center",gap:8,mb:24,children:[e.jsx(b,{className:"staff-icon",size:40,color:c.colors.primary[5]}),e.jsx(g,{order:2,children:"Add Staff"}),e.jsx(g,{order:4,className:"staff-card-text",c:c.colors.gray[5],children:"Select staff from the database for this routing job."})]}),e.jsx(C,{text:"Select Staff",onClick:m})]})}),h&&e.jsx("div",{className:"selected-staffs-table",children:e.jsx(T,{elements:a,headers:J,renderCell:M,onSelectionChange:f,onPopoverAction:t,initialSelectedIds:[]})})]}),e.jsx(F,{modalContent:()=>e.jsx(I,{onCancel:p,onSelect:d,selectedStaffIds:a.map(n=>n.id)}),modalWidth:"75vw",modalHeight:"70vh",isOpen:o,onClose:p})]})};function S(s,a,i){const o={},r=[];a.forEach(l=>{const{staff_type:f,...d}=l;let t=f.toLowerCase().replace(" ","_");t==="driver"&&(t="drivers"),t!=="drivers"&&!r.includes(t)&&r.push(t),o[t]||(o[t]=[]),o[t].push(d)}),s.setFieldValue("staffs",o),s.setFieldValue("staff_types",r),i(a)}L.__docgenInfo={description:"",methods:[],displayName:"JobFormStaff"};export{L as J};
