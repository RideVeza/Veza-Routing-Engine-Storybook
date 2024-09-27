import{F as n}from"./index-D1m89S_o.js";import{G as D}from"./index-B98Pt2jl.js";import{M as A,a as E}from"./index-CQDxHXwo.js";import{A as C}from"./ActionIcon-CxALb5nY.js";import{t as i}from"./theme-CBi4L4pb.js";import"./iconBase-tVazycLF.js";import"./index-BP8_t0zE.js";import"./factory-BYdAncit.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./ActionIcon-CI9f4PEW.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";const c={Search:D,Delete:A,Edit:n,Logout:E},J={title:"Components/ActionIconComponent",component:C,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:i.colors.gray[0]}]}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["filled","outline","light","default","transparent","subtle","gradient","white"],description:"Defines the style of the ActionIcon"},icon:{control:{type:"select"},options:Object.keys(c),mapping:c,description:"Icon to be rendered inside the ActionIcon"},color:{control:"color",description:"Color of the ActionIcon"},size:{control:{type:"number"},description:"Size of the ActionIcon"},iconColor:{control:"color",description:"Color of the icon"},ariaLabel:{control:"text",description:"Accessibility label"},onClick:{action:"clicked",description:"Function called when the ActionIcon is clicked"}},args:{variant:"filled",color:"#ffffff",iconColor:i.colors.primary[5],size:40,ariaLabel:"action icon"}},e={args:{icon:D,ariaLabel:"Search",variant:"filled"}},o={args:{icon:A,ariaLabel:"Delete",variant:"outline"}},r={args:{icon:n,ariaLabel:"Edit",variant:"light"}},a={args:{icon:n,ariaLabel:"Search",variant:"transparent"}},t={args:{icon:E,ariaLabel:"Delete",variant:"default"}};var s,l,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    icon: GrSearch,
    ariaLabel: 'Search',
    variant: 'filled'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: MdDelete,
    ariaLabel: 'Delete',
    variant: 'outline'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: FaRegEdit,
    ariaLabel: 'Edit',
    variant: 'light'
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,I,L;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: FaRegEdit,
    ariaLabel: 'Search',
    variant: 'transparent'
  }
}`,...(L=(I=a.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var S,v,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: MdLogout,
    ariaLabel: 'Delete',
    variant: 'default'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const K=["SearchIcon","TrashIcon","EditIcon","TransparentIcon","DefaultIcon"];export{t as DefaultIcon,r as EditIcon,e as SearchIcon,a as TransparentIcon,o as TrashIcon,K as __namedExportsOrder,J as default};
