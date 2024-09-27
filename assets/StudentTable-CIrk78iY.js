import{j as t}from"./factory-BYdAncit.js";import{r as u}from"./index-BP8_t0zE.js";import{J as v,F as w}from"./JobFormContentHeader-CpwVJsvY.js";import{G as C}from"./index-B98Pt2jl.js";import{a as B,b as $,s as q}from"./StudentTableData-D9Yt8CLD.js";import{d as A}from"./styled-components.browser.esm-BzjHiQVu.js";import{g as _,a as N}from"./auth-ZgXK2BXz.js";import{b as T}from"./httpClient-DV4VuV9q.js";import{t as P}from"./theme-CBi4L4pb.js";import{g}from"./geocoding-9DEqa3JR.js";import{B as y}from"./Button-BmZH4clo.js";import{I as D}from"./Input-E5qBdqnX.js";import{T as F}from"./Table-CPynlTVo.js";import{T as G}from"./Tooltip-Bd5wOlBI.js";import{d as b}from"./RouteSelector-ChEJD9ic.js";const H=A.div`
  overflow: hidden;

  .table-section {
    height: 100%;
    background-color: ${o=>o.theme.colors.gray[0]};
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
`;async function L(o){const{where:p,orderBy:e={createdAt:"desc"},take:d,skip:r=0,cursor:a,fields:c=["id"],extraGqlQuery:s,extraGqlArgs:l=[],fetchPolicy:i,extraVariables:n}=o,f=_`
    query Students(${[...["$where: StudentWhereInput!","$orderBy: [StudentOrderByInput!]!","$take: Int","$skip: Int!","$cursor: StudentWhereUniqueInput"],...l].join(", ")}) {
      students(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${c.join(" ")}
      }
      ${s||""}
    }
  `;return await T.query({query:f,variables:{where:p,orderBy:e,take:d,skip:r,cursor:a,...n},fetchPolicy:i})}const R=t.jsxs(t.Fragment,{children:["Mocked data:",t.jsx("br",{}),"address (school address, home address, pick_up_stop, and drop_off_stop when not set in backend), dwell time, school service duration.",t.jsx("br",{}),t.jsx("br",{}),"The 'id' property is mocked because it's received as a string, but the backend currently accepts only numbers."]}),E=({onCancel:o,onSelect:p,selectedStudentIds:e})=>{const[d,r]=u.useState(""),[a,c]=u.useState(e),[s,l]=u.useState(),[i,n]=u.useState(!0);u.useEffect(()=>{(async()=>{try{n(!0);const I={where:{organization:{id:{equals:N.getFourSeasonsId()}}},fields:["id","person { name }","addresses { address1 address2 city country label latitude longtitude province zipCode }","active","equipmentRequirements { equipment }","attendant","hca","lpn","schools { id cleanedAddress schedules { amBell pmBell noSchool } schoolName schoolBoards { schoolBoardName } }"],cursor:null,fetchPolicy:"no-cache"},{data:k}=await L(I),j=await M(k.students,null);l(j),n(!1)}catch{n(!1)}})()},[1]);const f=m=>{r(m)},x=()=>{if(s){const m=s.filter(S=>a.includes(S.id));p(m),o()}};return t.jsxs(H,{theme:P,children:[t.jsx(v,{title:"Import Students",shouldRenderInput:!1,renderHeaderButtonComponent:()=>t.jsx(y,{text:"Import Selected "+(a.length?`(${a.length})`:""),variant:"filled",isDisabled:a.length===0,onClick:x}),onCancel:o}),t.jsxs("div",{className:"table-section",children:[t.jsxs("div",{className:"filter-section",children:[t.jsx("div",{className:"button-section",children:t.jsx(y,{text:"Add filter",variant:"transparent",isIconOnLeft:!0,icon:w,onClick:()=>console.log("Not implemented")})}),t.jsx(D,{placeholder:"Type to search",icon:C,value:d,isSearchInput:!0,variant:"unstyled",backgroundColor:"white",onChange:f})]}),t.jsx(G,{width:200,label:R}),t.jsx(F,{elements:s,headers:B,renderCell:$,onSelectionChange:c,initialSelectedIds:e,isLoading:i})]})]})};async function M(o,p){return Promise.all(o.map(async(e,d)=>{var n;const r=e.schools[0],a=q[d],c=[e.attendant&&"attendant",e.hca&&"hca",e.lpn&&"lpn"].filter(h=>typeof h=="string");let s=null,l=null,i=null;return(n=e.addresses)!=null&&n.length&&e.addresses[0].address1&&(s=await g(e.addresses[0].address1),s&&e.addresses[0].latitude&&e.addresses[0].longtitude&&(s.latitude=Number(e.addresses[0].latitude),s.longitude=Number(e.addresses[0].longtitude))),r.cleanedAddress&&(i=await g(r.cleanedAddress)),{id:d+1,name:e.person.name,address:{home_address:s,pick_up_stop:[{days:b,stop:l||s}],drop_off_stop:[{days:b,stop:l||s}]},school:{id:d+1,name:r.schoolName,service_duration:a.school.service_duration,address:i,schoolBoardName:r.schoolBoards[0].schoolBoardName??""},staffs:c,dwell_time:null}}))}E.__docgenInfo={description:"",methods:[],displayName:"StudentTable"};export{E as S,R as s};
