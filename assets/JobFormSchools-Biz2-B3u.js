import{j as e}from"./factory-BYdAncit.js";import{r as c}from"./index-BP8_t0zE.js";import{d as u,e as p}from"./index-oL_zBGcM.js";import{t as n}from"./theme-CBi4L4pb.js";import{F as i}from"./Flex-DB8_OMZA.js";import{T as t}from"./Title-BF1HBFC0.js";import{d as m}from"./styled-components.browser.esm-BzjHiQVu.js";import{J as h}from"./JobFormContentHeader-CpwVJsvY.js";import{T as g}from"./Table-CPynlTVo.js";const x=["Name","Board","Students","AM Bell","PM Bell"],l=(r,o)=>{switch(o){case"Name":return e.jsx(t,{order:3,children:r.name});case"Board":return e.jsxs(i,{gap:6,align:"center",p:6,style:{display:"inline-flex",border:`1px solid ${n.colors.gray[2]}`,borderRadius:"8px",backgroundColor:"white"},children:[e.jsx(p,{size:16,color:n.colors.primary[6]}),e.jsx(t,{order:5,children:r.schoolBoardName??""})]});case"Students":return e.jsxs(i,{gap:6,align:"center",p:"6px 12px",style:{display:"inline-flex",border:`1px solid ${n.colors.gray[2]}`,borderRadius:"33px",backgroundColor:"white"},children:[e.jsx(u,{size:16,color:n.colors.primary[6]}),e.jsx(t,{order:3,children:r.studentsCount})]});case"AM Bell":return e.jsx(i,{gap:6,align:"center",p:"8px 6px",style:{display:"inline-flex",border:`1px solid ${n.colors.gray[2]}`,borderRadius:"8px",backgroundColor:"white"},children:e.jsx(t,{order:5,children:"09:00 AM"})});case"PM Bell":return e.jsx(i,{gap:6,align:"center",p:"8px 6px",style:{display:"inline-flex",border:`1px solid ${n.colors.gray[2]}`,borderRadius:"8px",backgroundColor:"white"},children:e.jsx(t,{order:5,children:"03:35 PM"})});default:return null}};function y(r,o){return r.map(a=>{const s=o.filter(d=>d.school.name===a.name);return{...a,studentsCount:(s==null?void 0:s.length)??0}})}l.__docgenInfo={description:"",methods:[],displayName:"schoolsTableRenderCell",props:{id:{required:!0,tsType:{name:"number"},description:""},name:{required:!0,tsType:{name:"string"},description:""},service_duration:{required:!0,tsType:{name:"number"},description:""},address:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  street: string;
  city: string;
  province: string;
  postal_code: string;
}`,signature:{properties:[{key:"street",value:{name:"string",required:!0}},{key:"city",value:{name:"string",required:!0}},{key:"province",value:{name:"string",required:!0}},{key:"postal_code",value:{name:"string",required:!0}}]}},description:""},programs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  name: string;
  schedule: Record<string, IScheduleDay>;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"schedule",value:{name:"Record",elements:[{name:"string"},{name:"IScheduleDay"}],raw:"Record<string, IScheduleDay>",required:!0}}]}}],raw:`Array<{
  id: number;
  name: string;
  schedule: Record<string, IScheduleDay>;
}>`},description:""},schoolBoardName:{required:!1,tsType:{name:"string"},description:""},studentsCount:{required:!0,tsType:{name:"number"},description:""}}};const b=m.div`
  background-color: #ebeaee;
  height: 100%;
  width: 100%;

  .table-section {
    padding: 20px;
  }

  .hover-popover-description {
    text-align: center;
    line-height: 21px;
  }
`,j=({schools:r,students:o})=>{const a=y(r,o),[s,d]=c.useState([]);return e.jsxs(b,{children:[e.jsx(h,{title:"Schools",buttonText:"Add Schools",isDisabled:!0,itemsCount:r.length,hoverContent:e.jsxs(i,{direction:"column",align:"center",gap:4,p:"32px 24px",w:340,children:[e.jsx(t,{order:3,children:"Can't Add Schools"}),e.jsx(t,{order:5,fw:400,className:"hover-popover-description",children:"Schools are added automatically when students are imported."})]})}),e.jsx("div",{className:"table-section",children:e.jsx(g,{elements:a,headers:x,renderCell:l,onSelectionChange:d,initialSelectedIds:s,onPopoverAction:void 0,isDeleteButtonDisabled:!0})})]})};j.__docgenInfo={description:"",methods:[],displayName:"JobFormSchool"};export{j as J};
