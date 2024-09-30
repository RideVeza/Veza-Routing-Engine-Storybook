import{j as i}from"./factory-BYdAncit.js";import{J as o}from"./JobFormInformation-B3JXbV9J.js";import{S as m,b as l}from"./jobs-CSoPBwjn.js";import{u}from"./use-form-B68HMyzB.js";import"./index-BP8_t0zE.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./road-form-image-CgI51JcC.js";import"./theme-CBi4L4pb.js";import"./ContentHeader-CIXz8JLl.js";import"./index-oL_zBGcM.js";import"./iconBase-tVazycLF.js";import"./Button-BmZH4clo.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./Flex-DB8_OMZA.js";import"./Title-BF1HBFC0.js";import"./Skeleton-DfZH9prR.js";import"./Group-DAYBdM2T.js";import"./DateInput-BR9nkzgr.js";import"./Popover-jsiwsZQx.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./TextInput-Cayrc055.js";import"./InputBase-BAFZ9pBH.js";import"./Input-DkGv-MlU.js";import"./clamp-DTmYCdls.js";import"./constructFrom-rJN6zrQ_.js";import"./Input-E5qBdqnX.js";import"./index-B98Pt2jl.js";import"./index-DHgPtaHi.js";import"./Text-D0XYLr29.js";import"./Image-CuHJv4o9.js";const tt={title:"Job Creation Form/JobFormInformation",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form object used to manage form state and validation"}}},n={render:()=>{const s=u({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:m.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,dwell_time:0,staff_boarding:l.ALL_MEET_AT_STARTING_POINT},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:t=>t?null:"Job Name is required",jobName:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null}});return i.jsx(o,{form:s})}};var a,e,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          dwell_time: 0,
          staff_boarding: StaffBoardingEnum.ALL_MEET_AT_STARTING_POINT
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
    return <JobFormInformation form={form} />;
  }
}`,...(r=(e=n.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const nt=["Default"];export{n as Default,nt as __namedExportsOrder,tt as default};
