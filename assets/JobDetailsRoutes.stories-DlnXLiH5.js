import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{J as a}from"./JobDetailsRoutes-BbeCwuwQ.js";import{m as s}from"./newJobResult-BH-vBpQD.js";import"./index-B98Pt2jl.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Input-B6p2Evf3.js";import"./index-L2PmcK6x.js";import"./Input-2PvRR_UE.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./Flex-DfchtKyW.js";import"./RouteCard-Dix3uWcG.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./Card-D3lXULz8.js";import"./Paper-Coa4cW4M.js";import"./create-safe-context-DdvLfAHk.js";import"./Title-NR0nO8_X.js";import"./Badge-DqJ7v24Y.js";import"./routes-Ss6aDr-t.js";import"./jobs-DhiDD4xb.js";import"./CloseButton-Bf40-Csk.js";import"./UnstyledButton-Bp_jImnG.js";const L={title:"JobDetails Page Components/JobDetailsRoutes",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{formattedJobData:{description:"Formatted job data object used to display route details."},setHighlightRoute:{action:"highlightRouteChanged",description:"Callback function to set the highlighted route ID(s)."}},args:{formattedJobData:s}},t={render:m=>{const[p,n]=d.useState([]);return console.log("highlighted route: ",p),o.jsx("div",{style:{width:"700px"},children:o.jsx(a,{formattedJobData:m.formattedJobData,setHighlightRoute:n})})},args:{formattedJobData:s}};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    const [highlightRoute, setHighlightRoute] = useState<string[]>([]);
    console.log('highlighted route: ', highlightRoute);
    return <div style={{
      width: '700px'
    }}>\r
        <JobDetailsRoutes formattedJobData={args.formattedJobData} setHighlightRoute={setHighlightRoute} />\r
      </div>;
  },
  args: {
    formattedJobData: mockedFormattedJobData
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const M=["DefaultRoutes"];export{t as DefaultRoutes,M as __namedExportsOrder,L as default};
