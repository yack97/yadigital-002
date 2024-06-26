import{o as na,c as ra,b as Z,j as Ou,t as Mu,a as Nu,k as kr,v as xr,p as Lu,l as Fu}from"./index-C31rLSGI.js";import{_ as Bu}from"./Footer-CwAjqMjb.js";var ia={};/**
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
 */const Qa=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ju=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[e++];t[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[e++],u=n[e++],p=n[e++],g=((s&7)<<18|(a&63)<<12|(u&63)<<6|p&63)-65536;t[i++]=String.fromCharCode(55296+(g>>10)),t[i++]=String.fromCharCode(56320+(g&1023))}else{const a=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,p=u?n[s+1]:0,g=s+2<n.length,y=g?n[s+2]:0,P=a>>2,x=(a&3)<<4|p>>4;let O=(p&15)<<2|y>>6,L=y&63;g||(L=64,u||(O=64)),i.push(e[P],e[x],e[O],e[L])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ju(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=e[n.charAt(s++)],p=s<n.length?e[n.charAt(s)]:0;++s;const y=s<n.length?e[n.charAt(s)]:64;++s;const x=s<n.length?e[n.charAt(s)]:64;if(++s,a==null||p==null||y==null||x==null)throw new Uu;const O=a<<2|p>>4;if(i.push(O),y!==64){const L=p<<4&240|y>>2;if(i.push(L),x!==64){const B=y<<6&192|x;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $u=function(n){const t=Qa(n);return Xa.encodeByteArray(t,!0)},qi=function(n){return $u(n).replace(/\./g,"")},Hu=function(n){try{return Xa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zu=()=>qu().__FIREBASE_DEFAULTS__,Gu=()=>{if(typeof process>"u"||typeof ia>"u")return;const n=ia.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ku=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Hu(n[1]);return t&&JSON.parse(t)},lo=()=>{try{return zu()||Gu()||Ku()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wu=n=>{var t,e;return(e=(t=lo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Qu=n=>{const t=Wu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Ya=()=>{var n;return(n=lo())===null||n===void 0?void 0:n.config};/**
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
 */class Xu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Yu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qi(JSON.stringify(e)),qi(JSON.stringify(u)),""].join(".")}/**
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
 */function Ju(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zu(){var n;const t=(n=lo())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function th(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function eh(){return!Zu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ja(){try{return typeof indexedDB=="object"}catch{return!1}}function Za(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(e){t(e)}})}function nh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rh="FirebaseError";class an extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=rh,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?ih(a,i):"Error",p=`${this.serviceName}: ${u} (${s}).`;return new an(s,p,i)}}function ih(n,t){return n.replace(sh,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const sh=/\{\$([^}]+)}/g;function zi(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const a=n[s],u=t[s];if(sa(a)&&sa(u)){if(!zi(a,u))return!1}else if(a!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function sa(n){return n!==null&&typeof n=="object"}/**
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
 */const oh=1e3,ah=2,lh=4*60*60*1e3,ch=.5;function oa(n,t=oh,e=ah){const i=t*Math.pow(e,n),s=Math.round(ch*i*(Math.random()-.5)*2);return Math.min(lh,i+s)}/**
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
 */function Dn(n){return n&&n._delegate?n._delegate:n}class Me{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class uh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Xu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dh(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[a,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);i===p&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(t),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&t(u,s),()=>{a.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hh(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hh(n){return n===Sn?void 0:n}function dh(n){return n.instantiationMode==="EAGER"}/**
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
 */class fh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new uh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const ph={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},mh=J.INFO,gh={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},wh=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=gh[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class co{constructor(t){this.name=t,this._logLevel=mh,this._logHandler=wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ph[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const yh=(n,t)=>t.some(e=>n instanceof e);let aa,la;function vh(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _h(){return la||(la=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tl=new WeakMap,Ws=new WeakMap,el=new WeakMap,Fs=new WeakMap,uo=new WeakMap;function bh(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{e(Ze(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&tl.set(e,n)}).catch(()=>{}),uo.set(t,n),t}function Eh(n){if(Ws.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Ws.set(n,t)}let Qs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ws.get(n);if(t==="objectStoreNames")return n.objectStoreNames||el.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ze(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Th(n){Qs=n(Qs)}function Ih(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Bs(this),t,...e);return el.set(i,t.sort?t.sort():[t]),Ze(i)}:_h().includes(n)?function(...t){return n.apply(Bs(this),t),Ze(tl.get(this))}:function(...t){return Ze(n.apply(Bs(this),t))}}function Ah(n){return typeof n=="function"?Ih(n):(n instanceof IDBTransaction&&Eh(n),yh(n,vh())?new Proxy(n,Qs):n)}function Ze(n){if(n instanceof IDBRequest)return bh(n);if(Fs.has(n))return Fs.get(n);const t=Ah(n);return t!==n&&(Fs.set(n,t),uo.set(t,n)),t}const Bs=n=>uo.get(n);function nl(n,t,{blocked:e,upgrade:i,blocking:s,terminated:a}={}){const u=indexedDB.open(n,t),p=Ze(u);return i&&u.addEventListener("upgradeneeded",g=>{i(Ze(u.result),g.oldVersion,g.newVersion,Ze(u.transaction),g)}),e&&u.addEventListener("blocked",g=>e(g.oldVersion,g.newVersion,g)),p.then(g=>{a&&g.addEventListener("close",()=>a()),s&&g.addEventListener("versionchange",y=>s(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const Ch=["get","getKey","getAll","getAllKeys","count"],Ph=["put","add","delete","clear"],js=new Map;function ca(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(js.get(t))return js.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Ph.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ch.includes(e)))return;const a=async function(u,...p){const g=this.transaction(u,s?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(p.shift())),(await Promise.all([y[e](...p),s&&g.done]))[0]};return js.set(t,a),a}Th(n=>({...n,get:(t,e,i)=>ca(t,e)||n.get(t,e,i),has:(t,e)=>!!ca(t,e)||n.has(t,e)}));/**
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
 */class Sh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rh(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Rh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xs="@firebase/app",ua="0.10.5";/**
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
 */const On=new co("@firebase/app"),kh="@firebase/app-compat",xh="@firebase/analytics-compat",Vh="@firebase/analytics",Dh="@firebase/app-check-compat",Oh="@firebase/app-check",Mh="@firebase/auth",Nh="@firebase/auth-compat",Lh="@firebase/database",Fh="@firebase/database-compat",Bh="@firebase/functions",jh="@firebase/functions-compat",Uh="@firebase/installations",$h="@firebase/installations-compat",Hh="@firebase/messaging",qh="@firebase/messaging-compat",zh="@firebase/performance",Gh="@firebase/performance-compat",Kh="@firebase/remote-config",Wh="@firebase/remote-config-compat",Qh="@firebase/storage",Xh="@firebase/storage-compat",Yh="@firebase/firestore",Jh="@firebase/vertexai-preview",Zh="@firebase/firestore-compat",td="firebase",ed="10.12.2";/**
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
 */const Ys="[DEFAULT]",nd={[Xs]:"fire-core",[kh]:"fire-core-compat",[Vh]:"fire-analytics",[xh]:"fire-analytics-compat",[Oh]:"fire-app-check",[Dh]:"fire-app-check-compat",[Mh]:"fire-auth",[Nh]:"fire-auth-compat",[Lh]:"fire-rtdb",[Fh]:"fire-rtdb-compat",[Bh]:"fire-fn",[jh]:"fire-fn-compat",[Uh]:"fire-iid",[$h]:"fire-iid-compat",[Hh]:"fire-fcm",[qh]:"fire-fcm-compat",[zh]:"fire-perf",[Gh]:"fire-perf-compat",[Kh]:"fire-rc",[Wh]:"fire-rc-compat",[Qh]:"fire-gcs",[Xh]:"fire-gcs-compat",[Yh]:"fire-fst",[Zh]:"fire-fst-compat",[Jh]:"fire-vertex","fire-js":"fire-js",[td]:"fire-js-all"};/**
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
 */const Gi=new Map,rd=new Map,Js=new Map;function ha(n,t){try{n.container.addComponent(t)}catch(e){On.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function nn(n){const t=n.name;if(Js.has(t))return On.debug(`There were multiple attempts to register component ${t}.`),!1;Js.set(t,n);for(const e of Gi.values())ha(e,n);for(const e of rd.values())ha(e,n);return!0}function Kr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const id={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new ss("app","Firebase",id);/**
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
 */class sd{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const od=ed;function rl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(e||(e=Ya()),!e)throw tn.create("no-options");const a=Gi.get(s);if(a){if(zi(e,a.options)&&zi(i,a.config))return a;throw tn.create("duplicate-app",{appName:s})}const u=new fh(s);for(const g of Js.values())u.addComponent(g);const p=new sd(e,i,u);return Gi.set(s,p),p}function il(n=Ys){const t=Gi.get(n);if(!t&&n===Ys&&Ya())return rl();if(!t)throw tn.create("no-app",{appName:n});return t}function we(n,t,e){var i;let s=(i=nd[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const a=s.match(/\s|\//),u=t.match(/\s|\//);if(a||u){const p=[`Unable to register library "${s}" with version "${t}":`];a&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&p.push("and"),u&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),On.warn(p.join(" "));return}nn(new Me(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ad="firebase-heartbeat-database",ld=1,jr="firebase-heartbeat-store";let Us=null;function sl(){return Us||(Us=nl(ad,ld,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(jr)}catch(e){console.warn(e)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),Us}async function cd(n){try{const e=(await sl()).transaction(jr),i=await e.objectStore(jr).get(ol(n));return await e.done,i}catch(t){if(t instanceof an)On.warn(t.message);else{const e=tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});On.warn(e.message)}}}async function da(n,t){try{const i=(await sl()).transaction(jr,"readwrite");await i.objectStore(jr).put(t,ol(n)),await i.done}catch(e){if(e instanceof an)On.warn(e.message);else{const i=tn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});On.warn(i.message)}}}function ol(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ud=1024,hd=30*24*60*60*1e3;class dd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new pd(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=fa();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const p=new Date(u.date).valueOf();return Date.now()-p<=hd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fa(),{heartbeatsToSend:i,unsentEntries:s}=fd(this._heartbeatsCache.heartbeats),a=qi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function fa(){return new Date().toISOString().substring(0,10)}function fd(n,t=ud){const e=[];let i=n.slice();for(const s of n){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),pa(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),pa(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class pd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ja()?Za().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await cd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function pa(n){return qi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function md(n){nn(new Me("platform-logger",t=>new Sh(t),"PRIVATE")),nn(new Me("heartbeat",t=>new dd(t),"PRIVATE")),we(Xs,ua,n),we(Xs,ua,"esm2017"),we("fire-js","")}md("");var gd="firebase",wd="10.12.2";/**
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
 */we(gd,wd,"app");var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var al;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,v){function b(){}b.prototype=v.prototype,I.D=v.prototype,I.prototype=new b,I.prototype.constructor=I,I.C=function(E,T,C){for(var _=Array(arguments.length-2),te=2;te<arguments.length;te++)_[te-2]=arguments[te];return v.prototype[T].apply(E,_)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,b){b||(b=0);var E=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)E[T]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(T=0;16>T;++T)E[T]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=I.g[0],b=I.g[1],T=I.g[2];var C=I.g[3],_=v+(C^b&(T^C))+E[0]+3614090360&4294967295;v=b+(_<<7&4294967295|_>>>25),_=C+(T^v&(b^T))+E[1]+3905402710&4294967295,C=v+(_<<12&4294967295|_>>>20),_=T+(b^C&(v^b))+E[2]+606105819&4294967295,T=C+(_<<17&4294967295|_>>>15),_=b+(v^T&(C^v))+E[3]+3250441966&4294967295,b=T+(_<<22&4294967295|_>>>10),_=v+(C^b&(T^C))+E[4]+4118548399&4294967295,v=b+(_<<7&4294967295|_>>>25),_=C+(T^v&(b^T))+E[5]+1200080426&4294967295,C=v+(_<<12&4294967295|_>>>20),_=T+(b^C&(v^b))+E[6]+2821735955&4294967295,T=C+(_<<17&4294967295|_>>>15),_=b+(v^T&(C^v))+E[7]+4249261313&4294967295,b=T+(_<<22&4294967295|_>>>10),_=v+(C^b&(T^C))+E[8]+1770035416&4294967295,v=b+(_<<7&4294967295|_>>>25),_=C+(T^v&(b^T))+E[9]+2336552879&4294967295,C=v+(_<<12&4294967295|_>>>20),_=T+(b^C&(v^b))+E[10]+4294925233&4294967295,T=C+(_<<17&4294967295|_>>>15),_=b+(v^T&(C^v))+E[11]+2304563134&4294967295,b=T+(_<<22&4294967295|_>>>10),_=v+(C^b&(T^C))+E[12]+1804603682&4294967295,v=b+(_<<7&4294967295|_>>>25),_=C+(T^v&(b^T))+E[13]+4254626195&4294967295,C=v+(_<<12&4294967295|_>>>20),_=T+(b^C&(v^b))+E[14]+2792965006&4294967295,T=C+(_<<17&4294967295|_>>>15),_=b+(v^T&(C^v))+E[15]+1236535329&4294967295,b=T+(_<<22&4294967295|_>>>10),_=v+(T^C&(b^T))+E[1]+4129170786&4294967295,v=b+(_<<5&4294967295|_>>>27),_=C+(b^T&(v^b))+E[6]+3225465664&4294967295,C=v+(_<<9&4294967295|_>>>23),_=T+(v^b&(C^v))+E[11]+643717713&4294967295,T=C+(_<<14&4294967295|_>>>18),_=b+(C^v&(T^C))+E[0]+3921069994&4294967295,b=T+(_<<20&4294967295|_>>>12),_=v+(T^C&(b^T))+E[5]+3593408605&4294967295,v=b+(_<<5&4294967295|_>>>27),_=C+(b^T&(v^b))+E[10]+38016083&4294967295,C=v+(_<<9&4294967295|_>>>23),_=T+(v^b&(C^v))+E[15]+3634488961&4294967295,T=C+(_<<14&4294967295|_>>>18),_=b+(C^v&(T^C))+E[4]+3889429448&4294967295,b=T+(_<<20&4294967295|_>>>12),_=v+(T^C&(b^T))+E[9]+568446438&4294967295,v=b+(_<<5&4294967295|_>>>27),_=C+(b^T&(v^b))+E[14]+3275163606&4294967295,C=v+(_<<9&4294967295|_>>>23),_=T+(v^b&(C^v))+E[3]+4107603335&4294967295,T=C+(_<<14&4294967295|_>>>18),_=b+(C^v&(T^C))+E[8]+1163531501&4294967295,b=T+(_<<20&4294967295|_>>>12),_=v+(T^C&(b^T))+E[13]+2850285829&4294967295,v=b+(_<<5&4294967295|_>>>27),_=C+(b^T&(v^b))+E[2]+4243563512&4294967295,C=v+(_<<9&4294967295|_>>>23),_=T+(v^b&(C^v))+E[7]+1735328473&4294967295,T=C+(_<<14&4294967295|_>>>18),_=b+(C^v&(T^C))+E[12]+2368359562&4294967295,b=T+(_<<20&4294967295|_>>>12),_=v+(b^T^C)+E[5]+4294588738&4294967295,v=b+(_<<4&4294967295|_>>>28),_=C+(v^b^T)+E[8]+2272392833&4294967295,C=v+(_<<11&4294967295|_>>>21),_=T+(C^v^b)+E[11]+1839030562&4294967295,T=C+(_<<16&4294967295|_>>>16),_=b+(T^C^v)+E[14]+4259657740&4294967295,b=T+(_<<23&4294967295|_>>>9),_=v+(b^T^C)+E[1]+2763975236&4294967295,v=b+(_<<4&4294967295|_>>>28),_=C+(v^b^T)+E[4]+1272893353&4294967295,C=v+(_<<11&4294967295|_>>>21),_=T+(C^v^b)+E[7]+4139469664&4294967295,T=C+(_<<16&4294967295|_>>>16),_=b+(T^C^v)+E[10]+3200236656&4294967295,b=T+(_<<23&4294967295|_>>>9),_=v+(b^T^C)+E[13]+681279174&4294967295,v=b+(_<<4&4294967295|_>>>28),_=C+(v^b^T)+E[0]+3936430074&4294967295,C=v+(_<<11&4294967295|_>>>21),_=T+(C^v^b)+E[3]+3572445317&4294967295,T=C+(_<<16&4294967295|_>>>16),_=b+(T^C^v)+E[6]+76029189&4294967295,b=T+(_<<23&4294967295|_>>>9),_=v+(b^T^C)+E[9]+3654602809&4294967295,v=b+(_<<4&4294967295|_>>>28),_=C+(v^b^T)+E[12]+3873151461&4294967295,C=v+(_<<11&4294967295|_>>>21),_=T+(C^v^b)+E[15]+530742520&4294967295,T=C+(_<<16&4294967295|_>>>16),_=b+(T^C^v)+E[2]+3299628645&4294967295,b=T+(_<<23&4294967295|_>>>9),_=v+(T^(b|~C))+E[0]+4096336452&4294967295,v=b+(_<<6&4294967295|_>>>26),_=C+(b^(v|~T))+E[7]+1126891415&4294967295,C=v+(_<<10&4294967295|_>>>22),_=T+(v^(C|~b))+E[14]+2878612391&4294967295,T=C+(_<<15&4294967295|_>>>17),_=b+(C^(T|~v))+E[5]+4237533241&4294967295,b=T+(_<<21&4294967295|_>>>11),_=v+(T^(b|~C))+E[12]+1700485571&4294967295,v=b+(_<<6&4294967295|_>>>26),_=C+(b^(v|~T))+E[3]+2399980690&4294967295,C=v+(_<<10&4294967295|_>>>22),_=T+(v^(C|~b))+E[10]+4293915773&4294967295,T=C+(_<<15&4294967295|_>>>17),_=b+(C^(T|~v))+E[1]+2240044497&4294967295,b=T+(_<<21&4294967295|_>>>11),_=v+(T^(b|~C))+E[8]+1873313359&4294967295,v=b+(_<<6&4294967295|_>>>26),_=C+(b^(v|~T))+E[15]+4264355552&4294967295,C=v+(_<<10&4294967295|_>>>22),_=T+(v^(C|~b))+E[6]+2734768916&4294967295,T=C+(_<<15&4294967295|_>>>17),_=b+(C^(T|~v))+E[13]+1309151649&4294967295,b=T+(_<<21&4294967295|_>>>11),_=v+(T^(b|~C))+E[4]+4149444226&4294967295,v=b+(_<<6&4294967295|_>>>26),_=C+(b^(v|~T))+E[11]+3174756917&4294967295,C=v+(_<<10&4294967295|_>>>22),_=T+(v^(C|~b))+E[2]+718787259&4294967295,T=C+(_<<15&4294967295|_>>>17),_=b+(C^(T|~v))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+C&4294967295}i.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var b=v-this.blockSize,E=this.B,T=this.h,C=0;C<v;){if(T==0)for(;C<=b;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<v;)if(E[T++]=I.charCodeAt(C++),T==this.blockSize){s(this,E),T=0;break}}else for(;C<v;)if(E[T++]=I[C++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=v},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var b=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=b&255,b/=256;for(this.u(I),I=Array(16),v=b=0;4>v;++v)for(var E=0;32>E;E+=8)I[b++]=this.g[v]>>>E&255;return I};function a(I,v){var b=p;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=v(I)}function u(I,v){this.h=v;for(var b=[],E=!0,T=I.length-1;0<=T;T--){var C=I[T]|0;E&&C==v||(b[T]=C,E=!1)}this.g=b}var p={};function g(I){return-128<=I&&128>I?a(I,function(v){return new u([v|0],0>v?-1:0)}):new u([I|0],0>I?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return x;if(0>I)return j(y(-I));for(var v=[],b=1,E=0;I>=b;E++)v[E]=I/b|0,b*=4294967296;return new u(v,0)}function P(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return j(P(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=y(Math.pow(v,8)),E=x,T=0;T<I.length;T+=8){var C=Math.min(8,I.length-T),_=parseInt(I.substring(T,T+C),v);8>C?(C=y(Math.pow(v,C)),E=E.j(C).add(y(_))):(E=E.j(b),E=E.add(y(_)))}return E}var x=g(0),O=g(1),L=g(16777216);n=u.prototype,n.m=function(){if(H(this))return-j(this).m();for(var I=0,v=1,b=0;b<this.g.length;b++){var E=this.i(b);I+=(0<=E?E:4294967296+E)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(B(this))return"0";if(H(this))return"-"+j(this).toString(I);for(var v=y(Math.pow(I,6)),b=this,E="";;){var T=Tt(b,v).g;b=tt(b,T.j(v));var C=((0<b.g.length?b.g[0]:b.h)>>>0).toString(I);if(b=T,B(b))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function B(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function H(I){return I.h==-1}n.l=function(I){return I=tt(this,I),H(I)?-1:B(I)?0:1};function j(I){for(var v=I.g.length,b=[],E=0;E<v;E++)b[E]=~I.g[E];return new u(b,~I.h).add(O)}n.abs=function(){return H(this)?j(this):this},n.add=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],E=0,T=0;T<=v;T++){var C=E+(this.i(T)&65535)+(I.i(T)&65535),_=(C>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=_>>>16,C&=65535,_&=65535,b[T]=_<<16|C}return new u(b,b[b.length-1]&-2147483648?-1:0)};function tt(I,v){return I.add(j(v))}n.j=function(I){if(B(this)||B(I))return x;if(H(this))return H(I)?j(this).j(j(I)):j(j(this).j(I));if(H(I))return j(this.j(j(I)));if(0>this.l(L)&&0>I.l(L))return y(this.m()*I.m());for(var v=this.g.length+I.g.length,b=[],E=0;E<2*v;E++)b[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var C=this.i(E)>>>16,_=this.i(E)&65535,te=I.i(T)>>>16,dt=I.i(T)&65535;b[2*E+2*T]+=_*dt,at(b,2*E+2*T),b[2*E+2*T+1]+=C*dt,at(b,2*E+2*T+1),b[2*E+2*T+1]+=_*te,at(b,2*E+2*T+1),b[2*E+2*T+2]+=C*te,at(b,2*E+2*T+2)}for(E=0;E<v;E++)b[E]=b[2*E+1]<<16|b[2*E];for(E=v;E<2*v;E++)b[E]=0;return new u(b,0)};function at(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function lt(I,v){this.g=I,this.h=v}function Tt(I,v){if(B(v))throw Error("division by zero");if(B(I))return new lt(x,x);if(H(I))return v=Tt(j(I),v),new lt(j(v.g),j(v.h));if(H(v))return v=Tt(I,j(v)),new lt(j(v.g),v.h);if(30<I.g.length){if(H(I)||H(v))throw Error("slowDivide_ only works with positive integers.");for(var b=O,E=v;0>=E.l(I);)b=ve(b),E=ve(E);var T=Dt(b,1),C=Dt(E,1);for(E=Dt(E,2),b=Dt(b,2);!B(E);){var _=C.add(E);0>=_.l(I)&&(T=T.add(b),C=_),E=Dt(E,1),b=Dt(b,1)}return v=tt(I,T.j(v)),new lt(T,v)}for(T=x;0<=I.l(v);){for(b=Math.max(1,Math.floor(I.m()/v.m())),E=Math.ceil(Math.log(b)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=y(b),_=C.j(v);H(_)||0<_.l(I);)b-=E,C=y(b),_=C.j(v);B(C)&&(C=O),T=T.add(C),I=tt(I,_)}return new lt(T,I)}n.A=function(I){return Tt(this,I).h},n.and=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],E=0;E<v;E++)b[E]=this.i(E)&I.i(E);return new u(b,this.h&I.h)},n.or=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],E=0;E<v;E++)b[E]=this.i(E)|I.i(E);return new u(b,this.h|I.h)},n.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],E=0;E<v;E++)b[E]=this.i(E)^I.i(E);return new u(b,this.h^I.h)};function ve(I){for(var v=I.g.length+1,b=[],E=0;E<v;E++)b[E]=I.i(E)<<1|I.i(E-1)>>>31;return new u(b,I.h)}function Dt(I,v){var b=v>>5;v%=32;for(var E=I.g.length-b,T=[],C=0;C<E;C++)T[C]=0<v?I.i(C+b)>>>v|I.i(C+b+1)<<32-v:I.i(C+b);return new u(T,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=y,u.fromString=P,al=u}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ll,cl,Or,ul,Ui,Zs,hl,dl,fl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,h){return r==Array.prototype||r==Object.prototype||(r[c]=h.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var c=0;c<r.length;++c){var h=r[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=e(this);function s(r,c){if(c)t:{var h=i;r=r.split(".");for(var m=0;m<r.length-1;m++){var A=r[m];if(!(A in h))break t;h=h[A]}r=r[r.length-1],m=h[r],c=c(m),c!=m&&c!=null&&t(h,r,{configurable:!0,writable:!0,value:c})}}function a(r,c){r instanceof String&&(r+="");var h=0,m=!1,A={next:function(){if(!m&&h<r.length){var R=h++;return{value:c(R,r[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(r){return r||function(){return a(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},p=this||self;function g(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function y(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function P(r,c,h){return r.call.apply(r.bind,arguments)}function x(r,c,h){if(!r)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),r.apply(c,A)}}return function(){return r.apply(c,arguments)}}function O(r,c,h){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P:x,O.apply(null,arguments)}function L(r,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),r.apply(this,m)}}function B(r,c){function h(){}h.prototype=c.prototype,r.aa=c.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(m,A,R){for(var M=Array(arguments.length-2),et=2;et<arguments.length;et++)M[et-2]=arguments[et];return c.prototype[A].apply(m,M)}}function H(r){const c=r.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=r[m];return h}return[]}function j(r,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(g(m)){const A=r.length||0,R=m.length||0;r.length=A+R;for(let M=0;M<R;M++)r[A+M]=m[M]}else r.push(m)}}class tt{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function at(r){return/^[\s\xa0]*$/.test(r)}function lt(){var r=p.navigator;return r&&(r=r.userAgent)?r:""}function Tt(r){return Tt[" "](r),r}Tt[" "]=function(){};var ve=lt().indexOf("Gecko")!=-1&&!(lt().toLowerCase().indexOf("webkit")!=-1&&lt().indexOf("Edge")==-1)&&!(lt().indexOf("Trident")!=-1||lt().indexOf("MSIE")!=-1)&&lt().indexOf("Edge")==-1;function Dt(r,c,h){for(const m in r)c.call(h,r[m],m,r)}function I(r,c){for(const h in r)c.call(void 0,r[h],h,r)}function v(r){const c={};for(const h in r)c[h]=r[h];return c}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,c){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)r[h]=m[h];for(let R=0;R<b.length;R++)h=b[R],Object.prototype.hasOwnProperty.call(m,h)&&(r[h]=m[h])}}function T(r){var c=1;r=r.split(":");const h=[];for(;0<c&&r.length;)h.push(r.shift()),c--;return r.length&&h.push(r.join(":")),h}function C(r){p.setTimeout(()=>{throw r},0)}function _(){var r=hr;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class te{constructor(){this.h=this.g=null}add(c,h){const m=dt.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var dt=new tt(()=>new Jr,r=>r.reset());class Jr{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let cn,$=!1,hr=new te,Zr=()=>{const r=p.Promise.resolve(void 0);cn=()=>{r.then(ti)}};var ti=()=>{for(var r;r=_();){try{r.h.call(r.g)}catch(h){C(h)}var c=dt;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var ws=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};p.addEventListener("test",h,c),p.removeEventListener("test",h,c)}catch{}return r}();function ue(r,c){if(S.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,m=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(ve){t:{try{Tt(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=r.fromElement:h=="mouseout"&&(c=r.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ei[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&ue.aa.h.call(this)}}B(ue,S);var ei={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Ot=0;function _e(r,c,h,m,A){this.listener=r,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=A,this.key=++Ot,this.da=this.fa=!1}function un(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Un(r){this.src=r,this.g={},this.h=0}Un.prototype.add=function(r,c,h,m,A){var R=r.toString();r=this.g[R],r||(r=this.g[R]=[],this.h++);var M=Fe(r,c,m,A);return-1<M?(c=r[M],h||(c.fa=!1)):(c=new _e(c,this.src,R,!!m,A),c.fa=h,r.push(c)),c};function dr(r,c){var h=c.type;if(h in r.g){var m=r.g[h],A=Array.prototype.indexOf.call(m,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(m,A,1),R&&(un(c),r.g[h].length==0&&(delete r.g[h],r.h--))}}function Fe(r,c,h,m){for(var A=0;A<r.length;++A){var R=r[A];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==m)return A}return-1}var hn="closure_lm_"+(1e6*Math.random()|0),be={};function $n(r,c,h,m,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)$n(r,c[R],h,m,A);return null}return h=fr(h),r&&r[Le]?r.K(c,h,y(m)?!!m.capture:!!m,A):Mt(r,c,h,!1,m,A)}function Mt(r,c,h,m,A,R){if(!c)throw Error("Invalid event type");var M=y(A)?!!A.capture:!!A,et=Hn(r);if(et||(r[hn]=et=new Un(r)),h=et.add(c,h,m,M,R),h.proxy)return h;if(m=dn(),h.proxy=m,m.src=r,m.listener=h,r.addEventListener)ws||(A=M),A===void 0&&(A=!1),r.addEventListener(c.toString(),m,A);else if(r.attachEvent)r.attachEvent(Be(c.toString()),m);else if(r.addListener&&r.removeListener)r.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function dn(){function r(h){return c.call(r.src,r.listener,h)}const c=ys;return r}function Nt(r,c,h,m,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)Nt(r,c[R],h,m,A);else m=y(m)?!!m.capture:!!m,h=fr(h),r&&r[Le]?(r=r.i,c=String(c).toString(),c in r.g&&(R=r.g[c],h=Fe(R,h,m,A),-1<h&&(un(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete r.g[c],r.h--)))):r&&(r=Hn(r))&&(c=r.g[c.toString()],r=-1,c&&(r=Fe(c,h,m,A)),(h=-1<r?c[r]:null)&&Y(h))}function Y(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[Le])dr(c.i,r);else{var h=r.type,m=r.proxy;c.removeEventListener?c.removeEventListener(h,m,r.capture):c.detachEvent?c.detachEvent(Be(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Hn(c))?(dr(h,r),h.h==0&&(h.src=null,c[hn]=null)):un(r)}}}function Be(r){return r in be?be[r]:be[r]="on"+r}function ys(r,c){if(r.da)r=!0;else{c=new ue(c,this);var h=r.listener,m=r.ha||r.src;r.fa&&Y(r),r=h.call(m,c)}return r}function Hn(r){return r=r[hn],r instanceof Un?r:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function fr(r){return typeof r=="function"?r:(r[fn]||(r[fn]=function(c){return r.handleEvent(c)}),r[fn])}function wt(){ce.call(this),this.i=new Un(this),this.M=this,this.F=null}B(wt,ce),wt.prototype[Le]=!0,wt.prototype.removeEventListener=function(r,c,h,m){Nt(this,r,c,h,m)};function yt(r,c){var h,m=r.F;if(m)for(h=[];m;m=m.F)h.push(m);if(r=r.M,m=c.type||c,typeof c=="string")c=new S(c,r);else if(c instanceof S)c.target=c.target||r;else{var A=c;c=new S(m,r),E(c,A)}if(A=!0,h)for(var R=h.length-1;0<=R;R--){var M=c.g=h[R];A=Ut(M,m,!0,c)&&A}if(M=c.g=r,A=Ut(M,m,!0,c)&&A,A=Ut(M,m,!1,c)&&A,h)for(R=0;R<h.length;R++)M=c.g=h[R],A=Ut(M,m,!1,c)&&A}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var h=r.g[c],m=0;m<h.length;m++)un(h[m]);delete r.g[c],r.h--}}this.F=null},wt.prototype.K=function(r,c,h,m){return this.i.add(String(r),c,!1,h,m)},wt.prototype.L=function(r,c,h,m){return this.i.add(String(r),c,!0,h,m)};function Ut(r,c,h,m){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var M=c[R];if(M&&!M.da&&M.capture==h){var et=M.listener,_t=M.ha||M.src;M.fa&&dr(r.i,M),A=et.call(_t,m)!==!1&&A}}return A&&!m.defaultPrevented}function Ee(r,c,h){if(typeof r=="function")h&&(r=O(r,h));else if(r&&typeof r.handleEvent=="function")r=O(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:p.setTimeout(r,c||0)}function he(r){r.g=Ee(()=>{r.g=null,r.i&&(r.i=!1,he(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class vs extends ce{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:he(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(r){ce.call(this),this.h=r,this.g={}}B(Yt,ce);var je=[];function pr(r){Dt(r.g,function(c,h){this.g.hasOwnProperty(h)&&Y(c)},r),r.g={}}Yt.prototype.N=function(){Yt.aa.N.call(this),pr(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ue=p.JSON.stringify,mr=p.JSON.parse,_s=class{stringify(r){return p.JSON.stringify(r,void 0)}parse(r){return p.JSON.parse(r,void 0)}};function pn(){}pn.prototype.h=null;function qn(r){return r.h||(r.h=r.i())}function mn(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rt(){S.call(this,"d")}B(Rt,S);function Wt(){S.call(this,"c")}B(Wt,S);var Te={},$t=null;function Ie(){return $t=$t||new wt}Te.La="serverreachability";function gr(r){S.call(this,Te.La,r)}B(gr,S);function $e(r){const c=Ie();yt(c,new gr(c))}Te.STAT_EVENT="statevent";function G(r,c){S.call(this,Te.STAT_EVENT,r),this.stat=c}B(G,S);function st(r){const c=Ie();yt(c,new G(c,r))}Te.Ma="timingevent";function ee(r,c){S.call(this,Te.Ma,r),this.size=c}B(ee,S);function Qt(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){r()},c)}function ht(){this.g=!0}ht.prototype.xa=function(){this.g=!1};function It(r,c,h,m,A,R){r.info(function(){if(r.g)if(R)for(var M="",et=R.split("&"),_t=0;_t<et.length;_t++){var Q=et[_t].split("=");if(1<Q.length){var bt=Q[0];Q=Q[1];var At=bt.split("_");M=2<=At.length&&At[1]=="type"?M+(bt+"="+Q+"&"):M+(bt+"=redacted&")}}else M=null;else M=R;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+c+`
`+h+`
`+M})}function wr(r,c,h,m,A,R,M){r.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+c+`
`+h+`
`+R+" "+M})}function Ae(r,c,h,m){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ht(r,h)+(m?" "+m:"")})}function wn(r,c){r.info(function(){return"TIMEOUT: "+c})}ht.prototype.info=function(){};function Ht(r,c){if(!r.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var m=h[r];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var M=1;M<A.length;M++)A[M]=""}}}}return Ue(h)}catch{return c}}var zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gn;function He(){}B(He,pn),He.prototype.g=function(){return new XMLHttpRequest},He.prototype.i=function(){return{}},Gn=new He;function de(r,c,h,m){this.j=r,this.i=c,this.l=h,this.R=m||1,this.U=new Yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vr}function vr(){this.i=null,this.g="",this.h=!1}var ni={},_r={};function ne(r,c,h){r.L=1,r.v=Se(ie(c)),r.m=h,r.P=!0,ri(r,null)}function ri(r,c){r.F=Date.now(),Kn(r),r.A=ie(r.v);var h=r.A,m=r.R;Array.isArray(m)||(m=[String(m)]),mi(h.i,"t",m),r.C=0,h=r.j.J,r.h=new vr,r.g=Ve(r.j,h?c:null,!r.m),0<r.O&&(r.M=new vs(O(r.Y,r,r.g),r.O)),c=r.U,h=r.g,m=r.ca;var A="readystatechange";Array.isArray(A)||(A&&(je[0]=A.toString()),A=je);for(var R=0;R<A.length;R++){var M=$n(h,A[R],m||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=r.H?v(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),$e(),It(r.i,r.u,r.A,r.l,r.R,r.m)}de.prototype.ca=function(r){r=r.target;const c=this.M;c&&se(r)==3?c.j():this.Y(r)},de.prototype.Y=function(r){try{if(r==this.g)t:{const At=se(this.g);var c=this.g.Ba();const me=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Ir(this.g)))){this.J||At!=4||c==7||(c==8||0>=me?$e(3):$e(2)),yn(this);var h=this.g.Z();this.X=h;e:if(ii(this)){var m=Ir(this.g);r="";var A=m.length,R=se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),vn(this);var M="";break e}this.h.i=new p.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,r+=this.h.i.decode(m[c],{stream:!(R&&c==A-1)});m.length=0,this.h.g+=r,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,wr(this.i,this.u,this.A,this.l,this.R,At,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,_t=this.g;if((et=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!at(et)){var Q=et;break e}}Q=null}if(h=Q)Ae(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,re(this,h);else{this.o=!1,this.s=3,st(12),Ce(this),vn(this);break t}}if(this.P){h=!0;let zt;for(;!this.J&&this.C<M.length;)if(zt=bs(this,M),zt==_r){At==4&&(this.s=4,st(14),h=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==ni){this.s=4,st(15),Ae(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Ae(this.i,this.l,zt,null),re(this,zt);if(ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||M.length!=0||this.h.h||(this.s=1,st(16),h=!1),this.o=this.o&&h,!h)Ae(this.i,this.l,M,"[Invalid Chunked Response]"),Ce(this),vn(this);else if(0<M.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Zt(bt),bt.M=!0,st(11))}}else Ae(this.i,this.l,M,null),re(this,M);At==4&&Ce(this),this.o&&!this.J&&(At==4?Xe(this.j,this):(this.o=!1,Kn(this)))}else Ei(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Ce(this),vn(this)}}}catch{}finally{}};function ii(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function bs(r,c){var h=r.C,m=c.indexOf(`
`,h);return m==-1?_r:(h=Number(c.substring(h,m)),isNaN(h)?ni:(m+=1,m+h>c.length?_r:(c=c.slice(m,m+h),r.C=m+h,c)))}de.prototype.cancel=function(){this.J=!0,Ce(this)};function Kn(r){r.S=Date.now()+r.I,si(r,r.I)}function si(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Qt(O(r.ba,r),c)}function yn(r){r.B&&(p.clearTimeout(r.B),r.B=null)}de.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(wn(this.i,this.A),this.L!=2&&($e(),st(17)),Ce(this),this.s=2,vn(this)):si(this,this.S-r)};function vn(r){r.j.G==0||r.J||Xe(r.j,r)}function Ce(r){yn(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,pr(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function re(r,c){try{var h=r.j;if(h.G!=0&&(h.g==r||br(h.h,r))){if(!r.K&&br(h.h,r)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)In(h),Jn(h);else break t;Pr(h),st(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Qt(O(h.Za,h),6e3));if(1>=Wn(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else xe(h,11)}else if((r.K||h.g==r)&&In(h),!at(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let Q=A[c];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const bt=Q[3];bt!=null&&(h.la=bt,h.j.info("VER="+h.la));const At=Q[4];At!=null&&(h.Aa=At,h.j.info("SVER="+h.Aa));const me=Q[5];me!=null&&typeof me=="number"&&0<me&&(m=1.5*me,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const zt=r.g;if(zt){const An=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var R=m.h;R.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Er(R,R.h),R.h=null))}if(m.D){const Cn=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Cn&&(m.ya=Cn,rt(m.I,m.D,Cn))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var M=r;if(m.qa=Sr(m,m.J?m.ia:null,m.W),M.K){li(m.h,M);var et=M,_t=m.L;_t&&(et.I=_t),et.B&&(yn(et),Kn(et)),m.g=M}else Cr(m);0<h.i.length&&Zn(h)}else Q[0]!="stop"&&Q[0]!="close"||xe(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?xe(h,7):Ar(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}$e(4)}catch{}}var Es=class{constructor(r,c){this.g=r,this.map=c}};function oi(r){this.l=r||10,p.PerformanceNavigationTiming?(r=p.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ai(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Wn(r){return r.h?1:r.g?r.g.size:0}function br(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Er(r,c){r.g?r.g.add(c):r.h=c}function li(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}oi.prototype.cancel=function(){if(this.i=ci(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ci(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const h of r.g.values())c=c.concat(h.D);return c}return H(r.i)}function Ts(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(g(r)){for(var c=[],h=r.length,m=0;m<h;m++)c.push(r[m]);return c}c=[],h=0;for(m in r)c[h++]=r[m];return c}function nt(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(g(r)||typeof r=="string"){var c=[];r=r.length;for(var h=0;h<r;h++)c.push(h);return c}c=[],h=0;for(const m in r)c[h++]=m;return c}}}function ui(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(g(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var h=nt(r),m=Ts(r),A=m.length,R=0;R<A;R++)c.call(void 0,m[R],h&&h[R],r)}var hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Is(r,c){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var m=r[h].indexOf("="),A=null;if(0<=m){var R=r[h].substring(0,m);A=r[h].substring(m+1)}else R=r[h];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Pe(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Pe){this.h=r.h,Qn(this,r.j),this.o=r.o,this.g=r.g,qe(this,r.s),this.l=r.l;var c=r.i,h=new Ge;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ze(this,h),this.m=r.m}else r&&(c=String(r).match(hi))?(this.h=!1,Qn(this,c[1]||"",!0),this.o=it(c[2]||""),this.g=it(c[3]||"",!0),qe(this,c[4]),this.l=it(c[5]||"",!0),ze(this,c[6]||"",!0),this.m=it(c[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}Pe.prototype.toString=function(){var r=[],c=this.j;c&&r.push(_n(c,di,!0),":");var h=this.g;return(h||c=="file")&&(r.push("//"),(c=this.o)&&r.push(_n(c,di,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(_n(h,h.charAt(0)=="/"?Cs:fi,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",_n(h,Ss)),r.join("")};function ie(r){return new Pe(r)}function Qn(r,c,h){r.j=h?it(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function qe(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function ze(r,c,h){c instanceof Ge?(r.i=c,Rs(r.i,r.h)):(h||(c=_n(c,Ps)),r.i=new Ge(c,r.h))}function rt(r,c,h){r.i.set(c,h)}function Se(r){return rt(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function it(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function _n(r,c,h){return typeof r=="string"?(r=encodeURI(r).replace(c,As),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function As(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var di=/[#\/\?@]/g,fi=/[#\?:]/g,Cs=/[#\?]/g,Ps=/[#\?@]/g,Ss=/#/g;function Ge(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function fe(r){r.g||(r.g=new Map,r.h=0,r.i&&Is(r.i,function(c,h){r.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Ge.prototype,n.add=function(r,c){fe(this),this.i=null,r=Ke(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(c),this.h+=1,this};function Tr(r,c){fe(r),c=Ke(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function pi(r,c){return fe(r),c=Ke(r,c),r.g.has(c)}n.forEach=function(r,c){fe(this),this.g.forEach(function(h,m){h.forEach(function(A){r.call(c,A,m,this)},this)},this)},n.na=function(){fe(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const A=r[m];for(let R=0;R<A.length;R++)h.push(c[m])}return h},n.V=function(r){fe(this);let c=[];if(typeof r=="string")pi(this,r)&&(c=c.concat(this.g.get(Ke(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)c=c.concat(r[h])}return c},n.set=function(r,c){return fe(this),this.i=null,r=Ke(this,r),pi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},n.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function mi(r,c,h){Tr(r,c),0<h.length&&(r.i=null,r.g.set(Ke(r,c),H(h)),r.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const R=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var A=R;M[m]!==""&&(A+="="+encodeURIComponent(String(M[m]))),r.push(A)}}return this.i=r.join("&")};function Ke(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function Rs(r,c){c&&!r.j&&(fe(r),r.i=null,r.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(Tr(this,m),mi(this,A,h))},r)),r.j=c}function ks(r,c){const h=new ht;if(p.Image){const m=new Image;m.onload=L(pe,h,"TestLoadImage: loaded",!0,c,m),m.onerror=L(pe,h,"TestLoadImage: error",!1,c,m),m.onabort=L(pe,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=L(pe,h,"TestLoadImage: timeout",!1,c,m),p.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=r}else c(!1)}function xs(r,c){const h=new ht,m=new AbortController,A=setTimeout(()=>{m.abort(),pe(h,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:m.signal}).then(R=>{clearTimeout(A),R.ok?pe(h,"TestPingServer: ok",!0,c):pe(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),pe(h,"TestPingServer: error",!1,c)})}function pe(r,c,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function gi(){this.g=new _s}function Vs(r,c,h){const m=h||"";try{ui(r,function(A,R){let M=A;y(A)&&(M=Ue(A)),c.push(m+R+"="+encodeURIComponent(M))})}catch(A){throw c.push(m+"type="+encodeURIComponent("_badmap")),A}}function We(r){this.l=r.Ub||null,this.j=r.eb||!1}B(We,pn),We.prototype.g=function(){return new Xn(this.l,this.j)},We.prototype.i=function(r){return function(){return r}}({});function Xn(r,c){wt.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Xn,wt),n=Xn.prototype,n.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Qe(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||p).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jt(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function wi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Jt(this):Qe(this),this.readyState==3&&wi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Jt(this))},n.Qa=function(r){this.g&&(this.response=r,Jt(this))},n.ga=function(){this.g&&Jt(this)};function Jt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Qe(r)}n.setRequestHeader=function(r,c){this.u.append(r,c)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=c.next();return r.join(`\r
`)};function Qe(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function yi(r){let c="";return Dt(r,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function bn(r,c,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=yi(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):rt(r,c,h))}function ct(r){wt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(ct,wt);var Ds=/^https?$/i,Os=["POST","PUT"];n=ct.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gn.g(),this.v=this.o?qn(this.o):qn(Gn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(R){vi(this,R);return}if(r=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())h.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),A=p.FormData&&r instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Os,c,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of h)this.g.setRequestHeader(R,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Re(this),this.u=!0,this.g.send(r),this.u=!1}catch(R){vi(this,R)}};function vi(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,_i(r),Yn(r)}function _i(r){r.A||(r.A=!0,yt(r,"complete"),yt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,yt(this,"complete"),yt(this,"abort"),Yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yn(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bi(this):this.bb())},n.bb=function(){bi(this)};function bi(r){if(r.h&&typeof u<"u"&&(!r.v[1]||se(r)!=4||r.Z()!=2)){if(r.u&&se(r)==4)Ee(r.Ea,0,r);else if(yt(r,"readystatechange"),se(r)==4){r.h=!1;try{const M=r.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var m;if(m=M===0){var A=String(r.D).match(hi)[1]||null;!A&&p.self&&p.self.location&&(A=p.self.location.protocol.slice(0,-1)),m=!Ds.test(A?A.toLowerCase():"")}h=m}if(h)yt(r,"complete"),yt(r,"success");else{r.m=6;try{var R=2<se(r)?r.g.statusText:""}catch{R=""}r.l=R+" ["+r.Z()+"]",_i(r)}}finally{Yn(r)}}}}function Yn(r,c){if(r.g){Re(r);const h=r.g,m=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||yt(r,"ready");try{h.onreadystatechange=m}catch{}}}function Re(r){r.I&&(p.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function se(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<se(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),mr(c)}};function Ir(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ei(r){const c={};r=(r.g&&2<=se(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<r.length;m++){if(at(r[m]))continue;var h=T(r[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[A]||[];c[A]=R,R.push(h)}I(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function En(r,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||c}function Ti(r){this.Aa=0,this.i=[],this.j=new ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,r),this.cb=En("retryDelaySeedMs",1e4,r),this.Wa=En("forwardChannelMaxRetries",2,r),this.wa=En("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new oi(r&&r.concurrentRequestLimit),this.Da=new gi,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ti.prototype,n.la=8,n.G=1,n.connect=function(r,c,h,m){st(0),this.W=r,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Sr(this,null,this.W),Zn(this)};function Ar(r){if(Ii(r),r.G==3){var c=r.U++,h=ie(r.I);if(rt(h,"SID",r.K),rt(h,"RID",c),rt(h,"TYPE","terminate"),Tn(r,h),c=new de(r,r.j,c),c.L=2,c.v=Se(ie(h)),h=!1,p.navigator&&p.navigator.sendBeacon)try{h=p.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&p.Image&&(new Image().src=c.v,h=!0),h||(c.g=Ve(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Kn(c)}Si(r)}function Jn(r){r.g&&(Zt(r),r.g.cancel(),r.g=null)}function Ii(r){Jn(r),r.u&&(p.clearTimeout(r.u),r.u=null),In(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&p.clearTimeout(r.s),r.s=null)}function Zn(r){if(!ai(r.h)&&!r.s){r.s=!0;var c=r.Ga;cn||Zr(),$||(cn(),$=!0),hr.add(c,r),r.B=0}}function Ms(r,c){return Wn(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Qt(O(r.Ga,r,c),Pi(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const A=new de(this,this.j,r);let R=this.o;if(this.S&&(R?(R=v(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Ai(this,A,c),h=ie(this.I),rt(h,"RID",r),rt(h,"CVER",22),this.D&&rt(h,"X-HTTP-Session-Id",this.D),Tn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(yi(R)))+"&"+c:this.m&&bn(h,this.m,R)),Er(this.h,A),this.Ua&&rt(h,"TYPE","init"),this.P?(rt(h,"$req",c),rt(h,"SID","null"),A.T=!0,ne(A,h,null)):ne(A,h,c),this.G=2}}else this.G==3&&(r?ke(this,r):this.i.length==0||ai(this.h)||ke(this))};function ke(r,c){var h;c?h=c.l:h=r.U++;const m=ie(r.I);rt(m,"SID",r.K),rt(m,"RID",h),rt(m,"AID",r.T),Tn(r,m),r.m&&r.o&&bn(m,r.m,r.o),h=new de(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),c&&(r.i=c.D.concat(r.i)),c=Ai(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Er(r.h,h),ne(h,m,c)}function Tn(r,c){r.H&&Dt(r.H,function(h,m){rt(c,m,h)}),r.l&&ui({},function(h,m){rt(c,m,h)})}function Ai(r,c,h){h=Math.min(r.i.length,h);var m=r.l?O(r.l.Na,r.l,r):null;t:{var A=r.i;let R=-1;for(;;){const M=["count="+h];R==-1?0<h?(R=A[0].g,M.push("ofs="+R)):R=0:M.push("ofs="+R);let et=!0;for(let _t=0;_t<h;_t++){let Q=A[_t].g;const bt=A[_t].map;if(Q-=R,0>Q)R=Math.max(0,A[_t].g-100),et=!1;else try{Vs(bt,M,"req"+Q+"_")}catch{m&&m(bt)}}if(et){m=M.join("&");break t}}}return r=r.i.splice(0,h),c.D=r,m}function Cr(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;cn||Zr(),$||(cn(),$=!0),hr.add(c,r),r.v=0}}function Pr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Qt(O(r.Fa,r),Pi(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Ci(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Qt(O(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Jn(this),Ci(this))};function Zt(r){r.A!=null&&(p.clearTimeout(r.A),r.A=null)}function Ci(r){r.g=new de(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=ie(r.qa);rt(c,"RID","rpc"),rt(c,"SID",r.K),rt(c,"AID",r.T),rt(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&rt(c,"TO",r.ja),rt(c,"TYPE","xmlhttp"),Tn(r,c),r.m&&r.o&&bn(c,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=Se(ie(c)),h.m=null,h.P=!0,ri(h,r)}n.Za=function(){this.C!=null&&(this.C=null,Jn(this),Pr(this),st(19))};function In(r){r.C!=null&&(p.clearTimeout(r.C),r.C=null)}function Xe(r,c){var h=null;if(r.g==c){In(r),Zt(r),r.g=null;var m=2}else if(br(r.h,c))h=c.D,li(r.h,c),m=1;else return;if(r.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=r.B;m=Ie(),yt(m,new ee(m,h)),Zn(r)}else Cr(r);else if(A=c.s,A==3||A==0&&0<c.X||!(m==1&&Ms(r,c)||m==2&&Pr(r)))switch(h&&0<h.length&&(c=r.h,c.i=c.i.concat(h)),A){case 1:xe(r,5);break;case 4:xe(r,10);break;case 3:xe(r,6);break;default:xe(r,2)}}}function Pi(r,c){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*c}function xe(r,c){if(r.j.info("Error code "+c),c==2){var h=O(r.fb,r),m=r.Xa;const A=!m;m=new Pe(m||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Qn(m,"https"),Se(m),A?ks(m.toString(),h):xs(m.toString(),h)}else st(2);r.G=0,r.l&&r.l.sa(c),Si(r),Ii(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Si(r){if(r.G=0,r.ka=[],r.l){const c=ci(r.h);(c.length!=0||r.i.length!=0)&&(j(r.ka,c),j(r.ka,r.i),r.h.i.length=0,H(r.i),r.i.length=0),r.l.ra()}}function Sr(r,c,h){var m=h instanceof Pe?ie(h):new Pe(h);if(m.g!="")c&&(m.g=c+"."+m.g),qe(m,m.s);else{var A=p.location;m=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new Pe(null);m&&Qn(R,m),c&&(R.g=c),A&&qe(R,A),h&&(R.l=h),m=R}return h=r.D,c=r.ya,h&&c&&rt(m,h,c),rt(m,"VER",r.la),Tn(r,m),m}function Ve(r,c,h){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new ct(new We({eb:h})):new ct(r.pa),c.Ha(r.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ri(){}n=Ri.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function tr(){}tr.prototype.g=function(r,c){return new qt(r,c)};function qt(r,c){wt.call(this),this.g=new Ti(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!at(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!at(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Ye(this)}B(qt,wt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Ar(this.g)},qt.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Ue(r),r=h);c.i.push(new Es(c.Ya++,r)),c.G==3&&Zn(c)},qt.prototype.N=function(){this.g.l=null,delete this.j,Ar(this.g),delete this.g,qt.aa.N.call(this)};function ki(r){Rt.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){t:{for(const h in c){r=h;break t}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}B(ki,Rt);function xi(){Wt.call(this),this.status=1}B(xi,Wt);function Ye(r){this.g=r}B(Ye,Ri),Ye.prototype.ua=function(){yt(this.g,"a")},Ye.prototype.ta=function(r){yt(this.g,new ki(r))},Ye.prototype.sa=function(r){yt(this.g,new xi)},Ye.prototype.ra=function(){yt(this.g,"b")},tr.prototype.createWebChannel=tr.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,fl=function(){return new tr},dl=function(){return Ie()},hl=Te,Zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,Ui=zn,yr.COMPLETE="complete",ul=yr,mn.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Or=mn,cl=We,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,ll=ct}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});const ga="@firebase/firestore";/**
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
 */class Ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let cr="10.12.1";/**
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
 */const Mn=new co("@firebase/firestore");function Vr(){return Mn.logLevel}function F(n,...t){if(Mn.logLevel<=J.DEBUG){const e=t.map(ho);Mn.debug(`Firestore (${cr}): ${n}`,...e)}}function Nn(n,...t){if(Mn.logLevel<=J.ERROR){const e=t.map(ho);Mn.error(`Firestore (${cr}): ${n}`,...e)}}function Ki(n,...t){if(Mn.logLevel<=J.WARN){const e=t.map(ho);Mn.warn(`Firestore (${cr}): ${n}`,...e)}}function ho(n){if(typeof n=="string")return n;try{/**
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
 */function W(n="Unexpected state"){const t=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+n;throw Nn(t),new Error(t)}function St(n,t){n||W()}function ut(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends an{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class pl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ft.UNAUTHENTICATED))}shutdown(){}}class vd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _d{constructor(t){this.t=t,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=g=>this.i!==i?(i=this.i,e(g)):Promise.resolve();let a=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new xn,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const g=a;t.enqueueRetryable(async()=>{await g.promise,await s(this.currentUser)})},p=g=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new xn)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(St(typeof i.accessToken=="string"),new pl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return St(t===null||typeof t=="string"),new Ft(t)}}class bd{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ed{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new bd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Td{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Id{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=a=>{a.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,F("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const s=a=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(St(typeof e.token=="string"),this.R=e.token,new Td(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ad(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class ml{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Ad(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<e&&(i+=t.charAt(s[a]%t.length))}return i}}function ot(n,t){return n<t?-1:n>t?1:0}function ir(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class Et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new U(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new U(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new U(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Et(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ft{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ft(t)}static min(){return new ft(new Et(0,0))}static max(){return new ft(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ur{constructor(t,e,i){e===void 0?e=0:e>t.length&&W(),i===void 0?i=t.length-e:i>t.length-e&&W(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ur.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ur?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const a=t.get(s),u=e.get(s);if(a<u)return-1;if(a>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class mt extends Ur{construct(t,e,i){return new mt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new U(D.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new mt(e)}static emptyPath(){return new mt([])}}const Cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Ur{construct(t,e,i){return new Vt(t,e,i)}static isValidIdentifier(t){return Cd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const a=()=>{if(i.length===0)throw new U(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const p=t[s];if(p==="\\"){if(s+1===t.length)throw new U(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[s+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new U(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=g,s+=2}else p==="`"?(u=!u,s++):p!=="."||u?(i+=p,s++):(a(),s++)}if(a(),u)throw new U(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vt(e)}static emptyPath(){return new Vt([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(mt.fromString(t))}static fromName(t){return new q(mt.fromString(t).popFirst(5))}static empty(){return new q(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return mt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new mt(t.slice()))}}function Pd(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=ft.fromTimestamp(i===1e9?new Et(e+1,0):new Et(e,i));return new rn(s,q.empty(),t)}function Sd(n){return new rn(n.readTime,n.key,-1)}class rn{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new rn(ft.min(),q.empty(),-1)}static max(){return new rn(ft.max(),q.empty(),-1)}}function Rd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:ot(n.largestBatchId,t.largestBatchId))}/**
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
 */const kd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function gl(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==kd)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,i)=>{e(t)})}static reject(t){return new V((e,i)=>{i(t)})}static waitFor(t){return new V((e,i)=>{let s=0,a=0,u=!1;t.forEach(p=>{++s,p.next(()=>{++a,u&&a===s&&e()},g=>i(g))}),u=!0,a===s&&e()})}static or(t){let e=V.resolve(!1);for(const i of t)e=e.next(s=>s?V.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,a)=>{i.push(e.call(this,s,a))}),this.waitFor(i)}static mapArray(t,e){return new V((i,s)=>{const a=t.length,u=new Array(a);let p=0;for(let g=0;g<a;g++){const y=g;e(t[y]).next(P=>{u[y]=P,++p,p===a&&i(u)},P=>s(P))}})}static doWhile(t,e){return new V((i,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):i()};a()})}}function Vd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function os(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}wl.oe=-1;function fo(n){return n==null}function Wi(n){return n===0&&1/n==-1/0}function Dd(n){return typeof n=="number"&&Number.isInteger(n)&&!Wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function wa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Wr(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function yl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Kt{constructor(t,e){this.comparator=t,this.root=e||kt.EMPTY}insert(t,e){return new Kt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(t){return new Kt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Li(this.root,t,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Li(this.root,t,this.comparator,!0)}}class Li{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?i(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class kt{constructor(t,e,i,s,a){this.key=t,this.value=e,this.color=i??kt.RED,this.left=s??kt.EMPTY,this.right=a??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,a){return new kt(t??this.key,e??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const a=i(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,i),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return kt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,i,s,a){return this}insert(t,e,i){return new kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class jt{constructor(t){this.comparator=t,this.data=new Kt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ya(this.data.getIterator())}getIteratorFrom(t){return new ya(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class ya{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class le{constructor(t){this.fields=t,t.sort(Vt.comparator)}static empty(){return new le([])}unionWith(t){let e=new jt(Vt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new le(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ir(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ne{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Od("Invalid base64 string: "+a):a}}(t);return new Ne(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new Ne(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const Md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(n){if(St(!!n),typeof n=="string"){let t=0;const e=Md.exec(n);if(St(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $r(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
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
 */function po(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function vl(n){const t=n.mapValue.fields.__previous_value__;return po(t)?vl(t):t}function Qi(n){const t=Ln(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
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
 */class Nd{constructor(t,e,i,s,a,u,p,g,y){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y}}class Xi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Xi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?po(n)?4:Ld(n)?9007199254740991:10:W()}function ye(n,t){if(n===t)return!0;const e=sr(n);if(e!==sr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Qi(n).isEqual(Qi(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ln(s.timestampValue),p=Ln(a.timestampValue);return u.seconds===p.seconds&&u.nanos===p.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,a){return $r(s.bytesValue).isEqual($r(a.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,a){return xt(s.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(a.geoPointValue.longitude)}(n,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return xt(s.integerValue)===xt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=xt(s.doubleValue),p=xt(a.doubleValue);return u===p?Wi(u)===Wi(p):isNaN(u)&&isNaN(p)}return!1}(n,t);case 9:return ir(n.arrayValue.values||[],t.arrayValue.values||[],ye);case 10:return function(s,a){const u=s.mapValue.fields||{},p=a.mapValue.fields||{};if(wa(u)!==wa(p))return!1;for(const g in u)if(u.hasOwnProperty(g)&&(p[g]===void 0||!ye(u[g],p[g])))return!1;return!0}(n,t);default:return W()}}function Hr(n,t){return(n.values||[]).find(e=>ye(e,t))!==void 0}function or(n,t){if(n===t)return 0;const e=sr(n),i=sr(t);if(e!==i)return ot(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return ot(n.booleanValue,t.booleanValue);case 2:return function(a,u){const p=xt(a.integerValue||a.doubleValue),g=xt(u.integerValue||u.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(n,t);case 3:return va(n.timestampValue,t.timestampValue);case 4:return va(Qi(n),Qi(t));case 5:return ot(n.stringValue,t.stringValue);case 6:return function(a,u){const p=$r(a),g=$r(u);return p.compareTo(g)}(n.bytesValue,t.bytesValue);case 7:return function(a,u){const p=a.split("/"),g=u.split("/");for(let y=0;y<p.length&&y<g.length;y++){const P=ot(p[y],g[y]);if(P!==0)return P}return ot(p.length,g.length)}(n.referenceValue,t.referenceValue);case 8:return function(a,u){const p=ot(xt(a.latitude),xt(u.latitude));return p!==0?p:ot(xt(a.longitude),xt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(a,u){const p=a.values||[],g=u.values||[];for(let y=0;y<p.length&&y<g.length;++y){const P=or(p[y],g[y]);if(P)return P}return ot(p.length,g.length)}(n.arrayValue,t.arrayValue);case 10:return function(a,u){if(a===Fi.mapValue&&u===Fi.mapValue)return 0;if(a===Fi.mapValue)return 1;if(u===Fi.mapValue)return-1;const p=a.fields||{},g=Object.keys(p),y=u.fields||{},P=Object.keys(y);g.sort(),P.sort();for(let x=0;x<g.length&&x<P.length;++x){const O=ot(g[x],P[x]);if(O!==0)return O;const L=or(p[g[x]],y[P[x]]);if(L!==0)return L}return ot(g.length,P.length)}(n.mapValue,t.mapValue);default:throw W()}}function va(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ot(n,t);const e=Ln(n),i=Ln(t),s=ot(e.seconds,i.seconds);return s!==0?s:ot(e.nanos,i.nanos)}function ar(n){return to(n)}function to(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Ln(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return $r(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const a of e.values||[])s?s=!1:i+=",",i+=to(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of i)a?a=!1:s+=",",s+=`${u}:${to(e.fields[u])}`;return s+"}"}(n.mapValue):W()}function eo(n){return!!n&&"integerValue"in n}function mo(n){return!!n&&"arrayValue"in n}function $i(n){return!!n&&"mapValue"in n}function Mr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Wr(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Mr(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ld(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ae{constructor(t){this.value=t}static empty(){return new ae({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!$i(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mr(e)}setAll(t){let e=Vt.emptyPath(),i={},s=[];t.forEach((u,p)=>{if(!e.isImmediateParentOf(p)){const g=this.getFieldsMap(e);this.applyChanges(g,i,s),i={},s=[],e=p.popLast()}u?i[p.lastSegment()]=Mr(u):s.push(p.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,i,s)}delete(t){const e=this.field(t.popLast());$i(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ye(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];$i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Wr(e,(s,a)=>t[s]=a);for(const s of i)delete t[s]}clone(){return new ae(Mr(this.value))}}function _l(n){const t=[];return Wr(n.fields,(e,i)=>{const s=new Vt([e]);if($i(i)){const a=_l(i.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new le(t)}/**
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
 */class oe{constructor(t,e,i,s,a,u,p){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=a,this.data=u,this.documentState=p}static newInvalidDocument(t){return new oe(t,0,ft.min(),ft.min(),ft.min(),ae.empty(),0)}static newFoundDocument(t,e,i,s){return new oe(t,1,e,ft.min(),i,s,0)}static newNoDocument(t,e){return new oe(t,2,e,ft.min(),ft.min(),ae.empty(),0)}static newUnknownDocument(t,e){return new oe(t,3,e,ft.min(),ft.min(),ae.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ft.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ae.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ft.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yi{constructor(t,e){this.position=t,this.inclusive=e}}function _a(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const a=t[s],u=n.position[s];if(a.field.isKeyField()?i=q.comparator(q.fromName(u.referenceValue),e.key):i=or(u,e.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function ba(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ye(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ji{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class bl{}class Pt extends bl{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new jd(t,e,i):e==="array-contains"?new Hd(t,i):e==="in"?new qd(t,i):e==="not-in"?new zd(t,i):e==="array-contains-any"?new Gd(t,i):new Pt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Ud(t,i):new $d(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(or(e,this.value)):e!==null&&sr(this.value)===sr(e)&&this.matchesComparison(or(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends bl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new sn(t,e)}matches(t){return El(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function El(n){return n.op==="and"}function Tl(n){return Bd(n)&&El(n)}function Bd(n){for(const t of n.filters)if(t instanceof sn)return!1;return!0}function no(n){if(n instanceof Pt)return n.field.canonicalString()+n.op.toString()+ar(n.value);if(Tl(n))return n.filters.map(t=>no(t)).join(",");{const t=n.filters.map(e=>no(e)).join(",");return`${n.op}(${t})`}}function Il(n,t){return n instanceof Pt?function(i,s){return s instanceof Pt&&i.op===s.op&&i.field.isEqual(s.field)&&ye(i.value,s.value)}(n,t):n instanceof sn?function(i,s){return s instanceof sn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,u,p)=>a&&Il(u,s.filters[p]),!0):!1}(n,t):void W()}function Al(n){return n instanceof Pt?function(e){return`${e.field.canonicalString()} ${e.op} ${ar(e.value)}`}(n):n instanceof sn?function(e){return e.op.toString()+" {"+e.getFilters().map(Al).join(" ,")+"}"}(n):"Filter"}class jd extends Pt{constructor(t,e,i){super(t,e,i),this.key=q.fromName(i.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ud extends Pt{constructor(t,e){super(t,"in",e),this.keys=Cl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class $d extends Pt{constructor(t,e){super(t,"not-in",e),this.keys=Cl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>q.fromName(i.referenceValue))}class Hd extends Pt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mo(e)&&Hr(e.arrayValue,this.value)}}class qd extends Pt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Hr(this.value.arrayValue,e)}}class zd extends Pt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Hr(this.value.arrayValue,e)}}class Gd extends Pt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Hr(this.value.arrayValue,i))}}/**
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
 */class Kd{constructor(t,e=null,i=[],s=[],a=null,u=null,p=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=u,this.endAt=p,this.ue=null}}function Ea(n,t=null,e=[],i=[],s=null,a=null,u=null){return new Kd(n,t,e,i,s,a,u)}function go(n){const t=ut(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>no(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),fo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ar(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ar(i)).join(",")),t.ue=e}return t.ue}function wo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Il(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ba(n.startAt,t.startAt)&&ba(n.endAt,t.endAt)}/**
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
 */class as{constructor(t,e=null,i=[],s=[],a=null,u="F",p=null,g=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=u,this.startAt=p,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wd(n,t,e,i,s,a,u,p){return new as(n,t,e,i,s,a,u,p)}function Qd(n){return new as(n)}function Ta(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xd(n){return n.collectionGroup!==null}function Nr(n){const t=ut(n);if(t.ce===null){t.ce=[];const e=new Set;for(const a of t.explicitOrderBy)t.ce.push(a),e.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let p=new jt(Vt.comparator);return u.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.ce.push(new Ji(a,i))}),e.has(Vt.keyField().canonicalString())||t.ce.push(new Ji(Vt.keyField(),i))}return t.ce}function Vn(n){const t=ut(n);return t.le||(t.le=Yd(t,Nr(n))),t.le}function Yd(n,t){if(n.limitType==="F")return Ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Ji(s.field,a)});const e=n.endAt?new Yi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Yi(n.startAt.position,n.startAt.inclusive):null;return Ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function ro(n,t,e){return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pl(n,t){return wo(Vn(n),Vn(t))&&n.limitType===t.limitType}function Sl(n){return`${go(Vn(n))}|lt:${n.limitType}`}function Dr(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Al(s)).join(", ")}]`),fo(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ar(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ar(s)).join(",")),`Target(${i})`}(Vn(n))}; limitType=${n.limitType})`}function yo(n,t){return t.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):q.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,t)&&function(i,s){for(const a of Nr(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,p,g){const y=_a(u,p,g);return u.inclusive?y<=0:y<0}(i.startAt,Nr(i),s)||i.endAt&&!function(u,p,g){const y=_a(u,p,g);return u.inclusive?y>=0:y>0}(i.endAt,Nr(i),s))}(n,t)}function Jd(n){return(t,e)=>{let i=!1;for(const s of Nr(n)){const a=Zd(s,t,e);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function Zd(n,t,e){const i=n.field.isKeyField()?q.comparator(t.key,e.key):function(a,u,p){const g=u.data.field(a),y=p.data.field(a);return g!==null&&y!==null?or(g,y):W()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return W()}}/**
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
 */class ur{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Wr(this.inner,(e,i)=>{for(const[s,a]of i)t(s,a)})}isEmpty(){return yl(this.inner)}size(){return this.innerSize}}/**
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
 */const tf=new Kt(q.comparator);function Zi(){return tf}const Rl=new Kt(q.comparator);function Bi(...n){let t=Rl;for(const e of n)t=t.insert(e.key,e);return t}function kl(n){let t=Rl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Rn(){return Lr()}function xl(){return Lr()}function Lr(){return new ur(n=>n.toString(),(n,t)=>n.isEqual(t))}const ef=new Kt(q.comparator),nf=new jt(q.comparator);function Bt(...n){let t=nf;for(const e of n)t=t.add(e);return t}const rf=new jt(ot);function sf(){return rf}/**
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
 */function Vl(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wi(t)?"-0":t}}function Dl(n){return{integerValue:""+n}}function of(n,t){return Dd(t)?Dl(t):Vl(n,t)}/**
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
 */class ls{constructor(){this._=void 0}}function af(n,t,e){return n instanceof ts?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&po(a)&&(a=vl(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(e,t):n instanceof qr?Ml(n,t):n instanceof zr?Nl(n,t):function(s,a){const u=Ol(s,a),p=Ia(u)+Ia(s.Pe);return eo(u)&&eo(s.Pe)?Dl(p):Vl(s.serializer,p)}(n,t)}function lf(n,t,e){return n instanceof qr?Ml(n,t):n instanceof zr?Nl(n,t):e}function Ol(n,t){return n instanceof es?function(i){return eo(i)||function(a){return!!a&&"doubleValue"in a}(i)}(t)?t:{integerValue:0}:null}class ts extends ls{}class qr extends ls{constructor(t){super(),this.elements=t}}function Ml(n,t){const e=Ll(t);for(const i of n.elements)e.some(s=>ye(s,i))||e.push(i);return{arrayValue:{values:e}}}class zr extends ls{constructor(t){super(),this.elements=t}}function Nl(n,t){let e=Ll(t);for(const i of n.elements)e=e.filter(s=>!ye(s,i));return{arrayValue:{values:e}}}class es extends ls{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ia(n){return xt(n.integerValue||n.doubleValue)}function Ll(n){return mo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cf(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof qr&&s instanceof qr||i instanceof zr&&s instanceof zr?ir(i.elements,s.elements,ye):i instanceof es&&s instanceof es?ye(i.Pe,s.Pe):i instanceof ts&&s instanceof ts}(n.transform,t.transform)}class uf{constructor(t,e){this.version=t,this.transformResults=e}}class De{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new De}static exists(t){return new De(void 0,t)}static updateTime(t){return new De(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class cs{}function Fl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jl(n.key,De.none()):new Qr(n.key,n.data,De.none());{const e=n.data,i=ae.empty();let s=new jt(Vt.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?i.delete(a):i.set(a,u),s=s.add(a)}return new jn(n.key,i,new le(s.toArray()),De.none())}}function hf(n,t,e){n instanceof Qr?function(s,a,u){const p=s.value.clone(),g=Ca(s.fieldTransforms,a,u.transformResults);p.setAll(g),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,t,e):n instanceof jn?function(s,a,u){if(!Hi(s.precondition,a))return void a.convertToUnknownDocument(u.version);const p=Ca(s.fieldTransforms,a,u.transformResults),g=a.data;g.setAll(Bl(s)),g.setAll(p),a.convertToFoundDocument(u.version,g).setHasCommittedMutations()}(n,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Fr(n,t,e,i){return n instanceof Qr?function(a,u,p,g){if(!Hi(a.precondition,u))return p;const y=a.value.clone(),P=Pa(a.fieldTransforms,g,u);return y.setAll(P),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),null}(n,t,e,i):n instanceof jn?function(a,u,p,g){if(!Hi(a.precondition,u))return p;const y=Pa(a.fieldTransforms,g,u),P=u.data;return P.setAll(Bl(a)),P.setAll(y),u.convertToFoundDocument(u.version,P).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(x=>x.field))}(n,t,e,i):function(a,u,p){return Hi(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):p}(n,t,e)}function df(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),a=Ol(i.transform,s||null);a!=null&&(e===null&&(e=ae.empty()),e.set(i.field,a))}return e||null}function Aa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ir(i,s,(a,u)=>cf(a,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Qr extends cs{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jn extends cs{constructor(t,e,i,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Bl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ca(n,t,e){const i=new Map;St(n.length===e.length);for(let s=0;s<e.length;s++){const a=n[s],u=a.transform,p=t.data.field(a.field);i.set(a.field,lf(u,p,e[s]))}return i}function Pa(n,t,e){const i=new Map;for(const s of n){const a=s.transform,u=e.data.field(s.field);i.set(s.field,af(a,u,t))}return i}class jl extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ff extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pf{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&hf(a,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Fr(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Fr(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=xl();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let p=this.applyToLocalView(u,a.mutatedFields);p=e.has(s.key)?null:p;const g=Fl(u,p);g!==null&&i.set(s.key,g),u.isValidDocument()||u.convertToNoDocument(ft.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Bt())}isEqual(t){return this.batchId===t.batchId&&ir(this.mutations,t.mutations,(e,i)=>Aa(e,i))&&ir(this.baseMutations,t.baseMutations,(e,i)=>Aa(e,i))}}class vo{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){St(t.mutations.length===i.length);let s=function(){return ef}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,i[u].version);return new vo(t,e,i,s)}}/**
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
 */class mf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var vt,X;function gf(n){switch(n){default:return W();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function wf(n){if(n===void 0)return Nn("GRPC error has no .code"),D.UNKNOWN;switch(n){case vt.OK:return D.OK;case vt.CANCELLED:return D.CANCELLED;case vt.UNKNOWN:return D.UNKNOWN;case vt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case vt.INTERNAL:return D.INTERNAL;case vt.UNAVAILABLE:return D.UNAVAILABLE;case vt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case vt.NOT_FOUND:return D.NOT_FOUND;case vt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case vt.ABORTED:return D.ABORTED;case vt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case vt.DATA_LOSS:return D.DATA_LOSS;default:return W()}}(X=vt||(vt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new al([4294967295,4294967295],0);class yf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function io(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function _f(n,t){return io(n,t.toTimestamp())}function rr(n){return St(!!n),ft.fromTimestamp(function(e){const i=Ln(e);return new Et(i.seconds,i.nanos)}(n))}function Ul(n,t){return so(n,t).canonicalString()}function so(n,t){const e=function(s){return new mt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function bf(n){const t=mt.fromString(n);return St(Rf(t)),t}function oo(n,t){return Ul(n.databaseId,t.path)}function Ef(n){const t=bf(n);return t.length===4?mt.emptyPath():If(t)}function Tf(n){return new mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function If(n){return St(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Sa(n,t,e){return{name:oo(n,t),fields:e.value.mapValue.fields}}function Af(n,t){let e;if(t instanceof Qr)e={update:Sa(n,t.key,t.value)};else if(t instanceof jl)e={delete:oo(n,t.key)};else if(t instanceof jn)e={update:Sa(n,t.key,t.data),updateMask:Sf(t.fieldMask)};else{if(!(t instanceof ff))return W();e={verify:oo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(a,u){const p=u.transform;if(p instanceof ts)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof qr)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof zr)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof es)return{fieldPath:u.field.canonicalString(),increment:p.Pe};throw W()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:_f(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:W()}(n,t.precondition)),e}function Cf(n,t){return n&&n.length>0?(St(t!==void 0),n.map(e=>function(s,a){let u=s.updateTime?rr(s.updateTime):rr(a);return u.isEqual(ft.min())&&(u=rr(a)),new uf(u,s.transformResults||[])}(e,t))):[]}function Pf(n){let t=Ef(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){St(i===1);const P=e.from[0];P.allDescendants?s=P.collectionId:t=t.child(P.collectionId)}let a=[];e.where&&(a=function(x){const O=$l(x);return O instanceof sn&&Tl(O)?O.getFilters():[O]}(e.where));let u=[];e.orderBy&&(u=function(x){return x.map(O=>function(B){return new Ji(nr(B.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(O))}(e.orderBy));let p=null;e.limit&&(p=function(x){let O;return O=typeof x=="object"?x.value:x,fo(O)?null:O}(e.limit));let g=null;e.startAt&&(g=function(x){const O=!!x.before,L=x.values||[];return new Yi(L,O)}(e.startAt));let y=null;return e.endAt&&(y=function(x){const O=!x.before,L=x.values||[];return new Yi(L,O)}(e.endAt)),Wd(t,s,u,a,p,"F",g,y)}function $l(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=nr(e.unaryFilter.field);return Pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=nr(e.unaryFilter.field);return Pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=nr(e.unaryFilter.field);return Pt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=nr(e.unaryFilter.field);return Pt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return Pt.create(nr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return sn.create(e.compositeFilter.filters.map(i=>$l(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function nr(n){return Vt.fromServerFormat(n.fieldPath)}function Sf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Rf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class kf{constructor(t){this.ct=t}}function xf(n){const t=Pf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ro(t,t.limit,"L"):t}/**
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
 */class Vf{constructor(){this._n=new Df}addToCollectionParentIndex(t,e){return this._n.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(rn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(rn.min())}updateCollectionGroup(t,e,i){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Df{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new jt(mt.comparator),a=!s.has(i);return this.index[e]=s.add(i),a}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new jt(mt.comparator)).toArray()}}/**
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
 */class lr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new lr(0)}static Ln(){return new lr(-1)}}/**
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
 */class Of{constructor(){this.changes=new ur(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?V.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Mf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Nf{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Fr(i.mutation,s,le.empty(),Et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,Bt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=Bt()){const s=Rn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(a=>{let u=Bi();return a.forEach((p,g)=>{u=u.insert(p,g.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Rn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,Bt()))}populateOverlays(t,e,i){const s=[];return i.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,p)=>{e.set(u,p)})})}computeViews(t,e,i,s){let a=Zi();const u=Lr(),p=function(){return Lr()}();return e.forEach((g,y)=>{const P=i.get(y.key);s.has(y.key)&&(P===void 0||P.mutation instanceof jn)?a=a.insert(y.key,y):P!==void 0?(u.set(y.key,P.mutation.getFieldMask()),Fr(P.mutation,y,P.mutation.getFieldMask(),Et.now())):u.set(y.key,le.empty())}),this.recalculateAndSaveOverlays(t,a).next(g=>(g.forEach((y,P)=>u.set(y,P)),e.forEach((y,P)=>{var x;return p.set(y,new Mf(P,(x=u.get(y))!==null&&x!==void 0?x:null))}),p))}recalculateAndSaveOverlays(t,e){const i=Lr();let s=new Kt((u,p)=>u-p),a=Bt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const p of u)p.keys().forEach(g=>{const y=e.get(g);if(y===null)return;let P=i.get(g)||le.empty();P=p.applyToLocalView(y,P),i.set(g,P);const x=(s.get(p.batchId)||Bt()).add(g);s=s.insert(p.batchId,x)})}).next(()=>{const u=[],p=s.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,P=g.value,x=xl();P.forEach(O=>{if(!a.has(O)){const L=Fl(e.get(O),i.get(O));L!==null&&x.set(O,L),a=a.add(O)}}),u.push(this.documentOverlayCache.saveOverlays(t,y,x))}return V.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return q.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-a.size):V.resolve(Rn());let p=-1,g=a;return u.next(y=>V.forEach(y,(P,x)=>(p<x.largestBatchId&&(p=x.largestBatchId),a.get(P)?V.resolve():this.remoteDocumentCache.getEntry(t,P).next(O=>{g=g.insert(P,O)}))).next(()=>this.populateOverlays(t,y,a)).next(()=>this.computeViews(t,g,y,Bt())).next(P=>({batchId:p,changes:kl(P)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(i=>{let s=Bi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const a=e.collectionGroup;let u=Bi();return this.indexManager.getCollectionParents(t,a).next(p=>V.forEach(p,g=>{const y=function(x,O){return new as(O,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(e,g.child(a));return this.getDocumentsMatchingCollectionQuery(t,y,i,s).next(P=>{P.forEach((x,O)=>{u=u.insert(x,O)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,a,s))).next(u=>{a.forEach((g,y)=>{const P=y.getKey();u.get(P)===null&&(u=u.insert(P,oe.newInvalidDocument(P)))});let p=Bi();return u.forEach((g,y)=>{const P=a.get(g);P!==void 0&&Fr(P.mutation,y,le.empty(),Et.now()),yo(e,y)&&(p=p.insert(g,y))}),p})}}/**
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
 */class Lf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return V.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:rr(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:xf(s.bundledQuery),readTime:rr(s.readTime)}}(e)),V.resolve()}}/**
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
 */class Ff{constructor(){this.overlays=new Kt(q.comparator),this.hr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Rn();return V.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,a)=>{this.ht(t,e,a)}),V.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.hr.delete(i)),V.resolve()}getOverlaysForCollection(t,e,i){const s=Rn(),a=e.length+1,u=new q(e.child("")),p=this.overlays.getIteratorFrom(u);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!e.isPrefixOf(y.path))break;y.path.length===a&&g.largestBatchId>i&&s.set(g.getKey(),g)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let a=new Kt((y,P)=>y-P);const u=this.overlays.getIterator();for(;u.hasNext();){const y=u.getNext().value;if(y.getKey().getCollectionGroup()===e&&y.largestBatchId>i){let P=a.get(y.largestBatchId);P===null&&(P=Rn(),a=a.insert(y.largestBatchId,P)),P.set(y.getKey(),y)}}const p=Rn(),g=a.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,P)=>p.set(y,P)),!(p.size()>=s)););return V.resolve(p)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new mf(e,i));let a=this.hr.get(e);a===void 0&&(a=Bt(),this.hr.set(e,a)),this.hr.set(e,a.add(i.key))}}/**
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
 */class _o{constructor(){this.Pr=new jt(Ct.Ir),this.Tr=new jt(Ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new Ct(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new Ct(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new q(new mt([])),i=new Ct(e,t),s=new Ct(e,t+1),a=[];return this.Tr.forEachInRange([i,s],u=>{this.Ar(u),a.push(u.key)}),a}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new q(new mt([])),i=new Ct(e,t),s=new Ct(e,t+1);let a=Bt();return this.Tr.forEachInRange([i,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Ct(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Ct{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return q.comparator(t.key,e.key)||ot(t.pr,e.pr)}static Er(t,e){return ot(t.pr,e.pr)||q.comparator(t.key,e.key)}}/**
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
 */class Bf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new jt(Ct.Ir)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const a=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new pf(a,e,i,s);this.mutationQueue.push(u);for(const p of s)this.wr=this.wr.add(new Ct(p.key,a)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),a=s<0?0:s;return V.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Ct(e,0),s=new Ct(e,Number.POSITIVE_INFINITY),a=[];return this.wr.forEachInRange([i,s],u=>{const p=this.Sr(u.pr);a.push(p)}),V.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new jt(ot);return e.forEach(s=>{const a=new Ct(s,0),u=new Ct(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([a,u],p=>{i=i.add(p.pr)})}),V.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let a=i;q.isDocumentKey(a)||(a=a.child(""));const u=new Ct(new q(a),0);let p=new jt(ot);return this.wr.forEachWhile(g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===s&&(p=p.add(g.pr)),!0)},u),V.resolve(this.Dr(p))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){St(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return V.forEach(e.mutations,s=>{const a=new Ct(s.key,e.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new Ct(e,0),s=this.wr.firstAfterOrEqual(i);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class jf{constructor(t){this.vr=t,this.docs=function(){return new Kt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),a=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return V.resolve(i?i.document.mutableCopy():oe.newInvalidDocument(e))}getEntries(t,e){let i=Zi();return e.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():oe.newInvalidDocument(s))}),V.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let a=Zi();const u=e.path,p=new q(u.child("")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:P}}=g.getNext();if(!u.isPrefixOf(y.path))break;y.path.length>u.length+1||Rd(Sd(P),i)<=0||(s.has(P.key)||yo(e,P))&&(a=a.insert(P.key,P.mutableCopy()))}return V.resolve(a)}getAllFromCollectionGroup(t,e,i,s){W()}Fr(t,e){return V.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Uf(this)}getSize(t){return V.resolve(this.size)}}class Uf extends Of{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),V.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class $f{constructor(t){this.persistence=t,this.Mr=new ur(e=>go(e),wo),this.lastRemoteSnapshotVersion=ft.min(),this.highestTargetId=0,this.Or=0,this.Nr=new _o,this.targetCount=0,this.Lr=lr.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),V.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new lr(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.qn(e),V.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,i){let s=0;const a=[];return this.Mr.forEach((u,p)=>{p.sequenceNumber<=e&&i.get(p.targetId)===null&&(this.Mr.delete(u),a.push(this.removeMatchingKeysForTargetId(t,p.targetId)),s++)}),V.waitFor(a).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return V.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),V.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),V.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return V.resolve(i)}containsKey(t,e){return V.resolve(this.Nr.containsKey(e))}}/**
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
 */class Hf{constructor(t,e){this.Br={},this.overlays={},this.kr=new wl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new $f(this),this.indexManager=new Vf,this.remoteDocumentCache=function(s){return new jf(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new kf(e),this.$r=new Lf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ff,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new Bf(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){F("MemoryPersistence","Starting transaction:",t);const s=new qf(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(a=>this.referenceDelegate.Wr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Gr(t,e){return V.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class qf extends xd{constructor(t){super(),this.currentSequenceNumber=t}}class bo{constructor(t){this.persistence=t,this.zr=new _o,this.jr=null}static Hr(t){return new bo(t)}get Jr(){if(this.jr)return this.jr;throw W()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),V.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),V.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.Jr.add(a.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,i=>{const s=q.fromPath(i);return this.Yr(t,s).next(a=>{a||e.removeEntry(s,ft.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return V.or([()=>V.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Eo{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=Bt(),s=Bt();for(const a of e.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Eo(t,e.fromCache,i,s)}}/**
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
 */class zf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Gf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return eh()?8:Vd(Ju())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const a={result:null};return this.ji(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Hi(t,e,s,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new zf;return this.Ji(t,e,u).next(p=>{if(a.result=p,this.Ui)return this.Yi(t,e,u,p.size)})}).next(()=>a.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(Vr()<=J.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Dr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(Vr()<=J.DEBUG&&F("QueryEngine","Query:",Dr(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Vr()<=J.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Dr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vn(e))):V.resolve())}ji(t,e){if(Ta(e))return V.resolve(null);let i=Vn(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ro(e,null,"F"),i=Vn(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(a=>{const u=Bt(...a);return this.zi.getDocuments(t,u).next(p=>this.indexManager.getMinOffset(t,i).next(g=>{const y=this.Zi(e,p);return this.Xi(e,y,u,g.readTime)?this.ji(t,ro(e,null,"F")):this.es(t,y,e,g)}))})))}Hi(t,e,i,s){return Ta(e)||s.isEqual(ft.min())?V.resolve(null):this.zi.getDocuments(t,i).next(a=>{const u=this.Zi(e,a);return this.Xi(e,u,i,s)?V.resolve(null):(Vr()<=J.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dr(e)),this.es(t,u,e,Pd(s,-1)).next(p=>p))})}Zi(t,e){let i=new jt(Jd(t));return e.forEach((s,a)=>{yo(t,a)&&(i=i.add(a))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ji(t,e,i){return Vr()<=J.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Dr(e)),this.zi.getDocumentsMatchingQuery(t,e,rn.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */class Kf{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Kt(ot),this.rs=new ur(a=>go(a),wo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Wf(n,t,e,i){return new Kf(n,t,e,i)}async function Hl(n,t){const e=ut(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],p=[];let g=Bt();for(const y of s){u.push(y.batchId);for(const P of y.mutations)g=g.add(P.key)}for(const y of a){p.push(y.batchId);for(const P of y.mutations)g=g.add(P.key)}return e.localDocuments.getDocuments(i,g).next(y=>({us:y,removedBatchIds:u,addedBatchIds:p}))})})}function Qf(n,t){const e=ut(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),a=e.os.newChangeBuffer({trackRemovals:!0});return function(p,g,y,P){const x=y.batch,O=x.keys();let L=V.resolve();return O.forEach(B=>{L=L.next(()=>P.getEntry(g,B)).next(H=>{const j=y.docVersions.get(B);St(j!==null),H.version.compareTo(j)<0&&(x.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),P.addEntry(H)))})}),L.next(()=>p.mutationQueue.removeMutationBatch(g,x))}(e,i,t,a).next(()=>a.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(p){let g=Bt();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Xf(n){const t=ut(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Yf(n,t){const e=ut(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ra{constructor(){this.activeTargetIds=sf()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jf{constructor(){this.no=new Ra,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ra,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Zf{io(t){}shutdown(){}}/**
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
 */class ka{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ji=null;function $s(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
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
 */const tp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ep{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const Lt="WebChannelConnection";class np extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${a}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Do(){return!1}Co(e,i,s,a,u){const p=$s(),g=this.vo(e,i.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${p}:`,g,s);const y={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(y,a,u),this.Mo(e,g,y,s).then(P=>(F("RestConnection",`Received RPC '${e}' ${p}: `,P),P),P=>{throw Ki("RestConnection",`RPC '${e}' ${p} failed with error: `,P,"url: ",g,"request:",s),P})}xo(e,i,s,a,u,p){return this.Co(e,i,s,a,u)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>e[u]=a),s&&s.headers.forEach((a,u)=>e[u]=a)}vo(e,i){const s=tp[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const a=$s();return new Promise((u,p)=>{const g=new ll;g.setWithCredentials(!0),g.listenOnce(ul.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Ui.NO_ERROR:const P=g.getResponseJson();F(Lt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(P)),u(P);break;case Ui.TIMEOUT:F(Lt,`RPC '${t}' ${a} timed out`),p(new U(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ui.HTTP_ERROR:const x=g.getStatus();if(F(Lt,`RPC '${t}' ${a} failed with status:`,x,"response text:",g.getResponseText()),x>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const L=O==null?void 0:O.error;if(L&&L.status&&L.message){const B=function(j){const tt=j.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(tt)>=0?tt:D.UNKNOWN}(L.status);p(new U(B,L.message))}else p(new U(D.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new U(D.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{F(Lt,`RPC '${t}' ${a} completed.`)}});const y=JSON.stringify(s);F(Lt,`RPC '${t}' ${a} sending request:`,s),g.send(e,"POST",y,i,15)})}Oo(t,e,i){const s=$s(),a=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=fl(),p=dl(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.xmlHttpFactory=new cl({})),this.Fo(g.initMessageHeaders,e,i),g.encodeInitMessageHeaders=!0;const P=a.join("");F(Lt,`Creating RPC '${t}' stream ${s}: ${P}`,g);const x=u.createWebChannel(P,g);let O=!1,L=!1;const B=new ep({lo:j=>{L?F(Lt,`Not sending because RPC '${t}' stream ${s} is closed:`,j):(O||(F(Lt,`Opening RPC '${t}' stream ${s} transport.`),x.open(),O=!0),F(Lt,`RPC '${t}' stream ${s} sending:`,j),x.send(j))},ho:()=>x.close()}),H=(j,tt,at)=>{j.listen(tt,lt=>{try{at(lt)}catch(Tt){setTimeout(()=>{throw Tt},0)}})};return H(x,Or.EventType.OPEN,()=>{L||(F(Lt,`RPC '${t}' stream ${s} transport opened.`),B.mo())}),H(x,Or.EventType.CLOSE,()=>{L||(L=!0,F(Lt,`RPC '${t}' stream ${s} transport closed`),B.po())}),H(x,Or.EventType.ERROR,j=>{L||(L=!0,Ki(Lt,`RPC '${t}' stream ${s} transport errored:`,j),B.po(new U(D.UNAVAILABLE,"The operation could not be completed")))}),H(x,Or.EventType.MESSAGE,j=>{var tt;if(!L){const at=j.data[0];St(!!at);const lt=at,Tt=lt.error||((tt=lt[0])===null||tt===void 0?void 0:tt.error);if(Tt){F(Lt,`RPC '${t}' stream ${s} received error:`,Tt);const ve=Tt.status;let Dt=function(b){const E=vt[b];if(E!==void 0)return wf(E)}(ve),I=Tt.message;Dt===void 0&&(Dt=D.INTERNAL,I="Unknown error status: "+ve+" with message "+Tt.message),L=!0,B.po(new U(Dt,I)),x.close()}else F(Lt,`RPC '${t}' stream ${s} received:`,at),B.yo(at)}}),H(p,hl.STAT_EVENT,j=>{j.stat===Zs.PROXY?F(Lt,`RPC '${t}' stream ${s} detected buffering proxy`):j.stat===Zs.NOPROXY&&F(Lt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{B.fo()},0),B}}function Hs(){return typeof document<"u"?document:null}/**
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
 */function us(n){return new yf(n,!0)}/**
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
 */class ql{constructor(t,e,i=1e3,s=1.5,a=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=a,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class rp{constructor(t,e,i,s,a,u,p,g){this.oi=t,this.Go=i,this.zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ql(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Nn(e.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new U(D.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ip extends rp{constructor(t,e,i,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=a,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(St(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Cf(t.writeResults,t.commitTime),i=rr(t.commitTime);return this.listener.A_(i,e)}return St(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Tf(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Af(this.serializer,i))};this.i_(e)}}/**
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
 */class sp extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new U(D.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,so(e,i),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(D.UNKNOWN,a.toString())})}xo(t,e,i,s,a){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,p])=>this.connection.xo(t,so(e,i),s,u,p,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new U(D.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class op{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Nn(e),this.y_=!1):F("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class ap{constructor(t,e,i,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=a,this.O_.io(u=>{i.enqueueAndForget(async()=>{Yr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(g){const y=ut(g);y.M_.add(4),await Xr(y),y.N_.set("Unknown"),y.M_.delete(4),await hs(y)}(this))})}),this.N_=new op(i,s)}}async function hs(n){if(Yr(n))for(const t of n.x_)await t(!0)}async function Xr(n){for(const t of n.x_)await t(!1)}function Yr(n){return ut(n).M_.size===0}async function zl(n,t,e){if(!os(t))throw t;n.M_.add(1),await Xr(n),n.N_.set("Offline"),e||(e=()=>Xf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await hs(n)})}function Gl(n,t){return t().catch(e=>zl(n,e,t))}async function ds(n){const t=ut(n),e=on(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;lp(t);)try{const s=await Yf(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,cp(t,s)}catch(s){await zl(t,s)}Kl(t)&&Wl(t)}function lp(n){return Yr(n)&&n.v_.length<10}function cp(n,t){n.v_.push(t);const e=on(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Kl(n){return Yr(n)&&!on(n).Zo()&&n.v_.length>0}function Wl(n){on(n).start()}async function up(n){on(n).V_()}async function hp(n){const t=on(n);for(const e of n.v_)t.d_(e.mutations)}async function dp(n,t,e){const i=n.v_.shift(),s=vo.from(i,t,e);await Gl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ds(n)}async function fp(n,t){t&&on(n).E_&&await async function(i,s){if(function(u){return gf(u)&&u!==D.ABORTED}(s.code)){const a=i.v_.shift();on(i).t_(),await Gl(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await ds(i)}}(n,t),Kl(n)&&Wl(n)}async function xa(n,t){const e=ut(n);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const i=Yr(e);e.M_.add(3),await Xr(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await hs(e)}async function pp(n,t){const e=ut(n);t?(e.M_.delete(2),await hs(e)):t||(e.M_.add(2),await Xr(e),e.N_.set("Unknown"))}function on(n){return n.k_||(n.k_=function(e,i,s){const a=ut(e);return a.f_(),new ip(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:up.bind(null,n),Ao:fp.bind(null,n),R_:hp.bind(null,n),A_:dp.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await ds(n)):(await n.k_.stop(),n.v_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class To{constructor(t,e,i,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,a){const u=Date.now()+i,p=new To(t,e,u,s,a);return p.start(i),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ql(n,t){if(Nn("AsyncQueue",`${t}: ${n}`),os(n))return new U(D.UNAVAILABLE,`${t}: ${n}`);throw n}class mp{constructor(){this.queries=new ur(t=>Sl(t),Pl),this.onlineState="Unknown",this.z_=new Set}}function gp(n){n.z_.forEach(t=>{t.next()})}var Va,Da;(Da=Va||(Va={})).J_="default",Da.Cache="cache";class wp{constructor(t,e,i,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new ur(p=>Sl(p),Pl),this.Da=new Map,this.Ca=new Set,this.va=new Kt(q.comparator),this.Fa=new Map,this.Ma=new _o,this.xa={},this.Oa=new Map,this.Na=lr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function yp(n,t,e){const i=Ep(n);try{const s=await function(u,p){const g=ut(u),y=Et.now(),P=p.reduce((L,B)=>L.add(B.key),Bt());let x,O;return g.persistence.runTransaction("Locally write mutations","readwrite",L=>{let B=Zi(),H=Bt();return g.os.getEntries(L,P).next(j=>{B=j,B.forEach((tt,at)=>{at.isValidDocument()||(H=H.add(tt))})}).next(()=>g.localDocuments.getOverlayedDocuments(L,B)).next(j=>{x=j;const tt=[];for(const at of p){const lt=df(at,x.get(at.key).overlayedDocument);lt!=null&&tt.push(new jn(at.key,lt,_l(lt.value.mapValue),De.exists(!0)))}return g.mutationQueue.addMutationBatch(L,y,tt,p)}).next(j=>{O=j;const tt=j.applyToLocalDocumentSet(x,H);return g.documentOverlayCache.saveOverlays(L,j.batchId,tt)})}).then(()=>({batchId:O.batchId,changes:kl(x)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,p,g){let y=u.xa[u.currentUser.toKey()];y||(y=new Kt(ot)),y=y.insert(p,g),u.xa[u.currentUser.toKey()]=y}(i,s.batchId,e),await fs(i,s.changes),await ds(i.remoteStore)}catch(s){const a=Ql(s,"Failed to persist write");e.reject(a)}}function Oa(n,t,e){const i=ut(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((a,u)=>{const p=u.view.j_(t);p.snapshot&&s.push(p.snapshot)}),function(u,p){const g=ut(u);g.onlineState=p;let y=!1;g.queries.forEach((P,x)=>{for(const O of x.U_)O.j_(p)&&(y=!0)}),y&&gp(g)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function vp(n,t){const e=ut(n),i=t.batch.batchId;try{const s=await Qf(e.localStore,t);Yl(e,i,null),Xl(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await fs(e,s)}catch(s){await gl(s)}}async function _p(n,t,e){const i=ut(n);try{const s=await function(u,p){const g=ut(u);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let P;return g.mutationQueue.lookupMutationBatch(y,p).next(x=>(St(x!==null),P=x.keys(),g.mutationQueue.removeMutationBatch(y,x))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,P,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,P)).next(()=>g.localDocuments.getDocuments(y,P))})}(i.localStore,t);Yl(i,t,e),Xl(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await fs(i,s)}catch(s){await gl(s)}}function Xl(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Yl(n,t,e){const i=ut(n);let s=i.xa[i.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function fs(n,t,e){const i=ut(n),s=[],a=[],u=[];i.ba.isEmpty()||(i.ba.forEach((p,g)=>{u.push(i.Ba(g,t,e).then(y=>{if((y||e)&&i.isPrimaryClient){const P=y&&!y.fromCache;i.sharedClientState.updateQueryState(g.targetId,P?"current":"not-current")}if(y){s.push(y);const P=Eo.Ki(g.targetId,y);a.push(P)}}))}),await Promise.all(u),i.Sa.h_(s),await async function(g,y){const P=ut(g);try{await P.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>V.forEach(y,O=>V.forEach(O.qi,L=>P.persistence.referenceDelegate.addReference(x,O.targetId,L)).next(()=>V.forEach(O.Qi,L=>P.persistence.referenceDelegate.removeReference(x,O.targetId,L)))))}catch(x){if(!os(x))throw x;F("LocalStore","Failed to update sequence numbers: "+x)}for(const x of y){const O=x.targetId;if(!x.fromCache){const L=P.ns.get(O),B=L.snapshotVersion,H=L.withLastLimboFreeSnapshotVersion(B);P.ns=P.ns.insert(O,H)}}}(i.localStore,a))}async function bp(n,t){const e=ut(n);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const i=await Hl(e.localStore,t);e.currentUser=t,function(a,u){a.Oa.forEach(p=>{p.forEach(g=>{g.reject(new U(D.CANCELLED,u))})}),a.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await fs(e,i.us)}}function Ep(n){const t=ut(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_p.bind(null,t),t}class Ma{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=us(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Wf(this.persistence,new Gf,t.initialUser,this.serializer)}createPersistence(t){return new Hf(bo.Hr,this.serializer)}createSharedClientState(t){return new Jf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Oa(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bp.bind(null,this.syncEngine),await pp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mp}()}createDatastore(t){const e=us(t.databaseInfo.databaseId),i=function(a){return new np(a)}(t.databaseInfo);return function(a,u,p,g){return new sp(a,u,p,g)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,a,u,p){return new ap(i,s,a,u,p)}(this.localStore,this.datastore,t.asyncQueue,e=>Oa(this.syncEngine,e,0),function(){return ka.D()?new ka:new Zf}())}createSyncEngine(t,e){return function(s,a,u,p,g,y,P){const x=new wp(s,a,u,p,g,y);return P&&(x.La=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=ut(i);F("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Xr(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Ip{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=Ft.UNAUTHENTICATED,this.clientId=ml.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ql(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function qs(n,t){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Hl(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Na(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Cp(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>xa(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>xa(t.remoteStore,s)),n._onlineComponents=t}function Ap(n){return n.name==="FirebaseError"?n.code===D.FAILED_PRECONDITION||n.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Cp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ap(e))throw e;Ki("Error using user provided cache. Falling back to memory cache: "+e),await qs(n,new Ma)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await qs(n,new Ma);return n._offlineComponents}async function Pp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Na(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Na(n,new Tp))),n._onlineComponents}function Sp(n){return Pp(n).then(t=>t.syncEngine)}/**
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
 */function Jl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const La=new Map;/**
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
 */function Zl(n,t,e){if(!e)throw new U(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Rp(n,t,e,i){if(t===!0&&i===!0)throw new U(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Fa(n){if(!q.isDocumentKey(n))throw new U(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ba(n){if(q.isDocumentKey(n))throw new U(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function tc(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new U(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Io(n);throw new U(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ja{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new U(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Rp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jl((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ps{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ja({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new U(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ja(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new yd;switch(i.type){case"firstParty":return new Ed(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new U(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=La.get(e);i&&(F("ComponentProvider","Removing Datastore"),La.delete(e),i.terminate())}(this),Promise.resolve()}}function kp(n,t,e,i={}){var s;const a=(n=tc(n,ps))._getSettings(),u=`${t}:${e}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let p,g;if(typeof i.mockUserToken=="string")p=i.mockUserToken,g=Ft.MOCK_USER;else{p=Yu(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new U(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ft(y)}n._authCredentials=new vd(new pl(p,g))}}/**
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
 */class Ao{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ao(this.firestore,t,this._query)}}class Oe{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Oe(this.firestore,t,this._key)}}class en extends Ao{constructor(t,e,i){super(t,e,Qd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Oe(this.firestore,null,new q(t))}withConverter(t){return new en(this.firestore,t,this._path)}}function xp(n,t,...e){if(n=Dn(n),Zl("collection","path",t),n instanceof ps){const i=mt.fromString(t,...e);return Ba(i),new en(n,null,i)}{if(!(n instanceof Oe||n instanceof en))throw new U(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(mt.fromString(t,...e));return Ba(i),new en(n.firestore,null,i)}}function Vp(n,t,...e){if(n=Dn(n),arguments.length===1&&(t=ml.newId()),Zl("doc","path",t),n instanceof ps){const i=mt.fromString(t,...e);return Fa(i),new Oe(n,null,new q(i))}{if(!(n instanceof Oe||n instanceof en))throw new U(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(mt.fromString(t,...e));return Fa(i),new Oe(n.firestore,n instanceof en?n.converter:null,new q(i))}}/**
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
 */class Dp{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ql(this,"async_queue_retry"),this.hu=()=>{const e=Hs();e&&F("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new xn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!os(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(u){let p=u.message||"";return u.stack&&(p=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),p}(i);throw Nn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=To.createAndSchedule(this,t,e,i,a=>this.Eu(a));return this._u.push(s),s}Pu(){this.au&&W()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class ec extends ps{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Dp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nc(this),this._firestoreClient.terminate()}}function Op(n,t){const e=typeof n=="object"?n:il(),i=typeof n=="string"?n:"(default)",s=Kr(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=Qu("firestore");a&&kp(s,...a)}return s}function Mp(n){return n._firestoreClient||nc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function nc(n){var t,e,i;const s=n._freezeSettings(),a=function(p,g,y,P){return new Nd(p,g,y,P.host,P.ssl,P.experimentalForceLongPolling,P.experimentalAutoDetectLongPolling,Jl(P.experimentalLongPollingOptions),P.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Ip(n._authCredentials,n._appCheckCredentials,n._queue,a),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Gr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gr(Ne.fromBase64String(t))}catch(e){throw new U(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Gr(Ne.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class rc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new U(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ic{constructor(t){this._methodName=t}}/**
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
 */class sc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new U(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new U(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}}/**
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
 */const Np=/^__.*__$/;class Lp{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new jn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qr(t,this.data,e,this.fieldTransforms)}}function oc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Co{constructor(t,e,i,s,a,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.mu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Co(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ns(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(oc(this.fu)&&Np.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Fp{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||us(t)}Fu(t,e,i,s=!1){return new Co({fu:t,methodName:e,vu:i,path:Vt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bp(n){const t=n._freezeSettings(),e=us(n._databaseId);return new Fp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jp(n,t,e,i,s,a={}){const u=n.Fu(a.merge||a.mergeFields?2:0,t,e,s);uc("Data must be an object, but it was:",u,i);const p=lc(i,u);let g,y;if(a.merge)g=new le(u.fieldMask),y=u.fieldTransforms;else if(a.mergeFields){const P=[];for(const x of a.mergeFields){const O=Up(t,x,e);if(!u.contains(O))throw new U(D.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);qp(P,O)||P.push(O)}g=new le(P),y=u.fieldTransforms.filter(x=>g.covers(x.field))}else g=null,y=u.fieldTransforms;return new Lp(new ae(p),g,y)}function ac(n,t){if(cc(n=Dn(n)))return uc("Unsupported field value:",t,n),lc(n,t);if(n instanceof ic)return function(i,s){if(!oc(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const a=[];let u=0;for(const p of i){let g=ac(p,s.bu(u));g==null&&(g={nullValue:"NULL_VALUE"}),a.push(g),u++}return{arrayValue:{values:a}}}(n,t)}return function(i,s){if((i=Dn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return of(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Et.fromDate(i);return{timestampValue:io(s.serializer,a)}}if(i instanceof Et){const a=new Et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:io(s.serializer,a)}}if(i instanceof sc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Gr)return{bytesValue:vf(s.serializer,i._byteString)};if(i instanceof Oe){const a=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Ul(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${Io(i)}`)}(n,t)}function lc(n,t){const e={};return yl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wr(n,(i,s)=>{const a=ac(s,t.pu(i));a!=null&&(e[i]=a)}),{mapValue:{fields:e}}}function cc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof sc||n instanceof Gr||n instanceof Oe||n instanceof ic)}function uc(n,t,e){if(!cc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Io(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function Up(n,t,e){if((t=Dn(t))instanceof rc)return t._internalPath;if(typeof t=="string")return Hp(n,t);throw ns("Field path arguments must be of type string or ",n,!1,void 0,e)}const $p=new RegExp("[~\\*/\\[\\]]");function Hp(n,t,e){if(t.search($p)>=0)throw ns(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new rc(...t.split("."))._internalPath}catch{throw ns(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ns(n,t,e,i,s){const a=i&&!i.isEmpty(),u=s!==void 0;let p=`Function ${t}() called with invalid data`;e&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(a||u)&&(g+=" (found",a&&(g+=` in field ${i}`),u&&(g+=` in document ${s}`),g+=")"),new U(D.INVALID_ARGUMENT,p+n+g)}function qp(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function zp(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Gp(n,t){const e=tc(n.firestore,ec),i=Vp(n),s=zp(n.converter,t);return Kp(e,[jp(Bp(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,De.exists(!1))]).then(()=>i)}function Kp(n,t){return function(i,s){const a=new xn;return i.asyncQueue.enqueueAndForget(async()=>yp(await Sp(i),s,a)),a.promise}(Mp(n),t)}(function(t,e=!0){(function(s){cr=s})(od),nn(new Me("firestore",(i,{instanceIdentifier:s,options:a})=>{const u=i.getProvider("app").getImmediate(),p=new ec(new _d(i.getProvider("auth-internal")),new Id(i.getProvider("app-check-internal")),function(y,P){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new U(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(y.options.projectId,P)}(u,s),u);return a=Object.assign({useFetchStreams:e},a),p._setSettings(a),p},"PUBLIC").setMultipleInstances(!0)),we(ga,"4.6.3",t),we(ga,"4.6.3","esm2017")})();const hc="@firebase/installations",Po="0.6.7";/**
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
 */const dc=1e4,fc=`w:${Po}`,pc="FIS_v2",Wp="https://firebaseinstallations.googleapis.com/v1",Qp=60*60*1e3,Xp="installations",Yp="Installations";/**
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
 */const Jp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fn=new ss(Xp,Yp,Jp);function mc(n){return n instanceof an&&n.code.includes("request-failed")}/**
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
 */function gc({projectId:n}){return`${Wp}/projects/${n}/installations`}function wc(n){return{token:n.token,requestStatus:2,expiresIn:tm(n.expiresIn),creationTime:Date.now()}}async function yc(n,t){const i=(await t.json()).error;return Fn.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function vc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Zp(n,{refreshToken:t}){const e=vc(n);return e.append("Authorization",em(t)),e}async function _c(n){const t=await n();return t.status>=500&&t.status<600?n():t}function tm(n){return Number(n.replace("s","000"))}function em(n){return`${pc} ${n}`}/**
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
 */async function nm({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=gc(n),s=vc(n),a=t.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&s.append("x-firebase-client",y)}const u={fid:e,authVersion:pc,appId:n.appId,sdkVersion:fc},p={method:"POST",headers:s,body:JSON.stringify(u)},g=await _c(()=>fetch(i,p));if(g.ok){const y=await g.json();return{fid:y.fid||e,registrationStatus:2,refreshToken:y.refreshToken,authToken:wc(y.authToken)}}else throw await yc("Create Installation",g)}/**
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
 */function bc(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function rm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const im=/^[cdef][\w-]{21}$/,ao="";function sm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=om(n);return im.test(e)?e:ao}catch{return ao}}function om(n){return rm(n).substr(0,22)}/**
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
 */function ms(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ec=new Map;function Tc(n,t){const e=ms(n);Ic(e,t),am(e,t)}function Ic(n,t){const e=Ec.get(n);if(e)for(const i of e)i(t)}function am(n,t){const e=lm();e&&e.postMessage({key:n,fid:t}),cm()}let kn=null;function lm(){return!kn&&"BroadcastChannel"in self&&(kn=new BroadcastChannel("[Firebase] FID Change"),kn.onmessage=n=>{Ic(n.data.key,n.data.fid)}),kn}function cm(){Ec.size===0&&kn&&(kn.close(),kn=null)}/**
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
 */const um="firebase-installations-database",hm=1,Bn="firebase-installations-store";let zs=null;function So(){return zs||(zs=nl(um,hm,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Bn)}}})),zs}async function rs(n,t){const e=ms(n),s=(await So()).transaction(Bn,"readwrite"),a=s.objectStore(Bn),u=await a.get(e);return await a.put(t,e),await s.done,(!u||u.fid!==t.fid)&&Tc(n,t.fid),t}async function Ac(n){const t=ms(n),i=(await So()).transaction(Bn,"readwrite");await i.objectStore(Bn).delete(t),await i.done}async function gs(n,t){const e=ms(n),s=(await So()).transaction(Bn,"readwrite"),a=s.objectStore(Bn),u=await a.get(e),p=t(u);return p===void 0?await a.delete(e):await a.put(p,e),await s.done,p&&(!u||u.fid!==p.fid)&&Tc(n,p.fid),p}/**
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
 */async function Ro(n){let t;const e=await gs(n.appConfig,i=>{const s=dm(i),a=fm(n,s);return t=a.registrationPromise,a.installationEntry});return e.fid===ao?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function dm(n){const t=n||{fid:sm(),registrationStatus:0};return Cc(t)}function fm(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Fn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=pm(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:mm(n)}:{installationEntry:t}}async function pm(n,t){try{const e=await nm(n,t);return rs(n.appConfig,e)}catch(e){throw mc(e)&&e.customData.serverCode===409?await Ac(n.appConfig):await rs(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function mm(n){let t=await Ua(n.appConfig);for(;t.registrationStatus===1;)await bc(100),t=await Ua(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Ro(n);return i||e}return t}function Ua(n){return gs(n,t=>{if(!t)throw Fn.create("installation-not-found");return Cc(t)})}function Cc(n){return gm(n)?{fid:n.fid,registrationStatus:0}:n}function gm(n){return n.registrationStatus===1&&n.registrationTime+dc<Date.now()}/**
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
 */async function wm({appConfig:n,heartbeatServiceProvider:t},e){const i=ym(n,e),s=Zp(n,e),a=t.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&s.append("x-firebase-client",y)}const u={installation:{sdkVersion:fc,appId:n.appId}},p={method:"POST",headers:s,body:JSON.stringify(u)},g=await _c(()=>fetch(i,p));if(g.ok){const y=await g.json();return wc(y)}else throw await yc("Generate Auth Token",g)}function ym(n,{fid:t}){return`${gc(n)}/${t}/authTokens:generate`}/**
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
 */async function ko(n,t=!1){let e;const i=await gs(n.appConfig,a=>{if(!Pc(a))throw Fn.create("not-registered");const u=a.authToken;if(!t&&bm(u))return a;if(u.requestStatus===1)return e=vm(n,t),a;{if(!navigator.onLine)throw Fn.create("app-offline");const p=Tm(a);return e=_m(n,p),p}});return e?await e:i.authToken}async function vm(n,t){let e=await $a(n.appConfig);for(;e.authToken.requestStatus===1;)await bc(100),e=await $a(n.appConfig);const i=e.authToken;return i.requestStatus===0?ko(n,t):i}function $a(n){return gs(n,t=>{if(!Pc(t))throw Fn.create("not-registered");const e=t.authToken;return Im(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function _m(n,t){try{const e=await wm(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await rs(n.appConfig,i),e}catch(e){if(mc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Ac(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rs(n.appConfig,i)}throw e}}function Pc(n){return n!==void 0&&n.registrationStatus===2}function bm(n){return n.requestStatus===2&&!Em(n)}function Em(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Qp}function Tm(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Im(n){return n.requestStatus===1&&n.requestTime+dc<Date.now()}/**
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
 */async function Am(n){const t=n,{installationEntry:e,registrationPromise:i}=await Ro(t);return i?i.catch(console.error):ko(t).catch(console.error),e.fid}/**
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
 */async function Cm(n,t=!1){const e=n;return await Pm(e),(await ko(e,t)).token}async function Pm(n){const{registrationPromise:t}=await Ro(n);t&&await t}/**
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
 */function Sm(n){if(!n||!n.options)throw Gs("App Configuration");if(!n.name)throw Gs("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Gs(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Gs(n){return Fn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Sc="installations",Rm="installations-internal",km=n=>{const t=n.getProvider("app").getImmediate(),e=Sm(t),i=Kr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},xm=n=>{const t=n.getProvider("app").getImmediate(),e=Kr(t,Sc).getImmediate();return{getId:()=>Am(e),getToken:s=>Cm(e,s)}};function Vm(){nn(new Me(Sc,km,"PUBLIC")),nn(new Me(Rm,xm,"PRIVATE"))}Vm();we(hc,Po);we(hc,Po,"esm2017");/**
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
 */const is="analytics",Dm="firebase_id",Om="origin",Mm=60*1e3,Nm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Gt=new co("@firebase/analytics");/**
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
 */const Lm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new ss("analytics","Analytics",Lm);/**
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
 */function Fm(n){if(!n.startsWith(xo)){const t=Xt.create("invalid-gtag-resource",{gtagURL:n});return Gt.warn(t.message),""}return n}function Rc(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Bm(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function jm(n,t){const e=Bm("firebase-js-sdk-policy",{createScriptURL:Fm}),i=document.createElement("script"),s=`${xo}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Um(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function $m(n,t,e,i,s,a){const u=i[s];try{if(u)await t[u];else{const g=(await Rc(e)).find(y=>y.measurementId===s);g&&await t[g.appId]}}catch(p){Gt.error(p)}n("config",s,a)}async function Hm(n,t,e,i,s){try{let a=[];if(s&&s.send_to){let u=s.send_to;Array.isArray(u)||(u=[u]);const p=await Rc(e);for(const g of u){const y=p.find(x=>x.measurementId===g),P=y&&t[y.appId];if(P)a.push(P);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),n("event",i,s||{})}catch(a){Gt.error(a)}}function qm(n,t,e,i){async function s(a,...u){try{if(a==="event"){const[p,g]=u;await Hm(n,t,e,p,g)}else if(a==="config"){const[p,g]=u;await $m(n,t,e,i,p,g)}else if(a==="consent"){const[p,g]=u;n("consent",p,g)}else if(a==="get"){const[p,g,y]=u;n("get",p,g,y)}else if(a==="set"){const[p]=u;n("set",p)}else n(a,...u)}catch(p){Gt.error(p)}}return s}function zm(n,t,e,i,s){let a=function(...u){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=qm(a,n,t,e),{gtagCore:a,wrappedGtag:window[s]}}function Gm(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(xo)&&e.src.includes(n))return e;return null}/**
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
 */const Km=30,Wm=1e3;class Qm{constructor(t={},e=Wm){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const kc=new Qm;function Xm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ym(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:Xm(i)},a=Nm.replace("{app-id}",e),u=await fetch(a,s);if(u.status!==200&&u.status!==304){let p="";try{const g=await u.json();!((t=g.error)===null||t===void 0)&&t.message&&(p=g.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:p})}return u.json()}async function Jm(n,t=kc,e){const{appId:i,apiKey:s,measurementId:a}=n.options;if(!i)throw Xt.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:i};throw Xt.create("no-api-key")}const u=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new eg;return setTimeout(async()=>{p.abort()},Mm),xc({appId:i,apiKey:s,measurementId:a},u,p,t)}async function xc(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=kc){var a;const{appId:u,measurementId:p}=n;try{await Zm(i,t)}catch(g){if(p)return Gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:p};throw g}try{const g=await Ym(n);return s.deleteThrottleMetadata(u),g}catch(g){const y=g;if(!tg(y)){if(s.deleteThrottleMetadata(u),p)return Gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:p};throw g}const P=Number((a=y==null?void 0:y.customData)===null||a===void 0?void 0:a.httpStatus)===503?oa(e,s.intervalMillis,Km):oa(e,s.intervalMillis),x={throttleEndTimeMillis:Date.now()+P,backoffCount:e+1};return s.setThrottleMetadata(u,x),Gt.debug(`Calling attemptFetch again in ${P} millis`),xc(n,x,i,s)}}function Zm(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),a=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(a),i(Xt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function tg(n){if(!(n instanceof an)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class eg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ng(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const a=await t,u=Object.assign(Object.assign({},i),{send_to:a});n("event",e,u)}}/**
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
 */async function rg(){if(Ja())try{await Za()}catch(n){return Gt.warn(Xt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Gt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ig(n,t,e,i,s,a,u){var p;const g=Jm(n);g.then(L=>{e[L.measurementId]=L.appId,n.options.measurementId&&L.measurementId!==n.options.measurementId&&Gt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>Gt.error(L)),t.push(g);const y=rg().then(L=>{if(L)return i.getId()}),[P,x]=await Promise.all([g,y]);Gm(a)||jm(a,P.measurementId),s("js",new Date);const O=(p=u==null?void 0:u.config)!==null&&p!==void 0?p:{};return O[Om]="firebase",O.update=!0,x!=null&&(O[Dm]=x),s("config",P.measurementId,O),P.measurementId}/**
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
 */class sg{constructor(t){this.app=t}_delete(){return delete Br[this.app.options.appId],Promise.resolve()}}let Br={},Ha=[];const qa={};let Ks="dataLayer",og="gtag",za,Vc,Ga=!1;function ag(){const n=[];if(th()&&n.push("This is a browser extension environment."),nh()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=Xt.create("invalid-analytics-context",{errorInfo:t});Gt.warn(e.message)}}function lg(n,t,e){ag();const i=n.options.appId;if(!i)throw Xt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(Br[i]!=null)throw Xt.create("already-exists",{id:i});if(!Ga){Um(Ks);const{wrappedGtag:a,gtagCore:u}=zm(Br,Ha,qa,Ks,og);Vc=a,za=u,Ga=!0}return Br[i]=ig(n,Ha,qa,t,za,Ks,e),new sg(n)}function cg(n=il()){n=Dn(n);const t=Kr(n,is);return t.isInitialized()?t.getImmediate():ug(n)}function ug(n,t={}){const e=Kr(n,is);if(e.isInitialized()){const s=e.getImmediate();if(zi(t,e.getOptions()))return s;throw Xt.create("already-initialized")}return e.initialize({options:t})}function hg(n,t,e,i){n=Dn(n),ng(Vc,Br[n.app.options.appId],t,e,i).catch(s=>Gt.error(s))}const Ka="@firebase/analytics",Wa="0.10.4";function dg(){nn(new Me(is,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return lg(i,s,e)},"PUBLIC")),nn(new Me("analytics-internal",n,"PRIVATE")),we(Ka,Wa),we(Ka,Wa,"esm2017");function n(t){try{const e=t.getProvider(is).getImmediate();return{logEvent:(i,s,a)=>hg(e,i,s,a)}}catch(e){throw Xt.create("interop-component-reg-failed",{reason:e})}}}dg();const fg={apiKey:"AIzaSyC_-Q-X27unfJX9zKxaHlon3LIL8IVRU5A",authDomain:"roninmez-001.firebaseapp.com",projectId:"roninmez-001",storageBucket:"roninmez-001.appspot.com",messagingSenderId:"947987712112",appId:"1:947987712112:web:a0123aa15c2047fd9accb5",measurementId:"G-9PT72JDP8E"},Dc=rl(fg);cg(Dc);const pg=Op(Dc);var Je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Oc={exports:{}};/*!
* sweetalert2 v11.11.1
* Released under the MIT License.
*/(function(n,t){(function(e,i){n.exports=i()})(Je,function(){function e(f,o){(o==null||o>f.length)&&(o=f.length);for(var l=0,d=Array(o);l<o;l++)d[l]=f[l];return d}function i(f){if(Array.isArray(f))return f}function s(f){if(Array.isArray(f))return e(f)}function a(f,o,l){if(typeof f=="function"?f===o:f.has(o))return arguments.length<3?o:l;throw new TypeError("Private element is not present on this object")}function u(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function p(f,o,l){return o=tt(o),v(f,lt()?Reflect.construct(o,l||[],tt(f).constructor):o.apply(f,l))}function g(f,o){if(o.has(f))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y(f,o){if(!(f instanceof o))throw new TypeError("Cannot call a class as a function")}function P(f,o){return f.get(a(f,o))}function x(f,o,l){g(f,o),o.set(f,l)}function O(f,o,l){return f.set(a(f,o),l),l}function L(f,o,l){if(lt())return Reflect.construct.apply(null,arguments);var d=[null];d.push.apply(d,o);var w=new(f.bind.apply(f,d));return w}function B(f,o){for(var l=0;l<o.length;l++){var d=o[l];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(f,te(d.key),d)}}function H(f,o,l){return o&&B(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),f}function j(){return j=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(f,o,l){var d=T(f,o);if(d){var w=Object.getOwnPropertyDescriptor(d,o);return w.get?w.get.call(arguments.length<3?f:l):w.value}},j.apply(null,arguments)}function tt(f){return tt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},tt(f)}function at(f,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(o&&o.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),Object.defineProperty(f,"prototype",{writable:!1}),o&&b(f,o)}function lt(){try{var f=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lt=function(){return!!f})()}function Tt(f){if(typeof Symbol<"u"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}function ve(f,o){var l=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(l!=null){var d,w,k,N,z=[],K=!0,pt=!1;try{if(k=(l=l.call(f)).next,o!==0)for(;!(K=(d=k.call(l)).done)&&(z.push(d.value),z.length!==o);K=!0);}catch(Rr){pt=!0,w=Rr}finally{try{if(!K&&l.return!=null&&(N=l.return(),Object(N)!==N))return}finally{if(pt)throw w}}return z}}function Dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(f,o){if(o&&(typeof o=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(f)}function b(f,o){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,d){return l.__proto__=d,l},b(f,o)}function E(f,o){return i(f)||ve(f,o)||Jr(f,o)||Dt()}function T(f,o){for(;!{}.hasOwnProperty.call(f,o)&&(f=tt(f))!==null;);return f}function C(f){return s(f)||Tt(f)||Jr(f)||I()}function _(f,o){if(typeof f!="object"||!f)return f;var l=f[Symbol.toPrimitive];if(l!==void 0){var d=l.call(f,o);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}function te(f){var o=_(f,"string");return typeof o=="symbol"?o:o+""}function dt(f){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},dt(f)}function Jr(f,o){if(f){if(typeof f=="string")return e(f,o);var l={}.toString.call(f).slice(8,-1);return l==="Object"&&f.constructor&&(l=f.constructor.name),l==="Map"||l==="Set"?Array.from(f):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?e(f,o):void 0}}var cn=100,$={},hr=function(){$.previousActiveElement instanceof HTMLElement?($.previousActiveElement.focus(),$.previousActiveElement=null):document.body&&document.body.focus()},Zr=function(o){return new Promise(function(l){if(!o)return l();var d=window.scrollX,w=window.scrollY;$.restoreFocusTimeout=setTimeout(function(){hr(),l()},cn),window.scrollTo(d,w)})},ti="swal2-",ce=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],S=ce.reduce(function(f,o){return f[o]=ti+o,f},{}),ws=["success","warning","info","question","error"],ue=ws.reduce(function(f,o){return f[o]=ti+o,f},{}),ei="SweetAlert2:",Le=function(o){return o.charAt(0).toUpperCase()+o.slice(1)},Ot=function(o){console.warn("".concat(ei," ").concat(dt(o)==="object"?o.join(" "):o))},_e=function(o){console.error("".concat(ei," ").concat(o))},un=[],Un=function(o){un.includes(o)||(un.push(o),Ot(o))},dr=function(o,l){Un('"'.concat(o,'" is deprecated and will be removed in the next major release. Please use "').concat(l,'" instead.'))},Fe=function(o){return typeof o=="function"?o():o},hn=function(o){return o&&typeof o.toPromise=="function"},be=function(o){return hn(o)?o.toPromise():Promise.resolve(o)},$n=function(o){return o&&Promise.resolve(o)===o},Mt=function(){return document.body.querySelector(".".concat(S.container))},dn=function(o){var l=Mt();return l?l.querySelector(o):null},Nt=function(o){return dn(".".concat(o))},Y=function(){return Nt(S.popup)},Be=function(){return Nt(S.icon)},ys=function(){return Nt(S["icon-content"])},Hn=function(){return Nt(S.title)},fn=function(){return Nt(S["html-container"])},fr=function(){return Nt(S.image)},wt=function(){return Nt(S["progress-steps"])},yt=function(){return Nt(S["validation-message"])},Ut=function(){return dn(".".concat(S.actions," .").concat(S.confirm))},Ee=function(){return dn(".".concat(S.actions," .").concat(S.cancel))},he=function(){return dn(".".concat(S.actions," .").concat(S.deny))},vs=function(){return Nt(S["input-label"])},Yt=function(){return dn(".".concat(S.loader))},je=function(){return Nt(S.actions)},pr=function(){return Nt(S.footer)},Ue=function(){return Nt(S["timer-progress-bar"])},mr=function(){return Nt(S.close)},_s=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,pn=function(){var o=Y();if(!o)return[];var l=o.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),d=Array.from(l).sort(function(N,z){var K=parseInt(N.getAttribute("tabindex")||"0"),pt=parseInt(z.getAttribute("tabindex")||"0");return K>pt?1:K<pt?-1:0}),w=o.querySelectorAll(_s),k=Array.from(w).filter(function(N){return N.getAttribute("tabindex")!=="-1"});return C(new Set(d.concat(k))).filter(function(N){return Ht(N)})},qn=function(){return Wt(document.body,S.shown)&&!Wt(document.body,S["toast-shown"])&&!Wt(document.body,S["no-backdrop"])},mn=function(){var o=Y();return o?Wt(o,S.toast):!1},gn=function(){var o=Y();return o?o.hasAttribute("data-loading"):!1},Rt=function(o,l){if(o.textContent="",l){var d=new DOMParser,w=d.parseFromString(l,"text/html"),k=w.querySelector("head");k&&Array.from(k.childNodes).forEach(function(z){o.appendChild(z)});var N=w.querySelector("body");N&&Array.from(N.childNodes).forEach(function(z){z instanceof HTMLVideoElement||z instanceof HTMLAudioElement?o.appendChild(z.cloneNode(!0)):o.appendChild(z)})}},Wt=function(o,l){if(!l)return!1;for(var d=l.split(/\s+/),w=0;w<d.length;w++)if(!o.classList.contains(d[w]))return!1;return!0},Te=function(o,l){Array.from(o.classList).forEach(function(d){!Object.values(S).includes(d)&&!Object.values(ue).includes(d)&&!Object.values(l.showClass||{}).includes(d)&&o.classList.remove(d)})},$t=function(o,l,d){if(Te(o,l),l.customClass&&l.customClass[d]){if(typeof l.customClass[d]!="string"&&!l.customClass[d].forEach){Ot("Invalid type of customClass.".concat(d,'! Expected string or iterable object, got "').concat(dt(l.customClass[d]),'"'));return}G(o,l.customClass[d])}},Ie=function(o,l){if(!l)return null;switch(l){case"select":case"textarea":case"file":return o.querySelector(".".concat(S.popup," > .").concat(S[l]));case"checkbox":return o.querySelector(".".concat(S.popup," > .").concat(S.checkbox," input"));case"radio":return o.querySelector(".".concat(S.popup," > .").concat(S.radio," input:checked"))||o.querySelector(".".concat(S.popup," > .").concat(S.radio," input:first-child"));case"range":return o.querySelector(".".concat(S.popup," > .").concat(S.range," input"));default:return o.querySelector(".".concat(S.popup," > .").concat(S.input))}},gr=function(o){if(o.focus(),o.type!=="file"){var l=o.value;o.value="",o.value=l}},$e=function(o,l,d){!o||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(function(w){Array.isArray(o)?o.forEach(function(k){d?k.classList.add(w):k.classList.remove(w)}):d?o.classList.add(w):o.classList.remove(w)}))},G=function(o,l){$e(o,l,!0)},st=function(o,l){$e(o,l,!1)},ee=function(o,l){for(var d=Array.from(o.children),w=0;w<d.length;w++){var k=d[w];if(k instanceof HTMLElement&&Wt(k,l))return k}},Qt=function(o,l,d){d==="".concat(parseInt(d))&&(d=parseInt(d)),d||parseInt(d)===0?o.style.setProperty(l,typeof d=="number"?"".concat(d,"px"):d):o.style.removeProperty(l)},ht=function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";o&&(o.style.display=l)},It=function(o){o&&(o.style.display="none")},wr=function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";o&&new MutationObserver(function(){wn(o,o.innerHTML,l)}).observe(o,{childList:!0,subtree:!0})},Ae=function(o,l,d,w){var k=o.querySelector(l);k&&k.style.setProperty(d,w)},wn=function(o,l){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?ht(o,d):It(o)},Ht=function(o){return!!(o&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length))},zn=function(){return!Ht(Ut())&&!Ht(he())&&!Ht(Ee())},yr=function(o){return o.scrollHeight>o.clientHeight},Gn=function(o){var l=window.getComputedStyle(o),d=parseFloat(l.getPropertyValue("animation-duration")||"0"),w=parseFloat(l.getPropertyValue("transition-duration")||"0");return d>0||w>0},He=function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=Ue();d&&Ht(d)&&(l&&(d.style.transition="none",d.style.width="100%"),setTimeout(function(){d.style.transition="width ".concat(o/1e3,"s linear"),d.style.width="0%"},10))},de=function(){var o=Ue();if(o){var l=parseInt(window.getComputedStyle(o).width);o.style.removeProperty("transition"),o.style.width="100%";var d=parseInt(window.getComputedStyle(o).width),w=l/d*100;o.style.width="".concat(w,"%")}},vr=function(){return typeof window>"u"||typeof document>"u"},ni=`
 <div aria-labelledby="`.concat(S.title,'" aria-describedby="').concat(S["html-container"],'" class="').concat(S.popup,`" tabindex="-1">
   <button type="button" class="`).concat(S.close,`"></button>
   <ul class="`).concat(S["progress-steps"],`"></ul>
   <div class="`).concat(S.icon,`"></div>
   <img class="`).concat(S.image,`" />
   <h2 class="`).concat(S.title,'" id="').concat(S.title,`"></h2>
   <div class="`).concat(S["html-container"],'" id="').concat(S["html-container"],`"></div>
   <input class="`).concat(S.input,'" id="').concat(S.input,`" />
   <input type="file" class="`).concat(S.file,`" />
   <div class="`).concat(S.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(S.select,'" id="').concat(S.select,`"></select>
   <div class="`).concat(S.radio,`"></div>
   <label class="`).concat(S.checkbox,`">
     <input type="checkbox" id="`).concat(S.checkbox,`" />
     <span class="`).concat(S.label,`"></span>
   </label>
   <textarea class="`).concat(S.textarea,'" id="').concat(S.textarea,`"></textarea>
   <div class="`).concat(S["validation-message"],'" id="').concat(S["validation-message"],`"></div>
   <div class="`).concat(S.actions,`">
     <div class="`).concat(S.loader,`"></div>
     <button type="button" class="`).concat(S.confirm,`"></button>
     <button type="button" class="`).concat(S.deny,`"></button>
     <button type="button" class="`).concat(S.cancel,`"></button>
   </div>
   <div class="`).concat(S.footer,`"></div>
   <div class="`).concat(S["timer-progress-bar-container"],`">
     <div class="`).concat(S["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),_r=function(){var o=Mt();return o?(o.remove(),st([document.documentElement,document.body],[S["no-backdrop"],S["toast-shown"],S["has-column"]]),!0):!1},ne=function(){$.currentInstance.resetValidationMessage()},ri=function(){var o=Y(),l=ee(o,S.input),d=ee(o,S.file),w=o.querySelector(".".concat(S.range," input")),k=o.querySelector(".".concat(S.range," output")),N=ee(o,S.select),z=o.querySelector(".".concat(S.checkbox," input")),K=ee(o,S.textarea);l.oninput=ne,d.onchange=ne,N.onchange=ne,z.onchange=ne,K.oninput=ne,w.oninput=function(){ne(),k.value=w.value},w.onchange=function(){ne(),k.value=w.value}},ii=function(o){return typeof o=="string"?document.querySelector(o):o},bs=function(o){var l=Y();l.setAttribute("role",o.toast?"alert":"dialog"),l.setAttribute("aria-live",o.toast?"polite":"assertive"),o.toast||l.setAttribute("aria-modal","true")},Kn=function(o){window.getComputedStyle(o).direction==="rtl"&&G(Mt(),S.rtl)},si=function(o){var l=_r();if(vr()){_e("SweetAlert2 requires document to initialize");return}var d=document.createElement("div");d.className=S.container,l&&G(d,S["no-transition"]),Rt(d,ni);var w=ii(o.target);w.appendChild(d),bs(o),Kn(w),ri()},yn=function(o,l){o instanceof HTMLElement?l.appendChild(o):dt(o)==="object"?vn(o,l):o&&Rt(l,o)},vn=function(o,l){o.jquery?Ce(l,o):Rt(l,o.toString())},Ce=function(o,l){if(o.textContent="",0 in l)for(var d=0;d in l;d++)o.appendChild(l[d].cloneNode(!0));else o.appendChild(l.cloneNode(!0))},re=function(){if(vr())return!1;var f=document.createElement("div");return typeof f.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof f.style.animation<"u"?"animationend":!1}(),Es=function(o,l){var d=je(),w=Yt();!d||!w||(!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?It(d):ht(d),$t(d,l,"actions"),oi(d,w,l),Rt(w,l.loaderHtml||""),$t(w,l,"loader"))};function oi(f,o,l){var d=Ut(),w=he(),k=Ee();!d||!w||!k||(Wn(d,"confirm",l),Wn(w,"deny",l),Wn(k,"cancel",l),ai(d,w,k,l),l.reverseButtons&&(l.toast?(f.insertBefore(k,d),f.insertBefore(w,d)):(f.insertBefore(k,o),f.insertBefore(w,o),f.insertBefore(d,o))))}function ai(f,o,l,d){if(!d.buttonsStyling){st([f,o,l],S.styled);return}G([f,o,l],S.styled),d.confirmButtonColor&&(f.style.backgroundColor=d.confirmButtonColor,G(f,S["default-outline"])),d.denyButtonColor&&(o.style.backgroundColor=d.denyButtonColor,G(o,S["default-outline"])),d.cancelButtonColor&&(l.style.backgroundColor=d.cancelButtonColor,G(l,S["default-outline"]))}function Wn(f,o,l){var d=Le(o);wn(f,l["show".concat(d,"Button")],"inline-block"),Rt(f,l["".concat(o,"ButtonText")]||""),f.setAttribute("aria-label",l["".concat(o,"ButtonAriaLabel")]||""),f.className=S[o],$t(f,l,"".concat(o,"Button"))}var br=function(o,l){var d=mr();d&&(Rt(d,l.closeButtonHtml||""),$t(d,l,"closeButton"),wn(d,l.showCloseButton),d.setAttribute("aria-label",l.closeButtonAriaLabel||""))},Er=function(o,l){var d=Mt();d&&(li(d,l.backdrop),ci(d,l.position),Ts(d,l.grow),$t(d,l,"container"))};function li(f,o){typeof o=="string"?f.style.background=o:o||G([document.documentElement,document.body],S["no-backdrop"])}function ci(f,o){o&&(o in S?G(f,S[o]):(Ot('The "position" parameter is not valid, defaulting to "center"'),G(f,S.center)))}function Ts(f,o){o&&G(f,S["grow-".concat(o)])}var nt={innerParams:new WeakMap,domCache:new WeakMap},ui=["input","file","range","select","radio","checkbox","textarea"],hi=function(o,l){var d=Y();if(d){var w=nt.innerParams.get(o),k=!w||l.input!==w.input;ui.forEach(function(N){var z=ee(d,S[N]);z&&(ie(N,l.inputAttributes),z.className=S[N],k&&It(z))}),l.input&&(k&&Is(l),Qn(l))}},Is=function(o){if(o.input){if(!it[o.input]){_e("Unexpected type of input! Expected ".concat(Object.keys(it).join(" | "),', got "').concat(o.input,'"'));return}var l=rt(o.input),d=it[o.input](l,o);ht(l),o.inputAutoFocus&&setTimeout(function(){gr(d)})}},Pe=function(o){for(var l=0;l<o.attributes.length;l++){var d=o.attributes[l].name;["id","type","value","style"].includes(d)||o.removeAttribute(d)}},ie=function(o,l){var d=Ie(Y(),o);if(d){Pe(d);for(var w in l)d.setAttribute(w,l[w])}},Qn=function(o){var l=rt(o.input);dt(o.customClass)==="object"&&G(l,o.customClass.input)},qe=function(o,l){(!o.placeholder||l.inputPlaceholder)&&(o.placeholder=l.inputPlaceholder)},ze=function(o,l,d){if(d.inputLabel){var w=document.createElement("label"),k=S["input-label"];w.setAttribute("for",o.id),w.className=k,dt(d.customClass)==="object"&&G(w,d.customClass.inputLabel),w.innerText=d.inputLabel,l.insertAdjacentElement("beforebegin",w)}},rt=function(o){return ee(Y(),S[o]||S.input)},Se=function(o,l){["string","number"].includes(dt(l))?o.value="".concat(l):$n(l)||Ot('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(dt(l),'"'))},it={};it.text=it.email=it.password=it.number=it.tel=it.url=it.search=it.date=it["datetime-local"]=it.time=it.week=it.month=function(f,o){return Se(f,o.inputValue),ze(f,f,o),qe(f,o),f.type=o.input,f},it.file=function(f,o){return ze(f,f,o),qe(f,o),f},it.range=function(f,o){var l=f.querySelector("input"),d=f.querySelector("output");return Se(l,o.inputValue),l.type=o.input,Se(d,o.inputValue),ze(l,f,o),f},it.select=function(f,o){if(f.textContent="",o.inputPlaceholder){var l=document.createElement("option");Rt(l,o.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,f.appendChild(l)}return ze(f,f,o),f},it.radio=function(f){return f.textContent="",f},it.checkbox=function(f,o){var l=Ie(Y(),"checkbox");l.value="1",l.checked=!!o.inputValue;var d=f.querySelector("span");return Rt(d,o.inputPlaceholder),l},it.textarea=function(f,o){Se(f,o.inputValue),qe(f,o),ze(f,f,o);var l=function(w){return parseInt(window.getComputedStyle(w).marginLeft)+parseInt(window.getComputedStyle(w).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var d=parseInt(window.getComputedStyle(Y()).width),w=function(){if(document.body.contains(f)){var N=f.offsetWidth+l(f);N>d?Y().style.width="".concat(N,"px"):Qt(Y(),"width",o.width)}};new MutationObserver(w).observe(f,{attributes:!0,attributeFilter:["style"]})}}),f};var _n=function(o,l){var d=fn();d&&(wr(d),$t(d,l,"htmlContainer"),l.html?(yn(l.html,d),ht(d,"block")):l.text?(d.textContent=l.text,ht(d,"block")):It(d),hi(o,l))},As=function(o,l){var d=pr();d&&(wr(d),wn(d,l.footer,"block"),l.footer&&yn(l.footer,d),$t(d,l,"footer"))},di=function(o,l){var d=nt.innerParams.get(o),w=Be();if(w){if(d&&l.icon===d.icon){Ge(w,l),fi(w,l);return}if(!l.icon&&!l.iconHtml){It(w);return}if(l.icon&&Object.keys(ue).indexOf(l.icon)===-1){_e('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(l.icon,'"')),It(w);return}ht(w),Ge(w,l),fi(w,l),G(w,l.showClass&&l.showClass.icon)}},fi=function(o,l){for(var d=0,w=Object.entries(ue);d<w.length;d++){var k=E(w[d],2),N=k[0],z=k[1];l.icon!==N&&st(o,z)}G(o,l.icon&&ue[l.icon]),fe(o,l),Cs(),$t(o,l,"icon")},Cs=function(){var o=Y();if(o)for(var l=window.getComputedStyle(o).getPropertyValue("background-color"),d=o.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),w=0;w<d.length;w++)d[w].style.backgroundColor=l},Ps=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ss=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Ge=function(o,l){if(!(!l.icon&&!l.iconHtml)){var d=o.innerHTML,w="";if(l.iconHtml)w=Tr(l.iconHtml);else if(l.icon==="success")w=Ps,d=d.replace(/ style=".*?"/g,"");else if(l.icon==="error")w=Ss;else if(l.icon){var k={question:"?",warning:"!",info:"i"};w=Tr(k[l.icon])}d.trim()!==w.trim()&&Rt(o,w)}},fe=function(o,l){if(l.iconColor){o.style.color=l.iconColor,o.style.borderColor=l.iconColor;for(var d=0,w=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];d<w.length;d++){var k=w[d];Ae(o,k,"background-color",l.iconColor)}Ae(o,".swal2-success-ring","border-color",l.iconColor)}},Tr=function(o){return'<div class="'.concat(S["icon-content"],'">').concat(o,"</div>")},pi=function(o,l){var d=fr();if(d){if(!l.imageUrl){It(d);return}ht(d,""),d.setAttribute("src",l.imageUrl),d.setAttribute("alt",l.imageAlt||""),Qt(d,"width",l.imageWidth),Qt(d,"height",l.imageHeight),d.className=S.image,$t(d,l,"image")}},mi=function(o,l){var d=Mt(),w=Y();if(!(!d||!w)){if(l.toast){Qt(d,"width",l.width),w.style.width="100%";var k=Yt();k&&w.insertBefore(k,Be())}else Qt(w,"width",l.width);Qt(w,"padding",l.padding),l.color&&(w.style.color=l.color),l.background&&(w.style.background=l.background),It(yt()),Ke(w,l)}},Ke=function(o,l){var d=l.showClass||{};o.className="".concat(S.popup," ").concat(Ht(o)?d.popup:""),l.toast?(G([document.documentElement,document.body],S["toast-shown"]),G(o,S.toast)):G(o,S.modal),$t(o,l,"popup"),typeof l.customClass=="string"&&G(o,l.customClass),l.icon&&G(o,S["icon-".concat(l.icon)])},Rs=function(o,l){var d=wt();if(d){var w=l.progressSteps,k=l.currentProgressStep;if(!w||w.length===0||k===void 0){It(d);return}ht(d),d.textContent="",k>=w.length&&Ot("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),w.forEach(function(N,z){var K=ks(N);if(d.appendChild(K),z===k&&G(K,S["active-progress-step"]),z!==w.length-1){var pt=xs(l);d.appendChild(pt)}})}},ks=function(o){var l=document.createElement("li");return G(l,S["progress-step"]),Rt(l,o),l},xs=function(o){var l=document.createElement("li");return G(l,S["progress-step-line"]),o.progressStepsDistance&&Qt(l,"width",o.progressStepsDistance),l},pe=function(o,l){var d=Hn();d&&(wr(d),wn(d,l.title||l.titleText,"block"),l.title&&yn(l.title,d),l.titleText&&(d.innerText=l.titleText),$t(d,l,"title"))},gi=function(o,l){mi(o,l),Er(o,l),Rs(o,l),di(o,l),pi(o,l),pe(o,l),br(o,l),_n(o,l),Es(o,l),As(o,l);var d=Y();typeof l.didRender=="function"&&d&&l.didRender(d)},Vs=function(){return Ht(Y())},We=function(){var o;return(o=Ut())===null||o===void 0?void 0:o.click()},Xn=function(){var o;return(o=he())===null||o===void 0?void 0:o.click()},wi=function(){var o;return(o=Ee())===null||o===void 0?void 0:o.click()},Jt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Qe=function(o){o.keydownTarget&&o.keydownHandlerAdded&&(o.keydownTarget.removeEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!1)},yi=function(o,l,d){Qe(o),l.toast||(o.keydownHandler=function(w){return Os(l,w,d)},o.keydownTarget=l.keydownListenerCapture?window:Y(),o.keydownListenerCapture=l.keydownListenerCapture,o.keydownTarget.addEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!0)},bn=function(o,l){var d,w=pn();if(w.length){o=o+l,o===w.length?o=0:o===-1&&(o=w.length-1),w[o].focus();return}(d=Y())===null||d===void 0||d.focus()},ct=["ArrowRight","ArrowDown"],Ds=["ArrowLeft","ArrowUp"],Os=function(o,l,d){o&&(l.isComposing||l.keyCode===229||(o.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?vi(l,o):l.key==="Tab"?_i(l):[].concat(ct,Ds).includes(l.key)?bi(l.key):l.key==="Escape"&&Yn(l,o,d)))},vi=function(o,l){if(Fe(l.allowEnterKey)){var d=Ie(Y(),l.input);if(o.target&&d&&o.target instanceof HTMLElement&&o.target.outerHTML===d.outerHTML){if(["textarea","file"].includes(l.input))return;We(),o.preventDefault()}}},_i=function(o){for(var l=o.target,d=pn(),w=-1,k=0;k<d.length;k++)if(l===d[k]){w=k;break}o.shiftKey?bn(w,-1):bn(w,1),o.stopPropagation(),o.preventDefault()},bi=function(o){var l=je(),d=Ut(),w=he(),k=Ee();if(!(!l||!d||!w||!k)){var N=[d,w,k];if(!(document.activeElement instanceof HTMLElement&&!N.includes(document.activeElement))){var z=ct.includes(o)?"nextElementSibling":"previousElementSibling",K=document.activeElement;if(K){for(var pt=0;pt<l.children.length;pt++){if(K=K[z],!K)return;if(K instanceof HTMLButtonElement&&Ht(K))break}K instanceof HTMLButtonElement&&K.focus()}}}},Yn=function(o,l,d){Fe(l.allowEscapeKey)&&(o.preventDefault(),d(Jt.esc))},Re={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},se=function(){var o=Mt(),l=Array.from(document.body.children);l.forEach(function(d){d.contains(o)||(d.hasAttribute("aria-hidden")&&d.setAttribute("data-previous-aria-hidden",d.getAttribute("aria-hidden")||""),d.setAttribute("aria-hidden","true"))})},Ir=function(){var o=Array.from(document.body.children);o.forEach(function(l){l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},Ei=typeof window<"u"&&!!window.GestureEvent,En=function(){if(Ei&&!Wt(document.body,S.iosfix)){var o=document.body.scrollTop;document.body.style.top="".concat(o*-1,"px"),G(document.body,S.iosfix),Ti()}},Ti=function(){var o=Mt();if(o){var l;o.ontouchstart=function(d){l=Ar(d)},o.ontouchmove=function(d){l&&(d.preventDefault(),d.stopPropagation())}}},Ar=function(o){var l=o.target,d=Mt(),w=fn();return!d||!w||Jn(o)||Ii(o)?!1:l===d||!yr(d)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(yr(w)&&w.contains(l))},Jn=function(o){return o.touches&&o.touches.length&&o.touches[0].touchType==="stylus"},Ii=function(o){return o.touches&&o.touches.length>1},Zn=function(){if(Wt(document.body,S.iosfix)){var o=parseInt(document.body.style.top,10);st(document.body,S.iosfix),document.body.style.top="",document.body.scrollTop=o*-1}},Ms=function(){var o=document.createElement("div");o.className=S["scrollbar-measure"],document.body.appendChild(o);var l=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),l},ke=null,Tn=function(o){ke===null&&(document.body.scrollHeight>window.innerHeight||o==="scroll")&&(ke=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ke+Ms(),"px"))},Ai=function(){ke!==null&&(document.body.style.paddingRight="".concat(ke,"px"),ke=null)};function Cr(f,o,l,d){mn()?Sr(f,d):(Zr(l).then(function(){return Sr(f,d)}),Qe($)),Ei?(o.setAttribute("style","display:none !important"),o.removeAttribute("class"),o.innerHTML=""):o.remove(),qn()&&(Ai(),Zn(),Ir()),Pr()}function Pr(){st([document.documentElement,document.body],[S.shown,S["height-auto"],S["no-backdrop"],S["toast-shown"]])}function Zt(f){f=Pi(f);var o=Re.swalPromiseResolve.get(this),l=Ci(this);this.isAwaitingPromise?f.isDismissed||(Xe(this),o(f)):l&&o(f)}var Ci=function(o){var l=Y();if(!l)return!1;var d=nt.innerParams.get(o);if(!d||Wt(l,d.hideClass.popup))return!1;st(l,d.showClass.popup),G(l,d.hideClass.popup);var w=Mt();return st(w,d.showClass.backdrop),G(w,d.hideClass.backdrop),xe(o,l,d),!0};function In(f){var o=Re.swalPromiseReject.get(this);Xe(this),o&&o(f)}var Xe=function(o){o.isAwaitingPromise&&(delete o.isAwaitingPromise,nt.innerParams.get(o)||o._destroy())},Pi=function(o){return typeof o>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o)},xe=function(o,l,d){var w=Mt(),k=re&&Gn(l);typeof d.willClose=="function"&&d.willClose(l),k?Si(o,l,w,d.returnFocus,d.didClose):Cr(o,w,d.returnFocus,d.didClose)},Si=function(o,l,d,w,k){re&&($.swalCloseEventFinishedCallback=Cr.bind(null,o,d,w,k),l.addEventListener(re,function(N){N.target===l&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback)}))},Sr=function(o,l){setTimeout(function(){typeof l=="function"&&l.bind(o.params)(),o._destroy&&o._destroy()})},Ve=function(o){var l=Y();if(l||new Mi,l=Y(),!!l){var d=Yt();mn()?It(Be()):Ri(l,o),ht(d),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()}},Ri=function(o,l){var d=je(),w=Yt();!d||!w||(!l&&Ht(Ut())&&(l=Ut()),ht(d),l&&(It(l),w.setAttribute("data-button-to-replace",l.className),d.insertBefore(w,l)),G([o,d],S.loading))},tr=function(o,l){l.input==="select"||l.input==="radio"?r(o,l):["text","email","number","tel","textarea"].some(function(d){return d===l.input})&&(hn(l.inputValue)||$n(l.inputValue))&&(Ve(Ut()),c(o,l))},qt=function(o,l){var d=o.getInput();if(!d)return null;switch(l.input){case"checkbox":return ki(d);case"radio":return xi(d);case"file":return Ye(d);default:return l.inputAutoTrim?d.value.trim():d.value}},ki=function(o){return o.checked?1:0},xi=function(o){return o.checked?o.value:null},Ye=function(o){return o.files&&o.files.length?o.getAttribute("multiple")!==null?o.files:o.files[0]:null},r=function(o,l){var d=Y();if(d){var w=function(N){l.input==="select"?h(d,A(N),l):l.input==="radio"&&m(d,A(N),l)};hn(l.inputOptions)||$n(l.inputOptions)?(Ve(Ut()),be(l.inputOptions).then(function(k){o.hideLoading(),w(k)})):dt(l.inputOptions)==="object"?w(l.inputOptions):_e("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(dt(l.inputOptions)))}},c=function(o,l){var d=o.getInput();d&&(It(d),be(l.inputValue).then(function(w){d.value=l.input==="number"?"".concat(parseFloat(w)||0):"".concat(w),ht(d),d.focus(),o.hideLoading()}).catch(function(w){_e("Error in inputValue promise: ".concat(w)),d.value="",ht(d),d.focus(),o.hideLoading()}))};function h(f,o,l){var d=ee(f,S.select);if(d){var w=function(N,z,K){var pt=document.createElement("option");pt.value=K,Rt(pt,z),pt.selected=R(K,l.inputValue),N.appendChild(pt)};o.forEach(function(k){var N=k[0],z=k[1];if(Array.isArray(z)){var K=document.createElement("optgroup");K.label=N,K.disabled=!1,d.appendChild(K),z.forEach(function(pt){return w(K,pt[1],pt[0])})}else w(d,z,N)}),d.focus()}}function m(f,o,l){var d=ee(f,S.radio);if(d){o.forEach(function(k){var N=k[0],z=k[1],K=document.createElement("input"),pt=document.createElement("label");K.type="radio",K.name=S.radio,K.value=N,R(N,l.inputValue)&&(K.checked=!0);var Rr=document.createElement("span");Rt(Rr,z),Rr.className=S.label,pt.appendChild(K),pt.appendChild(Rr),d.appendChild(pt)});var w=d.querySelectorAll("input");w.length&&w[0].focus()}}var A=function f(o){var l=[];return o instanceof Map?o.forEach(function(d,w){var k=d;dt(k)==="object"&&(k=f(k)),l.push([w,k])}):Object.keys(o).forEach(function(d){var w=o[d];dt(w)==="object"&&(w=f(w)),l.push([d,w])}),l},R=function(o,l){return!!l&&l.toString()===o.toString()},M=void 0,et=function(o){var l=nt.innerParams.get(o);o.disableButtons(),l.input?bt(o,"confirm"):Cn(o,!0)},_t=function(o){var l=nt.innerParams.get(o);o.disableButtons(),l.returnInputValueOnDeny?bt(o,"deny"):me(o,!1)},Q=function(o,l){o.disableButtons(),l(Jt.cancel)},bt=function(o,l){var d=nt.innerParams.get(o);if(!d.input){_e('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Le(l)));return}var w=o.getInput(),k=qt(o,d);d.inputValidator?At(o,k,l):w&&!w.checkValidity()?(o.enableButtons(),o.showValidationMessage(d.validationMessage||w.validationMessage)):l==="deny"?me(o,k):Cn(o,k)},At=function(o,l,d){var w=nt.innerParams.get(o);o.disableInput();var k=Promise.resolve().then(function(){return be(w.inputValidator(l,w.validationMessage))});k.then(function(N){o.enableButtons(),o.enableInput(),N?o.showValidationMessage(N):d==="deny"?me(o,l):Cn(o,l)})},me=function(o,l){var d=nt.innerParams.get(o||M);if(d.showLoaderOnDeny&&Ve(he()),d.preDeny){o.isAwaitingPromise=!0;var w=Promise.resolve().then(function(){return be(d.preDeny(l,d.validationMessage))});w.then(function(k){k===!1?(o.hideLoading(),Xe(o)):o.close({isDenied:!0,value:typeof k>"u"?l:k})}).catch(function(k){return An(o||M,k)})}else o.close({isDenied:!0,value:l})},zt=function(o,l){o.close({isConfirmed:!0,value:l})},An=function(o,l){o.rejectPromise(l)},Cn=function(o,l){var d=nt.innerParams.get(o||M);if(d.showLoaderOnConfirm&&Ve(),d.preConfirm){o.resetValidationMessage(),o.isAwaitingPromise=!0;var w=Promise.resolve().then(function(){return be(d.preConfirm(l,d.validationMessage))});w.then(function(k){Ht(yt())||k===!1?(o.hideLoading(),Xe(o)):zt(o,typeof k>"u"?l:k)}).catch(function(k){return An(o||M,k)})}else zt(o,l)};function Vi(){var f=nt.innerParams.get(this);if(f){var o=nt.domCache.get(this);It(o.loader),mn()?f.icon&&ht(Be()):Mc(o),st([o.popup,o.actions],S.loading),o.popup.removeAttribute("aria-busy"),o.popup.removeAttribute("data-loading"),o.confirmButton.disabled=!1,o.denyButton.disabled=!1,o.cancelButton.disabled=!1}}var Mc=function(o){var l=o.popup.getElementsByClassName(o.loader.getAttribute("data-button-to-replace"));l.length?ht(l[0],"inline-block"):zn()&&It(o.actions)};function Vo(){var f=nt.innerParams.get(this),o=nt.domCache.get(this);return o?Ie(o.popup,f.input):null}function Do(f,o,l){var d=nt.domCache.get(f);o.forEach(function(w){d[w].disabled=l})}function Oo(f,o){var l=Y();if(!(!l||!f))if(f.type==="radio")for(var d=l.querySelectorAll('[name="'.concat(S.radio,'"]')),w=0;w<d.length;w++)d[w].disabled=o;else f.disabled=o}function Mo(){Do(this,["confirmButton","denyButton","cancelButton"],!1)}function No(){Do(this,["confirmButton","denyButton","cancelButton"],!0)}function Lo(){Oo(this.getInput(),!1)}function Fo(){Oo(this.getInput(),!0)}function Bo(f){var o=nt.domCache.get(this),l=nt.innerParams.get(this);Rt(o.validationMessage,f),o.validationMessage.className=S["validation-message"],l.customClass&&l.customClass.validationMessage&&G(o.validationMessage,l.customClass.validationMessage),ht(o.validationMessage);var d=this.getInput();d&&(d.setAttribute("aria-invalid","true"),d.setAttribute("aria-describedby",S["validation-message"]),gr(d),G(d,S.inputerror))}function jo(){var f=nt.domCache.get(this);f.validationMessage&&It(f.validationMessage);var o=this.getInput();o&&(o.removeAttribute("aria-invalid"),o.removeAttribute("aria-describedby"),st(o,S.inputerror))}var er={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Nc=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Lc={},Fc=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Uo=function(o){return Object.prototype.hasOwnProperty.call(er,o)},$o=function(o){return Nc.indexOf(o)!==-1},Ho=function(o){return Lc[o]},Bc=function(o){Uo(o)||Ot('Unknown parameter "'.concat(o,'"'))},jc=function(o){Fc.includes(o)&&Ot('The parameter "'.concat(o,'" is incompatible with toasts'))},Uc=function(o){var l=Ho(o);l&&dr(o,l)},$c=function(o){o.backdrop===!1&&o.allowOutsideClick&&Ot('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var l in o)Bc(l),o.toast&&jc(l),Uc(l)};function qo(f){var o=Y(),l=nt.innerParams.get(this);if(!o||Wt(o,l.hideClass.popup)){Ot("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var d=Hc(f),w=Object.assign({},l,d);gi(this,w),nt.innerParams.set(this,w),Object.defineProperties(this,{params:{value:Object.assign({},this.params,f),writable:!1,enumerable:!0}})}var Hc=function(o){var l={};return Object.keys(o).forEach(function(d){$o(d)?l[d]=o[d]:Ot("Invalid parameter to update: ".concat(d))}),l};function zo(){var f=nt.domCache.get(this),o=nt.innerParams.get(this);if(!o){Go(this);return}f.popup&&$.swalCloseEventFinishedCallback&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback),typeof o.didDestroy=="function"&&o.didDestroy(),qc(this)}var qc=function(o){Go(o),delete o.params,delete $.keydownHandler,delete $.keydownTarget,delete $.currentInstance},Go=function(o){o.isAwaitingPromise?(Ns(nt,o),o.isAwaitingPromise=!0):(Ns(Re,o),Ns(nt,o),delete o.isAwaitingPromise,delete o.disableButtons,delete o.enableButtons,delete o.getInput,delete o.disableInput,delete o.enableInput,delete o.hideLoading,delete o.disableLoading,delete o.showValidationMessage,delete o.resetValidationMessage,delete o.close,delete o.closePopup,delete o.closeModal,delete o.closeToast,delete o.rejectPromise,delete o.update,delete o._destroy)},Ns=function(o,l){for(var d in o)o[d].delete(l)},zc=Object.freeze({__proto__:null,_destroy:zo,close:Zt,closeModal:Zt,closePopup:Zt,closeToast:Zt,disableButtons:No,disableInput:Fo,disableLoading:Vi,enableButtons:Mo,enableInput:Lo,getInput:Vo,handleAwaitingPromise:Xe,hideLoading:Vi,rejectPromise:In,resetValidationMessage:jo,showValidationMessage:Bo,update:qo}),Gc=function(o,l,d){o.toast?Kc(o,l,d):(Qc(l),Xc(l),Yc(o,l,d))},Kc=function(o,l,d){l.popup.onclick=function(){o&&(Wc(o)||o.timer||o.input)||d(Jt.close)}},Wc=function(o){return!!(o.showConfirmButton||o.showDenyButton||o.showCancelButton||o.showCloseButton)},Di=!1,Qc=function(o){o.popup.onmousedown=function(){o.container.onmouseup=function(l){o.container.onmouseup=function(){},l.target===o.container&&(Di=!0)}}},Xc=function(o){o.container.onmousedown=function(l){l.target===o.container&&l.preventDefault(),o.popup.onmouseup=function(d){o.popup.onmouseup=function(){},(d.target===o.popup||d.target instanceof HTMLElement&&o.popup.contains(d.target))&&(Di=!0)}}},Yc=function(o,l,d){l.container.onclick=function(w){if(Di){Di=!1;return}w.target===l.container&&Fe(o.allowOutsideClick)&&d(Jt.backdrop)}},Jc=function(o){return dt(o)==="object"&&o.jquery},Ko=function(o){return o instanceof Element||Jc(o)},Zc=function(o){var l={};return dt(o[0])==="object"&&!Ko(o[0])?Object.assign(l,o[0]):["title","html","icon"].forEach(function(d,w){var k=o[w];typeof k=="string"||Ko(k)?l[d]=k:k!==void 0&&_e("Unexpected type of ".concat(d,'! Expected "string" or "Element", got ').concat(dt(k)))}),l};function tu(){for(var f=this,o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return L(f,l)}function eu(f){var o=function(l){function d(){return y(this,d),p(this,d,arguments)}return at(d,l),H(d,[{key:"_main",value:function(k,N){return j(tt(d.prototype),"_main",this).call(this,k,Object.assign({},f,N))}}])}(this);return o}var nu=function(){return $.timeout&&$.timeout.getTimerLeft()},Wo=function(){if($.timeout)return de(),$.timeout.stop()},Qo=function(){if($.timeout){var o=$.timeout.start();return He(o),o}},ru=function(){var o=$.timeout;return o&&(o.running?Wo():Qo())},iu=function(o){if($.timeout){var l=$.timeout.increase(o);return He(l,!0),l}},su=function(){return!!($.timeout&&$.timeout.isRunning())},Xo=!1,Ls={};function ou(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ls[f]=this,Xo||(document.body.addEventListener("click",au),Xo=!0)}var au=function(o){for(var l=o.target;l&&l!==document;l=l.parentNode)for(var d in Ls){var w=l.getAttribute(d);if(w){Ls[d].fire({template:w});return}}},lu=Object.freeze({__proto__:null,argsToParams:Zc,bindClickHandler:ou,clickCancel:wi,clickConfirm:We,clickDeny:Xn,enableLoading:Ve,fire:tu,getActions:je,getCancelButton:Ee,getCloseButton:mr,getConfirmButton:Ut,getContainer:Mt,getDenyButton:he,getFocusableElements:pn,getFooter:pr,getHtmlContainer:fn,getIcon:Be,getIconContent:ys,getImage:fr,getInputLabel:vs,getLoader:Yt,getPopup:Y,getProgressSteps:wt,getTimerLeft:nu,getTimerProgressBar:Ue,getTitle:Hn,getValidationMessage:yt,increaseTimer:iu,isDeprecatedParameter:Ho,isLoading:gn,isTimerRunning:su,isUpdatableParameter:$o,isValidParameter:Uo,isVisible:Vs,mixin:eu,resumeTimer:Qo,showLoading:Ve,stopTimer:Wo,toggleTimer:ru}),cu=function(){function f(o,l){y(this,f),this.callback=o,this.remaining=l,this.running=!1,this.start()}return H(f,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(l){var d=this.running;return d&&this.stop(),this.remaining+=l,d&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Yo=["swal-title","swal-html","swal-footer"],uu=function(o){var l=typeof o.template=="string"?document.querySelector(o.template):o.template;if(!l)return{};var d=l.content;yu(d);var w=Object.assign(hu(d),du(d),fu(d),pu(d),mu(d),gu(d),wu(d,Yo));return w},hu=function(o){var l={},d=Array.from(o.querySelectorAll("swal-param"));return d.forEach(function(w){Pn(w,["name","value"]);var k=w.getAttribute("name"),N=w.getAttribute("value");typeof er[k]=="boolean"?l[k]=N!=="false":dt(er[k])==="object"?l[k]=JSON.parse(N):l[k]=N}),l},du=function(o){var l={},d=Array.from(o.querySelectorAll("swal-function-param"));return d.forEach(function(w){var k=w.getAttribute("name"),N=w.getAttribute("value");l[k]=new Function("return ".concat(N))()}),l},fu=function(o){var l={},d=Array.from(o.querySelectorAll("swal-button"));return d.forEach(function(w){Pn(w,["type","color","aria-label"]);var k=w.getAttribute("type");l["".concat(k,"ButtonText")]=w.innerHTML,l["show".concat(Le(k),"Button")]=!0,w.hasAttribute("color")&&(l["".concat(k,"ButtonColor")]=w.getAttribute("color")),w.hasAttribute("aria-label")&&(l["".concat(k,"ButtonAriaLabel")]=w.getAttribute("aria-label"))}),l},pu=function(o){var l={},d=o.querySelector("swal-image");return d&&(Pn(d,["src","width","height","alt"]),d.hasAttribute("src")&&(l.imageUrl=d.getAttribute("src")||void 0),d.hasAttribute("width")&&(l.imageWidth=d.getAttribute("width")||void 0),d.hasAttribute("height")&&(l.imageHeight=d.getAttribute("height")||void 0),d.hasAttribute("alt")&&(l.imageAlt=d.getAttribute("alt")||void 0)),l},mu=function(o){var l={},d=o.querySelector("swal-icon");return d&&(Pn(d,["type","color"]),d.hasAttribute("type")&&(l.icon=d.getAttribute("type")),d.hasAttribute("color")&&(l.iconColor=d.getAttribute("color")),l.iconHtml=d.innerHTML),l},gu=function(o){var l={},d=o.querySelector("swal-input");d&&(Pn(d,["type","label","placeholder","value"]),l.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(l.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(l.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(l.inputValue=d.getAttribute("value")));var w=Array.from(o.querySelectorAll("swal-input-option"));return w.length&&(l.inputOptions={},w.forEach(function(k){Pn(k,["value"]);var N=k.getAttribute("value"),z=k.innerHTML;l.inputOptions[N]=z})),l},wu=function(o,l){var d={};for(var w in l){var k=l[w],N=o.querySelector(k);N&&(Pn(N,[]),d[k.replace(/^swal-/,"")]=N.innerHTML.trim())}return d},yu=function(o){var l=Yo.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(o.children).forEach(function(d){var w=d.tagName.toLowerCase();l.includes(w)||Ot("Unrecognized element <".concat(w,">"))})},Pn=function(o,l){Array.from(o.attributes).forEach(function(d){l.indexOf(d.name)===-1&&Ot(['Unrecognized attribute "'.concat(d.name,'" on <').concat(o.tagName.toLowerCase(),">."),"".concat(l.length?"Allowed attributes are: ".concat(l.join(", ")):"To set the value, use HTML within the element.")])})},Jo=10,vu=function(o){var l=Mt(),d=Y();typeof o.willOpen=="function"&&o.willOpen(d);var w=window.getComputedStyle(document.body),k=w.overflowY;Tu(l,d,o),setTimeout(function(){bu(l,d)},Jo),qn()&&(Eu(l,o.scrollbarPadding,k),se()),!mn()&&!$.previousActiveElement&&($.previousActiveElement=document.activeElement),typeof o.didOpen=="function"&&setTimeout(function(){return o.didOpen(d)}),st(l,S["no-transition"])},_u=function f(o){var l=Y();if(!(o.target!==l||!re)){var d=Mt();l.removeEventListener(re,f),d.style.overflowY="auto"}},bu=function(o,l){re&&Gn(l)?(o.style.overflowY="hidden",l.addEventListener(re,_u)):o.style.overflowY="auto"},Eu=function(o,l,d){En(),l&&d!=="hidden"&&Tn(d),setTimeout(function(){o.scrollTop=0})},Tu=function(o,l,d){G(o,d.showClass.backdrop),d.animation?(l.style.setProperty("opacity","0","important"),ht(l,"grid"),setTimeout(function(){G(l,d.showClass.popup),l.style.removeProperty("opacity")},Jo)):ht(l,"grid"),G([document.documentElement,document.body],S.shown),d.heightAuto&&d.backdrop&&!d.toast&&G([document.documentElement,document.body],S["height-auto"])},Zo={email:function(o,l){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(o)?Promise.resolve():Promise.resolve(l||"Invalid email address")},url:function(o,l){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(o)?Promise.resolve():Promise.resolve(l||"Invalid URL")}};function Iu(f){f.inputValidator||(f.input==="email"&&(f.inputValidator=Zo.email),f.input==="url"&&(f.inputValidator=Zo.url))}function Au(f){(!f.target||typeof f.target=="string"&&!document.querySelector(f.target)||typeof f.target!="string"&&!f.target.appendChild)&&(Ot('Target parameter is not valid, defaulting to "body"'),f.target="body")}function Cu(f){Iu(f),f.showLoaderOnConfirm&&!f.preConfirm&&Ot(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Au(f),typeof f.title=="string"&&(f.title=f.title.split(`
`).join("<br />")),si(f)}var ge,Oi=new WeakMap,gt=function(){function f(){if(y(this,f),x(this,Oi,void 0),!(typeof window>"u")){ge=this;for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];var w=Object.freeze(this.constructor.argsToParams(l));this.params=w,this.isAwaitingPromise=!1,O(Oi,this,this._main(ge.params))}}return H(f,[{key:"_main",value:function(l){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if($c(Object.assign({},d,l)),$.currentInstance){var w=Re.swalPromiseResolve.get($.currentInstance),k=$.currentInstance.isAwaitingPromise;$.currentInstance._destroy(),k||w({isDismissed:!0}),qn()&&Ir()}$.currentInstance=ge;var N=Su(l,d);Cu(N),Object.freeze(N),$.timeout&&($.timeout.stop(),delete $.timeout),clearTimeout($.restoreFocusTimeout);var z=Ru(ge);return gi(ge,N),nt.innerParams.set(ge,N),Pu(ge,z,N)}},{key:"then",value:function(l){return P(Oi,this).then(l)}},{key:"finally",value:function(l){return P(Oi,this).finally(l)}}])}(),Pu=function(o,l,d){return new Promise(function(w,k){var N=function(K){o.close({isDismissed:!0,dismiss:K})};Re.swalPromiseResolve.set(o,w),Re.swalPromiseReject.set(o,k),l.confirmButton.onclick=function(){et(o)},l.denyButton.onclick=function(){_t(o)},l.cancelButton.onclick=function(){Q(o,N)},l.closeButton.onclick=function(){N(Jt.close)},Gc(d,l,N),yi($,d,N),tr(o,d),vu(d),ku($,d,N),xu(l,d),setTimeout(function(){l.container.scrollTop=0})})},Su=function(o,l){var d=uu(o),w=Object.assign({},er,l,d,o);return w.showClass=Object.assign({},er.showClass,w.showClass),w.hideClass=Object.assign({},er.hideClass,w.hideClass),w.animation===!1&&(w.showClass={backdrop:"swal2-noanimation"},w.hideClass={}),w},Ru=function(o){var l={popup:Y(),container:Mt(),actions:je(),confirmButton:Ut(),denyButton:he(),cancelButton:Ee(),loader:Yt(),closeButton:mr(),validationMessage:yt(),progressSteps:wt()};return nt.domCache.set(o,l),l},ku=function(o,l,d){var w=Ue();It(w),l.timer&&(o.timeout=new cu(function(){d("timer"),delete o.timeout},l.timer),l.timerProgressBar&&(ht(w),$t(w,l,"timerProgressBar"),setTimeout(function(){o.timeout&&o.timeout.running&&He(l.timer)})))},xu=function(o,l){if(!l.toast){if(!Fe(l.allowEnterKey)){Du();return}Vu(o,l)||bn(-1,1)}},Vu=function(o,l){return l.focusDeny&&Ht(o.denyButton)?(o.denyButton.focus(),!0):l.focusCancel&&Ht(o.cancelButton)?(o.cancelButton.focus(),!0):l.focusConfirm&&Ht(o.confirmButton)?(o.confirmButton.focus(),!0):!1},Du=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var ta=new Date,ea=localStorage.getItem("swal-initiation");ea?(ta.getTime()-Date.parse(ea))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var f=document.createElement("audio");f.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",f.loop=!0,document.body.appendChild(f),setTimeout(function(){f.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(ta))}gt.prototype.disableButtons=No,gt.prototype.enableButtons=Mo,gt.prototype.getInput=Vo,gt.prototype.disableInput=Fo,gt.prototype.enableInput=Lo,gt.prototype.hideLoading=Vi,gt.prototype.disableLoading=Vi,gt.prototype.showValidationMessage=Bo,gt.prototype.resetValidationMessage=jo,gt.prototype.close=Zt,gt.prototype.closePopup=Zt,gt.prototype.closeModal=Zt,gt.prototype.closeToast=Zt,gt.prototype.rejectPromise=In,gt.prototype.update=qo,gt.prototype._destroy=zo,Object.assign(gt,lu),Object.keys(zc).forEach(function(f){gt[f]=function(){if(ge&&ge[f]){var o;return(o=ge)[f].apply(o,arguments)}return null}}),gt.DismissReason=Jt,gt.version="11.11.1";var Mi=gt;return Mi.default=Mi,Mi}),typeof Je<"u"&&Je.Sweetalert2&&(Je.swal=Je.sweetAlert=Je.Swal=Je.SweetAlert=Je.Sweetalert2),typeof document<"u"&&function(e,i){var s=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(s),s.styleSheet)s.styleSheet.disabled||(s.styleSheet.cssText=i);else try{s.innerHTML=i}catch{s.innerText=i}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(Oc);var gg=Oc.exports;const wg=mg(gg),yg="/assets/Contacto-form-CYgUxQ9q.jpg",vg={data(){return{nombre:"",apellido:"",link:"",email:"",mensaje:"",error:null}},methods:{async handleSubmit(){if(this.error=null,!this.isValidEmail(this.email)){this.error="Por favor, ingrese un correo electrónico válido.";return}if(this.link&&!this.isValidURL(this.link)){this.error="Por favor, ingrese un enlace válido.";return}try{const n=xp(pg,"usuarios");await Gp(n,{nombre:this.nombre,apellido:this.apellido,link:this.link,email:this.email,mensaje:this.mensaje,createdAt:Et.now()}),wg.fire({icon:"success",title:"Formulario enviado",text:"Su formulario ha sido enviado con éxito. nos pondremos en contacto a la brevedad"}),console.log("Formulario guardado"),this.nombre="",this.apellido="",this.link="",this.email="",this.mensaje=""}catch(n){console.error("Error al guardar el formulario:",n),this.error="Error al guardar. Inténtalo de nuevo."}},isValidEmail(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)},isValidURL(n){try{return new URL(n),!0}catch{return!1}}}},ln=n=>(Lu("data-v-77affc3a"),n=n(),Fu(),n),_g={class:"flex flex-col lg:flex-row items-center"},bg=ln(()=>Z("div",{class:"lg:w-1/2"},[Z("img",{class:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg",src:yg,alt:"Profesionales de Roninmez asesorando a un cliente sobre soluciones de desarrollo web, SEO y análisis de datos."})],-1)),Eg={class:"isolate bg-white px-6 py-8 sm:py-12 lg:px-8 lg:w-1/2"},Tg=ln(()=>Z("div",{class:"mx-auto max-w-lg text-center"},[Z("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"¿Listo para hablar sobre tu próximo proyecto digital?"),Z("p",{class:"mt-2 text-lg leading-8 text-gray-600"},"Déjanos tus datos y te contactaremos para ofrecerte una asesoría gratuita y personalizada sobre cómo podemos ayudarte a lograr tus objetivos digitales.")],-1)),Ig={key:0,class:"error"},Ag={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},Cg=ln(()=>Z("label",{for:"nombre",class:"block text-sm font-semibold leading-6 text-gray-900"},"Nombre:",-1)),Pg={class:"mt-2.5"},Sg=ln(()=>Z("label",{for:"apellido",class:"block text-sm font-semibold leading-6 text-gray-900"},"Apellido:",-1)),Rg={class:"mt-2.5"},kg=ln(()=>Z("label",{for:"link",class:"block text-sm font-semibold leading-6 text-gray-900"},"Link:",-1)),xg={class:"mt-2.5"},Vg=ln(()=>Z("label",{for:"email",class:"block text-sm font-semibold leading-6 text-gray-900"},"Email:",-1)),Dg={class:"mt-2.5"},Og={class:"sm:col-span-2"},Mg=ln(()=>Z("label",{for:"mensaje",class:"block text-sm font-semibold leading-6 text-gray-900"},"Mensaje:",-1)),Ng={class:"mt-2.5"},Lg=ln(()=>Z("div",{class:"mt-10"},[Z("button",{type:"submit",class:"block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Enviar")],-1));function Fg(n,t,e,i,s,a){return na(),ra("div",_g,[bg,Z("div",Eg,[Tg,Z("form",{onSubmit:t[5]||(t[5]=Ou((...u)=>a.handleSubmit&&a.handleSubmit(...u),["prevent"])),class:"mx-auto mt-16 max-w-xl sm:mt-20 w-full"},[s.error?(na(),ra("div",Ig,Mu(s.error),1)):Nu("v-if",!0),Z("div",Ag,[Z("div",null,[Cg,Z("div",Pg,[kr(Z("input",{type:"text",id:"nombre","onUpdate:modelValue":t[0]||(t[0]=u=>s.nombre=u),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:""},null,512),[[xr,s.nombre]])])]),Z("div",null,[Sg,Z("div",Rg,[kr(Z("input",{type:"text",id:"apellido","onUpdate:modelValue":t[1]||(t[1]=u=>s.apellido=u),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:""},null,512),[[xr,s.apellido]])])]),Z("div",null,[kg,Z("div",xg,[kr(Z("input",{type:"text",id:"link","onUpdate:modelValue":t[2]||(t[2]=u=>s.link=u),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[xr,s.link]])])]),Z("div",null,[Vg,Z("div",Dg,[kr(Z("input",{type:"email",id:"email","onUpdate:modelValue":t[3]||(t[3]=u=>s.email=u),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",required:""},null,512),[[xr,s.email]])])]),Z("div",Og,[Mg,Z("div",Ng,[kr(Z("textarea",{id:"mensaje","onUpdate:modelValue":t[4]||(t[4]=u=>s.mensaje=u),class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[xr,s.mensaje]])])])]),Lg],32)])])}const qg=Bu(vg,[["render",Fg],["__scopeId","data-v-77affc3a"]]);export{qg as F};
