import{f as P,u as C,a as U,j as i,B as N,c as H,g as W,b as Z,h as K}from"./factory-BYdAncit.js";import{b as O}from"./index-DWJGBGB2.js";import{d as ee}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as te}from"./theme-CBi4L4pb.js";import"./index-BP8_t0zE.js";import{g as ae,a as oe}from"./get-auto-contrast-value-DNc6ItoQ.js";import{c as re}from"./create-safe-context-cIFFkskc.js";import{u as se}from"./DirectionProvider-Bt7M7wKl.js";import{U as le}from"./UnstyledButton-BYy9qxQd.js";import{u as F}from"./use-id-Cc9noPIB.js";import{u as ne}from"./use-uncontrolled-D1uLaDoI.js";import{T as E}from"./Title-BF1HBFC0.js";import{C as ie}from"./CloseButton-Bstq3kTa.js";function q(e,r){return t=>{if(typeof t!="string"||t.trim().length===0)throw new Error(r);return`${e}-${t}`}}function A(e,r){let t=e;for(;(t=t.parentElement)&&!t.matches(r););return t}function ce(e,r,t){for(let a=e-1;a>=0;a-=1)if(!r[a].disabled)return a;if(t){for(let a=r.length-1;a>-1;a-=1)if(!r[a].disabled)return a}return e}function de(e,r,t){for(let a=e+1;a<r.length;a+=1)if(!r[a].disabled)return a;if(t){for(let a=0;a<r.length;a+=1)if(!r[a].disabled)return a}return e}function ue(e,r,t){return A(e,t)===A(r,t)}function pe({parentSelector:e,siblingSelector:r,onKeyDown:t,loop:a=!0,activateOnFocus:p=!1,dir:d="rtl",orientation:u}){return o=>{var g;t==null||t(o);const s=Array.from(((g=A(o.currentTarget,e))==null?void 0:g.querySelectorAll(r))||[]).filter(h=>ue(o.currentTarget,h,e)),f=s.findIndex(h=>o.currentTarget===h),c=de(f,s,a),b=ce(f,s,a),l=d==="rtl"?b:c,v=d==="rtl"?c:b;switch(o.key){case"ArrowRight":{u==="horizontal"&&(o.stopPropagation(),o.preventDefault(),s[l].focus(),p&&s[l].click());break}case"ArrowLeft":{u==="horizontal"&&(o.stopPropagation(),o.preventDefault(),s[v].focus(),p&&s[v].click());break}case"ArrowUp":{u==="vertical"&&(o.stopPropagation(),o.preventDefault(),s[b].focus(),p&&s[b].click());break}case"ArrowDown":{u==="vertical"&&(o.stopPropagation(),o.preventDefault(),s[c].focus(),p&&s[c].click());break}case"Home":{o.stopPropagation(),o.preventDefault(),!s[0].disabled&&s[0].focus();break}case"End":{o.stopPropagation(),o.preventDefault();const h=s.length-1;!s[h].disabled&&s[h].focus();break}}}}var G={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};const be={},me=H((e,{radius:r,color:t,variant:a,autoContrast:p})=>{const d=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:a||"light",autoContrast:p});return{root:{"--alert-radius":r===void 0?void 0:W(r),"--alert-bg":t||a?d.background:void 0,"--alert-color":d.color,"--alert-bd":t||a?d.border:void 0}}}),B=P((e,r)=>{const t=C("Alert",be,e),{classNames:a,className:p,style:d,styles:u,unstyled:o,vars:s,radius:f,color:c,title:b,children:l,id:v,icon:g,withCloseButton:h,onClose:_,closeButtonLabel:$,variant:T,autoContrast:k,...n}=t,m=U({name:"Alert",classes:G,props:t,className:p,style:d,classNames:a,styles:u,unstyled:o,vars:s,varsResolver:me}),j=F(v),x=b&&`${j}-title`||void 0,w=`${j}-body`;return i.jsx(N,{id:j,...m("root",{variant:T}),variant:T,ref:r,...n,role:"alert","aria-describedby":w,"aria-labelledby":x,children:i.jsxs("div",{...m("wrapper"),children:[g&&i.jsx("div",{...m("icon"),children:g}),i.jsxs("div",{...m("body"),children:[b&&i.jsx("div",{...m("title"),"data-with-close-button":h||void 0,children:i.jsx("span",{id:x,...m("label"),children:b})}),l&&i.jsx("div",{id:w,...m("message"),"data-variant":T,children:l})]}),h&&i.jsx(ie,{...m("closeButton"),onClick:_,variant:"transparent",size:16,iconSize:16,"aria-label":$,unstyled:o})]})})});B.classes=G;B.displayName="@mantine/core/Alert";const[fe,L]=re("Tabs component was not found in the tree");var S={root:"m_89d60db1","list--default":"m_576c9d4",list:"m_89d33d6d",panel:"m_b0c91715",tab:"m_4ec4dce6",tabSection:"m_fc420b1f","tab--default":"m_539e827b","list--outline":"m_6772fbd5","tab--outline":"m_b59ab47c","tab--pills":"m_c3381914"};const he={},R=P((e,r)=>{const t=C("TabsList",he,e),{children:a,className:p,grow:d,justify:u,classNames:o,styles:s,style:f,mod:c,...b}=t,l=L();return i.jsx(N,{...b,...l.getStyles("list",{className:p,style:f,classNames:o,styles:s,props:t,variant:l.variant}),ref:r,role:"tablist",variant:l.variant,mod:[{grow:d,orientation:l.orientation,placement:l.orientation==="vertical"&&l.placement,inverted:l.inverted},c],"aria-orientation":l.orientation,__vars:{"--tabs-justify":u},children:a})});R.classes=S;R.displayName="@mantine/core/TabsList";const ve={},z=P((e,r)=>{const t=C("TabsPanel",ve,e),{children:a,className:p,value:d,classNames:u,styles:o,style:s,mod:f,keepMounted:c,...b}=t,l=L(),v=l.value===d,g=l.keepMounted||c||v?a:null;return i.jsx(N,{...b,...l.getStyles("panel",{className:p,classNames:u,styles:o,style:[s,v?void 0:{display:"none"}],props:t}),ref:r,mod:[{orientation:l.orientation},f],role:"tabpanel",id:l.getPanelId(d),"aria-labelledby":l.getTabId(d),children:g})});z.classes=S;z.displayName="@mantine/core/TabsPanel";const ge={},D=P((e,r)=>{const t=C("TabsTab",ge,e),{className:a,children:p,rightSection:d,leftSection:u,value:o,onClick:s,onKeyDown:f,disabled:c,color:b,style:l,classNames:v,styles:g,vars:h,mod:_,...$}=t,T=Z(),{dir:k}=se(),n=L(),m=o===n.value,j=w=>{n.onChange(n.allowTabDeactivation&&o===n.value?null:o),s==null||s(w)},x={classNames:v,styles:g,props:t};return i.jsxs(le,{...$,...n.getStyles("tab",{className:a,style:l,variant:n.variant,...x}),disabled:c,unstyled:n.unstyled,variant:n.variant,mod:[{active:m,disabled:c,orientation:n.orientation,inverted:n.inverted,placement:n.orientation==="vertical"&&n.placement},_],ref:r,role:"tab",id:n.getTabId(o),"aria-selected":m,tabIndex:m||n.value===null?0:-1,"aria-controls":n.getPanelId(o),onClick:j,__vars:{"--tabs-color":b?K(b,T):void 0},onKeyDown:pe({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:n.activateTabWithKeyboard,loop:n.loop,orientation:n.orientation||"horizontal",dir:k,onKeyDown:f}),children:[u&&i.jsx("span",{...n.getStyles("tabSection",x),"data-position":"left",children:u}),p&&i.jsx("span",{...n.getStyles("tabLabel",x),children:p}),d&&i.jsx("span",{...n.getStyles("tabSection",x),"data-position":"right",children:d})]})});D.classes=S;D.displayName="@mantine/core/TabsTab";const M="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",xe={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},ye=H((e,{radius:r,color:t,autoContrast:a})=>({root:{"--tabs-radius":W(r),"--tabs-color":K(t,e),"--tabs-text-color":ae(a,e)?oe({color:t,theme:e,autoContrast:a}):void 0}})),y=P((e,r)=>{const t=C("Tabs",xe,e),{defaultValue:a,value:p,onChange:d,orientation:u,children:o,loop:s,id:f,activateTabWithKeyboard:c,allowTabDeactivation:b,variant:l,color:v,radius:g,inverted:h,placement:_,keepMounted:$,classNames:T,styles:k,unstyled:n,className:m,style:j,vars:x,autoContrast:w,mod:J,...Q}=t,I=F(f),[X,Y]=ne({value:p,defaultValue:a,finalValue:null,onChange:d}),V=U({name:"Tabs",props:t,classes:S,className:m,style:j,classNames:T,styles:k,unstyled:n,vars:x,varsResolver:ye});return i.jsx(fe,{value:{placement:_,value:X,orientation:u,id:I,loop:s,activateTabWithKeyboard:c,getTabId:q(`${I}-tab`,M),getPanelId:q(`${I}-panel`,M),onChange:Y,allowTabDeactivation:b,variant:l,color:v,radius:g,inverted:h,keepMounted:$,unstyled:n,getStyles:V},children:i.jsx(N,{ref:r,id:I,variant:l,mod:[{orientation:u,inverted:u==="horizontal"&&h,placement:u==="vertical"&&_},J],...V("root"),...Q,children:o})})});y.classes=S;y.displayName="@mantine/core/Tabs";y.Tab=D;y.Panel=z;y.List=R;const Te=ee.div`
  background-color: white;
  border-radius: ${e=>e.$borderRadius??"0 0 20px 20px"};
  padding-top: 20px;

  .tabs-list {
    border-bottom: ${e=>e.$hasBorderBottom?`solid 1px ${e.theme.colors.gray[2]}`:"none"};

    &::before {
      display: none;
    }
  }

  .panel {
    font-weight: bold;
  }

  .tab {
    color: ${e=>e.theme.colors.gray[3]};
    padding: 0 0 8px 24px;
    font-weight: 600;
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
`,je=({tabs:e,activeTab:r,setActiveTab:t,showAlert:a=!1,alertText:p="",alertTitle:d="",borderRadius:u,hasBorderBottom:o=!0})=>{const s=c=>{c&&t(c)},f=e.map(c=>i.jsx(y.Tab,{value:c.label,children:i.jsx(E,{order:3,children:c.label})},c.label));return i.jsx(Te,{theme:te,$borderRadius:u,$hasBorderBottom:o,children:i.jsxs(y,{value:r,onChange:s,color:"transparent",visibleFrom:"sm",classNames:{list:"tabs-list",tab:"tab",panel:"panel"},children:[i.jsx(y.List,{children:f}),a&&i.jsx("div",{className:"alert-banner",children:i.jsx(B,{classNames:{root:"root",label:"label",icon:"icon"},variant:"light",radius:"6px",title:d,icon:i.jsx(O,{size:24}),children:i.jsx(E,{order:6,children:p})})}),e.map(c=>i.jsx(y.Panel,{value:c.label,children:c.content},c.label))]})})};je.__docgenInfo={description:"",methods:[],displayName:"ListComponent",props:{showAlert:{defaultValue:{value:"false",computed:!1},required:!1},alertText:{defaultValue:{value:"''",computed:!1},required:!1},alertTitle:{defaultValue:{value:"''",computed:!1},required:!1},hasBorderBottom:{defaultValue:{value:"true",computed:!1},required:!1}}};export{je as L};
