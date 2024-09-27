import{j as G,f as $e,u as Ze,a as We,y as ze,c as Ge,e as qe}from"./factory-BYdAncit.js";import{b as He}from"./index-DHgPtaHi.js";import{d as Xe}from"./styled-components.browser.esm-BzjHiQVu.js";import{t as Ce}from"./theme-CBi4L4pb.js";import{a as ce,r as j}from"./index-BP8_t0zE.js";import{u as Je,I as Oe}from"./InputBase-BAFZ9pBH.js";import{U as Re}from"./UnstyledButton-BYy9qxQd.js";import{u as Qe}from"./use-uncontrolled-D1uLaDoI.js";import{a as Ye,u as et}from"./use-merged-ref-Zmja8g2s.js";import{c as xe}from"./clamp-DTmYCdls.js";function Me(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var pe;(function(e){e.event="event",e.props="prop"})(pe||(pe={}));function ae(){}function tt(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(o,s){return o===t[s]})||(t=n,r=e.apply(void 0,n)),r}}function Se(e){return!!(e||"").match(/\d/)}function de(e){return e==null}function rt(e){return typeof e=="number"&&isNaN(e)}function Pe(e){return de(e)||rt(e)||typeof e=="number"&&!isFinite(e)}function je(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function at(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function nt(e,t,r){var n=at(r),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}function it(e){var t=j.useRef(e);t.current=e;var r=j.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function De(e,t){t===void 0&&(t=!0);var r=e[0]==="-",n=r&&t;e=e.replace("-","");var a=e.split("."),o=a[0],s=a[1]||"";return{beforeDecimal:o,afterDecimal:s,hasNegation:r,addNegation:n}}function ot(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}function Le(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function Ee(e,t){return Array(t+1).join(e)}function ke(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(o=Number(o),!o)return r+a;a=a.replace(".","");var s=1+o,b=a.length;return s<0?a="0."+Ee("0",Math.abs(s))+a:s>=b?a=a+Ee("0",s-b):a=(a.substring(0,s)||"0")+"."+a.substring(s),r+a}function Ae(e,t,r){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||r)&&t,a=De(e),o=a.beforeDecimal,s=a.afterDecimal,b=a.hasNegation,y=parseFloat("0."+(s||"0")),h=s.length<=t?"0."+s:y.toFixed(t),N=h.split("."),x=o;o&&Number(N[0])&&(x=o.split("").reverse().reduce(function(R,E,g){return R.length>g?(Number(R[0])+Number(E)).toString()+R.substring(1,R.length):E+R},N[0]));var m=Le(N[1]||"",t,r),S=b?"-":"",f=n?".":"";return""+S+x+f+m}function ue(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Ke=tt(function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}),ut=function(e,t){var r=Math.min(e.selectionStart,t);return{from:{start:r,end:e.selectionEnd},to:{start:r,end:t}}};function lt(e,t,r){return Math.min(Math.max(e,t),r)}function we(e){return Math.max(e.selectionStart,e.selectionEnd)}function st(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function ft(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function ct(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function dt(e,t,r,n,a,o,s){s===void 0&&(s=ct);var b=a.findIndex(function(q){return q}),y=e.slice(0,b);!t&&!r.startsWith(y)&&(t=y,r=y+r,n=n+y.length);for(var h=r.length,N=e.length,x={},m=new Array(h),S=0;S<h;S++){m[S]=-1;for(var f=0,R=N;f<R;f++){var E=s({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:S,formattedValueIndex:f});if(E&&x[f]!==!0){m[S]=f,x[f]=!0;break}}}for(var g=n;g<h&&(m[g]===-1||!o(r[g]));)g++;var P=g===h||m[g]===-1?N:m[g];for(g=n-1;g>0&&m[g]===-1;)g--;var F=g===-1||m[g]===-1?0:m[g]+1;return F>P?P:n-F<P-n?F:P}function Te(e,t,r,n){var a=e.length;if(t=lt(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function vt(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(Se(e[r])||Se(e[r-1]));return t}function Ue(e,t,r,n,a,o){o===void 0&&(o=ae);var s=it(function(f,R){var E,g;return Pe(f)?(g="",E=""):typeof f=="number"||R?(g=typeof f=="number"?ke(f):f,E=n(g)):(g=a(f,void 0),E=n(g)),{formattedValue:E,numAsString:g}}),b=j.useState(function(){return s(de(e)?t:e,r)}),y=b[0],h=b[1],N=function(f,R){f.formattedValue!==y.formattedValue&&h({formattedValue:f.formattedValue,numAsString:f.value}),o(f,R)},x=e,m=r;de(e)&&(x=y.numAsString,m=!0);var S=s(x,m);return j.useMemo(function(){h(S)},[S.formattedValue]),[y,N]}function mt(e){return e.replace(/[^0-9]/g,"")}function gt(e){return e}function ht(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,o=e.getInputRef,s=e.format;s===void 0&&(s=gt);var b=e.removeFormatting;b===void 0&&(b=mt);var y=e.defaultValue,h=e.valueIsNumericString,N=e.onValueChange,x=e.isAllowed,m=e.onChange;m===void 0&&(m=ae);var S=e.onKeyDown;S===void 0&&(S=ae);var f=e.onMouseUp;f===void 0&&(f=ae);var R=e.onFocus;R===void 0&&(R=ae);var E=e.onBlur;E===void 0&&(E=ae);var g=e.value,P=e.getCaretBoundary;P===void 0&&(P=vt);var F=e.isValidInputCharacter;F===void 0&&(F=Se);var q=e.isCharacterSame,k=Me(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),H=Ue(g,y,!!h,s,b,N),K=H[0],w=K.formattedValue,L=K.numAsString,U=H[1],W=j.useRef(),X=j.useRef({formattedValue:w,numAsString:L}),z=function(u,l){X.current={formattedValue:u.formattedValue,numAsString:u.value},U(u,l)},ee=j.useState(!1),ne=ee[0],c=ee[1],d=j.useRef(null),V=j.useRef({setCaretTimeout:null,focusTimeout:null});j.useEffect(function(){return c(!0),function(){clearTimeout(V.current.setCaretTimeout),clearTimeout(V.current.focusTimeout)}},[]);var T=s,B=function(u,l){var v=parseFloat(l);return{formattedValue:u,value:l,floatValue:isNaN(v)?void 0:v}},A=function(u,l,v){u.selectionStart===0&&u.selectionEnd===u.value.length||(ue(u,l),V.current.setCaretTimeout=setTimeout(function(){u.value===v&&u.selectionStart!==l&&ue(u,l)},0))},_=function(u,l,v){return Te(u,l,P(u),v)},te=function(u,l,v){var D=P(l),O=dt(l,w,u,v,D,F,q);return O=Te(l,O,D),O},ve=function(u){var l=u.formattedValue;l===void 0&&(l="");var v=u.input,D=u.source,O=u.event,I=u.numAsString,i;if(v){var p=u.inputValue||v.value,M=we(v);v.value=l,i=te(p,l,M),i!==void 0&&A(v,i,l)}l!==w&&z(B(l,I),{event:O,source:D})};j.useEffect(function(){var u=X.current,l=u.formattedValue,v=u.numAsString;(w!==l||L!==v)&&z(B(w,L),{event:void 0,source:pe.props})},[w,L]);var C=d.current?we(d.current):void 0,Q=typeof window<"u"?j.useLayoutEffect:j.useEffect;Q(function(){var u=d.current;if(w!==X.current.formattedValue&&u){var l=te(X.current.formattedValue,w,C);u.value=w,A(u,l,w)}},[w]);var le=function(u,l,v){var D=l.target,O=W.current?ut(W.current,D.selectionEnd):Ke(w,u),I=Object.assign(Object.assign({},O),{lastValue:w}),i=b(u,I),p=T(i);if(i=b(p,void 0),x&&!x(B(p,i))){var M=l.target,$=we(M),Z=te(u,w,$);return M.value=w,A(M,Z,w),!1}return ve({formattedValue:p,numAsString:i,inputValue:u,event:l,source:v,input:l.target}),!0},J=function(u,l){l===void 0&&(l=0);var v=u.selectionStart,D=u.selectionEnd;W.current={selectionStart:v,selectionEnd:D+l}},ie=function(u){var l=u.target,v=l.value,D=le(v,u,pe.event);D&&m(u),W.current=void 0},me=function(u){var l=u.target,v=u.key,D=l.selectionStart,O=l.selectionEnd,I=l.value;I===void 0&&(I="");var i;v==="ArrowLeft"||v==="Backspace"?i=Math.max(D-1,0):v==="ArrowRight"?i=Math.min(D+1,I.length):v==="Delete"&&(i=D);var p=0;v==="Delete"&&D===O&&(p=1);var M=v==="ArrowLeft"||v==="ArrowRight";if(i===void 0||D!==O&&!M){S(u),J(l,p);return}var $=i;if(M){var Z=v==="ArrowLeft"?"left":"right";$=_(I,i,Z),$!==i&&u.preventDefault()}else v==="Delete"&&!F(I[i])?$=_(I,i,"right"):v==="Backspace"&&!F(I[i])&&($=_(I,i,"left"));$!==i&&A(l,$,I),S(u),J(l,p)},Ne=function(u){var l=u.target,v=function(){var D=l.selectionStart,O=l.selectionEnd,I=l.value;if(I===void 0&&(I=""),D===O){var i=_(I,D);i!==D&&A(l,i,I)}};v(),requestAnimationFrame(function(){v()}),f(u),J(l)},se=function(u){u.persist&&u.persist();var l=u.target,v=u.currentTarget;d.current=l,V.current.focusTimeout=setTimeout(function(){var D=l.selectionStart,O=l.selectionEnd,I=l.value;I===void 0&&(I="");var i=_(I,D);i!==D&&!(D===0&&O===I.length)&&A(l,i,I),R(Object.assign(Object.assign({},u),{currentTarget:v}))},0)},ge=function(u){d.current=null,clearTimeout(V.current.focusTimeout),clearTimeout(V.current.setCaretTimeout),E(u)},fe=ne&&st()?"numeric":void 0,oe=Object.assign({inputMode:fe},k,{type:t,value:w,onChange:ie,onKeyDown:me,onMouseUp:Ne,onFocus:se,onBlur:ge});if(r==="text")return a?ce.createElement(ce.Fragment,null,a(w,k)||null):ce.createElement("span",Object.assign({},k,{ref:o}),w);if(n){var ye=n;return ce.createElement(ye,Object.assign({},oe,{ref:o}))}return ce.createElement("input",Object.assign({},oe,{ref:o}))}function _e(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;a===void 0&&(a="");var o=t.suffix;o===void 0&&(o="");var s=t.allowNegative,b=t.thousandsGroupStyle;if(b===void 0&&(b="thousand"),e===""||e==="-")return e;var y=be(t),h=y.thousandSeparator,N=y.decimalSeparator,x=r!==0&&e.indexOf(".")!==-1||r&&n,m=De(e,s),S=m.beforeDecimal,f=m.afterDecimal,R=m.addNegation;return r!==void 0&&(f=Le(f,r,!!n)),h&&(S=nt(S,h,b)),a&&(S=a+S),o&&(f=f+o),R&&(S="-"+S),e=S+(x&&N||"")+f,e}function be(e){var t=e.decimalSeparator;t===void 0&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return r===!0&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function pt(e,t){e===void 0&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}function St(e,t){return new RegExp("(^-)|[0-9]|"+je(e),"g")}function xt(e,t,r){return e===""?!0:!(t!=null&&t.match(/\d/))&&!(r!=null&&r.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function bt(e,t,r){var n;t===void 0&&(t=ft(e));var a=r.allowNegative,o=r.prefix;o===void 0&&(o="");var s=r.suffix;s===void 0&&(s="");var b=r.decimalScale,y=t.from,h=t.to,N=h.start,x=h.end,m=be(r),S=m.allowedDecimalSeparators,f=m.decimalSeparator,R=e[x]===f;if(Se(e)&&(e===o||e===s)&&t.lastValue==="")return e;if(x-N===1&&S.indexOf(e[N])!==-1){var E=b===0?"":f;e=e.substring(0,N)+E+e.substring(N+1,e.length)}var g=function(d,V,T){var B=!1,A=!1;o.startsWith("-")?B=!1:d.startsWith("--")?(B=!1,A=!0):s.startsWith("-")&&d.length===s.length?B=!1:d[0]==="-"&&(B=!0);var _=B?1:0;return A&&(_=2),_&&(d=d.substring(_),V-=_,T-=_),{value:d,start:V,end:T,hasNegation:B}},P=g(e,N,x),F=P.hasNegation;n=P,e=n.value,N=n.start,x=n.end;var q=g(t.lastValue,y.start,y.end),k=q.start,H=q.end,K=q.value,w=e.substring(N,x);e.length&&K.length&&(k>K.length-s.length||H<o.length)&&!(w&&s.startsWith(w))&&(e=K);var L=0;e.startsWith(o)?L+=o.length:N<o.length&&(L=N),e=e.substring(L),x-=L;var U=e.length,W=e.length-s.length;e.endsWith(s)?U=W:(x>W||x>e.length-s.length)&&(U=x),e=e.substring(0,U),e=pt(F?"-"+e:e,a),e=(e.match(St(f))||[]).join("");var X=e.indexOf(f);e=e.replace(new RegExp(je(f),"g"),function(d,V){return V===X?".":""});var z=De(e,a),ee=z.beforeDecimal,ne=z.afterDecimal,c=z.addNegation;return h.end-h.start<y.end-y.start&&ee===""&&R&&!parseFloat(ne)&&(e=c?"-":""),e}function Nt(e,t){var r=t.prefix;r===void 0&&(r="");var n=t.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),o=e[0]==="-";a.fill(!1,0,r.length+(o?1:0));var s=e.length;return a.fill(!1,s-n.length+1,s+1),a}function yt(e){var t=be(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;a===void 0&&(a="");var o=e.allowNegative;if(o===void 0&&(o=!0),r===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+r+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&o&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+o+`
    `),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}function wt(e){e=yt(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=ae);var o=e.onBlur;o===void 0&&(o=ae);var s=e.thousandSeparator,b=e.decimalScale,y=e.fixedDecimalScale,h=e.prefix;h===void 0&&(h="");var N=e.defaultValue,x=e.value,m=e.valueIsNumericString,S=e.onValueChange,f=Me(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),R=be(e),E=R.decimalSeparator,g=R.allowedDecimalSeparators,P=function(c){return _e(c,e)},F=function(c,d){return bt(c,d,e)},q=de(x)?N:x,k=m??xt(q,h,t);de(x)?de(N)||(k=k||typeof N=="number"):k=k||typeof x=="number";var H=function(c){return Pe(c)?c:(typeof c=="number"&&(c=ke(c)),k&&typeof b=="number"?Ae(c,b,!!y):c)},K=Ue(H(x),H(N),!!k,P,F,S),w=K[0],L=w.numAsString,U=w.formattedValue,W=K[1],X=function(c){var d=c.target,V=c.key,T=d.selectionStart,B=d.selectionEnd,A=d.value;if(A===void 0&&(A=""),(V==="Backspace"||V==="Delete")&&B<h.length){c.preventDefault();return}if(T!==B){a(c);return}V==="Backspace"&&A[0]==="-"&&T===h.length+1&&r&&ue(d,1),b&&y&&(V==="Backspace"&&A[T-1]===E?(ue(d,T-1),c.preventDefault()):V==="Delete"&&A[T]===E&&c.preventDefault()),g!=null&&g.includes(V)&&A[T]===E&&ue(d,T+1);var _=s===!0?",":s;V==="Backspace"&&A[T-1]===_&&ue(d,T-1),V==="Delete"&&A[T]===_&&ue(d,T+1),a(c)},z=function(c){var d=L;if(d.match(/\d/g)||(d=""),n||(d=ot(d)),y&&b&&(d=Ae(d,b,y)),d!==L){var V=_e(d,e);W({formattedValue:V,value:d,floatValue:parseFloat(d)},{event:c,source:pe.event})}o(c)},ee=function(c){return c===E?!0:Se(c)},ne=function(c){var d=c.currentValue,V=c.lastValue,T=c.formattedValue,B=c.currentValueIndex,A=c.formattedValueIndex,_=d[B],te=T[A],ve=Ke(V,d),C=ve.to,Q=function(le){return F(le).indexOf(".")+h.length};return x===0&&y&&b&&Q(d)<B&&Q(T)>A?!1:B>=C.start&&B<C.end&&g&&g.includes(_)&&te===E?!0:_===te};return Object.assign(Object.assign({},f),{value:U,valueIsNumericString:!1,isValidInputCharacter:ee,isCharacterSame:ne,onValueChange:W,format:P,removeFormatting:F,getCaretBoundary:function(c){return Nt(c,e)},onKeyDown:X,onBlur:z})}function Vt(e){var t=wt(e);return ce.createElement(ht,Object.assign({},t))}function Be({direction:e,style:t,...r}){return G.jsx("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:e==="up"?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:G.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var Ve={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};const Dt=/^(0\.0*|-0(\.0*)?)$/,It=/^-?0\d+(\.\d+)?\.?$/;function Ct(e){return(typeof e=="number"?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)}function Fe(e,t,r){if(e===void 0)return!0;const n=t===void 0||e>=t,a=r===void 0||e<=r;return n&&a}const Rt={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},Et=Ge((e,{size:t})=>({controls:{"--ni-chevron-size":qe(t,"ni-chevron-size")}})),Ie=$e((e,t)=>{const r=Ze("NumberInput",Rt,e),{className:n,classNames:a,styles:o,unstyled:s,vars:b,onChange:y,onValueChange:h,value:N,defaultValue:x,max:m,min:S,step:f,hideControls:R,rightSection:E,isAllowed:g,clampBehavior:P,onBlur:F,allowDecimal:q,decimalScale:k,onKeyDown:H,onKeyDownCapture:K,handlersRef:w,startValue:L,disabled:U,rightSectionPointerEvents:W,allowNegative:X,readOnly:z,size:ee,rightSectionWidth:ne,stepHoldInterval:c,stepHoldDelay:d,allowLeadingZeros:V,withKeyboardEvents:T,trimLeadingZeroesOnBlur:B,...A}=r,_=We({name:"NumberInput",classes:Ve,props:r,classNames:a,styles:o,unstyled:s,vars:b,varsResolver:Et}),{resolvedClassNames:te,resolvedStyles:ve}=Je({classNames:a,styles:o,props:r}),[C,Q]=Qe({value:N,defaultValue:x,onChange:y}),le=d!==void 0&&c!==void 0,J=j.useRef(null),ie=j.useRef(null),me=j.useRef(0),Ne=(i,p)=>{p.source==="event"&&Q(Ct(i.floatValue)&&!Dt.test(i.value)&&!(V&&It.test(i.value))?i.floatValue:i.value),h==null||h(i,p)},se=i=>{const p=String(i).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return p?Math.max(0,(p[1]?p[1].length:0)-(p[2]?+p[2]:0)):0},ge=i=>{J.current&&typeof i<"u"&&J.current.setSelectionRange(i,i)},fe=j.useRef();fe.current=()=>{let i;const p=se(C),M=se(f),$=Math.max(p,M),Z=10**$;if(typeof C!="number"||Number.isNaN(C))i=xe(L,S,m);else if(m!==void 0){const Y=(Math.round(C*Z)+Math.round(f*Z))/Z;i=Y<=m?Y:m}else i=(Math.round(C*Z)+Math.round(f*Z))/Z;const re=i.toFixed($);Q(parseFloat(re)),h==null||h({floatValue:parseFloat(re),formattedValue:re,value:re},{source:"increment"}),setTimeout(()=>{var Y;return ge((Y=J.current)==null?void 0:Y.value.length)},0)};const oe=j.useRef();oe.current=()=>{let i;const p=S!==void 0?S:X?Number.MIN_SAFE_INTEGER:0,M=se(C),$=se(f),Z=Math.max(M,$),re=10**Z;if(typeof C!="number"||Number.isNaN(C))i=xe(L,p,m);else{const he=(Math.round(C*re)-Math.round(f*re))/re;i=p!==void 0&&he<p?p:he}const Y=i.toFixed(Z);Q(parseFloat(Y)),h==null||h({floatValue:parseFloat(Y),formattedValue:Y,value:Y},{source:"decrement"}),setTimeout(()=>{var he;return ge((he=J.current)==null?void 0:he.value.length)},0)};const ye=i=>{H==null||H(i),!(z||!T)&&(i.key==="ArrowUp"&&(i.preventDefault(),fe.current()),i.key==="ArrowDown"&&(i.preventDefault(),oe.current()))},u=i=>{if(K==null||K(i),i.key==="Backspace"){const p=J.current;p.selectionStart===0&&p.selectionStart===p.selectionEnd&&(i.preventDefault(),window.setTimeout(()=>ge(0),0))}};Ye(w,{increment:fe.current,decrement:oe.current});const l=i=>{i?fe.current():oe.current(),me.current+=1},v=i=>{if(l(i),le){const p=typeof c=="number"?c:c(me.current);ie.current=window.setTimeout(()=>v(i),p)}},D=(i,p)=>{var M;i.preventDefault(),(M=J.current)==null||M.focus(),l(p),le&&(ie.current=window.setTimeout(()=>v(p),d))},O=()=>{ie.current&&window.clearTimeout(ie.current),ie.current=null,me.current=0},I=G.jsxs("div",{..._("controls"),children:[G.jsx(Re,{..._("control"),tabIndex:-1,"aria-hidden":!0,disabled:U||typeof C=="number"&&m!==void 0&&C>=m,mod:{direction:"up"},onMouseDown:i=>i.preventDefault(),onPointerDown:i=>{D(i,!0)},onPointerUp:O,onPointerLeave:O,children:G.jsx(Be,{direction:"up"})}),G.jsx(Re,{..._("control"),tabIndex:-1,"aria-hidden":!0,disabled:U||typeof C=="number"&&S!==void 0&&C<=S,mod:{direction:"down"},onMouseDown:i=>i.preventDefault(),onPointerDown:i=>{D(i,!1)},onPointerUp:O,onPointerLeave:O,children:G.jsx(Be,{direction:"down"})})]});return G.jsx(Oe,{component:Vt,allowNegative:X,className:ze(Ve.root,n),size:ee,...A,readOnly:z,disabled:U,value:C,getInputRef:et(t,J),onValueChange:Ne,rightSection:R||z?E:E||I,classNames:te,styles:ve,unstyled:s,__staticSelector:"NumberInput",decimalScale:q?k:0,onKeyDown:ye,onKeyDownCapture:u,rightSectionPointerEvents:W??(U?"none":void 0),rightSectionWidth:ne??`var(--ni-right-section-width-${ee||"sm"})`,allowLeadingZeros:V,onBlur:i=>{if(F==null||F(i),P==="blur"&&typeof C=="number"&&xe(C,S,m)!==C&&Q(xe(C,S,m)),B&&typeof C=="string"){const p=C.replace(/^0+/,""),M=parseFloat(p);Q(Number.isNaN(M)||M>Number.MAX_SAFE_INTEGER?p:M)}},isAllowed:i=>P==="strict"?g?g(i)&&Fe(i.floatValue,S,m):Fe(i.floatValue,S,m):g?g(i):!0})});Ie.classes={...Oe.classes,...Ve};Ie.displayName="@mantine/core/NumberInput";const At=Xe.div`
  .number-input-component-container {
    background-color: ${e=>e.theme.colors.gray[0]};
    font-size: 16px;

    &:focus {
      border: 1px solid ${e=>e.theme.colors.primary[5]};
    }
  }
`,Tt=({placeholder:e,value:t,onChange:r,icon:n,disabled:a,isRequired:o=!1,variant:s="filled",RightSectionIcon:b=He,rightSectionIconColor:y=Ce.colors.gray[3]})=>{const h=N=>{const x=N;r(typeof x=="number"?x:0)};return G.jsx(At,{theme:Ce,children:G.jsx(Ie,{placeholder:e,value:t,variant:s,classNames:{input:"number-input-component-container"},onChange:h,rightSectionPointerEvents:"all",radius:10,disabled:a,required:o,leftSection:n?G.jsx(n,{size:15}):null,rightSection:!a&&G.jsx(b,{color:y,onClick:()=>{r(0)},style:{display:t?void 0:"none",cursor:"pointer"}})})})};Tt.__docgenInfo={description:"",methods:[],displayName:"NumberInputComponent",props:{isRequired:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},RightSectionIcon:{defaultValue:{value:"IoIosCloseCircle",computed:!0},required:!1},rightSectionIconColor:{defaultValue:{value:"theme.colors!.gray[3]",computed:!0},required:!1}}};export{Tt as N};
