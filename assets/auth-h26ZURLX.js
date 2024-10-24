import{b as h,a as k}from"./httpClient-BlwsOI9O.js";import{_ as f}from"./tslib.es6-Ytcc2UEA.js";import{parse as S}from"./index-DDC2H7jq.js";var u=new Map,p=new Map,b=!0,g=!1;function v(e){return e.replace(/[\s,]+/g," ").trim()}function I(e){return v(e.source.body.substring(e.start,e.end))}function y(e){var r=new Set,a=[];return e.definitions.forEach(function(t){if(t.kind==="FragmentDefinition"){var n=t.name.value,o=I(t.loc),s=p.get(n);s&&!s.has(o)?b&&console.warn("Warning: fragment with name "+n+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||p.set(n,s=new Set),s.add(o),r.has(o)||(r.add(o),a.push(t))}else a.push(t)}),f(f({},e),{definitions:a})}function F(e){var r=new Set(e.definitions);r.forEach(function(t){t.loc&&delete t.loc,Object.keys(t).forEach(function(n){var o=t[n];o&&typeof o=="object"&&r.add(o)})});var a=e.loc;return a&&(delete a.startToken,delete a.endToken),e}function $(e){var r=v(e);if(!u.has(r)){var a=S(e,{experimentalFragmentVariables:g,allowLegacyFragmentVariables:g});if(!a||a.kind!=="Document")throw new Error("Not a valid GraphQL document.");u.set(r,F(y(a)))}return u.get(r)}function i(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];typeof e=="string"&&(e=[e]);var t=e[0];return r.forEach(function(n,o){n&&n.kind==="Document"?t+=n.loc.source.body:t+=n,t+=e[o+1]}),$(t)}function x(){u.clear(),p.clear()}function z(){b=!1}function E(){g=!0}function U(){g=!1}var c={gql:i,resetCaches:x,disableFragmentWarnings:z,enableExperimentalFragmentVariables:E,disableExperimentalFragmentVariables:U};(function(e){e.gql=c.gql,e.resetCaches=c.resetCaches,e.disableFragmentWarnings=c.disableFragmentWarnings,e.enableExperimentalFragmentVariables=c.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=c.disableExperimentalFragmentVariables})(i||(i={}));i.default=i;async function P(e){const{where:r,orderBy:a={createdAt:"asc"},take:t,skip:n=0,cursor:o,fields:s=["id","name"],extraGqlQuery:m,fetchPolicy:l,extraVariables:d}=e,w=i`
    query Organizations(${[...["$where: OrganizationWhereInput!","$orderBy: [OrganizationOrderByInput!]!","$take: Int","$skip: Int!","$cursor: OrganizationWhereUniqueInput"]].join(", ")}) {
      organizations(where: $where, orderBy: $orderBy, take: $take, skip: $skip, cursor: $cursor) {
        ${s.join(" ")}
      }
      ${m||""}
    }
  `;return await h.query({query:w,variables:{where:r,orderBy:a,take:t,skip:n,cursor:o,...d},fetchPolicy:l})}const T={login:async e=>{try{const a=await k.create({baseURL:"https://veza-routing.azurewebsites.net/api",headers:{"Content-Type":"application/json","organization-id":"1000","api-key":"3178ae6ab1e341a0803058835a5bb3d3"}}).post("/auth",e);if(a.status===200){const t=a.data.token;return localStorage.setItem("username",e.username),localStorage.setItem("auth",t),window.location.assign("/"),Promise.resolve()}}catch{return Promise.reject()}},logout:()=>{localStorage.removeItem("auth"),localStorage.removeItem("username"),window.location.assign("/login")},checkAuth:()=>localStorage.getItem("auth")?Promise.resolve():Promise.reject(),vezaLoginAsync:async(e,r)=>{var o;const a=i`
      mutation AuthenticateUserWithPassword(
        $email: String!
        $password: String!
      ) {
        authenticateUserWithPassword(email: $email, password: $password) {
          ... on UserAuthenticationWithPasswordSuccess {
            sessionToken
          }
          ... on UserAuthenticationWithPasswordFailure {
            message
          }
        }
      }
    `,n=(o=(await h.mutate({mutation:a,variables:{email:e,password:r}})).data)==null?void 0:o.authenticateUserWithPassword.sessionToken;if(n){const s={where:{},take:100,skip:0,cursor:null,fields:["id","name","logo { publicUrl }"],fetchPolicy:"no-cache"},{data:m}=await P(s),l=m.organizations.find(d=>d.name==="4Seasons");if(!l)throw new Error("4Seasons not found.");return localStorage.setItem("sessionToken",n),localStorage.setItem("fourSeasonsId",l.id),localStorage.setItem("logoUrl",l.logo.publicUrl),n}else return Promise.reject()},getVezaSessionToken:()=>localStorage.getItem("sessionToken"),getFourSeasonsId:()=>localStorage.getItem("fourSeasonsId"),getFourSeasonsLogoUrl:()=>localStorage.getItem("logoUrl"),vezaLogout:()=>{localStorage.removeItem("sessionToken"),localStorage.removeItem("fourSeasonsId"),localStorage.removeItem("logoUrl"),h.resetStore().catch(()=>{console.error("Error resetting apollo client store")})}};export{T as a,i as g};
