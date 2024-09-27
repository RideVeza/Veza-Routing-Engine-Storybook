import{C as i}from"./CompanyCard-Doe4SK5Q.js";import{t as g}from"./theme-CBi4L4pb.js";import"./factory-BYdAncit.js";import"./index-BP8_t0zE.js";import"./styled-components.browser.esm-BzjHiQVu.js";import"./Group-DAYBdM2T.js";import"./Flex-DB8_OMZA.js";import"./polymorphic-factory-BBVriERq.js";import"./Title-BF1HBFC0.js";const S={title:"Components/CompanyCard",component:i,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:g.colors.gray[0]}]}},tags:["autodocs"],argTypes:{companyName:{control:"text",description:"The name of the company displayed on the card"},logoUrl:{control:"text",description:"URL of the company logo to display"},isUserCard:{control:"boolean",description:"Applies user-specific styling to the card."}},args:{companyName:"Company Name",logoUrl:null}},a={args:{companyName:"Acme Corporation",logoUrl:null}},o={args:{companyName:"4 Seasons",logoUrl:"https://res.cloudinary.com/dnuvtuznl/image/upload/v1706665170/cls14dkyi00000lwk0y19clda.svg"}},r={args:{companyName:"User Name",logoUrl:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",isUserCard:!0}};var e,t,s;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    companyName: 'Acme Corporation',
    logoUrl: null
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,m,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    companyName: '4 Seasons',
    logoUrl: 'https://res.cloudinary.com/dnuvtuznl/image/upload/v1706665170/cls14dkyi00000lwk0y19clda.svg'
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    companyName: 'User Name',
    logoUrl: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    isUserCard: true
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const b=["DefaultCompanyCard","CompanyCardWithLogo","CompanyCardForUser"];export{r as CompanyCardForUser,o as CompanyCardWithLogo,a as DefaultCompanyCard,b as __namedExportsOrder,S as default};
