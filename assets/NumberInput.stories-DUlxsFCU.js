import{j as p}from"./factory-BYdAncit.js";import{r as c}from"./index-BP8_t0zE.js";import{G as x}from"./index-B98Pt2jl.js";import{a as N,b as j}from"./index-DHgPtaHi.js";import{a as D}from"./index-oL_zBGcM.js";import{N as l}from"./NumberInput-Bgw8vgZy.js";import{t as O}from"./theme-CBi4L4pb.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./InputBase-BAFZ9pBH.js";import"./polymorphic-factory-BBVriERq.js";import"./Input-DkGv-MlU.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./UnstyledButton-BYy9qxQd.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-merged-ref-Zmja8g2s.js";import"./clamp-DTmYCdls.js";const r={Search:x,Close:j,Save:D,Profile:N},K={title:"Components/NumberInputComponent",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text displayed inside the number input"},value:{control:"number",description:"The current value of the number input"},onChange:{action:"changed",description:"Function called when the number input value changes"},disabled:{control:"boolean",description:"Defines if the number input is disabled"},icon:{control:{type:"select"},options:Object.keys(r),mapping:r,description:"Optional icon displayed inside the input"},hasCloseButton:{control:"boolean",description:"Determines if the close button should be displayed"},isRequired:{control:"boolean",description:"Indicates if the number input is required"},variant:{control:{type:"select"},options:["filled","outline","unstyled"],description:"Input style variant (filled, outline, or unstyled)"},RightSectionIcon:{control:{type:"select"},options:Object.keys(r),mapping:r,description:"Icon displayed in the right section of the input"},rightSectionIconColor:{control:"color",description:"Color of the icon in the right section"}},args:{placeholder:"Number",value:void 0,disabled:!1,isRequired:!1,hasCloseButton:!0,variant:"filled",RightSectionIcon:r.Close,rightSectionIconColor:O.colors.gray[3]}},a={render:e=>{const[t,n]=c.useState(e.value||void 0);return p.jsx(l,{...e,value:t,onChange:o=>n(o)})},args:{}},s={render:e=>{const[t,n]=c.useState(e.value||0);return p.jsx(l,{...e,value:t,onChange:o=>n(o)})},args:{icon:x,placeholder:"Search..."}},u={args:{disabled:!0,value:10}},i={render:e=>{const[t,n]=c.useState(e.value||0);return p.jsx(l,{...e,value:t,onChange:o=>n(o)})},args:{icon:N,placeholder:"Number",value:20}};var d,m,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || undefined);
    return <NumberInputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {}
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,I,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || 0);
    return <NumberInputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: GrSearch,
    placeholder: 'Search...'
  }
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var b,f,C;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 10
  }
}`,...(C=(f=u.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,V,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || 0);
    return <NumberInputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: IoMdPerson,
    placeholder: 'Number',
    value: 20
  }
}`,...(y=(V=i.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const L=["DefaultInput","WithIcon","DisabledInput","InputWithUserIcon"];export{a as DefaultInput,u as DisabledInput,i as InputWithUserIcon,s as WithIcon,L as __namedExportsOrder,K as default};
