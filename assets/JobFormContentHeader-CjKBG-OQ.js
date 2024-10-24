import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r}from"./index-BP8_t0zE.js";import{G as C}from"./iconBase-tVazycLF.js";import{G as k}from"./index-B98Pt2jl.js";import{d as I}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as F}from"./theme-DV-fQgRe.js";import{B as p}from"./Button-DgKJQOcJ.js";import{I as G}from"./Input-B6p2Evf3.js";import{P as S}from"./Popover-w4mprIVE.js";import{G as f}from"./Group-uPXshQyq.js";import{T as u}from"./Title-NR0nO8_X.js";function P(t){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}const w=I.div`
  .main-header-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-bottom: solid 0.5px #cccad0;
    background-color: #ffffff;
    padding: 16px;
  }

  .buttons-header {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }

  .title-header {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
`,J=({title:t,shouldRenderInput:m=!0,renderHeaderButtonComponent:s,buttonText:n,buttonAction:a,itemsCount:i,onCancel:l,isDisabled:h=!1,hoverContent:d})=>{const[x,j]=r.useState(""),[g,o]=r.useState(!1),c=r.useRef(null),v=b=>{j(b)},y=()=>{a&&a()};return e.jsxs(w,{children:[e.jsxs("div",{className:"main-header-section",children:[e.jsxs(f,{className:"title-header",children:[e.jsx(u,{order:2,children:t}),typeof i=="number"&&e.jsx(u,{order:5,fw:500,c:F.colors.gray[6],children:`${i} added`})]}),e.jsxs("div",{className:"buttons-header",children:[s&&e.jsx(f,{children:s()}),m&&e.jsx(G,{placeholder:"Search",icon:k,value:x,onChange:v}),n&&e.jsx("div",{ref:c,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:e.jsx(p,{text:n,variant:"light",isDisabled:h,isIconOnLeft:!0,isFullWidth:!1,icon:P,onClick:y})}),l&&e.jsx(p,{text:"Cancel",variant:"outline",onClick:l})]})]}),d&&e.jsx(S,{isOpened:g,onClose:()=>o(!1),ref:c,position:"bottom-end",popoverContent:d})]})};J.__docgenInfo={description:"",methods:[],displayName:"JobFormContentHeader",props:{shouldRenderInput:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{P as F,J};
