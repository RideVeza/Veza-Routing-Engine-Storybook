import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as i}from"./index-BP8_t0zE.js";import{J as $,F as q}from"./JobFormContentHeader-CjKBG-OQ.js";import{G as N}from"./index-B98Pt2jl.js";import{a as _}from"./StaffTableData-DbutbEDt.js";import{d as E}from"./styled-components.browser.esm-Dx2qpfAi.js";import{g as L,a as H}from"./auth-h26ZURLX.js";import{b as P}from"./httpClient-BlwsOI9O.js";import{t as F}from"./theme-DV-fQgRe.js";import{c as S}from"./date-pny-vRhT.js";import{g as M}from"./geocoding-CnqdWub3.js";import{B as b}from"./Button-DgKJQOcJ.js";import{I as W}from"./Input-B6p2Evf3.js";import{T as D}from"./Table-DXKGnNOn.js";import{T as G}from"./Tooltip-CGEdOYwP.js";const O=E.div`
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
`;async function Q(r){const{where:c,orderBy:e={createdAt:"asc"},take:m,skip:p=0,cursor:a,fields:l=["id"],extraGqlQuery:s,fetchPolicy:d,extraVariables:o}=r,u=L`
    query Employees(${[...["$where: EmployeeWhereInput!","$orderBy: [EmployeeOrderByInput!]!","$take: Int","$skip: Int!","$cursor: EmployeeWhereUniqueInput"]].join(", ")}) {
      employees(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${l.join(" ")}
      }
      ${s||""}
    }
  `;return await P.query({query:u,variables:{where:c,orderBy:e,take:m,skip:p,cursor:a,...o},fetchPolicy:d})}const V=t.jsxs(t.Fragment,{children:["Mocked data:",t.jsx("br",{}),"address (when not set on backend), canStoreBusAtHome and canStoreLargeBusAtHome.",t.jsx("br",{}),"Note:",t.jsx("br",{}),"The 'id' property is mocked because it's received as a string, but the backend currently accepts only numbers."]}),z=({onCancel:r,onSelect:c,selectedStaffIds:e})=>{const[m,p]=i.useState(""),[a,l]=i.useState(e),[s,d]=i.useState(),[o,f]=i.useState(!0),[u,x]=i.useState(0),[v,j]=i.useState(0),y=10,k=async n=>{try{f(!0);const B={where:{member:{organization:{id:{equals:H.getFourSeasonsId()}}},jobTitle:{notIn:["Supervisor","Office Staff"]}},extraGqlQuery:"employeesCount(where: $where)",take:y,skip:n,fields:["id","employeeName","jobTitle","driverLicenses { licenseClass }","addresses { address1 address2 city country latitude longtitude province zipCode }","availabilityBlocks { day startTime endTime }"],cursor:null,fetchPolicy:"no-cache"},{data:g}=await Q(B),w=await J(g.employees,u);d(A=>[...A||[],...w]),j(g.employeesCount),f(!1)}catch{f(!1)}};i.useEffect(()=>{k(u)},[u]);const I=()=>{s!=null&&s.length&&s.length<v&&x(n=>n+y)},C=n=>{p(n)},T=()=>{if(s){const n=s.filter(h=>a.includes(h.id));c(n),r()}};return t.jsxs(O,{theme:F,children:[t.jsx($,{title:"Import Staff",shouldRenderInput:!1,renderHeaderButtonComponent:()=>t.jsx(b,{text:"Import Selected "+(a.length?`(${a.length})`:""),variant:"filled",isDisabled:a.length===0,onClick:T}),onCancel:r}),t.jsxs("div",{className:"table-section",children:[t.jsxs("div",{className:"filter-section",children:[t.jsx("div",{className:"button-section",children:t.jsx(b,{text:"Add filter",variant:"transparent",isIconOnLeft:!0,icon:q,onClick:()=>console.log("Not implemented")})}),t.jsx(W,{placeholder:"Type to search",icon:N,value:m,isSearchInput:!0,variant:"unstyled",onChange:C})]}),t.jsx(G,{width:200,label:V}),t.jsx("div",{className:"table-content",children:t.jsx(D,{elements:s,headers:_,onSelectionChange:l,initialSelectedIds:e,isLoading:o,loadMoreData:I})})]})]})};async function J(r,c){return Promise.all(r.map(async(e,m)=>{var d;const p=e.driverLicenses.map(o=>o.licenseClass);let a=null;(d=e.addresses)!=null&&d.length&&e.addresses[0].address1&&(a=await M(e.addresses[0].address1),a&&e.addresses[0].latitude&&e.addresses[0].longtitude&&(a.latitude=Number(e.addresses[0].latitude),a.longitude=Number(e.addresses[0].longtitude))),a||(a={street:"330 17 Ave SW",city:"Calgary",province:"AB",postal_code:"T2S 0A8"});let l=[];e.availabilityBlocks.length>0&&(l=e.availabilityBlocks.map(o=>({day:o.day,time_slots:[{start_time:S(o.startTime),end_time:S(o.endTime)}]})));const s={id:m+c+1,name:e.employeeName,address:a,unavailabilityWindows:l,staff_type:e.jobTitle,licenseClass:p};return s.staff_type==="Driver"?(s.canStoreBusAtHome=!0,s.canStoreLargeBusAtHome=!0):s.require_pickup=Math.random()>=.5,s}))}z.__docgenInfo={description:"",methods:[],displayName:"StaffTable"};export{z as S,V as s};
