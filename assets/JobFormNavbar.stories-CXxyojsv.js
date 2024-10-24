import{j as p}from"./jsx-runtime-CexXSJP5.js";import{r as _}from"./index-BP8_t0zE.js";import{J as a}from"./JobFormNavbar-CQTZiOm7.js";import{S as d,b as l}from"./jobs-DhiDD4xb.js";import"./index-BB_o3gze.js";import"./iconBase-tVazycLF.js";import"./index-DDyY_0rn.js";import"./index-L2PmcK6x.js";import"./index-DGnWBzQX.js";import"./index-DhrrqPsw.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./jobs-c2izYkBu.js";import"./httpClient-BlwsOI9O.js";import"./tslib.es6-Ytcc2UEA.js";import"./predicates-Dr2rkhIn.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./Modal-DjE8Gf6o.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./use-merged-ref-DIizHiiB.js";import"./create-safe-context-DdvLfAHk.js";import"./CloseButton-Bf40-Csk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./random-id-CCVmTau8.js";import"./Paper-Coa4cW4M.js";import"./use-id-B6kcI9zl.js";import"./Flex-DfchtKyW.js";import"./Title-NR0nO8_X.js";import"./notifications.store-DxWvW9mD.js";const et={title:"Job Creation Form/JobFormNavbar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{activeStep:{control:"text",description:"The current active step in the job form."},setActiveStep:{action:"activeStepChanged",description:"Function to update the active step."},onContinue:{description:"Function that formats the payload and triggers the job creation process."}}},t={render:r=>{const[i,s]=_.useState("Information"),m=()=>({jobName:"Example Job",shortHandJobName:"EXJ",startDate:"2024-08-01",endDate:"2024-08-15",defaultBellTimeAndDay:{start_bell_time:"09:30",end_bell_time:"14:00"},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:0,curbside_pickup_dropoff:!1,num_routes:1,start_end_location:d.YARD,max_walking_distance:100,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,default_dwell_time:0,staff_boarding:l.ALL_MEET_AT_STARTING_POINT,all_staffs_meet_at_yard:!0,consider_equipment_needs:!1},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]});return p.jsx(a,{...r,activeStep:i,setActiveStep:s,onContinue:m})}};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    const [activeStep, setActiveStep] = useState('Information');
    const handleContinue = (): RoutePayload => {
      return {
        jobName: 'Example Job',
        shortHandJobName: 'EXJ',
        startDate: '2024-08-01',
        endDate: '2024-08-15',
        defaultBellTimeAndDay: {
          start_bell_time: '09:30',
          end_bell_time: '14:00'
        },
        business_rule_params: {
          max_student_loaded_time: 0,
          max_student_onboarding_time: 0,
          student_staff_ratio: 0,
          curbside_pickup_dropoff: false,
          num_routes: 1,
          start_end_location: StartEndLocationEnum.YARD,
          max_walking_distance: 100,
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
      };
    };
    return <JobFormNavbar {...args} activeStep={activeStep} setActiveStep={setActiveStep} onContinue={handleContinue} />;
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ot=["Default"];export{t as Default,ot as __namedExportsOrder,et as default};
