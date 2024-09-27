import{j as o}from"./factory-BYdAncit.js";import{r as I}from"./index-BP8_t0zE.js";import{G as v}from"./index-B98Pt2jl.js";import{b as y}from"./index-DHgPtaHi.js";import{d as k}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as u}from"./theme-CBi4L4pb.js";import{I as j}from"./Input-DkGv-MlU.js";import{F as S}from"./Flex-DB8_OMZA.js";const b=k.div`
  .input-component-container {
    background-color: ${e=>e.$backgroundColor?e.$backgroundColor:e.theme.colors.gray[0]};
    font-size: 16px;

    &:focus {
      border: 1px solid ${e=>e.theme.colors.primary[5]};
    }
  }
`,q=({placeholder:e,value:r,onChange:t,icon:l,disabled:a,isRequired:c=!1,variant:d="filled",RightSectionIcon:p=y,rightSectionIconColor:m=u.colors.gray[3],isSearchInput:s=!1,backgroundColor:f})=>{const[n,i]=I.useState(!s),h=g=>{const C=g.currentTarget.value;t(C)},x=()=>{n||i(!0)};return o.jsx(b,{theme:u,$backgroundColor:f,children:n?o.jsx(j,{placeholder:e,value:r,variant:d,classNames:{input:"input-component-container"},onChange:h,rightSectionPointerEvents:"all",radius:10,disabled:a,required:c,leftSection:l?o.jsx(l,{size:15,style:{cursor:"pointer"},onClick:s?()=>i(!1):void 0}):null,rightSection:!a&&o.jsx(p,{color:m,onClick:()=>{t("")},style:{display:r?void 0:"none",cursor:"pointer"}})}):o.jsx(S,{align:"center",style:{cursor:"pointer",backgroundColor:"white",padding:"8px",borderRadius:"8px",width:"32px",height:"32px"},children:o.jsx(v,{size:15,onClick:x})})})};q.__docgenInfo={description:"",methods:[],displayName:"InputComponent",props:{isRequired:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},RightSectionIcon:{defaultValue:{value:"IoIosCloseCircle",computed:!0},required:!1},rightSectionIconColor:{defaultValue:{value:"theme.colors!.gray[3]",computed:!0},required:!1},isSearchInput:{defaultValue:{value:"false",computed:!1},required:!1}}};export{q as I};
