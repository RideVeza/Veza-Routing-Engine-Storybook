import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{W as i}from"./WeekdaySelector-BDND3AmC.js";import{m}from"./newJobResult-BH-vBpQD.js";import{d as l}from"./routes-Ss6aDr-t.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Flex-DfchtKyW.js";import"./factory-Cmy58O58.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./create-vars-resolver-BkjTnGuP.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./jobs-DhiDD4xb.js";const v=m.routes,h=m.routes.slice(0,-1),q={title:"Components/WeekdaySelector",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{routesData:{description:"Route data object for the day and shift, which includes stops and route information."},activeDay:{control:{type:"select",options:l},description:"The currently active day."},setActiveDay:{action:"setActiveDay",description:"Function to update the active day when a day is clicked."}},args:{routesData:v,activeDay:"Monday"}},t={render:r=>{const[o,s]=p.useState("Monday");return a.jsx("div",{style:{width:"400px"},children:a.jsx(i,{routesData:r.routesData,activeDay:o,setActiveDay:s})})},args:{routesData:v,activeDay:"Monday"}},e={render:r=>{const[o,s]=p.useState("Monday");return a.jsx("div",{style:{width:"400px"},children:a.jsx(i,{routesData:r.routesData,activeDay:o,setActiveDay:s})})},args:{routesData:h,activeDay:"Monday"}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [activeDay, setActiveDay] = useState('Monday');
    return <div style={{
      width: '400px'
    }}>\r
        <WeekdaySelector routesData={args.routesData} activeDay={activeDay} setActiveDay={setActiveDay} />\r
      </div>;
  },
  args: {
    routesData: mockRoutesData,
    activeDay: 'Monday'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var y,D,u;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [activeDay, setActiveDay] = useState('Monday');
    return <div style={{
      width: '400px'
    }}>\r
        <WeekdaySelector routesData={args.routesData} activeDay={activeDay} setActiveDay={setActiveDay} />\r
      </div>;
  },
  args: {
    routesData: mockRoutesDataWithoutFridayData,
    activeDay: 'Monday'
  }
}`,...(u=(D=e.parameters)==null?void 0:D.docs)==null?void 0:u.source}}};const z=["DefaultWeekdaySelector","SelectorWhenDayWithoutData"];export{t as DefaultWeekdaySelector,e as SelectorWhenDayWithoutData,z as __namedExportsOrder,q as default};
