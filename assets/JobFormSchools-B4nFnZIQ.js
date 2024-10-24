import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as i}from"./index-BP8_t0zE.js";import{O as r}from"./ObjectBadge-BW0P1RiL.js";import{T as s}from"./Title-NR0nO8_X.js";import{d}from"./styled-components.browser.esm-Dx2qpfAi.js";import{t as m}from"./theme-DV-fQgRe.js";import{J as c}from"./JobFormContentHeader-CjKBG-OQ.js";import{T as h}from"./Table-DXKGnNOn.js";import{F as p}from"./Flex-DfchtKyW.js";const f=[{field:"name",headerName:"Name",flex:2.5,minWidth:300,filterable:!1,renderCell:e=>t.jsx(s,{order:3,children:e.row.name})},{field:"schoolBoardName",headerName:"Board",flex:2,minWidth:250,filterable:!1,renderCell:e=>t.jsx(r,{value:e.row.schoolBoardName??"",iconName:"File"})},{field:"studentsCount",headerName:"Students",flex:1.5,minWidth:200,filterable:!1,renderCell:e=>t.jsx(r,{value:e.row.studentsCount,iconName:"Person",type:"pill-content"})},{field:"amBell",headerName:"AM Bell",flex:1,minWidth:150,filterable:!1,renderCell:()=>t.jsx(r,{value:"09:00 AM",type:"time-content"})},{field:"pmBell",headerName:"PM Bell",flex:1,minWidth:150,filterable:!1,renderCell:()=>t.jsx(r,{value:"03:35 PM",type:"time-content"})}];function x(e,a){return e.map(l=>{const o=a.filter(n=>n.school.name===l.name);return{...l,studentsCount:(o==null?void 0:o.length)??0}})}const u=d.div`
  background-color: ${e=>e.theme.colors.gray[0]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .table-section {
    height: calc(90vh - 140px);
    padding: 20px;
  }

  .hover-popover-description {
    text-align: center;
    line-height: 21px;
  }
`,b=({schools:e,students:a})=>{const l=x(e,a),[o,n]=i.useState([]);return t.jsxs(u,{theme:m,children:[t.jsx(c,{title:"Schools",buttonText:"Add Schools",isDisabled:!0,itemsCount:e.length,hoverContent:t.jsxs(p,{direction:"column",align:"center",gap:4,p:"32px 24px",w:340,children:[t.jsx(s,{order:3,children:"Can't Add Schools"}),t.jsx(s,{order:5,fw:400,className:"hover-popover-description",children:"Schools are added automatically when students are imported."})]})}),t.jsx("div",{className:"table-section",children:t.jsx(h,{elements:l,headers:f,onSelectionChange:n,initialSelectedIds:o,onPopoverAction:void 0,isDeleteButtonDisabled:!0})})]})};b.__docgenInfo={description:"",methods:[],displayName:"JobFormSchool"};export{b as J};
