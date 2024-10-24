import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as x}from"./index-BP8_t0zE.js";import{L as j}from"./index-DGnWBzQX.js";import{d as b}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as c}from"./theme-DV-fQgRe.js";import{B as C}from"./Button-DgKJQOcJ.js";import{J as y}from"./JobFormContentHeader-CjKBG-OQ.js";import{T}from"./Table-DXKGnNOn.js";import{T as v}from"./Tooltip-CGEdOYwP.js";import{M as F}from"./Modal-DjE8Gf6o.js";import{s as N,S as I}from"./StaffTable-AKyuZArY.js";import{a as J}from"./StaffTableData-DbutbEDt.js";import{C as M}from"./Card-D3lXULz8.js";import{F as w}from"./Flex-DfchtKyW.js";import{T as g}from"./Title-NR0nO8_X.js";const _=b.div`
  background-color: ${o=>o.theme.colors.gray[0]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .selected-staffs-table {
    height: calc(90vh - 165px);
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
`,A=({form:o,selectedStaffs:a,setSelectedStaffs:n})=>{const[s,r]=x.useState(!1),[l,f]=x.useState([]),d=i=>{S(o,i,n)},e=()=>{const i=a.filter(u=>!l.includes(u.id));S(o,i,n)},m=()=>r(!0),p=()=>r(!1),h=a.length>0;return t.jsxs(_,{theme:c,children:[t.jsx(y,{title:"Staff",buttonText:"Add Staff",buttonAction:m,itemsCount:a.length}),t.jsx(v,{width:200,label:N}),t.jsxs("div",{className:"main-staff-section",children:[!h&&t.jsx("div",{className:"card-staff-section",children:t.jsxs(M,{shadow:"lg",padding:"lg",radius:20,className:"add-staff-card",children:[t.jsxs(w,{direction:"column",align:"center",gap:8,mb:24,children:[t.jsx(j,{className:"staff-icon",size:40,color:c.colors.primary[5]}),t.jsx(g,{order:2,children:"Add Staff"}),t.jsx(g,{order:4,className:"staff-card-text",c:c.colors.gray[5],children:"Select staff from the database for this routing job."})]}),t.jsx(C,{text:"Select Staff",onClick:m})]})}),h&&t.jsx("div",{className:"selected-staffs-table",children:t.jsx(T,{elements:a,headers:J,onSelectionChange:f,onPopoverAction:e,initialSelectedIds:[]})})]}),t.jsx(F,{modalContent:()=>t.jsx(I,{onCancel:p,onSelect:d,selectedStaffIds:a.map(i=>i.id)}),modalWidth:"75vw",modalHeight:"70vh",isOpen:s,onClose:p})]})};function S(o,a,n){const s={},r=[];a.forEach(l=>{const{staff_type:f,...d}=l;let e=f.toLowerCase().replace(" ","_");e==="driver"&&(e="drivers"),e!=="drivers"&&!r.includes(e)&&r.push(e),s[e]||(s[e]=[]),s[e].push(d)}),o.setFieldValue("staffs",s),o.setFieldValue("staff_types",r),n(a)}A.__docgenInfo={description:"",methods:[],displayName:"JobFormStaff"};export{A as J};
