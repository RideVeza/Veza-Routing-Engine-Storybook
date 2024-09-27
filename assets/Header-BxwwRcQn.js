import{b as n,j as e}from"./factory-BYdAncit.js";import{G as c}from"./iconBase-tVazycLF.js";import{c as l}from"./index-oL_zBGcM.js";import{d as a}from"./styled-components.browser.esm-BzjHiQVu.js";import{a as m}from"./auth-ZgXK2BXz.js";import{A as o}from"./ActionIcon-CxALb5nY.js";import{C as d}from"./CompanyCard-Doe4SK5Q.js";import{u as p}from"./Transition-BCGcMdvv.js";import{T as f}from"./Title-BF1HBFC0.js";function h(t){return c({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z"},child:[]}]})(t)}const x=a.header`
  padding: ${t=>t.$isSmallScreen?"16px":"56px"} 0 32px 0;

  .content {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,g=a.div`
  display: flex;
  gap: 12px;
  justify-content: right;
  align-items: center;
`,u=({leftText:t})=>{const i=n(),s=p(`(max-width: ${i.breakpoints.sm}px)`)||!1,r=m.getFourSeasonsLogoUrl();return e.jsx(x,{$isSmallScreen:s,children:e.jsxs("div",{className:"content",children:[e.jsx(f,{order:1,children:t}),e.jsxs(g,{children:[e.jsx(o,{ariaLabel:"notification",variant:"filled",color:"white",iconColor:"gray",icon:l}),e.jsx(o,{ariaLabel:"messages",variant:"filled",color:"white",icon:h}),e.jsx(d,{companyName:"4Seasons",logoUrl:r})]})]})})};u.__docgenInfo={description:"",methods:[],displayName:"Header",props:{leftText:{required:!0,tsType:{name:"string"},description:""}}};export{u as H};
