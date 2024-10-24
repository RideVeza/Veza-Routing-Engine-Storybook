import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{a as j}from"./index-BB_o3gze.js";import{d as b}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as c}from"./theme-DV-fQgRe.js";import{B as C}from"./Button-DgKJQOcJ.js";import{J as y}from"./JobFormContentHeader-CjKBG-OQ.js";import{T as S}from"./Table-DXKGnNOn.js";import{T}from"./Tooltip-CGEdOYwP.js";import{M as V}from"./Modal-DjE8Gf6o.js";import{v as F,V as _}from"./VehicleTable-D4SFxgvC.js";import{a as N}from"./VehicleTableData-DwLRMwZJ.js";import{C as B}from"./Card-D3lXULz8.js";import{F as J}from"./Flex-DfchtKyW.js";import{T as h}from"./Title-NR0nO8_X.js";const M=b.div`
  background-color: ${t=>t.theme.colors.gray[0]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .selected-vehicles-table {
    height: calc(90vh - 165px);
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
`,w=({form:t,selectedVehicles:o,setSelectedVehicles:s})=>{const[l,i]=m.useState(!1),[x,f]=m.useState([]),g=a=>{p(t,a,s)},u=()=>{const a=o.filter(v=>!x.includes(v.id));p(t,a,s)},n=()=>i(!0),r=()=>i(!1),d=o.length>0;return e.jsxs(M,{theme:c,children:[e.jsx(y,{title:"Vehicles",buttonText:"Add Vehicles",buttonAction:n,itemsCount:o.length}),e.jsx(T,{width:200,label:F}),e.jsxs("div",{className:"main-vehicle-section",children:[!d&&e.jsx("div",{className:"card-vehicle-section",children:e.jsxs(B,{shadow:"lg",padding:"lg",radius:20,className:"add-vehicle-card",children:[e.jsxs(J,{direction:"column",align:"center",gap:8,mb:24,children:[e.jsx(j,{className:"vehicle-icon",size:40,color:c.colors.primary[5]}),e.jsx(h,{order:2,children:"Add Vehicles"}),e.jsx(h,{order:4,className:"vehicle-card-text",c:c.colors.gray[5],children:"Select vehicles from the database for this routing job."})]}),e.jsx(C,{text:"Select Vehicles",onClick:n})]})}),d&&e.jsx("div",{className:"selected-vehicles-table",children:e.jsx(S,{elements:o,headers:N,onSelectionChange:f,onPopoverAction:u,initialSelectedIds:[]})})]}),e.jsx(V,{modalContent:()=>e.jsx(_,{onCancel:r,onSelect:g,selectedVehicleIds:o.map(a=>a.id)}),isOpen:l,modalWidth:"75vw",modalHeight:"70vh",onClose:r})]})};function p(t,o,s){const l=o.map(i=>({id:i.id.toString(),isLongBus:i.isLongBus,maximum_capacity:i.maximum_capacity,maximum_artificial_capacity:i.maximum_artificial_capacity}));t.setFieldValue("vehicles",l),s(o)}w.__docgenInfo={description:"",methods:[],displayName:"JobFormVehicle"};export{w as J};
