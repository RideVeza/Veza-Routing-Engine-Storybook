import{j as m}from"./jsx-runtime-CexXSJP5.js";import{J as o}from"./JobFormStaffs-DXP49I8y.js";import{S as i,b as l}from"./jobs-DhiDD4xb.js";import{s as p}from"./StaffTableData-DbutbEDt.js";import{u}from"./use-form-yKeun-xg.js";import"./index-BP8_t0zE.js";import"./index-DGnWBzQX.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./JobFormContentHeader-CjKBG-OQ.js";import"./index-B98Pt2jl.js";import"./Input-B6p2Evf3.js";import"./index-L2PmcK6x.js";import"./Input-2PvRR_UE.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./Flex-DfchtKyW.js";import"./Popover-w4mprIVE.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Group-uPXshQyq.js";import"./Title-NR0nO8_X.js";import"./Table-DXKGnNOn.js";import"./index-D1m89S_o.js";import"./extends-CF3RwP-h.js";import"./index-CXPIPAcP.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroup-CWbEP0vl.js";import"./assertThisInitialized-C1KLUksq.js";import"./Tooltip-CGEdOYwP.js";import"./get-style-object-DUJZA7T_.js";import"./Modal-DjE8Gf6o.js";import"./CloseButton-Bf40-Csk.js";import"./Paper-Coa4cW4M.js";import"./tslib.es6-Ytcc2UEA.js";import"./StaffTable-AKyuZArY.js";import"./auth-h26ZURLX.js";import"./httpClient-BlwsOI9O.js";import"./predicates-Dr2rkhIn.js";import"./index-DDC2H7jq.js";import"./date-pny-vRhT.js";import"./constructFrom-rJN6zrQ_.js";import"./geocoding-CnqdWub3.js";import"./Card-D3lXULz8.js";import"./ObjectBadge-BW0P1RiL.js";import"./IconComponent-BLxFDGI_.js";import"./index-DDyY_0rn.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";const Ht={title:"Job Creation Form/JobFormStaff",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{form:{description:"Mantine form instance used to manage form state."},selectedStaffs:{description:"Array of selected staff members."},setSelectedStaffs:{description:"Function to update the selected staff members."}}},e={render:()=>{const s=u({initialValues:{jobName:"",shortHandJobName:"",startDate:"",endDate:"",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:null,curbside_pickup_dropoff:!1,num_routes:null,start_end_location:i.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,default_dwell_time:0,staff_boarding:l.ALL_MEET_AT_STARTING_POINT,all_staffs_meet_at_yard:!0,consider_equipment_needs:!1},staff_types:[],students:[],staffs:{drivers:[],attendant:[],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[],vehicles:[]},validate:{shortHandJobName:t=>t?null:"Job Name is required",jobName:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:t=>t?t.length>=2?null:"Short Hand must have at least 2 characters":null}});return m.jsx(o,{form:s,selectedStaffs:p,setSelectedStaffs:()=>{}})}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    return <JobFormStaff form={form} selectedStaffs={staffsMockedData} setSelectedStaffs={() => {}} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const kt=["DefaultJobFormStaff"];export{e as DefaultJobFormStaff,kt as __namedExportsOrder,Ht as default};
