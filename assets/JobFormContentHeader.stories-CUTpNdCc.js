import{j as i}from"./factory-BYdAncit.js";import{J as P}from"./JobFormContentHeader-CpwVJsvY.js";import{B as j}from"./Button-BmZH4clo.js";import"./index-BP8_t0zE.js";import"./iconBase-tVazycLF.js";import"./index-B98Pt2jl.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./theme-CBi4L4pb.js";import"./Input-E5qBdqnX.js";import"./index-DHgPtaHi.js";import"./Input-DkGv-MlU.js";import"./polymorphic-factory-BBVriERq.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./Flex-DB8_OMZA.js";import"./Popover-jsiwsZQx.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./index-BVEwUaSm.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./Transition-BCGcMdvv.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./Group-DAYBdM2T.js";import"./Title-BF1HBFC0.js";import"./Loader-DYJrnaLT.js";import"./UnstyledButton-BYy9qxQd.js";const ie={title:"Components/JobFormContentHeader",component:P,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Main title displayed in the header"},shouldRenderInput:{control:"boolean",description:"Determines if the search input should be rendered"},renderHeaderButtonComponent:{control:!1,description:"Optional function to render custom buttons in the header"},buttonText:{control:"text",description:"Text for the primary button"},buttonAction:{action:"clicked",description:"Function called when the primary button is clicked"},itemsCount:{control:"number",description:"Number of items to display in the header"},onCancel:{action:"clicked",description:"Function called when the cancel button is clicked"},isDisabled:{control:"boolean",description:"Disables the primary button if true"},hoverContent:{control:"text",description:"Content displayed in a popover when hovering over the button"}},args:{title:"Job Form Header",shouldRenderInput:!0,buttonText:"Add Item",isDisabled:!1,onCancel:void 0,hoverContent:i.jsx("div",{style:{padding:"5px"},children:"Popover content."})}},e={args:{}},t={args:{itemsCount:5}},o={args:{renderHeaderButtonComponent:()=>i.jsx(j,{text:"Custom Button",onClick:()=>console.log("Custom Button clicked")})}},r={args:{shouldRenderInput:!1}},n={args:{onCancel:()=>console.log("cancel")}},s={args:{isDisabled:!0}},a={args:{hoverContent:i.jsx("div",{style:{padding:"5px"},children:"Popover content."})}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    itemsCount: 5
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var h,g,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const ce=["DefaultHeader","WithItemsCount","WithCustomButtons","WithoutSearchInput","WithoutCancelButton","DisabledPrimaryButton","WithPopoverWhenHover"];export{e as DefaultHeader,s as DisabledPrimaryButton,o as WithCustomButtons,t as WithItemsCount,a as WithPopoverWhenHover,n as WithoutCancelButton,r as WithoutSearchInput,ce as __namedExportsOrder,ie as default};
