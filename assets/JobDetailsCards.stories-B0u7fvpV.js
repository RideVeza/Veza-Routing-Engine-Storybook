import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as L}from"./index-BP8_t0zE.js";import{J as a}from"./JobDetailsCards-DR4Pkfil.js";import{m as n}from"./newJobResult-BH-vBpQD.js";import"./JobDetailsConfigurations-Dkkrz0gQ.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Card-D3lXULz8.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Paper-Coa4cW4M.js";import"./create-safe-context-DdvLfAHk.js";import"./Flex-DfchtKyW.js";import"./Title-NR0nO8_X.js";import"./Switch-DEOlBtZP.js";import"./Input-2PvRR_UE.js";import"./use-id-B6kcI9zl.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";import"./JobDetailsRoutes-BbeCwuwQ.js";import"./index-B98Pt2jl.js";import"./iconBase-tVazycLF.js";import"./Input-B6p2Evf3.js";import"./index-L2PmcK6x.js";import"./RouteCard-Dix3uWcG.js";import"./index-DUW3t7VM.js";import"./index-DhrrqPsw.js";import"./Badge-DqJ7v24Y.js";import"./routes-Ss6aDr-t.js";import"./jobs-DhiDD4xb.js";import"./CloseButton-Bf40-Csk.js";import"./UnstyledButton-Bp_jImnG.js";import"./JobDetailsSchools-Co_72Buj.js";import"./Skeleton-C45Pgd_S.js";import"./ScrollArea-D4tNmDXS.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";const ct={title:"JobDetails Page Components/JobDetailsCards",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"Indicates if the data is currently loading"},activeTab:{control:"text",description:"Active tab label to determine which content to show"},formattedJobData:{control:"object",description:"Formatted job data object containing the job details"}},args:{isLoading:!0,activeTab:"Routes"}},r={args:{isLoading:!1,activeTab:"Routes",formattedJobData:n},render:t=>{const[J,x]=L.useState([]);return console.log("highlighted route: ",J),o.jsx("div",{style:{width:"700px"},children:o.jsx(a,{isLoading:t.isLoading,formattedJobData:t.formattedJobData,activeTab:t.activeTab,setHighlightRoute:x})})}},e={render:t=>o.jsx("div",{style:{width:"700px"},children:o.jsx(a,{...t})}),args:{isLoading:!1,activeTab:"Schools",formattedJobData:n}},i={render:t=>o.jsx("div",{style:{width:"700px"},children:o.jsx(a,{...t})}),args:{isLoading:!1,activeTab:"Configurations",formattedJobData:n}},s={render:t=>o.jsx("div",{style:{width:"700px"},children:o.jsx(a,{...t})}),args:{isLoading:!0,activeTab:"Routes"}};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    activeTab: 'Routes',
    formattedJobData: mockedFormattedJobData
  },
  render: args => {
    const [highlightRoute, setHighlightRoute] = useState<string[]>([]);
    console.log('highlighted route: ', highlightRoute);
    return <div style={{
      width: '700px'
    }}>\r
        <JobDetailsCards isLoading={args.isLoading} formattedJobData={args.formattedJobData} activeTab={args.activeTab} setHighlightRoute={setHighlightRoute} />\r
      </div>;
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: '700px'
    }}>\r
        <JobDetailsCards {...args} />\r
      </div>;
  },
  args: {
    isLoading: false,
    activeTab: 'Schools',
    formattedJobData: mockedFormattedJobData
  }
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,b,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: '700px'
    }}>\r
        <JobDetailsCards {...args} />\r
      </div>;
  },
  args: {
    isLoading: false,
    activeTab: 'Configurations',
    formattedJobData: mockedFormattedJobData
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,v,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: '700px'
    }}>\r
        <JobDetailsCards {...args} />\r
      </div>;
  },
  args: {
    isLoading: true,
    activeTab: 'Routes'
  }
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const pt=["RoutesTabLoaded","SchoolsTabLoaded","ConfigurationsTabLoaded","DefaultLoadingState"];export{i as ConfigurationsTabLoaded,s as DefaultLoadingState,r as RoutesTabLoaded,e as SchoolsTabLoaded,pt as __namedExportsOrder,ct as default};
