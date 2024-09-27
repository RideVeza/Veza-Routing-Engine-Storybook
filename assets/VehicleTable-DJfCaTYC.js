import{j as e}from"./factory-BYdAncit.js";import{r as c}from"./index-BP8_t0zE.js";import{J as V,F as j}from"./JobFormContentHeader-CpwVJsvY.js";import{G as k}from"./index-B98Pt2jl.js";import{a as w,b as S,v as _}from"./VehicleTableData-C3Bx52N8.js";import{d as $}from"./styled-components.browser.esm-BzjHiQVu.js";import{g as C,a as q}from"./auth-ZgXK2BXz.js";import{b as T}from"./httpClient-DV4VuV9q.js";import{t as B}from"./theme-CBi4L4pb.js";import{B as b}from"./Button-BmZH4clo.js";import{I as N}from"./Input-E5qBdqnX.js";import{T as L}from"./Table-CPynlTVo.js";import{T as P}from"./Tooltip-Bd5wOlBI.js";const A=$.div`
  height: 80vh;

  .table-section {
    height: 100%;
    background-color: ${s=>s.theme.colors.gray[0]};
    padding: 12px 20px 20px 20px;
  }

  .button-section {
    width: 120px;
  }

  .filter-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`;async function D(s){const{where:a,orderBy:r={createdAt:"asc"},take:t,skip:h=0,cursor:i,fields:d=["id"],extraGqlQuery:o,fetchPolicy:u,extraVariables:m}=s,f=C`
    query Vehicles(${[...["$where: VehicleWhereInput!","$orderBy: [VehicleOrderByInput!]!","$take: Int","$skip: Int!","$cursor: VehicleWhereUniqueInput"]].join(", ")}) {
      vehicles(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${d.join(" ")}
      }
      ${o||""}
    }
  `;return await T.query({query:f,variables:{where:a,orderBy:r,take:t,skip:h,cursor:i,...m},fetchPolicy:u})}const F=e.jsxs(e.Fragment,{children:["Mocked data:",e.jsx("br",{}),"isLongBus, maximum_artificial_capacity, wheelchair_spaces, wheelchair, booster_seats",e.jsx("br",{}),"Note:",e.jsx("br",{}),"The 'id' property is mocked because it's received as a string, but the backend currently accepts only numbers."]}),E=({onCancel:s,onSelect:a,selectedVehicleIds:r})=>{const[t,h]=c.useState(""),[i,d]=c.useState(r),[o,u]=c.useState(),[m,n]=c.useState(!0);c.useEffect(()=>{(async()=>{try{n(!0);const x={where:{organization:{id:{equals:q.getFourSeasonsId()}},active:{equals:!0}},fields:["id","active","unitNumber","seats","unitEquipments { quantity }","year"],cursor:null,fetchPolicy:"no-cache"},{data:I}=await D(x),v=G(I.vehicles);u(v),n(!1)}catch{n(!1)}})()},[1]);const g=l=>{h(l)},y=()=>{if(o){const l=o.filter(p=>i.includes(p.id));a(l),s()}};return e.jsxs(A,{theme:B,children:[e.jsx(V,{title:"Import Vehicles",shouldRenderInput:!1,renderHeaderButtonComponent:()=>e.jsx(b,{text:"Import Selected "+(i.length?`(${i.length})`:""),variant:"filled",isDisabled:i.length===0,onClick:y}),onCancel:s}),e.jsxs("div",{className:"table-section",children:[e.jsxs("div",{className:"filter-section",children:[e.jsx("div",{className:"button-section",children:e.jsx(b,{text:"Add filter",variant:"transparent",isIconOnLeft:!0,icon:j,onClick:()=>console.log("Not implemented")})}),e.jsx(N,{placeholder:"Type to search",icon:k,value:t,isSearchInput:!0,variant:"unstyled",backgroundColor:"white",onChange:g})]}),e.jsx(P,{width:200,label:F}),e.jsx(L,{elements:o,headers:w,renderCell:S,onSelectionChange:d,initialSelectedIds:r,isLoading:m})]})]})};function G(s){return s.map((a,r)=>{const t=_[r];return{id:r+1,unit_id:a.unitNumber,model_year:a.year,isLongBus:t.isLongBus,maximum_capacity:a.seats,maximum_artificial_capacity:t.maximum_artificial_capacity,wheelchair_spaces:t.wheelchair_spaces,wheelchair:t.wheelchair,booster_seats:t.booster_seats}})}E.__docgenInfo={description:"",methods:[],displayName:"VehicleTable"};export{E as V,F as v};
