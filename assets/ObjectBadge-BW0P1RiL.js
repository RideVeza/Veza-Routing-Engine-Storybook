import{j as o}from"./jsx-runtime-CexXSJP5.js";import{d as i}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as r}from"./theme-DV-fQgRe.js";import{I as a}from"./IconComponent-BLxFDGI_.js";import{F as n}from"./Flex-DfchtKyW.js";import{T as p}from"./Title-NR0nO8_X.js";const s=i.div`
  display: inline-flex;
  flex-direction: column;

  display: inline-flex;

  .pill-content {
    padding: 6px 12px 6px 6px;
    border: 1px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 33px;
    background-color: white;
  }

  .badge-content {
    padding: 6px;
    border: 1px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 8px;
    background-color: white;
  }

  .time-content {
    white-space: nowrap;
    padding: 7px 6px;
    border: 1px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 8px;
    background-color: white;

    width: 76px;
  }

  .license-content {
    padding: 6px 8px;
    border: 1px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 6px;
    background-color: white;
  }
`,l=({value:e,iconName:d,type:t="badge-content"})=>o.jsx(s,{theme:r,children:o.jsxs(n,{gap:6,align:"center",className:t,children:[d&&o.jsx(a,{name:d,size:"16px",color:r.colors.primary[6]}),o.jsx(p,{order:5,size:t==="pill-content"?"16px":"14px",c:t==="time-content"?r.colors.gray[9]:r.colors.gray[6],children:e})]})});l.__docgenInfo={description:"",methods:[],displayName:"ObjectBadge",props:{type:{defaultValue:{value:"'badge-content'",computed:!1},required:!1}}};export{l as O};
