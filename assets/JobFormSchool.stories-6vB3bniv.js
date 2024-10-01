import{j as o}from"./factory-BYdAncit.js";import{J as l}from"./JobFormSchools-Biz2-B3u.js";import{S as i,b as m}from"./jobs-CSoPBwjn.js";import{s as _}from"./StudentTableData-D9Yt8CLD.js";import{u as d}from"./use-form-B68HMyzB.js";import"./index-BP8_t0zE.js";import"./index-oL_zBGcM.js";import"./iconBase-tVazycLF.js";import"./theme-CBi4L4pb.js";import"./Flex-DB8_OMZA.js";import"./polymorphic-factory-BBVriERq.js";import"./Title-BF1HBFC0.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./JobFormContentHeader-CpwVJsvY.js";import"./index-B98Pt2jl.js";import"./Button-BmZH4clo.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./Input-E5qBdqnX.js";import"./index-DHgPtaHi.js";import"./Input-DkGv-MlU.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./Popover-jsiwsZQx.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Group-DAYBdM2T.js";import"./Table-CPynlTVo.js";import"./index-D1m89S_o.js";import"./ScrollArea-CIJALQu3.js";import"./get-auto-contrast-value-DNc6ItoQ.js";import"./CheckIcon-DIBRqQfE.js";import"./Skeleton-DfZH9prR.js";import"./index-DWJGBGB2.js";const te={title:"Job Creation Form/JobFormSchool",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form object used to manage form state and validation"},schools:{description:"Array of schools data."},students:{description:"Array of students data."}}},u=[{id:100,name:"Victoria School",service_duration:10,address:{street:"411 11 Ave SE",city:"Calgary",province:"AB",postal_code:"T2S 0C2"},programs:[{id:1,name:"Computer program",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:00"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:30"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"12:00"}}},{id:2,name:"Assistive program",schedule:{Monday:{start_bell_time:"10:30",end_bell_time:"14:30"},Tuesday:{start_bell_time:"10:00",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:30",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:00",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"14:00"}}},{id:3,name:"Logic program",schedule:{Monday:{start_bell_time:"09:00",end_bell_time:"13:00"},Tuesday:{start_bell_time:"09:30",end_bell_time:"13:30"},Wednesday:{start_bell_time:"09:00",end_bell_time:"13:00"},Thursday:{start_bell_time:"09:30",end_bell_time:"13:30"},Friday:{start_bell_time:"09:30",end_bell_time:"12:30"}}},{id:4,name:"IT",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:30"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:00"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"13:00"}}},{id:5,name:"Maths",schedule:{Monday:{start_bell_time:"10:00",end_bell_time:"14:00"},Tuesday:{start_bell_time:"10:30",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:00",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:30",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"13:30"}}}]}],t={render:()=>{const s=d({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:i.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,default_dwell_time:0,staff_boarding:m.ALL_MEET_AT_STARTING_POINT,all_staffs_meet_at_yard:!0},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:e=>e?null:"Job Name is required",jobName:e=>e?e.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:e=>e?e.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:e=>e?e.length>=2?null:"Short Hand must have at least 2 characters":null}});return o.jsx(l,{form:s,schools:u,students:_})}};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const form: UseFormReturnType<RoutePayload> = useForm<RoutePayload>({
      initialValues: {
        jobName: '',
        shortHandJobName: '',
        startDate: '',
        endDate: '',
        defaultBellTimeAndDay: {
          start_bell_time: '',
          end_bell_time: ''
        },
        business_rule_params: {
          max_student_loaded_time: 0,
          max_student_onboarding_time: 0,
          student_staff_ratio: null,
          curbside_pickup_dropoff: false,
          num_routes: null,
          start_end_location: StartEndLocationEnum.YARD,
          max_walking_distance: 0,
          allow_mixed_schools: false,
          mixed_pickup_dropoff: false,
          max_staff_onboarding_time: 0,
          default_dwell_time: 0,
          staff_boarding: StaffBoardingEnum.ALL_MEET_AT_STARTING_POINT,
          all_staffs_meet_at_yard: true
        },
        staff_types: [],
        students: [],
        staffs: {
          drivers: [],
          attendant: [],
          hca: [],
          consultant: [],
          therapist: []
        },
        stops: [],
        yards: [],
        schools: [],
        vehicles: []
      },
      validate: {
        shortHandJobName: value => value ? null : 'Job Name is required',
        jobName: value => {
          if (!value) {
            return null;
          }
          return value.length >= 2 ? null : 'Short Hand must have at least 2 characters';
        },
        startDate: value => {
          if (!value) {
            return null;
          }
          return value.length >= 2 ? null : 'Short Hand must have at least 2 characters';
        },
        endDate: value => {
          if (!value) {
            return null;
          }
          return value.length >= 2 ? null : 'Short Hand must have at least 2 characters';
        }
      }
    });
    return <JobFormSchool form={form} schools={mockSchools} students={studentsMockedData} />;
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const ae=["DefaultJobFormSchool"];export{t as DefaultJobFormSchool,ae as __namedExportsOrder,te as default};
