import{j as i}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{S as o}from"./SwitchComponent-Cs0CNOmW.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Switch-DEOlBtZP.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./Input-2PvRR_UE.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";const M={title:"Components/SwitchComponent",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"boolean",description:"The current value of the switch (on/off)"},onChange:{action:"value changed",description:"Function to handle value changes"},disabled:{control:"boolean",description:"Disables the switch"},isRequired:{control:"boolean",description:"Marks the switch as required"},variant:{control:{type:"select"},options:["default","small"],description:"Size variant of the switch",defaultValue:"default"}},args:{value:!1,disabled:!1,isRequired:!1,variant:"default"}},r={render:e=>{const[a,s]=u.useState(!1);return i.jsx(o,{...e,value:a,onChange:t=>s(t)})},args:{value:!1,disabled:!1,isRequired:!1,variant:"default"}},n={render:e=>{const[a,s]=u.useState(!1);return i.jsx(o,{...e,value:a,onChange:t=>s(t),variant:"small"})},args:{value:!1,disabled:!1,isRequired:!1,variant:"small"}},l={render:e=>{const[a,s]=u.useState(!1);return i.jsx(o,{...e,value:a,onChange:t=>s(t),disabled:!0})},args:{value:!1,disabled:!0,isRequired:!1,variant:"default"}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    return <SwitchComponent {...args} value={value} onChange={newValue => setValue(newValue)} />;
  },
  args: {
    value: false,
    disabled: false,
    isRequired: false,
    variant: 'default'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    return <SwitchComponent {...args} value={value} onChange={newValue => setValue(newValue)} variant="small" />;
  },
  args: {
    value: false,
    disabled: false,
    isRequired: false,
    variant: 'small'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,g,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    return <SwitchComponent {...args} value={value} onChange={newValue => setValue(newValue)} disabled={true} />;
  },
  args: {
    value: false,
    disabled: true,
    isRequired: false,
    variant: 'default'
  }
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const O=["DefaultSwitch","SmallSwitch","DisabledSwitch"];export{r as DefaultSwitch,l as DisabledSwitch,n as SmallSwitch,O as __namedExportsOrder,M as default};
