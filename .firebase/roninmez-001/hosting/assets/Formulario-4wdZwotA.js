import{o as Ss,c as Cs,b as B,j as $l,t as ql,a as zl,k as qe,v as ze,p as Hl,l as Gl}from"./index-Cxa-7ht4.js";import{_ as Kl}from"./Footer-CvORwlnb.js";var Vs={};/**
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
 */const Io=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Wl=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],u=n[e++],d=((s&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],l=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,u=l?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,I=o>>2,A=(o&3)<<4|u>>4;let P=(u&15)<<2|f>>6,C=f&63;d||(C=64,l||(P=64)),i.push(e[I],e[A],e[P],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Io(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Wl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||A==null)throw new Ql;const P=o<<2|u>>4;if(i.push(P),f!==64){const C=u<<4&240|f>>2;if(i.push(C),A!==64){const D=f<<6&192|A;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ql extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xl=function(n){const t=Io(n);return wo.encodeByteArray(t,!0)},Ln=function(n){return Xl(n).replace(/\./g,"")},Yl=function(n){try{return wo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zl=()=>Jl().__FIREBASE_DEFAULTS__,tc=()=>{if(typeof process>"u"||typeof Vs>"u")return;const n=Vs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ec=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Yl(n[1]);return t&&JSON.parse(t)},si=()=>{try{return Zl()||tc()||ec()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nc=n=>{var t,e;return(e=(t=si())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},rc=n=>{const t=nc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Ao=()=>{var n;return(n=si())===null||n===void 0?void 0:n.config};/**
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
 */class ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function sc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ln(JSON.stringify(e)),Ln(JSON.stringify(l)),""].join(".")}/**
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
 */function oc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ac(){var n;const t=(n=si())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cc(){return!ac()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ro(){try{return typeof indexedDB=="object"}catch{return!1}}function bo(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function uc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const hc="FirebaseError";class Gt extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=hc,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?dc(o,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Gt(s,u,i)}}function dc(n,t){return n.replace(fc,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const fc=/\{\$([^}]+)}/g;function Un(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],l=t[s];if(Ds(o)&&Ds(l)){if(!Un(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Ds(n){return n!==null&&typeof n=="object"}/**
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
 */const pc=1e3,gc=2,mc=4*60*60*1e3,_c=.5;function ks(n,t=pc,e=gc){const i=t*Math.pow(e,n),s=Math.round(_c*i*(Math.random()-.5)*2);return Math.min(mc,i+s)}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class Nt{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class yc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new ic;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ec(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&l.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vc(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vc(n){return n===Zt?void 0:n}function Ec(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new yc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Ic={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},wc=L.INFO,Ac={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Rc=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Ac[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oi{constructor(t){this.name=t,this._logLevel=wc,this._logHandler=Rc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ic[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const bc=(n,t)=>t.some(e=>n instanceof e);let Ns,Os;function Pc(){return Ns||(Ns=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sc(){return Os||(Os=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Po=new WeakMap,Hr=new WeakMap,So=new WeakMap,xr=new WeakMap,ai=new WeakMap;function Cc(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Ut(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Po.set(e,n)}).catch(()=>{}),ai.set(t,n),t}function Vc(n){if(Hr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Hr.set(n,t)}let Gr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Hr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||So.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ut(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Dc(n){Gr=n(Gr)}function kc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Mr(this),t,...e);return So.set(i,t.sort?t.sort():[t]),Ut(i)}:Sc().includes(n)?function(...t){return n.apply(Mr(this),t),Ut(Po.get(this))}:function(...t){return Ut(n.apply(Mr(this),t))}}function Nc(n){return typeof n=="function"?kc(n):(n instanceof IDBTransaction&&Vc(n),bc(n,Pc())?new Proxy(n,Gr):n)}function Ut(n){if(n instanceof IDBRequest)return Cc(n);if(xr.has(n))return xr.get(n);const t=Nc(n);return t!==n&&(xr.set(n,t),ai.set(t,n)),t}const Mr=n=>ai.get(n);function Co(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),u=Ut(l);return i&&l.addEventListener("upgradeneeded",d=>{i(Ut(l.result),d.oldVersion,d.newVersion,Ut(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Oc=["get","getKey","getAll","getAllKeys","count"],xc=["put","add","delete","clear"],Fr=new Map;function xs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fr.get(t))return Fr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=xc.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Oc.includes(e)))return;const o=async function(l,...u){const d=this.transaction(l,s?"readwrite":"readonly");let f=d.store;return i&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&d.done]))[0]};return Fr.set(t,o),o}Dc(n=>({...n,get:(t,e,i)=>xs(t,e)||n.get(t,e,i),has:(t,e)=>!!xs(t,e)||n.has(t,e)}));/**
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
 */class Mc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Fc(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Fc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kr="@firebase/app",Ms="0.10.5";/**
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
 */const se=new oi("@firebase/app"),Lc="@firebase/app-compat",Uc="@firebase/analytics-compat",Bc="@firebase/analytics",jc="@firebase/app-check-compat",$c="@firebase/app-check",qc="@firebase/auth",zc="@firebase/auth-compat",Hc="@firebase/database",Gc="@firebase/database-compat",Kc="@firebase/functions",Wc="@firebase/functions-compat",Qc="@firebase/installations",Xc="@firebase/installations-compat",Yc="@firebase/messaging",Jc="@firebase/messaging-compat",Zc="@firebase/performance",tu="@firebase/performance-compat",eu="@firebase/remote-config",nu="@firebase/remote-config-compat",ru="@firebase/storage",iu="@firebase/storage-compat",su="@firebase/firestore",ou="@firebase/vertexai-preview",au="@firebase/firestore-compat",lu="firebase",cu="10.12.2";/**
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
 */const Wr="[DEFAULT]",uu={[Kr]:"fire-core",[Lc]:"fire-core-compat",[Bc]:"fire-analytics",[Uc]:"fire-analytics-compat",[$c]:"fire-app-check",[jc]:"fire-app-check-compat",[qc]:"fire-auth",[zc]:"fire-auth-compat",[Hc]:"fire-rtdb",[Gc]:"fire-rtdb-compat",[Kc]:"fire-fn",[Wc]:"fire-fn-compat",[Qc]:"fire-iid",[Xc]:"fire-iid-compat",[Yc]:"fire-fcm",[Jc]:"fire-fcm-compat",[Zc]:"fire-perf",[tu]:"fire-perf-compat",[eu]:"fire-rc",[nu]:"fire-rc-compat",[ru]:"fire-gcs",[iu]:"fire-gcs-compat",[su]:"fire-fst",[au]:"fire-fst-compat",[ou]:"fire-vertex","fire-js":"fire-js",[lu]:"fire-js-all"};/**
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
 */const Bn=new Map,hu=new Map,Qr=new Map;function Fs(n,t){try{n.container.addComponent(t)}catch(e){se.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $t(n){const t=n.name;if(Qr.has(t))return se.debug(`There were multiple attempts to register component ${t}.`),!1;Qr.set(t,n);for(const e of Bn.values())Fs(e,n);for(const e of hu.values())Fs(e,n);return!0}function an(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const du={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new Zn("app","Firebase",du);/**
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
 */class fu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const pu=cu;function Vo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(e||(e=Ao()),!e)throw Bt.create("no-options");const o=Bn.get(s);if(o){if(Un(e,o.options)&&Un(i,o.config))return o;throw Bt.create("duplicate-app",{appName:s})}const l=new Tc(s);for(const d of Qr.values())l.addComponent(d);const u=new fu(e,i,l);return Bn.set(s,u),u}function Do(n=Wr){const t=Bn.get(n);if(!t&&n===Wr&&Ao())return Vo();if(!t)throw Bt.create("no-app",{appName:n});return t}function bt(n,t,e){var i;let s=(i=uu[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),se.warn(u.join(" "));return}$t(new Nt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const gu="firebase-heartbeat-database",mu=1,Ze="firebase-heartbeat-store";let Lr=null;function ko(){return Lr||(Lr=Co(gu,mu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),Lr}async function _u(n){try{const e=(await ko()).transaction(Ze),i=await e.objectStore(Ze).get(No(n));return await e.done,i}catch(t){if(t instanceof Gt)se.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});se.warn(e.message)}}}async function Ls(n,t){try{const i=(await ko()).transaction(Ze,"readwrite");await i.objectStore(Ze).put(t,No(n)),await i.done}catch(e){if(e instanceof Gt)se.warn(e.message);else{const i=Bt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});se.warn(i.message)}}}function No(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yu=1024,vu=30*24*60*60*1e3;class Eu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Iu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Us();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=vu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Us(),{heartbeatsToSend:i,unsentEntries:s}=Tu(this._heartbeatsCache.heartbeats),o=Ln(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Us(){return new Date().toISOString().substring(0,10)}function Tu(n,t=yu){const e=[];let i=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Bs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Bs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Iu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ro()?bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _u(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ls(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ls(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Bs(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function wu(n){$t(new Nt("platform-logger",t=>new Mc(t),"PRIVATE")),$t(new Nt("heartbeat",t=>new Eu(t),"PRIVATE")),bt(Kr,Ms,n),bt(Kr,Ms,"esm2017"),bt("fire-js","")}wu("");var Au="firebase",Ru="10.12.2";/**
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
 */bt(Au,Ru,"app");var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(_,y,T){for(var g=Array(arguments.length-2),St=2;St<arguments.length;St++)g[St-2]=arguments[St];return p.prototype[y].apply(_,g)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)_[y]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],y=v.g[2];var T=v.g[3],g=p+(T^m&(y^T))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[2]+606105819&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[3]+3250441966&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[6]+2821735955&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[7]+4249261313&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[10]+4294925233&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[11]+2304563134&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[14]+2792965006&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[15]+1236535329&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(y^T&(m^y))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[11]+643717713&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[0]+3921069994&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[15]+3634488961&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[4]+3889429448&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[3]+4107603335&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[8]+1163531501&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[7]+1735328473&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[12]+2368359562&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(m^y^T)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[11]+1839030562&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[14]+4259657740&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[7]+4139469664&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[10]+3200236656&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[3]+3572445317&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[6]+76029189&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[15]+530742520&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[2]+3299628645&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(y^(m|~T))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[14]+2878612391&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[5]+4237533241&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[10]+4293915773&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[1]+2240044497&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[6]+2734768916&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[13]+1309151649&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[2]+718787259&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,_=this.B,y=this.h,T=0;T<p;){if(y==0)for(;T<=m;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<p;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<p;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=p},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)v[m++]=this.g[p]>>>_&255;return v};function o(v,p){var m=u;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function l(v,p){this.h=p;for(var m=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==p||(m[y]=T,_=!1)}this.g=m}var u={};function d(v){return-128<=v&&128>v?o(v,function(p){return new l([p|0],0>p?-1:0)}):new l([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return k(f(-v));for(var p=[],m=1,_=0;v>=m;_++)p[_]=v/m|0,m*=4294967296;return new l(p,0)}function I(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return k(I(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),_=A,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),g=parseInt(v.substring(y,y+T),p);8>T?(T=f(Math.pow(p,T)),_=_.j(T).add(f(g))):(_=_.j(m),_=_.add(f(g)))}return _}var A=d(0),P=d(1),C=d(16777216);n=l.prototype,n.m=function(){if(x(this))return-k(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);v+=(0<=_?_:4294967296+_)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(x(this))return"-"+k(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,_="";;){var y=ot(m,p).g;m=K(m,y.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=y,D(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=K(this,v),x(v)?-1:D(v)?0:1};function k(v){for(var p=v.g.length,m=[],_=0;_<p;_++)m[_]=~v.g[_];return new l(m,~v.h).add(P)}n.abs=function(){return x(this)?k(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0,y=0;y<=p;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),g=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=g>>>16,T&=65535,g&=65535,m[y]=g<<16|T}return new l(m,m[m.length-1]&-2147483648?-1:0)};function K(v,p){return v.add(k(p))}n.j=function(v){if(D(this)||D(v))return A;if(x(this))return x(v)?k(this).j(k(v)):k(k(this).j(v));if(x(v))return k(this.j(k(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,g=this.i(_)&65535,St=v.i(y)>>>16,Re=v.i(y)&65535;m[2*_+2*y]+=g*Re,H(m,2*_+2*y),m[2*_+2*y+1]+=T*Re,H(m,2*_+2*y+1),m[2*_+2*y+1]+=g*St,H(m,2*_+2*y+1),m[2*_+2*y+2]+=T*St,H(m,2*_+2*y+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new l(m,0)};function H(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function X(v,p){this.g=v,this.h=p}function ot(v,p){if(D(p))throw Error("division by zero");if(D(v))return new X(A,A);if(x(v))return p=ot(k(v),p),new X(k(p.g),k(p.h));if(x(p))return p=ot(v,k(p)),new X(k(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=P,_=p;0>=_.l(v);)m=Wt(m),_=Wt(_);var y=_t(m,1),T=_t(_,1);for(_=_t(_,2),m=_t(m,2);!D(_);){var g=T.add(_);0>=g.l(v)&&(y=y.add(m),T=g),_=_t(_,1),m=_t(m,1)}return p=K(v,y.j(p)),new X(y,p)}for(y=A;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=f(m),g=T.j(p);x(g)||0<g.l(v);)m-=_,T=f(m),g=T.j(p);D(T)&&(T=P),y=y.add(T),v=K(v,g)}return new X(y,v)}n.A=function(v){return ot(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&v.i(_);return new l(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|v.i(_);return new l(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^v.i(_);return new l(m,this.h^v.h)};function Wt(v){for(var p=v.g.length+1,m=[],_=0;_<p;_++)m[_]=v.i(_)<<1|v.i(_-1)>>>31;return new l(m,v.h)}function _t(v,p){var m=p>>5;p%=32;for(var _=v.g.length-m,y=[],T=0;T<_;T++)y[T]=0<p?v.i(T+m)>>>p|v.i(T+m+1)<<32-p:v.i(T+m);return new l(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=I,Oo=l}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xo,Mo,Ke,Fo,xn,Xr,Lo,Uo,Bo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,c){return r==Array.prototype||r==Object.prototype||(r[a]=c.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vn=="object"&&Vn];for(var a=0;a<r.length;++a){var c=r[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var E=r[h];if(!(E in c))break t;c=c[E]}r=r[r.length-1],h=c[r],a=a(h),a!=h&&a!=null&&t(c,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var c=0,h=!1,E={next:function(){if(!h&&c<r.length){var w=c++;return{value:a(w,r[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function f(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,c){return r.call.apply(r.bind,arguments)}function A(r,a,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function P(r,a,c){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,P.apply(null,arguments)}function C(r,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function D(r,a){function c(){}c.prototype=a.prototype,r.aa=a.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,E,w){for(var S=Array(arguments.length-2),j=2;j<arguments.length;j++)S[j-2]=arguments[j];return a.prototype[E].apply(h,S)}}function x(r){const a=r.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=r[h];return c}return[]}function k(r,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(d(h)){const E=r.length||0,w=h.length||0;r.length=E+w;for(let S=0;S<w;S++)r[E+S]=h[S]}else r.push(h)}}class K{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function X(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function ot(r){return ot[" "](r),r}ot[" "]=function(){};var Wt=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function _t(r,a,c){for(const h in r)a.call(c,r[h],h,r)}function v(r,a){for(const c in r)a.call(void 0,r[c],c,r)}function p(r){const a={};for(const c in r)a[c]=r[c];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let c,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(c in h)r[c]=h[c];for(let w=0;w<m.length;w++)c=m[w],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function y(r){var a=1;r=r.split(":");const c=[];for(;0<a&&r.length;)c.push(r.shift()),a--;return r.length&&c.push(r.join(":")),c}function T(r){u.setTimeout(()=>{throw r},0)}function g(){var r=hr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class St{constructor(){this.h=this.g=null}add(a,c){const h=Re.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var Re=new K(()=>new al,r=>r.reset());class al{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Pe=!1,hr=new St,Si=()=>{const r=u.Promise.resolve(void 0);be=()=>{r.then(ll)}};var ll=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(c){T(c)}var a=Re;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Pe=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var cl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return r}();function Se(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Wt){t:{try{ot(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else c=="mouseover"?a=r.fromElement:c=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ul[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Se.aa.h.call(this)}}D(Se,at);var ul={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),hl=0;function dl(r,a,c,h,E){this.listener=r,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=E,this.key=++hl,this.da=this.fa=!1}function fn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function pn(r){this.src=r,this.g={},this.h=0}pn.prototype.add=function(r,a,c,h,E){var w=r.toString();r=this.g[w],r||(r=this.g[w]=[],this.h++);var S=fr(r,a,h,E);return-1<S?(a=r[S],c||(a.fa=!1)):(a=new dl(a,this.src,w,!!h,E),a.fa=c,r.push(a)),a};function dr(r,a){var c=a.type;if(c in r.g){var h=r.g[c],E=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=E)&&Array.prototype.splice.call(h,E,1),w&&(fn(a),r.g[c].length==0&&(delete r.g[c],r.h--))}}function fr(r,a,c,h){for(var E=0;E<r.length;++E){var w=r[E];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==h)return E}return-1}var pr="closure_lm_"+(1e6*Math.random()|0),gr={};function Ci(r,a,c,h,E){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ci(r,a[w],c,h,E);return null}return c=ki(c),r&&r[dn]?r.K(a,c,f(h)?!!h.capture:!!h,E):fl(r,a,c,!1,h,E)}function fl(r,a,c,h,E,w){if(!a)throw Error("Invalid event type");var S=f(E)?!!E.capture:!!E,j=_r(r);if(j||(r[pr]=j=new pn(r)),c=j.add(a,c,h,S,w),c.proxy)return c;if(h=pl(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)cl||(E=S),E===void 0&&(E=!1),r.addEventListener(a.toString(),h,E);else if(r.attachEvent)r.attachEvent(Di(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function pl(){function r(c){return a.call(r.src,r.listener,c)}const a=gl;return r}function Vi(r,a,c,h,E){if(Array.isArray(a))for(var w=0;w<a.length;w++)Vi(r,a[w],c,h,E);else h=f(h)?!!h.capture:!!h,c=ki(c),r&&r[dn]?(r=r.i,a=String(a).toString(),a in r.g&&(w=r.g[a],c=fr(w,c,h,E),-1<c&&(fn(w[c]),Array.prototype.splice.call(w,c,1),w.length==0&&(delete r.g[a],r.h--)))):r&&(r=_r(r))&&(a=r.g[a.toString()],r=-1,a&&(r=fr(a,c,h,E)),(c=-1<r?a[r]:null)&&mr(c))}function mr(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[dn])dr(a.i,r);else{var c=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(c,h,r.capture):a.detachEvent?a.detachEvent(Di(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=_r(a))?(dr(c,r),c.h==0&&(c.src=null,a[pr]=null)):fn(r)}}}function Di(r){return r in gr?gr[r]:gr[r]="on"+r}function gl(r,a){if(r.da)r=!0;else{a=new Se(a,this);var c=r.listener,h=r.ha||r.src;r.fa&&mr(r),r=c.call(h,a)}return r}function _r(r){return r=r[pr],r instanceof pn?r:null}var yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ki(r){return typeof r=="function"?r:(r[yr]||(r[yr]=function(a){return r.handleEvent(a)}),r[yr])}function lt(){xt.call(this),this.i=new pn(this),this.M=this,this.F=null}D(lt,xt),lt.prototype[dn]=!0,lt.prototype.removeEventListener=function(r,a,c,h){Vi(this,r,a,c,h)};function gt(r,a){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var E=a;a=new at(h,r),_(a,E)}if(E=!0,c)for(var w=c.length-1;0<=w;w--){var S=a.g=c[w];E=gn(S,h,!0,a)&&E}if(S=a.g=r,E=gn(S,h,!0,a)&&E,E=gn(S,h,!1,a)&&E,c)for(w=0;w<c.length;w++)S=a.g=c[w],E=gn(S,h,!1,a)&&E}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var c=r.g[a],h=0;h<c.length;h++)fn(c[h]);delete r.g[a],r.h--}}this.F=null},lt.prototype.K=function(r,a,c,h){return this.i.add(String(r),a,!1,c,h)},lt.prototype.L=function(r,a,c,h){return this.i.add(String(r),a,!0,c,h)};function gn(r,a,c,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==c){var j=S.listener,nt=S.ha||S.src;S.fa&&dr(r.i,S),E=j.call(nt,h)!==!1&&E}}return E&&!h.defaultPrevented}function Ni(r,a,c){if(typeof r=="function")c&&(r=P(r,c));else if(r&&typeof r.handleEvent=="function")r=P(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(r,a||0)}function Oi(r){r.g=Ni(()=>{r.g=null,r.i&&(r.i=!1,Oi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class ml extends xt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Oi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(r){xt.call(this),this.h=r,this.g={}}D(Ce,xt);var xi=[];function Mi(r){_t(r.g,function(a,c){this.g.hasOwnProperty(c)&&mr(a)},r),r.g={}}Ce.prototype.N=function(){Ce.aa.N.call(this),Mi(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=u.JSON.stringify,_l=u.JSON.parse,yl=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function Er(){}Er.prototype.h=null;function Fi(r){return r.h||(r.h=r.i())}function Li(){}var Ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tr(){at.call(this,"d")}D(Tr,at);function Ir(){at.call(this,"c")}D(Ir,at);var Qt={},Ui=null;function mn(){return Ui=Ui||new lt}Qt.La="serverreachability";function Bi(r){at.call(this,Qt.La,r)}D(Bi,at);function De(r){const a=mn();gt(a,new Bi(a))}Qt.STAT_EVENT="statevent";function ji(r,a){at.call(this,Qt.STAT_EVENT,r),this.stat=a}D(ji,at);function mt(r){const a=mn();gt(a,new ji(a,r))}Qt.Ma="timingevent";function $i(r,a){at.call(this,Qt.Ma,r),this.size=a}D($i,at);function ke(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},a)}function Ne(){this.g=!0}Ne.prototype.xa=function(){this.g=!1};function vl(r,a,c,h,E,w){r.info(function(){if(r.g)if(w)for(var S="",j=w.split("&"),nt=0;nt<j.length;nt++){var U=j[nt].split("=");if(1<U.length){var ct=U[0];U=U[1];var ut=ct.split("_");S=2<=ut.length&&ut[1]=="type"?S+(ct+"="+U+"&"):S+(ct+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+c+`
`+S})}function El(r,a,c,h,E,w,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+c+`
`+w+" "+S})}function de(r,a,c,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Il(r,c)+(h?" "+h:"")})}function Tl(r,a){r.info(function(){return"TIMEOUT: "+a})}Ne.prototype.info=function(){};function Il(r,a){if(!r.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var w=E[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<E.length;S++)E[S]=""}}}}return vr(c)}catch{return a}}var _n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wr;function yn(){}D(yn,Er),yn.prototype.g=function(){return new XMLHttpRequest},yn.prototype.i=function(){return{}},wr=new yn;function Mt(r,a,c,h){this.j=r,this.i=a,this.l=c,this.R=h||1,this.U=new Ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var Hi={},Ar={};function Rr(r,a,c){r.L=1,r.v=In(Ct(a)),r.m=c,r.P=!0,Gi(r,null)}function Gi(r,a){r.F=Date.now(),vn(r),r.A=Ct(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),os(c.i,"t",h),r.C=0,c=r.j.J,r.h=new zi,r.g=As(r.j,c?a:null,!r.m),0<r.O&&(r.M=new ml(P(r.Y,r,r.g),r.O)),a=r.U,c=r.g,h=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(xi[0]=E.toString()),E=xi);for(var w=0;w<E.length;w++){var S=Ci(c,E[w],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?p(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),De(),vl(r.i,r.u,r.A,r.l,r.R,r.m)}Mt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Vt(r)==3?a.j():this.Y(r)},Mt.prototype.Y=function(r){try{if(r==this.g)t:{const ut=Vt(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||fs(this.g)))){this.J||ut!=4||a==7||(a==8||0>=ge?De(3):De(2)),br(this);var c=this.g.Z();this.X=c;e:if(Ki(this)){var h=fs(this.g);r="";var E=h.length,w=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),Oe(this);var S="";break e}this.h.i=new u.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(w&&a==E-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=c==200,El(this.i,this.u,this.A,this.l,this.R,ut,c),this.o){if(this.T&&!this.K){e:{if(this.g){var j,nt=this.g;if((j=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(j)){var U=j;break e}}U=null}if(c=U)de(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,c);else{this.o=!1,this.s=3,mt(12),Xt(this),Oe(this);break t}}if(this.P){c=!0;let It;for(;!this.J&&this.C<S.length;)if(It=wl(this,S),It==Ar){ut==4&&(this.s=4,mt(14),c=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Hi){this.s=4,mt(15),de(this.i,this.l,S,"[Invalid Chunk]"),c=!1;break}else de(this.i,this.l,It,null),Pr(this,It);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||S.length!=0||this.h.h||(this.s=1,mt(16),c=!1),this.o=this.o&&c,!c)de(this.i,this.l,S,"[Invalid Chunked Response]"),Xt(this),Oe(this);else if(0<S.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Nr(ct),ct.M=!0,mt(11))}}else de(this.i,this.l,S,null),Pr(this,S);ut==4&&Xt(this),this.o&&!this.J&&(ut==4?Es(this.j,this):(this.o=!1,vn(this)))}else Bl(this.g),c==400&&0<S.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Xt(this),Oe(this)}}}catch{}finally{}};function Ki(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function wl(r,a){var c=r.C,h=a.indexOf(`
`,c);return h==-1?Ar:(c=Number(a.substring(c,h)),isNaN(c)?Hi:(h+=1,h+c>a.length?Ar:(a=a.slice(h,h+c),r.C=h+c,a)))}Mt.prototype.cancel=function(){this.J=!0,Xt(this)};function vn(r){r.S=Date.now()+r.I,Wi(r,r.I)}function Wi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=ke(P(r.ba,r),a)}function br(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Mt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Tl(this.i,this.A),this.L!=2&&(De(),mt(17)),Xt(this),this.s=2,Oe(this)):Wi(this,this.S-r)};function Oe(r){r.j.G==0||r.J||Es(r.j,r)}function Xt(r){br(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Mi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function Pr(r,a){try{var c=r.j;if(c.G!=0&&(c.g==r||Sr(c.h,r))){if(!r.K&&Sr(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)Pn(c),Rn(c);else break t;kr(c),mt(18)}}else c.za=E[1],0<c.za-c.T&&37500>E[2]&&c.F&&c.v==0&&!c.C&&(c.C=ke(P(c.Za,c),6e3));if(1>=Yi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Jt(c,11)}else if((r.K||c.g==r)&&Pn(c),!H(a))for(E=c.Da.g.parse(a),a=0;a<E.length;a++){let U=E[a];if(c.T=U[0],U=U[1],c.G==2)if(U[0]=="c"){c.K=U[1],c.ia=U[2];const ct=U[3];ct!=null&&(c.la=ct,c.j.info("VER="+c.la));const ut=U[4];ut!=null&&(c.Aa=ut,c.j.info("SVER="+c.Aa));const ge=U[5];ge!=null&&typeof ge=="number"&&0<ge&&(h=1.5*ge,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const It=r.g;if(It){const Cn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var w=h.h;w.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Cr(w,w.h),w.h=null))}if(h.D){const Or=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(h.ya=Or,q(h.I,h.D,Or))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var S=r;if(h.qa=ws(h,h.J?h.ia:null,h.W),S.K){Ji(h.h,S);var j=S,nt=h.L;nt&&(j.I=nt),j.B&&(br(j),vn(j)),h.g=S}else ys(h);0<c.i.length&&bn(c)}else U[0]!="stop"&&U[0]!="close"||Jt(c,7);else c.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Jt(c,7):Dr(c):U[0]!="noop"&&c.l&&c.l.ta(U),c.v=0)}}De(4)}catch{}}var Al=class{constructor(r,a){this.g=r,this.map=a}};function Qi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Yi(r){return r.h?1:r.g?r.g.size:0}function Sr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Cr(r,a){r.g?r.g.add(a):r.h=a}function Ji(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Qi.prototype.cancel=function(){if(this.i=Zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Zi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const c of r.g.values())a=a.concat(c.D);return a}return x(r.i)}function Rl(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var a=[],c=r.length,h=0;h<c;h++)a.push(r[h]);return a}a=[],c=0;for(h in r)a[c++]=r[h];return a}function bl(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var a=[];r=r.length;for(var c=0;c<r;c++)a.push(c);return a}a=[],c=0;for(const h in r)a[c++]=h;return a}}}function ts(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var c=bl(r),h=Rl(r),E=h.length,w=0;w<E;w++)a.call(void 0,h[w],c&&c[w],r)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pl(r,a){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),E=null;if(0<=h){var w=r[c].substring(0,h);E=r[c].substring(h+1)}else w=r[c];a(w,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Yt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Yt){this.h=r.h,En(this,r.j),this.o=r.o,this.g=r.g,Tn(this,r.s),this.l=r.l;var a=r.i,c=new Fe;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ns(this,c),this.m=r.m}else r&&(a=String(r).match(es))?(this.h=!1,En(this,a[1]||"",!0),this.o=xe(a[2]||""),this.g=xe(a[3]||"",!0),Tn(this,a[4]),this.l=xe(a[5]||"",!0),ns(this,a[6]||"",!0),this.m=xe(a[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}Yt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Me(a,rs,!0),":");var c=this.g;return(c||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Me(a,rs,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Me(c,c.charAt(0)=="/"?Vl:Cl,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Me(c,kl)),r.join("")};function Ct(r){return new Yt(r)}function En(r,a,c){r.j=c?xe(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function Tn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function ns(r,a,c){a instanceof Fe?(r.i=a,Nl(r.i,r.h)):(c||(a=Me(a,Dl)),r.i=new Fe(a,r.h))}function q(r,a,c){r.i.set(a,c)}function In(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function xe(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Me(r,a,c){return typeof r=="string"?(r=encodeURI(r).replace(a,Sl),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Sl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var rs=/[#\/\?@]/g,Cl=/[#\?:]/g,Vl=/[#\?]/g,Dl=/[#\?@]/g,kl=/#/g;function Fe(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ft(r){r.g||(r.g=new Map,r.h=0,r.i&&Pl(r.i,function(a,c){r.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Fe.prototype,n.add=function(r,a){Ft(this),this.i=null,r=fe(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(a),this.h+=1,this};function is(r,a){Ft(r),a=fe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function ss(r,a){return Ft(r),a=fe(r,a),r.g.has(a)}n.forEach=function(r,a){Ft(this),this.g.forEach(function(c,h){c.forEach(function(E){r.call(a,E,h,this)},this)},this)},n.na=function(){Ft(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const E=r[h];for(let w=0;w<E.length;w++)c.push(a[h])}return c},n.V=function(r){Ft(this);let a=[];if(typeof r=="string")ss(this,r)&&(a=a.concat(this.g.get(fe(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)a=a.concat(r[c])}return a},n.set=function(r,a){return Ft(this),this.i=null,r=fe(this,r),ss(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function os(r,a,c){is(r,a),0<c.length&&(r.i=null,r.g.set(fe(r,a),x(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const w=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var E=w;S[h]!==""&&(E+="="+encodeURIComponent(String(S[h]))),r.push(E)}}return this.i=r.join("&")};function fe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Nl(r,a){a&&!r.j&&(Ft(r),r.i=null,r.g.forEach(function(c,h){var E=h.toLowerCase();h!=E&&(is(this,h),os(this,E,c))},r)),r.j=a}function Ol(r,a){const c=new Ne;if(u.Image){const h=new Image;h.onload=C(Lt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Lt,c,"TestLoadImage: error",!1,a,h),h.onabort=C(Lt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Lt,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function xl(r,a){const c=new Ne,h=new AbortController,E=setTimeout(()=>{h.abort(),Lt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(w=>{clearTimeout(E),w.ok?Lt(c,"TestPingServer: ok",!0,a):Lt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Lt(c,"TestPingServer: error",!1,a)})}function Lt(r,a,c,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(c)}catch{}}function Ml(){this.g=new yl}function Fl(r,a,c){const h=c||"";try{ts(r,function(E,w){let S=E;f(E)&&(S=vr(E)),a.push(h+w+"="+encodeURIComponent(S))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function Le(r){this.l=r.Ub||null,this.j=r.eb||!1}D(Le,Er),Le.prototype.g=function(){return new wn(this.l,this.j)},Le.prototype.i=function(r){return function(){return r}}({});function wn(r,a){lt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(wn,lt),n=wn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Be(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;as(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function as(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Ue(this):Be(this),this.readyState==3&&as(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Ue(this))},n.Qa=function(r){this.g&&(this.response=r,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Be(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=a.next();return r.join(`\r
`)};function Be(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ls(r){let a="";return _t(r,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function Vr(r,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=ls(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):q(r,a,c))}function W(r){lt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(W,lt);var Ll=/^https?$/i,Ul=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?Fi(this.o):Fi(wr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(w){cs(this,w);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)c.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())c.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),E=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ul,a,void 0))||h||E||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of c)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ds(this),this.u=!0,this.g.send(r),this.u=!1}catch(w){cs(this,w)}};function cs(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,us(r),An(r)}function us(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hs(this):this.bb())},n.bb=function(){hs(this)};function hs(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Vt(r)!=4||r.Z()!=2)){if(r.u&&Vt(r)==4)Ni(r.Ea,0,r);else if(gt(r,"readystatechange"),Vt(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=S===0){var E=String(r.D).match(es)[1]||null;!E&&u.self&&u.self.location&&(E=u.self.location.protocol.slice(0,-1)),h=!Ll.test(E?E.toLowerCase():"")}c=h}if(c)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var w=2<Vt(r)?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.Z()+"]",us(r)}}finally{An(r)}}}}function An(r,a){if(r.g){ds(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{c.onreadystatechange=h}catch{}}}function ds(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Vt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),_l(a)}};function fs(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Bl(r){const a={};r=(r.g&&2<=Vt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(H(r[h]))continue;var c=y(r[h]);const E=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[E]||[];a[E]=w,w.push(c)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(r,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||a}function ps(r){this.Aa=0,this.i=[],this.j=new Ne,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=je("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=je("baseRetryDelayMs",5e3,r),this.cb=je("retryDelaySeedMs",1e4,r),this.Wa=je("forwardChannelMaxRetries",2,r),this.wa=je("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(r&&r.concurrentRequestLimit),this.Da=new Ml,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ps.prototype,n.la=8,n.G=1,n.connect=function(r,a,c,h){mt(0),this.W=r,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=ws(this,null,this.W),bn(this)};function Dr(r){if(gs(r),r.G==3){var a=r.U++,c=Ct(r.I);if(q(c,"SID",r.K),q(c,"RID",a),q(c,"TYPE","terminate"),$e(r,c),a=new Mt(r,r.j,a),a.L=2,a.v=In(Ct(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=As(a.j,null),a.g.ea(a.v)),a.F=Date.now(),vn(a)}Is(r)}function Rn(r){r.g&&(Nr(r),r.g.cancel(),r.g=null)}function gs(r){Rn(r),r.u&&(u.clearTimeout(r.u),r.u=null),Pn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function bn(r){if(!Xi(r.h)&&!r.s){r.s=!0;var a=r.Ga;be||Si(),Pe||(be(),Pe=!0),hr.add(a,r),r.B=0}}function jl(r,a){return Yi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=ke(P(r.Ga,r,a),Ts(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new Mt(this,this.j,r);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(E.H=w,w=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=_s(this,E,a),c=Ct(this.I),q(c,"RID",r),q(c,"CVER",22),this.D&&q(c,"X-HTTP-Session-Id",this.D),$e(this,c),w&&(this.O?a="headers="+encodeURIComponent(String(ls(w)))+"&"+a:this.m&&Vr(c,this.m,w)),Cr(this.h,E),this.Ua&&q(c,"TYPE","init"),this.P?(q(c,"$req",a),q(c,"SID","null"),E.T=!0,Rr(E,c,null)):Rr(E,c,a),this.G=2}}else this.G==3&&(r?ms(this,r):this.i.length==0||Xi(this.h)||ms(this))};function ms(r,a){var c;a?c=a.l:c=r.U++;const h=Ct(r.I);q(h,"SID",r.K),q(h,"RID",c),q(h,"AID",r.T),$e(r,h),r.m&&r.o&&Vr(h,r.m,r.o),c=new Mt(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),a&&(r.i=a.D.concat(r.i)),a=_s(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Cr(r.h,c),Rr(c,h,a)}function $e(r,a){r.H&&_t(r.H,function(c,h){q(a,h,c)}),r.l&&ts({},function(c,h){q(a,h,c)})}function _s(r,a,c){c=Math.min(r.i.length,c);var h=r.l?P(r.l.Na,r.l,r):null;t:{var E=r.i;let w=-1;for(;;){const S=["count="+c];w==-1?0<c?(w=E[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let j=!0;for(let nt=0;nt<c;nt++){let U=E[nt].g;const ct=E[nt].map;if(U-=w,0>U)w=Math.max(0,E[nt].g-100),j=!1;else try{Fl(ct,S,"req"+U+"_")}catch{h&&h(ct)}}if(j){h=S.join("&");break t}}}return r=r.i.splice(0,c),a.D=r,h}function ys(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;be||Si(),Pe||(be(),Pe=!0),hr.add(a,r),r.v=0}}function kr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=ke(P(r.Fa,r),Ts(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,vs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=ke(P(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Rn(this),vs(this))};function Nr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function vs(r){r.g=new Mt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Ct(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),$e(r,a),r.m&&r.o&&Vr(a,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=In(Ct(a)),c.m=null,c.P=!0,Gi(c,r)}n.Za=function(){this.C!=null&&(this.C=null,Rn(this),kr(this),mt(19))};function Pn(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function Es(r,a){var c=null;if(r.g==a){Pn(r),Nr(r),r.g=null;var h=2}else if(Sr(r.h,a))c=a.D,Ji(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;h=mn(),gt(h,new $i(h,c)),bn(r)}else ys(r);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&jl(r,a)||h==2&&kr(r)))switch(c&&0<c.length&&(a=r.h,a.i=a.i.concat(c)),E){case 1:Jt(r,5);break;case 4:Jt(r,10);break;case 3:Jt(r,6);break;default:Jt(r,2)}}}function Ts(r,a){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*a}function Jt(r,a){if(r.j.info("Error code "+a),a==2){var c=P(r.fb,r),h=r.Xa;const E=!h;h=new Yt(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||En(h,"https"),In(h),E?Ol(h.toString(),c):xl(h.toString(),c)}else mt(2);r.G=0,r.l&&r.l.sa(a),Is(r),gs(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Is(r){if(r.G=0,r.ka=[],r.l){const a=Zi(r.h);(a.length!=0||r.i.length!=0)&&(k(r.ka,a),k(r.ka,r.i),r.h.i.length=0,x(r.i),r.i.length=0),r.l.ra()}}function ws(r,a,c){var h=c instanceof Yt?Ct(c):new Yt(c);if(h.g!="")a&&(h.g=a+"."+h.g),Tn(h,h.s);else{var E=u.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var w=new Yt(null);h&&En(w,h),a&&(w.g=a),E&&Tn(w,E),c&&(w.l=c),h=w}return c=r.D,a=r.ya,c&&a&&q(h,c,a),q(h,"VER",r.la),$e(r,h),h}function As(r,a,c){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new Le({eb:c})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rs(){}n=Rs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sn(){}Sn.prototype.g=function(r,a){return new Et(r,a)};function Et(r,a){lt.call(this),this.g=new ps(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new pe(this)}D(Et,lt),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Dr(this.g)},Et.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=vr(r),r=c);a.i.push(new Al(a.Ya++,r)),a.G==3&&bn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,Dr(this.g),delete this.g,Et.aa.N.call(this)};function bs(r){Tr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const c in a){r=c;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(bs,Tr);function Ps(){Ir.call(this),this.status=1}D(Ps,Ir);function pe(r){this.g=r}D(pe,Rs),pe.prototype.ua=function(){gt(this.g,"a")},pe.prototype.ta=function(r){gt(this.g,new bs(r))},pe.prototype.sa=function(r){gt(this.g,new Ps)},pe.prototype.ra=function(){gt(this.g,"b")},Sn.prototype.createWebChannel=Sn.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Bo=function(){return new Sn},Uo=function(){return mn()},Lo=Qt,Xr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,xn=_n,qi.COMPLETE="complete",Fo=qi,Li.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ke=Li,Mo=Le,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,xo=W}).apply(typeof Vn<"u"?Vn:typeof self<"u"?self:typeof window<"u"?window:{});const $s="@firebase/firestore";/**
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
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let we="10.12.1";/**
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
 */const oe=new oi("@firebase/firestore");function He(){return oe.logLevel}function V(n,...t){if(oe.logLevel<=L.DEBUG){const e=t.map(li);oe.debug(`Firestore (${we}): ${n}`,...e)}}function ae(n,...t){if(oe.logLevel<=L.ERROR){const e=t.map(li);oe.error(`Firestore (${we}): ${n}`,...e)}}function jn(n,...t){if(oe.logLevel<=L.WARN){const e=t.map(li);oe.warn(`Firestore (${we}): ${n}`,...e)}}function li(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw ae(t),new Error(t)}function et(n,t){n||M()}function z(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Gt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class jo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class Pu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Su{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},u=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new jo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new dt(t)}}class Cu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Vu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Cu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Du{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ku{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new Du(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class $o{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Nu(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function $(n,t){return n<t?-1:n>t?1:0}function ye(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class J{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new J(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new J(0,0))}static max(){return new G(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tn{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return tn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends tn{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Ou=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends tn{construct(t,e,i){return new st(t,e,i)}static isValidIdentifier(t){return Ou.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(i+=u,s++):(o(),s++)}if(o(),l)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}function xu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new J(e+1,0):new J(e,i));return new qt(s,O.empty(),t)}function Mu(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new qt(G.min(),O.empty(),-1)}static max(){return new qt(G.max(),O.empty(),-1)}}function Fu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
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
 */const Lu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function qo(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Lu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,l=!1;t.forEach(u=>{++s,u.next(()=>{++o,l&&o===s&&e()},d=>i(d))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,l=new Array(o);let u=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(I=>{l[f]=I,++u,u===o&&i(l)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Bu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function tr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}zo.oe=-1;function ci(n){return n==null}function $n(n){return n===0&&1/n==-1/0}function ju(n){return typeof n=="number"&&Number.isInteger(n)&&!$n(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function qs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ln(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ho(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class vt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??rt.RED,this.left=s??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new rt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,o){return this}insert(t,e,i){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zs(this.data.getIterator())}getIteratorFrom(t){return new zs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class zs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new pt(st.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class $u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $u("Invalid base64 string: "+o):o}}(t);return new Ot(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Ot(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const qu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function le(n){if(et(!!n),typeof n=="string"){let t=0;const e=qu.exec(n);if(et(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
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
 */function ui(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Go(n){const t=n.mapValue.fields.__previous_value__;return ui(t)?Go(t):t}function qn(n){const t=le(n.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class zu{constructor(t,e,i,s,o,l,u,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f}}class zn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof zn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ui(n)?4:Hu(n)?9007199254740991:10:M()}function Pt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return qn(n).isEqual(qn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=le(s.timestampValue),u=le(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return en(s.bytesValue).isEqual(en(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=it(s.doubleValue),u=it(o.doubleValue);return l===u?$n(l)===$n(u):isNaN(l)&&isNaN(u)}return!1}(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:return function(s,o){const l=s.mapValue.fields||{},u=o.mapValue.fields||{};if(qs(l)!==qs(u))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(u[d]===void 0||!Pt(l[d],u[d])))return!1;return!0}(n,t);default:return M()}}function nn(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function Ee(n,t){if(n===t)return 0;const e=ve(n),i=ve(t);if(e!==i)return $(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,l){const u=it(o.integerValue||o.doubleValue),d=it(l.integerValue||l.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,t);case 3:return Hs(n.timestampValue,t.timestampValue);case 4:return Hs(qn(n),qn(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,l){const u=en(o),d=en(l);return u.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const u=o.split("/"),d=l.split("/");for(let f=0;f<u.length&&f<d.length;f++){const I=$(u[f],d[f]);if(I!==0)return I}return $(u.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const u=$(it(o.latitude),it(l.latitude));return u!==0?u:$(it(o.longitude),it(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const u=o.values||[],d=l.values||[];for(let f=0;f<u.length&&f<d.length;++f){const I=Ee(u[f],d[f]);if(I)return I}return $(u.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===kn.mapValue&&l===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(l===kn.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),f=l.fields||{},I=Object.keys(f);d.sort(),I.sort();for(let A=0;A<d.length&&A<I.length;++A){const P=$(d[A],I[A]);if(P!==0)return P;const C=Ee(u[d[A]],f[I[A]]);if(C!==0)return C}return $(d.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function Hs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=le(n),i=le(t),s=$(e.seconds,i.seconds);return s!==0?s:$(e.nanos,i.nanos)}function Te(n){return Yr(n)}function Yr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=le(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return en(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Yr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${Yr(e.fields[l])}`;return s+"}"}(n.mapValue):M()}function Jr(n){return!!n&&"integerValue"in n}function hi(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"mapValue"in n}function We(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ln(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=We(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=We(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Hu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Mn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=We(e)}setAll(t){let e=st.emptyPath(),i={},s=[];t.forEach((l,u)=>{if(!e.isImmediateParentOf(u)){const d=this.getFieldsMap(e);this.applyChanges(d,i,s),i={},s=[],e=u.popLast()}l?i[u.lastSegment()]=We(l):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Mn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Mn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){ln(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new At(We(this.value))}}function Ko(n){const t=[];return ln(n.fields,(e,i)=>{const s=new st([e]);if(Mn(i)){const o=Ko(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Rt(t)}/**
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
 */class wt{constructor(t,e,i,s,o,l,u){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new wt(t,0,G.min(),G.min(),G.min(),At.empty(),0)}static newFoundDocument(t,e,i,s){return new wt(t,1,e,G.min(),i,s,0)}static newNoDocument(t,e){return new wt(t,2,e,G.min(),G.min(),At.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,G.min(),G.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function Gs(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(l.referenceValue),e.key):i=Ee(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ks(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Wo{}class tt extends Wo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Wu(t,e,i):e==="array-contains"?new Yu(t,i):e==="in"?new Ju(t,i):e==="not-in"?new Zu(t,i):e==="array-contains-any"?new th(t,i):new tt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Qu(t,i):new Xu(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ee(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(Ee(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Wo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new zt(t,e)}matches(t){return Qo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qo(n){return n.op==="and"}function Xo(n){return Ku(n)&&Qo(n)}function Ku(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function Zr(n){if(n instanceof tt)return n.field.canonicalString()+n.op.toString()+Te(n.value);if(Xo(n))return n.filters.map(t=>Zr(t)).join(",");{const t=n.filters.map(e=>Zr(e)).join(",");return`${n.op}(${t})`}}function Yo(n,t){return n instanceof tt?function(i,s){return s instanceof tt&&i.op===s.op&&i.field.isEqual(s.field)&&Pt(i.value,s.value)}(n,t):n instanceof zt?function(i,s){return s instanceof zt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,u)=>o&&Yo(l,s.filters[u]),!0):!1}(n,t):void M()}function Jo(n){return n instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Te(e.value)}`}(n):n instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Jo).join(" ,")+"}"}(n):"Filter"}class Wu extends tt{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qu extends tt{constructor(t,e){super(t,"in",e),this.keys=Zo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xu extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Zo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Zo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class Yu extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&nn(e.arrayValue,this.value)}}class Ju extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class Zu extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!nn(this.value.arrayValue,e)}}class th extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>nn(this.value.arrayValue,i))}}/**
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
 */class eh{constructor(t,e=null,i=[],s=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=u,this.ue=null}}function Ws(n,t=null,e=[],i=[],s=null,o=null,l=null){return new eh(n,t,e,i,s,o,l)}function di(n){const t=z(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Zr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),ci(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>Te(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>Te(i)).join(",")),t.ue=e}return t.ue}function fi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Gu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Yo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ks(n.startAt,t.startAt)&&Ks(n.endAt,t.endAt)}/**
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
 */class er{constructor(t,e=null,i=[],s=[],o=null,l="F",u=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nh(n,t,e,i,s,o,l,u){return new er(n,t,e,i,s,o,l,u)}function rh(n){return new er(n)}function Qs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ih(n){return n.collectionGroup!==null}function Qe(n){const t=z(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new pt(st.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Gn(o,i))}),e.has(st.keyField().canonicalString())||t.ce.push(new Gn(st.keyField(),i))}return t.ce}function re(n){const t=z(n);return t.le||(t.le=sh(t,Qe(n))),t.le}function sh(n,t){if(n.limitType==="F")return Ws(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Gn(s.field,o)});const e=n.endAt?new Hn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hn(n.startAt.position,n.startAt.inclusive):null;return Ws(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function ti(n,t,e){return new er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ta(n,t){return fi(re(n),re(t))&&n.limitType===t.limitType}function ea(n){return`${di(re(n))}|lt:${n.limitType}`}function Ge(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Jo(s)).join(", ")}]`),ci(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>Te(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>Te(s)).join(",")),`Target(${i})`}(re(n))}; limitType=${n.limitType})`}function pi(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of Qe(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,u,d){const f=Gs(l,u,d);return l.inclusive?f<=0:f<0}(i.startAt,Qe(i),s)||i.endAt&&!function(l,u,d){const f=Gs(l,u,d);return l.inclusive?f>=0:f>0}(i.endAt,Qe(i),s))}(n,t)}function oh(n){return(t,e)=>{let i=!1;for(const s of Qe(n)){const o=ah(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function ah(n,t,e){const i=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,u){const d=l.data.field(o),f=u.data.field(o);return d!==null&&f!==null?Ee(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
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
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ln(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return Ho(this.inner)}size(){return this.innerSize}}/**
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
 */const lh=new vt(O.comparator);function Kn(){return lh}const na=new vt(O.comparator);function Nn(...n){let t=na;for(const e of n)t=t.insert(e.key,e);return t}function ra(n){let t=na;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function te(){return Xe()}function ia(){return Xe()}function Xe(){return new Ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const ch=new vt(O.comparator),uh=new pt(O.comparator);function ft(...n){let t=uh;for(const e of n)t=t.add(e);return t}const hh=new pt($);function dh(){return hh}/**
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
 */function sa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function oa(n){return{integerValue:""+n}}function fh(n,t){return ju(t)?oa(t):sa(n,t)}/**
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
 */class nr{constructor(){this._=void 0}}function ph(n,t,e){return n instanceof Wn?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ui(o)&&(o=Go(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof rn?la(n,t):n instanceof sn?ca(n,t):function(s,o){const l=aa(s,o),u=Xs(l)+Xs(s.Pe);return Jr(l)&&Jr(s.Pe)?oa(u):sa(s.serializer,u)}(n,t)}function gh(n,t,e){return n instanceof rn?la(n,t):n instanceof sn?ca(n,t):e}function aa(n,t){return n instanceof Qn?function(i){return Jr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Wn extends nr{}class rn extends nr{constructor(t){super(),this.elements=t}}function la(n,t){const e=ua(t);for(const i of n.elements)e.some(s=>Pt(s,i))||e.push(i);return{arrayValue:{values:e}}}class sn extends nr{constructor(t){super(),this.elements=t}}function ca(n,t){let e=ua(t);for(const i of n.elements)e=e.filter(s=>!Pt(s,i));return{arrayValue:{values:e}}}class Qn extends nr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Xs(n){return it(n.integerValue||n.doubleValue)}function ua(n){return hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mh(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof rn&&s instanceof rn||i instanceof sn&&s instanceof sn?ye(i.elements,s.elements,Pt):i instanceof Qn&&s instanceof Qn?Pt(i.Pe,s.Pe):i instanceof Wn&&s instanceof Wn}(n.transform,t.transform)}class _h{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class rr{}function ha(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new fa(n.key,Dt.none()):new cn(n.key,n.data,Dt.none());{const e=n.data,i=At.empty();let s=new pt(st.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new he(n.key,i,new Rt(s.toArray()),Dt.none())}}function yh(n,t,e){n instanceof cn?function(s,o,l){const u=s.value.clone(),d=Js(s.fieldTransforms,o,l.transformResults);u.setAll(d),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,t,e):n instanceof he?function(s,o,l){if(!Fn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const u=Js(s.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(da(s)),d.setAll(u),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Ye(n,t,e,i){return n instanceof cn?function(o,l,u,d){if(!Fn(o.precondition,l))return u;const f=o.value.clone(),I=Zs(o.fieldTransforms,d,l);return f.setAll(I),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,t,e,i):n instanceof he?function(o,l,u,d){if(!Fn(o.precondition,l))return u;const f=Zs(o.fieldTransforms,d,l),I=l.data;return I.setAll(da(o)),I.setAll(f),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(o,l,u){return Fn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,t,e)}function vh(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=aa(i.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(i.field,o))}return e||null}function Ys(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ye(i,s,(o,l)=>mh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cn extends rr{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class he extends rr{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function da(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Js(n,t,e){const i=new Map;et(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,u=t.data.field(o.field);i.set(o.field,gh(l,u,e[s]))}return i}function Zs(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,ph(o,l,t))}return i}class fa extends rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Th{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&yh(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ye(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ye(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ia();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(s.key)?null:u;const d=ha(l,u);d!==null&&i.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(G.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(e,i)=>Ys(e,i))&&ye(this.baseMutations,t.baseMutations,(e,i)=>Ys(e,i))}}class gi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){et(t.mutations.length===i.length);let s=function(){return ch}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new gi(t,e,i,s)}}/**
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
 */class Ih{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Y,F;function wh(n){switch(n){default:return M();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ah(n){if(n===void 0)return ae("GRPC error has no .code"),b.UNKNOWN;switch(n){case Y.OK:return b.OK;case Y.CANCELLED:return b.CANCELLED;case Y.UNKNOWN:return b.UNKNOWN;case Y.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Y.INTERNAL:return b.INTERNAL;case Y.UNAVAILABLE:return b.UNAVAILABLE;case Y.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Y.NOT_FOUND:return b.NOT_FOUND;case Y.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Y.ABORTED:return b.ABORTED;case Y.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Y.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Oo([4294967295,4294967295],0);class Rh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ei(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ph(n,t){return ei(n,t.toTimestamp())}function _e(n){return et(!!n),G.fromTimestamp(function(e){const i=le(e);return new J(i.seconds,i.nanos)}(n))}function pa(n,t){return ni(n,t).canonicalString()}function ni(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Sh(n){const t=Q.fromString(n);return et(Mh(t)),t}function ri(n,t){return pa(n.databaseId,t.path)}function Ch(n){const t=Sh(n);return t.length===4?Q.emptyPath():Dh(t)}function Vh(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dh(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function to(n,t,e){return{name:ri(n,t),fields:e.value.mapValue.fields}}function kh(n,t){let e;if(t instanceof cn)e={update:to(n,t.key,t.value)};else if(t instanceof fa)e={delete:ri(n,t.key)};else if(t instanceof he)e={update:to(n,t.key,t.data),updateMask:xh(t.fieldMask)};else{if(!(t instanceof Eh))return M();e={verify:ri(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const u=l.transform;if(u instanceof Wn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof rn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof sn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Qn)return{fieldPath:l.field.canonicalString(),increment:u.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ph(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function Nh(n,t){return n&&n.length>0?(et(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?_e(s.updateTime):_e(o);return l.isEqual(G.min())&&(l=_e(o)),new _h(l,s.transformResults||[])}(e,t))):[]}function Oh(n){let t=Ch(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){et(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const P=ga(A);return P instanceof zt&&Xo(P)?P.getFilters():[P]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(P=>function(D){return new Gn(me(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(P))}(e.orderBy));let u=null;e.limit&&(u=function(A){let P;return P=typeof A=="object"?A.value:A,ci(P)?null:P}(e.limit));let d=null;e.startAt&&(d=function(A){const P=!!A.before,C=A.values||[];return new Hn(C,P)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const P=!A.before,C=A.values||[];return new Hn(C,P)}(e.endAt)),nh(t,s,l,o,u,"F",d,f)}function ga(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=me(e.unaryFilter.field);return tt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=me(e.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=me(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=me(e.unaryFilter.field);return tt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return tt.create(me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(i=>ga(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function me(n){return st.fromServerFormat(n.fieldPath)}function xh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Fh{constructor(t){this.ct=t}}function Lh(n){const t=Oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ti(t,t.limit,"L"):t}/**
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
 */class Uh{constructor(){this._n=new Bh}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(qt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Bh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new pt(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new pt(Q.comparator)).toArray()}}/**
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
 */class Ie{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ie(0)}static Ln(){return new Ie(-1)}}/**
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
 */class jh{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class $h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class qh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Ye(i.mutation,s,Rt.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=te();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Nn();return o.forEach((u,d)=>{l=l.insert(u,d.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=te();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,u)=>{e.set(l,u)})})}computeViews(t,e,i,s){let o=Kn();const l=Xe(),u=function(){return Xe()}();return e.forEach((d,f)=>{const I=i.get(f.key);s.has(f.key)&&(I===void 0||I.mutation instanceof he)?o=o.insert(f.key,f):I!==void 0?(l.set(f.key,I.mutation.getFieldMask()),Ye(I.mutation,f,I.mutation.getFieldMask(),J.now())):l.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,I)=>l.set(f,I)),e.forEach((f,I)=>{var A;return u.set(f,new $h(I,(A=l.get(f))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(t,e){const i=Xe();let s=new vt((l,u)=>l-u),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const u of l)u.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let I=i.get(d)||Rt.empty();I=u.applyToLocalView(f,I),i.set(d,I);const A=(s.get(u.batchId)||ft()).add(d);s=s.insert(u.batchId,A)})}).next(()=>{const l=[],u=s.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),f=d.key,I=d.value,A=ia();I.forEach(P=>{if(!o.has(P)){const C=ha(e.get(P),i.get(P));C!==null&&A.set(P,C),o=o.add(P)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ih(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(te());let u=-1,d=o;return l.next(f=>R.forEach(f,(I,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(P=>{d=d.insert(I,P)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,ft())).next(I=>({batchId:u,changes:ra(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=Nn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Nn();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,d=>{const f=function(A,P){return new er(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,i,s).next(I=>{I.forEach((A,P)=>{l=l.insert(A,P)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((d,f)=>{const I=f.getKey();l.get(I)===null&&(l=l.insert(I,wt.newInvalidDocument(I)))});let u=Nn();return l.forEach((d,f)=>{const I=o.get(d);I!==void 0&&Ye(I.mutation,f,Rt.empty(),J.now()),pi(e,f)&&(u=u.insert(d,f))}),u})}}/**
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
 */class zh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:_e(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Lh(s.bundledQuery),readTime:_e(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Hh{constructor(){this.overlays=new vt(O.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=te();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=te(),o=e.length+1,l=new O(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const d=u.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>i&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new vt((f,I)=>f-I);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>i){let I=o.get(f.largestBatchId);I===null&&(I=te(),o=o.insert(f.largestBatchId,I)),I.set(f.getKey(),f)}}const u=te(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,I)=>u.set(f,I)),!(u.size()>=s)););return R.resolve(u)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new Ih(e,i));let o=this.hr.get(e);o===void 0&&(o=ft(),this.hr.set(e,o)),this.hr.set(e,o.add(i.key))}}/**
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
 */class mi{constructor(){this.Pr=new pt(Z.Ir),this.Tr=new pt(Z.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new Z(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new Z(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new O(new Q([])),i=new Z(e,t),s=new Z(e,t+1),o=[];return this.Tr.forEachInRange([i,s],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new Q([])),i=new Z(e,t),s=new Z(e,t+1);let o=ft();return this.Tr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new Z(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Z{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||$(t.pr,e.pr)}static Er(t,e){return $(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
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
 */class Gh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new pt(Z.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Th(o,e,i,s);this.mutationQueue.push(l);for(const u of s)this.wr=this.wr.add(new Z(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Z(e,0),s=new Z(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([i,s],l=>{const u=this.Sr(l.pr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new pt($);return e.forEach(s=>{const o=new Z(s,0),l=new Z(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],u=>{i=i.add(u.pr)})}),R.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const l=new Z(new O(o),0);let u=new pt($);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!i.isPrefixOf(f)&&(f.length===s&&(u=u.add(d.pr)),!0)},l),R.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){et(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return R.forEach(e.mutations,s=>{const o=new Z(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new Z(e,0),s=this.wr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Kh{constructor(t){this.vr=t,this.docs=function(){return new vt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let i=Kn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Kn();const l=e.path,u=new O(l.child("")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:f,value:{document:I}}=d.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||Fu(Mu(I),i)<=0||(s.has(I.key)||pi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M()}Fr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Wh(this)}getSize(t){return R.resolve(this.size)}}class Wh extends jh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Qh{constructor(t){this.persistence=t,this.Mr=new Ae(e=>di(e),fi),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new mi,this.targetCount=0,this.Lr=Ie.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Mr.forEach((l,u)=>{u.sequenceNumber<=e&&i.get(u.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
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
 */class Xh{constructor(t,e){this.Br={},this.overlays={},this.kr=new zo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Qh(this),this.indexManager=new Uh,this.remoteDocumentCache=function(s){return new Kh(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new Fh(e),this.$r=new zh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new Gh(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){V("MemoryPersistence","Starting transaction:",t);const s=new Yh(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return R.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class Yh extends Uu{constructor(t){super(),this.currentSequenceNumber=t}}class _i{constructor(t){this.persistence=t,this.zr=new mi,this.jr=null}static Hr(t){return new _i(t)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,i=>{const s=O.fromPath(i);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,G.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class yi{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new yi(t,e.fromCache,i,s)}}/**
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
 */class Jh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Zh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return cc()?8:Bu(oc())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Jh;return this.Ji(t,e,l).next(u=>{if(o.result=u,this.Ui)return this.Yi(t,e,l,u.size)})}).next(()=>o.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(He()<=L.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(He()<=L.DEBUG&&V("QueryEngine","Query:",Ge(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(He()<=L.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):R.resolve())}ji(t,e){if(Qs(e))return R.resolve(null);let i=re(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ti(e,null,"F"),i=re(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=ft(...o);return this.zi.getDocuments(t,l).next(u=>this.indexManager.getMinOffset(t,i).next(d=>{const f=this.Zi(e,u);return this.Xi(e,f,l,d.readTime)?this.ji(t,ti(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,i,s){return Qs(e)||s.isEqual(G.min())?R.resolve(null):this.zi.getDocuments(t,i).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,i,s)?R.resolve(null):(He()<=L.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ge(e)),this.es(t,l,e,xu(s,-1)).next(u=>u))})}Zi(t,e){let i=new pt(oh(t));return e.forEach((s,o)=>{pi(t,o)&&(i=i.add(o))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,i){return He()<=L.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.zi.getDocumentsMatchingQuery(t,e,qt.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */class td{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new vt($),this.rs=new Ae(o=>di(o),fi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function ed(n,t,e,i){return new td(n,t,e,i)}async function ma(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],u=[];let d=ft();for(const f of s){l.push(f.batchId);for(const I of f.mutations)d=d.add(I.key)}for(const f of o){u.push(f.batchId);for(const I of f.mutations)d=d.add(I.key)}return e.localDocuments.getDocuments(i,d).next(f=>({us:f,removedBatchIds:l,addedBatchIds:u}))})})}function nd(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(u,d,f,I){const A=f.batch,P=A.keys();let C=R.resolve();return P.forEach(D=>{C=C.next(()=>I.getEntry(d,D)).next(x=>{const k=f.docVersions.get(D);et(k!==null),x.version.compareTo(k)<0&&(A.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),I.addEntry(x)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(d,A))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(u){let d=ft();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(d=d.add(u.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function rd(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function id(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class eo{constructor(){this.activeTargetIds=dh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sd{constructor(){this.no=new eo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new eo,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class od{io(t){}shutdown(){}}/**
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
 */class no{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let On=null;function Ur(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
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
 */const ad={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ld{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const ht="WebChannelConnection";class cd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,i,s,o,l){const u=Ur(),d=this.vo(e,i.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${u}:`,d,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,l),this.Mo(e,d,f,s).then(I=>(V("RestConnection",`Received RPC '${e}' ${u}: `,I),I),I=>{throw jn("RestConnection",`RPC '${e}' ${u} failed with error: `,I,"url: ",d,"request:",s),I})}xo(e,i,s,o,l,u){return this.Co(e,i,s,o,l)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}vo(e,i){const s=ad[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const o=Ur();return new Promise((l,u)=>{const d=new xo;d.setWithCredentials(!0),d.listenOnce(Fo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case xn.NO_ERROR:const I=d.getResponseJson();V(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case xn.TIMEOUT:V(ht,`RPC '${t}' ${o} timed out`),u(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case xn.HTTP_ERROR:const A=d.getStatus();if(V(ht,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const D=function(k){const K=k.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(K)>=0?K:b.UNKNOWN}(C.status);u(new N(D,C.message))}else u(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new N(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(ht,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);V(ht,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,i,15)})}Oo(t,e,i){const s=Ur(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Bo(),u=Uo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new Mo({})),this.Fo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const I=o.join("");V(ht,`Creating RPC '${t}' stream ${s}: ${I}`,d);const A=l.createWebChannel(I,d);let P=!1,C=!1;const D=new ld({lo:k=>{C?V(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(P||(V(ht,`Opening RPC '${t}' stream ${s} transport.`),A.open(),P=!0),V(ht,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},ho:()=>A.close()}),x=(k,K,H)=>{k.listen(K,X=>{try{H(X)}catch(ot){setTimeout(()=>{throw ot},0)}})};return x(A,Ke.EventType.OPEN,()=>{C||(V(ht,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),x(A,Ke.EventType.CLOSE,()=>{C||(C=!0,V(ht,`RPC '${t}' stream ${s} transport closed`),D.po())}),x(A,Ke.EventType.ERROR,k=>{C||(C=!0,jn(ht,`RPC '${t}' stream ${s} transport errored:`,k),D.po(new N(b.UNAVAILABLE,"The operation could not be completed")))}),x(A,Ke.EventType.MESSAGE,k=>{var K;if(!C){const H=k.data[0];et(!!H);const X=H,ot=X.error||((K=X[0])===null||K===void 0?void 0:K.error);if(ot){V(ht,`RPC '${t}' stream ${s} received error:`,ot);const Wt=ot.status;let _t=function(m){const _=Y[m];if(_!==void 0)return Ah(_)}(Wt),v=ot.message;_t===void 0&&(_t=b.INTERNAL,v="Unknown error status: "+Wt+" with message "+ot.message),C=!0,D.po(new N(_t,v)),A.close()}else V(ht,`RPC '${t}' stream ${s} received:`,H),D.yo(H)}}),x(u,Lo.STAT_EVENT,k=>{k.stat===Xr.PROXY?V(ht,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Xr.NOPROXY&&V(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function Br(){return typeof document<"u"?document:null}/**
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
 */function ir(n){return new Rh(n,!0)}/**
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
 */class _a{constructor(t,e,i=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class ud{constructor(t,e,i,s,o,l,u,d){this.oi=t,this.Go=i,this.zo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new _a(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(ae(e.toString()),ae("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hd extends ud{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Nh(t.writeResults,t.commitTime),i=_e(t.commitTime);return this.listener.A_(i,e)}return et(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Vh(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>kh(this.serializer,i))};this.i_(e)}}/**
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
 */class dd extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,ni(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}xo(t,e,i,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.xo(t,ni(e,i),s,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(b.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class fd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ae(e),this.y_=!1):V("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class pd{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{i.enqueueAndForget(async()=>{hn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=z(d);f.M_.add(4),await un(f),f.N_.set("Unknown"),f.M_.delete(4),await sr(f)}(this))})}),this.N_=new fd(i,s)}}async function sr(n){if(hn(n))for(const t of n.x_)await t(!0)}async function un(n){for(const t of n.x_)await t(!1)}function hn(n){return z(n).M_.size===0}async function ya(n,t,e){if(!tr(t))throw t;n.M_.add(1),await un(n),n.N_.set("Offline"),e||(e=()=>rd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await sr(n)})}function va(n,t){return t().catch(e=>ya(n,e,t))}async function or(n){const t=z(n),e=Ht(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;gd(t);)try{const s=await id(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,md(t,s)}catch(s){await ya(t,s)}Ea(t)&&Ta(t)}function gd(n){return hn(n)&&n.v_.length<10}function md(n,t){n.v_.push(t);const e=Ht(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Ea(n){return hn(n)&&!Ht(n).Zo()&&n.v_.length>0}function Ta(n){Ht(n).start()}async function _d(n){Ht(n).V_()}async function yd(n){const t=Ht(n);for(const e of n.v_)t.d_(e.mutations)}async function vd(n,t,e){const i=n.v_.shift(),s=gi.from(i,t,e);await va(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await or(n)}async function Ed(n,t){t&&Ht(n).E_&&await async function(i,s){if(function(l){return wh(l)&&l!==b.ABORTED}(s.code)){const o=i.v_.shift();Ht(i).t_(),await va(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await or(i)}}(n,t),Ea(n)&&Ta(n)}async function ro(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const i=hn(e);e.M_.add(3),await un(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await sr(e)}async function Td(n,t){const e=z(n);t?(e.M_.delete(2),await sr(e)):t||(e.M_.add(2),await un(e),e.N_.set("Unknown"))}function Ht(n){return n.k_||(n.k_=function(e,i,s){const o=z(e);return o.f_(),new hd(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:_d.bind(null,n),Ao:Ed.bind(null,n),R_:yd.bind(null,n),A_:vd.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await or(n)):(await n.k_.stop(),n.v_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class vi{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,u=new vi(t,e,l,s,o);return u.start(i),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ia(n,t){if(ae("AsyncQueue",`${t}: ${n}`),tr(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}class Id{constructor(){this.queries=new Ae(t=>ea(t),ta),this.onlineState="Unknown",this.z_=new Set}}function wd(n){n.z_.forEach(t=>{t.next()})}var io,so;(so=io||(io={})).J_="default",so.Cache="cache";class Ad{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new Ae(u=>ea(u),ta),this.Da=new Map,this.Ca=new Set,this.va=new vt(O.comparator),this.Fa=new Map,this.Ma=new mi,this.xa={},this.Oa=new Map,this.Na=Ie.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Rd(n,t,e){const i=Cd(n);try{const s=await function(l,u){const d=z(l),f=J.now(),I=u.reduce((C,D)=>C.add(D.key),ft());let A,P;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Kn(),x=ft();return d.os.getEntries(C,I).next(k=>{D=k,D.forEach((K,H)=>{H.isValidDocument()||(x=x.add(K))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,D)).next(k=>{A=k;const K=[];for(const H of u){const X=vh(H,A.get(H.key).overlayedDocument);X!=null&&K.push(new he(H.key,X,Ko(X.value.mapValue),Dt.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,K,u)}).next(k=>{P=k;const K=k.applyToLocalDocumentSet(A,x);return d.documentOverlayCache.saveOverlays(C,k.batchId,K)})}).then(()=>({batchId:P.batchId,changes:ra(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,u,d){let f=l.xa[l.currentUser.toKey()];f||(f=new vt($)),f=f.insert(u,d),l.xa[l.currentUser.toKey()]=f}(i,s.batchId,e),await ar(i,s.changes),await or(i.remoteStore)}catch(s){const o=Ia(s,"Failed to persist write");e.reject(o)}}function oo(n,t,e){const i=z(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((o,l)=>{const u=l.view.j_(t);u.snapshot&&s.push(u.snapshot)}),function(l,u){const d=z(l);d.onlineState=u;let f=!1;d.queries.forEach((I,A)=>{for(const P of A.U_)P.j_(u)&&(f=!0)}),f&&wd(d)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function bd(n,t){const e=z(n),i=t.batch.batchId;try{const s=await nd(e.localStore,t);Aa(e,i,null),wa(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await ar(e,s)}catch(s){await qo(s)}}async function Pd(n,t,e){const i=z(n);try{const s=await function(l,u){const d=z(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let I;return d.mutationQueue.lookupMutationBatch(f,u).next(A=>(et(A!==null),I=A.keys(),d.mutationQueue.removeMutationBatch(f,A))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,I,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,I)).next(()=>d.localDocuments.getDocuments(f,I))})}(i.localStore,t);Aa(i,t,e),wa(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await ar(i,s)}catch(s){await qo(s)}}function wa(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Aa(n,t,e){const i=z(n);let s=i.xa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function ar(n,t,e){const i=z(n),s=[],o=[],l=[];i.ba.isEmpty()||(i.ba.forEach((u,d)=>{l.push(i.Ba(d,t,e).then(f=>{if((f||e)&&i.isPrimaryClient){const I=f&&!f.fromCache;i.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(f){s.push(f);const I=yi.Ki(d.targetId,f);o.push(I)}}))}),await Promise.all(l),i.Sa.h_(s),await async function(d,f){const I=z(d);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,P=>R.forEach(P.qi,C=>I.persistence.referenceDelegate.addReference(A,P.targetId,C)).next(()=>R.forEach(P.Qi,C=>I.persistence.referenceDelegate.removeReference(A,P.targetId,C)))))}catch(A){if(!tr(A))throw A;V("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const P=A.targetId;if(!A.fromCache){const C=I.ns.get(P),D=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(D);I.ns=I.ns.insert(P,x)}}}(i.localStore,o))}async function Sd(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const i=await ma(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(u=>{u.forEach(d=>{d.reject(new N(b.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ar(e,i.us)}}function Cd(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pd.bind(null,t),t}class ao{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ir(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ed(this.persistence,new Zh,t.initialUser,this.serializer)}createPersistence(t){return new Xh(_i.Hr,this.serializer)}createSharedClientState(t){return new sd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>oo(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sd.bind(null,this.syncEngine),await Td(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Id}()}createDatastore(t){const e=ir(t.databaseInfo.databaseId),i=function(o){return new cd(o)}(t.databaseInfo);return function(o,l,u,d){return new dd(o,l,u,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,u){return new pd(i,s,o,l,u)}(this.localStore,this.datastore,t.asyncQueue,e=>oo(this.syncEngine,e,0),function(){return no.D()?new no:new od}())}createSyncEngine(t,e){return function(s,o,l,u,d,f,I){const A=new Ad(s,o,l,u,d,f);return I&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=z(i);V("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await un(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Dd{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=$o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ia(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function jr(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await ma(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function lo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Nd(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>ro(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ro(t.remoteStore,s)),n._onlineComponents=t}function kd(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Nd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await jr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!kd(e))throw e;jn("Error using user provided cache. Falling back to memory cache: "+e),await jr(n,new ao)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await jr(n,new ao);return n._offlineComponents}async function Od(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await lo(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await lo(n,new Vd))),n._onlineComponents}function xd(n){return Od(n).then(t=>t.syncEngine)}/**
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
 */function Ra(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const co=new Map;/**
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
 */function ba(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Md(n,t,e,i){if(t===!0&&i===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function uo(n){if(!O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ho(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ei(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Pa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ei(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class fo{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Md("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ra((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fo(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new bu;switch(i.type){case"firstParty":return new Vu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=co.get(e);i&&(V("ComponentProvider","Removing Datastore"),co.delete(e),i.terminate())}(this),Promise.resolve()}}function Fd(n,t,e,i={}){var s;const o=(n=Pa(n,lr))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let u,d;if(typeof i.mockUserToken=="string")u=i.mockUserToken,d=dt.MOCK_USER;else{u=sc(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(f)}n._authCredentials=new Pu(new jo(u,d))}}/**
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
 */class Ti{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ti(this.firestore,t,this._query)}}class kt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class jt extends Ti{constructor(t,e,i){super(t,e,rh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new O(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function Ld(n,t,...e){if(n=ie(n),ba("collection","path",t),n instanceof lr){const i=Q.fromString(t,...e);return ho(i),new jt(n,null,i)}{if(!(n instanceof kt||n instanceof jt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return ho(i),new jt(n.firestore,null,i)}}function Ud(n,t,...e){if(n=ie(n),arguments.length===1&&(t=$o.newId()),ba("doc","path",t),n instanceof lr){const i=Q.fromString(t,...e);return uo(i),new kt(n,null,new O(i))}{if(!(n instanceof kt||n instanceof jt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return uo(i),new kt(n.firestore,n instanceof jt?n.converter:null,new O(i))}}/**
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
 */class Bd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new _a(this,"async_queue_retry"),this.hu=()=>{const e=Br();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Br();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Br();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ne;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!tr(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(i);throw ae("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=vi.createAndSchedule(this,t,e,i,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Sa extends lr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Bd}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ca(this),this._firestoreClient.terminate()}}function jd(n,t){const e=typeof n=="object"?n:Do(),i=typeof n=="string"?n:"(default)",s=an(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=rc("firestore");o&&Fd(s,...o)}return s}function $d(n){return n._firestoreClient||Ca(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ca(n){var t,e,i;const s=n._freezeSettings(),o=function(u,d,f,I){return new zu(u,d,f,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Ra(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Dd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(Ot.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new on(Ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Va{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Da{constructor(t){this._methodName=t}}/**
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
 */class ka{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
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
 */const qd=/^__.*__$/;class zd{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new cn(t,this.data,e,this.fieldTransforms)}}function Na(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Ii{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Xn(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Na(this.fu)&&qd.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Hd{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||ir(t)}Fu(t,e,i,s=!1){return new Ii({fu:t,methodName:e,vu:i,path:st.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gd(n){const t=n._freezeSettings(),e=ir(n._databaseId);return new Hd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Kd(n,t,e,i,s,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Fa("Data must be an object, but it was:",l,i);const u=xa(i,l);let d,f;if(o.merge)d=new Rt(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const P=Wd(t,A,e);if(!l.contains(P))throw new N(b.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Yd(I,P)||I.push(P)}d=new Rt(I),f=l.fieldTransforms.filter(A=>d.covers(A.field))}else d=null,f=l.fieldTransforms;return new zd(new At(u),d,f)}function Oa(n,t){if(Ma(n=ie(n)))return Fa("Unsupported field value:",t,n),xa(n,t);if(n instanceof Da)return function(i,s){if(!Na(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const u of i){let d=Oa(u,s.bu(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=ie(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fh(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=J.fromDate(i);return{timestampValue:ei(s.serializer,o)}}if(i instanceof J){const o=new J(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ei(s.serializer,o)}}if(i instanceof ka)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof on)return{bytesValue:bh(s.serializer,i._byteString)};if(i instanceof kt){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:pa(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${Ei(i)}`)}(n,t)}function xa(n,t){const e={};return Ho(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ln(n,(i,s)=>{const o=Oa(s,t.pu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Ma(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof ka||n instanceof on||n instanceof kt||n instanceof Da)}function Fa(n,t,e){if(!Ma(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Ei(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function Wd(n,t,e){if((t=ie(t))instanceof Va)return t._internalPath;if(typeof t=="string")return Xd(n,t);throw Xn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Qd=new RegExp("[~\\*/\\[\\]]");function Xd(n,t,e){if(t.search(Qd)>=0)throw Xn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Va(...t.split("."))._internalPath}catch{throw Xn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Xn(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${i}`),l&&(d+=` in document ${s}`),d+=")"),new N(b.INVALID_ARGUMENT,u+n+d)}function Yd(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function Jd(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Zd(n,t){const e=Pa(n.firestore,Sa),i=Ud(n),s=Jd(n.converter,t);return tf(e,[Kd(Gd(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Dt.exists(!1))]).then(()=>i)}function tf(n,t){return function(i,s){const o=new ne;return i.asyncQueue.enqueueAndForget(async()=>Rd(await xd(i),s,o)),o.promise}($d(n),t)}(function(t,e=!0){(function(s){we=s})(pu),$t(new Nt("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),u=new Sa(new Su(i.getProvider("auth-internal")),new ku(i.getProvider("app-check-internal")),function(f,I){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(f.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),bt($s,"4.6.3",t),bt($s,"4.6.3","esm2017")})();const La="@firebase/installations",wi="0.6.7";/**
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
 */const Ua=1e4,Ba=`w:${wi}`,ja="FIS_v2",ef="https://firebaseinstallations.googleapis.com/v1",nf=60*60*1e3,rf="installations",sf="Installations";/**
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
 */const of={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ce=new Zn(rf,sf,of);function $a(n){return n instanceof Gt&&n.code.includes("request-failed")}/**
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
 */function qa({projectId:n}){return`${ef}/projects/${n}/installations`}function za(n){return{token:n.token,requestStatus:2,expiresIn:lf(n.expiresIn),creationTime:Date.now()}}async function Ha(n,t){const i=(await t.json()).error;return ce.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ga({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function af(n,{refreshToken:t}){const e=Ga(n);return e.append("Authorization",cf(t)),e}async function Ka(n){const t=await n();return t.status>=500&&t.status<600?n():t}function lf(n){return Number(n.replace("s","000"))}function cf(n){return`${ja} ${n}`}/**
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
 */async function uf({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=qa(n),s=Ga(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const l={fid:e,authVersion:ja,appId:n.appId,sdkVersion:Ba},u={method:"POST",headers:s,body:JSON.stringify(l)},d=await Ka(()=>fetch(i,u));if(d.ok){const f=await d.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:za(f.authToken)}}else throw await Ha("Create Installation",d)}/**
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
 */function Wa(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function hf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const df=/^[cdef][\w-]{21}$/,ii="";function ff(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=pf(n);return df.test(e)?e:ii}catch{return ii}}function pf(n){return hf(n).substr(0,22)}/**
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
 */function cr(n){return`${n.appName}!${n.appId}`}/**
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
 */const Qa=new Map;function Xa(n,t){const e=cr(n);Ya(e,t),gf(e,t)}function Ya(n,t){const e=Qa.get(n);if(e)for(const i of e)i(t)}function gf(n,t){const e=mf();e&&e.postMessage({key:n,fid:t}),_f()}let ee=null;function mf(){return!ee&&"BroadcastChannel"in self&&(ee=new BroadcastChannel("[Firebase] FID Change"),ee.onmessage=n=>{Ya(n.data.key,n.data.fid)}),ee}function _f(){Qa.size===0&&ee&&(ee.close(),ee=null)}/**
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
 */const yf="firebase-installations-database",vf=1,ue="firebase-installations-store";let $r=null;function Ai(){return $r||($r=Co(yf,vf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ue)}}})),$r}async function Yn(n,t){const e=cr(n),s=(await Ai()).transaction(ue,"readwrite"),o=s.objectStore(ue),l=await o.get(e);return await o.put(t,e),await s.done,(!l||l.fid!==t.fid)&&Xa(n,t.fid),t}async function Ja(n){const t=cr(n),i=(await Ai()).transaction(ue,"readwrite");await i.objectStore(ue).delete(t),await i.done}async function ur(n,t){const e=cr(n),s=(await Ai()).transaction(ue,"readwrite"),o=s.objectStore(ue),l=await o.get(e),u=t(l);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!l||l.fid!==u.fid)&&Xa(n,u.fid),u}/**
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
 */async function Ri(n){let t;const e=await ur(n.appConfig,i=>{const s=Ef(i),o=Tf(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===ii?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Ef(n){const t=n||{fid:ff(),registrationStatus:0};return Za(t)}function Tf(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ce.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=If(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:wf(n)}:{installationEntry:t}}async function If(n,t){try{const e=await uf(n,t);return Yn(n.appConfig,e)}catch(e){throw $a(e)&&e.customData.serverCode===409?await Ja(n.appConfig):await Yn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function wf(n){let t=await po(n.appConfig);for(;t.registrationStatus===1;)await Wa(100),t=await po(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Ri(n);return i||e}return t}function po(n){return ur(n,t=>{if(!t)throw ce.create("installation-not-found");return Za(t)})}function Za(n){return Af(n)?{fid:n.fid,registrationStatus:0}:n}function Af(n){return n.registrationStatus===1&&n.registrationTime+Ua<Date.now()}/**
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
 */async function Rf({appConfig:n,heartbeatServiceProvider:t},e){const i=bf(n,e),s=af(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const l={installation:{sdkVersion:Ba,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(l)},d=await Ka(()=>fetch(i,u));if(d.ok){const f=await d.json();return za(f)}else throw await Ha("Generate Auth Token",d)}function bf(n,{fid:t}){return`${qa(n)}/${t}/authTokens:generate`}/**
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
 */async function bi(n,t=!1){let e;const i=await ur(n.appConfig,o=>{if(!tl(o))throw ce.create("not-registered");const l=o.authToken;if(!t&&Cf(l))return o;if(l.requestStatus===1)return e=Pf(n,t),o;{if(!navigator.onLine)throw ce.create("app-offline");const u=Df(o);return e=Sf(n,u),u}});return e?await e:i.authToken}async function Pf(n,t){let e=await go(n.appConfig);for(;e.authToken.requestStatus===1;)await Wa(100),e=await go(n.appConfig);const i=e.authToken;return i.requestStatus===0?bi(n,t):i}function go(n){return ur(n,t=>{if(!tl(t))throw ce.create("not-registered");const e=t.authToken;return kf(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Sf(n,t){try{const e=await Rf(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await Yn(n.appConfig,i),e}catch(e){if($a(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Ja(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Yn(n.appConfig,i)}throw e}}function tl(n){return n!==void 0&&n.registrationStatus===2}function Cf(n){return n.requestStatus===2&&!Vf(n)}function Vf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+nf}function Df(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function kf(n){return n.requestStatus===1&&n.requestTime+Ua<Date.now()}/**
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
 */async function Nf(n){const t=n,{installationEntry:e,registrationPromise:i}=await Ri(t);return i?i.catch(console.error):bi(t).catch(console.error),e.fid}/**
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
 */async function Of(n,t=!1){const e=n;return await xf(e),(await bi(e,t)).token}async function xf(n){const{registrationPromise:t}=await Ri(n);t&&await t}/**
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
 */function Mf(n){if(!n||!n.options)throw qr("App Configuration");if(!n.name)throw qr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw qr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qr(n){return ce.create("missing-app-config-values",{valueName:n})}/**
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
 */const el="installations",Ff="installations-internal",Lf=n=>{const t=n.getProvider("app").getImmediate(),e=Mf(t),i=an(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Uf=n=>{const t=n.getProvider("app").getImmediate(),e=an(t,el).getImmediate();return{getId:()=>Nf(e),getToken:s=>Of(e,s)}};function Bf(){$t(new Nt(el,Lf,"PUBLIC")),$t(new Nt(Ff,Uf,"PRIVATE"))}Bf();bt(La,wi);bt(La,wi,"esm2017");/**
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
 */const Jn="analytics",jf="firebase_id",$f="origin",qf=60*1e3,zf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pi="https://www.googletagmanager.com/gtag/js";/**
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
 */const yt=new oi("@firebase/analytics");/**
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
 */const Hf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new Zn("analytics","Analytics",Hf);/**
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
 */function Gf(n){if(!n.startsWith(Pi)){const t=Tt.create("invalid-gtag-resource",{gtagURL:n});return yt.warn(t.message),""}return n}function nl(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Kf(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Wf(n,t){const e=Kf("firebase-js-sdk-policy",{createScriptURL:Gf}),i=document.createElement("script"),s=`${Pi}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Qf(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Xf(n,t,e,i,s,o){const l=i[s];try{if(l)await t[l];else{const d=(await nl(e)).find(f=>f.measurementId===s);d&&await t[d.appId]}}catch(u){yt.error(u)}n("config",s,o)}async function Yf(n,t,e,i,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const u=await nl(e);for(const d of l){const f=u.find(A=>A.measurementId===d),I=f&&t[f.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",i,s||{})}catch(o){yt.error(o)}}function Jf(n,t,e,i){async function s(o,...l){try{if(o==="event"){const[u,d]=l;await Yf(n,t,e,u,d)}else if(o==="config"){const[u,d]=l;await Xf(n,t,e,i,u,d)}else if(o==="consent"){const[u,d]=l;n("consent",u,d)}else if(o==="get"){const[u,d,f]=l;n("get",u,d,f)}else if(o==="set"){const[u]=l;n("set",u)}else n(o,...l)}catch(u){yt.error(u)}}return s}function Zf(n,t,e,i,s){let o=function(...l){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Jf(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function tp(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Pi)&&e.src.includes(n))return e;return null}/**
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
 */const ep=30,np=1e3;class rp{constructor(t={},e=np){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const rl=new rp;function ip(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function sp(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:ip(i)},o=zf.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let u="";try{const d=await l.json();!((t=d.error)===null||t===void 0)&&t.message&&(u=d.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function op(n,t=rl,e){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw Tt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw Tt.create("no-api-key")}const l=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new cp;return setTimeout(async()=>{u.abort()},qf),il({appId:i,apiKey:s,measurementId:o},l,u,t)}async function il(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=rl){var o;const{appId:l,measurementId:u}=n;try{await ap(i,t)}catch(d){if(u)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw d}try{const d=await sp(n);return s.deleteThrottleMetadata(l),d}catch(d){const f=d;if(!lp(f)){if(s.deleteThrottleMetadata(l),u)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw d}const I=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?ks(e,s.intervalMillis,ep):ks(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(l,A),yt.debug(`Calling attemptFetch again in ${I} millis`),il(n,A,i,s)}}function ap(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),i(Tt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function lp(n){if(!(n instanceof Gt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class cp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function up(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const o=await t,l=Object.assign(Object.assign({},i),{send_to:o});n("event",e,l)}}/**
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
 */async function hp(){if(Ro())try{await bo()}catch(n){return yt.warn(Tt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dp(n,t,e,i,s,o,l){var u;const d=op(n);d.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>yt.error(C)),t.push(d);const f=hp().then(C=>{if(C)return i.getId()}),[I,A]=await Promise.all([d,f]);tp(o)||Wf(o,I.measurementId),s("js",new Date);const P=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return P[$f]="firebase",P.update=!0,A!=null&&(P[jf]=A),s("config",I.measurementId,P),I.measurementId}/**
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
 */class fp{constructor(t){this.app=t}_delete(){return delete Je[this.app.options.appId],Promise.resolve()}}let Je={},mo=[];const _o={};let zr="dataLayer",pp="gtag",yo,sl,vo=!1;function gp(){const n=[];if(lc()&&n.push("This is a browser extension environment."),uc()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=Tt.create("invalid-analytics-context",{errorInfo:t});yt.warn(e.message)}}function mp(n,t,e){gp();const i=n.options.appId;if(!i)throw Tt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(Je[i]!=null)throw Tt.create("already-exists",{id:i});if(!vo){Qf(zr);const{wrappedGtag:o,gtagCore:l}=Zf(Je,mo,_o,zr,pp);sl=o,yo=l,vo=!0}return Je[i]=dp(n,mo,_o,t,yo,zr,e),new fp(n)}function _p(n=Do()){n=ie(n);const t=an(n,Jn);return t.isInitialized()?t.getImmediate():yp(n)}function yp(n,t={}){const e=an(n,Jn);if(e.isInitialized()){const s=e.getImmediate();if(Un(t,e.getOptions()))return s;throw Tt.create("already-initialized")}return e.initialize({options:t})}function vp(n,t,e,i){n=ie(n),up(sl,Je[n.app.options.appId],t,e,i).catch(s=>yt.error(s))}const Eo="@firebase/analytics",To="0.10.4";function Ep(){$t(new Nt(Jn,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return mp(i,s,e)},"PUBLIC")),$t(new Nt("analytics-internal",n,"PRIVATE")),bt(Eo,To),bt(Eo,To,"esm2017");function n(t){try{const e=t.getProvider(Jn).getImmediate();return{logEvent:(i,s,o)=>vp(e,i,s,o)}}catch(e){throw Tt.create("interop-component-reg-failed",{reason:e})}}}Ep();const Tp={apiKey:"AIzaSyC_-Q-X27unfJX9zKxaHlon3LIL8IVRU5A",authDomain:"roninmez-001.firebaseapp.com",projectId:"roninmez-001",storageBucket:"roninmez-001.appspot.com",messagingSenderId:"947987712112",appId:"1:947987712112:web:a0123aa15c2047fd9accb5",measurementId:"G-9PT72JDP8E"},ol=Vo(Tp);_p(ol);const Ip=jd(ol),wp="/assets/Contacto-form-CYgUxQ9q.jpg",Ap={data(){return{nombre:"",apellido:"",link:"",email:"",mensaje:"",error:null}},methods:{async handleSubmit(){if(this.error=null,!this.isValidEmail(this.email)){this.error="Por favor, ingrese un correo electrónico válido.";return}if(this.link&&!this.isValidURL(this.link)){this.error="Por favor, ingrese un enlace válido.";return}try{const n=Ld(Ip,"usuarios");await Zd(n,{nombre:this.nombre,apellido:this.apellido,link:this.link,email:this.email,mensaje:this.mensaje,createdAt:J.now()}),console.log("Formulario guardado"),this.nombre="",this.apellido="",this.link="",this.email="",this.mensaje=""}catch(n){console.error("Error al guardar el formulario:",n),this.error="Error al guardar. Inténtalo de nuevo."}},isValidEmail(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)},isValidURL(n){try{return new URL(n),!0}catch{return!1}}}},Kt=n=>(Hl("data-v-698c983c"),n=n(),Gl(),n),Rp={class:"flex flex-col lg:flex-row items-center"},bp=Kt(()=>B("div",{class:"lg:w-1/2"},[B("img",{class:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg",src:wp,alt:"Profesionales de Roninmez asesorando a un cliente sobre soluciones de desarrollo web, SEO y análisis de datos."})],-1)),Pp={class:"isolate bg-white px-6 py-8 sm:py-12 lg:px-8 lg:w-1/2"},Sp=Kt(()=>B("div",{class:"mx-auto max-w-lg text-center"},[B("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"¿Listo para hablar sobre tu próximo proyecto digital?"),B("p",{class:"mt-2 text-lg leading-8 text-gray-600"},"Déjanos tus datos y te contactaremos para ofrecerte una asesoría gratuita y personalizada sobre cómo podemos ayudarte a lograr tus objetivos digitales.")],-1)),Cp={key:0,class:"error"},Vp={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},Dp=Kt(()=>B("label",{for:"nombre",class:"block text-sm font-semibold leading-6 text-gray-900"},"Nombre:",-1)),kp={class:"mt-2.5"},Np=Kt(()=>B("label",{for:"apellido",class:"block text-sm font-semibold leading-6 text-gray-900"},"Apellido:",-1)),Op={class:"mt-2.5"},xp=Kt(()=>B("label",{for:"link",class:"block text-sm font-semibold leading-6 text-gray-900"},"Link:",-1)),Mp={class:"mt-2.5"},Fp=Kt(()=>B("label",{for:"email",class:"block text-sm font-semibold leading-6 text-gray-900"},"Email:",-1)),Lp={class:"mt-2.5"},Up={class:"sm:col-span-2"},Bp=Kt(()=>B("label",{for:"mensaje",class:"block text-sm font-semibold leading-6 text-gray-900"},"Mensaje:",-1)),jp={class:"mt-2.5"},$p=Kt(()=>B("div",{class:"mt-10"},[B("button",{type:"submit",class:"block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Enviar")],-1));function qp(n,t,e,i,s,o){return Ss(),Cs("div",Rp,[bp,B("div",Pp,[Sp,B("form",{onSubmit:t[5]||(t[5]=$l((...l)=>o.handleSubmit&&o.handleSubmit(...l),["prevent"])),class:"mx-auto mt-16 max-w-xl sm:mt-20 w-full"},[s.error?(Ss(),Cs("div",Cp,ql(s.error),1)):zl("v-if",!0),B("div",Vp,[B("div",null,[Dp,B("div",kp,[qe(B("input",{type:"text",id:"nombre","onUpdate:modelValue":t[0]||(t[0]=l=>s.nombre=l),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:""},null,512),[[ze,s.nombre]])])]),B("div",null,[Np,B("div",Op,[qe(B("input",{type:"text",id:"apellido","onUpdate:modelValue":t[1]||(t[1]=l=>s.apellido=l),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:""},null,512),[[ze,s.apellido]])])]),B("div",null,[xp,B("div",Mp,[qe(B("input",{type:"text",id:"link","onUpdate:modelValue":t[2]||(t[2]=l=>s.link=l),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[ze,s.link]])])]),B("div",null,[Fp,B("div",Lp,[qe(B("input",{type:"email",id:"email","onUpdate:modelValue":t[3]||(t[3]=l=>s.email=l),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:""},null,512),[[ze,s.email]])])]),B("div",Up,[Bp,B("div",jp,[qe(B("textarea",{id:"mensaje","onUpdate:modelValue":t[4]||(t[4]=l=>s.mensaje=l),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[ze,s.mensaje]])])])]),$p],32)])])}const Qp=Kl(Ap,[["render",qp],["__scopeId","data-v-698c983c"]]);export{Qp as F};
