import{j as p}from"./factory-BYdAncit.js";import{r as d}from"./index-BP8_t0zE.js";import{G as h}from"./index-B98Pt2jl.js";import{a as O,b as E}from"./index-DHgPtaHi.js";import{a as G}from"./index-oL_zBGcM.js";import{I as r}from"./Input-E5qBdqnX.js";import{t as R}from"./theme-CBi4L4pb.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./Input-DkGv-MlU.js";import"./polymorphic-factory-BBVriERq.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./Flex-DB8_OMZA.js";const a={Search:h,Close:E,Save:G,Profile:O},L={title:"Components/InputComponent",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text displayed inside the input"},value:{control:"text",description:"The current value of the input"},onChange:{action:"changed",description:"Function called when the input value changes"},disabled:{control:"boolean",description:"Defines if the input is disabled"},icon:{control:{type:"select"},options:Object.keys(a),mapping:a,description:"Optional icon displayed inside the input"},hasCloseButton:{control:"boolean",description:"Determines if the close button should be displayed"},isRequired:{control:"boolean",description:"Indicates if the input is required"},variant:{control:{type:"select"},options:["filled","outline","unstyled"],description:"Input style variant (filled, outline, or unstyled)"},RightSectionIcon:{control:{type:"select"},options:Object.keys(a),mapping:a,description:"Icon displayed in the right section of the input"},rightSectionIconColor:{control:"color",description:"Color of the icon in the right section"},isSearchInput:{control:"boolean",description:"Determines if the input is a collapsible search input"},backgroundColor:{control:"color",description:"Sets the background color of the input"}},args:{placeholder:"Enter text...",value:"",disabled:!1,isRequired:!1,hasCloseButton:!0,variant:"filled",RightSectionIcon:a.Close,rightSectionIconColor:R.colors.gray[3],isSearchInput:!1,backgroundColor:void 0}},s={render:e=>{const[n,t]=d.useState(e.value||"");return p.jsx(r,{...e,value:n,onChange:o=>t(o)})},args:{}},u={render:e=>{const[n,t]=d.useState(e.value||"");return p.jsx(r,{...e,value:n,onChange:o=>t(o)})},args:{icon:h,placeholder:"Search..."}},l={args:{disabled:!0,value:"Disabled input"}},i={render:e=>{const[n,t]=d.useState(e.value||"john_doe");return p.jsx(r,{...e,value:n,onChange:o=>t(o)})},args:{icon:O,placeholder:"Username...",value:"john_doe"}},c={render:e=>{const[n,t]=d.useState(e.value||"");return p.jsx(r,{...e,value:n,onChange:o=>t(o)})},args:{icon:h,placeholder:"Search...",isSearchInput:!0},parameters:{backgrounds:{default:"light",values:[{name:"light",value:R.colors.gray[2]}]}}};var m,g,I;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || '');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {}
}`,...(I=(g=s.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var v,S,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || '');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: GrSearch,
    placeholder: 'Search...'
  }
}`,...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var f,b,V;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(V=(b=l.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var y,x,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(args.value || 'john_doe');
    return <InputComponent {...args} value={inputValue} onChange={value => setInputValue(value)} />;
  },
  args: {
    icon: IoMdPerson,
    placeholder: 'Username...',
    value: 'john_doe'
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var D,k,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const N=["DefaultInput","WithIcon","DisabledInput","InputWithUserIcon","SearchInputCollapsed"];export{s as DefaultInput,l as DisabledInput,i as InputWithUserIcon,c as SearchInputCollapsed,u as WithIcon,N as __namedExportsOrder,L as default};
