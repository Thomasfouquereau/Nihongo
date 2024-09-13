function $m(e,n){for(var i=0;i<n.length;i++){const a=n[i];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function Wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ud={exports:{}},go={},Qd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=Symbol.for("react.element"),Om=Symbol.for("react.portal"),Nm=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),Fm=Symbol.for("react.lazy"),Qs=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,Yd={};function wa(e,n,i){this.props=e,this.context=n,this.refs=Yd,this.updater=i||qd}wa.prototype.isReactComponent={};wa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};wa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gd(){}Gd.prototype=wa.prototype;function Hc(e,n,i){this.props=e,this.context=n,this.refs=Yd,this.updater=i||qd}var Jc=Hc.prototype=new Gd;Jc.constructor=Hc;Zd(Jc,wa.prototype);Jc.isPureReactComponent=!0;var qs=Array.isArray,Xd=Object.prototype.hasOwnProperty,Dc={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,n,i){var a,t={},r=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)Xd.call(n,a)&&!eg.hasOwnProperty(a)&&(t[a]=n[a]);var c=arguments.length-2;if(c===1)t.children=i;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];t.children=s}if(e&&e.defaultProps)for(a in c=e.defaultProps,c)t[a]===void 0&&(t[a]=c[a]);return{$$typeof:bt,type:e,key:r,ref:o,props:t,_owner:Dc.current}}function Am(e,n){return{$$typeof:bt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function _c(e){return typeof e=="object"&&e!==null&&e.$$typeof===bt}function Bm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var Zs=/\/+/g;function Fo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bm(""+e.key):n.toString(36)}function gr(e,n,i,a,t){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bt:case Om:o=!0}}if(o)return o=e,t=t(o),e=a===""?"."+Fo(o,0):a,qs(t)?(i="",e!=null&&(i=e.replace(Zs,"$&/")+"/"),gr(t,n,i,"",function(u){return u})):t!=null&&(_c(t)&&(t=Am(t,i+(!t.key||o&&o.key===t.key?"":(""+t.key).replace(Zs,"$&/")+"/")+e)),n.push(t)),1;if(o=0,a=a===""?".":a+":",qs(e))for(var c=0;c<e.length;c++){r=e[c];var s=a+Fo(r,c);o+=gr(r,n,i,s,t)}else if(s=zm(e),typeof s=="function")for(e=s.call(e),c=0;!(r=e.next()).done;)r=r.value,s=a+Fo(r,c++),o+=gr(r,n,i,s,t);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function At(e,n,i){if(e==null)return e;var a=[],t=0;return gr(e,a,"","",function(r){return n.call(i,r,t++)}),a}function Im(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},fr={transition:null},Vm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:fr,ReactCurrentOwner:Dc};function ig(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:At,forEach:function(e,n,i){At(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return At(e,function(){n++}),n},toArray:function(e){return At(e,function(n){return n})||[]},only:function(e){if(!_c(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=wa;I.Fragment=Nm;I.Profiler=Mm;I.PureComponent=Hc;I.StrictMode=Sm;I.Suspense=Dm;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;I.act=ig;I.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Zd({},e.props),t=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Dc.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in n)Xd.call(n,s)&&!eg.hasOwnProperty(s)&&(a[s]=n[s]===void 0&&c!==void 0?c[s]:n[s])}var s=arguments.length-2;if(s===1)a.children=i;else if(1<s){c=Array(s);for(var u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:bt,type:e.type,key:t,ref:r,props:a,_owner:o}};I.createContext=function(e){return e={$$typeof:Hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Em,_context:e},e.Consumer=e};I.createElement=ng;I.createFactory=function(e){var n=ng.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Jm,render:e}};I.isValidElement=_c;I.lazy=function(e){return{$$typeof:Fm,_payload:{_status:-1,_result:e},_init:Im}};I.memo=function(e,n){return{$$typeof:_m,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=fr.transition;fr.transition={};try{e()}finally{fr.transition=n}};I.unstable_act=ig;I.useCallback=function(e,n){return Ee.current.useCallback(e,n)};I.useContext=function(e){return Ee.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};I.useEffect=function(e,n){return Ee.current.useEffect(e,n)};I.useId=function(){return Ee.current.useId()};I.useImperativeHandle=function(e,n,i){return Ee.current.useImperativeHandle(e,n,i)};I.useInsertionEffect=function(e,n){return Ee.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return Ee.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return Ee.current.useMemo(e,n)};I.useReducer=function(e,n,i){return Ee.current.useReducer(e,n,i)};I.useRef=function(e){return Ee.current.useRef(e)};I.useState=function(e){return Ee.current.useState(e)};I.useSyncExternalStore=function(e,n,i){return Ee.current.useSyncExternalStore(e,n,i)};I.useTransition=function(){return Ee.current.useTransition()};I.version="18.3.1";Qd.exports=I;var K=Qd.exports;const Li=Wd(K),xl=$m({__proto__:null,default:Li},[K]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=K,Um=Symbol.for("react.element"),Qm=Symbol.for("react.fragment"),qm=Object.prototype.hasOwnProperty,Zm=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function ag(e,n,i){var a,t={},r=null,o=null;i!==void 0&&(r=""+i),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)qm.call(n,a)&&!Ym.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)t[a]===void 0&&(t[a]=n[a]);return{$$typeof:Um,type:e,key:r,ref:o,props:t,_owner:Zm.current}}go.Fragment=Qm;go.jsx=ag;go.jsxs=ag;Ud.exports=go;var l=Ud.exports,Cl={},tg={exports:{}},en={},rg={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,S){var H=O.length;O.push(S);e:for(;0<H;){var z=H-1>>>1,F=O[z];if(0<t(F,S))O[z]=S,O[H]=F,H=z;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var S=O[0],H=O.pop();if(H!==S){O[0]=H;e:for(var z=0,F=O.length,se=F>>>1;z<se;){var Le=2*(z+1)-1,Je=O[Le],N=Le+1,A=O[N];if(0>t(Je,H))N<F&&0>t(A,Je)?(O[z]=A,O[N]=H,z=N):(O[z]=Je,O[Le]=H,z=Le);else if(N<F&&0>t(A,H))O[z]=A,O[N]=H,z=N;else break e}}return S}function t(O,S){var H=O.sortIndex-S.sortIndex;return H!==0?H:O.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var s=[],u=[],d=1,f=null,g=3,v=!1,R=!1,k=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var S=i(u);S!==null;){if(S.callback===null)a(u);else if(S.startTime<=O)a(u),S.sortIndex=S.expirationTime,n(s,S);else break;S=i(u)}}function j(O){if(k=!1,m(O),!R)if(i(s)!==null)R=!0,q(P);else{var S=i(u);S!==null&&ne(j,S.startTime-O)}}function P(O,S){R=!1,k&&(k=!1,h(b),b=-1),v=!0;var H=g;try{for(m(S),f=i(s);f!==null&&(!(f.expirationTime>S)||O&&!Q());){var z=f.callback;if(typeof z=="function"){f.callback=null,g=f.priorityLevel;var F=z(f.expirationTime<=S);S=e.unstable_now(),typeof F=="function"?f.callback=F:f===i(s)&&a(s),m(S)}else a(s);f=i(s)}if(f!==null)var se=!0;else{var Le=i(u);Le!==null&&ne(j,Le.startTime-S),se=!1}return se}finally{f=null,g=H,v=!1}}var L=!1,C=null,b=-1,_=5,D=-1;function Q(){return!(e.unstable_now()-D<_)}function T(){if(C!==null){var O=e.unstable_now();D=O;var S=!0;try{S=C(!0,O)}finally{S?J():(L=!1,C=null)}}else L=!1}var J;if(typeof p=="function")J=function(){p(T)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Y=W.port2;W.port1.onmessage=T,J=function(){Y.postMessage(null)}}else J=function(){w(T,0)};function q(O){C=O,L||(L=!0,J())}function ne(O,S){b=w(function(){O(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){R||v||(R=!0,q(P))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return i(s)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var S=3;break;default:S=g}var H=g;g=S;try{return O()}finally{g=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,S){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=g;g=O;try{return S()}finally{g=H}},e.unstable_scheduleCallback=function(O,S,H){var z=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?z+H:z):H=z,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=H+F,O={id:d++,callback:S,priorityLevel:O,startTime:H,expirationTime:F,sortIndex:-1},H>z?(O.sortIndex=H,n(u,O),i(s)===null&&O===i(u)&&(k?(h(b),b=-1):k=!0,ne(j,H-z))):(O.sortIndex=F,n(s,O),R||v||(R=!0,q(P))),O},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(O){var S=g;return function(){var H=g;g=S;try{return O.apply(this,arguments)}finally{g=H}}}})(og);rg.exports=og;var Gm=rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm=K,Ye=Gm;function $(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,lt={};function Ei(e,n){sa(e,n),sa(e+"Capture",n)}function sa(e,n){for(lt[e]=n,e=0;e<n.length;e++)lg.add(n[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Gs={};function nh(e){return Ll.call(Gs,e)?!0:Ll.call(Ys,e)?!1:eh.test(e)?Gs[e]=!0:(Ys[e]=!0,!1)}function ih(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ah(e,n,i,a){if(n===null||typeof n>"u"||ih(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function He(e,n,i,a,t,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new He(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fc=/[\-:]([a-z])/g;function zc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Fc,zc);Ce[n]=new He(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Fc,zc);Ce[n]=new He(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Fc,zc);Ce[n]=new He(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ac(e,n,i,a){var t=Ce.hasOwnProperty(n)?Ce[n]:null;(t!==null?t.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ah(n,i,t,a)&&(i=null),a||t===null?nh(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(n=t.attributeName,a=t.attributeNamespace,i===null?e.removeAttribute(n):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var An=Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bt=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),sg=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Vc=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function Ta(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,zo;function Ia(e){if(zo===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);zo=n&&n[1]||""}return`
`+zo+e}var Ao=!1;function Bo(e,n){if(!e||Ao)return"";Ao=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),r=a.stack.split(`
`),o=t.length-1,c=r.length-1;1<=o&&0<=c&&t[o]!==r[c];)c--;for(;1<=o&&0<=c;o--,c--)if(t[o]!==r[c]){if(o!==1||c!==1)do if(o--,c--,0>c||t[o]!==r[c]){var s=`
`+t[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=c);break}}}finally{Ao=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Ia(e):""}function th(e){switch(e.tag){case 5:return Ia(e.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vi:return"Fragment";case Ii:return"Portal";case Kl:return"Profiler";case Bc:return"StrictMode";case Tl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sg:return(e.displayName||"Context")+".Consumer";case cg:return(e._context.displayName||"Context")+".Provider";case Ic:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vc:return n=e.displayName||null,n!==null?n:$l(e.type)||"Memo";case Wn:n=e._payload,e=e._init;try{return $l(e(n))}catch{}}return null}function rh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(n);case 8:return n===Bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ci(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dg(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function oh(e){var n=dg(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,r=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function It(e){e._valueTracker||(e._valueTracker=oh(e))}function gg(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=dg(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,n){var i=n.checked;return ce({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function eu(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=ci(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fg(e,n){n=n.checked,n!=null&&Ac(e,"checked",n,!1)}function Nl(e,n){fg(e,n);var i=ci(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Sl(e,n.type,i):n.hasOwnProperty("defaultValue")&&Sl(e,n.type,ci(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function nu(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Sl(e,n,i){(n!=="number"||$r(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Va=Array.isArray;function aa(e,n,i,a){if(e=e.options,n){n={};for(var t=0;t<i.length;t++)n["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=n.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&a&&(e[i].defaultSelected=!0)}else{for(i=""+ci(i),n=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function Ml(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error($(91));return ce({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function iu(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error($(92));if(Va(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:ci(i)}}function pg(e,n){var i=ci(n.value),a=ci(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function au(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function mg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?mg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vt,hg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,t){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vt=Vt||document.createElement("div"),Vt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ct(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(e){lh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ya[n]=Ya[e]})});function vg(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ya.hasOwnProperty(e)&&Ya[e]?(""+n).trim():n+"px"}function Rg(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,t=vg(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,t):e[i]=t}}var ch=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,n){if(n){if(ch[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error($(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error($(61))}if(n.style!=null&&typeof n.style!="object")throw Error($(62))}}function Jl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,ta=null,ra=null;function tu(e){if(e=Nt(e)){if(typeof _l!="function")throw Error($(280));var n=e.stateNode;n&&(n=vo(n),_l(e.stateNode,e.type,n))}}function jg(e){ta?ra?ra.push(e):ra=[e]:ta=e}function yg(){if(ta){var e=ta,n=ra;if(ra=ta=null,tu(e),n)for(e=0;e<n.length;e++)tu(n[e])}}function kg(e,n){return e(n)}function wg(){}var Io=!1;function Pg(e,n,i){if(Io)return e(n,i);Io=!0;try{return kg(e,n,i)}finally{Io=!1,(ta!==null||ra!==null)&&(wg(),yg())}}function st(e,n){var i=e.stateNode;if(i===null)return null;var a=vo(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error($(231,n,typeof i));return i}var Fl=!1;if(Jn)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Fl=!1}function sh(e,n,i,a,t,r,o,c,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(i,u)}catch(d){this.onError(d)}}var Ga=!1,Or=null,Nr=!1,zl=null,uh={onError:function(e){Ga=!0,Or=e}};function dh(e,n,i,a,t,r,o,c,s){Ga=!1,Or=null,sh.apply(uh,arguments)}function gh(e,n,i,a,t,r,o,c,s){if(dh.apply(this,arguments),Ga){if(Ga){var u=Or;Ga=!1,Or=null}else throw Error($(198));Nr||(Nr=!0,zl=u)}}function Hi(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function xg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ru(e){if(Hi(e)!==e)throw Error($(188))}function fh(e){var n=e.alternate;if(!n){if(n=Hi(e),n===null)throw Error($(188));return n!==e?null:e}for(var i=e,a=n;;){var t=i.return;if(t===null)break;var r=t.alternate;if(r===null){if(a=t.return,a!==null){i=a;continue}break}if(t.child===r.child){for(r=t.child;r;){if(r===i)return ru(t),e;if(r===a)return ru(t),n;r=r.sibling}throw Error($(188))}if(i.return!==a.return)i=t,a=r;else{for(var o=!1,c=t.child;c;){if(c===i){o=!0,i=t,a=r;break}if(c===a){o=!0,a=t,i=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===i){o=!0,i=r,a=t;break}if(c===a){o=!0,a=r,i=t;break}c=c.sibling}if(!o)throw Error($(189))}}if(i.alternate!==a)throw Error($(190))}if(i.tag!==3)throw Error($(188));return i.stateNode.current===i?e:n}function Cg(e){return e=fh(e),e!==null?Lg(e):null}function Lg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Lg(e);if(n!==null)return n;e=e.sibling}return null}var Kg=Ye.unstable_scheduleCallback,ou=Ye.unstable_cancelCallback,ph=Ye.unstable_shouldYield,mh=Ye.unstable_requestPaint,fe=Ye.unstable_now,hh=Ye.unstable_getCurrentPriorityLevel,Uc=Ye.unstable_ImmediatePriority,Tg=Ye.unstable_UserBlockingPriority,Sr=Ye.unstable_NormalPriority,vh=Ye.unstable_LowPriority,bg=Ye.unstable_IdlePriority,fo=null,Tn=null;function Rh(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:kh,jh=Math.log,yh=Math.LN2;function kh(e){return e>>>=0,e===0?32:31-(jh(e)/yh|0)|0}var Wt=64,Ut=4194304;function Wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,t=e.suspendedLanes,r=e.pingedLanes,o=i&268435455;if(o!==0){var c=o&~t;c!==0?a=Wa(c):(r&=o,r!==0&&(a=Wa(r)))}else o=i&~t,o!==0?a=Wa(o):r!==0&&(a=Wa(r));if(a===0)return 0;if(n!==0&&n!==a&&!(n&t)&&(t=a&-a,r=n&-n,t>=r||t===16&&(r&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-hn(n),t=1<<i,a|=e[i],n&=~t;return a}function wh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ph(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-hn(r),c=1<<o,s=t[o];s===-1?(!(c&i)||c&a)&&(t[o]=wh(c,n)):s<=n&&(e.expiredLanes|=c),r&=~c}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $g(){var e=Wt;return Wt<<=1,!(Wt&4194240)&&(Wt=64),e}function Vo(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function $t(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-hn(n),e[n]=i}function xh(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-hn(i),r=1<<t;n[t]=0,a[t]=-1,e[t]=-1,i&=~r}}function Qc(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-hn(i),t=1<<a;t&n|e[a]&n&&(e[a]|=n),i&=~t}}var Z=0;function Og(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ng,qc,Sg,Mg,Eg,Bl=!1,Qt=[],Xn=null,ei=null,ni=null,ut=new Map,dt=new Map,Qn=[],Ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,n){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ut.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dt.delete(n.pointerId)}}function $a(e,n,i,a,t,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:r,targetContainers:[t]},n!==null&&(n=Nt(n),n!==null&&qc(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function Lh(e,n,i,a,t){switch(n){case"focusin":return Xn=$a(Xn,e,n,i,a,t),!0;case"dragenter":return ei=$a(ei,e,n,i,a,t),!0;case"mouseover":return ni=$a(ni,e,n,i,a,t),!0;case"pointerover":var r=t.pointerId;return ut.set(r,$a(ut.get(r)||null,e,n,i,a,t)),!0;case"gotpointercapture":return r=t.pointerId,dt.set(r,$a(dt.get(r)||null,e,n,i,a,t)),!0}return!1}function Hg(e){var n=Ri(e.target);if(n!==null){var i=Hi(n);if(i!==null){if(n=i.tag,n===13){if(n=xg(i),n!==null){e.blockedOn=n,Eg(e.priority,function(){Sg(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Il(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Dl=a,i.target.dispatchEvent(a),Dl=null}else return n=Nt(i),n!==null&&qc(n),e.blockedOn=i,!1;n.shift()}return!0}function cu(e,n,i){pr(e)&&i.delete(n)}function Kh(){Bl=!1,Xn!==null&&pr(Xn)&&(Xn=null),ei!==null&&pr(ei)&&(ei=null),ni!==null&&pr(ni)&&(ni=null),ut.forEach(cu),dt.forEach(cu)}function Oa(e,n){e.blockedOn===n&&(e.blockedOn=null,Bl||(Bl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Kh)))}function gt(e){function n(t){return Oa(t,e)}if(0<Qt.length){Oa(Qt[0],e);for(var i=1;i<Qt.length;i++){var a=Qt[i];a.blockedOn===e&&(a.blockedOn=null)}}for(Xn!==null&&Oa(Xn,e),ei!==null&&Oa(ei,e),ni!==null&&Oa(ni,e),ut.forEach(n),dt.forEach(n),i=0;i<Qn.length;i++)a=Qn[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(i=Qn[0],i.blockedOn===null);)Hg(i),i.blockedOn===null&&Qn.shift()}var oa=An.ReactCurrentBatchConfig,Er=!0;function Th(e,n,i,a){var t=Z,r=oa.transition;oa.transition=null;try{Z=1,Zc(e,n,i,a)}finally{Z=t,oa.transition=r}}function bh(e,n,i,a){var t=Z,r=oa.transition;oa.transition=null;try{Z=4,Zc(e,n,i,a)}finally{Z=t,oa.transition=r}}function Zc(e,n,i,a){if(Er){var t=Il(e,n,i,a);if(t===null)nl(e,n,a,Hr,i),lu(e,a);else if(Lh(t,e,n,i,a))a.stopPropagation();else if(lu(e,a),n&4&&-1<Ch.indexOf(e)){for(;t!==null;){var r=Nt(t);if(r!==null&&Ng(r),r=Il(e,n,i,a),r===null&&nl(e,n,a,Hr,i),r===t)break;t=r}t!==null&&a.stopPropagation()}else nl(e,n,a,null,i)}}var Hr=null;function Il(e,n,i,a){if(Hr=null,e=Wc(a),e=Ri(e),e!==null)if(n=Hi(e),n===null)e=null;else if(i=n.tag,i===13){if(e=xg(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Hr=e,null}function Jg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hh()){case Uc:return 1;case Tg:return 4;case Sr:case vh:return 16;case bg:return 536870912;default:return 16}default:return 16}}var Zn=null,Yc=null,mr=null;function Dg(){if(mr)return mr;var e,n=Yc,i=n.length,a,t="value"in Zn?Zn.value:Zn.textContent,r=t.length;for(e=0;e<i&&n[e]===t[e];e++);var o=i-e;for(a=1;a<=o&&n[i-a]===t[r-a];a++);return mr=t.slice(e,1<a?1-a:void 0)}function hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qt(){return!0}function su(){return!1}function nn(e){function n(i,a,t,r,o){this._reactName=i,this._targetInst=t,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(i=e[c],this[c]=i?i(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qt:su,this.isPropagationStopped=su,this}return ce(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=nn(Pa),Ot=ce({},Pa,{view:0,detail:0}),$h=nn(Ot),Wo,Uo,Na,po=ce({},Ot,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(Wo=e.screenX-Na.screenX,Uo=e.screenY-Na.screenY):Uo=Wo=0,Na=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),uu=nn(po),Oh=ce({},po,{dataTransfer:0}),Nh=nn(Oh),Sh=ce({},Ot,{relatedTarget:0}),Qo=nn(Sh),Mh=ce({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=nn(Mh),Hh=ce({},Pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jh=nn(Hh),Dh=ce({},Pa,{data:0}),du=nn(Dh),_h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ah(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zh[e])?!!n[e]:!1}function Xc(){return Ah}var Bh=ce({},Ot,{key:function(e){if(e.key){var n=_h[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ih=nn(Bh),Vh=ce({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=nn(Vh),Wh=ce({},Ot,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),Uh=nn(Wh),Qh=ce({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=nn(Qh),Zh=ce({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=nn(Zh),Gh=[9,13,27,32],es=Jn&&"CompositionEvent"in window,Xa=null;Jn&&"documentMode"in document&&(Xa=document.documentMode);var Xh=Jn&&"TextEvent"in window&&!Xa,_g=Jn&&(!es||Xa&&8<Xa&&11>=Xa),fu=" ",pu=!1;function Fg(e,n){switch(e){case"keyup":return Gh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function e0(e,n){switch(e){case"compositionend":return zg(n);case"keypress":return n.which!==32?null:(pu=!0,fu);case"textInput":return e=n.data,e===fu&&pu?null:e;default:return null}}function n0(e,n){if(Wi)return e==="compositionend"||!es&&Fg(e,n)?(e=Dg(),mr=Yc=Zn=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _g&&n.locale!=="ko"?null:n.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!i0[e.type]:n==="textarea"}function Ag(e,n,i,a){jg(a),n=Jr(n,"onChange"),0<n.length&&(i=new Gc("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var et=null,ft=null;function a0(e){Xg(e,0)}function mo(e){var n=qi(e);if(gg(n))return e}function t0(e,n){if(e==="change")return n}var Bg=!1;if(Jn){var qo;if(Jn){var Zo="oninput"in document;if(!Zo){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),Zo=typeof hu.oninput=="function"}qo=Zo}else qo=!1;Bg=qo&&(!document.documentMode||9<document.documentMode)}function vu(){et&&(et.detachEvent("onpropertychange",Ig),ft=et=null)}function Ig(e){if(e.propertyName==="value"&&mo(ft)){var n=[];Ag(n,ft,e,Wc(e)),Pg(a0,n)}}function r0(e,n,i){e==="focusin"?(vu(),et=n,ft=i,et.attachEvent("onpropertychange",Ig)):e==="focusout"&&vu()}function o0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(ft)}function l0(e,n){if(e==="click")return mo(n)}function c0(e,n){if(e==="input"||e==="change")return mo(n)}function s0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:s0;function pt(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var t=i[a];if(!Ll.call(n,t)||!yn(e[t],n[t]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,n){var i=Ru(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ru(i)}}function Vg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wg(){for(var e=window,n=$r();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=$r(e.document)}return n}function ns(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function u0(e){var n=Wg(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Vg(i.ownerDocument.documentElement,i)){if(a!==null&&ns(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,r=Math.min(a.start,t);a=a.end===void 0?r:Math.min(a.end,t),!e.extend&&r>a&&(t=a,a=r,r=t),t=ju(i,r);var o=ju(i,a);t&&o&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),r>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var d0=Jn&&"documentMode"in document&&11>=document.documentMode,Ui=null,Vl=null,nt=null,Wl=!1;function yu(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Wl||Ui==null||Ui!==$r(a)||(a=Ui,"selectionStart"in a&&ns(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),nt&&pt(nt,a)||(nt=a,a=Jr(Vl,"onSelect"),0<a.length&&(n=new Gc("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Ui)))}function Zt(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Qi={animationend:Zt("Animation","AnimationEnd"),animationiteration:Zt("Animation","AnimationIteration"),animationstart:Zt("Animation","AnimationStart"),transitionend:Zt("Transition","TransitionEnd")},Yo={},Ug={};Jn&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function ho(e){if(Yo[e])return Yo[e];if(!Qi[e])return e;var n=Qi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ug)return Yo[e]=n[i];return e}var Qg=ho("animationend"),qg=ho("animationiteration"),Zg=ho("animationstart"),Yg=ho("transitionend"),Gg=new Map,ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(e,n){Gg.set(e,n),Ei(n,[e])}for(var Go=0;Go<ku.length;Go++){var Xo=ku[Go],g0=Xo.toLowerCase(),f0=Xo[0].toUpperCase()+Xo.slice(1);di(g0,"on"+f0)}di(Qg,"onAnimationEnd");di(qg,"onAnimationIteration");di(Zg,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(Yg,"onTransitionEnd");sa("onMouseEnter",["mouseout","mouseover"]);sa("onMouseLeave",["mouseout","mouseover"]);sa("onPointerEnter",["pointerout","pointerover"]);sa("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function wu(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,gh(a,n,void 0,e),e.currentTarget=null}function Xg(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],t=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var o=a.length-1;0<=o;o--){var c=a[o],s=c.instance,u=c.currentTarget;if(c=c.listener,s!==r&&t.isPropagationStopped())break e;wu(t,c,u),r=s}else for(o=0;o<a.length;o++){if(c=a[o],s=c.instance,u=c.currentTarget,c=c.listener,s!==r&&t.isPropagationStopped())break e;wu(t,c,u),r=s}}}if(Nr)throw e=zl,Nr=!1,zl=null,e}function ie(e,n){var i=n[Yl];i===void 0&&(i=n[Yl]=new Set);var a=e+"__bubble";i.has(a)||(ef(n,e,2,!1),i.add(a))}function el(e,n,i){var a=0;n&&(a|=4),ef(i,e,a,n)}var Yt="_reactListening"+Math.random().toString(36).slice(2);function mt(e){if(!e[Yt]){e[Yt]=!0,lg.forEach(function(i){i!=="selectionchange"&&(p0.has(i)||el(i,!1,e),el(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yt]||(n[Yt]=!0,el("selectionchange",!1,n))}}function ef(e,n,i,a){switch(Jg(n)){case 1:var t=Th;break;case 4:t=bh;break;default:t=Zc}i=t.bind(null,n,i,e),t=void 0,!Fl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(n,i,{capture:!0,passive:t}):e.addEventListener(n,i,!0):t!==void 0?e.addEventListener(n,i,{passive:t}):e.addEventListener(n,i,!1)}function nl(e,n,i,a,t){var r=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===t||c.nodeType===8&&c.parentNode===t)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===t||s.nodeType===8&&s.parentNode===t))return;o=o.return}for(;c!==null;){if(o=Ri(c),o===null)return;if(s=o.tag,s===5||s===6){a=r=o;continue e}c=c.parentNode}}a=a.return}Pg(function(){var u=r,d=Wc(i),f=[];e:{var g=Gg.get(e);if(g!==void 0){var v=Gc,R=e;switch(e){case"keypress":if(hr(i)===0)break e;case"keydown":case"keyup":v=Ih;break;case"focusin":R="focus",v=Qo;break;case"focusout":R="blur",v=Qo;break;case"beforeblur":case"afterblur":v=Qo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uh;break;case Qg:case qg:case Zg:v=Eh;break;case Yg:v=qh;break;case"scroll":v=$h;break;case"wheel":v=Yh;break;case"copy":case"cut":case"paste":v=Jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gu}var k=(n&4)!==0,w=!k&&e==="scroll",h=k?g!==null?g+"Capture":null:g;k=[];for(var p=u,m;p!==null;){m=p;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,h!==null&&(j=st(p,h),j!=null&&k.push(ht(p,j,m)))),w)break;p=p.return}0<k.length&&(g=new v(g,R,null,i,d),f.push({event:g,listeners:k}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&i!==Dl&&(R=i.relatedTarget||i.fromElement)&&(Ri(R)||R[Dn]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(R=i.relatedTarget||i.toElement,v=u,R=R?Ri(R):null,R!==null&&(w=Hi(R),R!==w||R.tag!==5&&R.tag!==6)&&(R=null)):(v=null,R=u),v!==R)){if(k=uu,j="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=gu,j="onPointerLeave",h="onPointerEnter",p="pointer"),w=v==null?g:qi(v),m=R==null?g:qi(R),g=new k(j,p+"leave",v,i,d),g.target=w,g.relatedTarget=m,j=null,Ri(d)===u&&(k=new k(h,p+"enter",R,i,d),k.target=m,k.relatedTarget=w,j=k),w=j,v&&R)n:{for(k=v,h=R,p=0,m=k;m;m=zi(m))p++;for(m=0,j=h;j;j=zi(j))m++;for(;0<p-m;)k=zi(k),p--;for(;0<m-p;)h=zi(h),m--;for(;p--;){if(k===h||h!==null&&k===h.alternate)break n;k=zi(k),h=zi(h)}k=null}else k=null;v!==null&&Pu(f,g,v,k,!1),R!==null&&w!==null&&Pu(f,w,R,k,!0)}}e:{if(g=u?qi(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var P=t0;else if(mu(g))if(Bg)P=c0;else{P=o0;var L=r0}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=l0);if(P&&(P=P(e,u))){Ag(f,P,i,d);break e}L&&L(e,g,u),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Sl(g,"number",g.value)}switch(L=u?qi(u):window,e){case"focusin":(mu(L)||L.contentEditable==="true")&&(Ui=L,Vl=u,nt=null);break;case"focusout":nt=Vl=Ui=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,yu(f,i,d);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":yu(f,i,d)}var C;if(es)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Wi?Fg(e,i)&&(b="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(b="onCompositionStart");b&&(_g&&i.locale!=="ko"&&(Wi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Wi&&(C=Dg()):(Zn=d,Yc="value"in Zn?Zn.value:Zn.textContent,Wi=!0)),L=Jr(u,b),0<L.length&&(b=new du(b,e,null,i,d),f.push({event:b,listeners:L}),C?b.data=C:(C=zg(i),C!==null&&(b.data=C)))),(C=Xh?e0(e,i):n0(e,i))&&(u=Jr(u,"onBeforeInput"),0<u.length&&(d=new du("onBeforeInput","beforeinput",null,i,d),f.push({event:d,listeners:u}),d.data=C))}Xg(f,n)})}function ht(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Jr(e,n){for(var i=n+"Capture",a=[];e!==null;){var t=e,r=t.stateNode;t.tag===5&&r!==null&&(t=r,r=st(e,i),r!=null&&a.unshift(ht(e,r,t)),r=st(e,n),r!=null&&a.push(ht(e,r,t))),e=e.return}return a}function zi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pu(e,n,i,a,t){for(var r=n._reactName,o=[];i!==null&&i!==a;){var c=i,s=c.alternate,u=c.stateNode;if(s!==null&&s===a)break;c.tag===5&&u!==null&&(c=u,t?(s=st(i,r),s!=null&&o.unshift(ht(i,s,c))):t||(s=st(i,r),s!=null&&o.push(ht(i,s,c)))),i=i.return}o.length!==0&&e.push({event:n,listeners:o})}var m0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(m0,`
`).replace(h0,"")}function Gt(e,n,i){if(n=xu(n),xu(e)!==n&&i)throw Error($(425))}function Dr(){}var Ul=null,Ql=null;function ql(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(j0)}:Zl;function j0(e){setTimeout(function(){throw e})}function il(e,n){var i=n,a=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){e.removeChild(t),gt(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=t}while(i);gt(n)}function ii(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var xa=Math.random().toString(36).slice(2),Ln="__reactFiber$"+xa,vt="__reactProps$"+xa,Dn="__reactContainer$"+xa,Yl="__reactEvents$"+xa,y0="__reactListeners$"+xa,k0="__reactHandles$"+xa;function Ri(e){var n=e[Ln];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Dn]||i[Ln]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Lu(e);e!==null;){if(i=e[Ln])return i;e=Lu(e)}return n}e=i,i=e.parentNode}return null}function Nt(e){return e=e[Ln]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function vo(e){return e[vt]||null}var Gl=[],Zi=-1;function gi(e){return{current:e}}function te(e){0>Zi||(e.current=Gl[Zi],Gl[Zi]=null,Zi--)}function ee(e,n){Zi++,Gl[Zi]=e.current,e.current=n}var si={},Ne=gi(si),ze=gi(!1),Ki=si;function ua(e,n){var i=e.type.contextTypes;if(!i)return si;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var t={},r;for(r in i)t[r]=n[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function Ae(e){return e=e.childContextTypes,e!=null}function _r(){te(ze),te(Ne)}function Ku(e,n,i){if(Ne.current!==si)throw Error($(168));ee(Ne,n),ee(ze,i)}function nf(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var t in a)if(!(t in n))throw Error($(108,rh(e)||"Unknown",t));return ce({},i,a)}function Fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||si,Ki=Ne.current,ee(Ne,e),ee(ze,ze.current),!0}function Tu(e,n,i){var a=e.stateNode;if(!a)throw Error($(169));i?(e=nf(e,n,Ki),a.__reactInternalMemoizedMergedChildContext=e,te(ze),te(Ne),ee(Ne,e)):te(ze),ee(ze,i)}var Sn=null,Ro=!1,al=!1;function af(e){Sn===null?Sn=[e]:Sn.push(e)}function w0(e){Ro=!0,af(e)}function fi(){if(!al&&Sn!==null){al=!0;var e=0,n=Z;try{var i=Sn;for(Z=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Sn=null,Ro=!1}catch(t){throw Sn!==null&&(Sn=Sn.slice(e+1)),Kg(Uc,fi),t}finally{Z=n,al=!1}}return null}var Yi=[],Gi=0,zr=null,Ar=0,an=[],tn=0,Ti=null,Mn=1,En="";function mi(e,n){Yi[Gi++]=Ar,Yi[Gi++]=zr,zr=e,Ar=n}function tf(e,n,i){an[tn++]=Mn,an[tn++]=En,an[tn++]=Ti,Ti=e;var a=Mn;e=En;var t=32-hn(a)-1;a&=~(1<<t),i+=1;var r=32-hn(n)+t;if(30<r){var o=t-t%5;r=(a&(1<<o)-1).toString(32),a>>=o,t-=o,Mn=1<<32-hn(n)+t|i<<t|a,En=r+e}else Mn=1<<r|i<<t|a,En=e}function is(e){e.return!==null&&(mi(e,1),tf(e,1,0))}function as(e){for(;e===zr;)zr=Yi[--Gi],Yi[Gi]=null,Ar=Yi[--Gi],Yi[Gi]=null;for(;e===Ti;)Ti=an[--tn],an[tn]=null,En=an[--tn],an[tn]=null,Mn=an[--tn],an[tn]=null}var Ze=null,Qe=null,re=!1,pn=null;function rf(e,n){var i=rn(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function bu(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ze=e,Qe=ii(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ze=e,Qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Ti!==null?{id:Mn,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=rn(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Ze=e,Qe=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ec(e){if(re){var n=Qe;if(n){var i=n;if(!bu(e,n)){if(Xl(e))throw Error($(418));n=ii(i.nextSibling);var a=Ze;n&&bu(e,n)?rf(a,i):(e.flags=e.flags&-4097|2,re=!1,Ze=e)}}else{if(Xl(e))throw Error($(418));e.flags=e.flags&-4097|2,re=!1,Ze=e}}}function $u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Xt(e){if(e!==Ze)return!1;if(!re)return $u(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ql(e.type,e.memoizedProps)),n&&(n=Qe)){if(Xl(e))throw of(),Error($(418));for(;n;)rf(e,n),n=ii(n.nextSibling)}if($u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Qe=ii(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Qe=null}}else Qe=Ze?ii(e.stateNode.nextSibling):null;return!0}function of(){for(var e=Qe;e;)e=ii(e.nextSibling)}function da(){Qe=Ze=null,re=!1}function ts(e){pn===null?pn=[e]:pn.push(e)}var P0=An.ReactCurrentBatchConfig;function Sa(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error($(309));var a=i.stateNode}if(!a)throw Error($(147,e));var t=a,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var c=t.refs;o===null?delete c[r]:c[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error($(284));if(!i._owner)throw Error($(290,e))}return e}function er(e,n){throw e=Object.prototype.toString.call(n),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ou(e){var n=e._init;return n(e._payload)}function lf(e){function n(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function i(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function a(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function t(h,p){return h=oi(h,p),h.index=0,h.sibling=null,h}function r(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function c(h,p,m,j){return p===null||p.tag!==6?(p=ul(m,h.mode,j),p.return=h,p):(p=t(p,m),p.return=h,p)}function s(h,p,m,j){var P=m.type;return P===Vi?d(h,p,m.props.children,j,m.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Wn&&Ou(P)===p.type)?(j=t(p,m.props),j.ref=Sa(h,p,m),j.return=h,j):(j=Pr(m.type,m.key,m.props,null,h.mode,j),j.ref=Sa(h,p,m),j.return=h,j)}function u(h,p,m,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=dl(m,h.mode,j),p.return=h,p):(p=t(p,m.children||[]),p.return=h,p)}function d(h,p,m,j,P){return p===null||p.tag!==7?(p=Pi(m,h.mode,j,P),p.return=h,p):(p=t(p,m),p.return=h,p)}function f(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ul(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bt:return m=Pr(p.type,p.key,p.props,null,h.mode,m),m.ref=Sa(h,null,p),m.return=h,m;case Ii:return p=dl(p,h.mode,m),p.return=h,p;case Wn:var j=p._init;return f(h,j(p._payload),m)}if(Va(p)||Ta(p))return p=Pi(p,h.mode,m,null),p.return=h,p;er(h,p)}return null}function g(h,p,m,j){var P=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return P!==null?null:c(h,p,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bt:return m.key===P?s(h,p,m,j):null;case Ii:return m.key===P?u(h,p,m,j):null;case Wn:return P=m._init,g(h,p,P(m._payload),j)}if(Va(m)||Ta(m))return P!==null?null:d(h,p,m,j,null);er(h,m)}return null}function v(h,p,m,j,P){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(m)||null,c(p,h,""+j,P);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Bt:return h=h.get(j.key===null?m:j.key)||null,s(p,h,j,P);case Ii:return h=h.get(j.key===null?m:j.key)||null,u(p,h,j,P);case Wn:var L=j._init;return v(h,p,m,L(j._payload),P)}if(Va(j)||Ta(j))return h=h.get(m)||null,d(p,h,j,P,null);er(p,j)}return null}function R(h,p,m,j){for(var P=null,L=null,C=p,b=p=0,_=null;C!==null&&b<m.length;b++){C.index>b?(_=C,C=null):_=C.sibling;var D=g(h,C,m[b],j);if(D===null){C===null&&(C=_);break}e&&C&&D.alternate===null&&n(h,C),p=r(D,p,b),L===null?P=D:L.sibling=D,L=D,C=_}if(b===m.length)return i(h,C),re&&mi(h,b),P;if(C===null){for(;b<m.length;b++)C=f(h,m[b],j),C!==null&&(p=r(C,p,b),L===null?P=C:L.sibling=C,L=C);return re&&mi(h,b),P}for(C=a(h,C);b<m.length;b++)_=v(C,h,b,m[b],j),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?b:_.key),p=r(_,p,b),L===null?P=_:L.sibling=_,L=_);return e&&C.forEach(function(Q){return n(h,Q)}),re&&mi(h,b),P}function k(h,p,m,j){var P=Ta(m);if(typeof P!="function")throw Error($(150));if(m=P.call(m),m==null)throw Error($(151));for(var L=P=null,C=p,b=p=0,_=null,D=m.next();C!==null&&!D.done;b++,D=m.next()){C.index>b?(_=C,C=null):_=C.sibling;var Q=g(h,C,D.value,j);if(Q===null){C===null&&(C=_);break}e&&C&&Q.alternate===null&&n(h,C),p=r(Q,p,b),L===null?P=Q:L.sibling=Q,L=Q,C=_}if(D.done)return i(h,C),re&&mi(h,b),P;if(C===null){for(;!D.done;b++,D=m.next())D=f(h,D.value,j),D!==null&&(p=r(D,p,b),L===null?P=D:L.sibling=D,L=D);return re&&mi(h,b),P}for(C=a(h,C);!D.done;b++,D=m.next())D=v(C,h,b,D.value,j),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?b:D.key),p=r(D,p,b),L===null?P=D:L.sibling=D,L=D);return e&&C.forEach(function(T){return n(h,T)}),re&&mi(h,b),P}function w(h,p,m,j){if(typeof m=="object"&&m!==null&&m.type===Vi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bt:e:{for(var P=m.key,L=p;L!==null;){if(L.key===P){if(P=m.type,P===Vi){if(L.tag===7){i(h,L.sibling),p=t(L,m.props.children),p.return=h,h=p;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Wn&&Ou(P)===L.type){i(h,L.sibling),p=t(L,m.props),p.ref=Sa(h,L,m),p.return=h,h=p;break e}i(h,L);break}else n(h,L);L=L.sibling}m.type===Vi?(p=Pi(m.props.children,h.mode,j,m.key),p.return=h,h=p):(j=Pr(m.type,m.key,m.props,null,h.mode,j),j.ref=Sa(h,p,m),j.return=h,h=j)}return o(h);case Ii:e:{for(L=m.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){i(h,p.sibling),p=t(p,m.children||[]),p.return=h,h=p;break e}else{i(h,p);break}else n(h,p);p=p.sibling}p=dl(m,h.mode,j),p.return=h,h=p}return o(h);case Wn:return L=m._init,w(h,p,L(m._payload),j)}if(Va(m))return R(h,p,m,j);if(Ta(m))return k(h,p,m,j);er(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(i(h,p.sibling),p=t(p,m),p.return=h,h=p):(i(h,p),p=ul(m,h.mode,j),p.return=h,h=p),o(h)):i(h,p)}return w}var ga=lf(!0),cf=lf(!1),Br=gi(null),Ir=null,Xi=null,rs=null;function os(){rs=Xi=Ir=null}function ls(e){var n=Br.current;te(Br),e._currentValue=n}function nc(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function la(e,n){Ir=e,rs=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function ln(e){var n=e._currentValue;if(rs!==e)if(e={context:e,memoizedValue:n,next:null},Xi===null){if(Ir===null)throw Error($(308));Xi=e,Ir.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return n}var ji=null;function cs(e){ji===null?ji=[e]:ji.push(e)}function sf(e,n,i,a){var t=n.interleaved;return t===null?(i.next=i,cs(n)):(i.next=t.next,t.next=i),n.interleaved=i,_n(e,a)}function _n(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Un=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ai(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,V&2){var t=a.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n,_n(e,i)}return t=a.interleaved,t===null?(n.next=n,cs(a)):(n.next=t.next,t.next=n),a.interleaved=n,_n(e,i)}function vr(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Qc(e,i)}}function Nu(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var t=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?t=r=o:r=r.next=o,i=i.next}while(i!==null);r===null?t=r=n:r=r.next=n}else t=r=n;i={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Vr(e,n,i,a){var t=e.updateQueue;Un=!1;var r=t.firstBaseUpdate,o=t.lastBaseUpdate,c=t.shared.pending;if(c!==null){t.shared.pending=null;var s=c,u=s.next;s.next=null,o===null?r=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==o&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=t.baseState;o=0,d=u=s=null,c=r;do{var g=c.lane,v=c.eventTime;if((a&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var R=e,k=c;switch(g=n,v=i,k.tag){case 1:if(R=k.payload,typeof R=="function"){f=R.call(v,f,g);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,g=typeof R=="function"?R.call(v,f,g):R,g==null)break e;f=ce({},f,g);break e;case 2:Un=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=t.effects,g===null?t.effects=[c]:g.push(c))}else v={eventTime:v,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=v,s=f):d=d.next=v,o|=g;if(c=c.next,c===null){if(c=t.shared.pending,c===null)break;g=c,c=g.next,g.next=null,t.lastBaseUpdate=g,t.shared.pending=null}}while(!0);if(d===null&&(s=f),t.baseState=s,t.firstBaseUpdate=u,t.lastBaseUpdate=d,n=t.shared.interleaved,n!==null){t=n;do o|=t.lane,t=t.next;while(t!==n)}else r===null&&(t.shared.lanes=0);$i|=o,e.lanes=o,e.memoizedState=f}}function Su(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],t=a.callback;if(t!==null){if(a.callback=null,a=i,typeof t!="function")throw Error($(191,t));t.call(a)}}}var St={},bn=gi(St),Rt=gi(St),jt=gi(St);function yi(e){if(e===St)throw Error($(174));return e}function us(e,n){switch(ee(jt,n),ee(Rt,e),ee(bn,St),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:El(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=El(n,e)}te(bn),ee(bn,n)}function fa(){te(bn),te(Rt),te(jt)}function df(e){yi(jt.current);var n=yi(bn.current),i=El(n,e.type);n!==i&&(ee(Rt,e),ee(bn,i))}function ds(e){Rt.current===e&&(te(bn),te(Rt))}var oe=gi(0);function Wr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var tl=[];function gs(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Rr=An.ReactCurrentDispatcher,rl=An.ReactCurrentBatchConfig,bi=0,le=null,ve=null,je=null,Ur=!1,it=!1,yt=0,x0=0;function Ke(){throw Error($(321))}function fs(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!yn(e[i],n[i]))return!1;return!0}function ps(e,n,i,a,t,r){if(bi=r,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rr.current=e===null||e.memoizedState===null?T0:b0,e=i(a,t),it){r=0;do{if(it=!1,yt=0,25<=r)throw Error($(301));r+=1,je=ve=null,n.updateQueue=null,Rr.current=$0,e=i(a,t)}while(it)}if(Rr.current=Qr,n=ve!==null&&ve.next!==null,bi=0,je=ve=le=null,Ur=!1,n)throw Error($(300));return e}function ms(){var e=yt!==0;return yt=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?le.memoizedState=je=e:je=je.next=e,je}function cn(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=je===null?le.memoizedState:je.next;if(n!==null)je=n,ve=e;else{if(e===null)throw Error($(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},je===null?le.memoizedState=je=e:je=je.next=e}return je}function kt(e,n){return typeof n=="function"?n(e):n}function ol(e){var n=cn(),i=n.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=e;var a=ve,t=a.baseQueue,r=i.pending;if(r!==null){if(t!==null){var o=t.next;t.next=r.next,r.next=o}a.baseQueue=t=r,i.pending=null}if(t!==null){r=t.next,a=a.baseState;var c=o=null,s=null,u=r;do{var d=u.lane;if((bi&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(c=s=f,o=a):s=s.next=f,le.lanes|=d,$i|=d}u=u.next}while(u!==null&&u!==r);s===null?o=a:s.next=c,yn(a,n.memoizedState)||(_e=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=s,i.lastRenderedState=a}if(e=i.interleaved,e!==null){t=e;do r=t.lane,le.lanes|=r,$i|=r,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function ll(e){var n=cn(),i=n.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=e;var a=i.dispatch,t=i.pending,r=n.memoizedState;if(t!==null){i.pending=null;var o=t=t.next;do r=e(r,o.action),o=o.next;while(o!==t);yn(r,n.memoizedState)||(_e=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),i.lastRenderedState=r}return[r,a]}function gf(){}function ff(e,n){var i=le,a=cn(),t=n(),r=!yn(a.memoizedState,t);if(r&&(a.memoizedState=t,_e=!0),a=a.queue,hs(hf.bind(null,i,a,e),[e]),a.getSnapshot!==n||r||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,wt(9,mf.bind(null,i,a,t,n),void 0,null),ke===null)throw Error($(349));bi&30||pf(i,n,t)}return t}function pf(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function mf(e,n,i,a){n.value=i,n.getSnapshot=a,vf(n)&&Rf(e)}function hf(e,n,i){return i(function(){vf(n)&&Rf(e)})}function vf(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!yn(e,i)}catch{return!0}}function Rf(e){var n=_n(e,1);n!==null&&vn(n,e,1,-1)}function Mu(e){var n=xn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},n.queue=e,e=e.dispatch=K0.bind(null,le,e),[n.memoizedState,e]}function wt(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function jf(){return cn().memoizedState}function jr(e,n,i,a){var t=xn();le.flags|=e,t.memoizedState=wt(1|n,i,void 0,a===void 0?null:a)}function jo(e,n,i,a){var t=cn();a=a===void 0?null:a;var r=void 0;if(ve!==null){var o=ve.memoizedState;if(r=o.destroy,a!==null&&fs(a,o.deps)){t.memoizedState=wt(n,i,r,a);return}}le.flags|=e,t.memoizedState=wt(1|n,i,r,a)}function Eu(e,n){return jr(8390656,8,e,n)}function hs(e,n){return jo(2048,8,e,n)}function yf(e,n){return jo(4,2,e,n)}function kf(e,n){return jo(4,4,e,n)}function wf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pf(e,n,i){return i=i!=null?i.concat([e]):null,jo(4,4,wf.bind(null,n,e),i)}function vs(){}function xf(e,n){var i=cn();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&fs(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function Cf(e,n){var i=cn();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&fs(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function Lf(e,n,i){return bi&21?(yn(i,n)||(i=$g(),le.lanes|=i,$i|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=i)}function C0(e,n){var i=Z;Z=i!==0&&4>i?i:4,e(!0);var a=rl.transition;rl.transition={};try{e(!1),n()}finally{Z=i,rl.transition=a}}function Kf(){return cn().memoizedState}function L0(e,n,i){var a=ri(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Tf(e))bf(n,i);else if(i=sf(e,n,i,a),i!==null){var t=Me();vn(i,e,a,t),$f(i,n,a)}}function K0(e,n,i){var a=ri(e),t={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Tf(e))bf(n,t);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,c=r(o,i);if(t.hasEagerState=!0,t.eagerState=c,yn(c,o)){var s=n.interleaved;s===null?(t.next=t,cs(n)):(t.next=s.next,s.next=t),n.interleaved=t;return}}catch{}finally{}i=sf(e,n,t,a),i!==null&&(t=Me(),vn(i,e,a,t),$f(i,n,a))}}function Tf(e){var n=e.alternate;return e===le||n!==null&&n===le}function bf(e,n){it=Ur=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function $f(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Qc(e,i)}}var Qr={readContext:ln,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},T0={readContext:ln,useCallback:function(e,n){return xn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:Eu,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,jr(4194308,4,wf.bind(null,n,e),i)},useLayoutEffect:function(e,n){return jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return jr(4,2,e,n)},useMemo:function(e,n){var i=xn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=xn();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=L0.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var n=xn();return e={current:e},n.memoizedState=e},useState:Mu,useDebugValue:vs,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=Mu(!1),n=e[0];return e=C0.bind(null,e[1]),xn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=le,t=xn();if(re){if(i===void 0)throw Error($(407));i=i()}else{if(i=n(),ke===null)throw Error($(349));bi&30||pf(a,n,i)}t.memoizedState=i;var r={value:i,getSnapshot:n};return t.queue=r,Eu(hf.bind(null,a,r,e),[e]),a.flags|=2048,wt(9,mf.bind(null,a,r,i,n),void 0,null),i},useId:function(){var e=xn(),n=ke.identifierPrefix;if(re){var i=En,a=Mn;i=(a&~(1<<32-hn(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=yt++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=x0++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},b0={readContext:ln,useCallback:xf,useContext:ln,useEffect:hs,useImperativeHandle:Pf,useInsertionEffect:yf,useLayoutEffect:kf,useMemo:Cf,useReducer:ol,useRef:jf,useState:function(){return ol(kt)},useDebugValue:vs,useDeferredValue:function(e){var n=cn();return Lf(n,ve.memoizedState,e)},useTransition:function(){var e=ol(kt)[0],n=cn().memoizedState;return[e,n]},useMutableSource:gf,useSyncExternalStore:ff,useId:Kf,unstable_isNewReconciler:!1},$0={readContext:ln,useCallback:xf,useContext:ln,useEffect:hs,useImperativeHandle:Pf,useInsertionEffect:yf,useLayoutEffect:kf,useMemo:Cf,useReducer:ll,useRef:jf,useState:function(){return ll(kt)},useDebugValue:vs,useDeferredValue:function(e){var n=cn();return ve===null?n.memoizedState=e:Lf(n,ve.memoizedState,e)},useTransition:function(){var e=ll(kt)[0],n=cn().memoizedState;return[e,n]},useMutableSource:gf,useSyncExternalStore:ff,useId:Kf,unstable_isNewReconciler:!1};function gn(e,n){if(e&&e.defaultProps){n=ce({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function ic(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:ce({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var yo={isMounted:function(e){return(e=e._reactInternals)?Hi(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=Me(),t=ri(e),r=Hn(a,t);r.payload=n,i!=null&&(r.callback=i),n=ai(e,r,t),n!==null&&(vn(n,e,t,a),vr(n,e,t))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=Me(),t=ri(e),r=Hn(a,t);r.tag=1,r.payload=n,i!=null&&(r.callback=i),n=ai(e,r,t),n!==null&&(vn(n,e,t,a),vr(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Me(),a=ri(e),t=Hn(i,a);t.tag=2,n!=null&&(t.callback=n),n=ai(e,t,a),n!==null&&(vn(n,e,a,i),vr(n,e,a))}};function Hu(e,n,i,a,t,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):n.prototype&&n.prototype.isPureReactComponent?!pt(i,a)||!pt(t,r):!0}function Of(e,n,i){var a=!1,t=si,r=n.contextType;return typeof r=="object"&&r!==null?r=ln(r):(t=Ae(n)?Ki:Ne.current,a=n.contextTypes,r=(a=a!=null)?ua(e,t):si),n=new n(i,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yo,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),n}function Ju(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&yo.enqueueReplaceState(n,n.state,null)}function ac(e,n,i,a){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs={},ss(e);var r=n.contextType;typeof r=="object"&&r!==null?t.context=ln(r):(r=Ae(n)?Ki:Ne.current,t.context=ua(e,r)),t.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ic(e,n,r,i),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&yo.enqueueReplaceState(t,t.state,null),Vr(e,i,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function pa(e,n){try{var i="",a=n;do i+=th(a),a=a.return;while(a);var t=i}catch(r){t=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:t,digest:null}}function cl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function tc(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Nf(e,n,i){i=Hn(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){Zr||(Zr=!0,pc=a),tc(e,n)},i}function Sf(e,n,i){i=Hn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=n.value;i.payload=function(){return a(t)},i.callback=function(){tc(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){tc(e,n),typeof a!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),i}function Du(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new O0;var t=new Set;a.set(n,t)}else t=a.get(n),t===void 0&&(t=new Set,a.set(n,t));t.has(i)||(t.add(i),e=V0.bind(null,e,n,i),n.then(e,e))}function _u(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Fu(e,n,i,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Hn(-1,1),n.tag=2,ai(i,n,1))),i.lanes|=1),e)}var N0=An.ReactCurrentOwner,_e=!1;function Se(e,n,i,a){n.child=e===null?cf(n,null,i,a):ga(n,e.child,i,a)}function zu(e,n,i,a,t){i=i.render;var r=n.ref;return la(n,t),a=ps(e,n,i,a,r,t),i=ms(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Fn(e,n,t)):(re&&i&&is(n),n.flags|=1,Se(e,n,a,t),n.child)}function Au(e,n,i,a,t){if(e===null){var r=i.type;return typeof r=="function"&&!Cs(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=r,Mf(e,n,r,a,t)):(e=Pr(i.type,null,a,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&t)){var o=r.memoizedProps;if(i=i.compare,i=i!==null?i:pt,i(o,a)&&e.ref===n.ref)return Fn(e,n,t)}return n.flags|=1,e=oi(r,a),e.ref=n.ref,e.return=n,n.child=e}function Mf(e,n,i,a,t){if(e!==null){var r=e.memoizedProps;if(pt(r,a)&&e.ref===n.ref)if(_e=!1,n.pendingProps=a=r,(e.lanes&t)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,Fn(e,n,t)}return rc(e,n,i,a,t)}function Ef(e,n,i){var a=n.pendingProps,t=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(na,Ue),Ue|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(na,Ue),Ue|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:i,ee(na,Ue),Ue|=a}else r!==null?(a=r.baseLanes|i,n.memoizedState=null):a=i,ee(na,Ue),Ue|=a;return Se(e,n,t,i),n.child}function Hf(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function rc(e,n,i,a,t){var r=Ae(i)?Ki:Ne.current;return r=ua(n,r),la(n,t),i=ps(e,n,i,a,r,t),a=ms(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Fn(e,n,t)):(re&&a&&is(n),n.flags|=1,Se(e,n,i,t),n.child)}function Bu(e,n,i,a,t){if(Ae(i)){var r=!0;Fr(n)}else r=!1;if(la(n,t),n.stateNode===null)yr(e,n),Of(n,i,a),ac(n,i,a,t),a=!0;else if(e===null){var o=n.stateNode,c=n.memoizedProps;o.props=c;var s=o.context,u=i.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=Ae(i)?Ki:Ne.current,u=ua(n,u));var d=i.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==a||s!==u)&&Ju(n,o,a,u),Un=!1;var g=n.memoizedState;o.state=g,Vr(n,a,o,t),s=n.memoizedState,c!==a||g!==s||ze.current||Un?(typeof d=="function"&&(ic(n,i,d,a),s=n.memoizedState),(c=Un||Hu(n,i,c,a,g,s,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=s),o.props=a,o.state=s,o.context=u,a=c):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,uf(e,n),c=n.memoizedProps,u=n.type===n.elementType?c:gn(n.type,c),o.props=u,f=n.pendingProps,g=o.context,s=i.contextType,typeof s=="object"&&s!==null?s=ln(s):(s=Ae(i)?Ki:Ne.current,s=ua(n,s));var v=i.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==f||g!==s)&&Ju(n,o,a,s),Un=!1,g=n.memoizedState,o.state=g,Vr(n,a,o,t);var R=n.memoizedState;c!==f||g!==R||ze.current||Un?(typeof v=="function"&&(ic(n,i,v,a),R=n.memoizedState),(u=Un||Hu(n,i,u,a,g,R,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,R,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,R,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=R),o.props=a,o.state=R,o.context=s,a=u):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return oc(e,n,i,a,r,t)}function oc(e,n,i,a,t,r){Hf(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return t&&Tu(n,i,!1),Fn(e,n,r);a=n.stateNode,N0.current=n;var c=o&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=ga(n,e.child,null,r),n.child=ga(n,null,c,r)):Se(e,n,c,r),n.memoizedState=a.state,t&&Tu(n,i,!0),n.child}function Jf(e){var n=e.stateNode;n.pendingContext?Ku(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ku(e,n.context,!1),us(e,n.containerInfo)}function Iu(e,n,i,a,t){return da(),ts(t),n.flags|=256,Se(e,n,i,a),n.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Df(e,n,i){var a=n.pendingProps,t=oe.current,r=!1,o=(n.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(t&2)!==0),c?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),ee(oe,t&1),e===null)return ec(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,r?(a=n.mode,r=n.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Po(o,a,0,null),e=Pi(e,a,i,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=cc(i),n.memoizedState=lc,e):Rs(n,o));if(t=e.memoizedState,t!==null&&(c=t.dehydrated,c!==null))return S0(e,n,o,a,c,t,i);if(r){r=a.fallback,o=n.mode,t=e.child,c=t.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&n.child!==t?(a=n.child,a.childLanes=0,a.pendingProps=s,n.deletions=null):(a=oi(t,s),a.subtreeFlags=t.subtreeFlags&14680064),c!==null?r=oi(c,r):(r=Pi(r,o,i,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,a=r,r=n.child,o=e.child.memoizedState,o=o===null?cc(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~i,n.memoizedState=lc,a}return r=e.child,e=r.sibling,a=oi(r,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function Rs(e,n){return n=Po({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function nr(e,n,i,a){return a!==null&&ts(a),ga(n,e.child,null,i),e=Rs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function S0(e,n,i,a,t,r,o){if(i)return n.flags&256?(n.flags&=-257,a=cl(Error($(422))),nr(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=a.fallback,t=n.mode,a=Po({mode:"visible",children:a.children},t,0,null),r=Pi(r,t,o,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,n.mode&1&&ga(n,e.child,null,o),n.child.memoizedState=cc(o),n.memoizedState=lc,r);if(!(n.mode&1))return nr(e,n,o,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var c=a.dgst;return a=c,r=Error($(419)),a=cl(r,a,void 0),nr(e,n,o,a)}if(c=(o&e.childLanes)!==0,_e||c){if(a=ke,a!==null){switch(o&-o){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|o)?0:t,t!==0&&t!==r.retryLane&&(r.retryLane=t,_n(e,t),vn(a,e,t,-1))}return xs(),a=cl(Error($(421))),nr(e,n,o,a)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=W0.bind(null,e),t._reactRetry=n,null):(e=r.treeContext,Qe=ii(t.nextSibling),Ze=n,re=!0,pn=null,e!==null&&(an[tn++]=Mn,an[tn++]=En,an[tn++]=Ti,Mn=e.id,En=e.overflow,Ti=n),n=Rs(n,a.children),n.flags|=4096,n)}function Vu(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),nc(e.return,n,i)}function sl(e,n,i,a,t){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:t}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=i,r.tailMode=t)}function _f(e,n,i){var a=n.pendingProps,t=a.revealOrder,r=a.tail;if(Se(e,n,a.children,i),a=oe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,i,n);else if(e.tag===19)Vu(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ee(oe,a),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(i=n.child,t=null;i!==null;)e=i.alternate,e!==null&&Wr(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=n.child,n.child=null):(t=i.sibling,i.sibling=null),sl(n,!1,t,i,r);break;case"backwards":for(i=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&Wr(e)===null){n.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}sl(n,!0,i,null,r);break;case"together":sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Fn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),$i|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error($(153));if(n.child!==null){for(e=n.child,i=oi(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=oi(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function M0(e,n,i){switch(n.tag){case 3:Jf(n),da();break;case 5:df(n);break;case 1:Ae(n.type)&&Fr(n);break;case 4:us(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,t=n.memoizedProps.value;ee(Br,a._currentValue),a._currentValue=t;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ee(oe,oe.current&1),n.flags|=128,null):i&n.child.childLanes?Df(e,n,i):(ee(oe,oe.current&1),e=Fn(e,n,i),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return _f(e,n,i);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),ee(oe,oe.current),a)break;return null;case 22:case 23:return n.lanes=0,Ef(e,n,i)}return Fn(e,n,i)}var Ff,sc,zf,Af;Ff=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};sc=function(){};zf=function(e,n,i,a){var t=e.memoizedProps;if(t!==a){e=n.stateNode,yi(bn.current);var r=null;switch(i){case"input":t=Ol(e,t),a=Ol(e,a),r=[];break;case"select":t=ce({},t,{value:void 0}),a=ce({},a,{value:void 0}),r=[];break;case"textarea":t=Ml(e,t),a=Ml(e,a),r=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Dr)}Hl(i,a);var o;i=null;for(u in t)if(!a.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var c=t[u];for(o in c)c.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lt.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in a){var s=a[u];if(c=t!=null?t[u]:void 0,a.hasOwnProperty(u)&&s!==c&&(s!=null||c!=null))if(u==="style")if(c){for(o in c)!c.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in s)s.hasOwnProperty(o)&&c[o]!==s[o]&&(i||(i={}),i[o]=s[o])}else i||(r||(r=[]),r.push(u,i)),i=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,c=c?c.__html:void 0,s!=null&&c!==s&&(r=r||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lt.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),r||c===s||(r=[])):(r=r||[]).push(u,s))}i&&(r=r||[]).push("style",i);var u=r;(n.updateQueue=u)&&(n.flags|=4)}};Af=function(e,n,i,a){i!==a&&(n.flags|=4)};function Ma(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function E0(e,n,i){var a=n.pendingProps;switch(as(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return Ae(n.type)&&_r(),Te(n),null;case 3:return a=n.stateNode,fa(),te(ze),te(Ne),gs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,pn!==null&&(vc(pn),pn=null))),sc(e,n),Te(n),null;case 5:ds(n);var t=yi(jt.current);if(i=n.type,e!==null&&n.stateNode!=null)zf(e,n,i,a,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error($(166));return Te(n),null}if(e=yi(bn.current),Xt(n)){a=n.stateNode,i=n.type;var r=n.memoizedProps;switch(a[Ln]=n,a[vt]=r,e=(n.mode&1)!==0,i){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(t=0;t<Ua.length;t++)ie(Ua[t],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":eu(a,r),ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ie("invalid",a);break;case"textarea":iu(a,r),ie("invalid",a)}Hl(i,r),t=null;for(var o in r)if(r.hasOwnProperty(o)){var c=r[o];o==="children"?typeof c=="string"?a.textContent!==c&&(r.suppressHydrationWarning!==!0&&Gt(a.textContent,c,e),t=["children",c]):typeof c=="number"&&a.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&Gt(a.textContent,c,e),t=["children",""+c]):lt.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ie("scroll",a)}switch(i){case"input":It(a),nu(a,r,!0);break;case"textarea":It(a),au(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Dr)}a=t,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mg(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(i,{is:a.is}):(e=o.createElement(i),i==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,i),e[Ln]=n,e[vt]=a,Ff(e,n,!1,!1),n.stateNode=e;e:{switch(o=Jl(i,a),i){case"dialog":ie("cancel",e),ie("close",e),t=a;break;case"iframe":case"object":case"embed":ie("load",e),t=a;break;case"video":case"audio":for(t=0;t<Ua.length;t++)ie(Ua[t],e);t=a;break;case"source":ie("error",e),t=a;break;case"img":case"image":case"link":ie("error",e),ie("load",e),t=a;break;case"details":ie("toggle",e),t=a;break;case"input":eu(e,a),t=Ol(e,a),ie("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=ce({},a,{value:void 0}),ie("invalid",e);break;case"textarea":iu(e,a),t=Ml(e,a),ie("invalid",e);break;default:t=a}Hl(i,t),c=t;for(r in c)if(c.hasOwnProperty(r)){var s=c[r];r==="style"?Rg(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hg(e,s)):r==="children"?typeof s=="string"?(i!=="textarea"||s!=="")&&ct(e,s):typeof s=="number"&&ct(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(lt.hasOwnProperty(r)?s!=null&&r==="onScroll"&&ie("scroll",e):s!=null&&Ac(e,r,s,o))}switch(i){case"input":It(e),nu(e,a,!1);break;case"textarea":It(e),au(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ci(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?aa(e,!!a.multiple,r,!1):a.defaultValue!=null&&aa(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Dr)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Te(n),null;case 6:if(e&&n.stateNode!=null)Af(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error($(166));if(i=yi(jt.current),yi(bn.current),Xt(n)){if(a=n.stateNode,i=n.memoizedProps,a[Ln]=n,(r=a.nodeValue!==i)&&(e=Ze,e!==null))switch(e.tag){case 3:Gt(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gt(a.nodeValue,i,(e.mode&1)!==0)}r&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Ln]=n,n.stateNode=a}return Te(n),null;case 13:if(te(oe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Qe!==null&&n.mode&1&&!(n.flags&128))of(),da(),n.flags|=98560,r=!1;else if(r=Xt(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error($(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error($(317));r[Ln]=n}else da(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Te(n),r=!1}else pn!==null&&(vc(pn),pn=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?Re===0&&(Re=3):xs())),n.updateQueue!==null&&(n.flags|=4),Te(n),null);case 4:return fa(),sc(e,n),e===null&&mt(n.stateNode.containerInfo),Te(n),null;case 10:return ls(n.type._context),Te(n),null;case 17:return Ae(n.type)&&_r(),Te(n),null;case 19:if(te(oe),r=n.memoizedState,r===null)return Te(n),null;if(a=(n.flags&128)!==0,o=r.rendering,o===null)if(a)Ma(r,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Wr(e),o!==null){for(n.flags|=128,Ma(r,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)r=i,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ee(oe,oe.current&1|2),n.child}e=e.sibling}r.tail!==null&&fe()>ma&&(n.flags|=128,a=!0,Ma(r,!1),n.lanes=4194304)}else{if(!a)if(e=Wr(o),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ma(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!re)return Te(n),null}else 2*fe()-r.renderingStartTime>ma&&i!==1073741824&&(n.flags|=128,a=!0,Ma(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(i=r.last,i!==null?i.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=fe(),n.sibling=null,i=oe.current,ee(oe,a?i&1|2:i&1),n):(Te(n),null);case 22:case 23:return Ps(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Ue&1073741824&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),null;case 24:return null;case 25:return null}throw Error($(156,n.tag))}function H0(e,n){switch(as(n),n.tag){case 1:return Ae(n.type)&&_r(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fa(),te(ze),te(Ne),gs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ds(n),null;case 13:if(te(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error($(340));da()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(oe),null;case 4:return fa(),null;case 10:return ls(n.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var ir=!1,Oe=!1,J0=typeof WeakSet=="function"?WeakSet:Set,M=null;function ea(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){de(e,n,a)}else i.current=null}function uc(e,n,i){try{i()}catch(a){de(e,n,a)}}var Wu=!1;function D0(e,n){if(Ul=Er,e=Wg(),ns(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var t=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,c=-1,s=-1,u=0,d=0,f=e,g=null;n:for(;;){for(var v;f!==i||t!==0&&f.nodeType!==3||(c=o+t),f!==r||a!==0&&f.nodeType!==3||(s=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break n;if(g===i&&++u===t&&(c=o),g===r&&++d===a&&(s=o),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}i=c===-1||s===-1?null:{start:c,end:s}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ql={focusedElem:e,selectionRange:i},Er=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var R=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,w=R.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?k:gn(n.type,k),w);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(j){de(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return R=Wu,Wu=!1,R}function at(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var r=t.destroy;t.destroy=void 0,r!==void 0&&uc(n,i,r)}t=t.next}while(t!==a)}}function ko(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function dc(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Bf(e){var n=e.alternate;n!==null&&(e.alternate=null,Bf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ln],delete n[vt],delete n[Yl],delete n[y0],delete n[k0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function If(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||If(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Dr));else if(a!==4&&(e=e.child,e!==null))for(gc(e,n,i),e=e.sibling;e!==null;)gc(e,n,i),e=e.sibling}function fc(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(fc(e,n,i),e=e.sibling;e!==null;)fc(e,n,i),e=e.sibling}var Pe=null,fn=!1;function In(e,n,i){for(i=i.child;i!==null;)Vf(e,n,i),i=i.sibling}function Vf(e,n,i){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(fo,i)}catch{}switch(i.tag){case 5:Oe||ea(i,n);case 6:var a=Pe,t=fn;Pe=null,In(e,n,i),Pe=a,fn=t,Pe!==null&&(fn?(e=Pe,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Pe.removeChild(i.stateNode));break;case 18:Pe!==null&&(fn?(e=Pe,i=i.stateNode,e.nodeType===8?il(e.parentNode,i):e.nodeType===1&&il(e,i),gt(e)):il(Pe,i.stateNode));break;case 4:a=Pe,t=fn,Pe=i.stateNode.containerInfo,fn=!0,In(e,n,i),Pe=a,fn=t;break;case 0:case 11:case 14:case 15:if(!Oe&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var r=t,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&uc(i,n,o),t=t.next}while(t!==a)}In(e,n,i);break;case 1:if(!Oe&&(ea(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(c){de(i,n,c)}In(e,n,i);break;case 21:In(e,n,i);break;case 22:i.mode&1?(Oe=(a=Oe)||i.memoizedState!==null,In(e,n,i),Oe=a):In(e,n,i);break;default:In(e,n,i)}}function Qu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new J0),n.forEach(function(a){var t=U0.bind(null,e,a);i.has(a)||(i.add(a),a.then(t,t))})}}function un(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var t=i[a];try{var r=e,o=n,c=o;e:for(;c!==null;){switch(c.tag){case 5:Pe=c.stateNode,fn=!1;break e;case 3:Pe=c.stateNode.containerInfo,fn=!0;break e;case 4:Pe=c.stateNode.containerInfo,fn=!0;break e}c=c.return}if(Pe===null)throw Error($(160));Vf(r,o,t),Pe=null,fn=!1;var s=t.alternate;s!==null&&(s.return=null),t.return=null}catch(u){de(t,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wf(n,e),n=n.sibling}function Wf(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),kn(e),a&4){try{at(3,e,e.return),ko(3,e)}catch(k){de(e,e.return,k)}try{at(5,e,e.return)}catch(k){de(e,e.return,k)}}break;case 1:un(n,e),kn(e),a&512&&i!==null&&ea(i,i.return);break;case 5:if(un(n,e),kn(e),a&512&&i!==null&&ea(i,i.return),e.flags&32){var t=e.stateNode;try{ct(t,"")}catch(k){de(e,e.return,k)}}if(a&4&&(t=e.stateNode,t!=null)){var r=e.memoizedProps,o=i!==null?i.memoizedProps:r,c=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&fg(t,r),Jl(c,o);var u=Jl(c,r);for(o=0;o<s.length;o+=2){var d=s[o],f=s[o+1];d==="style"?Rg(t,f):d==="dangerouslySetInnerHTML"?hg(t,f):d==="children"?ct(t,f):Ac(t,d,f,u)}switch(c){case"input":Nl(t,r);break;case"textarea":pg(t,r);break;case"select":var g=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?aa(t,!!r.multiple,v,!1):g!==!!r.multiple&&(r.defaultValue!=null?aa(t,!!r.multiple,r.defaultValue,!0):aa(t,!!r.multiple,r.multiple?[]:"",!1))}t[vt]=r}catch(k){de(e,e.return,k)}}break;case 6:if(un(n,e),kn(e),a&4){if(e.stateNode===null)throw Error($(162));t=e.stateNode,r=e.memoizedProps;try{t.nodeValue=r}catch(k){de(e,e.return,k)}}break;case 3:if(un(n,e),kn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{gt(n.containerInfo)}catch(k){de(e,e.return,k)}break;case 4:un(n,e),kn(e);break;case 13:un(n,e),kn(e),t=e.child,t.flags&8192&&(r=t.memoizedState!==null,t.stateNode.isHidden=r,!r||t.alternate!==null&&t.alternate.memoizedState!==null||(ks=fe())),a&4&&Qu(e);break;case 22:if(d=i!==null&&i.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||d,un(n,e),Oe=u):un(n,e),kn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(g=M,v=g.child,g.tag){case 0:case 11:case 14:case 15:at(4,g,g.return);break;case 1:ea(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){a=g,i=g.return;try{n=a,R.props=n.memoizedProps,R.state=n.memoizedState,R.componentWillUnmount()}catch(k){de(a,i,k)}}break;case 5:ea(g,g.return);break;case 22:if(g.memoizedState!==null){Zu(f);continue}}v!==null?(v.return=g,M=v):Zu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{t=f.stateNode,u?(r=t.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,c.style.display=vg("display",o))}catch(k){de(e,e.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){de(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:un(n,e),kn(e),a&4&&Qu(e);break;case 21:break;default:un(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(If(i)){var a=i;break e}i=i.return}throw Error($(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(ct(t,""),a.flags&=-33);var r=Uu(e);fc(e,r,t);break;case 3:case 4:var o=a.stateNode.containerInfo,c=Uu(e);gc(e,c,o);break;default:throw Error($(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _0(e,n,i){M=e,Uf(e)}function Uf(e,n,i){for(var a=(e.mode&1)!==0;M!==null;){var t=M,r=t.child;if(t.tag===22&&a){var o=t.memoizedState!==null||ir;if(!o){var c=t.alternate,s=c!==null&&c.memoizedState!==null||Oe;c=ir;var u=Oe;if(ir=o,(Oe=s)&&!u)for(M=t;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?Yu(t):s!==null?(s.return=o,M=s):Yu(t);for(;r!==null;)M=r,Uf(r),r=r.sibling;M=t,ir=c,Oe=u}qu(e)}else t.subtreeFlags&8772&&r!==null?(r.return=t,M=r):qu(e)}}function qu(e){for(;M!==null;){var n=M;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||ko(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Oe)if(i===null)a.componentDidMount();else{var t=n.elementType===n.type?i.memoizedProps:gn(n.type,i.memoizedProps);a.componentDidUpdate(t,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Su(n,r,a);break;case 3:var o=n.updateQueue;if(o!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Su(n,o,i)}break;case 5:var c=n.stateNode;if(i===null&&n.flags&4){i=c;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&i.focus();break;case"img":s.src&&(i.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&gt(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Oe||n.flags&512&&dc(n)}catch(g){de(n,n.return,g)}}if(n===e){M=null;break}if(i=n.sibling,i!==null){i.return=n.return,M=i;break}M=n.return}}function Zu(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var i=n.sibling;if(i!==null){i.return=n.return,M=i;break}M=n.return}}function Yu(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{ko(4,n)}catch(s){de(n,i,s)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var t=n.return;try{a.componentDidMount()}catch(s){de(n,t,s)}}var r=n.return;try{dc(n)}catch(s){de(n,r,s)}break;case 5:var o=n.return;try{dc(n)}catch(s){de(n,o,s)}}}catch(s){de(n,n.return,s)}if(n===e){M=null;break}var c=n.sibling;if(c!==null){c.return=n.return,M=c;break}M=n.return}}var F0=Math.ceil,qr=An.ReactCurrentDispatcher,js=An.ReactCurrentOwner,on=An.ReactCurrentBatchConfig,V=0,ke=null,me=null,xe=0,Ue=0,na=gi(0),Re=0,Pt=null,$i=0,wo=0,ys=0,tt=null,De=null,ks=0,ma=1/0,On=null,Zr=!1,pc=null,ti=null,ar=!1,Yn=null,Yr=0,rt=0,mc=null,kr=-1,wr=0;function Me(){return V&6?fe():kr!==-1?kr:kr=fe()}function ri(e){return e.mode&1?V&2&&xe!==0?xe&-xe:P0.transition!==null?(wr===0&&(wr=$g()),wr):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Jg(e.type)),e):1}function vn(e,n,i,a){if(50<rt)throw rt=0,mc=null,Error($(185));$t(e,i,a),(!(V&2)||e!==ke)&&(e===ke&&(!(V&2)&&(wo|=i),Re===4&&qn(e,xe)),Be(e,a),i===1&&V===0&&!(n.mode&1)&&(ma=fe()+500,Ro&&fi()))}function Be(e,n){var i=e.callbackNode;Ph(e,n);var a=Mr(e,e===ke?xe:0);if(a===0)i!==null&&ou(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&ou(i),n===1)e.tag===0?w0(Gu.bind(null,e)):af(Gu.bind(null,e)),R0(function(){!(V&6)&&fi()}),i=null;else{switch(Og(a)){case 1:i=Uc;break;case 4:i=Tg;break;case 16:i=Sr;break;case 536870912:i=bg;break;default:i=Sr}i=np(i,Qf.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Qf(e,n){if(kr=-1,wr=0,V&6)throw Error($(327));var i=e.callbackNode;if(ca()&&e.callbackNode!==i)return null;var a=Mr(e,e===ke?xe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Gr(e,a);else{n=a;var t=V;V|=2;var r=Zf();(ke!==e||xe!==n)&&(On=null,ma=fe()+500,wi(e,n));do try{B0();break}catch(c){qf(e,c)}while(!0);os(),qr.current=r,V=t,me!==null?n=0:(ke=null,xe=0,n=Re)}if(n!==0){if(n===2&&(t=Al(e),t!==0&&(a=t,n=hc(e,t))),n===1)throw i=Pt,wi(e,0),qn(e,a),Be(e,fe()),i;if(n===6)qn(e,a);else{if(t=e.current.alternate,!(a&30)&&!z0(t)&&(n=Gr(e,a),n===2&&(r=Al(e),r!==0&&(a=r,n=hc(e,r))),n===1))throw i=Pt,wi(e,0),qn(e,a),Be(e,fe()),i;switch(e.finishedWork=t,e.finishedLanes=a,n){case 0:case 1:throw Error($(345));case 2:hi(e,De,On);break;case 3:if(qn(e,a),(a&130023424)===a&&(n=ks+500-fe(),10<n)){if(Mr(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){Me(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Zl(hi.bind(null,e,De,On),n);break}hi(e,De,On);break;case 4:if(qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,t=-1;0<a;){var o=31-hn(a);r=1<<o,o=n[o],o>t&&(t=o),a&=~r}if(a=t,a=fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*F0(a/1960))-a,10<a){e.timeoutHandle=Zl(hi.bind(null,e,De,On),a);break}hi(e,De,On);break;case 5:hi(e,De,On);break;default:throw Error($(329))}}}return Be(e,fe()),e.callbackNode===i?Qf.bind(null,e):null}function hc(e,n){var i=tt;return e.current.memoizedState.isDehydrated&&(wi(e,n).flags|=256),e=Gr(e,n),e!==2&&(n=De,De=i,n!==null&&vc(n)),e}function vc(e){De===null?De=e:De.push.apply(De,e)}function z0(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var t=i[a],r=t.getSnapshot;t=t.value;try{if(!yn(r(),t))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~ys,n&=~wo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-hn(n),a=1<<i;e[i]=-1,n&=~a}}function Gu(e){if(V&6)throw Error($(327));ca();var n=Mr(e,0);if(!(n&1))return Be(e,fe()),null;var i=Gr(e,n);if(e.tag!==0&&i===2){var a=Al(e);a!==0&&(n=a,i=hc(e,a))}if(i===1)throw i=Pt,wi(e,0),qn(e,n),Be(e,fe()),i;if(i===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,hi(e,De,On),Be(e,fe()),null}function ws(e,n){var i=V;V|=1;try{return e(n)}finally{V=i,V===0&&(ma=fe()+500,Ro&&fi())}}function Oi(e){Yn!==null&&Yn.tag===0&&!(V&6)&&ca();var n=V;V|=1;var i=on.transition,a=Z;try{if(on.transition=null,Z=1,e)return e()}finally{Z=a,on.transition=i,V=n,!(V&6)&&fi()}}function Ps(){Ue=na.current,te(na)}function wi(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,v0(i)),me!==null)for(i=me.return;i!==null;){var a=i;switch(as(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_r();break;case 3:fa(),te(ze),te(Ne),gs();break;case 5:ds(a);break;case 4:fa();break;case 13:te(oe);break;case 19:te(oe);break;case 10:ls(a.type._context);break;case 22:case 23:Ps()}i=i.return}if(ke=e,me=e=oi(e.current,null),xe=Ue=n,Re=0,Pt=null,ys=wo=$i=0,De=tt=null,ji!==null){for(n=0;n<ji.length;n++)if(i=ji[n],a=i.interleaved,a!==null){i.interleaved=null;var t=a.next,r=i.pending;if(r!==null){var o=r.next;r.next=t,a.next=o}i.pending=a}ji=null}return e}function qf(e,n){do{var i=me;try{if(os(),Rr.current=Qr,Ur){for(var a=le.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Ur=!1}if(bi=0,je=ve=le=null,it=!1,yt=0,js.current=null,i===null||i.return===null){Re=1,Pt=n,me=null;break}e:{var r=e,o=i.return,c=i,s=n;if(n=xe,c.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=_u(o);if(v!==null){v.flags&=-257,Fu(v,o,c,r,n),v.mode&1&&Du(r,u,n),n=v,s=u;var R=n.updateQueue;if(R===null){var k=new Set;k.add(s),n.updateQueue=k}else R.add(s);break e}else{if(!(n&1)){Du(r,u,n),xs();break e}s=Error($(426))}}else if(re&&c.mode&1){var w=_u(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Fu(w,o,c,r,n),ts(pa(s,c));break e}}r=s=pa(s,c),Re!==4&&(Re=2),tt===null?tt=[r]:tt.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var h=Nf(r,s,n);Nu(r,h);break e;case 1:c=s;var p=r.type,m=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ti===null||!ti.has(m)))){r.flags|=65536,n&=-n,r.lanes|=n;var j=Sf(r,c,n);Nu(r,j);break e}}r=r.return}while(r!==null)}Gf(i)}catch(P){n=P,me===i&&i!==null&&(me=i=i.return);continue}break}while(!0)}function Zf(){var e=qr.current;return qr.current=Qr,e===null?Qr:e}function xs(){(Re===0||Re===3||Re===2)&&(Re=4),ke===null||!($i&268435455)&&!(wo&268435455)||qn(ke,xe)}function Gr(e,n){var i=V;V|=2;var a=Zf();(ke!==e||xe!==n)&&(On=null,wi(e,n));do try{A0();break}catch(t){qf(e,t)}while(!0);if(os(),V=i,qr.current=a,me!==null)throw Error($(261));return ke=null,xe=0,Re}function A0(){for(;me!==null;)Yf(me)}function B0(){for(;me!==null&&!ph();)Yf(me)}function Yf(e){var n=ep(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,n===null?Gf(e):me=n,js.current=null}function Gf(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=H0(i,n),i!==null){i.flags&=32767,me=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,me=null;return}}else if(i=E0(i,n,Ue),i!==null){me=i;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Re===0&&(Re=5)}function hi(e,n,i){var a=Z,t=on.transition;try{on.transition=null,Z=1,I0(e,n,i,a)}finally{on.transition=t,Z=a}return null}function I0(e,n,i,a){do ca();while(Yn!==null);if(V&6)throw Error($(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(xh(e,r),e===ke&&(me=ke=null,xe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ar||(ar=!0,np(Sr,function(){return ca(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=on.transition,on.transition=null;var o=Z;Z=1;var c=V;V|=4,js.current=null,D0(e,i),Wf(i,e),u0(Ql),Er=!!Ul,Ql=Ul=null,e.current=i,_0(i),mh(),V=c,Z=o,on.transition=r}else e.current=i;if(ar&&(ar=!1,Yn=e,Yr=t),r=e.pendingLanes,r===0&&(ti=null),Rh(i.stateNode),Be(e,fe()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)t=n[i],a(t.value,{componentStack:t.stack,digest:t.digest});if(Zr)throw Zr=!1,e=pc,pc=null,e;return Yr&1&&e.tag!==0&&ca(),r=e.pendingLanes,r&1?e===mc?rt++:(rt=0,mc=e):rt=0,fi(),null}function ca(){if(Yn!==null){var e=Og(Yr),n=on.transition,i=Z;try{if(on.transition=null,Z=16>e?16:e,Yn===null)var a=!1;else{if(e=Yn,Yn=null,Yr=0,V&6)throw Error($(331));var t=V;for(V|=4,M=e.current;M!==null;){var r=M,o=r.child;if(M.flags&16){var c=r.deletions;if(c!==null){for(var s=0;s<c.length;s++){var u=c[s];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:at(8,d,r)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var g=d.sibling,v=d.return;if(Bf(d),d===u){M=null;break}if(g!==null){g.return=v,M=g;break}M=v}}}var R=r.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var w=k.sibling;k.sibling=null,k=w}while(k!==null)}}M=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,M=o;else e:for(;M!==null;){if(r=M,r.flags&2048)switch(r.tag){case 0:case 11:case 15:at(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,M=h;break e}M=r.return}}var p=e.current;for(M=p;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=p;M!==null;){if(c=M,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ko(9,c)}}catch(P){de(c,c.return,P)}if(c===o){M=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,M=j;break e}M=c.return}}if(V=t,fi(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(fo,e)}catch{}a=!0}return a}finally{Z=i,on.transition=n}}return!1}function Xu(e,n,i){n=pa(i,n),n=Nf(e,n,1),e=ai(e,n,1),n=Me(),e!==null&&($t(e,1,n),Be(e,n))}function de(e,n,i){if(e.tag===3)Xu(e,e,i);else for(;n!==null;){if(n.tag===3){Xu(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ti===null||!ti.has(a))){e=pa(i,e),e=Sf(n,e,1),n=ai(n,e,1),e=Me(),n!==null&&($t(n,1,e),Be(n,e));break}}n=n.return}}function V0(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=Me(),e.pingedLanes|=e.suspendedLanes&i,ke===e&&(xe&i)===i&&(Re===4||Re===3&&(xe&130023424)===xe&&500>fe()-ks?wi(e,0):ys|=i),Be(e,n)}function Xf(e,n){n===0&&(e.mode&1?(n=Ut,Ut<<=1,!(Ut&130023424)&&(Ut=4194304)):n=1);var i=Me();e=_n(e,n),e!==null&&($t(e,n,i),Be(e,i))}function W0(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Xf(e,i)}function U0(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error($(314))}a!==null&&a.delete(n),Xf(e,i)}var ep;ep=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||ze.current)_e=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return _e=!1,M0(e,n,i);_e=!!(e.flags&131072)}else _e=!1,re&&n.flags&1048576&&tf(n,Ar,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;yr(e,n),e=n.pendingProps;var t=ua(n,Ne.current);la(n,i),t=ps(null,n,a,e,t,i);var r=ms();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(a)?(r=!0,Fr(n)):r=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,ss(n),t.updater=yo,n.stateNode=t,t._reactInternals=n,ac(n,a,e,i),n=oc(null,n,a,!0,r,i)):(n.tag=0,re&&r&&is(n),Se(null,n,t,i),n=n.child),n;case 16:a=n.elementType;e:{switch(yr(e,n),e=n.pendingProps,t=a._init,a=t(a._payload),n.type=a,t=n.tag=q0(a),e=gn(a,e),t){case 0:n=rc(null,n,a,e,i);break e;case 1:n=Bu(null,n,a,e,i);break e;case 11:n=zu(null,n,a,e,i);break e;case 14:n=Au(null,n,a,gn(a.type,e),i);break e}throw Error($(306,a,""))}return n;case 0:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),rc(e,n,a,t,i);case 1:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),Bu(e,n,a,t,i);case 3:e:{if(Jf(n),e===null)throw Error($(387));a=n.pendingProps,r=n.memoizedState,t=r.element,uf(e,n),Vr(n,a,null,i);var o=n.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){t=pa(Error($(423)),n),n=Iu(e,n,a,i,t);break e}else if(a!==t){t=pa(Error($(424)),n),n=Iu(e,n,a,i,t);break e}else for(Qe=ii(n.stateNode.containerInfo.firstChild),Ze=n,re=!0,pn=null,i=cf(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(da(),a===t){n=Fn(e,n,i);break e}Se(e,n,a,i)}n=n.child}return n;case 5:return df(n),e===null&&ec(n),a=n.type,t=n.pendingProps,r=e!==null?e.memoizedProps:null,o=t.children,ql(a,t)?o=null:r!==null&&ql(a,r)&&(n.flags|=32),Hf(e,n),Se(e,n,o,i),n.child;case 6:return e===null&&ec(n),null;case 13:return Df(e,n,i);case 4:return us(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ga(n,null,a,i):Se(e,n,a,i),n.child;case 11:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),zu(e,n,a,t,i);case 7:return Se(e,n,n.pendingProps,i),n.child;case 8:return Se(e,n,n.pendingProps.children,i),n.child;case 12:return Se(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,t=n.pendingProps,r=n.memoizedProps,o=t.value,ee(Br,a._currentValue),a._currentValue=o,r!==null)if(yn(r.value,o)){if(r.children===t.children&&!ze.current){n=Fn(e,n,i);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var c=r.dependencies;if(c!==null){o=r.child;for(var s=c.firstContext;s!==null;){if(s.context===a){if(r.tag===1){s=Hn(-1,i&-i),s.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}r.lanes|=i,s=r.alternate,s!==null&&(s.lanes|=i),nc(r.return,i,n),c.lanes|=i;break}s=s.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error($(341));o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),nc(o,i,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Se(e,n,t.children,i),n=n.child}return n;case 9:return t=n.type,a=n.pendingProps.children,la(n,i),t=ln(t),a=a(t),n.flags|=1,Se(e,n,a,i),n.child;case 14:return a=n.type,t=gn(a,n.pendingProps),t=gn(a.type,t),Au(e,n,a,t,i);case 15:return Mf(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:gn(a,t),yr(e,n),n.tag=1,Ae(a)?(e=!0,Fr(n)):e=!1,la(n,i),Of(n,a,t),ac(n,a,t,i),oc(null,n,a,!0,e,i);case 19:return _f(e,n,i);case 22:return Ef(e,n,i)}throw Error($(156,n.tag))};function np(e,n){return Kg(e,n)}function Q0(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(e,n,i,a){return new Q0(e,n,i,a)}function Cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q0(e){if(typeof e=="function")return Cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ic)return 11;if(e===Vc)return 14}return 2}function oi(e,n){var i=e.alternate;return i===null?(i=rn(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Pr(e,n,i,a,t,r){var o=2;if(a=e,typeof e=="function")Cs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vi:return Pi(i.children,t,r,n);case Bc:o=8,t|=8;break;case Kl:return e=rn(12,i,n,t|2),e.elementType=Kl,e.lanes=r,e;case Tl:return e=rn(13,i,n,t),e.elementType=Tl,e.lanes=r,e;case bl:return e=rn(19,i,n,t),e.elementType=bl,e.lanes=r,e;case ug:return Po(i,t,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cg:o=10;break e;case sg:o=9;break e;case Ic:o=11;break e;case Vc:o=14;break e;case Wn:o=16,a=null;break e}throw Error($(130,e==null?e:typeof e,""))}return n=rn(o,i,n,t),n.elementType=e,n.type=a,n.lanes=r,n}function Pi(e,n,i,a){return e=rn(7,e,a,n),e.lanes=i,e}function Po(e,n,i,a){return e=rn(22,e,a,n),e.elementType=ug,e.lanes=i,e.stateNode={isHidden:!1},e}function ul(e,n,i){return e=rn(6,e,null,n),e.lanes=i,e}function dl(e,n,i){return n=rn(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Z0(e,n,i,a,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Ls(e,n,i,a,t,r,o,c,s){return e=new Z0(e,n,i,c,s),n===1?(n=1,r===!0&&(n|=8)):n=0,r=rn(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ss(r),e}function Y0(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function ip(e){if(!e)return si;e=e._reactInternals;e:{if(Hi(e)!==e||e.tag!==1)throw Error($(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error($(171))}if(e.tag===1){var i=e.type;if(Ae(i))return nf(e,i,n)}return n}function ap(e,n,i,a,t,r,o,c,s){return e=Ls(i,a,!0,e,t,r,o,c,s),e.context=ip(null),i=e.current,a=Me(),t=ri(i),r=Hn(a,t),r.callback=n??null,ai(i,r,t),e.current.lanes=t,$t(e,t,a),Be(e,a),e}function xo(e,n,i,a){var t=n.current,r=Me(),o=ri(t);return i=ip(i),n.context===null?n.context=i:n.pendingContext=i,n=Hn(r,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=ai(t,n,o),e!==null&&(vn(e,t,o,r),vr(e,t,o)),o}function Xr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Ks(e,n){ed(e,n),(e=e.alternate)&&ed(e,n)}function G0(){return null}var tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}Co.prototype.render=Ts.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error($(409));xo(e,n,null,null)};Co.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Oi(function(){xo(null,e,null,null)}),n[Dn]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mg();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Qn.length&&n!==0&&n<Qn[i].priority;i++);Qn.splice(i,0,e),i===0&&Hg(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function X0(e,n,i,a,t){if(t){if(typeof a=="function"){var r=a;a=function(){var u=Xr(o);r.call(u)}}var o=ap(n,a,e,0,null,!1,!1,"",nd);return e._reactRootContainer=o,e[Dn]=o.current,mt(e.nodeType===8?e.parentNode:e),Oi(),o}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var c=a;a=function(){var u=Xr(s);c.call(u)}}var s=Ls(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=s,e[Dn]=s.current,mt(e.nodeType===8?e.parentNode:e),Oi(function(){xo(n,s,i,a)}),s}function Ko(e,n,i,a,t){var r=i._reactRootContainer;if(r){var o=r;if(typeof t=="function"){var c=t;t=function(){var s=Xr(o);c.call(s)}}xo(n,o,e,t)}else o=X0(i,n,e,t,a);return Xr(o)}Ng=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Wa(n.pendingLanes);i!==0&&(Qc(n,i|1),Be(n,fe()),!(V&6)&&(ma=fe()+500,fi()))}break;case 13:Oi(function(){var a=_n(e,1);if(a!==null){var t=Me();vn(a,e,1,t)}}),Ks(e,1)}};qc=function(e){if(e.tag===13){var n=_n(e,134217728);if(n!==null){var i=Me();vn(n,e,134217728,i)}Ks(e,134217728)}};Sg=function(e){if(e.tag===13){var n=ri(e),i=_n(e,n);if(i!==null){var a=Me();vn(i,e,n,a)}Ks(e,n)}};Mg=function(){return Z};Eg=function(e,n){var i=Z;try{return Z=e,n()}finally{Z=i}};_l=function(e,n,i){switch(n){case"input":if(Nl(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var t=vo(a);if(!t)throw Error($(90));gg(a),Nl(a,t)}}}break;case"textarea":pg(e,i);break;case"select":n=i.value,n!=null&&aa(e,!!i.multiple,n,!1)}};kg=ws;wg=Oi;var ev={usingClientEntryPoint:!1,Events:[Nt,qi,vo,jg,yg,ws]},Ea={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nv={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{fo=tr.inject(nv),Tn=tr}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;en.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(n))throw Error($(200));return Y0(e,n,null,i)};en.createRoot=function(e,n){if(!bs(e))throw Error($(299));var i=!1,a="",t=tp;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=Ls(e,1,!1,null,null,i,!1,a,t),e[Dn]=n.current,mt(e.nodeType===8?e.parentNode:e),new Ts(n)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Cg(n),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return Oi(e)};en.hydrate=function(e,n,i){if(!Lo(n))throw Error($(200));return Ko(null,e,n,!0,i)};en.hydrateRoot=function(e,n,i){if(!bs(e))throw Error($(405));var a=i!=null&&i.hydratedSources||null,t=!1,r="",o=tp;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),n=ap(n,null,e,1,i??null,t,!1,r,o),e[Dn]=n.current,mt(e),a)for(e=0;e<a.length;e++)i=a[e],t=i._getVersion,t=t(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,t]:n.mutableSourceEagerHydrationData.push(i,t);return new Co(n)};en.render=function(e,n,i){if(!Lo(n))throw Error($(200));return Ko(null,e,n,!1,i)};en.unmountComponentAtNode=function(e){if(!Lo(e))throw Error($(40));return e._reactRootContainer?(Oi(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};en.unstable_batchedUpdates=ws;en.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!Lo(i))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Ko(e,n,i,!1,a)};en.version="18.3.1-next-f1338f8080-20240426";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),tg.exports=en;var iv=tg.exports,id=iv;Cl.createRoot=id.createRoot,Cl.hydrateRoot=id.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xt(){return xt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},xt.apply(this,arguments)}var Gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gn||(Gn={}));const ad="popstate";function av(e){e===void 0&&(e={});function n(a,t){let{pathname:r,search:o,hash:c}=a.location;return Rc("",{pathname:r,search:o,hash:c},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function i(a,t){return typeof t=="string"?t:eo(t)}return rv(n,i,null,e)}function he(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function op(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function tv(){return Math.random().toString(36).substr(2,8)}function td(e,n){return{usr:e.state,key:e.key,idx:n}}function Rc(e,n,i,a){return i===void 0&&(i=null),xt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ca(n):n,{state:i,key:n&&n.key||a||tv()})}function eo(e){let{pathname:n="/",search:i="",hash:a=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Ca(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function rv(e,n,i,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:r=!1}=a,o=t.history,c=Gn.Pop,s=null,u=d();u==null&&(u=0,o.replaceState(xt({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){c=Gn.Pop;let w=d(),h=w==null?null:w-u;u=w,s&&s({action:c,location:k.location,delta:h})}function g(w,h){c=Gn.Push;let p=Rc(k.location,w,h);u=d()+1;let m=td(p,u),j=k.createHref(p);try{o.pushState(m,"",j)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;t.location.assign(j)}r&&s&&s({action:c,location:k.location,delta:1})}function v(w,h){c=Gn.Replace;let p=Rc(k.location,w,h);u=d();let m=td(p,u),j=k.createHref(p);o.replaceState(m,"",j),r&&s&&s({action:c,location:k.location,delta:0})}function R(w){let h=t.location.origin!=="null"?t.location.origin:t.location.href,p=typeof w=="string"?w:eo(w);return p=p.replace(/ $/,"%20"),he(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let k={get action(){return c},get location(){return e(t,o)},listen(w){if(s)throw new Error("A history only accepts one active listener");return t.addEventListener(ad,f),s=w,()=>{t.removeEventListener(ad,f),s=null}},createHref(w){return n(t,w)},createURL:R,encodeLocation(w){let h=R(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:v,go(w){return o.go(w)}};return k}var rd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rd||(rd={}));function ov(e,n,i){return i===void 0&&(i="/"),lv(e,n,i,!1)}function lv(e,n,i,a){let t=typeof n=="string"?Ca(n):n,r=$s(t.pathname||"/",i);if(r==null)return null;let o=lp(e);cv(o);let c=null;for(let s=0;c==null&&s<o.length;++s){let u=jv(r);c=vv(o[s],u,a)}return c}function lp(e,n,i,a){n===void 0&&(n=[]),i===void 0&&(i=[]),a===void 0&&(a="");let t=(r,o,c)=>{let s={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};s.relativePath.startsWith("/")&&(he(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let u=li([a,s.relativePath]),d=i.concat(s);r.children&&r.children.length>0&&(he(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lp(r.children,n,d,u)),!(r.path==null&&!r.index)&&n.push({path:u,score:mv(u,r.index),routesMeta:d})};return e.forEach((r,o)=>{var c;if(r.path===""||!((c=r.path)!=null&&c.includes("?")))t(r,o);else for(let s of cp(r.path))t(r,o,s)}),n}function cp(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,t=i.endsWith("?"),r=i.replace(/\?$/,"");if(a.length===0)return t?[r,""]:[r];let o=cp(a.join("/")),c=[];return c.push(...o.map(s=>s===""?r:[r,s].join("/"))),t&&c.push(...o),c.map(s=>e.startsWith("/")&&s===""?"/":s)}function cv(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:hv(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}const sv=/^:[\w-]+$/,uv=3,dv=2,gv=1,fv=10,pv=-2,od=e=>e==="*";function mv(e,n){let i=e.split("/"),a=i.length;return i.some(od)&&(a+=pv),n&&(a+=dv),i.filter(t=>!od(t)).reduce((t,r)=>t+(sv.test(r)?uv:r===""?gv:fv),a)}function hv(e,n){return e.length===n.length&&e.slice(0,-1).every((a,t)=>a===n[t])?e[e.length-1]-n[n.length-1]:0}function vv(e,n,i){let{routesMeta:a}=e,t={},r="/",o=[];for(let c=0;c<a.length;++c){let s=a[c],u=c===a.length-1,d=r==="/"?n:n.slice(r.length)||"/",f=ld({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),g=s.route;if(!f&&u&&i&&!a[a.length-1].route.index&&(f=ld({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!f)return null;Object.assign(t,f.params),o.push({params:t,pathname:li([r,f.pathname]),pathnameBase:Pv(li([r,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(r=li([r,f.pathnameBase]))}return o}function ld(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=Rv(e.path,e.caseSensitive,e.end),t=n.match(i);if(!t)return null;let r=t[0],o=r.replace(/(.)\/+$/,"$1"),c=t.slice(1);return{params:a.reduce((u,d,f)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let k=c[f]||"";o=r.slice(0,r.length-k.length).replace(/(.)\/+$/,"$1")}const R=c[f];return v&&!R?u[g]=void 0:u[g]=(R||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:o,pattern:e}}function Rv(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),op(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,s)=>(a.push({paramName:c,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,n?void 0:"i"),a]}function jv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return op(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function $s(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function yv(e,n){n===void 0&&(n="/");let{pathname:i,search:a="",hash:t=""}=typeof e=="string"?Ca(e):e;return{pathname:i?i.startsWith("/")?i:kv(i,n):n,search:xv(a),hash:Cv(t)}}function kv(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?i.length>1&&i.pop():t!=="."&&i.push(t)}),i.length>1?i.join("/"):"/"}function gl(e,n,i,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wv(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function sp(e,n){let i=wv(e);return n?i.map((a,t)=>t===i.length-1?a.pathname:a.pathnameBase):i.map(a=>a.pathnameBase)}function up(e,n,i,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=Ca(e):(t=xt({},e),he(!t.pathname||!t.pathname.includes("?"),gl("?","pathname","search",t)),he(!t.pathname||!t.pathname.includes("#"),gl("#","pathname","hash",t)),he(!t.search||!t.search.includes("#"),gl("#","search","hash",t)));let r=e===""||t.pathname==="",o=r?"/":t.pathname,c;if(o==null)c=i;else{let f=n.length-1;if(!a&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;t.pathname=g.join("/")}c=f>=0?n[f]:"/"}let s=yv(t,c),u=o&&o!=="/"&&o.endsWith("/"),d=(r||o===".")&&i.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const li=e=>e.join("/").replace(/\/\/+/g,"/"),Pv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dp=["post","put","patch","delete"];new Set(dp);const Kv=["get",...dp];new Set(Kv);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Ct.apply(this,arguments)}const Os=K.createContext(null),Tv=K.createContext(null),Ji=K.createContext(null),To=K.createContext(null),Di=K.createContext({outlet:null,matches:[],isDataRoute:!1}),gp=K.createContext(null);function bv(e,n){let{relative:i}=n===void 0?{}:n;Mt()||he(!1);let{basename:a,navigator:t}=K.useContext(Ji),{hash:r,pathname:o,search:c}=pp(e,{relative:i}),s=o;return a!=="/"&&(s=o==="/"?a:li([a,o])),t.createHref({pathname:s,search:c,hash:r})}function Mt(){return K.useContext(To)!=null}function ge(){return Mt()||he(!1),K.useContext(To).location}function fp(e){K.useContext(Ji).static||K.useLayoutEffect(e)}function pi(){let{isDataRoute:e}=K.useContext(Di);return e?Av():$v()}function $v(){Mt()||he(!1);let e=K.useContext(Os),{basename:n,future:i,navigator:a}=K.useContext(Ji),{matches:t}=K.useContext(Di),{pathname:r}=ge(),o=JSON.stringify(sp(t,i.v7_relativeSplatPath)),c=K.useRef(!1);return fp(()=>{c.current=!0}),K.useCallback(function(u,d){if(d===void 0&&(d={}),!c.current)return;if(typeof u=="number"){a.go(u);return}let f=up(u,JSON.parse(o),r,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:li([n,f.pathname])),(d.replace?a.replace:a.push)(f,d.state,d)},[n,a,o,r,e])}function pp(e,n){let{relative:i}=n===void 0?{}:n,{future:a}=K.useContext(Ji),{matches:t}=K.useContext(Di),{pathname:r}=ge(),o=JSON.stringify(sp(t,a.v7_relativeSplatPath));return K.useMemo(()=>up(e,JSON.parse(o),r,i==="path"),[e,o,r,i])}function Ov(e,n){return Nv(e,n)}function Nv(e,n,i,a){Mt()||he(!1);let{navigator:t}=K.useContext(Ji),{matches:r}=K.useContext(Di),o=r[r.length-1],c=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=ge(),d;if(n){var f;let w=typeof n=="string"?Ca(n):n;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||he(!1),d=w}else d=u;let g=d.pathname||"/",v=g;if(s!=="/"){let w=s.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let R=ov(e,{pathname:v}),k=Jv(R&&R.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:li([s,t.encodeLocation?t.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:li([s,t.encodeLocation?t.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),r,i,a);return n&&k?K.createElement(To.Provider,{value:{location:Ct({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gn.Pop}},k):k}function Sv(){let e=zv(),n=Lv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},n),i?K.createElement("pre",{style:t},i):null,null)}const Mv=K.createElement(Sv,null);class Ev extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?K.createElement(Di.Provider,{value:this.props.routeContext},K.createElement(gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hv(e){let{routeContext:n,match:i,children:a}=e,t=K.useContext(Os);return t&&t.static&&t.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=i.route.id),K.createElement(Di.Provider,{value:n},a)}function Jv(e,n,i,a){var t;if(n===void 0&&(n=[]),i===void 0&&(i=null),a===void 0&&(a=null),e==null){var r;if(!i)return null;if(i.errors)e=i.matches;else if((r=a)!=null&&r.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=(t=i)==null?void 0:t.errors;if(c!=null){let d=o.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);d>=0||he(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,u=-1;if(i&&a&&a.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:v}=i,R=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||R){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let v,R=!1,k=null,w=null;i&&(v=c&&f.route.id?c[f.route.id]:void 0,k=f.route.errorElement||Mv,s&&(u<0&&g===0?(R=!0,w=null):u===g&&(R=!0,w=f.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,g+1)),p=()=>{let m;return v?m=k:R?m=w:f.route.Component?m=K.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,K.createElement(Hv,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:i!=null},children:m})};return i&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?K.createElement(Ev,{location:i.location,revalidation:i.revalidation,component:k,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var mp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mp||{}),no=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(no||{});function Dv(e){let n=K.useContext(Os);return n||he(!1),n}function _v(e){let n=K.useContext(Tv);return n||he(!1),n}function Fv(e){let n=K.useContext(Di);return n||he(!1),n}function hp(e){let n=Fv(),i=n.matches[n.matches.length-1];return i.route.id||he(!1),i.route.id}function zv(){var e;let n=K.useContext(gp),i=_v(no.UseRouteError),a=hp(no.UseRouteError);return n!==void 0?n:(e=i.errors)==null?void 0:e[a]}function Av(){let{router:e}=Dv(mp.UseNavigateStable),n=hp(no.UseNavigateStable),i=K.useRef(!1);return fp(()=>{i.current=!0}),K.useCallback(function(t,r){r===void 0&&(r={}),i.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,Ct({fromRouteId:n},r)))},[e,n])}function dn(e){he(!1)}function Bv(e){let{basename:n="/",children:i=null,location:a,navigationType:t=Gn.Pop,navigator:r,static:o=!1,future:c}=e;Mt()&&he(!1);let s=n.replace(/^\/*/,"/"),u=K.useMemo(()=>({basename:s,navigator:r,static:o,future:Ct({v7_relativeSplatPath:!1},c)}),[s,c,r,o]);typeof a=="string"&&(a=Ca(a));let{pathname:d="/",search:f="",hash:g="",state:v=null,key:R="default"}=a,k=K.useMemo(()=>{let w=$s(d,s);return w==null?null:{location:{pathname:w,search:f,hash:g,state:v,key:R},navigationType:t}},[s,d,f,g,v,R,t]);return k==null?null:K.createElement(Ji.Provider,{value:u},K.createElement(To.Provider,{children:i,value:k}))}function Iv(e){let{children:n,location:i}=e;return Ov(jc(n),i)}new Promise(()=>{});function jc(e,n){n===void 0&&(n=[]);let i=[];return K.Children.forEach(e,(a,t)=>{if(!K.isValidElement(a))return;let r=[...n,t];if(a.type===K.Fragment){i.push.apply(i,jc(a.props.children,r));return}a.type!==dn&&he(!1),!a.props.index||!a.props.children||he(!1);let o={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=jc(a.props.children,r)),i.push(o)}),i}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yc(){return yc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},yc.apply(this,arguments)}function Vv(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}function Wv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,n){return e.button===0&&(!n||n==="_self")&&!Wv(e)}const Qv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],qv="6";try{window.__reactRouterVersion=qv}catch{}const Zv="startTransition",cd=xl[Zv];function Yv(e){let{basename:n,children:i,future:a,window:t}=e,r=K.useRef();r.current==null&&(r.current=av({window:t,v5Compat:!0}));let o=r.current,[c,s]=K.useState({action:o.action,location:o.location}),{v7_startTransition:u}=a||{},d=K.useCallback(f=>{u&&cd?cd(()=>s(f)):s(f)},[s,u]);return K.useLayoutEffect(()=>o.listen(d),[o,d]),K.createElement(Bv,{basename:n,children:i,location:c.location,navigationType:c.action,navigator:o,future:a})}const Gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_i=K.forwardRef(function(n,i){let{onClick:a,relative:t,reloadDocument:r,replace:o,state:c,target:s,to:u,preventScrollReset:d,unstable_viewTransition:f}=n,g=Vv(n,Qv),{basename:v}=K.useContext(Ji),R,k=!1;if(typeof u=="string"&&Xv.test(u)&&(R=u,Gv))try{let m=new URL(window.location.href),j=u.startsWith("//")?new URL(m.protocol+u):new URL(u),P=$s(j.pathname,v);j.origin===m.origin&&P!=null?u=P+j.search+j.hash:k=!0}catch{}let w=bv(u,{relative:t}),h=e1(u,{replace:o,state:c,target:s,preventScrollReset:d,relative:t,unstable_viewTransition:f});function p(m){a&&a(m),m.defaultPrevented||h(m)}return K.createElement("a",yc({},g,{href:R||w,onClick:k||r?a:p,ref:i,target:s}))});var sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sd||(sd={}));var ud;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ud||(ud={}));function e1(e,n){let{target:i,replace:a,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:c}=n===void 0?{}:n,s=pi(),u=ge(),d=pp(e,{relative:o});return K.useCallback(f=>{if(Uv(f,i)){f.preventDefault();let g=a!==void 0?a:eo(u)===eo(d);s(e,{replace:g,state:t,preventScrollReset:r,relative:o,unstable_viewTransition:c})}},[u,s,d,a,t,i,e,r,o,c])}var vp={exports:{}},Rp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=K;function n1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var i1=typeof Object.is=="function"?Object.is:n1,a1=Et.useSyncExternalStore,t1=Et.useRef,r1=Et.useEffect,o1=Et.useMemo,l1=Et.useDebugValue;Rp.useSyncExternalStoreWithSelector=function(e,n,i,a,t){var r=t1(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=o1(function(){function s(v){if(!u){if(u=!0,d=v,v=a(v),t!==void 0&&o.hasValue){var R=o.value;if(t(R,v))return f=R}return f=v}if(R=f,i1(d,v))return R;var k=a(v);return t!==void 0&&t(R,k)?R:(d=v,f=k)}var u=!1,d,f,g=i===void 0?null:i;return[function(){return s(n())},g===null?void 0:function(){return s(g())}]},[n,i,a,t]);var c=a1(e,r[0],r[1]);return r1(function(){o.hasValue=!0,o.value=c},[c]),l1(c),c};vp.exports=Rp;var c1=vp.exports,qe="default"in xl?Li:xl,dd=Symbol.for("react-redux-context"),gd=typeof globalThis<"u"?globalThis:{};function s1(){if(!qe.createContext)return{};const e=gd[dd]??(gd[dd]=new Map);let n=e.get(qe.createContext);return n||(n=qe.createContext(null),e.set(qe.createContext,n)),n}var ui=s1(),u1=()=>{throw new Error("uSES not initialized!")};function Ns(e=ui){return function(){return qe.useContext(e)}}var jp=Ns(),yp=u1,d1=e=>{yp=e},g1=(e,n)=>e===n;function f1(e=ui){const n=e===ui?jp:Ns(e),i=(a,t={})=>{const{equalityFn:r=g1,devModeChecks:o={}}=typeof t=="function"?{equalityFn:t}:t,{store:c,subscription:s,getServerState:u,stabilityCheck:d,identityFunctionCheck:f}=n();qe.useRef(!0);const g=qe.useCallback({[a.name](R){return a(R)}}[a.name],[a,d,o.stabilityCheck]),v=yp(s.addNestedSub,c.getState,u||c.getState,g,r);return qe.useDebugValue(v),v};return Object.assign(i,{withTypes:()=>i}),i}var x=f1();function p1(e){e()}function m1(){let e=null,n=null;return{clear(){e=null,n=null},notify(){p1(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){const i=[];let a=e;for(;a;)i.push(a),a=a.next;return i},subscribe(i){let a=!0;const t=n={callback:i,next:null,prev:n};return t.prev?t.prev.next=t:e=t,function(){!a||e===null||(a=!1,t.next?t.next.prev=t.prev:n=t.prev,t.prev?t.prev.next=t.next:e=t.next)}}}}var fd={notify(){},get:()=>[]};function h1(e,n){let i,a=fd,t=0,r=!1;function o(k){d();const w=a.subscribe(k);let h=!1;return()=>{h||(h=!0,w(),f())}}function c(){a.notify()}function s(){R.onStateChange&&R.onStateChange()}function u(){return r}function d(){t++,i||(i=e.subscribe(s),a=m1())}function f(){t--,i&&t===0&&(i(),i=void 0,a.clear(),a=fd)}function g(){r||(r=!0,d())}function v(){r&&(r=!1,f())}const R={addNestedSub:o,notifyNestedSubs:c,handleChangeWrapper:s,isSubscribed:u,trySubscribe:g,tryUnsubscribe:v,getListeners:()=>a};return R}var v1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=typeof navigator<"u"&&navigator.product==="ReactNative",j1=v1||R1?qe.useLayoutEffect:qe.useEffect;function y1({store:e,context:n,children:i,serverState:a,stabilityCheck:t="once",identityFunctionCheck:r="once"}){const o=qe.useMemo(()=>{const u=h1(e);return{store:e,subscription:u,getServerState:a?()=>a:void 0,stabilityCheck:t,identityFunctionCheck:r}},[e,a,t,r]),c=qe.useMemo(()=>e.getState(),[e]);j1(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),c!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,c]);const s=n||ui;return qe.createElement(s.Provider,{value:o},i)}var k1=y1;function kp(e=ui){const n=e===ui?jp:Ns(e),i=()=>{const{store:a}=n();return a};return Object.assign(i,{withTypes:()=>i}),i}var w1=kp();function P1(e=ui){const n=e===ui?w1:kp(e),i=()=>n().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var Ie=P1();d1(c1.useSyncExternalStoreWithSelector);function we(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var x1=typeof Symbol=="function"&&Symbol.observable||"@@observable",pd=x1,fl=()=>Math.random().toString(36).substring(7).split("").join("."),C1={INIT:`@@redux/INIT${fl()}`,REPLACE:`@@redux/REPLACE${fl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fl()}`},io=C1;function Ss(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function wp(e,n,i){if(typeof e!="function")throw new Error(we(2));if(typeof n=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(we(0));if(typeof n=="function"&&typeof i>"u"&&(i=n,n=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(we(1));return i(wp)(e,n)}let a=e,t=n,r=new Map,o=r,c=0,s=!1;function u(){o===r&&(o=new Map,r.forEach((w,h)=>{o.set(h,w)}))}function d(){if(s)throw new Error(we(3));return t}function f(w){if(typeof w!="function")throw new Error(we(4));if(s)throw new Error(we(5));let h=!0;u();const p=c++;return o.set(p,w),function(){if(h){if(s)throw new Error(we(6));h=!1,u(),o.delete(p),r=null}}}function g(w){if(!Ss(w))throw new Error(we(7));if(typeof w.type>"u")throw new Error(we(8));if(typeof w.type!="string")throw new Error(we(17));if(s)throw new Error(we(9));try{s=!0,t=a(t,w)}finally{s=!1}return(r=o).forEach(p=>{p()}),w}function v(w){if(typeof w!="function")throw new Error(we(10));a=w,g({type:io.REPLACE})}function R(){const w=f;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(we(11));function p(){const j=h;j.next&&j.next(d())}return p(),{unsubscribe:w(p)}},[pd](){return this}}}return g({type:io.INIT}),{dispatch:g,subscribe:f,getState:d,replaceReducer:v,[pd]:R}}function L1(e){Object.keys(e).forEach(n=>{const i=e[n];if(typeof i(void 0,{type:io.INIT})>"u")throw new Error(we(12));if(typeof i(void 0,{type:io.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(we(13))})}function K1(e){const n=Object.keys(e),i={};for(let r=0;r<n.length;r++){const o=n[r];typeof e[o]=="function"&&(i[o]=e[o])}const a=Object.keys(i);let t;try{L1(i)}catch(r){t=r}return function(o={},c){if(t)throw t;let s=!1;const u={};for(let d=0;d<a.length;d++){const f=a[d],g=i[f],v=o[f],R=g(v,c);if(typeof R>"u")throw c&&c.type,new Error(we(14));u[f]=R,s=s||R!==v}return s=s||a.length!==Object.keys(o).length,s?u:o}}function ao(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,i)=>(...a)=>n(i(...a)))}function T1(...e){return n=>(i,a)=>{const t=n(i,a);let r=()=>{throw new Error(we(15))};const o={getState:t.getState,dispatch:(s,...u)=>r(s,...u)},c=e.map(s=>s(o));return r=ao(...c)(t.dispatch),{...t,dispatch:r}}}function b1(e){return Ss(e)&&"type"in e&&typeof e.type=="string"}var Pp=Symbol.for("immer-nothing"),md=Symbol.for("immer-draftable"),Ge=Symbol.for("immer-state");function mn(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ha=Object.getPrototypeOf;function Ni(e){return!!e&&!!e[Ge]}function zn(e){var n;return e?xp(e)||Array.isArray(e)||!!e[md]||!!((n=e.constructor)!=null&&n[md])||$o(e)||Oo(e):!1}var $1=Object.prototype.constructor.toString();function xp(e){if(!e||typeof e!="object")return!1;const n=ha(e);if(n===null)return!0;const i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===$1}function to(e,n){bo(e)===0?Reflect.ownKeys(e).forEach(i=>{n(i,e[i],e)}):e.forEach((i,a)=>n(a,i,e))}function bo(e){const n=e[Ge];return n?n.type_:Array.isArray(e)?1:$o(e)?2:Oo(e)?3:0}function kc(e,n){return bo(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Cp(e,n,i){const a=bo(e);a===2?e.set(n,i):a===3?e.add(i):e[n]=i}function O1(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function $o(e){return e instanceof Map}function Oo(e){return e instanceof Set}function vi(e){return e.copy_||e.base_}function wc(e,n){if($o(e))return new Map(e);if(Oo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const i=xp(e);if(n===!0||n==="class_only"&&!i){const a=Object.getOwnPropertyDescriptors(e);delete a[Ge];let t=Reflect.ownKeys(a);for(let r=0;r<t.length;r++){const o=t[r],c=a[o];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(a[o]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[o]})}return Object.create(ha(e),a)}else{const a=ha(e);if(a!==null&&i)return{...e};const t=Object.create(a);return Object.assign(t,e)}}function Ms(e,n=!1){return No(e)||Ni(e)||!zn(e)||(bo(e)>1&&(e.set=e.add=e.clear=e.delete=N1),Object.freeze(e),n&&Object.entries(e).forEach(([i,a])=>Ms(a,!0))),e}function N1(){mn(2)}function No(e){return Object.isFrozen(e)}var S1={};function Si(e){const n=S1[e];return n||mn(0,e),n}var Lt;function Lp(){return Lt}function M1(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function hd(e,n){n&&(Si("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Pc(e){xc(e),e.drafts_.forEach(E1),e.drafts_=null}function xc(e){e===Lt&&(Lt=e.parent_)}function vd(e){return Lt=M1(Lt,e)}function E1(e){const n=e[Ge];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Rd(e,n){n.unfinalizedDrafts_=n.drafts_.length;const i=n.drafts_[0];return e!==void 0&&e!==i?(i[Ge].modified_&&(Pc(n),mn(4)),zn(e)&&(e=ro(n,e),n.parent_||oo(n,e)),n.patches_&&Si("Patches").generateReplacementPatches_(i[Ge].base_,e,n.patches_,n.inversePatches_)):e=ro(n,i,[]),Pc(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Pp?e:void 0}function ro(e,n,i){if(No(n))return n;const a=n[Ge];if(!a)return to(n,(t,r)=>jd(e,a,n,t,r,i)),n;if(a.scope_!==e)return n;if(!a.modified_)return oo(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const t=a.copy_;let r=t,o=!1;a.type_===3&&(r=new Set(t),t.clear(),o=!0),to(r,(c,s)=>jd(e,a,t,c,s,i,o)),oo(e,t,!1),i&&e.patches_&&Si("Patches").generatePatches_(a,i,e.patches_,e.inversePatches_)}return a.copy_}function jd(e,n,i,a,t,r,o){if(Ni(t)){const c=r&&n&&n.type_!==3&&!kc(n.assigned_,a)?r.concat(a):void 0,s=ro(e,t,c);if(Cp(i,a,s),Ni(s))e.canAutoFreeze_=!1;else return}else o&&i.add(t);if(zn(t)&&!No(t)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ro(e,t),(!n||!n.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,a)&&oo(e,t)}}function oo(e,n,i=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ms(n,i)}function H1(e,n){const i=Array.isArray(e),a={type_:i?1:0,scope_:n?n.scope_:Lp(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let t=a,r=Es;i&&(t=[a],r=Kt);const{revoke:o,proxy:c}=Proxy.revocable(t,r);return a.draft_=c,a.revoke_=o,c}var Es={get(e,n){if(n===Ge)return e;const i=vi(e);if(!kc(i,n))return J1(e,i,n);const a=i[n];return e.finalized_||!zn(a)?a:a===pl(e.base_,n)?(ml(e),e.copy_[n]=Lc(a,e)):a},has(e,n){return n in vi(e)},ownKeys(e){return Reflect.ownKeys(vi(e))},set(e,n,i){const a=Kp(vi(e),n);if(a!=null&&a.set)return a.set.call(e.draft_,i),!0;if(!e.modified_){const t=pl(vi(e),n),r=t==null?void 0:t[Ge];if(r&&r.base_===i)return e.copy_[n]=i,e.assigned_[n]=!1,!0;if(O1(i,t)&&(i!==void 0||kc(e.base_,n)))return!0;ml(e),Cc(e)}return e.copy_[n]===i&&(i!==void 0||n in e.copy_)||Number.isNaN(i)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=i,e.assigned_[n]=!0),!0},deleteProperty(e,n){return pl(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,ml(e),Cc(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const i=vi(e),a=Reflect.getOwnPropertyDescriptor(i,n);return a&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:a.enumerable,value:i[n]}},defineProperty(){mn(11)},getPrototypeOf(e){return ha(e.base_)},setPrototypeOf(){mn(12)}},Kt={};to(Es,(e,n)=>{Kt[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Kt.deleteProperty=function(e,n){return Kt.set.call(this,e,n,void 0)};Kt.set=function(e,n,i){return Es.set.call(this,e[0],n,i,e[0])};function pl(e,n){const i=e[Ge];return(i?vi(i):e)[n]}function J1(e,n,i){var t;const a=Kp(n,i);return a?"value"in a?a.value:(t=a.get)==null?void 0:t.call(e.draft_):void 0}function Kp(e,n){if(!(n in e))return;let i=ha(e);for(;i;){const a=Object.getOwnPropertyDescriptor(i,n);if(a)return a;i=ha(i)}}function Cc(e){e.modified_||(e.modified_=!0,e.parent_&&Cc(e.parent_))}function ml(e){e.copy_||(e.copy_=wc(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var D1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,i,a)=>{if(typeof n=="function"&&typeof i!="function"){const r=i;i=n;const o=this;return function(s=r,...u){return o.produce(s,d=>i.call(this,d,...u))}}typeof i!="function"&&mn(6),a!==void 0&&typeof a!="function"&&mn(7);let t;if(zn(n)){const r=vd(this),o=Lc(n,void 0);let c=!0;try{t=i(o),c=!1}finally{c?Pc(r):xc(r)}return hd(r,a),Rd(t,r)}else if(!n||typeof n!="object"){if(t=i(n),t===void 0&&(t=n),t===Pp&&(t=void 0),this.autoFreeze_&&Ms(t,!0),a){const r=[],o=[];Si("Patches").generateReplacementPatches_(n,t,r,o),a(r,o)}return t}else mn(1,n)},this.produceWithPatches=(n,i)=>{if(typeof n=="function")return(o,...c)=>this.produceWithPatches(o,s=>n(s,...c));let a,t;return[this.produce(n,i,(o,c)=>{a=o,t=c}),a,t]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){zn(e)||mn(8),Ni(e)&&(e=_1(e));const n=vd(this),i=Lc(e,void 0);return i[Ge].isManual_=!0,xc(n),i}finishDraft(e,n){const i=e&&e[Ge];(!i||!i.isManual_)&&mn(9);const{scope_:a}=i;return hd(a,n),Rd(void 0,a)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let i;for(i=n.length-1;i>=0;i--){const t=n[i];if(t.path.length===0&&t.op==="replace"){e=t.value;break}}i>-1&&(n=n.slice(i+1));const a=Si("Patches").applyPatches_;return Ni(e)?a(e,n):this.produce(e,t=>a(t,n))}};function Lc(e,n){const i=$o(e)?Si("MapSet").proxyMap_(e,n):Oo(e)?Si("MapSet").proxySet_(e,n):H1(e,n);return(n?n.scope_:Lp()).drafts_.push(i),i}function _1(e){return Ni(e)||mn(10,e),Tp(e)}function Tp(e){if(!zn(e)||No(e))return e;const n=e[Ge];let i;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,i=wc(e,n.scope_.immer_.useStrictShallowCopy_)}else i=wc(e,!0);return to(i,(a,t)=>{Cp(i,a,Tp(t))}),n&&(n.finalized_=!1),i}var Xe=new D1,bp=Xe.produce;Xe.produceWithPatches.bind(Xe);Xe.setAutoFreeze.bind(Xe);Xe.setUseStrictShallowCopy.bind(Xe);Xe.applyPatches.bind(Xe);Xe.createDraft.bind(Xe);Xe.finishDraft.bind(Xe);function $p(e){return({dispatch:i,getState:a})=>t=>r=>typeof r=="function"?r(i,a,e):t(r)}var F1=$p(),z1=$p,A1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ao:ao.apply(null,arguments)};function yd(e,n){function i(...a){if(n){let t=n(...a);if(!t)throw new Error(Rn(0));return{type:e,payload:t.payload,..."meta"in t&&{meta:t.meta},..."error"in t&&{error:t.error}}}return{type:e,payload:a[0]}}return i.toString=()=>`${e}`,i.type=e,i.match=a=>b1(a)&&a.type===e,i}var Op=class Qa extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Qa.prototype)}static get[Symbol.species](){return Qa}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Qa(...n[0].concat(this)):new Qa(...n.concat(this))}};function kd(e){return zn(e)?bp(e,()=>{}):e}function wd(e,n,i){if(e.has(n)){let t=e.get(n);return i.update&&(t=i.update(t,n,e),e.set(n,t)),t}if(!i.insert)throw new Error(Rn(10));const a=i.insert(n,e);return e.set(n,a),a}function B1(e){return typeof e=="boolean"}var I1=()=>function(n){const{thunk:i=!0,immutableCheck:a=!0,serializableCheck:t=!0,actionCreatorCheck:r=!0}=n??{};let o=new Op;return i&&(B1(i)?o.push(F1):o.push(z1(i.extraArgument))),o},V1="RTK_autoBatch",Np=e=>n=>{setTimeout(n,e)},W1=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Np(10),U1=(e={type:"raf"})=>n=>(...i)=>{const a=n(...i);let t=!0,r=!1,o=!1;const c=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?W1:e.type==="callback"?e.queueNotification:Np(e.timeout),u=()=>{o=!1,r&&(r=!1,c.forEach(d=>d()))};return Object.assign({},a,{subscribe(d){const f=()=>t&&d(),g=a.subscribe(f);return c.add(d),()=>{g(),c.delete(d)}},dispatch(d){var f;try{return t=!((f=d==null?void 0:d.meta)!=null&&f[V1]),r=!t,r&&(o||(o=!0,s(u))),a.dispatch(d)}finally{t=!0}}})},Q1=e=>function(i){const{autoBatch:a=!0}=i??{};let t=new Op(e);return a&&t.push(U1(typeof a=="object"?a:void 0)),t};function q1(e){const n=I1(),{reducer:i=void 0,middleware:a,devTools:t=!0,preloadedState:r=void 0,enhancers:o=void 0}=e||{};let c;if(typeof i=="function")c=i;else if(Ss(i))c=K1(i);else throw new Error(Rn(1));let s;typeof a=="function"?s=a(n):s=n();let u=ao;t&&(u=A1({trace:!1,...typeof t=="object"&&t}));const d=T1(...s),f=Q1(d);let g=typeof o=="function"?o(f):f();const v=u(...g);return wp(c,r,v)}function Sp(e){const n={},i=[];let a;const t={addCase(r,o){const c=typeof r=="string"?r:r.type;if(!c)throw new Error(Rn(28));if(c in n)throw new Error(Rn(29));return n[c]=o,t},addMatcher(r,o){return i.push({matcher:r,reducer:o}),t},addDefaultCase(r){return a=r,t}};return e(t),[n,i,a]}function Z1(e){return typeof e=="function"}function Y1(e,n){let[i,a,t]=Sp(n),r;if(Z1(e))r=()=>kd(e());else{const c=kd(e);r=()=>c}function o(c=r(),s){let u=[i[s.type],...a.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[t]),u.reduce((d,f)=>{if(f)if(Ni(d)){const v=f(d,s);return v===void 0?d:v}else{if(zn(d))return bp(d,g=>f(g,s));{const g=f(d,s);if(g===void 0){if(d===null)return d;throw new Error(Rn(9))}return g}}return d},c)}return o.getInitialState=r,o}var G1=Symbol.for("rtk-slice-createasyncthunk");function X1(e,n){return`${e}/${n}`}function e2({creators:e}={}){var i;const n=(i=e==null?void 0:e.asyncThunk)==null?void 0:i[G1];return function(t){const{name:r,reducerPath:o=r}=t;if(!r)throw new Error(Rn(11));typeof process<"u";const c=(typeof t.reducers=="function"?t.reducers(i2()):t.reducers)||{},s=Object.keys(c),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(m,j){const P=typeof m=="string"?m:m.type;if(!P)throw new Error(Rn(12));if(P in u.sliceCaseReducersByType)throw new Error(Rn(13));return u.sliceCaseReducersByType[P]=j,d},addMatcher(m,j){return u.sliceMatchers.push({matcher:m,reducer:j}),d},exposeAction(m,j){return u.actionCreators[m]=j,d},exposeCaseReducer(m,j){return u.sliceCaseReducersByName[m]=j,d}};s.forEach(m=>{const j=c[m],P={reducerName:m,type:X1(r,m),createNotation:typeof t.reducers=="function"};t2(j)?o2(P,j,d,n):a2(P,j,d)});function f(){const[m={},j=[],P=void 0]=typeof t.extraReducers=="function"?Sp(t.extraReducers):[t.extraReducers],L={...m,...u.sliceCaseReducersByType};return Y1(t.initialState,C=>{for(let b in L)C.addCase(b,L[b]);for(let b of u.sliceMatchers)C.addMatcher(b.matcher,b.reducer);for(let b of j)C.addMatcher(b.matcher,b.reducer);P&&C.addDefaultCase(P)})}const g=m=>m,v=new Map;let R;function k(m,j){return R||(R=f()),R(m,j)}function w(){return R||(R=f()),R.getInitialState()}function h(m,j=!1){function P(C){let b=C[m];return typeof b>"u"&&j&&(b=w()),b}function L(C=g){const b=wd(v,j,{insert:()=>new WeakMap});return wd(b,C,{insert:()=>{const _={};for(const[D,Q]of Object.entries(t.selectors??{}))_[D]=n2(Q,C,w,j);return _}})}return{reducerPath:m,getSelectors:L,get selectors(){return L(P)},selectSlice:P}}const p={name:r,reducer:k,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...h(o),injectInto(m,{reducerPath:j,...P}={}){const L=j??o;return m.inject({reducerPath:L,reducer:k},P),{...p,...h(L,!0)}}};return p}}function n2(e,n,i,a){function t(r,...o){let c=n(r);return typeof c>"u"&&a&&(c=i()),e(c,...o)}return t.unwrapped=e,t}var Fi=e2();function i2(){function e(n,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...i}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...i){return n(...i)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:i}},asyncThunk:e}}function a2({type:e,reducerName:n,createNotation:i},a,t){let r,o;if("reducer"in a){if(i&&!r2(a))throw new Error(Rn(17));r=a.reducer,o=a.prepare}else r=a;t.addCase(e,r).exposeCaseReducer(n,r).exposeAction(n,o?yd(e,o):yd(e))}function t2(e){return e._reducerDefinitionType==="asyncThunk"}function r2(e){return e._reducerDefinitionType==="reducerWithPrepare"}function o2({type:e,reducerName:n},i,a,t){if(!t)throw new Error(Rn(18));const{payloadCreator:r,fulfilled:o,pending:c,rejected:s,settled:u,options:d}=i,f=t(e,r,d);a.exposeAction(n,f),o&&a.addCase(f.fulfilled,o),c&&a.addCase(f.pending,c),s&&a.addCase(f.rejected,s),u&&a.addMatcher(f.settled,u),a.exposeCaseReducer(n,{fulfilled:o||rr,pending:c||rr,rejected:s||rr,settled:u||rr})}function rr(){}function Rn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const l2=[{id:1,Kanji:"一",OnReading:["イチ","イツ"],KunReading:["ひと","ひと(つ)"],OnPrincipalReading:"イチ",KunPrincipalReading:"ひと(つ)",OnPrincipalReadingRomaji:"ichi",KunPrincipalReadingRomaji:"hito(tsu)",JLPTLevel:"N5",Meaning:"un",SecondaryMeaning:null},{id:2,Kanji:"二",OnReading:["ニ","ジ"],KunReading:["ふた","ふた(つ)"],OnPrincipalReading:"ニ",KunPrincipalReading:"ふた(つ)",OnPrincipalReadingRomaji:"ni",KunPrincipalReadingRomaji:"futa(tsu)",JLPTLevel:"N5",Meaning:"deux",SecondaryMeaning:null},{id:3,Kanji:"三",OnReading:["サン"],KunReading:["み","み(つ)"],OnPrincipalReading:"サン",KunPrincipalReading:"み(つ)",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"mi(tsu)",JLPTLevel:"N5",Meaning:"trois",SecondaryMeaning:null},{id:4,Kanji:"四",OnReading:["シ"],KunReading:["よん","よ","よ(つ)"],OnPrincipalReading:"シ",KunPrincipalReading:"よん",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"yon",JLPTLevel:"N5",Meaning:"quatre",SecondaryMeaning:null},{id:5,Kanji:"五",OnReading:["ゴ"],KunReading:["いつ","いつ(つ)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"いつ(つ)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"itsu(tsu)",JLPTLevel:"N5",Meaning:"cinq",SecondaryMeaning:null},{id:6,Kanji:"六",OnReading:["ロク"],KunReading:["む","む(つ)","むい"],OnPrincipalReading:"ロク",KunPrincipalReading:"む(つ)",OnPrincipalReadingRomaji:"roku",KunPrincipalReadingRomaji:"mu(tsu)",JLPTLevel:"N5",Meaning:"six",SecondaryMeaning:null},{id:7,Kanji:"七",OnReading:["シチ"],KunReading:["なな","なな(つ)","なの"],OnPrincipalReading:"シチ",KunPrincipalReading:"なな(つ)",OnPrincipalReadingRomaji:"shichi",KunPrincipalReadingRomaji:"nana(tsu)",JLPTLevel:"N5",Meaning:"sept",SecondaryMeaning:null},{id:8,Kanji:"八",OnReading:["ハチ"],KunReading:["や","や(つ)","よう"],OnPrincipalReading:"ハチ",KunPrincipalReading:"や(つ)",OnPrincipalReadingRomaji:"hachi",KunPrincipalReadingRomaji:"ya(tsu)",JLPTLevel:"N5",Meaning:"huit",SecondaryMeaning:null},{id:9,Kanji:"九",OnReading:["キュウ","ク"],KunReading:["ここの","ここの(つ)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"ここの(つ)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kokono(tsu)",JLPTLevel:"N5",Meaning:"neuf",SecondaryMeaning:null},{id:10,Kanji:"十",OnReading:["ジッ"],KunReading:["とお","と"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"とお",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"too",JLPTLevel:"N5",Meaning:"dix",SecondaryMeaning:null},{id:11,Kanji:"人",OnReading:["ジン","ニン"],KunReading:["ひと"],OnPrincipalReading:"ジン",KunPrincipalReading:"ひと",OnPrincipalReadingRomaji:"jin",KunPrincipalReadingRomaji:"hito",JLPTLevel:"N5",Meaning:"personne",SecondaryMeaning:"humain"},{id:12,Kanji:"今",OnReading:["コン","キン"],KunReading:["いま"],OnPrincipalReading:"コン",KunPrincipalReading:"いま",OnPrincipalReadingRomaji:"kon",KunPrincipalReadingRomaji:"ima",JLPTLevel:"N5",Meaning:"maintenant",SecondaryMeaning:null},{id:13,Kanji:"日",OnReading:["ニチ","ジツ"],KunReading:["ひ","か"],OnPrincipalReading:"ニチ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"nichi",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"jour",SecondaryMeaning:"soleil"},{id:14,Kanji:"週",OnReading:["シュウ"],KunReading:["-"],OnPrincipalReading:"シュウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:null,JLPTLevel:"N5",Meaning:"semaine",SecondaryMeaning:null},{id:15,Kanji:"月",OnReading:["ゲツ","ガツ"],KunReading:["つき"],OnPrincipalReading:"ゲツ",KunPrincipalReading:"つき",OnPrincipalReadingRomaji:"getsu",KunPrincipalReadingRomaji:"tsuki",JLPTLevel:"N5",Meaning:"mois",SecondaryMeaning:"lune"},{id:16,Kanji:"年",OnReading:["ネン"],KunReading:["とし"],OnPrincipalReading:"ネン",KunPrincipalReading:"とし",OnPrincipalReadingRomaji:"nen",KunPrincipalReadingRomaji:"toshi",JLPTLevel:"N5",Meaning:"année",SecondaryMeaning:null},{id:17,Kanji:"中",OnReading:["チュウ","ジュウ"],KunReading:["なか"],OnPrincipalReading:"チュウ",KunPrincipalReading:"なか",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"naka",JLPTLevel:"N5",Meaning:"milieu",SecondaryMeaning:"dedans"},{id:18,Kanji:"山",OnReading:["サン"],KunReading:["やま"],OnPrincipalReading:"サン",KunPrincipalReading:"やま",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"yama",JLPTLevel:"N5",Meaning:"montagne",SecondaryMeaning:null},{id:19,Kanji:"川",OnReading:["セン"],KunReading:["かわ"],OnPrincipalReading:"セン",KunPrincipalReading:"かわ",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"kawa",JLPTLevel:"N5",Meaning:"rivière",SecondaryMeaning:"fleuve"},{id:20,Kanji:"左",OnReading:["サ"],KunReading:["ひだり"],OnPrincipalReading:"サ",KunPrincipalReading:"ひだり",OnPrincipalReadingRomaji:"sa",KunPrincipalReadingRomaji:"hidari",JLPTLevel:"N5",Meaning:"gauche",SecondaryMeaning:null},{id:21,Kanji:"右",OnReading:["ウ","ユウ"],KunReading:["みぎ"],OnPrincipalReading:"ウ",KunPrincipalReading:"みぎ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"migi",JLPTLevel:"N5",Meaning:"droite",SecondaryMeaning:null},{id:22,Kanji:"大",OnReading:["ダイ","タイ"],KunReading:["おお","おお(きい)"],OnPrincipalReading:"ダイ",KunPrincipalReading:"おお(きい)",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"oo(kii)",JLPTLevel:"N5",Meaning:"grand",SecondaryMeaning:null},{id:23,Kanji:"木",OnReading:["モク","ボク"],KunReading:["き","こ"],OnPrincipalReading:"モク",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"arbre",SecondaryMeaning:"bois"},{id:24,Kanji:"本",OnReading:["ホン"],KunReading:["もと"],OnPrincipalReading:"ホン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"hon",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N5",Meaning:"livre",SecondaryMeaning:"origine"},{id:25,Kanji:"水",OnReading:["スイ"],KunReading:["みず"],OnPrincipalReading:"スイ",KunPrincipalReading:"みず",OnPrincipalReadingRomaji:"sui",KunPrincipalReadingRomaji:"mizu",JLPTLevel:"N5",Meaning:"eau",SecondaryMeaning:null},{id:26,Kanji:"火",OnReading:["カ"],KunReading:["ひ"],OnPrincipalReading:"カ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"feu",SecondaryMeaning:null},{id:27,Kanji:"父",OnReading:["フ"],KunReading:["ちち"],OnPrincipalReading:"フ",KunPrincipalReading:"ちち",OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:"chichi",JLPTLevel:"N5",Meaning:"père",SecondaryMeaning:null},{id:28,Kanji:"母",OnReading:["ボ"],KunReading:["はは"],OnPrincipalReading:"ボ",KunPrincipalReading:"はは",OnPrincipalReadingRomaji:"bo",KunPrincipalReadingRomaji:"haha",JLPTLevel:"N5",Meaning:"mère",SecondaryMeaning:null},{id:29,Kanji:"耳",OnReading:["ジ"],KunReading:["みみ"],OnPrincipalReading:"ジ",KunPrincipalReading:"みみ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mimi",JLPTLevel:"N5",Meaning:"oreille",SecondaryMeaning:null},{id:30,Kanji:"口",OnReading:["コウ","ク"],KunReading:["くち"],OnPrincipalReading:"コウ",KunPrincipalReading:"くち",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kuchi",JLPTLevel:"N5",Meaning:"bouche",SecondaryMeaning:"entrée"},{id:31,Kanji:"休",OnReading:["キュウ"],KunReading:["やす(む)","やす(める)","やす(まる)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"やす(む)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"yasu(mu)",JLPTLevel:"N5",Meaning:"se reposer",SecondaryMeaning:"pause"},{id:32,Kanji:"何",OnReading:["カ"],KunReading:["なに","なん"],OnPrincipalReading:"カ",KunPrincipalReading:"なに",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"nani",JLPTLevel:"N5",Meaning:"quoi",SecondaryMeaning:"que"},{id:33,Kanji:"入",OnReading:["ニュウ"],KunReading:["い(る)","い(れる)","はい(る)"],OnPrincipalReading:"ニュウ",KunPrincipalReading:"はい(る)",OnPrincipalReadingRomaji:"nyuu",KunPrincipalReadingRomaji:"hai(ru)",JLPTLevel:"N5",Meaning:"entrer",SecondaryMeaning:"insérer"},{id:34,Kanji:"上",OnReading:["ジョウ","ショウ"],KunReading:["うえ","あ(げる)","あ(がる)","のぼ(る)"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"うえ",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ue",JLPTLevel:"N5",Meaning:"au-dessus",SecondaryMeaning:"haut"},{id:35,Kanji:"前",OnReading:["ゼン"],KunReading:["まえ"],OnPrincipalReading:"ゼン",KunPrincipalReading:"まえ",OnPrincipalReadingRomaji:"zen",KunPrincipalReadingRomaji:"mae",JLPTLevel:"N5",Meaning:"devant",SecondaryMeaning:"avant"},{id:36,Kanji:"下",OnReading:["カ","ゲ"],KunReading:["した","さ(げる)","さ(がる)","くだ(る)","お(ろす)","お(りる)"],OnPrincipalReading:"カ",KunPrincipalReading:"した",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"shita",JLPTLevel:"N5",Meaning:"en-dessous",SecondaryMeaning:"bas"},{id:37,Kanji:"千",OnReading:["セン"],KunReading:["ち"],OnPrincipalReading:"セン",KunPrincipalReading:"ち",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"chi",JLPTLevel:"N5",Meaning:"mille",SecondaryMeaning:null},{id:38,Kanji:"午",OnReading:["ゴ"],KunReading:["うま"],OnPrincipalReading:"ゴ",KunPrincipalReading:"うま",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"uma",JLPTLevel:"N5",Meaning:"midi",SecondaryMeaning:null},{id:39,Kanji:"友",OnReading:["ユウ"],KunReading:["とも"],OnPrincipalReading:"ユウ",KunPrincipalReading:"とも",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"tomo",JLPTLevel:"N5",Meaning:"ami",SecondaryMeaning:null},{id:40,Kanji:"古",OnReading:["コ"],KunReading:["ふる(い)"],OnPrincipalReading:"コ",KunPrincipalReading:"ふる(い)",OnPrincipalReadingRomaji:"ko",KunPrincipalReadingRomaji:"furui",JLPTLevel:"N5",Meaning:"ancien",SecondaryMeaning:"vieux"},{id:41,Kanji:"名",OnReading:["メイ","ミョウ"],KunReading:["な"],OnPrincipalReading:"メイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"na",JLPTLevel:"N5",Meaning:"nom",SecondaryMeaning:"prénom"},{id:42,Kanji:"国",OnReading:["コク"],KunReading:["くに"],OnPrincipalReading:"コク",KunPrincipalReading:"くに",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuni",JLPTLevel:"N5",Meaning:"pays",SecondaryMeaning:"nation"},{id:43,Kanji:"外",OnReading:["ガイ","ゲ"],KunReading:["そと","ほか"],OnPrincipalReading:"ガイ",KunPrincipalReading:"そと",OnPrincipalReadingRomaji:"gai",KunPrincipalReadingRomaji:"soto",JLPTLevel:"N5",Meaning:"extérieur",SecondaryMeaning:"autre"},{id:44,Kanji:"女",OnReading:["ジョ","ニョ","ニョウ"],KunReading:["おんな","め"],OnPrincipalReading:"ジョ",KunPrincipalReading:"おんな",OnPrincipalReadingRomaji:"jo",KunPrincipalReadingRomaji:"onna",JLPTLevel:"N5",Meaning:"femme",SecondaryMeaning:"féminin"},{id:45,Kanji:"男",OnReading:["ダン","ナン"],KunReading:["おとこ"],OnPrincipalReading:"ダン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"dan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N5",Meaning:"homme",SecondaryMeaning:"masculin"},{id:46,Kanji:"子",OnReading:["シ","ス","ツ"],KunReading:["こ","お"],OnPrincipalReading:"シ",KunPrincipalReading:"こ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ko",JLPTLevel:"N5",Meaning:"enfant",SecondaryMeaning:"fils"},{id:47,Kanji:"学",OnReading:["ガク"],KunReading:["まな(ぶ)"],OnPrincipalReading:"ガク",KunPrincipalReading:"まな(ぶ)",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"manabu",JLPTLevel:"N5",Meaning:"étudier",SecondaryMeaning:"apprentissage"},{id:48,Kanji:"生",OnReading:["セイ","ショウ"],KunReading:["い(きる)","う(まれる)","お(う)","なま"],OnPrincipalReading:"セイ",KunPrincipalReading:"い(きる)",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"iki(ru)",JLPTLevel:"N5",Meaning:"vie",SecondaryMeaning:"naissance"},{id:49,Kanji:"小",OnReading:["ショウ"],KunReading:["ちい(さい)","こ"],OnPrincipalReading:"ショウ",KunPrincipalReading:"ちい(さい)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"chi(i)",JLPTLevel:"N5",Meaning:"petit",SecondaryMeaning:"minuscule"},{id:50,Kanji:"書",OnReading:["ショ"],KunReading:["か(く)"],OnPrincipalReading:"ショ",KunPrincipalReading:"か(く)",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"kaku",JLPTLevel:"N5",Meaning:"écrire",SecondaryMeaning:"livre"},{id:51,Kanji:"毎",OnReading:["マイ"],KunReading:["ごと"],OnPrincipalReading:"マイ",KunPrincipalReading:"ごと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"goto",JLPTLevel:"N5",Meaning:"chaque",SecondaryMeaning:"tous"},{id:52,Kanji:"先",OnReading:["セン"],KunReading:["さき","ま(ず)"],OnPrincipalReading:"セン",KunPrincipalReading:"さき",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"saki",JLPTLevel:"N5",Meaning:"avant",SecondaryMeaning:"précédent"},{id:53,Kanji:"会",OnReading:["カイ","エ"],KunReading:["あ(う)"],OnPrincipalReading:"カイ",KunPrincipalReading:"あ(う)",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"au",JLPTLevel:"N5",Meaning:"rencontre",SecondaryMeaning:"association"},{id:54,Kanji:"万",OnReading:["マン","バン"],KunReading:["よろず"],OnPrincipalReading:"マン",KunPrincipalReading:"よろず",OnPrincipalReadingRomaji:"man",KunPrincipalReadingRomaji:"yorozu",JLPTLevel:"N5",Meaning:"dix mille",SecondaryMeaning:"innombrable"},{id:55,Kanji:"円",OnReading:["エン"],KunReading:["まる"],OnPrincipalReading:"エン",KunPrincipalReading:"まる",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"maru",JLPTLevel:"N5",Meaning:"yen",SecondaryMeaning:"rond"},{id:56,Kanji:"出",OnReading:["シュツ","スイ"],KunReading:["で(る)","だ(す)"],OnPrincipalReading:"シュツ",KunPrincipalReading:"で(る)",OnPrincipalReadingRomaji:"shutsu",KunPrincipalReadingRomaji:"de(ru)",JLPTLevel:"N5",Meaning:"sortir",SecondaryMeaning:"émettre"},{id:57,Kanji:"分",OnReading:["ブン","フン","ブ"],KunReading:["わ(ける)","わ(かる)","ぶん"],OnPrincipalReading:"ブン",KunPrincipalReading:"わ(ける)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"wake(ru)",JLPTLevel:"N5",Meaning:"minute",SecondaryMeaning:"partie"},{id:58,Kanji:"北",OnReading:["ホク"],KunReading:["きた"],OnPrincipalReading:"ホク",KunPrincipalReading:"きた",OnPrincipalReadingRomaji:"hoku",KunPrincipalReadingRomaji:"kita",JLPTLevel:"N5",Meaning:"nord",SecondaryMeaning:null},{id:59,Kanji:"半",OnReading:["ハン"],KunReading:["なか(ば)"],OnPrincipalReading:"ハン",KunPrincipalReading:"なか(ば)",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"naka(ba)",JLPTLevel:"N5",Meaning:"moitié",SecondaryMeaning:null},{id:60,Kanji:"南",OnReading:["ナン","なん"],KunReading:["みなみ"],OnPrincipalReading:"ナン",KunPrincipalReading:"みなみ",OnPrincipalReadingRomaji:"nan",KunPrincipalReadingRomaji:"minami",JLPTLevel:"N5",Meaning:"sud",SecondaryMeaning:null},{id:61,Kanji:"土",OnReading:["ド","ト"],KunReading:["つち"],OnPrincipalReading:"ド",KunPrincipalReading:"つち",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tsuchi",JLPTLevel:"N5",Meaning:"terre",SecondaryMeaning:"sol"},{id:62,Kanji:"多",OnReading:["タ"],KunReading:["おお(い)"],OnPrincipalReading:"タ",KunPrincipalReading:"おお(い)",OnPrincipalReadingRomaji:"ta",KunPrincipalReadingRomaji:"oo(i)",JLPTLevel:"N5",Meaning:"beaucoup",SecondaryMeaning:"plus"},{id:63,Kanji:"天",OnReading:["テン"],KunReading:["あま","あめ"],OnPrincipalReading:"テン",KunPrincipalReading:"あま",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"ama",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"paradis"},{id:64,Kanji:"安",OnReading:["アン"],KunReading:["やす(い)"],OnPrincipalReading:"アン",KunPrincipalReading:"やす(い)",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"yasu(i)",JLPTLevel:"N5",Meaning:"bon marché",SecondaryMeaning:"sécurisé"},{id:65,Kanji:"少",OnReading:["ショウ"],KunReading:["すく(ない)","すこ(し)"],OnPrincipalReading:"ショウ",KunPrincipalReading:"すく(ない)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"suku(nai)",JLPTLevel:"N5",Meaning:"peu",SecondaryMeaning:"moins"},{id:66,Kanji:"店",OnReading:["テン"],KunReading:["みせ","たな"],OnPrincipalReading:"テン",KunPrincipalReading:"みせ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"mise",JLPTLevel:"N5",Meaning:"magasin",SecondaryMeaning:"boutique"},{id:67,Kanji:"後",OnReading:["ゴ","コウ"],KunReading:["あと","うし(ろ)","のち"],OnPrincipalReading:"ゴ",KunPrincipalReading:"あと",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"ato",JLPTLevel:"N5",Meaning:"après",SecondaryMeaning:"derrière"},{id:68,Kanji:"手",OnReading:["シュ"],KunReading:["て","た"],OnPrincipalReading:"シュ",KunPrincipalReading:"て",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"te",JLPTLevel:"N5",Meaning:"main",SecondaryMeaning:"métier"},{id:69,Kanji:"新",OnReading:["シン"],KunReading:["あたら(しい)","あら(た)"],OnPrincipalReading:"シン",KunPrincipalReading:"あたら(しい)",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"atarashii",JLPTLevel:"N5",Meaning:"nouveau",SecondaryMeaning:"récent"},{id:70,Kanji:"時",OnReading:["ジ"],KunReading:["とき","と"],OnPrincipalReading:"ジ",KunPrincipalReading:"とき",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"toki",JLPTLevel:"N5",Meaning:"temps",SecondaryMeaning:"heure"},{id:71,Kanji:"来",OnReading:["ライ","くる"],KunReading:["くる","きたる"],OnPrincipalReading:"ライ",KunPrincipalReading:"くる",OnPrincipalReadingRomaji:"rai",KunPrincipalReadingRomaji:"kuru",JLPTLevel:"N5",Meaning:"venir",SecondaryMeaning:"arriver"},{id:72,Kanji:"東",OnReading:["トウ"],KunReading:["ひがし"],OnPrincipalReading:"トウ",KunPrincipalReading:"ひがし",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"higashi",JLPTLevel:"N5",Meaning:"est",SecondaryMeaning:"orient"},{id:73,Kanji:"校",OnReading:["コウ"],KunReading:["こう"],OnPrincipalReading:"コウ",KunPrincipalReading:"こう",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kou",JLPTLevel:"N5",Meaning:"école",SecondaryMeaning:"institution"},{id:74,Kanji:"気",OnReading:["キ"],KunReading:["き"],OnPrincipalReading:"キ",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"esprit",SecondaryMeaning:"atmosphère"},{id:75,Kanji:"白",OnReading:["ハク","ビャク"],KunReading:["しろ","しろ(い)"],OnPrincipalReading:"ハク",KunPrincipalReading:"しろ",OnPrincipalReadingRomaji:"haku",KunPrincipalReadingRomaji:"shiro",JLPTLevel:"N5",Meaning:"blanc",SecondaryMeaning:null},{id:76,Kanji:"百",OnReading:["ヒャク","ビャク"],KunReading:["もも"],OnPrincipalReading:"ヒャク",KunPrincipalReading:"もも",OnPrincipalReadingRomaji:"hyaku",KunPrincipalReadingRomaji:"momo",JLPTLevel:"N5",Meaning:"cent",SecondaryMeaning:"nombre"},{id:77,Kanji:"目",OnReading:["モク","ボク"],KunReading:["め","ま"],OnPrincipalReading:"モク",KunPrincipalReading:"め",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"me",JLPTLevel:"N5",Meaning:"œil",SecondaryMeaning:"but"},{id:78,Kanji:"社",OnReading:["シャ"],KunReading:["やしろ"],OnPrincipalReading:"シャ",KunPrincipalReading:"やしろ",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"yashiro",JLPTLevel:"N5",Meaning:"société",SecondaryMeaning:"temple"},{id:79,Kanji:"空",OnReading:["クウ"],KunReading:["そら","あ(ける)","あ(く)"],OnPrincipalReading:"クウ",KunPrincipalReading:"そら",OnPrincipalReadingRomaji:"kuu",KunPrincipalReadingRomaji:"sora",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"vide"},{id:80,Kanji:"立",OnReading:["リツ","リュウ"],KunReading:["た(つ)","たて(る)"],OnPrincipalReading:"リツ",KunPrincipalReading:"た(つ)",OnPrincipalReadingRomaji:"ritsu",KunPrincipalReadingRomaji:"ta(tsu)",JLPTLevel:"N5",Meaning:"se lever",SecondaryMeaning:"établir"},{id:81,Kanji:"聞",OnReading:["ブン","モン"],KunReading:["き(く)","きこ(える)"],OnPrincipalReading:"ブン",KunPrincipalReading:"き(く)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"kiku",JLPTLevel:"N5",Meaning:"écouter",SecondaryMeaning:"entendre"},{id:82,Kanji:"花",OnReading:["カ"],KunReading:["はな"],OnPrincipalReading:"カ",KunPrincipalReading:"はな",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hana",JLPTLevel:"N5",Meaning:"fleur",SecondaryMeaning:null},{id:83,Kanji:"行",OnReading:["コウ","ギョウ"],KunReading:["い(く)","ゆ(く)","おこな(う)"],OnPrincipalReading:"コウ",KunPrincipalReading:"い(く)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"iku",JLPTLevel:"N5",Meaning:"aller",SecondaryMeaning:"ligne"},{id:84,Kanji:"西",OnReading:["セイ","サイ"],KunReading:["にし"],OnPrincipalReading:"セイ",KunPrincipalReading:"にし",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"nishi",JLPTLevel:"N5",Meaning:"ouest",SecondaryMeaning:null},{id:85,Kanji:"見",OnReading:["ケン"],KunReading:["み(る)","み(える)","み(せる)"],OnPrincipalReading:"ケン",KunPrincipalReading:"み(る)",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"miru",JLPTLevel:"N5",Meaning:"voir",SecondaryMeaning:"regarder"},{id:86,Kanji:"言",OnReading:["ゲン","ゴン"],KunReading:["い(う)","こと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"い(う)",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"iu",JLPTLevel:"N5",Meaning:"dire",SecondaryMeaning:"mot"},{id:87,Kanji:"話",OnReading:["ワ"],KunReading:["はな(す)","はなし"],OnPrincipalReading:"ワ",KunPrincipalReading:"はな(す)",OnPrincipalReadingRomaji:"wa",KunPrincipalReadingRomaji:"hanasu",JLPTLevel:"N5",Meaning:"parler",SecondaryMeaning:"conversation"},{id:88,Kanji:"語",OnReading:["ゴ"],KunReading:["かた(る)","かた(らう)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"かた(る)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"kataru",JLPTLevel:"N5",Meaning:"langue",SecondaryMeaning:"parler"},{id:89,Kanji:"読",OnReading:["ドク","トク","トウ"],KunReading:["よ(む)"],OnPrincipalReading:"ドク",KunPrincipalReading:"よ(む)",OnPrincipalReadingRomaji:"doku",KunPrincipalReadingRomaji:"yomu",JLPTLevel:"N5",Meaning:"lire",SecondaryMeaning:"lecture"},{id:90,Kanji:"買",OnReading:["バイ"],KunReading:["か(う)"],OnPrincipalReading:"バイ",KunPrincipalReading:"か(う)",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"kau",JLPTLevel:"N5",Meaning:"acheter",SecondaryMeaning:null},{id:91,Kanji:"足",OnReading:["ソク"],KunReading:["あし","た(りる)","た(す)"],OnPrincipalReading:"ソク",KunPrincipalReading:"あし",OnPrincipalReadingRomaji:"soku",KunPrincipalReadingRomaji:"ashi",JLPTLevel:"N5",Meaning:"pied",SecondaryMeaning:"suffisance"},{id:92,Kanji:"車",OnReading:["シャ"],KunReading:["くるま"],OnPrincipalReading:"シャ",KunPrincipalReading:"くるま",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"kuruma",JLPTLevel:"N5",Meaning:"voiture",SecondaryMeaning:"véhicule"},{id:93,Kanji:"道",OnReading:["ドウ"],KunReading:["みち"],OnPrincipalReading:"ドウ",KunPrincipalReading:"みち",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"michi",JLPTLevel:"N5",Meaning:"route",SecondaryMeaning:"voie"},{id:94,Kanji:"金",OnReading:["キン","コン"],KunReading:["かね","かな"],OnPrincipalReading:"キン",KunPrincipalReading:"かね",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"kane",JLPTLevel:"N5",Meaning:"argent",SecondaryMeaning:"métal"},{id:95,Kanji:"長",OnReading:["チョウ"],KunReading:["なが(い)"],OnPrincipalReading:"チョウ",KunPrincipalReading:"なが(い)",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"nagai",JLPTLevel:"N5",Meaning:"long",SecondaryMeaning:"chef"},{id:96,Kanji:"間",OnReading:["カン","ケン"],KunReading:["あいだ","ま"],OnPrincipalReading:"カン",KunPrincipalReading:"あいだ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"aida",JLPTLevel:"N5",Meaning:"intervalle",SecondaryMeaning:"espace"},{id:97,Kanji:"雨",OnReading:["ウ"],KunReading:["あめ","あま"],OnPrincipalReading:"ウ",KunPrincipalReading:"あめ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"ame",JLPTLevel:"N5",Meaning:"pluie",SecondaryMeaning:null},{id:98,Kanji:"電",OnReading:["デン"],KunReading:["いなづま"],OnPrincipalReading:"デン",KunPrincipalReading:"いなづま",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"inazuma",JLPTLevel:"N5",Meaning:"électricité",SecondaryMeaning:"éclair"},{id:99,Kanji:"食",OnReading:["ショク","ジキ"],KunReading:["た(べる)","く(う)"],OnPrincipalReading:"ショク",KunPrincipalReading:"た(べる)",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"taberu",JLPTLevel:"N5",Meaning:"manger",SecondaryMeaning:"nourriture"},{id:100,Kanji:"飲",OnReading:["イン"],KunReading:["の(む)","の(みもの)"],OnPrincipalReading:"イン",KunPrincipalReading:"の(む)",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"nomu",JLPTLevel:"N5",Meaning:"boire",SecondaryMeaning:"boisson"},{id:101,Kanji:"駅",OnReading:["エキ"],KunReading:["いき"],OnPrincipalReading:"エキ",KunPrincipalReading:"いき",OnPrincipalReadingRomaji:"eki",KunPrincipalReadingRomaji:"iki",JLPTLevel:"N5",Meaning:"gare",SecondaryMeaning:"station"},{id:102,Kanji:"高",OnReading:["コウ"],KunReading:["たか(い)","たか"],OnPrincipalReading:"コウ",KunPrincipalReading:"たか(い)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"takai",JLPTLevel:"N5",Meaning:"haut",SecondaryMeaning:"cher"},{id:103,Kanji:"魚",OnReading:["ギョ"],KunReading:["さかな","うお"],OnPrincipalReading:"ギョ",KunPrincipalReading:"さかな",OnPrincipalReadingRomaji:"gyo",KunPrincipalReadingRomaji:"sakana",JLPTLevel:"N5",Meaning:"poisson",SecondaryMeaning:null},{id:104,Kanji:"力",OnReading:["リョク","リキ"],KunReading:["ちから"],OnPrincipalReading:"リョク",KunPrincipalReading:"ちから",OnPrincipalReadingRomaji:"ryoku",KunPrincipalReadingRomaji:"chikara",JLPTLevel:"N4",Meaning:"force",SecondaryMeaning:null},{id:105,Kanji:"夕",OnReading:["セキ"],KunReading:["ゆう"],OnPrincipalReading:"セキ",KunPrincipalReading:"ゆう",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"yuu",JLPTLevel:"N4",Meaning:"soir",SecondaryMeaning:null},{id:106,Kanji:"工",OnReading:["コウ","ク"],KunReading:[],OnPrincipalReading:"コウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:107,Kanji:"元",OnReading:["ゲン","ガン"],KunReading:["もと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N4",Meaning:"origine",SecondaryMeaning:"base"},{id:108,Kanji:"止",OnReading:["シ"],KunReading:["とまる","とめる"],OnPrincipalReading:"シ",KunPrincipalReading:"とまる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tomaru",JLPTLevel:"N4",Meaning:"arrêter",SecondaryMeaning:"cesser"},{id:109,Kanji:"引",OnReading:["イン"],KunReading:["ひく","ひける"],OnPrincipalReading:"イン",KunPrincipalReading:"ひく",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"hiku",JLPTLevel:"N4",Meaning:"tirer",SecondaryMeaning:null},{id:110,Kanji:"牛",OnReading:["ギュウ"],KunReading:["うし"],OnPrincipalReading:"ギュウ",KunPrincipalReading:"うし",OnPrincipalReadingRomaji:"gyuu",KunPrincipalReadingRomaji:"ushi",JLPTLevel:"N4",Meaning:"vache",SecondaryMeaning:"bétail"},{id:111,Kanji:"区",OnReading:["ク"],KunReading:[],OnPrincipalReading:"ク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"quartier",SecondaryMeaning:"secteur"},{id:112,Kanji:"犬",OnReading:["ケン"],KunReading:["いぬ"],OnPrincipalReading:"ケン",KunPrincipalReading:"いぬ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"inu",JLPTLevel:"N4",Meaning:"chien",SecondaryMeaning:null},{id:113,Kanji:"不",OnReading:["フ","ブ"],KunReading:[],OnPrincipalReading:"フ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"non",SecondaryMeaning:"in-"},{id:114,Kanji:"文",OnReading:["ブン","モン"],KunReading:[],OnPrincipalReading:"ブン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"écriture",SecondaryMeaning:"texte"},{id:115,Kanji:"方",OnReading:["ホウ"],KunReading:["かた","がた"],OnPrincipalReading:"ホウ",KunPrincipalReading:"かた",OnPrincipalReadingRomaji:"hou",KunPrincipalReadingRomaji:"kata",JLPTLevel:"N4",Meaning:"direction",SecondaryMeaning:"personne"},{id:116,Kanji:"心",OnReading:["シン"],KunReading:["こころ"],OnPrincipalReading:"シン",KunPrincipalReading:"こころ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"kokoro",JLPTLevel:"N4",Meaning:"cœur",SecondaryMeaning:"esprit"},{id:117,Kanji:"切",OnReading:["セツ","サイ"],KunReading:["きる","きれる"],OnPrincipalReading:"セツ",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"couper",SecondaryMeaning:null},{id:118,Kanji:"太",OnReading:["タイ","タ"],KunReading:["ふとい","ふとる"],OnPrincipalReading:"タイ",KunPrincipalReading:"ふとい",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"futoi",JLPTLevel:"N4",Meaning:"gros",SecondaryMeaning:"épais"},{id:119,Kanji:"代",OnReading:["ダイ","タイ"],KunReading:["かわる","かわり","かえる"],OnPrincipalReading:"ダイ",KunPrincipalReading:"かわる",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"kawaru",JLPTLevel:"N4",Meaning:"remplacement",SecondaryMeaning:"génération"},{id:120,Kanji:"台",OnReading:["ダイ","タイ"],KunReading:[],OnPrincipalReading:"ダイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"socle",SecondaryMeaning:"plateforme"},{id:121,Kanji:"世",OnReading:["セ","セイ"],KunReading:["よ"],OnPrincipalReading:"セ",KunPrincipalReading:"よ",OnPrincipalReadingRomaji:"se",KunPrincipalReadingRomaji:"yo",JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"ère"},{id:122,Kanji:"正",OnReading:["セイ","ショウ"],KunReading:["ただしい","ただす","まさ"],OnPrincipalReading:"セイ",KunPrincipalReading:"ただしい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"tadashii",JLPTLevel:"N4",Meaning:"correct",SecondaryMeaning:"juste"},{id:123,Kanji:"田",OnReading:["デン"],KunReading:["た"],OnPrincipalReading:"デン",KunPrincipalReading:"た",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"ta",JLPTLevel:"N4",Meaning:"rizière",SecondaryMeaning:null},{id:124,Kanji:"冬",OnReading:["トウ"],KunReading:["ふゆ"],OnPrincipalReading:"トウ",KunPrincipalReading:"ふゆ",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"fuyu",JLPTLevel:"N4",Meaning:"hiver",SecondaryMeaning:null},{id:125,Kanji:"民",OnReading:["ミン"],KunReading:["たみ"],OnPrincipalReading:"ミン",KunPrincipalReading:"たみ",OnPrincipalReadingRomaji:"min",KunPrincipalReadingRomaji:"tami",JLPTLevel:"N4",Meaning:"peuple",SecondaryMeaning:"nation"},{id:126,Kanji:"用",OnReading:["ヨウ"],KunReading:["もちいる"],OnPrincipalReading:"ヨウ",KunPrincipalReading:"もちいる",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"mochiiru",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"usage"},{id:127,Kanji:"兄",OnReading:["ケイ","キョウ"],KunReading:["あに"],OnPrincipalReading:"ケイ",KunPrincipalReading:"あに",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"ani",JLPTLevel:"N4",Meaning:"grand frère",SecondaryMeaning:null},{id:128,Kanji:"以",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"à partir de",SecondaryMeaning:null},{id:129,Kanji:"去",OnReading:["キョ","コ"],KunReading:["さる"],OnPrincipalReading:"キョ",KunPrincipalReading:"さる",OnPrincipalReadingRomaji:"kyo",KunPrincipalReadingRomaji:"saru",JLPTLevel:"N4",Meaning:"quitter",SecondaryMeaning:"partir"},{id:130,Kanji:"仕",OnReading:["シ"],KunReading:["つかえる"],OnPrincipalReading:"シ",KunPrincipalReading:"つかえる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukaeru",JLPTLevel:"N4",Meaning:"servir",SecondaryMeaning:"faire"},{id:131,Kanji:"市",OnReading:["シ"],KunReading:["いち"],OnPrincipalReading:"シ",KunPrincipalReading:"いち",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ichi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"marché"},{id:132,Kanji:"広",OnReading:["コウ"],KunReading:["ひろい","ひろまる","ひろめる","ひろがる","ひろげる"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひろい",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hiroi",JLPTLevel:"N4",Meaning:"large",SecondaryMeaning:"étendu"},{id:133,Kanji:"主",OnReading:["シュ","ス"],KunReading:["ぬし","おも"],OnPrincipalReading:"シュ",KunPrincipalReading:"ぬし",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"nushi",JLPTLevel:"N4",Meaning:"maître",SecondaryMeaning:"principal"},{id:134,Kanji:"写",OnReading:["シャ"],KunReading:["うつす","うつる"],OnPrincipalReading:"シャ",KunPrincipalReading:"うつす",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"utsusu",JLPTLevel:"N4",Meaning:"copier",SecondaryMeaning:"projeter"},{id:135,Kanji:"字",OnReading:["ジ"],KunReading:[],OnPrincipalReading:"ジ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"caractère",SecondaryMeaning:"lettre"},{id:136,Kanji:"自",OnReading:["ジ","シ"],KunReading:["みずから"],OnPrincipalReading:"ジ",KunPrincipalReading:"みずから",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mizukara",JLPTLevel:"N4",Meaning:"soi-même",SecondaryMeaning:null},{id:137,Kanji:"考",OnReading:["コウ"],KunReading:["かんがえる"],OnPrincipalReading:"コウ",KunPrincipalReading:"かんがえる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kangaeru",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:null},{id:138,Kanji:"合",OnReading:["ゴウ","ガッ","カッ"],KunReading:["あう","あわす","あわせる"],OnPrincipalReading:"ゴウ",KunPrincipalReading:"あう",OnPrincipalReadingRomaji:"gou",KunPrincipalReadingRomaji:"au",JLPTLevel:"N4",Meaning:"assembler",SecondaryMeaning:"correspondre"},{id:139,Kanji:"光",OnReading:["コウ"],KunReading:["ひかる","ひかり"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひかる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hikaru",JLPTLevel:"N4",Meaning:"lumière",SecondaryMeaning:"briller"},{id:140,Kanji:"好",OnReading:["コウ"],KunReading:["すき","このむ"],OnPrincipalReading:"コウ",KunPrincipalReading:"すき",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"suki",JLPTLevel:"N4",Meaning:"aimer",SecondaryMeaning:"préférence"},{id:141,Kanji:"死",OnReading:["シ"],KunReading:["しぬ"],OnPrincipalReading:"シ",KunPrincipalReading:"しぬ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"shinu",JLPTLevel:"N4",Meaning:"mort",SecondaryMeaning:"mourir"},{id:142,Kanji:"回",OnReading:["カイ","エ"],KunReading:["まわる","まわす"],OnPrincipalReading:"カイ",KunPrincipalReading:"まわる",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"mawaru",JLPTLevel:"N4",Meaning:"tourner",SecondaryMeaning:"nombre de fois"},{id:143,Kanji:"有",OnReading:["ユウ","ウ"],KunReading:["ある"],OnPrincipalReading:"ユウ",KunPrincipalReading:"ある",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"aru",JLPTLevel:"N4",Meaning:"avoir",SecondaryMeaning:"exister"},{id:144,Kanji:"同",OnReading:["ドウ"],KunReading:["おなじ"],OnPrincipalReading:"ドウ",KunPrincipalReading:"おなじ",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"onaji",JLPTLevel:"N4",Meaning:"même",SecondaryMeaning:"identique"},{id:145,Kanji:"肉",OnReading:["ニク"],KunReading:[],OnPrincipalReading:"ニク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"niku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"viande",SecondaryMeaning:null},{id:146,Kanji:"色",OnReading:["ショク","シキ"],KunReading:["いろ"],OnPrincipalReading:"ショク",KunPrincipalReading:"いろ",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"iro",JLPTLevel:"N4",Meaning:"couleur",SecondaryMeaning:"apparence"},{id:147,Kanji:"早",OnReading:["ソウ","サッ"],KunReading:["はやい","はやまる","はやめる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はやい",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hayai",JLPTLevel:"N4",Meaning:"tôt",SecondaryMeaning:"rapide"},{id:148,Kanji:"地",OnReading:["チ","ジ"],KunReading:[],OnPrincipalReading:"チ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"terre",SecondaryMeaning:"sol"},{id:149,Kanji:"池",OnReading:["チ"],KunReading:["いけ"],OnPrincipalReading:"チ",KunPrincipalReading:"いけ",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"ike",JLPTLevel:"N4",Meaning:"étang",SecondaryMeaning:null},{id:150,Kanji:"村",OnReading:["ソン"],KunReading:["むら"],OnPrincipalReading:"ソン",KunPrincipalReading:"むら",OnPrincipalReadingRomaji:"son",KunPrincipalReadingRomaji:"mura",JLPTLevel:"N4",Meaning:"village",SecondaryMeaning:null},{id:151,Kanji:"体",OnReading:["タイ","テイ"],KunReading:["からだ"],OnPrincipalReading:"タイ",KunPrincipalReading:"からだ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"karada",JLPTLevel:"N4",Meaning:"corps",SecondaryMeaning:"structure"},{id:152,Kanji:"町",OnReading:["チョウ"],KunReading:["まち"],OnPrincipalReading:"チョウ",KunPrincipalReading:"まち",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"machi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"quartier"},{id:153,Kanji:"低",OnReading:["テイ"],KunReading:["ひくい","ひくめる","ひくまる"],OnPrincipalReading:"テイ",KunPrincipalReading:"ひくい",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"hikui",JLPTLevel:"N4",Meaning:"bas",SecondaryMeaning:"faible"},{id:154,Kanji:"弟",OnReading:["テイ","ダイ","デ"],KunReading:["おとうと"],OnPrincipalReading:"テイ",KunPrincipalReading:"おとうと",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"otouto",JLPTLevel:"N4",Meaning:"petit frère",SecondaryMeaning:null},{id:155,Kanji:"走",OnReading:["ソウ"],KunReading:["はしる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はしる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hashiru",JLPTLevel:"N4",Meaning:"courir",SecondaryMeaning:null},{id:156,Kanji:"赤",OnReading:["セキ","シャク"],KunReading:["あか","あかい","あからむ","あからめる"],OnPrincipalReading:"セキ",KunPrincipalReading:"あか",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"aka",JLPTLevel:"N4",Meaning:"rouge",SecondaryMeaning:"cramoisi"},{id:157,Kanji:"図",OnReading:["ズ","ト"],KunReading:["はかる"],OnPrincipalReading:"ズ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"zu",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"plan",SecondaryMeaning:"carte"},{id:158,Kanji:"究",OnReading:["キュウ"],KunReading:["きわめる"],OnPrincipalReading:"キュウ",KunPrincipalReading:"きわめる",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kiwameru",JLPTLevel:"N4",Meaning:"rechercher",SecondaryMeaning:"examiner"},{id:159,Kanji:"声",OnReading:["セイ","ショウ"],KunReading:["こえ","こわ"],OnPrincipalReading:"セイ",KunPrincipalReading:"こえ",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"koe",JLPTLevel:"N4",Meaning:"voix",SecondaryMeaning:"son"},{id:160,Kanji:"売",OnReading:["バイ"],KunReading:["うる","うれる"],OnPrincipalReading:"バイ",KunPrincipalReading:"うる",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"uru",JLPTLevel:"N4",Meaning:"vendre",SecondaryMeaning:"marcher (commerce)"},{id:161,Kanji:"別",OnReading:["ベツ"],KunReading:["わかれる","わける"],OnPrincipalReading:"ベツ",KunPrincipalReading:"わかれる",OnPrincipalReadingRomaji:"betsu",KunPrincipalReadingRomaji:"wakareru",JLPTLevel:"N4",Meaning:"séparer",SecondaryMeaning:"distinct"},{id:162,Kanji:"医",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"médecine",SecondaryMeaning:"soigner"},{id:163,Kanji:"近",OnReading:["キン"],KunReading:["ちかい"],OnPrincipalReading:"キン",KunPrincipalReading:"ちかい",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"chikai",JLPTLevel:"N4",Meaning:"proche",SecondaryMeaning:"près"},{id:164,Kanji:"私",OnReading:["シ"],KunReading:["わたし","わたくし"],OnPrincipalReading:"シ",KunPrincipalReading:"わたし",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"watashi",JLPTLevel:"N4",Meaning:"je",SecondaryMeaning:"moi"},{id:165,Kanji:"作",OnReading:["サク","サ"],KunReading:["つくる"],OnPrincipalReading:"サク",KunPrincipalReading:"つくる",OnPrincipalReadingRomaji:"saku",KunPrincipalReadingRomaji:"tsukuru",JLPTLevel:"N4",Meaning:"faire",SecondaryMeaning:"créer"},{id:166,Kanji:"住",OnReading:["ジュウ"],KunReading:["すむ","すまう"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"すむ",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"sumu",JLPTLevel:"N4",Meaning:"habiter",SecondaryMeaning:"vivre"},{id:167,Kanji:"者",OnReading:["シャ"],KunReading:["もの"],OnPrincipalReading:"シャ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"personne",SecondaryMeaning:"individu"},{id:168,Kanji:"事",OnReading:["ジ"],KunReading:["こと"],OnPrincipalReading:"ジ",KunPrincipalReading:"こと",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"koto",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"affaire"},{id:169,Kanji:"使",OnReading:["シ"],KunReading:["つかう"],OnPrincipalReading:"シ",KunPrincipalReading:"つかう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukau",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"employer"},{id:170,Kanji:"始",OnReading:["シ"],KunReading:["はじめる","はじまる"],OnPrincipalReading:"シ",KunPrincipalReading:"はじめる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"hajimeru",JLPTLevel:"N4",Meaning:"commencer",SecondaryMeaning:"débuter"},{id:171,Kanji:"姉",OnReading:["シ"],KunReading:["あね"],OnPrincipalReading:"シ",KunPrincipalReading:"あね",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ane",JLPTLevel:"N4",Meaning:"grande sœur",SecondaryMeaning:null},{id:172,Kanji:"英",OnReading:["エイ"],KunReading:[],OnPrincipalReading:"エイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"Angleterre",SecondaryMeaning:"héroïque"},{id:173,Kanji:"京",OnReading:["キョウ","ケイ"],KunReading:[],OnPrincipalReading:"キョウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"Kyoto"},{id:174,Kanji:"画",OnReading:["ガ","カク"],KunReading:[],OnPrincipalReading:"ガ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ga",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"dessin",SecondaryMeaning:"trait"},{id:175,Kanji:"妹",OnReading:["マイ"],KunReading:["いもうと"],OnPrincipalReading:"マイ",KunPrincipalReading:"いもうと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"imouto",JLPTLevel:"N4",Meaning:"petite sœur",SecondaryMeaning:null},{id:176,Kanji:"味",OnReading:["ミ"],KunReading:["あじ","あじわう"],OnPrincipalReading:"ミ",KunPrincipalReading:"あじ",OnPrincipalReadingRomaji:"mi",KunPrincipalReadingRomaji:"aji",JLPTLevel:"N4",Meaning:"goût",SecondaryMeaning:"saveur"},{id:177,Kanji:"服",OnReading:["フク"],KunReading:[],OnPrincipalReading:"フク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fuku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"vêtements",SecondaryMeaning:null},{id:178,Kanji:"物",OnReading:["ブツ","モツ"],KunReading:["もの"],OnPrincipalReading:"ブツ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"butsu",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"objet"},{id:179,Kanji:"歩",OnReading:["ホ","ブ","フ"],KunReading:["あるく","あゆむ"],OnPrincipalReading:"ホ",KunPrincipalReading:"あるく",OnPrincipalReadingRomaji:"ho",KunPrincipalReadingRomaji:"aruku",JLPTLevel:"N4",Meaning:"marcher",SecondaryMeaning:"pas"},{id:180,Kanji:"門",OnReading:["モン"],KunReading:["かど"],OnPrincipalReading:"モン",KunPrincipalReading:"かど",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"kado",JLPTLevel:"N4",Meaning:"porte",SecondaryMeaning:"portail"},{id:181,Kanji:"夜",OnReading:["ヤ"],KunReading:["よ","よる"],OnPrincipalReading:"ヤ",KunPrincipalReading:"よる",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"yoru",JLPTLevel:"N4",Meaning:"nuit",SecondaryMeaning:null},{id:182,Kanji:"明",OnReading:["メイ","ミョウ"],KunReading:["あかるい","あける"],OnPrincipalReading:"メイ",KunPrincipalReading:"あかるい",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"akarui",JLPTLevel:"N4",Meaning:"clair",SecondaryMeaning:"lumineux"},{id:183,Kanji:"林",OnReading:["リン"],KunReading:["はやし"],OnPrincipalReading:"リン",KunPrincipalReading:"はやし",OnPrincipalReadingRomaji:"rin",KunPrincipalReadingRomaji:"hayashi",JLPTLevel:"N4",Meaning:"bois",SecondaryMeaning:"forêt"},{id:184,Kanji:"青",OnReading:["セイ","ショウ"],KunReading:["あお","あおい"],OnPrincipalReading:"セイ",KunPrincipalReading:"あおい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"aoi",JLPTLevel:"N4",Meaning:"bleu",SecondaryMeaning:"vert"},{id:185,Kanji:"所",OnReading:["ショ"],KunReading:["ところ"],OnPrincipalReading:"ショ",KunPrincipalReading:"ところ",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"tokoro",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"endroit"},{id:186,Kanji:"注",OnReading:["チュウ"],KunReading:["そそぐ"],OnPrincipalReading:"チュウ",KunPrincipalReading:"そそぐ",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"sosogu",JLPTLevel:"N4",Meaning:"verser",SecondaryMeaning:"concentrer"},{id:187,Kanji:"知",OnReading:["チ"],KunReading:["しる"],OnPrincipalReading:"チ",KunPrincipalReading:"しる",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"shiru",JLPTLevel:"N4",Meaning:"savoir",SecondaryMeaning:"connaître"},{id:188,Kanji:"昼",OnReading:["チュウ"],KunReading:["ひる"],OnPrincipalReading:"チュウ",KunPrincipalReading:"ひる",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"hiru",JLPTLevel:"N4",Meaning:"midi",SecondaryMeaning:"jour"},{id:189,Kanji:"茶",OnReading:["チャ","サ"],KunReading:[],OnPrincipalReading:"チャ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"cha",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"thé",SecondaryMeaning:null},{id:190,Kanji:"待",OnReading:["タイ"],KunReading:["まつ"],OnPrincipalReading:"タイ",KunPrincipalReading:"まつ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"matsu",JLPTLevel:"N4",Meaning:"attendre",SecondaryMeaning:null},{id:191,Kanji:"洗",OnReading:["セン"],KunReading:["あらう"],OnPrincipalReading:"セン",KunPrincipalReading:"あらう",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"arau",JLPTLevel:"N4",Meaning:"laver",SecondaryMeaning:null},{id:192,Kanji:"送",OnReading:["ソウ"],KunReading:["おくる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"おくる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"okuru",JLPTLevel:"N4",Meaning:"envoyer",SecondaryMeaning:null},{id:193,Kanji:"品",OnReading:["ヒン"],KunReading:["しな"],OnPrincipalReading:"ヒン",KunPrincipalReading:"しな",OnPrincipalReadingRomaji:"hin",KunPrincipalReadingRomaji:"shina",JLPTLevel:"N4",Meaning:"produit",SecondaryMeaning:"article"},{id:194,Kanji:"洋",OnReading:["ヨウ"],KunReading:[],OnPrincipalReading:"ヨウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"océan",SecondaryMeaning:"occidental"},{id:195,Kanji:"便",OnReading:["ベン","ビン"],KunReading:["たより"],OnPrincipalReading:"ベン",KunPrincipalReading:"たより",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tayori",JLPTLevel:"N4",Meaning:"commodité",SecondaryMeaning:"courrier"},{id:196,Kanji:"風",OnReading:["フウ","フ"],KunReading:["かぜ"],OnPrincipalReading:"フウ",KunPrincipalReading:"かぜ",OnPrincipalReadingRomaji:"fuu",KunPrincipalReadingRomaji:"kaze",JLPTLevel:"N4",Meaning:"vent",SecondaryMeaning:"style"},{id:197,Kanji:"発",OnReading:["ハツ","ホツ"],KunReading:[],OnPrincipalReading:"ハツ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"hatsu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"départ",SecondaryMeaning:"émission"},{id:198,Kanji:"度",OnReading:["ド","ト","タク"],KunReading:["たび"],OnPrincipalReading:"ド",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"degré",SecondaryMeaning:"fois"},{id:199,Kanji:"映",OnReading:["エイ"],KunReading:["うつる","うつす"],OnPrincipalReading:"エイ",KunPrincipalReading:"うつる",OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:"utsuru",JLPTLevel:"N4",Meaning:"projeter",SecondaryMeaning:"reflet"},{id:200,Kanji:"海",OnReading:["カイ"],KunReading:["うみ"],OnPrincipalReading:"カイ",KunPrincipalReading:"うみ",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"umi",JLPTLevel:"N4",Meaning:"mer",SecondaryMeaning:null},{id:201,Kanji:"界",OnReading:["カイ"],KunReading:[],OnPrincipalReading:"カイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"limite"},{id:202,Kanji:"屋",OnReading:["オク"],KunReading:["や"],OnPrincipalReading:"オク",KunPrincipalReading:"や",OnPrincipalReadingRomaji:"oku",KunPrincipalReadingRomaji:"ya",JLPTLevel:"N4",Meaning:"toit",SecondaryMeaning:"boutique"},{id:203,Kanji:"音",OnReading:["オン","イン"],KunReading:["おと","ね"],OnPrincipalReading:"オン",KunPrincipalReading:"おと",OnPrincipalReadingRomaji:"on",KunPrincipalReadingRomaji:"oto",JLPTLevel:"N4",Meaning:"son",SecondaryMeaning:null},{id:204,Kanji:"急",OnReading:["キュウ"],KunReading:["いそぐ"],OnPrincipalReading:"キュウ",KunPrincipalReading:"いそぐ",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"isogu",JLPTLevel:"N4",Meaning:"urgence",SecondaryMeaning:"rapide"},{id:205,Kanji:"計",OnReading:["ケイ"],KunReading:["はかる"],OnPrincipalReading:"ケイ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"compter",SecondaryMeaning:"mesurer"},{id:206,Kanji:"建",OnReading:["ケン","コン"],KunReading:["たてる","たつ"],OnPrincipalReading:"ケン",KunPrincipalReading:"たてる",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tateru",JLPTLevel:"N4",Meaning:"construire",SecondaryMeaning:null},{id:207,Kanji:"研",OnReading:["ケン"],KunReading:["とぐ"],OnPrincipalReading:"ケン",KunPrincipalReading:"とぐ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"togu",JLPTLevel:"N4",Meaning:"aiguiser",SecondaryMeaning:"étudier"},{id:208,Kanji:"県",OnReading:["ケン"],KunReading:[],OnPrincipalReading:"ケン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"préfecture",SecondaryMeaning:null},{id:209,Kanji:"思",OnReading:["シ"],KunReading:["おもう"],OnPrincipalReading:"シ",KunPrincipalReading:"おもう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"omou",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:"croire"},{id:210,Kanji:"乗",OnReading:["ジョウ"],KunReading:["のる","のせる"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"のる",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"noru",JLPTLevel:"N4",Meaning:"monter",SecondaryMeaning:"embarquer"},{id:211,Kanji:"重",OnReading:["ジュウ","チョウ"],KunReading:["おもい","かさなる","かさねる"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"おもい",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"omoi",JLPTLevel:"N4",Meaning:"lourd",SecondaryMeaning:"empiler"},{id:212,Kanji:"春",OnReading:["シュン"],KunReading:["はる"],OnPrincipalReading:"シュン",KunPrincipalReading:"はる",OnPrincipalReadingRomaji:"shun",KunPrincipalReadingRomaji:"haru",JLPTLevel:"N4",Meaning:"printemps",SecondaryMeaning:null},{id:213,Kanji:"室",OnReading:["シツ"],KunReading:["むろ"],OnPrincipalReading:"シツ",KunPrincipalReading:"むろ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"muro",JLPTLevel:"N4",Meaning:"pièce",SecondaryMeaning:"chambre"},{id:214,Kanji:"持",OnReading:["ジ"],KunReading:["もつ"],OnPrincipalReading:"ジ",KunPrincipalReading:"もつ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"motsu",JLPTLevel:"N4",Meaning:"tenir",SecondaryMeaning:"posséder"},{id:215,Kanji:"首",OnReading:["シュ"],KunReading:["くび"],OnPrincipalReading:"シュ",KunPrincipalReading:"くび",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"kubi",JLPTLevel:"N4",Meaning:"cou",SecondaryMeaning:"chef"},{id:216,Kanji:"秋",OnReading:["シュウ"],KunReading:["あき"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あき",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"aki",JLPTLevel:"N4",Meaning:"automne",SecondaryMeaning:null},{id:217,Kanji:"借",OnReading:["シャク"],KunReading:["かりる"],OnPrincipalReading:"シャク",KunPrincipalReading:"かりる",OnPrincipalReadingRomaji:"shaku",KunPrincipalReadingRomaji:"kariru",JLPTLevel:"N4",Meaning:"emprunter",SecondaryMeaning:null},{id:218,Kanji:"弱",OnReading:["ジャク"],KunReading:["よわい","よわる"],OnPrincipalReading:"ジャク",KunPrincipalReading:"よわい",OnPrincipalReadingRomaji:"jaku",KunPrincipalReadingRomaji:"yowai",JLPTLevel:"N4",Meaning:"faible",SecondaryMeaning:null},{id:219,Kanji:"紙",OnReading:["シ"],KunReading:["かみ"],OnPrincipalReading:"シ",KunPrincipalReading:"かみ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kami",JLPTLevel:"N4",Meaning:"papier",SecondaryMeaning:null},{id:220,Kanji:"帰",OnReading:["キ"],KunReading:["かえる","かえす"],OnPrincipalReading:"キ",KunPrincipalReading:"かえる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"kaeru",JLPTLevel:"N4",Meaning:"retourner",SecondaryMeaning:"rentrer"},{id:221,Kanji:"起",OnReading:["キ"],KunReading:["おきる","おこす"],OnPrincipalReading:"キ",KunPrincipalReading:"おきる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"okiru",JLPTLevel:"N4",Meaning:"se lever",SecondaryMeaning:"commencer"},{id:222,Kanji:"夏",OnReading:["カ"],KunReading:["なつ"],OnPrincipalReading:"カ",KunPrincipalReading:"なつ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"natsu",JLPTLevel:"N4",Meaning:"été",SecondaryMeaning:null},{id:223,Kanji:"家",OnReading:["カ","ケ"],KunReading:["いえ","や"],OnPrincipalReading:"カ",KunPrincipalReading:"いえ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"ie",JLPTLevel:"N4",Meaning:"maison",SecondaryMeaning:"famille"},{id:224,Kanji:"院",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"institut",SecondaryMeaning:"hôpital"},{id:225,Kanji:"員",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"membre",SecondaryMeaning:"employé"},{id:226,Kanji:"病",OnReading:["ビョウ","ヘイ"],KunReading:["やむ","いたむ"],OnPrincipalReading:"ビョウ",KunPrincipalReading:"やむ",OnPrincipalReadingRomaji:"byou",KunPrincipalReadingRomaji:"yamu",JLPTLevel:"N4",Meaning:"maladie",SecondaryMeaning:"être malade"},{id:227,Kanji:"勉",OnReading:["ベン"],KunReading:["つとめる"],OnPrincipalReading:"ベン",KunPrincipalReading:"つとめる",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tsutomeru",JLPTLevel:"N4",Meaning:"effort",SecondaryMeaning:"étudier"},{id:228,Kanji:"特",OnReading:["トク"],KunReading:[],OnPrincipalReading:"トク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"toku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"spécial",SecondaryMeaning:"particulier"},{id:229,Kanji:"旅",OnReading:["リョ"],KunReading:["たび"],OnPrincipalReading:"リョ",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"ryo",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"voyage",SecondaryMeaning:null},{id:230,Kanji:"料",OnReading:["リョウ"],KunReading:["はかる"],OnPrincipalReading:"リョウ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"ryou",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"coût",SecondaryMeaning:"ingrédient"},{id:231,Kanji:"真",OnReading:["シン"],KunReading:["ま","まこと"],OnPrincipalReading:"シン",KunPrincipalReading:"ま",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"ma",JLPTLevel:"N4",Meaning:"vrai",SecondaryMeaning:"vérité"},{id:232,Kanji:"通",OnReading:["ツウ"],KunReading:["とおる","とおす"],OnPrincipalReading:"ツウ",KunPrincipalReading:"とおる",OnPrincipalReadingRomaji:"tsuu",KunPrincipalReadingRomaji:"tooru",JLPTLevel:"N4",Meaning:"passer",SecondaryMeaning:"communication"},{id:233,Kanji:"鳥",OnReading:["チョウ"],KunReading:["とり"],OnPrincipalReading:"チョウ",KunPrincipalReading:"とり",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"tori",JLPTLevel:"N4",Meaning:"oiseau",SecondaryMeaning:null},{id:234,Kanji:"転",OnReading:["テン"],KunReading:["ころぶ","ころがる"],OnPrincipalReading:"テン",KunPrincipalReading:"ころぶ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"korobu",JLPTLevel:"N4",Meaning:"rouler",SecondaryMeaning:"changer"},{id:235,Kanji:"族",OnReading:["ゾク"],KunReading:["ぞく"],OnPrincipalReading:"ゾク",KunPrincipalReading:"ぞく",OnPrincipalReadingRomaji:"zoku",KunPrincipalReadingRomaji:"zoku",JLPTLevel:"N4",Meaning:"famille",SecondaryMeaning:"tribu"},{id:236,Kanji:"進",OnReading:["シン"],KunReading:["すすむ","すすめる"],OnPrincipalReading:"シン",KunPrincipalReading:"すすむ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"susumu",JLPTLevel:"N4",Meaning:"avancer",SecondaryMeaning:"progresser"},{id:237,Kanji:"理",OnReading:["リ"],KunReading:["ことわり"],OnPrincipalReading:"リ",KunPrincipalReading:"ことわり",OnPrincipalReadingRomaji:"ri",KunPrincipalReadingRomaji:"kotowari",JLPTLevel:"N4",Meaning:"logique",SecondaryMeaning:"raison"},{id:238,Kanji:"野",OnReading:["ヤ","ショ"],KunReading:["の"],OnPrincipalReading:"ヤ",KunPrincipalReading:"の",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"no",JLPTLevel:"N4",Meaning:"champ",SecondaryMeaning:"nature"},{id:239,Kanji:"問",OnReading:["モン"],KunReading:["とい","といあわせる"],OnPrincipalReading:"モン",KunPrincipalReading:"とい",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"toi",JLPTLevel:"N4",Meaning:"question",SecondaryMeaning:"demander"},{id:240,Kanji:"都",OnReading:["ト","ツ"],KunReading:["みやこ"],OnPrincipalReading:"ト",KunPrincipalReading:"みやこ",OnPrincipalReadingRomaji:"to",KunPrincipalReadingRomaji:"miyako",JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"métropole"},{id:241,Kanji:"堂",OnReading:["ドウ"],KunReading:["どう"],OnPrincipalReading:"ドウ",KunPrincipalReading:"どう",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"dou",JLPTLevel:"N4",Meaning:"hall",SecondaryMeaning:"temple"},{id:242,Kanji:"動",OnReading:["ドウ"],KunReading:["うごく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"うごく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"ugoku",JLPTLevel:"N4",Meaning:"mouvement",SecondaryMeaning:"agir"},{id:243,Kanji:"悪",OnReading:["アク","オ"],KunReading:["わるい"],OnPrincipalReading:"アク",KunPrincipalReading:"わるい",OnPrincipalReadingRomaji:"aku",KunPrincipalReadingRomaji:"warui",JLPTLevel:"N4",Meaning:"mauvais",SecondaryMeaning:"mal"},{id:244,Kanji:"強",OnReading:["キョウ","ゴウ"],KunReading:["つよい","しなう"],OnPrincipalReading:"キョウ",KunPrincipalReading:"つよい",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"tsuyoi",JLPTLevel:"N4",Meaning:"fort",SecondaryMeaning:"intense"},{id:245,Kanji:"教",OnReading:["キョウ","オシ"],KunReading:["おしえる","おそわる"],OnPrincipalReading:"キョウ",KunPrincipalReading:"おしえる",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"oshieru",JLPTLevel:"N4",Meaning:"enseigner",SecondaryMeaning:"religion"},{id:246,Kanji:"産",OnReading:["サン"],KunReading:["うむ","うまれる"],OnPrincipalReading:"サン",KunPrincipalReading:"うむ",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"umu",JLPTLevel:"N4",Meaning:"production",SecondaryMeaning:"naissance"},{id:247,Kanji:"黒",OnReading:["コク"],KunReading:["くろ","くろい"],OnPrincipalReading:"コク",KunPrincipalReading:"くろ",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuro",JLPTLevel:"N4",Meaning:"noir",SecondaryMeaning:null},{id:248,Kanji:"菜",OnReading:["サイ"],KunReading:["な"],OnPrincipalReading:"サイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"sai",KunPrincipalReadingRomaji:"na",JLPTLevel:"N4",Meaning:"légume",SecondaryMeaning:"verdure"},{id:249,Kanji:"終",OnReading:["シュウ"],KunReading:["おわる","おえる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"おわる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"owaru",JLPTLevel:"N4",Meaning:"fin",SecondaryMeaning:"terminer"},{id:250,Kanji:"習",OnReading:["シュウ"],KunReading:["ならう"],OnPrincipalReading:"シュウ",KunPrincipalReading:"ならう",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"narau",JLPTLevel:"N4",Meaning:"apprendre",SecondaryMeaning:"pratiquer"},{id:251,Kanji:"集",OnReading:["シュウ"],KunReading:["あつまる","あつめる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あつまる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"atsumaru",JLPTLevel:"N4",Meaning:"rassembler",SecondaryMeaning:"collection"},{id:252,Kanji:"場",OnReading:["ジョウ"],KunReading:["ば"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"ば",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ba",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"emplacement"},{id:253,Kanji:"寒",OnReading:["カン"],KunReading:["さむい"],OnPrincipalReading:"カン",KunPrincipalReading:"さむい",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"samui",JLPTLevel:"N4",Meaning:"froid",SecondaryMeaning:null},{id:254,Kanji:"軽",OnReading:["ケイ"],KunReading:["かるい","けい"],OnPrincipalReading:"ケイ",KunPrincipalReading:"かるい",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"karui",JLPTLevel:"N4",Meaning:"léger",SecondaryMeaning:"facile"},{id:255,Kanji:"運",OnReading:["ウン"],KunReading:["はこぶ"],OnPrincipalReading:"ウン",KunPrincipalReading:"はこぶ",OnPrincipalReadingRomaji:"un",KunPrincipalReadingRomaji:"hakobu",JLPTLevel:"N4",Meaning:"chance",SecondaryMeaning:"transport"},{id:256,Kanji:"開",OnReading:["カイ"],KunReading:["ひらく","あける"],OnPrincipalReading:"カイ",KunPrincipalReading:"ひらく",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"hiraku",JLPTLevel:"N4",Meaning:"ouvrir",SecondaryMeaning:"développer"},{id:257,Kanji:"飯",OnReading:["ハン"],KunReading:["めし"],OnPrincipalReading:"ハン",KunPrincipalReading:"めし",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"meshi",JLPTLevel:"N4",Meaning:"riz cuit",SecondaryMeaning:"repas"},{id:258,Kanji:"答",OnReading:["トウ"],KunReading:["こたえる","こたえ"],OnPrincipalReading:"トウ",KunPrincipalReading:"こたえる",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"kotaeru",JLPTLevel:"N4",Meaning:"réponse",SecondaryMeaning:"répondre"},{id:259,Kanji:"森",OnReading:["シン"],KunReading:["もり"],OnPrincipalReading:"シン",KunPrincipalReading:"もり",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"mori",JLPTLevel:"N4",Meaning:"forêt",SecondaryMeaning:null},{id:260,Kanji:"朝",OnReading:["チョウ"],KunReading:["あさ"],OnPrincipalReading:"チョウ",KunPrincipalReading:"あさ",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"asa",JLPTLevel:"N4",Meaning:"matin",SecondaryMeaning:"petit-déjeuner"},{id:261,Kanji:"貸",OnReading:["タイ"],KunReading:["かす"],OnPrincipalReading:"タイ",KunPrincipalReading:"かす",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"kasu",JLPTLevel:"N4",Meaning:"prêter",SecondaryMeaning:null},{id:262,Kanji:"着",OnReading:["チャク","ジャク"],KunReading:["きる","つく"],OnPrincipalReading:"チャク",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"chaku",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"arriver",SecondaryMeaning:"mettre (vêtement)"},{id:263,Kanji:"短",OnReading:["タン"],KunReading:["みじかい"],OnPrincipalReading:"タン",KunPrincipalReading:"みじかい",OnPrincipalReadingRomaji:"tan",KunPrincipalReadingRomaji:"mijikai",JLPTLevel:"N4",Meaning:"court",SecondaryMeaning:"durée courte"},{id:264,Kanji:"働",OnReading:["ドウ"],KunReading:["はたらく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"はたらく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"hataraku",JLPTLevel:"N4",Meaning:"travailler",SecondaryMeaning:null},{id:265,Kanji:"楽",OnReading:["ガク","ラク"],KunReading:["たのしい","らく"],OnPrincipalReading:"ガク",KunPrincipalReading:"たのしい",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"tanoshii",JLPTLevel:"N4",Meaning:"amusant",SecondaryMeaning:"musique"},{id:266,Kanji:"暗",OnReading:["アン"],KunReading:["くらい"],OnPrincipalReading:"アン",KunPrincipalReading:"くらい",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"kurai",JLPTLevel:"N4",Meaning:"sombre",SecondaryMeaning:"obscurité"},{id:267,Kanji:"意",OnReading:["イ"],KunReading:["い"],OnPrincipalReading:"イ",KunPrincipalReading:"い",OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:"i",JLPTLevel:"N4",Meaning:"intention",SecondaryMeaning:"pensée"},{id:268,Kanji:"遠",OnReading:["エン"],KunReading:["とおい"],OnPrincipalReading:"エン",KunPrincipalReading:"とおい",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"tooi",JLPTLevel:"N4",Meaning:"loin",SecondaryMeaning:"éloigné"},{id:269,Kanji:"漢",OnReading:["カン"],KunReading:["おとこ"],OnPrincipalReading:"カン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N4",Meaning:"chinois",SecondaryMeaning:"Hanzi"},{id:270,Kanji:"業",OnReading:["ギョウ","ゴウ"],KunReading:["わざ"],OnPrincipalReading:"ギョウ",KunPrincipalReading:"わざ",OnPrincipalReadingRomaji:"gyou",KunPrincipalReadingRomaji:"waza",JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:271,Kanji:"試",OnReading:["シ"],KunReading:["こころみる","ためす"],OnPrincipalReading:"シ",KunPrincipalReading:"こころみる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kokoromiru",JLPTLevel:"N4",Meaning:"essayer",SecondaryMeaning:"test"},{id:272,Kanji:"銀",OnReading:["ギン"],KunReading:["しろがね"],OnPrincipalReading:"ギン",KunPrincipalReading:"しろがね",OnPrincipalReadingRomaji:"gin",KunPrincipalReadingRomaji:"shirogane",JLPTLevel:"N4",Meaning:"argent",SecondaryMeaning:null},{id:273,Kanji:"歌",OnReading:["カ"],KunReading:["うた"],OnPrincipalReading:"カ",KunPrincipalReading:"うた",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"uta",JLPTLevel:"N4",Meaning:"chanson",SecondaryMeaning:"chanter"},{id:274,Kanji:"説",OnReading:["セツ","ゼイ"],KunReading:["とく"],OnPrincipalReading:"セツ",KunPrincipalReading:"とく",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"toku",JLPTLevel:"N4",Meaning:"explication",SecondaryMeaning:"théorie"},{id:275,Kanji:"質",OnReading:["シツ","シチ"],KunReading:["しつ"],OnPrincipalReading:"シツ",KunPrincipalReading:"しつ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"shitsu",JLPTLevel:"N4",Meaning:"qualité",SecondaryMeaning:"matière"},{id:276,Kanji:"館",OnReading:["カン"],KunReading:["やかた"],OnPrincipalReading:"カン",KunPrincipalReading:"やかた",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"yakata",JLPTLevel:"N4",Meaning:"bâtiment",SecondaryMeaning:"musée"},{id:277,Kanji:"親",OnReading:["シン"],KunReading:["おや","したしい"],OnPrincipalReading:"シン",KunPrincipalReading:"おや",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"oya",JLPTLevel:"N4",Meaning:"parent",SecondaryMeaning:"intime"},{id:278,Kanji:"頭",OnReading:["トウ"],KunReading:["あたま"],OnPrincipalReading:"トウ",KunPrincipalReading:"あたま",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"atama",JLPTLevel:"N4",Meaning:"tête",SecondaryMeaning:"cerveau"},{id:279,Kanji:"薬",OnReading:["ヤク","クスリ"],KunReading:["くすり"],OnPrincipalReading:"ヤク",KunPrincipalReading:"くすり",OnPrincipalReadingRomaji:"yaku",KunPrincipalReadingRomaji:"kusuri",JLPTLevel:"N4",Meaning:"médicament",SecondaryMeaning:"drogue"},{id:280,Kanji:"曜",OnReading:["ヨウ"],KunReading:[""],OnPrincipalReading:"ヨウ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"jour de la semaine",SecondaryMeaning:null},{id:281,Kanji:"題",OnReading:["ダイ"],KunReading:[""],OnPrincipalReading:"ダイ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"sujet",SecondaryMeaning:"titre"},{id:282,Kanji:"顔",OnReading:["ガン"],KunReading:["かお"],OnPrincipalReading:"ガン",KunPrincipalReading:"かお",OnPrincipalReadingRomaji:"gan",KunPrincipalReadingRomaji:"kao",JLPTLevel:"N4",Meaning:"visage",SecondaryMeaning:"expression"},{id:283,Kanji:"験",OnReading:["ケン","ゲン"],KunReading:["ためす","けん"],OnPrincipalReading:"ケン",KunPrincipalReading:"ためす",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tamesu",JLPTLevel:"N4",Meaning:"expérience",SecondaryMeaning:"test"},{id:284,Kanji:"暑",OnReading:["ショ"],KunReading:["あつい"],OnPrincipalReading:"ショ",KunPrincipalReading:"あつい",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"atsui",JLPTLevel:"N4",Meaning:"chaleur",SecondaryMeaning:null}],So={kanji:l2},c2=[{id:1,JLPTLevel:"N1",kanji:"亜",hiragana:"あ",Romaji:"a",francais:"sub-, sous-",categorie:["nom"]},{id:2,JLPTLevel:"N5",kanji:"嗚呼",hiragana:"ああ",Romaji:"aa",francais:"ah !, oh !, hey!",categorie:["expressions idiomatiques"]},{id:3,JLPTLevel:"N3",kanji:"愛",hiragana:"あい",Romaji:"ai",francais:"amour",categorie:["émotions et sentiments"]},{id:4,JLPTLevel:"N2",kanji:"相変わらず",hiragana:"あいかわらず",Romaji:"aikawarazu",francais:"comme d'habitude, comme toujours",categorie:["expressions idiomatiques"]},{id:5,JLPTLevel:"N4",kanji:"挨拶",hiragana:"あいさつ",Romaji:"aisatsu",francais:"salutation",categorie:["formules de politesse"]},{id:6,JLPTLevel:"N5",kanji:"挨拶する",hiragana:"あいさつする",Romaji:"aisatsu suru",francais:"saluer",categorie:["verbes","verbes d’action"]},{id:7,JLPTLevel:"N3",kanji:"愛情",hiragana:"あいじょう",Romaji:"aijou",francais:"amour, affection",categorie:["émotions et sentiments"]},{id:8,JLPTLevel:"N3",kanji:"吅図",hiragana:"あいず",Romaji:"aizu",francais:"signal, signe",categorie:["nom"]},{id:9,JLPTLevel:"N3",kanji:"",hiragana:"アイスクリーム",Romaji:"aisukurīmu",francais:"crème glacée",categorie:["la nourriture"]},{id:10,JLPTLevel:"N3",kanji:"愛する",hiragana:"あいする",Romaji:"aisuru",francais:"aimer, être amoureux",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:11,JLPTLevel:"N1",kanji:"愛想",hiragana:"あいそう",Romaji:"aisou",francais:"amabilité",categorie:["émotions et sentiments"]},{id:12,JLPTLevel:"N4",kanji:"間",hiragana:"あいだ",Romaji:"aida",francais:"entre, parmi, pendant que",categorie:["mots de liaison et particules"]},{id:13,JLPTLevel:"N1",kanji:"間柄",hiragana:"あいだがら",Romaji:"aidagara",francais:"lien, relation avec quelqu'un",categorie:["nom"]},{id:14,JLPTLevel:"N3",kanji:"相手",hiragana:"あいて",Romaji:"aite",francais:"adversaire, opposant, compagnon",categorie:["nom"]},{id:15,JLPTLevel:"N2",kanji:"",hiragana:"アイデア・アイディア",Romaji:"aidea",francais:"idée",categorie:["nom"]},{id:16,JLPTLevel:"N3",kanji:"生憎",hiragana:"あいにく",Romaji:"ainiku",francais:"malheureusement",categorie:["expressions idiomatiques"]},{id:17,JLPTLevel:"N1",kanji:"吅間",hiragana:"あいま",Romaji:"aima",francais:"intervalle",categorie:["nom"]},{id:18,JLPTLevel:"N2",kanji:"曖昧",hiragana:"あいまい",Romaji:"aimai",francais:"ambigu, peu précis, vague",categorie:["adjectifs"]},{id:19,JLPTLevel:"N3",kanji:"",hiragana:"アイロン",Romaji:"airon",francais:"fer à repasser",categorie:["le matériel domestique"]},{id:20,JLPTLevel:"N5",kanji:"会う・遭う",hiragana:"あう",Romaji:"au",francais:"rencontrer, voir (une personne)",categorie:["verbes","verbes d’action"]},{id:21,JLPTLevel:"N4",kanji:"吅う",hiragana:"あう",Romaji:"au",francais:"convenir",categorie:["verbes","verbes d’action"]},{id:22,JLPTLevel:"N3",kanji:"",hiragana:"アウト",Romaji:"auto",francais:"dehors, à l'extérieur",categorie:["lieux et directions"]},{id:23,JLPTLevel:"N1",kanji:"敢えて",hiragana:"あえて",Romaji:"aete",francais:"défi",categorie:["nom"]},{id:24,JLPTLevel:"N5",kanji:"青",hiragana:"あお",Romaji:"ao",francais:"bleu (le), vert (le)",categorie:["les couleurs"]},{id:25,JLPTLevel:"N5",kanji:"青い・蒼い",hiragana:"あおい",Romaji:"aoi",francais:"bleu, vert, inexpérimenté",categorie:["les couleurs","adjectifs"]},{id:26,JLPTLevel:"N2",kanji:"扇ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"éventer, battre",categorie:["verbes","verbes d’action"]},{id:27,JLPTLevel:"N1",kanji:"仰ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"admirer quelqu'un, respecter, demander, boire",categorie:["verbes","verbes d’action"]},{id:28,JLPTLevel:"N2",kanji:"青白い",hiragana:"あおじろい",Romaji:"aojiroi",francais:"blême, pâle",categorie:["adjectifs"]},{id:29,JLPTLevel:"N5",kanji:"赤",hiragana:"あか",Romaji:"aka",francais:"rouge (le)",categorie:["les couleurs"]},{id:30,JLPTLevel:"N1",kanji:"垢",hiragana:"あか",Romaji:"aka",francais:"crasse, saleté",categorie:["nom"]},{id:31,JLPTLevel:"N5",kanji:"赤い",hiragana:"あかい",Romaji:"akai",francais:"rouge",categorie:["les couleurs","adjectifs"]},{id:32,JLPTLevel:"N1",kanji:"赤字",hiragana:"あかじ",Romaji:"akaji",francais:"déficit, perte (monétaire)",categorie:["nom"]},{id:33,JLPTLevel:"N1",kanji:"明かす",hiragana:"あかす",Romaji:"akasu",francais:"passer la nuit, révéler un secret",categorie:["verbes","verbes d’action"]},{id:34,JLPTLevel:"N4",kanji:"赤ちゃん",hiragana:"あかちゃん",Romaji:"akachan",francais:"bébé",categorie:["les membres de la famille"]},{id:35,JLPTLevel:"N1",kanji:"赤らむ",hiragana:"あからむ",Romaji:"akaramu",francais:"rougir (visage)",categorie:["verbes","verbes d’action"]},{id:36,JLPTLevel:"N3",kanji:"明かり",hiragana:"あかり",Romaji:"akari",francais:"clarté, lumières",categorie:["nom"]},{id:37,JLPTLevel:"N1",kanji:"上がり",hiragana:"あがり",Romaji:"agari",francais:"ascension, montée",categorie:["nom"]},{id:38,JLPTLevel:"N4",kanji:"上がる",hiragana:"あがる",Romaji:"agaru",francais:" s'élever, grimper, augmenter",categorie:["verbes","verbes d’action"]},{id:39,JLPTLevel:"N5",kanji:"明るい",hiragana:"あかるい",Romaji:"akarui",francais:"clair",categorie:["adjectifs"]},{id:40,JLPTLevel:"N4",kanji:"赤ん坊",hiragana:"あかんぼう",Romaji:"akanbou",francais:"bébé",categorie:["les membres de la famille"]},{id:41,JLPTLevel:"N5",kanji:"秋",hiragana:"あき",Romaji:"aki",francais:"automne",categorie:["temps et saisons"]},{id:42,JLPTLevel:"N3",kanji:"明き・空き",hiragana:"あき",Romaji:"aki",francais:"vide, place, espace",categorie:["nom"]},{id:43,JLPTLevel:"N3",kanji:"明らか",hiragana:"あきらか",Romaji:"akiraka",francais:"évident, clair",categorie:["adjectifs"]},{id:44,JLPTLevel:"N1",kanji:"諦め",hiragana:"あきらめ",Romaji:"akirame",francais:"résignation, acceptance",categorie:["émotions et sentiments"]},{id:45,JLPTLevel:"N3",kanji:"諦める",hiragana:"あきらめる",Romaji:"akirameru",francais:" abandonner, renoncer, laisser tomber",categorie:["verbes","verbes d’action"]},{id:46,JLPTLevel:"N3",kanji:"飽きる",hiragana:"あきる",Romaji:"akiru",francais:" s'ennuyer, se lasser",categorie:["verbes","verbes d’action"]},{id:47,JLPTLevel:"N2",kanji:"呆れる",hiragana:"あきれる",Romaji:"akireru",francais:" être stupéfait, ébahi",categorie:["verbes","verbes d’action"]},{id:48,JLPTLevel:"N5",kanji:"開く",hiragana:"あく",Romaji:"aku",francais:" s'ouvrir",categorie:["verbes","verbes d’action"]},{id:49,JLPTLevel:"N4",kanji:"空く",hiragana:"あく",Romaji:"aku",francais:" se vider, être vide, être disponible",categorie:["verbes","verbes d’action"]},{id:50,JLPTLevel:"N1",kanji:"悪",hiragana:"あく",Romaji:"aku",francais:"mal (le)",categorie:["nom"]},{id:51,JLPTLevel:"N3",kanji:"握手",hiragana:"あくしゅ",Romaji:"akushu",francais:"poignée de mains",categorie:["formules de politesse"]},{id:52,JLPTLevel:"N4",kanji:"アクセサリー",hiragana:"アクセサリー",Romaji:"akusesarī",francais:"accessoire",categorie:["les vêtements"]},{id:53,JLPTLevel:"N1",kanji:"アクセル",hiragana:"アクセル",Romaji:"akuseru",francais:"accélérateur",categorie:["les moyens de transport"]},{id:54,JLPTLevel:"N2",kanji:"",hiragana:"アクセント",Romaji:"akusento",francais:"accent",categorie:["nom"]},{id:55,JLPTLevel:"N1",kanji:"悪どい",hiragana:"あくどい",Romaji:"akudoi",francais:"tape-à-l'œil, voyant, vicieux",categorie:["adjectifs"]},{id:56,JLPTLevel:"N2",kanji:"欠伸",hiragana:"あくび",Romaji:"akubi",francais:"bâillement",categorie:["santé et bien-être"]},{id:57,JLPTLevel:"N3",kanji:"悪魔",hiragana:"あくま",Romaji:"akuma",francais:"démon, diable, mauvais esprit",categorie:["nom"]},{id:58,JLPTLevel:"N2",kanji:"飽くまで",hiragana:"あくまで",Romaji:"akumade",francais:"jusqu'au bout, obstinément",categorie:["expressions idiomatiques"]},{id:59,JLPTLevel:"N2",kanji:"明くる",hiragana:"あくる",Romaji:"akuru",francais:"prochain, suivant",categorie:["expressions temporelles"]},{id:60,JLPTLevel:"N2",kanji:"明け方",hiragana:"あけがた",Romaji:"akegata",francais:"aube",categorie:["expressions temporelles"]},{id:61,JLPTLevel:"N5",kanji:"開ける・明ける",hiragana:"あける",Romaji:"akeru",francais:"ouvrir",categorie:["verbes","verbes d’action"]},{id:62,JLPTLevel:"N3",kanji:"明ける",hiragana:"あける",Romaji:"akeru",francais:"se lever (le soleil), s'éclaircir",categorie:["verbes","verbes d’action"]},{id:63,JLPTLevel:"N5",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"donner",categorie:["verbes","verbes d’action"]},{id:64,JLPTLevel:"N4",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"augmenter",categorie:["verbes","verbes d’action"]},{id:65,JLPTLevel:"N1",kanji:"顎",hiragana:"あご",Romaji:"ago",francais:"menton",categorie:["le corps humain"]},{id:66,JLPTLevel:"N1",kanji:"憧れ",hiragana:"あこがれ",Romaji:"akogare",francais:"aspiration, désirs",categorie:["émotions et sentiments"]},{id:67,JLPTLevel:"N2",kanji:"憧れる",hiragana:"あこがれる",Romaji:"akogareru",francais:"aspirer à, languir de quelque chose",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:68,JLPTLevel:"N5",kanji:"朝",hiragana:"あさ",Romaji:"asa",francais:"matin",categorie:["expressions temporelles"]},{id:69,JLPTLevel:"N1",kanji:"麻",hiragana:"あさ",Romaji:"asa",francais:"chanvre, lin",categorie:["nom"]},{id:70,JLPTLevel:"N1",kanji:"字",hiragana:"あざ",Romaji:"aza",francais:"hameau, partie d'un village",categorie:["lieux et directions"]},{id:71,JLPTLevel:"N4",kanji:"浅い",hiragana:"あさい",Romaji:"asai",francais:"peu profond",categorie:["adjectifs"]},{id:72,JLPTLevel:"N5",kanji:"朝ご飯",hiragana:"あさごはん",Romaji:"asagohan",francais:"petit-déjeuner",categorie:["la nourriture"]},{id:73,JLPTLevel:"N5",kanji:"明後日",hiragana:"あさって",Romaji:"asatte",francais:"après-demain",categorie:["expressions temporelles"]},{id:74,JLPTLevel:"N4",kanji:"朝寝坊",hiragana:"あさねぼう",Romaji:"asanebou",francais:"lève-tard",categorie:["expressions idiomatiques"]},{id:75,JLPTLevel:"N1",kanji:"浅ましい",hiragana:"あさましい",Romaji:"asamashii",francais:"misérable, infortuné, méprisable",categorie:["adjectifs"]},{id:76,JLPTLevel:"N1",kanji:"欺く",hiragana:"あざむく",Romaji:"azamuku",francais:"tromper, duper",categorie:["verbes","verbes d’action"]},{id:77,JLPTLevel:"N1",kanji:"鮮やか",hiragana:"あざやか",Romaji:"azayaka",francais:"brillant, vif, éclatant",categorie:["adjectifs","les couleurs"]},{id:78,JLPTLevel:"N1",kanji:"あざ笑う",hiragana:"あざわらう",Romaji:"azawarau",francais:"sourire avec mépris",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:79,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"jambe",categorie:["le corps humain"]},{id:80,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"pied",categorie:["le corps humain"]},{id:81,JLPTLevel:"N4",kanji:"味",hiragana:"あじ",Romaji:"aji",francais:"goût",categorie:["la nourriture"]},{id:82,JLPTLevel:"N4",kanji:"アジア",hiragana:"アジア",Romaji:"ajia",francais:"Asie, asiatique",categorie:["les pays"]},{id:83,JLPTLevel:"N2",kanji:"足跡",hiragana:"あしあと",Romaji:"ashiato",francais:"empreinte de pied",categorie:["nom"]},{id:84,JLPTLevel:"N1",kanji:"悪しからず",hiragana:"あしからず",Romaji:"ashikarazu",francais:"désolé mais…, ne m'en veuillez pas mais…",categorie:["formules de politesse"]},{id:85,JLPTLevel:"N5",kanji:"明日",hiragana:"あした",Romaji:"ashita",francais:"demain",categorie:["expressions temporelles"]},{id:86,JLPTLevel:"N2",kanji:"足元・足下",hiragana:"あしもと",Romaji:"ashimoto",francais:"sous les pieds, allure, démarche",categorie:["nom"]},{id:87,JLPTLevel:"N1",kanji:"味わい",hiragana:"あじわい",Romaji:"ajiwai",francais:"saveur, goût",categorie:["la nourriture"]},{id:88,JLPTLevel:"N2",kanji:"味わう",hiragana:"あじわう",Romaji:"ajiau",francais:"goûter",categorie:["verbes","verbes d’action","la nourriture"]},{id:89,JLPTLevel:"N4",kanji:"明日",hiragana:"あす",Romaji:"asu",francais:"demain",categorie:["expressions temporelles"]},{id:90,JLPTLevel:"N2",kanji:"預かる",hiragana:"あずかる",Romaji:"azukaru",francais:"s'occuper de, prendre en charge",categorie:["verbes","verbes d’action"]},{id:91,JLPTLevel:"N3",kanji:"預ける",hiragana:"あずける",Romaji:"azukeru",francais:"confier à la garde de, laisser quelqu'un à la charge de",categorie:["verbes","verbes d’action"]},{id:92,JLPTLevel:"N3",kanji:"汗",hiragana:"あせ",Romaji:"ase",francais:"sueur",categorie:["santé et bien-être"]},{id:93,JLPTLevel:"N1",kanji:"焦る",hiragana:"あせる",Romaji:"aseru",francais:"être pressé, impatient",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:94,JLPTLevel:"N1",kanji:"褪せる",hiragana:"あせる",Romaji:"aseru",francais:"pâlir, se décolorer, se faner",categorie:["verbes","verbes d’action"]},{id:95,JLPTLevel:"N2",kanji:"汗を掻く",hiragana:"あせをかく",Romaji:"ase o kaku",francais:"transpirer, suer",categorie:["verbes","verbes d’action","santé et bien-être"]},{id:96,JLPTLevel:"N5",kanji:"彼処",hiragana:"あそこ",Romaji:"asoko",francais:"là-bas (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:97,JLPTLevel:"N5",kanji:"遊び",hiragana:"あそび",Romaji:"asobi",francais:"jeu",categorie:["activités et loisirs"]},{id:98,JLPTLevel:"N5",kanji:"遊ぶ",hiragana:"あそぶ",Romaji:"asobu",francais:"jouer",categorie:["verbes","verbes d’action","activités et loisirs"]},{id:99,JLPTLevel:"N2",kanji:"値",hiragana:"あたい",Romaji:"atai",francais:"coût, prix, valeur",categorie:["nom"]},{id:100,JLPTLevel:"N1",kanji:"値する",hiragana:"あたいする",Romaji:"ataisuru",francais:"mériter, être digne de",categorie:["verbes","verbes d’action"]},{id:101,JLPTLevel:"N3",kanji:"与える",hiragana:"あたえる",Romaji:"ataeru",francais:"décerner, offrir, donner",categorie:["verbes","verbes d’action"]},{id:102,JLPTLevel:"N5",kanji:"温かい・暖かい",hiragana:"あたたかい",Romaji:"atatakai",francais:"tiède, chaud",categorie:["adjectifs"]},{id:103,JLPTLevel:"N2",kanji:"温まる・暖まる",hiragana:"あたたまる",Romaji:"atatamaru",francais:"se réchauffer",categorie:["verbes","verbes d’action"]},{id:104,JLPTLevel:"N2",kanji:"温める・暖める",hiragana:"あたためる",Romaji:"atatameru",francais:"réchauffer",categorie:["verbes","verbes d’action"]},{id:105,JLPTLevel:"N5",kanji:"頭",hiragana:"あたま",Romaji:"atama",francais:"tête",categorie:["le corps humain"]},{id:106,JLPTLevel:"N5",kanji:"新しい",hiragana:"あたらしい",Romaji:"atarashii",francais:"nouveau",categorie:["adjectifs"]},{id:107,JLPTLevel:"N3",kanji:"辺り",hiragana:"あたり",Romaji:"atari",francais:"aux environs",categorie:["lieux et directions"]},{id:108,JLPTLevel:"N1",kanji:"当たり",hiragana:"あたり",Romaji:"atari",francais:"coup, réussite, succès, par… (+unité)",categorie:["nom"]},{id:109,JLPTLevel:"N2",kanji:"当たり前",hiragana:"あたりまえ",Romaji:"atarimae",francais:"évident, banal, normal",categorie:["adjectifs"]},{id:110,JLPTLevel:"N3",kanji:"当たる",hiragana:"あたる",Romaji:"ataru",francais:"entreprendre, avoir du succès, être assigné, être équivalent à",categorie:["verbes","verbes d’action"]},{id:111,JLPTLevel:"N3",kanji:"彼方・此方",hiragana:"あちこち・あちらこちら",Romaji:"achikochi・achirakochira",francais:"ici et là",categorie:["lieux et directions"]},{id:112,JLPTLevel:"N5",kanji:"彼方",hiragana:"あちら",Romaji:"achira",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:113,JLPTLevel:"N5",kanji:"暑い",hiragana:"あつい",Romaji:"atsui",francais:"chaud (temps météo.)",categorie:["adjectifs","temps et saisons"]},{id:114,JLPTLevel:"N5",kanji:"厚い",hiragana:"あつい",Romaji:"atsui",francais:"épais, lourd",categorie:["adjectifs"]},{id:115,JLPTLevel:"N1",kanji:"悪化",hiragana:"あっか",Romaji:"akka",francais:"aggravation, détérioration",categorie:["nom"]},{id:116,JLPTLevel:"N1",kanji:"扱い",hiragana:"あつかい",Romaji:"atsukai",francais:"traitement, service",categorie:["nom"]},{id:117,JLPTLevel:"N3",kanji:"扱う",hiragana:"あつかう",Romaji:"atsukau",francais:"s'occuper de, gérer, traiter",categorie:["verbes","verbes d’action"]},{id:118,JLPTLevel:"N2",kanji:"厚かましい",hiragana:"あつかましい",Romaji:"atsukamashii",francais:"effronté, insolent",categorie:["adjectifs"]},{id:119,JLPTLevel:"N1",kanji:"呆気ない",hiragana:"あっけない",Romaji:"akkenai",francais:"trop rapide, abrupt, pas assez de",categorie:["adjectifs"]},{id:120,JLPTLevel:"N1",kanji:"",hiragana:"あっさり",Romaji:"assari",francais:"facilement, simplement, rapidement",categorie:["adjectifs"]},{id:121,JLPTLevel:"N2",kanji:"圧縮",hiragana:"あっしゅく",Romaji:"asshuku",francais:"compression",categorie:["nom"]},{id:122,JLPTLevel:"N5",kanji:"彼方",hiragana:"あっち",Romaji:"acchi",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:123,JLPTLevel:"N1",kanji:"圧迫",hiragana:"あっぱく",Romaji:"appaku",francais:"pression, oppression",categorie:["nom"]},{id:124,JLPTLevel:"N1",kanji:"",hiragana:"アップ",Romaji:"appu",francais:"vers le haut",categorie:["nom"]},{id:125,JLPTLevel:"N3",kanji:"集まり",hiragana:"あつまり",Romaji:"atsumari",francais:"réunion, rassemblement",categorie:["nom"]},{id:126,JLPTLevel:"N4",kanji:"集まる",hiragana:"あつまる",Romaji:"atsumaru",francais:"se réunir",categorie:["verbes","verbes d’action"]},{id:127,JLPTLevel:"N4",kanji:"集める",hiragana:"あつめる",Romaji:"atsumeru",francais:"réunir, rassembler",categorie:["verbes","verbes d’action"]},{id:128,JLPTLevel:"N1",kanji:"誂える",hiragana:"あつらえる",Romaji:"atsuraeru",francais:"commander, donner un ordre",categorie:["verbes","verbes d’action"]},{id:129,JLPTLevel:"N1",kanji:"圧力",hiragana:"あつりょく",Romaji:"atsuryoku",francais:"pression, stress",categorie:["nom"]},{id:130,JLPTLevel:"N1",kanji:"当て",hiragana:"あて",Romaji:"ate",francais:"espoir, attente, but, objectif",categorie:["nom"]},{id:131,JLPTLevel:"N1",kanji:"宛",hiragana:"あて",Romaji:"ate",francais:"but, destination, objectif",categorie:["nom"]},{id:132,JLPTLevel:"N1",kanji:"当て字",hiragana:"あてじ",Romaji:"ateji",francais:"kanji utilisé comme équivalent phonétique",categorie:["nom"]},{id:133,JLPTLevel:"N2",kanji:"宛名",hiragana:"あてな",Romaji:"atena",francais:"adresse et nom du destinataire",categorie:["nom"]},{id:134,JLPTLevel:"N2",kanji:"当てはまる",hiragana:"あてはまる",Romaji:"atehamaru",francais:"appliquer (une règle)",categorie:["verbes","verbes d’action"]},{id:135,JLPTLevel:"N2",kanji:"編物",hiragana:"あみもの",Romaji:"amimono",francais:"tricot",categorie:["activités et loisirs"]},{id:136,JLPTLevel:"N2",kanji:"編む",hiragana:"あむ",Romaji:"amu",francais:"assembler, coudre",categorie:["verbes","verbes d’action"]},{id:137,JLPTLevel:"N5",kanji:"雤",hiragana:"あめ",Romaji:"ame",francais:"pluie",categorie:["nature et environnement"]},{id:138,JLPTLevel:"N5",kanji:"飴",hiragana:"あめ",Romaji:"ame",francais:"bonbon, sucrerie",categorie:["la nourriture"]},{id:139,JLPTLevel:"N4",kanji:"",hiragana:"アメリカ",Romaji:"amerika",francais:"Amérique",categorie:["les pays"]},{id:140,JLPTLevel:"N2",kanji:"危うい",hiragana:"あやうい",Romaji:"ayaui",francais:"dangereux, risqué",categorie:["adjectifs"]},{id:141,JLPTLevel:"N2",kanji:"怪しい",hiragana:"あやしい",Romaji:"ayashii",francais:"incertain, suspicieux, douteux, suspect",categorie:["adjectifs"]},{id:142,JLPTLevel:"N1",kanji:"操る",hiragana:"あやつる",Romaji:"ayatsuru",francais:"manipuler, opérer",categorie:["verbes","verbes d’action"]},{id:143,JLPTLevel:"N1",kanji:"危ぶむ",hiragana:"あやぶむ",Romaji:"ayabumu",francais:"avoir des craintes, des doutes",categorie:["verbes","verbes d’action"]},{id:144,JLPTLevel:"N1",kanji:"",hiragana:"あやふや",Romaji:"ayafuya",francais:"ambigu, incertain, vague",categorie:["adjectifs"]},{id:145,JLPTLevel:"N1",kanji:"過ち",hiragana:"あやまち",Romaji:"ayamachi",francais:"erreur, faute, faux pas, indiscrétion",categorie:["nom"]},{id:146,JLPTLevel:"N3",kanji:"誤り",hiragana:"あやまり",Romaji:"ayamari",francais:"erreur",categorie:["nom"]},{id:147,JLPTLevel:"N4",kanji:"謝る",hiragana:"あやまる",Romaji:"ayamaru",francais:"s'excuser",categorie:["verbes","verbes d’action","formules de politesse"]},{id:148,JLPTLevel:"N1",kanji:"歩み",hiragana:"あゆみ",Romaji:"ayumi",francais:"promenade à pied, avancée",categorie:["activités et loisirs"]},{id:149,JLPTLevel:"N1",kanji:"歩む",hiragana:"あゆむ",Romaji:"ayumu",francais:"marcher, aller à pied",categorie:["verbes","verbes d’action"]},{id:150,JLPTLevel:"N3",kanji:"粗い",hiragana:"あらい",Romaji:"arai",francais:"grossier (texture), rugueux (surface)",categorie:["adjectifs"]},{id:151,JLPTLevel:"N2",kanji:"荒い",hiragana:"あらい",Romaji:"arai",francais:"brutal, violent",categorie:["adjectifs"]},{id:152,JLPTLevel:"N5",kanji:"洗う",hiragana:"あらう",Romaji:"arau",francais:"laver",categorie:["verbes","verbes d’action"]},{id:153,JLPTLevel:"N1",kanji:"予め",hiragana:"あらかじめ",Romaji:"arakajime",francais:"à l'avance",categorie:["expressions temporelles"]},{id:154,JLPTLevel:"N3",kanji:"嵐",hiragana:"あらし",Romaji:"arashi",francais:"tempête",categorie:["nature et environnement"]},{id:155,JLPTLevel:"N1",kanji:"荒らす",hiragana:"あらす",Romaji:"arasu",francais:"dévaster, laisser en ruine, endommager",categorie:["verbes","verbes d’action"]},{id:156,JLPTLevel:"N2",kanji:"粗筊",hiragana:"あらすじ",Romaji:"arasuj",francais:"résumé, synopsis",categorie:["nom"]},{id:157,JLPTLevel:"N1",kanji:"争い",hiragana:"あらそい",Romaji:"arasoi",francais:"conflit, lutte",categorie:["nom"]},{id:158,JLPTLevel:"N2",kanji:"争う",hiragana:"あらそう",Romaji:"arasou",francais:"se disputer, s'affronter",categorie:["verbes","verbes d’action"]},{id:159,JLPTLevel:"N3",kanji:"新た",hiragana:"あらた",Romaji:"arata",francais:"nouvellement, fraîchement",categorie:["adjectifs"]},{id:160,JLPTLevel:"N1",kanji:"改まる",hiragana:"あらたまる",Romaji:"aratamaru",francais:"être renouvelé, modifié",categorie:["verbes","verbes d’action"]},{id:161,JLPTLevel:"N2",kanji:"改めて",hiragana:"あらためて",Romaji:"aratamete",francais:"à nouveau, une nouvelle fois",categorie:["expressions temporelles"]},{id:162,JLPTLevel:"N2",kanji:"改める",hiragana:"あらためる",Romaji:"aratameru",francais:"modifier, renouveler",categorie:["verbes","verbes d’action"]},{id:163,JLPTLevel:"N1",kanji:"荒っぽい",hiragana:"あらっぽい",Romaji:"arappoi",francais:"rude, rêche",categorie:["adjectifs"]},{id:164,JLPTLevel:"N1",kanji:"アラブ",hiragana:"アラブ",Romaji:"arabu",francais:"arabe",categorie:["les pays"]},{id:165,JLPTLevel:"N3",kanji:"有らゆる",hiragana:"あらゆる",Romaji:"arayuru",francais:"tous, toutes",categorie:["nom"]},{id:166,JLPTLevel:"N1",kanji:"霰",hiragana:"あられ",Romaji:"arare",francais:"grêle",categorie:["nature et environnement"]},{id:167,JLPTLevel:"N3",kanji:"表す・現す・著す",hiragana:"あらわす",Romaji:"arawasu",francais:"montrer, afficher, révéler",categorie:["verbes","verbes d’action"]},{id:168,JLPTLevel:"N3",kanji:"現れ",hiragana:"あらわれ",Romaji:"araware",francais:"manifestation, incarnation, expression",categorie:["nom"]},{id:169,JLPTLevel:"N3",kanji:"現れる・表れる・現われる",hiragana:"あらわれる",Romaji:"arawareru",francais:"apparaître, se dévoiler, s'exprimer (sentiment)",categorie:["verbes","verbes d’action"]},{id:170,JLPTLevel:"N2",kanji:"有難い",hiragana:"ありがたい",Romaji:"arigatai",francais:"reconnaissant",categorie:["émotions et sentiments"]},{id:171,JLPTLevel:"N1",kanji:"有様",hiragana:"ありさま",Romaji:"arisama",francais:"état, condition",categorie:["nom"]},{id:172,JLPTLevel:"N1",kanji:"有りのまま",hiragana:"ありのまま",Romaji:"arinomama",francais:"tel quel",categorie:["expressions idiomatiques"]},{id:173,JLPTLevel:"N1",kanji:"有り触れる",hiragana:"ありふれる",Romaji:"arifureru",francais:"être courant, fréquent",categorie:["verbes","verbes d’action"]},{id:174,JLPTLevel:"N5",kanji:"有る",hiragana:"ある",Romaji:"aru",francais:"avoir, posséder",categorie:["verbes","verbes d’action"]},{id:175,JLPTLevel:"N5",kanji:"在る",hiragana:"ある",Romaji:"aru",francais:"être, se trouver, exister",categorie:["verbes","verbes d’action"]},{id:176,JLPTLevel:"N3",kanji:"或る",hiragana:"ある",Romaji:"aru",francais:"un certain",categorie:["nom"]},{id:177,JLPTLevel:"N3",kanji:"或いは",hiragana:"あるいは",Romaji:"aruiwa",francais:"ou bien",categorie:["mots de liaison et particules"]},{id:178,JLPTLevel:"N1",kanji:"",hiragana:"アルカリ",Romaji:"arukari",francais:"alcali",categorie:["nom"]},{id:179,JLPTLevel:"N5",kanji:"歩く",hiragana:"あるく",Romaji:"aruku",francais:"marcher",categorie:["verbes","verbes d’action"]},{id:180,JLPTLevel:"N4",kanji:"",hiragana:"アルコール",Romaji:"arukōru",francais:"alcool",categorie:["la nourriture"]},{id:181,JLPTLevel:"N4",kanji:"",hiragana:"アルバイト",Romaji:"arubaito",francais:"travail à temps partiel",categorie:["vocabulaire lié au travail"]},{id:182,JLPTLevel:"N3",kanji:"",hiragana:"アルバム",Romaji:"arubamu",francais:"album",categorie:["nom"]},{id:183,JLPTLevel:"N1",kanji:"",hiragana:"アルミ",Romaji:"arumi",francais:"aluminium",categorie:["nom"]},{id:184,JLPTLevel:"N5",kanji:"彼",hiragana:"あれ",Romaji:"are",francais:"ceci (loin du locuteur et de l'interlocuteur)",categorie:["nom"]},{id:185,JLPTLevel:"N2",kanji:"彼此",hiragana:"あれこれ",Romaji:"arekore",francais:"divers, diverses choses",categorie:["nom"]},{id:186,JLPTLevel:"N2",kanji:"荒れる",hiragana:"あれる",Romaji:"areru",francais:"être orageux, perdre son sang-froid",categorie:["verbes","verbes d’action"]},{id:187,JLPTLevel:"N3",kanji:"泡",hiragana:"あわ",Romaji:"awa",francais:"mousse, bulle",categorie:["nom"]},{id:188,JLPTLevel:"N1",kanji:"",hiragana:"アワー・アウア",Romaji:"awā・aua",francais:"heure",categorie:["expressions temporelles"]},{id:189,JLPTLevel:"N1",kanji:"吅わす",hiragana:"あわす",Romaji:"awasu",francais:"comparer, combiner, ajouter, unir, faire correspondre",categorie:["verbes","verbes d’action"]},{id:190,JLPTLevel:"N3",kanji:"吅わせる",hiragana:"あわせる",Romaji:"awaseru",francais:"se connecter, se mélanger",categorie:["verbes","verbes d’action"]},{id:191,JLPTLevel:"N2",kanji:"慌しい",hiragana:"あわただしい",Romaji:"awatadashii",francais:"déconcerté, confus",categorie:["adjectifs"]},{id:192,JLPTLevel:"N2",kanji:"慌てる",hiragana:"あわてる",Romaji:"awateru",francais:"devenir confus, agité, paniquer",categorie:["verbes","verbes d’action"]},{id:193,JLPTLevel:"N3",kanji:"哀れ",hiragana:"あわれ",Romaji:"aware",francais:"pitié, compassion",categorie:["émotions et sentiments"]},{id:194,JLPTLevel:"N3",kanji:"案",hiragana:"あん",Romaji:"an",francais:"plan, idée, projet",categorie:["nom"]},{id:195,JLPTLevel:"N2",kanji:"安易",hiragana:"あんい",Romaji:"an'i",francais:"facile, simple",categorie:["adjectifs"]},{id:196,JLPTLevel:"N2",kanji:"案外",hiragana:"あんがい",Romaji:"angai",francais:"contre toute attente, inattendu",categorie:["adjectifs"]},{id:197,JLPTLevel:"N3",kanji:"暗記",hiragana:"あんき",Romaji:"anki",francais:"mémorisation, par coeur",categorie:["nom"]},{id:198,JLPTLevel:"N1",kanji:"",hiragana:"アンケート",Romaji:"ankēto",francais:"enquête",categorie:["nom"]},{id:199,JLPTLevel:"N1",kanji:"",hiragana:"アンコール",Romaji:"ankōru",francais:"encore",categorie:["nom"]},{id:200,JLPTLevel:"N1",kanji:"暗殺",hiragana:"あんさつ",Romaji:"ansatsu",francais:"assassinat",categorie:["nom"]},{id:201,JLPTLevel:"N1",kanji:"暗算",hiragana:"あんざん",Romaji:"anzan",francais:"calcul mental",categorie:["nom"]},{id:202,JLPTLevel:"N1",kanji:"暗示",hiragana:"あんじ",Romaji:"anji",francais:"indice, suggestion",categorie:["nom"]},{id:203,JLPTLevel:"N1",kanji:"案じる",hiragana:"あんじる",Romaji:"anjiru",francais:"être inquiet, réfléchir à",categorie:["verbes","verbes d’action"]},{id:204,JLPTLevel:"N4",kanji:"安心する",hiragana:"あんしんする",Romaji:"anshin suru",francais:"être tranquille",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:205,JLPTLevel:"N1",kanji:"安静",hiragana:"あんせい",Romaji:"ansei",francais:"repos",categorie:["santé et bien-être"]},{id:206,JLPTLevel:"N4",kanji:"安全",hiragana:"あんぜん",Romaji:"anzen",francais:"sûr",categorie:["adjectifs"]},{id:207,JLPTLevel:"N3",kanji:"安定",hiragana:"あんてい",Romaji:"antei",francais:"équilibre, stabilité",categorie:["nom"]},{id:208,JLPTLevel:"N2",kanji:"アンテナ",hiragana:"アンテナ",Romaji:"antena",francais:"antenne",categorie:["technologie et gadgets"]},{id:209,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"comme ça",categorie:["adjectifs"]},{id:210,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"ce genre de",categorie:["adjectifs"]},{id:211,JLPTLevel:"N4",kanji:"案内",hiragana:"あんない",Romaji:"annai",francais:"information, renseignement",categorie:["nom"]},{id:212,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:213,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:214,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:215,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:216,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:217,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:218,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:219,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:220,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:221,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:222,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:223,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:224,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:225,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:226,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:227,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:228,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:229,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:230,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:231,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:232,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:233,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:234,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:235,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:236,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:237,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:238,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:239,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:240,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:241,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:242,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:243,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:244,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:245,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:246,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:247,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:248,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:249,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:250,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:251,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:252,JLPTLevel:"N4",kanji:"以下",hiragana:"いか",Romaji:"ika",francais:"moins de, au dessous-de, sous",categorie:["nombres et quantificateurs"]},{id:253,JLPTLevel:"N4",kanji:"以外",hiragana:"いがい",Romaji:"igai",francais:"excepté",categorie:["mots de liaison et particules"]},{id:254,JLPTLevel:"N3",kanji:"意外",hiragana:"いがい",Romaji:"igai",francais:"inattendu, surprenant",categorie:["adjectifs"]},{id:255,JLPTLevel:"N4",kanji:"如何",hiragana:"いかが",Romaji:"ikaga",francais:"comment ?",categorie:["mots de liaison et particules"]},{id:256,JLPTLevel:"N4",kanji:"医学",hiragana:"いがく",Romaji:"igaku",francais:"médecine",categorie:["santé et bien-être"]},{id:257,JLPTLevel:"N1",kanji:"生かす",hiragana:"いかす",Romaji:"ikasu",francais:"ranimer, ressusciter",categorie:["verbes","verbes d’action"]},{id:258,JLPTLevel:"N1",kanji:"如何に",hiragana:"いかに",Romaji:"ikani",francais:"pourquoi ?, comment ?",categorie:["mots de liaison et particules"]},{id:259,JLPTLevel:"N1",kanji:"如何にも",hiragana:"いかにも",Romaji:"ikanimo",francais:"certainement !, en effet !, parfaitement !",categorie:["expressions idiomatiques"]},{id:260,JLPTLevel:"N1",kanji:"怒り",hiragana:"いかり",Romaji:"ikari",francais:"colère, emportement, fureur, rage",categorie:["émotions et sentiments"]},{id:261,JLPTLevel:"N3",kanji:"息",hiragana:"いき",Romaji:"iki",francais:"souffle, respiration",categorie:["le corps humain"]},{id:262,JLPTLevel:"N1",kanji:"粋",hiragana:"いき",Romaji:"iki",francais:"élégant, coquet, chic",categorie:["adjectifs"]},{id:263,JLPTLevel:"N2",kanji:"意義",hiragana:"いぎ",Romaji:"igi",francais:"moral",categorie:["nom"]},{id:264,JLPTLevel:"N1",kanji:"異議",hiragana:"いぎ",Romaji:"igi",francais:"objection, protestation",categorie:["nom"]},{id:265,JLPTLevel:"N3",kanji:"行き",hiragana:"いき・ゆき",Romaji:"iki, yuki",francais:"déplacement, aller simple",categorie:["nom"]},{id:266,JLPTLevel:"N2",kanji:"生き生き",hiragana:"いきいき",Romaji:"ikiiki",francais:"plein d'entrain, animé, de façon très vivante",categorie:["adjectifs"]},{id:267,JLPTLevel:"N3",kanji:"勢い",hiragana:"いきおい",Romaji:"ikioi",francais:"entrain, vigueur, force",categorie:["nom"]},{id:268,JLPTLevel:"N1",kanji:"生き甲斐",hiragana:"いきがい",Romaji:"ikigai",francais:"raison de vivre",categorie:["nom"]},{id:269,JLPTLevel:"N1",kanji:"意気込む",hiragana:"いきごむ",Romaji:"ikigomu",francais:"être enthousiaste à propos de quelque chose",categorie:["verbes","verbes d’action"]},{id:270,JLPTLevel:"N1",kanji:"行き違い",hiragana:"いきちがい",Romaji:"ikichigai",francais:"désaccord, malentendu",categorie:["nom"]},{id:271,JLPTLevel:"N2",kanji:"行成",hiragana:"いきなり",Romaji:"ikinari",francais:"brusquement, soudainement",categorie:["adverbes"]},{id:272,JLPTLevel:"N3",kanji:"生き物",hiragana:"いきもの",Romaji:"ikimono",francais:"être vivant, animal",categorie:["nom"]},{id:273,JLPTLevel:"N4",kanji:"生きる",hiragana:"いきる",Romaji:"ikiru",francais:"vivre, exister",categorie:["verbes","verbes d’action"]},{id:274,JLPTLevel:"N2",kanji:"幾",hiragana:"いく",Romaji:"iku",francais:"plusieurs, quelques",categorie:["adjectifs"]},{id:275,JLPTLevel:"N5",kanji:"行く",hiragana:"いく・ゆく",Romaji:"iku, yuku",francais:"aller",categorie:["verbes","verbes d’action"]},{id:276,JLPTLevel:"N2",kanji:"育児する",hiragana:"いくじする",Romaji:"ikuji suru",francais:"élever des enfants, s'occuper d'enfants",categorie:["verbes","verbes d’action"]},{id:277,JLPTLevel:"N1",kanji:"育成",hiragana:"いくせい",Romaji:"ikusei",francais:"élevage, culture",categorie:["nom"]},{id:278,JLPTLevel:"N1",kanji:"幾多",hiragana:"いくた",Romaji:"ikuta",francais:"beaucoup, de nombreux",categorie:["adjectifs"]},{id:279,JLPTLevel:"N5",kanji:"幾つ",hiragana:"いくつ",Romaji:"ikutsu",francais:"combien ? (quantité)",categorie:["adjectifs"]},{id:280,JLPTLevel:"N2",kanji:"幾分",hiragana:"いくぶん",Romaji:"ikubun",francais:"un peu, une partie",categorie:["adjectifs"]},{id:281,JLPTLevel:"N5",kanji:"幾ら",hiragana:"いくら",Romaji:"ikura",francais:"combien ? (prix)",categorie:["adjectifs"]},{id:282,JLPTLevel:"N5",kanji:"池",hiragana:"いけ",Romaji:"ike",francais:"étang",categorie:["nature et environnement"]},{id:283,JLPTLevel:"N3",kanji:"行けない",hiragana:"いけない",Romaji:"ikenai",francais:"ne doit pas faire, sans espoir, pas bon",categorie:["adjectifs"]},{id:284,JLPTLevel:"N2",kanji:"生花",hiragana:"いけばな",Romaji:"ikebana",francais:"ikebana, arrangement floral",categorie:["activités et loisirs"]},{id:285,JLPTLevel:"N1",kanji:"生ける",hiragana:"いける",Romaji:"ikeru",francais:"disposer (des fleurs)",categorie:["verbes","verbes d’action"]},{id:286,JLPTLevel:"N4",kanji:"意見",hiragana:"いけん",Romaji:"iken",francais:"opinion, avis",categorie:["nom"]},{id:287,JLPTLevel:"N1",kanji:"異見",hiragana:"いけん",Romaji:"iken",francais:"contradiction, opinion différente, objection",categorie:["nom"]},{id:288,JLPTLevel:"N2",kanji:"以後",hiragana:"いご",Romaji:"igo",francais:"après quoi, dorénavant",categorie:["expressions temporelles"]},{id:289,JLPTLevel:"N2",kanji:"以降",hiragana:"いこう",Romaji:"ikou",francais:"désormais, dorénavant, à l'avenir",categorie:["expressions temporelles"]},{id:290,JLPTLevel:"N1",kanji:"意向",hiragana:"いこう",Romaji:"ikou",francais:"idée, intention",categorie:["nom"]},{id:291,JLPTLevel:"N1",kanji:"移行",hiragana:"いこう",Romaji:"ikou",francais:"migration, passage d'un état à un autre",categorie:["nom"]},{id:292,JLPTLevel:"N2",kanji:"",hiragana:"イコール",Romaji:"ikōru",francais:"égal à",categorie:["nom"]},{id:293,JLPTLevel:"N1",kanji:"",hiragana:"いざ",Romaji:"iza",francais:"bien, maintenant",categorie:["adverbes"]},{id:294,JLPTLevel:"N2",kanji:"勇ましい",hiragana:"いさましい",Romaji:"isamashii",francais:"courageux",categorie:["adjectifs"]},{id:295,JLPTLevel:"N5",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"pierre, roc",categorie:["nature et environnement"]},{id:296,JLPTLevel:"N3",kanji:"医師",hiragana:"いし",Romaji:"ishi",francais:"médecin",categorie:["santé et bien-être"]},{id:297,JLPTLevel:"N3",kanji:"意志",hiragana:"いし",Romaji:"ishi",francais:"volonté",categorie:["émotions et sentiments"]},{id:298,JLPTLevel:"N3",kanji:"意思",hiragana:"いし",Romaji:"ishi",francais:"intention, but",categorie:["émotions et sentiments"]},{id:299,JLPTLevel:"N3",kanji:"維持",hiragana:"いじ",Romaji:"iji",francais:"conservation, entretien",categorie:["nom"]},{id:300,JLPTLevel:"N1",kanji:"意地",hiragana:"いじ",Romaji:"iji",francais:"obstination, volonté",categorie:["émotions et sentiments"]},{id:301,JLPTLevel:"N3",kanji:"意識",hiragana:"いしき",Romaji:"ishiki",francais:"conscience",categorie:["nom"]},{id:302,JLPTLevel:"N2",kanji:"意識する",hiragana:"いしきする",Romaji:"ishiki suru",francais:"avoir conscience",categorie:["verbes","verbes d’action"]},{id:303,JLPTLevel:"N4",kanji:"苛める",hiragana:"いじめる",Romaji:"ijimeru",francais:"embêter",categorie:["verbes","verbes d’action"]},{id:304,JLPTLevel:"N5",kanji:"医者",hiragana:"いしゃ",Romaji:"isha",francais:"docteur, médecin",categorie:["nom"]},{id:305,JLPTLevel:"N1",kanji:"移住",hiragana:"いじゅう",Romaji:"ijuu",francais:"migration, immigration",categorie:["nom"]},{id:306,JLPTLevel:"N1",kanji:"移住する",hiragana:"いじゅうする",Romaji:"ijuu suru",francais:"migrer, immigrer",categorie:["verbes"]},{id:307,JLPTLevel:"N1",kanji:"衣装",hiragana:"いしょう",Romaji:"ishou",francais:"vêtement, costume",categorie:["nom"]},{id:308,JLPTLevel:"N4",kanji:"以上",hiragana:"いじょう",Romaji:"ijou",francais:"plus de, au-dessus-de, davantage",categorie:["adjectifs"]},{id:309,JLPTLevel:"N3",kanji:"異常",hiragana:"いじょう",Romaji:"ijou",francais:"étrange, anormal",categorie:["adjectifs"]},{id:310,JLPTLevel:"N2",kanji:"衣食住",hiragana:"いしょくじゅう",Romaji:"ishokujyuu",francais:"nécessités de la vie (des vêtements, de la nourriture et un abri)",categorie:["nom"]},{id:311,JLPTLevel:"N1",kanji:"弄る",hiragana:"いじる",Romaji:"ijiru",francais:"manier, toucher, trifouiller",categorie:["verbes"]},{id:312,JLPTLevel:"N2",kanji:"意地悪",hiragana:"いじわる",Romaji:"ijiwaru",francais:"malicieux, désobligeant",categorie:["adjectifs"]},{id:313,JLPTLevel:"N5",kanji:"椅子",hiragana:"いす",Romaji:"isu",francais:"chaise",categorie:["nom"]},{id:314,JLPTLevel:"N3",kanji:"泉",hiragana:"いずみ",Romaji:"izumi",francais:"fontaine, source",categorie:["nom"]},{id:315,JLPTLevel:"N3",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"où ?, qui ?, quoi ?",categorie:["adjectifs"]},{id:316,JLPTLevel:"N2",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"un autre jour, une autre fois",categorie:["adjectifs"]},{id:317,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"sexe opposé",categorie:["nom"]},{id:318,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"de sexe opposé",categorie:["nom"]},{id:319,JLPTLevel:"N1",kanji:"遺跡",hiragana:"いせき",Romaji:"iseki",francais:"ruine, vestige",categorie:["nom"]},{id:320,JLPTLevel:"N3",kanji:"以前",hiragana:"いぜん",Romaji:"izen",francais:"auparavant, autrefois",categorie:["adjectifs"]},{id:321,JLPTLevel:"N1",kanji:"依然",hiragana:"いぜん",Romaji:"izen",francais:"comme toujours, comme jusqu'à présent",categorie:["adjectifs"]},{id:322,JLPTLevel:"N5",kanji:"忙しい",hiragana:"いそがしい",Romaji:"isogashii",francais:"occupé",categorie:["adjectifs"]},{id:323,JLPTLevel:"N4",kanji:"急ぐ",hiragana:"いそぐ",Romaji:"isogu",francais:"se dépêcher",categorie:["verbes"]},{id:324,JLPTLevel:"N1",kanji:"依存",hiragana:"いぞん",Romaji:"izon",francais:"dépendance",categorie:["nom"]},{id:325,JLPTLevel:"N3",kanji:"板",hiragana:"いた",Romaji:"ita",francais:"planche, plaque",categorie:["nom"]},{id:326,JLPTLevel:"N5",kanji:"痛い",hiragana:"いたい",Romaji:"itai",francais:"douloureux",categorie:["adjectifs"]},{id:327,JLPTLevel:"N3",kanji:"偉大",hiragana:"いだい",Romaji:"idai",francais:"grandiose",categorie:["adjectifs"]},{id:328,JLPTLevel:"N1",kanji:"委託",hiragana:"いたく",Romaji:"itaku",francais:"consignation, le fait de confier quelque chose",categorie:["nom"]},{id:329,JLPTLevel:"N1",kanji:"委託する",hiragana:"いたくする",Romaji:"itaku suru",francais:"consigner, confier",categorie:["verbes"]},{id:330,JLPTLevel:"N4",kanji:"致す",hiragana:"いたす",Romaji:"itasu",francais:"faire (hum)",categorie:["verbes"]},{id:331,JLPTLevel:"N3",kanji:"悪戯",hiragana:"いたずら",Romaji:"itazura",francais:"mauvaise blague, sale tour",categorie:["nom"]},{id:332,JLPTLevel:"N1",kanji:"頂",hiragana:"いただき",Romaji:"itadaki",francais:"cime, sommet, pointe",categorie:["nom"]},{id:333,JLPTLevel:"N5",kanji:"戴きます",hiragana:"いただきます",Romaji:"itadakimasu",francais:"merci pour ce repas (expression de gratitude)",categorie:["expression"]},{id:334,JLPTLevel:"N4",kanji:"戴く",hiragana:"いただく",Romaji:"itadaku",francais:"recevoir (hum), manger ou boire",categorie:["verbes"]},{id:335,JLPTLevel:"N1",kanji:"至って",hiragana:"いたって",Romaji:"itatte",francais:"extrêmement, énormément",categorie:["adverbes"]},{id:336,JLPTLevel:"N3",kanji:"痛み",hiragana:"いたみ",Romaji:"itami",francais:"douleur",categorie:["nom"]},{id:337,JLPTLevel:"N2",kanji:"痛む",hiragana:"いたむ",Romaji:"itamuu",francais:"être blessé, subir une douleur",categorie:["verbes"]},{id:338,JLPTLevel:"N1",kanji:"痛める",hiragana:"いためる",Romaji:"itameru",francais:"se faire mal",categorie:["verbes"]},{id:339,JLPTLevel:"N1",kanji:"炒める",hiragana:"いためる",Romaji:"itameru",francais:"faire revenir (cuisine), cuisiner, faire frire",categorie:["verbes"]},{id:340,JLPTLevel:"N3",kanji:"至る",hiragana:"いたる",Romaji:"itaru",francais:"arriver à, mener à, conduire à",categorie:["verbes"]},{id:341,JLPTLevel:"N1",kanji:"労る",hiragana:"いたわる",Romaji:"itawaru",francais:"être plein d'attention pour, consoler, compatir",categorie:["verbes"]},{id:342,JLPTLevel:"N5",kanji:"一",hiragana:"いち",Romaji:"ichi",francais:"un",categorie:["nombres et quantificateurs"]},{id:343,JLPTLevel:"N3",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"foire, marché",categorie:["nom"]},{id:344,JLPTLevel:"N2",kanji:"位置",hiragana:"いち",Romaji:"ichi",francais:"place, position",categorie:["nom"]},{id:345,JLPTLevel:"N2",kanji:"一々",hiragana:"いちいち",Romaji:"ichiichi",francais:"un par un, séparément",categorie:["adverbes","nombres et quantificateurs"]}],Mi={vocabulaire:c2},s2={color:"#F75D48"},u2={mode:"light",fontColor:"#353535",bgColor:"#353535",mainBgColor:"#F7F7F2"},d2={searchText:"",jlptLevel:"",kanaType:"",vocabulaireCategorie:[]},g2={exerciceModeDeJeu:"",exerciceDifficulté:"",exerciceNumber:0,exerciceResult:[],exerciceTimer:5,exerciceTimerActive:!1,exerciceTypeDeKana:"normal"},f2={totalTimer:0,totalfaute:0,totalreussite:0,questionsIncorrectes:[]},p2={kanji:So.kanji.length,vocabulaire:Mi.vocabulaire.length},m2={kanji:[],vocabulaire:[],hiragana:[],katakana:[],nombre:[]},Mp=Fi({name:"color",initialState:s2,reducers:{setColor:(e,n)=>{e.color=n.payload}}}),Ep=Fi({name:"mode",initialState:u2,reducers:{setMode:(e,n)=>{e.mode=n.payload,n.payload==="light"?(e.fontColor="#353535",e.bgColor="#353535",e.mainBgColor="#F7F7F2"):(e.fontColor="#F7F7F2",e.bgColor="#F7F7F2",e.mainBgColor="#353535")}}}),Hp=Fi({name:"search",initialState:d2,reducers:{setSearchText:(e,n)=>{e.searchText=n.payload},setJlptLevel:(e,n)=>{e.jlptLevel=n.payload},setkanaType:(e,n)=>{e.kanaType=n.payload},setVocabulaireCategorie:(e,n)=>{e.vocabulaireCategorie=n.payload}}}),Jp=Fi({name:"parametersExercice",initialState:g2,reducers:{setExerciceModeDeJeu:(e,n)=>{e.exerciceModeDeJeu=n.payload},setExerciceDifficulté:(e,n)=>{e.exerciceDifficulté=n.payload},setExerciceNumber:(e,n)=>{e.exerciceNumber=n.payload},setExerciceResult:(e,n)=>{e.exerciceResult=n.payload},setExerciceTimer:(e,n)=>{e.exerciceTimer=n.payload},setExerciceTimerActive:(e,n)=>{e.exerciceTimerActive=n.payload},setExerciceTypeDeKana:(e,n)=>{e.exerciceTypeDeKana=n.payload}}}),Dp=Fi({name:"exercice",initialState:f2,reducers:{setTotalTimer:(e,n)=>{e.totalTimer=n.payload},setTotalfaute:(e,n)=>{e.totalfaute=n.payload},setTotalreussite:(e,n)=>{e.totalreussite=n.payload},addQuestionIncorrecte:(e,n)=>{e.questionsIncorrectes.push(n.payload)},resetQuestionsIncorrectes:e=>{e.questionsIncorrectes=[]}}}),_p=Fi({name:"totalData",initialState:p2,reducers:{setTotalData:(e,n)=>{e.kanji=n.payload.kanji,e.vocabulaire=n.payload.vocabulaire}}}),Fp=Fi({name:"dataChoice",initialState:m2,reducers:{toggleKanji:(e,n)=>{const i=n.payload,a=e.kanji.findIndex(t=>t.id===i.id);a>=0?e.kanji.splice(a,1):e.kanji.push(i)},toggleVocabulaire:(e,n)=>{const i=n.payload,a=e.vocabulaire.findIndex(t=>t.id===i.id);a>=0?e.vocabulaire.splice(a,1):e.vocabulaire.push(i)},toggleKatakana:(e,n)=>{const i=n.payload,a=e.katakana.findIndex(t=>t.id===i.id);a>=0?e.katakana.splice(a,1):e.katakana.push(i)},toggleNombre:(e,n)=>{const i=n.payload,a=e.nombre.findIndex(t=>t.id===i.id);a>=0?e.nombre.splice(a,1):e.nombre.push(i)},toggleHiragana:(e,n)=>{const i=n.payload,a=e.hiragana.findIndex(t=>t.id===i.id);a>=0?e.hiragana.splice(a,1):e.hiragana.push(i)},resetKanji:e=>{e.kanji=[]},resetVocabulaire:e=>{e.vocabulaire=[]},resetKatakana:e=>{e.katakana=[]},resetNombre:e=>{e.nombre=[]},resetHiragana:e=>{e.hiragana=[]}}}),{setColor:h2}=Mp.actions,{setMode:v2}=Ep.actions,{setSearchText:Hs,setJlptLevel:R2,setkanaType:Js,setVocabulaireCategorie:j2}=Hp.actions,{setExerciceModeDeJeu:Pd,setExerciceDifficulté:y2,setExerciceNumber:k2,setExerciceResult:zw,setExerciceTimer:w2,setExerciceTimerActive:P2,setExerciceTypeDeKana:zp}=Jp.actions,{setTotalTimer:xd,setTotalfaute:or,setTotalreussite:lr,addQuestionIncorrecte:x2,resetQuestionsIncorrectes:C2}=Dp.actions;_p.actions;const{toggleKanji:L2,toggleVocabulaire:K2,toggleKatakana:T2,toggleNombre:Aw,toggleHiragana:b2,resetKanji:$2,resetVocabulaire:O2,resetKatakana:N2,resetNombre:S2,resetHiragana:M2}=Fp.actions,E2=q1({reducer:{color:Mp.reducer,mode:Ep.reducer,search:Hp.reducer,parametersExercice:Jp.reducer,exercice:Dp.reducer,totalData:_p.reducer,dataChoice:Fp.reducer}});var Fe=function(){return Fe=Object.assign||function(n){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},Fe.apply(this,arguments)};function lo(e,n,i){if(i||arguments.length===2)for(var a=0,t=n.length,r;a<t;a++)(r||!(a in n))&&(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}var ae="-ms-",ot="-moz-",U="-webkit-",Ap="comm",Mo="rule",Ds="decl",H2="@import",Bp="@keyframes",J2="@layer",Ip=Math.abs,_s=String.fromCharCode,Kc=Object.assign;function D2(e,n){return ye(e,0)^45?(((n<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function Vp(e){return e.trim()}function Nn(e,n){return(e=n.exec(e))?e[0]:e}function B(e,n,i){return e.replace(n,i)}function xr(e,n,i){return e.indexOf(n,i)}function ye(e,n){return e.charCodeAt(n)|0}function va(e,n,i){return e.slice(n,i)}function Cn(e){return e.length}function Wp(e){return e.length}function qa(e,n){return n.push(e),e}function _2(e,n){return e.map(n).join("")}function Cd(e,n){return e.filter(function(i){return!Nn(i,n)})}var Eo=1,Ra=1,Up=0,sn=0,pe=0,La="";function Ho(e,n,i,a,t,r,o,c){return{value:e,root:n,parent:i,type:a,props:t,children:r,line:Eo,column:Ra,length:o,return:"",siblings:c}}function Vn(e,n){return Kc(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ai(e){for(;e.root;)e=Vn(e.root,{children:[e]});qa(e,e.siblings)}function F2(){return pe}function z2(){return pe=sn>0?ye(La,--sn):0,Ra--,pe===10&&(Ra=1,Eo--),pe}function jn(){return pe=sn<Up?ye(La,sn++):0,Ra++,pe===10&&(Ra=1,Eo++),pe}function xi(){return ye(La,sn)}function Cr(){return sn}function Jo(e,n){return va(La,e,n)}function Tc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A2(e){return Eo=Ra=1,Up=Cn(La=e),sn=0,[]}function B2(e){return La="",e}function hl(e){return Vp(Jo(sn-1,bc(e===91?e+2:e===40?e+1:e)))}function I2(e){for(;(pe=xi())&&pe<33;)jn();return Tc(e)>2||Tc(pe)>3?"":" "}function V2(e,n){for(;--n&&jn()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return Jo(e,Cr()+(n<6&&xi()==32&&jn()==32))}function bc(e){for(;jn();)switch(pe){case e:return sn;case 34:case 39:e!==34&&e!==39&&bc(pe);break;case 40:e===41&&bc(e);break;case 92:jn();break}return sn}function W2(e,n){for(;jn()&&e+pe!==57;)if(e+pe===84&&xi()===47)break;return"/*"+Jo(n,sn-1)+"*"+_s(e===47?e:jn())}function U2(e){for(;!Tc(xi());)jn();return Jo(e,sn)}function Q2(e){return B2(Lr("",null,null,null,[""],e=A2(e),0,[0],e))}function Lr(e,n,i,a,t,r,o,c,s){for(var u=0,d=0,f=o,g=0,v=0,R=0,k=1,w=1,h=1,p=0,m="",j=t,P=r,L=a,C=m;w;)switch(R=p,p=jn()){case 40:if(R!=108&&ye(C,f-1)==58){xr(C+=B(hl(p),"&","&\f"),"&\f",Ip(u?c[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=hl(p);break;case 9:case 10:case 13:case 32:C+=I2(R);break;case 92:C+=V2(Cr()-1,7);continue;case 47:switch(xi()){case 42:case 47:qa(q2(W2(jn(),Cr()),n,i,s),s);break;default:C+="/"}break;case 123*k:c[u++]=Cn(C)*h;case 125*k:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+d:h==-1&&(C=B(C,/\f/g,"")),v>0&&Cn(C)-f&&qa(v>32?Kd(C+";",a,i,f-1,s):Kd(B(C," ","")+";",a,i,f-2,s),s);break;case 59:C+=";";default:if(qa(L=Ld(C,n,i,u,d,t,c,m,j=[],P=[],f,r),r),p===123)if(d===0)Lr(C,n,L,L,j,r,f,c,P);else switch(g===99&&ye(C,3)===110?100:g){case 100:case 108:case 109:case 115:Lr(e,L,L,a&&qa(Ld(e,L,L,0,0,t,c,m,t,j=[],f,P),P),t,P,f,c,a?j:P);break;default:Lr(C,L,L,L,[""],P,0,c,P)}}u=d=v=0,k=h=1,m=C="",f=o;break;case 58:f=1+Cn(C),v=R;default:if(k<1){if(p==123)--k;else if(p==125&&k++==0&&z2()==125)continue}switch(C+=_s(p),p*k){case 38:h=d>0?1:(C+="\f",-1);break;case 44:c[u++]=(Cn(C)-1)*h,h=1;break;case 64:xi()===45&&(C+=hl(jn())),g=xi(),d=f=Cn(m=C+=U2(Cr())),p++;break;case 45:R===45&&Cn(C)==2&&(k=0)}}return r}function Ld(e,n,i,a,t,r,o,c,s,u,d,f){for(var g=t-1,v=t===0?r:[""],R=Wp(v),k=0,w=0,h=0;k<a;++k)for(var p=0,m=va(e,g+1,g=Ip(w=o[k])),j=e;p<R;++p)(j=Vp(w>0?v[p]+" "+m:B(m,/&\f/g,v[p])))&&(s[h++]=j);return Ho(e,n,i,t===0?Mo:c,s,u,d,f)}function q2(e,n,i,a){return Ho(e,n,i,Ap,_s(F2()),va(e,2,-2),0,a)}function Kd(e,n,i,a,t){return Ho(e,n,i,Ds,va(e,0,a),va(e,a+1,-1),a,t)}function Qp(e,n,i){switch(D2(e,n)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return ot+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+ot+e+ae+e+e;case 5936:switch(ye(e,n+11)){case 114:return U+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+ae+e+e;case 6165:return U+e+ae+"flex-"+e+e;case 5187:return U+e+B(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return U+e+ae+"flex-item-"+B(e,/flex-|-self/g,"")+(Nn(e,/flex-|baseline/)?"":ae+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return U+e+ae+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+ae+B(e,"shrink","negative")+e;case 5292:return U+e+ae+B(e,"basis","preferred-size")+e;case 6060:return U+"box-"+B(e,"-grow","")+U+e+ae+B(e,"grow","positive")+e;case 4554:return U+B(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Nn(e,/flex-|baseline/))return ae+"grid-column-align"+va(e,n)+e;break;case 2592:case 3360:return ae+B(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,t){return n=t,Nn(a.props,/grid-\w+-end/)})?~xr(e+(i=i[n].value),"span",0)?e:ae+B(e,"-start","")+e+ae+"grid-row-span:"+(~xr(i,"span",0)?Nn(i,/\d+/):+Nn(i,/\d+/)-+Nn(e,/\d+/))+";":ae+B(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Nn(a.props,/grid-\w+-start/)})?e:ae+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-n>6)switch(ye(e,n+1)){case 109:if(ye(e,n+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+ot+(ye(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~xr(e,"stretch",0)?Qp(B(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,t,r,o,c,s,u){return ae+t+":"+r+u+(o?ae+t+"-span:"+(c?s:+s-+r)+u:"")+e});case 4949:if(ye(e,n+6)===121)return B(e,":",":"+U)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ye(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+ae+"$2box$3")+e;case 100:return B(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function co(e,n){for(var i="",a=0;a<e.length;a++)i+=n(e[a],a,e,n)||"";return i}function Z2(e,n,i,a){switch(e.type){case J2:if(e.children.length)break;case H2:case Ds:return e.return=e.return||e.value;case Ap:return"";case Bp:return e.return=e.value+"{"+co(e.children,a)+"}";case Mo:if(!Cn(e.value=e.props.join(",")))return""}return Cn(i=co(e.children,a))?e.return=e.value+"{"+i+"}":""}function Y2(e){var n=Wp(e);return function(i,a,t,r){for(var o="",c=0;c<n;c++)o+=e[c](i,a,t,r)||"";return o}}function G2(e){return function(n){n.root||(n=n.return)&&e(n)}}function X2(e,n,i,a){if(e.length>-1&&!e.return)switch(e.type){case Ds:e.return=Qp(e.value,e.length,i);return;case Bp:return co([Vn(e,{value:B(e.value,"@","@"+U)})],a);case Mo:if(e.length)return _2(i=e.props,function(t){switch(Nn(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(Vn(e,{props:[B(t,/:(read-\w+)/,":"+ot+"$1")]})),Ai(Vn(e,{props:[t]})),Kc(e,{props:Cd(i,a)});break;case"::placeholder":Ai(Vn(e,{props:[B(t,/:(plac\w+)/,":"+U+"input-$1")]})),Ai(Vn(e,{props:[B(t,/:(plac\w+)/,":"+ot+"$1")]})),Ai(Vn(e,{props:[B(t,/:(plac\w+)/,ae+"input-$1")]})),Ai(Vn(e,{props:[t]})),Kc(e,{props:Cd(i,a)});break}return""})}}var eR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We={},ja=typeof process<"u"&&We!==void 0&&(We.REACT_APP_SC_ATTR||We.SC_ATTR)||"data-styled",qp="active",Zp="data-styled-version",Do="6.1.12",Fs=`/*!sc*/
`,so=typeof window<"u"&&"HTMLElement"in window,nR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==""?We.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&We.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.SC_DISABLE_SPEEDY!==void 0&&We.SC_DISABLE_SPEEDY!==""&&We.SC_DISABLE_SPEEDY!=="false"&&We.SC_DISABLE_SPEEDY),_o=Object.freeze([]),ya=Object.freeze({});function iR(e,n,i){return i===void 0&&(i=ya),e.theme!==i.theme&&e.theme||n||i.theme}var Yp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),aR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tR=/(^-|-$)/g;function Td(e){return e.replace(aR,"-").replace(tR,"")}var rR=/(a)(d)/gi,cr=52,bd=function(e){return String.fromCharCode(e+(e>25?39:97))};function $c(e){var n,i="";for(n=Math.abs(e);n>cr;n=n/cr|0)i=bd(n%cr)+i;return(bd(n%cr)+i).replace(rR,"$1-$2")}var vl,Gp=5381,ia=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},Xp=function(e){return ia(Gp,e)};function oR(e){return $c(Xp(e)>>>0)}function lR(e){return e.displayName||e.name||"Component"}function Rl(e){return typeof e=="string"&&!0}var em=typeof Symbol=="function"&&Symbol.for,nm=em?Symbol.for("react.memo"):60115,cR=em?Symbol.for("react.forward_ref"):60112,sR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},im={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dR=((vl={})[cR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vl[nm]=im,vl);function $d(e){return("type"in(n=e)&&n.type.$$typeof)===nm?im:"$$typeof"in e?dR[e.$$typeof]:sR;var n}var gR=Object.defineProperty,fR=Object.getOwnPropertyNames,Od=Object.getOwnPropertySymbols,pR=Object.getOwnPropertyDescriptor,mR=Object.getPrototypeOf,Nd=Object.prototype;function am(e,n,i){if(typeof n!="string"){if(Nd){var a=mR(n);a&&a!==Nd&&am(e,a,i)}var t=fR(n);Od&&(t=t.concat(Od(n)));for(var r=$d(e),o=$d(n),c=0;c<t.length;++c){var s=t[c];if(!(s in uR||i&&i[s]||o&&s in o||r&&s in r)){var u=pR(n,s);try{gR(e,s,u)}catch{}}}}return e}function ka(e){return typeof e=="function"}function zs(e){return typeof e=="object"&&"styledComponentId"in e}function ki(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Sd(e,n){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Tt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Oc(e,n,i){if(i===void 0&&(i=!1),!i&&!Tt(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)e[a]=Oc(e[a],n[a]);else if(Tt(n))for(var a in n)e[a]=Oc(e[a],n[a]);return e}function As(e,n){Object.defineProperty(e,"toString",{value:n})}function Ht(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var hR=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,a=0;a<n;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var a=this.groupSizes,t=a.length,r=t;n>=r;)if((r<<=1)<0)throw Ht(16,"".concat(n));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var o=t;o<r;o++)this.groupSizes[o]=0}for(var c=this.indexOfGroup(n+1),s=(o=0,i.length);o<s;o++)this.tag.insertRule(c,i[o])&&(this.groupSizes[n]++,c++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],a=this.indexOfGroup(n),t=a+i;this.groupSizes[n]=0;for(var r=a;r<t;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var a=this.groupSizes[n],t=this.indexOfGroup(n),r=t+a,o=t;o<r;o++)i+="".concat(this.tag.getRule(o)).concat(Fs);return i},e}(),Kr=new Map,uo=new Map,Tr=1,sr=function(e){if(Kr.has(e))return Kr.get(e);for(;uo.has(Tr);)Tr++;var n=Tr++;return Kr.set(e,n),uo.set(n,e),n},vR=function(e,n){Tr=n+1,Kr.set(e,n),uo.set(n,e)},RR="style[".concat(ja,"][").concat(Zp,'="').concat(Do,'"]'),jR=new RegExp("^".concat(ja,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yR=function(e,n,i){for(var a,t=i.split(","),r=0,o=t.length;r<o;r++)(a=t[r])&&e.registerName(n,a)},kR=function(e,n){for(var i,a=((i=n.textContent)!==null&&i!==void 0?i:"").split(Fs),t=[],r=0,o=a.length;r<o;r++){var c=a[r].trim();if(c){var s=c.match(jR);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(vR(d,u),yR(e,d,s[3]),e.getTag().insertRules(u,t)),t.length=0}else t.push(c)}}},Md=function(e){for(var n=document.querySelectorAll(RR),i=0,a=n.length;i<a;i++){var t=n[i];t&&t.getAttribute(ja)!==qp&&(kR(e,t),t.parentNode&&t.parentNode.removeChild(t))}};function wR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tm=function(e){var n=document.head,i=e||n,a=document.createElement("style"),t=function(c){var s=Array.from(c.querySelectorAll("style[".concat(ja,"]")));return s[s.length-1]}(i),r=t!==void 0?t.nextSibling:null;a.setAttribute(ja,qp),a.setAttribute(Zp,Do);var o=wR();return o&&a.setAttribute("nonce",o),i.insertBefore(a,r),a},PR=function(){function e(n){this.element=tm(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,t=0,r=a.length;t<r;t++){var o=a[t];if(o.ownerNode===i)return o}throw Ht(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),xR=function(){function e(n){this.element=tm(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),CR=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ed=so,LR={isServer:!so,useCSSOMInjection:!nR},rm=function(){function e(n,i,a){n===void 0&&(n=ya),i===void 0&&(i={});var t=this;this.options=Fe(Fe({},LR),n),this.gs=i,this.names=new Map(a),this.server=!!n.isServer,!this.server&&so&&Ed&&(Ed=!1,Md(this)),As(this,function(){return function(r){for(var o=r.getTag(),c=o.length,s="",u=function(f){var g=function(h){return uo.get(h)}(f);if(g===void 0)return"continue";var v=r.names.get(g),R=o.getGroup(f);if(v===void 0||!v.size||R.length===0)return"continue";var k="".concat(ja,".g").concat(f,'[id="').concat(g,'"]'),w="";v!==void 0&&v.forEach(function(h){h.length>0&&(w+="".concat(h,","))}),s+="".concat(R).concat(k,'{content:"').concat(w,'"}').concat(Fs)},d=0;d<c;d++)u(d);return s}(t)})}return e.registerId=function(n){return sr(n)},e.prototype.rehydrate=function(){!this.server&&so&&Md(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(Fe(Fe({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var a=i.useCSSOMInjection,t=i.target;return i.isServer?new CR(t):a?new PR(t):new xR(t)}(this.options),new hR(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(sr(n),this.names.has(n))this.names.get(n).add(i);else{var a=new Set;a.add(i),this.names.set(n,a)}},e.prototype.insertRules=function(n,i,a){this.registerName(n,i),this.getTag().insertRules(sr(n),a)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(sr(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),KR=/&/g,TR=/^\s*\/\/.*$/gm;function om(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=om(i.children,n)),i})}function bR(e){var n,i,a,t=ya,r=t.options,o=r===void 0?ya:r,c=t.plugins,s=c===void 0?_o:c,u=function(g,v,R){return R.startsWith(i)&&R.endsWith(i)&&R.replaceAll(i,"").length>0?".".concat(n):g},d=s.slice();d.push(function(g){g.type===Mo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(KR,i).replace(a,u))}),o.prefix&&d.push(X2),d.push(Z2);var f=function(g,v,R,k){v===void 0&&(v=""),R===void 0&&(R=""),k===void 0&&(k="&"),n=k,i=v,a=new RegExp("\\".concat(i,"\\b"),"g");var w=g.replace(TR,""),h=Q2(R||v?"".concat(R," ").concat(v," { ").concat(w," }"):w);o.namespace&&(h=om(h,o.namespace));var p=[];return co(h,Y2(d.concat(G2(function(m){return p.push(m)})))),p};return f.hash=s.length?s.reduce(function(g,v){return v.name||Ht(15),ia(g,v.name)},Gp).toString():"",f}var $R=new rm,Nc=bR(),lm=Li.createContext({shouldForwardProp:void 0,styleSheet:$R,stylis:Nc});lm.Consumer;Li.createContext(void 0);function Hd(){return K.useContext(lm)}var OR=function(){function e(n,i){var a=this;this.inject=function(t,r){r===void 0&&(r=Nc);var o=a.name+r.hash;t.hasNameForId(a.id,o)||t.insertRules(a.id,o,r(a.rules,o,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,As(this,function(){throw Ht(12,String(a.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=Nc),this.name+n.hash},e}(),NR=function(e){return e>="A"&&e<="Z"};function Jd(e){for(var n="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;NR(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var cm=function(e){return e==null||e===!1||e===""},sm=function(e){var n,i,a=[];for(var t in e){var r=e[t];e.hasOwnProperty(t)&&!cm(r)&&(Array.isArray(r)&&r.isCss||ka(r)?a.push("".concat(Jd(t),":"),r,";"):Tt(r)?a.push.apply(a,lo(lo(["".concat(t," {")],sm(r),!1),["}"],!1)):a.push("".concat(Jd(t),": ").concat((n=t,(i=r)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in eR||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Ci(e,n,i,a){if(cm(e))return[];if(zs(e))return[".".concat(e.styledComponentId)];if(ka(e)){if(!ka(r=e)||r.prototype&&r.prototype.isReactComponent||!n)return[e];var t=e(n);return Ci(t,n,i,a)}var r;return e instanceof OR?i?(e.inject(i,a),[e.getName(a)]):[e]:Tt(e)?sm(e):Array.isArray(e)?Array.prototype.concat.apply(_o,e.map(function(o){return Ci(o,n,i,a)})):[e.toString()]}function SR(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(ka(i)&&!zs(i))return!1}return!0}var MR=Xp(Do),ER=function(){function e(n,i,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&SR(n),this.componentId=i,this.baseHash=ia(MR,i),this.baseStyle=a,rm.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,a){var t=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))t=ki(t,this.staticRulesId);else{var r=Sd(Ci(this.rules,n,i,a)),o=$c(ia(this.baseHash,r)>>>0);if(!i.hasNameForId(this.componentId,o)){var c=a(r,".".concat(o),void 0,this.componentId);i.insertRules(this.componentId,o,c)}t=ki(t,o),this.staticRulesId=o}else{for(var s=ia(this.baseHash,a.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var g=Sd(Ci(f,n,i,a));s=ia(s,g+d),u+=g}}if(u){var v=$c(s>>>0);i.hasNameForId(this.componentId,v)||i.insertRules(this.componentId,v,a(u,".".concat(v),void 0,this.componentId)),t=ki(t,v)}}return t},e}(),um=Li.createContext(void 0);um.Consumer;var jl={};function HR(e,n,i){var a=zs(e),t=e,r=!Rl(e),o=n.attrs,c=o===void 0?_o:o,s=n.componentId,u=s===void 0?function(j,P){var L=typeof j!="string"?"sc":Td(j);jl[L]=(jl[L]||0)+1;var C="".concat(L,"-").concat(oR(Do+L+jl[L]));return P?"".concat(P,"-").concat(C):C}(n.displayName,n.parentComponentId):s,d=n.displayName,f=d===void 0?function(j){return Rl(j)?"styled.".concat(j):"Styled(".concat(lR(j),")")}(e):d,g=n.displayName&&n.componentId?"".concat(Td(n.displayName),"-").concat(n.componentId):n.componentId||u,v=a&&t.attrs?t.attrs.concat(c).filter(Boolean):c,R=n.shouldForwardProp;if(a&&t.shouldForwardProp){var k=t.shouldForwardProp;if(n.shouldForwardProp){var w=n.shouldForwardProp;R=function(j,P){return k(j,P)&&w(j,P)}}else R=k}var h=new ER(i,g,a?t.componentStyle:void 0);function p(j,P){return function(L,C,b){var _=L.attrs,D=L.componentStyle,Q=L.defaultProps,T=L.foldedComponentIds,J=L.styledComponentId,W=L.target,Y=Li.useContext(um),q=Hd(),ne=L.shouldForwardProp||q.shouldForwardProp,O=iR(C,Y,Q)||ya,S=function(Je,N,A){for(var $n,G=Fe(Fe({},N),{className:void 0,theme:A}),X=0;X<Je.length;X+=1){var Bn=ka($n=Je[X])?$n(G):$n;for(var Ve in Bn)G[Ve]=Ve==="className"?ki(G[Ve],Bn[Ve]):Ve==="style"?Fe(Fe({},G[Ve]),Bn[Ve]):Bn[Ve]}return N.className&&(G.className=ki(G.className,N.className)),G}(_,C,O),H=S.as||W,z={};for(var F in S)S[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&S.theme===O||(F==="forwardedAs"?z.as=S.forwardedAs:ne&&!ne(F,H)||(z[F]=S[F]));var se=function(Je,N){var A=Hd(),$n=Je.generateAndInjectStyles(N,A.styleSheet,A.stylis);return $n}(D,S),Le=ki(T,J);return se&&(Le+=" "+se),S.className&&(Le+=" "+S.className),z[Rl(H)&&!Yp.has(H)?"class":"className"]=Le,z.ref=b,K.createElement(H,z)}(m,j,P)}p.displayName=f;var m=Li.forwardRef(p);return m.attrs=v,m.componentStyle=h,m.displayName=f,m.shouldForwardProp=R,m.foldedComponentIds=a?ki(t.foldedComponentIds,t.styledComponentId):"",m.styledComponentId=g,m.target=a?t.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=a?function(P){for(var L=[],C=1;C<arguments.length;C++)L[C-1]=arguments[C];for(var b=0,_=L;b<_.length;b++)Oc(P,_[b],!0);return P}({},t.defaultProps,j):j}}),As(m,function(){return".".concat(m.styledComponentId)}),r&&am(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Dd(e,n){for(var i=[e[0]],a=0,t=n.length;a<t;a+=1)i.push(n[a],e[a+1]);return i}var _d=function(e){return Object.assign(e,{isCss:!0})};function JR(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(ka(e)||Tt(e))return _d(Ci(Dd(_o,lo([e],n,!0))));var a=e;return n.length===0&&a.length===1&&typeof a[0]=="string"?Ci(a):_d(Ci(Dd(a,n)))}function Sc(e,n,i){if(i===void 0&&(i=ya),!n)throw Ht(1,n);var a=function(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(n,i,JR.apply(void 0,lo([t],r,!1)))};return a.attrs=function(t){return Sc(e,n,Fe(Fe({},i),{attrs:Array.prototype.concat(i.attrs,t).filter(Boolean)}))},a.withConfig=function(t){return Sc(e,n,Fe(Fe({},i),t))},a}var dm=function(e){return Sc(HR,e)},y=dm;Yp.forEach(function(e){y[e]=dm(e)});const DR=y.div`
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
`,_R=y.div`
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
`;function FR(){const e=Ie(),{color:n}=x(c=>c.color),{bgColor:i,fontColor:a}=x(c=>c.mode),[,t]=K.useState(n),r=c=>{t(c),e(h2(c))};let o=pi();return l.jsxs(DR,{$fontColor:a,$bgColor:i,children:[l.jsx(_i,{style:{backgroundColor:n},onClick:()=>o(-1),children:"Retour"}),l.jsx("h1",{style:{color:n},children:"ColorCustome"}),l.jsxs(_R,{children:[l.jsx(Bi,{$bgColor:i,onClick:()=>r("#F75D48"),style:{backgroundColor:"#F75D48"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#5448F7"),style:{backgroundColor:"#5448F7"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#FF0000"),style:{backgroundColor:"#FF0000"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#42e55b"),style:{backgroundColor:"#42e55b"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#FF4BC9"),style:{backgroundColor:"#FF4BC9"}}),l.jsx(Bi,{$bgColor:i,onClick:()=>r("#48B4F7"),style:{backgroundColor:"#48B4F7"}})]})]})}const zR=y.div`
    display: flex;
    flex-direction: column;
    color: ${e=>e.$fontColor};
    margin-left: 3vw;
    width: 74vw;
    gap: 1vw;
`,AR=y.div`
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
`,BR=y.div`
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
`,IR=y.div`
    display: flex;
    width: 76vw;
    gap: 1vw;
`,VR=y.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
`,WR=y.div`
    display: flex;
    width: 100%;
    height: 6vw;
    gap: 0.5vw;
    color: ${e=>e.$fontColor};
`,UR=y.h3`
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
`,QR=y.h3`
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
`,qR=y.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
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
`,YR=y.h4`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
`,GR=y.p`
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
`,XR=y.div`
    display: flex;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
    background-color: ${e=>e.$bgColor};
`,ej=y.div`
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
`,nj=y.h3`
    font-size: 2.5vw;
    height: 40%;
`,ij=y.h3`
    font-size: 2vw;
    height: 40%;
    color: ${e=>e.$color};
`,ur=y.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 3.5vw;
`,aj=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
`,tj=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
`,rj=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 85%;
`,oj=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 25%;
`,lj=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 75%;
`,cj=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 35%;
`,sj=y.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
`,uj=y.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
`;function dj(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(o=>o.mode),{color:a}=x(o=>o.color),t=x(o=>o.totalData.kanji),r=x(o=>o.totalData.vocabulaire);return l.jsxs(zR,{children:[l.jsxs(AR,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("h1",{children:"NIHONGO"}),l.jsxs(BR,{$color:a,$mainBgColor:i,children:[l.jsx("span",{children:"日"}),l.jsx("span",{children:"本"}),l.jsx("span",{children:"語"})]})]}),l.jsxs(IR,{children:[l.jsxs(VR,{$bgColor:e,children:[l.jsxs(WR,{$fontColor:n,children:[l.jsx(UR,{$mainBgColor:i,children:"Actualité"}),l.jsx(QR,{$mainBgColor:i,$color:a,children:"ニュース"})]}),l.jsxs(qR,{children:[l.jsx(ZR,{$mainBgColor:i,$color:a,children:"18/08"}),l.jsx(YR,{$mainBgColor:i,$fontColor:n,children:"Lancement de NIHONGO Alpha"})]}),l.jsx(GR,{$mainBgColor:i,$fontColor:n,children:"v01w32a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque. Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor. Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet."})]}),l.jsxs(XR,{$bgColor:e,children:[l.jsxs(ej,{$mainBgColor:i,$fontColor:n,children:[l.jsx(nj,{children:"Avancement"}),l.jsx(ij,{$color:a,children:"アドバンス"})]}),l.jsxs(ur,{children:[l.jsx(aj,{$mainBgColor:i,$fontColor:n,children:"Katakana"}),l.jsx(tj,{$mainBgColor:i,$color:a,children:"90%"})]}),l.jsxs(ur,{children:[l.jsx(rj,{$mainBgColor:i,$fontColor:n,children:"Nombre de vocabulaire"}),l.jsxs(oj,{$mainBgColor:i,$color:a,children:[r,"/?"]})]}),l.jsxs(ur,{children:[l.jsx(lj,{$mainBgColor:i,$fontColor:n,children:"Nombre de kanji"}),l.jsxs(cj,{$mainBgColor:i,$color:a,children:[t,"/2000"]})]}),l.jsxs(ur,{children:[l.jsx(sj,{$mainBgColor:i,$fontColor:n,children:"Hiragana"}),l.jsx(uj,{$mainBgColor:i,$color:a,children:"80%"})]})]})]})]})}var gm={exports:{}},gj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fj=gj,pj=fj;function fm(){}function pm(){}pm.resetWarningCache=fm;var mj=function(){function e(a,t,r,o,c,s){if(s!==pj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:pm,resetWarningCache:fm};return i.PropTypes=i,i};gm.exports=mj();var hj=gm.exports;const E=Wd(hj),mm=({color:e,width:n="5vw",height:i="5vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 43 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M39 4L4 36L39 68",stroke:e,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round"})});mm.propTypes={color:E.string,width:E.string,height:E.string};const hm=({color:e,mainBgColor:n,width:i="5vw",height:a="5vw"})=>l.jsxs("svg",{width:i,height:a,viewBox:"0 0 74 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{y:"2",width:"36",height:"68",fill:e}),l.jsx("rect",{x:"41",y:"18",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"60",y:"18",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"29",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"8",width:"3",height:"2",fill:e}),l.jsx("rect",{x:"38",y:"20",width:"36",height:"50",fill:e}),l.jsx("path",{d:"M54 61C54 59.8954 54.8954 59 56 59C57.1046 59 58 59.8954 58 61V70H54V61Z",fill:n}),l.jsx("path",{d:"M16 61C16 59.8954 16.8954 59 18 59C19.1046 59 20 59.8954 20 61V70H16V61Z",fill:n}),l.jsx("rect",{x:"4",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"48",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"10",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"48",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"54",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"16",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"54",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"42",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"4",y:"58",width:"10",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"22",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"60",y:"27",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"44",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"28",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"66",y:"43",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"28",y:"12",width:"4",height:"11",fill:n}),l.jsx("rect",{x:"66",y:"27",width:"4",height:"11",fill:n})]});hm.propTypes={color:E.string,mainBgColor:E.string,width:E.string,height:E.string};const vj=y.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    max-width: 76vw;
    height: 20vw;
`,Rj=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 30%;
`,jj=y(_i)`
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
`,yj=y(_i)`
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
`,kj=y.div`
    display: flex;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 70%;
`,wj=y.div`
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
`,Pj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
   
    span{
        font-size: 1.8vw;
        width: 10vw;
    }
`,xj=y.div`
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
`;function Ka(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(s=>s.mode),{color:a}=x(s=>s.color),t=ge(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};case"/Dictionnaire/Kanji":case"/Dictionnaire/Hiragana":case"/Dictionnaire/Katakana":case"/Dictionnaire/Vocabulaire":case"/Dictionnaire/Nombres":return{titleFurigana1:"じ",titleFurigana2:"しょ",titleKanji1:"辞",titleKanji2:"書",titleFr:"Dictionnaire"};default:return"Accueil"}})();let c=pi();return l.jsxs(vj,{children:[l.jsxs(Rj,{$bgColor:e,children:[l.jsxs(jj,{$mainBgColor:i,$fontColor:n,onClick:()=>c(-1),children:[l.jsx(mm,{color:a}),l.jsxs("div",{children:[l.jsx("span",{children:"もど"}),l.jsx("span",{children:"戻る"}),l.jsx("span",{children:"Retour"})]})]}),l.jsxs(yj,{$mainBgColor:i,$fontColor:n,to:"/",children:[l.jsx(hm,{color:a,mainBgColor:i}),l.jsxs("div",{children:[l.jsx("span",{children:"サイトホーム"}),l.jsx("span",{children:"Accueil du site"})]})]})]}),l.jsx(kj,{$bgColor:e,children:l.jsxs(wj,{$mainBgColor:i,$fontColor:n,children:[l.jsxs(Pj,{$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleFurigana2})]}),l.jsxs(xj,{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})})]})}const vm=({color:e,width:n="4vw",height:i="5vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 74 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M42 5C42 2.23858 39.7614 -1.20706e-07 37 0C34.2386 1.20706e-07 32 2.23858 32 5L42 5ZM33.4645 93.5355C35.4171 95.4882 38.5829 95.4882 40.5355 93.5355L72.3553 61.7157C74.308 59.7631 74.308 56.5973 72.3553 54.6447C70.4027 52.692 67.2369 52.692 65.2843 54.6447L37 82.9289L8.71573 54.6447C6.76311 52.692 3.59728 52.692 1.64466 54.6447C-0.307958 56.5973 -0.307958 59.7631 1.64466 61.7157L33.4645 93.5355ZM32 5L32 90L42 90L42 5L32 5Z",fill:e})});vm.propTypes={color:E.string,width:E.string,height:E.string};const Cj=y.div`
    display: flex;
    gap: 1vw;
    max-width: 76vw;
`,Lj=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    width: 55%;
    height: 21.5vw;
    padding: 1vw;
    border-radius: 0.8vw;
`,Kj=y.div`
    display: flex;
    width: 100%;
    gap: 0.6vw;
    height: 5vw;
`,Tj=y.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    width: 50%; 
    font-size: 1.5vw;
`,bj=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 50%;
    font-size: 1vw;
`,$j=y.div`
    display: flex;
    height: 16vw;
    gap: 0.6vw;
`,Oj=y(_i)`
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
`,Nj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1.3vw;
        width: 5vw;
    }
`,Sj=y.div`
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
`,Mj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 45%;
    height: 21.5vw;
    padding: 1vw;
`,Ej=y.div`
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
`,Hj=y.div`
    text-align:center;
    font-size: 1.5vw;
`,Jj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${e=>e.$color};
    span{
        font-size: 1vw;
        width: 3vw;
    }
`,Dj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 3vw;
        width: 3vw;
        transform: translateY(-0.7vw);
    }
`;function Jt(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(c=>c.mode),{color:a}=x(c=>c.color),t=ge(),o=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};default:return"Accueil"}})();return l.jsxs(Cj,{children:[l.jsxs(Lj,{$bgColor:e,children:[l.jsxs(Kj,{children:[l.jsx(Tj,{$mainBgColor:i,$fontColor:n,children:"Dictionnaire"}),l.jsxs(bj,{$color:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleFurigana2})]}),l.jsxs("div",{children:[l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:o.titleKanji2})]}),l.jsx("span",{children:o.titleFr})]})]}),l.jsx($j,{children:l.jsxs(Oj,{to:`/Dictionnaire/${o.titleFr}`,$mainBgColor:i,$fontColor:n,children:[l.jsxs(Nj,{$color:a,children:[l.jsx("span",{children:"じ"}),l.jsx("span",{children:"しょ"})]}),l.jsxs(Sj,{children:[l.jsx("span",{children:"辞"}),l.jsx("span",{children:"書"})]})]})})]}),l.jsx(Mj,{$bgColor:e,children:l.jsxs(Ej,{$mainBgColor:i,$fontColor:n,children:[l.jsx(Hj,{children:"Exercices"}),l.jsxs("div",{children:[l.jsxs(Jj,{$color:a,children:[l.jsx("span",{children:"えん"}),l.jsx("span",{children:"しゅう"})]}),l.jsxs(Dj,{children:[l.jsx("span",{children:"演"}),l.jsx("span",{children:"習"})]})]}),l.jsx(vm,{color:a})]})})]})}const _j="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%239ED7FF'/%3e%3c/svg%3e",Fj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='30.6667'%20y='30.6666'%20width='30.6667'%20height='30.6667'%20fill='%23FFC370'/%3e%3cpath%20d='M0%205C0%202.23857%202.23858%200%205%200H30.6667V30.6667H0V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%2061.3334H91.9999V87C91.9999%2089.7615%2089.7613%2092%2086.9999%2092H61.3333V61.3334Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%200H86.9999C89.7613%200%2091.9999%202.23858%2091.9999%205V30.6667H61.3333V0Z'%20fill='%23FFC370'/%3e%3c/svg%3e",zj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2063.4054H23.5946C26.356%2063.4054%2028.5946%2065.644%2028.5946%2068.4054V92H0V63.4054Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M63.4054%200H92V28.5946H68.4054C65.644%2028.5946%2063.4054%2026.356%2063.4054%2023.5946V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",Mc=({color:e,width:n="6vw",height:i="4vw"})=>l.jsx("svg",{width:n,height:i,viewBox:"0 0 109 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.99999 9L54.5 44L100 9",stroke:e,strokeWidth:"17",strokeLinecap:"round",strokeLinejoin:"round"})});Mc.propTypes={color:E.string,width:E.string,height:E.string};const Aj=y.div`
    display: flex;
    width: 100%;
    height: 35vw;
    gap: 1vw;
    margin-right: 3vw;
`,Bj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    padding: 1vw;
`,Ij=y.div`
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
`,Vj=y.div`
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
`,Wj=y.button`
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
`,Uj=y.div`
    display: flex;  
    flex-direction: column;
    gap: 0.6vw;
    width: 67.8%;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
`,Qj=y.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.6vw;
    height: 6vw;
`,qj=y.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
`,Zj=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${e=>e.$color};
    width: 50%;
    border-radius: 0.5vw;
    color: #F7F7F2;
`,Yj=y.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
    span{
        width: 2vw;
    }
`,Gj=y.div`
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
`,Xj=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
`,ey=y.button`
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
`,ny=y.div`
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
`,iy=y.div`
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
`,br=({difficulte:e,icon:n,children:i})=>{const a=Ie(),{fontColor:t,mainBgColor:r}=x(s=>s.mode),{color:o}=x(s=>s.color),c=()=>{a(y2(e))};return l.jsxs(ey,{$mainBgColor:r,$fontColor:t,onClick:c,children:[l.jsxs(ny,{children:[l.jsx("img",{src:n}),l.jsx("span",{children:e})]}),l.jsx(iy,{$mainBgColor:r,$color:o,children:i})]})};br.propTypes={difficulte:E.string.isRequired,icon:E.string.isRequired,children:E.node};function Dt(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(g=>g.mode),{color:a}=x(g=>g.color),t=Ie(),[r,o]=K.useState(x(g=>g.parametersExercice.exerciceTimer)),[c,s]=K.useState(x(g=>g.parametersExercice.exerciceTimerActive));K.useEffect(()=>{t(w2(r))},[r,t]);const u=()=>{s(!c),t(P2(!c))},d=()=>{o(r+1)},f=()=>{o(r-1)};return l.jsxs(Aj,{id:"SectionDifficulte",children:[l.jsx(Bj,{$bgColor:e,children:l.jsxs(Ij,{$mainBgColor:i,$fontColor:n,children:[l.jsx("span",{children:"Temps par question"}),l.jsxs(Vj,{$color:a,children:[l.jsx("button",{onClick:d,children:l.jsx(Mc,{color:a})}),l.jsxs("p",{children:[r,l.jsx("span",{children:"S"})]}),l.jsx("button",{onClick:f,children:l.jsx(Mc,{color:a})})]}),l.jsx(Wj,{onClick:u,$color:a,children:c?"Activer":"Désactiver"})]})}),l.jsxs(Uj,{$bgColor:e,children:[l.jsxs(Qj,{children:[l.jsx(qj,{$mainBgColor:i,$fontColor:n,children:"Difficulté"}),l.jsxs(Zj,{$color:a,children:[l.jsxs(Yj,{children:[l.jsx("span",{children:"こん"}),l.jsx("span",{children:"なん"})]}),l.jsxs(Gj,{children:[l.jsx("span",{children:"困"}),l.jsx("span",{children:"難"})]})]})]}),l.jsxs(Xj,{children:[l.jsxs(br,{difficulte:"Débutant",icon:_j,children:[l.jsx("span",{children:"Hiragana/Katakana"}),l.jsx("span",{children:"Rōmaji"})]}),l.jsx(br,{difficulte:"Intermédiaire",icon:Fj,children:l.jsx("span",{children:"Hiragana/Katakana"})}),l.jsx(br,{difficulte:"Confirmer",icon:zj})]})]})]})}const ay=y.div`
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
`,ty=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 4vw;
    font-weight: 700;
    color: ${e=>e.$fontColor};
`,ry=y.span`
    font-size: 8vw;
    font-weight: 700;
`,oy=y.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
`,ly=y.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
`;function _t(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(f=>f.mode),{color:a}=x(f=>f.color),t=Ie(),r=ge(),c=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),s=pi(),u=f=>{t(Pd(f))},d=f=>{t(Pd(f)),s(`/choisir-ses/${c.modeTitle}`),window.scrollTo(0,0)};return l.jsxs(ay,{id:"SectionModeDeJeu",children:[l.jsx(yl,{$bgColor:e,onClick:()=>u("Aléatoire"),children:l.jsxs(kl,{$mainBgColor:i,$fontColor:n,children:[l.jsx(wl,{$color:a,children:"Mode de jeu"}),l.jsxs(ty,{children:[l.jsx("span",{children:"ランダム"}),l.jsx("span",{children:"Aléatoire"})]})]})}),r.pathname.includes("/Vocabulaire")||r.pathname.includes("/Kanji")?l.jsx(yl,{$bgColor:e,onClick:()=>u("N5"),children:l.jsxs(kl,{$mainBgColor:i,$fontColor:n,children:[l.jsx(wl,{$color:a,children:"Mode de jeu"}),l.jsx(ry,{children:"N5"}),l.jsx(oy,{children:"JLPT"})]})}):null,l.jsx(yl,{$bgColor:e,onClick:()=>d("Choisir ses questions"),children:l.jsxs(kl,{$mainBgColor:i,$fontColor:n,children:[l.jsx(wl,{$color:a,children:"Mode de jeu"}),l.jsxs(ly,{children:["Choisir ses ",c.modeTitle]})]})})]})}const cy=y.div`
    display: flex;
    width: calc(100% - 5vw);
    height: 20vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    gap: 0.6vw;
    margin-right: 3vw;
`,sy=y.span`
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
`,uy=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    min-width: 60%;
    height: 100%;
    color: ${e=>e.$fontColor};
`,dy=y.div`
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
`,gy=y.button`
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
`;function Ft(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(u=>u.mode),{color:a}=x(u=>u.color),t=Ie(),r=ge(),c=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),s=u=>{t(k2(u))};return l.jsxs(cy,{$bgColor:e,id:"SectionNombreDeQuestions",children:[l.jsxs(sy,{$color:a,$fontColor:n,children:["Nombre de ",c.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsxs(uy,{$mainBgColor:i,children:[l.jsxs(dy,{children:[l.jsx(Fd,{$fontColor:n,$mainBgColor:i,onClick:()=>s(10),children:"10"}),l.jsx(Fd,{$fontColor:n,$mainBgColor:i,onClick:()=>s(20),children:"20"})]}),l.jsx(gy,{$fontColor:n,$mainBgColor:i,onClick:()=>s(30),children:"30"})]})]})}const fy="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='37'%20width='18.5'%20height='18.5'%20fill='%23F7F7F2'/%3e%3crect%20x='37'%20width='24'%20height='19'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='8'%20width='18'%20height='46'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='17'%20width='18'%20height='20'%20fill='%23F7F7F2'/%3e%3cpath%20d='M56%200H69C71.7614%200%2074%202.23858%2074%205V19H56V0Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='48'%20fill='%23F7F7F2'/%3e%3crect%20x='12'%20y='56'%20width='25'%20height='18'%20fill='%23F7F7F2'/%3e%3cpath%20d='M0%2056H19V74H5C2.23858%2074%200%2071.7614%200%2069V56Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='19'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Rm="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0544'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0544)'%20fill='%23F7F7F2'/%3e%3crect%20x='14.5542'%20y='48.9956'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9956)'%20fill='%23F7F7F2'/%3e%3c/svg%3e",py=y.div`
    display: flex;
    padding: 1vw;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    margin-right: 3vw;
    width: calc(100% - 5vw);
    height: 25vw;
`,my=y.button`
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
    img{
        width: 7vw;
        height: 7vw;
        transform: translateY(0.7vw);
    }
`,hy=y.div`
    font-size: 2vw;
    font-weight: 700;
`,vy=y.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
    }
`,Ry=y.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
`,jy=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
`,yy=y.div`
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
`,ky=y.div`
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
`,wy=y.div`
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
`,Py=y.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,xy=y.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 50vw;
    height: 70%;
    gap: 0.6vw;
    
`,Cy=y.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;   
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 3vw;
        height: 3vw;
    }
`,Pl=y.button`
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
    &:hover{
        h1{
            background-color: #858585;
        }
        div{
            background-color: #858585;
        }
        
    }
    span{
        color: ${e=>e.$color};
        margin-left: 0.4vw;
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
        span{
            font-size: 1.5vw;
            margin-left: 0.4vw;
        }
    }
`;function zt(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(j=>j.mode),{color:a}=x(j=>j.color),t=x(j=>j.parametersExercice.exerciceDifficulté),r=x(j=>j.parametersExercice.exerciceModeDeJeu),o=x(j=>j.parametersExercice.exerciceNumber),c=ge(),s=pi(),d=(()=>{switch(c.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return{modeTitle:"Accueil"}}})(),f=x(j=>j.parametersExercice.exerciceModeDeJeu),g=x(j=>j.parametersExercice.exerciceNumber),v=x(j=>j.parametersExercice.exerciceDifficulté),[R,k]=K.useState(!1);K.useEffect(()=>{R&&s(`/Exercices/${d.modeTitle}`)},[R,s,d.modeTitle]);const w=(j,P)=>{document.querySelector(j).style.display=P?"flex":"none"},h=()=>{const j=f==="",P=g===0,L=v==="";j||P||L?(document.querySelector(".Alert").style.display="block",k(!1),w(".AlertMode",j),w(".AlertNbQuestion",P),w(".AlertDifficulte",L)):k(!0)},p=()=>{document.querySelector(".Alert").style.display="none",w(".AlertMode",!1),w(".AlertNbQuestion",!1),w(".AlertDifficulte",!1)},m=j=>()=>{const P=document.getElementById(`Section${j}`);P?(document.querySelector(".Alert").style.display="none",P.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${j}`)};return l.jsxs(py,{$bgColor:e,children:[l.jsx(Py,{className:"Alert",children:l.jsxs(xy,{children:[l.jsx(Cy,{onClick:p,$color:a,children:l.jsx("img",{src:Rm})}),l.jsxs(Pl,{onClick:m("Difficulte"),className:"AlertDifficulte",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner une ",l.jsx("span",{children:"difficulté"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Selon la difficulté choisie, plus ou moins d'aide vous sera proposée"}),l.jsx("span",{})]})]}),l.jsxs(Pl,{onClick:m("NombreDeQuestions"),className:"AlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"nombre de questions"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),l.jsx("span",{})]})]}),l.jsxs(Pl,{onClick:m("ModeDeJeu"),className:"AlertMode",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[l.jsxs("h1",{children:["Selectionner un ",l.jsx("span",{children:"mode de jeu"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Le mode de jeu influencera les questions qui vous seront posées lors de l'exercice"}),l.jsx("span",{})]})]})]})}),l.jsxs(my,{$color:a,onClick:h,children:[l.jsx(hy,{children:"Commencer"}),l.jsx("img",{src:fy}),l.jsxs(vy,{children:[l.jsx("span",{children:"はじ"}),l.jsxs(Ry,{children:[l.jsx("span",{children:"始"}),l.jsx("span",{children:"める"})]})]})]}),l.jsxs(jy,{children:[l.jsxs(yy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Mode de jeu"}),l.jsx("span",{children:r})]}),l.jsxs(ky,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsx("span",{children:"Difficulté"}),l.jsx("span",{children:t})]})]}),l.jsxs(wy,{$fontColor:n,$mainBgColor:i,$color:a,children:[l.jsxs("span",{children:["Nombre de ",d.modeTitle.replace("'","&apos;")," dans l'exercice"]}),l.jsx("span",{children:o})]})]})}const Ly=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
`;function Ky(){return l.jsxs(Ly,{children:[l.jsx(Ka,{}),l.jsx(Jt,{}),l.jsx(Dt,{}),l.jsx(Ft,{}),l.jsx(_t,{}),l.jsx(zt,{})]})}const Ty=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
`;function by(){return l.jsxs(Ty,{children:[l.jsx(Ka,{}),l.jsx(Jt,{}),l.jsx(Dt,{}),l.jsx(Ft,{}),l.jsx(_t,{}),l.jsx(zt,{})]})}const $y=y.div`
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
`;function jm(){const e=ge(),n=Ie(),{bgColor:i,fontColor:a,mainBgColor:t}=x(u=>u.mode),{color:r}=x(u=>u.color),c=(()=>{switch(e.pathname){case"/Katakana":return{normal:"キ",accents:"ギ",combinaison:"ギャ",tout:"キギギャ"};case"/Hiragana":return{normal:"き",accents:"ぎ",combinaison:"きゃ",tout:"きぎきゃ"};default:return null}})();if(!c)return l.jsx("div",{children:"Chemin non pris en charge"});const s=u=>{n(zp(u))};return l.jsxs($y,{$bgColor:i,$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("button",{onClick:()=>s("normal"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.normal}),l.jsx("p",{children:"normal"})]})}),l.jsx("button",{onClick:()=>s("accents"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.accents}),l.jsx("p",{children:"accents"})]})}),l.jsx("button",{onClick:()=>s("combinaison"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.combinaison}),l.jsx("p",{children:"combinaison"})]})}),l.jsx("button",{onClick:()=>s("tout"),children:l.jsxs("div",{children:[l.jsx("p",{children:c.tout}),l.jsx("p",{children:"tout"})]})})]})}const Oy=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    
`;function Ny(){return l.jsxs(Oy,{children:[l.jsx(Ka,{}),l.jsx(Jt,{}),l.jsx(Dt,{}),l.jsx(jm,{}),l.jsx(Ft,{}),l.jsx(_t,{}),l.jsx(zt,{})]})}const Sy=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
`;function My(){return l.jsxs(Sy,{children:[l.jsx(Ka,{}),l.jsx(Jt,{}),l.jsx(Dt,{}),l.jsx(jm,{}),l.jsx(Ft,{}),l.jsx(_t,{}),l.jsx(zt,{})]})}const Ey=y.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
`;function Hy(){return l.jsxs(Ey,{children:[l.jsx(Ka,{}),l.jsx(Jt,{}),l.jsx(Dt,{}),l.jsx(Ft,{}),l.jsx(_t,{}),l.jsx(zt,{})]})}const Jy=y.div`
    display: flex;
    gap: 1vw;
    width: calc(100% - 21vw);
    height: 23.4vw;
 `,zd=y(_i)`
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
`,Ad=y.div`
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
`;function Dy(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(c=>c.mode),{color:a}=x(c=>c.color),t=ge(),o=(()=>{switch(t.pathname){case"/Dictionnaire/Kanji":return{titleFurigana1:"ひらがな",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Hiragana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"カタカナ",titleKanji2:"ア",titleFr2:"katakana",link2:"/Dictionnaire/Katakana"};case"/Dictionnaire/Katakana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Vocabulaire":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ばんごう",titleKanji2:"番号",titleFr2:"Nombres",link2:"/Dictionnaire/Nombres"};case"/Dictionnaire/Nombres":return{titleFurigana1:"ごい",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"かんじ",titleKanji2:"漢字",titleFr2:"kanji",link2:"/Dictionnaire/Kanji"};default:return"Accueil"}})();return l.jsxs(Jy,{children:[l.jsx(zd,{$bgColor:e,to:o.link1,children:l.jsxs(Ad,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana1}),l.jsx("span",{children:o.titleKanji1}),l.jsx("span",{children:o.titleFr1})]})}),l.jsx(zd,{$bgColor:e,to:o.link2,children:l.jsxs(Ad,{$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("span",{children:o.titleFurigana2}),l.jsx("span",{children:o.titleKanji2}),l.jsx("span",{children:o.titleFr2})]})})]})}const ym=({color:e,width:n="3.5vw",height:i="3.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("circle",{cx:"18.983",cy:"18.9829",r:"11",transform:"rotate(-45 18.983 18.9829)",stroke:e,strokeWidth:"4.84598"}),l.jsx("rect",{x:"23.7218",y:"27.2935",width:"5.32537",height:"22.0876",rx:"2.66269",transform:"rotate(-45 23.7218 27.2935)",fill:e,stroke:e})]});ym.propTypes={color:E.string,width:E.string,height:E.string};const ue=({color:e,width:n="3.5vw",height:i="3.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{x:"19.4456",y:"14.4956",width:"48",height:"7",rx:"3",transform:"rotate(45 19.4456 14.4956)",fill:e}),l.jsx("rect",{x:"14.4956",y:"48.437",width:"48",height:"7",rx:"3",transform:"rotate(-45 14.4956 48.437)",fill:e})]});ue.propTypes={color:E.string,width:E.string,height:E.string};const _y=y.div`
    position: relative;
    min-width: 60%;
    width: 100%;
    max-width: 100%;
    height: calc(3vw - (0.15vw * 2)); ;
    display: flex;
    align-items: center;
    button{
        position: absolute;
        right: 1vw;
        top: 50%;
        transform: translateY(-50%);
        width: 3vw;
        background-color: transparent;
    }
`,Fy=y.input` 
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
`;function Za({onSearchChange:e}){const{fontColor:n,mainBgColor:i}=x(g=>g.mode),{color:a}=x(g=>g.color),t=x(g=>g.search.searchText),r=ge(),[o,c]=K.useState(""),u=(()=>{switch(r.pathname){case"/Dictionnaire/Kanji":case"/choisir-ses/Kanji":return{titleFr:"Kanji"};case"/Dictionnaire/Hiragana":case"/choisir-ses/Hiragana":return{titleFr:"Hiragana"};case"/Dictionnaire/Katakana":case"/choisir-ses/Katakana":return{titleFr:"Katakana"};case"/Dictionnaire/Vocabulaire":case"/choisir-ses/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Dictionnaire/Nombres":case"/choisir-ses/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),d=g=>{c(g.target.value),e(g.target.value)},f=()=>{c(""),e("")};return l.jsxs(_y,{children:[l.jsx(Fy,{type:"text",placeholder:`Rechercher un ${u.titleFr}`,value:t||o,onChange:d,$color:a,$mainBgColor:i,$fontColor:n}),t?l.jsx("button",{onClick:f,children:l.jsx(ue,{color:a})}):l.jsx("button",{children:l.jsx(ym,{color:a})})]})}Za.propTypes={onSearchChange:E.func.isRequired};const zy=y.div`
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
`;function Ec({filterJlpt:e}){const[n,i]=K.useState("N5"),a=c=>{const s=c.target.value;n===s?(i(""),e("")):(i(s),e(s))},{fontColor:t,mainBgColor:r}=x(c=>c.mode),{color:o}=x(c=>c.color);return l.jsxs(zy,{name:"jlpt",id:"jlpt",value:n,$mainBgColor:r,$fontColor:t,$color:o,children:[l.jsx("button",{value:"N5",onClick:a,children:"N5"}),l.jsx("button",{value:"N4",onClick:a,children:"N4"}),l.jsx("button",{value:"N3",onClick:a,children:"N3"}),l.jsx("button",{value:"N2",onClick:a,children:"N2"}),l.jsx("button",{value:"N1",onClick:a,children:"N1"})]})}Ec.propTypes={filterJlpt:E.func.isRequired};const Ay=y.div`
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
`;function km({filterKana:e}){const{fontColor:n,mainBgColor:i}=x(c=>c.mode),{color:a}=x(c=>c.color),[t,r]=K.useState("N5"),o=c=>{const s=c.target.value;t===s?(r(""),e("")):(r(s),e(s))};return l.jsxs(Ay,{name:"Kana",id:"Kana",value:t,$mainBgColor:i,$fontColor:n,$color:a,children:[l.jsx("button",{value:"Combinaison",onClick:o,children:"Les combinaisons"}),l.jsx("button",{value:"Accents",onClick:o,children:"Les accents"})]})}km.propTypes={filterKana:E.func.isRequired};const By=[{filtre:"nombres et quantificateurs"},{filtre:"verbes"},{filtre:"verbes d’action"},{filtre:"adjectifs"},{filtre:"nom"},{filtre:"mots de liaison et particules"},{filtre:"expressions temporelles"},{filtre:"formules de politesse"},{filtre:"expressions idiomatiques"},{filtre:"langue informelle et argot"},{filtre:"émotions et sentiments"},{filtre:"les pays"},{filtre:"les membres de la famille"},{filtre:"les vêtements"},{filtre:"les couleurs"},{filtre:"le corps humain"},{filtre:"la nourriture"},{filtre:"santé et bien-être"},{filtre:"activités et loisirs"},{filtre:"les animaux"},{filtre:"nature et environnement"},{filtre:"temps et saisons"},{filtre:"culture et traditions japonaises"},{filtre:"lieux et directions"},{filtre:"les moyens de transport"},{filtre:"objets de bureau/école"},{filtre:"le matériel domestique"},{filtre:"les pièces de la maison"},{filtre:"vocabulaire lié au travail"},{filtre:"profession et métiers"},{filtre:"technologie et gadgets"}],Iy={filtres:By},Vy="data:image/svg+xml,%3csvg%20width='87'%20height='27'%20viewBox='0%200%2087%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L43.5%2023L83%204'%20stroke='%23F7F7F2'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Wy=y.div`
    display: flex;
    gap: 0.6vw;
    max-height: 8.3vw;
    height: 100%;
    width: calc(100% - 5vw);
    border-radius: 0.8vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
`,Uy=y.span`
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
`,Qy=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
`,qy=y.div`
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
`,Zy=y.button`
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
`;function wm({filterVocabulaire:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=x(d=>d.mode),{color:t}=x(d=>d.color),[r,o]=K.useState("Tous"),c=Iy.filtres.map(d=>d.filtre),s=d=>{const f=d.target.value;r===f?(o(""),e("")):(o(f),e(f))},u=()=>{const d=document.querySelector(".VocabulaireFilterButtonContainer"),f=document.querySelector(".VocabulaireFilterContainer"),g=document.querySelector(".MoreButtonIcon");d&&f?d.style.overflow==="visible"?(d.style.overflow="hidden",f.style.maxHeight="8.3vw",g.style.transform="rotate(0deg)"):(d.style.overflow="visible",f.style.maxHeight="100%",g.style.transform="rotate(180deg)"):console.error("Element with class VocabulaireFilterButtonContainer or VocabulaireFilterContainer not found")};return l.jsxs(Wy,{className:"VocabulaireFilterContainer",$bgColor:n,children:[l.jsx(Uy,{$fontColor:i,$mainBgColor:a,children:"Filtre"}),l.jsxs(Qy,{$mainBgColor:a,children:[l.jsx(qy,{className:"VocabulaireFilterButtonContainer",$mainBgColor:a,$color:t,onChange:s,value:r,children:c.map(d=>l.jsx("button",{value:d,onClick:s,children:d},d))}),l.jsx(Zy,{$color:t,onClick:u,children:l.jsx("img",{className:"MoreButtonIcon",src:Vy,alt:"More"})})]})]})}wm.propTypes={filterVocabulaire:E.func.isRequired};const dr=y.div`
    display: flex;
    align-items: center;
    gap: 0.6vw;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(100% - 5vw);
    height: 5vw;
`,Yy=y.div`
    display: flex;
    gap: 1vw;
    flex-direction: column;
`;function Pm(){const{bgColor:e}=x(c=>c.mode),n=Ie(),i=ge(),a=c=>{n(Hs(c.toLowerCase()))},t=c=>{n(R2(c))},r=c=>{n(Js(c))},o=c=>{n(j2(c))};return l.jsxs("div",{id:"recherche",children:[(i.pathname==="/Dictionnaire/Kanji"||i.pathname==="/choisir-ses/Kanji")&&l.jsxs(dr,{$bgColor:e,children:[l.jsx(Za,{onSearchChange:a}),l.jsx(Ec,{filterJlpt:t})]}),(i.pathname==="/Dictionnaire/Vocabulaire"||i.pathname==="/choisir-ses/Vocabulaire")&&l.jsxs(Yy,{children:[l.jsxs(dr,{$bgColor:e,children:[l.jsx(Za,{onSearchChange:a}),l.jsx(Ec,{filterJlpt:t})]}),l.jsx("div",{children:l.jsx(wm,{filterVocabulaire:o})})]}),(i.pathname==="/Dictionnaire/Katakana"||i.pathname==="/Dictionnaire/Hiragana"||i.pathname==="/choisir-ses/Katakana"||i.pathname==="/choisir-ses/Hiragana")&&l.jsxs(dr,{$bgColor:e,children:[l.jsx(Za,{onSearchChange:a}),l.jsx(km,{filterKana:r})]}),(i.pathname==="/Dictionnaire/Nombres"||i.pathname==="/choisir-ses/Nombres")&&l.jsx(dr,{$bgColor:e,children:l.jsx(Za,{onSearchChange:a})})]})}const Gy=y.div`
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
`,ek=y.p`
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
`,nk=y.div`
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
`,ik=y.div`
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
`,ak=y.div`
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
`;function Bs({kanjiList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=x(d=>d.mode),{color:t}=x(d=>d.color),r=x(d=>d.dataChoice.kanji),o=x(d=>d.parametersExercice.exerciceNumber),c=Ie(),s=ge(),u=d=>{(r.includes(d)||r.length<o)&&s.pathname==="/choisir-ses/Kanji"&&c(L2(d))};return l.jsx(Gy,{children:Array.isArray(e)&&e.length>0?e.map(d=>l.jsxs(Xy,{$bgColor:n,onClick:()=>u(d),style:{backgroundColor:r.includes(d)?"#858585":n,cursor:"pointer"},children:[l.jsxs(ek,{$fontColor:i,$mainBgColor:a,children:[l.jsx("span",{children:"Kun"})," ",d.KunReading.join(", ")]}),l.jsxs(nk,{$fontColor:i,$mainBgColor:a,$color:t,children:[d.SecondaryMeaning&&l.jsx("p",{children:d.SecondaryMeaning}),l.jsx("h2",{children:d.Kanji}),l.jsx("p",{children:d.Meaning})]}),l.jsxs(ik,{$fontColor:i,$mainBgColor:a,$color:t,children:[l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"})," ",d.JLPTLevel]}),l.jsxs("p",{children:[l.jsx("span",{children:"On"})," ",d.OnReading.join(", ")]})]})]},d.id)):l.jsx(ak,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Bs.propTypes={kanjiList:E.array.isRequired};const Kn="/Nihongo-V2/assets/icon-audio-Dmg04iGg.svg",tk=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
`,rk=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.39%;
    height: 20vw;
`,ok=y.p`
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
`,lk=y.p`
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
`,Ha=y.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
`,Ja=y.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
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
    button {
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${e=>e.$fontColor};
    }
    img {
        width: 3vw;
    }
`,ck=y.div`
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
`;function Is({hiraganaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=x(g=>g.mode),{color:t}=x(g=>g.color),r=x(g=>g.dataChoice.hiragana),o=x(g=>g.parametersExercice.exerciceNumber),c=Ie(),s=ge(),u="",d=g=>{c(Hs(g)),c(Js(u))},f=g=>{(r.includes(g)||r.length<o)&&s.pathname==="/choisir-ses/Hiragana"&&c(b2(g))};return l.jsx(tk,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var v,R,k,w,h,p,m,j;return l.jsxs(rk,{id:"item",$bgColor:n,onClick:()=>f(g),style:{backgroundColor:r.includes(g)?"#858585":n,cursor:"pointer"},children:[l.jsx(ok,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(lk,{$color:t,$mainBgColor:a,children:g.Type==="Hiragana"?g.Hiragana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Hiragana:g.Handakuten}),g.Type==="Hiragana"?l.jsxs(Ha,{children:[l.jsx(Ja,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>{var P;return d((P=g.Accent)==null?void 0:P.Dakuten)},$fontColor:i,$mainBgColor:a,children:((v=g.Accent)==null?void 0:v.Dakuten)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:(R=g.Accent)==null?void 0:R.Dakuten})}),l.jsx(wn,{onClick:()=>{var P;return d((P=g.Accent)==null?void 0:P.Handakuten)},$fontColor:i,$mainBgColor:a,children:((k=g.Accent)==null?void 0:k.Handakuten)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:(w=g.Accent)==null?void 0:w.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Ha,{children:[l.jsx(Ja,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>d(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((h=g.Accent)==null?void 0:h.Hiragana)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Hiragana})}),l.jsx(wn,{onClick:()=>d(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Ha,{children:[l.jsx(Ja,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>d(g.Hiragana),$fontColor:i,$mainBgColor:a,children:((p=g.Accent)==null?void 0:p.Hiragana)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Hiragana})}),l.jsx(wn,{onClick:()=>d(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Dakuten===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Ha,{children:[l.jsx(Ja,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{onClick:()=>d(g.Hiragana1),$fontColor:i,$mainBgColor:a,children:((m=g.Accent)==null?void 0:m.Hiragana1)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Hiragana1})}),l.jsx(wn,{$fontColor:i,$mainBgColor:a,children:((j=g.Accent)==null?void 0:j.Hiragana2)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Hiragana2})})]}):l.jsxs(Ha,{children:[l.jsx(Ja,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(wn,{$fontColor:i,$mainBgColor:a,children:l.jsx(ue,{color:t})}),l.jsx(wn,{$fontColor:i,$mainBgColor:a,children:l.jsx(ue,{color:t})})]})]},g.id)}):l.jsx(ck,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Is.propTypes={hiraganaList:E.array.isRequired};const sk=[{id:1,Type:"Hiragana",Hiragana:"あ",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:2,Type:"Hiragana",Hiragana:"い",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:3,Type:"Hiragana",Hiragana:"う",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:4,Type:"Hiragana",Hiragana:"え",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:5,Type:"Hiragana",Hiragana:"お",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:6,Type:"Hiragana",Hiragana:"か",Romaji:"ka",Accent:{Dakuten:"が",Handakuten:null},Combinaison:[]},{id:7,Type:"Hiragana",Hiragana:"き",Romaji:"ki",Accent:{Dakuten:"ぎ",Handakuten:null},Combinaison:[{Hiragana:"きゃ",Romaji:"kya"},{Hiragana:"きゅ",Romaji:"kyu"},{Hiragana:"きょ",Romaji:"kyo"},{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:8,Type:"Hiragana",Hiragana:"く",Romaji:"ku",Accent:{Dakuten:"ぐ",Handakuten:null},Combinaison:[]},{id:9,Type:"Hiragana",Hiragana:"け",Romaji:"ke",Accent:{Dakuten:"げ",Handakuten:null},Combinaison:[]},{id:10,Type:"Hiragana",Hiragana:"こ",Romaji:"ko",Accent:{Dakuten:"ご",Handakuten:null},Combinaison:[]},{id:11,Type:"Hiragana",Hiragana:"さ",Romaji:"sa",Accent:{Dakuten:"ざ",Handakuten:null},Combinaison:[]},{id:12,Type:"Hiragana",Hiragana:"し",Romaji:"shi",Accent:{Dakuten:"じ",Handakuten:null},Combinaison:[{Hiragana:"しゃ",Romaji:"sha"},{Hiragana:"しゅ",Romaji:"shu"},{Hiragana:"しょ",Romaji:"sho"},{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:13,Type:"Hiragana",Hiragana:"す",Romaji:"su",Accent:{Dakuten:"ず",Handakuten:null},Combinaison:[]},{id:14,Type:"Hiragana",Hiragana:"せ",Romaji:"se",Accent:{Dakuten:"ぜ",Handakuten:null},Combinaison:[]},{id:15,Type:"Hiragana",Hiragana:"そ",Romaji:"so",Accent:{Dakuten:"ぞ",Handakuten:null},Combinaison:[]},{id:16,Type:"Hiragana",Hiragana:"た",Romaji:"ta",Accent:{Dakuten:"だ",Handakuten:null},Combinaison:[]},{id:17,Type:"Hiragana",Hiragana:"ち",Romaji:"chi",Accent:{Dakuten:"ぢ",Handakuten:null},Combinaison:[{Hiragana:"ちゃ",Romaji:"cha"},{Hiragana:"ちゅ",Romaji:"chu"},{Hiragana:"ちょ",Romaji:"cho"}]},{id:18,Type:"Hiragana",Hiragana:"つ",Romaji:"tsu",Accent:{Dakuten:"づ",Handakuten:null},Combinaison:[]},{id:19,Type:"Hiragana",Hiragana:"て",Romaji:"te",Accent:{Dakuten:"で",Handakuten:null},Combinaison:[]},{id:20,Type:"Hiragana",Hiragana:"と",Romaji:"to",Accent:{Dakuten:"ど",Handakuten:null},Combinaison:[]},{id:21,Type:"Hiragana",Hiragana:"な",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:22,Type:"Hiragana",Hiragana:"に",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"にゃ",Romaji:"nya"},{Hiragana:"にゅ",Romaji:"nyu"},{Hiragana:"にょ",Romaji:"nyo"}]},{id:23,Type:"Hiragana",Hiragana:"ぬ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:24,Type:"Hiragana",Hiragana:"ね",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:25,Type:"Hiragana",Hiragana:"の",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:26,Type:"Hiragana",Hiragana:"は",Romaji:"ha",Accent:{Dakuten:"ば",Handakuten:"ぱ"},Combinaison:[]},{id:27,Type:"Hiragana",Hiragana:"ひ",Romaji:"hi",Accent:{Dakuten:"び",Handakuten:"ぴ"},Combinaison:[{Hiragana:"ひゃ",Romaji:"hya"},{Hiragana:"ひゅ",Romaji:"hyu"},{Hiragana:"ひょ",Romaji:"hyo"},{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"},{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:28,Type:"Hiragana",Hiragana:"ふ",Romaji:"fu",Accent:{Dakuten:"ぶ",Handakuten:"ぷ"},Combinaison:[]},{id:29,Type:"Hiragana",Hiragana:"へ",Romaji:"he",Accent:{Dakuten:"べ",Handakuten:"ぺ"},Combinaison:[]},{id:30,Type:"Hiragana",Hiragana:"ほ",Romaji:"ho",Accent:{Dakuten:"ぼ",Handakuten:"ぽ"},Combinaison:[]},{id:31,Type:"Hiragana",Hiragana:"ま",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:32,Type:"Hiragana",Hiragana:"み",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"みゃ",Romaji:"mya"},{Hiragana:"みゅ",Romaji:"myu"},{Hiragana:"みょ",Romaji:"myo"}]},{id:33,Type:"Hiragana",Hiragana:"む",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:34,Type:"Hiragana",Hiragana:"め",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:35,Type:"Hiragana",Hiragana:"も",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:36,Type:"Hiragana",Hiragana:"や",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:37,Type:"Hiragana",Hiragana:"ゆ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:38,Type:"Hiragana",Hiragana:"よ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:39,Type:"Hiragana",Hiragana:"ら",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:40,Type:"Hiragana",Hiragana:"り",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"りゃ",Romaji:"rya"},{Hiragana:"りゅ",Romaji:"ryu"},{Hiragana:"りょ",Romaji:"ryo"}]},{id:41,Type:"Hiragana",Hiragana:"る",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:42,Type:"Hiragana",Hiragana:"れ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:43,Type:"Hiragana",Hiragana:"ろ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:44,Type:"Hiragana",Hiragana:"わ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:45,Type:"Hiragana",Hiragana:"を",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:46,Type:"Hiragana",Hiragana:"ん",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]}],uk=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"が",Romaji:"ga",Hiragana:"か",Handakuten:null,Combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ぎ",Romaji:"gi",Hiragana:"き",Handakuten:null,Combinaison:[{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"ぐ",Romaji:"gu",Hiragana:"く",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"げ",Romaji:"ge",Hiragana:"け",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ご",Romaji:"go",Hiragana:"こ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ざ",Romaji:"za",Hiragana:"さ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"じ",Romaji:"ji",Hiragana:"し",Handakuten:null,Combinaison:[{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ず",Romaji:"zu",Hiragana:"す",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ぜ",Romaji:"ze",Hiragana:"せ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ぞ",Romaji:"zo",Hiragana:"そ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"だ",Romaji:"da",Hiragana:"た",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ぢ",Romaji:"ji",Hiragana:"ち",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"づ",Romaji:"zu",Hiragana:"つ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"で",Romaji:"de",Hiragana:"て",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ど",Romaji:"do",Hiragana:"と",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"ば",Romaji:"ba",Hiragana:"は",Handakuten:"ぱ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"び",Romaji:"bi",Hiragana:"ひ",Handakuten:"ぴ",Combinaison:[{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ぶ",Romaji:"bu",Hiragana:"ふ",Handakuten:"ぷ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"べ",Romaji:"be",Hiragana:"へ",Handakuten:"ぺ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ぼ",Romaji:"bo",Hiragana:"ほ",Handakuten:"ぽ",combinaison:[]}],dk=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"ぱ",Romaji:"pa",Hiragana:"は",Dakuten:"ば",combinaison:[]},{id:68,Type:"Accents",Nom:"Handakuten",Handakuten:"ぴ",Romaji:"pi",Hiragana:"ひ",Dakuten:"び",Combinaison:[{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:69,Type:"Accents",Nom:"Handakuten",Handakuten:"ぷ",Romaji:"pu",Hiragana:"ふ",Dakuten:"ぶ",combinaison:[]},{id:70,Type:"Accents",Nom:"Handakuten",Handakuten:"ぺ",Romaji:"pe",Hiragana:"へ",Dakuten:"べ",combinaison:[]},{id:71,Type:"Accents",Nom:"Handakuten",Handakuten:"ぽ",Romaji:"po",Hiragana:"ほ",Dakuten:"ぼ",combinaison:[]}],gk=[{id:72,Type:"Combinaison",Hiragana:"きゃ",Romaji:"kya",Hiragana1:"き",Hiragana2:"や"},{id:73,Type:"Combinaison",Hiragana:"きゅ",Romaji:"kyu",Hiragana1:"き",Hiragana2:"ゆ"},{id:74,Type:"Combinaison",Hiragana:"きょ",Romaji:"kyo",Hiragana1:"き",Hiragana2:"よ"},{id:75,Type:"Combinaison",Hiragana:"ぎゃ",Romaji:"gya",Hiragana1:"ぎ",Hiragana2:"や"},{id:76,Type:"Combinaison",Hiragana:"ぎゅ",Romaji:"gyu",Hiragana1:"ぎ",Hiragana2:"ゆ"},{id:77,Type:"Combinaison",Hiragana:"ぎょ",Romaji:"gyo",Hiragana1:"ぎ",Hiragana2:"よ"},{id:78,Type:"Combinaison",Hiragana:"しゃ",Romaji:"sha",Hiragana1:"し",Hiragana2:"や"},{id:79,Type:"Combinaison",Hiragana:"しゅ",Romaji:"shu",Hiragana1:"し",Hiragana2:"ゆ"},{id:80,Type:"Combinaison",Hiragana:"しょ",Romaji:"sho",Hiragana1:"し",Hiragana2:"よ"},{id:81,Type:"Combinaison",Hiragana:"じゃ",Romaji:"ja",Hiragana1:"じ",Hiragana2:"や"},{id:82,Type:"Combinaison",Hiragana:"じゅ",Romaji:"ju",Hiragana1:"じ",Hiragana2:"ゆ"},{id:83,Type:"Combinaison",Hiragana:"じょ",Romaji:"jo",Hiragana1:"じ",Hiragana2:"よ"},{id:84,Type:"Combinaison",Hiragana:"ちゃ",Romaji:"cha",Hiragana1:"ち",Hiragana2:"や"},{id:85,Type:"Combinaison",Hiragana:"ちゅ",Romaji:"chu",Hiragana1:"ち",Hiragana2:"ゆ"},{id:86,Type:"Combinaison",Hiragana:"ちょ",Romaji:"cho",Hiragana1:"ち",Hiragana2:"よ"},{id:87,Type:"Combinaison",Hiragana:"ひゃ",Romaji:"hya",Hiragana1:"ひ",Hiragana2:"や"},{id:88,Type:"Combinaison",Hiragana:"ひゅ",Romaji:"hyu",Hiragana1:"ひ",Hiragana2:"ゆ"},{id:89,Type:"Combinaison",Hiragana:"ひょ",Romaji:"hyo",Hiragana1:"ひ",Hiragana2:"よ"},{id:90,Type:"Combinaison",Hiragana:"びゃ",Romaji:"bya",Hiragana1:"び",Hiragana2:"や"},{id:91,Type:"Combinaison",Hiragana:"びゅ",Romaji:"byu",Hiragana1:"び",Hiragana2:"ゆ"},{id:92,Type:"Combinaison",Hiragana:"びょ",Romaji:"byo",Hiragana1:"び",Hiragana2:"よ"},{id:93,Type:"Combinaison",Hiragana:"ぴゃ",Romaji:"pya",Hiragana1:"ぴ",Hiragana2:"や"},{id:94,Type:"Combinaison",Hiragana:"ぴゅ",Romaji:"pyu",Hiragana1:"ぴ",Hiragana2:"ゆ"},{id:95,Type:"Combinaison",Hiragana:"ぴょ",Romaji:"pyo",Hiragana1:"ぴ",Hiragana2:"よ"},{id:96,Type:"Combinaison",Hiragana:"にゃ",Romaji:"nya",Hiragana1:"に",Hiragana2:"や"},{id:97,Type:"Combinaison",Hiragana:"にゅ",Romaji:"nyu",Hiragana1:"に",Hiragana2:"ゆ"},{id:98,Type:"Combinaison",Hiragana:"にょ",Romaji:"nyo",Hiragana1:"に",Hiragana2:"よ"},{id:99,Type:"Combinaison",Hiragana:"みゃ",Romaji:"mya",Hiragana1:"み",Hiragana2:"や"},{id:100,Type:"Combinaison",Hiragana:"みゅ",Romaji:"myu",Hiragana1:"み",Hiragana2:"ゆ"},{id:101,Type:"Combinaison",Hiragana:"みょ",Romaji:"myo",Hiragana1:"み",Hiragana2:"よ"},{id:102,Type:"Combinaison",Hiragana:"りゃ",Romaji:"rya",Hiragana1:"り",Hiragana2:"や"},{id:103,Type:"Combinaison",Hiragana:"りゅ",Romaji:"ryu",Hiragana1:"り",Hiragana2:"ゆ"},{id:104,Type:"Combinaison",Hiragana:"りょ",Romaji:"ryo",Hiragana1:"り",Hiragana2:"よ"}],be={Hiragana:sk,Dakuten:uk,Handakuten:dk,Combinaison:gk},fk=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
`,pk=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.39%;
    height: 20vw;
`,mk=y.p`
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
`,hk=y.p`
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
`,_a=y.button`
    background-color: ${e=>e.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 2.5vw;
    }
`,Pn=y.div`
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
`,vk=y.div`
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
`;function Vs({katakanaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=x(g=>g.mode),{color:t}=x(g=>g.color),r=x(g=>g.dataChoice.katakana),o=x(g=>g.parametersExercice.exerciceNumber),c=Ie(),s=ge(),u="",d=g=>{c(Hs(g)),c(Js(u))},f=g=>{(r.includes(g)||r.length<o)&&s.pathname==="/choisir-ses/Katakana"&&c(T2(g))};return l.jsx(fk,{children:Array.isArray(e)&&e.length>0?e.map(g=>{var v,R,k,w;return l.jsxs(pk,{$bgColor:n,onClick:()=>f(g),style:{backgroundColor:r.includes(g)?"#858585":n,cursor:"pointer"},children:[l.jsx(mk,{$fontColor:i,$mainBgColor:a,children:g.Romaji}),l.jsx(hk,{$color:t,$mainBgColor:a,children:g.Type==="Katakana"?g.Katakana:g.Nom==="Dakuten"?g.Dakuten:g.Nom==="Handakuten"?g.Handakuten:g.Type==="Combinaison"?g.Katakana:g.Handakuten}),g.Type==="Katakana"?l.jsxs(Da,{children:[l.jsx(_a,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(Pn,{onClick:()=>{var h;return d((h=g.Accent)==null?void 0:h.Dakuten)},$fontColor:i,$mainBgColor:a,children:((v=g.Accent)==null?void 0:v.Dakuten)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:(R=g.Accent)==null?void 0:R.Dakuten})}),l.jsx(Pn,{onClick:()=>{var h;return d((h=g.Accent)==null?void 0:h.Handakuten)},$fontColor:i,$mainBgColor:a,children:((k=g.Accent)==null?void 0:k.Handakuten)===null?l.jsx(ue,{color:t}):l.jsx("button",{children:(w=g.Accent)==null?void 0:w.Handakuten})})]}):g.Nom==="Dakuten"?l.jsxs(Da,{children:[l.jsx(_a,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(Pn,{onClick:()=>d(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Katakana})}),l.jsx(Pn,{onClick:()=>d(g.Handakuten),$fontColor:i,$mainBgColor:a,children:g.Handakuten===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Handakuten})})]}):g.Nom==="Handakuten"?l.jsxs(Da,{children:[l.jsx(_a,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(Pn,{onClick:()=>d(g.Katakana),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Katakana})}),l.jsx(Pn,{onClick:()=>d(g.Dakuten),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Handakuten||g.Dakuten===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Dakuten})})]}):g.Type==="Combinaison"?l.jsxs(Da,{children:[l.jsx(_a,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsx(Pn,{onClick:()=>d(g.Katakana1),$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana1===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Katakana1})}),l.jsx(Pn,{$fontColor:i,$mainBgColor:a,children:g.Accent&&g.Accent.Katakana2===null?l.jsx(ue,{color:t}):l.jsx("button",{children:g.Katakana2})})]}):l.jsxs(Da,{children:[l.jsx(_a,{$color:t,children:l.jsx("img",{src:Kn})}),l.jsxs(Pn,{$fontColor:i,$mainBgColor:a,children:[l.jsx(ue,{color:t})," "]}),l.jsxs(Pn,{$fontColor:i,$mainBgColor:a,children:[l.jsx(ue,{color:t})," "]})]})]},g.id)}):l.jsx(vk,{$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Vs.propTypes={katakanaList:E.array.isRequired};const Rk=[{id:1,Type:"Katakana",Katakana:"ア",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:2,Type:"Katakana",Katakana:"イ",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:3,Type:"Katakana",Katakana:"ウ",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:4,Type:"Katakana",Katakana:"エ",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:5,Type:"Katakana",Katakana:"オ",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:6,Type:"Katakana",Katakana:"カ",Romaji:"ka",Accent:{Dakuten:"ガ",Handakuten:null},combinaison:[]},{id:7,Type:"Katakana",Katakana:"キ",Romaji:"ki",Accent:{Dakuten:"ギ",Handakuten:null},combinaison:[{Katakana:"キャ",Romaji:"kya"},{Katakana:"キュ",Romaji:"kyu"},{Katakana:"キョ",Romaji:"kyo"},{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:8,Type:"Katakana",Katakana:"ク",Romaji:"ku",Accent:{Dakuten:"グ",Handakuten:null},combinaison:[]},{id:9,Type:"Katakana",Katakana:"ケ",Romaji:"ke",Accent:{Dakuten:"ゲ",Handakuten:null},combinaison:[]},{id:10,Type:"Katakana",Katakana:"コ",Romaji:"ko",Accent:{Dakuten:"ゴ",Handakuten:null},combinaison:[]},{id:11,Type:"Katakana",Katakana:"サ",Romaji:"sa",Accent:{Dakuten:"ザ",Handakuten:null},combinaison:[]},{id:12,Type:"Katakana",Katakana:"シ",Romaji:"shi",Accent:{Dakuten:"ジ",Handakuten:null},combinaison:[{Katakana:"シャ",Romaji:"sha"},{Katakana:"シュ",Romaji:"shu"},{Katakana:"ショ",Romaji:"sho"},{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:13,Type:"Katakana",Katakana:"ス",Romaji:"su",Accent:{Dakuten:"ズ",Handakuten:null},combinaison:[]},{id:14,Type:"Katakana",Katakana:"セ",Romaji:"se",Accent:{Dakuten:"ゼ",Handakuten:null},combinaison:[]},{id:15,Type:"Katakana",Katakana:"ソ",Romaji:"so",Accent:{Dakuten:"ゾ",Handakuten:null},combinaison:[]},{id:16,Type:"Katakana",Katakana:"タ",Romaji:"ta",Accent:{Dakuten:"ダ",Handakuten:null},combinaison:[]},{id:17,Type:"Katakana",Katakana:"チ",Romaji:"chi",Accent:{Dakuten:"ヂ",Handakuten:null},combinaison:[{Katakana:"チャ",Romaji:"cha"},{Katakana:"チュ",Romaji:"chu"},{Katakana:"チョ",Romaji:"cho"}]},{id:18,Type:"Katakana",Katakana:"ツ",Romaji:"tsu",Accent:{Dakuten:"ヅ",Handakuten:null},combinaison:[]},{id:19,Type:"Katakana",Katakana:"テ",Romaji:"te",Accent:{Dakuten:"デ",Handakuten:null},combinaison:[]},{id:20,Type:"Katakana",Katakana:"ト",Romaji:"to",Accent:{Dakuten:"ド",Handakuten:null},combinaison:[]},{id:21,Type:"Katakana",Katakana:"ナ",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:22,Type:"Katakana",Katakana:"ニ",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ニャ",Romaji:"nya"},{Katakana:"ニュ",Romaji:"nyu"},{Katakana:"ニョ",Romaji:"nyo"}]},{id:23,Type:"Katakana",Katakana:"ヌ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:24,Type:"Katakana",Katakana:"ネ",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:25,Type:"Katakana",Katakana:"ノ",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:26,Type:"Katakana",Katakana:"ハ",Romaji:"ha",Accent:{Dakuten:"バ",Handakuten:"パ"},combinaison:[]},{id:27,Type:"Katakana",Katakana:"ヒ",Romaji:"hi",Accent:{Dakuten:"ビ",Handakuten:"ピ"},combinaison:[{Katakana:"ヒャ",Romaji:"hya"},{Katakana:"ヒュ",Romaji:"hyu"},{Katakana:"ヒョ",Romaji:"hyo"},{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"},{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:28,Type:"Katakana",Katakana:"フ",Romaji:"fu",Accent:{Dakuten:"ブ",Handakuten:"プ"},combinaison:[]},{id:29,Type:"Katakana",Katakana:"ヘ",Romaji:"he",Accent:{Dakuten:"ベ",Handakuten:"ペ"},combinaison:[]},{id:30,Type:"Katakana",Katakana:"ホ",Romaji:"ho",Accent:{Dakuten:"ボ",Handakuten:"ポ"},combinaison:[]},{id:31,Type:"Katakana",Katakana:"マ",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:32,Type:"Katakana",Katakana:"ミ",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ミャ",Romaji:"mya"},{Katakana:"ミュ",Romaji:"myu"},{Katakana:"ミョ",Romaji:"myo"}]},{id:33,Type:"Katakana",Katakana:"ム",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:34,Type:"Katakana",Katakana:"メ",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:35,Type:"Katakana",Katakana:"モ",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:36,Type:"Katakana",Katakana:"ヤ",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:37,Type:"Katakana",Katakana:"ユ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:38,Type:"Katakana",Katakana:"ヨ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:39,Type:"Katakana",Katakana:"ラ",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:40,Type:"Katakana",Katakana:"リ",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"リャ",Romaji:"rya"},{Katakana:"リュ",Romaji:"ryu"},{Katakana:"リョ",Romaji:"ryo"}]},{id:41,Type:"Katakana",Katakana:"ル",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:42,Type:"Katakana",Katakana:"レ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:43,Type:"Katakana",Katakana:"ロ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:44,Type:"Katakana",Katakana:"ワ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:45,Type:"Katakana",Katakana:"ヲ",Romaji:"wo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:46,Type:"Katakana",Katakana:"ン",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},combinaison:[]}],jk=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"ガ",Romaji:"ga",Katakana:"カ",Handakuten:null,combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ギ",Romaji:"gi",Katakana:"キ",Handakuten:null,combinaison:[{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"グ",Romaji:"gu",Katakana:"ク",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"ゲ",Romaji:"ge",Katakana:"ケ",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ゴ",Romaji:"go",Katakana:"コ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ザ",Romaji:"za",Katakana:"サ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"ジ",Romaji:"ji",Katakana:"シ",Handakuten:null,combinaison:[{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ズ",Romaji:"zu",Katakana:"ス",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ゼ",Romaji:"ze",Katakana:"セ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ゾ",Romaji:"zo",Katakana:"ソ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"ダ",Romaji:"da",Katakana:"タ",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ヂ",Romaji:"ji",Katakana:"チ",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"ヅ",Romaji:"zu",Katakana:"ツ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"デ",Romaji:"de",Katakana:"テ",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ド",Romaji:"do",Katakana:"ト",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"バ",Romaji:"ba",Katakana:"ハ",Handakuten:"パ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"ビ",Romaji:"bi",Katakana:"ヒ",Handakuten:"ピ",combinaison:[{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ブ",Romaji:"bu",Katakana:"フ",Handakuten:"プ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"ベ",Romaji:"be",Katakana:"ヘ",Handakuten:"ペ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ボ",Romaji:"bo",Katakana:"ホ",Handakuten:"ポ",combinaison:[]}],yk=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"パ",Romaji:"pa",Katakana:"ハ",Dakuten:"バ",combinaison:[]},{id:68,Nom:"Handakuten",Type:"Accents",Handakuten:"ピ",Romaji:"pi",Katakana:"ヒ",Dakuten:"ビ",combinaison:[{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:69,Nom:"Handakuten",Type:"Accents",Handakuten:"プ",Romaji:"pu",Katakana:"フ",Dakuten:"ブ",combinaison:[]},{id:70,Nom:"Handakuten",Type:"Accents",Handakuten:"ペ",Romaji:"pe",Katakana:"ヘ",Dakuten:"ベ",combinaison:[]},{id:71,Nom:"Handakuten",Type:"Accents",Handakuten:"ポ",Romaji:"po",Katakana:"ホ",Dakuten:"ボ",combinaison:[]}],kk=[{id:72,Type:"Combinaison",Katakana:"キャ",Romaji:"kya",Katakana1:"キ",Katakana2:"ヤ"},{id:73,Type:"Combinaison",Katakana:"キュ",Romaji:"kyu",Katakana1:"キ",Katakana2:"ユ"},{id:74,Type:"Combinaison",Katakana:"キョ",Romaji:"kyo",Katakana1:"キ",Katakana2:"ヨ"},{id:75,Type:"Combinaison",Katakana:"ギャ",Romaji:"gya",Katakana1:"ギ",Katakana2:"ヤ"},{id:76,Type:"Combinaison",Katakana:"ギュ",Romaji:"gyu",Katakana1:"ギ",Katakana2:"ユ"},{id:77,Type:"Combinaison",Katakana:"ギョ",Romaji:"gyo",Katakana1:"ギ",Katakana2:"ヨ"},{id:78,Type:"Combinaison",Katakana:"シャ",Romaji:"sha",Katakana1:"シ",Katakana2:"ヤ"},{id:79,Type:"Combinaison",Katakana:"シュ",Romaji:"shu",Katakana1:"シ",Katakana2:"ユ"},{id:80,Type:"Combinaison",Katakana:"ショ",Romaji:"sho",Katakana1:"シ",Katakana2:"ヨ"},{id:81,Type:"Combinaison",Katakana:"ジャ",Romaji:"ja",Katakana1:"ジ",Katakana2:"ヤ"},{id:82,Type:"Combinaison",Katakana:"ジュ",Romaji:"ju",Katakana1:"ジ",Katakana2:"ユ"},{id:83,Type:"Combinaison",Katakana:"ジョ",Romaji:"jo",Katakana1:"ジ",Katakana2:"ヨ"},{id:84,Type:"Combinaison",Katakana:"チャ",Romaji:"cha",Katakana1:"チ",Katakana2:"ヤ"},{id:85,Type:"Combinaison",Katakana:"チュ",Romaji:"chu",Katakana1:"チ",Katakana2:"ユ"},{id:86,Type:"Combinaison",Katakana:"チョ",Romaji:"cho",Katakana1:"チ",Katakana2:"ヨ"},{id:87,Type:"Combinaison",Katakana:"ニャ",Romaji:"nya",Katakana1:"ニ",Katakana2:"ヤ"},{id:88,Type:"Combinaison",Katakana:"ニュ",Romaji:"nyu",Katakana1:"ニ",Katakana2:"ユ"},{id:89,Type:"Combinaison",Katakana:"ニョ",Romaji:"nyo",Katakana1:"ニ",Katakana2:"ヨ"},{id:90,Type:"Combinaison",Katakana:"ヒャ",Romaji:"hya",Katakana1:"ヒ",Katakana2:"ヤ"},{id:91,Type:"Combinaison",Katakana:"ヒュ",Romaji:"hyu",Katakana1:"ヒ",Katakana2:"ユ"},{id:92,Type:"Combinaison",Katakana:"ヒョ",Romaji:"hyo",Katakana1:"ヒ",Katakana2:"ヨ"},{id:93,Type:"Combinaison",Katakana:"ビャ",Romaji:"bya",Katakana1:"ビ",Katakana2:"ヤ"},{id:94,Type:"Combinaison",Katakana:"ビュ",Romaji:"byu",Katakana1:"ビ",Katakana2:"ユ"},{id:95,Type:"Combinaison",Katakana:"ビョ",Romaji:"byo",Katakana1:"ビ",Katakana2:"ヨ"},{id:96,Type:"Combinaison",Katakana:"ピャ",Romaji:"pya",Katakana1:"ピ",Katakana2:"ヤ"},{id:97,Type:"Combinaison",Katakana:"ピュ",Romaji:"pyu",Katakana1:"ピ",Katakana2:"ユ"},{id:98,Type:"Combinaison",Katakana:"ピョ",Romaji:"pyo",Katakana1:"ピ",Katakana2:"ヨ"},{id:99,Type:"Combinaison",Katakana:"ミャ",Romaji:"mya",Katakana1:"ミ",Katakana2:"ヤ"},{id:100,Type:"Combinaison",Katakana:"ミュ",Romaji:"myu",Katakana1:"ミ",Katakana2:"ユ"},{id:101,Type:"Combinaison",Katakana:"ミョ",Romaji:"myo",Katakana1:"ミ",Katakana2:"ヨ"},{id:102,Type:"Combinaison",Katakana:"リャ",Romaji:"rya",Katakana1:"リ",Katakana2:"ヤ"},{id:103,Type:"Combinaison",Katakana:"リュ",Romaji:"ryu",Katakana1:"リ",Katakana2:"ユ"},{id:104,Type:"Combinaison",Katakana:"リョ",Romaji:"ryo",Katakana1:"リ",Katakana2:"ヨ"}],$e={Katakana:Rk,Dakuten:jk,Handakuten:yk,Combinaison:kk},wk=y.div`
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
`,Pk=y.div`
    display: flex;
    gap: 0.6vw;
    flex-wrap: wrap;
    width:calc(100% - 3vw);
`,xk=y.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.5vw;
    width: 47.5%;
    height: 20vw;
`,Ck=y.div`
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
`,Lk=y.div`
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
`,Kk=y.div`
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
`;function Ws({vocabulaireList:e=[]}){const{bgColor:n,fontColor:i,mainBgColor:a}=x(d=>d.mode),{color:t}=x(d=>d.color),r=x(d=>d.dataChoice.vocabulaire),o=x(d=>d.parametersExercice.exerciceNumber),c=Ie(),s=ge(),u=d=>{(r.includes(d)||r.length<o)&&s.pathname==="/choisir-ses/Vocabulaire"&&c(K2(d))};return l.jsx(Pk,{children:Array.isArray(e)&&e.length>0?e.map(d=>l.jsxs(xk,{$bgColor:n,onClick:()=>u(d),style:{backgroundColor:r.includes(d)?"#858585":n,cursor:"pointer"},children:[l.jsxs(Ck,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[d.kanji," ",l.jsx("span",{children:"Kanji"})]}),l.jsxs("p",{children:[d.hiragana," ",l.jsx("span",{children:"Hiragana"})]})]}),l.jsxs(Lk,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("p",{children:[d.francais," ",l.jsx("span",{children:"Français"})]}),l.jsxs("p",{children:[d.Romaji," ",l.jsx("span",{children:"Romaji"})]})]}),l.jsxs(Kk,{$color:t,$fontColor:i,$mainBgColor:a,children:[l.jsxs("div",{children:[l.jsx("span",{children:Array.isArray(d.categorie)&&d.categorie[0]}),Array.isArray(d.categorie)&&d.categorie[1]&&l.jsx("span",{children:d.categorie[1]}),Array.isArray(d.categorie)&&d.categorie[2]&&l.jsx("span",{children:d.categorie[2]})]}),l.jsxs("p",{children:[l.jsx("span",{children:"JLPT"}),d.niveau]})]})]},d.id)):l.jsx(wk,{$fontColor:i,$bgColor:n,$color:t,$mainBgColor:a,children:l.jsx("p",{children:"Aucun résultat"})})})}Ws.propTypes={vocabulaireList:E.array.isRequired};const xm="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23F7F7F2'/%3e%3crect%20x='19.6904'%20y='14.9575'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Cm="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23353535'/%3e%3crect%20x='19.6904'%20y='14.957'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23353535'/%3e%3c/svg%3e",Tk=y.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
`,bk=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,$k=y.button`
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
`;function Ok(){const{mainBgColor:e}=x(v=>v.mode),{color:n}=x(v=>v.color),i=ge(),a=x(v=>v.search.searchText),t=x(v=>v.search.jlptLevel),r=x(v=>v.search.kanaType),o=x(v=>v.mode),c=x(v=>v.search.vocabulaireCategorie),s=So.kanji.filter(v=>{var R,k;return(((R=v.Meaning)==null?void 0:R.toLowerCase().includes(a))||((k=v.SecondaryMeaning)==null?void 0:k.toLowerCase().includes(a)))&&(t===""||v.JLPTLevel===t)}).sort((v,R)=>{var h,p,m,j,P,L,C,b,_,D;const k=((h=v.Kanji)==null?void 0:h.toLowerCase().startsWith(a))||((p=v.OnReading)==null?void 0:p.some(Q=>Q.toLowerCase().startsWith(a)))||((m=v.KunReading)==null?void 0:m.some(Q=>Q.toLowerCase().startsWith(a)))||((j=v.Meaning)==null?void 0:j.toLowerCase().startsWith(a))||((P=v.SecondaryMeaning)==null?void 0:P.toLowerCase().startsWith(a)),w=((L=R.Kanji)==null?void 0:L.toLowerCase().startsWith(a))||((C=R.OnReading)==null?void 0:C.some(Q=>Q.toLowerCase().startsWith(a)))||((b=R.KunReading)==null?void 0:b.some(Q=>Q.toLowerCase().startsWith(a)))||((_=R.Meaning)==null?void 0:_.toLowerCase().startsWith(a))||((D=R.SecondaryMeaning)==null?void 0:D.toLowerCase().startsWith(a));return k&&!w?-1:!k&&w?1:0}),u=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison].filter(v=>{var R,k,w,h;return(((R=v.Hiragana)==null?void 0:R.toLowerCase().includes(a))||((k=v.Dakuten)==null?void 0:k.toLowerCase().includes(a))||((w=v.Handakuten)==null?void 0:w.toLowerCase().includes(a))||((h=v.Romaji)==null?void 0:h.toLowerCase().includes(a)))&&(r===""||v.Type===r)}).sort((v,R)=>{var h,p,m,j,P,L,C,b;const k=((h=v.Hiragana)==null?void 0:h.toLowerCase().startsWith(a))||((p=v.Dakuten)==null?void 0:p.toLowerCase().startsWith(a))||((m=v.Handakuten)==null?void 0:m.toLowerCase().startsWith(a))||((j=v.Romaji)==null?void 0:j.toLowerCase().startsWith(a)),w=((P=R.Hiragana)==null?void 0:P.toLowerCase().startsWith(a))||((L=R.Dakuten)==null?void 0:L.toLowerCase().startsWith(a))||((C=R.Handakuten)==null?void 0:C.toLowerCase().startsWith(a))||((b=R.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return k&&!w?-1:!k&&w?1:0}),d=[...$e.Katakana,...$e.Dakuten,...$e.Handakuten,...$e.Combinaison].filter(v=>{var R,k,w,h;return(((R=v.Katakana)==null?void 0:R.toLowerCase().includes(a))||((k=v.Dakuten)==null?void 0:k.toLowerCase().includes(a))||((w=v.Handakuten)==null?void 0:w.toLowerCase().includes(a))||((h=v.Romaji)==null?void 0:h.toLowerCase().includes(a)))&&(r===""||v.Type===r)}).sort((v,R)=>{var h,p,m,j,P,L,C,b;const k=((h=v.Katakana)==null?void 0:h.toLowerCase().startsWith(a))||((p=v.Dakuten)==null?void 0:p.toLowerCase().startsWith(a))||((m=v.Handakuten)==null?void 0:m.toLowerCase().startsWith(a))||((j=v.Romaji)==null?void 0:j.toLowerCase().startsWith(a)),w=((P=R.Katakana)==null?void 0:P.toLowerCase().startsWith(a))||((L=R.Dakuten)==null?void 0:L.toLowerCase().startsWith(a))||((C=R.Handakuten)==null?void 0:C.toLowerCase().startsWith(a))||((b=R.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return k&&!w?-1:!k&&w?1:0}),f=Array.isArray(Mi.vocabulaire)?Mi.vocabulaire.filter(v=>{var R,k,w,h;return(((R=v.kanji)==null?void 0:R.toLowerCase().includes(a))||((k=v.hiragana)==null?void 0:k.toLowerCase().includes(a))||((w=v.francais)==null?void 0:w.toLowerCase().includes(a))||((h=v.Romaji)==null?void 0:h.toLowerCase().includes(a)))&&(t===""||v.niveau===t)&&(c.length===0||c.includes(v.categorie))}).sort((v,R)=>{var h,p,m,j,P,L,C,b;const k=((h=v.kanji)==null?void 0:h.toLowerCase().startsWith(a))||((p=v.hiragana)==null?void 0:p.toLowerCase().startsWith(a))||((m=v.francais)==null?void 0:m.toLowerCase().startsWith(a))||((j=v.Romaji)==null?void 0:j.toLowerCase().startsWith(a)),w=((P=R.kanji)==null?void 0:P.toLowerCase().startsWith(a))||((L=R.hiragana)==null?void 0:L.toLowerCase().startsWith(a))||((C=R.francais)==null?void 0:C.toLowerCase().startsWith(a))||((b=R.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return k&&!w?-1:!k&&w?1:0}):[],g=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})};return l.jsxs(Tk,{children:[l.jsx(Ka,{}),l.jsx(Dy,{}),l.jsx(Pm,{}),i.pathname==="/Dictionnaire/Kanji"&&l.jsx(Bs,{kanjiList:s}),i.pathname==="/Dictionnaire/Hiragana"&&l.jsx(Is,{hiraganaList:u}),i.pathname==="/Dictionnaire/Katakana"&&l.jsx(Vs,{katakanaList:d}),i.pathname==="/Dictionnaire/Vocabulaire"&&l.jsx(Ws,{vocabulaireList:f}),l.jsx(bk,{children:l.jsx($k,{onClick:g,$mainBgColor:e,$color:n,children:l.jsx("img",{src:o.mode==="light"?xm:Cm})})})]})}const Nk="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0547'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0547)'%20fill='%23353535'/%3e%3crect%20x='14.5542'%20y='48.9951'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9951)'%20fill='%23353535'/%3e%3c/svg%3e",Sk=y.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 10vw;
`,Mk=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,Ek=y.button`
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
`,Hk=y.div`
    display: flex;
    width:calc(100% - 3vw);
    height: 23vw;
    gap: 1vw;
`,Jk=y.div`
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
`,Dk=y.div`
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

`,_k=y.button`
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
`;function Fk(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(T=>T.mode),{color:a}=x(T=>T.color),t=x(T=>T.dataChoice.hiragana),r=x(T=>T.dataChoice.katakana),o=x(T=>T.dataChoice.kanji),c=x(T=>T.dataChoice.vocabulaire),s=x(T=>T.dataChoice.nombres),u=ge();let d=pi();const f=x(T=>T.search.searchText),g=x(T=>T.search.jlptLevel),v=x(T=>T.search.kanaType),R=x(T=>T.mode),k=x(T=>T.search.vocabulaireCategorie),w=x(T=>T.parametersExercice.exerciceNumber),h=So.kanji.filter(T=>{var J,W;return(((J=T.Meaning)==null?void 0:J.toLowerCase().includes(f))||((W=T.SecondaryMeaning)==null?void 0:W.toLowerCase().includes(f)))&&(g===""||T.JLPTLevel===g)}).sort((T,J)=>{var q,ne,O,S,H,z,F,se,Le,Je;const W=((q=T.Kanji)==null?void 0:q.toLowerCase().startsWith(f))||((ne=T.OnReading)==null?void 0:ne.some(N=>N.toLowerCase().startsWith(f)))||((O=T.KunReading)==null?void 0:O.some(N=>N.toLowerCase().startsWith(f)))||((S=T.Meaning)==null?void 0:S.toLowerCase().startsWith(f))||((H=T.SecondaryMeaning)==null?void 0:H.toLowerCase().startsWith(f)),Y=((z=J.Kanji)==null?void 0:z.toLowerCase().startsWith(f))||((F=J.OnReading)==null?void 0:F.some(N=>N.toLowerCase().startsWith(f)))||((se=J.KunReading)==null?void 0:se.some(N=>N.toLowerCase().startsWith(f)))||((Le=J.Meaning)==null?void 0:Le.toLowerCase().startsWith(f))||((Je=J.SecondaryMeaning)==null?void 0:Je.toLowerCase().startsWith(f));return W&&!Y?-1:!W&&Y?1:0}),p=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison].filter(T=>{var J,W,Y,q;return(((J=T.Hiragana)==null?void 0:J.toLowerCase().includes(f))||((W=T.Dakuten)==null?void 0:W.toLowerCase().includes(f))||((Y=T.Handakuten)==null?void 0:Y.toLowerCase().includes(f))||((q=T.Romaji)==null?void 0:q.toLowerCase().includes(f)))&&(v===""||T.Type===v)}).sort((T,J)=>{var q,ne,O,S,H,z,F,se;const W=((q=T.Hiragana)==null?void 0:q.toLowerCase().startsWith(f))||((ne=T.Dakuten)==null?void 0:ne.toLowerCase().startsWith(f))||((O=T.Handakuten)==null?void 0:O.toLowerCase().startsWith(f))||((S=T.Romaji)==null?void 0:S.toLowerCase().startsWith(f)),Y=((H=J.Hiragana)==null?void 0:H.toLowerCase().startsWith(f))||((z=J.Dakuten)==null?void 0:z.toLowerCase().startsWith(f))||((F=J.Handakuten)==null?void 0:F.toLowerCase().startsWith(f))||((se=J.Romaji)==null?void 0:se.toLowerCase().startsWith(f));return W&&!Y?-1:!W&&Y?1:0}),m=[...$e.Katakana,...$e.Dakuten,...$e.Handakuten,...$e.Combinaison].filter(T=>{var J,W,Y,q;return(((J=T.Katakana)==null?void 0:J.toLowerCase().includes(f))||((W=T.Dakuten)==null?void 0:W.toLowerCase().includes(f))||((Y=T.Handakuten)==null?void 0:Y.toLowerCase().includes(f))||((q=T.Romaji)==null?void 0:q.toLowerCase().includes(f)))&&(v===""||T.Type===v)}).sort((T,J)=>{var q,ne,O,S,H,z,F,se;const W=((q=T.Katakana)==null?void 0:q.toLowerCase().startsWith(f))||((ne=T.Dakuten)==null?void 0:ne.toLowerCase().startsWith(f))||((O=T.Handakuten)==null?void 0:O.toLowerCase().startsWith(f))||((S=T.Romaji)==null?void 0:S.toLowerCase().startsWith(f)),Y=((H=J.Katakana)==null?void 0:H.toLowerCase().startsWith(f))||((z=J.Dakuten)==null?void 0:z.toLowerCase().startsWith(f))||((F=J.Handakuten)==null?void 0:F.toLowerCase().startsWith(f))||((se=J.Romaji)==null?void 0:se.toLowerCase().startsWith(f));return W&&!Y?-1:!W&&Y?1:0}),j=Array.isArray(Mi.vocabulaire)?Mi.vocabulaire.filter(T=>{var J,W,Y,q;return(((J=T.kanji)==null?void 0:J.toLowerCase().includes(f))||((W=T.hiragana)==null?void 0:W.toLowerCase().includes(f))||((Y=T.francais)==null?void 0:Y.toLowerCase().includes(f))||((q=T.Romaji)==null?void 0:q.toLowerCase().includes(f)))&&(g===""||T.niveau===g)&&(k.length===0||k.includes(T.categorie))}).sort((T,J)=>{var q,ne,O,S,H,z,F,se;const W=((q=T.kanji)==null?void 0:q.toLowerCase().startsWith(f))||((ne=T.hiragana)==null?void 0:ne.toLowerCase().startsWith(f))||((O=T.francais)==null?void 0:O.toLowerCase().startsWith(f))||((S=T.Romaji)==null?void 0:S.toLowerCase().startsWith(f)),Y=((H=J.kanji)==null?void 0:H.toLowerCase().startsWith(f))||((z=J.hiragana)==null?void 0:z.toLowerCase().startsWith(f))||((F=J.francais)==null?void 0:F.toLowerCase().startsWith(f))||((se=J.Romaji)==null?void 0:se.toLowerCase().startsWith(f));return W&&!Y?-1:!W&&Y?1:0}):[],P=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})},C=(()=>{switch(u.pathname){case"/choisir-ses/Kanji":return{modeTitle:"Kanji"};case"/choisir-ses/Hiragana":return{modeTitle:"Hiragana"};case"/choisir-ses/Katakana":return{modeTitle:"Katakana"};case"/choisir-ses/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/choisir-ses/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),b=u.pathname;let _;switch(b){case"/choisir-ses/Hiragana":_=t.length;break;case"/choisir-ses/Katakana":_=r.length;break;case"/choisir-ses/Kanji":_=o.length;break;case"/choisir-ses/Vocabulaire":_=c.length;break;case"/choisir-ses/Nombres":_=s.length;break;default:_=0;break}const D=Ie(),Q=()=>{switch(u.pathname){case"/choisir-ses/Vocabulaire":D(O2());break;case"/choisir-ses/Hiragana":D(M2());break;case"/choisir-ses/Katakana":D(N2());break;case"/choisir-ses/Kanji":D($2());break;case"/choisir-ses/Nombres":D(S2());break}};return l.jsxs(Sk,{children:[l.jsx(_k,{onClick:()=>d(-1),$color:a,$mainBgColor:i,children:l.jsx("img",{src:R.mode==="light"?Rm:Nk})}),l.jsxs(Hk,{children:[l.jsxs(Jk,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("div",{children:[l.jsxs("p",{children:[C.modeTitle," sélectionnes"]}),l.jsx("button",{onClick:Q,children:"Vider"})]}),l.jsxs("div",{id:"selectionnes",children:[b==="/choisir-ses/Hiragana"&&t.map((T,J)=>l.jsx("p",{children:T.Nom==="Dakuten"?T.Dakuten:T.Nom==="Handakuten"?T.Handakuten:T.Hiragana},J)),b==="/choisir-ses/Katakana"&&r.map((T,J)=>l.jsx("p",{children:T.Nom==="Dakuten"?T.Dakuten:T.Nom==="Handakuten"?T.Handakuten:T.Katakana},J)),b==="/choisir-ses/Kanji"&&o.map((T,J)=>l.jsx("p",{children:T.Kanji},J)),b==="/choisir-ses/Vocabulaire"&&c.map((T,J)=>l.jsx("p",{children:T.kanji||T.hiragana},J)),b==="/choisir-ses/Nombres"&&s.map((T,J)=>l.jsx("p",{children:T.Nombre},J))]})]}),l.jsxs(Dk,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[l.jsxs("span",{children:[" ",_,"/",w]}),l.jsxs("p",{children:[C.modeTitle," sélectionnes"]})]})]}),l.jsx(Pm,{}),u.pathname==="/choisir-ses/Kanji"&&l.jsx(Bs,{kanjiList:h}),u.pathname==="/choisir-ses/Hiragana"&&l.jsx(Is,{hiraganaList:p}),u.pathname==="/choisir-ses/Katakana"&&l.jsx(Vs,{katakanaList:m}),u.pathname==="/choisir-ses/Vocabulaire"&&l.jsx(Ws,{vocabulaireList:j}),l.jsx(Mk,{children:l.jsx(Ek,{onClick:P,$mainBgColor:i,$color:a,children:l.jsx("img",{src:R.mode==="light"?xm:Cm})})})]})}const zk=y.nav`
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
`,Fa=y(_i)`
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
`;function Ak(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(t=>t.mode),{color:a}=x(t=>t.color);return l.jsxs(zk,{$bgColor:e,children:[l.jsxs(Fa,{$mainBgColor:i,to:"/Hiragana",children:[l.jsx(za,{$color:a,children:"ひらがな"}),l.jsx(Aa,{$fontColor:n,children:"あ"}),l.jsx(Ba,{$fontColor:n,children:"hiragana"})]}),l.jsxs(Fa,{$mainBgColor:i,to:"/Katakana",children:[l.jsx(za,{$color:a,children:"カタカナ"}),l.jsx(Aa,{$fontColor:n,children:"ア"}),l.jsx(Ba,{$fontColor:n,children:"katakana"})]}),l.jsxs(Fa,{$mainBgColor:i,to:"/Kanji",children:[l.jsx(za,{$color:a,children:"かんじ"}),l.jsx(Aa,{$fontColor:n,children:"漢字"}),l.jsx(Ba,{$fontColor:n,children:"kanji"})]}),l.jsxs(Fa,{$mainBgColor:i,to:"/Vocabulaire",children:[l.jsx(za,{$color:a,children:"ごい"}),l.jsx(Aa,{$fontColor:n,children:"語彙"}),l.jsx(Ba,{$fontColor:n,children:"Vocabulaire"})]}),l.jsxs(Fa,{$mainBgColor:i,to:"/Nombres",children:[l.jsx(za,{$color:a,children:"ばんごう"}),l.jsx(Aa,{$fontColor:n,children:"番号"}),l.jsx(Ba,{$fontColor:n,children:"Nombres"})]})]})}const Bk=y.div`
    display: flex;
    flex-direction: column;
    background-color: ${e=>e.$bgColor};
    color: ${e=>e.$fontColor};
    max-width: 15vw;
    height: 9.7vw;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
`,Ik=y.div`
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
`,Vk=y.div`
    background-color: ${e=>e.$mainBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3vw;
    height: 2.5vw;
    border-radius: 0.5vw;
`,Wk=y.span`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    margin: 0;
    border-radius: 0.5vw;
`;function Uk(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(u=>u.mode),{color:a}=x(u=>u.color),[t,r]=K.useState("日本"),[o,c]=K.useState(new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"}));K.useEffect(()=>{const u=setInterval(()=>{c(new Date().toLocaleTimeString(t==="フランス"?"fr-FR":"ja-JP",{timeZone:t==="フランス"?"Europe/Paris":"Asia/Tokyo",hour:"2-digit",minute:"2-digit"}))},10);return()=>clearInterval(u)},[t]);const s=u=>{r(u==="France"?"フランス":"日本")};return l.jsxs(Bk,{$bgColor:e,$fontColor:n,children:[l.jsxs(Ik,{$mainBgColor:i,$fontColor:n,children:[l.jsx("button",{onClick:()=>s("France"),style:{backgroundColor:t==="フランス"?a:i},children:"France"}),l.jsx("button",{onClick:()=>s("Japon"),style:{backgroundColor:t==="日本"?a:i},children:"Japon"})]}),l.jsx(Vk,{$mainBgColor:i,children:t}),l.jsx(Wk,{$color:a,$mainBgColor:i,children:o})]})}const Qk=y.div`  
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
    gap: 1vw;
`;function qk(){return l.jsxs(Qk,{children:[l.jsx(Ak,{}),l.jsx(Uk,{})]})}const Zk=y.div`
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
    
`;function Lm({question:e,isCorrect:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=x(d=>d.mode),{color:r}=x(d=>d.color),o=ge(),c=x(d=>d.parametersExercice.exerciceDifficulté);function s(){return e.kanji===""?e.hiragana:e.kanji}function u(){if(e.Type==="Hiragana"||e.Type==="Katakana")return e.Hiragana||e.Katakana;if(e.Nom==="Dakuten")return e.Dakuten;if(e.Nom==="Handakuten")return e.Handakuten;if(e.Type==="Combinaison")return e.Hiragana||e.Katakana}return l.jsx(Zk,{$mainBgColor:t,$color:r,$bgColor:i,$fontColor:a,$isCorrect:n,children:l.jsxs("div",{children:[c==="Débutant"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.OnPrincipalReadingRomaji||e.KunPrincipalReadingRomaji||e.Romaji}):null,l.jsx("p",{children:e.Kanji||s()||e.Nombre||u()}),c=="Débutant"||c=="Intermédiaire"&&(o.pathname.includes("/Exercices/Vocabulaire")||o.pathname.includes("/Exercices/Kanji"))?l.jsx("span",{children:e.KunPrincipalReading||e.OnPrincipalReadingRomaji||e.hiragana}):null]})},e.id)}Lm.propTypes={question:E.shape({id:E.string.isRequired,Kanji:E.string,Katakana:E.string,Hiragana:E.string,kanji:E.string,Nombre:E.string,hiragana:E.string,Handakuten:E.string,Dakuten:E.string,Type:E.string,Nom:E.string,Romaji:E.string,KunPrincipalReadingRomaji:E.string,OnPrincipalReadingRomaji:E.string,KunPrincipalReading:E.string,OnPrincipalReading:E.string}).isRequired,isCorrect:E.bool};const Yk=y.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 100%;
`,Gk=y.button`
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
`;function Km({question:e,options:n,onAnswer:i,buttonDisabled:a}){const{bgColor:t,fontColor:r,mainBgColor:o}=x(k=>k.mode),[c,s]=K.useState(""),[u,d]=K.useState(!1),[f,g]=K.useState(null);K.useEffect(()=>{d(!1),g(null)},[e]);const v=k=>{s(k);const w=k===(e.Meaning||e.Romaji||e.francais);d(!0),g(k),i(w)},R=k=>{s(k.target.value)};return l.jsx(Yk,{$mainBgColor:o,$bgColor:t,$fontColor:r,children:n.length>0?n.map((k,w)=>l.jsx(Gk,{$fontColor:r,$mainBgColor:o,$bgColor:t,onClick:()=>v(k),$isCorrect:k===(e.Meaning||e.Romaji||e.francais),$isAnswered:u,$isSelected:k===f,disabled:a,children:k},w)):l.jsx("input",{type:"text",value:c,onChange:R})},e.id)}Km.propTypes={question:E.shape({id:E.string.isRequired,Meaning:E.string,Romaji:E.string,francais:E.string}).isRequired,options:E.arrayOf(E.string).isRequired,onAnswer:E.func.isRequired,buttonDisabled:E.bool.isRequired};const Us=({color:e,width:n="2.5vw",height:i="2.5vw"})=>l.jsxs("svg",{width:n,height:i,viewBox:"0 0 78 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsxs("g",{clipPath:"url(#clip0_309_10)",children:[l.jsx("path",{d:"M74.7033 36.2802C72.8874 36.2802 71.3902 37.6023 71.3902 39.434C71.2309 51.3642 64.3499 62.1476 53.8214 67.9295C37.9569 76.6423 19.4165 68.8215 12.3126 58.2134L22.3314 60.2999C23.9879 60.6344 25.8037 59.631 26.1382 57.8151C26.4727 56.1586 25.4692 54.3428 23.6534 54.0083L3.95026 49.867C2.80343 49.5962 -0.206994 50.4245 0.143426 53.5145L2.62822 73.3929C2.7875 75.0494 4.12547 76.2122 5.782 76.2122C8.25087 76.2122 9.25435 74.3964 9.09507 72.5646L7.93231 62.8644C24.0357 82.1853 44.4716 79.4934 56.8 73.9026C69.5585 67.1013 77.6818 54.0242 77.8411 39.5933C77.857 37.7775 76.5191 36.2802 74.7033 36.2802Z",fill:e}),l.jsx("path",{d:"M3.28122 41.7118C5.09703 41.7118 6.59428 40.3897 6.59428 38.558C6.75357 26.6278 13.6345 15.8444 24.1631 10.0625C40.0275 1.34974 58.5679 9.17048 65.6719 19.7787L55.6531 17.6921C53.9966 17.3576 52.1807 18.361 51.8462 20.1769C51.5118 21.8334 52.5152 23.6492 54.331 23.9837L74.0501 28.125C75.197 28.3958 78.2074 27.5675 77.857 24.4775L75.3722 4.59909C75.2129 2.94256 73.8749 1.7798 72.2184 1.7798C69.7495 1.7798 68.7461 3.59562 68.9053 5.42736L70.0522 15.1276C53.9488 -4.17734 33.5129 -1.5014 21.1845 4.10532C8.42603 10.8907 0.302651 23.9837 0.127441 38.3987C0.127441 40.2304 1.46541 41.7118 3.28122 41.7118Z",fill:e})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_309_10",children:l.jsx("rect",{width:"78",height:"78",fill:"white"})})})]});Us.propTypes={color:E.string,width:E.string,height:E.string};const Xk=y.div`
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
`;function Tm({onReload:e,onSkip:n,buttonDisabled:i}){const{bgColor:a,mainBgColor:t,fontColor:r}=x(s=>s.mode),{color:o}=x(s=>s.color),c=pi();return l.jsxs(Xk,{$color:o,$bgColor:a,$mainBgColor:t,$fontColor:r,children:[l.jsx("button",{onClick:()=>{e(),c(-1)},children:"Retour"}),l.jsx("button",{onClick:n,disabled:i,children:"Passer"}),l.jsx("button",{onClick:e,children:l.jsx(Us,{color:o,children:" "})})]})}Tm.propTypes={onReload:E.func.isRequired,onSkip:E.func.isRequired,buttonDisabled:E.bool};const ew=y.div`
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
`,nw=y.div`
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
`,iw=y.div`
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
`,aw=y.div`
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
`,tw=y.div`
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
`,rw=y.div`
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

`,ow=y.div`
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
        }
    }
`,lw=y.div`
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
`,cw=y.div`
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
`,sw=y.div`
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
`,uw=y.div`
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
`;function bm({onReload:e}){const n=pi(),{bgColor:i,fontColor:a,mainBgColor:t}=x(p=>p.mode),{color:r}=x(p=>p.color),o=x(p=>p.parametersExercice.exerciceModeDeJeu),c=x(p=>p.parametersExercice.exerciceNumber),s=x(p=>p.parametersExercice.exerciceDifficulté),u=x(p=>p.parametersExercice.exerciceTimer),d=x(p=>p.exercice.totalTimer),f=x(p=>p.parametersExercice.exerciceTimerActive),g=x(p=>p.exercice.totalfaute),v=x(p=>p.exercice.questionsIncorrectes),[R,k]=K.useState(null),h=(p=>{const m=Math.floor(p/60),j=p%60,P=m.toString().padStart(2,"0"),L=j.toString().padStart(2,"0");return`${P}:${L}`})(d);return v?l.jsxs(ew,{$mainBgColor:t,children:[l.jsxs(nw,{$bgColor:i,children:[l.jsxs(iw,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Difficulté"}),l.jsx("p",{children:s})]}),l.jsxs(aw,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Nombre de Kanji "}),l.jsx("p",{children:c})]}),l.jsxs(tw,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Mode de jeu"}),l.jsx("p",{children:o})]}),l.jsx(rw,{$mainBgColor:t,$fontColor:a,$color:r,children:R&&l.jsxs("div",{children:[l.jsx("h3",{children:R.kanji||R.Dakuten||R.Handakuten||R.hiragana||R.Hiragana||R.Katakana||R.Kanji}),l.jsxs("div",{children:[R.Romaji&&l.jsxs("p",{children:[l.jsx("span",{children:"Romaji "})," ",R.Romaji]}),R.francais&&l.jsxs("p",{children:[l.jsx("span",{children:"Francais "})," ",R.francais]}),R.hiragana&&l.jsxs("p",{children:[l.jsx("span",{children:"Hiragana "})," ",R.hiragana]}),R.OnPrincipalReading&&l.jsxs("p",{children:[l.jsx("span",{children:"On "})," ",R.OnPrincipalReading]}),R.KunPrincipalReading&&l.jsxs("p",{children:[l.jsx("span",{children:"Kun "})," ",R.KunPrincipalReading]}),R.Meaning&&l.jsxs("p",{children:[l.jsx("span",{children:"Francais "})," ",R.Meaning]})]})]})}),l.jsx(ow,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsx("div",{children:v.length>0?v.filter(Boolean).map((p,m)=>l.jsx("p",{onMouseEnter:()=>k(p),children:p.kanji||(p.Nom==="Handakuten"?p.Handakuten:p.Nom==="Dakuten"?p.Dakuten:p.hiragana||p.Hiragana||p.Katakana||p.Kanji)},m)):l.jsx("p",{children:"pas de faute"})})}),l.jsxs(lw,{$mainBgColor:t,$fontColor:a,$color:r,children:[l.jsx("p",{children:"Erreur"}),l.jsx("p",{children:g})]}),l.jsx(cw,{$mainBgColor:t,$fontColor:a,$color:r,children:l.jsxs("p",{children:[f===!1?h:u,l.jsx("span",{children:"s"})]})}),l.jsx(sw,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:l.jsx("div",{})})]}),l.jsxs(uw,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:[l.jsxs("button",{onClick:e,children:[" ",l.jsx(Us,{color:r,children:" "})]}),l.jsx("button",{onClick:()=>{e(),n(-1)},children:"Terminer"})]})]}):l.jsx("div",{children:"Loading..."})}bm.propTypes={onReload:E.func.isRequired};const dw=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1vw;
    position: relative;
`,gw=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    padding: 1vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 77%;
    background-color: ${e=>e.$bgColor};
`,fw=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
`,pw=y.div`
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
`,Bd=(e,n)=>{const i=[e],a=n.filter(t=>t!==e);for(;i.length<4;){const t=Math.floor(Math.random()*a.length),r=a[t];i.includes(r)||i.push(r)}return i.sort(()=>.5-Math.random())};function mw(){const e=x(N=>N.parametersExercice.exerciceModeDeJeu),n=x(N=>N.parametersExercice.exerciceNumber),i=x(N=>N.dataChoice),a=x(N=>N.parametersExercice.exerciceTypeDeKana),t=x(N=>N.parametersExercice.exerciceTimerActive),r=x(N=>N.dataChoice.katakana),o=x(N=>N.dataChoice.hiragana),{bgColor:c}=x(N=>N.mode),[s,u]=K.useState([]),[d,f]=K.useState(0),[g,v]=K.useState(null),[R,k]=K.useState(0),w=K.useRef(null),h=K.useRef(null),p=Ie(),m=ge(),j=x(N=>N.parametersExercice.exerciceTimer),[P,L]=K.useState(j),{color:C}=x(N=>N.color),[b,_]=K.useState(1),[D,Q]=K.useState(1),[T,J]=K.useState(!1),[W,Y]=K.useState(!1),q=K.useCallback(N=>{Q(A=>A+1),p(lr(D)),N===!0&&(Q(1),p(lr(D)))},[Q,p,D]),ne=K.useCallback((N,A)=>{_($n=>$n+1),p(or(b)),p(x2(A)),N===!0&&(_(1),p(or(b)))},[_,p,b]),O=K.useCallback(()=>{h.current&&clearInterval(h.current),k(0),t===!1&&(h.current=setInterval(()=>{k(N=>N+1)},1e3))},[t]),S=K.useCallback(()=>{h.current&&(clearInterval(h.current),h.current=null)},[]),H=K.useCallback(()=>{L(j),w.current&&w.current()},[j]),z=K.useCallback(()=>{if(t===!0){const N=s[d];setTimeout(()=>{d<s.length-1?(f(d+1),ne(!1,N)):(ne(),Y(!0),p(xd(R)),S())},900)}},[d,s,t,ne,S,p,R]);K.useEffect(()=>{if(t===!0&&W===!1){const N=setInterval(()=>{L(A=>A<=1?(clearInterval(N),z(),setTimeout(()=>{L(j)},900),0):A-1)},1e3);return()=>clearInterval(N)}},[j,z,p,t,W]),K.useEffect(()=>{L(j)},[j]),K.useEffect(()=>{H&&H(j)},[H,j]);const F=K.useCallback(()=>{let N;if(m.pathname.includes("/Exercices/Kanji")?(O(),N=So.kanji):m.pathname.includes("/Exercices/Hiragana")?(O(),a==="normal"?N=be.Hiragana:a==="accents"?N=[...be.Dakuten,...be.Handakuten]:a==="combinaison"?N=be.Combinaison:a==="tout"&&(N=[...be.Hiragana,...be.Dakuten,...be.Handakuten,...be.Combinaison],e==="Choisir ses questions"&&(N=o.map(A=>A.affiche==="Hiragana"?{...A,Type:"Hiragana"}:A.affiche==="Accents"?{...A,Type:A.affiche==="Accents"?"Dakuten":"Handakuten"}:{...A,Type:"Combinaison"})))):m.pathname.includes("/Exercices/Vocabulaire")?(O(),N=Mi.vocabulaire):m.pathname.includes("/Exercices/Nombres")?(O(),N=Mi.nombres):m.pathname.includes("/Exercices/Katakana")&&(O(),a==="normal"?N=$e.Katakana:a==="accents"?N=[...$e.Dakuten,...$e.Handakuten]:a==="combinaison"?N=$e.Combinaison:a==="tout"?(N=[...$e.Katakana,...$e.Dakuten,...$e.Handakuten,...$e.Combinaison],e==="Choisir ses questions"&&(N=r.map(A=>A.affiche==="Katakana"?{...A,Type:"Katakana"}:A.affiche==="Accents"?{...A,Type:A.affiche==="Accents"?"Dakuten":"Handakuten"}:{...A,Type:"Combinaison"}))):S()),N){let A=[];if(e==="Aléatoire")A=N.sort(()=>.5-Math.random()).slice(0,n);else if(e==="N5")A=N.filter(G=>G.JLPTLevel==="N5").sort(()=>.5-Math.random()).slice(0,n);else if(e==="Choisir ses questions"){if(p(zp("tout")),m.pathname.includes("/Exercices/Kanji")&&i.kanji){const G=i.kanji.map(X=>X.Kanji);A=N.filter(X=>G.includes(X.Kanji)).sort(()=>.5-Math.random()).slice(0,n),console.log(A)}else if(m.pathname.includes("/Exercices/Vocabulaire")&&i.vocabulaire){const G=i.vocabulaire.map(X=>X.francais);A=N.filter(X=>G.includes(X.francais)).sort(()=>.5-Math.random()).slice(0,n)}else if(m.pathname.includes("/Exercices/Hiragana")&&i.hiragana){const G=i.hiragana.map(X=>X.hiragana);A=N.filter(X=>G.includes(X.hiragana)).sort(()=>.5-Math.random()).slice(0,n)}else if(m.pathname.includes("/Exercices/Katakana")&&i.katakana){const G=i.katakana.map(X=>X.Katakana);A=N.filter(X=>G.includes(X.Katakana)).sort(()=>.5-Math.random()).slice(0,n)}else if(m.pathname.includes("/Exercices/Nombres")&&i.nombre){const G=i.nombre.map(X=>X.francais);A=N.filter(X=>G.includes(X.francais)).sort(()=>.5-Math.random()).slice(0,n)}}const $n=A.map(G=>{if(m.pathname.includes("/Exercices/Hiragana")||m.pathname.includes("/Exercices/Katakana")){const X=G.Romaji,Bn=Bd(X,N.map(Ve=>Ve.Romaji));return{...G,options:Bn,id:G.id.toString()}}else{const X=G.Meaning||G.francais,Bn=Bd(X,N.map(Ve=>Ve.Meaning||Ve.francais));return{...G,options:Bn,id:G.id.toString()}}});u($n),f(0)}},[e,n,i,a,m.pathname,O,S,p,r,o]);K.useEffect(()=>{const N=()=>{p(or(0)),p(lr(0))};F(),S(),O(),N()},[F,S,O,p]);const se=N=>{v(N);const A=s[d];N?(q(),J(!0)):(ne(!1,A),J(!0)),setTimeout(()=>{d<s.length-1?(f(d+1),v(null)):(S(),p(xd(R)),Y(!0),S()),v(null),J(!1),L(j)},900),w.current&&w.current()},Le=()=>{se(!1)},Je=()=>{q(!0),ne(!0),p(lr(0)),p(or(0)),F(),S(),O(),Y(!1),p(C2())};return l.jsxs(dw,{children:[W===!0?l.jsx(bm,{onReload:Je}):null,l.jsxs(gw,{$bgColor:c,children:[t===!0&&l.jsx(pw,{$color:C,children:l.jsxs("p",{children:[P,l.jsx("span",{children:"s"})]})}),s&&s.length>0?l.jsxs(fw,{children:[l.jsx(Lm,{question:s[d],isCorrect:g}),l.jsx(Km,{question:s[d],options:s[d].options,onAnswer:se,isCorrect:g,buttonDisabled:T})]},s[d].id):l.jsx("p",{children:"Aucune question disponible."})]}),l.jsx(Tm,{onReload:Je,onSkip:Le,buttonDisabled:T})]})}const hw=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    border-radius: 0.8vw;
    width: 78%;
    min-height: 80%;
`;function vw(){const{bgColor:e}=x(n=>n.mode);return l.jsx(hw,{$bgColor:e,children:l.jsx(mw,{})})}const Rw=y.div`
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
`;function jw(){const{bgColor:e,fontColor:n,mainBgColor:i}=x(c=>c.mode),a=x(c=>c.exercice.totalfaute),t=x(c=>c.exercice.totalreussite),r=x(c=>c.parametersExercice.exerciceNumber),o=t+a;return l.jsxs(Rw,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[l.jsx("p",{children:t}),l.jsxs("p",{children:[o,"/",r]}),l.jsx("p",{children:a})]})}function yw(){return l.jsx("div",{})}const kw=y.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20%;
`;function ww(){return l.jsxs(kw,{children:[l.jsx(jw,{}),location.pathname==="/Exercices/Katakana"||location.pathname==="/Exercices/Hiragana"||location.pathname==="/Exercices/Kanji"&&l.jsx(yw,{})]})}const Pw=y.div`
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
`;function Id(){const e=x(c=>c.parametersExercice.exerciceNumber),n=x(c=>c.exercice.totalfaute),i=x(c=>c.exercice.totalreussite),{color:a}=x(c=>c.color),{bgColor:t,mainBgColor:r}=x(c=>c.mode),o=(n+i)/e*100;return l.jsx(Pw,{$bgColor:t,$mainBgColor:r,$color:a,children:l.jsx("div",{children:l.jsx("div",{style:{height:`${o}%`}})})})}const xw=y.div`
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
`,Cw=y.div`
  z-index: -1;
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    position: absolute;
    bottom: 7.6vw;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;function Lw(){return l.jsxs(xw,{children:[l.jsx(ww,{}),l.jsx(vw,{}),l.jsxs(Cw,{children:[l.jsx(Id,{}),l.jsx(Id,{})]})]})}const Kw="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Tw="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23353535'/%3e%3c/svg%3e",bw="data:image/svg+xml,%3csvg%20width='21'%20height='36'%20viewBox='0%200%2021%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8947%2017.9406C13.8947%2024.7368%2018.2067%2031.2265%2020.5405%2034.2413C21.0748%2034.9314%2020.581%2035.9768%2019.7114%2035.9023C8.89085%2034.9749%200%2027.5466%200%2017.9406C0%208.68938%208.42852%201.01969%2019.2233%200.0937448C20.0788%200.0203678%2020.576%201.03601%2020.0709%201.73032C17.905%204.70778%2013.8947%2011.1391%2013.8947%2017.9406Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",$w=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11vw;
`,Vd=y.button`
    background-color: ${e=>e.$isActive?e.$color:e.$bgColor};
    color: ${e=>e.$isActive?"#fff":"#000"};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    img{
        width: 2vw;
        height: 2vw;
    }
`;function Ow(){const e=Ie(),[n,i]=K.useState("light"),a=o=>{i(o),e(v2(o))},{bgColor:t}=x(o=>o.mode),{color:r}=x(o=>o.color);return l.jsxs($w,{children:[l.jsx(Vd,{$bgColor:t,$color:r,$isActive:n==="light",onClick:()=>a("light"),children:l.jsx("img",{src:n==="light"?Kw:Tw})}),l.jsx(Vd,{$bgColor:t,$color:r,$isActive:n==="dark",onClick:()=>a("dark"),children:l.jsx("img",{src:bw})})]})}const Nw="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13422C0%204.13422%200.863862%208.26845%2014.3977%208.26845C27.9315%208.26845%2028.7954%204.13422%2028.7954%204.13422V31.6958C28.7954%2031.6958%2027.7876%2035.83%2014.3977%2035.83C1.00784%2035.83%200%2031.6958%200%2031.6958V4.13422Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23353535'%20stroke='%23E1E1DE'/%3e%3cpath%20d='M13.2459%208.40626C13.2459%2012.1356%2013.2459%2015.1588%2011.3742%2015.1588C9.5025%2015.1588%209.5025%2012.1356%209.5025%208.40626C9.5025%204.67692%2010.3405%201.65369%2011.3742%201.65369C12.4079%201.65369%2013.2459%204.67692%2013.2459%208.40626Z'%20fill='%23353535'/%3e%3cpath%20d='M19.8688%207.0282C19.8688%2010.1487%2019.8688%2012.6783%2018.573%2012.6783C17.2772%2012.6783%2017.2772%2010.1487%2017.2772%207.0282C17.2772%203.90773%2017.8574%201.37808%2018.573%201.37808C19.2887%201.37808%2019.8688%203.90773%2019.8688%207.0282Z'%20fill='%23353535'/%3e%3c/svg%3e",Sw="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13379C0%204.13379%200.863862%208.26802%2014.3977%208.26802C27.9315%208.26802%2028.7954%204.13379%2028.7954%204.13379V31.6953C28.7954%2031.6953%2027.7876%2035.8296%2014.3977%2035.8296C1.00784%2035.8296%200%2031.6953%200%2031.6953V4.13379Z'%20fill='%23353535'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23F7F7F2'%20stroke='%231E1E1E'/%3e%3cpath%20d='M13.2459%208.4059C13.2459%2012.1352%2013.2459%2015.1585%2011.3742%2015.1585C9.5025%2015.1585%209.5025%2012.1352%209.5025%208.4059C9.5025%204.67655%2010.3405%201.65332%2011.3742%201.65332C12.4079%201.65332%2013.2459%204.67655%2013.2459%208.4059Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M19.8688%207.02805C19.8688%2010.1485%2019.8688%2012.6782%2018.573%2012.6782C17.2772%2012.6782%2017.2772%2010.1485%2017.2772%207.02805C17.2772%203.90757%2017.8574%201.37793%2018.573%201.37793C19.2887%201.37793%2019.8688%203.90757%2019.8688%207.02805Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Mw=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16.7vw;
    margin-bottom: 1.3vw;
    position: absolute;
    right: 3.1vw;
    top: 1vw;
`,Ew=y(_i)`
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
`;function Hw(){const e=x(i=>i.mode),{bgColor:n}=x(i=>i.mode);return l.jsxs(Mw,{children:[l.jsx(Ow,{}),l.jsx(Ew,{$bgColor:n,to:"/color",children:l.jsx("img",{src:e.mode==="light"?Nw:Sw})})]})}const Jw=()=>{const{mainBgColor:e}=x(n=>n.mode);return K.useEffect(()=>{document.body.style.backgroundColor=e},[e]),null};function Dw(){const e=ge(),n=!e.pathname.startsWith("/choisir-ses/")&&!e.pathname.startsWith("/Exercices/"),i=!e.pathname.startsWith("/Exercices/");return l.jsxs("div",{className:"App",children:[n&&l.jsx(qk,{}),i&&l.jsx(Jw,{}),i&&l.jsx(Hw,{}),l.jsxs(Iv,{children:[l.jsx(dn,{path:"/",element:l.jsx(dj,{})}),l.jsx(dn,{path:"/kanji",element:l.jsx(Ky,{})}),l.jsx(dn,{path:"/vocabulaire",element:l.jsx(by,{})}),l.jsx(dn,{path:"/katakana",element:l.jsx(Ny,{})}),l.jsx(dn,{path:"/hiragana",element:l.jsx(My,{})}),l.jsx(dn,{path:"/nombres",element:l.jsx(Hy,{})}),l.jsx(dn,{path:"/dictionnaire/*",element:l.jsx(Ok,{})}),l.jsx(dn,{path:"/choisir-ses/*",element:l.jsx(Fk,{})}),l.jsx(dn,{path:"/color",element:l.jsx(FR,{})}),l.jsx(dn,{path:"/exercices/*",element:l.jsx(Lw,{})})]})]})}const _w="/Nihongo-V2/",Fw=Cl.createRoot(document.getElementById("root"));Fw.render(l.jsx(k1,{store:E2,children:l.jsx(Yv,{basename:_w,children:l.jsx(Dw,{})})}));
