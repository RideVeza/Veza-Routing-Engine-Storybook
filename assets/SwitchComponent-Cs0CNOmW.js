import{j as t}from"./jsx-runtime-CexXSJP5.js";import{d}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as o}from"./theme-DV-fQgRe.js";import{S as l}from"./Switch-DEOlBtZP.js";const m=d.div`
  .switch-track {
    border: none;
  }

  .thumb {
    border: none;
    outline: none;
  }
`,u=({value:r,onChange:a,disabled:e,isRequired:n=!1,variant:s="default"})=>{const c=i=>{e||a(i.currentTarget.checked)};return t.jsx(m,{theme:o,children:t.jsx(l,{checked:r,color:o.colors.primary[5],classNames:{thumb:"thumb",track:"switch-track"},size:s==="default"?"lg":"md",disabled:e,required:n,onChange:c})})};u.__docgenInfo={description:"",methods:[],displayName:"SwitchComponent",props:{isRequired:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};export{u as S};
