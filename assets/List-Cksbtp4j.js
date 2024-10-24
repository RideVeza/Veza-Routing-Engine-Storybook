import{j as a}from"./jsx-runtime-CexXSJP5.js";import{b as X}from"./index-DWJGBGB2.js";import{d as Y}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as Z}from"./theme-DV-fQgRe.js";import"./index-BP8_t0zE.js";import{c as ee,g as D}from"./create-scoped-keydown-handler-C7O3t3U_.js";import{g as M}from"./get-size-ZIjN6hcg.js";import{c as F}from"./create-vars-resolver-BkjTnGuP.js";import{a as U}from"./default-theme-BUmQqxa3.js";import{g as te}from"./get-contrast-color-CPKee8Lw.js";import{g as ae}from"./get-auto-contrast-value-Da6zqqWm.js";import{f as w,u as P,d as W,B as I,b as oe}from"./factory-Cmy58O58.js";import{c as se}from"./create-safe-context-DdvLfAHk.js";import{u as re}from"./DirectionProvider-DOfDrEPm.js";import{U as le}from"./UnstyledButton-Bp_jImnG.js";import{u as E}from"./use-id-B6kcI9zl.js";import{u as ne}from"./use-uncontrolled-D1uLaDoI.js";import{T as K}from"./Title-NR0nO8_X.js";import{C as ie}from"./CloseButton-Bf40-Csk.js";var H={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};const de={},ce=F((e,{radius:d,color:s,variant:r,autoContrast:m})=>{const n=e.variantColorResolver({color:s||e.primaryColor,theme:e,variant:r||"light",autoContrast:m});return{root:{"--alert-radius":d===void 0?void 0:M(d),"--alert-bg":s||r?n.background:void 0,"--alert-color":n.color,"--alert-bd":s||r?n.border:void 0}}}),R=w((e,d)=>{const s=P("Alert",de,e),{classNames:r,className:m,style:n,styles:c,unstyled:i,vars:u,radius:f,color:v,title:b,children:o,id:h,icon:l,withCloseButton:$,onClose:j,closeButtonLabel:_,variant:y,autoContrast:N,...t}=s,p=W({name:"Alert",classes:H,props:s,className:m,style:n,classNames:r,styles:c,unstyled:i,vars:u,varsResolver:ce}),T=E(h),g=b&&`${T}-title`||void 0,C=`${T}-body`;return a.jsx(I,{id:T,...p("root",{variant:y}),variant:y,ref:d,...t,role:"alert","aria-describedby":C,"aria-labelledby":g,children:a.jsxs("div",{...p("wrapper"),children:[l&&a.jsx("div",{...p("icon"),children:l}),a.jsxs("div",{...p("body"),children:[b&&a.jsx("div",{...p("title"),"data-with-close-button":$||void 0,children:a.jsx("span",{id:g,...p("label"),children:b})}),o&&a.jsx("div",{id:C,...p("message"),"data-variant":y,children:o})]}),$&&a.jsx(ie,{...p("closeButton"),onClick:j,variant:"transparent",size:16,iconSize:16,"aria-label":_,unstyled:i})]})})});R.classes=H;R.displayName="@mantine/core/Alert";const[me,L]=se("Tabs component was not found in the tree");var S={root:"m_89d60db1","list--default":"m_576c9d4",list:"m_89d33d6d",panel:"m_b0c91715",tab:"m_4ec4dce6",tabSection:"m_fc420b1f","tab--default":"m_539e827b","list--outline":"m_6772fbd5","tab--outline":"m_b59ab47c","tab--pills":"m_c3381914"};const be={},V=w((e,d)=>{const s=P("TabsList",be,e),{children:r,className:m,grow:n,justify:c,classNames:i,styles:u,style:f,mod:v,...b}=s,o=L();return a.jsx(I,{...b,...o.getStyles("list",{className:m,style:f,classNames:i,styles:u,props:s,variant:o.variant}),ref:d,role:"tablist",variant:o.variant,mod:[{grow:n,orientation:o.orientation,placement:o.orientation==="vertical"&&o.placement,inverted:o.inverted},v],"aria-orientation":o.orientation,__vars:{"--tabs-justify":c},children:r})});V.classes=S;V.displayName="@mantine/core/TabsList";const pe={},k=w((e,d)=>{const s=P("TabsPanel",pe,e),{children:r,className:m,value:n,classNames:c,styles:i,style:u,mod:f,keepMounted:v,...b}=s,o=L(),h=o.value===n,l=o.keepMounted||v||h?r:null;return a.jsx(I,{...b,...o.getStyles("panel",{className:m,classNames:c,styles:i,style:[u,h?void 0:{display:"none"}],props:s}),ref:d,mod:[{orientation:o.orientation},f],role:"tabpanel",id:o.getPanelId(n),"aria-labelledby":o.getTabId(n),children:l})});k.classes=S;k.displayName="@mantine/core/TabsPanel";const ue={},A=w((e,d)=>{const s=P("TabsTab",ue,e),{className:r,children:m,rightSection:n,leftSection:c,value:i,onClick:u,onKeyDown:f,disabled:v,color:b,style:o,classNames:h,styles:l,vars:$,mod:j,..._}=s,y=oe(),{dir:N}=re(),t=L(),p=i===t.value,T=C=>{t.onChange(t.allowTabDeactivation&&i===t.value?null:i),u==null||u(C)},g={classNames:h,styles:l,props:s};return a.jsxs(le,{..._,...t.getStyles("tab",{className:r,style:o,variant:t.variant,...g}),disabled:v,unstyled:t.unstyled,variant:t.variant,mod:[{active:p,disabled:v,orientation:t.orientation,inverted:t.inverted,placement:t.orientation==="vertical"&&t.placement},j],ref:d,role:"tab",id:t.getTabId(i),"aria-selected":p,tabIndex:p||t.value===null?0:-1,"aria-controls":t.getPanelId(i),onClick:T,__vars:{"--tabs-color":b?U(b,y):void 0},onKeyDown:ee({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:t.activateTabWithKeyboard,loop:t.loop,orientation:t.orientation||"horizontal",dir:N,onKeyDown:f}),children:[c&&a.jsx("span",{...t.getStyles("tabSection",g),"data-position":"left",children:c}),m&&a.jsx("span",{...t.getStyles("tabLabel",g),children:m}),n&&a.jsx("span",{...t.getStyles("tabSection",g),"data-position":"right",children:n})]})});A.classes=S;A.displayName="@mantine/core/TabsTab";const q="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",ve={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},fe=F((e,{radius:d,color:s,autoContrast:r})=>({root:{"--tabs-radius":M(d),"--tabs-color":U(s,e),"--tabs-text-color":ae(r,e)?te({color:s,theme:e,autoContrast:r}):void 0}})),x=w((e,d)=>{const s=P("Tabs",ve,e),{defaultValue:r,value:m,onChange:n,orientation:c,children:i,loop:u,id:f,activateTabWithKeyboard:v,allowTabDeactivation:b,variant:o,color:h,radius:l,inverted:$,placement:j,keepMounted:_,classNames:y,styles:N,unstyled:t,className:p,style:T,vars:g,autoContrast:C,mod:O,...G}=s,B=E(f),[J,Q]=ne({value:m,defaultValue:r,finalValue:null,onChange:n}),z=W({name:"Tabs",props:s,classes:S,className:p,style:T,classNames:y,styles:N,unstyled:t,vars:g,varsResolver:fe});return a.jsx(me,{value:{placement:j,value:J,orientation:c,id:B,loop:u,activateTabWithKeyboard:v,getTabId:D(`${B}-tab`,q),getPanelId:D(`${B}-panel`,q),onChange:Q,allowTabDeactivation:b,variant:o,color:h,radius:l,inverted:$,keepMounted:_,unstyled:t,getStyles:z},children:a.jsx(I,{ref:d,id:B,variant:o,mod:[{orientation:c,inverted:c==="horizontal"&&$,placement:c==="vertical"&&j},O],...z("root"),...G,children:i})})});x.classes=S;x.displayName="@mantine/core/Tabs";x.Tab=A;x.Panel=k;x.List=V;const he=Y.div`
  background-color: white;
  border-radius: ${e=>e.$borderRadius??"0 0 20px 20px"};
  padding-top: ${e=>e.$paddingTop??"20px"};
  height: 100%;

  display: flex;
  flex-direction: column;

  .tabs-container {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
  }

  .tabs-list {
    padding-left: ${e=>e.$tabPadding?e.$color?"8px":"16px":0};

    border-bottom: ${e=>e.$hasBorderBottom?`solid 1px ${e.theme.colors.gray[2]}`:"none"};

    border-left: ${e=>e.$color?`8px solid ${e.$color}`:"none"};

    &::before {
      display: none;
    }
  }

  .panel {
    font-weight: bold;
    height: 100%;
  }

  .tab {
    color: ${e=>e.theme.colors.gray[3]};
    padding: ${e=>e.$tabPadding?e.$tabPadding:"0 0 8px 24px"};
    background-color: transparent;
    position: relative;

    &:hover {
      border: none;
    }

    &[data-active] {
      color: ${e=>e.theme.colors.gray[9]};
    }
  }

  .alert-banner {
    padding: 16px 24px 0 24px;
    border-radius: 6px;
  }

  .root {
    border: 0.5px solid ${e=>e.theme.colors.red[2]};
    background-color: ${e=>e.theme.colors.red[0]};
  }

  .label {
    font-family: ${e=>e.theme.fontFamily};
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: ${e=>e.theme.colors.gray[9]};
  }

  .icon {
    color: ${e=>e.theme.colors.red[5]};
  }
`,ge=({tabs:e,activeTab:d,setActiveTab:s,showAlert:r=!1,alertText:m="",alertTitle:n="",borderRadius:c,hasBorderBottom:i=!0,paddingTop:u,color:f,isContextWindowHeader:v=!1,tabPadding:b})=>{const o=l=>{l&&s(l)},h=e.map(l=>a.jsx(x.Tab,{value:l.label,children:a.jsx(K,{order:v?5:3,children:l.label})},l.label));return a.jsx(he,{theme:Z,$borderRadius:c,$hasBorderBottom:i,$paddingTop:u,$color:f,$tabPadding:b,children:a.jsxs(x,{value:d,onChange:o,color:"transparent",visibleFrom:"sm",classNames:{list:"tabs-list",tab:"tab",panel:"panel",root:"tabs-container"},children:[a.jsx(x.List,{children:h}),r&&a.jsx("div",{className:"alert-banner",children:a.jsx(R,{classNames:{root:"root",label:"label",icon:"icon"},variant:"light",radius:"6px",title:n,icon:a.jsx(X,{size:24}),children:a.jsx(K,{order:6,children:m})})}),e.map(l=>a.jsx(x.Panel,{value:l.label,children:l.content},l.label))]})})};ge.__docgenInfo={description:"",methods:[],displayName:"ListComponent",props:{showAlert:{defaultValue:{value:"false",computed:!1},required:!1},alertText:{defaultValue:{value:"''",computed:!1},required:!1},alertTitle:{defaultValue:{value:"''",computed:!1},required:!1},hasBorderBottom:{defaultValue:{value:"true",computed:!1},required:!1},isContextWindowHeader:{defaultValue:{value:"false",computed:!1},required:!1}}};export{ge as L};
