import{j as u}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{S as o}from"./SelectInput-Cmdq-hxt.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./IconComponent-BLxFDGI_.js";import"./index-DDyY_0rn.js";import"./iconBase-tVazycLF.js";import"./index-B98Pt2jl.js";import"./index-L2PmcK6x.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";import"./Select-CgpR6YNG.js";import"./use-resolved-styles-api-9Hl1n5Yq.js";import"./factory-Cmy58O58.js";import"./get-size-ZIjN6hcg.js";import"./create-vars-resolver-BkjTnGuP.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./index-DJkmxc1E.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./random-id-CCVmTau8.js";import"./Transition-1eDnA5u2.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-id-B6kcI9zl.js";import"./CloseButton-Bf40-Csk.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./UnstyledButton-Bp_jImnG.js";import"./Input-2PvRR_UE.js";import"./ScrollArea-D4tNmDXS.js";import"./InputBase-Dxa36rRv.js";const pe={title:"Components/SelectInput",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"Default value of the select input",defaultValue:"Option 1"},optionsData:{control:{type:"select",options:["Option 1","Option 2","Option 3"]},description:"Array of options for the select input"},hasSearchIcon:{control:"boolean",description:"Shows the search icon on the left side",defaultValue:!1},rightIconName:{control:{type:"select",options:["Clear","Image","SelectArrow"]},description:"Icon to display on the right side of the select input"},disabled:{control:"boolean",description:"Disables the select input",defaultValue:!1},isPreview:{control:"boolean",description:"Enables preview mode, disabling user interaction",defaultValue:!1},onChange:{action:"value changed",description:"Handler for when the selected value changes"}}},n={render:e=>{const[t,a]=p.useState(e.defaultValue);return u.jsx(o,{...e,defaultValue:t,onChange:r=>a(r)})},args:{defaultValue:"Option 1",optionsData:["Option 1","Option 2","Option 3"],hasSearchIcon:!1,rightIconName:"SelectArrow",disabled:!1,isPreview:!1}},s={render:e=>{const[t,a]=p.useState(e.defaultValue);return u.jsx(o,{...e,defaultValue:t,onChange:r=>a(r),disabled:e.disabled})},args:{defaultValue:"Option 1",optionsData:["Option 1","Option 2","Option 3"],hasSearchIcon:!1,rightIconName:"SelectArrow",disabled:!0,isPreview:!1}},l={render:e=>{const[t,a]=p.useState(e.defaultValue);return u.jsx(o,{...e,defaultValue:t,onChange:r=>a(r),isPreview:e.isPreview})},args:{defaultValue:"Option 1",optionsData:["Option 1","Option 2","Option 3"],hasSearchIcon:!1,rightIconName:"SelectArrow",disabled:!1,isPreview:!0}},i={render:e=>{const[t,a]=p.useState(e.defaultValue);return u.jsx(o,{...e,defaultValue:t,onChange:r=>a(r),hasSearchIcon:e.hasSearchIcon})},args:{defaultValue:"Option 1",optionsData:["Option 1","Option 2","Option 3"],hasSearchIcon:!0,rightIconName:"Clear",disabled:!1,isPreview:!1}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.defaultValue);
    return <SelectInput {...args} defaultValue={value} onChange={newValue => setValue(newValue)} />;
  },
  args: {
    defaultValue: 'Option 1',
    optionsData: ['Option 1', 'Option 2', 'Option 3'],
    hasSearchIcon: false,
    rightIconName: 'SelectArrow',
    disabled: false,
    isPreview: false
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,h,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.defaultValue);
    return <SelectInput {...args} defaultValue={value} onChange={newValue => setValue(newValue)} disabled={args.disabled} />;
  },
  args: {
    defaultValue: 'Option 1',
    optionsData: ['Option 1', 'Option 2', 'Option 3'],
    hasSearchIcon: false,
    rightIconName: 'SelectArrow',
    disabled: true,
    isPreview: false
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var V,g,O;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.defaultValue);
    return <SelectInput {...args} defaultValue={value} onChange={newValue => setValue(newValue)} isPreview={args.isPreview} />;
  },
  args: {
    defaultValue: 'Option 1',
    optionsData: ['Option 1', 'Option 2', 'Option 3'],
    hasSearchIcon: false,
    rightIconName: 'SelectArrow',
    disabled: false,
    isPreview: true
  }
}`,...(O=(g=l.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var w,I,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.defaultValue);
    return <SelectInput {...args} defaultValue={value} onChange={newValue => setValue(newValue)} hasSearchIcon={args.hasSearchIcon} />;
  },
  args: {
    defaultValue: 'Option 1',
    optionsData: ['Option 1', 'Option 2', 'Option 3'],
    hasSearchIcon: true,
    rightIconName: 'Clear',
    disabled: false,
    isPreview: false
  }
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const ce=["DefaultSelect","DisabledSelect","PreviewSelect","SelectWithSearchIcon"];export{n as DefaultSelect,s as DisabledSelect,l as PreviewSelect,i as SelectWithSearchIcon,ce as __namedExportsOrder,pe as default};
