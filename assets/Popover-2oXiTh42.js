import{j as g}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{O as xe,g as Oe}from"./OptionalPortal-Dz0ZbQ5R.js";import{g as Ce,a as De}from"./get-size-ZIjN6hcg.js";import{c as Re}from"./create-vars-resolver-BkjTnGuP.js";import{f as V,u as T,B as Te,j as be,d as Ee}from"./factory-Cmy58O58.js";import{u as Fe}from"./DirectionProvider-DOfDrEPm.js";import{F as Se,u as ze,a as Ne,o as Ie,s as je,l as M,f as $,i as K,b as ke,c as _e,g as Ae}from"./use-floating-auto-update-DNpjfyuK.js";import{c as Me}from"./create-safe-context-DdvLfAHk.js";import{r as $e}from"./default-theme-BUmQqxa3.js";import{u as Ke,F as Le}from"./FocusTrap-Qzhi2iHh.js";import{T as Ue}from"./Transition-1eDnA5u2.js";import{u as X}from"./use-merged-ref-DIizHiiB.js";import{i as Ve}from"./is-element-CqW86lAY.js";import{u as Xe}from"./use-uncontrolled-D1uLaDoI.js";import{b as L}from"./use-reduced-motion-BEzOJ-bM.js";import{u as Ye}from"./use-id-B6kcI9zl.js";const Be=()=>{};function He(e,t={active:!0}){return typeof e!="function"||!t.active?t.onKeyDown||Be:r=>{var a;r.key==="Escape"&&(e(r),(a=t.onTrigger)==null||a.call(t))}}const U=["mousedown","touchstart"];function Ze(e,t,r){const a=p.useRef();return p.useEffect(()=>{const l=i=>{const{target:n}=i??{};if(Array.isArray(r)){const s=(n==null?void 0:n.hasAttribute("data-ignore-outside-clicks"))||!document.body.contains(n)&&n.tagName!=="HTML";r.every(f=>!!f&&!i.composedPath().includes(f))&&!s&&e()}else a.current&&!a.current.contains(n)&&e()};return(t||U).forEach(i=>document.addEventListener(i,l)),()=>{(t||U).forEach(i=>document.removeEventListener(i,l))}},[a,e,r]),a}const[qe,Y]=Me("Popover component was not found in the tree");var B={dropdown:"m_38a85659",arrow:"m_a31dc6c1"};const Ge={},b=V((e,t)=>{var m,w,h,x;const r=T("PopoverDropdown",Ge,e),{className:a,style:l,vars:i,children:n,onKeyDownCapture:s,variant:c,classNames:f,styles:u,...y}=r,o=Y(),v=Ke({opened:o.opened,shouldReturnFocus:o.returnFocus}),C=o.withRoles?{"aria-labelledby":o.getTargetId(),id:o.getDropdownId(),role:"dialog",tabIndex:-1}:{},D=X(t,o.floating);return o.disabled?null:g.jsx(xe,{...o.portalProps,withinPortal:o.withinPortal,children:g.jsx(Ue,{mounted:o.opened,...o.transitionProps,transition:((m=o.transitionProps)==null?void 0:m.transition)||"fade",duration:((w=o.transitionProps)==null?void 0:w.duration)??150,keepMounted:o.keepMounted,exitDuration:typeof((h=o.transitionProps)==null?void 0:h.exitDuration)=="number"?o.transitionProps.exitDuration:(x=o.transitionProps)==null?void 0:x.duration,children:R=>g.jsx(Le,{active:o.trapFocus&&o.opened,innerRef:D,children:g.jsxs(Te,{...C,...y,variant:c,onKeyDownCapture:He(o.onClose,{active:o.closeOnEscape,onTrigger:v,onKeyDown:s}),"data-position":o.placement,"data-fixed":o.floatingStrategy==="fixed"||void 0,...o.getStyles("dropdown",{className:a,props:r,classNames:f,styles:u,style:[{...R,zIndex:o.zIndex,top:o.y??0,left:o.x??0,width:o.width==="target"?void 0:$e(o.width)},l]}),children:[n,g.jsx(Se,{ref:o.arrowRef,arrowX:o.arrowX,arrowY:o.arrowY,visible:o.withArrow,position:o.placement,arrowSize:o.arrowSize,arrowRadius:o.arrowRadius,arrowOffset:o.arrowOffset,arrowPosition:o.arrowPosition,...o.getStyles("arrow",{props:r,classNames:f,styles:u})})]})})})})});b.classes=B;b.displayName="@mantine/core/PopoverDropdown";const Je={refProp:"ref",popupType:"dialog"},H=V((e,t)=>{const{children:r,refProp:a,popupType:l,...i}=T("PopoverTarget",Je,e);if(!Ve(r))throw new Error("Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const n=i,s=Y(),c=X(s.reference,r.ref,t),f=s.withRoles?{"aria-haspopup":l,"aria-expanded":s.opened,"aria-controls":s.getDropdownId(),id:s.getTargetId()}:{};return p.cloneElement(r,{...n,...f,...s.targetProps,className:be(s.targetProps.className,n.className,r.props.className),[a]:c,...s.controlled?null:{onClick:s.onToggle}})});H.displayName="@mantine/core/PopoverTarget";function Qe(e){if(e===void 0)return{shift:!0,flip:!0};const t={...e};return e.shift===void 0&&(t.shift=!0),e.flip===void 0&&(t.flip=!0),t}function We(e,t){const r=Qe(e.middlewares),a=[Ie(e.offset)];return r.shift&&a.push(je(typeof r.shift=="boolean"?{limiter:M(),padding:5}:{limiter:M(),padding:5,...r.shift})),r.flip&&a.push(typeof r.flip=="boolean"?$():$(r.flip)),r.inline&&a.push(typeof r.inline=="boolean"?K():K(r.inline)),a.push(ke({element:e.arrowRef,padding:e.arrowOffset})),(r.size||e.width==="target")&&a.push(_e({...typeof r.size=="boolean"?{}:r.size,apply({rects:l,availableWidth:i,availableHeight:n,...s}){var u;const f=((u=t().refs.floating.current)==null?void 0:u.style)??{};r.size&&(typeof r.size=="object"&&r.size.apply?r.size.apply({rects:l,availableWidth:i,availableHeight:n,...s}):Object.assign(f,{maxWidth:`${i}px`,maxHeight:`${n}px`})),e.width==="target"&&Object.assign(f,{width:`${l.reference.width}px`})}})),a}function eo(e){const[t,r,a]=Xe({value:e.opened,defaultValue:e.defaultOpened,finalValue:!1,onChange:e.onChange}),l=()=>{var s;t&&((s=e.onClose)==null||s.call(e),r(!1))},i=()=>{var s,c;t?((s=e.onClose)==null||s.call(e),r(!1)):((c=e.onOpen)==null||c.call(e),r(!0))},n=ze({strategy:e.strategy,placement:e.position,middleware:We(e,()=>n)});return Ne({opened:t,position:e.position,positionDependencies:e.positionDependencies||[],floating:n}),L(()=>{var s;(s=e.onPositionChange)==null||s.call(e,n.placement)},[n.placement]),L(()=>{var s,c;a||(e.opened?(c=e.onOpen)==null||c.call(e):(s=e.onClose)==null||s.call(e))},[e.opened,a]),{floating:n,controlled:typeof e.opened=="boolean",opened:t,onClose:l,onToggle:i}}const oo={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!0,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:Oe("popover"),__staticSelector:"Popover",width:"max-content"},ro=Re((e,{radius:t,shadow:r})=>({dropdown:{"--popover-radius":t===void 0?void 0:Ce(t),"--popover-shadow":De(r)}}));function O(e){var N,I,j,k,_,A;const t=T("Popover",oo,e),{children:r,position:a,offset:l,onPositionChange:i,positionDependencies:n,opened:s,transitionProps:c,width:f,middlewares:u,withArrow:y,arrowSize:o,arrowOffset:v,arrowRadius:C,arrowPosition:D,unstyled:m,classNames:w,styles:h,closeOnClickOutside:x,withinPortal:R,portalProps:Z,closeOnEscape:q,clickOutsideEvents:G,trapFocus:J,onClose:Q,onOpen:W,onChange:ee,zIndex:oe,radius:re,shadow:te,id:se,defaultOpened:ae,__staticSelector:E,withRoles:ne,disabled:ie,returnFocus:le,variant:de,keepMounted:ce,vars:fe,floatingStrategy:F,...pe}=t,ue=Ee({name:E,props:t,classes:B,classNames:w,styles:h,unstyled:m,rootSelector:"dropdown",vars:fe,varsResolver:ro}),S=p.useRef(null),[ge,me]=p.useState(null),[we,he]=p.useState(null),{dir:Pe}=Fe(),z=Ye(se),d=eo({middlewares:u,width:f,position:Ae(Pe,a),offset:typeof l=="number"?l+(y?o/2:0):l,arrowRef:S,arrowOffset:v,onPositionChange:i,positionDependencies:n,opened:s,defaultOpened:ae,onChange:ee,onOpen:W,onClose:Q,strategy:F});Ze(()=>x&&d.onClose(),G,[ge,we]);const ye=p.useCallback(P=>{me(P),d.floating.refs.setReference(P)},[d.floating.refs.setReference]),ve=p.useCallback(P=>{he(P),d.floating.refs.setFloating(P)},[d.floating.refs.setFloating]);return g.jsx(qe,{value:{returnFocus:le,disabled:ie,controlled:d.controlled,reference:ye,floating:ve,x:d.floating.x,y:d.floating.y,arrowX:(j=(I=(N=d.floating)==null?void 0:N.middlewareData)==null?void 0:I.arrow)==null?void 0:j.x,arrowY:(A=(_=(k=d.floating)==null?void 0:k.middlewareData)==null?void 0:_.arrow)==null?void 0:A.y,opened:d.opened,arrowRef:S,transitionProps:c,width:f,withArrow:y,arrowSize:o,arrowOffset:v,arrowRadius:C,arrowPosition:D,placement:d.floating.placement,trapFocus:J,withinPortal:R,portalProps:Z,zIndex:oe,radius:re,shadow:te,closeOnEscape:q,onClose:d.onClose,onToggle:d.onToggle,getTargetId:()=>`${z}-target`,getDropdownId:()=>`${z}-dropdown`,withRoles:ne,targetProps:pe,__staticSelector:E,classNames:w,styles:h,unstyled:m,variant:de,keepMounted:ce,getStyles:ue,floatingStrategy:F},children:r})}O.Target=H;O.Dropdown=b;O.displayName="@mantine/core/Popover";O.extend=e=>e;export{O as P};
