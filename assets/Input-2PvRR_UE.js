import{j as m}from"./jsx-runtime-CexXSJP5.js";import{r as P}from"./default-theme-BUmQqxa3.js";import{r as H}from"./index-BP8_t0zE.js";import{c as w,b as re,g as me}from"./get-size-ZIjN6hcg.js";import{c as A}from"./create-vars-resolver-BkjTnGuP.js";import{f as D,u as N,d as R,B as x,e as ve}from"./factory-Cmy58O58.js";import{p as fe}from"./polymorphic-factory-DpGZ7QIF.js";import{u as ye}from"./use-id-B6kcI9zl.js";function he(t=null){const e=H.createContext(t);return[({children:o,value:n})=>m.jsx(e.Provider,{value:n,children:o}),()=>H.useContext(e)]}const[be,J]=he({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var _={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const oe={},Se=A((t,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${w(e)} - ${P(2)})`}})),K=D((t,e)=>{const s=N("InputDescription",oe,t),{classNames:u,className:o,style:n,styles:v,unstyled:b,vars:f,size:y,__staticSelector:S,__inheritStyles:h=!0,variant:I,...l}=N("InputDescription",oe,s),i=J(),a=R({name:["InputWrapper",S],props:s,classes:_,className:o,style:n,classNames:u,styles:v,unstyled:b,rootSelector:"description",vars:f,varsResolver:Se}),c=h&&(i==null?void 0:i.getStyles)||a;return m.jsx(x,{component:"p",ref:e,variant:I,size:y,...c("description",i!=null&&i.getStyles?{className:o,style:n}:void 0),...l})});K.classes=_;K.displayName="@mantine/core/InputDescription";const _e={},Ie=A((t,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${w(e)} - ${P(2)})`}})),M=D((t,e)=>{const s=N("InputError",_e,t),{classNames:u,className:o,style:n,styles:v,unstyled:b,vars:f,size:y,__staticSelector:S,__inheritStyles:h=!0,variant:I,...l}=s,i=R({name:["InputWrapper",S],props:s,classes:_,className:o,style:n,classNames:u,styles:v,unstyled:b,rootSelector:"error",vars:f,varsResolver:Ie}),a=J(),c=h&&(a==null?void 0:a.getStyles)||i;return m.jsx(x,{component:"p",ref:e,variant:I,size:y,...c("error",a!=null&&a.getStyles?{className:o,style:n}:void 0),...l})});M.classes=_;M.displayName="@mantine/core/InputError";const ne={labelElement:"label"},ge=A((t,{size:e})=>({label:{"--input-label-size":w(e),"--input-asterisk-color":void 0}})),Q=D((t,e)=>{const s=N("InputLabel",ne,t),{classNames:u,className:o,style:n,styles:v,unstyled:b,vars:f,labelElement:y,size:S,required:h,htmlFor:I,onMouseDown:l,children:i,__staticSelector:a,variant:c,mod:z,...d}=N("InputLabel",ne,s),r=R({name:["InputWrapper",a],props:s,classes:_,className:o,style:n,classNames:u,styles:v,unstyled:b,rootSelector:"label",vars:f,varsResolver:ge}),g=J(),C=(g==null?void 0:g.getStyles)||r;return m.jsxs(x,{...C("label",g!=null&&g.getStyles?{className:o,style:n}:void 0),component:y,variant:c,size:S,ref:e,htmlFor:y==="label"?I:void 0,mod:[{required:h},z],onMouseDown:$=>{l==null||l($),!$.defaultPrevented&&$.detail>1&&$.preventDefault()},...d,children:[i,h&&m.jsx("span",{...C("required"),"aria-hidden":!0,children:" *"})]})});Q.classes=_;Q.displayName="@mantine/core/InputLabel";const ie={},ee=D((t,e)=>{const s=N("InputPlaceholder",ie,t),{classNames:u,className:o,style:n,styles:v,unstyled:b,vars:f,__staticSelector:y,variant:S,error:h,mod:I,...l}=N("InputPlaceholder",ie,s),i=R({name:["InputPlaceholder",y],props:s,classes:_,className:o,style:n,classNames:u,styles:v,unstyled:b,rootSelector:"placeholder"});return m.jsx(x,{...i("placeholder"),mod:[{error:!!h},I],component:"span",variant:S,ref:e,...l})});ee.classes=_;ee.displayName="@mantine/core/InputPlaceholder";function Ne(t,{hasDescription:e,hasError:s}){const u=t.findIndex(f=>f==="input"),o=t.slice(0,u),n=t.slice(u+1),v=e&&o.includes("description")||s&&o.includes("error");return{offsetBottom:e&&n.includes("description")||s&&n.includes("error"),offsetTop:v}}const $e={labelElement:"label",inputContainer:t=>t,inputWrapperOrder:["label","description","input","error"]},ze=A((t,{size:e})=>({label:{"--input-label-size":w(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${w(e)} - ${P(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${w(e)} - ${P(2)})`}})),te=D((t,e)=>{const s=N("InputWrapper",$e,t),{classNames:u,className:o,style:n,styles:v,unstyled:b,vars:f,size:y,variant:S,__staticSelector:h,inputContainer:I,inputWrapperOrder:l,label:i,error:a,description:c,labelProps:z,descriptionProps:d,errorProps:r,labelElement:g,children:C,withAsterisk:$,id:F,required:U,__stylesApiProps:X,mod:Y,...se}=s,L=R({name:["InputWrapper",h],props:X||s,classes:_,className:o,style:n,classNames:u,styles:v,unstyled:b,vars:f,varsResolver:ze}),E={size:y,variant:S,__staticSelector:h},j=ye(F),Z=typeof $=="boolean"?$:U,T=(r==null?void 0:r.id)||`${j}-error`,k=(d==null?void 0:d.id)||`${j}-description`,O=j,q=!!a&&typeof a!="boolean",p=!!c,V=`${q?T:""} ${p?k:""}`,B=V.trim().length>0?V.trim():void 0,G=(z==null?void 0:z.id)||`${j}-label`,ae=i&&m.jsx(Q,{labelElement:g,id:G,htmlFor:O,required:Z,...E,...z,children:i},"label"),le=p&&m.jsx(K,{...d,...E,size:(d==null?void 0:d.size)||E.size,id:(d==null?void 0:d.id)||k,children:c},"description"),ce=m.jsx(H.Fragment,{children:I(C)},"input"),de=q&&H.createElement(M,{...r,...E,size:(r==null?void 0:r.size)||E.size,key:"error",id:(r==null?void 0:r.id)||T},a),pe=l.map(ue=>{switch(ue){case"label":return ae;case"input":return ce;case"description":return le;case"error":return de;default:return null}});return m.jsx(be,{value:{getStyles:L,describedBy:B,inputId:O,labelId:G,...Ne(l,{hasDescription:p,hasError:q})},children:m.jsx(x,{ref:e,variant:S,size:y,mod:[{error:!!a},Y],...L("root"),...se,children:pe})})});te.classes=_;te.displayName="@mantine/core/InputWrapper";const Ee={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},je=A((t,e,s)=>({wrapper:{"--input-margin-top":s.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":s.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":re(e.size,"input-height"),"--input-fz":w(e.size),"--input-radius":e.radius===void 0?void 0:me(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?P(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?P(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?re(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),W=fe((t,e)=>{const s=N("Input",Ee,t),{classNames:u,className:o,style:n,styles:v,unstyled:b,required:f,__staticSelector:y,__stylesApiProps:S,size:h,wrapperProps:I,error:l,disabled:i,leftSection:a,leftSectionProps:c,leftSectionWidth:z,rightSection:d,rightSectionProps:r,rightSectionWidth:g,rightSectionPointerEvents:C,leftSectionPointerEvents:$,variant:F,vars:U,pointer:X,multiline:Y,radius:se,id:L,withAria:E,withErrorStyles:j,mod:Z,inputSize:T,...k}=s,{styleProps:O,rest:q}=ve(k),p=J(),V={offsetBottom:p==null?void 0:p.offsetBottom,offsetTop:p==null?void 0:p.offsetTop},B=R({name:["Input",y],props:S||s,classes:_,className:o,style:n,classNames:u,styles:v,unstyled:b,stylesCtx:V,rootSelector:"wrapper",vars:U,varsResolver:je}),G=E?{required:f,disabled:i,"aria-invalid":!!l,"aria-describedby":p==null?void 0:p.describedBy,id:(p==null?void 0:p.inputId)||L}:{};return m.jsxs(x,{...B("wrapper"),...O,...I,mod:[{error:!!l&&j,pointer:X,disabled:i,multiline:Y,"data-with-right-section":!!d,"data-with-left-section":!!a},Z],variant:F,size:h,children:[a&&m.jsx("div",{...c,"data-position":"left",...B("section",{className:c==null?void 0:c.className,style:c==null?void 0:c.style}),children:a}),m.jsx(x,{component:"input",...q,...G,ref:e,required:f,mod:{disabled:i,error:!!l&&j},variant:F,__size:T,...B("input")}),d&&m.jsx("div",{...r,"data-position":"right",...B("section",{className:r==null?void 0:r.className,style:r==null?void 0:r.style}),children:d})]})});W.classes=_;W.Wrapper=te;W.Label=Q;W.Error=M;W.Description=K;W.Placeholder=ee;W.displayName="@mantine/core/Input";export{W as I,he as c,J as u};
