import{j as e}from"./factory-BYdAncit.js";import{r as m}from"./index-BP8_t0zE.js";import{B as b}from"./index-5GZWFLL7.js";import{d as j}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as c}from"./theme-CBi4L4pb.js";import{B as C}from"./Button-BmZH4clo.js";import{J as y}from"./JobFormContentHeader-CpwVJsvY.js";import{T as S}from"./Table-CPynlTVo.js";import{T}from"./Tooltip-Bd5wOlBI.js";import{M as V}from"./Modal-BJIPIsOn.js";import{v as F,V as _}from"./VehicleTable-DJfCaTYC.js";import{a as B,b as N}from"./VehicleTableData-C3Bx52N8.js";import{C as J}from"./Card-sx5hwF33.js";import{F as M}from"./Flex-DB8_OMZA.js";import{T as h}from"./Title-BF1HBFC0.js";const w=j.div`
  background-color: ${t=>t.theme.colors.gray[0]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .selected-vehicles-table {
    padding: 20px;
  }

  .main-vehicle-section {
    height: 100%;
  }

  .card-vehicle-section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-vehicle-card {
    width: 352px;
    height: 235px;
  }

  .vehicle-card-text {
    text-align: center;
  }
`,A=({form:t,selectedVehicles:o,setSelectedVehicles:l})=>{const[s,i]=m.useState(!1),[x,f]=m.useState([]),g=a=>{p(t,a,l)},u=()=>{const a=o.filter(v=>!x.includes(v.id));p(t,a,l)},n=()=>i(!0),r=()=>i(!1),d=o.length>0;return e.jsxs(w,{theme:c,children:[e.jsx(y,{title:"Vehicles",buttonText:"Add Vehicles",buttonAction:n,itemsCount:o.length}),e.jsx(T,{width:200,label:F}),e.jsxs("div",{className:"main-vehicle-section",children:[!d&&e.jsx("div",{className:"card-vehicle-section",children:e.jsxs(J,{shadow:"lg",padding:"lg",radius:20,className:"add-vehicle-card",children:[e.jsxs(M,{direction:"column",align:"center",gap:8,mb:24,children:[e.jsx(b,{className:"vehicle-icon",size:40,color:c.colors.primary[5]}),e.jsx(h,{order:2,children:"Add Vehicles"}),e.jsx(h,{order:4,className:"vehicle-card-text",c:c.colors.gray[5],children:"Select vehicles from the database for this routing job."})]}),e.jsx(C,{text:"Select Vehicles",onClick:n})]})}),d&&e.jsx("div",{className:"selected-vehicles-table",children:e.jsx(S,{elements:o,headers:B,renderCell:N,onSelectionChange:f,onPopoverAction:u,initialSelectedIds:[]})})]}),e.jsx(V,{modalContent:()=>e.jsx(_,{onCancel:r,onSelect:g,selectedVehicleIds:o.map(a=>a.id)}),isOpen:s,modalWidth:"75vw",modalHeight:"70vh",onClose:r})]})};function p(t,o,l){const s=o.map(i=>({id:i.id.toString(),isLongBus:i.isLongBus,maximum_capacity:i.maximum_capacity,maximum_artificial_capacity:i.maximum_artificial_capacity}));t.setFieldValue("vehicles",s),l(o)}A.__docgenInfo={description:"",methods:[],displayName:"JobFormVehicle"};export{A as J};
