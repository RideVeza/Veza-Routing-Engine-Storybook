import{f as P,u as $,a as E,j as o,c as G,g as U,B as A,p as ae,e as ne,h as N,x as Se,r as ce,t as re}from"./factory-BYdAncit.js";import{r as S}from"./index-BP8_t0zE.js";import{b as we}from"./index-D1m89S_o.js";import{d as Re}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as j}from"./theme-CBi4L4pb.js";import{B as _e}from"./Button-BmZH4clo.js";import{P as Ne}from"./Popover-jsiwsZQx.js";import{c as Ie}from"./create-safe-context-cIFFkskc.js";import{S as Pe}from"./ScrollArea-CIJALQu3.js";import{g as le,a as ie}from"./get-auto-contrast-value-DNc6ItoQ.js";import{I as $e,C as de,a as Be,b as ze}from"./CheckIcon-DIBRqQfE.js";import{U as Ae}from"./UnstyledButton-BYy9qxQd.js";import{c as Oe,I as pe}from"./Input-DkGv-MlU.js";import{u as Ee}from"./use-uncontrolled-D1uLaDoI.js";import{u as Ge}from"./use-id-Cc9noPIB.js";import{S as te}from"./Skeleton-DfZH9prR.js";import{F as He}from"./Flex-DB8_OMZA.js";import{T as se}from"./Title-BF1HBFC0.js";const he=S.createContext(null),Ve=he.Provider,ue=()=>S.useContext(he),[qe,De]=Oe();var me={card:"m_26775b0a"};const Fe={withBorder:!0},Le=G((e,{radius:t})=>({card:{"--card-radius":U(t)}})),W=P((e,t)=>{const r=$("CheckboxCard",Fe,e),{classNames:n,className:l,style:i,styles:c,unstyled:a,vars:s,checked:u,mod:h,withBorder:m,value:f,onClick:b,...C}=r,v=E({name:"CheckboxCard",classes:me,props:r,className:l,style:i,classNames:n,styles:c,unstyled:a,vars:s,varsResolver:Le,rootSelector:"card"}),x=ue(),g=typeof u=="boolean"?u:(x==null?void 0:x.value.includes(f||""))||!1;return o.jsx(qe,{value:{checked:g},children:o.jsx(Ae,{ref:t,mod:[{"with-border":m,checked:g},h],...v("card"),...C,role:"checkbox","aria-checked":g,onClick:T=>{b==null||b(T),x==null||x.onChange(f||"")}})})});W.displayName="@mantine/core/CheckboxCard";W.classes=me;const Ue={},K=P((e,t)=>{const{value:r,defaultValue:n,onChange:l,size:i,wrapperProps:c,children:a,readOnly:s,...u}=$("CheckboxGroup",Ue,e),[h,m]=Ee({value:r,defaultValue:n,finalValue:[],onChange:l}),f=b=>{const C=typeof b=="string"?b:b.currentTarget.value;!s&&m(h.includes(C)?h.filter(v=>v!==C):[...h,C])};return o.jsx(Ve,{value:{value:h,onChange:f,size:i},children:o.jsx(pe.Wrapper,{size:i,ref:t,...c,...u,labelElement:"div",__staticSelector:"CheckboxGroup",children:o.jsx($e,{role:"group",children:a})})})});K.classes=pe.Wrapper.classes;K.displayName="@mantine/core/CheckboxGroup";var be={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--outline":"m_76e20374"};const We={icon:de},Ke=G((e,{radius:t,color:r,size:n,iconColor:l,variant:i,autoContrast:c})=>{const a=ae({color:r||e.primaryColor,theme:e}),s=a.isThemeColor&&a.shade===void 0?`var(--mantine-color-${a.color}-outline)`:a.color;return{indicator:{"--checkbox-size":ne(n,"checkbox-size"),"--checkbox-radius":t===void 0?void 0:U(t),"--checkbox-color":i==="outline"?s:N(r,e),"--checkbox-icon-color":l?N(l,e):le(c,e)?ie({color:r,theme:e,autoContrast:c}):void 0}}}),J=P((e,t)=>{const r=$("CheckboxIndicator",We,e),{classNames:n,className:l,style:i,styles:c,unstyled:a,vars:s,icon:u,indeterminate:h,radius:m,color:f,iconColor:b,autoContrast:C,checked:v,mod:x,variant:g,disabled:T,...w}=r,R=u,k=E({name:"CheckboxIndicator",classes:be,props:r,className:l,style:i,classNames:n,styles:c,unstyled:a,vars:s,varsResolver:Ke,rootSelector:"indicator"}),p=De(),y=typeof v=="boolean"||typeof h=="boolean"?v||h:(p==null?void 0:p.checked)||!1;return o.jsx(A,{ref:t,...k("indicator",{variant:g}),variant:g,mod:[{checked:y,disabled:T},x],...w,children:o.jsx(R,{indeterminate:h,...k("icon")})})});J.displayName="@mantine/core/CheckboxIndicator";J.classes=be;var fe={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};const Je={labelPosition:"right",icon:de},Me=G((e,{radius:t,color:r,size:n,iconColor:l,variant:i,autoContrast:c})=>{const a=ae({color:r||e.primaryColor,theme:e}),s=a.isThemeColor&&a.shade===void 0?`var(--mantine-color-${a.color}-outline)`:a.color;return{root:{"--checkbox-size":ne(n,"checkbox-size"),"--checkbox-radius":t===void 0?void 0:U(t),"--checkbox-color":i==="outline"?s:N(r,e),"--checkbox-icon-color":l?N(l,e):le(c,e)?ie({color:r,theme:e,autoContrast:c}):void 0}}}),I=P((e,t)=>{const r=$("Checkbox",Je,e),{classNames:n,className:l,style:i,styles:c,unstyled:a,vars:s,color:u,label:h,id:m,size:f,radius:b,wrapperProps:C,checked:v,labelPosition:x,description:g,error:T,disabled:w,variant:R,indeterminate:k,icon:p,rootRef:y,iconColor:O,onChange:_,autoContrast:X,mod:F,...V}=r,z=ue(),Te=f||(z==null?void 0:z.size),ke=p,q=E({name:"Checkbox",props:r,classes:fe,className:l,style:i,classNames:n,styles:c,unstyled:a,vars:s,varsResolver:Me}),{styleProps:je,rest:Y}=Se(V),Z=Ge(m),ee=z?{checked:z.value.includes(Y.value),onChange:oe=>{z.onChange(oe),_==null||_(oe)}}:{};return o.jsx(Be,{...q("root"),__staticSelector:"Checkbox",__stylesApiProps:r,id:Z,size:Te,labelPosition:x,label:h,description:g,error:T,disabled:w,classNames:n,styles:c,unstyled:a,"data-checked":ee.checked||v||void 0,variant:R,ref:y,mod:F,...je,...C,children:o.jsxs(A,{...q("inner"),mod:{"data-label-position":x},children:[o.jsx(A,{component:"input",id:Z,ref:t,checked:v,disabled:w,mod:{error:!!T,indeterminate:k},...q("input",{focusable:!0,variant:R}),onChange:_,...Y,...ee,type:"checkbox"}),o.jsx(ke,{indeterminate:k,...q("icon")})]})})});I.classes={...fe,...ze};I.displayName="@mantine/core/Checkbox";I.Group=K;I.Indicator=J;I.Card=W;const[Qe,Xe]=Ie("Table component was not found in the tree");var H={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function Ye(e,t){if(!t)return;const r={};return t.columnBorder&&e.withColumnBorders&&(r["data-with-column-border"]=!0),t.rowBorder&&e.withRowBorders&&(r["data-with-row-border"]=!0),t.striped&&e.striped&&(r["data-striped"]=e.striped),t.highlightOnHover&&e.highlightOnHover&&(r["data-hover"]=!0),t.captionSide&&e.captionSide&&(r["data-side"]=e.captionSide),t.stickyHeader&&e.stickyHeader&&(r["data-sticky"]=!0),r}function B(e,t){const r=`Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,n=P((l,i)=>{const c=$(r,{},l),{classNames:a,className:s,style:u,styles:h,...m}=c,f=Xe();return o.jsx(A,{component:e,ref:i,...Ye(f,t),...f.getStyles(e,{className:s,classNames:a,style:u,styles:h,props:c}),...m})});return n.displayName=`@mantine/core/${r}`,n.classes=H,n}const L=B("th",{columnBorder:!0}),xe=B("td",{columnBorder:!0}),D=B("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),ye=B("thead",{stickyHeader:!0}),ve=B("tbody"),Ce=B("tfoot"),ge=B("caption",{captionSide:!0});function M({data:e}){return o.jsxs(o.Fragment,{children:[e.caption&&o.jsx(ge,{children:e.caption}),e.head&&o.jsx(ye,{children:o.jsx(D,{children:e.head.map((t,r)=>o.jsx(L,{children:t},r))})}),e.body&&o.jsx(ve,{children:e.body.map((t,r)=>o.jsx(D,{children:t.map((n,l)=>o.jsx(xe,{children:n},l))},r))}),e.foot&&o.jsx(Ce,{children:o.jsx(D,{children:e.foot.map((t,r)=>o.jsx(L,{children:t},r))})})]})}M.displayName="@mantine/core/TableDataRenderer";const Ze={type:"scrollarea"},eo=G((e,{minWidth:t,type:r})=>({scrollContainer:{"--table-min-width":ce(t),"--table-overflow":r==="native"?"auto":void 0}})),Q=P((e,t)=>{const r=$("TableScrollContainer",Ze,e),{classNames:n,className:l,style:i,styles:c,unstyled:a,vars:s,children:u,minWidth:h,type:m,...f}=r,b=E({name:"TableScrollContainer",classes:H,props:r,className:l,style:i,classNames:n,styles:c,unstyled:a,vars:s,varsResolver:eo,rootSelector:"scrollContainer"});return o.jsx(A,{component:m==="scrollarea"?Pe:"div",...m==="scrollarea"?{offsetScrollbars:"x"}:{},ref:t,...b("scrollContainer"),...f,children:o.jsx("div",{...b("scrollContainerInner"),children:u})})});Q.classes=H;Q.displayName="@mantine/core/TableScrollContainer";const oo={withRowBorders:!0,verticalSpacing:7},ro=G((e,{layout:t,captionSide:r,horizontalSpacing:n,verticalSpacing:l,borderColor:i,stripedColor:c,highlightOnHoverColor:a,striped:s,highlightOnHover:u,stickyHeaderOffset:h,stickyHeader:m})=>({table:{"--table-layout":t,"--table-caption-side":r,"--table-horizontal-spacing":re(n),"--table-vertical-spacing":re(l),"--table-border-color":i?N(i,e):void 0,"--table-striped-color":s&&c?N(c,e):void 0,"--table-highlight-on-hover-color":u&&a?N(a,e):void 0,"--table-sticky-header-offset":m?ce(h):void 0}})),d=P((e,t)=>{const r=$("Table",oo,e),{classNames:n,className:l,style:i,styles:c,unstyled:a,vars:s,horizontalSpacing:u,verticalSpacing:h,captionSide:m,stripedColor:f,highlightOnHoverColor:b,striped:C,highlightOnHover:v,withColumnBorders:x,withRowBorders:g,withTableBorder:T,borderColor:w,layout:R,variant:k,data:p,children:y,stickyHeader:O,stickyHeaderOffset:_,mod:X,...F}=r,V=E({name:"Table",props:r,className:l,style:i,classes:H,classNames:n,styles:c,unstyled:a,rootSelector:"table",vars:s,varsResolver:ro});return o.jsx(Qe,{value:{getStyles:V,stickyHeader:O,striped:C===!0?"odd":C||void 0,highlightOnHover:v,withColumnBorders:x,withRowBorders:g,captionSide:m||"bottom"},children:o.jsx(A,{component:"table",variant:k,ref:t,mod:[{"data-with-table-border":T},X],...V("table"),...F,children:y||!!p&&o.jsx(M,{data:p})})})});d.classes=H;d.displayName="@mantine/core/Table";d.Td=xe;d.Th=L;d.Tr=D;d.Thead=ye;d.Tbody=ve;d.Tfoot=Ce;d.Caption=ge;d.ScrollContainer=Q;d.DataRenderer=M;const to=Re.div`
  background-color: white;
  border-radius: 15px 15px 0 0;
  width: 100%;
  overflow: hidden;

  .td,
  .th {
    border: 0.5px solid ${e=>e.theme.colors.gray[2]};
  }

  .th:first-child {
    border-top-left-radius: 15px;
  }
  .th:last-child {
    border-top-right-radius: 15px;
  }

  tr > th:first-child {
    border-right: none;
  }

  tr > th:nth-child(2) {
    border-left: none;
  }

  tr > td:first-child {
    border-right: none;
  }

  tr > td:nth-child(2) {
    border-left: none;
  }

  .footer-table {
    height: 16px;
    border: 0.5px solid ${e=>e.theme.colors.gray[2]};
    border-radius: 0 0 15px 15px;
    border-top: none;
  }
`,so=({elements:e,onSelectionChange:t,initialSelectedIds:r=[],headers:n,renderCell:l,onPopoverAction:i,isLoading:c=!1,isDeleteButtonDisabled:a=!1})=>{const[s,u]=S.useState(r),[h,m]=S.useState(!1),f=S.useRef(null),[b,C]=S.useState(0);S.useEffect(()=>{e&&C(e.length)},[e]);const v=b>0&&s.length===b,x=s.length>0&&s.length<b;S.useEffect(()=>{t(s),m(s.length>0)},[s,t]);const g=()=>{u(v?[]:(e==null?void 0:e.map(p=>p.id))??[])},T=(p,y)=>{u(p.currentTarget.checked?[...s,y]:s.filter(O=>O!==y))},w=()=>{i&&(i(),u([]))},R=e==null?void 0:e.map(p=>o.jsxs(d.Tr,{bg:s.includes(p.id)?j.colors.primary[0]:void 0,children:[o.jsx(d.Td,{children:o.jsx(I,{color:j.colors.primary[5],"aria-label":"Select row",checked:s.includes(p.id),onChange:y=>T(y,p.id)})}),n.map(y=>o.jsx(d.Td,{children:l(p,y)},y))]},p.id)),k=Array(5).fill(0).map((p,y)=>o.jsxs(d.Tr,{children:[o.jsx(d.Td,{children:o.jsx(te,{height:24,width:"15%"})}),Array(n.length).fill(0).map((O,_)=>o.jsx(d.Td,{children:o.jsx(te,{height:24,width:"50%"})},_))]},y));return o.jsxs("div",{style:{position:"relative",width:"100%"},children:[(i||a)&&o.jsx(Ne,{isOpened:h,onClose:()=>m(!1),ref:f,popoverContent:o.jsxs(He,{gap:0,align:"center",children:[o.jsx(se,{order:5,p:"15px 12px",c:j.colors.primary[6],style:{borderRight:`1px solid ${j.colors.gray[2]}`,width:"100%",whiteSpace:"nowrap"},children:`${s.length} SELECTED`}),o.jsx(_e,{color:j.colors.red[5],text:"Remove",icon:we,iconSize:16,isIconOnLeft:!0,variant:"transparent",isDisabled:a,onClick:w})]})}),o.jsxs(to,{theme:j,children:[o.jsxs(d,{ref:f,classNames:{td:"td",th:"th",tr:"tr",table:"table"},children:[o.jsx(d.Thead,{children:o.jsxs(d.Tr,{children:[o.jsx(d.Th,{children:o.jsx(I,{color:j.colors.primary[5],"aria-label":"Select all rows",checked:v,indeterminate:x,onChange:g})}),n.map(p=>o.jsx(d.Th,{children:o.jsx(se,{order:4,c:j.colors.gray[5],children:p})},p))]})}),o.jsx(d.Tbody,{children:c?k:R})]}),o.jsx("div",{className:"footer-table"})]})]})};so.__docgenInfo={description:"",methods:[],displayName:"TableComponent",props:{elements:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onSelectionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedIds: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"selectedIds"}],return:{name:"void"}}},description:""},initialSelectedIds:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},renderCell:{required:!0,tsType:{name:"signature",type:"function",raw:"(element: T, columnKey: string) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"element"},{type:{name:"string"},name:"columnKey"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},onPopoverAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDeleteButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{so as T};