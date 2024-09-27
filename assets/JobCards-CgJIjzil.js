import{f as _,u as z,j as t,B as W,z as pt,a as ht,c as xt,g as ft,e as Ct,l as Pt,h as vt}from"./factory-BYdAncit.js";import{r as I}from"./index-BP8_t0zE.js";import{G as Y}from"./iconBase-tVazycLF.js";import{G as E}from"./index-B98Pt2jl.js";import{I as jt}from"./index-DHgPtaHi.js";import{k as yt,f as bt,b as St}from"./index-CQDxHXwo.js";import{c as It}from"./index-DWJGBGB2.js";import{d as q}from"./styled-components.browser.esm-BzjHiQVu.js";import{g as Lt}from"./jobs-DYeHrbtM.js";import{J}from"./jobs-CSoPBwjn.js";import{t as u}from"./theme-CBi4L4pb.js";import{f as G}from"./date-DtSnoD3t.js";import{B as V}from"./Button-BmZH4clo.js";import{I as U}from"./Input-E5qBdqnX.js";import{a as Nt}from"./index-CdXB_vz_.js";import{S as zt}from"./Skeleton-DfZH9prR.js";import{F as b}from"./Flex-DB8_OMZA.js";import{T as N}from"./Title-BF1HBFC0.js";import{S as wt}from"./ScrollArea-CIJALQu3.js";import{C as Mt}from"./Card-sx5hwF33.js";import{B as Rt}from"./Badge-CW8H_bYz.js";import{G as Jt}from"./Group-DAYBdM2T.js";import{U as Ft}from"./UnstyledButton-BYy9qxQd.js";import{c as Dt}from"./create-safe-context-cIFFkskc.js";import{g as _t,a as kt}from"./get-auto-contrast-value-DNc6ItoQ.js";import{u as Bt}from"./use-uncontrolled-D1uLaDoI.js";function F(o,e){return n=>{o==null||o(n),e==null||e(n)}}function S(o,e){const n=e-o+1;return Array.from({length:n},(s,a)=>a+o)}const D="dots";function Tt({total:o,siblings:e=1,boundaries:n=1,page:s,initialPage:a=1,onChange:i}){const r=Math.max(Math.trunc(o),0),[d,m]=Bt({value:s,onChange:i,defaultValue:a,finalValue:a}),g=j=>{j<=0?m(1):j>r?m(r):m(j)},p=()=>g(d+1),l=()=>g(d-1),h=()=>g(1),C=()=>g(r);return{range:I.useMemo(()=>{if(e*2+3+n*2>=r)return S(1,r);const c=Math.max(d-e,n),x=Math.min(d+e,r-n),y=c>n+2,v=x<r-(n+1);if(!y&&v){const L=e*2+n+2;return[...S(1,L),D,...S(r-(n-1),r)]}if(y&&!v){const L=n+1+2*e;return[...S(1,n),D,...S(r-L,r)]}return[...S(1,n),D,...S(c,x),D,...S(r-n+1,r)]},[r,e,d]),active:d,setPage:g,next:p,previous:l,first:h,last:C}}const[$t,k]=Dt("Pagination.Root component was not found in tree");var w={root:"m_4addd315",control:"m_326d024a",dots:"m_4ad7767d"};const At={withPadding:!0},M=_((o,e)=>{const n=z("PaginationControl",At,o),{classNames:s,className:a,style:i,styles:r,vars:d,active:m,disabled:g,withPadding:p,mod:l,...h}=n,C=k(),P=g||C.disabled;return t.jsx(Ft,{ref:e,disabled:P,mod:[{active:m,disabled:P,"with-padding":p},l],...C.getStyles("control",{className:a,style:i,classNames:s,styles:r,active:!P}),...h})});M.classes=w;M.displayName="@mantine/core/PaginationControl";function R({style:o,children:e,path:n,...s}){return t.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)",...o},...s,children:t.jsx("path",{d:n,fill:"currentColor"})})}const Ot=o=>t.jsx(R,{...o,path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"}),Et=o=>t.jsx(R,{...o,path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"}),Gt=o=>t.jsx(R,{...o,path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"}),Vt=o=>t.jsx(R,{...o,path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"}),Ut=o=>t.jsx(R,{...o,path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"}),Zt={icon:Ut},B=_((o,e)=>{const n=z("PaginationDots",Zt,o),{classNames:s,className:a,style:i,styles:r,vars:d,icon:m,...g}=n,p=k(),l=m;return t.jsx(W,{ref:e,...p.getStyles("dots",{className:a,style:i,styles:r,classNames:s}),...g,children:t.jsx(l,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})});B.classes=w;B.displayName="@mantine/core/PaginationDots";function T({icon:o,name:e,action:n,type:s}){const a={icon:o},i=I.forwardRef((r,d)=>{const{icon:m,...g}=z(e,a,r),p=m,l=k(),h=s==="next"?l.active===l.total:l.active===1;return t.jsx(M,{disabled:l.disabled||h,ref:d,onClick:l[n],withPadding:!1,...g,children:t.jsx(p,{className:"mantine-rotate-rtl",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})});return i.displayName=`@mantine/core/${e}`,pt(i)}const K=T({icon:Ot,name:"PaginationNext",action:"onNext",type:"next"}),Q=T({icon:Et,name:"PaginationPrevious",action:"onPrevious",type:"previous"}),X=T({icon:Gt,name:"PaginationFirst",action:"onFirst",type:"previous"}),H=T({icon:Vt,name:"PaginationLast",action:"onLast",type:"next"});function A({dotsIcon:o}){const e=k(),n=e.range.map((s,a)=>{var i;return s==="dots"?t.jsx(B,{icon:o},a):t.jsx(M,{active:s===e.active,"aria-current":s===e.active?"page":void 0,onClick:()=>e.onChange(s),disabled:e.disabled,...(i=e.getItemProps)==null?void 0:i.call(e,s),children:s},a)});return t.jsx(t.Fragment,{children:n})}A.displayName="@mantine/core/PaginationItems";const Wt={siblings:1,boundaries:1},Yt=xt((o,{size:e,radius:n,color:s,autoContrast:a})=>({root:{"--pagination-control-radius":n===void 0?void 0:ft(n),"--pagination-control-size":Ct(e,"pagination-control-size"),"--pagination-control-fz":Pt(e),"--pagination-active-bg":s?vt(s,o):void 0,"--pagination-active-color":_t(a,o)?kt({color:s,theme:o,autoContrast:a}):void 0}})),$=_((o,e)=>{const n=z("PaginationRoot",Wt,o),{classNames:s,className:a,style:i,styles:r,unstyled:d,vars:m,total:g,value:p,defaultValue:l,onChange:h,disabled:C,siblings:P,boundaries:j,color:c,radius:x,onNextPage:y,onPreviousPage:v,onFirstPage:L,onLastPage:tt,getItemProps:ot,autoContrast:eo,...et}=n,O=ht({name:"Pagination",classes:w,props:n,className:a,style:i,classNames:s,styles:r,unstyled:d,vars:m,varsResolver:Yt}),{range:nt,setPage:st,next:at,previous:it,active:rt,first:ct,last:lt}=Tt({page:p,initialPage:l,onChange:h,total:g,siblings:P,boundaries:j}),dt=F(y,at),gt=F(v,it),mt=F(L,ct),ut=F(tt,lt);return t.jsx($t,{value:{total:g,range:nt,active:rt,disabled:C,getItemProps:ot,onChange:st,onNext:dt,onPrevious:gt,onFirst:mt,onLast:ut,getStyles:O},children:t.jsx(W,{ref:e,...O("root"),...et})})});$.classes=w;$.displayName="@mantine/core/PaginationRoot";const qt={withControls:!0,siblings:1,boundaries:1,gap:8},f=_((o,e)=>{const n=z("Pagination",qt,o),{withEdges:s,withControls:a,getControlProps:i,nextIcon:r,previousIcon:d,lastIcon:m,firstIcon:g,dotsIcon:p,total:l,gap:h,hideWithOnePage:C,...P}=n;return l<=0||C&&l===1?null:t.jsx($,{ref:e,total:l,...P,children:t.jsxs(Jt,{gap:h,children:[s&&t.jsx(X,{icon:g,...i==null?void 0:i("first")}),a&&t.jsx(Q,{icon:d,...i==null?void 0:i("previous")}),t.jsx(A,{dotsIcon:p}),a&&t.jsx(K,{icon:r,...i==null?void 0:i("next")}),s&&t.jsx(H,{icon:m,...i==null?void 0:i("last")})]})})});f.classes=w;f.displayName="@mantine/core/Pagination";f.Root=$;f.Control=M;f.Dots=B;f.First=X;f.Last=H;f.Next=K;f.Previous=Q;f.Items=A;function Kt(o){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"},child:[]},{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"},child:[]}]})(o)}function Qt(o){return Y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"},child:[]}]})(o)}const Z=q.div`
  padding: 0 24px 20px 24px;
  margin-top: 24px;
`,Xt=q.div`
  cursor: pointer;

  .header-job-card {
    border-bottom: 0.5px solid ${o=>o.theme.colors.gray[2]};
  }

  .student-badge {
    border: 1px solid ${o=>o.theme.colors.gray[2]};
    border-radius: 6px;
  }

  .loading-container {
    height: 59vh;
  }
`,Ht={[J.DRAFT]:{textColor:u.colors.gray[5],backgroundColor:u.colors.gray[0],badgeText:"Draft",icon:It},[J.IN_PROGRESS]:{textColor:u.colors.primary[6],backgroundColor:u.colors.primary[0],badgeText:"Pending",icon:yt},[J.COMPLETED]:{textColor:u.colors.green[5],backgroundColor:u.colors.green[0],badgeText:"Ready for Review",icon:bt},[J.FAILED]:{textColor:u.colors.red[5],backgroundColor:u.colors.red[0],badgeText:"Job Failed",icon:Kt}},to=({setFocusedJobId:o,focusedJobId:e})=>{const[n,s]=I.useState(""),[a,i]=I.useState(),[r,d]=I.useState(!0),[m,g]=I.useState(!1),[p,l]=I.useState(1),h=Nt();function C(c){h(`/job/details/${c}`)}const P=c=>{o(c)};I.useEffect(()=>{o(null),(async()=>{try{d(!0);const x=await Lt(p),y=x.data[0].id;o(y),i(x),d(!1)}catch{g(!0),d(!1)}})()},[p,o]);const j=c=>{s(c)};return r||m?t.jsxs(Z,{children:[t.jsx(U,{disabled:!0,placeholder:"Search Jobs",icon:E,value:n,onChange:j}),t.jsxs("div",{className:"loading-container",children:[r&&Array.from({length:4}).map((c,x)=>t.jsx(zt,{height:100,radius:"md",mt:15},x)),m&&!r&&t.jsx(b,{justify:"center",mt:20,children:t.jsx(N,{order:5,children:"Failed to fetch jobs"})})]})]}):t.jsxs(Z,{children:[t.jsx(U,{placeholder:"Search Jobs",icon:E,value:n,onChange:j}),t.jsx("p",{children:n}),t.jsxs(wt,{h:"59vh",children:[a==null?void 0:a.data.map(c=>{const x=oo(c),y=c.status,v=Ht[y];return t.jsx(Xt,{theme:u,children:t.jsx(Mt,{onClick:()=>P(c.id),shadow:"sm",mt:"md",radius:"md",withBorder:!0,style:{border:e===c.id?`1px solid ${u.colors.gray[5]}`:`1px solid ${u.colors.gray[2]}`},children:t.jsxs(b,{direction:"column",children:[t.jsxs(b,{align:"center",justify:"space-between",mb:12,pb:8,className:"header-job-card",children:[t.jsxs(b,{direction:"column",gap:5,justify:"space-between",children:[t.jsx(Rt,{p:5,styles:{root:{textTransform:"none"}},color:v.backgroundColor,children:t.jsxs(b,{gap:4,align:"center",children:[t.jsx(v.icon,{color:v.textColor,size:12}),t.jsx(N,{order:5,size:12,c:v.textColor,children:v.badgeText})]})}),t.jsx(N,{order:3,children:`${G(c.created_at)}, ${c.job_name??"Job Name"}`})]}),t.jsxs(b,{gap:8,children:[t.jsx(V,{text:"Archive",variant:"outline",padding:"6px 8px",color:u.colors.red[5],fontSize:"12px",isIconOnLeft:!0,icon:jt,iconSize:12,onClick:()=>console.log("Not implemented")}),t.jsx(V,{text:"Open",variant:"filled",padding:"6px 8px",fontSize:"12px",isIconOnLeft:!0,icon:St,iconSize:12,onClick:()=>C(c.id)})]})]}),t.jsx("div",{className:"card-footer",children:t.jsxs(b,{justify:"space-between",children:[t.jsx("div",{className:"student-badge",children:t.jsxs(b,{gap:4,align:"center",p:"4px 6px",children:[t.jsx(Qt,{size:12,color:u.colors.primary[6]}),t.jsx(N,{order:5,size:12,c:u.colors.gray[6],children:`${x} students`})]})}),t.jsx(N,{order:5,size:12,c:u.colors.gray[5],children:`By User, ${G(c.created_at)}`})]})})]})})},c.id)}),a&&t.jsx(f,{color:u.colors.primary[5],total:a.totalPages,value:a.currentPage,onChange:l,mt:"sm"})]})]})};function oo(o){return!o.input||!o.input.students||!o.input.students.length?0:o.input.students.length}to.__docgenInfo={description:"",methods:[],displayName:"JobCards"};export{to as J,Ht as b};
