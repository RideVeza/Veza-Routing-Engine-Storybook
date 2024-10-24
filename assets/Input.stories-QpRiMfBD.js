import{j as d}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{G as h}from"./index-B98Pt2jl.js";import{a as k,b as G}from"./index-L2PmcK6x.js";import{a as U}from"./index-DUW3t7VM.js";import{I as a}from"./Input-B6p2Evf3.js";import{t as E}from"./theme-DV-fQgRe.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./Input-2PvRR_UE.js";import"./default-theme-BUmQqxa3.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./Flex-DfchtKyW.js";const o={Search:h,Close:G,Save:U,Profile:k},ne={title:"Components/InputComponent",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text displayed inside the input"},value:{control:"text",description:"The current value of the input"},onChange:{action:"changed",description:"Function called when the input value changes"},disabled:{control:"boolean",description:"Defines if the input is disabled"},icon:{control:{type:"select"},options:Object.keys(o),mapping:o,description:"Optional icon displayed inside the input"},hasCloseButton:{control:"boolean",description:"Determines if the close button should be displayed"},isRequired:{control:"boolean",description:"Indicates if the input is required"},variant:{control:{type:"select"},options:["filled","outline","unstyled"],description:"Input style variant (filled, outline, or unstyled)"},RightSectionIcon:{control:{type:"select"},options:Object.keys(o),mapping:o,description:"Icon displayed in the right section of the input"},rightSectionIconColor:{control:"color",description:"Color of the icon in the right section"},isSearchInput:{control:"boolean",description:"Determines if the input is a collapsible search input"},isPreview:{control:"boolean",description:"Determines if the input is on Preview Mode"}},args:{placeholder:"Enter text...",value:"",disabled:!1,isRequired:!1,hasCloseButton:!0,variant:"filled",RightSectionIcon:o.Close,rightSectionIconColor:E.colors.gray[3],isSearchInput:!1,isPreview:!1}},s={render:e=>{const[t,n]=m.useState(e.value||"");return d.jsx(a,{...e,value:t,onChange:r=>n(r)})},args:{}},i={render:e=>{const[t,n]=m.useState(e.value||"");return d.jsx(a,{...e,value:t,onChange:r=>n(r)})},args:{icon:h,placeholder:"Search..."}},u={args:{disabled:!0,value:"Disabled input"}},l={args:{value:"Preview Mode input",isPreview:!0}},p={render:e=>{const[t,n]=m.useState(e.value||"john_doe");return d.jsx(a,{...e,value:t,onChange:r=>n(r)})},args:{icon:k,placeholder:"Username...",value:"john_doe"}},c={render:e=>{const[t,n]=m.useState(e.value||"");return d.jsx(a,{...e,value:t,onChange:r=>n(r)})},args:{icon:h,placeholder:"Search...",isSearchInput:!0},parameters:{backgrounds:{default:"light",values:[{name:"light",value:E.colors.gray[2]}]}}};var g,v,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || '');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {}
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,f,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || '');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: GrSearch,
    placeholder: 'Search...'
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var V,b,y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(y=(b=u.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,P,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 'Preview Mode input',
    isPreview: true
  }
}`,...(j=(P=l.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var w,D,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || 'john_doe');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: IoMdPerson,
    placeholder: 'Username...',
    value: 'john_doe'
  }
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var _,O,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || '');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: GrSearch,
    placeholder: 'Search...',
    isSearchInput: true
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: theme.colors!.gray[2]
      }]
    }
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const re=["DefaultInput","WithIcon","DisabledInput","PreviewModeInput","InputWithUserIcon","SearchInputCollapsed"];export{s as DefaultInput,u as DisabledInput,p as InputWithUserIcon,l as PreviewModeInput,c as SearchInputCollapsed,i as WithIcon,re as __namedExportsOrder,ne as default};
