function zm(e,n){for(var i=0;i<n.length;i++){const a=n[i];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function Xu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eg={exports:{}},Ro={},ng={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=Symbol.for("react.element"),Fm=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Bm=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),Um=Symbol.for("react.suspense"),Qm=Symbol.for("react.memo"),qm=Symbol.for("react.lazy"),id=Symbol.iterator;function Zm(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,tg={};function La(e,n,i){this.props=e,this.context=n,this.refs=tg,this.updater=i||ig}La.prototype.isReactComponent={};La.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};La.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rg(){}rg.prototype=La.prototype;function Is(e,n,i){this.props=e,this.context=n,this.refs=tg,this.updater=i||ig}var Vs=Is.prototype=new rg;Vs.constructor=Is;ag(Vs,La.prototype);Vs.isPureReactComponent=!0;var ad=Array.isArray,og=Object.prototype.hasOwnProperty,Ws={current:null},lg={key:!0,ref:!0,__self:!0,__source:!0};function sg(e,n,i){var a,t={},r=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)og.call(n,a)&&!lg.hasOwnProperty(a)&&(t[a]=n[a]);var s=arguments.length-2;if(s===1)t.children=i;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];t.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)t[a]===void 0&&(t[a]=s[a]);return{$$typeof:Ot,type:e,key:r,ref:o,props:t,_owner:Ws.current}}function Ym(e,n){return{$$typeof:Ot,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ot}function Gm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var td=/\/+/g;function Qo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Gm(""+e.key):n.toString(36)}function Rr(e,n,i,a,t){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ot:case Fm:o=!0}}if(o)return o=e,t=t(o),e=a===""?"."+Qo(o,0):a,ad(t)?(i="",e!=null&&(i=e.replace(td,"$&/")+"/"),Rr(t,n,i,"",function(d){return d})):t!=null&&(Us(t)&&(t=Ym(t,i+(!t.key||o&&o.key===t.key?"":(""+t.key).replace(td,"$&/")+"/")+e)),n.push(t)),1;if(o=0,a=a===""?".":a+":",ad(e))for(var s=0;s<e.length;s++){r=e[s];var c=a+Qo(r,s);o+=Rr(r,n,i,c,t)}else if(c=Zm(e),typeof c=="function")for(e=c.call(e),s=0;!(r=e.next()).done;)r=r.value,c=a+Qo(r,s++),o+=Rr(r,n,i,c,t);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Ut(e,n,i){if(e==null)return e;var a=[],t=0;return Rr(e,a,"","",function(r){return n.call(i,r,t++)}),a}function Xm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},jr={transition:null},e0={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Ws};function cg(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Ut,forEach:function(e,n,i){Ut(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return Ut(e,function(){n++}),n},toArray:function(e){return Ut(e,function(n){return n})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=La;I.Fragment=_m;I.Profiler=Bm;I.PureComponent=Is;I.StrictMode=Am;I.Suspense=Um;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;I.act=cg;I.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=ag({},e.props),t=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Ws.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)og.call(n,c)&&!lg.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=i;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];a.children=s}return{$$typeof:Ot,type:e.type,key:t,ref:r,props:a,_owner:o}};I.createContext=function(e){return e={$$typeof:Vm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Im,_context:e},e.Consumer=e};I.createElement=sg;I.createFactory=function(e){var n=sg.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Wm,render:e}};I.isValidElement=Us;I.lazy=function(e){return{$$typeof:qm,_payload:{_status:-1,_result:e},_init:Xm}};I.memo=function(e,n){return{$$typeof:Qm,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=jr.transition;jr.transition={};try{e()}finally{jr.transition=n}};I.unstable_act=cg;I.useCallback=function(e,n){return Me.current.useCallback(e,n)};I.useContext=function(e){return Me.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};I.useEffect=function(e,n){return Me.current.useEffect(e,n)};I.useId=function(){return Me.current.useId()};I.useImperativeHandle=function(e,n,i){return Me.current.useImperativeHandle(e,n,i)};I.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return Me.current.useMemo(e,n)};I.useReducer=function(e,n,i){return Me.current.useReducer(e,n,i)};I.useRef=function(e){return Me.current.useRef(e)};I.useState=function(e){return Me.current.useState(e)};I.useSyncExternalStore=function(e,n,i){return Me.current.useSyncExternalStore(e,n,i)};I.useTransition=function(){return Me.current.useTransition()};I.version="18.3.1";ng.exports=I;var K=ng.exports;const Si=Xu(K),Nl=zm({__proto__:null,default:Si},[K]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0=K,i0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),t0=Object.prototype.hasOwnProperty,r0=n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o0={key:!0,ref:!0,__self:!0,__source:!0};function dg(e,n,i){var a,t={},r=null,o=null;i!==void 0&&(r=""+i),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)t0.call(n,a)&&!o0.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)t[a]===void 0&&(t[a]=n[a]);return{$$typeof:i0,type:e,key:r,ref:o,props:t,_owner:r0.current}}Ro.Fragment=a0;Ro.jsx=dg;Ro.jsxs=dg;eg.exports=Ro;var l=eg.exports,Ol={},ug={exports:{}},Xe={},gg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,O){var H=S.length;S.push(O);e:for(;0<H;){var A=H-1>>>1,_=S[A];if(0<t(_,O))S[A]=O,S[H]=_,H=A;else break e}}function i(S){return S.length===0?null:S[0]}function a(S){if(S.length===0)return null;var O=S[0],H=S.pop();if(H!==O){S[0]=H;e:for(var A=0,_=S.length,ce=_>>>1;A<ce;){var ne=2*(A+1)-1,De=S[ne],N=ne+1,z=S[N];if(0>t(De,H))N<_&&0>t(z,De)?(S[A]=z,S[N]=H,A=N):(S[A]=De,S[ne]=H,A=ne);else if(N<_&&0>t(z,H))S[A]=z,S[N]=H,A=N;else break e}}return O}function t(S,O){var H=S.sortIndex-O.sortIndex;return H!==0?H:S.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],d=[],u=1,p=null,h=3,g=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(S){for(var O=i(d);O!==null;){if(O.callback===null)a(d);else if(O.startTime<=S)a(d),O.sortIndex=O.expirationTime,n(c,O);else break;O=i(d)}}function R(S){if(y=!1,f(S),!w)if(i(c)!==null)w=!0,Z(k);else{var O=i(d);O!==null&&V(R,O.startTime-S)}}function k(S,O){w=!1,y&&(y=!1,v(T),T=-1),g=!0;var H=h;try{for(f(O),p=i(c);p!==null&&(!(p.expirationTime>O)||S&&!q());){var A=p.callback;if(typeof A=="function"){p.callback=null,h=p.priorityLevel;var _=A(p.expirationTime<=O);O=e.unstable_now(),typeof _=="function"?p.callback=_:p===i(c)&&a(c),f(O)}else a(c);p=i(c)}if(p!==null)var ce=!0;else{var ne=i(d);ne!==null&&V(R,ne.startTime-O),ce=!1}return ce}finally{p=null,h=H,g=!1}}var C=!1,L=null,T=-1,F=5,D=-1;function q(){return!(e.unstable_now()-D<F)}function nn(){if(L!==null){var S=e.unstable_now();D=S;var O=!0;try{O=L(!0,S)}finally{O?b():(C=!1,L=null)}}else C=!1}var b;if(typeof m=="function")b=function(){m(nn)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,U=J.port2;J.port1.onmessage=nn,b=function(){U.postMessage(null)}}else b=function(){x(nn,0)};function Z(S){L=S,C||(C=!0,b())}function V(S,O){T=x(function(){S(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Z(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return i(c)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var H=h;h=O;try{return S()}finally{h=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var H=h;h=S;try{return O()}finally{h=H}},e.unstable_scheduleCallback=function(S,O,H){var A=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?A+H:A):H=A,S){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=H+_,S={id:u++,callback:O,priorityLevel:S,startTime:H,expirationTime:_,sortIndex:-1},H>A?(S.sortIndex=H,n(d,S),i(c)===null&&S===i(d)&&(y?(v(T),T=-1):y=!0,V(R,H-A))):(S.sortIndex=_,n(c,S),w||g||(w=!0,Z(k))),S},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(S){var O=h;return function(){var H=h;h=O;try{return S.apply(this,arguments)}finally{h=H}}}})(pg);gg.exports=pg;var l0=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=K,Ze=l0;function $(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fg=new Set,ut={};function Fi(e,n){pa(e,n),pa(e+"Capture",n)}function pa(e,n){for(ut[e]=n,e=0;e<n.length;e++)fg.add(n[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ml=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},od={};function d0(e){return Ml.call(od,e)?!0:Ml.call(rd,e)?!1:c0.test(e)?od[e]=!0:(rd[e]=!0,!1)}function u0(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,n,i,a){if(n===null||typeof n>"u"||u0(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ee(e,n,i,a,t,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ee(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qs,qs);Ce[n]=new Ee(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qs,qs);Ce[n]=new Ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qs,qs);Ce[n]=new Ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zs(e,n,i,a){var t=Ce.hasOwnProperty(n)?Ce[n]:null;(t!==null?t.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(g0(n,i,t,a)&&(i=null),a||t===null?d0(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(n=t.attributeName,a=t.attributeNamespace,i===null?e.removeAttribute(n):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var Vn=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qt=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),ld=Symbol.iterator;function Na(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,qo;function Qa(e){if(qo===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);qo=n&&n[1]||""}return`
`+qo+e}var Zo=!1;function Yo(e,n){if(!e||Zo)return"";Zo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var t=d.stack.split(`
`),r=a.stack.split(`
`),o=t.length-1,s=r.length-1;1<=o&&0<=s&&t[o]!==r[s];)s--;for(;1<=o&&0<=s;o--,s--)if(t[o]!==r[s]){if(o!==1||s!==1)do if(o--,s--,0>s||t[o]!==r[s]){var c=`
`+t[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Zo=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Qa(e):""}function p0(e){switch(e.tag){case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qi:return"Fragment";case Qi:return"Portal";case El:return"Profiler";case Ys:return"StrictMode";case Hl:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hg:return(e.displayName||"Context")+".Consumer";case mg:return(e._context.displayName||"Context")+".Provider";case Gs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return n=e.displayName||null,n!==null?n:Jl(e.type)||"Memo";case qn:n=e._payload,e=e._init;try{return Jl(e(n))}catch{}}return null}function f0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(n);case 8:return n===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ui(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wg(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function m0(e){var n=wg(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,r=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qt(e){e._valueTracker||(e._valueTracker=m0(e))}function Rg(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=wg(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,n){var i=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function sd(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=ui(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function jg(e,n){n=n.checked,n!=null&&Zs(e,"checked",n,!1)}function Fl(e,n){jg(e,n);var i=ui(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?_l(e,n.type,i):n.hasOwnProperty("defaultValue")&&_l(e,n.type,ui(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function cd(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function _l(e,n,i){(n!=="number"||Dr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var qa=Array.isArray;function la(e,n,i,a){if(e=e.options,n){n={};for(var t=0;t<i.length;t++)n["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=n.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&a&&(e[i].defaultSelected=!0)}else{for(i=""+ui(i),n=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function Al(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error($(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dd(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error($(92));if(qa(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:ui(i)}}function yg(e,n){var i=ui(n.value),a=ui(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function ud(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function xg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?xg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zt,kg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,t){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zt=Zt||document.createElement("div"),Zt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function gt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h0=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(e){h0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),nt[n]=nt[e]})});function Pg(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||nt.hasOwnProperty(e)&&nt[e]?(""+n).trim():n+"px"}function Cg(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,t=Pg(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,t):e[i]=t}}var v0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(e,n){if(n){if(v0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error($(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error($(61))}if(n.style!=null&&typeof n.style!="object")throw Error($(62))}}function Vl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,sa=null,ca=null;function gd(e){if(e=Ht(e)){if(typeof Ul!="function")throw Error($(280));var n=e.stateNode;n&&(n=Po(n),Ul(e.stateNode,e.type,n))}}function Lg(e){sa?ca?ca.push(e):ca=[e]:sa=e}function Kg(){if(sa){var e=sa,n=ca;if(ca=sa=null,gd(e),n)for(e=0;e<n.length;e++)gd(n[e])}}function bg(e,n){return e(n)}function Tg(){}var Go=!1;function $g(e,n,i){if(Go)return e(n,i);Go=!0;try{return bg(e,n,i)}finally{Go=!1,(sa!==null||ca!==null)&&(Tg(),Kg())}}function pt(e,n){var i=e.stateNode;if(i===null)return null;var a=Po(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error($(231,n,typeof i));return i}var Ql=!1;if(Fn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{Ql=!1}function w0(e,n,i,a,t,r,o,s,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(i,d)}catch(u){this.onError(u)}}var it=!1,Jr=null,zr=!1,ql=null,R0={onError:function(e){it=!0,Jr=e}};function j0(e,n,i,a,t,r,o,s,c){it=!1,Jr=null,w0.apply(R0,arguments)}function y0(e,n,i,a,t,r,o,s,c){if(j0.apply(this,arguments),it){if(it){var d=Jr;it=!1,Jr=null}else throw Error($(198));zr||(zr=!0,ql=d)}}function _i(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Sg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pd(e){if(_i(e)!==e)throw Error($(188))}function x0(e){var n=e.alternate;if(!n){if(n=_i(e),n===null)throw Error($(188));return n!==e?null:e}for(var i=e,a=n;;){var t=i.return;if(t===null)break;var r=t.alternate;if(r===null){if(a=t.return,a!==null){i=a;continue}break}if(t.child===r.child){for(r=t.child;r;){if(r===i)return pd(t),e;if(r===a)return pd(t),n;r=r.sibling}throw Error($(188))}if(i.return!==a.return)i=t,a=r;else{for(var o=!1,s=t.child;s;){if(s===i){o=!0,i=t,a=r;break}if(s===a){o=!0,a=t,i=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===i){o=!0,i=r,a=t;break}if(s===a){o=!0,a=r,i=t;break}s=s.sibling}if(!o)throw Error($(189))}}if(i.alternate!==a)throw Error($(190))}if(i.tag!==3)throw Error($(188));return i.stateNode.current===i?e:n}function Ng(e){return e=x0(e),e!==null?Og(e):null}function Og(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Og(e);if(n!==null)return n;e=e.sibling}return null}var Mg=Ze.unstable_scheduleCallback,fd=Ze.unstable_cancelCallback,k0=Ze.unstable_shouldYield,P0=Ze.unstable_requestPaint,pe=Ze.unstable_now,C0=Ze.unstable_getCurrentPriorityLevel,nc=Ze.unstable_ImmediatePriority,Eg=Ze.unstable_UserBlockingPriority,Fr=Ze.unstable_NormalPriority,L0=Ze.unstable_LowPriority,Hg=Ze.unstable_IdlePriority,jo=null,Sn=null;function K0(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:$0,b0=Math.log,T0=Math.LN2;function $0(e){return e>>>=0,e===0?32:31-(b0(e)/T0|0)|0}var Yt=64,Gt=4194304;function Za(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,t=e.suspendedLanes,r=e.pingedLanes,o=i&268435455;if(o!==0){var s=o&~t;s!==0?a=Za(s):(r&=o,r!==0&&(a=Za(r)))}else o=i&~t,o!==0?a=Za(o):r!==0&&(a=Za(r));if(a===0)return 0;if(n!==0&&n!==a&&!(n&t)&&(t=a&-a,r=n&-n,t>=r||t===16&&(r&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-vn(n),t=1<<i,a|=e[i],n&=~t;return a}function S0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-vn(r),s=1<<o,c=t[o];c===-1?(!(s&i)||s&a)&&(t[o]=S0(s,n)):c<=n&&(e.expiredLanes|=s),r&=~s}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dg(){var e=Yt;return Yt<<=1,!(Yt&4194240)&&(Yt=64),e}function Xo(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Mt(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-vn(n),e[n]=i}function O0(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-vn(i),r=1<<t;n[t]=0,a[t]=-1,e[t]=-1,i&=~r}}function ic(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-vn(i),t=1<<a;t&n|e[a]&n&&(e[a]|=n),i&=~t}}var Y=0;function Jg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zg,ac,Fg,_g,Ag,Yl=!1,Xt=[],ii=null,ai=null,ti=null,ft=new Map,mt=new Map,Yn=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,n){switch(e){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":ft.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mt.delete(n.pointerId)}}function Ma(e,n,i,a,t,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:r,targetContainers:[t]},n!==null&&(n=Ht(n),n!==null&&ac(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function E0(e,n,i,a,t){switch(n){case"focusin":return ii=Ma(ii,e,n,i,a,t),!0;case"dragenter":return ai=Ma(ai,e,n,i,a,t),!0;case"mouseover":return ti=Ma(ti,e,n,i,a,t),!0;case"pointerover":var r=t.pointerId;return ft.set(r,Ma(ft.get(r)||null,e,n,i,a,t)),!0;case"gotpointercapture":return r=t.pointerId,mt.set(r,Ma(mt.get(r)||null,e,n,i,a,t)),!0}return!1}function Bg(e){var n=ki(e.target);if(n!==null){var i=_i(n);if(i!==null){if(n=i.tag,n===13){if(n=Sg(i),n!==null){e.blockedOn=n,Ag(e.priority,function(){Fg(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Gl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Wl=a,i.target.dispatchEvent(a),Wl=null}else return n=Ht(i),n!==null&&ac(n),e.blockedOn=i,!1;n.shift()}return!0}function hd(e,n,i){yr(e)&&i.delete(n)}function H0(){Yl=!1,ii!==null&&yr(ii)&&(ii=null),ai!==null&&yr(ai)&&(ai=null),ti!==null&&yr(ti)&&(ti=null),ft.forEach(hd),mt.forEach(hd)}function Ea(e,n){e.blockedOn===n&&(e.blockedOn=null,Yl||(Yl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,H0)))}function ht(e){function n(t){return Ea(t,e)}if(0<Xt.length){Ea(Xt[0],e);for(var i=1;i<Xt.length;i++){var a=Xt[i];a.blockedOn===e&&(a.blockedOn=null)}}for(ii!==null&&Ea(ii,e),ai!==null&&Ea(ai,e),ti!==null&&Ea(ti,e),ft.forEach(n),mt.forEach(n),i=0;i<Yn.length;i++)a=Yn[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Yn.length&&(i=Yn[0],i.blockedOn===null);)Bg(i),i.blockedOn===null&&Yn.shift()}var da=Vn.ReactCurrentBatchConfig,Ar=!0;function D0(e,n,i,a){var t=Y,r=da.transition;da.transition=null;try{Y=1,tc(e,n,i,a)}finally{Y=t,da.transition=r}}function J0(e,n,i,a){var t=Y,r=da.transition;da.transition=null;try{Y=4,tc(e,n,i,a)}finally{Y=t,da.transition=r}}function tc(e,n,i,a){if(Ar){var t=Gl(e,n,i,a);if(t===null)cl(e,n,a,Br,i),md(e,a);else if(E0(t,e,n,i,a))a.stopPropagation();else if(md(e,a),n&4&&-1<M0.indexOf(e)){for(;t!==null;){var r=Ht(t);if(r!==null&&zg(r),r=Gl(e,n,i,a),r===null&&cl(e,n,a,Br,i),r===t)break;t=r}t!==null&&a.stopPropagation()}else cl(e,n,a,null,i)}}var Br=null;function Gl(e,n,i,a){if(Br=null,e=ec(a),e=ki(e),e!==null)if(n=_i(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Sg(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Br=e,null}function Ig(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case nc:return 1;case Eg:return 4;case Fr:case L0:return 16;case Hg:return 536870912;default:return 16}default:return 16}}var Xn=null,rc=null,xr=null;function Vg(){if(xr)return xr;var e,n=rc,i=n.length,a,t="value"in Xn?Xn.value:Xn.textContent,r=t.length;for(e=0;e<i&&n[e]===t[e];e++);var o=i-e;for(a=1;a<=o&&n[i-a]===t[r-a];a++);return xr=t.slice(e,1<a?1-a:void 0)}function kr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function er(){return!0}function vd(){return!1}function en(e){function n(i,a,t,r,o){this._reactName=i,this._targetInst=t,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(i=e[s],this[s]=i?i(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?er:vd,this.isPropagationStopped=vd,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=en(Ka),Et=se({},Ka,{view:0,detail:0}),z0=en(Et),el,nl,Ha,yo=se({},Et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove"?(el=e.screenX-Ha.screenX,nl=e.screenY-Ha.screenY):nl=el=0,Ha=e),el)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),wd=en(yo),F0=se({},yo,{dataTransfer:0}),_0=en(F0),A0=se({},Et,{relatedTarget:0}),il=en(A0),B0=se({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=en(B0),V0=se({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=en(V0),U0=se({},Ka,{data:0}),Rd=en(U0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Z0[e])?!!n[e]:!1}function lc(){return Y0}var G0=se({},Et,{key:function(e){if(e.key){var n=Q0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X0=en(G0),eh=se({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=en(eh),nh=se({},Et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),ih=en(nh),ah=se({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=en(ah),rh=se({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oh=en(rh),lh=[9,13,27,32],sc=Fn&&"CompositionEvent"in window,at=null;Fn&&"documentMode"in document&&(at=document.documentMode);var sh=Fn&&"TextEvent"in window&&!at,Wg=Fn&&(!sc||at&&8<at&&11>=at),yd=" ",xd=!1;function Ug(e,n){switch(e){case"keyup":return lh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zi=!1;function ch(e,n){switch(e){case"compositionend":return Qg(n);case"keypress":return n.which!==32?null:(xd=!0,yd);case"textInput":return e=n.data,e===yd&&xd?null:e;default:return null}}function dh(e,n){if(Zi)return e==="compositionend"||!sc&&Ug(e,n)?(e=Vg(),xr=rc=Xn=null,Zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wg&&n.locale!=="ko"?null:n.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!uh[e.type]:n==="textarea"}function qg(e,n,i,a){Lg(a),n=Ir(n,"onChange"),0<n.length&&(i=new oc("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var tt=null,vt=null;function gh(e){op(e,0)}function xo(e){var n=Xi(e);if(Rg(n))return e}function ph(e,n){if(e==="change")return n}var Zg=!1;if(Fn){var al;if(Fn){var tl="oninput"in document;if(!tl){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),tl=typeof Pd.oninput=="function"}al=tl}else al=!1;Zg=al&&(!document.documentMode||9<document.documentMode)}function Cd(){tt&&(tt.detachEvent("onpropertychange",Yg),vt=tt=null)}function Yg(e){if(e.propertyName==="value"&&xo(vt)){var n=[];qg(n,vt,e,ec(e)),$g(gh,n)}}function fh(e,n,i){e==="focusin"?(Cd(),tt=n,vt=i,tt.attachEvent("onpropertychange",Yg)):e==="focusout"&&Cd()}function mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(vt)}function hh(e,n){if(e==="click")return xo(n)}function vh(e,n){if(e==="input"||e==="change")return xo(n)}function wh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:wh;function wt(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var t=i[a];if(!Ml.call(n,t)||!yn(e[t],n[t]))return!1}return!0}function Ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,n){var i=Ld(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ld(i)}}function Gg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xg(){for(var e=window,n=Dr();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Dr(e.document)}return n}function cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rh(e){var n=Xg(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Gg(i.ownerDocument.documentElement,i)){if(a!==null&&cc(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,r=Math.min(a.start,t);a=a.end===void 0?r:Math.min(a.end,t),!e.extend&&r>a&&(t=a,a=r,r=t),t=Kd(i,r);var o=Kd(i,a);t&&o&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),r>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jh=Fn&&"documentMode"in document&&11>=document.documentMode,Yi=null,Xl=null,rt=null,es=!1;function bd(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;es||Yi==null||Yi!==Dr(a)||(a=Yi,"selectionStart"in a&&cc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),rt&&wt(rt,a)||(rt=a,a=Ir(Xl,"onSelect"),0<a.length&&(n=new oc("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Yi)))}function nr(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Gi={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionend:nr("Transition","TransitionEnd")},rl={},ep={};Fn&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function ko(e){if(rl[e])return rl[e];if(!Gi[e])return e;var n=Gi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in ep)return rl[e]=n[i];return e}var np=ko("animationend"),ip=ko("animationiteration"),ap=ko("animationstart"),tp=ko("transitionend"),rp=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(e,n){rp.set(e,n),Fi(n,[e])}for(var ol=0;ol<Td.length;ol++){var ll=Td[ol],yh=ll.toLowerCase(),xh=ll[0].toUpperCase()+ll.slice(1);fi(yh,"on"+xh)}fi(np,"onAnimationEnd");fi(ip,"onAnimationIteration");fi(ap,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(tp,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function $d(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,y0(a,n,void 0,e),e.currentTarget=null}function op(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],t=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var o=a.length-1;0<=o;o--){var s=a[o],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==r&&t.isPropagationStopped())break e;$d(t,s,d),r=c}else for(o=0;o<a.length;o++){if(s=a[o],c=s.instance,d=s.currentTarget,s=s.listener,c!==r&&t.isPropagationStopped())break e;$d(t,s,d),r=c}}}if(zr)throw e=ql,zr=!1,ql=null,e}function ie(e,n){var i=n[rs];i===void 0&&(i=n[rs]=new Set);var a=e+"__bubble";i.has(a)||(lp(n,e,2,!1),i.add(a))}function sl(e,n,i){var a=0;n&&(a|=4),lp(i,e,a,n)}var ir="_reactListening"+Math.random().toString(36).slice(2);function Rt(e){if(!e[ir]){e[ir]=!0,fg.forEach(function(i){i!=="selectionchange"&&(kh.has(i)||sl(i,!1,e),sl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ir]||(n[ir]=!0,sl("selectionchange",!1,n))}}function lp(e,n,i,a){switch(Ig(n)){case 1:var t=D0;break;case 4:t=J0;break;default:t=tc}i=t.bind(null,n,i,e),t=void 0,!Ql||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(n,i,{capture:!0,passive:t}):e.addEventListener(n,i,!0):t!==void 0?e.addEventListener(n,i,{passive:t}):e.addEventListener(n,i,!1)}function cl(e,n,i,a,t){var r=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===t||s.nodeType===8&&s.parentNode===t)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===t||c.nodeType===8&&c.parentNode===t))return;o=o.return}for(;s!==null;){if(o=ki(s),o===null)return;if(c=o.tag,c===5||c===6){a=r=o;continue e}s=s.parentNode}}a=a.return}$g(function(){var d=r,u=ec(i),p=[];e:{var h=rp.get(e);if(h!==void 0){var g=oc,w=e;switch(e){case"keypress":if(kr(i)===0)break e;case"keydown":case"keyup":g=X0;break;case"focusin":w="focus",g=il;break;case"focusout":w="blur",g=il;break;case"beforeblur":case"afterblur":g=il;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ih;break;case np:case ip:case ap:g=I0;break;case tp:g=th;break;case"scroll":g=z0;break;case"wheel":g=oh;break;case"copy":case"cut":case"paste":g=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jd}var y=(n&4)!==0,x=!y&&e==="scroll",v=y?h!==null?h+"Capture":null:h;y=[];for(var m=d,f;m!==null;){f=m;var R=f.stateNode;if(f.tag===5&&R!==null&&(f=R,v!==null&&(R=pt(m,v),R!=null&&y.push(jt(m,R,f)))),x)break;m=m.return}0<y.length&&(h=new g(h,w,null,i,u),p.push({event:h,listeners:y}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&i!==Wl&&(w=i.relatedTarget||i.fromElement)&&(ki(w)||w[_n]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=i.relatedTarget||i.toElement,g=d,w=w?ki(w):null,w!==null&&(x=_i(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=d),g!==w)){if(y=wd,R="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=jd,R="onPointerLeave",v="onPointerEnter",m="pointer"),x=g==null?h:Xi(g),f=w==null?h:Xi(w),h=new y(R,m+"leave",g,i,u),h.target=x,h.relatedTarget=f,R=null,ki(u)===d&&(y=new y(v,m+"enter",w,i,u),y.target=f,y.relatedTarget=x,R=y),x=R,g&&w)n:{for(y=g,v=w,m=0,f=y;f;f=Vi(f))m++;for(f=0,R=v;R;R=Vi(R))f++;for(;0<m-f;)y=Vi(y),m--;for(;0<f-m;)v=Vi(v),f--;for(;m--;){if(y===v||v!==null&&y===v.alternate)break n;y=Vi(y),v=Vi(v)}y=null}else y=null;g!==null&&Sd(p,h,g,y,!1),w!==null&&x!==null&&Sd(p,x,w,y,!0)}}e:{if(h=d?Xi(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=ph;else if(kd(h))if(Zg)k=vh;else{k=mh;var C=fh}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=hh);if(k&&(k=k(e,d))){qg(p,k,i,u);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&_l(h,"number",h.value)}switch(C=d?Xi(d):window,e){case"focusin":(kd(C)||C.contentEditable==="true")&&(Yi=C,Xl=d,rt=null);break;case"focusout":rt=Xl=Yi=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,bd(p,i,u);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":bd(p,i,u)}var L;if(sc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Zi?Ug(e,i)&&(T="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(T="onCompositionStart");T&&(Wg&&i.locale!=="ko"&&(Zi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zi&&(L=Vg()):(Xn=u,rc="value"in Xn?Xn.value:Xn.textContent,Zi=!0)),C=Ir(d,T),0<C.length&&(T=new Rd(T,e,null,i,u),p.push({event:T,listeners:C}),L?T.data=L:(L=Qg(i),L!==null&&(T.data=L)))),(L=sh?ch(e,i):dh(e,i))&&(d=Ir(d,"onBeforeInput"),0<d.length&&(u=new Rd("onBeforeInput","beforeinput",null,i,u),p.push({event:u,listeners:d}),u.data=L))}op(p,n)})}function jt(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Ir(e,n){for(var i=n+"Capture",a=[];e!==null;){var t=e,r=t.stateNode;t.tag===5&&r!==null&&(t=r,r=pt(e,i),r!=null&&a.unshift(jt(e,r,t)),r=pt(e,n),r!=null&&a.push(jt(e,r,t))),e=e.return}return a}function Vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,n,i,a,t){for(var r=n._reactName,o=[];i!==null&&i!==a;){var s=i,c=s.alternate,d=s.stateNode;if(c!==null&&c===a)break;s.tag===5&&d!==null&&(s=d,t?(c=pt(i,r),c!=null&&o.unshift(jt(i,c,s))):t||(c=pt(i,r),c!=null&&o.push(jt(i,c,s)))),i=i.return}o.length!==0&&e.push({event:n,listeners:o})}var Ph=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(Ph,`
`).replace(Ch,"")}function ar(e,n,i){if(n=Nd(n),Nd(e)!==n&&i)throw Error($(425))}function Vr(){}var ns=null,is=null;function as(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ts=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Kh=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(bh)}:ts;function bh(e){setTimeout(function(){throw e})}function dl(e,n){var i=n,a=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){e.removeChild(t),ht(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=t}while(i);ht(n)}function ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Md(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var ba=Math.random().toString(36).slice(2),Tn="__reactFiber$"+ba,yt="__reactProps$"+ba,_n="__reactContainer$"+ba,rs="__reactEvents$"+ba,Th="__reactListeners$"+ba,$h="__reactHandles$"+ba;function ki(e){var n=e[Tn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[_n]||i[Tn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Md(e);e!==null;){if(i=e[Tn])return i;e=Md(e)}return n}e=i,i=e.parentNode}return null}function Ht(e){return e=e[Tn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Po(e){return e[yt]||null}var os=[],ea=-1;function mi(e){return{current:e}}function te(e){0>ea||(e.current=os[ea],os[ea]=null,ea--)}function ee(e,n){ea++,os[ea]=e.current,e.current=n}var gi={},Se=mi(gi),_e=mi(!1),Ni=gi;function fa(e,n){var i=e.type.contextTypes;if(!i)return gi;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var t={},r;for(r in i)t[r]=n[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function Ae(e){return e=e.childContextTypes,e!=null}function Wr(){te(_e),te(Se)}function Ed(e,n,i){if(Se.current!==gi)throw Error($(168));ee(Se,n),ee(_e,i)}function sp(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var t in a)if(!(t in n))throw Error($(108,f0(e)||"Unknown",t));return se({},i,a)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gi,Ni=Se.current,ee(Se,e),ee(_e,_e.current),!0}function Hd(e,n,i){var a=e.stateNode;if(!a)throw Error($(169));i?(e=sp(e,n,Ni),a.__reactInternalMemoizedMergedChildContext=e,te(_e),te(Se),ee(Se,e)):te(_e),ee(_e,i)}var Hn=null,Co=!1,ul=!1;function cp(e){Hn===null?Hn=[e]:Hn.push(e)}function Sh(e){Co=!0,cp(e)}function hi(){if(!ul&&Hn!==null){ul=!0;var e=0,n=Y;try{var i=Hn;for(Y=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Hn=null,Co=!1}catch(t){throw Hn!==null&&(Hn=Hn.slice(e+1)),Mg(nc,hi),t}finally{Y=n,ul=!1}}return null}var na=[],ia=0,Qr=null,qr=0,tn=[],rn=0,Oi=null,Dn=1,Jn="";function Ri(e,n){na[ia++]=qr,na[ia++]=Qr,Qr=e,qr=n}function dp(e,n,i){tn[rn++]=Dn,tn[rn++]=Jn,tn[rn++]=Oi,Oi=e;var a=Dn;e=Jn;var t=32-vn(a)-1;a&=~(1<<t),i+=1;var r=32-vn(n)+t;if(30<r){var o=t-t%5;r=(a&(1<<o)-1).toString(32),a>>=o,t-=o,Dn=1<<32-vn(n)+t|i<<t|a,Jn=r+e}else Dn=1<<r|i<<t|a,Jn=e}function dc(e){e.return!==null&&(Ri(e,1),dp(e,1,0))}function uc(e){for(;e===Qr;)Qr=na[--ia],na[ia]=null,qr=na[--ia],na[ia]=null;for(;e===Oi;)Oi=tn[--rn],tn[rn]=null,Jn=tn[--rn],tn[rn]=null,Dn=tn[--rn],tn[rn]=null}var qe=null,Ue=null,re=!1,mn=null;function up(e,n){var i=on(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Dd(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,qe=e,Ue=ri(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,qe=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Oi!==null?{id:Dn,overflow:Jn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=on(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,qe=e,Ue=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ss(e){if(re){var n=Ue;if(n){var i=n;if(!Dd(e,n)){if(ls(e))throw Error($(418));n=ri(i.nextSibling);var a=qe;n&&Dd(e,n)?up(a,i):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(ls(e))throw Error($(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function Jd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function tr(e){if(e!==qe)return!1;if(!re)return Jd(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!as(e.type,e.memoizedProps)),n&&(n=Ue)){if(ls(e))throw gp(),Error($(418));for(;n;)up(e,n),n=ri(n.nextSibling)}if(Jd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Ue=ri(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=qe?ri(e.stateNode.nextSibling):null;return!0}function gp(){for(var e=Ue;e;)e=ri(e.nextSibling)}function ma(){Ue=qe=null,re=!1}function gc(e){mn===null?mn=[e]:mn.push(e)}var Nh=Vn.ReactCurrentBatchConfig;function Da(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error($(309));var a=i.stateNode}if(!a)throw Error($(147,e));var t=a,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var s=t.refs;o===null?delete s[r]:s[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error($(284));if(!i._owner)throw Error($(290,e))}return e}function rr(e,n){throw e=Object.prototype.toString.call(n),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zd(e){var n=e._init;return n(e._payload)}function pp(e){function n(v,m){if(e){var f=v.deletions;f===null?(v.deletions=[m],v.flags|=16):f.push(m)}}function i(v,m){if(!e)return null;for(;m!==null;)n(v,m),m=m.sibling;return null}function a(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function t(v,m){return v=ci(v,m),v.index=0,v.sibling=null,v}function r(v,m,f){return v.index=f,e?(f=v.alternate,f!==null?(f=f.index,f<m?(v.flags|=2,m):f):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,f,R){return m===null||m.tag!==6?(m=wl(f,v.mode,R),m.return=v,m):(m=t(m,f),m.return=v,m)}function c(v,m,f,R){var k=f.type;return k===qi?u(v,m,f.props.children,R,f.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qn&&zd(k)===m.type)?(R=t(m,f.props),R.ref=Da(v,m,f),R.return=v,R):(R=$r(f.type,f.key,f.props,null,v.mode,R),R.ref=Da(v,m,f),R.return=v,R)}function d(v,m,f,R){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=Rl(f,v.mode,R),m.return=v,m):(m=t(m,f.children||[]),m.return=v,m)}function u(v,m,f,R,k){return m===null||m.tag!==7?(m=bi(f,v.mode,R,k),m.return=v,m):(m=t(m,f),m.return=v,m)}function p(v,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wl(""+m,v.mode,f),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qt:return f=$r(m.type,m.key,m.props,null,v.mode,f),f.ref=Da(v,null,m),f.return=v,f;case Qi:return m=Rl(m,v.mode,f),m.return=v,m;case qn:var R=m._init;return p(v,R(m._payload),f)}if(qa(m)||Na(m))return m=bi(m,v.mode,f,null),m.return=v,m;rr(v,m)}return null}function h(v,m,f,R){var k=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:s(v,m,""+f,R);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qt:return f.key===k?c(v,m,f,R):null;case Qi:return f.key===k?d(v,m,f,R):null;case qn:return k=f._init,h(v,m,k(f._payload),R)}if(qa(f)||Na(f))return k!==null?null:u(v,m,f,R,null);rr(v,f)}return null}function g(v,m,f,R,k){if(typeof R=="string"&&R!==""||typeof R=="number")return v=v.get(f)||null,s(m,v,""+R,k);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Qt:return v=v.get(R.key===null?f:R.key)||null,c(m,v,R,k);case Qi:return v=v.get(R.key===null?f:R.key)||null,d(m,v,R,k);case qn:var C=R._init;return g(v,m,f,C(R._payload),k)}if(qa(R)||Na(R))return v=v.get(f)||null,u(m,v,R,k,null);rr(m,R)}return null}function w(v,m,f,R){for(var k=null,C=null,L=m,T=m=0,F=null;L!==null&&T<f.length;T++){L.index>T?(F=L,L=null):F=L.sibling;var D=h(v,L,f[T],R);if(D===null){L===null&&(L=F);break}e&&L&&D.alternate===null&&n(v,L),m=r(D,m,T),C===null?k=D:C.sibling=D,C=D,L=F}if(T===f.length)return i(v,L),re&&Ri(v,T),k;if(L===null){for(;T<f.length;T++)L=p(v,f[T],R),L!==null&&(m=r(L,m,T),C===null?k=L:C.sibling=L,C=L);return re&&Ri(v,T),k}for(L=a(v,L);T<f.length;T++)F=g(L,v,T,f[T],R),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?T:F.key),m=r(F,m,T),C===null?k=F:C.sibling=F,C=F);return e&&L.forEach(function(q){return n(v,q)}),re&&Ri(v,T),k}function y(v,m,f,R){var k=Na(f);if(typeof k!="function")throw Error($(150));if(f=k.call(f),f==null)throw Error($(151));for(var C=k=null,L=m,T=m=0,F=null,D=f.next();L!==null&&!D.done;T++,D=f.next()){L.index>T?(F=L,L=null):F=L.sibling;var q=h(v,L,D.value,R);if(q===null){L===null&&(L=F);break}e&&L&&q.alternate===null&&n(v,L),m=r(q,m,T),C===null?k=q:C.sibling=q,C=q,L=F}if(D.done)return i(v,L),re&&Ri(v,T),k;if(L===null){for(;!D.done;T++,D=f.next())D=p(v,D.value,R),D!==null&&(m=r(D,m,T),C===null?k=D:C.sibling=D,C=D);return re&&Ri(v,T),k}for(L=a(v,L);!D.done;T++,D=f.next())D=g(L,v,T,D.value,R),D!==null&&(e&&D.alternate!==null&&L.delete(D.key===null?T:D.key),m=r(D,m,T),C===null?k=D:C.sibling=D,C=D);return e&&L.forEach(function(nn){return n(v,nn)}),re&&Ri(v,T),k}function x(v,m,f,R){if(typeof f=="object"&&f!==null&&f.type===qi&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Qt:e:{for(var k=f.key,C=m;C!==null;){if(C.key===k){if(k=f.type,k===qi){if(C.tag===7){i(v,C.sibling),m=t(C,f.props.children),m.return=v,v=m;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qn&&zd(k)===C.type){i(v,C.sibling),m=t(C,f.props),m.ref=Da(v,C,f),m.return=v,v=m;break e}i(v,C);break}else n(v,C);C=C.sibling}f.type===qi?(m=bi(f.props.children,v.mode,R,f.key),m.return=v,v=m):(R=$r(f.type,f.key,f.props,null,v.mode,R),R.ref=Da(v,m,f),R.return=v,v=R)}return o(v);case Qi:e:{for(C=f.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){i(v,m.sibling),m=t(m,f.children||[]),m.return=v,v=m;break e}else{i(v,m);break}else n(v,m);m=m.sibling}m=Rl(f,v.mode,R),m.return=v,v=m}return o(v);case qn:return C=f._init,x(v,m,C(f._payload),R)}if(qa(f))return w(v,m,f,R);if(Na(f))return y(v,m,f,R);rr(v,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(i(v,m.sibling),m=t(m,f),m.return=v,v=m):(i(v,m),m=wl(f,v.mode,R),m.return=v,v=m),o(v)):i(v,m)}return x}var ha=pp(!0),fp=pp(!1),Zr=mi(null),Yr=null,aa=null,pc=null;function fc(){pc=aa=Yr=null}function mc(e){var n=Zr.current;te(Zr),e._currentValue=n}function cs(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function ua(e,n){Yr=e,pc=aa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:n,next:null},aa===null){if(Yr===null)throw Error($(308));aa=e,Yr.dependencies={lanes:0,firstContext:e}}else aa=aa.next=e;return n}var Pi=null;function hc(e){Pi===null?Pi=[e]:Pi.push(e)}function mp(e,n,i,a){var t=n.interleaved;return t===null?(i.next=i,hc(n)):(i.next=t.next,t.next=i),n.interleaved=i,An(e,a)}function An(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Zn=!1;function vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function oi(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,W&2){var t=a.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n,An(e,i)}return t=a.interleaved,t===null?(n.next=n,hc(a)):(n.next=t.next,t.next=n),a.interleaved=n,An(e,i)}function Pr(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,ic(e,i)}}function Fd(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var t=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?t=r=o:r=r.next=o,i=i.next}while(i!==null);r===null?t=r=n:r=r.next=n}else t=r=n;i={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Gr(e,n,i,a){var t=e.updateQueue;Zn=!1;var r=t.firstBaseUpdate,o=t.lastBaseUpdate,s=t.shared.pending;if(s!==null){t.shared.pending=null;var c=s,d=c.next;c.next=null,o===null?r=d:o.next=d,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=c))}if(r!==null){var p=t.baseState;o=0,u=d=c=null,s=r;do{var h=s.lane,g=s.eventTime;if((a&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(h=n,g=i,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(g,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(g,p,h):w,h==null)break e;p=se({},p,h);break e;case 2:Zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=t.effects,h===null?t.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=g,c=p):u=u.next=g,o|=h;if(s=s.next,s===null){if(s=t.shared.pending,s===null)break;h=s,s=h.next,h.next=null,t.lastBaseUpdate=h,t.shared.pending=null}}while(!0);if(u===null&&(c=p),t.baseState=c,t.firstBaseUpdate=d,t.lastBaseUpdate=u,n=t.shared.interleaved,n!==null){t=n;do o|=t.lane,t=t.next;while(t!==n)}else r===null&&(t.shared.lanes=0);Ei|=o,e.lanes=o,e.memoizedState=p}}function _d(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],t=a.callback;if(t!==null){if(a.callback=null,a=i,typeof t!="function")throw Error($(191,t));t.call(a)}}}var Dt={},Nn=mi(Dt),xt=mi(Dt),kt=mi(Dt);function Ci(e){if(e===Dt)throw Error($(174));return e}function wc(e,n){switch(ee(kt,n),ee(xt,e),ee(Nn,Dt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Bl(n,e)}te(Nn),ee(Nn,n)}function va(){te(Nn),te(xt),te(kt)}function vp(e){Ci(kt.current);var n=Ci(Nn.current),i=Bl(n,e.type);n!==i&&(ee(xt,e),ee(Nn,i))}function Rc(e){xt.current===e&&(te(Nn),te(xt))}var oe=mi(0);function Xr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gl=[];function jc(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Cr=Vn.ReactCurrentDispatcher,pl=Vn.ReactCurrentBatchConfig,Mi=0,le=null,ve=null,Re=null,eo=!1,ot=!1,Pt=0,Oh=0;function Le(){throw Error($(321))}function yc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!yn(e[i],n[i]))return!1;return!0}function xc(e,n,i,a,t,r){if(Mi=r,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Cr.current=e===null||e.memoizedState===null?Dh:Jh,e=i(a,t),ot){r=0;do{if(ot=!1,Pt=0,25<=r)throw Error($(301));r+=1,Re=ve=null,n.updateQueue=null,Cr.current=zh,e=i(a,t)}while(ot)}if(Cr.current=no,n=ve!==null&&ve.next!==null,Mi=0,Re=ve=le=null,eo=!1,n)throw Error($(300));return e}function kc(){var e=Pt!==0;return Pt=0,e}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?le.memoizedState=Re=e:Re=Re.next=e,Re}function cn(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=Re===null?le.memoizedState:Re.next;if(n!==null)Re=n,ve=e;else{if(e===null)throw Error($(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Re===null?le.memoizedState=Re=e:Re=Re.next=e}return Re}function Ct(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=cn(),i=n.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=e;var a=ve,t=a.baseQueue,r=i.pending;if(r!==null){if(t!==null){var o=t.next;t.next=r.next,r.next=o}a.baseQueue=t=r,i.pending=null}if(t!==null){r=t.next,a=a.baseState;var s=o=null,c=null,d=r;do{var u=d.lane;if((Mi&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=p,o=a):c=c.next=p,le.lanes|=u,Ei|=u}d=d.next}while(d!==null&&d!==r);c===null?o=a:c.next=s,yn(a,n.memoizedState)||(ze=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=c,i.lastRenderedState=a}if(e=i.interleaved,e!==null){t=e;do r=t.lane,le.lanes|=r,Ei|=r,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function ml(e){var n=cn(),i=n.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=e;var a=i.dispatch,t=i.pending,r=n.memoizedState;if(t!==null){i.pending=null;var o=t=t.next;do r=e(r,o.action),o=o.next;while(o!==t);yn(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),i.lastRenderedState=r}return[r,a]}function wp(){}function Rp(e,n){var i=le,a=cn(),t=n(),r=!yn(a.memoizedState,t);if(r&&(a.memoizedState=t,ze=!0),a=a.queue,Pc(xp.bind(null,i,a,e),[e]),a.getSnapshot!==n||r||Re!==null&&Re.memoizedState.tag&1){if(i.flags|=2048,Lt(9,yp.bind(null,i,a,t,n),void 0,null),ye===null)throw Error($(349));Mi&30||jp(i,n,t)}return t}function jp(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function yp(e,n,i,a){n.value=i,n.getSnapshot=a,kp(n)&&Pp(e)}function xp(e,n,i){return i(function(){kp(n)&&Pp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!yn(e,i)}catch{return!0}}function Pp(e){var n=An(e,1);n!==null&&wn(n,e,1,-1)}function Ad(e){var n=Kn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:e},n.queue=e,e=e.dispatch=Hh.bind(null,le,e),[n.memoizedState,e]}function Lt(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function Cp(){return cn().memoizedState}function Lr(e,n,i,a){var t=Kn();le.flags|=e,t.memoizedState=Lt(1|n,i,void 0,a===void 0?null:a)}function Lo(e,n,i,a){var t=cn();a=a===void 0?null:a;var r=void 0;if(ve!==null){var o=ve.memoizedState;if(r=o.destroy,a!==null&&yc(a,o.deps)){t.memoizedState=Lt(n,i,r,a);return}}le.flags|=e,t.memoizedState=Lt(1|n,i,r,a)}function Bd(e,n){return Lr(8390656,8,e,n)}function Pc(e,n){return Lo(2048,8,e,n)}function Lp(e,n){return Lo(4,2,e,n)}function Kp(e,n){return Lo(4,4,e,n)}function bp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tp(e,n,i){return i=i!=null?i.concat([e]):null,Lo(4,4,bp.bind(null,n,e),i)}function Cc(){}function $p(e,n){var i=cn();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&yc(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function Sp(e,n){var i=cn();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&yc(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function Np(e,n,i){return Mi&21?(yn(i,n)||(i=Dg(),le.lanes|=i,Ei|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=i)}function Mh(e,n){var i=Y;Y=i!==0&&4>i?i:4,e(!0);var a=pl.transition;pl.transition={};try{e(!1),n()}finally{Y=i,pl.transition=a}}function Op(){return cn().memoizedState}function Eh(e,n,i){var a=si(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Mp(e))Ep(n,i);else if(i=mp(e,n,i,a),i!==null){var t=Oe();wn(i,e,a,t),Hp(i,n,a)}}function Hh(e,n,i){var a=si(e),t={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Ep(n,t);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,s=r(o,i);if(t.hasEagerState=!0,t.eagerState=s,yn(s,o)){var c=n.interleaved;c===null?(t.next=t,hc(n)):(t.next=c.next,c.next=t),n.interleaved=t;return}}catch{}finally{}i=mp(e,n,t,a),i!==null&&(t=Oe(),wn(i,e,a,t),Hp(i,n,a))}}function Mp(e){var n=e.alternate;return e===le||n!==null&&n===le}function Ep(e,n){ot=eo=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Hp(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,ic(e,i)}}var no={readContext:sn,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Dh={readContext:sn,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:Bd,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Lr(4194308,4,bp.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Lr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Lr(4,2,e,n)},useMemo:function(e,n){var i=Kn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=Kn();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Eh.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:Ad,useDebugValue:Cc,useDeferredValue:function(e){return Kn().memoizedState=e},useTransition:function(){var e=Ad(!1),n=e[0];return e=Mh.bind(null,e[1]),Kn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=le,t=Kn();if(re){if(i===void 0)throw Error($(407));i=i()}else{if(i=n(),ye===null)throw Error($(349));Mi&30||jp(a,n,i)}t.memoizedState=i;var r={value:i,getSnapshot:n};return t.queue=r,Bd(xp.bind(null,a,r,e),[e]),a.flags|=2048,Lt(9,yp.bind(null,a,r,i,n),void 0,null),i},useId:function(){var e=Kn(),n=ye.identifierPrefix;if(re){var i=Jn,a=Dn;i=(a&~(1<<32-vn(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=Pt++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Oh++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Jh={readContext:sn,useCallback:$p,useContext:sn,useEffect:Pc,useImperativeHandle:Tp,useInsertionEffect:Lp,useLayoutEffect:Kp,useMemo:Sp,useReducer:fl,useRef:Cp,useState:function(){return fl(Ct)},useDebugValue:Cc,useDeferredValue:function(e){var n=cn();return Np(n,ve.memoizedState,e)},useTransition:function(){var e=fl(Ct)[0],n=cn().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:Rp,useId:Op,unstable_isNewReconciler:!1},zh={readContext:sn,useCallback:$p,useContext:sn,useEffect:Pc,useImperativeHandle:Tp,useInsertionEffect:Lp,useLayoutEffect:Kp,useMemo:Sp,useReducer:ml,useRef:Cp,useState:function(){return ml(Ct)},useDebugValue:Cc,useDeferredValue:function(e){var n=cn();return ve===null?n.memoizedState=e:Np(n,ve.memoizedState,e)},useTransition:function(){var e=ml(Ct)[0],n=cn().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:Rp,useId:Op,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function ds(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:se({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ko={isMounted:function(e){return(e=e._reactInternals)?_i(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=Oe(),t=si(e),r=zn(a,t);r.payload=n,i!=null&&(r.callback=i),n=oi(e,r,t),n!==null&&(wn(n,e,t,a),Pr(n,e,t))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=Oe(),t=si(e),r=zn(a,t);r.tag=1,r.payload=n,i!=null&&(r.callback=i),n=oi(e,r,t),n!==null&&(wn(n,e,t,a),Pr(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Oe(),a=si(e),t=zn(i,a);t.tag=2,n!=null&&(t.callback=n),n=oi(e,t,a),n!==null&&(wn(n,e,a,i),Pr(n,e,a))}};function Id(e,n,i,a,t,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):n.prototype&&n.prototype.isPureReactComponent?!wt(i,a)||!wt(t,r):!0}function Dp(e,n,i){var a=!1,t=gi,r=n.contextType;return typeof r=="object"&&r!==null?r=sn(r):(t=Ae(n)?Ni:Se.current,a=n.contextTypes,r=(a=a!=null)?fa(e,t):gi),n=new n(i,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ko,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),n}function Vd(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&Ko.enqueueReplaceState(n,n.state,null)}function us(e,n,i,a){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs={},vc(e);var r=n.contextType;typeof r=="object"&&r!==null?t.context=sn(r):(r=Ae(n)?Ni:Se.current,t.context=fa(e,r)),t.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ds(e,n,r,i),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&Ko.enqueueReplaceState(t,t.state,null),Gr(e,i,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function wa(e,n){try{var i="",a=n;do i+=p0(a),a=a.return;while(a);var t=i}catch(r){t=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:t,digest:null}}function hl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function gs(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Fh=typeof WeakMap=="function"?WeakMap:Map;function Jp(e,n,i){i=zn(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){ao||(ao=!0,xs=a),gs(e,n)},i}function zp(e,n,i){i=zn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=n.value;i.payload=function(){return a(t)},i.callback=function(){gs(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){gs(e,n),typeof a!="function"&&(li===null?li=new Set([this]):li.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),i}function Wd(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Fh;var t=new Set;a.set(n,t)}else t=a.get(n),t===void 0&&(t=new Set,a.set(n,t));t.has(i)||(t.add(i),e=ev.bind(null,e,n,i),n.then(e,e))}function Ud(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qd(e,n,i,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=zn(-1,1),n.tag=2,oi(i,n,1))),i.lanes|=1),e)}var _h=Vn.ReactCurrentOwner,ze=!1;function Ne(e,n,i,a){n.child=e===null?fp(n,null,i,a):ha(n,e.child,i,a)}function qd(e,n,i,a,t){i=i.render;var r=n.ref;return ua(n,t),a=xc(e,n,i,a,r,t),i=kc(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Bn(e,n,t)):(re&&i&&dc(n),n.flags|=1,Ne(e,n,a,t),n.child)}function Zd(e,n,i,a,t){if(e===null){var r=i.type;return typeof r=="function"&&!Oc(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=r,Fp(e,n,r,a,t)):(e=$r(i.type,null,a,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&t)){var o=r.memoizedProps;if(i=i.compare,i=i!==null?i:wt,i(o,a)&&e.ref===n.ref)return Bn(e,n,t)}return n.flags|=1,e=ci(r,a),e.ref=n.ref,e.return=n,n.child=e}function Fp(e,n,i,a,t){if(e!==null){var r=e.memoizedProps;if(wt(r,a)&&e.ref===n.ref)if(ze=!1,n.pendingProps=a=r,(e.lanes&t)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Bn(e,n,t)}return ps(e,n,i,a,t)}function _p(e,n,i){var a=n.pendingProps,t=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(ra,We),We|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(ra,We),We|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:i,ee(ra,We),We|=a}else r!==null?(a=r.baseLanes|i,n.memoizedState=null):a=i,ee(ra,We),We|=a;return Ne(e,n,t,i),n.child}function Ap(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function ps(e,n,i,a,t){var r=Ae(i)?Ni:Se.current;return r=fa(n,r),ua(n,t),i=xc(e,n,i,a,r,t),a=kc(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Bn(e,n,t)):(re&&a&&dc(n),n.flags|=1,Ne(e,n,i,t),n.child)}function Yd(e,n,i,a,t){if(Ae(i)){var r=!0;Ur(n)}else r=!1;if(ua(n,t),n.stateNode===null)Kr(e,n),Dp(n,i,a),us(n,i,a,t),a=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var c=o.context,d=i.contextType;typeof d=="object"&&d!==null?d=sn(d):(d=Ae(i)?Ni:Se.current,d=fa(n,d));var u=i.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==a||c!==d)&&Vd(n,o,a,d),Zn=!1;var h=n.memoizedState;o.state=h,Gr(n,a,o,t),c=n.memoizedState,s!==a||h!==c||_e.current||Zn?(typeof u=="function"&&(ds(n,i,u,a),c=n.memoizedState),(s=Zn||Id(n,i,s,a,h,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),o.props=a,o.state=c,o.context=d,a=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,hp(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:pn(n.type,s),o.props=d,p=n.pendingProps,h=o.context,c=i.contextType,typeof c=="object"&&c!==null?c=sn(c):(c=Ae(i)?Ni:Se.current,c=fa(n,c));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==c)&&Vd(n,o,a,c),Zn=!1,h=n.memoizedState,o.state=h,Gr(n,a,o,t);var w=n.memoizedState;s!==p||h!==w||_e.current||Zn?(typeof g=="function"&&(ds(n,i,g,a),w=n.memoizedState),(d=Zn||Id(n,i,d,a,h,w,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,w,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=w),o.props=a,o.state=w,o.context=c,a=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),a=!1)}return fs(e,n,i,a,r,t)}function fs(e,n,i,a,t,r){Ap(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return t&&Hd(n,i,!1),Bn(e,n,r);a=n.stateNode,_h.current=n;var s=o&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=ha(n,e.child,null,r),n.child=ha(n,null,s,r)):Ne(e,n,s,r),n.memoizedState=a.state,t&&Hd(n,i,!0),n.child}function Bp(e){var n=e.stateNode;n.pendingContext?Ed(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ed(e,n.context,!1),wc(e,n.containerInfo)}function Gd(e,n,i,a,t){return ma(),gc(t),n.flags|=256,Ne(e,n,i,a),n.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ip(e,n,i){var a=n.pendingProps,t=oe.current,r=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(t&2)!==0),s?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),ee(oe,t&1),e===null)return ss(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,r?(a=n.mode,r=n.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=$o(o,a,0,null),e=bi(e,a,i,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=hs(i),n.memoizedState=ms,e):Lc(n,o));if(t=e.memoizedState,t!==null&&(s=t.dehydrated,s!==null))return Ah(e,n,o,a,s,t,i);if(r){r=a.fallback,o=n.mode,t=e.child,s=t.sibling;var c={mode:"hidden",children:a.children};return!(o&1)&&n.child!==t?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=ci(t,c),a.subtreeFlags=t.subtreeFlags&14680064),s!==null?r=ci(s,r):(r=bi(r,o,i,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,a=r,r=n.child,o=e.child.memoizedState,o=o===null?hs(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~i,n.memoizedState=ms,a}return r=e.child,e=r.sibling,a=ci(r,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function Lc(e,n){return n=$o({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function or(e,n,i,a){return a!==null&&gc(a),ha(n,e.child,null,i),e=Lc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ah(e,n,i,a,t,r,o){if(i)return n.flags&256?(n.flags&=-257,a=hl(Error($(422))),or(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=a.fallback,t=n.mode,a=$o({mode:"visible",children:a.children},t,0,null),r=bi(r,t,o,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,n.mode&1&&ha(n,e.child,null,o),n.child.memoizedState=hs(o),n.memoizedState=ms,r);if(!(n.mode&1))return or(e,n,o,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var s=a.dgst;return a=s,r=Error($(419)),a=hl(r,a,void 0),or(e,n,o,a)}if(s=(o&e.childLanes)!==0,ze||s){if(a=ye,a!==null){switch(o&-o){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|o)?0:t,t!==0&&t!==r.retryLane&&(r.retryLane=t,An(e,t),wn(a,e,t,-1))}return Nc(),a=hl(Error($(421))),or(e,n,o,a)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=nv.bind(null,e),t._reactRetry=n,null):(e=r.treeContext,Ue=ri(t.nextSibling),qe=n,re=!0,mn=null,e!==null&&(tn[rn++]=Dn,tn[rn++]=Jn,tn[rn++]=Oi,Dn=e.id,Jn=e.overflow,Oi=n),n=Lc(n,a.children),n.flags|=4096,n)}function Xd(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),cs(e.return,n,i)}function vl(e,n,i,a,t){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:t}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=i,r.tailMode=t)}function Vp(e,n,i){var a=n.pendingProps,t=a.revealOrder,r=a.tail;if(Ne(e,n,a.children,i),a=oe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,i,n);else if(e.tag===19)Xd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ee(oe,a),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(i=n.child,t=null;i!==null;)e=i.alternate,e!==null&&Xr(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=n.child,n.child=null):(t=i.sibling,i.sibling=null),vl(n,!1,t,i,r);break;case"backwards":for(i=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&Xr(e)===null){n.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}vl(n,!0,i,null,r);break;case"together":vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Kr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Ei|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error($(153));if(n.child!==null){for(e=n.child,i=ci(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=ci(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Bh(e,n,i){switch(n.tag){case 3:Bp(n),ma();break;case 5:vp(n);break;case 1:Ae(n.type)&&Ur(n);break;case 4:wc(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,t=n.memoizedProps.value;ee(Zr,a._currentValue),a._currentValue=t;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ee(oe,oe.current&1),n.flags|=128,null):i&n.child.childLanes?Ip(e,n,i):(ee(oe,oe.current&1),e=Bn(e,n,i),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return Vp(e,n,i);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),ee(oe,oe.current),a)break;return null;case 22:case 23:return n.lanes=0,_p(e,n,i)}return Bn(e,n,i)}var Wp,vs,Up,Qp;Wp=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};vs=function(){};Up=function(e,n,i,a){var t=e.memoizedProps;if(t!==a){e=n.stateNode,Ci(Nn.current);var r=null;switch(i){case"input":t=zl(e,t),a=zl(e,a),r=[];break;case"select":t=se({},t,{value:void 0}),a=se({},a,{value:void 0}),r=[];break;case"textarea":t=Al(e,t),a=Al(e,a),r=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Vr)}Il(i,a);var o;i=null;for(d in t)if(!a.hasOwnProperty(d)&&t.hasOwnProperty(d)&&t[d]!=null)if(d==="style"){var s=t[d];for(o in s)s.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ut.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in a){var c=a[d];if(s=t!=null?t[d]:void 0,a.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(i||(i={}),i[o]=c[o])}else i||(r||(r=[]),r.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(r=r||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ut.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ie("scroll",e),r||s===c||(r=[])):(r=r||[]).push(d,c))}i&&(r=r||[]).push("style",i);var d=r;(n.updateQueue=d)&&(n.flags|=4)}};Qp=function(e,n,i,a){i!==a&&(n.flags|=4)};function Ja(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function Ih(e,n,i){var a=n.pendingProps;switch(uc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ae(n.type)&&Wr(),Ke(n),null;case 3:return a=n.stateNode,va(),te(_e),te(Se),jc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,mn!==null&&(Cs(mn),mn=null))),vs(e,n),Ke(n),null;case 5:Rc(n);var t=Ci(kt.current);if(i=n.type,e!==null&&n.stateNode!=null)Up(e,n,i,a,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error($(166));return Ke(n),null}if(e=Ci(Nn.current),tr(n)){a=n.stateNode,i=n.type;var r=n.memoizedProps;switch(a[Tn]=n,a[yt]=r,e=(n.mode&1)!==0,i){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(t=0;t<Ya.length;t++)ie(Ya[t],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":sd(a,r),ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ie("invalid",a);break;case"textarea":dd(a,r),ie("invalid",a)}Il(i,r),t=null;for(var o in r)if(r.hasOwnProperty(o)){var s=r[o];o==="children"?typeof s=="string"?a.textContent!==s&&(r.suppressHydrationWarning!==!0&&ar(a.textContent,s,e),t=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&ar(a.textContent,s,e),t=["children",""+s]):ut.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ie("scroll",a)}switch(i){case"input":qt(a),cd(a,r,!0);break;case"textarea":qt(a),ud(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Vr)}a=t,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xg(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(i,{is:a.is}):(e=o.createElement(i),i==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,i),e[Tn]=n,e[yt]=a,Wp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Vl(i,a),i){case"dialog":ie("cancel",e),ie("close",e),t=a;break;case"iframe":case"object":case"embed":ie("load",e),t=a;break;case"video":case"audio":for(t=0;t<Ya.length;t++)ie(Ya[t],e);t=a;break;case"source":ie("error",e),t=a;break;case"img":case"image":case"link":ie("error",e),ie("load",e),t=a;break;case"details":ie("toggle",e),t=a;break;case"input":sd(e,a),t=zl(e,a),ie("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=se({},a,{value:void 0}),ie("invalid",e);break;case"textarea":dd(e,a),t=Al(e,a),ie("invalid",e);break;default:t=a}Il(i,t),s=t;for(r in s)if(s.hasOwnProperty(r)){var c=s[r];r==="style"?Cg(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kg(e,c)):r==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&gt(e,c):typeof c=="number"&&gt(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ut.hasOwnProperty(r)?c!=null&&r==="onScroll"&&ie("scroll",e):c!=null&&Zs(e,r,c,o))}switch(i){case"input":qt(e),cd(e,a,!1);break;case"textarea":qt(e),ud(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ui(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?la(e,!!a.multiple,r,!1):a.defaultValue!=null&&la(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Vr)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ke(n),null;case 6:if(e&&n.stateNode!=null)Qp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error($(166));if(i=Ci(kt.current),Ci(Nn.current),tr(n)){if(a=n.stateNode,i=n.memoizedProps,a[Tn]=n,(r=a.nodeValue!==i)&&(e=qe,e!==null))switch(e.tag){case 3:ar(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ar(a.nodeValue,i,(e.mode&1)!==0)}r&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Tn]=n,n.stateNode=a}return Ke(n),null;case 13:if(te(oe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ue!==null&&n.mode&1&&!(n.flags&128))gp(),ma(),n.flags|=98560,r=!1;else if(r=tr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error($(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error($(317));r[Tn]=n}else ma(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ke(n),r=!1}else mn!==null&&(Cs(mn),mn=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?we===0&&(we=3):Nc())),n.updateQueue!==null&&(n.flags|=4),Ke(n),null);case 4:return va(),vs(e,n),e===null&&Rt(n.stateNode.containerInfo),Ke(n),null;case 10:return mc(n.type._context),Ke(n),null;case 17:return Ae(n.type)&&Wr(),Ke(n),null;case 19:if(te(oe),r=n.memoizedState,r===null)return Ke(n),null;if(a=(n.flags&128)!==0,o=r.rendering,o===null)if(a)Ja(r,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Xr(e),o!==null){for(n.flags|=128,Ja(r,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)r=i,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ee(oe,oe.current&1|2),n.child}e=e.sibling}r.tail!==null&&pe()>Ra&&(n.flags|=128,a=!0,Ja(r,!1),n.lanes=4194304)}else{if(!a)if(e=Xr(o),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ja(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!re)return Ke(n),null}else 2*pe()-r.renderingStartTime>Ra&&i!==1073741824&&(n.flags|=128,a=!0,Ja(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(i=r.last,i!==null?i.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=pe(),n.sibling=null,i=oe.current,ee(oe,a?i&1|2:i&1),n):(Ke(n),null);case 22:case 23:return Sc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?We&1073741824&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),null;case 24:return null;case 25:return null}throw Error($(156,n.tag))}function Vh(e,n){switch(uc(n),n.tag){case 1:return Ae(n.type)&&Wr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(),te(_e),te(Se),jc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Rc(n),null;case 13:if(te(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error($(340));ma()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(oe),null;case 4:return va(),null;case 10:return mc(n.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var lr=!1,$e=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,E=null;function ta(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){ue(e,n,a)}else i.current=null}function ws(e,n,i){try{i()}catch(a){ue(e,n,a)}}var eu=!1;function Uh(e,n){if(ns=Ar,e=Xg(),cc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var t=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,s=-1,c=-1,d=0,u=0,p=e,h=null;n:for(;;){for(var g;p!==i||t!==0&&p.nodeType!==3||(s=o+t),p!==r||a!==0&&p.nodeType!==3||(c=o+a),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break n;if(h===i&&++d===t&&(s=o),h===r&&++u===a&&(c=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}i=s===-1||c===-1?null:{start:s,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(is={focusedElem:e,selectionRange:i},Ar=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,x=w.memoizedState,v=n.stateNode,m=v.getSnapshotBeforeUpdate(n.elementType===n.type?y:pn(n.type,y),x);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(R){ue(n,n.return,R)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return w=eu,eu=!1,w}function lt(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var r=t.destroy;t.destroy=void 0,r!==void 0&&ws(n,i,r)}t=t.next}while(t!==a)}}function bo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function Rs(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function qp(e){var n=e.alternate;n!==null&&(e.alternate=null,qp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Tn],delete n[yt],delete n[rs],delete n[Th],delete n[$h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zp(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Vr));else if(a!==4&&(e=e.child,e!==null))for(js(e,n,i),e=e.sibling;e!==null;)js(e,n,i),e=e.sibling}function ys(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ys(e,n,i),e=e.sibling;e!==null;)ys(e,n,i),e=e.sibling}var ke=null,fn=!1;function Un(e,n,i){for(i=i.child;i!==null;)Yp(e,n,i),i=i.sibling}function Yp(e,n,i){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(jo,i)}catch{}switch(i.tag){case 5:$e||ta(i,n);case 6:var a=ke,t=fn;ke=null,Un(e,n,i),ke=a,fn=t,ke!==null&&(fn?(e=ke,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):ke.removeChild(i.stateNode));break;case 18:ke!==null&&(fn?(e=ke,i=i.stateNode,e.nodeType===8?dl(e.parentNode,i):e.nodeType===1&&dl(e,i),ht(e)):dl(ke,i.stateNode));break;case 4:a=ke,t=fn,ke=i.stateNode.containerInfo,fn=!0,Un(e,n,i),ke=a,fn=t;break;case 0:case 11:case 14:case 15:if(!$e&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var r=t,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&ws(i,n,o),t=t.next}while(t!==a)}Un(e,n,i);break;case 1:if(!$e&&(ta(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(s){ue(i,n,s)}Un(e,n,i);break;case 21:Un(e,n,i);break;case 22:i.mode&1?($e=(a=$e)||i.memoizedState!==null,Un(e,n,i),$e=a):Un(e,n,i);break;default:Un(e,n,i)}}function iu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Wh),n.forEach(function(a){var t=iv.bind(null,e,a);i.has(a)||(i.add(a),a.then(t,t))})}}function un(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var t=i[a];try{var r=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,fn=!1;break e;case 3:ke=s.stateNode.containerInfo,fn=!0;break e;case 4:ke=s.stateNode.containerInfo,fn=!0;break e}s=s.return}if(ke===null)throw Error($(160));Yp(r,o,t),ke=null,fn=!1;var c=t.alternate;c!==null&&(c.return=null),t.return=null}catch(d){ue(t,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gp(n,e),n=n.sibling}function Gp(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),xn(e),a&4){try{lt(3,e,e.return),bo(3,e)}catch(y){ue(e,e.return,y)}try{lt(5,e,e.return)}catch(y){ue(e,e.return,y)}}break;case 1:un(n,e),xn(e),a&512&&i!==null&&ta(i,i.return);break;case 5:if(un(n,e),xn(e),a&512&&i!==null&&ta(i,i.return),e.flags&32){var t=e.stateNode;try{gt(t,"")}catch(y){ue(e,e.return,y)}}if(a&4&&(t=e.stateNode,t!=null)){var r=e.memoizedProps,o=i!==null?i.memoizedProps:r,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&jg(t,r),Vl(s,o);var d=Vl(s,r);for(o=0;o<c.length;o+=2){var u=c[o],p=c[o+1];u==="style"?Cg(t,p):u==="dangerouslySetInnerHTML"?kg(t,p):u==="children"?gt(t,p):Zs(t,u,p,d)}switch(s){case"input":Fl(t,r);break;case"textarea":yg(t,r);break;case"select":var h=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?la(t,!!r.multiple,g,!1):h!==!!r.multiple&&(r.defaultValue!=null?la(t,!!r.multiple,r.defaultValue,!0):la(t,!!r.multiple,r.multiple?[]:"",!1))}t[yt]=r}catch(y){ue(e,e.return,y)}}break;case 6:if(un(n,e),xn(e),a&4){if(e.stateNode===null)throw Error($(162));t=e.stateNode,r=e.memoizedProps;try{t.nodeValue=r}catch(y){ue(e,e.return,y)}}break;case 3:if(un(n,e),xn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{ht(n.containerInfo)}catch(y){ue(e,e.return,y)}break;case 4:un(n,e),xn(e);break;case 13:un(n,e),xn(e),t=e.child,t.flags&8192&&(r=t.memoizedState!==null,t.stateNode.isHidden=r,!r||t.alternate!==null&&t.alternate.memoizedState!==null||(Tc=pe())),a&4&&iu(e);break;case 22:if(u=i!==null&&i.memoizedState!==null,e.mode&1?($e=(d=$e)||u,un(n,e),$e=d):un(n,e),xn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(E=e,u=e.child;u!==null;){for(p=E=u;E!==null;){switch(h=E,g=h.child,h.tag){case 0:case 11:case 14:case 15:lt(4,h,h.return);break;case 1:ta(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){a=h,i=h.return;try{n=a,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(y){ue(a,i,y)}}break;case 5:ta(h,h.return);break;case 22:if(h.memoizedState!==null){tu(p);continue}}g!==null?(g.return=h,E=g):tu(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{t=p.stateNode,d?(r=t.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Pg("display",o))}catch(y){ue(e,e.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){ue(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:un(n,e),xn(e),a&4&&iu(e);break;case 21:break;default:un(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Zp(i)){var a=i;break e}i=i.return}throw Error($(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(gt(t,""),a.flags&=-33);var r=nu(e);ys(e,r,t);break;case 3:case 4:var o=a.stateNode.containerInfo,s=nu(e);js(e,s,o);break;default:throw Error($(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qh(e,n,i){E=e,Xp(e)}function Xp(e,n,i){for(var a=(e.mode&1)!==0;E!==null;){var t=E,r=t.child;if(t.tag===22&&a){var o=t.memoizedState!==null||lr;if(!o){var s=t.alternate,c=s!==null&&s.memoizedState!==null||$e;s=lr;var d=$e;if(lr=o,($e=c)&&!d)for(E=t;E!==null;)o=E,c=o.child,o.tag===22&&o.memoizedState!==null?ru(t):c!==null?(c.return=o,E=c):ru(t);for(;r!==null;)E=r,Xp(r),r=r.sibling;E=t,lr=s,$e=d}au(e)}else t.subtreeFlags&8772&&r!==null?(r.return=t,E=r):au(e)}}function au(e){for(;E!==null;){var n=E;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:$e||bo(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!$e)if(i===null)a.componentDidMount();else{var t=n.elementType===n.type?i.memoizedProps:pn(n.type,i.memoizedProps);a.componentDidUpdate(t,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&_d(n,r,a);break;case 3:var o=n.updateQueue;if(o!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}_d(n,o,i)}break;case 5:var s=n.stateNode;if(i===null&&n.flags&4){i=s;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&ht(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}$e||n.flags&512&&Rs(n)}catch(h){ue(n,n.return,h)}}if(n===e){E=null;break}if(i=n.sibling,i!==null){i.return=n.return,E=i;break}E=n.return}}function tu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var i=n.sibling;if(i!==null){i.return=n.return,E=i;break}E=n.return}}function ru(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{bo(4,n)}catch(c){ue(n,i,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var t=n.return;try{a.componentDidMount()}catch(c){ue(n,t,c)}}var r=n.return;try{Rs(n)}catch(c){ue(n,r,c)}break;case 5:var o=n.return;try{Rs(n)}catch(c){ue(n,o,c)}}}catch(c){ue(n,n.return,c)}if(n===e){E=null;break}var s=n.sibling;if(s!==null){s.return=n.return,E=s;break}E=n.return}}var qh=Math.ceil,io=Vn.ReactCurrentDispatcher,Kc=Vn.ReactCurrentOwner,ln=Vn.ReactCurrentBatchConfig,W=0,ye=null,me=null,Pe=0,We=0,ra=mi(0),we=0,Kt=null,Ei=0,To=0,bc=0,st=null,Je=null,Tc=0,Ra=1/0,Mn=null,ao=!1,xs=null,li=null,sr=!1,ei=null,to=0,ct=0,ks=null,br=-1,Tr=0;function Oe(){return W&6?pe():br!==-1?br:br=pe()}function si(e){return e.mode&1?W&2&&Pe!==0?Pe&-Pe:Nh.transition!==null?(Tr===0&&(Tr=Dg()),Tr):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Ig(e.type)),e):1}function wn(e,n,i,a){if(50<ct)throw ct=0,ks=null,Error($(185));Mt(e,i,a),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(To|=i),we===4&&Gn(e,Pe)),Be(e,a),i===1&&W===0&&!(n.mode&1)&&(Ra=pe()+500,Co&&hi()))}function Be(e,n){var i=e.callbackNode;N0(e,n);var a=_r(e,e===ye?Pe:0);if(a===0)i!==null&&fd(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&fd(i),n===1)e.tag===0?Sh(ou.bind(null,e)):cp(ou.bind(null,e)),Kh(function(){!(W&6)&&hi()}),i=null;else{switch(Jg(a)){case 1:i=nc;break;case 4:i=Eg;break;case 16:i=Fr;break;case 536870912:i=Hg;break;default:i=Fr}i=sf(i,ef.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function ef(e,n){if(br=-1,Tr=0,W&6)throw Error($(327));var i=e.callbackNode;if(ga()&&e.callbackNode!==i)return null;var a=_r(e,e===ye?Pe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=ro(e,a);else{n=a;var t=W;W|=2;var r=af();(ye!==e||Pe!==n)&&(Mn=null,Ra=pe()+500,Ki(e,n));do try{Gh();break}catch(s){nf(e,s)}while(!0);fc(),io.current=r,W=t,me!==null?n=0:(ye=null,Pe=0,n=we)}if(n!==0){if(n===2&&(t=Zl(e),t!==0&&(a=t,n=Ps(e,t))),n===1)throw i=Kt,Ki(e,0),Gn(e,a),Be(e,pe()),i;if(n===6)Gn(e,a);else{if(t=e.current.alternate,!(a&30)&&!Zh(t)&&(n=ro(e,a),n===2&&(r=Zl(e),r!==0&&(a=r,n=Ps(e,r))),n===1))throw i=Kt,Ki(e,0),Gn(e,a),Be(e,pe()),i;switch(e.finishedWork=t,e.finishedLanes=a,n){case 0:case 1:throw Error($(345));case 2:ji(e,Je,Mn);break;case 3:if(Gn(e,a),(a&130023424)===a&&(n=Tc+500-pe(),10<n)){if(_r(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){Oe(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=ts(ji.bind(null,e,Je,Mn),n);break}ji(e,Je,Mn);break;case 4:if(Gn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,t=-1;0<a;){var o=31-vn(a);r=1<<o,o=n[o],o>t&&(t=o),a&=~r}if(a=t,a=pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*qh(a/1960))-a,10<a){e.timeoutHandle=ts(ji.bind(null,e,Je,Mn),a);break}ji(e,Je,Mn);break;case 5:ji(e,Je,Mn);break;default:throw Error($(329))}}}return Be(e,pe()),e.callbackNode===i?ef.bind(null,e):null}function Ps(e,n){var i=st;return e.current.memoizedState.isDehydrated&&(Ki(e,n).flags|=256),e=ro(e,n),e!==2&&(n=Je,Je=i,n!==null&&Cs(n)),e}function Cs(e){Je===null?Je=e:Je.push.apply(Je,e)}function Zh(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var t=i[a],r=t.getSnapshot;t=t.value;try{if(!yn(r(),t))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Gn(e,n){for(n&=~bc,n&=~To,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-vn(n),a=1<<i;e[i]=-1,n&=~a}}function ou(e){if(W&6)throw Error($(327));ga();var n=_r(e,0);if(!(n&1))return Be(e,pe()),null;var i=ro(e,n);if(e.tag!==0&&i===2){var a=Zl(e);a!==0&&(n=a,i=Ps(e,a))}if(i===1)throw i=Kt,Ki(e,0),Gn(e,n),Be(e,pe()),i;if(i===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ji(e,Je,Mn),Be(e,pe()),null}function $c(e,n){var i=W;W|=1;try{return e(n)}finally{W=i,W===0&&(Ra=pe()+500,Co&&hi())}}function Hi(e){ei!==null&&ei.tag===0&&!(W&6)&&ga();var n=W;W|=1;var i=ln.transition,a=Y;try{if(ln.transition=null,Y=1,e)return e()}finally{Y=a,ln.transition=i,W=n,!(W&6)&&hi()}}function Sc(){We=ra.current,te(ra)}function Ki(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Lh(i)),me!==null)for(i=me.return;i!==null;){var a=i;switch(uc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Wr();break;case 3:va(),te(_e),te(Se),jc();break;case 5:Rc(a);break;case 4:va();break;case 13:te(oe);break;case 19:te(oe);break;case 10:mc(a.type._context);break;case 22:case 23:Sc()}i=i.return}if(ye=e,me=e=ci(e.current,null),Pe=We=n,we=0,Kt=null,bc=To=Ei=0,Je=st=null,Pi!==null){for(n=0;n<Pi.length;n++)if(i=Pi[n],a=i.interleaved,a!==null){i.interleaved=null;var t=a.next,r=i.pending;if(r!==null){var o=r.next;r.next=t,a.next=o}i.pending=a}Pi=null}return e}function nf(e,n){do{var i=me;try{if(fc(),Cr.current=no,eo){for(var a=le.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}eo=!1}if(Mi=0,Re=ve=le=null,ot=!1,Pt=0,Kc.current=null,i===null||i.return===null){we=1,Kt=n,me=null;break}e:{var r=e,o=i.return,s=i,c=n;if(n=Pe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=s,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Ud(o);if(g!==null){g.flags&=-257,Qd(g,o,s,r,n),g.mode&1&&Wd(r,d,n),n=g,c=d;var w=n.updateQueue;if(w===null){var y=new Set;y.add(c),n.updateQueue=y}else w.add(c);break e}else{if(!(n&1)){Wd(r,d,n),Nc();break e}c=Error($(426))}}else if(re&&s.mode&1){var x=Ud(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Qd(x,o,s,r,n),gc(wa(c,s));break e}}r=c=wa(c,s),we!==4&&(we=2),st===null?st=[r]:st.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var v=Jp(r,c,n);Fd(r,v);break e;case 1:s=c;var m=r.type,f=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(li===null||!li.has(f)))){r.flags|=65536,n&=-n,r.lanes|=n;var R=zp(r,s,n);Fd(r,R);break e}}r=r.return}while(r!==null)}rf(i)}catch(k){n=k,me===i&&i!==null&&(me=i=i.return);continue}break}while(!0)}function af(){var e=io.current;return io.current=no,e===null?no:e}function Nc(){(we===0||we===3||we===2)&&(we=4),ye===null||!(Ei&268435455)&&!(To&268435455)||Gn(ye,Pe)}function ro(e,n){var i=W;W|=2;var a=af();(ye!==e||Pe!==n)&&(Mn=null,Ki(e,n));do try{Yh();break}catch(t){nf(e,t)}while(!0);if(fc(),W=i,io.current=a,me!==null)throw Error($(261));return ye=null,Pe=0,we}function Yh(){for(;me!==null;)tf(me)}function Gh(){for(;me!==null&&!k0();)tf(me)}function tf(e){var n=lf(e.alternate,e,We);e.memoizedProps=e.pendingProps,n===null?rf(e):me=n,Kc.current=null}function rf(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=Vh(i,n),i!==null){i.flags&=32767,me=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,me=null;return}}else if(i=Ih(i,n,We),i!==null){me=i;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);we===0&&(we=5)}function ji(e,n,i){var a=Y,t=ln.transition;try{ln.transition=null,Y=1,Xh(e,n,i,a)}finally{ln.transition=t,Y=a}return null}function Xh(e,n,i,a){do ga();while(ei!==null);if(W&6)throw Error($(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(O0(e,r),e===ye&&(me=ye=null,Pe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||sr||(sr=!0,sf(Fr,function(){return ga(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=ln.transition,ln.transition=null;var o=Y;Y=1;var s=W;W|=4,Kc.current=null,Uh(e,i),Gp(i,e),Rh(is),Ar=!!ns,is=ns=null,e.current=i,Qh(i),P0(),W=s,Y=o,ln.transition=r}else e.current=i;if(sr&&(sr=!1,ei=e,to=t),r=e.pendingLanes,r===0&&(li=null),K0(i.stateNode),Be(e,pe()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)t=n[i],a(t.value,{componentStack:t.stack,digest:t.digest});if(ao)throw ao=!1,e=xs,xs=null,e;return to&1&&e.tag!==0&&ga(),r=e.pendingLanes,r&1?e===ks?ct++:(ct=0,ks=e):ct=0,hi(),null}function ga(){if(ei!==null){var e=Jg(to),n=ln.transition,i=Y;try{if(ln.transition=null,Y=16>e?16:e,ei===null)var a=!1;else{if(e=ei,ei=null,to=0,W&6)throw Error($(331));var t=W;for(W|=4,E=e.current;E!==null;){var r=E,o=r.child;if(E.flags&16){var s=r.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(E=d;E!==null;){var u=E;switch(u.tag){case 0:case 11:case 15:lt(8,u,r)}var p=u.child;if(p!==null)p.return=u,E=p;else for(;E!==null;){u=E;var h=u.sibling,g=u.return;if(qp(u),u===d){E=null;break}if(h!==null){h.return=g,E=h;break}E=g}}}var w=r.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}E=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,E=o;else e:for(;E!==null;){if(r=E,r.flags&2048)switch(r.tag){case 0:case 11:case 15:lt(9,r,r.return)}var v=r.sibling;if(v!==null){v.return=r.return,E=v;break e}E=r.return}}var m=e.current;for(E=m;E!==null;){o=E;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,E=f;else e:for(o=m;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bo(9,s)}}catch(k){ue(s,s.return,k)}if(s===o){E=null;break e}var R=s.sibling;if(R!==null){R.return=s.return,E=R;break e}E=s.return}}if(W=t,hi(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(jo,e)}catch{}a=!0}return a}finally{Y=i,ln.transition=n}}return!1}function lu(e,n,i){n=wa(i,n),n=Jp(e,n,1),e=oi(e,n,1),n=Oe(),e!==null&&(Mt(e,1,n),Be(e,n))}function ue(e,n,i){if(e.tag===3)lu(e,e,i);else for(;n!==null;){if(n.tag===3){lu(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(li===null||!li.has(a))){e=wa(i,e),e=zp(n,e,1),n=oi(n,e,1),e=Oe(),n!==null&&(Mt(n,1,e),Be(n,e));break}}n=n.return}}function ev(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=Oe(),e.pingedLanes|=e.suspendedLanes&i,ye===e&&(Pe&i)===i&&(we===4||we===3&&(Pe&130023424)===Pe&&500>pe()-Tc?Ki(e,0):bc|=i),Be(e,n)}function of(e,n){n===0&&(e.mode&1?(n=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):n=1);var i=Oe();e=An(e,n),e!==null&&(Mt(e,n,i),Be(e,i))}function nv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),of(e,i)}function iv(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error($(314))}a!==null&&a.delete(n),of(e,i)}var lf;lf=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)ze=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return ze=!1,Bh(e,n,i);ze=!!(e.flags&131072)}else ze=!1,re&&n.flags&1048576&&dp(n,qr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Kr(e,n),e=n.pendingProps;var t=fa(n,Se.current);ua(n,i),t=xc(null,n,a,e,t,i);var r=kc();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(a)?(r=!0,Ur(n)):r=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,vc(n),t.updater=Ko,n.stateNode=t,t._reactInternals=n,us(n,a,e,i),n=fs(null,n,a,!0,r,i)):(n.tag=0,re&&r&&dc(n),Ne(null,n,t,i),n=n.child),n;case 16:a=n.elementType;e:{switch(Kr(e,n),e=n.pendingProps,t=a._init,a=t(a._payload),n.type=a,t=n.tag=tv(a),e=pn(a,e),t){case 0:n=ps(null,n,a,e,i);break e;case 1:n=Yd(null,n,a,e,i);break e;case 11:n=qd(null,n,a,e,i);break e;case 14:n=Zd(null,n,a,pn(a.type,e),i);break e}throw Error($(306,a,""))}return n;case 0:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:pn(a,t),ps(e,n,a,t,i);case 1:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:pn(a,t),Yd(e,n,a,t,i);case 3:e:{if(Bp(n),e===null)throw Error($(387));a=n.pendingProps,r=n.memoizedState,t=r.element,hp(e,n),Gr(n,a,null,i);var o=n.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){t=wa(Error($(423)),n),n=Gd(e,n,a,i,t);break e}else if(a!==t){t=wa(Error($(424)),n),n=Gd(e,n,a,i,t);break e}else for(Ue=ri(n.stateNode.containerInfo.firstChild),qe=n,re=!0,mn=null,i=fp(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ma(),a===t){n=Bn(e,n,i);break e}Ne(e,n,a,i)}n=n.child}return n;case 5:return vp(n),e===null&&ss(n),a=n.type,t=n.pendingProps,r=e!==null?e.memoizedProps:null,o=t.children,as(a,t)?o=null:r!==null&&as(a,r)&&(n.flags|=32),Ap(e,n),Ne(e,n,o,i),n.child;case 6:return e===null&&ss(n),null;case 13:return Ip(e,n,i);case 4:return wc(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ha(n,null,a,i):Ne(e,n,a,i),n.child;case 11:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:pn(a,t),qd(e,n,a,t,i);case 7:return Ne(e,n,n.pendingProps,i),n.child;case 8:return Ne(e,n,n.pendingProps.children,i),n.child;case 12:return Ne(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,t=n.pendingProps,r=n.memoizedProps,o=t.value,ee(Zr,a._currentValue),a._currentValue=o,r!==null)if(yn(r.value,o)){if(r.children===t.children&&!_e.current){n=Bn(e,n,i);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var s=r.dependencies;if(s!==null){o=r.child;for(var c=s.firstContext;c!==null;){if(c.context===a){if(r.tag===1){c=zn(-1,i&-i),c.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}r.lanes|=i,c=r.alternate,c!==null&&(c.lanes|=i),cs(r.return,i,n),s.lanes|=i;break}c=c.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error($(341));o.lanes|=i,s=o.alternate,s!==null&&(s.lanes|=i),cs(o,i,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Ne(e,n,t.children,i),n=n.child}return n;case 9:return t=n.type,a=n.pendingProps.children,ua(n,i),t=sn(t),a=a(t),n.flags|=1,Ne(e,n,a,i),n.child;case 14:return a=n.type,t=pn(a,n.pendingProps),t=pn(a.type,t),Zd(e,n,a,t,i);case 15:return Fp(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:pn(a,t),Kr(e,n),n.tag=1,Ae(a)?(e=!0,Ur(n)):e=!1,ua(n,i),Dp(n,a,t),us(n,a,t,i),fs(null,n,a,!0,e,i);case 19:return Vp(e,n,i);case 22:return _p(e,n,i)}throw Error($(156,n.tag))};function sf(e,n){return Mg(e,n)}function av(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,i,a){return new av(e,n,i,a)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tv(e){if(typeof e=="function")return Oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Xs)return 14}return 2}function ci(e,n){var i=e.alternate;return i===null?(i=on(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function $r(e,n,i,a,t,r){var o=2;if(a=e,typeof e=="function")Oc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qi:return bi(i.children,t,r,n);case Ys:o=8,t|=8;break;case El:return e=on(12,i,n,t|2),e.elementType=El,e.lanes=r,e;case Hl:return e=on(13,i,n,t),e.elementType=Hl,e.lanes=r,e;case Dl:return e=on(19,i,n,t),e.elementType=Dl,e.lanes=r,e;case vg:return $o(i,t,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mg:o=10;break e;case hg:o=9;break e;case Gs:o=11;break e;case Xs:o=14;break e;case qn:o=16,a=null;break e}throw Error($(130,e==null?e:typeof e,""))}return n=on(o,i,n,t),n.elementType=e,n.type=a,n.lanes=r,n}function bi(e,n,i,a){return e=on(7,e,a,n),e.lanes=i,e}function $o(e,n,i,a){return e=on(22,e,a,n),e.elementType=vg,e.lanes=i,e.stateNode={isHidden:!1},e}function wl(e,n,i){return e=on(6,e,null,n),e.lanes=i,e}function Rl(e,n,i){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rv(e,n,i,a,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Mc(e,n,i,a,t,r,o,s,c){return e=new rv(e,n,i,s,c),n===1?(n=1,r===!0&&(n|=8)):n=0,r=on(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(r),e}function ov(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function cf(e){if(!e)return gi;e=e._reactInternals;e:{if(_i(e)!==e||e.tag!==1)throw Error($(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error($(171))}if(e.tag===1){var i=e.type;if(Ae(i))return sp(e,i,n)}return n}function df(e,n,i,a,t,r,o,s,c){return e=Mc(i,a,!0,e,t,r,o,s,c),e.context=cf(null),i=e.current,a=Oe(),t=si(i),r=zn(a,t),r.callback=n??null,oi(i,r,t),e.current.lanes=t,Mt(e,t,a),Be(e,a),e}function So(e,n,i,a){var t=n.current,r=Oe(),o=si(t);return i=cf(i),n.context===null?n.context=i:n.pendingContext=i,n=zn(r,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=oi(t,n,o),e!==null&&(wn(e,t,o,r),Pr(e,t,o)),o}function oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Ec(e,n){su(e,n),(e=e.alternate)&&su(e,n)}function lv(){return null}var uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}No.prototype.render=Hc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error($(409));So(e,n,null,null)};No.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hi(function(){So(null,e,null,null)}),n[_n]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var n=_g();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Yn.length&&n!==0&&n<Yn[i].priority;i++);Yn.splice(i,0,e),i===0&&Bg(e)}};function Dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function sv(e,n,i,a,t){if(t){if(typeof a=="function"){var r=a;a=function(){var d=oo(o);r.call(d)}}var o=df(n,a,e,0,null,!1,!1,"",cu);return e._reactRootContainer=o,e[_n]=o.current,Rt(e.nodeType===8?e.parentNode:e),Hi(),o}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var s=a;a=function(){var d=oo(c);s.call(d)}}var c=Mc(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=c,e[_n]=c.current,Rt(e.nodeType===8?e.parentNode:e),Hi(function(){So(n,c,i,a)}),c}function Mo(e,n,i,a,t){var r=i._reactRootContainer;if(r){var o=r;if(typeof t=="function"){var s=t;t=function(){var c=oo(o);s.call(c)}}So(n,o,e,t)}else o=sv(i,n,e,t,a);return oo(o)}zg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Za(n.pendingLanes);i!==0&&(ic(n,i|1),Be(n,pe()),!(W&6)&&(Ra=pe()+500,hi()))}break;case 13:Hi(function(){var a=An(e,1);if(a!==null){var t=Oe();wn(a,e,1,t)}}),Ec(e,1)}};ac=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var i=Oe();wn(n,e,134217728,i)}Ec(e,134217728)}};Fg=function(e){if(e.tag===13){var n=si(e),i=An(e,n);if(i!==null){var a=Oe();wn(i,e,n,a)}Ec(e,n)}};_g=function(){return Y};Ag=function(e,n){var i=Y;try{return Y=e,n()}finally{Y=i}};Ul=function(e,n,i){switch(n){case"input":if(Fl(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var t=Po(a);if(!t)throw Error($(90));Rg(a),Fl(a,t)}}}break;case"textarea":yg(e,i);break;case"select":n=i.value,n!=null&&la(e,!!i.multiple,n,!1)}};bg=$c;Tg=Hi;var cv={usingClientEntryPoint:!1,Events:[Ht,Xi,Po,Lg,Kg,$c]},za={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dv={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ng(e),e===null?null:e.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cr.isDisabled&&cr.supportsFiber)try{jo=cr.inject(dv),Sn=cr}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv;Xe.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(n))throw Error($(200));return ov(e,n,null,i)};Xe.createRoot=function(e,n){if(!Dc(e))throw Error($(299));var i=!1,a="",t=uf;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=Mc(e,1,!1,null,null,i,!1,a,t),e[_n]=n.current,Rt(e.nodeType===8?e.parentNode:e),new Hc(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Ng(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Hi(e)};Xe.hydrate=function(e,n,i){if(!Oo(n))throw Error($(200));return Mo(null,e,n,!0,i)};Xe.hydrateRoot=function(e,n,i){if(!Dc(e))throw Error($(405));var a=i!=null&&i.hydratedSources||null,t=!1,r="",o=uf;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),n=df(n,null,e,1,i??null,t,!1,r,o),e[_n]=n.current,Rt(e),a)for(e=0;e<a.length;e++)i=a[e],t=i._getVersion,t=t(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,t]:n.mutableSourceEagerHydrationData.push(i,t);return new No(n)};Xe.render=function(e,n,i){if(!Oo(n))throw Error($(200));return Mo(null,e,n,!1,i)};Xe.unmountComponentAtNode=function(e){if(!Oo(e))throw Error($(40));return e._reactRootContainer?(Hi(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};Xe.unstable_batchedUpdates=$c;Xe.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!Oo(i))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Mo(e,n,i,!1,a)};Xe.version="18.3.1-next-f1338f8080-20240426";function gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf)}catch(e){console.error(e)}}gf(),ug.exports=Xe;var uv=ug.exports,du=uv;Ol.createRoot=du.createRoot,Ol.hydrateRoot=du.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},bt.apply(this,arguments)}var ni;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ni||(ni={}));const uu="popstate";function gv(e){e===void 0&&(e={});function n(a,t){let{pathname:r,search:o,hash:s}=a.location;return Ls("",{pathname:r,search:o,hash:s},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function i(a,t){return typeof t=="string"?t:lo(t)}return fv(n,i,null,e)}function he(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function pf(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function pv(){return Math.random().toString(36).substr(2,8)}function gu(e,n){return{usr:e.state,key:e.key,idx:n}}function Ls(e,n,i,a){return i===void 0&&(i=null),bt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ta(n):n,{state:i,key:n&&n.key||a||pv()})}function lo(e){let{pathname:n="/",search:i="",hash:a=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Ta(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function fv(e,n,i,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:r=!1}=a,o=t.history,s=ni.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(bt({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function p(){s=ni.Pop;let x=u(),v=x==null?null:x-d;d=x,c&&c({action:s,location:y.location,delta:v})}function h(x,v){s=ni.Push;let m=Ls(y.location,x,v);d=u()+1;let f=gu(m,d),R=y.createHref(m);try{o.pushState(f,"",R)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;t.location.assign(R)}r&&c&&c({action:s,location:y.location,delta:1})}function g(x,v){s=ni.Replace;let m=Ls(y.location,x,v);d=u();let f=gu(m,d),R=y.createHref(m);o.replaceState(f,"",R),r&&c&&c({action:s,location:y.location,delta:0})}function w(x){let v=t.location.origin!=="null"?t.location.origin:t.location.href,m=typeof x=="string"?x:lo(x);return m=m.replace(/ $/,"%20"),he(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let y={get action(){return s},get location(){return e(t,o)},listen(x){if(c)throw new Error("A history only accepts one active listener");return t.addEventListener(uu,p),c=x,()=>{t.removeEventListener(uu,p),c=null}},createHref(x){return n(t,x)},createURL:w,encodeLocation(x){let v=w(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:g,go(x){return o.go(x)}};return y}var pu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pu||(pu={}));function mv(e,n,i){return i===void 0&&(i="/"),hv(e,n,i,!1)}function hv(e,n,i,a){let t=typeof n=="string"?Ta(n):n,r=Jc(t.pathname||"/",i);if(r==null)return null;let o=ff(e);vv(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let d=bv(r);s=Lv(o[c],d,a)}return s}function ff(e,n,i,a){n===void 0&&(n=[]),i===void 0&&(i=[]),a===void 0&&(a="");let t=(r,o,s)=>{let c={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=di([a,c.relativePath]),u=i.concat(c);r.children&&r.children.length>0&&(he(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ff(r.children,n,u,d)),!(r.path==null&&!r.index)&&n.push({path:d,score:Pv(d,r.index),routesMeta:u})};return e.forEach((r,o)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))t(r,o);else for(let c of mf(r.path))t(r,o,c)}),n}function mf(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,t=i.endsWith("?"),r=i.replace(/\?$/,"");if(a.length===0)return t?[r,""]:[r];let o=mf(a.join("/")),s=[];return s.push(...o.map(c=>c===""?r:[r,c].join("/"))),t&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function vv(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:Cv(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}const wv=/^:[\w-]+$/,Rv=3,jv=2,yv=1,xv=10,kv=-2,fu=e=>e==="*";function Pv(e,n){let i=e.split("/"),a=i.length;return i.some(fu)&&(a+=kv),n&&(a+=jv),i.filter(t=>!fu(t)).reduce((t,r)=>t+(wv.test(r)?Rv:r===""?yv:xv),a)}function Cv(e,n){return e.length===n.length&&e.slice(0,-1).every((a,t)=>a===n[t])?e[e.length-1]-n[n.length-1]:0}function Lv(e,n,i){let{routesMeta:a}=e,t={},r="/",o=[];for(let s=0;s<a.length;++s){let c=a[s],d=s===a.length-1,u=r==="/"?n:n.slice(r.length)||"/",p=mu({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),h=c.route;if(!p&&d&&i&&!a[a.length-1].route.index&&(p=mu({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!p)return null;Object.assign(t,p.params),o.push({params:t,pathname:di([r,p.pathname]),pathnameBase:Nv(di([r,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(r=di([r,p.pathnameBase]))}return o}function mu(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=Kv(e.path,e.caseSensitive,e.end),t=n.match(i);if(!t)return null;let r=t[0],o=r.replace(/(.)\/+$/,"$1"),s=t.slice(1);return{params:a.reduce((d,u,p)=>{let{paramName:h,isOptional:g}=u;if(h==="*"){let y=s[p]||"";o=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const w=s[p];return g&&!w?d[h]=void 0:d[h]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:o,pattern:e}}function Kv(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),pf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(a.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,n?void 0:"i"),a]}function bv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return pf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Jc(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function Tv(e,n){n===void 0&&(n="/");let{pathname:i,search:a="",hash:t=""}=typeof e=="string"?Ta(e):e;return{pathname:i?i.startsWith("/")?i:$v(i,n):n,search:Ov(a),hash:Mv(t)}}function $v(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?i.length>1&&i.pop():t!=="."&&i.push(t)}),i.length>1?i.join("/"):"/"}function jl(e,n,i,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sv(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function hf(e,n){let i=Sv(e);return n?i.map((a,t)=>t===i.length-1?a.pathname:a.pathnameBase):i.map(a=>a.pathnameBase)}function vf(e,n,i,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=Ta(e):(t=bt({},e),he(!t.pathname||!t.pathname.includes("?"),jl("?","pathname","search",t)),he(!t.pathname||!t.pathname.includes("#"),jl("#","pathname","hash",t)),he(!t.search||!t.search.includes("#"),jl("#","search","hash",t)));let r=e===""||t.pathname==="",o=r?"/":t.pathname,s;if(o==null)s=i;else{let p=n.length-1;if(!a&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;t.pathname=h.join("/")}s=p>=0?n[p]:"/"}let c=Tv(t,s),d=o&&o!=="/"&&o.endsWith("/"),u=(r||o===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const di=e=>e.join("/").replace(/\/\/+/g,"/"),Nv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ov=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ev(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wf=["post","put","patch","delete"];new Set(wf);const Hv=["get",...wf];new Set(Hv);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Tt.apply(this,arguments)}const zc=K.createContext(null),Dv=K.createContext(null),Ai=K.createContext(null),Eo=K.createContext(null),Bi=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Rf=K.createContext(null);function Jv(e,n){let{relative:i}=n===void 0?{}:n;Jt()||he(!1);let{basename:a,navigator:t}=K.useContext(Ai),{hash:r,pathname:o,search:s}=yf(e,{relative:i}),c=o;return a!=="/"&&(c=o==="/"?a:di([a,o])),t.createHref({pathname:c,search:s,hash:r})}function Jt(){return K.useContext(Eo)!=null}function ge(){return Jt()||he(!1),K.useContext(Eo).location}function jf(e){K.useContext(Ai).static||K.useLayoutEffect(e)}function vi(){let{isDataRoute:e}=K.useContext(Bi);return e?Yv():zv()}function zv(){Jt()||he(!1);let e=K.useContext(zc),{basename:n,future:i,navigator:a}=K.useContext(Ai),{matches:t}=K.useContext(Bi),{pathname:r}=ge(),o=JSON.stringify(hf(t,i.v7_relativeSplatPath)),s=K.useRef(!1);return jf(()=>{s.current=!0}),K.useCallback(function(d,u){if(u===void 0&&(u={}),!s.current)return;if(typeof d=="number"){a.go(d);return}let p=vf(d,JSON.parse(o),r,u.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:di([n,p.pathname])),(u.replace?a.replace:a.push)(p,u.state,u)},[n,a,o,r,e])}function yf(e,n){let{relative:i}=n===void 0?{}:n,{future:a}=K.useContext(Ai),{matches:t}=K.useContext(Bi),{pathname:r}=ge(),o=JSON.stringify(hf(t,a.v7_relativeSplatPath));return K.useMemo(()=>vf(e,JSON.parse(o),r,i==="path"),[e,o,r,i])}function Fv(e,n){return _v(e,n)}function _v(e,n,i,a){Jt()||he(!1);let{navigator:t}=K.useContext(Ai),{matches:r}=K.useContext(Bi),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=ge(),u;if(n){var p;let x=typeof n=="string"?Ta(n):n;c==="/"||(p=x.pathname)!=null&&p.startsWith(c)||he(!1),u=x}else u=d;let h=u.pathname||"/",g=h;if(c!=="/"){let x=c.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=mv(e,{pathname:g}),y=Wv(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:di([c,t.encodeLocation?t.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:di([c,t.encodeLocation?t.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),r,i,a);return n&&y?K.createElement(Eo.Provider,{value:{location:Tt({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ni.Pop}},y):y}function Av(){let e=Zv(),n=Ev(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},n),i?K.createElement("pre",{style:t},i):null,null)}const Bv=K.createElement(Av,null);class Iv extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?K.createElement(Bi.Provider,{value:this.props.routeContext},K.createElement(Rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vv(e){let{routeContext:n,match:i,children:a}=e,t=K.useContext(zc);return t&&t.static&&t.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=i.route.id),K.createElement(Bi.Provider,{value:n},a)}function Wv(e,n,i,a){var t;if(n===void 0&&(n=[]),i===void 0&&(i=null),a===void 0&&(a=null),e==null){var r;if(!i)return null;if(i.errors)e=i.matches;else if((r=a)!=null&&r.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,s=(t=i)==null?void 0:t.errors;if(s!=null){let u=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);u>=0||he(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(i&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:h,errors:g}=i,w=p.route.loader&&h[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||w){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,p,h)=>{let g,w=!1,y=null,x=null;i&&(g=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||Bv,c&&(d<0&&h===0?(w=!0,x=null):d===h&&(w=!0,x=p.route.hydrateFallbackElement||null)));let v=n.concat(o.slice(0,h+1)),m=()=>{let f;return g?f=y:w?f=x:p.route.Component?f=K.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=u,K.createElement(Vv,{match:p,routeContext:{outlet:u,matches:v,isDataRoute:i!=null},children:f})};return i&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?K.createElement(Iv,{location:i.location,revalidation:i.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var xf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xf||{}),so=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(so||{});function Uv(e){let n=K.useContext(zc);return n||he(!1),n}function Qv(e){let n=K.useContext(Dv);return n||he(!1),n}function qv(e){let n=K.useContext(Bi);return n||he(!1),n}function kf(e){let n=qv(),i=n.matches[n.matches.length-1];return i.route.id||he(!1),i.route.id}function Zv(){var e;let n=K.useContext(Rf),i=Qv(so.UseRouteError),a=kf(so.UseRouteError);return n!==void 0?n:(e=i.errors)==null?void 0:e[a]}function Yv(){let{router:e}=Uv(xf.UseNavigateStable),n=kf(so.UseNavigateStable),i=K.useRef(!1);return jf(()=>{i.current=!0}),K.useCallback(function(t,r){r===void 0&&(r={}),i.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,Tt({fromRouteId:n},r)))},[e,n])}function an(e){he(!1)}function Gv(e){let{basename:n="/",children:i=null,location:a,navigationType:t=ni.Pop,navigator:r,static:o=!1,future:s}=e;Jt()&&he(!1);let c=n.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:c,navigator:r,static:o,future:Tt({v7_relativeSplatPath:!1},s)}),[c,s,r,o]);typeof a=="string"&&(a=Ta(a));let{pathname:u="/",search:p="",hash:h="",state:g=null,key:w="default"}=a,y=K.useMemo(()=>{let x=Jc(u,c);return x==null?null:{location:{pathname:x,search:p,hash:h,state:g,key:w},navigationType:t}},[c,u,p,h,g,w,t]);return y==null?null:K.createElement(Ai.Provider,{value:d},K.createElement(Eo.Provider,{children:i,value:y}))}function Xv(e){let{children:n,location:i}=e;return Fv(Ks(n),i)}new Promise(()=>{});function Ks(e,n){n===void 0&&(n=[]);let i=[];return K.Children.forEach(e,(a,t)=>{if(!K.isValidElement(a))return;let r=[...n,t];if(a.type===K.Fragment){i.push.apply(i,Ks(a.props.children,r));return}a.type!==an&&he(!1),!a.props.index||!a.props.children||he(!1);let o={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Ks(a.props.children,r)),i.push(o)}),i}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},bs.apply(this,arguments)}function e1(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}function n1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i1(e,n){return e.button===0&&(!n||n==="_self")&&!n1(e)}const a1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],t1="6";try{window.__reactRouterVersion=t1}catch{}const r1="startTransition",hu=Nl[r1];function o1(e){let{basename:n,children:i,future:a,window:t}=e,r=K.useRef();r.current==null&&(r.current=gv({window:t,v5Compat:!0}));let o=r.current,[s,c]=K.useState({action:o.action,location:o.location}),{v7_startTransition:d}=a||{},u=K.useCallback(p=>{d&&hu?hu(()=>c(p)):c(p)},[c,d]);return K.useLayoutEffect(()=>o.listen(u),[o,u]),K.createElement(Gv,{basename:n,children:i,location:s.location,navigationType:s.action,navigator:o,future:a})}const l1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wi=K.forwardRef(function(n,i){let{onClick:a,relative:t,reloadDocument:r,replace:o,state:s,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=n,h=e1(n,a1),{basename:g}=K.useContext(Ai),w,y=!1;if(typeof d=="string"&&s1.test(d)&&(w=d,l1))try{let f=new URL(window.location.href),R=d.startsWith("//")?new URL(f.protocol+d):new URL(d),k=Jc(R.pathname,g);R.origin===f.origin&&k!=null?d=k+R.search+R.hash:y=!0}catch{}let x=Jv(d,{relative:t}),v=c1(d,{replace:o,state:s,target:c,preventScrollReset:u,relative:t,unstable_viewTransition:p});function m(f){a&&a(f),f.defaultPrevented||v(f)}return K.createElement("a",bs({},h,{href:w||x,onClick:y||r?a:m,ref:i,target:c}))});var vu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vu||(vu={}));var wu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wu||(wu={}));function c1(e,n){let{target:i,replace:a,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:s}=n===void 0?{}:n,c=vi(),d=ge(),u=yf(e,{relative:o});return K.useCallback(p=>{if(i1(p,i)){p.preventDefault();let h=a!==void 0?a:lo(d)===lo(u);c(e,{replace:h,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:s})}},[d,c,u,a,t,i,e,r,o,s])}var Fe=function(){return Fe=Object.assign||function(n){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},Fe.apply(this,arguments)};function co(e,n,i){if(i||arguments.length===2)for(var a=0,t=n.length,r;a<t;a++)(r||!(a in n))&&(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}var ae="-ms-",dt="-moz-",Q="-webkit-",Pf="comm",Ho="rule",Fc="decl",d1="@import",Cf="@keyframes",u1="@layer",Lf=Math.abs,_c=String.fromCharCode,Ts=Object.assign;function g1(e,n){return je(e,0)^45?(((n<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function Kf(e){return e.trim()}function En(e,n){return(e=n.exec(e))?e[0]:e}function B(e,n,i){return e.replace(n,i)}function Sr(e,n,i){return e.indexOf(n,i)}function je(e,n){return e.charCodeAt(n)|0}function ja(e,n,i){return e.slice(n,i)}function bn(e){return e.length}function bf(e){return e.length}function Ga(e,n){return n.push(e),e}function p1(e,n){return e.map(n).join("")}function Ru(e,n){return e.filter(function(i){return!En(i,n)})}var Do=1,ya=1,Tf=0,dn=0,fe=0,$a="";function Jo(e,n,i,a,t,r,o,s){return{value:e,root:n,parent:i,type:a,props:t,children:r,line:Do,column:ya,length:o,return:"",siblings:s}}function Qn(e,n){return Ts(Jo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Wi(e){for(;e.root;)e=Qn(e.root,{children:[e]});Ga(e,e.siblings)}function f1(){return fe}function m1(){return fe=dn>0?je($a,--dn):0,ya--,fe===10&&(ya=1,Do--),fe}function Rn(){return fe=dn<Tf?je($a,dn++):0,ya++,fe===10&&(ya=1,Do++),fe}function Ti(){return je($a,dn)}function Nr(){return dn}function zo(e,n){return ja($a,e,n)}function $s(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function h1(e){return Do=ya=1,Tf=bn($a=e),dn=0,[]}function v1(e){return $a="",e}function yl(e){return Kf(zo(dn-1,Ss(e===91?e+2:e===40?e+1:e)))}function w1(e){for(;(fe=Ti())&&fe<33;)Rn();return $s(e)>2||$s(fe)>3?"":" "}function R1(e,n){for(;--n&&Rn()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return zo(e,Nr()+(n<6&&Ti()==32&&Rn()==32))}function Ss(e){for(;Rn();)switch(fe){case e:return dn;case 34:case 39:e!==34&&e!==39&&Ss(fe);break;case 40:e===41&&Ss(e);break;case 92:Rn();break}return dn}function j1(e,n){for(;Rn()&&e+fe!==57;)if(e+fe===84&&Ti()===47)break;return"/*"+zo(n,dn-1)+"*"+_c(e===47?e:Rn())}function y1(e){for(;!$s(Ti());)Rn();return zo(e,dn)}function x1(e){return v1(Or("",null,null,null,[""],e=h1(e),0,[0],e))}function Or(e,n,i,a,t,r,o,s,c){for(var d=0,u=0,p=o,h=0,g=0,w=0,y=1,x=1,v=1,m=0,f="",R=t,k=r,C=a,L=f;x;)switch(w=m,m=Rn()){case 40:if(w!=108&&je(L,p-1)==58){Sr(L+=B(yl(m),"&","&\f"),"&\f",Lf(d?s[d-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:L+=yl(m);break;case 9:case 10:case 13:case 32:L+=w1(w);break;case 92:L+=R1(Nr()-1,7);continue;case 47:switch(Ti()){case 42:case 47:Ga(k1(j1(Rn(),Nr()),n,i,c),c);break;default:L+="/"}break;case 123*y:s[d++]=bn(L)*v;case 125*y:case 59:case 0:switch(m){case 0:case 125:x=0;case 59+u:v==-1&&(L=B(L,/\f/g,"")),g>0&&bn(L)-p&&Ga(g>32?yu(L+";",a,i,p-1,c):yu(B(L," ","")+";",a,i,p-2,c),c);break;case 59:L+=";";default:if(Ga(C=ju(L,n,i,d,u,t,s,f,R=[],k=[],p,r),r),m===123)if(u===0)Or(L,n,C,C,R,r,p,s,k);else switch(h===99&&je(L,3)===110?100:h){case 100:case 108:case 109:case 115:Or(e,C,C,a&&Ga(ju(e,C,C,0,0,t,s,f,t,R=[],p,k),k),t,k,p,s,a?R:k);break;default:Or(L,C,C,C,[""],k,0,s,k)}}d=u=g=0,y=v=1,f=L="",p=o;break;case 58:p=1+bn(L),g=w;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&m1()==125)continue}switch(L+=_c(m),m*y){case 38:v=u>0?1:(L+="\f",-1);break;case 44:s[d++]=(bn(L)-1)*v,v=1;break;case 64:Ti()===45&&(L+=yl(Rn())),h=Ti(),u=p=bn(f=L+=y1(Nr())),m++;break;case 45:w===45&&bn(L)==2&&(y=0)}}return r}function ju(e,n,i,a,t,r,o,s,c,d,u,p){for(var h=t-1,g=t===0?r:[""],w=bf(g),y=0,x=0,v=0;y<a;++y)for(var m=0,f=ja(e,h+1,h=Lf(x=o[y])),R=e;m<w;++m)(R=Kf(x>0?g[m]+" "+f:B(f,/&\f/g,g[m])))&&(c[v++]=R);return Jo(e,n,i,t===0?Ho:s,c,d,u,p)}function k1(e,n,i,a){return Jo(e,n,i,Pf,_c(f1()),ja(e,2,-2),0,a)}function yu(e,n,i,a,t){return Jo(e,n,i,Fc,ja(e,0,a),ja(e,a+1,-1),a,t)}function $f(e,n,i){switch(g1(e,n)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return dt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+dt+e+ae+e+e;case 5936:switch(je(e,n+11)){case 114:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+ae+e+e;case 6165:return Q+e+ae+"flex-"+e+e;case 5187:return Q+e+B(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return Q+e+ae+"flex-item-"+B(e,/flex-|-self/g,"")+(En(e,/flex-|baseline/)?"":ae+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return Q+e+ae+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+ae+B(e,"shrink","negative")+e;case 5292:return Q+e+ae+B(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+B(e,"-grow","")+Q+e+ae+B(e,"grow","positive")+e;case 4554:return Q+B(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!En(e,/flex-|baseline/))return ae+"grid-column-align"+ja(e,n)+e;break;case 2592:case 3360:return ae+B(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,t){return n=t,En(a.props,/grid-\w+-end/)})?~Sr(e+(i=i[n].value),"span",0)?e:ae+B(e,"-start","")+e+ae+"grid-row-span:"+(~Sr(i,"span",0)?En(i,/\d+/):+En(i,/\d+/)-+En(e,/\d+/))+";":ae+B(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return En(a.props,/grid-\w+-start/)})?e:ae+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(e)-1-n>6)switch(je(e,n+1)){case 109:if(je(e,n+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+dt+(je(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Sr(e,"stretch",0)?$f(B(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,t,r,o,s,c,d){return ae+t+":"+r+d+(o?ae+t+"-span:"+(s?c:+c-+r)+d:"")+e});case 4949:if(je(e,n+6)===121)return B(e,":",":"+Q)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(je(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+ae+"$2box$3")+e;case 100:return B(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function uo(e,n){for(var i="",a=0;a<e.length;a++)i+=n(e[a],a,e,n)||"";return i}function P1(e,n,i,a){switch(e.type){case u1:if(e.children.length)break;case d1:case Fc:return e.return=e.return||e.value;case Pf:return"";case Cf:return e.return=e.value+"{"+uo(e.children,a)+"}";case Ho:if(!bn(e.value=e.props.join(",")))return""}return bn(i=uo(e.children,a))?e.return=e.value+"{"+i+"}":""}function C1(e){var n=bf(e);return function(i,a,t,r){for(var o="",s=0;s<n;s++)o+=e[s](i,a,t,r)||"";return o}}function L1(e){return function(n){n.root||(n=n.return)&&e(n)}}function K1(e,n,i,a){if(e.length>-1&&!e.return)switch(e.type){case Fc:e.return=$f(e.value,e.length,i);return;case Cf:return uo([Qn(e,{value:B(e.value,"@","@"+Q)})],a);case Ho:if(e.length)return p1(i=e.props,function(t){switch(En(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wi(Qn(e,{props:[B(t,/:(read-\w+)/,":"+dt+"$1")]})),Wi(Qn(e,{props:[t]})),Ts(e,{props:Ru(i,a)});break;case"::placeholder":Wi(Qn(e,{props:[B(t,/:(plac\w+)/,":"+Q+"input-$1")]})),Wi(Qn(e,{props:[B(t,/:(plac\w+)/,":"+dt+"$1")]})),Wi(Qn(e,{props:[B(t,/:(plac\w+)/,ae+"input-$1")]})),Wi(Qn(e,{props:[t]})),Ts(e,{props:Ru(i,a)});break}return""})}}var b1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ve={},xa=typeof process<"u"&&Ve!==void 0&&(Ve.REACT_APP_SC_ATTR||Ve.SC_ATTR)||"data-styled",Sf="active",Nf="data-styled-version",Fo="6.1.12",Ac=`/*!sc*/
`,go=typeof window<"u"&&"HTMLElement"in window,T1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==""?Ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.SC_DISABLE_SPEEDY!==void 0&&Ve.SC_DISABLE_SPEEDY!==""&&Ve.SC_DISABLE_SPEEDY!=="false"&&Ve.SC_DISABLE_SPEEDY),_o=Object.freeze([]),ka=Object.freeze({});function $1(e,n,i){return i===void 0&&(i=ka),e.theme!==i.theme&&e.theme||n||i.theme}var Of=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),S1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,N1=/(^-|-$)/g;function xu(e){return e.replace(S1,"-").replace(N1,"")}var O1=/(a)(d)/gi,dr=52,ku=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ns(e){var n,i="";for(n=Math.abs(e);n>dr;n=n/dr|0)i=ku(n%dr)+i;return(ku(n%dr)+i).replace(O1,"$1-$2")}var xl,Mf=5381,oa=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},Ef=function(e){return oa(Mf,e)};function M1(e){return Ns(Ef(e)>>>0)}function E1(e){return e.displayName||e.name||"Component"}function kl(e){return typeof e=="string"&&!0}var Hf=typeof Symbol=="function"&&Symbol.for,Df=Hf?Symbol.for("react.memo"):60115,H1=Hf?Symbol.for("react.forward_ref"):60112,D1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},J1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z1=((xl={})[H1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xl[Df]=Jf,xl);function Pu(e){return("type"in(n=e)&&n.type.$$typeof)===Df?Jf:"$$typeof"in e?z1[e.$$typeof]:D1;var n}var F1=Object.defineProperty,_1=Object.getOwnPropertyNames,Cu=Object.getOwnPropertySymbols,A1=Object.getOwnPropertyDescriptor,B1=Object.getPrototypeOf,Lu=Object.prototype;function zf(e,n,i){if(typeof n!="string"){if(Lu){var a=B1(n);a&&a!==Lu&&zf(e,a,i)}var t=_1(n);Cu&&(t=t.concat(Cu(n)));for(var r=Pu(e),o=Pu(n),s=0;s<t.length;++s){var c=t[s];if(!(c in J1||i&&i[c]||o&&c in o||r&&c in r)){var d=A1(n,c);try{F1(e,c,d)}catch{}}}}return e}function Pa(e){return typeof e=="function"}function Bc(e){return typeof e=="object"&&"styledComponentId"in e}function Li(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Ku(e,n){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function $t(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Os(e,n,i){if(i===void 0&&(i=!1),!i&&!$t(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)e[a]=Os(e[a],n[a]);else if($t(n))for(var a in n)e[a]=Os(e[a],n[a]);return e}function Ic(e,n){Object.defineProperty(e,"toString",{value:n})}function zt(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var I1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,a=0;a<n;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var a=this.groupSizes,t=a.length,r=t;n>=r;)if((r<<=1)<0)throw zt(16,"".concat(n));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var o=t;o<r;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(n+1),c=(o=0,i.length);o<c;o++)this.tag.insertRule(s,i[o])&&(this.groupSizes[n]++,s++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],a=this.indexOfGroup(n),t=a+i;this.groupSizes[n]=0;for(var r=a;r<t;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var a=this.groupSizes[n],t=this.indexOfGroup(n),r=t+a,o=t;o<r;o++)i+="".concat(this.tag.getRule(o)).concat(Ac);return i},e}(),Mr=new Map,po=new Map,Er=1,ur=function(e){if(Mr.has(e))return Mr.get(e);for(;po.has(Er);)Er++;var n=Er++;return Mr.set(e,n),po.set(n,e),n},V1=function(e,n){Er=n+1,Mr.set(e,n),po.set(n,e)},W1="style[".concat(xa,"][").concat(Nf,'="').concat(Fo,'"]'),U1=new RegExp("^".concat(xa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Q1=function(e,n,i){for(var a,t=i.split(","),r=0,o=t.length;r<o;r++)(a=t[r])&&e.registerName(n,a)},q1=function(e,n){for(var i,a=((i=n.textContent)!==null&&i!==void 0?i:"").split(Ac),t=[],r=0,o=a.length;r<o;r++){var s=a[r].trim();if(s){var c=s.match(U1);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(V1(u,d),Q1(e,u,c[3]),e.getTag().insertRules(d,t)),t.length=0}else t.push(s)}}},bu=function(e){for(var n=document.querySelectorAll(W1),i=0,a=n.length;i<a;i++){var t=n[i];t&&t.getAttribute(xa)!==Sf&&(q1(e,t),t.parentNode&&t.parentNode.removeChild(t))}};function Z1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ff=function(e){var n=document.head,i=e||n,a=document.createElement("style"),t=function(s){var c=Array.from(s.querySelectorAll("style[".concat(xa,"]")));return c[c.length-1]}(i),r=t!==void 0?t.nextSibling:null;a.setAttribute(xa,Sf),a.setAttribute(Nf,Fo);var o=Z1();return o&&a.setAttribute("nonce",o),i.insertBefore(a,r),a},Y1=function(){function e(n){this.element=Ff(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,t=0,r=a.length;t<r;t++){var o=a[t];if(o.ownerNode===i)return o}throw zt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),G1=function(){function e(n){this.element=Ff(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),X1=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Tu=go,e2={isServer:!go,useCSSOMInjection:!T1},_f=function(){function e(n,i,a){n===void 0&&(n=ka),i===void 0&&(i={});var t=this;this.options=Fe(Fe({},e2),n),this.gs=i,this.names=new Map(a),this.server=!!n.isServer,!this.server&&go&&Tu&&(Tu=!1,bu(this)),Ic(this,function(){return function(r){for(var o=r.getTag(),s=o.length,c="",d=function(p){var h=function(v){return po.get(v)}(p);if(h===void 0)return"continue";var g=r.names.get(h),w=o.getGroup(p);if(g===void 0||!g.size||w.length===0)return"continue";var y="".concat(xa,".g").concat(p,'[id="').concat(h,'"]'),x="";g!==void 0&&g.forEach(function(v){v.length>0&&(x+="".concat(v,","))}),c+="".concat(w).concat(y,'{content:"').concat(x,'"}').concat(Ac)},u=0;u<s;u++)d(u);return c}(t)})}return e.registerId=function(n){return ur(n)},e.prototype.rehydrate=function(){!this.server&&go&&bu(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(Fe(Fe({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var a=i.useCSSOMInjection,t=i.target;return i.isServer?new X1(t):a?new Y1(t):new G1(t)}(this.options),new I1(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(ur(n),this.names.has(n))this.names.get(n).add(i);else{var a=new Set;a.add(i),this.names.set(n,a)}},e.prototype.insertRules=function(n,i,a){this.registerName(n,i),this.getTag().insertRules(ur(n),a)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(ur(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),n2=/&/g,i2=/^\s*\/\/.*$/gm;function Af(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Af(i.children,n)),i})}function a2(e){var n,i,a,t=ka,r=t.options,o=r===void 0?ka:r,s=t.plugins,c=s===void 0?_o:s,d=function(h,g,w){return w.startsWith(i)&&w.endsWith(i)&&w.replaceAll(i,"").length>0?".".concat(n):h},u=c.slice();u.push(function(h){h.type===Ho&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(n2,i).replace(a,d))}),o.prefix&&u.push(K1),u.push(P1);var p=function(h,g,w,y){g===void 0&&(g=""),w===void 0&&(w=""),y===void 0&&(y="&"),n=y,i=g,a=new RegExp("\\".concat(i,"\\b"),"g");var x=h.replace(i2,""),v=x1(w||g?"".concat(w," ").concat(g," { ").concat(x," }"):x);o.namespace&&(v=Af(v,o.namespace));var m=[];return uo(v,C1(u.concat(L1(function(f){return m.push(f)})))),m};return p.hash=c.length?c.reduce(function(h,g){return g.name||zt(15),oa(h,g.name)},Mf).toString():"",p}var t2=new _f,Ms=a2(),Bf=Si.createContext({shouldForwardProp:void 0,styleSheet:t2,stylis:Ms});Bf.Consumer;Si.createContext(void 0);function $u(){return K.useContext(Bf)}var r2=function(){function e(n,i){var a=this;this.inject=function(t,r){r===void 0&&(r=Ms);var o=a.name+r.hash;t.hasNameForId(a.id,o)||t.insertRules(a.id,o,r(a.rules,o,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,Ic(this,function(){throw zt(12,String(a.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=Ms),this.name+n.hash},e}(),o2=function(e){return e>="A"&&e<="Z"};function Su(e){for(var n="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;o2(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var If=function(e){return e==null||e===!1||e===""},Vf=function(e){var n,i,a=[];for(var t in e){var r=e[t];e.hasOwnProperty(t)&&!If(r)&&(Array.isArray(r)&&r.isCss||Pa(r)?a.push("".concat(Su(t),":"),r,";"):$t(r)?a.push.apply(a,co(co(["".concat(t," {")],Vf(r),!1),["}"],!1)):a.push("".concat(Su(t),": ").concat((n=t,(i=r)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in b1||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function $i(e,n,i,a){if(If(e))return[];if(Bc(e))return[".".concat(e.styledComponentId)];if(Pa(e)){if(!Pa(r=e)||r.prototype&&r.prototype.isReactComponent||!n)return[e];var t=e(n);return $i(t,n,i,a)}var r;return e instanceof r2?i?(e.inject(i,a),[e.getName(a)]):[e]:$t(e)?Vf(e):Array.isArray(e)?Array.prototype.concat.apply(_o,e.map(function(o){return $i(o,n,i,a)})):[e.toString()]}function l2(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(Pa(i)&&!Bc(i))return!1}return!0}var s2=Ef(Fo),c2=function(){function e(n,i,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&l2(n),this.componentId=i,this.baseHash=oa(s2,i),this.baseStyle=a,_f.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,a){var t=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))t=Li(t,this.staticRulesId);else{var r=Ku($i(this.rules,n,i,a)),o=Ns(oa(this.baseHash,r)>>>0);if(!i.hasNameForId(this.componentId,o)){var s=a(r,".".concat(o),void 0,this.componentId);i.insertRules(this.componentId,o,s)}t=Li(t,o),this.staticRulesId=o}else{for(var c=oa(this.baseHash,a.hash),d="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")d+=p;else if(p){var h=Ku($i(p,n,i,a));c=oa(c,h+u),d+=h}}if(d){var g=Ns(c>>>0);i.hasNameForId(this.componentId,g)||i.insertRules(this.componentId,g,a(d,".".concat(g),void 0,this.componentId)),t=Li(t,g)}}return t},e}(),Wf=Si.createContext(void 0);Wf.Consumer;var Pl={};function d2(e,n,i){var a=Bc(e),t=e,r=!kl(e),o=n.attrs,s=o===void 0?_o:o,c=n.componentId,d=c===void 0?function(R,k){var C=typeof R!="string"?"sc":xu(R);Pl[C]=(Pl[C]||0)+1;var L="".concat(C,"-").concat(M1(Fo+C+Pl[C]));return k?"".concat(k,"-").concat(L):L}(n.displayName,n.parentComponentId):c,u=n.displayName,p=u===void 0?function(R){return kl(R)?"styled.".concat(R):"Styled(".concat(E1(R),")")}(e):u,h=n.displayName&&n.componentId?"".concat(xu(n.displayName),"-").concat(n.componentId):n.componentId||d,g=a&&t.attrs?t.attrs.concat(s).filter(Boolean):s,w=n.shouldForwardProp;if(a&&t.shouldForwardProp){var y=t.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;w=function(R,k){return y(R,k)&&x(R,k)}}else w=y}var v=new c2(i,h,a?t.componentStyle:void 0);function m(R,k){return function(C,L,T){var F=C.attrs,D=C.componentStyle,q=C.defaultProps,nn=C.foldedComponentIds,b=C.styledComponentId,J=C.target,U=Si.useContext(Wf),Z=$u(),V=C.shouldForwardProp||Z.shouldForwardProp,S=$1(L,U,q)||ka,O=function(De,N,z){for(var On,G=Fe(Fe({},N),{className:void 0,theme:z}),X=0;X<De.length;X+=1){var Wn=Pa(On=De[X])?On(G):On;for(var Ie in Wn)G[Ie]=Ie==="className"?Li(G[Ie],Wn[Ie]):Ie==="style"?Fe(Fe({},G[Ie]),Wn[Ie]):Wn[Ie]}return N.className&&(G.className=Li(G.className,N.className)),G}(F,L,S),H=O.as||J,A={};for(var _ in O)O[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&O.theme===S||(_==="forwardedAs"?A.as=O.forwardedAs:V&&!V(_,H)||(A[_]=O[_]));var ce=function(De,N){var z=$u(),On=De.generateAndInjectStyles(N,z.styleSheet,z.stylis);return On}(D,O),ne=Li(nn,b);return ce&&(ne+=" "+ce),O.className&&(ne+=" "+O.className),A[kl(H)&&!Of.has(H)?"class":"className"]=ne,A.ref=T,K.createElement(H,A)}(f,R,k)}m.displayName=p;var f=Si.forwardRef(m);return f.attrs=g,f.componentStyle=v,f.displayName=p,f.shouldForwardProp=w,f.foldedComponentIds=a?Li(t.foldedComponentIds,t.styledComponentId):"",f.styledComponentId=h,f.target=a?t.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=a?function(k){for(var C=[],L=1;L<arguments.length;L++)C[L-1]=arguments[L];for(var T=0,F=C;T<F.length;T++)Os(k,F[T],!0);return k}({},t.defaultProps,R):R}}),Ic(f,function(){return".".concat(f.styledComponentId)}),r&&zf(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Nu(e,n){for(var i=[e[0]],a=0,t=n.length;a<t;a+=1)i.push(n[a],e[a+1]);return i}var Ou=function(e){return Object.assign(e,{isCss:!0})};function u2(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(Pa(e)||$t(e))return Ou($i(Nu(_o,co([e],n,!0))));var a=e;return n.length===0&&a.length===1&&typeof a[0]=="string"?$i(a):Ou($i(Nu(a,n)))}function Es(e,n,i){if(i===void 0&&(i=ka),!n)throw zt(1,n);var a=function(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(n,i,u2.apply(void 0,co([t],r,!1)))};return a.attrs=function(t){return Es(e,n,Fe(Fe({},i),{attrs:Array.prototype.concat(i.attrs,t).filter(Boolean)}))},a.withConfig=function(t){return Es(e,n,Fe(Fe({},i),t))},a}var Uf=function(e){return Es(d2,e)},j=Uf;Of.forEach(function(e){j[e]=Uf(e)});var Qf={exports:{}},qf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=K;function g2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var p2=typeof Object.is=="function"?Object.is:g2,f2=Ft.useSyncExternalStore,m2=Ft.useRef,h2=Ft.useEffect,v2=Ft.useMemo,w2=Ft.useDebugValue;qf.useSyncExternalStoreWithSelector=function(e,n,i,a,t){var r=m2(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=v2(function(){function c(g){if(!d){if(d=!0,u=g,g=a(g),t!==void 0&&o.hasValue){var w=o.value;if(t(w,g))return p=w}return p=g}if(w=p,p2(u,g))return w;var y=a(g);return t!==void 0&&t(w,y)?w:(u=g,p=y)}var d=!1,u,p,h=i===void 0?null:i;return[function(){return c(n())},h===null?void 0:function(){return c(h())}]},[n,i,a,t]);var s=f2(e,r[0],r[1]);return h2(function(){o.hasValue=!0,o.value=s},[s]),w2(s),s};Qf.exports=qf;var R2=Qf.exports,Qe="default"in Nl?Si:Nl,Mu=Symbol.for("react-redux-context"),Eu=typeof globalThis<"u"?globalThis:{};function j2(){if(!Qe.createContext)return{};const e=Eu[Mu]??(Eu[Mu]=new Map);let n=e.get(Qe.createContext);return n||(n=Qe.createContext(null),e.set(Qe.createContext,n)),n}var pi=j2(),y2=()=>{throw new Error("uSES not initialized!")};function Vc(e=pi){return function(){return Qe.useContext(e)}}var Zf=Vc(),Yf=y2,x2=e=>{Yf=e},k2=(e,n)=>e===n;function P2(e=pi){const n=e===pi?Zf:Vc(e),i=(a,t={})=>{const{equalityFn:r=k2,devModeChecks:o={}}=typeof t=="function"?{equalityFn:t}:t,{store:s,subscription:c,getServerState:d,stabilityCheck:u,identityFunctionCheck:p}=n();Qe.useRef(!0);const h=Qe.useCallback({[a.name](w){return a(w)}}[a.name],[a,u,o.stabilityCheck]),g=Yf(c.addNestedSub,s.getState,d||s.getState,h,r);return Qe.useDebugValue(g),g};return Object.assign(i,{withTypes:()=>i}),i}var P=P2();function C2(e){e()}function L2(){let e=null,n=null;return{clear(){e=null,n=null},notify(){C2(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){const i=[];let a=e;for(;a;)i.push(a),a=a.next;return i},subscribe(i){let a=!0;const t=n={callback:i,next:null,prev:n};return t.prev?t.prev.next=t:e=t,function(){!a||e===null||(a=!1,t.next?t.next.prev=t.prev:n=t.prev,t.prev?t.prev.next=t.next:e=t.next)}}}}var Hu={notify(){},get:()=>[]};function K2(e,n){let i,a=Hu,t=0,r=!1;function o(y){u();const x=a.subscribe(y);let v=!1;return()=>{v||(v=!0,x(),p())}}function s(){a.notify()}function c(){w.onStateChange&&w.onStateChange()}function d(){return r}function u(){t++,i||(i=e.subscribe(c),a=L2())}function p(){t--,i&&t===0&&(i(),i=void 0,a.clear(),a=Hu)}function h(){r||(r=!0,u())}function g(){r&&(r=!1,p())}const w={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:d,trySubscribe:h,tryUnsubscribe:g,getListeners:()=>a};return w}var b2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T2=typeof navigator<"u"&&navigator.product==="ReactNative",$2=b2||T2?Qe.useLayoutEffect:Qe.useEffect;function S2({store:e,context:n,children:i,serverState:a,stabilityCheck:t="once",identityFunctionCheck:r="once"}){const o=Qe.useMemo(()=>{const d=K2(e);return{store:e,subscription:d,getServerState:a?()=>a:void 0,stabilityCheck:t,identityFunctionCheck:r}},[e,a,t,r]),s=Qe.useMemo(()=>e.getState(),[e]);$2(()=>{const{subscription:d}=o;return d.onStateChange=d.notifyNestedSubs,d.trySubscribe(),s!==e.getState()&&d.notifyNestedSubs(),()=>{d.tryUnsubscribe(),d.onStateChange=void 0}},[o,s]);const c=n||pi;return Qe.createElement(c.Provider,{value:o},i)}var N2=S2;function Gf(e=pi){const n=e===pi?Zf:Vc(e),i=()=>{const{store:a}=n();return a};return Object.assign(i,{withTypes:()=>i}),i}var O2=Gf();function M2(e=pi){const n=e===pi?O2:Gf(e),i=()=>n().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var He=M2();x2(R2.useSyncExternalStoreWithSelector);var Xf={exports:{}},E2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H2=E2,D2=H2;function em(){}function nm(){}nm.resetWarningCache=em;var J2=function(){function e(a,t,r,o,s,c){if(c!==D2){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:nm,resetWarningCache:em};return i.PropTypes=i,i};Xf.exports=J2();var z2=Xf.exports;const M=Xu(z2),F2=j.nav`
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
`,Fa=j(wi)`
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
`,_a=j.span`
    font-size: 0.8vw;
    color: ${e=>e.$color};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`,Aa=j.h4`
    font-size: 1.7vw;
    color: ${e=>e.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 8vw;
    }
`,Ba=j.span`
    font-size: 0.8vw;
    color: ${e=>e.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`;function im({isButtonClicked:e,onLinkClick:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=P(c=>c.mode),{color:r}=P(c=>c.color),[o,s]=K.useState("flex");return K.useEffect(()=>{window.innerWidth<=560?s(e?"flex":"none"):s("flex")},[e]),l.jsxs(F2,{$bgColor:i,display:o,children:[l.jsxs(Fa,{$mainBgColor:t,to:"/Hiragana",onClick:n,children:[l.jsx(_a,{$color:r,children:"ひらがな"}),l.jsx(Aa,{$fontColor:a,children:"あ"}),l.jsx(Ba,{$fontColor:a,children:"hiragana"})]}),l.jsxs(Fa,{$mainBgColor:t,to:"/Katakana",onClick:n,children:[l.jsx(_a,{$color:r,children:"カタカナ"}),l.jsx(Aa,{$fontColor:a,children:"ア"}),l.jsx(Ba,{$fontColor:a,children:"katakana"})]}),l.jsxs(Fa,{$mainBgColor:t,to:"/Kanji",onClick:n,children:[l.jsx(_a,{$color:r,children:"かんじ"}),l.jsx(Aa,{$fontColor:a,children:"漢字"}),l.jsx(Ba,{$fontColor:a,children:"kanji"})]}),l.jsxs(Fa,{$mainBgColor:t,to:"/Vocabulaire",onClick:n,children:[l.jsx(_a,{$color:r,children:"ごい"}),l.jsx(Aa,{$fontColor:a,children:"語彙"}),l.jsx(Ba,{$fontColor:a,children:"Vocabulaire"})]}),l.jsxs(Fa,{$mainBgColor:t,to:"/Nombres",onClick:n,children:[l.jsx(_a,{$color:r,children:"ばんごう"}),l.jsx(Aa,{$fontColor:a,children:"番号"}),l.jsx(Ba,{$fontColor:a,children:"Nombres"})]})]})}im.propTypes={isButtonClicked:M.bool.isRequired,onLinkClick:M.func.isRequired};const _2=j.div`
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
`,A2=j.div`
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
`,B2=j.div`
    background-color: ${e=>e.$mainBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3vw;
    height: 2.5vw;
    border-radius: 0.5vw;
`,I2=j.span`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    margin: 0;
    border-radius: 0.5vw;
`;function V2(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(d=>d.mode),{color:a}=P(d=>d.color),[t,r]=K.useState("日本"),[o,s]=K.useState(new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"}));K.useEffect(()=>{const d=setInterval(()=>{s(new Date().toLocaleTimeString(t==="フランス"?"fr-FR":"ja-JP",{timeZone:t==="フランス"?"Europe/Paris":"Asia/Tokyo",hour:"2-digit",minute:"2-digit"}))},10);return()=>clearInterval(d)},[t]);const c=d=>{r(d==="France"?"フランス":"日本")};return l.jsxs(_2,{$bgColor:e,$fontColor:n,children:[l.jsxs(A2,{$mainBgColor:i,$fontColor:n,children:[l.jsx("button",{onClick:()=>c("France"),style:{backgroundColor:t==="フランス"?a:i},children:"France"}),l.jsx("button",{onClick:()=>c("Japon"),style:{backgroundColor:t==="日本"?a:i},children:"Japon"})]}),l.jsx(B2,{$mainBgColor:i,children:t}),l.jsx(I2,{$color:a,$mainBgColor:i,children:o})]})}const W2=j.button`
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
   `;function am({onButtonClick:e}){const{color:n}=P(a=>a.color),{mainBgColor:i}=P(a=>a.mode);return l.jsx(W2,{$color:n,$bgColor:i,onClick:e,children:"Menu"})}am.propTypes={onButtonClick:M.func.isRequired};const U2=j.div`
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
`;function Q2(){const[e,n]=K.useState(!1),i=()=>{n(!e),console.log("Button clicked!",e)},a=()=>{n(!1)};return l.jsxs(U2,{$clicked:e?"true":void 0,children:[l.jsx(im,{isButtonClicked:e,onLinkClick:a}),l.jsx(V2,{}),l.jsx(am,{onButtonClick:i})]})}function xe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var q2=typeof Symbol=="function"&&Symbol.observable||"@@observable",Du=q2,Cl=()=>Math.random().toString(36).substring(7).split("").join("."),Z2={INIT:`@@redux/INIT${Cl()}`,REPLACE:`@@redux/REPLACE${Cl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Cl()}`},fo=Z2;function Wc(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function tm(e,n,i){if(typeof e!="function")throw new Error(xe(2));if(typeof n=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(xe(0));if(typeof n=="function"&&typeof i>"u"&&(i=n,n=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(xe(1));return i(tm)(e,n)}let a=e,t=n,r=new Map,o=r,s=0,c=!1;function d(){o===r&&(o=new Map,r.forEach((x,v)=>{o.set(v,x)}))}function u(){if(c)throw new Error(xe(3));return t}function p(x){if(typeof x!="function")throw new Error(xe(4));if(c)throw new Error(xe(5));let v=!0;d();const m=s++;return o.set(m,x),function(){if(v){if(c)throw new Error(xe(6));v=!1,d(),o.delete(m),r=null}}}function h(x){if(!Wc(x))throw new Error(xe(7));if(typeof x.type>"u")throw new Error(xe(8));if(typeof x.type!="string")throw new Error(xe(17));if(c)throw new Error(xe(9));try{c=!0,t=a(t,x)}finally{c=!1}return(r=o).forEach(m=>{m()}),x}function g(x){if(typeof x!="function")throw new Error(xe(10));a=x,h({type:fo.REPLACE})}function w(){const x=p;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(xe(11));function m(){const R=v;R.next&&R.next(u())}return m(),{unsubscribe:x(m)}},[Du](){return this}}}return h({type:fo.INIT}),{dispatch:h,subscribe:p,getState:u,replaceReducer:g,[Du]:w}}function Y2(e){Object.keys(e).forEach(n=>{const i=e[n];if(typeof i(void 0,{type:fo.INIT})>"u")throw new Error(xe(12));if(typeof i(void 0,{type:fo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(xe(13))})}function G2(e){const n=Object.keys(e),i={};for(let r=0;r<n.length;r++){const o=n[r];typeof e[o]=="function"&&(i[o]=e[o])}const a=Object.keys(i);let t;try{Y2(i)}catch(r){t=r}return function(o={},s){if(t)throw t;let c=!1;const d={};for(let u=0;u<a.length;u++){const p=a[u],h=i[p],g=o[p],w=h(g,s);if(typeof w>"u")throw s&&s.type,new Error(xe(14));d[p]=w,c=c||w!==g}return c=c||a.length!==Object.keys(o).length,c?d:o}}function mo(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,i)=>(...a)=>n(i(...a)))}function X2(...e){return n=>(i,a)=>{const t=n(i,a);let r=()=>{throw new Error(xe(15))};const o={getState:t.getState,dispatch:(c,...d)=>r(c,...d)},s=e.map(c=>c(o));return r=mo(...s)(t.dispatch),{...t,dispatch:r}}}function ew(e){return Wc(e)&&"type"in e&&typeof e.type=="string"}var rm=Symbol.for("immer-nothing"),Ju=Symbol.for("immer-draftable"),Ye=Symbol.for("immer-state");function hn(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ca=Object.getPrototypeOf;function Di(e){return!!e&&!!e[Ye]}function In(e){var n;return e?om(e)||Array.isArray(e)||!!e[Ju]||!!((n=e.constructor)!=null&&n[Ju])||Bo(e)||Io(e):!1}var nw=Object.prototype.constructor.toString();function om(e){if(!e||typeof e!="object")return!1;const n=Ca(e);if(n===null)return!0;const i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===nw}function ho(e,n){Ao(e)===0?Reflect.ownKeys(e).forEach(i=>{n(i,e[i],e)}):e.forEach((i,a)=>n(a,i,e))}function Ao(e){const n=e[Ye];return n?n.type_:Array.isArray(e)?1:Bo(e)?2:Io(e)?3:0}function Hs(e,n){return Ao(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function lm(e,n,i){const a=Ao(e);a===2?e.set(n,i):a===3?e.add(i):e[n]=i}function iw(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Bo(e){return e instanceof Map}function Io(e){return e instanceof Set}function yi(e){return e.copy_||e.base_}function Ds(e,n){if(Bo(e))return new Map(e);if(Io(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const i=om(e);if(n===!0||n==="class_only"&&!i){const a=Object.getOwnPropertyDescriptors(e);delete a[Ye];let t=Reflect.ownKeys(a);for(let r=0;r<t.length;r++){const o=t[r],s=a[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(a[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(Ca(e),a)}else{const a=Ca(e);if(a!==null&&i)return{...e};const t=Object.create(a);return Object.assign(t,e)}}function Uc(e,n=!1){return Vo(e)||Di(e)||!In(e)||(Ao(e)>1&&(e.set=e.add=e.clear=e.delete=aw),Object.freeze(e),n&&Object.entries(e).forEach(([i,a])=>Uc(a,!0))),e}function aw(){hn(2)}function Vo(e){return Object.isFrozen(e)}var tw={};function Ji(e){const n=tw[e];return n||hn(0,e),n}var St;function sm(){return St}function rw(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zu(e,n){n&&(Ji("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Js(e){zs(e),e.drafts_.forEach(ow),e.drafts_=null}function zs(e){e===St&&(St=e.parent_)}function Fu(e){return St=rw(St,e)}function ow(e){const n=e[Ye];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function _u(e,n){n.unfinalizedDrafts_=n.drafts_.length;const i=n.drafts_[0];return e!==void 0&&e!==i?(i[Ye].modified_&&(Js(n),hn(4)),In(e)&&(e=vo(n,e),n.parent_||wo(n,e)),n.patches_&&Ji("Patches").generateReplacementPatches_(i[Ye].base_,e,n.patches_,n.inversePatches_)):e=vo(n,i,[]),Js(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==rm?e:void 0}function vo(e,n,i){if(Vo(n))return n;const a=n[Ye];if(!a)return ho(n,(t,r)=>Au(e,a,n,t,r,i)),n;if(a.scope_!==e)return n;if(!a.modified_)return wo(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const t=a.copy_;let r=t,o=!1;a.type_===3&&(r=new Set(t),t.clear(),o=!0),ho(r,(s,c)=>Au(e,a,t,s,c,i,o)),wo(e,t,!1),i&&e.patches_&&Ji("Patches").generatePatches_(a,i,e.patches_,e.inversePatches_)}return a.copy_}function Au(e,n,i,a,t,r,o){if(Di(t)){const s=r&&n&&n.type_!==3&&!Hs(n.assigned_,a)?r.concat(a):void 0,c=vo(e,t,s);if(lm(i,a,c),Di(c))e.canAutoFreeze_=!1;else return}else o&&i.add(t);if(In(t)&&!Vo(t)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;vo(e,t),(!n||!n.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,a)&&wo(e,t)}}function wo(e,n,i=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Uc(n,i)}function lw(e,n){const i=Array.isArray(e),a={type_:i?1:0,scope_:n?n.scope_:sm(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let t=a,r=Qc;i&&(t=[a],r=Nt);const{revoke:o,proxy:s}=Proxy.revocable(t,r);return a.draft_=s,a.revoke_=o,s}var Qc={get(e,n){if(n===Ye)return e;const i=yi(e);if(!Hs(i,n))return sw(e,i,n);const a=i[n];return e.finalized_||!In(a)?a:a===Ll(e.base_,n)?(Kl(e),e.copy_[n]=_s(a,e)):a},has(e,n){return n in yi(e)},ownKeys(e){return Reflect.ownKeys(yi(e))},set(e,n,i){const a=cm(yi(e),n);if(a!=null&&a.set)return a.set.call(e.draft_,i),!0;if(!e.modified_){const t=Ll(yi(e),n),r=t==null?void 0:t[Ye];if(r&&r.base_===i)return e.copy_[n]=i,e.assigned_[n]=!1,!0;if(iw(i,t)&&(i!==void 0||Hs(e.base_,n)))return!0;Kl(e),Fs(e)}return e.copy_[n]===i&&(i!==void 0||n in e.copy_)||Number.isNaN(i)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=i,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Ll(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,Kl(e),Fs(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const i=yi(e),a=Reflect.getOwnPropertyDescriptor(i,n);return a&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:a.enumerable,value:i[n]}},defineProperty(){hn(11)},getPrototypeOf(e){return Ca(e.base_)},setPrototypeOf(){hn(12)}},Nt={};ho(Qc,(e,n)=>{Nt[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Nt.deleteProperty=function(e,n){return Nt.set.call(this,e,n,void 0)};Nt.set=function(e,n,i){return Qc.set.call(this,e[0],n,i,e[0])};function Ll(e,n){const i=e[Ye];return(i?yi(i):e)[n]}function sw(e,n,i){var t;const a=cm(n,i);return a?"value"in a?a.value:(t=a.get)==null?void 0:t.call(e.draft_):void 0}function cm(e,n){if(!(n in e))return;let i=Ca(e);for(;i;){const a=Object.getOwnPropertyDescriptor(i,n);if(a)return a;i=Ca(i)}}function Fs(e){e.modified_||(e.modified_=!0,e.parent_&&Fs(e.parent_))}function Kl(e){e.copy_||(e.copy_=Ds(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var cw=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,i,a)=>{if(typeof n=="function"&&typeof i!="function"){const r=i;i=n;const o=this;return function(c=r,...d){return o.produce(c,u=>i.call(this,u,...d))}}typeof i!="function"&&hn(6),a!==void 0&&typeof a!="function"&&hn(7);let t;if(In(n)){const r=Fu(this),o=_s(n,void 0);let s=!0;try{t=i(o),s=!1}finally{s?Js(r):zs(r)}return zu(r,a),_u(t,r)}else if(!n||typeof n!="object"){if(t=i(n),t===void 0&&(t=n),t===rm&&(t=void 0),this.autoFreeze_&&Uc(t,!0),a){const r=[],o=[];Ji("Patches").generateReplacementPatches_(n,t,r,o),a(r,o)}return t}else hn(1,n)},this.produceWithPatches=(n,i)=>{if(typeof n=="function")return(o,...s)=>this.produceWithPatches(o,c=>n(c,...s));let a,t;return[this.produce(n,i,(o,s)=>{a=o,t=s}),a,t]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){In(e)||hn(8),Di(e)&&(e=dw(e));const n=Fu(this),i=_s(e,void 0);return i[Ye].isManual_=!0,zs(n),i}finishDraft(e,n){const i=e&&e[Ye];(!i||!i.isManual_)&&hn(9);const{scope_:a}=i;return zu(a,n),_u(void 0,a)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let i;for(i=n.length-1;i>=0;i--){const t=n[i];if(t.path.length===0&&t.op==="replace"){e=t.value;break}}i>-1&&(n=n.slice(i+1));const a=Ji("Patches").applyPatches_;return Di(e)?a(e,n):this.produce(e,t=>a(t,n))}};function _s(e,n){const i=Bo(e)?Ji("MapSet").proxyMap_(e,n):Io(e)?Ji("MapSet").proxySet_(e,n):lw(e,n);return(n?n.scope_:sm()).drafts_.push(i),i}function dw(e){return Di(e)||hn(10,e),dm(e)}function dm(e){if(!In(e)||Vo(e))return e;const n=e[Ye];let i;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,i=Ds(e,n.scope_.immer_.useStrictShallowCopy_)}else i=Ds(e,!0);return ho(i,(a,t)=>{lm(i,a,dm(t))}),n&&(n.finalized_=!1),i}var Ge=new cw,um=Ge.produce;Ge.produceWithPatches.bind(Ge);Ge.setAutoFreeze.bind(Ge);Ge.setUseStrictShallowCopy.bind(Ge);Ge.applyPatches.bind(Ge);Ge.createDraft.bind(Ge);Ge.finishDraft.bind(Ge);function gm(e){return({dispatch:i,getState:a})=>t=>r=>typeof r=="function"?r(i,a,e):t(r)}var uw=gm(),gw=gm,pw=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?mo:mo.apply(null,arguments)};function Bu(e,n){function i(...a){if(n){let t=n(...a);if(!t)throw new Error(jn(0));return{type:e,payload:t.payload,..."meta"in t&&{meta:t.meta},..."error"in t&&{error:t.error}}}return{type:e,payload:a[0]}}return i.toString=()=>`${e}`,i.type=e,i.match=a=>ew(a)&&a.type===e,i}var pm=class Xa extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Xa.prototype)}static get[Symbol.species](){return Xa}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Xa(...n[0].concat(this)):new Xa(...n.concat(this))}};function Iu(e){return In(e)?um(e,()=>{}):e}function Vu(e,n,i){if(e.has(n)){let t=e.get(n);return i.update&&(t=i.update(t,n,e),e.set(n,t)),t}if(!i.insert)throw new Error(jn(10));const a=i.insert(n,e);return e.set(n,a),a}function fw(e){return typeof e=="boolean"}var mw=()=>function(n){const{thunk:i=!0,immutableCheck:a=!0,serializableCheck:t=!0,actionCreatorCheck:r=!0}=n??{};let o=new pm;return i&&(fw(i)?o.push(uw):o.push(gw(i.extraArgument))),o},hw="RTK_autoBatch",fm=e=>n=>{setTimeout(n,e)},vw=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:fm(10),ww=(e={type:"raf"})=>n=>(...i)=>{const a=n(...i);let t=!0,r=!1,o=!1;const s=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?vw:e.type==="callback"?e.queueNotification:fm(e.timeout),d=()=>{o=!1,r&&(r=!1,s.forEach(u=>u()))};return Object.assign({},a,{subscribe(u){const p=()=>t&&u(),h=a.subscribe(p);return s.add(u),()=>{h(),s.delete(u)}},dispatch(u){var p;try{return t=!((p=u==null?void 0:u.meta)!=null&&p[hw]),r=!t,r&&(o||(o=!0,c(d))),a.dispatch(u)}finally{t=!0}}})},Rw=e=>function(i){const{autoBatch:a=!0}=i??{};let t=new pm(e);return a&&t.push(ww(typeof a=="object"?a:void 0)),t};function jw(e){const n=mw(),{reducer:i=void 0,middleware:a,devTools:t=!0,preloadedState:r=void 0,enhancers:o=void 0}=e||{};let s;if(typeof i=="function")s=i;else if(Wc(i))s=G2(i);else throw new Error(jn(1));let c;typeof a=="function"?c=a(n):c=n();let d=mo;t&&(d=pw({trace:!1,...typeof t=="object"&&t}));const u=X2(...c),p=Rw(u);let h=typeof o=="function"?o(p):p();const g=d(...h);return tm(s,r,g)}function mm(e){const n={},i=[];let a;const t={addCase(r,o){const s=typeof r=="string"?r:r.type;if(!s)throw new Error(jn(28));if(s in n)throw new Error(jn(29));return n[s]=o,t},addMatcher(r,o){return i.push({matcher:r,reducer:o}),t},addDefaultCase(r){return a=r,t}};return e(t),[n,i,a]}function yw(e){return typeof e=="function"}function xw(e,n){let[i,a,t]=mm(n),r;if(yw(e))r=()=>Iu(e());else{const s=Iu(e);r=()=>s}function o(s=r(),c){let d=[i[c.type],...a.filter(({matcher:u})=>u(c)).map(({reducer:u})=>u)];return d.filter(u=>!!u).length===0&&(d=[t]),d.reduce((u,p)=>{if(p)if(Di(u)){const g=p(u,c);return g===void 0?u:g}else{if(In(u))return um(u,h=>p(h,c));{const h=p(u,c);if(h===void 0){if(u===null)return u;throw new Error(jn(9))}return h}}return u},s)}return o.getInitialState=r,o}var kw=Symbol.for("rtk-slice-createasyncthunk");function Pw(e,n){return`${e}/${n}`}function Cw({creators:e}={}){var i;const n=(i=e==null?void 0:e.asyncThunk)==null?void 0:i[kw];return function(t){const{name:r,reducerPath:o=r}=t;if(!r)throw new Error(jn(11));typeof process<"u";const s=(typeof t.reducers=="function"?t.reducers(Kw()):t.reducers)||{},c=Object.keys(s),d={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(f,R){const k=typeof f=="string"?f:f.type;if(!k)throw new Error(jn(12));if(k in d.sliceCaseReducersByType)throw new Error(jn(13));return d.sliceCaseReducersByType[k]=R,u},addMatcher(f,R){return d.sliceMatchers.push({matcher:f,reducer:R}),u},exposeAction(f,R){return d.actionCreators[f]=R,u},exposeCaseReducer(f,R){return d.sliceCaseReducersByName[f]=R,u}};c.forEach(f=>{const R=s[f],k={reducerName:f,type:Pw(r,f),createNotation:typeof t.reducers=="function"};Tw(R)?Sw(k,R,u,n):bw(k,R,u)});function p(){const[f={},R=[],k=void 0]=typeof t.extraReducers=="function"?mm(t.extraReducers):[t.extraReducers],C={...f,...d.sliceCaseReducersByType};return xw(t.initialState,L=>{for(let T in C)L.addCase(T,C[T]);for(let T of d.sliceMatchers)L.addMatcher(T.matcher,T.reducer);for(let T of R)L.addMatcher(T.matcher,T.reducer);k&&L.addDefaultCase(k)})}const h=f=>f,g=new Map;let w;function y(f,R){return w||(w=p()),w(f,R)}function x(){return w||(w=p()),w.getInitialState()}function v(f,R=!1){function k(L){let T=L[f];return typeof T>"u"&&R&&(T=x()),T}function C(L=h){const T=Vu(g,R,{insert:()=>new WeakMap});return Vu(T,L,{insert:()=>{const F={};for(const[D,q]of Object.entries(t.selectors??{}))F[D]=Lw(q,L,x,R);return F}})}return{reducerPath:f,getSelectors:C,get selectors(){return C(k)},selectSlice:k}}const m={name:r,reducer:y,actions:d.actionCreators,caseReducers:d.sliceCaseReducersByName,getInitialState:x,...v(o),injectInto(f,{reducerPath:R,...k}={}){const C=R??o;return f.inject({reducerPath:C,reducer:y},k),{...m,...v(C,!0)}}};return m}}function Lw(e,n,i,a){function t(r,...o){let s=n(r);return typeof s>"u"&&a&&(s=i()),e(s,...o)}return t.unwrapped=e,t}var Ii=Cw();function Kw(){function e(n,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...i}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...i){return n(...i)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:i}},asyncThunk:e}}function bw({type:e,reducerName:n,createNotation:i},a,t){let r,o;if("reducer"in a){if(i&&!$w(a))throw new Error(jn(17));r=a.reducer,o=a.prepare}else r=a;t.addCase(e,r).exposeCaseReducer(n,r).exposeAction(n,o?Bu(e,o):Bu(e))}function Tw(e){return e._reducerDefinitionType==="asyncThunk"}function $w(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Sw({type:e,reducerName:n},i,a,t){if(!t)throw new Error(jn(18));const{payloadCreator:r,fulfilled:o,pending:s,rejected:c,settled:d,options:u}=i,p=t(e,r,u);a.exposeAction(n,p),o&&a.addCase(p.fulfilled,o),s&&a.addCase(p.pending,s),c&&a.addCase(p.rejected,c),d&&a.addMatcher(p.settled,d),a.exposeCaseReducer(n,{fulfilled:o||gr,pending:s||gr,rejected:c||gr,settled:d||gr})}function gr(){}function jn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Nw=[{id:1,Kanji:"一",OnReading:["イチ","イツ"],KunReading:["ひと","ひと(つ)"],OnPrincipalReading:"イチ",KunPrincipalReading:"ひと(つ)",OnPrincipalReadingRomaji:"ichi",KunPrincipalReadingRomaji:"hito(tsu)",JLPTLevel:"N5",Meaning:"un",SecondaryMeaning:null},{id:2,Kanji:"二",OnReading:["ニ","ジ"],KunReading:["ふた","ふた(つ)"],OnPrincipalReading:"ニ",KunPrincipalReading:"ふた(つ)",OnPrincipalReadingRomaji:"ni",KunPrincipalReadingRomaji:"futa(tsu)",JLPTLevel:"N5",Meaning:"deux",SecondaryMeaning:null},{id:3,Kanji:"三",OnReading:["サン"],KunReading:["み","み(つ)"],OnPrincipalReading:"サン",KunPrincipalReading:"み(つ)",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"mi(tsu)",JLPTLevel:"N5",Meaning:"trois",SecondaryMeaning:null},{id:4,Kanji:"四",OnReading:["シ"],KunReading:["よん","よ","よ(つ)"],OnPrincipalReading:"シ",KunPrincipalReading:"よん",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"yon",JLPTLevel:"N5",Meaning:"quatre",SecondaryMeaning:null},{id:5,Kanji:"五",OnReading:["ゴ"],KunReading:["いつ","いつ(つ)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"いつ(つ)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"itsu(tsu)",JLPTLevel:"N5",Meaning:"cinq",SecondaryMeaning:null},{id:6,Kanji:"六",OnReading:["ロク"],KunReading:["む","む(つ)","むい"],OnPrincipalReading:"ロク",KunPrincipalReading:"む(つ)",OnPrincipalReadingRomaji:"roku",KunPrincipalReadingRomaji:"mu(tsu)",JLPTLevel:"N5",Meaning:"six",SecondaryMeaning:null},{id:7,Kanji:"七",OnReading:["シチ"],KunReading:["なな","なな(つ)","なの"],OnPrincipalReading:"シチ",KunPrincipalReading:"なな(つ)",OnPrincipalReadingRomaji:"shichi",KunPrincipalReadingRomaji:"nana(tsu)",JLPTLevel:"N5",Meaning:"sept",SecondaryMeaning:null},{id:8,Kanji:"八",OnReading:["ハチ"],KunReading:["や","や(つ)","よう"],OnPrincipalReading:"ハチ",KunPrincipalReading:"や(つ)",OnPrincipalReadingRomaji:"hachi",KunPrincipalReadingRomaji:"ya(tsu)",JLPTLevel:"N5",Meaning:"huit",SecondaryMeaning:null},{id:9,Kanji:"九",OnReading:["キュウ","ク"],KunReading:["ここの","ここの(つ)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"ここの(つ)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kokono(tsu)",JLPTLevel:"N5",Meaning:"neuf",SecondaryMeaning:null},{id:10,Kanji:"十",OnReading:["ジッ"],KunReading:["とお","と"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"とお",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"too",JLPTLevel:"N5",Meaning:"dix",SecondaryMeaning:null},{id:11,Kanji:"人",OnReading:["ジン","ニン"],KunReading:["ひと"],OnPrincipalReading:"ジン",KunPrincipalReading:"ひと",OnPrincipalReadingRomaji:"jin",KunPrincipalReadingRomaji:"hito",JLPTLevel:"N5",Meaning:"personne",SecondaryMeaning:"humain"},{id:12,Kanji:"今",OnReading:["コン","キン"],KunReading:["いま"],OnPrincipalReading:"コン",KunPrincipalReading:"いま",OnPrincipalReadingRomaji:"kon",KunPrincipalReadingRomaji:"ima",JLPTLevel:"N5",Meaning:"maintenant",SecondaryMeaning:null},{id:13,Kanji:"日",OnReading:["ニチ","ジツ"],KunReading:["ひ","か"],OnPrincipalReading:"ニチ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"nichi",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"jour",SecondaryMeaning:"soleil"},{id:14,Kanji:"週",OnReading:["シュウ"],KunReading:["-"],OnPrincipalReading:"シュウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:null,JLPTLevel:"N5",Meaning:"semaine",SecondaryMeaning:null},{id:15,Kanji:"月",OnReading:["ゲツ","ガツ"],KunReading:["つき"],OnPrincipalReading:"ゲツ",KunPrincipalReading:"つき",OnPrincipalReadingRomaji:"getsu",KunPrincipalReadingRomaji:"tsuki",JLPTLevel:"N5",Meaning:"mois",SecondaryMeaning:"lune"},{id:16,Kanji:"年",OnReading:["ネン"],KunReading:["とし"],OnPrincipalReading:"ネン",KunPrincipalReading:"とし",OnPrincipalReadingRomaji:"nen",KunPrincipalReadingRomaji:"toshi",JLPTLevel:"N5",Meaning:"année",SecondaryMeaning:null},{id:17,Kanji:"中",OnReading:["チュウ","ジュウ"],KunReading:["なか"],OnPrincipalReading:"チュウ",KunPrincipalReading:"なか",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"naka",JLPTLevel:"N5",Meaning:"milieu",SecondaryMeaning:"dedans"},{id:18,Kanji:"山",OnReading:["サン"],KunReading:["やま"],OnPrincipalReading:"サン",KunPrincipalReading:"やま",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"yama",JLPTLevel:"N5",Meaning:"montagne",SecondaryMeaning:null},{id:19,Kanji:"川",OnReading:["セン"],KunReading:["かわ"],OnPrincipalReading:"セン",KunPrincipalReading:"かわ",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"kawa",JLPTLevel:"N5",Meaning:"rivière",SecondaryMeaning:"fleuve"},{id:20,Kanji:"左",OnReading:["サ"],KunReading:["ひだり"],OnPrincipalReading:"サ",KunPrincipalReading:"ひだり",OnPrincipalReadingRomaji:"sa",KunPrincipalReadingRomaji:"hidari",JLPTLevel:"N5",Meaning:"gauche",SecondaryMeaning:null},{id:21,Kanji:"右",OnReading:["ウ","ユウ"],KunReading:["みぎ"],OnPrincipalReading:"ウ",KunPrincipalReading:"みぎ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"migi",JLPTLevel:"N5",Meaning:"droite",SecondaryMeaning:null},{id:22,Kanji:"大",OnReading:["ダイ","タイ"],KunReading:["おお","おお(きい)"],OnPrincipalReading:"ダイ",KunPrincipalReading:"おお(きい)",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"oo(kii)",JLPTLevel:"N5",Meaning:"grand",SecondaryMeaning:null},{id:23,Kanji:"木",OnReading:["モク","ボク"],KunReading:["き","こ"],OnPrincipalReading:"モク",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"arbre",SecondaryMeaning:"bois"},{id:24,Kanji:"本",OnReading:["ホン"],KunReading:["もと"],OnPrincipalReading:"ホン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"hon",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N5",Meaning:"livre",SecondaryMeaning:"origine"},{id:25,Kanji:"水",OnReading:["スイ"],KunReading:["みず"],OnPrincipalReading:"スイ",KunPrincipalReading:"みず",OnPrincipalReadingRomaji:"sui",KunPrincipalReadingRomaji:"mizu",JLPTLevel:"N5",Meaning:"eau",SecondaryMeaning:null},{id:26,Kanji:"火",OnReading:["カ"],KunReading:["ひ"],OnPrincipalReading:"カ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"feu",SecondaryMeaning:null},{id:27,Kanji:"父",OnReading:["フ"],KunReading:["ちち"],OnPrincipalReading:"フ",KunPrincipalReading:"ちち",OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:"chichi",JLPTLevel:"N5",Meaning:"père",SecondaryMeaning:null},{id:28,Kanji:"母",OnReading:["ボ"],KunReading:["はは"],OnPrincipalReading:"ボ",KunPrincipalReading:"はは",OnPrincipalReadingRomaji:"bo",KunPrincipalReadingRomaji:"haha",JLPTLevel:"N5",Meaning:"mère",SecondaryMeaning:null},{id:29,Kanji:"耳",OnReading:["ジ"],KunReading:["みみ"],OnPrincipalReading:"ジ",KunPrincipalReading:"みみ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mimi",JLPTLevel:"N5",Meaning:"oreille",SecondaryMeaning:null},{id:30,Kanji:"口",OnReading:["コウ","ク"],KunReading:["くち"],OnPrincipalReading:"コウ",KunPrincipalReading:"くち",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kuchi",JLPTLevel:"N5",Meaning:"bouche",SecondaryMeaning:"entrée"},{id:31,Kanji:"休",OnReading:["キュウ"],KunReading:["やす(む)","やす(める)","やす(まる)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"やす(む)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"yasu(mu)",JLPTLevel:"N5",Meaning:"se reposer",SecondaryMeaning:"pause"},{id:32,Kanji:"何",OnReading:["カ"],KunReading:["なに","なん"],OnPrincipalReading:"カ",KunPrincipalReading:"なに",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"nani",JLPTLevel:"N5",Meaning:"quoi",SecondaryMeaning:"que"},{id:33,Kanji:"入",OnReading:["ニュウ"],KunReading:["い(る)","い(れる)","はい(る)"],OnPrincipalReading:"ニュウ",KunPrincipalReading:"はい(る)",OnPrincipalReadingRomaji:"nyuu",KunPrincipalReadingRomaji:"hai(ru)",JLPTLevel:"N5",Meaning:"entrer",SecondaryMeaning:"insérer"},{id:34,Kanji:"上",OnReading:["ジョウ","ショウ"],KunReading:["うえ","あ(げる)","あ(がる)","のぼ(る)"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"うえ",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ue",JLPTLevel:"N5",Meaning:"au-dessus",SecondaryMeaning:"haut"},{id:35,Kanji:"前",OnReading:["ゼン"],KunReading:["まえ"],OnPrincipalReading:"ゼン",KunPrincipalReading:"まえ",OnPrincipalReadingRomaji:"zen",KunPrincipalReadingRomaji:"mae",JLPTLevel:"N5",Meaning:"devant",SecondaryMeaning:"avant"},{id:36,Kanji:"下",OnReading:["カ","ゲ"],KunReading:["した","さ(げる)","さ(がる)","くだ(る)","お(ろす)","お(りる)"],OnPrincipalReading:"カ",KunPrincipalReading:"した",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"shita",JLPTLevel:"N5",Meaning:"en-dessous",SecondaryMeaning:"bas"},{id:37,Kanji:"千",OnReading:["セン"],KunReading:["ち"],OnPrincipalReading:"セン",KunPrincipalReading:"ち",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"chi",JLPTLevel:"N5",Meaning:"mille",SecondaryMeaning:null},{id:38,Kanji:"午",OnReading:["ゴ"],KunReading:["うま"],OnPrincipalReading:"ゴ",KunPrincipalReading:"うま",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"uma",JLPTLevel:"N5",Meaning:"midi",SecondaryMeaning:null},{id:39,Kanji:"友",OnReading:["ユウ"],KunReading:["とも"],OnPrincipalReading:"ユウ",KunPrincipalReading:"とも",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"tomo",JLPTLevel:"N5",Meaning:"ami",SecondaryMeaning:null},{id:40,Kanji:"古",OnReading:["コ"],KunReading:["ふる(い)"],OnPrincipalReading:"コ",KunPrincipalReading:"ふる(い)",OnPrincipalReadingRomaji:"ko",KunPrincipalReadingRomaji:"furui",JLPTLevel:"N5",Meaning:"ancien",SecondaryMeaning:"vieux"},{id:41,Kanji:"名",OnReading:["メイ","ミョウ"],KunReading:["な"],OnPrincipalReading:"メイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"na",JLPTLevel:"N5",Meaning:"nom",SecondaryMeaning:"prénom"},{id:42,Kanji:"国",OnReading:["コク"],KunReading:["くに"],OnPrincipalReading:"コク",KunPrincipalReading:"くに",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuni",JLPTLevel:"N5",Meaning:"pays",SecondaryMeaning:"nation"},{id:43,Kanji:"外",OnReading:["ガイ","ゲ"],KunReading:["そと","ほか"],OnPrincipalReading:"ガイ",KunPrincipalReading:"そと",OnPrincipalReadingRomaji:"gai",KunPrincipalReadingRomaji:"soto",JLPTLevel:"N5",Meaning:"extérieur",SecondaryMeaning:"autre"},{id:44,Kanji:"女",OnReading:["ジョ","ニョ","ニョウ"],KunReading:["おんな","め"],OnPrincipalReading:"ジョ",KunPrincipalReading:"おんな",OnPrincipalReadingRomaji:"jo",KunPrincipalReadingRomaji:"onna",JLPTLevel:"N5",Meaning:"femme",SecondaryMeaning:"féminin"},{id:45,Kanji:"男",OnReading:["ダン","ナン"],KunReading:["おとこ"],OnPrincipalReading:"ダン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"dan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N5",Meaning:"homme",SecondaryMeaning:"masculin"},{id:46,Kanji:"子",OnReading:["シ","ス","ツ"],KunReading:["こ","お"],OnPrincipalReading:"シ",KunPrincipalReading:"こ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ko",JLPTLevel:"N5",Meaning:"enfant",SecondaryMeaning:"fils"},{id:47,Kanji:"学",OnReading:["ガク"],KunReading:["まな(ぶ)"],OnPrincipalReading:"ガク",KunPrincipalReading:"まな(ぶ)",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"manabu",JLPTLevel:"N5",Meaning:"étudier",SecondaryMeaning:"apprentissage"},{id:48,Kanji:"生",OnReading:["セイ","ショウ"],KunReading:["い(きる)","う(まれる)","お(う)","なま"],OnPrincipalReading:"セイ",KunPrincipalReading:"い(きる)",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"iki(ru)",JLPTLevel:"N5",Meaning:"vie",SecondaryMeaning:"naissance"},{id:49,Kanji:"小",OnReading:["ショウ"],KunReading:["ちい(さい)","こ"],OnPrincipalReading:"ショウ",KunPrincipalReading:"ちい(さい)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"chi(i)",JLPTLevel:"N5",Meaning:"petit",SecondaryMeaning:"minuscule"},{id:50,Kanji:"書",OnReading:["ショ"],KunReading:["か(く)"],OnPrincipalReading:"ショ",KunPrincipalReading:"か(く)",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"kaku",JLPTLevel:"N5",Meaning:"écrire",SecondaryMeaning:"livre"},{id:51,Kanji:"毎",OnReading:["マイ"],KunReading:["ごと"],OnPrincipalReading:"マイ",KunPrincipalReading:"ごと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"goto",JLPTLevel:"N5",Meaning:"chaque",SecondaryMeaning:"tous"},{id:52,Kanji:"先",OnReading:["セン"],KunReading:["さき","ま(ず)"],OnPrincipalReading:"セン",KunPrincipalReading:"さき",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"saki",JLPTLevel:"N5",Meaning:"avant",SecondaryMeaning:"précédent"},{id:53,Kanji:"会",OnReading:["カイ","エ"],KunReading:["あ(う)"],OnPrincipalReading:"カイ",KunPrincipalReading:"あ(う)",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"au",JLPTLevel:"N5",Meaning:"rencontre",SecondaryMeaning:"association"},{id:54,Kanji:"万",OnReading:["マン","バン"],KunReading:["よろず"],OnPrincipalReading:"マン",KunPrincipalReading:"よろず",OnPrincipalReadingRomaji:"man",KunPrincipalReadingRomaji:"yorozu",JLPTLevel:"N5",Meaning:"dix mille",SecondaryMeaning:"innombrable"},{id:55,Kanji:"円",OnReading:["エン"],KunReading:["まる"],OnPrincipalReading:"エン",KunPrincipalReading:"まる",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"maru",JLPTLevel:"N5",Meaning:"yen",SecondaryMeaning:"rond"},{id:56,Kanji:"出",OnReading:["シュツ","スイ"],KunReading:["で(る)","だ(す)"],OnPrincipalReading:"シュツ",KunPrincipalReading:"で(る)",OnPrincipalReadingRomaji:"shutsu",KunPrincipalReadingRomaji:"de(ru)",JLPTLevel:"N5",Meaning:"sortir",SecondaryMeaning:"émettre"},{id:57,Kanji:"分",OnReading:["ブン","フン","ブ"],KunReading:["わ(ける)","わ(かる)","ぶん"],OnPrincipalReading:"ブン",KunPrincipalReading:"わ(ける)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"wake(ru)",JLPTLevel:"N5",Meaning:"minute",SecondaryMeaning:"partie"},{id:58,Kanji:"北",OnReading:["ホク"],KunReading:["きた"],OnPrincipalReading:"ホク",KunPrincipalReading:"きた",OnPrincipalReadingRomaji:"hoku",KunPrincipalReadingRomaji:"kita",JLPTLevel:"N5",Meaning:"nord",SecondaryMeaning:null},{id:59,Kanji:"半",OnReading:["ハン"],KunReading:["なか(ば)"],OnPrincipalReading:"ハン",KunPrincipalReading:"なか(ば)",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"naka(ba)",JLPTLevel:"N5",Meaning:"moitié",SecondaryMeaning:null},{id:60,Kanji:"南",OnReading:["ナン","なん"],KunReading:["みなみ"],OnPrincipalReading:"ナン",KunPrincipalReading:"みなみ",OnPrincipalReadingRomaji:"nan",KunPrincipalReadingRomaji:"minami",JLPTLevel:"N5",Meaning:"sud",SecondaryMeaning:null},{id:61,Kanji:"土",OnReading:["ド","ト"],KunReading:["つち"],OnPrincipalReading:"ド",KunPrincipalReading:"つち",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tsuchi",JLPTLevel:"N5",Meaning:"terre",SecondaryMeaning:"sol"},{id:62,Kanji:"多",OnReading:["タ"],KunReading:["おお(い)"],OnPrincipalReading:"タ",KunPrincipalReading:"おお(い)",OnPrincipalReadingRomaji:"ta",KunPrincipalReadingRomaji:"oo(i)",JLPTLevel:"N5",Meaning:"beaucoup",SecondaryMeaning:"plus"},{id:63,Kanji:"天",OnReading:["テン"],KunReading:["あま","あめ"],OnPrincipalReading:"テン",KunPrincipalReading:"あま",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"ama",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"paradis"},{id:64,Kanji:"安",OnReading:["アン"],KunReading:["やす(い)"],OnPrincipalReading:"アン",KunPrincipalReading:"やす(い)",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"yasu(i)",JLPTLevel:"N5",Meaning:"bon marché",SecondaryMeaning:"sécurisé"},{id:65,Kanji:"少",OnReading:["ショウ"],KunReading:["すく(ない)","すこ(し)"],OnPrincipalReading:"ショウ",KunPrincipalReading:"すく(ない)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"suku(nai)",JLPTLevel:"N5",Meaning:"peu",SecondaryMeaning:"moins"},{id:66,Kanji:"店",OnReading:["テン"],KunReading:["みせ","たな"],OnPrincipalReading:"テン",KunPrincipalReading:"みせ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"mise",JLPTLevel:"N5",Meaning:"magasin",SecondaryMeaning:"boutique"},{id:67,Kanji:"後",OnReading:["ゴ","コウ"],KunReading:["あと","うし(ろ)","のち"],OnPrincipalReading:"ゴ",KunPrincipalReading:"あと",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"ato",JLPTLevel:"N5",Meaning:"après",SecondaryMeaning:"derrière"},{id:68,Kanji:"手",OnReading:["シュ"],KunReading:["て","た"],OnPrincipalReading:"シュ",KunPrincipalReading:"て",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"te",JLPTLevel:"N5",Meaning:"main",SecondaryMeaning:"métier"},{id:69,Kanji:"新",OnReading:["シン"],KunReading:["あたら(しい)","あら(た)"],OnPrincipalReading:"シン",KunPrincipalReading:"あたら(しい)",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"atarashii",JLPTLevel:"N5",Meaning:"nouveau",SecondaryMeaning:"récent"},{id:70,Kanji:"時",OnReading:["ジ"],KunReading:["とき","と"],OnPrincipalReading:"ジ",KunPrincipalReading:"とき",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"toki",JLPTLevel:"N5",Meaning:"temps",SecondaryMeaning:"heure"},{id:71,Kanji:"来",OnReading:["ライ","くる"],KunReading:["くる","きたる"],OnPrincipalReading:"ライ",KunPrincipalReading:"くる",OnPrincipalReadingRomaji:"rai",KunPrincipalReadingRomaji:"kuru",JLPTLevel:"N5",Meaning:"venir",SecondaryMeaning:"arriver"},{id:72,Kanji:"東",OnReading:["トウ"],KunReading:["ひがし"],OnPrincipalReading:"トウ",KunPrincipalReading:"ひがし",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"higashi",JLPTLevel:"N5",Meaning:"est",SecondaryMeaning:"orient"},{id:73,Kanji:"校",OnReading:["コウ"],KunReading:["こう"],OnPrincipalReading:"コウ",KunPrincipalReading:"こう",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kou",JLPTLevel:"N5",Meaning:"école",SecondaryMeaning:"institution"},{id:74,Kanji:"気",OnReading:["キ"],KunReading:["き"],OnPrincipalReading:"キ",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"esprit",SecondaryMeaning:"atmosphère"},{id:75,Kanji:"白",OnReading:["ハク","ビャク"],KunReading:["しろ","しろ(い)"],OnPrincipalReading:"ハク",KunPrincipalReading:"しろ",OnPrincipalReadingRomaji:"haku",KunPrincipalReadingRomaji:"shiro",JLPTLevel:"N5",Meaning:"blanc",SecondaryMeaning:null},{id:76,Kanji:"百",OnReading:["ヒャク","ビャク"],KunReading:["もも"],OnPrincipalReading:"ヒャク",KunPrincipalReading:"もも",OnPrincipalReadingRomaji:"hyaku",KunPrincipalReadingRomaji:"momo",JLPTLevel:"N5",Meaning:"cent",SecondaryMeaning:"nombre"},{id:77,Kanji:"目",OnReading:["モク","ボク"],KunReading:["め","ま"],OnPrincipalReading:"モク",KunPrincipalReading:"め",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"me",JLPTLevel:"N5",Meaning:"œil",SecondaryMeaning:"but"},{id:78,Kanji:"社",OnReading:["シャ"],KunReading:["やしろ"],OnPrincipalReading:"シャ",KunPrincipalReading:"やしろ",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"yashiro",JLPTLevel:"N5",Meaning:"société",SecondaryMeaning:"temple"},{id:79,Kanji:"空",OnReading:["クウ"],KunReading:["そら","あ(ける)","あ(く)"],OnPrincipalReading:"クウ",KunPrincipalReading:"そら",OnPrincipalReadingRomaji:"kuu",KunPrincipalReadingRomaji:"sora",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"vide"},{id:80,Kanji:"立",OnReading:["リツ","リュウ"],KunReading:["た(つ)","たて(る)"],OnPrincipalReading:"リツ",KunPrincipalReading:"た(つ)",OnPrincipalReadingRomaji:"ritsu",KunPrincipalReadingRomaji:"ta(tsu)",JLPTLevel:"N5",Meaning:"se lever",SecondaryMeaning:"établir"},{id:81,Kanji:"聞",OnReading:["ブン","モン"],KunReading:["き(く)","きこ(える)"],OnPrincipalReading:"ブン",KunPrincipalReading:"き(く)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"kiku",JLPTLevel:"N5",Meaning:"écouter",SecondaryMeaning:"entendre"},{id:82,Kanji:"花",OnReading:["カ"],KunReading:["はな"],OnPrincipalReading:"カ",KunPrincipalReading:"はな",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hana",JLPTLevel:"N5",Meaning:"fleur",SecondaryMeaning:null},{id:83,Kanji:"行",OnReading:["コウ","ギョウ"],KunReading:["い(く)","ゆ(く)","おこな(う)"],OnPrincipalReading:"コウ",KunPrincipalReading:"い(く)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"iku",JLPTLevel:"N5",Meaning:"aller",SecondaryMeaning:"ligne"},{id:84,Kanji:"西",OnReading:["セイ","サイ"],KunReading:["にし"],OnPrincipalReading:"セイ",KunPrincipalReading:"にし",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"nishi",JLPTLevel:"N5",Meaning:"ouest",SecondaryMeaning:null},{id:85,Kanji:"見",OnReading:["ケン"],KunReading:["み(る)","み(える)","み(せる)"],OnPrincipalReading:"ケン",KunPrincipalReading:"み(る)",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"miru",JLPTLevel:"N5",Meaning:"voir",SecondaryMeaning:"regarder"},{id:86,Kanji:"言",OnReading:["ゲン","ゴン"],KunReading:["い(う)","こと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"い(う)",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"iu",JLPTLevel:"N5",Meaning:"dire",SecondaryMeaning:"mot"},{id:87,Kanji:"話",OnReading:["ワ"],KunReading:["はな(す)","はなし"],OnPrincipalReading:"ワ",KunPrincipalReading:"はな(す)",OnPrincipalReadingRomaji:"wa",KunPrincipalReadingRomaji:"hanasu",JLPTLevel:"N5",Meaning:"parler",SecondaryMeaning:"conversation"},{id:88,Kanji:"語",OnReading:["ゴ"],KunReading:["かた(る)","かた(らう)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"かた(る)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"kataru",JLPTLevel:"N5",Meaning:"langue",SecondaryMeaning:"parler"},{id:89,Kanji:"読",OnReading:["ドク","トク","トウ"],KunReading:["よ(む)"],OnPrincipalReading:"ドク",KunPrincipalReading:"よ(む)",OnPrincipalReadingRomaji:"doku",KunPrincipalReadingRomaji:"yomu",JLPTLevel:"N5",Meaning:"lire",SecondaryMeaning:"lecture"},{id:90,Kanji:"買",OnReading:["バイ"],KunReading:["か(う)"],OnPrincipalReading:"バイ",KunPrincipalReading:"か(う)",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"kau",JLPTLevel:"N5",Meaning:"acheter",SecondaryMeaning:null},{id:91,Kanji:"足",OnReading:["ソク"],KunReading:["あし","た(りる)","た(す)"],OnPrincipalReading:"ソク",KunPrincipalReading:"あし",OnPrincipalReadingRomaji:"soku",KunPrincipalReadingRomaji:"ashi",JLPTLevel:"N5",Meaning:"pied",SecondaryMeaning:"suffisance"},{id:92,Kanji:"車",OnReading:["シャ"],KunReading:["くるま"],OnPrincipalReading:"シャ",KunPrincipalReading:"くるま",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"kuruma",JLPTLevel:"N5",Meaning:"voiture",SecondaryMeaning:"véhicule"},{id:93,Kanji:"道",OnReading:["ドウ"],KunReading:["みち"],OnPrincipalReading:"ドウ",KunPrincipalReading:"みち",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"michi",JLPTLevel:"N5",Meaning:"route",SecondaryMeaning:"voie"},{id:94,Kanji:"金",OnReading:["キン","コン"],KunReading:["かね","かな"],OnPrincipalReading:"キン",KunPrincipalReading:"かね",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"kane",JLPTLevel:"N5",Meaning:"argent",SecondaryMeaning:"métal"},{id:95,Kanji:"長",OnReading:["チョウ"],KunReading:["なが(い)"],OnPrincipalReading:"チョウ",KunPrincipalReading:"なが(い)",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"nagai",JLPTLevel:"N5",Meaning:"long",SecondaryMeaning:"chef"},{id:96,Kanji:"間",OnReading:["カン","ケン"],KunReading:["あいだ","ま"],OnPrincipalReading:"カン",KunPrincipalReading:"あいだ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"aida",JLPTLevel:"N5",Meaning:"intervalle",SecondaryMeaning:"espace"},{id:97,Kanji:"雨",OnReading:["ウ"],KunReading:["あめ","あま"],OnPrincipalReading:"ウ",KunPrincipalReading:"あめ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"ame",JLPTLevel:"N5",Meaning:"pluie",SecondaryMeaning:null},{id:98,Kanji:"電",OnReading:["デン"],KunReading:["いなづま"],OnPrincipalReading:"デン",KunPrincipalReading:"いなづま",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"inazuma",JLPTLevel:"N5",Meaning:"électricité",SecondaryMeaning:"éclair"},{id:99,Kanji:"食",OnReading:["ショク","ジキ"],KunReading:["た(べる)","く(う)"],OnPrincipalReading:"ショク",KunPrincipalReading:"た(べる)",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"taberu",JLPTLevel:"N5",Meaning:"manger",SecondaryMeaning:"nourriture"},{id:100,Kanji:"飲",OnReading:["イン"],KunReading:["の(む)","の(みもの)"],OnPrincipalReading:"イン",KunPrincipalReading:"の(む)",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"nomu",JLPTLevel:"N5",Meaning:"boire",SecondaryMeaning:"boisson"},{id:101,Kanji:"駅",OnReading:["エキ"],KunReading:["いき"],OnPrincipalReading:"エキ",KunPrincipalReading:"いき",OnPrincipalReadingRomaji:"eki",KunPrincipalReadingRomaji:"iki",JLPTLevel:"N5",Meaning:"gare",SecondaryMeaning:"station"},{id:102,Kanji:"高",OnReading:["コウ"],KunReading:["たか(い)","たか"],OnPrincipalReading:"コウ",KunPrincipalReading:"たか(い)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"takai",JLPTLevel:"N5",Meaning:"haut",SecondaryMeaning:"cher"},{id:103,Kanji:"魚",OnReading:["ギョ"],KunReading:["さかな","うお"],OnPrincipalReading:"ギョ",KunPrincipalReading:"さかな",OnPrincipalReadingRomaji:"gyo",KunPrincipalReadingRomaji:"sakana",JLPTLevel:"N5",Meaning:"poisson",SecondaryMeaning:null},{id:104,Kanji:"力",OnReading:["リョク","リキ"],KunReading:["ちから"],OnPrincipalReading:"リョク",KunPrincipalReading:"ちから",OnPrincipalReadingRomaji:"ryoku",KunPrincipalReadingRomaji:"chikara",JLPTLevel:"N4",Meaning:"force",SecondaryMeaning:null},{id:105,Kanji:"夕",OnReading:["セキ"],KunReading:["ゆう"],OnPrincipalReading:"セキ",KunPrincipalReading:"ゆう",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"yuu",JLPTLevel:"N4",Meaning:"soir",SecondaryMeaning:null},{id:106,Kanji:"工",OnReading:["コウ","ク"],KunReading:[],OnPrincipalReading:"コウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:107,Kanji:"元",OnReading:["ゲン","ガン"],KunReading:["もと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N4",Meaning:"origine",SecondaryMeaning:"base"},{id:108,Kanji:"止",OnReading:["シ"],KunReading:["とまる","とめる"],OnPrincipalReading:"シ",KunPrincipalReading:"とまる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tomaru",JLPTLevel:"N4",Meaning:"arrêter",SecondaryMeaning:"cesser"},{id:109,Kanji:"引",OnReading:["イン"],KunReading:["ひく","ひける"],OnPrincipalReading:"イン",KunPrincipalReading:"ひく",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"hiku",JLPTLevel:"N4",Meaning:"tirer",SecondaryMeaning:null},{id:110,Kanji:"牛",OnReading:["ギュウ"],KunReading:["うし"],OnPrincipalReading:"ギュウ",KunPrincipalReading:"うし",OnPrincipalReadingRomaji:"gyuu",KunPrincipalReadingRomaji:"ushi",JLPTLevel:"N4",Meaning:"vache",SecondaryMeaning:"bétail"},{id:111,Kanji:"区",OnReading:["ク"],KunReading:[],OnPrincipalReading:"ク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"quartier",SecondaryMeaning:"secteur"},{id:112,Kanji:"犬",OnReading:["ケン"],KunReading:["いぬ"],OnPrincipalReading:"ケン",KunPrincipalReading:"いぬ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"inu",JLPTLevel:"N4",Meaning:"chien",SecondaryMeaning:null},{id:113,Kanji:"不",OnReading:["フ","ブ"],KunReading:[],OnPrincipalReading:"フ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"non",SecondaryMeaning:"in-"},{id:114,Kanji:"文",OnReading:["ブン","モン"],KunReading:[],OnPrincipalReading:"ブン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"écriture",SecondaryMeaning:"texte"},{id:115,Kanji:"方",OnReading:["ホウ"],KunReading:["かた","がた"],OnPrincipalReading:"ホウ",KunPrincipalReading:"かた",OnPrincipalReadingRomaji:"hou",KunPrincipalReadingRomaji:"kata",JLPTLevel:"N4",Meaning:"direction",SecondaryMeaning:"personne"},{id:116,Kanji:"心",OnReading:["シン"],KunReading:["こころ"],OnPrincipalReading:"シン",KunPrincipalReading:"こころ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"kokoro",JLPTLevel:"N4",Meaning:"cœur",SecondaryMeaning:"esprit"},{id:117,Kanji:"切",OnReading:["セツ","サイ"],KunReading:["きる","きれる"],OnPrincipalReading:"セツ",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"couper",SecondaryMeaning:null},{id:118,Kanji:"太",OnReading:["タイ","タ"],KunReading:["ふとい","ふとる"],OnPrincipalReading:"タイ",KunPrincipalReading:"ふとい",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"futoi",JLPTLevel:"N4",Meaning:"gros",SecondaryMeaning:"épais"},{id:119,Kanji:"代",OnReading:["ダイ","タイ"],KunReading:["かわる","かわり","かえる"],OnPrincipalReading:"ダイ",KunPrincipalReading:"かわる",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"kawaru",JLPTLevel:"N4",Meaning:"remplacement",SecondaryMeaning:"génération"},{id:120,Kanji:"台",OnReading:["ダイ","タイ"],KunReading:[],OnPrincipalReading:"ダイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"socle",SecondaryMeaning:"plateforme"},{id:121,Kanji:"世",OnReading:["セ","セイ"],KunReading:["よ"],OnPrincipalReading:"セ",KunPrincipalReading:"よ",OnPrincipalReadingRomaji:"se",KunPrincipalReadingRomaji:"yo",JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"ère"},{id:122,Kanji:"正",OnReading:["セイ","ショウ"],KunReading:["ただしい","ただす","まさ"],OnPrincipalReading:"セイ",KunPrincipalReading:"ただしい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"tadashii",JLPTLevel:"N4",Meaning:"correct",SecondaryMeaning:"juste"},{id:123,Kanji:"田",OnReading:["デン"],KunReading:["た"],OnPrincipalReading:"デン",KunPrincipalReading:"た",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"ta",JLPTLevel:"N4",Meaning:"rizière",SecondaryMeaning:null},{id:124,Kanji:"冬",OnReading:["トウ"],KunReading:["ふゆ"],OnPrincipalReading:"トウ",KunPrincipalReading:"ふゆ",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"fuyu",JLPTLevel:"N4",Meaning:"hiver",SecondaryMeaning:null},{id:125,Kanji:"民",OnReading:["ミン"],KunReading:["たみ"],OnPrincipalReading:"ミン",KunPrincipalReading:"たみ",OnPrincipalReadingRomaji:"min",KunPrincipalReadingRomaji:"tami",JLPTLevel:"N4",Meaning:"peuple",SecondaryMeaning:"nation"},{id:126,Kanji:"用",OnReading:["ヨウ"],KunReading:["もちいる"],OnPrincipalReading:"ヨウ",KunPrincipalReading:"もちいる",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"mochiiru",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"usage"},{id:127,Kanji:"兄",OnReading:["ケイ","キョウ"],KunReading:["あに"],OnPrincipalReading:"ケイ",KunPrincipalReading:"あに",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"ani",JLPTLevel:"N4",Meaning:"grand frère",SecondaryMeaning:null},{id:128,Kanji:"以",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"à partir de",SecondaryMeaning:null},{id:129,Kanji:"去",OnReading:["キョ","コ"],KunReading:["さる"],OnPrincipalReading:"キョ",KunPrincipalReading:"さる",OnPrincipalReadingRomaji:"kyo",KunPrincipalReadingRomaji:"saru",JLPTLevel:"N4",Meaning:"quitter",SecondaryMeaning:"partir"},{id:130,Kanji:"仕",OnReading:["シ"],KunReading:["つかえる"],OnPrincipalReading:"シ",KunPrincipalReading:"つかえる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukaeru",JLPTLevel:"N4",Meaning:"servir",SecondaryMeaning:"faire"},{id:131,Kanji:"市",OnReading:["シ"],KunReading:["いち"],OnPrincipalReading:"シ",KunPrincipalReading:"いち",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ichi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"marché"},{id:132,Kanji:"広",OnReading:["コウ"],KunReading:["ひろい","ひろまる","ひろめる","ひろがる","ひろげる"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひろい",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hiroi",JLPTLevel:"N4",Meaning:"large",SecondaryMeaning:"étendu"},{id:133,Kanji:"主",OnReading:["シュ","ス"],KunReading:["ぬし","おも"],OnPrincipalReading:"シュ",KunPrincipalReading:"ぬし",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"nushi",JLPTLevel:"N4",Meaning:"maître",SecondaryMeaning:"principal"},{id:134,Kanji:"写",OnReading:["シャ"],KunReading:["うつす","うつる"],OnPrincipalReading:"シャ",KunPrincipalReading:"うつす",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"utsusu",JLPTLevel:"N4",Meaning:"copier",SecondaryMeaning:"projeter"},{id:135,Kanji:"字",OnReading:["ジ"],KunReading:[],OnPrincipalReading:"ジ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"caractère",SecondaryMeaning:"lettre"},{id:136,Kanji:"自",OnReading:["ジ","シ"],KunReading:["みずから"],OnPrincipalReading:"ジ",KunPrincipalReading:"みずから",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mizukara",JLPTLevel:"N4",Meaning:"soi-même",SecondaryMeaning:null},{id:137,Kanji:"考",OnReading:["コウ"],KunReading:["かんがえる"],OnPrincipalReading:"コウ",KunPrincipalReading:"かんがえる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kangaeru",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:null},{id:138,Kanji:"合",OnReading:["ゴウ","ガッ","カッ"],KunReading:["あう","あわす","あわせる"],OnPrincipalReading:"ゴウ",KunPrincipalReading:"あう",OnPrincipalReadingRomaji:"gou",KunPrincipalReadingRomaji:"au",JLPTLevel:"N4",Meaning:"assembler",SecondaryMeaning:"correspondre"},{id:139,Kanji:"光",OnReading:["コウ"],KunReading:["ひかる","ひかり"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひかる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hikaru",JLPTLevel:"N4",Meaning:"lumière",SecondaryMeaning:"briller"},{id:140,Kanji:"好",OnReading:["コウ"],KunReading:["すき","このむ"],OnPrincipalReading:"コウ",KunPrincipalReading:"すき",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"suki",JLPTLevel:"N4",Meaning:"aimer",SecondaryMeaning:"préférence"},{id:141,Kanji:"死",OnReading:["シ"],KunReading:["しぬ"],OnPrincipalReading:"シ",KunPrincipalReading:"しぬ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"shinu",JLPTLevel:"N4",Meaning:"mort",SecondaryMeaning:"mourir"},{id:142,Kanji:"回",OnReading:["カイ","エ"],KunReading:["まわる","まわす"],OnPrincipalReading:"カイ",KunPrincipalReading:"まわる",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"mawaru",JLPTLevel:"N4",Meaning:"tourner",SecondaryMeaning:"nombre de fois"},{id:143,Kanji:"有",OnReading:["ユウ","ウ"],KunReading:["ある"],OnPrincipalReading:"ユウ",KunPrincipalReading:"ある",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"aru",JLPTLevel:"N4",Meaning:"avoir",SecondaryMeaning:"exister"},{id:144,Kanji:"同",OnReading:["ドウ"],KunReading:["おなじ"],OnPrincipalReading:"ドウ",KunPrincipalReading:"おなじ",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"onaji",JLPTLevel:"N4",Meaning:"même",SecondaryMeaning:"identique"},{id:145,Kanji:"肉",OnReading:["ニク"],KunReading:[],OnPrincipalReading:"ニク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"niku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"viande",SecondaryMeaning:null},{id:146,Kanji:"色",OnReading:["ショク","シキ"],KunReading:["いろ"],OnPrincipalReading:"ショク",KunPrincipalReading:"いろ",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"iro",JLPTLevel:"N4",Meaning:"couleur",SecondaryMeaning:"apparence"},{id:147,Kanji:"早",OnReading:["ソウ","サッ"],KunReading:["はやい","はやまる","はやめる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はやい",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hayai",JLPTLevel:"N4",Meaning:"tôt",SecondaryMeaning:"rapide"},{id:148,Kanji:"地",OnReading:["チ","ジ"],KunReading:[],OnPrincipalReading:"チ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"terre",SecondaryMeaning:"sol"},{id:149,Kanji:"池",OnReading:["チ"],KunReading:["いけ"],OnPrincipalReading:"チ",KunPrincipalReading:"いけ",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"ike",JLPTLevel:"N4",Meaning:"étang",SecondaryMeaning:null},{id:150,Kanji:"村",OnReading:["ソン"],KunReading:["むら"],OnPrincipalReading:"ソン",KunPrincipalReading:"むら",OnPrincipalReadingRomaji:"son",KunPrincipalReadingRomaji:"mura",JLPTLevel:"N4",Meaning:"village",SecondaryMeaning:null},{id:151,Kanji:"体",OnReading:["タイ","テイ"],KunReading:["からだ"],OnPrincipalReading:"タイ",KunPrincipalReading:"からだ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"karada",JLPTLevel:"N4",Meaning:"corps",SecondaryMeaning:"structure"},{id:152,Kanji:"町",OnReading:["チョウ"],KunReading:["まち"],OnPrincipalReading:"チョウ",KunPrincipalReading:"まち",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"machi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"quartier"},{id:153,Kanji:"低",OnReading:["テイ"],KunReading:["ひくい","ひくめる","ひくまる"],OnPrincipalReading:"テイ",KunPrincipalReading:"ひくい",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"hikui",JLPTLevel:"N4",Meaning:"bas",SecondaryMeaning:"faible"},{id:154,Kanji:"弟",OnReading:["テイ","ダイ","デ"],KunReading:["おとうと"],OnPrincipalReading:"テイ",KunPrincipalReading:"おとうと",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"otouto",JLPTLevel:"N4",Meaning:"petit frère",SecondaryMeaning:null},{id:155,Kanji:"走",OnReading:["ソウ"],KunReading:["はしる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はしる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hashiru",JLPTLevel:"N4",Meaning:"courir",SecondaryMeaning:null},{id:156,Kanji:"赤",OnReading:["セキ","シャク"],KunReading:["あか","あかい","あからむ","あからめる"],OnPrincipalReading:"セキ",KunPrincipalReading:"あか",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"aka",JLPTLevel:"N4",Meaning:"rouge",SecondaryMeaning:"cramoisi"},{id:157,Kanji:"図",OnReading:["ズ","ト"],KunReading:["はかる"],OnPrincipalReading:"ズ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"zu",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"plan",SecondaryMeaning:"carte"},{id:158,Kanji:"究",OnReading:["キュウ"],KunReading:["きわめる"],OnPrincipalReading:"キュウ",KunPrincipalReading:"きわめる",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kiwameru",JLPTLevel:"N4",Meaning:"rechercher",SecondaryMeaning:"examiner"},{id:159,Kanji:"声",OnReading:["セイ","ショウ"],KunReading:["こえ","こわ"],OnPrincipalReading:"セイ",KunPrincipalReading:"こえ",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"koe",JLPTLevel:"N4",Meaning:"voix",SecondaryMeaning:"son"},{id:160,Kanji:"売",OnReading:["バイ"],KunReading:["うる","うれる"],OnPrincipalReading:"バイ",KunPrincipalReading:"うる",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"uru",JLPTLevel:"N4",Meaning:"vendre",SecondaryMeaning:"marcher (commerce)"},{id:161,Kanji:"別",OnReading:["ベツ"],KunReading:["わかれる","わける"],OnPrincipalReading:"ベツ",KunPrincipalReading:"わかれる",OnPrincipalReadingRomaji:"betsu",KunPrincipalReadingRomaji:"wakareru",JLPTLevel:"N4",Meaning:"séparer",SecondaryMeaning:"distinct"},{id:162,Kanji:"医",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"médecine",SecondaryMeaning:"soigner"},{id:163,Kanji:"近",OnReading:["キン"],KunReading:["ちかい"],OnPrincipalReading:"キン",KunPrincipalReading:"ちかい",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"chikai",JLPTLevel:"N4",Meaning:"proche",SecondaryMeaning:"près"},{id:164,Kanji:"私",OnReading:["シ"],KunReading:["わたし","わたくし"],OnPrincipalReading:"シ",KunPrincipalReading:"わたし",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"watashi",JLPTLevel:"N4",Meaning:"je",SecondaryMeaning:"moi"},{id:165,Kanji:"作",OnReading:["サク","サ"],KunReading:["つくる"],OnPrincipalReading:"サク",KunPrincipalReading:"つくる",OnPrincipalReadingRomaji:"saku",KunPrincipalReadingRomaji:"tsukuru",JLPTLevel:"N4",Meaning:"faire",SecondaryMeaning:"créer"},{id:166,Kanji:"住",OnReading:["ジュウ"],KunReading:["すむ","すまう"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"すむ",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"sumu",JLPTLevel:"N4",Meaning:"habiter",SecondaryMeaning:"vivre"},{id:167,Kanji:"者",OnReading:["シャ"],KunReading:["もの"],OnPrincipalReading:"シャ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"personne",SecondaryMeaning:"individu"},{id:168,Kanji:"事",OnReading:["ジ"],KunReading:["こと"],OnPrincipalReading:"ジ",KunPrincipalReading:"こと",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"koto",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"affaire"},{id:169,Kanji:"使",OnReading:["シ"],KunReading:["つかう"],OnPrincipalReading:"シ",KunPrincipalReading:"つかう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukau",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"employer"},{id:170,Kanji:"始",OnReading:["シ"],KunReading:["はじめる","はじまる"],OnPrincipalReading:"シ",KunPrincipalReading:"はじめる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"hajimeru",JLPTLevel:"N4",Meaning:"commencer",SecondaryMeaning:"débuter"},{id:171,Kanji:"姉",OnReading:["シ"],KunReading:["あね"],OnPrincipalReading:"シ",KunPrincipalReading:"あね",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ane",JLPTLevel:"N4",Meaning:"grande sœur",SecondaryMeaning:null},{id:172,Kanji:"英",OnReading:["エイ"],KunReading:[],OnPrincipalReading:"エイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"Angleterre",SecondaryMeaning:"héroïque"},{id:173,Kanji:"京",OnReading:["キョウ","ケイ"],KunReading:[],OnPrincipalReading:"キョウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"Kyoto"},{id:174,Kanji:"画",OnReading:["ガ","カク"],KunReading:[],OnPrincipalReading:"ガ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ga",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"dessin",SecondaryMeaning:"trait"},{id:175,Kanji:"妹",OnReading:["マイ"],KunReading:["いもうと"],OnPrincipalReading:"マイ",KunPrincipalReading:"いもうと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"imouto",JLPTLevel:"N4",Meaning:"petite sœur",SecondaryMeaning:null},{id:176,Kanji:"味",OnReading:["ミ"],KunReading:["あじ","あじわう"],OnPrincipalReading:"ミ",KunPrincipalReading:"あじ",OnPrincipalReadingRomaji:"mi",KunPrincipalReadingRomaji:"aji",JLPTLevel:"N4",Meaning:"goût",SecondaryMeaning:"saveur"},{id:177,Kanji:"服",OnReading:["フク"],KunReading:[],OnPrincipalReading:"フク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fuku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"vêtements",SecondaryMeaning:null},{id:178,Kanji:"物",OnReading:["ブツ","モツ"],KunReading:["もの"],OnPrincipalReading:"ブツ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"butsu",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"objet"},{id:179,Kanji:"歩",OnReading:["ホ","ブ","フ"],KunReading:["あるく","あゆむ"],OnPrincipalReading:"ホ",KunPrincipalReading:"あるく",OnPrincipalReadingRomaji:"ho",KunPrincipalReadingRomaji:"aruku",JLPTLevel:"N4",Meaning:"marcher",SecondaryMeaning:"pas"},{id:180,Kanji:"門",OnReading:["モン"],KunReading:["かど"],OnPrincipalReading:"モン",KunPrincipalReading:"かど",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"kado",JLPTLevel:"N4",Meaning:"porte",SecondaryMeaning:"portail"},{id:181,Kanji:"夜",OnReading:["ヤ"],KunReading:["よ","よる"],OnPrincipalReading:"ヤ",KunPrincipalReading:"よる",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"yoru",JLPTLevel:"N4",Meaning:"nuit",SecondaryMeaning:null},{id:182,Kanji:"明",OnReading:["メイ","ミョウ"],KunReading:["あかるい","あける"],OnPrincipalReading:"メイ",KunPrincipalReading:"あかるい",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"akarui",JLPTLevel:"N4",Meaning:"clair",SecondaryMeaning:"lumineux"},{id:183,Kanji:"林",OnReading:["リン"],KunReading:["はやし"],OnPrincipalReading:"リン",KunPrincipalReading:"はやし",OnPrincipalReadingRomaji:"rin",KunPrincipalReadingRomaji:"hayashi",JLPTLevel:"N4",Meaning:"bois",SecondaryMeaning:"forêt"},{id:184,Kanji:"青",OnReading:["セイ","ショウ"],KunReading:["あお","あおい"],OnPrincipalReading:"セイ",KunPrincipalReading:"あおい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"aoi",JLPTLevel:"N4",Meaning:"bleu",SecondaryMeaning:"vert"},{id:185,Kanji:"所",OnReading:["ショ"],KunReading:["ところ"],OnPrincipalReading:"ショ",KunPrincipalReading:"ところ",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"tokoro",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"endroit"},{id:186,Kanji:"注",OnReading:["チュウ"],KunReading:["そそぐ"],OnPrincipalReading:"チュウ",KunPrincipalReading:"そそぐ",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"sosogu",JLPTLevel:"N4",Meaning:"verser",SecondaryMeaning:"concentrer"},{id:187,Kanji:"知",OnReading:["チ"],KunReading:["しる"],OnPrincipalReading:"チ",KunPrincipalReading:"しる",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"shiru",JLPTLevel:"N4",Meaning:"savoir",SecondaryMeaning:"connaître"},{id:188,Kanji:"昼",OnReading:["チュウ"],KunReading:["ひる"],OnPrincipalReading:"チュウ",KunPrincipalReading:"ひる",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"hiru",JLPTLevel:"N4",Meaning:"midi",SecondaryMeaning:"jour"},{id:189,Kanji:"茶",OnReading:["チャ","サ"],KunReading:[],OnPrincipalReading:"チャ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"cha",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"thé",SecondaryMeaning:null},{id:190,Kanji:"待",OnReading:["タイ"],KunReading:["まつ"],OnPrincipalReading:"タイ",KunPrincipalReading:"まつ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"matsu",JLPTLevel:"N4",Meaning:"attendre",SecondaryMeaning:null},{id:191,Kanji:"洗",OnReading:["セン"],KunReading:["あらう"],OnPrincipalReading:"セン",KunPrincipalReading:"あらう",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"arau",JLPTLevel:"N4",Meaning:"laver",SecondaryMeaning:null},{id:192,Kanji:"送",OnReading:["ソウ"],KunReading:["おくる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"おくる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"okuru",JLPTLevel:"N4",Meaning:"envoyer",SecondaryMeaning:null},{id:193,Kanji:"品",OnReading:["ヒン"],KunReading:["しな"],OnPrincipalReading:"ヒン",KunPrincipalReading:"しな",OnPrincipalReadingRomaji:"hin",KunPrincipalReadingRomaji:"shina",JLPTLevel:"N4",Meaning:"produit",SecondaryMeaning:"article"},{id:194,Kanji:"洋",OnReading:["ヨウ"],KunReading:[],OnPrincipalReading:"ヨウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"océan",SecondaryMeaning:"occidental"},{id:195,Kanji:"便",OnReading:["ベン","ビン"],KunReading:["たより"],OnPrincipalReading:"ベン",KunPrincipalReading:"たより",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tayori",JLPTLevel:"N4",Meaning:"commodité",SecondaryMeaning:"courrier"},{id:196,Kanji:"風",OnReading:["フウ","フ"],KunReading:["かぜ"],OnPrincipalReading:"フウ",KunPrincipalReading:"かぜ",OnPrincipalReadingRomaji:"fuu",KunPrincipalReadingRomaji:"kaze",JLPTLevel:"N4",Meaning:"vent",SecondaryMeaning:"style"},{id:197,Kanji:"発",OnReading:["ハツ","ホツ"],KunReading:[],OnPrincipalReading:"ハツ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"hatsu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"départ",SecondaryMeaning:"émission"},{id:198,Kanji:"度",OnReading:["ド","ト","タク"],KunReading:["たび"],OnPrincipalReading:"ド",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"degré",SecondaryMeaning:"fois"},{id:199,Kanji:"映",OnReading:["エイ"],KunReading:["うつる","うつす"],OnPrincipalReading:"エイ",KunPrincipalReading:"うつる",OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:"utsuru",JLPTLevel:"N4",Meaning:"projeter",SecondaryMeaning:"reflet"},{id:200,Kanji:"海",OnReading:["カイ"],KunReading:["うみ"],OnPrincipalReading:"カイ",KunPrincipalReading:"うみ",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"umi",JLPTLevel:"N4",Meaning:"mer",SecondaryMeaning:null},{id:201,Kanji:"界",OnReading:["カイ"],KunReading:[],OnPrincipalReading:"カイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"limite"},{id:202,Kanji:"屋",OnReading:["オク"],KunReading:["や"],OnPrincipalReading:"オク",KunPrincipalReading:"や",OnPrincipalReadingRomaji:"oku",KunPrincipalReadingRomaji:"ya",JLPTLevel:"N4",Meaning:"toit",SecondaryMeaning:"boutique"},{id:203,Kanji:"音",OnReading:["オン","イン"],KunReading:["おと","ね"],OnPrincipalReading:"オン",KunPrincipalReading:"おと",OnPrincipalReadingRomaji:"on",KunPrincipalReadingRomaji:"oto",JLPTLevel:"N4",Meaning:"son",SecondaryMeaning:null},{id:204,Kanji:"急",OnReading:["キュウ"],KunReading:["いそぐ"],OnPrincipalReading:"キュウ",KunPrincipalReading:"いそぐ",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"isogu",JLPTLevel:"N4",Meaning:"urgence",SecondaryMeaning:"rapide"},{id:205,Kanji:"計",OnReading:["ケイ"],KunReading:["はかる"],OnPrincipalReading:"ケイ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"compter",SecondaryMeaning:"mesurer"},{id:206,Kanji:"建",OnReading:["ケン","コン"],KunReading:["たてる","たつ"],OnPrincipalReading:"ケン",KunPrincipalReading:"たてる",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tateru",JLPTLevel:"N4",Meaning:"construire",SecondaryMeaning:null},{id:207,Kanji:"研",OnReading:["ケン"],KunReading:["とぐ"],OnPrincipalReading:"ケン",KunPrincipalReading:"とぐ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"togu",JLPTLevel:"N4",Meaning:"aiguiser",SecondaryMeaning:"étudier"},{id:208,Kanji:"県",OnReading:["ケン"],KunReading:[],OnPrincipalReading:"ケン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"préfecture",SecondaryMeaning:null},{id:209,Kanji:"思",OnReading:["シ"],KunReading:["おもう"],OnPrincipalReading:"シ",KunPrincipalReading:"おもう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"omou",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:"croire"},{id:210,Kanji:"乗",OnReading:["ジョウ"],KunReading:["のる","のせる"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"のる",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"noru",JLPTLevel:"N4",Meaning:"monter",SecondaryMeaning:"embarquer"},{id:211,Kanji:"重",OnReading:["ジュウ","チョウ"],KunReading:["おもい","かさなる","かさねる"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"おもい",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"omoi",JLPTLevel:"N4",Meaning:"lourd",SecondaryMeaning:"empiler"},{id:212,Kanji:"春",OnReading:["シュン"],KunReading:["はる"],OnPrincipalReading:"シュン",KunPrincipalReading:"はる",OnPrincipalReadingRomaji:"shun",KunPrincipalReadingRomaji:"haru",JLPTLevel:"N4",Meaning:"printemps",SecondaryMeaning:null},{id:213,Kanji:"室",OnReading:["シツ"],KunReading:["むろ"],OnPrincipalReading:"シツ",KunPrincipalReading:"むろ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"muro",JLPTLevel:"N4",Meaning:"pièce",SecondaryMeaning:"chambre"},{id:214,Kanji:"持",OnReading:["ジ"],KunReading:["もつ"],OnPrincipalReading:"ジ",KunPrincipalReading:"もつ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"motsu",JLPTLevel:"N4",Meaning:"tenir",SecondaryMeaning:"posséder"},{id:215,Kanji:"首",OnReading:["シュ"],KunReading:["くび"],OnPrincipalReading:"シュ",KunPrincipalReading:"くび",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"kubi",JLPTLevel:"N4",Meaning:"cou",SecondaryMeaning:"chef"},{id:216,Kanji:"秋",OnReading:["シュウ"],KunReading:["あき"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あき",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"aki",JLPTLevel:"N4",Meaning:"automne",SecondaryMeaning:null},{id:217,Kanji:"借",OnReading:["シャク"],KunReading:["かりる"],OnPrincipalReading:"シャク",KunPrincipalReading:"かりる",OnPrincipalReadingRomaji:"shaku",KunPrincipalReadingRomaji:"kariru",JLPTLevel:"N4",Meaning:"emprunter",SecondaryMeaning:null},{id:218,Kanji:"弱",OnReading:["ジャク"],KunReading:["よわい","よわる"],OnPrincipalReading:"ジャク",KunPrincipalReading:"よわい",OnPrincipalReadingRomaji:"jaku",KunPrincipalReadingRomaji:"yowai",JLPTLevel:"N4",Meaning:"faible",SecondaryMeaning:null},{id:219,Kanji:"紙",OnReading:["シ"],KunReading:["かみ"],OnPrincipalReading:"シ",KunPrincipalReading:"かみ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kami",JLPTLevel:"N4",Meaning:"papier",SecondaryMeaning:null},{id:220,Kanji:"帰",OnReading:["キ"],KunReading:["かえる","かえす"],OnPrincipalReading:"キ",KunPrincipalReading:"かえる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"kaeru",JLPTLevel:"N4",Meaning:"retourner",SecondaryMeaning:"rentrer"},{id:221,Kanji:"起",OnReading:["キ"],KunReading:["おきる","おこす"],OnPrincipalReading:"キ",KunPrincipalReading:"おきる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"okiru",JLPTLevel:"N4",Meaning:"se lever",SecondaryMeaning:"commencer"},{id:222,Kanji:"夏",OnReading:["カ"],KunReading:["なつ"],OnPrincipalReading:"カ",KunPrincipalReading:"なつ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"natsu",JLPTLevel:"N4",Meaning:"été",SecondaryMeaning:null},{id:223,Kanji:"家",OnReading:["カ","ケ"],KunReading:["いえ","や"],OnPrincipalReading:"カ",KunPrincipalReading:"いえ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"ie",JLPTLevel:"N4",Meaning:"maison",SecondaryMeaning:"famille"},{id:224,Kanji:"院",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"institut",SecondaryMeaning:"hôpital"},{id:225,Kanji:"員",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"membre",SecondaryMeaning:"employé"},{id:226,Kanji:"病",OnReading:["ビョウ","ヘイ"],KunReading:["やむ","いたむ"],OnPrincipalReading:"ビョウ",KunPrincipalReading:"やむ",OnPrincipalReadingRomaji:"byou",KunPrincipalReadingRomaji:"yamu",JLPTLevel:"N4",Meaning:"maladie",SecondaryMeaning:"être malade"},{id:227,Kanji:"勉",OnReading:["ベン"],KunReading:["つとめる"],OnPrincipalReading:"ベン",KunPrincipalReading:"つとめる",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tsutomeru",JLPTLevel:"N4",Meaning:"effort",SecondaryMeaning:"étudier"},{id:228,Kanji:"特",OnReading:["トク"],KunReading:[],OnPrincipalReading:"トク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"toku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"spécial",SecondaryMeaning:"particulier"},{id:229,Kanji:"旅",OnReading:["リョ"],KunReading:["たび"],OnPrincipalReading:"リョ",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"ryo",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"voyage",SecondaryMeaning:null},{id:230,Kanji:"料",OnReading:["リョウ"],KunReading:["はかる"],OnPrincipalReading:"リョウ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"ryou",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"coût",SecondaryMeaning:"ingrédient"},{id:231,Kanji:"真",OnReading:["シン"],KunReading:["ま","まこと"],OnPrincipalReading:"シン",KunPrincipalReading:"ま",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"ma",JLPTLevel:"N4",Meaning:"vrai",SecondaryMeaning:"vérité"},{id:232,Kanji:"通",OnReading:["ツウ"],KunReading:["とおる","とおす"],OnPrincipalReading:"ツウ",KunPrincipalReading:"とおる",OnPrincipalReadingRomaji:"tsuu",KunPrincipalReadingRomaji:"tooru",JLPTLevel:"N4",Meaning:"passer",SecondaryMeaning:"communication"},{id:233,Kanji:"鳥",OnReading:["チョウ"],KunReading:["とり"],OnPrincipalReading:"チョウ",KunPrincipalReading:"とり",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"tori",JLPTLevel:"N4",Meaning:"oiseau",SecondaryMeaning:null},{id:234,Kanji:"転",OnReading:["テン"],KunReading:["ころぶ","ころがる"],OnPrincipalReading:"テン",KunPrincipalReading:"ころぶ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"korobu",JLPTLevel:"N4",Meaning:"rouler",SecondaryMeaning:"changer"},{id:235,Kanji:"族",OnReading:["ゾク"],KunReading:["ぞく"],OnPrincipalReading:"ゾク",KunPrincipalReading:"ぞく",OnPrincipalReadingRomaji:"zoku",KunPrincipalReadingRomaji:"zoku",JLPTLevel:"N4",Meaning:"famille",SecondaryMeaning:"tribu"},{id:236,Kanji:"進",OnReading:["シン"],KunReading:["すすむ","すすめる"],OnPrincipalReading:"シン",KunPrincipalReading:"すすむ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"susumu",JLPTLevel:"N4",Meaning:"avancer",SecondaryMeaning:"progresser"},{id:237,Kanji:"理",OnReading:["リ"],KunReading:["ことわり"],OnPrincipalReading:"リ",KunPrincipalReading:"ことわり",OnPrincipalReadingRomaji:"ri",KunPrincipalReadingRomaji:"kotowari",JLPTLevel:"N4",Meaning:"logique",SecondaryMeaning:"raison"},{id:238,Kanji:"野",OnReading:["ヤ","ショ"],KunReading:["の"],OnPrincipalReading:"ヤ",KunPrincipalReading:"の",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"no",JLPTLevel:"N4",Meaning:"champ",SecondaryMeaning:"nature"},{id:239,Kanji:"問",OnReading:["モン"],KunReading:["とい","といあわせる"],OnPrincipalReading:"モン",KunPrincipalReading:"とい",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"toi",JLPTLevel:"N4",Meaning:"question",SecondaryMeaning:"demander"},{id:240,Kanji:"都",OnReading:["ト","ツ"],KunReading:["みやこ"],OnPrincipalReading:"ト",KunPrincipalReading:"みやこ",OnPrincipalReadingRomaji:"to",KunPrincipalReadingRomaji:"miyako",JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"métropole"},{id:241,Kanji:"堂",OnReading:["ドウ"],KunReading:["どう"],OnPrincipalReading:"ドウ",KunPrincipalReading:"どう",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"dou",JLPTLevel:"N4",Meaning:"hall",SecondaryMeaning:"temple"},{id:242,Kanji:"動",OnReading:["ドウ"],KunReading:["うごく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"うごく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"ugoku",JLPTLevel:"N4",Meaning:"mouvement",SecondaryMeaning:"agir"},{id:243,Kanji:"悪",OnReading:["アク","オ"],KunReading:["わるい"],OnPrincipalReading:"アク",KunPrincipalReading:"わるい",OnPrincipalReadingRomaji:"aku",KunPrincipalReadingRomaji:"warui",JLPTLevel:"N4",Meaning:"mauvais",SecondaryMeaning:"mal"},{id:244,Kanji:"強",OnReading:["キョウ","ゴウ"],KunReading:["つよい","しなう"],OnPrincipalReading:"キョウ",KunPrincipalReading:"つよい",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"tsuyoi",JLPTLevel:"N4",Meaning:"fort",SecondaryMeaning:"intense"},{id:245,Kanji:"教",OnReading:["キョウ","オシ"],KunReading:["おしえる","おそわる"],OnPrincipalReading:"キョウ",KunPrincipalReading:"おしえる",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"oshieru",JLPTLevel:"N4",Meaning:"enseigner",SecondaryMeaning:"religion"},{id:246,Kanji:"産",OnReading:["サン"],KunReading:["うむ","うまれる"],OnPrincipalReading:"サン",KunPrincipalReading:"うむ",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"umu",JLPTLevel:"N4",Meaning:"production",SecondaryMeaning:"naissance"},{id:247,Kanji:"黒",OnReading:["コク"],KunReading:["くろ","くろい"],OnPrincipalReading:"コク",KunPrincipalReading:"くろ",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuro",JLPTLevel:"N4",Meaning:"noir",SecondaryMeaning:null},{id:248,Kanji:"菜",OnReading:["サイ"],KunReading:["な"],OnPrincipalReading:"サイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"sai",KunPrincipalReadingRomaji:"na",JLPTLevel:"N4",Meaning:"légume",SecondaryMeaning:"verdure"},{id:249,Kanji:"終",OnReading:["シュウ"],KunReading:["おわる","おえる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"おわる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"owaru",JLPTLevel:"N4",Meaning:"fin",SecondaryMeaning:"terminer"},{id:250,Kanji:"習",OnReading:["シュウ"],KunReading:["ならう"],OnPrincipalReading:"シュウ",KunPrincipalReading:"ならう",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"narau",JLPTLevel:"N4",Meaning:"apprendre",SecondaryMeaning:"pratiquer"},{id:251,Kanji:"集",OnReading:["シュウ"],KunReading:["あつまる","あつめる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あつまる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"atsumaru",JLPTLevel:"N4",Meaning:"rassembler",SecondaryMeaning:"collection"},{id:252,Kanji:"場",OnReading:["ジョウ"],KunReading:["ば"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"ば",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ba",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"emplacement"},{id:253,Kanji:"寒",OnReading:["カン"],KunReading:["さむい"],OnPrincipalReading:"カン",KunPrincipalReading:"さむい",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"samui",JLPTLevel:"N4",Meaning:"froid",SecondaryMeaning:null},{id:254,Kanji:"軽",OnReading:["ケイ"],KunReading:["かるい","けい"],OnPrincipalReading:"ケイ",KunPrincipalReading:"かるい",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"karui",JLPTLevel:"N4",Meaning:"léger",SecondaryMeaning:"facile"},{id:255,Kanji:"運",OnReading:["ウン"],KunReading:["はこぶ"],OnPrincipalReading:"ウン",KunPrincipalReading:"はこぶ",OnPrincipalReadingRomaji:"un",KunPrincipalReadingRomaji:"hakobu",JLPTLevel:"N4",Meaning:"chance",SecondaryMeaning:"transport"},{id:256,Kanji:"開",OnReading:["カイ"],KunReading:["ひらく","あける"],OnPrincipalReading:"カイ",KunPrincipalReading:"ひらく",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"hiraku",JLPTLevel:"N4",Meaning:"ouvrir",SecondaryMeaning:"développer"},{id:257,Kanji:"飯",OnReading:["ハン"],KunReading:["めし"],OnPrincipalReading:"ハン",KunPrincipalReading:"めし",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"meshi",JLPTLevel:"N4",Meaning:"riz cuit",SecondaryMeaning:"repas"},{id:258,Kanji:"答",OnReading:["トウ"],KunReading:["こたえる","こたえ"],OnPrincipalReading:"トウ",KunPrincipalReading:"こたえる",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"kotaeru",JLPTLevel:"N4",Meaning:"réponse",SecondaryMeaning:"répondre"},{id:259,Kanji:"森",OnReading:["シン"],KunReading:["もり"],OnPrincipalReading:"シン",KunPrincipalReading:"もり",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"mori",JLPTLevel:"N4",Meaning:"forêt",SecondaryMeaning:null},{id:260,Kanji:"朝",OnReading:["チョウ"],KunReading:["あさ"],OnPrincipalReading:"チョウ",KunPrincipalReading:"あさ",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"asa",JLPTLevel:"N4",Meaning:"matin",SecondaryMeaning:"petit-déjeuner"},{id:261,Kanji:"貸",OnReading:["タイ"],KunReading:["かす"],OnPrincipalReading:"タイ",KunPrincipalReading:"かす",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"kasu",JLPTLevel:"N4",Meaning:"prêter",SecondaryMeaning:null},{id:262,Kanji:"着",OnReading:["チャク","ジャク"],KunReading:["きる","つく"],OnPrincipalReading:"チャク",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"chaku",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"arriver",SecondaryMeaning:"mettre (vêtement)"},{id:263,Kanji:"短",OnReading:["タン"],KunReading:["みじかい"],OnPrincipalReading:"タン",KunPrincipalReading:"みじかい",OnPrincipalReadingRomaji:"tan",KunPrincipalReadingRomaji:"mijikai",JLPTLevel:"N4",Meaning:"court",SecondaryMeaning:"durée courte"},{id:264,Kanji:"働",OnReading:["ドウ"],KunReading:["はたらく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"はたらく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"hataraku",JLPTLevel:"N4",Meaning:"travailler",SecondaryMeaning:null},{id:265,Kanji:"楽",OnReading:["ガク","ラク"],KunReading:["たのしい","らく"],OnPrincipalReading:"ガク",KunPrincipalReading:"たのしい",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"tanoshii",JLPTLevel:"N4",Meaning:"amusant",SecondaryMeaning:"musique"},{id:266,Kanji:"暗",OnReading:["アン"],KunReading:["くらい"],OnPrincipalReading:"アン",KunPrincipalReading:"くらい",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"kurai",JLPTLevel:"N4",Meaning:"sombre",SecondaryMeaning:"obscurité"},{id:267,Kanji:"意",OnReading:["イ"],KunReading:["い"],OnPrincipalReading:"イ",KunPrincipalReading:"い",OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:"i",JLPTLevel:"N4",Meaning:"intention",SecondaryMeaning:"pensée"},{id:268,Kanji:"遠",OnReading:["エン"],KunReading:["とおい"],OnPrincipalReading:"エン",KunPrincipalReading:"とおい",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"tooi",JLPTLevel:"N4",Meaning:"loin",SecondaryMeaning:"éloigné"},{id:269,Kanji:"漢",OnReading:["カン"],KunReading:["おとこ"],OnPrincipalReading:"カン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N4",Meaning:"chinois",SecondaryMeaning:"Hanzi"},{id:270,Kanji:"業",OnReading:["ギョウ","ゴウ"],KunReading:["わざ"],OnPrincipalReading:"ギョウ",KunPrincipalReading:"わざ",OnPrincipalReadingRomaji:"gyou",KunPrincipalReadingRomaji:"waza",JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:271,Kanji:"試",OnReading:["シ"],KunReading:["こころみる","ためす"],OnPrincipalReading:"シ",KunPrincipalReading:"こころみる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kokoromiru",JLPTLevel:"N4",Meaning:"essayer",SecondaryMeaning:"test"},{id:272,Kanji:"銀",OnReading:["ギン"],KunReading:["しろがね"],OnPrincipalReading:"ギン",KunPrincipalReading:"しろがね",OnPrincipalReadingRomaji:"gin",KunPrincipalReadingRomaji:"shirogane",JLPTLevel:"N4",Meaning:"argent",SecondaryMeaning:null},{id:273,Kanji:"歌",OnReading:["カ"],KunReading:["うた"],OnPrincipalReading:"カ",KunPrincipalReading:"うた",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"uta",JLPTLevel:"N4",Meaning:"chanson",SecondaryMeaning:"chanter"},{id:274,Kanji:"説",OnReading:["セツ","ゼイ"],KunReading:["とく"],OnPrincipalReading:"セツ",KunPrincipalReading:"とく",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"toku",JLPTLevel:"N4",Meaning:"explication",SecondaryMeaning:"théorie"},{id:275,Kanji:"質",OnReading:["シツ","シチ"],KunReading:["しつ"],OnPrincipalReading:"シツ",KunPrincipalReading:"しつ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"shitsu",JLPTLevel:"N4",Meaning:"qualité",SecondaryMeaning:"matière"},{id:276,Kanji:"館",OnReading:["カン"],KunReading:["やかた"],OnPrincipalReading:"カン",KunPrincipalReading:"やかた",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"yakata",JLPTLevel:"N4",Meaning:"bâtiment",SecondaryMeaning:"musée"},{id:277,Kanji:"親",OnReading:["シン"],KunReading:["おや","したしい"],OnPrincipalReading:"シン",KunPrincipalReading:"おや",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"oya",JLPTLevel:"N4",Meaning:"parent",SecondaryMeaning:"intime"},{id:278,Kanji:"頭",OnReading:["トウ"],KunReading:["あたま"],OnPrincipalReading:"トウ",KunPrincipalReading:"あたま",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"atama",JLPTLevel:"N4",Meaning:"tête",SecondaryMeaning:"cerveau"},{id:279,Kanji:"薬",OnReading:["ヤク","クスリ"],KunReading:["くすり"],OnPrincipalReading:"ヤク",KunPrincipalReading:"くすり",OnPrincipalReadingRomaji:"yaku",KunPrincipalReadingRomaji:"kusuri",JLPTLevel:"N4",Meaning:"médicament",SecondaryMeaning:"drogue"},{id:280,Kanji:"曜",OnReading:["ヨウ"],KunReading:[""],OnPrincipalReading:"ヨウ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"jour de la semaine",SecondaryMeaning:null},{id:281,Kanji:"題",OnReading:["ダイ"],KunReading:[""],OnPrincipalReading:"ダイ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"sujet",SecondaryMeaning:"titre"},{id:282,Kanji:"顔",OnReading:["ガン"],KunReading:["かお"],OnPrincipalReading:"ガン",KunPrincipalReading:"かお",OnPrincipalReadingRomaji:"gan",KunPrincipalReadingRomaji:"kao",JLPTLevel:"N4",Meaning:"visage",SecondaryMeaning:"expression"},{id:283,Kanji:"験",OnReading:["ケン","ゲン"],KunReading:["ためす","けん"],OnPrincipalReading:"ケン",KunPrincipalReading:"ためす",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tamesu",JLPTLevel:"N4",Meaning:"expérience",SecondaryMeaning:"test"},{id:284,Kanji:"暑",OnReading:["ショ"],KunReading:["あつい"],OnPrincipalReading:"ショ",KunPrincipalReading:"あつい",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"atsui",JLPTLevel:"N4",Meaning:"chaleur",SecondaryMeaning:null}],Wo={kanji:Nw},Ow=[{id:1,JLPTLevel:"N1",kanji:"亜",hiragana:"あ",Romaji:"a",francais:"sub-, sous-",categorie:["nom"]},{id:2,JLPTLevel:"N5",kanji:"嗚呼",hiragana:"ああ",Romaji:"aa",francais:"ah !, oh !, hey!",categorie:["expressions idiomatiques"]},{id:3,JLPTLevel:"N3",kanji:"愛",hiragana:"あい",Romaji:"ai",francais:"amour",categorie:["émotions et sentiments"]},{id:4,JLPTLevel:"N2",kanji:"相変わらず",hiragana:"あいかわらず",Romaji:"aikawarazu",francais:"comme d'habitude, comme toujours",categorie:["expressions idiomatiques"]},{id:5,JLPTLevel:"N4",kanji:"挨拶",hiragana:"あいさつ",Romaji:"aisatsu",francais:"salutation",categorie:["formules de politesse"]},{id:6,JLPTLevel:"N5",kanji:"挨拶する",hiragana:"あいさつする",Romaji:"aisatsu suru",francais:"saluer",categorie:["verbes","verbes d’action"]},{id:7,JLPTLevel:"N3",kanji:"愛情",hiragana:"あいじょう",Romaji:"aijou",francais:"amour, affection",categorie:["émotions et sentiments"]},{id:8,JLPTLevel:"N3",kanji:"吅図",hiragana:"あいず",Romaji:"aizu",francais:"signal, signe",categorie:["nom"]},{id:9,JLPTLevel:"N3",kanji:"",hiragana:"アイスクリーム",Romaji:"aisukurīmu",francais:"crème glacée",categorie:["la nourriture"]},{id:10,JLPTLevel:"N3",kanji:"愛する",hiragana:"あいする",Romaji:"aisuru",francais:"aimer, être amoureux",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:11,JLPTLevel:"N1",kanji:"愛想",hiragana:"あいそう",Romaji:"aisou",francais:"amabilité",categorie:["émotions et sentiments"]},{id:12,JLPTLevel:"N4",kanji:"間",hiragana:"あいだ",Romaji:"aida",francais:"entre, parmi, pendant que",categorie:["mots de liaison et particules"]},{id:13,JLPTLevel:"N1",kanji:"間柄",hiragana:"あいだがら",Romaji:"aidagara",francais:"lien, relation avec quelqu'un",categorie:["nom"]},{id:14,JLPTLevel:"N3",kanji:"相手",hiragana:"あいて",Romaji:"aite",francais:"adversaire, opposant, compagnon",categorie:["nom"]},{id:15,JLPTLevel:"N2",kanji:"",hiragana:"アイデア・アイディア",Romaji:"aidea",francais:"idée",categorie:["nom"]},{id:16,JLPTLevel:"N3",kanji:"生憎",hiragana:"あいにく",Romaji:"ainiku",francais:"malheureusement",categorie:["expressions idiomatiques"]},{id:17,JLPTLevel:"N1",kanji:"吅間",hiragana:"あいま",Romaji:"aima",francais:"intervalle",categorie:["nom"]},{id:18,JLPTLevel:"N2",kanji:"曖昧",hiragana:"あいまい",Romaji:"aimai",francais:"ambigu, peu précis, vague",categorie:["adjectifs"]},{id:19,JLPTLevel:"N3",kanji:"",hiragana:"アイロン",Romaji:"airon",francais:"fer à repasser",categorie:["le matériel domestique"]},{id:20,JLPTLevel:"N5",kanji:"会う・遭う",hiragana:"あう",Romaji:"au",francais:"rencontrer, voir (une personne)",categorie:["verbes","verbes d’action"]},{id:21,JLPTLevel:"N4",kanji:"吅う",hiragana:"あう",Romaji:"au",francais:"convenir",categorie:["verbes","verbes d’action"]},{id:22,JLPTLevel:"N3",kanji:"",hiragana:"アウト",Romaji:"auto",francais:"dehors, à l'extérieur",categorie:["lieux et directions"]},{id:23,JLPTLevel:"N1",kanji:"敢えて",hiragana:"あえて",Romaji:"aete",francais:"défi",categorie:["nom"]},{id:24,JLPTLevel:"N5",kanji:"青",hiragana:"あお",Romaji:"ao",francais:"bleu (le), vert (le)",categorie:["les couleurs"]},{id:25,JLPTLevel:"N5",kanji:"青い・蒼い",hiragana:"あおい",Romaji:"aoi",francais:"bleu, vert, inexpérimenté",categorie:["les couleurs","adjectifs"]},{id:26,JLPTLevel:"N2",kanji:"扇ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"éventer, battre",categorie:["verbes","verbes d’action"]},{id:27,JLPTLevel:"N1",kanji:"仰ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"admirer quelqu'un, respecter, demander, boire",categorie:["verbes","verbes d’action"]},{id:28,JLPTLevel:"N2",kanji:"青白い",hiragana:"あおじろい",Romaji:"aojiroi",francais:"blême, pâle",categorie:["adjectifs"]},{id:29,JLPTLevel:"N5",kanji:"赤",hiragana:"あか",Romaji:"aka",francais:"rouge (le)",categorie:["les couleurs"]},{id:30,JLPTLevel:"N1",kanji:"垢",hiragana:"あか",Romaji:"aka",francais:"crasse, saleté",categorie:["nom"]},{id:31,JLPTLevel:"N5",kanji:"赤い",hiragana:"あかい",Romaji:"akai",francais:"rouge",categorie:["les couleurs","adjectifs"]},{id:32,JLPTLevel:"N1",kanji:"赤字",hiragana:"あかじ",Romaji:"akaji",francais:"déficit, perte (monétaire)",categorie:["nom"]},{id:33,JLPTLevel:"N1",kanji:"明かす",hiragana:"あかす",Romaji:"akasu",francais:"passer la nuit, révéler un secret",categorie:["verbes","verbes d’action"]},{id:34,JLPTLevel:"N4",kanji:"赤ちゃん",hiragana:"あかちゃん",Romaji:"akachan",francais:"bébé",categorie:["les membres de la famille"]},{id:35,JLPTLevel:"N1",kanji:"赤らむ",hiragana:"あからむ",Romaji:"akaramu",francais:"rougir (visage)",categorie:["verbes","verbes d’action"]},{id:36,JLPTLevel:"N3",kanji:"明かり",hiragana:"あかり",Romaji:"akari",francais:"clarté, lumières",categorie:["nom"]},{id:37,JLPTLevel:"N1",kanji:"上がり",hiragana:"あがり",Romaji:"agari",francais:"ascension, montée",categorie:["nom"]},{id:38,JLPTLevel:"N4",kanji:"上がる",hiragana:"あがる",Romaji:"agaru",francais:" s'élever, grimper, augmenter",categorie:["verbes","verbes d’action"]},{id:39,JLPTLevel:"N5",kanji:"明るい",hiragana:"あかるい",Romaji:"akarui",francais:"clair",categorie:["adjectifs"]},{id:40,JLPTLevel:"N4",kanji:"赤ん坊",hiragana:"あかんぼう",Romaji:"akanbou",francais:"bébé",categorie:["les membres de la famille"]},{id:41,JLPTLevel:"N5",kanji:"秋",hiragana:"あき",Romaji:"aki",francais:"automne",categorie:["temps et saisons"]},{id:42,JLPTLevel:"N3",kanji:"明き・空き",hiragana:"あき",Romaji:"aki",francais:"vide, place, espace",categorie:["nom"]},{id:43,JLPTLevel:"N3",kanji:"明らか",hiragana:"あきらか",Romaji:"akiraka",francais:"évident, clair",categorie:["adjectifs"]},{id:44,JLPTLevel:"N1",kanji:"諦め",hiragana:"あきらめ",Romaji:"akirame",francais:"résignation, acceptance",categorie:["émotions et sentiments"]},{id:45,JLPTLevel:"N3",kanji:"諦める",hiragana:"あきらめる",Romaji:"akirameru",francais:" abandonner, renoncer, laisser tomber",categorie:["verbes","verbes d’action"]},{id:46,JLPTLevel:"N3",kanji:"飽きる",hiragana:"あきる",Romaji:"akiru",francais:" s'ennuyer, se lasser",categorie:["verbes","verbes d’action"]},{id:47,JLPTLevel:"N2",kanji:"呆れる",hiragana:"あきれる",Romaji:"akireru",francais:" être stupéfait, ébahi",categorie:["verbes","verbes d’action"]},{id:48,JLPTLevel:"N5",kanji:"開く",hiragana:"あく",Romaji:"aku",francais:" s'ouvrir",categorie:["verbes","verbes d’action"]},{id:49,JLPTLevel:"N4",kanji:"空く",hiragana:"あく",Romaji:"aku",francais:" se vider, être vide, être disponible",categorie:["verbes","verbes d’action"]},{id:50,JLPTLevel:"N1",kanji:"悪",hiragana:"あく",Romaji:"aku",francais:"mal (le)",categorie:["nom"]},{id:51,JLPTLevel:"N3",kanji:"握手",hiragana:"あくしゅ",Romaji:"akushu",francais:"poignée de mains",categorie:["formules de politesse"]},{id:52,JLPTLevel:"N4",kanji:"アクセサリー",hiragana:"アクセサリー",Romaji:"akusesarī",francais:"accessoire",categorie:["les vêtements"]},{id:53,JLPTLevel:"N1",kanji:"アクセル",hiragana:"アクセル",Romaji:"akuseru",francais:"accélérateur",categorie:["les moyens de transport"]},{id:54,JLPTLevel:"N2",kanji:"",hiragana:"アクセント",Romaji:"akusento",francais:"accent",categorie:["nom"]},{id:55,JLPTLevel:"N1",kanji:"悪どい",hiragana:"あくどい",Romaji:"akudoi",francais:"tape-à-l'œil, voyant, vicieux",categorie:["adjectifs"]},{id:56,JLPTLevel:"N2",kanji:"欠伸",hiragana:"あくび",Romaji:"akubi",francais:"bâillement",categorie:["santé et bien-être"]},{id:57,JLPTLevel:"N3",kanji:"悪魔",hiragana:"あくま",Romaji:"akuma",francais:"démon, diable, mauvais esprit",categorie:["nom"]},{id:58,JLPTLevel:"N2",kanji:"飽くまで",hiragana:"あくまで",Romaji:"akumade",francais:"jusqu'au bout, obstinément",categorie:["expressions idiomatiques"]},{id:59,JLPTLevel:"N2",kanji:"明くる",hiragana:"あくる",Romaji:"akuru",francais:"prochain, suivant",categorie:["expressions temporelles"]},{id:60,JLPTLevel:"N2",kanji:"明け方",hiragana:"あけがた",Romaji:"akegata",francais:"aube",categorie:["expressions temporelles"]},{id:61,JLPTLevel:"N5",kanji:"開ける・明ける",hiragana:"あける",Romaji:"akeru",francais:"ouvrir",categorie:["verbes","verbes d’action"]},{id:62,JLPTLevel:"N3",kanji:"明ける",hiragana:"あける",Romaji:"akeru",francais:"se lever (le soleil), s'éclaircir",categorie:["verbes","verbes d’action"]},{id:63,JLPTLevel:"N5",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"donner",categorie:["verbes","verbes d’action"]},{id:64,JLPTLevel:"N4",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"augmenter",categorie:["verbes","verbes d’action"]},{id:65,JLPTLevel:"N1",kanji:"顎",hiragana:"あご",Romaji:"ago",francais:"menton",categorie:["le corps humain"]},{id:66,JLPTLevel:"N1",kanji:"憧れ",hiragana:"あこがれ",Romaji:"akogare",francais:"aspiration, désirs",categorie:["émotions et sentiments"]},{id:67,JLPTLevel:"N2",kanji:"憧れる",hiragana:"あこがれる",Romaji:"akogareru",francais:"aspirer à, languir de quelque chose",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:68,JLPTLevel:"N5",kanji:"朝",hiragana:"あさ",Romaji:"asa",francais:"matin",categorie:["expressions temporelles"]},{id:69,JLPTLevel:"N1",kanji:"麻",hiragana:"あさ",Romaji:"asa",francais:"chanvre, lin",categorie:["nom"]},{id:70,JLPTLevel:"N1",kanji:"字",hiragana:"あざ",Romaji:"aza",francais:"hameau, partie d'un village",categorie:["lieux et directions"]},{id:71,JLPTLevel:"N4",kanji:"浅い",hiragana:"あさい",Romaji:"asai",francais:"peu profond",categorie:["adjectifs"]},{id:72,JLPTLevel:"N5",kanji:"朝ご飯",hiragana:"あさごはん",Romaji:"asagohan",francais:"petit-déjeuner",categorie:["la nourriture"]},{id:73,JLPTLevel:"N5",kanji:"明後日",hiragana:"あさって",Romaji:"asatte",francais:"après-demain",categorie:["expressions temporelles"]},{id:74,JLPTLevel:"N4",kanji:"朝寝坊",hiragana:"あさねぼう",Romaji:"asanebou",francais:"lève-tard",categorie:["expressions idiomatiques"]},{id:75,JLPTLevel:"N1",kanji:"浅ましい",hiragana:"あさましい",Romaji:"asamashii",francais:"misérable, infortuné, méprisable",categorie:["adjectifs"]},{id:76,JLPTLevel:"N1",kanji:"欺く",hiragana:"あざむく",Romaji:"azamuku",francais:"tromper, duper",categorie:["verbes","verbes d’action"]},{id:77,JLPTLevel:"N1",kanji:"鮮やか",hiragana:"あざやか",Romaji:"azayaka",francais:"brillant, vif, éclatant",categorie:["adjectifs","les couleurs"]},{id:78,JLPTLevel:"N1",kanji:"あざ笑う",hiragana:"あざわらう",Romaji:"azawarau",francais:"sourire avec mépris",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:79,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"jambe",categorie:["le corps humain"]},{id:80,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"pied",categorie:["le corps humain"]},{id:81,JLPTLevel:"N4",kanji:"味",hiragana:"あじ",Romaji:"aji",francais:"goût",categorie:["la nourriture"]},{id:82,JLPTLevel:"N4",kanji:"アジア",hiragana:"アジア",Romaji:"ajia",francais:"Asie, asiatique",categorie:["les pays"]},{id:83,JLPTLevel:"N2",kanji:"足跡",hiragana:"あしあと",Romaji:"ashiato",francais:"empreinte de pied",categorie:["nom"]},{id:84,JLPTLevel:"N1",kanji:"悪しからず",hiragana:"あしからず",Romaji:"ashikarazu",francais:"désolé mais…, ne m'en veuillez pas mais…",categorie:["formules de politesse"]},{id:85,JLPTLevel:"N5",kanji:"明日",hiragana:"あした",Romaji:"ashita",francais:"demain",categorie:["expressions temporelles"]},{id:86,JLPTLevel:"N2",kanji:"足元・足下",hiragana:"あしもと",Romaji:"ashimoto",francais:"sous les pieds, allure, démarche",categorie:["nom"]},{id:87,JLPTLevel:"N1",kanji:"味わい",hiragana:"あじわい",Romaji:"ajiwai",francais:"saveur, goût",categorie:["la nourriture"]},{id:88,JLPTLevel:"N2",kanji:"味わう",hiragana:"あじわう",Romaji:"ajiau",francais:"goûter",categorie:["verbes","verbes d’action","la nourriture"]},{id:89,JLPTLevel:"N4",kanji:"明日",hiragana:"あす",Romaji:"asu",francais:"demain",categorie:["expressions temporelles"]},{id:90,JLPTLevel:"N2",kanji:"預かる",hiragana:"あずかる",Romaji:"azukaru",francais:"s'occuper de, prendre en charge",categorie:["verbes","verbes d’action"]},{id:91,JLPTLevel:"N3",kanji:"預ける",hiragana:"あずける",Romaji:"azukeru",francais:"confier à la garde de, laisser quelqu'un à la charge de",categorie:["verbes","verbes d’action"]},{id:92,JLPTLevel:"N3",kanji:"汗",hiragana:"あせ",Romaji:"ase",francais:"sueur",categorie:["santé et bien-être"]},{id:93,JLPTLevel:"N1",kanji:"焦る",hiragana:"あせる",Romaji:"aseru",francais:"être pressé, impatient",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:94,JLPTLevel:"N1",kanji:"褪せる",hiragana:"あせる",Romaji:"aseru",francais:"pâlir, se décolorer, se faner",categorie:["verbes","verbes d’action"]},{id:95,JLPTLevel:"N2",kanji:"汗を掻く",hiragana:"あせをかく",Romaji:"ase o kaku",francais:"transpirer, suer",categorie:["verbes","verbes d’action","santé et bien-être"]},{id:96,JLPTLevel:"N5",kanji:"彼処",hiragana:"あそこ",Romaji:"asoko",francais:"là-bas (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:97,JLPTLevel:"N5",kanji:"遊び",hiragana:"あそび",Romaji:"asobi",francais:"jeu",categorie:["activités et loisirs"]},{id:98,JLPTLevel:"N5",kanji:"遊ぶ",hiragana:"あそぶ",Romaji:"asobu",francais:"jouer",categorie:["verbes","verbes d’action","activités et loisirs"]},{id:99,JLPTLevel:"N2",kanji:"値",hiragana:"あたい",Romaji:"atai",francais:"coût, prix, valeur",categorie:["nom"]},{id:100,JLPTLevel:"N1",kanji:"値する",hiragana:"あたいする",Romaji:"ataisuru",francais:"mériter, être digne de",categorie:["verbes","verbes d’action"]},{id:101,JLPTLevel:"N3",kanji:"与える",hiragana:"あたえる",Romaji:"ataeru",francais:"décerner, offrir, donner",categorie:["verbes","verbes d’action"]},{id:102,JLPTLevel:"N5",kanji:"温かい・暖かい",hiragana:"あたたかい",Romaji:"atatakai",francais:"tiède, chaud",categorie:["adjectifs"]},{id:103,JLPTLevel:"N2",kanji:"温まる・暖まる",hiragana:"あたたまる",Romaji:"atatamaru",francais:"se réchauffer",categorie:["verbes","verbes d’action"]},{id:104,JLPTLevel:"N2",kanji:"温める・暖める",hiragana:"あたためる",Romaji:"atatameru",francais:"réchauffer",categorie:["verbes","verbes d’action"]},{id:105,JLPTLevel:"N5",kanji:"頭",hiragana:"あたま",Romaji:"atama",francais:"tête",categorie:["le corps humain"]},{id:106,JLPTLevel:"N5",kanji:"新しい",hiragana:"あたらしい",Romaji:"atarashii",francais:"nouveau",categorie:["adjectifs"]},{id:107,JLPTLevel:"N3",kanji:"辺り",hiragana:"あたり",Romaji:"atari",francais:"aux environs",categorie:["lieux et directions"]},{id:108,JLPTLevel:"N1",kanji:"当たり",hiragana:"あたり",Romaji:"atari",francais:"coup, réussite, succès, par… (+unité)",categorie:["nom"]},{id:109,JLPTLevel:"N2",kanji:"当たり前",hiragana:"あたりまえ",Romaji:"atarimae",francais:"évident, banal, normal",categorie:["adjectifs"]},{id:110,JLPTLevel:"N3",kanji:"当たる",hiragana:"あたる",Romaji:"ataru",francais:"entreprendre, avoir du succès, être assigné, être équivalent à",categorie:["verbes","verbes d’action"]},{id:111,JLPTLevel:"N3",kanji:"彼方・此方",hiragana:"あちこち・あちらこちら",Romaji:"achikochi・achirakochira",francais:"ici et là",categorie:["lieux et directions"]},{id:112,JLPTLevel:"N5",kanji:"彼方",hiragana:"あちら",Romaji:"achira",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:113,JLPTLevel:"N5",kanji:"暑い",hiragana:"あつい",Romaji:"atsui",francais:"chaud (temps météo.)",categorie:["adjectifs","temps et saisons"]},{id:114,JLPTLevel:"N5",kanji:"厚い",hiragana:"あつい",Romaji:"atsui",francais:"épais, lourd",categorie:["adjectifs"]},{id:115,JLPTLevel:"N1",kanji:"悪化",hiragana:"あっか",Romaji:"akka",francais:"aggravation, détérioration",categorie:["nom"]},{id:116,JLPTLevel:"N1",kanji:"扱い",hiragana:"あつかい",Romaji:"atsukai",francais:"traitement, service",categorie:["nom"]},{id:117,JLPTLevel:"N3",kanji:"扱う",hiragana:"あつかう",Romaji:"atsukau",francais:"s'occuper de, gérer, traiter",categorie:["verbes","verbes d’action"]},{id:118,JLPTLevel:"N2",kanji:"厚かましい",hiragana:"あつかましい",Romaji:"atsukamashii",francais:"effronté, insolent",categorie:["adjectifs"]},{id:119,JLPTLevel:"N1",kanji:"呆気ない",hiragana:"あっけない",Romaji:"akkenai",francais:"trop rapide, abrupt, pas assez de",categorie:["adjectifs"]},{id:120,JLPTLevel:"N1",kanji:"",hiragana:"あっさり",Romaji:"assari",francais:"facilement, simplement, rapidement",categorie:["adjectifs"]},{id:121,JLPTLevel:"N2",kanji:"圧縮",hiragana:"あっしゅく",Romaji:"asshuku",francais:"compression",categorie:["nom"]},{id:122,JLPTLevel:"N5",kanji:"彼方",hiragana:"あっち",Romaji:"acchi",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:123,JLPTLevel:"N1",kanji:"圧迫",hiragana:"あっぱく",Romaji:"appaku",francais:"pression, oppression",categorie:["nom"]},{id:124,JLPTLevel:"N1",kanji:"",hiragana:"アップ",Romaji:"appu",francais:"vers le haut",categorie:["nom"]},{id:125,JLPTLevel:"N3",kanji:"集まり",hiragana:"あつまり",Romaji:"atsumari",francais:"réunion, rassemblement",categorie:["nom"]},{id:126,JLPTLevel:"N4",kanji:"集まる",hiragana:"あつまる",Romaji:"atsumaru",francais:"se réunir",categorie:["verbes","verbes d’action"]},{id:127,JLPTLevel:"N4",kanji:"集める",hiragana:"あつめる",Romaji:"atsumeru",francais:"réunir, rassembler",categorie:["verbes","verbes d’action"]},{id:128,JLPTLevel:"N1",kanji:"誂える",hiragana:"あつらえる",Romaji:"atsuraeru",francais:"commander, donner un ordre",categorie:["verbes","verbes d’action"]},{id:129,JLPTLevel:"N1",kanji:"圧力",hiragana:"あつりょく",Romaji:"atsuryoku",francais:"pression, stress",categorie:["nom"]},{id:130,JLPTLevel:"N1",kanji:"当て",hiragana:"あて",Romaji:"ate",francais:"espoir, attente, but, objectif",categorie:["nom"]},{id:131,JLPTLevel:"N1",kanji:"宛",hiragana:"あて",Romaji:"ate",francais:"but, destination, objectif",categorie:["nom"]},{id:132,JLPTLevel:"N1",kanji:"当て字",hiragana:"あてじ",Romaji:"ateji",francais:"kanji utilisé comme équivalent phonétique",categorie:["nom"]},{id:133,JLPTLevel:"N2",kanji:"宛名",hiragana:"あてな",Romaji:"atena",francais:"adresse et nom du destinataire",categorie:["nom"]},{id:134,JLPTLevel:"N2",kanji:"当てはまる",hiragana:"あてはまる",Romaji:"atehamaru",francais:"appliquer (une règle)",categorie:["verbes","verbes d’action"]},{id:135,JLPTLevel:"N2",kanji:"編物",hiragana:"あみもの",Romaji:"amimono",francais:"tricot",categorie:["activités et loisirs"]},{id:136,JLPTLevel:"N2",kanji:"編む",hiragana:"あむ",Romaji:"amu",francais:"assembler, coudre",categorie:["verbes","verbes d’action"]},{id:137,JLPTLevel:"N5",kanji:"雤",hiragana:"あめ",Romaji:"ame",francais:"pluie",categorie:["nature et environnement"]},{id:138,JLPTLevel:"N5",kanji:"飴",hiragana:"あめ",Romaji:"ame",francais:"bonbon, sucrerie",categorie:["la nourriture"]},{id:139,JLPTLevel:"N4",kanji:"",hiragana:"アメリカ",Romaji:"amerika",francais:"Amérique",categorie:["les pays"]},{id:140,JLPTLevel:"N2",kanji:"危うい",hiragana:"あやうい",Romaji:"ayaui",francais:"dangereux, risqué",categorie:["adjectifs"]},{id:141,JLPTLevel:"N2",kanji:"怪しい",hiragana:"あやしい",Romaji:"ayashii",francais:"incertain, suspicieux, douteux, suspect",categorie:["adjectifs"]},{id:142,JLPTLevel:"N1",kanji:"操る",hiragana:"あやつる",Romaji:"ayatsuru",francais:"manipuler, opérer",categorie:["verbes","verbes d’action"]},{id:143,JLPTLevel:"N1",kanji:"危ぶむ",hiragana:"あやぶむ",Romaji:"ayabumu",francais:"avoir des craintes, des doutes",categorie:["verbes","verbes d’action"]},{id:144,JLPTLevel:"N1",kanji:"",hiragana:"あやふや",Romaji:"ayafuya",francais:"ambigu, incertain, vague",categorie:["adjectifs"]},{id:145,JLPTLevel:"N1",kanji:"過ち",hiragana:"あやまち",Romaji:"ayamachi",francais:"erreur, faute, faux pas, indiscrétion",categorie:["nom"]},{id:146,JLPTLevel:"N3",kanji:"誤り",hiragana:"あやまり",Romaji:"ayamari",francais:"erreur",categorie:["nom"]},{id:147,JLPTLevel:"N4",kanji:"謝る",hiragana:"あやまる",Romaji:"ayamaru",francais:"s'excuser",categorie:["verbes","verbes d’action","formules de politesse"]},{id:148,JLPTLevel:"N1",kanji:"歩み",hiragana:"あゆみ",Romaji:"ayumi",francais:"promenade à pied, avancée",categorie:["activités et loisirs"]},{id:149,JLPTLevel:"N1",kanji:"歩む",hiragana:"あゆむ",Romaji:"ayumu",francais:"marcher, aller à pied",categorie:["verbes","verbes d’action"]},{id:150,JLPTLevel:"N3",kanji:"粗い",hiragana:"あらい",Romaji:"arai",francais:"grossier (texture), rugueux (surface)",categorie:["adjectifs"]},{id:151,JLPTLevel:"N2",kanji:"荒い",hiragana:"あらい",Romaji:"arai",francais:"brutal, violent",categorie:["adjectifs"]},{id:152,JLPTLevel:"N5",kanji:"洗う",hiragana:"あらう",Romaji:"arau",francais:"laver",categorie:["verbes","verbes d’action"]},{id:153,JLPTLevel:"N1",kanji:"予め",hiragana:"あらかじめ",Romaji:"arakajime",francais:"à l'avance",categorie:["expressions temporelles"]},{id:154,JLPTLevel:"N3",kanji:"嵐",hiragana:"あらし",Romaji:"arashi",francais:"tempête",categorie:["nature et environnement"]},{id:155,JLPTLevel:"N1",kanji:"荒らす",hiragana:"あらす",Romaji:"arasu",francais:"dévaster, laisser en ruine, endommager",categorie:["verbes","verbes d’action"]},{id:156,JLPTLevel:"N2",kanji:"粗筊",hiragana:"あらすじ",Romaji:"arasuj",francais:"résumé, synopsis",categorie:["nom"]},{id:157,JLPTLevel:"N1",kanji:"争い",hiragana:"あらそい",Romaji:"arasoi",francais:"conflit, lutte",categorie:["nom"]},{id:158,JLPTLevel:"N2",kanji:"争う",hiragana:"あらそう",Romaji:"arasou",francais:"se disputer, s'affronter",categorie:["verbes","verbes d’action"]},{id:159,JLPTLevel:"N3",kanji:"新た",hiragana:"あらた",Romaji:"arata",francais:"nouvellement, fraîchement",categorie:["adjectifs"]},{id:160,JLPTLevel:"N1",kanji:"改まる",hiragana:"あらたまる",Romaji:"aratamaru",francais:"être renouvelé, modifié",categorie:["verbes","verbes d’action"]},{id:161,JLPTLevel:"N2",kanji:"改めて",hiragana:"あらためて",Romaji:"aratamete",francais:"à nouveau, une nouvelle fois",categorie:["expressions temporelles"]},{id:162,JLPTLevel:"N2",kanji:"改める",hiragana:"あらためる",Romaji:"aratameru",francais:"modifier, renouveler",categorie:["verbes","verbes d’action"]},{id:163,JLPTLevel:"N1",kanji:"荒っぽい",hiragana:"あらっぽい",Romaji:"arappoi",francais:"rude, rêche",categorie:["adjectifs"]},{id:164,JLPTLevel:"N1",kanji:"アラブ",hiragana:"アラブ",Romaji:"arabu",francais:"arabe",categorie:["les pays"]},{id:165,JLPTLevel:"N3",kanji:"有らゆる",hiragana:"あらゆる",Romaji:"arayuru",francais:"tous, toutes",categorie:["nom"]},{id:166,JLPTLevel:"N1",kanji:"霰",hiragana:"あられ",Romaji:"arare",francais:"grêle",categorie:["nature et environnement"]},{id:167,JLPTLevel:"N3",kanji:"表す・現す・著す",hiragana:"あらわす",Romaji:"arawasu",francais:"montrer, afficher, révéler",categorie:["verbes","verbes d’action"]},{id:168,JLPTLevel:"N3",kanji:"現れ",hiragana:"あらわれ",Romaji:"araware",francais:"manifestation, incarnation, expression",categorie:["nom"]},{id:169,JLPTLevel:"N3",kanji:"現れる・表れる・現われる",hiragana:"あらわれる",Romaji:"arawareru",francais:"apparaître, se dévoiler, s'exprimer (sentiment)",categorie:["verbes","verbes d’action"]},{id:170,JLPTLevel:"N2",kanji:"有難い",hiragana:"ありがたい",Romaji:"arigatai",francais:"reconnaissant",categorie:["émotions et sentiments"]},{id:171,JLPTLevel:"N1",kanji:"有様",hiragana:"ありさま",Romaji:"arisama",francais:"état, condition",categorie:["nom"]},{id:172,JLPTLevel:"N1",kanji:"有りのまま",hiragana:"ありのまま",Romaji:"arinomama",francais:"tel quel",categorie:["expressions idiomatiques"]},{id:173,JLPTLevel:"N1",kanji:"有り触れる",hiragana:"ありふれる",Romaji:"arifureru",francais:"être courant, fréquent",categorie:["verbes","verbes d’action"]},{id:174,JLPTLevel:"N5",kanji:"有る",hiragana:"ある",Romaji:"aru",francais:"avoir, posséder",categorie:["verbes","verbes d’action"]},{id:175,JLPTLevel:"N5",kanji:"在る",hiragana:"ある",Romaji:"aru",francais:"être, se trouver, exister",categorie:["verbes","verbes d’action"]},{id:176,JLPTLevel:"N3",kanji:"或る",hiragana:"ある",Romaji:"aru",francais:"un certain",categorie:["nom"]},{id:177,JLPTLevel:"N3",kanji:"或いは",hiragana:"あるいは",Romaji:"aruiwa",francais:"ou bien",categorie:["mots de liaison et particules"]},{id:178,JLPTLevel:"N1",kanji:"",hiragana:"アルカリ",Romaji:"arukari",francais:"alcali",categorie:["nom"]},{id:179,JLPTLevel:"N5",kanji:"歩く",hiragana:"あるく",Romaji:"aruku",francais:"marcher",categorie:["verbes","verbes d’action"]},{id:180,JLPTLevel:"N4",kanji:"",hiragana:"アルコール",Romaji:"arukōru",francais:"alcool",categorie:["la nourriture"]},{id:181,JLPTLevel:"N4",kanji:"",hiragana:"アルバイト",Romaji:"arubaito",francais:"travail à temps partiel",categorie:["vocabulaire lié au travail"]},{id:182,JLPTLevel:"N3",kanji:"",hiragana:"アルバム",Romaji:"arubamu",francais:"album",categorie:["nom"]},{id:183,JLPTLevel:"N1",kanji:"",hiragana:"アルミ",Romaji:"arumi",francais:"aluminium",categorie:["nom"]},{id:184,JLPTLevel:"N5",kanji:"彼",hiragana:"あれ",Romaji:"are",francais:"ceci (loin du locuteur et de l'interlocuteur)",categorie:["nom"]},{id:185,JLPTLevel:"N2",kanji:"彼此",hiragana:"あれこれ",Romaji:"arekore",francais:"divers, diverses choses",categorie:["nom"]},{id:186,JLPTLevel:"N2",kanji:"荒れる",hiragana:"あれる",Romaji:"areru",francais:"être orageux, perdre son sang-froid",categorie:["verbes","verbes d’action"]},{id:187,JLPTLevel:"N3",kanji:"泡",hiragana:"あわ",Romaji:"awa",francais:"mousse, bulle",categorie:["nom"]},{id:188,JLPTLevel:"N1",kanji:"",hiragana:"アワー・アウア",Romaji:"awā・aua",francais:"heure",categorie:["expressions temporelles"]},{id:189,JLPTLevel:"N1",kanji:"吅わす",hiragana:"あわす",Romaji:"awasu",francais:"comparer, combiner, ajouter, unir, faire correspondre",categorie:["verbes","verbes d’action"]},{id:190,JLPTLevel:"N3",kanji:"吅わせる",hiragana:"あわせる",Romaji:"awaseru",francais:"se connecter, se mélanger",categorie:["verbes","verbes d’action"]},{id:191,JLPTLevel:"N2",kanji:"慌しい",hiragana:"あわただしい",Romaji:"awatadashii",francais:"déconcerté, confus",categorie:["adjectifs"]},{id:192,JLPTLevel:"N2",kanji:"慌てる",hiragana:"あわてる",Romaji:"awateru",francais:"devenir confus, agité, paniquer",categorie:["verbes","verbes d’action"]},{id:193,JLPTLevel:"N3",kanji:"哀れ",hiragana:"あわれ",Romaji:"aware",francais:"pitié, compassion",categorie:["émotions et sentiments"]},{id:194,JLPTLevel:"N3",kanji:"案",hiragana:"あん",Romaji:"an",francais:"plan, idée, projet",categorie:["nom"]},{id:195,JLPTLevel:"N2",kanji:"安易",hiragana:"あんい",Romaji:"an'i",francais:"facile, simple",categorie:["adjectifs"]},{id:196,JLPTLevel:"N2",kanji:"案外",hiragana:"あんがい",Romaji:"angai",francais:"contre toute attente, inattendu",categorie:["adjectifs"]},{id:197,JLPTLevel:"N3",kanji:"暗記",hiragana:"あんき",Romaji:"anki",francais:"mémorisation, par coeur",categorie:["nom"]},{id:198,JLPTLevel:"N1",kanji:"",hiragana:"アンケート",Romaji:"ankēto",francais:"enquête",categorie:["nom"]},{id:199,JLPTLevel:"N1",kanji:"",hiragana:"アンコール",Romaji:"ankōru",francais:"encore",categorie:["nom"]},{id:200,JLPTLevel:"N1",kanji:"暗殺",hiragana:"あんさつ",Romaji:"ansatsu",francais:"assassinat",categorie:["nom"]},{id:201,JLPTLevel:"N1",kanji:"暗算",hiragana:"あんざん",Romaji:"anzan",francais:"calcul mental",categorie:["nom"]},{id:202,JLPTLevel:"N1",kanji:"暗示",hiragana:"あんじ",Romaji:"anji",francais:"indice, suggestion",categorie:["nom"]},{id:203,JLPTLevel:"N1",kanji:"案じる",hiragana:"あんじる",Romaji:"anjiru",francais:"être inquiet, réfléchir à",categorie:["verbes","verbes d’action"]},{id:204,JLPTLevel:"N4",kanji:"安心する",hiragana:"あんしんする",Romaji:"anshin suru",francais:"être tranquille",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:205,JLPTLevel:"N1",kanji:"安静",hiragana:"あんせい",Romaji:"ansei",francais:"repos",categorie:["santé et bien-être"]},{id:206,JLPTLevel:"N4",kanji:"安全",hiragana:"あんぜん",Romaji:"anzen",francais:"sûr",categorie:["adjectifs"]},{id:207,JLPTLevel:"N3",kanji:"安定",hiragana:"あんてい",Romaji:"antei",francais:"équilibre, stabilité",categorie:["nom"]},{id:208,JLPTLevel:"N2",kanji:"アンテナ",hiragana:"アンテナ",Romaji:"antena",francais:"antenne",categorie:["technologie et gadgets"]},{id:209,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"comme ça",categorie:["adjectifs"]},{id:210,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"ce genre de",categorie:["adjectifs"]},{id:211,JLPTLevel:"N4",kanji:"案内",hiragana:"あんない",Romaji:"annai",francais:"information, renseignement",categorie:["nom"]},{id:212,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:213,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:214,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:215,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:216,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:217,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:218,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:219,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:220,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:221,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:222,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:223,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:224,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:225,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:226,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:227,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:228,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:229,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:230,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:231,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:232,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:233,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:234,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:235,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:236,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:237,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:238,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:239,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:240,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:241,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:242,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:243,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:244,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:245,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:246,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:247,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:248,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:249,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:250,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:251,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:252,JLPTLevel:"N4",kanji:"以下",hiragana:"いか",Romaji:"ika",francais:"moins de, au dessous-de, sous",categorie:["nombres et quantificateurs"]},{id:253,JLPTLevel:"N4",kanji:"以外",hiragana:"いがい",Romaji:"igai",francais:"excepté",categorie:["mots de liaison et particules"]},{id:254,JLPTLevel:"N3",kanji:"意外",hiragana:"いがい",Romaji:"igai",francais:"inattendu, surprenant",categorie:["adjectifs"]},{id:255,JLPTLevel:"N4",kanji:"如何",hiragana:"いかが",Romaji:"ikaga",francais:"comment ?",categorie:["mots de liaison et particules"]},{id:256,JLPTLevel:"N4",kanji:"医学",hiragana:"いがく",Romaji:"igaku",francais:"médecine",categorie:["santé et bien-être"]},{id:257,JLPTLevel:"N1",kanji:"生かす",hiragana:"いかす",Romaji:"ikasu",francais:"ranimer, ressusciter",categorie:["verbes","verbes d’action"]},{id:258,JLPTLevel:"N1",kanji:"如何に",hiragana:"いかに",Romaji:"ikani",francais:"pourquoi ?, comment ?",categorie:["mots de liaison et particules"]},{id:259,JLPTLevel:"N1",kanji:"如何にも",hiragana:"いかにも",Romaji:"ikanimo",francais:"certainement !, en effet !, parfaitement !",categorie:["expressions idiomatiques"]},{id:260,JLPTLevel:"N1",kanji:"怒り",hiragana:"いかり",Romaji:"ikari",francais:"colère, emportement, fureur, rage",categorie:["émotions et sentiments"]},{id:261,JLPTLevel:"N3",kanji:"息",hiragana:"いき",Romaji:"iki",francais:"souffle, respiration",categorie:["le corps humain"]},{id:262,JLPTLevel:"N1",kanji:"粋",hiragana:"いき",Romaji:"iki",francais:"élégant, coquet, chic",categorie:["adjectifs"]},{id:263,JLPTLevel:"N2",kanji:"意義",hiragana:"いぎ",Romaji:"igi",francais:"moral",categorie:["nom"]},{id:264,JLPTLevel:"N1",kanji:"異議",hiragana:"いぎ",Romaji:"igi",francais:"objection, protestation",categorie:["nom"]},{id:265,JLPTLevel:"N3",kanji:"行き",hiragana:"いき・ゆき",Romaji:"iki, yuki",francais:"déplacement, aller simple",categorie:["nom"]},{id:266,JLPTLevel:"N2",kanji:"生き生き",hiragana:"いきいき",Romaji:"ikiiki",francais:"plein d'entrain, animé, de façon très vivante",categorie:["adjectifs"]},{id:267,JLPTLevel:"N3",kanji:"勢い",hiragana:"いきおい",Romaji:"ikioi",francais:"entrain, vigueur, force",categorie:["nom"]},{id:268,JLPTLevel:"N1",kanji:"生き甲斐",hiragana:"いきがい",Romaji:"ikigai",francais:"raison de vivre",categorie:["nom"]},{id:269,JLPTLevel:"N1",kanji:"意気込む",hiragana:"いきごむ",Romaji:"ikigomu",francais:"être enthousiaste à propos de quelque chose",categorie:["verbes","verbes d’action"]},{id:270,JLPTLevel:"N1",kanji:"行き違い",hiragana:"いきちがい",Romaji:"ikichigai",francais:"désaccord, malentendu",categorie:["nom"]},{id:271,JLPTLevel:"N2",kanji:"行成",hiragana:"いきなり",Romaji:"ikinari",francais:"brusquement, soudainement",categorie:["adverbes"]},{id:272,JLPTLevel:"N3",kanji:"生き物",hiragana:"いきもの",Romaji:"ikimono",francais:"être vivant, animal",categorie:["nom"]},{id:273,JLPTLevel:"N4",kanji:"生きる",hiragana:"いきる",Romaji:"ikiru",francais:"vivre, exister",categorie:["verbes","verbes d’action"]},{id:274,JLPTLevel:"N2",kanji:"幾",hiragana:"いく",Romaji:"iku",francais:"plusieurs, quelques",categorie:["adjectifs"]},{id:275,JLPTLevel:"N5",kanji:"行く",hiragana:"いく・ゆく",Romaji:"iku, yuku",francais:"aller",categorie:["verbes","verbes d’action"]},{id:276,JLPTLevel:"N2",kanji:"育児する",hiragana:"いくじする",Romaji:"ikuji suru",francais:"élever des enfants, s'occuper d'enfants",categorie:["verbes","verbes d’action"]},{id:277,JLPTLevel:"N1",kanji:"育成",hiragana:"いくせい",Romaji:"ikusei",francais:"élevage, culture",categorie:["nom"]},{id:278,JLPTLevel:"N1",kanji:"幾多",hiragana:"いくた",Romaji:"ikuta",francais:"beaucoup, de nombreux",categorie:["adjectifs"]},{id:279,JLPTLevel:"N5",kanji:"幾つ",hiragana:"いくつ",Romaji:"ikutsu",francais:"combien ? (quantité)",categorie:["adjectifs"]},{id:280,JLPTLevel:"N2",kanji:"幾分",hiragana:"いくぶん",Romaji:"ikubun",francais:"un peu, une partie",categorie:["adjectifs"]},{id:281,JLPTLevel:"N5",kanji:"幾ら",hiragana:"いくら",Romaji:"ikura",francais:"combien ? (prix)",categorie:["adjectifs"]},{id:282,JLPTLevel:"N5",kanji:"池",hiragana:"いけ",Romaji:"ike",francais:"étang",categorie:["nature et environnement"]},{id:283,JLPTLevel:"N3",kanji:"行けない",hiragana:"いけない",Romaji:"ikenai",francais:"ne doit pas faire, sans espoir, pas bon",categorie:["adjectifs"]},{id:284,JLPTLevel:"N2",kanji:"生花",hiragana:"いけばな",Romaji:"ikebana",francais:"ikebana, arrangement floral",categorie:["activités et loisirs"]},{id:285,JLPTLevel:"N1",kanji:"生ける",hiragana:"いける",Romaji:"ikeru",francais:"disposer (des fleurs)",categorie:["verbes","verbes d’action"]},{id:286,JLPTLevel:"N4",kanji:"意見",hiragana:"いけん",Romaji:"iken",francais:"opinion, avis",categorie:["nom"]},{id:287,JLPTLevel:"N1",kanji:"異見",hiragana:"いけん",Romaji:"iken",francais:"contradiction, opinion différente, objection",categorie:["nom"]},{id:288,JLPTLevel:"N2",kanji:"以後",hiragana:"いご",Romaji:"igo",francais:"après quoi, dorénavant",categorie:["expressions temporelles"]},{id:289,JLPTLevel:"N2",kanji:"以降",hiragana:"いこう",Romaji:"ikou",francais:"désormais, dorénavant, à l'avenir",categorie:["expressions temporelles"]},{id:290,JLPTLevel:"N1",kanji:"意向",hiragana:"いこう",Romaji:"ikou",francais:"idée, intention",categorie:["nom"]},{id:291,JLPTLevel:"N1",kanji:"移行",hiragana:"いこう",Romaji:"ikou",francais:"migration, passage d'un état à un autre",categorie:["nom"]},{id:292,JLPTLevel:"N2",kanji:"",hiragana:"イコール",Romaji:"ikōru",francais:"égal à",categorie:["nom"]},{id:293,JLPTLevel:"N1",kanji:"",hiragana:"いざ",Romaji:"iza",francais:"bien, maintenant",categorie:["adverbes"]},{id:294,JLPTLevel:"N2",kanji:"勇ましい",hiragana:"いさましい",Romaji:"isamashii",francais:"courageux",categorie:["adjectifs"]},{id:295,JLPTLevel:"N5",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"pierre, roc",categorie:["nature et environnement"]},{id:296,JLPTLevel:"N3",kanji:"医師",hiragana:"いし",Romaji:"ishi",francais:"médecin",categorie:["santé et bien-être"]},{id:297,JLPTLevel:"N3",kanji:"意志",hiragana:"いし",Romaji:"ishi",francais:"volonté",categorie:["émotions et sentiments"]},{id:298,JLPTLevel:"N3",kanji:"意思",hiragana:"いし",Romaji:"ishi",francais:"intention, but",categorie:["émotions et sentiments"]},{id:299,JLPTLevel:"N3",kanji:"維持",hiragana:"いじ",Romaji:"iji",francais:"conservation, entretien",categorie:["nom"]},{id:300,JLPTLevel:"N1",kanji:"意地",hiragana:"いじ",Romaji:"iji",francais:"obstination, volonté",categorie:["émotions et sentiments"]},{id:301,JLPTLevel:"N3",kanji:"意識",hiragana:"いしき",Romaji:"ishiki",francais:"conscience",categorie:["nom"]},{id:302,JLPTLevel:"N2",kanji:"意識する",hiragana:"いしきする",Romaji:"ishiki suru",francais:"avoir conscience",categorie:["verbes","verbes d’action"]},{id:303,JLPTLevel:"N4",kanji:"苛める",hiragana:"いじめる",Romaji:"ijimeru",francais:"embêter",categorie:["verbes","verbes d’action"]},{id:304,JLPTLevel:"N5",kanji:"医者",hiragana:"いしゃ",Romaji:"isha",francais:"docteur, médecin",categorie:["nom"]},{id:305,JLPTLevel:"N1",kanji:"移住",hiragana:"いじゅう",Romaji:"ijuu",francais:"migration, immigration",categorie:["nom"]},{id:306,JLPTLevel:"N1",kanji:"移住する",hiragana:"いじゅうする",Romaji:"ijuu suru",francais:"migrer, immigrer",categorie:["verbes"]},{id:307,JLPTLevel:"N1",kanji:"衣装",hiragana:"いしょう",Romaji:"ishou",francais:"vêtement, costume",categorie:["nom"]},{id:308,JLPTLevel:"N4",kanji:"以上",hiragana:"いじょう",Romaji:"ijou",francais:"plus de, au-dessus-de, davantage",categorie:["adjectifs"]},{id:309,JLPTLevel:"N3",kanji:"異常",hiragana:"いじょう",Romaji:"ijou",francais:"étrange, anormal",categorie:["adjectifs"]},{id:310,JLPTLevel:"N2",kanji:"衣食住",hiragana:"いしょくじゅう",Romaji:"ishokujyuu",francais:"nécessités de la vie (des vêtements, de la nourriture et un abri)",categorie:["nom"]},{id:311,JLPTLevel:"N1",kanji:"弄る",hiragana:"いじる",Romaji:"ijiru",francais:"manier, toucher, trifouiller",categorie:["verbes"]},{id:312,JLPTLevel:"N2",kanji:"意地悪",hiragana:"いじわる",Romaji:"ijiwaru",francais:"malicieux, désobligeant",categorie:["adjectifs"]},{id:313,JLPTLevel:"N5",kanji:"椅子",hiragana:"いす",Romaji:"isu",francais:"chaise",categorie:["nom"]},{id:314,JLPTLevel:"N3",kanji:"泉",hiragana:"いずみ",Romaji:"izumi",francais:"fontaine, source",categorie:["nom"]},{id:315,JLPTLevel:"N3",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"où ?, qui ?, quoi ?",categorie:["adjectifs"]},{id:316,JLPTLevel:"N2",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"un autre jour, une autre fois",categorie:["adjectifs"]},{id:317,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"sexe opposé",categorie:["nom"]},{id:318,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"de sexe opposé",categorie:["nom"]},{id:319,JLPTLevel:"N1",kanji:"遺跡",hiragana:"いせき",Romaji:"iseki",francais:"ruine, vestige",categorie:["nom"]},{id:320,JLPTLevel:"N3",kanji:"以前",hiragana:"いぜん",Romaji:"izen",francais:"auparavant, autrefois",categorie:["adjectifs"]},{id:321,JLPTLevel:"N1",kanji:"依然",hiragana:"いぜん",Romaji:"izen",francais:"comme toujours, comme jusqu'à présent",categorie:["adjectifs"]},{id:322,JLPTLevel:"N5",kanji:"忙しい",hiragana:"いそがしい",Romaji:"isogashii",francais:"occupé",categorie:["adjectifs"]},{id:323,JLPTLevel:"N4",kanji:"急ぐ",hiragana:"いそぐ",Romaji:"isogu",francais:"se dépêcher",categorie:["verbes"]},{id:324,JLPTLevel:"N1",kanji:"依存",hiragana:"いぞん",Romaji:"izon",francais:"dépendance",categorie:["nom"]},{id:325,JLPTLevel:"N3",kanji:"板",hiragana:"いた",Romaji:"ita",francais:"planche, plaque",categorie:["nom"]},{id:326,JLPTLevel:"N5",kanji:"痛い",hiragana:"いたい",Romaji:"itai",francais:"douloureux",categorie:["adjectifs"]},{id:327,JLPTLevel:"N3",kanji:"偉大",hiragana:"いだい",Romaji:"idai",francais:"grandiose",categorie:["adjectifs"]},{id:328,JLPTLevel:"N1",kanji:"委託",hiragana:"いたく",Romaji:"itaku",francais:"consignation, le fait de confier quelque chose",categorie:["nom"]},{id:329,JLPTLevel:"N1",kanji:"委託する",hiragana:"いたくする",Romaji:"itaku suru",francais:"consigner, confier",categorie:["verbes"]},{id:330,JLPTLevel:"N4",kanji:"致す",hiragana:"いたす",Romaji:"itasu",francais:"faire (hum)",categorie:["verbes"]},{id:331,JLPTLevel:"N3",kanji:"悪戯",hiragana:"いたずら",Romaji:"itazura",francais:"mauvaise blague, sale tour",categorie:["nom"]},{id:332,JLPTLevel:"N1",kanji:"頂",hiragana:"いただき",Romaji:"itadaki",francais:"cime, sommet, pointe",categorie:["nom"]},{id:333,JLPTLevel:"N5",kanji:"戴きます",hiragana:"いただきます",Romaji:"itadakimasu",francais:"merci pour ce repas (expression de gratitude)",categorie:["expression"]},{id:334,JLPTLevel:"N4",kanji:"戴く",hiragana:"いただく",Romaji:"itadaku",francais:"recevoir (hum), manger ou boire",categorie:["verbes"]},{id:335,JLPTLevel:"N1",kanji:"至って",hiragana:"いたって",Romaji:"itatte",francais:"extrêmement, énormément",categorie:["adverbes"]},{id:336,JLPTLevel:"N3",kanji:"痛み",hiragana:"いたみ",Romaji:"itami",francais:"douleur",categorie:["nom"]},{id:337,JLPTLevel:"N2",kanji:"痛む",hiragana:"いたむ",Romaji:"itamuu",francais:"être blessé, subir une douleur",categorie:["verbes"]},{id:338,JLPTLevel:"N1",kanji:"痛める",hiragana:"いためる",Romaji:"itameru",francais:"se faire mal",categorie:["verbes"]},{id:339,JLPTLevel:"N1",kanji:"炒める",hiragana:"いためる",Romaji:"itameru",francais:"faire revenir (cuisine), cuisiner, faire frire",categorie:["verbes"]},{id:340,JLPTLevel:"N3",kanji:"至る",hiragana:"いたる",Romaji:"itaru",francais:"arriver à, mener à, conduire à",categorie:["verbes"]},{id:341,JLPTLevel:"N1",kanji:"労る",hiragana:"いたわる",Romaji:"itawaru",francais:"être plein d'attention pour, consoler, compatir",categorie:["verbes"]},{id:342,JLPTLevel:"N5",kanji:"一",hiragana:"いち",Romaji:"ichi",francais:"un",categorie:["nombres et quantificateurs"]},{id:343,JLPTLevel:"N3",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"foire, marché",categorie:["nom"]},{id:344,JLPTLevel:"N2",kanji:"位置",hiragana:"いち",Romaji:"ichi",francais:"place, position",categorie:["nom"]},{id:345,JLPTLevel:"N2",kanji:"一々",hiragana:"いちいち",Romaji:"ichiichi",francais:"un par un, séparément",categorie:["adverbes","nombres et quantificateurs"]}],zi={vocabulaire:Ow},Mw={color:localStorage.getItem("color")||"#F75D48"},Ew={mode:localStorage.getItem("mode")||"light",fontColor:localStorage.getItem("mode")==="light"?"#353535":"#F7F7F2",bgColor:localStorage.getItem("mode")==="light"?"#353535":"#F7F7F2",mainBgColor:localStorage.getItem("mode")==="light"?"#F7F7F2":"#353535"},Hw={searchText:"",jlptLevel:"",kanaType:"",vocabulaireCategorie:[]},Dw={exerciceModeDeJeu:"",exerciceDifficulté:"",exerciceNumber:0,exerciceResult:[],exerciceTimer:5,exerciceTimerActive:!1,exerciceTypeDeKana:"normal"},Jw={totalTimer:0,totalfaute:0,totalreussite:0,questionsIncorrectes:[]},zw={kanji:Wo.kanji.length,vocabulaire:zi.vocabulaire.length},Fw={kanji:[],vocabulaire:[],hiragana:[],katakana:[],nombre:[]},hm=Ii({name:"color",initialState:Mw,reducers:{setColor:(e,n)=>{e.color=n.payload,localStorage.setItem("color",n.payload)}}}),vm=Ii({name:"mode",initialState:Ew,reducers:{setMode:(e,n)=>{e.mode=n.payload,n.payload==="light"?(e.fontColor="#353535",e.bgColor="#353535",e.mainBgColor="#F7F7F2"):(e.fontColor="#F7F7F2",e.bgColor="#F7F7F2",e.mainBgColor="#353535"),localStorage.setItem("mode",n.payload)}}}),wm=Ii({name:"search",initialState:Hw,reducers:{setSearchText:(e,n)=>{e.searchText=n.payload},setJlptLevel:(e,n)=>{e.jlptLevel=n.payload},setkanaType:(e,n)=>{e.kanaType=n.payload},setVocabulaireCategorie:(e,n)=>{e.vocabulaireCategorie=n.payload}}}),Rm=Ii({name:"parametersExercice",initialState:Dw,reducers:{setExerciceModeDeJeu:(e,n)=>{e.exerciceModeDeJeu=n.payload},setExerciceDifficulté:(e,n)=>{e.exerciceDifficulté=n.payload},setExerciceNumber:(e,n)=>{e.exerciceNumber=n.payload},setExerciceResult:(e,n)=>{e.exerciceResult=n.payload},setExerciceTimer:(e,n)=>{e.exerciceTimer=n.payload},setExerciceTimerActive:(e,n)=>{e.exerciceTimerActive=n.payload},setExerciceTypeDeKana:(e,n)=>{e.exerciceTypeDeKana=n.payload}}}),jm=Ii({name:"exercice",initialState:Jw,reducers:{setTotalTimer:(e,n)=>{e.totalTimer=n.payload},setTotalfaute:(e,n)=>{e.totalfaute=n.payload},setTotalreussite:(e,n)=>{e.totalreussite=n.payload},addQuestionIncorrecte:(e,n)=>{e.questionsIncorrectes.push(n.payload)},resetQuestionsIncorrectes:e=>{e.questionsIncorrectes=[]}}}),ym=Ii({name:"totalData",initialState:zw,reducers:{setTotalData:(e,n)=>{e.kanji=n.payload.kanji,e.vocabulaire=n.payload.vocabulaire}}}),xm=Ii({name:"dataChoice",initialState:Fw,reducers:{toggleKanji:(e,n)=>{const i=n.payload,a=e.kanji.findIndex(t=>t.id===i.id);a>=0?e.kanji.splice(a,1):e.kanji.push(i)},toggleVocabulaire:(e,n)=>{const i=n.payload,a=e.vocabulaire.findIndex(t=>t.id===i.id);a>=0?e.vocabulaire.splice(a,1):e.vocabulaire.push(i)},toggleKatakana:(e,n)=>{const i=n.payload,a=e.katakana.findIndex(t=>t.id===i.id);a>=0?e.katakana.splice(a,1):e.katakana.push(i)},toggleNombre:(e,n)=>{const i=n.payload,a=e.nombre.findIndex(t=>t.id===i.id);a>=0?e.nombre.splice(a,1):e.nombre.push(i)},toggleHiragana:(e,n)=>{const i=n.payload,a=e.hiragana.findIndex(t=>t.id===i.id);a>=0?e.hiragana.splice(a,1):e.hiragana.push(i)},resetKanji:e=>{e.kanji=[]},resetVocabulaire:e=>{e.vocabulaire=[]},resetKatakana:e=>{e.katakana=[]},resetNombre:e=>{e.nombre=[]},resetHiragana:e=>{e.hiragana=[]}}}),{setColor:_w}=hm.actions,{setMode:Aw}=vm.actions,{setSearchText:qc,setJlptLevel:Bw,setkanaType:Zc,setVocabulaireCategorie:Iw}=wm.actions,{setExerciceModeDeJeu:gn,setExerciceDifficulté:Cn,setExerciceNumber:Ln,setExerciceResult:gx,setExerciceTimer:Vw,setExerciceTimerActive:Ww,setExerciceTypeDeKana:xi}=Rm.actions,{setTotalTimer:Wu,setTotalfaute:pr,setTotalreussite:fr,addQuestionIncorrecte:Uw,resetQuestionsIncorrectes:Qw}=jm.actions;ym.actions;const{toggleKanji:qw,toggleVocabulaire:Zw,toggleKatakana:Yw,toggleNombre:px,toggleHiragana:Gw,resetKanji:Xw,resetVocabulaire:eR,resetKatakana:nR,resetNombre:iR,resetHiragana:aR}=xm.actions,tR=jw({reducer:{color:hm.reducer,mode:vm.reducer,search:wm.reducer,parametersExercice:Rm.reducer,exercice:jm.reducer,totalData:ym.reducer,dataChoice:xm.reducer}}),rR="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",oR="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23353535'/%3e%3c/svg%3e",lR="data:image/svg+xml,%3csvg%20width='21'%20height='36'%20viewBox='0%200%2021%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8947%2017.9406C13.8947%2024.7368%2018.2067%2031.2265%2020.5405%2034.2413C21.0748%2034.9314%2020.581%2035.9768%2019.7114%2035.9023C8.89085%2034.9749%200%2027.5466%200%2017.9406C0%208.68938%208.42852%201.01969%2019.2233%200.0937448C20.0788%200.0203678%2020.576%201.03601%2020.0709%201.73032C17.905%204.70778%2013.8947%2011.1391%2013.8947%2017.9406Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",sR=j.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11vw;
    @media screen and (max-width: 560px) {
        width: 30vw;
    }
`,Uu=j.button`
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
`;function cR(){const e=He(),[n,i]=K.useState(localStorage.getItem("mode")||"light"),a=o=>{i(o),e(Aw(o))},{bgColor:t}=P(o=>o.mode),{color:r}=P(o=>o.color);return l.jsxs(sR,{children:[l.jsx(Uu,{$bgColor:t,$color:r,$isActive:n==="light",onClick:()=>a("light"),children:l.jsx("img",{src:n==="light"?rR:oR})}),l.jsx(Uu,{$bgColor:t,$color:r,$isActive:n==="dark",onClick:()=>a("dark"),children:l.jsx("img",{src:lR})})]})}const dR="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13422C0%204.13422%200.863862%208.26845%2014.3977%208.26845C27.9315%208.26845%2028.7954%204.13422%2028.7954%204.13422V31.6958C28.7954%2031.6958%2027.7876%2035.83%2014.3977%2035.83C1.00784%2035.83%200%2031.6958%200%2031.6958V4.13422Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23353535'%20stroke='%23E1E1DE'/%3e%3cpath%20d='M13.2459%208.40626C13.2459%2012.1356%2013.2459%2015.1588%2011.3742%2015.1588C9.5025%2015.1588%209.5025%2012.1356%209.5025%208.40626C9.5025%204.67692%2010.3405%201.65369%2011.3742%201.65369C12.4079%201.65369%2013.2459%204.67692%2013.2459%208.40626Z'%20fill='%23353535'/%3e%3cpath%20d='M19.8688%207.0282C19.8688%2010.1487%2019.8688%2012.6783%2018.573%2012.6783C17.2772%2012.6783%2017.2772%2010.1487%2017.2772%207.0282C17.2772%203.90773%2017.8574%201.37808%2018.573%201.37808C19.2887%201.37808%2019.8688%203.90773%2019.8688%207.0282Z'%20fill='%23353535'/%3e%3c/svg%3e",uR="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13379C0%204.13379%200.863862%208.26802%2014.3977%208.26802C27.9315%208.26802%2028.7954%204.13379%2028.7954%204.13379V31.6953C28.7954%2031.6953%2027.7876%2035.8296%2014.3977%2035.8296C1.00784%2035.8296%200%2031.6953%200%2031.6953V4.13379Z'%20fill='%23353535'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23F7F7F2'%20stroke='%231E1E1E'/%3e%3cpath%20d='M13.2459%208.4059C13.2459%2012.1352%2013.2459%2015.1585%2011.3742%2015.1585C9.5025%2015.1585%209.5025%2012.1352%209.5025%208.4059C9.5025%204.67655%2010.3405%201.65332%2011.3742%201.65332C12.4079%201.65332%2013.2459%204.67655%2013.2459%208.4059Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M19.8688%207.02805C19.8688%2010.1485%2019.8688%2012.6782%2018.573%2012.6782C17.2772%2012.6782%2017.2772%2010.1485%2017.2772%207.02805C17.2772%203.90757%2017.8574%201.37793%2018.573%201.37793C19.2887%201.37793%2019.8688%203.90757%2019.8688%207.02805Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",gR=j.div`
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
    
`,pR=j(wi)`
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
`;function fR(){const e=P(i=>i.mode),{bgColor:n}=P(i=>i.mode);return l.jsxs(gR,{children:[l.jsx(cR,{}),l.jsx(pR,{$bgColor:n,to:"/color",children:l.jsx("img",{src:e.mode==="light"?dR:uR})})]})}const mR=()=>{const{mainBgColor:e}=P(n=>n.mode);return K.useEffect(()=>{document.body.style.backgroundColor=e},[e]),null};function hR(){const e=ge(),n=!e.pathname.startsWith("/choisir-ses/")&&!e.pathname.startsWith("/Exercices/"),i=!e.pathname.startsWith("/Exercices/");return l.jsxs("div",{className:"App",children:[n&&l.jsx(Q2,{}),i&&l.jsx(mR,{}),i&&l.jsx(fR,{})]})}const vR=j.div`
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
`,wR=()=>{const{fontColor:e}=P(i=>i.mode),{color:n}=P(i=>i.color);return l.jsxs(vR,{$fontColor:e,$color:n,className:"error404-container",children:[l.jsx("h1",{children:"404"}),l.jsx("p",{children:"Je crois que tu t'es perdu là"}),l.jsx(wi,{to:"/",children:"Retour à l'accueil"})]})},RR=j.div`
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
`,jR=j.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        margin-top: 10vw;
    }
`,Ui=j.button`
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
`;function yR(){const e=He(),{color:n}=P(s=>s.color),{bgColor:i,fontColor:a}=P(s=>s.mode),[,t]=K.useState(n),r=s=>{t(s),e(_w(s))};let o=vi();return l.jsxs(RR,{$fontColor:a,$bgColor:i,children:[l.jsx(wi,{style:{backgroundColor:n},onClick:()=>o(-1),children:"Retour"}),l.jsx("h1",{style:{color:n},children:"ColorCustome"}),l.jsxs(jR,{children:[l.jsx(Ui,{$bgColor:i,onClick:()=>r("#F75D48"),style:{backgroundColor:"#F75D48"}}),l.jsx(Ui,{$bgColor:i,onClick:()=>r("#5448F7"),style:{backgroundColor:"#5448F7"}}),l.jsx(Ui,{$bgColor:i,onClick:()=>r("#FF0000"),style:{backgroundColor:"#FF0000"}}),l.jsx(Ui,{$bgColor:i,onClick:()=>r("#42e55b"),style:{backgroundColor:"#42e55b"}}),l.jsx(Ui,{$bgColor:i,onClick:()=>r("#FF4BC9"),style:{backgroundColor:"#FF4BC9"}}),l.jsx(Ui,{$bgColor:i,onClick:()=>r("#48B4F7"),style:{backgroundColor:"#48B4F7"}})]})]})}const xR=j.div`
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
`,kR=j.div`
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
`,PR=j.div`
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
`,CR=j.div`
    display: flex;
    width: 76vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        width: calc(90% + 6vw);
        flex-direction: column;
        gap: 3vw;
    }
`,LR=j.div`
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
`,KR=j.div`
    display: flex;
    width: 100%;
    height: 6vw;
    gap: 0.5vw;
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        height: 15vw;
        gap: 1.5vw;
    }
`,bR=j.h3`
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
`,TR=j.h3`
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
`,$R=j.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
    @media screen and (max-width: 560px) {
        height: 13vw;
        gap: 1.5vw;
    }
`,SR=j.span`
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
`,NR=j.h4`
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
`,OR=j.p`
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
`,MR=j.div`
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
`,ER=j.div`
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
`,HR=j.h3`
    font-size: 2.5vw;
    height: 40%;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,DR=j.h3`
    font-size: 2vw;
    height: 40%;
    color: ${e=>e.$color};
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`,mr=j.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 3.5vw;
    @media screen and (max-width: 560px) {
        height: 10vw;
        gap: 1.5vw;
    }
`,JR=j.span`
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
`,zR=j.span`
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
`,FR=j.span`
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
`,_R=j.span`
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
`,AR=j.span`
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
`,BR=j.span`
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
`,IR=j.span`
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
`,VR=j.span`
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
`;function WR(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(o=>o.mode),{color:a}=P(o=>o.color),t=P(o=>o.totalData.kanji),r=P(o=>o.totalData.vocabulaire);return l.jsxs(xR,{children:[l.jsxs(kR,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("h1",{children:"NIHONGO"}),l.jsxs(PR,{$color:a,$mainBgColor:i,children:[l.jsx("span",{children:"日"}),l.jsx("span",{children:"本"}),l.jsx("span",{children:"語"})]})]}),l.jsxs(CR,{children:[l.jsxs(LR,{$bgColor:e,children:[l.jsxs(KR,{$fontColor:n,children:[l.jsx(bR,{$mainBgColor:i,children:"Actualité"}),l.jsx(TR,{$mainBgColor:i,$color:a,children:"ニュース"})]}),l.jsxs($R,{children:[l.jsx(SR,{$mainBgColor:i,$color:a,children:"18/08"}),l.jsx(NR,{$mainBgColor:i,$fontColor:n,children:"Lancement de NIHONGO v.01w39a"})]}),l.jsx(OR,{$mainBgColor:i,$fontColor:n,children:"v01w39a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque. Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor. Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet."})]}),l.jsxs(MR,{$bgColor:e,children:[l.jsxs(ER,{$mainBgColor:i,$fontColor:n,children:[l.jsx(HR,{children:"Avancement"}),l.jsx(DR,{$color:a,children:"アドバンス"})]}),l.jsxs(mr,{children:[l.jsx(JR,{$mainBgColor:i,$fontColor:n,children:"Katakana"}),l.jsx(zR,{$mainBgColor:i,$color:a,children:"90%"})]}),l.jsxs(mr,{children:[l.jsx(FR,{$mainBgColor:i,$fontColor:n,children:"Nombre de vocabulaire"}),l.jsxs(_R,{$mainBgColor:i,$color:a,children:[r,"/?"]})]}),l.jsxs(mr,{children:[l.jsx(AR,{$mainBgColor:i,$fontColor:n,children:"Nombre de kanji"}),l.jsxs(BR,{$mainBgColor:i,$color:a,children:[t,"/2000"]})]}),l.jsxs(mr,{children:[l.jsx(IR,{$mainBgColor:i,$fontColor:n,children:"Hiragana"}),l.jsx(VR,{$mainBgColor:i,$color:a,children:"80%"})]})]})]})]})}const km=({color:e,width:n="5vw",height:i="5vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 43 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M39 4L4 36L39 68",stroke:e,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round"})});km.propTypes={color:M.string,width:M.string,height:M.string};const Pm=({color:e,mainBgColor:n,width:i="5vw",height:a="5vw"})=>l.jsxs("svg",{width:i,height:a,viewBox:"0 0 74 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{y:"2",width:"36",height:"68",fill:e}),l.jsx("rect",{x:"41",y:"18",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"60",y:"18",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"29",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"8",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"38",y:"20",width:"36",height:"50",fill:e}),l.jsx("path",{d:"M54 61C54 59.8954 54.8954 59 56 59C57.1046 59 58 59.8954 58 61V70H54V61Z",fill:n}),l.jsx("path",{d:"M16 61C16 59.8954 16.8954 59 18 59C19.1046 59 20 59.8954 20 61V70H16V61Z",fill:n}),l.jsx("rect",{x:"4",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"48",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"48",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"54",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"54",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"66",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"66",y:"27",width:"4",height:"11",fill:n})]});Pm.propTypes={color:M.string,mainBgColor:M.string,width:M.string,height:M.string};const UR=j.div`
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
`,QR=j.div`
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
`,qR=j(wi)`
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
`,ZR=j(wi)`
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
`,YR=j.div`
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
`,GR=j.div`
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
`,XR=j.div`
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
    
`,ej=j.div`
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
`;function Sa(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(u=>u.mode),{color:a}=P(u=>u.color),t=ge(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};case"/Dictionnaire/Kanji":case"/Dictionnaire/Hiragana":case"/Dictionnaire/Katakana":case"/Dictionnaire/Vocabulaire":case"/Dictionnaire/Nombres":return{titleFurigana1:"じ",titleFurigana2:"しょ",titleKanji1:"辞",titleKanji2:"書",titleFr:"Dictionnaire"};default:return"Accueil"}})();let s=vi();const c=window.innerWidth<560?"14vw":"5vw",d=()=>t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":window.innerWidth>560?"25vw":"9vw";return l.jsxs(UR,{children:[l.jsxs(QR,{$bgColor:e,children:[l.jsxs(qR,{$mainBgColor:i,$fontColor:n,onClick:()=>s(-1),children:[l.jsx(km,{width:c,height:c,color:a}),l.jsxs("div",{children:[l.jsx("span",{children:"もど"}),l.jsx("span",{children:"戻る"}),l.jsx("span",{children:"Retour"})]})]}),l.jsxs(ZR,{$mainBgColor:i,$fontColor:n,to:"/",children:[l.jsx(Pm,{width:c,height:c,color:a,mainBgColor:i}),l.jsxs("div",{children:[l.jsx("span",{children:"サイトホーム"}),l.jsx("span",{children:"Accueil du site"})]})]})]}),l.jsx(YR,{$bgColor:e,children:l.jsxs(GR,{$mainBgColor:i,$fontColor:n,children:[l.jsxs(XR,{$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":d},children:o.titleFurigana2})]}),l.jsxs(ej,{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":d},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})})]})}const Cm=({color:e,width:n="4vw",height:i="5vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 74 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M42 5C42 2.23858 39.7614 -1.20706e-07 37 0C34.2386 1.20706e-07 32 2.23858 32 5L42 5ZM33.4645 93.5355C35.4171 95.4882 38.5829 95.4882 40.5355 93.5355L72.3553 61.7157C74.308 59.7631 74.308 56.5973 72.3553 54.6447C70.4027 52.692 67.2369 52.692 65.2843 54.6447L37 82.9289L8.71573 54.6447C6.76311 52.692 3.59728 52.692 1.64466 54.6447C-0.307958 56.5973 -0.307958 59.7631 1.64466 61.7157L33.4645 93.5355ZM32 5L32 90L42 90L42 5L32 5Z",fill:e})});Cm.propTypes={color:M.string,width:M.string,height:M.string};const nj=j.div`
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
`,ij=j.div`
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
`,aj=j.div`
    display: flex;
    width: 100%;
    gap: 0.6vw;
    height: 5vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 40vw;
        gap: 1.5vw;
    }
`,tj=j.span`
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
`,rj=j.div`
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
`,oj=j.div`
    display: flex;
    height: 16vw;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        height: 50vw;
    }
    
`,lj=j(wi)`
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
`,sj=j.div`
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
`,cj=j.div`
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
`,dj=j.div`
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
`,uj=j.div`
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
`,gj=j.div`
    text-align:center;
    font-size: 1.5vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,pj=j.div`
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
`,fj=j.div`
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
`;function _t(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(c=>c.mode),{color:a}=P(c=>c.color),t=ge(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};default:return"Accueil"}})(),s=window.innerWidth<560?"10vw":"5vw";return l.jsxs(nj,{children:[l.jsxs(ij,{$bgColor:e,children:[l.jsxs(aj,{children:[l.jsx(tj,{$mainBgColor:i,$fontColor:n,children:"Dictionnaire"}),l.jsxs(rj,{$color:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleFurigana2})]}),l.jsxs("div",{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})]}),l.jsx(oj,{children:l.jsxs(lj,{to:`/Dictionnaire/${o.titleFr}`,$mainBgColor:i,$fontColor:n,children:[l.jsxs(sj,{$color:a,children:[l.jsx("span",{children:"じ"}),l.jsx("span",{children:"しょ"})]}),l.jsxs(cj,{children:[l.jsx("span",{children:"辞"}),l.jsx("span",{children:"書"})]})]})})]}),l.jsx(dj,{$bgColor:e,children:l.jsxs(uj,{$mainBgColor:i,$fontColor:n,children:[l.jsx(gj,{children:"Exercices"}),l.jsxs("div",{children:[l.jsxs(pj,{$color:a,children:[l.jsx("span",{children:"えん"}),l.jsx("span",{children:"しゅう"})]}),l.jsxs(fj,{children:[l.jsx("span",{children:"演"}),l.jsx("span",{children:"習"})]})]}),l.jsx(Cm,{width:s,height:s,color:a})]})})]})}const mj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%239ED7FF'/%3e%3c/svg%3e",hj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='30.6667'%20y='30.6666'%20width='30.6667'%20height='30.6667'%20fill='%23FFC370'/%3e%3cpath%20d='M0%205C0%202.23857%202.23858%200%205%200H30.6667V30.6667H0V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%2061.3334H91.9999V87C91.9999%2089.7615%2089.7613%2092%2086.9999%2092H61.3333V61.3334Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%200H86.9999C89.7613%200%2091.9999%202.23858%2091.9999%205V30.6667H61.3333V0Z'%20fill='%23FFC370'/%3e%3c/svg%3e",vj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2063.4054H23.5946C26.356%2063.4054%2028.5946%2065.644%2028.5946%2068.4054V92H0V63.4054Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M63.4054%200H92V28.5946H68.4054C65.644%2028.5946%2063.4054%2026.356%2063.4054%2023.5946V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",As=({color:e,width:n="6vw",height:i="4vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 109 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.99999 9L54.5 44L100 9",stroke:e,strokeWidth:"17",strokeLinecap:"round",strokeLinejoin:"round"})});As.propTypes={color:M.string,width:M.string,height:M.string};const wj=j.div`
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
`,Rj=j.div`
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
`,jj=j.div`
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
`,yj=j.div`
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
`,xj=j.button`
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
`,kj=j.div`
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
`,Pj=j.div`
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
`,Cj=j.div`
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
`,Lj=j.div`
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
`,Kj=j.div`
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
`,bj=j.div`
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
`,Tj=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
    @media screen and (max-width: 560px) {
        height: 100%;
        gap: 1.5vw;
    }
`,$j=j.button`
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
`,Sj=j.div`
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
`,Nj=j.div`
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
`,Hr=({difficulte:e,icon:n,children:i,selectedDifficulte:a,setSelectedDifficulte:t})=>{const r=He(),{fontColor:o,mainBgColor:s}=P(f=>f.mode),{color:c}=P(f=>f.color),d=a===e,[u,p]=K.useState(d?s:c),[h,g]=K.useState(d?c:s),[w,y]=K.useState(d?c:"#F7F7F2"),[x,v]=K.useState(d?s:o),m=()=>{t(e),r(Cn(e))};return K.useEffect(()=>{p(d?s:c),g(d?c:s),y(d?c:"#F7F7F2"),v(d?s:o)},[d,s,c,o]),l.jsxs($j,{$mainBgColor:h,$fontColor:x,onClick:m,children:[l.jsxs(Sj,{children:[l.jsx("img",{src:n}),l.jsx("span",{children:e})]}),l.jsx(Nj,{$mainBgColor:w,$color:u,children:i})]})};Hr.propTypes={difficulte:M.string.isRequired,icon:M.string.isRequired,children:M.node,selectedDifficulte:M.string.isRequired,setSelectedDifficulte:M.func.isRequired};function At(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(v=>v.mode),{color:a}=P(v=>v.color),t=He(),[r,o]=K.useState(P(v=>v.parametersExercice.exerciceTimer)),[s,c]=K.useState(P(v=>v.parametersExercice.exerciceTimerActive)),[d,u]=K.useState("#858585"),[p,h]=K.useState("");K.useEffect(()=>{t(Vw(r))},[r,t]);const g=()=>{const v=!s;c(v),t(Ww(v)),u(v?a:"#858585")},w=()=>{r<15&&o(r+1)},y=()=>{r>1&&o(r-1)},x=window.innerWidth<560?"15vw":"5vw";return l.jsxs(wj,{id:"SectionDifficulte",children:[l.jsx(Rj,{$bgColor:e,children:l.jsxs(jj,{$mainBgColor:i,$fontColor:n,children:[l.jsx("span",{children:"Temps par question"}),l.jsxs(yj,{$color:a,children:[l.jsx("button",{onClick:w,children:l.jsx(As,{width:x,height:x,color:a})}),l.jsxs("p",{children:[r,l.jsx("span",{children:"S"})]}),l.jsx("button",{onClick:y,children:l.jsx(As,{width:x,height:x,color:a})})]}),l.jsx(xj,{onClick:g,$color:d,children:s?"Activer":"Désactiver"})]})}),l.jsxs(kj,{$bgColor:e,children:[l.jsxs(Pj,{children:[l.jsx(Cj,{$mainBgColor:i,$fontColor:n,children:"Difficulté"}),l.jsxs(Lj,{$color:a,children:[l.jsxs(Kj,{children:[l.jsx("span",{children:"こん"}),l.jsx("span",{children:"なん"})]}),l.jsxs(bj,{children:[l.jsx("span",{children:"困"}),l.jsx("span",{children:"難"})]})]})]}),l.jsxs(Tj,{children:[l.jsxs(Hr,{difficulte:"Débutant",icon:mj,selectedDifficulte:p,setSelectedDifficulte:h,children:[l.jsx("span",{children:"Hiragana/Katakana"}),l.jsx("span",{children:"Rōmaji"})]}),l.jsx(Hr,{difficulte:"Intermédiaire",icon:hj,selectedDifficulte:p,setSelectedDifficulte:h,children:l.jsx("span",{children:"Hiragana/Katakana"})}),l.jsx(Hr,{difficulte:"Confirmer",icon:vj,selectedDifficulte:p,setSelectedDifficulte:h})]})]})]})}const Uo="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0544'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0544)'%20fill='%23F7F7F2'/%3e%3crect%20x='14.5542'%20y='48.9956'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9956)'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Oj=j.div`
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
`,bl=j.button`
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
`,Tl=j.div`
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
`,$l=j.span`
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
`,Mj=j.div`
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
`,Ej=j.span`
    font-size: 8vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 20vw;
    }
`,Hj=j.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        bottom: 5vw;
        left: 5vw;
    }
`,Dj=j.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 10vw;
        width: 90%;
    }
`,Jj=j.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,zj=j.div`
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
`,Fj=j.button`
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
`,_j=j.button`
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
`;function Bt(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(f=>f.mode),{color:a}=P(f=>f.color),t=He(),r=ge(),[o,s]=K.useState(null),d=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),u=vi(),p=f=>{t(gn(f)),s(f)},h=f=>o===f?a:i,g=P(f=>f.parametersExercice.exerciceNumber),w=g===0,y=f=>{if(document.querySelector(".Alert").style.display="block",g===0){x(".AlertNbQuestion",w);return}else t(gn(f)),u(`/choisir-ses/${d.modeTitle}`),window.scrollTo(0,0)},x=(f,R)=>{document.querySelector(f).style.display=R?"flex":"none"},v=()=>{document.querySelector(".NbAlert").style.display="none",x(".NbAlertNbQuestion",!1)},m=f=>()=>{const R=document.getElementById(`Section${f}`);R?(document.querySelector(".NbAlert").style.display="none",window.innerWidth<=560?R.scrollIntoView({behavior:"smooth",block:"start"}):R.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${f}`)};return l.jsxs(Oj,{id:"SectionModeDeJeu",children:[l.jsx(Jj,{className:"NbAlert",children:l.jsxs(zj,{children:[l.jsx(Fj,{onClick:v,$color:a,children:l.jsx("img",{src:Uo})}),l.jsxs(_j,{onClick:m("NombreDeQuestions"),className:"NbAlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"nombre de questions"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),l.jsx("span",{})]})]})]})}),l.jsx(bl,{$bgColor:e,onClick:()=>p("Aléatoire"),children:l.jsxs(Tl,{$mainBgColor:h("Aléatoire"),$fontColor:n,children:[l.jsx($l,{$color:a,children:"Mode de jeu"}),l.jsxs(Mj,{children:[l.jsx("span",{children:"ランダム"}),l.jsx("span",{children:"Aléatoire"})]})]})}),r.pathname.includes("/Vocabulaire")||r.pathname.includes("/Kanji")?l.jsx(bl,{$bgColor:e,onClick:()=>p("N5"),children:l.jsxs(Tl,{$mainBgColor:h("N5"),$fontColor:n,children:[l.jsx($l,{$color:a,children:"Mode de jeu"}),l.jsx(Ej,{children:"N5"}),l.jsx(Hj,{children:"JLPT"})]})}):null,l.jsx(bl,{$bgColor:e,onClick:()=>y("Choisir ses questions"),children:l.jsxs(Tl,{$mainBgColor:h("Choisir ses questions"),$fontColor:n,children:[l.jsx($l,{$color:a,children:"Mode de jeu"}),l.jsxs(Dj,{children:["Choisir ses ",d.modeTitle]})]})})]})}const Aj=j.div`
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
`,Bj=j.span`
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
`,Ij=j.div`
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
`,Vj=j.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 50%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;   
    }
`,Qu=j.button`
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
`,Wj=j.button`
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
`;function It(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(h=>h.mode),{color:a}=P(h=>h.color),t=He(),r=ge(),[o,s]=K.useState(null),d=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),u=h=>{t(Ln(h)),s(h)},p=h=>o===h?a:i;return l.jsxs(Aj,{$bgColor:e,id:"SectionNombreDeQuestions",children:[l.jsxs(Bj,{$color:a,$fontColor:n,children:["Nombre de ",d.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsxs(Ij,{children:[l.jsxs(Vj,{children:[l.jsx(Qu,{$fontColor:n,$mainBgColor:p(10),onClick:()=>u(10),children:"10"}),l.jsx(Qu,{$fontColor:n,$mainBgColor:p(20),onClick:()=>u(20),children:"20"})]}),l.jsx(Wj,{$fontColor:n,$mainBgColor:p(30),onClick:()=>u(30),children:"30"})]})]})}const Uj="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='37'%20width='18.5'%20height='18.5'%20fill='%23F7F7F2'/%3e%3crect%20x='37'%20width='24'%20height='19'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='8'%20width='18'%20height='46'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='17'%20width='18'%20height='20'%20fill='%23F7F7F2'/%3e%3cpath%20d='M56%200H69C71.7614%200%2074%202.23858%2074%205V19H56V0Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='48'%20fill='%23F7F7F2'/%3e%3crect%20x='12'%20y='56'%20width='25'%20height='18'%20fill='%23F7F7F2'/%3e%3cpath%20d='M0%2056H19V74H5C2.23858%2074%200%2071.7614%200%2069V56Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='19'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Qj=j.div`
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
`,qj=j.button`
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
`,Zj=j.div`
    font-size: 2vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,Yj=j.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            width: 8vw;
        }
    }
`,Gj=j.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 100%;
        }
`,Xj=j.div`
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
`,ey=j.div`
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
`,ny=j.div`
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
`,iy=j.div`
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
`,ay=j.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,ty=j.div`
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
`,ry=j.button`
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
`,Sl=j.button`
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
`;function Vt(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(R=>R.mode),{color:a}=P(R=>R.color),t=P(R=>R.parametersExercice.exerciceDifficulté),r=P(R=>R.parametersExercice.exerciceModeDeJeu),o=P(R=>R.parametersExercice.exerciceNumber),s=ge(),c=vi(),u=(()=>{switch(s.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return{modeTitle:"Accueil"}}})(),p=P(R=>R.parametersExercice.exerciceModeDeJeu),h=P(R=>R.parametersExercice.exerciceNumber),g=P(R=>R.parametersExercice.exerciceDifficulté),[w,y]=K.useState(!1);K.useEffect(()=>{w&&c(`/Exercices/${u.modeTitle}`)},[w,c,u.modeTitle]);const x=(R,k)=>{document.querySelector(R).style.display=k?"flex":"none"},v=()=>{const R=p==="",k=h===0,C=g==="";R||k||C?(document.querySelector(".Alert").style.display="block",y(!1),x(".AlertMode",R),x(".AlertNbQuestion",k),x(".AlertDifficulte",C)):y(!0)},m=()=>{document.querySelector(".Alert").style.display="none",x(".AlertMode",!1),x(".AlertNbQuestion",!1),x(".AlertDifficulte",!1)},f=R=>()=>{const k=document.getElementById(`Section${R}`);k?(document.querySelector(".Alert").style.display="none",window.innerWidth<=560?k.scrollIntoView({behavior:"smooth",block:"start"}):k.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${R}`)};return l.jsxs(Qj,{$bgColor:e,children:[l.jsx(ay,{className:"Alert",children:l.jsxs(ty,{children:[l.jsx(ry,{onClick:m,$color:a,children:l.jsx("img",{src:Uo})}),l.jsxs(Sl,{onClick:f("Difficulte"),className:"AlertDifficulte",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner une ",l.jsx("span",{children:"difficulté"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Selon la difficulté choisie, plus ou moins d'aide vous sera proposée"}),l.jsx("span",{})]})]}),l.jsxs(Sl,{onClick:f("NombreDeQuestions"),className:"AlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"nombre de questions"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),l.jsx("span",{})]})]}),l.jsxs(Sl,{onClick:f("ModeDeJeu"),className:"AlertMode",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"mode de jeu"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Le mode de jeu influencera les questions qui vous seront posées lors de l'exercice"}),l.jsx("span",{})]})]})]})}),l.jsxs(qj,{id:"exercice",$color:a,onClick:v,children:[l.jsx(Zj,{children:"Commencer"}),l.jsx("img",{src:Uj}),l.jsxs(Yj,{children:[l.jsx("span",{children:"はじ"}),l.jsxs(Gj,{children:[l.jsx("span",{children:"始"}),l.jsx("span",{children:"める"})]})]})]}),l.jsxs(Xj,{children:[l.jsxs(ey,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Mode de jeu"}),l.jsx("span",{children:r})]}),l.jsxs(ny,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Difficulté"}),l.jsx("span",{children:t})]})]}),l.jsxs(iy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsxs("span",{children:["Nombre de ",u.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsx("span",{children:o})]})]})}const Lm=({mainColor:e,color:n,width:i="2.5vw",height:a="2.5vw"})=>l.jsxs("svg",{width:i,height:a,viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M47.1066 7.13958L47.1138 7.14652L47.1207 7.15373L50.5746 10.7515C52.4517 12.7069 53.5 15.3125 53.5 18.0231V27V44C53.5 49.2467 49.2467 53.5 44 53.5H28.04H10C4.75329 53.5 0.5 49.2467 0.5 44V10C0.5 4.7533 4.7533 0.5 10 0.5H27H35.9722C38.6858 0.5 41.2939 1.5505 43.2499 3.43125L47.1066 7.13958Z",fill:e,stroke:e}),l.jsx("rect",{width:"40.56",height:"6.76",rx:"3.38",transform:"matrix(-1 0 0 1 47.28 42.0798)",fill:n}),l.jsx("rect",{width:"40.56",height:"6.76",rx:"3.38",transform:"matrix(-1 0 0 1 47.28 33.24)",fill:n}),l.jsx("path",{d:"M37 1H9V13C9 15.7614 11.2386 18 14 18H32C34.7614 18 37 15.7614 37 13V1Z",fill:n}),l.jsx("rect",{width:"7.28",height:"11.44",rx:"3.64",transform:"matrix(-1 0 0 1 18 3)",fill:e})]});Lm.propTypes={mainColor:M.string,color:M.string,width:M.string,height:M.string};const Km="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0547'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0547)'%20fill='%23353535'/%3e%3crect%20x='14.5542'%20y='48.9951'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9951)'%20fill='%23353535'/%3e%3c/svg%3e",oy="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H21V21H0V5Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M32%200H48C50.7614%200%2053%202.23858%2053%205V22H32V0Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M21%2051H42V74H26C23.2386%2074%2021%2071.7614%2021%2069V51Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M52%2021H69C71.7614%2021%2074%2023.2386%2074%2026V42H52V21Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M0%2032H23V53H5C2.23858%2053%200%2050.7614%200%2048V32Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M53%2053H74V69C74%2071.7614%2071.7614%2074%2069%2074H53V53Z'%20fill='%2378FB8C'/%3e%3crect%20x='21'%20y='21'%20width='32'%20height='32'%20fill='%2378FB8C'/%3e%3c/svg%3e",ly="data:image/svg+xml,%3csvg%20width='75'%20height='74'%20viewBox='0%200%2075%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H22V74H5C2.23858%2074%200%2071.7614%200%2069V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M53%200H70C72.7614%200%2075%202.23858%2075%205V69C75%2071.7614%2072.7614%2074%2070%2074H53V0Z'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20y='61'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='40'%20y='48'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='40'%20y='13'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20y='26'%20width='14'%20height='22'%20fill='%239ED7FF'/%3e%3c/svg%3e",sy="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H27L13.5%2013.5L0%2027V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M60%2061.5L74%2047V69C74%2071.7614%2071.7614%2074%2069%2074H47L60%2061.5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M29.5%2029.5L59%200H69C71.7614%200%2074%202.23858%2074%205V14L44.5%2044.5L16%2074H5C2.23858%2074%200%2071.7614%200%2069V59L29.5%2029.5Z'%20fill='%23FFC370'/%3e%3crect%20x='22'%20y='22'%20width='30'%20height='30'%20rx='5'%20fill='%23FFC370'/%3e%3c/svg%3e",cy="data:image/svg+xml,%3csvg%20width='75'%20height='74'%20viewBox='0%200%2075%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='32'%20width='10'%20height='74'%20fill='%23FF9E9E'/%3e%3crect%20y='42'%20width='10'%20height='74'%20transform='rotate(-90%200%2042)'%20fill='%23FF9E9E'/%3e%3crect%20x='23'%20y='23'%20width='28'%20height='28'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H28V28H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M47%2046H75V69C75%2071.7614%2072.7614%2074%2070%2074H47V46Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M47%200H70C72.7614%200%2075%202.23858%2075%205V28H47V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2046H28V74H5C2.23858%2074%200%2071.7614%200%2069V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",dy=j.div`
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
`,uy=j.div`
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
`,gy=j.div`
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
`,py=j.div`
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
`,fy=j.div`
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

`,my=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: 65%;
    @media screen and (max-width: 560px){
        width: 100%;
        gap: 1.5vw;
    }
`,hr=j.button`
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
`;function Wt(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(d=>d.mode),{color:a}=P(d=>d.color),t=localStorage.getItem("mode")||"light",r=window.innerWidth<=560?"10vw":"3vw",o=He(),s=window.location.pathname,c=d=>{window.scrollTo({top:document.querySelector("#exercice").offsetTop,behavior:"smooth"}),d==="Premier pas"?(o(Cn("Débutant")),o(Ln(10)),o(xi("normal")),o(gn("Aléatoire")),s==="/Hiragana"||s==="/Katakana"?(o(Cn("Débutant")),o(Ln(10)),o(xi("normal")),o(gn("Aléatoire"))):(o(Cn("Débutant")),o(Ln(10)),o(gn("N5")))):d==="Découverte"?s==="/Hiragana"||s==="/Katakana"?(o(Cn("Débutant")),o(Ln(20)),o(xi("normal")),o(gn("Aléatoire"))):(o(Cn("Débutant")),o(Ln(20)),o(gn("N5"))):d==="Développement Avancé"?s==="/Hiragana"||s==="/Katakana"?(o(Cn("Intermédiaire")),o(Ln(20)),o(xi("tout")),o(gn("Aléatoire"))):(o(Cn("Intermédiaire")),o(Ln(20)),o(gn("N5"))):d==="Mises à Jour"&&(s==="/Hiragana"||s==="/Katakana"?(o(Cn("Confirmé")),o(Ln(30)),o(xi("tout")),o(gn("Aléatoire"))):(o(Cn("Confirmé")),o(Ln(30)),o(gn("Aléatoire"))))};return l.jsxs(dy,{$bgColor:e,children:[l.jsxs(uy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("p",{children:"Prereglage Exercices"}),l.jsxs(gy,{children:[l.jsxs(py,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsxs("div",{children:[l.jsx("button",{children:l.jsx(Lm,{width:r,height:r,color:a,mainColor:i})}),l.jsx("button",{children:l.jsx("img",{src:t==="light"?Km:Uo})})]}),l.jsx("button",{children:l.jsx("span",{children:"Créer"})})]}),l.jsxs(fy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("div",{}),l.jsx("div",{})]})]})]}),l.jsxs(my,{children:[l.jsxs(hr,{onClick:()=>c("Premier pas"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Premier pas"}),l.jsx("p",{children:"Parfait pour découvrir"}),l.jsx("img",{src:oy})]}),l.jsxs(hr,{onClick:()=>c("Découverte"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Découverte"}),l.jsx("p",{children:"Parfait pour en apprendre plus"}),l.jsx("img",{src:ly})]}),l.jsxs(hr,{onClick:()=>c("Développement Avancé"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Développement Avancé"}),l.jsx("p",{children:"Parfait pour développer ses compétences"}),l.jsx("img",{src:sy})]}),l.jsxs(hr,{onClick:()=>c("Mises à Jour"),$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("h3",{children:"Mises à Jour"}),l.jsx("p",{children:"Parfait pour continue à se perfectionner"}),l.jsx("img",{src:cy})]})]})]})}const hy=j.header`
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
`;function vy(){return l.jsxs(hy,{children:[l.jsx(Sa,{}),l.jsx(_t,{}),l.jsx(Wt,{}),l.jsx(At,{}),l.jsx(It,{}),l.jsx(Bt,{}),l.jsx(Vt,{})]})}const wy=j.header`
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
`;function Ry(){return l.jsxs(wy,{children:[l.jsx(Sa,{}),l.jsx(_t,{}),l.jsx(Wt,{}),l.jsx(At,{}),l.jsx(It,{}),l.jsx(Bt,{}),l.jsx(Vt,{})]})}const jy=j.div`
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
    
`,vr=j.button`
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

`;function bm(){const e=ge(),n=He(),{bgColor:i,fontColor:a,mainBgColor:t}=P(g=>g.mode),{color:r}=P(g=>g.color),[o,s]=K.useState(null),d=(()=>{switch(e.pathname){case"/Katakana":return{normal:"キ",accents:"ギ",combinaison:"ギャ",tout:"キギギャ"};case"/Hiragana":return{normal:"き",accents:"ぎ",combinaison:"きゃ",tout:"きぎきゃ"};default:return null}})();if(!d)return l.jsx("div",{children:"Chemin non pris en charge"});const u=g=>{n(xi(g)),s(g)},p=g=>o===g?r:t,h=g=>o===g?t:a;return l.jsxs(jy,{children:[l.jsx(vr,{onClick:()=>u("normal"),$bgColor:i,$fontColor:a,$color:h("normal"),$mainBgColor:p("normal"),children:l.jsxs("div",{children:[l.jsx("p",{children:d.normal}),l.jsx("p",{children:"normal"})]})}),l.jsx(vr,{onClick:()=>u("accents"),$bgColor:i,$fontColor:a,$color:h("accents"),$mainBgColor:p("accents"),children:l.jsxs("div",{children:[l.jsx("p",{children:d.accents}),l.jsx("p",{children:"accents"})]})}),l.jsx(vr,{onClick:()=>u("combinaison"),$bgColor:i,$fontColor:a,$color:h("combinaison"),$mainBgColor:p("combinaison"),children:l.jsxs("div",{children:[l.jsx("p",{children:d.combinaison}),l.jsx("p",{children:"combinaison"})]})}),l.jsx(vr,{onClick:()=>u("tout"),$bgColor:i,$fontColor:a,$color:h("tout"),$mainBgColor:p("tout"),children:l.jsxs("div",{children:[l.jsx("p",{children:d.tout}),l.jsx("p",{children:"tout"})]})})]})}const yy=j.header`
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
`;function xy(){return l.jsxs(yy,{children:[l.jsx(Sa,{}),l.jsx(_t,{}),l.jsx(Wt,{}),l.jsx(At,{}),l.jsx(bm,{}),l.jsx(It,{}),l.jsx(Bt,{}),l.jsx(Vt,{})]})}const ky=j.header`
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
`;function Py(){return l.jsxs(ky,{children:[l.jsx(Sa,{}),l.jsx(_t,{}),l.jsx(Wt,{}),l.jsx(At,{}),l.jsx(bm,{}),l.jsx(It,{}),l.jsx(Bt,{}),l.jsx(Vt,{})]})}const Cy=j.header`
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
`;function Ly(){return l.jsxs(Cy,{children:[l.jsx(Sa,{}),l.jsx(_t,{}),l.jsx(Wt,{}),l.jsx(At,{}),l.jsx(It,{}),l.jsx(Bt,{}),l.jsx(Vt,{})]})}const Ky=j.div`
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
 `,qu=j(wi)`
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
`,Zu=j.div`
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
`;function by(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(s=>s.mode),{color:a}=P(s=>s.color),t=ge(),o=(()=>{switch(t.pathname){case"/Dictionnaire/Kanji":return{titleFurigana1:"ひらがな",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Hiragana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"カタカナ",titleKanji2:"ア",titleFr2:"katakana",link2:"/Dictionnaire/Katakana"};case"/Dictionnaire/Katakana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Vocabulaire":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ばんごう",titleKanji2:"番号",titleFr2:"Nombres",link2:"/Dictionnaire/Nombres"};case"/Dictionnaire/Nombres":return{titleFurigana1:"ごい",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"かんじ",titleKanji2:"漢字",titleFr2:"kanji",link2:"/Dictionnaire/Kanji"};default:return"Accueil"}})();return l.jsxs(Ky,{children:[l.jsx(qu,{$bgColor:e,to:o.link1,children:l.jsxs(Zu,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{children:o.titleFr1})]})}),l.jsx(qu,{$bgColor:e,to:o.link2,children:l.jsxs(Zu,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana2}),l.jsx("span",{children:o.titleKanji2}),l.jsx("span",{children:o.titleFr2})]})})]})}const Tm=({color:e,width:n="3.5vw",height:i="3.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("circle",{cx:"18.983",cy:"18.9829",r:"11",transform:"rotate(-45 18.983 18.9829)",stroke:e,strokeWidth:"4.84598"}),l.jsx("rect",{x:"23.7218",y:"27.2935",width:"5.32537",height:"22.0876",rx:"2.66269",transform:"rotate(-45 23.7218 27.2935)",fill:e,stroke:e})]});Tm.propTypes={color:M.string,width:M.string,height:M.string};const de=({color:e,width:n="3.5vw",height:i="3.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{x:"19.4456",y:"14.4956",width:"48",height:"7",rx:"3",transform:"rotate(45 19.4456 14.4956)",fill:e}),l.jsx("rect",{x:"14.4956",y:"48.437",width:"48",height:"7",rx:"3",transform:"rotate(-45 14.4956 48.437)",fill:e})]});de.propTypes={color:M.string,width:M.string,height:M.string};const Ty=j.div`
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
`,$y=j.input` 
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
`;function et({onSearchChange:e}){const{fontColor:n,mainBgColor:i}=P(g=>g.mode),{color:a}=P(g=>g.color),t=P(g=>g.search.searchText),r=ge(),[o,s]=K.useState(""),d=(()=>{switch(r.pathname){case"/Dictionnaire/Kanji":case"/choisir-ses/Kanji":return{titleFr:"Kanji"};case"/Dictionnaire/Hiragana":case"/choisir-ses/Hiragana":return{titleFr:"Hiragana"};case"/Dictionnaire/Katakana":case"/choisir-ses/Katakana":return{titleFr:"Katakana"};case"/Dictionnaire/Vocabulaire":case"/choisir-ses/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Dictionnaire/Nombres":case"/choisir-ses/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),u=g=>{s(g.target.value),e(g.target.value)},p=()=>{s(""),e("")},h=window.innerWidth<=560?"10vw":"3.5vw";return l.jsxs(Ty,{children:[l.jsx($y,{type:"text",placeholder:`Rechercher un ${d.titleFr}`,value:t||o,onChange:u,$color:a,$mainBgColor:i,$fontColor:n}),t?l.jsx("button",{onClick:p,children:l.jsx(de,{width:h,height:h,color:a})}):l.jsx("button",{children:l.jsx(Tm,{width:h,height:h,color:a})})]})}et.propTypes={onSearchChange:M.func.isRequired};const Sy=j.div`
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
`;function Bs({filterJlpt:e}){const[n,i]=K.useState("N5"),a=s=>{const c=s.target.value;n===c?(i(""),e("")):(i(c),e(c))},{fontColor:t,mainBgColor:r}=P(s=>s.mode),{color:o}=P(s=>s.color);return l.jsxs(Sy,{name:"jlpt",id:"jlpt",value:n,$mainBgColor:r,$fontColor:t,$color:o,children:[l.jsx("button",{value:"N5",onClick:a,children:"N5"}),l.jsx("button",{value:"N4",onClick:a,children:"N4"}),l.jsx("button",{value:"N3",onClick:a,children:"N3"}),l.jsx("button",{value:"N2",onClick:a,children:"N2"}),l.jsx("button",{value:"N1",onClick:a,children:"N1"})]})}Bs.propTypes={filterJlpt:M.func.isRequired};const Ny=j.div`
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
`;function $m({filterKana:e}){const{fontColor:n,mainBgColor:i}=P(s=>s.mode),{color:a}=P(s=>s.color),[t,r]=K.useState("N5"),o=s=>{const c=s.target.value;t===c?(r(""),e("")):(r(c),e(c))};return l.jsxs(Ny,{name:"Kana",id:"Kana",value:t,$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("button",{value:"Combinaison",onClick:o,children:"Combinaisons"}),l.jsx("button",{value:"Accents",onClick:o,children:"Accents"})]})}$m.propTypes={filterKana:M.func.isRequired};const Oy=[{filtre:"nombres et quantificateurs"},{filtre:"verbes"},{filtre:"verbes d’action"},{filtre:"adjectifs"},{filtre:"nom"},{filtre:"mots de liaison et particules"},{filtre:"expressions temporelles"},{filtre:"formules de politesse"},{filtre:"expressions idiomatiques"},{filtre:"langue informelle et argot"},{filtre:"émotions et sentiments"},{filtre:"les pays"},{filtre:"les membres de la famille"},{filtre:"les vêtements"},{filtre:"les couleurs"},{filtre:"le corps humain"},{filtre:"la nourriture"},{filtre:"santé et bien-être"},{filtre:"activités et loisirs"},{filtre:"les animaux"},{filtre:"nature et environnement"},{filtre:"temps et saisons"},{filtre:"culture et traditions japonaises"},{filtre:"lieux et directions"},{filtre:"les moyens de transport"},{filtre:"objets de bureau/école"},{filtre:"le matériel domestique"},{filtre:"les pièces de la maison"},{filtre:"vocabulaire lié au travail"},{filtre:"profession et métiers"},{filtre:"technologie et gadgets"}],My={filtres:Oy},Ey="data:image/svg+xml,%3csvg%20width='87'%20height='27'%20viewBox='0%200%2087%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L43.5%2023L83%204'%20stroke='%23F7F7F2'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Hy=j.div`
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
`,Dy=j.span`
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
`,Jy=j.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 1.5vw;
    }
`,zy=j.div`
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
`,Fy=j.button`
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
`;function Sm({filterVocabulaire:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(u=>u.mode),{color:t}=P(u=>u.color),[r,o]=K.useState("Tous"),s=My.filtres.map(u=>u.filtre),c=u=>{const p=u.target.value;r===p?(o(""),e("")):(o(p),e(p))},d=()=>{const u=document.querySelector(".VocabulaireFilterButtonContainer"),p=document.querySelector(".VocabulaireFilterContainer"),h=document.querySelector(".MoreButtonIcon");window.innerWidth>560?u&&p&&(u.style.overflow==="visible"?(u.style.overflow="hidden",p.style.maxHeight="8.3vw",h.style.transform="rotate(0deg)"):(u.style.overflow="visible",p.style.maxHeight="100%",h.style.transform="rotate(180deg)")):u&&p&&(u.style.overflow==="visible"?(u.style.overflow="hidden",u.style.maxHeight="50vw",h.style.transform="rotate(0deg)"):(u.style.overflow="visible",u.style.maxHeight="100%",h.style.transform="rotate(180deg)"))};return l.jsxs(Hy,{className:"VocabulaireFilterContainer",$bgColor:n,children:[l.jsx(Dy,{$fontColor:i,$mainBgColor:a,children:"Filtre"}),l.jsxs(Jy,{$mainBgColor:a,children:[l.jsx(zy,{className:"VocabulaireFilterButtonContainer",$mainBgColor:a,$color:t,onChange:c,value:r,children:s.map(u=>l.jsx("button",{value:u,onClick:c,children:u},u))}),l.jsx(Fy,{$color:t,onClick:d,children:l.jsx("img",{className:"MoreButtonIcon",src:Ey,alt:"More"})})]})]})}Sm.propTypes={filterVocabulaire:M.func.isRequired};const _y=j.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        gap: 3vw;
        align-items: center;
        width: 100%;
    }
`,wr=j.div`
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
`,Ay=j.div`
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
`;function Nm(){const{bgColor:e}=P(s=>s.mode),n=He(),i=ge(),a=s=>{n(qc(s.toLowerCase()))},t=s=>{n(Bw(s))},r=s=>{n(Zc(s))},o=s=>{n(Iw(s))};return l.jsxs(_y,{id:"recherche",children:[(i.pathname==="/Dictionnaire/Kanji"||i.pathname==="/choisir-ses/Kanji")&&l.jsxs(wr,{$bgColor:e,children:[l.jsx(et,{onSearchChange:a}),l.jsx(Bs,{filterJlpt:t})]}),(i.pathname==="/Dictionnaire/Vocabulaire"||i.pathname==="/choisir-ses/Vocabulaire")&&l.jsxs(Ay,{children:[l.jsxs(wr,{$bgColor:e,children:[l.jsx(et,{onSearchChange:a}),l.jsx(Bs,{filterJlpt:t})]}),l.jsx("div",{children:l.jsx(Sm,{filterVocabulaire:o})})]}),(i.pathname==="/Dictionnaire/Katakana"||i.pathname==="/Dictionnaire/Hiragana"||i.pathname==="/choisir-ses/Katakana"||i.pathname==="/choisir-ses/Hiragana")&&l.jsxs(wr,{$bgColor:e,children:[l.jsx(et,{onSearchChange:a}),l.jsx($m,{filterKana:r})]}),(i.pathname==="/Dictionnaire/Nombres"||i.pathname==="/choisir-ses/Nombres")&&l.jsx(wr,{$bgColor:e,children:l.jsx(et,{onSearchChange:a})})]})}const By=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);;
    }
`,Iy=j.div`
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
`,Vy=j.p`
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
`,Wy=j.div`
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
`,Uy=j.div`
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
`,Qy=j.div`
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
`;function Yc({kanjiList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(u=>u.mode),{color:t}=P(u=>u.color),r=P(u=>u.dataChoice.kanji),o=P(u=>u.parametersExercice.exerciceNumber),s=He(),c=ge(),d=u=>{(r.includes(u)||r.length<o)&&c.pathname==="/choisir-ses/Kanji"&&s(qw(u))};return l.jsx(By,{children:Array.isArray(e)&&e.length>0?e.map(u=>l.jsxs(Iy,{$bgColor:n,onClick:()=>d(u),style:{backgroundColor:r.includes(u)?t:n,cursor:"pointer"},children:[l.jsxs(Vy,{$fontColor:i,$mainBgColor:a,children:[l.jsx("span",{children:"Kun"})," ",u.KunReading.join(", ")]}),l.jsxs(Wy,{$fontColor:i,$mainBgColor:a,$color:t,children:[u.SecondaryMeaning&&l.jsx("p",{children:u.SecondaryMeaning}),l.jsx("h2",{children:u.Kanji}),l.jsx("p",{children:u.Meaning})]}),l.jsxs(Uy,{$fontColor:i,$mainBgColor:a,$color:t,children:[l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"})," ",u.JLPTLevel]}),l.jsxs("p",{children:[l.jsx("span",{children:"On"})," ",u.OnReading.join(", ")]})]})]},u.id)):l.jsx(Qy,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Yc.propTypes={kanjiList:M.array.isRequired};const $n="/Nihongo-V2/assets/icon-audio-Dmg04iGg.svg",qy=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,Zy=j.div`
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
`,Yy=j.p`
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
`,Gy=j.p`
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
`,Ia=j.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`,Va=j.button`
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
    button {
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
`,Xy=j.div`
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
`;function Gc({hiraganaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(g=>g.mode),{color:t}=P(g=>g.color),r=P(g=>g.dataChoice.hiragana),o=P(g=>g.parametersExercice.exerciceNumber),s=He(),c=ge(),d="",u=g=>{s(qc(g)),s(Zc(d))},p=g=>{(r.includes(g)||r.length<o)&&c.pathname==="/choisir-ses/Hiragana"&&s(Gw(g))},h=window.innerWidth<=560?"14vw":"3.5vw";return l.jsx(qy,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var w,y,x,v,m,f,R,k;return l.jsxs(Zy,{id:"item",$bgColor:n,onClick:()=>p(g),style:{backgroundColor:r.includes(g)?t:n,cursor:"pointer"},children:[l.jsx(Yy,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(Gy,{$color:t,$mainBgColor:a,children:g.Type==="Hiragana"?g.Hiragana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Hiragana:g.Handakuten}),g.Type==="Hiragana"?l.jsxs(Ia,{children:[l.jsx(Va,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(kn,{onClick:()=>{var C;return u((C=g.Accent)==null?void 0:C.Dakuten)},$fontColor:i,$mainBgColor:a,children:((w=g.Accent)==null?void 0:w.Dakuten)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:(y=g.Accent)==null?void 0:y.Dakuten})}),l.jsx(kn,{onClick:()=>{var C;return u((C=g.Accent)==null?void 0:C.Handakuten)},$fontColor:i,$mainBgColor:a,children:((x=g.Accent)==null?void 0:x.Handakuten)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:(v=g.Accent)==null?void 0:v.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Ia,{children:[l.jsx(Va,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(kn,{onClick:()=>u(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((m=g.Accent)==null?void 0:m.Hiragana)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Hiragana})}),l.jsx(kn,{onClick:()=>u(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Ia,{children:[l.jsx(Va,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(kn,{onClick:()=>u(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((f=g.Accent)==null?void 0:f.Hiragana)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Hiragana})}),l.jsx(kn,{onClick:()=>u(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Dakuten===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Ia,{children:[l.jsx(Va,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(kn,{onClick:()=>u(g.Hiragana1),$fontColor:i,$mainBgColor:a,children:((R=g.Accent)==null?void 0:R.Hiragana1)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Hiragana1})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:((k=g.Accent)==null?void 0:k.Hiragana2)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Hiragana2})})]}):l.jsxs(Ia,{children:[l.jsx(Va,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:l.jsx(de,{width:h,height:h,color:t})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:l.jsx(de,{width:h,height:h,color:t})})]})]},g.id)}):l.jsx(Xy,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Gc.propTypes={hiraganaList:M.array.isRequired};const e5=[{id:1,Type:"Hiragana",Hiragana:"あ",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:2,Type:"Hiragana",Hiragana:"い",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:3,Type:"Hiragana",Hiragana:"う",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:4,Type:"Hiragana",Hiragana:"え",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:5,Type:"Hiragana",Hiragana:"お",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:6,Type:"Hiragana",Hiragana:"か",Romaji:"ka",Accent:{Dakuten:"が",Handakuten:null},Combinaison:[]},{id:7,Type:"Hiragana",Hiragana:"き",Romaji:"ki",Accent:{Dakuten:"ぎ",Handakuten:null},Combinaison:[{Hiragana:"きゃ",Romaji:"kya"},{Hiragana:"きゅ",Romaji:"kyu"},{Hiragana:"きょ",Romaji:"kyo"},{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:8,Type:"Hiragana",Hiragana:"く",Romaji:"ku",Accent:{Dakuten:"ぐ",Handakuten:null},Combinaison:[]},{id:9,Type:"Hiragana",Hiragana:"け",Romaji:"ke",Accent:{Dakuten:"げ",Handakuten:null},Combinaison:[]},{id:10,Type:"Hiragana",Hiragana:"こ",Romaji:"ko",Accent:{Dakuten:"ご",Handakuten:null},Combinaison:[]},{id:11,Type:"Hiragana",Hiragana:"さ",Romaji:"sa",Accent:{Dakuten:"ざ",Handakuten:null},Combinaison:[]},{id:12,Type:"Hiragana",Hiragana:"し",Romaji:"shi",Accent:{Dakuten:"じ",Handakuten:null},Combinaison:[{Hiragana:"しゃ",Romaji:"sha"},{Hiragana:"しゅ",Romaji:"shu"},{Hiragana:"しょ",Romaji:"sho"},{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:13,Type:"Hiragana",Hiragana:"す",Romaji:"su",Accent:{Dakuten:"ず",Handakuten:null},Combinaison:[]},{id:14,Type:"Hiragana",Hiragana:"せ",Romaji:"se",Accent:{Dakuten:"ぜ",Handakuten:null},Combinaison:[]},{id:15,Type:"Hiragana",Hiragana:"そ",Romaji:"so",Accent:{Dakuten:"ぞ",Handakuten:null},Combinaison:[]},{id:16,Type:"Hiragana",Hiragana:"た",Romaji:"ta",Accent:{Dakuten:"だ",Handakuten:null},Combinaison:[]},{id:17,Type:"Hiragana",Hiragana:"ち",Romaji:"chi",Accent:{Dakuten:"ぢ",Handakuten:null},Combinaison:[{Hiragana:"ちゃ",Romaji:"cha"},{Hiragana:"ちゅ",Romaji:"chu"},{Hiragana:"ちょ",Romaji:"cho"}]},{id:18,Type:"Hiragana",Hiragana:"つ",Romaji:"tsu",Accent:{Dakuten:"づ",Handakuten:null},Combinaison:[]},{id:19,Type:"Hiragana",Hiragana:"て",Romaji:"te",Accent:{Dakuten:"で",Handakuten:null},Combinaison:[]},{id:20,Type:"Hiragana",Hiragana:"と",Romaji:"to",Accent:{Dakuten:"ど",Handakuten:null},Combinaison:[]},{id:21,Type:"Hiragana",Hiragana:"な",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:22,Type:"Hiragana",Hiragana:"に",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"にゃ",Romaji:"nya"},{Hiragana:"にゅ",Romaji:"nyu"},{Hiragana:"にょ",Romaji:"nyo"}]},{id:23,Type:"Hiragana",Hiragana:"ぬ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:24,Type:"Hiragana",Hiragana:"ね",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:25,Type:"Hiragana",Hiragana:"の",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:26,Type:"Hiragana",Hiragana:"は",Romaji:"ha",Accent:{Dakuten:"ば",Handakuten:"ぱ"},Combinaison:[]},{id:27,Type:"Hiragana",Hiragana:"ひ",Romaji:"hi",Accent:{Dakuten:"び",Handakuten:"ぴ"},Combinaison:[{Hiragana:"ひゃ",Romaji:"hya"},{Hiragana:"ひゅ",Romaji:"hyu"},{Hiragana:"ひょ",Romaji:"hyo"},{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"},{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:28,Type:"Hiragana",Hiragana:"ふ",Romaji:"fu",Accent:{Dakuten:"ぶ",Handakuten:"ぷ"},Combinaison:[]},{id:29,Type:"Hiragana",Hiragana:"へ",Romaji:"he",Accent:{Dakuten:"べ",Handakuten:"ぺ"},Combinaison:[]},{id:30,Type:"Hiragana",Hiragana:"ほ",Romaji:"ho",Accent:{Dakuten:"ぼ",Handakuten:"ぽ"},Combinaison:[]},{id:31,Type:"Hiragana",Hiragana:"ま",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:32,Type:"Hiragana",Hiragana:"み",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"みゃ",Romaji:"mya"},{Hiragana:"みゅ",Romaji:"myu"},{Hiragana:"みょ",Romaji:"myo"}]},{id:33,Type:"Hiragana",Hiragana:"む",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:34,Type:"Hiragana",Hiragana:"め",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:35,Type:"Hiragana",Hiragana:"も",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:36,Type:"Hiragana",Hiragana:"や",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:37,Type:"Hiragana",Hiragana:"ゆ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:38,Type:"Hiragana",Hiragana:"よ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:39,Type:"Hiragana",Hiragana:"ら",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:40,Type:"Hiragana",Hiragana:"り",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"りゃ",Romaji:"rya"},{Hiragana:"りゅ",Romaji:"ryu"},{Hiragana:"りょ",Romaji:"ryo"}]},{id:41,Type:"Hiragana",Hiragana:"る",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:42,Type:"Hiragana",Hiragana:"れ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:43,Type:"Hiragana",Hiragana:"ろ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:44,Type:"Hiragana",Hiragana:"わ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:45,Type:"Hiragana",Hiragana:"を",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:46,Type:"Hiragana",Hiragana:"ん",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]}],n5=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"が",Romaji:"ga",Hiragana:"か",Handakuten:null,Combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ぎ",Romaji:"gi",Hiragana:"き",Handakuten:null,Combinaison:[{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"ぐ",Romaji:"gu",Hiragana:"く",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"げ",Romaji:"ge",Hiragana:"け",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ご",Romaji:"go",Hiragana:"こ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ざ",Romaji:"za",Hiragana:"さ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"じ",Romaji:"ji",Hiragana:"し",Handakuten:null,Combinaison:[{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ず",Romaji:"zu",Hiragana:"す",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ぜ",Romaji:"ze",Hiragana:"せ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ぞ",Romaji:"zo",Hiragana:"そ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"だ",Romaji:"da",Hiragana:"た",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ぢ",Romaji:"ji",Hiragana:"ち",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"づ",Romaji:"zu",Hiragana:"つ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"で",Romaji:"de",Hiragana:"て",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ど",Romaji:"do",Hiragana:"と",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"ば",Romaji:"ba",Hiragana:"は",Handakuten:"ぱ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"び",Romaji:"bi",Hiragana:"ひ",Handakuten:"ぴ",Combinaison:[{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ぶ",Romaji:"bu",Hiragana:"ふ",Handakuten:"ぷ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"べ",Romaji:"be",Hiragana:"へ",Handakuten:"ぺ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ぼ",Romaji:"bo",Hiragana:"ほ",Handakuten:"ぽ",combinaison:[]}],i5=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"ぱ",Romaji:"pa",Hiragana:"は",Dakuten:"ば",combinaison:[]},{id:68,Type:"Accents",Nom:"Handakuten",Handakuten:"ぴ",Romaji:"pi",Hiragana:"ひ",Dakuten:"び",Combinaison:[{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:69,Type:"Accents",Nom:"Handakuten",Handakuten:"ぷ",Romaji:"pu",Hiragana:"ふ",Dakuten:"ぶ",combinaison:[]},{id:70,Type:"Accents",Nom:"Handakuten",Handakuten:"ぺ",Romaji:"pe",Hiragana:"へ",Dakuten:"べ",combinaison:[]},{id:71,Type:"Accents",Nom:"Handakuten",Handakuten:"ぽ",Romaji:"po",Hiragana:"ほ",Dakuten:"ぼ",combinaison:[]}],a5=[{id:72,Type:"Combinaison",Hiragana:"きゃ",Romaji:"kya",Hiragana1:"き",Hiragana2:"や"},{id:73,Type:"Combinaison",Hiragana:"きゅ",Romaji:"kyu",Hiragana1:"き",Hiragana2:"ゆ"},{id:74,Type:"Combinaison",Hiragana:"きょ",Romaji:"kyo",Hiragana1:"き",Hiragana2:"よ"},{id:75,Type:"Combinaison",Hiragana:"ぎゃ",Romaji:"gya",Hiragana1:"ぎ",Hiragana2:"や"},{id:76,Type:"Combinaison",Hiragana:"ぎゅ",Romaji:"gyu",Hiragana1:"ぎ",Hiragana2:"ゆ"},{id:77,Type:"Combinaison",Hiragana:"ぎょ",Romaji:"gyo",Hiragana1:"ぎ",Hiragana2:"よ"},{id:78,Type:"Combinaison",Hiragana:"しゃ",Romaji:"sha",Hiragana1:"し",Hiragana2:"や"},{id:79,Type:"Combinaison",Hiragana:"しゅ",Romaji:"shu",Hiragana1:"し",Hiragana2:"ゆ"},{id:80,Type:"Combinaison",Hiragana:"しょ",Romaji:"sho",Hiragana1:"し",Hiragana2:"よ"},{id:81,Type:"Combinaison",Hiragana:"じゃ",Romaji:"ja",Hiragana1:"じ",Hiragana2:"や"},{id:82,Type:"Combinaison",Hiragana:"じゅ",Romaji:"ju",Hiragana1:"じ",Hiragana2:"ゆ"},{id:83,Type:"Combinaison",Hiragana:"じょ",Romaji:"jo",Hiragana1:"じ",Hiragana2:"よ"},{id:84,Type:"Combinaison",Hiragana:"ちゃ",Romaji:"cha",Hiragana1:"ち",Hiragana2:"や"},{id:85,Type:"Combinaison",Hiragana:"ちゅ",Romaji:"chu",Hiragana1:"ち",Hiragana2:"ゆ"},{id:86,Type:"Combinaison",Hiragana:"ちょ",Romaji:"cho",Hiragana1:"ち",Hiragana2:"よ"},{id:87,Type:"Combinaison",Hiragana:"ひゃ",Romaji:"hya",Hiragana1:"ひ",Hiragana2:"や"},{id:88,Type:"Combinaison",Hiragana:"ひゅ",Romaji:"hyu",Hiragana1:"ひ",Hiragana2:"ゆ"},{id:89,Type:"Combinaison",Hiragana:"ひょ",Romaji:"hyo",Hiragana1:"ひ",Hiragana2:"よ"},{id:90,Type:"Combinaison",Hiragana:"びゃ",Romaji:"bya",Hiragana1:"び",Hiragana2:"や"},{id:91,Type:"Combinaison",Hiragana:"びゅ",Romaji:"byu",Hiragana1:"び",Hiragana2:"ゆ"},{id:92,Type:"Combinaison",Hiragana:"びょ",Romaji:"byo",Hiragana1:"び",Hiragana2:"よ"},{id:93,Type:"Combinaison",Hiragana:"ぴゃ",Romaji:"pya",Hiragana1:"ぴ",Hiragana2:"や"},{id:94,Type:"Combinaison",Hiragana:"ぴゅ",Romaji:"pyu",Hiragana1:"ぴ",Hiragana2:"ゆ"},{id:95,Type:"Combinaison",Hiragana:"ぴょ",Romaji:"pyo",Hiragana1:"ぴ",Hiragana2:"よ"},{id:96,Type:"Combinaison",Hiragana:"にゃ",Romaji:"nya",Hiragana1:"に",Hiragana2:"や"},{id:97,Type:"Combinaison",Hiragana:"にゅ",Romaji:"nyu",Hiragana1:"に",Hiragana2:"ゆ"},{id:98,Type:"Combinaison",Hiragana:"にょ",Romaji:"nyo",Hiragana1:"に",Hiragana2:"よ"},{id:99,Type:"Combinaison",Hiragana:"みゃ",Romaji:"mya",Hiragana1:"み",Hiragana2:"や"},{id:100,Type:"Combinaison",Hiragana:"みゅ",Romaji:"myu",Hiragana1:"み",Hiragana2:"ゆ"},{id:101,Type:"Combinaison",Hiragana:"みょ",Romaji:"myo",Hiragana1:"み",Hiragana2:"よ"},{id:102,Type:"Combinaison",Hiragana:"りゃ",Romaji:"rya",Hiragana1:"り",Hiragana2:"や"},{id:103,Type:"Combinaison",Hiragana:"りゅ",Romaji:"ryu",Hiragana1:"り",Hiragana2:"ゆ"},{id:104,Type:"Combinaison",Hiragana:"りょ",Romaji:"ryo",Hiragana1:"り",Hiragana2:"よ"}],be={Hiragana:e5,Dakuten:n5,Handakuten:i5,Combinaison:a5},t5=j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,r5=j.div`
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
`,o5=j.p`
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
`,l5=j.p`
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
`,Wa=j.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`,Ua=j.button`
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
`,Pn=j.div`
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
`,s5=j.div`
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
`;function Xc({katakanaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(g=>g.mode),{color:t}=P(g=>g.color),r=P(g=>g.dataChoice.katakana),o=P(g=>g.parametersExercice.exerciceNumber),s=He(),c=ge(),d="",u=g=>{s(qc(g)),s(Zc(d))},p=g=>{(r.includes(g)||r.length<o)&&c.pathname==="/choisir-ses/Katakana"&&s(Yw(g))},h=window.innerWidth<=560?"10vw":"3.5vw";return l.jsx(t5,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var w,y,x,v;return l.jsxs(r5,{$bgColor:n,onClick:()=>p(g),style:{backgroundColor:r.includes(g)?t:n,cursor:"pointer"},children:[l.jsx(o5,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(l5,{$color:t,$mainBgColor:a,children:g.Type==="Katakana"?g.Katakana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Katakana:g.Handakuten}),g.Type==="Katakana"?l.jsxs(Wa,{children:[l.jsx(Ua,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(Pn,{onClick:()=>{var m;return u((m=g.Accent)==null?void 0:m.Dakuten)},$fontColor:i,$mainBgColor:a,children:((w=g.Accent)==null?void 0:w.Dakuten)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:(y=g.Accent)==null?void 0:y.Dakuten})}),l.jsx(Pn,{onClick:()=>{var m;return u((m=g.Accent)==null?void 0:m.Handakuten)},$fontColor:i,$mainBgColor:a,children:((x=g.Accent)==null?void 0:x.Handakuten)===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:(v=g.Accent)==null?void 0:v.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Wa,{children:[l.jsx(Ua,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(Pn,{onClick:()=>u(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Katakana})}),l.jsx(Pn,{onClick:()=>u(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Wa,{children:[l.jsx(Ua,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(Pn,{onClick:()=>u(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Katakana})}),l.jsx(Pn,{onClick:()=>u(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Handakuten||g.Dakuten===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Wa,{children:[l.jsx(Ua,{$color:t,children:l.jsx("img",{src:$n})}),l.jsx(Pn,{onClick:()=>u(g.Katakana1),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana1===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Katakana1})}),l.jsx(Pn,{$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana2===null?l.jsx(de,{width:h,height:h,color:t}):l.jsx("button",{children:g.Katakana2})})]}):l.jsxs(Wa,{children:[l.jsx(Ua,{$color:t,children:l.jsx("img",{src:$n})}),l.jsxs(Pn,{$fontColor:i,$mainBgColor:a,children:[l.jsx(de,{width:h,height:h,color:t})," "]}),l.jsxs(Pn,{$fontColor:i,$mainBgColor:a,children:[l.jsx(de,{width:h,height:h,color:t})," "]})]})]},g.id)}):l.jsx(s5,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Xc.propTypes={katakanaList:M.array.isRequired};const c5=[{id:1,Type:"Katakana",Katakana:"ア",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:2,Type:"Katakana",Katakana:"イ",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:3,Type:"Katakana",Katakana:"ウ",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:4,Type:"Katakana",Katakana:"エ",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:5,Type:"Katakana",Katakana:"オ",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:6,Type:"Katakana",Katakana:"カ",Romaji:"ka",Accent:{Dakuten:"ガ",Handakuten:null},combinaison:[]},{id:7,Type:"Katakana",Katakana:"キ",Romaji:"ki",Accent:{Dakuten:"ギ",Handakuten:null},combinaison:[{Katakana:"キャ",Romaji:"kya"},{Katakana:"キュ",Romaji:"kyu"},{Katakana:"キョ",Romaji:"kyo"},{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:8,Type:"Katakana",Katakana:"ク",Romaji:"ku",Accent:{Dakuten:"グ",Handakuten:null},combinaison:[]},{id:9,Type:"Katakana",Katakana:"ケ",Romaji:"ke",Accent:{Dakuten:"ゲ",Handakuten:null},combinaison:[]},{id:10,Type:"Katakana",Katakana:"コ",Romaji:"ko",Accent:{Dakuten:"ゴ",Handakuten:null},combinaison:[]},{id:11,Type:"Katakana",Katakana:"サ",Romaji:"sa",Accent:{Dakuten:"ザ",Handakuten:null},combinaison:[]},{id:12,Type:"Katakana",Katakana:"シ",Romaji:"shi",Accent:{Dakuten:"ジ",Handakuten:null},combinaison:[{Katakana:"シャ",Romaji:"sha"},{Katakana:"シュ",Romaji:"shu"},{Katakana:"ショ",Romaji:"sho"},{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:13,Type:"Katakana",Katakana:"ス",Romaji:"su",Accent:{Dakuten:"ズ",Handakuten:null},combinaison:[]},{id:14,Type:"Katakana",Katakana:"セ",Romaji:"se",Accent:{Dakuten:"ゼ",Handakuten:null},combinaison:[]},{id:15,Type:"Katakana",Katakana:"ソ",Romaji:"so",Accent:{Dakuten:"ゾ",Handakuten:null},combinaison:[]},{id:16,Type:"Katakana",Katakana:"タ",Romaji:"ta",Accent:{Dakuten:"ダ",Handakuten:null},combinaison:[]},{id:17,Type:"Katakana",Katakana:"チ",Romaji:"chi",Accent:{Dakuten:"ヂ",Handakuten:null},combinaison:[{Katakana:"チャ",Romaji:"cha"},{Katakana:"チュ",Romaji:"chu"},{Katakana:"チョ",Romaji:"cho"}]},{id:18,Type:"Katakana",Katakana:"ツ",Romaji:"tsu",Accent:{Dakuten:"ヅ",Handakuten:null},combinaison:[]},{id:19,Type:"Katakana",Katakana:"テ",Romaji:"te",Accent:{Dakuten:"デ",Handakuten:null},combinaison:[]},{id:20,Type:"Katakana",Katakana:"ト",Romaji:"to",Accent:{Dakuten:"ド",Handakuten:null},combinaison:[]},{id:21,Type:"Katakana",Katakana:"ナ",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:22,Type:"Katakana",Katakana:"ニ",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ニャ",Romaji:"nya"},{Katakana:"ニュ",Romaji:"nyu"},{Katakana:"ニョ",Romaji:"nyo"}]},{id:23,Type:"Katakana",Katakana:"ヌ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:24,Type:"Katakana",Katakana:"ネ",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:25,Type:"Katakana",Katakana:"ノ",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:26,Type:"Katakana",Katakana:"ハ",Romaji:"ha",Accent:{Dakuten:"バ",Handakuten:"パ"},combinaison:[]},{id:27,Type:"Katakana",Katakana:"ヒ",Romaji:"hi",Accent:{Dakuten:"ビ",Handakuten:"ピ"},combinaison:[{Katakana:"ヒャ",Romaji:"hya"},{Katakana:"ヒュ",Romaji:"hyu"},{Katakana:"ヒョ",Romaji:"hyo"},{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"},{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:28,Type:"Katakana",Katakana:"フ",Romaji:"fu",Accent:{Dakuten:"ブ",Handakuten:"プ"},combinaison:[]},{id:29,Type:"Katakana",Katakana:"ヘ",Romaji:"he",Accent:{Dakuten:"ベ",Handakuten:"ペ"},combinaison:[]},{id:30,Type:"Katakana",Katakana:"ホ",Romaji:"ho",Accent:{Dakuten:"ボ",Handakuten:"ポ"},combinaison:[]},{id:31,Type:"Katakana",Katakana:"マ",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:32,Type:"Katakana",Katakana:"ミ",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ミャ",Romaji:"mya"},{Katakana:"ミュ",Romaji:"myu"},{Katakana:"ミョ",Romaji:"myo"}]},{id:33,Type:"Katakana",Katakana:"ム",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:34,Type:"Katakana",Katakana:"メ",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:35,Type:"Katakana",Katakana:"モ",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:36,Type:"Katakana",Katakana:"ヤ",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:37,Type:"Katakana",Katakana:"ユ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:38,Type:"Katakana",Katakana:"ヨ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:39,Type:"Katakana",Katakana:"ラ",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:40,Type:"Katakana",Katakana:"リ",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"リャ",Romaji:"rya"},{Katakana:"リュ",Romaji:"ryu"},{Katakana:"リョ",Romaji:"ryo"}]},{id:41,Type:"Katakana",Katakana:"ル",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:42,Type:"Katakana",Katakana:"レ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:43,Type:"Katakana",Katakana:"ロ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:44,Type:"Katakana",Katakana:"ワ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:45,Type:"Katakana",Katakana:"ヲ",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:46,Type:"Katakana",Katakana:"ン",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},combinaison:[]}],d5=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"ガ",Romaji:"ga",Katakana:"カ",Handakuten:null,combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ギ",Romaji:"gi",Katakana:"キ",Handakuten:null,combinaison:[{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"グ",Romaji:"gu",Katakana:"ク",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"ゲ",Romaji:"ge",Katakana:"ケ",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ゴ",Romaji:"go",Katakana:"コ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ザ",Romaji:"za",Katakana:"サ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"ジ",Romaji:"ji",Katakana:"シ",Handakuten:null,combinaison:[{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ズ",Romaji:"zu",Katakana:"ス",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ゼ",Romaji:"ze",Katakana:"セ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ゾ",Romaji:"zo",Katakana:"ソ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"ダ",Romaji:"da",Katakana:"タ",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ヂ",Romaji:"ji",Katakana:"チ",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"ヅ",Romaji:"zu",Katakana:"ツ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"デ",Romaji:"de",Katakana:"テ",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ド",Romaji:"do",Katakana:"ト",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"バ",Romaji:"ba",Katakana:"ハ",Handakuten:"パ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"ビ",Romaji:"bi",Katakana:"ヒ",Handakuten:"ピ",combinaison:[{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ブ",Romaji:"bu",Katakana:"フ",Handakuten:"プ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"ベ",Romaji:"be",Katakana:"ヘ",Handakuten:"ペ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ボ",Romaji:"bo",Katakana:"ホ",Handakuten:"ポ",combinaison:[]}],u5=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"パ",Romaji:"pa",Katakana:"ハ",Dakuten:"バ",combinaison:[]},{id:68,Nom:"Handakuten",Type:"Accents",Handakuten:"ピ",Romaji:"pi",Katakana:"ヒ",Dakuten:"ビ",combinaison:[{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:69,Nom:"Handakuten",Type:"Accents",Handakuten:"プ",Romaji:"pu",Katakana:"フ",Dakuten:"ブ",combinaison:[]},{id:70,Nom:"Handakuten",Type:"Accents",Handakuten:"ペ",Romaji:"pe",Katakana:"ヘ",Dakuten:"ベ",combinaison:[]},{id:71,Nom:"Handakuten",Type:"Accents",Handakuten:"ポ",Romaji:"po",Katakana:"ホ",Dakuten:"ボ",combinaison:[]}],g5=[{id:72,Type:"Combinaison",Katakana:"キャ",Romaji:"kya",Katakana1:"キ",Katakana2:"ヤ"},{id:73,Type:"Combinaison",Katakana:"キュ",Romaji:"kyu",Katakana1:"キ",Katakana2:"ユ"},{id:74,Type:"Combinaison",Katakana:"キョ",Romaji:"kyo",Katakana1:"キ",Katakana2:"ヨ"},{id:75,Type:"Combinaison",Katakana:"ギャ",Romaji:"gya",Katakana1:"ギ",Katakana2:"ヤ"},{id:76,Type:"Combinaison",Katakana:"ギュ",Romaji:"gyu",Katakana1:"ギ",Katakana2:"ユ"},{id:77,Type:"Combinaison",Katakana:"ギョ",Romaji:"gyo",Katakana1:"ギ",Katakana2:"ヨ"},{id:78,Type:"Combinaison",Katakana:"シャ",Romaji:"sha",Katakana1:"シ",Katakana2:"ヤ"},{id:79,Type:"Combinaison",Katakana:"シュ",Romaji:"shu",Katakana1:"シ",Katakana2:"ユ"},{id:80,Type:"Combinaison",Katakana:"ショ",Romaji:"sho",Katakana1:"シ",Katakana2:"ヨ"},{id:81,Type:"Combinaison",Katakana:"ジャ",Romaji:"ja",Katakana1:"ジ",Katakana2:"ヤ"},{id:82,Type:"Combinaison",Katakana:"ジュ",Romaji:"ju",Katakana1:"ジ",Katakana2:"ユ"},{id:83,Type:"Combinaison",Katakana:"ジョ",Romaji:"jo",Katakana1:"ジ",Katakana2:"ヨ"},{id:84,Type:"Combinaison",Katakana:"チャ",Romaji:"cha",Katakana1:"チ",Katakana2:"ヤ"},{id:85,Type:"Combinaison",Katakana:"チュ",Romaji:"chu",Katakana1:"チ",Katakana2:"ユ"},{id:86,Type:"Combinaison",Katakana:"チョ",Romaji:"cho",Katakana1:"チ",Katakana2:"ヨ"},{id:87,Type:"Combinaison",Katakana:"ニャ",Romaji:"nya",Katakana1:"ニ",Katakana2:"ヤ"},{id:88,Type:"Combinaison",Katakana:"ニュ",Romaji:"nyu",Katakana1:"ニ",Katakana2:"ユ"},{id:89,Type:"Combinaison",Katakana:"ニョ",Romaji:"nyo",Katakana1:"ニ",Katakana2:"ヨ"},{id:90,Type:"Combinaison",Katakana:"ヒャ",Romaji:"hya",Katakana1:"ヒ",Katakana2:"ヤ"},{id:91,Type:"Combinaison",Katakana:"ヒュ",Romaji:"hyu",Katakana1:"ヒ",Katakana2:"ユ"},{id:92,Type:"Combinaison",Katakana:"ヒョ",Romaji:"hyo",Katakana1:"ヒ",Katakana2:"ヨ"},{id:93,Type:"Combinaison",Katakana:"ビャ",Romaji:"bya",Katakana1:"ビ",Katakana2:"ヤ"},{id:94,Type:"Combinaison",Katakana:"ビュ",Romaji:"byu",Katakana1:"ビ",Katakana2:"ユ"},{id:95,Type:"Combinaison",Katakana:"ビョ",Romaji:"byo",Katakana1:"ビ",Katakana2:"ヨ"},{id:96,Type:"Combinaison",Katakana:"ピャ",Romaji:"pya",Katakana1:"ピ",Katakana2:"ヤ"},{id:97,Type:"Combinaison",Katakana:"ピュ",Romaji:"pyu",Katakana1:"ピ",Katakana2:"ユ"},{id:98,Type:"Combinaison",Katakana:"ピョ",Romaji:"pyo",Katakana1:"ピ",Katakana2:"ヨ"},{id:99,Type:"Combinaison",Katakana:"ミャ",Romaji:"mya",Katakana1:"ミ",Katakana2:"ヤ"},{id:100,Type:"Combinaison",Katakana:"ミュ",Romaji:"myu",Katakana1:"ミ",Katakana2:"ユ"},{id:101,Type:"Combinaison",Katakana:"ミョ",Romaji:"myo",Katakana1:"ミ",Katakana2:"ヨ"},{id:102,Type:"Combinaison",Katakana:"リャ",Romaji:"rya",Katakana1:"リ",Katakana2:"ヤ"},{id:103,Type:"Combinaison",Katakana:"リュ",Romaji:"ryu",Katakana1:"リ",Katakana2:"ユ"},{id:104,Type:"Combinaison",Katakana:"リョ",Romaji:"ryo",Katakana1:"リ",Katakana2:"ヨ"}],Te={Katakana:c5,Dakuten:d5,Handakuten:u5,Combinaison:g5},p5=j.div`
    display: flex;
    gap: 0.6vw;
    flex-wrap: wrap;
    width:calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,f5=j.div`
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
`,m5=j.div`
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
`,h5=j.div`
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
`,v5=j.div`
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
`,w5=j.div`
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
`;function ed({vocabulaireList:e=[]}){const{bgColor:n,fontColor:i,mainBgColor:a}=P(u=>u.mode),{color:t}=P(u=>u.color),r=P(u=>u.dataChoice.vocabulaire),o=P(u=>u.parametersExercice.exerciceNumber),s=He(),c=ge(),d=u=>{(r.includes(u)||r.length<o)&&c.pathname==="/choisir-ses/Vocabulaire"&&s(Zw(u))};return l.jsx(p5,{children:Array.isArray(e)&&e.length>0?e.map(u=>l.jsxs(f5,{$bgColor:n,onClick:()=>d(u),style:{backgroundColor:r.includes(u)?t:n,cursor:"pointer"},children:[l.jsxs(m5,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[u.kanji," ",l.jsx("span",{children:"Kanji"})]}),l.jsxs("p",{children:[u.hiragana," ",l.jsx("span",{children:"Hiragana"})]})]}),l.jsxs(h5,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[u.francais," ",l.jsx("span",{children:"Français"})]}),l.jsxs("p",{children:[u.Romaji," ",l.jsx("span",{children:"Romaji"})]})]}),l.jsxs(v5,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:Array.isArray(u.categorie)&&u.categorie[0]}),Array.isArray(u.categorie)&&u.categorie[1]&&l.jsx("span",{children:u.categorie[1]}),Array.isArray(u.categorie)&&u.categorie[2]&&l.jsx("span",{children:u.categorie[2]})]}),l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"}),u.niveau]})]})]},u.id)):l.jsx(w5,{$fontColor:i,$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}ed.propTypes={vocabulaireList:M.array.isRequired};const Om="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23F7F7F2'/%3e%3crect%20x='19.6904'%20y='14.9575'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Mm="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23353535'/%3e%3crect%20x='19.6904'%20y='14.957'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23353535'/%3e%3c/svg%3e",R5=j.header`
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
`,j5=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,y5=j.button`
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
`;function x5(){const{mainBgColor:e}=P(g=>g.mode),{color:n}=P(g=>g.color),i=ge(),a=P(g=>g.search.searchText),t=P(g=>g.search.jlptLevel),r=P(g=>g.search.kanaType),o=P(g=>g.mode),s=P(g=>g.search.vocabulaireCategorie),c=Wo.kanji.filter(g=>{var w,y;return(((w=g.Meaning)==null?void 0:w.toLowerCase().includes(a))||((y=g.SecondaryMeaning)==null?void 0:y.toLowerCase().includes(a)))&&(t===""||g.JLPTLevel===t)}).sort((g,w)=>{var v,m,f,R,k,C,L,T,F,D;const y=((v=g.Kanji)==null?void 0:v.toLowerCase().startsWith(a))||((m=g.OnReading)==null?void 0:m.some(q=>q.toLowerCase().startsWith(a)))||((f=g.KunReading)==null?void 0:f.some(q=>q.toLowerCase().startsWith(a)))||((R=g.Meaning)==null?void 0:R.toLowerCase().startsWith(a))||((k=g.SecondaryMeaning)==null?void 0:k.toLowerCase().startsWith(a)),x=((C=w.Kanji)==null?void 0:C.toLowerCase().startsWith(a))||((L=w.OnReading)==null?void 0:L.some(q=>q.toLowerCase().startsWith(a)))||((T=w.KunReading)==null?void 0:T.some(q=>q.toLowerCase().startsWith(a)))||((F=w.Meaning)==null?void 0:F.toLowerCase().startsWith(a))||((D=w.SecondaryMeaning)==null?void 0:D.toLowerCase().startsWith(a));return y&&!x?-1:!y&&x?1:0}),d=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison].filter(g=>{var w,y,x,v;return(((w=g.Hiragana)==null?void 0:w.toLowerCase().includes(a))||((y=g.Dakuten)==null?void 0:y.toLowerCase().includes(a))||((x=g.Handakuten)==null?void 0:x.toLowerCase().includes(a))||((v=g.Romaji)==null?void 0:v.toLowerCase().includes(a)))&&(r===""||g.Type===r)}).sort((g,w)=>{var v,m,f,R,k,C,L,T;const y=((v=g.Hiragana)==null?void 0:v.toLowerCase().startsWith(a))||((m=g.Dakuten)==null?void 0:m.toLowerCase().startsWith(a))||((f=g.Handakuten)==null?void 0:f.toLowerCase().startsWith(a))||((R=g.Romaji)==null?void 0:R.toLowerCase().startsWith(a)),x=((k=w.Hiragana)==null?void 0:k.toLowerCase().startsWith(a))||((C=w.Dakuten)==null?void 0:C.toLowerCase().startsWith(a))||((L=w.Handakuten)==null?void 0:L.toLowerCase().startsWith(a))||((T=w.Romaji)==null?void 0:T.toLowerCase().startsWith(a));return y&&!x?-1:!y&&x?1:0}),u=[...Te.Katakana,...Te.Dakuten,...Te.Handakuten,...Te.Combinaison].filter(g=>{var w,y,x,v;return(((w=g.Katakana)==null?void 0:w.toLowerCase().includes(a))||((y=g.Dakuten)==null?void 0:y.toLowerCase().includes(a))||((x=g.Handakuten)==null?void 0:x.toLowerCase().includes(a))||((v=g.Romaji)==null?void 0:v.toLowerCase().includes(a)))&&(r===""||g.Type===r)}).sort((g,w)=>{var v,m,f,R,k,C,L,T;const y=((v=g.Katakana)==null?void 0:v.toLowerCase().startsWith(a))||((m=g.Dakuten)==null?void 0:m.toLowerCase().startsWith(a))||((f=g.Handakuten)==null?void 0:f.toLowerCase().startsWith(a))||((R=g.Romaji)==null?void 0:R.toLowerCase().startsWith(a)),x=((k=w.Katakana)==null?void 0:k.toLowerCase().startsWith(a))||((C=w.Dakuten)==null?void 0:C.toLowerCase().startsWith(a))||((L=w.Handakuten)==null?void 0:L.toLowerCase().startsWith(a))||((T=w.Romaji)==null?void 0:T.toLowerCase().startsWith(a));return y&&!x?-1:!y&&x?1:0}),p=Array.isArray(zi.vocabulaire)?zi.vocabulaire.filter(g=>{var w,y,x,v;return(((w=g.kanji)==null?void 0:w.toLowerCase().includes(a))||((y=g.hiragana)==null?void 0:y.toLowerCase().includes(a))||((x=g.francais)==null?void 0:x.toLowerCase().includes(a))||((v=g.Romaji)==null?void 0:v.toLowerCase().includes(a)))&&(t===""||g.JLPTLevel===t)&&(s.length===0||s.includes(g.categorie))}).sort((g,w)=>{var v,m,f,R,k,C,L,T;const y=((v=g.kanji)==null?void 0:v.toLowerCase().startsWith(a))||((m=g.hiragana)==null?void 0:m.toLowerCase().startsWith(a))||((f=g.francais)==null?void 0:f.toLowerCase().startsWith(a))||((R=g.Romaji)==null?void 0:R.toLowerCase().startsWith(a)),x=((k=w.kanji)==null?void 0:k.toLowerCase().startsWith(a))||((C=w.hiragana)==null?void 0:C.toLowerCase().startsWith(a))||((L=w.francais)==null?void 0:L.toLowerCase().startsWith(a))||((T=w.Romaji)==null?void 0:T.toLowerCase().startsWith(a));return y&&!x?-1:!y&&x?1:0}):[],h=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})};return l.jsxs(R5,{children:[l.jsx(Sa,{}),l.jsx(by,{}),l.jsx(Nm,{}),i.pathname==="/Dictionnaire/Kanji"&&l.jsx(Yc,{kanjiList:c}),i.pathname==="/Dictionnaire/Hiragana"&&l.jsx(Gc,{hiraganaList:d}),i.pathname==="/Dictionnaire/Katakana"&&l.jsx(Xc,{katakanaList:u}),i.pathname==="/Dictionnaire/Vocabulaire"&&l.jsx(ed,{vocabulaireList:p}),l.jsx(j5,{children:l.jsx(y5,{onClick:h,$mainBgColor:e,$color:n,children:l.jsx("img",{src:o.mode==="light"?Om:Mm})})})]})}const k5=j.header`
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
`,P5=j.div`
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
`,C5=j.div`
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
`,L5=j.div`
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
`,K5=j.div`
@media screen and (max-width: 560px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}
`,b5=j.button`
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
`,T5=j.button`
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
`,$5=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
   
 `,S5=j.button`
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
`;function N5(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(b=>b.mode),{color:a}=P(b=>b.color),t=P(b=>b.dataChoice.hiragana),r=P(b=>b.dataChoice.katakana),o=P(b=>b.dataChoice.kanji),s=P(b=>b.dataChoice.vocabulaire),c=P(b=>b.dataChoice.nombres),d=ge();let u=vi();const p=P(b=>b.search.searchText),h=P(b=>b.search.jlptLevel),g=P(b=>b.search.kanaType),w=P(b=>b.mode),y=P(b=>b.search.vocabulaireCategorie),x=P(b=>b.parametersExercice.exerciceNumber),v=Wo.kanji.filter(b=>{var J,U;return(((J=b.Meaning)==null?void 0:J.toLowerCase().includes(p))||((U=b.SecondaryMeaning)==null?void 0:U.toLowerCase().includes(p)))&&(h===""||b.JLPTLevel===h)}).sort((b,J)=>{var V,S,O,H,A,_,ce,ne,De,N;const U=((V=b.Kanji)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.OnReading)==null?void 0:S.some(z=>z.toLowerCase().startsWith(p)))||((O=b.KunReading)==null?void 0:O.some(z=>z.toLowerCase().startsWith(p)))||((H=b.Meaning)==null?void 0:H.toLowerCase().startsWith(p))||((A=b.SecondaryMeaning)==null?void 0:A.toLowerCase().startsWith(p)),Z=((_=J.Kanji)==null?void 0:_.toLowerCase().startsWith(p))||((ce=J.OnReading)==null?void 0:ce.some(z=>z.toLowerCase().startsWith(p)))||((ne=J.KunReading)==null?void 0:ne.some(z=>z.toLowerCase().startsWith(p)))||((De=J.Meaning)==null?void 0:De.toLowerCase().startsWith(p))||((N=J.SecondaryMeaning)==null?void 0:N.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}),m=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison].filter(b=>{var J,U,Z,V;return(((J=b.Hiragana)==null?void 0:J.toLowerCase().includes(p))||((U=b.Dakuten)==null?void 0:U.toLowerCase().includes(p))||((Z=b.Handakuten)==null?void 0:Z.toLowerCase().includes(p))||((V=b.Romaji)==null?void 0:V.toLowerCase().includes(p)))&&(g===""||b.Type===g)}).sort((b,J)=>{var V,S,O,H,A,_,ce,ne;const U=((V=b.Hiragana)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.Dakuten)==null?void 0:S.toLowerCase().startsWith(p))||((O=b.Handakuten)==null?void 0:O.toLowerCase().startsWith(p))||((H=b.Romaji)==null?void 0:H.toLowerCase().startsWith(p)),Z=((A=J.Hiragana)==null?void 0:A.toLowerCase().startsWith(p))||((_=J.Dakuten)==null?void 0:_.toLowerCase().startsWith(p))||((ce=J.Handakuten)==null?void 0:ce.toLowerCase().startsWith(p))||((ne=J.Romaji)==null?void 0:ne.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}),f=[...Te.Katakana,...Te.Dakuten,...Te.Handakuten,...Te.Combinaison].filter(b=>{var J,U,Z,V;return(((J=b.Katakana)==null?void 0:J.toLowerCase().includes(p))||((U=b.Dakuten)==null?void 0:U.toLowerCase().includes(p))||((Z=b.Handakuten)==null?void 0:Z.toLowerCase().includes(p))||((V=b.Romaji)==null?void 0:V.toLowerCase().includes(p)))&&(g===""||b.Type===g)}).sort((b,J)=>{var V,S,O,H,A,_,ce,ne;const U=((V=b.Katakana)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.Dakuten)==null?void 0:S.toLowerCase().startsWith(p))||((O=b.Handakuten)==null?void 0:O.toLowerCase().startsWith(p))||((H=b.Romaji)==null?void 0:H.toLowerCase().startsWith(p)),Z=((A=J.Katakana)==null?void 0:A.toLowerCase().startsWith(p))||((_=J.Dakuten)==null?void 0:_.toLowerCase().startsWith(p))||((ce=J.Handakuten)==null?void 0:ce.toLowerCase().startsWith(p))||((ne=J.Romaji)==null?void 0:ne.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}),R=Array.isArray(zi.vocabulaire)?zi.vocabulaire.filter(b=>{var J,U,Z,V;return(((J=b.kanji)==null?void 0:J.toLowerCase().includes(p))||((U=b.hiragana)==null?void 0:U.toLowerCase().includes(p))||((Z=b.francais)==null?void 0:Z.toLowerCase().includes(p))||((V=b.Romaji)==null?void 0:V.toLowerCase().includes(p)))&&(h===""||b.niveau===h)&&(y.length===0||y.includes(b.categorie))}).sort((b,J)=>{var V,S,O,H,A,_,ce,ne;const U=((V=b.kanji)==null?void 0:V.toLowerCase().startsWith(p))||((S=b.hiragana)==null?void 0:S.toLowerCase().startsWith(p))||((O=b.francais)==null?void 0:O.toLowerCase().startsWith(p))||((H=b.Romaji)==null?void 0:H.toLowerCase().startsWith(p)),Z=((A=J.kanji)==null?void 0:A.toLowerCase().startsWith(p))||((_=J.hiragana)==null?void 0:_.toLowerCase().startsWith(p))||((ce=J.francais)==null?void 0:ce.toLowerCase().startsWith(p))||((ne=J.Romaji)==null?void 0:ne.toLowerCase().startsWith(p));return U&&!Z?-1:!U&&Z?1:0}):[],k=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})},L=(()=>{switch(d.pathname){case"/choisir-ses/Kanji":return{modeTitle:"Kanji"};case"/choisir-ses/Hiragana":return{modeTitle:"Hiragana"};case"/choisir-ses/Katakana":return{modeTitle:"Katakana"};case"/choisir-ses/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/choisir-ses/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),T=d.pathname;let F;switch(T){case"/choisir-ses/Hiragana":F=t.length;break;case"/choisir-ses/Katakana":F=r.length;break;case"/choisir-ses/Kanji":F=o.length;break;case"/choisir-ses/Vocabulaire":F=s.length;break;case"/choisir-ses/Nombres":F=c.length;break;default:F=0;break}const D=He(),q=()=>{switch(d.pathname){case"/choisir-ses/Vocabulaire":D(eR());break;case"/choisir-ses/Hiragana":D(aR());break;case"/choisir-ses/Katakana":D(nR());break;case"/choisir-ses/Kanji":D(Xw());break;case"/choisir-ses/Nombres":D(iR());break}},nn=()=>{F!==x?alert("Veuillez sélectionner plus de "+x+" "+L.modeTitle):u(-1)};return l.jsxs(k5,{children:[l.jsx(b5,{onClick:()=>u(-1),$bgColor:e,$color:a,$mainBgColor:i,children:l.jsx("img",{src:w.mode==="light"?Uo:Km})}),l.jsxs(P5,{children:[l.jsxs(C5,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("div",{children:[l.jsxs("p",{children:[L.modeTitle," sélectionnes"]}),l.jsx("button",{onClick:q,children:"Vider"})]}),l.jsxs("div",{id:"selectionnes",children:[T==="/choisir-ses/Hiragana"&&t.map((b,J)=>l.jsx("p",{children:b.Nom==="Dakuten"?b.Dakuten:b.Nom==="Handakuten"?b.Handakuten:b.Hiragana},J)),T==="/choisir-ses/Katakana"&&r.map((b,J)=>l.jsx("p",{children:b.Nom==="Dakuten"?b.Dakuten:b.Nom==="Handakuten"?b.Handakuten:b.Katakana},J)),T==="/choisir-ses/Kanji"&&o.map((b,J)=>l.jsx("p",{children:b.Kanji},J)),T==="/choisir-ses/Vocabulaire"&&s.map((b,J)=>l.jsx("p",{children:b.kanji||b.hiragana},J)),T==="/choisir-ses/Nombres"&&c.map((b,J)=>l.jsx("p",{children:b.Nombre},J))]})]}),l.jsxs(L5,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("span",{children:[" ",F,"/",x]}),l.jsxs("p",{children:[L.modeTitle," sélectionnes"]})]})]}),l.jsx(Nm,{}),l.jsxs(K5,{children:[d.pathname==="/choisir-ses/Kanji"&&l.jsx(Yc,{kanjiList:v}),d.pathname==="/choisir-ses/Hiragana"&&l.jsx(Gc,{hiraganaList:m}),d.pathname==="/choisir-ses/Katakana"&&l.jsx(Xc,{katakanaList:f}),d.pathname==="/choisir-ses/Vocabulaire"&&l.jsx(ed,{vocabulaireList:R})]}),l.jsx(T5,{onClick:nn,$bgColor:e,$color:a,$mainBgColor:i,children:"Valider"}),l.jsx($5,{children:l.jsx(S5,{onClick:k,$bgColor:e,$mainBgColor:i,$color:a,children:l.jsx("img",{src:w.mode==="light"?Om:Mm})})})]})}const O5=j.div`
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
    
`;function Em({question:e,isCorrect:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=P(u=>u.mode),{color:r}=P(u=>u.color),o=ge(),s=P(u=>u.parametersExercice.exerciceDifficulté);function c(){return e.kanji===""?e.hiragana:e.kanji}function d(){if(e.Type==="Hiragana"||e.Type==="Katakana")return e.Hiragana||e.Katakana;if(e.Nom==="Dakuten")return e.Dakuten;if(e.Nom==="Handakuten")return e.Handakuten;if(e.Type==="Combinaison")return e.Hiragana||e.Katakana}return l.jsx(O5,{$mainBgColor:t,$color:r,$bgColor:i,$fontColor:a,$isCorrect:n,children:l.jsxs("div",{children:[s==="Débutant"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.OnPrincipalReadingRomaji||e.KunPrincipalReadingRomaji||e.Romaji}):null,l.jsx("p",{children:e.Kanji||c()||e.Nombre||d()}),s=="Débutant"||s=="Intermédiaire"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.KunPrincipalReading||e.OnPrincipalReadingRomaji||e.hiragana}):null]})},e.id)}Em.propTypes={question:M.shape({id:M.string.isRequired,Kanji:M.string,Katakana:M.string,Hiragana:M.string,kanji:M.string,Nombre:M.string,hiragana:M.string,Handakuten:M.string,Dakuten:M.string,Type:M.string,Nom:M.string,Romaji:M.string,KunPrincipalReadingRomaji:M.string,OnPrincipalReadingRomaji:M.string,KunPrincipalReading:M.string,OnPrincipalReading:M.string}).isRequired,isCorrect:M.bool};const M5=j.div`
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
`,E5=j.button`
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
`;function Hm({question:e,options:n,onAnswer:i,buttonDisabled:a}){const{bgColor:t,fontColor:r,mainBgColor:o}=P(y=>y.mode),[s,c]=K.useState(""),[d,u]=K.useState(!1),[p,h]=K.useState(null);K.useEffect(()=>{u(!1),h(null)},[e]);const g=y=>{c(y);const x=y===(e.Meaning||e.Romaji||e.francais);u(!0),h(y),i(x)},w=y=>{c(y.target.value)};return l.jsx(M5,{$mainBgColor:o,$bgColor:t,$fontColor:r,children:n.length>0?n.map((y,x)=>l.jsx(E5,{$fontColor:r,$mainBgColor:o,$bgColor:t,onClick:()=>g(y),$isCorrect:y===(e.Meaning||e.Romaji||e.francais),$isAnswered:d,$isSelected:y===p,disabled:a,children:y},x)):l.jsx("input",{type:"text",value:s,onChange:w})},e.id)}Hm.propTypes={question:M.shape({id:M.string.isRequired,Meaning:M.string,Romaji:M.string,francais:M.string}).isRequired,options:M.arrayOf(M.string).isRequired,onAnswer:M.func.isRequired,buttonDisabled:M.bool.isRequired};const nd=({color:e,width:n="2.5vw",height:i="2.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 78 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsxs("g",{clipPath:"url(#clip0_309_10)",children:[l.jsx("path",{d:"M74.7033 36.2802C72.8874 36.2802 71.3902 37.6023 71.3902 39.434C71.2309 51.3642 64.3499 62.1476 53.8214 67.9295C37.9569 76.6423 19.4165 68.8215 12.3126 58.2134L22.3314 60.2999C23.9879 60.6344 25.8037 59.631 26.1382 57.8151C26.4727 56.1586 25.4692 54.3428 23.6534 54.0083L3.95026 49.867C2.80343 49.5962 -0.206994 50.4245 0.143426 53.5145L2.62822 73.3929C2.7875 75.0494 4.12547 76.2122 5.782 76.2122C8.25087 76.2122 9.25435 74.3964 9.09507 72.5646L7.93231 62.8644C24.0357 82.1853 44.4716 79.4934 56.8 73.9026C69.5585 67.1013 77.6818 54.0242 77.8411 39.5933C77.857 37.7775 76.5191 36.2802 74.7033 36.2802Z",fill:e}),l.jsx("path",{d:"M3.28122 41.7118C5.09703 41.7118 6.59428 40.3897 6.59428 38.558C6.75357 26.6278 13.6345 15.8444 24.1631 10.0625C40.0275 1.34974 58.5679 9.17048 65.6719 19.7787L55.6531 17.6921C53.9966 17.3576 52.1807 18.361 51.8462 20.1769C51.5118 21.8334 52.5152 23.6492 54.331 23.9837L74.0501 28.125C75.197 28.3958 78.2074 27.5675 77.857 24.4775L75.3722 4.59909C75.2129 2.94256 73.8749 1.7798 72.2184 1.7798C69.7495 1.7798 68.7461 3.59562 68.9053 5.42736L70.0522 15.1276C53.9488 -4.17734 33.5129 -1.5014 21.1845 4.10532C8.42603 10.8907 0.302651 23.9837 0.127441 38.3987C0.127441 40.2304 1.46541 41.7118 3.28122 41.7118Z",fill:e})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_309_10",children:l.jsx("rect",{width:"78",height:"78",fill:"white"})})})]});nd.propTypes={color:M.string,width:M.string,height:M.string};const H5=j.div`
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
`;function Dm({onReload:e,onSkip:n,buttonDisabled:i}){const{bgColor:a,mainBgColor:t,fontColor:r}=P(d=>d.mode),{color:o}=P(d=>d.color),s=vi(),c=window.innerWidth<=560?"7vw":"2.5vw";return l.jsxs(H5,{$color:o,$bgColor:a,$mainBgColor:t,$fontColor:r,children:[l.jsx("button",{onClick:()=>{e(),s(-1)},children:"Retour"}),l.jsx("button",{onClick:n,disabled:i,children:"Passer"}),l.jsx("button",{onClick:e,children:l.jsx(nd,{width:c,height:c,color:o,children:" "})})]})}Dm.propTypes={onReload:M.func.isRequired,onSkip:M.func.isRequired,buttonDisabled:M.bool};const D5=j.div`
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
`,J5=j.div`
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
`,z5=j.div`
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
`,F5=j.div`
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
`,_5=j.div`
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
`,A5=j.div`
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

`,B5=j.div`
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
`,I5=j.div`
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
`,V5=j.div`
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
`,W5=j.div`
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
`,U5=j.div`
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
`;function Jm({onReload:e}){const n=vi(),{bgColor:i,fontColor:a,mainBgColor:t}=P(f=>f.mode),{color:r}=P(f=>f.color),o=P(f=>f.parametersExercice.exerciceModeDeJeu),s=P(f=>f.parametersExercice.exerciceNumber),c=P(f=>f.parametersExercice.exerciceDifficulté),d=P(f=>f.parametersExercice.exerciceTimer),u=P(f=>f.exercice.totalTimer),p=P(f=>f.parametersExercice.exerciceTimerActive),h=P(f=>f.exercice.totalfaute),g=P(f=>f.exercice.questionsIncorrectes),[w,y]=K.useState(null),v=(f=>{const R=Math.floor(f/60),k=f%60,C=R.toString().padStart(2,"0"),L=k.toString().padStart(2,"0");return`${C}:${L}`})(u);if(!g)return l.jsx("div",{children:"Loading..."});const m=window.innerWidth<=560?"7vw":"2.5vw";return l.jsxs(D5,{$mainBgColor:t,children:[l.jsxs(J5,{$bgColor:i,children:[l.jsxs(z5,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Difficulté"}),l.jsx("p",{children:c})]}),l.jsxs(F5,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Nombre de Kanji "}),l.jsx("p",{children:s})]}),l.jsxs(_5,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Mode de jeu"}),l.jsx("p",{children:o})]}),l.jsx(A5,{$mainBgColor:t,$fontColor:a,$color:r,children:w&&l.jsxs("div",{children:[l.jsx("h3",{children:w.kanji||w.Dakuten||w.Handakuten||w.hiragana||w.Hiragana||w.Katakana||w.Kanji}),l.jsxs("div",{children:[w.Romaji&&l.jsxs("p",{children:[l.jsx("span",{children:"Romaji "})," ",w.Romaji]}),w.francais&&l.jsxs("p",{children:[l.jsx("span",{children:"Francais "})," ",w.francais]}),w.hiragana&&l.jsxs("p",{children:[l.jsx("span",{children:"Hiragana "})," ",w.hiragana]}),w.OnPrincipalReading&&l.jsxs("p",{children:[l.jsx("span",{children:"On "})," ",w.OnPrincipalReading]}),w.KunPrincipalReading&&l.jsxs("p",{children:[l.jsx("span",{children:"Kun "})," ",w.KunPrincipalReading]}),w.Meaning&&l.jsxs("p",{children:[l.jsx("span",{children:"Francais "})," ",w.Meaning]})]})]})}),l.jsx(B5,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsx("div",{children:g.length>0?g.filter(Boolean).map((f,R)=>l.jsx("p",{onMouseEnter:()=>y(f),children:f.kanji||(f.Nom==="Handakuten"?f.Handakuten:f.Nom==="Dakuten"?f.Dakuten:f.hiragana||f.Hiragana||f.Katakana||f.Kanji)},R)):l.jsx("p",{children:"pas de faute"})})}),l.jsxs(I5,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Erreur"}),l.jsx("p",{children:h})]}),l.jsx(V5,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsxs("p",{children:[p===!1?v:d,l.jsx("span",{children:"s"})]})}),l.jsx(W5,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:l.jsx("div",{})})]}),l.jsxs(U5,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:[l.jsxs("button",{onClick:e,children:[" ",l.jsx(nd,{color:r,width:m,height:m,children:" "})]}),l.jsx("button",{onClick:()=>{e(),n(-1)},children:"Terminer"})]})]})}Jm.propTypes={onReload:M.func.isRequired};const Q5=j.div`
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
`,q5=j.div`
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
`,Z5=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
`,Y5=j.div`
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
`,Yu=(e,n)=>{const i=[e],a=n.filter(t=>t!==e);for(;i.length<4;){const t=Math.floor(Math.random()*a.length),r=a[t];i.includes(r)||i.push(r)}return i.sort(()=>.5-Math.random())};function G5(){const e=P(N=>N.parametersExercice.exerciceModeDeJeu),n=P(N=>N.parametersExercice.exerciceNumber),i=P(N=>N.dataChoice),a=P(N=>N.parametersExercice.exerciceTypeDeKana),t=P(N=>N.parametersExercice.exerciceTimerActive),r=P(N=>N.dataChoice.katakana),o=P(N=>N.dataChoice.hiragana),{bgColor:s}=P(N=>N.mode),[c,d]=K.useState([]),[u,p]=K.useState(0),[h,g]=K.useState(null),[w,y]=K.useState(0),x=K.useRef(null),v=K.useRef(null),m=He(),f=ge(),R=P(N=>N.parametersExercice.exerciceTimer),[k,C]=K.useState(R),{color:L}=P(N=>N.color),[T,F]=K.useState(1),[D,q]=K.useState(1),[nn,b]=K.useState(!1),[J,U]=K.useState(!1),Z=K.useCallback(N=>{q(z=>z+1),m(fr(D)),N===!0&&(q(1),m(fr(D)))},[q,m,D]),V=K.useCallback((N,z)=>{F(On=>On+1),m(pr(T)),m(Uw(z)),N===!0&&(F(1),m(pr(T)))},[F,m,T]),S=K.useCallback(()=>{v.current&&clearInterval(v.current),y(0),t===!1&&(v.current=setInterval(()=>{y(N=>N+1)},1e3))},[t]),O=K.useCallback(()=>{v.current&&(clearInterval(v.current),v.current=null)},[]),H=K.useCallback(()=>{C(R),x.current&&x.current()},[R]),A=K.useCallback(()=>{if(t===!0){const N=c[u];setTimeout(()=>{u<c.length-1?(p(u+1),V(!1,N)):(V(!1,N),U(!0),m(Wu(w)),O())},900)}},[u,c,t,V,O,m,w]);K.useEffect(()=>{if(t===!0&&J===!1){const N=setInterval(()=>{C(z=>z<=1?(clearInterval(N),A(),setTimeout(()=>{C(R)},900),0):z-1)},1e3);return()=>clearInterval(N)}},[R,A,m,t,J]),K.useEffect(()=>{C(R)},[R]),K.useEffect(()=>{H&&H(R)},[H,R]);const _=K.useCallback(()=>{let N;if(f.pathname.includes("/Exercices/Kanji")?(S(),N=Wo.kanji):f.pathname.includes("/Exercices/Hiragana")?(S(),a==="normal"?N=be.Hiragana:a==="accents"?N=[...be.Dakuten,...be.Handakuten]:a==="combinaison"?N=be.Combinaison:a==="tout"&&(N=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison],e==="Choisir ses questions"&&(N=o.map(z=>z.affiche==="Hiragana"?{...z,Type:"Hiragana"}:z.affiche==="Accents"?{...z,Type:z.affiche==="Accents"?"Dakuten":"Handakuten"}:{...z,Type:"Combinaison"})))):f.pathname.includes("/Exercices/Vocabulaire")?(S(),N=zi.vocabulaire):f.pathname.includes("/Exercices/Nombres")?(S(),N=zi.nombres):f.pathname.includes("/Exercices/Katakana")&&(S(),a==="normal"?N=Te.Katakana:a==="accents"?N=[...Te.Dakuten,...Te.Handakuten]:a==="combinaison"?N=Te.Combinaison:a==="tout"?(N=[...Te.Katakana,...Te.Dakuten,...Te.Handakuten,...Te.Combinaison],e==="Choisir ses questions"&&(N=r.map(z=>z.affiche==="Katakana"?{...z,Type:"Katakana"}:z.affiche==="Accents"?{...z,Type:z.affiche==="Accents"?"Dakuten":"Handakuten"}:{...z,Type:"Combinaison"}))):O()),N){let z=[];if(e==="Aléatoire")z=N.sort(()=>.5-Math.random()).slice(0,n);else if(e==="N5")z=N.filter(G=>G.JLPTLevel==="N5").sort(()=>.5-Math.random()).slice(0,n);else if(e==="Choisir ses questions"){if(m(xi("tout")),f.pathname.includes("/Exercices/Kanji")&&i.kanji){const G=i.kanji.map(X=>X.Kanji);z=N.filter(X=>G.includes(X.Kanji)).sort(()=>.5-Math.random()).slice(0,n),console.log(z)}else if(f.pathname.includes("/Exercices/Vocabulaire")&&i.vocabulaire){const G=i.vocabulaire.map(X=>X.francais);z=N.filter(X=>G.includes(X.francais)).sort(()=>.5-Math.random()).slice(0,n)}else if(f.pathname.includes("/Exercices/Hiragana")&&i.hiragana){const G=i.hiragana.map(X=>X.hiragana);z=N.filter(X=>G.includes(X.hiragana)).sort(()=>.5-Math.random()).slice(0,n)}else if(f.pathname.includes("/Exercices/Katakana")&&i.katakana){const G=i.katakana.map(X=>X.Katakana);z=N.filter(X=>G.includes(X.Katakana)).sort(()=>.5-Math.random()).slice(0,n)}else if(f.pathname.includes("/Exercices/Nombres")&&i.nombre){const G=i.nombre.map(X=>X.francais);z=N.filter(X=>G.includes(X.francais)).sort(()=>.5-Math.random()).slice(0,n)}}const On=z.map(G=>{if(f.pathname.includes("/Exercices/Hiragana")||f.pathname.includes("/Exercices/Katakana")){const X=G.Romaji,Wn=Yu(X,N.map(Ie=>Ie.Romaji));return{...G,options:Wn,id:G.id.toString()}}else{const X=G.Meaning||G.francais,Wn=Yu(X,N.map(Ie=>Ie.Meaning||Ie.francais));return{...G,options:Wn,id:G.id.toString()}}});d(On),p(0)}},[e,n,i,a,f.pathname,S,O,m,r,o]);K.useEffect(()=>{const N=()=>{m(pr(0)),m(fr(0))};_(),O(),S(),N()},[_,O,S,m]);const ce=N=>{g(N);const z=c[u];N?(Z(),b(!0),O()):(V(!1,z),b(!0),O()),setTimeout(()=>{u<c.length-1?(p(u+1),g(null)):(m(Wu(w)),U(!0)),g(null),b(!1),C(R)},900),x.current&&x.current()},ne=()=>{ce(!1)},De=()=>{Z(!0),V(!0),m(fr(0)),m(pr(0)),_(),O(),S(),U(!1),m(Qw()),C(R)};return l.jsxs(Q5,{children:[J===!0?l.jsx(Jm,{onReload:De}):null,l.jsxs(q5,{$bgColor:s,children:[t===!0&&l.jsx(Y5,{$color:L,children:l.jsxs("p",{children:[k,l.jsx("span",{children:"s"})]})}),c&&c.length>0?l.jsxs(Z5,{children:[l.jsx(Em,{question:c[u],isCorrect:h}),l.jsx(Hm,{question:c[u],options:c[u].options,onAnswer:ce,isCorrect:h,buttonDisabled:nn})]},c[u].id):l.jsx("p",{children:"Aucune question disponible."})]}),l.jsx(Dm,{onReload:De,onSkip:ne,buttonDisabled:nn})]})}const X5=j.div`
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
`;function Gu(){const e=P(s=>s.parametersExercice.exerciceNumber),n=P(s=>s.exercice.totalfaute),i=P(s=>s.exercice.totalreussite),{color:a}=P(s=>s.color),{bgColor:t,mainBgColor:r}=P(s=>s.mode),o=(n+i)/e*100;return l.jsx(X5,{$bgColor:t,$mainBgColor:r,$color:a,children:l.jsx("div",{children:l.jsx("div",{style:{height:`${o}%`}})})})}const ex=j.div`
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
`,nx=j.div`
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
`;function ix(){const{bgColor:e}=P(n=>n.mode);return l.jsxs(ex,{$bgColor:e,children:[l.jsx(G5,{}),l.jsxs(nx,{children:[l.jsx(Gu,{}),l.jsx(Gu,{})]})]})}const ax=j.div`
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
`;function tx(){const{bgColor:e,fontColor:n,mainBgColor:i}=P(s=>s.mode),a=P(s=>s.exercice.totalfaute),t=P(s=>s.exercice.totalreussite),r=P(s=>s.parametersExercice.exerciceNumber),o=t+a;return l.jsxs(ax,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("p",{children:t}),l.jsxs("p",{children:[o,"/",r]}),l.jsx("p",{children:a})]})}function rx(){return l.jsx("div",{})}const ox=j.div`
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
`;function lx(){return l.jsxs(ox,{children:[l.jsx(tx,{}),location.pathname==="/Exercices/Katakana"||location.pathname==="/Exercices/Hiragana"||location.pathname==="/Exercices/Kanji"&&l.jsx(rx,{})]})}const sx=j.div`
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
    
`;function cx(){return l.jsxs(sx,{children:[l.jsx(lx,{}),l.jsx(ix,{})]})}const dx="/Nihongo-V2/",ux=Ol.createRoot(document.getElementById("root"));ux.render(l.jsx(N2,{store:tR,children:l.jsxs(o1,{basename:dx,children:[l.jsx(hR,{}),l.jsxs(Xv,{children:[l.jsx(an,{path:"/",element:l.jsx(WR,{})}),l.jsx(an,{path:"/kanji",element:l.jsx(vy,{})}),l.jsx(an,{path:"/vocabulaire",element:l.jsx(Ry,{})}),l.jsx(an,{path:"/katakana",element:l.jsx(xy,{})}),l.jsx(an,{path:"/hiragana",element:l.jsx(Py,{})}),l.jsx(an,{path:"/nombres",element:l.jsx(Ly,{})}),l.jsx(an,{path:"/dictionnaire/*",element:l.jsx(x5,{})}),l.jsx(an,{path:"/choisir-ses/*",element:l.jsx(N5,{})}),l.jsx(an,{path:"/color",element:l.jsx(yR,{})}),l.jsx(an,{path:"/exercices/*",element:l.jsx(cx,{})}),l.jsx(an,{path:"*",element:l.jsx(wR,{})})]})]})}));
