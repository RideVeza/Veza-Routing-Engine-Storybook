import{j as r}from"./jsx-runtime-CexXSJP5.js";import{S as s}from"./ScheduleStepHeader-CxLKW8nK.js";import"./index-BP8_t0zE.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./IconComponent-BLxFDGI_.js";import"./index-DDyY_0rn.js";import"./iconBase-tVazycLF.js";import"./index-B98Pt2jl.js";import"./index-L2PmcK6x.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";import"./ObjectBadge-BW0P1RiL.js";import"./Flex-DfchtKyW.js";import"./factory-Cmy58O58.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Title-NR0nO8_X.js";import"./create-vars-resolver-BkjTnGuP.js";import"./create-scoped-keydown-handler-C7O3t3U_.js";import"./get-size-ZIjN6hcg.js";import"./create-safe-context-DdvLfAHk.js";import"./AccordionChevron-BAXzvIVP.js";import"./UnstyledButton-Bp_jImnG.js";import"./get-style-object-DUJZA7T_.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./use-merged-ref-DIizHiiB.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";const Q={title:"Components/ScheduleStepHeader",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{stopsData:{description:"Array of schedule stops with relevant data."},isEditMode:{description:"Flag to toggle between edit mode and view mode.",control:{type:"boolean"}}},decorators:[t=>r.jsx("div",{style:{width:"397px"},children:r.jsx(t,{})})]},u=[{position:1,id:"1",hour:"05:56 AM",label:{value:"Driver Check-in"}},{position:2,id:"2",hour:"06:15 AM",hasPickup:!0,hasDropoff:!0,label:{value:"Christina, Mark, Jane, Peter",isStudentStop:!0,stopNumber:1}},{position:3,id:"3",hour:"06:25 AM",hasPickup:!0,hasError:!0,label:{value:"Riley, John, Kate, Michael",isStudentStop:!0,stopNumber:2}},{position:4,id:"4",hour:"06:50 AM",label:{value:"Elmwood High School",isSchool:!0,stopNumber:3},hasError:!1},{position:5,id:"5",hour:"07:20 AM",label:{value:"Driver Check-out"}}],e={render:t=>r.jsx(s,{stopsData:t.stopsData,isEditMode:t.isEditMode}),args:{stopsData:u,isEditMode:!1}},o={render:t=>r.jsx(s,{stopsData:t.stopsData,isEditMode:t.isEditMode}),args:{stopsData:u,isEditMode:!0}};var a,i,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <ScheduleStepHeader stopsData={args.stopsData} isEditMode={args.isEditMode} />;
  },
  args: {
    stopsData: mockStopsData,
    isEditMode: false
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,n;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <ScheduleStepHeader stopsData={args.stopsData} isEditMode={args.isEditMode} />;
  },
  args: {
    stopsData: mockStopsData,
    isEditMode: true
  }
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const U=["Default","ScheduleStepHeaderEditMode"];export{e as Default,o as ScheduleStepHeaderEditMode,U as __namedExportsOrder,Q as default};
