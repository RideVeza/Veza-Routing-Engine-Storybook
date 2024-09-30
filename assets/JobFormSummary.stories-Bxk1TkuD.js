import{j as l}from"./factory-BYdAncit.js";import{J as s}from"./JobFormSummary-O2HgC7T0.js";import{S as _,b as m}from"./jobs-CSoPBwjn.js";import{u as d}from"./use-form-B68HMyzB.js";import"./index-BP8_t0zE.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./road-form-image-DSzQbtY8.js";import"./theme-CBi4L4pb.js";import"./ContentHeader-CIXz8JLl.js";import"./index-oL_zBGcM.js";import"./iconBase-tVazycLF.js";import"./Button-BmZH4clo.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./Flex-DB8_OMZA.js";import"./Title-BF1HBFC0.js";import"./Skeleton-DfZH9prR.js";import"./Group-DAYBdM2T.js";import"./DateInput-BR9nkzgr.js";import"./Popover-jsiwsZQx.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./TextInput-Cayrc055.js";import"./InputBase-BAFZ9pBH.js";import"./Input-DkGv-MlU.js";import"./clamp-DTmYCdls.js";import"./constructFrom-rJN6zrQ_.js";import"./Tooltip-Bd5wOlBI.js";import"./index-D1m89S_o.js";import"./Text-D0XYLr29.js";const Z={title:"Job Creation Form/JobFormSummary",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{form:{description:"Mantine form instance used to manage form state."}}},t={render:()=>{const r=d({initialValues:{jobName:"",shortHandJobName:"",startDate:"01/01/2025",endDate:"01/07/2025",defaultBellTimeAndDay:{start_bell_time:"",end_bell_time:""},business_rule_params:{max_student_loaded_time:0,max_student_onboarding_time:0,student_staff_ratio:0,curbside_pickup_dropoff:!1,num_routes:3,start_end_location:_.YARD,max_walking_distance:0,allow_mixed_schools:!1,mixed_pickup_dropoff:!1,max_staff_onboarding_time:0,dwell_time:0,staff_boarding:m.ALL_MEET_AT_STARTING_POINT},staff_types:[],students:[{id:1,name:"John Doe",address:{home_address:1,pick_up_stop:[],drop_off_stop:[]},staffs:[],dwell_time:3,school_id:1,program_id:1},{id:2,name:"Jane Smith",address:{home_address:2,pick_up_stop:[],drop_off_stop:[]},staffs:[],dwell_time:3,school_id:1,program_id:1}],staffs:{drivers:[{id:12,name:"Shan",address:{street:"606 4 St SW",city:"Calgary",province:"AB",postal_code:"T2P 0X7"},unavailabilityWindows:[{day:"Monday",time_slots:[{start_time:"06:00",end_time:"12:00"},{start_time:"12:30",end_time:"17:30"}]},{day:"Wednesday",time_slots:[{start_time:"08:00",end_time:"11:30"}]}],canStoreBusAtHome:!0,canStoreLargeBusAtHome:!1},{id:17,name:"Ben",address:{street:"606 4 St SW",city:"Calgary",province:"AB",postal_code:"T2P 0X7"},unavailabilityWindows:[{day:"Monday",time_slots:[{start_time:"06:00",end_time:"12:00"},{start_time:"12:30",end_time:"17:30"}]},{day:"Wednesday",time_slots:[{start_time:"08:00",end_time:"11:30"}]}],canStoreBusAtHome:!0,canStoreLargeBusAtHome:!0}],attendant:[{id:21,name:"Henna",address:{street:"535 14 Ave SW",city:"Calgary",province:"AB",postal_code:"T2R 0M7"},unavailabilityWindows:[{day:"Monday",time_slots:[{start_time:"06:30",end_time:"11:00"},{start_time:"12:30",end_time:"17:30"}]},{day:"Tuesday",time_slots:[{start_time:"07:00",end_time:"11:30"}]}]},{id:22,name:"Iyal",address:{street:"605 13 Ave SW",city:"Calgary",province:"AB",postal_code:"T2R 0K6"},unavailabilityWindows:[{day:"Monday",time_slots:[{start_time:"06:30",end_time:"11:00"},{start_time:"12:30",end_time:"17:30"}]},{day:"Thursday",time_slots:[{start_time:"12:00",end_time:"15:00"}]}]}],hca:[],consultant:[],therapist:[]},stops:[],yards:[],schools:[{id:100,name:"Victoria School",service_duration:10,address:{street:"411 11 Ave SE",city:"Calgary",province:"AB",postal_code:"T2S 0C2"},programs:[{id:1,name:"Computer program",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:00"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:30"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"12:00"}}},{id:2,name:"Assistive program",schedule:{Monday:{start_bell_time:"10:30",end_bell_time:"14:30"},Tuesday:{start_bell_time:"10:00",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:30",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:00",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"14:00"}}},{id:3,name:"Logic program",schedule:{Monday:{start_bell_time:"09:00",end_bell_time:"13:00"},Tuesday:{start_bell_time:"09:30",end_bell_time:"13:30"},Wednesday:{start_bell_time:"09:00",end_bell_time:"13:00"},Thursday:{start_bell_time:"09:30",end_bell_time:"13:30"},Friday:{start_bell_time:"09:30",end_bell_time:"12:30"}}},{id:4,name:"IT",schedule:{Monday:{start_bell_time:"08:30",end_bell_time:"13:30"},Tuesday:{start_bell_time:"08:00",end_bell_time:"13:00"},Wednesday:{start_bell_time:"08:30",end_bell_time:"13:00"},Thursday:{start_bell_time:"08:00",end_bell_time:"13:30"},Friday:{start_bell_time:"08:30",end_bell_time:"13:00"}}},{id:5,name:"Maths",schedule:{Monday:{start_bell_time:"10:00",end_bell_time:"14:00"},Tuesday:{start_bell_time:"10:30",end_bell_time:"14:00"},Wednesday:{start_bell_time:"10:00",end_bell_time:"14:30"},Thursday:{start_bell_time:"10:30",end_bell_time:"14:30"},Friday:{start_bell_time:"10:00",end_bell_time:"13:30"}}}]}],vehicles:[{id:"1",isLongBus:!0,maximum_capacity:50,maximum_artificial_capacity:45}]},validate:{shortHandJobName:e=>e?null:"Job Name is required",jobName:e=>e?e.length>=2?null:"Short Hand must have at least 2 characters":null,startDate:e=>e?e.length>=2?null:"Short Hand must have at least 2 characters":null,endDate:e=>e?e.length>=2?null:"Short Hand must have at least 2 characters":null}});return l.jsx(s,{form:r})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const form: UseFormReturnType<RoutePayload> = useForm<RoutePayload>({
      initialValues: {
        jobName: '',
        shortHandJobName: '',
        startDate: '01/01/2025',
        endDate: '01/07/2025',
        defaultBellTimeAndDay: {
          start_bell_time: '',
          end_bell_time: ''
        },
        business_rule_params: {
          max_student_loaded_time: 0,
          max_student_onboarding_time: 0,
          student_staff_ratio: 0,
          curbside_pickup_dropoff: false,
          num_routes: 3,
          start_end_location: StartEndLocationEnum.YARD,
          max_walking_distance: 0,
          allow_mixed_schools: false,
          mixed_pickup_dropoff: false,
          max_staff_onboarding_time: 0,
          dwell_time: 0,
          staff_boarding: StaffBoardingEnum.ALL_MEET_AT_STARTING_POINT
        },
        staff_types: [],
        students: [{
          id: 1,
          name: 'John Doe',
          address: {
            home_address: 1,
            pick_up_stop: [],
            drop_off_stop: []
          },
          staffs: [],
          dwell_time: 3,
          school_id: 1,
          program_id: 1
        }, {
          id: 2,
          name: 'Jane Smith',
          address: {
            home_address: 2,
            pick_up_stop: [],
            drop_off_stop: []
          },
          staffs: [],
          dwell_time: 3,
          school_id: 1,
          program_id: 1
        }],
        staffs: {
          drivers: [{
            id: 12,
            name: 'Shan',
            address: {
              street: '606 4 St SW',
              city: 'Calgary',
              province: 'AB',
              postal_code: 'T2P 0X7'
            },
            unavailabilityWindows: [{
              day: 'Monday',
              time_slots: [{
                start_time: '06:00',
                end_time: '12:00'
              }, {
                start_time: '12:30',
                end_time: '17:30'
              }]
            }, {
              day: 'Wednesday',
              time_slots: [{
                start_time: '08:00',
                end_time: '11:30'
              }]
            }],
            canStoreBusAtHome: true,
            canStoreLargeBusAtHome: false
          }, {
            id: 17,
            name: 'Ben',
            address: {
              street: '606 4 St SW',
              city: 'Calgary',
              province: 'AB',
              postal_code: 'T2P 0X7'
            },
            unavailabilityWindows: [{
              day: 'Monday',
              time_slots: [{
                start_time: '06:00',
                end_time: '12:00'
              }, {
                start_time: '12:30',
                end_time: '17:30'
              }]
            }, {
              day: 'Wednesday',
              time_slots: [{
                start_time: '08:00',
                end_time: '11:30'
              }]
            }],
            canStoreBusAtHome: true,
            canStoreLargeBusAtHome: true
          }],
          attendant: [{
            id: 21,
            name: 'Henna',
            address: {
              street: '535 14 Ave SW',
              city: 'Calgary',
              province: 'AB',
              postal_code: 'T2R 0M7'
            },
            unavailabilityWindows: [{
              day: 'Monday',
              time_slots: [{
                start_time: '06:30',
                end_time: '11:00'
              }, {
                start_time: '12:30',
                end_time: '17:30'
              }]
            }, {
              day: 'Tuesday',
              time_slots: [{
                start_time: '07:00',
                end_time: '11:30'
              }]
            }]
          }, {
            id: 22,
            name: 'Iyal',
            address: {
              street: '605 13 Ave SW',
              city: 'Calgary',
              province: 'AB',
              postal_code: 'T2R 0K6'
            },
            unavailabilityWindows: [{
              day: 'Monday',
              time_slots: [{
                start_time: '06:30',
                end_time: '11:00'
              }, {
                start_time: '12:30',
                end_time: '17:30'
              }]
            }, {
              day: 'Thursday',
              time_slots: [{
                start_time: '12:00',
                end_time: '15:00'
              }]
            }]
          }],
          hca: [],
          consultant: [],
          therapist: []
        },
        stops: [],
        yards: [],
        schools: [{
          id: 100,
          name: 'Victoria School',
          service_duration: 10,
          address: {
            street: '411 11 Ave SE',
            city: 'Calgary',
            province: 'AB',
            postal_code: 'T2S 0C2'
          },
          programs: [{
            id: 1,
            name: 'Computer program',
            schedule: {
              Monday: {
                start_bell_time: '08:30',
                end_bell_time: '13:00'
              },
              Tuesday: {
                start_bell_time: '08:00',
                end_bell_time: '13:30'
              },
              Wednesday: {
                start_bell_time: '08:30',
                end_bell_time: '13:00'
              },
              Thursday: {
                start_bell_time: '08:00',
                end_bell_time: '13:30'
              },
              Friday: {
                start_bell_time: '08:30',
                end_bell_time: '12:00'
              }
            }
          }, {
            id: 2,
            name: 'Assistive program',
            schedule: {
              Monday: {
                start_bell_time: '10:30',
                end_bell_time: '14:30'
              },
              Tuesday: {
                start_bell_time: '10:00',
                end_bell_time: '14:00'
              },
              Wednesday: {
                start_bell_time: '10:30',
                end_bell_time: '14:30'
              },
              Thursday: {
                start_bell_time: '10:00',
                end_bell_time: '14:30'
              },
              Friday: {
                start_bell_time: '10:00',
                end_bell_time: '14:00'
              }
            }
          }, {
            id: 3,
            name: 'Logic program',
            schedule: {
              Monday: {
                start_bell_time: '09:00',
                end_bell_time: '13:00'
              },
              Tuesday: {
                start_bell_time: '09:30',
                end_bell_time: '13:30'
              },
              Wednesday: {
                start_bell_time: '09:00',
                end_bell_time: '13:00'
              },
              Thursday: {
                start_bell_time: '09:30',
                end_bell_time: '13:30'
              },
              Friday: {
                start_bell_time: '09:30',
                end_bell_time: '12:30'
              }
            }
          }, {
            id: 4,
            name: 'IT',
            schedule: {
              Monday: {
                start_bell_time: '08:30',
                end_bell_time: '13:30'
              },
              Tuesday: {
                start_bell_time: '08:00',
                end_bell_time: '13:00'
              },
              Wednesday: {
                start_bell_time: '08:30',
                end_bell_time: '13:00'
              },
              Thursday: {
                start_bell_time: '08:00',
                end_bell_time: '13:30'
              },
              Friday: {
                start_bell_time: '08:30',
                end_bell_time: '13:00'
              }
            }
          }, {
            id: 5,
            name: 'Maths',
            schedule: {
              Monday: {
                start_bell_time: '10:00',
                end_bell_time: '14:00'
              },
              Tuesday: {
                start_bell_time: '10:30',
                end_bell_time: '14:00'
              },
              Wednesday: {
                start_bell_time: '10:00',
                end_bell_time: '14:30'
              },
              Thursday: {
                start_bell_time: '10:30',
                end_bell_time: '14:30'
              },
              Friday: {
                start_bell_time: '10:00',
                end_bell_time: '13:30'
              }
            }
          }]
        }],
        vehicles: [{
          id: '1',
          isLongBus: true,
          maximum_capacity: 50,
          maximum_artificial_capacity: 45
        }]
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
    return <JobFormSummary form={form} />;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["DefaultJobFormSummary"];export{t as DefaultJobFormSummary,$ as __namedExportsOrder,Z as default};
