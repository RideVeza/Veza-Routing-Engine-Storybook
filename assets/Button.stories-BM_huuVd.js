import{j as d}from"./jsx-runtime-CexXSJP5.js";import{G as J}from"./index-DDyY_0rn.js";import{G as T}from"./index-B98Pt2jl.js";import{I as K}from"./index-L2PmcK6x.js";import{I as P,a as Q}from"./index-DUW3t7VM.js";import{b as U,M as N,c as _}from"./index-DhrrqPsw.js";import{B as q}from"./Button-DgKJQOcJ.js";import{t as l}from"./theme-DV-fQgRe.js";import"./index-BP8_t0zE.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./Button-DQolzjlr.js";import"./default-theme-BUmQqxa3.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";const u={Search:T,Delete:N,Edit:_,Close:P,Save:Q},xt={title:"Components/ButtonComponent",component:q,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:l.colors.gray[0]}]}},tags:["autodocs"],argTypes:{text:{control:"text",description:"Text displayed inside the button"},onClick:{action:"clicked",description:"Function called when the button is clicked"},variant:{control:{type:"select"},options:["filled","outline","light","default","subtle","white","transparent","gradient"],description:"Defines the style of the button"},icon:{control:{type:"select"},options:Object.keys(u),mapping:u,description:"Optional icon displayed inside the button"},iconSize:{control:{type:"number"},description:"Size of the icon (in px)"},isIconOnLeft:{control:"boolean",description:"Determines if the icon is displayed to the left of the text"},color:{control:"color",description:"Color of the button"},isFullWidth:{control:"boolean",description:"Defines if the button takes up the full available width"},isDisabled:{control:"boolean",description:"Defines if the button is disabled"},isLoading:{control:"boolean",description:"Defines if the button shows a loading indicator"},radius:{control:{type:"number"},description:"Defines the border radius of the button (in px)"},padding:{control:"text",description:'Defines the padding of the button. Accepts CSS padding values such as "10px", "1rem" or "10px 20px".'},fontSize:{control:"text",description:'Sets the font size of the button text. Accepts any valid CSS font-size values like "14px", "1rem" or "large".'}},args:{text:"Button",variant:"filled",color:l.colors.primary[5],iconSize:15,isFullWidth:!0,isDisabled:!1,isLoading:!1,isIconOnLeft:!1,radius:25,padding:"4px 8px",fontSize:"14px"}},t={args:{text:"Open",icon:U,variant:"filled"}},e={args:{text:"Search",icon:T,isIconOnLeft:!0,variant:"light"}},o={args:{text:"Delete",icon:N,variant:"default"}},r={args:{text:"Disabled",isDisabled:!0}},n={args:{text:"Loading",isLoading:!0}},i={args:{text:"Edit",icon:_,variant:"outline"},parameters:{layout:"centered"}},a={args:{text:"Archive",icon:K,isIconOnLeft:!0,color:l.colors.red[5],variant:"outline"},parameters:{layout:"centered"}},s={args:{text:"Continue",icon:J,isDisabled:!0,radius:12}},c={render:H=>d.jsx("div",{style:{width:"100%",height:"100%",marginTop:"50px"},children:d.jsx(q,{...H})}),args:{text:"Full Width Button",isFullWidth:!0},parameters:{layout:"fullscreen"}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Open',
    icon: MdOpenInNew,
    variant: 'filled'
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,f,x;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'Search',
    icon: GrSearch,
    isIconOnLeft: true,
    variant: 'light'
  }
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,v,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Delete',
    icon: MdDelete,
    variant: 'default'
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,D,y;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    isDisabled: true
  }
}`,...(y=(D=r.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var O,I,L;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Loading',
    isLoading: true
  }
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var C,F,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Edit',
    icon: MdModeEditOutline,
    variant: 'outline'
  },
  parameters: {
    layout: 'centered'
  }
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var w,A,W;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Archive',
    icon: IoMdArchive,
    isIconOnLeft: true,
    color: theme.colors!.red[5],
    variant: 'outline'
  },
  parameters: {
    layout: 'centered'
  }
}`,...(W=(A=a.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var k,z,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Continue',
    icon: GoArrowRight,
    isDisabled: true,
    radius: 12
  }
}`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var R,G,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%',
    height: '100%',
    marginTop: '50px'
  }}>\r
      <ButtonComponent {...args} />\r
    </div>,
  args: {
    text: 'Full Width Button',
    isFullWidth: true
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(j=(G=c.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const bt=["FilledOpenButton","LightIconButtonLeft","DefaultIconButtonRight","DisabledButton","LoadingButton","OutlineButton","ArchiveButton","CustomRadiusButton","FullWidthButton"];export{a as ArchiveButton,s as CustomRadiusButton,o as DefaultIconButtonRight,r as DisabledButton,t as FilledOpenButton,c as FullWidthButton,e as LightIconButtonLeft,n as LoadingButton,i as OutlineButton,bt as __namedExportsOrder,xt as default};
