import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as s}from"./index-BP8_t0zE.js";import{C as c}from"./ContextWindowHeader-DOOOqHPz.js";import{t as x}from"./theme-DV-fQgRe.js";import"./index-BB_o3gze.js";import"./iconBase-tVazycLF.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./ActionIcon-g5D0V-R_.js";import"./factory-Cmy58O58.js";import"./default-theme-BUmQqxa3.js";import"./ActionIcon-CaaKUvZ0.js";import"./get-size-ZIjN6hcg.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./IconComponent-BLxFDGI_.js";import"./index-DDyY_0rn.js";import"./index-B98Pt2jl.js";import"./index-L2PmcK6x.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";import"./IndicationsBadge-DCr2nWIo.js";import"./Flex-DfchtKyW.js";import"./List-Cksbtp4j.js";import"./create-scoped-keydown-handler-C7O3t3U_.js";import"./get-contrast-color-CPKee8Lw.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./create-safe-context-DdvLfAHk.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Title-NR0nO8_X.js";import"./CloseButton-Bf40-Csk.js";import"./Card-D3lXULz8.js";import"./Paper-Coa4cW4M.js";import"./Image-CyM-z9cL.js";const g=[{label:"Tab 1",content:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"First Tab Content"})})},{label:"Tab 2",content:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Second Tab Content"})})},{label:"Tab 3",content:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Third Tab Content"})})}],C={id:"1",title:"CBE-0002"},k={id:"1",title:"Peter Parker",indications:["attendant","lpn","hca"],pictureUrl:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"},ve={title:"Components/ContextWindowHeader",component:c,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:x.colors.gray[0]}]}},tags:["autodocs"],argTypes:{data:{control:"object",description:"The data for the header, including title, indications, and pictureUrl"},tabs:{control:"object",description:"The tabs for the context window, each with a label and content"},activeTab:{control:"text",description:"The currently active tab"},setActiveTab:{action:"activeTabChanged",description:"Function to change the active tab"},onHeaderIconClick:{action:"headerIconClick",description:'Callback for header icon click (e.g., for "All Routes")'},onSave:{action:"save",description:"Callback when the Save or Ready button is clicked"},onDelete:{action:"delete",description:"Callback when the Delete button is clicked"},color:{control:"color",description:"The color of the header background"}},args:{data:C,tabs:g,activeTab:"Tab 1",color:"blue"}},o={render:t=>{const[a,r]=s.useState(t.activeTab);return e.jsx("div",{style:{width:"500px"},children:e.jsx(c,{...t,activeTab:a,setActiveTab:r})})}},i={render:t=>{const[a,r]=s.useState(t.activeTab);return e.jsx("div",{style:{width:"500px"},children:e.jsx(c,{...t,activeTab:a,setActiveTab:r,onSave:()=>alert("Ready action"),onDelete:()=>alert("Delete action"),onHeaderIconClick:()=>alert("Icon clicked")})})},args:{color:void 0}},n={args:{data:k,color:void 0},render:t=>{const[a,r]=s.useState(t.activeTab);return e.jsx("div",{style:{width:"500px"},children:e.jsx(c,{...t,activeTab:a,setActiveTab:r,onHeaderIconClick:()=>alert("Icon clicked")})})}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState(args.activeTab);
    return <div style={{
      width: '500px'
    }}>\r
        <ContextWindowHeader {...args} activeTab={activeTab} setActiveTab={setActiveTab} />\r
      </div>;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,b,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState(args.activeTab);
    return <div style={{
      width: '500px'
    }}>\r
        <ContextWindowHeader {...args} activeTab={activeTab} setActiveTab={setActiveTab} onSave={() => alert('Ready action')} onDelete={() => alert('Delete action')} onHeaderIconClick={() => alert('Icon clicked')} />\r
      </div>;
  },
  args: {
    color: undefined
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var u,T,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: userData,
    color: undefined
  },
  render: args => {
    const [activeTab, setActiveTab] = useState(args.activeTab);
    return <div style={{
      width: '500px'
    }}>\r
        <ContextWindowHeader {...args} activeTab={activeTab} setActiveTab={setActiveTab} onHeaderIconClick={() => alert('Icon clicked')} />\r
      </div>;
  }
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const ue=["DefaultHeader","RouteWindowHeaderModeWithoutBorder","UserHeader"];export{o as DefaultHeader,i as RouteWindowHeaderModeWithoutBorder,n as UserHeader,ue as __namedExportsOrder,ve as default};
