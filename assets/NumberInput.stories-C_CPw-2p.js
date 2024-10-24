import{j as p}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{G as x}from"./index-B98Pt2jl.js";import{a as N,b as j}from"./index-L2PmcK6x.js";import{a as D}from"./index-DUW3t7VM.js";import{N as l}from"./NumberInput-CNNOr2r4.js";import{t as O}from"./theme-DV-fQgRe.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./factory-Cmy58O58.js";import"./default-theme-BUmQqxa3.js";import"./get-size-ZIjN6hcg.js";import"./create-vars-resolver-BkjTnGuP.js";import"./use-resolved-styles-api-9Hl1n5Yq.js";import"./InputBase-Dxa36rRv.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Input-2PvRR_UE.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./UnstyledButton-Bp_jImnG.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-merged-ref-DIizHiiB.js";import"./clamp-DTmYCdls.js";const r={Search:x,Close:j,Save:D,Profile:N},$={title:"Components/NumberInputComponent",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text displayed inside the number input"},value:{control:"number",description:"The current value of the number input"},onChange:{action:"changed",description:"Function called when the number input value changes"},disabled:{control:"boolean",description:"Defines if the number input is disabled"},icon:{control:{type:"select"},options:Object.keys(r),mapping:r,description:"Optional icon displayed inside the input"},hasCloseButton:{control:"boolean",description:"Determines if the close button should be displayed"},isRequired:{control:"boolean",description:"Indicates if the number input is required"},variant:{control:{type:"select"},options:["filled","outline","unstyled"],description:"Input style variant (filled, outline, or unstyled)"},RightSectionIcon:{control:{type:"select"},options:Object.keys(r),mapping:r,description:"Icon displayed in the right section of the input"},rightSectionIconColor:{control:"color",description:"Color of the icon in the right section"}},args:{placeholder:"Number",value:void 0,disabled:!1,isRequired:!1,hasCloseButton:!0,variant:"filled",RightSectionIcon:r.Close,rightSectionIconColor:O.colors.gray[3]}},a={render:e=>{const[t,n]=c.useState(e.value||void 0);return p.jsx(l,{...e,value:t,onChange:o=>n(o)})},args:{}},s={render:e=>{const[t,n]=c.useState(e.value||0);return p.jsx(l,{...e,value:t,onChange:o=>n(o)})},args:{icon:x,placeholder:"Search..."}},i={args:{disabled:!0,value:10}},u={render:e=>{const[t,n]=c.useState(e.value||0);return p.jsx(l,{...e,value:t,onChange:o=>n(o)})},args:{icon:N,placeholder:"Number",value:20}};var d,m,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var b,f,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 10
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,V,y;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || 0);
    return <NumberInputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: IoMdPerson,
    placeholder: 'Number',
    value: 20
  }
}`,...(y=(V=u.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const ee=["DefaultInput","WithIcon","DisabledInput","InputWithUserIcon"];export{a as DefaultInput,i as DisabledInput,u as InputWithUserIcon,s as WithIcon,ee as __namedExportsOrder,$ as default};
