import{j as e}from"./factory-BYdAncit.js";import{r as p}from"./index-BP8_t0zE.js";import{P as c}from"./Popover-jsiwsZQx.js";import{B as a}from"./Button-BmZH4clo.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./index-BVEwUaSm.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./Transition-BCGcMdvv.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./theme-CBi4L4pb.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./UnstyledButton-BYy9qxQd.js";const F={title:"Components/PopoverComponent",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpened:{control:"boolean",description:"Determines if the popover is opened or closed"},onClose:{action:"closed",description:"Function to handle closing the popover"},popoverContent:{control:"text",description:"Content to display inside the popover"},closeOnClickOutside:{control:"boolean",description:"Determines if the popover should close when clicking outside"},position:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],description:"Position of the popover relative to the target"}},args:{isOpened:!1,popoverContent:"This is the popover content",closeOnClickOutside:!0}},r={render:o=>{const[l,t]=p.useState(o.isOpened),n=p.useRef(null),s=()=>{t(!1),o.onClose()},d=()=>t(!0);return e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx("div",{ref:n,children:e.jsx(a,{text:"Toggle Popover",onClick:d})}),e.jsx(c,{...o,ref:n,isOpened:l,onClose:s})]})}},i={render:o=>{const[l,t]=p.useState(o.isOpened),n=p.useRef(null),s=()=>{t(!1),o.onClose()},d=()=>t(!0);return e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx("div",{ref:n,children:e.jsx(a,{text:"Toggle Popover",onClick:d})}),e.jsx(c,{...o,isOpened:l,closeOnClickOutside:!1,onClose:s,popoverContent:e.jsxs("div",{children:[e.jsx("p",{children:"Custom content inside the popover"}),e.jsx(a,{text:"Close Popover",variant:"outline",onClick:s})]})})]})}};var m,v,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const q=["DefaultPopover","PopoverWithCustomContent"];export{r as DefaultPopover,i as PopoverWithCustomContent,q as __namedExportsOrder,F as default};
