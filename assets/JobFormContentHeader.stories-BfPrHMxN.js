import{j as i}from"./jsx-runtime-CexXSJP5.js";import{J as P}from"./JobFormContentHeader-CjKBG-OQ.js";import{B as j}from"./Button-DgKJQOcJ.js";import"./index-BP8_t0zE.js";import"./iconBase-tVazycLF.js";import"./index-B98Pt2jl.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Input-B6p2Evf3.js";import"./index-L2PmcK6x.js";import"./Input-2PvRR_UE.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./Flex-DfchtKyW.js";import"./Popover-w4mprIVE.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./index-DJkmxc1E.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./Transition-1eDnA5u2.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Group-uPXshQyq.js";import"./Title-NR0nO8_X.js";import"./Button-DQolzjlr.js";import"./Loader-I3UIFO-P.js";import"./UnstyledButton-Bp_jImnG.js";const gt={title:"Components/JobFormContentHeader",component:P,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Main title displayed in the header"},shouldRenderInput:{control:"boolean",description:"Determines if the search input should be rendered"},renderHeaderButtonComponent:{control:!1,description:"Optional function to render custom buttons in the header"},buttonText:{control:"text",description:"Text for the primary button"},buttonAction:{action:"clicked",description:"Function called when the primary button is clicked"},itemsCount:{control:"number",description:"Number of items to display in the header"},onCancel:{action:"clicked",description:"Function called when the cancel button is clicked"},isDisabled:{control:"boolean",description:"Disables the primary button if true"},hoverContent:{control:"text",description:"Content displayed in a popover when hovering over the button"}},args:{title:"Job Form Header",shouldRenderInput:!0,buttonText:"Add Item",isDisabled:!1,onCancel:void 0,hoverContent:i.jsx("div",{style:{padding:"5px"},children:"Popover content."})}},t={args:{}},e={args:{itemsCount:5}},o={args:{renderHeaderButtonComponent:()=>i.jsx(j,{text:"Custom Button",onClick:()=>console.log("Custom Button clicked")})}},r={args:{shouldRenderInput:!1}},n={args:{onCancel:()=>console.log("cancel")}},s={args:{isDisabled:!0}},a={args:{hoverContent:i.jsx("div",{style:{padding:"5px"},children:"Popover content."})}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    itemsCount: 5
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var h,g,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    renderHeaderButtonComponent: () => <ButtonComponent text="Custom Button" onClick={() => console.log('Custom Button clicked')} />
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    shouldRenderInput: false
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,B,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    onCancel: () => console.log('cancel')
  }
}`,...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var W,D,H;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(H=(D=s.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,S,k;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    hoverContent: <div style={{
      padding: '5px'
    }}>Popover content.</div>
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const Ct=["DefaultHeader","WithItemsCount","WithCustomButtons","WithoutSearchInput","WithoutCancelButton","DisabledPrimaryButton","WithPopoverWhenHover"];export{t as DefaultHeader,s as DisabledPrimaryButton,o as WithCustomButtons,e as WithItemsCount,a as WithPopoverWhenHover,n as WithoutCancelButton,r as WithoutSearchInput,Ct as __namedExportsOrder,gt as default};
