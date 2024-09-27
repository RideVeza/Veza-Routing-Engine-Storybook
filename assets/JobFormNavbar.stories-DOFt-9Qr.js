import{j as p}from"./factory-BYdAncit.js";import{r as d}from"./index-BP8_t0zE.js";import{J as a}from"./JobFormNavbar-CvHdOaj0.js";import{S as _,b as c}from"./jobs-CSoPBwjn.js";import"./index-5GZWFLL7.js";import"./iconBase-tVazycLF.js";import"./index-b0ruTied.js";import"./index-DHgPtaHi.js";import"./index-DGnWBzQX.js";import"./index-CQDxHXwo.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./jobs-DYeHrbtM.js";import"./httpClient-DV4VuV9q.js";import"./tslib.es6-Ytcc2UEA.js";import"./theme-CBi4L4pb.js";import"./Button-BmZH4clo.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./Modal-BJIPIsOn.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./use-merged-ref-Zmja8g2s.js";import"./create-safe-context-cIFFkskc.js";import"./CloseButton-Bstq3kTa.js";import"./FocusTrap-BWeZ3v7v.js";import"./Paper-C4ja3mkh.js";import"./Flex-DB8_OMZA.js";import"./Title-BF1HBFC0.js";import"./notifications.store-rT8tHzW-.js";const z={title:"Job Creation Form/JobFormNavbar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{activeStep:{control:"text",description:"The current active step in the job form."},setActiveStep:{action:"activeStepChanged",description:"Function to update the active step."},onContinue:{description:"Function that formats the payload and triggers the job creation process."}}},t={render:r=>{const[s,i]=d.useState("Information"),m=()=>({jobName:"Example Job",shortHandJobName:"EXJ",startDate:"2024-08-01",endDate:"2024-08-15",defaultBellTimeAndDay:{start_bell_time:"09:30",end_bell_time:"14:00"},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:0,curbside_pickup_dropoff:!1,num_routes:1,start_end_location:_.YARD,max_walking_distance:100,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,dwell_time:0,staff_boarding:c.ALL_MEET_AT_STARTING_POINT},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]});return p.jsx(a,{...r,activeStep:s,setActiveStep:i,onContinue:m})}};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
      };
    };
    return <JobFormNavbar {...args} activeStep={activeStep} setActiveStep={setActiveStep} onContinue={handleContinue} />;
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const K=["Default"];export{t as Default,K as __namedExportsOrder,z as default};
