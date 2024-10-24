import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{J as C,F as q}from"./JobFormContentHeader-CjKBG-OQ.js";import{G as B}from"./index-B98Pt2jl.js";import{a as T,v as N}from"./VehicleTableData-DwLRMwZJ.js";import{d as L}from"./styled-components.browser.esm-Dx2qpfAi.js";import{g as A,a as F}from"./auth-h26ZURLX.js";import{b as M}from"./httpClient-BlwsOI9O.js";import{t as P}from"./theme-DV-fQgRe.js";import{B as g}from"./Button-DgKJQOcJ.js";import{I as D}from"./Input-B6p2Evf3.js";import{T as E}from"./Table-DXKGnNOn.js";import{T as G}from"./Tooltip-CGEdOYwP.js";const H=L.div`
  height: 70vh;
  display: flex;
  flex-direction: column;

  .table-section {
    padding: 12px 20px 20px 20px;
    flex: 1;
    background-color: ${r=>r.theme.colors.gray[0]};

    display: flex;
    flex-direction: column;
  }

  .table-content {
    height: calc(70vh - 168px);
  }

  .button-section {
    width: 120px;
  }

  .filter-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`;async function Q(r){const{where:l,orderBy:s={createdAt:"asc"},take:c,skip:t=0,cursor:n,fields:d=["id"],extraGqlQuery:a,fetchPolicy:p,extraVariables:m}=r,h=A`
    query Vehicles(${[...["$where: VehicleWhereInput!","$orderBy: [VehicleOrderByInput!]!","$take: Int","$skip: Int!","$cursor: VehicleWhereUniqueInput"]].join(", ")}) {
      vehicles(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${d.join(" ")}
      }
      ${a||""}
    }
  `;return await M.query({query:h,variables:{where:l,orderBy:s,take:c,skip:t,cursor:n,...m},fetchPolicy:p})}const W=e.jsxs(e.Fragment,{children:["Mocked data:",e.jsx("br",{}),"isLongBus, maximum_artificial_capacity, wheelchair_spaces, wheelchair, booster_seats",e.jsx("br",{}),"Note:",e.jsx("br",{}),"The 'id' property is mocked because it's received as a string, but the backend currently accepts only numbers."]}),J=({onCancel:r,onSelect:l,selectedVehicleIds:s})=>{const[c,t]=o.useState(""),[n,d]=o.useState(s),[a,p]=o.useState(),[m,u]=o.useState(!0),[h,b]=o.useState(0),[_,v]=o.useState(0),x=10,w=async i=>{try{u(!0);const j={where:{organization:{id:{equals:F.getFourSeasonsId()}},active:{equals:!0}},extraGqlQuery:"vehiclesCount(where: $where)",take:x,skip:i,fields:["id","active","unitNumber","seats","unitEquipments { quantity }","year"],cursor:null,fetchPolicy:"no-cache"},{data:y}=await Q(j),S=O(y.vehicles,h);p($=>[...$||[],...S]),v(y.vehiclesCount),u(!1)}catch{u(!1)}};o.useEffect(()=>{w(h)},[h]);const I=()=>{a!=null&&a.length&&a.length<_&&b(i=>i+x)},k=i=>{t(i)},V=()=>{if(a){const i=a.filter(f=>n.includes(f.id));l(i),r()}};return e.jsxs(H,{theme:P,children:[e.jsx(C,{title:"Import Vehicles",shouldRenderInput:!1,renderHeaderButtonComponent:()=>e.jsx(g,{text:"Import Selected "+(n.length?`(${n.length})`:""),variant:"filled",isDisabled:n.length===0,onClick:V}),onCancel:r}),e.jsxs("div",{className:"table-section",children:[e.jsxs("div",{className:"filter-section",children:[e.jsx("div",{className:"button-section",children:e.jsx(g,{text:"Add filter",variant:"transparent",isIconOnLeft:!0,icon:q,onClick:()=>console.log("Not implemented")})}),e.jsx(D,{placeholder:"Type to search",icon:B,value:c,isSearchInput:!0,variant:"unstyled",onChange:k})]}),e.jsx(G,{width:200,label:W}),e.jsx("div",{className:"table-content",children:e.jsx(E,{elements:a,headers:T,onSelectionChange:d,initialSelectedIds:s,isLoading:m,loadMoreData:I})})]})]})};function O(r,l){return r.map((s,c)=>{const t=N[c];return{id:c+l+1,unit_id:s.unitNumber,model_year:s.year,isLongBus:t.isLongBus,maximum_capacity:{regular_seats:s.seats,wheel_chair_spaces:t.maximum_capacity.wheel_chair_spaces},maximum_artificial_capacity:{regular_seats:s.seats,wheel_chair_spaces:t.maximum_artificial_capacity.wheel_chair_spaces},wheelchair_spaces:t.wheelchair_spaces,wheelchair:t.wheelchair,booster_seats:t.booster_seats}})}J.__docgenInfo={description:"",methods:[],displayName:"VehicleTable"};export{J as V,W as v};
