import{j as o}from"./factory-BYdAncit.js";import{r as L}from"./index-BP8_t0zE.js";import{J as r}from"./JobDetails-D4082_dn.js";import{m as n}from"./newJobResult-sJsT-L7W.js";import"./index-CQDxHXwo.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./jobs-DYeHrbtM.js";import"./httpClient-DV4VuV9q.js";import"./tslib.es6-Ytcc2UEA.js";import"./jobs-CSoPBwjn.js";import"./Button-BmZH4clo.js";import"./theme-CBi4L4pb.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./ContentHeader-CIXz8JLl.js";import"./index-oL_zBGcM.js";import"./Flex-DB8_OMZA.js";import"./Title-BF1HBFC0.js";import"./Skeleton-DfZH9prR.js";import"./Group-DAYBdM2T.js";import"./List-BQStdOE_.js";import"./index-DWJGBGB2.js";import"./get-auto-contrast-value-DNc6ItoQ.js";import"./create-safe-context-cIFFkskc.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";import"./CloseButton-Bstq3kTa.js";import"./Loader-BVlD5pcq.js";import"./Header-BxwwRcQn.js";import"./auth-ZgXK2BXz.js";import"./ActionIcon-CxALb5nY.js";import"./ActionIcon-CI9f4PEW.js";import"./CompanyCard-Doe4SK5Q.js";import"./Card-sx5hwF33.js";import"./Paper-C4ja3mkh.js";import"./Switch-BJ6-SGMt.js";import"./CheckIcon-DIBRqQfE.js";import"./Input-DkGv-MlU.js";import"./index-B98Pt2jl.js";import"./Input-E5qBdqnX.js";import"./index-DHgPtaHi.js";import"./Badge-CW8H_bYz.js";import"./ScrollArea-CIJALQu3.js";import"./use-merged-ref-Zmja8g2s.js";import"./notifications.store-rT8tHzW-.js";import"./RouteSelector-ChEJD9ic.js";import"./Select-DTnU6ewg.js";import"./InputBase-BAFZ9pBH.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./FocusTrap-BWeZ3v7v.js";import"./index-CdXB_vz_.js";const Ct={title:"JobDetails Page Components/JobDetailsCards",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"Indicates if the data is currently loading"},activeTab:{control:"text",description:"Active tab label to determine which content to show"},formattedJobData:{control:"object",description:"Formatted job data object containing the job details"}},args:{isLoading:!0,activeTab:"Routes"}},a={args:{isLoading:!1,activeTab:"Routes",formattedJobData:n},render:t=>{const[J,x]=L.useState([]);return console.log("highlighted route: ",J),o.jsx("div",{style:{width:"700px"},children:o.jsx(r,{isLoading:t.isLoading,formattedJobData:t.formattedJobData,activeTab:t.activeTab,setHighlightRoute:x})})}},e={render:t=>o.jsx("div",{style:{width:"700px"},children:o.jsx(r,{...t})}),args:{isLoading:!1,activeTab:"Schools",formattedJobData:n}},i={render:t=>o.jsx("div",{style:{width:"700px"},children:o.jsx(r,{...t})}),args:{isLoading:!1,activeTab:"Configurations",formattedJobData:n}},s={render:t=>o.jsx("div",{style:{width:"700px"},children:o.jsx(r,{...t})}),args:{isLoading:!0,activeTab:"Routes"}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,g,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const wt=["RoutesTabLoaded","SchoolsTabLoaded","ConfigurationsTabLoaded","DefaultLoadingState"];export{i as ConfigurationsTabLoaded,s as DefaultLoadingState,a as RoutesTabLoaded,e as SchoolsTabLoaded,wt as __namedExportsOrder,Ct as default};
