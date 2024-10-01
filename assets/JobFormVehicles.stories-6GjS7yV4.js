import{j as i}from"./factory-BYdAncit.js";import{J as o}from"./JobFormVehicles-36P_lv_P.js";import{S as l,b as m}from"./jobs-CSoPBwjn.js";import{v as u}from"./VehicleTableData-C3Bx52N8.js";import{u as d}from"./use-form-B68HMyzB.js";import"./index-BP8_t0zE.js";import"./index-5GZWFLL7.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./theme-CBi4L4pb.js";import"./Button-BmZH4clo.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./JobFormContentHeader-CpwVJsvY.js";import"./index-B98Pt2jl.js";import"./Input-E5qBdqnX.js";import"./index-DHgPtaHi.js";import"./Input-DkGv-MlU.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./Flex-DB8_OMZA.js";import"./Popover-jsiwsZQx.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Group-DAYBdM2T.js";import"./Title-BF1HBFC0.js";import"./Table-CPynlTVo.js";import"./index-D1m89S_o.js";import"./ScrollArea-CIJALQu3.js";import"./get-auto-contrast-value-DNc6ItoQ.js";import"./CheckIcon-DIBRqQfE.js";import"./Skeleton-DfZH9prR.js";import"./Tooltip-Bd5wOlBI.js";import"./Modal-BJIPIsOn.js";import"./CloseButton-Bstq3kTa.js";import"./Paper-C4ja3mkh.js";import"./tslib.es6-Ytcc2UEA.js";import"./VehicleTable-DJfCaTYC.js";import"./auth-ZgXK2BXz.js";import"./httpClient-DV4VuV9q.js";import"./Card-sx5hwF33.js";const lt={title:"Job Creation Form/JobFormVehicle",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form instance used to manage form state."},selectedVehicles:{description:"Array of selected vehicles."},setSelectedVehicles:{description:"Function to update the selected vehicçes."}}},e={render:()=>{const s=d({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:l.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,default_dwell_time:0,staff_boarding:m.ALL_MEET_AT_STARTING_POINT,all_staffs_meet_at_yard:!0},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:t=>t?null:"Job Name is required",jobName:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null}});return i.jsx(o,{form:s,selectedVehicles:u,setSelectedVehicles:()=>{}})}};var a,r,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    return <JobFormVehicle form={form} selectedVehicles={vehiclesMockedData} setSelectedVehicles={() => {}} />;
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const mt=["DefaultJobFormStaff"];export{e as DefaultJobFormStaff,mt as __namedExportsOrder,lt as default};
