import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as j}from"./index-BB_o3gze.js";import{a as g}from"./index-DUW3t7VM.js";import{M as w,f as C,g as b}from"./index-DhrrqPsw.js";import{d as v}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as a}from"./theme-DV-fQgRe.js";import{A as I}from"./ActionIcon-g5D0V-R_.js";import{B as t}from"./Button-DgKJQOcJ.js";import{I as l}from"./IconComponent-BLxFDGI_.js";import{I as $}from"./IndicationsBadge-DCr2nWIo.js";import{L as y}from"./List-Cksbtp4j.js";import{C as R}from"./Card-D3lXULz8.js";import{F as i}from"./Flex-DfchtKyW.js";import{I as B}from"./Image-CyM-z9cL.js";import{T as H}from"./Title-NR0nO8_X.js";const L=v.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  .context-window-header-list {
    flex-grow: 1;
  }

  .header-card {
    border-radius: 0;
    border-left: ${r=>r.$color?`8px solid ${r.$color}`:"none"};
    padding: ${r=>r.$isRouteWindowHeader?"16px 16px 8px 8px":"16px 16px 8px"};
  }

  .header-picture {
    border: 0.5px solid ${r=>r.theme.colors.gray[3]};
    border-radius: 12px;
  }
`,W=({data:r,color:n,onHeaderIconClick:x,onSave:d,onDelete:p,tabs:m,activeTab:h,setActiveTab:f,isEditMode:c,setIsEditMode:s})=>{const o=typeof n=="string",u=()=>{d?d():s(!1)};return e.jsxs(L,{theme:a,$color:n,$isRouteWindowHeader:o,children:[e.jsx(R,{className:"header-card",children:e.jsxs(i,{direction:"column",gap:16,children:[e.jsxs(i,{justify:"space-between",align:"center",className:"context-window-header-top",children:[o&&e.jsxs(i,{align:"center",children:[e.jsx(l,{name:"ArrowLeft",size:"16px"}),e.jsx(t,{text:"All Routes",variant:"transparent",padding:"9px 8px 9px 4px",onClick:x})]}),!o&&e.jsx(j,{size:20}),e.jsxs(i,{gap:8,align:"center",className:"context-window-header-top-buttons",children:[c&&e.jsxs(e.Fragment,{children:[!o&&e.jsx(t,{text:"Cancel",variant:"transparent",onClick:()=>s(!1)}),o&&e.jsx(I,{ariaLabel:"Delete button",variant:"filled",size:32,radius:"50%",icon:w,iconColor:a.colors.red[5],color:a.colors.red[1],onClick:p}),e.jsx(t,{text:o?"Ready":"Save",icon:o?C:g,isIconOnLeft:!0,onClick:u})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Edit",variant:"light",iconSize:16,icon:b,isIconOnLeft:!0,onClick:()=>s(!0)}),e.jsx(l,{name:"Menu",size:"20px"})]})]})]}),e.jsxs(i,{gap:12,align:"center",children:[r.pictureUrl&&e.jsx(B,{className:"header-picture",src:r.pictureUrl,width:60,height:60}),e.jsxs(i,{direction:"column",gap:2,align:"self-start",children:[r.indications&&e.jsx($,{indications:r.indications}),e.jsx(H,{order:2,children:r.title})]})]})]})}),e.jsx("div",{className:"context-window-header-list",children:e.jsx(y,{tabs:m,activeTab:h,setActiveTab:f,borderRadius:"0 0 0 20px",hasBorderBottom:!0,paddingTop:"0",color:n,isContextWindowHeader:!0,tabPadding:"0 18px 8px 0"})})]})};W.__docgenInfo={description:"",methods:[],displayName:"ContextWindowHeader"};export{W as C};
