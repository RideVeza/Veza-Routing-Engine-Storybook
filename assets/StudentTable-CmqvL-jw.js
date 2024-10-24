import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{J as _,F as N}from"./JobFormContentHeader-CjKBG-OQ.js";import{G as T}from"./index-B98Pt2jl.js";import{a as P,s as F}from"./StudentTableData-DQIngskh.js";import{d as G}from"./styled-components.browser.esm-Dx2qpfAi.js";import{g as M,a as D}from"./auth-h26ZURLX.js";import{b as H}from"./httpClient-BlwsOI9O.js";import{t as L}from"./theme-DV-fQgRe.js";import{g as x}from"./geocoding-CnqdWub3.js";import{d as b}from"./routes-Ss6aDr-t.js";import{B as k}from"./Button-DgKJQOcJ.js";import{I as E}from"./Input-B6p2Evf3.js";import{T as O}from"./Table-DXKGnNOn.js";import{T as Q}from"./Tooltip-CGEdOYwP.js";const R=G.div`
  height: 70vh;
  display: flex;
  flex-direction: column;

  .table-section {
    padding: 12px 20px 20px 20px;
    flex: 1;
    background-color: ${n=>n.theme.colors.gray[0]};

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
`;async function V(n){const{where:f,orderBy:u={createdAt:"desc"},take:e,skip:d=0,cursor:s,fields:m=["id"],extraGqlQuery:o,extraGqlArgs:a=[],fetchPolicy:p,extraVariables:r}=n,h=M`
    query Students(${[...["$where: StudentWhereInput!","$orderBy: [StudentOrderByInput!]!","$take: Int","$skip: Int!","$cursor: StudentWhereUniqueInput"],...a].join(", ")}) {
      students(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${m.join(" ")}
      }
      ${o||""}
    }
  `;return await H.query({query:h,variables:{where:f,orderBy:u,take:e,skip:d,cursor:s,...r},fetchPolicy:p})}const W=t.jsxs(t.Fragment,{children:["Mocked data:",t.jsx("br",{}),"address (school address, home address, pick_up_stop, and drop_off_stop when not set in backend), dwell time, school service duration.",t.jsx("br",{}),t.jsx("br",{}),"The 'id' property is mocked because it's received as a string, but the backend currently accepts only numbers."]}),z=({onCancel:n,onSelect:f,selectedStudentIds:u})=>{const[e,d]=c.useState(""),[s,m]=c.useState(u),[o,a]=c.useState(),[p,r]=c.useState(!0),[l,h]=c.useState(0),[I,j]=c.useState(0),g=10,v=async i=>{try{r(!0);const q={where:{organization:{id:{equals:D.getFourSeasonsId()}}},extraGqlQuery:"studentsCount(where: $where)",take:g,skip:i,fields:["id","person { name }","addresses { address1 address2 city country label latitude longtitude province zipCode }","active","equipmentRequirements { equipment }","attendant","hca","lpn","schools { id cleanedAddress schedules { amBell pmBell noSchool } schoolName schoolBoards { schoolBoardName } }"],cursor:null,fetchPolicy:"no-cache"},{data:y}=await V(q),B=await J(y.students,null,l);a(A=>[...A||[],...B]),j(y.studentsCount),r(!1)}catch{r(!1)}};c.useEffect(()=>{v(l)},[l]);const w=()=>{o!=null&&o.length&&o.length<I&&h(i=>i+g)},C=i=>{d(i)},$=()=>{if(o){const i=o.filter(S=>s.includes(S.id));f(i),n()}};return t.jsxs(R,{theme:L,children:[t.jsx(_,{title:"Import Students",shouldRenderInput:!1,renderHeaderButtonComponent:()=>t.jsx(k,{text:"Import Selected "+(s.length?`(${s.length})`:""),variant:"filled",isDisabled:s.length===0,onClick:$}),onCancel:n}),t.jsxs("div",{className:"table-section",children:[t.jsxs("div",{className:"filter-section",children:[t.jsx("div",{className:"button-section",children:t.jsx(k,{text:"Add filter",variant:"transparent",isIconOnLeft:!0,icon:N,onClick:()=>console.log("Not implemented")})}),t.jsx(E,{placeholder:"Type to search",icon:T,value:e,isSearchInput:!0,variant:"unstyled",onChange:C})]}),t.jsx(Q,{width:200,label:W}),t.jsx("div",{className:"table-content",children:t.jsx(O,{elements:o,headers:P,onSelectionChange:m,initialSelectedIds:u,isLoading:p,loadMoreData:w})})]})]})};async function J(n,f,u){return Promise.all(n.map(async(e,d)=>{var l;const s=e.schools[0],m=F[d],o=[e.attendant&&"attendant",e.hca&&"hca",e.lpn&&"lpn"].filter(h=>typeof h=="string");let a=null,p=null,r=null;return(l=e.addresses)!=null&&l.length&&e.addresses[0].address1&&(a=await x(e.addresses[0].address1),a&&e.addresses[0].latitude&&e.addresses[0].longtitude&&(a.latitude=Number(e.addresses[0].latitude),a.longitude=Number(e.addresses[0].longtitude))),s.cleanedAddress&&(r=await x(s.cleanedAddress)),{id:d+u+1,name:e.person.name,address:{home_address:a,pick_up_stop:[{days:b,stop:p||a}],drop_off_stop:[{days:b,stop:p||a}]},school:{id:d+1,name:s.schoolName,service_duration:m.school.service_duration,address:r,schoolBoardName:s.schoolBoards[0].schoolBoardName??""},staffs:o,dwell_time:null}}))}z.__docgenInfo={description:"",methods:[],displayName:"StudentTable"};export{z as S,W as s};
