import{b as l,j as e}from"./factory-BYdAncit.js";import{d as m}from"./styled-components.browser.esm-BzjHiQVu.js";import{A as d}from"./ActionIcon-CI9f4PEW.js";const u=m.div`
  .custom-action-icon:hover {
    background-color: ${o=>o.theme.colors.gray[1]};
  }
`,p=({icon:o,ariaLabel:c,variant:s,size:i=40,onClick:n,color:r="white",iconColor:a})=>{const t=l();return e.jsx(u,{theme:t,children:e.jsx(d,{variant:s,"aria-label":c,size:i,radius:12,onClick:n,color:r,className:"custom-action-icon",children:e.jsx(o,{style:{width:"60%",height:"60%"},color:a??t.colors.primary[5]})})})};p.__docgenInfo={description:"",methods:[],displayName:"ActionIconComponent",props:{size:{defaultValue:{value:"40",computed:!1},required:!1},color:{defaultValue:{value:"'white'",computed:!1},required:!1}}};export{p as A};
