import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{d as Q}from"./styled-components.browser.esm-Dx2qpfAi.js";import{S as x,b}from"./jobs-DhiDD4xb.js";import{t as X}from"./theme-DV-fQgRe.js";import{b as J}from"./date-pny-vRhT.js";import{C as Z}from"./ContentHeader-BeoyYu9o.js";import{J as z}from"./JobFormBusinessRules-C3zDDQk-.js";import{J as U}from"./JobFormInformation-DCTgXm0S.js";import{J as W}from"./JobFormNavbar-CQTZiOm7.js";import{J as ee}from"./JobFormSchools-B4nFnZIQ.js";import{J as te}from"./JobFormStaffs-DXP49I8y.js";import{J as se}from"./JobFormStudents-CVFi85P5.js";import{J as oe}from"./JobFormSummary-C5hb7WcK.js";import{J as ae}from"./JobFormVehicles-97HjN4JW.js";import{u as re}from"./use-form-yKeun-xg.js";import{n as N}from"./notifications.store-DxWvW9mD.js";import{a as ne}from"./DateInput-C5HhRdua.js";const ie=Q.div`
  .header-container {
    border-bottom: 0.5px solid ${i=>i.theme.colors.gray[2]};
  }

  .job-form-main-section {
    height: 82vh;
    display: flex;
    flex-direction: row;
    gap: 2px;
  }

  .form-content {
    width: 100%;
    height: 100%;
  }
`,de=({onClose:i,onSave:y})=>{const[m,_]=p.useState("Information"),[f,a]=p.useState([]),[n,l]=p.useState([]),[A,T]=p.useState([]),d=re({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,default_dwell_time:0,all_staffs_meet_at_yard:!1,num_routes:null,start_end_location:x.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,staff_boarding:b.ALL_MEET_AT_STARTING_POINT,consider_equipment_needs:!1},staff_types:[],students:[],staffs:{},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:r=>r?null:"Job Name is required",jobName:r=>r?r.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:r=>r?r.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:r=>r?r.length>=2?null:"Short Hand must have at least 2 characters":null}}),w={Information:o.jsx(U,{form:d}),Students:o.jsx(se,{form:d,selectedStudents:f,setSelectedStudents:a}),Schools:o.jsx(ee,{form:d,schools:d.values.schools??[],students:f}),Staff:o.jsx(te,{form:d,selectedStaffs:n,setSelectedStaffs:l}),Vehicles:o.jsx(ae,{form:d,selectedVehicles:A,setSelectedVehicles:T}),"Business rules":o.jsx(z,{form:d}),Summary:o.jsx(oe,{form:d})},j=()=>{var g;const r=d.values,t=JSON.parse(JSON.stringify(r));let v=1;const u=new Map,E=e=>`${e.street}-${e.city}-${e.province}-${e.postal_code}`,h=e=>{const s=E(e);return u.has(s)||u.set(s,v++),u.get(s)},S=t.students.map(e=>(e.address.home_address=h(e.address.home_address),e.address.pick_up_stop=e.address.pick_up_stop.map(s=>{const c=s.stop;return s.stop=h(c),s}),e.address.drop_off_stop=e.address.drop_off_stop.map(s=>{const c=s.stop;return s.stop=h(c),s}),e));t.stops=Array.from(u.entries()).map(([e,s])=>{const[c,Y,q,K]=e.split("-");return{id:s,address:{street:c,city:Y,province:q,postal_code:K}}}),S.forEach(e=>{e.dwell_time||(e.dwell_time=t.business_rule_params.default_dwell_time)}),t.yards=[{id:89,name:"4Seasons HQ",service_duration:10,address:{street:"85 Freeport Boulevard NE",city:"Calgary",province:"AB",postal_code:"T3J 4X8"}},{id:90,name:"Calgary yard",service_duration:10,address:{street:"1210 Russet Rd NE",city:"Calgary",province:"AB",postal_code:"T2G 1E8"}},{id:91,name:"Hamptons yard",service_duration:10,address:{street:"2502 6 St NE",city:"Calgary",province:"AB",postal_code:"T2E 3Z3"}}],le(t);const k=((g=t.business_rule_params)==null?void 0:g.staff_boarding)===b.ALL_MEET_AT_STARTING_POINT,{startDate:F,endDate:D}=t;if(!F||!D){const e=new Date;t.startDate=J(e),t.endDate=J(ne(e,30))}const{max_student_loaded_time:B,max_student_onboarding_time:I,max_staff_onboarding_time:R,student_staff_ratio:C,curbside_pickup_dropoff:H,default_dwell_time:V,num_routes:P,start_end_location:L,max_walking_distance:M,allow_mixed_schools:O,mixed_pickup_dropoff:$,staff_boarding:G}=t.business_rule_params;return{...t,defaultBellTimeAndDay:{start_bell_time:t.defaultBellTimeAndDay.start_bell_time||"09:30",end_bell_time:t.defaultBellTimeAndDay.end_bell_time||"14:00"},business_rule_params:{all_staffs_meet_at_yard:k,max_student_loaded_time:B||90,max_student_onboarding_time:I||90,max_staff_onboarding_time:R||90,student_staff_ratio:C||3,curbside_pickup_dropoff:H||!1,default_dwell_time:V||3,num_routes:P||3,start_end_location:L||x.YARD,max_walking_distance:M||100,allow_mixed_schools:O||!1,mixed_pickup_dropoff:$||!1,staff_boarding:G||b.ALL_MEET_AT_STARTING_POINT},jobName:t.jobName||"New Routing Job",shortHandJobName:t.shortHandJobName||"NRJ",students:S,stops:t.stops,yards:t.yards}};return o.jsxs(ie,{theme:X,children:[o.jsx("div",{className:"header-container",children:o.jsx(Z,{primaryTitle:"New Routing Job",headerAlign:"center",onSecondaryClick:i,onPrimaryClick:y,primaryButtonVariant:"light"})}),o.jsxs("div",{className:"job-form-main-section",children:[o.jsx(W,{activeStep:m,setActiveStep:_,onContinue:j}),o.jsx("div",{className:"form-content",children:w[m]})]})]})};function le(i){var f;const m=[{key:"students",label:"Students"},{key:"vehicles",label:"Vehicles"},{key:"stops",label:"Stops"},{key:"yards",label:"Yards"},{key:"schools",label:"Schools"}].filter(a=>{const n=i[a.key];return Array.isArray(n)?!n.length:!1}).map(a=>a.label);if((!i.staffs||Object.keys(i.staffs).length===0)&&m.push("Staffs"),m.length>0){const a=`${m.join(", ")} not defined or empty.`;throw N.show({color:"red",title:"Error",message:a}),new Error(a)}const _=[];(f=i.students)==null||f.forEach(a=>{const n=a.staffs;n.length>0&&n.forEach(l=>{_.includes(l)||_.push(l)})}),_.forEach(a=>{var n;if(!((n=i.staff_types)!=null&&n.includes(a))){const l="Type of staff needed is not present among the selected staff";throw N.show({color:"red",title:"Error",message:l}),new Error(l)}})}de.__docgenInfo={description:"",methods:[],displayName:"JobForm"};export{de as J};
