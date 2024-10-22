function of(e,n){for(var i=0;i<n.length;i++){const a=n[i];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function gg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},vo={},mg={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mt=Symbol.for("react.element"),lf=Symbol.for("react.portal"),sf=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),gf=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),ff=Symbol.for("react.memo"),hf=Symbol.for("react.lazy"),gd=Symbol.iterator;function vf(e){return e===null||typeof e!="object"?null:(e=gd&&e[gd]||e["@@iterator"],typeof e=="function"?e:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,vg={};function La(e,n,i){this.props=e,this.context=n,this.refs=vg,this.updater=i||fg}La.prototype.isReactComponent={};La.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};La.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wg(){}wg.prototype=La.prototype;function qs(e,n,i){this.props=e,this.context=n,this.refs=vg,this.updater=i||fg}var Zs=qs.prototype=new wg;Zs.constructor=qs;hg(Zs,La.prototype);Zs.isPureReactComponent=!0;var pd=Array.isArray,jg=Object.prototype.hasOwnProperty,Gs={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function xg(e,n,i){var a,t={},r=null,l=null;if(n!=null)for(a in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(r=""+n.key),n)jg.call(n,a)&&!Rg.hasOwnProperty(a)&&(t[a]=n[a]);var s=arguments.length-2;if(s===1)t.children=i;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];t.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)t[a]===void 0&&(t[a]=s[a]);return{$$typeof:Mt,type:e,key:r,ref:l,props:t,_owner:Gs.current}}function wf(e,n){return{$$typeof:Mt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mt}function jf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var md=/\/+/g;function Yo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?jf(""+e.key):n.toString(36)}function vr(e,n,i,a,t){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mt:case lf:l=!0}}if(l)return l=e,t=t(l),e=a===""?"."+Yo(l,0):a,pd(t)?(i="",e!=null&&(i=e.replace(md,"$&/")+"/"),vr(t,n,i,"",function(d){return d})):t!=null&&(Ys(t)&&(t=wf(t,i+(!t.key||l&&l.key===t.key?"":(""+t.key).replace(md,"$&/")+"/")+e)),n.push(t)),1;if(l=0,a=a===""?".":a+":",pd(e))for(var s=0;s<e.length;s++){r=e[s];var c=a+Yo(r,s);l+=vr(r,n,i,c,t)}else if(c=vf(e),typeof c=="function")for(e=c.call(e),s=0;!(r=e.next()).done;)r=r.value,c=a+Yo(r,s++),l+=vr(r,n,i,c,t);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Vt(e,n,i){if(e==null)return e;var a=[],t=0;return vr(e,a,"","",function(r){return n.call(i,r,t++)}),a}function Rf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},wr={transition:null},xf={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Gs};function yg(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Vt,forEach:function(e,n,i){Vt(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return Vt(e,function(){n++}),n},toArray:function(e){return Vt(e,function(n){return n})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=La;A.Fragment=sf;A.Profiler=df;A.PureComponent=qs;A.StrictMode=cf;A.Suspense=mf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xf;A.act=yg;A.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=hg({},e.props),t=e.key,r=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,l=Gs.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)jg.call(n,c)&&!Rg.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=i;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];a.children=s}return{$$typeof:Mt,type:e.type,key:t,ref:r,props:a,_owner:l}};A.createContext=function(e){return e={$$typeof:gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uf,_context:e},e.Consumer=e};A.createElement=xg;A.createFactory=function(e){var n=xg.bind(null,e);return n.type=e,n};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:pf,render:e}};A.isValidElement=Ys;A.lazy=function(e){return{$$typeof:hf,_payload:{_status:-1,_result:e},_init:Rf}};A.memo=function(e,n){return{$$typeof:ff,type:e,compare:n===void 0?null:n}};A.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};A.unstable_act=yg;A.useCallback=function(e,n){return Fe.current.useCallback(e,n)};A.useContext=function(e){return Fe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};A.useEffect=function(e,n){return Fe.current.useEffect(e,n)};A.useId=function(){return Fe.current.useId()};A.useImperativeHandle=function(e,n,i){return Fe.current.useImperativeHandle(e,n,i)};A.useInsertionEffect=function(e,n){return Fe.current.useInsertionEffect(e,n)};A.useLayoutEffect=function(e,n){return Fe.current.useLayoutEffect(e,n)};A.useMemo=function(e,n){return Fe.current.useMemo(e,n)};A.useReducer=function(e,n,i){return Fe.current.useReducer(e,n,i)};A.useRef=function(e){return Fe.current.useRef(e)};A.useState=function(e){return Fe.current.useState(e)};A.useSyncExternalStore=function(e,n,i){return Fe.current.useSyncExternalStore(e,n,i)};A.useTransition=function(){return Fe.current.useTransition()};A.version="18.3.1";mg.exports=A;var K=mg.exports;const Ti=gg(K),Dl=of({__proto__:null,default:Ti},[K]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=K,kf=Symbol.for("react.element"),Pf=Symbol.for("react.fragment"),Cf=Object.prototype.hasOwnProperty,Lf=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bf={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,n,i){var a,t={},r=null,l=null;i!==void 0&&(r=""+i),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(l=n.ref);for(a in n)Cf.call(n,a)&&!bf.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)t[a]===void 0&&(t[a]=n[a]);return{$$typeof:kf,type:e,key:r,ref:l,props:t,_owner:Lf.current}}vo.Fragment=Pf;vo.jsx=kg;vo.jsxs=kg;pg.exports=vo;var o=pg.exports,Jl={},Pg={exports:{}},tn={},Cg={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,E){var D=O.length;O.push(E);e:for(;0<D;){var F=D-1>>>1,_=O[F];if(0<t(_,E))O[F]=E,O[D]=_,D=F;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var E=O[0],D=O.pop();if(D!==E){O[0]=D;e:for(var F=0,_=O.length,ee=_>>>1;F<ee;){var I=2*(F+1)-1,ge=O[I],me=I+1,fe=O[me];if(0>t(ge,D))me<_&&0>t(fe,ge)?(O[F]=fe,O[me]=D,F=me):(O[F]=ge,O[I]=D,F=I);else if(me<_&&0>t(fe,D))O[F]=fe,O[me]=D,F=me;else break e}}return E}function t(O,E){var D=O.sortIndex-E.sortIndex;return D!==0?D:O.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],d=[],g=1,p=null,m=3,u=!1,j=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var E=i(d);E!==null;){if(E.callback===null)a(d);else if(E.startTime<=O)a(d),E.sortIndex=E.expirationTime,n(c,E);else break;E=i(d)}}function R(O){if(x=!1,v(O),!j)if(i(c)!==null)j=!0,Q(P);else{var E=i(d);E!==null&&U(R,E.startTime-O)}}function P(O,E){j=!1,x&&(x=!1,f(b),b=-1),u=!0;var D=m;try{for(v(E),p=i(c);p!==null&&(!(p.expirationTime>E)||O&&!G());){var F=p.callback;if(typeof F=="function"){p.callback=null,m=p.priorityLevel;var _=F(p.expirationTime<=E);E=e.unstable_now(),typeof _=="function"?p.callback=_:p===i(c)&&a(c),v(E)}else a(c);p=i(c)}if(p!==null)var ee=!0;else{var I=i(d);I!==null&&U(R,I.startTime-E),ee=!1}return ee}finally{p=null,m=D,u=!1}}var L=!1,C=null,b=-1,T=5,z=-1;function G(){return!(e.unstable_now()-z<T)}function Te(){if(C!==null){var O=e.unstable_now();z=O;var E=!0;try{E=C(!0,O)}finally{E?$():(L=!1,C=null)}}else L=!1}var $;if(typeof h=="function")$=function(){h(Te)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,X=J.port2;J.port1.onmessage=Te,$=function(){X.postMessage(null)}}else $=function(){k(Te,0)};function Q(O){C=O,L||(L=!0,$())}function U(O,E){b=k(function(){O(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){j||u||(j=!0,Q(P))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return i(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var D=m;m=E;try{return O()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,E){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var D=m;m=O;try{return E()}finally{m=D}},e.unstable_scheduleCallback=function(O,E,D){var F=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?F+D:F):D=F,O){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=D+_,O={id:g++,callback:E,priorityLevel:O,startTime:D,expirationTime:_,sortIndex:-1},D>F?(O.sortIndex=D,n(d,O),i(c)===null&&O===i(d)&&(x?(f(b),b=-1):x=!0,U(R,D-F))):(O.sortIndex=_,n(c,O),j||u||(j=!0,Q(P))),O},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(O){var E=m;return function(){var D=m;m=E;try{return O.apply(this,arguments)}finally{m=D}}}})(Lg);Cg.exports=Lg;var Kf=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=K,en=Kf;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,gt={};function Ji(e,n){pa(e,n),pa(e+"Capture",n)}function pa(e,n){for(gt[e]=n,e=0;e<n.length;e++)bg.add(n[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Tf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fd={},hd={};function Nf(e){return Fl.call(hd,e)?!0:Fl.call(fd,e)?!1:Tf.test(e)?hd[e]=!0:(fd[e]=!0,!1)}function Sf(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,n,i,a){if(n===null||typeof n>"u"||Sf(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,i,a,t,r,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];$e[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function nc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ec,nc);$e[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ec,nc);$e[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ec,nc);$e[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,n,i,a){var t=$e.hasOwnProperty(n)?$e[n]:null;(t!==null?t.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Of(n,i,t,a)&&(i=null),a||t===null?Nf(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(n=t.attributeName,a=t.attributeNamespace,i===null?e.removeAttribute(n):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var Xn=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ut=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),tc=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),vd=Symbol.iterator;function Oa(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,el;function Qa(e){if(el===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);el=n&&n[1]||""}return`
`+el+e}var nl=!1;function il(e,n){if(!e||nl)return"";nl=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var t=d.stack.split(`
`),r=a.stack.split(`
`),l=t.length-1,s=r.length-1;1<=l&&0<=s&&t[l]!==r[s];)s--;for(;1<=l&&0<=s;l--,s--)if(t[l]!==r[s]){if(l!==1||s!==1)do if(l--,s--,0>s||t[l]!==r[s]){var c=`
`+t[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{nl=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Qa(e):""}function Mf(e){switch(e.tag){case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case Xi:return"Portal";case _l:return"Profiler";case ac:return"StrictMode";case Bl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $g:return(e.displayName||"Context")+".Consumer";case Kg:return(e._context.displayName||"Context")+".Provider";case tc:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rc:return n=e.displayName||null,n!==null?n:Il(e.type)||"Memo";case qn:n=e._payload,e=e._init;try{return Il(e(n))}catch{}}return null}function Ef(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(n);case 8:return n===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ng(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hf(e){var n=Ng(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,r=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){e._valueTracker||(e._valueTracker=Hf(e))}function Sg(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=Ng(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,n){var i=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function wd(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=gi(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Og(e,n){n=n.checked,n!=null&&ic(e,"checked",n,!1)}function Ul(e,n){Og(e,n);var i=gi(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Xl(e,n.type,i):n.hasOwnProperty("defaultValue")&&Xl(e,n.type,gi(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function jd(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Xl(e,n,i){(n!=="number"||Er(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var qa=Array.isArray;function oa(e,n,i,a){if(e=e.options,n){n={};for(var t=0;t<i.length;t++)n["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=n.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&a&&(e[i].defaultSelected=!0)}else{for(i=""+gi(i),n=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function Wl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(N(92));if(qa(i)){if(1<i.length)throw Error(N(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:gi(i)}}function Mg(e,n){var i=gi(n.value),a=gi(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function xd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Eg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Eg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wt,Hg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,t){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Wt=Wt||document.createElement("div"),Wt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function pt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zf=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(e){zf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),it[n]=it[e]})});function zg(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||it.hasOwnProperty(e)&&it[e]?(""+n).trim():n+"px"}function Dg(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,t=zg(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,t):e[i]=t}}var Df=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,n){if(n){if(Df[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Zl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,la=null,sa=null;function yd(e){if(e=zt(e)){if(typeof Yl!="function")throw Error(N(280));var n=e.stateNode;n&&(n=yo(n),Yl(e.stateNode,e.type,n))}}function Jg(e){la?sa?sa.push(e):sa=[e]:la=e}function Fg(){if(la){var e=la,n=sa;if(sa=la=null,yd(e),n)for(e=0;e<n.length;e++)yd(n[e])}}function _g(e,n){return e(n)}function Bg(){}var al=!1;function Ag(e,n,i){if(al)return e(n,i);al=!0;try{return _g(e,n,i)}finally{al=!1,(la!==null||sa!==null)&&(Bg(),Fg())}}function mt(e,n){var i=e.stateNode;if(i===null)return null;var a=yo(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(N(231,n,typeof i));return i}var es=!1;if(Bn)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){es=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{es=!1}function Jf(e,n,i,a,t,r,l,s,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(i,d)}catch(g){this.onError(g)}}var at=!1,Hr=null,zr=!1,ns=null,Ff={onError:function(e){at=!0,Hr=e}};function _f(e,n,i,a,t,r,l,s,c){at=!1,Hr=null,Jf.apply(Ff,arguments)}function Bf(e,n,i,a,t,r,l,s,c){if(_f.apply(this,arguments),at){if(at){var d=Hr;at=!1,Hr=null}else throw Error(N(198));zr||(zr=!0,ns=d)}}function Fi(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Ig(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function kd(e){if(Fi(e)!==e)throw Error(N(188))}function Af(e){var n=e.alternate;if(!n){if(n=Fi(e),n===null)throw Error(N(188));return n!==e?null:e}for(var i=e,a=n;;){var t=i.return;if(t===null)break;var r=t.alternate;if(r===null){if(a=t.return,a!==null){i=a;continue}break}if(t.child===r.child){for(r=t.child;r;){if(r===i)return kd(t),e;if(r===a)return kd(t),n;r=r.sibling}throw Error(N(188))}if(i.return!==a.return)i=t,a=r;else{for(var l=!1,s=t.child;s;){if(s===i){l=!0,i=t,a=r;break}if(s===a){l=!0,a=t,i=r;break}s=s.sibling}if(!l){for(s=r.child;s;){if(s===i){l=!0,i=r,a=t;break}if(s===a){l=!0,a=r,i=t;break}s=s.sibling}if(!l)throw Error(N(189))}}if(i.alternate!==a)throw Error(N(190))}if(i.tag!==3)throw Error(N(188));return i.stateNode.current===i?e:n}function Vg(e){return e=Af(e),e!==null?Ug(e):null}function Ug(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ug(e);if(n!==null)return n;e=e.sibling}return null}var Xg=en.unstable_scheduleCallback,Pd=en.unstable_cancelCallback,If=en.unstable_shouldYield,Vf=en.unstable_requestPaint,pe=en.unstable_now,Uf=en.unstable_getCurrentPriorityLevel,lc=en.unstable_ImmediatePriority,Wg=en.unstable_UserBlockingPriority,Dr=en.unstable_NormalPriority,Xf=en.unstable_LowPriority,Qg=en.unstable_IdlePriority,wo=null,Nn=null;function Wf(e){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Zf,Qf=Math.log,qf=Math.LN2;function Zf(e){return e>>>=0,e===0?32:31-(Qf(e)/qf|0)|0}var Qt=64,qt=4194304;function Za(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,t=e.suspendedLanes,r=e.pingedLanes,l=i&268435455;if(l!==0){var s=l&~t;s!==0?a=Za(s):(r&=l,r!==0&&(a=Za(r)))}else l=i&~t,l!==0?a=Za(l):r!==0&&(a=Za(r));if(a===0)return 0;if(n!==0&&n!==a&&!(n&t)&&(t=a&-a,r=n&-n,t>=r||t===16&&(r&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-wn(n),t=1<<i,a|=e[i],n&=~t;return a}function Gf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,r=e.pendingLanes;0<r;){var l=31-wn(r),s=1<<l,c=t[l];c===-1?(!(s&i)||s&a)&&(t[l]=Gf(s,n)):c<=n&&(e.expiredLanes|=s),r&=~s}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qg(){var e=Qt;return Qt<<=1,!(Qt&4194240)&&(Qt=64),e}function tl(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Et(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-wn(n),e[n]=i}function eh(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-wn(i),r=1<<t;n[t]=0,a[t]=-1,e[t]=-1,i&=~r}}function sc(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-wn(i),t=1<<a;t&n|e[a]&n&&(e[a]|=n),i&=~t}}var Z=0;function Zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gg,cc,Yg,e0,n0,as=!1,Zt=[],ai=null,ti=null,ri=null,ft=new Map,ht=new Map,Gn=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(e,n){switch(e){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":ft.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ht.delete(n.pointerId)}}function Ea(e,n,i,a,t,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:r,targetContainers:[t]},n!==null&&(n=zt(n),n!==null&&cc(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function ih(e,n,i,a,t){switch(n){case"focusin":return ai=Ea(ai,e,n,i,a,t),!0;case"dragenter":return ti=Ea(ti,e,n,i,a,t),!0;case"mouseover":return ri=Ea(ri,e,n,i,a,t),!0;case"pointerover":var r=t.pointerId;return ft.set(r,Ea(ft.get(r)||null,e,n,i,a,t)),!0;case"gotpointercapture":return r=t.pointerId,ht.set(r,Ea(ht.get(r)||null,e,n,i,a,t)),!0}return!1}function i0(e){var n=yi(e.target);if(n!==null){var i=Fi(n);if(i!==null){if(n=i.tag,n===13){if(n=Ig(i),n!==null){e.blockedOn=n,n0(e.priority,function(){Yg(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ts(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Gl=a,i.target.dispatchEvent(a),Gl=null}else return n=zt(i),n!==null&&cc(n),e.blockedOn=i,!1;n.shift()}return!0}function Ld(e,n,i){jr(e)&&i.delete(n)}function ah(){as=!1,ai!==null&&jr(ai)&&(ai=null),ti!==null&&jr(ti)&&(ti=null),ri!==null&&jr(ri)&&(ri=null),ft.forEach(Ld),ht.forEach(Ld)}function Ha(e,n){e.blockedOn===n&&(e.blockedOn=null,as||(as=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,ah)))}function vt(e){function n(t){return Ha(t,e)}if(0<Zt.length){Ha(Zt[0],e);for(var i=1;i<Zt.length;i++){var a=Zt[i];a.blockedOn===e&&(a.blockedOn=null)}}for(ai!==null&&Ha(ai,e),ti!==null&&Ha(ti,e),ri!==null&&Ha(ri,e),ft.forEach(n),ht.forEach(n),i=0;i<Gn.length;i++)a=Gn[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Gn.length&&(i=Gn[0],i.blockedOn===null);)i0(i),i.blockedOn===null&&Gn.shift()}var ca=Xn.ReactCurrentBatchConfig,Fr=!0;function th(e,n,i,a){var t=Z,r=ca.transition;ca.transition=null;try{Z=1,dc(e,n,i,a)}finally{Z=t,ca.transition=r}}function rh(e,n,i,a){var t=Z,r=ca.transition;ca.transition=null;try{Z=4,dc(e,n,i,a)}finally{Z=t,ca.transition=r}}function dc(e,n,i,a){if(Fr){var t=ts(e,n,i,a);if(t===null)ml(e,n,a,_r,i),Cd(e,a);else if(ih(t,e,n,i,a))a.stopPropagation();else if(Cd(e,a),n&4&&-1<nh.indexOf(e)){for(;t!==null;){var r=zt(t);if(r!==null&&Gg(r),r=ts(e,n,i,a),r===null&&ml(e,n,a,_r,i),r===t)break;t=r}t!==null&&a.stopPropagation()}else ml(e,n,a,null,i)}}var _r=null;function ts(e,n,i,a){if(_r=null,e=oc(a),e=yi(e),e!==null)if(n=Fi(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Ig(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return _r=e,null}function a0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uf()){case lc:return 1;case Wg:return 4;case Dr:case Xf:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var ei=null,uc=null,Rr=null;function t0(){if(Rr)return Rr;var e,n=uc,i=n.length,a,t="value"in ei?ei.value:ei.textContent,r=t.length;for(e=0;e<i&&n[e]===t[e];e++);var l=i-e;for(a=1;a<=l&&n[i-a]===t[r-a];a++);return Rr=t.slice(e,1<a?1-a:void 0)}function xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gt(){return!0}function bd(){return!1}function rn(e){function n(i,a,t,r,l){this._reactName=i,this._targetInst=t,this.type=a,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(i=e[s],this[s]=i?i(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Gt:bd,this.isPropagationStopped=bd,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Gt)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Gt)},persist:function(){},isPersistent:Gt}),n}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=rn(ba),Ht=se({},ba,{view:0,detail:0}),oh=rn(Ht),rl,ol,za,jo=se({},Ht,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(rl=e.screenX-za.screenX,ol=e.screenY-za.screenY):ol=rl=0,za=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Kd=rn(jo),lh=se({},jo,{dataTransfer:0}),sh=rn(lh),ch=se({},Ht,{relatedTarget:0}),ll=rn(ch),dh=se({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=rn(dh),gh=se({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ph=rn(gh),mh=se({},ba,{data:0}),$d=rn(mh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vh[e])?!!n[e]:!1}function pc(){return wh}var jh=se({},Ht,{key:function(e){if(e.key){var n=fh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rh=rn(jh),xh=se({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rn(xh),yh=se({},Ht,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),kh=rn(yh),Ph=se({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=rn(Ph),Lh=se({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=rn(Lh),Kh=[9,13,27,32],mc=Bn&&"CompositionEvent"in window,tt=null;Bn&&"documentMode"in document&&(tt=document.documentMode);var $h=Bn&&"TextEvent"in window&&!tt,r0=Bn&&(!mc||tt&&8<tt&&11>=tt),Nd=" ",Sd=!1;function o0(e,n){switch(e){case"keyup":return Kh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qi=!1;function Th(e,n){switch(e){case"compositionend":return l0(n);case"keypress":return n.which!==32?null:(Sd=!0,Nd);case"textInput":return e=n.data,e===Nd&&Sd?null:e;default:return null}}function Nh(e,n){if(Qi)return e==="compositionend"||!mc&&o0(e,n)?(e=t0(),Rr=uc=ei=null,Qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return r0&&n.locale!=="ko"?null:n.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sh[e.type]:n==="textarea"}function s0(e,n,i,a){Jg(a),n=Br(n,"onChange"),0<n.length&&(i=new gc("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var rt=null,wt=null;function Oh(e){j0(e,0)}function Ro(e){var n=Gi(e);if(Sg(n))return e}function Mh(e,n){if(e==="change")return n}var c0=!1;if(Bn){var sl;if(Bn){var cl="oninput"in document;if(!cl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),cl=typeof Md.oninput=="function"}sl=cl}else sl=!1;c0=sl&&(!document.documentMode||9<document.documentMode)}function Ed(){rt&&(rt.detachEvent("onpropertychange",d0),wt=rt=null)}function d0(e){if(e.propertyName==="value"&&Ro(wt)){var n=[];s0(n,wt,e,oc(e)),Ag(Oh,n)}}function Eh(e,n,i){e==="focusin"?(Ed(),rt=n,wt=i,rt.attachEvent("onpropertychange",d0)):e==="focusout"&&Ed()}function Hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(wt)}function zh(e,n){if(e==="click")return Ro(n)}function Dh(e,n){if(e==="input"||e==="change")return Ro(n)}function Jh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:Jh;function jt(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var t=i[a];if(!Fl.call(n,t)||!yn(e[t],n[t]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,n){var i=Hd(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Hd(i)}}function u0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?u0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function g0(){for(var e=window,n=Er();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Er(e.document)}return n}function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Fh(e){var n=g0(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&u0(i.ownerDocument.documentElement,i)){if(a!==null&&fc(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,r=Math.min(a.start,t);a=a.end===void 0?r:Math.min(a.end,t),!e.extend&&r>a&&(t=a,a=r,r=t),t=zd(i,r);var l=zd(i,a);t&&l&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),r>a?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _h=Bn&&"documentMode"in document&&11>=document.documentMode,qi=null,rs=null,ot=null,os=!1;function Dd(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;os||qi==null||qi!==Er(a)||(a=qi,"selectionStart"in a&&fc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ot&&jt(ot,a)||(ot=a,a=Br(rs,"onSelect"),0<a.length&&(n=new gc("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=qi)))}function Yt(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Zi={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionend:Yt("Transition","TransitionEnd")},dl={},p0={};Bn&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function xo(e){if(dl[e])return dl[e];if(!Zi[e])return e;var n=Zi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in p0)return dl[e]=n[i];return e}var m0=xo("animationend"),f0=xo("animationiteration"),h0=xo("animationstart"),v0=xo("transitionend"),w0=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(e,n){w0.set(e,n),Ji(n,[e])}for(var ul=0;ul<Jd.length;ul++){var gl=Jd[ul],Bh=gl.toLowerCase(),Ah=gl[0].toUpperCase()+gl.slice(1);fi(Bh,"on"+Ah)}fi(m0,"onAnimationEnd");fi(f0,"onAnimationIteration");fi(h0,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(v0,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Fd(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,Bf(a,n,void 0,e),e.currentTarget=null}function j0(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],t=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var l=a.length-1;0<=l;l--){var s=a[l],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==r&&t.isPropagationStopped())break e;Fd(t,s,d),r=c}else for(l=0;l<a.length;l++){if(s=a[l],c=s.instance,d=s.currentTarget,s=s.listener,c!==r&&t.isPropagationStopped())break e;Fd(t,s,d),r=c}}}if(zr)throw e=ns,zr=!1,ns=null,e}function ne(e,n){var i=n[us];i===void 0&&(i=n[us]=new Set);var a=e+"__bubble";i.has(a)||(R0(n,e,2,!1),i.add(a))}function pl(e,n,i){var a=0;n&&(a|=4),R0(i,e,a,n)}var er="_reactListening"+Math.random().toString(36).slice(2);function Rt(e){if(!e[er]){e[er]=!0,bg.forEach(function(i){i!=="selectionchange"&&(Ih.has(i)||pl(i,!1,e),pl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[er]||(n[er]=!0,pl("selectionchange",!1,n))}}function R0(e,n,i,a){switch(a0(n)){case 1:var t=th;break;case 4:t=rh;break;default:t=dc}i=t.bind(null,n,i,e),t=void 0,!es||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(n,i,{capture:!0,passive:t}):e.addEventListener(n,i,!0):t!==void 0?e.addEventListener(n,i,{passive:t}):e.addEventListener(n,i,!1)}function ml(e,n,i,a,t){var r=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var s=a.stateNode.containerInfo;if(s===t||s.nodeType===8&&s.parentNode===t)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===t||c.nodeType===8&&c.parentNode===t))return;l=l.return}for(;s!==null;){if(l=yi(s),l===null)return;if(c=l.tag,c===5||c===6){a=r=l;continue e}s=s.parentNode}}a=a.return}Ag(function(){var d=r,g=oc(i),p=[];e:{var m=w0.get(e);if(m!==void 0){var u=gc,j=e;switch(e){case"keypress":if(xr(i)===0)break e;case"keydown":case"keyup":u=Rh;break;case"focusin":j="focus",u=ll;break;case"focusout":j="blur",u=ll;break;case"beforeblur":case"afterblur":u=ll;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=kh;break;case m0:case f0:case h0:u=uh;break;case v0:u=Ch;break;case"scroll":u=oh;break;case"wheel":u=bh;break;case"copy":case"cut":case"paste":u=ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Td}var x=(n&4)!==0,k=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var h=d,v;h!==null;){v=h;var R=v.stateNode;if(v.tag===5&&R!==null&&(v=R,f!==null&&(R=mt(h,f),R!=null&&x.push(xt(h,R,v)))),k)break;h=h.return}0<x.length&&(m=new u(m,j,null,i,g),p.push({event:m,listeners:x}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",m&&i!==Gl&&(j=i.relatedTarget||i.fromElement)&&(yi(j)||j[An]))break e;if((u||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,u?(j=i.relatedTarget||i.toElement,u=d,j=j?yi(j):null,j!==null&&(k=Fi(j),j!==k||j.tag!==5&&j.tag!==6)&&(j=null)):(u=null,j=d),u!==j)){if(x=Kd,R="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Td,R="onPointerLeave",f="onPointerEnter",h="pointer"),k=u==null?m:Gi(u),v=j==null?m:Gi(j),m=new x(R,h+"leave",u,i,g),m.target=k,m.relatedTarget=v,R=null,yi(g)===d&&(x=new x(f,h+"enter",j,i,g),x.target=v,x.relatedTarget=k,R=x),k=R,u&&j)n:{for(x=u,f=j,h=0,v=x;v;v=Ai(v))h++;for(v=0,R=f;R;R=Ai(R))v++;for(;0<h-v;)x=Ai(x),h--;for(;0<v-h;)f=Ai(f),v--;for(;h--;){if(x===f||f!==null&&x===f.alternate)break n;x=Ai(x),f=Ai(f)}x=null}else x=null;u!==null&&_d(p,m,u,x,!1),j!==null&&k!==null&&_d(p,k,j,x,!0)}}e:{if(m=d?Gi(d):window,u=m.nodeName&&m.nodeName.toLowerCase(),u==="select"||u==="input"&&m.type==="file")var P=Mh;else if(Od(m))if(c0)P=Dh;else{P=Hh;var L=Eh}else(u=m.nodeName)&&u.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=zh);if(P&&(P=P(e,d))){s0(p,P,i,g);break e}L&&L(e,m,d),e==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Xl(m,"number",m.value)}switch(L=d?Gi(d):window,e){case"focusin":(Od(L)||L.contentEditable==="true")&&(qi=L,rs=d,ot=null);break;case"focusout":ot=rs=qi=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Dd(p,i,g);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":Dd(p,i,g)}var C;if(mc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qi?o0(e,i)&&(b="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(b="onCompositionStart");b&&(r0&&i.locale!=="ko"&&(Qi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qi&&(C=t0()):(ei=g,uc="value"in ei?ei.value:ei.textContent,Qi=!0)),L=Br(d,b),0<L.length&&(b=new $d(b,e,null,i,g),p.push({event:b,listeners:L}),C?b.data=C:(C=l0(i),C!==null&&(b.data=C)))),(C=$h?Th(e,i):Nh(e,i))&&(d=Br(d,"onBeforeInput"),0<d.length&&(g=new $d("onBeforeInput","beforeinput",null,i,g),p.push({event:g,listeners:d}),g.data=C))}j0(p,n)})}function xt(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Br(e,n){for(var i=n+"Capture",a=[];e!==null;){var t=e,r=t.stateNode;t.tag===5&&r!==null&&(t=r,r=mt(e,i),r!=null&&a.unshift(xt(e,r,t)),r=mt(e,n),r!=null&&a.push(xt(e,r,t))),e=e.return}return a}function Ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _d(e,n,i,a,t){for(var r=n._reactName,l=[];i!==null&&i!==a;){var s=i,c=s.alternate,d=s.stateNode;if(c!==null&&c===a)break;s.tag===5&&d!==null&&(s=d,t?(c=mt(i,r),c!=null&&l.unshift(xt(i,c,s))):t||(c=mt(i,r),c!=null&&l.push(xt(i,c,s)))),i=i.return}l.length!==0&&e.push({event:n,listeners:l})}var Vh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(Vh,`
`).replace(Uh,"")}function nr(e,n,i){if(n=Bd(n),Bd(e)!==n&&i)throw Error(N(425))}function Ar(){}var ls=null,ss=null;function cs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ds=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(Qh)}:ds;function Qh(e){setTimeout(function(){throw e})}function fl(e,n){var i=n,a=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){e.removeChild(t),vt(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=t}while(i);vt(n)}function oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Ka=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ka,yt="__reactProps$"+Ka,An="__reactContainer$"+Ka,us="__reactEvents$"+Ka,qh="__reactListeners$"+Ka,Zh="__reactHandles$"+Ka;function yi(e){var n=e[$n];if(n)return n;for(var i=e.parentNode;i;){if(n=i[An]||i[$n]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Id(e);e!==null;){if(i=e[$n])return i;e=Id(e)}return n}e=i,i=e.parentNode}return null}function zt(e){return e=e[$n]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function yo(e){return e[yt]||null}var gs=[],Yi=-1;function hi(e){return{current:e}}function ae(e){0>Yi||(e.current=gs[Yi],gs[Yi]=null,Yi--)}function Y(e,n){Yi++,gs[Yi]=e.current,e.current=n}var pi={},He=hi(pi),Ue=hi(!1),Ni=pi;function ma(e,n){var i=e.type.contextTypes;if(!i)return pi;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var t={},r;for(r in i)t[r]=n[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function Xe(e){return e=e.childContextTypes,e!=null}function Ir(){ae(Ue),ae(He)}function Vd(e,n,i){if(He.current!==pi)throw Error(N(168));Y(He,n),Y(Ue,i)}function x0(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var t in a)if(!(t in n))throw Error(N(108,Ef(e)||"Unknown",t));return se({},i,a)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pi,Ni=He.current,Y(He,e),Y(Ue,Ue.current),!0}function Ud(e,n,i){var a=e.stateNode;if(!a)throw Error(N(169));i?(e=x0(e,n,Ni),a.__reactInternalMemoizedMergedChildContext=e,ae(Ue),ae(He),Y(He,e)):ae(Ue),Y(Ue,i)}var Dn=null,ko=!1,hl=!1;function y0(e){Dn===null?Dn=[e]:Dn.push(e)}function Gh(e){ko=!0,y0(e)}function vi(){if(!hl&&Dn!==null){hl=!0;var e=0,n=Z;try{var i=Dn;for(Z=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Dn=null,ko=!1}catch(t){throw Dn!==null&&(Dn=Dn.slice(e+1)),Xg(lc,vi),t}finally{Z=n,hl=!1}}return null}var ea=[],na=0,Ur=null,Xr=0,on=[],ln=0,Si=null,Jn=1,Fn="";function ji(e,n){ea[na++]=Xr,ea[na++]=Ur,Ur=e,Xr=n}function k0(e,n,i){on[ln++]=Jn,on[ln++]=Fn,on[ln++]=Si,Si=e;var a=Jn;e=Fn;var t=32-wn(a)-1;a&=~(1<<t),i+=1;var r=32-wn(n)+t;if(30<r){var l=t-t%5;r=(a&(1<<l)-1).toString(32),a>>=l,t-=l,Jn=1<<32-wn(n)+t|i<<t|a,Fn=r+e}else Jn=1<<r|i<<t|a,Fn=e}function hc(e){e.return!==null&&(ji(e,1),k0(e,1,0))}function vc(e){for(;e===Ur;)Ur=ea[--na],ea[na]=null,Xr=ea[--na],ea[na]=null;for(;e===Si;)Si=on[--ln],on[ln]=null,Fn=on[--ln],on[ln]=null,Jn=on[--ln],on[ln]=null}var Ye=null,Ze=null,te=!1,hn=null;function P0(e,n){var i=sn(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Xd(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ye=e,Ze=oi(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ye=e,Ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Si!==null?{id:Jn,overflow:Fn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=sn(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Ye=e,Ze=null,!0):!1;default:return!1}}function ps(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ms(e){if(te){var n=Ze;if(n){var i=n;if(!Xd(e,n)){if(ps(e))throw Error(N(418));n=oi(i.nextSibling);var a=Ye;n&&Xd(e,n)?P0(a,i):(e.flags=e.flags&-4097|2,te=!1,Ye=e)}}else{if(ps(e))throw Error(N(418));e.flags=e.flags&-4097|2,te=!1,Ye=e}}}function Wd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function ir(e){if(e!==Ye)return!1;if(!te)return Wd(e),te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!cs(e.type,e.memoizedProps)),n&&(n=Ze)){if(ps(e))throw C0(),Error(N(418));for(;n;)P0(e,n),n=oi(n.nextSibling)}if(Wd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Ze=oi(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Ze=null}}else Ze=Ye?oi(e.stateNode.nextSibling):null;return!0}function C0(){for(var e=Ze;e;)e=oi(e.nextSibling)}function fa(){Ze=Ye=null,te=!1}function wc(e){hn===null?hn=[e]:hn.push(e)}var Yh=Xn.ReactCurrentBatchConfig;function Da(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(N(309));var a=i.stateNode}if(!a)throw Error(N(147,e));var t=a,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(l){var s=t.refs;l===null?delete s[r]:s[r]=l},n._stringRef=r,n)}if(typeof e!="string")throw Error(N(284));if(!i._owner)throw Error(N(290,e))}return e}function ar(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Qd(e){var n=e._init;return n(e._payload)}function L0(e){function n(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function i(f,h){if(!e)return null;for(;h!==null;)n(f,h),h=h.sibling;return null}function a(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function t(f,h){return f=di(f,h),f.index=0,f.sibling=null,f}function r(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,v,R){return h===null||h.tag!==6?(h=kl(v,f.mode,R),h.return=f,h):(h=t(h,v),h.return=f,h)}function c(f,h,v,R){var P=v.type;return P===Wi?g(f,h,v.props.children,R,v.key):h!==null&&(h.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qn&&Qd(P)===h.type)?(R=t(h,v.props),R.ref=Da(f,h,v),R.return=f,R):(R=Kr(v.type,v.key,v.props,null,f.mode,R),R.ref=Da(f,h,v),R.return=f,R)}function d(f,h,v,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Pl(v,f.mode,R),h.return=f,h):(h=t(h,v.children||[]),h.return=f,h)}function g(f,h,v,R,P){return h===null||h.tag!==7?(h=bi(v,f.mode,R,P),h.return=f,h):(h=t(h,v),h.return=f,h)}function p(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=kl(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ut:return v=Kr(h.type,h.key,h.props,null,f.mode,v),v.ref=Da(f,null,h),v.return=f,v;case Xi:return h=Pl(h,f.mode,v),h.return=f,h;case qn:var R=h._init;return p(f,R(h._payload),v)}if(qa(h)||Oa(h))return h=bi(h,f.mode,v,null),h.return=f,h;ar(f,h)}return null}function m(f,h,v,R){var P=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(f,h,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ut:return v.key===P?c(f,h,v,R):null;case Xi:return v.key===P?d(f,h,v,R):null;case qn:return P=v._init,m(f,h,P(v._payload),R)}if(qa(v)||Oa(v))return P!==null?null:g(f,h,v,R,null);ar(f,v)}return null}function u(f,h,v,R,P){if(typeof R=="string"&&R!==""||typeof R=="number")return f=f.get(v)||null,s(h,f,""+R,P);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ut:return f=f.get(R.key===null?v:R.key)||null,c(h,f,R,P);case Xi:return f=f.get(R.key===null?v:R.key)||null,d(h,f,R,P);case qn:var L=R._init;return u(f,h,v,L(R._payload),P)}if(qa(R)||Oa(R))return f=f.get(v)||null,g(h,f,R,P,null);ar(h,R)}return null}function j(f,h,v,R){for(var P=null,L=null,C=h,b=h=0,T=null;C!==null&&b<v.length;b++){C.index>b?(T=C,C=null):T=C.sibling;var z=m(f,C,v[b],R);if(z===null){C===null&&(C=T);break}e&&C&&z.alternate===null&&n(f,C),h=r(z,h,b),L===null?P=z:L.sibling=z,L=z,C=T}if(b===v.length)return i(f,C),te&&ji(f,b),P;if(C===null){for(;b<v.length;b++)C=p(f,v[b],R),C!==null&&(h=r(C,h,b),L===null?P=C:L.sibling=C,L=C);return te&&ji(f,b),P}for(C=a(f,C);b<v.length;b++)T=u(C,f,b,v[b],R),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?b:T.key),h=r(T,h,b),L===null?P=T:L.sibling=T,L=T);return e&&C.forEach(function(G){return n(f,G)}),te&&ji(f,b),P}function x(f,h,v,R){var P=Oa(v);if(typeof P!="function")throw Error(N(150));if(v=P.call(v),v==null)throw Error(N(151));for(var L=P=null,C=h,b=h=0,T=null,z=v.next();C!==null&&!z.done;b++,z=v.next()){C.index>b?(T=C,C=null):T=C.sibling;var G=m(f,C,z.value,R);if(G===null){C===null&&(C=T);break}e&&C&&G.alternate===null&&n(f,C),h=r(G,h,b),L===null?P=G:L.sibling=G,L=G,C=T}if(z.done)return i(f,C),te&&ji(f,b),P;if(C===null){for(;!z.done;b++,z=v.next())z=p(f,z.value,R),z!==null&&(h=r(z,h,b),L===null?P=z:L.sibling=z,L=z);return te&&ji(f,b),P}for(C=a(f,C);!z.done;b++,z=v.next())z=u(C,f,b,z.value,R),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?b:z.key),h=r(z,h,b),L===null?P=z:L.sibling=z,L=z);return e&&C.forEach(function(Te){return n(f,Te)}),te&&ji(f,b),P}function k(f,h,v,R){if(typeof v=="object"&&v!==null&&v.type===Wi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ut:e:{for(var P=v.key,L=h;L!==null;){if(L.key===P){if(P=v.type,P===Wi){if(L.tag===7){i(f,L.sibling),h=t(L,v.props.children),h.return=f,f=h;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qn&&Qd(P)===L.type){i(f,L.sibling),h=t(L,v.props),h.ref=Da(f,L,v),h.return=f,f=h;break e}i(f,L);break}else n(f,L);L=L.sibling}v.type===Wi?(h=bi(v.props.children,f.mode,R,v.key),h.return=f,f=h):(R=Kr(v.type,v.key,v.props,null,f.mode,R),R.ref=Da(f,h,v),R.return=f,f=R)}return l(f);case Xi:e:{for(L=v.key;h!==null;){if(h.key===L)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){i(f,h.sibling),h=t(h,v.children||[]),h.return=f,f=h;break e}else{i(f,h);break}else n(f,h);h=h.sibling}h=Pl(v,f.mode,R),h.return=f,f=h}return l(f);case qn:return L=v._init,k(f,h,L(v._payload),R)}if(qa(v))return j(f,h,v,R);if(Oa(v))return x(f,h,v,R);ar(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(i(f,h.sibling),h=t(h,v),h.return=f,f=h):(i(f,h),h=kl(v,f.mode,R),h.return=f,f=h),l(f)):i(f,h)}return k}var ha=L0(!0),b0=L0(!1),Wr=hi(null),Qr=null,ia=null,jc=null;function Rc(){jc=ia=Qr=null}function xc(e){var n=Wr.current;ae(Wr),e._currentValue=n}function fs(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function da(e,n){Qr=e,jc=ia=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ie=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(jc!==e)if(e={context:e,memoizedValue:n,next:null},ia===null){if(Qr===null)throw Error(N(308));ia=e,Qr.dependencies={lanes:0,firstContext:e}}else ia=ia.next=e;return n}var ki=null;function yc(e){ki===null?ki=[e]:ki.push(e)}function K0(e,n,i,a){var t=n.interleaved;return t===null?(i.next=i,yc(n)):(i.next=t.next,t.next=i),n.interleaved=i,In(e,a)}function In(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Zn=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function li(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,V&2){var t=a.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n,In(e,i)}return t=a.interleaved,t===null?(n.next=n,yc(a)):(n.next=t.next,t.next=n),a.interleaved=n,In(e,i)}function yr(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,sc(e,i)}}function qd(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var t=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?t=r=l:r=r.next=l,i=i.next}while(i!==null);r===null?t=r=n:r=r.next=n}else t=r=n;i={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function qr(e,n,i,a){var t=e.updateQueue;Zn=!1;var r=t.firstBaseUpdate,l=t.lastBaseUpdate,s=t.shared.pending;if(s!==null){t.shared.pending=null;var c=s,d=c.next;c.next=null,l===null?r=d:l.next=d,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=c))}if(r!==null){var p=t.baseState;l=0,g=d=c=null,s=r;do{var m=s.lane,u=s.eventTime;if((a&m)===m){g!==null&&(g=g.next={eventTime:u,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var j=e,x=s;switch(m=n,u=i,x.tag){case 1:if(j=x.payload,typeof j=="function"){p=j.call(u,p,m);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=x.payload,m=typeof j=="function"?j.call(u,p,m):j,m==null)break e;p=se({},p,m);break e;case 2:Zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=t.effects,m===null?t.effects=[s]:m.push(s))}else u={eventTime:u,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=u,c=p):g=g.next=u,l|=m;if(s=s.next,s===null){if(s=t.shared.pending,s===null)break;m=s,s=m.next,m.next=null,t.lastBaseUpdate=m,t.shared.pending=null}}while(!0);if(g===null&&(c=p),t.baseState=c,t.firstBaseUpdate=d,t.lastBaseUpdate=g,n=t.shared.interleaved,n!==null){t=n;do l|=t.lane,t=t.next;while(t!==n)}else r===null&&(t.shared.lanes=0);Mi|=l,e.lanes=l,e.memoizedState=p}}function Zd(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],t=a.callback;if(t!==null){if(a.callback=null,a=i,typeof t!="function")throw Error(N(191,t));t.call(a)}}}var Dt={},Sn=hi(Dt),kt=hi(Dt),Pt=hi(Dt);function Pi(e){if(e===Dt)throw Error(N(174));return e}function Pc(e,n){switch(Y(Pt,n),Y(kt,e),Y(Sn,Dt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ql(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ql(n,e)}ae(Sn),Y(Sn,n)}function va(){ae(Sn),ae(kt),ae(Pt)}function T0(e){Pi(Pt.current);var n=Pi(Sn.current),i=Ql(n,e.type);n!==i&&(Y(kt,e),Y(Sn,i))}function Cc(e){kt.current===e&&(ae(Sn),ae(kt))}var oe=hi(0);function Zr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vl=[];function Lc(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var kr=Xn.ReactCurrentDispatcher,wl=Xn.ReactCurrentBatchConfig,Oi=0,le=null,xe=null,ke=null,Gr=!1,lt=!1,Ct=0,e2=0;function Ne(){throw Error(N(321))}function bc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!yn(e[i],n[i]))return!1;return!0}function Kc(e,n,i,a,t,r){if(Oi=r,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,kr.current=e===null||e.memoizedState===null?t2:r2,e=i(a,t),lt){r=0;do{if(lt=!1,Ct=0,25<=r)throw Error(N(301));r+=1,ke=xe=null,n.updateQueue=null,kr.current=o2,e=i(a,t)}while(lt)}if(kr.current=Yr,n=xe!==null&&xe.next!==null,Oi=0,ke=xe=le=null,Gr=!1,n)throw Error(N(300));return e}function $c(){var e=Ct!==0;return Ct=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?le.memoizedState=ke=e:ke=ke.next=e,ke}function un(){if(xe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=ke===null?le.memoizedState:ke.next;if(n!==null)ke=n,xe=e;else{if(e===null)throw Error(N(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ke===null?le.memoizedState=ke=e:ke=ke.next=e}return ke}function Lt(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=un(),i=n.queue;if(i===null)throw Error(N(311));i.lastRenderedReducer=e;var a=xe,t=a.baseQueue,r=i.pending;if(r!==null){if(t!==null){var l=t.next;t.next=r.next,r.next=l}a.baseQueue=t=r,i.pending=null}if(t!==null){r=t.next,a=a.baseState;var s=l=null,c=null,d=r;do{var g=d.lane;if((Oi&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var p={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=p,l=a):c=c.next=p,le.lanes|=g,Mi|=g}d=d.next}while(d!==null&&d!==r);c===null?l=a:c.next=s,yn(a,n.memoizedState)||(Ie=!0),n.memoizedState=a,n.baseState=l,n.baseQueue=c,i.lastRenderedState=a}if(e=i.interleaved,e!==null){t=e;do r=t.lane,le.lanes|=r,Mi|=r,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Rl(e){var n=un(),i=n.queue;if(i===null)throw Error(N(311));i.lastRenderedReducer=e;var a=i.dispatch,t=i.pending,r=n.memoizedState;if(t!==null){i.pending=null;var l=t=t.next;do r=e(r,l.action),l=l.next;while(l!==t);yn(r,n.memoizedState)||(Ie=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),i.lastRenderedState=r}return[r,a]}function N0(){}function S0(e,n){var i=le,a=un(),t=n(),r=!yn(a.memoizedState,t);if(r&&(a.memoizedState=t,Ie=!0),a=a.queue,Tc(E0.bind(null,i,a,e),[e]),a.getSnapshot!==n||r||ke!==null&&ke.memoizedState.tag&1){if(i.flags|=2048,bt(9,M0.bind(null,i,a,t,n),void 0,null),Ce===null)throw Error(N(349));Oi&30||O0(i,n,t)}return t}function O0(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function M0(e,n,i,a){n.value=i,n.getSnapshot=a,H0(n)&&z0(e)}function E0(e,n,i){return i(function(){H0(n)&&z0(e)})}function H0(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!yn(e,i)}catch{return!0}}function z0(e){var n=In(e,1);n!==null&&jn(n,e,1,-1)}function Gd(e){var n=bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},n.queue=e,e=e.dispatch=a2.bind(null,le,e),[n.memoizedState,e]}function bt(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function D0(){return un().memoizedState}function Pr(e,n,i,a){var t=bn();le.flags|=e,t.memoizedState=bt(1|n,i,void 0,a===void 0?null:a)}function Po(e,n,i,a){var t=un();a=a===void 0?null:a;var r=void 0;if(xe!==null){var l=xe.memoizedState;if(r=l.destroy,a!==null&&bc(a,l.deps)){t.memoizedState=bt(n,i,r,a);return}}le.flags|=e,t.memoizedState=bt(1|n,i,r,a)}function Yd(e,n){return Pr(8390656,8,e,n)}function Tc(e,n){return Po(2048,8,e,n)}function J0(e,n){return Po(4,2,e,n)}function F0(e,n){return Po(4,4,e,n)}function _0(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function B0(e,n,i){return i=i!=null?i.concat([e]):null,Po(4,4,_0.bind(null,n,e),i)}function Nc(){}function A0(e,n){var i=un();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&bc(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function I0(e,n){var i=un();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&bc(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function V0(e,n,i){return Oi&21?(yn(i,n)||(i=qg(),le.lanes|=i,Mi|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=i)}function n2(e,n){var i=Z;Z=i!==0&&4>i?i:4,e(!0);var a=wl.transition;wl.transition={};try{e(!1),n()}finally{Z=i,wl.transition=a}}function U0(){return un().memoizedState}function i2(e,n,i){var a=ci(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},X0(e))W0(n,i);else if(i=K0(e,n,i,a),i!==null){var t=Je();jn(i,e,a,t),Q0(i,n,a)}}function a2(e,n,i){var a=ci(e),t={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(X0(e))W0(n,t);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var l=n.lastRenderedState,s=r(l,i);if(t.hasEagerState=!0,t.eagerState=s,yn(s,l)){var c=n.interleaved;c===null?(t.next=t,yc(n)):(t.next=c.next,c.next=t),n.interleaved=t;return}}catch{}finally{}i=K0(e,n,t,a),i!==null&&(t=Je(),jn(i,e,a,t),Q0(i,n,a))}}function X0(e){var n=e.alternate;return e===le||n!==null&&n===le}function W0(e,n){lt=Gr=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Q0(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,sc(e,i)}}var Yr={readContext:dn,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},t2={readContext:dn,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Yd,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Pr(4194308,4,_0.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var i=bn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=bn();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=i2.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:Gd,useDebugValue:Nc,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Gd(!1),n=e[0];return e=n2.bind(null,e[1]),bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=le,t=bn();if(te){if(i===void 0)throw Error(N(407));i=i()}else{if(i=n(),Ce===null)throw Error(N(349));Oi&30||O0(a,n,i)}t.memoizedState=i;var r={value:i,getSnapshot:n};return t.queue=r,Yd(E0.bind(null,a,r,e),[e]),a.flags|=2048,bt(9,M0.bind(null,a,r,i,n),void 0,null),i},useId:function(){var e=bn(),n=Ce.identifierPrefix;if(te){var i=Fn,a=Jn;i=(a&~(1<<32-wn(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=Ct++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=e2++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},r2={readContext:dn,useCallback:A0,useContext:dn,useEffect:Tc,useImperativeHandle:B0,useInsertionEffect:J0,useLayoutEffect:F0,useMemo:I0,useReducer:jl,useRef:D0,useState:function(){return jl(Lt)},useDebugValue:Nc,useDeferredValue:function(e){var n=un();return V0(n,xe.memoizedState,e)},useTransition:function(){var e=jl(Lt)[0],n=un().memoizedState;return[e,n]},useMutableSource:N0,useSyncExternalStore:S0,useId:U0,unstable_isNewReconciler:!1},o2={readContext:dn,useCallback:A0,useContext:dn,useEffect:Tc,useImperativeHandle:B0,useInsertionEffect:J0,useLayoutEffect:F0,useMemo:I0,useReducer:Rl,useRef:D0,useState:function(){return Rl(Lt)},useDebugValue:Nc,useDeferredValue:function(e){var n=un();return xe===null?n.memoizedState=e:V0(n,xe.memoizedState,e)},useTransition:function(){var e=Rl(Lt)[0],n=un().memoizedState;return[e,n]},useMutableSource:N0,useSyncExternalStore:S0,useId:U0,unstable_isNewReconciler:!1};function mn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function hs(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:se({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Co={isMounted:function(e){return(e=e._reactInternals)?Fi(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=Je(),t=ci(e),r=_n(a,t);r.payload=n,i!=null&&(r.callback=i),n=li(e,r,t),n!==null&&(jn(n,e,t,a),yr(n,e,t))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=Je(),t=ci(e),r=_n(a,t);r.tag=1,r.payload=n,i!=null&&(r.callback=i),n=li(e,r,t),n!==null&&(jn(n,e,t,a),yr(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Je(),a=ci(e),t=_n(i,a);t.tag=2,n!=null&&(t.callback=n),n=li(e,t,a),n!==null&&(jn(n,e,a,i),yr(n,e,a))}};function eu(e,n,i,a,t,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,l):n.prototype&&n.prototype.isPureReactComponent?!jt(i,a)||!jt(t,r):!0}function q0(e,n,i){var a=!1,t=pi,r=n.contextType;return typeof r=="object"&&r!==null?r=dn(r):(t=Xe(n)?Ni:He.current,a=n.contextTypes,r=(a=a!=null)?ma(e,t):pi),n=new n(i,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Co,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),n}function nu(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&Co.enqueueReplaceState(n,n.state,null)}function vs(e,n,i,a){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs={},kc(e);var r=n.contextType;typeof r=="object"&&r!==null?t.context=dn(r):(r=Xe(n)?Ni:He.current,t.context=ma(e,r)),t.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(hs(e,n,r,i),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&Co.enqueueReplaceState(t,t.state,null),qr(e,i,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function wa(e,n){try{var i="",a=n;do i+=Mf(a),a=a.return;while(a);var t=i}catch(r){t=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:t,digest:null}}function xl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function ws(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var l2=typeof WeakMap=="function"?WeakMap:Map;function Z0(e,n,i){i=_n(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){no||(no=!0,Ks=a),ws(e,n)},i}function G0(e,n,i){i=_n(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=n.value;i.payload=function(){return a(t)},i.callback=function(){ws(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){ws(e,n),typeof a!="function"&&(si===null?si=new Set([this]):si.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),i}function iu(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new l2;var t=new Set;a.set(n,t)}else t=a.get(n),t===void 0&&(t=new Set,a.set(n,t));t.has(i)||(t.add(i),e=x2.bind(null,e,n,i),n.then(e,e))}function au(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function tu(e,n,i,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=_n(-1,1),n.tag=2,li(i,n,1))),i.lanes|=1),e)}var s2=Xn.ReactCurrentOwner,Ie=!1;function De(e,n,i,a){n.child=e===null?b0(n,null,i,a):ha(n,e.child,i,a)}function ru(e,n,i,a,t){i=i.render;var r=n.ref;return da(n,t),a=Kc(e,n,i,a,r,t),i=$c(),e!==null&&!Ie?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Vn(e,n,t)):(te&&i&&hc(n),n.flags|=1,De(e,n,a,t),n.child)}function ou(e,n,i,a,t){if(e===null){var r=i.type;return typeof r=="function"&&!Jc(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=r,Y0(e,n,r,a,t)):(e=Kr(i.type,null,a,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&t)){var l=r.memoizedProps;if(i=i.compare,i=i!==null?i:jt,i(l,a)&&e.ref===n.ref)return Vn(e,n,t)}return n.flags|=1,e=di(r,a),e.ref=n.ref,e.return=n,n.child=e}function Y0(e,n,i,a,t){if(e!==null){var r=e.memoizedProps;if(jt(r,a)&&e.ref===n.ref)if(Ie=!1,n.pendingProps=a=r,(e.lanes&t)!==0)e.flags&131072&&(Ie=!0);else return n.lanes=e.lanes,Vn(e,n,t)}return js(e,n,i,a,t)}function ep(e,n,i){var a=n.pendingProps,t=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(ta,qe),qe|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(ta,qe),qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:i,Y(ta,qe),qe|=a}else r!==null?(a=r.baseLanes|i,n.memoizedState=null):a=i,Y(ta,qe),qe|=a;return De(e,n,t,i),n.child}function np(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function js(e,n,i,a,t){var r=Xe(i)?Ni:He.current;return r=ma(n,r),da(n,t),i=Kc(e,n,i,a,r,t),a=$c(),e!==null&&!Ie?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,Vn(e,n,t)):(te&&a&&hc(n),n.flags|=1,De(e,n,i,t),n.child)}function lu(e,n,i,a,t){if(Xe(i)){var r=!0;Vr(n)}else r=!1;if(da(n,t),n.stateNode===null)Cr(e,n),q0(n,i,a),vs(n,i,a,t),a=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var c=l.context,d=i.contextType;typeof d=="object"&&d!==null?d=dn(d):(d=Xe(i)?Ni:He.current,d=ma(n,d));var g=i.getDerivedStateFromProps,p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==a||c!==d)&&nu(n,l,a,d),Zn=!1;var m=n.memoizedState;l.state=m,qr(n,a,l,t),c=n.memoizedState,s!==a||m!==c||Ue.current||Zn?(typeof g=="function"&&(hs(n,i,g,a),c=n.memoizedState),(s=Zn||eu(n,i,s,a,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),l.props=a,l.state=c,l.context=d,a=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,$0(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:mn(n.type,s),l.props=d,p=n.pendingProps,m=l.context,c=i.contextType,typeof c=="object"&&c!==null?c=dn(c):(c=Xe(i)?Ni:He.current,c=ma(n,c));var u=i.getDerivedStateFromProps;(g=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||m!==c)&&nu(n,l,a,c),Zn=!1,m=n.memoizedState,l.state=m,qr(n,a,l,t);var j=n.memoizedState;s!==p||m!==j||Ue.current||Zn?(typeof u=="function"&&(hs(n,i,u,a),j=n.memoizedState),(d=Zn||eu(n,i,d,a,m,j,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,j,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=j),l.props=a,l.state=j,l.context=c,a=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return Rs(e,n,i,a,r,t)}function Rs(e,n,i,a,t,r){np(e,n);var l=(n.flags&128)!==0;if(!a&&!l)return t&&Ud(n,i,!1),Vn(e,n,r);a=n.stateNode,s2.current=n;var s=l&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&l?(n.child=ha(n,e.child,null,r),n.child=ha(n,null,s,r)):De(e,n,s,r),n.memoizedState=a.state,t&&Ud(n,i,!0),n.child}function ip(e){var n=e.stateNode;n.pendingContext?Vd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vd(e,n.context,!1),Pc(e,n.containerInfo)}function su(e,n,i,a,t){return fa(),wc(t),n.flags|=256,De(e,n,i,a),n.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function ap(e,n,i){var a=n.pendingProps,t=oe.current,r=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(t&2)!==0),s?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),Y(oe,t&1),e===null)return ms(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=a.children,e=a.fallback,r?(a=n.mode,r=n.child,l={mode:"hidden",children:l},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=Ko(l,a,0,null),e=bi(e,a,i,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ys(i),n.memoizedState=xs,e):Sc(n,l));if(t=e.memoizedState,t!==null&&(s=t.dehydrated,s!==null))return c2(e,n,l,a,s,t,i);if(r){r=a.fallback,l=n.mode,t=e.child,s=t.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&n.child!==t?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=di(t,c),a.subtreeFlags=t.subtreeFlags&14680064),s!==null?r=di(s,r):(r=bi(r,l,i,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,a=r,r=n.child,l=e.child.memoizedState,l=l===null?ys(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=e.childLanes&~i,n.memoizedState=xs,a}return r=e.child,e=r.sibling,a=di(r,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function Sc(e,n){return n=Ko({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function tr(e,n,i,a){return a!==null&&wc(a),ha(n,e.child,null,i),e=Sc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function c2(e,n,i,a,t,r,l){if(i)return n.flags&256?(n.flags&=-257,a=xl(Error(N(422))),tr(e,n,l,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=a.fallback,t=n.mode,a=Ko({mode:"visible",children:a.children},t,0,null),r=bi(r,t,l,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,n.mode&1&&ha(n,e.child,null,l),n.child.memoizedState=ys(l),n.memoizedState=xs,r);if(!(n.mode&1))return tr(e,n,l,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var s=a.dgst;return a=s,r=Error(N(419)),a=xl(r,a,void 0),tr(e,n,l,a)}if(s=(l&e.childLanes)!==0,Ie||s){if(a=Ce,a!==null){switch(l&-l){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|l)?0:t,t!==0&&t!==r.retryLane&&(r.retryLane=t,In(e,t),jn(a,e,t,-1))}return Dc(),a=xl(Error(N(421))),tr(e,n,l,a)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=y2.bind(null,e),t._reactRetry=n,null):(e=r.treeContext,Ze=oi(t.nextSibling),Ye=n,te=!0,hn=null,e!==null&&(on[ln++]=Jn,on[ln++]=Fn,on[ln++]=Si,Jn=e.id,Fn=e.overflow,Si=n),n=Sc(n,a.children),n.flags|=4096,n)}function cu(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),fs(e.return,n,i)}function yl(e,n,i,a,t){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:t}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=i,r.tailMode=t)}function tp(e,n,i){var a=n.pendingProps,t=a.revealOrder,r=a.tail;if(De(e,n,a.children,i),a=oe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,i,n);else if(e.tag===19)cu(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Y(oe,a),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(i=n.child,t=null;i!==null;)e=i.alternate,e!==null&&Zr(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=n.child,n.child=null):(t=i.sibling,i.sibling=null),yl(n,!1,t,i,r);break;case"backwards":for(i=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&Zr(e)===null){n.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}yl(n,!0,i,null,r);break;case"together":yl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Cr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Vn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Mi|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,i=di(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=di(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function d2(e,n,i){switch(n.tag){case 3:ip(n),fa();break;case 5:T0(n);break;case 1:Xe(n.type)&&Vr(n);break;case 4:Pc(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,t=n.memoizedProps.value;Y(Wr,a._currentValue),a._currentValue=t;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Y(oe,oe.current&1),n.flags|=128,null):i&n.child.childLanes?ap(e,n,i):(Y(oe,oe.current&1),e=Vn(e,n,i),e!==null?e.sibling:null);Y(oe,oe.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return tp(e,n,i);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),Y(oe,oe.current),a)break;return null;case 22:case 23:return n.lanes=0,ep(e,n,i)}return Vn(e,n,i)}var rp,ks,op,lp;rp=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};ks=function(){};op=function(e,n,i,a){var t=e.memoizedProps;if(t!==a){e=n.stateNode,Pi(Sn.current);var r=null;switch(i){case"input":t=Vl(e,t),a=Vl(e,a),r=[];break;case"select":t=se({},t,{value:void 0}),a=se({},a,{value:void 0}),r=[];break;case"textarea":t=Wl(e,t),a=Wl(e,a),r=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ar)}ql(i,a);var l;i=null;for(d in t)if(!a.hasOwnProperty(d)&&t.hasOwnProperty(d)&&t[d]!=null)if(d==="style"){var s=t[d];for(l in s)s.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(gt.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in a){var c=a[d];if(s=t!=null?t[d]:void 0,a.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(i||(i={}),i[l]=c[l])}else i||(r||(r=[]),r.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(r=r||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(gt.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ne("scroll",e),r||s===c||(r=[])):(r=r||[]).push(d,c))}i&&(r=r||[]).push("style",i);var d=r;(n.updateQueue=d)&&(n.flags|=4)}};lp=function(e,n,i,a){i!==a&&(n.flags|=4)};function Ja(e,n){if(!te)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Se(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function u2(e,n,i){var a=n.pendingProps;switch(vc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(n),null;case 1:return Xe(n.type)&&Ir(),Se(n),null;case 3:return a=n.stateNode,va(),ae(Ue),ae(He),Lc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,hn!==null&&(Ns(hn),hn=null))),ks(e,n),Se(n),null;case 5:Cc(n);var t=Pi(Pt.current);if(i=n.type,e!==null&&n.stateNode!=null)op(e,n,i,a,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(N(166));return Se(n),null}if(e=Pi(Sn.current),ir(n)){a=n.stateNode,i=n.type;var r=n.memoizedProps;switch(a[$n]=n,a[yt]=r,e=(n.mode&1)!==0,i){case"dialog":ne("cancel",a),ne("close",a);break;case"iframe":case"object":case"embed":ne("load",a);break;case"video":case"audio":for(t=0;t<Ga.length;t++)ne(Ga[t],a);break;case"source":ne("error",a);break;case"img":case"image":case"link":ne("error",a),ne("load",a);break;case"details":ne("toggle",a);break;case"input":wd(a,r),ne("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ne("invalid",a);break;case"textarea":Rd(a,r),ne("invalid",a)}ql(i,r),t=null;for(var l in r)if(r.hasOwnProperty(l)){var s=r[l];l==="children"?typeof s=="string"?a.textContent!==s&&(r.suppressHydrationWarning!==!0&&nr(a.textContent,s,e),t=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&nr(a.textContent,s,e),t=["children",""+s]):gt.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ne("scroll",a)}switch(i){case"input":Xt(a),jd(a,r,!0);break;case"textarea":Xt(a),xd(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Ar)}a=t,n.updateQueue=a,a!==null&&(n.flags|=4)}else{l=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eg(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(i,{is:a.is}):(e=l.createElement(i),i==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,i),e[$n]=n,e[yt]=a,rp(e,n,!1,!1),n.stateNode=e;e:{switch(l=Zl(i,a),i){case"dialog":ne("cancel",e),ne("close",e),t=a;break;case"iframe":case"object":case"embed":ne("load",e),t=a;break;case"video":case"audio":for(t=0;t<Ga.length;t++)ne(Ga[t],e);t=a;break;case"source":ne("error",e),t=a;break;case"img":case"image":case"link":ne("error",e),ne("load",e),t=a;break;case"details":ne("toggle",e),t=a;break;case"input":wd(e,a),t=Vl(e,a),ne("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=se({},a,{value:void 0}),ne("invalid",e);break;case"textarea":Rd(e,a),t=Wl(e,a),ne("invalid",e);break;default:t=a}ql(i,t),s=t;for(r in s)if(s.hasOwnProperty(r)){var c=s[r];r==="style"?Dg(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hg(e,c)):r==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&pt(e,c):typeof c=="number"&&pt(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(gt.hasOwnProperty(r)?c!=null&&r==="onScroll"&&ne("scroll",e):c!=null&&ic(e,r,c,l))}switch(i){case"input":Xt(e),jd(e,a,!1);break;case"textarea":Xt(e),xd(e);break;case"option":a.value!=null&&e.setAttribute("value",""+gi(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?oa(e,!!a.multiple,r,!1):a.defaultValue!=null&&oa(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Ar)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Se(n),null;case 6:if(e&&n.stateNode!=null)lp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(N(166));if(i=Pi(Pt.current),Pi(Sn.current),ir(n)){if(a=n.stateNode,i=n.memoizedProps,a[$n]=n,(r=a.nodeValue!==i)&&(e=Ye,e!==null))switch(e.tag){case 3:nr(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&nr(a.nodeValue,i,(e.mode&1)!==0)}r&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[$n]=n,n.stateNode=a}return Se(n),null;case 13:if(ae(oe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ze!==null&&n.mode&1&&!(n.flags&128))C0(),fa(),n.flags|=98560,r=!1;else if(r=ir(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(N(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(N(317));r[$n]=n}else fa(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Se(n),r=!1}else hn!==null&&(Ns(hn),hn=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?ye===0&&(ye=3):Dc())),n.updateQueue!==null&&(n.flags|=4),Se(n),null);case 4:return va(),ks(e,n),e===null&&Rt(n.stateNode.containerInfo),Se(n),null;case 10:return xc(n.type._context),Se(n),null;case 17:return Xe(n.type)&&Ir(),Se(n),null;case 19:if(ae(oe),r=n.memoizedState,r===null)return Se(n),null;if(a=(n.flags&128)!==0,l=r.rendering,l===null)if(a)Ja(r,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Zr(e),l!==null){for(n.flags|=128,Ja(r,!1),a=l.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)r=i,e=a,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,e=l.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Y(oe,oe.current&1|2),n.child}e=e.sibling}r.tail!==null&&pe()>ja&&(n.flags|=128,a=!0,Ja(r,!1),n.lanes=4194304)}else{if(!a)if(e=Zr(l),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ja(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!te)return Se(n),null}else 2*pe()-r.renderingStartTime>ja&&i!==1073741824&&(n.flags|=128,a=!0,Ja(r,!1),n.lanes=4194304);r.isBackwards?(l.sibling=n.child,n.child=l):(i=r.last,i!==null?i.sibling=l:n.child=l,r.last=l)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=pe(),n.sibling=null,i=oe.current,Y(oe,a?i&1|2:i&1),n):(Se(n),null);case 22:case 23:return zc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?qe&1073741824&&(Se(n),n.subtreeFlags&6&&(n.flags|=8192)):Se(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function g2(e,n){switch(vc(n),n.tag){case 1:return Xe(n.type)&&Ir(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(),ae(Ue),ae(He),Lc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Cc(n),null;case 13:if(ae(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));fa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(oe),null;case 4:return va(),null;case 10:return xc(n.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var rr=!1,Ee=!1,p2=typeof WeakSet=="function"?WeakSet:Set,H=null;function aa(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){ue(e,n,a)}else i.current=null}function Ps(e,n,i){try{i()}catch(a){ue(e,n,a)}}var du=!1;function m2(e,n){if(ls=Fr,e=g0(),fc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var t=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var l=0,s=-1,c=-1,d=0,g=0,p=e,m=null;n:for(;;){for(var u;p!==i||t!==0&&p.nodeType!==3||(s=l+t),p!==r||a!==0&&p.nodeType!==3||(c=l+a),p.nodeType===3&&(l+=p.nodeValue.length),(u=p.firstChild)!==null;)m=p,p=u;for(;;){if(p===e)break n;if(m===i&&++d===t&&(s=l),m===r&&++g===a&&(c=l),(u=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=u}i=s===-1||c===-1?null:{start:s,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(ss={focusedElem:e,selectionRange:i},Fr=!1,H=n;H!==null;)if(n=H,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,H=e;else for(;H!==null;){n=H;try{var j=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var x=j.memoizedProps,k=j.memoizedState,f=n.stateNode,h=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:mn(n.type,x),k);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(R){ue(n,n.return,R)}if(e=n.sibling,e!==null){e.return=n.return,H=e;break}H=n.return}return j=du,du=!1,j}function st(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var r=t.destroy;t.destroy=void 0,r!==void 0&&Ps(n,i,r)}t=t.next}while(t!==a)}}function Lo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function Cs(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function sp(e){var n=e.alternate;n!==null&&(e.alternate=null,sp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[$n],delete n[yt],delete n[us],delete n[qh],delete n[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cp(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Ar));else if(a!==4&&(e=e.child,e!==null))for(Ls(e,n,i),e=e.sibling;e!==null;)Ls(e,n,i),e=e.sibling}function bs(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(bs(e,n,i),e=e.sibling;e!==null;)bs(e,n,i),e=e.sibling}var be=null,fn=!1;function Wn(e,n,i){for(i=i.child;i!==null;)dp(e,n,i),i=i.sibling}function dp(e,n,i){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(wo,i)}catch{}switch(i.tag){case 5:Ee||aa(i,n);case 6:var a=be,t=fn;be=null,Wn(e,n,i),be=a,fn=t,be!==null&&(fn?(e=be,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):be.removeChild(i.stateNode));break;case 18:be!==null&&(fn?(e=be,i=i.stateNode,e.nodeType===8?fl(e.parentNode,i):e.nodeType===1&&fl(e,i),vt(e)):fl(be,i.stateNode));break;case 4:a=be,t=fn,be=i.stateNode.containerInfo,fn=!0,Wn(e,n,i),be=a,fn=t;break;case 0:case 11:case 14:case 15:if(!Ee&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var r=t,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&Ps(i,n,l),t=t.next}while(t!==a)}Wn(e,n,i);break;case 1:if(!Ee&&(aa(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(s){ue(i,n,s)}Wn(e,n,i);break;case 21:Wn(e,n,i);break;case 22:i.mode&1?(Ee=(a=Ee)||i.memoizedState!==null,Wn(e,n,i),Ee=a):Wn(e,n,i);break;default:Wn(e,n,i)}}function gu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new p2),n.forEach(function(a){var t=k2.bind(null,e,a);i.has(a)||(i.add(a),a.then(t,t))})}}function pn(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var t=i[a];try{var r=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,fn=!1;break e;case 3:be=s.stateNode.containerInfo,fn=!0;break e;case 4:be=s.stateNode.containerInfo,fn=!0;break e}s=s.return}if(be===null)throw Error(N(160));dp(r,l,t),be=null,fn=!1;var c=t.alternate;c!==null&&(c.return=null),t.return=null}catch(d){ue(t,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)up(n,e),n=n.sibling}function up(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(n,e),Pn(e),a&4){try{st(3,e,e.return),Lo(3,e)}catch(x){ue(e,e.return,x)}try{st(5,e,e.return)}catch(x){ue(e,e.return,x)}}break;case 1:pn(n,e),Pn(e),a&512&&i!==null&&aa(i,i.return);break;case 5:if(pn(n,e),Pn(e),a&512&&i!==null&&aa(i,i.return),e.flags&32){var t=e.stateNode;try{pt(t,"")}catch(x){ue(e,e.return,x)}}if(a&4&&(t=e.stateNode,t!=null)){var r=e.memoizedProps,l=i!==null?i.memoizedProps:r,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&Og(t,r),Zl(s,l);var d=Zl(s,r);for(l=0;l<c.length;l+=2){var g=c[l],p=c[l+1];g==="style"?Dg(t,p):g==="dangerouslySetInnerHTML"?Hg(t,p):g==="children"?pt(t,p):ic(t,g,p,d)}switch(s){case"input":Ul(t,r);break;case"textarea":Mg(t,r);break;case"select":var m=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!r.multiple;var u=r.value;u!=null?oa(t,!!r.multiple,u,!1):m!==!!r.multiple&&(r.defaultValue!=null?oa(t,!!r.multiple,r.defaultValue,!0):oa(t,!!r.multiple,r.multiple?[]:"",!1))}t[yt]=r}catch(x){ue(e,e.return,x)}}break;case 6:if(pn(n,e),Pn(e),a&4){if(e.stateNode===null)throw Error(N(162));t=e.stateNode,r=e.memoizedProps;try{t.nodeValue=r}catch(x){ue(e,e.return,x)}}break;case 3:if(pn(n,e),Pn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{vt(n.containerInfo)}catch(x){ue(e,e.return,x)}break;case 4:pn(n,e),Pn(e);break;case 13:pn(n,e),Pn(e),t=e.child,t.flags&8192&&(r=t.memoizedState!==null,t.stateNode.isHidden=r,!r||t.alternate!==null&&t.alternate.memoizedState!==null||(Ec=pe())),a&4&&gu(e);break;case 22:if(g=i!==null&&i.memoizedState!==null,e.mode&1?(Ee=(d=Ee)||g,pn(n,e),Ee=d):pn(n,e),Pn(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(H=e,g=e.child;g!==null;){for(p=H=g;H!==null;){switch(m=H,u=m.child,m.tag){case 0:case 11:case 14:case 15:st(4,m,m.return);break;case 1:aa(m,m.return);var j=m.stateNode;if(typeof j.componentWillUnmount=="function"){a=m,i=m.return;try{n=a,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(x){ue(a,i,x)}}break;case 5:aa(m,m.return);break;case 22:if(m.memoizedState!==null){mu(p);continue}}u!==null?(u.return=m,H=u):mu(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{t=p.stateNode,d?(r=t.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=zg("display",l))}catch(x){ue(e,e.return,x)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(x){ue(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pn(n,e),Pn(e),a&4&&gu(e);break;case 21:break;default:pn(n,e),Pn(e)}}function Pn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(cp(i)){var a=i;break e}i=i.return}throw Error(N(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(pt(t,""),a.flags&=-33);var r=uu(e);bs(e,r,t);break;case 3:case 4:var l=a.stateNode.containerInfo,s=uu(e);Ls(e,s,l);break;default:throw Error(N(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function f2(e,n,i){H=e,gp(e)}function gp(e,n,i){for(var a=(e.mode&1)!==0;H!==null;){var t=H,r=t.child;if(t.tag===22&&a){var l=t.memoizedState!==null||rr;if(!l){var s=t.alternate,c=s!==null&&s.memoizedState!==null||Ee;s=rr;var d=Ee;if(rr=l,(Ee=c)&&!d)for(H=t;H!==null;)l=H,c=l.child,l.tag===22&&l.memoizedState!==null?fu(t):c!==null?(c.return=l,H=c):fu(t);for(;r!==null;)H=r,gp(r),r=r.sibling;H=t,rr=s,Ee=d}pu(e)}else t.subtreeFlags&8772&&r!==null?(r.return=t,H=r):pu(e)}}function pu(e){for(;H!==null;){var n=H;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||Lo(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Ee)if(i===null)a.componentDidMount();else{var t=n.elementType===n.type?i.memoizedProps:mn(n.type,i.memoizedProps);a.componentDidUpdate(t,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Zd(n,r,a);break;case 3:var l=n.updateQueue;if(l!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Zd(n,l,i)}break;case 5:var s=n.stateNode;if(i===null&&n.flags&4){i=s;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&vt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ee||n.flags&512&&Cs(n)}catch(m){ue(n,n.return,m)}}if(n===e){H=null;break}if(i=n.sibling,i!==null){i.return=n.return,H=i;break}H=n.return}}function mu(e){for(;H!==null;){var n=H;if(n===e){H=null;break}var i=n.sibling;if(i!==null){i.return=n.return,H=i;break}H=n.return}}function fu(e){for(;H!==null;){var n=H;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Lo(4,n)}catch(c){ue(n,i,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var t=n.return;try{a.componentDidMount()}catch(c){ue(n,t,c)}}var r=n.return;try{Cs(n)}catch(c){ue(n,r,c)}break;case 5:var l=n.return;try{Cs(n)}catch(c){ue(n,l,c)}}}catch(c){ue(n,n.return,c)}if(n===e){H=null;break}var s=n.sibling;if(s!==null){s.return=n.return,H=s;break}H=n.return}}var h2=Math.ceil,eo=Xn.ReactCurrentDispatcher,Oc=Xn.ReactCurrentOwner,cn=Xn.ReactCurrentBatchConfig,V=0,Ce=null,we=null,Ke=0,qe=0,ta=hi(0),ye=0,Kt=null,Mi=0,bo=0,Mc=0,ct=null,Ae=null,Ec=0,ja=1/0,Hn=null,no=!1,Ks=null,si=null,or=!1,ni=null,io=0,dt=0,$s=null,Lr=-1,br=0;function Je(){return V&6?pe():Lr!==-1?Lr:Lr=pe()}function ci(e){return e.mode&1?V&2&&Ke!==0?Ke&-Ke:Yh.transition!==null?(br===0&&(br=qg()),br):(e=Z,e!==0||(e=window.event,e=e===void 0?16:a0(e.type)),e):1}function jn(e,n,i,a){if(50<dt)throw dt=0,$s=null,Error(N(185));Et(e,i,a),(!(V&2)||e!==Ce)&&(e===Ce&&(!(V&2)&&(bo|=i),ye===4&&Yn(e,Ke)),We(e,a),i===1&&V===0&&!(n.mode&1)&&(ja=pe()+500,ko&&vi()))}function We(e,n){var i=e.callbackNode;Yf(e,n);var a=Jr(e,e===Ce?Ke:0);if(a===0)i!==null&&Pd(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&Pd(i),n===1)e.tag===0?Gh(hu.bind(null,e)):y0(hu.bind(null,e)),Wh(function(){!(V&6)&&vi()}),i=null;else{switch(Zg(a)){case 1:i=lc;break;case 4:i=Wg;break;case 16:i=Dr;break;case 536870912:i=Qg;break;default:i=Dr}i=Rp(i,pp.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function pp(e,n){if(Lr=-1,br=0,V&6)throw Error(N(327));var i=e.callbackNode;if(ua()&&e.callbackNode!==i)return null;var a=Jr(e,e===Ce?Ke:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=ao(e,a);else{n=a;var t=V;V|=2;var r=fp();(Ce!==e||Ke!==n)&&(Hn=null,ja=pe()+500,Li(e,n));do try{j2();break}catch(s){mp(e,s)}while(!0);Rc(),eo.current=r,V=t,we!==null?n=0:(Ce=null,Ke=0,n=ye)}if(n!==0){if(n===2&&(t=is(e),t!==0&&(a=t,n=Ts(e,t))),n===1)throw i=Kt,Li(e,0),Yn(e,a),We(e,pe()),i;if(n===6)Yn(e,a);else{if(t=e.current.alternate,!(a&30)&&!v2(t)&&(n=ao(e,a),n===2&&(r=is(e),r!==0&&(a=r,n=Ts(e,r))),n===1))throw i=Kt,Li(e,0),Yn(e,a),We(e,pe()),i;switch(e.finishedWork=t,e.finishedLanes=a,n){case 0:case 1:throw Error(N(345));case 2:Ri(e,Ae,Hn);break;case 3:if(Yn(e,a),(a&130023424)===a&&(n=Ec+500-pe(),10<n)){if(Jr(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){Je(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=ds(Ri.bind(null,e,Ae,Hn),n);break}Ri(e,Ae,Hn);break;case 4:if(Yn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,t=-1;0<a;){var l=31-wn(a);r=1<<l,l=n[l],l>t&&(t=l),a&=~r}if(a=t,a=pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*h2(a/1960))-a,10<a){e.timeoutHandle=ds(Ri.bind(null,e,Ae,Hn),a);break}Ri(e,Ae,Hn);break;case 5:Ri(e,Ae,Hn);break;default:throw Error(N(329))}}}return We(e,pe()),e.callbackNode===i?pp.bind(null,e):null}function Ts(e,n){var i=ct;return e.current.memoizedState.isDehydrated&&(Li(e,n).flags|=256),e=ao(e,n),e!==2&&(n=Ae,Ae=i,n!==null&&Ns(n)),e}function Ns(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function v2(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var t=i[a],r=t.getSnapshot;t=t.value;try{if(!yn(r(),t))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yn(e,n){for(n&=~Mc,n&=~bo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-wn(n),a=1<<i;e[i]=-1,n&=~a}}function hu(e){if(V&6)throw Error(N(327));ua();var n=Jr(e,0);if(!(n&1))return We(e,pe()),null;var i=ao(e,n);if(e.tag!==0&&i===2){var a=is(e);a!==0&&(n=a,i=Ts(e,a))}if(i===1)throw i=Kt,Li(e,0),Yn(e,n),We(e,pe()),i;if(i===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ri(e,Ae,Hn),We(e,pe()),null}function Hc(e,n){var i=V;V|=1;try{return e(n)}finally{V=i,V===0&&(ja=pe()+500,ko&&vi())}}function Ei(e){ni!==null&&ni.tag===0&&!(V&6)&&ua();var n=V;V|=1;var i=cn.transition,a=Z;try{if(cn.transition=null,Z=1,e)return e()}finally{Z=a,cn.transition=i,V=n,!(V&6)&&vi()}}function zc(){qe=ta.current,ae(ta)}function Li(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Xh(i)),we!==null)for(i=we.return;i!==null;){var a=i;switch(vc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ir();break;case 3:va(),ae(Ue),ae(He),Lc();break;case 5:Cc(a);break;case 4:va();break;case 13:ae(oe);break;case 19:ae(oe);break;case 10:xc(a.type._context);break;case 22:case 23:zc()}i=i.return}if(Ce=e,we=e=di(e.current,null),Ke=qe=n,ye=0,Kt=null,Mc=bo=Mi=0,Ae=ct=null,ki!==null){for(n=0;n<ki.length;n++)if(i=ki[n],a=i.interleaved,a!==null){i.interleaved=null;var t=a.next,r=i.pending;if(r!==null){var l=r.next;r.next=t,a.next=l}i.pending=a}ki=null}return e}function mp(e,n){do{var i=we;try{if(Rc(),kr.current=Yr,Gr){for(var a=le.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Gr=!1}if(Oi=0,ke=xe=le=null,lt=!1,Ct=0,Oc.current=null,i===null||i.return===null){ye=1,Kt=n,we=null;break}e:{var r=e,l=i.return,s=i,c=n;if(n=Ke,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=s,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var u=au(l);if(u!==null){u.flags&=-257,tu(u,l,s,r,n),u.mode&1&&iu(r,d,n),n=u,c=d;var j=n.updateQueue;if(j===null){var x=new Set;x.add(c),n.updateQueue=x}else j.add(c);break e}else{if(!(n&1)){iu(r,d,n),Dc();break e}c=Error(N(426))}}else if(te&&s.mode&1){var k=au(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),tu(k,l,s,r,n),wc(wa(c,s));break e}}r=c=wa(c,s),ye!==4&&(ye=2),ct===null?ct=[r]:ct.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var f=Z0(r,c,n);qd(r,f);break e;case 1:s=c;var h=r.type,v=r.stateNode;if(!(r.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(si===null||!si.has(v)))){r.flags|=65536,n&=-n,r.lanes|=n;var R=G0(r,s,n);qd(r,R);break e}}r=r.return}while(r!==null)}vp(i)}catch(P){n=P,we===i&&i!==null&&(we=i=i.return);continue}break}while(!0)}function fp(){var e=eo.current;return eo.current=Yr,e===null?Yr:e}function Dc(){(ye===0||ye===3||ye===2)&&(ye=4),Ce===null||!(Mi&268435455)&&!(bo&268435455)||Yn(Ce,Ke)}function ao(e,n){var i=V;V|=2;var a=fp();(Ce!==e||Ke!==n)&&(Hn=null,Li(e,n));do try{w2();break}catch(t){mp(e,t)}while(!0);if(Rc(),V=i,eo.current=a,we!==null)throw Error(N(261));return Ce=null,Ke=0,ye}function w2(){for(;we!==null;)hp(we)}function j2(){for(;we!==null&&!If();)hp(we)}function hp(e){var n=jp(e.alternate,e,qe);e.memoizedProps=e.pendingProps,n===null?vp(e):we=n,Oc.current=null}function vp(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=g2(i,n),i!==null){i.flags&=32767,we=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,we=null;return}}else if(i=u2(i,n,qe),i!==null){we=i;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);ye===0&&(ye=5)}function Ri(e,n,i){var a=Z,t=cn.transition;try{cn.transition=null,Z=1,R2(e,n,i,a)}finally{cn.transition=t,Z=a}return null}function R2(e,n,i,a){do ua();while(ni!==null);if(V&6)throw Error(N(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(eh(e,r),e===Ce&&(we=Ce=null,Ke=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||or||(or=!0,Rp(Dr,function(){return ua(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=cn.transition,cn.transition=null;var l=Z;Z=1;var s=V;V|=4,Oc.current=null,m2(e,i),up(i,e),Fh(ss),Fr=!!ls,ss=ls=null,e.current=i,f2(i),Vf(),V=s,Z=l,cn.transition=r}else e.current=i;if(or&&(or=!1,ni=e,io=t),r=e.pendingLanes,r===0&&(si=null),Wf(i.stateNode),We(e,pe()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)t=n[i],a(t.value,{componentStack:t.stack,digest:t.digest});if(no)throw no=!1,e=Ks,Ks=null,e;return io&1&&e.tag!==0&&ua(),r=e.pendingLanes,r&1?e===$s?dt++:(dt=0,$s=e):dt=0,vi(),null}function ua(){if(ni!==null){var e=Zg(io),n=cn.transition,i=Z;try{if(cn.transition=null,Z=16>e?16:e,ni===null)var a=!1;else{if(e=ni,ni=null,io=0,V&6)throw Error(N(331));var t=V;for(V|=4,H=e.current;H!==null;){var r=H,l=r.child;if(H.flags&16){var s=r.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(H=d;H!==null;){var g=H;switch(g.tag){case 0:case 11:case 15:st(8,g,r)}var p=g.child;if(p!==null)p.return=g,H=p;else for(;H!==null;){g=H;var m=g.sibling,u=g.return;if(sp(g),g===d){H=null;break}if(m!==null){m.return=u,H=m;break}H=u}}}var j=r.alternate;if(j!==null){var x=j.child;if(x!==null){j.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}H=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,H=l;else e:for(;H!==null;){if(r=H,r.flags&2048)switch(r.tag){case 0:case 11:case 15:st(9,r,r.return)}var f=r.sibling;if(f!==null){f.return=r.return,H=f;break e}H=r.return}}var h=e.current;for(H=h;H!==null;){l=H;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,H=v;else e:for(l=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Lo(9,s)}}catch(P){ue(s,s.return,P)}if(s===l){H=null;break e}var R=s.sibling;if(R!==null){R.return=s.return,H=R;break e}H=s.return}}if(V=t,vi(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(wo,e)}catch{}a=!0}return a}finally{Z=i,cn.transition=n}}return!1}function vu(e,n,i){n=wa(i,n),n=Z0(e,n,1),e=li(e,n,1),n=Je(),e!==null&&(Et(e,1,n),We(e,n))}function ue(e,n,i){if(e.tag===3)vu(e,e,i);else for(;n!==null;){if(n.tag===3){vu(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(si===null||!si.has(a))){e=wa(i,e),e=G0(n,e,1),n=li(n,e,1),e=Je(),n!==null&&(Et(n,1,e),We(n,e));break}}n=n.return}}function x2(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=Je(),e.pingedLanes|=e.suspendedLanes&i,Ce===e&&(Ke&i)===i&&(ye===4||ye===3&&(Ke&130023424)===Ke&&500>pe()-Ec?Li(e,0):Mc|=i),We(e,n)}function wp(e,n){n===0&&(e.mode&1?(n=qt,qt<<=1,!(qt&130023424)&&(qt=4194304)):n=1);var i=Je();e=In(e,n),e!==null&&(Et(e,n,i),We(e,i))}function y2(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),wp(e,i)}function k2(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(N(314))}a!==null&&a.delete(n),wp(e,i)}var jp;jp=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ue.current)Ie=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return Ie=!1,d2(e,n,i);Ie=!!(e.flags&131072)}else Ie=!1,te&&n.flags&1048576&&k0(n,Xr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Cr(e,n),e=n.pendingProps;var t=ma(n,He.current);da(n,i),t=Kc(null,n,a,e,t,i);var r=$c();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(a)?(r=!0,Vr(n)):r=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,kc(n),t.updater=Co,n.stateNode=t,t._reactInternals=n,vs(n,a,e,i),n=Rs(null,n,a,!0,r,i)):(n.tag=0,te&&r&&hc(n),De(null,n,t,i),n=n.child),n;case 16:a=n.elementType;e:{switch(Cr(e,n),e=n.pendingProps,t=a._init,a=t(a._payload),n.type=a,t=n.tag=C2(a),e=mn(a,e),t){case 0:n=js(null,n,a,e,i);break e;case 1:n=lu(null,n,a,e,i);break e;case 11:n=ru(null,n,a,e,i);break e;case 14:n=ou(null,n,a,mn(a.type,e),i);break e}throw Error(N(306,a,""))}return n;case 0:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:mn(a,t),js(e,n,a,t,i);case 1:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:mn(a,t),lu(e,n,a,t,i);case 3:e:{if(ip(n),e===null)throw Error(N(387));a=n.pendingProps,r=n.memoizedState,t=r.element,$0(e,n),qr(n,a,null,i);var l=n.memoizedState;if(a=l.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){t=wa(Error(N(423)),n),n=su(e,n,a,i,t);break e}else if(a!==t){t=wa(Error(N(424)),n),n=su(e,n,a,i,t);break e}else for(Ze=oi(n.stateNode.containerInfo.firstChild),Ye=n,te=!0,hn=null,i=b0(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(fa(),a===t){n=Vn(e,n,i);break e}De(e,n,a,i)}n=n.child}return n;case 5:return T0(n),e===null&&ms(n),a=n.type,t=n.pendingProps,r=e!==null?e.memoizedProps:null,l=t.children,cs(a,t)?l=null:r!==null&&cs(a,r)&&(n.flags|=32),np(e,n),De(e,n,l,i),n.child;case 6:return e===null&&ms(n),null;case 13:return ap(e,n,i);case 4:return Pc(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ha(n,null,a,i):De(e,n,a,i),n.child;case 11:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:mn(a,t),ru(e,n,a,t,i);case 7:return De(e,n,n.pendingProps,i),n.child;case 8:return De(e,n,n.pendingProps.children,i),n.child;case 12:return De(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,t=n.pendingProps,r=n.memoizedProps,l=t.value,Y(Wr,a._currentValue),a._currentValue=l,r!==null)if(yn(r.value,l)){if(r.children===t.children&&!Ue.current){n=Vn(e,n,i);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var s=r.dependencies;if(s!==null){l=r.child;for(var c=s.firstContext;c!==null;){if(c.context===a){if(r.tag===1){c=_n(-1,i&-i),c.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}r.lanes|=i,c=r.alternate,c!==null&&(c.lanes|=i),fs(r.return,i,n),s.lanes|=i;break}c=c.next}}else if(r.tag===10)l=r.type===n.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(N(341));l.lanes|=i,s=l.alternate,s!==null&&(s.lanes|=i),fs(l,i,n),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===n){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}De(e,n,t.children,i),n=n.child}return n;case 9:return t=n.type,a=n.pendingProps.children,da(n,i),t=dn(t),a=a(t),n.flags|=1,De(e,n,a,i),n.child;case 14:return a=n.type,t=mn(a,n.pendingProps),t=mn(a.type,t),ou(e,n,a,t,i);case 15:return Y0(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:mn(a,t),Cr(e,n),n.tag=1,Xe(a)?(e=!0,Vr(n)):e=!1,da(n,i),q0(n,a,t),vs(n,a,t,i),Rs(null,n,a,!0,e,i);case 19:return tp(e,n,i);case 22:return ep(e,n,i)}throw Error(N(156,n.tag))};function Rp(e,n){return Xg(e,n)}function P2(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,n,i,a){return new P2(e,n,i,a)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C2(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tc)return 11;if(e===rc)return 14}return 2}function di(e,n){var i=e.alternate;return i===null?(i=sn(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Kr(e,n,i,a,t,r){var l=2;if(a=e,typeof e=="function")Jc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wi:return bi(i.children,t,r,n);case ac:l=8,t|=8;break;case _l:return e=sn(12,i,n,t|2),e.elementType=_l,e.lanes=r,e;case Bl:return e=sn(13,i,n,t),e.elementType=Bl,e.lanes=r,e;case Al:return e=sn(19,i,n,t),e.elementType=Al,e.lanes=r,e;case Tg:return Ko(i,t,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kg:l=10;break e;case $g:l=9;break e;case tc:l=11;break e;case rc:l=14;break e;case qn:l=16,a=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=sn(l,i,n,t),n.elementType=e,n.type=a,n.lanes=r,n}function bi(e,n,i,a){return e=sn(7,e,a,n),e.lanes=i,e}function Ko(e,n,i,a){return e=sn(22,e,a,n),e.elementType=Tg,e.lanes=i,e.stateNode={isHidden:!1},e}function kl(e,n,i){return e=sn(6,e,null,n),e.lanes=i,e}function Pl(e,n,i){return n=sn(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function L2(e,n,i,a,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Fc(e,n,i,a,t,r,l,s,c){return e=new L2(e,n,i,s,c),n===1?(n=1,r===!0&&(n|=8)):n=0,r=sn(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(r),e}function b2(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function xp(e){if(!e)return pi;e=e._reactInternals;e:{if(Fi(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var i=e.type;if(Xe(i))return x0(e,i,n)}return n}function yp(e,n,i,a,t,r,l,s,c){return e=Fc(i,a,!0,e,t,r,l,s,c),e.context=xp(null),i=e.current,a=Je(),t=ci(i),r=_n(a,t),r.callback=n??null,li(i,r,t),e.current.lanes=t,Et(e,t,a),We(e,a),e}function $o(e,n,i,a){var t=n.current,r=Je(),l=ci(t);return i=xp(i),n.context===null?n.context=i:n.pendingContext=i,n=_n(r,l),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=li(t,n,l),e!==null&&(jn(e,t,l,r),yr(e,t,l)),l}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function _c(e,n){wu(e,n),(e=e.alternate)&&wu(e,n)}function K2(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bc(e){this._internalRoot=e}To.prototype.render=Bc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));$o(e,n,null,null)};To.prototype.unmount=Bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ei(function(){$o(null,e,null,null)}),n[An]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var n=e0();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Gn.length&&n!==0&&n<Gn[i].priority;i++);Gn.splice(i,0,e),i===0&&i0(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function $2(e,n,i,a,t){if(t){if(typeof a=="function"){var r=a;a=function(){var d=to(l);r.call(d)}}var l=yp(n,a,e,0,null,!1,!1,"",ju);return e._reactRootContainer=l,e[An]=l.current,Rt(e.nodeType===8?e.parentNode:e),Ei(),l}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var s=a;a=function(){var d=to(c);s.call(d)}}var c=Fc(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=c,e[An]=c.current,Rt(e.nodeType===8?e.parentNode:e),Ei(function(){$o(n,c,i,a)}),c}function So(e,n,i,a,t){var r=i._reactRootContainer;if(r){var l=r;if(typeof t=="function"){var s=t;t=function(){var c=to(l);s.call(c)}}$o(n,l,e,t)}else l=$2(i,n,e,t,a);return to(l)}Gg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Za(n.pendingLanes);i!==0&&(sc(n,i|1),We(n,pe()),!(V&6)&&(ja=pe()+500,vi()))}break;case 13:Ei(function(){var a=In(e,1);if(a!==null){var t=Je();jn(a,e,1,t)}}),_c(e,1)}};cc=function(e){if(e.tag===13){var n=In(e,134217728);if(n!==null){var i=Je();jn(n,e,134217728,i)}_c(e,134217728)}};Yg=function(e){if(e.tag===13){var n=ci(e),i=In(e,n);if(i!==null){var a=Je();jn(i,e,n,a)}_c(e,n)}};e0=function(){return Z};n0=function(e,n){var i=Z;try{return Z=e,n()}finally{Z=i}};Yl=function(e,n,i){switch(n){case"input":if(Ul(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var t=yo(a);if(!t)throw Error(N(90));Sg(a),Ul(a,t)}}}break;case"textarea":Mg(e,i);break;case"select":n=i.value,n!=null&&oa(e,!!i.multiple,n,!1)}};_g=Hc;Bg=Ei;var T2={usingClientEntryPoint:!1,Events:[zt,Gi,yo,Jg,Fg,Hc]},Fa={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N2={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vg(e),e===null?null:e.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||K2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{wo=lr.inject(N2),Nn=lr}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T2;tn.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(n))throw Error(N(200));return b2(e,n,null,i)};tn.createRoot=function(e,n){if(!Ac(e))throw Error(N(299));var i=!1,a="",t=kp;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=Fc(e,1,!1,null,null,i,!1,a,t),e[An]=n.current,Rt(e.nodeType===8?e.parentNode:e),new Bc(n)};tn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Vg(n),e=e===null?null:e.stateNode,e};tn.flushSync=function(e){return Ei(e)};tn.hydrate=function(e,n,i){if(!No(n))throw Error(N(200));return So(null,e,n,!0,i)};tn.hydrateRoot=function(e,n,i){if(!Ac(e))throw Error(N(405));var a=i!=null&&i.hydratedSources||null,t=!1,r="",l=kp;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),n=yp(n,null,e,1,i??null,t,!1,r,l),e[An]=n.current,Rt(e),a)for(e=0;e<a.length;e++)i=a[e],t=i._getVersion,t=t(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,t]:n.mutableSourceEagerHydrationData.push(i,t);return new To(n)};tn.render=function(e,n,i){if(!No(n))throw Error(N(200));return So(null,e,n,!1,i)};tn.unmountComponentAtNode=function(e){if(!No(e))throw Error(N(40));return e._reactRootContainer?(Ei(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};tn.unstable_batchedUpdates=Hc;tn.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!No(i))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return So(e,n,i,!1,a)};tn.version="18.3.1-next-f1338f8080-20240426";function Pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)}catch(e){console.error(e)}}Pp(),Pg.exports=tn;var S2=Pg.exports,Ru=S2;Jl.createRoot=Ru.createRoot,Jl.hydrateRoot=Ru.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $t(){return $t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},$t.apply(this,arguments)}var ii;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ii||(ii={}));const xu="popstate";function O2(e){e===void 0&&(e={});function n(a,t){let{pathname:r,search:l,hash:s}=a.location;return Ss("",{pathname:r,search:l,hash:s},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function i(a,t){return typeof t=="string"?t:ro(t)}return E2(n,i,null,e)}function je(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Cp(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function M2(){return Math.random().toString(36).substr(2,8)}function yu(e,n){return{usr:e.state,key:e.key,idx:n}}function Ss(e,n,i,a){return i===void 0&&(i=null),$t({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?$a(n):n,{state:i,key:n&&n.key||a||M2()})}function ro(e){let{pathname:n="/",search:i="",hash:a=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function $a(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function E2(e,n,i,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:r=!1}=a,l=t.history,s=ii.Pop,c=null,d=g();d==null&&(d=0,l.replaceState($t({},l.state,{idx:d}),""));function g(){return(l.state||{idx:null}).idx}function p(){s=ii.Pop;let k=g(),f=k==null?null:k-d;d=k,c&&c({action:s,location:x.location,delta:f})}function m(k,f){s=ii.Push;let h=Ss(x.location,k,f);d=g()+1;let v=yu(h,d),R=x.createHref(h);try{l.pushState(v,"",R)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;t.location.assign(R)}r&&c&&c({action:s,location:x.location,delta:1})}function u(k,f){s=ii.Replace;let h=Ss(x.location,k,f);d=g();let v=yu(h,d),R=x.createHref(h);l.replaceState(v,"",R),r&&c&&c({action:s,location:x.location,delta:0})}function j(k){let f=t.location.origin!=="null"?t.location.origin:t.location.href,h=typeof k=="string"?k:ro(k);return h=h.replace(/ $/,"%20"),je(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let x={get action(){return s},get location(){return e(t,l)},listen(k){if(c)throw new Error("A history only accepts one active listener");return t.addEventListener(xu,p),c=k,()=>{t.removeEventListener(xu,p),c=null}},createHref(k){return n(t,k)},createURL:j,encodeLocation(k){let f=j(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:u,go(k){return l.go(k)}};return x}var ku;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ku||(ku={}));function H2(e,n,i){return i===void 0&&(i="/"),z2(e,n,i,!1)}function z2(e,n,i,a){let t=typeof n=="string"?$a(n):n,r=Ic(t.pathname||"/",i);if(r==null)return null;let l=Lp(e);D2(l);let s=null;for(let c=0;s==null&&c<l.length;++c){let d=Q2(r);s=X2(l[c],d,a)}return s}function Lp(e,n,i,a){n===void 0&&(n=[]),i===void 0&&(i=[]),a===void 0&&(a="");let t=(r,l,s)=>{let c={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:l,route:r};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=ui([a,c.relativePath]),g=i.concat(c);r.children&&r.children.length>0&&(je(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Lp(r.children,n,g,d)),!(r.path==null&&!r.index)&&n.push({path:d,score:V2(d,r.index),routesMeta:g})};return e.forEach((r,l)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))t(r,l);else for(let c of bp(r.path))t(r,l,c)}),n}function bp(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,t=i.endsWith("?"),r=i.replace(/\?$/,"");if(a.length===0)return t?[r,""]:[r];let l=bp(a.join("/")),s=[];return s.push(...l.map(c=>c===""?r:[r,c].join("/"))),t&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function D2(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:U2(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}const J2=/^:[\w-]+$/,F2=3,_2=2,B2=1,A2=10,I2=-2,Pu=e=>e==="*";function V2(e,n){let i=e.split("/"),a=i.length;return i.some(Pu)&&(a+=I2),n&&(a+=_2),i.filter(t=>!Pu(t)).reduce((t,r)=>t+(J2.test(r)?F2:r===""?B2:A2),a)}function U2(e,n){return e.length===n.length&&e.slice(0,-1).every((a,t)=>a===n[t])?e[e.length-1]-n[n.length-1]:0}function X2(e,n,i){let{routesMeta:a}=e,t={},r="/",l=[];for(let s=0;s<a.length;++s){let c=a[s],d=s===a.length-1,g=r==="/"?n:n.slice(r.length)||"/",p=Cu({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g),m=c.route;if(!p&&d&&i&&!a[a.length-1].route.index&&(p=Cu({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},g)),!p)return null;Object.assign(t,p.params),l.push({params:t,pathname:ui([r,p.pathname]),pathnameBase:Y2(ui([r,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(r=ui([r,p.pathnameBase]))}return l}function Cu(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=W2(e.path,e.caseSensitive,e.end),t=n.match(i);if(!t)return null;let r=t[0],l=r.replace(/(.)\/+$/,"$1"),s=t.slice(1);return{params:a.reduce((d,g,p)=>{let{paramName:m,isOptional:u}=g;if(m==="*"){let x=s[p]||"";l=r.slice(0,r.length-x.length).replace(/(.)\/+$/,"$1")}const j=s[p];return u&&!j?d[m]=void 0:d[m]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:l,pattern:e}}function W2(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),Cp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(a.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,n?void 0:"i"),a]}function Q2(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Cp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ic(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function q2(e,n){n===void 0&&(n="/");let{pathname:i,search:a="",hash:t=""}=typeof e=="string"?$a(e):e;return{pathname:i?i.startsWith("/")?i:Z2(i,n):n,search:ev(a),hash:nv(t)}}function Z2(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?i.length>1&&i.pop():t!=="."&&i.push(t)}),i.length>1?i.join("/"):"/"}function Cl(e,n,i,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G2(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Kp(e,n){let i=G2(e);return n?i.map((a,t)=>t===i.length-1?a.pathname:a.pathnameBase):i.map(a=>a.pathnameBase)}function $p(e,n,i,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=$a(e):(t=$t({},e),je(!t.pathname||!t.pathname.includes("?"),Cl("?","pathname","search",t)),je(!t.pathname||!t.pathname.includes("#"),Cl("#","pathname","hash",t)),je(!t.search||!t.search.includes("#"),Cl("#","search","hash",t)));let r=e===""||t.pathname==="",l=r?"/":t.pathname,s;if(l==null)s=i;else{let p=n.length-1;if(!a&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;t.pathname=m.join("/")}s=p>=0?n[p]:"/"}let c=q2(t,s),d=l&&l!=="/"&&l.endsWith("/"),g=(r||l===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||g)&&(c.pathname+="/"),c}const ui=e=>e.join("/").replace(/\/\/+/g,"/"),Y2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ev=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tp=["post","put","patch","delete"];new Set(Tp);const av=["get",...Tp];new Set(av);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Tt.apply(this,arguments)}const Vc=K.createContext(null),tv=K.createContext(null),_i=K.createContext(null),Oo=K.createContext(null),Bi=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Np=K.createContext(null);function rv(e,n){let{relative:i}=n===void 0?{}:n;Jt()||je(!1);let{basename:a,navigator:t}=K.useContext(_i),{hash:r,pathname:l,search:s}=Op(e,{relative:i}),c=l;return a!=="/"&&(c=l==="/"?a:ui([a,l])),t.createHref({pathname:c,search:s,hash:r})}function Jt(){return K.useContext(Oo)!=null}function ce(){return Jt()||je(!1),K.useContext(Oo).location}function Sp(e){K.useContext(_i).static||K.useLayoutEffect(e)}function On(){let{isDataRoute:e}=K.useContext(Bi);return e?wv():ov()}function ov(){Jt()||je(!1);let e=K.useContext(Vc),{basename:n,future:i,navigator:a}=K.useContext(_i),{matches:t}=K.useContext(Bi),{pathname:r}=ce(),l=JSON.stringify(Kp(t,i.v7_relativeSplatPath)),s=K.useRef(!1);return Sp(()=>{s.current=!0}),K.useCallback(function(d,g){if(g===void 0&&(g={}),!s.current)return;if(typeof d=="number"){a.go(d);return}let p=$p(d,JSON.parse(l),r,g.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:ui([n,p.pathname])),(g.replace?a.replace:a.push)(p,g.state,g)},[n,a,l,r,e])}function Op(e,n){let{relative:i}=n===void 0?{}:n,{future:a}=K.useContext(_i),{matches:t}=K.useContext(Bi),{pathname:r}=ce(),l=JSON.stringify(Kp(t,a.v7_relativeSplatPath));return K.useMemo(()=>$p(e,JSON.parse(l),r,i==="path"),[e,l,r,i])}function lv(e,n){return sv(e,n)}function sv(e,n,i,a){Jt()||je(!1);let{navigator:t}=K.useContext(_i),{matches:r}=K.useContext(Bi),l=r[r.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=ce(),g;if(n){var p;let k=typeof n=="string"?$a(n):n;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||je(!1),g=k}else g=d;let m=g.pathname||"/",u=m;if(c!=="/"){let k=c.replace(/^\//,"").split("/");u="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let j=H2(e,{pathname:u}),x=pv(j&&j.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:ui([c,t.encodeLocation?t.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ui([c,t.encodeLocation?t.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),r,i,a);return n&&x?K.createElement(Oo.Provider,{value:{location:Tt({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ii.Pop}},x):x}function cv(){let e=vv(),n=iv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},n),i?K.createElement("pre",{style:t},i):null,null)}const dv=K.createElement(cv,null);class uv extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?K.createElement(Bi.Provider,{value:this.props.routeContext},K.createElement(Np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gv(e){let{routeContext:n,match:i,children:a}=e,t=K.useContext(Vc);return t&&t.static&&t.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=i.route.id),K.createElement(Bi.Provider,{value:n},a)}function pv(e,n,i,a){var t;if(n===void 0&&(n=[]),i===void 0&&(i=null),a===void 0&&(a=null),e==null){var r;if(!i)return null;if(i.errors)e=i.matches;else if((r=a)!=null&&r.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let l=e,s=(t=i)==null?void 0:t.errors;if(s!=null){let g=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);g>=0||je(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,d=-1;if(i&&a&&a.v7_partialHydration)for(let g=0;g<l.length;g++){let p=l[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=g),p.route.id){let{loaderData:m,errors:u}=i,j=p.route.loader&&m[p.route.id]===void 0&&(!u||u[p.route.id]===void 0);if(p.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((g,p,m)=>{let u,j=!1,x=null,k=null;i&&(u=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||dv,c&&(d<0&&m===0?(j=!0,k=null):d===m&&(j=!0,k=p.route.hydrateFallbackElement||null)));let f=n.concat(l.slice(0,m+1)),h=()=>{let v;return u?v=x:j?v=k:p.route.Component?v=K.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=g,K.createElement(gv,{match:p,routeContext:{outlet:g,matches:f,isDataRoute:i!=null},children:v})};return i&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?K.createElement(uv,{location:i.location,revalidation:i.revalidation,component:x,error:u,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var Mp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mp||{}),oo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oo||{});function mv(e){let n=K.useContext(Vc);return n||je(!1),n}function fv(e){let n=K.useContext(tv);return n||je(!1),n}function hv(e){let n=K.useContext(Bi);return n||je(!1),n}function Ep(e){let n=hv(),i=n.matches[n.matches.length-1];return i.route.id||je(!1),i.route.id}function vv(){var e;let n=K.useContext(Np),i=fv(oo.UseRouteError),a=Ep(oo.UseRouteError);return n!==void 0?n:(e=i.errors)==null?void 0:e[a]}function wv(){let{router:e}=mv(Mp.UseNavigateStable),n=Ep(oo.UseNavigateStable),i=K.useRef(!1);return Sp(()=>{i.current=!0}),K.useCallback(function(t,r){r===void 0&&(r={}),i.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,Tt({fromRouteId:n},r)))},[e,n])}function Be(e){je(!1)}function jv(e){let{basename:n="/",children:i=null,location:a,navigationType:t=ii.Pop,navigator:r,static:l=!1,future:s}=e;Jt()&&je(!1);let c=n.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:c,navigator:r,static:l,future:Tt({v7_relativeSplatPath:!1},s)}),[c,s,r,l]);typeof a=="string"&&(a=$a(a));let{pathname:g="/",search:p="",hash:m="",state:u=null,key:j="default"}=a,x=K.useMemo(()=>{let k=Ic(g,c);return k==null?null:{location:{pathname:k,search:p,hash:m,state:u,key:j},navigationType:t}},[c,g,p,m,u,j,t]);return x==null?null:K.createElement(_i.Provider,{value:d},K.createElement(Oo.Provider,{children:i,value:x}))}function Rv(e){let{children:n,location:i}=e;return lv(Os(n),i)}new Promise(()=>{});function Os(e,n){n===void 0&&(n=[]);let i=[];return K.Children.forEach(e,(a,t)=>{if(!K.isValidElement(a))return;let r=[...n,t];if(a.type===K.Fragment){i.push.apply(i,Os(a.props.children,r));return}a.type!==Be&&je(!1),!a.props.index||!a.props.children||je(!1);let l={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(l.children=Os(a.props.children,r)),i.push(l)}),i}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Ms.apply(this,arguments)}function xv(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}function yv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kv(e,n){return e.button===0&&(!n||n==="_self")&&!yv(e)}const Pv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Cv="6";try{window.__reactRouterVersion=Cv}catch{}const Lv="startTransition",Lu=Dl[Lv];function bv(e){let{basename:n,children:i,future:a,window:t}=e,r=K.useRef();r.current==null&&(r.current=O2({window:t,v5Compat:!0}));let l=r.current,[s,c]=K.useState({action:l.action,location:l.location}),{v7_startTransition:d}=a||{},g=K.useCallback(p=>{d&&Lu?Lu(()=>c(p)):c(p)},[c,d]);return K.useLayoutEffect(()=>l.listen(g),[l,g]),K.createElement(jv,{basename:n,children:i,location:s.location,navigationType:s.action,navigator:l,future:a})}const Kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=K.forwardRef(function(n,i){let{onClick:a,relative:t,reloadDocument:r,replace:l,state:s,target:c,to:d,preventScrollReset:g,unstable_viewTransition:p}=n,m=xv(n,Pv),{basename:u}=K.useContext(_i),j,x=!1;if(typeof d=="string"&&$v.test(d)&&(j=d,Kv))try{let v=new URL(window.location.href),R=d.startsWith("//")?new URL(v.protocol+d):new URL(d),P=Ic(R.pathname,u);R.origin===v.origin&&P!=null?d=P+R.search+R.hash:x=!0}catch{}let k=rv(d,{relative:t}),f=Tv(d,{replace:l,state:s,target:c,preventScrollReset:g,relative:t,unstable_viewTransition:p});function h(v){a&&a(v),v.defaultPrevented||f(v)}return K.createElement("a",Ms({},m,{href:j||k,onClick:x||r?a:h,ref:i,target:c}))});var bu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bu||(bu={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));function Tv(e,n){let{target:i,replace:a,state:t,preventScrollReset:r,relative:l,unstable_viewTransition:s}=n===void 0?{}:n,c=On(),d=ce(),g=Op(e,{relative:l});return K.useCallback(p=>{if(kv(p,i)){p.preventDefault();let m=a!==void 0?a:ro(d)===ro(g);c(e,{replace:m,state:t,preventScrollReset:r,relative:l,unstable_viewTransition:s})}},[d,c,g,a,t,i,e,r,l,s])}var Hp={exports:{}},zp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=K;function Nv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sv=typeof Object.is=="function"?Object.is:Nv,Ov=Ft.useSyncExternalStore,Mv=Ft.useRef,Ev=Ft.useEffect,Hv=Ft.useMemo,zv=Ft.useDebugValue;zp.useSyncExternalStoreWithSelector=function(e,n,i,a,t){var r=Mv(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=Hv(function(){function c(u){if(!d){if(d=!0,g=u,u=a(u),t!==void 0&&l.hasValue){var j=l.value;if(t(j,u))return p=j}return p=u}if(j=p,Sv(g,u))return j;var x=a(u);return t!==void 0&&t(j,x)?j:(g=u,p=x)}var d=!1,g,p,m=i===void 0?null:i;return[function(){return c(n())},m===null?void 0:function(){return c(m())}]},[n,i,a,t]);var s=Ov(e,r[0],r[1]);return Ev(function(){l.hasValue=!0,l.value=s},[s]),zv(s),s};Hp.exports=zp;var Dv=Hp.exports,Ge="default"in Dl?Ti:Dl,$u=Symbol.for("react-redux-context"),Tu=typeof globalThis<"u"?globalThis:{};function Jv(){if(!Ge.createContext)return{};const e=Tu[$u]??(Tu[$u]=new Map);let n=e.get(Ge.createContext);return n||(n=Ge.createContext(null),e.set(Ge.createContext,n)),n}var mi=Jv(),Fv=()=>{throw new Error("uSES not initialized!")};function Uc(e=mi){return function(){return Ge.useContext(e)}}var Dp=Uc(),Jp=Fv,_v=e=>{Jp=e},Bv=(e,n)=>e===n;function Av(e=mi){const n=e===mi?Dp:Uc(e),i=(a,t={})=>{const{equalityFn:r=Bv,devModeChecks:l={}}=typeof t=="function"?{equalityFn:t}:t,{store:s,subscription:c,getServerState:d,stabilityCheck:g,identityFunctionCheck:p}=n();Ge.useRef(!0);const m=Ge.useCallback({[a.name](j){return a(j)}}[a.name],[a,g,l.stabilityCheck]),u=Jp(c.addNestedSub,s.getState,d||s.getState,m,r);return Ge.useDebugValue(u),u};return Object.assign(i,{withTypes:()=>i}),i}var y=Av();function Iv(e){e()}function Vv(){let e=null,n=null;return{clear(){e=null,n=null},notify(){Iv(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){const i=[];let a=e;for(;a;)i.push(a),a=a.next;return i},subscribe(i){let a=!0;const t=n={callback:i,next:null,prev:n};return t.prev?t.prev.next=t:e=t,function(){!a||e===null||(a=!1,t.next?t.next.prev=t.prev:n=t.prev,t.prev?t.prev.next=t.next:e=t.next)}}}}var Nu={notify(){},get:()=>[]};function Uv(e,n){let i,a=Nu,t=0,r=!1;function l(x){g();const k=a.subscribe(x);let f=!1;return()=>{f||(f=!0,k(),p())}}function s(){a.notify()}function c(){j.onStateChange&&j.onStateChange()}function d(){return r}function g(){t++,i||(i=e.subscribe(c),a=Vv())}function p(){t--,i&&t===0&&(i(),i=void 0,a.clear(),a=Nu)}function m(){r||(r=!0,g())}function u(){r&&(r=!1,p())}const j={addNestedSub:l,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:d,trySubscribe:m,tryUnsubscribe:u,getListeners:()=>a};return j}var Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wv=typeof navigator<"u"&&navigator.product==="ReactNative",Qv=Xv||Wv?Ge.useLayoutEffect:Ge.useEffect;function qv({store:e,context:n,children:i,serverState:a,stabilityCheck:t="once",identityFunctionCheck:r="once"}){const l=Ge.useMemo(()=>{const d=Uv(e);return{store:e,subscription:d,getServerState:a?()=>a:void 0,stabilityCheck:t,identityFunctionCheck:r}},[e,a,t,r]),s=Ge.useMemo(()=>e.getState(),[e]);Qv(()=>{const{subscription:d}=l;return d.onStateChange=d.notifyNestedSubs,d.trySubscribe(),s!==e.getState()&&d.notifyNestedSubs(),()=>{d.tryUnsubscribe(),d.onStateChange=void 0}},[l,s]);const c=n||mi;return Ge.createElement(c.Provider,{value:l},i)}var Zv=qv;function Fp(e=mi){const n=e===mi?Dp:Uc(e),i=()=>{const{store:a}=n();return a};return Object.assign(i,{withTypes:()=>i}),i}var Gv=Fp();function Yv(e=mi){const n=e===mi?Gv:Fp(e),i=()=>n().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var ze=Yv();_v(Dv.useSyncExternalStoreWithSelector);var Ve=function(){return Ve=Object.assign||function(n){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},Ve.apply(this,arguments)};function lo(e,n,i){if(i||arguments.length===2)for(var a=0,t=n.length,r;a<t;a++)(r||!(a in n))&&(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}var ie="-ms-",ut="-moz-",q="-webkit-",_p="comm",Mo="rule",Xc="decl",e1="@import",Bp="@keyframes",n1="@layer",Ap=Math.abs,Wc=String.fromCharCode,Es=Object.assign;function i1(e,n){return Pe(e,0)^45?(((n<<2^Pe(e,0))<<2^Pe(e,1))<<2^Pe(e,2))<<2^Pe(e,3):0}function Ip(e){return e.trim()}function zn(e,n){return(e=n.exec(e))?e[0]:e}function B(e,n,i){return e.replace(n,i)}function $r(e,n,i){return e.indexOf(n,i)}function Pe(e,n){return e.charCodeAt(n)|0}function Ra(e,n,i){return e.slice(n,i)}function Kn(e){return e.length}function Vp(e){return e.length}function Ya(e,n){return n.push(e),e}function a1(e,n){return e.map(n).join("")}function Su(e,n){return e.filter(function(i){return!zn(i,n)})}var Eo=1,xa=1,Up=0,gn=0,ve=0,Ta="";function Ho(e,n,i,a,t,r,l,s){return{value:e,root:n,parent:i,type:a,props:t,children:r,line:Eo,column:xa,length:l,return:"",siblings:s}}function Qn(e,n){return Es(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ii(e){for(;e.root;)e=Qn(e.root,{children:[e]});Ya(e,e.siblings)}function t1(){return ve}function r1(){return ve=gn>0?Pe(Ta,--gn):0,xa--,ve===10&&(xa=1,Eo--),ve}function Rn(){return ve=gn<Up?Pe(Ta,gn++):0,xa++,ve===10&&(xa=1,Eo++),ve}function Ki(){return Pe(Ta,gn)}function Tr(){return gn}function zo(e,n){return Ra(Ta,e,n)}function Hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o1(e){return Eo=xa=1,Up=Kn(Ta=e),gn=0,[]}function l1(e){return Ta="",e}function Ll(e){return Ip(zo(gn-1,zs(e===91?e+2:e===40?e+1:e)))}function s1(e){for(;(ve=Ki())&&ve<33;)Rn();return Hs(e)>2||Hs(ve)>3?"":" "}function c1(e,n){for(;--n&&Rn()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return zo(e,Tr()+(n<6&&Ki()==32&&Rn()==32))}function zs(e){for(;Rn();)switch(ve){case e:return gn;case 34:case 39:e!==34&&e!==39&&zs(ve);break;case 40:e===41&&zs(e);break;case 92:Rn();break}return gn}function d1(e,n){for(;Rn()&&e+ve!==57;)if(e+ve===84&&Ki()===47)break;return"/*"+zo(n,gn-1)+"*"+Wc(e===47?e:Rn())}function u1(e){for(;!Hs(Ki());)Rn();return zo(e,gn)}function g1(e){return l1(Nr("",null,null,null,[""],e=o1(e),0,[0],e))}function Nr(e,n,i,a,t,r,l,s,c){for(var d=0,g=0,p=l,m=0,u=0,j=0,x=1,k=1,f=1,h=0,v="",R=t,P=r,L=a,C=v;k;)switch(j=h,h=Rn()){case 40:if(j!=108&&Pe(C,p-1)==58){$r(C+=B(Ll(h),"&","&\f"),"&\f",Ap(d?s[d-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Ll(h);break;case 9:case 10:case 13:case 32:C+=s1(j);break;case 92:C+=c1(Tr()-1,7);continue;case 47:switch(Ki()){case 42:case 47:Ya(p1(d1(Rn(),Tr()),n,i,c),c);break;default:C+="/"}break;case 123*x:s[d++]=Kn(C)*f;case 125*x:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+g:f==-1&&(C=B(C,/\f/g,"")),u>0&&Kn(C)-p&&Ya(u>32?Mu(C+";",a,i,p-1,c):Mu(B(C," ","")+";",a,i,p-2,c),c);break;case 59:C+=";";default:if(Ya(L=Ou(C,n,i,d,g,t,s,v,R=[],P=[],p,r),r),h===123)if(g===0)Nr(C,n,L,L,R,r,p,s,P);else switch(m===99&&Pe(C,3)===110?100:m){case 100:case 108:case 109:case 115:Nr(e,L,L,a&&Ya(Ou(e,L,L,0,0,t,s,v,t,R=[],p,P),P),t,P,p,s,a?R:P);break;default:Nr(C,L,L,L,[""],P,0,s,P)}}d=g=u=0,x=f=1,v=C="",p=l;break;case 58:p=1+Kn(C),u=j;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&r1()==125)continue}switch(C+=Wc(h),h*x){case 38:f=g>0?1:(C+="\f",-1);break;case 44:s[d++]=(Kn(C)-1)*f,f=1;break;case 64:Ki()===45&&(C+=Ll(Rn())),m=Ki(),g=p=Kn(v=C+=u1(Tr())),h++;break;case 45:j===45&&Kn(C)==2&&(x=0)}}return r}function Ou(e,n,i,a,t,r,l,s,c,d,g,p){for(var m=t-1,u=t===0?r:[""],j=Vp(u),x=0,k=0,f=0;x<a;++x)for(var h=0,v=Ra(e,m+1,m=Ap(k=l[x])),R=e;h<j;++h)(R=Ip(k>0?u[h]+" "+v:B(v,/&\f/g,u[h])))&&(c[f++]=R);return Ho(e,n,i,t===0?Mo:s,c,d,g,p)}function p1(e,n,i,a){return Ho(e,n,i,_p,Wc(t1()),Ra(e,2,-2),0,a)}function Mu(e,n,i,a,t){return Ho(e,n,i,Xc,Ra(e,0,a),Ra(e,a+1,-1),a,t)}function Xp(e,n,i){switch(i1(e,n)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+ut+e+ie+e+e;case 5936:switch(Pe(e,n+11)){case 114:return q+e+ie+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+ie+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+ie+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+ie+e+e;case 6165:return q+e+ie+"flex-"+e+e;case 5187:return q+e+B(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return q+e+ie+"flex-item-"+B(e,/flex-|-self/g,"")+(zn(e,/flex-|baseline/)?"":ie+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return q+e+ie+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+ie+B(e,"shrink","negative")+e;case 5292:return q+e+ie+B(e,"basis","preferred-size")+e;case 6060:return q+"box-"+B(e,"-grow","")+q+e+ie+B(e,"grow","positive")+e;case 4554:return q+B(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!zn(e,/flex-|baseline/))return ie+"grid-column-align"+Ra(e,n)+e;break;case 2592:case 3360:return ie+B(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,t){return n=t,zn(a.props,/grid-\w+-end/)})?~$r(e+(i=i[n].value),"span",0)?e:ie+B(e,"-start","")+e+ie+"grid-row-span:"+(~$r(i,"span",0)?zn(i,/\d+/):+zn(i,/\d+/)-+zn(e,/\d+/))+";":ie+B(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return zn(a.props,/grid-\w+-start/)})?e:ie+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(e)-1-n>6)switch(Pe(e,n+1)){case 109:if(Pe(e,n+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+ut+(Pe(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~$r(e,"stretch",0)?Xp(B(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,t,r,l,s,c,d){return ie+t+":"+r+d+(l?ie+t+"-span:"+(s?c:+c-+r)+d:"")+e});case 4949:if(Pe(e,n+6)===121)return B(e,":",":"+q)+e;break;case 6444:switch(Pe(e,Pe(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(Pe(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+ie+"$2box$3")+e;case 100:return B(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function so(e,n){for(var i="",a=0;a<e.length;a++)i+=n(e[a],a,e,n)||"";return i}function m1(e,n,i,a){switch(e.type){case n1:if(e.children.length)break;case e1:case Xc:return e.return=e.return||e.value;case _p:return"";case Bp:return e.return=e.value+"{"+so(e.children,a)+"}";case Mo:if(!Kn(e.value=e.props.join(",")))return""}return Kn(i=so(e.children,a))?e.return=e.value+"{"+i+"}":""}function f1(e){var n=Vp(e);return function(i,a,t,r){for(var l="",s=0;s<n;s++)l+=e[s](i,a,t,r)||"";return l}}function h1(e){return function(n){n.root||(n=n.return)&&e(n)}}function v1(e,n,i,a){if(e.length>-1&&!e.return)switch(e.type){case Xc:e.return=Xp(e.value,e.length,i);return;case Bp:return so([Qn(e,{value:B(e.value,"@","@"+q)})],a);case Mo:if(e.length)return a1(i=e.props,function(t){switch(zn(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ii(Qn(e,{props:[B(t,/:(read-\w+)/,":"+ut+"$1")]})),Ii(Qn(e,{props:[t]})),Es(e,{props:Su(i,a)});break;case"::placeholder":Ii(Qn(e,{props:[B(t,/:(plac\w+)/,":"+q+"input-$1")]})),Ii(Qn(e,{props:[B(t,/:(plac\w+)/,":"+ut+"$1")]})),Ii(Qn(e,{props:[B(t,/:(plac\w+)/,ie+"input-$1")]})),Ii(Qn(e,{props:[t]})),Es(e,{props:Su(i,a)});break}return""})}}var w1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qe={},ya=typeof process<"u"&&Qe!==void 0&&(Qe.REACT_APP_SC_ATTR||Qe.SC_ATTR)||"data-styled",Wp="active",Qp="data-styled-version",Do="6.1.12",Qc=`/*!sc*/
`,co=typeof window<"u"&&"HTMLElement"in window,j1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==""?Qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.SC_DISABLE_SPEEDY!==void 0&&Qe.SC_DISABLE_SPEEDY!==""&&Qe.SC_DISABLE_SPEEDY!=="false"&&Qe.SC_DISABLE_SPEEDY),Jo=Object.freeze([]),ka=Object.freeze({});function R1(e,n,i){return i===void 0&&(i=ka),e.theme!==i.theme&&e.theme||n||i.theme}var qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y1=/(^-|-$)/g;function Eu(e){return e.replace(x1,"-").replace(y1,"")}var k1=/(a)(d)/gi,sr=52,Hu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ds(e){var n,i="";for(n=Math.abs(e);n>sr;n=n/sr|0)i=Hu(n%sr)+i;return(Hu(n%sr)+i).replace(k1,"$1-$2")}var bl,Zp=5381,ra=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},Gp=function(e){return ra(Zp,e)};function P1(e){return Ds(Gp(e)>>>0)}function C1(e){return e.displayName||e.name||"Component"}function Kl(e){return typeof e=="string"&&!0}var Yp=typeof Symbol=="function"&&Symbol.for,em=Yp?Symbol.for("react.memo"):60115,L1=Yp?Symbol.for("react.forward_ref"):60112,b1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},K1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$1=((bl={})[L1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bl[em]=nm,bl);function zu(e){return("type"in(n=e)&&n.type.$$typeof)===em?nm:"$$typeof"in e?$1[e.$$typeof]:b1;var n}var T1=Object.defineProperty,N1=Object.getOwnPropertyNames,Du=Object.getOwnPropertySymbols,S1=Object.getOwnPropertyDescriptor,O1=Object.getPrototypeOf,Ju=Object.prototype;function im(e,n,i){if(typeof n!="string"){if(Ju){var a=O1(n);a&&a!==Ju&&im(e,a,i)}var t=N1(n);Du&&(t=t.concat(Du(n)));for(var r=zu(e),l=zu(n),s=0;s<t.length;++s){var c=t[s];if(!(c in K1||i&&i[c]||l&&c in l||r&&c in r)){var d=S1(n,c);try{T1(e,c,d)}catch{}}}}return e}function Pa(e){return typeof e=="function"}function qc(e){return typeof e=="object"&&"styledComponentId"in e}function Ci(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Fu(e,n){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Nt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Js(e,n,i){if(i===void 0&&(i=!1),!i&&!Nt(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)e[a]=Js(e[a],n[a]);else if(Nt(n))for(var a in n)e[a]=Js(e[a],n[a]);return e}function Zc(e,n){Object.defineProperty(e,"toString",{value:n})}function _t(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var M1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,a=0;a<n;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var a=this.groupSizes,t=a.length,r=t;n>=r;)if((r<<=1)<0)throw _t(16,"".concat(n));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var l=t;l<r;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),c=(l=0,i.length);l<c;l++)this.tag.insertRule(s,i[l])&&(this.groupSizes[n]++,s++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],a=this.indexOfGroup(n),t=a+i;this.groupSizes[n]=0;for(var r=a;r<t;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var a=this.groupSizes[n],t=this.indexOfGroup(n),r=t+a,l=t;l<r;l++)i+="".concat(this.tag.getRule(l)).concat(Qc);return i},e}(),Sr=new Map,uo=new Map,Or=1,cr=function(e){if(Sr.has(e))return Sr.get(e);for(;uo.has(Or);)Or++;var n=Or++;return Sr.set(e,n),uo.set(n,e),n},E1=function(e,n){Or=n+1,Sr.set(e,n),uo.set(n,e)},H1="style[".concat(ya,"][").concat(Qp,'="').concat(Do,'"]'),z1=new RegExp("^".concat(ya,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),D1=function(e,n,i){for(var a,t=i.split(","),r=0,l=t.length;r<l;r++)(a=t[r])&&e.registerName(n,a)},J1=function(e,n){for(var i,a=((i=n.textContent)!==null&&i!==void 0?i:"").split(Qc),t=[],r=0,l=a.length;r<l;r++){var s=a[r].trim();if(s){var c=s.match(z1);if(c){var d=0|parseInt(c[1],10),g=c[2];d!==0&&(E1(g,d),D1(e,g,c[3]),e.getTag().insertRules(d,t)),t.length=0}else t.push(s)}}},_u=function(e){for(var n=document.querySelectorAll(H1),i=0,a=n.length;i<a;i++){var t=n[i];t&&t.getAttribute(ya)!==Wp&&(J1(e,t),t.parentNode&&t.parentNode.removeChild(t))}};function F1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var am=function(e){var n=document.head,i=e||n,a=document.createElement("style"),t=function(s){var c=Array.from(s.querySelectorAll("style[".concat(ya,"]")));return c[c.length-1]}(i),r=t!==void 0?t.nextSibling:null;a.setAttribute(ya,Wp),a.setAttribute(Qp,Do);var l=F1();return l&&a.setAttribute("nonce",l),i.insertBefore(a,r),a},_1=function(){function e(n){this.element=am(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,t=0,r=a.length;t<r;t++){var l=a[t];if(l.ownerNode===i)return l}throw _t(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),B1=function(){function e(n){this.element=am(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),A1=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Bu=co,I1={isServer:!co,useCSSOMInjection:!j1},tm=function(){function e(n,i,a){n===void 0&&(n=ka),i===void 0&&(i={});var t=this;this.options=Ve(Ve({},I1),n),this.gs=i,this.names=new Map(a),this.server=!!n.isServer,!this.server&&co&&Bu&&(Bu=!1,_u(this)),Zc(this,function(){return function(r){for(var l=r.getTag(),s=l.length,c="",d=function(p){var m=function(f){return uo.get(f)}(p);if(m===void 0)return"continue";var u=r.names.get(m),j=l.getGroup(p);if(u===void 0||!u.size||j.length===0)return"continue";var x="".concat(ya,".g").concat(p,'[id="').concat(m,'"]'),k="";u!==void 0&&u.forEach(function(f){f.length>0&&(k+="".concat(f,","))}),c+="".concat(j).concat(x,'{content:"').concat(k,'"}').concat(Qc)},g=0;g<s;g++)d(g);return c}(t)})}return e.registerId=function(n){return cr(n)},e.prototype.rehydrate=function(){!this.server&&co&&_u(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(Ve(Ve({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var a=i.useCSSOMInjection,t=i.target;return i.isServer?new A1(t):a?new _1(t):new B1(t)}(this.options),new M1(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(cr(n),this.names.has(n))this.names.get(n).add(i);else{var a=new Set;a.add(i),this.names.set(n,a)}},e.prototype.insertRules=function(n,i,a){this.registerName(n,i),this.getTag().insertRules(cr(n),a)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(cr(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),V1=/&/g,U1=/^\s*\/\/.*$/gm;function rm(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=rm(i.children,n)),i})}function X1(e){var n,i,a,t=ka,r=t.options,l=r===void 0?ka:r,s=t.plugins,c=s===void 0?Jo:s,d=function(m,u,j){return j.startsWith(i)&&j.endsWith(i)&&j.replaceAll(i,"").length>0?".".concat(n):m},g=c.slice();g.push(function(m){m.type===Mo&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(V1,i).replace(a,d))}),l.prefix&&g.push(v1),g.push(m1);var p=function(m,u,j,x){u===void 0&&(u=""),j===void 0&&(j=""),x===void 0&&(x="&"),n=x,i=u,a=new RegExp("\\".concat(i,"\\b"),"g");var k=m.replace(U1,""),f=g1(j||u?"".concat(j," ").concat(u," { ").concat(k," }"):k);l.namespace&&(f=rm(f,l.namespace));var h=[];return so(f,f1(g.concat(h1(function(v){return h.push(v)})))),h};return p.hash=c.length?c.reduce(function(m,u){return u.name||_t(15),ra(m,u.name)},Zp).toString():"",p}var W1=new tm,Fs=X1(),om=Ti.createContext({shouldForwardProp:void 0,styleSheet:W1,stylis:Fs});om.Consumer;Ti.createContext(void 0);function Au(){return K.useContext(om)}var Q1=function(){function e(n,i){var a=this;this.inject=function(t,r){r===void 0&&(r=Fs);var l=a.name+r.hash;t.hasNameForId(a.id,l)||t.insertRules(a.id,l,r(a.rules,l,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,Zc(this,function(){throw _t(12,String(a.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=Fs),this.name+n.hash},e}(),q1=function(e){return e>="A"&&e<="Z"};function Iu(e){for(var n="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;q1(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var lm=function(e){return e==null||e===!1||e===""},sm=function(e){var n,i,a=[];for(var t in e){var r=e[t];e.hasOwnProperty(t)&&!lm(r)&&(Array.isArray(r)&&r.isCss||Pa(r)?a.push("".concat(Iu(t),":"),r,";"):Nt(r)?a.push.apply(a,lo(lo(["".concat(t," {")],sm(r),!1),["}"],!1)):a.push("".concat(Iu(t),": ").concat((n=t,(i=r)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in w1||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function $i(e,n,i,a){if(lm(e))return[];if(qc(e))return[".".concat(e.styledComponentId)];if(Pa(e)){if(!Pa(r=e)||r.prototype&&r.prototype.isReactComponent||!n)return[e];var t=e(n);return $i(t,n,i,a)}var r;return e instanceof Q1?i?(e.inject(i,a),[e.getName(a)]):[e]:Nt(e)?sm(e):Array.isArray(e)?Array.prototype.concat.apply(Jo,e.map(function(l){return $i(l,n,i,a)})):[e.toString()]}function Z1(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(Pa(i)&&!qc(i))return!1}return!0}var G1=Gp(Do),Y1=function(){function e(n,i,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Z1(n),this.componentId=i,this.baseHash=ra(G1,i),this.baseStyle=a,tm.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,a){var t=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))t=Ci(t,this.staticRulesId);else{var r=Fu($i(this.rules,n,i,a)),l=Ds(ra(this.baseHash,r)>>>0);if(!i.hasNameForId(this.componentId,l)){var s=a(r,".".concat(l),void 0,this.componentId);i.insertRules(this.componentId,l,s)}t=Ci(t,l),this.staticRulesId=l}else{for(var c=ra(this.baseHash,a.hash),d="",g=0;g<this.rules.length;g++){var p=this.rules[g];if(typeof p=="string")d+=p;else if(p){var m=Fu($i(p,n,i,a));c=ra(c,m+g),d+=m}}if(d){var u=Ds(c>>>0);i.hasNameForId(this.componentId,u)||i.insertRules(this.componentId,u,a(d,".".concat(u),void 0,this.componentId)),t=Ci(t,u)}}return t},e}(),cm=Ti.createContext(void 0);cm.Consumer;var $l={};function ew(e,n,i){var a=qc(e),t=e,r=!Kl(e),l=n.attrs,s=l===void 0?Jo:l,c=n.componentId,d=c===void 0?function(R,P){var L=typeof R!="string"?"sc":Eu(R);$l[L]=($l[L]||0)+1;var C="".concat(L,"-").concat(P1(Do+L+$l[L]));return P?"".concat(P,"-").concat(C):C}(n.displayName,n.parentComponentId):c,g=n.displayName,p=g===void 0?function(R){return Kl(R)?"styled.".concat(R):"Styled(".concat(C1(R),")")}(e):g,m=n.displayName&&n.componentId?"".concat(Eu(n.displayName),"-").concat(n.componentId):n.componentId||d,u=a&&t.attrs?t.attrs.concat(s).filter(Boolean):s,j=n.shouldForwardProp;if(a&&t.shouldForwardProp){var x=t.shouldForwardProp;if(n.shouldForwardProp){var k=n.shouldForwardProp;j=function(R,P){return x(R,P)&&k(R,P)}}else j=x}var f=new Y1(i,m,a?t.componentStyle:void 0);function h(R,P){return function(L,C,b){var T=L.attrs,z=L.componentStyle,G=L.defaultProps,Te=L.foldedComponentIds,$=L.styledComponentId,J=L.target,X=Ti.useContext(cm),Q=Au(),U=L.shouldForwardProp||Q.shouldForwardProp,O=R1(C,X,G)||ka,E=function(ge,me,fe){for(var En,kn=Ve(Ve({},me),{className:void 0,theme:fe}),Sa=0;Sa<ge.length;Sa+=1){var wi=Pa(En=ge[Sa])?En(kn):En;for(var M in wi)kn[M]=M==="className"?Ci(kn[M],wi[M]):M==="style"?Ve(Ve({},kn[M]),wi[M]):wi[M]}return me.className&&(kn.className=Ci(kn.className,me.className)),kn}(T,C,O),D=E.as||J,F={};for(var _ in E)E[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&E.theme===O||(_==="forwardedAs"?F.as=E.forwardedAs:U&&!U(_,D)||(F[_]=E[_]));var ee=function(ge,me){var fe=Au(),En=ge.generateAndInjectStyles(me,fe.styleSheet,fe.stylis);return En}(z,E),I=Ci(Te,$);return ee&&(I+=" "+ee),E.className&&(I+=" "+E.className),F[Kl(D)&&!qp.has(D)?"class":"className"]=I,F.ref=b,K.createElement(D,F)}(v,R,P)}h.displayName=p;var v=Ti.forwardRef(h);return v.attrs=u,v.componentStyle=f,v.displayName=p,v.shouldForwardProp=j,v.foldedComponentIds=a?Ci(t.foldedComponentIds,t.styledComponentId):"",v.styledComponentId=m,v.target=a?t.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=a?function(P){for(var L=[],C=1;C<arguments.length;C++)L[C-1]=arguments[C];for(var b=0,T=L;b<T.length;b++)Js(P,T[b],!0);return P}({},t.defaultProps,R):R}}),Zc(v,function(){return".".concat(v.styledComponentId)}),r&&im(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Vu(e,n){for(var i=[e[0]],a=0,t=n.length;a<t;a+=1)i.push(n[a],e[a+1]);return i}var Uu=function(e){return Object.assign(e,{isCss:!0})};function nw(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(Pa(e)||Nt(e))return Uu($i(Vu(Jo,lo([e],n,!0))));var a=e;return n.length===0&&a.length===1&&typeof a[0]=="string"?$i(a):Uu($i(Vu(a,n)))}function _s(e,n,i){if(i===void 0&&(i=ka),!n)throw _t(1,n);var a=function(t){for(var r=[],l=1;l<arguments.length;l++)r[l-1]=arguments[l];return e(n,i,nw.apply(void 0,lo([t],r,!1)))};return a.attrs=function(t){return _s(e,n,Ve(Ve({},i),{attrs:Array.prototype.concat(i.attrs,t).filter(Boolean)}))},a.withConfig=function(t){return _s(e,n,Ve(Ve({},i),t))},a}var dm=function(e){return _s(ew,e)},w=dm;qp.forEach(function(e){w[e]=dm(e)});var um={exports:{}},iw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aw=iw,tw=aw;function gm(){}function pm(){}pm.resetWarningCache=gm;var rw=function(){function e(a,t,r,l,s,c){if(c!==tw){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:pm,resetWarningCache:gm};return i.PropTypes=i,i};um.exports=rw();var ow=um.exports;const S=gg(ow),lw=w.nav`
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
`,_a=w(he)`
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
`,Ba=w.span`
    font-size: 0.8vw;
    color: ${e=>e.$color};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`,Aa=w.h4`
    font-size: 1.7vw;
    color: ${e=>e.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 8vw;
    }
`,Ia=w.span`
    font-size: 0.8vw;
    color: ${e=>e.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`;function mm({isButtonClicked:e,onLinkClick:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=y(c=>c.mode),{color:r}=y(c=>c.color),[l,s]=K.useState("flex");return K.useEffect(()=>{window.innerWidth<=560?s(e?"flex":"none"):s("flex")},[e]),o.jsxs(lw,{$bgColor:i,display:l,children:[o.jsxs(_a,{$mainBgColor:t,to:"/Hiragana",onClick:n,children:[o.jsx(Ba,{$color:r,children:"ひらがな"}),o.jsx(Aa,{$fontColor:a,children:"あ"}),o.jsx(Ia,{$fontColor:a,children:"hiragana"})]}),o.jsxs(_a,{$mainBgColor:t,to:"/Katakana",onClick:n,children:[o.jsx(Ba,{$color:r,children:"カタカナ"}),o.jsx(Aa,{$fontColor:a,children:"ア"}),o.jsx(Ia,{$fontColor:a,children:"katakana"})]}),o.jsxs(_a,{$mainBgColor:t,to:"/Kanji",onClick:n,children:[o.jsx(Ba,{$color:r,children:"かんじ"}),o.jsx(Aa,{$fontColor:a,children:"漢字"}),o.jsx(Ia,{$fontColor:a,children:"kanji"})]}),o.jsxs(_a,{$mainBgColor:t,to:"/Vocabulaire",onClick:n,children:[o.jsx(Ba,{$color:r,children:"ごい"}),o.jsx(Aa,{$fontColor:a,children:"語彙"}),o.jsx(Ia,{$fontColor:a,children:"Vocabulaire"})]}),o.jsxs(_a,{$mainBgColor:t,to:"/Nombres",onClick:n,children:[o.jsx(Ba,{$color:r,children:"ばんごう"}),o.jsx(Aa,{$fontColor:a,children:"番号"}),o.jsx(Ia,{$fontColor:a,children:"Nombres"})]})]})}mm.propTypes={isButtonClicked:S.bool.isRequired,onLinkClick:S.func.isRequired};const sw=w.div`
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
`,cw=w.div`
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
`,dw=w.div`
    background-color: ${e=>e.$mainBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3vw;
    height: 2.5vw;
    border-radius: 0.5vw;
`,uw=w.span`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    margin: 0;
    border-radius: 0.5vw;
`;function gw(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(d=>d.mode),{color:a}=y(d=>d.color),[t,r]=K.useState("日本"),[l,s]=K.useState(new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"}));K.useEffect(()=>{const d=setInterval(()=>{s(new Date().toLocaleTimeString(t==="フランス"?"fr-FR":"ja-JP",{timeZone:t==="フランス"?"Europe/Paris":"Asia/Tokyo",hour:"2-digit",minute:"2-digit"}))},10);return()=>clearInterval(d)},[t]);const c=d=>{r(d==="France"?"フランス":"日本")};return o.jsxs(sw,{$bgColor:e,$fontColor:n,children:[o.jsxs(cw,{$mainBgColor:i,$fontColor:n,children:[o.jsx("button",{onClick:()=>c("France"),style:{backgroundColor:t==="フランス"?a:i},children:"France"}),o.jsx("button",{onClick:()=>c("Japon"),style:{backgroundColor:t==="日本"?a:i},children:"Japon"})]}),o.jsx(dw,{$mainBgColor:i,children:t}),o.jsx(uw,{$color:a,$mainBgColor:i,children:l})]})}const pw=w.button`
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
   `;function fm({onButtonClick:e}){const{color:n}=y(a=>a.color),{mainBgColor:i}=y(a=>a.mode);return o.jsx(pw,{$color:n,$bgColor:i,onClick:e,children:"Menu"})}fm.propTypes={onButtonClick:S.func.isRequired};const mw=w.div`
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
`;function fw(){const[e,n]=K.useState(!1),i=()=>{n(!e)},a=()=>{n(!1)};return o.jsxs(mw,{$clicked:e?"true":void 0,children:[o.jsx(mm,{isButtonClicked:e,onLinkClick:a}),o.jsx(gw,{}),o.jsx(fm,{onButtonClick:i})]})}function Le(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var hw=typeof Symbol=="function"&&Symbol.observable||"@@observable",Xu=hw,Tl=()=>Math.random().toString(36).substring(7).split("").join("."),vw={INIT:`@@redux/INIT${Tl()}`,REPLACE:`@@redux/REPLACE${Tl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Tl()}`},go=vw;function Gc(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function hm(e,n,i){if(typeof e!="function")throw new Error(Le(2));if(typeof n=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(Le(0));if(typeof n=="function"&&typeof i>"u"&&(i=n,n=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(Le(1));return i(hm)(e,n)}let a=e,t=n,r=new Map,l=r,s=0,c=!1;function d(){l===r&&(l=new Map,r.forEach((k,f)=>{l.set(f,k)}))}function g(){if(c)throw new Error(Le(3));return t}function p(k){if(typeof k!="function")throw new Error(Le(4));if(c)throw new Error(Le(5));let f=!0;d();const h=s++;return l.set(h,k),function(){if(f){if(c)throw new Error(Le(6));f=!1,d(),l.delete(h),r=null}}}function m(k){if(!Gc(k))throw new Error(Le(7));if(typeof k.type>"u")throw new Error(Le(8));if(typeof k.type!="string")throw new Error(Le(17));if(c)throw new Error(Le(9));try{c=!0,t=a(t,k)}finally{c=!1}return(r=l).forEach(h=>{h()}),k}function u(k){if(typeof k!="function")throw new Error(Le(10));a=k,m({type:go.REPLACE})}function j(){const k=p;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(Le(11));function h(){const R=f;R.next&&R.next(g())}return h(),{unsubscribe:k(h)}},[Xu](){return this}}}return m({type:go.INIT}),{dispatch:m,subscribe:p,getState:g,replaceReducer:u,[Xu]:j}}function ww(e){Object.keys(e).forEach(n=>{const i=e[n];if(typeof i(void 0,{type:go.INIT})>"u")throw new Error(Le(12));if(typeof i(void 0,{type:go.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Le(13))})}function jw(e){const n=Object.keys(e),i={};for(let r=0;r<n.length;r++){const l=n[r];typeof e[l]=="function"&&(i[l]=e[l])}const a=Object.keys(i);let t;try{ww(i)}catch(r){t=r}return function(l={},s){if(t)throw t;let c=!1;const d={};for(let g=0;g<a.length;g++){const p=a[g],m=i[p],u=l[p],j=m(u,s);if(typeof j>"u")throw s&&s.type,new Error(Le(14));d[p]=j,c=c||j!==u}return c=c||a.length!==Object.keys(l).length,c?d:l}}function po(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,i)=>(...a)=>n(i(...a)))}function Rw(...e){return n=>(i,a)=>{const t=n(i,a);let r=()=>{throw new Error(Le(15))};const l={getState:t.getState,dispatch:(c,...d)=>r(c,...d)},s=e.map(c=>c(l));return r=po(...s)(t.dispatch),{...t,dispatch:r}}}function xw(e){return Gc(e)&&"type"in e&&typeof e.type=="string"}var vm=Symbol.for("immer-nothing"),Wu=Symbol.for("immer-draftable"),nn=Symbol.for("immer-state");function vn(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ca=Object.getPrototypeOf;function Hi(e){return!!e&&!!e[nn]}function Un(e){var n;return e?wm(e)||Array.isArray(e)||!!e[Wu]||!!((n=e.constructor)!=null&&n[Wu])||_o(e)||Bo(e):!1}var yw=Object.prototype.constructor.toString();function wm(e){if(!e||typeof e!="object")return!1;const n=Ca(e);if(n===null)return!0;const i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===yw}function mo(e,n){Fo(e)===0?Reflect.ownKeys(e).forEach(i=>{n(i,e[i],e)}):e.forEach((i,a)=>n(a,i,e))}function Fo(e){const n=e[nn];return n?n.type_:Array.isArray(e)?1:_o(e)?2:Bo(e)?3:0}function Bs(e,n){return Fo(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function jm(e,n,i){const a=Fo(e);a===2?e.set(n,i):a===3?e.add(i):e[n]=i}function kw(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function _o(e){return e instanceof Map}function Bo(e){return e instanceof Set}function xi(e){return e.copy_||e.base_}function As(e,n){if(_o(e))return new Map(e);if(Bo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const i=wm(e);if(n===!0||n==="class_only"&&!i){const a=Object.getOwnPropertyDescriptors(e);delete a[nn];let t=Reflect.ownKeys(a);for(let r=0;r<t.length;r++){const l=t[r],s=a[l];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(a[l]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[l]})}return Object.create(Ca(e),a)}else{const a=Ca(e);if(a!==null&&i)return{...e};const t=Object.create(a);return Object.assign(t,e)}}function Yc(e,n=!1){return Ao(e)||Hi(e)||!Un(e)||(Fo(e)>1&&(e.set=e.add=e.clear=e.delete=Pw),Object.freeze(e),n&&Object.entries(e).forEach(([i,a])=>Yc(a,!0))),e}function Pw(){vn(2)}function Ao(e){return Object.isFrozen(e)}var Cw={};function zi(e){const n=Cw[e];return n||vn(0,e),n}var St;function Rm(){return St}function Lw(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Qu(e,n){n&&(zi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Is(e){Vs(e),e.drafts_.forEach(bw),e.drafts_=null}function Vs(e){e===St&&(St=e.parent_)}function qu(e){return St=Lw(St,e)}function bw(e){const n=e[nn];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Zu(e,n){n.unfinalizedDrafts_=n.drafts_.length;const i=n.drafts_[0];return e!==void 0&&e!==i?(i[nn].modified_&&(Is(n),vn(4)),Un(e)&&(e=fo(n,e),n.parent_||ho(n,e)),n.patches_&&zi("Patches").generateReplacementPatches_(i[nn].base_,e,n.patches_,n.inversePatches_)):e=fo(n,i,[]),Is(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==vm?e:void 0}function fo(e,n,i){if(Ao(n))return n;const a=n[nn];if(!a)return mo(n,(t,r)=>Gu(e,a,n,t,r,i)),n;if(a.scope_!==e)return n;if(!a.modified_)return ho(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const t=a.copy_;let r=t,l=!1;a.type_===3&&(r=new Set(t),t.clear(),l=!0),mo(r,(s,c)=>Gu(e,a,t,s,c,i,l)),ho(e,t,!1),i&&e.patches_&&zi("Patches").generatePatches_(a,i,e.patches_,e.inversePatches_)}return a.copy_}function Gu(e,n,i,a,t,r,l){if(Hi(t)){const s=r&&n&&n.type_!==3&&!Bs(n.assigned_,a)?r.concat(a):void 0,c=fo(e,t,s);if(jm(i,a,c),Hi(c))e.canAutoFreeze_=!1;else return}else l&&i.add(t);if(Un(t)&&!Ao(t)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;fo(e,t),(!n||!n.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,a)&&ho(e,t)}}function ho(e,n,i=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Yc(n,i)}function Kw(e,n){const i=Array.isArray(e),a={type_:i?1:0,scope_:n?n.scope_:Rm(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let t=a,r=ed;i&&(t=[a],r=Ot);const{revoke:l,proxy:s}=Proxy.revocable(t,r);return a.draft_=s,a.revoke_=l,s}var ed={get(e,n){if(n===nn)return e;const i=xi(e);if(!Bs(i,n))return $w(e,i,n);const a=i[n];return e.finalized_||!Un(a)?a:a===Nl(e.base_,n)?(Sl(e),e.copy_[n]=Xs(a,e)):a},has(e,n){return n in xi(e)},ownKeys(e){return Reflect.ownKeys(xi(e))},set(e,n,i){const a=xm(xi(e),n);if(a!=null&&a.set)return a.set.call(e.draft_,i),!0;if(!e.modified_){const t=Nl(xi(e),n),r=t==null?void 0:t[nn];if(r&&r.base_===i)return e.copy_[n]=i,e.assigned_[n]=!1,!0;if(kw(i,t)&&(i!==void 0||Bs(e.base_,n)))return!0;Sl(e),Us(e)}return e.copy_[n]===i&&(i!==void 0||n in e.copy_)||Number.isNaN(i)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=i,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Nl(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,Sl(e),Us(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const i=xi(e),a=Reflect.getOwnPropertyDescriptor(i,n);return a&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:a.enumerable,value:i[n]}},defineProperty(){vn(11)},getPrototypeOf(e){return Ca(e.base_)},setPrototypeOf(){vn(12)}},Ot={};mo(ed,(e,n)=>{Ot[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Ot.deleteProperty=function(e,n){return Ot.set.call(this,e,n,void 0)};Ot.set=function(e,n,i){return ed.set.call(this,e[0],n,i,e[0])};function Nl(e,n){const i=e[nn];return(i?xi(i):e)[n]}function $w(e,n,i){var t;const a=xm(n,i);return a?"value"in a?a.value:(t=a.get)==null?void 0:t.call(e.draft_):void 0}function xm(e,n){if(!(n in e))return;let i=Ca(e);for(;i;){const a=Object.getOwnPropertyDescriptor(i,n);if(a)return a;i=Ca(i)}}function Us(e){e.modified_||(e.modified_=!0,e.parent_&&Us(e.parent_))}function Sl(e){e.copy_||(e.copy_=As(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Tw=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,i,a)=>{if(typeof n=="function"&&typeof i!="function"){const r=i;i=n;const l=this;return function(c=r,...d){return l.produce(c,g=>i.call(this,g,...d))}}typeof i!="function"&&vn(6),a!==void 0&&typeof a!="function"&&vn(7);let t;if(Un(n)){const r=qu(this),l=Xs(n,void 0);let s=!0;try{t=i(l),s=!1}finally{s?Is(r):Vs(r)}return Qu(r,a),Zu(t,r)}else if(!n||typeof n!="object"){if(t=i(n),t===void 0&&(t=n),t===vm&&(t=void 0),this.autoFreeze_&&Yc(t,!0),a){const r=[],l=[];zi("Patches").generateReplacementPatches_(n,t,r,l),a(r,l)}return t}else vn(1,n)},this.produceWithPatches=(n,i)=>{if(typeof n=="function")return(l,...s)=>this.produceWithPatches(l,c=>n(c,...s));let a,t;return[this.produce(n,i,(l,s)=>{a=l,t=s}),a,t]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Un(e)||vn(8),Hi(e)&&(e=Nw(e));const n=qu(this),i=Xs(e,void 0);return i[nn].isManual_=!0,Vs(n),i}finishDraft(e,n){const i=e&&e[nn];(!i||!i.isManual_)&&vn(9);const{scope_:a}=i;return Qu(a,n),Zu(void 0,a)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let i;for(i=n.length-1;i>=0;i--){const t=n[i];if(t.path.length===0&&t.op==="replace"){e=t.value;break}}i>-1&&(n=n.slice(i+1));const a=zi("Patches").applyPatches_;return Hi(e)?a(e,n):this.produce(e,t=>a(t,n))}};function Xs(e,n){const i=_o(e)?zi("MapSet").proxyMap_(e,n):Bo(e)?zi("MapSet").proxySet_(e,n):Kw(e,n);return(n?n.scope_:Rm()).drafts_.push(i),i}function Nw(e){return Hi(e)||vn(10,e),ym(e)}function ym(e){if(!Un(e)||Ao(e))return e;const n=e[nn];let i;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,i=As(e,n.scope_.immer_.useStrictShallowCopy_)}else i=As(e,!0);return mo(i,(a,t)=>{jm(i,a,ym(t))}),n&&(n.finalized_=!1),i}var an=new Tw,km=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseStrictShallowCopy.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);function Pm(e){return({dispatch:i,getState:a})=>t=>r=>typeof r=="function"?r(i,a,e):t(r)}var Sw=Pm(),Ow=Pm,Mw=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?po:po.apply(null,arguments)};function Yu(e,n){function i(...a){if(n){let t=n(...a);if(!t)throw new Error(xn(0));return{type:e,payload:t.payload,..."meta"in t&&{meta:t.meta},..."error"in t&&{error:t.error}}}return{type:e,payload:a[0]}}return i.toString=()=>`${e}`,i.type=e,i.match=a=>xw(a)&&a.type===e,i}var Cm=class et extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,et.prototype)}static get[Symbol.species](){return et}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new et(...n[0].concat(this)):new et(...n.concat(this))}};function eg(e){return Un(e)?km(e,()=>{}):e}function ng(e,n,i){if(e.has(n)){let t=e.get(n);return i.update&&(t=i.update(t,n,e),e.set(n,t)),t}if(!i.insert)throw new Error(xn(10));const a=i.insert(n,e);return e.set(n,a),a}function Ew(e){return typeof e=="boolean"}var Hw=()=>function(n){const{thunk:i=!0,immutableCheck:a=!0,serializableCheck:t=!0,actionCreatorCheck:r=!0}=n??{};let l=new Cm;return i&&(Ew(i)?l.push(Sw):l.push(Ow(i.extraArgument))),l},zw="RTK_autoBatch",Lm=e=>n=>{setTimeout(n,e)},Dw=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Lm(10),Jw=(e={type:"raf"})=>n=>(...i)=>{const a=n(...i);let t=!0,r=!1,l=!1;const s=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?Dw:e.type==="callback"?e.queueNotification:Lm(e.timeout),d=()=>{l=!1,r&&(r=!1,s.forEach(g=>g()))};return Object.assign({},a,{subscribe(g){const p=()=>t&&g(),m=a.subscribe(p);return s.add(g),()=>{m(),s.delete(g)}},dispatch(g){var p;try{return t=!((p=g==null?void 0:g.meta)!=null&&p[zw]),r=!t,r&&(l||(l=!0,c(d))),a.dispatch(g)}finally{t=!0}}})},Fw=e=>function(i){const{autoBatch:a=!0}=i??{};let t=new Cm(e);return a&&t.push(Jw(typeof a=="object"?a:void 0)),t};function _w(e){const n=Hw(),{reducer:i=void 0,middleware:a,devTools:t=!0,preloadedState:r=void 0,enhancers:l=void 0}=e||{};let s;if(typeof i=="function")s=i;else if(Gc(i))s=jw(i);else throw new Error(xn(1));let c;typeof a=="function"?c=a(n):c=n();let d=po;t&&(d=Mw({trace:!1,...typeof t=="object"&&t}));const g=Rw(...c),p=Fw(g);let m=typeof l=="function"?l(p):p();const u=d(...m);return hm(s,r,u)}function bm(e){const n={},i=[];let a;const t={addCase(r,l){const s=typeof r=="string"?r:r.type;if(!s)throw new Error(xn(28));if(s in n)throw new Error(xn(29));return n[s]=l,t},addMatcher(r,l){return i.push({matcher:r,reducer:l}),t},addDefaultCase(r){return a=r,t}};return e(t),[n,i,a]}function Bw(e){return typeof e=="function"}function Aw(e,n){let[i,a,t]=bm(n),r;if(Bw(e))r=()=>eg(e());else{const s=eg(e);r=()=>s}function l(s=r(),c){let d=[i[c.type],...a.filter(({matcher:g})=>g(c)).map(({reducer:g})=>g)];return d.filter(g=>!!g).length===0&&(d=[t]),d.reduce((g,p)=>{if(p)if(Hi(g)){const u=p(g,c);return u===void 0?g:u}else{if(Un(g))return km(g,m=>p(m,c));{const m=p(g,c);if(m===void 0){if(g===null)return g;throw new Error(xn(9))}return m}}return g},s)}return l.getInitialState=r,l}var Iw=Symbol.for("rtk-slice-createasyncthunk");function Vw(e,n){return`${e}/${n}`}function Uw({creators:e}={}){var i;const n=(i=e==null?void 0:e.asyncThunk)==null?void 0:i[Iw];return function(t){const{name:r,reducerPath:l=r}=t;if(!r)throw new Error(xn(11));typeof process<"u";const s=(typeof t.reducers=="function"?t.reducers(Ww()):t.reducers)||{},c=Object.keys(s),d={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(v,R){const P=typeof v=="string"?v:v.type;if(!P)throw new Error(xn(12));if(P in d.sliceCaseReducersByType)throw new Error(xn(13));return d.sliceCaseReducersByType[P]=R,g},addMatcher(v,R){return d.sliceMatchers.push({matcher:v,reducer:R}),g},exposeAction(v,R){return d.actionCreators[v]=R,g},exposeCaseReducer(v,R){return d.sliceCaseReducersByName[v]=R,g}};c.forEach(v=>{const R=s[v],P={reducerName:v,type:Vw(r,v),createNotation:typeof t.reducers=="function"};qw(R)?Gw(P,R,g,n):Qw(P,R,g)});function p(){const[v={},R=[],P=void 0]=typeof t.extraReducers=="function"?bm(t.extraReducers):[t.extraReducers],L={...v,...d.sliceCaseReducersByType};return Aw(t.initialState,C=>{for(let b in L)C.addCase(b,L[b]);for(let b of d.sliceMatchers)C.addMatcher(b.matcher,b.reducer);for(let b of R)C.addMatcher(b.matcher,b.reducer);P&&C.addDefaultCase(P)})}const m=v=>v,u=new Map;let j;function x(v,R){return j||(j=p()),j(v,R)}function k(){return j||(j=p()),j.getInitialState()}function f(v,R=!1){function P(C){let b=C[v];return typeof b>"u"&&R&&(b=k()),b}function L(C=m){const b=ng(u,R,{insert:()=>new WeakMap});return ng(b,C,{insert:()=>{const T={};for(const[z,G]of Object.entries(t.selectors??{}))T[z]=Xw(G,C,k,R);return T}})}return{reducerPath:v,getSelectors:L,get selectors(){return L(P)},selectSlice:P}}const h={name:r,reducer:x,actions:d.actionCreators,caseReducers:d.sliceCaseReducersByName,getInitialState:k,...f(l),injectInto(v,{reducerPath:R,...P}={}){const L=R??l;return v.inject({reducerPath:L,reducer:x},P),{...h,...f(L,!0)}}};return h}}function Xw(e,n,i,a){function t(r,...l){let s=n(r);return typeof s>"u"&&a&&(s=i()),e(s,...l)}return t.unwrapped=e,t}var Mn=Uw();function Ww(){function e(n,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...i}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...i){return n(...i)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:i}},asyncThunk:e}}function Qw({type:e,reducerName:n,createNotation:i},a,t){let r,l;if("reducer"in a){if(i&&!Zw(a))throw new Error(xn(17));r=a.reducer,l=a.prepare}else r=a;t.addCase(e,r).exposeCaseReducer(n,r).exposeAction(n,l?Yu(e,l):Yu(e))}function qw(e){return e._reducerDefinitionType==="asyncThunk"}function Zw(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Gw({type:e,reducerName:n},i,a,t){if(!t)throw new Error(xn(18));const{payloadCreator:r,fulfilled:l,pending:s,rejected:c,settled:d,options:g}=i,p=t(e,r,g);a.exposeAction(n,p),l&&a.addCase(p.fulfilled,l),s&&a.addCase(p.pending,s),c&&a.addCase(p.rejected,c),d&&a.addMatcher(p.settled,d),a.exposeCaseReducer(n,{fulfilled:l||dr,pending:s||dr,rejected:c||dr,settled:d||dr})}function dr(){}function xn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Yw=[{id:1,Kanji:"一",OnReading:["イチ","イツ"],KunReading:["ひと","ひと(つ)"],OnPrincipalReading:"イチ",KunPrincipalReading:"ひと(つ)",OnPrincipalReadingRomaji:"ichi",KunPrincipalReadingRomaji:"hito(tsu)",JLPTLevel:"N5",Meaning:"un",SecondaryMeaning:null},{id:2,Kanji:"二",OnReading:["ニ","ジ"],KunReading:["ふた","ふた(つ)"],OnPrincipalReading:"ニ",KunPrincipalReading:"ふた(つ)",OnPrincipalReadingRomaji:"ni",KunPrincipalReadingRomaji:"futa(tsu)",JLPTLevel:"N5",Meaning:"deux",SecondaryMeaning:null},{id:3,Kanji:"三",OnReading:["サン"],KunReading:["み","み(つ)"],OnPrincipalReading:"サン",KunPrincipalReading:"み(つ)",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"mi(tsu)",JLPTLevel:"N5",Meaning:"trois",SecondaryMeaning:null},{id:4,Kanji:"四",OnReading:["シ"],KunReading:["よん","よ","よ(つ)"],OnPrincipalReading:"シ",KunPrincipalReading:"よん",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"yon",JLPTLevel:"N5",Meaning:"quatre",SecondaryMeaning:null},{id:5,Kanji:"五",OnReading:["ゴ"],KunReading:["いつ","いつ(つ)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"いつ(つ)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"itsu(tsu)",JLPTLevel:"N5",Meaning:"cinq",SecondaryMeaning:null},{id:6,Kanji:"六",OnReading:["ロク"],KunReading:["む","む(つ)","むい"],OnPrincipalReading:"ロク",KunPrincipalReading:"む(つ)",OnPrincipalReadingRomaji:"roku",KunPrincipalReadingRomaji:"mu(tsu)",JLPTLevel:"N5",Meaning:"six",SecondaryMeaning:null},{id:7,Kanji:"七",OnReading:["シチ"],KunReading:["なな","なな(つ)","なの"],OnPrincipalReading:"シチ",KunPrincipalReading:"なな(つ)",OnPrincipalReadingRomaji:"shichi",KunPrincipalReadingRomaji:"nana(tsu)",JLPTLevel:"N5",Meaning:"sept",SecondaryMeaning:null},{id:8,Kanji:"八",OnReading:["ハチ"],KunReading:["や","や(つ)","よう"],OnPrincipalReading:"ハチ",KunPrincipalReading:"や(つ)",OnPrincipalReadingRomaji:"hachi",KunPrincipalReadingRomaji:"ya(tsu)",JLPTLevel:"N5",Meaning:"huit",SecondaryMeaning:null},{id:9,Kanji:"九",OnReading:["キュウ","ク"],KunReading:["ここの","ここの(つ)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"ここの(つ)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kokono(tsu)",JLPTLevel:"N5",Meaning:"neuf",SecondaryMeaning:null},{id:10,Kanji:"十",OnReading:["ジッ"],KunReading:["とお","と"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"とお",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"too",JLPTLevel:"N5",Meaning:"dix",SecondaryMeaning:null},{id:11,Kanji:"人",OnReading:["ジン","ニン"],KunReading:["ひと"],OnPrincipalReading:"ジン",KunPrincipalReading:"ひと",OnPrincipalReadingRomaji:"jin",KunPrincipalReadingRomaji:"hito",JLPTLevel:"N5",Meaning:"personne",SecondaryMeaning:"humain"},{id:12,Kanji:"今",OnReading:["コン","キン"],KunReading:["いま"],OnPrincipalReading:"コン",KunPrincipalReading:"いま",OnPrincipalReadingRomaji:"kon",KunPrincipalReadingRomaji:"ima",JLPTLevel:"N5",Meaning:"maintenant",SecondaryMeaning:null},{id:13,Kanji:"日",OnReading:["ニチ","ジツ"],KunReading:["ひ","か"],OnPrincipalReading:"ニチ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"nichi",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"jour",SecondaryMeaning:"soleil"},{id:14,Kanji:"週",OnReading:["シュウ"],KunReading:["-"],OnPrincipalReading:"シュウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:null,JLPTLevel:"N5",Meaning:"semaine",SecondaryMeaning:null},{id:15,Kanji:"月",OnReading:["ゲツ","ガツ"],KunReading:["つき"],OnPrincipalReading:"ゲツ",KunPrincipalReading:"つき",OnPrincipalReadingRomaji:"getsu",KunPrincipalReadingRomaji:"tsuki",JLPTLevel:"N5",Meaning:"mois",SecondaryMeaning:"lune"},{id:16,Kanji:"年",OnReading:["ネン"],KunReading:["とし"],OnPrincipalReading:"ネン",KunPrincipalReading:"とし",OnPrincipalReadingRomaji:"nen",KunPrincipalReadingRomaji:"toshi",JLPTLevel:"N5",Meaning:"année",SecondaryMeaning:null},{id:17,Kanji:"中",OnReading:["チュウ","ジュウ"],KunReading:["なか"],OnPrincipalReading:"チュウ",KunPrincipalReading:"なか",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"naka",JLPTLevel:"N5",Meaning:"milieu",SecondaryMeaning:"dedans"},{id:18,Kanji:"山",OnReading:["サン"],KunReading:["やま"],OnPrincipalReading:"サン",KunPrincipalReading:"やま",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"yama",JLPTLevel:"N5",Meaning:"montagne",SecondaryMeaning:null},{id:19,Kanji:"川",OnReading:["セン"],KunReading:["かわ"],OnPrincipalReading:"セン",KunPrincipalReading:"かわ",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"kawa",JLPTLevel:"N5",Meaning:"rivière",SecondaryMeaning:"fleuve"},{id:20,Kanji:"左",OnReading:["サ"],KunReading:["ひだり"],OnPrincipalReading:"サ",KunPrincipalReading:"ひだり",OnPrincipalReadingRomaji:"sa",KunPrincipalReadingRomaji:"hidari",JLPTLevel:"N5",Meaning:"gauche",SecondaryMeaning:null},{id:21,Kanji:"右",OnReading:["ウ","ユウ"],KunReading:["みぎ"],OnPrincipalReading:"ウ",KunPrincipalReading:"みぎ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"migi",JLPTLevel:"N5",Meaning:"droite",SecondaryMeaning:null},{id:22,Kanji:"大",OnReading:["ダイ","タイ"],KunReading:["おお","おお(きい)"],OnPrincipalReading:"ダイ",KunPrincipalReading:"おお(きい)",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"oo(kii)",JLPTLevel:"N5",Meaning:"grand",SecondaryMeaning:null},{id:23,Kanji:"木",OnReading:["モク","ボク"],KunReading:["き","こ"],OnPrincipalReading:"モク",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"arbre",SecondaryMeaning:"bois"},{id:24,Kanji:"本",OnReading:["ホン"],KunReading:["もと"],OnPrincipalReading:"ホン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"hon",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N5",Meaning:"livre",SecondaryMeaning:"origine"},{id:25,Kanji:"水",OnReading:["スイ"],KunReading:["みず"],OnPrincipalReading:"スイ",KunPrincipalReading:"みず",OnPrincipalReadingRomaji:"sui",KunPrincipalReadingRomaji:"mizu",JLPTLevel:"N5",Meaning:"eau",SecondaryMeaning:null},{id:26,Kanji:"火",OnReading:["カ"],KunReading:["ひ"],OnPrincipalReading:"カ",KunPrincipalReading:"ひ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hi",JLPTLevel:"N5",Meaning:"feu",SecondaryMeaning:null},{id:27,Kanji:"父",OnReading:["フ"],KunReading:["ちち"],OnPrincipalReading:"フ",KunPrincipalReading:"ちち",OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:"chichi",JLPTLevel:"N5",Meaning:"père",SecondaryMeaning:null},{id:28,Kanji:"母",OnReading:["ボ"],KunReading:["はは"],OnPrincipalReading:"ボ",KunPrincipalReading:"はは",OnPrincipalReadingRomaji:"bo",KunPrincipalReadingRomaji:"haha",JLPTLevel:"N5",Meaning:"mère",SecondaryMeaning:null},{id:29,Kanji:"耳",OnReading:["ジ"],KunReading:["みみ"],OnPrincipalReading:"ジ",KunPrincipalReading:"みみ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mimi",JLPTLevel:"N5",Meaning:"oreille",SecondaryMeaning:null},{id:30,Kanji:"口",OnReading:["コウ","ク"],KunReading:["くち"],OnPrincipalReading:"コウ",KunPrincipalReading:"くち",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kuchi",JLPTLevel:"N5",Meaning:"bouche",SecondaryMeaning:"entrée"},{id:31,Kanji:"休",OnReading:["キュウ"],KunReading:["やす(む)","やす(める)","やす(まる)"],OnPrincipalReading:"キュウ",KunPrincipalReading:"やす(む)",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"yasu(mu)",JLPTLevel:"N5",Meaning:"se reposer",SecondaryMeaning:"pause"},{id:32,Kanji:"何",OnReading:["カ"],KunReading:["なに","なん"],OnPrincipalReading:"カ",KunPrincipalReading:"なに",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"nani",JLPTLevel:"N5",Meaning:"quoi",SecondaryMeaning:"que"},{id:33,Kanji:"入",OnReading:["ニュウ"],KunReading:["い(る)","い(れる)","はい(る)"],OnPrincipalReading:"ニュウ",KunPrincipalReading:"はい(る)",OnPrincipalReadingRomaji:"nyuu",KunPrincipalReadingRomaji:"hai(ru)",JLPTLevel:"N5",Meaning:"entrer",SecondaryMeaning:"insérer"},{id:34,Kanji:"上",OnReading:["ジョウ","ショウ"],KunReading:["うえ","あ(げる)","あ(がる)","のぼ(る)"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"うえ",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ue",JLPTLevel:"N5",Meaning:"au-dessus",SecondaryMeaning:"haut"},{id:35,Kanji:"前",OnReading:["ゼン"],KunReading:["まえ"],OnPrincipalReading:"ゼン",KunPrincipalReading:"まえ",OnPrincipalReadingRomaji:"zen",KunPrincipalReadingRomaji:"mae",JLPTLevel:"N5",Meaning:"devant",SecondaryMeaning:"avant"},{id:36,Kanji:"下",OnReading:["カ","ゲ"],KunReading:["した","さ(げる)","さ(がる)","くだ(る)","お(ろす)","お(りる)"],OnPrincipalReading:"カ",KunPrincipalReading:"した",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"shita",JLPTLevel:"N5",Meaning:"en-dessous",SecondaryMeaning:"bas"},{id:37,Kanji:"千",OnReading:["セン"],KunReading:["ち"],OnPrincipalReading:"セン",KunPrincipalReading:"ち",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"chi",JLPTLevel:"N5",Meaning:"mille",SecondaryMeaning:null},{id:38,Kanji:"午",OnReading:["ゴ"],KunReading:["うま"],OnPrincipalReading:"ゴ",KunPrincipalReading:"うま",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"uma",JLPTLevel:"N5",Meaning:"midi",SecondaryMeaning:null},{id:39,Kanji:"友",OnReading:["ユウ"],KunReading:["とも"],OnPrincipalReading:"ユウ",KunPrincipalReading:"とも",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"tomo",JLPTLevel:"N5",Meaning:"ami",SecondaryMeaning:null},{id:40,Kanji:"古",OnReading:["コ"],KunReading:["ふる(い)"],OnPrincipalReading:"コ",KunPrincipalReading:"ふる(い)",OnPrincipalReadingRomaji:"ko",KunPrincipalReadingRomaji:"furui",JLPTLevel:"N5",Meaning:"ancien",SecondaryMeaning:"vieux"},{id:41,Kanji:"名",OnReading:["メイ","ミョウ"],KunReading:["な"],OnPrincipalReading:"メイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"na",JLPTLevel:"N5",Meaning:"nom",SecondaryMeaning:"prénom"},{id:42,Kanji:"国",OnReading:["コク"],KunReading:["くに"],OnPrincipalReading:"コク",KunPrincipalReading:"くに",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuni",JLPTLevel:"N5",Meaning:"pays",SecondaryMeaning:"nation"},{id:43,Kanji:"外",OnReading:["ガイ","ゲ"],KunReading:["そと","ほか"],OnPrincipalReading:"ガイ",KunPrincipalReading:"そと",OnPrincipalReadingRomaji:"gai",KunPrincipalReadingRomaji:"soto",JLPTLevel:"N5",Meaning:"extérieur",SecondaryMeaning:"autre"},{id:44,Kanji:"女",OnReading:["ジョ","ニョ","ニョウ"],KunReading:["おんな","め"],OnPrincipalReading:"ジョ",KunPrincipalReading:"おんな",OnPrincipalReadingRomaji:"jo",KunPrincipalReadingRomaji:"onna",JLPTLevel:"N5",Meaning:"femme",SecondaryMeaning:"féminin"},{id:45,Kanji:"男",OnReading:["ダン","ナン"],KunReading:["おとこ"],OnPrincipalReading:"ダン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"dan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N5",Meaning:"homme",SecondaryMeaning:"masculin"},{id:46,Kanji:"子",OnReading:["シ","ス","ツ"],KunReading:["こ","お"],OnPrincipalReading:"シ",KunPrincipalReading:"こ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ko",JLPTLevel:"N5",Meaning:"enfant",SecondaryMeaning:"fils"},{id:47,Kanji:"学",OnReading:["ガク"],KunReading:["まな(ぶ)"],OnPrincipalReading:"ガク",KunPrincipalReading:"まな(ぶ)",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"manabu",JLPTLevel:"N5",Meaning:"étudier",SecondaryMeaning:"apprentissage"},{id:48,Kanji:"生",OnReading:["セイ","ショウ"],KunReading:["い(きる)","う(まれる)","お(う)","なま"],OnPrincipalReading:"セイ",KunPrincipalReading:"い(きる)",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"iki(ru)",JLPTLevel:"N5",Meaning:"vie",SecondaryMeaning:"naissance"},{id:49,Kanji:"小",OnReading:["ショウ"],KunReading:["ちい(さい)","こ"],OnPrincipalReading:"ショウ",KunPrincipalReading:"ちい(さい)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"chi(i)",JLPTLevel:"N5",Meaning:"petit",SecondaryMeaning:"minuscule"},{id:50,Kanji:"書",OnReading:["ショ"],KunReading:["か(く)"],OnPrincipalReading:"ショ",KunPrincipalReading:"か(く)",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"kaku",JLPTLevel:"N5",Meaning:"écrire",SecondaryMeaning:"livre"},{id:51,Kanji:"毎",OnReading:["マイ"],KunReading:["ごと"],OnPrincipalReading:"マイ",KunPrincipalReading:"ごと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"goto",JLPTLevel:"N5",Meaning:"chaque",SecondaryMeaning:"tous"},{id:52,Kanji:"先",OnReading:["セン"],KunReading:["さき","ま(ず)"],OnPrincipalReading:"セン",KunPrincipalReading:"さき",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"saki",JLPTLevel:"N5",Meaning:"avant",SecondaryMeaning:"précédent"},{id:53,Kanji:"会",OnReading:["カイ","エ"],KunReading:["あ(う)"],OnPrincipalReading:"カイ",KunPrincipalReading:"あ(う)",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"au",JLPTLevel:"N5",Meaning:"rencontre",SecondaryMeaning:"association"},{id:54,Kanji:"万",OnReading:["マン","バン"],KunReading:["よろず"],OnPrincipalReading:"マン",KunPrincipalReading:"よろず",OnPrincipalReadingRomaji:"man",KunPrincipalReadingRomaji:"yorozu",JLPTLevel:"N5",Meaning:"dix mille",SecondaryMeaning:"innombrable"},{id:55,Kanji:"円",OnReading:["エン"],KunReading:["まる"],OnPrincipalReading:"エン",KunPrincipalReading:"まる",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"maru",JLPTLevel:"N5",Meaning:"yen",SecondaryMeaning:"rond"},{id:56,Kanji:"出",OnReading:["シュツ","スイ"],KunReading:["で(る)","だ(す)"],OnPrincipalReading:"シュツ",KunPrincipalReading:"で(る)",OnPrincipalReadingRomaji:"shutsu",KunPrincipalReadingRomaji:"de(ru)",JLPTLevel:"N5",Meaning:"sortir",SecondaryMeaning:"émettre"},{id:57,Kanji:"分",OnReading:["ブン","フン","ブ"],KunReading:["わ(ける)","わ(かる)","ぶん"],OnPrincipalReading:"ブン",KunPrincipalReading:"わ(ける)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"wake(ru)",JLPTLevel:"N5",Meaning:"minute",SecondaryMeaning:"partie"},{id:58,Kanji:"北",OnReading:["ホク"],KunReading:["きた"],OnPrincipalReading:"ホク",KunPrincipalReading:"きた",OnPrincipalReadingRomaji:"hoku",KunPrincipalReadingRomaji:"kita",JLPTLevel:"N5",Meaning:"nord",SecondaryMeaning:null},{id:59,Kanji:"半",OnReading:["ハン"],KunReading:["なか(ば)"],OnPrincipalReading:"ハン",KunPrincipalReading:"なか(ば)",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"naka(ba)",JLPTLevel:"N5",Meaning:"moitié",SecondaryMeaning:null},{id:60,Kanji:"南",OnReading:["ナン","なん"],KunReading:["みなみ"],OnPrincipalReading:"ナン",KunPrincipalReading:"みなみ",OnPrincipalReadingRomaji:"nan",KunPrincipalReadingRomaji:"minami",JLPTLevel:"N5",Meaning:"sud",SecondaryMeaning:null},{id:61,Kanji:"土",OnReading:["ド","ト"],KunReading:["つち"],OnPrincipalReading:"ド",KunPrincipalReading:"つち",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tsuchi",JLPTLevel:"N5",Meaning:"terre",SecondaryMeaning:"sol"},{id:62,Kanji:"多",OnReading:["タ"],KunReading:["おお(い)"],OnPrincipalReading:"タ",KunPrincipalReading:"おお(い)",OnPrincipalReadingRomaji:"ta",KunPrincipalReadingRomaji:"oo(i)",JLPTLevel:"N5",Meaning:"beaucoup",SecondaryMeaning:"plus"},{id:63,Kanji:"天",OnReading:["テン"],KunReading:["あま","あめ"],OnPrincipalReading:"テン",KunPrincipalReading:"あま",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"ama",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"paradis"},{id:64,Kanji:"安",OnReading:["アン"],KunReading:["やす(い)"],OnPrincipalReading:"アン",KunPrincipalReading:"やす(い)",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"yasu(i)",JLPTLevel:"N5",Meaning:"bon marché",SecondaryMeaning:"sécurisé"},{id:65,Kanji:"少",OnReading:["ショウ"],KunReading:["すく(ない)","すこ(し)"],OnPrincipalReading:"ショウ",KunPrincipalReading:"すく(ない)",OnPrincipalReadingRomaji:"shou",KunPrincipalReadingRomaji:"suku(nai)",JLPTLevel:"N5",Meaning:"peu",SecondaryMeaning:"moins"},{id:66,Kanji:"店",OnReading:["テン"],KunReading:["みせ","たな"],OnPrincipalReading:"テン",KunPrincipalReading:"みせ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"mise",JLPTLevel:"N5",Meaning:"magasin",SecondaryMeaning:"boutique"},{id:67,Kanji:"後",OnReading:["ゴ","コウ"],KunReading:["あと","うし(ろ)","のち"],OnPrincipalReading:"ゴ",KunPrincipalReading:"あと",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"ato",JLPTLevel:"N5",Meaning:"après",SecondaryMeaning:"derrière"},{id:68,Kanji:"手",OnReading:["シュ"],KunReading:["て","た"],OnPrincipalReading:"シュ",KunPrincipalReading:"て",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"te",JLPTLevel:"N5",Meaning:"main",SecondaryMeaning:"métier"},{id:69,Kanji:"新",OnReading:["シン"],KunReading:["あたら(しい)","あら(た)"],OnPrincipalReading:"シン",KunPrincipalReading:"あたら(しい)",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"atarashii",JLPTLevel:"N5",Meaning:"nouveau",SecondaryMeaning:"récent"},{id:70,Kanji:"時",OnReading:["ジ"],KunReading:["とき","と"],OnPrincipalReading:"ジ",KunPrincipalReading:"とき",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"toki",JLPTLevel:"N5",Meaning:"temps",SecondaryMeaning:"heure"},{id:71,Kanji:"来",OnReading:["ライ","くる"],KunReading:["くる","きたる"],OnPrincipalReading:"ライ",KunPrincipalReading:"くる",OnPrincipalReadingRomaji:"rai",KunPrincipalReadingRomaji:"kuru",JLPTLevel:"N5",Meaning:"venir",SecondaryMeaning:"arriver"},{id:72,Kanji:"東",OnReading:["トウ"],KunReading:["ひがし"],OnPrincipalReading:"トウ",KunPrincipalReading:"ひがし",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"higashi",JLPTLevel:"N5",Meaning:"est",SecondaryMeaning:"orient"},{id:73,Kanji:"校",OnReading:["コウ"],KunReading:["こう"],OnPrincipalReading:"コウ",KunPrincipalReading:"こう",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kou",JLPTLevel:"N5",Meaning:"école",SecondaryMeaning:"institution"},{id:74,Kanji:"気",OnReading:["キ"],KunReading:["き"],OnPrincipalReading:"キ",KunPrincipalReading:"き",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"ki",JLPTLevel:"N5",Meaning:"esprit",SecondaryMeaning:"atmosphère"},{id:75,Kanji:"白",OnReading:["ハク","ビャク"],KunReading:["しろ","しろ(い)"],OnPrincipalReading:"ハク",KunPrincipalReading:"しろ",OnPrincipalReadingRomaji:"haku",KunPrincipalReadingRomaji:"shiro",JLPTLevel:"N5",Meaning:"blanc",SecondaryMeaning:null},{id:76,Kanji:"百",OnReading:["ヒャク","ビャク"],KunReading:["もも"],OnPrincipalReading:"ヒャク",KunPrincipalReading:"もも",OnPrincipalReadingRomaji:"hyaku",KunPrincipalReadingRomaji:"momo",JLPTLevel:"N5",Meaning:"cent",SecondaryMeaning:"nombre"},{id:77,Kanji:"目",OnReading:["モク","ボク"],KunReading:["め","ま"],OnPrincipalReading:"モク",KunPrincipalReading:"め",OnPrincipalReadingRomaji:"moku",KunPrincipalReadingRomaji:"me",JLPTLevel:"N5",Meaning:"œil",SecondaryMeaning:"but"},{id:78,Kanji:"社",OnReading:["シャ"],KunReading:["やしろ"],OnPrincipalReading:"シャ",KunPrincipalReading:"やしろ",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"yashiro",JLPTLevel:"N5",Meaning:"société",SecondaryMeaning:"temple"},{id:79,Kanji:"空",OnReading:["クウ"],KunReading:["そら","あ(ける)","あ(く)"],OnPrincipalReading:"クウ",KunPrincipalReading:"そら",OnPrincipalReadingRomaji:"kuu",KunPrincipalReadingRomaji:"sora",JLPTLevel:"N5",Meaning:"ciel",SecondaryMeaning:"vide"},{id:80,Kanji:"立",OnReading:["リツ","リュウ"],KunReading:["た(つ)","たて(る)"],OnPrincipalReading:"リツ",KunPrincipalReading:"た(つ)",OnPrincipalReadingRomaji:"ritsu",KunPrincipalReadingRomaji:"ta(tsu)",JLPTLevel:"N5",Meaning:"se lever",SecondaryMeaning:"établir"},{id:81,Kanji:"聞",OnReading:["ブン","モン"],KunReading:["き(く)","きこ(える)"],OnPrincipalReading:"ブン",KunPrincipalReading:"き(く)",OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:"kiku",JLPTLevel:"N5",Meaning:"écouter",SecondaryMeaning:"entendre"},{id:82,Kanji:"花",OnReading:["カ"],KunReading:["はな"],OnPrincipalReading:"カ",KunPrincipalReading:"はな",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"hana",JLPTLevel:"N5",Meaning:"fleur",SecondaryMeaning:null},{id:83,Kanji:"行",OnReading:["コウ","ギョウ"],KunReading:["い(く)","ゆ(く)","おこな(う)"],OnPrincipalReading:"コウ",KunPrincipalReading:"い(く)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"iku",JLPTLevel:"N5",Meaning:"aller",SecondaryMeaning:"ligne"},{id:84,Kanji:"西",OnReading:["セイ","サイ"],KunReading:["にし"],OnPrincipalReading:"セイ",KunPrincipalReading:"にし",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"nishi",JLPTLevel:"N5",Meaning:"ouest",SecondaryMeaning:null},{id:85,Kanji:"見",OnReading:["ケン"],KunReading:["み(る)","み(える)","み(せる)"],OnPrincipalReading:"ケン",KunPrincipalReading:"み(る)",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"miru",JLPTLevel:"N5",Meaning:"voir",SecondaryMeaning:"regarder"},{id:86,Kanji:"言",OnReading:["ゲン","ゴン"],KunReading:["い(う)","こと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"い(う)",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"iu",JLPTLevel:"N5",Meaning:"dire",SecondaryMeaning:"mot"},{id:87,Kanji:"話",OnReading:["ワ"],KunReading:["はな(す)","はなし"],OnPrincipalReading:"ワ",KunPrincipalReading:"はな(す)",OnPrincipalReadingRomaji:"wa",KunPrincipalReadingRomaji:"hanasu",JLPTLevel:"N5",Meaning:"parler",SecondaryMeaning:"conversation"},{id:88,Kanji:"語",OnReading:["ゴ"],KunReading:["かた(る)","かた(らう)"],OnPrincipalReading:"ゴ",KunPrincipalReading:"かた(る)",OnPrincipalReadingRomaji:"go",KunPrincipalReadingRomaji:"kataru",JLPTLevel:"N5",Meaning:"langue",SecondaryMeaning:"parler"},{id:89,Kanji:"読",OnReading:["ドク","トク","トウ"],KunReading:["よ(む)"],OnPrincipalReading:"ドク",KunPrincipalReading:"よ(む)",OnPrincipalReadingRomaji:"doku",KunPrincipalReadingRomaji:"yomu",JLPTLevel:"N5",Meaning:"lire",SecondaryMeaning:"lecture"},{id:90,Kanji:"買",OnReading:["バイ"],KunReading:["か(う)"],OnPrincipalReading:"バイ",KunPrincipalReading:"か(う)",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"kau",JLPTLevel:"N5",Meaning:"acheter",SecondaryMeaning:null},{id:91,Kanji:"足",OnReading:["ソク"],KunReading:["あし","た(りる)","た(す)"],OnPrincipalReading:"ソク",KunPrincipalReading:"あし",OnPrincipalReadingRomaji:"soku",KunPrincipalReadingRomaji:"ashi",JLPTLevel:"N5",Meaning:"pied",SecondaryMeaning:"suffisance"},{id:92,Kanji:"車",OnReading:["シャ"],KunReading:["くるま"],OnPrincipalReading:"シャ",KunPrincipalReading:"くるま",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"kuruma",JLPTLevel:"N5",Meaning:"voiture",SecondaryMeaning:"véhicule"},{id:93,Kanji:"道",OnReading:["ドウ"],KunReading:["みち"],OnPrincipalReading:"ドウ",KunPrincipalReading:"みち",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"michi",JLPTLevel:"N5",Meaning:"route",SecondaryMeaning:"voie"},{id:94,Kanji:"金",OnReading:["キン","コン"],KunReading:["かね","かな"],OnPrincipalReading:"キン",KunPrincipalReading:"かね",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"kane",JLPTLevel:"N5",Meaning:"argent",SecondaryMeaning:"métal"},{id:95,Kanji:"長",OnReading:["チョウ"],KunReading:["なが(い)"],OnPrincipalReading:"チョウ",KunPrincipalReading:"なが(い)",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"nagai",JLPTLevel:"N5",Meaning:"long",SecondaryMeaning:"chef"},{id:96,Kanji:"間",OnReading:["カン","ケン"],KunReading:["あいだ","ま"],OnPrincipalReading:"カン",KunPrincipalReading:"あいだ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"aida",JLPTLevel:"N5",Meaning:"intervalle",SecondaryMeaning:"espace"},{id:97,Kanji:"雨",OnReading:["ウ"],KunReading:["あめ","あま"],OnPrincipalReading:"ウ",KunPrincipalReading:"あめ",OnPrincipalReadingRomaji:"u",KunPrincipalReadingRomaji:"ame",JLPTLevel:"N5",Meaning:"pluie",SecondaryMeaning:null},{id:98,Kanji:"電",OnReading:["デン"],KunReading:["いなづま"],OnPrincipalReading:"デン",KunPrincipalReading:"いなづま",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"inazuma",JLPTLevel:"N5",Meaning:"électricité",SecondaryMeaning:"éclair"},{id:99,Kanji:"食",OnReading:["ショク","ジキ"],KunReading:["た(べる)","く(う)"],OnPrincipalReading:"ショク",KunPrincipalReading:"た(べる)",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"taberu",JLPTLevel:"N5",Meaning:"manger",SecondaryMeaning:"nourriture"},{id:100,Kanji:"飲",OnReading:["イン"],KunReading:["の(む)","の(みもの)"],OnPrincipalReading:"イン",KunPrincipalReading:"の(む)",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"nomu",JLPTLevel:"N5",Meaning:"boire",SecondaryMeaning:"boisson"},{id:101,Kanji:"駅",OnReading:["エキ"],KunReading:["いき"],OnPrincipalReading:"エキ",KunPrincipalReading:"いき",OnPrincipalReadingRomaji:"eki",KunPrincipalReadingRomaji:"iki",JLPTLevel:"N5",Meaning:"gare",SecondaryMeaning:"station"},{id:102,Kanji:"高",OnReading:["コウ"],KunReading:["たか(い)","たか"],OnPrincipalReading:"コウ",KunPrincipalReading:"たか(い)",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"takai",JLPTLevel:"N5",Meaning:"haut",SecondaryMeaning:"cher"},{id:103,Kanji:"魚",OnReading:["ギョ"],KunReading:["さかな","うお"],OnPrincipalReading:"ギョ",KunPrincipalReading:"さかな",OnPrincipalReadingRomaji:"gyo",KunPrincipalReadingRomaji:"sakana",JLPTLevel:"N5",Meaning:"poisson",SecondaryMeaning:null},{id:104,Kanji:"力",OnReading:["リョク","リキ"],KunReading:["ちから"],OnPrincipalReading:"リョク",KunPrincipalReading:"ちから",OnPrincipalReadingRomaji:"ryoku",KunPrincipalReadingRomaji:"chikara",JLPTLevel:"N4",Meaning:"force",SecondaryMeaning:null},{id:105,Kanji:"夕",OnReading:["セキ"],KunReading:["ゆう"],OnPrincipalReading:"セキ",KunPrincipalReading:"ゆう",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"yuu",JLPTLevel:"N4",Meaning:"soir",SecondaryMeaning:null},{id:106,Kanji:"工",OnReading:["コウ","ク"],KunReading:[],OnPrincipalReading:"コウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:107,Kanji:"元",OnReading:["ゲン","ガン"],KunReading:["もと"],OnPrincipalReading:"ゲン",KunPrincipalReading:"もと",OnPrincipalReadingRomaji:"gen",KunPrincipalReadingRomaji:"moto",JLPTLevel:"N4",Meaning:"origine",SecondaryMeaning:"base"},{id:108,Kanji:"止",OnReading:["シ"],KunReading:["とまる","とめる"],OnPrincipalReading:"シ",KunPrincipalReading:"とまる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tomaru",JLPTLevel:"N4",Meaning:"arrêter",SecondaryMeaning:"cesser"},{id:109,Kanji:"引",OnReading:["イン"],KunReading:["ひく","ひける"],OnPrincipalReading:"イン",KunPrincipalReading:"ひく",OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:"hiku",JLPTLevel:"N4",Meaning:"tirer",SecondaryMeaning:null},{id:110,Kanji:"牛",OnReading:["ギュウ"],KunReading:["うし"],OnPrincipalReading:"ギュウ",KunPrincipalReading:"うし",OnPrincipalReadingRomaji:"gyuu",KunPrincipalReadingRomaji:"ushi",JLPTLevel:"N4",Meaning:"vache",SecondaryMeaning:"bétail"},{id:111,Kanji:"区",OnReading:["ク"],KunReading:[],OnPrincipalReading:"ク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"quartier",SecondaryMeaning:"secteur"},{id:112,Kanji:"犬",OnReading:["ケン"],KunReading:["いぬ"],OnPrincipalReading:"ケン",KunPrincipalReading:"いぬ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"inu",JLPTLevel:"N4",Meaning:"chien",SecondaryMeaning:null},{id:113,Kanji:"不",OnReading:["フ","ブ"],KunReading:[],OnPrincipalReading:"フ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"non",SecondaryMeaning:"in-"},{id:114,Kanji:"文",OnReading:["ブン","モン"],KunReading:[],OnPrincipalReading:"ブン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"bun",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"écriture",SecondaryMeaning:"texte"},{id:115,Kanji:"方",OnReading:["ホウ"],KunReading:["かた","がた"],OnPrincipalReading:"ホウ",KunPrincipalReading:"かた",OnPrincipalReadingRomaji:"hou",KunPrincipalReadingRomaji:"kata",JLPTLevel:"N4",Meaning:"direction",SecondaryMeaning:"personne"},{id:116,Kanji:"心",OnReading:["シン"],KunReading:["こころ"],OnPrincipalReading:"シン",KunPrincipalReading:"こころ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"kokoro",JLPTLevel:"N4",Meaning:"cœur",SecondaryMeaning:"esprit"},{id:117,Kanji:"切",OnReading:["セツ","サイ"],KunReading:["きる","きれる"],OnPrincipalReading:"セツ",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"couper",SecondaryMeaning:null},{id:118,Kanji:"太",OnReading:["タイ","タ"],KunReading:["ふとい","ふとる"],OnPrincipalReading:"タイ",KunPrincipalReading:"ふとい",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"futoi",JLPTLevel:"N4",Meaning:"gros",SecondaryMeaning:"épais"},{id:119,Kanji:"代",OnReading:["ダイ","タイ"],KunReading:["かわる","かわり","かえる"],OnPrincipalReading:"ダイ",KunPrincipalReading:"かわる",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"kawaru",JLPTLevel:"N4",Meaning:"remplacement",SecondaryMeaning:"génération"},{id:120,Kanji:"台",OnReading:["ダイ","タイ"],KunReading:[],OnPrincipalReading:"ダイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"socle",SecondaryMeaning:"plateforme"},{id:121,Kanji:"世",OnReading:["セ","セイ"],KunReading:["よ"],OnPrincipalReading:"セ",KunPrincipalReading:"よ",OnPrincipalReadingRomaji:"se",KunPrincipalReadingRomaji:"yo",JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"ère"},{id:122,Kanji:"正",OnReading:["セイ","ショウ"],KunReading:["ただしい","ただす","まさ"],OnPrincipalReading:"セイ",KunPrincipalReading:"ただしい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"tadashii",JLPTLevel:"N4",Meaning:"correct",SecondaryMeaning:"juste"},{id:123,Kanji:"田",OnReading:["デン"],KunReading:["た"],OnPrincipalReading:"デン",KunPrincipalReading:"た",OnPrincipalReadingRomaji:"den",KunPrincipalReadingRomaji:"ta",JLPTLevel:"N4",Meaning:"rizière",SecondaryMeaning:null},{id:124,Kanji:"冬",OnReading:["トウ"],KunReading:["ふゆ"],OnPrincipalReading:"トウ",KunPrincipalReading:"ふゆ",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"fuyu",JLPTLevel:"N4",Meaning:"hiver",SecondaryMeaning:null},{id:125,Kanji:"民",OnReading:["ミン"],KunReading:["たみ"],OnPrincipalReading:"ミン",KunPrincipalReading:"たみ",OnPrincipalReadingRomaji:"min",KunPrincipalReadingRomaji:"tami",JLPTLevel:"N4",Meaning:"peuple",SecondaryMeaning:"nation"},{id:126,Kanji:"用",OnReading:["ヨウ"],KunReading:["もちいる"],OnPrincipalReading:"ヨウ",KunPrincipalReading:"もちいる",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"mochiiru",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"usage"},{id:127,Kanji:"兄",OnReading:["ケイ","キョウ"],KunReading:["あに"],OnPrincipalReading:"ケイ",KunPrincipalReading:"あに",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"ani",JLPTLevel:"N4",Meaning:"grand frère",SecondaryMeaning:null},{id:128,Kanji:"以",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"à partir de",SecondaryMeaning:null},{id:129,Kanji:"去",OnReading:["キョ","コ"],KunReading:["さる"],OnPrincipalReading:"キョ",KunPrincipalReading:"さる",OnPrincipalReadingRomaji:"kyo",KunPrincipalReadingRomaji:"saru",JLPTLevel:"N4",Meaning:"quitter",SecondaryMeaning:"partir"},{id:130,Kanji:"仕",OnReading:["シ"],KunReading:["つかえる"],OnPrincipalReading:"シ",KunPrincipalReading:"つかえる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukaeru",JLPTLevel:"N4",Meaning:"servir",SecondaryMeaning:"faire"},{id:131,Kanji:"市",OnReading:["シ"],KunReading:["いち"],OnPrincipalReading:"シ",KunPrincipalReading:"いち",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ichi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"marché"},{id:132,Kanji:"広",OnReading:["コウ"],KunReading:["ひろい","ひろまる","ひろめる","ひろがる","ひろげる"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひろい",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hiroi",JLPTLevel:"N4",Meaning:"large",SecondaryMeaning:"étendu"},{id:133,Kanji:"主",OnReading:["シュ","ス"],KunReading:["ぬし","おも"],OnPrincipalReading:"シュ",KunPrincipalReading:"ぬし",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"nushi",JLPTLevel:"N4",Meaning:"maître",SecondaryMeaning:"principal"},{id:134,Kanji:"写",OnReading:["シャ"],KunReading:["うつす","うつる"],OnPrincipalReading:"シャ",KunPrincipalReading:"うつす",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"utsusu",JLPTLevel:"N4",Meaning:"copier",SecondaryMeaning:"projeter"},{id:135,Kanji:"字",OnReading:["ジ"],KunReading:[],OnPrincipalReading:"ジ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"caractère",SecondaryMeaning:"lettre"},{id:136,Kanji:"自",OnReading:["ジ","シ"],KunReading:["みずから"],OnPrincipalReading:"ジ",KunPrincipalReading:"みずから",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"mizukara",JLPTLevel:"N4",Meaning:"soi-même",SecondaryMeaning:null},{id:137,Kanji:"考",OnReading:["コウ"],KunReading:["かんがえる"],OnPrincipalReading:"コウ",KunPrincipalReading:"かんがえる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"kangaeru",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:null},{id:138,Kanji:"合",OnReading:["ゴウ","ガッ","カッ"],KunReading:["あう","あわす","あわせる"],OnPrincipalReading:"ゴウ",KunPrincipalReading:"あう",OnPrincipalReadingRomaji:"gou",KunPrincipalReadingRomaji:"au",JLPTLevel:"N4",Meaning:"assembler",SecondaryMeaning:"correspondre"},{id:139,Kanji:"光",OnReading:["コウ"],KunReading:["ひかる","ひかり"],OnPrincipalReading:"コウ",KunPrincipalReading:"ひかる",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"hikaru",JLPTLevel:"N4",Meaning:"lumière",SecondaryMeaning:"briller"},{id:140,Kanji:"好",OnReading:["コウ"],KunReading:["すき","このむ"],OnPrincipalReading:"コウ",KunPrincipalReading:"すき",OnPrincipalReadingRomaji:"kou",KunPrincipalReadingRomaji:"suki",JLPTLevel:"N4",Meaning:"aimer",SecondaryMeaning:"préférence"},{id:141,Kanji:"死",OnReading:["シ"],KunReading:["しぬ"],OnPrincipalReading:"シ",KunPrincipalReading:"しぬ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"shinu",JLPTLevel:"N4",Meaning:"mort",SecondaryMeaning:"mourir"},{id:142,Kanji:"回",OnReading:["カイ","エ"],KunReading:["まわる","まわす"],OnPrincipalReading:"カイ",KunPrincipalReading:"まわる",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"mawaru",JLPTLevel:"N4",Meaning:"tourner",SecondaryMeaning:"nombre de fois"},{id:143,Kanji:"有",OnReading:["ユウ","ウ"],KunReading:["ある"],OnPrincipalReading:"ユウ",KunPrincipalReading:"ある",OnPrincipalReadingRomaji:"yuu",KunPrincipalReadingRomaji:"aru",JLPTLevel:"N4",Meaning:"avoir",SecondaryMeaning:"exister"},{id:144,Kanji:"同",OnReading:["ドウ"],KunReading:["おなじ"],OnPrincipalReading:"ドウ",KunPrincipalReading:"おなじ",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"onaji",JLPTLevel:"N4",Meaning:"même",SecondaryMeaning:"identique"},{id:145,Kanji:"肉",OnReading:["ニク"],KunReading:[],OnPrincipalReading:"ニク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"niku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"viande",SecondaryMeaning:null},{id:146,Kanji:"色",OnReading:["ショク","シキ"],KunReading:["いろ"],OnPrincipalReading:"ショク",KunPrincipalReading:"いろ",OnPrincipalReadingRomaji:"shoku",KunPrincipalReadingRomaji:"iro",JLPTLevel:"N4",Meaning:"couleur",SecondaryMeaning:"apparence"},{id:147,Kanji:"早",OnReading:["ソウ","サッ"],KunReading:["はやい","はやまる","はやめる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はやい",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hayai",JLPTLevel:"N4",Meaning:"tôt",SecondaryMeaning:"rapide"},{id:148,Kanji:"地",OnReading:["チ","ジ"],KunReading:[],OnPrincipalReading:"チ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"terre",SecondaryMeaning:"sol"},{id:149,Kanji:"池",OnReading:["チ"],KunReading:["いけ"],OnPrincipalReading:"チ",KunPrincipalReading:"いけ",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"ike",JLPTLevel:"N4",Meaning:"étang",SecondaryMeaning:null},{id:150,Kanji:"村",OnReading:["ソン"],KunReading:["むら"],OnPrincipalReading:"ソン",KunPrincipalReading:"むら",OnPrincipalReadingRomaji:"son",KunPrincipalReadingRomaji:"mura",JLPTLevel:"N4",Meaning:"village",SecondaryMeaning:null},{id:151,Kanji:"体",OnReading:["タイ","テイ"],KunReading:["からだ"],OnPrincipalReading:"タイ",KunPrincipalReading:"からだ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"karada",JLPTLevel:"N4",Meaning:"corps",SecondaryMeaning:"structure"},{id:152,Kanji:"町",OnReading:["チョウ"],KunReading:["まち"],OnPrincipalReading:"チョウ",KunPrincipalReading:"まち",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"machi",JLPTLevel:"N4",Meaning:"ville",SecondaryMeaning:"quartier"},{id:153,Kanji:"低",OnReading:["テイ"],KunReading:["ひくい","ひくめる","ひくまる"],OnPrincipalReading:"テイ",KunPrincipalReading:"ひくい",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"hikui",JLPTLevel:"N4",Meaning:"bas",SecondaryMeaning:"faible"},{id:154,Kanji:"弟",OnReading:["テイ","ダイ","デ"],KunReading:["おとうと"],OnPrincipalReading:"テイ",KunPrincipalReading:"おとうと",OnPrincipalReadingRomaji:"tei",KunPrincipalReadingRomaji:"otouto",JLPTLevel:"N4",Meaning:"petit frère",SecondaryMeaning:null},{id:155,Kanji:"走",OnReading:["ソウ"],KunReading:["はしる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"はしる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"hashiru",JLPTLevel:"N4",Meaning:"courir",SecondaryMeaning:null},{id:156,Kanji:"赤",OnReading:["セキ","シャク"],KunReading:["あか","あかい","あからむ","あからめる"],OnPrincipalReading:"セキ",KunPrincipalReading:"あか",OnPrincipalReadingRomaji:"seki",KunPrincipalReadingRomaji:"aka",JLPTLevel:"N4",Meaning:"rouge",SecondaryMeaning:"cramoisi"},{id:157,Kanji:"図",OnReading:["ズ","ト"],KunReading:["はかる"],OnPrincipalReading:"ズ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"zu",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"plan",SecondaryMeaning:"carte"},{id:158,Kanji:"究",OnReading:["キュウ"],KunReading:["きわめる"],OnPrincipalReading:"キュウ",KunPrincipalReading:"きわめる",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"kiwameru",JLPTLevel:"N4",Meaning:"rechercher",SecondaryMeaning:"examiner"},{id:159,Kanji:"声",OnReading:["セイ","ショウ"],KunReading:["こえ","こわ"],OnPrincipalReading:"セイ",KunPrincipalReading:"こえ",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"koe",JLPTLevel:"N4",Meaning:"voix",SecondaryMeaning:"son"},{id:160,Kanji:"売",OnReading:["バイ"],KunReading:["うる","うれる"],OnPrincipalReading:"バイ",KunPrincipalReading:"うる",OnPrincipalReadingRomaji:"bai",KunPrincipalReadingRomaji:"uru",JLPTLevel:"N4",Meaning:"vendre",SecondaryMeaning:"marcher (commerce)"},{id:161,Kanji:"別",OnReading:["ベツ"],KunReading:["わかれる","わける"],OnPrincipalReading:"ベツ",KunPrincipalReading:"わかれる",OnPrincipalReadingRomaji:"betsu",KunPrincipalReadingRomaji:"wakareru",JLPTLevel:"N4",Meaning:"séparer",SecondaryMeaning:"distinct"},{id:162,Kanji:"医",OnReading:["イ"],KunReading:[],OnPrincipalReading:"イ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"médecine",SecondaryMeaning:"soigner"},{id:163,Kanji:"近",OnReading:["キン"],KunReading:["ちかい"],OnPrincipalReading:"キン",KunPrincipalReading:"ちかい",OnPrincipalReadingRomaji:"kin",KunPrincipalReadingRomaji:"chikai",JLPTLevel:"N4",Meaning:"proche",SecondaryMeaning:"près"},{id:164,Kanji:"私",OnReading:["シ"],KunReading:["わたし","わたくし"],OnPrincipalReading:"シ",KunPrincipalReading:"わたし",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"watashi",JLPTLevel:"N4",Meaning:"je",SecondaryMeaning:"moi"},{id:165,Kanji:"作",OnReading:["サク","サ"],KunReading:["つくる"],OnPrincipalReading:"サク",KunPrincipalReading:"つくる",OnPrincipalReadingRomaji:"saku",KunPrincipalReadingRomaji:"tsukuru",JLPTLevel:"N4",Meaning:"faire",SecondaryMeaning:"créer"},{id:166,Kanji:"住",OnReading:["ジュウ"],KunReading:["すむ","すまう"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"すむ",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"sumu",JLPTLevel:"N4",Meaning:"habiter",SecondaryMeaning:"vivre"},{id:167,Kanji:"者",OnReading:["シャ"],KunReading:["もの"],OnPrincipalReading:"シャ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"sha",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"personne",SecondaryMeaning:"individu"},{id:168,Kanji:"事",OnReading:["ジ"],KunReading:["こと"],OnPrincipalReading:"ジ",KunPrincipalReading:"こと",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"koto",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"affaire"},{id:169,Kanji:"使",OnReading:["シ"],KunReading:["つかう"],OnPrincipalReading:"シ",KunPrincipalReading:"つかう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"tsukau",JLPTLevel:"N4",Meaning:"utiliser",SecondaryMeaning:"employer"},{id:170,Kanji:"始",OnReading:["シ"],KunReading:["はじめる","はじまる"],OnPrincipalReading:"シ",KunPrincipalReading:"はじめる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"hajimeru",JLPTLevel:"N4",Meaning:"commencer",SecondaryMeaning:"débuter"},{id:171,Kanji:"姉",OnReading:["シ"],KunReading:["あね"],OnPrincipalReading:"シ",KunPrincipalReading:"あね",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"ane",JLPTLevel:"N4",Meaning:"grande sœur",SecondaryMeaning:null},{id:172,Kanji:"英",OnReading:["エイ"],KunReading:[],OnPrincipalReading:"エイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"Angleterre",SecondaryMeaning:"héroïque"},{id:173,Kanji:"京",OnReading:["キョウ","ケイ"],KunReading:[],OnPrincipalReading:"キョウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"Kyoto"},{id:174,Kanji:"画",OnReading:["ガ","カク"],KunReading:[],OnPrincipalReading:"ガ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ga",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"dessin",SecondaryMeaning:"trait"},{id:175,Kanji:"妹",OnReading:["マイ"],KunReading:["いもうと"],OnPrincipalReading:"マイ",KunPrincipalReading:"いもうと",OnPrincipalReadingRomaji:"mai",KunPrincipalReadingRomaji:"imouto",JLPTLevel:"N4",Meaning:"petite sœur",SecondaryMeaning:null},{id:176,Kanji:"味",OnReading:["ミ"],KunReading:["あじ","あじわう"],OnPrincipalReading:"ミ",KunPrincipalReading:"あじ",OnPrincipalReadingRomaji:"mi",KunPrincipalReadingRomaji:"aji",JLPTLevel:"N4",Meaning:"goût",SecondaryMeaning:"saveur"},{id:177,Kanji:"服",OnReading:["フク"],KunReading:[],OnPrincipalReading:"フク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"fuku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"vêtements",SecondaryMeaning:null},{id:178,Kanji:"物",OnReading:["ブツ","モツ"],KunReading:["もの"],OnPrincipalReading:"ブツ",KunPrincipalReading:"もの",OnPrincipalReadingRomaji:"butsu",KunPrincipalReadingRomaji:"mono",JLPTLevel:"N4",Meaning:"chose",SecondaryMeaning:"objet"},{id:179,Kanji:"歩",OnReading:["ホ","ブ","フ"],KunReading:["あるく","あゆむ"],OnPrincipalReading:"ホ",KunPrincipalReading:"あるく",OnPrincipalReadingRomaji:"ho",KunPrincipalReadingRomaji:"aruku",JLPTLevel:"N4",Meaning:"marcher",SecondaryMeaning:"pas"},{id:180,Kanji:"門",OnReading:["モン"],KunReading:["かど"],OnPrincipalReading:"モン",KunPrincipalReading:"かど",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"kado",JLPTLevel:"N4",Meaning:"porte",SecondaryMeaning:"portail"},{id:181,Kanji:"夜",OnReading:["ヤ"],KunReading:["よ","よる"],OnPrincipalReading:"ヤ",KunPrincipalReading:"よる",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"yoru",JLPTLevel:"N4",Meaning:"nuit",SecondaryMeaning:null},{id:182,Kanji:"明",OnReading:["メイ","ミョウ"],KunReading:["あかるい","あける"],OnPrincipalReading:"メイ",KunPrincipalReading:"あかるい",OnPrincipalReadingRomaji:"mei",KunPrincipalReadingRomaji:"akarui",JLPTLevel:"N4",Meaning:"clair",SecondaryMeaning:"lumineux"},{id:183,Kanji:"林",OnReading:["リン"],KunReading:["はやし"],OnPrincipalReading:"リン",KunPrincipalReading:"はやし",OnPrincipalReadingRomaji:"rin",KunPrincipalReadingRomaji:"hayashi",JLPTLevel:"N4",Meaning:"bois",SecondaryMeaning:"forêt"},{id:184,Kanji:"青",OnReading:["セイ","ショウ"],KunReading:["あお","あおい"],OnPrincipalReading:"セイ",KunPrincipalReading:"あおい",OnPrincipalReadingRomaji:"sei",KunPrincipalReadingRomaji:"aoi",JLPTLevel:"N4",Meaning:"bleu",SecondaryMeaning:"vert"},{id:185,Kanji:"所",OnReading:["ショ"],KunReading:["ところ"],OnPrincipalReading:"ショ",KunPrincipalReading:"ところ",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"tokoro",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"endroit"},{id:186,Kanji:"注",OnReading:["チュウ"],KunReading:["そそぐ"],OnPrincipalReading:"チュウ",KunPrincipalReading:"そそぐ",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"sosogu",JLPTLevel:"N4",Meaning:"verser",SecondaryMeaning:"concentrer"},{id:187,Kanji:"知",OnReading:["チ"],KunReading:["しる"],OnPrincipalReading:"チ",KunPrincipalReading:"しる",OnPrincipalReadingRomaji:"chi",KunPrincipalReadingRomaji:"shiru",JLPTLevel:"N4",Meaning:"savoir",SecondaryMeaning:"connaître"},{id:188,Kanji:"昼",OnReading:["チュウ"],KunReading:["ひる"],OnPrincipalReading:"チュウ",KunPrincipalReading:"ひる",OnPrincipalReadingRomaji:"chuu",KunPrincipalReadingRomaji:"hiru",JLPTLevel:"N4",Meaning:"midi",SecondaryMeaning:"jour"},{id:189,Kanji:"茶",OnReading:["チャ","サ"],KunReading:[],OnPrincipalReading:"チャ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"cha",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"thé",SecondaryMeaning:null},{id:190,Kanji:"待",OnReading:["タイ"],KunReading:["まつ"],OnPrincipalReading:"タイ",KunPrincipalReading:"まつ",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"matsu",JLPTLevel:"N4",Meaning:"attendre",SecondaryMeaning:null},{id:191,Kanji:"洗",OnReading:["セン"],KunReading:["あらう"],OnPrincipalReading:"セン",KunPrincipalReading:"あらう",OnPrincipalReadingRomaji:"sen",KunPrincipalReadingRomaji:"arau",JLPTLevel:"N4",Meaning:"laver",SecondaryMeaning:null},{id:192,Kanji:"送",OnReading:["ソウ"],KunReading:["おくる"],OnPrincipalReading:"ソウ",KunPrincipalReading:"おくる",OnPrincipalReadingRomaji:"sou",KunPrincipalReadingRomaji:"okuru",JLPTLevel:"N4",Meaning:"envoyer",SecondaryMeaning:null},{id:193,Kanji:"品",OnReading:["ヒン"],KunReading:["しな"],OnPrincipalReading:"ヒン",KunPrincipalReading:"しな",OnPrincipalReadingRomaji:"hin",KunPrincipalReadingRomaji:"shina",JLPTLevel:"N4",Meaning:"produit",SecondaryMeaning:"article"},{id:194,Kanji:"洋",OnReading:["ヨウ"],KunReading:[],OnPrincipalReading:"ヨウ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"océan",SecondaryMeaning:"occidental"},{id:195,Kanji:"便",OnReading:["ベン","ビン"],KunReading:["たより"],OnPrincipalReading:"ベン",KunPrincipalReading:"たより",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tayori",JLPTLevel:"N4",Meaning:"commodité",SecondaryMeaning:"courrier"},{id:196,Kanji:"風",OnReading:["フウ","フ"],KunReading:["かぜ"],OnPrincipalReading:"フウ",KunPrincipalReading:"かぜ",OnPrincipalReadingRomaji:"fuu",KunPrincipalReadingRomaji:"kaze",JLPTLevel:"N4",Meaning:"vent",SecondaryMeaning:"style"},{id:197,Kanji:"発",OnReading:["ハツ","ホツ"],KunReading:[],OnPrincipalReading:"ハツ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"hatsu",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"départ",SecondaryMeaning:"émission"},{id:198,Kanji:"度",OnReading:["ド","ト","タク"],KunReading:["たび"],OnPrincipalReading:"ド",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"do",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"degré",SecondaryMeaning:"fois"},{id:199,Kanji:"映",OnReading:["エイ"],KunReading:["うつる","うつす"],OnPrincipalReading:"エイ",KunPrincipalReading:"うつる",OnPrincipalReadingRomaji:"ei",KunPrincipalReadingRomaji:"utsuru",JLPTLevel:"N4",Meaning:"projeter",SecondaryMeaning:"reflet"},{id:200,Kanji:"海",OnReading:["カイ"],KunReading:["うみ"],OnPrincipalReading:"カイ",KunPrincipalReading:"うみ",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"umi",JLPTLevel:"N4",Meaning:"mer",SecondaryMeaning:null},{id:201,Kanji:"界",OnReading:["カイ"],KunReading:[],OnPrincipalReading:"カイ",KunPrincipalReading:null,OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"monde",SecondaryMeaning:"limite"},{id:202,Kanji:"屋",OnReading:["オク"],KunReading:["や"],OnPrincipalReading:"オク",KunPrincipalReading:"や",OnPrincipalReadingRomaji:"oku",KunPrincipalReadingRomaji:"ya",JLPTLevel:"N4",Meaning:"toit",SecondaryMeaning:"boutique"},{id:203,Kanji:"音",OnReading:["オン","イン"],KunReading:["おと","ね"],OnPrincipalReading:"オン",KunPrincipalReading:"おと",OnPrincipalReadingRomaji:"on",KunPrincipalReadingRomaji:"oto",JLPTLevel:"N4",Meaning:"son",SecondaryMeaning:null},{id:204,Kanji:"急",OnReading:["キュウ"],KunReading:["いそぐ"],OnPrincipalReading:"キュウ",KunPrincipalReading:"いそぐ",OnPrincipalReadingRomaji:"kyuu",KunPrincipalReadingRomaji:"isogu",JLPTLevel:"N4",Meaning:"urgence",SecondaryMeaning:"rapide"},{id:205,Kanji:"計",OnReading:["ケイ"],KunReading:["はかる"],OnPrincipalReading:"ケイ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"compter",SecondaryMeaning:"mesurer"},{id:206,Kanji:"建",OnReading:["ケン","コン"],KunReading:["たてる","たつ"],OnPrincipalReading:"ケン",KunPrincipalReading:"たてる",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tateru",JLPTLevel:"N4",Meaning:"construire",SecondaryMeaning:null},{id:207,Kanji:"研",OnReading:["ケン"],KunReading:["とぐ"],OnPrincipalReading:"ケン",KunPrincipalReading:"とぐ",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"togu",JLPTLevel:"N4",Meaning:"aiguiser",SecondaryMeaning:"étudier"},{id:208,Kanji:"県",OnReading:["ケン"],KunReading:[],OnPrincipalReading:"ケン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"préfecture",SecondaryMeaning:null},{id:209,Kanji:"思",OnReading:["シ"],KunReading:["おもう"],OnPrincipalReading:"シ",KunPrincipalReading:"おもう",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"omou",JLPTLevel:"N4",Meaning:"penser",SecondaryMeaning:"croire"},{id:210,Kanji:"乗",OnReading:["ジョウ"],KunReading:["のる","のせる"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"のる",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"noru",JLPTLevel:"N4",Meaning:"monter",SecondaryMeaning:"embarquer"},{id:211,Kanji:"重",OnReading:["ジュウ","チョウ"],KunReading:["おもい","かさなる","かさねる"],OnPrincipalReading:"ジュウ",KunPrincipalReading:"おもい",OnPrincipalReadingRomaji:"juu",KunPrincipalReadingRomaji:"omoi",JLPTLevel:"N4",Meaning:"lourd",SecondaryMeaning:"empiler"},{id:212,Kanji:"春",OnReading:["シュン"],KunReading:["はる"],OnPrincipalReading:"シュン",KunPrincipalReading:"はる",OnPrincipalReadingRomaji:"shun",KunPrincipalReadingRomaji:"haru",JLPTLevel:"N4",Meaning:"printemps",SecondaryMeaning:null},{id:213,Kanji:"室",OnReading:["シツ"],KunReading:["むろ"],OnPrincipalReading:"シツ",KunPrincipalReading:"むろ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"muro",JLPTLevel:"N4",Meaning:"pièce",SecondaryMeaning:"chambre"},{id:214,Kanji:"持",OnReading:["ジ"],KunReading:["もつ"],OnPrincipalReading:"ジ",KunPrincipalReading:"もつ",OnPrincipalReadingRomaji:"ji",KunPrincipalReadingRomaji:"motsu",JLPTLevel:"N4",Meaning:"tenir",SecondaryMeaning:"posséder"},{id:215,Kanji:"首",OnReading:["シュ"],KunReading:["くび"],OnPrincipalReading:"シュ",KunPrincipalReading:"くび",OnPrincipalReadingRomaji:"shu",KunPrincipalReadingRomaji:"kubi",JLPTLevel:"N4",Meaning:"cou",SecondaryMeaning:"chef"},{id:216,Kanji:"秋",OnReading:["シュウ"],KunReading:["あき"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あき",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"aki",JLPTLevel:"N4",Meaning:"automne",SecondaryMeaning:null},{id:217,Kanji:"借",OnReading:["シャク"],KunReading:["かりる"],OnPrincipalReading:"シャク",KunPrincipalReading:"かりる",OnPrincipalReadingRomaji:"shaku",KunPrincipalReadingRomaji:"kariru",JLPTLevel:"N4",Meaning:"emprunter",SecondaryMeaning:null},{id:218,Kanji:"弱",OnReading:["ジャク"],KunReading:["よわい","よわる"],OnPrincipalReading:"ジャク",KunPrincipalReading:"よわい",OnPrincipalReadingRomaji:"jaku",KunPrincipalReadingRomaji:"yowai",JLPTLevel:"N4",Meaning:"faible",SecondaryMeaning:null},{id:219,Kanji:"紙",OnReading:["シ"],KunReading:["かみ"],OnPrincipalReading:"シ",KunPrincipalReading:"かみ",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kami",JLPTLevel:"N4",Meaning:"papier",SecondaryMeaning:null},{id:220,Kanji:"帰",OnReading:["キ"],KunReading:["かえる","かえす"],OnPrincipalReading:"キ",KunPrincipalReading:"かえる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"kaeru",JLPTLevel:"N4",Meaning:"retourner",SecondaryMeaning:"rentrer"},{id:221,Kanji:"起",OnReading:["キ"],KunReading:["おきる","おこす"],OnPrincipalReading:"キ",KunPrincipalReading:"おきる",OnPrincipalReadingRomaji:"ki",KunPrincipalReadingRomaji:"okiru",JLPTLevel:"N4",Meaning:"se lever",SecondaryMeaning:"commencer"},{id:222,Kanji:"夏",OnReading:["カ"],KunReading:["なつ"],OnPrincipalReading:"カ",KunPrincipalReading:"なつ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"natsu",JLPTLevel:"N4",Meaning:"été",SecondaryMeaning:null},{id:223,Kanji:"家",OnReading:["カ","ケ"],KunReading:["いえ","や"],OnPrincipalReading:"カ",KunPrincipalReading:"いえ",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"ie",JLPTLevel:"N4",Meaning:"maison",SecondaryMeaning:"famille"},{id:224,Kanji:"院",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"institut",SecondaryMeaning:"hôpital"},{id:225,Kanji:"員",OnReading:["イン"],KunReading:[],OnPrincipalReading:"イン",KunPrincipalReading:null,OnPrincipalReadingRomaji:"in",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"membre",SecondaryMeaning:"employé"},{id:226,Kanji:"病",OnReading:["ビョウ","ヘイ"],KunReading:["やむ","いたむ"],OnPrincipalReading:"ビョウ",KunPrincipalReading:"やむ",OnPrincipalReadingRomaji:"byou",KunPrincipalReadingRomaji:"yamu",JLPTLevel:"N4",Meaning:"maladie",SecondaryMeaning:"être malade"},{id:227,Kanji:"勉",OnReading:["ベン"],KunReading:["つとめる"],OnPrincipalReading:"ベン",KunPrincipalReading:"つとめる",OnPrincipalReadingRomaji:"ben",KunPrincipalReadingRomaji:"tsutomeru",JLPTLevel:"N4",Meaning:"effort",SecondaryMeaning:"étudier"},{id:228,Kanji:"特",OnReading:["トク"],KunReading:[],OnPrincipalReading:"トク",KunPrincipalReading:null,OnPrincipalReadingRomaji:"toku",KunPrincipalReadingRomaji:null,JLPTLevel:"N4",Meaning:"spécial",SecondaryMeaning:"particulier"},{id:229,Kanji:"旅",OnReading:["リョ"],KunReading:["たび"],OnPrincipalReading:"リョ",KunPrincipalReading:"たび",OnPrincipalReadingRomaji:"ryo",KunPrincipalReadingRomaji:"tabi",JLPTLevel:"N4",Meaning:"voyage",SecondaryMeaning:null},{id:230,Kanji:"料",OnReading:["リョウ"],KunReading:["はかる"],OnPrincipalReading:"リョウ",KunPrincipalReading:"はかる",OnPrincipalReadingRomaji:"ryou",KunPrincipalReadingRomaji:"hakaru",JLPTLevel:"N4",Meaning:"coût",SecondaryMeaning:"ingrédient"},{id:231,Kanji:"真",OnReading:["シン"],KunReading:["ま","まこと"],OnPrincipalReading:"シン",KunPrincipalReading:"ま",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"ma",JLPTLevel:"N4",Meaning:"vrai",SecondaryMeaning:"vérité"},{id:232,Kanji:"通",OnReading:["ツウ"],KunReading:["とおる","とおす"],OnPrincipalReading:"ツウ",KunPrincipalReading:"とおる",OnPrincipalReadingRomaji:"tsuu",KunPrincipalReadingRomaji:"tooru",JLPTLevel:"N4",Meaning:"passer",SecondaryMeaning:"communication"},{id:233,Kanji:"鳥",OnReading:["チョウ"],KunReading:["とり"],OnPrincipalReading:"チョウ",KunPrincipalReading:"とり",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"tori",JLPTLevel:"N4",Meaning:"oiseau",SecondaryMeaning:null},{id:234,Kanji:"転",OnReading:["テン"],KunReading:["ころぶ","ころがる"],OnPrincipalReading:"テン",KunPrincipalReading:"ころぶ",OnPrincipalReadingRomaji:"ten",KunPrincipalReadingRomaji:"korobu",JLPTLevel:"N4",Meaning:"rouler",SecondaryMeaning:"changer"},{id:235,Kanji:"族",OnReading:["ゾク"],KunReading:["ぞく"],OnPrincipalReading:"ゾク",KunPrincipalReading:"ぞく",OnPrincipalReadingRomaji:"zoku",KunPrincipalReadingRomaji:"zoku",JLPTLevel:"N4",Meaning:"famille",SecondaryMeaning:"tribu"},{id:236,Kanji:"進",OnReading:["シン"],KunReading:["すすむ","すすめる"],OnPrincipalReading:"シン",KunPrincipalReading:"すすむ",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"susumu",JLPTLevel:"N4",Meaning:"avancer",SecondaryMeaning:"progresser"},{id:237,Kanji:"理",OnReading:["リ"],KunReading:["ことわり"],OnPrincipalReading:"リ",KunPrincipalReading:"ことわり",OnPrincipalReadingRomaji:"ri",KunPrincipalReadingRomaji:"kotowari",JLPTLevel:"N4",Meaning:"logique",SecondaryMeaning:"raison"},{id:238,Kanji:"野",OnReading:["ヤ","ショ"],KunReading:["の"],OnPrincipalReading:"ヤ",KunPrincipalReading:"の",OnPrincipalReadingRomaji:"ya",KunPrincipalReadingRomaji:"no",JLPTLevel:"N4",Meaning:"champ",SecondaryMeaning:"nature"},{id:239,Kanji:"問",OnReading:["モン"],KunReading:["とい","といあわせる"],OnPrincipalReading:"モン",KunPrincipalReading:"とい",OnPrincipalReadingRomaji:"mon",KunPrincipalReadingRomaji:"toi",JLPTLevel:"N4",Meaning:"question",SecondaryMeaning:"demander"},{id:240,Kanji:"都",OnReading:["ト","ツ"],KunReading:["みやこ"],OnPrincipalReading:"ト",KunPrincipalReading:"みやこ",OnPrincipalReadingRomaji:"to",KunPrincipalReadingRomaji:"miyako",JLPTLevel:"N4",Meaning:"capitale",SecondaryMeaning:"métropole"},{id:241,Kanji:"堂",OnReading:["ドウ"],KunReading:["どう"],OnPrincipalReading:"ドウ",KunPrincipalReading:"どう",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"dou",JLPTLevel:"N4",Meaning:"hall",SecondaryMeaning:"temple"},{id:242,Kanji:"動",OnReading:["ドウ"],KunReading:["うごく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"うごく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"ugoku",JLPTLevel:"N4",Meaning:"mouvement",SecondaryMeaning:"agir"},{id:243,Kanji:"悪",OnReading:["アク","オ"],KunReading:["わるい"],OnPrincipalReading:"アク",KunPrincipalReading:"わるい",OnPrincipalReadingRomaji:"aku",KunPrincipalReadingRomaji:"warui",JLPTLevel:"N4",Meaning:"mauvais",SecondaryMeaning:"mal"},{id:244,Kanji:"強",OnReading:["キョウ","ゴウ"],KunReading:["つよい","しなう"],OnPrincipalReading:"キョウ",KunPrincipalReading:"つよい",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"tsuyoi",JLPTLevel:"N4",Meaning:"fort",SecondaryMeaning:"intense"},{id:245,Kanji:"教",OnReading:["キョウ","オシ"],KunReading:["おしえる","おそわる"],OnPrincipalReading:"キョウ",KunPrincipalReading:"おしえる",OnPrincipalReadingRomaji:"kyou",KunPrincipalReadingRomaji:"oshieru",JLPTLevel:"N4",Meaning:"enseigner",SecondaryMeaning:"religion"},{id:246,Kanji:"産",OnReading:["サン"],KunReading:["うむ","うまれる"],OnPrincipalReading:"サン",KunPrincipalReading:"うむ",OnPrincipalReadingRomaji:"san",KunPrincipalReadingRomaji:"umu",JLPTLevel:"N4",Meaning:"production",SecondaryMeaning:"naissance"},{id:247,Kanji:"黒",OnReading:["コク"],KunReading:["くろ","くろい"],OnPrincipalReading:"コク",KunPrincipalReading:"くろ",OnPrincipalReadingRomaji:"koku",KunPrincipalReadingRomaji:"kuro",JLPTLevel:"N4",Meaning:"noir",SecondaryMeaning:null},{id:248,Kanji:"菜",OnReading:["サイ"],KunReading:["な"],OnPrincipalReading:"サイ",KunPrincipalReading:"な",OnPrincipalReadingRomaji:"sai",KunPrincipalReadingRomaji:"na",JLPTLevel:"N4",Meaning:"légume",SecondaryMeaning:"verdure"},{id:249,Kanji:"終",OnReading:["シュウ"],KunReading:["おわる","おえる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"おわる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"owaru",JLPTLevel:"N4",Meaning:"fin",SecondaryMeaning:"terminer"},{id:250,Kanji:"習",OnReading:["シュウ"],KunReading:["ならう"],OnPrincipalReading:"シュウ",KunPrincipalReading:"ならう",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"narau",JLPTLevel:"N4",Meaning:"apprendre",SecondaryMeaning:"pratiquer"},{id:251,Kanji:"集",OnReading:["シュウ"],KunReading:["あつまる","あつめる"],OnPrincipalReading:"シュウ",KunPrincipalReading:"あつまる",OnPrincipalReadingRomaji:"shuu",KunPrincipalReadingRomaji:"atsumaru",JLPTLevel:"N4",Meaning:"rassembler",SecondaryMeaning:"collection"},{id:252,Kanji:"場",OnReading:["ジョウ"],KunReading:["ば"],OnPrincipalReading:"ジョウ",KunPrincipalReading:"ば",OnPrincipalReadingRomaji:"jou",KunPrincipalReadingRomaji:"ba",JLPTLevel:"N4",Meaning:"lieu",SecondaryMeaning:"emplacement"},{id:253,Kanji:"寒",OnReading:["カン"],KunReading:["さむい"],OnPrincipalReading:"カン",KunPrincipalReading:"さむい",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"samui",JLPTLevel:"N4",Meaning:"froid",SecondaryMeaning:null},{id:254,Kanji:"軽",OnReading:["ケイ"],KunReading:["かるい","けい"],OnPrincipalReading:"ケイ",KunPrincipalReading:"かるい",OnPrincipalReadingRomaji:"kei",KunPrincipalReadingRomaji:"karui",JLPTLevel:"N4",Meaning:"léger",SecondaryMeaning:"facile"},{id:255,Kanji:"運",OnReading:["ウン"],KunReading:["はこぶ"],OnPrincipalReading:"ウン",KunPrincipalReading:"はこぶ",OnPrincipalReadingRomaji:"un",KunPrincipalReadingRomaji:"hakobu",JLPTLevel:"N4",Meaning:"chance",SecondaryMeaning:"transport"},{id:256,Kanji:"開",OnReading:["カイ"],KunReading:["ひらく","あける"],OnPrincipalReading:"カイ",KunPrincipalReading:"ひらく",OnPrincipalReadingRomaji:"kai",KunPrincipalReadingRomaji:"hiraku",JLPTLevel:"N4",Meaning:"ouvrir",SecondaryMeaning:"développer"},{id:257,Kanji:"飯",OnReading:["ハン"],KunReading:["めし"],OnPrincipalReading:"ハン",KunPrincipalReading:"めし",OnPrincipalReadingRomaji:"han",KunPrincipalReadingRomaji:"meshi",JLPTLevel:"N4",Meaning:"riz cuit",SecondaryMeaning:"repas"},{id:258,Kanji:"答",OnReading:["トウ"],KunReading:["こたえる","こたえ"],OnPrincipalReading:"トウ",KunPrincipalReading:"こたえる",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"kotaeru",JLPTLevel:"N4",Meaning:"réponse",SecondaryMeaning:"répondre"},{id:259,Kanji:"森",OnReading:["シン"],KunReading:["もり"],OnPrincipalReading:"シン",KunPrincipalReading:"もり",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"mori",JLPTLevel:"N4",Meaning:"forêt",SecondaryMeaning:null},{id:260,Kanji:"朝",OnReading:["チョウ"],KunReading:["あさ"],OnPrincipalReading:"チョウ",KunPrincipalReading:"あさ",OnPrincipalReadingRomaji:"chou",KunPrincipalReadingRomaji:"asa",JLPTLevel:"N4",Meaning:"matin",SecondaryMeaning:"petit-déjeuner"},{id:261,Kanji:"貸",OnReading:["タイ"],KunReading:["かす"],OnPrincipalReading:"タイ",KunPrincipalReading:"かす",OnPrincipalReadingRomaji:"tai",KunPrincipalReadingRomaji:"kasu",JLPTLevel:"N4",Meaning:"prêter",SecondaryMeaning:null},{id:262,Kanji:"着",OnReading:["チャク","ジャク"],KunReading:["きる","つく"],OnPrincipalReading:"チャク",KunPrincipalReading:"きる",OnPrincipalReadingRomaji:"chaku",KunPrincipalReadingRomaji:"kiru",JLPTLevel:"N4",Meaning:"arriver",SecondaryMeaning:"mettre (vêtement)"},{id:263,Kanji:"短",OnReading:["タン"],KunReading:["みじかい"],OnPrincipalReading:"タン",KunPrincipalReading:"みじかい",OnPrincipalReadingRomaji:"tan",KunPrincipalReadingRomaji:"mijikai",JLPTLevel:"N4",Meaning:"court",SecondaryMeaning:"durée courte"},{id:264,Kanji:"働",OnReading:["ドウ"],KunReading:["はたらく"],OnPrincipalReading:"ドウ",KunPrincipalReading:"はたらく",OnPrincipalReadingRomaji:"dou",KunPrincipalReadingRomaji:"hataraku",JLPTLevel:"N4",Meaning:"travailler",SecondaryMeaning:null},{id:265,Kanji:"楽",OnReading:["ガク","ラク"],KunReading:["たのしい","らく"],OnPrincipalReading:"ガク",KunPrincipalReading:"たのしい",OnPrincipalReadingRomaji:"gaku",KunPrincipalReadingRomaji:"tanoshii",JLPTLevel:"N4",Meaning:"amusant",SecondaryMeaning:"musique"},{id:266,Kanji:"暗",OnReading:["アン"],KunReading:["くらい"],OnPrincipalReading:"アン",KunPrincipalReading:"くらい",OnPrincipalReadingRomaji:"an",KunPrincipalReadingRomaji:"kurai",JLPTLevel:"N4",Meaning:"sombre",SecondaryMeaning:"obscurité"},{id:267,Kanji:"意",OnReading:["イ"],KunReading:["い"],OnPrincipalReading:"イ",KunPrincipalReading:"い",OnPrincipalReadingRomaji:"i",KunPrincipalReadingRomaji:"i",JLPTLevel:"N4",Meaning:"intention",SecondaryMeaning:"pensée"},{id:268,Kanji:"遠",OnReading:["エン"],KunReading:["とおい"],OnPrincipalReading:"エン",KunPrincipalReading:"とおい",OnPrincipalReadingRomaji:"en",KunPrincipalReadingRomaji:"tooi",JLPTLevel:"N4",Meaning:"loin",SecondaryMeaning:"éloigné"},{id:269,Kanji:"漢",OnReading:["カン"],KunReading:["おとこ"],OnPrincipalReading:"カン",KunPrincipalReading:"おとこ",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"otoko",JLPTLevel:"N4",Meaning:"chinois",SecondaryMeaning:"Hanzi"},{id:270,Kanji:"業",OnReading:["ギョウ","ゴウ"],KunReading:["わざ"],OnPrincipalReading:"ギョウ",KunPrincipalReading:"わざ",OnPrincipalReadingRomaji:"gyou",KunPrincipalReadingRomaji:"waza",JLPTLevel:"N4",Meaning:"travail",SecondaryMeaning:"industrie"},{id:271,Kanji:"試",OnReading:["シ"],KunReading:["こころみる","ためす"],OnPrincipalReading:"シ",KunPrincipalReading:"こころみる",OnPrincipalReadingRomaji:"shi",KunPrincipalReadingRomaji:"kokoromiru",JLPTLevel:"N4",Meaning:"essayer",SecondaryMeaning:"test"},{id:272,Kanji:"銀",OnReading:["ギン"],KunReading:["しろがね"],OnPrincipalReading:"ギン",KunPrincipalReading:"しろがね",OnPrincipalReadingRomaji:"gin",KunPrincipalReadingRomaji:"shirogane",JLPTLevel:"N4",Meaning:"argent",SecondaryMeaning:null},{id:273,Kanji:"歌",OnReading:["カ"],KunReading:["うた"],OnPrincipalReading:"カ",KunPrincipalReading:"うた",OnPrincipalReadingRomaji:"ka",KunPrincipalReadingRomaji:"uta",JLPTLevel:"N4",Meaning:"chanson",SecondaryMeaning:"chanter"},{id:274,Kanji:"説",OnReading:["セツ","ゼイ"],KunReading:["とく"],OnPrincipalReading:"セツ",KunPrincipalReading:"とく",OnPrincipalReadingRomaji:"setsu",KunPrincipalReadingRomaji:"toku",JLPTLevel:"N4",Meaning:"explication",SecondaryMeaning:"théorie"},{id:275,Kanji:"質",OnReading:["シツ","シチ"],KunReading:["しつ"],OnPrincipalReading:"シツ",KunPrincipalReading:"しつ",OnPrincipalReadingRomaji:"shitsu",KunPrincipalReadingRomaji:"shitsu",JLPTLevel:"N4",Meaning:"qualité",SecondaryMeaning:"matière"},{id:276,Kanji:"館",OnReading:["カン"],KunReading:["やかた"],OnPrincipalReading:"カン",KunPrincipalReading:"やかた",OnPrincipalReadingRomaji:"kan",KunPrincipalReadingRomaji:"yakata",JLPTLevel:"N4",Meaning:"bâtiment",SecondaryMeaning:"musée"},{id:277,Kanji:"親",OnReading:["シン"],KunReading:["おや","したしい"],OnPrincipalReading:"シン",KunPrincipalReading:"おや",OnPrincipalReadingRomaji:"shin",KunPrincipalReadingRomaji:"oya",JLPTLevel:"N4",Meaning:"parent",SecondaryMeaning:"intime"},{id:278,Kanji:"頭",OnReading:["トウ"],KunReading:["あたま"],OnPrincipalReading:"トウ",KunPrincipalReading:"あたま",OnPrincipalReadingRomaji:"tou",KunPrincipalReadingRomaji:"atama",JLPTLevel:"N4",Meaning:"tête",SecondaryMeaning:"cerveau"},{id:279,Kanji:"薬",OnReading:["ヤク","クスリ"],KunReading:["くすり"],OnPrincipalReading:"ヤク",KunPrincipalReading:"くすり",OnPrincipalReadingRomaji:"yaku",KunPrincipalReadingRomaji:"kusuri",JLPTLevel:"N4",Meaning:"médicament",SecondaryMeaning:"drogue"},{id:280,Kanji:"曜",OnReading:["ヨウ"],KunReading:[""],OnPrincipalReading:"ヨウ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"you",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"jour de la semaine",SecondaryMeaning:null},{id:281,Kanji:"題",OnReading:["ダイ"],KunReading:[""],OnPrincipalReading:"ダイ",KunPrincipalReading:"",OnPrincipalReadingRomaji:"dai",KunPrincipalReadingRomaji:"",JLPTLevel:"N4",Meaning:"sujet",SecondaryMeaning:"titre"},{id:282,Kanji:"顔",OnReading:["ガン"],KunReading:["かお"],OnPrincipalReading:"ガン",KunPrincipalReading:"かお",OnPrincipalReadingRomaji:"gan",KunPrincipalReadingRomaji:"kao",JLPTLevel:"N4",Meaning:"visage",SecondaryMeaning:"expression"},{id:283,Kanji:"験",OnReading:["ケン","ゲン"],KunReading:["ためす","けん"],OnPrincipalReading:"ケン",KunPrincipalReading:"ためす",OnPrincipalReadingRomaji:"ken",KunPrincipalReadingRomaji:"tamesu",JLPTLevel:"N4",Meaning:"expérience",SecondaryMeaning:"test"},{id:284,Kanji:"暑",OnReading:["ショ"],KunReading:["あつい"],OnPrincipalReading:"ショ",KunPrincipalReading:"あつい",OnPrincipalReadingRomaji:"sho",KunPrincipalReadingRomaji:"atsui",JLPTLevel:"N4",Meaning:"chaleur",SecondaryMeaning:null}],Io={kanji:Yw},e5=[{id:1,JLPTLevel:"N1",kanji:"亜",hiragana:"あ",Romaji:"a",francais:"sub-, sous-",categorie:["nom"]},{id:2,JLPTLevel:"N5",kanji:"嗚呼",hiragana:"ああ",Romaji:"aa",francais:"ah !, oh !, hey!",categorie:["expressions idiomatiques"]},{id:3,JLPTLevel:"N3",kanji:"愛",hiragana:"あい",Romaji:"ai",francais:"amour",categorie:["émotions et sentiments"]},{id:4,JLPTLevel:"N2",kanji:"相変わらず",hiragana:"あいかわらず",Romaji:"aikawarazu",francais:"comme d'habitude, comme toujours",categorie:["expressions idiomatiques"]},{id:5,JLPTLevel:"N4",kanji:"挨拶",hiragana:"あいさつ",Romaji:"aisatsu",francais:"salutation",categorie:["formules de politesse"]},{id:6,JLPTLevel:"N5",kanji:"挨拶する",hiragana:"あいさつする",Romaji:"aisatsu suru",francais:"saluer",categorie:["verbes","verbes d’action"]},{id:7,JLPTLevel:"N3",kanji:"愛情",hiragana:"あいじょう",Romaji:"aijou",francais:"amour, affection",categorie:["émotions et sentiments"]},{id:8,JLPTLevel:"N3",kanji:"吅図",hiragana:"あいず",Romaji:"aizu",francais:"signal, signe",categorie:["nom"]},{id:9,JLPTLevel:"N3",kanji:"",hiragana:"アイスクリーム",Romaji:"aisukurīmu",francais:"crème glacée",categorie:["la nourriture"]},{id:10,JLPTLevel:"N3",kanji:"愛する",hiragana:"あいする",Romaji:"aisuru",francais:"aimer, être amoureux",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:11,JLPTLevel:"N1",kanji:"愛想",hiragana:"あいそう",Romaji:"aisou",francais:"amabilité",categorie:["émotions et sentiments"]},{id:12,JLPTLevel:"N4",kanji:"間",hiragana:"あいだ",Romaji:"aida",francais:"entre, parmi, pendant que",categorie:["mots de liaison et particules"]},{id:13,JLPTLevel:"N1",kanji:"間柄",hiragana:"あいだがら",Romaji:"aidagara",francais:"lien, relation avec quelqu'un",categorie:["nom"]},{id:14,JLPTLevel:"N3",kanji:"相手",hiragana:"あいて",Romaji:"aite",francais:"adversaire, opposant, compagnon",categorie:["nom"]},{id:15,JLPTLevel:"N2",kanji:"",hiragana:"アイデア・アイディア",Romaji:"aidea",francais:"idée",categorie:["nom"]},{id:16,JLPTLevel:"N3",kanji:"生憎",hiragana:"あいにく",Romaji:"ainiku",francais:"malheureusement",categorie:["expressions idiomatiques"]},{id:17,JLPTLevel:"N1",kanji:"吅間",hiragana:"あいま",Romaji:"aima",francais:"intervalle",categorie:["nom"]},{id:18,JLPTLevel:"N2",kanji:"曖昧",hiragana:"あいまい",Romaji:"aimai",francais:"ambigu, peu précis, vague",categorie:["adjectifs"]},{id:19,JLPTLevel:"N3",kanji:"",hiragana:"アイロン",Romaji:"airon",francais:"fer à repasser",categorie:["le matériel domestique"]},{id:20,JLPTLevel:"N5",kanji:"会う・遭う",hiragana:"あう",Romaji:"au",francais:"rencontrer, voir (une personne)",categorie:["verbes","verbes d’action"]},{id:21,JLPTLevel:"N4",kanji:"吅う",hiragana:"あう",Romaji:"au",francais:"convenir",categorie:["verbes","verbes d’action"]},{id:22,JLPTLevel:"N3",kanji:"",hiragana:"アウト",Romaji:"auto",francais:"dehors, à l'extérieur",categorie:["lieux et directions"]},{id:23,JLPTLevel:"N1",kanji:"敢えて",hiragana:"あえて",Romaji:"aete",francais:"défi",categorie:["nom"]},{id:24,JLPTLevel:"N5",kanji:"青",hiragana:"あお",Romaji:"ao",francais:"bleu (le), vert (le)",categorie:["les couleurs"]},{id:25,JLPTLevel:"N5",kanji:"青い・蒼い",hiragana:"あおい",Romaji:"aoi",francais:"bleu, vert, inexpérimenté",categorie:["les couleurs","adjectifs"]},{id:26,JLPTLevel:"N2",kanji:"扇ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"éventer, battre",categorie:["verbes","verbes d’action"]},{id:27,JLPTLevel:"N1",kanji:"仰ぐ",hiragana:"あおぐ",Romaji:"aogu",francais:"admirer quelqu'un, respecter, demander, boire",categorie:["verbes","verbes d’action"]},{id:28,JLPTLevel:"N2",kanji:"青白い",hiragana:"あおじろい",Romaji:"aojiroi",francais:"blême, pâle",categorie:["adjectifs"]},{id:29,JLPTLevel:"N5",kanji:"赤",hiragana:"あか",Romaji:"aka",francais:"rouge (le)",categorie:["les couleurs"]},{id:30,JLPTLevel:"N1",kanji:"垢",hiragana:"あか",Romaji:"aka",francais:"crasse, saleté",categorie:["nom"]},{id:31,JLPTLevel:"N5",kanji:"赤い",hiragana:"あかい",Romaji:"akai",francais:"rouge",categorie:["les couleurs","adjectifs"]},{id:32,JLPTLevel:"N1",kanji:"赤字",hiragana:"あかじ",Romaji:"akaji",francais:"déficit, perte (monétaire)",categorie:["nom"]},{id:33,JLPTLevel:"N1",kanji:"明かす",hiragana:"あかす",Romaji:"akasu",francais:"passer la nuit, révéler un secret",categorie:["verbes","verbes d’action"]},{id:34,JLPTLevel:"N4",kanji:"赤ちゃん",hiragana:"あかちゃん",Romaji:"akachan",francais:"bébé",categorie:["les membres de la famille"]},{id:35,JLPTLevel:"N1",kanji:"赤らむ",hiragana:"あからむ",Romaji:"akaramu",francais:"rougir (visage)",categorie:["verbes","verbes d’action"]},{id:36,JLPTLevel:"N3",kanji:"明かり",hiragana:"あかり",Romaji:"akari",francais:"clarté, lumières",categorie:["nom"]},{id:37,JLPTLevel:"N1",kanji:"上がり",hiragana:"あがり",Romaji:"agari",francais:"ascension, montée",categorie:["nom"]},{id:38,JLPTLevel:"N4",kanji:"上がる",hiragana:"あがる",Romaji:"agaru",francais:" s'élever, grimper, augmenter",categorie:["verbes","verbes d’action"]},{id:39,JLPTLevel:"N5",kanji:"明るい",hiragana:"あかるい",Romaji:"akarui",francais:"clair",categorie:["adjectifs"]},{id:40,JLPTLevel:"N4",kanji:"赤ん坊",hiragana:"あかんぼう",Romaji:"akanbou",francais:"bébé",categorie:["les membres de la famille"]},{id:41,JLPTLevel:"N5",kanji:"秋",hiragana:"あき",Romaji:"aki",francais:"automne",categorie:["temps et saisons"]},{id:42,JLPTLevel:"N3",kanji:"明き・空き",hiragana:"あき",Romaji:"aki",francais:"vide, place, espace",categorie:["nom"]},{id:43,JLPTLevel:"N3",kanji:"明らか",hiragana:"あきらか",Romaji:"akiraka",francais:"évident, clair",categorie:["adjectifs"]},{id:44,JLPTLevel:"N1",kanji:"諦め",hiragana:"あきらめ",Romaji:"akirame",francais:"résignation, acceptance",categorie:["émotions et sentiments"]},{id:45,JLPTLevel:"N3",kanji:"諦める",hiragana:"あきらめる",Romaji:"akirameru",francais:" abandonner, renoncer, laisser tomber",categorie:["verbes","verbes d’action"]},{id:46,JLPTLevel:"N3",kanji:"飽きる",hiragana:"あきる",Romaji:"akiru",francais:" s'ennuyer, se lasser",categorie:["verbes","verbes d’action"]},{id:47,JLPTLevel:"N2",kanji:"呆れる",hiragana:"あきれる",Romaji:"akireru",francais:" être stupéfait, ébahi",categorie:["verbes","verbes d’action"]},{id:48,JLPTLevel:"N5",kanji:"開く",hiragana:"あく",Romaji:"aku",francais:" s'ouvrir",categorie:["verbes","verbes d’action"]},{id:49,JLPTLevel:"N4",kanji:"空く",hiragana:"あく",Romaji:"aku",francais:" se vider, être vide, être disponible",categorie:["verbes","verbes d’action"]},{id:50,JLPTLevel:"N1",kanji:"悪",hiragana:"あく",Romaji:"aku",francais:"mal (le)",categorie:["nom"]},{id:51,JLPTLevel:"N3",kanji:"握手",hiragana:"あくしゅ",Romaji:"akushu",francais:"poignée de mains",categorie:["formules de politesse"]},{id:52,JLPTLevel:"N4",kanji:"アクセサリー",hiragana:"アクセサリー",Romaji:"akusesarī",francais:"accessoire",categorie:["les vêtements"]},{id:53,JLPTLevel:"N1",kanji:"アクセル",hiragana:"アクセル",Romaji:"akuseru",francais:"accélérateur",categorie:["les moyens de transport"]},{id:54,JLPTLevel:"N2",kanji:"",hiragana:"アクセント",Romaji:"akusento",francais:"accent",categorie:["nom"]},{id:55,JLPTLevel:"N1",kanji:"悪どい",hiragana:"あくどい",Romaji:"akudoi",francais:"tape-à-l'œil, voyant, vicieux",categorie:["adjectifs"]},{id:56,JLPTLevel:"N2",kanji:"欠伸",hiragana:"あくび",Romaji:"akubi",francais:"bâillement",categorie:["santé et bien-être"]},{id:57,JLPTLevel:"N3",kanji:"悪魔",hiragana:"あくま",Romaji:"akuma",francais:"démon, diable, mauvais esprit",categorie:["nom"]},{id:58,JLPTLevel:"N2",kanji:"飽くまで",hiragana:"あくまで",Romaji:"akumade",francais:"jusqu'au bout, obstinément",categorie:["expressions idiomatiques"]},{id:59,JLPTLevel:"N2",kanji:"明くる",hiragana:"あくる",Romaji:"akuru",francais:"prochain, suivant",categorie:["expressions temporelles"]},{id:60,JLPTLevel:"N2",kanji:"明け方",hiragana:"あけがた",Romaji:"akegata",francais:"aube",categorie:["expressions temporelles"]},{id:61,JLPTLevel:"N5",kanji:"開ける・明ける",hiragana:"あける",Romaji:"akeru",francais:"ouvrir",categorie:["verbes","verbes d’action"]},{id:62,JLPTLevel:"N3",kanji:"明ける",hiragana:"あける",Romaji:"akeru",francais:"se lever (le soleil), s'éclaircir",categorie:["verbes","verbes d’action"]},{id:63,JLPTLevel:"N5",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"donner",categorie:["verbes","verbes d’action"]},{id:64,JLPTLevel:"N4",kanji:"上げる",hiragana:"あげる",Romaji:"ageru",francais:"augmenter",categorie:["verbes","verbes d’action"]},{id:65,JLPTLevel:"N1",kanji:"顎",hiragana:"あご",Romaji:"ago",francais:"menton",categorie:["le corps humain"]},{id:66,JLPTLevel:"N1",kanji:"憧れ",hiragana:"あこがれ",Romaji:"akogare",francais:"aspiration, désirs",categorie:["émotions et sentiments"]},{id:67,JLPTLevel:"N2",kanji:"憧れる",hiragana:"あこがれる",Romaji:"akogareru",francais:"aspirer à, languir de quelque chose",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:68,JLPTLevel:"N5",kanji:"朝",hiragana:"あさ",Romaji:"asa",francais:"matin",categorie:["expressions temporelles"]},{id:69,JLPTLevel:"N1",kanji:"麻",hiragana:"あさ",Romaji:"asa",francais:"chanvre, lin",categorie:["nom"]},{id:70,JLPTLevel:"N1",kanji:"字",hiragana:"あざ",Romaji:"aza",francais:"hameau, partie d'un village",categorie:["lieux et directions"]},{id:71,JLPTLevel:"N4",kanji:"浅い",hiragana:"あさい",Romaji:"asai",francais:"peu profond",categorie:["adjectifs"]},{id:72,JLPTLevel:"N5",kanji:"朝ご飯",hiragana:"あさごはん",Romaji:"asagohan",francais:"petit-déjeuner",categorie:["la nourriture"]},{id:73,JLPTLevel:"N5",kanji:"明後日",hiragana:"あさって",Romaji:"asatte",francais:"après-demain",categorie:["expressions temporelles"]},{id:74,JLPTLevel:"N4",kanji:"朝寝坊",hiragana:"あさねぼう",Romaji:"asanebou",francais:"lève-tard",categorie:["expressions idiomatiques"]},{id:75,JLPTLevel:"N1",kanji:"浅ましい",hiragana:"あさましい",Romaji:"asamashii",francais:"misérable, infortuné, méprisable",categorie:["adjectifs"]},{id:76,JLPTLevel:"N1",kanji:"欺く",hiragana:"あざむく",Romaji:"azamuku",francais:"tromper, duper",categorie:["verbes","verbes d’action"]},{id:77,JLPTLevel:"N1",kanji:"鮮やか",hiragana:"あざやか",Romaji:"azayaka",francais:"brillant, vif, éclatant",categorie:["adjectifs","les couleurs"]},{id:78,JLPTLevel:"N1",kanji:"あざ笑う",hiragana:"あざわらう",Romaji:"azawarau",francais:"sourire avec mépris",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:79,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"jambe",categorie:["le corps humain"]},{id:80,JLPTLevel:"N5",kanji:"足",hiragana:"あし",Romaji:"ashi",francais:"pied",categorie:["le corps humain"]},{id:81,JLPTLevel:"N4",kanji:"味",hiragana:"あじ",Romaji:"aji",francais:"goût",categorie:["la nourriture"]},{id:82,JLPTLevel:"N4",kanji:"アジア",hiragana:"アジア",Romaji:"ajia",francais:"Asie, asiatique",categorie:["les pays"]},{id:83,JLPTLevel:"N2",kanji:"足跡",hiragana:"あしあと",Romaji:"ashiato",francais:"empreinte de pied",categorie:["nom"]},{id:84,JLPTLevel:"N1",kanji:"悪しからず",hiragana:"あしからず",Romaji:"ashikarazu",francais:"désolé mais…, ne m'en veuillez pas mais…",categorie:["formules de politesse"]},{id:85,JLPTLevel:"N5",kanji:"明日",hiragana:"あした",Romaji:"ashita",francais:"demain",categorie:["expressions temporelles"]},{id:86,JLPTLevel:"N2",kanji:"足元・足下",hiragana:"あしもと",Romaji:"ashimoto",francais:"sous les pieds, allure, démarche",categorie:["nom"]},{id:87,JLPTLevel:"N1",kanji:"味わい",hiragana:"あじわい",Romaji:"ajiwai",francais:"saveur, goût",categorie:["la nourriture"]},{id:88,JLPTLevel:"N2",kanji:"味わう",hiragana:"あじわう",Romaji:"ajiau",francais:"goûter",categorie:["verbes","verbes d’action","la nourriture"]},{id:89,JLPTLevel:"N4",kanji:"明日",hiragana:"あす",Romaji:"asu",francais:"demain",categorie:["expressions temporelles"]},{id:90,JLPTLevel:"N2",kanji:"預かる",hiragana:"あずかる",Romaji:"azukaru",francais:"s'occuper de, prendre en charge",categorie:["verbes","verbes d’action"]},{id:91,JLPTLevel:"N3",kanji:"預ける",hiragana:"あずける",Romaji:"azukeru",francais:"confier à la garde de, laisser quelqu'un à la charge de",categorie:["verbes","verbes d’action"]},{id:92,JLPTLevel:"N3",kanji:"汗",hiragana:"あせ",Romaji:"ase",francais:"sueur",categorie:["santé et bien-être"]},{id:93,JLPTLevel:"N1",kanji:"焦る",hiragana:"あせる",Romaji:"aseru",francais:"être pressé, impatient",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:94,JLPTLevel:"N1",kanji:"褪せる",hiragana:"あせる",Romaji:"aseru",francais:"pâlir, se décolorer, se faner",categorie:["verbes","verbes d’action"]},{id:95,JLPTLevel:"N2",kanji:"汗を掻く",hiragana:"あせをかく",Romaji:"ase o kaku",francais:"transpirer, suer",categorie:["verbes","verbes d’action","santé et bien-être"]},{id:96,JLPTLevel:"N5",kanji:"彼処",hiragana:"あそこ",Romaji:"asoko",francais:"là-bas (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:97,JLPTLevel:"N5",kanji:"遊び",hiragana:"あそび",Romaji:"asobi",francais:"jeu",categorie:["activités et loisirs"]},{id:98,JLPTLevel:"N5",kanji:"遊ぶ",hiragana:"あそぶ",Romaji:"asobu",francais:"jouer",categorie:["verbes","verbes d’action","activités et loisirs"]},{id:99,JLPTLevel:"N2",kanji:"値",hiragana:"あたい",Romaji:"atai",francais:"coût, prix, valeur",categorie:["nom"]},{id:100,JLPTLevel:"N1",kanji:"値する",hiragana:"あたいする",Romaji:"ataisuru",francais:"mériter, être digne de",categorie:["verbes","verbes d’action"]},{id:101,JLPTLevel:"N3",kanji:"与える",hiragana:"あたえる",Romaji:"ataeru",francais:"décerner, offrir, donner",categorie:["verbes","verbes d’action"]},{id:102,JLPTLevel:"N5",kanji:"温かい・暖かい",hiragana:"あたたかい",Romaji:"atatakai",francais:"tiède, chaud",categorie:["adjectifs"]},{id:103,JLPTLevel:"N2",kanji:"温まる・暖まる",hiragana:"あたたまる",Romaji:"atatamaru",francais:"se réchauffer",categorie:["verbes","verbes d’action"]},{id:104,JLPTLevel:"N2",kanji:"温める・暖める",hiragana:"あたためる",Romaji:"atatameru",francais:"réchauffer",categorie:["verbes","verbes d’action"]},{id:105,JLPTLevel:"N5",kanji:"頭",hiragana:"あたま",Romaji:"atama",francais:"tête",categorie:["le corps humain"]},{id:106,JLPTLevel:"N5",kanji:"新しい",hiragana:"あたらしい",Romaji:"atarashii",francais:"nouveau",categorie:["adjectifs"]},{id:107,JLPTLevel:"N3",kanji:"辺り",hiragana:"あたり",Romaji:"atari",francais:"aux environs",categorie:["lieux et directions"]},{id:108,JLPTLevel:"N1",kanji:"当たり",hiragana:"あたり",Romaji:"atari",francais:"coup, réussite, succès, par… (+unité)",categorie:["nom"]},{id:109,JLPTLevel:"N2",kanji:"当たり前",hiragana:"あたりまえ",Romaji:"atarimae",francais:"évident, banal, normal",categorie:["adjectifs"]},{id:110,JLPTLevel:"N3",kanji:"当たる",hiragana:"あたる",Romaji:"ataru",francais:"entreprendre, avoir du succès, être assigné, être équivalent à",categorie:["verbes","verbes d’action"]},{id:111,JLPTLevel:"N3",kanji:"彼方・此方",hiragana:"あちこち・あちらこちら",Romaji:"achikochi・achirakochira",francais:"ici et là",categorie:["lieux et directions"]},{id:112,JLPTLevel:"N5",kanji:"彼方",hiragana:"あちら",Romaji:"achira",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:113,JLPTLevel:"N5",kanji:"暑い",hiragana:"あつい",Romaji:"atsui",francais:"chaud (temps météo.)",categorie:["adjectifs","temps et saisons"]},{id:114,JLPTLevel:"N5",kanji:"厚い",hiragana:"あつい",Romaji:"atsui",francais:"épais, lourd",categorie:["adjectifs"]},{id:115,JLPTLevel:"N1",kanji:"悪化",hiragana:"あっか",Romaji:"akka",francais:"aggravation, détérioration",categorie:["nom"]},{id:116,JLPTLevel:"N1",kanji:"扱い",hiragana:"あつかい",Romaji:"atsukai",francais:"traitement, service",categorie:["nom"]},{id:117,JLPTLevel:"N3",kanji:"扱う",hiragana:"あつかう",Romaji:"atsukau",francais:"s'occuper de, gérer, traiter",categorie:["verbes","verbes d’action"]},{id:118,JLPTLevel:"N2",kanji:"厚かましい",hiragana:"あつかましい",Romaji:"atsukamashii",francais:"effronté, insolent",categorie:["adjectifs"]},{id:119,JLPTLevel:"N1",kanji:"呆気ない",hiragana:"あっけない",Romaji:"akkenai",francais:"trop rapide, abrupt, pas assez de",categorie:["adjectifs"]},{id:120,JLPTLevel:"N1",kanji:"",hiragana:"あっさり",Romaji:"assari",francais:"facilement, simplement, rapidement",categorie:["adjectifs"]},{id:121,JLPTLevel:"N2",kanji:"圧縮",hiragana:"あっしゅく",Romaji:"asshuku",francais:"compression",categorie:["nom"]},{id:122,JLPTLevel:"N5",kanji:"彼方",hiragana:"あっち",Romaji:"acchi",francais:"ce côté-là (loin du locuteur et de l'interlocuteur)",categorie:["lieux et directions"]},{id:123,JLPTLevel:"N1",kanji:"圧迫",hiragana:"あっぱく",Romaji:"appaku",francais:"pression, oppression",categorie:["nom"]},{id:124,JLPTLevel:"N1",kanji:"",hiragana:"アップ",Romaji:"appu",francais:"vers le haut",categorie:["nom"]},{id:125,JLPTLevel:"N3",kanji:"集まり",hiragana:"あつまり",Romaji:"atsumari",francais:"réunion, rassemblement",categorie:["nom"]},{id:126,JLPTLevel:"N4",kanji:"集まる",hiragana:"あつまる",Romaji:"atsumaru",francais:"se réunir",categorie:["verbes","verbes d’action"]},{id:127,JLPTLevel:"N4",kanji:"集める",hiragana:"あつめる",Romaji:"atsumeru",francais:"réunir, rassembler",categorie:["verbes","verbes d’action"]},{id:128,JLPTLevel:"N1",kanji:"誂える",hiragana:"あつらえる",Romaji:"atsuraeru",francais:"commander, donner un ordre",categorie:["verbes","verbes d’action"]},{id:129,JLPTLevel:"N1",kanji:"圧力",hiragana:"あつりょく",Romaji:"atsuryoku",francais:"pression, stress",categorie:["nom"]},{id:130,JLPTLevel:"N1",kanji:"当て",hiragana:"あて",Romaji:"ate",francais:"espoir, attente, but, objectif",categorie:["nom"]},{id:131,JLPTLevel:"N1",kanji:"宛",hiragana:"あて",Romaji:"ate",francais:"but, destination, objectif",categorie:["nom"]},{id:132,JLPTLevel:"N1",kanji:"当て字",hiragana:"あてじ",Romaji:"ateji",francais:"kanji utilisé comme équivalent phonétique",categorie:["nom"]},{id:133,JLPTLevel:"N2",kanji:"宛名",hiragana:"あてな",Romaji:"atena",francais:"adresse et nom du destinataire",categorie:["nom"]},{id:134,JLPTLevel:"N2",kanji:"当てはまる",hiragana:"あてはまる",Romaji:"atehamaru",francais:"appliquer (une règle)",categorie:["verbes","verbes d’action"]},{id:135,JLPTLevel:"N2",kanji:"編物",hiragana:"あみもの",Romaji:"amimono",francais:"tricot",categorie:["activités et loisirs"]},{id:136,JLPTLevel:"N2",kanji:"編む",hiragana:"あむ",Romaji:"amu",francais:"assembler, coudre",categorie:["verbes","verbes d’action"]},{id:137,JLPTLevel:"N5",kanji:"雤",hiragana:"あめ",Romaji:"ame",francais:"pluie",categorie:["nature et environnement"]},{id:138,JLPTLevel:"N5",kanji:"飴",hiragana:"あめ",Romaji:"ame",francais:"bonbon, sucrerie",categorie:["la nourriture"]},{id:139,JLPTLevel:"N4",kanji:"",hiragana:"アメリカ",Romaji:"amerika",francais:"Amérique",categorie:["les pays"]},{id:140,JLPTLevel:"N2",kanji:"危うい",hiragana:"あやうい",Romaji:"ayaui",francais:"dangereux, risqué",categorie:["adjectifs"]},{id:141,JLPTLevel:"N2",kanji:"怪しい",hiragana:"あやしい",Romaji:"ayashii",francais:"incertain, suspicieux, douteux, suspect",categorie:["adjectifs"]},{id:142,JLPTLevel:"N1",kanji:"操る",hiragana:"あやつる",Romaji:"ayatsuru",francais:"manipuler, opérer",categorie:["verbes","verbes d’action"]},{id:143,JLPTLevel:"N1",kanji:"危ぶむ",hiragana:"あやぶむ",Romaji:"ayabumu",francais:"avoir des craintes, des doutes",categorie:["verbes","verbes d’action"]},{id:144,JLPTLevel:"N1",kanji:"",hiragana:"あやふや",Romaji:"ayafuya",francais:"ambigu, incertain, vague",categorie:["adjectifs"]},{id:145,JLPTLevel:"N1",kanji:"過ち",hiragana:"あやまち",Romaji:"ayamachi",francais:"erreur, faute, faux pas, indiscrétion",categorie:["nom"]},{id:146,JLPTLevel:"N3",kanji:"誤り",hiragana:"あやまり",Romaji:"ayamari",francais:"erreur",categorie:["nom"]},{id:147,JLPTLevel:"N4",kanji:"謝る",hiragana:"あやまる",Romaji:"ayamaru",francais:"s'excuser",categorie:["verbes","verbes d’action","formules de politesse"]},{id:148,JLPTLevel:"N1",kanji:"歩み",hiragana:"あゆみ",Romaji:"ayumi",francais:"promenade à pied, avancée",categorie:["activités et loisirs"]},{id:149,JLPTLevel:"N1",kanji:"歩む",hiragana:"あゆむ",Romaji:"ayumu",francais:"marcher, aller à pied",categorie:["verbes","verbes d’action"]},{id:150,JLPTLevel:"N3",kanji:"粗い",hiragana:"あらい",Romaji:"arai",francais:"grossier (texture), rugueux (surface)",categorie:["adjectifs"]},{id:151,JLPTLevel:"N2",kanji:"荒い",hiragana:"あらい",Romaji:"arai",francais:"brutal, violent",categorie:["adjectifs"]},{id:152,JLPTLevel:"N5",kanji:"洗う",hiragana:"あらう",Romaji:"arau",francais:"laver",categorie:["verbes","verbes d’action"]},{id:153,JLPTLevel:"N1",kanji:"予め",hiragana:"あらかじめ",Romaji:"arakajime",francais:"à l'avance",categorie:["expressions temporelles"]},{id:154,JLPTLevel:"N3",kanji:"嵐",hiragana:"あらし",Romaji:"arashi",francais:"tempête",categorie:["nature et environnement"]},{id:155,JLPTLevel:"N1",kanji:"荒らす",hiragana:"あらす",Romaji:"arasu",francais:"dévaster, laisser en ruine, endommager",categorie:["verbes","verbes d’action"]},{id:156,JLPTLevel:"N2",kanji:"粗筊",hiragana:"あらすじ",Romaji:"arasuj",francais:"résumé, synopsis",categorie:["nom"]},{id:157,JLPTLevel:"N1",kanji:"争い",hiragana:"あらそい",Romaji:"arasoi",francais:"conflit, lutte",categorie:["nom"]},{id:158,JLPTLevel:"N2",kanji:"争う",hiragana:"あらそう",Romaji:"arasou",francais:"se disputer, s'affronter",categorie:["verbes","verbes d’action"]},{id:159,JLPTLevel:"N3",kanji:"新た",hiragana:"あらた",Romaji:"arata",francais:"nouvellement, fraîchement",categorie:["adjectifs"]},{id:160,JLPTLevel:"N1",kanji:"改まる",hiragana:"あらたまる",Romaji:"aratamaru",francais:"être renouvelé, modifié",categorie:["verbes","verbes d’action"]},{id:161,JLPTLevel:"N2",kanji:"改めて",hiragana:"あらためて",Romaji:"aratamete",francais:"à nouveau, une nouvelle fois",categorie:["expressions temporelles"]},{id:162,JLPTLevel:"N2",kanji:"改める",hiragana:"あらためる",Romaji:"aratameru",francais:"modifier, renouveler",categorie:["verbes","verbes d’action"]},{id:163,JLPTLevel:"N1",kanji:"荒っぽい",hiragana:"あらっぽい",Romaji:"arappoi",francais:"rude, rêche",categorie:["adjectifs"]},{id:164,JLPTLevel:"N1",kanji:"アラブ",hiragana:"アラブ",Romaji:"arabu",francais:"arabe",categorie:["les pays"]},{id:165,JLPTLevel:"N3",kanji:"有らゆる",hiragana:"あらゆる",Romaji:"arayuru",francais:"tous, toutes",categorie:["nom"]},{id:166,JLPTLevel:"N1",kanji:"霰",hiragana:"あられ",Romaji:"arare",francais:"grêle",categorie:["nature et environnement"]},{id:167,JLPTLevel:"N3",kanji:"表す・現す・著す",hiragana:"あらわす",Romaji:"arawasu",francais:"montrer, afficher, révéler",categorie:["verbes","verbes d’action"]},{id:168,JLPTLevel:"N3",kanji:"現れ",hiragana:"あらわれ",Romaji:"araware",francais:"manifestation, incarnation, expression",categorie:["nom"]},{id:169,JLPTLevel:"N3",kanji:"現れる・表れる・現われる",hiragana:"あらわれる",Romaji:"arawareru",francais:"apparaître, se dévoiler, s'exprimer (sentiment)",categorie:["verbes","verbes d’action"]},{id:170,JLPTLevel:"N2",kanji:"有難い",hiragana:"ありがたい",Romaji:"arigatai",francais:"reconnaissant",categorie:["émotions et sentiments"]},{id:171,JLPTLevel:"N1",kanji:"有様",hiragana:"ありさま",Romaji:"arisama",francais:"état, condition",categorie:["nom"]},{id:172,JLPTLevel:"N1",kanji:"有りのまま",hiragana:"ありのまま",Romaji:"arinomama",francais:"tel quel",categorie:["expressions idiomatiques"]},{id:173,JLPTLevel:"N1",kanji:"有り触れる",hiragana:"ありふれる",Romaji:"arifureru",francais:"être courant, fréquent",categorie:["verbes","verbes d’action"]},{id:174,JLPTLevel:"N5",kanji:"有る",hiragana:"ある",Romaji:"aru",francais:"avoir, posséder",categorie:["verbes","verbes d’action"]},{id:175,JLPTLevel:"N5",kanji:"在る",hiragana:"ある",Romaji:"aru",francais:"être, se trouver, exister",categorie:["verbes","verbes d’action"]},{id:176,JLPTLevel:"N3",kanji:"或る",hiragana:"ある",Romaji:"aru",francais:"un certain",categorie:["nom"]},{id:177,JLPTLevel:"N3",kanji:"或いは",hiragana:"あるいは",Romaji:"aruiwa",francais:"ou bien",categorie:["mots de liaison et particules"]},{id:178,JLPTLevel:"N1",kanji:"",hiragana:"アルカリ",Romaji:"arukari",francais:"alcali",categorie:["nom"]},{id:179,JLPTLevel:"N5",kanji:"歩く",hiragana:"あるく",Romaji:"aruku",francais:"marcher",categorie:["verbes","verbes d’action"]},{id:180,JLPTLevel:"N4",kanji:"",hiragana:"アルコール",Romaji:"arukōru",francais:"alcool",categorie:["la nourriture"]},{id:181,JLPTLevel:"N4",kanji:"",hiragana:"アルバイト",Romaji:"arubaito",francais:"travail à temps partiel",categorie:["vocabulaire lié au travail"]},{id:182,JLPTLevel:"N3",kanji:"",hiragana:"アルバム",Romaji:"arubamu",francais:"album",categorie:["nom"]},{id:183,JLPTLevel:"N1",kanji:"",hiragana:"アルミ",Romaji:"arumi",francais:"aluminium",categorie:["nom"]},{id:184,JLPTLevel:"N5",kanji:"彼",hiragana:"あれ",Romaji:"are",francais:"ceci (loin du locuteur et de l'interlocuteur)",categorie:["nom"]},{id:185,JLPTLevel:"N2",kanji:"彼此",hiragana:"あれこれ",Romaji:"arekore",francais:"divers, diverses choses",categorie:["nom"]},{id:186,JLPTLevel:"N2",kanji:"荒れる",hiragana:"あれる",Romaji:"areru",francais:"être orageux, perdre son sang-froid",categorie:["verbes","verbes d’action"]},{id:187,JLPTLevel:"N3",kanji:"泡",hiragana:"あわ",Romaji:"awa",francais:"mousse, bulle",categorie:["nom"]},{id:188,JLPTLevel:"N1",kanji:"",hiragana:"アワー・アウア",Romaji:"awā・aua",francais:"heure",categorie:["expressions temporelles"]},{id:189,JLPTLevel:"N1",kanji:"吅わす",hiragana:"あわす",Romaji:"awasu",francais:"comparer, combiner, ajouter, unir, faire correspondre",categorie:["verbes","verbes d’action"]},{id:190,JLPTLevel:"N3",kanji:"吅わせる",hiragana:"あわせる",Romaji:"awaseru",francais:"se connecter, se mélanger",categorie:["verbes","verbes d’action"]},{id:191,JLPTLevel:"N2",kanji:"慌しい",hiragana:"あわただしい",Romaji:"awatadashii",francais:"déconcerté, confus",categorie:["adjectifs"]},{id:192,JLPTLevel:"N2",kanji:"慌てる",hiragana:"あわてる",Romaji:"awateru",francais:"devenir confus, agité, paniquer",categorie:["verbes","verbes d’action"]},{id:193,JLPTLevel:"N3",kanji:"哀れ",hiragana:"あわれ",Romaji:"aware",francais:"pitié, compassion",categorie:["émotions et sentiments"]},{id:194,JLPTLevel:"N3",kanji:"案",hiragana:"あん",Romaji:"an",francais:"plan, idée, projet",categorie:["nom"]},{id:195,JLPTLevel:"N2",kanji:"安易",hiragana:"あんい",Romaji:"an'i",francais:"facile, simple",categorie:["adjectifs"]},{id:196,JLPTLevel:"N2",kanji:"案外",hiragana:"あんがい",Romaji:"angai",francais:"contre toute attente, inattendu",categorie:["adjectifs"]},{id:197,JLPTLevel:"N3",kanji:"暗記",hiragana:"あんき",Romaji:"anki",francais:"mémorisation, par coeur",categorie:["nom"]},{id:198,JLPTLevel:"N1",kanji:"",hiragana:"アンケート",Romaji:"ankēto",francais:"enquête",categorie:["nom"]},{id:199,JLPTLevel:"N1",kanji:"",hiragana:"アンコール",Romaji:"ankōru",francais:"encore",categorie:["nom"]},{id:200,JLPTLevel:"N1",kanji:"暗殺",hiragana:"あんさつ",Romaji:"ansatsu",francais:"assassinat",categorie:["nom"]},{id:201,JLPTLevel:"N1",kanji:"暗算",hiragana:"あんざん",Romaji:"anzan",francais:"calcul mental",categorie:["nom"]},{id:202,JLPTLevel:"N1",kanji:"暗示",hiragana:"あんじ",Romaji:"anji",francais:"indice, suggestion",categorie:["nom"]},{id:203,JLPTLevel:"N1",kanji:"案じる",hiragana:"あんじる",Romaji:"anjiru",francais:"être inquiet, réfléchir à",categorie:["verbes","verbes d’action"]},{id:204,JLPTLevel:"N4",kanji:"安心する",hiragana:"あんしんする",Romaji:"anshin suru",francais:"être tranquille",categorie:["verbes","verbes d’action","émotions et sentiments"]},{id:205,JLPTLevel:"N1",kanji:"安静",hiragana:"あんせい",Romaji:"ansei",francais:"repos",categorie:["santé et bien-être"]},{id:206,JLPTLevel:"N4",kanji:"安全",hiragana:"あんぜん",Romaji:"anzen",francais:"sûr",categorie:["adjectifs"]},{id:207,JLPTLevel:"N3",kanji:"安定",hiragana:"あんてい",Romaji:"antei",francais:"équilibre, stabilité",categorie:["nom"]},{id:208,JLPTLevel:"N2",kanji:"アンテナ",hiragana:"アンテナ",Romaji:"antena",francais:"antenne",categorie:["technologie et gadgets"]},{id:209,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"comme ça",categorie:["adjectifs"]},{id:210,JLPTLevel:"N4",kanji:"",hiragana:"あんな",Romaji:"anna",francais:"ce genre de",categorie:["adjectifs"]},{id:211,JLPTLevel:"N4",kanji:"案内",hiragana:"あんない",Romaji:"annai",francais:"information, renseignement",categorie:["nom"]},{id:212,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:213,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:214,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:215,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:216,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:217,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:218,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:219,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:220,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:221,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:222,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:223,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:224,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:225,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:226,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:227,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:228,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:229,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:230,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:231,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:232,JLPTLevel:"N4",kanji:"案内する",hiragana:"あんないする",Romaji:"annai suru",francais:"guider, faire visiter",categorie:["verbes","verbes d’action"]},{id:233,JLPTLevel:"N3",kanji:"",hiragana:"あんなに",Romaji:"annani",francais:"à tel point que",categorie:["mots de liaison et particules"]},{id:234,JLPTLevel:"N1",kanji:"案の定",hiragana:"あんのじょう",Romaji:"annojou",francais:"comme d'habitude, comme prévu",categorie:["expressions idiomatiques"]},{id:235,JLPTLevel:"N5",kanji:"余り",hiragana:"あんまり・あまり",Romaji:"anmari",francais:"excès, trop plein, surplus",categorie:["nom"]},{id:236,JLPTLevel:"N3",kanji:"胃",hiragana:"い",Romaji:"i",francais:"estomac, ventre",categorie:["le corps humain"]},{id:237,JLPTLevel:"N2",kanji:"位",hiragana:"い",Romaji:"i",francais:"place, rang",categorie:["nom"]},{id:238,JLPTLevel:"N1",kanji:"異",hiragana:"い",Romaji:"i",francais:"différente (avis, opinion), étrange, inhabituelle",categorie:["adjectifs"]},{id:239,JLPTLevel:"N1",kanji:"意",hiragana:"い",Romaji:"i",francais:"sentiments, sensations, signification",categorie:["émotions et sentiments"]},{id:240,JLPTLevel:"N5",kanji:"良い",hiragana:"いい・よい",Romaji:"ii, yoi",francais:"plaisant, agréable, bien",categorie:["adjectifs"]},{id:241,JLPTLevel:"N5",kanji:"否",hiragana:"いいえ, いえ",Romaji:"iie, ie",francais:"non",categorie:["mots de liaison et particules"]},{id:242,JLPTLevel:"N1",kanji:"いい加減",hiragana:"いいかげん",Romaji:"iikagen",francais:"irresponsable, sans enthousiasme, vague",categorie:["adjectifs"]},{id:243,JLPTLevel:"N2",kanji:"言い出す",hiragana:"いいだす",Romaji:"iidasu",francais:"se mettre à parler, briser la glace",categorie:["verbes","verbes d’action"]},{id:244,JLPTLevel:"N2",kanji:"言い付ける",hiragana:"いいつける",Romaji:"iitsukeru",francais:"rapporter à quelqu'un, demander de faire, ordonner",categorie:["verbes","verbes d’action"]},{id:245,JLPTLevel:"N1",kanji:"言い訳",hiragana:"いいわけ",Romaji:"iiwake",francais:"excuse, explication, prétexte",categorie:["nom"]},{id:246,JLPTLevel:"N3",kanji:"委員",hiragana:"いいん",Romaji:"iin",francais:"membre d'un comité",categorie:["nom"]},{id:247,JLPTLevel:"N1",kanji:"医院",hiragana:"いいん",Romaji:"iin",francais:"bureau d'un médecin, clinique, dispensaire",categorie:["santé et bien-être"]},{id:248,JLPTLevel:"N5",kanji:"言う",hiragana:"いう",Romaji:"iu",francais:"dire",categorie:["verbes","verbes d’action"]},{id:249,JLPTLevel:"N5",kanji:"家",hiragana:"いえ",Romaji:"ie",francais:"maison",categorie:["les pièces de la maison"]},{id:250,JLPTLevel:"N1",kanji:"",hiragana:"イエス",Romaji:"iesu",francais:"oui",categorie:["mots de liaison et particules"]},{id:251,JLPTLevel:"N1",kanji:"家出",hiragana:"いえで",Romaji:"iede",francais:"le fait de quitter la maison",categorie:["expressions idiomatiques"]},{id:252,JLPTLevel:"N4",kanji:"以下",hiragana:"いか",Romaji:"ika",francais:"moins de, au dessous-de, sous",categorie:["nombres et quantificateurs"]},{id:253,JLPTLevel:"N4",kanji:"以外",hiragana:"いがい",Romaji:"igai",francais:"excepté",categorie:["mots de liaison et particules"]},{id:254,JLPTLevel:"N3",kanji:"意外",hiragana:"いがい",Romaji:"igai",francais:"inattendu, surprenant",categorie:["adjectifs"]},{id:255,JLPTLevel:"N4",kanji:"如何",hiragana:"いかが",Romaji:"ikaga",francais:"comment ?",categorie:["mots de liaison et particules"]},{id:256,JLPTLevel:"N4",kanji:"医学",hiragana:"いがく",Romaji:"igaku",francais:"médecine",categorie:["santé et bien-être"]},{id:257,JLPTLevel:"N1",kanji:"生かす",hiragana:"いかす",Romaji:"ikasu",francais:"ranimer, ressusciter",categorie:["verbes","verbes d’action"]},{id:258,JLPTLevel:"N1",kanji:"如何に",hiragana:"いかに",Romaji:"ikani",francais:"pourquoi ?, comment ?",categorie:["mots de liaison et particules"]},{id:259,JLPTLevel:"N1",kanji:"如何にも",hiragana:"いかにも",Romaji:"ikanimo",francais:"certainement !, en effet !, parfaitement !",categorie:["expressions idiomatiques"]},{id:260,JLPTLevel:"N1",kanji:"怒り",hiragana:"いかり",Romaji:"ikari",francais:"colère, emportement, fureur, rage",categorie:["émotions et sentiments"]},{id:261,JLPTLevel:"N3",kanji:"息",hiragana:"いき",Romaji:"iki",francais:"souffle, respiration",categorie:["le corps humain"]},{id:262,JLPTLevel:"N1",kanji:"粋",hiragana:"いき",Romaji:"iki",francais:"élégant, coquet, chic",categorie:["adjectifs"]},{id:263,JLPTLevel:"N2",kanji:"意義",hiragana:"いぎ",Romaji:"igi",francais:"moral",categorie:["nom"]},{id:264,JLPTLevel:"N1",kanji:"異議",hiragana:"いぎ",Romaji:"igi",francais:"objection, protestation",categorie:["nom"]},{id:265,JLPTLevel:"N3",kanji:"行き",hiragana:"いき・ゆき",Romaji:"iki, yuki",francais:"déplacement, aller simple",categorie:["nom"]},{id:266,JLPTLevel:"N2",kanji:"生き生き",hiragana:"いきいき",Romaji:"ikiiki",francais:"plein d'entrain, animé, de façon très vivante",categorie:["adjectifs"]},{id:267,JLPTLevel:"N3",kanji:"勢い",hiragana:"いきおい",Romaji:"ikioi",francais:"entrain, vigueur, force",categorie:["nom"]},{id:268,JLPTLevel:"N1",kanji:"生き甲斐",hiragana:"いきがい",Romaji:"ikigai",francais:"raison de vivre",categorie:["nom"]},{id:269,JLPTLevel:"N1",kanji:"意気込む",hiragana:"いきごむ",Romaji:"ikigomu",francais:"être enthousiaste à propos de quelque chose",categorie:["verbes","verbes d’action"]},{id:270,JLPTLevel:"N1",kanji:"行き違い",hiragana:"いきちがい",Romaji:"ikichigai",francais:"désaccord, malentendu",categorie:["nom"]},{id:271,JLPTLevel:"N2",kanji:"行成",hiragana:"いきなり",Romaji:"ikinari",francais:"brusquement, soudainement",categorie:["adverbes"]},{id:272,JLPTLevel:"N3",kanji:"生き物",hiragana:"いきもの",Romaji:"ikimono",francais:"être vivant, animal",categorie:["nom"]},{id:273,JLPTLevel:"N4",kanji:"生きる",hiragana:"いきる",Romaji:"ikiru",francais:"vivre, exister",categorie:["verbes","verbes d’action"]},{id:274,JLPTLevel:"N2",kanji:"幾",hiragana:"いく",Romaji:"iku",francais:"plusieurs, quelques",categorie:["adjectifs"]},{id:275,JLPTLevel:"N5",kanji:"行く",hiragana:"いく・ゆく",Romaji:"iku, yuku",francais:"aller",categorie:["verbes","verbes d’action"]},{id:276,JLPTLevel:"N2",kanji:"育児する",hiragana:"いくじする",Romaji:"ikuji suru",francais:"élever des enfants, s'occuper d'enfants",categorie:["verbes","verbes d’action"]},{id:277,JLPTLevel:"N1",kanji:"育成",hiragana:"いくせい",Romaji:"ikusei",francais:"élevage, culture",categorie:["nom"]},{id:278,JLPTLevel:"N1",kanji:"幾多",hiragana:"いくた",Romaji:"ikuta",francais:"beaucoup, de nombreux",categorie:["adjectifs"]},{id:279,JLPTLevel:"N5",kanji:"幾つ",hiragana:"いくつ",Romaji:"ikutsu",francais:"combien ? (quantité)",categorie:["adjectifs"]},{id:280,JLPTLevel:"N2",kanji:"幾分",hiragana:"いくぶん",Romaji:"ikubun",francais:"un peu, une partie",categorie:["adjectifs"]},{id:281,JLPTLevel:"N5",kanji:"幾ら",hiragana:"いくら",Romaji:"ikura",francais:"combien ? (prix)",categorie:["adjectifs"]},{id:282,JLPTLevel:"N5",kanji:"池",hiragana:"いけ",Romaji:"ike",francais:"étang",categorie:["nature et environnement"]},{id:283,JLPTLevel:"N3",kanji:"行けない",hiragana:"いけない",Romaji:"ikenai",francais:"ne doit pas faire, sans espoir, pas bon",categorie:["adjectifs"]},{id:284,JLPTLevel:"N2",kanji:"生花",hiragana:"いけばな",Romaji:"ikebana",francais:"ikebana, arrangement floral",categorie:["activités et loisirs"]},{id:285,JLPTLevel:"N1",kanji:"生ける",hiragana:"いける",Romaji:"ikeru",francais:"disposer (des fleurs)",categorie:["verbes","verbes d’action"]},{id:286,JLPTLevel:"N4",kanji:"意見",hiragana:"いけん",Romaji:"iken",francais:"opinion, avis",categorie:["nom"]},{id:287,JLPTLevel:"N1",kanji:"異見",hiragana:"いけん",Romaji:"iken",francais:"contradiction, opinion différente, objection",categorie:["nom"]},{id:288,JLPTLevel:"N2",kanji:"以後",hiragana:"いご",Romaji:"igo",francais:"après quoi, dorénavant",categorie:["expressions temporelles"]},{id:289,JLPTLevel:"N2",kanji:"以降",hiragana:"いこう",Romaji:"ikou",francais:"désormais, dorénavant, à l'avenir",categorie:["expressions temporelles"]},{id:290,JLPTLevel:"N1",kanji:"意向",hiragana:"いこう",Romaji:"ikou",francais:"idée, intention",categorie:["nom"]},{id:291,JLPTLevel:"N1",kanji:"移行",hiragana:"いこう",Romaji:"ikou",francais:"migration, passage d'un état à un autre",categorie:["nom"]},{id:292,JLPTLevel:"N2",kanji:"",hiragana:"イコール",Romaji:"ikōru",francais:"égal à",categorie:["nom"]},{id:293,JLPTLevel:"N1",kanji:"",hiragana:"いざ",Romaji:"iza",francais:"bien, maintenant",categorie:["adverbes"]},{id:294,JLPTLevel:"N2",kanji:"勇ましい",hiragana:"いさましい",Romaji:"isamashii",francais:"courageux",categorie:["adjectifs"]},{id:295,JLPTLevel:"N5",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"pierre, roc",categorie:["nature et environnement"]},{id:296,JLPTLevel:"N3",kanji:"医師",hiragana:"いし",Romaji:"ishi",francais:"médecin",categorie:["santé et bien-être"]},{id:297,JLPTLevel:"N3",kanji:"意志",hiragana:"いし",Romaji:"ishi",francais:"volonté",categorie:["émotions et sentiments"]},{id:298,JLPTLevel:"N3",kanji:"意思",hiragana:"いし",Romaji:"ishi",francais:"intention, but",categorie:["émotions et sentiments"]},{id:299,JLPTLevel:"N3",kanji:"維持",hiragana:"いじ",Romaji:"iji",francais:"conservation, entretien",categorie:["nom"]},{id:300,JLPTLevel:"N1",kanji:"意地",hiragana:"いじ",Romaji:"iji",francais:"obstination, volonté",categorie:["émotions et sentiments"]},{id:301,JLPTLevel:"N3",kanji:"意識",hiragana:"いしき",Romaji:"ishiki",francais:"conscience",categorie:["nom"]},{id:302,JLPTLevel:"N2",kanji:"意識する",hiragana:"いしきする",Romaji:"ishiki suru",francais:"avoir conscience",categorie:["verbes","verbes d’action"]},{id:303,JLPTLevel:"N4",kanji:"苛める",hiragana:"いじめる",Romaji:"ijimeru",francais:"embêter",categorie:["verbes","verbes d’action"]},{id:304,JLPTLevel:"N5",kanji:"医者",hiragana:"いしゃ",Romaji:"isha",francais:"docteur, médecin",categorie:["nom"]},{id:305,JLPTLevel:"N1",kanji:"移住",hiragana:"いじゅう",Romaji:"ijuu",francais:"migration, immigration",categorie:["nom"]},{id:306,JLPTLevel:"N1",kanji:"移住する",hiragana:"いじゅうする",Romaji:"ijuu suru",francais:"migrer, immigrer",categorie:["verbes"]},{id:307,JLPTLevel:"N1",kanji:"衣装",hiragana:"いしょう",Romaji:"ishou",francais:"vêtement, costume",categorie:["nom"]},{id:308,JLPTLevel:"N4",kanji:"以上",hiragana:"いじょう",Romaji:"ijou",francais:"plus de, au-dessus-de, davantage",categorie:["adjectifs"]},{id:309,JLPTLevel:"N3",kanji:"異常",hiragana:"いじょう",Romaji:"ijou",francais:"étrange, anormal",categorie:["adjectifs"]},{id:310,JLPTLevel:"N2",kanji:"衣食住",hiragana:"いしょくじゅう",Romaji:"ishokujyuu",francais:"nécessités de la vie (des vêtements, de la nourriture et un abri)",categorie:["nom"]},{id:311,JLPTLevel:"N1",kanji:"弄る",hiragana:"いじる",Romaji:"ijiru",francais:"manier, toucher, trifouiller",categorie:["verbes"]},{id:312,JLPTLevel:"N2",kanji:"意地悪",hiragana:"いじわる",Romaji:"ijiwaru",francais:"malicieux, désobligeant",categorie:["adjectifs"]},{id:313,JLPTLevel:"N5",kanji:"椅子",hiragana:"いす",Romaji:"isu",francais:"chaise",categorie:["nom"]},{id:314,JLPTLevel:"N3",kanji:"泉",hiragana:"いずみ",Romaji:"izumi",francais:"fontaine, source",categorie:["nom"]},{id:315,JLPTLevel:"N3",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"où ?, qui ?, quoi ?",categorie:["adjectifs"]},{id:316,JLPTLevel:"N2",kanji:"孰",hiragana:"いずれ",Romaji:"izure",francais:"un autre jour, une autre fois",categorie:["adjectifs"]},{id:317,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"sexe opposé",categorie:["nom"]},{id:318,JLPTLevel:"N1",kanji:"異性",hiragana:"いせい",Romaji:"isei",francais:"de sexe opposé",categorie:["nom"]},{id:319,JLPTLevel:"N1",kanji:"遺跡",hiragana:"いせき",Romaji:"iseki",francais:"ruine, vestige",categorie:["nom"]},{id:320,JLPTLevel:"N3",kanji:"以前",hiragana:"いぜん",Romaji:"izen",francais:"auparavant, autrefois",categorie:["adjectifs"]},{id:321,JLPTLevel:"N1",kanji:"依然",hiragana:"いぜん",Romaji:"izen",francais:"comme toujours, comme jusqu'à présent",categorie:["adjectifs"]},{id:322,JLPTLevel:"N5",kanji:"忙しい",hiragana:"いそがしい",Romaji:"isogashii",francais:"occupé",categorie:["adjectifs"]},{id:323,JLPTLevel:"N4",kanji:"急ぐ",hiragana:"いそぐ",Romaji:"isogu",francais:"se dépêcher",categorie:["verbes"]},{id:324,JLPTLevel:"N1",kanji:"依存",hiragana:"いぞん",Romaji:"izon",francais:"dépendance",categorie:["nom"]},{id:325,JLPTLevel:"N3",kanji:"板",hiragana:"いた",Romaji:"ita",francais:"planche, plaque",categorie:["nom"]},{id:326,JLPTLevel:"N5",kanji:"痛い",hiragana:"いたい",Romaji:"itai",francais:"douloureux",categorie:["adjectifs"]},{id:327,JLPTLevel:"N3",kanji:"偉大",hiragana:"いだい",Romaji:"idai",francais:"grandiose",categorie:["adjectifs"]},{id:328,JLPTLevel:"N1",kanji:"委託",hiragana:"いたく",Romaji:"itaku",francais:"consignation, le fait de confier quelque chose",categorie:["nom"]},{id:329,JLPTLevel:"N1",kanji:"委託する",hiragana:"いたくする",Romaji:"itaku suru",francais:"consigner, confier",categorie:["verbes"]},{id:330,JLPTLevel:"N4",kanji:"致す",hiragana:"いたす",Romaji:"itasu",francais:"faire (hum)",categorie:["verbes"]},{id:331,JLPTLevel:"N3",kanji:"悪戯",hiragana:"いたずら",Romaji:"itazura",francais:"mauvaise blague, sale tour",categorie:["nom"]},{id:332,JLPTLevel:"N1",kanji:"頂",hiragana:"いただき",Romaji:"itadaki",francais:"cime, sommet, pointe",categorie:["nom"]},{id:333,JLPTLevel:"N5",kanji:"戴きます",hiragana:"いただきます",Romaji:"itadakimasu",francais:"merci pour ce repas (expression de gratitude)",categorie:["expression"]},{id:334,JLPTLevel:"N4",kanji:"戴く",hiragana:"いただく",Romaji:"itadaku",francais:"recevoir (hum), manger ou boire",categorie:["verbes"]},{id:335,JLPTLevel:"N1",kanji:"至って",hiragana:"いたって",Romaji:"itatte",francais:"extrêmement, énormément",categorie:["adverbes"]},{id:336,JLPTLevel:"N3",kanji:"痛み",hiragana:"いたみ",Romaji:"itami",francais:"douleur",categorie:["nom"]},{id:337,JLPTLevel:"N2",kanji:"痛む",hiragana:"いたむ",Romaji:"itamuu",francais:"être blessé, subir une douleur",categorie:["verbes"]},{id:338,JLPTLevel:"N1",kanji:"痛める",hiragana:"いためる",Romaji:"itameru",francais:"se faire mal",categorie:["verbes"]},{id:339,JLPTLevel:"N1",kanji:"炒める",hiragana:"いためる",Romaji:"itameru",francais:"faire revenir (cuisine), cuisiner, faire frire",categorie:["verbes"]},{id:340,JLPTLevel:"N3",kanji:"至る",hiragana:"いたる",Romaji:"itaru",francais:"arriver à, mener à, conduire à",categorie:["verbes"]},{id:341,JLPTLevel:"N1",kanji:"労る",hiragana:"いたわる",Romaji:"itawaru",francais:"être plein d'attention pour, consoler, compatir",categorie:["verbes"]},{id:342,JLPTLevel:"N5",kanji:"一",hiragana:"いち",Romaji:"ichi",francais:"un",categorie:["nombres et quantificateurs"]},{id:343,JLPTLevel:"N3",kanji:"石",hiragana:"いし",Romaji:"ishi",francais:"foire, marché",categorie:["nom"]},{id:344,JLPTLevel:"N2",kanji:"位置",hiragana:"いち",Romaji:"ichi",francais:"place, position",categorie:["nom"]},{id:345,JLPTLevel:"N2",kanji:"一々",hiragana:"いちいち",Romaji:"ichiichi",francais:"un par un, séparément",categorie:["adverbes","nombres et quantificateurs"]}],Di={vocabulaire:e5},n5={color:localStorage.getItem("color")||"#F75D48"},i5={mode:localStorage.getItem("mode")||localStorage.setItem("mode","light")||"light",fontColor:localStorage.getItem("mode")==="light"?"#353535":"#F7F7F2",bgColor:localStorage.getItem("mode")==="light"?"#353535":"#F7F7F2",mainBgColor:localStorage.getItem("mode")==="light"?"#F7F7F2":"#353535"},a5={searchText:"",jlptLevel:"",kanaType:"",vocabulaireCategorie:[]},t5={exerciceModeDeJeu:"",exerciceDifficulté:"",exerciceNumber:0,exerciceResult:[],exerciceTimer:5,exerciceTimerActive:!1,exerciceTypeDeKana:"normal"},r5={totalTimer:0,totalfaute:0,totalreussite:0,questionsIncorrectes:[],questionsCorrectes:!1},o5={kanji:Io.kanji.length,vocabulaire:Di.vocabulaire.length},l5={kanji:[],vocabulaire:[],hiragana:[],katakana:[],nombre:[]},s5={userLvL:localStorage.getItem("userLvL")!==null?Number(localStorage.getItem("userLvL")):(localStorage.setItem("userLvL",0),0),userXp:localStorage.getItem("userXp")!==null?Number(localStorage.getItem("userXp")):(localStorage.setItem("userXp",0),0),userXpToNextLvL:localStorage.getItem("userXpToNextLvL")!==null?Number(localStorage.getItem("userXpToNextLvL")):(localStorage.setItem("userXpToNextLvL",5),5),KanjiLvL:localStorage.getItem("kanjiLvL")!==null?Number(localStorage.getItem("kanjiLvL")):(localStorage.setItem("kanjiLvL",0),0),KanjiXp:localStorage.getItem("KanjiXp")!==null?Number(localStorage.getItem("KanjiXp")):(localStorage.setItem("KanjiXp",0),0),KanjiXpToNextLvL:localStorage.getItem("KanjiXpToNextLvL")!==null?Number(localStorage.getItem("KanjiXpToNextLvL")):(localStorage.setItem("KanjiXpToNextLvL",100),100),vocabulaireLvL:localStorage.getItem("vocabulaireLvL")!==null?Number(localStorage.getItem("vocabulaireLvL")):(localStorage.setItem("vocabulaireLvL",0),0),vocabulaireXp:localStorage.getItem("vocabulaireXp")!==null?Number(localStorage.getItem("vocabulaireXp")):(localStorage.setItem("vocabulaireXp",0),0),vocabulaireXpToNextLvL:localStorage.getItem("vocabulaireXpToNextLvL")!==null?Number(localStorage.getItem("vocabulaireXpToNextLvL")):(localStorage.setItem("vocabulaireXpToNextLvL",100),100),hiraganaLvL:localStorage.getItem("hiraganaLvL")!==null?Number(localStorage.getItem("hiraganaLvL")):(localStorage.setItem("hiraganaLvL",0),0),hiraganaXp:localStorage.getItem("hiraganaXp")!==null?Number(localStorage.getItem("hiraganaXp")):(localStorage.setItem("hiraganaXp",0),0),hiraganaXpToNextLvL:localStorage.getItem("hiraganaXpToNextLvL")!==null?Number(localStorage.getItem("hiraganaXpToNextLvL")):(localStorage.setItem("hiraganaXpToNextLvL",100),100),katakanaLvL:localStorage.getItem("katakanaLvL")!==null?Number(localStorage.getItem("katakanaLvL")):(localStorage.setItem("katakanaLvL",0),0),katakanaXp:localStorage.getItem("katakanaXp")!==null?Number(localStorage.getItem("katakanaXp")):(localStorage.setItem("katakanaXp",0),0),katakanaXpToNextLvL:localStorage.getItem("katakanaXpToNextLvL")!==null?Number(localStorage.getItem("katakanaXpToNextLvL")):(localStorage.setItem("katakanaXpToNextLvL",100),100),nombreLvL:localStorage.getItem("nombreLvL")!==null?Number(localStorage.getItem("nombreLvL")):(localStorage.setItem("nombreLvL",0),0),nombreXp:localStorage.getItem("nombreXp")!==null?Number(localStorage.getItem("nombreXp")):(localStorage.setItem("nombreXp",0),0),nombreXpToNextLvL:localStorage.getItem("nombreXpToNextLvL")!==null?Number(localStorage.getItem("nombreXpToNextLvL")):(localStorage.setItem("nombreXpToNextLvL",100),100)},c5={kanjiUserXp:localStorage.getItem("kanjiUserXp")!==null?Number(localStorage.getItem("kanjiUserXp")):Number(localStorage.setItem("kanjiUserXp",2),2),vocabulaireUserXp:localStorage.getItem("vocabulaireUserXp")!==null?Number(localStorage.getItem("vocabulaireUserXp")):Number(localStorage.setItem("vocabulaireUserXp",2),2),hiraganaUserXp:localStorage.getItem("hiraganaUserXp")!==null?Number(localStorage.getItem("hiraganaUserXp")):Number(localStorage.setItem("hiraganaUserXp",2),2),katakanaUserXp:localStorage.getItem("katakanaUserXp")!==null?Number(localStorage.getItem("katakanaUserXp")):Number(localStorage.setItem("katakanaUserXp",2),2),nombreUserXp:localStorage.getItem("nombreUserXp")!==null?Number(localStorage.getItem("nombreUserXp")):Number(localStorage.setItem("nombreUserXp",2),2)},d5={lvlName:"",lvlUp:!1,userLvlUp:!1},Km=Mn({name:"color",initialState:n5,reducers:{setColor:(e,n)=>{e.color=n.payload,localStorage.setItem("color",n.payload)}}}),$m=Mn({name:"mode",initialState:i5,reducers:{setMode:(e,n)=>{e.mode=n.payload,n.payload==="light"?(e.fontColor="#353535",e.bgColor="#353535",e.mainBgColor="#F7F7F2"):(e.fontColor="#F7F7F2",e.bgColor="#F7F7F2",e.mainBgColor="#353535"),localStorage.setItem("mode",n.payload)}}}),Tm=Mn({name:"search",initialState:a5,reducers:{setSearchText:(e,n)=>{e.searchText=n.payload},setJlptLevel:(e,n)=>{e.jlptLevel=n.payload},setkanaType:(e,n)=>{e.kanaType=n.payload},setVocabulaireCategorie:(e,n)=>{e.vocabulaireCategorie=n.payload}}}),Nm=Mn({name:"parametersExercice",initialState:t5,reducers:{setExerciceModeDeJeu:(e,n)=>{e.exerciceModeDeJeu=n.payload},setExerciceDifficulté:(e,n)=>{e.exerciceDifficulté=n.payload},setExerciceNumber:(e,n)=>{e.exerciceNumber=n.payload},setExerciceResult:(e,n)=>{e.exerciceResult=n.payload},setExerciceTimer:(e,n)=>{e.exerciceTimer=n.payload},setExerciceTimerActive:(e,n)=>{e.exerciceTimerActive=n.payload},setExerciceTypeDeKana:(e,n)=>{e.exerciceTypeDeKana=n.payload}}}),Sm=Mn({name:"exercice",initialState:r5,reducers:{setTotalTimer:(e,n)=>{e.totalTimer=n.payload},setTotalfaute:(e,n)=>{e.totalfaute=n.payload},setTotalreussite:(e,n)=>{e.totalreussite=n.payload},addQuestionIncorrecte:(e,n)=>{e.questionsIncorrectes.push(n.payload)},resetQuestionsIncorrectes:e=>{e.questionsIncorrectes=[]},setQuestionsCorrectes:(e,n)=>{e.questionsCorrectes=n.payload}}}),u5=Mn({name:"totalData",initialState:o5,reducers:{setTotalData:(e,n)=>{e.kanji=n.payload.kanji,e.vocabulaire=n.payload.vocabulaire}}}),Om=Mn({name:"dataChoice",initialState:l5,reducers:{toggleKanji:(e,n)=>{const i=n.payload,a=e.kanji.findIndex(t=>t.id===i.id);a>=0?e.kanji.splice(a,1):e.kanji.push(i)},toggleVocabulaire:(e,n)=>{const i=n.payload,a=e.vocabulaire.findIndex(t=>t.id===i.id);a>=0?e.vocabulaire.splice(a,1):e.vocabulaire.push(i)},toggleKatakana:(e,n)=>{const i=n.payload,a=e.katakana.findIndex(t=>t.id===i.id);a>=0?e.katakana.splice(a,1):e.katakana.push(i)},toggleNombre:(e,n)=>{const i=n.payload,a=e.nombre.findIndex(t=>t.id===i.id);a>=0?e.nombre.splice(a,1):e.nombre.push(i)},toggleHiragana:(e,n)=>{const i=n.payload,a=e.hiragana.findIndex(t=>t.id===i.id);a>=0?e.hiragana.splice(a,1):e.hiragana.push(i)},resetKanji:e=>{e.kanji=[]},resetVocabulaire:e=>{e.vocabulaire=[]},resetKatakana:e=>{e.katakana=[]},resetNombre:e=>{e.nombre=[]},resetHiragana:e=>{e.hiragana=[]}}}),Mm=Mn({name:"lvl",initialState:s5,reducers:{setUserLvL:(e,n)=>{e.userLvL=n.payload,Number(localStorage.setItem("userLvL",n.payload))},setUserXp:(e,n)=>{e.userXp=n.payload,localStorage.setItem("userXp",n.payload)},setUserXpToNextLvL:(e,n)=>{e.userXpToNextLvL=n.payload,localStorage.setItem("userXpToNextLvL",n.payload)},setKanjiLvL:(e,n)=>{e.KanjiLvL=n.payload,localStorage.setItem("kanjiLvL",n.payload)},setKanjiXp:(e,n)=>{e.KanjiXp=n.payload,localStorage.setItem("KanjiXp",n.payload)},setKanjiXpToNextLvL:(e,n)=>{e.KanjiXpToNextLvL=n.payload,localStorage.setItem("KanjiXpToNextLvL",n.payload)},setVocabulaireLvL:(e,n)=>{e.vocabulaireLvL=n.payload,localStorage.setItem("vocabulaireLvL",n.payload)},setVocabulaireXp:(e,n)=>{e.vocabulaireXp=n.payload,localStorage.setItem("vocabulaireXp",n.payload)},setVocabulaireXpToNextLvL:(e,n)=>{e.vocabulaireXpToNextLvL=n.payload,localStorage.setItem("vocabulaireXpToNextLvL",n.payload)},setHiraganaLvL:(e,n)=>{e.hiraganaLvL=n.payload,localStorage.setItem("hiraganaLvL",n.payload)},setHiraganaXp:(e,n)=>{e.hiraganaXp=n.payload,localStorage.setItem("hiraganaXp",n.payload)},setHiraganaXpToNextLvL:(e,n)=>{e.hiraganaXpToNextLvL=n.payload,localStorage.setItem("hiraganaXpToNextLvL",n.payload)},setKatakanaLvL:(e,n)=>{e.katakanaLvL=n.payload,localStorage.setItem("katakanaLvL",n.payload)},setKatakanaXp:(e,n)=>{e.katakanaXp=n.payload,localStorage.setItem("katakanaXp",n.payload)},setKatakanaXpToNextLvL:(e,n)=>{e.katakanaXpToNextLvL=n.payload,localStorage.setItem("katakanaXpToNextLvL",n.payload)},setNombreLvL:(e,n)=>{e.nombreLvL=n.payload,localStorage.setItem("nombreLvL",n.payload)},setNombreXp:(e,n)=>{e.nombreXp=n.payload,localStorage.setItem("nombreXp",n.payload)},setNombreXpToNextLvL:(e,n)=>{e.nombreXpToNextLvL=n.payload,localStorage.setItem("nombreXpToNextLvL",n.payload)}}}),Em=Mn({name:"xpPerLvLForUser",initialState:c5,reducers:{setkanjiUserXp:(e,n)=>{e.kanjiUserXp=n.payload,localStorage.setItem("kanjiUserXp",n.payload)},setvocabulaireUserXp:(e,n)=>{e.vocabulaireUserXp=n.payload,localStorage.setItem("vocabulaireUserXp",n.payload)},sethiraganaUserXp:(e,n)=>{e.hiraganaUserXp=n.payload,localStorage.setItem("hiraganaUserXp",n.payload)},setkatakanaUserXp:(e,n)=>{e.katakanaUserXp=n.payload,localStorage.setItem("katakanaUserXp",n.payload)},setnombreUserXp:(e,n)=>{e.nombreUserXp=n.payload,localStorage.setItem("nombreUserXp",n.payload)}}}),Hm=Mn({name:"lvlUp",initialState:d5,reducers:{setLvlName:(e,n)=>{e.lvlName=n.payload},setLvlUp:(e,n)=>{e.lvlUp=n.payload},setUserLvLUp:(e,n)=>{e.userLvlUp=n.payload}}}),{setColor:g5}=Km.actions,{setMode:p5}=$m.actions,{setSearchText:nd,setJlptLevel:m5,setkanaType:id,setVocabulaireCategorie:f5}=Tm.actions,{setExerciceModeDeJeu:ga,setExerciceDifficulté:zm,setExerciceNumber:Dm,setExerciceResult:fk,setExerciceTimer:h5,setExerciceTimerActive:v5,setExerciceTypeDeKana:ad}=Nm.actions,{setTotalTimer:ig,setTotalfaute:ur,setTotalreussite:gr,addQuestionIncorrecte:w5,resetQuestionsIncorrectes:j5,setQuestionsCorrectes:ag}=Sm.actions,{toggleKanji:R5,toggleVocabulaire:x5,toggleKatakana:y5,toggleNombre:hk,toggleHiragana:k5,resetKanji:P5,resetVocabulaire:C5,resetKatakana:L5,resetNombre:b5,resetHiragana:K5}=Om.actions,{setUserLvL:$5,setUserXp:Vi,setUserXpToNextLvL:T5,setKanjiLvL:N5,setKanjiXp:Jm,setKanjiXpToNextLvL:S5,setVocabulaireLvL:O5,setVocabulaireXp:Fm,setVocabulaireXpToNextLvL:M5,setHiraganaLvL:E5,setHiraganaXp:_m,setHiraganaXpToNextLvL:H5,setKatakanaLvL:z5,setKatakanaXp:Bm,setKatakanaXpToNextLvL:D5,setNombreLvL:J5,setNombreXp:Am,setNombreXpToNextLvL:F5}=Mm.actions,{setkanjiUserXp:_5,setvocabulaireUserXp:B5,sethiraganaUserXp:A5,setkatakanaUserXp:I5,setnombreUserXp:V5}=Em.actions,{setLvlName:U5,setLvlUp:tg,setUserLvLUp:rg}=Hm.actions,X5=_w({reducer:{color:Km.reducer,mode:$m.reducer,search:Tm.reducer,parametersExercice:Nm.reducer,exercice:Sm.reducer,totalData:u5.reducer,dataChoice:Om.reducer,lvl:Mm.reducer,xpPerLvLForUser:Em.reducer,lvlUp:Hm.reducer}}),W5="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Q5="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.875%2017.9167C26.875%2022.8642%2022.8642%2026.875%2017.9167%2026.875C12.9691%2026.875%208.95833%2022.8642%208.95833%2017.9167C8.95833%2012.9691%2012.9691%208.95833%2017.9167%208.95833C22.8642%208.95833%2026.875%2012.9691%2026.875%2017.9167ZM17.0208%205.375H18.8125C19.3073%205.375%2019.7083%204.97392%2019.7083%204.47917V0.895833C19.7083%200.401078%2019.3073%200%2018.8125%200H17.0208C16.5261%200%2016.125%200.401078%2016.125%200.895833V4.47917C16.125%204.97392%2016.5261%205.375%2017.0208%205.375ZM18.8125%2030.4583H17.0208C16.5261%2030.4583%2016.125%2030.8594%2016.125%2031.3542V34.9375C16.125%2035.4323%2016.5261%2035.8333%2017.0208%2035.8333H18.8125C19.3073%2035.8333%2019.7083%2035.4323%2019.7083%2034.9375V31.3542C19.7083%2030.8594%2019.3073%2030.4583%2018.8125%2030.4583ZM34.9375%2016.125H31.3542C30.8594%2016.125%2030.4583%2016.5261%2030.4583%2017.0208V18.8125C30.4583%2019.3073%2030.8594%2019.7083%2031.3542%2019.7083H34.9375C35.4323%2019.7083%2035.8333%2019.3073%2035.8333%2018.8125V17.0208C35.8333%2016.5261%2035.4323%2016.125%2034.9375%2016.125ZM5.375%2018.8125V17.0208C5.375%2016.5261%204.97392%2016.125%204.47917%2016.125H0.895833C0.401078%2016.125%200%2016.5261%200%2017.0208V18.8125C0%2019.3073%200.401078%2019.7083%200.895833%2019.7083H4.47917C4.97392%2019.7083%205.375%2019.3073%205.375%2018.8125ZM27.4125%209.675C27.5807%209.84459%2027.8097%209.93999%2028.0485%209.93999C28.2874%209.93999%2028.5164%209.84459%2028.6846%209.675L31.2108%207.16667C31.3804%206.99846%2031.4758%206.76949%2031.4758%206.53062C31.4758%206.29176%2031.3804%206.06279%2031.2108%205.89458L29.9567%204.64042C29.7885%204.47082%2029.5595%204.37543%2029.3206%204.37543C29.0818%204.37543%2028.8528%204.47082%2028.6846%204.64042L26.1583%207.16667C25.9887%207.33487%2025.8933%207.56385%2025.8933%207.80271C25.8933%208.04157%2025.9887%208.27054%2026.1583%208.43875L27.4125%209.675ZM8.42083%2026.1583C8.25263%2025.9887%208.02365%2025.8933%207.78479%2025.8933C7.54593%2025.8933%207.31696%2025.9887%207.14875%2026.1583L4.6225%2028.6667C4.45291%2028.8349%204.35751%2029.0638%204.35751%2029.3027C4.35751%2029.5416%204.45291%2029.7705%204.6225%2029.9387L5.87667%2031.1929C6.04487%2031.3625%206.27385%2031.4579%206.51271%2031.4579C6.75157%2031.4579%206.98054%2031.3625%207.14875%2031.1929L9.675%2028.6667C9.84459%2028.4985%209.93999%2028.2695%209.93999%2028.0306C9.93999%2027.7918%209.84459%2027.5628%209.675%2027.3946L8.42083%2026.1583ZM28.6667%2026.1583C28.4985%2025.9887%2028.2695%2025.8933%2028.0306%2025.8933C27.7918%2025.8933%2027.5628%2025.9887%2027.3946%2026.1583L26.1404%2027.4125C25.9708%2027.5807%2025.8754%2027.8097%2025.8754%2028.0485C25.8754%2028.2874%2025.9708%2028.5164%2026.1404%2028.6846L28.6667%2031.2108C28.8349%2031.3804%2029.0638%2031.4758%2029.3027%2031.4758C29.5416%2031.4758%2029.7705%2031.3804%2029.9387%2031.2108L31.1929%2029.9567C31.3625%2029.7885%2031.4579%2029.5595%2031.4579%2029.3206C31.4579%2029.0818%2031.3625%2028.8528%2031.1929%2028.6846L28.6667%2026.1583ZM7.16667%209.675C7.33487%209.84459%207.56385%209.93999%207.80271%209.93999C8.04157%209.93999%208.27054%209.84459%208.43875%209.675L9.69292%208.42083C10.0294%208.06764%2010.0215%207.51011%209.675%207.16667L7.16667%204.6225C6.99846%204.45291%206.76949%204.35751%206.53062%204.35751C6.29176%204.35751%206.06279%204.45291%205.89458%204.6225L4.64042%205.87667C4.47082%206.04487%204.37543%206.27385%204.37543%206.51271C4.37543%206.75157%204.47082%206.98054%204.64042%207.14875L7.16667%209.675Z'%20fill='%23353535'/%3e%3c/svg%3e",q5="data:image/svg+xml,%3csvg%20width='21'%20height='36'%20viewBox='0%200%2021%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8947%2017.9406C13.8947%2024.7368%2018.2067%2031.2265%2020.5405%2034.2413C21.0748%2034.9314%2020.581%2035.9768%2019.7114%2035.9023C8.89085%2034.9749%200%2027.5466%200%2017.9406C0%208.68938%208.42852%201.01969%2019.2233%200.0937448C20.0788%200.0203678%2020.576%201.03601%2020.0709%201.73032C17.905%204.70778%2013.8947%2011.1391%2013.8947%2017.9406Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Z5=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11vw;
    @media screen and (max-width: 560px) {
        width: 30vw;
    }
`,og=w.button`
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
`;function G5(){const e=ze(),[n,i]=K.useState(localStorage.getItem("mode")||"light"),a=l=>{i(l),e(p5(l))},{bgColor:t}=y(l=>l.mode),{color:r}=y(l=>l.color);return o.jsxs(Z5,{children:[o.jsx(og,{$bgColor:t,$color:r,$isActive:n==="light",onClick:()=>a("light"),children:o.jsx("img",{src:n==="light"?W5:Q5})}),o.jsx(og,{$bgColor:t,$color:r,$isActive:n==="dark",onClick:()=>a("dark"),children:o.jsx("img",{src:q5})})]})}const Y5="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13422C0%204.13422%200.863862%208.26845%2014.3977%208.26845C27.9315%208.26845%2028.7954%204.13422%2028.7954%204.13422V31.6958C28.7954%2031.6958%2027.7876%2035.83%2014.3977%2035.83C1.00784%2035.83%200%2031.6958%200%2031.6958V4.13422Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23353535'%20stroke='%23E1E1DE'/%3e%3cpath%20d='M13.2459%208.40626C13.2459%2012.1356%2013.2459%2015.1588%2011.3742%2015.1588C9.5025%2015.1588%209.5025%2012.1356%209.5025%208.40626C9.5025%204.67692%2010.3405%201.65369%2011.3742%201.65369C12.4079%201.65369%2013.2459%204.67692%2013.2459%208.40626Z'%20fill='%23353535'/%3e%3cpath%20d='M19.8688%207.0282C19.8688%2010.1487%2019.8688%2012.6783%2018.573%2012.6783C17.2772%2012.6783%2017.2772%2010.1487%2017.2772%207.0282C17.2772%203.90773%2017.8574%201.37808%2018.573%201.37808C19.2887%201.37808%2019.8688%203.90773%2019.8688%207.0282Z'%20fill='%23353535'/%3e%3c/svg%3e",ej="data:image/svg+xml,%3csvg%20width='29'%20height='36'%20viewBox='0%200%2029%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.13379C0%204.13379%200.863862%208.26802%2014.3977%208.26802C27.9315%208.26802%2028.7954%204.13379%2028.7954%204.13379V31.6953C28.7954%2031.6953%2027.7876%2035.8296%2014.3977%2035.8296C1.00784%2035.8296%200%2031.6953%200%2031.6953V4.13379Z'%20fill='%23353535'/%3e%3cpath%20d='M28.2954%204.27204C28.2954%204.61694%2028.0573%205.04822%2027.3768%205.52559C26.7103%205.99317%2025.7132%206.43456%2024.4362%206.81348C21.8886%207.56941%2018.3393%208.04408%2014.3977%208.04408C10.4561%208.04408%206.90685%207.56941%204.35922%206.81348C3.08217%206.43456%202.08513%205.99317%201.41859%205.52559C0.738118%205.04822%200.5%204.61694%200.5%204.27204C0.5%203.92714%200.738118%203.49586%201.41859%203.01849C2.08513%202.5509%203.08217%202.10952%204.35922%201.7306C6.90685%200.974672%2010.4561%200.5%2014.3977%200.5C18.3393%200.5%2021.8886%200.974672%2024.4362%201.7306C25.7132%202.10952%2026.7103%202.5509%2027.3768%203.01849C28.0573%203.49586%2028.2954%203.92714%2028.2954%204.27204Z'%20fill='%23F7F7F2'%20stroke='%231E1E1E'/%3e%3cpath%20d='M13.2459%208.4059C13.2459%2012.1352%2013.2459%2015.1585%2011.3742%2015.1585C9.5025%2015.1585%209.5025%2012.1352%209.5025%208.4059C9.5025%204.67655%2010.3405%201.65332%2011.3742%201.65332C12.4079%201.65332%2013.2459%204.67655%2013.2459%208.4059Z'%20fill='%23F7F7F2'/%3e%3cpath%20d='M19.8688%207.02805C19.8688%2010.1485%2019.8688%2012.6782%2018.573%2012.6782C17.2772%2012.6782%2017.2772%2010.1485%2017.2772%207.02805C17.2772%203.90757%2017.8574%201.37793%2018.573%201.37793C19.2887%201.37793%2019.8688%203.90757%2019.8688%207.02805Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",nj=w.div`
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
    
`,ij=w(he)`
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
`;function aj(){const e=y(i=>i.mode),{bgColor:n}=y(i=>i.mode);return o.jsxs(nj,{children:[o.jsx(G5,{}),o.jsx(ij,{$bgColor:n,to:"/color",children:o.jsx("img",{src:e.mode==="light"?Y5:ej})})]})}const tj=()=>{const{mainBgColor:e}=y(n=>n.mode);return K.useEffect(()=>{document.body.style.backgroundColor=e},[e]),null},rj=w.div`
    display: flex;
    flex-direction: column;
    color: ${e=>e.$fontColor};
    margin-left: 3vw;
    width: 74vw;
    gap: 1vw;
    margin-bottom: 4vw;
    @media screen and (max-width: 560px) {
        margin-left: 0;
        width: 100vw;
        align-items: center;
        gap: 3vw;
        margin-bottom: 10vw;
    }
`,oj=w.div`
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
`,lj=w.div`
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
`,sj=w.div`
    display: flex;
    width: 76vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        width: calc(90% + 6vw);
        flex-direction: column;
        gap: 3vw;
    }
`,cj=w.div`
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
`,dj=w.div`
    display: flex;
    width: 100%;
    height: 6vw;
    gap: 0.5vw;
    color: ${e=>e.$fontColor};
    @media screen and (max-width: 560px) {
        height: 15vw;
        gap: 1.5vw;
    }
`,uj=w.h3`
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
`,gj=w.h3`
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
`,pj=w.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
    @media screen and (max-width: 560px) {
        height: 13vw;
        gap: 1.5vw;
    }
`,mj=w.span`
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
`,fj=w.h4`
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
`,hj=w.p`
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
`,vj=w.div`
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
`,wj=w.div`
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
`,jj=w.h3`
    font-size: 2.5vw;
    height: 40%;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,Rj=w.h3`
    font-size: 2vw;
    height: 40%;
    color: ${e=>e.$color};
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`,pr=w.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 3.5vw;
    @media screen and (max-width: 560px) {
        height: 10vw;
        gap: 1.5vw;
    }
`,xj=w.span`
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
`,yj=w.span`
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
`,kj=w.span`
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
`,Pj=w.span`
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
`,Cj=w.span`
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
`,Lj=w.span`
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
`,bj=w.span`
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
`,Kj=w.span`
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
`;function $j(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(l=>l.mode),{color:a}=y(l=>l.color),t=y(l=>l.totalData.kanji),r=y(l=>l.totalData.vocabulaire);return o.jsxs(rj,{children:[o.jsxs(oj,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[o.jsx("h1",{children:"NIHONGO"}),o.jsxs(lj,{$color:a,$mainBgColor:i,children:[o.jsx("span",{children:"日"}),o.jsx("span",{children:"本"}),o.jsx("span",{children:"語"})]})]}),o.jsxs(sj,{children:[o.jsxs(cj,{$bgColor:e,children:[o.jsxs(dj,{$fontColor:n,children:[o.jsx(uj,{$mainBgColor:i,children:"Actualité"}),o.jsx(gj,{$mainBgColor:i,$color:a,children:"ニュース"})]}),o.jsxs(pj,{children:[o.jsx(mj,{$mainBgColor:i,$color:a,children:"18/08"}),o.jsx(fj,{$mainBgColor:i,$fontColor:n,children:"Lancement de NIHONGO v.01w39a"})]}),o.jsx(hj,{$mainBgColor:i,$fontColor:n,children:"v01w39a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque. Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor. Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet."})]}),o.jsxs(vj,{$bgColor:e,children:[o.jsxs(wj,{$mainBgColor:i,$fontColor:n,children:[o.jsx(jj,{children:"Avancement"}),o.jsx(Rj,{$color:a,children:"アドバンス"})]}),o.jsxs(pr,{children:[o.jsx(xj,{$mainBgColor:i,$fontColor:n,children:"Katakana"}),o.jsx(yj,{$mainBgColor:i,$color:a,children:"90%"})]}),o.jsxs(pr,{children:[o.jsx(kj,{$mainBgColor:i,$fontColor:n,children:"Nombre de vocabulaire"}),o.jsxs(Pj,{$mainBgColor:i,$color:a,children:[r,"/?"]})]}),o.jsxs(pr,{children:[o.jsx(Cj,{$mainBgColor:i,$fontColor:n,children:"Nombre de kanji"}),o.jsxs(Lj,{$mainBgColor:i,$color:a,children:[t,"/2000"]})]}),o.jsxs(pr,{children:[o.jsx(bj,{$mainBgColor:i,$fontColor:n,children:"Hiragana"}),o.jsx(Kj,{$mainBgColor:i,$color:a,children:"80%"})]})]})]})]})}const td=({color:e,width:n="5vw",height:i="5vw"})=>o.jsx("svg",{width:n,height:i,viewBox:"0 0 43 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M39 4L4 36L39 68",stroke:e,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round"})});td.propTypes={color:S.string,width:S.string,height:S.string};const Im=({color:e,mainBgColor:n,width:i="5vw",height:a="5vw"})=>o.jsxs("svg",{width:i,height:a,viewBox:"0 0 74 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("rect",{y:"2",width:"36",height:"68",fill:e}),o.jsx("rect",{x:"41",y:"18",width:"3",height:"2",fill:e}),o.jsx("rect",{x:"60",y:"18",width:"3",height:"2",fill:e}),o.jsx("rect",{x:"29",width:"3",height:"2",fill:e}),o.jsx("rect",{x:"8",width:"3",height:"2",fill:e}),o.jsx("rect",{x:"38",y:"20",width:"36",height:"50",fill:e}),o.jsx("path",{d:"M54 61C54 59.8954 54.8954 59 56 59C57.1046 59 58 59.8954 58 61V70H54V61Z",fill:n}),o.jsx("path",{d:"M16 61C16 59.8954 16.8954 59 18 59C19.1046 59 20 59.8954 20 61V70H16V61Z",fill:n}),o.jsx("rect",{x:"4",y:"44",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"4",y:"28",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"42",y:"43",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"4",y:"12",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"42",y:"27",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"10",y:"44",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"10",y:"28",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"48",y:"43",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"10",y:"12",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"48",y:"27",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"16",y:"44",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"16",y:"28",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"54",y:"43",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"16",y:"12",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"54",y:"27",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"22",y:"44",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"22",y:"58",width:"10",height:"11",fill:n}),o.jsx("rect",{x:"42",y:"58",width:"10",height:"11",fill:n}),o.jsx("rect",{x:"60",y:"58",width:"10",height:"11",fill:n}),o.jsx("rect",{x:"4",y:"58",width:"10",height:"11",fill:n}),o.jsx("rect",{x:"22",y:"28",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"60",y:"43",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"22",y:"12",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"60",y:"27",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"28",y:"44",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"28",y:"28",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"66",y:"43",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"28",y:"12",width:"4",height:"11",fill:n}),o.jsx("rect",{x:"66",y:"27",width:"4",height:"11",fill:n})]});Im.propTypes={color:S.string,mainBgColor:S.string,width:S.string,height:S.string};const Tj=w.div`
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
`,Nj=w.div`
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
`,Sj=w(he)`
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
`,Oj=w(he)`
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
`,Mj=w.div`
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
`,Ej=w.div`
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
`,Hj=w.div`
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
    
`,zj=w.div`
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
`;function Na(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(g=>g.mode),{color:a}=y(g=>g.color),t=ce(),l=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};case"/Dictionnaire/Kanji":case"/Dictionnaire/Hiragana":case"/Dictionnaire/Katakana":case"/Dictionnaire/Vocabulaire":case"/Dictionnaire/Nombres":return{titleFurigana1:"じ",titleFurigana2:"しょ",titleKanji1:"辞",titleKanji2:"書",titleFr:"Dictionnaire"};default:return"Accueil"}})();let s=On();const c=window.innerWidth<560?"14vw":"5vw",d=()=>t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":window.innerWidth>560?"25vw":"9vw";return o.jsxs(Tj,{children:[o.jsxs(Nj,{$bgColor:e,children:[o.jsxs(Sj,{$mainBgColor:i,$fontColor:n,onClick:()=>s(-1),children:[o.jsx(td,{width:c,height:c,color:a}),o.jsxs("div",{children:[o.jsx("span",{children:"もど"}),o.jsx("span",{children:"戻る"}),o.jsx("span",{children:"Retour"})]})]}),o.jsxs(Oj,{$mainBgColor:i,$fontColor:n,to:"/",children:[o.jsx(Im,{width:c,height:c,color:a,mainBgColor:i}),o.jsxs("div",{children:[o.jsx("span",{children:"サイトホーム"}),o.jsx("span",{children:"Accueil du site"})]})]})]}),o.jsx(Mj,{$bgColor:e,children:o.jsxs(Ej,{$mainBgColor:i,$fontColor:n,children:[o.jsxs(Hj,{$color:a,children:[o.jsx("span",{children:l.titleFurigana1}),o.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":d},children:l.titleFurigana2})]}),o.jsxs(zj,{children:[o.jsx("span",{children:l.titleKanji1}),o.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":d},children:l.titleKanji2})]}),o.jsx("span",{children:l.titleFr})]})})]})}const rd=({color:e,width:n="4vw",height:i="5vw"})=>o.jsx("svg",{width:n,height:i,viewBox:"0 0 74 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M42 5C42 2.23858 39.7614 -1.20706e-07 37 0C34.2386 1.20706e-07 32 2.23858 32 5L42 5ZM33.4645 93.5355C35.4171 95.4882 38.5829 95.4882 40.5355 93.5355L72.3553 61.7157C74.308 59.7631 74.308 56.5973 72.3553 54.6447C70.4027 52.692 67.2369 52.692 65.2843 54.6447L37 82.9289L8.71573 54.6447C6.76311 52.692 3.59728 52.692 1.64466 54.6447C-0.307958 56.5973 -0.307958 59.7631 1.64466 61.7157L33.4645 93.5355ZM32 5L32 90L42 90L42 5L32 5Z",fill:e})});rd.propTypes={color:S.string,width:S.string,height:S.string};const Dj=w.div`
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
`,Jj=w.div`
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
`,Fj=w.div`
    display: flex;
    width: 100%;
    gap: 0.6vw;
    height: 5vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 40vw;
        gap: 1.5vw;
    }
`,_j=w.span`
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
`,Bj=w.div`
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
`,Aj=w.div`
    display: flex;
    height: 16vw;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        height: 50vw;
    }
    
`,Ij=w(he)`
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
`,Vj=w.div`
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
`,Uj=w.div`
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
`,Xj=w.div`
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
`,Wj=w.div`
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
`,Qj=w.div`
    text-align:center;
    font-size: 1.5vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,qj=w.div`
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
`,Zj=w.div`
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
`;function Bt(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(c=>c.mode),{color:a}=y(c=>c.color),t=ce(),l=(()=>{switch(t.pathname){case"/Kanji":return{titleFurigana1:"かん",titleFurigana2:"じ",titleKanji1:"漢",titleKanji2:"字",titleFr:"Kanji"};case"/Hiragana":return{titleFurigana1:"ひらがな",titleFurigana2:"",titleKanji1:"あ",titleKanji2:"",titleFr:"Hiragana"};case"/Katakana":return{titleFurigana1:"カタカナ",titleFurigana2:"",titleKanji1:"ア",titleKanji2:"",titleFr:"Katakana"};case"/Vocabulaire":return{titleFurigana1:"ご",titleFurigana2:"い",titleKanji1:"語",titleKanji2:"彙",titleFr:"Vocabulaire"};case"/Nombres":return{titleFurigana1:"ばん",titleFurigana2:"ごう",titleKanji1:"番",titleKanji2:"号",titleFr:"Nombres"};default:return"Accueil"}})(),s=window.innerWidth<560?"10vw":"5vw";return o.jsxs(Dj,{children:[o.jsxs(Jj,{$bgColor:e,children:[o.jsxs(Fj,{children:[o.jsx(_j,{$mainBgColor:i,$fontColor:n,children:"Dictionnaire"}),o.jsxs(Bj,{$color:a,children:[o.jsxs("div",{children:[o.jsx("span",{children:l.titleFurigana1}),o.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:l.titleFurigana2})]}),o.jsxs("div",{children:[o.jsx("span",{children:l.titleKanji1}),o.jsx("span",{style:{width:t.pathname==="/Hiragana"||t.pathname==="/Katakana"?"0vw":"9vw"},children:l.titleKanji2})]}),o.jsx("span",{children:l.titleFr})]})]}),o.jsx(Aj,{children:o.jsxs(Ij,{to:`/Dictionnaire/${l.titleFr}`,$mainBgColor:i,$fontColor:n,children:[o.jsxs(Vj,{$color:a,children:[o.jsx("span",{children:"じ"}),o.jsx("span",{children:"しょ"})]}),o.jsxs(Uj,{children:[o.jsx("span",{children:"辞"}),o.jsx("span",{children:"書"})]})]})})]}),o.jsx(Xj,{$bgColor:e,children:o.jsxs(Wj,{$mainBgColor:i,$fontColor:n,children:[o.jsx(Qj,{children:"Exercices"}),o.jsxs("div",{children:[o.jsxs(qj,{$color:a,children:[o.jsx("span",{children:"えん"}),o.jsx("span",{children:"しゅう"})]}),o.jsxs(Zj,{children:[o.jsx("span",{children:"演"}),o.jsx("span",{children:"習"})]})]}),o.jsx(rd,{width:s,height:s,color:a})]})})]})}const Gj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%239ED7FF'/%3e%3c/svg%3e",Yj="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='30.6667'%20y='30.6666'%20width='30.6667'%20height='30.6667'%20fill='%23FFC370'/%3e%3cpath%20d='M0%205C0%202.23857%202.23858%200%205%200H30.6667V30.6667H0V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%2061.3334H91.9999V87C91.9999%2089.7615%2089.7613%2092%2086.9999%2092H61.3333V61.3334Z'%20fill='%23FFC370'/%3e%3cpath%20d='M61.3333%200H86.9999C89.7613%200%2091.9999%202.23858%2091.9999%205V30.6667H61.3333V0Z'%20fill='%23FFC370'/%3e%3c/svg%3e",eR="data:image/svg+xml,%3csvg%20width='92'%20height='92'%20viewBox='0%200%2092%2092'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H46V46H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2063.4054H23.5946C26.356%2063.4054%2028.5946%2065.644%2028.5946%2068.4054V92H0V63.4054Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M63.4054%200H92V28.5946H68.4054C65.644%2028.5946%2063.4054%2026.356%2063.4054%2023.5946V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M46%2046H92V87C92%2089.7614%2089.7614%2092%2087%2092H46V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",Ws=({color:e,width:n="6vw",height:i="4vw"})=>o.jsx("svg",{width:n,height:i,viewBox:"0 0 109 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M8.99999 9L54.5 44L100 9",stroke:e,strokeWidth:"17",strokeLinecap:"round",strokeLinejoin:"round"})});Ws.propTypes={color:S.string,width:S.string,height:S.string};const nR=w.div`
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
`,iR=w.div`
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
`,aR=w.div`
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
`,tR=w.div`
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
`,rR=w.button`
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
`,oR=w.div`
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
`,lR=w.div`
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
`,sR=w.div`
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
`,cR=w.div`
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
`,dR=w.div`
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
`,uR=w.div`
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
`,gR=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
    @media screen and (max-width: 560px) {
        height: 100%;
        gap: 1.5vw;
    }
`,pR=w.button`
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
        .xp{
            opacity: 1;
        }
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
`,mR=w.div`
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
`,fR=w.div`
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
`,Ol=w.p`
    position: absolute;
    font-size: 1.5vw;
    z-index: 1;
    left: 40%;
    color: ${e=>e.$color};
    opacity: 0;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
`,Mr=({$difficulte:e,$icon:n,children:i,$selectedDifficulte:a,$setSelectedDifficulte:t})=>{const r=ze(),{fontColor:l,mainBgColor:s}=y(v=>v.mode),{color:c}=y(v=>v.color),d=a===e,[g,p]=K.useState(d?s:c),[m,u]=K.useState(d?c:s),[j,x]=K.useState(d?c:"#F7F7F2"),[k,f]=K.useState(d?s:l),h=()=>{t(e),r(zm(e))};return K.useEffect(()=>{p(d?s:c),u(d?c:s),x(d?c:"#F7F7F2"),f(d?s:l)},[d,s,c,l]),o.jsxs(pR,{$mainBgColor:m,$fontColor:k,onClick:h,children:[o.jsxs(mR,{children:[o.jsx("img",{src:n}),o.jsx("span",{children:e})]}),o.jsx(fR,{$mainBgColor:j,$color:g,children:i})]})};Mr.propTypes={$difficulte:S.string.isRequired,$icon:S.string.isRequired,children:S.node,$selectedDifficulte:S.string.isRequired,$setSelectedDifficulte:S.func.isRequired};function Vo(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(f=>f.mode),{color:a}=y(f=>f.color),t=ze(),[r,l]=K.useState(y(f=>f.parametersExercice.exerciceTimer)),[s,c]=K.useState(y(f=>f.parametersExercice.exerciceTimerActive)),[d,g]=K.useState("#858585"),[p,m]=K.useState("");K.useEffect(()=>{t(h5(r))},[r,t]);const u=()=>{const f=!s;c(f),t(v5(f)),g(f?a:"#858585")},j=()=>{r<15&&l(r+1)},x=()=>{r>1&&l(r-1)},k=window.innerWidth<560?"15vw":"5vw";return o.jsxs(nR,{id:"SectionDifficulte",children:[o.jsx(iR,{$bgColor:e,children:o.jsxs(aR,{$mainBgColor:i,$fontColor:n,children:[o.jsx("span",{children:"Temps par question"}),o.jsxs(tR,{$color:a,children:[o.jsx("button",{onClick:j,children:o.jsx(Ws,{width:k,height:k,color:a})}),o.jsxs("p",{children:[r,o.jsx("span",{children:"S"})]}),o.jsx("button",{onClick:x,children:o.jsx(Ws,{width:k,height:k,color:a})})]}),o.jsx(rR,{onClick:u,$color:d,children:s?"Activer":"Désactiver"})]})}),o.jsxs(oR,{$bgColor:e,children:[o.jsxs(lR,{children:[o.jsx(sR,{$mainBgColor:i,$fontColor:n,children:"Difficulté"}),o.jsxs(cR,{$color:a,children:[o.jsxs(dR,{children:[o.jsx("span",{children:"こん"}),o.jsx("span",{children:"なん"})]}),o.jsxs(uR,{children:[o.jsx("span",{children:"困"}),o.jsx("span",{children:"難"})]})]})]}),o.jsxs(gR,{children:[o.jsxs(Mr,{$difficulte:"Débutant",$icon:Gj,$selectedDifficulte:p,$setSelectedDifficulte:m,children:[o.jsx("span",{children:"Hiragana/Katakana"}),o.jsx("span",{children:"Rōmaji"}),o.jsx(Ol,{className:"xp",$difficulte:"Débutant",$color:a,children:"5xp"})]}),o.jsxs(Mr,{$difficulte:"Intermédiaire",$icon:Yj,$selectedDifficulte:p,$setSelectedDifficulte:m,children:[o.jsx("span",{children:"Hiragana/Katakana"}),o.jsx(Ol,{className:"xp",$difficulte:"Intermédiaire",$color:a,children:"6.25xp"})]}),o.jsx(Mr,{$difficulte:"Confirmer",$icon:eR,$selectedDifficulte:p,$setSelectedDifficulte:m,children:o.jsx(Ol,{className:"xp",$difficulte:"Confirmer",$color:a,children:"7.8xp"})})]})]})]})}const At="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0544'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0544)'%20fill='%23F7F7F2'/%3e%3crect%20x='14.5542'%20y='48.9956'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9956)'%20fill='%23F7F7F2'/%3e%3c/svg%3e",hR=w.div`
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
`,Ml=w.button`
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
`,El=w.div`
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
`,Hl=w.span`
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
`,vR=w.div`
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
`,wR=w.span`
    font-size: 8vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 20vw;
    }
`,jR=w.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        bottom: 5vw;
        left: 5vw;
    }
`,RR=w.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 10vw;
        width: 90%;
    }
`,xR=w.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,yR=w.div`
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
`,kR=w.button`
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
`,PR=w.button`
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
`;function Uo(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(R=>R.mode),{color:a}=y(R=>R.color),t=ze(),r=ce(),l=y(R=>R.parametersExercice.exerciceModeDeJeu),[s,c]=K.useState(null);K.useEffect(()=>{(r.pathname==="/Katakana"||r.pathname==="/Hiragana")&&l==="N5"&&t(ga(""))},[r.pathname,l,t]);const g=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),p=On(),m=R=>{t(ga(R)),c(R)},u=R=>s===R?a:i,j=y(R=>R.parametersExercice.exerciceNumber),x=j===0,k=R=>{if(document.querySelector(".Alert").style.display="block",j===0){f(".AlertNbQuestion",x);return}else t(ga(R)),p(`/choisir-ses/${g.modeTitle}`),window.scrollTo(0,0)},f=(R,P)=>{document.querySelector(R).style.display=P?"flex":"none"},h=()=>{document.querySelector(".NbAlert").style.display="none",f(".NbAlertNbQuestion",!1)},v=R=>()=>{const P=document.getElementById(`Section${R}`);P?(document.querySelector(".NbAlert").style.display="none",window.innerWidth<=560?P.scrollIntoView({behavior:"smooth",block:"start"}):P.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${R}`)};return o.jsxs(hR,{id:"SectionModeDeJeu",children:[o.jsx(xR,{className:"NbAlert",children:o.jsxs(yR,{children:[o.jsx(kR,{onClick:h,$color:a,children:o.jsx("img",{src:At})}),o.jsxs(PR,{onClick:v("NombreDeQuestions"),className:"NbAlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[o.jsxs("h1",{children:["Selectionner un ",o.jsx("span",{children:"nombre de questions"})]}),o.jsxs("div",{children:[o.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),o.jsx("span",{})]})]})]})}),o.jsx(Ml,{$bgColor:e,onClick:()=>m("Aléatoire"),children:o.jsxs(El,{$mainBgColor:u("Aléatoire"),$fontColor:n,children:[o.jsx(Hl,{$color:a,children:"Mode de jeu"}),o.jsxs(vR,{children:[o.jsx("span",{children:"ランダム"}),o.jsx("span",{children:"Aléatoire"})]})]})}),r.pathname.includes("/Vocabulaire")||r.pathname.includes("/Kanji")?o.jsx(Ml,{$bgColor:e,onClick:()=>m("N5"),children:o.jsxs(El,{$mainBgColor:u("N5"),$fontColor:n,children:[o.jsx(Hl,{$color:a,children:"Mode de jeu"}),o.jsx(wR,{children:"N5"}),o.jsx(jR,{children:"JLPT"})]})}):null,o.jsx(Ml,{$bgColor:e,onClick:()=>k("Choisir ses questions"),children:o.jsxs(El,{$mainBgColor:u("Choisir ses questions"),$fontColor:n,children:[o.jsx(Hl,{$color:a,children:"Mode de jeu"}),o.jsxs(RR,{children:["Choisir ses ",g.modeTitle]})]})})]})}const CR=w.div`
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
`,LR=w.span`
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
`,bR=w.div`
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
`,KR=w.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 50%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;   
    }
`,lg=w.button`
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
`,$R=w.button`
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
`;function Xo(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(m=>m.mode),{color:a}=y(m=>m.color),t=ze(),r=ce(),[l,s]=K.useState(null),d=(()=>{switch(r.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),g=m=>{t(Dm(m)),s(m)},p=m=>l===m?a:i;return o.jsxs(CR,{$bgColor:e,id:"SectionNombreDeQuestions",children:[o.jsxs(LR,{$color:a,$fontColor:n,children:["Nombre de ",d.modeTitle.replace("'","&apos;")," dans l'exercice"]}),o.jsxs(bR,{children:[o.jsxs(KR,{children:[o.jsx(lg,{$fontColor:n,$mainBgColor:p(10),onClick:()=>g(10),children:"10"}),o.jsx(lg,{$fontColor:n,$mainBgColor:p(20),onClick:()=>g(20),children:"20"})]}),o.jsx($R,{$fontColor:n,$mainBgColor:p(30),onClick:()=>g(30),children:"30"})]})]})}const TR="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='37'%20width='18.5'%20height='18.5'%20fill='%23F7F7F2'/%3e%3crect%20x='37'%20width='24'%20height='19'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='8'%20width='18'%20height='46'%20fill='%23F7F7F2'/%3e%3crect%20x='56'%20y='17'%20width='18'%20height='20'%20fill='%23F7F7F2'/%3e%3cpath%20d='M56%200H69C71.7614%200%2074%202.23858%2074%205V19H56V0Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='48'%20fill='%23F7F7F2'/%3e%3crect%20x='12'%20y='56'%20width='25'%20height='18'%20fill='%23F7F7F2'/%3e%3cpath%20d='M0%2056H19V74H5C2.23858%2074%200%2071.7614%200%2069V56Z'%20fill='%23F7F7F2'/%3e%3crect%20y='19'%20width='19'%20height='19'%20fill='%23F7F7F2'/%3e%3c/svg%3e",NR=w.div`
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
`,SR=w.button`
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
`,OR=w.div`
    font-size: 2vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`,MR=w.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            width: 8vw;
        }
    }
`,ER=w.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 100%;
        }
`,HR=w.div`
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
`,zR=w.div`
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
`,DR=w.div`
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
`,JR=w.div`
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
`,FR=w.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`,_R=w.div`
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
`,BR=w.button`
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
`,zl=w.button`
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
`;function Wo(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(R=>R.mode),{color:a}=y(R=>R.color),t=y(R=>R.parametersExercice.exerciceDifficulté),r=y(R=>R.parametersExercice.exerciceModeDeJeu),l=y(R=>R.parametersExercice.exerciceNumber),s=ce(),c=On(),g=(()=>{switch(s.pathname){case"/Kanji":return{modeTitle:"Kanji"};case"/Hiragana":return{modeTitle:"Hiragana"};case"/Katakana":return{modeTitle:"Katakana"};case"/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/Nombres":return{modeTitle:"Nombres"};default:return{modeTitle:"Accueil"}}})(),p=y(R=>R.parametersExercice.exerciceModeDeJeu),m=y(R=>R.parametersExercice.exerciceNumber),u=y(R=>R.parametersExercice.exerciceDifficulté),[j,x]=K.useState(!1);K.useEffect(()=>{j&&c(`/Exercices/${g.modeTitle}`)},[j,c,g.modeTitle]);const k=(R,P)=>{document.querySelector(R).style.display=P?"flex":"none"},f=()=>{const R=p==="",P=m===0,L=u==="";R||P||L?(document.querySelector(".Alert").style.display="block",x(!1),k(".AlertMode",R),k(".AlertNbQuestion",P),k(".AlertDifficulte",L)):x(!0)},h=()=>{document.querySelector(".Alert").style.display="none",k(".AlertMode",!1),k(".AlertNbQuestion",!1),k(".AlertDifficulte",!1)},v=R=>()=>{const P=document.getElementById(`Section${R}`);P?(document.querySelector(".Alert").style.display="none",window.innerWidth<=560?P.scrollIntoView({behavior:"smooth",block:"start"}):P.scrollIntoView({behavior:"smooth",block:"center"})):console.error(`Element not found: #Section${R}`)};return o.jsxs(NR,{$bgColor:e,children:[o.jsx(FR,{className:"Alert",children:o.jsxs(_R,{children:[o.jsx(BR,{onClick:h,$color:a,children:o.jsx("img",{src:At})}),o.jsxs(zl,{onClick:v("Difficulte"),className:"AlertDifficulte",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[o.jsxs("h1",{children:["Selectionner une ",o.jsx("span",{children:"difficulté"})]}),o.jsxs("div",{children:[o.jsx("p",{children:"Selon la difficulté choisie, plus ou moins d'aide vous sera proposée"}),o.jsx("span",{})]})]}),o.jsxs(zl,{onClick:v("NombreDeQuestions"),className:"AlertNbQuestion",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[o.jsxs("h1",{children:["Selectionner un ",o.jsx("span",{children:"nombre de questions"})]}),o.jsxs("div",{children:[o.jsx("p",{children:"Sélectionner le nombre de questions qui vous sera posée lors de l'exercice"}),o.jsx("span",{})]})]}),o.jsxs(zl,{onClick:v("ModeDeJeu"),className:"AlertMode",$bgColor:e,$mainBgColor:i,$color:a,$fontColor:n,children:[o.jsxs("h1",{children:["Selectionner un ",o.jsx("span",{children:"mode de jeu"})]}),o.jsxs("div",{children:[o.jsx("p",{children:"Le mode de jeu influencera les questions qui vous seront posées lors de l'exercice"}),o.jsx("span",{})]})]})]})}),o.jsxs(SR,{id:"exercice",$color:a,onClick:f,children:[o.jsx(OR,{children:"Commencer"}),o.jsx("img",{src:TR}),o.jsxs(MR,{children:[o.jsx("span",{children:"はじ"}),o.jsxs(ER,{children:[o.jsx("span",{children:"始"}),o.jsx("span",{children:"める"})]})]})]}),o.jsxs(HR,{children:[o.jsxs(zR,{$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("span",{children:"Mode de jeu"}),o.jsx("span",{children:r})]}),o.jsxs(DR,{$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("span",{children:"Difficulté"}),o.jsx("span",{children:t})]})]}),o.jsxs(JR,{$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsxs("span",{children:["Nombre de ",g.modeTitle.replace("'","&apos;")," dans l'exercice"]}),o.jsx("span",{children:l})]})]})}const Vm=({mainColor:e,color:n,width:i="2.5vw",height:a="2.5vw"})=>o.jsxs("svg",{width:i,height:a,viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M47.1066 7.13958L47.1138 7.14652L47.1207 7.15373L50.5746 10.7515C52.4517 12.7069 53.5 15.3125 53.5 18.0231V27V44C53.5 49.2467 49.2467 53.5 44 53.5H28.04H10C4.75329 53.5 0.5 49.2467 0.5 44V10C0.5 4.7533 4.7533 0.5 10 0.5H27H35.9722C38.6858 0.5 41.2939 1.5505 43.2499 3.43125L47.1066 7.13958Z",fill:e,stroke:e}),o.jsx("rect",{width:"40.56",height:"6.76",rx:"3.38",transform:"matrix(-1 0 0 1 47.28 42.0798)",fill:n}),o.jsx("rect",{width:"40.56",height:"6.76",rx:"3.38",transform:"matrix(-1 0 0 1 47.28 33.24)",fill:n}),o.jsx("path",{d:"M37 1H9V13C9 15.7614 11.2386 18 14 18H32C34.7614 18 37 15.7614 37 13V1Z",fill:n}),o.jsx("rect",{width:"7.28",height:"11.44",rx:"3.64",transform:"matrix(-1 0 0 1 18 3)",fill:e})]});Vm.propTypes={mainColor:S.string,color:S.string,width:S.string,height:S.string};const od="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='19.5039'%20y='15.0547'%20width='48'%20height='7'%20rx='3'%20transform='rotate(45%2019.5039%2015.0547)'%20fill='%23353535'/%3e%3crect%20x='14.5542'%20y='48.9951'%20width='48'%20height='7'%20rx='3'%20transform='rotate(-45%2014.5542%2048.9951)'%20fill='%23353535'/%3e%3c/svg%3e",AR="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H21V21H0V5Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M32%200H48C50.7614%200%2053%202.23858%2053%205V22H32V0Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M21%2051H42V74H26C23.2386%2074%2021%2071.7614%2021%2069V51Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M52%2021H69C71.7614%2021%2074%2023.2386%2074%2026V42H52V21Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M0%2032H23V53H5C2.23858%2053%200%2050.7614%200%2048V32Z'%20fill='%2378FB8C'/%3e%3cpath%20d='M53%2053H74V69C74%2071.7614%2071.7614%2074%2069%2074H53V53Z'%20fill='%2378FB8C'/%3e%3crect%20x='21'%20y='21'%20width='32'%20height='32'%20fill='%2378FB8C'/%3e%3c/svg%3e",IR="data:image/svg+xml,%3csvg%20width='75'%20height='74'%20viewBox='0%200%2075%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H22V74H5C2.23858%2074%200%2071.7614%200%2069V5Z'%20fill='%239ED7FF'/%3e%3cpath%20d='M53%200H70C72.7614%200%2075%202.23858%2075%205V69C75%2071.7614%2072.7614%2074%2070%2074H53V0Z'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20y='61'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='40'%20y='48'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='40'%20y='13'%20width='14'%20height='13'%20fill='%239ED7FF'/%3e%3crect%20x='21'%20y='26'%20width='14'%20height='22'%20fill='%239ED7FF'/%3e%3c/svg%3e",VR="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H27L13.5%2013.5L0%2027V5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M60%2061.5L74%2047V69C74%2071.7614%2071.7614%2074%2069%2074H47L60%2061.5Z'%20fill='%23FFC370'/%3e%3cpath%20d='M29.5%2029.5L59%200H69C71.7614%200%2074%202.23858%2074%205V14L44.5%2044.5L16%2074H5C2.23858%2074%200%2071.7614%200%2069V59L29.5%2029.5Z'%20fill='%23FFC370'/%3e%3crect%20x='22'%20y='22'%20width='30'%20height='30'%20rx='5'%20fill='%23FFC370'/%3e%3c/svg%3e",UR="data:image/svg+xml,%3csvg%20width='75'%20height='74'%20viewBox='0%200%2075%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='32'%20width='10'%20height='74'%20fill='%23FF9E9E'/%3e%3crect%20y='42'%20width='10'%20height='74'%20transform='rotate(-90%200%2042)'%20fill='%23FF9E9E'/%3e%3crect%20x='23'%20y='23'%20width='28'%20height='28'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%205C0%202.23858%202.23858%200%205%200H28V28H0V5Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M47%2046H75V69C75%2071.7614%2072.7614%2074%2070%2074H47V46Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M47%200H70C72.7614%200%2075%202.23858%2075%205V28H47V0Z'%20fill='%23FF9E9E'/%3e%3cpath%20d='M0%2046H28V74H5C2.23858%2074%200%2071.7614%200%2069V46Z'%20fill='%23FF9E9E'/%3e%3c/svg%3e",XR=w.div`
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
`,WR=w.div`
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
`,QR=w.div`
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
        transform: translate(-50%, -50%);
        z-index: 1;
        @media screen and (max-width: 560px) {
            font-size: 5vw;    
        }
    }
`,qR=w.div`
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
`,ZR=w.div`
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

`,GR=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: 65%;
    @media screen and (max-width: 560px){
        width: 100%;
        gap: 1.5vw;
    }
`,mr=w.button`
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
`;function Qo(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(d=>d.mode),{color:a}=y(d=>d.color),t=localStorage.getItem("mode")||"light",r=window.innerWidth<=560?"10vw":"3vw",l=ze(),s=ce(),c=d=>{window.scrollTo({top:document.querySelector("#exercice").offsetTop,behavior:"smooth"});const p={"Premier pas":{difficulté:"Débutant",number:10,typeDeKana:"normal",modeDeJeu:"N5"},Découverte:{difficulté:"Débutant",number:20,typeDeKana:"normal",modeDeJeu:"N5"},"Développement Avancé":{difficulté:"Intermédiaire",number:20,typeDeKana:"tout",modeDeJeu:"Aléatoire"},"Mises à Jour":{difficulté:"Confirmé",number:30,typeDeKana:"tout",modeDeJeu:"Aléatoire"}}[d];p&&(l(zm(p.difficulté)),l(Dm(p.number)),l(ad(p.typeDeKana)),s.pathname==="/Hiragana"||s.pathname==="/Nihongo-V2/Hiragana"||s.pathname==="/Katakana"||s.pathname==="/Nihongo-V2/Katakana"?l(ga("Aléatoire")):l(ga(p.modeDeJeu)))};return o.jsxs(XR,{$bgColor:e,children:[o.jsxs(WR,{$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("p",{children:"Prereglage Exercices"}),o.jsxs(QR,{children:[o.jsxs(qR,{$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsxs("div",{children:[o.jsx("button",{children:o.jsx(Vm,{width:r,height:r,color:a,mainColor:i})}),o.jsx("button",{children:o.jsx("img",{src:t==="light"?od:At})})]}),o.jsx("button",{children:o.jsx("span",{children:"Créer"})})]}),o.jsxs(ZR,{$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("div",{}),o.jsx("div",{})]})]})]}),o.jsxs(GR,{children:[o.jsxs(mr,{onClick:()=>c("Premier pas"),$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("h3",{children:"Premier pas"}),o.jsx("p",{children:"Parfait pour découvrir"}),o.jsx("img",{src:AR})]}),o.jsxs(mr,{onClick:()=>c("Découverte"),$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("h3",{children:"Découverte"}),o.jsx("p",{children:"Parfait pour en apprendre plus"}),o.jsx("img",{src:IR})]}),o.jsxs(mr,{onClick:()=>c("Développement Avancé"),$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("h3",{children:"Développement Avancé"}),o.jsx("p",{children:"Parfait pour développer ses compétences"}),o.jsx("img",{src:VR})]}),o.jsxs(mr,{onClick:()=>c("Mises à Jour"),$fontColor:n,$mainBgColor:i,$color:a,children:[o.jsx("h3",{children:"Mises à Jour"}),o.jsx("p",{children:"Parfait pour continue à se perfectionner"}),o.jsx("img",{src:UR})]})]})]})}const YR=w.header`
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
`;function ex(){return o.jsxs(YR,{children:[o.jsx(Na,{}),o.jsx(Bt,{}),o.jsx(Qo,{}),o.jsx(Vo,{}),o.jsx(Xo,{}),o.jsx(Uo,{}),o.jsx(Wo,{})]})}const nx=w.header`
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
`;function ix(){return o.jsxs(nx,{children:[o.jsx(Na,{}),o.jsx(Bt,{}),o.jsx(Qo,{}),o.jsx(Vo,{}),o.jsx(Xo,{}),o.jsx(Uo,{}),o.jsx(Wo,{})]})}const ax=w.div`
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
    
`,fr=w.button`
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

`;function Um(){const e=ce(),n=ze(),{bgColor:i,fontColor:a,mainBgColor:t}=y(u=>u.mode),{color:r}=y(u=>u.color),[l,s]=K.useState(null),d=(()=>{switch(e.pathname){case"/Katakana":return{normal:"キ",accents:"ギ",combinaison:"ギャ",tout:"キギギャ"};case"/Hiragana":return{normal:"き",accents:"ぎ",combinaison:"きゃ",tout:"きぎきゃ"};default:return null}})();if(!d)return o.jsx("div",{children:"Chemin non pris en charge"});const g=u=>{n(ad(u)),s(u)},p=u=>l===u?r:t,m=u=>l===u?t:a;return o.jsxs(ax,{children:[o.jsx(fr,{onClick:()=>g("normal"),$bgColor:i,$fontColor:a,$color:m("normal"),$mainBgColor:p("normal"),children:o.jsxs("div",{children:[o.jsx("p",{children:d.normal}),o.jsx("p",{children:"normal"})]})}),o.jsx(fr,{onClick:()=>g("accents"),$bgColor:i,$fontColor:a,$color:m("accents"),$mainBgColor:p("accents"),children:o.jsxs("div",{children:[o.jsx("p",{children:d.accents}),o.jsx("p",{children:"accents"})]})}),o.jsx(fr,{onClick:()=>g("combinaison"),$bgColor:i,$fontColor:a,$color:m("combinaison"),$mainBgColor:p("combinaison"),children:o.jsxs("div",{children:[o.jsx("p",{children:d.combinaison}),o.jsx("p",{children:"combinaison"})]})}),o.jsx(fr,{onClick:()=>g("tout"),$bgColor:i,$fontColor:a,$color:m("tout"),$mainBgColor:p("tout"),children:o.jsxs("div",{children:[o.jsx("p",{children:d.tout}),o.jsx("p",{children:"tout"})]})})]})}const tx=w.header`
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
`;function rx(){return o.jsxs(tx,{children:[o.jsx(Na,{}),o.jsx(Bt,{}),o.jsx(Qo,{}),o.jsx(Vo,{}),o.jsx(Um,{}),o.jsx(Xo,{}),o.jsx(Uo,{}),o.jsx(Wo,{})]})}const ox=w.header`
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
`;function lx(){return o.jsxs(ox,{children:[o.jsx(Na,{}),o.jsx(Bt,{}),o.jsx(Qo,{}),o.jsx(Vo,{}),o.jsx(Um,{}),o.jsx(Xo,{}),o.jsx(Uo,{}),o.jsx(Wo,{})]})}const sx=w.header`
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
`,cx=w.p`
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${e=>e.$bgColor};
    padding: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        padding: 4vw;
        text-align: center;
        margin-bottom: 15vw;
    }
`;function dx(){const{bgColor:e}=y(n=>n.mode);return o.jsxs(sx,{children:[o.jsx(Na,{}),o.jsx(Bt,{}),o.jsx(cx,{$bgColor:e,children:"Les exercices pour les nombres ne sont pas encore disponibles. Restez à l'écoute pour plus d'informations"})]})}const ux=w.div`
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
 `,sg=w(he)`
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
`,cg=w.div`
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
`;function gx(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(s=>s.mode),{color:a}=y(s=>s.color),t=ce(),l=(()=>{switch(t.pathname){case"/Dictionnaire/Kanji":return{titleFurigana1:"ひらがな",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Hiragana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"カタカナ",titleKanji2:"ア",titleFr2:"katakana",link2:"/Dictionnaire/Katakana"};case"/Dictionnaire/Katakana":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ひらがな",titleKanji2:"あ",titleFr2:"hiragana",link2:"/Dictionnaire/Hiragana"};case"/Dictionnaire/Vocabulaire":return{titleFurigana1:"かんじ",titleKanji1:"漢字",titleFr1:"kanji",link1:"/Dictionnaire/Kanji",titleFurigana2:"ばんごう",titleKanji2:"番号",titleFr2:"Nombres",link2:"/Dictionnaire/Nombres"};case"/Dictionnaire/Nombres":return{titleFurigana1:"ごい",titleKanji1:"語彙",titleFr1:"Vocabulaire",link1:"/Dictionnaire/Vocabulaire",titleFurigana2:"かんじ",titleKanji2:"漢字",titleFr2:"kanji",link2:"/Dictionnaire/Kanji"};default:return"Accueil"}})();return o.jsxs(ux,{children:[o.jsx(sg,{$bgColor:e,to:l.link1,children:o.jsxs(cg,{$mainBgColor:i,$fontColor:n,$color:a,children:[o.jsx("span",{children:l.titleFurigana1}),o.jsx("span",{children:l.titleKanji1}),o.jsx("span",{children:l.titleFr1})]})}),o.jsx(sg,{$bgColor:e,to:l.link2,children:o.jsxs(cg,{$mainBgColor:i,$fontColor:n,$color:a,children:[o.jsx("span",{children:l.titleFurigana2}),o.jsx("span",{children:l.titleKanji2}),o.jsx("span",{children:l.titleFr2})]})})]})}const Xm=({color:e,width:n="3.5vw",height:i="3.5vw"})=>o.jsxs("svg",{width:n,height:i,viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"18.983",cy:"18.9829",r:"11",transform:"rotate(-45 18.983 18.9829)",stroke:e,strokeWidth:"4.84598"}),o.jsx("rect",{x:"23.7218",y:"27.2935",width:"5.32537",height:"22.0876",rx:"2.66269",transform:"rotate(-45 23.7218 27.2935)",fill:e,stroke:e})]});Xm.propTypes={color:S.string,width:S.string,height:S.string};const de=({color:e,width:n="3.5vw",height:i="3.5vw"})=>o.jsxs("svg",{width:n,height:i,viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("rect",{x:"19.4456",y:"14.4956",width:"48",height:"7",rx:"3",transform:"rotate(45 19.4456 14.4956)",fill:e}),o.jsx("rect",{x:"14.4956",y:"48.437",width:"48",height:"7",rx:"3",transform:"rotate(-45 14.4956 48.437)",fill:e})]});de.propTypes={color:S.string,width:S.string,height:S.string};const px=w.div`
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
`,mx=w.input` 
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
`;function nt({onSearchChange:e}){const{fontColor:n,mainBgColor:i}=y(u=>u.mode),{color:a}=y(u=>u.color),t=y(u=>u.search.searchText),r=ce(),[l,s]=K.useState(""),d=(()=>{switch(r.pathname){case"/Dictionnaire/Kanji":case"/choisir-ses/Kanji":return{titleFr:"Kanji"};case"/Dictionnaire/Hiragana":case"/choisir-ses/Hiragana":return{titleFr:"Hiragana"};case"/Dictionnaire/Katakana":case"/choisir-ses/Katakana":return{titleFr:"Katakana"};case"/Dictionnaire/Vocabulaire":case"/choisir-ses/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Dictionnaire/Nombres":case"/choisir-ses/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),g=u=>{s(u.target.value),e(u.target.value)},p=()=>{s(""),e("")},m=window.innerWidth<=560?"10vw":"3.5vw";return o.jsxs(px,{children:[o.jsx(mx,{type:"text",placeholder:`Rechercher un ${d.titleFr}`,value:t||l,onChange:g,$color:a,$mainBgColor:i,$fontColor:n}),t?o.jsx("button",{onClick:p,children:o.jsx(de,{width:m,height:m,color:a})}):o.jsx("button",{children:o.jsx(Xm,{width:m,height:m,color:a})})]})}nt.propTypes={onSearchChange:S.func.isRequired};const fx=w.div`
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
`;function Qs({filterJlpt:e}){const[n,i]=K.useState("N5"),a=s=>{const c=s.target.value;n===c?(i(""),e("")):(i(c),e(c))},{fontColor:t,mainBgColor:r}=y(s=>s.mode),{color:l}=y(s=>s.color);return o.jsxs(fx,{name:"jlpt",id:"jlpt",value:n,$mainBgColor:r,$fontColor:t,$color:l,children:[o.jsx("button",{value:"N5",onClick:a,children:"N5"}),o.jsx("button",{value:"N4",onClick:a,children:"N4"}),o.jsx("button",{value:"N3",onClick:a,children:"N3"}),o.jsx("button",{value:"N2",onClick:a,children:"N2"}),o.jsx("button",{value:"N1",onClick:a,children:"N1"})]})}Qs.propTypes={filterJlpt:S.func.isRequired};const hx=w.div`
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
`;function Wm({filterKana:e}){const{fontColor:n,mainBgColor:i}=y(s=>s.mode),{color:a}=y(s=>s.color),[t,r]=K.useState("N5"),l=s=>{const c=s.target.value;t===c?(r(""),e("")):(r(c),e(c))};return o.jsxs(hx,{name:"Kana",id:"Kana",value:t,$mainBgColor:i,$fontColor:n,$color:a,children:[o.jsx("button",{value:"Combinaison",onClick:l,children:"Combinaisons"}),o.jsx("button",{value:"Accents",onClick:l,children:"Accents"})]})}Wm.propTypes={filterKana:S.func.isRequired};const vx=[{filtre:"nombres et quantificateurs"},{filtre:"verbes"},{filtre:"verbes d’action"},{filtre:"adjectifs"},{filtre:"nom"},{filtre:"mots de liaison et particules"},{filtre:"expressions temporelles"},{filtre:"formules de politesse"},{filtre:"expressions idiomatiques"},{filtre:"langue informelle et argot"},{filtre:"émotions et sentiments"},{filtre:"les pays"},{filtre:"les membres de la famille"},{filtre:"les vêtements"},{filtre:"les couleurs"},{filtre:"le corps humain"},{filtre:"la nourriture"},{filtre:"santé et bien-être"},{filtre:"activités et loisirs"},{filtre:"les animaux"},{filtre:"nature et environnement"},{filtre:"temps et saisons"},{filtre:"culture et traditions japonaises"},{filtre:"lieux et directions"},{filtre:"les moyens de transport"},{filtre:"objets de bureau/école"},{filtre:"le matériel domestique"},{filtre:"les pièces de la maison"},{filtre:"vocabulaire lié au travail"},{filtre:"profession et métiers"},{filtre:"technologie et gadgets"}],wx={filtres:vx},jx="data:image/svg+xml,%3csvg%20width='87'%20height='27'%20viewBox='0%200%2087%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L43.5%2023L83%204'%20stroke='%23F7F7F2'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Rx=w.div`
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
`,xx=w.span`
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
`,yx=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 1.5vw;
    }
`,kx=w.div`
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
`,Px=w.button`
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
`;function Qm({filterVocabulaire:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=y(g=>g.mode),{color:t}=y(g=>g.color),[r,l]=K.useState("Tous"),s=wx.filtres.map(g=>g.filtre),c=g=>{const p=g.target.value;r===p?(l(""),e("")):(l(p),e(p))},d=()=>{const g=document.querySelector(".VocabulaireFilterButtonContainer"),p=document.querySelector(".VocabulaireFilterContainer"),m=document.querySelector(".MoreButtonIcon");window.innerWidth>560?g&&p&&(g.style.overflow==="visible"?(g.style.overflow="hidden",p.style.maxHeight="8.3vw",m.style.transform="rotate(0deg)"):(g.style.overflow="visible",p.style.maxHeight="100%",m.style.transform="rotate(180deg)")):g&&p&&(g.style.overflow==="visible"?(g.style.overflow="hidden",g.style.maxHeight="50vw",m.style.transform="rotate(0deg)"):(g.style.overflow="visible",g.style.maxHeight="100%",m.style.transform="rotate(180deg)"))};return o.jsxs(Rx,{className:"VocabulaireFilterContainer",$bgColor:n,children:[o.jsx(xx,{$fontColor:i,$mainBgColor:a,children:"Filtre"}),o.jsxs(yx,{$mainBgColor:a,children:[o.jsx(kx,{className:"VocabulaireFilterButtonContainer",$mainBgColor:a,$color:t,onChange:c,value:r,children:s.map(g=>o.jsx("button",{value:g,onClick:c,children:g},g))}),o.jsx(Px,{$color:t,onClick:d,children:o.jsx("img",{className:"MoreButtonIcon",src:jx,alt:"More"})})]})]})}Qm.propTypes={filterVocabulaire:S.func.isRequired};const Cx=w.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        gap: 3vw;
        align-items: center;
        width: 100%;
    }
`,hr=w.div`
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
`,Lx=w.div`
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
`;function qm(){const{bgColor:e}=y(s=>s.mode),n=ze(),i=ce(),a=s=>{n(nd(s.toLowerCase()))},t=s=>{n(m5(s))},r=s=>{n(id(s))},l=s=>{n(f5(s))};return o.jsxs(Cx,{id:"recherche",children:[(i.pathname==="/Dictionnaire/Kanji"||i.pathname==="/choisir-ses/Kanji")&&o.jsxs(hr,{$bgColor:e,children:[o.jsx(nt,{onSearchChange:a}),o.jsx(Qs,{filterJlpt:t})]}),(i.pathname==="/Dictionnaire/Vocabulaire"||i.pathname==="/choisir-ses/Vocabulaire")&&o.jsxs(Lx,{children:[o.jsxs(hr,{$bgColor:e,children:[o.jsx(nt,{onSearchChange:a}),o.jsx(Qs,{filterJlpt:t})]}),o.jsx("div",{children:o.jsx(Qm,{filterVocabulaire:l})})]}),(i.pathname==="/Dictionnaire/Katakana"||i.pathname==="/Dictionnaire/Hiragana"||i.pathname==="/choisir-ses/Katakana"||i.pathname==="/choisir-ses/Hiragana")&&o.jsxs(hr,{$bgColor:e,children:[o.jsx(nt,{onSearchChange:a}),o.jsx(Wm,{filterKana:r})]}),(i.pathname==="/Dictionnaire/Nombres"||i.pathname==="/choisir-ses/Nombres")&&o.jsx(hr,{$bgColor:e,children:o.jsx(nt,{onSearchChange:a})})]})}const bx=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);;
    }
`,Kx=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: 22.37%;
    height: 21vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`,$x=w.p`
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
`,Tx=w.div`
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
`,Nx=w.div`
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
`,Sx=w.div`
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
`;function ld({kanjiList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=y(g=>g.mode),{color:t}=y(g=>g.color),r=y(g=>g.dataChoice.kanji),l=y(g=>g.parametersExercice.exerciceNumber),s=ze(),c=ce(),d=g=>{(r.includes(g)||r.length<l)&&c.pathname==="/choisir-ses/Kanji"&&s(R5(g))};return o.jsx(bx,{children:Array.isArray(e)&&e.length>0?e.map(g=>o.jsxs(Kx,{$bgColor:n,onClick:()=>d(g),style:{backgroundColor:r.includes(g)?t:n,cursor:"pointer"},children:[o.jsxs($x,{$fontColor:i,$mainBgColor:a,children:[o.jsx("span",{children:"Kun"})," ",g.KunReading.join(", ")]}),o.jsxs(Tx,{$fontColor:i,$mainBgColor:a,$color:t,children:[g.SecondaryMeaning&&o.jsx("p",{children:g.SecondaryMeaning}),o.jsx("h2",{children:g.Kanji}),o.jsx("p",{children:g.Meaning})]}),o.jsxs(Nx,{$fontColor:i,$mainBgColor:a,$color:t,children:[o.jsxs("p",{children:[o.jsx("span",{children:"JLPT"})," ",g.JLPTLevel]}),o.jsxs("p",{children:[o.jsx("span",{children:"On"})," ",g.OnReading.join(", ")]})]})]},g.id)):o.jsx(Sx,{$bgColor:n,$color:t,$mainBgColor:a,children:o.jsx("p",{children:"Aucun résultat"})})})}ld.propTypes={kanjiList:S.array.isRequired};const Tn="/Nihongo-V2/assets/icon-audio-Dmg04iGg.svg",Ox=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,Mx=w.div`
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
`,Ex=w.p`
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
`,Hx=w.p`
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
`,Va=w.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`,Ua=w.button`
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
`,Cn=w.div`
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
`,zx=w.div`
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
`;function sd({hiraganaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=y(u=>u.mode),{color:t}=y(u=>u.color),r=y(u=>u.dataChoice.hiragana),l=y(u=>u.parametersExercice.exerciceNumber),s=ze(),c=ce(),d="",g=u=>{s(nd(u)),s(id(d))},p=u=>{(r.includes(u)||r.length<l)&&c.pathname==="/choisir-ses/Hiragana"&&s(k5(u))},m=window.innerWidth<=560?"14vw":"3.5vw";return o.jsx(Ox,{children:Array.isArray(e)&&e.length>0?e.map(u=>{var j,x,k,f,h,v,R,P;return o.jsxs(Mx,{id:"item",$bgColor:n,onClick:()=>p(u),style:{backgroundColor:r.includes(u)?t:n,cursor:"pointer"},children:[o.jsx(Ex,{$fontColor:i,$mainBgColor:a,children:u.Romaji}),o.jsx(Hx,{$color:t,$mainBgColor:a,children:u.Type==="Hiragana"?u.Hiragana:u.Nom==="Dakuten"?u.Dakuten:u.Nom==="Handakuten"?u.Handakuten:u.Type==="Combinaison"?u.Hiragana:u.Handakuten}),u.Type==="Hiragana"?o.jsxs(Va,{children:[o.jsx(Ua,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Cn,{onClick:()=>{var L;return g((L=u.Accent)==null?void 0:L.Dakuten)},$fontColor:i,$mainBgColor:a,children:((j=u.Accent)==null?void 0:j.Dakuten)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:(x=u.Accent)==null?void 0:x.Dakuten})}),o.jsx(Cn,{onClick:()=>{var L;return g((L=u.Accent)==null?void 0:L.Handakuten)},$fontColor:i,$mainBgColor:a,children:((k=u.Accent)==null?void 0:k.Handakuten)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:(f=u.Accent)==null?void 0:f.Handakuten})})]}):u.Nom==="Dakuten"?o.jsxs(Va,{children:[o.jsx(Ua,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Cn,{onClick:()=>g(u.Hiragana),$fontColor:i,$mainBgColor:a,children:((h=u.Accent)==null?void 0:h.Hiragana)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Hiragana})}),o.jsx(Cn,{onClick:()=>g(u.Handakuten),$fontColor:i,$mainBgColor:a,children:u.Handakuten===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Handakuten})})]}):u.Nom==="Handakuten"?o.jsxs(Va,{children:[o.jsx(Ua,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Cn,{onClick:()=>g(u.Hiragana),$fontColor:i,$mainBgColor:a,children:((v=u.Accent)==null?void 0:v.Hiragana)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Hiragana})}),o.jsx(Cn,{onClick:()=>g(u.Dakuten),$fontColor:i,$mainBgColor:a,children:u.Dakuten===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Dakuten})})]}):u.Type==="Combinaison"?o.jsxs(Va,{children:[o.jsx(Ua,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Cn,{onClick:()=>g(u.Hiragana1),$fontColor:i,$mainBgColor:a,children:((R=u.Accent)==null?void 0:R.Hiragana1)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Hiragana1})}),o.jsx(Cn,{$fontColor:i,$mainBgColor:a,children:((P=u.Accent)==null?void 0:P.Hiragana2)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Hiragana2})})]}):o.jsxs(Va,{children:[o.jsx(Ua,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Cn,{$fontColor:i,$mainBgColor:a,children:o.jsx(de,{width:m,height:m,color:t})}),o.jsx(Cn,{$fontColor:i,$mainBgColor:a,children:o.jsx(de,{width:m,height:m,color:t})})]})]},u.id)}):o.jsx(zx,{$bgColor:n,$color:t,$mainBgColor:a,children:o.jsx("p",{children:"Aucun résultat"})})})}sd.propTypes={hiraganaList:S.array.isRequired};const Dx=[{id:1,Type:"Hiragana",Hiragana:"あ",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:2,Type:"Hiragana",Hiragana:"い",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:3,Type:"Hiragana",Hiragana:"う",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:4,Type:"Hiragana",Hiragana:"え",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:5,Type:"Hiragana",Hiragana:"お",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:6,Type:"Hiragana",Hiragana:"か",Romaji:"ka",Accent:{Dakuten:"が",Handakuten:null},Combinaison:[]},{id:7,Type:"Hiragana",Hiragana:"き",Romaji:"ki",Accent:{Dakuten:"ぎ",Handakuten:null},Combinaison:[{Hiragana:"きゃ",Romaji:"kya"},{Hiragana:"きゅ",Romaji:"kyu"},{Hiragana:"きょ",Romaji:"kyo"},{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:8,Type:"Hiragana",Hiragana:"く",Romaji:"ku",Accent:{Dakuten:"ぐ",Handakuten:null},Combinaison:[]},{id:9,Type:"Hiragana",Hiragana:"け",Romaji:"ke",Accent:{Dakuten:"げ",Handakuten:null},Combinaison:[]},{id:10,Type:"Hiragana",Hiragana:"こ",Romaji:"ko",Accent:{Dakuten:"ご",Handakuten:null},Combinaison:[]},{id:11,Type:"Hiragana",Hiragana:"さ",Romaji:"sa",Accent:{Dakuten:"ざ",Handakuten:null},Combinaison:[]},{id:12,Type:"Hiragana",Hiragana:"し",Romaji:"shi",Accent:{Dakuten:"じ",Handakuten:null},Combinaison:[{Hiragana:"しゃ",Romaji:"sha"},{Hiragana:"しゅ",Romaji:"shu"},{Hiragana:"しょ",Romaji:"sho"},{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:13,Type:"Hiragana",Hiragana:"す",Romaji:"su",Accent:{Dakuten:"ず",Handakuten:null},Combinaison:[]},{id:14,Type:"Hiragana",Hiragana:"せ",Romaji:"se",Accent:{Dakuten:"ぜ",Handakuten:null},Combinaison:[]},{id:15,Type:"Hiragana",Hiragana:"そ",Romaji:"so",Accent:{Dakuten:"ぞ",Handakuten:null},Combinaison:[]},{id:16,Type:"Hiragana",Hiragana:"た",Romaji:"ta",Accent:{Dakuten:"だ",Handakuten:null},Combinaison:[]},{id:17,Type:"Hiragana",Hiragana:"ち",Romaji:"chi",Accent:{Dakuten:"ぢ",Handakuten:null},Combinaison:[{Hiragana:"ちゃ",Romaji:"cha"},{Hiragana:"ちゅ",Romaji:"chu"},{Hiragana:"ちょ",Romaji:"cho"}]},{id:18,Type:"Hiragana",Hiragana:"つ",Romaji:"tsu",Accent:{Dakuten:"づ",Handakuten:null},Combinaison:[]},{id:19,Type:"Hiragana",Hiragana:"て",Romaji:"te",Accent:{Dakuten:"で",Handakuten:null},Combinaison:[]},{id:20,Type:"Hiragana",Hiragana:"と",Romaji:"to",Accent:{Dakuten:"ど",Handakuten:null},Combinaison:[]},{id:21,Type:"Hiragana",Hiragana:"な",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:22,Type:"Hiragana",Hiragana:"に",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"にゃ",Romaji:"nya"},{Hiragana:"にゅ",Romaji:"nyu"},{Hiragana:"にょ",Romaji:"nyo"}]},{id:23,Type:"Hiragana",Hiragana:"ぬ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:24,Type:"Hiragana",Hiragana:"ね",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:25,Type:"Hiragana",Hiragana:"の",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:26,Type:"Hiragana",Hiragana:"は",Romaji:"ha",Accent:{Dakuten:"ば",Handakuten:"ぱ"},Combinaison:[]},{id:27,Type:"Hiragana",Hiragana:"ひ",Romaji:"hi",Accent:{Dakuten:"び",Handakuten:"ぴ"},Combinaison:[{Hiragana:"ひゃ",Romaji:"hya"},{Hiragana:"ひゅ",Romaji:"hyu"},{Hiragana:"ひょ",Romaji:"hyo"},{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"},{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:28,Type:"Hiragana",Hiragana:"ふ",Romaji:"fu",Accent:{Dakuten:"ぶ",Handakuten:"ぷ"},Combinaison:[]},{id:29,Type:"Hiragana",Hiragana:"へ",Romaji:"he",Accent:{Dakuten:"べ",Handakuten:"ぺ"},Combinaison:[]},{id:30,Type:"Hiragana",Hiragana:"ほ",Romaji:"ho",Accent:{Dakuten:"ぼ",Handakuten:"ぽ"},Combinaison:[]},{id:31,Type:"Hiragana",Hiragana:"ま",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:32,Type:"Hiragana",Hiragana:"み",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"みゃ",Romaji:"mya"},{Hiragana:"みゅ",Romaji:"myu"},{Hiragana:"みょ",Romaji:"myo"}]},{id:33,Type:"Hiragana",Hiragana:"む",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:34,Type:"Hiragana",Hiragana:"め",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:35,Type:"Hiragana",Hiragana:"も",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:36,Type:"Hiragana",Hiragana:"や",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:37,Type:"Hiragana",Hiragana:"ゆ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:38,Type:"Hiragana",Hiragana:"よ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:39,Type:"Hiragana",Hiragana:"ら",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:40,Type:"Hiragana",Hiragana:"り",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},Combinaison:[{Hiragana:"りゃ",Romaji:"rya"},{Hiragana:"りゅ",Romaji:"ryu"},{Hiragana:"りょ",Romaji:"ryo"}]},{id:41,Type:"Hiragana",Hiragana:"る",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:42,Type:"Hiragana",Hiragana:"れ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:43,Type:"Hiragana",Hiragana:"ろ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:44,Type:"Hiragana",Hiragana:"わ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:45,Type:"Hiragana",Hiragana:"を",Romaji:"o (wo)",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]},{id:46,Type:"Hiragana",Hiragana:"ん",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},Combinaison:[]}],Jx=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"が",Romaji:"ga",Hiragana:"か",Handakuten:null,Combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ぎ",Romaji:"gi",Hiragana:"き",Handakuten:null,Combinaison:[{Hiragana:"ぎゃ",Romaji:"gya"},{Hiragana:"ぎゅ",Romaji:"gyu"},{Hiragana:"ぎょ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"ぐ",Romaji:"gu",Hiragana:"く",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"げ",Romaji:"ge",Hiragana:"け",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ご",Romaji:"go",Hiragana:"こ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ざ",Romaji:"za",Hiragana:"さ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"じ",Romaji:"ji",Hiragana:"し",Handakuten:null,Combinaison:[{Hiragana:"じゃ",Romaji:"ja"},{Hiragana:"じゅ",Romaji:"ju"},{Hiragana:"じょ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ず",Romaji:"zu",Hiragana:"す",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ぜ",Romaji:"ze",Hiragana:"せ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ぞ",Romaji:"zo",Hiragana:"そ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"だ",Romaji:"da",Hiragana:"た",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ぢ",Romaji:"ji",Hiragana:"ち",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"づ",Romaji:"zu",Hiragana:"つ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"で",Romaji:"de",Hiragana:"て",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ど",Romaji:"do",Hiragana:"と",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"ば",Romaji:"ba",Hiragana:"は",Handakuten:"ぱ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"び",Romaji:"bi",Hiragana:"ひ",Handakuten:"ぴ",Combinaison:[{Hiragana:"びゃ",Romaji:"bya"},{Hiragana:"びゅ",Romaji:"byu"},{Hiragana:"びょ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ぶ",Romaji:"bu",Hiragana:"ふ",Handakuten:"ぷ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"べ",Romaji:"be",Hiragana:"へ",Handakuten:"ぺ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ぼ",Romaji:"bo",Hiragana:"ほ",Handakuten:"ぽ",combinaison:[]}],Fx=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"ぱ",Romaji:"pa",Hiragana:"は",Dakuten:"ば",combinaison:[]},{id:68,Type:"Accents",Nom:"Handakuten",Handakuten:"ぴ",Romaji:"pi",Hiragana:"ひ",Dakuten:"び",Combinaison:[{Hiragana:"ぴゃ",Romaji:"pya"},{Hiragana:"ぴゅ",Romaji:"pyu"},{Hiragana:"ぴょ",Romaji:"pyo"}]},{id:69,Type:"Accents",Nom:"Handakuten",Handakuten:"ぷ",Romaji:"pu",Hiragana:"ふ",Dakuten:"ぶ",combinaison:[]},{id:70,Type:"Accents",Nom:"Handakuten",Handakuten:"ぺ",Romaji:"pe",Hiragana:"へ",Dakuten:"べ",combinaison:[]},{id:71,Type:"Accents",Nom:"Handakuten",Handakuten:"ぽ",Romaji:"po",Hiragana:"ほ",Dakuten:"ぼ",combinaison:[]}],_x=[{id:72,Type:"Combinaison",Hiragana:"きゃ",Romaji:"kya",Hiragana1:"き",Hiragana2:"や"},{id:73,Type:"Combinaison",Hiragana:"きゅ",Romaji:"kyu",Hiragana1:"き",Hiragana2:"ゆ"},{id:74,Type:"Combinaison",Hiragana:"きょ",Romaji:"kyo",Hiragana1:"き",Hiragana2:"よ"},{id:75,Type:"Combinaison",Hiragana:"ぎゃ",Romaji:"gya",Hiragana1:"ぎ",Hiragana2:"や"},{id:76,Type:"Combinaison",Hiragana:"ぎゅ",Romaji:"gyu",Hiragana1:"ぎ",Hiragana2:"ゆ"},{id:77,Type:"Combinaison",Hiragana:"ぎょ",Romaji:"gyo",Hiragana1:"ぎ",Hiragana2:"よ"},{id:78,Type:"Combinaison",Hiragana:"しゃ",Romaji:"sha",Hiragana1:"し",Hiragana2:"や"},{id:79,Type:"Combinaison",Hiragana:"しゅ",Romaji:"shu",Hiragana1:"し",Hiragana2:"ゆ"},{id:80,Type:"Combinaison",Hiragana:"しょ",Romaji:"sho",Hiragana1:"し",Hiragana2:"よ"},{id:81,Type:"Combinaison",Hiragana:"じゃ",Romaji:"ja",Hiragana1:"じ",Hiragana2:"や"},{id:82,Type:"Combinaison",Hiragana:"じゅ",Romaji:"ju",Hiragana1:"じ",Hiragana2:"ゆ"},{id:83,Type:"Combinaison",Hiragana:"じょ",Romaji:"jo",Hiragana1:"じ",Hiragana2:"よ"},{id:84,Type:"Combinaison",Hiragana:"ちゃ",Romaji:"cha",Hiragana1:"ち",Hiragana2:"や"},{id:85,Type:"Combinaison",Hiragana:"ちゅ",Romaji:"chu",Hiragana1:"ち",Hiragana2:"ゆ"},{id:86,Type:"Combinaison",Hiragana:"ちょ",Romaji:"cho",Hiragana1:"ち",Hiragana2:"よ"},{id:87,Type:"Combinaison",Hiragana:"ひゃ",Romaji:"hya",Hiragana1:"ひ",Hiragana2:"や"},{id:88,Type:"Combinaison",Hiragana:"ひゅ",Romaji:"hyu",Hiragana1:"ひ",Hiragana2:"ゆ"},{id:89,Type:"Combinaison",Hiragana:"ひょ",Romaji:"hyo",Hiragana1:"ひ",Hiragana2:"よ"},{id:90,Type:"Combinaison",Hiragana:"びゃ",Romaji:"bya",Hiragana1:"び",Hiragana2:"や"},{id:91,Type:"Combinaison",Hiragana:"びゅ",Romaji:"byu",Hiragana1:"び",Hiragana2:"ゆ"},{id:92,Type:"Combinaison",Hiragana:"びょ",Romaji:"byo",Hiragana1:"び",Hiragana2:"よ"},{id:93,Type:"Combinaison",Hiragana:"ぴゃ",Romaji:"pya",Hiragana1:"ぴ",Hiragana2:"や"},{id:94,Type:"Combinaison",Hiragana:"ぴゅ",Romaji:"pyu",Hiragana1:"ぴ",Hiragana2:"ゆ"},{id:95,Type:"Combinaison",Hiragana:"ぴょ",Romaji:"pyo",Hiragana1:"ぴ",Hiragana2:"よ"},{id:96,Type:"Combinaison",Hiragana:"にゃ",Romaji:"nya",Hiragana1:"に",Hiragana2:"や"},{id:97,Type:"Combinaison",Hiragana:"にゅ",Romaji:"nyu",Hiragana1:"に",Hiragana2:"ゆ"},{id:98,Type:"Combinaison",Hiragana:"にょ",Romaji:"nyo",Hiragana1:"に",Hiragana2:"よ"},{id:99,Type:"Combinaison",Hiragana:"みゃ",Romaji:"mya",Hiragana1:"み",Hiragana2:"や"},{id:100,Type:"Combinaison",Hiragana:"みゅ",Romaji:"myu",Hiragana1:"み",Hiragana2:"ゆ"},{id:101,Type:"Combinaison",Hiragana:"みょ",Romaji:"myo",Hiragana1:"み",Hiragana2:"よ"},{id:102,Type:"Combinaison",Hiragana:"りゃ",Romaji:"rya",Hiragana1:"り",Hiragana2:"や"},{id:103,Type:"Combinaison",Hiragana:"りゅ",Romaji:"ryu",Hiragana1:"り",Hiragana2:"ゆ"},{id:104,Type:"Combinaison",Hiragana:"りょ",Romaji:"ryo",Hiragana1:"り",Hiragana2:"よ"}],Oe={Hiragana:Dx,Dakuten:Jx,Handakuten:Fx,Combinaison:_x},Bx=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,Ax=w.div`
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
`,Ix=w.p`
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
`,Vx=w.p`
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
`,Xa=w.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`,Wa=w.button`
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
`,Ln=w.div`
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
`,Ux=w.div`
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
`;function cd({katakanaList:e}){const{bgColor:n,fontColor:i,mainBgColor:a}=y(u=>u.mode),{color:t}=y(u=>u.color),r=y(u=>u.dataChoice.katakana),l=y(u=>u.parametersExercice.exerciceNumber),s=ze(),c=ce(),d="",g=u=>{s(nd(u)),s(id(d))},p=u=>{(r.includes(u)||r.length<l)&&c.pathname==="/choisir-ses/Katakana"&&s(y5(u))},m=window.innerWidth<=560?"10vw":"3.5vw";return o.jsx(Bx,{children:Array.isArray(e)&&e.length>0?e.map(u=>{var j,x,k,f;return o.jsxs(Ax,{$bgColor:n,onClick:()=>p(u),style:{backgroundColor:r.includes(u)?t:n,cursor:"pointer"},children:[o.jsx(Ix,{$fontColor:i,$mainBgColor:a,children:u.Romaji}),o.jsx(Vx,{$color:t,$mainBgColor:a,children:u.Type==="Katakana"?u.Katakana:u.Nom==="Dakuten"?u.Dakuten:u.Nom==="Handakuten"?u.Handakuten:u.Type==="Combinaison"?u.Katakana:u.Handakuten}),u.Type==="Katakana"?o.jsxs(Xa,{children:[o.jsx(Wa,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Ln,{onClick:()=>{var h;return g((h=u.Accent)==null?void 0:h.Dakuten)},$fontColor:i,$mainBgColor:a,children:((j=u.Accent)==null?void 0:j.Dakuten)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:(x=u.Accent)==null?void 0:x.Dakuten})}),o.jsx(Ln,{onClick:()=>{var h;return g((h=u.Accent)==null?void 0:h.Handakuten)},$fontColor:i,$mainBgColor:a,children:((k=u.Accent)==null?void 0:k.Handakuten)===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:(f=u.Accent)==null?void 0:f.Handakuten})})]}):u.Nom==="Dakuten"?o.jsxs(Xa,{children:[o.jsx(Wa,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Ln,{onClick:()=>g(u.Katakana),$fontColor:i,$mainBgColor:a,children:u.Accent&&u.Accent.Katakana===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Katakana})}),o.jsx(Ln,{onClick:()=>g(u.Handakuten),$fontColor:i,$mainBgColor:a,children:u.Handakuten===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Handakuten})})]}):u.Nom==="Handakuten"?o.jsxs(Xa,{children:[o.jsx(Wa,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Ln,{onClick:()=>g(u.Katakana),$fontColor:i,$mainBgColor:a,children:u.Accent&&u.Accent.Katakana===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Katakana})}),o.jsx(Ln,{onClick:()=>g(u.Dakuten),$fontColor:i,$mainBgColor:a,children:u.Accent&&u.Handakuten||u.Dakuten===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Dakuten})})]}):u.Type==="Combinaison"?o.jsxs(Xa,{children:[o.jsx(Wa,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsx(Ln,{onClick:()=>g(u.Katakana1),$fontColor:i,$mainBgColor:a,children:u.Accent&&u.Accent.Katakana1===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Katakana1})}),o.jsx(Ln,{$fontColor:i,$mainBgColor:a,children:u.Accent&&u.Accent.Katakana2===null?o.jsx(de,{width:m,height:m,color:t}):o.jsx("button",{children:u.Katakana2})})]}):o.jsxs(Xa,{children:[o.jsx(Wa,{$color:t,children:o.jsx("img",{src:Tn})}),o.jsxs(Ln,{$fontColor:i,$mainBgColor:a,children:[o.jsx(de,{width:m,height:m,color:t})," "]}),o.jsxs(Ln,{$fontColor:i,$mainBgColor:a,children:[o.jsx(de,{width:m,height:m,color:t})," "]})]})]},u.id)}):o.jsx(Ux,{$bgColor:n,$color:t,$mainBgColor:a,children:o.jsx("p",{children:"Aucun résultat"})})})}cd.propTypes={katakanaList:S.array.isRequired};const Xx=[{id:1,Type:"Katakana",Katakana:"ア",Romaji:"a",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:2,Type:"Katakana",Katakana:"イ",Romaji:"i",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:3,Type:"Katakana",Katakana:"ウ",Romaji:"u",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:4,Type:"Katakana",Katakana:"エ",Romaji:"e",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:5,Type:"Katakana",Katakana:"オ",Romaji:"o",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:6,Type:"Katakana",Katakana:"カ",Romaji:"ka",Accent:{Dakuten:"ガ",Handakuten:null},combinaison:[]},{id:7,Type:"Katakana",Katakana:"キ",Romaji:"ki",Accent:{Dakuten:"ギ",Handakuten:null},combinaison:[{Katakana:"キャ",Romaji:"kya"},{Katakana:"キュ",Romaji:"kyu"},{Katakana:"キョ",Romaji:"kyo"},{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:8,Type:"Katakana",Katakana:"ク",Romaji:"ku",Accent:{Dakuten:"グ",Handakuten:null},combinaison:[]},{id:9,Type:"Katakana",Katakana:"ケ",Romaji:"ke",Accent:{Dakuten:"ゲ",Handakuten:null},combinaison:[]},{id:10,Type:"Katakana",Katakana:"コ",Romaji:"ko",Accent:{Dakuten:"ゴ",Handakuten:null},combinaison:[]},{id:11,Type:"Katakana",Katakana:"サ",Romaji:"sa",Accent:{Dakuten:"ザ",Handakuten:null},combinaison:[]},{id:12,Type:"Katakana",Katakana:"シ",Romaji:"shi",Accent:{Dakuten:"ジ",Handakuten:null},combinaison:[{Katakana:"シャ",Romaji:"sha"},{Katakana:"シュ",Romaji:"shu"},{Katakana:"ショ",Romaji:"sho"},{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:13,Type:"Katakana",Katakana:"ス",Romaji:"su",Accent:{Dakuten:"ズ",Handakuten:null},combinaison:[]},{id:14,Type:"Katakana",Katakana:"セ",Romaji:"se",Accent:{Dakuten:"ゼ",Handakuten:null},combinaison:[]},{id:15,Type:"Katakana",Katakana:"ソ",Romaji:"so",Accent:{Dakuten:"ゾ",Handakuten:null},combinaison:[]},{id:16,Type:"Katakana",Katakana:"タ",Romaji:"ta",Accent:{Dakuten:"ダ",Handakuten:null},combinaison:[]},{id:17,Type:"Katakana",Katakana:"チ",Romaji:"chi",Accent:{Dakuten:"ヂ",Handakuten:null},combinaison:[{Katakana:"チャ",Romaji:"cha"},{Katakana:"チュ",Romaji:"chu"},{Katakana:"チョ",Romaji:"cho"}]},{id:18,Type:"Katakana",Katakana:"ツ",Romaji:"tsu",Accent:{Dakuten:"ヅ",Handakuten:null},combinaison:[]},{id:19,Type:"Katakana",Katakana:"テ",Romaji:"te",Accent:{Dakuten:"デ",Handakuten:null},combinaison:[]},{id:20,Type:"Katakana",Katakana:"ト",Romaji:"to",Accent:{Dakuten:"ド",Handakuten:null},combinaison:[]},{id:21,Type:"Katakana",Katakana:"ナ",Romaji:"na",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:22,Type:"Katakana",Katakana:"ニ",Romaji:"ni",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ニャ",Romaji:"nya"},{Katakana:"ニュ",Romaji:"nyu"},{Katakana:"ニョ",Romaji:"nyo"}]},{id:23,Type:"Katakana",Katakana:"ヌ",Romaji:"nu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:24,Type:"Katakana",Katakana:"ネ",Romaji:"ne",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:25,Type:"Katakana",Katakana:"ノ",Romaji:"no",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:26,Type:"Katakana",Katakana:"ハ",Romaji:"ha",Accent:{Dakuten:"バ",Handakuten:"パ"},combinaison:[]},{id:27,Type:"Katakana",Katakana:"ヒ",Romaji:"hi",Accent:{Dakuten:"ビ",Handakuten:"ピ"},combinaison:[{Katakana:"ヒャ",Romaji:"hya"},{Katakana:"ヒュ",Romaji:"hyu"},{Katakana:"ヒョ",Romaji:"hyo"},{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"},{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:28,Type:"Katakana",Katakana:"フ",Romaji:"fu",Accent:{Dakuten:"ブ",Handakuten:"プ"},combinaison:[]},{id:29,Type:"Katakana",Katakana:"ヘ",Romaji:"he",Accent:{Dakuten:"ベ",Handakuten:"ペ"},combinaison:[]},{id:30,Type:"Katakana",Katakana:"ホ",Romaji:"ho",Accent:{Dakuten:"ボ",Handakuten:"ポ"},combinaison:[]},{id:31,Type:"Katakana",Katakana:"マ",Romaji:"ma",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:32,Type:"Katakana",Katakana:"ミ",Romaji:"mi",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"ミャ",Romaji:"mya"},{Katakana:"ミュ",Romaji:"myu"},{Katakana:"ミョ",Romaji:"myo"}]},{id:33,Type:"Katakana",Katakana:"ム",Romaji:"mu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:34,Type:"Katakana",Katakana:"メ",Romaji:"me",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:35,Type:"Katakana",Katakana:"モ",Romaji:"mo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:36,Type:"Katakana",Katakana:"ヤ",Romaji:"ya",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:37,Type:"Katakana",Katakana:"ユ",Romaji:"yu",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:38,Type:"Katakana",Katakana:"ヨ",Romaji:"yo",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:39,Type:"Katakana",Katakana:"ラ",Romaji:"ra",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:40,Type:"Katakana",Katakana:"リ",Romaji:"ri",Accent:{Dakuten:null,Handakuten:null},combinaison:[{Katakana:"リャ",Romaji:"rya"},{Katakana:"リュ",Romaji:"ryu"},{Katakana:"リョ",Romaji:"ryo"}]},{id:41,Type:"Katakana",Katakana:"ル",Romaji:"ru",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:42,Type:"Katakana",Katakana:"レ",Romaji:"re",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:43,Type:"Katakana",Katakana:"ロ",Romaji:"ro",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:44,Type:"Katakana",Katakana:"ワ",Romaji:"wa",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:45,Type:"Katakana",Katakana:"ヲ",Romaji:"o (wo)",Accent:{Dakuten:null,Handakuten:null},combinaison:[]},{id:46,Type:"Katakana",Katakana:"ン",Romaji:"n",Accent:{Dakuten:null,Handakuten:null},combinaison:[]}],Wx=[{id:47,Nom:"Dakuten",Type:"Accents",Dakuten:"ガ",Romaji:"ga",Katakana:"カ",Handakuten:null,combinaison:[]},{id:48,Nom:"Dakuten",Type:"Accents",Dakuten:"ギ",Romaji:"gi",Katakana:"キ",Handakuten:null,combinaison:[{Katakana:"ギャ",Romaji:"gya"},{Katakana:"ギュ",Romaji:"gyu"},{Katakana:"ギョ",Romaji:"gyo"}]},{id:49,Nom:"Dakuten",Type:"Accents",Dakuten:"グ",Romaji:"gu",Katakana:"ク",Handakuten:null,combinaison:[]},{id:50,Nom:"Dakuten",Type:"Accents",Dakuten:"ゲ",Romaji:"ge",Katakana:"ケ",Handakuten:null,combinaison:[]},{id:51,Nom:"Dakuten",Type:"Accents",Dakuten:"ゴ",Romaji:"go",Katakana:"コ",Handakuten:null,combinaison:[]},{id:52,Nom:"Dakuten",Type:"Accents",Dakuten:"ザ",Romaji:"za",Katakana:"サ",Handakuten:null,combinaison:[]},{id:53,Nom:"Dakuten",Type:"Accents",Dakuten:"ジ",Romaji:"ji",Katakana:"シ",Handakuten:null,combinaison:[{Katakana:"ジャ",Romaji:"ja"},{Katakana:"ジュ",Romaji:"ju"},{Katakana:"ジョ",Romaji:"jo"}]},{id:54,Nom:"Dakuten",Type:"Accents",Dakuten:"ズ",Romaji:"zu",Katakana:"ス",Handakuten:null,combinaison:[]},{id:55,Nom:"Dakuten",Type:"Accents",Dakuten:"ゼ",Romaji:"ze",Katakana:"セ",Handakuten:null,combinaison:[]},{id:56,Nom:"Dakuten",Type:"Accents",Dakuten:"ゾ",Romaji:"zo",Katakana:"ソ",Handakuten:null,combinaison:[]},{id:57,Nom:"Dakuten",Type:"Accents",Dakuten:"ダ",Romaji:"da",Katakana:"タ",Handakuten:null,combinaison:[]},{id:58,Nom:"Dakuten",Type:"Accents",Dakuten:"ヂ",Romaji:"ji",Katakana:"チ",Handakuten:null,combinaison:[]},{id:59,Nom:"Dakuten",Type:"Accents",Dakuten:"ヅ",Romaji:"zu",Katakana:"ツ",Handakuten:null,combinaison:[]},{id:60,Nom:"Dakuten",Type:"Accents",Dakuten:"デ",Romaji:"de",Katakana:"テ",Handakuten:null,combinaison:[]},{id:61,Nom:"Dakuten",Type:"Accents",Dakuten:"ド",Romaji:"do",Katakana:"ト",Handakuten:null,combinaison:[]},{id:62,Nom:"Dakuten",Type:"Accents",Dakuten:"バ",Romaji:"ba",Katakana:"ハ",Handakuten:"パ",combinaison:[]},{id:63,Nom:"Dakuten",Type:"Accents",Dakuten:"ビ",Romaji:"bi",Katakana:"ヒ",Handakuten:"ピ",combinaison:[{Katakana:"ビャ",Romaji:"bya"},{Katakana:"ビュ",Romaji:"byu"},{Katakana:"ビョ",Romaji:"byo"}]},{id:64,Nom:"Dakuten",Type:"Accents",Dakuten:"ブ",Romaji:"bu",Katakana:"フ",Handakuten:"プ",combinaison:[]},{id:65,Nom:"Dakuten",Type:"Accents",Dakuten:"ベ",Romaji:"be",Katakana:"ヘ",Handakuten:"ペ",combinaison:[]},{id:66,Nom:"Dakuten",Type:"Accents",Dakuten:"ボ",Romaji:"bo",Katakana:"ホ",Handakuten:"ポ",combinaison:[]}],Qx=[{id:67,Nom:"Handakuten",Type:"Accents",Handakuten:"パ",Romaji:"pa",Katakana:"ハ",Dakuten:"バ",combinaison:[]},{id:68,Nom:"Handakuten",Type:"Accents",Handakuten:"ピ",Romaji:"pi",Katakana:"ヒ",Dakuten:"ビ",combinaison:[{Katakana:"ピャ",Romaji:"pya"},{Katakana:"ピュ",Romaji:"pyu"},{Katakana:"ピョ",Romaji:"pyo"}]},{id:69,Nom:"Handakuten",Type:"Accents",Handakuten:"プ",Romaji:"pu",Katakana:"フ",Dakuten:"ブ",combinaison:[]},{id:70,Nom:"Handakuten",Type:"Accents",Handakuten:"ペ",Romaji:"pe",Katakana:"ヘ",Dakuten:"ベ",combinaison:[]},{id:71,Nom:"Handakuten",Type:"Accents",Handakuten:"ポ",Romaji:"po",Katakana:"ホ",Dakuten:"ボ",combinaison:[]}],qx=[{id:72,Type:"Combinaison",Katakana:"キャ",Romaji:"kya",Katakana1:"キ",Katakana2:"ヤ"},{id:73,Type:"Combinaison",Katakana:"キュ",Romaji:"kyu",Katakana1:"キ",Katakana2:"ユ"},{id:74,Type:"Combinaison",Katakana:"キョ",Romaji:"kyo",Katakana1:"キ",Katakana2:"ヨ"},{id:75,Type:"Combinaison",Katakana:"ギャ",Romaji:"gya",Katakana1:"ギ",Katakana2:"ヤ"},{id:76,Type:"Combinaison",Katakana:"ギュ",Romaji:"gyu",Katakana1:"ギ",Katakana2:"ユ"},{id:77,Type:"Combinaison",Katakana:"ギョ",Romaji:"gyo",Katakana1:"ギ",Katakana2:"ヨ"},{id:78,Type:"Combinaison",Katakana:"シャ",Romaji:"sha",Katakana1:"シ",Katakana2:"ヤ"},{id:79,Type:"Combinaison",Katakana:"シュ",Romaji:"shu",Katakana1:"シ",Katakana2:"ユ"},{id:80,Type:"Combinaison",Katakana:"ショ",Romaji:"sho",Katakana1:"シ",Katakana2:"ヨ"},{id:81,Type:"Combinaison",Katakana:"ジャ",Romaji:"ja",Katakana1:"ジ",Katakana2:"ヤ"},{id:82,Type:"Combinaison",Katakana:"ジュ",Romaji:"ju",Katakana1:"ジ",Katakana2:"ユ"},{id:83,Type:"Combinaison",Katakana:"ジョ",Romaji:"jo",Katakana1:"ジ",Katakana2:"ヨ"},{id:84,Type:"Combinaison",Katakana:"チャ",Romaji:"cha",Katakana1:"チ",Katakana2:"ヤ"},{id:85,Type:"Combinaison",Katakana:"チュ",Romaji:"chu",Katakana1:"チ",Katakana2:"ユ"},{id:86,Type:"Combinaison",Katakana:"チョ",Romaji:"cho",Katakana1:"チ",Katakana2:"ヨ"},{id:87,Type:"Combinaison",Katakana:"ニャ",Romaji:"nya",Katakana1:"ニ",Katakana2:"ヤ"},{id:88,Type:"Combinaison",Katakana:"ニュ",Romaji:"nyu",Katakana1:"ニ",Katakana2:"ユ"},{id:89,Type:"Combinaison",Katakana:"ニョ",Romaji:"nyo",Katakana1:"ニ",Katakana2:"ヨ"},{id:90,Type:"Combinaison",Katakana:"ヒャ",Romaji:"hya",Katakana1:"ヒ",Katakana2:"ヤ"},{id:91,Type:"Combinaison",Katakana:"ヒュ",Romaji:"hyu",Katakana1:"ヒ",Katakana2:"ユ"},{id:92,Type:"Combinaison",Katakana:"ヒョ",Romaji:"hyo",Katakana1:"ヒ",Katakana2:"ヨ"},{id:93,Type:"Combinaison",Katakana:"ビャ",Romaji:"bya",Katakana1:"ビ",Katakana2:"ヤ"},{id:94,Type:"Combinaison",Katakana:"ビュ",Romaji:"byu",Katakana1:"ビ",Katakana2:"ユ"},{id:95,Type:"Combinaison",Katakana:"ビョ",Romaji:"byo",Katakana1:"ビ",Katakana2:"ヨ"},{id:96,Type:"Combinaison",Katakana:"ピャ",Romaji:"pya",Katakana1:"ピ",Katakana2:"ヤ"},{id:97,Type:"Combinaison",Katakana:"ピュ",Romaji:"pyu",Katakana1:"ピ",Katakana2:"ユ"},{id:98,Type:"Combinaison",Katakana:"ピョ",Romaji:"pyo",Katakana1:"ピ",Katakana2:"ヨ"},{id:99,Type:"Combinaison",Katakana:"ミャ",Romaji:"mya",Katakana1:"ミ",Katakana2:"ヤ"},{id:100,Type:"Combinaison",Katakana:"ミュ",Romaji:"myu",Katakana1:"ミ",Katakana2:"ユ"},{id:101,Type:"Combinaison",Katakana:"ミョ",Romaji:"myo",Katakana1:"ミ",Katakana2:"ヨ"},{id:102,Type:"Combinaison",Katakana:"リャ",Romaji:"rya",Katakana1:"リ",Katakana2:"ヤ"},{id:103,Type:"Combinaison",Katakana:"リュ",Romaji:"ryu",Katakana1:"リ",Katakana2:"ユ"},{id:104,Type:"Combinaison",Katakana:"リョ",Romaji:"ryo",Katakana1:"リ",Katakana2:"ヨ"}],Me={Katakana:Xx,Dakuten:Wx,Handakuten:Qx,Combinaison:qx},Zx=w.div`
    display: flex;
    gap: 0.6vw;
    flex-wrap: wrap;
    width:calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`,Gx=w.div`
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
`,Yx=w.div`
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
`,e3=w.div`
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
        padding-left: 1vw;
        padding-right: 1vw;
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
`,n3=w.div`
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
`,i3=w.div`
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
`;function dd({vocabulaireList:e=[]}){const{bgColor:n,fontColor:i,mainBgColor:a}=y(g=>g.mode),{color:t}=y(g=>g.color),r=y(g=>g.dataChoice.vocabulaire),l=y(g=>g.parametersExercice.exerciceNumber),s=ze(),c=ce(),d=g=>{(r.includes(g)||r.length<l)&&c.pathname==="/choisir-ses/Vocabulaire"&&s(x5(g))};return o.jsx(Zx,{children:Array.isArray(e)&&e.length>0?e.map(g=>o.jsxs(Gx,{$bgColor:n,onClick:()=>d(g),style:{backgroundColor:r.includes(g)?t:n,cursor:"pointer"},children:[o.jsxs(Yx,{$color:t,$fontColor:i,$mainBgColor:a,children:[o.jsxs("p",{children:[g.kanji," ",o.jsx("span",{children:"Kanji"})]}),o.jsxs("p",{children:[g.hiragana," ",o.jsx("span",{children:"Hiragana"})]})]}),o.jsxs(e3,{$color:t,$fontColor:i,$mainBgColor:a,children:[o.jsxs("p",{children:[g.francais," ",o.jsx("span",{children:"Français"})]}),o.jsxs("p",{children:[g.Romaji," ",o.jsx("span",{children:"Romaji"})]})]}),o.jsxs(n3,{$color:t,$fontColor:i,$mainBgColor:a,children:[o.jsxs("div",{children:[o.jsx("span",{children:Array.isArray(g.categorie)&&g.categorie[0]}),Array.isArray(g.categorie)&&g.categorie[1]&&o.jsx("span",{children:g.categorie[1]}),Array.isArray(g.categorie)&&g.categorie[2]&&o.jsx("span",{children:g.categorie[2]})]}),o.jsxs("p",{children:[o.jsx("span",{children:"JLPT"}),g.niveau]})]})]},g.id)):o.jsx(i3,{$fontColor:i,$bgColor:n,$color:t,$mainBgColor:a,children:o.jsx("p",{children:"Aucun résultat"})})})}dd.propTypes={vocabulaireList:S.array.isRequired};const Zm="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23F7F7F2'/%3e%3crect%20x='19.6904'%20y='14.9575'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Gm="data:image/svg+xml,%3csvg%20width='50'%20height='37'%20viewBox='0%200%2050%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4002%202.32351C23.5849%201.06396%2025.5862%201.06396%2026.7708%202.32351L41.1226%2017.5828C42.9235%2019.4976%2041.5659%2022.6382%2038.9373%2022.6382H10.2338C7.60519%2022.6382%206.24759%2019.4976%208.04849%2017.5828L22.4002%202.32351Z'%20fill='%23353535'/%3e%3crect%20x='19.6904'%20y='14.957'%20width='9.41714'%20height='22.0426'%20rx='3'%20fill='%23353535'/%3e%3c/svg%3e",a3=w.header`
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
`,t3=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `,r3=w.button`
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
`;function o3(){const{mainBgColor:e}=y(u=>u.mode),{color:n}=y(u=>u.color),i=ce(),a=y(u=>u.search.searchText),t=y(u=>u.search.jlptLevel),r=y(u=>u.search.kanaType),l=y(u=>u.mode),s=y(u=>u.search.vocabulaireCategorie),c=Io.kanji.filter(u=>{var j,x;return(((j=u.Meaning)==null?void 0:j.toLowerCase().includes(a))||((x=u.SecondaryMeaning)==null?void 0:x.toLowerCase().includes(a)))&&(t===""||u.JLPTLevel===t)}).sort((u,j)=>{var f,h,v,R,P,L,C,b,T,z;const x=((f=u.Kanji)==null?void 0:f.toLowerCase().startsWith(a))||((h=u.OnReading)==null?void 0:h.some(G=>G.toLowerCase().startsWith(a)))||((v=u.KunReading)==null?void 0:v.some(G=>G.toLowerCase().startsWith(a)))||((R=u.Meaning)==null?void 0:R.toLowerCase().startsWith(a))||((P=u.SecondaryMeaning)==null?void 0:P.toLowerCase().startsWith(a)),k=((L=j.Kanji)==null?void 0:L.toLowerCase().startsWith(a))||((C=j.OnReading)==null?void 0:C.some(G=>G.toLowerCase().startsWith(a)))||((b=j.KunReading)==null?void 0:b.some(G=>G.toLowerCase().startsWith(a)))||((T=j.Meaning)==null?void 0:T.toLowerCase().startsWith(a))||((z=j.SecondaryMeaning)==null?void 0:z.toLowerCase().startsWith(a));return x&&!k?-1:!x&&k?1:0}),d=[...Oe.Hiragana,...Oe.Dakuten,...Oe.Handakuten,...Oe.Combinaison].filter(u=>{var j,x,k,f;return(((j=u.Hiragana)==null?void 0:j.toLowerCase().includes(a))||((x=u.Dakuten)==null?void 0:x.toLowerCase().includes(a))||((k=u.Handakuten)==null?void 0:k.toLowerCase().includes(a))||((f=u.Romaji)==null?void 0:f.toLowerCase().includes(a)))&&(r===""||u.Type===r)}).sort((u,j)=>{var f,h,v,R,P,L,C,b;const x=((f=u.Hiragana)==null?void 0:f.toLowerCase().startsWith(a))||((h=u.Dakuten)==null?void 0:h.toLowerCase().startsWith(a))||((v=u.Handakuten)==null?void 0:v.toLowerCase().startsWith(a))||((R=u.Romaji)==null?void 0:R.toLowerCase().startsWith(a)),k=((P=j.Hiragana)==null?void 0:P.toLowerCase().startsWith(a))||((L=j.Dakuten)==null?void 0:L.toLowerCase().startsWith(a))||((C=j.Handakuten)==null?void 0:C.toLowerCase().startsWith(a))||((b=j.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return x&&!k?-1:!x&&k?1:0}),g=[...Me.Katakana,...Me.Dakuten,...Me.Handakuten,...Me.Combinaison].filter(u=>{var j,x,k,f;return(((j=u.Katakana)==null?void 0:j.toLowerCase().includes(a))||((x=u.Dakuten)==null?void 0:x.toLowerCase().includes(a))||((k=u.Handakuten)==null?void 0:k.toLowerCase().includes(a))||((f=u.Romaji)==null?void 0:f.toLowerCase().includes(a)))&&(r===""||u.Type===r)}).sort((u,j)=>{var f,h,v,R,P,L,C,b;const x=((f=u.Katakana)==null?void 0:f.toLowerCase().startsWith(a))||((h=u.Dakuten)==null?void 0:h.toLowerCase().startsWith(a))||((v=u.Handakuten)==null?void 0:v.toLowerCase().startsWith(a))||((R=u.Romaji)==null?void 0:R.toLowerCase().startsWith(a)),k=((P=j.Katakana)==null?void 0:P.toLowerCase().startsWith(a))||((L=j.Dakuten)==null?void 0:L.toLowerCase().startsWith(a))||((C=j.Handakuten)==null?void 0:C.toLowerCase().startsWith(a))||((b=j.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return x&&!k?-1:!x&&k?1:0}),p=Array.isArray(Di.vocabulaire)?Di.vocabulaire.filter(u=>{var j,x,k,f;return(((j=u.kanji)==null?void 0:j.toLowerCase().includes(a))||((x=u.hiragana)==null?void 0:x.toLowerCase().includes(a))||((k=u.francais)==null?void 0:k.toLowerCase().includes(a))||((f=u.Romaji)==null?void 0:f.toLowerCase().includes(a)))&&(t===""||u.JLPTLevel===t)&&(s.length===0||s.includes(u.categorie))}).sort((u,j)=>{var f,h,v,R,P,L,C,b;const x=((f=u.kanji)==null?void 0:f.toLowerCase().startsWith(a))||((h=u.hiragana)==null?void 0:h.toLowerCase().startsWith(a))||((v=u.francais)==null?void 0:v.toLowerCase().startsWith(a))||((R=u.Romaji)==null?void 0:R.toLowerCase().startsWith(a)),k=((P=j.kanji)==null?void 0:P.toLowerCase().startsWith(a))||((L=j.hiragana)==null?void 0:L.toLowerCase().startsWith(a))||((C=j.francais)==null?void 0:C.toLowerCase().startsWith(a))||((b=j.Romaji)==null?void 0:b.toLowerCase().startsWith(a));return x&&!k?-1:!x&&k?1:0}):[],m=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})};return o.jsxs(a3,{children:[o.jsx(Na,{}),o.jsx(gx,{}),o.jsx(qm,{}),i.pathname==="/Dictionnaire/Kanji"&&o.jsx(ld,{kanjiList:c}),i.pathname==="/Dictionnaire/Hiragana"&&o.jsx(sd,{hiraganaList:d}),i.pathname==="/Dictionnaire/Katakana"&&o.jsx(cd,{katakanaList:g}),i.pathname==="/Dictionnaire/Vocabulaire"&&o.jsx(dd,{vocabulaireList:p}),o.jsx(t3,{children:o.jsx(r3,{onClick:m,$mainBgColor:e,$color:n,children:o.jsx("img",{src:l.mode==="light"?Zm:Gm})})})]})}const l3=w.header`
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
`,s3=w.div`
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
`,c3=w.div`
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
`,d3=w.div`
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
`,u3=w.div`
@media screen and (max-width: 560px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}
`,g3=w.button`
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
`,p3=w.button`
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
`,m3=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
   
 `,f3=w.button`
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
`;function h3(){const{bgColor:e,fontColor:n,mainBgColor:i}=y($=>$.mode),{color:a}=y($=>$.color),t=y($=>$.dataChoice.hiragana),r=y($=>$.dataChoice.katakana),l=y($=>$.dataChoice.kanji),s=y($=>$.dataChoice.vocabulaire),c=y($=>$.dataChoice.nombres),d=ce();let g=On();const p=y($=>$.search.searchText),m=y($=>$.search.jlptLevel),u=y($=>$.search.kanaType),j=y($=>$.mode),x=y($=>$.search.vocabulaireCategorie),k=y($=>$.parametersExercice.exerciceNumber),f=Io.kanji.filter($=>{var J,X;return(((J=$.Meaning)==null?void 0:J.toLowerCase().includes(p))||((X=$.SecondaryMeaning)==null?void 0:X.toLowerCase().includes(p)))&&(m===""||$.JLPTLevel===m)}).sort(($,J)=>{var U,O,E,D,F,_,ee,I,ge,me;const X=((U=$.Kanji)==null?void 0:U.toLowerCase().startsWith(p))||((O=$.OnReading)==null?void 0:O.some(fe=>fe.toLowerCase().startsWith(p)))||((E=$.KunReading)==null?void 0:E.some(fe=>fe.toLowerCase().startsWith(p)))||((D=$.Meaning)==null?void 0:D.toLowerCase().startsWith(p))||((F=$.SecondaryMeaning)==null?void 0:F.toLowerCase().startsWith(p)),Q=((_=J.Kanji)==null?void 0:_.toLowerCase().startsWith(p))||((ee=J.OnReading)==null?void 0:ee.some(fe=>fe.toLowerCase().startsWith(p)))||((I=J.KunReading)==null?void 0:I.some(fe=>fe.toLowerCase().startsWith(p)))||((ge=J.Meaning)==null?void 0:ge.toLowerCase().startsWith(p))||((me=J.SecondaryMeaning)==null?void 0:me.toLowerCase().startsWith(p));return X&&!Q?-1:!X&&Q?1:0}),h=[...Oe.Hiragana,...Oe.Dakuten,...Oe.Handakuten,...Oe.Combinaison].filter($=>{var J,X,Q,U;return(((J=$.Hiragana)==null?void 0:J.toLowerCase().includes(p))||((X=$.Dakuten)==null?void 0:X.toLowerCase().includes(p))||((Q=$.Handakuten)==null?void 0:Q.toLowerCase().includes(p))||((U=$.Romaji)==null?void 0:U.toLowerCase().includes(p)))&&(u===""||$.Type===u)}).sort(($,J)=>{var U,O,E,D,F,_,ee,I;const X=((U=$.Hiragana)==null?void 0:U.toLowerCase().startsWith(p))||((O=$.Dakuten)==null?void 0:O.toLowerCase().startsWith(p))||((E=$.Handakuten)==null?void 0:E.toLowerCase().startsWith(p))||((D=$.Romaji)==null?void 0:D.toLowerCase().startsWith(p)),Q=((F=J.Hiragana)==null?void 0:F.toLowerCase().startsWith(p))||((_=J.Dakuten)==null?void 0:_.toLowerCase().startsWith(p))||((ee=J.Handakuten)==null?void 0:ee.toLowerCase().startsWith(p))||((I=J.Romaji)==null?void 0:I.toLowerCase().startsWith(p));return X&&!Q?-1:!X&&Q?1:0}),v=[...Me.Katakana,...Me.Dakuten,...Me.Handakuten,...Me.Combinaison].filter($=>{var J,X,Q,U;return(((J=$.Katakana)==null?void 0:J.toLowerCase().includes(p))||((X=$.Dakuten)==null?void 0:X.toLowerCase().includes(p))||((Q=$.Handakuten)==null?void 0:Q.toLowerCase().includes(p))||((U=$.Romaji)==null?void 0:U.toLowerCase().includes(p)))&&(u===""||$.Type===u)}).sort(($,J)=>{var U,O,E,D,F,_,ee,I;const X=((U=$.Katakana)==null?void 0:U.toLowerCase().startsWith(p))||((O=$.Dakuten)==null?void 0:O.toLowerCase().startsWith(p))||((E=$.Handakuten)==null?void 0:E.toLowerCase().startsWith(p))||((D=$.Romaji)==null?void 0:D.toLowerCase().startsWith(p)),Q=((F=J.Katakana)==null?void 0:F.toLowerCase().startsWith(p))||((_=J.Dakuten)==null?void 0:_.toLowerCase().startsWith(p))||((ee=J.Handakuten)==null?void 0:ee.toLowerCase().startsWith(p))||((I=J.Romaji)==null?void 0:I.toLowerCase().startsWith(p));return X&&!Q?-1:!X&&Q?1:0}),R=Array.isArray(Di.vocabulaire)?Di.vocabulaire.filter($=>{var J,X,Q,U;return(((J=$.kanji)==null?void 0:J.toLowerCase().includes(p))||((X=$.hiragana)==null?void 0:X.toLowerCase().includes(p))||((Q=$.francais)==null?void 0:Q.toLowerCase().includes(p))||((U=$.Romaji)==null?void 0:U.toLowerCase().includes(p)))&&(m===""||$.niveau===m)&&(x.length===0||x.includes($.categorie))}).sort(($,J)=>{var U,O,E,D,F,_,ee,I;const X=((U=$.kanji)==null?void 0:U.toLowerCase().startsWith(p))||((O=$.hiragana)==null?void 0:O.toLowerCase().startsWith(p))||((E=$.francais)==null?void 0:E.toLowerCase().startsWith(p))||((D=$.Romaji)==null?void 0:D.toLowerCase().startsWith(p)),Q=((F=J.kanji)==null?void 0:F.toLowerCase().startsWith(p))||((_=J.hiragana)==null?void 0:_.toLowerCase().startsWith(p))||((ee=J.francais)==null?void 0:ee.toLowerCase().startsWith(p))||((I=J.Romaji)==null?void 0:I.toLowerCase().startsWith(p));return X&&!Q?-1:!X&&Q?1:0}):[],P=()=>{document.getElementById("recherche").scrollIntoView({behavior:"smooth"})},C=(()=>{switch(d.pathname){case"/choisir-ses/Kanji":return{modeTitle:"Kanji"};case"/choisir-ses/Hiragana":return{modeTitle:"Hiragana"};case"/choisir-ses/Katakana":return{modeTitle:"Katakana"};case"/choisir-ses/Vocabulaire":return{modeTitle:"Vocabulaire"};case"/choisir-ses/Nombres":return{modeTitle:"Nombres"};default:return"Accueil"}})(),b=d.pathname;let T;switch(b){case"/choisir-ses/Hiragana":T=t.length;break;case"/choisir-ses/Katakana":T=r.length;break;case"/choisir-ses/Kanji":T=l.length;break;case"/choisir-ses/Vocabulaire":T=s.length;break;case"/choisir-ses/Nombres":T=c.length;break;default:T=0;break}const z=ze(),G=()=>{switch(d.pathname){case"/choisir-ses/Vocabulaire":z(C5());break;case"/choisir-ses/Hiragana":z(K5());break;case"/choisir-ses/Katakana":z(L5());break;case"/choisir-ses/Kanji":z(P5());break;case"/choisir-ses/Nombres":z(b5());break}},Te=()=>{T!==k?alert("Veuillez sélectionner plus de "+k+" "+C.modeTitle):g(-1)};return o.jsxs(l3,{children:[o.jsx(g3,{onClick:()=>g(-1),$bgColor:e,$color:a,$mainBgColor:i,children:o.jsx("img",{src:j.mode==="light"?At:od})}),o.jsxs(s3,{children:[o.jsxs(c3,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[o.jsxs("div",{children:[o.jsxs("p",{children:[C.modeTitle," sélectionnes"]}),o.jsx("button",{onClick:G,children:"Vider"})]}),o.jsxs("div",{id:"selectionnes",children:[b==="/choisir-ses/Hiragana"&&t.map(($,J)=>o.jsx("p",{children:$.Nom==="Dakuten"?$.Dakuten:$.Nom==="Handakuten"?$.Handakuten:$.Hiragana},J)),b==="/choisir-ses/Katakana"&&r.map(($,J)=>o.jsx("p",{children:$.Nom==="Dakuten"?$.Dakuten:$.Nom==="Handakuten"?$.Handakuten:$.Katakana},J)),b==="/choisir-ses/Kanji"&&l.map(($,J)=>o.jsx("p",{children:$.Kanji},J)),b==="/choisir-ses/Vocabulaire"&&s.map(($,J)=>o.jsx("p",{children:$.kanji||$.hiragana},J)),b==="/choisir-ses/Nombres"&&c.map(($,J)=>o.jsx("p",{children:$.Nombre},J))]})]}),o.jsxs(d3,{$mainBgColor:i,$bgColor:e,$fontColor:n,$color:a,children:[o.jsxs("span",{children:[" ",T,"/",k]}),o.jsxs("p",{children:[C.modeTitle," sélectionnes"]})]})]}),o.jsx(qm,{}),o.jsxs(u3,{children:[d.pathname==="/choisir-ses/Kanji"&&o.jsx(ld,{kanjiList:f}),d.pathname==="/choisir-ses/Hiragana"&&o.jsx(sd,{hiraganaList:h}),d.pathname==="/choisir-ses/Katakana"&&o.jsx(cd,{katakanaList:v}),d.pathname==="/choisir-ses/Vocabulaire"&&o.jsx(dd,{vocabulaireList:R})]}),o.jsx(p3,{onClick:Te,$bgColor:e,$color:a,$mainBgColor:i,children:"Valider"}),o.jsx(m3,{children:o.jsx(f3,{onClick:P,$bgColor:e,$mainBgColor:i,$color:a,children:o.jsx("img",{src:j.mode==="light"?Zm:Gm})})})]})}const v3=w.div`
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
        text-align: center;
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
    
`;function Ym({question:e,isCorrect:n}){const{bgColor:i,fontColor:a,mainBgColor:t}=y(g=>g.mode),{color:r}=y(g=>g.color),l=ce(),s=y(g=>g.parametersExercice.exerciceDifficulté);function c(){return e.kanji===""?e.hiragana:e.kanji}function d(){if(e.Type==="Hiragana"||e.Type==="Katakana")return e.Hiragana||e.Katakana;if(e.Nom==="Dakuten")return e.Dakuten;if(e.Nom==="Handakuten")return e.Handakuten;if(e.Type==="Combinaison")return e.Hiragana||e.Katakana}return o.jsx(v3,{$mainBgColor:t,$color:r,$bgColor:i,$fontColor:a,$isCorrect:n,children:o.jsxs("div",{children:[s==="Débutant"&&(l.pathname.includes("/Exercices/Vocabulaire")||l.pathname.includes("/Exercices/Kanji"))?o.jsx("span",{children:e.OnPrincipalReadingRomaji||e.KunPrincipalReadingRomaji||e.Romaji}):null,o.jsx("p",{children:e.Kanji||c()||e.Nombre||d()}),s=="Débutant"||s=="Intermédiaire"&&(l.pathname.includes("/Exercices/Vocabulaire")||l.pathname.includes("/Exercices/Kanji"))?o.jsx("span",{children:e.KunPrincipalReading||e.OnPrincipalReadingRomaji||e.hiragana}):null]})},e.id)}Ym.propTypes={question:S.shape({id:S.string.isRequired,Kanji:S.string,Katakana:S.string,Hiragana:S.string,kanji:S.string,Nombre:S.string,hiragana:S.string,Handakuten:S.string,Dakuten:S.string,Type:S.string,Nom:S.string,Romaji:S.string,KunPrincipalReadingRomaji:S.string,OnPrincipalReadingRomaji:S.string,KunPrincipalReading:S.string,OnPrincipalReading:S.string}).isRequired,isCorrect:S.bool};const w3=w.div`
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
`,j3=w.button`
    border-radius: 0.8vw;
    color: ${e=>{if(e.$isAnswered){if(e.$isCorrect)return"#F7F7F2";if(e.$isSelected)return"#F7F7F2"}return e.$fontColor}}; 
    background-color: ${e=>{if(e.$isAnswered){if(e.$isCorrect)return"#60CF60";if(e.$isSelected)return"#FF6767"}return e.$mainBgColor}};    
    cursor: pointer;
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
`;function ef({question:e,options:n,onAnswer:i,buttonDisabled:a}){const{bgColor:t,fontColor:r,mainBgColor:l}=y(x=>x.mode),[s,c]=K.useState(""),[d,g]=K.useState(!1),[p,m]=K.useState(null);K.useEffect(()=>{g(!1),m(null)},[e]);const u=x=>{c(x);const k=x===(e.Meaning||e.francais||e.Romaji);g(!0),m(x),i(k)},j=x=>{c(x.target.value)};return o.jsx(w3,{$mainBgColor:l,$bgColor:t,$fontColor:r,children:n.length>0?n.map((x,k)=>o.jsx(j3,{$fontColor:r,$mainBgColor:l,$bgColor:t,onClick:()=>u(x),$isCorrect:x===(e.Meaning||e.francais||e.Romaji),$isAnswered:d,$isSelected:x===p,disabled:a,children:x},k)):o.jsx("input",{type:"text",value:s,onChange:j})},e.id)}ef.propTypes={question:S.shape({id:S.string.isRequired,Meaning:S.string,Romaji:S.string,francais:S.string}).isRequired,options:S.arrayOf(S.string).isRequired,onAnswer:S.func.isRequired,buttonDisabled:S.bool.isRequired};const ud=({color:e,width:n="2.5vw",height:i="2.5vw"})=>o.jsxs("svg",{width:n,height:i,viewBox:"0 0 78 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsxs("g",{clipPath:"url(#clip0_309_10)",children:[o.jsx("path",{d:"M74.7033 36.2802C72.8874 36.2802 71.3902 37.6023 71.3902 39.434C71.2309 51.3642 64.3499 62.1476 53.8214 67.9295C37.9569 76.6423 19.4165 68.8215 12.3126 58.2134L22.3314 60.2999C23.9879 60.6344 25.8037 59.631 26.1382 57.8151C26.4727 56.1586 25.4692 54.3428 23.6534 54.0083L3.95026 49.867C2.80343 49.5962 -0.206994 50.4245 0.143426 53.5145L2.62822 73.3929C2.7875 75.0494 4.12547 76.2122 5.782 76.2122C8.25087 76.2122 9.25435 74.3964 9.09507 72.5646L7.93231 62.8644C24.0357 82.1853 44.4716 79.4934 56.8 73.9026C69.5585 67.1013 77.6818 54.0242 77.8411 39.5933C77.857 37.7775 76.5191 36.2802 74.7033 36.2802Z",fill:e}),o.jsx("path",{d:"M3.28122 41.7118C5.09703 41.7118 6.59428 40.3897 6.59428 38.558C6.75357 26.6278 13.6345 15.8444 24.1631 10.0625C40.0275 1.34974 58.5679 9.17048 65.6719 19.7787L55.6531 17.6921C53.9966 17.3576 52.1807 18.361 51.8462 20.1769C51.5118 21.8334 52.5152 23.6492 54.331 23.9837L74.0501 28.125C75.197 28.3958 78.2074 27.5675 77.857 24.4775L75.3722 4.59909C75.2129 2.94256 73.8749 1.7798 72.2184 1.7798C69.7495 1.7798 68.7461 3.59562 68.9053 5.42736L70.0522 15.1276C53.9488 -4.17734 33.5129 -1.5014 21.1845 4.10532C8.42603 10.8907 0.302651 23.9837 0.127441 38.3987C0.127441 40.2304 1.46541 41.7118 3.28122 41.7118Z",fill:e})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_309_10",children:o.jsx("rect",{width:"78",height:"78",fill:"white"})})})]});ud.propTypes={color:S.string,width:S.string,height:S.string};const R3=w.div`
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
`;function nf({onReload:e,onSkip:n,buttonDisabled:i}){const{bgColor:a,mainBgColor:t,fontColor:r}=y(d=>d.mode),{color:l}=y(d=>d.color),s=On(),c=window.innerWidth<=560?"7vw":"2.5vw";return o.jsxs(R3,{$color:l,$bgColor:a,$mainBgColor:t,$fontColor:r,children:[o.jsx("button",{onClick:()=>{e(),s(-1)},children:"Retour"}),o.jsx("button",{onClick:n,disabled:i,children:"Passer"}),o.jsx("button",{onClick:e,children:o.jsx(ud,{width:c,height:c,color:l,children:" "})})]})}nf.propTypes={onReload:S.func.isRequired,onSkip:S.func.isRequired,buttonDisabled:S.bool};const x3=w.div`
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
`,y3=w.div`
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
`,k3=w.div`
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
`,P3=w.div`
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
`,C3=w.div`
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
`,L3=w.div`
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

`,b3=w.div`
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
`,K3=w.div`
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
`,$3=w.div`
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
`,T3=w.div`
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
`,N3=w.div`
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
        gap : 1.5vw;
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
            border-radius: 3vw;
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
`;function af({onReload:e}){const n=On(),{bgColor:i,fontColor:a,mainBgColor:t}=y(P=>P.mode),{color:r}=y(P=>P.color),l=y(P=>P.parametersExercice.exerciceModeDeJeu),s=y(P=>P.parametersExercice.exerciceNumber),c=y(P=>P.parametersExercice.exerciceDifficulté),d=y(P=>P.parametersExercice.exerciceTimer),g=y(P=>P.exercice.totalTimer),p=y(P=>P.parametersExercice.exerciceTimerActive),m=y(P=>P.exercice.totalfaute),u=y(P=>P.exercice.questionsIncorrectes),[j,x]=K.useState(null),f=(P=>{const L=Math.floor(P/60),C=P%60,b=L.toString().padStart(2,"0"),T=C.toString().padStart(2,"0");return`${b}:${T}`})(g);if(!u)return o.jsx("div",{children:"Loading..."});const v=(()=>{switch(location.pathname){case"/Exercices/Kanji":return{titleFr:"Kanji"};case"/Exercices/Hiragana":return{titleFr:"Hiragana"};case"/Exercices/Katakana":return{titleFr:"Katakana"};case"/Exercices/Vocabulaire":return{titleFr:"Vocabulaire"};case"/Exercices/Nombres":return{titleFr:"Nombres"};default:return"Accueil"}})(),R=window.innerWidth<=560?"7vw":"2.5vw";return o.jsxs(x3,{$mainBgColor:t,children:[o.jsxs(y3,{$bgColor:i,children:[o.jsxs(k3,{$mainBgColor:t,$fontColor:a,$color:r,children:[o.jsx("p",{children:"Difficulté"}),o.jsx("p",{children:c})]}),o.jsxs(P3,{$mainBgColor:t,$fontColor:a,$color:r,children:[o.jsxs("p",{children:["Nombre de ",v.titleFr," "]}),o.jsx("p",{children:s})]}),o.jsxs(C3,{$mainBgColor:t,$fontColor:a,$color:r,children:[o.jsx("p",{children:"Mode de jeu"}),o.jsx("p",{children:l})]}),o.jsx(L3,{$mainBgColor:t,$fontColor:a,$color:r,children:j&&o.jsxs("div",{children:[o.jsx("h3",{children:j.kanji||j.Dakuten||j.Handakuten||j.hiragana||j.Hiragana||j.Katakana||j.Kanji}),o.jsxs("div",{children:[j.Romaji&&o.jsxs("p",{children:[o.jsx("span",{children:"Romaji "})," ",j.Romaji]}),j.francais&&o.jsxs("p",{children:[o.jsx("span",{children:"Francais "})," ",j.francais]}),j.hiragana&&o.jsxs("p",{children:[o.jsx("span",{children:"Hiragana "})," ",j.hiragana]}),j.OnPrincipalReading&&o.jsxs("p",{children:[o.jsx("span",{children:"On "})," ",j.OnPrincipalReading]}),j.KunPrincipalReading&&o.jsxs("p",{children:[o.jsx("span",{children:"Kun "})," ",j.KunPrincipalReading]}),j.Meaning&&o.jsxs("p",{children:[o.jsx("span",{children:"Francais "})," ",j.Meaning]})]})]})}),o.jsx(b3,{$mainBgColor:t,$fontColor:a,$color:r,children:o.jsx("div",{children:u.length>0?u.filter(Boolean).map((P,L)=>o.jsx("p",{onMouseEnter:()=>x(P),children:P.kanji||(P.Nom==="Handakuten"?P.Handakuten:P.Nom==="Dakuten"?P.Dakuten:P.hiragana||P.Hiragana||P.Katakana||P.Kanji)},L)):o.jsx("p",{children:"pas de faute"})})}),o.jsxs(K3,{$mainBgColor:t,$fontColor:a,$color:r,children:[o.jsx("p",{children:"Erreur"}),o.jsx("p",{children:m})]}),o.jsx($3,{$mainBgColor:t,$fontColor:a,$color:r,children:o.jsxs("p",{children:[p===!1?f:d,o.jsx("span",{children:"s"})]})}),o.jsx(T3,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:o.jsx("div",{})})]}),o.jsxs(N3,{$mainBgColor:t,$fontColor:a,$color:r,$bgColor:i,children:[o.jsxs("button",{onClick:e,children:[" ",o.jsx(ud,{color:r,width:R,height:R,children:" "})]}),o.jsx("button",{onClick:()=>{e(),n(-1)},children:"Terminer"})]})]})}af.propTypes={onReload:S.func.isRequired};const S3=5,O3=parseFloat(6.25),M3=parseFloat(7.8),E3=e=>{if(e==="Débutant")return S3;if(e==="Intermédiaire")return O3;if(e==="Confirmer")return M3},H3=(e,n,i,a,t,r,l,s)=>{const c=Number(E3(n));s.pathname.includes("/Exercices/Kanji")?e(Jm(Number(r+c))):s.pathname.includes("/Exercices/Hiragana")?e(_m(Number(i+c))):s.pathname.includes("/Exercices/Vocabulaire")?e(Fm(Number(t+c))):s.pathname.includes("/Exercices/Katakana")?e(Bm(Number(a+c))):s.pathname.includes("/Exercices/Nombres")&&e(Am(Number(l+c)))},z3=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1vw;
    position: relative;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
`,D3=w.div`
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
`,J3=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
`,F3=w.div`
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
`,dg=(e,n)=>{const i=[e],a=n.filter(t=>t!==e);for(;i.length<4;){const t=Math.floor(Math.random()*a.length),r=a[t];i.includes(r)||i.push(r)}return i.sort(()=>.5-Math.random())};function _3(){const e=y(M=>M.parametersExercice.exerciceModeDeJeu),n=y(M=>M.parametersExercice.exerciceNumber),i=y(M=>M.dataChoice),a=y(M=>M.parametersExercice.exerciceTypeDeKana),t=y(M=>M.parametersExercice.exerciceTimerActive),r=y(M=>M.dataChoice.katakana),l=y(M=>M.dataChoice.hiragana),s=y(M=>M.parametersExercice.exerciceDifficulté),c=y(M=>M.lvl.hiraganaXp),d=y(M=>M.lvl.KanjiXp),g=y(M=>M.lvl.vocabulaireXp),p=y(M=>M.lvl.nombreXp),m=y(M=>M.lvl.katakanaXp),{bgColor:u}=y(M=>M.mode),[j,x]=K.useState([]),[k,f]=K.useState(0),[h,v]=K.useState(null),[R,P]=K.useState(0),L=K.useRef(null),C=K.useRef(null),b=ze(),T=ce(),z=y(M=>M.parametersExercice.exerciceTimer),[G,Te]=K.useState(z),{color:$}=y(M=>M.color),[J,X]=K.useState(1),[Q,U]=K.useState(1),[O,E]=K.useState(!1),[D,F]=K.useState(!1),_=K.useCallback(M=>{U(W=>W+1),b(gr(Q)),M===!0&&(U(1),b(gr(Q)))},[U,b,Q]),ee=K.useCallback((M,W)=>{X(Zo=>Zo+1),b(ur(J)),b(w5(W)),M===!0&&(X(1),b(ur(J)))},[X,b,J]),I=K.useCallback(()=>{C.current&&clearInterval(C.current),P(0),t===!1&&(C.current=setInterval(()=>{P(M=>M+1)},1e3))},[t]),ge=K.useCallback(()=>{C.current&&(clearInterval(C.current),C.current=null)},[]),me=K.useCallback(()=>{Te(z),L.current&&L.current()},[z]),fe=K.useCallback(()=>{if(t===!0){const M=j[k];setTimeout(()=>{k<j.length-1?(f(k+1),ee(!1,M)):(ee(!1,M),F(!0),b(ig(R)),ge())},900)}},[k,j,t,ee,ge,b,R]);K.useEffect(()=>{if(t===!0&&D===!1){const M=setInterval(()=>{Te(W=>W<=1?(clearInterval(M),fe(),setTimeout(()=>{Te(z)},900),0):W-1)},1e3);return()=>clearInterval(M)}},[z,fe,b,t,D]),K.useEffect(()=>{Te(z)},[z]),K.useEffect(()=>{me&&me(z)},[me,z]);const En=K.useCallback(()=>{let M;if(T.pathname.includes("/Exercices/Kanji")?(I(),M=Io.kanji):T.pathname.includes("/Exercices/Hiragana")?(I(),a==="normal"?M=Oe.Hiragana:a==="accents"?M=[...Oe.Dakuten,...Oe.Handakuten]:a==="combinaison"?M=Oe.Combinaison:a==="tout"&&(M=[...Oe.Hiragana,...Oe.Dakuten,...Oe.Handakuten,...Oe.Combinaison],e==="Choisir ses questions"&&(M=l.map(W=>W.affiche==="Hiragana"?{...W,Type:"Hiragana"}:W.affiche==="Accents"?{...W,Type:W.affiche==="Accents"?"Dakuten":"Handakuten"}:{...W,Type:"Combinaison"})))):T.pathname.includes("/Exercices/Vocabulaire")?(I(),M=Di.vocabulaire):T.pathname.includes("/Exercices/Nombres")?(I(),M=Di.nombres):T.pathname.includes("/Exercices/Katakana")&&(I(),a==="normal"?M=Me.Katakana:a==="accents"?M=[...Me.Dakuten,...Me.Handakuten]:a==="combinaison"?M=Me.Combinaison:a==="tout"?(M=[...Me.Katakana,...Me.Dakuten,...Me.Handakuten,...Me.Combinaison],e==="Choisir ses questions"&&(M=r.map(W=>W.affiche==="Katakana"?{...W,Type:"Katakana"}:W.affiche==="Accents"?{...W,Type:W.affiche==="Accents"?"Dakuten":"Handakuten"}:{...W,Type:"Combinaison"}))):ge()),M){let W=[];if(e==="Aléatoire")W=M.sort(()=>.5-Math.random()).slice(0,n);else if(e==="N5")W=M.filter(Re=>Re.JLPTLevel==="N5").sort(()=>.5-Math.random()).slice(0,n);else if(e==="Choisir ses questions"){if(b(ad("tout")),T.pathname.includes("/Exercices/Kanji")&&i.kanji){const Re=i.kanji.map(re=>re.Kanji);W=M.filter(re=>Re.includes(re.Kanji)).sort(()=>.5-Math.random()).slice(0,n)}else if(T.pathname.includes("/Exercices/Vocabulaire")&&i.vocabulaire){const Re=i.vocabulaire.map(re=>re.francais);W=M.filter(re=>Re.includes(re.francais)).sort(()=>.5-Math.random()).slice(0,n)}else if(T.pathname.includes("/Exercices/Hiragana")&&i.hiragana){const Re=i.hiragana.map(re=>re.hiragana);W=M.filter(re=>Re.includes(re.hiragana)).sort(()=>.5-Math.random()).slice(0,n)}else if(T.pathname.includes("/Exercices/Katakana")&&i.katakana){const Re=i.katakana.map(re=>re.Katakana);W=M.filter(re=>Re.includes(re.Katakana)).sort(()=>.5-Math.random()).slice(0,n)}else if(T.pathname.includes("/Exercices/Nombres")&&i.nombre){const Re=i.nombre.map(re=>re.francais);W=M.filter(re=>Re.includes(re.francais)).sort(()=>.5-Math.random()).slice(0,n)}}const Zo=W.map(Re=>{if(T.pathname.includes("/Exercices/Hiragana")||T.pathname.includes("/Exercices/Katakana")){const re=Re.Romaji,Go=dg(re,M.map(It=>It.Romaji));return{...Re,options:Go,id:Re.id.toString()}}else{const re=Re.Meaning||Re.francais,Go=dg(re,M.map(It=>It.Meaning||It.francais));return{...Re,options:Go,id:Re.id.toString()}}});x(Zo),f(0)}},[e,n,i,a,T.pathname,I,ge,b,r,l]);K.useEffect(()=>{const M=()=>{b(ur(0)),b(gr(0))};En(),ge(),I(),M()},[En,ge,I,b]);const kn=M=>{v(M);const W=j[k];M?(_(),E(!0),ge(),H3(b,s,c,m,g,d,p,T),b(ag(!0)),setTimeout(()=>{b(ag(!1))},900)):(ee(!1,W),E(!0),ge()),setTimeout(()=>{k<j.length-1?(f(k+1),v(null)):(b(ig(R)),F(!0)),v(null),E(!1),Te(z)},900),L.current&&L.current()},Sa=()=>{kn(!1)},wi=()=>{_(!0),ee(!0),b(gr(0)),b(ur(0)),En(),ge(),I(),F(!1),b(j5()),Te(z)};return o.jsxs(z3,{children:[D===!0?o.jsx(af,{onReload:wi}):null,o.jsxs(D3,{$bgColor:u,children:[t===!0&&o.jsx(F3,{$color:$,children:o.jsxs("p",{children:[G,o.jsx("span",{children:"s"})]})}),j&&j.length>0?o.jsxs(J3,{children:[o.jsx(Ym,{question:j[k],isCorrect:h}),o.jsx(ef,{question:j[k],options:j[k].options,onAnswer:kn,isCorrect:h,buttonDisabled:O})]},j[k].id):o.jsx("p",{children:"Aucune question disponible."})]}),o.jsx(nf,{onReload:wi,onSkip:Sa,buttonDisabled:O})]})}const B3=w.div`
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
`;function ug(){const e=y(s=>s.parametersExercice.exerciceNumber),n=y(s=>s.exercice.totalfaute),i=y(s=>s.exercice.totalreussite),{color:a}=y(s=>s.color),{bgColor:t,mainBgColor:r}=y(s=>s.mode),l=(n+i)/e*100;return o.jsx(B3,{$bgColor:t,$mainBgColor:r,$color:a,children:o.jsx("div",{children:o.jsx("div",{style:{height:`${l}%`}})})})}const A3=w.div`
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
        gap: 1.5vw;
    }
`,I3=w.div`
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
`;function V3(){const{bgColor:e}=y(n=>n.mode);return o.jsxs(A3,{$bgColor:e,children:[o.jsx(_3,{}),o.jsxs(I3,{children:[o.jsx(ug,{}),o.jsx(ug,{})]})]})}const U3=w.div`
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
        height: 60%;
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
`;function X3(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(s=>s.mode),a=y(s=>s.exercice.totalfaute),t=y(s=>s.exercice.totalreussite),r=y(s=>s.parametersExercice.exerciceNumber),l=t+a;return o.jsxs(U3,{$mainBgColor:i,$bgColor:e,$fontColor:n,children:[o.jsx("p",{children:t}),o.jsxs("p",{children:[l,"/",r]}),o.jsx("p",{children:a})]})}function W3(){return o.jsx("div",{})}const Q3=w.div`
    width: ${e=>e.$width};
    background-color: ${e=>e.$bgColor};
    border-radius: 2vw;
    overflow: hidden;
    height: ${e=>e.$height};
    box-sizing: border-box;
`,q3=w.div`
    width: ${e=>e.$percentage}%;
    height: 100%;
    border-radius: 2vw;
    background-color: ${e=>e.$color};
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
`;function qo({xp:e,xpToNextLevel:n,height:i,width:a,color:t,bgColor:r}){const l=e/n*100;return o.jsx(Q3,{$bgColor:r,$width:a,$height:i,$color:t,children:o.jsx(q3,{$percentage:l,$color:t})})}qo.propTypes={xp:S.number.isRequired,xpToNextLevel:S.number.isRequired,height:S.string,width:S.string,color:S.string,bgColor:S.string};const Z3=w.div`
    width: 30%;
    font-size: 1.5vw;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius:0.8vw;
    height: calc(100% - 2vw);
    @media screen and (max-width: 560px){
        width: 90%;
        border-radius: 4vw;
        padding: 3vw;
        height: 40%;
    }
`,G3=w.div`
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.6vw;;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6vw;
    padding-left: 3vw;
    padding-right: 3vw;
    position: relative;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    p{
        margin-top: -1vw;
        font-size: 2vw;
        font-weight: bold;
        @media screen and (max-width: 560px){
            margin-top: 0;
            font-size: 5vw;
        }
        span{
            font-size: 0.8vw;
            @media screen and (max-width: 560px){
                position: absolute;
                bottom: 0.5vw;
                left: 6.8vw;
                font-size: 2vw;
            }
        }
    }
`,Y3=w.p`
    font-size: 0.8vw !important;
    position: absolute;
    bottom: 0.5vw;
    right: 3vw;
    font-weight: bold;
    @media screen and (max-width: 560px){
        display: none;
    }
`,ey=w.span`
    font-size: 0.9vw;
    position: absolute;
    opacity: ${e=>e.$opacity};
    top: 1.5vw;
    right: 3vw;
    font-weight: bold;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px){
        display: none;
    }
`;function ny(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(R=>R.mode),{color:a}=y(R=>R.color);let t="";location.pathname==="/Exercices/Kanji"||location.pathname==="/Nihongo-V2/Exercices/Kanji"?t="Kanji":location.pathname==="/Exercices/Vocabulaire"||location.pathname==="/Nihongo-V2/Exercices/Vocabulaire"?t="vocabulaire":location.pathname==="/Exercices/Hiragana"||location.pathname==="/Nihongo-V2/Exercices/Hiragana"?t="hiragana":location.pathname==="/Exercices/Katakana"||location.pathname==="/Nihongo-V2/Exercices/Katakana"?t="katakana":(location.pathname==="/Exercices/Nombres"||location.pathname==="/Nihongo-V2/Exercices/Nombres")&&(t="nombre");const r=y(R=>R.lvl[`${t}LvL`]),l=y(R=>R.lvl[`${t}Xp`]),s=y(R=>R.lvl[`${t}XpToNextLvL`]),c=l.toFixed(2),d=window.innerWidth<560?"3vw":"1.5vw",g=window.innerWidth<560?"70%":"100%",p=a,m=e;let u=5,j=parseFloat(6.25),x=parseFloat(7.8);const k=y(R=>R.parametersExercice.exerciceDifficulté);let f="";k==="Débutant"?f=u:k==="Intermédiaire"?f=j:k==="Confirmer"&&(f=x);const h=y(R=>R.exercice.questionsCorrectes);let v="0";return h===!0?v="1":v="0",o.jsx(Z3,{$bgColor:e,$fontColor:n,children:o.jsxs(G3,{$mainBgColor:i,$fontColor:n,children:[o.jsxs("p",{children:["lvl ",r," ",o.jsx("span",{children:t})]}),o.jsx(qo,{xp:l,xpToNextLevel:s,height:d,width:g,color:p,bgColor:m}),o.jsxs(Y3,{children:[c,"/",s," XP"]}),o.jsxs(ey,{$opacity:v,$color:a,children:["+",f,"xp"]})]})})}const iy=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    @media screen and (max-width: 560px){
        width: 100%;
        justify-content: center;
        height: 18vh;
        flex-direction: column-reverse;
        gap: 1vw;
    }
`;function ay(){return o.jsxs(iy,{children:[o.jsx(X3,{}),location.pathname==="/Exercices/Katakana"||location.pathname==="/Exercices/Hiragana"||location.pathname==="/Exercices/Kanji"&&o.jsx(W3,{}),o.jsx(ny,{})]})}const ty=w.div`
    opacity: ${e=>e.$display};
    position: absolute;
    top : 12.5vw;
    right: 11.3vw;
    z-index: 100;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1.3s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        top : 49vw;
        right: 8vw; 
    }
    span{
        background-color: ${e=>e.$color};
        color: #F7F7F2;
        padding: 0.5vw 1vw;
        font-size: 1.3vw;
        font-weight: 700;
        border-radius: 0.6vw;
        margin-bottom: -1vw;
        margin-left: -2.5vw;
        @media screen and (max-width: 560px) {
            font-size: 3.7vw;
            border-radius: 2vw;
            padding: 2vw 3vw;
            margin-bottom: -3vw;
            margin-left: -8vw;
        }
    }
    p{
        background-color: ${e=>e.$bgColor};
        color: ${e=>e.$mainBgColor};
        padding: 0.5vw;
        width: 8vw;
        font-size: 2vw;
        font-weight: 700;
        border-radius: 0.8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            border-radius: 3vw;
            padding: 2vw;
            width: 24vw;
        }
    }
`;function ry(){const{bgColor:e,mainBgColor:n}=y(s=>s.mode),{color:i}=y(s=>s.color),a=y(s=>s.lvlUp.lvlName),t=y(s=>s.lvlUp.lvlUp);let r="0";t===!0&&(r="1");const l=y(s=>s.lvl[`${a}LvL`]);return o.jsxs(ty,{$mainBgColor:n,$color:i,$bgColor:e,$display:r,children:[o.jsx("span",{children:"lvl up"}),o.jsxs("p",{children:["lvl ",l]})]})}const oy=w.div`
    position: absolute;
    background-color: #929291dd;
    top: -1vw;
    left: -3vw;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display:  ${e=>e.$display};
    @media screen and (max-width: 560px) {
        top: 0vw;
        left: 0vw;
    }
`,ly=w.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 40vw;
    height: 30vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        width: 80vw;
        height: 80vw;
        border-radius: 3vw;
        padding: 3vw;
    }
`,sy=w.div`
    display: flex;
    flex-direction: column;
    background-color: ${e=>e.$mainBgColor};
    width: 100%;
    height: 100%;
    border-radius: 0.5vw;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 560px) {
        border-radius: 1.5vw;
    }
    p {
        color: ${e=>e.$fontColor};
        font-size: 2vw;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1vw;
        padding: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 6.5vw;
            padding-left: 3vw;
            padding-right: 3vw;
        }
    }
`,cy=w.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    p {
        color: ${e=>e.$fontColor};
        font-size: 4vw;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1vw;
        font-style: italic;
        @media screen and (max-width: 560px) {
            font-size: 9vw;
            padding-left: 0vw;
            padding-right: 0vw;
        }
    }
    svg {
        rotate: -90deg;
        margin-top: -1vw;

    }
`;function dy(){const{bgColor:e,mainBgColor:n,fontColor:i}=y(g=>g.mode),{color:a}=y(g=>g.color),t=y(g=>g.lvlUp.userLvlUp),[r,l]=K.useState("none");K.useEffect(()=>{if(t===!0){l("flex");const g=setTimeout(()=>{l("none")},3e3);return()=>clearTimeout(g)}},[t]);const s=y(g=>g.lvl.userLvL),c=s-1,d=window.innerWidth<=560?"9vw":"5vw";return o.jsx(oy,{$display:r,children:o.jsx(ly,{$color:a,$bgColor:e,children:o.jsxs(sy,{$mainBgColor:n,$fontColor:i,children:[o.jsx("p",{children:"Votre niveau principal vient d'augmenter"}),o.jsx("div",{}),o.jsxs(cy,{children:[o.jsxs("p",{children:["lvl ",c]}),o.jsx(rd,{color:a,width:d,height:d}),o.jsxs("p",{children:["lvl ",s]})]})]})})})}const uy=w.div`
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
        gap: 1.5vw;
        height: 100vh;
        margin: 0;
    }
`;function gy(){return o.jsxs(uy,{children:[o.jsx(dy,{}),o.jsx(ry,{}),o.jsx(ay,{}),o.jsx(V3,{})]})}const py=w.div`
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
`,my=()=>{const{fontColor:e}=y(i=>i.mode),{color:n}=y(i=>i.color);return o.jsxs(py,{$fontColor:e,$color:n,className:"error404-container",children:[o.jsx("h1",{children:"404"}),o.jsx("p",{children:"Je crois que tu t'es perdu là"}),o.jsx(he,{to:"/",children:"Retour à l'accueil"})]})},fy=w.div`
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
`,hy=w.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        margin-top: 10vw;
    }
`,Ui=w.button`
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
`;function vy(){const e=ze(),{color:n}=y(s=>s.color),{bgColor:i,fontColor:a}=y(s=>s.mode),[,t]=K.useState(n),r=s=>{t(s),e(g5(s))};let l=On();return o.jsxs(fy,{$fontColor:a,$bgColor:i,children:[o.jsx(he,{style:{backgroundColor:n},onClick:()=>l(-1),children:"Retour"}),o.jsx("h1",{style:{color:n},children:"ColorCustome"}),o.jsxs(hy,{children:[o.jsx(Ui,{$bgColor:i,onClick:()=>r("#F75D48"),style:{backgroundColor:"#F75D48"}}),o.jsx(Ui,{$bgColor:i,onClick:()=>r("#5448F7"),style:{backgroundColor:"#5448F7"}}),o.jsx(Ui,{$bgColor:i,onClick:()=>r("#FF0000"),style:{backgroundColor:"#FF0000"}}),o.jsx(Ui,{$bgColor:i,onClick:()=>r("#42e55b"),style:{backgroundColor:"#42e55b"}}),o.jsx(Ui,{$bgColor:i,onClick:()=>r("#FF4BC9"),style:{backgroundColor:"#FF4BC9"}}),o.jsx(Ui,{$bgColor:i,onClick:()=>r("#48B4F7"),style:{backgroundColor:"#48B4F7"}})]})]})}const wy="data:image/svg+xml,%3csvg%20width='29'%20height='40'%20viewBox='0%200%2029%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.5%2032.5V39.5H2.5V32.5C2.5%2025.8726%207.87258%2020.5%2014.5%2020.5C21.1274%2020.5%2026.5%2025.8726%2026.5%2032.5Z'%20fill='%23353535'%20stroke='%23353535'/%3e%3cg%20filter='url(%23filter0_d_406_112)'%3e%3cellipse%20cx='14.5'%20cy='13'%20rx='10.5'%20ry='10'%20fill='%23353535'/%3e%3cpath%20d='M24.5%2013C24.5%2018.224%2020.0461%2022.5%2014.5%2022.5C8.95388%2022.5%204.5%2018.224%204.5%2013C4.5%207.776%208.95388%203.5%2014.5%203.5C20.0461%203.5%2024.5%207.776%2024.5%2013Z'%20stroke='%23353535'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_406_112'%20x='0'%20y='0'%20width='29'%20height='28'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.47%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_406_112'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_406_112'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",jy="data:image/svg+xml,%3csvg%20width='29'%20height='40'%20viewBox='0%200%2029%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2032.5C2.5%2025.8726%207.87258%2020.5%2014.5%2020.5C21.1274%2020.5%2026.5%2025.8726%2026.5%2032.5V39.5H2.5V32.5Z'%20fill='white'%20stroke='white'/%3e%3cg%20filter='url(%23filter0_d_341_9)'%3e%3cellipse%20cx='14.5'%20cy='13'%20rx='10.5'%20ry='10'%20fill='white'/%3e%3cpath%20d='M24.5%2013C24.5%2018.224%2020.0461%2022.5%2014.5%2022.5C8.95388%2022.5%204.5%2018.224%204.5%2013C4.5%207.776%208.95388%203.5%2014.5%203.5C20.0461%203.5%2024.5%207.776%2024.5%2013Z'%20stroke='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_341_9'%20x='0'%20y='0'%20width='29'%20height='28'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_341_9'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_341_9'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Ry=w(he)`
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
`,xy=w.div`
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
`,yy=w.div`
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
`;function ky(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(s=>s.mode),{color:a}=y(s=>s.color),t=localStorage.getItem("mode")||"light",r=localStorage.getItem("userLvL")||0,l=localStorage.getItem("userName");return o.jsxs(Ry,{to:"/Profile",$mainBgColor:i,$fontColor:n,children:[o.jsx(xy,{$bgColor:e,children:o.jsx("img",{src:t==="light"?jy:wy,alt:"Profile"})}),o.jsxs(yy,{$color:a,children:[o.jsx("p",{children:l}),o.jsxs("p",{children:[o.jsx("span",{children:"lvl"}),r]})]})]})}const Py=w.div`
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
`,Cy=w.div`
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
`,Ly=w.div`
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
`;function by(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(l=>l.mode),{color:a}=y(l=>l.color),t=()=>{localStorage.setItem("userName","Invité"),window.location.reload()},r=()=>{const l=document.querySelector("input").value;localStorage.setItem("userName",l),window.location.reload()};return o.jsx(Py,{children:o.jsxs(Cy,{$mainBgColor:i,$fontColor:n,$color:a,$bgColor:e,children:[o.jsx("h1",{children:"Bienvenue"}),o.jsxs("p",{children:[o.jsx("span",{children:"Bienvenue dans l'alpha de nihongo "}),o.jsx("br",{}),"sachez que tout votre progression sera garder dans votre navigateur si vous changez de navigateur vous perdrez votre progression"]}),o.jsxs(Ly,{$mainBgColor:i,$fontColor:n,$color:a,$bgColor:e,children:[o.jsx("p",{children:"Ajouter un nom utilisateur"}),o.jsx("input",{type:"text",placeholder:"Entrez votre nom d'utilisateur"}),o.jsxs("div",{children:[o.jsx("button",{onClick:t,children:"Continuer en tant qu'invité"}),o.jsx("button",{onClick:r,children:"Valider"})]})]})]})})}const Ky=w.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: 60%;
    height: calc(100% - 2vw);
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        padding: 3vw;
        gap: 1.8vw;
        border-radius: 3vw;
        height: 50%;
    }
    p {
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        border-radius: 0.6vw;
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`,$y=w(he)`
    background-color: ${e=>e.$color};
    border-radius: 0.6vw;
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 1vw;
    padding-right: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        width: 30%;
        padding-left: 2vw;
        padding-right: 2vw;
    }
    
    p{
        background-color: ${e=>e.$color};
        color: #F7F7F2; 
        height: 70%;
        width: 100%;
        font-size: 5vw;
        font-weight: 700;
        display: flex;
        align-items: baseline;
        margin-bottom: -0.7vw;
        @media screen and (max-width: 560px) {
            font-size: 10vw;
            margin-bottom: -5vw;
        }
        span{
            font-size: 2vw;
            font-weight: 400;
            @media screen and (max-width: 560px) {
                font-size: 4vw;   
            }
        }
    }
    &:hover{
        transform: scale(1.04);
    }
`;function Ty(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(m=>m.mode),{color:a}=y(m=>m.color),t=localStorage.getItem("userName"),r=Number(y(m=>m.lvl.userLvL))||0,l=Number(y(m=>m.lvl.userXp)),s=Number(y(m=>m.lvl.userXpToNextLvL)),c=window.innerWidth<560?"3vw":"1.2vw",d="100%",g=i,p=e;return o.jsxs(Ky,{$bgColor:e,$color:a,$fontColor:n,$mainBgColor:i,children:[o.jsx("p",{children:t}),o.jsxs($y,{$color:a,to:"/lvl/user",children:[o.jsxs("p",{children:[r,o.jsx("span",{children:"lvl"})]}),o.jsx("div",{children:o.jsx(qo,{xp:l,xpToNextLevel:s,height:c,width:d,color:g,bgColor:p})})]})]})}const Ny=w.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 34%;
    height: calc(100% - 2vw);
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        padding: 3vw;
        border-radius: 3vw;
        width: 90%;
        height: 50%;
    }
`,Sy=w(he)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${e=>e.$mainBgColor};
    color: ${e=>e.$fontColor};
    border-radius: 0.5vw;
    height: 100%;
    max-width: 100%;
    width: 100%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.04);
    }
    div{
        display: flex;
        flex-direction: column;
        margin-right: 2vw;
        @media screen and (max-width: 560px) {
            margin-right: 5vw;
        }
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
        @media screen and (max-width: 560px) {
            margin-left: 5vw;
        }
    }
`;function Oy(){const{mainBgColor:e,fontColor:n,bgColor:i}=y(l=>l.mode),{color:a}=y(l=>l.color),t=window.innerWidth<560?"14vw":"5vw",r=On();return o.jsx(Ny,{$bgColor:i,children:o.jsxs(Sy,{$mainBgColor:e,$fontColor:n,onClick:()=>r(-1),children:[o.jsx(td,{width:t,height:t,color:a}),o.jsxs("div",{children:[o.jsx("span",{children:"もど"}),o.jsx("span",{children:"戻る"}),o.jsx("span",{children:"Retour"})]})]})})}const My=w.div`
    display: flex;
    gap: 0.8vw;
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    width: calc( 100% - 2vw);
    height: calc(50% - 3vw);
    @media screen and (max-width: 560px) {
        flex-wrap: wrap;
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 3vw;
        width: 100%;
    }
`,Ey=w(he)`
    display: flex;
    flex-direction: column;
    gap: 0.4vw;
    width: 50%;
    height: 100%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 49%;
        height: 32%;
        gap: 1vw;
    }
    p{
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        height: 18%;
        border-radius: 0.6vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 4vw;
            border-radius: 3vw;
        }
    }
    &:hover{
        transform: scale(1.06);
    }
`,Hy=w.div`
    background-color: ${e=>e.$mainBgColor};
    width: calc( 100% - 2vw);
    height: 80%;
    border-radius: 0.6vw;
    padding-left: 1vw;
    padding-right: 1vw;
    @media screen and (max-width: 560px) {
        width: calc( 100% - 4vw);
        border-radius: 3vw;
        padding-left: 2vw;
        padding-right: 2vw;   
    }
    p{
        margin-top: 1.9vw;
        height: 59%;
        font-size: 2.5vw;
        font-weight: 700;
        display: flex;
        align-items: baseline;
        margin-bottom: -0.5vw;
        color: ${e=>e.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 13vw;
            height: 70%;
            margin-bottom: -0.5vw;
        }
    }
    span{
        font-size: 1.2vw;
        margin-left: 0.2vw;
        color: ${e=>e.$color};
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            margin-left: 0.5vw;
        }
    }
`;function zy(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(d=>d.mode),{color:a}=y(d=>d.color),t=window.innerWidth<560?"3vw":"0.8vw",r="100%",l=a,s=e,c=[{name:"Kanji",lvl:Number(localStorage.getItem("kanjiLvL"))||0,xp:Number(localStorage.getItem("KanjiXp"))||0,xpToNextLevel:Number(localStorage.getItem("KanjiXpToNextLvL"))||100,url:"/lvl/kanji"},{name:"Hiragana",lvl:Number(localStorage.getItem("hiraganaLvL"))||0,xp:Number(localStorage.getItem("hiraganaXp"))||0,xpToNextLevel:Number(localStorage.getItem("hiraganaXpToNextLvL"))||100,url:"/lvl/hiragana"},{name:"Katakana",lvl:Number(localStorage.getItem("katakanaLvL"))||0,xp:Number(localStorage.getItem("katakanaXp"))||0,xpToNextLevel:Number(localStorage.getItem("katakanaXpToNextLvL"))||100,url:"/lvl/katakana"},{name:"Vocabulaire",lvl:Number(localStorage.getItem("vocabulaireLvL"))||0,xp:Number(localStorage.getItem("vocabulaireXp"))||0,xpToNextLevel:Number(localStorage.getItem("vocabulaireXpToNextLvL"))||100,url:"/lvl/vocabulaire"},{name:"Nombre",lvl:Number(localStorage.getItem("nombreLvL"))||0,xp:Number(localStorage.getItem("nombreXp"))||0,xpToNextLevel:Number(localStorage.getItem("nombreXpToNextLvL"))||100,url:"/lvl/nombres"}];return o.jsx(My,{$bgColor:e,children:c.map(d=>o.jsxs(Ey,{$mainBgColor:i,$fontColor:n,to:`/lvl/${d.name}`,children:[o.jsx("p",{children:d.name}),o.jsxs(Hy,{$color:a,$mainBgColor:i,$fontColor:n,children:[o.jsxs("p",{children:[d.lvl,o.jsx("span",{children:"lvl"})]}),o.jsx("div",{children:o.jsx(qo,{xp:d.xp,xpToNextLevel:d.xpToNextLevel,height:t,width:r,color:l,bgColor:s})})]})]},d.name))})}const Dy=w.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        gap: 3vw;   
    }
`,Jy=w.header`
    display: flex;
    margin-left: 3vw;
    margin-top: 1vw;
    width: 76.4vw;
    height: 12vw;
    gap: 0.8vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        width: 100vw;
        height: 70vw;
        flex-direction: column;
        align-items: center;
        gap: 3vw;
        margin-left: 0vw;
    }
`,Fy=w.section`
    display: flex;
    gap: 0.8vw;
    width: calc(100% - 6vw);
    margin-left: 3vw;
    height: 25vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        align-items: center;
        gap: 3vw;
        height: 400vw;
        width: calc( 100% );
        margin-left: 0vw;
    }
`,_y=w.div`
    width: 50% ;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 560px) {
        align-items: center;
        width: calc( 100% - 10vw);
        height: 50%;
    }
`;function By(){return o.jsxs(Dy,{children:[o.jsxs(Jy,{children:[o.jsx(Ty,{}),o.jsx(Oy,{})]}),o.jsxs(Fy,{children:[o.jsxs(_y,{children:[o.jsx(zy,{}),o.jsx("div",{children:"a"})]}),o.jsx("div",{children:"a"})]})]})}function Ay(e,n,i,a,t,r,l,s,c){let d=i,g=0;for(;e>=n;)e-=n,i=parseInt(i,10)+1,n=Iy(n,a);switch(a){case"kanji":d!==i&&(g=t);break;case"vocabulaire":d!==i&&(g=r);break;case"hiragana":d!==i&&(g=l);break;case"katakana":d!==i&&(g=s);break;case"nombre":d!==i&&(g=c);break}return{xp:e,xpToNextLevel:n,lvl:i,levelChanged:d!==i,xpForUser:g}}function Iy(e,n){switch(n){case"user":return Math.floor(e*1.35);case"kanji":return Math.floor(e*1.35);case"vocabulaire":return Math.floor(e*1.35);case"hiragana":return Math.floor(e*1.35);case"katakana":return Math.floor(e*1.35);case"nombre":return Math.floor(e*1.35);default:throw new Error("Catégorie inconnue")}}function Vy(){const e=ze(),n=y(c=>c.lvl.userXp),i=y(c=>c.xpPerLvLForUser.kanjiUserXp),a=y(c=>c.xpPerLvLForUser.vocabulaireUserXp),t=y(c=>c.xpPerLvLForUser.hiraganaUserXp),r=y(c=>c.xpPerLvLForUser.katakanaUserXp),l=y(c=>c.xpPerLvLForUser.nombreUserXp),s=(c,d)=>{const p=parseFloat(.25);return["kanji","vocabulaire","hiragana","katakana","nombre"].includes(c)?2+2*p*d:2};return(c,d,g,p)=>{if(!["user","kanji","vocabulaire","hiragana","katakana","nombre"].includes(p))throw new Error(`Catégorie inconnue: ${p}`);const u=Ay(c,d,g,p,i,a,t,r,l);typeof u.xpForUser>"u"&&(u.xpForUser=0);const j=s(p,g);u.xpForUser+=j;let x="",k=!1;switch(p){case"user":e(Vi(u.xp)),e(T5(u.xpToNextLevel)),e($5(u.lvl)),u.levelChanged&&(e(rg(!0)),console.log("lvl up"));break;case"kanji":e(Jm(u.xp)),e(S5(u.xpToNextLevel)),e(N5(u.lvl)),e(_5(u.xpForUser)),u.levelChanged&&(e(Vi(n+i)),x="Kanji",k=!0);break;case"vocabulaire":e(Fm(u.xp)),e(M5(u.xpToNextLevel)),e(O5(u.lvl)),e(B5(u.xpForUser)),u.levelChanged&&(e(Vi(n+a)),x="vocabulaire",k=!0);break;case"hiragana":e(_m(u.xp)),e(H5(u.xpToNextLevel)),e(E5(u.lvl)),e(A5(u.xpForUser)),u.levelChanged&&(e(Vi(n+t)),x="hiragana",k=!0);break;case"katakana":e(Bm(u.xp)),e(D5(u.xpToNextLevel)),e(z5(u.lvl)),e(I5(u.xpForUser)),u.levelChanged&&(e(Vi(n+r)),x="katakana",k=!0);break;case"nombre":e(Am(u.xp)),e(F5(u.xpToNextLevel)),e(J5(u.lvl)),e(V5(u.xpForUser)),u.levelChanged&&(e(Vi(n+l)),x="nombre",k=!0);break;default:throw new Error(`Catégorie inconnue: ${p}`)}k&&(e(U5(x)),e(tg(k)),setTimeout(()=>{k=!1,e(tg(k)),e(rg(!1))},5e3))}}const Uy="data:image/svg+xml,%3csvg%20width='54'%20height='37'%20viewBox='0%200%2054%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.7431%203.09874C42.2476%201.65112%2038.51%200.599057%2034.6025%200C34.1226%200.76797%2033.562%201.80091%2033.1754%202.6226C29.0216%202.06967%2024.906%202.06967%2020.8286%202.6226C20.4421%201.80091%2019.8687%200.76797%2019.3846%200C15.4728%200.599057%2011.731%201.65499%208.23543%203.10641C1.18495%2012.5369%20-0.726325%2021.7331%200.229312%2030.7988C4.90557%2033.8898%209.43742%2035.7675%2013.8928%2036.9962C14.9928%2035.6561%2015.974%2034.2315%2016.8191%2032.7302C15.2094%2032.1888%2013.6677%2031.5207%2012.2109%2030.7451C12.5974%2030.4916%2012.9754%2030.2267%2013.3407%2029.954C22.2259%2033.6326%2031.88%2033.6326%2040.6592%2029.954C41.0287%2030.2267%2041.4066%2030.4916%2041.7889%2030.7451C40.3278%2031.5245%2038.7819%2032.1926%2037.1722%2032.7341C38.0173%2034.2315%2038.9942%2035.66%2040.0985%2037C44.5582%2035.7713%2049.0942%2033.8937%2053.7705%2030.7988C54.8918%2020.2894%2051.855%2011.1776%2045.7431%203.09874ZM18.0296%2025.2235C15.3624%2025.2235%2013.175%2023.0194%2013.175%2020.3354C13.175%2017.6514%2015.3157%2015.4436%2018.0296%2015.4436C20.7437%2015.4436%2022.931%2017.6476%2022.8843%2020.3354C22.8885%2023.0194%2020.7437%2025.2235%2018.0296%2025.2235ZM35.9702%2025.2235C33.3029%2025.2235%2031.1155%2023.0194%2031.1155%2020.3354C31.1155%2017.6514%2033.2561%2015.4436%2035.9702%2015.4436C38.6841%2015.4436%2040.8715%2017.6476%2040.8248%2020.3354C40.8248%2023.0194%2038.6841%2025.2235%2035.9702%2025.2235Z'%20fill='%23353535'/%3e%3c/svg%3e",Xy="data:image/svg+xml,%3csvg%20width='54'%20height='37'%20viewBox='0%200%2054%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.7431%203.09874C42.2476%201.65112%2038.51%200.599057%2034.6025%200C34.1226%200.76797%2033.562%201.80091%2033.1754%202.6226C29.0216%202.06967%2024.906%202.06967%2020.8286%202.6226C20.4421%201.80091%2019.8687%200.76797%2019.3846%200C15.4728%200.599057%2011.731%201.65499%208.23543%203.10641C1.18495%2012.5369%20-0.726325%2021.7331%200.229312%2030.7988C4.90557%2033.8898%209.43742%2035.7675%2013.8928%2036.9962C14.9928%2035.6561%2015.974%2034.2315%2016.8191%2032.7302C15.2094%2032.1888%2013.6677%2031.5207%2012.2109%2030.7451C12.5974%2030.4916%2012.9754%2030.2267%2013.3407%2029.954C22.2259%2033.6326%2031.88%2033.6326%2040.6592%2029.954C41.0287%2030.2267%2041.4066%2030.4916%2041.7889%2030.7451C40.3278%2031.5245%2038.7819%2032.1926%2037.1722%2032.7341C38.0173%2034.2315%2038.9942%2035.66%2040.0985%2037C44.5582%2035.7713%2049.0942%2033.8937%2053.7705%2030.7988C54.8918%2020.2894%2051.855%2011.1776%2045.7431%203.09874ZM18.0296%2025.2235C15.3624%2025.2235%2013.175%2023.0194%2013.175%2020.3354C13.175%2017.6514%2015.3157%2015.4436%2018.0296%2015.4436C20.7437%2015.4436%2022.931%2017.6476%2022.8843%2020.3354C22.8885%2023.0194%2020.7437%2025.2235%2018.0296%2025.2235ZM35.9702%2025.2235C33.3029%2025.2235%2031.1155%2023.0194%2031.1155%2020.3354C31.1155%2017.6514%2033.2561%2015.4436%2035.9702%2015.4436C38.6841%2015.4436%2040.8715%2017.6476%2040.8248%2020.3354C40.8248%2023.0194%2038.6841%2025.2235%2035.9702%2025.2235Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",Wy="data:image/svg+xml,%3csvg%20width='37'%20height='37'%20viewBox='0%200%2037%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.2646%200L10.7539%200C4.0165%200%200%204.0145%200%2010.7485L0%2026.233C0%2032.9855%204.0165%2037%2010.7539%2037H26.2461C32.9834%2037%2036.9999%2032.9855%2036.9999%2026.2515V10.7485C37.0184%204.0145%2033.0019%200%2026.2646%200ZM18.5092%2025.678C14.5482%2025.678%2011.3276%2022.459%2011.3276%2018.5C11.3276%2014.541%2014.5482%2011.322%2018.5092%2011.322C22.4702%2011.322%2025.6908%2014.541%2025.6908%2018.5C25.6908%2022.459%2022.4702%2025.678%2018.5092%2025.678ZM29.4667%209.028C29.3741%209.25%2029.2446%209.4535%2029.078%209.6385C28.8929%209.805%2028.6893%209.9345%2028.4672%2010.027C28.1303%2010.1699%2027.7585%2010.2093%2027.3992%2010.1401C27.0399%2010.0709%2026.7093%209.89627%2026.4497%209.6385C26.2831%209.4535%2026.1535%209.25%2026.061%209.028C25.9659%208.80566%2025.9156%208.56678%2025.9129%208.325C25.9129%208.0845%2025.9684%207.844%2026.061%207.622C26.1535%207.3815%2026.2831%207.1965%2026.4497%207.0115C26.8754%206.586%2027.5232%206.3825%2028.1155%206.512C28.2451%206.5305%2028.3561%206.5675%2028.4672%206.623C28.5782%206.66%2028.6893%206.7155%2028.8003%206.7895C28.8929%206.845%2028.9854%206.9375%2029.078%207.0115C29.2446%207.1965%2029.3741%207.3815%2029.4667%207.622C29.5592%207.844%2029.6148%208.0845%2029.6148%208.325C29.6148%208.5655%2029.5592%208.806%2029.4667%209.028Z'%20fill='%23353535'/%3e%3c/svg%3e",Qy="data:image/svg+xml,%3csvg%20width='37'%20height='37'%20viewBox='0%200%2037%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.2646%200L10.7539%200C4.0165%200%200%204.0145%200%2010.7485L0%2026.233C0%2032.9855%204.0165%2037%2010.7539%2037H26.2461C32.9834%2037%2036.9999%2032.9855%2036.9999%2026.2515V10.7485C37.0184%204.0145%2033.0019%200%2026.2646%200ZM18.5092%2025.678C14.5482%2025.678%2011.3276%2022.459%2011.3276%2018.5C11.3276%2014.541%2014.5482%2011.322%2018.5092%2011.322C22.4702%2011.322%2025.6908%2014.541%2025.6908%2018.5C25.6908%2022.459%2022.4702%2025.678%2018.5092%2025.678ZM29.4667%209.028C29.3741%209.25%2029.2446%209.4535%2029.078%209.6385C28.8929%209.805%2028.6893%209.9345%2028.4672%2010.027C28.1303%2010.1699%2027.7585%2010.2093%2027.3992%2010.1401C27.0399%2010.0709%2026.7093%209.89627%2026.4497%209.6385C26.2831%209.4535%2026.1535%209.25%2026.061%209.028C25.9659%208.80566%2025.9156%208.56678%2025.9129%208.325C25.9129%208.0845%2025.9684%207.844%2026.061%207.622C26.1535%207.3815%2026.2831%207.1965%2026.4497%207.0115C26.8754%206.586%2027.5232%206.3825%2028.1155%206.512C28.2451%206.5305%2028.3561%206.5675%2028.4672%206.623C28.5782%206.66%2028.6893%206.7155%2028.8003%206.7895C28.8929%206.845%2028.9854%206.9375%2029.078%207.0115C29.2446%207.1965%2029.3741%207.3815%2029.4667%207.622C29.5592%207.844%2029.6148%208.0845%2029.6148%208.325C29.6148%208.5655%2029.5592%208.806%2029.4667%209.028Z'%20fill='%23F7F7F2'/%3e%3c/svg%3e",qy=w.footer`
    position: fixed;
    bottom: -20vw;
    width: 100%;
    transition: ease-in-out 0.42s, 0.58s, 1s;
    z-index: 2;
    @media screen and (max-width: 560px) {
        bottom: -100vw;
    }
`,Zy=w.button`
    background-color: ${e=>e.$color};
    color: #F7F7F2;
    border-radius: 0.8vw 0.8vw 0 0;
    width: 10vw;
    height: 2vw;
    font-size: 1.3vw;
    margin-left: 3vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    z-index: 1;
    border: 0.1vw solid ${e=>e.$bgColor};
    border-bottom: none;
    margin-bottom: -0.1vw;
    @media screen and (max-width: 560px) {
        width: 35vw;
        height: 9vw;
        font-size: 5vw;
        font-weight: 700;
        border-radius: 1.5vw 1.5vw 0 0;
    }
    &:hover {
        transform: scaleX(1.05);
    }
`,Gy=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    min-width: 100%;   
    background-color: ${e=>e.$mainBgColor};
    gap: 0.6vw;
    z-index: 1;
    border-top: 0.1vw solid ${e=>e.$bgColor};
    @media screen and (max-width: 560px) {
        height: 100vw;
        flex-direction: column;
    }
`,Yy=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    width: 90%;
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        padding-top: 3vw;
        padding-bottom: 3vw;
        padding-left: 3.5vw;
        padding-right: 3.5vw;
        border-radius: 1.5vw;
        gap: 1.5vw;
    }
`,ek=w.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 12vw;
    min-width:25%;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 30vw;
        gap: 1.5vw;
    }
    div{
        display: flex;
        gap: 0.6vw;
        width: 100%;
        height: 25%;
        @media screen and (max-width: 560px) {
            height: 35%;
            gap: 1.5vw;
        }
        button{
            background-color: ${e=>e.$color};
            color: #F7F7F2;
            border: none;
            border-radius: 0.5vw;
            font-size: 1.2vw;
            width: 33%;
            height: 100%;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            &:hover {
                transform: scale(1.1);
            }
            @media screen and (max-width: 560px) {
                font-size: 4vw;
                border-radius: 1.5vw;
            }
        }
        a{
            background-color: ${e=>e.$mainBgColor};
            color: ${e=>e.$fontColor};
            border: none;
            border-radius: 0.5vw;
            font-size: 1.2vw;
            width: 33%;
            height: 100%;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            @media screen and (max-width: 560px) {
                border-radius: 1.5vw;
            }
            &:hover {
                transform: scale(1.1);
            }
            img{
                width: 1.5vw;
                height: 2vw;
                @media screen and (max-width: 560px) {
                    width: 5vw;
                    height: 5vw;
                }
            }
        }
    }
    a{
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        height: 75%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            font-weight: 700;
            border-radius: 1.5vw;
        }
        &:hover {
            transform: scale(1.04);
        }
    }
`,nk=w.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 12vw;
    min-width: 50%;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 25vw;
        gap: 1.5vw;
    }
    a{
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        height: 48%;
        width: 49%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        &:hover {
            transform: scale(1.04);
        }
        @media screen and (max-width: 560px) {
            font-size: 4vw;
            width: 49%;
            height: 47%;
            border-radius: 1.5vw;
            font-weight: 700;
        }
    }
`,ik=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vw;
    min-width: 25%;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 25vw;
    }
    a{
        background-color: ${e=>e.$mainBgColor};
        color: ${e=>e.$fontColor};
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        &:hover {
            transform: scale(1.04);
        }
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            font-weight: 700;
            border-radius: 1.5vw;
        }
    }
`;function ak(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(c=>c.mode),{color:a}=y(c=>c.color),[t,r]=K.useState(!1),l=localStorage.getItem("mode")||"light",s=()=>{r(!t),t?window.innerWidth<560?document.querySelector("footer").style.bottom="-100vw":document.querySelector("footer").style.bottom="-20vw":document.querySelector("footer").style.bottom="0"};return o.jsxs(qy,{$fontColor:n,$mainBgColor:i,children:[o.jsx(Zy,{onClick:s,$color:a,$bgColor:e,children:"Footer"}),o.jsx(Gy,{$mainBgColor:i,$bgColor:e,children:o.jsxs(Yy,{$bgColor:e,children:[o.jsxs(ek,{$color:a,$fontColor:n,$mainBgColor:i,children:[o.jsxs("div",{children:[o.jsx("button",{onClick:s,children:"close"}),o.jsxs(he,{children:[o.jsx("img",{src:l==="light"?Uy:Xy,alt:"icon Discord"})," "]}),o.jsxs(he,{children:[" ",o.jsx("img",{src:l==="light"?Wy:Qy,alt:"icon Insta"})," "]})]}),o.jsx(he,{children:"Politique de Confidentialité"})]}),o.jsxs(nk,{$fontColor:n,$mainBgColor:i,children:[o.jsx(he,{children:"Contact"}),o.jsx(he,{children:"Contribuer"}),o.jsx(he,{children:"À propos"}),o.jsx(he,{children:"Plan du site"})]}),o.jsx(ik,{$fontColor:n,$mainBgColor:i,children:o.jsx(he,{children:"Termes de Service"})})]})})]})}const tf=({color:e,width:n="4vw",height:i="5vw"})=>o.jsx("svg",{width:n,height:i,viewBox:"0 0 67 76",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.725 32.0889V21.9556C11.725 16.1326 14.0191 10.5481 18.1028 6.43065C22.1863 2.31317 27.7249 0 33.5 0C39.2751 0 44.8136 2.31317 48.8973 6.43065C52.9809 10.5481 55.275 16.1326 55.275 21.9556V32.0889H56.95C62.5006 32.0889 67 36.6256 67 42.2222V65.8667C67 71.4633 62.5006 76 56.95 76H10.05C4.49955 76 0 71.4633 0 65.8667V42.2222C0 36.6256 4.49955 32.0889 10.05 32.0889H11.725ZM25.2092 13.596C27.408 11.3789 30.3902 10.1333 33.5 10.1333C36.6098 10.1333 39.592 11.3789 41.7909 13.596C43.9899 15.8131 45.225 18.8201 45.225 21.9556V32.0889H21.775V21.9556C21.775 18.8201 23.0103 15.8131 25.2092 13.596Z",fill:e})});tf.propTypes={color:S.string,width:S.string,height:S.string};const rf=({color:e,width:n="4vw",height:i="5vw"})=>o.jsx("svg",{width:n,height:i,viewBox:"0 0 56 63",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M20.9655 11.3807C22.7867 9.57909 25.2567 8.56694 27.8324 8.56694C30.4081 8.56694 32.8781 9.57909 34.6993 11.3807C35.5661 12.2382 36.2517 13.2407 36.7329 14.331L37.2878 15.5888C37.9007 16.9782 39.5361 17.613 40.9406 17.0066L43.4836 15.9087C44.8881 15.3023 45.5299 13.6845 44.917 12.2951L44.362 11.0373C43.4689 9.01278 42.1948 7.15032 40.5852 5.55811C37.2029 2.21222 32.6156 0.33252 27.8324 0.33252C23.0492 0.33252 18.4618 2.21222 15.0796 5.55811C11.6973 8.90398 9.79719 13.442 9.79719 18.1738V26.4082H8.40987C3.8127 26.4082 0.0859375 30.0947 0.0859375 34.6426V53.8563C0.0859375 58.4041 3.8127 62.0907 8.40987 62.0907H47.2549C51.8522 62.0907 55.5788 58.4041 55.5788 53.8563V34.6426C55.5788 30.0947 51.8522 26.4082 47.2549 26.4082H18.1211V18.1738C18.1211 15.6259 19.1443 13.1823 20.9655 11.3807Z",fill:e})});rf.propTypes={color:S.string,width:S.string,height:S.string};const tk=w.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin-bottom: 3vw;
    @media screen and (max-width: 560px) {
        gap: 2vw;
    }
`,rk=w.div`
    padding: 1vw;
    background-color: ${e=>e.$bgColor};
    border-radius: 0.8vw;
    margin-top: 1vw;
    height: 3vw;
    width: 30vw;
    p{
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.6vw;
        font-size: 1.5vw;
        color:${e=>e.$fontColor};
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            color: ${e=>e.$color};
            margin-left: 0.3vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: calc(90% - 6vw);
        height: 15vw;
        border-radius: 3vw;
        padding: 3vw;
        margin-top: 20vw;
        p{
            font-size: 5vw;
            height: 100%;
            border-radius: 2vw;
            span{
                margin-left: 1vw;
            }
        }
    }
`,ok=w.button`
    position: fixed;
    top: 1vw;
    left: 3vw;
    background-color: ${e=>e.$color};
    border: 0.1vw solid ${e=>e.$mainBgColor};
    color: #fff;
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    z-index: 1;
    img{
        width: 3.3vw;
        height: 3.3vw;
    }
    &:hover{
        transform: scale(1.06);
    }
    @media screen and (max-width: 560px) {
        top: 3vw;
        left: 3.1vw;
        width: 14vw;
        height: 12vw;
        border-radius: 3vw;
        img{
            width: 9vw;
            height: 9vw;
        }
    }
`,lk=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        p{
            font-size: 1vw;
            color: #080801;
        }
    }
    @media screen and (max-width: 560px) {
        gap: 2vw;
        margin-top: 0vw;
    }
`,sk=w.div`
    position: absolute;
    &::before{
        content: '';
        position: absolute;
        min-width: 42.6vw;
        min-height: 25vw;
        background-color: rgba(0, 0, 0, 0.661);
        border-radius: 0.6vw;
    }
    svg{
        position: absolute;
        top: -3.6vw !important;
        left: -1.8vw;
    }
    @media screen and (max-width: 560px) {
        &::before{
            min-width: 84vw;
            min-height: 60vw;
            border-radius: 3vw;
        }
        svg{
            top: -8vw !important;
            left: -5vw;
        }
    }
`,ck=w.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    width: 47.2%;
    height: 25vw;
    border-radius: 0.8vw;
    background-color: ${e=>e.$bgColor};
    padding: 1vw;
    position: relative; 
    color: ${e=>e.$fontColor};
    svg{
        position: absolute;
        top: 2vw;
        right: 2.2vw;
    }
    p{
        font-size: 1.5vw;
        color: ${e=>e.$fontColor};
        background-color: ${e=>e.$mainBgColor};
        border-radius: 0.6vw;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            margin-right: 0.3vw;
            font-weight: 500;
            font-size: 2vw;
            margin-bottom: -2.1vw;
            color: ${e=>e.$color};
        }
    }
    p:nth-child(1){
        font-size: 5vw;
        color: ${e=>e.$color};
        font-weight: 700;
    }
    p:nth-child(3){
        height: 20%;
        color: ${e=>e.$fontColor};
    }
    p:nth-child(2){
        height: 20%;
        color: ${e=>e.$fontColor};
    }
    @media screen and (max-width: 560px) {
        width: 100%;  
        height: 60vw;
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 3vw;
        svg{
            top: 6vw;
            right: 6.2vw;
        }
        p{
            border-radius: 3vw;
            span{
                font-size: 8vw;
                margin-right: 1.5vw;
                margin-bottom: -4.5vw;
            }
        }
        p:nth-child(1){
            font-size: 15vw;
        }
        p:nth-child(3){
            font-size: 4vw;
        }
        p:nth-child(2){
            font-size: 4vw;
        }
    }
`,dk=(e,n,i,a,t,r,l,s)=>{const c=window.innerWidth<560?"6vw":"2vw",d=window.innerWidth<560?"12vw":"5vw";return o.jsxs(ck,{$fontColor:r,$mainBgColor:l,$bgColor:s,$color:a,children:[o.jsxs("p",{children:[o.jsx("span",{children:"lvl"}),e]}),t&&o.jsx("p",{children:t.bonus}),location.pathname!=="/lvl/user"&&o.jsx("p",{children:"+25% de user// xp"}),e<=i?o.jsx(rf,{width:c,height:c,color:a}):o.jsx(sk,{children:o.jsx(tf,{width:d,height:d,color:a})})]},e)};function uk(){const{bgColor:e,fontColor:n,mainBgColor:i}=y(d=>d.mode),{color:a}=y(d=>d.color),t=On();let r=0,l="";switch(location.pathname){case"/lvl/user":case"/Nihongo-V2/lvl/user":r=Number(localStorage.getItem("userLvL")),l="user";break;case"/lvl/Kanji":case"/Nihongo-V2/lvl/Kanji":r=Number(localStorage.getItem("kanjiLvL")),l="kanji";break;case"/lvl/Hiragana":case"/Nihongo-V2/lvl/Hiragana":r=Number(localStorage.getItem("hiraganaLvL")),l="hiragana";break;case"/lvl/Katakana":case"/Nihongo-V2/lvl/Katakana":r=Number(localStorage.getItem("katakanaLvL")),l="katakana";break;case"/lvl/Vocabulaire":case"/Nihongo-V2/lvl/Vocabulaire":r=Number(localStorage.getItem("vocabulaireLvL")),l="vocabulaire";break;case"/lvl/Nombre":case"/Nihongo-V2/lvl/Nombre":r=Number(localStorage.getItem("nombreLvL")),l="nombre";break;default:r=0,l="";break}const s=[{category:"user",features:[{lvl:5,bonus:"Débloquer personnalisation de couleur"}]},{category:"all",features:[{lvl:3,bonus:"Débloquer la difficulté Intermédiaire"},{lvl:5,bonus:"+10% xp"},{lvl:7,bonus:"Débloquer la difficulté Confirmée"}]}],c=localStorage.getItem("mode")||"light";return o.jsxs(tk,{children:[o.jsx(rk,{$fontColor:n,$mainBgColor:i,$bgColor:e,$color:a,children:o.jsxs("p",{children:["Tableau de niveau pour ",o.jsx("span",{children:l})]})}),o.jsx(ok,{$mainBgColor:i,$color:a,onClick:()=>t(-1),children:o.jsx("img",{src:c==="light"?At:od,alt:"Close"})}),o.jsx(lk,{$fontColor:n,$mainBgColor:i,$bgColor:e,$color:a,children:Array.from({length:100},(d,g)=>{var m,u;const p=location.pathname==="/lvl/user"?(m=s.find(j=>j.category==="user"))==null?void 0:m.features.find(j=>j.lvl===g+1):(u=s.find(j=>j.category==="all"))==null?void 0:u.features.find(j=>j.lvl===g+1);return dk(g+1,"",r,a,p,n,i,e)})})]})}function gk(){const e=ce(),n=!e.pathname.startsWith("/choisir-ses/")&&!e.pathname.startsWith("/Exercices/")&&!e.pathname.startsWith("/Profile")&&!e.pathname.startsWith("/lvl/"),i=!e.pathname.startsWith("/Exercices/"),a=!e.pathname.startsWith("/Profile")&&!e.pathname.startsWith("/Exercices/")&&!e.pathname.startsWith("/lvl/"),r=!localStorage.getItem("userName"),l=y(T=>T.lvl.userXp),s=y(T=>T.lvl.userXpToNextLvL),c=y(T=>T.lvl.userLvL),d=y(T=>T.lvl.KanjiXp),g=y(T=>T.lvl.KanjiXpToNextLvL),p=y(T=>T.lvl.KanjiLvL),m=y(T=>T.lvl.hiraganaXp),u=y(T=>T.lvl.hiraganaXpToNextLvL),j=y(T=>T.lvl.hiraganaLvL),x=y(T=>T.lvl.katakanaXp),k=y(T=>T.lvl.katakanaXpToNextLvL),f=y(T=>T.lvl.katakanaLvL),h=y(T=>T.lvl.vocabulaireXp),v=y(T=>T.lvl.vocabulaireXpToNextLvL),R=y(T=>T.lvl.vocabulaireLvL),P=y(T=>T.lvl.nombreXp),L=y(T=>T.lvl.nombreXpToNextLvL),C=y(T=>T.lvl.nombreLvL),b=Vy();return K.useEffect(()=>{b(l,s,c,"user"),b(d,g,p,"kanji"),b(m,u,j,"hiragana"),b(x,k,f,"katakana"),b(h,v,R,"vocabulaire"),b(P,L,C,"nombre")},[b,l,s,c,d,g,p,m,u,j,x,k,f,h,v,R,P,L,C]),o.jsxs("div",{children:[n&&o.jsx(fw,{}),i&&o.jsx(tj,{}),i&&o.jsx(aj,{}),a&&o.jsx(ky,{}),r&&o.jsx(by,{}),o.jsxs(Rv,{location:e,children:[o.jsx(Be,{path:"/",element:o.jsx($j,{})}),o.jsx(Be,{path:"/kanji",element:o.jsx(ex,{})}),o.jsx(Be,{path:"/vocabulaire",element:o.jsx(ix,{})}),o.jsx(Be,{path:"/katakana",element:o.jsx(rx,{})}),o.jsx(Be,{path:"/hiragana",element:o.jsx(lx,{})}),o.jsx(Be,{path:"/nombres",element:o.jsx(dx,{})}),o.jsx(Be,{path:"/dictionnaire/*",element:o.jsx(o3,{})}),o.jsx(Be,{path:"/choisir-ses/*",element:o.jsx(h3,{})}),o.jsx(Be,{path:"/color",element:o.jsx(vy,{})}),o.jsx(Be,{path:"/exercices/*",element:o.jsx(gy,{})}),o.jsx(Be,{path:"*",element:o.jsx(my,{})}),o.jsx(Be,{path:"/Profile",element:o.jsx(By,{})}),o.jsx(Be,{path:"/lvl/*",element:o.jsx(uk,{})})]}),i&&o.jsx(ak,{})]})}const pk="/Nihongo-V2/",mk=Jl.createRoot(document.getElementById("root"));mk.render(o.jsx(Zv,{store:X5,children:o.jsx(bv,{basename:pk,children:o.jsx(gk,{})})}));
