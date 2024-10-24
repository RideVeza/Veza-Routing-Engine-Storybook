import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{d as j}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as w}from"./theme-DV-fQgRe.js";import{B as q}from"./Button-DgKJQOcJ.js";import{F as y}from"./Flex-DfchtKyW.js";import{T as S}from"./Title-NR0nO8_X.js";import{I as W}from"./Input-B6p2Evf3.js";import{O as v}from"./ObjectBadge-BW0P1RiL.js";import{S as k}from"./SelectInput-Cmdq-hxt.js";import{S as V}from"./SwitchComponent-Cs0CNOmW.js";import{T as I}from"./TextAreaInput-BfyWLCcP.js";import{S as B}from"./ScrollArea-D4tNmDXS.js";import{J as U}from"./jobs-DhiDD4xb.js";import{d as L}from"./date-pny-vRhT.js";import{d as E}from"./routes-Ss6aDr-t.js";import{D as $}from"./DayShiftSelector-xfVhayJK.js";import{S as G}from"./ScheduleStepHeader-CxLKW8nK.js";import{C as J}from"./ContextWindowHeader-DOOOqHPz.js";import{u as Y}from"./use-form-yKeun-xg.js";const z=j.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`,_=j.div`
  height: 100%;
  flex-grow: 1;
`,K=j.div`
  background-color: white;
  padding: 16px 12px 16px 8px;
  width: 100%;
  position: relative;

  .content-section {
    width: 100%;
  }

  .label-container {
    width: 156px;
    padding: 4px 8px;
  }

  .value-container {
    width: 100%;
    height: ${t=>t.$isFullWidthValue?"auto":"32px"};

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .last-detail-section {
    width: 100%;
  }

  .detail-item-wrapper {
    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: ${t=>t.theme.colors.gray[2]};
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 0;
    }
  }
