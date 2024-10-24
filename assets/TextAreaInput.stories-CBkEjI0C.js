import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{T as l}from"./TextAreaInput-BfyWLCcP.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./factory-Cmy58O58.js";import"./InputBase-Dxa36rRv.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Input-2PvRR_UE.js";import"./get-size-ZIjN6hcg.js";import"./create-vars-resolver-BkjTnGuP.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";const _={title:"Components/TextAreaInput",component:l,parameters:{layout:"centered"},argTypes:{placeholder:{control:"text",description:"Placeholder for the text area",defaultValue:"Placeholder"},value:{control:"text",description:"The current value of the text area"},onChange:{action:"onChange",description:"Function to update the text area value"},disabled:{control:"boolean",description:"Whether the text area is disabled",defaultValue:!1},isRequired:{control:"boolean",description:"Whether the text area is required",defaultValue:!1},isPreview:{control:"boolean",description:"Whether the text area is in preview mode",defaultValue:!1}}},s={render:e=>{const[a,t]=o.useState("");return r.jsx("div",{style:{width:"500px"},children:r.jsx(l,{...e,value:a,onChange:t})})},args:{placeholder:"Placeholder",isRequired:!1,disabled:!1,isPreview:!1}},i={render:e=>{const[a,t]=o.useState("This field is disabled");return r.jsx("div",{style:{width:"500px"},children:r.jsx(l,{...e,value:a,onChange:t,disabled:e.disabled})})},args:{placeholder:"Placeholder",isRequired:!1,isPreview:!1,disabled:!0}},n={render:e=>{const[a,t]=o.useState("Preview mode content");return r.jsx("div",{style:{width:"500px"},children:r.jsx(l,{...e,value:a,onChange:t,isPreview:e.isPreview})})},args:{placeholder:"Preview mode",isRequired:!1,disabled:!1,isPreview:!0}};var d,u,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '500px'
    }}>\r
        <TextAreaInput {...args} value={value} onChange={setValue} />\r
      </div>;
  },
  args: {
    placeholder: 'Placeholder',
    isRequired: false,
    disabled: false,
    isPreview: false
  }
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,h,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('This field is disabled');
    return <div style={{
      width: '500px'
    }}>\r
        <TextAreaInput {...args} value={value} onChange={setValue} disabled={args.disabled} />\r
      </div>;
  },
  args: {
    placeholder: 'Placeholder',
    isRequired: false,
    isPreview: false,
    disabled: true
  }
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,x,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Preview mode content');
    return <div style={{
      width: '500px'
    }}>\r
        <TextAreaInput {...args} value={value} onChange={setValue} isPreview={args.isPreview} />\r
      </div>;
  },
  args: {
    placeholder: 'Preview mode',
    isRequired: false,
    disabled: false,
    isPreview: true
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const F=["DefaultTextArea","DisabledTextArea","PreviewTextArea"];export{s as DefaultTextArea,i as DisabledTextArea,n as PreviewTextArea,F as __namedExportsOrder,_ as default};
