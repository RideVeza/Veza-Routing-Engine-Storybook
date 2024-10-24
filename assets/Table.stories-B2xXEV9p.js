import{j as r}from"./jsx-runtime-CexXSJP5.js";import{T as s}from"./Table-DXKGnNOn.js";import{T as l}from"./Title-NR0nO8_X.js";import"./index-BP8_t0zE.js";import"./index-D1m89S_o.js";import"./iconBase-tVazycLF.js";import"./styled-components.browser.esm-Dx2qpfAi.js";import"./theme-DV-fQgRe.js";import"./default-theme-BUmQqxa3.js";import"./Button-DgKJQOcJ.js";import"./Button-DQolzjlr.js";import"./get-size-ZIjN6hcg.js";import"./factory-Cmy58O58.js";import"./create-vars-resolver-BkjTnGuP.js";import"./polymorphic-factory-DpGZ7QIF.js";import"./Loader-I3UIFO-P.js";import"./Transition-1eDnA5u2.js";import"./index-DJkmxc1E.js";import"./use-reduced-motion-BEzOJ-bM.js";import"./UnstyledButton-Bp_jImnG.js";import"./Popover-w4mprIVE.js";import"./Popover-2oXiTh42.js";import"./OptionalPortal-Dz0ZbQ5R.js";import"./use-isomorphic-effect-BPjV9wAK.js";import"./use-merged-ref-DIizHiiB.js";import"./DirectionProvider-DOfDrEPm.js";import"./use-floating-auto-update-DNpjfyuK.js";import"./create-safe-context-DdvLfAHk.js";import"./FocusTrap-Qzhi2iHh.js";import"./is-element-CqW86lAY.js";import"./random-id-CCVmTau8.js";import"./use-uncontrolled-D1uLaDoI.js";import"./use-id-B6kcI9zl.js";import"./Flex-DfchtKyW.js";import"./extends-CF3RwP-h.js";import"./index-CXPIPAcP.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroup-CWbEP0vl.js";import"./assertThisInitialized-C1KLUksq.js";const i=[{id:1,name:"Arya Stark"},{id:2,name:"Tyrion Lannister"},{id:3,name:"Davos Seaworth"}],n=[{field:"id",headerName:"ID",flex:1,minWidth:150,filterable:!1,renderCell:e=>r.jsx(l,{order:3,children:e.row.id})},{field:"name",headerName:"Name",flex:2,minWidth:200,filterable:!1,renderCell:e=>r.jsx(l,{order:3,children:e.row.name})}],se={title:"Components/TableComponent",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"Indicates if the table is in a loading state"},elements:{control:"object",description:"Array of elements to render in the table"},headers:{control:"object",description:"Array of header labels for the table columns"},onSelectionChange:{action:"selectionChanged",description:"Callback when selected rows change"},initialSelectedIds:{description:"Array of initially selected row IDs"},isDeleteButtonDisabled:{control:"boolean",description:"Disables the delete button in the popover"},onPopoverAction:{action:"popoverAction",description:"Callback for the popover action"}},args:{elements:i,headers:n,isLoading:!1}},a={render:e=>r.jsx(s,{elements:e.elements,headers:e.headers,onSelectionChange:e.onSelectionChange,isLoading:e.isLoading}),args:{elements:i,headers:n,isLoading:!1,onSelectionChange:e=>console.log("Selected IDs:",e)}},o={render:e=>r.jsx(s,{elements:e.elements,headers:e.headers,onSelectionChange:e.onSelectionChange,initialSelectedIds:e.initialSelectedIds,isLoading:e.isLoading}),args:{elements:i,headers:n,isLoading:!1,initialSelectedIds:[2],onSelectionChange:e=>console.log("Selected IDs:",e)}},t={render:e=>r.jsx(s,{elements:e.elements,headers:e.headers,onSelectionChange:e.onSelectionChange,isLoading:e.isLoading}),args:{elements:i,headers:n,isLoading:!0,onSelectionChange:e=>console.log("Selected IDs:",e)}};var d,m,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`[{
  field: 'id',
  headerName: 'ID',
  flex: 1,
  minWidth: 150,
  filterable: false,
  renderCell: (params: GridRenderCellParams<UserExample>) => <Title order={3}>{params.row.id}</Title>
}, {
  field: 'name',
  headerName: 'Name',
  flex: 2,
  minWidth: 200,
  filterable: false,
  renderCell: (params: GridRenderCellParams<UserExample>) => <Title order={3}>{params.row.name}</Title>
}]`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <TableComponent elements={args.elements} headers={args.headers} onSelectionChange={args.onSelectionChange} isLoading={args.isLoading} />;
  },
  args: {
    elements: userData,
    headers: tableHeaders,
    isLoading: false,
    onSelectionChange: (selectedIds: number[]) => console.log('Selected IDs:', selectedIds)
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,u,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <TableComponent elements={args.elements} headers={args.headers} onSelectionChange={args.onSelectionChange} initialSelectedIds={args.initialSelectedIds} isLoading={args.isLoading} />;
  },
  args: {
    elements: userData,
    headers: tableHeaders,
    isLoading: false,
    initialSelectedIds: [2],
    onSelectionChange: (selectedIds: number[]) => console.log('Selected IDs:', selectedIds)
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,C,I;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return <TableComponent elements={args.elements} headers={args.headers} onSelectionChange={args.onSelectionChange} isLoading={args.isLoading} />;
  },
  args: {
    elements: userData,
    headers: tableHeaders,
    isLoading: true,
    onSelectionChange: (selectedIds: number[]) => console.log('Selected IDs:', selectedIds)
  }
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const ie=["tableHeaders","DefaultTable","TableWithInitialSelects","LoadingTable"];export{a as DefaultTable,t as LoadingTable,o as TableWithInitialSelects,ie as __namedExportsOrder,se as default,n as tableHeaders};
