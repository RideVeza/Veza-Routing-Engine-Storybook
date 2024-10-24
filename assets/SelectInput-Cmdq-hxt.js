import{j as t}from"./jsx-runtime-CexXSJP5.js";import{d as h}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as s}from"./theme-DV-fQgRe.js";import{I as n}from"./IconComponent-BLxFDGI_.js";import{S as x}from"./Select-CgpR6YNG.js";const g=h.div`
  // preview style
  .input-preview-select {
    border: none;

    height: '32px';
    padding: '7px 8px';

    &:hover {
      border: none;
    }

    &:focus {
      border: none;
    }

    &:disabled {
      cursor: default;
      opacity: 1;
      background-color: transparent;
    }
  }

  .section-preview-select {
    display: none;
  }

  // default style
  .input-select-component {
    border: 1px solid ${e=>e.theme.colors.gray[2]};

    height: '32px';
    padding: '7px 8px';

    &:hover {
      border: 1px solid ${e=>e.theme.colors.gray[5]};
    }

    &:focus {
      border: 2px solid ${e=>e.theme.colors.primary[5]};
    }

    &:disabled {
      background-color: ${e=>e.theme.colors.gray[0]};
    }
  }
`,b=({defaultValue:e,optionsData:d,hasSearchIcon:c=!1,rightIconName:r,onChange:i,disabled:p,isPreview:o=!1,width:u="auto"})=>{const a=o?"preview-select":"select-component",m=o||p,f=l=>{l!==null&&i(l)};return t.jsx(g,{theme:s,children:t.jsx(x,{defaultValue:e,radius:8,w:u,variant:"default",disabled:m,onChange:f,leftSection:c&&!o?t.jsx(n,{size:"16px",name:"Search",color:s.colors.gray[5]}):void 0,classNames:{input:`input-${a}`,section:`section-${a}`},rightSection:r&&!o?t.jsx(n,{size:"16px",name:r,color:s.colors.gray[2]}):void 0,data:d})})};b.__docgenInfo={description:"",methods:[],displayName:"SelectInput",props:{hasSearchIcon:{defaultValue:{value:"false",computed:!1},required:!1},isPreview:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};export{b as S};
