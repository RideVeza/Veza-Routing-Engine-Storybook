import{j as S}from"./jsx-runtime-CexXSJP5.js";import{d as A}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as k}from"./theme-DV-fQgRe.js";import{_ as N}from"./extends-CF3RwP-h.js";import{_ as j}from"./objectWithoutPropertiesLoose-CAYKN5F1.js";import{r as u}from"./index-BP8_t0zE.js";import{f as B,u as M}from"./factory-Cmy58O58.js";import{I as _}from"./InputBase-Dxa36rRv.js";var P={};function q(){return typeof process<"u"&&P?"production":"development"}var O=u.useLayoutEffect,V=function(t){var r=u.useRef(t);return O(function(){r.current=t}),r},T=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},Y=function(t,r){var o=u.useRef();return u.useCallback(function(n){t.current=n,o.current&&T(o.current,null),o.current=r,r&&T(r,n)},[r])},L={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},D=function(t){Object.keys(L).forEach(function(r){t.style.setProperty(r,L[r],"important")})},C=D,i=null,H=function(t,r){var o=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?o+r.borderSize:o-r.paddingSize};function G(e,t,r,o){r===void 0&&(r=1),o===void 0&&(o=1/0),i||(i=document.createElement("textarea"),i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden","true"),C(i)),i.parentNode===null&&document.body.appendChild(i);var n=e.paddingSize,s=e.borderSize,a=e.sizingStyle,l=a.boxSizing;Object.keys(a).forEach(function(g){var m=g;i.style[m]=a[m]}),C(i),i.value=t;var d=H(i,e);i.value=t,d=H(i,e),i.value="x";var c=i.scrollHeight-n,p=c*r;l==="border-box"&&(p=p+n+s),d=Math.max(p,d);var h=c*o;return l==="border-box"&&(h=h+n+s),d=Math.min(h,d),[d,c]}var E=function(){},U=function(t,r){return t.reduce(function(o,n){return o[n]=r[n],o},{})},X=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Z=!!document.documentElement.currentStyle,J=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var o=U(X,r),n=o.boxSizing;if(n==="")return null;Z&&n==="border-box"&&(o.width=parseFloat(o.width)+parseFloat(o.borderRightWidth)+parseFloat(o.borderLeftWidth)+parseFloat(o.paddingRight)+parseFloat(o.paddingLeft)+"px");var s=parseFloat(o.paddingBottom)+parseFloat(o.paddingTop),a=parseFloat(o.borderBottomWidth)+parseFloat(o.borderTopWidth);return{sizingStyle:o,paddingSize:s,borderSize:a}},K=J;function I(e,t,r){var o=V(r);u.useLayoutEffect(function(){var n=function(a){return o.current(a)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var Q=function(t){I(window,"resize",t)},ee=function(t){I(document.fonts,"loadingdone",t)},te=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],re=function(t,r){var o=t.cacheMeasurements,n=t.maxRows,s=t.minRows,a=t.onChange,l=a===void 0?E:a,d=t.onHeightChange,c=d===void 0?E:d,p=j(t,te),h=p.value!==void 0,g=u.useRef(null),m=Y(g,r),R=u.useRef(0),b=u.useRef(),v=function(){var f=g.current,y=o&&b.current?b.current:K(f);if(y){b.current=y;var w=G(y,f.value||f.placeholder||"x",s,n),x=w[0],W=w[1];R.current!==x&&(R.current=x,f.style.setProperty("height",x+"px","important"),c(x,{rowHeight:W}))}},$=function(f){h||v(),l(f)};return u.useLayoutEffect(v),Q(v),ee(v),u.createElement("textarea",N({},p,{onChange:$,ref:m}))},oe=u.forwardRef(re);const ne={},z=B((e,t)=>{const{autosize:r,maxRows:o,minRows:n,__staticSelector:s,resize:a,...l}=M("Textarea",ne,e),d=r&&q()!=="test",c=d?{maxRows:o,minRows:n}:{};return S.jsx(_,{component:d?oe:"textarea",ref:t,...l,__staticSelector:s||"Textarea",multiline:!0,"data-no-overflow":r&&o===void 0||void 0,__vars:{"--input-resize":a},...c})});z.classes=_.classes;z.displayName="@mantine/core/Textarea";const ie=A.div`
  width: 100%;

  .textarea-input {
    background-color: white;
    height: 56px;
    padding: 7px 8px;

    border-radius: 6px;
    border: 1px solid ${e=>e.theme.colors.gray[2]};
    transition: border-color 0.2s ease;

    caret-color: ${e=>e.theme.colors.primary[5]};

    &:hover {
      border: 1px solid ${e=>e.theme.colors.gray[5]};
      outline: none;
    }

    &:focus {
      border: 2px solid ${e=>e.theme.colors.primary[5]};
      outline: none;
    }

    &:disabled {
      background-color: ${e=>e.theme.colors.gray[0]};
      border: 1px solid ${e=>e.theme.colors.gray[2]};
      color: ${e=>e.theme.colors.gray[3]};
      opacity: 1;
      cursor: not-allowed;
    }
  }

  .preview-input {
    border: 1px solid transparent;
    height: 56px;
    padding: 7px 8px;
    cursor: default;

    &:disabled {
      background-color: transparent;
      color: ${e=>e.theme.colors.gray[9]};
      opacity: 1;
    }
  }
`,ae=({placeholder:e,value:t,onChange:r,disabled:o,isRequired:n=!1,isPreview:s=!1})=>{const a=s?"preview-input":"textarea-input",l=s||o,d=c=>{s||r(c.currentTarget.value)};return S.jsx(ie,{theme:k,children:S.jsx(z,{value:t,placeholder:l?"":e,disabled:l,required:n,classNames:{input:a},onChange:d})})};ae.__docgenInfo={description:"",methods:[],displayName:"TextAreaInput",props:{isRequired:{defaultValue:{value:"false",computed:!1},required:!1},isPreview:{defaultValue:{value:"false",computed:!1},required:!1}}};export{ae as T};
