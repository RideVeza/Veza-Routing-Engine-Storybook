import{j as e}from"./factory-BYdAncit.js";import{a as C,I as $}from"./index-oL_zBGcM.js";import{d as b}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as c}from"./theme-CBi4L4pb.js";import{B as p}from"./Button-BmZH4clo.js";import{F as t}from"./Flex-DB8_OMZA.js";import{T as m}from"./Title-BF1HBFC0.js";import{S as z}from"./Skeleton-DfZH9prR.js";import{G as E}from"./Group-DAYBdM2T.js";const N=b.div`
  width: 100%;

  .main-section {
    background-color: white;
    border-radius: 20px 20px 0 0;
    height: 72px;
    border-bottom: ${a=>a.$hasBorderBottom?`0.5px solid ${a.theme.colors.gray[2]}`:"none"};
  }

  .secondary-title {
    color: ${a=>a.theme.colors.gray[4]};
    letter-spacing: 1px;
  }
`,T=({primaryTitle:a,secondaryTitle:l,renderHeaderButtonComponent:r,renderHeaderButtonTab:o,activeTab:x,onSecondaryClick:s,onPrimaryClick:i,shouldInvertTitles:d=!1,primaryButtonText:h="Save",secondaryButtonText:v="Exit",shouldInvertButtons:g=!1,isLoading:u=!1,primaryButtonIcon:j,secondaryButtonIcon:V,secondaryButtonColor:q=c.colors.primary[5],buttonsFontSize:n="14px",buttonsIconSize:f=14,buttonsPadding:B="4px 8px",primaryButtonVariant:y="filled",headerAlign:S="flex-start",hasBorderBottom:I=!1})=>{const w=!o||x===o;return e.jsx(N,{theme:c,$shouldInvertTitles:d,$hasBorderBottom:I,children:e.jsx("div",{className:"main-section",children:e.jsxs(t,{direction:"row",justify:"space-between",align:S,p:"20px 24px 16px 24px",children:[!u&&e.jsxs(t,{direction:d?"column-reverse":"column",gap:4,align:"flex-start",children:[l&&e.jsx(m,{order:5,className:"secondary-title",children:l}),e.jsx(m,{order:2,children:a})]}),u&&e.jsx(z,{height:20,width:"40%",radius:"lg"}),e.jsxs(t,{align:"center",gap:8,direction:g?"row-reverse":"row",children:[w&&r&&e.jsx(E,{children:r()}),i&&e.jsx(p,{text:h,variant:y,isIconOnLeft:!0,fontSize:n,iconSize:f,icon:j??C,onClick:i}),s&&e.jsx(p,{text:v,color:q,variant:"outline",isIconOnLeft:!0,fontSize:n,iconSize:f,padding:B,icon:V??$,onClick:s})]})]})})})};T.__docgenInfo={description:"",methods:[],displayName:"ContentHeader",props:{shouldInvertTitles:{defaultValue:{value:"false",computed:!1},required:!1},primaryButtonText:{defaultValue:{value:"'Save'",computed:!1},required:!1},secondaryButtonText:{defaultValue:{value:"'Exit'",computed:!1},required:!1},shouldInvertButtons:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},secondaryButtonColor:{defaultValue:{value:"theme.colors!.primary[5]",computed:!0},required:!1},buttonsFontSize:{defaultValue:{value:"'14px'",computed:!1},required:!1},buttonsIconSize:{defaultValue:{value:"14",computed:!1},required:!1},buttonsPadding:{defaultValue:{value:"'4px 8px'",computed:!1},required:!1},primaryButtonVariant:{defaultValue:{value:"'filled'",computed:!1},required:!1},headerAlign:{defaultValue:{value:"'flex-start'",computed:!1},required:!1},hasBorderBottom:{defaultValue:{value:"false",computed:!1},required:!1}}};export{T as C};
