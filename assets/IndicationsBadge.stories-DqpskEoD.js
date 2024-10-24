import{I as f}from"./IndicationsBadge-DCr2nWIo.js";import{t as h}from"./theme-DV-fQgRe.js";import"./jsx-runtime-CexXSJP5.js";import"./index-BP8_t0zE.js";import"./index-DUW3t7VM.js";import"./iconBase-tVazycLF.js";import"./index-DWJGBGB2.js";import"./index-CYZFw_ar.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./Flex-DfchtKyW.js";import"./factory-Cmy58O58.js";import"./default-theme-BUmQqxa3.js";import"./polymorphic-factory-DpGZ7QIF.js";const _={title:"Components/IndicationsBadge",component:f,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:h.colors.gray[0]}]}},tags:["autodocs"],argTypes:{indications:{control:{type:"check",multiple:!0},options:["attendant","hca","lpn"],description:"List of indications to display icons for."}},args:{indications:[]}},a={args:{indications:["attendant","hca","lpn"]}},t={args:{indications:["attendant"]}},e={args:{indications:["lpn"]}},n={args:{indications:["hca"]}};var o,r,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    indications: ['attendant', 'hca', 'lpn'] // Default selection
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    indications: ['attendant'] // Multiple selections
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    indications: ['lpn'] // LPN only
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,u,B;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    indications: ['hca'] // HCA only
  }
}`,...(B=(u=n.parameters)==null?void 0:u.docs)==null?void 0:B.source}}};const b=["DefaultBadge","AttendantBadge","LPNBadge","HCABadge"];export{t as AttendantBadge,a as DefaultBadge,n as HCABadge,e as LPNBadge,b as __namedExportsOrder,_ as default};
