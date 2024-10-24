import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{I as nt}from"./index-L2PmcK6x.js";import{b as it}from"./index-DhrrqPsw.js";import{d as st}from"./styled-components.browser.esm-Dx2qpfAi.js";import{J as rt}from"./JobDetailComponentConfiguration-D31-RUjj.js";import{J as at}from"./JobDetailComponentInformation-7v3rkIJk.js";import{J as ct}from"./JobDetailComponentRoutes-BIRGorsy.js";import{g as lt}from"./jobs-c2izYkBu.js";import{a as A}from"./jobs-DhiDD4xb.js";import{t as M}from"./theme-DV-fQgRe.js";import{g as dt}from"./routes-Ss6aDr-t.js";import{C as z}from"./ContentHeader-BeoyYu9o.js";import{L as O}from"./List-Cksbtp4j.js";import{a as mt}from"./index-D317oxB0.js";import{g as ut}from"./get-size-ZIjN6hcg.js";import{c as k}from"./create-vars-resolver-BkjTnGuP.js";import{a as ft,r as pt}from"./default-theme-BUmQqxa3.js";import{f as G,u as U,d as Q,B as y,b as ht}from"./factory-Cmy58O58.js";import{C as bt}from"./CloseButton-Bf40-Csk.js";import{L as gt}from"./Loader-I3UIFO-P.js";import{a as xt,u as yt,h as jt,n as w}from"./notifications.store-DxWvW9mD.js";import{g as vt,O as Ct}from"./OptionalPortal-Dz0ZbQ5R.js";import{a as Nt,b as St}from"./use-reduced-motion-BEzOJ-bM.js";import{T,a as Tt}from"./TransitionGroup-CWbEP0vl.js";const wt=o=>(o+1)%1e6;function Jt(){const[,o]=c.useReducer(wt,0);return o}var W={root:"m_a513464",icon:"m_a4ceffb",loader:"m_b0920b15",body:"m_a49ed24",title:"m_3feedf16",description:"m_3d733a3a",closeButton:"m_919a4d88"};const Rt={withCloseButton:!0},Dt=k((o,{radius:n,color:i})=>({root:{"--notification-radius":n===void 0?void 0:ut(n),"--notification-color":i?ft(i,o):void 0}})),L=G((o,n)=>{const i=U("Notification",Rt,o),{className:e,color:u,radius:m,loading:s,withCloseButton:f,withBorder:a,title:r,icon:l,children:p,onClose:g,closeButtonProps:d,classNames:C,style:F,styles:j,unstyled:R,variant:B,vars:x,mod:E,...N}=i,h=Q({name:"Notification",classes:W,props:i,className:e,style:F,classNames:C,styles:j,unstyled:R,vars:x,varsResolver:Dt});return t.jsxs(y,{...h("root"),mod:[{"data-with-icon":!!l||s,"data-with-border":a},E],ref:n,variant:B,...N,role:"alert",children:[l&&!s&&t.jsx("div",{...h("icon"),children:l}),s&&t.jsx(gt,{size:28,color:u,...h("loader")}),t.jsxs("div",{...h("body"),children:[r&&t.jsx("div",{...h("title"),children:r}),t.jsx(y,{...h("description"),mod:{"data-with-title":!!r},children:p})]}),f&&t.jsx(bt,{iconSize:16,color:"gray",...d,unstyled:R,onClick:g,...h("closeButton")})]})});L.classes=W;L.displayName="@mantine/core/Notification";const V=["bottom-center","bottom-left","bottom-right","top-center","top-left","top-right"];function Bt(o,n){return o.reduce((i,e)=>(i[e.position||n].push(e),i),V.reduce((i,e)=>(i[e]=[],i),{}))}const X={left:"translateX(-100%)",right:"translateX(100%)","top-center":"translateY(-100%)","bottom-center":"translateY(100%)"},Et={left:"translateX(0)",right:"translateX(0)","top-center":"translateY(0)","bottom-center":"translateY(0)"};function It({state:o,maxHeight:n,position:i,transitionDuration:e}){const[u,m]=i.split("-"),s=m==="center"?`${u}-center`:m,f={opacity:0,maxHeight:n,transform:X[s],transitionDuration:`${e}ms, ${e}ms, ${e}ms`,transitionTimingFunction:"cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",transitionProperty:"opacity, transform, max-height"},a={opacity:1,transform:Et[s]},r={opacity:0,maxHeight:0,transform:X[s]};return{...f,...{entering:a,entered:a,exiting:r,exited:r}[o]}}function Pt(o,n){return typeof n=="number"?n:n===!1||o===!1?!1:o}const Z=c.forwardRef(({data:o,onHide:n,autoClose:i,...e},u)=>{const{autoClose:m,message:s,...f}=o,a=Pt(i,o.autoClose),r=c.useRef(),l=()=>window.clearTimeout(r.current),p=()=>{n(o.id),l()},g=()=>{typeof a=="number"&&(r.current=window.setTimeout(p,a))};return c.useEffect(()=>{var d;(d=o.onOpen)==null||d.call(o,o)},[]),c.useEffect(()=>(g(),l),[a]),t.jsx(L,{...e,...f,onClose:p,ref:u,onMouseEnter:l,onMouseLeave:g,children:s})});Z.displayName="@mantine/notifications/NotificationContainer";var q={root:"m_b37d9ac7",notification:"m_5ed0edd0"};const _t=Tt,Mt={position:"bottom-right",autoClose:4e3,transitionDuration:250,containerWidth:440,notificationMaxHeight:200,limit:5,zIndex:vt("overlay"),store:xt,withinPortal:!0},Lt=k((o,{zIndex:n,containerWidth:i})=>({root:{"--notifications-z-index":n==null?void 0:n.toString(),"--notifications-container-width":pt(i)}})),b=G((o,n)=>{const i=U("Notifications",Mt,o),{classNames:e,className:u,style:m,styles:s,unstyled:f,vars:a,position:r,autoClose:l,transitionDuration:p,containerWidth:g,notificationMaxHeight:d,limit:C,zIndex:F,store:j,portalProps:R,withinPortal:B,...x}=i,E=ht(),N=yt(j),h=Jt(),K=Nt(),I=c.useRef({}),H=c.useRef(0),$=(E.respectReducedMotion?K:!1)?1:p,v=Q({name:"Notifications",classes:q,props:i,className:u,style:m,classNames:e,styles:s,unstyled:f,vars:a,varsResolver:Lt});c.useEffect(()=>{j==null||j.updateState(D=>({...D,limit:C||5,defaultPosition:r}))},[C,r]),St(()=>{N.notifications.length>H.current&&setTimeout(()=>h(),0),H.current=N.notifications.length},[N.notifications]);const tt=Bt(N.notifications,r),S=V.reduce((D,P)=>(D[P]=tt[P].map(({style:ot,...J})=>t.jsx(_t,{timeout:$,onEnter:()=>I.current[J.id].offsetHeight,nodeRef:{current:I.current[J.id]},children:et=>t.jsx(Z,{ref:_=>{I.current[J.id]=_},data:J,onHide:_=>jt(_,j),autoClose:l,...v("notification",{style:{...It({state:et,position:P,transitionDuration:$,maxHeight:d}),...ot}})})},J.id)),D),{});return t.jsxs(Ct,{withinPortal:B,...R,children:[t.jsx(y,{...v("root"),"data-position":"top-center",ref:n,...x,children:t.jsx(T,{children:S["top-center"]})}),t.jsx(y,{...v("root"),"data-position":"top-left",...x,children:t.jsx(T,{children:S["top-left"]})}),t.jsx(y,{...v("root"),"data-position":"top-right",...x,children:t.jsx(T,{children:S["top-right"]})}),t.jsx(y,{...v("root"),"data-position":"bottom-right",...x,children:t.jsx(T,{children:S["bottom-right"]})}),t.jsx(y,{...v("root"),"data-position":"bottom-left",...x,children:t.jsx(T,{children:S["bottom-left"]})}),t.jsx(y,{...v("root"),"data-position":"bottom-center",...x,children:t.jsx(T,{children:S["bottom-center"]})})]})});b.classes=q;b.displayName="@mantine/notifications/Notifications";b.show=w.show;b.hide=w.hide;b.update=w.update;b.clean=w.clean;b.cleanQueue=w.cleanQueue;b.updateState=w.updateState;const Y=st.div`
  width: 100%;
  height: 100%;

  flex: 1;

  .form-section {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`,Ft=({focusedJobId:o})=>{const[n,i]=c.useState("Information"),[e,u]=c.useState(null),[m,s]=c.useState(!0),[f,a]=c.useState(""),r=mt();function l(g){r(`/job/details/${g}`)}c.useEffect(()=>{if(s(!0),u(null),o===null)return;(async()=>{a("Insufficient data to generate routes");try{if(!o)throw new Error("Job ID not defined");const d=await lt(o);d.status===A.FAILED&&d.errors.length>0&&a(d.errors[0]);const C=dt(d);u(C),s(!1)}catch{b.show({color:"red",title:"Error",message:"Failed to fetch job details"}),s(!1)}})(),s(!1)},[o]);const p=[{label:"Information",content:t.jsx(at,{formattedJobData:e,isLoading:m})},{label:"Routes",content:t.jsx(ct,{formattedJobData:e,isLoading:m})},{label:"Configuration",content:t.jsx(rt,{formattedJobData:e,isLoading:m})}];return m||!e?t.jsx(Y,{theme:M,children:t.jsxs("div",{className:"form-section",children:[t.jsx(z,{primaryTitle:"-",secondaryTitle:"-",isLoading:!0}),t.jsx(O,{tabs:p,activeTab:n,setActiveTab:i})]})}):t.jsx(Y,{theme:M,children:e&&t.jsxs("div",{className:"form-section",children:[t.jsx(z,{primaryTitle:e.jobName,secondaryTitle:e.shortHandJobName,primaryButtonIcon:it,primaryButtonText:"Open",onPrimaryClick:()=>l(e.jobId),secondaryButtonIcon:nt,secondaryButtonText:"Archive",buttonsFontSize:"12px",buttonsIconSize:12,buttonsPadding:"6px 8px",secondaryButtonColor:M.colors.red[5],onSecondaryClick:()=>console.log("Not implemented"),shouldInvertButtons:!0}),t.jsx(O,{tabs:p,activeTab:n,setActiveTab:i,showAlert:e.status===A.FAILED,alertTitle:"Routes Generation Job Failed",alertText:f})]})})};Ft.__docgenInfo={description:"",methods:[],displayName:"JobDetailComponent"};export{Ft as J};