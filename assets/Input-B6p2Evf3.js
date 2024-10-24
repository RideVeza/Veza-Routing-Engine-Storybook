import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as v}from"./index-BP8_t0zE.js";import{G as C}from"./index-B98Pt2jl.js";import{b as j}from"./index-L2PmcK6x.js";import{d as k}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as u}from"./theme-DV-fQgRe.js";import{I as q}from"./Input-2PvRR_UE.js";import{F as S}from"./Flex-DfchtKyW.js";const V=k.div`
  .input-component-container {
    background-color: white;
    border: 1px solid ${e=>e.theme.colors.gray[2]};

    caret-color: ${e=>e.theme.colors.primary[5]};

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

  .preview-input {
    border: none;
    cursor: default;

    &:disabled {
      background-color: transparent;
      color: ${e=>e.theme.colors.gray[9]};
      opacity: 1;
    }
  }
`,$=({placeholder:e,value:t,onChange:a,icon:l,disabled:p,isPreview:s=!1,isRequired:m=!1,variant:f="filled",RightSectionIcon:h=j,rightSectionIconColor:g=u.colors.gray[3],isSearchInput:i=!1})=>{const[n,c]=v.useState(!i),d=s?"preview-input":"input-component-container",r=s||p,x=I=>{const b=I.currentTarget.value;a(b)},y=()=>{n||c(!0)};return o.jsx(V,{theme:u,$className:d,children:n?o.jsx(q,{placeholder:r?"":e,value:t,variant:f,classNames:{input:d},onChange:x,rightSectionPointerEvents:"all",radius:10,disabled:r,required:m,leftSection:l?o.jsx(l,{size:15,style:{cursor:"pointer"},onClick:i?()=>c(!1):void 0}):null,rightSection:!r&&o.jsx(h,{color:g,onClick:()=>{a("")},style:{display:t?void 0:"none",cursor:"pointer"}})}):o.jsx(S,{align:"center",style:{cursor:"pointer",backgroundColor:"white",padding:"8px",borderRadius:"8px",width:"32px",height:"32px"},children:o.jsx(C,{size:15,onClick:y})})})};$.__docgenInfo={description:"",methods:[],displayName:"InputComponent",props:{isPreview:{defaultValue:{value:"false",computed:!1},required:!1},isRequired:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},RightSectionIcon:{defaultValue:{value:"IoIosCloseCircle",computed:!0},required:!1},rightSectionIconColor:{defaultValue:{value:"theme.colors!.gray[3]",computed:!0},required:!1},isSearchInput:{defaultValue:{value:"false",computed:!1},required:!1}}};export{$ as I};
