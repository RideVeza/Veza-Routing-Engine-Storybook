import{f as W,u as k,b as we,a as ee,j as r,B as oe,c as te,g as ne,h as re,y as xe}from"./factory-BYdAncit.js";import{a as Pe}from"./index-D1m89S_o.js";import{t as K}from"./theme-CBi4L4pb.js";import{r as u}from"./index-BP8_t0zE.js";import{g as se,i as ae,O as ie}from"./OptionalPortal-pP32-1nJ.js";import{u as be}from"./DirectionProvider-Bt7M7wKl.js";import{u as le,s as pe,d as Te,e as De,h as Re,o as Fe,f as Oe,b as Ce,i as Ee,j as Me,k as je,m as Ge,n as Ne,p as Ie,q as Se,a as ke,g as ze,F as Ae}from"./use-floating-auto-update-zUEi8vAS.js";import{a as Le,T as Be}from"./Transition-BCGcMdvv.js";import{u as ce}from"./use-merged-ref-Zmja8g2s.js";import{u as Ue}from"./use-id-Cc9noPIB.js";function de(e,o){return Array.isArray(e)?[...e].reduce((t,n)=>({...t,...de(n,o)}),{}):typeof e=="function"?e(o):e??{}}const _e={duration:100,transition:"fade"};function $e(e,o){return{..._e,...o,...e}}function qe({offset:e,position:o,defaultOpened:t}){const[n,f]=u.useState(t),g=u.useRef(),{x:l,y:w,elements:h,refs:a,update:v,placement:x}=le({placement:o,middleware:[pe({crossAxis:!0,padding:5,rootBoundary:"document"})]}),D=x.includes("right")?e:o.includes("left")?e*-1:0,m=x.includes("bottom")?e:o.includes("top")?e*-1:0,p=u.useCallback(({clientX:i,clientY:s})=>{a.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:i,y:s,left:i+D,top:s+m,right:i,bottom:s}}})},[h.reference]);return u.useEffect(()=>{if(a.floating.current){const i=g.current;i.addEventListener("mousemove",p);const s=Te(a.floating.current);return s.forEach(y=>{y.addEventListener("scroll",v)}),()=>{i.removeEventListener("mousemove",p),s.forEach(y=>{y.removeEventListener("scroll",v)})}}},[h.reference,a.floating.current,v,p,n]),{handleMouseMove:p,x:l,y:w,opened:n,setOpened:f,boundaryRef:g,floating:a.setFloating}}var z={tooltip:"m_1b3c8819",arrow:"m_f898399f"};const He={refProp:"ref",withinPortal:!0,offset:10,defaultOpened:!1,position:"right",zIndex:se("popover")},Ve=te((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":o===void 0?void 0:ne(o),"--tooltip-bg":t?re(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),V=W((e,o)=>{const t=k("TooltipFloating",He,e),{children:n,refProp:f,withinPortal:g,style:l,className:w,classNames:h,styles:a,unstyled:v,radius:x,color:D,label:m,offset:p,position:i,multiline:s,zIndex:y,disabled:j,defaultOpened:R,variant:F,vars:O,portalProps:P,...C}=t,E=we(),c=ee({name:"TooltipFloating",props:t,classes:z,className:w,style:l,classNames:h,styles:a,unstyled:v,rootSelector:"tooltip",vars:O,varsResolver:Ve}),{handleMouseMove:A,x:N,y:I,opened:L,boundaryRef:B,floating:U,setOpened:S}=qe({offset:p,position:i,defaultOpened:R});if(!ae(n))throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const _=ce(B,n.ref,o),$=M=>{var b,T;(T=(b=n.props).onMouseEnter)==null||T.call(b,M),A(M),S(!0)},q=M=>{var b,T;(T=(b=n.props).onMouseLeave)==null||T.call(b,M),S(!1)};return r.jsxs(r.Fragment,{children:[r.jsx(ie,{...P,withinPortal:g,children:r.jsx(oe,{...C,...c("tooltip",{style:{...de(l,E),zIndex:y,display:!j&&L?"block":"none",top:(I&&Math.round(I))??"",left:(N&&Math.round(N))??""}}),variant:F,ref:U,mod:{multiline:s},children:m})}),u.cloneElement(n,{...n.props,[f]:_,onMouseEnter:$,onMouseLeave:q})]})});V.classes=z;V.displayName="@mantine/core/TooltipFloating";const ue=u.createContext(!1),Xe=ue.Provider,Ye=()=>u.useContext(ue),Ze={openDelay:0,closeDelay:0};function X(e){const{openDelay:o,closeDelay:t,children:n}=k("TooltipGroup",Ze,e);return r.jsx(Xe,{value:!0,children:r.jsx(De,{delay:{open:o,close:t},children:n})})}X.displayName="@mantine/core/TooltipGroup";X.extend=e=>e;function Je(e){var P,C,E;const[o,t]=u.useState(e.defaultOpened),f=typeof e.opened=="boolean"?e.opened:o,g=Ye(),l=Ue(),{delay:w,currentId:h,setCurrentId:a}=Re(),v=u.useCallback(c=>{t(c),c&&a(l)},[a,l]),{x,y:D,context:m,refs:p,update:i,placement:s,middlewareData:{arrow:{x:y,y:j}={}}}=le({strategy:e.strategy,placement:e.position,open:f,onOpenChange:v,middleware:[Fe(e.offset),pe({padding:8}),Oe(),Ce({element:e.arrowRef,padding:e.arrowOffset}),...e.inline?[Ee()]:[]]}),{getReferenceProps:R,getFloatingProps:F}=Me([je(m,{enabled:(P=e.events)==null?void 0:P.hover,delay:g?w:{open:e.openDelay,close:e.closeDelay},mouseOnly:!((C=e.events)!=null&&C.touch)}),Ge(m,{enabled:(E=e.events)==null?void 0:E.focus,visibleOnly:!0}),Ne(m,{role:"tooltip"}),Ie(m,{enabled:typeof e.opened>"u"}),Se(m,{id:l})]);ke({opened:f,position:e.position,positionDependencies:e.positionDependencies,floating:{refs:p,update:i}}),Le(()=>{var c;(c=e.onPositionChange)==null||c.call(e,s)},[s]);const O=f&&h&&h!==l;return{x,y:D,arrowX:y,arrowY:j,reference:p.setReference,floating:p.setFloating,getFloatingProps:F,getReferenceProps:R,isGroupPhase:O,opened:f,placement:s}}const Q={position:"top",refProp:"ref",withinPortal:!0,inline:!1,defaultOpened:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},events:{hover:!0,focus:!1,touch:!1},zIndex:se("popover"),positionDependencies:[]},Ke=te((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":o===void 0?void 0:ne(o),"--tooltip-bg":t?re(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),G=W((e,o)=>{const t=k("Tooltip",Q,e),{children:n,position:f,refProp:g,label:l,openDelay:w,closeDelay:h,onPositionChange:a,opened:v,defaultOpened:x,withinPortal:D,radius:m,color:p,classNames:i,styles:s,unstyled:y,style:j,className:R,withArrow:F,arrowSize:O,arrowOffset:P,arrowRadius:C,arrowPosition:E,offset:c,transitionProps:A,multiline:N,events:I,zIndex:L,disabled:B,positionDependencies:U,onClick:S,onMouseEnter:_,onMouseLeave:$,inline:q,variant:M,keepMounted:b,vars:T,portalProps:fe,mod:me,floatingStrategy:Y,...he}=k("Tooltip",Q,t),{dir:ve}=be(),Z=u.useRef(null),d=Je({position:ze(ve,f),closeDelay:h,openDelay:w,onPositionChange:a,opened:v,defaultOpened:x,events:I,arrowRef:Z,arrowOffset:P,offset:typeof c=="number"?c+(F?O/2:0):c,positionDependencies:[...U,n],inline:q,strategy:Y}),H=ee({name:"Tooltip",props:t,classes:z,className:R,style:j,classNames:i,styles:s,unstyled:y,rootSelector:"tooltip",vars:T,varsResolver:Ke});if(!ae(n))throw new Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const ye=ce(d.reference,n.ref,o),J=$e(A,{duration:100,transition:"fade"});return r.jsxs(r.Fragment,{children:[r.jsx(ie,{...fe,withinPortal:D,children:r.jsx(Be,{...J,keepMounted:b,mounted:!B&&!!d.opened,duration:d.isGroupPhase?10:J.duration,children:ge=>r.jsxs(oe,{...he,"data-fixed":Y==="fixed"||void 0,variant:M,mod:[{multiline:N},me],...d.getFloatingProps({ref:d.floating,className:H("tooltip").className,style:{...H("tooltip").style,...ge,zIndex:L,top:d.y??0,left:d.x??0}}),children:[l,r.jsx(Ae,{ref:Z,arrowX:d.arrowX,arrowY:d.arrowY,visible:F,position:d.placement,arrowSize:O,arrowOffset:P,arrowRadius:C,arrowPosition:E,...H("arrow")})]})})}),u.cloneElement(n,d.getReferenceProps({onClick:S,onMouseEnter:_,onMouseLeave:$,onMouseMove:t.onMouseMove,onPointerDown:t.onPointerDown,onPointerEnter:t.onPointerEnter,[g]:ye,className:xe(R,n.props.className),...n.props}))]})});G.classes=z;G.displayName="@mantine/core/Tooltip";G.Floating=V;G.Group=X;const Qe=({width:e,label:o})=>r.jsx(G,{multiline:!0,w:e,withArrow:!0,transitionProps:{duration:200},label:o,c:K.colors.gray[9],styles:{tooltip:{backgroundColor:"white"},arrow:{backgroundColor:"white"}},children:r.jsx("span",{style:{cursor:"pointer"},children:r.jsx(Pe,{size:"20px",color:K.colors.gray[5]})})});Qe.__docgenInfo={description:"",methods:[],displayName:"TooltipComponent"};export{Qe as T};