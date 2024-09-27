import{j as n}from"./factory-BYdAncit.js";import{T as s}from"./Table-CPynlTVo.js";import{T as d}from"./Title-BF1HBFC0.js";import"./index-BP8_t0zE.js";import"./index-D1m89S_o.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./theme-CBi4L4pb.js";import"./Button-BmZH4clo.js";import"./polymorphic-factory-BBVriERq.js";import"./Loader-DYJrnaLT.js";import"./Transition-BCGcMdvv.js";import"./index-BVEwUaSm.js";import"./UnstyledButton-BYy9qxQd.js";import"./Popover-jsiwsZQx.js";import"./Popover-KLkcXoeL.js";import"./OptionalPortal-pP32-1nJ.js";import"./use-id-Cc9noPIB.js";import"./random-id-CCVmTau8.js";import"./use-merged-ref-Zmja8g2s.js";import"./DirectionProvider-Bt7M7wKl.js";import"./use-floating-auto-update-zUEi8vAS.js";import"./create-safe-context-cIFFkskc.js";import"./FocusTrap-BWeZ3v7v.js";import"./use-uncontrolled-D1uLaDoI.js";import"./ScrollArea-CIJALQu3.js";import"./get-auto-contrast-value-DNc6ItoQ.js";import"./CheckIcon-DIBRqQfE.js";import"./Input-DkGv-MlU.js";import"./Skeleton-DfZH9prR.js";import"./Flex-DB8_OMZA.js";const a=[{id:1,name:"Arya Stark"},{id:2,name:"Tyrion Lannister"},{id:3,name:"Davos Seaworth"}],l=["ID","Name"],i=(e,I)=>{switch(I){case"ID":return n.jsx(d,{order:3,children:e.id});case"Name":return n.jsx(d,{order:3,children:e.name});default:return null}},Y={title:"Components/TableComponent",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"Indicates if the table is in a loading state"},elements:{control:"object",description:"Array of elements to render in the table"},headers:{control:"object",description:"Array of header labels for the table columns"},renderCell:{control:!1,description:"Function to render the content of each cell based on the column key"},onSelectionChange:{action:"selectionChanged",description:"Callback when selected rows change"},initialSelectedIds:{description:"Array of initially selected row IDs"},isDeleteButtonDisabled:{control:"boolean",description:"Disables the delete button in the popover"},onPopoverAction:{action:"popoverAction",description:"Callback for the popover action"}},args:{elements:a,headers:l,isLoading:!1,renderCell:i}},r={render:e=>n.jsx(s,{elements:e.elements,headers:e.headers,renderCell:e.renderCell,onSelectionChange:e.onSelectionChange,isLoading:e.isLoading}),args:{elements:a,headers:l,isLoading:!1,renderCell:i,onSelectionChange:e=>console.log("Selected IDs:",e)}},o={render:e=>n.jsx(s,{elements:e.elements,headers:e.headers,renderCell:e.renderCell,onSelectionChange:e.onSelectionChange,initialSelectedIds:e.initialSelectedIds,isLoading:e.isLoading}),args:{elements:a,headers:l,isLoading:!1,initialSelectedIds:[2],renderCell:i,onSelectionChange:e=>console.log("Selected IDs:",e)}},t={render:e=>n.jsx(s,{elements:e.elements,headers:e.headers,renderCell:e.renderCell,onSelectionChange:e.onSelectionChange,isLoading:e.isLoading}),args:{elements:a,headers:l,isLoading:!0,renderCell:i,onSelectionChange:e=>console.log("Selected IDs:",e)}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <TableComponent elements={args.elements} headers={args.headers} renderCell={args.renderCell} onSelectionChange={args.onSelectionChange} isLoading={args.isLoading} />;
  },
  args: {
    elements: userData,
    headers: headers,
    isLoading: false,
    renderCell: renderCell,
    onSelectionChange: (selectedIds: number[]) => console.log('Selected IDs:', selectedIds)
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <TableComponent elements={args.elements} headers={args.headers} renderCell={args.renderCell} onSelectionChange={args.onSelectionChange} initialSelectedIds={args.initialSelectedIds} isLoading={args.isLoading} />;
  },
  args: {
    elements: userData,
    headers: headers,
    isLoading: false,
    initialSelectedIds: [2],
    renderCell: renderCell,
    onSelectionChange: (selectedIds: number[]) => console.log('Selected IDs:', selectedIds)
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var u,S,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <TableComponent elements={args.elements} headers={args.headers} renderCell={args.renderCell} onSelectionChange={args.onSelectionChange} isLoading={args.isLoading} />;
  },
  args: {
    elements: userData,
    headers: headers,
    isLoading: true,
    renderCell: renderCell,
    onSelectionChange: (selectedIds: number[]) => console.log('Selected IDs:', selectedIds)
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Z=["DefaultTable","TableWithInitialSelects","LoadingTable"];export{r as DefaultTable,t as LoadingTable,o as TableWithInitialSelects,Z as __namedExportsOrder,Y as default};
