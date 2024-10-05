function z0(e,n){for(var i=0;i<n.length;i++){const a=n[i];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function Gu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yu={exports:{}},ho={},Xu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=Symbol.for("react.element"),J0=Symbol.for("react.portal"),F0=Symbol.for("react.fragment"),_0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),V0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),ed=Symbol.iterator;function q0(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function ka(e,n,i){this.props=e,this.context=n,this.refs=ig,this.updater=i||eg}ka.prototype.isReactComponent={};ka.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ka.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ag(){}ag.prototype=ka.prototype;function _s(e,n,i){this.props=e,this.context=n,this.refs=ig,this.updater=i||eg}var As=_s.prototype=new ag;As.constructor=_s;ng(As,ka.prototype);As.isPureReactComponent=!0;var nd=Array.isArray,tg=Object.prototype.hasOwnProperty,Bs={current:null},rg={key:!0,ref:!0,__self:!0,__source:!0};function og(e,n,i){var a,t={},r=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)tg.call(n,a)&&!rg.hasOwnProperty(a)&&(t[a]=n[a]);var s=arguments.length-2;if(s===1)t.children=i;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];t.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)t[a]===void 0&&(t[a]=s[a]);return{$$typeof:$t,type:e,key:r,ref:o,props:t,_owner:Bs.current}}function Z0(e,n){return{$$typeof:$t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===$t}function G0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var id=/\/+/g;function Vo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?G0(""+e.key):n.toString(36)}function hr(e,n,i,a,t){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $t:case J0:o=!0}}if(o)return o=e,t=t(o),e=a===""?"."+Vo(o,0):a,nd(t)?(i="",e!=null&&(i=e.replace(id,"$&/")+"/"),hr(t,n,i,"",function(u){return u})):t!=null&&(Is(t)&&(t=Z0(t,i+(!t.key||o&&o.key===t.key?"":(""+t.key).replace(id,"$&/")+"/")+e)),n.push(t)),1;if(o=0,a=a===""?".":a+":",nd(e))for(var s=0;s<e.length;s++){r=e[s];var c=a+Vo(r,s);o+=hr(r,n,i,c,t)}else if(c=q0(e),typeof c=="function")for(e=c.call(e),s=0;!(r=e.next()).done;)r=r.value,c=a+Vo(r,s++),o+=hr(r,n,i,c,t);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function It(e,n,i){if(e==null)return e;var a=[],t=0;return hr(e,a,"","",function(r){return n.call(i,r,t++)}),a}function Y0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},vr={transition:null},X0={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:vr,ReactCurrentOwner:Bs};function lg(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:It,forEach:function(e,n,i){It(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return It(e,function(){n++}),n},toArray:function(e){return It(e,function(n){return n})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=ka;I.Fragment=F0;I.Profiler=A0;I.PureComponent=_s;I.StrictMode=_0;I.Suspense=W0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;I.act=lg;I.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=ng({},e.props),t=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Bs.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)tg.call(n,c)&&!rg.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=i;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:$t,type:e.type,key:t,ref:r,props:a,_owner:o}};I.createContext=function(e){return e={$$typeof:I0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B0,_context:e},e.Consumer=e};I.createElement=og;I.createFactory=function(e){var n=og.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:V0,render:e}};I.isValidElement=Is;I.lazy=function(e){return{$$typeof:Q0,_payload:{_status:-1,_result:e},_init:Y0}};I.memo=function(e,n){return{$$typeof:U0,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=vr.transition;vr.transition={};try{e()}finally{vr.transition=n}};I.unstable_act=lg;I.useCallback=function(e,n){return Me.current.useCallback(e,n)};I.useContext=function(e){return Me.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};I.useEffect=function(e,n){return Me.current.useEffect(e,n)};I.useId=function(){return Me.current.useId()};I.useImperativeHandle=function(e,n,i){return Me.current.useImperativeHandle(e,n,i)};I.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return Me.current.useMemo(e,n)};I.useReducer=function(e,n,i){return Me.current.useReducer(e,n,i)};I.useRef=function(e){return Me.current.useRef(e)};I.useState=function(e){return Me.current.useState(e)};I.useSyncExternalStore=function(e,n,i){return Me.current.useSyncExternalStore(e,n,i)};I.useTransition=function(){return Me.current.useTransition()};I.version="18.3.1";Xu.exports=I;var K=Xu.exports;const Ki=Gu(K),Tl=z0({__proto__:null,default:Ki},[K]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em=K,nm=Symbol.for("react.element"),im=Symbol.for("react.fragment"),am=Object.prototype.hasOwnProperty,tm=em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function sg(e,n,i){var a,t={},r=null,o=null;i!==void 0&&(r=""+i),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)am.call(n,a)&&!rm.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)t[a]===void 0&&(t[a]=n[a]);return{$$typeof:nm,type:e,key:r,ref:o,props:t,_owner:tm.current}}ho.Fragment=im;ho.jsx=sg;ho.jsxs=sg;Yu.exports=ho;var l=Yu.exports,$l={},cg={exports:{}},Xe={},dg={exports:{}},ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,O){var H=S.length;S.push(O);e:for(;0<H;){var A=H-1>>>1,_=S[A];if(0<t(_,O))S[A]=O,S[H]=_,H=A;else break e}}function i(S){return S.length===0?null:S[0]}function a(S){if(S.length===0)return null;var O=S[0],H=S.pop();if(H!==O){S[0]=H;e:for(var A=0,_=S.length,de=_>>>1;A<de;){var ne=2*(A+1)-1,De=S[ne],N=ne+1,J=S[N];if(0>t(De,H))N<_&&0>t(J,De)?(S[A]=J,S[N]=H,A=N):(S[A]=De,S[ne]=H,A=ne);else if(N<_&&0>t(J,H))S[A]=J,S[N]=H,A=N;else break e}}return O}function t(S,O){var H=S.sortIndex-O.sortIndex;return H!==0?H:S.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],d=1,p=null,m=3,g=!1,R=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(S){for(var O=i(u);O!==null;){if(O.callback===null)a(u);else if(O.startTime<=S)a(u),O.sortIndex=O.expirationTime,n(c,O);else break;O=i(u)}}function w(S){if(y=!1,v(S),!R)if(i(c)!==null)R=!0,Z(x);else{var O=i(u);O!==null&&V(w,O.startTime-S)}}function x(S,O){R=!1,y&&(y=!1,h(T),T=-1),g=!0;var H=m;try{for(v(O),p=i(c);p!==null&&(!(p.expirationTime>O)||S&&!q());){var A=p.callback;if(typeof A=="function"){p.callback=null,m=p.priorityLevel;var _=A(p.expirationTime<=O);O=e.unstable_now(),typeof _=="function"?p.callback=_:p===i(c)&&a(c),v(O)}else a(c);p=i(c)}if(p!==null)var de=!0;else{var ne=i(u);ne!==null&&V(w,ne.startTime-O),de=!1}return de}finally{p=null,m=H,g=!1}}var C=!1,L=null,T=-1,F=5,D=-1;function q(){return!(e.unstable_now()-D<F)}function nn(){if(L!==null){var S=e.unstable_now();D=S;var O=!0;try{O=L(!0,S)}finally{O?b():(C=!1,L=null)}}else C=!1}var b;if(typeof f=="function")b=function(){f(nn)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,U=z.port2;z.port1.onmessage=nn,b=function(){U.postMessage(null)}}else b=function(){k(nn,0)};function Z(S){L=S,C||(C=!0,b())}function V(S,O){T=k(function(){S(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){R||g||(R=!0,Z(x))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return i(c)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var H=m;m=O;try{return S()}finally{m=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var H=m;m=S;try{return O()}finally{m=H}},e.unstable_scheduleCallback=function(S,O,H){var A=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?A+H:A):H=A,S){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=H+_,S={id:d++,callback:O,priorityLevel:S,startTime:H,expirationTime:_,sortIndex:-1},H>A?(S.sortIndex=H,n(u,S),i(c)===null&&S===i(u)&&(y?(h(T),T=-1):y=!0,V(w,H-A))):(S.sortIndex=_,n(c,S),R||g||(R=!0,Z(x))),S},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(S){var O=m;return function(){var H=m;m=O;try{return S.apply(this,arguments)}finally{m=H}}}})(ug);dg.exports=ug;var om=dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=K,Ze=om;function $(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gg=new Set,st={};function Hi(e,n){da(e,n),da(e+"Capture",n)}function da(e,n){for(st[e]=n,e=0;e<n.length;e++)gg.add(n[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},td={};function cm(e){return Sl.call(td,e)?!0:Sl.call(ad,e)?!1:sm.test(e)?td[e]=!0:(ad[e]=!0,!1)}function dm(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,n,i,a){if(n===null||typeof n>"u"||dm(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ee(e,n,i,a,t,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ee(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Vs,Ws);Ce[n]=new Ee(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Vs,Ws);Ce[n]=new Ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Vs,Ws);Ce[n]=new Ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Us(e,n,i,a){var t=Ce.hasOwnProperty(n)?Ce[n]:null;(t!==null?t.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(um(n,i,t,a)&&(i=null),a||t===null?cm(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(n=t.attributeName,a=t.attributeNamespace,i===null?e.removeAttribute(n):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var An=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vt=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Zs=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),rd=Symbol.iterator;function Ta(e){return e===null||typeof e!="object"?null:(e=rd&&e[rd]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Wo;function Va(e){if(Wo===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Wo=n&&n[1]||""}return`
`+Wo+e}var Uo=!1;function Qo(e,n){if(!e||Uo)return"";Uo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),r=a.stack.split(`
`),o=t.length-1,s=r.length-1;1<=o&&0<=s&&t[o]!==r[s];)s--;for(;1<=o&&0<=s;o--,s--)if(t[o]!==r[s]){if(o!==1||s!==1)do if(o--,s--,0>s||t[o]!==r[s]){var c=`
`+t[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Uo=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Va(e):""}function gm(e){switch(e.tag){case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vi:return"Fragment";case Ii:return"Portal";case Nl:return"Profiler";case Qs:return"StrictMode";case Ol:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fg:return(e.displayName||"Context")+".Consumer";case pg:return(e._context.displayName||"Context")+".Provider";case qs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zs:return n=e.displayName||null,n!==null?n:El(e.type)||"Memo";case Wn:n=e._payload,e=e._init;try{return El(e(n))}catch{}}return null}function pm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(n);case 8:return n===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function si(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hg(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fm(e){var n=hg(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,r=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){e._valueTracker||(e._valueTracker=fm(e))}function vg(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=hg(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,n){var i=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function od(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=si(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function wg(e,n){n=n.checked,n!=null&&Us(e,"checked",n,!1)}function Dl(e,n){wg(e,n);var i=si(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zl(e,n.type,i):n.hasOwnProperty("defaultValue")&&zl(e,n.type,si(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ld(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function zl(e,n,i){(n!=="number"||Mr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Wa=Array.isArray;function aa(e,n,i,a){if(e=e.options,n){n={};for(var t=0;t<i.length;t++)n["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=n.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&a&&(e[i].defaultSelected=!0)}else{for(i=""+si(i),n=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function Jl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error($(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error($(92));if(Wa(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:si(i)}}function Rg(e,n){var i=si(n.value),a=si(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function cd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function jg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?jg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ut,yg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,t){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ut=Ut||document.createElement("div"),Ut.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ut.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ct(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mm=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(e){mm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ya[n]=Ya[e]})});function xg(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ya.hasOwnProperty(e)&&Ya[e]?(""+n).trim():n+"px"}function kg(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,t=xg(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,t):e[i]=t}}var hm=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,n){if(n){if(hm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error($(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error($(61))}if(n.style!=null&&typeof n.style!="object")throw Error($(62))}}function Al(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,ta=null,ra=null;function dd(e){if(e=Ot(e)){if(typeof Il!="function")throw Error($(280));var n=e.stateNode;n&&(n=yo(n),Il(e.stateNode,e.type,n))}}function Pg(e){ta?ra?ra.push(e):ra=[e]:ta=e}function Cg(){if(ta){var e=ta,n=ra;if(ra=ta=null,dd(e),n)for(e=0;e<n.length;e++)dd(n[e])}}function Lg(e,n){return e(n)}function Kg(){}var qo=!1;function bg(e,n,i){if(qo)return e(n,i);qo=!0;try{return Lg(e,n,i)}finally{qo=!1,(ta!==null||ra!==null)&&(Kg(),Cg())}}function dt(e,n){var i=e.stateNode;if(i===null)return null;var a=yo(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error($(231,n,typeof i));return i}var Vl=!1;if(Dn)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Vl=!1}function vm(e,n,i,a,t,r,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(i,u)}catch(d){this.onError(d)}}var Xa=!1,Er=null,Hr=!1,Wl=null,wm={onError:function(e){Xa=!0,Er=e}};function Rm(e,n,i,a,t,r,o,s,c){Xa=!1,Er=null,vm.apply(wm,arguments)}function jm(e,n,i,a,t,r,o,s,c){if(Rm.apply(this,arguments),Xa){if(Xa){var u=Er;Xa=!1,Er=null}else throw Error($(198));Hr||(Hr=!0,Wl=u)}}function Di(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Tg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ud(e){if(Di(e)!==e)throw Error($(188))}function ym(e){var n=e.alternate;if(!n){if(n=Di(e),n===null)throw Error($(188));return n!==e?null:e}for(var i=e,a=n;;){var t=i.return;if(t===null)break;var r=t.alternate;if(r===null){if(a=t.return,a!==null){i=a;continue}break}if(t.child===r.child){for(r=t.child;r;){if(r===i)return ud(t),e;if(r===a)return ud(t),n;r=r.sibling}throw Error($(188))}if(i.return!==a.return)i=t,a=r;else{for(var o=!1,s=t.child;s;){if(s===i){o=!0,i=t,a=r;break}if(s===a){o=!0,a=t,i=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===i){o=!0,i=r,a=t;break}if(s===a){o=!0,a=r,i=t;break}s=s.sibling}if(!o)throw Error($(189))}}if(i.alternate!==a)throw Error($(190))}if(i.tag!==3)throw Error($(188));return i.stateNode.current===i?e:n}function $g(e){return e=ym(e),e!==null?Sg(e):null}function Sg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Sg(e);if(n!==null)return n;e=e.sibling}return null}var Ng=Ze.unstable_scheduleCallback,gd=Ze.unstable_cancelCallback,xm=Ze.unstable_shouldYield,km=Ze.unstable_requestPaint,pe=Ze.unstable_now,Pm=Ze.unstable_getCurrentPriorityLevel,Ys=Ze.unstable_ImmediatePriority,Og=Ze.unstable_UserBlockingPriority,Dr=Ze.unstable_NormalPriority,Cm=Ze.unstable_LowPriority,Mg=Ze.unstable_IdlePriority,vo=null,bn=null;function Lm(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:Tm,Km=Math.log,bm=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(Km(e)/bm|0)|0}var Qt=64,qt=4194304;function Ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zr(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,t=e.suspendedLanes,r=e.pingedLanes,o=i&268435455;if(o!==0){var s=o&~t;s!==0?a=Ua(s):(r&=o,r!==0&&(a=Ua(r)))}else o=i&~t,o!==0?a=Ua(o):r!==0&&(a=Ua(r));if(a===0)return 0;if(n!==0&&n!==a&&!(n&t)&&(t=a&-a,r=n&-n,t>=r||t===16&&(r&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-hn(n),t=1<<i,a|=e[i],n&=~t;return a}function $m(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sm(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-hn(r),s=1<<o,c=t[o];c===-1?(!(s&i)||s&a)&&(t[o]=$m(s,n)):c<=n&&(e.expiredLanes|=s),r&=~s}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eg(){var e=Qt;return Qt<<=1,!(Qt&4194240)&&(Qt=64),e}function Zo(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function St(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-hn(n),e[n]=i}function Nm(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-hn(i),r=1<<t;n[t]=0,a[t]=-1,e[t]=-1,i&=~r}}function Xs(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-hn(i),t=1<<a;t&n|e[a]&n&&(e[a]|=n),i&=~t}}var G=0;function Hg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dg,ec,zg,Jg,Fg,Ql=!1,Zt=[],Xn=null,ei=null,ni=null,ut=new Map,gt=new Map,Qn=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,n){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ut.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gt.delete(n.pointerId)}}function Sa(e,n,i,a,t,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:r,targetContainers:[t]},n!==null&&(n=Ot(n),n!==null&&ec(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function Mm(e,n,i,a,t){switch(n){case"focusin":return Xn=Sa(Xn,e,n,i,a,t),!0;case"dragenter":return ei=Sa(ei,e,n,i,a,t),!0;case"mouseover":return ni=Sa(ni,e,n,i,a,t),!0;case"pointerover":var r=t.pointerId;return ut.set(r,Sa(ut.get(r)||null,e,n,i,a,t)),!0;case"gotpointercapture":return r=t.pointerId,gt.set(r,Sa(gt.get(r)||null,e,n,i,a,t)),!0}return!1}function _g(e){var n=Ri(e.target);if(n!==null){var i=Di(n);if(i!==null){if(n=i.tag,n===13){if(n=Tg(i),n!==null){e.blockedOn=n,Fg(e.priority,function(){zg(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ql(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Bl=a,i.target.dispatchEvent(a),Bl=null}else return n=Ot(i),n!==null&&ec(n),e.blockedOn=i,!1;n.shift()}return!0}function fd(e,n,i){wr(e)&&i.delete(n)}function Em(){Ql=!1,Xn!==null&&wr(Xn)&&(Xn=null),ei!==null&&wr(ei)&&(ei=null),ni!==null&&wr(ni)&&(ni=null),ut.forEach(fd),gt.forEach(fd)}function Na(e,n){e.blockedOn===n&&(e.blockedOn=null,Ql||(Ql=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Em)))}function pt(e){function n(t){return Na(t,e)}if(0<Zt.length){Na(Zt[0],e);for(var i=1;i<Zt.length;i++){var a=Zt[i];a.blockedOn===e&&(a.blockedOn=null)}}for(Xn!==null&&Na(Xn,e),ei!==null&&Na(ei,e),ni!==null&&Na(ni,e),ut.forEach(n),gt.forEach(n),i=0;i<Qn.length;i++)a=Qn[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(i=Qn[0],i.blockedOn===null);)_g(i),i.blockedOn===null&&Qn.shift()}var oa=An.ReactCurrentBatchConfig,Jr=!0;function Hm(e,n,i,a){var t=G,r=oa.transition;oa.transition=null;try{G=1,nc(e,n,i,a)}finally{G=t,oa.transition=r}}function Dm(e,n,i,a){var t=G,r=oa.transition;oa.transition=null;try{G=4,nc(e,n,i,a)}finally{G=t,oa.transition=r}}function nc(e,n,i,a){if(Jr){var t=ql(e,n,i,a);if(t===null)ol(e,n,a,Fr,i),pd(e,a);else if(Mm(t,e,n,i,a))a.stopPropagation();else if(pd(e,a),n&4&&-1<Om.indexOf(e)){for(;t!==null;){var r=Ot(t);if(r!==null&&Dg(r),r=ql(e,n,i,a),r===null&&ol(e,n,a,Fr,i),r===t)break;t=r}t!==null&&a.stopPropagation()}else ol(e,n,a,null,i)}}var Fr=null;function ql(e,n,i,a){if(Fr=null,e=Gs(a),e=Ri(e),e!==null)if(n=Di(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Tg(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Fr=e,null}function Ag(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pm()){case Ys:return 1;case Og:return 4;case Dr:case Cm:return 16;case Mg:return 536870912;default:return 16}default:return 16}}var Zn=null,ic=null,Rr=null;function Bg(){if(Rr)return Rr;var e,n=ic,i=n.length,a,t="value"in Zn?Zn.value:Zn.textContent,r=t.length;for(e=0;e<i&&n[e]===t[e];e++);var o=i-e;for(a=1;a<=o&&n[i-a]===t[r-a];a++);return Rr=t.slice(e,1<a?1-a:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gt(){return!0}function md(){return!1}function en(e){function n(i,a,t,r,o){this._reactName=i,this._targetInst=t,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(i=e[s],this[s]=i?i(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Gt:md,this.isPropagationStopped=md,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Gt)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Gt)},persist:function(){},isPersistent:Gt}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=en(Pa),Nt=se({},Pa,{view:0,detail:0}),zm=en(Nt),Go,Yo,Oa,wo=se({},Nt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oa&&(Oa&&e.type==="mousemove"?(Go=e.screenX-Oa.screenX,Yo=e.screenY-Oa.screenY):Yo=Go=0,Oa=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),hd=en(wo),Jm=se({},wo,{dataTransfer:0}),Fm=en(Jm),_m=se({},Nt,{relatedTarget:0}),Xo=en(_m),Am=se({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Bm=en(Am),Im=se({},Pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vm=en(Im),Wm=se({},Pa,{data:0}),vd=en(Wm),Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qm[e])?!!n[e]:!1}function tc(){return Zm}var Gm=se({},Nt,{key:function(e){if(e.key){var n=Um[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=en(Gm),Xm=se({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=en(Xm),eh=se({},Nt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),nh=en(eh),ih=se({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=en(ih),th=se({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=en(th),oh=[9,13,27,32],rc=Dn&&"CompositionEvent"in window,et=null;Dn&&"documentMode"in document&&(et=document.documentMode);var lh=Dn&&"TextEvent"in window&&!et,Ig=Dn&&(!rc||et&&8<et&&11>=et),Rd=" ",jd=!1;function Vg(e,n){switch(e){case"keyup":return oh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function sh(e,n){switch(e){case"compositionend":return Wg(n);case"keypress":return n.which!==32?null:(jd=!0,Rd);case"textInput":return e=n.data,e===Rd&&jd?null:e;default:return null}}function ch(e,n){if(Wi)return e==="compositionend"||!rc&&Vg(e,n)?(e=Bg(),Rr=ic=Zn=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ig&&n.locale!=="ko"?null:n.data;default:return null}}var dh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dh[e.type]:n==="textarea"}function Ug(e,n,i,a){Pg(a),n=_r(n,"onChange"),0<n.length&&(i=new ac("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var nt=null,ft=null;function uh(e){tp(e,0)}function Ro(e){var n=qi(e);if(vg(n))return e}function gh(e,n){if(e==="change")return n}var Qg=!1;if(Dn){var el;if(Dn){var nl="oninput"in document;if(!nl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),nl=typeof xd.oninput=="function"}el=nl}else el=!1;Qg=el&&(!document.documentMode||9<document.documentMode)}function kd(){nt&&(nt.detachEvent("onpropertychange",qg),ft=nt=null)}function qg(e){if(e.propertyName==="value"&&Ro(ft)){var n=[];Ug(n,ft,e,Gs(e)),bg(uh,n)}}function ph(e,n,i){e==="focusin"?(kd(),nt=n,ft=i,nt.attachEvent("onpropertychange",qg)):e==="focusout"&&kd()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(ft)}function mh(e,n){if(e==="click")return Ro(n)}function hh(e,n){if(e==="input"||e==="change")return Ro(n)}function vh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:vh;function mt(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var t=i[a];if(!Sl.call(n,t)||!jn(e[t],n[t]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,n){var i=Pd(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Pd(i)}}function Zg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gg(){for(var e=window,n=Mr();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Mr(e.document)}return n}function oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function wh(e){var n=Gg(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Zg(i.ownerDocument.documentElement,i)){if(a!==null&&oc(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,r=Math.min(a.start,t);a=a.end===void 0?r:Math.min(a.end,t),!e.extend&&r>a&&(t=a,a=r,r=t),t=Cd(i,r);var o=Cd(i,a);t&&o&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),r>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rh=Dn&&"documentMode"in document&&11>=document.documentMode,Ui=null,Zl=null,it=null,Gl=!1;function Ld(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Gl||Ui==null||Ui!==Mr(a)||(a=Ui,"selectionStart"in a&&oc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),it&&mt(it,a)||(it=a,a=_r(Zl,"onSelect"),0<a.length&&(n=new ac("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Ui)))}function Yt(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Qi={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionend:Yt("Transition","TransitionEnd")},il={},Yg={};Dn&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function jo(e){if(il[e])return il[e];if(!Qi[e])return e;var n=Qi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Yg)return il[e]=n[i];return e}var Xg=jo("animationend"),ep=jo("animationiteration"),np=jo("animationstart"),ip=jo("transitionend"),ap=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(e,n){ap.set(e,n),Hi(n,[e])}for(var al=0;al<Kd.length;al++){var tl=Kd[al],jh=tl.toLowerCase(),yh=tl[0].toUpperCase()+tl.slice(1);ui(jh,"on"+yh)}ui(Xg,"onAnimationEnd");ui(ep,"onAnimationIteration");ui(np,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(ip,"onTransitionEnd");da("onMouseEnter",["mouseout","mouseover"]);da("onMouseLeave",["mouseout","mouseover"]);da("onPointerEnter",["pointerout","pointerover"]);da("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function bd(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,jm(a,n,void 0,e),e.currentTarget=null}function tp(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],t=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var o=a.length-1;0<=o;o--){var s=a[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==r&&t.isPropagationStopped())break e;bd(t,s,u),r=c}else for(o=0;o<a.length;o++){if(s=a[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==r&&t.isPropagationStopped())break e;bd(t,s,u),r=c}}}if(Hr)throw e=Wl,Hr=!1,Wl=null,e}function ie(e,n){var i=n[is];i===void 0&&(i=n[is]=new Set);var a=e+"__bubble";i.has(a)||(rp(n,e,2,!1),i.add(a))}function rl(e,n,i){var a=0;n&&(a|=4),rp(i,e,a,n)}var Xt="_reactListening"+Math.random().toString(36).slice(2);function ht(e){if(!e[Xt]){e[Xt]=!0,gg.forEach(function(i){i!=="selectionchange"&&(xh.has(i)||rl(i,!1,e),rl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xt]||(n[Xt]=!0,rl("selectionchange",!1,n))}}function rp(e,n,i,a){switch(Ag(n)){case 1:var t=Hm;break;case 4:t=Dm;break;default:t=nc}i=t.bind(null,n,i,e),t=void 0,!Vl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(n,i,{capture:!0,passive:t}):e.addEventListener(n,i,!0):t!==void 0?e.addEventListener(n,i,{passive:t}):e.addEventListener(n,i,!1)}function ol(e,n,i,a,t){var r=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===t||s.nodeType===8&&s.parentNode===t)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===t||c.nodeType===8&&c.parentNode===t))return;o=o.return}for(;s!==null;){if(o=Ri(s),o===null)return;if(c=o.tag,c===5||c===6){a=r=o;continue e}s=s.parentNode}}a=a.return}bg(function(){var u=r,d=Gs(i),p=[];e:{var m=ap.get(e);if(m!==void 0){var g=ac,R=e;switch(e){case"keypress":if(jr(i)===0)break e;case"keydown":case"keyup":g=Ym;break;case"focusin":R="focus",g=Xo;break;case"focusout":R="blur",g=Xo;break;case"beforeblur":case"afterblur":g=Xo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=nh;break;case Xg:case ep:case np:g=Bm;break;case ip:g=ah;break;case"scroll":g=zm;break;case"wheel":g=rh;break;case"copy":case"cut":case"paste":g=Vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wd}var y=(n&4)!==0,k=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=dt(f,h),w!=null&&y.push(vt(f,w,v)))),k)break;f=f.return}0<y.length&&(m=new g(m,R,null,i,d),p.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&i!==Bl&&(R=i.relatedTarget||i.fromElement)&&(Ri(R)||R[zn]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(R=i.relatedTarget||i.toElement,g=u,R=R?Ri(R):null,R!==null&&(k=Di(R),R!==k||R.tag!==5&&R.tag!==6)&&(R=null)):(g=null,R=u),g!==R)){if(y=hd,w="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=wd,w="onPointerLeave",h="onPointerEnter",f="pointer"),k=g==null?m:qi(g),v=R==null?m:qi(R),m=new y(w,f+"leave",g,i,d),m.target=k,m.relatedTarget=v,w=null,Ri(d)===u&&(y=new y(h,f+"enter",R,i,d),y.target=v,y.relatedTarget=k,w=y),k=w,g&&R)n:{for(y=g,h=R,f=0,v=y;v;v=_i(v))f++;for(v=0,w=h;w;w=_i(w))v++;for(;0<f-v;)y=_i(y),f--;for(;0<v-f;)h=_i(h),v--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break n;y=_i(y),h=_i(h)}y=null}else y=null;g!==null&&Td(p,m,g,y,!1),R!==null&&k!==null&&Td(p,k,R,y,!0)}}e:{if(m=u?qi(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var x=gh;else if(yd(m))if(Qg)x=hh;else{x=fh;var C=ph}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=mh);if(x&&(x=x(e,u))){Ug(p,x,i,d);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&zl(m,"number",m.value)}switch(C=u?qi(u):window,e){case"focusin":(yd(C)||C.contentEditable==="true")&&(Ui=C,Zl=u,it=null);break;case"focusout":it=Zl=Ui=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Ld(p,i,d);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":Ld(p,i,d)}var L;if(rc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Wi?Vg(e,i)&&(T="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(T="onCompositionStart");T&&(Ig&&i.locale!=="ko"&&(Wi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wi&&(L=Bg()):(Zn=d,ic="value"in Zn?Zn.value:Zn.textContent,Wi=!0)),C=_r(u,T),0<C.length&&(T=new vd(T,e,null,i,d),p.push({event:T,listeners:C}),L?T.data=L:(L=Wg(i),L!==null&&(T.data=L)))),(L=lh?sh(e,i):ch(e,i))&&(u=_r(u,"onBeforeInput"),0<u.length&&(d=new vd("onBeforeInput","beforeinput",null,i,d),p.push({event:d,listeners:u}),d.data=L))}tp(p,n)})}function vt(e,n,i){return{instance:e,listener:n,currentTarget:i}}function _r(e,n){for(var i=n+"Capture",a=[];e!==null;){var t=e,r=t.stateNode;t.tag===5&&r!==null&&(t=r,r=dt(e,i),r!=null&&a.unshift(vt(e,r,t)),r=dt(e,n),r!=null&&a.push(vt(e,r,t))),e=e.return}return a}function _i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,n,i,a,t){for(var r=n._reactName,o=[];i!==null&&i!==a;){var s=i,c=s.alternate,u=s.stateNode;if(c!==null&&c===a)break;s.tag===5&&u!==null&&(s=u,t?(c=dt(i,r),c!=null&&o.unshift(vt(i,c,s))):t||(c=dt(i,r),c!=null&&o.push(vt(i,c,s)))),i=i.return}o.length!==0&&e.push({event:n,listeners:o})}var kh=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(kh,`
`).replace(Ph,"")}function er(e,n,i){if(n=$d(n),$d(e)!==n&&i)throw Error($(425))}function Ar(){}var Yl=null,Xl=null;function es(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(e){return Sd.resolve(null).then(e).catch(Kh)}:ns;function Kh(e){setTimeout(function(){throw e})}function ll(e,n){var i=n,a=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){e.removeChild(t),pt(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=t}while(i);pt(n)}function ii(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Nd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Ca=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Ca,wt="__reactProps$"+Ca,zn="__reactContainer$"+Ca,is="__reactEvents$"+Ca,bh="__reactListeners$"+Ca,Th="__reactHandles$"+Ca;function Ri(e){var n=e[Ln];if(n)return n;for(var i=e.parentNode;i;){if(n=i[zn]||i[Ln]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Nd(e);e!==null;){if(i=e[Ln])return i;e=Nd(e)}return n}e=i,i=e.parentNode}return null}function Ot(e){return e=e[Ln]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function yo(e){return e[wt]||null}var as=[],Zi=-1;function gi(e){return{current:e}}function te(e){0>Zi||(e.current=as[Zi],as[Zi]=null,Zi--)}function ee(e,n){Zi++,as[Zi]=e.current,e.current=n}var ci={},Se=gi(ci),_e=gi(!1),bi=ci;function ua(e,n){var i=e.type.contextTypes;if(!i)return ci;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var t={},r;for(r in i)t[r]=n[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function Ae(e){return e=e.childContextTypes,e!=null}function Br(){te(_e),te(Se)}function Od(e,n,i){if(Se.current!==ci)throw Error($(168));ee(Se,n),ee(_e,i)}function op(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var t in a)if(!(t in n))throw Error($(108,pm(e)||"Unknown",t));return se({},i,a)}function Ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,bi=Se.current,ee(Se,e),ee(_e,_e.current),!0}function Md(e,n,i){var a=e.stateNode;if(!a)throw Error($(169));i?(e=op(e,n,bi),a.__reactInternalMemoizedMergedChildContext=e,te(_e),te(Se),ee(Se,e)):te(_e),ee(_e,i)}var On=null,xo=!1,sl=!1;function lp(e){On===null?On=[e]:On.push(e)}function $h(e){xo=!0,lp(e)}function pi(){if(!sl&&On!==null){sl=!0;var e=0,n=G;try{var i=On;for(G=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}On=null,xo=!1}catch(t){throw On!==null&&(On=On.slice(e+1)),Ng(Ys,pi),t}finally{G=n,sl=!1}}return null}var Gi=[],Yi=0,Vr=null,Wr=0,tn=[],rn=0,Ti=null,Mn=1,En="";function hi(e,n){Gi[Yi++]=Wr,Gi[Yi++]=Vr,Vr=e,Wr=n}function sp(e,n,i){tn[rn++]=Mn,tn[rn++]=En,tn[rn++]=Ti,Ti=e;var a=Mn;e=En;var t=32-hn(a)-1;a&=~(1<<t),i+=1;var r=32-hn(n)+t;if(30<r){var o=t-t%5;r=(a&(1<<o)-1).toString(32),a>>=o,t-=o,Mn=1<<32-hn(n)+t|i<<t|a,En=r+e}else Mn=1<<r|i<<t|a,En=e}function lc(e){e.return!==null&&(hi(e,1),sp(e,1,0))}function sc(e){for(;e===Vr;)Vr=Gi[--Yi],Gi[Yi]=null,Wr=Gi[--Yi],Gi[Yi]=null;for(;e===Ti;)Ti=tn[--rn],tn[rn]=null,En=tn[--rn],tn[rn]=null,Mn=tn[--rn],tn[rn]=null}var qe=null,Ue=null,re=!1,fn=null;function cp(e,n){var i=on(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Ed(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,qe=e,Ue=ii(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,qe=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Ti!==null?{id:Mn,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=on(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,qe=e,Ue=null,!0):!1;default:return!1}}function ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(re){var n=Ue;if(n){var i=n;if(!Ed(e,n)){if(ts(e))throw Error($(418));n=ii(i.nextSibling);var a=qe;n&&Ed(e,n)?cp(a,i):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(ts(e))throw Error($(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function Hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function nr(e){if(e!==qe)return!1;if(!re)return Hd(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!es(e.type,e.memoizedProps)),n&&(n=Ue)){if(ts(e))throw dp(),Error($(418));for(;n;)cp(e,n),n=ii(n.nextSibling)}if(Hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Ue=ii(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=qe?ii(e.stateNode.nextSibling):null;return!0}function dp(){for(var e=Ue;e;)e=ii(e.nextSibling)}function ga(){Ue=qe=null,re=!1}function cc(e){fn===null?fn=[e]:fn.push(e)}var Sh=An.ReactCurrentBatchConfig;function Ma(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error($(309));var a=i.stateNode}if(!a)throw Error($(147,e));var t=a,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var s=t.refs;o===null?delete s[r]:s[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error($(284));if(!i._owner)throw Error($(290,e))}return e}function ir(e,n){throw e=Object.prototype.toString.call(n),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Dd(e){var n=e._init;return n(e._payload)}function up(e){function n(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function i(h,f){if(!e)return null;for(;f!==null;)n(h,f),f=f.sibling;return null}function a(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function t(h,f){return h=oi(h,f),h.index=0,h.sibling=null,h}function r(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,v,w){return f===null||f.tag!==6?(f=ml(v,h.mode,w),f.return=h,f):(f=t(f,v),f.return=h,f)}function c(h,f,v,w){var x=v.type;return x===Vi?d(h,f,v.props.children,w,v.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wn&&Dd(x)===f.type)?(w=t(f,v.props),w.ref=Ma(h,f,v),w.return=h,w):(w=Kr(v.type,v.key,v.props,null,h.mode,w),w.ref=Ma(h,f,v),w.return=h,w)}function u(h,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=hl(v,h.mode,w),f.return=h,f):(f=t(f,v.children||[]),f.return=h,f)}function d(h,f,v,w,x){return f===null||f.tag!==7?(f=Pi(v,h.mode,w,x),f.return=h,f):(f=t(f,v),f.return=h,f)}function p(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ml(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vt:return v=Kr(f.type,f.key,f.props,null,h.mode,v),v.ref=Ma(h,null,f),v.return=h,v;case Ii:return f=hl(f,h.mode,v),f.return=h,f;case Wn:var w=f._init;return p(h,w(f._payload),v)}if(Wa(f)||Ta(f))return f=Pi(f,h.mode,v,null),f.return=h,f;ir(h,f)}return null}function m(h,f,v,w){var x=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:s(h,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vt:return v.key===x?c(h,f,v,w):null;case Ii:return v.key===x?u(h,f,v,w):null;case Wn:return x=v._init,m(h,f,x(v._payload),w)}if(Wa(v)||Ta(v))return x!==null?null:d(h,f,v,w,null);ir(h,v)}return null}function g(h,f,v,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,s(f,h,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Vt:return h=h.get(w.key===null?v:w.key)||null,c(f,h,w,x);case Ii:return h=h.get(w.key===null?v:w.key)||null,u(f,h,w,x);case Wn:var C=w._init;return g(h,f,v,C(w._payload),x)}if(Wa(w)||Ta(w))return h=h.get(v)||null,d(f,h,w,x,null);ir(f,w)}return null}function R(h,f,v,w){for(var x=null,C=null,L=f,T=f=0,F=null;L!==null&&T<v.length;T++){L.index>T?(F=L,L=null):F=L.sibling;var D=m(h,L,v[T],w);if(D===null){L===null&&(L=F);break}e&&L&&D.alternate===null&&n(h,L),f=r(D,f,T),C===null?x=D:C.sibling=D,C=D,L=F}if(T===v.length)return i(h,L),re&&hi(h,T),x;if(L===null){for(;T<v.length;T++)L=p(h,v[T],w),L!==null&&(f=r(L,f,T),C===null?x=L:C.sibling=L,C=L);return re&&hi(h,T),x}for(L=a(h,L);T<v.length;T++)F=g(L,h,T,v[T],w),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?T:F.key),f=r(F,f,T),C===null?x=F:C.sibling=F,C=F);return e&&L.forEach(function(q){return n(h,q)}),re&&hi(h,T),x}function y(h,f,v,w){var x=Ta(v);if(typeof x!="function")throw Error($(150));if(v=x.call(v),v==null)throw Error($(151));for(var C=x=null,L=f,T=f=0,F=null,D=v.next();L!==null&&!D.done;T++,D=v.next()){L.index>T?(F=L,L=null):F=L.sibling;var q=m(h,L,D.value,w);if(q===null){L===null&&(L=F);break}e&&L&&q.alternate===null&&n(h,L),f=r(q,f,T),C===null?x=q:C.sibling=q,C=q,L=F}if(D.done)return i(h,L),re&&hi(h,T),x;if(L===null){for(;!D.done;T++,D=v.next())D=p(h,D.value,w),D!==null&&(f=r(D,f,T),C===null?x=D:C.sibling=D,C=D);return re&&hi(h,T),x}for(L=a(h,L);!D.done;T++,D=v.next())D=g(L,h,T,D.value,w),D!==null&&(e&&D.alternate!==null&&L.delete(D.key===null?T:D.key),f=r(D,f,T),C===null?x=D:C.sibling=D,C=D);return e&&L.forEach(function(nn){return n(h,nn)}),re&&hi(h,T),x}function k(h,f,v,w){if(typeof v=="object"&&v!==null&&v.type===Vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vt:e:{for(var x=v.key,C=f;C!==null;){if(C.key===x){if(x=v.type,x===Vi){if(C.tag===7){i(h,C.sibling),f=t(C,v.props.children),f.return=h,h=f;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wn&&Dd(x)===C.type){i(h,C.sibling),f=t(C,v.props),f.ref=Ma(h,C,v),f.return=h,h=f;break e}i(h,C);break}else n(h,C);C=C.sibling}v.type===Vi?(f=Pi(v.props.children,h.mode,w,v.key),f.return=h,h=f):(w=Kr(v.type,v.key,v.props,null,h.mode,w),w.ref=Ma(h,f,v),w.return=h,h=w)}return o(h);case Ii:e:{for(C=v.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){i(h,f.sibling),f=t(f,v.children||[]),f.return=h,h=f;break e}else{i(h,f);break}else n(h,f);f=f.sibling}f=hl(v,h.mode,w),f.return=h,h=f}return o(h);case Wn:return C=v._init,k(h,f,C(v._payload),w)}if(Wa(v))return R(h,f,v,w);if(Ta(v))return y(h,f,v,w);ir(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(i(h,f.sibling),f=t(f,v),f.return=h,h=f):(i(h,f),f=ml(v,h.mode,w),f.return=h,h=f),o(h)):i(h,f)}return k}var pa=up(!0),gp=up(!1),Ur=gi(null),Qr=null,Xi=null,dc=null;function uc(){dc=Xi=Qr=null}function gc(e){var n=Ur.current;te(Ur),e._currentValue=n}function os(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function la(e,n){Qr=e,dc=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Je=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:n,next:null},Xi===null){if(Qr===null)throw Error($(308));Xi=e,Qr.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return n}var ji=null;function pc(e){ji===null?ji=[e]:ji.push(e)}function pp(e,n,i,a){var t=n.interleaved;return t===null?(i.next=i,pc(n)):(i.next=t.next,t.next=i),n.interleaved=i,Jn(e,a)}function Jn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Un=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ai(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,W&2){var t=a.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n,Jn(e,i)}return t=a.interleaved,t===null?(n.next=n,pc(a)):(n.next=t.next,t.next=n),a.interleaved=n,Jn(e,i)}function yr(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Xs(e,i)}}function zd(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var t=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?t=r=o:r=r.next=o,i=i.next}while(i!==null);r===null?t=r=n:r=r.next=n}else t=r=n;i={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function qr(e,n,i,a){var t=e.updateQueue;Un=!1;var r=t.firstBaseUpdate,o=t.lastBaseUpdate,s=t.shared.pending;if(s!==null){t.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?r=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(r!==null){var p=t.baseState;o=0,d=u=c=null,s=r;do{var m=s.lane,g=s.eventTime;if((a&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var R=e,y=s;switch(m=n,g=i,y.tag){case 1:if(R=y.payload,typeof R=="function"){p=R.call(g,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=y.payload,m=typeof R=="function"?R.call(g,p,m):R,m==null)break e;p=se({},p,m);break e;case 2:Un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=t.effects,m===null?t.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=g,c=p):d=d.next=g,o|=m;if(s=s.next,s===null){if(s=t.shared.pending,s===null)break;m=s,s=m.next,m.next=null,t.lastBaseUpdate=m,t.shared.pending=null}}while(!0);if(d===null&&(c=p),t.baseState=c,t.firstBaseUpdate=u,t.lastBaseUpdate=d,n=t.shared.interleaved,n!==null){t=n;do o|=t.lane,t=t.next;while(t!==n)}else r===null&&(t.shared.lanes=0);Si|=o,e.lanes=o,e.memoizedState=p}}function Jd(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],t=a.callback;if(t!==null){if(a.callback=null,a=i,typeof t!="function")throw Error($(191,t));t.call(a)}}}var Mt={},Tn=gi(Mt),Rt=gi(Mt),jt=gi(Mt);function yi(e){if(e===Mt)throw Error($(174));return e}function mc(e,n){switch(ee(jt,n),ee(Rt,e),ee(Tn,Mt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fl(n,e)}te(Tn),ee(Tn,n)}function fa(){te(Tn),te(Rt),te(jt)}function mp(e){yi(jt.current);var n=yi(Tn.current),i=Fl(n,e.type);n!==i&&(ee(Rt,e),ee(Tn,i))}function hc(e){Rt.current===e&&(te(Tn),te(Rt))}var oe=gi(0);function Zr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var cl=[];function vc(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var xr=An.ReactCurrentDispatcher,dl=An.ReactCurrentBatchConfig,$i=0,le=null,ve=null,Re=null,Gr=!1,at=!1,yt=0,Nh=0;function Le(){throw Error($(321))}function wc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!jn(e[i],n[i]))return!1;return!0}function Rc(e,n,i,a,t,r){if($i=r,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xr.current=e===null||e.memoizedState===null?Hh:Dh,e=i(a,t),at){r=0;do{if(at=!1,yt=0,25<=r)throw Error($(301));r+=1,Re=ve=null,n.updateQueue=null,xr.current=zh,e=i(a,t)}while(at)}if(xr.current=Yr,n=ve!==null&&ve.next!==null,$i=0,Re=ve=le=null,Gr=!1,n)throw Error($(300));return e}function jc(){var e=yt!==0;return yt=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?le.memoizedState=Re=e:Re=Re.next=e,Re}function cn(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=Re===null?le.memoizedState:Re.next;if(n!==null)Re=n,ve=e;else{if(e===null)throw Error($(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Re===null?le.memoizedState=Re=e:Re=Re.next=e}return Re}function xt(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=cn(),i=n.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=e;var a=ve,t=a.baseQueue,r=i.pending;if(r!==null){if(t!==null){var o=t.next;t.next=r.next,r.next=o}a.baseQueue=t=r,i.pending=null}if(t!==null){r=t.next,a=a.baseState;var s=o=null,c=null,u=r;do{var d=u.lane;if(($i&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=p,o=a):c=c.next=p,le.lanes|=d,Si|=d}u=u.next}while(u!==null&&u!==r);c===null?o=a:c.next=s,jn(a,n.memoizedState)||(Je=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=c,i.lastRenderedState=a}if(e=i.interleaved,e!==null){t=e;do r=t.lane,le.lanes|=r,Si|=r,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function gl(e){var n=cn(),i=n.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=e;var a=i.dispatch,t=i.pending,r=n.memoizedState;if(t!==null){i.pending=null;var o=t=t.next;do r=e(r,o.action),o=o.next;while(o!==t);jn(r,n.memoizedState)||(Je=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),i.lastRenderedState=r}return[r,a]}function hp(){}function vp(e,n){var i=le,a=cn(),t=n(),r=!jn(a.memoizedState,t);if(r&&(a.memoizedState=t,Je=!0),a=a.queue,yc(jp.bind(null,i,a,e),[e]),a.getSnapshot!==n||r||Re!==null&&Re.memoizedState.tag&1){if(i.flags|=2048,kt(9,Rp.bind(null,i,a,t,n),void 0,null),ye===null)throw Error($(349));$i&30||wp(i,n,t)}return t}function wp(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Rp(e,n,i,a){n.value=i,n.getSnapshot=a,yp(n)&&xp(e)}function jp(e,n,i){return i(function(){yp(n)&&xp(e)})}function yp(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!jn(e,i)}catch{return!0}}function xp(e){var n=Jn(e,1);n!==null&&vn(n,e,1,-1)}function Fd(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:e},n.queue=e,e=e.dispatch=Eh.bind(null,le,e),[n.memoizedState,e]}function kt(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function kp(){return cn().memoizedState}function kr(e,n,i,a){var t=Pn();le.flags|=e,t.memoizedState=kt(1|n,i,void 0,a===void 0?null:a)}function ko(e,n,i,a){var t=cn();a=a===void 0?null:a;var r=void 0;if(ve!==null){var o=ve.memoizedState;if(r=o.destroy,a!==null&&wc(a,o.deps)){t.memoizedState=kt(n,i,r,a);return}}le.flags|=e,t.memoizedState=kt(1|n,i,r,a)}function _d(e,n){return kr(8390656,8,e,n)}function yc(e,n){return ko(2048,8,e,n)}function Pp(e,n){return ko(4,2,e,n)}function Cp(e,n){return ko(4,4,e,n)}function Lp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kp(e,n,i){return i=i!=null?i.concat([e]):null,ko(4,4,Lp.bind(null,n,e),i)}function xc(){}function bp(e,n){var i=cn();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&wc(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function Tp(e,n){var i=cn();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&wc(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function $p(e,n,i){return $i&21?(jn(i,n)||(i=Eg(),le.lanes|=i,Si|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=i)}function Oh(e,n){var i=G;G=i!==0&&4>i?i:4,e(!0);var a=dl.transition;dl.transition={};try{e(!1),n()}finally{G=i,dl.transition=a}}function Sp(){return cn().memoizedState}function Mh(e,n,i){var a=ri(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Np(e))Op(n,i);else if(i=pp(e,n,i,a),i!==null){var t=Oe();vn(i,e,a,t),Mp(i,n,a)}}function Eh(e,n,i){var a=ri(e),t={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Np(e))Op(n,t);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,s=r(o,i);if(t.hasEagerState=!0,t.eagerState=s,jn(s,o)){var c=n.interleaved;c===null?(t.next=t,pc(n)):(t.next=c.next,c.next=t),n.interleaved=t;return}}catch{}finally{}i=pp(e,n,t,a),i!==null&&(t=Oe(),vn(i,e,a,t),Mp(i,n,a))}}function Np(e){var n=e.alternate;return e===le||n!==null&&n===le}function Op(e,n){at=Gr=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Mp(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Xs(e,i)}}var Yr={readContext:sn,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Hh={readContext:sn,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:_d,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,kr(4194308,4,Lp.bind(null,n,e),i)},useLayoutEffect:function(e,n){return kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return kr(4,2,e,n)},useMemo:function(e,n){var i=Pn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=Pn();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Mh.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:Fd,useDebugValue:xc,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=Fd(!1),n=e[0];return e=Oh.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=le,t=Pn();if(re){if(i===void 0)throw Error($(407));i=i()}else{if(i=n(),ye===null)throw Error($(349));$i&30||wp(a,n,i)}t.memoizedState=i;var r={value:i,getSnapshot:n};return t.queue=r,_d(jp.bind(null,a,r,e),[e]),a.flags|=2048,kt(9,Rp.bind(null,a,r,i,n),void 0,null),i},useId:function(){var e=Pn(),n=ye.identifierPrefix;if(re){var i=En,a=Mn;i=(a&~(1<<32-hn(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=yt++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Nh++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Dh={readContext:sn,useCallback:bp,useContext:sn,useEffect:yc,useImperativeHandle:Kp,useInsertionEffect:Pp,useLayoutEffect:Cp,useMemo:Tp,useReducer:ul,useRef:kp,useState:function(){return ul(xt)},useDebugValue:xc,useDeferredValue:function(e){var n=cn();return $p(n,ve.memoizedState,e)},useTransition:function(){var e=ul(xt)[0],n=cn().memoizedState;return[e,n]},useMutableSource:hp,useSyncExternalStore:vp,useId:Sp,unstable_isNewReconciler:!1},zh={readContext:sn,useCallback:bp,useContext:sn,useEffect:yc,useImperativeHandle:Kp,useInsertionEffect:Pp,useLayoutEffect:Cp,useMemo:Tp,useReducer:gl,useRef:kp,useState:function(){return gl(xt)},useDebugValue:xc,useDeferredValue:function(e){var n=cn();return ve===null?n.memoizedState=e:$p(n,ve.memoizedState,e)},useTransition:function(){var e=gl(xt)[0],n=cn().memoizedState;return[e,n]},useMutableSource:hp,useSyncExternalStore:vp,useId:Sp,unstable_isNewReconciler:!1};function gn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function ls(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:se({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Po={isMounted:function(e){return(e=e._reactInternals)?Di(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=Oe(),t=ri(e),r=Hn(a,t);r.payload=n,i!=null&&(r.callback=i),n=ai(e,r,t),n!==null&&(vn(n,e,t,a),yr(n,e,t))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=Oe(),t=ri(e),r=Hn(a,t);r.tag=1,r.payload=n,i!=null&&(r.callback=i),n=ai(e,r,t),n!==null&&(vn(n,e,t,a),yr(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Oe(),a=ri(e),t=Hn(i,a);t.tag=2,n!=null&&(t.callback=n),n=ai(e,t,a),n!==null&&(vn(n,e,a,i),yr(n,e,a))}};function Ad(e,n,i,a,t,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):n.prototype&&n.prototype.isPureReactComponent?!mt(i,a)||!mt(t,r):!0}function Ep(e,n,i){var a=!1,t=ci,r=n.contextType;return typeof r=="object"&&r!==null?r=sn(r):(t=Ae(n)?bi:Se.current,a=n.contextTypes,r=(a=a!=null)?ua(e,t):ci),n=new n(i,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Po,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),n}function Bd(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&Po.enqueueReplaceState(n,n.state,null)}function ss(e,n,i,a){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs={},fc(e);var r=n.contextType;typeof r=="object"&&r!==null?t.context=sn(r):(r=Ae(n)?bi:Se.current,t.context=ua(e,r)),t.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ls(e,n,r,i),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&Po.enqueueReplaceState(t,t.state,null),qr(e,i,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function ma(e,n){try{var i="",a=n;do i+=gm(a),a=a.return;while(a);var t=i}catch(r){t=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:t,digest:null}}function pl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function cs(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Jh=typeof WeakMap=="function"?WeakMap:Map;function Hp(e,n,i){i=Hn(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){eo||(eo=!0,Rs=a),cs(e,n)},i}function Dp(e,n,i){i=Hn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=n.value;i.payload=function(){return a(t)},i.callback=function(){cs(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){cs(e,n),typeof a!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),i}function Id(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Jh;var t=new Set;a.set(n,t)}else t=a.get(n),t===void 0&&(t=new Set,a.set(n,t));t.has(i)||(t.add(i),e=Xh.bind(null,e,n,i),n.then(e,e))}function Vd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Wd(e,n,i,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Hn(-1,1),n.tag=2,ai(i,n,1))),i.lanes|=1),e)}var Fh=An.ReactCurrentOwner,Je=!1;function Ne(e,n,i,a){n.child=e===null?gp(n,null,i,a):pa(n,e.child,i,a)}function Ud(e,n,i,a,t){i=i.render;var r=n.ref;return la(n,t),a=Rc(e,n,i,a,r,t),i=jc(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Fn(e,n,t)):(re&&i&&lc(n),n.flags|=1,Ne(e,n,a,t),n.child)}function Qd(e,n,i,a,t){if(e===null){var r=i.type;return typeof r=="function"&&!$c(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=r,zp(e,n,r,a,t)):(e=Kr(i.type,null,a,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&t)){var o=r.memoizedProps;if(i=i.compare,i=i!==null?i:mt,i(o,a)&&e.ref===n.ref)return Fn(e,n,t)}return n.flags|=1,e=oi(r,a),e.ref=n.ref,e.return=n,n.child=e}function zp(e,n,i,a,t){if(e!==null){var r=e.memoizedProps;if(mt(r,a)&&e.ref===n.ref)if(Je=!1,n.pendingProps=a=r,(e.lanes&t)!==0)e.flags&131072&&(Je=!0);else return n.lanes=e.lanes,Fn(e,n,t)}return ds(e,n,i,a,t)}function Jp(e,n,i){var a=n.pendingProps,t=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(na,We),We|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(na,We),We|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:i,ee(na,We),We|=a}else r!==null?(a=r.baseLanes|i,n.memoizedState=null):a=i,ee(na,We),We|=a;return Ne(e,n,t,i),n.child}function Fp(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function ds(e,n,i,a,t){var r=Ae(i)?bi:Se.current;return r=ua(n,r),la(n,t),i=Rc(e,n,i,a,r,t),a=jc(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Fn(e,n,t)):(re&&a&&lc(n),n.flags|=1,Ne(e,n,i,t),n.child)}function qd(e,n,i,a,t){if(Ae(i)){var r=!0;Ir(n)}else r=!1;if(la(n,t),n.stateNode===null)Pr(e,n),Ep(n,i,a),ss(n,i,a,t),a=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var c=o.context,u=i.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Ae(i)?bi:Se.current,u=ua(n,u));var d=i.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==a||c!==u)&&Bd(n,o,a,u),Un=!1;var m=n.memoizedState;o.state=m,qr(n,a,o,t),c=n.memoizedState,s!==a||m!==c||_e.current||Un?(typeof d=="function"&&(ls(n,i,d,a),c=n.memoizedState),(s=Un||Ad(n,i,s,a,m,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),o.props=a,o.state=c,o.context=u,a=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,fp(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:gn(n.type,s),o.props=u,p=n.pendingProps,m=o.context,c=i.contextType,typeof c=="object"&&c!==null?c=sn(c):(c=Ae(i)?bi:Se.current,c=ua(n,c));var g=i.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||m!==c)&&Bd(n,o,a,c),Un=!1,m=n.memoizedState,o.state=m,qr(n,a,o,t);var R=n.memoizedState;s!==p||m!==R||_e.current||Un?(typeof g=="function"&&(ls(n,i,g,a),R=n.memoizedState),(u=Un||Ad(n,i,u,a,m,R,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,R,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,R,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=R),o.props=a,o.state=R,o.context=c,a=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return us(e,n,i,a,r,t)}function us(e,n,i,a,t,r){Fp(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return t&&Md(n,i,!1),Fn(e,n,r);a=n.stateNode,Fh.current=n;var s=o&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=pa(n,e.child,null,r),n.child=pa(n,null,s,r)):Ne(e,n,s,r),n.memoizedState=a.state,t&&Md(n,i,!0),n.child}function _p(e){var n=e.stateNode;n.pendingContext?Od(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Od(e,n.context,!1),mc(e,n.containerInfo)}function Zd(e,n,i,a,t){return ga(),cc(t),n.flags|=256,Ne(e,n,i,a),n.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ap(e,n,i){var a=n.pendingProps,t=oe.current,r=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(t&2)!==0),s?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),ee(oe,t&1),e===null)return rs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,r?(a=n.mode,r=n.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Ko(o,a,0,null),e=Pi(e,a,i,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ps(i),n.memoizedState=gs,e):kc(n,o));if(t=e.memoizedState,t!==null&&(s=t.dehydrated,s!==null))return _h(e,n,o,a,s,t,i);if(r){r=a.fallback,o=n.mode,t=e.child,s=t.sibling;var c={mode:"hidden",children:a.children};return!(o&1)&&n.child!==t?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=oi(t,c),a.subtreeFlags=t.subtreeFlags&14680064),s!==null?r=oi(s,r):(r=Pi(r,o,i,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,a=r,r=n.child,o=e.child.memoizedState,o=o===null?ps(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~i,n.memoizedState=gs,a}return r=e.child,e=r.sibling,a=oi(r,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function kc(e,n){return n=Ko({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ar(e,n,i,a){return a!==null&&cc(a),pa(n,e.child,null,i),e=kc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _h(e,n,i,a,t,r,o){if(i)return n.flags&256?(n.flags&=-257,a=pl(Error($(422))),ar(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=a.fallback,t=n.mode,a=Ko({mode:"visible",children:a.children},t,0,null),r=Pi(r,t,o,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,n.mode&1&&pa(n,e.child,null,o),n.child.memoizedState=ps(o),n.memoizedState=gs,r);if(!(n.mode&1))return ar(e,n,o,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var s=a.dgst;return a=s,r=Error($(419)),a=pl(r,a,void 0),ar(e,n,o,a)}if(s=(o&e.childLanes)!==0,Je||s){if(a=ye,a!==null){switch(o&-o){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|o)?0:t,t!==0&&t!==r.retryLane&&(r.retryLane=t,Jn(e,t),vn(a,e,t,-1))}return Tc(),a=pl(Error($(421))),ar(e,n,o,a)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=ev.bind(null,e),t._reactRetry=n,null):(e=r.treeContext,Ue=ii(t.nextSibling),qe=n,re=!0,fn=null,e!==null&&(tn[rn++]=Mn,tn[rn++]=En,tn[rn++]=Ti,Mn=e.id,En=e.overflow,Ti=n),n=kc(n,a.children),n.flags|=4096,n)}function Gd(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),os(e.return,n,i)}function fl(e,n,i,a,t){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:t}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=i,r.tailMode=t)}function Bp(e,n,i){var a=n.pendingProps,t=a.revealOrder,r=a.tail;if(Ne(e,n,a.children,i),a=oe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gd(e,i,n);else if(e.tag===19)Gd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ee(oe,a),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(i=n.child,t=null;i!==null;)e=i.alternate,e!==null&&Zr(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=n.child,n.child=null):(t=i.sibling,i.sibling=null),fl(n,!1,t,i,r);break;case"backwards":for(i=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&Zr(e)===null){n.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}fl(n,!0,i,null,r);break;case"together":fl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Fn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Si|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error($(153));if(n.child!==null){for(e=n.child,i=oi(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=oi(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Ah(e,n,i){switch(n.tag){case 3:_p(n),ga();break;case 5:mp(n);break;case 1:Ae(n.type)&&Ir(n);break;case 4:mc(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,t=n.memoizedProps.value;ee(Ur,a._currentValue),a._currentValue=t;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ee(oe,oe.current&1),n.flags|=128,null):i&n.child.childLanes?Ap(e,n,i):(ee(oe,oe.current&1),e=Fn(e,n,i),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return Bp(e,n,i);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),ee(oe,oe.current),a)break;return null;case 22:case 23:return n.lanes=0,Jp(e,n,i)}return Fn(e,n,i)}var Ip,fs,Vp,Wp;Ip=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};fs=function(){};Vp=function(e,n,i,a){var t=e.memoizedProps;if(t!==a){e=n.stateNode,yi(Tn.current);var r=null;switch(i){case"input":t=Hl(e,t),a=Hl(e,a),r=[];break;case"select":t=se({},t,{value:void 0}),a=se({},a,{value:void 0}),r=[];break;case"textarea":t=Jl(e,t),a=Jl(e,a),r=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ar)}_l(i,a);var o;i=null;for(u in t)if(!a.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var s=t[u];for(o in s)s.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(st.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in a){var c=a[u];if(s=t!=null?t[u]:void 0,a.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(i||(i={}),i[o]=c[o])}else i||(r||(r=[]),r.push(u,i)),i=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(r=r||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(st.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",e),r||s===c||(r=[])):(r=r||[]).push(u,c))}i&&(r=r||[]).push("style",i);var u=r;(n.updateQueue=u)&&(n.flags|=4)}};Wp=function(e,n,i,a){i!==a&&(n.flags|=4)};function Ea(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function Bh(e,n,i){var a=n.pendingProps;switch(sc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ae(n.type)&&Br(),Ke(n),null;case 3:return a=n.stateNode,fa(),te(_e),te(Se),vc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fn!==null&&(xs(fn),fn=null))),fs(e,n),Ke(n),null;case 5:hc(n);var t=yi(jt.current);if(i=n.type,e!==null&&n.stateNode!=null)Vp(e,n,i,a,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error($(166));return Ke(n),null}if(e=yi(Tn.current),nr(n)){a=n.stateNode,i=n.type;var r=n.memoizedProps;switch(a[Ln]=n,a[wt]=r,e=(n.mode&1)!==0,i){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(t=0;t<Qa.length;t++)ie(Qa[t],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":od(a,r),ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ie("invalid",a);break;case"textarea":sd(a,r),ie("invalid",a)}_l(i,r),t=null;for(var o in r)if(r.hasOwnProperty(o)){var s=r[o];o==="children"?typeof s=="string"?a.textContent!==s&&(r.suppressHydrationWarning!==!0&&er(a.textContent,s,e),t=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&er(a.textContent,s,e),t=["children",""+s]):st.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ie("scroll",a)}switch(i){case"input":Wt(a),ld(a,r,!0);break;case"textarea":Wt(a),cd(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Ar)}a=t,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jg(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(i,{is:a.is}):(e=o.createElement(i),i==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,i),e[Ln]=n,e[wt]=a,Ip(e,n,!1,!1),n.stateNode=e;e:{switch(o=Al(i,a),i){case"dialog":ie("cancel",e),ie("close",e),t=a;break;case"iframe":case"object":case"embed":ie("load",e),t=a;break;case"video":case"audio":for(t=0;t<Qa.length;t++)ie(Qa[t],e);t=a;break;case"source":ie("error",e),t=a;break;case"img":case"image":case"link":ie("error",e),ie("load",e),t=a;break;case"details":ie("toggle",e),t=a;break;case"input":od(e,a),t=Hl(e,a),ie("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=se({},a,{value:void 0}),ie("invalid",e);break;case"textarea":sd(e,a),t=Jl(e,a),ie("invalid",e);break;default:t=a}_l(i,t),s=t;for(r in s)if(s.hasOwnProperty(r)){var c=s[r];r==="style"?kg(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yg(e,c)):r==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&ct(e,c):typeof c=="number"&&ct(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(st.hasOwnProperty(r)?c!=null&&r==="onScroll"&&ie("scroll",e):c!=null&&Us(e,r,c,o))}switch(i){case"input":Wt(e),ld(e,a,!1);break;case"textarea":Wt(e),cd(e);break;case"option":a.value!=null&&e.setAttribute("value",""+si(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?aa(e,!!a.multiple,r,!1):a.defaultValue!=null&&aa(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Ar)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ke(n),null;case 6:if(e&&n.stateNode!=null)Wp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error($(166));if(i=yi(jt.current),yi(Tn.current),nr(n)){if(a=n.stateNode,i=n.memoizedProps,a[Ln]=n,(r=a.nodeValue!==i)&&(e=qe,e!==null))switch(e.tag){case 3:er(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&er(a.nodeValue,i,(e.mode&1)!==0)}r&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Ln]=n,n.stateNode=a}return Ke(n),null;case 13:if(te(oe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ue!==null&&n.mode&1&&!(n.flags&128))dp(),ga(),n.flags|=98560,r=!1;else if(r=nr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error($(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error($(317));r[Ln]=n}else ga(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ke(n),r=!1}else fn!==null&&(xs(fn),fn=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?we===0&&(we=3):Tc())),n.updateQueue!==null&&(n.flags|=4),Ke(n),null);case 4:return fa(),fs(e,n),e===null&&ht(n.stateNode.containerInfo),Ke(n),null;case 10:return gc(n.type._context),Ke(n),null;case 17:return Ae(n.type)&&Br(),Ke(n),null;case 19:if(te(oe),r=n.memoizedState,r===null)return Ke(n),null;if(a=(n.flags&128)!==0,o=r.rendering,o===null)if(a)Ea(r,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Zr(e),o!==null){for(n.flags|=128,Ea(r,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)r=i,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ee(oe,oe.current&1|2),n.child}e=e.sibling}r.tail!==null&&pe()>ha&&(n.flags|=128,a=!0,Ea(r,!1),n.lanes=4194304)}else{if(!a)if(e=Zr(o),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ea(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!re)return Ke(n),null}else 2*pe()-r.renderingStartTime>ha&&i!==1073741824&&(n.flags|=128,a=!0,Ea(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(i=r.last,i!==null?i.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=pe(),n.sibling=null,i=oe.current,ee(oe,a?i&1|2:i&1),n):(Ke(n),null);case 22:case 23:return bc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?We&1073741824&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),null;case 24:return null;case 25:return null}throw Error($(156,n.tag))}function Ih(e,n){switch(sc(n),n.tag){case 1:return Ae(n.type)&&Br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fa(),te(_e),te(Se),vc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return hc(n),null;case 13:if(te(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error($(340));ga()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(oe),null;case 4:return fa(),null;case 10:return gc(n.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var tr=!1,$e=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,E=null;function ea(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){ge(e,n,a)}else i.current=null}function ms(e,n,i){try{i()}catch(a){ge(e,n,a)}}var Yd=!1;function Wh(e,n){if(Yl=Jr,e=Gg(),oc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var t=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,s=-1,c=-1,u=0,d=0,p=e,m=null;n:for(;;){for(var g;p!==i||t!==0&&p.nodeType!==3||(s=o+t),p!==r||a!==0&&p.nodeType!==3||(c=o+a),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break n;if(m===i&&++u===t&&(s=o),m===r&&++d===a&&(c=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}i=s===-1||c===-1?null:{start:s,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xl={focusedElem:e,selectionRange:i},Jr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var R=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var y=R.memoizedProps,k=R.memoizedState,h=n.stateNode,f=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:gn(n.type,y),k);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(w){ge(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return R=Yd,Yd=!1,R}function tt(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var r=t.destroy;t.destroy=void 0,r!==void 0&&ms(n,i,r)}t=t.next}while(t!==a)}}function Co(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function hs(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Up(e){var n=e.alternate;n!==null&&(e.alternate=null,Up(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ln],delete n[wt],delete n[is],delete n[bh],delete n[Th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qp(e){return e.tag===5||e.tag===3||e.tag===4}function Xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Ar));else if(a!==4&&(e=e.child,e!==null))for(vs(e,n,i),e=e.sibling;e!==null;)vs(e,n,i),e=e.sibling}function ws(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ws(e,n,i),e=e.sibling;e!==null;)ws(e,n,i),e=e.sibling}var ke=null,pn=!1;function In(e,n,i){for(i=i.child;i!==null;)qp(e,n,i),i=i.sibling}function qp(e,n,i){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(vo,i)}catch{}switch(i.tag){case 5:$e||ea(i,n);case 6:var a=ke,t=pn;ke=null,In(e,n,i),ke=a,pn=t,ke!==null&&(pn?(e=ke,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):ke.removeChild(i.stateNode));break;case 18:ke!==null&&(pn?(e=ke,i=i.stateNode,e.nodeType===8?ll(e.parentNode,i):e.nodeType===1&&ll(e,i),pt(e)):ll(ke,i.stateNode));break;case 4:a=ke,t=pn,ke=i.stateNode.containerInfo,pn=!0,In(e,n,i),ke=a,pn=t;break;case 0:case 11:case 14:case 15:if(!$e&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var r=t,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&ms(i,n,o),t=t.next}while(t!==a)}In(e,n,i);break;case 1:if(!$e&&(ea(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(s){ge(i,n,s)}In(e,n,i);break;case 21:In(e,n,i);break;case 22:i.mode&1?($e=(a=$e)||i.memoizedState!==null,In(e,n,i),$e=a):In(e,n,i);break;default:In(e,n,i)}}function eu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Vh),n.forEach(function(a){var t=nv.bind(null,e,a);i.has(a)||(i.add(a),a.then(t,t))})}}function un(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var t=i[a];try{var r=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,pn=!1;break e;case 3:ke=s.stateNode.containerInfo,pn=!0;break e;case 4:ke=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(ke===null)throw Error($(160));qp(r,o,t),ke=null,pn=!1;var c=t.alternate;c!==null&&(c.return=null),t.return=null}catch(u){ge(t,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Zp(n,e),n=n.sibling}function Zp(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),yn(e),a&4){try{tt(3,e,e.return),Co(3,e)}catch(y){ge(e,e.return,y)}try{tt(5,e,e.return)}catch(y){ge(e,e.return,y)}}break;case 1:un(n,e),yn(e),a&512&&i!==null&&ea(i,i.return);break;case 5:if(un(n,e),yn(e),a&512&&i!==null&&ea(i,i.return),e.flags&32){var t=e.stateNode;try{ct(t,"")}catch(y){ge(e,e.return,y)}}if(a&4&&(t=e.stateNode,t!=null)){var r=e.memoizedProps,o=i!==null?i.memoizedProps:r,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&wg(t,r),Al(s,o);var u=Al(s,r);for(o=0;o<c.length;o+=2){var d=c[o],p=c[o+1];d==="style"?kg(t,p):d==="dangerouslySetInnerHTML"?yg(t,p):d==="children"?ct(t,p):Us(t,d,p,u)}switch(s){case"input":Dl(t,r);break;case"textarea":Rg(t,r);break;case"select":var m=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?aa(t,!!r.multiple,g,!1):m!==!!r.multiple&&(r.defaultValue!=null?aa(t,!!r.multiple,r.defaultValue,!0):aa(t,!!r.multiple,r.multiple?[]:"",!1))}t[wt]=r}catch(y){ge(e,e.return,y)}}break;case 6:if(un(n,e),yn(e),a&4){if(e.stateNode===null)throw Error($(162));t=e.stateNode,r=e.memoizedProps;try{t.nodeValue=r}catch(y){ge(e,e.return,y)}}break;case 3:if(un(n,e),yn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{pt(n.containerInfo)}catch(y){ge(e,e.return,y)}break;case 4:un(n,e),yn(e);break;case 13:un(n,e),yn(e),t=e.child,t.flags&8192&&(r=t.memoizedState!==null,t.stateNode.isHidden=r,!r||t.alternate!==null&&t.alternate.memoizedState!==null||(Lc=pe())),a&4&&eu(e);break;case 22:if(d=i!==null&&i.memoizedState!==null,e.mode&1?($e=(u=$e)||d,un(n,e),$e=u):un(n,e),yn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(p=E=d;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:tt(4,m,m.return);break;case 1:ea(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){a=m,i=m.return;try{n=a,R.props=n.memoizedProps,R.state=n.memoizedState,R.componentWillUnmount()}catch(y){ge(a,i,y)}}break;case 5:ea(m,m.return);break;case 22:if(m.memoizedState!==null){iu(p);continue}}g!==null?(g.return=m,E=g):iu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{t=p.stateNode,u?(r=t.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=xg("display",o))}catch(y){ge(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ge(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:un(n,e),yn(e),a&4&&eu(e);break;case 21:break;default:un(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Qp(i)){var a=i;break e}i=i.return}throw Error($(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(ct(t,""),a.flags&=-33);var r=Xd(e);ws(e,r,t);break;case 3:case 4:var o=a.stateNode.containerInfo,s=Xd(e);vs(e,s,o);break;default:throw Error($(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Uh(e,n,i){E=e,Gp(e)}function Gp(e,n,i){for(var a=(e.mode&1)!==0;E!==null;){var t=E,r=t.child;if(t.tag===22&&a){var o=t.memoizedState!==null||tr;if(!o){var s=t.alternate,c=s!==null&&s.memoizedState!==null||$e;s=tr;var u=$e;if(tr=o,($e=c)&&!u)for(E=t;E!==null;)o=E,c=o.child,o.tag===22&&o.memoizedState!==null?au(t):c!==null?(c.return=o,E=c):au(t);for(;r!==null;)E=r,Gp(r),r=r.sibling;E=t,tr=s,$e=u}nu(e)}else t.subtreeFlags&8772&&r!==null?(r.return=t,E=r):nu(e)}}function nu(e){for(;E!==null;){var n=E;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:$e||Co(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!$e)if(i===null)a.componentDidMount();else{var t=n.elementType===n.type?i.memoizedProps:gn(n.type,i.memoizedProps);a.componentDidUpdate(t,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Jd(n,r,a);break;case 3:var o=n.updateQueue;if(o!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Jd(n,o,i)}break;case 5:var s=n.stateNode;if(i===null&&n.flags&4){i=s;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&pt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}$e||n.flags&512&&hs(n)}catch(m){ge(n,n.return,m)}}if(n===e){E=null;break}if(i=n.sibling,i!==null){i.return=n.return,E=i;break}E=n.return}}function iu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var i=n.sibling;if(i!==null){i.return=n.return,E=i;break}E=n.return}}function au(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Co(4,n)}catch(c){ge(n,i,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var t=n.return;try{a.componentDidMount()}catch(c){ge(n,t,c)}}var r=n.return;try{hs(n)}catch(c){ge(n,r,c)}break;case 5:var o=n.return;try{hs(n)}catch(c){ge(n,o,c)}}}catch(c){ge(n,n.return,c)}if(n===e){E=null;break}var s=n.sibling;if(s!==null){s.return=n.return,E=s;break}E=n.return}}var Qh=Math.ceil,Xr=An.ReactCurrentDispatcher,Pc=An.ReactCurrentOwner,ln=An.ReactCurrentBatchConfig,W=0,ye=null,me=null,Pe=0,We=0,na=gi(0),we=0,Pt=null,Si=0,Lo=0,Cc=0,rt=null,ze=null,Lc=0,ha=1/0,Sn=null,eo=!1,Rs=null,ti=null,rr=!1,Gn=null,no=0,ot=0,js=null,Cr=-1,Lr=0;function Oe(){return W&6?pe():Cr!==-1?Cr:Cr=pe()}function ri(e){return e.mode&1?W&2&&Pe!==0?Pe&-Pe:Sh.transition!==null?(Lr===0&&(Lr=Eg()),Lr):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ag(e.type)),e):1}function vn(e,n,i,a){if(50<ot)throw ot=0,js=null,Error($(185));St(e,i,a),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(Lo|=i),we===4&&qn(e,Pe)),Be(e,a),i===1&&W===0&&!(n.mode&1)&&(ha=pe()+500,xo&&pi()))}function Be(e,n){var i=e.callbackNode;Sm(e,n);var a=zr(e,e===ye?Pe:0);if(a===0)i!==null&&gd(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&gd(i),n===1)e.tag===0?$h(tu.bind(null,e)):lp(tu.bind(null,e)),Lh(function(){!(W&6)&&pi()}),i=null;else{switch(Hg(a)){case 1:i=Ys;break;case 4:i=Og;break;case 16:i=Dr;break;case 536870912:i=Mg;break;default:i=Dr}i=of(i,Yp.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Yp(e,n){if(Cr=-1,Lr=0,W&6)throw Error($(327));var i=e.callbackNode;if(sa()&&e.callbackNode!==i)return null;var a=zr(e,e===ye?Pe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=io(e,a);else{n=a;var t=W;W|=2;var r=ef();(ye!==e||Pe!==n)&&(Sn=null,ha=pe()+500,ki(e,n));do try{Gh();break}catch(s){Xp(e,s)}while(!0);uc(),Xr.current=r,W=t,me!==null?n=0:(ye=null,Pe=0,n=we)}if(n!==0){if(n===2&&(t=Ul(e),t!==0&&(a=t,n=ys(e,t))),n===1)throw i=Pt,ki(e,0),qn(e,a),Be(e,pe()),i;if(n===6)qn(e,a);else{if(t=e.current.alternate,!(a&30)&&!qh(t)&&(n=io(e,a),n===2&&(r=Ul(e),r!==0&&(a=r,n=ys(e,r))),n===1))throw i=Pt,ki(e,0),qn(e,a),Be(e,pe()),i;switch(e.finishedWork=t,e.finishedLanes=a,n){case 0:case 1:throw Error($(345));case 2:vi(e,ze,Sn);break;case 3:if(qn(e,a),(a&130023424)===a&&(n=Lc+500-pe(),10<n)){if(zr(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){Oe(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=ns(vi.bind(null,e,ze,Sn),n);break}vi(e,ze,Sn);break;case 4:if(qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,t=-1;0<a;){var o=31-hn(a);r=1<<o,o=n[o],o>t&&(t=o),a&=~r}if(a=t,a=pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Qh(a/1960))-a,10<a){e.timeoutHandle=ns(vi.bind(null,e,ze,Sn),a);break}vi(e,ze,Sn);break;case 5:vi(e,ze,Sn);break;default:throw Error($(329))}}}return Be(e,pe()),e.callbackNode===i?Yp.bind(null,e):null}function ys(e,n){var i=rt;return e.current.memoizedState.isDehydrated&&(ki(e,n).flags|=256),e=io(e,n),e!==2&&(n=ze,ze=i,n!==null&&xs(n)),e}function xs(e){ze===null?ze=e:ze.push.apply(ze,e)}function qh(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var t=i[a],r=t.getSnapshot;t=t.value;try{if(!jn(r(),t))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~Cc,n&=~Lo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-hn(n),a=1<<i;e[i]=-1,n&=~a}}function tu(e){if(W&6)throw Error($(327));sa();var n=zr(e,0);if(!(n&1))return Be(e,pe()),null;var i=io(e,n);if(e.tag!==0&&i===2){var a=Ul(e);a!==0&&(n=a,i=ys(e,a))}if(i===1)throw i=Pt,ki(e,0),qn(e,n),Be(e,pe()),i;if(i===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vi(e,ze,Sn),Be(e,pe()),null}function Kc(e,n){var i=W;W|=1;try{return e(n)}finally{W=i,W===0&&(ha=pe()+500,xo&&pi())}}function Ni(e){Gn!==null&&Gn.tag===0&&!(W&6)&&sa();var n=W;W|=1;var i=ln.transition,a=G;try{if(ln.transition=null,G=1,e)return e()}finally{G=a,ln.transition=i,W=n,!(W&6)&&pi()}}function bc(){We=na.current,te(na)}function ki(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Ch(i)),me!==null)for(i=me.return;i!==null;){var a=i;switch(sc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Br();break;case 3:fa(),te(_e),te(Se),vc();break;case 5:hc(a);break;case 4:fa();break;case 13:te(oe);break;case 19:te(oe);break;case 10:gc(a.type._context);break;case 22:case 23:bc()}i=i.return}if(ye=e,me=e=oi(e.current,null),Pe=We=n,we=0,Pt=null,Cc=Lo=Si=0,ze=rt=null,ji!==null){for(n=0;n<ji.length;n++)if(i=ji[n],a=i.interleaved,a!==null){i.interleaved=null;var t=a.next,r=i.pending;if(r!==null){var o=r.next;r.next=t,a.next=o}i.pending=a}ji=null}return e}function Xp(e,n){do{var i=me;try{if(uc(),xr.current=Yr,Gr){for(var a=le.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Gr=!1}if($i=0,Re=ve=le=null,at=!1,yt=0,Pc.current=null,i===null||i.return===null){we=1,Pt=n,me=null;break}e:{var r=e,o=i.return,s=i,c=n;if(n=Pe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Vd(o);if(g!==null){g.flags&=-257,Wd(g,o,s,r,n),g.mode&1&&Id(r,u,n),n=g,c=u;var R=n.updateQueue;if(R===null){var y=new Set;y.add(c),n.updateQueue=y}else R.add(c);break e}else{if(!(n&1)){Id(r,u,n),Tc();break e}c=Error($(426))}}else if(re&&s.mode&1){var k=Vd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Wd(k,o,s,r,n),cc(ma(c,s));break e}}r=c=ma(c,s),we!==4&&(we=2),rt===null?rt=[r]:rt.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var h=Hp(r,c,n);zd(r,h);break e;case 1:s=c;var f=r.type,v=r.stateNode;if(!(r.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ti===null||!ti.has(v)))){r.flags|=65536,n&=-n,r.lanes|=n;var w=Dp(r,s,n);zd(r,w);break e}}r=r.return}while(r!==null)}af(i)}catch(x){n=x,me===i&&i!==null&&(me=i=i.return);continue}break}while(!0)}function ef(){var e=Xr.current;return Xr.current=Yr,e===null?Yr:e}function Tc(){(we===0||we===3||we===2)&&(we=4),ye===null||!(Si&268435455)&&!(Lo&268435455)||qn(ye,Pe)}function io(e,n){var i=W;W|=2;var a=ef();(ye!==e||Pe!==n)&&(Sn=null,ki(e,n));do try{Zh();break}catch(t){Xp(e,t)}while(!0);if(uc(),W=i,Xr.current=a,me!==null)throw Error($(261));return ye=null,Pe=0,we}function Zh(){for(;me!==null;)nf(me)}function Gh(){for(;me!==null&&!xm();)nf(me)}function nf(e){var n=rf(e.alternate,e,We);e.memoizedProps=e.pendingProps,n===null?af(e):me=n,Pc.current=null}function af(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=Ih(i,n),i!==null){i.flags&=32767,me=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,me=null;return}}else if(i=Bh(i,n,We),i!==null){me=i;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);we===0&&(we=5)}function vi(e,n,i){var a=G,t=ln.transition;try{ln.transition=null,G=1,Yh(e,n,i,a)}finally{ln.transition=t,G=a}return null}function Yh(e,n,i,a){do sa();while(Gn!==null);if(W&6)throw Error($(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(Nm(e,r),e===ye&&(me=ye=null,Pe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||rr||(rr=!0,of(Dr,function(){return sa(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=ln.transition,ln.transition=null;var o=G;G=1;var s=W;W|=4,Pc.current=null,Wh(e,i),Zp(i,e),wh(Xl),Jr=!!Yl,Xl=Yl=null,e.current=i,Uh(i),km(),W=s,G=o,ln.transition=r}else e.current=i;if(rr&&(rr=!1,Gn=e,no=t),r=e.pendingLanes,r===0&&(ti=null),Lm(i.stateNode),Be(e,pe()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)t=n[i],a(t.value,{componentStack:t.stack,digest:t.digest});if(eo)throw eo=!1,e=Rs,Rs=null,e;return no&1&&e.tag!==0&&sa(),r=e.pendingLanes,r&1?e===js?ot++:(ot=0,js=e):ot=0,pi(),null}function sa(){if(Gn!==null){var e=Hg(no),n=ln.transition,i=G;try{if(ln.transition=null,G=16>e?16:e,Gn===null)var a=!1;else{if(e=Gn,Gn=null,no=0,W&6)throw Error($(331));var t=W;for(W|=4,E=e.current;E!==null;){var r=E,o=r.child;if(E.flags&16){var s=r.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:tt(8,d,r)}var p=d.child;if(p!==null)p.return=d,E=p;else for(;E!==null;){d=E;var m=d.sibling,g=d.return;if(Up(d),d===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var R=r.alternate;if(R!==null){var y=R.child;if(y!==null){R.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}E=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,E=o;else e:for(;E!==null;){if(r=E,r.flags&2048)switch(r.tag){case 0:case 11:case 15:tt(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,E=h;break e}E=r.return}}var f=e.current;for(E=f;E!==null;){o=E;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,E=v;else e:for(o=f;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Co(9,s)}}catch(x){ge(s,s.return,x)}if(s===o){E=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,E=w;break e}E=s.return}}if(W=t,pi(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(vo,e)}catch{}a=!0}return a}finally{G=i,ln.transition=n}}return!1}function ru(e,n,i){n=ma(i,n),n=Hp(e,n,1),e=ai(e,n,1),n=Oe(),e!==null&&(St(e,1,n),Be(e,n))}function ge(e,n,i){if(e.tag===3)ru(e,e,i);else for(;n!==null;){if(n.tag===3){ru(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ti===null||!ti.has(a))){e=ma(i,e),e=Dp(n,e,1),n=ai(n,e,1),e=Oe(),n!==null&&(St(n,1,e),Be(n,e));break}}n=n.return}}function Xh(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=Oe(),e.pingedLanes|=e.suspendedLanes&i,ye===e&&(Pe&i)===i&&(we===4||we===3&&(Pe&130023424)===Pe&&500>pe()-Lc?ki(e,0):Cc|=i),Be(e,n)}function tf(e,n){n===0&&(e.mode&1?(n=qt,qt<<=1,!(qt&130023424)&&(qt=4194304)):n=1);var i=Oe();e=Jn(e,n),e!==null&&(St(e,n,i),Be(e,i))}function ev(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),tf(e,i)}function nv(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error($(314))}a!==null&&a.delete(n),tf(e,i)}var rf;rf=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)Je=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return Je=!1,Ah(e,n,i);Je=!!(e.flags&131072)}else Je=!1,re&&n.flags&1048576&&sp(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Pr(e,n),e=n.pendingProps;var t=ua(n,Se.current);la(n,i),t=Rc(null,n,a,e,t,i);var r=jc();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(a)?(r=!0,Ir(n)):r=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,fc(n),t.updater=Po,n.stateNode=t,t._reactInternals=n,ss(n,a,e,i),n=us(null,n,a,!0,r,i)):(n.tag=0,re&&r&&lc(n),Ne(null,n,t,i),n=n.child),n;case 16:a=n.elementType;e:{switch(Pr(e,n),e=n.pendingProps,t=a._init,a=t(a._payload),n.type=a,t=n.tag=av(a),e=gn(a,e),t){case 0:n=ds(null,n,a,e,i);break e;case 1:n=qd(null,n,a,e,i);break e;case 11:n=Ud(null,n,a,e,i);break e;case 14:n=Qd(null,n,a,gn(a.type,e),i);break e}throw Error($(306,a,""))}return n;case 0:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),ds(e,n,a,t,i);case 1:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),qd(e,n,a,t,i);case 3:e:{if(_p(n),e===null)throw Error($(387));a=n.pendingProps,r=n.memoizedState,t=r.element,fp(e,n),qr(n,a,null,i);var o=n.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){t=ma(Error($(423)),n),n=Zd(e,n,a,i,t);break e}else if(a!==t){t=ma(Error($(424)),n),n=Zd(e,n,a,i,t);break e}else for(Ue=ii(n.stateNode.containerInfo.firstChild),qe=n,re=!0,fn=null,i=gp(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ga(),a===t){n=Fn(e,n,i);break e}Ne(e,n,a,i)}n=n.child}return n;case 5:return mp(n),e===null&&rs(n),a=n.type,t=n.pendingProps,r=e!==null?e.memoizedProps:null,o=t.children,es(a,t)?o=null:r!==null&&es(a,r)&&(n.flags|=32),Fp(e,n),Ne(e,n,o,i),n.child;case 6:return e===null&&rs(n),null;case 13:return Ap(e,n,i);case 4:return mc(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=pa(n,null,a,i):Ne(e,n,a,i),n.child;case 11:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),Ud(e,n,a,t,i);case 7:return Ne(e,n,n.pendingProps,i),n.child;case 8:return Ne(e,n,n.pendingProps.children,i),n.child;case 12:return Ne(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,t=n.pendingProps,r=n.memoizedProps,o=t.value,ee(Ur,a._currentValue),a._currentValue=o,r!==null)if(jn(r.value,o)){if(r.children===t.children&&!_e.current){n=Fn(e,n,i);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var s=r.dependencies;if(s!==null){o=r.child;for(var c=s.firstContext;c!==null;){if(c.context===a){if(r.tag===1){c=Hn(-1,i&-i),c.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}r.lanes|=i,c=r.alternate,c!==null&&(c.lanes|=i),os(r.return,i,n),s.lanes|=i;break}c=c.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error($(341));o.lanes|=i,s=o.alternate,s!==null&&(s.lanes|=i),os(o,i,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Ne(e,n,t.children,i),n=n.child}return n;case 9:return t=n.type,a=n.pendingProps.children,la(n,i),t=sn(t),a=a(t),n.flags|=1,Ne(e,n,a,i),n.child;case 14:return a=n.type,t=gn(a,n.pendingProps),t=gn(a.type,t),Qd(e,n,a,t,i);case 15:return zp(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),Pr(e,n),n.tag=1,Ae(a)?(e=!0,Ir(n)):e=!1,la(n,i),Ep(n,a,t),ss(n,a,t,i),us(null,n,a,!0,e,i);case 19:return Bp(e,n,i);case 22:return Jp(e,n,i)}throw Error($(156,n.tag))};function of(e,n){return Ng(e,n)}function iv(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,i,a){return new iv(e,n,i,a)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function av(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Zs)return 14}return 2}function oi(e,n){var i=e.alternate;return i===null?(i=on(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Kr(e,n,i,a,t,r){var o=2;if(a=e,typeof e=="function")$c(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vi:return Pi(i.children,t,r,n);case Qs:o=8,t|=8;break;case Nl:return e=on(12,i,n,t|2),e.elementType=Nl,e.lanes=r,e;case Ol:return e=on(13,i,n,t),e.elementType=Ol,e.lanes=r,e;case Ml:return e=on(19,i,n,t),e.elementType=Ml,e.lanes=r,e;case mg:return Ko(i,t,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pg:o=10;break e;case fg:o=9;break e;case qs:o=11;break e;case Zs:o=14;break e;case Wn:o=16,a=null;break e}throw Error($(130,e==null?e:typeof e,""))}return n=on(o,i,n,t),n.elementType=e,n.type=a,n.lanes=r,n}function Pi(e,n,i,a){return e=on(7,e,a,n),e.lanes=i,e}function Ko(e,n,i,a){return e=on(22,e,a,n),e.elementType=mg,e.lanes=i,e.stateNode={isHidden:!1},e}function ml(e,n,i){return e=on(6,e,null,n),e.lanes=i,e}function hl(e,n,i){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tv(e,n,i,a,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Sc(e,n,i,a,t,r,o,s,c){return e=new tv(e,n,i,s,c),n===1?(n=1,r===!0&&(n|=8)):n=0,r=on(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(r),e}function rv(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function lf(e){if(!e)return ci;e=e._reactInternals;e:{if(Di(e)!==e||e.tag!==1)throw Error($(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error($(171))}if(e.tag===1){var i=e.type;if(Ae(i))return op(e,i,n)}return n}function sf(e,n,i,a,t,r,o,s,c){return e=Sc(i,a,!0,e,t,r,o,s,c),e.context=lf(null),i=e.current,a=Oe(),t=ri(i),r=Hn(a,t),r.callback=n??null,ai(i,r,t),e.current.lanes=t,St(e,t,a),Be(e,a),e}function bo(e,n,i,a){var t=n.current,r=Oe(),o=ri(t);return i=lf(i),n.context===null?n.context=i:n.pendingContext=i,n=Hn(r,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=ai(t,n,o),e!==null&&(vn(e,t,o,r),yr(e,t,o)),o}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Nc(e,n){ou(e,n),(e=e.alternate)&&ou(e,n)}function ov(){return null}var cf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oc(e){this._internalRoot=e}To.prototype.render=Oc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error($(409));bo(e,n,null,null)};To.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ni(function(){bo(null,e,null,null)}),n[zn]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jg();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Qn.length&&n!==0&&n<Qn[i].priority;i++);Qn.splice(i,0,e),i===0&&_g(e)}};function Mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lu(){}function lv(e,n,i,a,t){if(t){if(typeof a=="function"){var r=a;a=function(){var u=ao(o);r.call(u)}}var o=sf(n,a,e,0,null,!1,!1,"",lu);return e._reactRootContainer=o,e[zn]=o.current,ht(e.nodeType===8?e.parentNode:e),Ni(),o}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var s=a;a=function(){var u=ao(c);s.call(u)}}var c=Sc(e,0,!1,null,null,!1,!1,"",lu);return e._reactRootContainer=c,e[zn]=c.current,ht(e.nodeType===8?e.parentNode:e),Ni(function(){bo(n,c,i,a)}),c}function So(e,n,i,a,t){var r=i._reactRootContainer;if(r){var o=r;if(typeof t=="function"){var s=t;t=function(){var c=ao(o);s.call(c)}}bo(n,o,e,t)}else o=lv(i,n,e,t,a);return ao(o)}Dg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Ua(n.pendingLanes);i!==0&&(Xs(n,i|1),Be(n,pe()),!(W&6)&&(ha=pe()+500,pi()))}break;case 13:Ni(function(){var a=Jn(e,1);if(a!==null){var t=Oe();vn(a,e,1,t)}}),Nc(e,1)}};ec=function(e){if(e.tag===13){var n=Jn(e,134217728);if(n!==null){var i=Oe();vn(n,e,134217728,i)}Nc(e,134217728)}};zg=function(e){if(e.tag===13){var n=ri(e),i=Jn(e,n);if(i!==null){var a=Oe();vn(i,e,n,a)}Nc(e,n)}};Jg=function(){return G};Fg=function(e,n){var i=G;try{return G=e,n()}finally{G=i}};Il=function(e,n,i){switch(n){case"input":if(Dl(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var t=yo(a);if(!t)throw Error($(90));vg(a),Dl(a,t)}}}break;case"textarea":Rg(e,i);break;case"select":n=i.value,n!=null&&aa(e,!!i.multiple,n,!1)}};Lg=Kc;Kg=Ni;var sv={usingClientEntryPoint:!1,Events:[Ot,qi,yo,Pg,Cg,Kc]},Ha={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cv={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$g(e),e===null?null:e.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!or.isDisabled&&or.supportsFiber)try{vo=or.inject(cv),bn=or}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;Xe.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(n))throw Error($(200));return rv(e,n,null,i)};Xe.createRoot=function(e,n){if(!Mc(e))throw Error($(299));var i=!1,a="",t=cf;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=Sc(e,1,!1,null,null,i,!1,a,t),e[zn]=n.current,ht(e.nodeType===8?e.parentNode:e),new Oc(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=$g(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Ni(e)};Xe.hydrate=function(e,n,i){if(!$o(n))throw Error($(200));return So(null,e,n,!0,i)};Xe.hydrateRoot=function(e,n,i){if(!Mc(e))throw Error($(405));var a=i!=null&&i.hydratedSources||null,t=!1,r="",o=cf;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),n=sf(n,null,e,1,i??null,t,!1,r,o),e[zn]=n.current,ht(e),a)for(e=0;e<a.length;e++)i=a[e],t=i._getVersion,t=t(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,t]:n.mutableSourceEagerHydrationData.push(i,t);return new To(n)};Xe.render=function(e,n,i){if(!$o(n))throw Error($(200));return So(null,e,n,!1,i)};Xe.unmountComponentAtNode=function(e){if(!$o(e))throw Error($(40));return e._reactRootContainer?(Ni(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};Xe.unstable_batchedUpdates=Kc;Xe.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!$o(i))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return So(e,n,i,!1,a)};Xe.version="18.3.1-next-f1338f8080-20240426";function df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df)}catch(e){console.error(e)}}df(),cg.exports=Xe;var dv=cg.exports,su=dv;$l.createRoot=su.createRoot,$l.hydrateRoot=su.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Ct.apply(this,arguments)}var Yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yn||(Yn={}));const cu="popstate";function uv(e){e===void 0&&(e={});function n(a,t){let{pathname:r,search:o,hash:s}=a.location;return ks("",{pathname:r,search:o,hash:s},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function i(a,t){return typeof t=="string"?t:to(t)}return pv(n,i,null,e)}function he(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function uf(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function gv(){return Math.random().toString(36).substr(2,8)}function du(e,n){return{usr:e.state,key:e.key,idx:n}}function ks(e,n,i,a){return i===void 0&&(i=null),Ct({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?La(n):n,{state:i,key:n&&n.key||a||gv()})}function to(e){let{pathname:n="/",search:i="",hash:a=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function La(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function pv(e,n,i,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:r=!1}=a,o=t.history,s=Yn.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(Ct({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){s=Yn.Pop;let k=d(),h=k==null?null:k-u;u=k,c&&c({action:s,location:y.location,delta:h})}function m(k,h){s=Yn.Push;let f=ks(y.location,k,h);u=d()+1;let v=du(f,u),w=y.createHref(f);try{o.pushState(v,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;t.location.assign(w)}r&&c&&c({action:s,location:y.location,delta:1})}function g(k,h){s=Yn.Replace;let f=ks(y.location,k,h);u=d();let v=du(f,u),w=y.createHref(f);o.replaceState(v,"",w),r&&c&&c({action:s,location:y.location,delta:0})}function R(k){let h=t.location.origin!=="null"?t.location.origin:t.location.href,f=typeof k=="string"?k:to(k);return f=f.replace(/ $/,"%20"),he(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return s},get location(){return e(t,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return t.addEventListener(cu,p),c=k,()=>{t.removeEventListener(cu,p),c=null}},createHref(k){return n(t,k)},createURL:R,encodeLocation(k){let h=R(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(k){return o.go(k)}};return y}var uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uu||(uu={}));function fv(e,n,i){return i===void 0&&(i="/"),mv(e,n,i,!1)}function mv(e,n,i,a){let t=typeof n=="string"?La(n):n,r=Ec(t.pathname||"/",i);if(r==null)return null;let o=gf(e);hv(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let u=Kv(r);s=Cv(o[c],u,a)}return s}function gf(e,n,i,a){n===void 0&&(n=[]),i===void 0&&(i=[]),a===void 0&&(a="");let t=(r,o,s)=>{let c={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let u=li([a,c.relativePath]),d=i.concat(c);r.children&&r.children.length>0&&(he(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gf(r.children,n,d,u)),!(r.path==null&&!r.index)&&n.push({path:u,score:kv(u,r.index),routesMeta:d})};return e.forEach((r,o)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))t(r,o);else for(let c of pf(r.path))t(r,o,c)}),n}function pf(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,t=i.endsWith("?"),r=i.replace(/\?$/,"");if(a.length===0)return t?[r,""]:[r];let o=pf(a.join("/")),s=[];return s.push(...o.map(c=>c===""?r:[r,c].join("/"))),t&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function hv(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:Pv(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}const vv=/^:[\w-]+$/,wv=3,Rv=2,jv=1,yv=10,xv=-2,gu=e=>e==="*";function kv(e,n){let i=e.split("/"),a=i.length;return i.some(gu)&&(a+=xv),n&&(a+=Rv),i.filter(t=>!gu(t)).reduce((t,r)=>t+(vv.test(r)?wv:r===""?jv:yv),a)}function Pv(e,n){return e.length===n.length&&e.slice(0,-1).every((a,t)=>a===n[t])?e[e.length-1]-n[n.length-1]:0}function Cv(e,n,i){let{routesMeta:a}=e,t={},r="/",o=[];for(let s=0;s<a.length;++s){let c=a[s],u=s===a.length-1,d=r==="/"?n:n.slice(r.length)||"/",p=pu({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!p&&u&&i&&!a[a.length-1].route.index&&(p=pu({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!p)return null;Object.assign(t,p.params),o.push({params:t,pathname:li([r,p.pathname]),pathnameBase:Sv(li([r,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(r=li([r,p.pathnameBase]))}return o}function pu(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=Lv(e.path,e.caseSensitive,e.end),t=n.match(i);if(!t)return null;let r=t[0],o=r.replace(/(.)\/+$/,"$1"),s=t.slice(1);return{params:a.reduce((u,d,p)=>{let{paramName:m,isOptional:g}=d;if(m==="*"){let y=s[p]||"";o=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const R=s[p];return g&&!R?u[m]=void 0:u[m]=(R||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:o,pattern:e}}function Lv(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),uf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(a.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,n?void 0:"i"),a]}function Kv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return uf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ec(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function bv(e,n){n===void 0&&(n="/");let{pathname:i,search:a="",hash:t=""}=typeof e=="string"?La(e):e;return{pathname:i?i.startsWith("/")?i:Tv(i,n):n,search:Nv(a),hash:Ov(t)}}function Tv(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?i.length>1&&i.pop():t!=="."&&i.push(t)}),i.length>1?i.join("/"):"/"}function vl(e,n,i,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $v(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function ff(e,n){let i=$v(e);return n?i.map((a,t)=>t===i.length-1?a.pathname:a.pathnameBase):i.map(a=>a.pathnameBase)}function mf(e,n,i,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=La(e):(t=Ct({},e),he(!t.pathname||!t.pathname.includes("?"),vl("?","pathname","search",t)),he(!t.pathname||!t.pathname.includes("#"),vl("#","pathname","hash",t)),he(!t.search||!t.search.includes("#"),vl("#","search","hash",t)));let r=e===""||t.pathname==="",o=r?"/":t.pathname,s;if(o==null)s=i;else{let p=n.length-1;if(!a&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;t.pathname=m.join("/")}s=p>=0?n[p]:"/"}let c=bv(t,s),u=o&&o!=="/"&&o.endsWith("/"),d=(r||o===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const li=e=>e.join("/").replace(/\/\/+/g,"/"),Sv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ov=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hf=["post","put","patch","delete"];new Set(hf);const Ev=["get",...hf];new Set(Ev);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lt(){return Lt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Lt.apply(this,arguments)}const Hc=K.createContext(null),Hv=K.createContext(null),zi=K.createContext(null),No=K.createContext(null),Ji=K.createContext({outlet:null,matches:[],isDataRoute:!1}),vf=K.createContext(null);function Dv(e,n){let{relative:i}=n===void 0?{}:n;Et()||he(!1);let{basename:a,navigator:t}=K.useContext(zi),{hash:r,pathname:o,search:s}=Rf(e,{relative:i}),c=o;return a!=="/"&&(c=o==="/"?a:li([a,o])),t.createHref({pathname:c,search:s,hash:r})}function Et(){return K.useContext(No)!=null}function ce(){return Et()||he(!1),K.useContext(No).location}function wf(e){K.useContext(zi).static||K.useLayoutEffect(e)}function fi(){let{isDataRoute:e}=K.useContext(Ji);return e?Zv():zv()}function zv(){Et()||he(!1);let e=K.useContext(Hc),{basename:n,future:i,navigator:a}=K.useContext(zi),{matches:t}=K.useContext(Ji),{pathname:r}=ce(),o=JSON.stringify(ff(t,i.v7_relativeSplatPath)),s=K.useRef(!1);return wf(()=>{s.current=!0}),K.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){a.go(u);return}let p=mf(u,JSON.parse(o),r,d.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:li([n,p.pathname])),(d.replace?a.replace:a.push)(p,d.state,d)},[n,a,o,r,e])}function Rf(e,n){let{relative:i}=n===void 0?{}:n,{future:a}=K.useContext(zi),{matches:t}=K.useContext(Ji),{pathname:r}=ce(),o=JSON.stringify(ff(t,a.v7_relativeSplatPath));return K.useMemo(()=>mf(e,JSON.parse(o),r,i==="path"),[e,o,r,i])}function Jv(e,n){return Fv(e,n)}function Fv(e,n,i,a){Et()||he(!1);let{navigator:t}=K.useContext(zi),{matches:r}=K.useContext(Ji),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=ce(),d;if(n){var p;let k=typeof n=="string"?La(n):n;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||he(!1),d=k}else d=u;let m=d.pathname||"/",g=m;if(c!=="/"){let k=c.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let R=fv(e,{pathname:g}),y=Vv(R&&R.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:li([c,t.encodeLocation?t.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:li([c,t.encodeLocation?t.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),r,i,a);return n&&y?K.createElement(No.Provider,{value:{location:Lt({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yn.Pop}},y):y}function _v(){let e=qv(),n=Mv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},n),i?K.createElement("pre",{style:t},i):null,null)}const Av=K.createElement(_v,null);class Bv extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?K.createElement(Ji.Provider,{value:this.props.routeContext},K.createElement(vf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iv(e){let{routeContext:n,match:i,children:a}=e,t=K.useContext(Hc);return t&&t.static&&t.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=i.route.id),K.createElement(Ji.Provider,{value:n},a)}function Vv(e,n,i,a){var t;if(n===void 0&&(n=[]),i===void 0&&(i=null),a===void 0&&(a=null),e==null){var r;if(!i)return null;if(i.errors)e=i.matches;else if((r=a)!=null&&r.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,s=(t=i)==null?void 0:t.errors;if(s!=null){let d=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||he(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(i&&a&&a.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:g}=i,R=p.route.loader&&m[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||R){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let g,R=!1,y=null,k=null;i&&(g=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||Av,c&&(u<0&&m===0?(R=!0,k=null):u===m&&(R=!0,k=p.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,m+1)),f=()=>{let v;return g?v=y:R?v=k:p.route.Component?v=K.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,K.createElement(Iv,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:i!=null},children:v})};return i&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?K.createElement(Bv,{location:i.location,revalidation:i.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var jf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(jf||{}),ro=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ro||{});function Wv(e){let n=K.useContext(Hc);return n||he(!1),n}function Uv(e){let n=K.useContext(Hv);return n||he(!1),n}function Qv(e){let n=K.useContext(Ji);return n||he(!1),n}function yf(e){let n=Qv(),i=n.matches[n.matches.length-1];return i.route.id||he(!1),i.route.id}function qv(){var e;let n=K.useContext(vf),i=Uv(ro.UseRouteError),a=yf(ro.UseRouteError);return n!==void 0?n:(e=i.errors)==null?void 0:e[a]}function Zv(){let{router:e}=Wv(jf.UseNavigateStable),n=yf(ro.UseNavigateStable),i=K.useRef(!1);return wf(()=>{i.current=!0}),K.useCallback(function(t,r){r===void 0&&(r={}),i.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,Lt({fromRouteId:n},r)))},[e,n])}function an(e){he(!1)}function Gv(e){let{basename:n="/",children:i=null,location:a,navigationType:t=Yn.Pop,navigator:r,static:o=!1,future:s}=e;Et()&&he(!1);let c=n.replace(/^\/*/,"/"),u=K.useMemo(()=>({basename:c,navigator:r,static:o,future:Lt({v7_relativeSplatPath:!1},s)}),[c,s,r,o]);typeof a=="string"&&(a=La(a));let{pathname:d="/",search:p="",hash:m="",state:g=null,key:R="default"}=a,y=K.useMemo(()=>{let k=Ec(d,c);return k==null?null:{location:{pathname:k,search:p,hash:m,state:g,key:R},navigationType:t}},[c,d,p,m,g,R,t]);return y==null?null:K.createElement(zi.Provider,{value:u},K.createElement(No.Provider,{children:i,value:y}))}function Yv(e){let{children:n,location:i}=e;return Jv(Ps(n),i)}new Promise(()=>{});function Ps(e,n){n===void 0&&(n=[]);let i=[];return K.Children.forEach(e,(a,t)=>{if(!K.isValidElement(a))return;let r=[...n,t];if(a.type===K.Fragment){i.push.apply(i,Ps(a.props.children,r));return}a.type!==an&&he(!1),!a.props.index||!a.props.children||he(!1);let o={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Ps(a.props.children,r)),i.push(o)}),i}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Cs.apply(this,arguments)}function Xv(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}function e2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n2(e,n){return e.button===0&&(!n||n==="_self")&&!e2(e)}const i2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],a2="6";try{window.__reactRouterVersion=a2}catch{}const t2="startTransition",fu=Tl[t2];function r2(e){let{basename:n,children:i,future:a,window:t}=e,r=K.useRef();r.current==null&&(r.current=uv({window:t,v5Compat:!0}));let o=r.current,[s,c]=K.useState({action:o.action,location:o.location}),{v7_startTransition:u}=a||{},d=K.useCallback(p=>{u&&fu?fu(()=>c(p)):c(p)},[c,u]);return K.useLayoutEffect(()=>o.listen(d),[o,d]),K.createElement(Gv,{basename:n,children:i,location:s.location,navigationType:s.action,navigator:o,future:a})}const o2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mi=K.forwardRef(function(n,i){let{onClick:a,relative:t,reloadDocument:r,replace:o,state:s,target:c,to:u,preventScrollReset:d,unstable_viewTransition:p}=n,m=Xv(n,i2),{basename:g}=K.useContext(zi),R,y=!1;if(typeof u=="string"&&l2.test(u)&&(R=u,o2))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),x=Ec(w.pathname,g);w.origin===v.origin&&x!=null?u=x+w.search+w.hash:y=!0}catch{}let k=Dv(u,{relative:t}),h=s2(u,{replace:o,state:s,target:c,preventScrollReset:d,relative:t,unstable_viewTransition:p});function f(v){a&&a(v),v.defaultPrevented||h(v)}return K.createElement("a",Cs({},m,{href:R||k,onClick:y||r?a:f,ref:i,target:c}))});var mu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mu||(mu={}));var hu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hu||(hu={}));function s2(e,n){let{target:i,replace:a,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:s}=n===void 0?{}:n,c=fi(),u=ce(),d=Rf(e,{relative:o});return K.useCallback(p=>{if(n2(p,i)){p.preventDefault();let m=a!==void 0?a:to(u)===to(d);c(e,{replace:m,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:s})}},[u,c,d,a,t,i,e,r,o,s])}var Fe=function(){return Fe=Object.assign||function(n){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},Fe.apply(this,arguments)};function oo(e,n,i){if(i||arguments.length===2)for(var a=0,t=n.length,r;a<t;a++)(r||!(a in n))&&(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}var ae="-ms-",lt="-moz-",Q="-webkit-",xf="comm",Oo="rule",Dc="decl",c2="@import",kf="@keyframes",d2="@layer",Pf=Math.abs,zc=String.fromCharCode,Ls=Object.assign;function u2(e,n){return je(e,0)^45?(((n<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function Cf(e){return e.trim()}function Nn(e,n){return(e=n.exec(e))?e[0]:e}function B(e,n,i){return e.replace(n,i)}function br(e,n,i){return e.indexOf(n,i)}function je(e,n){return e.charCodeAt(n)|0}function va(e,n,i){return e.slice(n,i)}function Cn(e){return e.length}function Lf(e){return e.length}function qa(e,n){return n.push(e),e}function g2(e,n){return e.map(n).join("")}function vu(e,n){return e.filter(function(i){return!Nn(i,n)})}var Mo=1,wa=1,Kf=0,dn=0,fe=0,Ka="";function Eo(e,n,i,a,t,r,o,s){return{value:e,root:n,parent:i,type:a,props:t,children:r,line:Mo,column:wa,length:o,return:"",siblings:s}}function Vn(e,n){return Ls(Eo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ai(e){for(;e.root;)e=Vn(e.root,{children:[e]});qa(e,e.siblings)}function p2(){return fe}function f2(){return fe=dn>0?je(Ka,--dn):0,wa--,fe===10&&(wa=1,Mo--),fe}function wn(){return fe=dn<Kf?je(Ka,dn++):0,wa++,fe===10&&(wa=1,Mo++),fe}function Ci(){return je(Ka,dn)}function Tr(){return dn}function Ho(e,n){return va(Ka,e,n)}function Ks(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m2(e){return Mo=wa=1,Kf=Cn(Ka=e),dn=0,[]}function h2(e){return Ka="",e}function wl(e){return Cf(Ho(dn-1,bs(e===91?e+2:e===40?e+1:e)))}function v2(e){for(;(fe=Ci())&&fe<33;)wn();return Ks(e)>2||Ks(fe)>3?"":" "}function w2(e,n){for(;--n&&wn()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Ho(e,Tr()+(n<6&&Ci()==32&&wn()==32))}function bs(e){for(;wn();)switch(fe){case e:return dn;case 34:case 39:e!==34&&e!==39&&bs(fe);break;case 40:e===41&&bs(e);break;case 92:wn();break}return dn}function R2(e,n){for(;wn()&&e+fe!==57;)if(e+fe===84&&Ci()===47)break;return"/*"+Ho(n,dn-1)+"*"+zc(e===47?e:wn())}function j2(e){for(;!Ks(Ci());)wn();return Ho(e,dn)}function y2(e){return h2($r("",null,null,null,[""],e=m2(e),0,[0],e))}function $r(e,n,i,a,t,r,o,s,c){for(var u=0,d=0,p=o,m=0,g=0,R=0,y=1,k=1,h=1,f=0,v="",w=t,x=r,C=a,L=v;k;)switch(R=f,f=wn()){case 40:if(R!=108&&je(L,p-1)==58){br(L+=B(wl(f),"&","&\f"),"&\f",Pf(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:L+=wl(f);break;case 9:case 10:case 13:case 32:L+=v2(R);break;case 92:L+=w2(Tr()-1,7);continue;case 47:switch(Ci()){case 42:case 47:qa(x2(R2(wn(),Tr()),n,i,c),c);break;default:L+="/"}break;case 123*y:s[u++]=Cn(L)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+d:h==-1&&(L=B(L,/\f/g,"")),g>0&&Cn(L)-p&&qa(g>32?Ru(L+";",a,i,p-1,c):Ru(B(L," ","")+";",a,i,p-2,c),c);break;case 59:L+=";";default:if(qa(C=wu(L,n,i,u,d,t,s,v,w=[],x=[],p,r),r),f===123)if(d===0)$r(L,n,C,C,w,r,p,s,x);else switch(m===99&&je(L,3)===110?100:m){case 100:case 108:case 109:case 115:$r(e,C,C,a&&qa(wu(e,C,C,0,0,t,s,v,t,w=[],p,x),x),t,x,p,s,a?w:x);break;default:$r(L,C,C,C,[""],x,0,s,x)}}u=d=g=0,y=h=1,v=L="",p=o;break;case 58:p=1+Cn(L),g=R;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&f2()==125)continue}switch(L+=zc(f),f*y){case 38:h=d>0?1:(L+="\f",-1);break;case 44:s[u++]=(Cn(L)-1)*h,h=1;break;case 64:Ci()===45&&(L+=wl(wn())),m=Ci(),d=p=Cn(v=L+=j2(Tr())),f++;break;case 45:R===45&&Cn(L)==2&&(y=0)}}return r}function wu(e,n,i,a,t,r,o,s,c,u,d,p){for(var m=t-1,g=t===0?r:[""],R=Lf(g),y=0,k=0,h=0;y<a;++y)for(var f=0,v=va(e,m+1,m=Pf(k=o[y])),w=e;f<R;++f)(w=Cf(k>0?g[f]+" "+v:B(v,/&\f/g,g[f])))&&(c[h++]=w);return Eo(e,n,i,t===0?Oo:s,c,u,d,p)}function x2(e,n,i,a){return Eo(e,n,i,xf,zc(p2()),va(e,2,-2),0,a)}function Ru(e,n,i,a,t){return Eo(e,n,i,Dc,va(e,0,a),va(e,a+1,-1),a,t)}function bf(e,n,i){switch(u2(e,n)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return lt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+lt+e+ae+e+e;case 5936:switch(je(e,n+11)){case 114:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+ae+e+e;case 6165:return Q+e+ae+"flex-"+e+e;case 5187:return Q+e+B(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return Q+e+ae+"flex-item-"+B(e,/flex-|-self/g,"")+(Nn(e,/flex-|baseline/)?"":ae+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return Q+e+ae+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+ae+B(e,"shrink","negative")+e;case 5292:return Q+e+ae+B(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+B(e,"-grow","")+Q+e+ae+B(e,"grow","positive")+e;case 4554:return Q+B(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!Nn(e,/flex-|baseline/))return ae+"grid-column-align"+va(e,n)+e;break;case 2592:case 3360:return ae+B(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,t){return n=t,Nn(a.props,/grid-\w+-end/)})?~br(e+(i=i[n].value),"span",0)?e:ae+B(e,"-start","")+e+ae+"grid-row-span:"+(~br(i,"span",0)?Nn(i,/\d+/):+Nn(i,/\d+/)-+Nn(e,/\d+/))+";":ae+B(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Nn(a.props,/grid-\w+-start/)})?e:ae+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-n>6)switch(je(e,n+1)){case 109:if(je(e,n+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+lt+(je(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~br(e,"stretch",0)?bf(B(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,t,r,o,s,c,u){return ae+t+":"+r+u+(o?ae+t+"-span:"+(s?c:+c-+r)+u:"")+e});case 4949:if(je(e,n+6)===121)return B(e,":",":"+Q)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(je(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+ae+"$2box$3")+e;case 100:return B(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function lo(e,n){for(var i="",a=0;a<e.length;a++)i+=n(e[a],a,e,n)||"";return i}function k2(e,n,i,a){switch(e.type){case d2:if(e.children.length)break;case c2:case Dc:return e.return=e.return||e.value;case xf:return"";case kf:return e.return=e.value+"{"+lo(e.children,a)+"}";case Oo:if(!Cn(e.value=e.props.join(",")))return""}return Cn(i=lo(e.children,a))?e.return=e.value+"{"+i+"}":""}function P2(e){var n=Lf(e);return function(i,a,t,r){for(var o="",s=0;s<n;s++)o+=e[s](i,a,t,r)||"";return o}}function C2(e){return function(n){n.root||(n=n.return)&&e(n)}}function L2(e,n,i,a){if(e.length>-1&&!e.return)switch(e.type){case Dc:e.return=bf(e.value,e.length,i);return;case kf:return lo([Vn(e,{value:B(e.value,"@","@"+Q)})],a);case Oo:if(e.length)return g2(i=e.props,function(t){switch(Nn(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(Vn(e,{props:[B(t,/:(read-\w+)/,":"+lt+"$1")]})),Ai(Vn(e,{props:[t]})),Ls(e,{props:vu(i,a)});break;case"::placeholder":Ai(Vn(e,{props:[B(t,/:(plac\w+)/,":"+Q+"input-$1")]})),Ai(Vn(e,{props:[B(t,/:(plac\w+)/,":"+lt+"$1")]})),Ai(Vn(e,{props:[B(t,/:(plac\w+)/,ae+"input-$1")]})),Ai(Vn(e,{props:[t]})),Ls(e,{props:vu(i,a)});break}return""})}}var K2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ve={},Ra=typeof process<"u"&&Ve!==void 0&&(Ve.REACT_APP_SC_ATTR||Ve.SC_ATTR)||"data-styled",Tf="active",$f="data-styled-version",Do="6.1.12",Jc=`/*!sc*/
`,so=typeof window<"u"&&"HTMLElement"in window,b2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==""?Ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.SC_DISABLE_SPEEDY!==void 0&&Ve.SC_DISABLE_SPEEDY!==""&&Ve.SC_DISABLE_SPEEDY!=="false"&&Ve.SC_DISABLE_SPEEDY),zo=Object.freeze([]),ja=Object.freeze({});function T2(e,n,i){return i===void 0&&(i=ja),e.theme!==i.theme&&e.theme||n||i.theme}var Sf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S2=/(^-|-$)/g;function ju(e){return e.replace($2,"-").replace(S2,"")}var N2=/(a)(d)/gi,lr=52,yu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ts(e){var n,i="";for(n=Math.abs(e);n>lr;n=n/lr|0)i=yu(n%lr)+i;return(yu(n%lr)+i).replace(N2,"$1-$2")}var Rl,Nf=5381,ia=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},Of=function(e){return ia(Nf,e)};function O2(e){return Ts(Of(e)>>>0)}function M2(e){return e.displayName||e.name||"Component"}function jl(e){return typeof e=="string"&&!0}var Mf=typeof Symbol=="function"&&Symbol.for,Ef=Mf?Symbol.for("react.memo"):60115,E2=Mf?Symbol.for("react.forward_ref"):60112,H2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z2=((Rl={})[E2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rl[Ef]=Hf,Rl);function xu(e){return("type"in(n=e)&&n.type.$$typeof)===Ef?Hf:"$$typeof"in e?z2[e.$$typeof]:H2;var n}var J2=Object.defineProperty,F2=Object.getOwnPropertyNames,ku=Object.getOwnPropertySymbols,_2=Object.getOwnPropertyDescriptor,A2=Object.getPrototypeOf,Pu=Object.prototype;function Df(e,n,i){if(typeof n!="string"){if(Pu){var a=A2(n);a&&a!==Pu&&Df(e,a,i)}var t=F2(n);ku&&(t=t.concat(ku(n)));for(var r=xu(e),o=xu(n),s=0;s<t.length;++s){var c=t[s];if(!(c in D2||i&&i[c]||o&&c in o||r&&c in r)){var u=_2(n,c);try{J2(e,c,u)}catch{}}}}return e}function ya(e){return typeof e=="function"}function Fc(e){return typeof e=="object"&&"styledComponentId"in e}function xi(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Cu(e,n){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Kt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $s(e,n,i){if(i===void 0&&(i=!1),!i&&!Kt(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)e[a]=$s(e[a],n[a]);else if(Kt(n))for(var a in n)e[a]=$s(e[a],n[a]);return e}function _c(e,n){Object.defineProperty(e,"toString",{value:n})}function Ht(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var B2=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,a=0;a<n;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var a=this.groupSizes,t=a.length,r=t;n>=r;)if((r<<=1)<0)throw Ht(16,"".concat(n));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var o=t;o<r;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(n+1),c=(o=0,i.length);o<c;o++)this.tag.insertRule(s,i[o])&&(this.groupSizes[n]++,s++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],a=this.indexOfGroup(n),t=a+i;this.groupSizes[n]=0;for(var r=a;r<t;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var a=this.groupSizes[n],t=this.indexOfGroup(n),r=t+a,o=t;o<r;o++)i+="".concat(this.tag.getRule(o)).concat(Jc);return i},e}(),Sr=new Map,co=new Map,Nr=1,sr=function(e){if(Sr.has(e))return Sr.get(e);for(;co.has(Nr);)Nr++;var n=Nr++;return Sr.set(e,n),co.set(n,e),n},I2=function(e,n){Nr=n+1,Sr.set(e,n),co.set(n,e)},V2="style[".concat(Ra,"][").concat($f,'="').concat(Do,'"]'),W2=new RegExp("^".concat(Ra,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U2=function(e,n,i){for(var a,t=i.split(","),r=0,o=t.length;r<o;r++)(a=t[r])&&e.registerName(n,a)},Q2=function(e,n){for(var i,a=((i=n.textContent)!==null&&i!==void 0?i:"").split(Jc),t=[],r=0,o=a.length;r<o;r++){var s=a[r].trim();if(s){var c=s.match(W2);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(I2(d,u),U2(e,d,c[3]),e.getTag().insertRules(u,t)),t.length=0}else t.push(s)}}},Lu=function(e){for(var n=document.querySelectorAll(V2),i=0,a=n.length;i<a;i++){var t=n[i];t&&t.getAttribute(Ra)!==Tf&&(Q2(e,t),t.parentNode&&t.parentNode.removeChild(t))}};function q2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var zf=function(e){var n=document.head,i=e||n,a=document.createElement("style"),t=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Ra,"]")));return c[c.length-1]}(i),r=t!==void 0?t.nextSibling:null;a.setAttribute(Ra,Tf),a.setAttribute($f,Do);var o=q2();return o&&a.setAttribute("nonce",o),i.insertBefore(a,r),a},Z2=function(){function e(n){this.element=zf(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,t=0,r=a.length;t<r;t++){var o=a[t];if(o.ownerNode===i)return o}throw Ht(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),G2=function(){function e(n){this.element=zf(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Y2=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ku=so,X2={isServer:!so,useCSSOMInjection:!b2},Jf=function(){function e(n,i,a){n===void 0&&(n=ja),i===void 0&&(i={});var t=this;this.options=Fe(Fe({},X2),n),this.gs=i,this.names=new Map(a),this.server=!!n.isServer,!this.server&&so&&Ku&&(Ku=!1,Lu(this)),_c(this,function(){return function(r){for(var o=r.getTag(),s=o.length,c="",u=function(p){var m=function(h){return co.get(h)}(p);if(m===void 0)return"continue";var g=r.names.get(m),R=o.getGroup(p);if(g===void 0||!g.size||R.length===0)return"continue";var y="".concat(Ra,".g").concat(p,'[id="').concat(m,'"]'),k="";g!==void 0&&g.forEach(function(h){h.length>0&&(k+="".concat(h,","))}),c+="".concat(R).concat(y,'{content:"').concat(k,'"}').concat(Jc)},d=0;d<s;d++)u(d);return c}(t)})}return e.registerId=function(n){return sr(n)},e.prototype.rehydrate=function(){!this.server&&so&&Lu(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(Fe(Fe({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var a=i.useCSSOMInjection,t=i.target;return i.isServer?new Y2(t):a?new Z2(t):new G2(t)}(this.options),new B2(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(sr(n),this.names.has(n))this.names.get(n).add(i);else{var a=new Set;a.add(i),this.names.set(n,a)}},e.prototype.insertRules=function(n,i,a){this.registerName(n,i),this.getTag().insertRules(sr(n),a)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(sr(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e1=/&/g,n1=/^\s*\/\/.*$/gm;function Ff(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Ff(i.children,n)),i})}function i1(e){var n,i,a,t=ja,r=t.options,o=r===void 0?ja:r,s=t.plugins,c=s===void 0?zo:s,u=function(m,g,R){return R.startsWith(i)&&R.endsWith(i)&&R.replaceAll(i,"").length>0?".".concat(n):m},d=c.slice();d.push(function(m){m.type===Oo&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(e1,i).replace(a,u))}),o.prefix&&d.push(L2),d.push(k2);var p=function(m,g,R,y){g===void 0&&(g=""),R===void 0&&(R=""),y===void 0&&(y="&"),n=y,i=g,a=new RegExp("\\".concat(i,"\\b"),"g");var k=m.replace(n1,""),h=y2(R||g?"".concat(R," ").concat(g," { ").concat(k," }"):k);o.namespace&&(h=Ff(h,o.namespace));var f=[];return lo(h,P2(d.concat(C2(function(v){return f.push(v)})))),f};return p.hash=c.length?c.reduce(function(m,g){return g.name||Ht(15),ia(m,g.name)},Nf).toString():"",p}var a1=new Jf,Ss=i1(),_f=Ki.createContext({shouldForwardProp:void 0,styleSheet:a1,stylis:Ss});_f.Consumer;Ki.createContext(void 0);function bu(){return K.useContext(_f)}var t1=function(){function e(n,i){var a=this;this.inject=function(t,r){r===void 0&&(r=Ss);var o=a.name+r.hash;t.hasNameForId(a.id,o)||t.insertRules(a.id,o,r(a.rules,o,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,_c(this,function(){throw Ht(12,String(a.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=Ss),this.name+n.hash},e}(),r1=function(e){return e>="A"&&e<="Z"};function Tu(e){for(var n="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;r1(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var Af=function(e){return e==null||e===!1||e===""},Bf=function(e){var n,i,a=[];for(var t in e){var r=e[t];e.hasOwnProperty(t)&&!Af(r)&&(Array.isArray(r)&&r.isCss||ya(r)?a.push("".concat(Tu(t),":"),r,";"):Kt(r)?a.push.apply(a,oo(oo(["".concat(t," {")],Bf(r),!1),["}"],!1)):a.push("".concat(Tu(t),": ").concat((n=t,(i=r)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in K2||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Li(e,n,i,a){if(Af(e))return[];if(Fc(e))return[".".concat(e.styledComponentId)];if(ya(e)){if(!ya(r=e)||r.prototype&&r.prototype.isReactComponent||!n)return[e];var t=e(n);return Li(t,n,i,a)}var r;return e instanceof t1?i?(e.inject(i,a),[e.getName(a)]):[e]:Kt(e)?Bf(e):Array.isArray(e)?Array.prototype.concat.apply(zo,e.map(function(o){return Li(o,n,i,a)})):[e.toString()]}function o1(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(ya(i)&&!Fc(i))return!1}return!0}var l1=Of(Do),s1=function(){function e(n,i,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&o1(n),this.componentId=i,this.baseHash=ia(l1,i),this.baseStyle=a,Jf.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,a){var t=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))t=xi(t,this.staticRulesId);else{var r=Cu(Li(this.rules,n,i,a)),o=Ts(ia(this.baseHash,r)>>>0);if(!i.hasNameForId(this.componentId,o)){var s=a(r,".".concat(o),void 0,this.componentId);i.insertRules(this.componentId,o,s)}t=xi(t,o),this.staticRulesId=o}else{for(var c=ia(this.baseHash,a.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var m=Cu(Li(p,n,i,a));c=ia(c,m+d),u+=m}}if(u){var g=Ts(c>>>0);i.hasNameForId(this.componentId,g)||i.insertRules(this.componentId,g,a(u,".".concat(g),void 0,this.componentId)),t=xi(t,g)}}return t},e}(),If=Ki.createContext(void 0);If.Consumer;var yl={};function c1(e,n,i){var a=Fc(e),t=e,r=!jl(e),o=n.attrs,s=o===void 0?zo:o,c=n.componentId,u=c===void 0?function(w,x){var C=typeof w!="string"?"sc":ju(w);yl[C]=(yl[C]||0)+1;var L="".concat(C,"-").concat(O2(Do+C+yl[C]));return x?"".concat(x,"-").concat(L):L}(n.displayName,n.parentComponentId):c,d=n.displayName,p=d===void 0?function(w){return jl(w)?"styled.".concat(w):"Styled(".concat(M2(w),")")}(e):d,m=n.displayName&&n.componentId?"".concat(ju(n.displayName),"-").concat(n.componentId):n.componentId||u,g=a&&t.attrs?t.attrs.concat(s).filter(Boolean):s,R=n.shouldForwardProp;if(a&&t.shouldForwardProp){var y=t.shouldForwardProp;if(n.shouldForwardProp){var k=n.shouldForwardProp;R=function(w,x){return y(w,x)&&k(w,x)}}else R=y}var h=new s1(i,m,a?t.componentStyle:void 0);function f(w,x){return function(C,L,T){var F=C.attrs,D=C.componentStyle,q=C.defaultProps,nn=C.foldedComponentIds,b=C.styledComponentId,z=C.target,U=Ki.useContext(If),Z=bu(),V=C.shouldForwardProp||Z.shouldForwardProp,S=T2(L,U,q)||ja,O=function(De,N,J){for(var $n,Y=Fe(Fe({},N),{className:void 0,theme:J}),X=0;X<De.length;X+=1){var Bn=ya($n=De[X])?$n(Y):$n;for(var Ie in Bn)Y[Ie]=Ie==="className"?xi(Y[Ie],Bn[Ie]):Ie==="style"?Fe(Fe({},Y[Ie]),Bn[Ie]):Bn[Ie]}return N.className&&(Y.className=xi(Y.className,N.className)),Y}(F,L,S),H=O.as||z,A={};for(var _ in O)O[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&O.theme===S||(_==="forwardedAs"?A.as=O.forwardedAs:V&&!V(_,H)||(A[_]=O[_]));var de=function(De,N){var J=bu(),$n=De.generateAndInjectStyles(N,J.styleSheet,J.stylis);return $n}(D,O),ne=xi(nn,b);return de&&(ne+=" "+de),O.className&&(ne+=" "+O.className),A[jl(H)&&!Sf.has(H)?"class":"className"]=ne,A.ref=T,K.createElement(H,A)}(v,w,x)}f.displayName=p;var v=Ki.forwardRef(f);return v.attrs=g,v.componentStyle=h,v.displayName=p,v.shouldForwardProp=R,v.foldedComponentIds=a?xi(t.foldedComponentIds,t.styledComponentId):"",v.styledComponentId=m,v.target=a?t.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=a?function(x){for(var C=[],L=1;L<arguments.length;L++)C[L-1]=arguments[L];for(var T=0,F=C;T<F.length;T++)$s(x,F[T],!0);return x}({},t.defaultProps,w):w}}),_c(v,function(){return".".concat(v.styledComponentId)}),r&&Df(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function $u(e,n){for(var i=[e[0]],a=0,t=n.length;a<t;a+=1)i.push(n[a],e[a+1]);return i}var Su=function(e){return Object.assign(e,{isCss:!0})};function d1(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(ya(e)||Kt(e))return Su(Li($u(zo,oo([e],n,!0))));var a=e;return n.length===0&&a.length===1&&typeof a[0]=="string"?Li(a):Su(Li($u(a,n)))}function Ns(e,n,i){if(i===void 0&&(i=ja),!n)throw Ht(1,n);var a=function(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(n,i,d1.apply(void 0,oo([t],r,!1)))};return a.attrs=function(t){return Ns(e,n,Fe(Fe({},i),{attrs:Array.prototype.concat(i.attrs,t).filter(Boolean)}))},a.withConfig=function(t){return Ns(e,n,Fe(Fe({},i),t))},a}var Vf=function(e){return Ns(c1,e)},j=Vf;Sf.forEach(function(e){j[e]=Vf(e)});var Wf={exports:{}},Uf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=K;function u1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var g1=typeof Object.is=="function"?Object.is:u1,p1=Dt.useSyncExternalStore,f1=Dt.useRef,m1=Dt.useEffect,h1=Dt.useMemo,v1=Dt.useDebugValue;Uf.useSyncExternalStoreWithSelector=function(e,n,i,a,t){var r=f1(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=h1(function(){function c(g){if(!u){if(u=!0,d=g,g=a(g),t!==void 0&&o.hasValue){var R=o.value;if(t(R,g))return p=R}return p=g}if(R=p,g1(d,g))return R;var y=a(g);return t!==void 0&&t(R,y)?R:(d=g,p=y)}var u=!1,d,p,m=i===void 0?null:i;return[function(){return c(n())},m===null?void 0:function(){return c(m())}]},[n,i,a,t]);var s=p1(e,r[0],r[1]);return m1(function(){o.hasValue=!0,o.value=s},[s]),v1(s),s};Wf.exports=Uf;var w1=Wf.exports,Qe="default"in Tl?Ki:Tl,Nu=Symbol.for("react-redux-context"),Ou=typeof globalThis<"u"?globalThis:{};function R1(){if(!Qe.createContext)return{};const e=Ou[Nu]??(Ou[Nu]=new Map);let n=e.get(Qe.createContext);return n||(n=Qe.createContext(null),e.set(Qe.createContext,n)),n}var di=R1(),j1=()=>{throw new Error("uSES not initialized!")};function Ac(e=di){return function(){return Qe.useContext(e)}}var Qf=Ac(),qf=j1,y1=e=>{qf=e},x1=(e,n)=>e===n;function k1(e=di){const n=e===di?Qf:Ac(e),i=(a,t={})=>{const{equalityFn:r=x1,devModeChecks:o={}}=typeof t=="function"?{equalityFn:t}:t,{store:s,subscription:c,getServerState:u,stabilityCheck:d,identityFunctionCheck:p}=n();Qe.useRef(!0);const m=Qe.useCallback({[a.name](R){return a(R)}}[a.name],[a,d,o.stabilityCheck]),g=qf(c.addNestedSub,s.getState,u||s.getState,m,r);return Qe.useDebugValue(g),g};return Object.assign(i,{withTypes:()=>i}),i}var P=k1();function P1(e){e()}function C1(){let e=null,n=null;return{clear(){e=null,n=null},notify(){P1(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){const i=[];let a=e;for(;a;)i.push(a),a=a.next;return i},subscribe(i){let a=!0;const t=n={callback:i,next:null,prev:n};return t.prev?t.prev.next=t:e=t,function(){!a||e===null||(a=!1,t.next?t.next.prev=t.prev:n=t.prev,t.prev?t.prev.next=t.next:e=t.next)}}}}var Mu={notify(){},get:()=>[]};function L1(e,n){let i,a=Mu,t=0,r=!1;function o(y){d();const k=a.subscribe(y);let h=!1;return()=>{h||(h=!0,k(),p())}}function s(){a.notify()}function c(){R.onStateChange&&R.onStateChange()}function u(){return r}function d(){t++,i||(i=e.subscribe(c),a=C1())}function p(){t--,i&&t===0&&(i(),i=void 0,a.clear(),a=Mu)}function m(){r||(r=!0,d())}function g(){r&&(r=!1,p())}const R={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:u,trySubscribe:m,tryUnsubscribe:g,getListeners:()=>a};return R}var K1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b1=typeof navigator<"u"&&navigator.product==="ReactNative",T1=K1||b1?Qe.useLayoutEffect:Qe.useEffect;function $1({store:e,context:n,children:i,serverState:a,stabilityCheck:t="once",identityFunctionCheck:r="once"}){const o=Qe.useMemo(()=>{const u=L1(e);return{store:e,subscription:u,getServerState:a?()=>a:void 0,stabilityCheck:t,identityFunctionCheck:r}},[e,a,t,r]),s=Qe.useMemo(()=>e.getState(),[e]);T1(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,s]);const c=n||di;return Qe.createElement(c.Provider,{value:o},i)}var S1=$1;function Zf(e=di){const n=e===di?Qf:Ac(e),i=()=>{const{store:a}=n();return a};return Object.assign(i,{withTypes:()=>i}),i}var N1=Zf();function O1(e=di){const n=e===di?N1:Zf(e),i=()=>n().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var He=O1();y1(w1.useSyncExternalStoreWithSelector);var Gf={exports:{}},M1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E1=M1,H1=E1;function Yf(){}function Xf(){}Xf.resetWarningCache=Yf;var D1=function(){function e(a,t,r,o,s,c){if(c!==H1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Xf,resetWarningCache:Yf};return i.PropTypes=i,i};Gf.exports=D1();var z1=Gf.exports;const M=Gu(z1),J1=j.nav`
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    padding: 0.9vw;
    border-radius: 0.8vw;
    width: 15vw;
    height: 30vw;
    display: ${e=>e.display};
    flex-direction: column;
    justify-content: space-between;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 67vh;
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
        margin-bottom: 10vw;
    }
`,Da=j(mi)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5vw;
    background-color: ${e=>e.$mainBgColor};
    width: 100%;
    height: 20%;
    transition: background-color 0.3s;
    position: relative;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    &:hover {
        transform: scale(1.05);
    }
`,za=j.span`
    font-size: 0.8vw;
    color: ${e=>e.$color};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`,Ja=j.h4`
    font-size: 1.7vw;
    color: ${e=>e.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 8vw;
    }
`,Fa=j.span`
    font-size: 0.8vw;
    color: ${e=>e.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`;function e0({isButtonClicked:e,onLinkClick:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=P(c=>c.mode),{color:r}=P(c=>c.color),[o,s]=K.useState("flex");return K.useEffect(()=>{window.innerWidth<=560?s(e?"flex":"none"):s("flex")},[e]),l.jsxs(J1,{$bgColor:i,display:o,children:[l.jsxs(Da,{$mainBgColor:t,to:"/Hiragana",onClick:n,children:[l.jsx(za,{$color:r,children:"ひらがな"}),l.jsx(Ja,{$fontColor:a,children:"あ"}),l.jsx(Fa,{$fontColor:a,children:"hiragana"})]}),l.jsxs(Da,{$mainBgColor:t,to:"/Katakana",onClick:n,children:[l.jsx(za,{$color:r,children:"カタカナ"}),l.jsx(Ja,{$fontColor:a,children:"ア"}),l.jsx(Fa,{$fontColor:a,children:"katakana"})]}),l.jsxs(Da,{$mainBgColor:t,to:"/Kanji",onClick:n,children:[l.jsx(za,{$color:r,children:"かんじ"}),l.jsx(Ja,{$fontColor:a,children:"漢字"}),l.jsx(Fa,{$fontColor:a,children:"kanji"})]}),l.jsxs(Da,{$mainBgColor:t,to:"/Vocabulaire",onClick:n,children:[l.jsx(za,{$color:r,children:"ごい"}),l.jsx(Ja,{$fontColor:a,children:"語彙"}),l.jsx(Fa,{$fontColor:a,children:"Vocabulaire"})]}),l.jsxs(Da,{$mainBgColor:t,to:"/Nombres",onClick:n,children:[l.jsx(za,{$color:r,children:"ばんごう"}),l.jsx(Ja,{$fontColor:a,children:"番号"}),l.jsx(Fa,{$fontColor:a,children:"Nombres"})]})]})}e0.propTypes={isButtonClicked:M.bool.isRequired,onLinkClick:M.func.isRequired};const F1=j.div`
    display: flex;
    flex-direction: column;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    max-width: 15vw;
    height: 9.7vw;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
    @media screen and (max-width: 560px) {
        display: none;
    }
`,_1=j.div`
    display: flex;
    gap: 0.5vw;
    button{
        width: 50%;
        font-size: 1.3vw;
        height: 2.5vw;
        border-radius: 0.5vw;
        border: none;
        cursor: pointer;
        color: ${e=>e.$fontColor};
    }
`,A1=j.div`
    background-color: ${e=>e.$mainBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3vw;
    height: 2.5vw;
    border-radius: 0.5vw;
`,B1=j.span`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    margin: 0;
    border-radius: 0.5vw;
`;function I1(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(u=>u.mode),{color:a}=P(u=>u.color),[t,r]=K.useState("日本"),[o,s]=K.useState(new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"}));K.useEffect(()=>{const u=setInterval(()=>{s(new Date().toLocaleTimeString(t==="フランス"?"fr-FR":"ja-JP",{timeZone:t==="フランス"?"Europe/Paris":"Asia/Tokyo",hour:"2-digit",minute:"2-digit"}))},10);return()=>clearInterval(u)},[t]);const c=u=>{r(u==="France"?"フランス":"日本")};return l.jsxs(F1,{$bgColor:e,$fontColor:n,children:[l.jsxs(_1,{$mainBgColor:i,$fontColor:n,children:[l.jsx("button",{onClick:()=>c("France"),style:{backgroundColor:t==="フランス"?a:i},children:"France"}),l.jsx("button",{onClick:()=>c("Japon"),style:{backgroundColor:t==="日本"?a:i},children:"Japon"})]}),l.jsx(A1,{$mainBgColor:i,children:t}),l.jsx(B1,{$color:a,$mainBgColor:i,children:o})]})}const V1=j.button`
    display: none;
    @media screen and (max-width: 560px) {
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        border: 0.4vw solid ${e=>e.$mainBgColor};
        padding: 1vw;
        border-radius: 0.5vw;
        font-size: 2.5vw;
        font-weight: 700;
        position: fixed;
        font-size: 7vw;
        padding: 3vw;
        border-radius: 3vw;
        display: block;
        bottom: 4vw;
        right: 5vw;
    }
   `;function n0({onButtonClick:e}){const{color:n}=P(a=>a.color),{mainBgColor:i}=P(a=>a.mode);return l.jsx(V1,{$color:n,$bgColor:i,onClick:e,children:"Menu"})}n0.propTypes={onButtonClick:M.func.isRequired};const W1=j.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        position: fixed;
        width:  ${({$clicked:e})=>e?"100%":"0"};
        height: ${({$clicked:e})=>e?"100vh":"0"};
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        z-index: 1;
        &:before {
            content: ${({$clicked:e})=>e?'""':"none"};
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: #494949ec;
            z-index: -1;
        }
    }
`;function U1(){const[e,n]=K.useState(!1),i=()=>{n(!e),console.log("Button clicked!",e)},a=()=>{n(!1)};return l.jsxs(W1,{$clicked:e?"true":void 0,children:[l.jsx(e0,{isButtonClicked:e,onLinkClick:a}),l.jsx(I1,{}),l.jsx(n0,{onButtonClick:i})]})}function xe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Q1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Eu=Q1,xl=()=>Math.random().toString(36).substring(7).split("").join("."),q1={INIT:`@@redux/INIT${xl()}`,REPLACE:`@@redux/REPLACE${xl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${xl()}`},uo=q1;function Bc(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function i0(e,n,i){if(typeof e!="function")throw new Error(xe(2));if(typeof n=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(xe(0));if(typeof n=="function"&&typeof i>"u"&&(i=n,n=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(xe(1));return i(i0)(e,n)}let a=e,t=n,r=new Map,o=r,s=0,c=!1;function u(){o===r&&(o=new Map,r.forEach((k,h)=>{o.set(h,k)}))}function d(){if(c)throw new Error(xe(3));return t}function p(k){if(typeof k!="function")throw new Error(xe(4));if(c)throw new Error(xe(5));let h=!0;u();const f=s++;return o.set(f,k),function(){if(h){if(c)throw new Error(xe(6));h=!1,u(),o.delete(f),r=null}}}function m(k){if(!Bc(k))throw new Error(xe(7));if(typeof k.type>"u")throw new Error(xe(8));if(typeof k.type!="string")throw new Error(xe(17));if(c)throw new Error(xe(9));try{c=!0,t=a(t,k)}finally{c=!1}return(r=o).forEach(f=>{f()}),k}function g(k){if(typeof k!="function")throw new Error(xe(10));a=k,m({type:uo.REPLACE})}function R(){const k=p;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(xe(11));function f(){const w=h;w.next&&w.next(d())}return f(),{unsubscribe:k(f)}},[Eu](){return this}}}return m({type:uo.INIT}),{dispatch:m,subscribe:p,getState:d,replaceReducer:g,[Eu]:R}}function Z1(e){Object.keys(e).forEach(n=>{const i=e[n];if(typeof i(void 0,{type:uo.INIT})>"u")throw new Error(xe(12));if(typeof i(void 0,{type:uo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(xe(13))})}function G1(e){const n=Object.keys(e),i={};for(let r=0;r<n.length;r++){const o=n[r];typeof e[o]=="function"&&(i[o]=e[o])}const a=Object.keys(i);let t;try{Z1(i)}catch(r){t=r}return function(o={},s){if(t)throw t;let c=!1;const u={};for(let d=0;d<a.length;d++){const p=a[d],m=i[p],g=o[p],R=m(g,s);if(typeof R>"u")throw s&&s.type,new Error(xe(14));u[p]=R,c=c||R!==g}return c=c||a.length!==Object.keys(o).length,c?u:o}}function go(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,i)=>(...a)=>n(i(...a)))}function Y1(...e){return n=>(i,a)=>{const t=n(i,a);let r=()=>{throw new Error(xe(15))};const o={getState:t.getState,dispatch:(c,...u)=>r(c,...u)},s=e.map(c=>c(o));return r=go(...s)(t.dispatch),{...t,dispatch:r}}}function X1(e){return Bc(e)&&"type"in e&&typeof e.type=="string"}var a0=Symbol.for("immer-nothing"),Hu=Symbol.for("immer-draftable"),Ge=Symbol.for("immer-state");function mn(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var xa=Object.getPrototypeOf;function Oi(e){return!!e&&!!e[Ge]}function _n(e){var n;return e?t0(e)||Array.isArray(e)||!!e[Hu]||!!((n=e.constructor)!=null&&n[Hu])||Fo(e)||_o(e):!1}var ew=Object.prototype.constructor.toString();function t0(e){if(!e||typeof e!="object")return!1;const n=xa(e);if(n===null)return!0;const i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===ew}function po(e,n){Jo(e)===0?Reflect.ownKeys(e).forEach(i=>{n(i,e[i],e)}):e.forEach((i,a)=>n(a,i,e))}function Jo(e){const n=e[Ge];return n?n.type_:Array.isArray(e)?1:Fo(e)?2:_o(e)?3:0}function Os(e,n){return Jo(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function r0(e,n,i){const a=Jo(e);a===2?e.set(n,i):a===3?e.add(i):e[n]=i}function nw(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Fo(e){return e instanceof Map}function _o(e){return e instanceof Set}function wi(e){return e.copy_||e.base_}function Ms(e,n){if(Fo(e))return new Map(e);if(_o(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const i=t0(e);if(n===!0||n==="class_only"&&!i){const a=Object.getOwnPropertyDescriptors(e);delete a[Ge];let t=Reflect.ownKeys(a);for(let r=0;r<t.length;r++){const o=t[r],s=a[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(a[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(xa(e),a)}else{const a=xa(e);if(a!==null&&i)return{...e};const t=Object.create(a);return Object.assign(t,e)}}function Ic(e,n=!1){return Ao(e)||Oi(e)||!_n(e)||(Jo(e)>1&&(e.set=e.add=e.clear=e.delete=iw),Object.freeze(e),n&&Object.entries(e).forEach(([i,a])=>Ic(a,!0))),e}function iw(){mn(2)}function Ao(e){return Object.isFrozen(e)}var aw={};function Mi(e){const n=aw[e];return n||mn(0,e),n}var bt;function o0(){return bt}function tw(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Du(e,n){n&&(Mi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Es(e){Hs(e),e.drafts_.forEach(rw),e.drafts_=null}function Hs(e){e===bt&&(bt=e.parent_)}function zu(e){return bt=tw(bt,e)}function rw(e){const n=e[Ge];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Ju(e,n){n.unfinalizedDrafts_=n.drafts_.length;const i=n.drafts_[0];return e!==void 0&&e!==i?(i[Ge].modified_&&(Es(n),mn(4)),_n(e)&&(e=fo(n,e),n.parent_||mo(n,e)),n.patches_&&Mi("Patches").generateReplacementPatches_(i[Ge].base_,e,n.patches_,n.inversePatches_)):e=fo(n,i,[]),Es(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==a0?e:void 0}function fo(e,n,i){if(Ao(n))return n;const a=n[Ge];if(!a)return po(n,(t,r)=>Fu(e,a,n,t,r,i)),n;if(a.scope_!==e)return n;if(!a.modified_)return mo(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const t=a.copy_;let r=t,o=!1;a.type_===3&&(r=new Set(t),t.clear(),o=!0),po(r,(s,c)=>Fu(e,a,t,s,c,i,o)),mo(e,t,!1),i&&e.patches_&&Mi("Patches").generatePatches_(a,i,e.patches_,e.inversePatches_)}return a.copy_}function Fu(e,n,i,a,t,r,o){if(Oi(t)){const s=r&&n&&n.type_!==3&&!Os(n.assigned_,a)?r.concat(a):void 0,c=fo(e,t,s);if(r0(i,a,c),Oi(c))e.canAutoFreeze_=!1;else return}else o&&i.add(t);if(_n(t)&&!Ao(t)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;fo(e,t),(!n||!n.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,a)&&mo(e,t)}}function mo(e,n,i=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ic(n,i)}function ow(e,n){const i=Array.isArray(e),a={type_:i?1:0,scope_:n?n.scope_:o0(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let t=a,r=Vc;i&&(t=[a],r=Tt);const{revoke:o,proxy:s}=Proxy.revocable(t,r);return a.draft_=s,a.revoke_=o,s}var Vc={get(e,n){if(n===Ge)return e;const i=wi(e);if(!Os(i,n))return lw(e,i,n);const a=i[n];return e.finalized_||!_n(a)?a:a===kl(e.base_,n)?(Pl(e),e.copy_[n]=zs(a,e)):a},has(e,n){return n in wi(e)},ownKeys(e){return Reflect.ownKeys(wi(e))},set(e,n,i){const a=l0(wi(e),n);if(a!=null&&a.set)return a.set.call(e.draft_,i),!0;if(!e.modified_){const t=kl(wi(e),n),r=t==null?void 0:t[Ge];if(r&&r.base_===i)return e.copy_[n]=i,e.assigned_[n]=!1,!0;if(nw(i,t)&&(i!==void 0||Os(e.base_,n)))return!0;Pl(e),Ds(e)}return e.copy_[n]===i&&(i!==void 0||n in e.copy_)||Number.isNaN(i)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=i,e.assigned_[n]=!0),!0},deleteProperty(e,n){return kl(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,Pl(e),Ds(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const i=wi(e),a=Reflect.getOwnPropertyDescriptor(i,n);return a&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:a.enumerable,value:i[n]}},defineProperty(){mn(11)},getPrototypeOf(e){return xa(e.base_)},setPrototypeOf(){mn(12)}},Tt={};po(Vc,(e,n)=>{Tt[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Tt.deleteProperty=function(e,n){return Tt.set.call(this,e,n,void 0)};Tt.set=function(e,n,i){return Vc.set.call(this,e[0],n,i,e[0])};function kl(e,n){const i=e[Ge];return(i?wi(i):e)[n]}function lw(e,n,i){var t;const a=l0(n,i);return a?"value"in a?a.value:(t=a.get)==null?void 0:t.call(e.draft_):void 0}function l0(e,n){if(!(n in e))return;let i=xa(e);for(;i;){const a=Object.getOwnPropertyDescriptor(i,n);if(a)return a;i=xa(i)}}function Ds(e){e.modified_||(e.modified_=!0,e.parent_&&Ds(e.parent_))}function Pl(e){e.copy_||(e.copy_=Ms(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var sw=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,i,a)=>{if(typeof n=="function"&&typeof i!="function"){const r=i;i=n;const o=this;return function(c=r,...u){return o.produce(c,d=>i.call(this,d,...u))}}typeof i!="function"&&mn(6),a!==void 0&&typeof a!="function"&&mn(7);let t;if(_n(n)){const r=zu(this),o=zs(n,void 0);let s=!0;try{t=i(o),s=!1}finally{s?Es(r):Hs(r)}return Du(r,a),Ju(t,r)}else if(!n||typeof n!="object"){if(t=i(n),t===void 0&&(t=n),t===a0&&(t=void 0),this.autoFreeze_&&Ic(t,!0),a){const r=[],o=[];Mi("Patches").generateReplacementPatches_(n,t,r,o),a(r,o)}return t}else mn(1,n)},this.produceWithPatches=(n,i)=>{if(typeof n=="function")return(o,...s)=>this.produceWithPatches(o,c=>n(c,...s));let a,t;return[this.produce(n,i,(o,s)=>{a=o,t=s}),a,t]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){_n(e)||mn(8),Oi(e)&&(e=cw(e));const n=zu(this),i=zs(e,void 0);return i[Ge].isManual_=!0,Hs(n),i}finishDraft(e,n){const i=e&&e[Ge];(!i||!i.isManual_)&&mn(9);const{scope_:a}=i;return Du(a,n),Ju(void 0,a)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let i;for(i=n.length-1;i>=0;i--){const t=n[i];if(t.path.length===0&&t.op==="replace"){e=t.value;break}}i>-1&&(n=n.slice(i+1));const a=Mi("Patches").applyPatches_;return Oi(e)?a(e,n):this.produce(e,t=>a(t,n))}};function zs(e,n){const i=Fo(e)?Mi("MapSet").proxyMap_(e,n):_o(e)?Mi("MapSet").proxySet_(e,n):ow(e,n);return(n?n.scope_:o0()).drafts_.push(i),i}function cw(e){return Oi(e)||mn(10,e),s0(e)}function s0(e){if(!_n(e)||Ao(e))return e;const n=e[Ge];let i;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,i=Ms(e,n.scope_.immer_.useStrictShallowCopy_)}else i=Ms(e,!0);return po(i,(a,t)=>{r0(i,a,s0(t))}),n&&(n.finalized_=!1),i}var Ye=new sw,c0=Ye.produce;Ye.produceWithPatches.bind(Ye);Ye.setAutoFreeze.bind(Ye);Ye.setUseStrictShallowCopy.bind(Ye);Ye.applyPatches.bind(Ye);Ye.createDraft.bind(Ye);Ye.finishDraft.bind(Ye);function d0(e){return({dispatch:i,getState:a})=>t=>r=>typeof r=="function"?r(i,a,e):t(r)}var dw=d0(),uw=d0,gw=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?go:go.apply(null,arguments)};function _u(e,n){function i(...a){if(n){let t=n(...a);if(!t)throw new Error(Rn(0));return{type:e,payload:t.payload,..."meta"in t&&{meta:t.meta},..."error"in t&&{error:t.error}}}return{type:e,payload:a[0]}}return i.toString=()=>`${e}`,i.type=e,i.match=a=>X1(a)&&a.type===e,i}var u0=class Za extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Za.prototype)}static get[Symbol.species](){return Za}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Za(...n[0].concat(this)):new Za(...n.concat(this))}};function Au(e){return _n(e)?c0(e,()=>{}):e}function Bu(e,n,i){if(e.has(n)){let t=e.get(n);return i.update&&(t=i.update(t,n,e),e.set(n,t)),t}if(!i.insert)throw new Error(Rn(10));const a=i.insert(n,e);return e.set(n,a),a}function pw(e){return typeof e=="boolean"}var fw=()=>function(n){const{thunk:i=!0,immutableCheck:a=!0,serializableCheck:t=!0,actionCreatorCheck:r=!0}=n??{};let o=new u0;return i&&(pw(i)?o.push(dw):o.push(uw(i.extraArgument))),o},mw="RTK_autoBatch",g0=e=>n=>{setTimeout(n,e)},hw=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:g0(10),vw=(e={type:"raf"})=>n=>(...i)=>{const a=n(...i);let t=!0,r=!1,o=!1;const s=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?hw:e.type==="callback"?e.queueNotification:g0(e.timeout),u=()=>{o=!1,r&&(r=!1,s.forEach(d=>d()))};return Object.assign({},a,{subscribe(d){const p=()=>t&&d(),m=a.subscribe(p);return s.add(d),()=>{m(),s.delete(d)}},dispatch(d){var p;try{return t=!((p=d==null?void 0:d.meta)!=null&&p[mw]),r=!t,r&&(o||(o=!0,c(u))),a.dispatch(d)}finally{t=!0}}})},ww=e=>function(i){const{autoBatch:a=!0}=i??{};let t=new u0(e);return a&&t.push(vw(typeof a=="object"?a:void 0)),t};function Rw(e){const n=fw(),{reducer:i=void 0,middleware:a,devTools:t=!0,preloadedState:r=void 0,enhancers:o=void 0}=e||{};let s;if(typeof i=="function")s=i;else if(Bc(i))s=G1(i);else throw new Error(Rn(1));let c;typeof a=="function"?c=a(n):c=n();let u=go;t&&(u=gw({trace:!1,...typeof t=="object"&&t}));const d=Y1(...c),p=ww(d);let m=typeof o=="function"?o(p):p();const g=u(...m);return i0(s,r,g)}function p0(e){const n={},i=[];let a;const t={addCase(r,o){const s=typeof r=="string"?r:r.type;if(!s)throw new Error(Rn(28));if(s in n)throw new Error(Rn(29));return n[s]=o,t},addMatcher(r,o){return i.push({matcher:r,reducer:o}),t},addDefaultCase(r){return a=r,t}};return e(t),[n,i,a]}function jw(e){return typeof e=="function"}function yw(e,n){let[i,a,t]=p0(n),r;if(jw(e))r=()=>Au(e());else{const s=Au(e);r=()=>s}function o(s=r(),c){let u=[i[c.type],...a.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[t]),u.reduce((d,p)=>{if(p)if(Oi(d)){const g=p(d,c);return g===void 0?d:g}else{if(_n(d))return c0(d,m=>p(m,c));{const m=p(d,c);if(m===void 0){if(d===null)return d;throw new Error(Rn(9))}return m}}return d},s)}return o.getInitialState=r,o}var xw=Symbol.for("rtk-slice-createasyncthunk");function kw(e,n){return`${e}/${n}`}function Pw({creators:e}={}){var i;const n=(i=e==null?void 0:e.asyncThunk)==null?void 0:i[xw];return function(t){const{name:r,reducerPath:o=r}=t;if(!r)throw new Error(Rn(11));typeof process<"u";const s=(typeof t.reducers=="function"?t.reducers(Lw()):t.reducers)||{},c=Object.keys(s),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(v,w){const x=typeof v=="string"?v:v.type;if(!x)throw new Error(Rn(12));if(x in u.sliceCaseReducersByType)throw new Error(Rn(13));return u.sliceCaseReducersByType[x]=w,d},addMatcher(v,w){return u.sliceMatchers.push({matcher:v,reducer:w}),d},exposeAction(v,w){return u.actionCreators[v]=w,d},exposeCaseReducer(v,w){return u.sliceCaseReducersByName[v]=w,d}};c.forEach(v=>{const w=s[v],x={reducerName:v,type:kw(r,v),createNotation:typeof t.reducers=="function"};bw(w)?$w(x,w,d,n):Kw(x,w,d)});function p(){const[v={},w=[],x=void 0]=typeof t.extraReducers=="function"?p0(t.extraReducers):[t.extraReducers],C={...v,...u.sliceCaseReducersByType};return yw(t.initialState,L=>{for(let T in C)L.addCase(T,C[T]);for(let T of u.sliceMatchers)L.addMatcher(T.matcher,T.reducer);for(let T of w)L.addMatcher(T.matcher,T.reducer);x&&L.addDefaultCase(x)})}const m=v=>v,g=new Map;let R;function y(v,w){return R||(R=p()),R(v,w)}function k(){return R||(R=p()),R.getInitialState()}function h(v,w=!1){function x(L){let T=L[v];return typeof T>"u"&&w&&(T=k()),T}function C(L=m){const T=Bu(g,w,{insert:()=>new WeakMap});return Bu(T,L,{insert:()=>{const F={};for(const[D,q]of Object.entries(t.selectors??{}))F[D]=Cw(q,L,k,w);return F}})}return{reducerPath:v,getSelectors:C,get selectors(){return C(x)},selectSlice:x}}const f={name:r,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:k,...h(o),injectInto(v,{reducerPath:w,...x}={}){const C=w??o;return v.inject({reducerPath:C,reducer:y},x),{...f,...h(C,!0)}}};return f}}function Cw(e,n,i,a){function t(r,...o){let s=n(r);return typeof s>"u"&&a&&(s=i()),e(s,...o)}return t.unwrapped=e,t}var Fi=Pw();function Lw(){function e(n,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...i}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...i){return n(...i)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:i}},asyncThunk:e}}function Kw({type:e,reducerName:n,createNotation:i},a,t){let r,o;if("reducer"in a){if(i&&!Tw(a))throw new Error(Rn(17));r=a.reducer,o=a.prepare}else r=a;t.addCase(e,r).exposeCaseReducer(n,r).exposeAction(n,o?_u(e,o):_u(e))}function bw(e){return e._reducerDefinitionType==="asyncThunk"}function Tw(e){return e._reducerDefinitionType==="reducerWithPrepare"}function $w({type:e,reducerName:n},i,a,t){if(!t)throw new Error(Rn(18));const{payloadCreator:r,fulfilled:o,pending:s,rejected:c,settled:u,options:d}=i,p=t(e,r,d);a.exposeAction(n,p),o&&a.addCase(p.fulfilled,o),s&&a.addCase(p.pending,s),c&&a.addCase(p.rejected,c),u&&a.addMatcher(p.settled,u),a.exposeCaseReducer(n,{fulfilled:o||cr,pending:s||cr,rejected:c||cr,settled:u||cr})}function cr(){}function Rn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Sw=[{id:1,Kanji:"一",OnReading:["イチ","イツ"],KunReading:["ひと","ひと(つ)"],OnPrincipalReading:"イチ",KunPrincipalReading:"ひと(つ)",OnPrincipalReadingRomaji:"ichi",KunPrincipalReadingRomaji:"hito(tsu)",JLPTLevel:"N5",Meaning:"un",SecondaryMeaning:null},{id:2,Kanji:"二",OnReading:["ニ","ジ"],KunReading:["ふた","ふた(つ)"],OnPrincipalReading:"ニ",KunPrincipalReading:"ふた(つ)",OnPrincipalReadingRomaji:"ni",KunPrincipalReadingRomaji:"futa(tsu)",JLPTLevel:"N5",Meaning:"deux",SecondaryMeaning:null},{id:3,Kanji:"三",OnReading:["サン"],KunReading:["み","み(つ)"],OnPrincipalReading:"サン",KunPrincipalReading:"み(つ)",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"mi(tsu)",JLPTLevel:"N5",Meaning:"trois",SecondaryMeaning:null},{id:4,Kanji:"四",OnReading:["シ"],KunReading:["よん","よ","よ(つ)"],OnPrincipalReading:"シ",KunPrincipalReading:"よん",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"yon",JLPTLevel:"N5",Meaning:"quatre",SecondaryMeaning:null},{id:5,Kanji:"五",OnReading:["ゴ"],KunReading:["いつ","いつ(つ)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"いつ(つ)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"itsu(tsu)",JLPTLevel:"N5",Meaning:"cinq",SecondaryMeaning:null},{id:6,Kanji:"六",OnReading:["ロク"],KunReading:["む","む(つ)","むい"],OnPrincipalReading:"ロク",KunPrincipalReading:"む(つ)",OnPrincipalReadingRomaji:"roku",KunPrincipalReadingRomaji:"mu(tsu)",JLPTLevel:"N5",Meaning:"six",SecondaryMeaning:null},{id:7,Kanji:"七",OnReading:["シチ"],KunReading:["なな","なな(つ)","なの"],OnPrincipalReading:"シチ",KunPrincipalReading:"なな(つ)",OnPrincipalReadingRomaji:"shichi",KunPrincipalReadingRomaji:"nana(tsu)",JLPTLevel:"N5",Meaning:"sept",SecondaryMeaning:null},{id:8,Kanji:"八",OnReading:["ハチ"],KunReading:["や","や(つ)","よう"],OnPrincipalReading:"ハチ",KunPrincipalReading:"や(つ)",OnPrincipalReadingRomaji:"hachi",KunPrincipalReadingRomaji:"ya(tsu)",JLPTLevel:"N5",Meaning:"huit",SecondaryMeaning:null},{id:9,Kanji:"九",OnReading:["キュウ","ク"],KunReading:["ここの","ここの(つ)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"ここの(つ)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kokono(tsu)",JLPTLevel:"N5",Meaning:"neuf",SecondaryMeaning:null},{id:10,Kanji:"十",OnReading:["ジッ"],KunReading:["とお","と"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"とお",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"too",JLPTLevel:"N5",Meaning:"dix",SecondaryMeaning:null},{id:11,Kanji:"人",OnReading:["ジン","ニン"],KunReading:["ひと"],OnPrincipalReading:"ジン",KunPrincipalReading:"ひと",OnPrincipalReadingRomaji:"jin",KunPrincipalReadingRomaji:"hito",JLPTLevel:"N5",Meaning:"personne",SecondaryMeaning:"humain"},{id:12,Kanji:"今",OnReading:["コン","キン"],KunReading:["いま"],OnPrincipalReading:"コン",KunPrincipalReading:"いま",OnPrincipalReadingRomaji:"kon",KunPrincipalReadingRomaji:"ima",JLPTLevel:"N5",Meaning:"maintenant",SecondaryMeaning:null},{id:13,Kanji:"日",OnReading:["ニチ","ジツ"],KunReading:["ひ","か"],OnPrincipalReading:"ニチ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"nichi",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"jour",SecondaryMeaning:"soleil"},{id:14,Kanji:"週",OnReading:["シュウ"],KunReading:["-"],OnPrincipalReading:"シュウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:null,JLPTLevel:"N5",Meaning:"semaine",SecondaryMeaning:null},{id:15,Kanji:"月",OnReading:["ゲツ","ガツ"],KunReading:["つき"],OnPrincipalReading:"ゲツ",KunPrincipalReading:"つき",OnPrincipalReadingRomaji:"getsu",KunPrincipalReadingRomaji:"tsuki",JLPTLevel:"N5",Meaning:"mois",SecondaryMeaning:"lune"},{id:16,Kanji:"年",OnReading:["ネン"],KunReading:["とし"],OnPrincipalReading:"ネン",KunPrincipalReading:"とし",OnPrincipalReadingRomaji:"nen",KunPrincipalReadingRomaji:"toshi",JLPTLevel:"N5",Meaning:"année",SecondaryMeaning:null},{id:17,Kanji:"中",OnReading:["チュウ","ジュウ"],KunReading:["なか"],OnPrincipalReading:"チュウ",KunPrincipalReading:"なか",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"naka",JLPTLevel:"N5",Meaning:"milieu",SecondaryMeaning:"dedans"},{id:18,Kanji:"山",OnReading:["サン"],KunReading:["やま"],OnPrincipalReading:"サン",KunPrincipalReading:"やま",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"yama",JLPTLevel:"N5",Meaning:"montagne",SecondaryMeaning:null},{id:19,Kanji:"川",OnReading:["セン"],KunReading:["かわ"],OnPrincipalReading:"セン",KunPrincipalReading:"かわ",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"kawa",JLPTLevel:"N5",Meaning:"rivière",SecondaryMeaning:"fleuve"},{id:20,Kanji:"左",OnReading:["サ"],KunReading:["ひだり"],OnPrincipalReading:"サ",KunPrincipalReading:"ひだり",OnPrincipalReadingRomaji:"sa",KunPrincipalReadingRomaji:"hidari",JLPTLevel:"N5",Meaning:"gauche",SecondaryMeaning:null},{id:21,Kanji:"右",OnReading:["ウ","ユウ"],KunReading:["みぎ"],OnPrincipalReading:"ウ",KunPrincipalReading:"みぎ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"migi",JLPTLevel:"N5",Meaning:"droite",SecondaryMeaning:null},{id:22,Kanji:"大",OnReading:["ダイ","タイ"],KunReading:["おお","おお(きい)"],OnPrincipalReading:"ダイ",KunPrincipalReading:"おお(きい)",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"oo(kii)",JLPTLevel:"N5",Meaning:"grand",SecondaryMeaning:null},{id:23,Kanji:"木",OnReading:["モク","ボク"],KunReading:["き","こ"],OnPrincipalReading:"モク",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"arbre",SecondaryMeaning:"bois"},{id:24,Kanji:"本",OnReading:["ホン"],KunReading:["もと"],OnPrincipalReading:"ホン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"hon",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N5",Meaning:"livre",SecondaryMeaning:"origine"},{id:25,Kanji:"水",OnReading:["スイ"],KunReading:["みず"],OnPrincipalReading:"スイ",KunPrincipalReading:"みず",OnPrincipalReadingRomaji:"sui",KunPrincipalReadingRomaji:"mizu",JLPTLevel:"N5",Meaning:"eau",SecondaryMeaning:null},{id:26,Kanji:"火",OnReading:["カ"],KunReading:["ひ"],OnPrincipalReading:"カ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"feu",SecondaryMeaning:null},{id:27,Kanji:"父",OnReading:["フ"],KunReading:["ちち"],OnPrincipalReading:"フ",KunPrincipalReading:"ちち",OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:"chichi",JLPTLevel:"N5",Meaning:"père",SecondaryMeaning:null},{id:28,Kanji:"母",OnReading:["ボ"],KunReading:["はは"],OnPrincipalReading:"ボ",KunPrincipalReading:"はは",OnPrincipalReadingRomaji:"bo",KunPrincipalReadingRomaji:"haha",JLPTLevel:"N5",Meaning:"mère",SecondaryMeaning:null},{id:29,Kanji:"耳",OnReading:["ジ"],KunReading:["みみ"],OnPrincipalReading:"ジ",KunPrincipalReading:"みみ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mimi",JLPTLevel:"N5",Meaning:"oreille",SecondaryMeaning:null},{id:30,Kanji:"口",OnReading:["コウ","ク"],KunReading:["くち"],OnPrincipalReading:"コウ",KunPrincipalReading:"くち",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kuchi",JLPTLevel:"N5",Meaning:"bouche",SecondaryMeaning:"entrée"},{id:31,Kanji:"休",OnReading:["キュウ"],KunReading:["やす(む)","やす(める)","やす(まる)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"やす(む)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"yasu(mu)",JLPTLevel:"N5",Meaning:"se reposer",SecondaryMeaning:"pause"},{id:32,Kanji:"何",OnReading:["カ"],KunReading:["なに","なん"],OnPrincipalReading:"カ",KunPrincipalReading:"なに",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"nani",JLPTLevel:"N5",Meaning:"quoi",SecondaryMeaning:"que"},{id:33,Kanji:"入",OnReading:["ニュウ"],KunReading:["い(る)","い(れる)","はい(る)"],OnPrincipalReading:"ニュウ",KunPrincipalReading:"はい(る)",OnPrincipalReadingRomaji:"nyuu",KunPrincipalReadingRomaji:"hai(ru)",JLPTLevel:"N5",Meaning:"entrer",SecondaryMeaning:"insérer"},{id:34,Kanji:"上",OnReading:["ジョウ","ショウ"],KunReading:["うえ","あ(げる)","あ(がる)","のぼ(る)"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"うえ",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ue",JLPTLevel:"N5",Meaning:"au-dessus",SecondaryMeaning:"haut"},{id:35,Kanji:"前",OnReading:["ゼン"],KunReading:["まえ"],OnPrincipalReading:"ゼン",KunPrincipalReading:"まえ",OnPrincipalReadingRomaji:"zen",KunPrincipalReadingRomaji:"mae",JLPTLevel:"N5",Meaning:"devant",SecondaryMeaning:"avant"},{id:36,Kanji:"下",OnReading:["カ","ゲ"],KunReading:["した","さ(げる)","さ(がる)","くだ(る)","お(ろす)","お(りる)"],OnPrincipalReading:"カ",KunPrincipalReading:"した",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"shita",JLPTLevel:"N5",Meaning:"en-dessous",SecondaryMeaning:"bas"},{id:37,Kanji:"千",OnReading:["セン"],KunReading:["ち"],OnPrincipalReading:"セン",KunPrincipalReading:"ち",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"chi",JLPTLevel:"N5",Meaning:"mille",SecondaryMeaning:null},{id:38,Kanji:"午",OnReading:["ゴ"],KunReading:["うま"],OnPrincipalReading:"ゴ",KunPrincipalReading:"うま",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"uma",JLPTLevel:"N5",Meaning:"midi",SecondaryMeaning:null},{id:39,Kanji:"友",OnReading:["ユウ"],KunReading:["とも"],OnPrincipalReading:"ユウ",KunPrincipalReading:"とも",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"tomo",JLPTLevel:"N5",Meaning:"ami",SecondaryMeaning:null},{id:40,Kanji:"古",OnReading:["コ"],KunReading:["ふる(い)"],OnPrincipalReading:"コ",KunPrincipalReading:"ふる(い)",OnPrincipalReadingRomaji:"ko",KunPrincipalReadingRomaji:"furui",JLPTLevel:"N5",Meaning:"ancien",SecondaryMeaning:"vieux"},{id:41,Kanji:"名",OnReading:["メイ","ミョウ"],KunReading:["な"],OnPrincipalReading:"メイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"na",JLPTLevel:"N5",Meaning:"nom",SecondaryMeaning:"prénom"},{id:42,Kanji:"国",OnReading:["コク"],KunReading:["くに"],OnPrincipalReading:"コク",KunPrincipalReading:"くに",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuni",JLPTLevel:"N5",Meaning:"pays",SecondaryMeaning:"nation"},{id:43,Kanji:"外",OnReading:["ガイ","ゲ"],KunReading:["そと","ほか"],OnPrincipalReading:"ガイ",KunPrincipalReading:"そと",OnPrincipalReadingRomaji:"gai",KunPrincipalReadingRomaji:"soto",JLPTLevel:"N5",Meaning:"extérieur",SecondaryMeaning:"autre"},{id:44,Kanji:"女",OnReading:["ジョ","ニョ","ニョウ"],KunReading:["おんな","め"],OnPrincipalReading:"ジョ",KunPrincipalReading:"おんな",OnPrincipalReadingRomaji:"jo",KunPrincipalReadingRomaji:"onna",JLPTLevel:"N5",Meaning:"femme",SecondaryMeaning:"féminin"},{id:45,Kanji:"男",OnReading:["ダン","ナン"],KunReading:["おとこ"],OnPrincipalReading:"ダン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"dan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N5",Meaning:"homme",SecondaryMeaning:"masculin"},{id:46,Kanji:"子",OnReading:["シ","ス","ツ"],KunReading:["こ","お"],OnPrincipalReading:"シ",KunPrincipalReading:"こ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ko",JLPTLevel:"N5",Meaning:"enfant",SecondaryMeaning:"fils"},{id:47,Kanji:"学",OnReading:["ガク"],KunReading:["まな(ぶ)"],OnPrincipalReading:"ガク",KunPrincipalReading:"まな(ぶ)",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"manabu",JLPTLevel:"N5",Meaning:"étudier",SecondaryMeaning:"apprentissage"},{id:48,Kanji:"生",OnReading:["セイ","ショウ"],KunReading:["い(きる)","う(まれる)","お(う)","なま"],OnPrincipalReading:"セイ",KunPrincipalReading:"い(きる)",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"iki(ru)",JLPTLevel:"N5",Meaning:"vie",SecondaryMeaning:"naissance"},{id:49,Kanji:"小",OnReading:["ショウ"],KunReading:["ちい(さい)","こ"],OnPrincipalReading:"ショウ",KunPrincipalReading:"ちい(さい)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"chi(i)",JLPTLevel:"N5",Meaning:"petit",SecondaryMeaning:"minuscule"},{id:50,Kanji:"書",OnReading:["ショ"],KunReading:["か(く)"],OnPrincipalReading:"ショ",KunPrincipalReading:"か(く)",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"kaku",JLPTLevel:"N5",Meaning:"écrire",SecondaryMeaning:"livre"},{id:51,Kanji:"毎",OnReading:["マイ"],KunReading:["ごと"],OnPrincipalReading:"マイ",KunPrincipalReading:"ごと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"goto",JLPTLevel:"N5",Meaning:"chaque",SecondaryMeaning:"tous"},{id:52,Kanji:"先",OnReading:["セン"],KunReading:["さき","ま(ず)"],OnPrincipalReading:"セン",KunPrincipalReading:"さき",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"saki",JLPTLevel:"N5",Meaning:"avant",SecondaryMeaning:"précédent"},{id:53,Kanji:"会",OnReading:["カイ","エ"],KunReading:["あ(う)"],OnPrincipalReading:"カイ",KunPrincipalReading:"あ(う)",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"au",JLPTLevel:"N5",Meaning:"rencontre",SecondaryMeaning:"association"},{id:54,Kanji:"万",OnReading:["マン","バン"],KunReading:["よろず"],OnPrincipalReading:"マン",KunPrincipalReading:"よろず",OnPrincipalReadingRomaji:"man",KunPrincipalReadingRomaji:"yorozu",JLPTLevel:"N5",Meaning:"dix mille",SecondaryMeaning:"innombrable"},{id:55,Kanji:"円",OnReading:["エン"],KunReading:["まる"],OnPrincipalReading:"エン",KunPrincipalReading:"まる",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"maru",JLPTLevel:"N5",Meaning:"yen",SecondaryMeaning:"rond"},{id:56,Kanji:"出",OnReading:["シュツ","スイ"],KunReading:["で(る)","だ(す)"],OnPrincipalReading:"シュツ",KunPrincipalReading:"で(る)",OnPrincipalReadingRomaji:"shutsu",KunPrincipalReadingRomaji:"de(ru)",JLPTLevel:"N5",Meaning:"sortir",SecondaryMeaning:"émettre"},{id:57,Kanji:"分",OnReading:["ブン","フン","ブ"],KunReading:["わ(ける)","わ(かる)","ぶん"],OnPrincipalReading:"ブン",KunPrincipalReading:"わ(ける)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"wake(ru)",JLPTLevel:"N5",Meaning:"minute",SecondaryMeaning:"partie"},{id:58,Kanji:"北",OnReading:["ホク"],KunReading:["きた"],OnPrincipalReading:"ホク",KunPrincipalReading:"きた",OnPrincipalReadingRomaji:"hoku",KunPrincipalReadingRomaji:"kita",JLPTLevel:"N5",Meaning:"nord",SecondaryMeaning:null},{id:59,Kanji:"半",OnReading:["ハン"],KunReading:["なか(ば)"],OnPrincipalReading:"ハン",KunPrincipalReading:"なか(ば)",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"naka(ba)",JLPTLevel:"N5",Meaning:"moitié",SecondaryMeaning:null},{id:60,Kanji:"南",OnReading:["ナン","なん"],KunReading:["みなみ"],OnPrincipalReading:"ナン",KunPrincipalReading:"みなみ",OnPrincipalReadingRomaji:"nan",KunPrincipalReadingRomaji:"minami",JLPTLevel:"N5",Meaning:"sud",SecondaryMeaning:null},{id:61,Kanji:"土",OnReading:["ド","ト"],KunReading:["つち"],OnPrincipalReading:"ド",KunPrincipalReading:"つち",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tsuchi",JLPTLevel:"N5",Meaning:"terre",SecondaryMeaning:"sol"},{id:62,Kanji:"多",OnReading:["タ"],KunReading:["おお(い)"],OnPrincipalReading:"タ",KunPrincipalReading:"おお(い)",OnPrincipalReadingRomaji:"ta",KunPrincipalReadingRomaji:"oo(i)",JLPTLevel:"N5",Meaning:"beaucoup",SecondaryMeaning:"plus"},{id:63,Kanji:"天",OnReading:["テン"],KunReading:["あま","あめ"],OnPrincipalReading:"テン",KunPrincipalReading:"あま",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"ama",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"paradis"},{id:64,Kanji:"安",OnReading:["アン"],KunReading:["やす(い)"],OnPrincipalReading:"アン",KunPrincipalReading:"やす(い)",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"yasu(i)",JLPTLevel:"N5",Meaning:"bon marché",SecondaryMeaning:"sécurisé"},{id:65,Kanji:"少",OnReading:["ショウ"],KunReading:["すく(ない)","すこ(し)"],OnPrincipalReading:"ショウ",KunPrincipalReading:"すく(ない)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"suku(nai)",JLPTLevel:"N5",Meaning:"peu",SecondaryMeaning:"moins"},{id:66,Kanji:"店",OnReading:["テン"],KunReading:["みせ","たな"],OnPrincipalReading:"テン",KunPrincipalReading:"みせ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"mise",JLPTLevel:"N5",Meaning:"magasin",SecondaryMeaning:"boutique"},{id:67,Kanji:"後",OnReading:["ゴ","コウ"],KunReading:["あと","うし(ろ)","のち"],OnPrincipalReading:"ゴ",KunPrincipalReading:"あと",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"ato",JLPTLevel:"N5",Meaning:"après",SecondaryMeaning:"derrière"},{id:68,Kanji:"手",OnReading:["シュ"],KunReading:["て","た"],OnPrincipalReading:"シュ",KunPrincipalReading:"て",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"te",JLPTLevel:"N5",Meaning:"main",SecondaryMeaning:"métier"},{id:69,Kanji:"新",OnReading:["シン"],KunReading:["あたら(しい)","あら(た)"],OnPrincipalReading:"シン",KunPrincipalReading:"あたら(しい)",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"atarashii",JLPTLevel:"N5",Meaning:"nouveau",SecondaryMeaning:"récent"},{id:70,Kanji:"時",OnReading:["ジ"],KunReading:["とき","と"],OnPrincipalReading:"ジ",KunPrincipalReading:"とき",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"toki",JLPTLevel:"N5",Meaning:"temps",SecondaryMeaning:"heure"},{id:71,Kanji:"来",OnReading:["ライ","くる"],KunReading:["くる","きたる"],OnPrincipalReading:"ライ",KunPrincipalReading:"くる",OnPrincipalReadingRomaji:"rai",KunPrincipalReadingRomaji:"kuru",JLPTLevel:"N5",Meaning:"venir",SecondaryMeaning:"arriver"},{id:72,Kanji:"東",OnReading:["トウ"],KunReading:["ひがし"],OnPrincipalReading:"トウ",KunPrincipalReading:"ひがし",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"higashi",JLPTLevel:"N5",Meaning:"est",SecondaryMeaning:"orient"},{id:73,Kanji:"校",OnReading:["コウ"],KunReading:["こう"],OnPrincipalReading:"コウ",KunPrincipalReading:"こう",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kou",JLPTLevel:"N5",Meaning:"école",SecondaryMeaning:"institution"},{id:74,Kanji:"気",OnReading:["キ"],KunReading:["き"],OnPrincipalReading:"キ",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"esprit",SecondaryMeaning:"atmosphère"},{id:75,Kanji:"白",OnReading:["ハク","ビャク"],KunReading:["しろ","しろ(い)"],OnPrincipalReading:"ハク",KunPrincipalReading:"しろ",OnPrincipalReadingRomaji:"haku",KunPrincipalReadingRomaji:"shiro",JLPTLevel:"N5",Meaning:"blanc",SecondaryMeaning:null},{id:76,Kanji:"百",OnReading:["ヒャク","ビャク"],KunReading:["もも"],OnPrincipalReading:"ヒャク",KunPrincipalReading:"もも",OnPrincipalReadingRomaji:"hyaku",KunPrincipalReadingRomaji:"momo",JLPTLevel:"N5",Meaning:"cent",SecondaryMeaning:"nombre"},{id:77,Kanji:"目",OnReading:["モク","ボク"],KunReading:["め","ま"],OnPrincipalReading:"モク",KunPrincipalReading:"め",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"me",JLPTLevel:"N5",Meaning:"œil",SecondaryMeaning:"but"},{id:78,Kanji:"社",OnReading:["シャ"],KunReading:["やしろ"],OnPrincipalReading:"シャ",KunPrincipalReading:"やしろ",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"yashiro",JLPTLevel:"N5",Meaning:"société",SecondaryMeaning:"temple"},{id:79,Kanji:"空",OnReading:["クウ"],KunReading:["そら","あ(ける)","あ(く)"],OnPrincipalReading:"クウ",KunPrincipalReading:"そら",OnPrincipalReadingRomaji:"kuu",KunPrincipalReadingRomaji:"sora",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"vide"},{id:80,Kanji:"立",OnReading:["リツ","リュウ"],KunReading:["た(つ)","たて(る)"],OnPrincipalReading:"リツ",KunPrincipalReading:"た(つ)",OnPrincipalReadingRomaji:"ritsu",KunPrincipalReadingRomaji:"ta(tsu)",JLPTLevel:"N5",Meaning:"se lever",SecondaryMeaning:"établir"},{id:81,Kanji:"聞",OnReading:["ブン","モン"],KunReading:["き(く)","きこ(える)"],OnPrincipalReading:"ブン",KunPrincipalReading:"き(く)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"kiku",JLPTLevel:"N5",Meaning:"écouter",SecondaryMeaning:"entendre"},{id:82,Kanji:"花",OnReading:["カ"],KunReading:["はな"],OnPrincipalReading:"カ",KunPrincipalReading:"はな",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hana",JLPTLevel:"N5",Meaning:"fleur",SecondaryMeaning:null},{id:83,Kanji:"行",OnReading:["コウ","ギョウ"],KunReading:["い(く)","ゆ(く)","おこな(う)"],OnPrincipalReading:"コウ",KunPrincipalReading:"い(く)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"iku",JLPTLevel:"N5",Meaning:"aller",SecondaryMeaning:"ligne"},{id:84,Kanji:"西",OnReading:["セイ","サイ"],KunReading:["にし"],OnPrincipalReading:"セイ",KunPrincipalReading:"にし",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"nishi",JLPTLevel:"N5",Meaning:"ouest",SecondaryMeaning:null},{id:85,Kanji:"見",OnReading:["ケン"],KunReading:["み(る)","み(える)","み(せる)"],OnPrincipalReading:"ケン",KunPrincipalReading:"み(る)",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"miru",JLPTLevel:"N5",Meaning:"voir",SecondaryMeaning:"regarder"},{id:86,Kanji:"言",OnReading:["ゲン","ゴン"],KunReading:["い(う)","こと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"い(う)",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"iu",JLPTLevel:"N5",Meaning:"dire",SecondaryMeaning:"mot"},{id:87,Kanji:"話",OnReading:["ワ"],KunReading:["はな(す)","はなし"],OnPrincipalReading:"ワ",KunPrincipalReading:"はな(す)",OnPrincipalReadingRomaji:"wa",KunPrincipalReadingRomaji:"hanasu",JLPTLevel:"N5",Meaning:"parler",SecondaryMeaning:"conversation"},{id:88,Kanji:"語",OnReading:["ゴ"],KunReading:["かた(る)","かた(らう)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"かた(る)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"kataru",JLPTLevel:"N5",Meaning:"langue",SecondaryMeaning:"parler"},{id:89,Kanji:"読",OnReading:["ドク","トク","トウ"],KunReading:["よ(む)"],OnPrincipalReading:"ドク",KunPrincipalReading:"よ(む)",OnPrincipalReadingRomaji:"doku",KunPrincipalReadingRomaji:"yomu",JLPTLevel:"N5",Meaning:"lire",SecondaryMeaning:"lecture"},{id:90,Kanji:"買",OnReading:["バイ"],KunReading:["か(う)"],OnPrincipalReading:"バイ",KunPrincipalReading:"か(う)",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"kau",JLPTLevel:"N5",Meaning:"acheter",SecondaryMeaning:null},{id:91,Kanji:"足",OnReading:["ソク"],KunReading:["あし","た(りる)","た(す)"],OnPrincipalReading:"ソク",KunPrincipalReading:"あし",OnPrincipalReadingRomaji:"soku",KunPrincipalReadingRomaji:"ashi",JLPTLevel:"N5",Meaning:"pied",SecondaryMeaning:"suffisance"},{id:92,Kanji:"車",OnReading:["シャ"],KunReading:["くるま"],OnPrincipalReading:"シャ",KunPrincipalReading:"くるま",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"kuruma",JLPTLevel:"N5",Meaning:"voiture",SecondaryMeaning:"véhicule"},{id:93,Kanji:"道",OnReading:["ドウ"],KunReading:["みち"],OnPrincipalReading:"ドウ",KunPrincipalReading:"みち",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"michi",JLPTLevel:"N5",Meaning:"route",SecondaryMeaning:"voie"},{id:94,Kanji:"金",OnReading:["キン","コン"],KunReading:["かね","かな"],OnPrincipalReading:"キン",KunPrincipalReading:"かね",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"kane",JLPTLevel:"N5",Meaning:"argent",SecondaryMeaning:"métal"},{id:95,Kanji:"長",OnReading:["チョウ"],KunReading:["なが(い)"],OnPrincipalReading:"チョウ",KunPrincipalReading:"なが(い)",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"nagai",JLPTLevel:"N5",Meaning:"long",SecondaryMeaning:"chef"},{id:96,Kanji:"間",OnReading:["カン","ケン"],KunReading:["あいだ","ま"],OnPrincipalReading:"カン",KunPrincipalReading:"あいだ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"aida",JLPTLevel:"N5",Meaning:"intervalle",SecondaryMeaning:"espace"},{id:97,Kanji:"雨",OnReading:["ウ"],KunReading:["あめ","あま"],OnPrincipalReading:"ウ",KunPrincipalReading:"あめ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"ame",JLPTLevel:"N5",Meaning:"pluie",SecondaryMeaning:null},{id:98,Kanji:"電",OnReading:["デン"],KunReading:["いなづま"],OnPrincipalReading:"デン",KunPrincipalReading:"いなづま",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"inazuma",JLPTLevel:"N5",Meaning:"électricité",SecondaryMeaning:"éclair"},{id:99,Kanji:"食",OnReading:["ショク","ジキ"],KunReading:["た(べる)","く(う)"],OnPrincipalReading:"ショク",KunPrincipalReading:"た(べる)",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"taberu",JLPTLevel:"N5",Meaning:"manger",SecondaryMeaning:"nourriture"},{id:100,Kanji:"飲",OnReading:["イン"],KunReading:["の(む)","の(みもの)"],OnPrincipalReading:"イン",KunPrincipalReading:"の(む)",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"nomu",JLPTLevel:"N5",Meaning:"boire",SecondaryMeaning:"boisson"},{id:101,Kanji:"駅",OnReading:["エキ"],KunReading:["いき"],OnPrincipalReading:"エキ",KunPrincipalReading:"いき",OnPrincipalReadingRomaji:"eki",KunPrincipalReadingRomaji:"iki",JLPTLevel:"N5",Meaning:"gare",SecondaryMeaning:"station"},{id:102,Kanji:"高",OnReading:["コウ"],KunReading:["たか(い)","たか"],OnPrincipalReading:"コウ",KunPrincipalReading:"たか(い)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"takai",JLPTLevel:"N5",Meaning:"haut",SecondaryMeaning:"cher"},{id:103,Kanji:"魚",OnReading:["ギョ"],KunReading:["さかな","うお"],OnPrincipalReading:"ギョ",KunPrincipalReading:"さかな",OnPrincipalReadingRomaji:"gyo",KunPrincipalReadingRomaji:"sakana",JLPTLevel:"N5",Meaning:"poisson",SecondaryMeaning:null},{id:104,Kanji:"力",OnReading:["リョク","リキ"],KunReading:["ちから"],OnPrincipalReading:"リョク",KunPrincipalReading:"ちから",OnPrincipalReadingRomaji:"ryoku",KunPrincipalReadingRomaji:"chikara",JLPTLevel:"N4",Meaning:"force",SecondaryMeaning:null},{id:105,Kanji:"夕",OnReading:["セキ"],KunReading:["ゆう"],OnPrincipalReading:"セキ",KunPrincipalReading:"ゆう",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"yuu",JLPTLevel:"N4",Meaning:"soir",SecondaryMeaning:null},{id:106,Kanji:"工",OnReading:["コウ","ク"],KunReading:[],OnPrincipalReading:"コウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:107,Kanji:"元",OnReading:["ゲン","ガン"],KunReading:["もと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N4",Meaning:"origine",SecondaryMeaning:"base"},{id:108,Kanji:"止",OnReading:["シ"],KunReading:["とまる","とめる"],OnPrincipalReading:"シ",KunPrincipalReading:"とまる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tomaru",JLPTLevel:"N4",Meaning:"arrêter",SecondaryMeaning:"cesser"},{id:109,Kanji:"引",OnReading:["イン"],KunReading:["ひく","ひける"],OnPrincipalReading:"イン",KunPrincipalReading:"ひく",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"hiku",JLPTLevel:"N4",Meaning:"tirer",SecondaryMeaning:null},{id:110,Kanji:"牛",OnReading:["ギュウ"],KunReading:["うし"],OnPrincipalReading:"ギュウ",KunPrincipalReading:"うし",OnPrincipalReadingRomaji:"gyuu",KunPrincipalReadingRomaji:"ushi",JLPTLevel:"N4",Meaning:"vache",SecondaryMeaning:"bétail"},{id:111,Kanji:"区",OnReading:["ク"],KunReading:[],OnPrincipalReading:"ク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"quartier",SecondaryMeaning:"secteur"},{id:112,Kanji:"犬",OnReading:["ケン"],KunReading:["いぬ"],OnPrincipalReading:"ケン",KunPrincipalReading:"いぬ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"inu",JLPTLevel:"N4",Meaning:"chien",SecondaryMeaning:null},{id:113,Kanji:"不",OnReading:["フ","ブ"],KunReading:[],OnPrincipalReading:"フ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"non",SecondaryMeaning:"in-"},{id:114,Kanji:"文",OnReading:["ブン","モン"],KunReading:[],OnPrincipalReading:"ブン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"écriture",SecondaryMeaning:"texte"},{id:115,Kanji:"方",OnReading:["ホウ"],KunReading:["かた","がた"],OnPrincipalReading:"ホウ",KunPrincipalReading:"かた",OnPrincipalReadingRomaji:"hou",KunPrincipalReadingRomaji:"kata",JLPTLevel:"N4",Meaning:"direction",SecondaryMeaning:"personne"},{id:116,Kanji:"心",OnReading:["シン"],KunReading:["こころ"],OnPrincipalReading:"シン",KunPrincipalReading:"こころ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"kokoro",JLPTLevel:"N4",Meaning:"cœur",SecondaryMeaning:"esprit"},{id:117,Kanji:"切",OnReading:["セツ","サイ"],KunReading:["きる","きれる"],OnPrincipalReading:"セツ",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"couper",SecondaryMeaning:null},{id:118,Kanji:"太",OnReading:["タイ","タ"],KunReading:["ふとい","ふとる"],OnPrincipalReading:"タイ",KunPrincipalReading:"ふとい",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"futoi",JLPTLevel:"N4",Meaning:"gros",SecondaryMeaning:"épais"},{id:119,Kanji:"代",OnReading:["ダイ","タイ"],KunReading:["かわる","かわり","かえる"],OnPrincipalReading:"ダイ",KunPrincipalReading:"かわる",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"kawaru",JLPTLevel:"N4",Meaning:"remplacement",SecondaryMeaning:"génération"},{id:120,Kanji:"台",OnReading:["ダイ","タイ"],KunReading:[],OnPrincipalReading:"ダイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"socle",SecondaryMeaning:"plateforme"},{id:121,Kanji:"世",OnReading:["セ","セイ"],KunReading:["よ"],OnPrincipalReading:"セ",KunPrincipalReading:"よ",OnPrincipalReadingRomaji:"se",KunPrincipalReadingRomaji:"yo",JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"ère"},{id:122,Kanji:"正",OnReading:["セイ","ショウ"],KunReading:["ただしい","ただす","まさ"],OnPrincipalReading:"セイ",KunPrincipalReading:"ただしい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"tadashii",JLPTLevel:"N4",Meaning:"correct",SecondaryMeaning:"juste"},{id:123,Kanji:"田",OnReading:["デン"],KunReading:["た"],OnPrincipalReading:"デン",KunPrincipalReading:"た",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"ta",JLPTLevel:"N4",Meaning:"rizière",SecondaryMeaning:null},{id:124,Kanji:"冬",OnReading:["トウ"],KunReading:["ふゆ"],OnPrincipalReading:"トウ",KunPrincipalReading:"ふゆ",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"fuyu",JLPTLevel:"N4",Meaning:"hiver",SecondaryMeaning:null},{id:125,Kanji:"民",OnReading:["ミン"],KunReading:["たみ"],OnPrincipalReading:"ミン",KunPrincipalReading:"たみ",OnPrincipalReadingRomaji:"min",KunPrincipalReadingRomaji:"tami",JLPTLevel:"N4",Meaning:"peuple",SecondaryMeaning:"nation"},{id:126,Kanji:"用",OnReading:["ヨウ"],KunReading:["もちいる"],OnPrincipalReading:"ヨウ",KunPrincipalReading:"もちいる",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"mochiiru",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"usage"},{id:127,Kanji:"兄",OnReading:["ケイ","キョウ"],KunReading:["あに"],OnPrincipalReading:"ケイ",KunPrincipalReading:"あに",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"ani",JLPTLevel:"N4",Meaning:"grand frère",SecondaryMeaning:null},{id:128,Kanji:"以",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"à partir de",SecondaryMeaning:null},{id:129,Kanji:"去",OnReading:["キョ","コ"],KunReading:["さる"],OnPrincipalReading:"キョ",KunPrincipalReading:"さる",OnPrincipalReadingRomaji:"kyo",KunPrincipalReadingRomaji:"saru",JLPTLevel:"N4",Meaning:"quitter",SecondaryMeaning:"partir"},{id:130,Kanji:"仕",OnReading:["シ"],KunReading:["つかえる"],OnPrincipalReading:"シ",KunPrincipalReading:"つかえる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukaeru",JLPTLevel:"N4",Meaning:"servir",SecondaryMeaning:"faire"},{id:131,Kanji:"市",OnReading:["シ"],KunReading:["いち"],OnPrincipalReading:"シ",KunPrincipalReading:"いち",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ichi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"marché"},{id:132,Kanji:"広",OnReading:["コウ"],KunReading:["ひろい","ひろまる","ひろめる","ひろがる","ひろげる"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひろい",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hiroi",JLPTLevel:"N4",Meaning:"large",SecondaryMeaning:"étendu"},{id:133,Kanji:"主",OnReading:["シュ","ス"],KunReading:["ぬし","おも"],OnPrincipalReading:"シュ",KunPrincipalReading:"ぬし",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"nushi",JLPTLevel:"N4",Meaning:"maître",SecondaryMeaning:"principal"},{id:134,Kanji:"写",OnReading:["シャ"],KunReading:["うつす","うつる"],OnPrincipalReading:"シャ",KunPrincipalReading:"うつす",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"utsusu",JLPTLevel:"N4",Meaning:"copier",SecondaryMeaning:"projeter"},{id:135,Kanji:"字",OnReading:["ジ"],KunReading:[],OnPrincipalReading:"ジ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"caractère",SecondaryMeaning:"lettre"},{id:136,Kanji:"自",OnReading:["ジ","シ"],KunReading:["みずから"],OnPrincipalReading:"ジ",KunPrincipalReading:"みずから",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mizukara",JLPTLevel:"N4",Meaning:"soi-même",SecondaryMeaning:null},{id:137,Kanji:"考",OnReading:["コウ"],KunReading:["かんがえる"],OnPrincipalReading:"コウ",KunPrincipalReading:"かんがえる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kangaeru",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:null},{id:138,Kanji:"合",OnReading:["ゴウ","ガッ","カッ"],KunReading:["あう","あわす","あわせる"],OnPrincipalReading:"ゴウ",KunPrincipalReading:"あう",OnPrincipalReadingRomaji:"gou",KunPrincipalReadingRomaji:"au",JLPTLevel:"N4",Meaning:"assembler",SecondaryMeaning:"correspondre"},{id:139,Kanji:"光",OnReading:["コウ"],KunReading:["ひかる","ひかり"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひかる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hikaru",JLPTLevel:"N4",Meaning:"lumière",SecondaryMeaning:"briller"},{id:140,Kanji:"好",OnReading:["コウ"],KunReading:["すき","このむ"],OnPrincipalReading:"コウ",KunPrincipalReading:"すき",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"suki",JLPTLevel:"N4",Meaning:"aimer",SecondaryMeaning:"préférence"},{id:141,Kanji:"死",OnReading:["シ"],KunReading:["しぬ"],OnPrincipalReading:"シ",KunPrincipalReading:"しぬ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"shinu",JLPTLevel:"N4",Meaning:"mort",SecondaryMeaning:"mourir"},{id:142,Kanji:"回",OnReading:["カイ","エ"],KunReading:["まわる","まわす"],OnPrincipalReading:"カイ",KunPrincipalReading:"まわる",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"mawaru",JLPTLevel:"N4",Meaning:"tourner",SecondaryMeaning:"nombre de fois"},{id:143,Kanji:"有",OnReading:["ユウ","ウ"],KunReading:["ある"],OnPrincipalReading:"ユウ",KunPrincipalReading:"ある",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"aru",JLPTLevel:"N4",Meaning:"avoir",SecondaryMeaning:"exister"},{id:144,Kanji:"同",OnReading:["ドウ"],KunReading:["おなじ"],OnPrincipalReading:"ドウ",KunPrincipalReading:"おなじ",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"onaji",JLPTLevel:"N4",Meaning:"même",SecondaryMeaning:"identique"},{id:145,Kanji:"肉",OnReading:["ニク"],KunReading:[],OnPrincipalReading:"ニク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"niku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"viande",SecondaryMeaning:null},{id:146,Kanji:"色",OnReading:["ショク","シキ"],KunReading:["いろ"],OnPrincipalReading:"ショク",KunPrincipalReading:"いろ",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"iro",JLPTLevel:"N4",Meaning:"couleur",SecondaryMeaning:"apparence"},{id:147,Kanji:"早",OnReading:["ソウ","サッ"],KunReading:["はやい","はやまる","はやめる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はやい",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hayai",JLPTLevel:"N4",Meaning:"tôt",SecondaryMeaning:"rapide"},{id:148,Kanji:"地",OnReading:["チ","ジ"],KunReading:[],OnPrincipalReading:"チ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"terre",SecondaryMeaning:"sol"},{id:149,Kanji:"池",OnReading:["チ"],KunReading:["いけ"],OnPrincipalReading:"チ",KunPrincipalReading:"いけ",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"ike",JLPTLevel:"N4",Meaning:"étang",SecondaryMeaning:null},{id:150,Kanji:"村",OnReading:["ソン"],KunReading:["むら"],OnPrincipalReading:"ソン",KunPrincipalReading:"むら",OnPrincipalReadingRomaji:"son",KunPrincipalReadingRomaji:"mura",JLPTLevel:"N4",Meaning:"village",SecondaryMeaning:null},{id:151,Kanji:"体",OnReading:["タイ","テイ"],KunReading:["からだ"],OnPrincipalReading:"タイ",KunPrincipalReading:"からだ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"karada",JLPTLevel:"N4",Meaning:"corps",SecondaryMeaning:"structure"},{id:152,Kanji:"町",OnReading:["チョウ"],KunReading:["まち"],OnPrincipalReading:"チョウ",KunPrincipalReading:"まち",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"machi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"quartier"},{id:153,Kanji:"低",OnReading:["テイ"],KunReading:["ひくい","ひくめる","ひくまる"],OnPrincipalReading:"テイ",KunPrincipalReading:"ひくい",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"hikui",JLPTLevel:"N4",Meaning:"bas",SecondaryMeaning:"faible"},{id:154,Kanji:"弟",OnReading:["テイ","ダイ","デ"],KunReading:["おとうと"],OnPrincipalReading:"テイ",KunPrincipalReading:"おとうと",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"otouto",JLPTLevel:"N4",Meaning:"petit frère",SecondaryMeaning:null},{id:155,Kanji:"走",OnReading:["ソウ"],KunReading:["はしる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はしる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hashiru",JLPTLevel:"N4",Meaning:"courir",SecondaryMeaning:null},{id:156,Kanji:"赤",OnReading:["セキ","シャク"],KunReading:["あか","あかい","あからむ","あからめる"],OnPrincipalReading:"セキ",KunPrincipalReading:"あか",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"aka",JLPTLevel:"N4",Meaning:"rouge",SecondaryMeaning:"cramoisi"},{id:157,Kanji:"図",OnReading:["ズ","ト"],KunReading:["はかる"],OnPrincipalReading:"ズ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"zu",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"plan",SecondaryMeaning:"carte"},{id:158,Kanji:"究",OnReading:["キュウ"],KunReading:["きわめる"],OnPrincipalReading:"キュウ",KunPrincipalReading:"きわめる",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kiwameru",JLPTLevel:"N4",Meaning:"rechercher",SecondaryMeaning:"examiner"},{id:159,Kanji:"声",OnReading:["セイ","ショウ"],KunReading:["こえ","こわ"],OnPrincipalReading:"セイ",KunPrincipalReading:"こえ",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"koe",JLPTLevel:"N4",Meaning:"voix",SecondaryMeaning:"son"},{id:160,Kanji:"売",OnReading:["バイ"],KunReading:["うる","うれる"],OnPrincipalReading:"バイ",KunPrincipalReading:"うる",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"uru",JLPTLevel:"N4",Meaning:"vendre",SecondaryMeaning:"marcher (commerce)"},{id:161,Kanji:"別",OnReading:["ベツ"],KunReading:["わかれる","わける"],OnPrincipalReading:"ベツ",KunPrincipalReading:"わかれる",OnPrincipalReadingRomaji:"betsu",KunPrincipalReadingRomaji:"wakareru",JLPTLevel:"N4",Meaning:"séparer",SecondaryMeaning:"distinct"},{id:162,Kanji:"医",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"médecine",SecondaryMeaning:"soigner"},{id:163,Kanji:"近",OnReading:["キン"],KunReading:["ちかい"],OnPrincipalReading:"キン",KunPrincipalReading:"ちかい",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"chikai",JLPTLevel:"N4",Meaning:"proche",SecondaryMeaning:"près"},{id:164,Kanji:"私",OnReading:["シ"],KunReading:["わたし","わたくし"],OnPrincipalReading:"シ",KunPrincipalReading:"わたし",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"watashi",JLPTLevel:"N4",Meaning:"je",SecondaryMeaning:"moi"},{id:165,Kanji:"作",OnReading:["サク","サ"],KunReading:["つくる"],OnPrincipalReading:"サク",KunPrincipalReading:"つくる",OnPrincipalReadingRomaji:"saku",KunPrincipalReadingRomaji:"tsukuru",JLPTLevel:"N4",Meaning:"faire",SecondaryMeaning:"créer"},{id:166,Kanji:"住",OnReading:["ジュウ"],KunReading:["すむ","すまう"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"すむ",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"sumu",JLPTLevel:"N4",Meaning:"habiter",SecondaryMeaning:"vivre"},{id:167,Kanji:"者",OnReading:["シャ"],KunReading:["もの"],OnPrincipalReading:"シャ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"personne",SecondaryMeaning:"individu"},{id:168,Kanji:"事",OnReading:["ジ"],KunReading:["こと"],OnPrincipalReading:"ジ",KunPrincipalReading:"こと",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"koto",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"affaire"},{id:169,Kanji:"使",OnReading:["シ"],KunReading:["つかう"],OnPrincipalReading:"シ",KunPrincipalReading:"つかう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukau",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"employer"},{id:170,Kanji:"始",OnReading:["シ"],KunReading:["はじめる","はじまる"],OnPrincipalReading:"シ",KunPrincipalReading:"はじめる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"hajimeru",JLPTLevel:"N4",Meaning:"commencer",SecondaryMeaning:"débuter"},{id:171,Kanji:"姉",OnReading:["シ"],KunReading:["あね"],OnPrincipalReading:"シ",KunPrincipalReading:"あね",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ane",JLPTLevel:"N4",Meaning:"grande sœur",SecondaryMeaning:null},{id:172,Kanji:"英",OnReading:["エイ"],KunReading:[],OnPrincipalReading:"エイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"Angleterre",SecondaryMeaning:"héroïque"},{id:173,Kanji:"京",OnReading:["キョウ","ケイ"],KunReading:[],OnPrincipalReading:"キョウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"Kyoto"},{id:174,Kanji:"画",OnReading:["ガ","カク"],KunReading:[],OnPrincipalReading:"ガ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ga",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"dessin",SecondaryMeaning:"trait"},{id:175,Kanji:"妹",OnReading:["マイ"],KunReading:["いもうと"],OnPrincipalReading:"マイ",KunPrincipalReading:"いもうと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"imouto",JLPTLevel:"N4",Meaning:"petite sœur",SecondaryMeaning:null},{id:176,Kanji:"味",OnReading:["ミ"],KunReading:["あじ","あじわう"],OnPrincipalReading:"ミ",KunPrincipalReading:"あじ",OnPrincipalReadingRomaji:"mi",KunPrincipalReadingRomaji:"aji",JLPTLevel:"N4",Meaning:"goût",SecondaryMeaning:"saveur"},{id:177,Kanji:"服",OnReading:["フク"],KunReading:[],OnPrincipalReading:"フク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fuku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"vêtements",SecondaryMeaning:null},{id:178,Kanji:"物",OnReading:["ブツ","モツ"],KunReading:["もの"],OnPrincipalReading:"ブツ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"butsu",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"objet"},{id:179,Kanji:"歩",OnReading:["ホ","ブ","フ"],KunReading:["あるく","あゆむ"],OnPrincipalReading:"ホ",KunPrincipalReading:"あるく",OnPrincipalReadingRomaji:"ho",KunPrincipalReadingRomaji:"aruku",JLPTLevel:"N4",Meaning:"marcher",SecondaryMeaning:"pas"},{id:180,Kanji:"門",OnReading:["モン"],KunReading:["かど"],OnPrincipalReading:"モン",KunPrincipalReading:"かど",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"kado",JLPTLevel:"N4",Meaning:"porte",SecondaryMeaning:"portail"},{id:181,Kanji:"夜",OnReading:["ヤ"],KunReading:["よ","よる"],OnPrincipalReading:"ヤ",KunPrincipalReading:"よる",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"yoru",JLPTLevel:"N4",Meaning:"nuit",SecondaryMeaning:null},{id:182,Kanji:"明",OnReading:["メイ","ミョウ"],KunReading:["あかるい","あける"],OnPrincipalReading:"メイ",KunPrincipalReading:"あかるい",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"akarui",JLPTLevel:"N4",Meaning:"clair",SecondaryMeaning:"lumineux"},{id:183,Kanji:"林",OnReading:["リン"],KunReading:["はやし"],OnPrincipalReading:"リン",KunPrincipalReading:"はやし",OnPrincipalReadingRomaji:"rin",KunPrincipalReadingRomaji:"hayashi",JLPTLevel:"N4",Meaning:"bois",SecondaryMeaning:"forêt"},{id:184,Kanji:"青",OnReading:["セイ","ショウ"],KunReading:["あお","あおい"],OnPrincipalReading:"セイ",KunPrincipalReading:"あおい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"aoi",JLPTLevel:"N4",Meaning:"bleu",SecondaryMeaning:"vert"},{id:185,Kanji:"所",OnReading:["ショ"],KunReading:["ところ"],OnPrincipalReading:"ショ",KunPrincipalReading:"ところ",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"tokoro",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"endroit"},{id:186,Kanji:"注",OnReading:["チュウ"],KunReading:["そそぐ"],OnPrincipalReading:"チュウ",KunPrincipalReading:"そそぐ",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"sosogu",JLPTLevel:"N4",Meaning:"verser",SecondaryMeaning:"concentrer"},{id:187,Kanji:"知",OnReading:["チ"],KunReading:["しる"],OnPrincipalReading:"チ",KunPrincipalReading:"しる",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"shiru",JLPTLevel:"N4",Meaning:"savoir",SecondaryMeaning:"connaître"},{id:188,Kanji:"昼",OnReading:["チュウ"],KunReading:["ひる"],OnPrincipalReading:"チュウ",KunPrincipalReading:"ひる",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"hiru",JLPTLevel:"N4",Meaning:"midi",SecondaryMeaning:"jour"},{id:189,Kanji:"茶",OnReading:["チャ","サ"],KunReading:[],OnPrincipalReading:"チャ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"cha",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"thé",SecondaryMeaning:null},{id:190,Kanji:"待",OnReading:["タイ"],KunReading:["まつ"],OnPrincipalReading:"タイ",KunPrincipalReading:"まつ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"matsu",JLPTLevel:"N4",Meaning:"attendre",SecondaryMeaning:null},{id:191,Kanji:"洗",OnReading:["セン"],KunReading:["あらう"],OnPrincipalReading:"セン",KunPrincipalReading:"あらう",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"arau",JLPTLevel:"N4",Meaning:"laver",SecondaryMeaning:null},{id:192,Kanji:"送",OnReading:["ソウ"],KunReading:["おくる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"おくる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"okuru",JLPTLevel:"N4",Meaning:"envoyer",SecondaryMeaning:null},{id:193,Kanji:"品",OnReading:["ヒン"],KunReading:["しな"],OnPrincipalReading:"ヒン",KunPrincipalReading:"しな",OnPrincipalReadingRomaji:"hin",KunPrincipalReadingRomaji:"shina",JLPTLevel:"N4",Meaning:"produit",SecondaryMeaning:"article"},{id:194,Kanji:"洋",OnReading:["ヨウ"],KunReading:[],OnPrincipalReading:"ヨウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"océan",SecondaryMeaning:"occidental"},{id:195,Kanji:"便",OnReading:["ベン","ビン"],KunReading:["たより"],OnPrincipalReading:"ベン",KunPrincipalReading:"たより",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tayori",JLPTLevel:"N4",Meaning:"commodité",SecondaryMeaning:"courrier"},{id:196,Kanji:"風",OnReading:["フウ","フ"],KunReading:["かぜ"],OnPrincipalReading:"フウ",KunPrincipalReading:"かぜ",OnPrincipalReadingRomaji:"fuu",KunPrincipalReadingRomaji:"kaze",JLPTLevel:"N4",Meaning:"vent",SecondaryMeaning:"style"},{id:197,Kanji:"発",OnReading:["ハツ","ホツ"],KunReading:[],OnPrincipalReading:"ハツ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"hatsu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"départ",SecondaryMeaning:"émission"},{id:198,Kanji:"度",OnReading:["ド","ト","タク"],KunReading:["たび"],OnPrincipalReading:"ド",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"degré",SecondaryMeaning:"fois"},{id:199,Kanji:"映",OnReading:["エイ"],KunReading:["うつる","うつす"],OnPrincipalReading:"エイ",KunPrincipalReading:"うつる",OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:"utsuru",JLPTLevel:"N4",Meaning:"projeter",SecondaryMeaning:"reflet"},{id:200,Kanji:"海",OnReading:["カイ"],KunReading:["うみ"],OnPrincipalReading:"カイ",KunPrincipalReading:"うみ",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"umi",JLPTLevel:"N4",Meaning:"mer",SecondaryMeaning:null},{id:201,Kanji:"界",OnReading:["カイ"],KunReading:[],OnPrincipalReading:"カイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"limite"},{id:202,Kanji:"屋",OnReading:["オク"],KunReading:["や"],OnPrincipalReading:"オク",KunPrincipalReading:"や",OnPrincipalReadingRomaji:"oku",KunPrincipalReadingRomaji:"ya",JLPTLevel:"N4",Meaning:"toit",SecondaryMeaning:"boutique"},{id:203,Kanji:"音",OnReading:["オン","イン"],KunReading:["おと","ね"],OnPrincipalReading:"オン",KunPrincipalReading:"おと",OnPrincipalReadingRomaji:"on",KunPrincipalReadingRomaji:"oto",JLPTLevel:"N4",Meaning:"son",SecondaryMeaning:null},{id:204,Kanji:"急",OnReading:["キュウ"],KunReading:["いそぐ"],OnPrincipalReading:"キュウ",KunPrincipalReading:"いそぐ",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"isogu",JLPTLevel:"N4",Meaning:"urgence",SecondaryMeaning:"rapide"},{id:205,Kanji:"計",OnReading:["ケイ"],KunReading:["はかる"],OnPrincipalReading:"ケイ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"compter",SecondaryMeaning:"mesurer"},{id:206,Kanji:"建",OnReading:["ケン","コン"],KunReading:["たてる","たつ"],OnPrincipalReading:"ケン",KunPrincipalReading:"たてる",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tateru",JLPTLevel:"N4",Meaning:"construire",SecondaryMeaning:null},{id:207,Kanji:"研",OnReading:["ケン"],KunReading:["とぐ"],OnPrincipalReading:"ケン",KunPrincipalReading:"とぐ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"togu",JLPTLevel:"N4",Meaning:"aiguiser",SecondaryMeaning:"étudier"},{id:208,Kanji:"県",OnReading:["ケン"],KunReading:[],OnPrincipalReading:"ケン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"préfecture",SecondaryMeaning:null},{id:209,Kanji:"思",OnReading:["シ"],KunReading:["おもう"],OnPrincipalReading:"シ",KunPrincipalReading:"おもう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"omou",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:"croire"},{id:210,Kanji:"乗",OnReading:["ジョウ"],KunReading:["のる","のせる"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"のる",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"noru",JLPTLevel:"N4",Meaning:"monter",SecondaryMeaning:"embarquer"},{id:211,Kanji:"重",OnReading:["ジュウ","チョウ"],KunReading:["おもい","かさなる","かさねる"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"おもい",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"omoi",JLPTLevel:"N4",Meaning:"lourd",SecondaryMeaning:"empiler"},{id:212,Kanji:"春",OnReading:["シュン"],KunReading:["はる"],OnPrincipalReading:"シュン",KunPrincipalReading:"はる",OnPrincipalReadingRomaji:"shun",KunPrincipalReadingRomaji:"haru",JLPTLevel:"N4",Meaning:"printemps",SecondaryMeaning:null},{id:213,Kanji:"室",OnReading:["シツ"],KunReading:["むろ"],OnPrincipalReading:"シツ",KunPrincipalReading:"むろ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"muro",JLPTLevel:"N4",Meaning:"pièce",SecondaryMeaning:"chambre"},{id:214,Kanji:"持",OnReading:["ジ"],KunReading:["もつ"],OnPrincipalReading:"ジ",KunPrincipalReading:"もつ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"motsu",JLPTLevel:"N4",Meaning:"tenir",SecondaryMeaning:"posséder"},{id:215,Kanji:"首",OnReading:["シュ"],KunReading:["くび"],OnPrincipalReading:"シュ",KunPrincipalReading:"くび",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"kubi",JLPTLevel:"N4",Meaning:"cou",SecondaryMeaning:"chef"},{id:216,Kanji:"秋",OnReading:["シュウ"],KunReading:["あき"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あき",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"aki",JLPTLevel:"N4",Meaning:"automne",SecondaryMeaning:null},{id:217,Kanji:"借",OnReading:["シャク"],KunReading:["かりる"],OnPrincipalReading:"シャク",KunPrincipalReading:"かりる",OnPrincipalReadingRomaji:"shaku",KunPrincipalReadingRomaji:"kariru",JLPTLevel:"N4",Meaning:"emprunter",SecondaryMeaning:null},{id:218,Kanji:"弱",OnReading:["ジャク"],KunReading:["よわい","よわる"],OnPrincipalReading:"ジャク",KunPrincipalReading:"よわい",OnPrincipalReadingRomaji:"jaku",KunPrincipalReadingRomaji:"yowai",JLPTLevel:"N4",Meaning:"faible",SecondaryMeaning:null},{id:219,Kanji:"紙",OnReading:["シ"],KunReading:["かみ"],OnPrincipalReading:"シ",KunPrincipalReading:"かみ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kami",JLPTLevel:"N4",Meaning:"papier",SecondaryMeaning:null},{id:220,Kanji:"帰",OnReading:["キ"],KunReading:["かえる","かえす"],OnPrincipalReading:"キ",KunPrincipalReading:"かえる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"kaeru",JLPTLevel:"N4",Meaning:"retourner",SecondaryMeaning:"rentrer"},{id:221,Kanji:"起",OnReading:["キ"],KunReading:["おきる","おこす"],OnPrincipalReading:"キ",KunPrincipalReading:"おきる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"okiru",JLPTLevel:"N4",Meaning:"se lever",SecondaryMeaning:"commencer"},{id:222,Kanji:"夏",OnReading:["カ"],KunReading:["なつ"],OnPrincipalReading:"カ",KunPrincipalReading:"なつ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"natsu",JLPTLevel:"N4",Meaning:"été",SecondaryMeaning:null},{id:223,Kanji:"家",OnReading:["カ","ケ"],KunReading:["いえ","や"],OnPrincipalReading:"カ",KunPrincipalReading:"いえ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"ie",JLPTLevel:"N4",Meaning:"maison",SecondaryMeaning:"famille"},{id:224,Kanji:"院",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"institut",SecondaryMeaning:"hôpital"},{id:225,Kanji:"員",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"membre",SecondaryMeaning:"employé"},{id:226,Kanji:"病",OnReading:["ビョウ","ヘイ"],KunReading:["やむ","いたむ"],OnPrincipalReading:"ビョウ",KunPrincipalReading:"やむ",OnPrincipalReadingRomaji:"byou",KunPrincipalReadingRomaji:"yamu",JLPTLevel:"N4",Meaning:"maladie",SecondaryMeaning:"être malade"},{id:227,Kanji:"勉",OnReading:["ベン"],KunReading:["つとめる"],OnPrincipalReading:"ベン",KunPrincipalReading:"つとめる",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tsutomeru",JLPTLevel:"N4",Meaning:"effort",SecondaryMeaning:"étudier"},{id:228,Kanji:"特",OnReading:["トク"],KunReading:[],OnPrincipalReading:"トク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"toku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"spécial",SecondaryMeaning:"particulier"},{id:229,Kanji:"旅",OnReading:["リョ"],KunReading:["たび"],OnPrincipalReading:"リョ",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"ryo",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"voyage",SecondaryMeaning:null},{id:230,Kanji:"料",OnReading:["リョウ"],KunReading:["はかる"],OnPrincipalReading:"リョウ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"ryou",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"coût",SecondaryMeaning:"ingrédient"},{id:231,Kanji:"真",OnReading:["シン"],KunReading:["ま","まこと"],OnPrincipalReading:"シン",KunPrincipalReading:"ま",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"ma",JLPTLevel:"N4",Meaning:"vrai",SecondaryMeaning:"vérité"},{id:232,Kanji:"通",OnReading:["ツウ"],KunReading:["とおる","とおす"],OnPrincipalReading:"ツウ",KunPrincipalReading:"とおる",OnPrincipalReadingRomaji:"tsuu",KunPrincipalReadingRomaji:"tooru",JLPTLevel:"N4",Meaning:"passer",SecondaryMeaning:"communication"},{id:233,Kanji:"鳥",OnReading:["チョウ"],KunReading:["とり"],OnPrincipalReading:"チョウ",KunPrincipalReading:"とり",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"tori",JLPTLevel:"N4",Meaning:"oiseau",SecondaryMeaning:null},{id:234,Kanji:"転",OnReading:["テン"],KunReading:["ころぶ","ころがる"],OnPrincipalReading:"テン",KunPrincipalReading:"ころぶ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"korobu",JLPTLevel:"N4",Meaning:"rouler",SecondaryMeaning:"changer"},{id:235,Kanji:"族",OnReading:["ゾク"],KunReading:["ぞく"],OnPrincipalReading:"ゾク",KunPrincipalReading:"ぞく",OnPrincipalReadingRomaji:"zoku",KunPrincipalReadingRomaji:"zoku",JLPTLevel:"N4",Meaning:"famille",SecondaryMeaning:"tribu"},{id:236,Kanji:"進",OnReading:["シン"],KunReading:["すすむ","すすめる"],OnPrincipalReading:"シン",KunPrincipalReading:"すすむ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"susumu",JLPTLevel:"N4",Meaning:"avancer",SecondaryMeaning:"progresser"},{id:237,Kanji:"理",OnReading:["リ"],KunReading:["ことわり"],OnPrincipalReading:"リ",KunPrincipalReading:"ことわり",OnPrincipalReadingRomaji:"ri",KunPrincipalReadingRomaji:"kotowari",JLPTLevel:"N4",Meaning:"logique",SecondaryMeaning:"raison"},{id:238,Kanji:"野",OnReading:["ヤ","ショ"],KunReading:["の"],OnPrincipalReading:"ヤ",KunPrincipalReading:"の",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"no",JLPTLevel:"N4",Meaning:"champ",SecondaryMeaning:"nature"},{id:239,Kanji:"問",OnReading:["モン"],KunReading:["とい","といあわせる"],OnPrincipalReading:"モン",KunPrincipalReading:"とい",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"toi",JLPTLevel:"N4",Meaning:"question",SecondaryMeaning:"demander"},{id:240,Kanji:"都",OnReading:["ト","ツ"],KunReading:["みやこ"],OnPrincipalReading:"ト",KunPrincipalReading:"みやこ",OnPrincipalReadingRomaji:"to",KunPrincipalReadingRomaji:"miyako",JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"métropole"},{id:241,Kanji:"堂",OnReading:["ドウ"],KunReading:["どう"],OnPrincipalReading:"ドウ",KunPrincipalReading:"どう",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"dou",JLPTLevel:"N4",Meaning:"hall",SecondaryMeaning:"temple"},{id:242,Kanji:"動",OnReading:["ドウ"],KunReading:["うごく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"うごく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"ugoku",JLPTLevel:"N4",Meaning:"mouvement",SecondaryMeaning:"agir"},{id:243,Kanji:"悪",OnReading:["アク","オ"],KunReading:["わるい"],OnPrincipalReading:"アク",KunPrincipalReading:"わるい",OnPrincipalReadingRomaji:"aku",KunPrincipalReadingRomaji:"warui",JLPTLevel:"N4",Meaning:"mauvais",SecondaryMeaning:"mal"},{id:244,Kanji:"強",OnReading:["キョウ","ゴウ"],KunReading:["つよい","しなう"],OnPrincipalReading:"キョウ",KunPrincipalReading:"つよい",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"tsuyoi",JLPTLevel:"N4",Meaning:"fort",SecondaryMeaning:"intense"},{id:245,Kanji:"教",OnReading:["キョウ","オシ"],KunReading:["おしえる","おそわる"],OnPrincipalReading:"キョウ",KunPrincipalReading:"おしえる",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"oshieru",JLPTLevel:"N4",Meaning:"enseigner",SecondaryMeaning:"religion"},{id:246,Kanji:"産",OnReading:["サン"],KunReading:["うむ","うまれる"],OnPrincipalReading:"サン",KunPrincipalReading:"うむ",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"umu",JLPTLevel:"N4",Meaning:"production",SecondaryMeaning:"naissance"},{id:247,Kanji:"黒",OnReading:["コク"],KunReading:["くろ","くろい"],OnPrincipalReading:"コク",KunPrincipalReading:"くろ",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuro",JLPTLevel:"N4",Meaning:"noir",SecondaryMeaning:null},{id:248,Kanji:"菜",OnReading:["サイ"],KunReading:["な"],OnPrincipalReading:"サイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"sai",KunPrincipalReadingRomaji:"na",JLPTLevel:"N4",Meaning:"légume",SecondaryMeaning:"verdure"},{id:249,Kanji:"終",OnReading:["シュウ"],KunReading:["おわる","おえる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"おわる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"owaru",JLPTLevel:"N4",Meaning:"fin",SecondaryMeaning:"terminer"},{id:250,Kanji:"習",OnReading:["シュウ"],KunReading:["ならう"],OnPrincipalReading:"シュウ",KunPrincipalReading:"ならう",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"narau",JLPTLevel:"N4",Meaning:"apprendre",SecondaryMeaning:"pratiquer"},{id:251,Kanji:"集",OnReading:["シュウ"],KunReading:["あつまる","あつめる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あつまる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"atsumaru",JLPTLevel:"N4",Meaning:"rassembler",SecondaryMeaning:"collection"},{id:252,Kanji:"場",OnReading:["ジョウ"],KunReading:["ば"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"ば",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ba",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"emplacement"},{id:253,Kanji:"寒",OnReading:["カン"],KunReading:["さむい"],OnPrincipalReading:"カン",KunPrincipalReading:"さむい",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"samui",JLPTLevel:"N4",Meaning:"froid",SecondaryMeaning:null},{id:254,Kanji:"軽",OnReading:["ケイ"],KunReading:["かるい","けい"],OnPrincipalReading:"ケイ",KunPrincipalReading:"かるい",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"karui",JLPTLevel:"N4",Meaning:"léger",SecondaryMeaning:"facile"},{id:255,Kanji:"運",OnReading:["ウン"],KunReading:["はこぶ"],OnPrincipalReading:"ウン",KunPrincipalReading:"はこぶ",OnPrincipalReadingRomaji:"un",KunPrincipalReadingRomaji:"hakobu",JLPTLevel:"N4",Meaning:"chance",SecondaryMeaning:"transport"},{id:256,Kanji:"開",OnReading:["カイ"],KunReading:["ひらく","あける"],OnPrincipalReading:"カイ",KunPrincipalReading:"ひらく",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"hiraku",JLPTLevel:"N4",Meaning:"ouvrir",SecondaryMeaning:"développer"},{id:257,Kanji:"飯",OnReading:["ハン"],KunReading:["めし"],OnPrincipalReading:"ハン",KunPrincipalReading:"めし",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"meshi",JLPTLevel:"N4",Meaning:"riz cuit",SecondaryMeaning:"repas"},{id:258,Kanji:"答",OnReading:["トウ"],KunReading:["こたえる","こたえ"],OnPrincipalReading:"トウ",KunPrincipalReading:"こたえる",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"kotaeru",JLPTLevel:"N4",Meaning:"réponse",SecondaryMeaning:"répondre"},{id:259,Kanji:"森",OnReading:["シン"],KunReading:["もり"],OnPrincipalReading:"シン",KunPrincipalReading:"もり",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"mori",JLPTLevel:"N4",Meaning:"forêt",SecondaryMeaning:null},{id:260,Kanji:"朝",OnReading:["チョウ"],KunReading:["あさ"],OnPrincipalReading:"チョウ",KunPrincipalReading:"あさ",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"asa",JLPTLevel:"N4",Meaning:"matin",SecondaryMeaning:"petit-déjeuner"},{id:261,Kanji:"貸",OnReading:["タイ"],KunReading:["かす"],OnPrincipalReading:"タイ",KunPrincipalReading:"かす",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"kasu",JLPTLevel:"N4",Meaning:"prêter",SecondaryMeaning:null},{id:262,Kanji:"着",OnReading:["チャク","ジャク"],KunReading:["きる","つく"],OnPrincipalReading:"チャク",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"chaku",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"arriver",SecondaryMeaning:"mettre (vêtement)"},{id:263,Kanji:"短",OnReading:["タン"],KunReading:["みじかい"],OnPrincipalReading:"タン",KunPrincipalReading:"みじかい",OnPrincipalReadingRomaji:"tan",KunPrincipalReadingRomaji:"mijikai",JLPTLevel:"N4",Meaning:"court",SecondaryMeaning:"durée courte"},{id:264,Kanji:"働",OnReading:["ドウ"],KunReading:["はたらく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"はたらく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"hataraku",JLPTLevel:"N4",Meaning:"travailler",SecondaryMeaning:null},{id:265,Kanji:"楽",OnReading:["ガク","ラク"],KunReading:["たのしい","らく"],OnPrincipalReading:"ガク",KunPrincipalReading:"たのしい",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"tanoshii",JLPTLevel:"N4",Meaning:"amusant",SecondaryMeaning:"musique"},{id:266,Kanji:"暗",OnReading:["アン"],KunReading:["くらい"],OnPrincipalReading:"アン",KunPrincipalReading:"くらい",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"kurai",JLPTLevel:"N4",Meaning:"sombre",SecondaryMeaning:"obscurité"},{id:267,Kanji:"意",OnReading:["イ"],KunReading:["い"],OnPrincipalReading:"イ",KunPrincipalReading:"い",OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:"i",JLPTLevel:"N4",Meaning:"intention",SecondaryMeaning:"pensée"},{id:268,Kanji:"遠",OnReading:["エン"],KunReading:["とおい"],OnPrincipalReading:"エン",KunPrincipalReading:"とおい",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"tooi",JLPTLevel:"N4",Meaning:"loin",SecondaryMeaning:"éloigné"},{id:269,Kanji:"漢",OnReading:["カン"],KunReading:["おとこ"],OnPrincipalReading:"カン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N4",Meaning:"chinois",SecondaryMeaning:"Hanzi"},{id:270,Kanji:"業",OnReading:["ギョウ","ゴウ"],KunReading:["わざ"],OnPrincipalReading:"ギョウ",KunPrincipalReading:"わざ",OnPrincipalReadingRomaji:"gyou",KunPrincipalReadingRomaji:"waza",JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:271,Kanji:"試",OnReading:["シ"],KunReading:["こころみる","ためす"],OnPrincipalReading:"シ",KunPrincipalReading:"こころみる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kokoromiru",JLPTLevel:"N4",Meaning:"essayer",SecondaryMeaning:"test"},{id:272,Kanji:"銀",OnReading:["ギン"],KunReading:["しろがね"],OnPrincipalReading:"ギン",KunPrincipalReading:"しろがね",OnPrincipalReadingRomaji:"gin",KunPrincipalReadingRomaji:"shirogane",JLPTLevel:"N4",Meaning:"argent",SecondaryMeaning:null},{id:273,Kanji:"歌",OnReading:["カ"],KunReading:["うた"],OnPrincipalReading:"カ",KunPrincipalReading:"うた",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"uta",JLPTLevel:"N4",Meaning:"chanson",SecondaryMeaning:"chanter"},{id:274,Kanji:"説",OnReading:["セツ","ゼイ"],KunReading:["とく"],OnPrincipalReading:"セツ",KunPrincipalReading:"とく",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"toku",JLPTLevel:"N4",Meaning:"explication",SecondaryMeaning:"théorie"},{id:275,Kanji:"質",OnReading:["シツ","シチ"],KunReading:["しつ"],OnPrincipalReading:"シツ",KunPrincipalReading:"しつ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"shitsu",JLPTLevel:"N4",Meaning:"qualité",SecondaryMeaning:"matière"},{id:276,Kanji:"館",OnReading:["カン"],KunReading:["やかた"],OnPrincipalReading:"カン",KunPrincipalReading:"やかた",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"yakata",JLPTLevel:"N4",Meaning:"bâtiment",SecondaryMeaning:"musée"},{id:277,Kanji:"親",OnReading:["シン"],KunReading:["おや","したしい"],OnPrincipalReading:"シン",KunPrincipalReading:"おや",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"oya",JLPTLevel:"N4",Meaning:"parent",SecondaryMeaning:"intime"},{id:278,Kanji:"頭",OnReading:["トウ"],KunReading:["あたま"],OnPrincipalReading:"トウ",KunPrincipalReading:"あたま",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"atama",JLPTLevel:"N4",Meaning:"tête",SecondaryMeaning:"cerveau"},{id:279,Kanji:"薬",OnReading:["ヤク","クスリ"],KunReading:["くすり"],OnPrincipalReading:"ヤク",KunPrincipalReading:"くすり",OnPrincipalReadingRomaji:"yaku",KunPrincipalReadingRomaji:"kusuri",JLPTLevel:"N4",Meaning:"médicament",SecondaryMeaning:"drogue"},{id:280,Kanji:"曜",OnReading:["ヨウ"],KunReading:[""],OnPrincipalReading:"ヨウ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"jour de la semaine",SecondaryMeaning:null},{id:281,Kanji:"題",OnReading:["ダイ"],KunReading:[""],OnPrincipalReading:"ダイ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"sujet",SecondaryMeaning:"titre"},{id:282,Kanji:"顔",OnReading:["ガン"],KunReading:["かお"],OnPrincipalReading:"ガン",KunPrincipalReading:"かお",OnPrincipalReadingRomaji:"gan",KunPrincipalReadingRomaji:"kao",JLPTLevel:"N4",Meaning:"visage",SecondaryMeaning:"expression"},{id:283,Kanji:"験",OnReading:["ケン","ゲン"],KunReading:["ためす","けん"],OnPrincipalReading:"ケン",KunPrincipalReading:"ためす",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tamesu",JLPTLevel:"N4",Meaning:"expérience",SecondaryMeaning:"test"},{id:284,Kanji:"暑",OnReading:["ショ"],KunReading:["あつい"],OnPrincipalReading:"ショ",KunPrincipalReading:"あつい",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"atsui",JLPTLevel:"N4",Meaning:"chaleur",SecondaryMeaning:null}],Bo={kanji:Sw},Nw=[{id:1,JLPTLevel:"N1",kanji:"亜",hiragana:"あ",Romaji:"a",francais:"sub-, sous-",categorie:["nom"]},{id:2,JLPTLevel:"N5",kanji:"嗚呼",hiragana:"ああ",Romaji:"aa",francais:"ah !, oh !, hey!",categorie:["expressions idiomatiques"]},{id:3,JLPTLevel:"N3",kanji:"愛",hiragana:"あい",Romaji:"ai",francais:"amour",categorie:["émotions et sentiments"]},{id:4,JLPTLevel:"N2",kanji:"相変わらず",hiragana:"あいかわらず",Romaji:"aikawarazu",francais:"comme d'habitude, comme toujours",categorie:["expressions idiomatiques"]},{id:5,JLPTLevel:"N4",kanji:"挨拶",hiragana:"あいさつ",Romaji:"aisatsu",francais:"salutation",categorie:["formules de politesse"]},{id:6,JLPTLevel:"N5",kanji:"挨拶する",hiragana:"あいさつする",Romaji:"aisatsu suru",francais:"saluer",categorie:["verbes","verbes d’action"]},{id:7,JLPTLevel:"N3",kanji:"愛情",hiragana:"あいじょう",Romaji:"aijou",francais:"amour, affection",categorie:["émotions et sentiments"]},{id:8,JLPTLevel:"N3",kanji:"吅図",hiragana:"あいず",Romaji:"aizu",francais:"signal, signe",categorie:["nom"]},{id:9,JLPTLevel:"N3",kanji:"",hiragana:"アイスクリーム",Romaji:"aisukurīmu",francais:"crème glacée",categorie:["la nourriture"]},{id:10,JLPTLevel:"N3",kanji:"愛する",hiragana:"あいする",Romaji:"aisuru",francais:"aimer, être amoureux",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:11,JLPTLevel:"N1",kanji:"愛想",hiragana:"あいそう",Romaji:"aisou",francais:"amabilité",categorie:["émotions et sentiments"]},{id:12,JLPTLevel:"N4",kanji:"間",hiragana:"あいだ",Romaji:"aida",francais:"entre, parmi, pendant que",categorie:["mots de liaison et particules"]},{id:13,JLPTLevel:"N1",kanji:"間柄",hiragana:"あいだがら",Romaji:"aidagara",francais:"lien, relation avec quelqu'un",categorie:["nom"]},{id:14,JLPTLevel:"N3",kanji:"相手",hiragana:"あいて",Romaji:"aite",francais:"adversaire, opposant, compagnon",categorie:["nom"]},{id:15,JLPTLevel:"N2",kanji:"",hiragana:"アイデア・アイディア",Romaji:"aidea",francais:"idée",categorie:["nom"]},{id:16,JLPTLevel:"N3",kanji:"生憎",hiragana:"あいにく",Romaji:"ainiku",francais:"malheureusement",categorie:["expressions idiomatiques"]},{id:17,JLPTLevel:"N1",kanji:"吅間",hiragana:"あいま",Romaji:"aima",francais:"intervalle",categorie:["nom"]},{id:18,JLPTLevel:"N2",kanji:"曖昧",hiragana:"あいまい",Romaji:"aimai",francais:"ambigu, peu précis, vague",categorie:["adjectifs"]},{id:19,JLPTLevel:"N3",kanji:"",hiragana:"アイロン",Romaji:"airon",francais:"fer à repasser",categorie:["le matériel domestique"]},{id:20,JLPTLevel:"N5",kanji:"会う・遭う",hiragana:"あう",Romaji:"au",francais:"rencontrer, voir (une personne)",categorie:["verbes","verbes d’action"]},{id:21,JLPTLevel:"N4",kanji:"吅う",hiragana:"あう",Romaji:"au",francais:"convenir",categorie:["verbes","verbes d’action"]},{id:22,JLPTLevel:"N3",kanji:"",hiragana:"アウト",Romaji:"auto",francais:"dehors, à l'extérieur",categorie:["lieux et directions"]},{id:23,JLPTLevel:"N1",kanji:"敢えて",hiragana:"あえて",Romaji:"aete",francais:"défi",categorie:["nom"]},{id:24,JLPTLevel:"N5",kanji:"青",hiragana:"あお",Romaji:"ao",francais:"bleu (le), vert (le)",categorie:["les couleurs"]},{id:25,JLPTLevel:"N5",kanji:"青い・蒼い",hiragana:"あおい",Romaji:"aoi",francais:"bleu, vert, inexpérimenté",categorie:["les couleurs","adjectifs"]},{id:26,JLPTLevel:"N2",kanji:"扇ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"éventer, battre",categorie:["verbes","verbes d’action"]},{id:27,JLPTLevel:"N1",kanji:"仰ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"admirer quelqu'un, respecter, demander, boire",categorie:["verbes","verbes d’action"]},{id:28,JLPTLevel:"N2",kanji:"青白い",hiragana:"あおじろい",Romaji:"aojiroi",francais:"blême, pâle",categorie:["adjectifs"]},{id:29,JLPTLevel:"N5",kanji:"赤",hiragana:"あか",Romaji:"aka",francais:"rouge (le)",categorie:["les couleurs"]},{id:30,JLPTLevel:"N1",kanji:"垢",hiragana:"あか",Romaji:"aka",francais:"crasse, saleté",categorie:["nom"]},{id:31,JLPTLevel:"N5",kanji:"赤い",hiragana:"あかい",Romaji:"akai",francais:"rouge",categorie:["les couleurs","adjectifs"]},{id:32,JLPTLevel:"N1",kanji:"赤字",hiragana:"あかじ",Romaji:"akaji",francais:"déficit, perte (monétaire)",categorie:["nom"]},{id:33,JLPTLevel:"N1",kanji:"明かす",hiragana:"あかす",Romaji:"akasu",francais:"passer la nuit, révéler un secret",categorie:["verbes","verbes d’action"]},{id:34,JLPTLevel:"N4",kanji:"赤ちゃん",hiragana:"あかちゃん",Romaji:"akachan",francais:"bébé",categorie:["les membres de la famille"]},{id:35,JLPTLevel:"N1",kanji:"赤らむ",hiragana:"あからむ",Romaji:"akaramu",francais:"rougir (visage)",categorie:["verbes","verbes d’action"]},{id:36,JLPTLevel:"N3",kanji:"明かり",hiragana:"あかり",Romaji:"akari",francais:"clarté, lumières",categorie:["nom"]},{id:37,JLPTLevel:"N1",kanji:"上がり",hiragana:"あがり",Romaji:"agari",francais:"ascension, montée",categorie:["nom"]},{id:38,JLPTLevel:"N4",kanji:"上がる",hiragana:"あがる",Romaji:"agaru",francais:" s'élever, grimper, augmenter",categorie:["verbes","verbes d’action"]},{id:39,JLPTLevel:"N5",kanji:"明るい",hiragana:"あかるい",Romaji:"akarui",francais:"clair",categorie:["adjectifs"]},{id:40,JLPTLevel:"N4",kanji:"赤ん坊",hiragana:"あかんぼう",Romaji:"akanbou",francais:"bébé",categorie:["les membres de la famille"]},{id:41,JLPTLevel:"N5",kanji:"秋",hiragana:"あき",Romaji:"aki",francais:"automne",categorie:["temps et saisons"]},{id:42,JLPTLevel:"N3",kanji:"明き・空き",hiragana:"あき",Romaji:"aki",francais:"vide, place, espace",categorie:["nom"]},{id:43,JLPTLevel:"N3",kanji:"明らか",hiragana:"あきらか",Romaji:"akiraka",francais:"évident, clair",categorie:["adjectifs"]},{id:44,JLPTLevel:"N1",kanji:"諦め",hiragana:"あきらめ",Romaji:"akirame",francais:"résignation, acceptance",categorie:["émotions et sentiments"]},{id:45,JLPTLevel:"N3",kanji:"諦める",hiragana:"あきらめる",Romaji:"akirameru",francais:" abandonner, renoncer, laisser tomber",categorie:["verbes","verbes d’action"]},{id:46,JLPTLevel:"N3",kanji:"飽きる",hiragana:"あきる",Romaji:"akiru",francais:" s'ennuyer, se lasser",categorie:["verbes","verbes d’action"]},{id:47,JLPTLevel:"N2",kanji:"呆れる",hiragana:"あきれる",Romaji:"akireru",francais:" être stupéfait, ébahi",categorie:["verbes","verbes d’action"]},{id:48,JLPTLevel:"N5",kanji:"開く",hiragana:"あく",Romaji:"aku",francais:" s'ouvrir",categorie:["verbes","verbes d’action"]},{id:49,JLPTLevel:"N4",kanji:"空く",hiragana:"あく",Romaji:"aku",francais:" se vider, être vide, être disponible",categorie:["verbes","verbes d’action"]},{id:50,JLPTLevel:"N1",kanji:"悪",hiragana:"あく",Romaji:"aku",francais:"mal (le)",categorie:["nom"]},{id:51,JLPTLevel:"N3",kanji:"握手",hiragana:"あくしゅ",Romaji:"akushu",francais:"poignée de mains",categorie:["formules de politesse"]},{id:52,JLPTLevel:"N4",kanji:"アクセサリー",hiragana:"アクセサリー",Romaji:"akusesarī",francais:"accessoire",categorie:["les vêtements"]},{id:53,JLPTLevel:"N1",kanji:"アクセル",hiragana:"アクセル",Romaji:"akuseru",francais:"accélérateur",categorie:["les moyens de transport"]},{id:54,JLPTLevel:"N2",kanji:"",hiragana:"アクセント",Romaji:"akusento",francais:"accent",categorie:["nom"]},{id:55,JLPTLevel:"N1",kanji:"悪どい",hiragana:"あくどい",Romaji:"akudoi",francais:"tape-à-l'œil, voyant, vicieux",categorie:["adjectifs"]},{id:56,JLPTLevel:"N2",kanji:"欠伸",hiragana:"あくび",Romaji:"akubi",francais:"bâillement",categorie:["santé et bien-être"]},{id:57,JLPTLevel:"N3",kanji:"悪魔",hiragana:"あくま",Romaji:"akuma",francais:"démon, diable, mauvais esprit",categorie:["nom"]},{id:58,JLPTLevel:"N2",kanji:"飽くまで",hiragana:"あくまで",Romaji:"akumade",francais:"jusqu'au bout, obstinément",categorie:["expressions idiomatiques"]},{id:59,JLPTLevel:"N2",kanji:"明くる",hiragana:"あくる",Romaji:"akuru",francais:"prochain, suivant",categorie:["expressions temporelles"]},{id:60,JLPTLevel:"N2",kanji:"明け方",hiragana:"あけがた",Romaji:"akegata",francais:"aube",categorie:["expressions temporelles"]},{id:61,JLPTLevel:"N5",kanji:"開ける・明ける",hiragana:"あける",Romaji:"akeru",francais:"ouvrir",categorie:["verbes","verbes d’action"]},{id:62,JLPTLevel:"N3",kanji:"明ける",hiragana:"あける",Romaji:"akeru",francais:"se lever (le soleil), s'éclaircir",categorie:["verbes","verbes d’action"]},{id:63,JLPTLevel:"N5",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"donner",categorie:["verbes","verbes d’action"]},{id:64,JLPTLevel:"N4",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"augmenter",categorie:["verbes","verbes d’action"]},{id:65,JLPTLevel:"N1",kanji:"顎",hiragana:"あご",Romaji:"ago",francais:"menton",categorie:["le corps humain"]},{id:66,JLPTLevel:"N1",kanji:"憧れ",hiragana:"あこがれ",Romaji:"akogare",francais:"aspiration, désirs",categorie:["émotions et sentiments"]},{id:67,JLPTLevel:"N2",kanji:"憧れる",hiragana:"あこがれる",Romaji:"akogareru",francais:"aspirer à, languir de quelque chose",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:68,JLPTLevel:"N5",kanji:"朝",hiragana:"あさ",Romaji:"asa",francais:"matin",categorie:["expressions temporelles"]},{id:69,JLPTLevel:"N1",kanji:"麻",hiragana:"あさ",Romaji:"asa",francais:"chanvre, lin",categorie:["nom"]},{id:70,JLPTLevel:"N1",kanji:"字",hiragana:"あざ",Romaji:"aza",francais:"hameau, partie d'un village",categorie:["lieux et directions"]},{id:71,JLPTLevel:"N4",kanji:"浅い",hiragana:"あさい",Romaji:"asai",francais:"peu profond",categorie:["adjectifs"]},{id:72,JLPTLevel:"N5",kanji:"朝ご飯",hiragana:"あさごはん",Romaji:"asagohan",francais:"petit-déjeuner",categorie:["la nourriture"]},{id:73,JLPTLevel:"N5",kanji:"明後日",hiragana:"あさって",Romaji:"asatte",francais:"après-demain",categorie:["expressions temporelles"]},{id:74,JLPTLevel:"N4",kanji:"朝寝坊",hiragana:"あさねぼう",Romaji:"asanebou",francais:"lève-tard",categorie:["expressions idiomatiques"]},{id:75,JLPTLevel:"N1",kanji:"浅ましい",hiragana:"あさましい",Romaji:"asamashii",francais:"misérable, infortuné, méprisable",categorie:["adjectifs"]},{id:76,JLPTLevel:"N1",kanji:"欺く",hiragana:"あざむく",Romaji:"azamuku",francais:"tromper, duper",categorie:["verbes","verbes d’action"]},{id:77,JLPTLevel:"N1",kanji:"鮮やか",hiragana:"あざやか",Romaji:"azayaka",francais:"brillant, vif, éclatant",categorie:["adjectifs","les couleurs"]},{id:78,JLPTLevel:"N1",kanji:"あざ笑う",hiragana:"あざわらう",Romaji:"azawarau",francais:"sourire avec mépris",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:79,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"jambe",categorie:["le corps humain"]},{id:80,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"pied",categorie:["le corps humain"]},{id:81,JLPTLevel:"N4",kanji:"味",hiragana:"あじ",Romaji:"aji",francais:"goût",categorie:["la nourriture"]},{id:82,JLPTLevel:"N4",kanji:"アジア",hiragana:"アジア",Romaji:"ajia",francais:"Asie, asiatique",categorie:["les pays"]},{id:83,JLPTLevel:"N2",kanji:"足跡",hiragana:"あしあと",Romaji:"ashiato",francais:"empreinte de pied",categorie:["nom"]},{id:84,JLPTLevel:"N1",kanji:"悪しからず",hiragana:"あしからず",Romaji:"ashikarazu",francais:"désolé mais…, ne m'en veuillez pas mais…",categorie:["formules de politesse"]},{id:85,JLPTLevel:"N5",kanji:"明日",hiragana:"あした",Romaji:"ashita",francais:"demain",categorie:["expressions temporelles"]},{id:86,JLPTLevel:"N2",kanji:"足元・足下",hiragana:"あしもと",Romaji:"ashimoto",francais:"sous les pieds, allure, démarche",categorie:["nom"]},{id:87,JLPTLevel:"N1",kanji:"味わい",hiragana:"あじわい",Romaji:"ajiwai",francais:"saveur, goût",categorie:["la nourriture"]},{id:88,JLPTLevel:"N2",kanji:"味わう",hiragana:"あじわう",Romaji:"ajiau",francais:"goûter",categorie:["verbes","verbes d’action","la nourriture"]},{id:89,JLPTLevel:"N4",kanji:"明日",hiragana:"あす",Romaji:"asu",francais:"demain",categorie:["expressions temporelles"]},{id:90,JLPTLevel:"N2",kanji:"預かる",hiragana:"あずかる",Romaji:"azukaru",francais:"s'occuper de, prendre en charge",categorie:["verbes","verbes d’action"]},{id:91,JLPTLevel:"N3",kanji:"預ける",hiragana:"あずける",Romaji:"azukeru",francais:"confier à la garde de, laisser quelqu'un à la charge de",categorie:["verbes","verbes d’action"]},{id:92,JLPTLevel:"N3",kanji:"汗",hiragana:"あせ",Romaji:"ase",francais:"sueur",categorie:["santé et bien-être"]},{id:93,JLPTLevel:"N1",kanji:"焦る",hiragana:"あせる",Romaji:"aseru",francais:"être pressé, impatient",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:94,JLPTLevel:"N1",kanji:"褪せる",hiragana:"あせる",Romaji:"aseru",francais:"pâlir, se décolorer, se faner",categorie:["verbes","verbes d’action"]},{id:95,JLPTLevel:"N2",kanji:"汗を掻く",hiragana:"あせをかく",Romaji:"ase o kaku",francais:"transpirer, suer",categorie:["verbes","verbes d’action","santé et bien-être"]},{id:96,JLPTLevel:"N5",kanji:"彼処",hiragana:"あそこ",Romaji:"asoko",francais:"là-bas (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:97,JLPTLevel:"N5",kanji:"遊び",hiragana:"あそび",Romaji:"asobi",francais:"jeu",categorie:["activités et loisirs"]},{id:98,JLPTLevel:"N5",kanji:"遊ぶ",hiragana:"あそぶ",Romaji:"asobu",francais:"jouer",categorie:["verbes","verbes d’action","activités et loisirs"]},{id:99,JLPTLevel:"N2",kanji:"値",hiragana:"あたい",Romaji:"atai",francais:"coût, prix, valeur",categorie:["nom"]},{id:100,JLPTLevel:"N1",kanji:"値する",hiragana:"あたいする",Romaji:"ataisuru",francais:"mériter, être digne de",categorie:["verbes","verbes d’action"]},{id:101,JLPTLevel:"N3",kanji:"与える",hiragana:"あたえる",Romaji:"ataeru",francais:"décerner, offrir, donner",categorie:["verbes","verbes d’action"]},{id:102,JLPTLevel:"N5",kanji:"温かい・暖かい",hiragana:"あたたかい",Romaji:"atatakai",francais:"tiède, chaud",categorie:["adjectifs"]},{id:103,JLPTLevel:"N2",kanji:"温まる・暖まる",hiragana:"あたたまる",Romaji:"atatamaru",francais:"se réchauffer",categorie:["verbes","verbes d’action"]},{id:104,JLPTLevel:"N2",kanji:"温める・暖める",hiragana:"あたためる",Romaji:"atatameru",francais:"réchauffer",categorie:["verbes","verbes d’action"]},{id:105,JLPTLevel:"N5",kanji:"頭",hiragana:"あたま",Romaji:"atama",francais:"tête",categorie:["le corps humain"]},{id:106,JLPTLevel:"N5",kanji:"新しい",hiragana:"あたらしい",Romaji:"atarashii",francais:"nouveau",categorie:["adjectifs"]},{id:107,JLPTLevel:"N3",kanji:"辺り",hiragana:"あたり",Romaji:"atari",francais:"aux environs",categorie:["lieux et directions"]},{id:108,JLPTLevel:"N1",kanji:"当たり",hiragana:"あたり",Romaji:"atari",francais:"coup, réussite, succès, par… (+unité)",categorie:["nom"]},{id:109,JLPTLevel:"N2",kanji:"当たり前",hiragana:"あたりまえ",Romaji:"atarimae",francais:"évident, banal, normal",categorie:["adjectifs"]},{id:110,JLPTLevel:"N3",kanji:"当たる",hiragana:"あたる",Romaji:"ataru",francais:"entreprendre, avoir du succès, être assigné, être équivalent à",categorie:["verbes","verbes d’action"]},{id:111,JLPTLevel:"N3",kanji:"彼方・此方",hiragana:"あちこち・あちらこちら",Romaji:"achikochi・achirakochira",francais:"ici et là",categorie:["lieux et directions"]},{id:112,JLPTLevel:"N5",kanji:"彼方",hiragana:"あちら",Romaji:"achira",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:113,JLPTLevel:"N5",kanji:"暑い",hiragana:"あつい",Romaji:"atsui",francais:"chaud (temps météo.)",categorie:["adjectifs","temps et saisons"]},{id:114,JLPTLevel:"N5",kanji:"厚い",hiragana:"あつい",Romaji:"atsui",francais:"épais, lourd",categorie:["adjectifs"]},{id:115,JLPTLevel:"N1",kanji:"悪化",hiragana:"あっか",Romaji:"akka",francais:"aggravation, détérioration",categorie:["nom"]},{id:116,JLPTLevel:"N1",kanji:"扱い",hiragana:"あつかい",Romaji:"atsukai",francais:"traitement, service",categorie:["nom"]},{id:117,JLPTLevel:"N3",kanji:"扱う",hiragana:"あつかう",Romaji:"atsukau",francais:"s'occuper de, gérer, traiter",categorie:["verbes","verbes d’action"]},{id:118,JLPTLevel:"N2",kanji:"厚かましい",hiragana:"あつかましい",Romaji:"atsukamashii",francais:"effronté, insolent",categorie:["adjectifs"]},{id:119,JLPTLevel:"N1",kanji:"呆気ない",hiragana:"あっけない",Romaji:"akkenai",francais:"trop rapide, abrupt, pas assez de",categorie:["adjectifs"]},{id:120,JLPTLevel:"N1",kanji:"",hiragana:"あっさり",Romaji:"assari",francais:"facilement, simplement, rapidement",categorie:["adjectifs"]},{id:121,JLPTLevel:"N2",kanji:"圧縮",hiragana:"あっしゅく",Romaji:"asshuku",francais:"compression",categorie:["nom"]},{id:122,JLPTLevel:"N5",kanji:"彼方",hiragana:"あっち",Romaji:"acchi",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:123,JLPTLevel:"N1",kanji:"圧迫",hiragana:"あっぱく",Romaji:"appaku",francais:"pression, oppression",categorie:["nom"]},{id:124,JLPTLevel:"N1",kanji:"",hiragana:"アップ",Romaji:"appu",francais:"vers le haut",categorie:["nom"]},{id:125,JLPTLevel:"N3",kanji:"集まり",hiragana:"あつまり",Romaji:"atsumari",francais:"réunion, rassemblement",categorie:["nom"]},{id:126,JLPTLevel:"N4",kanji:"集まる",hiragana:"あつまる",Romaji:"atsumaru",francais:"se réunir",categorie:["verbes","verbes d’action"]},{id:127,JLPTLevel:"N4",kanji:"集める",hiragana:"あつめる",Romaji:"atsumeru",francais:"réunir, rassembler",categorie:["verbes","verbes d’action"]},{id:128,JLPTLevel:"N1",kanji:"誂える",hiragana:"あつらえる",Romaji:"atsuraeru",francais:"commander, donner un ordre",categorie:["verbes","verbes d’action"]},{id:129,JLPTLevel:"N1",kanji:"圧力",hiragana:"あつりょく",Romaji:"atsuryoku",francais:"pression, stress",categorie:["nom"]},{id:130,JLPTLevel:"N1",kanji:"当て",hiragana:"あて",Romaji:"ate",francais:"espoir, attente, but, objectif",categorie:["nom"]},{id:131,JLPTLevel:"N1",kanji:"宛",hiragana:"あて",Romaji:"ate",francais:"but, destination, objectif",categorie:["nom"]},{id:132,JLPTLevel:"N1",kanji:"当て字",hiragana:"あてじ",Romaji:"ateji",francais:"kanji utilisé comme équivalent phonétique",categorie:["nom"]},{id:133,JLPTLevel:"N2",kanji:"宛名",hiragana:"あてな",Romaji:"atena",francais:"adresse et nom du destinataire",categorie:["nom"]},{id:134,JLPTLevel:"N2",kanji:"当てはまる",hiragana:"あてはまる",Romaji:"atehamaru",francais:"appliquer (une règle)",categorie:["verbes","verbes d’action"]},{id:135,JLPTLevel:"N2",kanji:"編物",hiragana:"あみもの",Romaji:"amimono",francais:"tricot",categorie:["activités et loisirs"]},{id:136,JLPTLevel:"N2",kanji:"編む",hiragana:"あむ",Romaji:"amu",francais:"assembler, coudre",categorie:["verbes","verbes d’action"]},{id:137,JLPTLevel:"N5",kanji:"雤",hiragana:"あめ",Romaji:"ame",francais:"pluie",categorie:["nature et environnement"]},{id:138,JLPTLevel:"N5",kanji:"飴",hiragana:"あめ",Romaji:"ame",francais:"bonbon, sucrerie",categorie:["la nourriture"]},{id:139,JLPTLevel:"N4",kanji:"",hiragana:"アメリカ",Romaji:"amerika",francais:"Amérique",categorie:["les pays"]},{id:140,JLPTLevel:"N2",kanji:"危うい",hiragana:"あやうい",Romaji:"ayaui",francais:"dangereux, risqué",categorie:["adjectifs"]},{id:141,JLPTLevel:"N2",kanji:"怪しい",hiragana:"あやしい",Romaji:"ayashii",francais:"incertain, suspicieux, douteux, suspect",categorie:["adjectifs"]},{id:142,JLPTLevel:"N1",kanji:"操る",hiragana:"あやつる",Romaji:"ayatsuru",francais:"manipuler, opérer",categorie:["verbes","verbes d’action"]},{id:143,JLPTLevel:"N1",kanji:"危ぶむ",hiragana:"あやぶむ",Romaji:"ayabumu",francais:"avoir des craintes, des doutes",categorie:["verbes","verbes d’action"]},{id:144,JLPTLevel:"N1",kanji:"",hiragana:"あやふや",Romaji:"ayafuya",francais:"ambigu, incertain, vague",categorie:["adjectifs"]},{id:145,JLPTLevel:"N1",kanji:"過ち",hiragana:"あやまち",Romaji:"ayamachi",francais:"erreur, faute, faux pas, indiscrétion",categorie:["nom"]},{id:146,JLPTLevel:"N3",kanji:"誤り",hiragana:"あやまり",Romaji:"ayamari",francais:"erreur",categorie:["nom"]},{id:147,JLPTLevel:"N4",kanji:"謝る",hiragana:"あやまる",Romaji:"ayamaru",francais:"s'excuser",categorie:["verbes","verbes d’action","formules de politesse"]},{id:148,JLPTLevel:"N1",kanji:"歩み",hiragana:"あゆみ",Romaji:"ayumi",francais:"promenade à pied, avancée",categorie:["activités et loisirs"]},{id:149,JLPTLevel:"N1",kanji:"歩む",hiragana:"あゆむ",Romaji:"ayumu",francais:"marcher, aller à pied",categorie:["verbes","verbes d’action"]},{id:150,JLPTLevel:"N3",kanji:"粗い",hiragana:"あらい",Romaji:"arai",francais:"grossier (texture), rugueux (surface)",categorie:["adjectifs"]},{id:151,JLPTLevel:"N2",kanji:"荒い",hiragana:"あらい",Romaji:"arai",francais:"brutal, violent",categorie:["adjectifs"]},{id:152,JLPTLevel:"N5",kanji:"洗う",hiragana:"あらう",Romaji:"arau",francais:"laver",categorie:["verbes","verbes d’action"]},{id:153,JLPTLevel:"N1",kanji:"予め",hiragana:"あらかじめ",Romaji:"arakajime",francais:"à l'avance",categorie:["expressions temporelles"]},{id:154,JLPTLevel:"N3",kanji:"嵐",hiragana:"あらし",Romaji:"arashi",francais:"tempête",categorie:["nature et environnement"]},{id:155,JLPTLevel:"N1",kanji:"荒らす",hiragana:"あらす",Romaji:"arasu",francais:"dévaster, laisser en ruine, endommager",categorie:["verbes","verbes d’action"]},{id:156,JLPTLevel:"N2",kanji:"粗筊",hiragana:"あらすじ",Romaji:"arasuj",francais:"résumé, synopsis",categorie:["nom"]},{id:157,JLPTLevel:"N1",kanji:"争い",hiragana:"あらそい",Romaji:"arasoi",francais:"conflit, lutte",categorie:["nom"]},{id:158,JLPTLevel:"N2",kanji:"争う",hiragana:"あらそう",Romaji:"arasou",francais:"se disputer, s'affronter",categorie:["verbes","verbes d’action"]},{id:159,JLPTLevel:"N3",kanji:"新た",hiragana:"あらた",Romaji:"arata",francais:"nouvellement, fraîchement",categorie:["adjectifs"]},{id:160,JLPTLevel:"N1",kanji:"改まる",hiragana:"あらたまる",Romaji:"aratamaru",francais:"être renouvelé, modifié",categorie:["verbes","verbes d’action"]},{id:161,JLPTLevel:"N2",kanji:"改めて",hiragana:"あらためて",Romaji:"aratamete",francais:"à nouveau, une nouvelle fois",categorie:["expressions temporelles"]},{id:162,JLPTLevel:"N2",kanji:"改める",hiragana:"あらためる",Romaji:"aratameru",francais:"modifier, renouveler",categorie:["verbes","verbes d’action"]},{id:163,JLPTLevel:"N1",kanji:"荒っぽい",hiragana:"あらっぽい",Romaji:"arappoi",francais:"rude, rêche",categorie:["adjectifs"]},{id:164,JLPTLevel:"N1",kanji:"アラブ",hiragana:"アラブ",Romaji:"arabu",francais:"arabe",categorie:["les pays"]},{id:165,JLPTLevel:"N3",kanji:"有らゆる",hiragana:"あらゆる",Romaji:"arayuru",francais:"tous, toutes",categorie:["nom"]},{id:166,JLPTLevel:"N1",kanji:"霰",hiragana:"あられ",Romaji:"arare",francais:"grêle",categorie:["nature et environnement"]},{id:167,JLPTLevel:"N3",kanji:"表す・現す・著す",hiragana:"あらわす",Romaji:"arawasu",francais:"montrer, afficher, révéler",categorie:["verbes","verbes d’action"]},{id:168,JLPTLevel:"N3",kanji:"現れ",hiragana:"あらわれ",Romaji:"araware",francais:"manifestation, incarnation, expression",categorie:["nom"]},{id:169,JLPTLevel:"N3",kanji:"現れる・表れる・現われる",hiragana:"あらわれる",Romaji:"arawareru",francais:"apparaître, se dévoiler, s'exprimer (sentiment)",categorie:["verbes","verbes d’action"]},{id:170,JLPTLevel:"N2",kanji:"有難い",hiragana:"ありがたい",Romaji:"arigatai",francais:"reconnaissant",categorie:["émotions et sentiments"]},{id:171,JLPTLevel:"N1",kanji:"有様",hiragana:"ありさま",Romaji:"arisama",francais:"état, condition",categorie:["nom"]},{id:172,JLPTLevel:"N1",kanji:"有りのまま",hiragana:"ありのまま",Romaji:"arinomama",francais:"tel quel",categorie:["expressions idiomatiques"]},{id:173,JLPTLevel:"N1",kanji:"有り触れる",hiragana:"ありふれる",Romaji:"arifureru",francais:"être courant, fréquent",categorie:["verbes","verbes d’action"]},{id:174,JLPTLevel:"N5",kanji:"有る",hiragana:"ある",Romaji:"aru",francais:"avoir, posséder",categorie:["verbes","verbes d’action"]},{id:175,JLPTLevel:"N5",kanji:"在る",hiragana:"ある",Romaji:"aru",francais:"être, se trouver, exister",categorie:["verbes","verbes d’action"]},{id:176,JLPTLevel:"N3",kanji:"或る",hiragana:"ある",Romaji:"aru",francais:"un certain",categorie:["nom"]},{id:177,JLPTLevel:"N3",kanji:"或いは",hiragana:"あるいは",Romaji:"aruiwa",francais:"ou bien",categorie:["mots de liaison et particules"]},{id:178,JLPTLevel:"N1",kanji:"",hiragana:"アルカリ",Romaji:"arukari",francais:"alcali",categorie:["nom"]},{id:179,JLPTLevel:"N5",kanji:"歩く",hiragana:"あるく",Romaji:"aruku",francais:"marcher",categorie:["verbes","verbes d’action"]},{id:180,JLPTLevel:"N4",kanji:"",hiragana:"アルコール",Romaji:"arukōru",francais:"alcool",categorie:["la nourriture"]},{id:181,JLPTLevel:"N4",kanji:"",hiragana:"アルバイト",Romaji:"arubaito",francais:"travail à temps partiel",categorie:["vocabulaire lié au travail"]},{id:182,JLPTLevel:"N3",kanji:"",hiragana:"アルバム",Romaji:"arubamu",francais:"album",categorie:["nom"]},{id:183,JLPTLevel:"N1",kanji:"",hiragana:"アルミ",Romaji:"arumi",francais:"aluminium",categorie:["nom"]},{id:184,JLPTLevel:"N5",kanji:"彼",hiragana:"あれ",Romaji:"are",francais:"ceci (loin du locuteur et de l'interlocuteur)",categorie:["nom"]},{id:185,JLPTLevel:"N2",kanji:"彼此",hiragana:"あれこれ",Romaji:"arekore",francais:"divers, diverses choses",categorie:["nom"]},{id:186,JLPTLevel:"N2",kanji:"荒れる",hiragana:"あれる",Romaji:"areru",francais:"être orageux, perdre son sang-froid",categorie:["verbes","verbes d’action"]},{id:187,JLPTLevel:"N3",kanji:"泡",hiragana:"あわ",Romaji:"awa",francais:"mousse, bulle",categorie:["nom"]},{id:188,JLPTLevel:"N1",kanji:"",hiragana:"アワー・アウア",Romaji:"awā・aua",francais:"heure",categorie:["expressions temporelles"]},{id:189,JLPTLevel:"N1",kanji:"吅わす",hiragana:"あわす",Romaji:"awasu",francais:"comparer, combiner, ajouter, unir, faire correspondre",categorie:["verbes","verbes d’action"]},{id:190,JLPTLevel:"N3",kanji:"吅わせる",hiragana:"あわせる",Romaji:"awaseru",francais:"se connecter, se mélanger",categorie:["verbes","verbes d’action"]},{id:191,JLPTLevel:"N2",kanji:"慌しい",hiragana:"あわただしい",Romaji:"awatadashii",francais:"déconcerté, confus",categorie:["adjectifs"]},{id:192,JLPTLevel:"N2",kanji:"慌てる",hiragana:"あわてる",Romaji:"awateru",francais:"devenir confus, agité, paniquer",categorie:["verbes","verbes d’action"]},{id:193,JLPTLevel:"N3",kanji:"哀れ",hiragana:"あわれ",Romaji:"aware",francais:"pitié, compassion",categorie:["émotions et sentiments"]},{id:194,JLPTLevel:"N3",kanji:"案",hiragana:"あん",Romaji:"an",francais:"plan, idée, projet",categorie:["nom"]},{id:195,JLPTLevel:"N2",kanji:"安易",hiragana:"あんい",Romaji:"an'i",francais:"facile, simple",categorie:["adjectifs"]},{id:196,JLPTLevel:"N2",kanji:"案外",hiragana:"あんがい",Romaji:"angai",francais:"contre toute attente, inattendu",categorie:["adjectifs"]},{id:197,JLPTLevel:"N3",kanji:"暗記",hiragana:"あんき",Romaji:"anki",francais:"mémorisation, par coeur",categorie:["nom"]},{id:198,JLPTLevel:"N1",kanji:"",hiragana:"アンケート",Romaji:"ankēto",francais:"enquête",categorie:["nom"]},{id:199,JLPTLevel:"N1",kanji:"",hiragana:"アンコール",Romaji:"ankōru",francais:"encore",categorie:["nom"]},{id:200,JLPTLevel:"N1",kanji:"暗殺",hiragana:"あんさつ",Romaji:"ansatsu",francais:"assassinat",categorie:["nom"]},{id:201,JLPTLevel:"N1",kanji:"暗算",hiragana:"あんざん",Romaji:"anzan",francais:"calcul mental",categorie:["nom"]},{id:202,JLPTLevel:"N1",kanji:"暗示",hiragana:"あんじ",Romaji:"anji",francais:"indice, suggestion",categorie:["nom"]},{id:203,JLPTLevel:"N1",kanji:"案じる",hiragana:"あんじる",Romaji:"anjiru",francais:"être inquiet, réfléchir à",categorie:["verbes","verbes d’action"]},{id:204,JLPTLevel:"N4",kanji:"安心する",hiragana:"あんしんする",Romaji:"anshin suru",francais:"être tranquille",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:205,JLPTLevel:"N1",kanji:"安静",hiragana:"あんせい",Romaji:"ansei",francais:"repos",categorie:["santé et bien-être"]},{id:206,JLPTLevel:"N4",kanji:"安全",hiragana:"あんぜん",Romaji:"anzen",francais:"sûr",categorie:["adjectifs"]},{id:207,JLPTLevel:"N3",kanji:"安定",hiragana:"あんてい",Romaji:"antei",francais:"équilibre, stabilité",categorie:["nom"]},{id:208,JLPTLevel:"N2",kanji:"アンテナ",hiragana:"アンテナ",Romaji:"antena",francais:"antenne",categorie:["technologie et gadgets"]},{id:209,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"comme ça",categorie:["adjectifs"]},{id:210,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"ce genre de",categorie:["adjectifs"]},{id:211,JLPTLevel:"N4",kanji:"案内",hiragana:"あんない",Romaji:"annai",francais:"information, renseignement",categorie:["nom"]},{id:212,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:213,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:214,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:215,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:216,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:217,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:218,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:219,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:220,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:221,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:222,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:223,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:224,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:225,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:226,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:227,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:228,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:229,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:230,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:231,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:232,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:233,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:234,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:235,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:236,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:237,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:238,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:239,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:240,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:241,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:242,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:243,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:244,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:245,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:246,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:247,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:248,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:249,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:250,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:251,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:252,JLPTLevel:"N4",kanji:"以下",hiragana:"いか",Romaji:"ika",francais:"moins de, au dessous-de, sous",categorie:["nombres et quantificateurs"]},{id:253,JLPTLevel:"N4",kanji:"以外",hiragana:"いがい",Romaji:"igai",francais:"excepté",categorie:["mots de liaison et particules"]},{id:254,JLPTLevel:"N3",kanji:"意外",hiragana:"いがい",Romaji:"igai",francais:"inattendu, surprenant",categorie:["adjectifs"]},{id:255,JLPTLevel:"N4",kanji:"如何",hiragana:"いかが",Romaji:"ikaga",francais:"comment ?",categorie:["mots de liaison et particules"]},{id:256,JLPTLevel:"N4",kanji:"医学",hiragana:"いがく",Romaji:"igaku",francais:"médecine",categorie:["santé et bien-être"]},{id:257,JLPTLevel:"N1",kanji:"生かす",hiragana:"いかす",Romaji:"ikasu",francais:"ranimer, ressusciter",categorie:["verbes","verbes d’action"]},{id:258,JLPTLevel:"N1",kanji:"如何に",hiragana:"いかに",Romaji:"ikani",francais:"pourquoi ?, comment ?",categorie:["mots de liaison et particules"]},{id:259,JLPTLevel:"N1",kanji:"如何にも",hiragana:"いかにも",Romaji:"ikanimo",francais:"certainement !, en effet !, parfaitement !",categorie:["expressions idiomatiques"]},{id:260,JLPTLevel:"N1",kanji:"怒り",hiragana:"いかり",Romaji:"ikari",francais:"colère, emportement, fureur, rage",categorie:["émotions et sentiments"]},{id:261,JLPTLevel:"N3",kanji:"息",hiragana:"いき",Romaji:"iki",francais:"souffle, respiration",categorie:["le corps humain"]},{id:262,JLPTLevel:"N1",kanji:"粋",hiragana:"いき",Romaji:"iki",francais:"élégant, coquet, chic",categorie:["adjectifs"]},{id:263,JLPTLevel:"N2",kanji:"意義",hiragana:"いぎ",Romaji:"igi",francais:"moral",categorie:["nom"]},{id:264,JLPTLevel:"N1",kanji:"異議",hiragana:"いぎ",Romaji:"igi",francais:"objection, protestation",categorie:["nom"]},{id:265,JLPTLevel:"N3",kanji:"行き",hiragana:"いき・ゆき",Romaji:"iki, yuki",francais:"déplacement, aller simple",categorie:["nom"]},{id:266,JLPTLevel:"N2",kanji:"生き生き",hiragana:"いきいき",Romaji:"ikiiki",francais:"plein d'entrain, animé, de façon très vivante",categorie:["adjectifs"]},{id:267,JLPTLevel:"N3",kanji:"勢い",hiragana:"いきおい",Romaji:"ikioi",francais:"entrain, vigueur, force",categorie:["nom"]},{id:268,JLPTLevel:"N1",kanji:"生き甲斐",hiragana:"いきがい",Romaji:"ikigai",francais:"raison de vivre",categorie:["nom"]},{id:269,JLPTLevel:"N1",kanji:"意気込む",hiragana:"いきごむ",Romaji:"ikigomu",francais:"être enthousiaste à propos de quelque chose",categorie:["verbes","verbes d’action"]},{id:270,JLPTLevel:"N1",kanji:"行き違い",hiragana:"いきちがい",Romaji:"ikichigai",francais:"désaccord, malentendu",categorie:["nom"]},{id:271,JLPTLevel:"N2",kanji:"行成",hiragana:"いきなり",Romaji:"ikinari",francais:"brusquement, soudainement",categorie:["adverbes"]},{id:272,JLPTLevel:"N3",kanji:"生き物",hiragana:"いきもの",Romaji:"ikimono",francais:"être vivant, animal",categorie:["nom"]},{id:273,JLPTLevel:"N4",kanji:"生きる",hiragana:"いきる",Romaji:"ikiru",francais:"vivre, exister",categorie:["verbes","verbes d’action"]},{id:274,JLPTLevel:"N2",kanji:"幾",hiragana:"いく",Romaji:"iku",francais:"plusieurs, quelques",categorie:["adjectifs"]},{id:275,JLPTLevel:"N5",kanji:"行く",hiragana:"いく・ゆく",Romaji:"iku, yuku",francais:"aller",categorie:["verbes","verbes d’action"]},{id:276,JLPTLevel:"N2",kanji:"育児する",hiragana:"いくじする",Romaji:"ikuji suru",francais:"élever des enfants, s'occuper d'enfants",categorie:["verbes","verbes d’action"]},{id:277,JLPTLevel:"N1",kanji:"育成",hiragana:"いくせい",Romaji:"ikusei",francais:"élevage, culture",categorie:["nom"]},{id:278,JLPTLevel:"N1",kanji:"幾多",hiragana:"いくた",Romaji:"ikuta",francais:"beaucoup, de nombreux",categorie:["adjectifs"]},{id:279,JLPTLevel:"N5",kanji:"幾つ",hiragana:"いくつ",Romaji:"ikutsu",francais:"combien ? (quantité)",categorie:["adjectifs"]},{id:280,JLPTLevel:"N2",kanji:"幾分",hiragana:"いくぶん",Romaji:"ikubun",francais:"un peu, une partie",categorie:["adjectifs"]},{id:281,JLPTLevel:"N5",kanji:"幾ら",hiragana:"いくら",Romaji:"ikura",francais:"combien ? (prix)",categorie:["adjectifs"]},{id:282,JLPTLevel:"N5",kanji:"池",hiragana:"いけ",Romaji:"ike",francais:"étang",categorie:["nature et environnement"]},{id:283,JLPTLevel:"N3",kanji:"行けない",hiragana:"いけない",Romaji:"ikenai",francais:"ne doit pas faire, sans espoir, pas bon",categorie:["adjectifs"]},{id:284,JLPTLevel:"N2",kanji:"生花",hiragana:"いけばな",Romaji:"ikebana",francais:"ikebana, arrangement floral",categorie:["activités et loisirs"]},{id:285,JLPTLevel:"N1",kanji:"生ける",hiragana:"いける",Romaji:"ikeru",francais:"disposer (des fleurs)",categorie:["verbes","verbes d’action"]},{id:286,JLPTLevel:"N4",kanji:"意見",hiragana:"いけん",Romaji:"iken",francais:"opinion, avis",categorie:["nom"]},{id:287,JLPTLevel:"N1",kanji:"異見",hiragana:"いけん",Romaji:"iken",francais:"contradiction, opinion différente, objection",categorie:["nom"]},{id:288,JLPTLevel:"N2",kanji:"以後",hiragana:"いご",Romaji:"igo",francais:"après quoi, dorénavant",categorie:["expressions temporelles"]},{id:289,JLPTLevel:"N2",kanji:"以降",hiragana:"いこう",Romaji:"ikou",francais:"désormais, dorénavant, à l'avenir",categorie:["expressions temporelles"]},{id:290,JLPTLevel:"N1",kanji:"意向",hiragana:"いこう",Romaji:"ikou",francais:"idée, intention",categorie:["nom"]},{id:291,JLPTLevel:"N1",kanji:"移行",hiragana:"いこう",Romaji:"ikou",francais:"migration, passage d'un état à un autre",categorie:["nom"]},{id:292,JLPTLevel:"N2",kanji:"",hiragana:"イコール",Romaji:"ikōru",francais:"égal à",categorie:["nom"]},{id:293,JLPTLevel:"N1",kanji:"",hiragana:"いざ",Romaji:"iza",francais:"bien, maintenant",categorie:["adverbes"]},{id:294,JLPTLevel:"N2",kanji:"勇ましい",hiragana:"いさましい",Romaji:"isamashii",francais:"courageux",categorie:["adjectifs"]},{id:295,JLPTLevel:"N5",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"pierre, roc",categorie:["nature et environnement"]},{id:296,JLPTLevel:"N3",kanji:"医師",hiragana:"いし",Romaji:"ishi",francais:"médecin",categorie:["santé et bien-être"]},{id:297,JLPTLevel:"N3",kanji:"意志",hiragana:"いし",Romaji:"ishi",francais:"volonté",categorie:["émotions et sentiments"]},{id:298,JLPTLevel:"N3",kanji:"意思",hiragana:"いし",Romaji:"ishi",francais:"intention, but",categorie:["émotions et sentiments"]},{id:299,JLPTLevel:"N3",kanji:"維持",hiragana:"いじ",Romaji:"iji",francais:"conservation, entretien",categorie:["nom"]},{id:300,JLPTLevel:"N1",kanji:"意地",hiragana:"いじ",Romaji:"iji",francais:"obstination, volonté",categorie:["émotions et sentiments"]},{id:301,JLPTLevel:"N3",kanji:"意識",hiragana:"いしき",Romaji:"ishiki",francais:"conscience",categorie:["nom"]},{id:302,JLPTLevel:"N2",kanji:"意識する",hiragana:"いしきする",Romaji:"ishiki suru",francais:"avoir conscience",categorie:["verbes","verbes d’action"]},{id:303,JLPTLevel:"N4",kanji:"苛める",hiragana:"いじめる",Romaji:"ijimeru",francais:"embêter",categorie:["verbes","verbes d’action"]},{id:304,JLPTLevel:"N5",kanji:"医者",hiragana:"いしゃ",Romaji:"isha",francais:"docteur, médecin",categorie:["nom"]},{id:305,JLPTLevel:"N1",kanji:"移住",hiragana:"いじゅう",Romaji:"ijuu",francais:"migration, immigration",categorie:["nom"]},{id:306,JLPTLevel:"N1",kanji:"移住する",hiragana:"いじゅうする",Romaji:"ijuu suru",francais:"migrer, immigrer",categorie:["verbes"]},{id:307,JLPTLevel:"N1",kanji:"衣装",hiragana:"いしょう",Romaji:"ishou",francais:"vêtement, costume",categorie:["nom"]},{id:308,JLPTLevel:"N4",kanji:"以上",hiragana:"いじょう",Romaji:"ijou",francais:"plus de, au-dessus-de, davantage",categorie:["adjectifs"]},{id:309,JLPTLevel:"N3",kanji:"異常",hiragana:"いじょう",Romaji:"ijou",francais:"étrange, anormal",categorie:["adjectifs"]},{id:310,JLPTLevel:"N2",kanji:"衣食住",hiragana:"いしょくじゅう",Romaji:"ishokujyuu",francais:"nécessités de la vie (des vêtements, de la nourriture et un abri)",categorie:["nom"]},{id:311,JLPTLevel:"N1",kanji:"弄る",hiragana:"いじる",Romaji:"ijiru",francais:"manier, toucher, trifouiller",categorie:["verbes"]},{id:312,JLPTLevel:"N2",kanji:"意地悪",hiragana:"いじわる",Romaji:"ijiwaru",francais:"malicieux, désobligeant",categorie:["adjectifs"]},{id:313,JLPTLevel:"N5",kanji:"椅子",hiragana:"いす",Romaji:"isu",francais:"chaise",categorie:["nom"]},{id:314,JLPTLevel:"N3",kanji:"泉",hiragana:"いずみ",Romaji:"izumi",francais:"fontaine, source",categorie:["nom"]},{id:315,JLPTLevel:"N3",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"où ?, qui ?, quoi ?",categorie:["adjectifs"]},{id:316,JLPTLevel:"N2",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"un autre jour, une autre fois",categorie:["adjectifs"]},{id:317,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"sexe opposé",categorie:["nom"]},{id:318,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"de sexe opposé",categorie:["nom"]},{id:319,JLPTLevel:"N1",kanji:"遺跡",hiragana:"いせき",Romaji:"iseki",francais:"ruine, vestige",categorie:["nom"]},{id:320,JLPTLevel:"N3",kanji:"以前",hiragana:"いぜん",Romaji:"izen",francais:"auparavant, autrefois",categorie:["adjectifs"]},{id:321,JLPTLevel:"N1",kanji:"依然",hiragana:"いぜん",Romaji:"izen",francais:"comme toujours, comme jusqu'à présent",categorie:["adjectifs"]},{id:322,JLPTLevel:"N5",kanji:"忙しい",hiragana:"いそがしい",Romaji:"isogashii",francais:"occupé",categorie:["adjectifs"]},{id:323,JLPTLevel:"N4",kanji:"急ぐ",hiragana:"いそぐ",Romaji:"isogu",francais:"se dépêcher",categorie:["verbes"]},{id:324,JLPTLevel:"N1",kanji:"依存",hiragana:"いぞん",Romaji:"izon",francais:"dépendance",categorie:["nom"]},{id:325,JLPTLevel:"N3",kanji:"板",hiragana:"いた",Romaji:"ita",francais:"planche, plaque",categorie:["nom"]},{id:326,JLPTLevel:"N5",kanji:"痛い",hiragana:"いたい",Romaji:"itai",francais:"douloureux",categorie:["adjectifs"]},{id:327,JLPTLevel:"N3",kanji:"偉大",hiragana:"いだい",Romaji:"idai",francais:"grandiose",categorie:["adjectifs"]},{id:328,JLPTLevel:"N1",kanji:"委託",hiragana:"いたく",Romaji:"itaku",francais:"consignation, le fait de confier quelque chose",categorie:["nom"]},{id:329,JLPTLevel:"N1",kanji:"委託する",hiragana:"いたくする",Romaji:"itaku suru",francais:"consigner, confier",categorie:["verbes"]},{id:330,JLPTLevel:"N4",kanji:"致す",hiragana:"いたす",Romaji:"itasu",francais:"faire (hum)",categorie:["verbes"]},{id:331,JLPTLevel:"N3",kanji:"悪戯",hiragana:"いたずら",Romaji:"itazura",francais:"mauvaise blague, sale tour",categorie:["nom"]},{id:332,JLPTLevel:"N1",kanji:"頂",hiragana:"いただき",Romaji:"itadaki",francais:"cime, sommet, pointe",categorie:["nom"]},{id:333,JLPTLevel:"N5",kanji:"戴きます",hiragana:"いただきます",Romaji:"itadakimasu",francais:"merci pour ce repas (expression de gratitude)",categorie:["expression"]},{id:334,JLPTLevel:"N4",kanji:"戴く",hiragana:"いただく",Romaji:"itadaku",francais:"recevoir (hum), manger ou boire",categorie:["verbes"]},{id:335,JLPTLevel:"N1",kanji:"至って",hiragana:"いたって",Romaji:"itatte",francais:"extrêmement, énormément",categorie:["adverbes"]},{id:336,JLPTLevel:"N3",kanji:"痛み",hiragana:"いたみ",Romaji:"itami",francais:"douleur",categorie:["nom"]},{id:337,JLPTLevel:"N2",kanji:"痛む",hiragana:"いたむ",Romaji:"itamuu",francais:"être blessé, subir une douleur",categorie:["verbes"]},{id:338,JLPTLevel:"N1",kanji:"痛める",hiragana:"いためる",Romaji:"itameru",francais:"se faire mal",categorie:["verbes"]},{id:339,JLPTLevel:"N1",kanji:"炒める",hiragana:"いためる",Romaji:"itameru",francais:"faire revenir (cuisine), cuisiner, faire frire",categorie:["verbes"]},{id:340,JLPTLevel:"N3",kanji:"至る",hiragana:"いたる",Romaji:"itaru",francais:"arriver à, mener à, conduire à",categorie:["verbes"]},{id:341,JLPTLevel:"N1",kanji:"労る",hiragana:"いたわる",Romaji:"itawaru",francais:"être plein d'attention pour, consoler, compatir",categorie:["verbes"]},{id:342,JLPTLevel:"N5",kanji:"一",hiragana:"いち",Romaji:"ichi",francais:"un",categorie:["nombres et quantificateurs"]},{id:343,JLPTLevel:"N3",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"foire, marché",categorie:["nom"]},{id:344,JLPTLevel:"N2",kanji:"位置",hiragana:"いち",Romaji:"ichi",francais:"place, position",categorie:["nom"]},{id:345,JLPTLevel:"N2",kanji:"一々",hiragana:"いちいち",Romaji:"ichiichi",francais:"un par un, séparément",categorie:["adverbes","nombres et quantificateurs"]}],Ei={vocabulaire:Nw},Ow={color:localStorage.getItem("color")||"#F75D48"},Mw={mode:localStorage.getItem("mode")||"light",fontColor:localStorage.getItem("mode")==="light"?"#353535":"#F7F7F2",bgColor:localStorage.getItem("mode")==="light"?"#353535":"#F7F7F2",mainBgColor:localStorage.getItem("mode")==="light"?"#F7F7F2":"#353535"},Ew={searchText:"",jlptLevel:"",kanaType:"",vocabulaireCategorie:[]},Hw={exerciceModeDeJeu:"",exerciceDifficulté:"",exerciceNumber:0,exerciceResult:[],exerciceTimer:5,exerciceTimerActive:!1,exerciceTypeDeKana:"normal"},Dw={totalTimer:0,totalfaute:0,totalreussite:0,questionsIncorrectes:[]},zw={kanji:Bo.kanji.length,vocabulaire:Ei.vocabulaire.length},Jw={kanji:[],vocabulaire:[],hiragana:[],katakana:[],nombre:[]},f0=Fi({name:"color",initialState:Ow,reducers:{setColor:(e,n)=>{e.color=n.payload,localStorage.setItem("color",n.payload)}}}),m0=Fi({name:"mode",initialState:Mw,reducers:{setMode:(e,n)=>{e.mode=n.payload,n.payload==="light"?(e.fontColor="#353535",e.bgColor="#353535",e.mainBgColor="#F7F7F2"):(e.fontColor="#F7F7F2",e.bgColor="#F7F7F2",e.mainBgColor="#353535"),localStorage.setItem("mode",n.payload)}}}),h0=Fi({name:"search",initialState:Ew,reducers:{setSearchText:(e,n)=>{e.searchText=n.payload},setJlptLevel:(e,n)=>{e.jlptLevel=n.payload},setkanaType:(e,n)=>{e.kanaType=n.payload},setVocabulaireCategorie:(e,n)=>{e.vocabulaireCategorie=n.payload}}}),v0=Fi({name:"parametersExercice",initialState:Hw,reducers:{setExerciceModeDeJeu:(e,n)=>{e.exerciceModeDeJeu=n.payload},setExerciceDifficulté:(e,n)=>{e.exerciceDifficulté=n.payload},setExerciceNumber:(e,n)=>{e.exerciceNumber=n.payload},setExerciceResult:(e,n)=>{e.exerciceResult=n.payload},setExerciceTimer:(e,n)=>{e.exerciceTimer=n.payload},setExerciceTimerActive:(e,n)=>{e.exerciceTimerActive=n.payload},setExerciceTypeDeKana:(e,n)=>{e.exerciceTypeDeKana=n.payload}}}),w0=Fi({name:"exercice",initialState:Dw,reducers:{setTotalTimer:(e,n)=>{e.totalTimer=n.payload},setTotalfaute:(e,n)=>{e.totalfaute=n.payload},setTotalreussite:(e,n)=>{e.totalreussite=n.payload},addQuestionIncorrecte:(e,n)=>{e.questionsIncorrectes.push(n.payload)},resetQuestionsIncorrectes:e=>{e.questionsIncorrectes=[]}}}),Fw=Fi({name:"totalData",initialState:zw,reducers:{setTotalData:(e,n)=>{e.kanji=n.payload.kanji,e.vocabulaire=n.payload.vocabulaire}}}),R0=Fi({name:"dataChoice",initialState:Jw,reducers:{toggleKanji:(e,n)=>{const i=n.payload,a=e.kanji.findIndex(t=>t.id===i.id);a>=0?e.kanji.splice(a,1):e.kanji.push(i)},toggleVocabulaire:(e,n)=>{const i=n.payload,a=e.vocabulaire.findIndex(t=>t.id===i.id);a>=0?e.vocabulaire.splice(a,1):e.vocabulaire.push(i)},toggleKatakana:(e,n)=>{const i=n.payload,a=e.katakana.findIndex(t=>t.id===i.id);a>=0?e.katakana.splice(a,1):e.katakana.push(i)},toggleNombre:(e,n)=>{const i=n.payload,a=e.nombre.findIndex(t=>t.id===i.id);a>=0?e.nombre.splice(a,1):e.nombre.push(i)},toggleHiragana:(e,n)=>{const i=n.payload,a=e.hiragana.findIndex(t=>t.id===i.id);a>=0?e.hiragana.splice(a,1):e.hiragana.push(i)},resetKanji:e=>{e.kanji=[]},resetVocabulaire:e=>{e.vocabulaire=[]},resetKatakana:e=>{e.katakana=[]},resetNombre:e=>{e.nombre=[]},resetHiragana:e=>{e.hiragana=[]}}}),{setColor:_w}=f0.actions,{setMode:Aw}=m0.actions,{setSearchText:Wc,setJlptLevel:Bw,setkanaType:Uc,setVocabulaireCategorie:Iw}=h0.actions,{setExerciceModeDeJeu:ca,setExerciceDifficulté:j0,setExerciceNumber:y0,setExerciceResult:xx,setExerciceTimer:Vw,setExerciceTimerActive:Ww,setExerciceTypeDeKana:Qc}=v0.actions,{setTotalTimer:Iu,setTotalfaute:dr,setTotalreussite:ur,addQuestionIncorrecte:Uw,resetQuestionsIncorrectes:Qw}=w0.actions,{toggleKanji:qw,toggleVocabulaire:Zw,toggleKatakana:Gw,toggleNombre:kx,toggleHiragana:Yw,resetKanji:Xw,resetVocabulaire:eR,resetKatakana:nR,resetNombre:iR,resetHiragana:aR}=R0.actions,tR=Rw({reducer:{color:f0.reducer,mode:m0.reducer,search:h0.reducer,parametersExercice:v0.reducer,exercice:w0.reducer,totalData:Fw.reducer,dataChoice:R0.reducer}}),rR="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",oR="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23353535'/%3e%3c/svg%3e",lR="data:image/svg+xml,%3csvg%20width='21'%20height='36'%20viewBox='0%200%2021%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8947%2017.9406C13.8947%2024.7368%2018.2067%2031.2265%2020.5405%2034.2413C21.0748%2034.9314%2020.581%2035.9768%2019.7114%2035.9023C8.89085%2034.9749%200%2027.5466%200%2017.9406C0%208.68938%208.42852%201.01969%2019.2233%200.0937448C20.0788%200.0203678%2020.576%201.03601%2020.0709%201.73032C17.905%204.70778%2013.8947%2011.1391%2013.8947%2017.9406Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",sR=j.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11vw;
    @media screen and (max-width: 560px) {
        width: 30vw;
    }
`,Vu=j.button`
    background-color: ${e=>e.$isActive?e.$color:e.$bgColor};
    color: ${e=>e.$isActive?"#fff":"#000"};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.1);
    }
    img{
        width: 2vw;
        height: 2vw;
        @media screen and (max-width: 560px) {
            width: 6vw;
            height: 6vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 12vw;
        margin: 1vw;
        border-radius: 3vw;
    }
`;function cR(){const e=He(),[n,i]=K.useState(localStorage.getItem("mode")||"light"),a=o=>{i(o),e(Aw(o))},{bgColor:t}=P(o=>o.mode),{color:r}=P(o=>o.color);return l.jsxs(sR,{children:[l.jsx(Vu,{$bgColor:t,$color:r,$isActive:n==="light",onClick:()=>a("light"),children:l.jsx("img",{src:n==="light"?rR:oR})}),l.jsx(Vu,{$bgColor:t,$color:r,$isActive:n==="dark",onClick:()=>a("dark"),children:l.jsx("img",{src:lR})})]})}const dR="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13422C0%204.13422%200.863862%208.26845%2014.3977%208.26845C27.9315%208.26845%2028.7954%204.13422%2028.7954%204.13422V31.6958C28.7954%2031.6958%2027.7876%2035.83%2014.3977%2035.83C1.00784%2035.83%200%2031.6958%200%2031.6958V4.13422Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23353535'%20stroke='%23E1E1DE'/%3e%3cpath%20d='M13.2459%208.40626C13.2459%2012.1356%2013.2459%2015.1588%2011.3742%2015.1588C9.5025%2015.1588%209.5025%2012.1356%209.5025%208.40626C9.5025%204.67692%2010.3405%201.65369%2011.3742%201.65369C12.4079%201.65369%2013.2459%204.67692%2013.2459%208.40626Z'%20fill='%23353535'/%3e%3cpath%20d='M19.8688%207.0282C19.8688%2010.1487%2019.8688%2012.6783%2018.573%2012.6783C17.2772%2012.6783%2017.2772%2010.1487%2017.2772%207.0282C17.2772%203.90773%2017.8574%201.37808%2018.573%201.37808C19.2887%201.37808%2019.8688%203.90773%2019.8688%207.0282Z'%20fill='%23353535'/%3e%3c/svg%3e",uR="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13379C0%204.13379%200.863862%208.26802%2014.3977%208.26802C27.9315%208.26802%2028.7954%204.13379%2028.7954%204.13379V31.6953C28.7954%2031.6953%2027.7876%2035.8296%2014.3977%2035.8296C1.00784%2035.8296%200%2031.6953%200%2031.6953V4.13379Z'%20fill='%23353535'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23F7F7F2'%20stroke='%231E1E1E'/%3e%3cpath%20d='M13.2459%208.4059C13.2459%2012.1352%2013.2459%2015.1585%2011.3742%2015.1585C9.5025%2015.1585%209.5025%2012.1352%209.5025%208.4059C9.5025%204.67655%2010.3405%201.65332%2011.3742%201.65332C12.4079%201.65332%2013.2459%204.67655%2013.2459%208.4059Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M19.8688%207.02805C19.8688%2010.1485%2019.8688%2012.6782%2018.573%2012.6782C17.2772%2012.6782%2017.2772%2010.1485%2017.2772%207.02805C17.2772%203.90757%2017.8574%201.37793%2018.573%201.37793C19.2887%201.37793%2019.8688%203.90757%2019.8688%207.02805Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",gR=j.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16.7vw;
    margin-bottom: 1.3vw;
    position: absolute;
    right: 3.1vw;
    top: 1vw;
    @media screen and (max-width: 560px) {
        width: 45vw;
        top: 3vw;
    }
    
`,pR=j(mi)`
    background-color: ${e=>e.$isActive?e.$color:e.$bgColor};
    color: ${e=>e.$isActive?"#fff":"#000"};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.1);
    }
    img{
        width: 2vw;
        height: 2vw;
        @media screen and (max-width: 560px) {
            width: 6vw;
            height: 6vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 12vw;
        margin: 1vw;
        border-radius: 3vw;
    }
`;function fR(){const e=P(i=>i.mode),{bgColor:n}=P(i=>i.mode);return l.jsxs(gR,{children:[l.jsx(cR,{}),l.jsx(pR,{$bgColor:n,to:"/color",children:l.jsx("img",{src:e.mode==="light"?dR:uR})})]})}const mR=()=>{const{mainBgColor:e}=P(n=>n.mode);return K.useEffect(()=>{document.body.style.backgroundColor=e},[e]),null},hR=j.div`
    display: flex;
    flex-direction: column;
    color: ${e=>e.$fontColor};
    margin-left: 3vw;
    width: 74vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        margin-left: 0;
        width: 100vw;
        align-items: center;
        gap: 3vw;
    }
`,vR=j.div`
    display: flex;
    width: 100%;
    height: 16.5vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    gap: 0.6vw;
    border-radius: 0.8vw;
    margin-top: 6vw;
    h1{
        font-size: 12vw;
        width: 90%;
        margin: 0;
        text-align: center;
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            width: 100%;
            height: 67%;
            font-size: 17vw;
            border-radius:  0 0 3vw 3vw;
        }
    }
    @media screen and (max-width: 560px) {
        height: 70vw;
        width: 90%;
        flex-direction: column-reverse;
        align-items: center;
        gap: 0;
        padding: 3vw;
        border-radius: 4vw;
        margin-top: 20vw;
    }
`,wR=j.div`
    display: flex;
    flex-direction: column;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$color};
    font-size: 3.2vw;
    text-align: center;
    width:10%;
    justify-content: center;
    border-radius: 0.5vw;
    span{
        transform:translateY(-0.3vw);
        font-weight: 600;
        @media screen and (max-width: 560px) {
            height: 35%; 
        }
    }
    @media screen and (max-width: 560px) {
            width: 100%;
            flex-direction: row;
            font-size: 7vw;
            height: 50%;
            border-radius:  3vw 3vw 0 0;
            align-items: flex-end;
        }
`,RR=j.div`
    display: flex;
    width: 76vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        width: calc(90% + 6vw);
        flex-direction: column;
        gap: 3vw;
    }
`,jR=j.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        width:  calc(100% - 6vw);
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`,yR=j.div`
    display: flex;
    width: 100%;
    height: 6vw;
    gap: 0.5vw;
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        height: 15vw;
        gap: 1.5vw;
    }
`,xR=j.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    font-size: 2.5vw;
    background-color: ${e=>e.$mainBgColor};
    padding: 0.5vw 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        border-radius: 3vw;
    }
`,kR=j.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    font-size: 2.5vw;
    background-color: ${e=>e.$mainBgColor};
    padding: 0.5vw 1vw;
    color: ${e=>e.$color};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        border-radius: 3vw;
    }
`,PR=j.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
    @media screen and (max-width: 560px) {
        height: 13vw;
        gap: 1.5vw;
    }
`,CR=j.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
        border-radius: 3vw;
        width: 15%;
    }
`,LR=j.h4`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        padding-left: 2vw;
        border-radius: 3vw;
    }
`,KR=j.p`
    display: flex;
    align-items: center;
    border-radius: 0.5vw;
    max-width: 100%;
    max-height: 11vw;
    min-height: 11vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    margin: 0;
    font-size: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 3.5vw;
        max-height: 40vw;
        min-height: 40vw;
        padding: 1vw 2vw;
        border-radius: 3vw;
    }
`,bR=j.div`
    display: flex;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    @media screen and (max-width: 560px) {
        width:  calc(100% - 6vw);
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`,TR=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    width: 100%;
    height: 7vw;
    border-radius: 0.5vw;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    @media screen and (max-width: 560px) {
        height: 20vw;
        gap: 1.5vw;
        border-radius: 3vw;
    }
`,$R=j.h3`
    font-size: 2.5vw;
    height: 40%;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,SR=j.h3`
    font-size: 2vw;
    height: 40%;
    color: ${e=>e.$color};
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`,gr=j.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 3.5vw;
    @media screen and (max-width: 560px) {
        height: 10vw;
        gap: 1.5vw;
    }
`,NR=j.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        border-radius: 3vw;
        padding: 0.5vw 3vw;
    }
`,OR=j.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 15%;
        border-radius: 3vw;
    }
`,MR=j.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 85%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        border-radius: 3vw;
        padding: 0.5vw 3vw;
    }
`,ER=j.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 25%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 30%;
        border-radius: 3vw;
    }
`,HR=j.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 75%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        border-radius: 3vw;
        padding: 0.5vw 3vw;
    }
`,DR=j.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 35%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 40%;
        border-radius: 3vw;
    }
`,zR=j.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        border-radius: 3vw;
        padding: 0.5vw 3vw;
    }
`,JR=j.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 15%;
        border-radius: 3vw;
    }
`;function FR(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(o=>o.mode),{color:a}=P(o=>o.color),t=P(o=>o.totalData.kanji),r=P(o=>o.totalData.vocabulaire);return l.jsxs(hR,{children:[l.jsxs(vR,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("h1",{children:"NIHONGO"}),l.jsxs(wR,{$color:a,$mainBgColor:i,children:[l.jsx("span",{children:"日"}),l.jsx("span",{children:"本"}),l.jsx("span",{children:"語"})]})]}),l.jsxs(RR,{children:[l.jsxs(jR,{$bgColor:e,children:[l.jsxs(yR,{$fontColor:n,children:[l.jsx(xR,{$mainBgColor:i,children:"Actualité"}),l.jsx(kR,{$mainBgColor:i,$color:a,children:"ニュース"})]}),l.jsxs(PR,{children:[l.jsx(CR,{$mainBgColor:i,$color:a,children:"18/08"}),l.jsx(LR,{$mainBgColor:i,$fontColor:n,children:"Lancement de NIHONGO v.01w39a"})]}),l.jsx(KR,{$mainBgColor:i,$fontColor:n,children:"v01w39a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque. Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor. Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet."})]}),l.jsxs(bR,{$bgColor:e,children:[l.jsxs(TR,{$mainBgColor:i,$fontColor:n,children:[l.jsx($R,{children:"Avancement"}),l.jsx(SR,{$color:a,children:"アドバンス"})]}),l.jsxs(gr,{children:[l.jsx(NR,{$mainBgColor:i,$fontColor:n,children:"Katakana"}),l.jsx(OR,{$mainBgColor:i,$color:a,children:"90%"})]}),l.jsxs(gr,{children:[l.jsx(MR,{$mainBgColor:i,$fontColor:n,children:"Nombre de vocabulaire"}),l.jsxs(ER,{$mainBgColor:i,$color:a,children:[r,"/?"]})]}),l.jsxs(gr,{children:[l.jsx(HR,{$mainBgColor:i,$fontColor:n,children:"Nombre de kanji"}),l.jsxs(DR,{$mainBgColor:i,$color:a,children:[t,"/2000"]})]}),l.jsxs(gr,{children:[l.jsx(zR,{$mainBgColor:i,$fontColor:n,children:"Hiragana"}),l.jsx(JR,{$mainBgColor:i,$color:a,children:"80%"})]})]})]})]})}const x0=({color:e,width:n="5vw",height:i="5vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 43 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M39 4L4 36L39 68",stroke:e,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round"})});x0.propTypes={color:M.string,width:M.string,height:M.string};const k0=({color:e,mainBgColor:n,width:i="5vw",height:a="5vw"})=>l.jsxs("svg",{width:i,height:a,viewBox:"0 0 74 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{y:"2",width:"36",height:"68",fill:e}),l.jsx("rect",{x:"41",y:"18",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"60",y:"18",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"29",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"8",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"38",y:"20",width:"36",height:"50",fill:e}),l.jsx("path",{d:"M54 61C54 59.8954 54.8954 59 56 59C57.1046 59 58 59.8954 58 61V70H54V61Z",fill:n}),l.jsx("path",{d:"M16 61C16 59.8954 16.8954 59 18 59C19.1046 59 20 59.8954 20 61V70H16V61Z",fill:n}),l.jsx("rect",{x:"4",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"48",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"48",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"54",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"54",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"66",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"66",y:"27",width:"4",height:"11",fill:n})]});k0.propTypes={color:M.string,mainBgColor:M.string,width:M.string,height:M.string};const _R=j.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    max-width: 76vw;
    height: 20vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        height: 100%;
        max-width: 100vw;
        width: 100%;
        align-items: center;
        gap: 3vw;
    }
`,AR=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 30%;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 50vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`,BR=j(mi)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 50%;
    max-width: 100%;
    padding: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        padding: 4vw;
    }
    &:hover{
        transform: scale(1.04);
    }
    div{
        display: flex;
        flex-direction: column;
        span:nth-child(1){
            font-size: 0.7vw;
            @media screen and (max-width: 560px) {
                font-size: 2.5vw;
            }
        }
        span:nth-child(2){
            font-weight: 700;
            font-size: 1.5vw;
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
        span{
            font-size: 1.2vw;
            @media screen and (max-width: 560px) {
                font-size: 4vw;
            }
        }
    }
    img{
        width: 4vw;
        height: 4vw;
    }
`,IR=j(mi)`
    display: flex;
    align-items: center;
    text-align: end;
    justify-content: space-between;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 50%;
    max-width: 100%;
    padding: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        padding: 4vw;
    }
    &:hover{
        transform: scale(1.04);
    }
    div{
        display: flex;
        flex-direction: column;
        span{
            font-size: 1.2vw;
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        
    }
`,VR=j.div`
    display: flex;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 70%;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 70vw;
        border-radius: 4vw;
        padding: 3vw;
    }
`,WR=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    span{
        font-size: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
        }
    }
`,UR=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1.8vw;
        width: 10vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            width: 26vw;
        }
    }
    
`,QR=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 9vw;
        font-weight: 700;
        width: 10vw;
        height: 10vw;
        transform: translateY(-1.7vw);
        @media screen and (max-width: 560px) {
            font-size: 25vw;
            width: 26vw;
            height: 100%;
        }
    }
`;function ba(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(d=>d.mode),{color:a}=P(d=>d.color),t=ce(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};case"/Dictionnaire/Kanji":case"/Dictionnaire/Hiragana":case"/Dictionnaire/Katakana":case"/Dictionnaire/Vocabulaire":case"/Dictionnaire/Nombres":return{titleFurigana1:"じ",titleFurigana2:"しょ",titleKanji1:"辞",titleKanji2:"書",titleFr:"Dictionnaire"};default:return"Accueil"}})();let s=fi();const c=window.innerWidth<560?"14vw":"5vw",u=()=>t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":window.innerWidth>560?"25vw":"9vw";return l.jsxs(_R,{children:[l.jsxs(AR,{$bgColor:e,children:[l.jsxs(BR,{$mainBgColor:i,$fontColor:n,onClick:()=>s(-1),children:[l.jsx(x0,{width:c,height:c,color:a}),l.jsxs("div",{children:[l.jsx("span",{children:"もど"}),l.jsx("span",{children:"戻る"}),l.jsx("span",{children:"Retour"})]})]}),l.jsxs(IR,{$mainBgColor:i,$fontColor:n,to:"/",children:[l.jsx(k0,{width:c,height:c,color:a,mainBgColor:i}),l.jsxs("div",{children:[l.jsx("span",{children:"サイトホーム"}),l.jsx("span",{children:"Accueil du site"})]})]})]}),l.jsx(VR,{$bgColor:e,children:l.jsxs(WR,{$mainBgColor:i,$fontColor:n,children:[l.jsxs(UR,{$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":u},children:o.titleFurigana2})]}),l.jsxs(QR,{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":u},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})})]})}const P0=({color:e,width:n="4vw",height:i="5vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 74 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M42 5C42 2.23858 39.7614 -1.20706e-07 37 0C34.2386 1.20706e-07 32 2.23858 32 5L42 5ZM33.4645 93.5355C35.4171 95.4882 38.5829 95.4882 40.5355 93.5355L72.3553 61.7157C74.308 59.7631 74.308 56.5973 72.3553 54.6447C70.4027 52.692 67.2369 52.692 65.2843 54.6447L37 82.9289L8.71573 54.6447C6.76311 52.692 3.59728 52.692 1.64466 54.6447C-0.307958 56.5973 -0.307958 59.7631 1.64466 61.7157L33.4645 93.5355ZM32 5L32 90L42 90L42 5L32 5Z",fill:e})});P0.propTypes={color:M.string,width:M.string,height:M.string};const qR=j.div`
    display: flex;
    gap: 1vw;
    max-width: 76vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        max-width: 100vw;
        width: 100%;
        align-items: center;
        gap: 3vw;
    }
`,ZR=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    width: 55%;
    height: 21.5vw;
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        border-radius: 4vw; 
        padding: 3vw;
        height: 100%;
        gap: 1.5vw;
    }
`,GR=j.div`
    display: flex;
    width: 100%;
    gap: 0.6vw;
    height: 5vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 40vw;
        gap: 1.5vw;
    }
`,YR=j.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 50%; 
    font-size: 1.5vw;
    @media screen and (max-width: 560px) {
        width: 100%; 
        border-radius: 3vw;
        height: 50%;
        font-size: 7vw;
    }
`,XR=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 50%;
    font-size: 1vw;
    @media screen and (max-width: 560px) {
        width: 100%; 
        border-radius: 3vw;
        height: 50%;
        font-size: 3.5vw;
    }
`,ej=j.div`
    display: flex;
    height: 16vw;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        height: 50vw;
    }
    
`,nj=j(mi)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 100%; 
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.02);
    }
`,ij=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1.3vw;
        width: 5vw;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            width: 15vw;
        }
    }
`,aj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 5vw;
        font-weight: 700;
        width: 5vw;
        transform: translateY(-0.7vw);
        @media screen and (max-width: 560px) {
            font-size: 15vw;
            width: 15vw;
        }
    }
`,tj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 45%;
    height: 21.5vw;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 45vw;
        padding: 3vw;
        border-radius: 4vw;
    }
`,rj=j.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        position: relative;
    }
    SVG{
        @media screen and (max-width: 560px) {
            position: absolute;
            bottom: 2vw;
            left: 2vw;
        }
    }
    &:hover{
        background-color: #858585;
    }
`,oj=j.div`
    text-align:center;
    font-size: 1.5vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,lj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1vw;
        width: 3vw;
        @media screen and (max-width: 560px) {
            font-size: 3vw;
            width: 12vw;
        }
    }
`,sj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 3vw;
        width: 3vw;
        transform: translateY(-0.7vw);
        @media screen and (max-width: 560px) {
            font-size: 12vw;
            width: 12vw;
            transform: translateY(-1.7vw);
        }
    }
`;function zt(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(c=>c.mode),{color:a}=P(c=>c.color),t=ce(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};default:return"Accueil"}})(),s=window.innerWidth<560?"10vw":"5vw";return l.jsxs(qR,{children:[l.jsxs(ZR,{$bgColor:e,children:[l.jsxs(GR,{children:[l.jsx(YR,{$mainBgColor:i,$fontColor:n,children:"Dictionnaire"}),l.jsxs(XR,{$color:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleFurigana2})]}),l.jsxs("div",{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})]}),l.jsx(ej,{children:l.jsxs(nj,{to:`/Dictionnaire/${o.titleFr}`,$mainBgColor:i,$fontColor:n,children:[l.jsxs(ij,{$color:a,children:[l.jsx("span",{children:"じ"}),l.jsx("span",{children:"しょ"})]}),l.jsxs(aj,{children:[l.jsx("span",{children:"辞"}),l.jsx("span",{children:"書"})]})]})})]}),l.jsx(tj,{$bgColor:e,children:l.jsxs(rj,{$mainBgColor:i,$fontColor:n,children:[l.jsx(oj,{children:"Exercices"}),l.jsxs("div",{children:[l.jsxs(lj,{$color:a,children:[l.jsx("span",{children:"えん"}),l.jsx("span",{children:"しゅう"})]}),l.jsxs(sj,{children:[l.jsx("span",{children:"演"}),l.jsx("span",{children:"習"})]})]}),l.jsx(P0,{width:s,height:s,color:a})]})})]})}const cj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%239ED7FF'/%3e%3c/svg%3e",dj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='30.6667'%20y='30.6666'%20width='30.6667'%20height='30.6667'%20fill='%23FFC370'/%3e%3cpath%20d='M0%205C0%202.23857%202.23858%200%205%200H30.6667V30.6667H0V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%2061.3334H91.9999V87C91.9999%2089.7615%2089.7613%2092%2086.9999%2092H61.3333V61.3334Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%200H86.9999C89.7613%200%2091.9999%202.23858%2091.9999%205V30.6667H61.3333V0Z'%20fill='%23FFC370'/%3e%3c/svg%3e",uj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2063.4054H23.5946C26.356%2063.4054%2028.5946%2065.644%2028.5946%2068.4054V92H0V63.4054Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M63.4054%200H92V28.5946H68.4054C65.644%2028.5946%2063.4054%2026.356%2063.4054%2023.5946V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",Js=({color:e,width:n="6vw",height:i="4vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 109 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.99999 9L54.5 44L100 9",stroke:e,strokeWidth:"17",strokeLinecap:"round",strokeLinejoin:"round"})});Js.propTypes={color:M.string,width:M.string,height:M.string};const gj=j.div`
    display: flex;
    width: 100%;
    height: 35vw;
    gap: 1vw;
    margin-right: 3vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        height: 100%;
        margin-right: 0;
        align-items: center;
        gap: 3vw;
    }
`,pj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        height: 100vw;
    }
`,fj=j.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    font-size: 1.5vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    span{
        font-size: 2vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
`,mj=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    width: 100%;
    height: 50%;
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.5vw;
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
    button:first-child{
        rotate: 180deg;
    }
    p{
        font-size: 5.7vw;
        font-weight: 700;
        margin: 0;
        @media screen and (max-width: 560px) {
            font-size: 18vw;
        }
        span{
            font-size: 3vw;
            width: 2vw;
            font-weight: 700;
            color: ${e=>e.$color};
            @media screen and (max-width: 560px) {
                font-size: 9vw;
            }
        }
    }
`,hj=j.button`
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border: none;
    cursor: pointer;
    font-size: 1.5vw;
    width: 80%;
    height: 15%;
    border-radius: 0.5vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        height: 15%;
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.05);
       }
`,vj=j.div`
    display: flex;  
    flex-direction: column;
    gap: 0.6vw;
    width: 67.8%;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`,wj=j.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.6vw;
    height: 6vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        gap: 1.5vw;
    }
`,Rj=j.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        font-size: 7vw;
        border-radius: 3vw;
        height: 20vw;
    }
`,jj=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    width: 50%;
    border-radius: 0.5vw;
    color: #F7F7F2;
    @media screen and (max-width: 560px) {
        width: 100%;
        border-radius: 3vw;
        height: 20vw;
    }
`,yj=j.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
    span{
        width: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 2.5vw;
            width: 7vw;
        }
    }
`,xj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    font-weight: 700;
    span{
        width: 2vw;
        transform: translateY(-0.3vw);
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 7vw;
            transform: translateY(-1vw);
        }
    }
`,kj=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
    @media screen and (max-width: 560px) {
        height: 100%;
        gap: 1.5vw;
    }
`,Pj=j.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 35%;
    padding: 0;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.015);
    }
    @media screen and (max-width: 560px) {
        flex-direction: column;
        width: 100%;
        font-size: 7vw;
        border-radius: 3vw;
        height: 60vw;
        position: relative;
        padding-top: 4vw;
        padding-bottom: 4vw;
    }
`,Cj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-left: 2vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        margin-left: 0;  
    }
    img{
        width: 5vw;
        height: 5vw;
        @media screen and (max-width: 560px) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20vw;
            height: 20vw;
        }
    }
    span{
        font-size: 1.7vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;  
        }
    }
`,Lj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    margin-right: 2vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw; 
        gap: 1.5vw; 
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vw;
        background-color: ${e=>e.$color};
        width: 15vw;
        height: 7vw;
        border-radius: 0.5vw;
        color: ${e=>e.$mainBgColor};
        @media screen and (max-width: 560px) {
            font-size: 5vw;  
            width: 100%;
            height: 10vw;
            border-radius: 3vw;
            padding-left: 5vw;
            padding-right: 5vw;
        }
    }
`,Or=({difficulte:e,icon:n,children:i,selectedDifficulte:a,setSelectedDifficulte:t})=>{const r=He(),{fontColor:o,mainBgColor:s}=P(v=>v.mode),{color:c}=P(v=>v.color),u=a===e,[d,p]=K.useState(u?s:c),[m,g]=K.useState(u?c:s),[R,y]=K.useState(u?c:"#F7F7F2"),[k,h]=K.useState(u?s:o),f=()=>{t(e),r(j0(e))};return K.useEffect(()=>{p(u?s:c),g(u?c:s),y(u?c:"#F7F7F2"),h(u?s:o)},[u,s,c,o]),l.jsxs(Pj,{$mainBgColor:m,$fontColor:k,onClick:f,children:[l.jsxs(Cj,{children:[l.jsx("img",{src:n}),l.jsx("span",{children:e})]}),l.jsx(Lj,{$mainBgColor:R,$color:d,children:i})]})};Or.propTypes={difficulte:M.string.isRequired,icon:M.string.isRequired,children:M.node,selectedDifficulte:M.string.isRequired,setSelectedDifficulte:M.func.isRequired};function Jt(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(h=>h.mode),{color:a}=P(h=>h.color),t=He(),[r,o]=K.useState(P(h=>h.parametersExercice.exerciceTimer)),[s,c]=K.useState(P(h=>h.parametersExercice.exerciceTimerActive)),[u,d]=K.useState("#858585"),[p,m]=K.useState("");K.useEffect(()=>{t(Vw(r))},[r,t]);const g=()=>{const h=!s;c(h),t(Ww(h)),d(h?a:"#858585")},R=()=>{r<15&&o(r+1)},y=()=>{r>1&&o(r-1)},k=window.innerWidth<560?"15vw":"5vw";return l.jsxs(gj,{id:"SectionDifficulte",children:[l.jsx(pj,{$bgColor:e,children:l.jsxs(fj,{$mainBgColor:i,$fontColor:n,children:[l.jsx("span",{children:"Temps par question"}),l.jsxs(mj,{$color:a,children:[l.jsx("button",{onClick:R,children:l.jsx(Js,{width:k,height:k,color:a})}),l.jsxs("p",{children:[r,l.jsx("span",{children:"S"})]}),l.jsx("button",{onClick:y,children:l.jsx(Js,{width:k,height:k,color:a})})]}),l.jsx(hj,{onClick:g,$color:u,children:s?"Activer":"Désactiver"})]})}),l.jsxs(vj,{$bgColor:e,children:[l.jsxs(wj,{children:[l.jsx(Rj,{$mainBgColor:i,$fontColor:n,children:"Difficulté"}),l.jsxs(jj,{$color:a,children:[l.jsxs(yj,{children:[l.jsx("span",{children:"こん"}),l.jsx("span",{children:"なん"})]}),l.jsxs(xj,{children:[l.jsx("span",{children:"困"}),l.jsx("span",{children:"難"})]})]})]}),l.jsxs(kj,{children:[l.jsxs(Or,{difficulte:"Débutant",icon:cj,selectedDifficulte:p,setSelectedDifficulte:m,children:[l.jsx("span",{children:"Hiragana/Katakana"}),l.jsx("span",{children:"Rōmaji"})]}),l.jsx(Or,{difficulte:"Intermédiaire",icon:dj,selectedDifficulte:p,setSelectedDifficulte:m,children:l.jsx("span",{children:"Hiragana/Katakana"})}),l.jsx(Or,{difficulte:"Confirmer",icon:uj,selectedDifficulte:p,setSelectedDifficulte:m})]})]})]})}const Io="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0544'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0544)'%20fill='%23F7F7F2'/%3e%3crect%20x='14.5542'%20y='48.9956'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9956)'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Kj=j.div`
    display: flex;
    width: calc(100% - 3vw);
    margin-right: 3vw;
    gap: 1vw;
    height: 28vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        margin-right: 0vw;
        gap: 3vw;
    }
`,Cl=j.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
            width: 95%;
            padding: 3vw;
            border-radius: 4vw;
        }
    div:nth-child(1){
        will-change: transform;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    }
    div:nth-child(1):hover {
        transform: scale(1.025);
    }
`,Ll=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2vw);
    height: 100%;
    padding: 1vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        height: 80vw;
        border-radius: 3vw;
    }
`,Kl=j.span`
    font-size: 1.5vw;
    position: absolute;
    top: 1vw;
    left: 50%;
    transform: translateX(-50%);
    color: ${e=>e.$color};
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        top: 5vw;
    }
`,bj=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 4vw;
    font-weight: 700;
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        font-size: 10vw;
    }
`,Tj=j.span`
    font-size: 8vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 20vw;
    }
`,$j=j.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        bottom: 5vw;
        left: 5vw;
    }
`,Sj=j.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 10vw;
        width: 90%;
    }
`,Nj=j.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,Oj=j.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 50vw;
    height: 85%;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90vw;
        height: 80%;
        gap: 3vw
    }
`,Mj=j.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;   
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 560px) {
            border-radius: 3vw;
        }
    img{
        width: 3vw;
        height: 3vw;
        @media screen and (max-width: 560px) {
            width: 9vw;
            height: 9vw;
        }
    }
`,Ej=j.button`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100%;
    max-height: 50%;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    z-index: 101;
    padding: 1vw;
    gap: 0.6vw;
    font-size: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 90vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw
    }
    &:hover{
        transform: scale(1.04);
        
    }
    span{
        color: ${e=>e.$color};
        margin-left: 0.4vw;
        @media screen and (max-width: 560px) {
            margin-left: 1.4vw;
        }
    }
    h1{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            border-radius: 1.5vw;
            font-size: 4vw;
            height: 30%;
        }
    }
    div{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        height: 60%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            border-radius: 1.5vw;
            height: 70%;
        }
        p{
            font-size: 1.5vw;
            margin-left: 0.4vw;
            @media screen and (max-width: 560px) {
                font-size: 4.5vw;
                width: 90%;
            }
        }
    }
`;function Ft(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(w=>w.mode),{color:a}=P(w=>w.color),t=He(),r=ce(),o=P(w=>w.parametersExercice.exerciceModeDeJeu),[s,c]=K.useState(null);K.useEffect(()=>{(r.pathname==="/Katakana"||r.pathname==="/Hiragana")&&o==="N5"&&t(ca(""))},[r.pathname,o,t]);const d=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),p=fi(),m=w=>{t(ca(w)),c(w)},g=w=>s===w?a:i,R=P(w=>w.parametersExercice.exerciceNumber),y=R===0,k=w=>{if(document.querySelector(".Alert").style.display="block",R===0){h(".AlertNbQuestion",y);return}else t(ca(w)),p(`/choisir-ses/${d.modeTitle}`),window.scrollTo(0,0)},h=(w,x)=>{document.querySelector(w).style.display=x?"flex":"none"},f=()=>{document.querySelector(".NbAlert").style.display="none",h(".NbAlertNbQuestion",!1)},v=w=>()=>{const x=document.getElementById(`Section${w}`);x?(document.querySelector(".NbAlert").style.display="none",window.innerWidth<=560?x.scrollIntoView({behavior:"smooth",block:"start"}):x.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${w}`)};return l.jsxs(Kj,{id:"SectionModeDeJeu",children:[l.jsx(Nj,{className:"NbAlert",children:l.jsxs(Oj,{children:[l.jsx(Mj,{onClick:f,$color:a,children:l.jsx("img",{src:Io})}),l.jsxs(Ej,{onClick:v("NombreDeQuestions"),className:"NbAlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"nombre de questions"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),l.jsx("span",{})]})]})]})}),l.jsx(Cl,{$bgColor:e,onClick:()=>m("Aléatoire"),children:l.jsxs(Ll,{$mainBgColor:g("Aléatoire"),$fontColor:n,children:[l.jsx(Kl,{$color:a,children:"Mode de jeu"}),l.jsxs(bj,{children:[l.jsx("span",{children:"ランダム"}),l.jsx("span",{children:"Aléatoire"})]})]})}),r.pathname.includes("/Vocabulaire")||r.pathname.includes("/Kanji")?l.jsx(Cl,{$bgColor:e,onClick:()=>m("N5"),children:l.jsxs(Ll,{$mainBgColor:g("N5"),$fontColor:n,children:[l.jsx(Kl,{$color:a,children:"Mode de jeu"}),l.jsx(Tj,{children:"N5"}),l.jsx($j,{children:"JLPT"})]})}):null,l.jsx(Cl,{$bgColor:e,onClick:()=>k("Choisir ses questions"),children:l.jsxs(Ll,{$mainBgColor:g("Choisir ses questions"),$fontColor:n,children:[l.jsx(Kl,{$color:a,children:"Mode de jeu"}),l.jsxs(Sj,{children:["Choisir ses ",d.modeTitle]})]})})]})}const Hj=j.div`
    display: flex;
    width: calc(100% - 5vw);
    height: 20vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    gap: 0.6vw;
    margin-right: 3vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        width: 90%;
        align-items: center;
        padding: 3vw;
        margin-right: 0vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`,Dj=j.span`
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 40%;
    max-width: 40%;
    height: 100%;
    text-align: center;
    padding-left: 2vw;
    padding-right: 2vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        max-width: 100%;
        width: 100%;
        padding:0;
        border-radius: 3vw;
        height: 35vw;
    }
`,zj=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    min-width: 60%;
    height: 100%;
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        max-width: 100%;
        width: 100%;
        height: 35vw;
        gap: 1.5vw;
    }
`,Jj=j.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 50%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;   
    }
`,Wu=j.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width:50%;
    height: 100%;
    font-size: 3.5vw;
    font-weight: 700;
    padding: 0vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        font-size: 7vw;  
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.03);
    }
`,Fj=j.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 50%;
    font-size: 3.5vw;
    font-weight: 700;
    padding: 0vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        font-size: 7vw;  
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.015);
    }
`;function _t(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(m=>m.mode),{color:a}=P(m=>m.color),t=He(),r=ce(),[o,s]=K.useState(null),u=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),d=m=>{t(y0(m)),s(m)},p=m=>o===m?a:i;return l.jsxs(Hj,{$bgColor:e,id:"SectionNombreDeQuestions",children:[l.jsxs(Dj,{$color:a,$fontColor:n,children:["Nombre de ",u.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsxs(zj,{children:[l.jsxs(Jj,{children:[l.jsx(Wu,{$fontColor:n,$mainBgColor:p(10),onClick:()=>d(10),children:"10"}),l.jsx(Wu,{$fontColor:n,$mainBgColor:p(20),onClick:()=>d(20),children:"20"})]}),l.jsx(Fj,{$fontColor:n,$mainBgColor:p(30),onClick:()=>d(30),children:"30"})]})]})}const _j="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='37'%20width='18.5'%20height='18.5'%20fill='%23F7F7F2'/%3e%3crect%20x='37'%20width='24'%20height='19'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='8'%20width='18'%20height='46'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='17'%20width='18'%20height='20'%20fill='%23F7F7F2'/%3e%3cpath%20d='M56%200H69C71.7614%200%2074%202.23858%2074%205V19H56V0Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='48'%20fill='%23F7F7F2'/%3e%3crect%20x='12'%20y='56'%20width='25'%20height='18'%20fill='%23F7F7F2'/%3e%3cpath%20d='M0%2056H19V74H5C2.23858%2074%200%2071.7614%200%2069V56Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='19'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Aj=j.div`
    display: flex;
    padding: 1vw;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    margin-right: 3vw;
    width: calc(100% - 5vw);
    height: 25vw;
    @media screen and (max-width: 560px) {
        margin: 0;
        max-width: 100vw;
        width: 90%;
        height: 100%;
        padding: 3vw;
        border-radius: 4vw;
        flex-direction: column-reverse;
        gap: 1.5vw;
    }
`,Bj=j.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 30%;
    height: 100%;
    border: none;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 100%;
        border-radius: 3vw;
        height: 70vw;
    }
    img{
        width: 7vw;
        height: 7vw;
        transform: translateY(0.7vw);
        @media screen and (max-width: 560px) {
            width: 20vw;
            height: 20vw;
        }
    }
    &:hover{
        transform: scale(1.02);
    }
`,Ij=j.div`
    font-size: 2vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,Vj=j.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            width: 8vw;
        }
    }
`,Wj=j.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 100%;
        }
`,Uj=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 1.5vw;
    }
`,Qj=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100% ;
    height: 40%;
    font-size: 2vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 28vw;
        font-size: 6vw;
        border-radius: 3vw;
        text-align: center;
    }
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            text-align: center;
            top: 3vw;
        }
    }
    span:nth-child(2){
        color: ${e=>e.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            bottom: 3vw;
        }
    }
`,qj=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100% ;
    height: 60%;
    font-size: 2vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 28vw;
        font-size: 6vw;
        border-radius: 3vw;
    }
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            text-align: center;
            top: 3vw;
        }
    }
    span:nth-child(2){
        color: ${e=>e.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            bottom: 3vw;
        }
    }
`,Zj=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:35% ;
    height: 100%;
    font-size: 2vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 40vw;
        font-size: 6vw;
        border-radius: 3vw;
    }
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        right: 1vw;
        width: 70%;
        text-align: end;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            text-align: center;
            top: 3vw;
        }
    }
    span:nth-child(2){
        color: ${e=>e.$color};
        position: absolute;
        bottom: 1vw;
        left: 2vw;
        font-size: 5vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            left: 50%;
            transform: translateX(-50%);
            bottom: 3vw;
            font-size: 10vw;
        }
    }
`,Gj=j.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,Yj=j.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 50vw;
    height: 85%;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90vw;
        height: 80%;
        gap: 3vw
    }
`,Xj=j.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;   
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
            border-radius: 3vw;
        }
    img{
        width: 3vw;
        height: 3vw;
        @media screen and (max-width: 560px) {
            width: 9vw;
            height: 9vw;
        }
    }
    &:hover{
        transform: scale(1.1);
    }
`,bl=j.button`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100%;
    max-height: 50%;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    z-index: 101;
    padding: 1vw;
    gap: 0.6vw;
    font-size: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 90vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw
    }
    &:hover{
        transform: scale(1.04);
        
    }
    span{
        color: ${e=>e.$color};
        margin-left: 0.4vw;
        @media screen and (max-width: 560px) {
            margin-left: 1.4vw;
        }
    }
    h1{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            border-radius: 1.5vw;
            font-size: 4vw;
            height: 30%;
        }
    }
    div{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        height: 60%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            border-radius: 1.5vw;
            height: 70%;
        }
        p{
            font-size: 1.5vw;
            margin-left: 0.4vw;
            @media screen and (max-width: 560px) {
                font-size: 4.5vw;
                width: 90%;
            }
        }
    }
`;function At(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(w=>w.mode),{color:a}=P(w=>w.color),t=P(w=>w.parametersExercice.exerciceDifficulté),r=P(w=>w.parametersExercice.exerciceModeDeJeu),o=P(w=>w.parametersExercice.exerciceNumber),s=ce(),c=fi(),d=(()=>{switch(s.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return{modeTitle:"Accueil"}}})(),p=P(w=>w.parametersExercice.exerciceModeDeJeu),m=P(w=>w.parametersExercice.exerciceNumber),g=P(w=>w.parametersExercice.exerciceDifficulté),[R,y]=K.useState(!1);K.useEffect(()=>{R&&c(`/Exercices/${d.modeTitle}`)},[R,c,d.modeTitle]);const k=(w,x)=>{document.querySelector(w).style.display=x?"flex":"none"},h=()=>{const w=p==="",x=m===0,C=g==="";w||x||C?(document.querySelector(".Alert").style.display="block",y(!1),k(".AlertMode",w),k(".AlertNbQuestion",x),k(".AlertDifficulte",C)):y(!0)},f=()=>{document.querySelector(".Alert").style.display="none",k(".AlertMode",!1),k(".AlertNbQuestion",!1),k(".AlertDifficulte",!1)},v=w=>()=>{const x=document.getElementById(`Section${w}`);x?(document.querySelector(".Alert").style.display="none",window.innerWidth<=560?x.scrollIntoView({behavior:"smooth",block:"start"}):x.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${w}`)};return l.jsxs(Aj,{$bgColor:e,children:[l.jsx(Gj,{className:"Alert",children:l.jsxs(Yj,{children:[l.jsx(Xj,{onClick:f,$color:a,children:l.jsx("img",{src:Io})}),l.jsxs(bl,{onClick:v("Difficulte"),className:"AlertDifficulte",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner une ",l.jsx("span",{children:"difficulté"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Selon la difficulté choisie, plus ou moins d'aide vous sera proposée"}),l.jsx("span",{})]})]}),l.jsxs(bl,{onClick:v("NombreDeQuestions"),className:"AlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"nombre de questions"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),l.jsx("span",{})]})]}),l.jsxs(bl,{onClick:v("ModeDeJeu"),className:"AlertMode",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"mode de jeu"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Le mode de jeu influencera les questions qui vous seront posées lors de l'exercice"}),l.jsx("span",{})]})]})]})}),l.jsxs(Bj,{id:"exercice",$color:a,onClick:h,children:[l.jsx(Ij,{children:"Commencer"}),l.jsx("img",{src:_j}),l.jsxs(Vj,{children:[l.jsx("span",{children:"はじ"}),l.jsxs(Wj,{children:[l.jsx("span",{children:"始"}),l.jsx("span",{children:"める"})]})]})]}),l.jsxs(Uj,{children:[l.jsxs(Qj,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Mode de jeu"}),l.jsx("span",{children:r})]}),l.jsxs(qj,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Difficulté"}),l.jsx("span",{children:t})]})]}),l.jsxs(Zj,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsxs("span",{children:["Nombre de ",d.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsx("span",{children:o})]})]})}const C0=({mainColor:e,color:n,width:i="2.5vw",height:a="2.5vw"})=>l.jsxs("svg",{width:i,height:a,viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M47.1066 7.13958L47.1138 7.14652L47.1207 7.15373L50.5746 10.7515C52.4517 12.7069 53.5 15.3125 53.5 18.0231V27V44C53.5 49.2467 49.2467 53.5 44 53.5H28.04H10C4.75329 53.5 0.5 49.2467 0.5 44V10C0.5 4.7533 4.7533 0.5 10 0.5H27H35.9722C38.6858 0.5 41.2939 1.5505 43.2499 3.43125L47.1066 7.13958Z",fill:e,stroke:e}),l.jsx("rect",{width:"40.56",height:"6.76",rx:"3.38",transform:"matrix(-1 0 0 1 47.28 42.0798)",fill:n}),l.jsx("rect",{width:"40.56",height:"6.76",rx:"3.38",transform:"matrix(-1 0 0 1 47.28 33.24)",fill:n}),l.jsx("path",{d:"M37 1H9V13C9 15.7614 11.2386 18 14 18H32C34.7614 18 37 15.7614 37 13V1Z",fill:n}),l.jsx("rect",{width:"7.28",height:"11.44",rx:"3.64",transform:"matrix(-1 0 0 1 18 3)",fill:e})]});C0.propTypes={mainColor:M.string,color:M.string,width:M.string,height:M.string};const L0="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0547'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0547)'%20fill='%23353535'/%3e%3crect%20x='14.5542'%20y='48.9951'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9951)'%20fill='%23353535'/%3e%3c/svg%3e",e5="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H21V21H0V5Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M32%200H48C50.7614%200%2053%202.23858%2053%205V22H32V0Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M21%2051H42V74H26C23.2386%2074%2021%2071.7614%2021%2069V51Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M52%2021H69C71.7614%2021%2074%2023.2386%2074%2026V42H52V21Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M0%2032H23V53H5C2.23858%2053%200%2050.7614%200%2048V32Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M53%2053H74V69C74%2071.7614%2071.7614%2074%2069%2074H53V53Z'%20fill='%2378FB8C'/%3e%3crect%20x='21'%20y='21'%20width='32'%20height='32'%20fill='%2378FB8C'/%3e%3c/svg%3e",n5="data:image/svg+xml,%3csvg%20width='75'%20height='74'%20viewBox='0%200%2075%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H22V74H5C2.23858%2074%200%2071.7614%200%2069V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M53%200H70C72.7614%200%2075%202.23858%2075%205V69C75%2071.7614%2072.7614%2074%2070%2074H53V0Z'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20y='61'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='40'%20y='48'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='40'%20y='13'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20y='26'%20width='14'%20height='22'%20fill='%239ED7FF'/%3e%3c/svg%3e",i5="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H27L13.5%2013.5L0%2027V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M60%2061.5L74%2047V69C74%2071.7614%2071.7614%2074%2069%2074H47L60%2061.5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M29.5%2029.5L59%200H69C71.7614%200%2074%202.23858%2074%205V14L44.5%2044.5L16%2074H5C2.23858%2074%200%2071.7614%200%2069V59L29.5%2029.5Z'%20fill='%23FFC370'/%3e%3crect%20x='22'%20y='22'%20width='30'%20height='30'%20rx='5'%20fill='%23FFC370'/%3e%3c/svg%3e",a5="data:image/svg+xml,%3csvg%20width='75'%20height='74'%20viewBox='0%200%2075%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='32'%20width='10'%20height='74'%20fill='%23FF9E9E'/%3e%3crect%20y='42'%20width='10'%20height='74'%20transform='rotate(-90%200%2042)'%20fill='%23FF9E9E'/%3e%3crect%20x='23'%20y='23'%20width='28'%20height='28'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H28V28H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M47%2046H75V69C75%2071.7614%2072.7614%2074%2070%2074H47V46Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M47%200H70C72.7614%200%2075%202.23858%2075%205V28H47V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2046H28V74H5C2.23858%2074%200%2071.7614%200%2069V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",t5=j.div`
    display: flex;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(100% - 5vw);
    height: 17vw;
    gap: 0.6vw;
    @media screen and (max-width: 560px){
        flex-direction: column;
        height: 100%;
        border-radius: 4vw;
        padding: 3vw;
        width: 90%;
        gap: 1.5vw;
    }
`,r5=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
    @media screen and (max-width: 560px){
        width: 100%;
        height: 50vw;
        gap: 1.5vw;
    }
    p{
        font-size: 2vw;
        color: ${e=>e.$fontColor};
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        height: 45%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 7vw;
        }
    }
`,o5=j.div`
    display: flex;
    gap: 0.6vw;
    width: 100%;
    height: 100%;
    position: relative;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
    &::after{
        content: '';
        height: 100%;
        width: 100%;
        background-color: ${e=>e.$color};
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.5vw;
        z-index: 100;
        background-color: #858585c1;
        @media screen and (max-width: 560px) {
            border-radius: 3vw;  
        }
    }
    &::before{
        content: 'a venir';
        font-size: 2vw;
        text-transform: uppercase;
        font-weight: bold;
        position: absolute;
        color: #F7F7F2;
        top: 50%;
        left: 50%;
        z-index: 101;
        transform: translate(-50%, -50%);
        @media screen and (max-width: 560px) {
            font-size: 5vw;    
        }
    }
`,l5=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    width: 45%;
    min-height: 65%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
    button{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            border-radius: 3vw;   
        }
        &:hover{
            transform: scale(1.02);
        }
        span{
            font-size: 1.5vw;
            color: ${e=>e.$color};
            font-weight: bold;
            @media screen and (max-width: 560px) {
                font-size: 7vw;   
            }
        }
    }
    div{
        display: flex;
        min-height: 50%;
        gap: 0.6vw;
        @media screen and (max-width: 560px){
            gap: 1.5vw;
        }
        button{
            background-color: ${e=>e.$mainBgColor};
            border-radius: 0.5vw;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            @media screen and (max-width: 560px) {
                border-radius: 3vw;   
            }
            &:hover{
                transform: scale(1.02);
            }
        }
        button:nth-child(1){
            background-color: ${e=>e.$color};
        }
    }
`,s5=j.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6vw;
    width: 55%;
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
            border-radius: 3vw;  
            gap: 1.5vw; 
        }
    div{
        width: 50%;
        height: 90%;
        border-radius: 0.5vw;
        background-color: ${e=>e.$color};
        @media screen and (max-width: 560px) {
            border-radius: 3vw;   
        }
    }
    div:nth-child(1){
        margin-left: 0.5vw;
        @media screen and (max-width: 560px) {
            margin-left: 1.5vw;  
        }
    }
    div:nth-child(2){
        margin-right: 0.5vw;
        @media screen and (max-width: 560px) {
            margin-right: 1.5vw;  
        }
    }

`,c5=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: 65%;
    @media screen and (max-width: 560px){
        width: 100%;
        gap: 1.5vw;
    }
`,pr=j.button`
    width: 49.4%;
    border-radius: 0.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    display: flex;
    flex-direction: column;
    position: relative;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px){
        width: 100%;
        height: 40vw;
        border-radius: 3vw;
    }
    h3{
        font-size: 1.5vw;
        color: ${e=>e.$color};
        margin-top: 0.3vw;
        margin-left: 0.5vw;
        @media screen and (max-width: 560px){
            font-size: 7vw;
            margin-top: 1vw;
            margin-left: 1.5vw;
        }
    }
    p{
        font-size: 1vw;
        margin-left: 0.5vw;
        margin-top: -0.4vw;
        @media screen and (max-width: 560px){
            font-size: 5vw;
            margin-top: -0.7vw;
            margin-left: 1.5vw;
            text-align:left;
            width: 70%;
        }
    }
    img{
        position: absolute;
        @media screen and (max-width: 560px){
            right: 2.5vw;
            bottom: 2.5vw;
            width: 18vw;
        }
        right: 0.5vw;
        bottom: 0.5vw;
        width: 4.5vw;
    }
    &:hover{
        transform: scale(1.02);
    }
`;function Bt(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(u=>u.mode),{color:a}=P(u=>u.color),t=localStorage.getItem("mode")||"light",r=window.innerWidth<=560?"10vw":"3vw",o=He(),s=ce(),c=u=>{window.scrollTo({top:document.querySelector("#exercice").offsetTop,behavior:"smooth"});const p={"Premier pas":{difficulté:"Débutant",number:10,typeDeKana:"normal",modeDeJeu:"N5"},Découverte:{difficulté:"Débutant",number:20,typeDeKana:"normal",modeDeJeu:"N5"},"Développement Avancé":{difficulté:"Intermédiaire",number:20,typeDeKana:"tout",modeDeJeu:"Aléatoire"},"Mises à Jour":{difficulté:"Confirmé",number:30,typeDeKana:"tout",modeDeJeu:"Aléatoire"}}[u];p&&(o(j0(p.difficulté)),o(y0(p.number)),o(Qc(p.typeDeKana)),s.pathname==="/Hiragana"||s.pathname==="/Nihongo-V2/Hiragana"||s.pathname==="/Katakana"||s.pathname==="/Nihongo-V2/Katakana"?o(ca("Aléatoire")):o(ca(p.modeDeJeu)))};return l.jsxs(t5,{$bgColor:e,children:[l.jsxs(r5,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("p",{children:"Prereglage Exercices"}),l.jsxs(o5,{children:[l.jsxs(l5,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsxs("div",{children:[l.jsx("button",{children:l.jsx(C0,{width:r,height:r,color:a,mainColor:i})}),l.jsx("button",{children:l.jsx("img",{src:t==="light"?L0:Io})})]}),l.jsx("button",{children:l.jsx("span",{children:"Créer"})})]}),l.jsxs(s5,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("div",{}),l.jsx("div",{})]})]})]}),l.jsxs(c5,{children:[l.jsxs(pr,{onClick:()=>c("Premier pas"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Premier pas"}),l.jsx("p",{children:"Parfait pour découvrir"}),l.jsx("img",{src:e5})]}),l.jsxs(pr,{onClick:()=>c("Découverte"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Découverte"}),l.jsx("p",{children:"Parfait pour en apprendre plus"}),l.jsx("img",{src:n5})]}),l.jsxs(pr,{onClick:()=>c("Développement Avancé"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Développement Avancé"}),l.jsx("p",{children:"Parfait pour développer ses compétences"}),l.jsx("img",{src:i5})]}),l.jsxs(pr,{onClick:()=>c("Mises à Jour"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Mises à Jour"}),l.jsx("p",{children:"Parfait pour continue à se perfectionner"}),l.jsx("img",{src:a5})]})]})]})}const d5=j.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`;function u5(){return l.jsxs(d5,{children:[l.jsx(ba,{}),l.jsx(zt,{}),l.jsx(Bt,{}),l.jsx(Jt,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(At,{})]})}const g5=j.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`;function p5(){return l.jsxs(g5,{children:[l.jsx(ba,{}),l.jsx(zt,{}),l.jsx(Bt,{}),l.jsx(Jt,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(At,{})]})}const f5=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    width: calc(100% - 3vw);
    height: 100%;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        max-width: 100vw;
        width: 100%;
        align-items: center;
        gap: 3vw;
    }
    
`,fr=j.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;
        width: 24.19%;
        height: 15vw;
        background-color: ${e=>e.$bgColor};
        border-radius: 0.8vw;
        padding: 1vw;
        @media screen and (max-width: 560px) {
            width: calc(100% - 4vw);
            padding: 3vw;
            height: 45vw;
            border-radius: 4vw;
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5vw;
            width: 100%;
            height: 100%;
            background-color: ${e=>e.$mainBgColor};
            border-radius: 0.5vw;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            @media screen and (max-width: 560px) {
                border-radius: 3vw;
                gap: 1.5vw;
            }
        }
        p {
            font-size: 2vw;
            color: ${e=>e.$fontColor};
            text-transform: capitalize;
            @media screen and (max-width: 560px) {
                font-size: 7vw;
            }
        }
        p:first-child {
            color: ${e=>e.$color};
            font-weight: 700;
        }
        &:hover {
            div{
                transform: scale(1.04);
            }
        }

`;function K0(){const e=ce(),n=He(),{bgColor:i,fontColor:a,mainBgColor:t}=P(g=>g.mode),{color:r}=P(g=>g.color),[o,s]=K.useState(null),u=(()=>{switch(e.pathname){case"/Katakana":return{normal:"キ",accents:"ギ",combinaison:"ギャ",tout:"キギギャ"};case"/Hiragana":return{normal:"き",accents:"ぎ",combinaison:"きゃ",tout:"きぎきゃ"};default:return null}})();if(!u)return l.jsx("div",{children:"Chemin non pris en charge"});const d=g=>{n(Qc(g)),s(g)},p=g=>o===g?r:t,m=g=>o===g?t:a;return l.jsxs(f5,{children:[l.jsx(fr,{onClick:()=>d("normal"),$bgColor:i,$fontColor:a,$color:m("normal"),$mainBgColor:p("normal"),children:l.jsxs("div",{children:[l.jsx("p",{children:u.normal}),l.jsx("p",{children:"normal"})]})}),l.jsx(fr,{onClick:()=>d("accents"),$bgColor:i,$fontColor:a,$color:m("accents"),$mainBgColor:p("accents"),children:l.jsxs("div",{children:[l.jsx("p",{children:u.accents}),l.jsx("p",{children:"accents"})]})}),l.jsx(fr,{onClick:()=>d("combinaison"),$bgColor:i,$fontColor:a,$color:m("combinaison"),$mainBgColor:p("combinaison"),children:l.jsxs("div",{children:[l.jsx("p",{children:u.combinaison}),l.jsx("p",{children:"combinaison"})]})}),l.jsx(fr,{onClick:()=>d("tout"),$bgColor:i,$fontColor:a,$color:m("tout"),$mainBgColor:p("tout"),children:l.jsxs("div",{children:[l.jsx("p",{children:u.tout}),l.jsx("p",{children:"tout"})]})})]})}const m5=j.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`;function h5(){return l.jsxs(m5,{children:[l.jsx(ba,{}),l.jsx(zt,{}),l.jsx(Bt,{}),l.jsx(Jt,{}),l.jsx(K0,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(At,{})]})}const v5=j.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`;function w5(){return l.jsxs(v5,{children:[l.jsx(ba,{}),l.jsx(zt,{}),l.jsx(Bt,{}),l.jsx(Jt,{}),l.jsx(K0,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(At,{})]})}const R5=j.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`;function j5(){return l.jsxs(R5,{children:[l.jsx(ba,{}),l.jsx(zt,{}),l.jsx(Bt,{}),l.jsx(Jt,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(At,{})]})}const y5=j.div`
    display: flex;
    gap: 1vw;
    width: calc(100% - 21vw);
    height: 23.4vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 3vw;
    }
 `,Uu=j(mi)`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 50%;
    
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    div{
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
    }
    &:hover{
        div{
            transform: scale(1.025);
        }
    }
`,Qu=j.div`
    display: flex;
    gap: 1.5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 100%;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        gap: 1.5vw;
    }
    span:nth-child(1){
        font-size: 1.5vw;
        color: ${e=>e.$color};
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
    span:nth-child(2){
        font-size: 9vw;
        font-weight: 700;
        max-height: 9vw;
        transform: translateY(-2vw);
        @media screen and (max-width: 560px) {
            font-size: 25vw;
            max-height: 100%;
            transform: translateY(-1.8vw);
        }
    }
    span:nth-child(3){
        font-size: 1.5vw;
        font-weight: 500;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
`;function x5(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(s=>s.mode),{color:a}=P(s=>s.color),t=ce(),o=(()=>{switch(t.pathname){case"/Dictionnaire/Kanji":return{titleFurigana1:"ひらがな",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Hiragana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"カタカナ",titleKanji2:"ア",titleFr2:"katakana",link2:"/Dictionnaire/Katakana"};case"/Dictionnaire/Katakana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Vocabulaire":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ばんごう",titleKanji2:"番号",titleFr2:"Nombres",link2:"/Dictionnaire/Nombres"};case"/Dictionnaire/Nombres":return{titleFurigana1:"ごい",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"かんじ",titleKanji2:"漢字",titleFr2:"kanji",link2:"/Dictionnaire/Kanji"};default:return"Accueil"}})();return l.jsxs(y5,{children:[l.jsx(Uu,{$bgColor:e,to:o.link1,children:l.jsxs(Qu,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{children:o.titleFr1})]})}),l.jsx(Uu,{$bgColor:e,to:o.link2,children:l.jsxs(Qu,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana2}),l.jsx("span",{children:o.titleKanji2}),l.jsx("span",{children:o.titleFr2})]})})]})}const b0=({color:e,width:n="3.5vw",height:i="3.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("circle",{cx:"18.983",cy:"18.9829",r:"11",transform:"rotate(-45 18.983 18.9829)",stroke:e,strokeWidth:"4.84598"}),l.jsx("rect",{x:"23.7218",y:"27.2935",width:"5.32537",height:"22.0876",rx:"2.66269",transform:"rotate(-45 23.7218 27.2935)",fill:e,stroke:e})]});b0.propTypes={color:M.string,width:M.string,height:M.string};const ue=({color:e,width:n="3.5vw",height:i="3.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{x:"19.4456",y:"14.4956",width:"48",height:"7",rx:"3",transform:"rotate(45 19.4456 14.4956)",fill:e}),l.jsx("rect",{x:"14.4956",y:"48.437",width:"48",height:"7",rx:"3",transform:"rotate(-45 14.4956 48.437)",fill:e})]});ue.propTypes={color:M.string,width:M.string,height:M.string};const k5=j.div`
    position: relative;
    min-width: 60%;
    width: 100%;
    max-width: 100%;
    height: calc(3vw - (0.15vw * 2)); ;
    display: flex;
    align-items: center;
    @media screen and (max-width: 560px) {
        height: 16vw;
    }
    button{
        position: absolute;
        right: 2vw;
        top: 50%;
        transform: translateY(-50%);
        width: 3vw;
        background-color: transparent;
        @media screen and (max-width: 560px) {
            right: 0vw;
            width: 13vw;
            height: 100%;
        }
    }
`,P5=j.input` 
    width: 100%;
    height: 100%;
    padding: 1vw;
    border-radius: 0.5vw;
    border: none;
    background-color: #f1f1f1;
    border: 0.15vw solid ${e=>e.$color};
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    font-size: 2vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;  
        font-size: 6vw;   
        padding-left: 3vw ;
        padding-bottom: 0;
        padding-top: 0;
    }
    &::placeholder{
        color: ${e=>e.$fontColor};
        font-size: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;        
        }
    }
`;function Ga({onSearchChange:e}){const{fontColor:n,mainBgColor:i}=P(g=>g.mode),{color:a}=P(g=>g.color),t=P(g=>g.search.searchText),r=ce(),[o,s]=K.useState(""),u=(()=>{switch(r.pathname){case"/Dictionnaire/Kanji":case"/choisir-ses/Kanji":return{titleFr:"Kanji"};case"/Dictionnaire/Hiragana":case"/choisir-ses/Hiragana":return{titleFr:"Hiragana"};case"/Dictionnaire/Katakana":case"/choisir-ses/Katakana":return{titleFr:"Katakana"};case"/Dictionnaire/Vocabulaire":case"/choisir-ses/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Dictionnaire/Nombres":case"/choisir-ses/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),d=g=>{s(g.target.value),e(g.target.value)},p=()=>{s(""),e("")},m=window.innerWidth<=560?"10vw":"3.5vw";return l.jsxs(k5,{children:[l.jsx(P5,{type:"text",placeholder:`Rechercher un ${u.titleFr}`,value:t||o,onChange:d,$color:a,$mainBgColor:i,$fontColor:n}),t?l.jsx("button",{onClick:p,children:l.jsx(ue,{width:m,height:m,color:a})}):l.jsx("button",{children:l.jsx(b0,{width:m,height:m,color:a})})]})}Ga.propTypes={onSearchChange:M.func.isRequired};const C5=j.div`
    display: flex;
    gap: 0.6vw;
    height: 100%;
    min-width: calc(40% - 0.7vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: 100%;
        flex-wrap: wrap;
        justify-content: flex-start !important;
    }
    button{
        width: 25%;
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        font-size: 2.5vw;
        font-weight: 700;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 32%;
            padding: 3vw;
            border-radius: 3vw;
        }
        &:hover{
            transform: scale(1.1);
        }
    }
`;function Fs({filterJlpt:e}){const[n,i]=K.useState("N5"),a=s=>{const c=s.target.value;n===c?(i(""),e("")):(i(c),e(c))},{fontColor:t,mainBgColor:r}=P(s=>s.mode),{color:o}=P(s=>s.color);return l.jsxs(C5,{name:"jlpt",id:"jlpt",value:n,$mainBgColor:r,$fontColor:t,$color:o,children:[l.jsx("button",{value:"N5",onClick:a,children:"N5"}),l.jsx("button",{value:"N4",onClick:a,children:"N4"}),l.jsx("button",{value:"N3",onClick:a,children:"N3"}),l.jsx("button",{value:"N2",onClick:a,children:"N2"}),l.jsx("button",{value:"N1",onClick:a,children:"N1"})]})}Fs.propTypes={filterJlpt:M.func.isRequired};const L5=j.div`
    display: flex;
    gap: 0.6vw;
    height: 100%;
    min-width: calc(40% - 0.7vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: 100%;
    }
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        font-size: 1.8vw;
        font-weight: 700;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 6.5vw;
            width: 32%;
            padding: 3vw;
            border-radius: 3vw;
        }
        &:hover{
            transform: scale(1.03);
        }
    }
    button:nth-child(1){
        width: 60%;
    }
    button:nth-child(2){
        width: 40%;
    }
`;function T0({filterKana:e}){const{fontColor:n,mainBgColor:i}=P(s=>s.mode),{color:a}=P(s=>s.color),[t,r]=K.useState("N5"),o=s=>{const c=s.target.value;t===c?(r(""),e("")):(r(c),e(c))};return l.jsxs(L5,{name:"Kana",id:"Kana",value:t,$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("button",{value:"Combinaison",onClick:o,children:"Combinaisons"}),l.jsx("button",{value:"Accents",onClick:o,children:"Accents"})]})}T0.propTypes={filterKana:M.func.isRequired};const K5=[{filtre:"nombres et quantificateurs"},{filtre:"verbes"},{filtre:"verbes d’action"},{filtre:"adjectifs"},{filtre:"nom"},{filtre:"mots de liaison et particules"},{filtre:"expressions temporelles"},{filtre:"formules de politesse"},{filtre:"expressions idiomatiques"},{filtre:"langue informelle et argot"},{filtre:"émotions et sentiments"},{filtre:"les pays"},{filtre:"les membres de la famille"},{filtre:"les vêtements"},{filtre:"les couleurs"},{filtre:"le corps humain"},{filtre:"la nourriture"},{filtre:"santé et bien-être"},{filtre:"activités et loisirs"},{filtre:"les animaux"},{filtre:"nature et environnement"},{filtre:"temps et saisons"},{filtre:"culture et traditions japonaises"},{filtre:"lieux et directions"},{filtre:"les moyens de transport"},{filtre:"objets de bureau/école"},{filtre:"le matériel domestique"},{filtre:"les pièces de la maison"},{filtre:"vocabulaire lié au travail"},{filtre:"profession et métiers"},{filtre:"technologie et gadgets"}],b5={filtres:K5},T5="data:image/svg+xml,%3csvg%20width='87'%20height='27'%20viewBox='0%200%2087%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L43.5%2023L83%204'%20stroke='%23F7F7F2'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",$5=j.div`
    display: flex;
    gap: 0.6vw;
    max-height: 8.3vw;
    height: 100%;
    width: calc(100% - 5vw);
    border-radius: 0.8vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        max-height: 100%;
        width: 90%;
        padding: 3vw;
        flex-direction: column;
        align-items: center;
        border-radius: 4vw;
    }
`,S5=j.span`
    font-size: 2.5vw;
    font-weight: 700;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    min-height: 100%;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        width: 100%;
        border-radius: 3vw;
        padding: 0vw;
        padding-bottom: 3vw;
        padding-top: 3vw;
        max-height: 100%
    }
`,N5=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 1.5vw;
    }
`,O5=j.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    align-content: flex-start;
    gap: 1vw;
    border-radius: 0.5vw;
    padding: 1vw;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: ${e=>e.$mainBgColor};
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 3vw;
        max-height: 50vw;
        overflow: hidden;
    }
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${e=>e.$color};
        color:#F7F7F2;
        font-size: 1.5vw;
        font-weight: 700;
        text-transform: capitalize;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            padding: 3vw 6vw;
            width: 100%;
            border-radius: 3vw;
        }
        &:hover{
            transform: scale(1.07);
        }
    }
`,M5=j.button`
    max-width: 100%;
    max-height: 2vw;
    padding: 1vw;
    border-radius: 0.5vw;
    background-color: ${e=>e.$color};
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 560px) {
        padding: 5vw;
        border-radius: 3vw;
    }
    img{
        width: 3.5vw;
        height: 3.5vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
        @media screen and (max-width: 560px) {
            width: 5vw;
            height: 5vw;
        }
    }
    &:hover{
        img{
            transform: scale(1.1);
        }
    }
`;function $0({filterVocabulaire:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(d=>d.mode),{color:t}=P(d=>d.color),[r,o]=K.useState("Tous"),s=b5.filtres.map(d=>d.filtre),c=d=>{const p=d.target.value;r===p?(o(""),e("")):(o(p),e(p))},u=()=>{const d=document.querySelector(".VocabulaireFilterButtonContainer"),p=document.querySelector(".VocabulaireFilterContainer"),m=document.querySelector(".MoreButtonIcon");window.innerWidth>560?d&&p&&(d.style.overflow==="visible"?(d.style.overflow="hidden",p.style.maxHeight="8.3vw",m.style.transform="rotate(0deg)"):(d.style.overflow="visible",p.style.maxHeight="100%",m.style.transform="rotate(180deg)")):d&&p&&(d.style.overflow==="visible"?(d.style.overflow="hidden",d.style.maxHeight="50vw",m.style.transform="rotate(0deg)"):(d.style.overflow="visible",d.style.maxHeight="100%",m.style.transform="rotate(180deg)"))};return l.jsxs($5,{className:"VocabulaireFilterContainer",$bgColor:n,children:[l.jsx(S5,{$fontColor:i,$mainBgColor:a,children:"Filtre"}),l.jsxs(N5,{$mainBgColor:a,children:[l.jsx(O5,{className:"VocabulaireFilterButtonContainer",$mainBgColor:a,$color:t,onChange:c,value:r,children:s.map(d=>l.jsx("button",{value:d,onClick:c,children:d},d))}),l.jsx(M5,{$color:t,onClick:u,children:l.jsx("img",{className:"MoreButtonIcon",src:T5,alt:"More"})})]})]})}$0.propTypes={filterVocabulaire:M.func.isRequired};const E5=j.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        gap: 3vw;
        align-items: center;
        width: 100%;
    }
`,mr=j.div`
    display: flex;
    align-items: center;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(100% - 5vw);
    height: 5vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        height: 100%;
        width: 90%;
        gap: 3vw;
        padding: 3vw;
        border-radius: 4vw;
    }
`,H5=j.div`
    display: flex;
    gap: 1vw;
    flex-direction: column;
    div{
        @media screen and (max-width: 560px) {
        display: flex;
        justify-content: center;
    }
    }
    @media screen and (max-width: 560px) {
        gap: 1.5vw; 
        align-items: center;
    }
`;function S0(){const{bgColor:e}=P(s=>s.mode),n=He(),i=ce(),a=s=>{n(Wc(s.toLowerCase()))},t=s=>{n(Bw(s))},r=s=>{n(Uc(s))},o=s=>{n(Iw(s))};return l.jsxs(E5,{id:"recherche",children:[(i.pathname==="/Dictionnaire/Kanji"||i.pathname==="/choisir-ses/Kanji")&&l.jsxs(mr,{$bgColor:e,children:[l.jsx(Ga,{onSearchChange:a}),l.jsx(Fs,{filterJlpt:t})]}),(i.pathname==="/Dictionnaire/Vocabulaire"||i.pathname==="/choisir-ses/Vocabulaire")&&l.jsxs(H5,{children:[l.jsxs(mr,{$bgColor:e,children:[l.jsx(Ga,{onSearchChange:a}),l.jsx(Fs,{filterJlpt:t})]}),l.jsx("div",{children:l.jsx($0,{filterVocabulaire:o})})]}),(i.pathname==="/Dictionnaire/Katakana"||i.pathname==="/Dictionnaire/Hiragana"||i.pathname==="/choisir-ses/Katakana"||i.pathname==="/choisir-ses/Hiragana")&&l.jsxs(mr,{$bgColor:e,children:[l.jsx(Ga,{onSearchChange:a}),l.jsx(T0,{filterKana:r})]}),(i.pathname==="/Dictionnaire/Nombres"||i.pathname==="/choisir-ses/Nombres")&&l.jsx(mr,{$bgColor:e,children:l.jsx(Ga,{onSearchChange:a})})]})}const D5=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);;
    }
`,z5=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.38%;
    height: 21vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`,J5=j.p`
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    display: flex;
    align-items: center;
    padding-left: 1vw;
    font-size: 1vw;
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        padding-left: 3vw;
        padding-top: 1vw;
        padding-bottom: 1vw;
        border-radius: 3vw;
    }
    span{
        font-weight: bold;
        margin-right: 0.5vw;
        font-style: italic;
        @media screen and (max-width: 560px) {
            margin-right: 1.5vw;
        }
    }
`,F5=j.div`
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.5vw;
    height: 50%;
    max-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    h2{
        font-size: 3.8vw;
        font-weight: bold;
        color: ${e=>e.$color};
        @media screen and (max-width: 560px) {
            font-size: 13vw;
        }
    }
    p{
        font-size: 1.2vw;
        position: absolute;
        text-transform: capitalize;
        font-weight: 700;
        text-align: center;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
        }
    }
    p:first-child{
        top: 0.5vw;
        right: 1vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            top: 1.5vw;
            right: 3vw;
        }
    }
    p:last-child{
        bottom: 0.3vw;
        left:50% ;
        transform: translateX(-50%);
        @media screen and (max-width: 560px) {
            bottom: 2.5vw;
        }
    }
`,_5=j.div`
    display: flex;
    gap: 0.6vw;
    height: 25%;
    width: 100%;
    p{
        font-size: 1vw;
        border-radius: 0.5vw;
        display: flex;
        align-items: center;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            border-radius: 3vw;
        }
        span{
            font-weight: bold;
            margin-right: 0.5vw;
            font-style: italic;
            @media screen and (max-width: 560px) {
                margin-right: 1.5vw;
            }
        }
    }
    p:first-child{
        background-color: ${e=>e.$color};
        color:#F7F7F2;
        width: 30%;
        justify-content: center;
    }
    p:last-child{
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        max-width: 75%;
        width: 70%;
        padding-left: 1vw;
        padding-right: 1vw;
    }
`,A5=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 50%;
    height: 5vw;
    margin-left: 50% ;
    transform: translateX(-50%);
    @media screen and (max-width: 560px) {
        min-width: 93%;    
        height: 50vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    p{
        color: ${e=>e.$color};
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`;function qc({kanjiList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(d=>d.mode),{color:t}=P(d=>d.color),r=P(d=>d.dataChoice.kanji),o=P(d=>d.parametersExercice.exerciceNumber),s=He(),c=ce(),u=d=>{(r.includes(d)||r.length<o)&&c.pathname==="/choisir-ses/Kanji"&&s(qw(d))};return l.jsx(D5,{children:Array.isArray(e)&&e.length>0?e.map(d=>l.jsxs(z5,{$bgColor:n,onClick:()=>u(d),style:{backgroundColor:r.includes(d)?t:n,cursor:"pointer"},children:[l.jsxs(J5,{$fontColor:i,$mainBgColor:a,children:[l.jsx("span",{children:"Kun"})," ",d.KunReading.join(", ")]}),l.jsxs(F5,{$fontColor:i,$mainBgColor:a,$color:t,children:[d.SecondaryMeaning&&l.jsx("p",{children:d.SecondaryMeaning}),l.jsx("h2",{children:d.Kanji}),l.jsx("p",{children:d.Meaning})]}),l.jsxs(_5,{$fontColor:i,$mainBgColor:a,$color:t,children:[l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"})," ",d.JLPTLevel]}),l.jsxs("p",{children:[l.jsx("span",{children:"On"})," ",d.OnReading.join(", ")]})]})]},d.id)):l.jsx(A5,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}qc.propTypes={kanjiList:M.array.isRequired};const Kn="/Nihongo-V2/assets/icon-audio-Dmg04iGg.svg",B5=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,I5=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.37%;
    height: 20vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`,V5=j.p`
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
    font-weight: 700;
    border-radius: 0.5vw;
    text-transform: uppercase;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        border-radius: 3vw;
    }
`,W5=j.p`
    color: ${e=>e.$color};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.5vw;
    height: 50%;
    max-height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 3.8vw;
    font-weight: bold;
    @media screen and (max-width: 560px) {
        font-size: 15vw;
        border-radius: 3vw;
    }
`,_a=j.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`,Aa=j.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    img {
        width: 2.5vw;
        @media screen and (max-width: 560px) {
            width: 10vw;
        }
    }
`,xn=j.div`
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    button {
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
`,U5=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 50%;
    height: 5vw;
    margin-left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 560px) {
        min-width: 93%;    
        height: 50vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    p {
        color: ${e=>e.$color};
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`;function Zc({hiraganaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(g=>g.mode),{color:t}=P(g=>g.color),r=P(g=>g.dataChoice.hiragana),o=P(g=>g.parametersExercice.exerciceNumber),s=He(),c=ce(),u="",d=g=>{s(Wc(g)),s(Uc(u))},p=g=>{(r.includes(g)||r.length<o)&&c.pathname==="/choisir-ses/Hiragana"&&s(Yw(g))},m=window.innerWidth<=560?"14vw":"3.5vw";return l.jsx(B5,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var R,y,k,h,f,v,w,x;return l.jsxs(I5,{id:"item",$bgColor:n,onClick:()=>p(g),style:{backgroundColor:r.includes(g)?t:n,cursor:"pointer"},children:[l.jsx(V5,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(W5,{$color:t,$mainBgColor:a,children:g.Type==="Hiragana"?g.Hiragana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Hiragana:g.Handakuten}),g.Type==="Hiragana"?l.jsxs(_a,{children:[l.jsx(Aa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(xn,{onClick:()=>{var C;return d((C=g.Accent)==null?void 0:C.Dakuten)},$fontColor:i,$mainBgColor:a,children:((R=g.Accent)==null?void 0:R.Dakuten)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:(y=g.Accent)==null?void 0:y.Dakuten})}),l.jsx(xn,{onClick:()=>{var C;return d((C=g.Accent)==null?void 0:C.Handakuten)},$fontColor:i,$mainBgColor:a,children:((k=g.Accent)==null?void 0:k.Handakuten)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:(h=g.Accent)==null?void 0:h.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(_a,{children:[l.jsx(Aa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(xn,{onClick:()=>d(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((f=g.Accent)==null?void 0:f.Hiragana)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Hiragana})}),l.jsx(xn,{onClick:()=>d(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(_a,{children:[l.jsx(Aa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(xn,{onClick:()=>d(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((v=g.Accent)==null?void 0:v.Hiragana)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Hiragana})}),l.jsx(xn,{onClick:()=>d(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Dakuten===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(_a,{children:[l.jsx(Aa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(xn,{onClick:()=>d(g.Hiragana1),$fontColor:i,$mainBgColor:a,children:((w=g.Accent)==null?void 0:w.Hiragana1)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Hiragana1})}),l.jsx(xn,{$fontColor:i,$mainBgColor:a,children:((x=g.Accent)==null?void 0:x.Hiragana2)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Hiragana2})})]}):l.jsxs(_a,{children:[l.jsx(Aa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(xn,{$fontColor:i,$mainBgColor:a,children:l.jsx(ue,{width:m,height:m,color:t})}),l.jsx(xn,{$fontColor:i,$mainBgColor:a,children:l.jsx(ue,{width:m,height:m,color:t})})]})]},g.id)}):l.jsx(U5,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Zc.propTypes={hiraganaList:M.array.isRequired};const Q5=[{id:1,Type:"Hiragana",Hiragana:"あ",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:2,Type:"Hiragana",Hiragana:"い",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:3,Type:"Hiragana",Hiragana:"う",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:4,Type:"Hiragana",Hiragana:"え",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:5,Type:"Hiragana",Hiragana:"お",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:6,Type:"Hiragana",Hiragana:"か",Romaji:"ka",Accent:{Dakuten:"が",Handakuten:null},Combinaison:[]},{id:7,Type:"Hiragana",Hiragana:"き",Romaji:"ki",Accent:{Dakuten:"ぎ",Handakuten:null},Combinaison:[{Hiragana:"きゃ",Romaji:"kya"},{Hiragana:"きゅ",Romaji:"kyu"},{Hiragana:"きょ",Romaji:"kyo"},{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:8,Type:"Hiragana",Hiragana:"く",Romaji:"ku",Accent:{Dakuten:"ぐ",Handakuten:null},Combinaison:[]},{id:9,Type:"Hiragana",Hiragana:"け",Romaji:"ke",Accent:{Dakuten:"げ",Handakuten:null},Combinaison:[]},{id:10,Type:"Hiragana",Hiragana:"こ",Romaji:"ko",Accent:{Dakuten:"ご",Handakuten:null},Combinaison:[]},{id:11,Type:"Hiragana",Hiragana:"さ",Romaji:"sa",Accent:{Dakuten:"ざ",Handakuten:null},Combinaison:[]},{id:12,Type:"Hiragana",Hiragana:"し",Romaji:"shi",Accent:{Dakuten:"じ",Handakuten:null},Combinaison:[{Hiragana:"しゃ",Romaji:"sha"},{Hiragana:"しゅ",Romaji:"shu"},{Hiragana:"しょ",Romaji:"sho"},{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:13,Type:"Hiragana",Hiragana:"す",Romaji:"su",Accent:{Dakuten:"ず",Handakuten:null},Combinaison:[]},{id:14,Type:"Hiragana",Hiragana:"せ",Romaji:"se",Accent:{Dakuten:"ぜ",Handakuten:null},Combinaison:[]},{id:15,Type:"Hiragana",Hiragana:"そ",Romaji:"so",Accent:{Dakuten:"ぞ",Handakuten:null},Combinaison:[]},{id:16,Type:"Hiragana",Hiragana:"た",Romaji:"ta",Accent:{Dakuten:"だ",Handakuten:null},Combinaison:[]},{id:17,Type:"Hiragana",Hiragana:"ち",Romaji:"chi",Accent:{Dakuten:"ぢ",Handakuten:null},Combinaison:[{Hiragana:"ちゃ",Romaji:"cha"},{Hiragana:"ちゅ",Romaji:"chu"},{Hiragana:"ちょ",Romaji:"cho"}]},{id:18,Type:"Hiragana",Hiragana:"つ",Romaji:"tsu",Accent:{Dakuten:"づ",Handakuten:null},Combinaison:[]},{id:19,Type:"Hiragana",Hiragana:"て",Romaji:"te",Accent:{Dakuten:"で",Handakuten:null},Combinaison:[]},{id:20,Type:"Hiragana",Hiragana:"と",Romaji:"to",Accent:{Dakuten:"ど",Handakuten:null},Combinaison:[]},{id:21,Type:"Hiragana",Hiragana:"な",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:22,Type:"Hiragana",Hiragana:"に",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"にゃ",Romaji:"nya"},{Hiragana:"にゅ",Romaji:"nyu"},{Hiragana:"にょ",Romaji:"nyo"}]},{id:23,Type:"Hiragana",Hiragana:"ぬ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:24,Type:"Hiragana",Hiragana:"ね",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:25,Type:"Hiragana",Hiragana:"の",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:26,Type:"Hiragana",Hiragana:"は",Romaji:"ha",Accent:{Dakuten:"ば",Handakuten:"ぱ"},Combinaison:[]},{id:27,Type:"Hiragana",Hiragana:"ひ",Romaji:"hi",Accent:{Dakuten:"び",Handakuten:"ぴ"},Combinaison:[{Hiragana:"ひゃ",Romaji:"hya"},{Hiragana:"ひゅ",Romaji:"hyu"},{Hiragana:"ひょ",Romaji:"hyo"},{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"},{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:28,Type:"Hiragana",Hiragana:"ふ",Romaji:"fu",Accent:{Dakuten:"ぶ",Handakuten:"ぷ"},Combinaison:[]},{id:29,Type:"Hiragana",Hiragana:"へ",Romaji:"he",Accent:{Dakuten:"べ",Handakuten:"ぺ"},Combinaison:[]},{id:30,Type:"Hiragana",Hiragana:"ほ",Romaji:"ho",Accent:{Dakuten:"ぼ",Handakuten:"ぽ"},Combinaison:[]},{id:31,Type:"Hiragana",Hiragana:"ま",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:32,Type:"Hiragana",Hiragana:"み",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"みゃ",Romaji:"mya"},{Hiragana:"みゅ",Romaji:"myu"},{Hiragana:"みょ",Romaji:"myo"}]},{id:33,Type:"Hiragana",Hiragana:"む",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:34,Type:"Hiragana",Hiragana:"め",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:35,Type:"Hiragana",Hiragana:"も",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:36,Type:"Hiragana",Hiragana:"や",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:37,Type:"Hiragana",Hiragana:"ゆ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:38,Type:"Hiragana",Hiragana:"よ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:39,Type:"Hiragana",Hiragana:"ら",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:40,Type:"Hiragana",Hiragana:"り",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"りゃ",Romaji:"rya"},{Hiragana:"りゅ",Romaji:"ryu"},{Hiragana:"りょ",Romaji:"ryo"}]},{id:41,Type:"Hiragana",Hiragana:"る",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:42,Type:"Hiragana",Hiragana:"れ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:43,Type:"Hiragana",Hiragana:"ろ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:44,Type:"Hiragana",Hiragana:"わ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:45,Type:"Hiragana",Hiragana:"を",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:46,Type:"Hiragana",Hiragana:"ん",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]}],q5=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"が",Romaji:"ga",Hiragana:"か",Handakuten:null,Combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ぎ",Romaji:"gi",Hiragana:"き",Handakuten:null,Combinaison:[{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"ぐ",Romaji:"gu",Hiragana:"く",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"げ",Romaji:"ge",Hiragana:"け",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ご",Romaji:"go",Hiragana:"こ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ざ",Romaji:"za",Hiragana:"さ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"じ",Romaji:"ji",Hiragana:"し",Handakuten:null,Combinaison:[{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ず",Romaji:"zu",Hiragana:"す",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ぜ",Romaji:"ze",Hiragana:"せ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ぞ",Romaji:"zo",Hiragana:"そ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"だ",Romaji:"da",Hiragana:"た",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ぢ",Romaji:"ji",Hiragana:"ち",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"づ",Romaji:"zu",Hiragana:"つ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"で",Romaji:"de",Hiragana:"て",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ど",Romaji:"do",Hiragana:"と",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"ば",Romaji:"ba",Hiragana:"は",Handakuten:"ぱ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"び",Romaji:"bi",Hiragana:"ひ",Handakuten:"ぴ",Combinaison:[{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ぶ",Romaji:"bu",Hiragana:"ふ",Handakuten:"ぷ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"べ",Romaji:"be",Hiragana:"へ",Handakuten:"ぺ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ぼ",Romaji:"bo",Hiragana:"ほ",Handakuten:"ぽ",combinaison:[]}],Z5=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"ぱ",Romaji:"pa",Hiragana:"は",Dakuten:"ば",combinaison:[]},{id:68,Type:"Accents",Nom:"Handakuten",Handakuten:"ぴ",Romaji:"pi",Hiragana:"ひ",Dakuten:"び",Combinaison:[{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:69,Type:"Accents",Nom:"Handakuten",Handakuten:"ぷ",Romaji:"pu",Hiragana:"ふ",Dakuten:"ぶ",combinaison:[]},{id:70,Type:"Accents",Nom:"Handakuten",Handakuten:"ぺ",Romaji:"pe",Hiragana:"へ",Dakuten:"べ",combinaison:[]},{id:71,Type:"Accents",Nom:"Handakuten",Handakuten:"ぽ",Romaji:"po",Hiragana:"ほ",Dakuten:"ぼ",combinaison:[]}],G5=[{id:72,Type:"Combinaison",Hiragana:"きゃ",Romaji:"kya",Hiragana1:"き",Hiragana2:"や"},{id:73,Type:"Combinaison",Hiragana:"きゅ",Romaji:"kyu",Hiragana1:"き",Hiragana2:"ゆ"},{id:74,Type:"Combinaison",Hiragana:"きょ",Romaji:"kyo",Hiragana1:"き",Hiragana2:"よ"},{id:75,Type:"Combinaison",Hiragana:"ぎゃ",Romaji:"gya",Hiragana1:"ぎ",Hiragana2:"や"},{id:76,Type:"Combinaison",Hiragana:"ぎゅ",Romaji:"gyu",Hiragana1:"ぎ",Hiragana2:"ゆ"},{id:77,Type:"Combinaison",Hiragana:"ぎょ",Romaji:"gyo",Hiragana1:"ぎ",Hiragana2:"よ"},{id:78,Type:"Combinaison",Hiragana:"しゃ",Romaji:"sha",Hiragana1:"し",Hiragana2:"や"},{id:79,Type:"Combinaison",Hiragana:"しゅ",Romaji:"shu",Hiragana1:"し",Hiragana2:"ゆ"},{id:80,Type:"Combinaison",Hiragana:"しょ",Romaji:"sho",Hiragana1:"し",Hiragana2:"よ"},{id:81,Type:"Combinaison",Hiragana:"じゃ",Romaji:"ja",Hiragana1:"じ",Hiragana2:"や"},{id:82,Type:"Combinaison",Hiragana:"じゅ",Romaji:"ju",Hiragana1:"じ",Hiragana2:"ゆ"},{id:83,Type:"Combinaison",Hiragana:"じょ",Romaji:"jo",Hiragana1:"じ",Hiragana2:"よ"},{id:84,Type:"Combinaison",Hiragana:"ちゃ",Romaji:"cha",Hiragana1:"ち",Hiragana2:"や"},{id:85,Type:"Combinaison",Hiragana:"ちゅ",Romaji:"chu",Hiragana1:"ち",Hiragana2:"ゆ"},{id:86,Type:"Combinaison",Hiragana:"ちょ",Romaji:"cho",Hiragana1:"ち",Hiragana2:"よ"},{id:87,Type:"Combinaison",Hiragana:"ひゃ",Romaji:"hya",Hiragana1:"ひ",Hiragana2:"や"},{id:88,Type:"Combinaison",Hiragana:"ひゅ",Romaji:"hyu",Hiragana1:"ひ",Hiragana2:"ゆ"},{id:89,Type:"Combinaison",Hiragana:"ひょ",Romaji:"hyo",Hiragana1:"ひ",Hiragana2:"よ"},{id:90,Type:"Combinaison",Hiragana:"びゃ",Romaji:"bya",Hiragana1:"び",Hiragana2:"や"},{id:91,Type:"Combinaison",Hiragana:"びゅ",Romaji:"byu",Hiragana1:"び",Hiragana2:"ゆ"},{id:92,Type:"Combinaison",Hiragana:"びょ",Romaji:"byo",Hiragana1:"び",Hiragana2:"よ"},{id:93,Type:"Combinaison",Hiragana:"ぴゃ",Romaji:"pya",Hiragana1:"ぴ",Hiragana2:"や"},{id:94,Type:"Combinaison",Hiragana:"ぴゅ",Romaji:"pyu",Hiragana1:"ぴ",Hiragana2:"ゆ"},{id:95,Type:"Combinaison",Hiragana:"ぴょ",Romaji:"pyo",Hiragana1:"ぴ",Hiragana2:"よ"},{id:96,Type:"Combinaison",Hiragana:"にゃ",Romaji:"nya",Hiragana1:"に",Hiragana2:"や"},{id:97,Type:"Combinaison",Hiragana:"にゅ",Romaji:"nyu",Hiragana1:"に",Hiragana2:"ゆ"},{id:98,Type:"Combinaison",Hiragana:"にょ",Romaji:"nyo",Hiragana1:"に",Hiragana2:"よ"},{id:99,Type:"Combinaison",Hiragana:"みゃ",Romaji:"mya",Hiragana1:"み",Hiragana2:"や"},{id:100,Type:"Combinaison",Hiragana:"みゅ",Romaji:"myu",Hiragana1:"み",Hiragana2:"ゆ"},{id:101,Type:"Combinaison",Hiragana:"みょ",Romaji:"myo",Hiragana1:"み",Hiragana2:"よ"},{id:102,Type:"Combinaison",Hiragana:"りゃ",Romaji:"rya",Hiragana1:"り",Hiragana2:"や"},{id:103,Type:"Combinaison",Hiragana:"りゅ",Romaji:"ryu",Hiragana1:"り",Hiragana2:"ゆ"},{id:104,Type:"Combinaison",Hiragana:"りょ",Romaji:"ryo",Hiragana1:"り",Hiragana2:"よ"}],be={Hiragana:Q5,Dakuten:q5,Handakuten:Z5,Combinaison:G5},Y5=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,X5=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.37%;
    height: 20vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`,ey=j.p`
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
    font-weight: 700;
    border-radius: 0.5vw;
    text-transform: uppercase;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        border-radius: 3vw;
    }
`,ny=j.p`
    color: ${e=>e.$color};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.5vw;
    height: 50%;
    max-height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 3.8vw;
    font-weight: bold;
    @media screen and (max-width: 560px) {
        font-size: 15vw;
        border-radius: 3vw;
    }
`,Ba=j.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`,Ia=j.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    img{
        width: 2.5vw;
        @media screen and (max-width: 560px) {
            width: 10vw;
        }
    }
`,kn=j.div`
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    button{
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
    img{
        width: 3vw;
    }
`,iy=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 50%;
    height: 5vw;
    margin-left: 50% ;
    transform: translateX(-50%);
    @media screen and (max-width: 560px) {
        min-width: 93%;    
        height: 50vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    p{
        color: ${e=>e.$color};
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`;function Gc({katakanaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(g=>g.mode),{color:t}=P(g=>g.color),r=P(g=>g.dataChoice.katakana),o=P(g=>g.parametersExercice.exerciceNumber),s=He(),c=ce(),u="",d=g=>{s(Wc(g)),s(Uc(u))},p=g=>{(r.includes(g)||r.length<o)&&c.pathname==="/choisir-ses/Katakana"&&s(Gw(g))},m=window.innerWidth<=560?"10vw":"3.5vw";return l.jsx(Y5,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var R,y,k,h;return l.jsxs(X5,{$bgColor:n,onClick:()=>p(g),style:{backgroundColor:r.includes(g)?t:n,cursor:"pointer"},children:[l.jsx(ey,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(ny,{$color:t,$mainBgColor:a,children:g.Type==="Katakana"?g.Katakana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Katakana:g.Handakuten}),g.Type==="Katakana"?l.jsxs(Ba,{children:[l.jsx(Ia,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>{var f;return d((f=g.Accent)==null?void 0:f.Dakuten)},$fontColor:i,$mainBgColor:a,children:((R=g.Accent)==null?void 0:R.Dakuten)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:(y=g.Accent)==null?void 0:y.Dakuten})}),l.jsx(kn,{onClick:()=>{var f;return d((f=g.Accent)==null?void 0:f.Handakuten)},$fontColor:i,$mainBgColor:a,children:((k=g.Accent)==null?void 0:k.Handakuten)===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:(h=g.Accent)==null?void 0:h.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Ba,{children:[l.jsx(Ia,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>d(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Katakana})}),l.jsx(kn,{onClick:()=>d(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Ba,{children:[l.jsx(Ia,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>d(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Katakana})}),l.jsx(kn,{onClick:()=>d(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Handakuten||g.Dakuten===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Ba,{children:[l.jsx(Ia,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>d(g.Katakana1),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana1===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Katakana1})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana2===null?l.jsx(ue,{width:m,height:m,color:t}):l.jsx("button",{children:g.Katakana2})})]}):l.jsxs(Ba,{children:[l.jsx(Ia,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsxs(kn,{$fontColor:i,$mainBgColor:a,children:[l.jsx(ue,{width:m,height:m,color:t})," "]}),l.jsxs(kn,{$fontColor:i,$mainBgColor:a,children:[l.jsx(ue,{width:m,height:m,color:t})," "]})]})]},g.id)}):l.jsx(iy,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Gc.propTypes={katakanaList:M.array.isRequired};const ay=[{id:1,Type:"Katakana",Katakana:"ア",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:2,Type:"Katakana",Katakana:"イ",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:3,Type:"Katakana",Katakana:"ウ",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:4,Type:"Katakana",Katakana:"エ",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:5,Type:"Katakana",Katakana:"オ",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:6,Type:"Katakana",Katakana:"カ",Romaji:"ka",Accent:{Dakuten:"ガ",Handakuten:null},combinaison:[]},{id:7,Type:"Katakana",Katakana:"キ",Romaji:"ki",Accent:{Dakuten:"ギ",Handakuten:null},combinaison:[{Katakana:"キャ",Romaji:"kya"},{Katakana:"キュ",Romaji:"kyu"},{Katakana:"キョ",Romaji:"kyo"},{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:8,Type:"Katakana",Katakana:"ク",Romaji:"ku",Accent:{Dakuten:"グ",Handakuten:null},combinaison:[]},{id:9,Type:"Katakana",Katakana:"ケ",Romaji:"ke",Accent:{Dakuten:"ゲ",Handakuten:null},combinaison:[]},{id:10,Type:"Katakana",Katakana:"コ",Romaji:"ko",Accent:{Dakuten:"ゴ",Handakuten:null},combinaison:[]},{id:11,Type:"Katakana",Katakana:"サ",Romaji:"sa",Accent:{Dakuten:"ザ",Handakuten:null},combinaison:[]},{id:12,Type:"Katakana",Katakana:"シ",Romaji:"shi",Accent:{Dakuten:"ジ",Handakuten:null},combinaison:[{Katakana:"シャ",Romaji:"sha"},{Katakana:"シュ",Romaji:"shu"},{Katakana:"ショ",Romaji:"sho"},{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:13,Type:"Katakana",Katakana:"ス",Romaji:"su",Accent:{Dakuten:"ズ",Handakuten:null},combinaison:[]},{id:14,Type:"Katakana",Katakana:"セ",Romaji:"se",Accent:{Dakuten:"ゼ",Handakuten:null},combinaison:[]},{id:15,Type:"Katakana",Katakana:"ソ",Romaji:"so",Accent:{Dakuten:"ゾ",Handakuten:null},combinaison:[]},{id:16,Type:"Katakana",Katakana:"タ",Romaji:"ta",Accent:{Dakuten:"ダ",Handakuten:null},combinaison:[]},{id:17,Type:"Katakana",Katakana:"チ",Romaji:"chi",Accent:{Dakuten:"ヂ",Handakuten:null},combinaison:[{Katakana:"チャ",Romaji:"cha"},{Katakana:"チュ",Romaji:"chu"},{Katakana:"チョ",Romaji:"cho"}]},{id:18,Type:"Katakana",Katakana:"ツ",Romaji:"tsu",Accent:{Dakuten:"ヅ",Handakuten:null},combinaison:[]},{id:19,Type:"Katakana",Katakana:"テ",Romaji:"te",Accent:{Dakuten:"デ",Handakuten:null},combinaison:[]},{id:20,Type:"Katakana",Katakana:"ト",Romaji:"to",Accent:{Dakuten:"ド",Handakuten:null},combinaison:[]},{id:21,Type:"Katakana",Katakana:"ナ",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:22,Type:"Katakana",Katakana:"ニ",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ニャ",Romaji:"nya"},{Katakana:"ニュ",Romaji:"nyu"},{Katakana:"ニョ",Romaji:"nyo"}]},{id:23,Type:"Katakana",Katakana:"ヌ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:24,Type:"Katakana",Katakana:"ネ",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:25,Type:"Katakana",Katakana:"ノ",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:26,Type:"Katakana",Katakana:"ハ",Romaji:"ha",Accent:{Dakuten:"バ",Handakuten:"パ"},combinaison:[]},{id:27,Type:"Katakana",Katakana:"ヒ",Romaji:"hi",Accent:{Dakuten:"ビ",Handakuten:"ピ"},combinaison:[{Katakana:"ヒャ",Romaji:"hya"},{Katakana:"ヒュ",Romaji:"hyu"},{Katakana:"ヒョ",Romaji:"hyo"},{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"},{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:28,Type:"Katakana",Katakana:"フ",Romaji:"fu",Accent:{Dakuten:"ブ",Handakuten:"プ"},combinaison:[]},{id:29,Type:"Katakana",Katakana:"ヘ",Romaji:"he",Accent:{Dakuten:"ベ",Handakuten:"ペ"},combinaison:[]},{id:30,Type:"Katakana",Katakana:"ホ",Romaji:"ho",Accent:{Dakuten:"ボ",Handakuten:"ポ"},combinaison:[]},{id:31,Type:"Katakana",Katakana:"マ",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:32,Type:"Katakana",Katakana:"ミ",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ミャ",Romaji:"mya"},{Katakana:"ミュ",Romaji:"myu"},{Katakana:"ミョ",Romaji:"myo"}]},{id:33,Type:"Katakana",Katakana:"ム",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:34,Type:"Katakana",Katakana:"メ",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:35,Type:"Katakana",Katakana:"モ",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:36,Type:"Katakana",Katakana:"ヤ",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:37,Type:"Katakana",Katakana:"ユ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:38,Type:"Katakana",Katakana:"ヨ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:39,Type:"Katakana",Katakana:"ラ",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:40,Type:"Katakana",Katakana:"リ",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"リャ",Romaji:"rya"},{Katakana:"リュ",Romaji:"ryu"},{Katakana:"リョ",Romaji:"ryo"}]},{id:41,Type:"Katakana",Katakana:"ル",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:42,Type:"Katakana",Katakana:"レ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:43,Type:"Katakana",Katakana:"ロ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:44,Type:"Katakana",Katakana:"ワ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:45,Type:"Katakana",Katakana:"ヲ",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:46,Type:"Katakana",Katakana:"ン",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},combinaison:[]}],ty=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"ガ",Romaji:"ga",Katakana:"カ",Handakuten:null,combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ギ",Romaji:"gi",Katakana:"キ",Handakuten:null,combinaison:[{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"グ",Romaji:"gu",Katakana:"ク",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"ゲ",Romaji:"ge",Katakana:"ケ",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ゴ",Romaji:"go",Katakana:"コ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ザ",Romaji:"za",Katakana:"サ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"ジ",Romaji:"ji",Katakana:"シ",Handakuten:null,combinaison:[{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ズ",Romaji:"zu",Katakana:"ス",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ゼ",Romaji:"ze",Katakana:"セ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ゾ",Romaji:"zo",Katakana:"ソ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"ダ",Romaji:"da",Katakana:"タ",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ヂ",Romaji:"ji",Katakana:"チ",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"ヅ",Romaji:"zu",Katakana:"ツ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"デ",Romaji:"de",Katakana:"テ",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ド",Romaji:"do",Katakana:"ト",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"バ",Romaji:"ba",Katakana:"ハ",Handakuten:"パ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"ビ",Romaji:"bi",Katakana:"ヒ",Handakuten:"ピ",combinaison:[{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ブ",Romaji:"bu",Katakana:"フ",Handakuten:"プ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"ベ",Romaji:"be",Katakana:"ヘ",Handakuten:"ペ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ボ",Romaji:"bo",Katakana:"ホ",Handakuten:"ポ",combinaison:[]}],ry=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"パ",Romaji:"pa",Katakana:"ハ",Dakuten:"バ",combinaison:[]},{id:68,Nom:"Handakuten",Type:"Accents",Handakuten:"ピ",Romaji:"pi",Katakana:"ヒ",Dakuten:"ビ",combinaison:[{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:69,Nom:"Handakuten",Type:"Accents",Handakuten:"プ",Romaji:"pu",Katakana:"フ",Dakuten:"ブ",combinaison:[]},{id:70,Nom:"Handakuten",Type:"Accents",Handakuten:"ペ",Romaji:"pe",Katakana:"ヘ",Dakuten:"ベ",combinaison:[]},{id:71,Nom:"Handakuten",Type:"Accents",Handakuten:"ポ",Romaji:"po",Katakana:"ホ",Dakuten:"ボ",combinaison:[]}],oy=[{id:72,Type:"Combinaison",Katakana:"キャ",Romaji:"kya",Katakana1:"キ",Katakana2:"ヤ"},{id:73,Type:"Combinaison",Katakana:"キュ",Romaji:"kyu",Katakana1:"キ",Katakana2:"ユ"},{id:74,Type:"Combinaison",Katakana:"キョ",Romaji:"kyo",Katakana1:"キ",Katakana2:"ヨ"},{id:75,Type:"Combinaison",Katakana:"ギャ",Romaji:"gya",Katakana1:"ギ",Katakana2:"ヤ"},{id:76,Type:"Combinaison",Katakana:"ギュ",Romaji:"gyu",Katakana1:"ギ",Katakana2:"ユ"},{id:77,Type:"Combinaison",Katakana:"ギョ",Romaji:"gyo",Katakana1:"ギ",Katakana2:"ヨ"},{id:78,Type:"Combinaison",Katakana:"シャ",Romaji:"sha",Katakana1:"シ",Katakana2:"ヤ"},{id:79,Type:"Combinaison",Katakana:"シュ",Romaji:"shu",Katakana1:"シ",Katakana2:"ユ"},{id:80,Type:"Combinaison",Katakana:"ショ",Romaji:"sho",Katakana1:"シ",Katakana2:"ヨ"},{id:81,Type:"Combinaison",Katakana:"ジャ",Romaji:"ja",Katakana1:"ジ",Katakana2:"ヤ"},{id:82,Type:"Combinaison",Katakana:"ジュ",Romaji:"ju",Katakana1:"ジ",Katakana2:"ユ"},{id:83,Type:"Combinaison",Katakana:"ジョ",Romaji:"jo",Katakana1:"ジ",Katakana2:"ヨ"},{id:84,Type:"Combinaison",Katakana:"チャ",Romaji:"cha",Katakana1:"チ",Katakana2:"ヤ"},{id:85,Type:"Combinaison",Katakana:"チュ",Romaji:"chu",Katakana1:"チ",Katakana2:"ユ"},{id:86,Type:"Combinaison",Katakana:"チョ",Romaji:"cho",Katakana1:"チ",Katakana2:"ヨ"},{id:87,Type:"Combinaison",Katakana:"ニャ",Romaji:"nya",Katakana1:"ニ",Katakana2:"ヤ"},{id:88,Type:"Combinaison",Katakana:"ニュ",Romaji:"nyu",Katakana1:"ニ",Katakana2:"ユ"},{id:89,Type:"Combinaison",Katakana:"ニョ",Romaji:"nyo",Katakana1:"ニ",Katakana2:"ヨ"},{id:90,Type:"Combinaison",Katakana:"ヒャ",Romaji:"hya",Katakana1:"ヒ",Katakana2:"ヤ"},{id:91,Type:"Combinaison",Katakana:"ヒュ",Romaji:"hyu",Katakana1:"ヒ",Katakana2:"ユ"},{id:92,Type:"Combinaison",Katakana:"ヒョ",Romaji:"hyo",Katakana1:"ヒ",Katakana2:"ヨ"},{id:93,Type:"Combinaison",Katakana:"ビャ",Romaji:"bya",Katakana1:"ビ",Katakana2:"ヤ"},{id:94,Type:"Combinaison",Katakana:"ビュ",Romaji:"byu",Katakana1:"ビ",Katakana2:"ユ"},{id:95,Type:"Combinaison",Katakana:"ビョ",Romaji:"byo",Katakana1:"ビ",Katakana2:"ヨ"},{id:96,Type:"Combinaison",Katakana:"ピャ",Romaji:"pya",Katakana1:"ピ",Katakana2:"ヤ"},{id:97,Type:"Combinaison",Katakana:"ピュ",Romaji:"pyu",Katakana1:"ピ",Katakana2:"ユ"},{id:98,Type:"Combinaison",Katakana:"ピョ",Romaji:"pyo",Katakana1:"ピ",Katakana2:"ヨ"},{id:99,Type:"Combinaison",Katakana:"ミャ",Romaji:"mya",Katakana1:"ミ",Katakana2:"ヤ"},{id:100,Type:"Combinaison",Katakana:"ミュ",Romaji:"myu",Katakana1:"ミ",Katakana2:"ユ"},{id:101,Type:"Combinaison",Katakana:"ミョ",Romaji:"myo",Katakana1:"ミ",Katakana2:"ヨ"},{id:102,Type:"Combinaison",Katakana:"リャ",Romaji:"rya",Katakana1:"リ",Katakana2:"ヤ"},{id:103,Type:"Combinaison",Katakana:"リュ",Romaji:"ryu",Katakana1:"リ",Katakana2:"ユ"},{id:104,Type:"Combinaison",Katakana:"リョ",Romaji:"ryo",Katakana1:"リ",Katakana2:"ヨ"}],Te={Katakana:ay,Dakuten:ty,Handakuten:ry,Combinaison:oy},ly=j.div`
    display: flex;
    gap: 0.6vw;
    flex-wrap: wrap;
    width:calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,sy=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 47.5%;
    height: 20vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`,cy=j.div`
    display: flex;
    gap: 0.6vw;
    height: 33%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p{
        border-radius: 0.5vw;
        font-size: 1.7vw;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        text-align: center;
        padding-left: 2vw;
        padding-right: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            padding-left: 3vw;
            padding-right: 3vw;
            border-radius: 3vw;
        }
        span{
            position: absolute;
            font-size: 0.8vw;
            font-weight: 400;
            color: #F7F7F2;
            background-color: ${e=>e.$color};
            border-radius: 1vw;
            padding: 0.2vw 1vw;
            bottom: 0.3vw;
            left: 0.3vw;
            @media screen and (max-width: 560px) {
                font-size: 2.9vw;
                padding: 1vw 3vw;
                border-radius: 0vw 3vw 0 3vw ;
                bottom: 0vw;
                left: 0vw;
            }
        }
    }
    p:nth-child(1){
        max-width: 45%;
        width:45%;
        font-weight: 700;
    }
    p:nth-child(2){
        max-width: 55%;
        width:55%;
    }
`,dy=j.div`
    display: flex;
    gap: 0.6vw;
    height: 40%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p:nth-child(1){
        max-width: 70%;
        width:70%;
        text-transform: capitalize;
        font-weight: 700;
    }
    p:nth-child(2){
        max-width: 40%;
        width:40%;
        font-style: italic;
    }
    p{
        width: 50%;
        border-radius: 0.5vw;
        font-size: 1.5vw;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        text-align: center;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            padding-left: 3vw;
            padding-right: 3vw;
            border-radius: 3vw;
        }
        span{
            position: absolute;
            font-size: 0.8vw;
            font-weight: 400;
            color: #F7F7F2;
            background-color: ${e=>e.$color};
            border-radius: 1vw;
            padding: 0.2vw 1vw;
            top: 0.3vw;
            left: 0.3vw;
            @media screen and (max-width: 560px) {
                font-size: 2.9vw;
                padding: 1vw 3vw;
                border-radius:  3vw 0vw  3vw 0 ;
                top: 0vw;
                left: 0vw;
            }
        }
        
    }
`,uy=j.div`
    display: flex;
    gap: 0.6vw;
    height: 23%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p{
        width: 20%;
        border-radius: 0.5vw;
        font-size: 1.5vw;
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            padding-left: 3vw;
            padding-right: 3vw;
            border-radius: 3vw;
        }
        span{
            font-style: italic;
            margin-right:0.5vw ;
            font-weight: 700;
        }
    }
    div{
        width: 80%;
        border-radius: 0.5vw;
        font-size: 1vw;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        padding-left: 0.6vw;
        padding-right: 0.6vw;
        gap: 0.6vw;
        @media screen and (max-width: 560px) {
            font-size: 3vw;
            border-radius: 3vw;
            gap: 1.5vw;
        }
        span{
            background-color: ${e=>e.$color};
            color: #F7F7F2;
            height: 80%;
            padding-left: 1vw;
            padding-right: 1vw;
            border-radius: 0.5vw;
            display: flex;
            align-items: center;
            text-transform: capitalize;
            @media screen and (max-width: 560px) {
                border-radius: 3vw;
                padding-left: 3vw;
                padding-right: 3vw;
                border-radius: 3vw;
                text-align : center;
            }
        }
    }
`,gy=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 50%;
    height: 5vw;
    margin-left: 50% ;
    transform: translateX(-50%);
    @media screen and (max-width: 560px) {
        min-width: 93%;    
        height: 50vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    p{
        color: ${e=>e.$color};
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`;function Yc({vocabulaireList:e=[]}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(d=>d.mode),{color:t}=P(d=>d.color),r=P(d=>d.dataChoice.vocabulaire),o=P(d=>d.parametersExercice.exerciceNumber),s=He(),c=ce(),u=d=>{(r.includes(d)||r.length<o)&&c.pathname==="/choisir-ses/Vocabulaire"&&s(Zw(d))};return l.jsx(ly,{children:Array.isArray(e)&&e.length>0?e.map(d=>l.jsxs(sy,{$bgColor:n,onClick:()=>u(d),style:{backgroundColor:r.includes(d)?t:n,cursor:"pointer"},children:[l.jsxs(cy,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[d.kanji," ",l.jsx("span",{children:"Kanji"})]}),l.jsxs("p",{children:[d.hiragana," ",l.jsx("span",{children:"Hiragana"})]})]}),l.jsxs(dy,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[d.francais," ",l.jsx("span",{children:"Français"})]}),l.jsxs("p",{children:[d.Romaji," ",l.jsx("span",{children:"Romaji"})]})]}),l.jsxs(uy,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:Array.isArray(d.categorie)&&d.categorie[0]}),Array.isArray(d.categorie)&&d.categorie[1]&&l.jsx("span",{children:d.categorie[1]}),Array.isArray(d.categorie)&&d.categorie[2]&&l.jsx("span",{children:d.categorie[2]})]}),l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"}),d.niveau]})]})]},d.id)):l.jsx(gy,{$fontColor:i,$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Yc.propTypes={vocabulaireList:M.array.isRequired};const N0="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23F7F7F2'/%3e%3crect%20x='19.6904'%20y='14.9575'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23F7F7F2'/%3e%3c/svg%3e",O0="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23353535'/%3e%3crect%20x='19.6904'%20y='14.957'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23353535'/%3e%3c/svg%3e",py=j.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`,fy=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,my=j.button`
    background-color: ${e=>e.$color};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    border: ${e=>e.$mainBgColor} 0.2vw solid;
    position: fixed;
    bottom: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    will-change: transform;
    
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 13vw;  
        border-radius: 3vw;
        bottom: 5vw; 
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        border: ${e=>e.$mainBgColor} 1vw solid;
    }
    img{
        width: 2.6vw;
        height: 2.6vw;
        resize: none;
        @media screen and (max-width: 560px) {
            width: 8vw;
            height: 8vw;
        }
    }
`;function hy(){const{mainBgColor:e}=P(g=>g.mode),{color:n}=P(g=>g.color),i=ce(),a=P(g=>g.search.searchText),t=P(g=>g.search.jlptLevel),r=P(g=>g.search.kanaType),o=P(g=>g.mode),s=P(g=>g.search.vocabulaireCategorie),c=Bo.kanji.filter(g=>{var R,y;return(((R=g.Meaning)==null?void 0:R.toLowerCase().includes(a))||((y=g.SecondaryMeaning)==null?void 0:y.toLowerCase().includes(a)))&&(t===""||g.JLPTLevel===t)}).sort((g,R)=>{var h,f,v,w,x,C,L,T,F,D;const y=((h=g.Kanji)==null?void 0:h.toLowerCase().startsWith(a))||((f=g.OnReading)==null?void 0:f.some(q=>q.toLowerCase().startsWith(a)))||((v=g.KunReading)==null?void 0:v.some(q=>q.toLowerCase().startsWith(a)))||((w=g.Meaning)==null?void 0:w.toLowerCase().startsWith(a))||((x=g.SecondaryMeaning)==null?void 0:x.toLowerCase().startsWith(a)),k=((C=R.Kanji)==null?void 0:C.toLowerCase().startsWith(a))||((L=R.OnReading)==null?void 0:L.some(q=>q.toLowerCase().startsWith(a)))||((T=R.KunReading)==null?void 0:T.some(q=>q.toLowerCase().startsWith(a)))||((F=R.Meaning)==null?void 0:F.toLowerCase().startsWith(a))||((D=R.SecondaryMeaning)==null?void 0:D.toLowerCase().startsWith(a));return y&&!k?-1:!y&&k?1:0}),u=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison].filter(g=>{var R,y,k,h;return(((R=g.Hiragana)==null?void 0:R.toLowerCase().includes(a))||((y=g.Dakuten)==null?void 0:y.toLowerCase().includes(a))||((k=g.Handakuten)==null?void 0:k.toLowerCase().includes(a))||((h=g.Romaji)==null?void 0:h.toLowerCase().includes(a)))&&(r===""||g.Type===r)}).sort((g,R)=>{var h,f,v,w,x,C,L,T;const y=((h=g.Hiragana)==null?void 0:h.toLowerCase().startsWith(a))||((f=g.Dakuten)==null?void 0:f.toLowerCase().startsWith(a))||((v=g.Handakuten)==null?void 0:v.toLowerCase().startsWith(a))||((w=g.Romaji)==null?void 0:w.toLowerCase().startsWith(a)),k=((x=R.Hiragana)==null?void 0:x.toLowerCase().startsWith(a))||((C=R.Dakuten)==null?void 0:C.toLowerCase().startsWith(a))||((L=R.Handakuten)==null?void 0:L.toLowerCase().startsWith(a))||((T=R.Romaji)==null?void 0:T.toLowerCase().startsWith(a));return y&&!k?-1:!y&&k?1:0}),d=[...Te.Katakana,...Te.Dakuten,...Te.Handakuten,...Te.Combinaison].filter(g=>{var R,y,k,h;return(((R=g.Katakana)==null?void 0:R.toLowerCase().includes(a))||((y=g.Dakuten)==null?void 0:y.toLowerCase().includes(a))||((k=g.Handakuten)==null?void 0:k.toLowerCase().includes(a))||((h=g.Romaji)==null?void 0:h.toLowerCase().includes(a)))&&(r===""||g.Type===r)}).sort((g,R)=>{var h,f,v,w,x,C,L,T;const y=((h=g.Katakana)==null?void 0:h.toLowerCase().startsWith(a))||((f=g.Dakuten)==null?void 0:f.toLowerCase().startsWith(a))||((v=g.Handakuten)==null?void 0:v.toLowerCase().startsWith(a))||((w=g.Romaji)==null?void 0:w.toLowerCase().startsWith(a)),k=((x=R.Katakana)==null?void 0:x.toLowerCase().startsWith(a))||((C=R.Dakuten)==null?void 0:C.toLowerCase().startsWith(a))||((L=R.Handakuten)==null?void 0:L.toLowerCase().startsWith(a))||((T=R.Romaji)==null?void 0:T.toLowerCase().startsWith(a));return y&&!k?-1:!y&&k?1:0}),p=Array.isArray(Ei.vocabulaire)?Ei.vocabulaire.filter(g=>{var R,y,k,h;return(((R=g.kanji)==null?void 0:R.toLowerCase().includes(a))||((y=g.hiragana)==null?void 0:y.toLowerCase().includes(a))||((k=g.francais)==null?void 0:k.toLowerCase().includes(a))||((h=g.Romaji)==null?void 0:h.toLowerCase().includes(a)))&&(t===""||g.JLPTLevel===t)&&(s.length===0||s.includes(g.categorie))}).sort((g,R)=>{var h,f,v,w,x,C,L,T;const y=((h=g.kanji)==null?void 0:h.toLowerCase().startsWith(a))||((f=g.hiragana)==null?void 0:f.toLowerCase().startsWith(a))||((v=g.francais)==null?void 0:v.toLowerCase().startsWith(a))||((w=g.Romaji)==null?void 0:w.toLowerCase().startsWith(a)),k=((x=R.kanji)==null?void 0:x.toLowerCase().startsWith(a))||((C=R.hiragana)==null?void 0:C.toLowerCase().startsWith(a))||((L=R.francais)==null?void 0:L.toLowerCase().startsWith(a))||((T=R.Romaji)==null?void 0:T.toLowerCase().startsWith(a));return y&&!k?-1:!y&&k?1:0}):[],m=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})};return l.jsxs(py,{children:[l.jsx(ba,{}),l.jsx(x5,{}),l.jsx(S0,{}),i.pathname==="/Dictionnaire/Kanji"&&l.jsx(qc,{kanjiList:c}),i.pathname==="/Dictionnaire/Hiragana"&&l.jsx(Zc,{hiraganaList:u}),i.pathname==="/Dictionnaire/Katakana"&&l.jsx(Gc,{katakanaList:d}),i.pathname==="/Dictionnaire/Vocabulaire"&&l.jsx(Yc,{vocabulaireList:p}),l.jsx(fy,{children:l.jsx(my,{onClick:m,$mainBgColor:e,$color:n,children:l.jsx("img",{src:o.mode==="light"?N0:O0})})})]})}const vy=j.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 10vw;
    @media screen and (max-width: 560px){
        margin-left: 0;
        margin-top: 20vw;
        margin-bottom: 0;
        gap: 3vw;
    }
`,wy=j.div`
    display: flex;
    width:calc(100% - 3vw);
    height: 23vw;
    gap: 1vw;
    @media screen and (max-width: 560px){
        flex-direction: column-reverse;   
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`,Ry=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    width: 50%;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px){
        padding: 3vw;
        border-radius: 4vw;
        width: 90%;
        height: 90vw;
        gap: 1.5vw;
    }
    div{
        display: flex;
        gap: 0.5vw;
        button{
            background-color: ${e=>e.$color};
            color: ${e=>e.$mainBgColor};
            border: none;
            border-radius: 0.5vw;
            padding: 0.5vw;
            font-size: 2vw;
            width: 25%;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
            will-change: transform;
            &:hover{
                cursor: pointer;
                transform: scale(1.04);
            }
            @media screen and (max-width: 560px){
                font-size: 6vw;
                border-radius: 3vw;
                padding: 1.5vw;
                width: 30%;
            }
        }
       @media screen and (max-width: 560px){
            gap: 1.5vw;
       }
    }
    div:nth-child(1){
        height: 20%;
        min-height: 20%;
        p{
            font-size: 2vw;
            font-weight: 700;
            background-color: ${e=>e.$mainBgColor};
            border-radius: 0.5vw;
            max-width: 80%;
            width: 75%;
            padding-left: 1vw;
            padding-right: 1vw;
            display: flex;
            align-items: center;
            @media screen and (max-width: 560px){
                font-size: 6vw;
                border-radius : 3vw;
                padding: 4vw;
            }
        }
    }
    div:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        font-size: 1.5vw;
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        max-width:calc(100% - 2vw);
        max-height: calc(80% - 2.5vw);
        width: 100%;
        height: 80%;
        padding: 1vw;
        gap: 0.5vw;
        overflow-y: scroll;
        scrollbar-color: ${e=>e.$color} ${e=>e.$mainBgColor};
        scrollbar-width: thin;
        @media screen and (max-width: 560px){
            font-size: 5vw;
            border-radius: 3vw;
            gap: 1.5vw;
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2vw;
            padding: 0.2vw 2vw;
            border-radius: 0.5vw;
            color: #F7F7F2;
            background-color: ${e=>e.$color};
            @media screen and (max-width: 560px){
                font-size: 7vw;
                border-radius: 3vw;
                padding: 1vw 4vw;
            }
        }
    }
`,jy=j.div`
    display: flex;
    gap: 0.5vw;
    width: 50%;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px){
        padding: 3vw;
        border-radius: 4vw;
        width: 90%;
        height: 30vw;
        gap: 1.5vw;
        flex-direction: column-reverse;
    }
    span{
        font-size: 4vw;
        font-weight: 700;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$color};
        border-radius: 0.5vw;
        padding-left: 1vw;
        padding-right: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        @media screen and (max-width: 560px){
            font-size: 15vw;
            border-radius: 3vw;
            padding: 4vw;
            width: 91%;
            height: 100%;
        }
    }
    p{
        font-size: 2vw;
        font-weight: 700;
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        padding-left: 1vw;
        padding-right: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 50%;
        @media screen and (max-width: 560px){
            display: none;
        }
    }
`,yy=j.div`
@media screen and (max-width: 560px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}
`,xy=j.button`
    z-index: 100;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1vw;
    background-color: ${e=>e.$color};
    border: none;
    border-radius: 0.5vw;
    width: 5vw;
    height:4.3vw;
    border: ${e=>e.$bgColor} 0.2vw solid;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 13vw;  
        border-radius: 3vw;
        top: 4vw;
        left: 4vw; 
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    img{
        width: 3.5vw;
        height: 3.5vw;
        @media screen and (max-width: 560px) {
            width: 8vw;
            height: 8vw;
        }
    }
`,ky=j.button`
    z-index: 100;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1vw;
    background-color: ${e=>e.$color};
    border: none;
    border-radius: 0.5vw;
    width: 15vw;
    height:4.3vw;
    border: ${e=>e.$bgColor} 0.2vw solid;
    font-size: 2vw;
    color: #F7F7F2;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 33vw;
        height: 13vw;  
        border-radius: 3vw;
        bottom: 5vw;
        right: 4vw; 
        font-size: 6vw;
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`,Py=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
   
 `,Cy=j.button`
    background-color: ${e=>e.$color};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    border: ${e=>e.$bgColor} 0.2vw solid;
    position: fixed;
    bottom: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 13vw;  
        border-radius: 3vw;
        bottom: 5vw; 
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    img{
        width: 2.6vw;
        height: 2.6vw;
        resize: none;
        @media screen and (max-width: 560px) {
            width: 8vw;
            height: 8vw;
        }
    }
`;function Ly(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(b=>b.mode),{color:a}=P(b=>b.color),t=P(b=>b.dataChoice.hiragana),r=P(b=>b.dataChoice.katakana),o=P(b=>b.dataChoice.kanji),s=P(b=>b.dataChoice.vocabulaire),c=P(b=>b.dataChoice.nombres),u=ce();let d=fi();const p=P(b=>b.search.searchText),m=P(b=>b.search.jlptLevel),g=P(b=>b.search.kanaType),R=P(b=>b.mode),y=P(b=>b.search.vocabulaireCategorie),k=P(b=>b.parametersExercice.exerciceNumber),h=Bo.kanji.filter(b=>{var z,U;return(((z=b.Meaning)==null?void 0:z.toLowerCase().includes(p))||((U=b.SecondaryMeaning)==null?void 0:U.toLowerCase().includes(p)))&&(m===""||b.JLPTLevel===m)}).sort((b,z)=>{var V,S,O,H,A,_,de,ne,De,N;const U=((V=b.Kanji)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.OnReading)==null?void 0:S.some(J=>J.toLowerCase().startsWith(p)))||((O=b.KunReading)==null?void 0:O.some(J=>J.toLowerCase().startsWith(p)))||((H=b.Meaning)==null?void 0:H.toLowerCase().startsWith(p))||((A=b.SecondaryMeaning)==null?void 0:A.toLowerCase().startsWith(p)),Z=((_=z.Kanji)==null?void 0:_.toLowerCase().startsWith(p))||((de=z.OnReading)==null?void 0:de.some(J=>J.toLowerCase().startsWith(p)))||((ne=z.KunReading)==null?void 0:ne.some(J=>J.toLowerCase().startsWith(p)))||((De=z.Meaning)==null?void 0:De.toLowerCase().startsWith(p))||((N=z.SecondaryMeaning)==null?void 0:N.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}),f=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison].filter(b=>{var z,U,Z,V;return(((z=b.Hiragana)==null?void 0:z.toLowerCase().includes(p))||((U=b.Dakuten)==null?void 0:U.toLowerCase().includes(p))||((Z=b.Handakuten)==null?void 0:Z.toLowerCase().includes(p))||((V=b.Romaji)==null?void 0:V.toLowerCase().includes(p)))&&(g===""||b.Type===g)}).sort((b,z)=>{var V,S,O,H,A,_,de,ne;const U=((V=b.Hiragana)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.Dakuten)==null?void 0:S.toLowerCase().startsWith(p))||((O=b.Handakuten)==null?void 0:O.toLowerCase().startsWith(p))||((H=b.Romaji)==null?void 0:H.toLowerCase().startsWith(p)),Z=((A=z.Hiragana)==null?void 0:A.toLowerCase().startsWith(p))||((_=z.Dakuten)==null?void 0:_.toLowerCase().startsWith(p))||((de=z.Handakuten)==null?void 0:de.toLowerCase().startsWith(p))||((ne=z.Romaji)==null?void 0:ne.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}),v=[...Te.Katakana,...Te.Dakuten,...Te.Handakuten,...Te.Combinaison].filter(b=>{var z,U,Z,V;return(((z=b.Katakana)==null?void 0:z.toLowerCase().includes(p))||((U=b.Dakuten)==null?void 0:U.toLowerCase().includes(p))||((Z=b.Handakuten)==null?void 0:Z.toLowerCase().includes(p))||((V=b.Romaji)==null?void 0:V.toLowerCase().includes(p)))&&(g===""||b.Type===g)}).sort((b,z)=>{var V,S,O,H,A,_,de,ne;const U=((V=b.Katakana)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.Dakuten)==null?void 0:S.toLowerCase().startsWith(p))||((O=b.Handakuten)==null?void 0:O.toLowerCase().startsWith(p))||((H=b.Romaji)==null?void 0:H.toLowerCase().startsWith(p)),Z=((A=z.Katakana)==null?void 0:A.toLowerCase().startsWith(p))||((_=z.Dakuten)==null?void 0:_.toLowerCase().startsWith(p))||((de=z.Handakuten)==null?void 0:de.toLowerCase().startsWith(p))||((ne=z.Romaji)==null?void 0:ne.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}),w=Array.isArray(Ei.vocabulaire)?Ei.vocabulaire.filter(b=>{var z,U,Z,V;return(((z=b.kanji)==null?void 0:z.toLowerCase().includes(p))||((U=b.hiragana)==null?void 0:U.toLowerCase().includes(p))||((Z=b.francais)==null?void 0:Z.toLowerCase().includes(p))||((V=b.Romaji)==null?void 0:V.toLowerCase().includes(p)))&&(m===""||b.niveau===m)&&(y.length===0||y.includes(b.categorie))}).sort((b,z)=>{var V,S,O,H,A,_,de,ne;const U=((V=b.kanji)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.hiragana)==null?void 0:S.toLowerCase().startsWith(p))||((O=b.francais)==null?void 0:O.toLowerCase().startsWith(p))||((H=b.Romaji)==null?void 0:H.toLowerCase().startsWith(p)),Z=((A=z.kanji)==null?void 0:A.toLowerCase().startsWith(p))||((_=z.hiragana)==null?void 0:_.toLowerCase().startsWith(p))||((de=z.francais)==null?void 0:de.toLowerCase().startsWith(p))||((ne=z.Romaji)==null?void 0:ne.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}):[],x=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})},L=(()=>{switch(u.pathname){case"/choisir-ses/Kanji":return{modeTitle:"Kanji"};case"/choisir-ses/Hiragana":return{modeTitle:"Hiragana"};case"/choisir-ses/Katakana":return{modeTitle:"Katakana"};case"/choisir-ses/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/choisir-ses/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),T=u.pathname;let F;switch(T){case"/choisir-ses/Hiragana":F=t.length;break;case"/choisir-ses/Katakana":F=r.length;break;case"/choisir-ses/Kanji":F=o.length;break;case"/choisir-ses/Vocabulaire":F=s.length;break;case"/choisir-ses/Nombres":F=c.length;break;default:F=0;break}const D=He(),q=()=>{switch(u.pathname){case"/choisir-ses/Vocabulaire":D(eR());break;case"/choisir-ses/Hiragana":D(aR());break;case"/choisir-ses/Katakana":D(nR());break;case"/choisir-ses/Kanji":D(Xw());break;case"/choisir-ses/Nombres":D(iR());break}},nn=()=>{F!==k?alert("Veuillez sélectionner plus de "+k+" "+L.modeTitle):d(-1)};return l.jsxs(vy,{children:[l.jsx(xy,{onClick:()=>d(-1),$bgColor:e,$color:a,$mainBgColor:i,children:l.jsx("img",{src:R.mode==="light"?Io:L0})}),l.jsxs(wy,{children:[l.jsxs(Ry,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("div",{children:[l.jsxs("p",{children:[L.modeTitle," sélectionnes"]}),l.jsx("button",{onClick:q,children:"Vider"})]}),l.jsxs("div",{id:"selectionnes",children:[T==="/choisir-ses/Hiragana"&&t.map((b,z)=>l.jsx("p",{children:b.Nom==="Dakuten"?b.Dakuten:b.Nom==="Handakuten"?b.Handakuten:b.Hiragana},z)),T==="/choisir-ses/Katakana"&&r.map((b,z)=>l.jsx("p",{children:b.Nom==="Dakuten"?b.Dakuten:b.Nom==="Handakuten"?b.Handakuten:b.Katakana},z)),T==="/choisir-ses/Kanji"&&o.map((b,z)=>l.jsx("p",{children:b.Kanji},z)),T==="/choisir-ses/Vocabulaire"&&s.map((b,z)=>l.jsx("p",{children:b.kanji||b.hiragana},z)),T==="/choisir-ses/Nombres"&&c.map((b,z)=>l.jsx("p",{children:b.Nombre},z))]})]}),l.jsxs(jy,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("span",{children:[" ",F,"/",k]}),l.jsxs("p",{children:[L.modeTitle," sélectionnes"]})]})]}),l.jsx(S0,{}),l.jsxs(yy,{children:[u.pathname==="/choisir-ses/Kanji"&&l.jsx(qc,{kanjiList:h}),u.pathname==="/choisir-ses/Hiragana"&&l.jsx(Zc,{hiraganaList:f}),u.pathname==="/choisir-ses/Katakana"&&l.jsx(Gc,{katakanaList:v}),u.pathname==="/choisir-ses/Vocabulaire"&&l.jsx(Yc,{vocabulaireList:w})]}),l.jsx(ky,{onClick:nn,$bgColor:e,$color:a,$mainBgColor:i,children:"Valider"}),l.jsx(Py,{children:l.jsx(Cy,{onClick:x,$bgColor:e,$mainBgColor:i,$color:a,children:l.jsx("img",{src:R.mode==="light"?N0:O0})})})]})}const Ky=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 75%;
    font-size: 7vw;
    color: ${e=>e.$isCorrect===null?e.$fontColor:e.$isCorrect?"#68cf68":"#FF6767"};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px){
        min-height: 60%;
        border-radius: 3vw;
        font-size: 15vw;
    }
    div{
        position: relative;
        width: 50%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            width: 70%;
            height: 65%;
            transform: translateY(3.7vw);
        }
        span{
            font-size: 2.5vw;
            position: absolute;
            color: ${e=>e.$fontColor};
            @media screen and (max-width: 560px){
                font-size: 6vw;
            }
        }
        span:nth-child(1){
            top: 0;
            left: 0;
        }
        span:nth-child(2){
            bottom: 0;
            right: 0;
        }
        span:nth-child(3){
            bottom: 0;
            right: 0;
        }
    }
    
`;function M0({question:e,isCorrect:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=P(d=>d.mode),{color:r}=P(d=>d.color),o=ce(),s=P(d=>d.parametersExercice.exerciceDifficulté);function c(){return e.kanji===""?e.hiragana:e.kanji}function u(){if(e.Type==="Hiragana"||e.Type==="Katakana")return e.Hiragana||e.Katakana;if(e.Nom==="Dakuten")return e.Dakuten;if(e.Nom==="Handakuten")return e.Handakuten;if(e.Type==="Combinaison")return e.Hiragana||e.Katakana}return l.jsx(Ky,{$mainBgColor:t,$color:r,$bgColor:i,$fontColor:a,$isCorrect:n,children:l.jsxs("div",{children:[s==="Débutant"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.OnPrincipalReadingRomaji||e.KunPrincipalReadingRomaji||e.Romaji}):null,l.jsx("p",{children:e.Kanji||c()||e.Nombre||u()}),s=="Débutant"||s=="Intermédiaire"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.KunPrincipalReading||e.OnPrincipalReadingRomaji||e.hiragana}):null]})},e.id)}M0.propTypes={question:M.shape({id:M.string.isRequired,Kanji:M.string,Katakana:M.string,Hiragana:M.string,kanji:M.string,Nombre:M.string,hiragana:M.string,Handakuten:M.string,Dakuten:M.string,Type:M.string,Nom:M.string,Romaji:M.string,KunPrincipalReadingRomaji:M.string,OnPrincipalReadingRomaji:M.string,KunPrincipalReading:M.string,OnPrincipalReading:M.string}).isRequired,isCorrect:M.bool};const by=j.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
        flex-wrap: wrap;
        height: 40%;
    }
`,Ty=j.button`
    border-radius: 0.8vw;
    color: ${e=>e.$fontColor};
    background-color: ${e=>{if(e.$isAnswered){if(e.$isCorrect)return"#60CF60";if(e.$isSelected)return"#FF6767"}return e.$mainBgColor}};    cursor: pointer;
    height: 100%;
    width: 100%;
    font-size: 1.7vw;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    padding-left: 1vw;
    padding-right: 1vw;
    will-change: transform;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    &:hover {
        transform: scale(1.03);
    }
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        width: 49%;
        height: 48%;
        font-size: 6vw;
        padding:0;
    }
`;function E0({question:e,options:n,onAnswer:i,buttonDisabled:a}){const{bgColor:t,fontColor:r,mainBgColor:o}=P(y=>y.mode),[s,c]=K.useState(""),[u,d]=K.useState(!1),[p,m]=K.useState(null);K.useEffect(()=>{d(!1),m(null)},[e]);const g=y=>{c(y);const k=y===(e.Meaning||e.francais||e.Romaji);d(!0),m(y),i(k)},R=y=>{c(y.target.value)};return l.jsx(by,{$mainBgColor:o,$bgColor:t,$fontColor:r,children:n.length>0?n.map((y,k)=>l.jsx(Ty,{$fontColor:r,$mainBgColor:o,$bgColor:t,onClick:()=>g(y),$isCorrect:y===(e.Meaning||e.francais||e.Romaji),$isAnswered:u,$isSelected:y===p,disabled:a,children:y},k)):l.jsx("input",{type:"text",value:s,onChange:R})},e.id)}E0.propTypes={question:M.shape({id:M.string.isRequired,Meaning:M.string,Romaji:M.string,francais:M.string}).isRequired,options:M.arrayOf(M.string).isRequired,onAnswer:M.func.isRequired,buttonDisabled:M.bool.isRequired};const Xc=({color:e,width:n="2.5vw",height:i="2.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 78 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsxs("g",{clipPath:"url(#clip0_309_10)",children:[l.jsx("path",{d:"M74.7033 36.2802C72.8874 36.2802 71.3902 37.6023 71.3902 39.434C71.2309 51.3642 64.3499 62.1476 53.8214 67.9295C37.9569 76.6423 19.4165 68.8215 12.3126 58.2134L22.3314 60.2999C23.9879 60.6344 25.8037 59.631 26.1382 57.8151C26.4727 56.1586 25.4692 54.3428 23.6534 54.0083L3.95026 49.867C2.80343 49.5962 -0.206994 50.4245 0.143426 53.5145L2.62822 73.3929C2.7875 75.0494 4.12547 76.2122 5.782 76.2122C8.25087 76.2122 9.25435 74.3964 9.09507 72.5646L7.93231 62.8644C24.0357 82.1853 44.4716 79.4934 56.8 73.9026C69.5585 67.1013 77.6818 54.0242 77.8411 39.5933C77.857 37.7775 76.5191 36.2802 74.7033 36.2802Z",fill:e}),l.jsx("path",{d:"M3.28122 41.7118C5.09703 41.7118 6.59428 40.3897 6.59428 38.558C6.75357 26.6278 13.6345 15.8444 24.1631 10.0625C40.0275 1.34974 58.5679 9.17048 65.6719 19.7787L55.6531 17.6921C53.9966 17.3576 52.1807 18.361 51.8462 20.1769C51.5118 21.8334 52.5152 23.6492 54.331 23.9837L74.0501 28.125C75.197 28.3958 78.2074 27.5675 77.857 24.4775L75.3722 4.59909C75.2129 2.94256 73.8749 1.7798 72.2184 1.7798C69.7495 1.7798 68.7461 3.59562 68.9053 5.42736L70.0522 15.1276C53.9488 -4.17734 33.5129 -1.5014 21.1845 4.10532C8.42603 10.8907 0.302651 23.9837 0.127441 38.3987C0.127441 40.2304 1.46541 41.7118 3.28122 41.7118Z",fill:e})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_309_10",children:l.jsx("rect",{width:"78",height:"78",fill:"white"})})})]});Xc.propTypes={color:M.string,width:M.string,height:M.string};const $y=j.div`
    display: flex;
    justify-content: center;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    width: 125.5%;
    height: 10%;
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px){
        width: 100%;
        padding: 3vw;
        border-radius: 4vw;
        height: 8vh;
        gap: 1.5vw;
    }
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
        will-change: transform;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 5vw;
        }
    }
    button:nth-child(1){
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        width: 25%;
        &:hover{
            transform: scale(1.02);
        }
    }
    button:nth-child(2){
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        width: 50%;
        font-weight: 600;
        &:hover{
            transform: scale(1.01);
        }
    }
    button:nth-child(3){
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            transform: scale(1.02);
        }
        img{
            width: 2vw;
            height: 2vw;
        }
    }
`;function H0({onReload:e,onSkip:n,buttonDisabled:i}){const{bgColor:a,mainBgColor:t,fontColor:r}=P(u=>u.mode),{color:o}=P(u=>u.color),s=fi(),c=window.innerWidth<=560?"7vw":"2.5vw";return l.jsxs($y,{$color:o,$bgColor:a,$mainBgColor:t,$fontColor:r,children:[l.jsx("button",{onClick:()=>{e(),s(-1)},children:"Retour"}),l.jsx("button",{onClick:n,disabled:i,children:"Passer"}),l.jsx("button",{onClick:e,children:l.jsx(Xc,{width:c,height:c,color:o,children:" "})})]})}H0.propTypes={onReload:M.func.isRequired,onSkip:M.func.isRequired,buttonDisabled:M.bool};const Sy=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${e=>e.$mainBgColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    gap: 1vw;
    @media screen and (max-width: 560px){
        gap: 3vw;
    }
`,Ny=j.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0.6vw;
    grid-row-gap: 0.6vw;
    width: 90%;
    height: 70%;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 1.5vw;
        grid-row-gap: 1.5vw;
        padding: 3vw;
        height: 80%;
        border-radius: 4vw;
    }
`,Oy=j.div`
    grid-area: 1 / 1 / 3 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw;
    padding: 1vw;
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 1 / 1 / 2 / 3;
        border-radius: 3vw;
        font-size: 7vw;
    }
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
        @media screen and (max-width: 560px){
            height: 40%;
        }
    }
    :last-child{
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        border-radius: 0.6vw;
        width: 90%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            height: 50%;
            border-radius: 3vw;
            font-size: 6vw;
        }
    }
`,My=j.div`
    grid-area: 1 / 3 / 2 / 6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw;
    padding: 0.6vw;
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 6 / 1 / 7 / 3;   
        border-radius: 3vw;
        font-size: 7vw;
        flex-direction: column;
    }
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        width: 60%;
        font-weight: 500;
        text-align: center;
        @media screen and (max-width: 560px){
            height: 40%;
        }
    }
    :last-child{
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        border-radius: 0.6vw;
        width: 30%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            height: 50%;
            border-radius: 3vw;
            font-size: 6vw;
            width: 90%;
        }
    }
`,Ey=j.div`
    grid-area: 1 / 6 / 3 / 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius:  0.6vw;
    padding: 1vw;
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 5 / 1 / 6 / 3;
        border-radius: 3vw;
        font-size: 7vw;
    }
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
        @media screen and (max-width: 560px){
            height: 40%;
        }
    }
    :last-child{
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        border-radius: 0.6vw;
        width: 90%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            height: 50%;
            border-radius: 3vw;
            font-size: 6vw;
        }
    }
`,Hy=j.div`
    grid-area: 3 / 1 / 5 / 3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw 0.6vw 0 0.6vw;
    width: 100% ;
    height: 100%;
    @media screen and (max-width: 560px){
        display:none;   
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.6vw;
        width: 80%;
        height: 80%;
        h3{
            font-size: 3vw;
            background-color: ${e=>e.$color};
            color: #F7F7F2;
            font-weight: 600;
            width: 100%;
            text-align: center;
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 0.6vw;
        }
        div{
            background-color: ${e=>e.$color};
            color: #F7F7F2;
            width: calc(100% - 2vw);
            height: calc(60% - 2vw);
            border-radius: 0.6vw;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 0.6vw;
            padding: 1vw;
            font-size: 1.2vw;
            font-weight: 300;
            span{
                text-transform: capitalize;
                font-style: italic;
                font-weight: 800;
                margin-right: 0.5vw;
            }
        }
    }

`,Dy=j.div`
    grid-area: 4 / 3 / 5 / 6; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0  0.6vw 0.6vw 0;
    width: calc(100% + 0.6vw);
    min-height: calc(11vw + 0.6vw);
    margin-left: -0.6vw;
    margin-top: -0.6vw;
    @media screen and (max-width: 560px){
        display:none;   
    }
    div{
        display: flex;
        flex-wrap: wrap;
        gap: 0.6vw;
        width: 94%;
        margin-left: -0.6vw;
        max-height: 75%;
        font-size: 2vw;
        color:#F7F7F2;
        font-weight: 600;
        overflow-y: scroll;
        overflow-x: hidden;
        border-radius: 0.6vw;
        border: 0.2vw solid ${e=>e.$color};
        padding: 0.6vw;
        p{
            cursor: pointer;
            background-color: ${e=>e.$color};
            padding: 0.3vw 1vw;
            border-radius: 0.6vw;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
            will-change: transform;
            &:hover{
                transform: scale(1.15);
            }
        }
    }
`,zy=j.div`
    grid-area: 3 / 6 / 4 / 8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw;
    height: calc(100% - 0.6vw);
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 2 / 1 / 3 / 2;
        border-radius: 3vw;
        font-size: 7vw;
        height: 100%;
    }
    :last-child{
        color: ${e=>e.$color};
        font-weight: 600;
        font-size: 8vw;
    }
`,Jy=j.div`
    grid-area: 4 / 6 / 5 / 8;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw;
    height: calc(100% + 0.6vw);
    margin-top: -0.6vw;
    font-size: 4vw;
    color: ${e=>e.$color};
    font-weight: 600;
    @media screen and (max-width: 560px){
        grid-area: 2 / 2 / 3 / 3; 
        border-radius: 3vw;
        font-size: 10vw;
        height: 100%;
        margin-top: 0;
    }
    span{
        font-size: 3vw;
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
    }
`,Fy=j.div`
    z-index: 101;
    grid-area: 2 / 3 / 4 / 6;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$bgColor};
    border-radius: 0.6vw;
    margin-left: -0.6vw;
    padding: 0 0 0.6vw 0.6vw ;
    position: relative;
    @media screen and (max-width: 560px){
        grid-area: 3 / 1 / 5 / 3;
        border-radius: 3vw;
    }
    &::after{
        content: "";
        position: absolute;
        width: 2vw;
        height: 2vw;
        bottom: -0.6vw;
        left: -0.6vw;
        background-color: ${e=>e.$mainBgColor};
        z-index: -2;
        @media screen and (max-width: 560px){
            width: 0vw;
            height: 0vw;
        }
    }
    &::before{
        content: "";
        position: absolute;
        width: 2vw;
        height: 2vw;
        bottom: -0;
        left: -0;
        border-radius: 0.6vw;
        background-color: ${e=>e.$bgColor};
        z-index: -1;
        @media screen and (max-width: 560px){
            width: 0vw;
            height: 0vw;
        }
    }
    div{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.6vw;
        width: 100%;
        height: 100%;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }
`,_y=j.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    width: 90%;
    height: 10%;
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        padding: 3vw;
        height: 8vh;
    }
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
        will-change: transform;
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
        &:hover{
            background-color: #858585;
        }
    }
    button:nth-child(1){
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 3vw;
            height: 3vw;
        }
        &:hover{
            transform: scale(1.02);
        }
        
    }
    button:nth-child(2){
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        width: 75%;
        font-weight: 600;
        &:hover{
            transform: scale(1.01);
        }
    }
`;function D0({onReload:e}){const n=fi(),{bgColor:i,fontColor:a,mainBgColor:t}=P(x=>x.mode),{color:r}=P(x=>x.color),o=P(x=>x.parametersExercice.exerciceModeDeJeu),s=P(x=>x.parametersExercice.exerciceNumber),c=P(x=>x.parametersExercice.exerciceDifficulté),u=P(x=>x.parametersExercice.exerciceTimer),d=P(x=>x.exercice.totalTimer),p=P(x=>x.parametersExercice.exerciceTimerActive),m=P(x=>x.exercice.totalfaute),g=P(x=>x.exercice.questionsIncorrectes),[R,y]=K.useState(null),h=(x=>{const C=Math.floor(x/60),L=x%60,T=C.toString().padStart(2,"0"),F=L.toString().padStart(2,"0");return`${T}:${F}`})(d);if(!g)return l.jsx("div",{children:"Loading..."});const v=(()=>{switch(location.pathname){case"/Exercices/Kanji":return{titleFr:"Kanji"};case"/Exercices/Hiragana":return{titleFr:"Hiragana"};case"/Exercices/Katakana":return{titleFr:"Katakana"};case"/Exercices/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Exercices/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),w=window.innerWidth<=560?"7vw":"2.5vw";return l.jsxs(Sy,{$mainBgColor:t,children:[l.jsxs(Ny,{$bgColor:i,children:[l.jsxs(Oy,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Difficulté"}),l.jsx("p",{children:c})]}),l.jsxs(My,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsxs("p",{children:["Nombre de ",v.titleFr," "]}),l.jsx("p",{children:s})]}),l.jsxs(Ey,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Mode de jeu"}),l.jsx("p",{children:o})]}),l.jsx(Hy,{$mainBgColor:t,$fontColor:a,$color:r,children:R&&l.jsxs("div",{children:[l.jsx("h3",{children:R.kanji||R.Dakuten||R.Handakuten||R.hiragana||R.Hiragana||R.Katakana||R.Kanji}),l.jsxs("div",{children:[R.Romaji&&l.jsxs("p",{children:[l.jsx("span",{children:"Romaji "})," ",R.Romaji]}),R.francais&&l.jsxs("p",{children:[l.jsx("span",{children:"Francais "})," ",R.francais]}),R.hiragana&&l.jsxs("p",{children:[l.jsx("span",{children:"Hiragana "})," ",R.hiragana]}),R.OnPrincipalReading&&l.jsxs("p",{children:[l.jsx("span",{children:"On "})," ",R.OnPrincipalReading]}),R.KunPrincipalReading&&l.jsxs("p",{children:[l.jsx("span",{children:"Kun "})," ",R.KunPrincipalReading]}),R.Meaning&&l.jsxs("p",{children:[l.jsx("span",{children:"Francais "})," ",R.Meaning]})]})]})}),l.jsx(Dy,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsx("div",{children:g.length>0?g.filter(Boolean).map((x,C)=>l.jsx("p",{onMouseEnter:()=>y(x),children:x.kanji||(x.Nom==="Handakuten"?x.Handakuten:x.Nom==="Dakuten"?x.Dakuten:x.hiragana||x.Hiragana||x.Katakana||x.Kanji)},C)):l.jsx("p",{children:"pas de faute"})})}),l.jsxs(zy,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Erreur"}),l.jsx("p",{children:m})]}),l.jsx(Jy,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsxs("p",{children:[p===!1?h:u,l.jsx("span",{children:"s"})]})}),l.jsx(Fy,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:l.jsx("div",{})})]}),l.jsxs(_y,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:[l.jsxs("button",{onClick:e,children:[" ",l.jsx(Xc,{color:r,width:w,height:w,children:" "})]}),l.jsx("button",{onClick:()=>{e(),n(-1)},children:"Terminer"})]})]})}D0.propTypes={onReload:M.func.isRequired};const Ay=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1vw;
    position: relative;
    @media screen and (max-width: 560px){
        gap: 3vw;
    }
`,By=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    padding: 1vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 77%;
    background-color: ${e=>e.$bgColor};
    @media screen and (max-width: 560px){
        gap: 3vw;
        padding: 3vw;
        border-radius: 4vw;
        height: 80%;
    }
`,Iy=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
`,Vy=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2vw;
    left: 1vw;
    background-color: ${e=>e.$color};
    width: 9vw;
    height: 4vw;
    border-radius: 0.5vw;
    color: #F7F7F2;
    @media screen and (max-width: 560px){
        top:3vw;
        left: 0;
        width: 25vw;
        height: 12vw;
        border-radius: 2.9vw 0  2.9vw 0;
    }
    p{
        font-size: 2vw;
        font-weight: 600;
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
        span{
            font-size: 1.5vw;
            @media screen and (max-width: 560px){
                font-size: 5vw;
            }
        }
    }
`,qu=(e,n)=>{const i=[e],a=n.filter(t=>t!==e);for(;i.length<4;){const t=Math.floor(Math.random()*a.length),r=a[t];i.includes(r)||i.push(r)}return i.sort(()=>.5-Math.random())};function Wy(){const e=P(N=>N.parametersExercice.exerciceModeDeJeu),n=P(N=>N.parametersExercice.exerciceNumber),i=P(N=>N.dataChoice),a=P(N=>N.parametersExercice.exerciceTypeDeKana),t=P(N=>N.parametersExercice.exerciceTimerActive),r=P(N=>N.dataChoice.katakana),o=P(N=>N.dataChoice.hiragana),{bgColor:s}=P(N=>N.mode),[c,u]=K.useState([]),[d,p]=K.useState(0),[m,g]=K.useState(null),[R,y]=K.useState(0),k=K.useRef(null),h=K.useRef(null),f=He(),v=ce(),w=P(N=>N.parametersExercice.exerciceTimer),[x,C]=K.useState(w),{color:L}=P(N=>N.color),[T,F]=K.useState(1),[D,q]=K.useState(1),[nn,b]=K.useState(!1),[z,U]=K.useState(!1),Z=K.useCallback(N=>{q(J=>J+1),f(ur(D)),N===!0&&(q(1),f(ur(D)))},[q,f,D]),V=K.useCallback((N,J)=>{F($n=>$n+1),f(dr(T)),f(Uw(J)),N===!0&&(F(1),f(dr(T)))},[F,f,T]),S=K.useCallback(()=>{h.current&&clearInterval(h.current),y(0),t===!1&&(h.current=setInterval(()=>{y(N=>N+1)},1e3))},[t]),O=K.useCallback(()=>{h.current&&(clearInterval(h.current),h.current=null)},[]),H=K.useCallback(()=>{C(w),k.current&&k.current()},[w]),A=K.useCallback(()=>{if(t===!0){const N=c[d];setTimeout(()=>{d<c.length-1?(p(d+1),V(!1,N)):(V(!1,N),U(!0),f(Iu(R)),O())},900)}},[d,c,t,V,O,f,R]);K.useEffect(()=>{if(t===!0&&z===!1){const N=setInterval(()=>{C(J=>J<=1?(clearInterval(N),A(),setTimeout(()=>{C(w)},900),0):J-1)},1e3);return()=>clearInterval(N)}},[w,A,f,t,z]),K.useEffect(()=>{C(w)},[w]),K.useEffect(()=>{H&&H(w)},[H,w]);const _=K.useCallback(()=>{let N;if(v.pathname.includes("/Exercices/Kanji")?(S(),N=Bo.kanji):v.pathname.includes("/Exercices/Hiragana")?(S(),a==="normal"?N=be.Hiragana:a==="accents"?N=[...be.Dakuten,...be.Handakuten]:a==="combinaison"?N=be.Combinaison:a==="tout"&&(N=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison],e==="Choisir ses questions"&&(N=o.map(J=>J.affiche==="Hiragana"?{...J,Type:"Hiragana"}:J.affiche==="Accents"?{...J,Type:J.affiche==="Accents"?"Dakuten":"Handakuten"}:{...J,Type:"Combinaison"})))):v.pathname.includes("/Exercices/Vocabulaire")?(S(),N=Ei.vocabulaire):v.pathname.includes("/Exercices/Nombres")?(S(),N=Ei.nombres):v.pathname.includes("/Exercices/Katakana")&&(S(),a==="normal"?N=Te.Katakana:a==="accents"?N=[...Te.Dakuten,...Te.Handakuten]:a==="combinaison"?N=Te.Combinaison:a==="tout"?(N=[...Te.Katakana,...Te.Dakuten,...Te.Handakuten,...Te.Combinaison],e==="Choisir ses questions"&&(N=r.map(J=>J.affiche==="Katakana"?{...J,Type:"Katakana"}:J.affiche==="Accents"?{...J,Type:J.affiche==="Accents"?"Dakuten":"Handakuten"}:{...J,Type:"Combinaison"}))):O()),N){let J=[];if(e==="Aléatoire")J=N.sort(()=>.5-Math.random()).slice(0,n);else if(e==="N5")J=N.filter(Y=>Y.JLPTLevel==="N5").sort(()=>.5-Math.random()).slice(0,n);else if(e==="Choisir ses questions"){if(f(Qc("tout")),v.pathname.includes("/Exercices/Kanji")&&i.kanji){const Y=i.kanji.map(X=>X.Kanji);J=N.filter(X=>Y.includes(X.Kanji)).sort(()=>.5-Math.random()).slice(0,n),console.log(J)}else if(v.pathname.includes("/Exercices/Vocabulaire")&&i.vocabulaire){const Y=i.vocabulaire.map(X=>X.francais);J=N.filter(X=>Y.includes(X.francais)).sort(()=>.5-Math.random()).slice(0,n)}else if(v.pathname.includes("/Exercices/Hiragana")&&i.hiragana){const Y=i.hiragana.map(X=>X.hiragana);J=N.filter(X=>Y.includes(X.hiragana)).sort(()=>.5-Math.random()).slice(0,n)}else if(v.pathname.includes("/Exercices/Katakana")&&i.katakana){const Y=i.katakana.map(X=>X.Katakana);J=N.filter(X=>Y.includes(X.Katakana)).sort(()=>.5-Math.random()).slice(0,n)}else if(v.pathname.includes("/Exercices/Nombres")&&i.nombre){const Y=i.nombre.map(X=>X.francais);J=N.filter(X=>Y.includes(X.francais)).sort(()=>.5-Math.random()).slice(0,n)}}const $n=J.map(Y=>{if(v.pathname.includes("/Exercices/Hiragana")||v.pathname.includes("/Exercices/Katakana")){const X=Y.Romaji,Bn=qu(X,N.map(Ie=>Ie.Romaji));return{...Y,options:Bn,id:Y.id.toString()}}else{const X=Y.Meaning||Y.francais,Bn=qu(X,N.map(Ie=>Ie.Meaning||Ie.francais));return{...Y,options:Bn,id:Y.id.toString()}}});u($n),p(0)}},[e,n,i,a,v.pathname,S,O,f,r,o]);K.useEffect(()=>{const N=()=>{f(dr(0)),f(ur(0))};_(),O(),S(),N()},[_,O,S,f]);const de=N=>{g(N);const J=c[d];N?(Z(),b(!0),O()):(V(!1,J),b(!0),O()),setTimeout(()=>{d<c.length-1?(p(d+1),g(null)):(f(Iu(R)),U(!0)),g(null),b(!1),C(w)},900),k.current&&k.current()},ne=()=>{de(!1)},De=()=>{Z(!0),V(!0),f(ur(0)),f(dr(0)),_(),O(),S(),U(!1),f(Qw()),C(w)};return l.jsxs(Ay,{children:[z===!0?l.jsx(D0,{onReload:De}):null,l.jsxs(By,{$bgColor:s,children:[t===!0&&l.jsx(Vy,{$color:L,children:l.jsxs("p",{children:[x,l.jsx("span",{children:"s"})]})}),c&&c.length>0?l.jsxs(Iy,{children:[l.jsx(M0,{question:c[d],isCorrect:m}),l.jsx(E0,{question:c[d],options:c[d].options,onAnswer:de,isCorrect:m,buttonDisabled:nn})]},c[d].id):l.jsx("p",{children:"Aucune question disponible."})]}),l.jsx(H0,{onReload:De,onSkip:ne,buttonDisabled:nn})]})}const Uy=j.div`
    width: 6vw;
    border-radius: 0.8vw;
    padding: 1vw;
    height: 60.3vh;
    display: flex;
    flex-direction: column-reverse;
    background-color: ${e=>e.$bgColor};
    div{
        background-color:${e=>e.$mainBgColor} ;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 0.6vw;
        overflow: hidden;
        div{
            min-width: 102%;
            z-index: 10;
            border-radius: 0.4vw;
            background-color: ${e=>e.$color};
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        }
    }
`;function Zu(){const e=P(s=>s.parametersExercice.exerciceNumber),n=P(s=>s.exercice.totalfaute),i=P(s=>s.exercice.totalreussite),{color:a}=P(s=>s.color),{bgColor:t,mainBgColor:r}=P(s=>s.mode),o=(n+i)/e*100;return l.jsx(Uy,{$bgColor:t,$mainBgColor:r,$color:a,children:l.jsx("div",{children:l.jsx("div",{style:{height:`${o}%`}})})})}const Qy=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    border-radius: 0.8vw;
    width: 78%;
    min-height: 80%;
    position: relative;
    @media screen and (max-width: 560px){
        width: 90%;
        gap: 3vw;
    }
`,qy=j.div`
    z-index: -1;
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    position: absolute;
    top: 0;
    width: 94vw;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 560px){
        display: none;
    }
`;function Zy(){const{bgColor:e}=P(n=>n.mode);return l.jsxs(Qy,{$bgColor:e,children:[l.jsx(Wy,{}),l.jsxs(qy,{children:[l.jsx(Zu,{}),l.jsx(Zu,{})]})]})}const Gy=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    width: 25%;
    height: calc(100% - 2vw);
    font-size: 2vw;
    border-radius: 0.8vw;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    padding: 1vw;
    @media screen and (max-width: 560px){
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
        font-size: 7vw;
    }
    p{
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        height: 100%;
        border-radius: 0.6vw;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            
            border-radius: 3vw;
        }
    }
    p:nth-child(1){
        width: 30%;
        color: #68cf68;
    }
    p:nth-child(2){
        width: 40%;
    }
    p:nth-child(3){
        width: 30%;
        color: #FF6767;
    }
`;function Yy(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(s=>s.mode),a=P(s=>s.exercice.totalfaute),t=P(s=>s.exercice.totalreussite),r=P(s=>s.parametersExercice.exerciceNumber),o=t+a;return l.jsxs(Gy,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("p",{children:t}),l.jsxs("p",{children:[o,"/",r]}),l.jsx("p",{children:a})]})}function Xy(){return l.jsx("div",{})}const ex=j.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20%;
    @media screen and (max-width: 560px){
        width: 100%;
        justify-content: center;
        height: 10vh;
    }
`;function nx(){return l.jsxs(ex,{children:[l.jsx(Yy,{}),location.pathname==="/Exercices/Katakana"||location.pathname==="/Exercices/Hiragana"||location.pathname==="/Exercices/Kanji"&&l.jsx(Xy,{})]})}const ix=j.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 1vw);
    max-width: 94vw;
    margin: auto;
    gap: 1vw;
    margin-top: 1vw;
    position: relative;
    @media screen and (max-width: 560px){
        max-width: 100%;
        gap: 5vw;
        height: 100vh;
        margin: 0;
    }
    
`;function ax(){return l.jsxs(ix,{children:[l.jsx(nx,{}),l.jsx(Zy,{})]})}const tx=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    height: 100vh;
    text-align: center;
    width: calc( 100% - 17vw);
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 3vw;
    }
    h1{
        font-size: 5vw;
        color: ${e=>e.$color};
        @media screen and (max-width: 560px) {
            font-size: 25vw;
        }
    }
    p{
        font-size: 2vw;
        margin-bottom: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
    a{
        font-size: 2vw;
        color:  #F7F7F2;
        background-color: ${e=>e.$color};
        padding: 1vw;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            padding: 3vw;
            border-radius: 3vw;
        }
    }
`,rx=()=>{const{fontColor:e}=P(i=>i.mode),{color:n}=P(i=>i.color);return l.jsxs(tx,{$fontColor:e,$color:n,className:"error404-container",children:[l.jsx("h1",{children:"404"}),l.jsx("p",{children:"Je crois que tu t'es perdu là"}),l.jsx(mi,{to:"/",children:"Retour à l'accueil"})]})},ox=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    width: 74vw;
    margin-left: 3vw;
    h1{
        font-size: 3vw;
        @media screen and (max-width: 560px) {
            font-size: 9vw;
        }
    }
    a{
        font-size: 1.5vw;
        color: #F7F7F2;
        font-weight: bold;
        border-radius: 0.8vw;
        padding: 1vw 2vw;
        cursor: pointer;
        position: absolute;
        top: 1vw;
        @media screen and (max-width: 560px) {
            top: 20vw;
            padding: 3vw 6vw;
            font-size: 4.5vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: 100vw;
        margin-left: 0;
        margin-top: 40vw;
    }
`,lx=j.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        margin-top: 10vw;
    }
`,Bi=j.button`
    width: 30%;
    height: 15vw;
    border: 1vw solid ${e=>e.$bgColor};
    border-radius: 0.8vw;
    cursor: pointer;
    margin: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.1);
    }
    @media screen and (max-width: 560px) {
        width: 45%;
        height: 30vw;
    }
`;function sx(){const e=He(),{color:n}=P(s=>s.color),{bgColor:i,fontColor:a}=P(s=>s.mode),[,t]=K.useState(n),r=s=>{t(s),e(_w(s))};let o=fi();return l.jsxs(ox,{$fontColor:a,$bgColor:i,children:[l.jsx(mi,{style:{backgroundColor:n},onClick:()=>o(-1),children:"Retour"}),l.jsx("h1",{style:{color:n},children:"ColorCustome"}),l.jsxs(lx,{children:[l.jsx(Bi,{$bgColor:i,onClick:()=>r("#F75D48"),style:{backgroundColor:"#F75D48"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#5448F7"),style:{backgroundColor:"#5448F7"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#FF0000"),style:{backgroundColor:"#FF0000"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#42e55b"),style:{backgroundColor:"#42e55b"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#FF4BC9"),style:{backgroundColor:"#FF4BC9"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#48B4F7"),style:{backgroundColor:"#48B4F7"}})]})]})}const cx="data:image/svg+xml,%3csvg%20width='29'%20height='40'%20viewBox='0%200%2029%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.5%2032.5V39.5H2.5V32.5C2.5%2025.8726%207.87258%2020.5%2014.5%2020.5C21.1274%2020.5%2026.5%2025.8726%2026.5%2032.5Z'%20fill='%23353535'%20stroke='%23353535'/%3e%3cg%20filter='url(%23filter0_d_406_112)'%3e%3cellipse%20cx='14.5'%20cy='13'%20rx='10.5'%20ry='10'%20fill='%23353535'/%3e%3cpath%20d='M24.5%2013C24.5%2018.224%2020.0461%2022.5%2014.5%2022.5C8.95388%2022.5%204.5%2018.224%204.5%2013C4.5%207.776%208.95388%203.5%2014.5%203.5C20.0461%203.5%2024.5%207.776%2024.5%2013Z'%20stroke='%23353535'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_406_112'%20x='0'%20y='0'%20width='29'%20height='28'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.47%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_406_112'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_406_112'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",dx="data:image/svg+xml,%3csvg%20width='29'%20height='40'%20viewBox='0%200%2029%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2032.5C2.5%2025.8726%207.87258%2020.5%2014.5%2020.5C21.1274%2020.5%2026.5%2025.8726%2026.5%2032.5V39.5H2.5V32.5Z'%20fill='white'%20stroke='white'/%3e%3cg%20filter='url(%23filter0_d_341_9)'%3e%3cellipse%20cx='14.5'%20cy='13'%20rx='10.5'%20ry='10'%20fill='white'/%3e%3cpath%20d='M24.5%2013C24.5%2018.224%2020.0461%2022.5%2014.5%2022.5C8.95388%2022.5%204.5%2018.224%204.5%2013C4.5%207.776%208.95388%203.5%2014.5%203.5C20.0461%203.5%2024.5%207.776%2024.5%2013Z'%20stroke='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_341_9'%20x='0'%20y='0'%20width='29'%20height='28'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_341_9'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_341_9'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",ux=j.div`
    position: absolute;
    top: 1vw;
    left: 3.1vw;
    display: flex;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.06);
    }
    @media screen and (max-width: 560px) {
        top: 4vw;
    }
`,gx=j.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.$bgColor};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    z-index: 1;
    @media screen and (max-width: 560px) {
            width: 13vw;
            height: 12vw;
            border-radius: 3vw;
        }
    img{
        width: 2vw;
        height: 2.5vw;
        @media screen and (max-width: 560px) {
            width: 6vw;
            height: 6vw;
        }
    }
`,px=j.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        font-size: 1vw;
        color: #F7F7F2;
        background-color:  ${e=>e.$color};
        height: 2vw;
        border-radius: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 1.5vw;
        margin-left: -1.5vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            height:6vw; 
            border-radius: 3vw;
            padding-left: 4.5vw;
            margin-left: -4.5vw;
            font-size: 3vw;
        }
    }
    p:nth-child(1){
        width: 100%;
        padding-right: 1vw;
        padding-left: 1.8vw;
        @media screen and (max-width: 560px) {
            padding-right: 3vw;
            padding-left: 4.5vw;
        }
    }
    p:nth-child(2){
        width: 5.5vw;
        @media screen and (max-width: 560px) {
            width: 15vw;
        }
        span{
            margin-right: 0.3vw;
        }
    }
`;function fx(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(o=>o.mode),{color:a}=P(o=>o.color),t=localStorage.getItem("mode")||"light",r=localStorage.getItem("userName");return l.jsxs(ux,{$mainBgColor:i,$fontColor:n,children:[l.jsx(gx,{$bgColor:e,children:l.jsx("img",{src:t==="light"?dx:cx,alt:"Profile"})}),l.jsxs(px,{$color:a,children:[l.jsx("p",{children:r}),l.jsxs("p",{children:[l.jsx("span",{children:"lvl"}),"1"]})]})]})}const mx=j.div`
    top:0;
    left: 0;
    z-index: 101;
    &::before{
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #929291dd;
        z-index: 100;
    }
`,hx=j.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.1vw solid #F7F7F2;
    background-color: ${e=>e.$bgColor};
    width: 30vw;
    height: 28.3vw;
    border-radius: 0.8vw;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    z-index: 101;
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        width: 90vw;
        height: 95vw;
        border-radius: 4vw;
        gap: 1.5vw;
        padding: 3vw;
    }
    h1{
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        height: 9vw;
        font-size: 5vw;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            height: 27vw;
            font-size: 15vw;
            border-radius: 3vw;
        }
    }
    p{
        font-size: 1vw;
        background-color: ${e=>e.$mainBgColor};
        padding: 1vw;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 3.5vw;   
            border-radius: 3vw;
            padding: 3vw;
        }
        span{
            font-size: 1.5vw;
            font-weight: 700;
            color: ${e=>e.$color};
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
    }
`,vx=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p{
        font-size: 1.5vw;
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.5vw;
        width:calc( 100% - 2vw);
        color: ${e=>e.$color};
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 4.5vw;
            border-radius: 3vw;
            width:calc( 100% - 6vw);
        }
    }
    input{
        height: 3vw;
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        width:calc( 100% - 1.6vw);
        padding-left: 1vw;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        border: 0.3vw solid ${e=>e.$color};
        @media screen and (max-width: 560px) {
            height: 11vw;
            border-radius: 3vw;
            font-size: 4vw;
            width:calc( 100% - 4.5vw);
            padding-left: 3vw;
        }
    }
    input::placeholder{
        font-size: 1.2vw;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 4vw;
        }
    }
    div{
        display: flex;
        gap: 0.5vw;
        width: 100%;
        @media screen and (max-width: 560px) {
            gap: 1.5vw;
        }
        button{
            height: 3vw;
            border: none;
            border-radius: 0.5vw;
            background-color: ${e=>e.$mainBgColor};
            color: ${e=>e.$fontColor};
            font-size: 1.2vw;
            cursor: pointer;
            @media screen and (max-width: 560px) {
                height: 11vw;
                border-radius: 3vw;
                font-size: 4vw;
            }
        }
        button:nth-child(1){
            width: 60%;
            font-weight: 700;
        }
        button:nth-child(2){
            background-color: ${e=>e.$color};
            color:#F7F7F2;
            font-weight: 700;
            width: 40%;
        }
    }
`;function wx(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(o=>o.mode),{color:a}=P(o=>o.color),t=()=>{localStorage.setItem("userName","Invité"),window.location.reload()},r=()=>{const o=document.querySelector("input").value;localStorage.setItem("userName",o),window.location.reload()};return l.jsx(mx,{children:l.jsxs(hx,{$mainBgColor:i,$fontColor:n,$color:a,$bgColor:e,children:[l.jsx("h1",{children:"Bienvenue"}),l.jsxs("p",{children:[l.jsx("span",{children:"Bienvenue dans l'alpha de nihongo "}),l.jsx("br",{}),"sachez que tout votre progression sera garder dans votre navigateur si vous changez de navigateur vous perdrez votre progression"]}),l.jsxs(vx,{$mainBgColor:i,$fontColor:n,$color:a,$bgColor:e,children:[l.jsx("p",{children:"Ajouter un nom utilisateur"}),l.jsx("input",{type:"text",placeholder:"Entrez votre nom d'utilisateur"}),l.jsxs("div",{children:[l.jsx("button",{onClick:t,children:"Continuer en tant qu'invité"}),l.jsx("button",{onClick:r,children:"Valider"})]})]})]})})}function Rx(){const e=ce(),n=!e.pathname.startsWith("/choisir-ses/")&&!e.pathname.startsWith("/Exercices/"),i=!e.pathname.startsWith("/Exercices/"),t=!localStorage.getItem("userName");return l.jsxs("div",{children:[n&&l.jsx(U1,{}),i&&l.jsx(mR,{}),i&&l.jsx(fR,{}),i&&l.jsx(fx,{}),t&&l.jsx(wx,{}),l.jsxs(Yv,{location:e,children:[l.jsx(an,{path:"/",element:l.jsx(FR,{})}),l.jsx(an,{path:"/kanji",element:l.jsx(u5,{})}),l.jsx(an,{path:"/vocabulaire",element:l.jsx(p5,{})}),l.jsx(an,{path:"/katakana",element:l.jsx(h5,{})}),l.jsx(an,{path:"/hiragana",element:l.jsx(w5,{})}),l.jsx(an,{path:"/nombres",element:l.jsx(j5,{})}),l.jsx(an,{path:"/dictionnaire/*",element:l.jsx(hy,{})}),l.jsx(an,{path:"/choisir-ses/*",element:l.jsx(Ly,{})}),l.jsx(an,{path:"/color",element:l.jsx(sx,{})}),l.jsx(an,{path:"/exercices/*",element:l.jsx(ax,{})}),l.jsx(an,{path:"*",element:l.jsx(rx,{})})]})]})}const jx="/Nihongo-V2/",yx=$l.createRoot(document.getElementById("root"));yx.render(l.jsx(S1,{store:tR,children:l.jsx(r2,{basename:jx,children:l.jsx(Rx,{})})}));
