import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as a}from"./index-BP8_t0zE.js";import{R as s}from"./RouteDetails-DKV8_c-V.js";import{m as i}from"./newJobResult-BH-vBpQD.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./Flex-DfchtKyW.js";import"./Title-NR0nO8_X.js";import"./Input-B6p2Evf3.js";import"./index-B98Pt2jl.js";import"./iconBase-tVazycLF.js";import"./index-L2PmcK6x.js";import"./Input-2PvRR_UE.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./ObjectBadge-BW0P1RiL.js";import"./IconComponent-BLxFDGI_.js";import"./index-DDyY_0rn.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";import"./SelectInput-Cmdq-hxt.js";import"./Select-CgpR6YNG.js";import"./use-resolved-styles-api-9Hl1n5Yq.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./use-uncontrolled-D1uLaDoI.js";import"./CloseButton-Bf40-Csk.js";import"./ScrollArea-D4tNmDXS.js";import"./InputBase-Dxa36rRv.js";import"./SwitchComponent-Cs0CNOmW.js";import"./Switch-DEOlBtZP.js";import"./TextAreaInput-BfyWLCcP.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./jobs-DhiDD4xb.js";import"./date-pny-vRhT.js";import"./constructFrom-rJN6zrQ_.js";import"./routes-Ss6aDr-t.js";import"./DayShiftSelector-xfVhayJK.js";import"./WeekdaySelector-BDND3AmC.js";import"./ScheduleStepHeader-CxLKW8nK.js";import"./create-scoped-keydown-handler-C7O3t3U_.js";import"./AccordionChevron-BAXzvIVP.js";import"./get-style-object-DUJZA7T_.js";import"./ContextWindowHeader-DOOOqHPz.js";import"./index-BB_o3gze.js";import"./ActionIcon-g5D0V-R_.js";import"./ActionIcon-CaaKUvZ0.js";import"./IndicationsBadge-DCr2nWIo.js";import"./List-Cksbtp4j.js";import"./get-contrast-color-CPKee8Lw.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./Card-D3lXULz8.js";import"./Paper-Coa4cW4M.js";import"./Image-CyM-z9cL.js";import"./use-form-yKeun-xg.js";const Jt={title:"Components/RouteDetails",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{routes:{control:"object",description:"Array of formatted routes by day"},routeInfo:{control:"object",description:"Information about the selected route"},setHighlightRoute:{action:"highlightRouteChanged",description:"Function to handle route highlighting"}},args:{routeInfo:i.routesInfo[0],routes:i.routes}},t={render:o=>{const[n,u]=a.useState([]);return console.log("highlightRoute",n),r.jsx("div",{style:{width:"500px"},children:r.jsx(s,{...o,routeInfo:o.routeInfo,routes:o.routes,setHighlightRoute:u})})}};var e,m,p;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    const [highlightRoute, setHighlightRoute] = useState<string[]>([]);
    console.log('highlightRoute', highlightRoute);
    return <div style={{
      width: '500px'
    }}>\r
        <RouteDetails {...args} routeInfo={args.routeInfo} routes={args.routes} setHighlightRoute={setHighlightRoute} />\r
      </div>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ot=["DefaultRouteDetails"];export{t as DefaultRouteDetails,Ot as __namedExportsOrder,Jt as default};
