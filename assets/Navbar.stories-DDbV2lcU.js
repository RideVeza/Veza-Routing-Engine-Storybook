import{r as t,b as S,j as o}from"./factory-BYdAncit.js";import{r as g}from"./index-BP8_t0zE.js";import{i as I,j as $,a as M,g as z,k as T}from"./index-DHgPtaHi.js";import{f as E}from"./index-oL_zBGcM.js";import{a as b,h as D,i as R}from"./index-CQDxHXwo.js";import{L as A}from"./index-B5h4HgXl.js";import{d as B}from"./styled-components.browser.esm-BzjHiQVu.js";import{a as f}from"./auth-ZgXK2BXz.js";import{A as C}from"./ActionIcon-CxALb5nY.js";import{B as _}from"./Button-BmZH4clo.js";import{b as F,M as K}from"./index-CdXB_vz_.js";import{u as V}from"./Transition-BCGcMdvv.js";import{F as s}from"./Flex-DB8_OMZA.js";import{T as O}from"./Title-BF1HBFC0.js";import{I as P}from"./Image-CuHJv4o9.js";import{n as q}from"./notifications.store-rT8tHzW-.js";import{t as G}from"./theme-CBi4L4pb.js";import"./iconBase-tVazycLF.js";import"./index-BVEwUaSm.js";import"./httpClient-DV4VuV9q.js";import"./tslib.es6-Ytcc2UEA.js";import"./ActionIcon-CI9f4PEW.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./UnstyledButton-BYy9qxQd.js";import"./random-id-CCVmTau8.js";const Z=B.div`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${e=>e.$isCollapsed?t(80):t(221)};
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: width 0.3s;
  }

  .link {
    border-radius: 12px;
    text-decoration: none;
    padding: ${e=>`${e.theme.spacing.sm}`};

    &[data-active] {
      .link-icon {
        color: ${e=>e.theme.colors.primary[5]};
      }

      .link-text {
        color: ${e=>e.theme.colors.primary[5]};
      }
    }
  }

  .link-text {
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colorScheme==="dark"?e.theme.colors.dark[1]:e.theme.colors.gray[5]};
  }

  .link-icon {
    color: ${e=>e.theme.colorScheme==="dark"?e.theme.colors.dark[0]:e.theme.colors.gray[5]};
    margin-right: ${e=>e.$isCollapsed?0:t(5)};
    width: ${t(25)};
    height: ${t(25)};
  }
`,Q="/Veza-Routing-Engine-Storybook/assets/Veza_horiz-purple-DWT0awKK.svg",W="data:image/svg+xml,%3csvg%20width='233'%20height='212'%20viewBox='0%200%20233%20212'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M95.5367%2049.0125C96.4893%2049.9651%2096.4893%2051.5095%2095.5367%2052.462L62.4926%2085.5061C56.9687%2091.0301%2056.9686%2099.9862%2062.4926%20105.51L106.311%20149.328C111.835%20154.852%20120.791%20154.852%20126.315%20149.328L170.133%20105.51C175.657%2099.9862%20175.657%2091.0301%20170.133%2085.5061L150.245%2065.6177C148.34%2063.7126%20145.251%2063.7126%20143.346%2065.6177L131.193%2077.7701C129.288%2079.6752%20129.288%2082.7641%20131.193%2084.6692L140.308%2093.7834C141.26%2094.736%20141.26%2096.2804%20140.308%2097.2329L118.038%20119.503C117.085%20120.455%20115.541%20120.455%20114.588%20119.503L92.3183%2097.2329C91.3657%2096.2804%2091.3657%2094.736%2092.3183%2093.7834L152.691%2033.4106C153.644%2032.458%20155.188%2032.458%20156.141%2033.4106L196.805%2074.0753C208.642%2085.9123%20208.642%20105.104%20196.805%20116.941L137.746%20176C125.909%20187.838%20106.717%20187.838%2094.8801%20176L35.8206%20116.941C23.9835%20105.104%2023.9835%2085.9123%2035.8206%2074.0753L76.4853%2033.4106C77.4378%2032.458%2078.9823%2032.458%2079.9348%2033.4106L95.5367%2049.0125ZM16.7692%2055.0239L68.7767%203.20102C74.8517%20-1.47374%2083.5989%20-1.02825%2089.1646%204.53753L116.313%2031.6858L143.461%204.53754C149.511%20-1.51251%20159.32%20-1.51252%20165.37%204.53753L215.857%2055.0239C238.216%2077.3827%20238.216%20113.634%20215.857%20135.992L156.797%20195.052C134.438%20217.411%2098.1875%20217.411%2075.8286%20195.052L16.7692%20135.992C-5.58972%20113.634%20-5.58972%2077.3827%2016.7692%2055.0239Z'%20fill='%237145E9'/%3e%3c/svg%3e",H=[{link:"/",label:"Dispatch",icon:I},{link:"/fleet",label:"Fleet",icon:$},{link:"/students",label:"Students",icon:M},{link:"/schools",label:"Schools",icon:z},{link:"/route-planner",label:"Routes",icon:T},{link:"/reports",label:"Reports",icon:E}],d=({isCollapsed:e,toggleNavbar:m})=>{const l=S(),n=F(),[p,u]=g.useState(n.pathname),h=V(`(max-width: ${l.breakpoints.sm}px)`),a=e||(h??!1);g.useEffect(()=>{u(n.pathname)},[n]);const v=()=>{try{f.logout(),f.vezaLogout()}catch{q.show({color:"red",title:"Error",message:"Logout failed"})}},w=H.map(r=>o.jsx(A,{className:"link","data-active":r.link===p||void 0,to:r.link,onClick:()=>{u(r.link)},children:o.jsxs(s,{direction:"row",gap:7,justify:a?"center":"flex-start",align:"center",children:[o.jsx(r.icon,{className:"link-icon",stroke:"1.5",size:"24px"}),o.jsx(O,{order:3,className:"link-text",display:a?"none":"block",children:r.label})]})},r.label));return o.jsx(Z,{theme:l,$isCollapsed:a,children:o.jsxs("nav",{className:"navbar",children:[o.jsxs(s,{flex:1,direction:"column",pl:a?0:t(16),children:[o.jsx(s,{justify:a?"center":"left",children:o.jsx(P,{mt:t(62),mb:t(44),w:a?"35px":"119px",fit:"contain",src:a?W:Q})}),o.jsx(s,{direction:"column",gap:16,children:w})]}),o.jsxs("div",{children:[!a&&o.jsx(_,{text:"Logout",variant:"light",icon:b,iconSize:16,onClick:v}),a&&o.jsx(s,{justify:"center",align:"center",mb:8,children:o.jsx(C,{variant:"light",ariaLabel:"Logout button",icon:b,onClick:v})})]}),!h&&o.jsx(s,{justify:"center",align:"start",mt:10,mb:20,children:o.jsx(C,{variant:"light",icon:a?D:R,ariaLabel:a?"Expand":"Collapse",onClick:m})})]})})};d.__docgenInfo={description:"",methods:[],displayName:"NavbarComponent",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},toggleNavbar:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Le={title:"Components/NavbarComponent",component:d,parameters:{layout:"fullscreen",backgrounds:{default:"light",values:[{name:"light",value:G.colors.gray[0]}]},reactRouter:{routePath:"/"}},tags:["autodocs"],argTypes:{isCollapsed:{description:"Determines if the navbar is collapsed.",control:"boolean",defaultValue:!1},toggleNavbar:{description:"Function to toggle the navbar collapse state.",action:"toggleNavbar"}},args:{isCollapsed:!1,toggleNavbar:()=>console.log("toggle navbar")},decorators:[e=>o.jsx(K,{children:o.jsx("div",{style:{width:"100vw",height:"100vh"},children:o.jsx(e,{})})})]},i={render:e=>{const[m,l]=g.useState(e.isCollapsed),n=()=>{l(p=>!p),e.toggleNavbar()};return o.jsx(d,{...e,isCollapsed:m,toggleNavbar:n})},args:{isCollapsed:!1}},c={render:e=>o.jsx(d,{...e}),args:{isCollapsed:!0}};var x,k,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [isCollapsed, setIsCollapsed] = useState(args.isCollapsed);
    const handleToggleNavbar = () => {
      setIsCollapsed(prevState => !prevState);
      args.toggleNavbar();
    };
    return <NavbarComponent {...args} isCollapsed={isCollapsed} toggleNavbar={handleToggleNavbar} />;
  },
  args: {
    isCollapsed: false
  }
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var j,N,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <NavbarComponent {...args} />,
  args: {
    isCollapsed: true
  }
}`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const je=["DefaultNavbar","CollapsedNavbar"];export{c as CollapsedNavbar,i as DefaultNavbar,je as __namedExportsOrder,Le as default};
