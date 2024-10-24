import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{P as c}from"./Popover-w4mprIVE.js";import{B as a}from"./Button-DgKJQOcJ.js";import{F as O}from"./Flex-DfchtKyW.js";import{T as x}from"./Title-NR0nO8_X.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./index-DJkmxc1E.js";import"./factory-Cmy58O58.js";import"./default-theme-BUmQqxa3.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./use-merged-ref-DIizHiiB.js";import"./get-size-ZIjN6hcg.js";import"./create-vars-resolver-BkjTnGuP.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./random-id-CCVmTau8.js";import"./Transition-1eDnA5u2.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-id-B6kcI9zl.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./Button-DQolzjlr.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./UnstyledButton-Bp_jImnG.js";const Y={title:"Components/PopoverComponent",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpened:{control:"boolean",description:"Determines if the popover is opened or closed"},onClose:{action:"closed",description:"Function to handle closing the popover"},popoverContent:{control:"text",description:"Content to display inside the popover"},closeOnClickOutside:{control:"boolean",description:"Determines if the popover should close when clicking outside"},position:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],description:"Position of the popover relative to the target"}},args:{isOpened:!1,popoverContent:e.jsx("div",{style:{height:"50px",padding:"5px"},children:e.jsx(O,{justify:"center",align:"center",h:"100%",w:"100%",children:e.jsx(x,{order:5,children:"This is the popover content"})})}),closeOnClickOutside:!0}},r={render:o=>{const[l,t]=p.useState(o.isOpened),n=p.useRef(null),s=()=>{t(!1),o.onClose()},d=()=>t(!0);return e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx("div",{ref:n,children:e.jsx(a,{text:"Toggle Popover",onClick:d})}),e.jsx(c,{...o,ref:n,isOpened:l,onClose:s})]})}},i={render:o=>{const[l,t]=p.useState(o.isOpened),n=p.useRef(null),s=()=>{t(!1),o.onClose()},d=()=>t(!0);return e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx("div",{ref:n,children:e.jsx(a,{text:"Toggle Popover",onClick:d})}),e.jsx(c,{...o,isOpened:l,closeOnClickOutside:!1,onClose:s,popoverContent:e.jsxs("div",{children:[e.jsx("p",{children:"Custom content inside the popover"}),e.jsx(a,{text:"Close Popover",variant:"outline",onClick:s})]})})]})}};var m,v,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [isOpened, setIsOpened] = useState(args.isOpened);
    const divRef = useRef<HTMLDivElement>(null);
    const handleClose = () => {
      setIsOpened(false);
      args.onClose();
    };
    const handleOpen = () => setIsOpened(true);
    return <div style={{
      position: 'relative',
      width: '100%'
    }}>\r
        <div ref={divRef}>\r
          <ButtonComponent text="Toggle Popover" onClick={handleOpen} />\r
        </div>\r
        <PopoverComponent {...args} ref={divRef} isOpened={isOpened} onClose={handleClose} />\r
      </div>;
  }
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var C,h,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [isOpened, setIsOpened] = useState(args.isOpened);
    const divRef = useRef<HTMLDivElement>(null);
    const handleClose = () => {
      setIsOpened(false);
      args.onClose();
    };
    const handleOpen = () => setIsOpened(true);
    return <div style={{
      position: 'relative',
      width: '100%'
    }}>\r
        <div ref={divRef}>\r
          <ButtonComponent text="Toggle Popover" onClick={handleOpen} />\r
        </div>\r
        <PopoverComponent {...args} isOpened={isOpened} closeOnClickOutside={false} onClose={handleClose} popoverContent={<div>\r
              <p>Custom content inside the popover</p>\r
              <ButtonComponent text="Close Popover" variant="outline" onClick={handleClose} />\r
            </div>} />\r
      </div>;
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Z=["DefaultPopover","PopoverWithCustomContent"];export{r as DefaultPopover,i as PopoverWithCustomContent,Z as __namedExportsOrder,Y as default};
