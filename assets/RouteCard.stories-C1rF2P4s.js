import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{R as a}from"./RouteCard-Dix3uWcG.js";import{m as s}from"./newJobResult-BH-vBpQD.js";import{c as p}from"./routes-Ss6aDr-t.js";import"./index-DUW3t7VM.js";import"./iconBase-tVazycLF.js";import"./index-DhrrqPsw.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Card-D3lXULz8.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Paper-Coa4cW4M.js";import"./create-safe-context-DdvLfAHk.js";import"./Flex-DfchtKyW.js";import"./Title-NR0nO8_X.js";import"./Badge-DqJ7v24Y.js";import"./jobs-DhiDD4xb.js";const T={title:"JobDetails Page Components/RouteCard",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{route:{description:"Route data object used to display route information."},onCardClick:{action:"onCardClick",description:"Callback function triggered upon card click."}},args:{route:s.routesInfo[0]}},t={render:n=>{const[d,c]=l.useState([]),m=u=>{c([u])};return console.log("highlighted route: ",d),o.jsx("div",{style:{width:"700px"},children:o.jsx(a,{route:n.route,onCardClick:m,color:p[8]})})},args:{route:s.routesInfo[0]}};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [highlightRoute, setHighlightRoute] = useState<string[]>([]);
    const handleCardClick = (id: string) => {
      setHighlightRoute([id]);
    };
    console.log('highlighted route: ', highlightRoute);
    return <div style={{
      width: '700px'
    }}>\r
        <RouteCard route={args.route} onCardClick={handleCardClick} color={colors[8]} />\r
      </div>;
  },
  args: {
    route: mockedFormattedJobData.routesInfo[0]
  }
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const q=["DefaultRouteCard"];export{t as DefaultRouteCard,q as __namedExportsOrder,T as default};
