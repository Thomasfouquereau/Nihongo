function x0(e,n){for(var i=0;i<n.length;i++){const a=n[i];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},go={},Wd={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=Symbol.for("react.element"),C0=Symbol.for("react.portal"),K0=Symbol.for("react.fragment"),O0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),$0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),L0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),Vs=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,qd={};function ka(e,n,i){this.props=e,this.context=n,this.refs=qd,this.updater=i||Ud}ka.prototype.isReactComponent={};ka.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ka.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zd(){}Zd.prototype=ka.prototype;function Mc(e,n,i){this.props=e,this.context=n,this.refs=qd,this.updater=i||Ud}var Ec=Mc.prototype=new Zd;Ec.constructor=Mc;Qd(Ec,ka.prototype);Ec.isPureReactComponent=!0;var Ws=Array.isArray,Yd=Object.prototype.hasOwnProperty,Hc={current:null},Gd={key:!0,ref:!0,__self:!0,__source:!0};function Xd(e,n,i){var a,t={},r=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)Yd.call(n,a)&&!Gd.hasOwnProperty(a)&&(t[a]=n[a]);var c=arguments.length-2;if(c===1)t.children=i;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];t.children=s}if(e&&e.defaultProps)for(a in c=e.defaultProps,c)t[a]===void 0&&(t[a]=c[a]);return{$$typeof:bt,type:e,key:r,ref:o,props:t,_owner:Hc.current}}function H0(e,n){return{$$typeof:bt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===bt}function D0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var Us=/\/+/g;function zo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?D0(""+e.key):n.toString(36)}function gr(e,n,i,a,t){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bt:case C0:o=!0}}if(o)return o=e,t=t(o),e=a===""?"."+zo(o,0):a,Ws(t)?(i="",e!=null&&(i=e.replace(Us,"$&/")+"/"),gr(t,n,i,"",function(u){return u})):t!=null&&(Dc(t)&&(t=H0(t,i+(!t.key||o&&o.key===t.key?"":(""+t.key).replace(Us,"$&/")+"/")+e)),n.push(t)),1;if(o=0,a=a===""?".":a+":",Ws(e))for(var c=0;c<e.length;c++){r=e[c];var s=a+zo(r,c);o+=gr(r,n,i,s,t)}else if(s=E0(e),typeof s=="function")for(e=s.call(e),c=0;!(r=e.next()).done;)r=r.value,s=a+zo(r,c++),o+=gr(r,n,i,s,t);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Bt(e,n,i){if(e==null)return e;var a=[],t=0;return gr(e,a,"","",function(r){return n.call(i,r,t++)}),a}function F0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},fr={transition:null},_0={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:fr,ReactCurrentOwner:Hc};function eg(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Bt,forEach:function(e,n,i){Bt(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return Bt(e,function(){n++}),n},toArray:function(e){return Bt(e,function(n){return n})||[]},only:function(e){if(!Dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=ka;J.Fragment=K0;J.Profiler=b0;J.PureComponent=Mc;J.StrictMode=O0;J.Suspense=L0;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;J.act=eg;J.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Qd({},e.props),t=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Hc.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in n)Yd.call(n,s)&&!Gd.hasOwnProperty(s)&&(a[s]=n[s]===void 0&&c!==void 0?c[s]:n[s])}var s=arguments.length-2;if(s===1)a.children=i;else if(1<s){c=Array(s);for(var u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:bt,type:e.type,key:t,ref:r,props:a,_owner:o}};J.createContext=function(e){return e={$$typeof:N0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$0,_context:e},e.Consumer=e};J.createElement=Xd;J.createFactory=function(e){var n=Xd.bind(null,e);return n.type=e,n};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:S0,render:e}};J.isValidElement=Dc;J.lazy=function(e){return{$$typeof:M0,_payload:{_status:-1,_result:e},_init:F0}};J.memo=function(e,n){return{$$typeof:T0,type:e,compare:n===void 0?null:n}};J.startTransition=function(e){var n=fr.transition;fr.transition={};try{e()}finally{fr.transition=n}};J.unstable_act=eg;J.useCallback=function(e,n){return Ee.current.useCallback(e,n)};J.useContext=function(e){return Ee.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};J.useEffect=function(e,n){return Ee.current.useEffect(e,n)};J.useId=function(){return Ee.current.useId()};J.useImperativeHandle=function(e,n,i){return Ee.current.useImperativeHandle(e,n,i)};J.useInsertionEffect=function(e,n){return Ee.current.useInsertionEffect(e,n)};J.useLayoutEffect=function(e,n){return Ee.current.useLayoutEffect(e,n)};J.useMemo=function(e,n){return Ee.current.useMemo(e,n)};J.useReducer=function(e,n,i){return Ee.current.useReducer(e,n,i)};J.useRef=function(e){return Ee.current.useRef(e)};J.useState=function(e){return Ee.current.useState(e)};J.useSyncExternalStore=function(e,n,i){return Ee.current.useSyncExternalStore(e,n,i)};J.useTransition=function(){return Ee.current.useTransition()};J.version="18.3.1";Wd.exports=J;var O=Wd.exports;const Ci=Id(O),Pl=x0({__proto__:null,default:Ci},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=O,A0=Symbol.for("react.element"),B0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,I0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V0={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,n,i){var a,t={},r=null,o=null;i!==void 0&&(r=""+i),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)J0.call(n,a)&&!V0.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)t[a]===void 0&&(t[a]=n[a]);return{$$typeof:A0,type:e,key:r,ref:o,props:t,_owner:I0.current}}go.Fragment=B0;go.jsx=ng;go.jsxs=ng;Vd.exports=go;var l=Vd.exports,xl={},ig={exports:{}},Ge={},ag={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,T){var E=S.length;S.push(T);e:for(;0<E;){var _=E-1>>>1,A=S[_];if(0<t(A,T))S[_]=T,S[E]=A,E=_;else break e}}function i(S){return S.length===0?null:S[0]}function a(S){if(S.length===0)return null;var T=S[0],E=S.pop();if(E!==T){S[0]=E;e:for(var _=0,A=S.length,ue=A>>>1;_<ue;){var L=2*(_+1)-1,ee=S[L],oe=L+1,Y=S[oe];if(0>t(ee,E))oe<A&&0>t(Y,ee)?(S[_]=Y,S[oe]=E,_=oe):(S[_]=ee,S[L]=E,_=L);else if(oe<A&&0>t(Y,E))S[_]=Y,S[oe]=E,_=oe;else break e}}return T}function t(S,T){var E=S.sortIndex-T.sortIndex;return E!==0?E:S.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var s=[],u=[],d=1,f=null,g=3,v=!1,j=!1,R=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(S){for(var T=i(u);T!==null;){if(T.callback===null)a(u);else if(T.startTime<=S)a(u),T.sortIndex=T.expirationTime,n(s,T);else break;T=i(u)}}function k(S){if(R=!1,h(S),!j)if(i(s)!==null)j=!0,I(P);else{var T=i(u);T!==null&&Z(k,T.startTime-S)}}function P(S,T){j=!1,R&&(R=!1,m(b),b=-1),v=!0;var E=g;try{for(h(T),f=i(s);f!==null&&(!(f.expirationTime>T)||S&&!q());){var _=f.callback;if(typeof _=="function"){f.callback=null,g=f.priorityLevel;var A=_(f.expirationTime<=T);T=e.unstable_now(),typeof A=="function"?f.callback=A:f===i(s)&&a(s),h(T)}else a(s);f=i(s)}if(f!==null)var ue=!0;else{var L=i(u);L!==null&&Z(k,L.startTime-T),ue=!1}return ue}finally{f=null,g=E,v=!1}}var K=!1,x=null,b=-1,F=5,D=-1;function q(){return!(e.unstable_now()-D<F)}function $(){if(x!==null){var S=e.unstable_now();D=S;var T=!0;try{T=x(!0,S)}finally{T?H():(K=!1,x=null)}}else K=!1}var H;if(typeof p=="function")H=function(){p($)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,U=W.port2;W.port1.onmessage=$,H=function(){U.postMessage(null)}}else H=function(){w($,0)};function I(S){x=S,K||(K=!0,H())}function Z(S,T){b=w(function(){S(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){j||v||(j=!0,I(P))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return i(s)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var E=g;g=T;try{return S()}finally{g=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=g;g=S;try{return T()}finally{g=E}},e.unstable_scheduleCallback=function(S,T,E){var _=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?_+E:_):E=_,S){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=E+A,S={id:d++,callback:T,priorityLevel:S,startTime:E,expirationTime:A,sortIndex:-1},E>_?(S.sortIndex=E,n(u,S),i(s)===null&&S===i(u)&&(R?(m(b),b=-1):R=!0,Z(k,E-_))):(S.sortIndex=A,n(s,S),j||v||(j=!0,I(P))),S},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(S){var T=g;return function(){var E=g;g=T;try{return S.apply(this,arguments)}finally{g=E}}}})(tg);ag.exports=tg;var W0=ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=O,qe=W0;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,ot={};function Mi(e,n){ca(e,n),ca(e+"Capture",n)}function ca(e,n){for(ot[e]=n,e=0;e<n.length;e++)rg.add(n[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,Q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qs={},qs={};function q0(e){return Cl.call(qs,e)?!0:Cl.call(Qs,e)?!1:Q0.test(e)?qs[e]=!0:(Qs[e]=!0,!1)}function Z0(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,n,i,a){if(n===null||typeof n>"u"||Z0(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function He(e,n,i,a,t,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ke[n]=new He(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fc=/[\-:]([a-z])/g;function _c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Fc,_c);Ke[n]=new He(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Fc,_c);Ke[n]=new He(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Fc,_c);Ke[n]=new He(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function zc(e,n,i,a){var t=Ke.hasOwnProperty(n)?Ke[n]:null;(t!==null?t.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Y0(n,i,t,a)&&(i=null),a||t===null?q0(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(n=t.attributeName,a=t.attributeNamespace,i===null?e.removeAttribute(n):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var zn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jt=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),lg=Symbol.for("react.context"),Bc=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),Zs=Symbol.iterator;function Oa(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ao;function Ja(e){if(Ao===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Ao=n&&n[1]||""}return`
`+Ao+e}var Bo=!1;function Jo(e,n){if(!e||Bo)return"";Bo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),r=a.stack.split(`
`),o=t.length-1,c=r.length-1;1<=o&&0<=c&&t[o]!==r[c];)c--;for(;1<=o&&0<=c;o--,c--)if(t[o]!==r[c]){if(o!==1||c!==1)do if(o--,c--,0>c||t[o]!==r[c]){var s=`
`+t[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=c);break}}}finally{Bo=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Ja(e):""}function G0(e){switch(e.tag){case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ii:return"Fragment";case Ji:return"Portal";case Kl:return"Profiler";case Ac:return"StrictMode";case Ol:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case og:return(e._context.displayName||"Context")+".Provider";case Bc:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jc:return n=e.displayName||null,n!==null?n:$l(e.type)||"Memo";case Vn:n=e._payload,e=e._init;try{return $l(e(n))}catch{}}return null}function X0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(n);case 8:return n===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function li(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sg(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function em(e){var n=sg(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,r=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function It(e){e._valueTracker||(e._valueTracker=em(e))}function ug(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=sg(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,n){var i=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ys(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=li(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function dg(e,n){n=n.checked,n!=null&&zc(e,"checked",n,!1)}function Sl(e,n){dg(e,n);var i=li(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ll(e,n.type,i):n.hasOwnProperty("defaultValue")&&Ll(e,n.type,li(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Gs(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ll(e,n,i){(n!=="number"||Nr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ia=Array.isArray;function ia(e,n,i,a){if(e=e.options,n){n={};for(var t=0;t<i.length;t++)n["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=n.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&a&&(e[i].defaultSelected=!0)}else{for(i=""+li(i),n=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function Tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(N(92));if(Ia(i)){if(1<i.length)throw Error(N(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:li(i)}}function gg(e,n){var i=li(n.value),a=li(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vt,pg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,t){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vt=Vt||document.createElement("div"),Vt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nm=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(e){nm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Za[n]=Za[e]})});function mg(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Za.hasOwnProperty(e)&&Za[e]?(""+n).trim():n+"px"}function hg(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,t=mg(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,t):e[i]=t}}var im=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(e,n){if(n){if(im[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Hl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,aa=null,ta=null;function nu(e){if(e=St(e)){if(typeof Fl!="function")throw Error(N(280));var n=e.stateNode;n&&(n=vo(n),Fl(e.stateNode,e.type,n))}}function vg(e){aa?ta?ta.push(e):ta=[e]:aa=e}function Rg(){if(aa){var e=aa,n=ta;if(ta=aa=null,nu(e),n)for(e=0;e<n.length;e++)nu(n[e])}}function jg(e,n){return e(n)}function yg(){}var Io=!1;function kg(e,n,i){if(Io)return e(n,i);Io=!0;try{return jg(e,n,i)}finally{Io=!1,(aa!==null||ta!==null)&&(yg(),Rg())}}function ct(e,n){var i=e.stateNode;if(i===null)return null;var a=vo(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(N(231,n,typeof i));return i}var _l=!1;if(En)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){_l=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{_l=!1}function am(e,n,i,a,t,r,o,c,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(i,u)}catch(d){this.onError(d)}}var Ya=!1,Sr=null,Lr=!1,zl=null,tm={onError:function(e){Ya=!0,Sr=e}};function rm(e,n,i,a,t,r,o,c,s){Ya=!1,Sr=null,am.apply(tm,arguments)}function om(e,n,i,a,t,r,o,c,s){if(rm.apply(this,arguments),Ya){if(Ya){var u=Sr;Ya=!1,Sr=null}else throw Error(N(198));Lr||(Lr=!0,zl=u)}}function Ei(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function wg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function iu(e){if(Ei(e)!==e)throw Error(N(188))}function lm(e){var n=e.alternate;if(!n){if(n=Ei(e),n===null)throw Error(N(188));return n!==e?null:e}for(var i=e,a=n;;){var t=i.return;if(t===null)break;var r=t.alternate;if(r===null){if(a=t.return,a!==null){i=a;continue}break}if(t.child===r.child){for(r=t.child;r;){if(r===i)return iu(t),e;if(r===a)return iu(t),n;r=r.sibling}throw Error(N(188))}if(i.return!==a.return)i=t,a=r;else{for(var o=!1,c=t.child;c;){if(c===i){o=!0,i=t,a=r;break}if(c===a){o=!0,a=t,i=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===i){o=!0,i=r,a=t;break}if(c===a){o=!0,a=r,i=t;break}c=c.sibling}if(!o)throw Error(N(189))}}if(i.alternate!==a)throw Error(N(190))}if(i.tag!==3)throw Error(N(188));return i.stateNode.current===i?e:n}function Pg(e){return e=lm(e),e!==null?xg(e):null}function xg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xg(e);if(n!==null)return n;e=e.sibling}return null}var Cg=qe.unstable_scheduleCallback,au=qe.unstable_cancelCallback,cm=qe.unstable_shouldYield,sm=qe.unstable_requestPaint,pe=qe.unstable_now,um=qe.unstable_getCurrentPriorityLevel,Vc=qe.unstable_ImmediatePriority,Kg=qe.unstable_UserBlockingPriority,Tr=qe.unstable_NormalPriority,dm=qe.unstable_LowPriority,Og=qe.unstable_IdlePriority,fo=null,On=null;function gm(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:mm,fm=Math.log,pm=Math.LN2;function mm(e){return e>>>=0,e===0?32:31-(fm(e)/pm|0)|0}var Wt=64,Ut=4194304;function Va(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,t=e.suspendedLanes,r=e.pingedLanes,o=i&268435455;if(o!==0){var c=o&~t;c!==0?a=Va(c):(r&=o,r!==0&&(a=Va(r)))}else o=i&~t,o!==0?a=Va(o):r!==0&&(a=Va(r));if(a===0)return 0;if(n!==0&&n!==a&&!(n&t)&&(t=a&-a,r=n&-n,t>=r||t===16&&(r&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-mn(n),t=1<<i,a|=e[i],n&=~t;return a}function hm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-mn(r),c=1<<o,s=t[o];s===-1?(!(c&i)||c&a)&&(t[o]=hm(c,n)):s<=n&&(e.expiredLanes|=c),r&=~c}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bg(){var e=Wt;return Wt<<=1,!(Wt&4194240)&&(Wt=64),e}function Vo(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function $t(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=i}function Rm(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-mn(i),r=1<<t;n[t]=0,a[t]=-1,e[t]=-1,i&=~r}}function Wc(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-mn(i),t=1<<a;t&n|e[a]&n&&(e[a]|=n),i&=~t}}var X=0;function $g(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ng,Uc,Sg,Lg,Tg,Bl=!1,Qt=[],Gn=null,Xn=null,ei=null,st=new Map,ut=new Map,Un=[],jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":st.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ut.delete(n.pointerId)}}function $a(e,n,i,a,t,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:r,targetContainers:[t]},n!==null&&(n=St(n),n!==null&&Uc(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function ym(e,n,i,a,t){switch(n){case"focusin":return Gn=$a(Gn,e,n,i,a,t),!0;case"dragenter":return Xn=$a(Xn,e,n,i,a,t),!0;case"mouseover":return ei=$a(ei,e,n,i,a,t),!0;case"pointerover":var r=t.pointerId;return st.set(r,$a(st.get(r)||null,e,n,i,a,t)),!0;case"gotpointercapture":return r=t.pointerId,ut.set(r,$a(ut.get(r)||null,e,n,i,a,t)),!0}return!1}function Mg(e){var n=vi(e.target);if(n!==null){var i=Ei(n);if(i!==null){if(n=i.tag,n===13){if(n=wg(i),n!==null){e.blockedOn=n,Tg(e.priority,function(){Sg(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Jl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Dl=a,i.target.dispatchEvent(a),Dl=null}else return n=St(i),n!==null&&Uc(n),e.blockedOn=i,!1;n.shift()}return!0}function ru(e,n,i){pr(e)&&i.delete(n)}function km(){Bl=!1,Gn!==null&&pr(Gn)&&(Gn=null),Xn!==null&&pr(Xn)&&(Xn=null),ei!==null&&pr(ei)&&(ei=null),st.forEach(ru),ut.forEach(ru)}function Na(e,n){e.blockedOn===n&&(e.blockedOn=null,Bl||(Bl=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,km)))}function dt(e){function n(t){return Na(t,e)}if(0<Qt.length){Na(Qt[0],e);for(var i=1;i<Qt.length;i++){var a=Qt[i];a.blockedOn===e&&(a.blockedOn=null)}}for(Gn!==null&&Na(Gn,e),Xn!==null&&Na(Xn,e),ei!==null&&Na(ei,e),st.forEach(n),ut.forEach(n),i=0;i<Un.length;i++)a=Un[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Un.length&&(i=Un[0],i.blockedOn===null);)Mg(i),i.blockedOn===null&&Un.shift()}var ra=zn.ReactCurrentBatchConfig,Er=!0;function wm(e,n,i,a){var t=X,r=ra.transition;ra.transition=null;try{X=1,Qc(e,n,i,a)}finally{X=t,ra.transition=r}}function Pm(e,n,i,a){var t=X,r=ra.transition;ra.transition=null;try{X=4,Qc(e,n,i,a)}finally{X=t,ra.transition=r}}function Qc(e,n,i,a){if(Er){var t=Jl(e,n,i,a);if(t===null)nl(e,n,a,Hr,i),tu(e,a);else if(ym(t,e,n,i,a))a.stopPropagation();else if(tu(e,a),n&4&&-1<jm.indexOf(e)){for(;t!==null;){var r=St(t);if(r!==null&&Ng(r),r=Jl(e,n,i,a),r===null&&nl(e,n,a,Hr,i),r===t)break;t=r}t!==null&&a.stopPropagation()}else nl(e,n,a,null,i)}}var Hr=null;function Jl(e,n,i,a){if(Hr=null,e=Ic(a),e=vi(e),e!==null)if(n=Ei(e),n===null)e=null;else if(i=n.tag,i===13){if(e=wg(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Hr=e,null}function Eg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(um()){case Vc:return 1;case Kg:return 4;case Tr:case dm:return 16;case Og:return 536870912;default:return 16}default:return 16}}var qn=null,qc=null,mr=null;function Hg(){if(mr)return mr;var e,n=qc,i=n.length,a,t="value"in qn?qn.value:qn.textContent,r=t.length;for(e=0;e<i&&n[e]===t[e];e++);var o=i-e;for(a=1;a<=o&&n[i-a]===t[r-a];a++);return mr=t.slice(e,1<a?1-a:void 0)}function hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qt(){return!0}function ou(){return!1}function Xe(e){function n(i,a,t,r,o){this._reactName=i,this._targetInst=t,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(i=e[c],this[c]=i?i(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qt:ou,this.isPropagationStopped=ou,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zc=Xe(wa),Nt=se({},wa,{view:0,detail:0}),xm=Xe(Nt),Wo,Uo,Sa,po=se({},Nt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sa&&(Sa&&e.type==="mousemove"?(Wo=e.screenX-Sa.screenX,Uo=e.screenY-Sa.screenY):Uo=Wo=0,Sa=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),lu=Xe(po),Cm=se({},po,{dataTransfer:0}),Km=Xe(Cm),Om=se({},Nt,{relatedTarget:0}),Qo=Xe(Om),bm=se({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),$m=Xe(bm),Nm=se({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sm=Xe(Nm),Lm=se({},wa,{data:0}),cu=Xe(Lm),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Em[e])?!!n[e]:!1}function Yc(){return Hm}var Dm=se({},Nt,{key:function(e){if(e.key){var n=Tm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fm=Xe(Dm),_m=se({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Xe(_m),zm=se({},Nt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Am=Xe(zm),Bm=se({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=Xe(Bm),Im=se({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vm=Xe(Im),Wm=[9,13,27,32],Gc=En&&"CompositionEvent"in window,Ga=null;En&&"documentMode"in document&&(Ga=document.documentMode);var Um=En&&"TextEvent"in window&&!Ga,Dg=En&&(!Gc||Ga&&8<Ga&&11>=Ga),uu=" ",du=!1;function Fg(e,n){switch(e){case"keyup":return Wm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vi=!1;function Qm(e,n){switch(e){case"compositionend":return _g(n);case"keypress":return n.which!==32?null:(du=!0,uu);case"textInput":return e=n.data,e===uu&&du?null:e;default:return null}}function qm(e,n){if(Vi)return e==="compositionend"||!Gc&&Fg(e,n)?(e=Hg(),mr=qc=qn=null,Vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dg&&n.locale!=="ko"?null:n.data;default:return null}}var Zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zm[e.type]:n==="textarea"}function zg(e,n,i,a){vg(a),n=Dr(n,"onChange"),0<n.length&&(i=new Zc("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var Xa=null,gt=null;function Ym(e){Yg(e,0)}function mo(e){var n=Qi(e);if(ug(n))return e}function Gm(e,n){if(e==="change")return n}var Ag=!1;if(En){var qo;if(En){var Zo="oninput"in document;if(!Zo){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),Zo=typeof fu.oninput=="function"}qo=Zo}else qo=!1;Ag=qo&&(!document.documentMode||9<document.documentMode)}function pu(){Xa&&(Xa.detachEvent("onpropertychange",Bg),gt=Xa=null)}function Bg(e){if(e.propertyName==="value"&&mo(gt)){var n=[];zg(n,gt,e,Ic(e)),kg(Ym,n)}}function Xm(e,n,i){e==="focusin"?(pu(),Xa=n,gt=i,Xa.attachEvent("onpropertychange",Bg)):e==="focusout"&&pu()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(gt)}function nh(e,n){if(e==="click")return mo(n)}function ih(e,n){if(e==="input"||e==="change")return mo(n)}function ah(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:ah;function ft(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var t=i[a];if(!Cl.call(n,t)||!jn(e[t],n[t]))return!1}return!0}function mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,n){var i=mu(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mu(i)}}function Jg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ig(){for(var e=window,n=Nr();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Nr(e.document)}return n}function Xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function th(e){var n=Ig(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Jg(i.ownerDocument.documentElement,i)){if(a!==null&&Xc(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,r=Math.min(a.start,t);a=a.end===void 0?r:Math.min(a.end,t),!e.extend&&r>a&&(t=a,a=r,r=t),t=hu(i,r);var o=hu(i,a);t&&o&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),r>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rh=En&&"documentMode"in document&&11>=document.documentMode,Wi=null,Il=null,et=null,Vl=!1;function vu(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Vl||Wi==null||Wi!==Nr(a)||(a=Wi,"selectionStart"in a&&Xc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),et&&ft(et,a)||(et=a,a=Dr(Il,"onSelect"),0<a.length&&(n=new Zc("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Wi)))}function Zt(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ui={animationend:Zt("Animation","AnimationEnd"),animationiteration:Zt("Animation","AnimationIteration"),animationstart:Zt("Animation","AnimationStart"),transitionend:Zt("Transition","TransitionEnd")},Yo={},Vg={};En&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function ho(e){if(Yo[e])return Yo[e];if(!Ui[e])return e;var n=Ui[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Vg)return Yo[e]=n[i];return e}var Wg=ho("animationend"),Ug=ho("animationiteration"),Qg=ho("animationstart"),qg=ho("transitionend"),Zg=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(e,n){Zg.set(e,n),Mi(n,[e])}for(var Go=0;Go<Ru.length;Go++){var Xo=Ru[Go],oh=Xo.toLowerCase(),lh=Xo[0].toUpperCase()+Xo.slice(1);ui(oh,"on"+lh)}ui(Wg,"onAnimationEnd");ui(Ug,"onAnimationIteration");ui(Qg,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(qg,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function ju(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,om(a,n,void 0,e),e.currentTarget=null}function Yg(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],t=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var o=a.length-1;0<=o;o--){var c=a[o],s=c.instance,u=c.currentTarget;if(c=c.listener,s!==r&&t.isPropagationStopped())break e;ju(t,c,u),r=s}else for(o=0;o<a.length;o++){if(c=a[o],s=c.instance,u=c.currentTarget,c=c.listener,s!==r&&t.isPropagationStopped())break e;ju(t,c,u),r=s}}}if(Lr)throw e=zl,Lr=!1,zl=null,e}function ie(e,n){var i=n[Zl];i===void 0&&(i=n[Zl]=new Set);var a=e+"__bubble";i.has(a)||(Gg(n,e,2,!1),i.add(a))}function el(e,n,i){var a=0;n&&(a|=4),Gg(i,e,a,n)}var Yt="_reactListening"+Math.random().toString(36).slice(2);function pt(e){if(!e[Yt]){e[Yt]=!0,rg.forEach(function(i){i!=="selectionchange"&&(ch.has(i)||el(i,!1,e),el(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yt]||(n[Yt]=!0,el("selectionchange",!1,n))}}function Gg(e,n,i,a){switch(Eg(n)){case 1:var t=wm;break;case 4:t=Pm;break;default:t=Qc}i=t.bind(null,n,i,e),t=void 0,!_l||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(n,i,{capture:!0,passive:t}):e.addEventListener(n,i,!0):t!==void 0?e.addEventListener(n,i,{passive:t}):e.addEventListener(n,i,!1)}function nl(e,n,i,a,t){var r=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===t||c.nodeType===8&&c.parentNode===t)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===t||s.nodeType===8&&s.parentNode===t))return;o=o.return}for(;c!==null;){if(o=vi(c),o===null)return;if(s=o.tag,s===5||s===6){a=r=o;continue e}c=c.parentNode}}a=a.return}kg(function(){var u=r,d=Ic(i),f=[];e:{var g=Zg.get(e);if(g!==void 0){var v=Zc,j=e;switch(e){case"keypress":if(hr(i)===0)break e;case"keydown":case"keyup":v=Fm;break;case"focusin":j="focus",v=Qo;break;case"focusout":j="blur",v=Qo;break;case"beforeblur":case"afterblur":v=Qo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Am;break;case Wg:case Ug:case Qg:v=$m;break;case qg:v=Jm;break;case"scroll":v=xm;break;case"wheel":v=Vm;break;case"copy":case"cut":case"paste":v=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=su}var R=(n&4)!==0,w=!R&&e==="scroll",m=R?g!==null?g+"Capture":null:g;R=[];for(var p=u,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,m!==null&&(k=ct(p,m),k!=null&&R.push(mt(p,k,h)))),w)break;p=p.return}0<R.length&&(g=new v(g,j,null,i,d),f.push({event:g,listeners:R}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&i!==Dl&&(j=i.relatedTarget||i.fromElement)&&(vi(j)||j[Hn]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(j=i.relatedTarget||i.toElement,v=u,j=j?vi(j):null,j!==null&&(w=Ei(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(v=null,j=u),v!==j)){if(R=lu,k="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(R=su,k="onPointerLeave",m="onPointerEnter",p="pointer"),w=v==null?g:Qi(v),h=j==null?g:Qi(j),g=new R(k,p+"leave",v,i,d),g.target=w,g.relatedTarget=h,k=null,vi(d)===u&&(R=new R(m,p+"enter",j,i,d),R.target=h,R.relatedTarget=w,k=R),w=k,v&&j)n:{for(R=v,m=j,p=0,h=R;h;h=zi(h))p++;for(h=0,k=m;k;k=zi(k))h++;for(;0<p-h;)R=zi(R),p--;for(;0<h-p;)m=zi(m),h--;for(;p--;){if(R===m||m!==null&&R===m.alternate)break n;R=zi(R),m=zi(m)}R=null}else R=null;v!==null&&yu(f,g,v,R,!1),j!==null&&w!==null&&yu(f,w,j,R,!0)}}e:{if(g=u?Qi(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var P=Gm;else if(gu(g))if(Ag)P=ih;else{P=eh;var K=Xm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=nh);if(P&&(P=P(e,u))){zg(f,P,i,d);break e}K&&K(e,g,u),e==="focusout"&&(K=g._wrapperState)&&K.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(K=u?Qi(u):window,e){case"focusin":(gu(K)||K.contentEditable==="true")&&(Wi=K,Il=u,et=null);break;case"focusout":et=Il=Wi=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,vu(f,i,d);break;case"selectionchange":if(rh)break;case"keydown":case"keyup":vu(f,i,d)}var x;if(Gc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vi?Fg(e,i)&&(b="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(b="onCompositionStart");b&&(Dg&&i.locale!=="ko"&&(Vi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Vi&&(x=Hg()):(qn=d,qc="value"in qn?qn.value:qn.textContent,Vi=!0)),K=Dr(u,b),0<K.length&&(b=new cu(b,e,null,i,d),f.push({event:b,listeners:K}),x?b.data=x:(x=_g(i),x!==null&&(b.data=x)))),(x=Um?Qm(e,i):qm(e,i))&&(u=Dr(u,"onBeforeInput"),0<u.length&&(d=new cu("onBeforeInput","beforeinput",null,i,d),f.push({event:d,listeners:u}),d.data=x))}Yg(f,n)})}function mt(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Dr(e,n){for(var i=n+"Capture",a=[];e!==null;){var t=e,r=t.stateNode;t.tag===5&&r!==null&&(t=r,r=ct(e,i),r!=null&&a.unshift(mt(e,r,t)),r=ct(e,n),r!=null&&a.push(mt(e,r,t))),e=e.return}return a}function zi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yu(e,n,i,a,t){for(var r=n._reactName,o=[];i!==null&&i!==a;){var c=i,s=c.alternate,u=c.stateNode;if(s!==null&&s===a)break;c.tag===5&&u!==null&&(c=u,t?(s=ct(i,r),s!=null&&o.unshift(mt(i,s,c))):t||(s=ct(i,r),s!=null&&o.push(mt(i,s,c)))),i=i.return}o.length!==0&&e.push({event:n,listeners:o})}var sh=/\r\n?/g,uh=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(sh,`
`).replace(uh,"")}function Gt(e,n,i){if(n=ku(n),ku(e)!==n&&i)throw Error(N(425))}function Fr(){}var Wl=null,Ul=null;function Ql(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,dh=typeof clearTimeout=="function"?clearTimeout:void 0,wu=typeof Promise=="function"?Promise:void 0,gh=typeof queueMicrotask=="function"?queueMicrotask:typeof wu<"u"?function(e){return wu.resolve(null).then(e).catch(fh)}:ql;function fh(e){setTimeout(function(){throw e})}function il(e,n){var i=n,a=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){e.removeChild(t),dt(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=t}while(i);dt(n)}function ni(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Pa=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Pa,ht="__reactProps$"+Pa,Hn="__reactContainer$"+Pa,Zl="__reactEvents$"+Pa,ph="__reactListeners$"+Pa,mh="__reactHandles$"+Pa;function vi(e){var n=e[Cn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Hn]||i[Cn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Pu(e);e!==null;){if(i=e[Cn])return i;e=Pu(e)}return n}e=i,i=e.parentNode}return null}function St(e){return e=e[Cn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function vo(e){return e[ht]||null}var Yl=[],qi=-1;function di(e){return{current:e}}function te(e){0>qi||(e.current=Yl[qi],Yl[qi]=null,qi--)}function ne(e,n){qi++,Yl[qi]=e.current,e.current=n}var ci={},Le=di(ci),ze=di(!1),Ki=ci;function sa(e,n){var i=e.type.contextTypes;if(!i)return ci;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var t={},r;for(r in i)t[r]=n[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function Ae(e){return e=e.childContextTypes,e!=null}function _r(){te(ze),te(Le)}function xu(e,n,i){if(Le.current!==ci)throw Error(N(168));ne(Le,n),ne(ze,i)}function Xg(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var t in a)if(!(t in n))throw Error(N(108,X0(e)||"Unknown",t));return se({},i,a)}function zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,Ki=Le.current,ne(Le,e),ne(ze,ze.current),!0}function Cu(e,n,i){var a=e.stateNode;if(!a)throw Error(N(169));i?(e=Xg(e,n,Ki),a.__reactInternalMemoizedMergedChildContext=e,te(ze),te(Le),ne(Le,e)):te(ze),ne(ze,i)}var Sn=null,Ro=!1,al=!1;function ef(e){Sn===null?Sn=[e]:Sn.push(e)}function hh(e){Ro=!0,ef(e)}function gi(){if(!al&&Sn!==null){al=!0;var e=0,n=X;try{var i=Sn;for(X=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Sn=null,Ro=!1}catch(t){throw Sn!==null&&(Sn=Sn.slice(e+1)),Cg(Vc,gi),t}finally{X=n,al=!1}}return null}var Zi=[],Yi=0,Ar=null,Br=0,en=[],nn=0,Oi=null,Ln=1,Tn="";function pi(e,n){Zi[Yi++]=Br,Zi[Yi++]=Ar,Ar=e,Br=n}function nf(e,n,i){en[nn++]=Ln,en[nn++]=Tn,en[nn++]=Oi,Oi=e;var a=Ln;e=Tn;var t=32-mn(a)-1;a&=~(1<<t),i+=1;var r=32-mn(n)+t;if(30<r){var o=t-t%5;r=(a&(1<<o)-1).toString(32),a>>=o,t-=o,Ln=1<<32-mn(n)+t|i<<t|a,Tn=r+e}else Ln=1<<r|i<<t|a,Tn=e}function es(e){e.return!==null&&(pi(e,1),nf(e,1,0))}function ns(e){for(;e===Ar;)Ar=Zi[--Yi],Zi[Yi]=null,Br=Zi[--Yi],Zi[Yi]=null;for(;e===Oi;)Oi=en[--nn],en[nn]=null,Tn=en[--nn],en[nn]=null,Ln=en[--nn],en[nn]=null}var Qe=null,We=null,re=!1,fn=null;function af(e,n){var i=an(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Ku(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,We=ni(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Oi!==null?{id:Ln,overflow:Tn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=an(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Qe=e,We=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(re){var n=We;if(n){var i=n;if(!Ku(e,n)){if(Gl(e))throw Error(N(418));n=ni(i.nextSibling);var a=Qe;n&&Ku(e,n)?af(a,i):(e.flags=e.flags&-4097|2,re=!1,Qe=e)}}else{if(Gl(e))throw Error(N(418));e.flags=e.flags&-4097|2,re=!1,Qe=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Xt(e){if(e!==Qe)return!1;if(!re)return Ou(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ql(e.type,e.memoizedProps)),n&&(n=We)){if(Gl(e))throw tf(),Error(N(418));for(;n;)af(e,n),n=ni(n.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){We=ni(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}We=null}}else We=Qe?ni(e.stateNode.nextSibling):null;return!0}function tf(){for(var e=We;e;)e=ni(e.nextSibling)}function ua(){We=Qe=null,re=!1}function is(e){fn===null?fn=[e]:fn.push(e)}var vh=zn.ReactCurrentBatchConfig;function La(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(N(309));var a=i.stateNode}if(!a)throw Error(N(147,e));var t=a,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var c=t.refs;o===null?delete c[r]:c[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error(N(284));if(!i._owner)throw Error(N(290,e))}return e}function er(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function bu(e){var n=e._init;return n(e._payload)}function rf(e){function n(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function i(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function a(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function t(m,p){return m=ri(m,p),m.index=0,m.sibling=null,m}function r(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,p,h,k){return p===null||p.tag!==6?(p=ul(h,m.mode,k),p.return=m,p):(p=t(p,h),p.return=m,p)}function s(m,p,h,k){var P=h.type;return P===Ii?d(m,p,h.props.children,k,h.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vn&&bu(P)===p.type)?(k=t(p,h.props),k.ref=La(m,p,h),k.return=m,k):(k=Pr(h.type,h.key,h.props,null,m.mode,k),k.ref=La(m,p,h),k.return=m,k)}function u(m,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=dl(h,m.mode,k),p.return=m,p):(p=t(p,h.children||[]),p.return=m,p)}function d(m,p,h,k,P){return p===null||p.tag!==7?(p=wi(h,m.mode,k,P),p.return=m,p):(p=t(p,h),p.return=m,p)}function f(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ul(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jt:return h=Pr(p.type,p.key,p.props,null,m.mode,h),h.ref=La(m,null,p),h.return=m,h;case Ji:return p=dl(p,m.mode,h),p.return=m,p;case Vn:var k=p._init;return f(m,k(p._payload),h)}if(Ia(p)||Oa(p))return p=wi(p,m.mode,h,null),p.return=m,p;er(m,p)}return null}function g(m,p,h,k){var P=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:c(m,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Jt:return h.key===P?s(m,p,h,k):null;case Ji:return h.key===P?u(m,p,h,k):null;case Vn:return P=h._init,g(m,p,P(h._payload),k)}if(Ia(h)||Oa(h))return P!==null?null:d(m,p,h,k,null);er(m,h)}return null}function v(m,p,h,k,P){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(h)||null,c(p,m,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Jt:return m=m.get(k.key===null?h:k.key)||null,s(p,m,k,P);case Ji:return m=m.get(k.key===null?h:k.key)||null,u(p,m,k,P);case Vn:var K=k._init;return v(m,p,h,K(k._payload),P)}if(Ia(k)||Oa(k))return m=m.get(h)||null,d(p,m,k,P,null);er(p,k)}return null}function j(m,p,h,k){for(var P=null,K=null,x=p,b=p=0,F=null;x!==null&&b<h.length;b++){x.index>b?(F=x,x=null):F=x.sibling;var D=g(m,x,h[b],k);if(D===null){x===null&&(x=F);break}e&&x&&D.alternate===null&&n(m,x),p=r(D,p,b),K===null?P=D:K.sibling=D,K=D,x=F}if(b===h.length)return i(m,x),re&&pi(m,b),P;if(x===null){for(;b<h.length;b++)x=f(m,h[b],k),x!==null&&(p=r(x,p,b),K===null?P=x:K.sibling=x,K=x);return re&&pi(m,b),P}for(x=a(m,x);b<h.length;b++)F=v(x,m,b,h[b],k),F!==null&&(e&&F.alternate!==null&&x.delete(F.key===null?b:F.key),p=r(F,p,b),K===null?P=F:K.sibling=F,K=F);return e&&x.forEach(function(q){return n(m,q)}),re&&pi(m,b),P}function R(m,p,h,k){var P=Oa(h);if(typeof P!="function")throw Error(N(150));if(h=P.call(h),h==null)throw Error(N(151));for(var K=P=null,x=p,b=p=0,F=null,D=h.next();x!==null&&!D.done;b++,D=h.next()){x.index>b?(F=x,x=null):F=x.sibling;var q=g(m,x,D.value,k);if(q===null){x===null&&(x=F);break}e&&x&&q.alternate===null&&n(m,x),p=r(q,p,b),K===null?P=q:K.sibling=q,K=q,x=F}if(D.done)return i(m,x),re&&pi(m,b),P;if(x===null){for(;!D.done;b++,D=h.next())D=f(m,D.value,k),D!==null&&(p=r(D,p,b),K===null?P=D:K.sibling=D,K=D);return re&&pi(m,b),P}for(x=a(m,x);!D.done;b++,D=h.next())D=v(x,m,b,D.value,k),D!==null&&(e&&D.alternate!==null&&x.delete(D.key===null?b:D.key),p=r(D,p,b),K===null?P=D:K.sibling=D,K=D);return e&&x.forEach(function($){return n(m,$)}),re&&pi(m,b),P}function w(m,p,h,k){if(typeof h=="object"&&h!==null&&h.type===Ii&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Jt:e:{for(var P=h.key,K=p;K!==null;){if(K.key===P){if(P=h.type,P===Ii){if(K.tag===7){i(m,K.sibling),p=t(K,h.props.children),p.return=m,m=p;break e}}else if(K.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vn&&bu(P)===K.type){i(m,K.sibling),p=t(K,h.props),p.ref=La(m,K,h),p.return=m,m=p;break e}i(m,K);break}else n(m,K);K=K.sibling}h.type===Ii?(p=wi(h.props.children,m.mode,k,h.key),p.return=m,m=p):(k=Pr(h.type,h.key,h.props,null,m.mode,k),k.ref=La(m,p,h),k.return=m,m=k)}return o(m);case Ji:e:{for(K=h.key;p!==null;){if(p.key===K)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){i(m,p.sibling),p=t(p,h.children||[]),p.return=m,m=p;break e}else{i(m,p);break}else n(m,p);p=p.sibling}p=dl(h,m.mode,k),p.return=m,m=p}return o(m);case Vn:return K=h._init,w(m,p,K(h._payload),k)}if(Ia(h))return j(m,p,h,k);if(Oa(h))return R(m,p,h,k);er(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(i(m,p.sibling),p=t(p,h),p.return=m,m=p):(i(m,p),p=ul(h,m.mode,k),p.return=m,m=p),o(m)):i(m,p)}return w}var da=rf(!0),of=rf(!1),Jr=di(null),Ir=null,Gi=null,as=null;function ts(){as=Gi=Ir=null}function rs(e){var n=Jr.current;te(Jr),e._currentValue=n}function ec(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function oa(e,n){Ir=e,as=Gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Fe=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:n,next:null},Gi===null){if(Ir===null)throw Error(N(308));Gi=e,Ir.dependencies={lanes:0,firstContext:e}}else Gi=Gi.next=e;return n}var Ri=null;function os(e){Ri===null?Ri=[e]:Ri.push(e)}function lf(e,n,i,a){var t=n.interleaved;return t===null?(i.next=i,os(n)):(i.next=t.next,t.next=i),n.interleaved=i,Dn(e,a)}function Dn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Wn=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ii(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,V&2){var t=a.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n,Dn(e,i)}return t=a.interleaved,t===null?(n.next=n,os(a)):(n.next=t.next,t.next=n),a.interleaved=n,Dn(e,i)}function vr(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Wc(e,i)}}function $u(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var t=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?t=r=o:r=r.next=o,i=i.next}while(i!==null);r===null?t=r=n:r=r.next=n}else t=r=n;i={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Vr(e,n,i,a){var t=e.updateQueue;Wn=!1;var r=t.firstBaseUpdate,o=t.lastBaseUpdate,c=t.shared.pending;if(c!==null){t.shared.pending=null;var s=c,u=s.next;s.next=null,o===null?r=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==o&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=t.baseState;o=0,d=u=s=null,c=r;do{var g=c.lane,v=c.eventTime;if((a&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=e,R=c;switch(g=n,v=i,R.tag){case 1:if(j=R.payload,typeof j=="function"){f=j.call(v,f,g);break e}f=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=R.payload,g=typeof j=="function"?j.call(v,f,g):j,g==null)break e;f=se({},f,g);break e;case 2:Wn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=t.effects,g===null?t.effects=[c]:g.push(c))}else v={eventTime:v,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=v,s=f):d=d.next=v,o|=g;if(c=c.next,c===null){if(c=t.shared.pending,c===null)break;g=c,c=g.next,g.next=null,t.lastBaseUpdate=g,t.shared.pending=null}}while(!0);if(d===null&&(s=f),t.baseState=s,t.firstBaseUpdate=u,t.lastBaseUpdate=d,n=t.shared.interleaved,n!==null){t=n;do o|=t.lane,t=t.next;while(t!==n)}else r===null&&(t.shared.lanes=0);$i|=o,e.lanes=o,e.memoizedState=f}}function Nu(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],t=a.callback;if(t!==null){if(a.callback=null,a=i,typeof t!="function")throw Error(N(191,t));t.call(a)}}}var Lt={},bn=di(Lt),vt=di(Lt),Rt=di(Lt);function ji(e){if(e===Lt)throw Error(N(174));return e}function cs(e,n){switch(ne(Rt,n),ne(vt,e),ne(bn,Lt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ml(n,e)}te(bn),ne(bn,n)}function ga(){te(bn),te(vt),te(Rt)}function sf(e){ji(Rt.current);var n=ji(bn.current),i=Ml(n,e.type);n!==i&&(ne(vt,e),ne(bn,i))}function ss(e){vt.current===e&&(te(bn),te(vt))}var le=di(0);function Wr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var tl=[];function us(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Rr=zn.ReactCurrentDispatcher,rl=zn.ReactCurrentBatchConfig,bi=0,ce=null,Re=null,ye=null,Ur=!1,nt=!1,jt=0,Rh=0;function Oe(){throw Error(N(321))}function ds(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!jn(e[i],n[i]))return!1;return!0}function gs(e,n,i,a,t,r){if(bi=r,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rr.current=e===null||e.memoizedState===null?wh:Ph,e=i(a,t),nt){r=0;do{if(nt=!1,jt=0,25<=r)throw Error(N(301));r+=1,ye=Re=null,n.updateQueue=null,Rr.current=xh,e=i(a,t)}while(nt)}if(Rr.current=Qr,n=Re!==null&&Re.next!==null,bi=0,ye=Re=ce=null,Ur=!1,n)throw Error(N(300));return e}function fs(){var e=jt!==0;return jt=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ce.memoizedState=ye=e:ye=ye.next=e,ye}function on(){if(Re===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var n=ye===null?ce.memoizedState:ye.next;if(n!==null)ye=n,Re=e;else{if(e===null)throw Error(N(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},ye===null?ce.memoizedState=ye=e:ye=ye.next=e}return ye}function yt(e,n){return typeof n=="function"?n(e):n}function ol(e){var n=on(),i=n.queue;if(i===null)throw Error(N(311));i.lastRenderedReducer=e;var a=Re,t=a.baseQueue,r=i.pending;if(r!==null){if(t!==null){var o=t.next;t.next=r.next,r.next=o}a.baseQueue=t=r,i.pending=null}if(t!==null){r=t.next,a=a.baseState;var c=o=null,s=null,u=r;do{var d=u.lane;if((bi&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(c=s=f,o=a):s=s.next=f,ce.lanes|=d,$i|=d}u=u.next}while(u!==null&&u!==r);s===null?o=a:s.next=c,jn(a,n.memoizedState)||(Fe=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=s,i.lastRenderedState=a}if(e=i.interleaved,e!==null){t=e;do r=t.lane,ce.lanes|=r,$i|=r,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function ll(e){var n=on(),i=n.queue;if(i===null)throw Error(N(311));i.lastRenderedReducer=e;var a=i.dispatch,t=i.pending,r=n.memoizedState;if(t!==null){i.pending=null;var o=t=t.next;do r=e(r,o.action),o=o.next;while(o!==t);jn(r,n.memoizedState)||(Fe=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),i.lastRenderedState=r}return[r,a]}function uf(){}function df(e,n){var i=ce,a=on(),t=n(),r=!jn(a.memoizedState,t);if(r&&(a.memoizedState=t,Fe=!0),a=a.queue,ps(pf.bind(null,i,a,e),[e]),a.getSnapshot!==n||r||ye!==null&&ye.memoizedState.tag&1){if(i.flags|=2048,kt(9,ff.bind(null,i,a,t,n),void 0,null),we===null)throw Error(N(349));bi&30||gf(i,n,t)}return t}function gf(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function ff(e,n,i,a){n.value=i,n.getSnapshot=a,mf(n)&&hf(e)}function pf(e,n,i){return i(function(){mf(n)&&hf(e)})}function mf(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!jn(e,i)}catch{return!0}}function hf(e){var n=Dn(e,1);n!==null&&hn(n,e,1,-1)}function Su(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:e},n.queue=e,e=e.dispatch=kh.bind(null,ce,e),[n.memoizedState,e]}function kt(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function vf(){return on().memoizedState}function jr(e,n,i,a){var t=Pn();ce.flags|=e,t.memoizedState=kt(1|n,i,void 0,a===void 0?null:a)}function jo(e,n,i,a){var t=on();a=a===void 0?null:a;var r=void 0;if(Re!==null){var o=Re.memoizedState;if(r=o.destroy,a!==null&&ds(a,o.deps)){t.memoizedState=kt(n,i,r,a);return}}ce.flags|=e,t.memoizedState=kt(1|n,i,r,a)}function Lu(e,n){return jr(8390656,8,e,n)}function ps(e,n){return jo(2048,8,e,n)}function Rf(e,n){return jo(4,2,e,n)}function jf(e,n){return jo(4,4,e,n)}function yf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kf(e,n,i){return i=i!=null?i.concat([e]):null,jo(4,4,yf.bind(null,n,e),i)}function ms(){}function wf(e,n){var i=on();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&ds(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function Pf(e,n){var i=on();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&ds(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function xf(e,n,i){return bi&21?(jn(i,n)||(i=bg(),ce.lanes|=i,$i|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=i)}function jh(e,n){var i=X;X=i!==0&&4>i?i:4,e(!0);var a=rl.transition;rl.transition={};try{e(!1),n()}finally{X=i,rl.transition=a}}function Cf(){return on().memoizedState}function yh(e,n,i){var a=ti(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Kf(e))Of(n,i);else if(i=lf(e,n,i,a),i!==null){var t=Me();hn(i,e,a,t),bf(i,n,a)}}function kh(e,n,i){var a=ti(e),t={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Of(n,t);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,c=r(o,i);if(t.hasEagerState=!0,t.eagerState=c,jn(c,o)){var s=n.interleaved;s===null?(t.next=t,os(n)):(t.next=s.next,s.next=t),n.interleaved=t;return}}catch{}finally{}i=lf(e,n,t,a),i!==null&&(t=Me(),hn(i,e,a,t),bf(i,n,a))}}function Kf(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Of(e,n){nt=Ur=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function bf(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Wc(e,i)}}var Qr={readContext:rn,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},wh={readContext:rn,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:Lu,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,jr(4194308,4,yf.bind(null,n,e),i)},useLayoutEffect:function(e,n){return jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return jr(4,2,e,n)},useMemo:function(e,n){var i=Pn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=Pn();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=yh.bind(null,ce,e),[a.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:Su,useDebugValue:ms,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=Su(!1),n=e[0];return e=jh.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=ce,t=Pn();if(re){if(i===void 0)throw Error(N(407));i=i()}else{if(i=n(),we===null)throw Error(N(349));bi&30||gf(a,n,i)}t.memoizedState=i;var r={value:i,getSnapshot:n};return t.queue=r,Lu(pf.bind(null,a,r,e),[e]),a.flags|=2048,kt(9,ff.bind(null,a,r,i,n),void 0,null),i},useId:function(){var e=Pn(),n=we.identifierPrefix;if(re){var i=Tn,a=Ln;i=(a&~(1<<32-mn(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=jt++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Rh++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ph={readContext:rn,useCallback:wf,useContext:rn,useEffect:ps,useImperativeHandle:kf,useInsertionEffect:Rf,useLayoutEffect:jf,useMemo:Pf,useReducer:ol,useRef:vf,useState:function(){return ol(yt)},useDebugValue:ms,useDeferredValue:function(e){var n=on();return xf(n,Re.memoizedState,e)},useTransition:function(){var e=ol(yt)[0],n=on().memoizedState;return[e,n]},useMutableSource:uf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1},xh={readContext:rn,useCallback:wf,useContext:rn,useEffect:ps,useImperativeHandle:kf,useInsertionEffect:Rf,useLayoutEffect:jf,useMemo:Pf,useReducer:ll,useRef:vf,useState:function(){return ll(yt)},useDebugValue:ms,useDeferredValue:function(e){var n=on();return Re===null?n.memoizedState=e:xf(n,Re.memoizedState,e)},useTransition:function(){var e=ll(yt)[0],n=on().memoizedState;return[e,n]},useMutableSource:uf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1};function dn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function nc(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:se({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var yo={isMounted:function(e){return(e=e._reactInternals)?Ei(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=Me(),t=ti(e),r=Mn(a,t);r.payload=n,i!=null&&(r.callback=i),n=ii(e,r,t),n!==null&&(hn(n,e,t,a),vr(n,e,t))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=Me(),t=ti(e),r=Mn(a,t);r.tag=1,r.payload=n,i!=null&&(r.callback=i),n=ii(e,r,t),n!==null&&(hn(n,e,t,a),vr(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Me(),a=ti(e),t=Mn(i,a);t.tag=2,n!=null&&(t.callback=n),n=ii(e,t,a),n!==null&&(hn(n,e,a,i),vr(n,e,a))}};function Tu(e,n,i,a,t,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):n.prototype&&n.prototype.isPureReactComponent?!ft(i,a)||!ft(t,r):!0}function $f(e,n,i){var a=!1,t=ci,r=n.contextType;return typeof r=="object"&&r!==null?r=rn(r):(t=Ae(n)?Ki:Le.current,a=n.contextTypes,r=(a=a!=null)?sa(e,t):ci),n=new n(i,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yo,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),n}function Mu(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&yo.enqueueReplaceState(n,n.state,null)}function ic(e,n,i,a){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs={},ls(e);var r=n.contextType;typeof r=="object"&&r!==null?t.context=rn(r):(r=Ae(n)?Ki:Le.current,t.context=sa(e,r)),t.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(nc(e,n,r,i),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&yo.enqueueReplaceState(t,t.state,null),Vr(e,i,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function fa(e,n){try{var i="",a=n;do i+=G0(a),a=a.return;while(a);var t=i}catch(r){t=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:t,digest:null}}function cl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function ac(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Ch=typeof WeakMap=="function"?WeakMap:Map;function Nf(e,n,i){i=Mn(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){Zr||(Zr=!0,fc=a),ac(e,n)},i}function Sf(e,n,i){i=Mn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=n.value;i.payload=function(){return a(t)},i.callback=function(){ac(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){ac(e,n),typeof a!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),i}function Eu(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Ch;var t=new Set;a.set(n,t)}else t=a.get(n),t===void 0&&(t=new Set,a.set(n,t));t.has(i)||(t.add(i),e=_h.bind(null,e,n,i),n.then(e,e))}function Hu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Du(e,n,i,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Mn(-1,1),n.tag=2,ii(i,n,1))),i.lanes|=1),e)}var Kh=zn.ReactCurrentOwner,Fe=!1;function Te(e,n,i,a){n.child=e===null?of(n,null,i,a):da(n,e.child,i,a)}function Fu(e,n,i,a,t){i=i.render;var r=n.ref;return oa(n,t),a=gs(e,n,i,a,r,t),i=fs(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Fn(e,n,t)):(re&&i&&es(n),n.flags|=1,Te(e,n,a,t),n.child)}function _u(e,n,i,a,t){if(e===null){var r=i.type;return typeof r=="function"&&!Ps(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=r,Lf(e,n,r,a,t)):(e=Pr(i.type,null,a,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&t)){var o=r.memoizedProps;if(i=i.compare,i=i!==null?i:ft,i(o,a)&&e.ref===n.ref)return Fn(e,n,t)}return n.flags|=1,e=ri(r,a),e.ref=n.ref,e.return=n,n.child=e}function Lf(e,n,i,a,t){if(e!==null){var r=e.memoizedProps;if(ft(r,a)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=a=r,(e.lanes&t)!==0)e.flags&131072&&(Fe=!0);else return n.lanes=e.lanes,Fn(e,n,t)}return tc(e,n,i,a,t)}function Tf(e,n,i){var a=n.pendingProps,t=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ea,Ve),Ve|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(ea,Ve),Ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:i,ne(ea,Ve),Ve|=a}else r!==null?(a=r.baseLanes|i,n.memoizedState=null):a=i,ne(ea,Ve),Ve|=a;return Te(e,n,t,i),n.child}function Mf(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function tc(e,n,i,a,t){var r=Ae(i)?Ki:Le.current;return r=sa(n,r),oa(n,t),i=gs(e,n,i,a,r,t),a=fs(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Fn(e,n,t)):(re&&a&&es(n),n.flags|=1,Te(e,n,i,t),n.child)}function zu(e,n,i,a,t){if(Ae(i)){var r=!0;zr(n)}else r=!1;if(oa(n,t),n.stateNode===null)yr(e,n),$f(n,i,a),ic(n,i,a,t),a=!0;else if(e===null){var o=n.stateNode,c=n.memoizedProps;o.props=c;var s=o.context,u=i.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Ae(i)?Ki:Le.current,u=sa(n,u));var d=i.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==a||s!==u)&&Mu(n,o,a,u),Wn=!1;var g=n.memoizedState;o.state=g,Vr(n,a,o,t),s=n.memoizedState,c!==a||g!==s||ze.current||Wn?(typeof d=="function"&&(nc(n,i,d,a),s=n.memoizedState),(c=Wn||Tu(n,i,c,a,g,s,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=s),o.props=a,o.state=s,o.context=u,a=c):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,cf(e,n),c=n.memoizedProps,u=n.type===n.elementType?c:dn(n.type,c),o.props=u,f=n.pendingProps,g=o.context,s=i.contextType,typeof s=="object"&&s!==null?s=rn(s):(s=Ae(i)?Ki:Le.current,s=sa(n,s));var v=i.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==f||g!==s)&&Mu(n,o,a,s),Wn=!1,g=n.memoizedState,o.state=g,Vr(n,a,o,t);var j=n.memoizedState;c!==f||g!==j||ze.current||Wn?(typeof v=="function"&&(nc(n,i,v,a),j=n.memoizedState),(u=Wn||Tu(n,i,u,a,g,j,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,j,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,j,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=j),o.props=a,o.state=j,o.context=s,a=u):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return rc(e,n,i,a,r,t)}function rc(e,n,i,a,t,r){Mf(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return t&&Cu(n,i,!1),Fn(e,n,r);a=n.stateNode,Kh.current=n;var c=o&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=da(n,e.child,null,r),n.child=da(n,null,c,r)):Te(e,n,c,r),n.memoizedState=a.state,t&&Cu(n,i,!0),n.child}function Ef(e){var n=e.stateNode;n.pendingContext?xu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&xu(e,n.context,!1),cs(e,n.containerInfo)}function Au(e,n,i,a,t){return ua(),is(t),n.flags|=256,Te(e,n,i,a),n.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function lc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hf(e,n,i){var a=n.pendingProps,t=le.current,r=!1,o=(n.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(t&2)!==0),c?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),ne(le,t&1),e===null)return Xl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,r?(a=n.mode,r=n.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Po(o,a,0,null),e=wi(e,a,i,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=lc(i),n.memoizedState=oc,e):hs(n,o));if(t=e.memoizedState,t!==null&&(c=t.dehydrated,c!==null))return Oh(e,n,o,a,c,t,i);if(r){r=a.fallback,o=n.mode,t=e.child,c=t.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&n.child!==t?(a=n.child,a.childLanes=0,a.pendingProps=s,n.deletions=null):(a=ri(t,s),a.subtreeFlags=t.subtreeFlags&14680064),c!==null?r=ri(c,r):(r=wi(r,o,i,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,a=r,r=n.child,o=e.child.memoizedState,o=o===null?lc(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~i,n.memoizedState=oc,a}return r=e.child,e=r.sibling,a=ri(r,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function hs(e,n){return n=Po({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function nr(e,n,i,a){return a!==null&&is(a),da(n,e.child,null,i),e=hs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Oh(e,n,i,a,t,r,o){if(i)return n.flags&256?(n.flags&=-257,a=cl(Error(N(422))),nr(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=a.fallback,t=n.mode,a=Po({mode:"visible",children:a.children},t,0,null),r=wi(r,t,o,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,n.mode&1&&da(n,e.child,null,o),n.child.memoizedState=lc(o),n.memoizedState=oc,r);if(!(n.mode&1))return nr(e,n,o,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var c=a.dgst;return a=c,r=Error(N(419)),a=cl(r,a,void 0),nr(e,n,o,a)}if(c=(o&e.childLanes)!==0,Fe||c){if(a=we,a!==null){switch(o&-o){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|o)?0:t,t!==0&&t!==r.retryLane&&(r.retryLane=t,Dn(e,t),hn(a,e,t,-1))}return ws(),a=cl(Error(N(421))),nr(e,n,o,a)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=zh.bind(null,e),t._reactRetry=n,null):(e=r.treeContext,We=ni(t.nextSibling),Qe=n,re=!0,fn=null,e!==null&&(en[nn++]=Ln,en[nn++]=Tn,en[nn++]=Oi,Ln=e.id,Tn=e.overflow,Oi=n),n=hs(n,a.children),n.flags|=4096,n)}function Bu(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),ec(e.return,n,i)}function sl(e,n,i,a,t){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:t}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=i,r.tailMode=t)}function Df(e,n,i){var a=n.pendingProps,t=a.revealOrder,r=a.tail;if(Te(e,n,a.children,i),a=le.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,i,n);else if(e.tag===19)Bu(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ne(le,a),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(i=n.child,t=null;i!==null;)e=i.alternate,e!==null&&Wr(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=n.child,n.child=null):(t=i.sibling,i.sibling=null),sl(n,!1,t,i,r);break;case"backwards":for(i=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&Wr(e)===null){n.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}sl(n,!0,i,null,r);break;case"together":sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Fn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),$i|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,i=ri(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=ri(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function bh(e,n,i){switch(n.tag){case 3:Ef(n),ua();break;case 5:sf(n);break;case 1:Ae(n.type)&&zr(n);break;case 4:cs(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,t=n.memoizedProps.value;ne(Jr,a._currentValue),a._currentValue=t;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ne(le,le.current&1),n.flags|=128,null):i&n.child.childLanes?Hf(e,n,i):(ne(le,le.current&1),e=Fn(e,n,i),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return Df(e,n,i);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),ne(le,le.current),a)break;return null;case 22:case 23:return n.lanes=0,Tf(e,n,i)}return Fn(e,n,i)}var Ff,cc,_f,zf;Ff=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};cc=function(){};_f=function(e,n,i,a){var t=e.memoizedProps;if(t!==a){e=n.stateNode,ji(bn.current);var r=null;switch(i){case"input":t=Nl(e,t),a=Nl(e,a),r=[];break;case"select":t=se({},t,{value:void 0}),a=se({},a,{value:void 0}),r=[];break;case"textarea":t=Tl(e,t),a=Tl(e,a),r=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Fr)}El(i,a);var o;i=null;for(u in t)if(!a.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var c=t[u];for(o in c)c.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ot.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in a){var s=a[u];if(c=t!=null?t[u]:void 0,a.hasOwnProperty(u)&&s!==c&&(s!=null||c!=null))if(u==="style")if(c){for(o in c)!c.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in s)s.hasOwnProperty(o)&&c[o]!==s[o]&&(i||(i={}),i[o]=s[o])}else i||(r||(r=[]),r.push(u,i)),i=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,c=c?c.__html:void 0,s!=null&&c!==s&&(r=r||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ot.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),r||c===s||(r=[])):(r=r||[]).push(u,s))}i&&(r=r||[]).push("style",i);var u=r;(n.updateQueue=u)&&(n.flags|=4)}};zf=function(e,n,i,a){i!==a&&(n.flags|=4)};function Ta(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function be(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function $h(e,n,i){var a=n.pendingProps;switch(ns(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(n),null;case 1:return Ae(n.type)&&_r(),be(n),null;case 3:return a=n.stateNode,ga(),te(ze),te(Le),us(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fn!==null&&(hc(fn),fn=null))),cc(e,n),be(n),null;case 5:ss(n);var t=ji(Rt.current);if(i=n.type,e!==null&&n.stateNode!=null)_f(e,n,i,a,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(N(166));return be(n),null}if(e=ji(bn.current),Xt(n)){a=n.stateNode,i=n.type;var r=n.memoizedProps;switch(a[Cn]=n,a[ht]=r,e=(n.mode&1)!==0,i){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(t=0;t<Wa.length;t++)ie(Wa[t],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":Ys(a,r),ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ie("invalid",a);break;case"textarea":Xs(a,r),ie("invalid",a)}El(i,r),t=null;for(var o in r)if(r.hasOwnProperty(o)){var c=r[o];o==="children"?typeof c=="string"?a.textContent!==c&&(r.suppressHydrationWarning!==!0&&Gt(a.textContent,c,e),t=["children",c]):typeof c=="number"&&a.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&Gt(a.textContent,c,e),t=["children",""+c]):ot.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ie("scroll",a)}switch(i){case"input":It(a),Gs(a,r,!0);break;case"textarea":It(a),eu(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Fr)}a=t,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fg(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(i,{is:a.is}):(e=o.createElement(i),i==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,i),e[Cn]=n,e[ht]=a,Ff(e,n,!1,!1),n.stateNode=e;e:{switch(o=Hl(i,a),i){case"dialog":ie("cancel",e),ie("close",e),t=a;break;case"iframe":case"object":case"embed":ie("load",e),t=a;break;case"video":case"audio":for(t=0;t<Wa.length;t++)ie(Wa[t],e);t=a;break;case"source":ie("error",e),t=a;break;case"img":case"image":case"link":ie("error",e),ie("load",e),t=a;break;case"details":ie("toggle",e),t=a;break;case"input":Ys(e,a),t=Nl(e,a),ie("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=se({},a,{value:void 0}),ie("invalid",e);break;case"textarea":Xs(e,a),t=Tl(e,a),ie("invalid",e);break;default:t=a}El(i,t),c=t;for(r in c)if(c.hasOwnProperty(r)){var s=c[r];r==="style"?hg(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&pg(e,s)):r==="children"?typeof s=="string"?(i!=="textarea"||s!=="")&&lt(e,s):typeof s=="number"&&lt(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ot.hasOwnProperty(r)?s!=null&&r==="onScroll"&&ie("scroll",e):s!=null&&zc(e,r,s,o))}switch(i){case"input":It(e),Gs(e,a,!1);break;case"textarea":It(e),eu(e);break;case"option":a.value!=null&&e.setAttribute("value",""+li(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?ia(e,!!a.multiple,r,!1):a.defaultValue!=null&&ia(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Fr)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return be(n),null;case 6:if(e&&n.stateNode!=null)zf(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(N(166));if(i=ji(Rt.current),ji(bn.current),Xt(n)){if(a=n.stateNode,i=n.memoizedProps,a[Cn]=n,(r=a.nodeValue!==i)&&(e=Qe,e!==null))switch(e.tag){case 3:Gt(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gt(a.nodeValue,i,(e.mode&1)!==0)}r&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Cn]=n,n.stateNode=a}return be(n),null;case 13:if(te(le),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&We!==null&&n.mode&1&&!(n.flags&128))tf(),ua(),n.flags|=98560,r=!1;else if(r=Xt(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(N(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(N(317));r[Cn]=n}else ua(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;be(n),r=!1}else fn!==null&&(hc(fn),fn=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||le.current&1?je===0&&(je=3):ws())),n.updateQueue!==null&&(n.flags|=4),be(n),null);case 4:return ga(),cc(e,n),e===null&&pt(n.stateNode.containerInfo),be(n),null;case 10:return rs(n.type._context),be(n),null;case 17:return Ae(n.type)&&_r(),be(n),null;case 19:if(te(le),r=n.memoizedState,r===null)return be(n),null;if(a=(n.flags&128)!==0,o=r.rendering,o===null)if(a)Ta(r,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Wr(e),o!==null){for(n.flags|=128,Ta(r,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)r=i,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ne(le,le.current&1|2),n.child}e=e.sibling}r.tail!==null&&pe()>pa&&(n.flags|=128,a=!0,Ta(r,!1),n.lanes=4194304)}else{if(!a)if(e=Wr(o),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ta(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!re)return be(n),null}else 2*pe()-r.renderingStartTime>pa&&i!==1073741824&&(n.flags|=128,a=!0,Ta(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(i=r.last,i!==null?i.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=pe(),n.sibling=null,i=le.current,ne(le,a?i&1|2:i&1),n):(be(n),null);case 22:case 23:return ks(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Ve&1073741824&&(be(n),n.subtreeFlags&6&&(n.flags|=8192)):be(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Nh(e,n){switch(ns(n),n.tag){case 1:return Ae(n.type)&&_r(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ga(),te(ze),te(Le),us(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ss(n),null;case 13:if(te(le),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));ua()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(le),null;case 4:return ga(),null;case 10:return rs(n.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var ir=!1,Se=!1,Sh=typeof WeakSet=="function"?WeakSet:Set,M=null;function Xi(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){de(e,n,a)}else i.current=null}function sc(e,n,i){try{i()}catch(a){de(e,n,a)}}var Ju=!1;function Lh(e,n){if(Wl=Er,e=Ig(),Xc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var t=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,c=-1,s=-1,u=0,d=0,f=e,g=null;n:for(;;){for(var v;f!==i||t!==0&&f.nodeType!==3||(c=o+t),f!==r||a!==0&&f.nodeType!==3||(s=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break n;if(g===i&&++u===t&&(c=o),g===r&&++d===a&&(s=o),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}i=c===-1||s===-1?null:{start:c,end:s}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ul={focusedElem:e,selectionRange:i},Er=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var j=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var R=j.memoizedProps,w=j.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?R:dn(n.type,R),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){de(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return j=Ju,Ju=!1,j}function it(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var r=t.destroy;t.destroy=void 0,r!==void 0&&sc(n,i,r)}t=t.next}while(t!==a)}}function ko(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function uc(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Af(e){var n=e.alternate;n!==null&&(e.alternate=null,Af(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Cn],delete n[ht],delete n[Zl],delete n[ph],delete n[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bf(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Fr));else if(a!==4&&(e=e.child,e!==null))for(dc(e,n,i),e=e.sibling;e!==null;)dc(e,n,i),e=e.sibling}function gc(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(gc(e,n,i),e=e.sibling;e!==null;)gc(e,n,i),e=e.sibling}var xe=null,gn=!1;function Jn(e,n,i){for(i=i.child;i!==null;)Jf(e,n,i),i=i.sibling}function Jf(e,n,i){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(fo,i)}catch{}switch(i.tag){case 5:Se||Xi(i,n);case 6:var a=xe,t=gn;xe=null,Jn(e,n,i),xe=a,gn=t,xe!==null&&(gn?(e=xe,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):xe.removeChild(i.stateNode));break;case 18:xe!==null&&(gn?(e=xe,i=i.stateNode,e.nodeType===8?il(e.parentNode,i):e.nodeType===1&&il(e,i),dt(e)):il(xe,i.stateNode));break;case 4:a=xe,t=gn,xe=i.stateNode.containerInfo,gn=!0,Jn(e,n,i),xe=a,gn=t;break;case 0:case 11:case 14:case 15:if(!Se&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var r=t,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&sc(i,n,o),t=t.next}while(t!==a)}Jn(e,n,i);break;case 1:if(!Se&&(Xi(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(c){de(i,n,c)}Jn(e,n,i);break;case 21:Jn(e,n,i);break;case 22:i.mode&1?(Se=(a=Se)||i.memoizedState!==null,Jn(e,n,i),Se=a):Jn(e,n,i);break;default:Jn(e,n,i)}}function Vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Sh),n.forEach(function(a){var t=Ah.bind(null,e,a);i.has(a)||(i.add(a),a.then(t,t))})}}function sn(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var t=i[a];try{var r=e,o=n,c=o;e:for(;c!==null;){switch(c.tag){case 5:xe=c.stateNode,gn=!1;break e;case 3:xe=c.stateNode.containerInfo,gn=!0;break e;case 4:xe=c.stateNode.containerInfo,gn=!0;break e}c=c.return}if(xe===null)throw Error(N(160));Jf(r,o,t),xe=null,gn=!1;var s=t.alternate;s!==null&&(s.return=null),t.return=null}catch(u){de(t,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)If(n,e),n=n.sibling}function If(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(n,e),yn(e),a&4){try{it(3,e,e.return),ko(3,e)}catch(R){de(e,e.return,R)}try{it(5,e,e.return)}catch(R){de(e,e.return,R)}}break;case 1:sn(n,e),yn(e),a&512&&i!==null&&Xi(i,i.return);break;case 5:if(sn(n,e),yn(e),a&512&&i!==null&&Xi(i,i.return),e.flags&32){var t=e.stateNode;try{lt(t,"")}catch(R){de(e,e.return,R)}}if(a&4&&(t=e.stateNode,t!=null)){var r=e.memoizedProps,o=i!==null?i.memoizedProps:r,c=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&dg(t,r),Hl(c,o);var u=Hl(c,r);for(o=0;o<s.length;o+=2){var d=s[o],f=s[o+1];d==="style"?hg(t,f):d==="dangerouslySetInnerHTML"?pg(t,f):d==="children"?lt(t,f):zc(t,d,f,u)}switch(c){case"input":Sl(t,r);break;case"textarea":gg(t,r);break;case"select":var g=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?ia(t,!!r.multiple,v,!1):g!==!!r.multiple&&(r.defaultValue!=null?ia(t,!!r.multiple,r.defaultValue,!0):ia(t,!!r.multiple,r.multiple?[]:"",!1))}t[ht]=r}catch(R){de(e,e.return,R)}}break;case 6:if(sn(n,e),yn(e),a&4){if(e.stateNode===null)throw Error(N(162));t=e.stateNode,r=e.memoizedProps;try{t.nodeValue=r}catch(R){de(e,e.return,R)}}break;case 3:if(sn(n,e),yn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{dt(n.containerInfo)}catch(R){de(e,e.return,R)}break;case 4:sn(n,e),yn(e);break;case 13:sn(n,e),yn(e),t=e.child,t.flags&8192&&(r=t.memoizedState!==null,t.stateNode.isHidden=r,!r||t.alternate!==null&&t.alternate.memoizedState!==null||(js=pe())),a&4&&Vu(e);break;case 22:if(d=i!==null&&i.memoizedState!==null,e.mode&1?(Se=(u=Se)||d,sn(n,e),Se=u):sn(n,e),yn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(g=M,v=g.child,g.tag){case 0:case 11:case 14:case 15:it(4,g,g.return);break;case 1:Xi(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){a=g,i=g.return;try{n=a,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(R){de(a,i,R)}}break;case 5:Xi(g,g.return);break;case 22:if(g.memoizedState!==null){Uu(f);continue}}v!==null?(v.return=g,M=v):Uu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{t=f.stateNode,u?(r=t.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,c.style.display=mg("display",o))}catch(R){de(e,e.return,R)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(R){de(e,e.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:sn(n,e),yn(e),a&4&&Vu(e);break;case 21:break;default:sn(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Bf(i)){var a=i;break e}i=i.return}throw Error(N(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(lt(t,""),a.flags&=-33);var r=Iu(e);gc(e,r,t);break;case 3:case 4:var o=a.stateNode.containerInfo,c=Iu(e);dc(e,c,o);break;default:throw Error(N(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Th(e,n,i){M=e,Vf(e)}function Vf(e,n,i){for(var a=(e.mode&1)!==0;M!==null;){var t=M,r=t.child;if(t.tag===22&&a){var o=t.memoizedState!==null||ir;if(!o){var c=t.alternate,s=c!==null&&c.memoizedState!==null||Se;c=ir;var u=Se;if(ir=o,(Se=s)&&!u)for(M=t;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?Qu(t):s!==null?(s.return=o,M=s):Qu(t);for(;r!==null;)M=r,Vf(r),r=r.sibling;M=t,ir=c,Se=u}Wu(e)}else t.subtreeFlags&8772&&r!==null?(r.return=t,M=r):Wu(e)}}function Wu(e){for(;M!==null;){var n=M;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Se||ko(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Se)if(i===null)a.componentDidMount();else{var t=n.elementType===n.type?i.memoizedProps:dn(n.type,i.memoizedProps);a.componentDidUpdate(t,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Nu(n,r,a);break;case 3:var o=n.updateQueue;if(o!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Nu(n,o,i)}break;case 5:var c=n.stateNode;if(i===null&&n.flags&4){i=c;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&i.focus();break;case"img":s.src&&(i.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&dt(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Se||n.flags&512&&uc(n)}catch(g){de(n,n.return,g)}}if(n===e){M=null;break}if(i=n.sibling,i!==null){i.return=n.return,M=i;break}M=n.return}}function Uu(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var i=n.sibling;if(i!==null){i.return=n.return,M=i;break}M=n.return}}function Qu(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{ko(4,n)}catch(s){de(n,i,s)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var t=n.return;try{a.componentDidMount()}catch(s){de(n,t,s)}}var r=n.return;try{uc(n)}catch(s){de(n,r,s)}break;case 5:var o=n.return;try{uc(n)}catch(s){de(n,o,s)}}}catch(s){de(n,n.return,s)}if(n===e){M=null;break}var c=n.sibling;if(c!==null){c.return=n.return,M=c;break}M=n.return}}var Mh=Math.ceil,qr=zn.ReactCurrentDispatcher,vs=zn.ReactCurrentOwner,tn=zn.ReactCurrentBatchConfig,V=0,we=null,he=null,Ce=0,Ve=0,ea=di(0),je=0,wt=null,$i=0,wo=0,Rs=0,at=null,De=null,js=0,pa=1/0,$n=null,Zr=!1,fc=null,ai=null,ar=!1,Zn=null,Yr=0,tt=0,pc=null,kr=-1,wr=0;function Me(){return V&6?pe():kr!==-1?kr:kr=pe()}function ti(e){return e.mode&1?V&2&&Ce!==0?Ce&-Ce:vh.transition!==null?(wr===0&&(wr=bg()),wr):(e=X,e!==0||(e=window.event,e=e===void 0?16:Eg(e.type)),e):1}function hn(e,n,i,a){if(50<tt)throw tt=0,pc=null,Error(N(185));$t(e,i,a),(!(V&2)||e!==we)&&(e===we&&(!(V&2)&&(wo|=i),je===4&&Qn(e,Ce)),Be(e,a),i===1&&V===0&&!(n.mode&1)&&(pa=pe()+500,Ro&&gi()))}function Be(e,n){var i=e.callbackNode;vm(e,n);var a=Mr(e,e===we?Ce:0);if(a===0)i!==null&&au(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&au(i),n===1)e.tag===0?hh(qu.bind(null,e)):ef(qu.bind(null,e)),gh(function(){!(V&6)&&gi()}),i=null;else{switch($g(a)){case 1:i=Vc;break;case 4:i=Kg;break;case 16:i=Tr;break;case 536870912:i=Og;break;default:i=Tr}i=Xf(i,Wf.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Wf(e,n){if(kr=-1,wr=0,V&6)throw Error(N(327));var i=e.callbackNode;if(la()&&e.callbackNode!==i)return null;var a=Mr(e,e===we?Ce:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Gr(e,a);else{n=a;var t=V;V|=2;var r=Qf();(we!==e||Ce!==n)&&($n=null,pa=pe()+500,ki(e,n));do try{Dh();break}catch(c){Uf(e,c)}while(!0);ts(),qr.current=r,V=t,he!==null?n=0:(we=null,Ce=0,n=je)}if(n!==0){if(n===2&&(t=Al(e),t!==0&&(a=t,n=mc(e,t))),n===1)throw i=wt,ki(e,0),Qn(e,a),Be(e,pe()),i;if(n===6)Qn(e,a);else{if(t=e.current.alternate,!(a&30)&&!Eh(t)&&(n=Gr(e,a),n===2&&(r=Al(e),r!==0&&(a=r,n=mc(e,r))),n===1))throw i=wt,ki(e,0),Qn(e,a),Be(e,pe()),i;switch(e.finishedWork=t,e.finishedLanes=a,n){case 0:case 1:throw Error(N(345));case 2:mi(e,De,$n);break;case 3:if(Qn(e,a),(a&130023424)===a&&(n=js+500-pe(),10<n)){if(Mr(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){Me(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=ql(mi.bind(null,e,De,$n),n);break}mi(e,De,$n);break;case 4:if(Qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,t=-1;0<a;){var o=31-mn(a);r=1<<o,o=n[o],o>t&&(t=o),a&=~r}if(a=t,a=pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Mh(a/1960))-a,10<a){e.timeoutHandle=ql(mi.bind(null,e,De,$n),a);break}mi(e,De,$n);break;case 5:mi(e,De,$n);break;default:throw Error(N(329))}}}return Be(e,pe()),e.callbackNode===i?Wf.bind(null,e):null}function mc(e,n){var i=at;return e.current.memoizedState.isDehydrated&&(ki(e,n).flags|=256),e=Gr(e,n),e!==2&&(n=De,De=i,n!==null&&hc(n)),e}function hc(e){De===null?De=e:De.push.apply(De,e)}function Eh(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var t=i[a],r=t.getSnapshot;t=t.value;try{if(!jn(r(),t))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qn(e,n){for(n&=~Rs,n&=~wo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-mn(n),a=1<<i;e[i]=-1,n&=~a}}function qu(e){if(V&6)throw Error(N(327));la();var n=Mr(e,0);if(!(n&1))return Be(e,pe()),null;var i=Gr(e,n);if(e.tag!==0&&i===2){var a=Al(e);a!==0&&(n=a,i=mc(e,a))}if(i===1)throw i=wt,ki(e,0),Qn(e,n),Be(e,pe()),i;if(i===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,mi(e,De,$n),Be(e,pe()),null}function ys(e,n){var i=V;V|=1;try{return e(n)}finally{V=i,V===0&&(pa=pe()+500,Ro&&gi())}}function Ni(e){Zn!==null&&Zn.tag===0&&!(V&6)&&la();var n=V;V|=1;var i=tn.transition,a=X;try{if(tn.transition=null,X=1,e)return e()}finally{X=a,tn.transition=i,V=n,!(V&6)&&gi()}}function ks(){Ve=ea.current,te(ea)}function ki(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,dh(i)),he!==null)for(i=he.return;i!==null;){var a=i;switch(ns(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_r();break;case 3:ga(),te(ze),te(Le),us();break;case 5:ss(a);break;case 4:ga();break;case 13:te(le);break;case 19:te(le);break;case 10:rs(a.type._context);break;case 22:case 23:ks()}i=i.return}if(we=e,he=e=ri(e.current,null),Ce=Ve=n,je=0,wt=null,Rs=wo=$i=0,De=at=null,Ri!==null){for(n=0;n<Ri.length;n++)if(i=Ri[n],a=i.interleaved,a!==null){i.interleaved=null;var t=a.next,r=i.pending;if(r!==null){var o=r.next;r.next=t,a.next=o}i.pending=a}Ri=null}return e}function Uf(e,n){do{var i=he;try{if(ts(),Rr.current=Qr,Ur){for(var a=ce.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Ur=!1}if(bi=0,ye=Re=ce=null,nt=!1,jt=0,vs.current=null,i===null||i.return===null){je=1,wt=n,he=null;break}e:{var r=e,o=i.return,c=i,s=n;if(n=Ce,c.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Hu(o);if(v!==null){v.flags&=-257,Du(v,o,c,r,n),v.mode&1&&Eu(r,u,n),n=v,s=u;var j=n.updateQueue;if(j===null){var R=new Set;R.add(s),n.updateQueue=R}else j.add(s);break e}else{if(!(n&1)){Eu(r,u,n),ws();break e}s=Error(N(426))}}else if(re&&c.mode&1){var w=Hu(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Du(w,o,c,r,n),is(fa(s,c));break e}}r=s=fa(s,c),je!==4&&(je=2),at===null?at=[r]:at.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var m=Nf(r,s,n);$u(r,m);break e;case 1:c=s;var p=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ai===null||!ai.has(h)))){r.flags|=65536,n&=-n,r.lanes|=n;var k=Sf(r,c,n);$u(r,k);break e}}r=r.return}while(r!==null)}Zf(i)}catch(P){n=P,he===i&&i!==null&&(he=i=i.return);continue}break}while(!0)}function Qf(){var e=qr.current;return qr.current=Qr,e===null?Qr:e}function ws(){(je===0||je===3||je===2)&&(je=4),we===null||!($i&268435455)&&!(wo&268435455)||Qn(we,Ce)}function Gr(e,n){var i=V;V|=2;var a=Qf();(we!==e||Ce!==n)&&($n=null,ki(e,n));do try{Hh();break}catch(t){Uf(e,t)}while(!0);if(ts(),V=i,qr.current=a,he!==null)throw Error(N(261));return we=null,Ce=0,je}function Hh(){for(;he!==null;)qf(he)}function Dh(){for(;he!==null&&!cm();)qf(he)}function qf(e){var n=Gf(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,n===null?Zf(e):he=n,vs.current=null}function Zf(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=Nh(i,n),i!==null){i.flags&=32767,he=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,he=null;return}}else if(i=$h(i,n,Ve),i!==null){he=i;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);je===0&&(je=5)}function mi(e,n,i){var a=X,t=tn.transition;try{tn.transition=null,X=1,Fh(e,n,i,a)}finally{tn.transition=t,X=a}return null}function Fh(e,n,i,a){do la();while(Zn!==null);if(V&6)throw Error(N(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(Rm(e,r),e===we&&(he=we=null,Ce=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ar||(ar=!0,Xf(Tr,function(){return la(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=tn.transition,tn.transition=null;var o=X;X=1;var c=V;V|=4,vs.current=null,Lh(e,i),If(i,e),th(Ul),Er=!!Wl,Ul=Wl=null,e.current=i,Th(i),sm(),V=c,X=o,tn.transition=r}else e.current=i;if(ar&&(ar=!1,Zn=e,Yr=t),r=e.pendingLanes,r===0&&(ai=null),gm(i.stateNode),Be(e,pe()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)t=n[i],a(t.value,{componentStack:t.stack,digest:t.digest});if(Zr)throw Zr=!1,e=fc,fc=null,e;return Yr&1&&e.tag!==0&&la(),r=e.pendingLanes,r&1?e===pc?tt++:(tt=0,pc=e):tt=0,gi(),null}function la(){if(Zn!==null){var e=$g(Yr),n=tn.transition,i=X;try{if(tn.transition=null,X=16>e?16:e,Zn===null)var a=!1;else{if(e=Zn,Zn=null,Yr=0,V&6)throw Error(N(331));var t=V;for(V|=4,M=e.current;M!==null;){var r=M,o=r.child;if(M.flags&16){var c=r.deletions;if(c!==null){for(var s=0;s<c.length;s++){var u=c[s];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:it(8,d,r)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var g=d.sibling,v=d.return;if(Af(d),d===u){M=null;break}if(g!==null){g.return=v,M=g;break}M=v}}}var j=r.alternate;if(j!==null){var R=j.child;if(R!==null){j.child=null;do{var w=R.sibling;R.sibling=null,R=w}while(R!==null)}}M=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,M=o;else e:for(;M!==null;){if(r=M,r.flags&2048)switch(r.tag){case 0:case 11:case 15:it(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,M=m;break e}M=r.return}}var p=e.current;for(M=p;M!==null;){o=M;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,M=h;else e:for(o=p;M!==null;){if(c=M,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ko(9,c)}}catch(P){de(c,c.return,P)}if(c===o){M=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,M=k;break e}M=c.return}}if(V=t,gi(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(fo,e)}catch{}a=!0}return a}finally{X=i,tn.transition=n}}return!1}function Zu(e,n,i){n=fa(i,n),n=Nf(e,n,1),e=ii(e,n,1),n=Me(),e!==null&&($t(e,1,n),Be(e,n))}function de(e,n,i){if(e.tag===3)Zu(e,e,i);else for(;n!==null;){if(n.tag===3){Zu(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ai===null||!ai.has(a))){e=fa(i,e),e=Sf(n,e,1),n=ii(n,e,1),e=Me(),n!==null&&($t(n,1,e),Be(n,e));break}}n=n.return}}function _h(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=Me(),e.pingedLanes|=e.suspendedLanes&i,we===e&&(Ce&i)===i&&(je===4||je===3&&(Ce&130023424)===Ce&&500>pe()-js?ki(e,0):Rs|=i),Be(e,n)}function Yf(e,n){n===0&&(e.mode&1?(n=Ut,Ut<<=1,!(Ut&130023424)&&(Ut=4194304)):n=1);var i=Me();e=Dn(e,n),e!==null&&($t(e,n,i),Be(e,i))}function zh(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Yf(e,i)}function Ah(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(N(314))}a!==null&&a.delete(n),Yf(e,i)}var Gf;Gf=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||ze.current)Fe=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return Fe=!1,bh(e,n,i);Fe=!!(e.flags&131072)}else Fe=!1,re&&n.flags&1048576&&nf(n,Br,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;yr(e,n),e=n.pendingProps;var t=sa(n,Le.current);oa(n,i),t=gs(null,n,a,e,t,i);var r=fs();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(a)?(r=!0,zr(n)):r=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,ls(n),t.updater=yo,n.stateNode=t,t._reactInternals=n,ic(n,a,e,i),n=rc(null,n,a,!0,r,i)):(n.tag=0,re&&r&&es(n),Te(null,n,t,i),n=n.child),n;case 16:a=n.elementType;e:{switch(yr(e,n),e=n.pendingProps,t=a._init,a=t(a._payload),n.type=a,t=n.tag=Jh(a),e=dn(a,e),t){case 0:n=tc(null,n,a,e,i);break e;case 1:n=zu(null,n,a,e,i);break e;case 11:n=Fu(null,n,a,e,i);break e;case 14:n=_u(null,n,a,dn(a.type,e),i);break e}throw Error(N(306,a,""))}return n;case 0:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:dn(a,t),tc(e,n,a,t,i);case 1:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:dn(a,t),zu(e,n,a,t,i);case 3:e:{if(Ef(n),e===null)throw Error(N(387));a=n.pendingProps,r=n.memoizedState,t=r.element,cf(e,n),Vr(n,a,null,i);var o=n.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){t=fa(Error(N(423)),n),n=Au(e,n,a,i,t);break e}else if(a!==t){t=fa(Error(N(424)),n),n=Au(e,n,a,i,t);break e}else for(We=ni(n.stateNode.containerInfo.firstChild),Qe=n,re=!0,fn=null,i=of(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ua(),a===t){n=Fn(e,n,i);break e}Te(e,n,a,i)}n=n.child}return n;case 5:return sf(n),e===null&&Xl(n),a=n.type,t=n.pendingProps,r=e!==null?e.memoizedProps:null,o=t.children,Ql(a,t)?o=null:r!==null&&Ql(a,r)&&(n.flags|=32),Mf(e,n),Te(e,n,o,i),n.child;case 6:return e===null&&Xl(n),null;case 13:return Hf(e,n,i);case 4:return cs(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=da(n,null,a,i):Te(e,n,a,i),n.child;case 11:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:dn(a,t),Fu(e,n,a,t,i);case 7:return Te(e,n,n.pendingProps,i),n.child;case 8:return Te(e,n,n.pendingProps.children,i),n.child;case 12:return Te(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,t=n.pendingProps,r=n.memoizedProps,o=t.value,ne(Jr,a._currentValue),a._currentValue=o,r!==null)if(jn(r.value,o)){if(r.children===t.children&&!ze.current){n=Fn(e,n,i);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var c=r.dependencies;if(c!==null){o=r.child;for(var s=c.firstContext;s!==null;){if(s.context===a){if(r.tag===1){s=Mn(-1,i&-i),s.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}r.lanes|=i,s=r.alternate,s!==null&&(s.lanes|=i),ec(r.return,i,n),c.lanes|=i;break}s=s.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(N(341));o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),ec(o,i,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Te(e,n,t.children,i),n=n.child}return n;case 9:return t=n.type,a=n.pendingProps.children,oa(n,i),t=rn(t),a=a(t),n.flags|=1,Te(e,n,a,i),n.child;case 14:return a=n.type,t=dn(a,n.pendingProps),t=dn(a.type,t),_u(e,n,a,t,i);case 15:return Lf(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:dn(a,t),yr(e,n),n.tag=1,Ae(a)?(e=!0,zr(n)):e=!1,oa(n,i),$f(n,a,t),ic(n,a,t,i),rc(null,n,a,!0,e,i);case 19:return Df(e,n,i);case 22:return Tf(e,n,i)}throw Error(N(156,n.tag))};function Xf(e,n){return Cg(e,n)}function Bh(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,i,a){return new Bh(e,n,i,a)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jh(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bc)return 11;if(e===Jc)return 14}return 2}function ri(e,n){var i=e.alternate;return i===null?(i=an(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Pr(e,n,i,a,t,r){var o=2;if(a=e,typeof e=="function")Ps(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ii:return wi(i.children,t,r,n);case Ac:o=8,t|=8;break;case Kl:return e=an(12,i,n,t|2),e.elementType=Kl,e.lanes=r,e;case Ol:return e=an(13,i,n,t),e.elementType=Ol,e.lanes=r,e;case bl:return e=an(19,i,n,t),e.elementType=bl,e.lanes=r,e;case cg:return Po(i,t,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case og:o=10;break e;case lg:o=9;break e;case Bc:o=11;break e;case Jc:o=14;break e;case Vn:o=16,a=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=an(o,i,n,t),n.elementType=e,n.type=a,n.lanes=r,n}function wi(e,n,i,a){return e=an(7,e,a,n),e.lanes=i,e}function Po(e,n,i,a){return e=an(22,e,a,n),e.elementType=cg,e.lanes=i,e.stateNode={isHidden:!1},e}function ul(e,n,i){return e=an(6,e,null,n),e.lanes=i,e}function dl(e,n,i){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ih(e,n,i,a,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function xs(e,n,i,a,t,r,o,c,s){return e=new Ih(e,n,i,c,s),n===1?(n=1,r===!0&&(n|=8)):n=0,r=an(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(r),e}function Vh(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function ep(e){if(!e)return ci;e=e._reactInternals;e:{if(Ei(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var i=e.type;if(Ae(i))return Xg(e,i,n)}return n}function np(e,n,i,a,t,r,o,c,s){return e=xs(i,a,!0,e,t,r,o,c,s),e.context=ep(null),i=e.current,a=Me(),t=ti(i),r=Mn(a,t),r.callback=n??null,ii(i,r,t),e.current.lanes=t,$t(e,t,a),Be(e,a),e}function xo(e,n,i,a){var t=n.current,r=Me(),o=ti(t);return i=ep(i),n.context===null?n.context=i:n.pendingContext=i,n=Mn(r,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=ii(t,n,o),e!==null&&(hn(e,t,o,r),vr(e,t,o)),o}function Xr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Cs(e,n){Yu(e,n),(e=e.alternate)&&Yu(e,n)}function Wh(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ks(e){this._internalRoot=e}Co.prototype.render=Ks.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));xo(e,n,null,null)};Co.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ni(function(){xo(null,e,null,null)}),n[Hn]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lg();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Un.length&&n!==0&&n<Un[i].priority;i++);Un.splice(i,0,e),i===0&&Mg(e)}};function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function Uh(e,n,i,a,t){if(t){if(typeof a=="function"){var r=a;a=function(){var u=Xr(o);r.call(u)}}var o=np(n,a,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=o,e[Hn]=o.current,pt(e.nodeType===8?e.parentNode:e),Ni(),o}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var c=a;a=function(){var u=Xr(s);c.call(u)}}var s=xs(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=s,e[Hn]=s.current,pt(e.nodeType===8?e.parentNode:e),Ni(function(){xo(n,s,i,a)}),s}function Oo(e,n,i,a,t){var r=i._reactRootContainer;if(r){var o=r;if(typeof t=="function"){var c=t;t=function(){var s=Xr(o);c.call(s)}}xo(n,o,e,t)}else o=Uh(i,n,e,t,a);return Xr(o)}Ng=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Va(n.pendingLanes);i!==0&&(Wc(n,i|1),Be(n,pe()),!(V&6)&&(pa=pe()+500,gi()))}break;case 13:Ni(function(){var a=Dn(e,1);if(a!==null){var t=Me();hn(a,e,1,t)}}),Cs(e,1)}};Uc=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var i=Me();hn(n,e,134217728,i)}Cs(e,134217728)}};Sg=function(e){if(e.tag===13){var n=ti(e),i=Dn(e,n);if(i!==null){var a=Me();hn(i,e,n,a)}Cs(e,n)}};Lg=function(){return X};Tg=function(e,n){var i=X;try{return X=e,n()}finally{X=i}};Fl=function(e,n,i){switch(n){case"input":if(Sl(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var t=vo(a);if(!t)throw Error(N(90));ug(a),Sl(a,t)}}}break;case"textarea":gg(e,i);break;case"select":n=i.value,n!=null&&ia(e,!!i.multiple,n,!1)}};jg=ys;yg=Ni;var Qh={usingClientEntryPoint:!1,Events:[St,Qi,vo,vg,Rg,ys]},Ma={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qh={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||Wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{fo=tr.inject(qh),On=tr}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qh;Ge.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Os(n))throw Error(N(200));return Vh(e,n,null,i)};Ge.createRoot=function(e,n){if(!Os(e))throw Error(N(299));var i=!1,a="",t=ip;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=xs(e,1,!1,null,null,i,!1,a,t),e[Hn]=n.current,pt(e.nodeType===8?e.parentNode:e),new Ks(n)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Pg(n),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Ni(e)};Ge.hydrate=function(e,n,i){if(!Ko(n))throw Error(N(200));return Oo(null,e,n,!0,i)};Ge.hydrateRoot=function(e,n,i){if(!Os(e))throw Error(N(405));var a=i!=null&&i.hydratedSources||null,t=!1,r="",o=ip;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),n=np(n,null,e,1,i??null,t,!1,r,o),e[Hn]=n.current,pt(e),a)for(e=0;e<a.length;e++)i=a[e],t=i._getVersion,t=t(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,t]:n.mutableSourceEagerHydrationData.push(i,t);return new Co(n)};Ge.render=function(e,n,i){if(!Ko(n))throw Error(N(200));return Oo(null,e,n,!1,i)};Ge.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(N(40));return e._reactRootContainer?(Ni(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Ge.unstable_batchedUpdates=ys;Ge.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!Ko(i))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Oo(e,n,i,!1,a)};Ge.version="18.3.1-next-f1338f8080-20240426";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(e){console.error(e)}}ap(),ig.exports=Ge;var Zh=ig.exports,Xu=Zh;xl.createRoot=Xu.createRoot,xl.hydrateRoot=Xu.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pt(){return Pt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Pt.apply(this,arguments)}var Yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yn||(Yn={}));const ed="popstate";function Yh(e){e===void 0&&(e={});function n(a,t){let{pathname:r,search:o,hash:c}=a.location;return vc("",{pathname:r,search:o,hash:c},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function i(a,t){return typeof t=="string"?t:eo(t)}return Xh(n,i,null,e)}function ve(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function tp(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Gh(){return Math.random().toString(36).substr(2,8)}function nd(e,n){return{usr:e.state,key:e.key,idx:n}}function vc(e,n,i,a){return i===void 0&&(i=null),Pt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xa(n):n,{state:i,key:n&&n.key||a||Gh()})}function eo(e){let{pathname:n="/",search:i="",hash:a=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function xa(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function Xh(e,n,i,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:r=!1}=a,o=t.history,c=Yn.Pop,s=null,u=d();u==null&&(u=0,o.replaceState(Pt({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){c=Yn.Pop;let w=d(),m=w==null?null:w-u;u=w,s&&s({action:c,location:R.location,delta:m})}function g(w,m){c=Yn.Push;let p=vc(R.location,w,m);u=d()+1;let h=nd(p,u),k=R.createHref(p);try{o.pushState(h,"",k)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;t.location.assign(k)}r&&s&&s({action:c,location:R.location,delta:1})}function v(w,m){c=Yn.Replace;let p=vc(R.location,w,m);u=d();let h=nd(p,u),k=R.createHref(p);o.replaceState(h,"",k),r&&s&&s({action:c,location:R.location,delta:0})}function j(w){let m=t.location.origin!=="null"?t.location.origin:t.location.href,p=typeof w=="string"?w:eo(w);return p=p.replace(/ $/,"%20"),ve(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let R={get action(){return c},get location(){return e(t,o)},listen(w){if(s)throw new Error("A history only accepts one active listener");return t.addEventListener(ed,f),s=w,()=>{t.removeEventListener(ed,f),s=null}},createHref(w){return n(t,w)},createURL:j,encodeLocation(w){let m=j(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(w){return o.go(w)}};return R}var id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(id||(id={}));function e2(e,n,i){return i===void 0&&(i="/"),n2(e,n,i,!1)}function n2(e,n,i,a){let t=typeof n=="string"?xa(n):n,r=bs(t.pathname||"/",i);if(r==null)return null;let o=rp(e);i2(o);let c=null;for(let s=0;c==null&&s<o.length;++s){let u=f2(r);c=d2(o[s],u,a)}return c}function rp(e,n,i,a){n===void 0&&(n=[]),i===void 0&&(i=[]),a===void 0&&(a="");let t=(r,o,c)=>{let s={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};s.relativePath.startsWith("/")&&(ve(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let u=oi([a,s.relativePath]),d=i.concat(s);r.children&&r.children.length>0&&(ve(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rp(r.children,n,d,u)),!(r.path==null&&!r.index)&&n.push({path:u,score:s2(u,r.index),routesMeta:d})};return e.forEach((r,o)=>{var c;if(r.path===""||!((c=r.path)!=null&&c.includes("?")))t(r,o);else for(let s of op(r.path))t(r,o,s)}),n}function op(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,t=i.endsWith("?"),r=i.replace(/\?$/,"");if(a.length===0)return t?[r,""]:[r];let o=op(a.join("/")),c=[];return c.push(...o.map(s=>s===""?r:[r,s].join("/"))),t&&c.push(...o),c.map(s=>e.startsWith("/")&&s===""?"/":s)}function i2(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:u2(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}const a2=/^:[\w-]+$/,t2=3,r2=2,o2=1,l2=10,c2=-2,ad=e=>e==="*";function s2(e,n){let i=e.split("/"),a=i.length;return i.some(ad)&&(a+=c2),n&&(a+=r2),i.filter(t=>!ad(t)).reduce((t,r)=>t+(a2.test(r)?t2:r===""?o2:l2),a)}function u2(e,n){return e.length===n.length&&e.slice(0,-1).every((a,t)=>a===n[t])?e[e.length-1]-n[n.length-1]:0}function d2(e,n,i){let{routesMeta:a}=e,t={},r="/",o=[];for(let c=0;c<a.length;++c){let s=a[c],u=c===a.length-1,d=r==="/"?n:n.slice(r.length)||"/",f=td({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),g=s.route;if(!f&&u&&i&&!a[a.length-1].route.index&&(f=td({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!f)return null;Object.assign(t,f.params),o.push({params:t,pathname:oi([r,f.pathname]),pathnameBase:v2(oi([r,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(r=oi([r,f.pathnameBase]))}return o}function td(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=g2(e.path,e.caseSensitive,e.end),t=n.match(i);if(!t)return null;let r=t[0],o=r.replace(/(.)\/+$/,"$1"),c=t.slice(1);return{params:a.reduce((u,d,f)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let R=c[f]||"";o=r.slice(0,r.length-R.length).replace(/(.)\/+$/,"$1")}const j=c[f];return v&&!j?u[g]=void 0:u[g]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:o,pattern:e}}function g2(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),tp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,s)=>(a.push({paramName:c,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,n?void 0:"i"),a]}function f2(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return tp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function bs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function p2(e,n){n===void 0&&(n="/");let{pathname:i,search:a="",hash:t=""}=typeof e=="string"?xa(e):e;return{pathname:i?i.startsWith("/")?i:m2(i,n):n,search:R2(a),hash:j2(t)}}function m2(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?i.length>1&&i.pop():t!=="."&&i.push(t)}),i.length>1?i.join("/"):"/"}function gl(e,n,i,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h2(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function lp(e,n){let i=h2(e);return n?i.map((a,t)=>t===i.length-1?a.pathname:a.pathnameBase):i.map(a=>a.pathnameBase)}function cp(e,n,i,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=xa(e):(t=Pt({},e),ve(!t.pathname||!t.pathname.includes("?"),gl("?","pathname","search",t)),ve(!t.pathname||!t.pathname.includes("#"),gl("#","pathname","hash",t)),ve(!t.search||!t.search.includes("#"),gl("#","search","hash",t)));let r=e===""||t.pathname==="",o=r?"/":t.pathname,c;if(o==null)c=i;else{let f=n.length-1;if(!a&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;t.pathname=g.join("/")}c=f>=0?n[f]:"/"}let s=p2(t,c),u=o&&o!=="/"&&o.endsWith("/"),d=(r||o===".")&&i.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const oi=e=>e.join("/").replace(/\/\/+/g,"/"),v2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sp=["post","put","patch","delete"];new Set(sp);const k2=["get",...sp];new Set(k2);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xt(){return xt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},xt.apply(this,arguments)}const $s=O.createContext(null),w2=O.createContext(null),Hi=O.createContext(null),bo=O.createContext(null),Di=O.createContext({outlet:null,matches:[],isDataRoute:!1}),up=O.createContext(null);function P2(e,n){let{relative:i}=n===void 0?{}:n;Tt()||ve(!1);let{basename:a,navigator:t}=O.useContext(Hi),{hash:r,pathname:o,search:c}=gp(e,{relative:i}),s=o;return a!=="/"&&(s=o==="/"?a:oi([a,o])),t.createHref({pathname:s,search:c,hash:r})}function Tt(){return O.useContext(bo)!=null}function ge(){return Tt()||ve(!1),O.useContext(bo).location}function dp(e){O.useContext(Hi).static||O.useLayoutEffect(e)}function Fi(){let{isDataRoute:e}=O.useContext(Di);return e?H2():x2()}function x2(){Tt()||ve(!1);let e=O.useContext($s),{basename:n,future:i,navigator:a}=O.useContext(Hi),{matches:t}=O.useContext(Di),{pathname:r}=ge(),o=JSON.stringify(lp(t,i.v7_relativeSplatPath)),c=O.useRef(!1);return dp(()=>{c.current=!0}),O.useCallback(function(u,d){if(d===void 0&&(d={}),!c.current)return;if(typeof u=="number"){a.go(u);return}let f=cp(u,JSON.parse(o),r,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:oi([n,f.pathname])),(d.replace?a.replace:a.push)(f,d.state,d)},[n,a,o,r,e])}function gp(e,n){let{relative:i}=n===void 0?{}:n,{future:a}=O.useContext(Hi),{matches:t}=O.useContext(Di),{pathname:r}=ge(),o=JSON.stringify(lp(t,a.v7_relativeSplatPath));return O.useMemo(()=>cp(e,JSON.parse(o),r,i==="path"),[e,o,r,i])}function C2(e,n){return K2(e,n)}function K2(e,n,i,a){Tt()||ve(!1);let{navigator:t}=O.useContext(Hi),{matches:r}=O.useContext(Di),o=r[r.length-1],c=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=ge(),d;if(n){var f;let w=typeof n=="string"?xa(n):n;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||ve(!1),d=w}else d=u;let g=d.pathname||"/",v=g;if(s!=="/"){let w=s.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=e2(e,{pathname:v}),R=S2(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:oi([s,t.encodeLocation?t.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:oi([s,t.encodeLocation?t.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),r,i,a);return n&&R?O.createElement(bo.Provider,{value:{location:xt({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yn.Pop}},R):R}function O2(){let e=E2(),n=y2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},n),i?O.createElement("pre",{style:t},i):null,null)}const b2=O.createElement(O2,null);class $2 extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?O.createElement(Di.Provider,{value:this.props.routeContext},O.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N2(e){let{routeContext:n,match:i,children:a}=e,t=O.useContext($s);return t&&t.static&&t.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=i.route.id),O.createElement(Di.Provider,{value:n},a)}function S2(e,n,i,a){var t;if(n===void 0&&(n=[]),i===void 0&&(i=null),a===void 0&&(a=null),e==null){var r;if(!i)return null;if(i.errors)e=i.matches;else if((r=a)!=null&&r.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=(t=i)==null?void 0:t.errors;if(c!=null){let d=o.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);d>=0||ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,u=-1;if(i&&a&&a.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:v}=i,j=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||j){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let v,j=!1,R=null,w=null;i&&(v=c&&f.route.id?c[f.route.id]:void 0,R=f.route.errorElement||b2,s&&(u<0&&g===0?(j=!0,w=null):u===g&&(j=!0,w=f.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,g+1)),p=()=>{let h;return v?h=R:j?h=w:f.route.Component?h=O.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,O.createElement(N2,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:i!=null},children:h})};return i&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?O.createElement($2,{location:i.location,revalidation:i.revalidation,component:R,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var fp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fp||{}),no=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(no||{});function L2(e){let n=O.useContext($s);return n||ve(!1),n}function T2(e){let n=O.useContext(w2);return n||ve(!1),n}function M2(e){let n=O.useContext(Di);return n||ve(!1),n}function pp(e){let n=M2(),i=n.matches[n.matches.length-1];return i.route.id||ve(!1),i.route.id}function E2(){var e;let n=O.useContext(up),i=T2(no.UseRouteError),a=pp(no.UseRouteError);return n!==void 0?n:(e=i.errors)==null?void 0:e[a]}function H2(){let{router:e}=L2(fp.UseNavigateStable),n=pp(no.UseNavigateStable),i=O.useRef(!1);return dp(()=>{i.current=!0}),O.useCallback(function(t,r){r===void 0&&(r={}),i.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,xt({fromRouteId:n},r)))},[e,n])}function un(e){ve(!1)}function D2(e){let{basename:n="/",children:i=null,location:a,navigationType:t=Yn.Pop,navigator:r,static:o=!1,future:c}=e;Tt()&&ve(!1);let s=n.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:s,navigator:r,static:o,future:xt({v7_relativeSplatPath:!1},c)}),[s,c,r,o]);typeof a=="string"&&(a=xa(a));let{pathname:d="/",search:f="",hash:g="",state:v=null,key:j="default"}=a,R=O.useMemo(()=>{let w=bs(d,s);return w==null?null:{location:{pathname:w,search:f,hash:g,state:v,key:j},navigationType:t}},[s,d,f,g,v,j,t]);return R==null?null:O.createElement(Hi.Provider,{value:u},O.createElement(bo.Provider,{children:i,value:R}))}function F2(e){let{children:n,location:i}=e;return C2(Rc(n),i)}new Promise(()=>{});function Rc(e,n){n===void 0&&(n=[]);let i=[];return O.Children.forEach(e,(a,t)=>{if(!O.isValidElement(a))return;let r=[...n,t];if(a.type===O.Fragment){i.push.apply(i,Rc(a.props.children,r));return}a.type!==un&&ve(!1),!a.props.index||!a.props.children||ve(!1);let o={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Rc(a.props.children,r)),i.push(o)}),i}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jc(){return jc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},jc.apply(this,arguments)}function _2(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}function z2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A2(e,n){return e.button===0&&(!n||n==="_self")&&!z2(e)}const B2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],J2="6";try{window.__reactRouterVersion=J2}catch{}const I2="startTransition",rd=Pl[I2];function V2(e){let{basename:n,children:i,future:a,window:t}=e,r=O.useRef();r.current==null&&(r.current=Yh({window:t,v5Compat:!0}));let o=r.current,[c,s]=O.useState({action:o.action,location:o.location}),{v7_startTransition:u}=a||{},d=O.useCallback(f=>{u&&rd?rd(()=>s(f)):s(f)},[s,u]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.createElement(D2,{basename:n,children:i,location:c.location,navigationType:c.action,navigator:o,future:a})}const W2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",U2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fi=O.forwardRef(function(n,i){let{onClick:a,relative:t,reloadDocument:r,replace:o,state:c,target:s,to:u,preventScrollReset:d,unstable_viewTransition:f}=n,g=_2(n,B2),{basename:v}=O.useContext(Hi),j,R=!1;if(typeof u=="string"&&U2.test(u)&&(j=u,W2))try{let h=new URL(window.location.href),k=u.startsWith("//")?new URL(h.protocol+u):new URL(u),P=bs(k.pathname,v);k.origin===h.origin&&P!=null?u=P+k.search+k.hash:R=!0}catch{}let w=P2(u,{relative:t}),m=Q2(u,{replace:o,state:c,target:s,preventScrollReset:d,relative:t,unstable_viewTransition:f});function p(h){a&&a(h),h.defaultPrevented||m(h)}return O.createElement("a",jc({},g,{href:j||w,onClick:R||r?a:p,ref:i,target:s}))});var od;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(od||(od={}));var ld;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ld||(ld={}));function Q2(e,n){let{target:i,replace:a,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:c}=n===void 0?{}:n,s=Fi(),u=ge(),d=gp(e,{relative:o});return O.useCallback(f=>{if(A2(f,i)){f.preventDefault();let g=a!==void 0?a:eo(u)===eo(d);s(e,{replace:g,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:c})}},[u,s,d,a,t,i,e,r,o,c])}var mp={exports:{}},hp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mt=O;function q2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Z2=typeof Object.is=="function"?Object.is:q2,Y2=Mt.useSyncExternalStore,G2=Mt.useRef,X2=Mt.useEffect,ev=Mt.useMemo,nv=Mt.useDebugValue;hp.useSyncExternalStoreWithSelector=function(e,n,i,a,t){var r=G2(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=ev(function(){function s(v){if(!u){if(u=!0,d=v,v=a(v),t!==void 0&&o.hasValue){var j=o.value;if(t(j,v))return f=j}return f=v}if(j=f,Z2(d,v))return j;var R=a(v);return t!==void 0&&t(j,R)?j:(d=v,f=R)}var u=!1,d,f,g=i===void 0?null:i;return[function(){return s(n())},g===null?void 0:function(){return s(g())}]},[n,i,a,t]);var c=Y2(e,r[0],r[1]);return X2(function(){o.hasValue=!0,o.value=c},[c]),nv(c),c};mp.exports=hp;var iv=mp.exports,Ue="default"in Pl?Ci:Pl,cd=Symbol.for("react-redux-context"),sd=typeof globalThis<"u"?globalThis:{};function av(){if(!Ue.createContext)return{};const e=sd[cd]??(sd[cd]=new Map);let n=e.get(Ue.createContext);return n||(n=Ue.createContext(null),e.set(Ue.createContext,n)),n}var si=av(),tv=()=>{throw new Error("uSES not initialized!")};function Ns(e=si){return function(){return Ue.useContext(e)}}var vp=Ns(),Rp=tv,rv=e=>{Rp=e},ov=(e,n)=>e===n;function lv(e=si){const n=e===si?vp:Ns(e),i=(a,t={})=>{const{equalityFn:r=ov,devModeChecks:o={}}=typeof t=="function"?{equalityFn:t}:t,{store:c,subscription:s,getServerState:u,stabilityCheck:d,identityFunctionCheck:f}=n();Ue.useRef(!0);const g=Ue.useCallback({[a.name](j){return a(j)}}[a.name],[a,d,o.stabilityCheck]),v=Rp(s.addNestedSub,c.getState,u||c.getState,g,r);return Ue.useDebugValue(v),v};return Object.assign(i,{withTypes:()=>i}),i}var C=lv();function cv(e){e()}function sv(){let e=null,n=null;return{clear(){e=null,n=null},notify(){cv(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){const i=[];let a=e;for(;a;)i.push(a),a=a.next;return i},subscribe(i){let a=!0;const t=n={callback:i,next:null,prev:n};return t.prev?t.prev.next=t:e=t,function(){!a||e===null||(a=!1,t.next?t.next.prev=t.prev:n=t.prev,t.prev?t.prev.next=t.next:e=t.next)}}}}var ud={notify(){},get:()=>[]};function uv(e,n){let i,a=ud,t=0,r=!1;function o(R){d();const w=a.subscribe(R);let m=!1;return()=>{m||(m=!0,w(),f())}}function c(){a.notify()}function s(){j.onStateChange&&j.onStateChange()}function u(){return r}function d(){t++,i||(i=e.subscribe(s),a=sv())}function f(){t--,i&&t===0&&(i(),i=void 0,a.clear(),a=ud)}function g(){r||(r=!0,d())}function v(){r&&(r=!1,f())}const j={addNestedSub:o,notifyNestedSubs:c,handleChangeWrapper:s,isSubscribed:u,trySubscribe:g,tryUnsubscribe:v,getListeners:()=>a};return j}var dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gv=typeof navigator<"u"&&navigator.product==="ReactNative",fv=dv||gv?Ue.useLayoutEffect:Ue.useEffect;function pv({store:e,context:n,children:i,serverState:a,stabilityCheck:t="once",identityFunctionCheck:r="once"}){const o=Ue.useMemo(()=>{const u=uv(e);return{store:e,subscription:u,getServerState:a?()=>a:void 0,stabilityCheck:t,identityFunctionCheck:r}},[e,a,t,r]),c=Ue.useMemo(()=>e.getState(),[e]);fv(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),c!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,c]);const s=n||si;return Ue.createElement(s.Provider,{value:o},i)}var mv=pv;function jp(e=si){const n=e===si?vp:Ns(e),i=()=>{const{store:a}=n();return a};return Object.assign(i,{withTypes:()=>i}),i}var hv=jp();function vv(e=si){const n=e===si?hv:jp(e),i=()=>n().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var Je=vv();rv(iv.useSyncExternalStoreWithSelector);function Pe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Rv=typeof Symbol=="function"&&Symbol.observable||"@@observable",dd=Rv,fl=()=>Math.random().toString(36).substring(7).split("").join("."),jv={INIT:`@@redux/INIT${fl()}`,REPLACE:`@@redux/REPLACE${fl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fl()}`},io=jv;function Ss(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function yp(e,n,i){if(typeof e!="function")throw new Error(Pe(2));if(typeof n=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(Pe(0));if(typeof n=="function"&&typeof i>"u"&&(i=n,n=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(Pe(1));return i(yp)(e,n)}let a=e,t=n,r=new Map,o=r,c=0,s=!1;function u(){o===r&&(o=new Map,r.forEach((w,m)=>{o.set(m,w)}))}function d(){if(s)throw new Error(Pe(3));return t}function f(w){if(typeof w!="function")throw new Error(Pe(4));if(s)throw new Error(Pe(5));let m=!0;u();const p=c++;return o.set(p,w),function(){if(m){if(s)throw new Error(Pe(6));m=!1,u(),o.delete(p),r=null}}}function g(w){if(!Ss(w))throw new Error(Pe(7));if(typeof w.type>"u")throw new Error(Pe(8));if(typeof w.type!="string")throw new Error(Pe(17));if(s)throw new Error(Pe(9));try{s=!0,t=a(t,w)}finally{s=!1}return(r=o).forEach(p=>{p()}),w}function v(w){if(typeof w!="function")throw new Error(Pe(10));a=w,g({type:io.REPLACE})}function j(){const w=f;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Pe(11));function p(){const k=m;k.next&&k.next(d())}return p(),{unsubscribe:w(p)}},[dd](){return this}}}return g({type:io.INIT}),{dispatch:g,subscribe:f,getState:d,replaceReducer:v,[dd]:j}}function yv(e){Object.keys(e).forEach(n=>{const i=e[n];if(typeof i(void 0,{type:io.INIT})>"u")throw new Error(Pe(12));if(typeof i(void 0,{type:io.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Pe(13))})}function kv(e){const n=Object.keys(e),i={};for(let r=0;r<n.length;r++){const o=n[r];typeof e[o]=="function"&&(i[o]=e[o])}const a=Object.keys(i);let t;try{yv(i)}catch(r){t=r}return function(o={},c){if(t)throw t;let s=!1;const u={};for(let d=0;d<a.length;d++){const f=a[d],g=i[f],v=o[f],j=g(v,c);if(typeof j>"u")throw c&&c.type,new Error(Pe(14));u[f]=j,s=s||j!==v}return s=s||a.length!==Object.keys(o).length,s?u:o}}function ao(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,i)=>(...a)=>n(i(...a)))}function wv(...e){return n=>(i,a)=>{const t=n(i,a);let r=()=>{throw new Error(Pe(15))};const o={getState:t.getState,dispatch:(s,...u)=>r(s,...u)},c=e.map(s=>s(o));return r=ao(...c)(t.dispatch),{...t,dispatch:r}}}function Pv(e){return Ss(e)&&"type"in e&&typeof e.type=="string"}var kp=Symbol.for("immer-nothing"),gd=Symbol.for("immer-draftable"),Ze=Symbol.for("immer-state");function pn(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ma=Object.getPrototypeOf;function Si(e){return!!e&&!!e[Ze]}function _n(e){var n;return e?wp(e)||Array.isArray(e)||!!e[gd]||!!((n=e.constructor)!=null&&n[gd])||No(e)||So(e):!1}var xv=Object.prototype.constructor.toString();function wp(e){if(!e||typeof e!="object")return!1;const n=ma(e);if(n===null)return!0;const i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===xv}function to(e,n){$o(e)===0?Reflect.ownKeys(e).forEach(i=>{n(i,e[i],e)}):e.forEach((i,a)=>n(a,i,e))}function $o(e){const n=e[Ze];return n?n.type_:Array.isArray(e)?1:No(e)?2:So(e)?3:0}function yc(e,n){return $o(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Pp(e,n,i){const a=$o(e);a===2?e.set(n,i):a===3?e.add(i):e[n]=i}function Cv(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function No(e){return e instanceof Map}function So(e){return e instanceof Set}function hi(e){return e.copy_||e.base_}function kc(e,n){if(No(e))return new Map(e);if(So(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const i=wp(e);if(n===!0||n==="class_only"&&!i){const a=Object.getOwnPropertyDescriptors(e);delete a[Ze];let t=Reflect.ownKeys(a);for(let r=0;r<t.length;r++){const o=t[r],c=a[o];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(a[o]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[o]})}return Object.create(ma(e),a)}else{const a=ma(e);if(a!==null&&i)return{...e};const t=Object.create(a);return Object.assign(t,e)}}function Ls(e,n=!1){return Lo(e)||Si(e)||!_n(e)||($o(e)>1&&(e.set=e.add=e.clear=e.delete=Kv),Object.freeze(e),n&&Object.entries(e).forEach(([i,a])=>Ls(a,!0))),e}function Kv(){pn(2)}function Lo(e){return Object.isFrozen(e)}var Ov={};function Li(e){const n=Ov[e];return n||pn(0,e),n}var Ct;function xp(){return Ct}function bv(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function fd(e,n){n&&(Li("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function wc(e){Pc(e),e.drafts_.forEach($v),e.drafts_=null}function Pc(e){e===Ct&&(Ct=e.parent_)}function pd(e){return Ct=bv(Ct,e)}function $v(e){const n=e[Ze];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function md(e,n){n.unfinalizedDrafts_=n.drafts_.length;const i=n.drafts_[0];return e!==void 0&&e!==i?(i[Ze].modified_&&(wc(n),pn(4)),_n(e)&&(e=ro(n,e),n.parent_||oo(n,e)),n.patches_&&Li("Patches").generateReplacementPatches_(i[Ze].base_,e,n.patches_,n.inversePatches_)):e=ro(n,i,[]),wc(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==kp?e:void 0}function ro(e,n,i){if(Lo(n))return n;const a=n[Ze];if(!a)return to(n,(t,r)=>hd(e,a,n,t,r,i)),n;if(a.scope_!==e)return n;if(!a.modified_)return oo(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const t=a.copy_;let r=t,o=!1;a.type_===3&&(r=new Set(t),t.clear(),o=!0),to(r,(c,s)=>hd(e,a,t,c,s,i,o)),oo(e,t,!1),i&&e.patches_&&Li("Patches").generatePatches_(a,i,e.patches_,e.inversePatches_)}return a.copy_}function hd(e,n,i,a,t,r,o){if(Si(t)){const c=r&&n&&n.type_!==3&&!yc(n.assigned_,a)?r.concat(a):void 0,s=ro(e,t,c);if(Pp(i,a,s),Si(s))e.canAutoFreeze_=!1;else return}else o&&i.add(t);if(_n(t)&&!Lo(t)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ro(e,t),(!n||!n.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,a)&&oo(e,t)}}function oo(e,n,i=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ls(n,i)}function Nv(e,n){const i=Array.isArray(e),a={type_:i?1:0,scope_:n?n.scope_:xp(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let t=a,r=Ts;i&&(t=[a],r=Kt);const{revoke:o,proxy:c}=Proxy.revocable(t,r);return a.draft_=c,a.revoke_=o,c}var Ts={get(e,n){if(n===Ze)return e;const i=hi(e);if(!yc(i,n))return Sv(e,i,n);const a=i[n];return e.finalized_||!_n(a)?a:a===pl(e.base_,n)?(ml(e),e.copy_[n]=Cc(a,e)):a},has(e,n){return n in hi(e)},ownKeys(e){return Reflect.ownKeys(hi(e))},set(e,n,i){const a=Cp(hi(e),n);if(a!=null&&a.set)return a.set.call(e.draft_,i),!0;if(!e.modified_){const t=pl(hi(e),n),r=t==null?void 0:t[Ze];if(r&&r.base_===i)return e.copy_[n]=i,e.assigned_[n]=!1,!0;if(Cv(i,t)&&(i!==void 0||yc(e.base_,n)))return!0;ml(e),xc(e)}return e.copy_[n]===i&&(i!==void 0||n in e.copy_)||Number.isNaN(i)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=i,e.assigned_[n]=!0),!0},deleteProperty(e,n){return pl(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,ml(e),xc(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const i=hi(e),a=Reflect.getOwnPropertyDescriptor(i,n);return a&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:a.enumerable,value:i[n]}},defineProperty(){pn(11)},getPrototypeOf(e){return ma(e.base_)},setPrototypeOf(){pn(12)}},Kt={};to(Ts,(e,n)=>{Kt[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Kt.deleteProperty=function(e,n){return Kt.set.call(this,e,n,void 0)};Kt.set=function(e,n,i){return Ts.set.call(this,e[0],n,i,e[0])};function pl(e,n){const i=e[Ze];return(i?hi(i):e)[n]}function Sv(e,n,i){var t;const a=Cp(n,i);return a?"value"in a?a.value:(t=a.get)==null?void 0:t.call(e.draft_):void 0}function Cp(e,n){if(!(n in e))return;let i=ma(e);for(;i;){const a=Object.getOwnPropertyDescriptor(i,n);if(a)return a;i=ma(i)}}function xc(e){e.modified_||(e.modified_=!0,e.parent_&&xc(e.parent_))}function ml(e){e.copy_||(e.copy_=kc(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Lv=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,i,a)=>{if(typeof n=="function"&&typeof i!="function"){const r=i;i=n;const o=this;return function(s=r,...u){return o.produce(s,d=>i.call(this,d,...u))}}typeof i!="function"&&pn(6),a!==void 0&&typeof a!="function"&&pn(7);let t;if(_n(n)){const r=pd(this),o=Cc(n,void 0);let c=!0;try{t=i(o),c=!1}finally{c?wc(r):Pc(r)}return fd(r,a),md(t,r)}else if(!n||typeof n!="object"){if(t=i(n),t===void 0&&(t=n),t===kp&&(t=void 0),this.autoFreeze_&&Ls(t,!0),a){const r=[],o=[];Li("Patches").generateReplacementPatches_(n,t,r,o),a(r,o)}return t}else pn(1,n)},this.produceWithPatches=(n,i)=>{if(typeof n=="function")return(o,...c)=>this.produceWithPatches(o,s=>n(s,...c));let a,t;return[this.produce(n,i,(o,c)=>{a=o,t=c}),a,t]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){_n(e)||pn(8),Si(e)&&(e=Tv(e));const n=pd(this),i=Cc(e,void 0);return i[Ze].isManual_=!0,Pc(n),i}finishDraft(e,n){const i=e&&e[Ze];(!i||!i.isManual_)&&pn(9);const{scope_:a}=i;return fd(a,n),md(void 0,a)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let i;for(i=n.length-1;i>=0;i--){const t=n[i];if(t.path.length===0&&t.op==="replace"){e=t.value;break}}i>-1&&(n=n.slice(i+1));const a=Li("Patches").applyPatches_;return Si(e)?a(e,n):this.produce(e,t=>a(t,n))}};function Cc(e,n){const i=No(e)?Li("MapSet").proxyMap_(e,n):So(e)?Li("MapSet").proxySet_(e,n):Nv(e,n);return(n?n.scope_:xp()).drafts_.push(i),i}function Tv(e){return Si(e)||pn(10,e),Kp(e)}function Kp(e){if(!_n(e)||Lo(e))return e;const n=e[Ze];let i;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,i=kc(e,n.scope_.immer_.useStrictShallowCopy_)}else i=kc(e,!0);return to(i,(a,t)=>{Pp(i,a,Kp(t))}),n&&(n.finalized_=!1),i}var Ye=new Lv,Op=Ye.produce;Ye.produceWithPatches.bind(Ye);Ye.setAutoFreeze.bind(Ye);Ye.setUseStrictShallowCopy.bind(Ye);Ye.applyPatches.bind(Ye);Ye.createDraft.bind(Ye);Ye.finishDraft.bind(Ye);function bp(e){return({dispatch:i,getState:a})=>t=>r=>typeof r=="function"?r(i,a,e):t(r)}var Mv=bp(),Ev=bp,Hv=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ao:ao.apply(null,arguments)};function vd(e,n){function i(...a){if(n){let t=n(...a);if(!t)throw new Error(vn(0));return{type:e,payload:t.payload,..."meta"in t&&{meta:t.meta},..."error"in t&&{error:t.error}}}return{type:e,payload:a[0]}}return i.toString=()=>`${e}`,i.type=e,i.match=a=>Pv(a)&&a.type===e,i}var $p=class Ua extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Ua.prototype)}static get[Symbol.species](){return Ua}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Ua(...n[0].concat(this)):new Ua(...n.concat(this))}};function Rd(e){return _n(e)?Op(e,()=>{}):e}function jd(e,n,i){if(e.has(n)){let t=e.get(n);return i.update&&(t=i.update(t,n,e),e.set(n,t)),t}if(!i.insert)throw new Error(vn(10));const a=i.insert(n,e);return e.set(n,a),a}function Dv(e){return typeof e=="boolean"}var Fv=()=>function(n){const{thunk:i=!0,immutableCheck:a=!0,serializableCheck:t=!0,actionCreatorCheck:r=!0}=n??{};let o=new $p;return i&&(Dv(i)?o.push(Mv):o.push(Ev(i.extraArgument))),o},_v="RTK_autoBatch",Np=e=>n=>{setTimeout(n,e)},zv=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Np(10),Av=(e={type:"raf"})=>n=>(...i)=>{const a=n(...i);let t=!0,r=!1,o=!1;const c=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?zv:e.type==="callback"?e.queueNotification:Np(e.timeout),u=()=>{o=!1,r&&(r=!1,c.forEach(d=>d()))};return Object.assign({},a,{subscribe(d){const f=()=>t&&d(),g=a.subscribe(f);return c.add(d),()=>{g(),c.delete(d)}},dispatch(d){var f;try{return t=!((f=d==null?void 0:d.meta)!=null&&f[_v]),r=!t,r&&(o||(o=!0,s(u))),a.dispatch(d)}finally{t=!0}}})},Bv=e=>function(i){const{autoBatch:a=!0}=i??{};let t=new $p(e);return a&&t.push(Av(typeof a=="object"?a:void 0)),t};function Jv(e){const n=Fv(),{reducer:i=void 0,middleware:a,devTools:t=!0,preloadedState:r=void 0,enhancers:o=void 0}=e||{};let c;if(typeof i=="function")c=i;else if(Ss(i))c=kv(i);else throw new Error(vn(1));let s;typeof a=="function"?s=a(n):s=n();let u=ao;t&&(u=Hv({trace:!1,...typeof t=="object"&&t}));const d=wv(...s),f=Bv(d);let g=typeof o=="function"?o(f):f();const v=u(...g);return yp(c,r,v)}function Sp(e){const n={},i=[];let a;const t={addCase(r,o){const c=typeof r=="string"?r:r.type;if(!c)throw new Error(vn(28));if(c in n)throw new Error(vn(29));return n[c]=o,t},addMatcher(r,o){return i.push({matcher:r,reducer:o}),t},addDefaultCase(r){return a=r,t}};return e(t),[n,i,a]}function Iv(e){return typeof e=="function"}function Vv(e,n){let[i,a,t]=Sp(n),r;if(Iv(e))r=()=>Rd(e());else{const c=Rd(e);r=()=>c}function o(c=r(),s){let u=[i[s.type],...a.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[t]),u.reduce((d,f)=>{if(f)if(Si(d)){const v=f(d,s);return v===void 0?d:v}else{if(_n(d))return Op(d,g=>f(g,s));{const g=f(d,s);if(g===void 0){if(d===null)return d;throw new Error(vn(9))}return g}}return d},c)}return o.getInitialState=r,o}var Wv=Symbol.for("rtk-slice-createasyncthunk");function Uv(e,n){return`${e}/${n}`}function Qv({creators:e}={}){var i;const n=(i=e==null?void 0:e.asyncThunk)==null?void 0:i[Wv];return function(t){const{name:r,reducerPath:o=r}=t;if(!r)throw new Error(vn(11));typeof process<"u";const c=(typeof t.reducers=="function"?t.reducers(Zv()):t.reducers)||{},s=Object.keys(c),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(h,k){const P=typeof h=="string"?h:h.type;if(!P)throw new Error(vn(12));if(P in u.sliceCaseReducersByType)throw new Error(vn(13));return u.sliceCaseReducersByType[P]=k,d},addMatcher(h,k){return u.sliceMatchers.push({matcher:h,reducer:k}),d},exposeAction(h,k){return u.actionCreators[h]=k,d},exposeCaseReducer(h,k){return u.sliceCaseReducersByName[h]=k,d}};s.forEach(h=>{const k=c[h],P={reducerName:h,type:Uv(r,h),createNotation:typeof t.reducers=="function"};Gv(k)?e1(P,k,d,n):Yv(P,k,d)});function f(){const[h={},k=[],P=void 0]=typeof t.extraReducers=="function"?Sp(t.extraReducers):[t.extraReducers],K={...h,...u.sliceCaseReducersByType};return Vv(t.initialState,x=>{for(let b in K)x.addCase(b,K[b]);for(let b of u.sliceMatchers)x.addMatcher(b.matcher,b.reducer);for(let b of k)x.addMatcher(b.matcher,b.reducer);P&&x.addDefaultCase(P)})}const g=h=>h,v=new Map;let j;function R(h,k){return j||(j=f()),j(h,k)}function w(){return j||(j=f()),j.getInitialState()}function m(h,k=!1){function P(x){let b=x[h];return typeof b>"u"&&k&&(b=w()),b}function K(x=g){const b=jd(v,k,{insert:()=>new WeakMap});return jd(b,x,{insert:()=>{const F={};for(const[D,q]of Object.entries(t.selectors??{}))F[D]=qv(q,x,w,k);return F}})}return{reducerPath:h,getSelectors:K,get selectors(){return K(P)},selectSlice:P}}const p={name:r,reducer:R,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...m(o),injectInto(h,{reducerPath:k,...P}={}){const K=k??o;return h.inject({reducerPath:K,reducer:R},P),{...p,...m(K,!0)}}};return p}}function qv(e,n,i,a){function t(r,...o){let c=n(r);return typeof c>"u"&&a&&(c=i()),e(c,...o)}return t.unwrapped=e,t}var _i=Qv();function Zv(){function e(n,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...i}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...i){return n(...i)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:i}},asyncThunk:e}}function Yv({type:e,reducerName:n,createNotation:i},a,t){let r,o;if("reducer"in a){if(i&&!Xv(a))throw new Error(vn(17));r=a.reducer,o=a.prepare}else r=a;t.addCase(e,r).exposeCaseReducer(n,r).exposeAction(n,o?vd(e,o):vd(e))}function Gv(e){return e._reducerDefinitionType==="asyncThunk"}function Xv(e){return e._reducerDefinitionType==="reducerWithPrepare"}function e1({type:e,reducerName:n},i,a,t){if(!t)throw new Error(vn(18));const{payloadCreator:r,fulfilled:o,pending:c,rejected:s,settled:u,options:d}=i,f=t(e,r,d);a.exposeAction(n,f),o&&a.addCase(f.fulfilled,o),c&&a.addCase(f.pending,c),s&&a.addCase(f.rejected,s),u&&a.addMatcher(f.settled,u),a.exposeCaseReducer(n,{fulfilled:o||rr,pending:c||rr,rejected:s||rr,settled:u||rr})}function rr(){}function vn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const n1=[{id:1,Kanji:"一",OnReading:["イチ","イツ"],KunReading:["ひと","ひと(つ)"],OnPrincipalReading:"イチ",KunPrincipalReading:"ひと(つ)",OnPrincipalReadingRomaji:"ichi",KunPrincipalReadingRomaji:"hito(tsu)",JLPTLevel:"N5",Meaning:"un",SecondaryMeaning:null},{id:2,Kanji:"二",OnReading:["ニ","ジ"],KunReading:["ふた","ふた(つ)"],OnPrincipalReading:"ニ",KunPrincipalReading:"ふた(つ)",OnPrincipalReadingRomaji:"ni",KunPrincipalReadingRomaji:"futa(tsu)",JLPTLevel:"N5",Meaning:"deux",SecondaryMeaning:null},{id:3,Kanji:"三",OnReading:["サン"],KunReading:["み","み(つ)"],OnPrincipalReading:"サン",KunPrincipalReading:"み(つ)",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"mi(tsu)",JLPTLevel:"N5",Meaning:"trois",SecondaryMeaning:null},{id:4,Kanji:"四",OnReading:["シ"],KunReading:["よん","よ","よ(つ)"],OnPrincipalReading:"シ",KunPrincipalReading:"よん",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"yon",JLPTLevel:"N5",Meaning:"quatre",SecondaryMeaning:null},{id:5,Kanji:"五",OnReading:["ゴ"],KunReading:["いつ","いつ(つ)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"いつ(つ)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"itsu(tsu)",JLPTLevel:"N5",Meaning:"cinq",SecondaryMeaning:null},{id:6,Kanji:"六",OnReading:["ロク"],KunReading:["む","む(つ)","むい"],OnPrincipalReading:"ロク",KunPrincipalReading:"む(つ)",OnPrincipalReadingRomaji:"roku",KunPrincipalReadingRomaji:"mu(tsu)",JLPTLevel:"N5",Meaning:"six",SecondaryMeaning:null},{id:7,Kanji:"七",OnReading:["シチ"],KunReading:["なな","なな(つ)","なの"],OnPrincipalReading:"シチ",KunPrincipalReading:"なな(つ)",OnPrincipalReadingRomaji:"shichi",KunPrincipalReadingRomaji:"nana(tsu)",JLPTLevel:"N5",Meaning:"sept",SecondaryMeaning:null},{id:8,Kanji:"八",OnReading:["ハチ"],KunReading:["や","や(つ)","よう"],OnPrincipalReading:"ハチ",KunPrincipalReading:"や(つ)",OnPrincipalReadingRomaji:"hachi",KunPrincipalReadingRomaji:"ya(tsu)",JLPTLevel:"N5",Meaning:"huit",SecondaryMeaning:null},{id:9,Kanji:"九",OnReading:["キュウ","ク"],KunReading:["ここの","ここの(つ)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"ここの(つ)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kokono(tsu)",JLPTLevel:"N5",Meaning:"neuf",SecondaryMeaning:null},{id:10,Kanji:"十",OnReading:["ジッ"],KunReading:["とお","と"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"とお",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"too",JLPTLevel:"N5",Meaning:"dix",SecondaryMeaning:null},{id:11,Kanji:"人",OnReading:["ジン","ニン"],KunReading:["ひと"],OnPrincipalReading:"ジン",KunPrincipalReading:"ひと",OnPrincipalReadingRomaji:"jin",KunPrincipalReadingRomaji:"hito",JLPTLevel:"N5",Meaning:"personne",SecondaryMeaning:"humain"},{id:12,Kanji:"今",OnReading:["コン","キン"],KunReading:["いま"],OnPrincipalReading:"コン",KunPrincipalReading:"いま",OnPrincipalReadingRomaji:"kon",KunPrincipalReadingRomaji:"ima",JLPTLevel:"N5",Meaning:"maintenant",SecondaryMeaning:null},{id:13,Kanji:"日",OnReading:["ニチ","ジツ"],KunReading:["ひ","か"],OnPrincipalReading:"ニチ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"nichi",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"jour",SecondaryMeaning:"soleil"},{id:14,Kanji:"週",OnReading:["シュウ"],KunReading:["-"],OnPrincipalReading:"シュウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:null,JLPTLevel:"N5",Meaning:"semaine",SecondaryMeaning:null},{id:15,Kanji:"月",OnReading:["ゲツ","ガツ"],KunReading:["つき"],OnPrincipalReading:"ゲツ",KunPrincipalReading:"つき",OnPrincipalReadingRomaji:"getsu",KunPrincipalReadingRomaji:"tsuki",JLPTLevel:"N5",Meaning:"mois",SecondaryMeaning:"lune"},{id:16,Kanji:"年",OnReading:["ネン"],KunReading:["とし"],OnPrincipalReading:"ネン",KunPrincipalReading:"とし",OnPrincipalReadingRomaji:"nen",KunPrincipalReadingRomaji:"toshi",JLPTLevel:"N5",Meaning:"année",SecondaryMeaning:null},{id:17,Kanji:"中",OnReading:["チュウ","ジュウ"],KunReading:["なか"],OnPrincipalReading:"チュウ",KunPrincipalReading:"なか",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"naka",JLPTLevel:"N5",Meaning:"milieu",SecondaryMeaning:"dedans"},{id:18,Kanji:"山",OnReading:["サン"],KunReading:["やま"],OnPrincipalReading:"サン",KunPrincipalReading:"やま",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"yama",JLPTLevel:"N5",Meaning:"montagne",SecondaryMeaning:null},{id:19,Kanji:"川",OnReading:["セン"],KunReading:["かわ"],OnPrincipalReading:"セン",KunPrincipalReading:"かわ",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"kawa",JLPTLevel:"N5",Meaning:"rivière",SecondaryMeaning:"fleuve"},{id:20,Kanji:"左",OnReading:["サ"],KunReading:["ひだり"],OnPrincipalReading:"サ",KunPrincipalReading:"ひだり",OnPrincipalReadingRomaji:"sa",KunPrincipalReadingRomaji:"hidari",JLPTLevel:"N5",Meaning:"gauche",SecondaryMeaning:null},{id:21,Kanji:"右",OnReading:["ウ","ユウ"],KunReading:["みぎ"],OnPrincipalReading:"ウ",KunPrincipalReading:"みぎ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"migi",JLPTLevel:"N5",Meaning:"droite",SecondaryMeaning:null},{id:22,Kanji:"大",OnReading:["ダイ","タイ"],KunReading:["おお","おお(きい)"],OnPrincipalReading:"ダイ",KunPrincipalReading:"おお(きい)",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"oo(kii)",JLPTLevel:"N5",Meaning:"grand",SecondaryMeaning:null},{id:23,Kanji:"木",OnReading:["モク","ボク"],KunReading:["き","こ"],OnPrincipalReading:"モク",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"arbre",SecondaryMeaning:"bois"},{id:24,Kanji:"本",OnReading:["ホン"],KunReading:["もと"],OnPrincipalReading:"ホン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"hon",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N5",Meaning:"livre",SecondaryMeaning:"origine"},{id:25,Kanji:"水",OnReading:["スイ"],KunReading:["みず"],OnPrincipalReading:"スイ",KunPrincipalReading:"みず",OnPrincipalReadingRomaji:"sui",KunPrincipalReadingRomaji:"mizu",JLPTLevel:"N5",Meaning:"eau",SecondaryMeaning:null},{id:26,Kanji:"火",OnReading:["カ"],KunReading:["ひ"],OnPrincipalReading:"カ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"feu",SecondaryMeaning:null},{id:27,Kanji:"父",OnReading:["フ"],KunReading:["ちち"],OnPrincipalReading:"フ",KunPrincipalReading:"ちち",OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:"chichi",JLPTLevel:"N5",Meaning:"père",SecondaryMeaning:null},{id:28,Kanji:"母",OnReading:["ボ"],KunReading:["はは"],OnPrincipalReading:"ボ",KunPrincipalReading:"はは",OnPrincipalReadingRomaji:"bo",KunPrincipalReadingRomaji:"haha",JLPTLevel:"N5",Meaning:"mère",SecondaryMeaning:null},{id:29,Kanji:"耳",OnReading:["ジ"],KunReading:["みみ"],OnPrincipalReading:"ジ",KunPrincipalReading:"みみ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mimi",JLPTLevel:"N5",Meaning:"oreille",SecondaryMeaning:null},{id:30,Kanji:"口",OnReading:["コウ","ク"],KunReading:["くち"],OnPrincipalReading:"コウ",KunPrincipalReading:"くち",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kuchi",JLPTLevel:"N5",Meaning:"bouche",SecondaryMeaning:"entrée"},{id:31,Kanji:"休",OnReading:["キュウ"],KunReading:["やす(む)","やす(める)","やす(まる)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"やす(む)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"yasu(mu)",JLPTLevel:"N5",Meaning:"se reposer",SecondaryMeaning:"pause"},{id:32,Kanji:"何",OnReading:["カ"],KunReading:["なに","なん"],OnPrincipalReading:"カ",KunPrincipalReading:"なに",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"nani",JLPTLevel:"N5",Meaning:"quoi",SecondaryMeaning:"que"},{id:33,Kanji:"入",OnReading:["ニュウ"],KunReading:["い(る)","い(れる)","はい(る)"],OnPrincipalReading:"ニュウ",KunPrincipalReading:"はい(る)",OnPrincipalReadingRomaji:"nyuu",KunPrincipalReadingRomaji:"hai(ru)",JLPTLevel:"N5",Meaning:"entrer",SecondaryMeaning:"insérer"},{id:34,Kanji:"上",OnReading:["ジョウ","ショウ"],KunReading:["うえ","あ(げる)","あ(がる)","のぼ(る)"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"うえ",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ue",JLPTLevel:"N5",Meaning:"au-dessus",SecondaryMeaning:"haut"},{id:35,Kanji:"前",OnReading:["ゼン"],KunReading:["まえ"],OnPrincipalReading:"ゼン",KunPrincipalReading:"まえ",OnPrincipalReadingRomaji:"zen",KunPrincipalReadingRomaji:"mae",JLPTLevel:"N5",Meaning:"devant",SecondaryMeaning:"avant"},{id:36,Kanji:"下",OnReading:["カ","ゲ"],KunReading:["した","さ(げる)","さ(がる)","くだ(る)","お(ろす)","お(りる)"],OnPrincipalReading:"カ",KunPrincipalReading:"した",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"shita",JLPTLevel:"N5",Meaning:"en-dessous",SecondaryMeaning:"bas"},{id:37,Kanji:"千",OnReading:["セン"],KunReading:["ち"],OnPrincipalReading:"セン",KunPrincipalReading:"ち",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"chi",JLPTLevel:"N5",Meaning:"mille",SecondaryMeaning:null},{id:38,Kanji:"午",OnReading:["ゴ"],KunReading:["うま"],OnPrincipalReading:"ゴ",KunPrincipalReading:"うま",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"uma",JLPTLevel:"N5",Meaning:"midi",SecondaryMeaning:null},{id:39,Kanji:"友",OnReading:["ユウ"],KunReading:["とも"],OnPrincipalReading:"ユウ",KunPrincipalReading:"とも",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"tomo",JLPTLevel:"N5",Meaning:"ami",SecondaryMeaning:null},{id:40,Kanji:"古",OnReading:["コ"],KunReading:["ふる(い)"],OnPrincipalReading:"コ",KunPrincipalReading:"ふる(い)",OnPrincipalReadingRomaji:"ko",KunPrincipalReadingRomaji:"furui",JLPTLevel:"N5",Meaning:"ancien",SecondaryMeaning:"vieux"},{id:41,Kanji:"名",OnReading:["メイ","ミョウ"],KunReading:["な"],OnPrincipalReading:"メイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"na",JLPTLevel:"N5",Meaning:"nom",SecondaryMeaning:"prénom"},{id:42,Kanji:"国",OnReading:["コク"],KunReading:["くに"],OnPrincipalReading:"コク",KunPrincipalReading:"くに",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuni",JLPTLevel:"N5",Meaning:"pays",SecondaryMeaning:"nation"},{id:43,Kanji:"外",OnReading:["ガイ","ゲ"],KunReading:["そと","ほか"],OnPrincipalReading:"ガイ",KunPrincipalReading:"そと",OnPrincipalReadingRomaji:"gai",KunPrincipalReadingRomaji:"soto",JLPTLevel:"N5",Meaning:"extérieur",SecondaryMeaning:"autre"},{id:44,Kanji:"女",OnReading:["ジョ","ニョ","ニョウ"],KunReading:["おんな","め"],OnPrincipalReading:"ジョ",KunPrincipalReading:"おんな",OnPrincipalReadingRomaji:"jo",KunPrincipalReadingRomaji:"onna",JLPTLevel:"N5",Meaning:"femme",SecondaryMeaning:"féminin"},{id:45,Kanji:"男",OnReading:["ダン","ナン"],KunReading:["おとこ"],OnPrincipalReading:"ダン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"dan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N5",Meaning:"homme",SecondaryMeaning:"masculin"},{id:46,Kanji:"子",OnReading:["シ","ス","ツ"],KunReading:["こ","お"],OnPrincipalReading:"シ",KunPrincipalReading:"こ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ko",JLPTLevel:"N5",Meaning:"enfant",SecondaryMeaning:"fils"},{id:47,Kanji:"学",OnReading:["ガク"],KunReading:["まな(ぶ)"],OnPrincipalReading:"ガク",KunPrincipalReading:"まな(ぶ)",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"manabu",JLPTLevel:"N5",Meaning:"étudier",SecondaryMeaning:"apprentissage"},{id:48,Kanji:"生",OnReading:["セイ","ショウ"],KunReading:["い(きる)","う(まれる)","お(う)","なま"],OnPrincipalReading:"セイ",KunPrincipalReading:"い(きる)",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"iki(ru)",JLPTLevel:"N5",Meaning:"vie",SecondaryMeaning:"naissance"},{id:49,Kanji:"小",OnReading:["ショウ"],KunReading:["ちい(さい)","こ"],OnPrincipalReading:"ショウ",KunPrincipalReading:"ちい(さい)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"chi(i)",JLPTLevel:"N5",Meaning:"petit",SecondaryMeaning:"minuscule"},{id:50,Kanji:"書",OnReading:["ショ"],KunReading:["か(く)"],OnPrincipalReading:"ショ",KunPrincipalReading:"か(く)",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"kaku",JLPTLevel:"N5",Meaning:"écrire",SecondaryMeaning:"livre"},{id:51,Kanji:"毎",OnReading:["マイ"],KunReading:["ごと"],OnPrincipalReading:"マイ",KunPrincipalReading:"ごと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"goto",JLPTLevel:"N5",Meaning:"chaque",SecondaryMeaning:"tous"},{id:52,Kanji:"先",OnReading:["セン"],KunReading:["さき","ま(ず)"],OnPrincipalReading:"セン",KunPrincipalReading:"さき",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"saki",JLPTLevel:"N5",Meaning:"avant",SecondaryMeaning:"précédent"},{id:53,Kanji:"会",OnReading:["カイ","エ"],KunReading:["あ(う)"],OnPrincipalReading:"カイ",KunPrincipalReading:"あ(う)",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"au",JLPTLevel:"N5",Meaning:"rencontre",SecondaryMeaning:"association"},{id:54,Kanji:"万",OnReading:["マン","バン"],KunReading:["よろず"],OnPrincipalReading:"マン",KunPrincipalReading:"よろず",OnPrincipalReadingRomaji:"man",KunPrincipalReadingRomaji:"yorozu",JLPTLevel:"N5",Meaning:"dix mille",SecondaryMeaning:"innombrable"},{id:55,Kanji:"円",OnReading:["エン"],KunReading:["まる"],OnPrincipalReading:"エン",KunPrincipalReading:"まる",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"maru",JLPTLevel:"N5",Meaning:"yen",SecondaryMeaning:"rond"},{id:56,Kanji:"出",OnReading:["シュツ","スイ"],KunReading:["で(る)","だ(す)"],OnPrincipalReading:"シュツ",KunPrincipalReading:"で(る)",OnPrincipalReadingRomaji:"shutsu",KunPrincipalReadingRomaji:"de(ru)",JLPTLevel:"N5",Meaning:"sortir",SecondaryMeaning:"émettre"},{id:57,Kanji:"分",OnReading:["ブン","フン","ブ"],KunReading:["わ(ける)","わ(かる)","ぶん"],OnPrincipalReading:"ブン",KunPrincipalReading:"わ(ける)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"wake(ru)",JLPTLevel:"N5",Meaning:"minute",SecondaryMeaning:"partie"},{id:58,Kanji:"北",OnReading:["ホク"],KunReading:["きた"],OnPrincipalReading:"ホク",KunPrincipalReading:"きた",OnPrincipalReadingRomaji:"hoku",KunPrincipalReadingRomaji:"kita",JLPTLevel:"N5",Meaning:"nord",SecondaryMeaning:null},{id:59,Kanji:"半",OnReading:["ハン"],KunReading:["なか(ば)"],OnPrincipalReading:"ハン",KunPrincipalReading:"なか(ば)",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"naka(ba)",JLPTLevel:"N5",Meaning:"moitié",SecondaryMeaning:null},{id:60,Kanji:"南",OnReading:["ナン","なん"],KunReading:["みなみ"],OnPrincipalReading:"ナン",KunPrincipalReading:"みなみ",OnPrincipalReadingRomaji:"nan",KunPrincipalReadingRomaji:"minami",JLPTLevel:"N5",Meaning:"sud",SecondaryMeaning:null},{id:61,Kanji:"土",OnReading:["ド","ト"],KunReading:["つち"],OnPrincipalReading:"ド",KunPrincipalReading:"つち",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tsuchi",JLPTLevel:"N5",Meaning:"terre",SecondaryMeaning:"sol"},{id:62,Kanji:"多",OnReading:["タ"],KunReading:["おお(い)"],OnPrincipalReading:"タ",KunPrincipalReading:"おお(い)",OnPrincipalReadingRomaji:"ta",KunPrincipalReadingRomaji:"oo(i)",JLPTLevel:"N5",Meaning:"beaucoup",SecondaryMeaning:"plus"},{id:63,Kanji:"天",OnReading:["テン"],KunReading:["あま","あめ"],OnPrincipalReading:"テン",KunPrincipalReading:"あま",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"ama",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"paradis"},{id:64,Kanji:"安",OnReading:["アン"],KunReading:["やす(い)"],OnPrincipalReading:"アン",KunPrincipalReading:"やす(い)",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"yasu(i)",JLPTLevel:"N5",Meaning:"bon marché",SecondaryMeaning:"sécurisé"},{id:65,Kanji:"少",OnReading:["ショウ"],KunReading:["すく(ない)","すこ(し)"],OnPrincipalReading:"ショウ",KunPrincipalReading:"すく(ない)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"suku(nai)",JLPTLevel:"N5",Meaning:"peu",SecondaryMeaning:"moins"},{id:66,Kanji:"店",OnReading:["テン"],KunReading:["みせ","たな"],OnPrincipalReading:"テン",KunPrincipalReading:"みせ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"mise",JLPTLevel:"N5",Meaning:"magasin",SecondaryMeaning:"boutique"},{id:67,Kanji:"後",OnReading:["ゴ","コウ"],KunReading:["あと","うし(ろ)","のち"],OnPrincipalReading:"ゴ",KunPrincipalReading:"あと",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"ato",JLPTLevel:"N5",Meaning:"après",SecondaryMeaning:"derrière"},{id:68,Kanji:"手",OnReading:["シュ"],KunReading:["て","た"],OnPrincipalReading:"シュ",KunPrincipalReading:"て",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"te",JLPTLevel:"N5",Meaning:"main",SecondaryMeaning:"métier"},{id:69,Kanji:"新",OnReading:["シン"],KunReading:["あたら(しい)","あら(た)"],OnPrincipalReading:"シン",KunPrincipalReading:"あたら(しい)",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"atarashii",JLPTLevel:"N5",Meaning:"nouveau",SecondaryMeaning:"récent"},{id:70,Kanji:"時",OnReading:["ジ"],KunReading:["とき","と"],OnPrincipalReading:"ジ",KunPrincipalReading:"とき",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"toki",JLPTLevel:"N5",Meaning:"temps",SecondaryMeaning:"heure"},{id:71,Kanji:"来",OnReading:["ライ","くる"],KunReading:["くる","きたる"],OnPrincipalReading:"ライ",KunPrincipalReading:"くる",OnPrincipalReadingRomaji:"rai",KunPrincipalReadingRomaji:"kuru",JLPTLevel:"N5",Meaning:"venir",SecondaryMeaning:"arriver"},{id:72,Kanji:"東",OnReading:["トウ"],KunReading:["ひがし"],OnPrincipalReading:"トウ",KunPrincipalReading:"ひがし",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"higashi",JLPTLevel:"N5",Meaning:"est",SecondaryMeaning:"orient"},{id:73,Kanji:"校",OnReading:["コウ"],KunReading:["こう"],OnPrincipalReading:"コウ",KunPrincipalReading:"こう",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kou",JLPTLevel:"N5",Meaning:"école",SecondaryMeaning:"institution"},{id:74,Kanji:"気",OnReading:["キ"],KunReading:["き"],OnPrincipalReading:"キ",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"esprit",SecondaryMeaning:"atmosphère"},{id:75,Kanji:"白",OnReading:["ハク","ビャク"],KunReading:["しろ","しろ(い)"],OnPrincipalReading:"ハク",KunPrincipalReading:"しろ",OnPrincipalReadingRomaji:"haku",KunPrincipalReadingRomaji:"shiro",JLPTLevel:"N5",Meaning:"blanc",SecondaryMeaning:null},{id:76,Kanji:"百",OnReading:["ヒャク","ビャク"],KunReading:["もも"],OnPrincipalReading:"ヒャク",KunPrincipalReading:"もも",OnPrincipalReadingRomaji:"hyaku",KunPrincipalReadingRomaji:"momo",JLPTLevel:"N5",Meaning:"cent",SecondaryMeaning:"nombre"},{id:77,Kanji:"目",OnReading:["モク","ボク"],KunReading:["め","ま"],OnPrincipalReading:"モク",KunPrincipalReading:"め",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"me",JLPTLevel:"N5",Meaning:"œil",SecondaryMeaning:"but"},{id:78,Kanji:"社",OnReading:["シャ"],KunReading:["やしろ"],OnPrincipalReading:"シャ",KunPrincipalReading:"やしろ",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"yashiro",JLPTLevel:"N5",Meaning:"société",SecondaryMeaning:"temple"},{id:79,Kanji:"空",OnReading:["クウ"],KunReading:["そら","あ(ける)","あ(く)"],OnPrincipalReading:"クウ",KunPrincipalReading:"そら",OnPrincipalReadingRomaji:"kuu",KunPrincipalReadingRomaji:"sora",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"vide"},{id:80,Kanji:"立",OnReading:["リツ","リュウ"],KunReading:["た(つ)","たて(る)"],OnPrincipalReading:"リツ",KunPrincipalReading:"た(つ)",OnPrincipalReadingRomaji:"ritsu",KunPrincipalReadingRomaji:"ta(tsu)",JLPTLevel:"N5",Meaning:"se lever",SecondaryMeaning:"établir"},{id:81,Kanji:"聞",OnReading:["ブン","モン"],KunReading:["き(く)","きこ(える)"],OnPrincipalReading:"ブン",KunPrincipalReading:"き(く)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"kiku",JLPTLevel:"N5",Meaning:"écouter",SecondaryMeaning:"entendre"},{id:82,Kanji:"花",OnReading:["カ"],KunReading:["はな"],OnPrincipalReading:"カ",KunPrincipalReading:"はな",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hana",JLPTLevel:"N5",Meaning:"fleur",SecondaryMeaning:null},{id:83,Kanji:"行",OnReading:["コウ","ギョウ"],KunReading:["い(く)","ゆ(く)","おこな(う)"],OnPrincipalReading:"コウ",KunPrincipalReading:"い(く)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"iku",JLPTLevel:"N5",Meaning:"aller",SecondaryMeaning:"ligne"},{id:84,Kanji:"西",OnReading:["セイ","サイ"],KunReading:["にし"],OnPrincipalReading:"セイ",KunPrincipalReading:"にし",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"nishi",JLPTLevel:"N5",Meaning:"ouest",SecondaryMeaning:null},{id:85,Kanji:"見",OnReading:["ケン"],KunReading:["み(る)","み(える)","み(せる)"],OnPrincipalReading:"ケン",KunPrincipalReading:"み(る)",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"miru",JLPTLevel:"N5",Meaning:"voir",SecondaryMeaning:"regarder"},{id:86,Kanji:"言",OnReading:["ゲン","ゴン"],KunReading:["い(う)","こと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"い(う)",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"iu",JLPTLevel:"N5",Meaning:"dire",SecondaryMeaning:"mot"},{id:87,Kanji:"話",OnReading:["ワ"],KunReading:["はな(す)","はなし"],OnPrincipalReading:"ワ",KunPrincipalReading:"はな(す)",OnPrincipalReadingRomaji:"wa",KunPrincipalReadingRomaji:"hanasu",JLPTLevel:"N5",Meaning:"parler",SecondaryMeaning:"conversation"},{id:88,Kanji:"語",OnReading:["ゴ"],KunReading:["かた(る)","かた(らう)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"かた(る)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"kataru",JLPTLevel:"N5",Meaning:"langue",SecondaryMeaning:"parler"},{id:89,Kanji:"読",OnReading:["ドク","トク","トウ"],KunReading:["よ(む)"],OnPrincipalReading:"ドク",KunPrincipalReading:"よ(む)",OnPrincipalReadingRomaji:"doku",KunPrincipalReadingRomaji:"yomu",JLPTLevel:"N5",Meaning:"lire",SecondaryMeaning:"lecture"},{id:90,Kanji:"買",OnReading:["バイ"],KunReading:["か(う)"],OnPrincipalReading:"バイ",KunPrincipalReading:"か(う)",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"kau",JLPTLevel:"N5",Meaning:"acheter",SecondaryMeaning:null},{id:91,Kanji:"足",OnReading:["ソク"],KunReading:["あし","た(りる)","た(す)"],OnPrincipalReading:"ソク",KunPrincipalReading:"あし",OnPrincipalReadingRomaji:"soku",KunPrincipalReadingRomaji:"ashi",JLPTLevel:"N5",Meaning:"pied",SecondaryMeaning:"suffisance"},{id:92,Kanji:"車",OnReading:["シャ"],KunReading:["くるま"],OnPrincipalReading:"シャ",KunPrincipalReading:"くるま",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"kuruma",JLPTLevel:"N5",Meaning:"voiture",SecondaryMeaning:"véhicule"},{id:93,Kanji:"道",OnReading:["ドウ"],KunReading:["みち"],OnPrincipalReading:"ドウ",KunPrincipalReading:"みち",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"michi",JLPTLevel:"N5",Meaning:"route",SecondaryMeaning:"voie"},{id:94,Kanji:"金",OnReading:["キン","コン"],KunReading:["かね","かな"],OnPrincipalReading:"キン",KunPrincipalReading:"かね",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"kane",JLPTLevel:"N5",Meaning:"argent",SecondaryMeaning:"métal"},{id:95,Kanji:"長",OnReading:["チョウ"],KunReading:["なが(い)"],OnPrincipalReading:"チョウ",KunPrincipalReading:"なが(い)",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"nagai",JLPTLevel:"N5",Meaning:"long",SecondaryMeaning:"chef"},{id:96,Kanji:"間",OnReading:["カン","ケン"],KunReading:["あいだ","ま"],OnPrincipalReading:"カン",KunPrincipalReading:"あいだ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"aida",JLPTLevel:"N5",Meaning:"intervalle",SecondaryMeaning:"espace"},{id:97,Kanji:"雨",OnReading:["ウ"],KunReading:["あめ","あま"],OnPrincipalReading:"ウ",KunPrincipalReading:"あめ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"ame",JLPTLevel:"N5",Meaning:"pluie",SecondaryMeaning:null},{id:98,Kanji:"電",OnReading:["デン"],KunReading:["いなづま"],OnPrincipalReading:"デン",KunPrincipalReading:"いなづま",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"inazuma",JLPTLevel:"N5",Meaning:"électricité",SecondaryMeaning:"éclair"},{id:99,Kanji:"食",OnReading:["ショク","ジキ"],KunReading:["た(べる)","く(う)"],OnPrincipalReading:"ショク",KunPrincipalReading:"た(べる)",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"taberu",JLPTLevel:"N5",Meaning:"manger",SecondaryMeaning:"nourriture"},{id:100,Kanji:"飲",OnReading:["イン"],KunReading:["の(む)","の(みもの)"],OnPrincipalReading:"イン",KunPrincipalReading:"の(む)",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"nomu",JLPTLevel:"N5",Meaning:"boire",SecondaryMeaning:"boisson"},{id:101,Kanji:"駅",OnReading:["エキ"],KunReading:["いき"],OnPrincipalReading:"エキ",KunPrincipalReading:"いき",OnPrincipalReadingRomaji:"eki",KunPrincipalReadingRomaji:"iki",JLPTLevel:"N5",Meaning:"gare",SecondaryMeaning:"station"},{id:102,Kanji:"高",OnReading:["コウ"],KunReading:["たか(い)","たか"],OnPrincipalReading:"コウ",KunPrincipalReading:"たか(い)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"takai",JLPTLevel:"N5",Meaning:"haut",SecondaryMeaning:"cher"},{id:103,Kanji:"魚",OnReading:["ギョ"],KunReading:["さかな","うお"],OnPrincipalReading:"ギョ",KunPrincipalReading:"さかな",OnPrincipalReadingRomaji:"gyo",KunPrincipalReadingRomaji:"sakana",JLPTLevel:"N5",Meaning:"poisson",SecondaryMeaning:null},{id:104,Kanji:"力",OnReading:["リョク","リキ"],KunReading:["ちから"],OnPrincipalReading:"リョク",KunPrincipalReading:"ちから",OnPrincipalReadingRomaji:"ryoku",KunPrincipalReadingRomaji:"chikara",JLPTLevel:"N4",Meaning:"force",SecondaryMeaning:null},{id:105,Kanji:"夕",OnReading:["セキ"],KunReading:["ゆう"],OnPrincipalReading:"セキ",KunPrincipalReading:"ゆう",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"yuu",JLPTLevel:"N4",Meaning:"soir",SecondaryMeaning:null},{id:106,Kanji:"工",OnReading:["コウ","ク"],KunReading:[],OnPrincipalReading:"コウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:107,Kanji:"元",OnReading:["ゲン","ガン"],KunReading:["もと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N4",Meaning:"origine",SecondaryMeaning:"base"},{id:108,Kanji:"止",OnReading:["シ"],KunReading:["とまる","とめる"],OnPrincipalReading:"シ",KunPrincipalReading:"とまる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tomaru",JLPTLevel:"N4",Meaning:"arrêter",SecondaryMeaning:"cesser"},{id:109,Kanji:"引",OnReading:["イン"],KunReading:["ひく","ひける"],OnPrincipalReading:"イン",KunPrincipalReading:"ひく",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"hiku",JLPTLevel:"N4",Meaning:"tirer",SecondaryMeaning:null},{id:110,Kanji:"牛",OnReading:["ギュウ"],KunReading:["うし"],OnPrincipalReading:"ギュウ",KunPrincipalReading:"うし",OnPrincipalReadingRomaji:"gyuu",KunPrincipalReadingRomaji:"ushi",JLPTLevel:"N4",Meaning:"vache",SecondaryMeaning:"bétail"},{id:111,Kanji:"区",OnReading:["ク"],KunReading:[],OnPrincipalReading:"ク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"quartier",SecondaryMeaning:"secteur"},{id:112,Kanji:"犬",OnReading:["ケン"],KunReading:["いぬ"],OnPrincipalReading:"ケン",KunPrincipalReading:"いぬ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"inu",JLPTLevel:"N4",Meaning:"chien",SecondaryMeaning:null},{id:113,Kanji:"不",OnReading:["フ","ブ"],KunReading:[],OnPrincipalReading:"フ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"non",SecondaryMeaning:"in-"},{id:114,Kanji:"文",OnReading:["ブン","モン"],KunReading:[],OnPrincipalReading:"ブン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"écriture",SecondaryMeaning:"texte"},{id:115,Kanji:"方",OnReading:["ホウ"],KunReading:["かた","がた"],OnPrincipalReading:"ホウ",KunPrincipalReading:"かた",OnPrincipalReadingRomaji:"hou",KunPrincipalReadingRomaji:"kata",JLPTLevel:"N4",Meaning:"direction",SecondaryMeaning:"personne"},{id:116,Kanji:"心",OnReading:["シン"],KunReading:["こころ"],OnPrincipalReading:"シン",KunPrincipalReading:"こころ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"kokoro",JLPTLevel:"N4",Meaning:"cœur",SecondaryMeaning:"esprit"},{id:117,Kanji:"切",OnReading:["セツ","サイ"],KunReading:["きる","きれる"],OnPrincipalReading:"セツ",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"couper",SecondaryMeaning:null},{id:118,Kanji:"太",OnReading:["タイ","タ"],KunReading:["ふとい","ふとる"],OnPrincipalReading:"タイ",KunPrincipalReading:"ふとい",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"futoi",JLPTLevel:"N4",Meaning:"gros",SecondaryMeaning:"épais"},{id:119,Kanji:"代",OnReading:["ダイ","タイ"],KunReading:["かわる","かわり","かえる"],OnPrincipalReading:"ダイ",KunPrincipalReading:"かわる",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"kawaru",JLPTLevel:"N4",Meaning:"remplacement",SecondaryMeaning:"génération"},{id:120,Kanji:"台",OnReading:["ダイ","タイ"],KunReading:[],OnPrincipalReading:"ダイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"socle",SecondaryMeaning:"plateforme"},{id:121,Kanji:"世",OnReading:["セ","セイ"],KunReading:["よ"],OnPrincipalReading:"セ",KunPrincipalReading:"よ",OnPrincipalReadingRomaji:"se",KunPrincipalReadingRomaji:"yo",JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"ère"},{id:122,Kanji:"正",OnReading:["セイ","ショウ"],KunReading:["ただしい","ただす","まさ"],OnPrincipalReading:"セイ",KunPrincipalReading:"ただしい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"tadashii",JLPTLevel:"N4",Meaning:"correct",SecondaryMeaning:"juste"},{id:123,Kanji:"田",OnReading:["デン"],KunReading:["た"],OnPrincipalReading:"デン",KunPrincipalReading:"た",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"ta",JLPTLevel:"N4",Meaning:"rizière",SecondaryMeaning:null},{id:124,Kanji:"冬",OnReading:["トウ"],KunReading:["ふゆ"],OnPrincipalReading:"トウ",KunPrincipalReading:"ふゆ",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"fuyu",JLPTLevel:"N4",Meaning:"hiver",SecondaryMeaning:null},{id:125,Kanji:"民",OnReading:["ミン"],KunReading:["たみ"],OnPrincipalReading:"ミン",KunPrincipalReading:"たみ",OnPrincipalReadingRomaji:"min",KunPrincipalReadingRomaji:"tami",JLPTLevel:"N4",Meaning:"peuple",SecondaryMeaning:"nation"},{id:126,Kanji:"用",OnReading:["ヨウ"],KunReading:["もちいる"],OnPrincipalReading:"ヨウ",KunPrincipalReading:"もちいる",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"mochiiru",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"usage"},{id:127,Kanji:"兄",OnReading:["ケイ","キョウ"],KunReading:["あに"],OnPrincipalReading:"ケイ",KunPrincipalReading:"あに",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"ani",JLPTLevel:"N4",Meaning:"grand frère",SecondaryMeaning:null},{id:128,Kanji:"以",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"à partir de",SecondaryMeaning:null},{id:129,Kanji:"去",OnReading:["キョ","コ"],KunReading:["さる"],OnPrincipalReading:"キョ",KunPrincipalReading:"さる",OnPrincipalReadingRomaji:"kyo",KunPrincipalReadingRomaji:"saru",JLPTLevel:"N4",Meaning:"quitter",SecondaryMeaning:"partir"},{id:130,Kanji:"仕",OnReading:["シ"],KunReading:["つかえる"],OnPrincipalReading:"シ",KunPrincipalReading:"つかえる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukaeru",JLPTLevel:"N4",Meaning:"servir",SecondaryMeaning:"faire"},{id:131,Kanji:"市",OnReading:["シ"],KunReading:["いち"],OnPrincipalReading:"シ",KunPrincipalReading:"いち",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ichi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"marché"},{id:132,Kanji:"広",OnReading:["コウ"],KunReading:["ひろい","ひろまる","ひろめる","ひろがる","ひろげる"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひろい",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hiroi",JLPTLevel:"N4",Meaning:"large",SecondaryMeaning:"étendu"},{id:133,Kanji:"主",OnReading:["シュ","ス"],KunReading:["ぬし","おも"],OnPrincipalReading:"シュ",KunPrincipalReading:"ぬし",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"nushi",JLPTLevel:"N4",Meaning:"maître",SecondaryMeaning:"principal"},{id:134,Kanji:"写",OnReading:["シャ"],KunReading:["うつす","うつる"],OnPrincipalReading:"シャ",KunPrincipalReading:"うつす",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"utsusu",JLPTLevel:"N4",Meaning:"copier",SecondaryMeaning:"projeter"},{id:135,Kanji:"字",OnReading:["ジ"],KunReading:[],OnPrincipalReading:"ジ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"caractère",SecondaryMeaning:"lettre"},{id:136,Kanji:"自",OnReading:["ジ","シ"],KunReading:["みずから"],OnPrincipalReading:"ジ",KunPrincipalReading:"みずから",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mizukara",JLPTLevel:"N4",Meaning:"soi-même",SecondaryMeaning:null},{id:137,Kanji:"考",OnReading:["コウ"],KunReading:["かんがえる"],OnPrincipalReading:"コウ",KunPrincipalReading:"かんがえる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kangaeru",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:null},{id:138,Kanji:"合",OnReading:["ゴウ","ガッ","カッ"],KunReading:["あう","あわす","あわせる"],OnPrincipalReading:"ゴウ",KunPrincipalReading:"あう",OnPrincipalReadingRomaji:"gou",KunPrincipalReadingRomaji:"au",JLPTLevel:"N4",Meaning:"assembler",SecondaryMeaning:"correspondre"},{id:139,Kanji:"光",OnReading:["コウ"],KunReading:["ひかる","ひかり"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひかる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hikaru",JLPTLevel:"N4",Meaning:"lumière",SecondaryMeaning:"briller"},{id:140,Kanji:"好",OnReading:["コウ"],KunReading:["すき","このむ"],OnPrincipalReading:"コウ",KunPrincipalReading:"すき",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"suki",JLPTLevel:"N4",Meaning:"aimer",SecondaryMeaning:"préférence"},{id:141,Kanji:"死",OnReading:["シ"],KunReading:["しぬ"],OnPrincipalReading:"シ",KunPrincipalReading:"しぬ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"shinu",JLPTLevel:"N4",Meaning:"mort",SecondaryMeaning:"mourir"},{id:142,Kanji:"回",OnReading:["カイ","エ"],KunReading:["まわる","まわす"],OnPrincipalReading:"カイ",KunPrincipalReading:"まわる",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"mawaru",JLPTLevel:"N4",Meaning:"tourner",SecondaryMeaning:"nombre de fois"},{id:143,Kanji:"有",OnReading:["ユウ","ウ"],KunReading:["ある"],OnPrincipalReading:"ユウ",KunPrincipalReading:"ある",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"aru",JLPTLevel:"N4",Meaning:"avoir",SecondaryMeaning:"exister"},{id:144,Kanji:"同",OnReading:["ドウ"],KunReading:["おなじ"],OnPrincipalReading:"ドウ",KunPrincipalReading:"おなじ",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"onaji",JLPTLevel:"N4",Meaning:"même",SecondaryMeaning:"identique"},{id:145,Kanji:"肉",OnReading:["ニク"],KunReading:[],OnPrincipalReading:"ニク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"niku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"viande",SecondaryMeaning:null},{id:146,Kanji:"色",OnReading:["ショク","シキ"],KunReading:["いろ"],OnPrincipalReading:"ショク",KunPrincipalReading:"いろ",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"iro",JLPTLevel:"N4",Meaning:"couleur",SecondaryMeaning:"apparence"},{id:147,Kanji:"早",OnReading:["ソウ","サッ"],KunReading:["はやい","はやまる","はやめる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はやい",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hayai",JLPTLevel:"N4",Meaning:"tôt",SecondaryMeaning:"rapide"},{id:148,Kanji:"地",OnReading:["チ","ジ"],KunReading:[],OnPrincipalReading:"チ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"terre",SecondaryMeaning:"sol"},{id:149,Kanji:"池",OnReading:["チ"],KunReading:["いけ"],OnPrincipalReading:"チ",KunPrincipalReading:"いけ",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"ike",JLPTLevel:"N4",Meaning:"étang",SecondaryMeaning:null},{id:150,Kanji:"村",OnReading:["ソン"],KunReading:["むら"],OnPrincipalReading:"ソン",KunPrincipalReading:"むら",OnPrincipalReadingRomaji:"son",KunPrincipalReadingRomaji:"mura",JLPTLevel:"N4",Meaning:"village",SecondaryMeaning:null},{id:151,Kanji:"体",OnReading:["タイ","テイ"],KunReading:["からだ"],OnPrincipalReading:"タイ",KunPrincipalReading:"からだ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"karada",JLPTLevel:"N4",Meaning:"corps",SecondaryMeaning:"structure"},{id:152,Kanji:"町",OnReading:["チョウ"],KunReading:["まち"],OnPrincipalReading:"チョウ",KunPrincipalReading:"まち",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"machi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"quartier"},{id:153,Kanji:"低",OnReading:["テイ"],KunReading:["ひくい","ひくめる","ひくまる"],OnPrincipalReading:"テイ",KunPrincipalReading:"ひくい",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"hikui",JLPTLevel:"N4",Meaning:"bas",SecondaryMeaning:"faible"},{id:154,Kanji:"弟",OnReading:["テイ","ダイ","デ"],KunReading:["おとうと"],OnPrincipalReading:"テイ",KunPrincipalReading:"おとうと",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"otouto",JLPTLevel:"N4",Meaning:"petit frère",SecondaryMeaning:null},{id:155,Kanji:"走",OnReading:["ソウ"],KunReading:["はしる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はしる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hashiru",JLPTLevel:"N4",Meaning:"courir",SecondaryMeaning:null},{id:156,Kanji:"赤",OnReading:["セキ","シャク"],KunReading:["あか","あかい","あからむ","あからめる"],OnPrincipalReading:"セキ",KunPrincipalReading:"あか",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"aka",JLPTLevel:"N4",Meaning:"rouge",SecondaryMeaning:"cramoisi"},{id:157,Kanji:"図",OnReading:["ズ","ト"],KunReading:["はかる"],OnPrincipalReading:"ズ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"zu",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"plan",SecondaryMeaning:"carte"},{id:158,Kanji:"究",OnReading:["キュウ"],KunReading:["きわめる"],OnPrincipalReading:"キュウ",KunPrincipalReading:"きわめる",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kiwameru",JLPTLevel:"N4",Meaning:"rechercher",SecondaryMeaning:"examiner"},{id:159,Kanji:"声",OnReading:["セイ","ショウ"],KunReading:["こえ","こわ"],OnPrincipalReading:"セイ",KunPrincipalReading:"こえ",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"koe",JLPTLevel:"N4",Meaning:"voix",SecondaryMeaning:"son"},{id:160,Kanji:"売",OnReading:["バイ"],KunReading:["うる","うれる"],OnPrincipalReading:"バイ",KunPrincipalReading:"うる",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"uru",JLPTLevel:"N4",Meaning:"vendre",SecondaryMeaning:"marcher (commerce)"},{id:161,Kanji:"別",OnReading:["ベツ"],KunReading:["わかれる","わける"],OnPrincipalReading:"ベツ",KunPrincipalReading:"わかれる",OnPrincipalReadingRomaji:"betsu",KunPrincipalReadingRomaji:"wakareru",JLPTLevel:"N4",Meaning:"séparer",SecondaryMeaning:"distinct"},{id:162,Kanji:"医",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"médecine",SecondaryMeaning:"soigner"},{id:163,Kanji:"近",OnReading:["キン"],KunReading:["ちかい"],OnPrincipalReading:"キン",KunPrincipalReading:"ちかい",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"chikai",JLPTLevel:"N4",Meaning:"proche",SecondaryMeaning:"près"},{id:164,Kanji:"私",OnReading:["シ"],KunReading:["わたし","わたくし"],OnPrincipalReading:"シ",KunPrincipalReading:"わたし",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"watashi",JLPTLevel:"N4",Meaning:"je",SecondaryMeaning:"moi"},{id:165,Kanji:"作",OnReading:["サク","サ"],KunReading:["つくる"],OnPrincipalReading:"サク",KunPrincipalReading:"つくる",OnPrincipalReadingRomaji:"saku",KunPrincipalReadingRomaji:"tsukuru",JLPTLevel:"N4",Meaning:"faire",SecondaryMeaning:"créer"},{id:166,Kanji:"住",OnReading:["ジュウ"],KunReading:["すむ","すまう"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"すむ",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"sumu",JLPTLevel:"N4",Meaning:"habiter",SecondaryMeaning:"vivre"},{id:167,Kanji:"者",OnReading:["シャ"],KunReading:["もの"],OnPrincipalReading:"シャ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"personne",SecondaryMeaning:"individu"},{id:168,Kanji:"事",OnReading:["ジ"],KunReading:["こと"],OnPrincipalReading:"ジ",KunPrincipalReading:"こと",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"koto",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"affaire"},{id:169,Kanji:"使",OnReading:["シ"],KunReading:["つかう"],OnPrincipalReading:"シ",KunPrincipalReading:"つかう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukau",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"employer"},{id:170,Kanji:"始",OnReading:["シ"],KunReading:["はじめる","はじまる"],OnPrincipalReading:"シ",KunPrincipalReading:"はじめる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"hajimeru",JLPTLevel:"N4",Meaning:"commencer",SecondaryMeaning:"débuter"},{id:171,Kanji:"姉",OnReading:["シ"],KunReading:["あね"],OnPrincipalReading:"シ",KunPrincipalReading:"あね",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ane",JLPTLevel:"N4",Meaning:"grande sœur",SecondaryMeaning:null},{id:172,Kanji:"英",OnReading:["エイ"],KunReading:[],OnPrincipalReading:"エイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"Angleterre",SecondaryMeaning:"héroïque"},{id:173,Kanji:"京",OnReading:["キョウ","ケイ"],KunReading:[],OnPrincipalReading:"キョウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"Kyoto"},{id:174,Kanji:"画",OnReading:["ガ","カク"],KunReading:[],OnPrincipalReading:"ガ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ga",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"dessin",SecondaryMeaning:"trait"},{id:175,Kanji:"妹",OnReading:["マイ"],KunReading:["いもうと"],OnPrincipalReading:"マイ",KunPrincipalReading:"いもうと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"imouto",JLPTLevel:"N4",Meaning:"petite sœur",SecondaryMeaning:null},{id:176,Kanji:"味",OnReading:["ミ"],KunReading:["あじ","あじわう"],OnPrincipalReading:"ミ",KunPrincipalReading:"あじ",OnPrincipalReadingRomaji:"mi",KunPrincipalReadingRomaji:"aji",JLPTLevel:"N4",Meaning:"goût",SecondaryMeaning:"saveur"},{id:177,Kanji:"服",OnReading:["フク"],KunReading:[],OnPrincipalReading:"フク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fuku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"vêtements",SecondaryMeaning:null},{id:178,Kanji:"物",OnReading:["ブツ","モツ"],KunReading:["もの"],OnPrincipalReading:"ブツ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"butsu",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"objet"},{id:179,Kanji:"歩",OnReading:["ホ","ブ","フ"],KunReading:["あるく","あゆむ"],OnPrincipalReading:"ホ",KunPrincipalReading:"あるく",OnPrincipalReadingRomaji:"ho",KunPrincipalReadingRomaji:"aruku",JLPTLevel:"N4",Meaning:"marcher",SecondaryMeaning:"pas"},{id:180,Kanji:"門",OnReading:["モン"],KunReading:["かど"],OnPrincipalReading:"モン",KunPrincipalReading:"かど",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"kado",JLPTLevel:"N4",Meaning:"porte",SecondaryMeaning:"portail"},{id:181,Kanji:"夜",OnReading:["ヤ"],KunReading:["よ","よる"],OnPrincipalReading:"ヤ",KunPrincipalReading:"よる",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"yoru",JLPTLevel:"N4",Meaning:"nuit",SecondaryMeaning:null},{id:182,Kanji:"明",OnReading:["メイ","ミョウ"],KunReading:["あかるい","あける"],OnPrincipalReading:"メイ",KunPrincipalReading:"あかるい",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"akarui",JLPTLevel:"N4",Meaning:"clair",SecondaryMeaning:"lumineux"},{id:183,Kanji:"林",OnReading:["リン"],KunReading:["はやし"],OnPrincipalReading:"リン",KunPrincipalReading:"はやし",OnPrincipalReadingRomaji:"rin",KunPrincipalReadingRomaji:"hayashi",JLPTLevel:"N4",Meaning:"bois",SecondaryMeaning:"forêt"},{id:184,Kanji:"青",OnReading:["セイ","ショウ"],KunReading:["あお","あおい"],OnPrincipalReading:"セイ",KunPrincipalReading:"あおい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"aoi",JLPTLevel:"N4",Meaning:"bleu",SecondaryMeaning:"vert"},{id:185,Kanji:"所",OnReading:["ショ"],KunReading:["ところ"],OnPrincipalReading:"ショ",KunPrincipalReading:"ところ",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"tokoro",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"endroit"},{id:186,Kanji:"注",OnReading:["チュウ"],KunReading:["そそぐ"],OnPrincipalReading:"チュウ",KunPrincipalReading:"そそぐ",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"sosogu",JLPTLevel:"N4",Meaning:"verser",SecondaryMeaning:"concentrer"},{id:187,Kanji:"知",OnReading:["チ"],KunReading:["しる"],OnPrincipalReading:"チ",KunPrincipalReading:"しる",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"shiru",JLPTLevel:"N4",Meaning:"savoir",SecondaryMeaning:"connaître"},{id:188,Kanji:"昼",OnReading:["チュウ"],KunReading:["ひる"],OnPrincipalReading:"チュウ",KunPrincipalReading:"ひる",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"hiru",JLPTLevel:"N4",Meaning:"midi",SecondaryMeaning:"jour"},{id:189,Kanji:"茶",OnReading:["チャ","サ"],KunReading:[],OnPrincipalReading:"チャ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"cha",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"thé",SecondaryMeaning:null},{id:190,Kanji:"待",OnReading:["タイ"],KunReading:["まつ"],OnPrincipalReading:"タイ",KunPrincipalReading:"まつ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"matsu",JLPTLevel:"N4",Meaning:"attendre",SecondaryMeaning:null},{id:191,Kanji:"洗",OnReading:["セン"],KunReading:["あらう"],OnPrincipalReading:"セン",KunPrincipalReading:"あらう",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"arau",JLPTLevel:"N4",Meaning:"laver",SecondaryMeaning:null},{id:192,Kanji:"送",OnReading:["ソウ"],KunReading:["おくる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"おくる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"okuru",JLPTLevel:"N4",Meaning:"envoyer",SecondaryMeaning:null},{id:193,Kanji:"品",OnReading:["ヒン"],KunReading:["しな"],OnPrincipalReading:"ヒン",KunPrincipalReading:"しな",OnPrincipalReadingRomaji:"hin",KunPrincipalReadingRomaji:"shina",JLPTLevel:"N4",Meaning:"produit",SecondaryMeaning:"article"},{id:194,Kanji:"洋",OnReading:["ヨウ"],KunReading:[],OnPrincipalReading:"ヨウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"océan",SecondaryMeaning:"occidental"},{id:195,Kanji:"便",OnReading:["ベン","ビン"],KunReading:["たより"],OnPrincipalReading:"ベン",KunPrincipalReading:"たより",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tayori",JLPTLevel:"N4",Meaning:"commodité",SecondaryMeaning:"courrier"},{id:196,Kanji:"風",OnReading:["フウ","フ"],KunReading:["かぜ"],OnPrincipalReading:"フウ",KunPrincipalReading:"かぜ",OnPrincipalReadingRomaji:"fuu",KunPrincipalReadingRomaji:"kaze",JLPTLevel:"N4",Meaning:"vent",SecondaryMeaning:"style"},{id:197,Kanji:"発",OnReading:["ハツ","ホツ"],KunReading:[],OnPrincipalReading:"ハツ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"hatsu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"départ",SecondaryMeaning:"émission"},{id:198,Kanji:"度",OnReading:["ド","ト","タク"],KunReading:["たび"],OnPrincipalReading:"ド",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"degré",SecondaryMeaning:"fois"},{id:199,Kanji:"映",OnReading:["エイ"],KunReading:["うつる","うつす"],OnPrincipalReading:"エイ",KunPrincipalReading:"うつる",OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:"utsuru",JLPTLevel:"N4",Meaning:"projeter",SecondaryMeaning:"reflet"},{id:200,Kanji:"海",OnReading:["カイ"],KunReading:["うみ"],OnPrincipalReading:"カイ",KunPrincipalReading:"うみ",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"umi",JLPTLevel:"N4",Meaning:"mer",SecondaryMeaning:null},{id:201,Kanji:"界",OnReading:["カイ"],KunReading:[],OnPrincipalReading:"カイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"limite"},{id:202,Kanji:"屋",OnReading:["オク"],KunReading:["や"],OnPrincipalReading:"オク",KunPrincipalReading:"や",OnPrincipalReadingRomaji:"oku",KunPrincipalReadingRomaji:"ya",JLPTLevel:"N4",Meaning:"toit",SecondaryMeaning:"boutique"},{id:203,Kanji:"音",OnReading:["オン","イン"],KunReading:["おと","ね"],OnPrincipalReading:"オン",KunPrincipalReading:"おと",OnPrincipalReadingRomaji:"on",KunPrincipalReadingRomaji:"oto",JLPTLevel:"N4",Meaning:"son",SecondaryMeaning:null},{id:204,Kanji:"急",OnReading:["キュウ"],KunReading:["いそぐ"],OnPrincipalReading:"キュウ",KunPrincipalReading:"いそぐ",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"isogu",JLPTLevel:"N4",Meaning:"urgence",SecondaryMeaning:"rapide"},{id:205,Kanji:"計",OnReading:["ケイ"],KunReading:["はかる"],OnPrincipalReading:"ケイ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"compter",SecondaryMeaning:"mesurer"},{id:206,Kanji:"建",OnReading:["ケン","コン"],KunReading:["たてる","たつ"],OnPrincipalReading:"ケン",KunPrincipalReading:"たてる",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tateru",JLPTLevel:"N4",Meaning:"construire",SecondaryMeaning:null},{id:207,Kanji:"研",OnReading:["ケン"],KunReading:["とぐ"],OnPrincipalReading:"ケン",KunPrincipalReading:"とぐ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"togu",JLPTLevel:"N4",Meaning:"aiguiser",SecondaryMeaning:"étudier"},{id:208,Kanji:"県",OnReading:["ケン"],KunReading:[],OnPrincipalReading:"ケン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"préfecture",SecondaryMeaning:null},{id:209,Kanji:"思",OnReading:["シ"],KunReading:["おもう"],OnPrincipalReading:"シ",KunPrincipalReading:"おもう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"omou",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:"croire"},{id:210,Kanji:"乗",OnReading:["ジョウ"],KunReading:["のる","のせる"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"のる",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"noru",JLPTLevel:"N4",Meaning:"monter",SecondaryMeaning:"embarquer"},{id:211,Kanji:"重",OnReading:["ジュウ","チョウ"],KunReading:["おもい","かさなる","かさねる"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"おもい",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"omoi",JLPTLevel:"N4",Meaning:"lourd",SecondaryMeaning:"empiler"},{id:212,Kanji:"春",OnReading:["シュン"],KunReading:["はる"],OnPrincipalReading:"シュン",KunPrincipalReading:"はる",OnPrincipalReadingRomaji:"shun",KunPrincipalReadingRomaji:"haru",JLPTLevel:"N4",Meaning:"printemps",SecondaryMeaning:null},{id:213,Kanji:"室",OnReading:["シツ"],KunReading:["むろ"],OnPrincipalReading:"シツ",KunPrincipalReading:"むろ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"muro",JLPTLevel:"N4",Meaning:"pièce",SecondaryMeaning:"chambre"},{id:214,Kanji:"持",OnReading:["ジ"],KunReading:["もつ"],OnPrincipalReading:"ジ",KunPrincipalReading:"もつ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"motsu",JLPTLevel:"N4",Meaning:"tenir",SecondaryMeaning:"posséder"},{id:215,Kanji:"首",OnReading:["シュ"],KunReading:["くび"],OnPrincipalReading:"シュ",KunPrincipalReading:"くび",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"kubi",JLPTLevel:"N4",Meaning:"cou",SecondaryMeaning:"chef"},{id:216,Kanji:"秋",OnReading:["シュウ"],KunReading:["あき"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あき",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"aki",JLPTLevel:"N4",Meaning:"automne",SecondaryMeaning:null},{id:217,Kanji:"借",OnReading:["シャク"],KunReading:["かりる"],OnPrincipalReading:"シャク",KunPrincipalReading:"かりる",OnPrincipalReadingRomaji:"shaku",KunPrincipalReadingRomaji:"kariru",JLPTLevel:"N4",Meaning:"emprunter",SecondaryMeaning:null},{id:218,Kanji:"弱",OnReading:["ジャク"],KunReading:["よわい","よわる"],OnPrincipalReading:"ジャク",KunPrincipalReading:"よわい",OnPrincipalReadingRomaji:"jaku",KunPrincipalReadingRomaji:"yowai",JLPTLevel:"N4",Meaning:"faible",SecondaryMeaning:null},{id:219,Kanji:"紙",OnReading:["シ"],KunReading:["かみ"],OnPrincipalReading:"シ",KunPrincipalReading:"かみ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kami",JLPTLevel:"N4",Meaning:"papier",SecondaryMeaning:null},{id:220,Kanji:"帰",OnReading:["キ"],KunReading:["かえる","かえす"],OnPrincipalReading:"キ",KunPrincipalReading:"かえる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"kaeru",JLPTLevel:"N4",Meaning:"retourner",SecondaryMeaning:"rentrer"},{id:221,Kanji:"起",OnReading:["キ"],KunReading:["おきる","おこす"],OnPrincipalReading:"キ",KunPrincipalReading:"おきる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"okiru",JLPTLevel:"N4",Meaning:"se lever",SecondaryMeaning:"commencer"},{id:222,Kanji:"夏",OnReading:["カ"],KunReading:["なつ"],OnPrincipalReading:"カ",KunPrincipalReading:"なつ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"natsu",JLPTLevel:"N4",Meaning:"été",SecondaryMeaning:null},{id:223,Kanji:"家",OnReading:["カ","ケ"],KunReading:["いえ","や"],OnPrincipalReading:"カ",KunPrincipalReading:"いえ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"ie",JLPTLevel:"N4",Meaning:"maison",SecondaryMeaning:"famille"},{id:224,Kanji:"院",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"institut",SecondaryMeaning:"hôpital"},{id:225,Kanji:"員",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"membre",SecondaryMeaning:"employé"},{id:226,Kanji:"病",OnReading:["ビョウ","ヘイ"],KunReading:["やむ","いたむ"],OnPrincipalReading:"ビョウ",KunPrincipalReading:"やむ",OnPrincipalReadingRomaji:"byou",KunPrincipalReadingRomaji:"yamu",JLPTLevel:"N4",Meaning:"maladie",SecondaryMeaning:"être malade"},{id:227,Kanji:"勉",OnReading:["ベン"],KunReading:["つとめる"],OnPrincipalReading:"ベン",KunPrincipalReading:"つとめる",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tsutomeru",JLPTLevel:"N4",Meaning:"effort",SecondaryMeaning:"étudier"},{id:228,Kanji:"特",OnReading:["トク"],KunReading:[],OnPrincipalReading:"トク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"toku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"spécial",SecondaryMeaning:"particulier"},{id:229,Kanji:"旅",OnReading:["リョ"],KunReading:["たび"],OnPrincipalReading:"リョ",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"ryo",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"voyage",SecondaryMeaning:null},{id:230,Kanji:"料",OnReading:["リョウ"],KunReading:["はかる"],OnPrincipalReading:"リョウ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"ryou",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"coût",SecondaryMeaning:"ingrédient"},{id:231,Kanji:"真",OnReading:["シン"],KunReading:["ま","まこと"],OnPrincipalReading:"シン",KunPrincipalReading:"ま",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"ma",JLPTLevel:"N4",Meaning:"vrai",SecondaryMeaning:"vérité"},{id:232,Kanji:"通",OnReading:["ツウ"],KunReading:["とおる","とおす"],OnPrincipalReading:"ツウ",KunPrincipalReading:"とおる",OnPrincipalReadingRomaji:"tsuu",KunPrincipalReadingRomaji:"tooru",JLPTLevel:"N4",Meaning:"passer",SecondaryMeaning:"communication"},{id:233,Kanji:"鳥",OnReading:["チョウ"],KunReading:["とり"],OnPrincipalReading:"チョウ",KunPrincipalReading:"とり",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"tori",JLPTLevel:"N4",Meaning:"oiseau",SecondaryMeaning:null},{id:234,Kanji:"転",OnReading:["テン"],KunReading:["ころぶ","ころがる"],OnPrincipalReading:"テン",KunPrincipalReading:"ころぶ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"korobu",JLPTLevel:"N4",Meaning:"rouler",SecondaryMeaning:"changer"},{id:235,Kanji:"族",OnReading:["ゾク"],KunReading:["ぞく"],OnPrincipalReading:"ゾク",KunPrincipalReading:"ぞく",OnPrincipalReadingRomaji:"zoku",KunPrincipalReadingRomaji:"zoku",JLPTLevel:"N4",Meaning:"famille",SecondaryMeaning:"tribu"},{id:236,Kanji:"進",OnReading:["シン"],KunReading:["すすむ","すすめる"],OnPrincipalReading:"シン",KunPrincipalReading:"すすむ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"susumu",JLPTLevel:"N4",Meaning:"avancer",SecondaryMeaning:"progresser"},{id:237,Kanji:"理",OnReading:["リ"],KunReading:["ことわり"],OnPrincipalReading:"リ",KunPrincipalReading:"ことわり",OnPrincipalReadingRomaji:"ri",KunPrincipalReadingRomaji:"kotowari",JLPTLevel:"N4",Meaning:"logique",SecondaryMeaning:"raison"},{id:238,Kanji:"野",OnReading:["ヤ","ショ"],KunReading:["の"],OnPrincipalReading:"ヤ",KunPrincipalReading:"の",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"no",JLPTLevel:"N4",Meaning:"champ",SecondaryMeaning:"nature"},{id:239,Kanji:"問",OnReading:["モン"],KunReading:["とい","といあわせる"],OnPrincipalReading:"モン",KunPrincipalReading:"とい",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"toi",JLPTLevel:"N4",Meaning:"question",SecondaryMeaning:"demander"},{id:240,Kanji:"都",OnReading:["ト","ツ"],KunReading:["みやこ"],OnPrincipalReading:"ト",KunPrincipalReading:"みやこ",OnPrincipalReadingRomaji:"to",KunPrincipalReadingRomaji:"miyako",JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"métropole"},{id:241,Kanji:"堂",OnReading:["ドウ"],KunReading:["どう"],OnPrincipalReading:"ドウ",KunPrincipalReading:"どう",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"dou",JLPTLevel:"N4",Meaning:"hall",SecondaryMeaning:"temple"},{id:242,Kanji:"動",OnReading:["ドウ"],KunReading:["うごく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"うごく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"ugoku",JLPTLevel:"N4",Meaning:"mouvement",SecondaryMeaning:"agir"},{id:243,Kanji:"悪",OnReading:["アク","オ"],KunReading:["わるい"],OnPrincipalReading:"アク",KunPrincipalReading:"わるい",OnPrincipalReadingRomaji:"aku",KunPrincipalReadingRomaji:"warui",JLPTLevel:"N4",Meaning:"mauvais",SecondaryMeaning:"mal"},{id:244,Kanji:"強",OnReading:["キョウ","ゴウ"],KunReading:["つよい","しなう"],OnPrincipalReading:"キョウ",KunPrincipalReading:"つよい",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"tsuyoi",JLPTLevel:"N4",Meaning:"fort",SecondaryMeaning:"intense"},{id:245,Kanji:"教",OnReading:["キョウ","オシ"],KunReading:["おしえる","おそわる"],OnPrincipalReading:"キョウ",KunPrincipalReading:"おしえる",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"oshieru",JLPTLevel:"N4",Meaning:"enseigner",SecondaryMeaning:"religion"},{id:246,Kanji:"産",OnReading:["サン"],KunReading:["うむ","うまれる"],OnPrincipalReading:"サン",KunPrincipalReading:"うむ",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"umu",JLPTLevel:"N4",Meaning:"production",SecondaryMeaning:"naissance"},{id:247,Kanji:"黒",OnReading:["コク"],KunReading:["くろ","くろい"],OnPrincipalReading:"コク",KunPrincipalReading:"くろ",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuro",JLPTLevel:"N4",Meaning:"noir",SecondaryMeaning:null},{id:248,Kanji:"菜",OnReading:["サイ"],KunReading:["な"],OnPrincipalReading:"サイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"sai",KunPrincipalReadingRomaji:"na",JLPTLevel:"N4",Meaning:"légume",SecondaryMeaning:"verdure"},{id:249,Kanji:"終",OnReading:["シュウ"],KunReading:["おわる","おえる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"おわる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"owaru",JLPTLevel:"N4",Meaning:"fin",SecondaryMeaning:"terminer"},{id:250,Kanji:"習",OnReading:["シュウ"],KunReading:["ならう"],OnPrincipalReading:"シュウ",KunPrincipalReading:"ならう",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"narau",JLPTLevel:"N4",Meaning:"apprendre",SecondaryMeaning:"pratiquer"},{id:251,Kanji:"集",OnReading:["シュウ"],KunReading:["あつまる","あつめる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あつまる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"atsumaru",JLPTLevel:"N4",Meaning:"rassembler",SecondaryMeaning:"collection"},{id:252,Kanji:"場",OnReading:["ジョウ"],KunReading:["ば"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"ば",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ba",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"emplacement"},{id:253,Kanji:"寒",OnReading:["カン"],KunReading:["さむい"],OnPrincipalReading:"カン",KunPrincipalReading:"さむい",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"samui",JLPTLevel:"N4",Meaning:"froid",SecondaryMeaning:null},{id:254,Kanji:"軽",OnReading:["ケイ"],KunReading:["かるい","けい"],OnPrincipalReading:"ケイ",KunPrincipalReading:"かるい",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"karui",JLPTLevel:"N4",Meaning:"léger",SecondaryMeaning:"facile"},{id:255,Kanji:"運",OnReading:["ウン"],KunReading:["はこぶ"],OnPrincipalReading:"ウン",KunPrincipalReading:"はこぶ",OnPrincipalReadingRomaji:"un",KunPrincipalReadingRomaji:"hakobu",JLPTLevel:"N4",Meaning:"chance",SecondaryMeaning:"transport"},{id:256,Kanji:"開",OnReading:["カイ"],KunReading:["ひらく","あける"],OnPrincipalReading:"カイ",KunPrincipalReading:"ひらく",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"hiraku",JLPTLevel:"N4",Meaning:"ouvrir",SecondaryMeaning:"développer"},{id:257,Kanji:"飯",OnReading:["ハン"],KunReading:["めし"],OnPrincipalReading:"ハン",KunPrincipalReading:"めし",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"meshi",JLPTLevel:"N4",Meaning:"riz cuit",SecondaryMeaning:"repas"},{id:258,Kanji:"答",OnReading:["トウ"],KunReading:["こたえる","こたえ"],OnPrincipalReading:"トウ",KunPrincipalReading:"こたえる",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"kotaeru",JLPTLevel:"N4",Meaning:"réponse",SecondaryMeaning:"répondre"},{id:259,Kanji:"森",OnReading:["シン"],KunReading:["もり"],OnPrincipalReading:"シン",KunPrincipalReading:"もり",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"mori",JLPTLevel:"N4",Meaning:"forêt",SecondaryMeaning:null},{id:260,Kanji:"朝",OnReading:["チョウ"],KunReading:["あさ"],OnPrincipalReading:"チョウ",KunPrincipalReading:"あさ",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"asa",JLPTLevel:"N4",Meaning:"matin",SecondaryMeaning:"petit-déjeuner"},{id:261,Kanji:"貸",OnReading:["タイ"],KunReading:["かす"],OnPrincipalReading:"タイ",KunPrincipalReading:"かす",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"kasu",JLPTLevel:"N4",Meaning:"prêter",SecondaryMeaning:null},{id:262,Kanji:"着",OnReading:["チャク","ジャク"],KunReading:["きる","つく"],OnPrincipalReading:"チャク",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"chaku",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"arriver",SecondaryMeaning:"mettre (vêtement)"},{id:263,Kanji:"短",OnReading:["タン"],KunReading:["みじかい"],OnPrincipalReading:"タン",KunPrincipalReading:"みじかい",OnPrincipalReadingRomaji:"tan",KunPrincipalReadingRomaji:"mijikai",JLPTLevel:"N4",Meaning:"court",SecondaryMeaning:"durée courte"},{id:264,Kanji:"働",OnReading:["ドウ"],KunReading:["はたらく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"はたらく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"hataraku",JLPTLevel:"N4",Meaning:"travailler",SecondaryMeaning:null},{id:265,Kanji:"楽",OnReading:["ガク","ラク"],KunReading:["たのしい","らく"],OnPrincipalReading:"ガク",KunPrincipalReading:"たのしい",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"tanoshii",JLPTLevel:"N4",Meaning:"amusant",SecondaryMeaning:"musique"},{id:266,Kanji:"暗",OnReading:["アン"],KunReading:["くらい"],OnPrincipalReading:"アン",KunPrincipalReading:"くらい",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"kurai",JLPTLevel:"N4",Meaning:"sombre",SecondaryMeaning:"obscurité"},{id:267,Kanji:"意",OnReading:["イ"],KunReading:["い"],OnPrincipalReading:"イ",KunPrincipalReading:"い",OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:"i",JLPTLevel:"N4",Meaning:"intention",SecondaryMeaning:"pensée"},{id:268,Kanji:"遠",OnReading:["エン"],KunReading:["とおい"],OnPrincipalReading:"エン",KunPrincipalReading:"とおい",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"tooi",JLPTLevel:"N4",Meaning:"loin",SecondaryMeaning:"éloigné"},{id:269,Kanji:"漢",OnReading:["カン"],KunReading:["おとこ"],OnPrincipalReading:"カン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N4",Meaning:"chinois",SecondaryMeaning:"Hanzi"},{id:270,Kanji:"業",OnReading:["ギョウ","ゴウ"],KunReading:["わざ"],OnPrincipalReading:"ギョウ",KunPrincipalReading:"わざ",OnPrincipalReadingRomaji:"gyou",KunPrincipalReadingRomaji:"waza",JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:271,Kanji:"試",OnReading:["シ"],KunReading:["こころみる","ためす"],OnPrincipalReading:"シ",KunPrincipalReading:"こころみる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kokoromiru",JLPTLevel:"N4",Meaning:"essayer",SecondaryMeaning:"test"},{id:272,Kanji:"銀",OnReading:["ギン"],KunReading:["しろがね"],OnPrincipalReading:"ギン",KunPrincipalReading:"しろがね",OnPrincipalReadingRomaji:"gin",KunPrincipalReadingRomaji:"shirogane",JLPTLevel:"N4",Meaning:"argent",SecondaryMeaning:null},{id:273,Kanji:"歌",OnReading:["カ"],KunReading:["うた"],OnPrincipalReading:"カ",KunPrincipalReading:"うた",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"uta",JLPTLevel:"N4",Meaning:"chanson",SecondaryMeaning:"chanter"},{id:274,Kanji:"説",OnReading:["セツ","ゼイ"],KunReading:["とく"],OnPrincipalReading:"セツ",KunPrincipalReading:"とく",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"toku",JLPTLevel:"N4",Meaning:"explication",SecondaryMeaning:"théorie"},{id:275,Kanji:"質",OnReading:["シツ","シチ"],KunReading:["しつ"],OnPrincipalReading:"シツ",KunPrincipalReading:"しつ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"shitsu",JLPTLevel:"N4",Meaning:"qualité",SecondaryMeaning:"matière"},{id:276,Kanji:"館",OnReading:["カン"],KunReading:["やかた"],OnPrincipalReading:"カン",KunPrincipalReading:"やかた",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"yakata",JLPTLevel:"N4",Meaning:"bâtiment",SecondaryMeaning:"musée"},{id:277,Kanji:"親",OnReading:["シン"],KunReading:["おや","したしい"],OnPrincipalReading:"シン",KunPrincipalReading:"おや",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"oya",JLPTLevel:"N4",Meaning:"parent",SecondaryMeaning:"intime"},{id:278,Kanji:"頭",OnReading:["トウ"],KunReading:["あたま"],OnPrincipalReading:"トウ",KunPrincipalReading:"あたま",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"atama",JLPTLevel:"N4",Meaning:"tête",SecondaryMeaning:"cerveau"},{id:279,Kanji:"薬",OnReading:["ヤク","クスリ"],KunReading:["くすり"],OnPrincipalReading:"ヤク",KunPrincipalReading:"くすり",OnPrincipalReadingRomaji:"yaku",KunPrincipalReadingRomaji:"kusuri",JLPTLevel:"N4",Meaning:"médicament",SecondaryMeaning:"drogue"},{id:280,Kanji:"曜",OnReading:["ヨウ"],KunReading:[""],OnPrincipalReading:"ヨウ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"jour de la semaine",SecondaryMeaning:null},{id:281,Kanji:"題",OnReading:["ダイ"],KunReading:[""],OnPrincipalReading:"ダイ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"sujet",SecondaryMeaning:"titre"},{id:282,Kanji:"顔",OnReading:["ガン"],KunReading:["かお"],OnPrincipalReading:"ガン",KunPrincipalReading:"かお",OnPrincipalReadingRomaji:"gan",KunPrincipalReadingRomaji:"kao",JLPTLevel:"N4",Meaning:"visage",SecondaryMeaning:"expression"},{id:283,Kanji:"験",OnReading:["ケン","ゲン"],KunReading:["ためす","けん"],OnPrincipalReading:"ケン",KunPrincipalReading:"ためす",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tamesu",JLPTLevel:"N4",Meaning:"expérience",SecondaryMeaning:"test"},{id:284,Kanji:"暑",OnReading:["ショ"],KunReading:["あつい"],OnPrincipalReading:"ショ",KunPrincipalReading:"あつい",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"atsui",JLPTLevel:"N4",Meaning:"chaleur",SecondaryMeaning:null}],To={kanji:n1},i1=[{id:1,niveau:"N1",kanji:"亜",hiragana:"あ",Romaji:"a",francais:"sub-, sous-",categorie:["nom"]},{id:2,niveau:"N5",kanji:"嗚呼",hiragana:"ああ",Romaji:"aa",francais:"ah !, oh !, hey!",categorie:["expressions idiomatiques"]},{id:3,niveau:"N3",kanji:"愛",hiragana:"あい",Romaji:"ai",francais:"amour",categorie:["émotions et sentiments"]},{id:4,niveau:"N2",kanji:"相変わらず",hiragana:"あいかわらず",Romaji:"aikawarazu",francais:"comme d'habitude, comme toujours",categorie:["expressions idiomatiques"]},{id:5,niveau:"N4",kanji:"挨拶",hiragana:"あいさつ",Romaji:"aisatsu",francais:"salutation",categorie:["formules de politesse"]},{id:6,niveau:"N5",kanji:"挨拶する",hiragana:"あいさつする",Romaji:"aisatsu suru",francais:"saluer",categorie:["verbes","verbes d’action"]},{id:7,niveau:"N3",kanji:"愛情",hiragana:"あいじょう",Romaji:"aijou",francais:"amour, affection",categorie:["émotions et sentiments"]},{id:8,niveau:"N3",kanji:"吅図",hiragana:"あいず",Romaji:"aizu",francais:"signal, signe",categorie:["nom"]},{id:9,niveau:"N3",kanji:"",hiragana:"アイスクリーム",Romaji:"aisukurīmu",francais:"crème glacée",categorie:["la nourriture"]},{id:10,niveau:"N3",kanji:"愛する",hiragana:"あいする",Romaji:"aisuru",francais:"aimer, être amoureux",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:11,niveau:"N1",kanji:"愛想",hiragana:"あいそう",Romaji:"aisou",francais:"amabilité",categorie:["émotions et sentiments"]},{id:12,niveau:"N4",kanji:"間",hiragana:"あいだ",Romaji:"aida",francais:"entre, parmi, pendant que",categorie:["mots de liaison et particules"]},{id:13,niveau:"N1",kanji:"間柄",hiragana:"あいだがら",Romaji:"aidagara",francais:"lien, relation avec quelqu'un",categorie:["nom"]},{id:14,niveau:"N3",kanji:"相手",hiragana:"あいて",Romaji:"aite",francais:"adversaire, opposant, compagnon",categorie:["nom"]},{id:15,niveau:"N2",kanji:"",hiragana:"アイデア・アイディア",Romaji:"aidea",francais:"idée",categorie:["nom"]},{id:16,niveau:"N3",kanji:"生憎",hiragana:"あいにく",Romaji:"ainiku",francais:"malheureusement",categorie:["expressions idiomatiques"]},{id:17,niveau:"N1",kanji:"吅間",hiragana:"あいま",Romaji:"aima",francais:"intervalle",categorie:["nom"]},{id:18,niveau:"N2",kanji:"曖昧",hiragana:"あいまい",Romaji:"aimai",francais:"ambigu, peu précis, vague",categorie:["adjectifs"]},{id:19,niveau:"N3",kanji:"",hiragana:"アイロン",Romaji:"airon",francais:"fer à repasser",categorie:["le matériel domestique"]},{id:20,niveau:"N5",kanji:"会う・遭う",hiragana:"あう",Romaji:"au",francais:"rencontrer, voir (une personne)",categorie:["verbes","verbes d’action"]},{id:21,niveau:"N4",kanji:"吅う",hiragana:"あう",Romaji:"au",francais:"convenir",categorie:["verbes","verbes d’action"]},{id:22,niveau:"N3",kanji:"",hiragana:"アウト",Romaji:"auto",francais:"dehors, à l'extérieur",categorie:["lieux et directions"]},{id:23,niveau:"N1",kanji:"敢えて",hiragana:"あえて",Romaji:"aete",francais:"défi",categorie:["nom"]},{id:24,niveau:"N5",kanji:"青",hiragana:"あお",Romaji:"ao",francais:"bleu (le), vert (le)",categorie:["les couleurs"]},{id:25,niveau:"N5",kanji:"青い・蒼い",hiragana:"あおい",Romaji:"aoi",francais:"bleu, vert, inexpérimenté",categorie:["les couleurs","adjectifs"]},{id:26,niveau:"N2",kanji:"扇ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"éventer, battre",categorie:["verbes","verbes d’action"]},{id:27,niveau:"N1",kanji:"仰ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"admirer quelqu'un, respecter, demander, boire",categorie:["verbes","verbes d’action"]},{id:28,niveau:"N2",kanji:"青白い",hiragana:"あおじろい",Romaji:"aojiroi",francais:"blême, pâle",categorie:["adjectifs"]},{id:29,niveau:"N5",kanji:"赤",hiragana:"あか",Romaji:"aka",francais:"rouge (le)",categorie:["les couleurs"]},{id:30,niveau:"N1",kanji:"垢",hiragana:"あか",Romaji:"aka",francais:"crasse, saleté",categorie:["nom"]},{id:31,niveau:"N5",kanji:"赤い",hiragana:"あかい",Romaji:"akai",francais:"rouge",categorie:["les couleurs","adjectifs"]},{id:32,niveau:"N1",kanji:"赤字",hiragana:"あかじ",Romaji:"akaji",francais:"déficit, perte (monétaire)",categorie:["nom"]},{id:33,niveau:"N1",kanji:"明かす",hiragana:"あかす",Romaji:"akasu",francais:"passer la nuit, révéler un secret",categorie:["verbes","verbes d’action"]},{id:34,niveau:"N4",kanji:"赤ちゃん",hiragana:"あかちゃん",Romaji:"akachan",francais:"bébé",categorie:["les membres de la famille"]},{id:35,niveau:"N1",kanji:"赤らむ",hiragana:"あからむ",Romaji:"akaramu",francais:"rougir (visage)",categorie:["verbes","verbes d’action"]},{id:36,niveau:"N3",kanji:"明かり",hiragana:"あかり",Romaji:"akari",francais:"clarté, lumières",categorie:["nom"]},{id:37,niveau:"N1",kanji:"上がり",hiragana:"あがり",Romaji:"agari",francais:"ascension, montée",categorie:["nom"]},{id:38,niveau:"N4",kanji:"上がる",hiragana:"あがる",Romaji:"agaru",francais:" s'élever, grimper, augmenter",categorie:["verbes","verbes d’action"]},{id:39,niveau:"N5",kanji:"明るい",hiragana:"あかるい",Romaji:"akarui",francais:"clair",categorie:["adjectifs"]},{id:40,niveau:"N4",kanji:"赤ん坊",hiragana:"あかんぼう",Romaji:"akanbou",francais:"bébé",categorie:["les membres de la famille"]},{id:41,niveau:"N5",kanji:"秋",hiragana:"あき",Romaji:"aki",francais:"automne",categorie:["temps et saisons"]},{id:42,niveau:"N3",kanji:"明き・空き",hiragana:"あき",Romaji:"aki",francais:"vide, place, espace",categorie:["nom"]},{id:43,niveau:"N3",kanji:"明らか",hiragana:"あきらか",Romaji:"akiraka",francais:"évident, clair",categorie:["adjectifs"]},{id:44,niveau:"N1",kanji:"諦め",hiragana:"あきらめ",Romaji:"akirame",francais:"résignation, acceptance",categorie:["émotions et sentiments"]},{id:45,niveau:"N3",kanji:"諦める",hiragana:"あきらめる",Romaji:"akirameru",francais:" abandonner, renoncer, laisser tomber",categorie:["verbes","verbes d’action"]},{id:46,niveau:"N3",kanji:"飽きる",hiragana:"あきる",Romaji:"akiru",francais:" s'ennuyer, se lasser",categorie:["verbes","verbes d’action"]},{id:47,niveau:"N2",kanji:"呆れる",hiragana:"あきれる",Romaji:"akireru",francais:" être stupéfait, ébahi",categorie:["verbes","verbes d’action"]},{id:48,niveau:"N5",kanji:"開く",hiragana:"あく",Romaji:"aku",francais:" s'ouvrir",categorie:["verbes","verbes d’action"]},{id:49,niveau:"N4",kanji:"空く",hiragana:"あく",Romaji:"aku",francais:" se vider, être vide, être disponible",categorie:["verbes","verbes d’action"]},{id:50,niveau:"N1",kanji:"悪",hiragana:"あく",Romaji:"aku",francais:"mal (le)",categorie:["nom"]},{id:51,niveau:"N3",kanji:"握手",hiragana:"あくしゅ",Romaji:"akushu",francais:"poignée de mains",categorie:["formules de politesse"]},{id:52,niveau:"N4",kanji:"アクセサリー",hiragana:"アクセサリー",Romaji:"akusesarī",francais:"accessoire",categorie:["les vêtements"]},{id:53,niveau:"N1",kanji:"アクセル",hiragana:"アクセル",Romaji:"akuseru",francais:"accélérateur",categorie:["les moyens de transport"]},{id:54,niveau:"N2",kanji:"",hiragana:"アクセント",Romaji:"akusento",francais:"accent",categorie:["nom"]},{id:55,niveau:"N1",kanji:"悪どい",hiragana:"あくどい",Romaji:"akudoi",francais:"tape-à-l'œil, voyant, vicieux",categorie:["adjectifs"]},{id:56,niveau:"N2",kanji:"欠伸",hiragana:"あくび",Romaji:"akubi",francais:"bâillement",categorie:["santé et bien-être"]},{id:57,niveau:"N3",kanji:"悪魔",hiragana:"あくま",Romaji:"akuma",francais:"démon, diable, mauvais esprit",categorie:["nom"]},{id:58,niveau:"N2",kanji:"飽くまで",hiragana:"あくまで",Romaji:"akumade",francais:"jusqu'au bout, obstinément",categorie:["expressions idiomatiques"]},{id:59,niveau:"N2",kanji:"明くる",hiragana:"あくる",Romaji:"akuru",francais:"prochain, suivant",categorie:["expressions temporelles"]},{id:60,niveau:"N2",kanji:"明け方",hiragana:"あけがた",Romaji:"akegata",francais:"aube",categorie:["expressions temporelles"]},{id:61,niveau:"N5",kanji:"開ける・明ける",hiragana:"あける",Romaji:"akeru",francais:"ouvrir",categorie:["verbes","verbes d’action"]},{id:62,niveau:"N3",kanji:"明ける",hiragana:"あける",Romaji:"akeru",francais:"se lever (le soleil), s'éclaircir",categorie:["verbes","verbes d’action"]},{id:63,niveau:"N5",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"donner",categorie:["verbes","verbes d’action"]},{id:64,niveau:"N4",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"augmenter",categorie:["verbes","verbes d’action"]},{id:65,niveau:"N1",kanji:"顎",hiragana:"あご",Romaji:"ago",francais:"menton",categorie:["le corps humain"]},{id:66,niveau:"N1",kanji:"憧れ",hiragana:"あこがれ",Romaji:"akogare",francais:"aspiration, désirs",categorie:["émotions et sentiments"]},{id:67,niveau:"N2",kanji:"憧れる",hiragana:"あこがれる",Romaji:"akogareru",francais:"aspirer à, languir de quelque chose",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:68,niveau:"N5",kanji:"朝",hiragana:"あさ",Romaji:"asa",francais:"matin",categorie:["expressions temporelles"]},{id:69,niveau:"N1",kanji:"麻",hiragana:"あさ",Romaji:"asa",francais:"chanvre, lin",categorie:["nom"]},{id:70,niveau:"N1",kanji:"字",hiragana:"あざ",Romaji:"aza",francais:"hameau, partie d'un village",categorie:["lieux et directions"]},{id:71,niveau:"N4",kanji:"浅い",hiragana:"あさい",Romaji:"asai",francais:"peu profond",categorie:["adjectifs"]},{id:72,niveau:"N5",kanji:"朝ご飯",hiragana:"あさごはん",Romaji:"asagohan",francais:"petit-déjeuner",categorie:["la nourriture"]},{id:73,niveau:"N5",kanji:"明後日",hiragana:"あさって",Romaji:"asatte",francais:"après-demain",categorie:["expressions temporelles"]},{id:74,niveau:"N4",kanji:"朝寝坊",hiragana:"あさねぼう",Romaji:"asanebou",francais:"lève-tard",categorie:["expressions idiomatiques"]},{id:75,niveau:"N1",kanji:"浅ましい",hiragana:"あさましい",Romaji:"asamashii",francais:"misérable, infortuné, méprisable",categorie:["adjectifs"]},{id:76,niveau:"N1",kanji:"欺く",hiragana:"あざむく",Romaji:"azamuku",francais:"tromper, duper",categorie:["verbes","verbes d’action"]},{id:77,niveau:"N1",kanji:"鮮やか",hiragana:"あざやか",Romaji:"azayaka",francais:"brillant, vif, éclatant",categorie:["adjectifs","les couleurs"]},{id:78,niveau:"N1",kanji:"あざ笑う",hiragana:"あざわらう",Romaji:"azawarau",francais:"sourire avec mépris",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:79,niveau:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"jambe",categorie:["le corps humain"]},{id:80,niveau:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"pied",categorie:["le corps humain"]},{id:81,niveau:"N4",kanji:"味",hiragana:"あじ",Romaji:"aji",francais:"goût",categorie:["la nourriture"]},{id:82,niveau:"N4",kanji:"アジア",hiragana:"アジア",Romaji:"ajia",francais:"Asie, asiatique",categorie:["les pays"]},{id:83,niveau:"N2",kanji:"足跡",hiragana:"あしあと",Romaji:"ashiato",francais:"empreinte de pied",categorie:["nom"]},{id:84,niveau:"N1",kanji:"悪しからず",hiragana:"あしからず",Romaji:"ashikarazu",francais:"désolé mais…, ne m'en veuillez pas mais…",categorie:["formules de politesse"]},{id:85,niveau:"N5",kanji:"明日",hiragana:"あした",Romaji:"ashita",francais:"demain",categorie:["expressions temporelles"]},{id:86,niveau:"N2",kanji:"足元・足下",hiragana:"あしもと",Romaji:"ashimoto",francais:"sous les pieds, allure, démarche",categorie:["nom"]},{id:87,niveau:"N1",kanji:"味わい",hiragana:"あじわい",Romaji:"ajiwai",francais:"saveur, goût",categorie:["la nourriture"]},{id:88,niveau:"N2",kanji:"味わう",hiragana:"あじわう",Romaji:"ajiau",francais:"goûter",categorie:["verbes","verbes d’action","la nourriture"]},{id:89,niveau:"N4",kanji:"明日",hiragana:"あす",Romaji:"asu",francais:"demain",categorie:["expressions temporelles"]},{id:90,niveau:"N2",kanji:"預かる",hiragana:"あずかる",Romaji:"azukaru",francais:"s'occuper de, prendre en charge",categorie:["verbes","verbes d’action"]},{id:91,niveau:"N3",kanji:"預ける",hiragana:"あずける",Romaji:"azukeru",francais:"confier à la garde de, laisser quelqu'un à la charge de",categorie:["verbes","verbes d’action"]},{id:92,niveau:"N3",kanji:"汗",hiragana:"あせ",Romaji:"ase",francais:"sueur",categorie:["santé et bien-être"]},{id:93,niveau:"N1",kanji:"焦る",hiragana:"あせる",Romaji:"aseru",francais:"être pressé, impatient",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:94,niveau:"N1",kanji:"褪せる",hiragana:"あせる",Romaji:"aseru",francais:"pâlir, se décolorer, se faner",categorie:["verbes","verbes d’action"]},{id:95,niveau:"N2",kanji:"汗を掻く",hiragana:"あせをかく",Romaji:"ase o kaku",francais:"transpirer, suer",categorie:["verbes","verbes d’action","santé et bien-être"]},{id:96,niveau:"N5",kanji:"彼処",hiragana:"あそこ",Romaji:"asoko",francais:"là-bas (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:97,niveau:"N5",kanji:"遊び",hiragana:"あそび",Romaji:"asobi",francais:"jeu",categorie:["activités et loisirs"]},{id:98,niveau:"N5",kanji:"遊ぶ",hiragana:"あそぶ",Romaji:"asobu",francais:"jouer",categorie:["verbes","verbes d’action","activités et loisirs"]},{id:99,niveau:"N2",kanji:"値",hiragana:"あたい",Romaji:"atai",francais:"coût, prix, valeur",categorie:["nom"]},{id:100,niveau:"N1",kanji:"値する",hiragana:"あたいする",Romaji:"ataisuru",francais:"mériter, être digne de",categorie:["verbes","verbes d’action"]},{id:101,niveau:"N3",kanji:"与える",hiragana:"あたえる",Romaji:"ataeru",francais:"décerner, offrir, donner",categorie:["verbes","verbes d’action"]},{id:102,niveau:"N5",kanji:"温かい・暖かい",hiragana:"あたたかい",Romaji:"atatakai",francais:"tiède, chaud",categorie:["adjectifs"]},{id:103,niveau:"N2",kanji:"温まる・暖まる",hiragana:"あたたまる",Romaji:"atatamaru",francais:"se réchauffer",categorie:["verbes","verbes d’action"]},{id:104,niveau:"N2",kanji:"温める・暖める",hiragana:"あたためる",Romaji:"atatameru",francais:"réchauffer",categorie:["verbes","verbes d’action"]},{id:105,niveau:"N5",kanji:"頭",hiragana:"あたま",Romaji:"atama",francais:"tête",categorie:["le corps humain"]},{id:106,niveau:"N5",kanji:"新しい",hiragana:"あたらしい",Romaji:"atarashii",francais:"nouveau",categorie:["adjectifs"]},{id:107,niveau:"N3",kanji:"辺り",hiragana:"あたり",Romaji:"atari",francais:"aux environs",categorie:["lieux et directions"]},{id:108,niveau:"N1",kanji:"当たり",hiragana:"あたり",Romaji:"atari",francais:"coup, réussite, succès, par… (+unité)",categorie:["nom"]},{id:109,niveau:"N2",kanji:"当たり前",hiragana:"あたりまえ",Romaji:"atarimae",francais:"évident, banal, normal",categorie:["adjectifs"]},{id:110,niveau:"N3",kanji:"当たる",hiragana:"あたる",Romaji:"ataru",francais:"entreprendre, avoir du succès, être assigné, être équivalent à",categorie:["verbes","verbes d’action"]},{id:111,niveau:"N3",kanji:"彼方・此方",hiragana:"あちこち・あちらこちら",Romaji:"achikochi・achirakochira",francais:"ici et là",categorie:["lieux et directions"]},{id:112,niveau:"N5",kanji:"彼方",hiragana:"あちら",Romaji:"achira",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:113,niveau:"N5",kanji:"暑い",hiragana:"あつい",Romaji:"atsui",francais:"chaud (temps météo.)",categorie:["adjectifs","temps et saisons"]},{id:114,niveau:"N5",kanji:"厚い",hiragana:"あつい",Romaji:"atsui",francais:"épais, lourd",categorie:["adjectifs"]},{id:115,niveau:"N1",kanji:"悪化",hiragana:"あっか",Romaji:"akka",francais:"aggravation, détérioration",categorie:["nom"]},{id:116,niveau:"N1",kanji:"扱い",hiragana:"あつかい",Romaji:"atsukai",francais:"traitement, service",categorie:["nom"]},{id:117,niveau:"N3",kanji:"扱う",hiragana:"あつかう",Romaji:"atsukau",francais:"s'occuper de, gérer, traiter",categorie:["verbes","verbes d’action"]},{id:118,niveau:"N2",kanji:"厚かましい",hiragana:"あつかましい",Romaji:"atsukamashii",francais:"effronté, insolent",categorie:["adjectifs"]},{id:119,niveau:"N1",kanji:"呆気ない",hiragana:"あっけない",Romaji:"akkenai",francais:"trop rapide, abrupt, pas assez de",categorie:["adjectifs"]},{id:120,niveau:"N1",kanji:"",hiragana:"あっさり",Romaji:"assari",francais:"facilement, simplement, rapidement",categorie:["adjectifs"]},{id:121,niveau:"N2",kanji:"圧縮",hiragana:"あっしゅく",Romaji:"asshuku",francais:"compression",categorie:["nom"]},{id:122,niveau:"N5",kanji:"彼方",hiragana:"あっち",Romaji:"acchi",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:123,niveau:"N1",kanji:"圧迫",hiragana:"あっぱく",Romaji:"appaku",francais:"pression, oppression",categorie:["nom"]},{id:124,niveau:"N1",kanji:"",hiragana:"アップ",Romaji:"appu",francais:"vers le haut",categorie:["nom"]},{id:125,niveau:"N3",kanji:"集まり",hiragana:"あつまり",Romaji:"atsumari",francais:"réunion, rassemblement",categorie:["nom"]},{id:126,niveau:"N4",kanji:"集まる",hiragana:"あつまる",Romaji:"atsumaru",francais:"se réunir",categorie:["verbes","verbes d’action"]},{id:127,niveau:"N4",kanji:"集める",hiragana:"あつめる",Romaji:"atsumeru",francais:"réunir, rassembler",categorie:["verbes","verbes d’action"]},{id:128,niveau:"N1",kanji:"誂える",hiragana:"あつらえる",Romaji:"atsuraeru",francais:"commander, donner un ordre",categorie:["verbes","verbes d’action"]},{id:129,niveau:"N1",kanji:"圧力",hiragana:"あつりょく",Romaji:"atsuryoku",francais:"pression, stress",categorie:["nom"]},{id:130,niveau:"N1",kanji:"当て",hiragana:"あて",Romaji:"ate",francais:"espoir, attente, but, objectif",categorie:["nom"]},{id:131,niveau:"N1",kanji:"宛",hiragana:"あて",Romaji:"ate",francais:"but, destination, objectif",categorie:["nom"]},{id:132,niveau:"N1",kanji:"当て字",hiragana:"あてじ",Romaji:"ateji",francais:"kanji utilisé comme équivalent phonétique",categorie:["nom"]},{id:133,niveau:"N2",kanji:"宛名",hiragana:"あてな",Romaji:"atena",francais:"adresse et nom du destinataire",categorie:["nom"]},{id:134,niveau:"N2",kanji:"当てはまる",hiragana:"あてはまる",Romaji:"atehamaru",francais:"appliquer (une règle)",categorie:["verbes","verbes d’action"]},{id:135,niveau:"N2",kanji:"編物",hiragana:"あみもの",Romaji:"amimono",francais:"tricot",categorie:["activités et loisirs"]},{id:136,niveau:"N2",kanji:"編む",hiragana:"あむ",Romaji:"amu",francais:"assembler, coudre",categorie:["verbes","verbes d’action"]},{id:137,niveau:"N5",kanji:"雤",hiragana:"あめ",Romaji:"ame",francais:"pluie",categorie:["nature et environnement"]},{id:138,niveau:"N5",kanji:"飴",hiragana:"あめ",Romaji:"ame",francais:"bonbon, sucrerie",categorie:["la nourriture"]},{id:139,niveau:"N4",kanji:"",hiragana:"アメリカ",Romaji:"amerika",francais:"Amérique",categorie:["les pays"]},{id:140,niveau:"N2",kanji:"危うい",hiragana:"あやうい",Romaji:"ayaui",francais:"dangereux, risqué",categorie:["adjectifs"]},{id:141,niveau:"N2",kanji:"怪しい",hiragana:"あやしい",Romaji:"ayashii",francais:"incertain, suspicieux, douteux, suspect",categorie:["adjectifs"]},{id:142,niveau:"N1",kanji:"操る",hiragana:"あやつる",Romaji:"ayatsuru",francais:"manipuler, opérer",categorie:["verbes","verbes d’action"]},{id:143,niveau:"N1",kanji:"危ぶむ",hiragana:"あやぶむ",Romaji:"ayabumu",francais:"avoir des craintes, des doutes",categorie:["verbes","verbes d’action"]},{id:144,niveau:"N1",kanji:"",hiragana:"あやふや",Romaji:"ayafuya",francais:"ambigu, incertain, vague",categorie:["adjectifs"]},{id:145,niveau:"N1",kanji:"過ち",hiragana:"あやまち",Romaji:"ayamachi",francais:"erreur, faute, faux pas, indiscrétion",categorie:["nom"]},{id:146,niveau:"N3",kanji:"誤り",hiragana:"あやまり",Romaji:"ayamari",francais:"erreur",categorie:["nom"]},{id:147,niveau:"N4",kanji:"謝る",hiragana:"あやまる",Romaji:"ayamaru",francais:"s'excuser",categorie:["verbes","verbes d’action","formules de politesse"]},{id:148,niveau:"N1",kanji:"歩み",hiragana:"あゆみ",Romaji:"ayumi",francais:"promenade à pied, avancée",categorie:["activités et loisirs"]},{id:149,niveau:"N1",kanji:"歩む",hiragana:"あゆむ",Romaji:"ayumu",francais:"marcher, aller à pied",categorie:["verbes","verbes d’action"]},{id:150,niveau:"N3",kanji:"粗い",hiragana:"あらい",Romaji:"arai",francais:"grossier (texture), rugueux (surface)",categorie:["adjectifs"]},{id:151,niveau:"N2",kanji:"荒い",hiragana:"あらい",Romaji:"arai",francais:"brutal, violent",categorie:["adjectifs"]},{id:152,niveau:"N5",kanji:"洗う",hiragana:"あらう",Romaji:"arau",francais:"laver",categorie:["verbes","verbes d’action"]},{id:153,niveau:"N1",kanji:"予め",hiragana:"あらかじめ",Romaji:"arakajime",francais:"à l'avance",categorie:["expressions temporelles"]},{id:154,niveau:"N3",kanji:"嵐",hiragana:"あらし",Romaji:"arashi",francais:"tempête",categorie:["nature et environnement"]},{id:155,niveau:"N1",kanji:"荒らす",hiragana:"あらす",Romaji:"arasu",francais:"dévaster, laisser en ruine, endommager",categorie:["verbes","verbes d’action"]},{id:156,niveau:"N2",kanji:"粗筊",hiragana:"あらすじ",Romaji:"arasuj",francais:"résumé, synopsis",categorie:["nom"]},{id:157,niveau:"N1",kanji:"争い",hiragana:"あらそい",Romaji:"arasoi",francais:"conflit, lutte",categorie:["nom"]},{id:158,niveau:"N2",kanji:"争う",hiragana:"あらそう",Romaji:"arasou",francais:"se disputer, s'affronter",categorie:["verbes","verbes d’action"]},{id:159,niveau:"N3",kanji:"新た",hiragana:"あらた",Romaji:"arata",francais:"nouvellement, fraîchement",categorie:["adjectifs"]},{id:160,niveau:"N1",kanji:"改まる",hiragana:"あらたまる",Romaji:"aratamaru",francais:"être renouvelé, modifié",categorie:["verbes","verbes d’action"]},{id:161,niveau:"N2",kanji:"改めて",hiragana:"あらためて",Romaji:"aratamete",francais:"à nouveau, une nouvelle fois",categorie:["expressions temporelles"]},{id:162,niveau:"N2",kanji:"改める",hiragana:"あらためる",Romaji:"aratameru",francais:"modifier, renouveler",categorie:["verbes","verbes d’action"]},{id:163,niveau:"N1",kanji:"荒っぽい",hiragana:"あらっぽい",Romaji:"arappoi",francais:"rude, rêche",categorie:["adjectifs"]},{id:164,niveau:"N1",kanji:"アラブ",hiragana:"アラブ",Romaji:"arabu",francais:"arabe",categorie:["les pays"]},{id:165,niveau:"N3",kanji:"有らゆる",hiragana:"あらゆる",Romaji:"arayuru",francais:"tous, toutes",categorie:["nom"]},{id:166,niveau:"N1",kanji:"霰",hiragana:"あられ",Romaji:"arare",francais:"grêle",categorie:["nature et environnement"]},{id:167,niveau:"N3",kanji:"表す・現す・著す",hiragana:"あらわす",Romaji:"arawasu",francais:"montrer, afficher, révéler",categorie:["verbes","verbes d’action"]},{id:168,niveau:"N3",kanji:"現れ",hiragana:"あらわれ",Romaji:"araware",francais:"manifestation, incarnation, expression",categorie:["nom"]},{id:169,niveau:"N3",kanji:"現れる・表れる・現われる",hiragana:"あらわれる",Romaji:"arawareru",francais:"apparaître, se dévoiler, s'exprimer (sentiment)",categorie:["verbes","verbes d’action"]},{id:170,niveau:"N2",kanji:"有難い",hiragana:"ありがたい",Romaji:"arigatai",francais:"reconnaissant",categorie:["émotions et sentiments"]},{id:171,niveau:"N1",kanji:"有様",hiragana:"ありさま",Romaji:"arisama",francais:"état, condition",categorie:["nom"]},{id:172,niveau:"N1",kanji:"有りのまま",hiragana:"ありのまま",Romaji:"arinomama",francais:"tel quel",categorie:["expressions idiomatiques"]},{id:173,niveau:"N1",kanji:"有り触れる",hiragana:"ありふれる",Romaji:"arifureru",francais:"être courant, fréquent",categorie:["verbes","verbes d’action"]},{id:174,niveau:"N5",kanji:"有る",hiragana:"ある",Romaji:"aru",francais:"avoir, posséder",categorie:["verbes","verbes d’action"]},{id:175,niveau:"N5",kanji:"在る",hiragana:"ある",Romaji:"aru",francais:"être, se trouver, exister",categorie:["verbes","verbes d’action"]},{id:176,niveau:"N3",kanji:"或る",hiragana:"ある",Romaji:"aru",francais:"un certain",categorie:["nom"]},{id:177,niveau:"N3",kanji:"或いは",hiragana:"あるいは",Romaji:"aruiwa",francais:"ou bien",categorie:["mots de liaison et particules"]},{id:178,niveau:"N1",kanji:"",hiragana:"アルカリ",Romaji:"arukari",francais:"alcali",categorie:["nom"]},{id:179,niveau:"N5",kanji:"歩く",hiragana:"あるく",Romaji:"aruku",francais:"marcher",categorie:["verbes","verbes d’action"]},{id:180,niveau:"N4",kanji:"",hiragana:"アルコール",Romaji:"arukōru",francais:"alcool",categorie:["la nourriture"]},{id:181,niveau:"N4",kanji:"",hiragana:"アルバイト",Romaji:"arubaito",francais:"travail à temps partiel",categorie:["vocabulaire lié au travail"]},{id:182,niveau:"N3",kanji:"",hiragana:"アルバム",Romaji:"arubamu",francais:"album",categorie:["nom"]},{id:183,niveau:"N1",kanji:"",hiragana:"アルミ",Romaji:"arumi",francais:"aluminium",categorie:["nom"]},{id:184,niveau:"N5",kanji:"彼",hiragana:"あれ",Romaji:"are",francais:"ceci (loin du locuteur et de l'interlocuteur)",categorie:["nom"]},{id:185,niveau:"N2",kanji:"彼此",hiragana:"あれこれ",Romaji:"arekore",francais:"divers, diverses choses",categorie:["nom"]},{id:186,niveau:"N2",kanji:"荒れる",hiragana:"あれる",Romaji:"areru",francais:"être orageux, perdre son sang-froid",categorie:["verbes","verbes d’action"]},{id:187,niveau:"N3",kanji:"泡",hiragana:"あわ",Romaji:"awa",francais:"mousse, bulle",categorie:["nom"]},{id:188,niveau:"N1",kanji:"",hiragana:"アワー・アウア",Romaji:"awā・aua",francais:"heure",categorie:["expressions temporelles"]},{id:189,niveau:"N1",kanji:"吅わす",hiragana:"あわす",Romaji:"awasu",francais:"comparer, combiner, ajouter, unir, faire correspondre",categorie:["verbes","verbes d’action"]},{id:190,niveau:"N3",kanji:"吅わせる",hiragana:"あわせる",Romaji:"awaseru",francais:"se connecter, se mélanger",categorie:["verbes","verbes d’action"]},{id:191,niveau:"N2",kanji:"慌しい",hiragana:"あわただしい",Romaji:"awatadashii",francais:"déconcerté, confus",categorie:["adjectifs"]},{id:192,niveau:"N2",kanji:"慌てる",hiragana:"あわてる",Romaji:"awateru",francais:"devenir confus, agité, paniquer",categorie:["verbes","verbes d’action"]},{id:193,niveau:"N3",kanji:"哀れ",hiragana:"あわれ",Romaji:"aware",francais:"pitié, compassion",categorie:["émotions et sentiments"]},{id:194,niveau:"N3",kanji:"案",hiragana:"あん",Romaji:"an",francais:"plan, idée, projet",categorie:["nom"]},{id:195,niveau:"N2",kanji:"安易",hiragana:"あんい",Romaji:"an'i",francais:"facile, simple",categorie:["adjectifs"]},{id:196,niveau:"N2",kanji:"案外",hiragana:"あんがい",Romaji:"angai",francais:"contre toute attente, inattendu",categorie:["adjectifs"]},{id:197,niveau:"N3",kanji:"暗記",hiragana:"あんき",Romaji:"anki",francais:"mémorisation, par coeur",categorie:["nom"]},{id:198,niveau:"N1",kanji:"",hiragana:"アンケート",Romaji:"ankēto",francais:"enquête",categorie:["nom"]},{id:199,niveau:"N1",kanji:"",hiragana:"アンコール",Romaji:"ankōru",francais:"encore",categorie:["nom"]},{id:200,niveau:"N1",kanji:"暗殺",hiragana:"あんさつ",Romaji:"ansatsu",francais:"assassinat",categorie:["nom"]},{id:201,niveau:"N1",kanji:"暗算",hiragana:"あんざん",Romaji:"anzan",francais:"calcul mental",categorie:["nom"]},{id:202,niveau:"N1",kanji:"暗示",hiragana:"あんじ",Romaji:"anji",francais:"indice, suggestion",categorie:["nom"]},{id:203,niveau:"N1",kanji:"案じる",hiragana:"あんじる",Romaji:"anjiru",francais:"être inquiet, réfléchir à",categorie:["verbes","verbes d’action"]},{id:204,niveau:"N4",kanji:"安心する",hiragana:"あんしんする",Romaji:"anshin suru",francais:"être tranquille",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:205,niveau:"N1",kanji:"安静",hiragana:"あんせい",Romaji:"ansei",francais:"repos",categorie:["santé et bien-être"]},{id:206,niveau:"N4",kanji:"安全",hiragana:"あんぜん",Romaji:"anzen",francais:"sûr",categorie:["adjectifs"]},{id:207,niveau:"N3",kanji:"安定",hiragana:"あんてい",Romaji:"antei",francais:"équilibre, stabilité",categorie:["nom"]},{id:208,niveau:"N2",kanji:"アンテナ",hiragana:"アンテナ",Romaji:"antena",francais:"antenne",categorie:["technologie et gadgets"]},{id:209,niveau:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"comme ça",categorie:["adjectifs"]},{id:210,niveau:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"ce genre de",categorie:["adjectifs"]},{id:211,niveau:"N4",kanji:"案内",hiragana:"あんない",Romaji:"annai",francais:"information, renseignement",categorie:["nom"]},{id:212,niveau:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:213,niveau:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:214,niveau:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:215,niveau:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:216,niveau:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:217,niveau:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:218,niveau:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:219,niveau:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:220,niveau:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:221,niveau:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:222,niveau:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:223,niveau:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:224,niveau:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:225,niveau:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:226,niveau:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:227,niveau:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:228,niveau:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:229,niveau:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:230,niveau:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:231,niveau:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:232,niveau:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:233,niveau:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:234,niveau:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:235,niveau:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:236,niveau:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:237,niveau:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:238,niveau:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:239,niveau:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:240,niveau:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:241,niveau:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:242,niveau:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:243,niveau:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:244,niveau:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:245,niveau:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:246,niveau:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:247,niveau:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:248,niveau:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:249,niveau:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:250,niveau:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:251,niveau:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:252,niveau:"N4",kanji:"以下",hiragana:"いか",Romaji:"ika",francais:"moins de, au dessous-de, sous",categorie:["nombres et quantificateurs"]},{id:253,niveau:"N4",kanji:"以外",hiragana:"いがい",Romaji:"igai",francais:"excepté",categorie:["mots de liaison et particules"]},{id:254,niveau:"N3",kanji:"意外",hiragana:"いがい",Romaji:"igai",francais:"inattendu, surprenant",categorie:["adjectifs"]},{id:255,niveau:"N4",kanji:"如何",hiragana:"いかが",Romaji:"ikaga",francais:"comment ?",categorie:["mots de liaison et particules"]},{id:256,niveau:"N4",kanji:"医学",hiragana:"いがく",Romaji:"igaku",francais:"médecine",categorie:["santé et bien-être"]},{id:257,niveau:"N1",kanji:"生かす",hiragana:"いかす",Romaji:"ikasu",francais:"ranimer, ressusciter",categorie:["verbes","verbes d’action"]},{id:258,niveau:"N1",kanji:"如何に",hiragana:"いかに",Romaji:"ikani",francais:"pourquoi ?, comment ?",categorie:["mots de liaison et particules"]},{id:259,niveau:"N1",kanji:"如何にも",hiragana:"いかにも",Romaji:"ikanimo",francais:"certainement !, en effet !, parfaitement !",categorie:["expressions idiomatiques"]},{id:260,niveau:"N1",kanji:"怒り",hiragana:"いかり",Romaji:"ikari",francais:"colère, emportement, fureur, rage",categorie:["émotions et sentiments"]},{id:261,niveau:"N3",kanji:"息",hiragana:"いき",Romaji:"iki",francais:"souffle, respiration",categorie:["le corps humain"]},{id:262,niveau:"N1",kanji:"粋",hiragana:"いき",Romaji:"iki",francais:"élégant, coquet, chic",categorie:["adjectifs"]},{id:263,niveau:"N2",kanji:"意義",hiragana:"いぎ",Romaji:"igi",francais:"moral",categorie:["nom"]},{id:264,niveau:"N1",kanji:"異議",hiragana:"いぎ",Romaji:"igi",francais:"objection, protestation",categorie:["nom"]},{id:265,niveau:"N3",kanji:"行き",hiragana:"いき・ゆき",Romaji:"iki, yuki",francais:"déplacement, aller simple",categorie:["nom"]},{id:266,niveau:"N2",kanji:"生き生き",hiragana:"いきいき",Romaji:"ikiiki",francais:"plein d'entrain, animé, de façon très vivante",categorie:["adjectifs"]},{id:267,niveau:"N3",kanji:"勢い",hiragana:"いきおい",Romaji:"ikioi",francais:"entrain, vigueur, force",categorie:["nom"]},{id:268,niveau:"N1",kanji:"生き甲斐",hiragana:"いきがい",Romaji:"ikigai",francais:"raison de vivre",categorie:["nom"]},{id:269,niveau:"N1",kanji:"意気込む",hiragana:"いきごむ",Romaji:"ikigomu",francais:"être enthousiaste à propos de quelque chose",categorie:["verbes","verbes d’action"]},{id:270,niveau:"N1",kanji:"行き違い",hiragana:"いきちがい",Romaji:"ikichigai",francais:"désaccord, malentendu",categorie:["nom"]},{id:271,niveau:"N2",kanji:"行成",hiragana:"いきなり",Romaji:"ikinari",francais:"brusquement, soudainement",categorie:["adverbes"]},{id:272,niveau:"N3",kanji:"生き物",hiragana:"いきもの",Romaji:"ikimono",francais:"être vivant, animal",categorie:["nom"]},{id:273,niveau:"N4",kanji:"生きる",hiragana:"いきる",Romaji:"ikiru",francais:"vivre, exister",categorie:["verbes","verbes d’action"]},{id:274,niveau:"N2",kanji:"幾",hiragana:"いく",Romaji:"iku",francais:"plusieurs, quelques",categorie:["adjectifs"]},{id:275,niveau:"N5",kanji:"行く",hiragana:"いく・ゆく",Romaji:"iku, yuku",francais:"aller",categorie:["verbes","verbes d’action"]},{id:276,niveau:"N2",kanji:"育児する",hiragana:"いくじする",Romaji:"ikuji suru",francais:"élever des enfants, s'occuper d'enfants",categorie:["verbes","verbes d’action"]},{id:277,niveau:"N1",kanji:"育成",hiragana:"いくせい",Romaji:"ikusei",francais:"élevage, culture",categorie:["nom"]},{id:278,niveau:"N1",kanji:"幾多",hiragana:"いくた",Romaji:"ikuta",francais:"beaucoup, de nombreux",categorie:["adjectifs"]},{id:279,niveau:"N5",kanji:"幾つ",hiragana:"いくつ",Romaji:"ikutsu",francais:"combien ? (quantité)",categorie:["adjectifs"]},{id:280,niveau:"N2",kanji:"幾分",hiragana:"いくぶん",Romaji:"ikubun",francais:"un peu, une partie",categorie:["adjectifs"]},{id:281,niveau:"N5",kanji:"幾ら",hiragana:"いくら",Romaji:"ikura",francais:"combien ? (prix)",categorie:["adjectifs"]},{id:282,niveau:"N5",kanji:"池",hiragana:"いけ",Romaji:"ike",francais:"étang",categorie:["nature et environnement"]},{id:283,niveau:"N3",kanji:"行けない",hiragana:"いけない",Romaji:"ikenai",francais:"ne doit pas faire, sans espoir, pas bon",categorie:["adjectifs"]},{id:284,niveau:"N2",kanji:"生花",hiragana:"いけばな",Romaji:"ikebana",francais:"ikebana, arrangement floral",categorie:["activités et loisirs"]},{id:285,niveau:"N1",kanji:"生ける",hiragana:"いける",Romaji:"ikeru",francais:"disposer (des fleurs)",categorie:["verbes","verbes d’action"]},{id:286,niveau:"N4",kanji:"意見",hiragana:"いけん",Romaji:"iken",francais:"opinion, avis",categorie:["nom"]},{id:287,niveau:"N1",kanji:"異見",hiragana:"いけん",Romaji:"iken",francais:"contradiction, opinion différente, objection",categorie:["nom"]},{id:288,niveau:"N2",kanji:"以後",hiragana:"いご",Romaji:"igo",francais:"après quoi, dorénavant",categorie:["expressions temporelles"]},{id:289,niveau:"N2",kanji:"以降",hiragana:"いこう",Romaji:"ikou",francais:"désormais, dorénavant, à l'avenir",categorie:["expressions temporelles"]},{id:290,niveau:"N1",kanji:"意向",hiragana:"いこう",Romaji:"ikou",francais:"idée, intention",categorie:["nom"]},{id:291,niveau:"N1",kanji:"移行",hiragana:"いこう",Romaji:"ikou",francais:"migration, passage d'un état à un autre",categorie:["nom"]},{id:292,niveau:"N2",kanji:"",hiragana:"イコール",Romaji:"ikōru",francais:"égal à",categorie:["nom"]},{id:293,niveau:"N1",kanji:"",hiragana:"いざ",Romaji:"iza",francais:"bien, maintenant",categorie:["adverbes"]},{id:294,niveau:"N2",kanji:"勇ましい",hiragana:"いさましい",Romaji:"isamashii",francais:"courageux",categorie:["adjectifs"]},{id:295,niveau:"N5",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"pierre, roc",categorie:["nature et environnement"]},{id:296,niveau:"N3",kanji:"医師",hiragana:"いし",Romaji:"ishi",francais:"médecin",categorie:["santé et bien-être"]},{id:297,niveau:"N3",kanji:"意志",hiragana:"いし",Romaji:"ishi",francais:"volonté",categorie:["émotions et sentiments"]},{id:298,niveau:"N3",kanji:"意思",hiragana:"いし",Romaji:"ishi",francais:"intention, but",categorie:["émotions et sentiments"]},{id:299,niveau:"N3",kanji:"維持",hiragana:"いじ",Romaji:"iji",francais:"conservation, entretien",categorie:["nom"]},{id:300,niveau:"N1",kanji:"意地",hiragana:"いじ",Romaji:"iji",francais:"obstination, volonté",categorie:["émotions et sentiments"]},{id:301,niveau:"N3",kanji:"意識",hiragana:"いしき",Romaji:"ishiki",francais:"conscience",categorie:["nom"]},{id:302,niveau:"N2",kanji:"意識する",hiragana:"いしきする",Romaji:"ishiki suru",francais:"avoir conscience",categorie:["verbes","verbes d’action"]},{id:303,niveau:"N4",kanji:"苛める",hiragana:"いじめる",Romaji:"ijimeru",francais:"embêter",categorie:["verbes","verbes d’action"]},{id:304,niveau:"N5",kanji:"医者",hiragana:"いしゃ",Romaji:"isha",francais:"docteur, médecin",categorie:["nom"]},{id:305,niveau:"N1",kanji:"移住",hiragana:"いじゅう",Romaji:"ijuu",francais:"migration, immigration",categorie:["nom"]},{id:306,niveau:"N1",kanji:"移住する",hiragana:"いじゅうする",Romaji:"ijuu suru",francais:"migrer, immigrer",categorie:["verbes"]},{id:307,niveau:"N1",kanji:"衣装",hiragana:"いしょう",Romaji:"ishou",francais:"vêtement, costume",categorie:["nom"]},{id:308,niveau:"N4",kanji:"以上",hiragana:"いじょう",Romaji:"ijou",francais:"plus de, au-dessus-de, davantage",categorie:["adjectifs"]},{id:309,niveau:"N3",kanji:"異常",hiragana:"いじょう",Romaji:"ijou",francais:"étrange, anormal",categorie:["adjectifs"]},{id:310,niveau:"N2",kanji:"衣食住",hiragana:"いしょくじゅう",Romaji:"ishokujyuu",francais:"nécessités de la vie (des vêtements, de la nourriture et un abri)",categorie:["nom"]},{id:311,niveau:"N1",kanji:"弄る",hiragana:"いじる",Romaji:"ijiru",francais:"manier, toucher, trifouiller",categorie:["verbes"]},{id:312,niveau:"N2",kanji:"意地悪",hiragana:"いじわる",Romaji:"ijiwaru",francais:"malicieux, désobligeant",categorie:["adjectifs"]},{id:313,niveau:"N5",kanji:"椅子",hiragana:"いす",Romaji:"isu",francais:"chaise",categorie:["nom"]},{id:314,niveau:"N3",kanji:"泉",hiragana:"いずみ",Romaji:"izumi",francais:"fontaine, source",categorie:["nom"]},{id:315,niveau:"N3",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"où ?, qui ?, quoi ?",categorie:["adjectifs"]},{id:316,niveau:"N2",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"un autre jour, une autre fois",categorie:["adjectifs"]},{id:317,niveau:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"sexe opposé",categorie:["nom"]},{id:318,niveau:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"de sexe opposé",categorie:["nom"]},{id:319,niveau:"N1",kanji:"遺跡",hiragana:"いせき",Romaji:"iseki",francais:"ruine, vestige",categorie:["nom"]},{id:320,niveau:"N3",kanji:"以前",hiragana:"いぜん",Romaji:"izen",francais:"auparavant, autrefois",categorie:["adjectifs"]},{id:321,niveau:"N1",kanji:"依然",hiragana:"いぜん",Romaji:"izen",francais:"comme toujours, comme jusqu'à présent",categorie:["adjectifs"]},{id:322,niveau:"N5",kanji:"忙しい",hiragana:"いそがしい",Romaji:"isogashii",francais:"occupé",categorie:["adjectifs"]},{id:323,niveau:"N4",kanji:"急ぐ",hiragana:"いそぐ",Romaji:"isogu",francais:"se dépêcher",categorie:["verbes"]},{id:324,niveau:"N1",kanji:"依存",hiragana:"いぞん",Romaji:"izon",francais:"dépendance",categorie:["nom"]},{id:325,niveau:"N3",kanji:"板",hiragana:"いた",Romaji:"ita",francais:"planche, plaque",categorie:["nom"]},{id:326,niveau:"N5",kanji:"痛い",hiragana:"いたい",Romaji:"itai",francais:"douloureux",categorie:["adjectifs"]},{id:327,niveau:"N3",kanji:"偉大",hiragana:"いだい",Romaji:"idai",francais:"grandiose",categorie:["adjectifs"]},{id:328,niveau:"N1",kanji:"委託",hiragana:"いたく",Romaji:"itaku",francais:"consignation, le fait de confier quelque chose",categorie:["nom"]},{id:329,niveau:"N1",kanji:"委託する",hiragana:"いたくする",Romaji:"itaku suru",francais:"consigner, confier",categorie:["verbes"]},{id:330,niveau:"N4",kanji:"致す",hiragana:"いたす",Romaji:"itasu",francais:"faire (hum)",categorie:["verbes"]},{id:331,niveau:"N3",kanji:"悪戯",hiragana:"いたずら",Romaji:"itazura",francais:"mauvaise blague, sale tour",categorie:["nom"]},{id:332,niveau:"N1",kanji:"頂",hiragana:"いただき",Romaji:"itadaki",francais:"cime, sommet, pointe",categorie:["nom"]},{id:333,niveau:"N5",kanji:"戴きます",hiragana:"いただきます",Romaji:"itadakimasu",francais:"merci pour ce repas (expression de gratitude)",categorie:["expression"]},{id:334,niveau:"N4",kanji:"戴く",hiragana:"いただく",Romaji:"itadaku",francais:"recevoir (hum), manger ou boire",categorie:["verbes"]},{id:335,niveau:"N1",kanji:"至って",hiragana:"いたって",Romaji:"itatte",francais:"extrêmement, énormément",categorie:["adverbes"]},{id:336,niveau:"N3",kanji:"痛み",hiragana:"いたみ",Romaji:"itami",francais:"douleur",categorie:["nom"]},{id:337,niveau:"N2",kanji:"痛む",hiragana:"いたむ",Romaji:"itamuu",francais:"être blessé, subir une douleur",categorie:["verbes"]},{id:338,niveau:"N1",kanji:"痛める",hiragana:"いためる",Romaji:"itameru",francais:"se faire mal",categorie:["verbes"]},{id:339,niveau:"N1",kanji:"炒める",hiragana:"いためる",Romaji:"itameru",francais:"faire revenir (cuisine), cuisiner, faire frire",categorie:["verbes"]},{id:340,niveau:"N3",kanji:"至る",hiragana:"いたる",Romaji:"itaru",francais:"arriver à, mener à, conduire à",categorie:["verbes"]},{id:341,niveau:"N1",kanji:"労る",hiragana:"いたわる",Romaji:"itawaru",francais:"être plein d'attention pour, consoler, compatir",categorie:["verbes"]},{id:342,niveau:"N5",kanji:"一",hiragana:"いち",Romaji:"ichi",francais:"un",categorie:["nombres et quantificateurs"]},{id:343,niveau:"N3",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"foire, marché",categorie:["nom"]},{id:344,niveau:"N2",kanji:"位置",hiragana:"いち",Romaji:"ichi",francais:"place, position",categorie:["nom"]},{id:345,niveau:"N2",kanji:"一々",hiragana:"いちいち",Romaji:"ichiichi",francais:"un par un, séparément",categorie:["adverbes","nombres et quantificateurs"]}],Ti={vocabulaire:i1},a1={color:"#F75D48"},t1={mode:"light",fontColor:"#353535",bgColor:"#353535",mainBgColor:"#F7F7F2"},r1={searchText:"",jlptLevel:"",kanaType:"",vocabulaireCategorie:[]},o1={exerciceModeDeJeu:"",exerciceDifficulté:"",exerciceNumber:0,exerciceResult:[],exerciceTimer:5,exerciceTimerActive:!1,exerciceTypeDeKana:"normal"},l1={totalTimer:0,totalfaute:0,totalreussite:0},c1={kanji:To.kanji.length,vocabulaire:Ti.vocabulaire.length},s1={kanji:[],vocabulaire:[],hiragana:[],katakana:[],nombre:[]},Lp=_i({name:"color",initialState:a1,reducers:{setColor:(e,n)=>{e.color=n.payload}}}),Tp=_i({name:"mode",initialState:t1,reducers:{setMode:(e,n)=>{e.mode=n.payload,n.payload==="light"?(e.fontColor="#353535",e.bgColor="#353535",e.mainBgColor="#F7F7F2"):(e.fontColor="#F7F7F2",e.bgColor="#F7F7F2",e.mainBgColor="#353535")}}}),Mp=_i({name:"search",initialState:r1,reducers:{setSearchText:(e,n)=>{e.searchText=n.payload},setJlptLevel:(e,n)=>{e.jlptLevel=n.payload},setkanaType:(e,n)=>{e.kanaType=n.payload},setVocabulaireCategorie:(e,n)=>{e.vocabulaireCategorie=n.payload}}}),Ep=_i({name:"parametersExercice",initialState:o1,reducers:{setExerciceModeDeJeu:(e,n)=>{e.exerciceModeDeJeu=n.payload},setExerciceDifficulté:(e,n)=>{e.exerciceDifficulté=n.payload},setExerciceNumber:(e,n)=>{e.exerciceNumber=n.payload},setExerciceResult:(e,n)=>{e.exerciceResult=n.payload},setExerciceTimer:(e,n)=>{e.exerciceTimer=n.payload},setExerciceTimerActive:(e,n)=>{e.exerciceTimerActive=n.payload},setExerciceTypeDeKana:(e,n)=>{e.exerciceTypeDeKana=n.payload}}}),Hp=_i({name:"exercice",initialState:l1,reducers:{setTotalTimer:(e,n)=>{e.totalTimer=n.payload},setTotalfaute:(e,n)=>{e.totalfaute=n.payload},setTotalreussite:(e,n)=>{e.totalreussite=n.payload}}}),Dp=_i({name:"totalData",initialState:c1,reducers:{setTotalData:(e,n)=>{e.kanji=n.payload.kanji,e.vocabulaire=n.payload.vocabulaire}}}),Fp=_i({name:"dataChoice",initialState:s1,reducers:{toggleKanji:(e,n)=>{const i=n.payload,a=e.kanji.findIndex(t=>t.id===i.id);a>=0?e.kanji.splice(a,1):e.kanji.push(i)},toggleVocabulaire:(e,n)=>{const i=n.payload,a=e.vocabulaire.findIndex(t=>t.id===i.id);a>=0?e.vocabulaire.splice(a,1):e.vocabulaire.push(i)},toggleKatakana:(e,n)=>{const i=n.payload,a=e.katakana.findIndex(t=>t.id===i.id);a>=0?e.katakana.splice(a,1):e.katakana.push(i)},toggleNombre:(e,n)=>{const i=n.payload,a=e.nombre.findIndex(t=>t.id===i.id);a>=0?e.nombre.splice(a,1):e.nombre.push(i)},toggleHiragana:(e,n)=>{const i=n.payload,a=e.hiragana.findIndex(t=>t.id===i.id);a>=0?e.hiragana.splice(a,1):e.hiragana.push(i)},resetKanji:e=>{e.kanji=[]},resetVocabulaire:e=>{e.vocabulaire=[]},resetKatakana:e=>{e.katakana=[]},resetNombre:e=>{e.nombre=[]},resetHiragana:e=>{e.hiragana=[]}}}),{setColor:u1}=Lp.actions,{setMode:d1}=Tp.actions,{setSearchText:Ms,setJlptLevel:g1,setkanaType:Es,setVocabulaireCategorie:f1}=Mp.actions,{setExerciceModeDeJeu:yd,setExerciceDifficulté:p1,setExerciceNumber:m1,setExerciceResult:Hk,setExerciceTimer:h1,setExerciceTimerActive:v1,setExerciceTypeDeKana:_p}=Ep.actions,{setTotalTimer:kd,setTotalfaute:or,setTotalreussite:lr}=Hp.actions;Dp.actions;const{toggleKanji:R1,toggleVocabulaire:j1,toggleKatakana:y1,toggleNombre:Dk,toggleHiragana:k1,resetKanji:w1,resetVocabulaire:P1,resetKatakana:x1,resetNombre:C1,resetHiragana:K1}=Fp.actions,O1=Jv({reducer:{color:Lp.reducer,mode:Tp.reducer,search:Mp.reducer,parametersExercice:Ep.reducer,exercice:Hp.reducer,totalData:Dp.reducer,dataChoice:Fp.reducer}});var _e=function(){return _e=Object.assign||function(n){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},_e.apply(this,arguments)};function lo(e,n,i){if(i||arguments.length===2)for(var a=0,t=n.length,r;a<t;a++)(r||!(a in n))&&(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}var ae="-ms-",rt="-moz-",Q="-webkit-",zp="comm",Mo="rule",Hs="decl",b1="@import",Ap="@keyframes",$1="@layer",Bp=Math.abs,Ds=String.fromCharCode,Kc=Object.assign;function N1(e,n){return ke(e,0)^45?(((n<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function Jp(e){return e.trim()}function Nn(e,n){return(e=n.exec(e))?e[0]:e}function B(e,n,i){return e.replace(n,i)}function xr(e,n,i){return e.indexOf(n,i)}function ke(e,n){return e.charCodeAt(n)|0}function ha(e,n,i){return e.slice(n,i)}function xn(e){return e.length}function Ip(e){return e.length}function Qa(e,n){return n.push(e),e}function S1(e,n){return e.map(n).join("")}function wd(e,n){return e.filter(function(i){return!Nn(i,n)})}var Eo=1,va=1,Vp=0,ln=0,me=0,Ca="";function Ho(e,n,i,a,t,r,o,c){return{value:e,root:n,parent:i,type:a,props:t,children:r,line:Eo,column:va,length:o,return:"",siblings:c}}function In(e,n){return Kc(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ai(e){for(;e.root;)e=In(e.root,{children:[e]});Qa(e,e.siblings)}function L1(){return me}function T1(){return me=ln>0?ke(Ca,--ln):0,va--,me===10&&(va=1,Eo--),me}function Rn(){return me=ln<Vp?ke(Ca,ln++):0,va++,me===10&&(va=1,Eo++),me}function Pi(){return ke(Ca,ln)}function Cr(){return ln}function Do(e,n){return ha(Ca,e,n)}function Oc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M1(e){return Eo=va=1,Vp=xn(Ca=e),ln=0,[]}function E1(e){return Ca="",e}function hl(e){return Jp(Do(ln-1,bc(e===91?e+2:e===40?e+1:e)))}function H1(e){for(;(me=Pi())&&me<33;)Rn();return Oc(e)>2||Oc(me)>3?"":" "}function D1(e,n){for(;--n&&Rn()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Do(e,Cr()+(n<6&&Pi()==32&&Rn()==32))}function bc(e){for(;Rn();)switch(me){case e:return ln;case 34:case 39:e!==34&&e!==39&&bc(me);break;case 40:e===41&&bc(e);break;case 92:Rn();break}return ln}function F1(e,n){for(;Rn()&&e+me!==57;)if(e+me===84&&Pi()===47)break;return"/*"+Do(n,ln-1)+"*"+Ds(e===47?e:Rn())}function _1(e){for(;!Oc(Pi());)Rn();return Do(e,ln)}function z1(e){return E1(Kr("",null,null,null,[""],e=M1(e),0,[0],e))}function Kr(e,n,i,a,t,r,o,c,s){for(var u=0,d=0,f=o,g=0,v=0,j=0,R=1,w=1,m=1,p=0,h="",k=t,P=r,K=a,x=h;w;)switch(j=p,p=Rn()){case 40:if(j!=108&&ke(x,f-1)==58){xr(x+=B(hl(p),"&","&\f"),"&\f",Bp(u?c[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:x+=hl(p);break;case 9:case 10:case 13:case 32:x+=H1(j);break;case 92:x+=D1(Cr()-1,7);continue;case 47:switch(Pi()){case 42:case 47:Qa(A1(F1(Rn(),Cr()),n,i,s),s);break;default:x+="/"}break;case 123*R:c[u++]=xn(x)*m;case 125*R:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+d:m==-1&&(x=B(x,/\f/g,"")),v>0&&xn(x)-f&&Qa(v>32?xd(x+";",a,i,f-1,s):xd(B(x," ","")+";",a,i,f-2,s),s);break;case 59:x+=";";default:if(Qa(K=Pd(x,n,i,u,d,t,c,h,k=[],P=[],f,r),r),p===123)if(d===0)Kr(x,n,K,K,k,r,f,c,P);else switch(g===99&&ke(x,3)===110?100:g){case 100:case 108:case 109:case 115:Kr(e,K,K,a&&Qa(Pd(e,K,K,0,0,t,c,h,t,k=[],f,P),P),t,P,f,c,a?k:P);break;default:Kr(x,K,K,K,[""],P,0,c,P)}}u=d=v=0,R=m=1,h=x="",f=o;break;case 58:f=1+xn(x),v=j;default:if(R<1){if(p==123)--R;else if(p==125&&R++==0&&T1()==125)continue}switch(x+=Ds(p),p*R){case 38:m=d>0?1:(x+="\f",-1);break;case 44:c[u++]=(xn(x)-1)*m,m=1;break;case 64:Pi()===45&&(x+=hl(Rn())),g=Pi(),d=f=xn(h=x+=_1(Cr())),p++;break;case 45:j===45&&xn(x)==2&&(R=0)}}return r}function Pd(e,n,i,a,t,r,o,c,s,u,d,f){for(var g=t-1,v=t===0?r:[""],j=Ip(v),R=0,w=0,m=0;R<a;++R)for(var p=0,h=ha(e,g+1,g=Bp(w=o[R])),k=e;p<j;++p)(k=Jp(w>0?v[p]+" "+h:B(h,/&\f/g,v[p])))&&(s[m++]=k);return Ho(e,n,i,t===0?Mo:c,s,u,d,f)}function A1(e,n,i,a){return Ho(e,n,i,zp,Ds(L1()),ha(e,2,-2),0,a)}function xd(e,n,i,a,t){return Ho(e,n,i,Hs,ha(e,0,a),ha(e,a+1,-1),a,t)}function Wp(e,n,i){switch(N1(e,n)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return rt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+rt+e+ae+e+e;case 5936:switch(ke(e,n+11)){case 114:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+ae+e+e;case 6165:return Q+e+ae+"flex-"+e+e;case 5187:return Q+e+B(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return Q+e+ae+"flex-item-"+B(e,/flex-|-self/g,"")+(Nn(e,/flex-|baseline/)?"":ae+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return Q+e+ae+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+ae+B(e,"shrink","negative")+e;case 5292:return Q+e+ae+B(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+B(e,"-grow","")+Q+e+ae+B(e,"grow","positive")+e;case 4554:return Q+B(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!Nn(e,/flex-|baseline/))return ae+"grid-column-align"+ha(e,n)+e;break;case 2592:case 3360:return ae+B(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,t){return n=t,Nn(a.props,/grid-\w+-end/)})?~xr(e+(i=i[n].value),"span",0)?e:ae+B(e,"-start","")+e+ae+"grid-row-span:"+(~xr(i,"span",0)?Nn(i,/\d+/):+Nn(i,/\d+/)-+Nn(e,/\d+/))+";":ae+B(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Nn(a.props,/grid-\w+-start/)})?e:ae+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-n>6)switch(ke(e,n+1)){case 109:if(ke(e,n+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+rt+(ke(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~xr(e,"stretch",0)?Wp(B(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,t,r,o,c,s,u){return ae+t+":"+r+u+(o?ae+t+"-span:"+(c?s:+s-+r)+u:"")+e});case 4949:if(ke(e,n+6)===121)return B(e,":",":"+Q)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(ke(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+ae+"$2box$3")+e;case 100:return B(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function co(e,n){for(var i="",a=0;a<e.length;a++)i+=n(e[a],a,e,n)||"";return i}function B1(e,n,i,a){switch(e.type){case $1:if(e.children.length)break;case b1:case Hs:return e.return=e.return||e.value;case zp:return"";case Ap:return e.return=e.value+"{"+co(e.children,a)+"}";case Mo:if(!xn(e.value=e.props.join(",")))return""}return xn(i=co(e.children,a))?e.return=e.value+"{"+i+"}":""}function J1(e){var n=Ip(e);return function(i,a,t,r){for(var o="",c=0;c<n;c++)o+=e[c](i,a,t,r)||"";return o}}function I1(e){return function(n){n.root||(n=n.return)&&e(n)}}function V1(e,n,i,a){if(e.length>-1&&!e.return)switch(e.type){case Hs:e.return=Wp(e.value,e.length,i);return;case Ap:return co([In(e,{value:B(e.value,"@","@"+Q)})],a);case Mo:if(e.length)return S1(i=e.props,function(t){switch(Nn(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(In(e,{props:[B(t,/:(read-\w+)/,":"+rt+"$1")]})),Ai(In(e,{props:[t]})),Kc(e,{props:wd(i,a)});break;case"::placeholder":Ai(In(e,{props:[B(t,/:(plac\w+)/,":"+Q+"input-$1")]})),Ai(In(e,{props:[B(t,/:(plac\w+)/,":"+rt+"$1")]})),Ai(In(e,{props:[B(t,/:(plac\w+)/,ae+"input-$1")]})),Ai(In(e,{props:[t]})),Kc(e,{props:wd(i,a)});break}return""})}}var W1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ie={},Ra=typeof process<"u"&&Ie!==void 0&&(Ie.REACT_APP_SC_ATTR||Ie.SC_ATTR)||"data-styled",Up="active",Qp="data-styled-version",Fo="6.1.12",Fs=`/*!sc*/
`,so=typeof window<"u"&&"HTMLElement"in window,U1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==""?Ie.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ie.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.SC_DISABLE_SPEEDY!==void 0&&Ie.SC_DISABLE_SPEEDY!==""&&Ie.SC_DISABLE_SPEEDY!=="false"&&Ie.SC_DISABLE_SPEEDY),_o=Object.freeze([]),ja=Object.freeze({});function Q1(e,n,i){return i===void 0&&(i=ja),e.theme!==i.theme&&e.theme||n||i.theme}var qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),q1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Z1=/(^-|-$)/g;function Cd(e){return e.replace(q1,"-").replace(Z1,"")}var Y1=/(a)(d)/gi,cr=52,Kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function $c(e){var n,i="";for(n=Math.abs(e);n>cr;n=n/cr|0)i=Kd(n%cr)+i;return(Kd(n%cr)+i).replace(Y1,"$1-$2")}var vl,Zp=5381,na=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},Yp=function(e){return na(Zp,e)};function G1(e){return $c(Yp(e)>>>0)}function X1(e){return e.displayName||e.name||"Component"}function Rl(e){return typeof e=="string"&&!0}var Gp=typeof Symbol=="function"&&Symbol.for,Xp=Gp?Symbol.for("react.memo"):60115,eR=Gp?Symbol.for("react.forward_ref"):60112,nR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aR=((vl={})[eR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vl[Xp]=e0,vl);function Od(e){return("type"in(n=e)&&n.type.$$typeof)===Xp?e0:"$$typeof"in e?aR[e.$$typeof]:nR;var n}var tR=Object.defineProperty,rR=Object.getOwnPropertyNames,bd=Object.getOwnPropertySymbols,oR=Object.getOwnPropertyDescriptor,lR=Object.getPrototypeOf,$d=Object.prototype;function n0(e,n,i){if(typeof n!="string"){if($d){var a=lR(n);a&&a!==$d&&n0(e,a,i)}var t=rR(n);bd&&(t=t.concat(bd(n)));for(var r=Od(e),o=Od(n),c=0;c<t.length;++c){var s=t[c];if(!(s in iR||i&&i[s]||o&&s in o||r&&s in r)){var u=oR(n,s);try{tR(e,s,u)}catch{}}}}return e}function ya(e){return typeof e=="function"}function _s(e){return typeof e=="object"&&"styledComponentId"in e}function yi(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Nd(e,n){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Ot(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nc(e,n,i){if(i===void 0&&(i=!1),!i&&!Ot(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)e[a]=Nc(e[a],n[a]);else if(Ot(n))for(var a in n)e[a]=Nc(e[a],n[a]);return e}function zs(e,n){Object.defineProperty(e,"toString",{value:n})}function Et(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var cR=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,a=0;a<n;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var a=this.groupSizes,t=a.length,r=t;n>=r;)if((r<<=1)<0)throw Et(16,"".concat(n));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var o=t;o<r;o++)this.groupSizes[o]=0}for(var c=this.indexOfGroup(n+1),s=(o=0,i.length);o<s;o++)this.tag.insertRule(c,i[o])&&(this.groupSizes[n]++,c++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],a=this.indexOfGroup(n),t=a+i;this.groupSizes[n]=0;for(var r=a;r<t;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var a=this.groupSizes[n],t=this.indexOfGroup(n),r=t+a,o=t;o<r;o++)i+="".concat(this.tag.getRule(o)).concat(Fs);return i},e}(),Or=new Map,uo=new Map,br=1,sr=function(e){if(Or.has(e))return Or.get(e);for(;uo.has(br);)br++;var n=br++;return Or.set(e,n),uo.set(n,e),n},sR=function(e,n){br=n+1,Or.set(e,n),uo.set(n,e)},uR="style[".concat(Ra,"][").concat(Qp,'="').concat(Fo,'"]'),dR=new RegExp("^".concat(Ra,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gR=function(e,n,i){for(var a,t=i.split(","),r=0,o=t.length;r<o;r++)(a=t[r])&&e.registerName(n,a)},fR=function(e,n){for(var i,a=((i=n.textContent)!==null&&i!==void 0?i:"").split(Fs),t=[],r=0,o=a.length;r<o;r++){var c=a[r].trim();if(c){var s=c.match(dR);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(sR(d,u),gR(e,d,s[3]),e.getTag().insertRules(u,t)),t.length=0}else t.push(c)}}},Sd=function(e){for(var n=document.querySelectorAll(uR),i=0,a=n.length;i<a;i++){var t=n[i];t&&t.getAttribute(Ra)!==Up&&(fR(e,t),t.parentNode&&t.parentNode.removeChild(t))}};function pR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var i0=function(e){var n=document.head,i=e||n,a=document.createElement("style"),t=function(c){var s=Array.from(c.querySelectorAll("style[".concat(Ra,"]")));return s[s.length-1]}(i),r=t!==void 0?t.nextSibling:null;a.setAttribute(Ra,Up),a.setAttribute(Qp,Fo);var o=pR();return o&&a.setAttribute("nonce",o),i.insertBefore(a,r),a},mR=function(){function e(n){this.element=i0(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,t=0,r=a.length;t<r;t++){var o=a[t];if(o.ownerNode===i)return o}throw Et(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),hR=function(){function e(n){this.element=i0(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),vR=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ld=so,RR={isServer:!so,useCSSOMInjection:!U1},a0=function(){function e(n,i,a){n===void 0&&(n=ja),i===void 0&&(i={});var t=this;this.options=_e(_e({},RR),n),this.gs=i,this.names=new Map(a),this.server=!!n.isServer,!this.server&&so&&Ld&&(Ld=!1,Sd(this)),zs(this,function(){return function(r){for(var o=r.getTag(),c=o.length,s="",u=function(f){var g=function(m){return uo.get(m)}(f);if(g===void 0)return"continue";var v=r.names.get(g),j=o.getGroup(f);if(v===void 0||!v.size||j.length===0)return"continue";var R="".concat(Ra,".g").concat(f,'[id="').concat(g,'"]'),w="";v!==void 0&&v.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),s+="".concat(j).concat(R,'{content:"').concat(w,'"}').concat(Fs)},d=0;d<c;d++)u(d);return s}(t)})}return e.registerId=function(n){return sr(n)},e.prototype.rehydrate=function(){!this.server&&so&&Sd(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(_e(_e({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var a=i.useCSSOMInjection,t=i.target;return i.isServer?new vR(t):a?new mR(t):new hR(t)}(this.options),new cR(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(sr(n),this.names.has(n))this.names.get(n).add(i);else{var a=new Set;a.add(i),this.names.set(n,a)}},e.prototype.insertRules=function(n,i,a){this.registerName(n,i),this.getTag().insertRules(sr(n),a)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(sr(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jR=/&/g,yR=/^\s*\/\/.*$/gm;function t0(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=t0(i.children,n)),i})}function kR(e){var n,i,a,t=ja,r=t.options,o=r===void 0?ja:r,c=t.plugins,s=c===void 0?_o:c,u=function(g,v,j){return j.startsWith(i)&&j.endsWith(i)&&j.replaceAll(i,"").length>0?".".concat(n):g},d=s.slice();d.push(function(g){g.type===Mo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(jR,i).replace(a,u))}),o.prefix&&d.push(V1),d.push(B1);var f=function(g,v,j,R){v===void 0&&(v=""),j===void 0&&(j=""),R===void 0&&(R="&"),n=R,i=v,a=new RegExp("\\".concat(i,"\\b"),"g");var w=g.replace(yR,""),m=z1(j||v?"".concat(j," ").concat(v," { ").concat(w," }"):w);o.namespace&&(m=t0(m,o.namespace));var p=[];return co(m,J1(d.concat(I1(function(h){return p.push(h)})))),p};return f.hash=s.length?s.reduce(function(g,v){return v.name||Et(15),na(g,v.name)},Zp).toString():"",f}var wR=new a0,Sc=kR(),r0=Ci.createContext({shouldForwardProp:void 0,styleSheet:wR,stylis:Sc});r0.Consumer;Ci.createContext(void 0);function Td(){return O.useContext(r0)}var PR=function(){function e(n,i){var a=this;this.inject=function(t,r){r===void 0&&(r=Sc);var o=a.name+r.hash;t.hasNameForId(a.id,o)||t.insertRules(a.id,o,r(a.rules,o,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,zs(this,function(){throw Et(12,String(a.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=Sc),this.name+n.hash},e}(),xR=function(e){return e>="A"&&e<="Z"};function Md(e){for(var n="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;xR(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var o0=function(e){return e==null||e===!1||e===""},l0=function(e){var n,i,a=[];for(var t in e){var r=e[t];e.hasOwnProperty(t)&&!o0(r)&&(Array.isArray(r)&&r.isCss||ya(r)?a.push("".concat(Md(t),":"),r,";"):Ot(r)?a.push.apply(a,lo(lo(["".concat(t," {")],l0(r),!1),["}"],!1)):a.push("".concat(Md(t),": ").concat((n=t,(i=r)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in W1||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function xi(e,n,i,a){if(o0(e))return[];if(_s(e))return[".".concat(e.styledComponentId)];if(ya(e)){if(!ya(r=e)||r.prototype&&r.prototype.isReactComponent||!n)return[e];var t=e(n);return xi(t,n,i,a)}var r;return e instanceof PR?i?(e.inject(i,a),[e.getName(a)]):[e]:Ot(e)?l0(e):Array.isArray(e)?Array.prototype.concat.apply(_o,e.map(function(o){return xi(o,n,i,a)})):[e.toString()]}function CR(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(ya(i)&&!_s(i))return!1}return!0}var KR=Yp(Fo),OR=function(){function e(n,i,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&CR(n),this.componentId=i,this.baseHash=na(KR,i),this.baseStyle=a,a0.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,a){var t=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))t=yi(t,this.staticRulesId);else{var r=Nd(xi(this.rules,n,i,a)),o=$c(na(this.baseHash,r)>>>0);if(!i.hasNameForId(this.componentId,o)){var c=a(r,".".concat(o),void 0,this.componentId);i.insertRules(this.componentId,o,c)}t=yi(t,o),this.staticRulesId=o}else{for(var s=na(this.baseHash,a.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var g=Nd(xi(f,n,i,a));s=na(s,g+d),u+=g}}if(u){var v=$c(s>>>0);i.hasNameForId(this.componentId,v)||i.insertRules(this.componentId,v,a(u,".".concat(v),void 0,this.componentId)),t=yi(t,v)}}return t},e}(),c0=Ci.createContext(void 0);c0.Consumer;var jl={};function bR(e,n,i){var a=_s(e),t=e,r=!Rl(e),o=n.attrs,c=o===void 0?_o:o,s=n.componentId,u=s===void 0?function(k,P){var K=typeof k!="string"?"sc":Cd(k);jl[K]=(jl[K]||0)+1;var x="".concat(K,"-").concat(G1(Fo+K+jl[K]));return P?"".concat(P,"-").concat(x):x}(n.displayName,n.parentComponentId):s,d=n.displayName,f=d===void 0?function(k){return Rl(k)?"styled.".concat(k):"Styled(".concat(X1(k),")")}(e):d,g=n.displayName&&n.componentId?"".concat(Cd(n.displayName),"-").concat(n.componentId):n.componentId||u,v=a&&t.attrs?t.attrs.concat(c).filter(Boolean):c,j=n.shouldForwardProp;if(a&&t.shouldForwardProp){var R=t.shouldForwardProp;if(n.shouldForwardProp){var w=n.shouldForwardProp;j=function(k,P){return R(k,P)&&w(k,P)}}else j=R}var m=new OR(i,g,a?t.componentStyle:void 0);function p(k,P){return function(K,x,b){var F=K.attrs,D=K.componentStyle,q=K.defaultProps,$=K.foldedComponentIds,H=K.styledComponentId,W=K.target,U=Ci.useContext(c0),I=Td(),Z=K.shouldForwardProp||I.shouldForwardProp,S=Q1(x,U,q)||ja,T=function(ee,oe,Y){for(var G,cn=_e(_e({},oe),{className:void 0,theme:Y}),An=0;An<ee.length;An+=1){var At=ya(G=ee[An])?G(cn):G;for(var Bn in At)cn[Bn]=Bn==="className"?yi(cn[Bn],At[Bn]):Bn==="style"?_e(_e({},cn[Bn]),At[Bn]):At[Bn]}return oe.className&&(cn.className=yi(cn.className,oe.className)),cn}(F,x,S),E=T.as||W,_={};for(var A in T)T[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&T.theme===S||(A==="forwardedAs"?_.as=T.forwardedAs:Z&&!Z(A,E)||(_[A]=T[A]));var ue=function(ee,oe){var Y=Td(),G=ee.generateAndInjectStyles(oe,Y.styleSheet,Y.stylis);return G}(D,T),L=yi($,H);return ue&&(L+=" "+ue),T.className&&(L+=" "+T.className),_[Rl(E)&&!qp.has(E)?"class":"className"]=L,_.ref=b,O.createElement(E,_)}(h,k,P)}p.displayName=f;var h=Ci.forwardRef(p);return h.attrs=v,h.componentStyle=m,h.displayName=f,h.shouldForwardProp=j,h.foldedComponentIds=a?yi(t.foldedComponentIds,t.styledComponentId):"",h.styledComponentId=g,h.target=a?t.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=a?function(P){for(var K=[],x=1;x<arguments.length;x++)K[x-1]=arguments[x];for(var b=0,F=K;b<F.length;b++)Nc(P,F[b],!0);return P}({},t.defaultProps,k):k}}),zs(h,function(){return".".concat(h.styledComponentId)}),r&&n0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Ed(e,n){for(var i=[e[0]],a=0,t=n.length;a<t;a+=1)i.push(n[a],e[a+1]);return i}var Hd=function(e){return Object.assign(e,{isCss:!0})};function $R(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(ya(e)||Ot(e))return Hd(xi(Ed(_o,lo([e],n,!0))));var a=e;return n.length===0&&a.length===1&&typeof a[0]=="string"?xi(a):Hd(xi(Ed(a,n)))}function Lc(e,n,i){if(i===void 0&&(i=ja),!n)throw Et(1,n);var a=function(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(n,i,$R.apply(void 0,lo([t],r,!1)))};return a.attrs=function(t){return Lc(e,n,_e(_e({},i),{attrs:Array.prototype.concat(i.attrs,t).filter(Boolean)}))},a.withConfig=function(t){return Lc(e,n,_e(_e({},i),t))},a}var s0=function(e){return Lc(bR,e)},y=s0;qp.forEach(function(e){y[e]=s0(e)});const NR=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    width: 74vw;
    margin-left: 3vw;

    h1{
        font-size: 3vw;
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
    }
`,SR=y.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    width: 100%;
`,Bi=y.button`
    width: 30%;
    height: 15vw;
    border: 1vw solid ${e=>e.$bgColor};
    border-radius: 0.8vw;
    cursor: pointer;
    margin: 1vw;
`;function LR(){const e=Je(),{color:n}=C(c=>c.color),{bgColor:i,fontColor:a}=C(c=>c.mode),[,t]=O.useState(n),r=c=>{t(c),e(u1(c))};let o=Fi();return l.jsxs(NR,{$fontColor:a,$bgColor:i,children:[l.jsx(fi,{style:{backgroundColor:n},onClick:()=>o(-1),children:"Retour"}),l.jsx("h1",{style:{color:n},children:"ColorCustome"}),l.jsxs(SR,{children:[l.jsx(Bi,{$bgColor:i,onClick:()=>r("#F75D48"),style:{backgroundColor:"#F75D48"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#5448F7"),style:{backgroundColor:"#5448F7"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#FF0000"),style:{backgroundColor:"#FF0000"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#42e55b"),style:{backgroundColor:"#42e55b"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#FF4BC9"),style:{backgroundColor:"#FF4BC9"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#48B4F7"),style:{backgroundColor:"#48B4F7"}})]})]})}const TR=y.div`
    display: flex;
    flex-direction: column;
    color: ${e=>e.$fontColor};
    margin-left: 3vw;
    width: 74vw;
    gap: 1vw;
`,MR=y.div`
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
    }
`,ER=y.div`
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
    }
`,HR=y.div`
    display: flex;
    width: 76vw;
    gap: 1vw;
`,DR=y.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
`,FR=y.div`
    display: flex;
    width: 100%;
    height: 6vw;
    gap: 0.5vw;
    color: ${e=>e.$fontColor};
`,_R=y.h3`
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
`,zR=y.h3`
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
`,AR=y.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
`,BR=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
`,JR=y.h4`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
`,IR=y.p`
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
`,VR=y.div`
    display: flex;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
`,WR=y.div`
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
`,UR=y.h3`
    font-size: 2.5vw;
    height: 40%;
`,QR=y.h3`
    font-size: 2vw;
    height: 40%;
    color: ${e=>e.$color};
`,ur=y.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 3.5vw;
`,qR=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
`,ZR=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
`,YR=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 85%;
`,GR=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 25%;
`,XR=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 75%;
`,ej=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 35%;
`,nj=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
`,ij=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
`;function aj(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(o=>o.mode),{color:a}=C(o=>o.color),t=C(o=>o.totalData.kanji),r=C(o=>o.totalData.vocabulaire);return l.jsxs(TR,{children:[l.jsxs(MR,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("h1",{children:"NIHONGO"}),l.jsxs(ER,{$color:a,$mainBgColor:i,children:[l.jsx("span",{children:"日"}),l.jsx("span",{children:"本"}),l.jsx("span",{children:"語"})]})]}),l.jsxs(HR,{children:[l.jsxs(DR,{$bgColor:e,children:[l.jsxs(FR,{$fontColor:n,children:[l.jsx(_R,{$mainBgColor:i,children:"Actualité"}),l.jsx(zR,{$mainBgColor:i,$color:a,children:"ニュース"})]}),l.jsxs(AR,{children:[l.jsx(BR,{$mainBgColor:i,$color:a,children:"18/08"}),l.jsx(JR,{$mainBgColor:i,$fontColor:n,children:"Lancement de NIHONGO Alpha"})]}),l.jsx(IR,{$mainBgColor:i,$fontColor:n,children:"v01w32a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque. Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor. Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet."})]}),l.jsxs(VR,{$bgColor:e,children:[l.jsxs(WR,{$mainBgColor:i,$fontColor:n,children:[l.jsx(UR,{children:"Avancement"}),l.jsx(QR,{$color:a,children:"アドバンス"})]}),l.jsxs(ur,{children:[l.jsx(qR,{$mainBgColor:i,$fontColor:n,children:"Katakana"}),l.jsx(ZR,{$mainBgColor:i,$color:a,children:"1/6"})]}),l.jsxs(ur,{children:[l.jsx(YR,{$mainBgColor:i,$fontColor:n,children:"Nombre de vocabulaire"}),l.jsxs(GR,{$mainBgColor:i,$color:a,children:[r,"/?"]})]}),l.jsxs(ur,{children:[l.jsx(XR,{$mainBgColor:i,$fontColor:n,children:"Nombre de kanji"}),l.jsxs(ej,{$mainBgColor:i,$color:a,children:[t,"/2000"]})]}),l.jsxs(ur,{children:[l.jsx(nj,{$mainBgColor:i,$fontColor:n,children:"Hiragana"}),l.jsx(ij,{$mainBgColor:i,$color:a,children:"1/6"})]})]})]})]})}const tj="data:image/svg+xml,%3csvg%20width='43'%20height='72'%20viewBox='0%200%2043%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39%204L4%2036L39%2068'%20stroke='%23F75D48'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",rj="data:image/svg+xml,%3csvg%20width='74'%20height='70'%20viewBox='0%200%2074%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='2'%20width='36'%20height='68'%20fill='%23F75D48'/%3e%3crect%20x='41'%20y='18'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='60'%20y='18'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='29'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='8'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='38'%20y='20'%20width='36'%20height='50'%20fill='%23F75D48'/%3e%3cpath%20d='M54%2061C54%2059.8954%2054.8954%2059%2056%2059C57.1046%2059%2058%2059.8954%2058%2061V70H54V61Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M16%2061C16%2059.8954%2016.8954%2059%2018%2059C19.1046%2059%2020%2059.8954%2020%2061V70H16V61Z'%20fill='%23F7F7F2'/%3e%3crect%20x='4'%20y='44'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='4'%20y='28'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='42'%20y='43'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='4'%20y='12'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='42'%20y='27'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='10'%20y='44'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='10'%20y='28'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='48'%20y='43'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='10'%20y='12'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='48'%20y='27'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='16'%20y='44'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='16'%20y='28'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='54'%20y='43'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='16'%20y='12'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='54'%20y='27'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='22'%20y='44'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='22'%20y='58'%20width='10'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='42'%20y='58'%20width='10'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='60'%20y='58'%20width='10'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='4'%20y='58'%20width='10'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='22'%20y='28'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='60'%20y='43'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='22'%20y='12'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='60'%20y='27'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='28'%20y='44'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='28'%20y='28'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='66'%20y='43'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='28'%20y='12'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3crect%20x='66'%20y='27'%20width='4'%20height='11'%20fill='%23F7F7F2'/%3e%3c/svg%3e",oj="data:image/svg+xml,%3csvg%20width='74'%20height='70'%20viewBox='0%200%2074%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='2'%20width='36'%20height='68'%20fill='%23F75D48'/%3e%3crect%20x='41'%20y='18'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='60'%20y='18'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='29'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='8'%20width='3'%20height='2'%20fill='%23F75D48'/%3e%3crect%20x='38'%20y='20'%20width='36'%20height='50'%20fill='%23F75D48'/%3e%3cpath%20d='M54%2061C54%2059.8954%2054.8954%2059%2056%2059C57.1046%2059%2058%2059.8954%2058%2061V70H54V61Z'%20fill='%23353535'/%3e%3cpath%20d='M16%2061C16%2059.8954%2016.8954%2059%2018%2059C19.1046%2059%2020%2059.8954%2020%2061V70H16V61Z'%20fill='%23353535'/%3e%3crect%20x='4'%20y='44'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='4'%20y='28'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='42'%20y='43'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='4'%20y='12'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='42'%20y='27'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='10'%20y='44'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='10'%20y='28'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='48'%20y='43'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='10'%20y='12'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='48'%20y='27'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='16'%20y='44'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='16'%20y='28'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='54'%20y='43'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='16'%20y='12'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='54'%20y='27'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='22'%20y='44'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='22'%20y='58'%20width='10'%20height='11'%20fill='%23353535'/%3e%3crect%20x='42'%20y='58'%20width='10'%20height='11'%20fill='%23353535'/%3e%3crect%20x='60'%20y='58'%20width='10'%20height='11'%20fill='%23353535'/%3e%3crect%20x='4'%20y='58'%20width='10'%20height='11'%20fill='%23353535'/%3e%3crect%20x='22'%20y='28'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='60'%20y='43'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='22'%20y='12'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='60'%20y='27'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='28'%20y='44'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='28'%20y='28'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='66'%20y='43'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='28'%20y='12'%20width='4'%20height='11'%20fill='%23353535'/%3e%3crect%20x='66'%20y='27'%20width='4'%20height='11'%20fill='%23353535'/%3e%3c/svg%3e",lj=y.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    max-width: 76vw;
    height: 20vw;
`,cj=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 30%;
`,sj=y(fi)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 50%;
    max-width: 100%;
    padding: 1vw;
    &:hover{
        background-color: #858585;
    }
    div{
        display: flex;
        flex-direction: column;
        span:nth-child(1){
            font-size: 0.7vw;
        }
        span:nth-child(2){
            font-weight: 700;
            font-size: 1.5vw;
        }
        span{
            font-size: 1.2vw;
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        fill: ${e=>e.$color}; ///////////////////////////////////////////////changer la couleur du svg ????
    }
`,uj=y(fi)`
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
    &:hover{
        background-color: #858585;
    }
    div{
        display: flex;
        flex-direction: column;
        span{
            font-size: 1.2vw;
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        fill: ${e=>e.$color}; ///////////////////////////////////////////////changer la couleur du svg ????
    }
`,dj=y.div`
    display: flex;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 70%;
`,gj=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    span{
        font-size: 2vw;
    }
`,fj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
   
    span{
        font-size: 1.8vw;
        width: 10vw;
    }
`,pj=y.div`
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
    }
`;function Ka(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(u=>u.mode),{color:a}=C(u=>u.color),t=C(u=>u.mode),r=ge(),c=(()=>{switch(r.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};case"/Dictionnaire/Kanji":case"/Dictionnaire/Hiragana":case"/Dictionnaire/Katakana":case"/Dictionnaire/Vocabulaire":case"/Dictionnaire/Nombres":return{titleFurigana1:"じ",titleFurigana2:"しょ",titleKanji1:"辞",titleKanji2:"書",titleFr:"Dictionnaire"};default:return"Accueil"}})();let s=Fi();return l.jsxs(lj,{children:[l.jsxs(cj,{$bgColor:e,children:[l.jsxs(sj,{$mainBgColor:i,$fontColor:n,onClick:()=>s(-1),children:[l.jsx("img",{src:tj}),l.jsxs("div",{children:[l.jsx("span",{children:"もど"}),l.jsx("span",{children:"戻る"}),l.jsx("span",{children:"Retour"})]})]}),l.jsxs(uj,{$mainBgColor:i,$fontColor:n,to:"/",children:[l.jsx("img",{src:t.mode==="light"?rj:oj}),l.jsxs("div",{children:[l.jsx("span",{children:"サイトホーム"}),l.jsx("span",{children:"Accueil du site"})]})]})]}),l.jsx(dj,{$bgColor:e,children:l.jsxs(gj,{$mainBgColor:i,$fontColor:n,children:[l.jsxs(fj,{$color:a,children:[l.jsx("span",{children:c.titleFurigana1}),l.jsx("span",{style:{width:r.pathname==="/Hiragana"||r.pathname==="/Katakana"?"0vw":"9vw"},children:c.titleFurigana2})]}),l.jsxs(pj,{children:[l.jsx("span",{children:c.titleKanji1}),l.jsx("span",{style:{width:r.pathname==="/Hiragana"||r.pathname==="/Katakana"?"0vw":"9vw"},children:c.titleKanji2})]}),l.jsx("span",{children:c.titleFr})]})})]})}const mj="data:image/svg+xml,%3csvg%20width='74'%20height='95'%20viewBox='0%200%2074%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42%205C42%202.23858%2039.7614%20-1.20706e-07%2037%200C34.2386%201.20706e-07%2032%202.23858%2032%205L42%205ZM33.4645%2093.5355C35.4171%2095.4882%2038.5829%2095.4882%2040.5355%2093.5355L72.3553%2061.7157C74.308%2059.7631%2074.308%2056.5973%2072.3553%2054.6447C70.4027%2052.692%2067.2369%2052.692%2065.2843%2054.6447L37%2082.9289L8.71573%2054.6447C6.76311%2052.692%203.59728%2052.692%201.64466%2054.6447C-0.307958%2056.5973%20-0.307958%2059.7631%201.64466%2061.7157L33.4645%2093.5355ZM32%205L32%2090L42%2090L42%205L32%205Z'%20fill='%23F75D48'/%3e%3c/svg%3e",hj=y.div`
    display: flex;
    gap: 1vw;
    max-width: 76vw;
`,vj=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    width: 55%;
    height: 21.5vw;
    padding: 1vw;
    border-radius: 0.8vw;
`,Rj=y.div`
    display: flex;
    width: 100%;
    gap: 0.6vw;
    height: 5vw;
`,jj=y.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 50%; 
    font-size: 1.5vw;
`,yj=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 50%;
    font-size: 1vw;
`,kj=y.div`
    display: flex;
    height: 16vw;
    gap: 0.6vw;
`,wj=y(fi)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    &:hover{
        background-color: #858585;
    }
`,Pj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1.3vw;
        width: 5vw;
    }
`,xj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 5vw;
        font-weight: 700;
        width: 5vw;
        transform: translateY(-0.7vw);
    }
`,Cj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 45%;
    height: 21.5vw;
    padding: 1vw;
`,Kj=y.div`
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
    img{
        width: 4vw;
        height: 4vw;
    }
    &:hover{
        background-color: #858585;
    }
`,Oj=y.div`
    text-align:center;
    font-size: 1.5vw;
`,bj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1vw;
        width: 3vw;
    }
`,$j=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 3vw;
        width: 3vw;
        transform: translateY(-0.7vw);
    }
`;function Ht(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(c=>c.mode),{color:a}=C(c=>c.color),t=ge(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};default:return"Accueil"}})();return l.jsxs(hj,{children:[l.jsxs(vj,{$bgColor:e,children:[l.jsxs(Rj,{children:[l.jsx(jj,{$mainBgColor:i,$fontColor:n,children:"Dictionnaire"}),l.jsxs(yj,{$color:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleFurigana2})]}),l.jsxs("div",{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})]}),l.jsx(kj,{children:l.jsxs(wj,{to:`/Dictionnaire/${o.titleFr}`,$mainBgColor:i,$fontColor:n,children:[l.jsxs(Pj,{$color:a,children:[l.jsx("span",{children:"じ"}),l.jsx("span",{children:"しょ"})]}),l.jsxs(xj,{children:[l.jsx("span",{children:"辞"}),l.jsx("span",{children:"書"})]})]})})]}),l.jsx(Cj,{$bgColor:e,children:l.jsxs(Kj,{$mainBgColor:i,$fontColor:n,children:[l.jsx(Oj,{children:"Exercices"}),l.jsxs("div",{children:[l.jsxs(bj,{$color:a,children:[l.jsx("span",{children:"えん"}),l.jsx("span",{children:"しゅう"})]}),l.jsxs($j,{children:[l.jsx("span",{children:"演"}),l.jsx("span",{children:"習"})]})]}),l.jsx("img",{src:mj})]})})]})}var u0={exports:{}},Nj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sj=Nj,Lj=Sj;function d0(){}function g0(){}g0.resetWarningCache=d0;var Tj=function(){function e(a,t,r,o,c,s){if(s!==Lj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:g0,resetWarningCache:d0};return i.PropTypes=i,i};u0.exports=Tj();var Mj=u0.exports;const z=Id(Mj),Ej="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%239ED7FF'/%3e%3c/svg%3e",Hj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='30.6667'%20y='30.6666'%20width='30.6667'%20height='30.6667'%20fill='%23FFC370'/%3e%3cpath%20d='M0%205C0%202.23857%202.23858%200%205%200H30.6667V30.6667H0V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%2061.3334H91.9999V87C91.9999%2089.7615%2089.7613%2092%2086.9999%2092H61.3333V61.3334Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%200H86.9999C89.7613%200%2091.9999%202.23858%2091.9999%205V30.6667H61.3333V0Z'%20fill='%23FFC370'/%3e%3c/svg%3e",Dj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2063.4054H23.5946C26.356%2063.4054%2028.5946%2065.644%2028.5946%2068.4054V92H0V63.4054Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M63.4054%200H92V28.5946H68.4054C65.644%2028.5946%2063.4054%2026.356%2063.4054%2023.5946V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",Dd="data:image/svg+xml,%3csvg%20width='109'%20height='53'%20viewBox='0%200%20109%2053'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99999%209L54.5%2044L100%209'%20stroke='%23F75D48'%20stroke-width='17'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Fj=y.div`
    display: flex;
    width: 100%;
    height: 35vw;
    gap: 1vw;
    margin-right: 3vw;
`,_j=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    padding: 1vw;
`,zj=y.div`
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
    span{
        font-size: 2vw;
        text-align: center;
    }
`,Aj=y.div`
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
        img{
            width: 5vw;
            height: 3.5vw;
        }
    }
    button:first-child{
        rotate: 180deg;
    }
    p{
        font-size: 5.7vw;
        font-weight: 700;
        margin: 0;
        
        span{
            font-size: 3vw;
            width: 2vw;
            font-weight: 700;
            color: ${e=>e.$color};
        }
    }
`,Bj=y.button`
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border: none;
    cursor: pointer;
    font-size: 1.5vw;
    width: 80%;
    height: 15%;
    border-radius: 0.5vw;
    &:hover{
        background-color: #858585;
       }
`,Jj=y.div`
    display: flex;  
    flex-direction: column;
    gap: 0.6vw;
    width: 67.8%;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
`,Ij=y.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.6vw;
    height: 6vw;
`,Vj=y.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
`,Wj=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    width: 50%;
    border-radius: 0.5vw;
    color: #F7F7F2;
`,Uj=y.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
    span{
        width: 2vw;
    }
`,Qj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    font-weight: 700;
    span{
        width: 2vw;
        transform: translateY(-0.3vw);
    }
`,qj=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
`,Zj=y.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 35%;
    padding: 0;
    &:hover{
        background-color: #858585;
    }
`,Yj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-left: 2vw;
    img{
        width: 5vw;
        height: 5vw;
    }
    span{
        font-size: 1.7vw;
    }
`,Gj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    margin-right: 2vw;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vw;
        background-color: ${e=>e.$color};
        width: 15vw;
        height: 7vw;
        border-radius: 0.5vw;
        color: #F7F7F2;
    }
`,$r=({difficulte:e,icon:n,children:i})=>{const a=Je(),{fontColor:t,mainBgColor:r}=C(s=>s.mode),{color:o}=C(s=>s.color),c=()=>{a(p1(e))};return l.jsxs(Zj,{$mainBgColor:r,$fontColor:t,onClick:c,children:[l.jsxs(Yj,{children:[l.jsx("img",{src:n}),l.jsx("span",{children:e})]}),l.jsx(Gj,{$mainBgColor:r,$color:o,children:i})]})};$r.propTypes={difficulte:z.string.isRequired,icon:z.string.isRequired,children:z.node};function Dt(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(g=>g.mode),{color:a}=C(g=>g.color),t=Je(),[r,o]=O.useState(C(g=>g.parametersExercice.exerciceTimer)),[c,s]=O.useState(C(g=>g.parametersExercice.exerciceTimerActive));O.useEffect(()=>{t(h1(r))},[r,t]);const u=()=>{s(!c),t(v1(!c))},d=()=>{o(r+1)},f=()=>{o(r-1)};return l.jsxs(Fj,{children:[l.jsx(_j,{$bgColor:e,children:l.jsxs(zj,{$mainBgColor:i,$fontColor:n,children:[l.jsx("span",{children:"Temps par question"}),l.jsxs(Aj,{$color:a,children:[l.jsx("button",{onClick:d,children:l.jsx("img",{src:Dd})})," ",l.jsxs("p",{children:[r,l.jsx("span",{children:"S"})]}),l.jsx("button",{onClick:f,children:l.jsx("img",{src:Dd})})]}),l.jsx(Bj,{onClick:u,$color:a,children:c?"Activer":"Désactiver"})]})}),l.jsxs(Jj,{$bgColor:e,children:[l.jsxs(Ij,{children:[l.jsx(Vj,{$mainBgColor:i,$fontColor:n,children:"Difficulté"}),l.jsxs(Wj,{$color:a,children:[l.jsxs(Uj,{children:[l.jsx("span",{children:"こん"}),l.jsx("span",{children:"なん"})]}),l.jsxs(Qj,{children:[l.jsx("span",{children:"困"}),l.jsx("span",{children:"難"})]})]})]}),l.jsxs(qj,{children:[l.jsxs($r,{difficulte:"Débutant",icon:Ej,children:[l.jsx("span",{children:"Hiragana/Katakana"}),l.jsx("span",{children:"Rōmaji"})]}),l.jsx($r,{difficulte:"Intermédiaire",icon:Hj,children:l.jsx("span",{children:"Hiragana/Katakana"})}),l.jsx($r,{difficulte:"Confirmer",icon:Dj})]})]})]})}const Xj=y.div`
    display: flex;
    width: calc(100% - 3vw);
    margin-right: 3vw;
    gap: 1vw;
    height: 28vw;
`,yl=y.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    div:hover {
        background-color: #858585;
    }
`,kl=y.div`
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
`,wl=y.span`
    font-size: 1.5vw;
    position: absolute;
    top: 1vw;
    left: 50%;
    transform: translateX(-50%);
    color: ${e=>e.$color};
`,ey=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 4vw;
    font-weight: 700;
    color: ${e=>e.$fontColor};
`,ny=y.span`
    font-size: 8vw;
    font-weight: 700;
`,iy=y.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
`,ay=y.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
`;function Ft(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(f=>f.mode),{color:a}=C(f=>f.color),t=Je(),r=ge(),c=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),s=Fi(),u=f=>{t(yd(f))},d=f=>{t(yd(f)),s(`/choisir-ses/${c.modeTitle}`),window.scrollTo(0,0)};return l.jsxs(Xj,{children:[l.jsx(yl,{$bgColor:e,onClick:()=>u("Aléatoire"),children:l.jsxs(kl,{$mainBgColor:i,$fontColor:n,children:[l.jsx(wl,{$color:a,children:"Mode de jeu"}),l.jsxs(ey,{children:[l.jsx("span",{children:"ランダム"}),l.jsx("span",{children:"Aléatoire"})]})]})}),r.pathname.includes("/Vocabulaire")||r.pathname.includes("/Kanji")?l.jsx(yl,{$bgColor:e,onClick:()=>u("N5"),children:l.jsxs(kl,{$mainBgColor:i,$fontColor:n,children:[l.jsx(wl,{$color:a,children:"Mode de jeu"}),l.jsx(ny,{children:"N5"}),l.jsx(iy,{children:"JLPT"})]})}):null,l.jsx(yl,{$bgColor:e,onClick:()=>d("Choisir ses questions"),children:l.jsxs(kl,{$mainBgColor:i,$fontColor:n,children:[l.jsx(wl,{$color:a,children:"Mode de jeu"}),l.jsxs(ay,{children:["Choisir ses ",c.modeTitle]})]})})]})}const ty=y.div`
    display: flex;
    width: calc(100% - 5vw);
    height: 20vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    gap: 0.6vw;
    margin-right: 3vw;
`,ry=y.span`
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
`,oy=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    min-width: 60%;
    height: 100%;
    color: ${e=>e.$fontColor};
`,ly=y.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 50%;
`,Fd=y.button`
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
    &:hover{
        background-color: #858585;
    }
`,cy=y.button`
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
    &:hover{
        background-color: #858585;
    }
`;function _t(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(u=>u.mode),{color:a}=C(u=>u.color),t=Je(),r=ge(),c=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),s=u=>{t(m1(u))};return l.jsxs(ty,{$bgColor:e,children:[l.jsxs(ry,{$color:a,$fontColor:n,children:["Nombre de ",c.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsxs(oy,{$mainBgColor:i,children:[l.jsxs(ly,{children:[l.jsx(Fd,{$fontColor:n,$mainBgColor:i,onClick:()=>s(10),children:"10"}),l.jsx(Fd,{$fontColor:n,$mainBgColor:i,onClick:()=>s(20),children:"20"})]}),l.jsx(cy,{$fontColor:n,$mainBgColor:i,onClick:()=>s(30),children:"30"})]})]})}const sy="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='37'%20width='18.5'%20height='18.5'%20fill='%23F7F7F2'/%3e%3crect%20x='37'%20width='24'%20height='19'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='8'%20width='18'%20height='46'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='17'%20width='18'%20height='20'%20fill='%23F7F7F2'/%3e%3cpath%20d='M56%200H69C71.7614%200%2074%202.23858%2074%205V19H56V0Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='48'%20fill='%23F7F7F2'/%3e%3crect%20x='12'%20y='56'%20width='25'%20height='18'%20fill='%23F7F7F2'/%3e%3cpath%20d='M0%2056H19V74H5C2.23858%2074%200%2071.7614%200%2069V56Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='19'%20fill='%23F7F7F2'/%3e%3c/svg%3e",uy=y.div`
    display: flex;
    padding: 1vw;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    margin-right: 3vw;
    width: calc(100% - 5vw);
    height: 25vw;
`,dy=y(fi)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 30%;
    height: 100%;
    img{
        width: 7vw;
        height: 7vw;
        transform: translateY(0.7vw);
    }
`,gy=y.div`
    font-size: 2vw;
    font-weight: 700;
`,fy=y.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
    }
`,py=y.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
`,my=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
`,hy=y.div`
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
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
    }
    span:nth-child(2){
        color: ${e=>e.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
    }
`,vy=y.div`
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
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
    }
    span:nth-child(2){
        color: ${e=>e.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
    }
`,Ry=y.div`
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
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        right: 1vw;
        width: 70%;
        text-align: end;
    }
    span:nth-child(2){
        color: ${e=>e.$color};
        position: absolute;
        bottom: 1vw;
        left: 2vw;
        font-size: 5vw;
        font-weight: 700;
    }
`;function zt(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(d=>d.mode),{color:a}=C(d=>d.color),t=C(d=>d.parametersExercice.exerciceDifficulté),r=C(d=>d.parametersExercice.exerciceModeDeJeu),o=C(d=>d.parametersExercice.exerciceNumber),c=ge(),u=(()=>{switch(c.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})();return l.jsxs(uy,{$bgColor:e,children:[l.jsxs(dy,{$color:a,to:`/Exercices/${u.modeTitle}`,children:[l.jsx(gy,{children:"Commencer"}),l.jsx("img",{src:sy}),l.jsxs(fy,{children:[l.jsx("span",{children:"はじ"}),l.jsxs(py,{children:[l.jsx("span",{children:"始"}),l.jsx("span",{children:"める"})]})]})]}),l.jsxs(my,{children:[l.jsxs(hy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Mode de jeu"}),l.jsx("span",{children:r})]}),l.jsxs(vy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Difficulté"}),l.jsx("span",{children:t})]})]}),l.jsxs(Ry,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsxs("span",{children:["Nombre de ",u.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsx("span",{children:o})]})]})}const jy=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;function yy(){return l.jsxs(jy,{children:[l.jsx(Ka,{}),l.jsx(Ht,{}),l.jsx(Dt,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(zt,{})]})}const ky=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;function wy(){return l.jsxs(ky,{children:[l.jsx(Ka,{}),l.jsx(Ht,{}),l.jsx(Dt,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(zt,{})]})}const Py=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    width: calc(100% - 3vw);
    height: 100%;
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;
        width: 24.2%;
        height: 15vw;
        background-color: ${e=>e.$bgColor};
        border-radius: 0.8vw;
        padding: 1vw;
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
        }
        p {
            font-size: 2vw;
            color: ${e=>e.$fontColor};
            text-transform: capitalize;
        }
        p:first-child {
            color: ${e=>e.$color};
            font-weight: 700;
        }
        &:hover {
            div{
                background-color: #858585;
            }
        }
    }
`;function f0(){const e=ge(),n=Je(),{bgColor:i,fontColor:a,mainBgColor:t}=C(u=>u.mode),{color:r}=C(u=>u.color),c=(()=>{switch(e.pathname){case"/Katakana":return{normal:"キ",accents:"ギ",combinaison:"ギャ",tout:"キギギャ"};case"/Hiragana":return{normal:"き",accents:"ぎ",combinaison:"きゃ",tout:"きぎきゃ"};default:return null}})();if(!c)return l.jsx("div",{children:"Chemin non pris en charge"});const s=u=>{n(_p(u))};return l.jsxs(Py,{$bgColor:i,$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("button",{onClick:()=>s("normal"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.normal}),l.jsx("p",{children:"normal"})]})}),l.jsx("button",{onClick:()=>s("accents"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.accents}),l.jsx("p",{children:"accents"})]})}),l.jsx("button",{onClick:()=>s("combinaison"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.combinaison}),l.jsx("p",{children:"combinaison"})]})}),l.jsx("button",{onClick:()=>s("tout"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.tout}),l.jsx("p",{children:"tout"})]})})]})}const xy=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;function Cy(){return l.jsxs(xy,{children:[l.jsx(Ka,{}),l.jsx(Ht,{}),l.jsx(Dt,{}),l.jsx(f0,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(zt,{})]})}const Ky=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;function Oy(){return l.jsxs(Ky,{children:[l.jsx(Ka,{}),l.jsx(Ht,{}),l.jsx(Dt,{}),l.jsx(f0,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(zt,{})]})}const by=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;function $y(){return l.jsxs(by,{children:[l.jsx(Ka,{}),l.jsx(Ht,{}),l.jsx(Dt,{}),l.jsx(_t,{}),l.jsx(Ft,{}),l.jsx(zt,{})]})}const Ny=y.div`
    display: flex;
    gap: 1vw;
    width: calc(100% - 21vw);
    height: 23.4vw;
 `,_d=y(fi)`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 50%;
    &:hover{
        div{
            background-color: #858585;
        }
    }
`,zd=y.div`
    display: flex;
    gap: 1.5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 100%;
    span:nth-child(1){
        font-size: 1.5vw;
        color: ${e=>e.$color};
    }
    span:nth-child(2){
        font-size: 9vw;
        font-weight: 700;
        max-height: 9vw;
        transform: translateY(-2vw);
    }
    span:nth-child(3){
        font-size: 1.5vw;
        font-weight: 500;
    }
`;function Sy(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(c=>c.mode),{color:a}=C(c=>c.color),t=ge(),o=(()=>{switch(t.pathname){case"/Dictionnaire/Kanji":return{titleFurigana1:"ひらがな",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Hiragana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"カタカナ",titleKanji2:"ア",titleFr2:"katakana",link2:"/Dictionnaire/Katakana"};case"/Dictionnaire/Katakana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Vocabulaire":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ばんごう",titleKanji2:"番号",titleFr2:"Nombres",link2:"/Dictionnaire/Nombres"};case"/Dictionnaire/Nombres":return{titleFurigana1:"ごい",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"かんじ",titleKanji2:"漢字",titleFr2:"kanji",link2:"/Dictionnaire/Kanji"};default:return"Accueil"}})();return l.jsxs(Ny,{children:[l.jsx(_d,{$bgColor:e,to:o.link1,children:l.jsxs(zd,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{children:o.titleFr1})]})}),l.jsx(_d,{$bgColor:e,to:o.link2,children:l.jsxs(zd,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana2}),l.jsx("span",{children:o.titleKanji2}),l.jsx("span",{children:o.titleFr2})]})})]})}const Ly="data:image/svg+xml,%3csvg%20width='51'%20height='51'%20viewBox='0%200%2051%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='18.983'%20cy='18.9829'%20r='11'%20transform='rotate(-45%2018.983%2018.9829)'%20stroke='%23F75D48'%20stroke-width='4.84598'/%3e%3crect%20x='23.7218'%20y='27.2935'%20width='5.32537'%20height='22.0876'%20rx='2.66269'%20transform='rotate(-45%2023.7218%2027.2935)'%20fill='%23F75D48'%20stroke='%23F75D48'/%3e%3c/svg%3e",fe="data:image/svg+xml,%3csvg%20width='68'%20height='68'%20viewBox='0%200%2068%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.4456'%20y='14.4956'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.4456%2014.4956)'%20fill='%23F75D48'/%3e%3crect%20x='14.4956'%20y='48.437'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.4956%2048.437)'%20fill='%23F75D48'/%3e%3c/svg%3e",Ty=y.div`
    position: relative;
    min-width: 60%;
    width: 100%;
    max-width: 100%;
    height: calc(3vw - (0.15vw * 2)); ;
    display: flex;
    align-items: center;
    img{
        position: absolute;
        right: 1vw;
        top: 50%;
        transform: translateY(-50%);
        width: 3vw;
    }
`,My=y.input` 
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
    &::placeholder{
        color: ${e=>e.$fontColor};
        font-size: 2vw;
    }
`;function qa({onSearchChange:e}){const{fontColor:n,mainBgColor:i}=C(g=>g.mode),{color:a}=C(g=>g.color),t=C(g=>g.search.searchText),r=ge(),[o,c]=O.useState(""),u=(()=>{switch(r.pathname){case"/Dictionnaire/Kanji":case"/choisir-ses/Kanji":return{titleFr:"Kanji"};case"/Dictionnaire/Hiragana":case"/choisir-ses/Hiragana":return{titleFr:"Hiragana"};case"/Dictionnaire/Katakana":case"/choisir-ses/Katakana":return{titleFr:"Katakana"};case"/Dictionnaire/Vocabulaire":case"/choisir-ses/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Dictionnaire/Nombres":case"/choisir-ses/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),d=g=>{c(g.target.value),e(g.target.value)},f=()=>{c(""),e("")};return l.jsxs(Ty,{children:[l.jsx(My,{type:"text",placeholder:`Rechercher un ${u.titleFr}`,value:t||o,onChange:d,$color:a,$mainBgColor:i,$fontColor:n}),t?l.jsx("img",{src:fe,onClick:f}):l.jsx("img",{src:Ly})]})}qa.propTypes={onSearchChange:z.func.isRequired};const Ey=y.div`
display: flex;
gap: 0.6vw;
height: 100%;
min-width: calc(40% - 0.7vw);
    button{
        width: 25%;
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        font-size: 2.5vw;
        font-weight: 700;
        &:hover{
            background-color: #858585;
        }
    }
`;function Tc({filterJlpt:e}){const[n,i]=O.useState("N5"),a=c=>{const s=c.target.value;n===s?(i(""),e("")):(i(s),e(s))},{fontColor:t,mainBgColor:r}=C(c=>c.mode),{color:o}=C(c=>c.color);return l.jsxs(Ey,{name:"jlpt",id:"jlpt",value:n,$mainBgColor:r,$fontColor:t,$color:o,children:[l.jsx("button",{value:"N5",onClick:a,children:"N5"}),l.jsx("button",{value:"N4",onClick:a,children:"N4"}),l.jsx("button",{value:"N3",onClick:a,children:"N3"}),l.jsx("button",{value:"N2",onClick:a,children:"N2"}),l.jsx("button",{value:"N1",onClick:a,children:"N1"})]})}Tc.propTypes={filterJlpt:z.func.isRequired};const Hy=y.div`
display: flex;
gap: 0.6vw;
height: 100%;
min-width: calc(40% - 0.7vw);
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        font-size: 1.8vw;
        font-weight: 700;
        &:hover{
            background-color: #858585;
        }
    }
    button:nth-child(1){
        width: 60%;
    }
    button:nth-child(2){
        width: 40%;
    }
`;function p0({filterKana:e}){const{fontColor:n,mainBgColor:i}=C(c=>c.mode),{color:a}=C(c=>c.color),[t,r]=O.useState("N5"),o=c=>{const s=c.target.value;t===s?(r(""),e("")):(r(s),e(s))};return l.jsxs(Hy,{name:"Kana",id:"Kana",value:t,$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("button",{value:"Combinaison",onClick:o,children:"Les combinaisons"}),l.jsx("button",{value:"Accents",onClick:o,children:"Les accents"})]})}p0.propTypes={filterKana:z.func.isRequired};const Dy=[{filtre:"nombres et quantificateurs"},{filtre:"verbes"},{filtre:"verbes d’action"},{filtre:"adjectifs"},{filtre:"nom"},{filtre:"mots de liaison et particules"},{filtre:"expressions temporelles"},{filtre:"formules de politesse"},{filtre:"expressions idiomatiques"},{filtre:"langue informelle et argot"},{filtre:"émotions et sentiments"},{filtre:"les pays"},{filtre:"les membres de la famille"},{filtre:"les vêtements"},{filtre:"les couleurs"},{filtre:"le corps humain"},{filtre:"la nourriture"},{filtre:"santé et bien-être"},{filtre:"activités et loisirs"},{filtre:"les animaux"},{filtre:"nature et environnement"},{filtre:"temps et saisons"},{filtre:"culture et traditions japonaises"},{filtre:"lieux et directions"},{filtre:"les moyens de transport"},{filtre:"objets de bureau/école"},{filtre:"le matériel domestique"},{filtre:"les pièces de la maison"},{filtre:"vocabulaire lié au travail"},{filtre:"profession et métiers"},{filtre:"technologie et gadgets"}],Fy={filtres:Dy},_y="data:image/svg+xml,%3csvg%20width='87'%20height='27'%20viewBox='0%200%2087%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L43.5%2023L83%204'%20stroke='%23F7F7F2'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",zy=y.div`
    display: flex;
    gap: 0.6vw;
    max-height: 8.3vw;
    height: 100%;
    width: calc(100% - 5vw);
    border-radius: 0.8vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
`,Ay=y.span`
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
`,By=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
`,Jy=y.div`
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
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${e=>e.$color};
        color:#F7F7F2;
        font-size: 1.5vw;
        font-weight: 700;
        &:hover{
            background-color: #858585;
        }
    }
`,Iy=y.button`
    max-width: 100%;
    max-height: 2vw;
    padding: 1vw;
    border-radius: 0.5vw;
    background-color: ${e=>e.$color};
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 3.5vw;
        height: 3.5vw;
    }
`;function m0({filterVocabulaire:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=C(d=>d.mode),{color:t}=C(d=>d.color),[r,o]=O.useState("Tous"),c=Fy.filtres.map(d=>d.filtre),s=d=>{const f=d.target.value;r===f?(o(""),e("")):(o(f),e(f))},u=()=>{const d=document.querySelector(".VocabulaireFilterButtonContainer"),f=document.querySelector(".VocabulaireFilterContainer"),g=document.querySelector(".MoreButtonIcon");d&&f?d.style.overflow==="visible"?(d.style.overflow="hidden",f.style.maxHeight="8.3vw",g.style.transform="rotate(0deg)"):(d.style.overflow="visible",f.style.maxHeight="100%",g.style.transform="rotate(180deg)"):console.error("Element with class VocabulaireFilterButtonContainer or VocabulaireFilterContainer not found")};return l.jsxs(zy,{className:"VocabulaireFilterContainer",$bgColor:n,children:[l.jsx(Ay,{$fontColor:i,$mainBgColor:a,children:"Filtre"}),l.jsxs(By,{$mainBgColor:a,children:[l.jsx(Jy,{className:"VocabulaireFilterButtonContainer",$mainBgColor:a,$color:t,onChange:s,value:r,children:c.map(d=>l.jsx("button",{value:d,onClick:s,children:d},d))}),l.jsx(Iy,{$color:t,onClick:u,children:l.jsx("img",{className:"MoreButtonIcon",src:_y,alt:"More"})})]})]})}m0.propTypes={filterVocabulaire:z.func.isRequired};const dr=y.div`
    display: flex;
    align-items: center;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(100% - 5vw);
    height: 5vw;
`,Vy=y.div`
    display: flex;
    gap: 1vw;
    flex-direction: column;
`;function h0(){const{bgColor:e}=C(c=>c.mode),n=Je(),i=ge(),a=c=>{n(Ms(c.toLowerCase()))},t=c=>{n(g1(c))},r=c=>{n(Es(c))},o=c=>{n(f1(c))};return l.jsxs("div",{id:"recherche",children:[(i.pathname==="/Dictionnaire/Kanji"||i.pathname==="/choisir-ses/Kanji")&&l.jsxs(dr,{$bgColor:e,children:[l.jsx(qa,{onSearchChange:a}),l.jsx(Tc,{filterJlpt:t})]}),(i.pathname==="/Dictionnaire/Vocabulaire"||i.pathname==="/choisir-ses/Vocabulaire")&&l.jsxs(Vy,{children:[l.jsxs(dr,{$bgColor:e,children:[l.jsx(qa,{onSearchChange:a}),l.jsx(Tc,{filterJlpt:t})]}),l.jsx("div",{children:l.jsx(m0,{filterVocabulaire:o})})]}),(i.pathname==="/Dictionnaire/Katakana"||i.pathname==="/Dictionnaire/Hiragana"||i.pathname==="/choisir-ses/Katakana"||i.pathname==="/choisir-ses/Hiragana")&&l.jsxs(dr,{$bgColor:e,children:[l.jsx(qa,{onSearchChange:a}),l.jsx(p0,{filterKana:r})]}),(i.pathname==="/Dictionnaire/Nombres"||i.pathname==="/choisir-ses/Nombres")&&l.jsx(dr,{$bgColor:e,children:l.jsx(qa,{onSearchChange:a})})]})}const Wy=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
`,Uy=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.39%;
    height: 20vw;
`,Qy=y.p`
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
    span{
        font-weight: bold;
        margin-right: 0.5vw;
        font-style: italic;
    }
`,qy=y.div`
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
    h2{
        font-size: 3.8vw;
        font-weight: bold;
        color: ${e=>e.$color};
    }
    p{
        font-size: 1.2vw;
        position: absolute;
        text-transform: capitalize;
        font-weight: 700;
    }
    p:first-child{
        top: 0.5vw;
        right: 1vw;
    }
    p:last-child{
        bottom: 0.8vw;
        left:50% ;
        transform: translateX(-50%);
    }
`,Zy=y.div`
    display: flex;
    gap: 0.6vw;
    height: 25%;
    width: 100%;
    p{
        font-size: 1vw;
        border-radius: 0.5vw;
        display: flex;
        align-items: center;
        
        span{
            font-weight: bold;
            margin-right: 0.5vw;
            font-style: italic;
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
`,Yy=y.div`
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
    }
`;function As({kanjiList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=C(d=>d.mode),{color:t}=C(d=>d.color),r=C(d=>d.dataChoice.kanji),o=C(d=>d.parametersExercice.exerciceNumber),c=Je(),s=ge(),u=d=>{(r.includes(d)||r.length<o)&&s.pathname==="/choisir-ses/Kanji"&&c(R1(d))};return l.jsx(Wy,{children:Array.isArray(e)&&e.length>0?e.map(d=>l.jsxs(Uy,{$bgColor:n,onClick:()=>u(d),style:{backgroundColor:r.includes(d)?"#858585":n,cursor:"pointer"},children:[l.jsxs(Qy,{$fontColor:i,$mainBgColor:a,children:[l.jsx("span",{children:"Kun"})," ",d.KunReading.join(", ")]}),l.jsxs(qy,{$fontColor:i,$mainBgColor:a,$color:t,children:[d.SecondaryMeaning&&l.jsx("p",{children:d.SecondaryMeaning}),l.jsx("h2",{children:d.Kanji}),l.jsx("p",{children:d.Meaning})]}),l.jsxs(Zy,{$fontColor:i,$mainBgColor:a,$color:t,children:[l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"})," ",d.JLPTLevel]}),l.jsxs("p",{children:[l.jsx("span",{children:"On"})," ",d.OnReading.join(", ")]})]})]},d.id)):l.jsx(Yy,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}As.propTypes={kanjiList:z.array.isRequired};const Kn="/Nihongo-V2/assets/icon-audio-Dmg04iGg.svg",Gy=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
`,Xy=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.39%;
    height: 20vw;
`,e3=y.p`
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
`,n3=y.p`
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
`,Ea=y.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
`,Ha=y.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 2.5vw;
    }
`,kn=y.div`
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    button {
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${e=>e.$fontColor};
    }
    img {
        width: 3vw;
    }
`,i3=y.div`
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
    }
`;function Bs({hiraganaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=C(g=>g.mode),{color:t}=C(g=>g.color),r=C(g=>g.dataChoice.hiragana),o=C(g=>g.parametersExercice.exerciceNumber),c=Je(),s=ge(),u="",d=g=>{c(Ms(g)),c(Es(u))},f=g=>{(r.includes(g)||r.length<o)&&s.pathname==="/choisir-ses/Hiragana"&&c(k1(g))};return l.jsx(Gy,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var v,j,R,w,m,p,h,k;return l.jsxs(Xy,{id:"item",$bgColor:n,onClick:()=>f(g),style:{backgroundColor:r.includes(g)?"#858585":n,cursor:"pointer"},children:[l.jsx(e3,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(n3,{$color:t,$mainBgColor:a,children:g.Type==="Hiragana"?g.Hiragana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Hiragana:g.Handakuten}),g.Type==="Hiragana"?l.jsxs(Ea,{children:[l.jsx(Ha,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>{var P;return d((P=g.Accent)==null?void 0:P.Dakuten)},$fontColor:i,$mainBgColor:a,children:((v=g.Accent)==null?void 0:v.Dakuten)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:(j=g.Accent)==null?void 0:j.Dakuten})}),l.jsx(kn,{onClick:()=>{var P;return d((P=g.Accent)==null?void 0:P.Handakuten)},$fontColor:i,$mainBgColor:a,children:((R=g.Accent)==null?void 0:R.Handakuten)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:(w=g.Accent)==null?void 0:w.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Ea,{children:[l.jsx(Ha,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>d(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((m=g.Accent)==null?void 0:m.Hiragana)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Hiragana})}),l.jsx(kn,{onClick:()=>d(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Ea,{children:[l.jsx(Ha,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>d(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((p=g.Accent)==null?void 0:p.Hiragana)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Hiragana})}),l.jsx(kn,{onClick:()=>d(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Dakuten===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Ea,{children:[l.jsx(Ha,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{onClick:()=>d(g.Hiragana1),$fontColor:i,$mainBgColor:a,children:((h=g.Accent)==null?void 0:h.Hiragana1)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Hiragana1})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:((k=g.Accent)==null?void 0:k.Hiragana2)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Hiragana2})})]}):l.jsxs(Ea,{children:[l.jsx(Ha,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:l.jsx("img",{src:fe,alt:"icon"})}),l.jsx(kn,{$fontColor:i,$mainBgColor:a,children:l.jsx("img",{src:fe,alt:"icon"})})]})]},g.id)}):l.jsx(i3,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Bs.propTypes={hiraganaList:z.array.isRequired};const a3=[{id:1,Type:"Hiragana",Hiragana:"あ",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:2,Type:"Hiragana",Hiragana:"い",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:3,Type:"Hiragana",Hiragana:"う",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:4,Type:"Hiragana",Hiragana:"え",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:5,Type:"Hiragana",Hiragana:"お",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:6,Type:"Hiragana",Hiragana:"か",Romaji:"ka",Accent:{Dakuten:"が",Handakuten:null},Combinaison:[]},{id:7,Type:"Hiragana",Hiragana:"き",Romaji:"ki",Accent:{Dakuten:"ぎ",Handakuten:null},Combinaison:[{Hiragana:"きゃ",Romaji:"kya"},{Hiragana:"きゅ",Romaji:"kyu"},{Hiragana:"きょ",Romaji:"kyo"},{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:8,Type:"Hiragana",Hiragana:"く",Romaji:"ku",Accent:{Dakuten:"ぐ",Handakuten:null},Combinaison:[]},{id:9,Type:"Hiragana",Hiragana:"け",Romaji:"ke",Accent:{Dakuten:"げ",Handakuten:null},Combinaison:[]},{id:10,Type:"Hiragana",Hiragana:"こ",Romaji:"ko",Accent:{Dakuten:"ご",Handakuten:null},Combinaison:[]},{id:11,Type:"Hiragana",Hiragana:"さ",Romaji:"sa",Accent:{Dakuten:"ざ",Handakuten:null},Combinaison:[]},{id:12,Type:"Hiragana",Hiragana:"し",Romaji:"shi",Accent:{Dakuten:"じ",Handakuten:null},Combinaison:[{Hiragana:"しゃ",Romaji:"sha"},{Hiragana:"しゅ",Romaji:"shu"},{Hiragana:"しょ",Romaji:"sho"},{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:13,Type:"Hiragana",Hiragana:"す",Romaji:"su",Accent:{Dakuten:"ず",Handakuten:null},Combinaison:[]},{id:14,Type:"Hiragana",Hiragana:"せ",Romaji:"se",Accent:{Dakuten:"ぜ",Handakuten:null},Combinaison:[]},{id:15,Type:"Hiragana",Hiragana:"そ",Romaji:"so",Accent:{Dakuten:"ぞ",Handakuten:null},Combinaison:[]},{id:16,Type:"Hiragana",Hiragana:"た",Romaji:"ta",Accent:{Dakuten:"だ",Handakuten:null},Combinaison:[]},{id:17,Type:"Hiragana",Hiragana:"ち",Romaji:"chi",Accent:{Dakuten:"ぢ",Handakuten:null},Combinaison:[{Hiragana:"ちゃ",Romaji:"cha"},{Hiragana:"ちゅ",Romaji:"chu"},{Hiragana:"ちょ",Romaji:"cho"}]},{id:18,Type:"Hiragana",Hiragana:"つ",Romaji:"tsu",Accent:{Dakuten:"づ",Handakuten:null},Combinaison:[]},{id:19,Type:"Hiragana",Hiragana:"て",Romaji:"te",Accent:{Dakuten:"で",Handakuten:null},Combinaison:[]},{id:20,Type:"Hiragana",Hiragana:"と",Romaji:"to",Accent:{Dakuten:"ど",Handakuten:null},Combinaison:[]},{id:21,Type:"Hiragana",Hiragana:"な",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:22,Type:"Hiragana",Hiragana:"に",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"にゃ",Romaji:"nya"},{Hiragana:"にゅ",Romaji:"nyu"},{Hiragana:"にょ",Romaji:"nyo"}]},{id:23,Type:"Hiragana",Hiragana:"ぬ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:24,Type:"Hiragana",Hiragana:"ね",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:25,Type:"Hiragana",Hiragana:"の",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:26,Type:"Hiragana",Hiragana:"は",Romaji:"ha",Accent:{Dakuten:"ば",Handakuten:"ぱ"},Combinaison:[]},{id:27,Type:"Hiragana",Hiragana:"ひ",Romaji:"hi",Accent:{Dakuten:"び",Handakuten:"ぴ"},Combinaison:[{Hiragana:"ひゃ",Romaji:"hya"},{Hiragana:"ひゅ",Romaji:"hyu"},{Hiragana:"ひょ",Romaji:"hyo"},{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"},{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:28,Type:"Hiragana",Hiragana:"ふ",Romaji:"fu",Accent:{Dakuten:"ぶ",Handakuten:"ぷ"},Combinaison:[]},{id:29,Type:"Hiragana",Hiragana:"へ",Romaji:"he",Accent:{Dakuten:"べ",Handakuten:"ぺ"},Combinaison:[]},{id:30,Type:"Hiragana",Hiragana:"ほ",Romaji:"ho",Accent:{Dakuten:"ぼ",Handakuten:"ぽ"},Combinaison:[]},{id:31,Type:"Hiragana",Hiragana:"ま",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:32,Type:"Hiragana",Hiragana:"み",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"みゃ",Romaji:"mya"},{Hiragana:"みゅ",Romaji:"myu"},{Hiragana:"みょ",Romaji:"myo"}]},{id:33,Type:"Hiragana",Hiragana:"む",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:34,Type:"Hiragana",Hiragana:"め",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:35,Type:"Hiragana",Hiragana:"も",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:36,Type:"Hiragana",Hiragana:"や",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:37,Type:"Hiragana",Hiragana:"ゆ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:38,Type:"Hiragana",Hiragana:"よ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:39,Type:"Hiragana",Hiragana:"ら",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:40,Type:"Hiragana",Hiragana:"り",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"りゃ",Romaji:"rya"},{Hiragana:"りゅ",Romaji:"ryu"},{Hiragana:"りょ",Romaji:"ryo"}]},{id:41,Type:"Hiragana",Hiragana:"る",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:42,Type:"Hiragana",Hiragana:"れ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:43,Type:"Hiragana",Hiragana:"ろ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:44,Type:"Hiragana",Hiragana:"わ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:45,Type:"Hiragana",Hiragana:"を",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:46,Type:"Hiragana",Hiragana:"ん",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]}],t3=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"が",Romaji:"ga",Hiragana:"か",Handakuten:null,Combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ぎ",Romaji:"gi",Hiragana:"き",Handakuten:null,Combinaison:[{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"ぐ",Romaji:"gu",Hiragana:"く",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"げ",Romaji:"ge",Hiragana:"け",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ご",Romaji:"go",Hiragana:"こ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ざ",Romaji:"za",Hiragana:"さ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"じ",Romaji:"ji",Hiragana:"し",Handakuten:null,Combinaison:[{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ず",Romaji:"zu",Hiragana:"す",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ぜ",Romaji:"ze",Hiragana:"せ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ぞ",Romaji:"zo",Hiragana:"そ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"だ",Romaji:"da",Hiragana:"た",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ぢ",Romaji:"ji",Hiragana:"ち",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"づ",Romaji:"zu",Hiragana:"つ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"で",Romaji:"de",Hiragana:"て",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ど",Romaji:"do",Hiragana:"と",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"ば",Romaji:"ba",Hiragana:"は",Handakuten:"ぱ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"び",Romaji:"bi",Hiragana:"ひ",Handakuten:"ぴ",Combinaison:[{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ぶ",Romaji:"bu",Hiragana:"ふ",Handakuten:"ぷ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"べ",Romaji:"be",Hiragana:"へ",Handakuten:"ぺ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ぼ",Romaji:"bo",Hiragana:"ほ",Handakuten:"ぽ",combinaison:[]}],r3=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"ぱ",Romaji:"pa",Hiragana:"は",Dakuten:"ば",combinaison:[]},{id:68,Type:"Accents",Nom:"Handakuten",Handakuten:"ぴ",Romaji:"pi",Hiragana:"ひ",Dakuten:"び",Combinaison:[{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:69,Type:"Accents",Nom:"Handakuten",Handakuten:"ぷ",Romaji:"pu",Hiragana:"ふ",Dakuten:"ぶ",combinaison:[]},{id:70,Type:"Accents",Nom:"Handakuten",Handakuten:"ぺ",Romaji:"pe",Hiragana:"へ",Dakuten:"べ",combinaison:[]},{id:71,Type:"Accents",Nom:"Handakuten",Handakuten:"ぽ",Romaji:"po",Hiragana:"ほ",Dakuten:"ぼ",combinaison:[]}],o3=[{id:72,Type:"Combinaison",Hiragana:"きゃ",Romaji:"kya",Hiragana1:"き",Hiragana2:"や"},{id:73,Type:"Combinaison",Hiragana:"きゅ",Romaji:"kyu",Hiragana1:"き",Hiragana2:"ゆ"},{id:74,Type:"Combinaison",Hiragana:"きょ",Romaji:"kyo",Hiragana1:"き",Hiragana2:"よ"},{id:75,Type:"Combinaison",Hiragana:"ぎゃ",Romaji:"gya",Hiragana1:"ぎ",Hiragana2:"や"},{id:76,Type:"Combinaison",Hiragana:"ぎゅ",Romaji:"gyu",Hiragana1:"ぎ",Hiragana2:"ゆ"},{id:77,Type:"Combinaison",Hiragana:"ぎょ",Romaji:"gyo",Hiragana1:"ぎ",Hiragana2:"よ"},{id:78,Type:"Combinaison",Hiragana:"しゃ",Romaji:"sha",Hiragana1:"し",Hiragana2:"や"},{id:79,Type:"Combinaison",Hiragana:"しゅ",Romaji:"shu",Hiragana1:"し",Hiragana2:"ゆ"},{id:80,Type:"Combinaison",Hiragana:"しょ",Romaji:"sho",Hiragana1:"し",Hiragana2:"よ"},{id:81,Type:"Combinaison",Hiragana:"じゃ",Romaji:"ja",Hiragana1:"じ",Hiragana2:"や"},{id:82,Type:"Combinaison",Hiragana:"じゅ",Romaji:"ju",Hiragana1:"じ",Hiragana2:"ゆ"},{id:83,Type:"Combinaison",Hiragana:"じょ",Romaji:"jo",Hiragana1:"じ",Hiragana2:"よ"},{id:84,Type:"Combinaison",Hiragana:"ちゃ",Romaji:"cha",Hiragana1:"ち",Hiragana2:"や"},{id:85,Type:"Combinaison",Hiragana:"ちゅ",Romaji:"chu",Hiragana1:"ち",Hiragana2:"ゆ"},{id:86,Type:"Combinaison",Hiragana:"ちょ",Romaji:"cho",Hiragana1:"ち",Hiragana2:"よ"},{id:87,Type:"Combinaison",Hiragana:"ひゃ",Romaji:"hya",Hiragana1:"ひ",Hiragana2:"や"},{id:88,Type:"Combinaison",Hiragana:"ひゅ",Romaji:"hyu",Hiragana1:"ひ",Hiragana2:"ゆ"},{id:89,Type:"Combinaison",Hiragana:"ひょ",Romaji:"hyo",Hiragana1:"ひ",Hiragana2:"よ"},{id:90,Type:"Combinaison",Hiragana:"びゃ",Romaji:"bya",Hiragana1:"び",Hiragana2:"や"},{id:91,Type:"Combinaison",Hiragana:"びゅ",Romaji:"byu",Hiragana1:"び",Hiragana2:"ゆ"},{id:92,Type:"Combinaison",Hiragana:"びょ",Romaji:"byo",Hiragana1:"び",Hiragana2:"よ"},{id:93,Type:"Combinaison",Hiragana:"ぴゃ",Romaji:"pya",Hiragana1:"ぴ",Hiragana2:"や"},{id:94,Type:"Combinaison",Hiragana:"ぴゅ",Romaji:"pyu",Hiragana1:"ぴ",Hiragana2:"ゆ"},{id:95,Type:"Combinaison",Hiragana:"ぴょ",Romaji:"pyo",Hiragana1:"ぴ",Hiragana2:"よ"},{id:96,Type:"Combinaison",Hiragana:"にゃ",Romaji:"nya",Hiragana1:"に",Hiragana2:"や"},{id:97,Type:"Combinaison",Hiragana:"にゅ",Romaji:"nyu",Hiragana1:"に",Hiragana2:"ゆ"},{id:98,Type:"Combinaison",Hiragana:"にょ",Romaji:"nyo",Hiragana1:"に",Hiragana2:"よ"},{id:99,Type:"Combinaison",Hiragana:"みゃ",Romaji:"mya",Hiragana1:"み",Hiragana2:"や"},{id:100,Type:"Combinaison",Hiragana:"みゅ",Romaji:"myu",Hiragana1:"み",Hiragana2:"ゆ"},{id:101,Type:"Combinaison",Hiragana:"みょ",Romaji:"myo",Hiragana1:"み",Hiragana2:"よ"},{id:102,Type:"Combinaison",Hiragana:"りゃ",Romaji:"rya",Hiragana1:"り",Hiragana2:"や"},{id:103,Type:"Combinaison",Hiragana:"りゅ",Romaji:"ryu",Hiragana1:"り",Hiragana2:"ゆ"},{id:104,Type:"Combinaison",Hiragana:"りょ",Romaji:"ryo",Hiragana1:"り",Hiragana2:"よ"}],$e={Hiragana:a3,Dakuten:t3,Handakuten:r3,Combinaison:o3},l3=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
`,c3=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.39%;
    height: 20vw;
`,s3=y.p`
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
`,u3=y.p`
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
`,Da=y.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
`,Fa=y.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 2.5vw;
    }
`,wn=y.div`
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    button{
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${e=>e.$fontColor};
    }
    img{
        width: 3vw;
    }
`,d3=y.div`
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
    }
`;function Js({katakanaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=C(g=>g.mode),{color:t}=C(g=>g.color),r=C(g=>g.dataChoice.katakana),o=C(g=>g.parametersExercice.exerciceNumber),c=Je(),s=ge(),u="",d=g=>{c(Ms(g)),c(Es(u))},f=g=>{(r.includes(g)||r.length<o)&&s.pathname==="/choisir-ses/Katakana"&&c(y1(g))};return l.jsx(l3,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var v,j,R,w;return l.jsxs(c3,{$bgColor:n,onClick:()=>f(g),style:{backgroundColor:r.includes(g)?"#858585":n,cursor:"pointer"},children:[l.jsx(s3,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(u3,{$color:t,$mainBgColor:a,children:g.Type==="Katakana"?g.Katakana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Katakana:g.Handakuten}),g.Type==="Katakana"?l.jsxs(Da,{children:[l.jsx(Fa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>{var m;return d((m=g.Accent)==null?void 0:m.Dakuten)},$fontColor:i,$mainBgColor:a,children:((v=g.Accent)==null?void 0:v.Dakuten)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:(j=g.Accent)==null?void 0:j.Dakuten})}),l.jsx(wn,{onClick:()=>{var m;return d((m=g.Accent)==null?void 0:m.Handakuten)},$fontColor:i,$mainBgColor:a,children:((R=g.Accent)==null?void 0:R.Handakuten)===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:(w=g.Accent)==null?void 0:w.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Da,{children:[l.jsx(Fa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>d(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Katakana})}),l.jsx(wn,{onClick:()=>d(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Da,{children:[l.jsx(Fa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>d(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Katakana})}),l.jsx(wn,{onClick:()=>d(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Handakuten||g.Dakuten===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Da,{children:[l.jsx(Fa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>d(g.Katakana1),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana1===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Katakana1})}),l.jsx(wn,{$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana2===null?l.jsx("img",{src:fe,alt:"icon"}):l.jsx("button",{children:g.Katakana2})})]}):l.jsxs(Da,{children:[l.jsx(Fa,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsxs(wn,{$fontColor:i,$mainBgColor:a,children:[l.jsx("img",{src:fe,alt:"icon"})," "]}),l.jsxs(wn,{$fontColor:i,$mainBgColor:a,children:[l.jsx("img",{src:fe,alt:"icon"})," "]})]})]},g.id)}):l.jsx(d3,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Js.propTypes={katakanaList:z.array.isRequired};const g3=[{id:1,Type:"Katakana",Katakana:"ア",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:2,Type:"Katakana",Katakana:"イ",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:3,Type:"Katakana",Katakana:"ウ",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:4,Type:"Katakana",Katakana:"エ",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:5,Type:"Katakana",Katakana:"オ",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:6,Type:"Katakana",Katakana:"カ",Romaji:"ka",Accent:{Dakuten:"ガ",Handakuten:null},combinaison:[]},{id:7,Type:"Katakana",Katakana:"キ",Romaji:"ki",Accent:{Dakuten:"ギ",Handakuten:null},combinaison:[{Katakana:"キャ",Romaji:"kya"},{Katakana:"キュ",Romaji:"kyu"},{Katakana:"キョ",Romaji:"kyo"},{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:8,Type:"Katakana",Katakana:"ク",Romaji:"ku",Accent:{Dakuten:"グ",Handakuten:null},combinaison:[]},{id:9,Type:"Katakana",Katakana:"ケ",Romaji:"ke",Accent:{Dakuten:"ゲ",Handakuten:null},combinaison:[]},{id:10,Type:"Katakana",Katakana:"コ",Romaji:"ko",Accent:{Dakuten:"ゴ",Handakuten:null},combinaison:[]},{id:11,Type:"Katakana",Katakana:"サ",Romaji:"sa",Accent:{Dakuten:"ザ",Handakuten:null},combinaison:[]},{id:12,Type:"Katakana",Katakana:"シ",Romaji:"shi",Accent:{Dakuten:"ジ",Handakuten:null},combinaison:[{Katakana:"シャ",Romaji:"sha"},{Katakana:"シュ",Romaji:"shu"},{Katakana:"ショ",Romaji:"sho"},{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:13,Type:"Katakana",Katakana:"ス",Romaji:"su",Accent:{Dakuten:"ズ",Handakuten:null},combinaison:[]},{id:14,Type:"Katakana",Katakana:"セ",Romaji:"se",Accent:{Dakuten:"ゼ",Handakuten:null},combinaison:[]},{id:15,Type:"Katakana",Katakana:"ソ",Romaji:"so",Accent:{Dakuten:"ゾ",Handakuten:null},combinaison:[]},{id:16,Type:"Katakana",Katakana:"タ",Romaji:"ta",Accent:{Dakuten:"ダ",Handakuten:null},combinaison:[]},{id:17,Type:"Katakana",Katakana:"チ",Romaji:"chi",Accent:{Dakuten:"ヂ",Handakuten:null},combinaison:[{Katakana:"チャ",Romaji:"cha"},{Katakana:"チュ",Romaji:"chu"},{Katakana:"チョ",Romaji:"cho"}]},{id:18,Type:"Katakana",Katakana:"ツ",Romaji:"tsu",Accent:{Dakuten:"ヅ",Handakuten:null},combinaison:[]},{id:19,Type:"Katakana",Katakana:"テ",Romaji:"te",Accent:{Dakuten:"デ",Handakuten:null},combinaison:[]},{id:20,Type:"Katakana",Katakana:"ト",Romaji:"to",Accent:{Dakuten:"ド",Handakuten:null},combinaison:[]},{id:21,Type:"Katakana",Katakana:"ナ",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:22,Type:"Katakana",Katakana:"ニ",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ニャ",Romaji:"nya"},{Katakana:"ニュ",Romaji:"nyu"},{Katakana:"ニョ",Romaji:"nyo"}]},{id:23,Type:"Katakana",Katakana:"ヌ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:24,Type:"Katakana",Katakana:"ネ",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:25,Type:"Katakana",Katakana:"ノ",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:26,Type:"Katakana",Katakana:"ハ",Romaji:"ha",Accent:{Dakuten:"バ",Handakuten:"パ"},combinaison:[]},{id:27,Type:"Katakana",Katakana:"ヒ",Romaji:"hi",Accent:{Dakuten:"ビ",Handakuten:"ピ"},combinaison:[{Katakana:"ヒャ",Romaji:"hya"},{Katakana:"ヒュ",Romaji:"hyu"},{Katakana:"ヒョ",Romaji:"hyo"},{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"},{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:28,Type:"Katakana",Katakana:"フ",Romaji:"fu",Accent:{Dakuten:"ブ",Handakuten:"プ"},combinaison:[]},{id:29,Type:"Katakana",Katakana:"ヘ",Romaji:"he",Accent:{Dakuten:"ベ",Handakuten:"ペ"},combinaison:[]},{id:30,Type:"Katakana",Katakana:"ホ",Romaji:"ho",Accent:{Dakuten:"ボ",Handakuten:"ポ"},combinaison:[]},{id:31,Type:"Katakana",Katakana:"マ",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:32,Type:"Katakana",Katakana:"ミ",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ミャ",Romaji:"mya"},{Katakana:"ミュ",Romaji:"myu"},{Katakana:"ミョ",Romaji:"myo"}]},{id:33,Type:"Katakana",Katakana:"ム",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:34,Type:"Katakana",Katakana:"メ",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:35,Type:"Katakana",Katakana:"モ",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:36,Type:"Katakana",Katakana:"ヤ",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:37,Type:"Katakana",Katakana:"ユ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:38,Type:"Katakana",Katakana:"ヨ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:39,Type:"Katakana",Katakana:"ラ",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:40,Type:"Katakana",Katakana:"リ",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"リャ",Romaji:"rya"},{Katakana:"リュ",Romaji:"ryu"},{Katakana:"リョ",Romaji:"ryo"}]},{id:41,Type:"Katakana",Katakana:"ル",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:42,Type:"Katakana",Katakana:"レ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:43,Type:"Katakana",Katakana:"ロ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:44,Type:"Katakana",Katakana:"ワ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:45,Type:"Katakana",Katakana:"ヲ",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:46,Type:"Katakana",Katakana:"ン",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},combinaison:[]}],f3=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"ガ",Romaji:"ga",Katakana:"カ",Handakuten:null,combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ギ",Romaji:"gi",Katakana:"キ",Handakuten:null,combinaison:[{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"グ",Romaji:"gu",Katakana:"ク",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"ゲ",Romaji:"ge",Katakana:"ケ",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ゴ",Romaji:"go",Katakana:"コ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ザ",Romaji:"za",Katakana:"サ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"ジ",Romaji:"ji",Katakana:"シ",Handakuten:null,combinaison:[{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ズ",Romaji:"zu",Katakana:"ス",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ゼ",Romaji:"ze",Katakana:"セ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ゾ",Romaji:"zo",Katakana:"ソ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"ダ",Romaji:"da",Katakana:"タ",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ヂ",Romaji:"ji",Katakana:"チ",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"ヅ",Romaji:"zu",Katakana:"ツ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"デ",Romaji:"de",Katakana:"テ",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ド",Romaji:"do",Katakana:"ト",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"バ",Romaji:"ba",Katakana:"ハ",Handakuten:"パ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"ビ",Romaji:"bi",Katakana:"ヒ",Handakuten:"ピ",combinaison:[{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ブ",Romaji:"byu",Katakana:"フ",Handakuten:"プ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"ベ",Romaji:"be",Katakana:"ヘ",Handakuten:"ペ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ボ",Romaji:"bo",Katakana:"ホ",Handakuten:"ポ",combinaison:[]}],p3=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"パ",Romaji:"pa",Katakana:"ハ",Dakuten:"バ",combinaison:[]},{id:68,Nom:"Handakuten",Type:"Accents",Handakuten:"ピ",Romaji:"pi",Katakana:"ヒ",Dakuten:"ビ",combinaison:[{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:69,Nom:"Handakuten",Type:"Accents",Handakuten:"プ",Romaji:"pu",Katakana:"フ",Dakuten:"ブ",combinaison:[]},{id:70,Nom:"Handakuten",Type:"Accents",Handakuten:"ペ",Romaji:"pe",Katakana:"ヘ",Dakuten:"ベ",combinaison:[]},{id:71,Nom:"Handakuten",Type:"Accents",Handakuten:"ポ",Romaji:"po",Katakana:"ホ",Dakuten:"ボ",combinaison:[]}],m3=[{id:72,Type:"Combinaison",Katakana:"キャ",Romaji:"kya",Katakana1:"キ",Katakana2:"ヤ"},{id:73,Type:"Combinaison",Katakana:"キュ",Romaji:"kyu",Katakana1:"キ",Katakana2:"ユ"},{id:74,Type:"Combinaison",Katakana:"キョ",Romaji:"kyo",Katakana1:"キ",Katakana2:"ヨ"},{id:75,Type:"Combinaison",Katakana:"ギャ",Romaji:"gya",Katakana1:"ギ",Katakana2:"ヤ"},{id:76,Type:"Combinaison",Katakana:"ギュ",Romaji:"gyu",Katakana1:"ギ",Katakana2:"ユ"},{id:77,Type:"Combinaison",Katakana:"ギョ",Romaji:"gyo",Katakana1:"ギ",Katakana2:"ヨ"},{id:78,Type:"Combinaison",Katakana:"シャ",Romaji:"sha",Katakana1:"シ",Katakana2:"ヤ"},{id:79,Type:"Combinaison",Katakana:"シュ",Romaji:"shu",Katakana1:"シ",Katakana2:"ユ"},{id:80,Type:"Combinaison",Katakana:"ショ",Romaji:"sho",Katakana1:"シ",Katakana2:"ヨ"},{id:81,Type:"Combinaison",Katakana:"ジャ",Romaji:"ja",Katakana1:"ジ",Katakana2:"ヤ"},{id:82,Type:"Combinaison",Katakana:"ジュ",Romaji:"ju",Katakana1:"ジ",Katakana2:"ユ"},{id:83,Type:"Combinaison",Katakana:"ジョ",Romaji:"jo",Katakana1:"ジ",Katakana2:"ヨ"},{id:84,Type:"Combinaison",Katakana:"チャ",Romaji:"cha",Katakana1:"チ",Katakana2:"ヤ"},{id:85,Type:"Combinaison",Katakana:"チュ",Romaji:"chu",Katakana1:"チ",Katakana2:"ユ"},{id:86,Type:"Combinaison",Katakana:"チョ",Romaji:"cho",Katakana1:"チ",Katakana2:"ヨ"},{id:87,Type:"Combinaison",Katakana:"ニャ",Romaji:"nya",Katakana1:"ニ",Katakana2:"ヤ"},{id:88,Type:"Combinaison",Katakana:"ニュ",Romaji:"nyu",Katakana1:"ニ",Katakana2:"ユ"},{id:89,Type:"Combinaison",Katakana:"ニョ",Romaji:"nyo",Katakana1:"ニ",Katakana2:"ヨ"},{id:90,Type:"Combinaison",Katakana:"ヒャ",Romaji:"hya",Katakana1:"ヒ",Katakana2:"ヤ"},{id:91,Type:"Combinaison",Katakana:"ヒュ",Romaji:"hyu",Katakana1:"ヒ",Katakana2:"ユ"},{id:92,Type:"Combinaison",Katakana:"ヒョ",Romaji:"hyo",Katakana1:"ヒ",Katakana2:"ヨ"},{id:93,Type:"Combinaison",Katakana:"ビャ",Romaji:"bya",Katakana1:"ビ",Katakana2:"ヤ"},{id:94,Type:"Combinaison",Katakana:"ビュ",Romaji:"byu",Katakana1:"ビ",Katakana2:"ユ"},{id:95,Type:"Combinaison",Katakana:"ビョ",Romaji:"byo",Katakana1:"ビ",Katakana2:"ヨ"},{id:96,Type:"Combinaison",Katakana:"ピャ",Romaji:"pya",Katakana1:"ピ",Katakana2:"ヤ"},{id:97,Type:"Combinaison",Katakana:"ピュ",Romaji:"pyu",Katakana1:"ピ",Katakana2:"ユ"},{id:98,Type:"Combinaison",Katakana:"ピョ",Romaji:"pyo",Katakana1:"ピ",Katakana2:"ヨ"},{id:99,Type:"Combinaison",Katakana:"ミャ",Romaji:"mya",Katakana1:"ミ",Katakana2:"ヤ"},{id:100,Type:"Combinaison",Katakana:"ミュ",Romaji:"myu",Katakana1:"ミ",Katakana2:"ユ"},{id:101,Type:"Combinaison",Katakana:"ミョ",Romaji:"myo",Katakana1:"ミ",Katakana2:"ヨ"},{id:102,Type:"Combinaison",Katakana:"リャ",Romaji:"rya",Katakana1:"リ",Katakana2:"ヤ"},{id:103,Type:"Combinaison",Katakana:"リュ",Romaji:"ryu",Katakana1:"リ",Katakana2:"ユ"},{id:104,Type:"Combinaison",Katakana:"リョ",Romaji:"ryo",Katakana1:"リ",Katakana2:"ヨ"}],Ne={Katakana:g3,Dakuten:f3,Handakuten:p3,Combinaison:m3},h3=y.div`
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
    }
`,v3=y.div`
    display: flex;
    gap: 0.6vw;
    flex-wrap: wrap;
    width:calc(100% - 3vw);
`,R3=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 47.5%;
    height: 20vw;
`,j3=y.div`
    display: flex;
    gap: 0.6vw;
    height: 33%;
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
`,y3=y.div`
    display: flex;
    gap: 0.6vw;
    height: 40%;
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
        }
        
    }
`,k3=y.div`
    display: flex;
    gap: 0.6vw;
    height: 23%;
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
        }
    }
`;function Is({vocabulaireList:e=[]}){const{bgColor:n,fontColor:i,mainBgColor:a}=C(d=>d.mode),{color:t}=C(d=>d.color),r=C(d=>d.dataChoice.vocabulaire),o=C(d=>d.parametersExercice.exerciceNumber),c=Je(),s=ge(),u=d=>{(r.includes(d)||r.length<o)&&s.pathname==="/choisir-ses/Vocabulaire"&&c(j1(d))};return l.jsx(v3,{children:Array.isArray(e)&&e.length>0?e.map(d=>l.jsxs(R3,{$bgColor:n,onClick:()=>u(d),style:{backgroundColor:r.includes(d)?"#858585":n,cursor:"pointer"},children:[l.jsxs(j3,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[d.kanji," ",l.jsx("span",{children:"Kanji"})]}),l.jsxs("p",{children:[d.hiragana," ",l.jsx("span",{children:"Hiragana"})]})]}),l.jsxs(y3,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[d.francais," ",l.jsx("span",{children:"Français"})]}),l.jsxs("p",{children:[d.Romaji," ",l.jsx("span",{children:"Romaji"})]})]}),l.jsxs(k3,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:Array.isArray(d.categorie)&&d.categorie[0]}),Array.isArray(d.categorie)&&d.categorie[1]&&l.jsx("span",{children:d.categorie[1]}),Array.isArray(d.categorie)&&d.categorie[2]&&l.jsx("span",{children:d.categorie[2]})]}),l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"}),d.niveau]})]})]},d.id)):l.jsx(h3,{$fontColor:i,$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Is.propTypes={vocabulaireList:z.array.isRequired};const v0="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23F7F7F2'/%3e%3crect%20x='19.6904'%20y='14.9575'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23F7F7F2'/%3e%3c/svg%3e",R0="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23353535'/%3e%3crect%20x='19.6904'%20y='14.957'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23353535'/%3e%3c/svg%3e",w3=y.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 10vw;
`,P3=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,x3=y.button`
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
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    img{
        width: 2.6vw;
        height: 2.6vw;
        resize: none;
    }
`;function C3(){const{mainBgColor:e}=C(v=>v.mode),{color:n}=C(v=>v.color),i=ge(),a=C(v=>v.search.searchText),t=C(v=>v.search.jlptLevel),r=C(v=>v.search.kanaType),o=C(v=>v.mode),c=C(v=>v.search.vocabulaireCategorie),s=To.kanji.filter(v=>{var j,R;return(((j=v.Meaning)==null?void 0:j.toLowerCase().includes(a))||((R=v.SecondaryMeaning)==null?void 0:R.toLowerCase().includes(a)))&&(t===""||v.JLPTLevel===t)}).sort((v,j)=>{var m,p,h,k,P,K,x,b,F,D;const R=((m=v.Kanji)==null?void 0:m.toLowerCase().startsWith(a))||((p=v.OnReading)==null?void 0:p.some(q=>q.toLowerCase().startsWith(a)))||((h=v.KunReading)==null?void 0:h.some(q=>q.toLowerCase().startsWith(a)))||((k=v.Meaning)==null?void 0:k.toLowerCase().startsWith(a))||((P=v.SecondaryMeaning)==null?void 0:P.toLowerCase().startsWith(a)),w=((K=j.Kanji)==null?void 0:K.toLowerCase().startsWith(a))||((x=j.OnReading)==null?void 0:x.some(q=>q.toLowerCase().startsWith(a)))||((b=j.KunReading)==null?void 0:b.some(q=>q.toLowerCase().startsWith(a)))||((F=j.Meaning)==null?void 0:F.toLowerCase().startsWith(a))||((D=j.SecondaryMeaning)==null?void 0:D.toLowerCase().startsWith(a));return R&&!w?-1:!R&&w?1:0}),u=[...$e.Hiragana,...$e.Dakuten,...$e.Handakuten,...$e.Combinaison].filter(v=>{var j,R,w,m;return(((j=v.Hiragana)==null?void 0:j.toLowerCase().includes(a))||((R=v.Dakuten)==null?void 0:R.toLowerCase().includes(a))||((w=v.Handakuten)==null?void 0:w.toLowerCase().includes(a))||((m=v.Romaji)==null?void 0:m.toLowerCase().includes(a)))&&(r===""||v.Type===r)}).sort((v,j)=>{var m,p,h,k,P,K,x,b;const R=((m=v.Hiragana)==null?void 0:m.toLowerCase().startsWith(a))||((p=v.Dakuten)==null?void 0:p.toLowerCase().startsWith(a))||((h=v.Handakuten)==null?void 0:h.toLowerCase().startsWith(a))||((k=v.Romaji)==null?void 0:k.toLowerCase().startsWith(a)),w=((P=j.Hiragana)==null?void 0:P.toLowerCase().startsWith(a))||((K=j.Dakuten)==null?void 0:K.toLowerCase().startsWith(a))||((x=j.Handakuten)==null?void 0:x.toLowerCase().startsWith(a))||((b=j.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return R&&!w?-1:!R&&w?1:0}),d=[...Ne.Katakana,...Ne.Dakuten,...Ne.Handakuten,...Ne.Combinaison].filter(v=>{var j,R,w,m;return(((j=v.Katakana)==null?void 0:j.toLowerCase().includes(a))||((R=v.Dakuten)==null?void 0:R.toLowerCase().includes(a))||((w=v.Handakuten)==null?void 0:w.toLowerCase().includes(a))||((m=v.Romaji)==null?void 0:m.toLowerCase().includes(a)))&&(r===""||v.Type===r)}).sort((v,j)=>{var m,p,h,k,P,K,x,b;const R=((m=v.Katakana)==null?void 0:m.toLowerCase().startsWith(a))||((p=v.Dakuten)==null?void 0:p.toLowerCase().startsWith(a))||((h=v.Handakuten)==null?void 0:h.toLowerCase().startsWith(a))||((k=v.Romaji)==null?void 0:k.toLowerCase().startsWith(a)),w=((P=j.Katakana)==null?void 0:P.toLowerCase().startsWith(a))||((K=j.Dakuten)==null?void 0:K.toLowerCase().startsWith(a))||((x=j.Handakuten)==null?void 0:x.toLowerCase().startsWith(a))||((b=j.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return R&&!w?-1:!R&&w?1:0}),f=Array.isArray(Ti.vocabulaire)?Ti.vocabulaire.filter(v=>{var j,R,w,m;return(((j=v.kanji)==null?void 0:j.toLowerCase().includes(a))||((R=v.hiragana)==null?void 0:R.toLowerCase().includes(a))||((w=v.francais)==null?void 0:w.toLowerCase().includes(a))||((m=v.Romaji)==null?void 0:m.toLowerCase().includes(a)))&&(t===""||v.niveau===t)&&(c.length===0||c.includes(v.categorie))}).sort((v,j)=>{var m,p,h,k,P,K,x,b;const R=((m=v.kanji)==null?void 0:m.toLowerCase().startsWith(a))||((p=v.hiragana)==null?void 0:p.toLowerCase().startsWith(a))||((h=v.francais)==null?void 0:h.toLowerCase().startsWith(a))||((k=v.Romaji)==null?void 0:k.toLowerCase().startsWith(a)),w=((P=j.kanji)==null?void 0:P.toLowerCase().startsWith(a))||((K=j.hiragana)==null?void 0:K.toLowerCase().startsWith(a))||((x=j.francais)==null?void 0:x.toLowerCase().startsWith(a))||((b=j.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return R&&!w?-1:!R&&w?1:0}):[],g=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})};return l.jsxs(w3,{children:[l.jsx(Ka,{}),l.jsx(Sy,{}),l.jsx(h0,{}),i.pathname==="/Dictionnaire/Kanji"&&l.jsx(As,{kanjiList:s}),i.pathname==="/Dictionnaire/Hiragana"&&l.jsx(Bs,{hiraganaList:u}),i.pathname==="/Dictionnaire/Katakana"&&l.jsx(Js,{katakanaList:d}),i.pathname==="/Dictionnaire/Vocabulaire"&&l.jsx(Is,{vocabulaireList:f}),l.jsx(P3,{children:l.jsx(x3,{onClick:g,$mainBgColor:e,$color:n,children:l.jsx("img",{src:o.mode==="light"?v0:R0})})})]})}const K3="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0544'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0544)'%20fill='%23F7F7F2'/%3e%3crect%20x='14.5542'%20y='48.9956'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9956)'%20fill='%23F7F7F2'/%3e%3c/svg%3e",O3="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0547'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0547)'%20fill='%23353535'/%3e%3crect%20x='14.5542'%20y='48.9951'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9951)'%20fill='%23353535'/%3e%3c/svg%3e",b3=y.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 10vw;
`,$3=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,N3=y.button`
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
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    img{
        width: 2.6vw;
        height: 2.6vw;
        resize: none;
    }
`,S3=y.div`
    display: flex;
    width:calc(100% - 3vw);
    height: 23vw;
    gap: 1vw;
`,L3=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    width: 50%;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.8vw;
    padding: 1vw;
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
            &:hover{
                cursor: pointer;
                background-color: #858585;
            }
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
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2vw;
            padding: 0.2vw 2vw;
            border-radius: 0.5vw;
            color: #F7F7F2;
            background-color: ${e=>e.$color};
        }
    }
`,T3=y.div`
    display: flex;
    gap: 0.5vw;
    width: 50%;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.8vw;
    padding: 1vw;
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
    }

`,M3=y.button`
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
    border: ${e=>e.$mainBgColor} 0.2vw solid;
    &:hover{
        cursor: pointer;
        background-color: #858585;
    }
    img{
        width: 3.5vw;
        height: 3.5vw;
    }
`;function E3(){const{bgColor:e,fontColor:n,mainBgColor:i}=C($=>$.mode),{color:a}=C($=>$.color),t=C($=>$.dataChoice.hiragana),r=C($=>$.dataChoice.katakana),o=C($=>$.dataChoice.kanji),c=C($=>$.dataChoice.vocabulaire),s=C($=>$.dataChoice.nombres),u=ge();let d=Fi();const f=C($=>$.search.searchText),g=C($=>$.search.jlptLevel),v=C($=>$.search.kanaType),j=C($=>$.mode),R=C($=>$.search.vocabulaireCategorie),w=C($=>$.parametersExercice.exerciceNumber),m=To.kanji.filter($=>{var H,W;return(((H=$.Meaning)==null?void 0:H.toLowerCase().includes(f))||((W=$.SecondaryMeaning)==null?void 0:W.toLowerCase().includes(f)))&&(g===""||$.JLPTLevel===g)}).sort(($,H)=>{var I,Z,S,T,E,_,A,ue,L,ee;const W=((I=$.Kanji)==null?void 0:I.toLowerCase().startsWith(f))||((Z=$.OnReading)==null?void 0:Z.some(oe=>oe.toLowerCase().startsWith(f)))||((S=$.KunReading)==null?void 0:S.some(oe=>oe.toLowerCase().startsWith(f)))||((T=$.Meaning)==null?void 0:T.toLowerCase().startsWith(f))||((E=$.SecondaryMeaning)==null?void 0:E.toLowerCase().startsWith(f)),U=((_=H.Kanji)==null?void 0:_.toLowerCase().startsWith(f))||((A=H.OnReading)==null?void 0:A.some(oe=>oe.toLowerCase().startsWith(f)))||((ue=H.KunReading)==null?void 0:ue.some(oe=>oe.toLowerCase().startsWith(f)))||((L=H.Meaning)==null?void 0:L.toLowerCase().startsWith(f))||((ee=H.SecondaryMeaning)==null?void 0:ee.toLowerCase().startsWith(f));return W&&!U?-1:!W&&U?1:0}),p=[...$e.Hiragana,...$e.Dakuten,...$e.Handakuten,...$e.Combinaison].filter($=>{var H,W,U,I;return(((H=$.Hiragana)==null?void 0:H.toLowerCase().includes(f))||((W=$.Dakuten)==null?void 0:W.toLowerCase().includes(f))||((U=$.Handakuten)==null?void 0:U.toLowerCase().includes(f))||((I=$.Romaji)==null?void 0:I.toLowerCase().includes(f)))&&(v===""||$.Type===v)}).sort(($,H)=>{var I,Z,S,T,E,_,A,ue;const W=((I=$.Hiragana)==null?void 0:I.toLowerCase().startsWith(f))||((Z=$.Dakuten)==null?void 0:Z.toLowerCase().startsWith(f))||((S=$.Handakuten)==null?void 0:S.toLowerCase().startsWith(f))||((T=$.Romaji)==null?void 0:T.toLowerCase().startsWith(f)),U=((E=H.Hiragana)==null?void 0:E.toLowerCase().startsWith(f))||((_=H.Dakuten)==null?void 0:_.toLowerCase().startsWith(f))||((A=H.Handakuten)==null?void 0:A.toLowerCase().startsWith(f))||((ue=H.Romaji)==null?void 0:ue.toLowerCase().startsWith(f));return W&&!U?-1:!W&&U?1:0}),h=[...Ne.Katakana,...Ne.Dakuten,...Ne.Handakuten,...Ne.Combinaison].filter($=>{var H,W,U,I;return(((H=$.Katakana)==null?void 0:H.toLowerCase().includes(f))||((W=$.Dakuten)==null?void 0:W.toLowerCase().includes(f))||((U=$.Handakuten)==null?void 0:U.toLowerCase().includes(f))||((I=$.Romaji)==null?void 0:I.toLowerCase().includes(f)))&&(v===""||$.Type===v)}).sort(($,H)=>{var I,Z,S,T,E,_,A,ue;const W=((I=$.Katakana)==null?void 0:I.toLowerCase().startsWith(f))||((Z=$.Dakuten)==null?void 0:Z.toLowerCase().startsWith(f))||((S=$.Handakuten)==null?void 0:S.toLowerCase().startsWith(f))||((T=$.Romaji)==null?void 0:T.toLowerCase().startsWith(f)),U=((E=H.Katakana)==null?void 0:E.toLowerCase().startsWith(f))||((_=H.Dakuten)==null?void 0:_.toLowerCase().startsWith(f))||((A=H.Handakuten)==null?void 0:A.toLowerCase().startsWith(f))||((ue=H.Romaji)==null?void 0:ue.toLowerCase().startsWith(f));return W&&!U?-1:!W&&U?1:0}),k=Array.isArray(Ti.vocabulaire)?Ti.vocabulaire.filter($=>{var H,W,U,I;return(((H=$.kanji)==null?void 0:H.toLowerCase().includes(f))||((W=$.hiragana)==null?void 0:W.toLowerCase().includes(f))||((U=$.francais)==null?void 0:U.toLowerCase().includes(f))||((I=$.Romaji)==null?void 0:I.toLowerCase().includes(f)))&&(g===""||$.niveau===g)&&(R.length===0||R.includes($.categorie))}).sort(($,H)=>{var I,Z,S,T,E,_,A,ue;const W=((I=$.kanji)==null?void 0:I.toLowerCase().startsWith(f))||((Z=$.hiragana)==null?void 0:Z.toLowerCase().startsWith(f))||((S=$.francais)==null?void 0:S.toLowerCase().startsWith(f))||((T=$.Romaji)==null?void 0:T.toLowerCase().startsWith(f)),U=((E=H.kanji)==null?void 0:E.toLowerCase().startsWith(f))||((_=H.hiragana)==null?void 0:_.toLowerCase().startsWith(f))||((A=H.francais)==null?void 0:A.toLowerCase().startsWith(f))||((ue=H.Romaji)==null?void 0:ue.toLowerCase().startsWith(f));return W&&!U?-1:!W&&U?1:0}):[],P=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})},x=(()=>{switch(u.pathname){case"/choisir-ses/Kanji":return{modeTitle:"Kanji"};case"/choisir-ses/Hiragana":return{modeTitle:"Hiragana"};case"/choisir-ses/Katakana":return{modeTitle:"Katakana"};case"/choisir-ses/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/choisir-ses/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),b=u.pathname;let F;switch(b){case"/choisir-ses/Hiragana":F=t.length;break;case"/choisir-ses/Katakana":F=r.length;break;case"/choisir-ses/Kanji":F=o.length;break;case"/choisir-ses/Vocabulaire":F=c.length;break;case"/choisir-ses/Nombres":F=s.length;break;default:F=0;break}const D=Je(),q=()=>{switch(u.pathname){case"/choisir-ses/Vocabulaire":D(P1());break;case"/choisir-ses/Hiragana":D(K1());break;case"/choisir-ses/Katakana":D(x1());break;case"/choisir-ses/Kanji":D(w1());break;case"/choisir-ses/Nombres":D(C1());break}};return l.jsxs(b3,{children:[l.jsx(M3,{onClick:()=>d(-1),$color:a,$mainBgColor:i,children:l.jsx("img",{src:j.mode==="light"?K3:O3})}),l.jsxs(S3,{children:[l.jsxs(L3,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("div",{children:[l.jsxs("p",{children:[x.modeTitle," sélectionnes"]}),l.jsx("button",{onClick:q,children:"Vider"})]}),l.jsxs("div",{id:"selectionnes",children:[b==="/choisir-ses/Hiragana"&&t.map(($,H)=>l.jsx("p",{children:$.Hiragana},H)),b==="/choisir-ses/Katakana"&&r.map(($,H)=>l.jsx("p",{children:$.Katakana},H)),b==="/choisir-ses/Kanji"&&o.map(($,H)=>l.jsx("p",{children:$.Kanji},H)),b==="/choisir-ses/Vocabulaire"&&c.map(($,H)=>l.jsx("p",{children:$.kanji||$.hiragana},H)),b==="/choisir-ses/Nombres"&&s.map(($,H)=>l.jsx("p",{children:$.Nombre},H))]})]}),l.jsxs(T3,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("span",{children:[" ",F,"/",w]}),l.jsxs("p",{children:[x.modeTitle," sélectionnes"]})]})]}),l.jsx(h0,{}),u.pathname==="/choisir-ses/Kanji"&&l.jsx(As,{kanjiList:m}),u.pathname==="/choisir-ses/Hiragana"&&l.jsx(Bs,{hiraganaList:p}),u.pathname==="/choisir-ses/Katakana"&&l.jsx(Js,{katakanaList:h}),u.pathname==="/choisir-ses/Vocabulaire"&&l.jsx(Is,{vocabulaireList:k}),l.jsx($3,{children:l.jsx(N3,{onClick:P,$mainBgColor:i,$color:a,children:l.jsx("img",{src:j.mode==="light"?v0:R0})})})]})}const H3=y.nav`
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    padding: 0.9vw;
    border-radius: 0.8vw;
    width: 15vw;
    height: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.6vw;
`,_a=y(fi)`
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
    &:hover {
        background-color: #858585;
    }
`,za=y.span`
    font-size: 0.8vw;
    color: ${e=>e.$color||"#ff0000"};
    margin: 0;
`,Aa=y.h4`
    font-size: 1.7vw;
    color: ${e=>e.$fontColor};
    margin: 0;
`,Ba=y.span`
    font-size: 0.8vw;
    color: ${e=>e.$fontColor};
    margin: 0;
`;function D3(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(t=>t.mode),{color:a}=C(t=>t.color);return l.jsxs(H3,{$bgColor:e,children:[l.jsxs(_a,{$mainBgColor:i,to:"/Hiragana",children:[l.jsx(za,{$color:a,children:"ひらがな"}),l.jsx(Aa,{$fontColor:n,children:"あ"}),l.jsx(Ba,{$fontColor:n,children:"hiragana"})]}),l.jsxs(_a,{$mainBgColor:i,to:"/Katakana",children:[l.jsx(za,{$color:a,children:"カタカナ"}),l.jsx(Aa,{$fontColor:n,children:"ア"}),l.jsx(Ba,{$fontColor:n,children:"katakana"})]}),l.jsxs(_a,{$mainBgColor:i,to:"/Kanji",children:[l.jsx(za,{$color:a,children:"かんじ"}),l.jsx(Aa,{$fontColor:n,children:"漢字"}),l.jsx(Ba,{$fontColor:n,children:"kanji"})]}),l.jsxs(_a,{$mainBgColor:i,to:"/Vocabulaire",children:[l.jsx(za,{$color:a,children:"ごい"}),l.jsx(Aa,{$fontColor:n,children:"語彙"}),l.jsx(Ba,{$fontColor:n,children:"Vocabulaire"})]}),l.jsxs(_a,{$mainBgColor:i,to:"/Nombres",children:[l.jsx(za,{$color:a,children:"ばんごう"}),l.jsx(Aa,{$fontColor:n,children:"番号"}),l.jsx(Ba,{$fontColor:n,children:"Nombres"})]})]})}const F3=y.div`
    display: flex;
    flex-direction: column;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    max-width: 15vw;
    height: 9.7vw;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
`,_3=y.div`
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
`,z3=y.div`
    background-color: ${e=>e.$mainBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3vw;
    height: 2.5vw;
    border-radius: 0.5vw;
`,A3=y.span`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    margin: 0;
    border-radius: 0.5vw;
`;function B3(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(u=>u.mode),{color:a}=C(u=>u.color),[t,r]=O.useState("日本"),[o,c]=O.useState(new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"}));O.useEffect(()=>{const u=setInterval(()=>{c(new Date().toLocaleTimeString(t==="フランス"?"fr-FR":"ja-JP",{timeZone:t==="フランス"?"Europe/Paris":"Asia/Tokyo",hour:"2-digit",minute:"2-digit"}))},10);return()=>clearInterval(u)},[t]);const s=u=>{r(u==="France"?"フランス":"日本")};return l.jsxs(F3,{$bgColor:e,$fontColor:n,children:[l.jsxs(_3,{$mainBgColor:i,$fontColor:n,children:[l.jsx("button",{onClick:()=>s("France"),style:{backgroundColor:t==="フランス"?a:i},children:"France"}),l.jsx("button",{onClick:()=>s("Japon"),style:{backgroundColor:t==="日本"?a:i},children:"Japon"})]}),l.jsx(z3,{$mainBgColor:i,children:t}),l.jsx(A3,{$color:a,$mainBgColor:i,children:o})]})}const J3=y.div`  
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
    gap: 1vw;
`;function I3(){return l.jsxs(J3,{children:[l.jsx(D3,{}),l.jsx(B3,{})]})}const V3=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 75%;
    font-size: 7vw;
    color: ${e=>e.$isCorrect===null?e.$fontColor:e.$isCorrect?"#68cf68":"#FF6767"};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.8vw;
    div{
        position: relative;
        width: 50%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: 2.5vw;
            position: absolute;
            color: ${e=>e.$color};
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
    
`;function j0({question:e,isCorrect:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=C(d=>d.mode),{color:r}=C(d=>d.color),o=ge(),c=C(d=>d.parametersExercice.exerciceDifficulté);function s(){return e.kanji===""?e.hiragana:e.kanji}function u(){if(e.Type==="Hiragana"||e.Type==="Katakana")return e.Hiragana||e.Katakana;if(e.Nom==="Dakuten")return e.Dakuten;if(e.Nom==="Handakuten")return e.Handakuten;if(e.Type==="Combinaison")return e.Hiragana||e.Katakana}return l.jsx(V3,{$mainBgColor:t,$color:r,$bgColor:i,$fontColor:a,$isCorrect:n,children:l.jsxs("div",{children:[c==="Débutant"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.OnPrincipalReadingRomaji||e.KunPrincipalReadingRomaji||e.Romaji}):null,l.jsx("p",{children:e.Kanji||s()||e.Nombre||u()}),c=="Débutant"||c=="Intermédiaire"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.KunPrincipalReading||e.OnPrincipalReadingRomaji||e.hiragana}):null]})},e.id)}j0.propTypes={question:z.shape({id:z.string.isRequired,Kanji:z.string,Katakana:z.string,Hiragana:z.string,kanji:z.string,Nombre:z.string,hiragana:z.string,Handakuten:z.string,Dakuten:z.string,Type:z.string,Nom:z.string,Romaji:z.string.isRequired,KunPrincipalReadingRomaji:z.string,OnPrincipalReadingRomaji:z.string,KunPrincipalReading:z.string,OnPrincipalReading:z.string}).isRequired,isCorrect:z.bool};const W3=y.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 100%;
`,U3=y.button`
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
    &:hover {
        transform: scale(1.03);
    }
`;function y0({question:e,options:n,onAnswer:i,buttonDisabled:a}){const{bgColor:t,fontColor:r,mainBgColor:o}=C(R=>R.mode),[c,s]=O.useState(""),[u,d]=O.useState(!1),[f,g]=O.useState(null);O.useEffect(()=>{d(!1),g(null)},[e]);const v=R=>{s(R);const w=R===(e.Meaning||e.Romaji||e.francais);d(!0),g(R),i(w)},j=R=>{s(R.target.value)};return l.jsx(W3,{$mainBgColor:o,$bgColor:t,$fontColor:r,children:n.length>0?n.map((R,w)=>l.jsx(U3,{$fontColor:r,$mainBgColor:o,$bgColor:t,onClick:()=>v(R),$isCorrect:R===(e.Meaning||e.Romaji||e.francais),$isAnswered:u,$isSelected:R===f,disabled:a,children:R},w)):l.jsx("input",{type:"text",value:c,onChange:j})},e.id)}y0.propTypes={question:z.shape({id:z.string.isRequired,Meaning:z.string,Romaji:z.string,francais:z.string}).isRequired,options:z.arrayOf(z.string).isRequired,onAnswer:z.func.isRequired,buttonDisabled:z.bool.isRequired};const k0="data:image/svg+xml,%3csvg%20width='78'%20height='78'%20viewBox='0%200%2078%2078'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_309_10)'%3e%3cpath%20d='M74.7033%2036.2802C72.8874%2036.2802%2071.3902%2037.6023%2071.3902%2039.434C71.2309%2051.3642%2064.3499%2062.1476%2053.8214%2067.9295C37.9569%2076.6423%2019.4165%2068.8215%2012.3126%2058.2134L22.3314%2060.2999C23.9879%2060.6344%2025.8037%2059.631%2026.1382%2057.8151C26.4727%2056.1586%2025.4692%2054.3428%2023.6534%2054.0083L3.95026%2049.867C2.80343%2049.5962%20-0.206994%2050.4245%200.143426%2053.5145L2.62822%2073.3929C2.7875%2075.0494%204.12547%2076.2122%205.782%2076.2122C8.25087%2076.2122%209.25435%2074.3964%209.09507%2072.5646L7.93231%2062.8644C24.0357%2082.1853%2044.4716%2079.4934%2056.8%2073.9026C69.5585%2067.1013%2077.6818%2054.0242%2077.8411%2039.5933C77.857%2037.7775%2076.5191%2036.2802%2074.7033%2036.2802Z'%20fill='%23F75D48'/%3e%3cpath%20d='M3.28122%2041.7118C5.09703%2041.7118%206.59428%2040.3897%206.59428%2038.558C6.75357%2026.6278%2013.6345%2015.8444%2024.1631%2010.0625C40.0275%201.34974%2058.5679%209.17048%2065.6719%2019.7787L55.6531%2017.6921C53.9966%2017.3576%2052.1807%2018.361%2051.8462%2020.1769C51.5118%2021.8334%2052.5152%2023.6492%2054.331%2023.9837L74.0501%2028.125C75.197%2028.3958%2078.2074%2027.5675%2077.857%2024.4775L75.3722%204.59909C75.2129%202.94256%2073.8749%201.7798%2072.2184%201.7798C69.7495%201.7798%2068.7461%203.59562%2068.9053%205.42736L70.0522%2015.1276C53.9488%20-4.17734%2033.5129%20-1.5014%2021.1845%204.10532C8.42603%2010.8907%200.302651%2023.9837%200.127441%2038.3987C0.127441%2040.2304%201.46541%2041.7118%203.28122%2041.7118Z'%20fill='%23F75D48'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_309_10'%3e%3crect%20width='78'%20height='78'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Q3=y.div`
    display: flex;
    justify-content: center;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    width: 125.5%;
    height: 10%;
    padding: 1vw;
    border-radius: 0.8vw;
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
        &:hover{
            background-color: #858585;
        }
    }
    button:nth-child(1){
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        width: 25%;
        
    }
    button:nth-child(2){
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        width: 50%;
        font-weight: 600;
    }
    button:nth-child(3){
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 2vw;
            height: 2vw;
        }
    }
`;function w0({onReload:e,onSkip:n,buttonDisabled:i}){const{bgColor:a,mainBgColor:t,fontColor:r}=C(s=>s.mode),{color:o}=C(s=>s.color),c=Fi();return l.jsxs(Q3,{$color:o,$bgColor:a,$mainBgColor:t,$fontColor:r,children:[l.jsx("button",{onClick:()=>c(-1),children:"Retour"}),l.jsx("button",{onClick:n,disabled:i,children:"Passer"}),l.jsx("button",{onClick:e,children:l.jsx("img",{src:k0})})]})}w0.propTypes={onReload:z.func.isRequired,onSkip:z.func.isRequired,buttonDisabled:z.bool};const q3=y.div`
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
`,Z3=y.div`
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
`,Y3=y.div`
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
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
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
    }
`,G3=y.div`
    grid-area: 1 / 3 / 2 / 6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw;
    padding: 0.6vw;
    font-size: 2vw;
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        width: 60%;
        font-weight: 500;
        text-align: center;
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
    }
`,X3=y.div`
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
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
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
    }
`,ek=y.div`
    grid-area: 3 / 1 / 5 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw 0.6vw 0 0.6vw;
    width: calc(100% );
`,nk=y.div`
    grid-area: 4 / 3 / 5 / 6; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0  0.6vw 0.6vw 0;
    width: calc(100% + 0.6vw);
    height: calc(100% + 0.6vw);
    margin-left: -0.6vw;
    margin-top: -0.6vw;
`,ik=y.div`
    grid-area: 3 / 6 / 4 / 8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$mainBgColor};
    border-radius: 0.6vw;
    height: calc(100% - 0.6vw);
    font-size: 2vw;
    :last-child{
        color: ${e=>e.$color};
        font-weight: 600;
    }
`,ak=y.div`
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
    span{
        font-size: 3vw;
    }
`,tk=y.div`
    z-index: 101;
    grid-area: 2 / 3 / 4 / 6;
    color: ${e=>e.$fontColor};
    background-color: ${e=>e.$bgColor};
    border-radius: 0.6vw;
    margin-left: -0.6vw;
    padding: 0 0 0.6vw 0.6vw ;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 2vw;
        height: 2vw;
        bottom: -0.6vw;
        left: -0.6vw;
        background-color: ${e=>e.$mainBgColor};
        z-index: -2;
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
    }
    div{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.6vw;
        width: 100%;
        height: 100%;
    }
`,rk=y.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    width: 90%;
    height: 10%;
    padding: 1vw;
    border-radius: 0.8vw;
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
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
    }
    button:nth-child(2){
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        width: 75%;
        font-weight: 600;
      
    }
`;function P0({onReload:e}){const n=Fi(),{bgColor:i,fontColor:a,mainBgColor:t}=C(R=>R.mode),{color:r}=C(R=>R.color),o=C(R=>R.parametersExercice.exerciceModeDeJeu),c=C(R=>R.parametersExercice.exerciceNumber),s=C(R=>R.parametersExercice.exerciceDifficulté),u=C(R=>R.parametersExercice.exerciceTimer),d=C(R=>R.exercice.totalTimer),f=C(R=>R.parametersExercice.exerciceTimerActive),g=C(R=>R.exercice.totalfaute),j=(R=>{const w=Math.floor(R/60),m=R%60,p=w.toString().padStart(2,"0"),h=m.toString().padStart(2,"0");return`${p}:${h}`})(d);return l.jsxs(q3,{$mainBgColor:t,children:[l.jsxs(Z3,{$bgColor:i,children:[l.jsxs(Y3,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Difficulté"}),l.jsx("p",{children:s})]}),l.jsxs(G3,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Nombre de Kanji "}),l.jsx("p",{children:c})]}),l.jsxs(X3,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Mode de jeu"}),l.jsx("p",{children:o})]}),l.jsxs(ek,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{}),l.jsx("div",{})]}),l.jsx(nk,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsx("div",{})}),l.jsxs(ik,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Erreur"}),l.jsx("p",{children:g})]}),l.jsx(ak,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsxs("p",{children:[f===!1?j:u,l.jsx("span",{children:"s"})]})}),l.jsx(tk,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:l.jsx("div",{})})]}),l.jsxs(rk,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:[l.jsx("button",{onClick:e,children:l.jsx("img",{src:k0})}),l.jsx("button",{onClick:()=>n(-1),children:"Terminer"})]})]})}P0.propTypes={onReload:z.func.isRequired};const ok=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1vw;
    position: relative;
`,lk=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    padding: 1vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 77%;
    background-color: ${e=>e.$bgColor};
`,ck=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
`,sk=y.div`
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
    p{
        font-size: 2vw;
        font-weight: 600;
        span{
            font-size: 1.5vw;
        }
    }
`,Ad=(e,n)=>{const i=[e],a=n.filter(t=>t!==e);for(;i.length<4;){const t=Math.floor(Math.random()*a.length),r=a[t];i.includes(r)||i.push(r)}return i.sort(()=>.5-Math.random())};function uk(){const e=C(L=>L.parametersExercice.exerciceModeDeJeu),n=C(L=>L.parametersExercice.exerciceNumber),i=C(L=>L.dataChoice),a=C(L=>L.parametersExercice.exerciceTypeDeKana),t=C(L=>L.parametersExercice.exerciceTimerActive),{bgColor:r}=C(L=>L.mode),[o,c]=O.useState([]),[s,u]=O.useState(0),[d,f]=O.useState(null),[g,v]=O.useState(0),j=O.useRef(null),R=O.useRef(null),w=Je(),m=ge(),p=C(L=>L.parametersExercice.exerciceTimer),[h,k]=O.useState(p),{color:P}=C(L=>L.color),[K,x]=O.useState(1),[b,F]=O.useState(1),[D,q]=O.useState(!1),[$,H]=O.useState(!1),W=O.useCallback(L=>{F(ee=>ee+1),w(lr(b)),L===!0&&(F(1),w(lr(b)))},[F,w,b]),U=O.useCallback(L=>{x(ee=>ee+1),w(or(K)),L===!0&&(x(1),w(or(K)))},[x,w,K]),I=O.useCallback(()=>{R.current&&clearInterval(R.current),v(0),t===!1&&(R.current=setInterval(()=>{v(L=>L+1)},1e3))},[t]),Z=O.useCallback(()=>{R.current&&(clearInterval(R.current),R.current=null)},[]),S=O.useCallback(()=>{k(p),j.current&&j.current()},[p]),T=O.useCallback(()=>{t===!0&&setTimeout(()=>{s<o.length-1?(u(s+1),U()):(U(),H(!0),w(kd(g)),Z())},900)},[s,o,t,U,Z,w,g]);O.useEffect(()=>{if(t===!0&&$===!1){const L=setInterval(()=>{k(ee=>ee<=1?(clearInterval(L),T(),setTimeout(()=>{k(p)},900),0):ee-1)},1e3);return()=>clearInterval(L)}},[p,T,w,t,$]),O.useEffect(()=>{k(p)},[p]),O.useEffect(()=>{S&&S(p)},[S,p]);const E=O.useCallback(()=>{let L;if(m.pathname.includes("/Exercices/Kanji")?(I(),L=To.kanji):m.pathname.includes("/Exercices/Hiragana")?(I(),a==="normal"?L=$e.Hiragana:a==="accents"?L=[...$e.Dakuten,...$e.Handakuten]:a==="combinaison"?L=$e.Combinaison:a==="tout"&&(L=[...$e.Dakuten,...$e.Handakuten,...$e.Combinaison,...$e.Hiragana])):m.pathname.includes("/Exercices/Vocabulaire")?(I(),L=Ti.vocabulaire):m.pathname.includes("/Exercices/Nombres")?(I(),L=Ti.nombres):m.pathname.includes("/Exercices/Katakana")&&(I(),a==="normal"?L=Ne.Katakana:a==="accents"?L=[...Ne.Dakuten,...Ne.Handakuten]:a==="combinaison"?L=Ne.Combinaison:a==="tout"?L=[...Ne.Dakuten,...Ne.Handakuten,...Ne.Combinaison,...Ne.Katakana]:Z()),L){let ee=[];if(e==="Aléatoire")ee=L.sort(()=>.5-Math.random()).slice(0,n);else if(e==="N5")ee=L.filter(Y=>Y.JLPTLevel==="N5").sort(()=>.5-Math.random()).slice(0,n);else if(e==="Choisir ses questions"){if(w(_p("tout")),m.pathname.includes("/Exercices/Kanji")&&i.kanji){const Y=i.kanji.map(G=>G.Kanji);ee=L.filter(G=>Y.includes(G.Kanji)).slice(0,n)}else if(m.pathname.includes("/Exercices/Vocabulaire")&&i.vocabulaire){const Y=i.vocabulaire.map(G=>G.francais);ee=L.filter(G=>Y.includes(G.francais)).slice(0,n)}else if(m.pathname.includes("/Exercices/Hiragana")&&i.hiragana){const Y=i.hiragana.map(G=>G.hiragana);ee=L.filter(G=>Y.includes(G.hiragana)).slice(0,n)}else if(m.pathname.includes("/Exercices/Katakana")&&i.katakana){const Y=i.katakana.map(G=>G.Katakana);ee=L.filter(G=>Y.includes(G.Katakana)).slice(0,n)}else if(m.pathname.includes("/Exercices/Nombres")&&i.nombre){const Y=i.nombre.map(G=>G.francais);ee=L.filter(G=>Y.includes(G.francais)).slice(0,n)}}const oe=ee.map(Y=>{if(m.pathname.includes("/Exercices/Hiragana")||m.pathname.includes("/Exercices/Katakana")){const G=Y.Romaji,cn=Ad(G,L.map(An=>An.Romaji));return{...Y,options:cn,id:Y.id.toString()}}else{const G=Y.Meaning||Y.francais,cn=Ad(G,L.map(An=>An.Meaning||An.francais));return{...Y,options:cn,id:Y.id.toString()}}});c(oe),u(0)}},[e,n,i,a,m.pathname,I,Z,w]);O.useEffect(()=>{const L=()=>{w(or(0)),w(lr(0))};E(),Z(),I(),L()},[E,Z,I,w]);const _=L=>{f(L),L?(W(),q(!0)):(U(),q(!0)),setTimeout(()=>{s<o.length-1?(u(s+1),f(null)):(Z(),w(kd(g)),U(),H(!0),Z()),f(null),q(!1),k(p)},900),j.current&&j.current()},A=()=>{_(!1)},ue=()=>{W(!0),U(!0),w(lr(0)),w(or(0)),E(),Z(),I(),H(!1)};return l.jsxs(ok,{children:[$===!0?l.jsx(P0,{onReload:ue}):null,l.jsxs(lk,{$bgColor:r,children:[t===!0&&l.jsx(sk,{$color:P,children:l.jsxs("p",{children:[h,l.jsx("span",{children:"s"})]})}),o&&o.length>0?l.jsxs(ck,{children:[l.jsx(j0,{question:o[s],isCorrect:d}),l.jsx(y0,{question:o[s],options:o[s].options,onAnswer:_,isCorrect:d,buttonDisabled:D})]},o[s].id):l.jsx("p",{children:"Aucune question disponible."})]}),l.jsx(w0,{onReload:ue,onSkip:A,buttonDisabled:D})]})}const dk=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    border-radius: 0.8vw;
    width: 78%;
    min-height: 80%;
`;function gk(){const{bgColor:e}=C(n=>n.mode);return l.jsx(dk,{$bgColor:e,children:l.jsx(uk,{})})}const fk=y.div`
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
    p{
        background-color: ${e=>e.$mainBgColor};
        width: 100%;
        height: 100%;
        border-radius: 0.6vw;
        display: flex;
        justify-content: center;
        align-items: center;
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
`;function pk(){const{bgColor:e,fontColor:n,mainBgColor:i}=C(c=>c.mode),a=C(c=>c.exercice.totalfaute),t=C(c=>c.exercice.totalreussite),r=C(c=>c.parametersExercice.exerciceNumber),o=t+a;return l.jsxs(fk,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("p",{children:t}),l.jsxs("p",{children:[o,"/",r]}),l.jsx("p",{children:a})]})}function mk(){return l.jsx("div",{})}const hk=y.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20%;
`;function vk(){return l.jsxs(hk,{children:[l.jsx(pk,{}),location.pathname==="/Exercices/Katakana"||location.pathname==="/Exercices/Hiragana"||location.pathname==="/Exercices/Kanji"&&l.jsx(mk,{})]})}const Rk=y.div`
    width: 6vw;
    border-radius: 0.8vw;
    padding: 1vw;
    height: 32vw;
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
`;function Bd(){const e=C(c=>c.parametersExercice.exerciceNumber),n=C(c=>c.exercice.totalfaute),i=C(c=>c.exercice.totalreussite),{color:a}=C(c=>c.color),{bgColor:t,mainBgColor:r}=C(c=>c.mode),o=(n+i)/e*100;return l.jsx(Rk,{$bgColor:t,$mainBgColor:r,$color:a,children:l.jsx("div",{children:l.jsx("div",{style:{height:`${o}%`}})})})}const jk=y.div`
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
`,yk=y.div`
  z-index: -1;
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    position: absolute;
    bottom: 7.6vw;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;function kk(){return l.jsxs(jk,{children:[l.jsx(vk,{}),l.jsx(gk,{}),l.jsxs(yk,{children:[l.jsx(Bd,{}),l.jsx(Bd,{})]})]})}const wk="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Pk="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23353535'/%3e%3c/svg%3e",xk="data:image/svg+xml,%3csvg%20width='21'%20height='36'%20viewBox='0%200%2021%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8947%2017.9406C13.8947%2024.7368%2018.2067%2031.2265%2020.5405%2034.2413C21.0748%2034.9314%2020.581%2035.9768%2019.7114%2035.9023C8.89085%2034.9749%200%2027.5466%200%2017.9406C0%208.68938%208.42852%201.01969%2019.2233%200.0937448C20.0788%200.0203678%2020.576%201.03601%2020.0709%201.73032C17.905%204.70778%2013.8947%2011.1391%2013.8947%2017.9406Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Ck=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11vw;
`,Jd=y.button`
    background-color: ${e=>e.$isActive?e.$color:e.$bgColor};
    color: ${e=>e.$isActive?"#fff":"#000"};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    img{
        width: 2vw;
        height: 2vw;
    }
`;function Kk(){const e=Je(),[n,i]=O.useState("light"),a=o=>{i(o),e(d1(o))},{bgColor:t}=C(o=>o.mode),{color:r}=C(o=>o.color);return l.jsxs(Ck,{children:[l.jsx(Jd,{$bgColor:t,$color:r,$isActive:n==="light",onClick:()=>a("light"),children:l.jsx("img",{src:n==="light"?wk:Pk})}),l.jsx(Jd,{$bgColor:t,$color:r,$isActive:n==="dark",onClick:()=>a("dark"),children:l.jsx("img",{src:xk})})]})}const Ok="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13422C0%204.13422%200.863862%208.26845%2014.3977%208.26845C27.9315%208.26845%2028.7954%204.13422%2028.7954%204.13422V31.6958C28.7954%2031.6958%2027.7876%2035.83%2014.3977%2035.83C1.00784%2035.83%200%2031.6958%200%2031.6958V4.13422Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23353535'%20stroke='%23E1E1DE'/%3e%3cpath%20d='M13.2459%208.40626C13.2459%2012.1356%2013.2459%2015.1588%2011.3742%2015.1588C9.5025%2015.1588%209.5025%2012.1356%209.5025%208.40626C9.5025%204.67692%2010.3405%201.65369%2011.3742%201.65369C12.4079%201.65369%2013.2459%204.67692%2013.2459%208.40626Z'%20fill='%23353535'/%3e%3cpath%20d='M19.8688%207.0282C19.8688%2010.1487%2019.8688%2012.6783%2018.573%2012.6783C17.2772%2012.6783%2017.2772%2010.1487%2017.2772%207.0282C17.2772%203.90773%2017.8574%201.37808%2018.573%201.37808C19.2887%201.37808%2019.8688%203.90773%2019.8688%207.0282Z'%20fill='%23353535'/%3e%3c/svg%3e",bk="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13379C0%204.13379%200.863862%208.26802%2014.3977%208.26802C27.9315%208.26802%2028.7954%204.13379%2028.7954%204.13379V31.6953C28.7954%2031.6953%2027.7876%2035.8296%2014.3977%2035.8296C1.00784%2035.8296%200%2031.6953%200%2031.6953V4.13379Z'%20fill='%23353535'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23F7F7F2'%20stroke='%231E1E1E'/%3e%3cpath%20d='M13.2459%208.4059C13.2459%2012.1352%2013.2459%2015.1585%2011.3742%2015.1585C9.5025%2015.1585%209.5025%2012.1352%209.5025%208.4059C9.5025%204.67655%2010.3405%201.65332%2011.3742%201.65332C12.4079%201.65332%2013.2459%204.67655%2013.2459%208.4059Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M19.8688%207.02805C19.8688%2010.1485%2019.8688%2012.6782%2018.573%2012.6782C17.2772%2012.6782%2017.2772%2010.1485%2017.2772%207.02805C17.2772%203.90757%2017.8574%201.37793%2018.573%201.37793C19.2887%201.37793%2019.8688%203.90757%2019.8688%207.02805Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",$k=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16.7vw;
    margin-bottom: 1.3vw;
    position: absolute;
    right: 3.1vw;
    top: 1vw;
`,Nk=y(fi)`
    background-color: ${e=>e.$isActive?e.$color:e.$bgColor};
    color: ${e=>e.$isActive?"#fff":"#000"};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 2vw;
        height: 2vw;
    }
`;function Sk(){const e=C(i=>i.mode),{bgColor:n}=C(i=>i.mode);return l.jsxs($k,{children:[l.jsx(Kk,{}),l.jsx(Nk,{$bgColor:n,to:"/color",children:l.jsx("img",{src:e.mode==="light"?Ok:bk})})]})}const Lk=()=>{const{mainBgColor:e}=C(n=>n.mode);return O.useEffect(()=>{document.body.style.backgroundColor=e},[e]),null};function Tk(){const e=ge(),n=!e.pathname.startsWith("/choisir-ses/")&&!e.pathname.startsWith("/Exercices/"),i=!e.pathname.startsWith("/Exercices/");return l.jsxs("div",{className:"App",children:[n&&l.jsx(I3,{}),i&&l.jsx(Lk,{}),i&&l.jsx(Sk,{}),l.jsxs(F2,{children:[l.jsx(un,{path:"/",element:l.jsx(aj,{})}),l.jsx(un,{path:"/kanji",element:l.jsx(yy,{})}),l.jsx(un,{path:"/vocabulaire",element:l.jsx(wy,{})}),l.jsx(un,{path:"/katakana",element:l.jsx(Cy,{})}),l.jsx(un,{path:"/hiragana",element:l.jsx(Oy,{})}),l.jsx(un,{path:"/nombres",element:l.jsx($y,{})}),l.jsx(un,{path:"/dictionnaire/*",element:l.jsx(C3,{})}),l.jsx(un,{path:"/choisir-ses/*",element:l.jsx(E3,{})}),l.jsx(un,{path:"/color",element:l.jsx(LR,{})}),l.jsx(un,{path:"/exercices/*",element:l.jsx(kk,{})})]})]})}const Mk="/Nihongo-V2/",Ek=xl.createRoot(document.getElementById("root"));Ek.render(l.jsx(mv,{store:O1,children:l.jsx(V2,{basename:Mk,children:l.jsx(Tk,{})})}));
