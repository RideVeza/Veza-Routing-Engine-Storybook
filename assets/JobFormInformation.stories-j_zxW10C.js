import{j as i}from"./jsx-runtime-CexXSJP5.js";import{J as o}from"./JobFormInformation-DCTgXm0S.js";import{S as m,b as l}from"./jobs-DhiDD4xb.js";import{u}from"./use-form-yKeun-xg.js";import"./index-BP8_t0zE.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./road-form-image-CgI51JcC.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./ContentHeader-BeoyYu9o.js";import"./index-DUW3t7VM.js";import"./iconBase-tVazycLF.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./Flex-DfchtKyW.js";import"./Title-NR0nO8_X.js";import"./Skeleton-C45Pgd_S.js";import"./Group-uPXshQyq.js";import"./DateInput-C5HhRdua.js";import"./Popover-w4mprIVE.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-id-B6kcI9zl.js";import"./TextInput-C7Hpc_p4.js";import"./InputBase-Dxa36rRv.js";import"./Input-2PvRR_UE.js";import"./AccordionChevron-BAXzvIVP.js";import"./use-resolved-styles-api-9Hl1n5Yq.js";import"./clamp-DTmYCdls.js";import"./constructFrom-rJN6zrQ_.js";import"./Input-B6p2Evf3.js";import"./index-B98Pt2jl.js";import"./index-L2PmcK6x.js";import"./Text-C4QCCHSP.js";import"./Image-CyM-z9cL.js";const ut={title:"Job Creation Form/JobFormInformation",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form object used to manage form state and validation"}}},e={render:()=>{const s=u({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:m.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,default_dwell_time:0,staff_boarding:l.ALL_MEET_AT_STARTING_POINT,all_staffs_meet_at_yard:!0,consider_equipment_needs:!1},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:t=>t?null:"Job Name is required",jobName:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null}});return i.jsx(o,{form:s})}};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          all_staffs_meet_at_yard: true,
          consider_equipment_needs: false
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const dt=["Default"];export{e as Default,dt as __namedExportsOrder,ut as default};
