const __vite__fileDeps=["assets/HomeView-DYTTHpHI.js","assets/Formulario-K3jgwJP1.js","assets/Formulario-DpPPRQo3.css","assets/BlogView-CyIS7Hsd.js","assets/BlogView-BkcLXQoF.css","assets/LoginView-CK4WU16W.js","assets/LoginView-B_SY1GJM.css","assets/AdminView-tUktn7fd.js","assets/AdminView-Bb7-9feM.css","assets/Presupuesto-DykeL_OP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ve={},ks=[],Dt=()=>{},MT=()=>!1,bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ju=t=>t.startsWith("onUpdate:"),$e=Object.assign,$u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},LT=Object.prototype.hasOwnProperty,Pe=(t,e)=>LT.call(t,e),re=Array.isArray,Os=t=>oi(t)==="[object Map]",cs=t=>oi(t)==="[object Set]",hf=t=>oi(t)==="[object Date]",UT=t=>oi(t)==="[object RegExp]",de=t=>typeof t=="function",Ke=t=>typeof t=="string",Un=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Hu=t=>(Me(t)||de(t))&&de(t.then)&&de(t.catch),Hg=Object.prototype.toString,oi=t=>Hg.call(t),FT=t=>oi(t).slice(8,-1),qg=t=>oi(t)==="[object Object]",qu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},BT=/-(\w)/g,kt=mc(t=>t.replace(BT,(e,n)=>n?n.toUpperCase():"")),jT=/\B([A-Z])/g,Kt=mc(t=>t.replace(jT,"-$1").toLowerCase()),Ao=mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hi=mc(t=>t?`on${Ao(t)}`:""),cn=(t,e)=>!Object.is(t,e),Ds=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Kg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},La=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ua=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let df;const zg=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$T="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",HT=gc($T);function Ro(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?WT(r):Ro(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Me(t))return t}const qT=/;(?![^(]*\))/g,KT=/:([^]+)/,zT=/\/\*[^]*?\*\//g;function WT(t){const e={};return t.replace(zT,"").split(qT).forEach(n=>{if(n){const r=n.split(KT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qr(t){let e="";if(Ke(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Qr(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function GT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=Qr(e)),n&&(t.style=Ro(n)),t}const QT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XT=gc(QT);function Wg(t){return!!t||t===""}function YT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=vr(t[r],e[r]);return n}function vr(t,e){if(t===e)return!0;let n=hf(t),r=hf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Un(t),r=Un(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?YT(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!vr(t[o],e[o]))return!1}}return String(t)===String(e)}function _c(t,e){return t.findIndex(n=>vr(n,e))}const Fa=t=>Ke(t)?t:t==null?"":re(t)||Me(t)&&(t.toString===Hg||!de(t.toString))?JSON.stringify(t,Gg,2):String(t),Gg=(t,e)=>e&&e.__v_isRef?Gg(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ml(r,i)+" =>"]=s,n),{})}:cs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ml(n))}:Un(e)?ml(e):Me(e)&&!re(e)&&!qg(e)?String(e):e,ml=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Ku{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function JT(t){return new Ku(t)}function Qg(t,e=$t){e&&e.active&&e.effects.push(t)}function Xg(){return $t}function ZT(t){$t&&$t.cleanups.push(t)}let Hr;class qs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ar();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ew(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Rr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=dr,n=Hr;try{return dr=!0,Hr=this,this._runnings++,ff(this),this.fn()}finally{pf(this),this._runnings--,Hr=n,dr=e}}stop(){this.active&&(ff(this),pf(this),this.onStop&&this.onStop(),this.active=!1)}}function ew(t){return t.value}function ff(t){t._trackId++,t._depsLength=0}function pf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Yg(t.deps[e],t);t.deps.length=t._depsLength}}function Yg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function tw(t,e){t.effect instanceof qs&&(t=t.effect.fn);const n=new qs(t,Dt,()=>{n.dirty&&n.run()});e&&($e(n,e),e.scope&&Qg(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function nw(t){t.effect.stop()}let dr=!0,Wl=0;const Jg=[];function Ar(){Jg.push(dr),dr=!1}function Rr(){const t=Jg.pop();dr=t===void 0?!0:t}function zu(){Wl++}function Wu(){for(Wl--;!Wl&&Gl.length;)Gl.shift()()}function Zg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Yg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gl=[];function em(t,e,n){zu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Gl.push(r.scheduler)))}Wu()}const tm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ba=new WeakMap,qr=Symbol(""),Ql=Symbol("");function Ut(t,e,n){if(dr&&Hr){let r=Ba.get(t);r||Ba.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=tm(()=>r.delete(n))),Zg(Hr,s)}}function Nn(t,e,n,r,s,i){const o=Ba.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&re(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!Un(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":re(t)?qu(n)&&c.push(o.get("length")):(c.push(o.get(qr)),Os(t)&&c.push(o.get(Ql)));break;case"delete":re(t)||(c.push(o.get(qr)),Os(t)&&c.push(o.get(Ql)));break;case"set":Os(t)&&c.push(o.get(qr));break}zu();for(const l of c)l&&em(l,4);Wu()}function rw(t,e){const n=Ba.get(t);return n&&n.get(e)}const sw=gc("__proto__,__v_isRef,__isVue"),nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un)),gf=iw();function iw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)Ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ar(),zu();const r=Se(this)[e].apply(this,n);return Wu(),Rr(),r}}),t}function ow(t){Un(t)||(t=String(t));const e=Se(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class rm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lm:cm:i?am:om).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){if(o&&Pe(gf,n))return Reflect.get(gf,n,r);if(n==="hasOwnProperty")return ow}const c=Reflect.get(e,n,r);return(Un(n)?nm.has(n):sw(n))||(s||Ut(e,"get",n),i)?c:pt(c)?o&&qu(n)?c:c.value:Me(c)?s?Xu(c):So(c):c}}class sm extends rm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ks(i);if(!ro(r)&&!Ks(r)&&(i=Se(i),r=Se(r)),!re(e)&&pt(i)&&!pt(r))return l?!1:(i.value=r,!0)}const o=re(e)&&qu(n)?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,s);return e===Se(s)&&(o?cn(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Un(n)||!nm.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",re(e)?"length":qr),Reflect.ownKeys(e)}}class im extends rm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const aw=new sm,cw=new im,lw=new sm(!0),uw=new im(!0),Gu=t=>t,yc=t=>Reflect.getPrototypeOf(t);function sa(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(cn(e,i)&&Ut(s,"get",e),Ut(s,"get",i));const{has:o}=yc(s),c=r?Gu:n?Ju:so;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function ia(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(cn(t,s)&&Ut(r,"has",t),Ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function oa(t,e=!1){return t=t.__v_raw,!e&&Ut(Se(t),"iterate",qr),Reflect.get(t,"size",t)}function mf(t){t=Se(t);const e=Se(this);return yc(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function _f(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=yc(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?cn(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function yf(t){const e=Se(this),{has:n,get:r}=yc(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Nn(e,"delete",t,void 0),i}function vf(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function aa(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Se(o),l=e?Gu:t?Ju:so;return!t&&Ut(c,"iterate",qr),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function ca(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Os(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Gu:e?Ju:so;return!e&&Ut(i,"iterate",l?Ql:qr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hw(){const t={get(i){return sa(this,i)},get size(){return oa(this)},has:ia,add:mf,set:_f,delete:yf,clear:vf,forEach:aa(!1,!1)},e={get(i){return sa(this,i,!1,!0)},get size(){return oa(this)},has:ia,add:mf,set:_f,delete:yf,clear:vf,forEach:aa(!1,!0)},n={get(i){return sa(this,i,!0)},get size(){return oa(this,!0)},has(i){return ia.call(this,i,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:aa(!0,!1)},r={get(i){return sa(this,i,!0,!0)},get size(){return oa(this,!0)},has(i){return ia.call(this,i,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ca(i,!1,!1),n[i]=ca(i,!0,!1),e[i]=ca(i,!1,!0),r[i]=ca(i,!0,!0)}),[t,n,e,r]}const[dw,fw,pw,gw]=hw();function vc(t,e){const n=e?t?gw:pw:t?fw:dw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const mw={get:vc(!1,!1)},_w={get:vc(!1,!0)},yw={get:vc(!0,!1)},vw={get:vc(!0,!0)},om=new WeakMap,am=new WeakMap,cm=new WeakMap,lm=new WeakMap;function Ew(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tw(t){return t.__v_skip||!Object.isExtensible(t)?0:Ew(FT(t))}function So(t){return Ks(t)?t:Ec(t,!1,aw,mw,om)}function Qu(t){return Ec(t,!1,lw,_w,am)}function Xu(t){return Ec(t,!0,cw,yw,cm)}function ww(t){return Ec(t,!0,uw,vw,lm)}function Ec(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Tw(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function xs(t){return Ks(t)?xs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function ro(t){return!!(t&&t.__v_isShallow)}function Yu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function um(t){return Object.isExtensible(t)&&Kg(t,"__v_skip",!0),t}const so=t=>Me(t)?So(t):t,Ju=t=>Me(t)?Xu(t):t;class hm{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qs(()=>e(this._value),()=>Vs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&cn(e._value,e._value=e.effect.run())&&Vs(e,4),Zu(e),e.effect._dirtyLevel>=2&&Vs(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Iw(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Dt):(r=t.get,s=t.set),new hm(r,s,i||!s,n)}function Zu(t){var e;dr&&Hr&&(t=Se(t),Zg(Hr,(e=t.dep)!=null?e:t.dep=tm(()=>t.dep=void 0,t instanceof hm?t:void 0)))}function Vs(t,e=4,n){t=Se(t);const r=t.dep;r&&em(r,e)}function pt(t){return!!(t&&t.__v_isRef===!0)}function Tt(t){return fm(t,!1)}function dm(t){return fm(t,!0)}function fm(t,e){return pt(t)?t:new bw(t,e)}class bw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:so(e)}get value(){return Zu(this),this._value}set value(e){const n=this.__v_isShallow||ro(e)||Ks(e);e=n?e:Se(e),cn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:so(e),Vs(this,4))}}function Aw(t){Vs(t,4)}function lt(t){return pt(t)?t.value:t}function Rw(t){return de(t)?t():lt(t)}const Sw={get:(t,e,n)=>lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pt(s)&&!pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function eh(t){return xs(t)?t:new Proxy(t,Sw)}class Cw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Zu(this),()=>Vs(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function pm(t){return new Cw(t)}function Pw(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=gm(t,n);return e}class kw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rw(Se(this._object),this._key)}}class Ow{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Nw(t,e,n){return pt(t)?t:de(t)?new Ow(t):Me(t)&&arguments.length>1?gm(t,e,n):Tt(t)}function gm(t,e,n){const r=t[e];return pt(r)?r:new kw(t,e,n)}const Dw={GET:"get",HAS:"has",ITERATE:"iterate"},xw={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vw(t,e){}const Mw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Lw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Dn(t,e,n,r){try{return r?t(...r):t()}catch(s){ls(s,e,n)}}function Gt(t,e,n,r){if(de(t)){const s=Dn(t,e,n,r);return s&&Hu(s)&&s.catch(i=>{ls(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function ls(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ar(),Dn(l,null,10,[t,o,c]),Rr();return}}Uw(t,n,s,r)}function Uw(t,e,n,r=!0){console.error(t)}let io=!1,Xl=!1;const wt=[];let pn=0;const Ms=[];let tr=null,Lr=0;const mm=Promise.resolve();let th=null;function Co(t){const e=th||mm;return t?e.then(this?t.bind(this):t):e}function Fw(t){let e=pn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=oo(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Tc(t){(!wt.length||!wt.includes(t,io&&t.allowRecurse?pn+1:pn))&&(t.id==null?wt.push(t):wt.splice(Fw(t.id),0,t),_m())}function _m(){!io&&!Xl&&(Xl=!0,th=mm.then(ym))}function Bw(t){const e=wt.indexOf(t);e>pn&&wt.splice(e,1)}function ja(t){re(t)?Ms.push(...t):(!tr||!tr.includes(t,t.allowRecurse?Lr+1:Lr))&&Ms.push(t),_m()}function Ef(t,e,n=io?pn+1:0){for(;n<wt.length;n++){const r=wt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r()}}}function $a(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,r)=>oo(n)-oo(r));if(Ms.length=0,tr){tr.push(...e);return}for(tr=e,Lr=0;Lr<tr.length;Lr++)tr[Lr]();tr=null,Lr=0}}const oo=t=>t.id==null?1/0:t.id,jw=(t,e)=>{const n=oo(t)-oo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ym(t){Xl=!1,io=!0,wt.sort(jw);try{for(pn=0;pn<wt.length;pn++){const e=wt[pn];e&&e.active!==!1&&Dn(e,null,14)}}finally{pn=0,wt.length=0,$a(),io=!1,th=null,(wt.length||Ms.length)&&ym()}}let Is,la=[];function vm(t,e){var n,r;Is=t,Is?(Is.enabled=!0,la.forEach(({event:s,args:i})=>Is.emit(s,...i)),la=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{vm(i,e)}),setTimeout(()=>{Is||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,la=[])},3e3)):la=[]}function $w(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[d]||Ve;g&&(s=n.map(v=>Ke(v)?v.trim():v)),p&&(s=n.map(La))}let c,l=r[c=Hi(e)]||r[c=Hi(kt(e))];!l&&i&&(l=r[c=Hi(Kt(e))]),l&&Gt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Gt(u,t,6,s)}}function Em(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=u=>{const d=Em(u,e,!0);d&&(c=!0,$e(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Me(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):$e(o,i),Me(t)&&r.set(t,o),o)}function wc(t,e){return!t||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Kt(e))||Pe(t,e))}let et=null,Ic=null;function ao(t){const e=et;return et=t,Ic=t&&t.type.__scopeId||null,e}function Hw(t){Ic=t}function qw(){Ic=null}const Kw=t=>Ht;function Ht(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&iu(-1);const i=ao(e);let o;try{o=t(...s)}finally{ao(i),r._d&&iu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:v,ctx:C,inheritAttrs:O}=t,N=ao(t);let U,k;try{if(n.shapeFlag&4){const P=s||r,M=P;U=qt(u.call(M,P,d,p,v,g,C)),k=c}else{const P=e;U=qt(P.length>1?P(p,{attrs:c,slots:o,emit:l}):P(p,null)),k=e.props?c:Ww(c)}}catch(P){zi.length=0,ls(P,t,1),U=we(dt)}let S=U;if(k&&O!==!1){const P=Object.keys(k),{shapeFlag:M}=S;P.length&&M&7&&(i&&P.some(ju)&&(k=Gw(k,i)),S=ln(S,k,!1,!0))}return n.dirs&&(S=ln(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),U=S,ao(N),U}function zw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Er(s)){if(s.type!==dt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Ww=t=>{let e;for(const n in t)(n==="class"||n==="style"||bo(n))&&((e||(e={}))[n]=t[n]);return e},Gw=(t,e)=>{const n={};for(const r in t)(!ju(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Qw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Tf(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!wc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Tf(r,o,u):!0:!!o;return!1}function Tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wc(n,i))return!0}return!1}function nh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rh="components",Xw="directives";function sh(t,e){return ih(rh,t,!0,e)||t}const Tm=Symbol.for("v-ndc");function Yw(t){return Ke(t)?ih(rh,t,!1)||t:t||Tm}function Jw(t){return ih(Xw,t)}function ih(t,e,n=!0,r=!1){const s=et||nt;if(s){const i=s.type;if(t===rh){const c=uu(i,!1);if(c&&(c===e||c===kt(e)||c===Ao(kt(e))))return i}const o=wf(s[t]||i[t],e)||wf(s.appContext[t],e);return!o&&r?i:o}}function wf(t,e){return t&&(t[e]||t[kt(e)]||t[Ao(kt(e))])}const wm=t=>t.__isSuspense;let Yl=0;const Zw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)tI(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}nI(t,e,n,r,s,o,c,l,u)}},hydrate:rI,create:oh,normalize:sI},eI=Zw;function co(t,e){const n=t.props&&t.props[e];de(n)&&n()}function tI(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:d}}=l,p=d("div"),g=t.suspense=oh(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(co(t,"onPending"),co(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Ls(g,t.ssFallback)):g.resolve(!1,!0)}function nI(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:d}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,v=e.ssFallback,{activeBranch:C,pendingBranch:O,isInFallback:N,isHydrating:U}=p;if(O)p.pendingBranch=g,on(g,O)?(l(O,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():N&&(U||(l(C,v,n,r,s,null,i,o,c),Ls(p,v)))):(p.pendingId=Yl++,U?(p.isHydrating=!1,p.activeBranch=O):u(O,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=d("div"),N?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(C,v,n,r,s,null,i,o,c),Ls(p,v))):C&&on(g,C)?(l(C,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(C&&on(g,C))l(C,g,n,r,s,p,i,o,c),Ls(p,g);else if(co(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=Yl++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:k,pendingId:S}=p;k>0?setTimeout(()=>{p.pendingId===S&&p.fallback(v)},k):k===0&&p.fallback(v)}}function oh(t,e,n,r,s,i,o,c,l,u,d=!1){const{p,m:g,um:v,n:C,o:{parentNode:O,remove:N}}=u;let U;const k=iI(t);k&&e&&e.pendingBranch&&(U=e.pendingId,e.deps++);const S=t.props?Ua(t.props.timeout):void 0,P=i,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Yl++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:!1,effects:[],resolve(V=!1,I=!1){const{vnode:m,activeBranch:y,pendingBranch:E,pendingId:R,effects:b,parentComponent:T,container:ve}=M;let be=!1;M.isHydrating?M.isHydrating=!1:V||(be=y&&E.transition&&E.transition.mode==="out-in",be&&(y.transition.afterLeave=()=>{R===M.pendingId&&(g(E,ve,i===P?C(y):i,0),ja(b))}),y&&(O(y.el)!==M.hiddenContainer&&(i=C(y)),v(y,T,M,!0)),be||g(E,ve,i,0)),Ls(M,E),M.pendingBranch=null,M.isInFallback=!1;let te=M.parent,le=!1;for(;te;){if(te.pendingBranch){te.effects.push(...b),le=!0;break}te=te.parent}!le&&!be&&ja(b),M.effects=[],k&&e&&e.pendingBranch&&U===e.pendingId&&(e.deps--,e.deps===0&&!I&&e.resolve()),co(m,"onResolve")},fallback(V){if(!M.pendingBranch)return;const{vnode:I,activeBranch:m,parentComponent:y,container:E,namespace:R}=M;co(I,"onFallback");const b=C(m),T=()=>{M.isInFallback&&(p(null,V,E,b,y,null,R,c,l),Ls(M,V))},ve=V.transition&&V.transition.mode==="out-in";ve&&(m.transition.afterLeave=T),M.isInFallback=!0,v(m,y,null,!0),ve||T()},move(V,I,m){M.activeBranch&&g(M.activeBranch,V,I,m),M.container=V},next(){return M.activeBranch&&C(M.activeBranch)},registerDep(V,I){const m=!!M.pendingBranch;m&&M.deps++;const y=V.vnode.el;V.asyncDep.catch(E=>{ls(E,V,0)}).then(E=>{if(V.isUnmounted||M.isUnmounted||M.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:R}=V;cu(V,E,!1),y&&(R.el=y);const b=!y&&V.subTree.el;I(V,R,O(y||V.subTree.el),y?null:C(V.subTree),M,o,l),b&&N(b),nh(V,R.el),m&&--M.deps===0&&M.resolve()})},unmount(V,I){M.isUnmounted=!0,M.activeBranch&&v(M.activeBranch,n,V,I),M.pendingBranch&&v(M.pendingBranch,n,V,I)}};return M}function rI(t,e,n,r,s,i,o,c,l){const u=e.suspense=oh(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),d=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),d}function sI(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=If(r?n.default:n),t.ssFallback=r?If(n.fallback):we(dt)}function If(t){let e;if(de(t)){const n=Jr&&t._c;n&&(t._d=!1,Ze()),t=t(),n&&(t._d=!0,e=xt,s_())}return re(t)&&(t=zw(t)),t=qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Im(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):ja(t)}function Ls(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,nh(r,s))}function iI(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const bm=Symbol.for("v-scx"),Am=()=>Vt(bm);function ah(t,e){return Po(t,null,e)}function Rm(t,e){return Po(t,null,{flush:"post"})}function Sm(t,e){return Po(t,null,{flush:"sync"})}const ua={};function Us(t,e,n){return Po(t,e,n)}function Po(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ve){if(e&&i){const V=e;e=(...I)=>{V(...I),M()}}const l=nt,u=V=>r===!0?V:Fr(V,r===!1?1:void 0);let d,p=!1,g=!1;if(pt(t)?(d=()=>t.value,p=ro(t)):xs(t)?(d=()=>u(t),p=!0):re(t)?(g=!0,p=t.some(V=>xs(V)||ro(V)),d=()=>t.map(V=>{if(pt(V))return V.value;if(xs(V))return u(V);if(de(V))return Dn(V,l,2)})):de(t)?e?d=()=>Dn(t,l,2):d=()=>(v&&v(),Gt(t,l,3,[C])):d=Dt,e&&r){const V=d;d=()=>Fr(V())}let v,C=V=>{v=S.onStop=()=>{Dn(V,l,4),v=S.onStop=void 0}},O;if(Oo)if(C=Dt,e?n&&Gt(e,l,3,[d(),g?[]:void 0,C]):d(),s==="sync"){const V=Am();O=V.__watcherHandles||(V.__watcherHandles=[])}else return Dt;let N=g?new Array(t.length).fill(ua):ua;const U=()=>{if(!(!S.active||!S.dirty))if(e){const V=S.run();(r||p||(g?V.some((I,m)=>cn(I,N[m])):cn(V,N)))&&(v&&v(),Gt(e,l,3,[V,N===ua?void 0:g&&N[0]===ua?[]:N,C]),N=V)}else S.run()};U.allowRecurse=!!e;let k;s==="sync"?k=U:s==="post"?k=()=>ct(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),k=()=>Tc(U));const S=new qs(d,Dt,k),P=Xg(),M=()=>{S.stop(),P&&$u(P.effects,S)};return e?n?U():N=S.run():s==="post"?ct(S.run.bind(S),l&&l.suspense):S.run(),O&&O.push(M),M}function oI(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Cm(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Zr(this),c=Po(s,i.bind(r),n);return o(),c}function Cm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Fr(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))Fr(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)Fr(t[r],e,n);else if(cs(t)||Os(t))t.forEach(r=>{Fr(r,e,n)});else if(qg(t))for(const r in t)Fr(t[r],e,n);return t}function aI(t,e){if(et===null)return t;const n=Cc(et)||et.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Fr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function fn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Ar(),Gt(l,n,8,[t.el,c,t,e]),Rr())}}const nr=Symbol("_leaveCb"),ha=Symbol("_enterCb");function ch(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hn(()=>{t.isMounted=!0}),Sc(()=>{t.isUnmounting=!0}),t}const Jt=[Function,Array],lh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},cI={name:"BaseTransition",props:lh,setup(t,{slots:e}){const n=qn(),r=ch();return()=>{const s=e.default&&bc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==dt){i=g;break}}const o=Se(t),{mode:c}=o;if(r.isLeaving)return _l(i);const l=bf(i);if(!l)return _l(i);const u=zs(l,o,r,n);Xr(l,u);const d=n.subTree,p=d&&bf(d);if(p&&p.type!==dt&&!on(l,p)){const g=zs(p,o,r,n);if(Xr(p,g),c==="out-in"&&l.type!==dt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},_l(i);c==="in-out"&&l.type!==dt&&(g.delayLeave=(v,C,O)=>{const N=km(r,p);N[String(p.key)]=p,v[nr]=()=>{C(),v[nr]=void 0,delete u.delayedLeave},u.delayedLeave=O})}return i}}},Pm=cI;function km(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:v,onLeaveCancelled:C,onBeforeAppear:O,onAppear:N,onAfterAppear:U,onAppearCancelled:k}=e,S=String(t.key),P=km(n,t),M=(m,y)=>{m&&Gt(m,r,9,y)},V=(m,y)=>{const E=y[1];M(m,y),re(m)?m.every(R=>R.length<=1)&&E():m.length<=1&&E()},I={mode:i,persisted:o,beforeEnter(m){let y=c;if(!n.isMounted)if(s)y=O||c;else return;m[nr]&&m[nr](!0);const E=P[S];E&&on(t,E)&&E.el[nr]&&E.el[nr](),M(y,[m])},enter(m){let y=l,E=u,R=d;if(!n.isMounted)if(s)y=N||l,E=U||u,R=k||d;else return;let b=!1;const T=m[ha]=ve=>{b||(b=!0,ve?M(R,[m]):M(E,[m]),I.delayedLeave&&I.delayedLeave(),m[ha]=void 0)};y?V(y,[m,T]):T()},leave(m,y){const E=String(t.key);if(m[ha]&&m[ha](!0),n.isUnmounting)return y();M(p,[m]);let R=!1;const b=m[nr]=T=>{R||(R=!0,y(),T?M(C,[m]):M(v,[m]),m[nr]=void 0,P[E]===t&&delete P[E])};P[E]=t,g?V(g,[m,b]):b()},clone(m){return zs(m,e,n,r)}};return I}function _l(t){if(ko(t))return t=ln(t),t.children=null,t}function bf(t){if(!ko(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Xr(t,e){t.shapeFlag&6&&t.component?Xr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Qe?(o.patchFlag&128&&s++,r=r.concat(bc(o.children,e,c))):(e||o.type!==dt)&&r.push(c!=null?ln(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sr(t,e){return de(t)?$e({name:t.name},e,{setup:t}):t}const Kr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function lI(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,d=0;const p=()=>(d++,l=null,g()),g=()=>{let v;return l||(v=l=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((O,N)=>{c(C,()=>O(p()),()=>N(C),d+1)});throw C}).then(C=>v!==l&&l?l:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),u=C,C)))};return Sr({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const v=nt;if(u)return()=>yl(u,v);const C=k=>{l=null,ls(k,v,13,!r)};if(o&&v.suspense||Oo)return g().then(k=>()=>yl(k,v)).catch(k=>(C(k),()=>r?we(r,{error:k}):null));const O=Tt(!1),N=Tt(),U=Tt(!!s);return s&&setTimeout(()=>{U.value=!1},s),i!=null&&setTimeout(()=>{if(!O.value&&!N.value){const k=new Error(`Async component timed out after ${i}ms.`);C(k),N.value=k}},i),g().then(()=>{O.value=!0,v.parent&&ko(v.parent.vnode)&&(v.parent.effect.dirty=!0,Tc(v.parent.update))}).catch(k=>{C(k),N.value=k}),()=>{if(O.value&&u)return yl(u,v);if(N.value&&r)return we(r,{error:N.value});if(n&&!U.value)return we(n)}}})}function yl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=we(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ko=t=>t.type.__isKeepAlive,uI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=qn(),r=n.ctx;if(!r.renderer)return()=>{const k=e.default&&e.default();return k&&k.length===1?k[0]:k};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:p}}}=r,g=p("div");r.activate=(k,S,P,M,V)=>{const I=k.component;u(k,S,P,0,c),l(I.vnode,k,S,P,I,c,M,k.slotScopeIds,V),ct(()=>{I.isDeactivated=!1,I.a&&Ds(I.a);const m=k.props&&k.props.onVnodeMounted;m&&Ot(m,I.parent,k)},c)},r.deactivate=k=>{const S=k.component;u(k,g,null,1,c),ct(()=>{S.da&&Ds(S.da);const P=k.props&&k.props.onVnodeUnmounted;P&&Ot(P,S.parent,k),S.isDeactivated=!0},c)};function v(k){vl(k),d(k,n,c,!0)}function C(k){s.forEach((S,P)=>{const M=uu(S.type);M&&(!k||!k(M))&&O(P)})}function O(k){const S=s.get(k);!o||!on(S,o)?v(S):o&&vl(o),s.delete(k),i.delete(k)}Us(()=>[t.include,t.exclude],([k,S])=>{k&&C(P=>Vi(k,P)),S&&C(P=>!Vi(S,P))},{flush:"post",deep:!0});let N=null;const U=()=>{N!=null&&s.set(N,El(n.subTree))};return Hn(U),Rc(U),Sc(()=>{s.forEach(k=>{const{subTree:S,suspense:P}=n,M=El(S);if(k.type===M.type&&k.key===M.key){vl(M);const V=M.component.da;V&&ct(V,P);return}v(k)})}),()=>{if(N=null,!e.default)return null;const k=e.default(),S=k[0];if(k.length>1)return o=null,k;if(!Er(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let P=El(S);const M=P.type,V=uu(Kr(P)?P.type.__asyncResolved||{}:M),{include:I,exclude:m,max:y}=t;if(I&&(!V||!Vi(I,V))||m&&V&&Vi(m,V))return o=P,S;const E=P.key==null?M:P.key,R=s.get(E);return P.el&&(P=ln(P),S.shapeFlag&128&&(S.ssContent=P)),N=E,R?(P.el=R.el,P.component=R.component,P.transition&&Xr(P,P.transition),P.shapeFlag|=512,i.delete(E),i.add(E)):(i.add(E),y&&i.size>parseInt(y,10)&&O(i.values().next().value)),P.shapeFlag|=256,o=P,wm(S.type)?S:P}}},hI=uI;function Vi(t,e){return re(t)?t.some(n=>Vi(n,e)):Ke(t)?t.split(",").includes(e):UT(t)?t.test(e):!1}function Om(t,e){Dm(t,"a",e)}function Nm(t,e){Dm(t,"da",e)}function Dm(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ac(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ko(s.parent.vnode)&&dI(r,e,n,s),s=s.parent}}function dI(t,e,n,r){const s=Ac(e,t,r,!0);ai(()=>{$u(r[e],s)},n)}function vl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function El(t){return t.shapeFlag&128?t.ssContent:t}function Ac(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ar();const c=Zr(n),l=Gt(e,n,t,o);return c(),Rr(),l});return r?s.unshift(i):s.push(i),i}}const $n=t=>(e,n=nt)=>(!Oo||t==="sp")&&Ac(t,(...r)=>e(...r),n),xm=$n("bm"),Hn=$n("m"),Vm=$n("bu"),Rc=$n("u"),Sc=$n("bum"),ai=$n("um"),Mm=$n("sp"),Lm=$n("rtg"),Um=$n("rtc");function Fm(t,e=nt){Ac("ec",t,e)}function Jl(t,e,n,r){let s;const i=n&&n[r];if(re(t)||Ke(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function fI(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(re(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function pI(t,e,n={},r,s){if(et.isCE||et.parent&&Kr(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),we("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ze();const o=i&&Bm(i(n)),c=Br(Qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Bm(t){return t.some(e=>Er(e)?!(e.type===dt||e.type===Qe&&!Bm(e.children)):!0)?t:null}function gI(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Hi(r)]=t[r];return n}const Zl=t=>t?u_(t)?Cc(t)||t.proxy:Zl(t.parent):null,qi=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zl(t.parent),$root:t=>Zl(t.root),$emit:t=>t.emit,$options:t=>uh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Tc(t.update)}),$nextTick:t=>t.n||(t.n=Co.bind(t.proxy)),$watch:t=>oI.bind(t)}),Tl=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Pe(t,e),eu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tl(r,e))return o[e]=1,r[e];if(s!==Ve&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Ve&&Pe(n,e))return o[e]=4,n[e];tu&&(o[e]=0)}}const d=qi[e];let p,g;if(d)return e==="$attrs"&&Ut(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&Pe(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Pe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tl(s,e)?(s[e]=n,!0):r!==Ve&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ve&&Pe(t,o)||Tl(e,o)||(c=i[0])&&Pe(c,o)||Pe(r,o)||Pe(qi,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},mI=$e({},eu,{get(t,e){if(e!==Symbol.unscopables)return eu.get(t,e,t)},has(t,e){return e[0]!=="_"&&!HT(e)}});function _I(){return null}function yI(){return null}function vI(t){}function EI(t){}function TI(){return null}function wI(){}function II(t,e){return null}function bI(){return jm().slots}function AI(){return jm().attrs}function jm(){const t=qn();return t.setupContext||(t.setupContext=f_(t))}function lo(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function RI(t,e){const n=lo(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?re(s)||de(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function SI(t,e){return!t||!e?t||e:re(t)&&re(e)?t.concat(e):$e({},lo(t),lo(e))}function CI(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function PI(t){const e=qn();let n=t();return au(),Hu(n)&&(n=n.catch(r=>{throw Zr(e),r})),[n,()=>Zr(e)]}let tu=!0;function kI(t){const e=uh(t),n=t.proxy,r=t.ctx;tu=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:C,activated:O,deactivated:N,beforeDestroy:U,beforeUnmount:k,destroyed:S,unmounted:P,render:M,renderTracked:V,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:E,inheritAttrs:R,components:b,directives:T,filters:ve}=e;if(u&&OI(u,r,null),o)for(const le in o){const ne=o[le];de(ne)&&(r[le]=ne.bind(n))}if(s){const le=s.call(n,n);Me(le)&&(t.data=So(le))}if(tu=!0,i)for(const le in i){const ne=i[le],ot=de(ne)?ne.bind(n,n):de(ne.get)?ne.get.bind(n,n):Dt,Ft=!de(ne)&&de(ne.set)?ne.set.bind(n):Dt,At=It({get:ot,set:Ft});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>At.value,set:Be=>At.value=Be})}if(c)for(const le in c)$m(c[le],r,n,le);if(l){const le=de(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ne=>{fr(ne,le[ne])})}d&&Af(d,t,"c");function te(le,ne){re(ne)?ne.forEach(ot=>le(ot.bind(n))):ne&&le(ne.bind(n))}if(te(xm,p),te(Hn,g),te(Vm,v),te(Rc,C),te(Om,O),te(Nm,N),te(Fm,m),te(Um,V),te(Lm,I),te(Sc,k),te(ai,P),te(Mm,y),re(E))if(E.length){const le=t.exposed||(t.exposed={});E.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>n[ne],set:ot=>n[ne]=ot})})}else t.exposed||(t.exposed={});M&&t.render===Dt&&(t.render=M),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),T&&(t.directives=T)}function OI(t,e,n=Dt){re(t)&&(t=nu(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Vt(s.from||r,s.default,!0):i=Vt(s.from||r):i=Vt(s),pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Af(t,e,n){Gt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $m(t,e,n,r){const s=r.includes(".")?Cm(n,r):()=>n[r];if(Ke(t)){const i=e[t];de(i)&&Us(s,i)}else if(de(t))Us(s,t.bind(n));else if(Me(t))if(re(t))t.forEach(i=>$m(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Us(s,i,t)}}function uh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ha(l,u,o,!0)),Ha(l,e,o)),Me(e)&&i.set(e,l),l}function Ha(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ha(t,i,n,!0),s&&s.forEach(o=>Ha(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=NI[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const NI={data:Rf,props:Sf,emits:Sf,methods:Mi,computed:Mi,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Mi,directives:Mi,watch:xI,provide:Rf,inject:DI};function Rf(t,e){return e?t?function(){return $e(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function DI(t,e){return Mi(nu(t),nu(e))}function nu(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mi(t,e){return t?$e(Object.create(null),t,e):e}function Sf(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:$e(Object.create(null),lo(t),lo(e??{})):e}function xI(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Hm(){return{app:null,config:{isNativeTag:MT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VI=0;function MI(t,e){return function(r,s=null){de(r)||(r=$e({},r)),s!=null&&!Me(s)&&(s=null);const i=Hm(),o=new WeakSet;let c=!1;const l=i.app={_uid:VI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:g_,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...d)):de(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=we(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Cc(g.component)||g.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Fs;Fs=l;try{return u()}finally{Fs=d}}};return l}}let Fs=null;function fr(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function Vt(t,e,n=!1){const r=nt||et;if(r||Fs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function LI(){return!!(nt||et||Fs)}const qm={},Km=()=>Object.create(qm),zm=t=>Object.getPrototypeOf(t)===qm;function UI(t,e,n,r=!1){const s={},i=Km();t.propsDefaults=Object.create(null),Wm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function FI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(wc(t.emitsOptions,g))continue;const v=e[g];if(l)if(Pe(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const C=kt(g);s[C]=ru(l,c,C,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{Wm(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Pe(e,p)&&((d=Kt(p))===p||!Pe(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ru(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Nn(t.attrs,"set","")}function Wm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ns(l))continue;const u=e[l];let d;s&&Pe(s,d=kt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:wc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=c||Ve;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ru(s,l,p,u[p],t,!Pe(u,p))}}return o}function ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Zr(s);r=u[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Gm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const d=p=>{l=!0;const[g,v]=Gm(p,e,!0);$e(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Me(t)&&r.set(t,ks),ks;if(re(i))for(let d=0;d<i.length;d++){const p=kt(i[d]);Cf(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=kt(d);if(Cf(p)){const g=i[d],v=o[p]=re(g)||de(g)?{type:g}:$e({},g);if(v){const C=Of(Boolean,v.type),O=Of(String,v.type);v[0]=C>-1,v[1]=O<0||C<O,(C>-1||Pe(v,"default"))&&c.push(p)}}}const u=[o,c];return Me(t)&&r.set(t,u),u}function Cf(t){return t[0]!=="$"&&!Ns(t)}function Pf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function kf(t,e){return Pf(t)===Pf(e)}function Of(t,e){return re(e)?e.findIndex(n=>kf(n,t)):de(e)&&kf(e,t)?0:-1}const Qm=t=>t[0]==="_"||t==="$stable",hh=t=>re(t)?t.map(qt):[qt(t)],BI=(t,e,n)=>{if(e._n)return e;const r=Ht((...s)=>hh(e(...s)),n);return r._c=!1,r},Xm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Qm(s))continue;const i=t[s];if(de(i))e[s]=BI(s,i,r);else if(i!=null){const o=hh(i);e[s]=()=>o}}},Ym=(t,e)=>{const n=hh(e);t.slots.default=()=>n},jI=(t,e)=>{const n=t.slots=Km();if(t.vnode.shapeFlag&32){const r=e._;r?($e(n,e),Kg(n,"_",r,!0)):Xm(e,n)}else e&&Ym(t,e)},$I=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:($e(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Xm(e,s)),o=e}else e&&(Ym(t,e),o={default:1});if(i)for(const c in s)!Qm(c)&&o[c]==null&&delete s[c]};function qa(t,e,n,r,s=!1){if(re(t)){t.forEach((g,v)=>qa(g,e&&(re(e)?e[v]:e),n,r,s));return}if(Kr(r)&&!s)return;const i=r.shapeFlag&4?Cc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Ve?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Ke(u)?(d[u]=null,Pe(p,u)&&(p[u]=null)):pt(u)&&(u.value=null)),de(l))Dn(l,c,12,[o,d]);else{const g=Ke(l),v=pt(l);if(g||v){const C=()=>{if(t.f){const O=g?Pe(p,l)?p[l]:d[l]:l.value;s?re(O)&&$u(O,i):re(O)?O.includes(i)||O.push(i):g?(d[l]=[i],Pe(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,Pe(p,l)&&(p[l]=o)):v&&(l.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,ct(C,n)):C()}}}let Xn=!1;const HI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",qI=t=>t.namespaceURI.includes("MathML"),da=t=>{if(HI(t))return"svg";if(qI(t))return"mathml"},fa=t=>t.nodeType===8;function KI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,d=(S,P)=>{if(!P.hasChildNodes()){n(null,S,P),$a(),P._vnode=S;return}Xn=!1,p(P.firstChild,S,null,null,null),$a(),P._vnode=S,Xn&&console.error("Hydration completed but contains mismatches.")},p=(S,P,M,V,I,m=!1)=>{m=m||!!P.dynamicChildren;const y=fa(S)&&S.data==="[",E=()=>O(S,P,M,V,I,y),{type:R,ref:b,shapeFlag:T,patchFlag:ve}=P;let be=S.nodeType;P.el=S,ve===-2&&(m=!1,P.dynamicChildren=null);let te=null;switch(R){case Yr:be!==3?P.children===""?(l(P.el=s(""),o(S),S),te=S):te=E():(S.data!==P.children&&(Xn=!0,S.data=P.children),te=i(S));break;case dt:k(S)?(te=i(S),U(P.el=S.content.firstChild,S,M)):be!==8||y?te=E():te=i(S);break;case zr:if(y&&(S=i(S),be=S.nodeType),be===1||be===3){te=S;const le=!P.children.length;for(let ne=0;ne<P.staticCount;ne++)le&&(P.children+=te.nodeType===1?te.outerHTML:te.data),ne===P.staticCount-1&&(P.anchor=te),te=i(te);return y?i(te):te}else E();break;case Qe:y?te=C(S,P,M,V,I,m):te=E();break;default:if(T&1)(be!==1||P.type.toLowerCase()!==S.tagName.toLowerCase())&&!k(S)?te=E():te=g(S,P,M,V,I,m);else if(T&6){P.slotScopeIds=I;const le=o(S);if(y?te=N(S):fa(S)&&S.data==="teleport start"?te=N(S,S.data,"teleport end"):te=i(S),e(P,le,null,M,V,da(le),m),Kr(P)){let ne;y?(ne=we(Qe),ne.anchor=te?te.previousSibling:le.lastChild):ne=S.nodeType===3?pr(""):we("div"),ne.el=S,P.component.subTree=ne}}else T&64?be!==8?te=E():te=P.type.hydrate(S,P,M,V,I,m,t,v):T&128&&(te=P.type.hydrate(S,P,M,V,da(o(S)),I,m,t,p))}return b!=null&&qa(b,null,V,P),te},g=(S,P,M,V,I,m)=>{m=m||!!P.dynamicChildren;const{type:y,props:E,patchFlag:R,shapeFlag:b,dirs:T,transition:ve}=P,be=y==="input"||y==="option";if(be||R!==-1){T&&fn(P,null,M,"created");let te=!1;if(k(S)){te=t_(V,ve)&&M&&M.vnode.props&&M.vnode.props.appear;const ne=S.content.firstChild;te&&ve.beforeEnter(ne),U(ne,S,M),P.el=S=ne}if(b&16&&!(E&&(E.innerHTML||E.textContent))){let ne=v(S.firstChild,P,S,M,V,I,m);for(;ne;){Xn=!0;const ot=ne;ne=ne.nextSibling,c(ot)}}else b&8&&S.textContent!==P.children&&(Xn=!0,S.textContent=P.children);if(E)if(be||!m||R&48)for(const ne in E)(be&&(ne.endsWith("value")||ne==="indeterminate")||bo(ne)&&!Ns(ne)||ne[0]===".")&&r(S,ne,null,E[ne],void 0,void 0,M);else E.onClick&&r(S,"onClick",null,E.onClick,void 0,void 0,M);let le;(le=E&&E.onVnodeBeforeMount)&&Ot(le,M,P),T&&fn(P,null,M,"beforeMount"),((le=E&&E.onVnodeMounted)||T||te)&&Im(()=>{le&&Ot(le,M,P),te&&ve.enter(S),T&&fn(P,null,M,"mounted")},V)}return S.nextSibling},v=(S,P,M,V,I,m,y)=>{y=y||!!P.dynamicChildren;const E=P.children,R=E.length;for(let b=0;b<R;b++){const T=y?E[b]:E[b]=qt(E[b]);if(S)S=p(S,T,V,I,m,y);else{if(T.type===Yr&&!T.children)continue;Xn=!0,n(null,T,M,null,V,I,da(M),m)}}return S},C=(S,P,M,V,I,m)=>{const{slotScopeIds:y}=P;y&&(I=I?I.concat(y):y);const E=o(S),R=v(i(S),P,E,M,V,I,m);return R&&fa(R)&&R.data==="]"?i(P.anchor=R):(Xn=!0,l(P.anchor=u("]"),E,R),R)},O=(S,P,M,V,I,m)=>{if(Xn=!0,P.el=null,m){const R=N(S);for(;;){const b=i(S);if(b&&b!==R)c(b);else break}}const y=i(S),E=o(S);return c(S),n(null,P,E,y,M,V,da(E),I),y},N=(S,P="[",M="]")=>{let V=0;for(;S;)if(S=i(S),S&&fa(S)&&(S.data===P&&V++,S.data===M)){if(V===0)return i(S);V--}return S},U=(S,P,M)=>{const V=P.parentNode;V&&V.replaceChild(S,P);let I=M;for(;I;)I.vnode.el===P&&(I.vnode.el=I.subTree.el=S),I=I.parent},k=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[d,p]}const ct=Im;function Jm(t){return e_(t)}function Zm(t){return e_(t,KI)}function e_(t,e){const n=zg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=Dt,insertStaticContent:C}=t,O=(w,A,x,j=null,B=null,W=null,Y=void 0,z=null,G=!!A.dynamicChildren)=>{if(w===A)return;w&&!on(w,A)&&(j=F(w),Be(w,B,W,!0),w=null),A.patchFlag===-2&&(G=!1,A.dynamicChildren=null);const{type:$,ref:J,shapeFlag:oe}=A;switch($){case Yr:N(w,A,x,j);break;case dt:U(w,A,x,j);break;case zr:w==null&&k(A,x,j,Y);break;case Qe:b(w,A,x,j,B,W,Y,z,G);break;default:oe&1?M(w,A,x,j,B,W,Y,z,G):oe&6?T(w,A,x,j,B,W,Y,z,G):(oe&64||oe&128)&&$.process(w,A,x,j,B,W,Y,z,G,Z)}J!=null&&B&&qa(J,w&&w.ref,W,A||w,!A)},N=(w,A,x,j)=>{if(w==null)r(A.el=c(A.children),x,j);else{const B=A.el=w.el;A.children!==w.children&&u(B,A.children)}},U=(w,A,x,j)=>{w==null?r(A.el=l(A.children||""),x,j):A.el=w.el},k=(w,A,x,j)=>{[w.el,w.anchor]=C(w.children,A,x,j,w.el,w.anchor)},S=({el:w,anchor:A},x,j)=>{let B;for(;w&&w!==A;)B=g(w),r(w,x,j),w=B;r(A,x,j)},P=({el:w,anchor:A})=>{let x;for(;w&&w!==A;)x=g(w),s(w),w=x;s(A)},M=(w,A,x,j,B,W,Y,z,G)=>{A.type==="svg"?Y="svg":A.type==="math"&&(Y="mathml"),w==null?V(A,x,j,B,W,Y,z,G):y(w,A,B,W,Y,z,G)},V=(w,A,x,j,B,W,Y,z)=>{let G,$;const{props:J,shapeFlag:oe,transition:ae,dirs:ie}=w;if(G=w.el=o(w.type,W,J&&J.is,J),oe&8?d(G,w.children):oe&16&&m(w.children,G,null,j,B,wl(w,W),Y,z),ie&&fn(w,null,j,"created"),I(G,w,w.scopeId,Y,j),J){for(const Ce in J)Ce!=="value"&&!Ns(Ce)&&i(G,Ce,null,J[Ce],W,w.children,j,B,Ne);"value"in J&&i(G,"value",null,J.value,W),($=J.onVnodeBeforeMount)&&Ot($,j,w)}ie&&fn(w,null,j,"beforeMount");const ue=t_(B,ae);ue&&ae.beforeEnter(G),r(G,A,x),(($=J&&J.onVnodeMounted)||ue||ie)&&ct(()=>{$&&Ot($,j,w),ue&&ae.enter(G),ie&&fn(w,null,j,"mounted")},B)},I=(w,A,x,j,B)=>{if(x&&v(w,x),j)for(let W=0;W<j.length;W++)v(w,j[W]);if(B){let W=B.subTree;if(A===W){const Y=B.vnode;I(w,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},m=(w,A,x,j,B,W,Y,z,G=0)=>{for(let $=G;$<w.length;$++){const J=w[$]=z?rr(w[$]):qt(w[$]);O(null,J,A,x,j,B,W,Y,z)}},y=(w,A,x,j,B,W,Y)=>{const z=A.el=w.el;let{patchFlag:G,dynamicChildren:$,dirs:J}=A;G|=w.patchFlag&16;const oe=w.props||Ve,ae=A.props||Ve;let ie;if(x&&xr(x,!1),(ie=ae.onVnodeBeforeUpdate)&&Ot(ie,x,A,w),J&&fn(A,w,x,"beforeUpdate"),x&&xr(x,!0),$?E(w.dynamicChildren,$,z,x,j,wl(A,B),W):Y||ne(w,A,z,null,x,j,wl(A,B),W,!1),G>0){if(G&16)R(z,A,oe,ae,x,j,B);else if(G&2&&oe.class!==ae.class&&i(z,"class",null,ae.class,B),G&4&&i(z,"style",oe.style,ae.style,B),G&8){const ue=A.dynamicProps;for(let Ce=0;Ce<ue.length;Ce++){const Le=ue[Ce],Xe=oe[Le],Bt=ae[Le];(Bt!==Xe||Le==="value")&&i(z,Le,Xe,Bt,B,w.children,x,j,Ne)}}G&1&&w.children!==A.children&&d(z,A.children)}else!Y&&$==null&&R(z,A,oe,ae,x,j,B);((ie=ae.onVnodeUpdated)||J)&&ct(()=>{ie&&Ot(ie,x,A,w),J&&fn(A,w,x,"updated")},j)},E=(w,A,x,j,B,W,Y)=>{for(let z=0;z<A.length;z++){const G=w[z],$=A[z],J=G.el&&(G.type===Qe||!on(G,$)||G.shapeFlag&70)?p(G.el):x;O(G,$,J,null,j,B,W,Y,!0)}},R=(w,A,x,j,B,W,Y)=>{if(x!==j){if(x!==Ve)for(const z in x)!Ns(z)&&!(z in j)&&i(w,z,x[z],null,Y,A.children,B,W,Ne);for(const z in j){if(Ns(z))continue;const G=j[z],$=x[z];G!==$&&z!=="value"&&i(w,z,$,G,Y,A.children,B,W,Ne)}"value"in j&&i(w,"value",x.value,j.value,Y)}},b=(w,A,x,j,B,W,Y,z,G)=>{const $=A.el=w?w.el:c(""),J=A.anchor=w?w.anchor:c("");let{patchFlag:oe,dynamicChildren:ae,slotScopeIds:ie}=A;ie&&(z=z?z.concat(ie):ie),w==null?(r($,x,j),r(J,x,j),m(A.children||[],x,J,B,W,Y,z,G)):oe>0&&oe&64&&ae&&w.dynamicChildren?(E(w.dynamicChildren,ae,x,B,W,Y,z),(A.key!=null||B&&A===B.subTree)&&dh(w,A,!0)):ne(w,A,x,J,B,W,Y,z,G)},T=(w,A,x,j,B,W,Y,z,G)=>{A.slotScopeIds=z,w==null?A.shapeFlag&512?B.ctx.activate(A,x,j,Y,G):ve(A,x,j,B,W,Y,G):be(w,A,G)},ve=(w,A,x,j,B,W,Y)=>{const z=w.component=l_(w,j,B);if(ko(w)&&(z.ctx.renderer=Z),h_(z),z.asyncDep){if(B&&B.registerDep(z,te),!w.el){const G=z.subTree=we(dt);U(null,G,A,x)}}else te(z,w,A,x,B,W,Y)},be=(w,A,x)=>{const j=A.component=w.component;if(Qw(w,A,x))if(j.asyncDep&&!j.asyncResolved){le(j,A,x);return}else j.next=A,Bw(j.update),j.effect.dirty=!0,j.update();else A.el=w.el,j.vnode=A},te=(w,A,x,j,B,W,Y)=>{const z=()=>{if(w.isMounted){let{next:J,bu:oe,u:ae,parent:ie,vnode:ue}=w;{const Xt=n_(w);if(Xt){J&&(J.el=ue.el,le(w,J,Y)),Xt.asyncDep.then(()=>{w.isUnmounted||z()});return}}let Ce=J,Le;xr(w,!1),J?(J.el=ue.el,le(w,J,Y)):J=ue,oe&&Ds(oe),(Le=J.props&&J.props.onVnodeBeforeUpdate)&&Ot(Le,ie,J,ue),xr(w,!0);const Xe=ba(w),Bt=w.subTree;w.subTree=Xe,O(Bt,Xe,p(Bt.el),F(Bt),w,B,W),J.el=Xe.el,Ce===null&&nh(w,Xe.el),ae&&ct(ae,B),(Le=J.props&&J.props.onVnodeUpdated)&&ct(()=>Ot(Le,ie,J,ue),B)}else{let J;const{el:oe,props:ae}=A,{bm:ie,m:ue,parent:Ce}=w,Le=Kr(A);if(xr(w,!1),ie&&Ds(ie),!Le&&(J=ae&&ae.onVnodeBeforeMount)&&Ot(J,Ce,A),xr(w,!0),oe&&Ae){const Xe=()=>{w.subTree=ba(w),Ae(oe,w.subTree,w,B,null)};Le?A.type.__asyncLoader().then(()=>!w.isUnmounted&&Xe()):Xe()}else{const Xe=w.subTree=ba(w);O(null,Xe,x,j,w,B,W),A.el=Xe.el}if(ue&&ct(ue,B),!Le&&(J=ae&&ae.onVnodeMounted)){const Xe=A;ct(()=>Ot(J,Ce,Xe),B)}(A.shapeFlag&256||Ce&&Kr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&w.a&&ct(w.a,B),w.isMounted=!0,A=x=j=null}},G=w.effect=new qs(z,Dt,()=>Tc($),w.scope),$=w.update=()=>{G.dirty&&G.run()};$.id=w.uid,xr(w,!0),$()},le=(w,A,x)=>{A.component=w;const j=w.vnode.props;w.vnode=A,w.next=null,FI(w,A.props,j,x),$I(w,A.children,x),Ar(),Ef(w),Rr()},ne=(w,A,x,j,B,W,Y,z,G=!1)=>{const $=w&&w.children,J=w?w.shapeFlag:0,oe=A.children,{patchFlag:ae,shapeFlag:ie}=A;if(ae>0){if(ae&128){Ft($,oe,x,j,B,W,Y,z,G);return}else if(ae&256){ot($,oe,x,j,B,W,Y,z,G);return}}ie&8?(J&16&&Ne($,B,W),oe!==$&&d(x,oe)):J&16?ie&16?Ft($,oe,x,j,B,W,Y,z,G):Ne($,B,W,!0):(J&8&&d(x,""),ie&16&&m(oe,x,j,B,W,Y,z,G))},ot=(w,A,x,j,B,W,Y,z,G)=>{w=w||ks,A=A||ks;const $=w.length,J=A.length,oe=Math.min($,J);let ae;for(ae=0;ae<oe;ae++){const ie=A[ae]=G?rr(A[ae]):qt(A[ae]);O(w[ae],ie,x,null,B,W,Y,z,G)}$>J?Ne(w,B,W,!0,!1,oe):m(A,x,j,B,W,Y,z,G,oe)},Ft=(w,A,x,j,B,W,Y,z,G)=>{let $=0;const J=A.length;let oe=w.length-1,ae=J-1;for(;$<=oe&&$<=ae;){const ie=w[$],ue=A[$]=G?rr(A[$]):qt(A[$]);if(on(ie,ue))O(ie,ue,x,null,B,W,Y,z,G);else break;$++}for(;$<=oe&&$<=ae;){const ie=w[oe],ue=A[ae]=G?rr(A[ae]):qt(A[ae]);if(on(ie,ue))O(ie,ue,x,null,B,W,Y,z,G);else break;oe--,ae--}if($>oe){if($<=ae){const ie=ae+1,ue=ie<J?A[ie].el:j;for(;$<=ae;)O(null,A[$]=G?rr(A[$]):qt(A[$]),x,ue,B,W,Y,z,G),$++}}else if($>ae)for(;$<=oe;)Be(w[$],B,W,!0),$++;else{const ie=$,ue=$,Ce=new Map;for($=ue;$<=ae;$++){const Rt=A[$]=G?rr(A[$]):qt(A[$]);Rt.key!=null&&Ce.set(Rt.key,$)}let Le,Xe=0;const Bt=ae-ue+1;let Xt=!1,gi=0;const Kn=new Array(Bt);for($=0;$<Bt;$++)Kn[$]=0;for($=ie;$<=oe;$++){const Rt=w[$];if(Xe>=Bt){Be(Rt,B,W,!0);continue}let Yt;if(Rt.key!=null)Yt=Ce.get(Rt.key);else for(Le=ue;Le<=ae;Le++)if(Kn[Le-ue]===0&&on(Rt,A[Le])){Yt=Le;break}Yt===void 0?Be(Rt,B,W,!0):(Kn[Yt-ue]=$+1,Yt>=gi?gi=Yt:Xt=!0,O(Rt,A[Yt],x,null,B,W,Y,z,G),Xe++)}const ms=Xt?zI(Kn):ks;for(Le=ms.length-1,$=Bt-1;$>=0;$--){const Rt=ue+$,Yt=A[Rt],_s=Rt+1<J?A[Rt+1].el:j;Kn[$]===0?O(null,Yt,x,_s,B,W,Y,z,G):Xt&&(Le<0||$!==ms[Le]?At(Yt,x,_s,2):Le--)}}},At=(w,A,x,j,B=null)=>{const{el:W,type:Y,transition:z,children:G,shapeFlag:$}=w;if($&6){At(w.component.subTree,A,x,j);return}if($&128){w.suspense.move(A,x,j);return}if($&64){Y.move(w,A,x,Z);return}if(Y===Qe){r(W,A,x);for(let oe=0;oe<G.length;oe++)At(G[oe],A,x,j);r(w.anchor,A,x);return}if(Y===zr){S(w,A,x);return}if(j!==2&&$&1&&z)if(j===0)z.beforeEnter(W),r(W,A,x),ct(()=>z.enter(W),B);else{const{leave:oe,delayLeave:ae,afterLeave:ie}=z,ue=()=>r(W,A,x),Ce=()=>{oe(W,()=>{ue(),ie&&ie()})};ae?ae(W,ue,Ce):Ce()}else r(W,A,x)},Be=(w,A,x,j=!1,B=!1)=>{const{type:W,props:Y,ref:z,children:G,dynamicChildren:$,shapeFlag:J,patchFlag:oe,dirs:ae}=w;if(z!=null&&qa(z,null,x,w,!0),J&256){A.ctx.deactivate(w);return}const ie=J&1&&ae,ue=!Kr(w);let Ce;if(ue&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&Ot(Ce,A,w),J&6)De(w.component,x,j);else{if(J&128){w.suspense.unmount(x,j);return}ie&&fn(w,null,A,"beforeUnmount"),J&64?w.type.remove(w,A,x,B,Z,j):$&&(W!==Qe||oe>0&&oe&64)?Ne($,A,x,!1,!0):(W===Qe&&oe&384||!B&&J&16)&&Ne(G,A,x),j&&H(w)}(ue&&(Ce=Y&&Y.onVnodeUnmounted)||ie)&&ct(()=>{Ce&&Ot(Ce,A,w),ie&&fn(w,null,A,"unmounted")},x)},H=w=>{const{type:A,el:x,anchor:j,transition:B}=w;if(A===Qe){ye(x,j);return}if(A===zr){P(w);return}const W=()=>{s(x),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(w.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:z}=B,G=()=>Y(x,W);z?z(w.el,W,G):G()}else W()},ye=(w,A)=>{let x;for(;w!==A;)x=g(w),s(w),w=x;s(A)},De=(w,A,x)=>{const{bum:j,scope:B,update:W,subTree:Y,um:z}=w;j&&Ds(j),B.stop(),W&&(W.active=!1,Be(Y,w,A,x)),z&&ct(z,A),ct(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Ne=(w,A,x,j=!1,B=!1,W=0)=>{for(let Y=W;Y<w.length;Y++)Be(w[Y],A,x,j,B)},F=w=>w.shapeFlag&6?F(w.component.subTree):w.shapeFlag&128?w.suspense.next():g(w.anchor||w.el);let ee=!1;const X=(w,A,x)=>{w==null?A._vnode&&Be(A._vnode,null,null,!0):O(A._vnode||null,w,A,null,null,null,x),ee||(ee=!0,Ef(),$a(),ee=!1),A._vnode=w},Z={p:O,um:Be,m:At,r:H,mt:ve,mc:m,pc:ne,pbc:E,n:F,o:t};let me,Ae;return e&&([me,Ae]=e(Z)),{render:X,hydrate:me,createApp:MI(X,me)}}function wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function t_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dh(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=rr(s[i]),c.el=o.el),n||dh(o,c)),c.type===Yr&&(c.el=o.el)}}function zI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function n_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:n_(e)}const WI=t=>t.__isTeleport,Ki=t=>t&&(t.disabled||t.disabled===""),Nf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Df=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,su=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},GI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:p,pbc:g,o:{insert:v,querySelector:C,createText:O,createComment:N}}=u,U=Ki(e.props);let{shapeFlag:k,children:S,dynamicChildren:P}=e;if(t==null){const M=e.el=O(""),V=e.anchor=O("");v(M,n,r),v(V,n,r);const I=e.target=su(e.props,C),m=e.targetAnchor=O("");I&&(v(m,I),o==="svg"||Nf(I)?o="svg":(o==="mathml"||Df(I))&&(o="mathml"));const y=(E,R)=>{k&16&&d(S,E,R,s,i,o,c,l)};U?y(n,V):I&&y(I,m)}else{e.el=t.el;const M=e.anchor=t.anchor,V=e.target=t.target,I=e.targetAnchor=t.targetAnchor,m=Ki(t.props),y=m?n:V,E=m?M:I;if(o==="svg"||Nf(V)?o="svg":(o==="mathml"||Df(V))&&(o="mathml"),P?(g(t.dynamicChildren,P,y,s,i,o,c),dh(t,e,!0)):l||p(t,e,y,E,s,i,o,c,!1),U)m?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):pa(e,n,M,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=su(e.props,C);R&&pa(e,R,null,u,0)}else m&&pa(e,V,I,u,1)}r_(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:d,target:p,props:g}=t;if(p&&i(d),o&&i(u),c&16){const v=o||!Ki(g);for(let C=0;C<l.length;C++){const O=l[C];s(O,e,n,v,!!O.dynamicChildren)}}},move:pa,hydrate:QI};function pa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||Ki(d))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function QI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const d=e.target=su(e.props,l);if(d){const p=d._lpa||d.firstChild;if(e.shapeFlag&16)if(Ki(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,d,n,r,s,i)}r_(e)}return e.anchor&&o(e.anchor)}const XI=GI;function r_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Qe=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),zi=[];let xt=null;function Ze(t=!1){zi.push(xt=t?null:[])}function s_(){zi.pop(),xt=zi[zi.length-1]||null}let Jr=1;function iu(t){Jr+=t}function i_(t){return t.dynamicChildren=Jr>0?xt||ks:null,s_(),Jr>0&&xt&&xt.push(t),t}function zt(t,e,n,r,s,i){return i_(Ee(t,e,n,r,s,i,!0))}function Br(t,e,n,r,s){return i_(we(t,e,n,r,s,!0))}function Er(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}function YI(t){}const o_=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||pt(t)||de(t)?{i:et,r:t,k:e,f:!!n}:t:null);function Ee(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&o_(e),ref:e&&Aa(e),scopeId:Ic,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return c?(ph(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Jr>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const we=JI;function JI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tm)&&(t=dt),Er(t)){const c=ln(t,e,!0);return n&&ph(c,n),Jr>0&&!i&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag|=-2,c}if(i0(t)&&(t=t.__vccOpts),e){e=a_(e);let{class:c,style:l}=e;c&&!Ke(c)&&(e.class=Qr(c)),Me(l)&&(Yu(l)&&!re(l)&&(l=$e({},l)),e.style=Ro(l))}const o=Ke(t)?1:wm(t)?128:WI(t)?64:Me(t)?4:de(t)?2:0;return Ee(t,e,n,r,s,o,i,!0)}function a_(t){return t?Yu(t)||zm(t)?$e({},t):t:null}function ln(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?c_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&o_(u),ref:e&&e.ref?n&&i?re(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(d.transition=l.clone(d)),d}function pr(t=" ",e=0){return we(Yr,null,t,e)}function fh(t,e){const n=we(zr,null,t);return n.staticCount=e,n}function Rn(t="",e=!1){return e?(Ze(),Br(dt,null,t)):we(dt,null,t)}function qt(t){return t==null||typeof t=="boolean"?we(dt):re(t)?we(Qe,null,t.slice()):typeof t=="object"?rr(t):we(Yr,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function ph(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ph(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zm(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[pr(e)]):n=8);t.children=e,t.shapeFlag|=n}function c_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qr([e.class,r.class]));else if(s==="style")e.style=Ro([e.style,r.style]);else if(bo(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ot(t,e,n,r=null){Gt(t,e,7,[n,r])}const ZI=Hm();let e0=0;function l_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ZI,i={uid:e0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gm(r,s),emitsOptions:Em(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$w.bind(null,i),t.ce&&t.ce(i),i}let nt=null;const qn=()=>nt||et;let Ka,ou;{const t=zg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ka=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),ou=e("__VUE_SSR_SETTERS__",n=>Oo=n)}const Zr=t=>{const e=nt;return Ka(t),t.scope.on(),()=>{t.scope.off(),Ka(e)}},au=()=>{nt&&nt.scope.off(),Ka(null)};function u_(t){return t.vnode.shapeFlag&4}let Oo=!1;function h_(t,e=!1){e&&ou(e);const{props:n,children:r}=t.vnode,s=u_(t);UI(t,n,s,e),jI(t,r);const i=s?t0(t,e):void 0;return e&&ou(!1),i}function t0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?f_(t):null,i=Zr(t);Ar();const o=Dn(r,t,0,[t.props,s]);if(Rr(),i(),Hu(o)){if(o.then(au,au),e)return o.then(c=>{cu(t,c,e)}).catch(c=>{ls(c,t,0)});t.asyncDep=o}else cu(t,o,e)}else d_(t,e)}function cu(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=eh(e)),d_(t,n)}let za,lu;function n0(t){za=t,lu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,mI))}}const r0=()=>!za;function d_(t,e,n){const r=t.type;if(!t.render){if(!e&&za&&!r.render){const s=r.template||uh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=$e($e({isCustomElement:i,delimiters:c},o),l);r.render=za(s,u)}}t.render=r.render||Dt,lu&&lu(t)}{const s=Zr(t);Ar();try{kI(t)}finally{Rr(),s()}}}const s0={get(t,e){return Ut(t,"get",""),t[e]}};function f_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,s0),slots:t.slots,emit:t.emit,expose:e}}function Cc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(eh(um(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)},has(e,n){return n in e||n in qi}}))}function uu(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function i0(t){return de(t)&&"__vccOpts"in t}const It=(t,e)=>Iw(t,e,Oo);function o0(t,e,n=Ve){const r=qn(),s=kt(e),i=Kt(e),o=pm((l,u)=>{let d;return Sm(()=>{const p=t[e];cn(d,p)&&(d=p,u())}),{get(){return l(),n.get?n.get(d):d},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&cn(p,d)&&(d=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function No(t,e,n){const r=arguments.length;return r===2?Me(e)&&!re(e)?Er(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),we(t,e,n))}function a0(){}function c0(t,e,n,r){const s=n[r];if(s&&p_(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function p_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(cn(n[r],e[r]))return!1;return Jr>0&&xt&&xt.push(t),!0}const g_="3.4.27",l0=Dt,u0=Lw,h0=Is,d0=vm,f0={createComponentInstance:l_,setupComponent:h_,renderComponentRoot:ba,setCurrentRenderingInstance:ao,isVNode:Er,normalizeVNode:qt},p0=f0,g0=null,m0=null,_0=null;/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const y0="http://www.w3.org/2000/svg",v0="http://www.w3.org/1998/Math/MathML",sr=typeof document<"u"?document:null,xf=sr&&sr.createElement("template"),E0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?sr.createElementNS(y0,t):e==="mathml"?sr.createElementNS(v0,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=xf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yn="transition",Pi="animation",Ws=Symbol("_vtc"),gh=(t,{slots:e})=>No(Pm,__(t),e);gh.displayName="Transition";const m_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},T0=gh.props=$e({},lh,m_),Vr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vf=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function __(t){const e={};for(const b in t)b in m_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,C=w0(s),O=C&&C[0],N=C&&C[1],{onBeforeEnter:U,onEnter:k,onEnterCancelled:S,onLeave:P,onLeaveCancelled:M,onBeforeAppear:V=U,onAppear:I=k,onAppearCancelled:m=S}=e,y=(b,T,ve)=>{er(b,T?d:c),er(b,T?u:o),ve&&ve()},E=(b,T)=>{b._isLeaving=!1,er(b,p),er(b,v),er(b,g),T&&T()},R=b=>(T,ve)=>{const be=b?I:k,te=()=>y(T,b,ve);Vr(be,[T,te]),Mf(()=>{er(T,b?l:i),An(T,b?d:c),Vf(be)||Lf(T,r,O,te)})};return $e(e,{onBeforeEnter(b){Vr(U,[b]),An(b,i),An(b,o)},onBeforeAppear(b){Vr(V,[b]),An(b,l),An(b,u)},onEnter:R(!1),onAppear:R(!0),onLeave(b,T){b._isLeaving=!0;const ve=()=>E(b,T);An(b,p),An(b,g),v_(),Mf(()=>{b._isLeaving&&(er(b,p),An(b,v),Vf(P)||Lf(b,r,N,ve))}),Vr(P,[b,ve])},onEnterCancelled(b){y(b,!1),Vr(S,[b])},onAppearCancelled(b){y(b,!0),Vr(m,[b])},onLeaveCancelled(b){E(b),Vr(M,[b])}})}function w0(t){if(t==null)return null;if(Me(t))return[Il(t.enter),Il(t.leave)];{const e=Il(t);return[e,e]}}function Il(t){return Ua(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ws]||(t[Ws]=new Set)).add(e)}function er(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ws];n&&(n.delete(e),n.size||(t[Ws]=void 0))}function Mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let I0=0;function Lf(t,e,n,r){const s=t._endId=++I0,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=y_(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=v=>{v.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(u,g)}function y_(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Yn}Delay`),i=r(`${Yn}Duration`),o=Uf(s,i),c=r(`${Pi}Delay`),l=r(`${Pi}Duration`),u=Uf(c,l);let d=null,p=0,g=0;e===Yn?o>0&&(d=Yn,p=o,g=i.length):e===Pi?u>0&&(d=Pi,p=u,g=l.length):(p=Math.max(o,u),d=p>0?o>u?Yn:Pi:null,g=d?d===Yn?i.length:l.length:0);const v=d===Yn&&/\b(transform|all)(,|$)/.test(r(`${Yn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:v}}function Uf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ff(n)+Ff(t[r])))}function Ff(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function v_(){return document.body.offsetHeight}function b0(t,e,n){const r=t[Ws];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wa=Symbol("_vod"),E_=Symbol("_vsh"),T_={beforeMount(t,{value:e},{transition:n}){t[Wa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ki(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ki(t,!0),r.enter(t)):r.leave(t,()=>{ki(t,!1)}):ki(t,e))},beforeUnmount(t,{value:e}){ki(t,e)}};function ki(t,e){t.style.display=e?t[Wa]:"none",t[E_]=!e}function A0(){T_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const w_=Symbol("");function R0(t){const e=qn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>du(i,s))},r=()=>{const s=t(e.proxy);hu(e.subTree,s),n(s)};Hn(()=>{Rm(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),ai(()=>s.disconnect())})}function hu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{hu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)du(t.el,e);else if(t.type===Qe)t.children.forEach(n=>hu(n,e));else if(t.type===zr){let{el:n,anchor:r}=t;for(;n&&(du(n,e),n!==r);)n=n.nextSibling}}function du(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[w_]=r}}const S0=/(^|;)\s*display\s*:/;function C0(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ra(r,c,"")}else for(const o in e)n[o]==null&&Ra(r,o,"");for(const o in n)o==="display"&&(i=!0),Ra(r,o,n[o])}else if(s){if(e!==n){const o=r[w_];o&&(n+=";"+o),r.cssText=n,i=S0.test(n)}}else e&&t.removeAttribute("style");Wa in t&&(t[Wa]=i?r.display:"",t[E_]&&(r.display="none"))}const Bf=/\s*!important$/;function Ra(t,e,n){if(re(n))n.forEach(r=>Ra(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=P0(t,e);Bf.test(n)?t.setProperty(Kt(r),n.replace(Bf,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],bl={};function P0(t,e){const n=bl[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return bl[e]=r;r=Ao(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return bl[e]=i}return e}const $f="http://www.w3.org/1999/xlink";function k0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($f,e.slice(6,e.length)):t.setAttributeNS($f,e,n);else{const i=XT(e);n==null||i&&!Wg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function O0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n??"";(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Wg(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Sn(t,e,n,r){t.addEventListener(e,n,r)}function N0(t,e,n,r){t.removeEventListener(e,n,r)}const Hf=Symbol("_vei");function D0(t,e,n,r,s=null){const i=t[Hf]||(t[Hf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=x0(e);if(r){const u=i[e]=L0(r,s);Sn(t,c,u,l)}else o&&(N0(t,c,o,l),i[e]=void 0)}}const qf=/(?:Once|Passive|Capture)$/;function x0(t){let e;if(qf.test(t)){e={};let r;for(;r=t.match(qf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kt(t.slice(2)),e]}let Al=0;const V0=Promise.resolve(),M0=()=>Al||(V0.then(()=>Al=0),Al=Date.now());function L0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(U0(r,n.value),e,5,[r])};return n.value=t,n.attached=M0(),n}function U0(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,F0=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?b0(t,r,u):e==="style"?C0(t,n,r):bo(e)?ju(e)||D0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):B0(t,e,r,u))?O0(t,e,r,i,o,c,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),k0(t,e,r,u))};function B0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Ke(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function I_(t,e){const n=Sr(t);class r extends Pc{constructor(i){super(n,i,e)}}return r.def=n,r}/*! #__NO_SIDE_EFFECTS__ */const j0=t=>I_(t,x_),$0=typeof HTMLElement<"u"?HTMLElement:class{};class Pc extends $0{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Co(()=>{this._connected||(fu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!re(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Ua(this._props[l])),(c||(c=Object.create(null)))[kt(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=re(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(kt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=kt(e);this._numberProps&&this._numberProps[r]&&(n=Ua(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Kt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Kt(e),n+""):n||this.removeAttribute(Kt(e))))}_update(){fu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=we(this._def,$e({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Kt(i)!==i&&r(Kt(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Pc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function H0(t="$style"){{const e=qn();if(!e)return Ve;const n=e.type.__cssModules;if(!n)return Ve;const r=n[t];return r||Ve}}const b_=new WeakMap,A_=new WeakMap,Ga=Symbol("_moveCb"),zf=Symbol("_enterCb"),R_={name:"TransitionGroup",props:$e({},T0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=qn(),r=ch();let s,i;return Rc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Q0(s[0].el,n.vnode.el,o))return;s.forEach(z0),s.forEach(W0);const c=s.filter(G0);v_(),c.forEach(l=>{const u=l.el,d=u.style;An(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Ga]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ga]=null,er(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Se(t),c=__(o);let l=o.tag||Qe;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Xr(d,zs(d,c,r,n)),b_.set(d,d.el.getBoundingClientRect()))}i=e.default?bc(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Xr(d,zs(d,c,r,n))}return we(l,null,i)}}},q0=t=>delete t.mode;R_.props;const K0=R_;function z0(t){const e=t.el;e[Ga]&&e[Ga](),e[zf]&&e[zf]()}function W0(t){A_.set(t,t.el.getBoundingClientRect())}function G0(t){const e=b_.get(t),n=A_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Q0(t,e,n){const r=t.cloneNode(),s=t[Ws];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=y_(r);return i.removeChild(r),o}const Tr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Ds(e,n):e};function X0(t){t.target.composing=!0}function Wf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const en=Symbol("_assign"),Qa={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[en]=Tr(s);const i=r||s.props&&s.props.type==="number";Sn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=La(c)),t[en](c)}),n&&Sn(t,"change",()=>{t.value=t.value.trim()}),e||(Sn(t,"compositionstart",X0),Sn(t,"compositionend",Wf),Sn(t,"change",Wf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[en]=Tr(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?La(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},mh={deep:!0,created(t,e,n){t[en]=Tr(n),Sn(t,"change",()=>{const r=t._modelValue,s=Gs(t),i=t.checked,o=t[en];if(re(r)){const c=_c(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(cs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(C_(t,i))})},mounted:Gf,beforeUpdate(t,e,n){t[en]=Tr(n),Gf(t,e,n)}};function Gf(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=_c(e,r.props.value)>-1:cs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=vr(e,C_(t,!0)))}const _h={created(t,{value:e},n){t.checked=vr(e,n.props.value),t[en]=Tr(n),Sn(t,"change",()=>{t[en](Gs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[en]=Tr(r),e!==n&&(t.checked=vr(e,r.props.value))}},S_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=cs(e);Sn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?La(Gs(o)):Gs(o));t[en](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Co(()=>{t._assigning=!1})}),t[en]=Tr(r)},mounted(t,{value:e,modifiers:{number:n}}){Qf(t,e)},beforeUpdate(t,e,n){t[en]=Tr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Qf(t,e)}};function Qf(t,e,n){const r=t.multiple,s=re(e);if(!(r&&!s&&!cs(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Gs(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=_c(e,l)>-1}else c.selected=e.has(l);else if(vr(Gs(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Gs(t){return"_value"in t?t._value:t.value}function C_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const P_={created(t,e,n){ga(t,e,n,null,"created")},mounted(t,e,n){ga(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ga(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ga(t,e,n,r,"updated")}};function k_(t,e){switch(t){case"SELECT":return S_;case"TEXTAREA":return Qa;default:switch(e){case"checkbox":return mh;case"radio":return _h;default:return Qa}}}function ga(t,e,n,r,s){const o=k_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function Y0(){Qa.getSSRProps=({value:t})=>({value:t}),_h.getSSRProps=({value:t},e)=>{if(e.props&&vr(e.props.value,t))return{checked:!0}},mh.getSSRProps=({value:t},e)=>{if(re(t)){if(e.props&&_c(t,e.props.value)>-1)return{checked:!0}}else if(cs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},P_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=k_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const J0=["ctrl","shift","alt","meta"],Z0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>J0.some(n=>t[`${n}Key`]&&!e.includes(n))},eb=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Z0[e[o]];if(c&&c(s,e))return}return t(s,...i)})},tb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Kt(s.key);if(e.some(o=>o===i||tb[o]===i))return t(s)})},O_=$e({patchProp:F0},E0);let Wi,Xf=!1;function N_(){return Wi||(Wi=Jm(O_))}function D_(){return Wi=Xf?Wi:Zm(O_),Xf=!0,Wi}const fu=(...t)=>{N_().render(...t)},x_=(...t)=>{D_().hydrate(...t)},V_=(...t)=>{const e=N_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=L_(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,M_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},rb=(...t)=>{const e=D_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=L_(r);if(s)return n(s,!0,M_(s))},e};function M_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function L_(t){return Ke(t)?document.querySelector(t):t}let Yf=!1;const sb=()=>{Yf||(Yf=!0,Y0(),A0())};/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ib=()=>{},ob=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Pm,BaseTransitionPropsValidators:lh,Comment:dt,DeprecationTypes:_0,EffectScope:Ku,ErrorCodes:Mw,ErrorTypeStrings:u0,Fragment:Qe,KeepAlive:hI,ReactiveEffect:qs,Static:zr,Suspense:eI,Teleport:XI,Text:Yr,TrackOpTypes:Dw,Transition:gh,TransitionGroup:K0,TriggerOpTypes:xw,VueElement:Pc,assertNumber:Vw,callWithAsyncErrorHandling:Gt,callWithErrorHandling:Dn,camelize:kt,capitalize:Ao,cloneVNode:ln,compatUtils:m0,compile:ib,computed:It,createApp:V_,createBlock:Br,createCommentVNode:Rn,createElementBlock:zt,createElementVNode:Ee,createHydrationRenderer:Zm,createPropsRestProxy:CI,createRenderer:Jm,createSSRApp:rb,createSlots:fI,createStaticVNode:fh,createTextVNode:pr,createVNode:we,customRef:pm,defineAsyncComponent:lI,defineComponent:Sr,defineCustomElement:I_,defineEmits:yI,defineExpose:vI,defineModel:wI,defineOptions:EI,defineProps:_I,defineSSRCustomElement:j0,defineSlots:TI,devtools:h0,effect:tw,effectScope:JT,getCurrentInstance:qn,getCurrentScope:Xg,getTransitionRawChildren:bc,guardReactiveProps:a_,h:No,handleError:ls,hasInjectionContext:LI,hydrate:x_,initCustomFormatter:a0,initDirectivesForSSR:sb,inject:Vt,isMemoSame:p_,isProxy:Yu,isReactive:xs,isReadonly:Ks,isRef:pt,isRuntimeOnly:r0,isShallow:ro,isVNode:Er,markRaw:um,mergeDefaults:RI,mergeModels:SI,mergeProps:c_,nextTick:Co,normalizeClass:Qr,normalizeProps:GT,normalizeStyle:Ro,onActivated:Om,onBeforeMount:xm,onBeforeUnmount:Sc,onBeforeUpdate:Vm,onDeactivated:Nm,onErrorCaptured:Fm,onMounted:Hn,onRenderTracked:Um,onRenderTriggered:Lm,onScopeDispose:ZT,onServerPrefetch:Mm,onUnmounted:ai,onUpdated:Rc,openBlock:Ze,popScopeId:qw,provide:fr,proxyRefs:eh,pushScopeId:Hw,queuePostFlushCb:ja,reactive:So,readonly:Xu,ref:Tt,registerRuntimeCompiler:n0,render:fu,renderList:Jl,renderSlot:pI,resolveComponent:sh,resolveDirective:Jw,resolveDynamicComponent:Yw,resolveFilter:g0,resolveTransitionHooks:zs,setBlockTracking:iu,setDevtoolsHook:d0,setTransitionHooks:Xr,shallowReactive:Qu,shallowReadonly:ww,shallowRef:dm,ssrContextKey:bm,ssrUtils:p0,stop:nw,toDisplayString:Fa,toHandlerKey:Hi,toHandlers:gI,toRaw:Se,toRef:Nw,toRefs:Pw,toValue:Rw,transformVNodeArgs:YI,triggerRef:Aw,unref:lt,useAttrs:AI,useCssModule:H0,useCssVars:R0,useModel:o0,useSSRContext:Am,useSlots:bI,useTransitionState:ch,vModelCheckbox:mh,vModelDynamic:P_,vModelRadio:_h,vModelSelect:S_,vModelText:Qa,vShow:T_,version:g_,warn:l0,watch:Us,watchEffect:ah,watchPostEffect:Rm,watchSyncEffect:Sm,withAsyncContext:PI,withCtx:Ht,withDefaults:II,withDirectives:aI,withKeys:nb,withMemo:c0,withModifiers:eb,withScopeId:Kw},Symbol.toStringTag,{value:"Module"})),U_="/assets/logo-roninmez-CROQ1rRD.svg";let ab=Symbol("headlessui.useid"),cb=0;function Jf(){return Vt(ab,()=>`${++cb}`)()}function xn(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}function Xa(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Xa),r}function Zf(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function lb(t,e){let n=Tt(Zf(t.value.type,t.value.as));return Hn(()=>{n.value=Zf(t.value.type,t.value.as)}),ah(()=>{var r;n.value||xn(e)&&xn(e)instanceof HTMLButtonElement&&!((r=xn(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var pu=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(pu||{}),ub=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(ub||{});function yh({visible:t=!0,features:e=0,ourProps:n,theirProps:r,...s}){var i;let o=B_(r,n),c=Object.assign(s,{props:o});if(t||e&2&&o.static)return Rl(c);if(e&1){let l=(i=o.unmount)==null||i?0:1;return Xa(l,{0(){return null},1(){return Rl({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Rl(c)}function Rl({props:t,attrs:e,slots:n,slot:r,name:s}){var i,o;let{as:c,...l}=hb(t,["unmount","static"]),u=(i=n.default)==null?void 0:i.call(n,r),d={};if(r){let p=!1,g=[];for(let[v,C]of Object.entries(r))typeof C=="boolean"&&(p=!0),C===!0&&g.push(v);p&&(d["data-headlessui-state"]=g.join(" "))}if(c==="template"){if(u=F_(u??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[p,...g]=u??[];if(!db(p)||g.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(O=>O.trim()).filter((O,N,U)=>U.indexOf(O)===N).sort((O,N)=>O.localeCompare(N)).map(O=>`  - ${O}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(O=>`  - ${O}`).join(`
`)].join(`
`));let v=B_((o=p.props)!=null?o:{},l,d),C=ln(p,v,!0);for(let O in v)O.startsWith("on")&&(C.props||(C.props={}),C.props[O]=v[O]);return C}return Array.isArray(u)&&u.length===1?u[0]:u}return No(c,Object.assign({},l,d),{default:()=>u})}function F_(t){return t.flatMap(e=>e.type===Qe?F_(e.children):[e])}function B_(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):e[s]=r[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](s,...i){let o=n[r];for(let c of o){if(s instanceof Event&&s.defaultPrevented)return;c(s,...i)}}});return e}function hb(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function db(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let j_=Symbol("Context");var uo=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(uo||{});function fb(){return Vt(j_,null)}function pb(t){fr(j_,t)}var bs=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(bs||{}),gb=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(gb||{});let $_=Symbol("DisclosureContext");function vh(t){let e=Vt($_,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,vh),n}return e}let H_=Symbol("DisclosurePanelContext");function mb(){return Vt(H_,null)}let _b=Sr({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=Tt(t.defaultOpen?0:1),s=Tt(null),i=Tt(null),o={buttonId:Tt(`headlessui-disclosure-button-${Jf()}`),panelId:Tt(`headlessui-disclosure-panel-${Jf()}`),disclosureState:r,panel:s,button:i,toggleDisclosure(){r.value=Xa(r.value,{0:1,1:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(c){o.closeDisclosure();let l=c?c instanceof HTMLElement?c:c.value instanceof HTMLElement?xn(c):xn(o.button):xn(o.button);l==null||l.focus()}};return fr($_,o),pb(It(()=>Xa(r.value,{0:uo.Open,1:uo.Closed}))),()=>{let{defaultOpen:c,...l}=t,u={open:r.value===0,close:o.close};return yh({theirProps:l,ourProps:{},slot:u,slots:e,attrs:n,name:"Disclosure"})}}}),yb=Sr({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){let s=vh("DisclosureButton"),i=mb(),o=It(()=>i===null?!1:i.value===s.panelId.value);Hn(()=>{o.value||t.id!==null&&(s.buttonId.value=t.id)}),ai(()=>{o.value||(s.buttonId.value=null)});let c=Tt(null);r({el:c,$el:c}),o.value||ah(()=>{s.button.value=c.value});let l=lb(It(()=>({as:t.as,type:e.type})),c);function u(){var g;t.disabled||(o.value?(s.toggleDisclosure(),(g=xn(s.button))==null||g.focus()):s.toggleDisclosure())}function d(g){var v;if(!t.disabled)if(o.value)switch(g.key){case bs.Space:case bs.Enter:g.preventDefault(),g.stopPropagation(),s.toggleDisclosure(),(v=xn(s.button))==null||v.focus();break}else switch(g.key){case bs.Space:case bs.Enter:g.preventDefault(),g.stopPropagation(),s.toggleDisclosure();break}}function p(g){switch(g.key){case bs.Space:g.preventDefault();break}}return()=>{var g;let v={open:s.disclosureState.value===0},{id:C,...O}=t,N=o.value?{ref:c,type:l.value,onClick:u,onKeydown:d}:{id:(g=s.buttonId.value)!=null?g:C,ref:c,type:l.value,"aria-expanded":s.disclosureState.value===0,"aria-controls":s.disclosureState.value===0||xn(s.panel)?s.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:u,onKeydown:d,onKeyup:p};return yh({ourProps:N,theirProps:O,slot:v,attrs:e,slots:n,name:"DisclosureButton"})}}}),vb=Sr({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){let s=vh("DisclosurePanel");Hn(()=>{t.id!==null&&(s.panelId.value=t.id)}),ai(()=>{s.panelId.value=null}),r({el:s.panel,$el:s.panel}),fr(H_,s.panelId);let i=fb(),o=It(()=>i!==null?(i.value&uo.Open)===uo.Open:s.disclosureState.value===0);return()=>{var c;let l={open:s.disclosureState.value===0,close:s.close},{id:u,...d}=t,p={id:(c=s.panelId.value)!=null?c:u,ref:s.panel};return yh({ourProps:p,theirProps:d,slot:l,attrs:e,slots:n,features:pu.RenderStrategy|pu.Static,visible:o.value,name:"DisclosurePanel"})}}});function Eb(t,e){return Ze(),zt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[Ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Tb(t,e){return Ze(),zt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[Ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function wb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function Sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Gi=()=>{},un=Array.isArray,q_=/#/g,Ib=/&/g,bb=/\//g,Ab=/=/g,Rb=/\?/g,K_=/\+/g,Sb=/%5B/g,Cb=/%5D/g,z_=/%5E/g,Pb=/%60/g,W_=/%7B/g,kb=/%7C/g,G_=/%7D/g,Ob=/%20/g;function Eh(t){return encodeURI(""+t).replace(kb,"|").replace(Sb,"[").replace(Cb,"]")}function Nb(t){return Eh(t).replace(W_,"{").replace(G_,"}").replace(z_,"^")}function gu(t){return Eh(t).replace(K_,"%2B").replace(Ob,"+").replace(q_,"%23").replace(Ib,"%26").replace(Pb,"`").replace(W_,"{").replace(G_,"}").replace(z_,"^")}function Db(t){return gu(t).replace(Ab,"%3D")}function xb(t){return Eh(t).replace(q_,"%23").replace(Rb,"%3F")}function Vb(t){return t==null?"":xb(t).replace(bb,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Mb=/\/$/,Lb=t=>t.replace(Mb,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=jb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ho(o)}}function Ub(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ep(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qs(e.matched[r],n.matched[s])&&Q_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Q_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bb(t[n],e[n]))return!1;return!0}function Bb(t,e){return un(t)?tp(t,e):un(e)?tp(e,t):t===e}function tp(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var fo;(function(t){t.pop="pop",t.push="push"})(fo||(fo={}));var Qi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qi||(Qi={}));function $b(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lb(t)}const Hb=/^[^#]+#/;function qb(t,e){return t.replace(Hb,"#")+e}function Kb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kc=()=>({left:window.scrollX,top:window.scrollY});function zb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Kb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function np(t,e){return(history.state?history.state.position-e:-1)+t}const mu=new Map;function Wb(t,e){mu.set(t,e)}function Gb(t){const e=mu.get(t);return mu.delete(t),e}let Qb=()=>location.protocol+"//"+location.host;function X_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),ep(l,"")}return ep(n,t)+r+s}function Xb(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=X_(t,location),C=n.value,O=e.value;let N=0;if(g){if(n.value=v,e.value=g,o&&o===C){o=null;return}N=O?g.position-O.position:0}else r(v);s.forEach(U=>{U(n.value,C,{delta:N,type:fo.pop,direction:N?N>0?Qi.forward:Qi.back:Qi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const v=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(v),v}function d(){const{history:g}=window;g.state&&g.replaceState(xe({},g.state,{scroll:kc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function rp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kc():null}}function Yb(t){const{history:e,location:n}=window,r={value:X_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Qb()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function o(l,u){const d=xe({},e.state,rp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=xe({},s.value,e.state,{forward:l,scroll:kc()});i(d.current,d,!0);const p=xe({},rp(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Jb(t){t=$b(t);const e=Yb(t),n=Xb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:qb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Zb(t){return typeof t=="string"||t&&typeof t=="object"}function Y_(t){return typeof t=="string"||typeof t=="symbol"}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J_=Symbol("");var sp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sp||(sp={}));function Xs(t,e){return xe(new Error,{type:t,[J_]:!0},e)}function bn(t,e){return t instanceof Error&&J_ in t&&(e==null||!!(t.type&e))}const ip="[^/]+?",eA={sensitive:!1,strict:!1,start:!0,end:!0},tA=/[.+*?^${}()[\]/\\]/g;function nA(t,e){const n=xe({},eA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(tA,"\\$&"),v+=40;else if(g.type===1){const{value:C,repeatable:O,optional:N,regexp:U}=g;i.push({name:C,repeatable:O,optional:N});const k=U||ip;if(k!==ip){v+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+P.message)}}let S=O?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;p||(S=N&&u.length<2?`(?:/${S})`:"/"+S),N&&(S+="?"),s+=S,v+=20,N&&(v+=-8),O&&(v+=-20),k===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",C=i[g-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===0)d+=v.value;else if(v.type===1){const{value:C,repeatable:O,optional:N}=v,U=C in u?u[C]:"";if(un(U)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=un(U)?U.join("/"):U;if(!k)if(N)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=k}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function rA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(op(r))return 1;if(op(s))return-1}return s.length-r.length}function op(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iA={type:0,value:""},oA=/[a-zA-Z0-9_]/;function aA(t){if(!t)return[[]];if(t==="/")return[[iA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:oA.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function cA(t,e,n){const r=nA(aA(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lA(t,e){const n=[],r=new Map;e=lp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const v=!g,C=uA(d);C.aliasOf=g&&g.record;const O=lp(e,d),N=[C];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of S)N.push(xe({},C,{components:g?g.record.components:C.components,path:P,aliasOf:g?g.record:C}))}let U,k;for(const S of N){const{path:P}=S;if(p&&P[0]!=="/"){const M=p.record.path,V=M[M.length-1]==="/"?"":"/";S.path=p.record.path+(P&&V+P)}if(U=cA(S,p,O),g?g.alias.push(U):(k=k||U,k!==U&&k.alias.push(U),v&&d.name&&!cp(U)&&o(d.name)),C.children){const M=C.children;for(let V=0;V<M.length;V++)i(M[V],U,g&&g.children[V])}g=g||U,(U.record.components&&Object.keys(U.record.components).length||U.record.name||U.record.redirect)&&l(U)}return k?()=>{o(k)}:Gi}function o(d){if(Y_(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){let p=0;for(;p<n.length&&sA(d,n[p])>=0&&(d.record.path!==n[p].record.path||!Z_(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!cp(d)&&r.set(d.record.name,d)}function u(d,p){let g,v={},C,O;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Xs(1,{location:d});O=g.record.name,v=xe(ap(p.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),d.params&&ap(d.params,g.keys.map(k=>k.name))),C=g.stringify(v)}else if(d.path!=null)C=d.path,g=n.find(k=>k.re.test(C)),g&&(v=g.parse(C),O=g.record.name);else{if(g=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!g)throw Xs(1,{location:d,currentLocation:p});O=g.record.name,v=xe({},p.params,d.params),C=g.stringify(v)}const N=[];let U=g;for(;U;)N.unshift(U.record),U=U.parent;return{name:O,path:C,params:v,matched:N,meta:dA(N)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ap(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dA(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function lp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Z_(t,e){return e.children.some(n=>n===t||Z_(t,n))}function fA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(K_," "),o=i.indexOf("="),c=ho(o<0?i:i.slice(0,o)),l=o<0?null:ho(i.slice(o+1));if(c in e){let u=e[c];un(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function up(t){let e="";for(let n in t){const r=t[n];if(n=Db(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&gu(i)):[r&&gu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const gA=Symbol(""),hp=Symbol(""),Th=Symbol(""),ey=Symbol(""),_u=Symbol("");function Oi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ir(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Xs(4,{from:n,to:e})):g instanceof Error?l(g):Zb(g)?l(Xs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Pl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(mA(l)){const d=(l.__vccOpts||l)[e];d&&i.push(ir(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=wb(d)?d.default:d;o.components[c]=p;const v=(p.__vccOpts||p)[e];return v&&ir(v,n,r,o,c,s)()}))}}return i}function mA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dp(t){const e=Vt(Th),n=Vt(ey),r=It(()=>{const l=lt(t.to);return e.resolve(l)}),s=It(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Qs.bind(null,d));if(g>-1)return g;const v=fp(l[u-2]);return u>1&&fp(d)===v&&p[p.length-1].path!==v?p.findIndex(Qs.bind(null,l[u-2])):g}),i=It(()=>s.value>-1&&vA(n.params,r.value.params)),o=It(()=>s.value>-1&&s.value===n.matched.length-1&&Q_(n.params,r.value.params));function c(l={}){return yA(l)?e[lt(t.replace)?"replace":"push"](lt(t.to)).catch(Gi):Promise.resolve()}return{route:r,href:It(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const _A=Sr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dp,setup(t,{slots:e}){const n=So(dp(t)),{options:r}=Vt(Th),s=It(()=>({[pp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:No("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Sa=_A;function yA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pp=(t,e,n)=>t??e??n,EA=Sr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vt(_u),s=It(()=>t.route||r.value),i=Vt(hp,0),o=It(()=>{let u=lt(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=It(()=>s.value.matched[o.value]);fr(hp,It(()=>o.value+1)),fr(gA,c),fr(_u,s);const l=Tt();return Us(()=>[l.value,c.value,t.name],([u,d,p],[g,v,C])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Qs(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return gp(n.default,{Component:g,route:u});const v=p.props[d],C=v?v===!0?u.params:typeof v=="function"?v(u):v:null,N=No(g,xe({},C,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return gp(n.default,{Component:N,route:u})||N}}});function gp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ty=EA;function TA(t){const e=lA(t.routes,t),n=t.parseQuery||fA,r=t.stringifyQuery||up,s=t.history,i=Oi(),o=Oi(),c=Oi(),l=dm(Jn);let u=Jn;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Sl.bind(null,F=>""+F),p=Sl.bind(null,Vb),g=Sl.bind(null,ho);function v(F,ee){let X,Z;return Y_(F)?(X=e.getRecordMatcher(F),Z=ee):Z=F,e.addRoute(Z,X)}function C(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function O(){return e.getRoutes().map(F=>F.record)}function N(F){return!!e.getRecordMatcher(F)}function U(F,ee){if(ee=xe({},ee||l.value),typeof F=="string"){const A=Cl(n,F,ee.path),x=e.resolve({path:A.path},ee),j=s.createHref(A.fullPath);return xe(A,x,{params:g(x.params),hash:ho(A.hash),redirectedFrom:void 0,href:j})}let X;if(F.path!=null)X=xe({},F,{path:Cl(n,F.path,ee.path).path});else{const A=xe({},F.params);for(const x in A)A[x]==null&&delete A[x];X=xe({},F,{params:p(A)}),ee.params=p(ee.params)}const Z=e.resolve(X,ee),me=F.hash||"";Z.params=d(g(Z.params));const Ae=Ub(r,xe({},F,{hash:Nb(me),path:Z.path})),w=s.createHref(Ae);return xe({fullPath:Ae,hash:me,query:r===up?pA(F.query):F.query||{}},Z,{redirectedFrom:void 0,href:w})}function k(F){return typeof F=="string"?Cl(n,F,l.value.path):xe({},F)}function S(F,ee){if(u!==F)return Xs(8,{from:ee,to:F})}function P(F){return I(F)}function M(F){return P(xe(k(F),{replace:!0}))}function V(F){const ee=F.matched[F.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let Z=typeof X=="function"?X(F):X;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=k(Z):{path:Z},Z.params={}),xe({query:F.query,hash:F.hash,params:Z.path!=null?{}:F.params},Z)}}function I(F,ee){const X=u=U(F),Z=l.value,me=F.state,Ae=F.force,w=F.replace===!0,A=V(X);if(A)return I(xe(k(A),{state:typeof A=="object"?xe({},me,A.state):me,force:Ae,replace:w}),ee||X);const x=X;x.redirectedFrom=ee;let j;return!Ae&&Fb(r,Z,X)&&(j=Xs(16,{to:x,from:Z}),At(Z,Z,!0,!1)),(j?Promise.resolve(j):E(x,Z)).catch(B=>bn(B)?bn(B,2)?B:Ft(B):ne(B,x,Z)).then(B=>{if(B){if(bn(B,2))return I(xe({replace:w},k(B.to),{state:typeof B.to=="object"?xe({},me,B.to.state):me,force:Ae}),ee||x)}else B=b(x,Z,!0,w,me);return R(x,Z,B),B})}function m(F,ee){const X=S(F,ee);return X?Promise.reject(X):Promise.resolve()}function y(F){const ee=ye.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function E(F,ee){let X;const[Z,me,Ae]=wA(F,ee);X=Pl(Z.reverse(),"beforeRouteLeave",F,ee);for(const A of Z)A.leaveGuards.forEach(x=>{X.push(ir(x,F,ee))});const w=m.bind(null,F,ee);return X.push(w),Ne(X).then(()=>{X=[];for(const A of i.list())X.push(ir(A,F,ee));return X.push(w),Ne(X)}).then(()=>{X=Pl(me,"beforeRouteUpdate",F,ee);for(const A of me)A.updateGuards.forEach(x=>{X.push(ir(x,F,ee))});return X.push(w),Ne(X)}).then(()=>{X=[];for(const A of Ae)if(A.beforeEnter)if(un(A.beforeEnter))for(const x of A.beforeEnter)X.push(ir(x,F,ee));else X.push(ir(A.beforeEnter,F,ee));return X.push(w),Ne(X)}).then(()=>(F.matched.forEach(A=>A.enterCallbacks={}),X=Pl(Ae,"beforeRouteEnter",F,ee,y),X.push(w),Ne(X))).then(()=>{X=[];for(const A of o.list())X.push(ir(A,F,ee));return X.push(w),Ne(X)}).catch(A=>bn(A,8)?A:Promise.reject(A))}function R(F,ee,X){c.list().forEach(Z=>y(()=>Z(F,ee,X)))}function b(F,ee,X,Z,me){const Ae=S(F,ee);if(Ae)return Ae;const w=ee===Jn,A=As?history.state:{};X&&(Z||w?s.replace(F.fullPath,xe({scroll:w&&A&&A.scroll},me)):s.push(F.fullPath,me)),l.value=F,At(F,ee,X,w),Ft()}let T;function ve(){T||(T=s.listen((F,ee,X)=>{if(!De.listening)return;const Z=U(F),me=V(Z);if(me){I(xe(me,{replace:!0}),Z).catch(Gi);return}u=Z;const Ae=l.value;As&&Wb(np(Ae.fullPath,X.delta),kc()),E(Z,Ae).catch(w=>bn(w,12)?w:bn(w,2)?(I(w.to,Z).then(A=>{bn(A,20)&&!X.delta&&X.type===fo.pop&&s.go(-1,!1)}).catch(Gi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(w,Z,Ae))).then(w=>{w=w||b(Z,Ae,!1),w&&(X.delta&&!bn(w,8)?s.go(-X.delta,!1):X.type===fo.pop&&bn(w,20)&&s.go(-1,!1)),R(Z,Ae,w)}).catch(Gi)}))}let be=Oi(),te=Oi(),le;function ne(F,ee,X){Ft(F);const Z=te.list();return Z.length?Z.forEach(me=>me(F,ee,X)):console.error(F),Promise.reject(F)}function ot(){return le&&l.value!==Jn?Promise.resolve():new Promise((F,ee)=>{be.add([F,ee])})}function Ft(F){return le||(le=!F,ve(),be.list().forEach(([ee,X])=>F?X(F):ee()),be.reset()),F}function At(F,ee,X,Z){const{scrollBehavior:me}=t;if(!As||!me)return Promise.resolve();const Ae=!X&&Gb(np(F.fullPath,0))||(Z||!X)&&history.state&&history.state.scroll||null;return Co().then(()=>me(F,ee,Ae)).then(w=>w&&zb(w)).catch(w=>ne(w,F,ee))}const Be=F=>s.go(F);let H;const ye=new Set,De={currentRoute:l,listening:!0,addRoute:v,removeRoute:C,hasRoute:N,getRoutes:O,resolve:U,options:t,push:P,replace:M,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:te.add,isReady:ot,install(F){const ee=this;F.component("RouterLink",Sa),F.component("RouterView",ty),F.config.globalProperties.$router=ee,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(l)}),As&&!H&&l.value===Jn&&(H=!0,P(s.location).catch(me=>{}));const X={};for(const me in Jn)Object.defineProperty(X,me,{get:()=>l.value[me],enumerable:!0});F.provide(Th,ee),F.provide(ey,Qu(X)),F.provide(_u,l);const Z=F.unmount;ye.add(F),F.unmount=function(){ye.delete(F),ye.size<1&&(u=Jn,T&&T(),T=null,l.value=Jn,H=!1,le=!1),Z()}}};function Ne(F){return F.reduce((ee,X)=>ee.then(()=>y(X)),Promise.resolve())}return De}function wA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Qs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Qs(u,l))||s.push(l))}return[n,r,s]}const IA={class:"fixed top-0 z-50 w-full bg-white shadow"},bA={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},AA={class:"relative flex h-16 items-center justify-between"},RA={class:"absolute inset-y-0 right-0 flex items-center sm:hidden"},SA=Ee("span",{class:"absolute -inset-0.5"},null,-1),CA=Ee("span",{class:"sr-only"},"Open main menu",-1),PA={class:"flex flex-1 items-center justify-between"},kA={class:"flex items-center flex-shrink-0"},OA=Ee("img",{class:"h-36 w-auto",src:U_,alt:"RONINMEZ - Soluciones digitales en desarrollo web y análisis de datos, posicionamiento SEO"},null,-1),NA={class:"hidden sm:block"},DA={class:"flex justify-center space-x-4"},xA={class:"space-y-1 px-2 pb-3 pt-2"},VA={__name:"NavbarBlog",setup(t){const e=Tt([{name:"Inicio",to:"/",current:!1},{name:"Blog",to:"/blog",current:!1},{name:"Solicitar Presupuesto",to:"/presupuesto",current:!0},{name:"Login",to:"/login",current:!1}]);return(n,r)=>(Ze(),zt(Qe,null,[we(lt(_b),{as:"nav"},{default:Ht(({open:s})=>[Ee("div",IA,[Ee("div",bA,[Ee("div",AA,[Ee("div",RA,[Rn(" Mobile menu button"),we(lt(yb),{class:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:Ht(()=>[SA,CA,s?(Ze(),Br(lt(Tb),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(Ze(),Br(lt(Eb),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),Ee("div",PA,[Rn(" Logo "),Ee("div",kA,[we(lt(Sa),{to:"/"},{default:Ht(()=>[OA]),_:1})]),Rn(" Navigation links "),Ee("div",NA,[Ee("div",DA,[(Ze(!0),zt(Qe,null,Jl(e.value,i=>(Ze(),Br(lt(Sa),{key:i.name,to:i.to,class:Qr([i.current?"bg-indigo-900 text-white":"text-black-300","rounded-md px-3 py-2 text-sm font-medium",i.current?"":"hover:underline"]),"aria-current":i.current?"page":void 0},{default:Ht(()=>[pr(Fa(i.name),1)]),_:2},1032,["to","class","aria-current"]))),128))])])])])]),we(lt(vb),{class:"sm:hidden"},{default:Ht(()=>[Ee("div",xA,[(Ze(!0),zt(Qe,null,Jl(e.value,i=>(Ze(),Br(lt(Sa),{key:i.name,to:i.to,onClick:o=>s=!1,class:Qr([i.current?"bg-indigo-900 text-white":"text-black-300","block rounded-md px-3 py-2 text-base font-medium",i.current?"":"hover:underline"]),"aria-current":i.current?"page":void 0},{default:Ht(()=>[pr(Fa(i.name),1)]),_:2},1032,["to","onClick","class","aria-current"]))),128))])]),_:2},1024)])]),_:1}),we(lt(ty))],64))}},MA={__name:"App",setup(t){return(e,n)=>(Ze(),zt("header",null,[we(VA)]))}},LA="modulepreload",UA=function(t){return"/"+t},mp={},Ni=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=UA(c),c in mp)return;mp[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":LA,l||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var _p={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ry={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ny(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new BA;const g=i<<2|c>>4;if(r.push(g),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jA=function(t){const e=ny(t);return ry.encodeByteArray(e,!0)},Ya=function(t){return jA(t).replace(/\./g,"")},sy=function(t){try{return ry.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=()=>$A().__FIREBASE_DEFAULTS__,qA=()=>{if(typeof process>"u"||typeof _p>"u")return;const t=_p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sy(t[1]);return e&&JSON.parse(e)},Oc=()=>{try{return HA()||qA()||KA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iy=t=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oy=t=>{const e=iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ay=()=>{var t;return(t=Oc())===null||t===void 0?void 0:t.config},cy=t=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function GA(){var t;const e=(t=Oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XA(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YA(){return!GA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hy(){try{return typeof indexedDB=="object"}catch{return!1}}function dy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function JA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZA,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eR(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new rn(s,c,r)}}function eR(t,e){return t.replace(tR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tR=/\{\$([^}]+)}/g;function nR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yp(i)&&yp(o)){if(!po(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rR(t,e){const n=new sR(t,e);return n.subscribe.bind(n)}class sR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kl),s.error===void 0&&(s.error=kl),s.complete===void 0&&(s.complete=kl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,aR=2,cR=4*60*60*1e3,lR=.5;function vp(t,e=oR,n=aR){const r=e*Math.pow(n,t),s=Math.round(lR*r*(Math.random()-.5)*2);return Math.min(cR,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dR(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hR(t){return t===Mr?void 0:t}function dR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const pR={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},gR=Ie.INFO,mR={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},_R=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=gR,this._logHandler=_R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const yR=(t,e)=>e.some(n=>t instanceof n);let Ep,Tp;function vR(){return Ep||(Ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ER(){return Tp||(Tp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fy=new WeakMap,yu=new WeakMap,py=new WeakMap,Ol=new WeakMap,wh=new WeakMap;function TR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fy.set(n,t)}).catch(()=>{}),wh.set(e,t),e}function wR(t){if(yu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yu.set(t,e)}let vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IR(t){vu=t(vu)}function bR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nl(this),e,...n);return py.set(r,e.sort?e.sort():[e]),gr(r)}:ER().includes(t)?function(...e){return t.apply(Nl(this),e),gr(fy.get(this))}:function(...e){return gr(t.apply(Nl(this),e))}}function AR(t){return typeof t=="function"?bR(t):(t instanceof IDBTransaction&&wR(t),yR(t,vR())?new Proxy(t,vu):t)}function gr(t){if(t instanceof IDBRequest)return TR(t);if(Ol.has(t))return Ol.get(t);const e=AR(t);return e!==t&&(Ol.set(t,e),wh.set(e,t)),e}const Nl=t=>wh.get(t);function gy(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const RR=["get","getKey","getAll","getAllKeys","count"],SR=["put","add","delete","clear"],Dl=new Map;function wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dl.get(e))return Dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RR.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dl.set(e,i),i}IR(t=>({...t,get:(e,n,r)=>wp(e,n)||t.get(e,n,r),has:(e,n)=>!!wp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eu="@firebase/app",Ip="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Nc("@firebase/app"),kR="@firebase/app-compat",OR="@firebase/analytics-compat",NR="@firebase/analytics",DR="@firebase/app-check-compat",xR="@firebase/app-check",VR="@firebase/auth",MR="@firebase/auth-compat",LR="@firebase/database",UR="@firebase/database-compat",FR="@firebase/functions",BR="@firebase/functions-compat",jR="@firebase/installations",$R="@firebase/installations-compat",HR="@firebase/messaging",qR="@firebase/messaging-compat",KR="@firebase/performance",zR="@firebase/performance-compat",WR="@firebase/remote-config",GR="@firebase/remote-config-compat",QR="@firebase/storage",XR="@firebase/storage-compat",YR="@firebase/firestore",JR="@firebase/vertexai-preview",ZR="@firebase/firestore-compat",eS="firebase",tS="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="[DEFAULT]",nS={[Eu]:"fire-core",[kR]:"fire-core-compat",[NR]:"fire-analytics",[OR]:"fire-analytics-compat",[xR]:"fire-app-check",[DR]:"fire-app-check-compat",[VR]:"fire-auth",[MR]:"fire-auth-compat",[LR]:"fire-rtdb",[UR]:"fire-rtdb-compat",[FR]:"fire-fn",[BR]:"fire-fn-compat",[jR]:"fire-iid",[$R]:"fire-iid-compat",[HR]:"fire-fcm",[qR]:"fire-fcm-compat",[KR]:"fire-perf",[zR]:"fire-perf-compat",[WR]:"fire-rc",[GR]:"fire-rc-compat",[QR]:"fire-gcs",[XR]:"fire-gcs-compat",[YR]:"fire-fst",[ZR]:"fire-fst-compat",[JR]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,rS=new Map,wu=new Map;function bp(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(wu.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;wu.set(e,t);for(const n of Ja.values())bp(n,t);for(const n of rS.values())bp(n,t);return!0}function Cr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new us("app","Firebase",sS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=tS;function my(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=ay()),!n)throw mr.create("no-options");const i=Ja.get(s);if(i){if(po(n,i.options)&&po(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new fR(s);for(const l of wu.values())o.addComponent(l);const c=new iS(n,r,o);return Ja.set(s,c),c}function Dc(t=Tu){const e=Ja.get(t);if(!e&&t===Tu&&ay())return my();if(!e)throw mr.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let s=(r=nS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(c.join(" "));return}hn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebase-heartbeat-database",aS=1,go="firebase-heartbeat-store";let xl=null;function _y(){return xl||(xl=gy(oS,aS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),xl}async function cS(t){try{const n=(await _y()).transaction(go),r=await n.objectStore(go).get(yy(t));return await n.done,r}catch(e){if(e instanceof rn)es.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function Ap(t,e){try{const r=(await _y()).transaction(go,"readwrite");await r.objectStore(go).put(e,yy(t)),await r.done}catch(n){if(n instanceof rn)es.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function yy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=1024,uS=30*24*60*60*1e3;class hS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=uS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rp(),{heartbeatsToSend:r,unsentEntries:s}=dS(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rp(){return new Date().toISOString().substring(0,10)}function dS(t,e=lS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hy()?dy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sp(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){hn(new nn("platform-logger",e=>new CR(e),"PRIVATE")),hn(new nn("heartbeat",e=>new hS(e),"PRIVATE")),Mt(Eu,Ip,t),Mt(Eu,Ip,"esm2017"),Mt("fire-js","")}pS("");var gS="firebase",mS="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(gS,mS,"app");var Cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,vy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,R,b){for(var T=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)T[ve-2]=arguments[ve];return m.prototype[R].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var E=Array(16);if(typeof m=="string")for(var R=0;16>R;++R)E[R]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(R=0;16>R;++R)E[R]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],R=I.g[2];var b=I.g[3],T=m+(b^y&(R^b))+E[0]+3614090360&4294967295;m=y+(T<<7&4294967295|T>>>25),T=b+(R^m&(y^R))+E[1]+3905402710&4294967295,b=m+(T<<12&4294967295|T>>>20),T=R+(y^b&(m^y))+E[2]+606105819&4294967295,R=b+(T<<17&4294967295|T>>>15),T=y+(m^R&(b^m))+E[3]+3250441966&4294967295,y=R+(T<<22&4294967295|T>>>10),T=m+(b^y&(R^b))+E[4]+4118548399&4294967295,m=y+(T<<7&4294967295|T>>>25),T=b+(R^m&(y^R))+E[5]+1200080426&4294967295,b=m+(T<<12&4294967295|T>>>20),T=R+(y^b&(m^y))+E[6]+2821735955&4294967295,R=b+(T<<17&4294967295|T>>>15),T=y+(m^R&(b^m))+E[7]+4249261313&4294967295,y=R+(T<<22&4294967295|T>>>10),T=m+(b^y&(R^b))+E[8]+1770035416&4294967295,m=y+(T<<7&4294967295|T>>>25),T=b+(R^m&(y^R))+E[9]+2336552879&4294967295,b=m+(T<<12&4294967295|T>>>20),T=R+(y^b&(m^y))+E[10]+4294925233&4294967295,R=b+(T<<17&4294967295|T>>>15),T=y+(m^R&(b^m))+E[11]+2304563134&4294967295,y=R+(T<<22&4294967295|T>>>10),T=m+(b^y&(R^b))+E[12]+1804603682&4294967295,m=y+(T<<7&4294967295|T>>>25),T=b+(R^m&(y^R))+E[13]+4254626195&4294967295,b=m+(T<<12&4294967295|T>>>20),T=R+(y^b&(m^y))+E[14]+2792965006&4294967295,R=b+(T<<17&4294967295|T>>>15),T=y+(m^R&(b^m))+E[15]+1236535329&4294967295,y=R+(T<<22&4294967295|T>>>10),T=m+(R^b&(y^R))+E[1]+4129170786&4294967295,m=y+(T<<5&4294967295|T>>>27),T=b+(y^R&(m^y))+E[6]+3225465664&4294967295,b=m+(T<<9&4294967295|T>>>23),T=R+(m^y&(b^m))+E[11]+643717713&4294967295,R=b+(T<<14&4294967295|T>>>18),T=y+(b^m&(R^b))+E[0]+3921069994&4294967295,y=R+(T<<20&4294967295|T>>>12),T=m+(R^b&(y^R))+E[5]+3593408605&4294967295,m=y+(T<<5&4294967295|T>>>27),T=b+(y^R&(m^y))+E[10]+38016083&4294967295,b=m+(T<<9&4294967295|T>>>23),T=R+(m^y&(b^m))+E[15]+3634488961&4294967295,R=b+(T<<14&4294967295|T>>>18),T=y+(b^m&(R^b))+E[4]+3889429448&4294967295,y=R+(T<<20&4294967295|T>>>12),T=m+(R^b&(y^R))+E[9]+568446438&4294967295,m=y+(T<<5&4294967295|T>>>27),T=b+(y^R&(m^y))+E[14]+3275163606&4294967295,b=m+(T<<9&4294967295|T>>>23),T=R+(m^y&(b^m))+E[3]+4107603335&4294967295,R=b+(T<<14&4294967295|T>>>18),T=y+(b^m&(R^b))+E[8]+1163531501&4294967295,y=R+(T<<20&4294967295|T>>>12),T=m+(R^b&(y^R))+E[13]+2850285829&4294967295,m=y+(T<<5&4294967295|T>>>27),T=b+(y^R&(m^y))+E[2]+4243563512&4294967295,b=m+(T<<9&4294967295|T>>>23),T=R+(m^y&(b^m))+E[7]+1735328473&4294967295,R=b+(T<<14&4294967295|T>>>18),T=y+(b^m&(R^b))+E[12]+2368359562&4294967295,y=R+(T<<20&4294967295|T>>>12),T=m+(y^R^b)+E[5]+4294588738&4294967295,m=y+(T<<4&4294967295|T>>>28),T=b+(m^y^R)+E[8]+2272392833&4294967295,b=m+(T<<11&4294967295|T>>>21),T=R+(b^m^y)+E[11]+1839030562&4294967295,R=b+(T<<16&4294967295|T>>>16),T=y+(R^b^m)+E[14]+4259657740&4294967295,y=R+(T<<23&4294967295|T>>>9),T=m+(y^R^b)+E[1]+2763975236&4294967295,m=y+(T<<4&4294967295|T>>>28),T=b+(m^y^R)+E[4]+1272893353&4294967295,b=m+(T<<11&4294967295|T>>>21),T=R+(b^m^y)+E[7]+4139469664&4294967295,R=b+(T<<16&4294967295|T>>>16),T=y+(R^b^m)+E[10]+3200236656&4294967295,y=R+(T<<23&4294967295|T>>>9),T=m+(y^R^b)+E[13]+681279174&4294967295,m=y+(T<<4&4294967295|T>>>28),T=b+(m^y^R)+E[0]+3936430074&4294967295,b=m+(T<<11&4294967295|T>>>21),T=R+(b^m^y)+E[3]+3572445317&4294967295,R=b+(T<<16&4294967295|T>>>16),T=y+(R^b^m)+E[6]+76029189&4294967295,y=R+(T<<23&4294967295|T>>>9),T=m+(y^R^b)+E[9]+3654602809&4294967295,m=y+(T<<4&4294967295|T>>>28),T=b+(m^y^R)+E[12]+3873151461&4294967295,b=m+(T<<11&4294967295|T>>>21),T=R+(b^m^y)+E[15]+530742520&4294967295,R=b+(T<<16&4294967295|T>>>16),T=y+(R^b^m)+E[2]+3299628645&4294967295,y=R+(T<<23&4294967295|T>>>9),T=m+(R^(y|~b))+E[0]+4096336452&4294967295,m=y+(T<<6&4294967295|T>>>26),T=b+(y^(m|~R))+E[7]+1126891415&4294967295,b=m+(T<<10&4294967295|T>>>22),T=R+(m^(b|~y))+E[14]+2878612391&4294967295,R=b+(T<<15&4294967295|T>>>17),T=y+(b^(R|~m))+E[5]+4237533241&4294967295,y=R+(T<<21&4294967295|T>>>11),T=m+(R^(y|~b))+E[12]+1700485571&4294967295,m=y+(T<<6&4294967295|T>>>26),T=b+(y^(m|~R))+E[3]+2399980690&4294967295,b=m+(T<<10&4294967295|T>>>22),T=R+(m^(b|~y))+E[10]+4293915773&4294967295,R=b+(T<<15&4294967295|T>>>17),T=y+(b^(R|~m))+E[1]+2240044497&4294967295,y=R+(T<<21&4294967295|T>>>11),T=m+(R^(y|~b))+E[8]+1873313359&4294967295,m=y+(T<<6&4294967295|T>>>26),T=b+(y^(m|~R))+E[15]+4264355552&4294967295,b=m+(T<<10&4294967295|T>>>22),T=R+(m^(b|~y))+E[6]+2734768916&4294967295,R=b+(T<<15&4294967295|T>>>17),T=y+(b^(R|~m))+E[13]+1309151649&4294967295,y=R+(T<<21&4294967295|T>>>11),T=m+(R^(y|~b))+E[4]+4149444226&4294967295,m=y+(T<<6&4294967295|T>>>26),T=b+(y^(m|~R))+E[11]+3174756917&4294967295,b=m+(T<<10&4294967295|T>>>22),T=R+(m^(b|~y))+E[2]+718787259&4294967295,R=b+(T<<15&4294967295|T>>>17),T=y+(b^(R|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,E=this.B,R=this.h,b=0;b<m;){if(R==0)for(;b<=y;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<m;)if(E[R++]=I.charCodeAt(b++),R==this.blockSize){s(this,E),R=0;break}}else for(;b<m;)if(E[R++]=I[b++],R==this.blockSize){s(this,E),R=0;break}}this.h=R,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var E=0;32>E;E+=8)I[y++]=this.g[m]>>>E&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function o(I,m){this.h=m;for(var y=[],E=!0,R=I.length-1;0<=R;R--){var b=I[R]|0;E&&b==m||(y[R]=b,E=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new o([m|0],0>m?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(u(-I));for(var m=[],y=1,E=0;I>=y;E++)m[E]=I/y|0,y*=4294967296;return new o(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return N(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(m,8)),E=p,R=0;R<I.length;R+=8){var b=Math.min(8,I.length-R),T=parseInt(I.substring(R,R+b),m);8>b?(b=u(Math.pow(m,b)),E=E.j(b).add(u(T))):(E=E.j(y),E=E.add(u(T)))}return E}var p=l(0),g=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(O(this))return"-"+N(this).toString(I);for(var m=u(Math.pow(I,6)),y=this,E="";;){var R=P(y,m).g;y=U(y,R.j(m));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=R,C(y))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=U(this,I),O(I)?-1:C(I)?0:1};function N(I){for(var m=I.g.length,y=[],E=0;E<m;E++)y[E]=~I.g[E];return new o(y,~I.h).add(g)}t.abs=function(){return O(this)?N(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0,R=0;R<=m;R++){var b=E+(this.i(R)&65535)+(I.i(R)&65535),T=(b>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);E=T>>>16,b&=65535,T&=65535,y[R]=T<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(I,m){return I.add(N(m))}t.j=function(I){if(C(this)||C(I))return p;if(O(this))return O(I)?N(this).j(N(I)):N(N(this).j(I));if(O(I))return N(this.j(N(I)));if(0>this.l(v)&&0>I.l(v))return u(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<I.g.length;R++){var b=this.i(E)>>>16,T=this.i(E)&65535,ve=I.i(R)>>>16,be=I.i(R)&65535;y[2*E+2*R]+=T*be,k(y,2*E+2*R),y[2*E+2*R+1]+=b*be,k(y,2*E+2*R+1),y[2*E+2*R+1]+=T*ve,k(y,2*E+2*R+1),y[2*E+2*R+2]+=b*ve,k(y,2*E+2*R+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new o(y,0)};function k(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function S(I,m){this.g=I,this.h=m}function P(I,m){if(C(m))throw Error("division by zero");if(C(I))return new S(p,p);if(O(I))return m=P(N(I),m),new S(N(m.g),N(m.h));if(O(m))return m=P(I,N(m)),new S(N(m.g),m.h);if(30<I.g.length){if(O(I)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=g,E=m;0>=E.l(I);)y=M(y),E=M(E);var R=V(y,1),b=V(E,1);for(E=V(E,2),y=V(y,2);!C(E);){var T=b.add(E);0>=T.l(I)&&(R=R.add(y),b=T),E=V(E,1),y=V(y,1)}return m=U(I,R.j(m)),new S(R,m)}for(R=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=u(y),T=b.j(m);O(T)||0<T.l(I);)y-=E,b=u(y),T=b.j(m);C(b)&&(b=g),R=R.add(b),I=U(I,T)}return new S(R,I)}t.A=function(I){return P(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)&I.i(E);return new o(y,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)|I.i(E);return new o(y,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)^I.i(E);return new o(y,this.h^I.h)};function M(I){for(var m=I.g.length+1,y=[],E=0;E<m;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(y,I.h)}function V(I,m){var y=m>>5;m%=32;for(var E=I.g.length-y,R=[],b=0;b<E;b++)R[b]=0<m?I.i(b+y)>>>m|I.i(b+y+1)<<32-m:I.i(b+y);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Wr=o}).apply(typeof Cp<"u"?Cp:typeof self<"u"?self:typeof window<"u"?window:{});var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ey,Ty,Fi,wy,Ca,Iu,Iy,by,Ay;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in f))break e;f=f[D]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,D={next:function(){if(!_&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,D,L){for(var Q=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Q[Ue-2]=arguments[Ue];return h.prototype[D].apply(_,Q)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(l(_)){const D=a.length||0,L=_.length||0;a.length=D+L;for(let Q=0;Q<L;Q++)a[D+Q]=_[Q]}else a.push(_)}}class U{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function m(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(f in _)a[f]=_[f];for(let L=0;L<y.length;L++)f=y[L],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){c.setTimeout(()=>{throw a},0)}function T(){var a=ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ve{constructor(){this.h=this.g=null}add(h,f){const _=be.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var be=new U(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ne=!1,ot=new ve,Ft=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(At)}};var At=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){b(f)}var h=be;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ne=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function De(a,h){if(H.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{P(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ne[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&De.aa.h.call(this)}}C(De,H);var Ne={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(a,h,f,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=D,this.key=++ee,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,f,_,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var Q=w(a,h,_,D);return-1<Q?(h=a[Q],f||(h.fa=!1)):(h=new X(h,this.src,L,!!_,D),h.fa=f,a.push(h)),h};function Ae(a,h){var f=h.type;if(f in a.g){var _=a.g[f],D=Array.prototype.indexOf.call(_,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(_,D,1),L&&(Z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,h,f,_){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==_)return D}return-1}var A="closure_lm_"+(1e6*Math.random()|0),x={};function j(a,h,f,_,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)j(a,h[L],f,_,D);return null}return f=ae(f),a&&a[F]?a.K(h,f,u(_)?!!_.capture:!!_,D):B(a,h,f,!1,_,D)}function B(a,h,f,_,D,L){if(!h)throw Error("Invalid event type");var Q=u(D)?!!D.capture:!!D,Ue=J(a);if(Ue||(a[A]=Ue=new me(a)),f=Ue.add(h,f,_,Q,L),f.proxy)return f;if(_=W(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)ye||(D=Q),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(G(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function a(f){return h.call(a.src,a.listener,f)}const h=$;return a}function Y(a,h,f,_,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)Y(a,h[L],f,_,D);else _=u(_)?!!_.capture:!!_,f=ae(f),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=w(L,f,_,D),-1<f&&(Z(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,f,_,D)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])Ae(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(G(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=J(h))?(Ae(f,a),f.h==0&&(f.src=null,h[A]=null)):Z(a)}}}function G(a){return a in x?x[a]:x[a]="on"+a}function $(a,h){if(a.da)a=!0;else{h=new De(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&z(a),a=f.call(_,h)}return a}function J(a){return a=a[A],a instanceof me?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(h){return a.handleEvent(h)}),a[oe])}function ie(){Be.call(this),this.i=new me(this),this.M=this,this.F=null}C(ie,Be),ie.prototype[F]=!0,ie.prototype.removeEventListener=function(a,h,f,_){Y(this,a,h,f,_)};function ue(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new H(h,a);else if(h instanceof H)h.target=h.target||a;else{var D=h;h=new H(_,a),E(h,D)}if(D=!0,f)for(var L=f.length-1;0<=L;L--){var Q=h.g=f[L];D=Ce(Q,_,!0,h)&&D}if(Q=h.g=a,D=Ce(Q,_,!0,h)&&D,D=Ce(Q,_,!1,h)&&D,f)for(L=0;L<f.length;L++)Q=h.g=f[L],D=Ce(Q,_,!1,h)&&D}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)Z(f[_]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ie.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Ce(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var Q=h[L];if(Q&&!Q.da&&Q.capture==f){var Ue=Q.listener,at=Q.ha||Q.src;Q.fa&&Ae(a.i,Q),D=Ue.call(at,_)!==!1&&D}}return D&&!_.defaultPrevented}function Le(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Xe(a){a.g=Le(()=>{a.g=null,a.i&&(a.i=!1,Xe(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Bt extends Be{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(a){Be.call(this),this.h=a,this.g={}}C(Xt,Be);var gi=[];function Kn(a){V(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),Kn(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=c.JSON.stringify,Rt=c.JSON.parse,Yt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function _s(){}_s.prototype.h=null;function vd(a){return a.h||(a.h=a.i())}function Ed(){}var mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nl(){H.call(this,"d")}C(nl,H);function rl(){H.call(this,"c")}C(rl,H);var kr={},Td=null;function qo(){return Td=Td||new ie}kr.La="serverreachability";function wd(a){H.call(this,kr.La,a)}C(wd,H);function _i(a){const h=qo();ue(h,new wd(h))}kr.STAT_EVENT="statevent";function Id(a,h){H.call(this,kr.STAT_EVENT,a),this.stat=h}C(Id,H);function St(a){const h=qo();ue(h,new Id(h,a))}kr.Ma="timingevent";function bd(a,h){H.call(this,kr.Ma,a),this.size=h}C(bd,H);function yi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function fT(a,h,f,_,D,L){a.info(function(){if(a.g)if(L)for(var Q="",Ue=L.split("&"),at=0;at<Ue.length;at++){var ke=Ue[at].split("=");if(1<ke.length){var mt=ke[0];ke=ke[1];var _t=mt.split("_");Q=2<=_t.length&&_t[1]=="type"?Q+(mt+"="+ke+"&"):Q+(mt+"=redacted&")}}else Q=null;else Q=L;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+f+`
`+Q})}function pT(a,h,f,_,D,L,Q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+f+`
`+L+" "+Q})}function ys(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mT(a,f)+(_?" "+_:"")})}function gT(a,h){a.info(function(){return"TIMEOUT: "+h})}vi.prototype.info=function(){};function mT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var Q=1;Q<D.length;Q++)D[Q]=""}}}}return ms(f)}catch{return h}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ad={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sl;function zo(){}C(zo,_s),zo.prototype.g=function(){return new XMLHttpRequest},zo.prototype.i=function(){return{}},sl=new zo;function zn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rd}function Rd(){this.i=null,this.g="",this.h=!1}var Sd={},il={};function ol(a,h,f){a.L=1,a.v=Xo(wn(h)),a.m=f,a.P=!0,Cd(a,null)}function Cd(a,h){a.F=Date.now(),Wo(a),a.A=wn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),$d(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Rd,a.g=af(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Bt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(gi[0]=D.toString()),D=gi);for(var L=0;L<D.length;L++){var Q=j(f,D[L],_||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),_i(),fT(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=In(this.g);var h=this.g.Ba();const Ts=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Qd(this.g)))){this.J||_t!=4||h==7||(h==8||0>=Ts?_i(3):_i(2)),al(this);var f=this.g.Z();this.X=f;t:if(Pd(this)){var _=Qd(this.g);a="";var D=_.length,L=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Ei(this);var Q="";break t}this.h.i=new c.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(L&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,pT(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,at=this.g;if((Ue=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Ue)){var ke=Ue;break t}}ke=null}if(f=ke)ys(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cl(this,f);else{this.o=!1,this.s=3,St(12),Or(this),Ei(this);break e}}if(this.P){f=!0;let sn;for(;!this.J&&this.C<Q.length;)if(sn=_T(this,Q),sn==il){_t==4&&(this.s=4,St(14),f=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Sd){this.s=4,St(15),ys(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else ys(this.i,this.l,sn,null),cl(this,sn);if(Pd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||Q.length!=0||this.h.h||(this.s=1,St(16),f=!1),this.o=this.o&&f,!f)ys(this.i,this.l,Q,"[Invalid Chunked Response]"),Or(this),Ei(this);else if(0<Q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),pl(mt),mt.M=!0,St(11))}}else ys(this.i,this.l,Q,null),cl(this,Q);_t==4&&Or(this),this.o&&!this.J&&(_t==4?nf(this.j,this):(this.o=!1,Wo(this)))}else xT(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Or(this),Ei(this)}}}catch{}finally{}};function Pd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _T(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?il:(f=Number(h.substring(f,_)),isNaN(f)?Sd:(_+=1,_+f>h.length?il:(h=h.slice(_,_+f),a.C=_+f,h)))}zn.prototype.cancel=function(){this.J=!0,Or(this)};function Wo(a){a.S=Date.now()+a.I,kd(a,a.I)}function kd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(g(a.ba,a),h)}function al(a){a.B&&(c.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(gT(this.i,this.A),this.L!=2&&(_i(),St(17)),Or(this),this.s=2,Ei(this)):kd(this,this.S-a)};function Ei(a){a.j.G==0||a.J||nf(a.j,a)}function Or(a){al(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Kn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function cl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||ll(f.h,a))){if(!a.K&&ll(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ta(f),Zo(f);else break e;fl(f),St(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=yi(g(f.Za,f),6e3));if(1>=Dd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Dr(f,11)}else if((a.K||f.g==a)&&ta(f),!k(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let ke=D[h];if(f.T=ke[0],ke=ke[1],f.G==2)if(ke[0]=="c"){f.K=ke[1],f.ia=ke[2];const mt=ke[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const _t=ke[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const Ts=ke[5];Ts!=null&&typeof Ts=="number"&&0<Ts&&(_=1.5*Ts,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const sn=a.g;if(sn){const ra=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ra){var L=_.h;L.g||ra.indexOf("spdy")==-1&&ra.indexOf("quic")==-1&&ra.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ul(L,L.h),L.h=null))}if(_.D){const gl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;gl&&(_.ya=gl,je(_.I,_.D,gl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var Q=a;if(_.qa=of(_,_.J?_.ia:null,_.W),Q.K){xd(_.h,Q);var Ue=Q,at=_.L;at&&(Ue.I=at),Ue.B&&(al(Ue),Wo(Ue)),_.g=Q}else ef(_);0<f.i.length&&ea(f)}else ke[0]!="stop"&&ke[0]!="close"||Dr(f,7);else f.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Dr(f,7):dl(f):ke[0]!="noop"&&f.l&&f.l.ta(ke),f.v=0)}}_i(4)}catch{}}var yT=class{constructor(a,h){this.g=a,this.map=h}};function Od(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dd(a){return a.h?1:a.g?a.g.size:0}function ll(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ul(a,h){a.g?a.g.add(h):a.h=h}function xd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Od.prototype.cancel=function(){if(this.i=Vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function vT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function ET(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Md(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=ET(a),_=vT(a),D=_.length,L=0;L<D;L++)h.call(void 0,_[L],f&&f[L],a)}var Ld=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),D=null;if(0<=_){var L=a[f].substring(0,_);D=a[f].substring(_+1)}else L=a[f];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,Go(this,a.j),this.o=a.o,this.g=a.g,Qo(this,a.s),this.l=a.l;var h=a.i,f=new Ii;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ud(this,f),this.m=a.m}else a&&(h=String(a).match(Ld))?(this.h=!1,Go(this,h[1]||"",!0),this.o=Ti(h[2]||""),this.g=Ti(h[3]||"",!0),Qo(this,h[4]),this.l=Ti(h[5]||"",!0),Ud(this,h[6]||"",!0),this.m=Ti(h[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(wi(h,Fd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(wi(h,Fd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(wi(f,f.charAt(0)=="/"?bT:IT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",wi(f,RT)),a.join("")};function wn(a){return new Nr(a)}function Go(a,h,f){a.j=f?Ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Qo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ud(a,h,f){h instanceof Ii?(a.i=h,ST(a.i,a.h)):(f||(h=wi(h,AT)),a.i=new Ii(h,a.h))}function je(a,h,f){a.i.set(h,f)}function Xo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,wT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fd=/[#\/\?@]/g,IT=/[#\?:]/g,bT=/[#\?]/g,AT=/[#\?@]/g,RT=/#/g;function Ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&TT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ii.prototype,t.add=function(a,h){Wn(this),this.i=null,a=vs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Bd(a,h){Wn(a),h=vs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function jd(a,h){return Wn(a),h=vs(a,h),a.g.has(h)}t.forEach=function(a,h){Wn(this),this.g.forEach(function(f,_){f.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const D=a[_];for(let L=0;L<D.length;L++)f.push(h[_])}return f},t.V=function(a){Wn(this);let h=[];if(typeof a=="string")jd(this,a)&&(h=h.concat(this.g.get(vs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Wn(this),this.i=null,a=vs(this,a),jd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function $d(a,h,f){Bd(a,h),0<f.length&&(a.i=null,a.g.set(vs(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const L=encodeURIComponent(String(_)),Q=this.V(_);for(_=0;_<Q.length;_++){var D=L;Q[_]!==""&&(D+="="+encodeURIComponent(String(Q[_]))),a.push(D)}}return this.i=a.join("&")};function vs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ST(a,h){h&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(f,_){var D=_.toLowerCase();_!=D&&(Bd(this,_),$d(this,D,f))},a)),a.j=h}function CT(a,h){const f=new vi;if(c.Image){const _=new Image;_.onload=v(Gn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=v(Gn,f,"TestLoadImage: error",!1,h,_),_.onabort=v(Gn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=v(Gn,f,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function PT(a,h){const f=new vi,_=new AbortController,D=setTimeout(()=>{_.abort(),Gn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(D),L.ok?Gn(f,"TestPingServer: ok",!0,h):Gn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Gn(f,"TestPingServer: error",!1,h)})}function Gn(a,h,f,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(f)}catch{}}function kT(){this.g=new Yt}function OT(a,h,f){const _=f||"";try{Md(a,function(D,L){let Q=D;u(D)&&(Q=ms(D)),h.push(_+L+"="+encodeURIComponent(Q))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function bi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(bi,_s),bi.prototype.g=function(){return new Yo(this.l,this.j)},bi.prototype.i=function(a){return function(){return a}}({});function Yo(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Yo,ie),t=Yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ai(this):Ri(this),this.readyState==3&&Hd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ri(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qd(a){let h="";return V(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function hl(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=qd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Ge(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ge,ie);var NT=/^https?$/i,DT=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sl.g(),this.v=this.o?vd(this.o):vd(sl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Kd(this,L);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)f.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())f.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(DT,h,void 0))||_||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Q]of f)this.g.setRequestHeader(L,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gd(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Kd(this,L)}};function Kd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zd(a),Jo(a)}function zd(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wd(this):this.bb())},t.bb=function(){Wd(this)};function Wd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Le(a.Ea,0,a);else if(ue(a,"readystatechange"),In(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=Q===0){var D=String(a.D).match(Ld)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),_=!NT.test(D?D.toLowerCase():"")}f=_}if(f)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var L=2<In(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",zd(a)}}finally{Jo(a)}}}}function Jo(a,h){if(a.g){Gd(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ue(a,"ready");try{f.onreadystatechange=_}catch{}}}function Gd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Rt(h)}};function Qd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xT(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(k(a[_]))continue;var f=R(a[_]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[D]||[];h[D]=L,L.push(f)}I(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Xd(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,a),this.cb=Si("retryDelaySeedMs",1e4,a),this.Wa=Si("forwardChannelMaxRetries",2,a),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Od(a&&a.concurrentRequestLimit),this.Da=new kT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){St(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=of(this,null,this.W),ea(this)};function dl(a){if(Yd(a),a.G==3){var h=a.U++,f=wn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),Ci(a,f),h=new zn(a,a.j,h),h.L=2,h.v=Xo(wn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=af(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Wo(h)}sf(a)}function Zo(a){a.g&&(pl(a),a.g.cancel(),a.g=null)}function Yd(a){Zo(a),a.u&&(c.clearTimeout(a.u),a.u=null),ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ea(a){if(!Nd(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||Ft(),ne||(le(),ne=!0),ot.add(h,a),a.B=0}}function VT(a,h){return Dd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(g(a.Ga,a,h),rf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new zn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=m(L),E(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Zd(this,D,h),f=wn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),Ci(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(qd(L)))+"&"+h:this.m&&hl(f,this.m,L)),ul(this.h,D),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),D.T=!0,ol(D,f,null)):ol(D,f,h),this.G=2}}else this.G==3&&(a?Jd(this,a):this.i.length==0||Nd(this.h)||Jd(this))};function Jd(a,h){var f;h?f=h.l:f=a.U++;const _=wn(a.I);je(_,"SID",a.K),je(_,"RID",f),je(_,"AID",a.T),Ci(a,_),a.m&&a.o&&hl(_,a.m,a.o),f=new zn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Zd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ul(a.h,f),ol(f,_,h)}function Ci(a,h){a.H&&V(a.H,function(f,_){je(h,_,f)}),a.l&&Md({},function(f,_){je(h,_,f)})}function Zd(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const Q=["count="+f];L==-1?0<f?(L=D[0].g,Q.push("ofs="+L)):L=0:Q.push("ofs="+L);let Ue=!0;for(let at=0;at<f;at++){let ke=D[at].g;const mt=D[at].map;if(ke-=L,0>ke)L=Math.max(0,D[at].g-100),Ue=!1;else try{OT(mt,Q,"req"+ke+"_")}catch{_&&_(mt)}}if(Ue){_=Q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function ef(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||Ft(),ne||(le(),ne=!0),ot.add(h,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(g(a.Fa,a),rf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,tf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Zo(this),tf(this))};function pl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function tf(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),Ci(a,h),a.m&&a.o&&hl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Xo(wn(h)),f.m=null,f.P=!0,Cd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),fl(this),St(19))};function ta(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function nf(a,h){var f=null;if(a.g==h){ta(a),pl(a),a.g=null;var _=2}else if(ll(a.h,h))f=h.D,xd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=qo(),ue(_,new bd(_,f)),ea(a)}else ef(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&VT(a,h)||_==2&&fl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function rf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const D=!_;_=new Nr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Go(_,"https"),Xo(_),D?CT(_.toString(),f):PT(_.toString(),f)}else St(2);a.G=0,a.l&&a.l.sa(h),sf(a),Yd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function sf(a){if(a.G=0,a.ka=[],a.l){const h=Vd(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function of(a,h,f){var _=f instanceof Nr?wn(f):new Nr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Qo(_,_.s);else{var D=c.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new Nr(null);_&&Go(L,_),h&&(L.g=h),D&&Qo(L,D),f&&(L.l=f),_=L}return f=a.D,h=a.ya,f&&h&&je(_,f,h),je(_,"VER",a.la),Ci(a,_),_}function af(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ge(new bi({eb:f})):new Ge(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cf(){}t=cf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function na(){}na.prototype.g=function(a,h){return new jt(a,h)};function jt(a,h){ie.call(this),this.g=new Xd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!k(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!k(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Es(this)}C(jt,ie),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){dl(this.g)},jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ms(a),a=f);h.i.push(new yT(h.Ya++,a)),h.G==3&&ea(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,jt.aa.N.call(this)};function lf(a){nl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(lf,nl);function uf(){rl.call(this),this.status=1}C(uf,rl);function Es(a){this.g=a}C(Es,cf),Es.prototype.ua=function(){ue(this.g,"a")},Es.prototype.ta=function(a){ue(this.g,new lf(a))},Es.prototype.sa=function(a){ue(this.g,new uf)},Es.prototype.ra=function(){ue(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Ay=function(){return new na},by=function(){return qo()},Iy=kr,Iu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,Ca=Ko,Ad.COMPLETE="complete",wy=Ad,Ed.EventType=mi,mi.OPEN="a",mi.CLOSE="b",mi.ERROR="c",mi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Fi=Ed,Ty=bi,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Ey=Ge}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});const Pp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Nc("@firebase/firestore");function Di(){return ts.logLevel}function se(t,...e){if(ts.logLevel<=Ie.DEBUG){const n=e.map(Ih);ts.debug(`Firestore (${ci}): ${t}`,...n)}}function Fn(t,...e){if(ts.logLevel<=Ie.ERROR){const n=e.map(Ih);ts.error(`Firestore (${ci}): ${t}`,...n)}}function Ys(t,...e){if(ts.logLevel<=Ie.WARN){const n=e.map(Ih);ts.warn(`Firestore (${ci}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Fe(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class yS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vS{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new Ry(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new vt(e)}}class ES{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ES(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new wS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new st(0,0))}static max(){return new ge(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends mo{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const AS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends mo{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return AS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ce(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ce(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(qe.fromString(e))}static fromName(e){return new he(qe.fromString(e).popFirst(5))}static empty(){return new he(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new qe(e.slice()))}}function RS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new wr(s,he.empty(),e)}function SS(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(ge.min(),he.empty(),-1)}static max(){return new wr(ge.max(),he.empty(),-1)}}function CS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==PS)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function OS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bh.oe=-1;function xc(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function NS(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Op(this.data.getIterator())}getIteratorFrom(e){return new Op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new an([])}unionWith(e){let n=new ft(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Py("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const DS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=DS.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rh(t){const e=t.mapValue.fields.__previous_value__;return Ah(e)?Rh(e):e}function _o(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ah(t)?4:VS(t)?9007199254740991:10:pe()}function En(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),c=Ir(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ns(s.bytesValue).isEqual(ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),c=Je(i.doubleValue);return o===c?Za(o)===Za(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(kp(o)!==kp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!En(o[l],c[l])))return!1;return!0}(t,e);default:return pe()}}function vo(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Je(i.integerValue||i.doubleValue),l=Je(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Np(t.timestampValue,e.timestampValue);case 4:return Np(_o(t),_o(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ns(i),l=ns(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Oe(c[u],l[u]);if(d!==0)return d}return Oe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Oe(Je(i.latitude),Je(o.latitude));return c!==0?c:Oe(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=Zs(c[u],l[u]);if(d)return d}return Oe(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ya.mapValue&&o===ya.mapValue)return 0;if(i===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Oe(l[p],d[p]);if(g!==0)return g;const v=Zs(c[l[p]],u[d[p]]);if(v!==0)return v}return Oe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw pe()}}function Np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Ir(t),r=Ir(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function ei(t){return bu(t)}function bu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bu(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Au(t){return!!t&&"integerValue"in t}function Sh(t){return!!t&&"arrayValue"in t}function Dp(t){return!!t&&"nullValue"in t}function xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function Xi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Xi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Pa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){li(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Zt(Xi(this.value))}}function ky(t){const e=[];return li(t.fields,(n,r)=>{const s=new ht([n]);if(Pa(r)){const i=ky(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,ge.min(),ge.min(),ge.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ge.min(),ge.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ge.min(),ge.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function Vp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function MS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{}class rt extends Oy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new US(e,n,r):n==="array-contains"?new jS(e,r):n==="in"?new $S(e,r):n==="not-in"?new HS(e,r):n==="array-contains-any"?new qS(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FS(e,r):new BS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zs(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Oy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return Ny(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ny(t){return t.op==="and"}function Dy(t){return LS(t)&&Ny(t)}function LS(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Ru(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+ei(t.value);if(Dy(t))return t.filters.map(e=>Ru(e)).join(",");{const e=t.filters.map(n=>Ru(n)).join(",");return`${t.op}(${e})`}}function xy(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&xy(o,s.filters[c]),!0):!1}(t,e):void pe()}function Vy(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${ei(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Vy).join(" ,")+"}"}(t):"Filter"}class US extends rt{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class FS extends rt{constructor(e,n){super(e,"in",n),this.keys=My("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BS extends rt{constructor(e,n){super(e,"not-in",n),this.keys=My("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function My(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class jS extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sh(n)&&vo(n.arrayValue,this.value)}}class $S extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class HS extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class qS extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Lp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KS(t,e,n,r,s,i,o)}function Ch(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ru(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ei(r)).join(",")),e.ue=n}return e.ue}function Ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mp(t.startAt,e.startAt)&&Mp(t.endAt,e.endAt)}function Su(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zS(t,e,n,r,s,i,o,c){return new Vc(t,e,n,r,s,i,o,c)}function kh(t){return new Vc(t)}function Up(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WS(t){return t.collectionGroup!==null}function Yi(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ft(ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new tc(i,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new tc(ht.keyField(),r))}return e.ce}function mn(t){const e=_e(t);return e.le||(e.le=GS(e,Yi(t))),e.le}function GS(t,e){if(t.limitType==="F")return Lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tc(s.field,i)});const n=t.endAt?new ec(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ec(t.startAt.position,t.startAt.inclusive):null;return Lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cu(t,e,n){return new Vc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mc(t,e){return Ph(mn(t),mn(e))&&t.limitType===e.limitType}function Ly(t){return`${Ch(mn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vy(s)).join(", ")}]`),xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ei(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ei(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Lc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Vp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Yi(r),s)||r.endAt&&!function(o,c,l){const u=Vp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Yi(r),s))}(t,e)}function QS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Uy(t){return(e,n)=>{let r=!1;for(const s of Yi(t)){const i=XS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function XS(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Zs(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=new ze(he.comparator);function Bn(){return YS}const Fy=new ze(he.comparator);function Bi(...t){let e=Fy;for(const n of t)e=e.insert(n.key,n);return e}function By(t){let e=Fy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return Ji()}function jy(){return Ji()}function Ji(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const JS=new ze(he.comparator),ZS=new ft(he.comparator);function Te(...t){let e=ZS;for(const n of t)e=e.add(n);return e}const eC=new ft(Oe);function tC(){return eC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function Hy(t){return{integerValue:""+t}}function nC(t,e){return NS(e)?Hy(e):$y(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function rC(t,e,n){return t instanceof nc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ah(i)&&(i=Rh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Eo?Ky(t,e):t instanceof To?zy(t,e):function(s,i){const o=qy(s,i),c=Fp(o)+Fp(s.Pe);return Au(o)&&Au(s.Pe)?Hy(c):$y(s.serializer,c)}(t,e)}function sC(t,e,n){return t instanceof Eo?Ky(t,e):t instanceof To?zy(t,e):n}function qy(t,e){return t instanceof rc?function(r){return Au(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nc extends Uc{}class Eo extends Uc{constructor(e){super(),this.elements=e}}function Ky(t,e){const n=Wy(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class To extends Uc{constructor(e){super(),this.elements=e}}function zy(t,e){let n=Wy(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class rc extends Uc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fp(t){return Je(t.integerValue||t.doubleValue)}function Wy(t){return Sh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Eo&&s instanceof Eo||r instanceof To&&s instanceof To?Js(r.elements,s.elements,En):r instanceof rc&&s instanceof rc?En(r.Pe,s.Pe):r instanceof nc&&s instanceof nc}(t.transform,e.transform)}class oC{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function Gy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xy(t.key,Mn.none()):new Mo(t.key,t.data,Mn.none());{const n=t.data,r=Zt.empty();let s=new ft(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ds(t.key,r,new an(s.toArray()),Mn.none())}}function aC(t,e,n){t instanceof Mo?function(s,i,o){const c=s.value.clone(),l=jp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(s,i,o){if(!ka(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=jp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Qy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,r){return t instanceof Mo?function(i,o,c,l){if(!ka(i.precondition,o))return c;const u=i.value.clone(),d=$p(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ds?function(i,o,c,l){if(!ka(i.precondition,o))return c;const u=$p(i.fieldTransforms,l,o),d=o.data;return d.setAll(Qy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ka(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function cC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qy(r.transform,s||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,i))}return n||null}function Bp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Js(r,s,(i,o)=>iC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends Fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ds extends Fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jp(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,sC(o,c,n[s]))}return r}function $p(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rC(i,o,e))}return r}class Xy extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lC extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Gy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>Bp(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>Bp(n,r))}}class Oh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length);let s=function(){return JS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Oh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,Re;function fC(t){switch(t){default:return pe();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Yy(t){if(t===void 0)return Fn("GRPC error has no .code"),q.UNKNOWN;switch(t){case Ye.OK:return q.OK;case Ye.CANCELLED:return q.CANCELLED;case Ye.UNKNOWN:return q.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return q.INTERNAL;case Ye.UNAVAILABLE:return q.UNAVAILABLE;case Ye.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Ye.NOT_FOUND:return q.NOT_FOUND;case Ye.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Ye.ABORTED:return q.ABORTED;case Ye.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Ye.DATA_LOSS:return q.DATA_LOSS;default:return pe()}}(Re=Ye||(Ye={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new Wr([4294967295,4294967295],0);function Hp(t){const e=pC().encode(t),n=new vy;return n.update(e),new Uint8Array(n.digest())}function qp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([s,i],0)]}class Nh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Wr.fromNumber(r)));return s.compare(gC)===1&&(s=new Wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Hp(e),[r,s]=qp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Hp(e),[r,s]=qp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bc(ge.min(),s,new ze(Oe),Bn(),Te())}}class Lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Jy{constructor(e,n){this.targetId=e,this.me=n}}class Zy{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kp{constructor(){this.fe=0,this.ge=Wp(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Lo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Wp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=zp(),this.Qe=new ze(Oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Su(i))if(r===0){const o=new he(i.path);this.Ue(n,o,Et.newNoDocument(o,ge.min()))}else Fe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ns(r).toUint8Array()}catch(l){if(l instanceof Py)return Ys("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nh(o,s,i)}catch(l){return Ys(l instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Su(c.target)){const l=new he(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Et.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Te();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Bc(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=zp(),this.Qe=new ze(Oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Kp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(Oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zp(){return new ze(he.comparator)}function Wp(){return new ze(he.comparator)}const _C={asc:"ASCENDING",desc:"DESCENDING"},yC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vC={and:"AND",or:"OR"};class EC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pu(t,e){return t.useProto3Json||xc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ev(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TC(t,e){return sc(t,e.toTimestamp())}function _n(t){return Fe(!!t),ge.fromTimestamp(function(n){const r=Ir(n);return new st(r.seconds,r.nanos)}(t))}function Dh(t,e){return ku(t,e).canonicalString()}function ku(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tv(t){const e=qe.fromString(t);return Fe(ov(e)),e}function Ou(t,e){return Dh(t.databaseId,e.path)}function Vl(t,e){const n=tv(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(rv(n))}function nv(t,e){return Dh(t.databaseId,e)}function wC(t){const e=tv(t);return e.length===4?qe.emptyPath():rv(e)}function Nu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rv(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gp(t,e,n){return{name:Ou(t,e),fields:n.value.mapValue.fields}}function IC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Fe(d===void 0||typeof d=="string"),bt.fromBase64String(d||"")):(Fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),bt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?q.UNKNOWN:Yy(u.code);return new ce(d,u.message||"")}(o);n=new Zy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vl(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):ge.min(),c=new Zt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Oa(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vl(t,r.document),i=r.readTime?_n(r.readTime):ge.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Oa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vl(t,r.document),i=r.removedTargetIds||[];n=new Oa([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dC(s,i),c=r.targetId;n=new Jy(c,o)}}return n}function bC(t,e){let n;if(e instanceof Mo)n={update:Gp(t,e.key,e.value)};else if(e instanceof Xy)n={delete:Ou(t,e.key)};else if(e instanceof ds)n={update:Gp(t,e.key,e.data),updateMask:DC(e.fieldMask)};else{if(!(e instanceof lC))return pe();n={verify:Ou(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof nc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof rc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:TC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function AC(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(ge.min())&&(o=_n(i)),new oC(o,s.transformResults||[])}(n,e))):[]}function RC(t,e){return{documents:[nv(t,e.path)]}}function SC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nv(t,s);const i=function(u){if(u.length!==0)return iv(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Ss(g.field),direction:kC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Pu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function CC(t){let e=wC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=sv(p);return g instanceof Tn&&Dy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new tc(Cs(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,xc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new ec(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new ec(v,g)}(n.endAt)),zS(e,s,o,i,c,"F",l,u)}function PC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>sv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function kC(t){return _C[t]}function OC(t){return yC[t]}function NC(t){return vC[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Cs(t){return ht.fromServerFormat(t.fieldPath)}function iv(t){return t instanceof rt?function(n){if(n.op==="=="){if(xp(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(Dp(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xp(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(Dp(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:OC(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>iv(s));return r.length===1?r[0]:{compositeFilter:{op:NC(n.op),filters:r}}}(t):pe()}function DC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ov(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),c=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.ct=e}}function VC(t){const e=CC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this._n=new LC}addToCollectionParentIndex(e,n){return this._n.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(wr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class LC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ti(0)}static Ln(){return new ti(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zi(r.mutation,s,an.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Bn();const o=Ji(),c=function(){return Ji()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof ds)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Zi(d.mutation,u,d.mutation.getFieldMask(),st.now())):o.set(u.key,an.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new FC(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ji();let s=new ze((o,c)=>o-c),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||an.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=jy();d.forEach(g=>{if(!i.has(g)){const v=Gy(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(jr());let c=-1,l=i;return o.next(u=>K.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(d=>({batchId:c,changes:By(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,l=>{const u=function(p,g){return new Vc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let c=Bi();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Zi(d.mutation,u,an.empty(),st.now()),Lc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return K.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:VC(s.bundledQuery),readTime:_n(s.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.overlays=new ze(he.comparator),this.hr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new he(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=jr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return K.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hC(n,r));let i=this.hr.get(n);i===void 0&&(i=Te(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.Pr=new ft(it.Ir),this.Tr=new ft(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new it(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new qe([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new qe([])),r=new it(n,e),s=new it(n,e+1);let i=Te();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||Oe(e.pr,n.pr)}static Er(e,n){return Oe(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ft(it.Ir)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uC(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(Oe);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),K.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new it(new he(i),0);let c=new ft(Oe);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),K.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return K.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new it(n,0),s=this.wr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.vr=e,this.docs=function(){return new ze(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,c=new he(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CS(SS(d),r)<=0||(s.has(d.key)||Lc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Fr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KC(this)}getSize(e){return K.resolve(this.size)}}class KC extends UC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.persistence=e,this.Mr=new ui(n=>Ch(n),Ph),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Or=0,this.Nr=new xh,this.targetCount=0,this.Lr=ti.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),K.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ti(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.qn(n),K.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.Br={},this.overlays={},this.kr=new bh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new zC(this),this.indexManager=new MC,this.remoteDocumentCache=function(s){return new qC(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new xC(n),this.$r=new jC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new HC(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new GC(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class GC extends kS{constructor(e){super(),this.currentSequenceNumber=e}}class Vh{constructor(e){this.persistence=e,this.zr=new xh,this.jr=null}static Hr(e){return new Vh(e)}get Jr(){if(this.jr)return this.jr;throw pe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),K.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Jr,r=>{const s=he.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return K.or([()=>K.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return YA()?8:OS(gt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new QC;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Di()<=Ie.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),K.resolve()):(Di()<=Ie.DEBUG&&se("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Di()<=Ie.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):K.resolve())}ji(e,n){if(Up(n))return K.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cu(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Cu(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return Up(n)||s.isEqual(ge.min())?K.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?K.resolve(null):(Di()<=Ie.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.es(e,o,n,RS(s,-1)).next(c=>c))})}Zi(e,n){let r=new ft(Uy(e));return n.forEach((s,i)=>{Lc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Di()<=Ie.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.zi.getDocumentsMatchingQuery(e,n,wr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ze(Oe),this.rs=new ui(i=>Ch(i),Ph),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function JC(t,e,n,r){return new YC(t,e,n,r)}async function av(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function ZC(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let v=K.resolve();return g.forEach(C=>{v=v.next(()=>d.getEntry(l,C)).next(O=>{const N=u.docVersions.get(C);Fe(N!==null),O.version.compareTo(N)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function cv(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function eP(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(bt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(O,N,U){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,v,d)&&c.push(n.Qr.updateTargetData(i,v))});let l=Bn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(tP(i,o,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(ge.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function tP(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):se("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function nP(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rP(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Du(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vo(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Qp(t,e,n){const r=_e(t);let s=ge.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=_e(l),g=p.rs.get(d);return g!==void 0?K.resolve(p.ns.get(g)):p.Qr.getTargetData(u,d)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Te())).next(c=>(sP(r,QS(e),c),{documents:c,hs:i})))}function sP(t,e,n){let r=t.ss.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Xp{constructor(){this.activeTargetIds=tC()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this.no=new Xp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Xp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va=null;function Ml(){return va===null?va=function(){return 268435456+Math.round(2147483648*Math.random())}():va++,"0x"+va.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class lP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=Ml(),l=this.vo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(d=>(se("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Ys("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=aP[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Ml();return new Promise((o,c)=>{const l=new Ey;l.setWithCredentials(!0),l.listenOnce(wy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ca.NO_ERROR:const d=l.getResponseJson();se(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ca.TIMEOUT:se(yt,`RPC '${e}' ${i} timed out`),c(new ce(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const p=l.getStatus();if(se(yt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const C=function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(U)>=0?U:q.UNKNOWN}(v.status);c(new ce(C,v.message))}else c(new ce(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ce(q.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{se(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);se(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=Ml(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ay(),c=by(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Ty({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");se(yt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,v=!1;const C=new cP({lo:N=>{v?se(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(se(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),se(yt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},ho:()=>p.close()}),O=(N,U,k)=>{N.listen(U,S=>{try{k(S)}catch(P){setTimeout(()=>{throw P},0)}})};return O(p,Fi.EventType.OPEN,()=>{v||(se(yt,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),O(p,Fi.EventType.CLOSE,()=>{v||(v=!0,se(yt,`RPC '${e}' stream ${s} transport closed`),C.po())}),O(p,Fi.EventType.ERROR,N=>{v||(v=!0,Ys(yt,`RPC '${e}' stream ${s} transport errored:`,N),C.po(new ce(q.UNAVAILABLE,"The operation could not be completed")))}),O(p,Fi.EventType.MESSAGE,N=>{var U;if(!v){const k=N.data[0];Fe(!!k);const S=k,P=S.error||((U=S[0])===null||U===void 0?void 0:U.error);if(P){se(yt,`RPC '${e}' stream ${s} received error:`,P);const M=P.status;let V=function(y){const E=Ye[y];if(E!==void 0)return Yy(E)}(M),I=P.message;V===void 0&&(V=q.INTERNAL,I="Unknown error status: "+M+" with message "+P.message),v=!0,C.po(new ce(V,I)),p.close()}else se(yt,`RPC '${e}' stream ${s} received:`,k),C.yo(k)}}),O(c,Iy.STAT_EVENT,N=>{N.stat===Iu.PROXY?se(yt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Iu.NOPROXY&&se(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Ll(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return new EC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new lv(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new ce(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uP extends uv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=IC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?_n(o.readTime):ge.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Nu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Su(l)?{documents:RC(i,l)}:{query:SC(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ev(i,o.resumeToken);const u=Pu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){c.readTime=sc(i,o.snapshotVersion.toTimestamp());const u=Pu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=PC(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Nu(this.serializer),n.removeTarget=e,this.i_(n)}}class hP extends uv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=AC(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.A_(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Nu(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bC(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,ku(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(q.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,ku(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(q.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class fP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Fn(n),this.y_=!1):se("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{fs(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.M_.add(4),await Uo(u),u.N_.set("Unknown"),u.M_.delete(4),await $c(u)}(this))})}),this.N_=new fP(r,s)}}async function $c(t){if(fs(t))for(const e of t.x_)await e(!0)}async function Uo(t){for(const e of t.x_)await e(!1)}function hv(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Bh(n)?Fh(n):hi(n).Xo()&&Uh(n,e))}function Lh(t,e){const n=_e(t),r=hi(n);n.F_.delete(e),r.Xo()&&dv(n,e),n.F_.size===0&&(r.Xo()?r.n_():fs(n)&&n.N_.set("Unknown"))}function Uh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hi(t).P_(e)}function dv(t,e){t.L_.xe(e),hi(t).I_(e)}function Fh(t){t.L_=new mC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.N_.w_()}function Bh(t){return fs(t)&&!hi(t).Zo()&&t.F_.size>0}function fs(t){return _e(t).M_.size===0}function fv(t){t.L_=void 0}async function gP(t){t.N_.set("Online")}async function mP(t){t.F_.forEach((e,n)=>{Uh(t,e)})}async function _P(t,e){fv(t),Bh(t)?(t.N_.D_(e),Fh(t)):t.N_.set("Unknown")}async function yP(t,e,n){if(t.N_.set("Online"),e instanceof Zy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof Oa?t.L_.Ke(e):e instanceof Jy?t.L_.He(e):t.L_.We(e),!n.isEqual(ge.min()))try{const r=await cv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(u);d&&i.F_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(bt.EMPTY_BYTE_STRING,d.snapshotVersion)),dv(i,l);const p=new hr(d.target,l,u,d.sequenceNumber);Uh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!Vo(e))throw e;t.M_.add(1),await Uo(t),t.N_.set("Offline"),n||(n=()=>cv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await $c(t)})}function pv(t,e){return e().catch(n=>ic(t,n,e))}async function Hc(t){const e=_e(t),n=br(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;vP(e);)try{const s=await nP(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,EP(e,s)}catch(s){await ic(e,s)}gv(e)&&mv(e)}function vP(t){return fs(t)&&t.v_.length<10}function EP(t,e){t.v_.push(e);const n=br(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function gv(t){return fs(t)&&!br(t).Zo()&&t.v_.length>0}function mv(t){br(t).start()}async function TP(t){br(t).V_()}async function wP(t){const e=br(t);for(const n of t.v_)e.d_(n.mutations)}async function IP(t,e,n){const r=t.v_.shift(),s=Oh.from(r,e,n);await pv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hc(t)}async function bP(t,e){e&&br(t).E_&&await async function(r,s){if(function(o){return fC(o)&&o!==q.ABORTED}(s.code)){const i=r.v_.shift();br(r).t_(),await pv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hc(r)}}(t,e),gv(t)&&mv(t)}async function Jp(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=fs(n);n.M_.add(3),await Uo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await $c(n)}async function AP(t,e){const n=_e(t);e?(n.M_.delete(2),await $c(n)):e||(n.M_.add(2),await Uo(n),n.N_.set("Unknown"))}function hi(t){return t.B_||(t.B_=function(n,r,s){const i=_e(n);return i.f_(),new uP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:gP.bind(null,t),To:mP.bind(null,t),Ao:_P.bind(null,t),h_:yP.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Bh(t)?Fh(t):t.N_.set("Unknown")):(await t.B_.stop(),fv(t))})),t.B_}function br(t){return t.k_||(t.k_=function(n,r,s){const i=_e(n);return i.f_(),new hP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:TP.bind(null,t),Ao:bP.bind(null,t),R_:wP.bind(null,t),A_:IP.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Hc(t)):(await t.k_.stop(),t.v_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new jh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $h(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Vo(t))return new ce(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.q_=new ze(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):pe():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ni{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ni(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class SP{constructor(){this.queries=new ui(e=>Ly(e),Mc),this.onlineState="Unknown",this.z_=new Set}}async function _v(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new RP,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=$h(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Hh(n)}async function yv(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CP(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&Hh(n)}function PP(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Hh(t){t.z_.forEach(e=>{e.next()})}var xu,eg;(eg=xu||(xu={})).J_="default",eg.Cache="cache";class vv{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.key=e}}class Tv{constructor(e){this.key=e}}class kP{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Te(),this.mutatedKeys=Te(),this.Ia=Uy(e),this.Ta=new Bs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Zp,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),v=Lc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),O=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;g&&v?g.data.isEqual(v.data)?C!==O&&(r.track({type:3,doc:v}),N=!0):this.Ra(g,v)||(r.track({type:2,doc:v}),N=!0,(l&&this.Ia(v,l)>0||u&&this.Ia(v,u)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),N=!0):g&&!v&&(r.track({type:1,doc:g}),N=!0,(l||u)&&(c=!0)),N&&(v?(o=o.add(v),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(v,C){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return O(v)-O(C)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new ni(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Zp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Te(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Tv(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Ev(r))}),n}pa(e){this.la=e.hs,this.Pa=Te();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ni.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class OP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NP{constructor(e){this.key=e,this.wa=!1}}class DP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ui(c=>Ly(c),Mc),this.Da=new Map,this.Ca=new Set,this.va=new ze(he.comparator),this.Fa=new Map,this.Ma=new xh,this.xa={},this.Oa=new Map,this.Na=ti.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function xP(t,e,n=!0){const r=Sv(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await wv(r,e,n,!0),s}async function VP(t,e){const n=Sv(t);await wv(n,e,!0,!1)}async function wv(t,e,n,r){const s=await rP(t.localStore,mn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await MP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&hv(t.remoteStore,s),c}async function MP(t,e,n,r,s){t.Ba=(p,g,v)=>async function(O,N,U,k){let S=N.view.da(U);S.Xi&&(S=await Qp(O.localStore,N.query,!1).then(({documents:I})=>N.view.da(I,S)));const P=k&&k.targetChanges.get(N.targetId),M=k&&k.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(S,O.isPrimaryClient,P,M);return ng(O,N.targetId,V.fa),V.snapshot}(t,p,g,v);const i=await Qp(t.localStore,e,!0),o=new kP(e,i.hs),c=o.da(i.documents),l=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ng(t,n,u.fa);const d=new OP(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function LP(t,e,n){const r=_e(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Mc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Du(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Lh(r.remoteStore,s.targetId),Vu(r,s.targetId)}).catch(xo)):(Vu(r,s.targetId),await Du(r.localStore,s.targetId,!0))}async function UP(t,e){const n=_e(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lh(n.remoteStore,r.targetId))}async function FP(t,e,n){const r=zP(t);try{const s=await function(o,c){const l=_e(o),u=st.now(),d=c.reduce((v,C)=>v.add(C.key),Te());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=Bn(),O=Te();return l.os.getEntries(v,d).next(N=>{C=N,C.forEach((U,k)=>{k.isValidDocument()||(O=O.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,C)).next(N=>{p=N;const U=[];for(const k of c){const S=cC(k,p.get(k.key).overlayedDocument);S!=null&&U.push(new ds(k.key,S,ky(S.value.mapValue),Mn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,U,c)}).next(N=>{g=N;const U=N.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(v,N.batchId,U)})}).then(()=>({batchId:g.batchId,changes:By(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ze(Oe)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Fo(r,s.changes),await Hc(r.remoteStore)}catch(s){const i=$h(s,"Failed to persist write");n.reject(i)}}async function Iv(t,e){const n=_e(t);try{const r=await eP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Fe(o.wa):s.removedDocuments.size>0&&(Fe(o.wa),o.wa=!1))}),await Fo(n,r,e)}catch(r){await xo(r)}}function tg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&Hh(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BP(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new ze(he.comparator);o=o.insert(i,Et.newNoDocument(i,ge.min()));const c=Te().add(i),l=new Bc(ge.min(),new Map,new ze(Oe),o,c);await Iv(r,l),r.va=r.va.remove(i),r.Fa.delete(e),qh(r)}else await Du(r.localStore,e,!1).then(()=>Vu(r,e,n)).catch(xo)}async function jP(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await ZC(n.localStore,e);Av(n,r,null),bv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fo(n,s)}catch(s){await xo(s)}}async function $P(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Fe(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Av(r,e,n),bv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fo(r,s)}catch(s){await xo(s)}}function bv(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Av(t,e,n){const r=_e(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Rv(t,r)})}function Rv(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Lh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),qh(t))}function ng(t,e,n){for(const r of n)r instanceof Ev?(t.Ma.addReference(r.key,e),HP(t,r)):r instanceof Tv?(se("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Rv(t,r.key)):pe()}function HP(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(se("SyncEngine","New document in limbo: "+n),t.Ca.add(r),qh(t))}function qh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(qe.fromString(e)),r=t.Na.next();t.Fa.set(r,new NP(n)),t.va=t.va.insert(n,r),hv(t.remoteStore,new hr(mn(kh(n.path)),r,"TargetPurposeLimboResolution",bh.oe))}}async function Fo(t,e,n){const r=_e(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const d=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Mh.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const d=_e(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(u,g=>K.forEach(g.qi,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>K.forEach(g.Qi,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Vo(p))throw p;se("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=d.ns.get(g),C=v.snapshotVersion,O=v.withLastLimboFreeSnapshotVersion(C);d.ns=d.ns.insert(g,O)}}}(r.localStore,i))}async function qP(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await av(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new ce(q.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fo(n,r.us)}}function KP(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return Te().add(r.key);{let s=Te();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function Sv(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BP.bind(null,e),e.Sa.h_=CP.bind(null,e.eventManager),e.Sa.ka=PP.bind(null,e.eventManager),e}function zP(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$P.bind(null,e),e}class rg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JC(this.persistence,new XC,e.initialUser,this.serializer)}createPersistence(e){return new WC(Vh.Hr,this.serializer)}createSharedClientState(e){return new iP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qP.bind(null,this.syncEngine),await AP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SP}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(i){return new lP(i)}(e.databaseInfo);return function(i,o,c,l){return new dP(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new pP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>tg(this.syncEngine,n,0),function(){return Yp.D()?new Yp:new oP}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new DP(s,i,o,c,l,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);se("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Uo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Sy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{se("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(se("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$h(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await av(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XP(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jp(e.remoteStore,s)),t._onlineComponents=e}function QP(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function XP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!QP(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new rg)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new rg);return t._offlineComponents}async function Pv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await sg(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await sg(t,new WP))),t._onlineComponents}function YP(t){return Pv(t).then(e=>e.syncEngine)}async function kv(t){const e=await Pv(t),n=e.eventManager;return n.onListen=xP.bind(null,e.syncEngine),n.onUnlisten=LP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UP.bind(null,e.syncEngine),n}function JP(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Cv({next:g=>{o.enqueueAndForget(()=>yv(i,p));const v=g.docs.has(c);!v&&g.fromCache?u.reject(new ce(q.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?u.reject(new ce(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new vv(kh(c.path),d,{includeMetadataChanges:!0,ra:!0});return _v(i,p)}(await kv(t),t.asyncQueue,e,n,r)),r.promise}function ZP(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Cv({next:g=>{o.enqueueAndForget(()=>yv(i,p)),g.fromCache&&l.source==="server"?u.reject(new ce(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new vv(c,d,{includeMetadataChanges:!0,ra:!0});return _v(i,p)}(await kv(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e,n){if(!n)throw new ce(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ek(t,e,n,r){if(e===!0&&r===!0)throw new ce(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function og(t){if(!he.isDocumentKey(t))throw new ce(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ag(t){if(he.isDocumentKey(t))throw new ce(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(t);throw new ce(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ov((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _S;switch(r.type){case"firstParty":return new TS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ig.get(n);r&&(se("ComponentProvider","Removing Datastore"),ig.delete(n),r.terminate())}(this),Promise.resolve()}}function tk(t,e,n,r={}){var s;const i=(t=ri(t,qc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=vt.MOCK_USER;else{c=ly(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new yS(new Ry(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kc(this.firestore,e,this._query)}}class tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}}class _r extends Kc{constructor(e,n,r){super(e,n,kh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new he(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function lV(t,e,...n){if(t=tt(t),Nv("collection","path",e),t instanceof qc){const r=qe.fromString(e,...n);return ag(r),new _r(t,null,r)}{if(!(t instanceof tn||t instanceof _r))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return ag(r),new _r(t.firestore,null,r)}}function Dv(t,e,...n){if(t=tt(t),arguments.length===1&&(e=Sy.newId()),Nv("doc","path",e),t instanceof qc){const r=qe.fromString(e,...n);return og(r),new tn(t,null,new he(r))}{if(!(t instanceof tn||t instanceof _r))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return og(r),new tn(t.firestore,t instanceof _r?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new lv(this,"async_queue_retry"),this.hu=()=>{const n=Ll();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Vn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Vo(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=jh.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&pe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class zc extends qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new nk}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xv(this),this._firestoreClient.terminate()}}function rk(t,e){const n=typeof t=="object"?t:Dc(),r=typeof t=="string"?t:"(default)",s=Cr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oy("firestore");i&&tk(s,...i)}return s}function zh(t){return t._firestoreClient||xv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xv(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new xS(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ov(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new GP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(bt.fromBase64String(e))}catch(n){throw new ce(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=/^__.*__$/;class ik{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}function Mv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Qh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Qh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return oc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Mv(this.fu)&&sk.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class ok{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}Fu(e,n,r,s=!1){return new Qh({fu:e,methodName:n,vu:r,path:ht.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ak(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new ok(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ck(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Bv("Data must be an object, but it was:",o,r);const c=Uv(r,o);let l,u;if(i.merge)l=new an(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=lk(e,p,n);if(!o.contains(g))throw new ce(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hk(d,g)||d.push(g)}l=new an(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new ik(new Zt(c),l,u)}function Lv(t,e){if(Fv(t=tt(t)))return Bv("Unsupported field value:",e,t),Uv(t,e);if(t instanceof Vv)return function(r,s){if(!Mv(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Lv(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:sc(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sc(s.serializer,i)}}if(r instanceof Gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof si)return{bytesValue:ev(s.serializer,r._byteString)};if(r instanceof tn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Kh(r)}`)}(t,e)}function Uv(t,e){const n={};return Cy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,s)=>{const i=Lv(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Fv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Gh||t instanceof si||t instanceof tn||t instanceof Vv)}function Bv(t,e,n){if(!Fv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function lk(t,e,n){if((e=tt(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return jv(t,e);throw oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const uk=new RegExp("[~\\*/\\[\\]]");function jv(t,e,n){if(e.search(uk)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wh(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce(q.INVALID_ARGUMENT,c+t+l)}function hk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dk extends $v{data(){return super.data()}}function Hv(t,e){return typeof e=="string"?jv(t,e):e instanceof Wh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pk{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Gh(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Fe(ov(r));const s=new yo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qv extends $v{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Na extends qv{data(e={}){return super.data(e)}}class mk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Na(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $i(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Na(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $i(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:_k(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _k(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){t=ri(t,tn);const e=ri(t.firestore,zc);return JP(zh(e),t._key).then(n=>Ek(e,t,n))}class Kv extends pk{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,n)}}function uV(t){t=ri(t,Kc);const e=ri(t.firestore,zc),n=zh(e),r=new Kv(e);return fk(t._query),ZP(n,t._query).then(s=>new mk(e,r,t,s))}function hV(t,e){const n=ri(t.firestore,zc),r=Dv(t),s=gk(t.converter,e);return vk(n,[ck(ak(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Mn.exists(!1))]).then(()=>r)}function vk(t,e){return function(r,s){const i=new Vn;return r.asyncQueue.enqueueAndForget(async()=>FP(await YP(r),s,i)),i.promise}(zh(t),e)}function Ek(t,e,n){const r=n.docs.get(e._key),s=new Kv(t);return new qv(t,s,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ci=s})(hs),hn(new nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new zc(new vS(r.getProvider("auth-internal")),new IS(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Mt(Pp,"4.6.3",e),Mt(Pp,"4.6.3","esm2017")})();function Xh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tk=zv,Wv=new us("auth","Firebase",zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Nc("@firebase/auth");function wk(t,...e){ac.logLevel<=Ie.WARN&&ac.warn(`Auth (${hs}): ${t}`,...e)}function Da(t,...e){ac.logLevel<=Ie.ERROR&&ac.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw Yh(t,...e)}function yn(t,...e){return Yh(t,...e)}function Gv(t,e,n){const r=Object.assign(Object.assign({},Tk()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return Gv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wv.create(t,...e)}function fe(t,e,...n){if(!t)throw Yh(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function jn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ik(){return lg()==="http:"||lg()==="https:"}function lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ik()||uy()||"connection"in navigator)?navigator.onLine:!0}function Ak(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=WA()||QA()}get(){return bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new Bo(3e4,6e4);function ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,r,s={}){return Xv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Do(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qv.fetch()(Yv(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Xv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rk),e);try{const s=new Pk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gv(t,d,u);dn(t,d)}}catch(s){if(s instanceof rn)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function Wc(t,e,n,r,s={}){const i=await Pr(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jh(t.config,s):`${t.config.apiScheme}://${s}`}function Ck(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),Sk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function ug(t){return t!==void 0&&t.enterprise!==void 0}class kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ck(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ok(t,e){return Pr(t,"GET","/v2/recaptchaConfig",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function Jv(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dk(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=Zh(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:eo(Fl(s.auth_time)),issuedAtTime:eo(Fl(s.iat)),expirationTime:eo(Fl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fl(t){return Number(t)*1e3}function Zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const s=sy(n);return s?JSON.parse(s):(Da("Failed to decode base64 JWT payload"),null)}catch(s){return Da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hg(t){const e=Zh(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wo(t,Jv(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zv(i.providerUserInfo):[],c=Lk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Mk(t){const e=tt(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zv(t){return t.map(e=>{var{providerId:n}=e,r=Xh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){const n=await Xv(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Yv(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Qv.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Fk(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Uk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new js;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dk(this,e)}reload(){return Mk(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await wo(this,Nk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:P,isAnonymous:M,providerData:V,stsTokenManager:I}=n;fe(S&&I,e,"internal-error");const m=js.fromJSON(this.name,I);fe(typeof S=="string",e,"internal-error"),Zn(p,e.name),Zn(g,e.name),fe(typeof P=="boolean",e,"internal-error"),fe(typeof M=="boolean",e,"internal-error"),Zn(v,e.name),Zn(C,e.name),Zn(O,e.name),Zn(N,e.name),Zn(U,e.name),Zn(k,e.name);const y=new kn({uid:S,auth:e,email:g,emailVerified:P,displayName:p,isAnonymous:M,photoURL:C,phoneNumber:v,tenantId:O,stsTokenManager:m,createdAt:U,lastLoginAt:k});return V&&Array.isArray(V)&&(y.providerData=V.map(E=>Object.assign({},E))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new js;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new js;c.updateFromIdToken(r);const l=new kn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Lu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Map;function On(t){jn(t instanceof Function,"Expected a class definition");let e=dg.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eE.type="NONE";const fg=eE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=xa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(On(fg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||On(fg);const o=xa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=kn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new $s(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $s(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iE(e))return"Blackberry";if(oE(e))return"Webos";if(ed(e))return"Safari";if((e.includes("chrome/")||nE(e))&&!e.includes("edge/"))return"Chrome";if(sE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tE(t=gt()){return/firefox\//i.test(t)}function ed(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nE(t=gt()){return/crios\//i.test(t)}function rE(t=gt()){return/iemobile/i.test(t)}function sE(t=gt()){return/android/i.test(t)}function iE(t=gt()){return/blackberry/i.test(t)}function oE(t=gt()){return/webos/i.test(t)}function Gc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bk(t=gt()){var e;return Gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jk(){return XA()&&document.documentMode===10}function aE(t=gt()){return Gc(t)||sE(t)||oE(t)||iE(t)||/windows phone/i.test(t)||rE(t)}function $k(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e=[]){let n;switch(t){case"Browser":n=pg(gt());break;case"Worker":n=`${pg(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",ps(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=6;class zk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Kk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new Hk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jv(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ak()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(yr(this));const n=e?tt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qk(this),n=new zk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function di(t){return tt(t)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=rR(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gk(t){Qc=t}function lE(t){return Qc.loadJS(t)}function Qk(){return Qc.recaptchaEnterpriseScript}function Xk(){return Qc.gapiScript}function Yk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Jk="recaptcha-enterprise",Zk="NO_RECAPTCHA";class e1{constructor(e){this.type=Jk,this.auth=di(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Ok(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new kk(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zk)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&ug(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Qk();l.length!==0&&(l+=c),lE(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function mg(t,e,n,r=!1){const s=new e1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _g(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await mg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e){const n=Cr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(po(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function n1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function r1(t,e,n){const r=di(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=uE(e),{host:o,port:c}=s1(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),i1()}function uE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function s1(t){const e=uE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yg(o)}}}function yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function o1(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return Wc(t,"POST","/v1/accounts:signInWithPassword",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e){return Wc(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}async function l1(t,e){return Wc(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends td{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _g(e,n,"signInWithPassword",a1);case"emailLink":return c1(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _g(e,r,"signUpPassword",o1);case"emailLink":return l1(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return Wc(t,"POST","/v1/accounts:signInWithIdp",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="http://localhost";class ss extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:u1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d1(t){const e=Li(Ui(t)).link,n=e?Li(Ui(e)).deep_link_id:null,r=Li(Ui(t)).deep_link_id;return(r?Li(Ui(r)).link:null)||r||n||e||t}class nd{constructor(e){var n,r,s,i,o,c;const l=Li(Ui(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=h1((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=d1(e);try{return new nd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nd.parseLink(n);return fe(r,"argument-error"),Io._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends hE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends jo{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends jo{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends jo{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=vg(r);return new ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vg(r);return new ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lc(e,n,r,s)}}function dE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(t,i,e,r):i})}async function f1(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(yr(r));const s="reauthenticate";try{const i=await wo(t,dE(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Zh(i.idToken);fe(o,r,"internal-error");const{sub:c}=o;return fe(t.uid===c,r,"user-mismatch"),ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e,n=!1){if(Cn(t.app))return Promise.reject(yr(t));const r="signIn",s=await dE(t,r,e),i=await ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function g1(t,e){return fE(di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dV(t,e,n){return Cn(t.app)?Promise.reject(yr(t)):g1(tt(t),fi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&m1(t),r})}function _1(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function y1(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function v1(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}const uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(){const t=gt();return ed(t)||Gc(t)}const T1=1e3,w1=10;class gE extends pE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=E1()&&$k(),this.fallbackToPolling=aE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gE.type="LOCAL";const I1=gE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends pE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mE.type="SESSION";const _E=mE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await b1(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=rd("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function R1(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function S1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function P1(){return yE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="firebaseLocalStorageDb",k1=1,hc="firebaseLocalStorage",EE="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function O1(){const t=indexedDB.deleteDatabase(vE);return new $o(t).toPromise()}function Uu(){const t=indexedDB.open(vE,k1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:EE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await O1(),e(await Uu()))})})}async function Eg(t,e,n){const r=Yc(t,!0).put({[EE]:e,value:n});return new $o(r).toPromise()}async function N1(t,e){const n=Yc(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function Tg(t,e){const n=Yc(t,!0).delete(e);return new $o(n).toPromise()}const D1=800,x1=3;class TE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>x1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(P1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S1(),!this.activeServiceWorker)return;this.sender=new A1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await Eg(e,uc,"1"),await Tg(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yc(s,!1).getAll();return new $o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TE.type="LOCAL";const V1=TE;new Bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e){return e?On(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function L1(t){return fE(t.auth,new sd(t),t.bypassAuthState)}function U1(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),p1(n,new sd(t),t.bypassAuthState)}async function F1(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),f1(n,new sd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L1;case"linkViaPopup":case"linkViaRedirect":return F1;case"reauthViaPopup":case"reauthViaRedirect":return U1;default:dn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=new Bo(2e3,1e4);class Ps extends wE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B1.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="pendingRedirect",Va=new Map;class $1 extends wE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await H1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H1(t,e){const n=z1(e),r=K1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function q1(t,e){Va.set(t._key(),e)}function K1(t){return On(t._redirectPersistence)}function z1(t){return xa(j1,t.config.apiKey,t.name)}async function W1(t,e,n=!1){if(Cn(t.app))return Promise.reject(yr(t));const r=di(t),s=M1(r,e),o=await new $1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=10*60*1e3;class Q1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!IE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G1&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function IE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z1=/^https?/;async function eO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Y1(t);for(const n of e)try{if(tO(n))return}catch{}dn(t,"unauthorized-domain")}function tO(t){const e=Mu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z1.test(n))return!1;if(J1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new Bo(3e4,6e4);function Ig(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rO(t){return new Promise((e,n)=>{var r,s,i;function o(){Ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ig(),n(yn(t,"network-request-failed"))},timeout:nO.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const c=Yk("iframefcb");return vn()[c]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},lE(`${Xk()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function sO(t){return Ma=Ma||rO(t),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new Bo(5e3,15e3),oO="__/auth/iframe",aO="emulator/auth/iframe",cO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jh(e,aO):`https://${t.config.authDomain}/${oO}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=lO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Do(r).slice(1)}`}async function hO(t){const e=await sO(t),n=vn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:uO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),c=vn().setTimeout(()=>{i(o)},iO.get());function l(){vn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fO=500,pO=600,gO="_blank",mO="http://localhost";class bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _O(t,e,n,r=fO,s=pO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},dO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=gt().toLowerCase();n&&(c=nE(u)?gO:n),tE(u)&&(e=e||mO,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[v,C])=>`${g}${v}=${C},`,"");if(Bk(u)&&c!=="_self")return yO(e||"",c),new bg(null);const p=window.open(e||"",c,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new bg(p)}function yO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="__/auth/handler",EO="emulator/auth/handler",TO=encodeURIComponent("fac");async function Ag(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof hE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof jo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${TO}=${encodeURIComponent(l)}`:"";return`${wO(t)}?${Do(c).slice(1)}${u}`}function wO({config:t}){return t.emulator?Jh(t,EO):`https://${t.authDomain}/${vO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="webStorageSupport";class IO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_E,this._completeRedirectFn=W1,this._overrideRedirectResult=q1}async _openPopup(e,n,r,s){var i;jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ag(e,n,r,Mu(),s);return _O(e,o,rd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ag(e,n,r,Mu(),s);return R1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hO(e),r=new Q1(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bl,{type:Bl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bl];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aE()||ed()||Gc()}}const bO=IO;var Rg="@firebase/auth",Sg="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SO(t){hn(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cE(t)},u=new Wk(r,s,i,l);return n1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hn(new nn("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new AO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Rg,Sg,RO(t)),Mt(Rg,Sg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=5*60,PO=cy("authIdTokenMaxAge")||CO;let Cg=null;const kO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PO)return;const s=n==null?void 0:n.token;Cg!==s&&(Cg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function OO(t=Dc()){const e=Cr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t1(t,{popupRedirectResolver:bO,persistence:[V1,I1,_E]}),r=cy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kO(i.toString());y1(n,o,()=>o(n.currentUser)),_1(n,c=>o(c))}}const s=iy("auth");return s&&r1(n,`http://${s}`),n}function NO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Gk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SO("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firebasestorage.googleapis.com",AE="storageBucket",DO=2*60*1e3,xO=10*60*1e3,VO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends rn{constructor(e,n,r=0){super(jl(e),`Firebase Storage: ${n} (${jl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function jl(t){return"storage/"+t}function id(){const t="An unknown error occurred, please check the error payload for server response.";return new We(He.UNKNOWN,t)}function MO(t){return new We(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function LO(t){return new We(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(He.UNAUTHENTICATED,t)}function FO(){return new We(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BO(t){return new We(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function RE(){return new We(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SE(){return new We(He.CANCELED,"User canceled the upload/download.")}function jO(t){return new We(He.INVALID_URL,"Invalid URL '"+t+"'.")}function $O(t){return new We(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function HO(){return new We(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+AE+"' property when initializing the app?")}function CE(){return new We(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qO(){return new We(He.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function KO(){return new We(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zO(t){return new We(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fu(t){return new We(He.INVALID_ARGUMENT,t)}function PE(){return new We(He.APP_DELETED,"The Firebase app was deleted.")}function WO(t){return new We(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function to(t,e){return new We(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function xi(t){throw new We(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw $O(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},O=n===bE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",U=new RegExp(`^https?://${O}/${s}/${N}`,"i"),S=[{regex:c,indices:l,postModify:i},{regex:v,indices:C,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<S.length;P++){const M=S[P],V=M.regex.exec(e);if(V){const I=V[M.indices.bucket];let m=V[M.indices.path];m||(m=""),r=new Wt(I,m),M.postModify(r);break}}if(r==null)throw jO(e);return r}}class GO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...N){u||(u=!0,e.apply(null,N))}function p(N){s=setTimeout(()=>{s=null,t(v,l())},N)}function g(){i&&clearTimeout(i)}function v(N,...U){if(u){g();return}if(N){g(),d.call(null,N,...U);return}if(l()||o){g(),d.call(null,N,...U);return}r<64&&(r*=2);let S;c===1?(c=2,S=0):S=(r+Math.random())*1e3,p(S)}let C=!1;function O(N){C||(C=!0,g(),!u&&(s!==null?(N||(c=2),clearTimeout(s),p(0)):N||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function XO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){return t!==void 0}function JO(t){return typeof t=="function"}function ZO(t){return typeof t=="object"&&!Array.isArray(t)}function Jc(t){return typeof t=="string"||t instanceof String}function Pg(t){return od()&&t instanceof Blob}function od(){return typeof Blob<"u"}function kg(t,e,n,r){if(r<e)throw Fu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function kE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,s,i,o,c,l,u,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,C)=>{this.resolve_=v,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ta(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Gr.NO_ERROR,l=i.getStatus();if(!c||OE(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Gr.ABORT;r(!1,new Ta(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ta(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());YO(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=id();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?PE():SE();o(l)}else{const l=RE();o(l)}};this.canceled_?n(!1,new Ta(!1,null,!0)):this.backoffId_=QO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ta{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function tN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iN(t,e,n,r,s,i,o=!0){const c=kE(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return rN(u,e),tN(u,n),nN(u,i),sN(u,r),new eN(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aN(...t){const e=oN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(od())return new Blob(t);throw new We(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){if(typeof atob>"u")throw zO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $l{constructor(e,n){this.data=e,this.contentType=n||null}}function uN(t,e){switch(t){case gn.RAW:return new $l(NE(e));case gn.BASE64:case gn.BASE64URL:return new $l(DE(t,e));case gn.DATA_URL:return new $l(dN(e),fN(e))}throw id()}function NE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hN(t){let e;try{e=decodeURIComponent(t)}catch{throw to(gn.DATA_URL,"Malformed data URL.")}return NE(e)}function DE(t,e){switch(t){case gn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw to(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case gn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw to(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lN(e)}catch(s){throw s.message.includes("polyfill")?s:to(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class xE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw to(gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=pN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dN(t){const e=new xE(t);return e.base64?DE(gn.BASE64,e.rest):hN(e.rest)}function fN(t){return new xE(t).contentType}function pN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){let r=0,s="";Pg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pg(this.data_)){const r=this.data_,s=cN(r,e,n);return s===null?null:new ur(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ur(r,!0)}}static getBlob(...e){if(od()){const n=e.map(r=>r instanceof ur?r.data_:r);return new ur(aN.apply(null,n))}else{const n=e.map(o=>Jc(o)?uN(gn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new ur(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){let e;try{e=JSON.parse(t)}catch{return null}return ZO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ME(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t,e){return e}class Ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||_N}}let wa=null;function yN(t){return!Jc(t)||t.length<2?t:ME(t)}function LE(){if(wa)return wa;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(i,o){return yN(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ct("size");return s.xform=r,t.push(s),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),wa=t,wa}function vN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function EN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return vN(r,t),r}function UE(t,e,n){const r=VE(e);return r===null?null:EN(t,r,n)}function TN(t,e,n,r){const s=VE(e);if(s===null||!Jc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),v=pi(g,n,r),C=kE({alt:"media",token:u});return v+C})[0]}function FE(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class gs{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){if(!t)throw id()}function ad(t,e){function n(r,s){const i=UE(t,s,e);return Ln(i!==null),i}return n}function wN(t,e){function n(r,s){const i=UE(t,s,e);return Ln(i!==null),TN(i,s,t.host,t._protocol)}return n}function Ho(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=FO():s=UO():n.getStatus()===402?s=LO(t.bucket):n.getStatus()===403?s=BO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function cd(t){const e=Ho(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=MO(t.path)),i.serverResponse=s.serverResponse,i}return n}function IN(t,e,n){const r=e.fullServerUrl(),s=pi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new gs(s,i,ad(t,n),o);return c.errorHandler=cd(e),c}function bN(t,e,n){const r=e.fullServerUrl(),s=pi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new gs(s,i,wN(t,n),o);return c.errorHandler=cd(e),c}function AN(t,e){const n=e.fullServerUrl(),r=pi(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,u){}const c=new gs(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=cd(e),c}function RN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function BE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RN(null,e)),r}function SN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let S="";for(let P=0;P<2;P++)S=S+Math.random().toString().slice(2);return S}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=BE(e,r,s),d=FE(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",v=ur.getBlob(p,r,g);if(v===null)throw CE();const C={name:u.fullPath},O=pi(i,t.host,t._protocol),N="POST",U=t.maxUploadRetryTime,k=new gs(O,N,ad(t,n),U);return k.urlParams=C,k.headers=o,k.body=v.uploadData(),k.errorHandler=Ho(e),k}class dc{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function ld(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ln(!1)}return Ln(!!n&&(e||["active"]).indexOf(n)!==-1),n}function CN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=BE(e,r,s),c={name:o.fullPath},l=pi(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=FE(o,n),g=t.maxUploadRetryTime;function v(O){ld(O);let N;try{N=O.getResponseHeader("X-Goog-Upload-URL")}catch{Ln(!1)}return Ln(Jc(N)),N}const C=new gs(l,u,v,g);return C.urlParams=c,C.headers=d,C.body=p,C.errorHandler=Ho(e),C}function PN(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=ld(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ln(!1)}p||Ln(!1);const g=Number(p);return Ln(!isNaN(g)),new dc(g,r.size(),d==="final")}const o="POST",c=t.maxUploadRetryTime,l=new gs(n,o,i,c);return l.headers=s,l.errorHandler=Ho(e),l}const Og=256*1024;function kN(t,e,n,r,s,i,o,c){const l=new dc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw qO();const u=l.total-l.current;let d=u;s>0&&(d=Math.min(d,s));const p=l.current,g=p+d;let v="";d===0?v="finalize":u===d?v="upload, finalize":v="upload";const C={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},O=r.slice(p,g);if(O===null)throw CE();function N(P,M){const V=ld(P,["active","final"]),I=l.current+d,m=r.size();let y;return V==="final"?y=ad(e,i)(P,M):y=null,new dc(I,m,V==="final",y)}const U="POST",k=e.maxUploadRetryTime,S=new gs(n,U,N,k);return S.headers=C,S.body=O.uploadData(),S.progressCallback=c||null,S.errorHandler=Ho(t),S}const Nt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Hl(t){switch(t){case"running":case"pausing":case"canceling":return Nt.RUNNING;case"paused":return Nt.PAUSED;case"success":return Nt.SUCCESS;case"canceled":return Nt.CANCELED;case"error":return Nt.ERROR;default:return Nt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r){if(JO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class NN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DN extends NN{initXhr(){this.xhr_.responseType="text"}}function Ur(){return new DN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=LE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(He.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(OE(s.status,[]))if(i)s=RE();else{this.sleepTime=Math.max(this.sleepTime*2,VO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(He.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=CN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ur,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=PN(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Ur,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Og*this._chunkMultiplier,n=new dc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=kN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(o,Ur,s,i,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Og*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=IN(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ur,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=SN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ur,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=SE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Hl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new ON(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Hl(this._state)){case Nt.SUCCESS:ws(this._resolve.bind(null,this.snapshot))();break;case Nt.CANCELED:case Nt.ERROR:const n=this._reject;ws(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Hl(this._state)){case Nt.RUNNING:case Nt.PAUSED:e.next&&ws(e.next.bind(e,this.snapshot))();break;case Nt.SUCCESS:e.complete&&ws(e.complete.bind(e))();break;case Nt.CANCELED:case Nt.ERROR:e.error&&ws(e.error.bind(e,this._error))();break;default:e.error&&ws(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new is(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ME(this._location.path)}get storage(){return this._service}get parent(){const e=gN(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WO(e)}}function VN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new xN(t,new ur(e),n)}function MN(t){t._throwIfRoot("getDownloadURL");const e=bN(t.storage,t._location,LE());return t.storage.makeRequestWithTokens(e,Ur).then(n=>{if(n===null)throw KO();return n})}function LN(t){t._throwIfRoot("deleteObject");const e=AN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ur)}function UN(t,e){const n=mN(t._location.path,e),r=new Wt(t._location.bucket,n);return new is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){return/^[A-Za-z]+:\/\//.test(t)}function BN(t,e){return new is(t,e)}function jE(t,e){if(t instanceof ud){const n=t;if(n._bucket==null)throw HO();const r=new is(n,n._bucket);return e!=null?jE(r,e):r}else return e!==void 0?UN(t,e):t}function jN(t,e){if(e&&FN(e)){if(t instanceof ud)return BN(t,e);throw Fu("To use ref(service, url), the first argument must be a Storage instance.")}else return jE(t,e)}function Ng(t,e){const n=e==null?void 0:e[AE];return n==null?null:Wt.makeFromBucketSpec(n,t)}function $N(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ly(s,t.app.options.projectId))}class ud{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=bE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DO,this._maxUploadRetryTime=xO,this._requests=new Set,s!=null?this._bucket=Wt.makeFromBucketSpec(s,this._host):this._bucket=Ng(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=Ng(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new GO(PE());{const o=iN(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Dg="@firebase/storage",xg="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="storage";function HN(t,e,n){return t=tt(t),VN(t,e,n)}function qN(t){return t=tt(t),MN(t)}function KN(t){return t=tt(t),LN(t)}function hd(t,e){return t=tt(t),jN(t,e)}function zN(t=Dc(),e){t=tt(t);const r=Cr(t,$E).getImmediate({identifier:e}),s=oy("storage");return s&&WN(r,...s),r}function WN(t,e,n,r={}){$N(t,e,n,r)}function GN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ud(n,r,s,e,hs)}function QN(){hn(new nn($E,GN,"PUBLIC").setMultipleInstances(!0)),Mt(Dg,xg,""),Mt(Dg,xg,"esm2017")}QN();const HE="@firebase/installations",dd="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=1e4,KE=`w:${dd}`,zE="FIS_v2",XN="https://firebaseinstallations.googleapis.com/v1",YN=60*60*1e3,JN="installations",ZN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new us(JN,ZN,eD);function WE(t){return t instanceof rn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE({projectId:t}){return`${XN}/projects/${t}/installations`}function QE(t){return{token:t.token,requestStatus:2,expiresIn:nD(t.expiresIn),creationTime:Date.now()}}async function XE(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tD(t,{refreshToken:e}){const n=YE(t);return n.append("Authorization",rD(e)),n}async function JE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nD(t){return Number(t.replace("s","000"))}function rD(t){return`${zE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GE(t),s=YE(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:zE,appId:t.appId,sdkVersion:KE},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await JE(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:QE(u.authToken)}}else throw await XE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=/^[cdef][\w-]{21}$/,Bu="";function aD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cD(t);return oD.test(n)?n:Bu}catch{return Bu}}function cD(t){return iD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new Map;function tT(t,e){const n=Zc(t);nT(n,e),lD(n,e)}function nT(t,e){const n=eT.get(t);if(n)for(const r of n)r(e)}function lD(t,e){const n=uD();n&&n.postMessage({key:t,fid:e}),hD()}let $r=null;function uD(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=t=>{nT(t.data.key,t.data.fid)}),$r}function hD(){eT.size===0&&$r&&($r.close(),$r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="firebase-installations-database",fD=1,as="firebase-installations-store";let ql=null;function fd(){return ql||(ql=gy(dD,fD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),ql}async function fc(t,e){const n=Zc(t),s=(await fd()).transaction(as,"readwrite"),i=s.objectStore(as),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&tT(t,e.fid),e}async function rT(t){const e=Zc(t),r=(await fd()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function el(t,e){const n=Zc(t),s=(await fd()).transaction(as,"readwrite"),i=s.objectStore(as),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&tT(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t){let e;const n=await el(t.appConfig,r=>{const s=pD(r),i=gD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Bu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pD(t){const e=t||{fid:aD(),registrationStatus:0};return sT(e)}function gD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_D(t)}:{installationEntry:e}}async function mD(t,e){try{const n=await sD(t,e);return fc(t.appConfig,n)}catch(n){throw WE(n)&&n.customData.serverCode===409?await rT(t.appConfig):await fc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _D(t){let e=await Vg(t.appConfig);for(;e.registrationStatus===1;)await ZE(100),e=await Vg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pd(t);return r||n}return e}function Vg(t){return el(t,e=>{if(!e)throw os.create("installation-not-found");return sT(e)})}function sT(t){return yD(t)?{fid:t.fid,registrationStatus:0}:t}function yD(t){return t.registrationStatus===1&&t.registrationTime+qE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD({appConfig:t,heartbeatServiceProvider:e},n){const r=ED(t,n),s=tD(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:KE,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await JE(()=>fetch(r,c));if(l.ok){const u=await l.json();return QE(u)}else throw await XE("Generate Auth Token",l)}function ED(t,{fid:e}){return`${GE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(t,e=!1){let n;const r=await el(t.appConfig,i=>{if(!iT(i))throw os.create("not-registered");const o=i.authToken;if(!e&&ID(o))return i;if(o.requestStatus===1)return n=TD(t,e),i;{if(!navigator.onLine)throw os.create("app-offline");const c=AD(i);return n=wD(t,c),c}});return n?await n:r.authToken}async function TD(t,e){let n=await Mg(t.appConfig);for(;n.authToken.requestStatus===1;)await ZE(100),n=await Mg(t.appConfig);const r=n.authToken;return r.requestStatus===0?gd(t,e):r}function Mg(t){return el(t,e=>{if(!iT(e))throw os.create("not-registered");const n=e.authToken;return RD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wD(t,e){try{const n=await vD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await fc(t.appConfig,r),n}catch(n){if(WE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fc(t.appConfig,r)}throw n}}function iT(t){return t!==void 0&&t.registrationStatus===2}function ID(t){return t.requestStatus===2&&!bD(t)}function bD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+YN}function AD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function RD(t){return t.requestStatus===1&&t.requestTime+qE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t){const e=t,{installationEntry:n,registrationPromise:r}=await pd(e);return r?r.catch(console.error):gd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CD(t,e=!1){const n=t;return await PD(n),(await gd(n,e)).token}async function PD(t){const{registrationPromise:e}=await pd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){if(!t||!t.options)throw Kl("App Configuration");if(!t.name)throw Kl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kl(t){return os.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="installations",OD="installations-internal",ND=t=>{const e=t.getProvider("app").getImmediate(),n=kD(e),r=Cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},DD=t=>{const e=t.getProvider("app").getImmediate(),n=Cr(e,oT).getImmediate();return{getId:()=>SD(n),getToken:s=>CD(n,s)}};function xD(){hn(new nn(oT,ND,"PUBLIC")),hn(new nn(OD,DD,"PRIVATE"))}xD();Mt(HE,dd);Mt(HE,dd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="analytics",VD="firebase_id",MD="origin",LD=60*1e3,UD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",md="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Nc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new us("analytics","Analytics",FD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){if(!t.startsWith(md)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return Lt.warn(e.message),""}return t}function aT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $D(t,e){const n=jD("firebase-js-sdk-policy",{createScriptURL:BD}),r=document.createElement("script"),s=`${md}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function HD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qD(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await aT(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Lt.error(c)}t("config",s,i)}async function KD(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await aT(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Lt.error(i)}}function zD(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await KD(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await qD(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Lt.error(c)}}return s}function WD(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zD(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function GD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(md)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=30,XD=1e3;class YD{constructor(e={},n=XD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cT=new YD;function JD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZD(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:JD(r)},i=UD.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function ex(t,e=cT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Qt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new rx;return setTimeout(async()=>{c.abort()},LD),lT({appId:r,apiKey:s,measurementId:i},o,c,e)}async function lT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=cT){var i;const{appId:o,measurementId:c}=t;try{await tx(r,e)}catch(l){if(c)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await ZD(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!nx(u)){if(s.deleteThrottleMetadata(o),c)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?vp(n,s.intervalMillis,QD):vp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Lt.debug(`Calling attemptFetch again in ${d} millis`),lT(t,p,r,s)}}function tx(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nx(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sx(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(){if(hy())try{await dy()}catch(t){return Lt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Lt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ox(t,e,n,r,s,i,o){var c;const l=ex(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Lt.error(v)),e.push(l);const u=ix().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([l,u]);GD(i)||$D(i,d.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[MD]="firebase",g.update=!0,p!=null&&(g[VD]=p),s("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.app=e}_delete(){return delete no[this.app.options.appId],Promise.resolve()}}let no={},Lg=[];const Ug={};let zl="dataLayer",cx="gtag",Fg,uT,Bg=!1;function lx(){const t=[];if(uy()&&t.push("This is a browser extension environment."),JA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function ux(t,e,n){lx();const r=t.options.appId;if(!r)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(no[r]!=null)throw Qt.create("already-exists",{id:r});if(!Bg){HD(zl);const{wrappedGtag:i,gtagCore:o}=WD(no,Lg,Ug,zl,cx);uT=i,Fg=o,Bg=!0}return no[r]=ox(t,Lg,Ug,e,Fg,zl,n),new ax(t)}function hx(t=Dc()){t=tt(t);const e=Cr(t,pc);return e.isInitialized()?e.getImmediate():dx(t)}function dx(t,e={}){const n=Cr(t,pc);if(n.isInitialized()){const s=n.getImmediate();if(po(e,n.getOptions()))return s;throw Qt.create("already-initialized")}return n.initialize({options:e})}function fx(t,e,n,r){t=tt(t),sx(uT,no[t.app.options.appId],e,n,r).catch(s=>Lt.error(s))}const jg="@firebase/analytics",$g="0.10.4";function px(){hn(new nn(pc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ux(r,s,n)},"PUBLIC")),hn(new nn("analytics-internal",t,"PRIVATE")),Mt(jg,$g),Mt(jg,$g,"esm2017");function t(e){try{const n=e.getProvider(pc).getImmediate();return{logEvent:(r,s,i)=>fx(n,r,s,i)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}px();const gx={apiKey:"AIzaSyC_-Q-X27unfJX9zKxaHlon3LIL8IVRU5A",authDomain:"roninmez-001.firebaseapp.com",projectId:"roninmez-001",storageBucket:"roninmez-001.appspot.com",messagingSenderId:"947987712112",appId:"1:947987712112:web:a0123aa15c2047fd9accb5",measurementId:"G-9PT72JDP8E"},tl=my(gx);let mx;try{mx=hx(tl)}catch(t){console.error("Error al inicializar Analytics:",t)}const _x=OO(tl);v1(_x,t=>{t?console.log("Usuario autenticado:",t):console.log("No hay usuario autenticado")});const yx=rk(tl),_d=zN(tl);hd(_d);const fV=async t=>{try{const e=hd(_d,`images-post/${t.name}`);return await HN(e,t),await qN(e)}catch(e){throw console.error("Error al cargar la imagen:",e),e}},pV=async t=>{const e=hd(_d,t);try{await KN(e),console.log("Imagen eliminada del Storage con éxito.")}catch(n){throw console.error("Error al eliminar la imagen del Storage:",n),n}},vx="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z%20M17,20v19h-6V20H17z%20M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z%20M39,39h-6c0,0,0-9.26,0-10%20c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56%20c3.97,0,7.19,2.73,7.19,8.26V39z'/%3e%3c/svg%3e",Ex="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39%20c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2%20c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975%20c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714%20c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999%20c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6%20c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5%20c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999%20c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689%20c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33%20c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25%20C2,35.164,8.63,43.804,17.791,46.836z'/%3e%3c/svg%3e",hT=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Tx={},wx={class:"bg-white dark:bg-zinc-300"},Ix={class:"mx-auto max-w-screen-xl p-4 py-6 lg:py-8"},bx={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},Ax=Ee("h2",{class:"mb-6 text-lg font-semibold text-gray-900 text-center"}," Mapa del Sitio ",-1),Rx={class:"text-gray-500 dark:text-gray-800 font-medium text-center"},Sx={class:"mb-4"},Cx={class:"mb-4"},Px=fh('<div><h2 class="mb-6 text-lg font-semibold text-gray-900 text-center"> Información de Contacto </h2><ul class="text-gray-500 dark:text-gray-800 font-medium text-center"><li class="mb-4">Av. Cabildo 2553</li><li class="mb-4"><p>Celular: +54 9 11-3487-6862</p></li><li class="mb-4"><p>Correo electrónico: yadirp614@gmail.com</p></li></ul></div>',1),kx={class:"flex justify-center md:justify-start"},Ox=Ee("img",{src:U_,class:"h-24 md:h-32",alt:"RONINMEZ - Soluciones digitales en desarrollo web y análisis de datos, posicionamiento SEO"},null,-1),Nx=fh('<div class="flex justify-center mt-4 space-x-4"><a href="https://www.linkedin.com/in/yadir-acuna-pinzon/" target="_blank" rel="noopener" aria-label="Perfil de LinkedIn de RONINMEZ"><img src="'+vx+'" alt="Icono de LinkedIn" class="w-6 h-6"></a><a href="https://github.com/yack97" target="_blank" rel="noopener" aria-label="Perfil de GitHub de RONINMEZ"><img src="'+Ex+'" alt="Icono de GitHub" class="w-6 h-6"></a></div>',1),Dx=Ee("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),xx=Ee("div",{class:"flex flex-col sm:flex-row items-center justify-center sm:justify-between"},[Ee("span",{class:"text-sm text-gray-500 dark:text-gray-400"},"© 2024 RONINMEZ. Todos los derechos reservados.")],-1);function Vx(t,e){const n=sh("router-link");return Ze(),zt("footer",wx,[Ee("div",Ix,[Ee("div",bx,[Ee("div",null,[Ax,Ee("ul",Rx,[Ee("li",Sx,[we(n,{to:"/"},{default:Ht(()=>[pr("Página Principal")]),_:1})]),Ee("li",Cx,[we(n,{to:"/Presupuesto"},{default:Ht(()=>[pr("Solicitar Presupuesto")]),_:1})]),Ee("li",null,[we(n,{to:"/blog"},{default:Ht(()=>[pr("Blog")]),_:1})])])]),Px,Ee("div",null,[Ee("div",kx,[we(n,{to:"/"},{default:Ht(()=>[Ox]),_:1})]),Nx])]),Dx,xx])])}const Mx=hT(Tx,[["render",Vx]]),Lx={name:"MostrarArticulo",components:{Footer:Mx},props:{id:{type:String,required:!0}},setup(t){const e=Tt(!0),n=Tt(null),r=async()=>{try{const s=Dv(yx,"posts",t.id),i=await yk(s);if(i.exists()){const o=i.data();n.value={id:i.id,titulo:o.titulo,contenido:o.contenido,imageUrl:o.imageUrl}}else console.log("No se encontró el artículo en la base de datos.")}catch(s){console.error("Error al obtener el artículo:",s)}finally{e.value=!1}};return Hn(()=>{r()}),{loading:e,articulo:n}}},Ux={class:"min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-32"},Fx={class:"max-w-screen-xl w-full bg-white shadow-lg rounded-lg overflow-hidden"},Bx={class:"p-6"},jx={key:0},$x=Ee("p",null,"Cargando artículo...",-1),Hx=[$x],qx={key:1},Kx=["src"],zx={class:"text-4xl font-bold mb-4"},Wx=["innerHTML"],Gx={key:2},Qx=Ee("p",null,"El artículo no existe o hubo un error al cargarlo.",-1),Xx=[Qx];function Yx(t,e,n,r,s,i){const o=sh("Footer");return Ze(),zt(Qe,null,[Ee("div",Ux,[Ee("div",Fx,[Ee("div",Bx,[r.loading?(Ze(),zt("div",jx,Hx)):r.articulo?(Ze(),zt("div",qx,[Rn(" Mostrar la imagen antes del título "),r.articulo.imageUrl?(Ze(),zt("img",{key:0,src:r.articulo.imageUrl,alt:"Imagen del artículo",class:"mb-4 rounded-lg w-full"},null,8,Kx)):Rn("v-if",!0),Ee("h2",zx,Fa(r.articulo.titulo),1),Rn(" Tamaño del título más grande "),Rn(" Renderizar contenido HTML "),Ee("div",{innerHTML:r.articulo.contenido},null,8,Wx)])):(Ze(),zt("div",Gx,Xx))])])]),we(o),Rn(" Aquí se añade el componente Footer ")],64)}const Jx=hT(Lx,[["render",Yx]]),Zx=[{path:"/",name:"home",component:()=>Ni(()=>import("./HomeView-DYTTHpHI.js"),__vite__mapDeps([0,1,2]))},{path:"/blog",name:"blog",component:()=>Ni(()=>import("./BlogView-CyIS7Hsd.js"),__vite__mapDeps([3,4]))},{path:"/login",name:"login",component:()=>Ni(()=>import("./LoginView-CK4WU16W.js"),__vite__mapDeps([5,6]))},{path:"/admin",name:"AdminView",component:()=>Ni(()=>import("./AdminView-tUktn7fd.js"),__vite__mapDeps([7,8]))},{path:"/presupuesto",name:"Presupuesto",component:()=>Ni(()=>import("./Presupuesto-DykeL_OP.js"),__vite__mapDeps([9,1,2,6]))},{path:"/articulo/:id",name:"DetalleArticulo",component:Jx,props:!0}],eV=TA({history:Jb("/"),routes:Zx});var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tV(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nV(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var dT={exports:{}};const rV=nV(ob);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(t,e){(function(n,r){t.exports=r(rV)})(self,n=>(()=>{var r={976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l);var o={};return(()=>{i.d(o,{default:()=>Be});var c=i(976);const l=function(H){var ye=typeof H;return H!=null&&(ye=="object"||ye=="function")},u=typeof Ia=="object"&&Ia&&Ia.Object===Object&&Ia;var d=typeof self=="object"&&self&&self.Object===Object&&self;const p=u||d||Function("return this")(),g=function(){return p.Date.now()};var v=/\s/;const C=function(H){for(var ye=H.length;ye--&&v.test(H.charAt(ye)););return ye};var O=/^\s+/;const N=function(H){return H&&H.slice(0,C(H)+1).replace(O,"")},U=p.Symbol;var k=Object.prototype,S=k.hasOwnProperty,P=k.toString,M=U?U.toStringTag:void 0;const V=function(H){var ye=S.call(H,M),De=H[M];try{H[M]=void 0;var Ne=!0}catch{}var F=P.call(H);return Ne&&(ye?H[M]=De:delete H[M]),F};var I=Object.prototype.toString;const m=function(H){return I.call(H)};var y=U?U.toStringTag:void 0;const E=function(H){return H==null?H===void 0?"[object Undefined]":"[object Null]":y&&y in Object(H)?V(H):m(H)},R=function(H){return H!=null&&typeof H=="object"},b=function(H){return typeof H=="symbol"||R(H)&&E(H)=="[object Symbol]"};var T=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,be=/^0o[0-7]+$/i,te=parseInt;const le=function(H){if(typeof H=="number")return H;if(b(H))return NaN;if(l(H)){var ye=typeof H.valueOf=="function"?H.valueOf():H;H=l(ye)?ye+"":ye}if(typeof H!="string")return H===0?H:+H;H=N(H);var De=ve.test(H);return De||be.test(H)?te(H.slice(2),De?2:8):T.test(H)?NaN:+H};var ne=Math.max,ot=Math.min;const Ft=function(H,ye,De){var Ne,F,ee,X,Z,me,Ae=0,w=!1,A=!1,x=!0;if(typeof H!="function")throw new TypeError("Expected a function");function j($){var J=Ne,oe=F;return Ne=F=void 0,Ae=$,X=H.apply(oe,J)}function B($){return Ae=$,Z=setTimeout(Y,ye),w?j($):X}function W($){var J=$-me;return me===void 0||J>=ye||J<0||A&&$-Ae>=ee}function Y(){var $=g();if(W($))return z($);Z=setTimeout(Y,function(J){var oe=ye-(J-me);return A?ot(oe,ee-(J-Ae)):oe}($))}function z($){return Z=void 0,x&&Ne?j($):(Ne=F=void 0,X)}function G(){var $=g(),J=W($);if(Ne=arguments,F=this,me=$,J){if(Z===void 0)return B(me);if(A)return clearTimeout(Z),Z=setTimeout(Y,ye),j(me)}return Z===void 0&&(Z=setTimeout(Y,ye)),X}return ye=le(ye)||0,l(De)&&(w=!!De.leading,ee=(A="maxWait"in De)?ne(le(De.maxWait)||0,ye):ee,x="trailing"in De?!!De.trailing:x),G.cancel=function(){Z!==void 0&&clearTimeout(Z),Ae=0,Ne=me=F=Z=void 0},G.flush=function(){return Z===void 0?X:z(g())},G},At=(0,c.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(H){this.instance&&H!==this.lastEditorData&&this.instance.data.set(H)},disabled(H){H?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:H}=window;if(H){const[ye]=H.split(".").map(Number);ye<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const H=Object.assign({},this.config);this.modelValue&&(H.initialData=this.modelValue),this.editor.create(this.$el,H).then(ye=>{this.instance=(0,c.markRaw)(ye),this.setUpEditorEvents(),this.modelValue!==H.initialData&&ye.data.set(this.modelValue),this.disabled&&ye.enableReadOnlyMode("Integration Sample"),this.$emit("ready",ye)}).catch(ye=>{console.error(ye)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const H=this.instance,ye=Ft(De=>{if(this.disableTwoWayDataBinding)return;const Ne=this.lastEditorData=H.data.get();this.$emit("update:modelValue",Ne,De,H),this.$emit("input",Ne,De,H)},300,{leading:!0});H.model.document.on("change:data",ye),H.editing.view.document.on("focus",De=>{this.$emit("focus",De,H)}),H.editing.view.document.on("blur",De=>{this.$emit("blur",De,H)})}},render(){return(0,c.h)(this.tagName)}});if(!c.version||!c.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Be={install(H){H.component("Ckeditor",At)},component:At}})(),o=o.default})())})(dT);var sV=dT.exports;const iV=tV(sV),yd=V_(MA);yd.use(eV);yd.use(iV);yd.mount("#app");export{Eb as A,Tb as B,Qr as C,ty as D,U_ as E,Qe as F,Sr as G,fV as H,pV as I,Ia as J,tV as K,hV as L,Hw as M,_b as N,qw as O,yb as Q,Sa as R,st as T,vb as V,hT as _,Rn as a,Ee as b,zt as c,we as d,Jl as e,Br as f,Yw as g,pr as h,fh as i,Mx as j,Tt as k,Hn as l,uV as m,Ro as n,Ze as o,lV as p,yx as q,sh as r,OO as s,Fa as t,lt as u,dV as v,Ht as w,eb as x,aI as y,Qa as z};
