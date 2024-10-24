import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as E}from"./index-BP8_t0zE.js";import{d as ee}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as w}from"./theme-DV-fQgRe.js";import{I as S}from"./IconComponent-BLxFDGI_.js";import{O as oe}from"./ObjectBadge-BW0P1RiL.js";import{r as te}from"./default-theme-BUmQqxa3.js";import{c as re,g as U}from"./create-scoped-keydown-handler-C7O3t3U_.js";import{g as ne}from"./get-size-ZIjN6hcg.js";import{c as ae}from"./create-vars-resolver-BkjTnGuP.js";import{f as R,u as $,b as se,B as C,d as ie,k as ce}from"./factory-Cmy58O58.js";import{c as G}from"./create-safe-context-DdvLfAHk.js";import{A as K}from"./AccordionChevron-BAXzvIVP.js";import{U as le}from"./UnstyledButton-Bp_jImnG.js";import{g as de}from"./get-style-object-DUJZA7T_.js";import{r as he}from"./index-DJkmxc1E.js";import{b as pe,a as me}from"./use-reduced-motion-BEzOJ-bM.js";import{m as ue}from"./use-merged-ref-DIizHiiB.js";import{u as ge}from"./use-id-B6kcI9zl.js";import{u as fe}from"./use-uncontrolled-D1uLaDoI.js";import{F as A}from"./Flex-DfchtKyW.js";import{T as _}from"./Title-NR0nO8_X.js";function xe(e){if(!e||typeof e=="string")return 0;const s=e/36;return Math.round((4+15*s**.25+s/5)*10)}function z(e){return e!=null&&e.current?e.current.scrollHeight:"auto"}const I=typeof window<"u"&&window.requestAnimationFrame;function be({transitionDuration:e,transitionTimingFunction:s="ease",onTransitionEnd:n=()=>{},opened:i}){const h=E.useRef(null),l=0,t={display:"none",height:0,overflow:"hidden"},[m,u]=E.useState(i?{}:t),d=c=>{he.flushSync(()=>u(c))},a=c=>{d(p=>({...p,...c}))};function x(c){const p=e||xe(c);return{transition:`height ${p}ms ${s}, opacity ${p}ms ${s}`}}pe(()=>{typeof I=="function"&&I(i?()=>{a({willChange:"height",display:"block",overflow:"hidden"}),I(()=>{const c=z(h);a({...x(c),height:c})})}:()=>{const c=z(h);a({...x(c),willChange:"height",height:c}),I(()=>a({height:l,overflow:"hidden"}))})},[i]);const y=c=>{if(!(c.target!==h.current||c.propertyName!=="height"))if(i){const p=z(h);p===m.height?d({}):a({height:p}),n()}else m.height===l&&(d(t),n())};function f({style:c={},refKey:p="ref",...r}={}){const j=r[p];return{"aria-hidden":!i,...r,[p]:ue(h,j),onTransitionEnd:y,style:{boxSizing:"border-box",...c,...m}}}return f}const ve={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},L=R((e,s)=>{const{children:n,in:i,transitionDuration:h,transitionTimingFunction:l,style:t,onTransitionEnd:m,animateOpacity:u,...d}=$("Collapse",ve,e),a=se(),x=me(),f=(a.respectReducedMotion?x:!1)?0:h,c=be({opened:i,transitionDuration:f,transitionTimingFunction:l,onTransitionEnd:m});return f===0?i?o.jsx(C,{...d,children:n}):null:o.jsx(C,{...c({style:{opacity:i||!u?1:0,transition:u?`opacity ${f}ms ${l}`:"none",...de(t,a)},ref:s,...d}),children:n})});L.displayName="@mantine/core/Collapse";const[ye,T]=G("Accordion component was not found in the tree"),[je,q]=G("Accordion.Item component was not found in the tree");var P={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};const we={},O=R((e,s)=>{const{classNames:n,className:i,style:h,styles:l,vars:t,chevron:m,icon:u,onClick:d,onKeyDown:a,children:x,disabled:y,mod:f,...c}=$("AccordionControl",we,e),{value:p}=q(),r=T(),j=r.isItemActive(p),B=typeof r.order=="number",D=`h${r.order}`,N=o.jsxs(le,{...c,...r.getStyles("control",{className:i,classNames:n,style:h,styles:l,variant:r.variant}),unstyled:r.unstyled,mod:["accordion-control",{active:j,"chevron-position":r.chevronPosition,disabled:y},f],ref:s,onClick:k=>{d==null||d(k),r.onChange(p)},type:"button",disabled:y,"aria-expanded":j,"aria-controls":r.getRegionId(p),id:r.getControlId(p),onKeyDown:re({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:r.loop,orientation:"vertical",onKeyDown:a}),children:[o.jsx(C,{component:"span",mod:{rotate:!r.disableChevronRotation&&j,position:r.chevronPosition},...r.getStyles("chevron",{classNames:n,styles:l}),children:m||r.chevron}),o.jsx("span",{...r.getStyles("label",{classNames:n,styles:l}),children:x}),u&&o.jsx(C,{component:"span",mod:{"chevron-position":r.chevronPosition},...r.getStyles("icon",{classNames:n,styles:l}),children:u})]});return B?o.jsx(D,{...r.getStyles("itemTitle",{classNames:n,styles:l}),children:N}):N});O.displayName="@mantine/core/AccordionControl";O.classes=P;const Se={},F=R((e,s)=>{const{classNames:n,className:i,style:h,styles:l,vars:t,value:m,mod:u,...d}=$("AccordionItem",Se,e),a=T();return o.jsx(je,{value:{value:m},children:o.jsx(C,{ref:s,mod:[{active:a.isItemActive(m)},u],...a.getStyles("item",{className:i,classNames:n,styles:l,style:h,variant:a.variant}),...d})})});F.displayName="@mantine/core/AccordionItem";F.classes=P;const Ae={},M=R((e,s)=>{const{classNames:n,className:i,style:h,styles:l,vars:t,children:m,...u}=$("AccordionPanel",Ae,e),{value:d}=q(),a=T();return o.jsx(L,{ref:s,...a.getStyles("panel",{className:i,classNames:n,style:h,styles:l}),...u,in:a.isItemActive(d),transitionDuration:a.transitionDuration??200,role:"region",id:a.getRegionId(d),"aria-labelledby":a.getControlId(d),children:o.jsx("div",{...a.getStyles("content",{classNames:n,styles:l}),children:m})})});M.displayName="@mantine/core/AccordionPanel";M.classes=P;const Ce={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:o.jsx(K,{})},Ie=ae((e,{transitionDuration:s,chevronSize:n,radius:i})=>({root:{"--accordion-transition-duration":s===void 0?void 0:`${s}ms`,"--accordion-chevron-size":n===void 0?void 0:te(n),"--accordion-radius":i===void 0?void 0:ne(i)}}));function g(e){const s=$("Accordion",Ce,e),{classNames:n,className:i,style:h,styles:l,unstyled:t,vars:m,children:u,multiple:d,value:a,defaultValue:x,onChange:y,id:f,loop:c,transitionDuration:p,disableChevronRotation:r,chevronPosition:j,chevronSize:B,order:D,chevron:N,variant:k,radius:ke,...J}=s,H=ge(f),[b,Q]=fe({value:a,defaultValue:x,finalValue:d?[]:null,onChange:y}),V=v=>Array.isArray(b)?b.includes(v):v===b,X=v=>{const Y=Array.isArray(b)?b.includes(v)?b.filter(Z=>Z!==v):[...b,v]:v===b?null:v;Q(Y)},W=ie({name:"Accordion",classes:P,props:s,className:i,style:h,classNames:n,styles:l,unstyled:t,vars:m,varsResolver:Ie});return o.jsx(ye,{value:{isItemActive:V,onChange:X,getControlId:U(`${H}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:U(`${H}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:p,disableChevronRotation:r,chevronPosition:j,order:D,chevron:N,loop:c,getStyles:W,variant:k,unstyled:t},children:o.jsx(C,{...W("root"),id:H,...J,variant:k,"data-accordion":!0,children:u})})}const $e=e=>e;g.extend=$e;g.withProps=ce(g);g.classes=P;g.displayName="@mantine/core/Accordion";g.Item=F;g.Panel=M;g.Control=O;g.Chevron=K;const Pe=ee.div`
  .step-label-title,
  .step-label-title-error {
    white-space: nowrap;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    max-width: 350px;

    height: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 32px;
      height: 100%;
      pointer-events: none;
    }
  }

  .step-label-title {
    &::after {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        white 100%
      );
      transition: background 0.4s ease 0.4s;
    }
  }

  .step-label-title-error {
    &::after {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        ${e=>e.theme.colors.red[0]} 100%
      );
      transition: background 0.4s ease 0.4s;
    }
  }

  .mantine-Accordion-item {
    margin: 0;
    margin-bottom: 8px;
    border: none;
  }

  .custom-chevron {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 0;
    width: 24px;
    margin-right: 4px;

    transform: rotate(-90deg);
    transition: transform 0.3s ease;
  }

  .mantine-Accordion-item[data-active='true'] .custom-chevron {
    transform: rotate(0deg);
  }

  .accordion-control {
    border: 1px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 8px;
    height: 44px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 12px;

    &:hover {
      background-color: #ececec;

      .schedule-header-buttons {
        display: flex;
      }

      .step-label-title::after {
        background: linear-gradient(to right, rgba(236, 236, 236, 0), #ececec);
        transition: background 0.3s ease 0.3s;
      }
    }
  }

  .mantine-Accordion-item[data-active='true'] .accordion-control {
    background-color: ${e=>e.theme.colors.gray[0]};
    border-radius: 8px 8px 0 0;

    .step-label-title::after {
      background: linear-gradient(
        to right,
        rgba(236, 236, 236, 0),
        ${e=>e.theme.colors.gray[0]}
      );
    }
  }

  .schedule-header-buttons {
    display: none;
    gap: 12px;
    flex-shrink: 0;
  }

  // Error style
  .accordion-control-error {
    border: 1px solid ${e=>e.theme.colors.red[2]};
    border-radius: 8px;
    height: 44px;
    background-color: ${e=>e.theme.colors.red[0]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 12px;

    &:hover {
      background-color: #e7e3e2;

      .schedule-header-buttons {
        display: flex;
      }

      .step-label-title-error::after {
        background: linear-gradient(to right, rgba(236, 236, 236, 0), #e7e3e2);
        transition: background 0.3s ease 0.3s;
      }
    }
  }

  .mantine-Accordion-item[data-active='true'] .accordion-control-error {
    background-color: ${e=>e.theme.colors.red[0]};
    border-radius: 8px 8px 0 0;

    .step-label-title-error::after {
      background: linear-gradient(
        to right,
        rgba(236, 236, 236, 0),
        ${e=>e.theme.colors.red[0]}
      );
    }
  }

  .mantine-Accordion-item .mantine-Accordion-panel {
    border-left: 1px solid ${e=>e.theme.colors.gray[2]};
    border-right: 1px solid ${e=>e.theme.colors.gray[2]};
    border-bottom: 1px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 0 0 8px 8px;
  }
`,Ne=({stopsData:e,isEditMode:s})=>{const[n,i]=E.useState(null),h=t=>{i(t)},l=e.map(t=>o.jsxs(g.Item,{value:t.label.value,children:[o.jsx(g.Control,{className:t.hasError?"accordion-control-error":"accordion-control",children:o.jsxs(A,{justify:"space-between",align:"center",gap:8,style:{width:"100%"},children:[o.jsxs(A,{align:"center",gap:12,style:{flexGrow:1,minWidth:0},children:[o.jsx(oe,{value:t.hour,type:"time-content"}),!t.label.isSchool&&!t.label.isStudentStop&&o.jsx(_,{order:5,fw:500,className:t.hasError?"step-label-title-error":"step-label-title",children:t.label.value}),(t.label.isSchool||t.label.isStudentStop)&&o.jsxs(A,{align:"center",gap:6,style:{flexGrow:1,minWidth:0},children:[o.jsxs(A,{align:"center",gap:4,children:[o.jsx(S,{name:t.label.isSchool?"GraduationCap":"Bus",size:"14px",color:w.colors.primary[6]}),o.jsx(_,{order:5,children:t.label.stopNumber??0})]}),o.jsx("div",{style:{whiteSpace:"nowrap"},children:o.jsx(S,{name:"Dot",size:"8px",color:w.colors.gray[2]})}),o.jsx(_,{order:5,fw:500,className:t.hasError?"step-label-title-error":"step-label-title",children:t.label.value})]})]}),o.jsxs(o.Fragment,{children:[s&&o.jsxs(A,{align:"center",gap:12,className:"schedule-header-buttons",children:[o.jsx(S,{size:"20px",name:"Delete",color:w.colors.gray[6]}),o.jsx(S,{size:"20px",name:"Drag",color:w.colors.gray[6]})]}),!s&&t.label.isStudentStop&&o.jsxs(A,{align:"center",gap:6,className:"schedule-header-buttons",children:[t.hasPickup&&o.jsx(S,{size:"20px",name:"Login",color:w.colors.gray[6]}),t.hasDropoff&&o.jsx(S,{size:"20px",name:"Logout",color:w.colors.gray[6]})]})]})]})}),o.jsx(g.Panel,{children:o.jsx(_,{order:4,children:"Step content"})})]},t.position));return o.jsx(Pe,{theme:w,children:o.jsx(g,{variant:"separated",chevronPosition:"left",radius:8,value:n,onChange:h,classNames:{chevron:"custom-chevron"},chevron:o.jsx(S,{name:"ArrowDropDown",size:"24px",activeVariant:!0}),children:l})})};Ne.__docgenInfo={description:"",methods:[],displayName:"ScheduleStepHeader"};export{Ne as S};
