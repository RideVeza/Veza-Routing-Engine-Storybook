import{f as T,u as y,a as _,j as a,B as b,c as N,r as C,e as V,l as q,g as D}from"./factory-BYdAncit.js";import{d as U}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as E}from"./theme-CBi4L4pb.js";import"./index-BP8_t0zE.js";import{p as O}from"./polymorphic-factory-BBVriERq.js";import{L as z}from"./Loader-DYJrnaLT.js";import{T as A}from"./Transition-BCGcMdvv.js";import{U as H}from"./UnstyledButton-BYy9qxQd.js";var v={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};const R={orientation:"horizontal"},J=N((e,{borderWidth:l})=>({group:{"--button-border-width":C(l)}})),x=T((e,l)=>{const t=y("ButtonGroup",R,e),{className:i,style:s,classNames:o,styles:d,unstyled:n,orientation:r,vars:u,borderWidth:p,variant:f,mod:h,...j}=y("ButtonGroup",R,e),c=_({name:"ButtonGroup",props:t,classes:v,className:i,style:s,classNames:o,styles:d,unstyled:n,vars:u,varsResolver:J,rootSelector:"group"});return a.jsx(b,{...c("group"),ref:l,variant:f,mod:[{"data-orientation":r},h],role:"group",...j})});x.classes=v;x.displayName="@mantine/core/ButtonGroup";const K={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${C(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},M={},Q=N((e,{radius:l,color:t,gradient:i,variant:s,size:o,justify:d,autoContrast:n})=>{const r=e.variantColorResolver({color:t||e.primaryColor,theme:e,gradient:i,variant:s||"filled",autoContrast:n});return{root:{"--button-justify":d,"--button-height":V(o,"button-height"),"--button-padding-x":V(o,"button-padding-x"),"--button-fz":o!=null&&o.includes("compact")?q(o.replace("compact-","")):q(o),"--button-radius":l===void 0?void 0:D(l),"--button-bg":t||s?r.background:void 0,"--button-hover":t||s?r.hover:void 0,"--button-color":r.color,"--button-bd":t||s?r.border:void 0,"--button-hover-color":t||s?r.hoverColor:void 0}}}),g=O((e,l)=>{const t=y("Button",M,e),{style:i,vars:s,className:o,color:d,disabled:n,children:r,leftSection:u,rightSection:p,fullWidth:f,variant:h,radius:j,loading:c,loaderProps:G,gradient:Z,classNames:P,styles:$,unstyled:B,"data-disabled":S,autoContrast:I,mod:W,...k}=t,m=_({name:"Button",props:t,classes:v,className:o,style:i,classNames:P,styles:$,unstyled:B,vars:s,varsResolver:Q}),w=!!u,F=!!p;return a.jsxs(H,{ref:l,...m("root",{active:!n&&!c&&!S}),unstyled:B,variant:h,disabled:n||c,mod:[{disabled:n||S,loading:c,block:f,"with-left-section":w,"with-right-section":F},W],...k,children:[a.jsx(A,{mounted:!!c,transition:K,duration:150,children:L=>a.jsx(b,{component:"span",...m("loader",{style:L}),"aria-hidden":!0,children:a.jsx(z,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...G})})}),a.jsxs("span",{...m("inner"),children:[u&&a.jsx(b,{component:"span",...m("section"),mod:{position:"left"},children:u}),a.jsx(b,{component:"span",mod:{loading:c},...m("label"),children:r}),p&&a.jsx(b,{component:"span",...m("section"),mod:{position:"right"},children:p})]})]})});g.classes=v;g.displayName="@mantine/core/Button";g.Group=x;const X=U.div`
  display: inline-block;
  border: transparent;
  background: none;
  width: ${e=>e.$isFullWidth?"100%":"auto"};
`,Y=({text:e,onClick:l,icon:t,iconSize:i=15,padding:s="4px 8px",variant:o="filled",isIconOnLeft:d=!1,color:n=E.colors.primary[5],isFullWidth:r=!0,isDisabled:u=!1,isLoading:p=!1,radius:f=25,fontSize:h="14px"})=>a.jsx(X,{$isFullWidth:r,children:a.jsx(g,{styles:{root:{fontSize:h,padding:s}},variant:o,color:n,disabled:u,loading:p,radius:f,loaderProps:{type:"dots"},fullWidth:r,rightSection:t?d?null:a.jsx(t,{size:i}):null,leftSection:t&&d?a.jsx(t,{size:i}):null,onClick:l,children:e})});Y.__docgenInfo={description:"",methods:[],displayName:"ButtonComponent",props:{iconSize:{defaultValue:{value:"15",computed:!1},required:!1},padding:{defaultValue:{value:"'4px 8px'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},isIconOnLeft:{defaultValue:{value:"false",computed:!1},required:!1},color:{defaultValue:{value:"theme.colors!.primary[5]",computed:!0},required:!1},isFullWidth:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},radius:{defaultValue:{value:"25",computed:!1},required:!1},fontSize:{defaultValue:{value:"'14px'",computed:!1},required:!1}}};export{Y as B};