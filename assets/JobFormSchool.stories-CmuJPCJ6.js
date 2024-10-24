import{j as s}from"./jsx-runtime-CexXSJP5.js";import{J as l}from"./JobFormSchools-B4nFnZIQ.js";import{S as i,b as m}from"./jobs-DhiDD4xb.js";import{s as _}from"./StudentTableData-DQIngskh.js";import{u as d}from"./use-form-yKeun-xg.js";import"./index-BP8_t0zE.js";import"./ObjectBadge-BW0P1RiL.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./IconComponent-BLxFDGI_.js";import"./index-DDyY_0rn.js";import"./iconBase-tVazycLF.js";import"./index-B98Pt2jl.js";import"./index-L2PmcK6x.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";import"./Flex-DfchtKyW.js";import"./factory-Cmy58O58.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Title-NR0nO8_X.js";import"./create-vars-resolver-BkjTnGuP.js";import"./JobFormContentHeader-CjKBG-OQ.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./Input-B6p2Evf3.js";import"./Input-2PvRR_UE.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./Popover-w4mprIVE.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Group-uPXshQyq.js";import"./Table-DXKGnNOn.js";import"./index-D1m89S_o.js";import"./extends-CF3RwP-h.js";import"./index-CXPIPAcP.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroup-CWbEP0vl.js";import"./assertThisInitialized-C1KLUksq.js";import"./IndicationsBadge-DCr2nWIo.js";const ft={title:"Job Creation Form/JobFormSchool",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form object used to manage form state and validation"},schools:{description:"Array of schools data."},students:{description:"Array of students data."}}},u=[{id:100,name:"Victoria School",service_duration:10,address:{street:"411 11 Ave SE",city:"Calgary",province:"AB",postal_code:"T2S 0C2"},programs:[{id:1,name:"Computer program",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:00"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:30"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"12:00"}}},{id:2,name:"Assistive program",schedule:{Monday:{start_bell_time:"10:30",end_bell_time:"14:30"},Tuesday:{start_bell_time:"10:00",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:30",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:00",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"14:00"}}},{id:3,name:"Logic program",schedule:{Monday:{start_bell_time:"09:00",end_bell_time:"13:00"},Tuesday:{start_bell_time:"09:30",end_bell_time:"13:30"},Wednesday:{start_bell_time:"09:00",end_bell_time:"13:00"},Thursday:{start_bell_time:"09:30",end_bell_time:"13:30"},Friday:{start_bell_time:"09:30",end_bell_time:"12:30"}}},{id:4,name:"IT",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:30"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:00"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"13:00"}}},{id:5,name:"Maths",schedule:{Monday:{start_bell_time:"10:00",end_bell_time:"14:00"},Tuesday:{start_bell_time:"10:30",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:00",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:30",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"13:30"}}}]}],e={render:()=>{const o=d({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:i.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,default_dwell_time:0,staff_boarding:m.ALL_MEET_AT_STARTING_POINT,all_staffs_meet_at_yard:!0,consider_equipment_needs:!1},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:t=>t?null:"Job Name is required",jobName:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null}});return s.jsx(l,{form:o,schools:u,students:_})}};var a,r,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    return <JobFormSchool form={form} schools={mockSchools} students={studentsMockedData} />;
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const ht=["DefaultJobFormSchool"];export{e as DefaultJobFormSchool,ht as __namedExportsOrder,ft as default};