`,i=({label:t,value:s,rightSectionContent:l,isFullWidthValue:o=!1,actionButtonText:n,onActionButtonClick:r,shouldHideBorder:d})=>e.jsx(K,{theme:w,$isFullWidthValue:o,children:e.jsx("div",{className:d?"":"detail-item-wrapper",children:e.jsxs(y,{direction:o?"column":"row",align:o?"start":"center",gap:o?4:8,className:"content-section",children:[e.jsxs(y,{align:"center",justify:"space-between",children:[e.jsx(S,{order:5,fw:500,c:w.colors.gray[6],className:"label-container",children:t}),o&&n&&e.jsx(q,{variant:"transparent",text:n,onClick:()=>r})]}),e.jsxs(y,{align:"center",justify:"space-between",className:"last-detail-section",children:[e.jsx("div",{className:"value-container",children:s}),l&&l]})]})})});i.__docgenInfo={description:"",methods:[],displayName:"DetailListItem",props:{isFullWidthValue:{defaultValue:{value:"false",computed:!1},required:!1}}};const F=({form:t,isEditMode:s})=>e.jsx(_,{children:e.jsxs(B,{h:"61vh",children:[e.jsx(i,{label:"Name",isFullWidthValue:!0,value:e.jsx(I,{isPreview:!s,disabled:!s,value:t.values.name,placeholder:"Human Readable Route Name Goes Here",...t.getInputProps("name")})}),e.jsx(i,{label:"Identifier",isFullWidthValue:!1,value:e.jsx(W,{value:t.values.identifier,placeholder:"CBE-0002",isPreview:!s,...t.getInputProps("identifier")})}),e.jsx(i,{label:"High needs",isFullWidthValue:!1,value:e.jsxs(e.Fragment,{children:[s&&e.jsx(V,{disabled:!s,value:t.values.hasHighNeeds,...t.getInputProps("hasHighNeeds")}),!s&&e.jsx(S,{order:5,fw:500,children:t.values.hasHighNeeds===!0?"Yes":"No"})]})}),e.jsxs("div",{className:"unit-information-field",children:[s&&e.jsx(i,{label:"Unit",isFullWidthValue:!1,value:e.jsx(k,{defaultValue:t.values.unit,hasSearchIcon:!0,rightIconName:"SelectArrow",optionsData:["1023WC","2011","2017WC","8400","1035WC","2008WC"],...t.getInputProps("unit")})}),!s&&e.jsx(i,{label:"Unit",isFullWidthValue:!1,value:e.jsx(e.Fragment,{children:t.values.unit&&e.jsx(v,{value:t.values.unit,iconName:"Bus"})})})]}),e.jsx(i,{label:"School",isFullWidthValue:!1,value:e.jsx(e.Fragment,{children:t.values.schoolName&&e.jsx(v,{value:t.values.schoolName,iconName:"GraduationCap"})})}),e.jsx(i,{label:"School Board",isFullWidthValue:!1,value:e.jsx(e.Fragment,{children:t.values.schoolBoard&&e.jsx(v,{value:t.values.schoolBoard,iconName:"GraduationCap"})})}),e.jsx(i,{label:"Notes",isFullWidthValue:!0,shouldHideBorder:!0,value:e.jsx(I,{value:t.values.note,isPreview:!s,disabled:!s,placeholder:"Notes",...t.getInputProps("note")})})]})});F.__docgenInfo={description:"",methods:[],displayName:"RouteDetailsInformation",props:{form:{required:!0,tsType:{name:"UseFormReturnType",elements:[{name:"IRouteInformation"}],raw:"UseFormReturnType<IRouteInformation>"},description:""},isEditMode:{required:!0,tsType:{name:"boolean"},description:""}}};var u=(t=>(t.START_DEPOT="start_depot",t.END_DEPOT="end_depot",t.SCHOOL_STOP="school_stop",t.STUDENT_STOP="student_stop",t))(u||{});const O=({routes:t,isEditMode:s})=>{const[l,o]=c.useState(E[0]),[n,r]=c.useState(U.AM),[d,x]=c.useState([]),[p,f]=c.useState(null);return c.useEffect(()=>{const m=t.map(a=>({...a,formattedRouteStopsByDay:a.formattedRouteStopsByDay.filter(h=>h.shift===n)}));x(m);const g=m.filter(a=>a.dayOfTheWeek===l)[0].formattedRouteStopsByDay[0],H=[...g.departureRouteStops,...g.backRouteStops];let D=1;const N=H.map(a=>{const h=[u.SCHOOL_STOP,u.STUDENT_STOP].includes(a.type);let b=a.name?a.name:"-";a.students&&(b=a.students.map(C=>C.student_name.split(" ")[0]).join(", "));let R=!1,T=!1;a["pick-up quantity"]&&(R=a["pick-up quantity"]>0),a["drop-off quantity"]&&(T=a["drop-off quantity"]>0);const P=!a.name&&!a.students,A={position:a.position,id:a.id,hasError:P,label:{value:b,isSchool:a.type===u.SCHOOL_STOP,isStudentStop:a.type===u.STUDENT_STOP,stopNumber:h?D:void 0},hasPickup:R,hasDropoff:T,hour:L(a.arrival_time)};return h&&(D+=1),A});console.log("stepsData",N),f(N)},[l,n,t]),e.jsxs(_,{children:[e.jsx($,{routes:t,activeDay:l,routesBySelectedShift:d,setActiveDay:o,setActiveShift:r}),e.jsx(B,{h:"54vh",children:p&&e.jsx("div",{style:{padding:"8px 16px"},children:e.jsx(G,{stopsData:p,isEditMode:s})})})]})};O.__docgenInfo={description:"",methods:[],displayName:"RouteDetailsSchedule",props:{routes:{required:!0,tsType:{name:"Array",elements:[{name:"IFormattedRouteByDay"}],raw:"IFormattedRouteByDay[]"},description:""},isEditMode:{required:!0,tsType:{name:"boolean"},description:""}}};const Q=({routes:t,routeInfo:s,setHighlightRoute:l})=>{const[o,n]=c.useState("Information"),[r,d]=c.useState(!1),x=Y({initialValues:{name:s.routeName||"",identifier:s.shortHandRouteName,hasHighNeeds:s.hasHighNeeds||!1,unit:s.unit||"",schoolName:s.schoolName||"",schoolBoard:s.schoolBoard||"",note:s.note||""},validate:{name:m=>m?null:"Name is required"}}),p=[{label:"Information",content:e.jsx(F,{form:x,isEditMode:r})},{label:"Team",content:e.jsx("div",{style:{padding:"20px"},children:e.jsx(S,{order:3,children:"Team - content"})})},{label:"Students",content:e.jsx("div",{style:{padding:"20px"},children:e.jsx(S,{order:3,children:"Students - content"})})},{label:"Schedule",content:e.jsx(O,{routes:t,isEditMode:r})}],f={id:s.studentRouteId,title:s.shortHandRouteName};return e.jsx(z,{children:e.jsx(J,{data:f,tabs:p,activeTab:o,setActiveTab:n,isEditMode:r,setIsEditMode:d,onDelete:()=>console.log("click delete"),onHeaderIconClick:()=>l([]),color:s.color})})};Q.__docgenInfo={description:"",methods:[],displayName:"RouteDetails",props:{routes:{required:!0,tsType:{name:"Array",elements:[{name:"IFormattedRouteByDay"}],raw:"IFormattedRouteByDay[]"},description:""},routeInfo:{required:!0,tsType:{name:"IRoutesInfo"},description:""},setHighlightRoute:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string[]>",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}]},description:""}}};export{Q as R};
