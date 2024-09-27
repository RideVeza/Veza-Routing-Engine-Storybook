import{j as t}from"./factory-BYdAncit.js";import{r as c}from"./index-BP8_t0zE.js";import{J as j,F as T}from"./JobFormContentHeader-CpwVJsvY.js";import{G as k}from"./index-B98Pt2jl.js";import{a as C,b as B}from"./StaffTableData-AU92TGBw.js";import{d as A}from"./styled-components.browser.esm-BzjHiQVu.js";import{g as w,a as $}from"./auth-ZgXK2BXz.js";import{b as q}from"./httpClient-DV4VuV9q.js";import{t as N}from"./theme-CBi4L4pb.js";import{b as y}from"./date-DtSnoD3t.js";import{g as P}from"./geocoding-9DEqa3JR.js";import{B as g}from"./Button-BmZH4clo.js";import{I as _}from"./Input-E5qBdqnX.js";import{T as L}from"./Table-CPynlTVo.js";import{T as E}from"./Tooltip-Bd5wOlBI.js";const H=A.div`
  height: 80vh;

  .table-section {
    height: 100%;
    background-color: ${n=>n.theme.colors.gray[0]};
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
`;async function D(n){const{where:e,orderBy:l={createdAt:"asc"},take:d,skip:s=0,cursor:a,fields:r=["id"],extraGqlQuery:i,fetchPolicy:o,extraVariables:p}=n,h=w`
    query Employees(${[...["$where: EmployeeWhereInput!","$orderBy: [EmployeeOrderByInput!]!","$take: Int","$skip: Int!","$cursor: EmployeeWhereUniqueInput"]].join(", ")}) {
      employees(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${r.join(" ")}
      }
      ${i||""}
    }
  `;return await q.query({query:h,variables:{where:e,orderBy:l,take:d,skip:s,cursor:a,...p},fetchPolicy:o})}const F=t.jsxs(t.Fragment,{children:["Mocked data:",t.jsx("br",{}),"address (when not set on backend), canStoreBusAtHome and canStoreLargeBusAtHome.",t.jsx("br",{}),"Note:",t.jsx("br",{}),"The 'id' property is mocked because it's received as a string, but the backend currently accepts only numbers."]}),W=({onCancel:n,onSelect:e,selectedStaffIds:l})=>{const[d,s]=c.useState(""),[a,r]=c.useState(l),[i,o]=c.useState(),[p,m]=c.useState(!0);c.useEffect(()=>{(async()=>{try{m(!0);const x={where:{member:{organization:{id:{equals:$.getFourSeasonsId()}}},jobTitle:{notIn:["Supervisor","Office Staff"]}},fields:["id","employeeName","jobTitle","driverLicenses { licenseClass }","addresses { address1 address2 city country latitude longtitude province zipCode }","availabilityBlocks { day startTime endTime }"],cursor:null,fetchPolicy:"no-cache"},{data:v}=await D(x),I=await G(v.employees);o(I),m(!1)}catch{m(!1)}})()},[1]);const b=u=>{s(u)},S=()=>{if(i){const u=i.filter(f=>a.includes(f.id));e(u),n()}};return t.jsxs(H,{theme:N,children:[t.jsx(j,{title:"Import Staff",shouldRenderInput:!1,renderHeaderButtonComponent:()=>t.jsx(g,{text:"Import Selected "+(a.length?`(${a.length})`:""),variant:"filled",isDisabled:a.length===0,onClick:S}),onCancel:n}),t.jsxs("div",{className:"table-section",children:[t.jsxs("div",{className:"filter-section",children:[t.jsx("div",{className:"button-section",children:t.jsx(g,{text:"Add filter",variant:"transparent",isIconOnLeft:!0,icon:T,onClick:()=>console.log("Not implemented")})}),t.jsx(_,{placeholder:"Type to search",icon:k,value:d,isSearchInput:!0,variant:"unstyled",backgroundColor:"white",onChange:b})]}),t.jsx(E,{width:200,label:F}),t.jsx(L,{elements:i,headers:C,renderCell:B,onSelectionChange:r,initialSelectedIds:l,isLoading:p})]})]})};async function G(n){return Promise.all(n.map(async(e,l)=>{var i;const d=e.driverLicenses.map(o=>o.licenseClass);let s=null;(i=e.addresses)!=null&&i.length&&e.addresses[0].address1&&(s=await P(e.addresses[0].address1),s&&e.addresses[0].latitude&&e.addresses[0].longtitude&&(s.latitude=Number(e.addresses[0].latitude),s.longitude=Number(e.addresses[0].longtitude))),s||(s={street:"330 17 Ave SW",city:"Calgary",province:"AB",postal_code:"T2S 0A8"});let a=[];e.availabilityBlocks.length>0&&(a=e.availabilityBlocks.map(o=>({day:o.day,time_slots:[{start_time:y(o.startTime),end_time:y(o.endTime)}]})));const r={id:l+1,name:e.employeeName,address:s,unavailabilityWindows:a,staff_type:e.jobTitle,licenseClass:d};return r.staff_type==="Driver"?(r.canStoreBusAtHome=!0,r.canStoreLargeBusAtHome=!0):r.require_pickup=Math.random()>=.5,r}))}W.__docgenInfo={description:"",methods:[],displayName:"StaffTable"};export{W as S,F as s};
