import{j as u}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{u as oo}from"./use-resolved-styles-api-9Hl1n5Yq.js";import{f as E,u as N,d as Ie,B,j as to}from"./factory-Cmy58O58.js";import{r as le}from"./default-theme-BUmQqxa3.js";import{b as ce,c as De}from"./get-size-ZIjN6hcg.js";import{c as je}from"./create-vars-resolver-BkjTnGuP.js";import{P as Z}from"./Popover-2oXiTh42.js";import{c as ro}from"./create-safe-context-DdvLfAHk.js";import{C as no}from"./CloseButton-Bf40-Csk.js";import{i as ue}from"./is-element-CqW86lAY.js";import{u as de}from"./use-merged-ref-DIizHiiB.js";import{u as Pe}from"./use-id-B6kcI9zl.js";import{I as so}from"./Input-2PvRR_UE.js";import{u as ie}from"./use-uncontrolled-D1uLaDoI.js";import{S as ao}from"./ScrollArea-D4tNmDXS.js";import{I as ke}from"./InputBase-Dxa36rRv.js";function lo(e){const o=p.useRef();return p.useEffect(()=>{o.current=e},[e]),o.current}function Te(e){return typeof e=="string"?{value:e,label:e}:"value"in e&&!("label"in e)?{value:e.value,label:e.value,disabled:e.disabled}:typeof e=="number"?{value:e.toString(),label:e.toString()}:"group"in e?{group:e.group,items:e.items.map(o=>Te(o))}:e}function co(e){return e?e.map(o=>Te(o)):[]}function _e(e){return e.reduce((o,t)=>"group"in t?{...o,..._e(t.items)}:(o[t.value]=t,o),{})}var A={dropdown:"m_88b62a41",search:"m_985517d8",options:"m_b2821a6e",option:"m_92253aa5",empty:"m_2530cd1d",header:"m_858f94bd",footer:"m_82b967cb",group:"m_254f3e4f",groupLabel:"m_2bb2e9e5",chevron:"m_2943220b",optionsDropdownOption:"m_390b5f4",optionsDropdownCheckIcon:"m_8ee53fc2"};const io={error:null},uo=je((e,{size:o})=>({chevron:{"--combobox-chevron-size":ce(o,"combobox-chevron-size")}})),pe=E((e,o)=>{const t=N("ComboboxChevron",io,e),{size:r,error:s,style:a,className:n,classNames:l,styles:c,unstyled:i,vars:b,mod:d,...f}=t,g=Ie({name:"ComboboxChevron",classes:A,props:t,style:a,className:n,classNames:l,styles:c,unstyled:i,vars:b,varsResolver:uo,rootSelector:"chevron"});return u.jsx(B,{component:"svg",...f,...g("chevron"),size:r,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",mod:["combobox-chevron",{error:s},d],ref:o,children:u.jsx("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})});pe.classes=A;pe.displayName="@mantine/core/ComboboxChevron";const[po,P]=ro("Combobox component was not found in tree"),Re=p.forwardRef(({size:e,onMouseDown:o,onClick:t,onClear:r,...s},a)=>u.jsx(no,{ref:a,size:e||"sm",variant:"transparent",tabIndex:-1,"aria-hidden":!0,...s,onMouseDown:n=>{n.preventDefault(),o==null||o(n)},onClick:n=>{r(),t==null||t(n)}}));Re.displayName="@mantine/core/ComboboxClearButton";const bo={},be=E((e,o)=>{const{classNames:t,styles:r,className:s,style:a,hidden:n,...l}=N("ComboboxDropdown",bo,e),c=P();return u.jsx(Z.Dropdown,{...l,ref:o,role:"presentation","data-hidden":n||void 0,...c.getStyles("dropdown",{className:s,style:a,classNames:t,styles:r})})});be.classes=A;be.displayName="@mantine/core/ComboboxDropdown";const mo={refProp:"ref"},$e=E((e,o)=>{const{children:t,refProp:r}=N("ComboboxDropdownTarget",mo,e);if(P(),!ue(t))throw new Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return u.jsx(Z.Target,{ref:o,refProp:r,children:t})});$e.displayName="@mantine/core/ComboboxDropdownTarget";const fo={},me=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,...l}=N("ComboboxEmpty",fo,e),c=P();return u.jsx(B,{ref:o,...c.getStyles("empty",{className:r,classNames:t,styles:a,style:s}),...l})});me.classes=A;me.displayName="@mantine/core/ComboboxEmpty";function fe({onKeyDown:e,withKeyboardNavigation:o,withAriaAttributes:t,withExpandedAttribute:r,targetType:s,autoComplete:a}){const n=P(),[l,c]=p.useState(null),i=d=>{if(e==null||e(d),!n.readOnly&&o){if(d.nativeEvent.isComposing)return;if(d.nativeEvent.code==="ArrowDown"&&(d.preventDefault(),n.store.dropdownOpened?c(n.store.selectNextOption()):(n.store.openDropdown("keyboard"),c(n.store.selectActiveOption()))),d.nativeEvent.code==="ArrowUp"&&(d.preventDefault(),n.store.dropdownOpened?c(n.store.selectPreviousOption()):(n.store.openDropdown("keyboard"),c(n.store.selectActiveOption()))),d.nativeEvent.code==="Enter"||d.nativeEvent.code==="NumpadEnter"){if(d.nativeEvent.keyCode===229)return;const f=n.store.getSelectedOptionIndex();n.store.dropdownOpened&&f!==-1?(d.preventDefault(),n.store.clickSelectedOption()):s==="button"&&(d.preventDefault(),n.store.openDropdown("keyboard"))}d.nativeEvent.code==="Escape"&&n.store.closeDropdown("keyboard"),d.nativeEvent.code==="Space"&&s==="button"&&(d.preventDefault(),n.store.toggleDropdown("keyboard"))}};return{...t?{"aria-haspopup":"listbox","aria-expanded":r&&!!(n.store.listId&&n.store.dropdownOpened)||void 0,"aria-controls":n.store.listId,"aria-activedescendant":n.store.dropdownOpened&&l||void 0,autoComplete:a,"data-expanded":n.store.dropdownOpened||void 0,"data-mantine-stop-propagation":n.store.dropdownOpened||void 0}:{},onKeyDown:i}}const xo={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},Fe=E((e,o)=>{const{children:t,refProp:r,withKeyboardNavigation:s,withAriaAttributes:a,withExpandedAttribute:n,targetType:l,autoComplete:c,...i}=N("ComboboxEventsTarget",xo,e);if(!ue(t))throw new Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const b=P(),d=fe({targetType:l,withAriaAttributes:a,withKeyboardNavigation:s,withExpandedAttribute:n,onKeyDown:t.props.onKeyDown,autoComplete:c});return p.cloneElement(t,{...d,...i,[r]:de(o,b.store.targetRef,t==null?void 0:t.ref)})});Fe.displayName="@mantine/core/ComboboxEventsTarget";const ho={},xe=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,...l}=N("ComboboxFooter",ho,e),c=P();return u.jsx(B,{ref:o,...c.getStyles("footer",{className:r,classNames:t,style:s,styles:a}),...l,onMouseDown:i=>{i.preventDefault()}})});xe.classes=A;xe.displayName="@mantine/core/ComboboxFooter";const go={},he=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,children:l,label:c,...i}=N("ComboboxGroup",go,e),b=P();return u.jsxs(B,{ref:o,...b.getStyles("group",{className:r,classNames:t,style:s,styles:a}),...i,children:[c&&u.jsx("div",{...b.getStyles("groupLabel",{classNames:t,styles:a}),children:c}),l]})});he.classes=A;he.displayName="@mantine/core/ComboboxGroup";const vo={},ge=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,...l}=N("ComboboxHeader",vo,e),c=P();return u.jsx(B,{ref:o,...c.getStyles("header",{className:r,classNames:t,style:s,styles:a}),...l,onMouseDown:i=>{i.preventDefault()}})});ge.classes=A;ge.displayName="@mantine/core/ComboboxHeader";function Le({value:e,valuesDivider:o=",",...t}){return u.jsx("input",{type:"hidden",value:Array.isArray(e)?e.join(o):e||"",...t})}Le.displayName="@mantine/core/ComboboxHiddenInput";const yo={},ve=E((e,o)=>{const t=N("ComboboxOption",yo,e),{classNames:r,className:s,style:a,styles:n,vars:l,onClick:c,id:i,active:b,onMouseDown:d,onMouseOver:f,disabled:g,selected:D,mod:k,...S}=t,v=P(),$=p.useId(),w=i||$;return u.jsx(B,{...v.getStyles("option",{className:s,classNames:r,styles:n,style:a}),...S,ref:o,id:w,mod:["combobox-option",{"combobox-active":b,"combobox-disabled":g,"combobox-selected":D},k],role:"option",onClick:h=>{var I;g?h.preventDefault():((I=v.onOptionSubmit)==null||I.call(v,t.value,t),c==null||c(h))},onMouseDown:h=>{h.preventDefault(),d==null||d(h)},onMouseOver:h=>{v.resetSelectionOnOptionHover&&v.store.resetSelectedOption(),f==null||f(h)}})});ve.classes=A;ve.displayName="@mantine/core/ComboboxOption";const wo={},ye=E((e,o)=>{const t=N("ComboboxOptions",wo,e),{classNames:r,className:s,style:a,styles:n,id:l,onMouseDown:c,labelledBy:i,...b}=t,d=P(),f=Pe(l);return p.useEffect(()=>{d.store.setListId(f)},[f]),u.jsx(B,{ref:o,...d.getStyles("options",{className:s,style:a,classNames:r,styles:n}),...b,id:f,role:"listbox","aria-labelledby":i,onMouseDown:g=>{g.preventDefault(),c==null||c(g)}})});ye.classes=A;ye.displayName="@mantine/core/ComboboxOptions";const Co={withAriaAttributes:!0,withKeyboardNavigation:!0},we=E((e,o)=>{const t=N("ComboboxSearch",Co,e),{classNames:r,styles:s,unstyled:a,vars:n,withAriaAttributes:l,onKeyDown:c,withKeyboardNavigation:i,size:b,...d}=t,f=P(),g=f.getStyles("search"),D=fe({targetType:"input",withAriaAttributes:l,withKeyboardNavigation:i,withExpandedAttribute:!1,onKeyDown:c,autoComplete:"off"});return u.jsx(so,{ref:de(o,f.store.searchRef),classNames:[{input:g.className},r],styles:[{input:g.style},s],size:b||f.size,...D,...d,__staticSelector:"Combobox"})});we.classes=A;we.displayName="@mantine/core/ComboboxSearch";const So={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},Ve=E((e,o)=>{const{children:t,refProp:r,withKeyboardNavigation:s,withAriaAttributes:a,withExpandedAttribute:n,targetType:l,autoComplete:c,...i}=N("ComboboxTarget",So,e);if(!ue(t))throw new Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const b=P(),d=fe({targetType:l,withAriaAttributes:a,withKeyboardNavigation:s,withExpandedAttribute:n,onKeyDown:t.props.onKeyDown,autoComplete:c}),f=p.cloneElement(t,{...d,...i});return u.jsx(Z.Target,{ref:de(o,b.store.targetRef),children:f})});Ve.displayName="@mantine/core/ComboboxTarget";function Oo(e,o,t){for(let r=e-1;r>=0;r-=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r;if(t){for(let r=o.length-1;r>-1;r-=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r}return e}function Ao(e,o,t){for(let r=e+1;r<o.length;r+=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r;if(t){for(let r=0;r<o.length;r+=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r}return e}function No(e){for(let o=0;o<e.length;o+=1)if(!e[o].hasAttribute("data-combobox-disabled"))return o;return-1}function Be({defaultOpened:e,opened:o,onOpenedChange:t,onDropdownClose:r,onDropdownOpen:s,loop:a=!0,scrollBehavior:n="instant"}={}){const[l,c]=ie({value:o,defaultValue:e,finalValue:!1,onChange:t}),i=p.useRef(null),b=p.useRef(-1),d=p.useRef(null),f=p.useRef(null),g=p.useRef(-1),D=p.useRef(-1),k=p.useRef(-1),S=p.useCallback((m="unknown")=>{l||(c(!0),s==null||s(m))},[c,s,l]),v=p.useCallback((m="unknown")=>{l&&(c(!1),r==null||r(m))},[c,r,l]),$=p.useCallback((m="unknown")=>{l?v(m):S(m)},[v,S,l]),w=p.useCallback(()=>{const m=document.querySelector(`#${i.current} [data-combobox-selected]`);m==null||m.removeAttribute("data-combobox-selected"),m==null||m.removeAttribute("aria-selected")},[]),h=p.useCallback(m=>{const C=document.getElementById(i.current),y=C==null?void 0:C.querySelectorAll("[data-combobox-option]");if(!y)return null;const O=m>=y.length?0:m<0?y.length-1:m;return b.current=O,y!=null&&y[O]&&!y[O].hasAttribute("data-combobox-disabled")?(w(),y[O].setAttribute("data-combobox-selected","true"),y[O].setAttribute("aria-selected","true"),y[O].scrollIntoView({block:"nearest",behavior:n}),y[O].id):null},[n,w]),I=p.useCallback(()=>{const m=document.querySelector(`#${i.current} [data-combobox-active]`);if(m){const C=document.querySelectorAll(`#${i.current} [data-combobox-option]`),y=Array.from(C).findIndex(O=>O===m);return h(y)}return h(0)},[h]),T=p.useCallback(()=>h(Ao(b.current,document.querySelectorAll(`#${i.current} [data-combobox-option]`),a)),[h,a]),W=p.useCallback(()=>h(Oo(b.current,document.querySelectorAll(`#${i.current} [data-combobox-option]`),a)),[h,a]),J=p.useCallback(()=>h(No(document.querySelectorAll(`#${i.current} [data-combobox-option]`))),[h]),Q=p.useCallback((m="selected",C)=>{k.current=window.setTimeout(()=>{var M;const y=document.querySelectorAll(`#${i.current} [data-combobox-option]`),O=Array.from(y).findIndex(te=>te.hasAttribute(`data-combobox-${m}`));b.current=O,C!=null&&C.scrollIntoView&&((M=y[O])==null||M.scrollIntoView({block:"nearest",behavior:n}))},0)},[]),X=p.useCallback(()=>{b.current=-1,w()},[w]),H=p.useCallback(()=>{const m=document.querySelectorAll(`#${i.current} [data-combobox-option]`),C=m==null?void 0:m[b.current];C==null||C.click()},[]),L=p.useCallback(m=>{i.current=m},[]),Y=p.useCallback(()=>{g.current=window.setTimeout(()=>d.current.focus(),0)},[]),ee=p.useCallback(()=>{D.current=window.setTimeout(()=>f.current.focus(),0)},[]),oe=p.useCallback(()=>b.current,[]);return p.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(D.current),window.clearTimeout(k.current)},[]),{dropdownOpened:l,openDropdown:S,closeDropdown:v,toggleDropdown:$,selectedOptionIndex:b.current,getSelectedOptionIndex:oe,selectOption:h,selectFirstOption:J,selectActiveOption:I,selectNextOption:T,selectPreviousOption:W,resetSelectedOption:X,updateSelectedOptionIndex:Q,listId:i.current,setListId:L,clickSelectedOption:H,searchRef:d,focusSearchInput:Y,targetRef:f,focusTarget:ee}}const Eo={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0}},Do=je((e,{size:o,dropdownPadding:t})=>({options:{"--combobox-option-fz":De(o),"--combobox-option-padding":ce(o,"combobox-option-padding")},dropdown:{"--combobox-padding":t===void 0?void 0:le(t),"--combobox-option-fz":De(o),"--combobox-option-padding":ce(o,"combobox-option-padding")}}));function x(e){const o=N("Combobox",Eo,e),{classNames:t,styles:r,unstyled:s,children:a,store:n,vars:l,onOptionSubmit:c,onClose:i,size:b,dropdownPadding:d,resetSelectionOnOptionHover:f,__staticSelector:g,readOnly:D,...k}=o,S=Be(),v=n||S,$=Ie({name:g||"Combobox",classes:A,props:o,classNames:t,styles:r,unstyled:s,vars:l,varsResolver:Do}),w=()=>{i==null||i(),v.closeDropdown()};return u.jsx(po,{value:{getStyles:$,store:v,onOptionSubmit:c,size:b,resetSelectionOnOptionHover:f,readOnly:D},children:u.jsx(Z,{opened:v.dropdownOpened,...k,onClose:w,withRoles:!1,unstyled:s,children:a})})}const Io=e=>e;x.extend=Io;x.classes=A;x.displayName="@mantine/core/Combobox";x.Target=Ve;x.Dropdown=be;x.Options=ye;x.Option=ve;x.Search=we;x.Empty=me;x.Chevron=pe;x.Footer=xe;x.Header=ge;x.EventsTarget=Fe;x.DropdownTarget=$e;x.Group=he;x.ClearButton=Re;x.HiddenInput=Le;function jo({size:e,style:o,...t}){const r=e!==void 0?{width:le(e),height:le(e),...o}:o;return u.jsx("svg",{viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:r,"aria-hidden":!0,...t,children:u.jsx("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function G(e){return"group"in e}function He({options:e,search:o,limit:t}){const r=o.trim().toLowerCase(),s=[];for(let a=0;a<e.length;a+=1){const n=e[a];if(s.length===t)return s;G(n)&&s.push({group:n.group,items:He({options:n.items,search:o,limit:t-s.length})}),G(n)||n.label.toLowerCase().includes(r)&&s.push(n)}return s}function Po(e){if(e.length===0)return!0;for(const o of e)if(!("group"in o)||o.items.length>0)return!1;return!0}function ze(e,o=new Set){if(Array.isArray(e))for(const t of e)if(G(t))ze(t.items,o);else{if(typeof t.value>"u")throw new Error("[@mantine/core] Each option must have value property");if(typeof t.value!="string")throw new Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof t.value}`);if(o.has(t.value))throw new Error(`[@mantine/core] Duplicate options are not supported. Option with value "${t.value}" was provided more than once`);o.add(t.value)}}function ko(e,o){return Array.isArray(e)?e.includes(o):e===o}function qe({data:e,withCheckIcon:o,value:t,checkIconPosition:r,unstyled:s,renderOption:a}){if(!G(e)){const l=ko(t,e.value),c=o&&l&&u.jsx(jo,{className:A.optionsDropdownCheckIcon}),i=u.jsxs(u.Fragment,{children:[r==="left"&&c,u.jsx("span",{children:e.label}),r==="right"&&c]});return u.jsx(x.Option,{value:e.value,disabled:e.disabled,className:to({[A.optionsDropdownOption]:!s}),"data-reverse":r==="right"||void 0,"data-checked":l||void 0,"aria-selected":l,active:l,children:typeof a=="function"?a({option:e,checked:l}):i})}const n=e.items.map(l=>u.jsx(qe,{data:l,value:t,unstyled:s,withCheckIcon:o,checkIconPosition:r,renderOption:a},l.value));return u.jsx(x.Group,{label:e.group,children:n})}function To({data:e,hidden:o,hiddenWhenEmpty:t,filter:r,search:s,limit:a,maxDropdownHeight:n,withScrollArea:l=!0,filterOptions:c=!0,withCheckIcon:i=!1,value:b,checkIconPosition:d,nothingFoundMessage:f,unstyled:g,labelId:D,renderOption:k,scrollAreaProps:S,"aria-label":v}){ze(e);const w=typeof s=="string"?(r||He)({options:e,search:c?s:"",limit:a??1/0}):e,h=Po(w),I=w.map(T=>u.jsx(qe,{data:T,withCheckIcon:i,value:b,checkIconPosition:d,unstyled:g,renderOption:k},G(T)?T.group:T.value));return u.jsx(x.Dropdown,{hidden:o||t&&h,children:u.jsxs(x.Options,{labelledBy:D,"aria-label":v,children:[l?u.jsx(ao.Autosize,{mah:n??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...S,children:I}):I,h&&f&&u.jsx(x.Empty,{children:f})]})})}const _o={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},Ke=E((e,o)=>{const t=N("Select",_o,e),{classNames:r,styles:s,unstyled:a,vars:n,dropdownOpened:l,defaultDropdownOpened:c,onDropdownClose:i,onDropdownOpen:b,onFocus:d,onBlur:f,onClick:g,onChange:D,data:k,value:S,defaultValue:v,selectFirstOptionOnChange:$,onOptionSubmit:w,comboboxProps:h,readOnly:I,disabled:T,filter:W,limit:J,withScrollArea:Q,maxDropdownHeight:X,size:H,searchable:L,rightSection:Y,checkIconPosition:ee,withCheckIcon:oe,nothingFoundMessage:m,name:C,form:y,searchValue:O,defaultSearchValue:M,onSearchChange:te,allowDeselect:Ge,error:Ce,rightSectionPointerEvents:Me,id:Ue,clearable:Ze,clearButtonProps:We,hiddenInputProps:Je,renderOption:Qe,onClear:re,autoComplete:Xe,scrollAreaProps:Ye,...U}=t,ne=p.useMemo(()=>co(k),[k]),K=p.useMemo(()=>_e(ne),[ne]),Se=Pe(Ue),[F,Oe,eo]=ie({value:S,defaultValue:v,finalValue:null,onChange:D}),_=typeof F=="string"?K[F]:void 0,z=lo(_),[se,q]=ie({value:O,defaultValue:M,finalValue:_?_.label:"",onChange:te}),R=Be({opened:l,defaultOpened:c,onDropdownOpen:()=>{b==null||b(),R.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{i==null||i(),R.resetSelectedOption()}}),{resolvedClassNames:Ae,resolvedStyles:Ne}=oo({props:t,styles:s,classNames:r});p.useEffect(()=>{$&&R.selectFirstOption()},[$,F]),p.useEffect(()=>{S===null&&q(""),typeof S=="string"&&_&&((z==null?void 0:z.value)!==_.value||(z==null?void 0:z.label)!==_.label)&&q(_.label)},[S,_]);const Ee=Ze&&!!F&&!T&&!I&&u.jsx(x.ClearButton,{size:H,...We,onClear:()=>{Oe(null,null),q(""),re==null||re()}});return u.jsxs(u.Fragment,{children:[u.jsxs(x,{store:R,__staticSelector:"Select",classNames:Ae,styles:Ne,unstyled:a,readOnly:I,onOptionSubmit:j=>{w==null||w(j);const V=Ge&&K[j].value===F?null:K[j],ae=V?V.value:null;ae!==F&&Oe(ae,V),!eo&&q(typeof ae=="string"&&(V==null?void 0:V.label)||""),R.closeDropdown()},size:H,...h,children:[u.jsx(x.Target,{targetType:L?"input":"button",autoComplete:Xe,children:u.jsx(ke,{id:Se,ref:o,rightSection:Y||Ee||u.jsx(x.Chevron,{size:H,error:Ce,unstyled:a}),rightSectionPointerEvents:Me||(Ee?"all":"none"),...U,size:H,__staticSelector:"Select",disabled:T,readOnly:I||!L,value:se,onChange:j=>{q(j.currentTarget.value),R.openDropdown(),$&&R.selectFirstOption()},onFocus:j=>{L&&R.openDropdown(),d==null||d(j)},onBlur:j=>{var V;L&&R.closeDropdown(),q(F!=null&&((V=K[F])==null?void 0:V.label)||""),f==null||f(j)},onClick:j=>{L?R.openDropdown():R.toggleDropdown(),g==null||g(j)},classNames:Ae,styles:Ne,unstyled:a,pointer:!L,error:Ce})}),u.jsx(To,{data:ne,hidden:I||T,filter:W,search:se,limit:J,hiddenWhenEmpty:!m,withScrollArea:Q,maxDropdownHeight:X,filterOptions:L&&(_==null?void 0:_.label)!==se,value:F,checkIconPosition:ee,withCheckIcon:oe,nothingFoundMessage:m,unstyled:a,labelId:U.label?`${Se}-label`:void 0,"aria-label":U.label?void 0:U["aria-label"],renderOption:Qe,scrollAreaProps:Ye})]}),u.jsx(x.HiddenInput,{value:F,name:C,form:y,disabled:T,...Je})]})});Ke.classes={...ke.classes,...x.classes};Ke.displayName="@mantine/core/Select";export{Ke as S};