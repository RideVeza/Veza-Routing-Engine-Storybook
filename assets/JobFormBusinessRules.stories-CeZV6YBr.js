import{j as i}from"./factory-BYdAncit.js";import{J as o}from"./JobFormBusinessRules-dCjHxaHI.js";import{S as m,b as l}from"./jobs-CSoPBwjn.js";import{u}from"./use-form-B68HMyzB.js";import"./index-BP8_t0zE.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./index-DHgPtaHi.js";import"./iconBase-tVazycLF.js";import"./index-CQDxHXwo.js";import"./theme-CBi4L4pb.js";import"./Input-E5qBdqnX.js";import"./index-B98Pt2jl.js";import"./Input-DkGv-MlU.js";import"./polymorphic-factory-BBVriERq.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./Flex-DB8_OMZA.js";import"./NumberInput-Bgw8vgZy.js";import"./InputBase-BAFZ9pBH.js";import"./UnstyledButton-BYy9qxQd.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-merged-ref-Zmja8g2s.js";import"./clamp-DTmYCdls.js";import"./Tooltip-Bd5wOlBI.js";import"./index-D1m89S_o.js";import"./OptionalPortal-pP32-1nJ.js";import"./index-BVEwUaSm.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./Transition-BCGcMdvv.js";import"./Title-BF1HBFC0.js";import"./Select-DTnU6ewg.js";import"./Popover-KLkcXoeL.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./CloseButton-Bstq3kTa.js";import"./CheckIcon-DIBRqQfE.js";import"./ScrollArea-CIJALQu3.js";import"./Switch-BJ6-SGMt.js";import"./Text-D0XYLr29.js";import"./ContentHeader-CIXz8JLl.js";import"./index-oL_zBGcM.js";import"./Button-BmZH4clo.js";import"./Loader-DYJrnaLT.js";import"./Skeleton-DfZH9prR.js";import"./Group-DAYBdM2T.js";import"./List-BQStdOE_.js";import"./index-DWJGBGB2.js";import"./get-auto-contrast-value-DNc6ItoQ.js";const st={title:"Job Creation Form/JobFormBusinessRules",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form object used to manage form state and validation"}}},e={render:()=>{const s=u({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:m.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,dwell_time:0,staff_boarding:l.ALL_MEET_AT_STARTING_POINT},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:t=>t?null:"Job Name is required",jobName:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null}});return i.jsx(o,{form:s})}};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    return <JobFormBusinessRules form={form} />;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const it=["Default"];export{e as Default,it as __namedExportsOrder,st as default};
