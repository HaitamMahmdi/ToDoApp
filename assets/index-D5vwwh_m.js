const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutUs-BbCCvC7P.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/404-CX12ULPP.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Os=[],_n=()=>{},b0=()=>!1,sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yu=t=>t.startsWith("onUpdate:"),ft=Object.assign,Xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},I0=Object.prototype.hasOwnProperty,ke=(t,e)=>I0.call(t,e),ie=Array.isArray,Ns=t=>go(t)==="[object Map]",ti=t=>go(t)==="[object Set]",md=t=>go(t)==="[object Date]",ye=t=>typeof t=="function",Xe=t=>typeof t=="string",ln=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",mg=t=>(Me(t)||ye(t))&&ye(t.then)&&ye(t.catch),gg=Object.prototype.toString,go=t=>gg.call(t),A0=t=>go(t).slice(8,-1),yg=t=>go(t)==="[object Object]",Ju=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},S0=/-(\w)/g,qt=il(t=>t.replace(S0,(e,n)=>n?n.toUpperCase():"")),P0=/\B([A-Z])/g,Gn=il(t=>t.replace(P0,"-$1").toLowerCase()),ol=il(t=>t.charAt(0).toUpperCase()+t.slice(1)),ac=il(t=>t?`on${ol(t)}`:""),Mt=(t,e)=>!Object.is(t,e),aa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_g=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gd;const al=()=>gd||(gd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zu(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?k0(r):Zu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Xe(t)||Me(t))return t}const R0=/;(?![^(]*\))/g,C0=/:([^]+)/,x0=/\/\*[^]*?\*\//g;function k0(t){const e={};return t.replace(x0,"").split(R0).forEach(n=>{if(n){const r=n.split(C0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lt(t){let e="";if(Xe(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Lt(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",N0=Qu(O0);function vg(t){return!!t||t===""}function V0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ts(t[r],e[r]);return n}function ts(t,e){if(t===e)return!0;let n=md(t),r=md(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ln(t),r=ln(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?V0(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ts(t[o],e[o]))return!1}}return String(t)===String(e)}function eh(t,e){return t.findIndex(n=>ts(n,e))}const Eg=t=>!!(t&&t.__v_isRef===!0),Rt=t=>Xe(t)?t:t==null?"":ie(t)||Me(t)&&(t.toString===gg||!ye(t.toString))?Eg(t)?Rt(t.value):JSON.stringify(t,wg,2):String(t),wg=(t,e)=>Eg(e)?wg(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[lc(r,i)+" =>"]=s,n),{})}:ti(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lc(n))}:ln(e)?lc(e):Me(e)&&!ie(e)&&!yg(e)?String(e):e,lc=(t,e="")=>{var n;return ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class Tg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bg(t){return new Tg(t)}function Ig(){return Pt}function D0(t,e=!1){Pt&&Pt.cleanups.push(t)}let De;const cc=new WeakSet;class Ag{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cc.has(this)&&(cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yd(this),Rg(this);const e=De,n=sn;De=this,sn=!0;try{return this.fn()}finally{Cg(this),De=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rh(e);this.deps=this.depsTail=void 0,yd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jc(this)&&this.run()}get dirty(){return jc(this)}}let Sg=0,Mi,Li;function Pg(t,e=!1){if(t.flags|=8,e){t.next=Li,Li=t;return}t.next=Mi,Mi=t}function th(){Sg++}function nh(){if(--Sg>0)return;if(Li){let e=Li;for(Li=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mi;){let e=Mi;for(Mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),rh(r),M0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function jc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xi))return;t.globalVersion=Xi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jc(t)){t.flags&=-3;return}const n=De,r=sn;De=t,sn=!0;try{Rg(t);const s=t.fn(t._value);(e.version===0||Mt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,sn=r,Cg(t),t.flags&=-3}}function rh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)rh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function M0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const kg=[];function Mr(){kg.push(sn),sn=!1}function Lr(){const t=kg.pop();sn=t===void 0?!0:t}function yd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Xi=0;class L0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!sn||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new L0(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Og(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Xi++,this.notify(e)}notify(e){th();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nh()}}}function Og(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Og(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Aa=new WeakMap,Zr=Symbol(""),Bc=Symbol(""),Ji=Symbol("");function Et(t,e,n){if(sn&&De){let r=Aa.get(t);r||Aa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ll),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=Aa.get(t);if(!o){Xi++;return}const l=c=>{c&&c.trigger()};if(th(),e==="clear")o.forEach(l);else{const c=ie(t),u=c&&Ju(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ji||!ln(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ji)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Zr)),Ns(t)&&l(o.get(Bc)));break;case"delete":c||(l(o.get(Zr)),Ns(t)&&l(o.get(Bc)));break;case"set":Ns(t)&&l(o.get(Zr));break}}nh()}function F0(t,e){const n=Aa.get(t);return n&&n.get(e)}function Ts(t){const e=Re(t);return e===t?e:(Et(e,"iterate",Ji),Xt(t)?e:e.map(wt))}function cl(t){return Et(t=Re(t),"iterate",Ji),t}const U0={__proto__:null,[Symbol.iterator](){return uc(this,Symbol.iterator,wt)},concat(...t){return Ts(this).concat(...t.map(e=>ie(e)?Ts(e):e))},entries(){return uc(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return Cn(this,"find",t,e,wt,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return hc(this,"includes",t)},indexOf(...t){return hc(this,"indexOf",t)},join(t){return Ts(this).join(t)},lastIndexOf(...t){return hc(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return wi(this,"pop")},push(...t){return wi(this,"push",t)},reduce(t,...e){return _d(this,"reduce",t,e)},reduceRight(t,...e){return _d(this,"reduceRight",t,e)},shift(){return wi(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return wi(this,"splice",t)},toReversed(){return Ts(this).toReversed()},toSorted(t){return Ts(this).toSorted(t)},toSpliced(...t){return Ts(this).toSpliced(...t)},unshift(...t){return wi(this,"unshift",t)},values(){return uc(this,"values",wt)}};function uc(t,e,n){const r=cl(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const j0=Array.prototype;function Cn(t,e,n,r,s,i){const o=cl(t),l=o!==t&&!Xt(t),c=o[e];if(c!==j0[e]){const p=c.apply(t,i);return l?wt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,wt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function _d(t,e,n,r){const s=cl(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,wt(l),c,t)}),s[e](i,...r)}function hc(t,e,n){const r=Re(t);Et(r,"iterate",Ji);const s=r[e](...n);return(s===-1||s===!1)&&oh(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function wi(t,e,n=[]){Mr(),th();const r=Re(t)[e].apply(t,n);return nh(),Lr(),r}const B0=Qu("__proto__,__v_isRef,__isVue"),Ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln));function z0(t){ln(t)||(t=String(t));const e=Re(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?J0:Fg:i?Lg:Mg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=U0[n]))return c;if(n==="hasOwnProperty")return z0}const l=Reflect.get(e,n,Ke(e)?e:r);return(ln(n)?Ng.has(n):B0(n))||(s||Et(e,"get",n),i)?l:Ke(l)?o&&Ju(n)?l:l.value:Me(l)?s?jg(l):ns(l):l}}class Dg extends Vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=rs(i);if(!Xt(r)&&!rs(r)&&(i=Re(i),r=Re(r)),!ie(e)&&Ke(i)&&!Ke(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&Ju(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Re(s)&&(o?Mt(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ln(n)||!Ng.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ie(e)?"length":Zr),Reflect.ownKeys(e)}}class $0 extends Vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const H0=new Dg,q0=new $0,W0=new Dg(!0);const zc=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function K0(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=Ns(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?zc:e?$c:wt;return!e&&Et(i,"iterate",c?Bc:Zr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function G0(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),l=Re(s);t||(Mt(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=Qo(o),u=e?zc:t?$c:wt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Re(s),"iterate",Zr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),l=Re(s);return t||(Mt(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Re(l),u=e?zc:t?$c:wt;return!t&&Et(c,"iterate",Zr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ft(n,t?{add:Yo("add"),set:Yo("set"),delete:Yo("delete"),clear:Yo("clear")}:{add(s){!e&&!Xt(s)&&!rs(s)&&(s=Re(s));const i=Re(this);return Qo(i).has.call(i,s)||(i.add(s),Nn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!rs(i)&&(i=Re(i));const o=Re(this),{has:l,get:c}=Qo(o);let u=l.call(o,s);u||(s=Re(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Mt(i,f)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:l}=Qo(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Nn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=K0(s,t,e)}),n}function sh(t,e){const n=G0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Q0={get:sh(!1,!1)},Y0={get:sh(!1,!0)},X0={get:sh(!0,!1)};const Mg=new WeakMap,Lg=new WeakMap,Fg=new WeakMap,J0=new WeakMap;function Z0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function e2(t){return t.__v_skip||!Object.isExtensible(t)?0:Z0(A0(t))}function ns(t){return rs(t)?t:ih(t,!1,H0,Q0,Mg)}function Ug(t){return ih(t,!1,W0,Y0,Lg)}function jg(t){return ih(t,!0,q0,X0,Fg)}function ih(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=e2(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function gr(t){return rs(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function oh(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function ah(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&_g(t,"__v_skip",!0),t}const wt=t=>Me(t)?ns(t):t,$c=t=>Me(t)?jg(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function yr(t){return Bg(t,!1)}function t2(t){return Bg(t,!0)}function Bg(t,e){return Ke(t)?t:new n2(t,e)}class n2{constructor(e,n){this.dep=new ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||rs(e);e=r?e:Re(e),Mt(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function Dt(t){return Ke(t)?t.value:t}const r2={get:(t,e,n)=>e==="__v_raw"?t:Dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zg(t){return gr(t)?t:new Proxy(t,r2)}class s2{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ll,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function i2(t){return new s2(t)}function o2(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=l2(t,n);return e}class a2{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return F0(Re(this._object),this._key)}}function l2(t,e,n){const r=t[e];return Ke(r)?r:new a2(t,e,n)}class c2{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Pg(this,!0),!0}get value(){const e=this.dep.track();return xg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function u2(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new c2(r,s,n)}const Xo={},Sa=new WeakMap;let Kr;function h2(t,e=!1,n=Kr){if(n){let r=Sa.get(n);r||Sa.set(n,r=[]),r.push(t)}}function f2(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=z=>s?z:Xt(z)||s===!1||s===0?Vn(z,1):Vn(z);let f,p,m,y,P=!1,b=!1;if(Ke(t)?(p=()=>t.value,P=Xt(t)):gr(t)?(p=()=>u(t),P=!0):ie(t)?(b=!0,P=t.some(z=>gr(z)||Xt(z)),p=()=>t.map(z=>{if(Ke(z))return z.value;if(gr(z))return u(z);if(ye(z))return c?c(z,2):z()})):ye(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Mr();try{m()}finally{Lr()}}const z=Kr;Kr=f;try{return c?c(t,3,[y]):t(y)}finally{Kr=z}}:p=_n,e&&s){const z=p,ee=s===!0?1/0:s;p=()=>Vn(z(),ee)}const O=Ig(),x=()=>{f.stop(),O&&O.active&&Xu(O.effects,f)};if(i&&e){const z=e;e=(...ee)=>{z(...ee),x()}}let N=b?new Array(t.length).fill(Xo):Xo;const F=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const ee=f.run();if(s||P||(b?ee.some((pe,I)=>Mt(pe,N[I])):Mt(ee,N))){m&&m();const pe=Kr;Kr=f;try{const I=[ee,N===Xo?void 0:b&&N[0]===Xo?[]:N,y];c?c(e,3,I):e(...I),N=ee}finally{Kr=pe}}}else f.run()};return l&&l(F),f=new Ag(p),f.scheduler=o?()=>o(F,!1):F,y=z=>h2(z,!1,f),m=f.onStop=()=>{const z=Sa.get(f);if(z){if(c)c(z,4);else for(const ee of z)ee();Sa.delete(f)}},e?r?F(!0):N=f.run():o?o(F.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Vn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))Vn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Vn(t[r],e,n);else if(ti(t)||Ns(t))t.forEach(r=>{Vn(r,e,n)});else if(yg(t)){for(const r in t)Vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(t,e,n,r){try{return r?t(...r):t()}catch(s){ul(s,e,n)}}function bn(t,e,n,r){if(ye(t)){const s=yo(t,e,n,r);return s&&mg(s)&&s.catch(i=>{ul(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bn(t[i],e,n,r));return s}}function ul(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Mr(),yo(i,null,10,[t,c,u]),Lr();return}}d2(t,n,s,r,o)}function d2(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let dn=-1;const Vs=[];let ar=null,Is=0;const $g=Promise.resolve();let Pa=null;function hl(t){const e=Pa||$g;return t?e.then(this?t.bind(this):t):e}function p2(t){let e=dn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=Zi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function lh(t){if(!(t.flags&1)){const e=Zi(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=Zi(n)?Ct.push(t):Ct.splice(p2(e),0,t),t.flags|=1,Hg()}}function Hg(){Pa||(Pa=$g.then(Wg))}function m2(t){ie(t)?Vs.push(...t):ar&&t.id===-1?ar.splice(Is+1,0,t):t.flags&1||(Vs.push(t),t.flags|=1),Hg()}function vd(t,e,n=dn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qg(t){if(Vs.length){const e=[...new Set(Vs)].sort((n,r)=>Zi(n)-Zi(r));if(Vs.length=0,ar){ar.push(...e);return}for(ar=e,Is=0;Is<ar.length;Is++){const n=ar[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,Is=0}}const Zi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wg(t){try{for(dn=0;dn<Ct.length;dn++){const e=Ct[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Ct.length;dn++){const e=Ct[dn];e&&(e.flags&=-2)}dn=-1,Ct.length=0,qg(),Pa=null,(Ct.length||Vs.length)&&Wg()}}let Ze=null,Kg=null;function Ra(t){const e=Ze;return Ze=t,Kg=t&&t.type.__scopeId||null,e}function Nt(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Cd(-1);const i=Ra(e);let o;try{o=t(...s)}finally{Ra(i),r._d&&Cd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(t,e){if(Ze===null)return t;const n=ml(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ce]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function qr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Mr(),bn(c,n,8,[t.el,l,t,e]),Lr())}}const g2=Symbol("_vte"),y2=t=>t.__isTeleport;function ch(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ch(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function uh(t,e){return ye(t)?ft({name:t.name},e,{setup:t}):t}function Gg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ca(t,e,n,r,s=!1){if(ie(t)){t.forEach((P,b)=>Ca(P,e&&(ie(e)?e[b]:e),n,r,s));return}if(Ds(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ca(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ml(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=Re(p),y=p===Ce?()=>!1:P=>ke(m,P);if(u!=null&&u!==c&&(Xe(u)?(f[u]=null,y(u)&&(p[u]=null)):Ke(u)&&(u.value=null)),ye(c))yo(c,l,12,[o,f]);else{const P=Xe(c),b=Ke(c);if(P||b){const O=()=>{if(t.f){const x=P?y(c)?p[c]:f[c]:c.value;s?ie(x)&&Xu(x,i):ie(x)?x.includes(i)||x.push(i):P?(f[c]=[i],y(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else P?(f[c]=o,y(c)&&(p[c]=o)):b&&(c.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,zt(O,n)):O()}}}al().requestIdleCallback;al().cancelIdleCallback;const Ds=t=>!!t.type.__asyncLoader,Qg=t=>t.type.__isKeepAlive;function _2(t,e){Yg(t,"a",e)}function v2(t,e){Yg(t,"da",e)}function Yg(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qg(s.parent.vnode)&&E2(r,e,n,s),s=s.parent}}function E2(t,e,n,r){const s=fl(e,t,r,!0);Xg(()=>{Xu(r[e],s)},n)}function fl(t,e,n=st,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mr();const l=_o(n),c=bn(e,n,t,o);return l(),Lr(),c});return r?s.unshift(i):s.push(i),i}}const Qn=t=>(e,n=st)=>{(!no||t==="sp")&&fl(t,(...r)=>e(...r),n)},w2=Qn("bm"),T2=Qn("m"),b2=Qn("bu"),I2=Qn("u"),A2=Qn("bum"),Xg=Qn("um"),S2=Qn("sp"),P2=Qn("rtg"),R2=Qn("rtc");function C2(t,e=st){fl("ec",t,e)}const x2="components";function Bn(t,e){return O2(x2,t,!0,e)||t}const k2=Symbol.for("v-ndc");function O2(t,e,n=!0,r=!1){const s=Ze||st;if(s){const i=s.type;{const l=wE(i,!1);if(l&&(l===e||l===qt(e)||l===ol(qt(e))))return i}const o=Ed(s[t]||i[t],e)||Ed(s.appContext[t],e);return!o&&r?i:o}}function Ed(t,e){return t&&(t[e]||t[qt(e)]||t[ol(qt(e))])}function Hc(t,e,n,r){let s;const i=n,o=ie(t);if(o||Xe(t)){const l=o&&gr(t);let c=!1;l&&(c=!Xt(t),t=cl(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?wt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function N2(t,e,n={},r,s){if(Ze.ce||Ze.parent&&Ds(Ze.parent)&&Ze.parent.ce)return e!=="default"&&(n.name=e),Ee(),ct(rt,null,[de("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ee();const o=i&&Jg(i(n)),l=n.key||o&&o.key,c=ct(rt,{key:(l&&!ln(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Jg(t){return t.some(e=>to(e)?!(e.type===Ir||e.type===rt&&!Jg(e.children)):!0)?t:null}const qc=t=>t?vy(t)?ml(t):qc(t.parent):null,Fi=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qc(t.parent),$root:t=>qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ey(t),$forceUpdate:t=>t.f||(t.f=()=>{lh(t.update)}),$nextTick:t=>t.n||(t.n=hl.bind(t.proxy)),$watch:t=>nE.bind(t)}),fc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ke(t,e),V2={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fc(r,e))return o[e]=1,r[e];if(s!==Ce&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ce&&ke(n,e))return o[e]=4,n[e];Wc&&(o[e]=0)}}const f=Fi[e];let p,m;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fc(s,e)?(s[e]=n,!0):r!==Ce&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ce&&ke(t,o)||fc(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(Fi,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xa(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function wd(t,e){return!t||!e?t||e:ie(t)&&ie(e)?t.concat(e):ft({},xa(t),xa(e))}let Wc=!0;function D2(t){const e=ey(t),n=t.proxy,r=t.ctx;Wc=!1,e.beforeCreate&&Td(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:P,activated:b,deactivated:O,beforeDestroy:x,beforeUnmount:N,destroyed:F,unmounted:z,render:ee,renderTracked:pe,renderTriggered:I,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:S,components:R,directives:w,filters:it}=e;if(u&&M2(u,r,null),o)for(const fe in o){const we=o[fe];ye(we)&&(r[fe]=we.bind(n))}if(s){const fe=s.call(n,n);Me(fe)&&(t.data=ns(fe))}if(Wc=!0,i)for(const fe in i){const we=i[fe],jt=ye(we)?we.bind(n,n):ye(we.get)?we.get.bind(n,n):_n,en=!ye(we)&&ye(we.set)?we.set.bind(n):_n,Kt=Be({get:jt,set:en});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Ue=>Kt.value=Ue})}if(l)for(const fe in l)Zg(l[fe],r,n,fe);if(c){const fe=ye(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(we=>{la(we,fe[we])})}f&&Td(f,t,"c");function Ve(fe,we){ie(we)?we.forEach(jt=>fe(jt.bind(n))):we&&fe(we.bind(n))}if(Ve(w2,p),Ve(T2,m),Ve(b2,y),Ve(I2,P),Ve(_2,b),Ve(v2,O),Ve(C2,_),Ve(R2,pe),Ve(P2,I),Ve(A2,N),Ve(Xg,z),Ve(S2,v),ie(A))if(A.length){const fe=t.exposed||(t.exposed={});A.forEach(we=>{Object.defineProperty(fe,we,{get:()=>n[we],set:jt=>n[we]=jt})})}else t.exposed||(t.exposed={});ee&&t.render===_n&&(t.render=ee),S!=null&&(t.inheritAttrs=S),R&&(t.components=R),w&&(t.directives=w),v&&Gg(t)}function M2(t,e,n=_n){ie(t)&&(t=Kc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Td(t,e,n){bn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zg(t,e,n,r){let s=r.includes(".")?dy(n,r):()=>n[r];if(Xe(t)){const i=e[t];ye(i)&&_r(s,i)}else if(ye(t))_r(s,t.bind(n));else if(Me(t))if(ie(t))t.forEach(i=>Zg(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&_r(s,i,t)}}function ey(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ka(c,u,o,!0)),ka(c,e,o)),Me(e)&&i.set(e,c),c}function ka(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ka(t,i,n,!0),s&&s.forEach(o=>ka(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=L2[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const L2={data:bd,props:Id,emits:Id,methods:Si,computed:Si,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Si,directives:Si,watch:U2,provide:bd,inject:F2};function bd(t,e){return e?t?function(){return ft(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function F2(t,e){return Si(Kc(t),Kc(e))}function Kc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?ft(Object.create(null),t,e):e}function Id(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ft(Object.create(null),xa(t),xa(e??{})):e}function U2(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function ty(){return{app:null,config:{isNativeTag:b0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j2=0;function B2(t,e){return function(r,s=null){ye(r)||(r=ft({},r)),s!=null&&!Me(s)&&(s=null);const i=ty(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:j2++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ye(f.install)?(o.add(f),f.install(u,...p)):ye(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const y=u._ceVNode||de(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),c=!0,u._container=f,f.__vue_app__=u,ml(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(bn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=es;es=u;try{return f()}finally{es=p}}};return u}}let es=null;function la(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=st||Ze;if(r||es){const s=es?es._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}function z2(){return!!(st||Ze||es)}const ny={},ry=()=>Object.create(ny),sy=t=>Object.getPrototypeOf(t)===ny;function $2(t,e,n,r=!1){const s={},i=ry();t.propsDefaults=Object.create(null),iy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ug(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function H2(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(dl(t.emitsOptions,m))continue;const y=e[m];if(c)if(ke(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const P=qt(m);s[P]=Gc(c,l,P,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{iy(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=Gn(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Gc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Nn(t.attrs,"set","")}function iy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Di(c))continue;const u=e[c];let f;s&&ke(s,f=qt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:dl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Gc(s,c,p,u[p],t,!ke(u,p))}}return o}function Gc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=_o(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}const q2=new WeakMap;function oy(t,e,n=!1){const r=n?q2:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ye(t)){const f=p=>{c=!0;const[m,y]=oy(p,e,!0);ft(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&r.set(t,Os),Os;if(ie(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);Ad(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=qt(f);if(Ad(p)){const m=i[f],y=o[p]=ie(m)||ye(m)?{type:m}:ft({},m),P=y.type;let b=!1,O=!0;if(ie(P))for(let x=0;x<P.length;++x){const N=P[x],F=ye(N)&&N.name;if(F==="Boolean"){b=!0;break}else F==="String"&&(O=!1)}else b=ye(P)&&P.name==="Boolean";y[0]=b,y[1]=O,(b||ke(y,"default"))&&l.push(p)}}const u=[o,l];return Me(t)&&r.set(t,u),u}function Ad(t){return t[0]!=="$"&&!Di(t)}const ay=t=>t[0]==="_"||t==="$stable",hh=t=>ie(t)?t.map(mn):[mn(t)],W2=(t,e,n)=>{if(e._n)return e;const r=Nt((...s)=>hh(e(...s)),n);return r._c=!1,r},ly=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ay(s))continue;const i=t[s];if(ye(i))e[s]=W2(s,i,r);else if(i!=null){const o=hh(i);e[s]=()=>o}}},cy=(t,e)=>{const n=hh(e);t.slots.default=()=>n},uy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},K2=(t,e,n)=>{const r=t.slots=ry();if(t.vnode.shapeFlag&32){const s=e._;s?(uy(r,e,n),n&&_g(r,"_",s,!0)):ly(e,r)}else e&&cy(t,e)},G2=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:uy(s,e,n):(i=!e.$stable,ly(e,s)),o=e}else e&&(cy(t,e),o={default:1});if(i)for(const l in s)!ay(l)&&o[l]==null&&delete s[l]},zt=cE;function Q2(t){return Y2(t)}function Y2(t,e){const n=al();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=_n,insertStaticContent:P}=t,b=(E,T,C,L=null,B=null,U=null,Q=void 0,K=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!Ti(E,T)&&(L=M(E),Ue(E,B,U,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:H,ref:oe,shapeFlag:X}=T;switch(H){case pl:O(E,T,C,L);break;case Ir:x(E,T,C,L);break;case pc:E==null&&N(T,C,L,Q);break;case rt:R(E,T,C,L,B,U,Q,K,W);break;default:X&1?ee(E,T,C,L,B,U,Q,K,W):X&6?w(E,T,C,L,B,U,Q,K,W):(X&64||X&128)&&H.process(E,T,C,L,B,U,Q,K,W,te)}oe!=null&&B&&Ca(oe,E&&E.ref,U,T||E,!T)},O=(E,T,C,L)=>{if(E==null)r(T.el=l(T.children),C,L);else{const B=T.el=E.el;T.children!==E.children&&u(B,T.children)}},x=(E,T,C,L)=>{E==null?r(T.el=c(T.children||""),C,L):T.el=E.el},N=(E,T,C,L)=>{[E.el,E.anchor]=P(E.children,T,C,L,E.el,E.anchor)},F=({el:E,anchor:T},C,L)=>{let B;for(;E&&E!==T;)B=m(E),r(E,C,L),E=B;r(T,C,L)},z=({el:E,anchor:T})=>{let C;for(;E&&E!==T;)C=m(E),s(E),E=C;s(T)},ee=(E,T,C,L,B,U,Q,K,W)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),E==null?pe(T,C,L,B,U,Q,K,W):v(E,T,B,U,Q,K,W)},pe=(E,T,C,L,B,U,Q,K)=>{let W,H;const{props:oe,shapeFlag:X,transition:re,dirs:he}=E;if(W=E.el=o(E.type,U,oe&&oe.is,oe),X&8?f(W,E.children):X&16&&_(E.children,W,null,L,B,dc(E,U),Q,K),he&&qr(E,null,L,"created"),I(W,E,E.scopeId,Q,L),oe){for(const _e in oe)_e!=="value"&&!Di(_e)&&i(W,_e,null,oe[_e],U,L);"value"in oe&&i(W,"value",null,oe.value,U),(H=oe.onVnodeBeforeMount)&&fn(H,L,E)}he&&qr(E,null,L,"beforeMount");const ae=X2(B,re);ae&&re.beforeEnter(W),r(W,T,C),((H=oe&&oe.onVnodeMounted)||ae||he)&&zt(()=>{H&&fn(H,L,E),ae&&re.enter(W),he&&qr(E,null,L,"mounted")},B)},I=(E,T,C,L,B)=>{if(C&&y(E,C),L)for(let U=0;U<L.length;U++)y(E,L[U]);if(B){let U=B.subTree;if(T===U||gy(U.type)&&(U.ssContent===T||U.ssFallback===T)){const Q=B.vnode;I(E,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},_=(E,T,C,L,B,U,Q,K,W=0)=>{for(let H=W;H<E.length;H++){const oe=E[H]=K?lr(E[H]):mn(E[H]);b(null,oe,T,C,L,B,U,Q,K)}},v=(E,T,C,L,B,U,Q)=>{const K=T.el=E.el;let{patchFlag:W,dynamicChildren:H,dirs:oe}=T;W|=E.patchFlag&16;const X=E.props||Ce,re=T.props||Ce;let he;if(C&&Wr(C,!1),(he=re.onVnodeBeforeUpdate)&&fn(he,C,T,E),oe&&qr(T,E,C,"beforeUpdate"),C&&Wr(C,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&f(K,""),H?A(E.dynamicChildren,H,K,C,L,dc(T,B),U):Q||we(E,T,K,null,C,L,dc(T,B),U,!1),W>0){if(W&16)S(K,X,re,C,B);else if(W&2&&X.class!==re.class&&i(K,"class",null,re.class,B),W&4&&i(K,"style",X.style,re.style,B),W&8){const ae=T.dynamicProps;for(let _e=0;_e<ae.length;_e++){const Ie=ae[_e],pt=X[Ie],ot=re[Ie];(ot!==pt||Ie==="value")&&i(K,Ie,pt,ot,B,C)}}W&1&&E.children!==T.children&&f(K,T.children)}else!Q&&H==null&&S(K,X,re,C,B);((he=re.onVnodeUpdated)||oe)&&zt(()=>{he&&fn(he,C,T,E),oe&&qr(T,E,C,"updated")},L)},A=(E,T,C,L,B,U,Q)=>{for(let K=0;K<T.length;K++){const W=E[K],H=T[K],oe=W.el&&(W.type===rt||!Ti(W,H)||W.shapeFlag&70)?p(W.el):C;b(W,H,oe,null,L,B,U,Q,!0)}},S=(E,T,C,L,B)=>{if(T!==C){if(T!==Ce)for(const U in T)!Di(U)&&!(U in C)&&i(E,U,T[U],null,B,L);for(const U in C){if(Di(U))continue;const Q=C[U],K=T[U];Q!==K&&U!=="value"&&i(E,U,K,Q,B,L)}"value"in C&&i(E,"value",T.value,C.value,B)}},R=(E,T,C,L,B,U,Q,K,W)=>{const H=T.el=E?E.el:l(""),oe=T.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:he}=T;he&&(K=K?K.concat(he):he),E==null?(r(H,C,L),r(oe,C,L),_(T.children||[],C,oe,B,U,Q,K,W)):X>0&&X&64&&re&&E.dynamicChildren?(A(E.dynamicChildren,re,C,B,U,Q,K),(T.key!=null||B&&T===B.subTree)&&hy(E,T,!0)):we(E,T,C,oe,B,U,Q,K,W)},w=(E,T,C,L,B,U,Q,K,W)=>{T.slotScopeIds=K,E==null?T.shapeFlag&512?B.ctx.activate(T,C,L,Q,W):it(T,C,L,B,U,Q,W):xt(E,T,W)},it=(E,T,C,L,B,U,Q)=>{const K=E.component=mE(E,L,B);if(Qg(E)&&(K.ctx.renderer=te),yE(K,!1,Q),K.asyncDep){if(B&&B.registerDep(K,Ve,Q),!E.el){const W=K.subTree=de(Ir);x(null,W,T,C)}}else Ve(K,E,T,C,B,U,Q)},xt=(E,T,C)=>{const L=T.component=E.component;if(aE(E,T,C))if(L.asyncDep&&!L.asyncResolved){fe(L,T,C);return}else L.next=T,L.update();else T.el=E.el,L.vnode=T},Ve=(E,T,C,L,B,U,Q)=>{const K=()=>{if(E.isMounted){let{next:X,bu:re,u:he,parent:ae,vnode:_e}=E;{const mt=fy(E);if(mt){X&&(X.el=_e.el,fe(E,X,Q)),mt.asyncDep.then(()=>{E.isUnmounted||K()});return}}let Ie=X,pt;Wr(E,!1),X?(X.el=_e.el,fe(E,X,Q)):X=_e,re&&aa(re),(pt=X.props&&X.props.onVnodeBeforeUpdate)&&fn(pt,ae,X,_e),Wr(E,!0);const ot=Pd(E),Gt=E.subTree;E.subTree=ot,b(Gt,ot,p(Gt.el),M(Gt),E,B,U),X.el=ot.el,Ie===null&&lE(E,ot.el),he&&zt(he,B),(pt=X.props&&X.props.onVnodeUpdated)&&zt(()=>fn(pt,ae,X,_e),B)}else{let X;const{el:re,props:he}=T,{bm:ae,m:_e,parent:Ie,root:pt,type:ot}=E,Gt=Ds(T);Wr(E,!1),ae&&aa(ae),!Gt&&(X=he&&he.onVnodeBeforeMount)&&fn(X,Ie,T),Wr(E,!0);{pt.ce&&pt.ce._injectChildStyle(ot);const mt=E.subTree=Pd(E);b(null,mt,C,L,E,B,U),T.el=mt.el}if(_e&&zt(_e,B),!Gt&&(X=he&&he.onVnodeMounted)){const mt=T;zt(()=>fn(X,Ie,mt),B)}(T.shapeFlag&256||Ie&&Ds(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&zt(E.a,B),E.isMounted=!0,T=C=L=null}};E.scope.on();const W=E.effect=new Ag(K);E.scope.off();const H=E.update=W.run.bind(W),oe=E.job=W.runIfDirty.bind(W);oe.i=E,oe.id=E.uid,W.scheduler=()=>lh(oe),Wr(E,!0),H()},fe=(E,T,C)=>{T.component=E;const L=E.vnode.props;E.vnode=T,E.next=null,H2(E,T.props,L,C),G2(E,T.children,C),Mr(),vd(E),Lr()},we=(E,T,C,L,B,U,Q,K,W=!1)=>{const H=E&&E.children,oe=E?E.shapeFlag:0,X=T.children,{patchFlag:re,shapeFlag:he}=T;if(re>0){if(re&128){en(H,X,C,L,B,U,Q,K,W);return}else if(re&256){jt(H,X,C,L,B,U,Q,K,W);return}}he&8?(oe&16&&kt(H,B,U),X!==H&&f(C,X)):oe&16?he&16?en(H,X,C,L,B,U,Q,K,W):kt(H,B,U,!0):(oe&8&&f(C,""),he&16&&_(X,C,L,B,U,Q,K,W))},jt=(E,T,C,L,B,U,Q,K,W)=>{E=E||Os,T=T||Os;const H=E.length,oe=T.length,X=Math.min(H,oe);let re;for(re=0;re<X;re++){const he=T[re]=W?lr(T[re]):mn(T[re]);b(E[re],he,C,null,B,U,Q,K,W)}H>oe?kt(E,B,U,!0,!1,X):_(T,C,L,B,U,Q,K,W,X)},en=(E,T,C,L,B,U,Q,K,W)=>{let H=0;const oe=T.length;let X=E.length-1,re=oe-1;for(;H<=X&&H<=re;){const he=E[H],ae=T[H]=W?lr(T[H]):mn(T[H]);if(Ti(he,ae))b(he,ae,C,null,B,U,Q,K,W);else break;H++}for(;H<=X&&H<=re;){const he=E[X],ae=T[re]=W?lr(T[re]):mn(T[re]);if(Ti(he,ae))b(he,ae,C,null,B,U,Q,K,W);else break;X--,re--}if(H>X){if(H<=re){const he=re+1,ae=he<oe?T[he].el:L;for(;H<=re;)b(null,T[H]=W?lr(T[H]):mn(T[H]),C,ae,B,U,Q,K,W),H++}}else if(H>re)for(;H<=X;)Ue(E[H],B,U,!0),H++;else{const he=H,ae=H,_e=new Map;for(H=ae;H<=re;H++){const at=T[H]=W?lr(T[H]):mn(T[H]);at.key!=null&&_e.set(at.key,H)}let Ie,pt=0;const ot=re-ae+1;let Gt=!1,mt=0;const Zn=new Array(ot);for(H=0;H<ot;H++)Zn[H]=0;for(H=he;H<=X;H++){const at=E[H];if(pt>=ot){Ue(at,B,U,!0);continue}let Qt;if(at.key!=null)Qt=_e.get(at.key);else for(Ie=ae;Ie<=re;Ie++)if(Zn[Ie-ae]===0&&Ti(at,T[Ie])){Qt=Ie;break}Qt===void 0?Ue(at,B,U,!0):(Zn[Qt-ae]=H+1,Qt>=mt?mt=Qt:Gt=!0,b(at,T[Qt],C,null,B,U,Q,K,W),pt++)}const li=Gt?J2(Zn):Os;for(Ie=li.length-1,H=ot-1;H>=0;H--){const at=ae+H,Qt=T[at],No=at+1<oe?T[at+1].el:L;Zn[H]===0?b(null,Qt,C,No,B,U,Q,K,W):Gt&&(Ie<0||H!==li[Ie]?Kt(Qt,C,No,2):Ie--)}}},Kt=(E,T,C,L,B=null)=>{const{el:U,type:Q,transition:K,children:W,shapeFlag:H}=E;if(H&6){Kt(E.component.subTree,T,C,L);return}if(H&128){E.suspense.move(T,C,L);return}if(H&64){Q.move(E,T,C,te);return}if(Q===rt){r(U,T,C);for(let X=0;X<W.length;X++)Kt(W[X],T,C,L);r(E.anchor,T,C);return}if(Q===pc){F(E,T,C);return}if(L!==2&&H&1&&K)if(L===0)K.beforeEnter(U),r(U,T,C),zt(()=>K.enter(U),B);else{const{leave:X,delayLeave:re,afterLeave:he}=K,ae=()=>r(U,T,C),_e=()=>{X(U,()=>{ae(),he&&he()})};re?re(U,ae,_e):_e()}else r(U,T,C)},Ue=(E,T,C,L=!1,B=!1)=>{const{type:U,props:Q,ref:K,children:W,dynamicChildren:H,shapeFlag:oe,patchFlag:X,dirs:re,cacheIndex:he}=E;if(X===-2&&(B=!1),K!=null&&Ca(K,null,C,E,!0),he!=null&&(T.renderCache[he]=void 0),oe&256){T.ctx.deactivate(E);return}const ae=oe&1&&re,_e=!Ds(E);let Ie;if(_e&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&fn(Ie,T,E),oe&6)hn(E.component,C,L);else{if(oe&128){E.suspense.unmount(C,L);return}ae&&qr(E,null,T,"beforeUnmount"),oe&64?E.type.remove(E,T,C,te,L):H&&!H.hasOnce&&(U!==rt||X>0&&X&64)?kt(H,T,C,!1,!0):(U===rt&&X&384||!B&&oe&16)&&kt(W,T,C),L&&je(E)}(_e&&(Ie=Q&&Q.onVnodeUnmounted)||ae)&&zt(()=>{Ie&&fn(Ie,T,E),ae&&qr(E,null,T,"unmounted")},C)},je=E=>{const{type:T,el:C,anchor:L,transition:B}=E;if(T===rt){Jn(C,L);return}if(T===pc){z(E);return}const U=()=>{s(C),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:K}=B,W=()=>Q(C,U);K?K(E.el,U,W):W()}else U()},Jn=(E,T)=>{let C;for(;E!==T;)C=m(E),s(E),E=C;s(T)},hn=(E,T,C)=>{const{bum:L,scope:B,job:U,subTree:Q,um:K,m:W,a:H}=E;Sd(W),Sd(H),L&&aa(L),B.stop(),U&&(U.flags|=8,Ue(Q,E,T,C)),K&&zt(K,T),zt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},kt=(E,T,C,L=!1,B=!1,U=0)=>{for(let Q=U;Q<E.length;Q++)Ue(E[Q],T,C,L,B)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),C=T&&T[g2];return C?m(C):T};let J=!1;const Y=(E,T,C)=>{E==null?T._vnode&&Ue(T._vnode,null,null,!0):b(T._vnode||null,E,T,null,null,null,C),T._vnode=E,J||(J=!0,vd(),qg(),J=!1)},te={p:b,um:Ue,m:Kt,r:je,mt:it,mc:_,pc:we,pbc:A,n:M,o:t};return{render:Y,hydrate:void 0,createApp:B2(Y)}}function dc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function X2(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hy(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=lr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&hy(o,l)),l.type===pl&&(l.el=o.el)}}function J2(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function fy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fy(e)}function Sd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Z2=Symbol.for("v-scx"),eE=()=>Jt(Z2);function tE(t,e){return fh(t,null,{flush:"sync"})}function _r(t,e,n){return fh(t,e,n)}function fh(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,l=ft({},n),c=e&&r||!e&&i!=="post";let u;if(no){if(i==="sync"){const y=eE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=_n,y.resume=_n,y.pause=_n,y}}const f=st;l.call=(y,P,b)=>bn(y,f,P,b);let p=!1;i==="post"?l.scheduler=y=>{zt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,P)=>{P?y():lh(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=f2(t,e,l);return no&&(u?u.push(m):c&&m()),m}function nE(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?dy(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=_o(this),l=fh(s,i.bind(r),n);return o(),l}function dy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rE(t,e,n=Ce){const r=gE(),s=qt(e),i=Gn(e),o=py(t,s),l=i2((c,u)=>{let f,p=Ce,m;return tE(()=>{const y=t[s];Mt(f,y)&&(f=y,u())}),{get(){return c(),n.get?n.get(f):f},set(y){const P=n.set?n.set(y):y;if(!Mt(P,f)&&!(p!==Ce&&Mt(y,p)))return;const b=r.vnode.props;b&&(e in b||s in b||i in b)&&(`onUpdate:${e}`in b||`onUpdate:${s}`in b||`onUpdate:${i}`in b)||(f=y,u()),r.emit(`update:${e}`,P),Mt(y,P)&&Mt(y,p)&&!Mt(P,m)&&u(),p=y,m=P}}});return l[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?o||Ce:l,done:!1}:{done:!0}}}},l}const py=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Gn(e)}Modifiers`];function sE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&py(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Xe(f)?f.trim():f)),o.number&&(s=n.map(Ia)));let l,c=r[l=ac(e)]||r[l=ac(qt(e))];!c&&i&&(c=r[l=ac(Gn(e))]),c&&bn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,bn(u,t,6,s)}}function my(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ye(t)){const c=u=>{const f=my(u,e,!0);f&&(l=!0,ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):ft(o,i),Me(t)&&r.set(t,o),o)}function dl(t,e){return!t||!sl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Gn(e))||ke(t,e))}function Pd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:P,inheritAttrs:b}=t,O=Ra(t);let x,N;try{if(n.shapeFlag&4){const z=s||r,ee=z;x=mn(u.call(ee,z,f,p,y,m,P)),N=l}else{const z=e;x=mn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),N=e.props?l:iE(l)}}catch(z){Ui.length=0,ul(z,t,1),x=de(Ir)}let F=x;if(N&&b!==!1){const z=Object.keys(N),{shapeFlag:ee}=F;z.length&&ee&7&&(i&&z.some(Yu)&&(N=oE(N,i)),F=Bs(F,N,!1,!0))}return n.dirs&&(F=Bs(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&ch(F,n.transition),x=F,Ra(O),x}const iE=t=>{let e;for(const n in t)(n==="class"||n==="style"||sl(n))&&((e||(e={}))[n]=t[n]);return e},oE=(t,e)=>{const n={};for(const r in t)(!Yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!dl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Rd(r,o,u):!0:!!o;return!1}function Rd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dl(n,i))return!0}return!1}function lE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const gy=t=>t.__isSuspense;function cE(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):m2(t)}const rt=Symbol.for("v-fgt"),pl=Symbol.for("v-txt"),Ir=Symbol.for("v-cmt"),pc=Symbol.for("v-stc"),Ui=[];let $t=null;function Ee(t=!1){Ui.push($t=t?null:[])}function uE(){Ui.pop(),$t=Ui[Ui.length-1]||null}let eo=1;function Cd(t,e=!1){eo+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function yy(t){return t.dynamicChildren=eo>0?$t||Os:null,uE(),eo>0&&$t&&$t.push(t),t}function Ye(t,e,n,r,s,i){return yy(D(t,e,n,r,s,i,!0))}function ct(t,e,n,r,s){return yy(de(t,e,n,r,s,!0))}function to(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const _y=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||Ke(t)||ye(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===rt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_y(e),ref:e&&ca(e),scopeId:Kg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return l?(dh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),eo>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const de=hE;function hE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===k2)&&(t=Ir),to(t)){const l=Bs(t,e,!0);return n&&dh(l,n),eo>0&&!i&&$t&&(l.shapeFlag&6?$t[$t.indexOf(t)]=l:$t.push(l)),l.patchFlag=-2,l}if(TE(t)&&(t=t.__vccOpts),e){e=fE(e);let{class:l,style:c}=e;l&&!Xe(l)&&(e.class=Lt(l)),Me(c)&&(oh(c)&&!ie(c)&&(c=ft({},c)),e.style=Zu(c))}const o=Xe(t)?1:gy(t)?128:y2(t)?64:Me(t)?4:ye(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function fE(t){return t?oh(t)||sy(t)?ft({},t):t:null}function Bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?ph(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&_y(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bs(t.ssContent),ssFallback:t.ssFallback&&Bs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ch(f,c.clone(f)),f}function He(t=" ",e=0){return de(pl,null,t,e)}function nn(t="",e=!1){return e?(Ee(),ct(Ir,null,t)):de(Ir,null,t)}function mn(t){return t==null||typeof t=="boolean"?de(Ir):ie(t)?de(rt,null,t.slice()):to(t)?lr(t):de(pl,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bs(t)}function dh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!sy(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[He(e)]):n=8);t.children=e,t.shapeFlag|=n}function ph(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lt([e.class,r.class]));else if(s==="style")e.style=Zu([e.style,r.style]);else if(sl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){bn(t,e,7,[n,r])}const dE=ty();let pE=0;function mE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dE,i={uid:pE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oy(r,s),emitsOptions:my(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sE.bind(null,i),t.ce&&t.ce(i),i}let st=null;const gE=()=>st||Ze;let Oa,Qc;{const t=al(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Qc=e("__VUE_SSR_SETTERS__",n=>no=n)}const _o=t=>{const e=st;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},xd=()=>{st&&st.scope.off(),Oa(null)};function vy(t){return t.vnode.shapeFlag&4}let no=!1;function yE(t,e=!1,n=!1){e&&Qc(e);const{props:r,children:s}=t.vnode,i=vy(t);$2(t,r,i,e),K2(t,s,n);const o=i?_E(t,e):void 0;return e&&Qc(!1),o}function _E(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,V2);const{setup:r}=n;if(r){Mr();const s=t.setupContext=r.length>1?EE(t):null,i=_o(t),o=yo(r,t,0,[t.props,s]),l=mg(o);if(Lr(),i(),(l||t.sp)&&!Ds(t)&&Gg(t),l){if(o.then(xd,xd),e)return o.then(c=>{kd(t,c)}).catch(c=>{ul(c,t,0)});t.asyncDep=o}else kd(t,o)}else Ey(t)}function kd(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=zg(e)),Ey(t)}function Ey(t,e,n){const r=t.type;t.render||(t.render=r.render||_n);{const s=_o(t);Mr();try{D2(t)}finally{Lr(),s()}}}const vE={get(t,e){return Et(t,"get",""),t[e]}};function EE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vE),slots:t.slots,emit:t.emit,expose:e}}function ml(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zg(ah(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)},has(e,n){return n in e||n in Fi}})):t.proxy}function wE(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function TE(t){return ye(t)&&"__vccOpts"in t}const Be=(t,e)=>u2(t,e,no);function mh(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ie(e)?to(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&to(n)&&(n=[n]),de(t,e,n))}const bE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const Od=typeof window<"u"&&window.trustedTypes;if(Od)try{Yc=Od.createPolicy("vue",{createHTML:t=>t})}catch{}const wy=Yc?t=>Yc.createHTML(t):t=>t,IE="http://www.w3.org/2000/svg",AE="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Nd=On&&On.createElement("template"),SE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS(IE,t):e==="mathml"?On.createElementNS(AE,t):n?On.createElement(t,{is:n}):On.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nd.innerHTML=wy(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Nd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},PE=Symbol("_vtc");function RE(t,e,n){const r=t[PE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Na=Symbol("_vod"),Ty=Symbol("_vsh"),Yr={beforeMount(t,{value:e},{transition:n}){t[Na]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):bi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),bi(t,!0),r.enter(t)):r.leave(t,()=>{bi(t,!1)}):bi(t,e))},beforeUnmount(t,{value:e}){bi(t,e)}};function bi(t,e){t.style.display=e?t[Na]:"none",t[Ty]=!e}const CE=Symbol(""),xE=/(^|;)\s*display\s*:/;function kE(t,e,n){const r=t.style,s=Xe(n);let i=!1;if(n&&!s){if(e)if(Xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ua(r,l,"")}else for(const o in e)n[o]==null&&ua(r,o,"");for(const o in n)o==="display"&&(i=!0),ua(r,o,n[o])}else if(s){if(e!==n){const o=r[CE];o&&(n+=";"+o),r.cssText=n,i=xE.test(n)}}else e&&t.removeAttribute("style");Na in t&&(t[Na]=i?r.display:"",t[Ty]&&(r.display="none"))}const Vd=/\s*!important$/;function ua(t,e,n){if(ie(n))n.forEach(r=>ua(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=OE(t,e);Vd.test(n)?t.setProperty(Gn(r),n.replace(Vd,""),"important"):t[r]=n}}const Dd=["Webkit","Moz","ms"],mc={};function OE(t,e){const n=mc[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return mc[e]=r;r=ol(r);for(let s=0;s<Dd.length;s++){const i=Dd[s]+r;if(i in t)return mc[e]=i}return e}const Md="http://www.w3.org/1999/xlink";function Ld(t,e,n,r,s,i=N0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Md,e.slice(6,e.length)):t.setAttributeNS(Md,e,n):n==null||i&&!vg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ln(n)?String(n):n)}function Fd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Mn(t,e,n,r){t.addEventListener(e,n,r)}function NE(t,e,n,r){t.removeEventListener(e,n,r)}const Ud=Symbol("_vei");function VE(t,e,n,r,s=null){const i=t[Ud]||(t[Ud]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=DE(e);if(r){const u=i[e]=FE(r,s);Mn(t,l,u,c)}else o&&(NE(t,l,o,c),i[e]=void 0)}}const jd=/(?:Once|Passive|Capture)$/;function DE(t){let e;if(jd.test(t)){e={};let r;for(;r=t.match(jd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gn(t.slice(2)),e]}let gc=0;const ME=Promise.resolve(),LE=()=>gc||(ME.then(()=>gc=0),gc=Date.now());function FE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bn(UE(r,n.value),e,5,[r])};return n.value=t,n.attached=LE(),n}function UE(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?RE(t,r,o):e==="style"?kE(t,n,r):sl(e)?Yu(e)||VE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BE(t,e,r,o))?(Fd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ld(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Xe(r))?Fd(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ld(t,e,r,o))};function BE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bd(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bd(e)&&Xe(n)?!1:e in t}const Ar=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>aa(e,n):e};function zE(t){t.target.composing=!0}function zd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zt=Symbol("_assign"),Xc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zt]=Ar(s);const i=r||s.props&&s.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ia(l)),t[Zt](l)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",zE),Mn(t,"compositionend",zd),Mn(t,"change",zd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zt]=Ar(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ia(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},$E={deep:!0,created(t,e,n){t[Zt]=Ar(n),Mn(t,"change",()=>{const r=t._modelValue,s=zs(t),i=t.checked,o=t[Zt];if(ie(r)){const l=eh(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(ti(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(by(t,i))})},mounted:$d,beforeUpdate(t,e,n){t[Zt]=Ar(n),$d(t,e,n)}};function $d(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=eh(e,r.props.value)>-1;else if(ti(e))s=e.has(r.props.value);else{if(e===n)return;s=ts(e,by(t,!0))}t.checked!==s&&(t.checked=s)}const HE={created(t,{value:e},n){t.checked=ts(e,n.props.value),t[Zt]=Ar(n),Mn(t,"change",()=>{t[Zt](zs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Zt]=Ar(r),e!==n&&(t.checked=ts(e,r.props.value))}},qE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ti(e);Mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ia(zs(o)):zs(o));t[Zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,hl(()=>{t._assigning=!1})}),t[Zt]=Ar(r)},mounted(t,{value:e}){Hd(t,e)},beforeUpdate(t,e,n){t[Zt]=Ar(n)},updated(t,{value:e}){t._assigning||Hd(t,e)}};function Hd(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!ti(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=zs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=eh(e,l)>-1}else o.selected=e.has(l);else if(ts(zs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function zs(t){return"_value"in t?t._value:t.value}function by(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const WE={created(t,e,n){Jo(t,e,n,null,"created")},mounted(t,e,n){Jo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Jo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Jo(t,e,n,r,"updated")}};function KE(t,e){switch(t){case"SELECT":return qE;case"TEXTAREA":return Xc;default:switch(e){case"checkbox":return $E;case"radio":return HE;default:return Xc}}}function Jo(t,e,n,r,s){const o=KE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const GE=["ctrl","shift","alt","meta"],QE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GE.some(n=>t[`${n}Key`]&&!e.includes(n))},Jc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=QE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},YE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},XE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Gn(s.key);if(e.some(o=>o===i||YE[o]===i))return t(s)})},JE=ft({patchProp:jE},SE);let qd;function ZE(){return qd||(qd=Q2(JE))}const ew=(...t)=>{const e=ZE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nw(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,tw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nw(t){return Xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Iy;const gl=t=>Iy=t,Ay=Symbol();function Zc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ji;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ji||(ji={}));function rw(){const t=bg(!0),e=t.run(()=>yr({}));let n=[],r=[];const s=ah({install(i){gl(s),s._a=i,i.provide(Ay,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Sy=()=>{};function Wd(t,e,n,r=Sy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ig()&&D0(s),s}function bs(t,...e){t.slice().forEach(n=>{n(...e)})}const sw=t=>t(),Kd=Symbol(),yc=Symbol();function eu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Zc(s)&&Zc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!gr(r)?t[n]=eu(s,r):t[n]=r}return t}const iw=Symbol();function ow(t){return!Zc(t)||!t.hasOwnProperty(iw)}const{assign:or}=Object;function aw(t){return!!(Ke(t)&&t.effect)}function lw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=o2(n.state.value[t]);return or(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=ah(Be(()=>{gl(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=Py(t,u,e,n,r,!0),c}function Py(t,e,n={},r,s,i){let o;const l=or({actions:{}},n),c={deep:!0};let u,f,p=[],m=[],y;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),yr({});let b;function O(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:ji.patchFunction,storeId:t,events:y}):(eu(r.state.value[t],_),v={type:ji.patchObject,payload:_,storeId:t,events:y});const A=b=Symbol();hl().then(()=>{b===A&&(u=!0)}),f=!0,bs(p,v,r.state.value[t])}const x=i?function(){const{state:v}=n,A=v?v():{};this.$patch(S=>{or(S,A)})}:Sy;function N(){o.stop(),p=[],m=[],r._s.delete(t)}const F=(_,v="")=>{if(Kd in _)return _[yc]=v,_;const A=function(){gl(r);const S=Array.from(arguments),R=[],w=[];function it(fe){R.push(fe)}function xt(fe){w.push(fe)}bs(m,{args:S,name:A[yc],store:ee,after:it,onError:xt});let Ve;try{Ve=_.apply(this&&this.$id===t?this:ee,S)}catch(fe){throw bs(w,fe),fe}return Ve instanceof Promise?Ve.then(fe=>(bs(R,fe),fe)).catch(fe=>(bs(w,fe),Promise.reject(fe))):(bs(R,Ve),Ve)};return A[Kd]=!0,A[yc]=v,A},z={_p:r,$id:t,$onAction:Wd.bind(null,m),$patch:O,$reset:x,$subscribe(_,v={}){const A=Wd(p,_,v.detached,()=>S()),S=o.run(()=>_r(()=>r.state.value[t],R=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:ji.direct,events:y},R)},or({},c,v)));return A},$dispose:N},ee=ns(z);r._s.set(t,ee);const I=(r._a&&r._a.runWithContext||sw)(()=>r._e.run(()=>(o=bg()).run(()=>e({action:F}))));for(const _ in I){const v=I[_];if(Ke(v)&&!aw(v)||gr(v))i||(P&&ow(v)&&(Ke(v)?v.value=P[_]:eu(v,P[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=F(v,_);I[_]=A,l.actions[_]=v}}return or(ee,I),or(Re(ee),I),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:_=>{O(v=>{or(v,_)})}}),r._p.forEach(_=>{or(ee,o.run(()=>_({store:ee,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(ee.$state,P),u=!0,f=!0,ee}/*! #__NO_SIDE_EFFECTS__ */function gh(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=z2();return o=o||(c?Jt(Ay,null):null),o&&gl(o),o=Iy,o._s.has(t)||(s?Py(t,e,r,o):lw(t,r,o)),o._s.get(t)}return i.$id=t,i}const Ry="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2ISURBVHgB7d1Lb1vHGQbgb0hFt0iWCNuClRWlNoDkTShlEziLKu6ml0USJPu4u+6a/ALLq6KrpL+g8aooEKVOgAbowo69qBLAiMRsbMdCI65qIbAhuoqvlTid98h0aFkW59DnfOeQ8z6AW18Y0yDnneuZGSOKXn65UtkpSkVs4RUjtmyN+/muslCIamKlbozUrTVVKTRqxW25tLZWrYoSIykqlyvjhSF5z1jzVlTYrYwLUTsuEKYhF3eMPed+dal2rVqTlKQSgJ/PVBasmNNWZEGInpOxck6sPfvv69VzkrBEAzA9Uznl/srTwi4NpcBVqDUrdtG1CGclIYkEADV+Q8xfhAWfFCQZhOcKQHmmUi66gs+uDmXDfNyQxpnnGSMUpUPTs/Pvu9H7X91PZ4QoGxU3wXJq7OixjfrNjW+lA7FbgN2ZncKiG5T8QYhyomHMR7WrKx9ITLECgC6PS9zfzU/z90S5Ya1UrbFvx+kSeQcAhb8g5kvhQJdy7NEA+Q3fEHgFgIWfukmcELQNAAs/dSPfEBSkDfT5hYWfuoyr2aPxKiZtDnrdgQFwU50fccBL3Soqu0OF0we95pnrALuPNcgfhaiLuZbgtdLhY7c3b218/Yw/f1rU7zdmlU9vUk+wUm8YO7ffeGDfLlBBXLPBwk+9wsi42X1W7SlPBWC362NPCVEPcV2dBdezWdj7+/u0AObAQQNRt9qvFXgiAI8GvmUh6kGYGnWtwHutv7enBWDtT73NtQKLrb9+HICfzVbeEtb+1OMetQILzV//1AI0zHtCFADT0tOJ1gEePe+zLkSBaNy3pVqtWo9agAK3NFJgCgMS9XiiABhr3hSigFhjMObdDYAtsAWgsBi7+5Cn2T2u0KwKUWAaO3auEJ3VSRSgYlFecZM/8ooQBci6blDBDYDZAlCQrFsBKFjDx54pTMaYSoHP/VPIMA1aFqIwldueCkHUyxgAChoDQEHrkxxpDA7Kg8lJuTs7K/emp2S7VIp+Dwr370v/jRsy8J8bMri+Li9evSpEz8tMz8xZyRgKef31E/LfEyceF/h2+jY3ZWR1VQ59syJ99boQdSLzAKDg10+e9C74eyEIpfMXZHSVjzNRfJkG4OZvfxPV+kkYW16Ww//4QojiyGwM8MO778iPc3OSlNsuSDuuFZlY+lSIfGUyC4SaP8nC3/Tj/Lzccn83CXlSD8CWK6RJdXv2g5bgdop/P/UW1QD8z01rbv7ypKQN79HpoJrCohqArfk52R5P/9k7FH62AuRDdRCMPrqW2256FTNDWEDzdW9qKgrOfbcIxxZEB76fwe/Xo+9qaF3/ZB61ANxxq7satX9Tc1XZ90NNckqW/OF7unt8NvqRxVS2WhcItao2PFLhg4U/H9D6as/iqQUAtbE2n9Ch28PCnx8IAb4TLWoBeJhBADDr1A4Hy/mjWSGpBSCLQaXPe2bRNaOD3ZvuwRYgrzjbkz+a34laAOJMR2q+Zxb/LjqY5neiFgA8tqwNm2fawRw05cuQ4neiFoAsFjmwg6wdzD1Tvmh+J2oBGL6iv4XRJ3R4DUOQH2P/Wo62vGpRC8CAq401+3bocg177hvG6iNDkD0U/sNf6K4EF0tHJhdFgdneFtvXpzbtOLb8Vaxu1/DaWvT6xuCQ7IyORv9WSh8qxeHra3L0s8/l0OXLok31W0Yti4fU0p7mQu0/urIicaHpHVznoDgkqusASPv4+QuSNmyS50kR5EN9IWzctQJp9rfRj+QJEeQrk5VgDDpHUiikIyur6oMo6m6ZPQox8clSoi0Bav6JpSUhiiPTqQ60BP03NqI9vJ1ulsG4An1+TmNSJ3JxNCIeW8YxKVuvznsHAQUftX7cbY9ErXIRgFbRwbhTU9H+gQcvTT5xOO4LbnoTz+7gYNx+5YU16k25CwCRJt4PQEFjAChoDAAFjQGgoDEAFDQGgILGAFDQGAAKGgNAQWMAKGgMAAWNAaCgMQAUtFyd/dG81SV6JHp6SrZLpSceh8Yj0DjuECc3vHhV/6At6j25eBwahbz++onoXHjfI1Nw9An2FR/6ZoUnQFDHMg8ACn79ZOfXmiII2BLJkyCoE5kGIMm7ubK4YI26X2ZjgB/efSfaB5wUXHW041qRiaVPhchXJrNAqPmTLPxNuIdY+5ZB6m7qAdhyhTTNS9DQEvDiO/KlGgAcf4IzgNKG9+DdX+RDNQBb83Mqt8Wj8LMVIB+qg2D00bXgGPa4h2bhPCIEB3cYsAWJD581zm3C5z7UJcfMqwXgjlvd1aj9m5qryr5fRJJTsqHCZ373+Gz0o1umpdW6QFlcSI1HKnyw8CcPLWk3zMipBQC1sTaf0KHbw8KfDoQAn2+eqQXgYQYBwKxTOxwspyvvlYtaALIYVPq8ZxZds5Dcy/nnG/x+AM72pCvvn69aALI4ytznPXnEerry/vmqBQCPLWvD5pl2MG9N6RnK+eerFoAsFkawg6wdXq2Urrx/vmoBGL6iv4XRJ3R4DUOQDlxhlfeLx9UCMKB8pRG6XMOe+4axYskQJAuFvxuurC2WjkwuigKzvS22r09t2nFs+atY3a7htbXo9Y3BIdkZHY3+rRQPKrjh62ty9LPP5dDly9INVL9l1LJ4SC3tqTHU/qMrKxIXmuu8N9mULNV1ANQQ4+cvSNqwSZ4nRZAP9YWw8eXlVPvb6HvyhAjylclKMAadIykU0pGV1a4YeFF+ZPYoxMQnS4m2BKj5J5aWhCiOTKc60BL039iI9vB2ulkG4wr0+TmNSZ3IxdGIeGwZx6RsvTrvHQQUfNT6cbc9ErXKRQBaRQfjTk1F+wcevDT5xOG4L7jpTTy7g4Nx+5UX1qg35S4ARJp4PwAFjQGgoDEAFDQGgILGAFDQGAAKGgNAQWMAKGgMAAWNAaCgMQAUNAaAgsYAUNAYAAparg6/aV5rFO0JmJ6S7VLpif0A2AOA8z5xdMmLV/VPmqPek4v9ACjk9ddPRJcp+J4ZhLN/sLH+0DcrPAKFOpZ5AFDw6yc7v9cXQcCeYB6FQp3INABJXk7XLbcSUr5kNgb44d13oo3wScFdXzuuFZlY+lSIfGUyC4SaP8nC34SLuLvhak7KD/UAbLlCmubNgWgJePMj+VINAM7/wSFYacN78PI78qEagK35uY5PgIsDhZ+tAPlQHQSjj64F9xDEPTUOB3IhOLjEo1dbEHweOFwMn80Q70LQC8Adt7qrUfs3NVeVfb/kJKdk8wyfy93js9EPTh0rdoGyuJEdj1T4CKXw74XWLvRZM7UAoDbW5hM6dHtCLPxNCAE+g1CpBeBhBgHArFM7HCxL0BWAWgCyGFT6vGcWXbO8uRfwZxD8fgCuF4T9GagFIIuz/H3ek3cMhP0ZqAUAjy1rw+aZdjAnHrqhgD8DtQBkseiCHWTt8G6xsD8DtQAMX9HfwugTOrwm5AKAe9YGA14RVgvAgPKdXuhyDXvuG8ZqaIghQOEP/V7lYunI5KIoMNvbYvv61KYdx5a/itXtGl5bi17fGBySndHR6N/ai1AJDV9fk6OffS6HLl+W0Kl+y6hl8ZBa2tNuqP1HV1YkLnQFQu4OhEh1HQC1z/j5C5I2bJLnSRHkQ30hbHx5OdX+Nvq1PCGCfGWyEoxB50gKhXRkZTX4QR3Fk9mjEBOfLCXaEqDmn1haEqI4Mp3qQEvQf2Mj2sPb6WYZjCvQ5+eCFnUiF0cj4rFlHJOy9eq8dxBQ8FHrx932SNQqFwFoFR2MOzUV7R948NLkE4fjvuCmN/HsDg7G7VdeWKPelLsAEGni/QAUNAaAgoYA1IQoTDW2ABQsa6ReMFaqQhQia+sFW7A1IQoQKv+CWPlWiMJUKxR32AWiMDUacsngJ9Ozc5uuJdA7uZYoa1bq33+3WopmgSwHwhQYK/Yi/j8KgDH2nBAFxE2BRmU+CkBjQM4KUVgu4X+iANSq1boVuShEAbDWnqtdq9bw88crwa5PdEaIAmCL8nHz56b1D6Zn5nAmSFmIepTr6dTWr60+Ppxqz7NAbAWot7mezmLrr83eF7AVoF61t/aHp54GbYj9nRD1oL21PzwVADc6vsgZIeo99mNXtp+a7t93P4BFK2CEZwtSb3BluSGy7/i2uN9v1m9u1EuHjz1wS8S/EqIu57r1v3e1/6X9/qz4rP9o89bG16Wjx8ZdfF4Toi7VsPaj2nfVPz3rzw/cEtkYkDPW8EE56k54yNMV/g8Oes2BAYgekbD2beHGeeoymPK0Jiq7BzLioTxTKRfEfClcH6AuEBV+sW80n/c5iFcAgCGgbhCn8IP3sSj4C91o+g2OCSiv0OePU/jBuwVoNT1b+VCseV+IcgKzPfJAztRq1VjrVx0FAKZnKqfcOsGH3EtMmcIiV8MuutmeP0sHitKhzZsb1bEjx/7mEoS1gooQKcO+Xtfn/7Ur/P+UDnXcArSKWgMxp4UDZFKwO9CVU7Vrq5fkOSUSgCYGgdL0aIZncb+H2jqVaACayscrbxorp4w1bwnRc9rt6pjFJGr8vVIJQNPu2oEsuKnTN42YBQ6YyYsb2Fprq8bIucY9ORt3ZifeWylyLUOlYOUX0pCyC0XFvfu4iUJhykIB2j2YGWtLpiE1V+CrOwX5tnalqrbW9H+PuB9UWbSATwAAAABJRU5ErkJggg==",cw=()=>{};var Gd={};/**
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
 */const Cy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new hw;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fw=function(t){const e=Cy(t);return xy.encodeByteArray(e,!0)},Va=function(t){return fw(t).replace(/\./g,"")},ky=function(t){try{return xy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pw=()=>dw().__FIREBASE_DEFAULTS__,mw=()=>{if(typeof process>"u"||typeof Gd>"u")return;const t=Gd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ky(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return cw()||pw()||mw()||gw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oy=t=>{var e,n;return(n=(e=yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yw=t=>{const e=Oy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ny=()=>{var t;return(t=yl())===null||t===void 0?void 0:t.config},Vy=t=>{var e;return(e=yl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){return t.endsWith(".cloudworkstations.dev")}async function Dy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Va(JSON.stringify(n)),Va(JSON.stringify(o)),""].join(".")}const Bi={};function Ew(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bi))Bi[e]?t.emulator.push(e):t.prod.push(e);return t}function ww(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qd=!1;function My(t,e){if(typeof window>"u"||typeof document>"u"||!vo(window.location.host)||Bi[t]===e||Bi[t]||Qd)return;Bi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Ew().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Qd=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ww(r),y=n("text"),P=document.getElementById(y)||document.createElement("span"),b=n("learnmore"),O=document.getElementById(b)||document.createElement("a"),x=n("preprendIcon"),N=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const F=m.element;l(F),f(O,b);const z=u();c(N,x),F.append(N,P,O,z),document.body.appendChild(F)}i?(P.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function bw(){var t;const e=(t=yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Aw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pw(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){return!bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cw(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kw="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kw,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ow(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,l,r)}}function Ow(t,e){return t.replace(Nw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nw=/\{\$([^}]+)}/g;function Vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yd(i)&&Yd(o)){if(!Sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yd(t){return t!==null&&typeof t=="object"}/**
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
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dw(t,e){const n=new Mw(t,e);return n.subscribe.bind(n)}class Mw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_c),s.error===void 0&&(s.error=_c),s.complete===void 0&&(s.complete=_c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class Fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _w;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jw(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uw(t){return t===Gr?void 0:t}function jw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const zw={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},$w=Te.INFO,Hw={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},qw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=$w,this._logHandler=qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Ww=(t,e)=>e.some(n=>t instanceof n);let Xd,Jd;function Kw(){return Xd||(Xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gw(){return Jd||(Jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ly=new WeakMap,tu=new WeakMap,Fy=new WeakMap,vc=new WeakMap,_h=new WeakMap;function Qw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ly.set(n,t)}).catch(()=>{}),_h.set(e,t),e}function Yw(t){if(tu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tu.set(t,e)}let nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xw(t){nu=t(nu)}function Jw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ec(this),e,...n);return Fy.set(r,e.sort?e.sort():[e]),vr(r)}:Gw().includes(t)?function(...e){return t.apply(Ec(this),e),vr(Ly.get(this))}:function(...e){return vr(t.apply(Ec(this),e))}}function Zw(t){return typeof t=="function"?Jw(t):(t instanceof IDBTransaction&&Yw(t),Ww(t,Kw())?new Proxy(t,nu):t)}function vr(t){if(t instanceof IDBRequest)return Qw(t);if(vc.has(t))return vc.get(t);const e=Zw(t);return e!==t&&(vc.set(t,e),_h.set(e,t)),e}const Ec=t=>_h.get(t);function eT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vr(o.result),c.oldVersion,c.newVersion,vr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const tT=["get","getKey","getAll","getAllKeys","count"],nT=["put","add","delete","clear"],wc=new Map;function Zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return wc.set(e,i),i}Xw(t=>({...t,get:(e,n,r)=>Zd(e,n)||t.get(e,n,r),has:(e,n)=>!!Zd(e,n)||t.has(e,n)}));/**
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
 */class rT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ru="@firebase/app",ep="0.13.1";/**
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
 */const zn=new yh("@firebase/app"),iT="@firebase/app-compat",oT="@firebase/analytics-compat",aT="@firebase/analytics",lT="@firebase/app-check-compat",cT="@firebase/app-check",uT="@firebase/auth",hT="@firebase/auth-compat",fT="@firebase/database",dT="@firebase/data-connect",pT="@firebase/database-compat",mT="@firebase/functions",gT="@firebase/functions-compat",yT="@firebase/installations",_T="@firebase/installations-compat",vT="@firebase/messaging",ET="@firebase/messaging-compat",wT="@firebase/performance",TT="@firebase/performance-compat",bT="@firebase/remote-config",IT="@firebase/remote-config-compat",AT="@firebase/storage",ST="@firebase/storage-compat",PT="@firebase/firestore",RT="@firebase/ai",CT="@firebase/firestore-compat",xT="firebase",kT="11.9.0";/**
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
 */const su="[DEFAULT]",OT={[ru]:"fire-core",[iT]:"fire-core-compat",[aT]:"fire-analytics",[oT]:"fire-analytics-compat",[cT]:"fire-app-check",[lT]:"fire-app-check-compat",[uT]:"fire-auth",[hT]:"fire-auth-compat",[fT]:"fire-rtdb",[dT]:"fire-data-connect",[pT]:"fire-rtdb-compat",[mT]:"fire-fn",[gT]:"fire-fn-compat",[yT]:"fire-iid",[_T]:"fire-iid-compat",[vT]:"fire-fcm",[ET]:"fire-fcm-compat",[wT]:"fire-perf",[TT]:"fire-perf-compat",[bT]:"fire-rc",[IT]:"fire-rc-compat",[AT]:"fire-gcs",[ST]:"fire-gcs-compat",[PT]:"fire-fst",[CT]:"fire-fst-compat",[RT]:"fire-vertex","fire-js":"fire-js",[xT]:"fire-js-all"};/**
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
 */const Da=new Map,NT=new Map,iu=new Map;function tp(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(iu.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of Da.values())tp(n,t);for(const n of NT.values())tp(n,t);return!0}function vh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const VT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new Eo("app","Firebase",VT);/**
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
 */class DT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=kT;function Uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:su,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=Ny()),!n)throw Er.create("no-options");const i=Da.get(s);if(i){if(Sr(n,i.options)&&Sr(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new Bw(s);for(const c of iu.values())o.addComponent(c);const l=new DT(n,r,o);return Da.set(s,l),l}function jy(t=su){const e=Da.get(t);if(!e&&t===su&&Ny())return Uy();if(!e)throw Er.create("no-app",{appName:t});return e}function wr(t,e,n){var r;let s=(r=OT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}$s(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const MT="firebase-heartbeat-database",LT=1,ro="firebase-heartbeat-store";let Tc=null;function By(){return Tc||(Tc=eT(MT,LT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function FT(t){try{const n=(await By()).transaction(ro),r=await n.objectStore(ro).get(zy(t));return await n.done,r}catch(e){if(e instanceof Yn)zn.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function np(t,e){try{const r=(await By()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,zy(t)),await r.done}catch(n){if(n instanceof Yn)zn.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function zy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UT=1024,jT=30;class BT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $T(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jT){const o=HT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rp(),{heartbeatsToSend:r,unsentEntries:s}=zT(this._heartbeatsCache.heartbeats),i=Va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zn.warn(n),""}}}function rp(){return new Date().toISOString().substring(0,10)}function zT(t,e=UT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cw()?xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sp(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}function HT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function qT(t){$s(new ss("platform-logger",e=>new rT(e),"PRIVATE")),$s(new ss("heartbeat",e=>new BT(e),"PRIVATE")),wr(ru,ep,t),wr(ru,ep,"esm2017"),wr("fire-js","")}qT("");function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WT=$y,Hy=new Eo("auth","Firebase",$y());/**
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
 */const Ma=new yh("@firebase/auth");function KT(t,...e){Ma.logLevel<=Te.WARN&&Ma.warn(`Auth (${ni}): ${t}`,...e)}function ha(t,...e){Ma.logLevel<=Te.ERROR&&Ma.error(`Auth (${ni}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw wh(t,...e)}function vn(t,...e){return wh(t,...e)}function qy(t,e,n){const r=Object.assign(Object.assign({},WT()),{[e]:n});return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return qy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hy.create(t,...e)}function ce(t,e,...n){if(!t)throw wh(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function $n(t,e){t||Fn(e)}/**
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
 */function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GT(){return ip()==="http:"||ip()==="https:"}function ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function QT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GT()||Aw()||"connection"in navigator)?navigator.onLine:!0}function YT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Tw()||Sw()}get(){return QT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Th(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZT=new To(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return Ky(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=wo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Iw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&vo(t.emulatorConfig.host)&&(u.credentials="include"),Wy.fetch()(await Gy(t,t.config.apiHost,n,l),u)})}async function Ky(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XT),e);try{const s=new tb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qy(t,f,u);cn(t,f)}}catch(s){if(s instanceof Yn)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function bo(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Gy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Th(t.config,s):`${t.config.apiScheme}://${s}`;return JT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function eb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),ZT.get())})}}function Zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vn(t,e,r);return s.customData._tokenResponse=n,s}function op(t){return t!==void 0&&t.enterprise!==void 0}class nb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rb(t,e){return Sn(t,"GET","/v2/recaptchaConfig",Fr(t,e))}/**
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
 */async function sb(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function La(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ib(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=bh(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zi(bc(s.auth_time)),issuedAtTime:zi(bc(s.iat)),expirationTime:zi(bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function bh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=ky(n);return s?JSON.parse(s):(ha("Failed to decode base64 JWT payload"),null)}catch(s){return ha("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ap(t){const e=bh(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await is(t,La(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qy(i.providerUserInfo):[],l=cb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new au(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function lb(t){const e=Ge(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qy(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ub(t,e){const n=await Ky(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Gy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Wy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hb(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Fr(t,e))}/**
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
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ub(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function rr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new au(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ib(this,e)}reload(){return lb(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await is(this,sb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:z,isAnonymous:ee,providerData:pe,stsTokenManager:I}=n;ce(F&&I,e,"internal-error");const _=Ms.fromJSON(this.name,I);ce(typeof F=="string",e,"internal-error"),rr(p,e.name),rr(m,e.name),ce(typeof z=="boolean",e,"internal-error"),ce(typeof ee=="boolean",e,"internal-error"),rr(y,e.name),rr(P,e.name),rr(b,e.name),rr(O,e.name),rr(x,e.name),rr(N,e.name);const v=new rn({uid:F,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:ee,photoURL:P,phoneNumber:y,tenantId:b,stsTokenManager:_,createdAt:x,lastLoginAt:N});return pe&&Array.isArray(pe)&&(v.providerData=pe.map(A=>Object.assign({},A))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ms;l.updateFromIdToken(r);const c=new rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new au(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const lp=new Map;function Un(t){$n(t instanceof Function,"Expected a class definition");let e=lp.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lp.set(t,e),e)}/**
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
 */class Yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yy.type="NONE";const cp=Yy;/**
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
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fa(this.userKey,s.apiKey,i),this.fullPersistenceKey=fa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await La(this.auth,{idToken:e}).catch(()=>{});return n?rn._fromGetAccountInfoResponse(this.auth,n,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Un(cp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Un(cp);const o=fa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await La(e,{idToken:f}).catch(()=>{});if(!m)break;p=await rn._fromGetAccountInfoResponse(e,m,f)}else p=rn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ls(i,e,r))}}/**
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
 */function up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(Jy(e))return"Safari";if((e.includes("chrome/")||Zy(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xy(t=bt()){return/firefox\//i.test(t)}function Jy(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zy(t=bt()){return/crios\//i.test(t)}function e_(t=bt()){return/iemobile/i.test(t)}function t_(t=bt()){return/android/i.test(t)}function n_(t=bt()){return/blackberry/i.test(t)}function r_(t=bt()){return/webos/i.test(t)}function Ih(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fb(t=bt()){var e;return Ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function db(){return Pw()&&document.documentMode===10}function s_(t=bt()){return Ih(t)||t_(t)||r_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}/**
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
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=up(bt());break;case"Worker":n=`${up(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mb(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Fr(t,e))}/**
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
 */const gb=6;class yb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _b{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await La(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(jn(this));const n=e?Ge(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mb(this),n=new yb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ds(t){return Ge(t)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vb(t){_l=t}function o_(t){return _l.loadJS(t)}function Eb(){return _l.recaptchaEnterpriseScript}function wb(){return _l.gapiScript}function Tb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bb{constructor(){this.enterprise=new Ib}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ib{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ab="recaptcha-enterprise",a_="NO_RECAPTCHA";class Sb{constructor(e){this.type=Ab,this.auth=ds(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{rb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new nb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;op(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(a_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&op(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Eb();c.length!==0&&(c+=l),o_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function fp(t,e,n,r=!1,s=!1){const i=new Sb(t);let o;if(s)o=a_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function lu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await fp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await fp(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function Pb(t,e){const n=vh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sr(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function Rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Cb(t,e,n){const r=ds(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=l_(e),{host:o,port:l}=xb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Sr(u,r.config.emulator)&&Sr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,vo(o)?(Dy(`${i}//${o}${c}`),My("Auth",!0)):kb()}function l_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xb(t){const e=l_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dp(o)}}}function dp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function Ob(t,e){return Sn(t,"POST","/v1/accounts:update",e)}async function Nb(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Vb(t,e){return bo(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}/**
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
 */async function Db(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function Mb(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
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
 */class so extends Ah{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lu(e,n,"signInWithPassword",Vb);case"emailLink":return Db(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lu(e,r,"signUpPassword",Nb);case"emailLink":return Mb(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fs(t,e){return bo(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
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
 */const Lb="http://localhost";class os extends Ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new os(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:Lb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
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
 */function Fb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ub(t){const e=Pi(Ri(t)).link,n=e?Pi(Ri(e)).deep_link_id:null,r=Pi(Ri(t)).deep_link_id;return(r?Pi(Ri(r)).link:null)||r||n||e||t}class Sh{constructor(e){var n,r,s,i,o,l;const c=Pi(Ri(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Fb((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ub(e);try{return new Sh(n)}catch{return null}}}/**
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
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sh.parseLink(n);return ce(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class c_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Io extends c_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends Io{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class hr extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return os._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class fr extends Io{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class dr extends Io{constructor(){super("twitter.com")}static credential(e,n){return os._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function jb(t,e){return bo(t,"POST","/v1/accounts:signUp",Fr(t,e))}/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),o=pp(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pp(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ua extends Yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ua(e,n,r,s)}}function u_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,i,e,r):i})}async function Bb(t,e,n=!1){const r=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
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
 */async function h_(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(jn(r));const s="reauthenticate";try{const i=await is(t,u_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=bh(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
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
 */async function f_(t,e,n=!1){if(Yt(t.app))return Promise.reject(jn(t));const r="signIn",s=await u_(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zb(t,e){return f_(ds(t),e)}async function $b(t,e){return h_(Ge(t),e)}/**
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
 */async function d_(t){const e=ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hb(t,e,n){if(Yt(t.app))return Promise.reject(jn(t));const r=ds(t),o=await lu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&d_(t),c}),l=await as._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function qb(t,e,n){return Yt(t.app)?Promise.reject(jn(t)):zb(Ge(t),ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&d_(t),r})}/**
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
 */async function Wb(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ic(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ge(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await is(r,Wb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kb(t,e){return Gb(Ge(t),null,e)}async function Gb(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await is(t,Ob(r,i));await t._updateTokensIfNecessary(o,!0)}function Qb(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function Yb(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Xb(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function Jb(t){return Ge(t).signOut()}async function Zb(t){return Ge(t).delete()}const ja="__sak";/**
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
 */class p_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eI=1e3,tI=10;class m_ extends p_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);db()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m_.type="LOCAL";const nI=m_;/**
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
 */class g_ extends p_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g_.type="SESSION";const y_=g_;/**
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
 */function rI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await rI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vl.receivers=[];/**
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
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ph("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function iI(t){En().location.href=t}/**
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
 */function __(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function oI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lI(){return __()?self:null}/**
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
 */const v_="firebaseLocalStorageDb",cI=1,Ba="firebaseLocalStorage",E_="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([Ba],e?"readwrite":"readonly").objectStore(Ba)}function uI(){const t=indexedDB.deleteDatabase(v_);return new Ao(t).toPromise()}function cu(){const t=indexedDB.open(v_,cI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ba,{keyPath:E_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ba)?e(r):(r.close(),await uI(),e(await cu()))})})}async function mp(t,e,n){const r=El(t,!0).put({[E_]:e,value:n});return new Ao(r).toPromise()}async function hI(t,e){const n=El(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function gp(t,e){const n=El(t,!0).delete(e);return new Ao(n).toPromise()}const fI=800,dI=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vl._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oI(),!this.activeServiceWorker)return;this.sender=new sI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cu();return await mp(e,ja,"1"),await gp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=El(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const pI=w_;new To(3e4,6e4);/**
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
 */function mI(t,e){return e?Un(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rh extends Ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gI(t){return f_(t.auth,new Rh(t),t.bypassAuthState)}function yI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),h_(n,new Rh(t),t.bypassAuthState)}async function _I(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Bb(n,new Rh(t),t.bypassAuthState)}/**
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
 */class T_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:cn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vI=new To(2e3,1e4);class xs extends T_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vI.get())};e()}}xs.currentPopupAction=null;/**
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
 */const EI="pendingRedirect",da=new Map;class wI extends T_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await TI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TI(t,e){const n=AI(e),r=II(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bI(t,e){da.set(t._key(),e)}function II(t){return Un(t._redirectPersistence)}function AI(t){return fa(EI,t.config.apiKey,t.name)}async function SI(t,e,n=!1){if(Yt(t.app))return Promise.reject(jn(t));const r=ds(t),s=mI(r,e),o=await new wI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PI=10*60*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!b_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PI&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(e))}saveEventToCache(e){this.cachedEventUids.add(yp(e)),this.lastProcessedEventTime=Date.now()}}function yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(t);default:return!1}}/**
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
 */async function xI(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OI=/^https?/;async function NI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xI(t);for(const n of e)try{if(VI(n))return}catch{}cn(t,"unauthorized-domain")}function VI(t){const e=ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OI.test(n))return!1;if(kI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DI=new To(3e4,6e4);function _p(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MI(t){return new Promise((e,n)=>{var r,s,i;function o(){_p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_p(),n(vn(t,"network-request-failed"))},timeout:DI.get()})}if(!((s=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=En().gapi)===null||i===void 0)&&i.load)o();else{const l=Tb("iframefcb");return En()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},o_(`${wb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw pa=null,e})}let pa=null;function LI(t){return pa=pa||MI(t),pa}/**
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
 */const FI=new To(5e3,15e3),UI="__/auth/iframe",jI="emulator/auth/iframe",BI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $I(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,jI):`https://${t.config.authDomain}/${UI}`,r={apiKey:e.apiKey,appName:t.name,v:ni},s=zI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wo(r).slice(1)}`}async function HI(t){const e=await LI(t),n=En().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:$I(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=En().setTimeout(()=>{i(o)},FI.get());function c(){En().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,KI=600,GI="_blank",QI="http://localhost";class vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(t,e,n,r=WI,s=KI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},qI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=bt().toLowerCase();n&&(l=Zy(u)?GI:n),Xy(u)&&(e=e||QI,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[y,P])=>`${m}${y}=${P},`,"");if(fb(u)&&l!=="_self")return XI(e||"",l),new vp(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new vp(p)}function XI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JI="__/auth/handler",ZI="emulator/auth/handler",eA=encodeURIComponent("fac");async function Ep(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:s};if(e instanceof c_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Io){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${eA}=${encodeURIComponent(c)}`:"";return`${tA(t)}?${wo(l).slice(1)}${u}`}function tA({config:t}){return t.emulator?Th(t,ZI):`https://${t.authDomain}/${JI}`}/**
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
 */const Ac="webStorageSupport";class nA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y_,this._completeRedirectFn=SI,this._overrideRedirectResult=bI}async _openPopup(e,n,r,s){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ep(e,n,r,ou(),s);return YI(e,o,Ph())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ep(e,n,r,ou(),s);return iI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HI(e),r=new RI(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ac];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||Jy()||Ih()}}const rA=nA;var wp="@firebase/auth",Tp="1.10.6";/**
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
 */class sA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oA(t){$s(new ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},u=new _b(r,s,i,c);return Rb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new ss("auth-internal",e=>{const n=ds(e.getProvider("auth").getImmediate());return(r=>new sA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(wp,Tp,iA(t)),wr(wp,Tp,"esm2017")}/**
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
 */const aA=5*60,lA=Vy("authIdTokenMaxAge")||aA;let bp=null;const cA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lA)return;const s=n==null?void 0:n.token;bp!==s&&(bp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ma(t=jy()){const e=vh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pb(t,{popupRedirectResolver:rA,persistence:[pI,nI,y_]}),r=Vy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=cA(i.toString());Yb(n,o,()=>o(n.currentUser)),Qb(n,l=>o(l))}}const s=Oy("auth");return s&&Cb(n,`http://${s}`),n}function uA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oA("Browser");var Ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,I_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(A,S,R){for(var w=Array(arguments.length-2),it=2;it<arguments.length;it++)w[it-2]=arguments[it];return _.prototype[S].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var A=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)A[S]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(S=0;16>S;++S)A[S]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],S=I.g[2];var R=I.g[3],w=_+(R^v&(S^R))+A[0]+3614090360&4294967295;_=v+(w<<7&4294967295|w>>>25),w=R+(S^_&(v^S))+A[1]+3905402710&4294967295,R=_+(w<<12&4294967295|w>>>20),w=S+(v^R&(_^v))+A[2]+606105819&4294967295,S=R+(w<<17&4294967295|w>>>15),w=v+(_^S&(R^_))+A[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=_+(R^v&(S^R))+A[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(S^_&(v^S))+A[5]+1200080426&4294967295,R=_+(w<<12&4294967295|w>>>20),w=S+(v^R&(_^v))+A[6]+2821735955&4294967295,S=R+(w<<17&4294967295|w>>>15),w=v+(_^S&(R^_))+A[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=_+(R^v&(S^R))+A[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(S^_&(v^S))+A[9]+2336552879&4294967295,R=_+(w<<12&4294967295|w>>>20),w=S+(v^R&(_^v))+A[10]+4294925233&4294967295,S=R+(w<<17&4294967295|w>>>15),w=v+(_^S&(R^_))+A[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=_+(R^v&(S^R))+A[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(S^_&(v^S))+A[13]+4254626195&4294967295,R=_+(w<<12&4294967295|w>>>20),w=S+(v^R&(_^v))+A[14]+2792965006&4294967295,S=R+(w<<17&4294967295|w>>>15),w=v+(_^S&(R^_))+A[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=_+(S^R&(v^S))+A[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^S&(_^v))+A[6]+3225465664&4294967295,R=_+(w<<9&4294967295|w>>>23),w=S+(_^v&(R^_))+A[11]+643717713&4294967295,S=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(S^R))+A[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=_+(S^R&(v^S))+A[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^S&(_^v))+A[10]+38016083&4294967295,R=_+(w<<9&4294967295|w>>>23),w=S+(_^v&(R^_))+A[15]+3634488961&4294967295,S=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(S^R))+A[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=_+(S^R&(v^S))+A[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^S&(_^v))+A[14]+3275163606&4294967295,R=_+(w<<9&4294967295|w>>>23),w=S+(_^v&(R^_))+A[3]+4107603335&4294967295,S=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(S^R))+A[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=_+(S^R&(v^S))+A[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^S&(_^v))+A[2]+4243563512&4294967295,R=_+(w<<9&4294967295|w>>>23),w=S+(_^v&(R^_))+A[7]+1735328473&4294967295,S=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(S^R))+A[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=_+(v^S^R)+A[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^S)+A[8]+2272392833&4294967295,R=_+(w<<11&4294967295|w>>>21),w=S+(R^_^v)+A[11]+1839030562&4294967295,S=R+(w<<16&4294967295|w>>>16),w=v+(S^R^_)+A[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=_+(v^S^R)+A[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^S)+A[4]+1272893353&4294967295,R=_+(w<<11&4294967295|w>>>21),w=S+(R^_^v)+A[7]+4139469664&4294967295,S=R+(w<<16&4294967295|w>>>16),w=v+(S^R^_)+A[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=_+(v^S^R)+A[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^S)+A[0]+3936430074&4294967295,R=_+(w<<11&4294967295|w>>>21),w=S+(R^_^v)+A[3]+3572445317&4294967295,S=R+(w<<16&4294967295|w>>>16),w=v+(S^R^_)+A[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=_+(v^S^R)+A[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^S)+A[12]+3873151461&4294967295,R=_+(w<<11&4294967295|w>>>21),w=S+(R^_^v)+A[15]+530742520&4294967295,S=R+(w<<16&4294967295|w>>>16),w=v+(S^R^_)+A[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=_+(S^(v|~R))+A[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~S))+A[7]+1126891415&4294967295,R=_+(w<<10&4294967295|w>>>22),w=S+(_^(R|~v))+A[14]+2878612391&4294967295,S=R+(w<<15&4294967295|w>>>17),w=v+(R^(S|~_))+A[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=_+(S^(v|~R))+A[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~S))+A[3]+2399980690&4294967295,R=_+(w<<10&4294967295|w>>>22),w=S+(_^(R|~v))+A[10]+4293915773&4294967295,S=R+(w<<15&4294967295|w>>>17),w=v+(R^(S|~_))+A[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=_+(S^(v|~R))+A[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~S))+A[15]+4264355552&4294967295,R=_+(w<<10&4294967295|w>>>22),w=S+(_^(R|~v))+A[6]+2734768916&4294967295,S=R+(w<<15&4294967295|w>>>17),w=v+(R^(S|~_))+A[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=_+(S^(v|~R))+A[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~S))+A[11]+3174756917&4294967295,R=_+(w<<10&4294967295|w>>>22),w=S+(_^(R|~v))+A[2]+718787259&4294967295,S=R+(w<<15&4294967295|w>>>17),w=v+(R^(S|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,A=this.B,S=this.h,R=0;R<_;){if(S==0)for(;R<=v;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<_;)if(A[S++]=I.charCodeAt(R++),S==this.blockSize){s(this,A),S=0;break}}else for(;R<_;)if(A[S++]=I[R++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var A=0;32>A;A+=8)I[v++]=this.g[_]>>>A&255;return I};function i(I,_){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function o(I,_){this.h=_;for(var v=[],A=!0,S=I.length-1;0<=S;S--){var R=I[S]|0;A&&R==_||(v[S]=R,A=!1)}this.g=v}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(u(-I));for(var _=[],v=1,A=0;I>=v;A++)_[A]=I/v|0,v*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return O(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),A=p,S=0;S<I.length;S+=8){var R=Math.min(8,I.length-S),w=parseInt(I.substring(S,S+R),_);8>R?(R=u(Math.pow(_,R)),A=A.j(R).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-O(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var A=this.i(v);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(b(this))return"-"+O(this).toString(I);for(var _=u(Math.pow(I,6)),v=this,A="";;){var S=z(v,_).g;v=x(v,S.j(_));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=S,P(v))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function b(I){return I.h==-1}t.l=function(I){return I=x(this,I),b(I)?-1:P(I)?0:1};function O(I){for(var _=I.g.length,v=[],A=0;A<_;A++)v[A]=~I.g[A];return new o(v,~I.h).add(m)}t.abs=function(){return b(this)?O(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0,S=0;S<=_;S++){var R=A+(this.i(S)&65535)+(I.i(S)&65535),w=(R>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);A=w>>>16,R&=65535,w&=65535,v[S]=w<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function x(I,_){return I.add(O(_))}t.j=function(I){if(P(this)||P(I))return p;if(b(this))return b(I)?O(this).j(O(I)):O(O(this).j(I));if(b(I))return O(this.j(O(I)));if(0>this.l(y)&&0>I.l(y))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<I.g.length;S++){var R=this.i(A)>>>16,w=this.i(A)&65535,it=I.i(S)>>>16,xt=I.i(S)&65535;v[2*A+2*S]+=w*xt,N(v,2*A+2*S),v[2*A+2*S+1]+=R*xt,N(v,2*A+2*S+1),v[2*A+2*S+1]+=w*it,N(v,2*A+2*S+1),v[2*A+2*S+2]+=R*it,N(v,2*A+2*S+2)}for(A=0;A<_;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=_;A<2*_;A++)v[A]=0;return new o(v,0)};function N(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function z(I,_){if(P(_))throw Error("division by zero");if(P(I))return new F(p,p);if(b(I))return _=z(O(I),_),new F(O(_.g),O(_.h));if(b(_))return _=z(I,O(_)),new F(O(_.g),_.h);if(30<I.g.length){if(b(I)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=_;0>=A.l(I);)v=ee(v),A=ee(A);var S=pe(v,1),R=pe(A,1);for(A=pe(A,2),v=pe(v,2);!P(A);){var w=R.add(A);0>=w.l(I)&&(S=S.add(v),R=w),A=pe(A,1),v=pe(v,1)}return _=x(I,S.j(_)),new F(S,_)}for(S=p;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=u(v),w=R.j(_);b(w)||0<w.l(I);)v-=A,R=u(v),w=R.j(_);P(R)&&(R=m),S=S.add(R),I=x(I,w)}return new F(S,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)&I.i(A);return new o(v,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)|I.i(A);return new o(v,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)^I.i(A);return new o(v,this.h^I.h)};function ee(I){for(var _=I.g.length+1,v=[],A=0;A<_;A++)v[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(v,I.h)}function pe(I,_){var v=_>>5;_%=32;for(var A=I.g.length-v,S=[],R=0;R<A;R++)S[R]=0<_?I.i(R+v)>>>_|I.i(R+v+1)<<32-_:I.i(R+v);return new o(S,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,I_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Tr=o}).apply(typeof Ip<"u"?Ip:typeof self<"u"?self:typeof window<"u"?window:{});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A_,Ci,S_,ga,uu,P_,R_,C_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ea=="object"&&ea];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,V){for(var G=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)G[Ne-2]=arguments[Ne];return h.prototype[k].apply(g,G)}}function b(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const k=a.length||0,V=g.length||0;a.length=k+V;for(let G=0;G<V;G++)a[k+G]=g[G]}else a.push(g)}}class x{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var ee=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function pe(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let V=0;V<v.length;V++)d=v[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function w(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class it{constructor(){this.h=this.g=null}add(h,d){const g=xt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new x(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,we=!1,jt=new it,en=()=>{const a=l.Promise.resolve(void 0);fe=()=>{a.then(Kt)}};var Kt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){R(d)}var h=xt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}we=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function hn(a,h){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ee){e:{try{z(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}P(hn,je);var kt={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,h,d,g,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=T(a,h,g,k);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new Y(h,this.src,V,!!g,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(g,k,1),V&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,g){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),L={};function B(a,h,d,g,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)B(a,h[V],d,g,k);return null}return d=he(d),a&&a[M]?a.K(h,d,u(g)?!!g.capture:!1,k):U(a,h,d,!1,g,k)}function U(a,h,d,g,k,V){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Ne=X(a);if(Ne||(a[C]=Ne=new Se(a)),d=Ne.add(h,d,g,G,V),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Jn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=oe;return a}function K(a,h,d,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],d,g,k);else g=u(g)?!!g.capture:!!g,d=he(d),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=T(V,d,g,k),-1<d&&(te(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,g,k)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(H(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=X(h))?(E(d,a),d.h==0&&(d.src=null,h[C]=null)):te(a)}}}function H(a){return a in L?L[a]:L[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new hn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,h)}return a}function X(a){return a=a[C],a instanceof Se?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ae(){Ue.call(this),this.i=new Se(this),this.M=this,this.F=null}P(ae,Ue),ae.prototype[M]=!0,ae.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function _e(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new je(h,a);else if(h instanceof je)h.target=h.target||a;else{var k=h;h=new je(g,a),A(h,k)}if(k=!0,d)for(var V=d.length-1;0<=V;V--){var G=h.g=d[V];k=Ie(G,g,!0,h)&&k}if(G=h.g=a,k=Ie(G,g,!0,h)&&k,k=Ie(G,g,!1,h)&&k,d)for(V=0;V<d.length;V++)G=h.g=d[V],k=Ie(G,g,!1,h)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)te(d[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ae.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ie(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==d){var Ne=G.listener,lt=G.ha||G.src;G.fa&&E(a.i,G),k=Ne.call(lt,g)!==!1&&k}}return k&&!g.defaultPrevented}function pt(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ot(a){a.g=pt(()=>{a.g=null,a.i&&(a.i=!1,ot(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Gt extends Ue{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){Ue.call(this),this.h=a,this.g={}}P(mt,Ue);var Zn=[];function li(a){pe(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),li(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var at=l.JSON.stringify,Qt=l.JSON.parse,No=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wl(){}Wl.prototype.h=null;function If(a){return a.h||(a.h=a.i())}function Af(){}var ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kl(){je.call(this,"d")}P(Kl,je);function Gl(){je.call(this,"c")}P(Gl,je);var Br={},Sf=null;function Vo(){return Sf=Sf||new ae}Br.La="serverreachability";function Pf(a){je.call(this,Br.La,a)}P(Pf,je);function ui(a){const h=Vo();_e(h,new Pf(h))}Br.STAT_EVENT="statevent";function Rf(a,h){je.call(this,Br.STAT_EVENT,a),this.stat=h}P(Rf,je);function At(a){const h=Vo();_e(h,new Rf(h,a))}Br.Ma="timingevent";function Cf(a,h){je.call(this,Br.Ma,a),this.size=h}P(Cf,je);function hi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function fi(){this.g=!0}fi.prototype.xa=function(){this.g=!1};function e0(a,h,d,g,k,V){a.info(function(){if(a.g)if(V)for(var G="",Ne=V.split("&"),lt=0;lt<Ne.length;lt++){var Pe=Ne[lt].split("=");if(1<Pe.length){var gt=Pe[0];Pe=Pe[1];var yt=gt.split("_");G=2<=yt.length&&yt[1]=="type"?G+(gt+"="+Pe+"&"):G+(gt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+G})}function t0(a,h,d,g,k,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+V+" "+G})}function _s(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+r0(a,d)+(g?" "+g:"")})}function n0(a,h){a.info(function(){return"TIMEOUT: "+h})}fi.prototype.info=function(){};function r0(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return at(d)}catch{return h}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ql;function Mo(){}P(Mo,Wl),Mo.prototype.g=function(){return new XMLHttpRequest},Mo.prototype.i=function(){return{}},Ql=new Mo;function er(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var Of={},Yl={};function Xl(a,h,d){a.L=1,a.v=jo(Pn(h)),a.m=d,a.P=!0,Nf(a,null)}function Nf(a,h){a.F=Date.now(),Lo(a),a.A=Pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Kf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new kf,a.g=hd(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Gt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Zn[0]=k.toString()),k=Zn);for(var V=0;V<k.length;V++){var G=B(d,k[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ui(),e0(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Rn(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Rn(this.g);var h=this.g.Ba();const ws=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||ed(this.g)))){this.J||yt!=4||h==7||(h==8||0>=ws?ui(3):ui(2)),Jl(this);var d=this.g.Z();this.X=d;t:if(Vf(this)){var g=ed(this.g);a="";var k=g.length,V=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),di(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,t0(this.i,this.u,this.A,this.l,this.R,yt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,lt=this.g;if((Ne=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Ne)){var Pe=Ne;break t}}Pe=null}if(d=Pe)_s(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zl(this,d);else{this.o=!1,this.s=3,At(12),zr(this),di(this);break e}}if(this.P){d=!0;let tn;for(;!this.J&&this.C<G.length;)if(tn=s0(this,G),tn==Yl){yt==4&&(this.s=4,At(14),d=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Of){this.s=4,At(15),_s(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else _s(this.i,this.l,tn,null),Zl(this,tn);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,At(16),d=!1),this.o=this.o&&d,!d)_s(this.i,this.l,G,"[Invalid Chunked Response]"),zr(this),di(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),ic(gt),gt.M=!0,At(11))}}else _s(this.i,this.l,G,null),Zl(this,G);yt==4&&zr(this),this.o&&!this.J&&(yt==4?ad(this.j,this):(this.o=!1,Lo(this)))}else w0(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),zr(this),di(this)}}}catch{}finally{}};function Vf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function s0(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Yl:(d=Number(h.substring(d,g)),isNaN(d)?Of:(g+=1,g+d>h.length?Yl:(h=h.slice(g,g+d),a.C=g+d,h)))}er.prototype.cancel=function(){this.J=!0,zr(this)};function Lo(a){a.S=Date.now()+a.I,Df(a,a.I)}function Df(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=hi(m(a.ba,a),h)}function Jl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(n0(this.i,this.A),this.L!=2&&(ui(),At(17)),zr(this),this.s=2,di(this)):Df(this,this.S-a)};function di(a){a.j.G==0||a.J||ad(a.j,a)}function zr(a){Jl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,li(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Zl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||ec(d.h,a))){if(!a.K&&ec(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wo(d),Ho(d);else break e;sc(d),At(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=hi(m(d.Za,d),6e3));if(1>=Ff(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Hr(d,11)}else if((a.K||d.g==a)&&Wo(d),!N(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Pe=k[h];if(d.T=Pe[0],Pe=Pe[1],d.G==2)if(Pe[0]=="c"){d.K=Pe[1],d.ia=Pe[2];const gt=Pe[3];gt!=null&&(d.la=gt,d.j.info("VER="+d.la));const yt=Pe[4];yt!=null&&(d.Aa=yt,d.j.info("SVER="+d.Aa));const ws=Pe[5];ws!=null&&typeof ws=="number"&&0<ws&&(g=1.5*ws,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const tn=a.g;if(tn){const Go=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Go){var V=g.h;V.g||Go.indexOf("spdy")==-1&&Go.indexOf("quic")==-1&&Go.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(tc(V,V.h),V.h=null))}if(g.D){const oc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;oc&&(g.ya=oc,Le(g.I,g.D,oc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=ud(g,g.J?g.ia:null,g.W),G.K){Uf(g.h,G);var Ne=G,lt=g.L;lt&&(Ne.I=lt),Ne.B&&(Jl(Ne),Lo(Ne)),g.g=G}else id(g);0<d.i.length&&qo(d)}else Pe[0]!="stop"&&Pe[0]!="close"||Hr(d,7);else d.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Hr(d,7):rc(d):Pe[0]!="noop"&&d.l&&d.l.ta(Pe),d.v=0)}}ui(4)}catch{}}var i0=class{constructor(a,h){this.g=a,this.map=h}};function Mf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ff(a){return a.h?1:a.g?a.g.size:0}function ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function tc(a,h){a.g?a.g.add(h):a.h=h}function Uf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mf.prototype.cancel=function(){if(this.i=jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return b(a.i)}function o0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function a0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Bf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=a0(a),g=o0(a),k=g.length,V=0;V<k;V++)h.call(void 0,g[V],d&&d[V],a)}var zf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l0(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var V=a[d].substring(0,g);k=a[d].substring(g+1)}else V=a[d];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,Fo(this,a.j),this.o=a.o,this.g=a.g,Uo(this,a.s),this.l=a.l;var h=a.i,d=new gi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),$f(this,d),this.m=a.m}else a&&(h=String(a).match(zf))?(this.h=!1,Fo(this,h[1]||"",!0),this.o=pi(h[2]||""),this.g=pi(h[3]||"",!0),Uo(this,h[4]),this.l=pi(h[5]||"",!0),$f(this,h[6]||"",!0),this.m=pi(h[7]||"")):(this.h=!1,this.i=new gi(null,this.h))}$r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(mi(h,Hf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(mi(h,Hf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mi(d,d.charAt(0)=="/"?h0:u0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mi(d,d0)),a.join("")};function Pn(a){return new $r(a)}function Fo(a,h,d){a.j=d?pi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Uo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function $f(a,h,d){h instanceof gi?(a.i=h,p0(a.i,a.h)):(d||(h=mi(h,f0)),a.i=new gi(h,a.h))}function Le(a,h,d){a.i.set(h,d)}function jo(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function pi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,c0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function c0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hf=/[#\/\?@]/g,u0=/[#\?:]/g,h0=/[#\?]/g,f0=/[#\?@]/g,d0=/#/g;function gi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&l0(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=gi.prototype,t.add=function(a,h){tr(this),this.i=null,a=vs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function qf(a,h){tr(a),h=vs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wf(a,h){return tr(a),h=vs(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const k=a[g];for(let V=0;V<k.length;V++)d.push(h[g])}return d},t.V=function(a){tr(this);let h=[];if(typeof a=="string")Wf(this,a)&&(h=h.concat(this.g.get(vs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return tr(this),this.i=null,a=vs(this,a),Wf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Kf(a,h,d){qf(a,h),0<d.length&&(a.i=null,a.g.set(vs(a,h),b(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var k=V;G[g]!==""&&(k+="="+encodeURIComponent(String(G[g]))),a.push(k)}}return this.i=a.join("&")};function vs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function p0(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(qf(this,g),Kf(this,k,d))},a)),a.j=h}function m0(a,h){const d=new fi;if(l.Image){const g=new Image;g.onload=y(nr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=y(nr,d,"TestLoadImage: error",!1,h,g),g.onabort=y(nr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(nr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function g0(a,h){const d=new fi,g=new AbortController,k=setTimeout(()=>{g.abort(),nr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?nr(d,"TestPingServer: ok",!0,h):nr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),nr(d,"TestPingServer: error",!1,h)})}function nr(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function y0(){this.g=new No}function _0(a,h,d){const g=d||"";try{Bf(a,function(k,V){let G=k;u(k)&&(G=at(k)),h.push(g+V+"="+encodeURIComponent(G))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Bo,Wl),Bo.prototype.g=function(){return new zo(this.l,this.j)},Bo.prototype.i=function(a){return function(){return a}}({});function zo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(zo,ae),t=zo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yi(this):_i(this),this.readyState==3&&Gf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_i(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qf(a){let h="";return pe(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function nc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Qf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Le(a,h,d))}function $e(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,ae);var v0=/^https?$/i,E0=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ql.g(),this.v=this.o?If(this.o):If(Ql),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Yf(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(E0,h,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of d)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Yf(this,V)}};function Yf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Xf(a),$o(a)}function Xf(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jf(this):this.bb())},t.bb=function(){Jf(this)};function Jf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)pt(a.Ea,0,a);else if(_e(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var k=String(a.D).match(zf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!v0.test(k?k.toLowerCase():"")}d=g}if(d)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var V=2<Rn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Xf(a)}}finally{$o(a)}}}}function $o(a,h){if(a.g){Zf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{d.onreadystatechange=g}catch{}}}function Zf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Qt(h)}};function ed(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function w0(a){const h={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(N(a[g]))continue;var d=S(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[k]||[];h[k]=V,V.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function td(a){this.Aa=0,this.i=[],this.j=new fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,a),this.cb=vi("retryDelaySeedMs",1e4,a),this.Wa=vi("forwardChannelMaxRetries",2,a),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mf(a&&a.concurrentRequestLimit),this.Da=new y0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=td.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){At(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=ud(this,null,this.W),qo(this)};function rc(a){if(nd(a),a.G==3){var h=a.U++,d=Pn(a.I);if(Le(d,"SID",a.K),Le(d,"RID",h),Le(d,"TYPE","terminate"),Ei(a,d),h=new er(a,a.j,h),h.L=2,h.v=jo(Pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=hd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lo(h)}cd(a)}function Ho(a){a.g&&(ic(a),a.g.cancel(),a.g=null)}function nd(a){Ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qo(a){if(!Lf(a.h)&&!a.s){a.s=!0;var h=a.Ga;fe||en(),we||(fe(),we=!0),jt.add(h,a),a.B=0}}function T0(a,h){return Ff(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=hi(m(a.Ga,a,h),ld(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new er(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=sd(this,k,h),d=Pn(this.I),Le(d,"RID",a),Le(d,"CVER",22),this.D&&Le(d,"X-HTTP-Session-Id",this.D),Ei(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Qf(V)))+"&"+h:this.m&&nc(d,this.m,V)),tc(this.h,k),this.Ua&&Le(d,"TYPE","init"),this.P?(Le(d,"$req",h),Le(d,"SID","null"),k.T=!0,Xl(k,d,null)):Xl(k,d,h),this.G=2}}else this.G==3&&(a?rd(this,a):this.i.length==0||Lf(this.h)||rd(this))};function rd(a,h){var d;h?d=h.l:d=a.U++;const g=Pn(a.I);Le(g,"SID",a.K),Le(g,"RID",d),Le(g,"AID",a.T),Ei(a,g),a.m&&a.o&&nc(g,a.m,a.o),d=new er(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sd(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),tc(a.h,d),Xl(d,g,h)}function Ei(a,h){a.H&&pe(a.H,function(d,g){Le(h,g,d)}),a.l&&Bf({},function(d,g){Le(h,g,d)})}function sd(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const G=["count="+d];V==-1?0<d?(V=k[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ne=!0;for(let lt=0;lt<d;lt++){let Pe=k[lt].g;const gt=k[lt].map;if(Pe-=V,0>Pe)V=Math.max(0,k[lt].g-100),Ne=!1;else try{_0(gt,G,"req"+Pe+"_")}catch{g&&g(gt)}}if(Ne){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function id(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;fe||en(),we||(fe(),we=!0),jt.add(h,a),a.v=0}}function sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=hi(m(a.Fa,a),ld(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,od(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=hi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Ho(this),od(this))};function ic(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function od(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Le(h,"RID","rpc"),Le(h,"SID",a.K),Le(h,"AID",a.T),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(h,"TO",a.ja),Le(h,"TYPE","xmlhttp"),Ei(a,h),a.m&&a.o&&nc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=jo(Pn(h)),d.m=null,d.P=!0,Nf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ho(this),sc(this),At(19))};function Wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ad(a,h){var d=null;if(a.g==h){Wo(a),ic(a),a.g=null;var g=2}else if(ec(a.h,h))d=h.D,Uf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Vo(),_e(g,new Cf(g,d)),qo(a)}else id(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&T0(a,h)||g==2&&sc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function ld(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new $r(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fo(g,"https"),jo(g),k?m0(g.toString(),d):g0(g.toString(),d)}else At(2);a.G=0,a.l&&a.l.sa(h),cd(a),nd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function cd(a){if(a.G=0,a.ka=[],a.l){const h=jf(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function ud(a,h,d){var g=d instanceof $r?Pn(d):new $r(d);if(g.g!="")h&&(g.g=h+"."+g.g),Uo(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new $r(null);g&&Fo(V,g),h&&(V.g=h),k&&Uo(V,k),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&Le(g,d,h),Le(g,"VER",a.la),Ei(a,g),g}function hd(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new Bo({eb:d})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fd(){}t=fd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ko(){}Ko.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){ae.call(this),this.g=new td(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Es(this)}P(Bt,ae),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){rc(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=at(a),a=d);h.i.push(new i0(h.Ya++,a)),h.G==3&&qo(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,rc(this.g),delete this.g,Bt.aa.N.call(this)};function dd(a){Kl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(dd,Kl);function pd(){Gl.call(this),this.status=1}P(pd,Gl);function Es(a){this.g=a}P(Es,fd),Es.prototype.ua=function(){_e(this.g,"a")},Es.prototype.ta=function(a){_e(this.g,new dd(a))},Es.prototype.sa=function(a){_e(this.g,new pd)},Es.prototype.ra=function(){_e(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,C_=function(){return new Ko},R_=function(){return Vo()},P_=Br,uu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,ga=Do,xf.COMPLETE="complete",S_=xf,Af.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Ci=Af,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,A_=$e}).apply(typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{});const Ap="@firebase/firestore",Sp="4.7.17";/**
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
 */let ri="11.9.0";/**
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
 */const ls=new yh("@firebase/firestore");function As(){return ls.logLevel}function Z(t,...e){if(ls.logLevel<=Te.DEBUG){const n=e.map(Ch);ls.debug(`Firestore (${ri}): ${t}`,...n)}}function Hn(t,...e){if(ls.logLevel<=Te.ERROR){const n=e.map(Ch);ls.error(`Firestore (${ri}): ${t}`,...n)}}function Hs(t,...e){if(ls.logLevel<=Te.WARN){const n=e.map(Ch);ls.warn(`Firestore (${ri}): ${t}`,...n)}}function Ch(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,x_(t,r,n)}function x_(t,e,n){let r=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function Oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||x_(e,s,r)}function ge(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class k_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class fA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dA{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new br,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new k_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class pA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Pp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Pp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function O_(){return new TextEncoder}/**
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
 */class N_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=yA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function hu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=O_(),o=_A(i.encode(Rp(t,n)),i.encode(Rp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Rp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _A(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Cp=-62135596800,xp=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xp);return new et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cp)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xp}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Cp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new et(0,0))}static max(){return new me(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const kp="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):hu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class qe extends pn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends pn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kp}static keyField(){return new ht([kp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(qe.fromString(e))}static fromName(e){return new le(qe.fromString(e).popFirst(5))}static empty(){return new le(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new qe(e.slice()))}}/**
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
 */const io=-1;function EA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new Pr(s,le.empty(),e)}function wA(t){return new Pr(t.readTime,t.key,io)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(me.min(),le.empty(),io)}static max(){return new Pr(me.max(),le.empty(),io)}}function TA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const bA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function si(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==bA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}wl.le=-1;/**
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
 */const xh=-1;function Tl(t){return t==null}function za(t){return t===0&&1/t==-1/0}function SA(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const V_="";function PA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Op(e)),e=RA(t.get(n),e);return Op(e)}function RA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case V_:n+="";break;default:n+=i}}return n}function Op(t){return t+V_+""}/**
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
 */function Np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function D_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vp(this.data.getIterator())}getIteratorFrom(e){return new Vp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Vp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new tt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class M_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new M_("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const CA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=CA.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */const L_="server_timestamp",F_="__type__",U_="__previous_value__",j_="__local_write_time__";function kh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[F_])===null||n===void 0?void 0:n.stringValue)===L_}function bl(t){const e=t.mapValue.fields[U_];return kh(e)?bl(e):e}function oo(t){const e=Rr(t.mapValue.fields[j_].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class xA{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const $a="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||$a}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===$a}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const B_="__type__",kA="__max__",na={mapValue:{}},z_="__vector__",Ha="value";function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kh(t)?4:NA(t)?9007199254740991:OA(t)?10:11:ue(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Cr(s.bytesValue).isEqual(Cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),l=We(i.doubleValue);return o===l?za(o)===za(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Np(o)!==Np(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function lo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=We(i.integerValue||i.doubleValue),c=We(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Dp(t.timestampValue,e.timestampValue);case 4:return Dp(oo(t),oo(e));case 5:return hu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Cr(i),c=Cr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ve(l[u],c[u]);if(f!==0)return f}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(We(i.latitude),We(o.latitude));return l!==0?l:ve(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Mp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},y=(l=p[Ha])===null||l===void 0?void 0:l.arrayValue,P=(c=m[Ha])===null||c===void 0?void 0:c.arrayValue,b=ve(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return b!==0?b:Mp(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=hu(c[p],f[p]);if(m!==0)return m;const y=Ws(l[c[p]],u[f[p]]);if(y!==0)return y}return ve(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function Dp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Rr(t),r=Rr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Mp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Ks(t){return fu(t)}function fu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function ya(t){switch(xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bl(t);return e?16+ya(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ya(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ur(r.fields,(i,o)=>{s+=i.length+ya(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function du(t){return!!t&&"integerValue"in t}function Oh(t){return!!t&&"arrayValue"in t}function Lp(t){return!!t&&"nullValue"in t}function Fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _a(t){return!!t&&"mapValue"in t}function OA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[B_])===null||n===void 0?void 0:n.stringValue)===z_}function $i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$i(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kA}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$i(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=$i(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft($i(this.value))}}function $_(t){const e=[];return Ur(t.fields,(n,r)=>{const s=new ht([n]);if(_a(r)){const i=$_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class Tt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,me.min(),me.min(),me.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,me.min(),me.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,me.min(),me.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qa{constructor(e,n){this.position=e,this.inclusive=n}}function Up(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function VA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class H_{}class Je extends H_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MA(e,n,r):n==="array-contains"?new UA(e,r):n==="in"?new jA(e,r):n==="not-in"?new BA(e,r):n==="array-contains-any"?new zA(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LA(e,r):new FA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ws(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends H_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new An(e,n)}matches(e){return q_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function q_(t){return t.op==="and"}function W_(t){return DA(t)&&q_(t)}function DA(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function pu(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ks(t.value);if(W_(t))return t.filters.map(e=>pu(e)).join(",");{const e=t.filters.map(n=>pu(n)).join(",");return`${t.op}(${e})`}}function K_(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&K_(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function G_(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ks(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(G_).join(" ,")+"}"}(t):"Filter"}class MA extends Je{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class LA extends Je{constructor(e,n){super(e,"in",n),this.keys=Q_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FA extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Q_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Q_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class UA extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Oh(n)&&lo(n.arrayValue,this.value)}}class jA extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class BA extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!lo(this.value.arrayValue,n)}}class zA extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}}/**
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
 */class $A{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Bp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $A(t,e,n,r,s,i,o)}function Nh(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Tl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ks(r)).join(",")),e.Ie=n}return e.Ie}function Vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jp(t.startAt,e.startAt)&&jp(t.endAt,e.endAt)}function mu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Il{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function HA(t,e,n,r,s,i,o,l){return new Il(t,e,n,r,s,i,o,l)}function Al(t){return new Il(t)}function zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qA(t){return t.collectionGroup!==null}function Hi(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(ht.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Wa(i,r))}),n.has(ht.keyField().canonicalString())||e.Ee.push(new Wa(ht.keyField(),r))}return e.Ee}function wn(t){const e=ge(t);return e.de||(e.de=WA(e,Hi(t))),e.de}function WA(t,e){if(t.limitType==="F")return Bp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wa(s.field,i)});const n=t.endAt?new qa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qa(t.startAt.position,t.startAt.inclusive):null;return Bp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gu(t,e,n){return new Il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sl(t,e){return Vh(wn(t),wn(e))&&t.limitType===e.limitType}function Y_(t){return`${Nh(wn(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>G_(s)).join(", ")}]`),Tl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ks(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ks(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Pl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Up(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Hi(r),s)||r.endAt&&!function(o,l,c){const u=Up(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Hi(r),s))}(t,e)}function KA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function X_(t){return(e,n)=>{let r=!1;for(const s of Hi(t)){const i=GA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GA(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ws(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return D_(this.inner)}size(){return this.innerSize}}/**
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
 */const QA=new ze(le.comparator);function qn(){return QA}const J_=new ze(le.comparator);function xi(...t){let e=J_;for(const n of t)e=e.insert(n.key,n);return e}function Z_(t){let e=J_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return qi()}function e1(){return qi()}function qi(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const YA=new ze(le.comparator),XA=new tt(le.comparator);function be(...t){let e=XA;for(const n of t)e=e.add(n);return e}const JA=new tt(ve);function ZA(){return JA}/**
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
 */function Dh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function t1(t){return{integerValue:""+t}}function e4(t,e){return SA(e)?t1(e):Dh(t,e)}/**
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
 */class Rl{constructor(){this._=void 0}}function t4(t,e,n){return t instanceof Ka?function(s,i){const o={fields:{[F_]:{stringValue:L_},[j_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kh(i)&&(i=bl(i)),i&&(o.fields[U_]=i),{mapValue:o}}(n,e):t instanceof Gs?r1(t,e):t instanceof co?s1(t,e):function(s,i){const o=n1(s,i),l=$p(o)+$p(s.Re);return du(o)&&du(s.Re)?t1(l):Dh(s.serializer,l)}(t,e)}function n4(t,e,n){return t instanceof Gs?r1(t,e):t instanceof co?s1(t,e):n}function n1(t,e){return t instanceof Ga?function(r){return du(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ka extends Rl{}class Gs extends Rl{constructor(e){super(),this.elements=e}}function r1(t,e){const n=i1(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class co extends Rl{constructor(e){super(),this.elements=e}}function s1(t,e){let n=i1(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Ga extends Rl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function $p(t){return We(t.integerValue||t.doubleValue)}function i1(t){return Oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class r4{constructor(e,n){this.field=e,this.transform=n}}function s4(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Gs&&s instanceof Gs||r instanceof co&&s instanceof co?qs(r.elements,s.elements,In):r instanceof Ga&&s instanceof Ga?In(r.Re,s.Re):r instanceof Ka&&s instanceof Ka}(t.transform,e.transform)}class i4{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cl{}function o1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mh(t.key,on.none()):new So(t.key,t.data,on.none());{const n=t.data,r=Ft.empty();let s=new tt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new jr(t.key,r,new Ht(s.toArray()),on.none())}}function o4(t,e,n){t instanceof So?function(s,i,o){const l=s.value.clone(),c=qp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(s,i,o){if(!va(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(a1(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,r){return t instanceof So?function(i,o,l,c){if(!va(i.precondition,o))return l;const u=i.value.clone(),f=Wp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,o,l,c){if(!va(i.precondition,o))return l;const u=Wp(i.fieldTransforms,c,o),f=o.data;return f.setAll(a1(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return va(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function a4(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=n1(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>s4(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Cl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jr extends Cl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function a1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qp(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,n4(o,l,n[s]))}return r}function Wp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,t4(i,o,e))}return r}class Mh extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l4 extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c4{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&o4(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=e1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=o1(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Hp(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Hp(n,r))}}class Lh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return YA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lh(e,n,r,s)}}/**
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
 */class u4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Ae;function f4(t){switch(t){case $.OK:return ue(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function l1(t){if(t===void 0)return Hn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Qe.OK:return $.OK;case Qe.CANCELLED:return $.CANCELLED;case Qe.UNKNOWN:return $.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return $.INTERNAL;case Qe.UNAVAILABLE:return $.UNAVAILABLE;case Qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Qe.NOT_FOUND:return $.NOT_FOUND;case Qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Qe.ABORTED:return $.ABORTED;case Qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Qe.DATA_LOSS:return $.DATA_LOSS;default:return ue(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const d4=new Tr([4294967295,4294967295],0);function Kp(t){const e=O_().encode(t),n=new I_;return n.update(e),new Uint8Array(n.digest())}function Gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Fh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Tr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(d4)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Kp(e),[r,s]=Gp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Kp(e),[r,s]=Gp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xl(me.min(),s,new ze(ve),qn(),be())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,be(),be(),be())}}/**
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
 */class Ea{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class c1{constructor(e,n){this.targetId=e,this.Ce=n}}class u1{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qp{constructor(){this.Fe=0,this.Me=Yp(),this.xe=dt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=be(),n=be(),r=be();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new Po(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Yp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Oe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class p4{constructor(e){this.ze=e,this.je=new Map,this.He=qn(),this.Je=ra(),this.Ye=ra(),this.Ze=new ze(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(mu(i))if(r===0){const o=new le(i.path);this.tt(n,o,Tt.newNoDocument(o,me.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Cr(r).toUint8Array()}catch(c){if(c instanceof M_)return Hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fh(o,s,i)}catch(c){return Hs(c instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&mu(l.target)){const c=new le(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,Tt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=be();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new xl(e,n,this.Ze,this.He,r);return this.He=qn(),this.Je=ra(),this.Ye=ra(),this.Ze=new ze(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Qp,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new tt(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new tt(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Qp),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ra(){return new ze(le.comparator)}function Yp(){return new ze(le.comparator)}const m4={asc:"ASCENDING",desc:"DESCENDING"},g4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y4={and:"AND",or:"OR"};class _4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yu(t,e){return t.useProto3Json||Tl(e)?e:{value:e}}function Qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function h1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function v4(t,e){return Qa(t,e.toTimestamp())}function Tn(t){return Oe(!!t,49232),me.fromTimestamp(function(n){const r=Rr(n);return new et(r.seconds,r.nanos)}(t))}function Uh(t,e){return _u(t,e).canonicalString()}function _u(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f1(t){const e=qe.fromString(t);return Oe(y1(e),10190,{key:e.toString()}),e}function vu(t,e){return Uh(t.databaseId,e.path)}function Sc(t,e){const n=f1(e);if(n.get(1)!==t.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(p1(n))}function d1(t,e){return Uh(t.databaseId,e)}function E4(t){const e=f1(t);return e.length===4?qe.emptyPath():p1(e)}function Eu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function p1(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Xp(t,e,n){return{name:vu(t,e),fields:n.value.mapValue.fields}}function w4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Oe(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?$.UNKNOWN:l1(u.code);return new se(f,u.message||"")}(o);n=new u1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sc(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):me.min(),l=new Ft({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ea(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sc(t,r.document),i=r.readTime?Tn(r.readTime):me.min(),o=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ea([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sc(t,r.document),i=r.removedTargetIds||[];n=new Ea([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new h4(s,i),l=r.targetId;n=new c1(l,o)}}return n}function T4(t,e){let n;if(e instanceof So)n={update:Xp(t,e.key,e.value)};else if(e instanceof Mh)n={delete:vu(t,e.key)};else if(e instanceof jr)n={update:Xp(t,e.key,e.data),updateMask:k4(e.fieldMask)};else{if(!(e instanceof l4))return ue(16599,{ft:e.type});n={verify:vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ga)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:v4(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function b4(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(me.min())&&(o=Tn(i)),new i4(o,s.transformResults||[])}(n,e))):[]}function I4(t,e){return{documents:[d1(t,e.path)]}}function A4(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=d1(t,s);const i=function(u){if(u.length!==0)return g1(An.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ps(m.field),direction:R4(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function S4(t){let e=E4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=m1(p);return m instanceof An&&W_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Wa(Rs(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Tl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new qa(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new qa(y,m)}(n.endAt)),HA(e,s,o,i,l,"F",c,u)}function P4(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function m1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>m1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function R4(t){return m4[t]}function C4(t){return g4[t]}function x4(t){return y4[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Rs(t){return ht.fromServerFormat(t.fieldPath)}function g1(t){return t instanceof Je?function(n){if(n.op==="=="){if(Fp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(Lp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(Lp(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:C4(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(s=>g1(s));return r.length===1?r[0]:{compositeFilter:{op:x4(n.op),filters:r}}}(t):ue(54877,{filter:t})}function k4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function y1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mr{constructor(e,n,r,s,i=me.min(),o=me.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class O4{constructor(e){this.wt=e}}function N4(t){const e=S4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
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
 */class V4{constructor(){this.Cn=new D4}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Pr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class D4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(qe.comparator)).toArray()}}/**
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
 */const Jp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_1=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(_1,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class Qs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Qs(0)}static lr(){return new Qs(-1)}}/**
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
 */const Zp="LruGarbageCollector",M4=1048576;function em([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class L4{constructor(e){this.Er=e,this.buffer=new tt(em),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();em(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class F4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(Zp,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ii(n)?Z(Zp,"Ignoring IndexedDB error during garbage collection: ",n):await si(n)}await this.mr(3e5)})}}class U4{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(wl.le);const r=new L4(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Jp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jp):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),As()<=Te.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function j4(t,e){return new U4(t,e)}/**
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
 */class B4{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $4{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Wi(r.mutation,s,Ht.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=Xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=qn();const o=qi(),l=function(){return qi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof jr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Wi(f.mutation,u,f.mutation.getFieldMask(),et.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new z4(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qi();let s=new ze((o,l)=>o-l),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Ht.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||be()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=e1();f.forEach(m=>{if(!i.has(m)){const y=o1(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Xr());let l=io,c=i;return o.next(u=>j.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,be())).next(f=>({batchId:l,changes:Z_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(p,m){return new Il(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let l=xi();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Wi(f.mutation,u,Ht.empty(),et.now()),Pl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class H4{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return j.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:N4(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class q4{constructor(){this.overlays=new ze(le.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Xr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Xr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return j.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new u4(n,r));let i=this.Qr.get(n);i===void 0&&(i=be(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class jh{constructor(){this.$r=new tt(nt.Ur),this.Kr=new tt(nt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new nt(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new nt(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new le(new qe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new le(new qe([])),r=new nt(n,e),s=new nt(n,e+1);let i=be();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return le.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||le.comparator(e.key,n.key)}}/**
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
 */class K4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new tt(nt.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c4(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?xh:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ve);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new nt(new le(i),0);let l=new tt(ve);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),j.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new nt(n,0),s=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class G4{constructor(e){this.ii=e,this.docs=function(){return new ze(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TA(wA(f),r)<=0||(s.has(f.key)||Pl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Q4(this)}getSize(e){return j.resolve(this.size)}}class Q4 extends B4{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class Y4{constructor(e){this.persistence=e,this.oi=new ms(n=>Nh(n),Vh),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this._i=0,this.ai=new jh,this.targetCount=0,this.ui=Qs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
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
 */class v1{constructor(e,n){this.ci={},this.overlays={},this.li=new wl(0),this.hi=!1,this.hi=!0,this.Pi=new W4,this.referenceDelegate=e(this),this.Ti=new Y4(this),this.indexManager=new V4,this.remoteDocumentCache=function(s){return new G4(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new O4(n),this.Ei=new H4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new q4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new K4(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new X4(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class X4 extends IA{constructor(e){super(),this.currentSequenceNumber=e}}class Bh{constructor(e){this.persistence=e,this.Vi=new jh,this.mi=null}static fi(e){return new Bh(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const s=le.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Ya{constructor(e,n){this.persistence=e,this.yi=new ms(r=>PA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=j4(this,n)}static fi(e,n){return new Ya(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,me.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ya(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zh(e,n.fromCache,r,s)}}/**
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
 */class J4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z4{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Rw()?8:AA(bt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new J4;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(As()<=Te.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(As()<=Te.DEBUG&&Z("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(As()<=Te.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):j.resolve())}ws(e,n){if(zp(n))return j.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gu(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,gu(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,r,s){return zp(n)||s.isEqual(me.min())?j.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(As()<=Te.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ss(n)),this.Fs(e,o,n,EA(s,io)).next(l=>l))})}vs(e,n){let r=new tt(X_(e));return n.forEach((s,i)=>{Pl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return As()<=Te.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.ys.getDocumentsMatchingQuery(e,n,Pr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const $h="LocalStore",eS=3e8;class tS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new ze(ve),this.Os=new ms(i=>Nh(i),Vh),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $4(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function nS(t,e,n,r){return new tS(t,e,n,r)}async function E1(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=be();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function rS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let y=j.resolve();return m.forEach(P=>{y=y.next(()=>f.getEntry(c,P)).next(b=>{const O=u.docVersions.get(P);Oe(O!==null,48541),b.version.compareTo(O)<0&&(p.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),f.addEntry(b)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=be();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function w1(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function sS(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(dt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(b,O,x){return b.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=eS?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,y,f)&&l.push(n.Ti.updateTargetData(i,y))});let c=qn(),u=be();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(iS(i,o,e.documentUpdates).next(f=>{c=f.qs,u=f.Qs})),!r.isEqual(me.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function iS(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z($h,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function oS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=xh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aS(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function wu(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ii(o))throw o;Z($h,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function tm(t,e,n){const r=ge(t);let s=me.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=ge(c),m=p.Os.get(f);return m!==void 0?j.resolve(p.xs.get(m)):p.Ti.getTargetData(u,f)}(r,o,wn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:be())).next(l=>(lS(r,KA(e),l),{documents:l,$s:i})))}function lS(t,e,n){let r=t.Ns.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class nm{constructor(){this.activeTargetIds=ZA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cS{constructor(){this.xo=new nm,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new nm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uS{No(e){}shutdown(){}}/**
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
 */const rm="ConnectivityMonitor";class sm{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(rm,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(rm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sa=null;function Tu(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
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
 */const Pc="RestConnection",hS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===$a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Tu(),l=this.jo(e,n.toUriEncodedString());Z(Pc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),f=vo(u);return this.Jo(e,l,c,r,f).then(p=>(Z(Pc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Hs(Pc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ri}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=hS[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class dS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const _t="WebChannelConnection";class pS extends fS{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Tu();return new Promise((l,c)=>{const u=new A_;u.setWithCredentials(!0),u.listenOnce(S_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ga.NO_ERROR:const p=u.getResponseJson();Z(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ga.TIMEOUT:Z(_t,`RPC '${e}' ${o} timed out`),c(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const m=u.getStatus();if(Z(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y==null?void 0:y.error;if(P&&P.status&&P.message){const b=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(P.status);c(new se(b,P.message))}else c(new se($.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se($.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{Z(_t,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Z(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}I_(e,n,r){const s=Tu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=C_(),l=R_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(_t,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.E_(p);let m=!1,y=!1;const P=new dS({Zo:O=>{y?Z(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Z(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(_t,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Xo:()=>p.close()}),b=(O,x,N)=>{O.listen(x,F=>{try{N(F)}catch(z){setTimeout(()=>{throw z},0)}})};return b(p,Ci.EventType.OPEN,()=>{y||(Z(_t,`RPC '${e}' stream ${s} transport opened.`),P.__())}),b(p,Ci.EventType.CLOSE,()=>{y||(y=!0,Z(_t,`RPC '${e}' stream ${s} transport closed`),P.u_(),this.d_(p))}),b(p,Ci.EventType.ERROR,O=>{y||(y=!0,Hs(_t,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.u_(new se($.UNAVAILABLE,"The operation could not be completed")))}),b(p,Ci.EventType.MESSAGE,O=>{var x;if(!y){const N=O.data[0];Oe(!!N,16349);const F=N,z=(F==null?void 0:F.error)||((x=F[0])===null||x===void 0?void 0:x.error);if(z){Z(_t,`RPC '${e}' stream ${s} received error:`,z);const ee=z.status;let pe=function(v){const A=Qe[v];if(A!==void 0)return l1(A)}(ee),I=z.message;pe===void 0&&(pe=$.INTERNAL,I="Unknown error status: "+ee+" with message "+z.message),y=!0,P.u_(new se(pe,I)),p.close()}else Z(_t,`RPC '${e}' stream ${s} received:`,N),P.c_(N)}}),b(l,P_.STAT_EVENT,O=>{O.stat===uu.PROXY?Z(_t,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===uu.NOPROXY&&Z(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function Rc(){return typeof document<"u"?document:null}/**
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
 */function kl(t){return new _4(t,!0)}/**
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
 */class T1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const im="PersistentStream";class b1{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new T1(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new se($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return Z(im,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(Z(im,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mS extends b1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=w4(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?Tn(o.readTime):me.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Eu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=mu(c)?{documents:I4(i,c)}:{query:A4(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=h1(i,o.resumeToken);const u=yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){l.readTime=Qa(i,o.snapshotVersion.toTimestamp());const u=yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=P4(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Eu(this.serializer),n.removeTarget=e,this.Q_(n)}}class gS extends b1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=b4(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Eu(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>T4(this.serializer,r))};this.Q_(n)}}/**
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
 */class yS{}class _S extends yS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,_u(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se($.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,_u(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se($.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class vS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Hn(n),this.ua=!1):Z("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const cs="RemoteStore";class ES{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{gs(this)&&(Z(cs,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.da.add(4),await Ro(u),u.Va.set("Unknown"),u.da.delete(4),await Ol(u)}(this))})}),this.Va=new vS(r,s)}}async function Ol(t){if(gs(t))for(const e of t.Aa)await e(!0)}async function Ro(t){for(const e of t.Aa)await e(!1)}function I1(t,e){const n=ge(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Kh(n)?Wh(n):oi(n).N_()&&qh(n,e))}function Hh(t,e){const n=ge(t),r=oi(n);n.Ea.delete(e),r.N_()&&A1(n,e),n.Ea.size===0&&(r.N_()?r.k_():gs(n)&&n.Va.set("Unknown"))}function qh(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oi(t).Z_(e)}function A1(t,e){t.ma.Ke(e),oi(t).X_(e)}function Wh(t){t.ma=new p4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),oi(t).start(),t.Va.ca()}function Kh(t){return gs(t)&&!oi(t).O_()&&t.Ea.size>0}function gs(t){return ge(t).da.size===0}function S1(t){t.ma=void 0}async function wS(t){t.Va.set("Online")}async function TS(t){t.Ea.forEach((e,n)=>{qh(t,e)})}async function bS(t,e){S1(t),Kh(t)?(t.Va.Pa(e),Wh(t)):t.Va.set("Unknown")}async function IS(t,e,n){if(t.Va.set("Online"),e instanceof u1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){Z(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xa(t,r)}else if(e instanceof Ea?t.ma.Xe(e):e instanceof c1?t.ma.ot(e):t.ma.nt(e),!n.isEqual(me.min()))try{const r=await w1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(u);f&&i.Ea.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),A1(i,c);const p=new mr(f.target,c,u,f.sequenceNumber);qh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z(cs,"Failed to raise snapshot:",r),await Xa(t,r)}}async function Xa(t,e,n){if(!ii(e))throw e;t.da.add(1),await Ro(t),t.Va.set("Offline"),n||(n=()=>w1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(cs,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Ol(t)})}function P1(t,e){return e().catch(n=>Xa(t,n,e))}async function Nl(t){const e=ge(t),n=kr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:xh;for(;AS(e);)try{const s=await oS(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,SS(e,s)}catch(s){await Xa(e,s)}R1(e)&&C1(e)}function AS(t){return gs(t)&&t.Ia.length<10}function SS(t,e){t.Ia.push(e);const n=kr(t);n.N_()&&n.ea&&n.ta(e.mutations)}function R1(t){return gs(t)&&!kr(t).O_()&&t.Ia.length>0}function C1(t){kr(t).start()}async function PS(t){kr(t).ia()}async function RS(t){const e=kr(t);for(const n of t.Ia)e.ta(n.mutations)}async function CS(t,e,n){const r=t.Ia.shift(),s=Lh.from(r,e,n);await P1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nl(t)}async function xS(t,e){e&&kr(t).ea&&await async function(r,s){if(function(o){return f4(o)&&o!==$.ABORTED}(s.code)){const i=r.Ia.shift();kr(r).L_(),await P1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nl(r)}}(t,e),R1(t)&&C1(t)}async function om(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),Z(cs,"RemoteStore received new credentials");const r=gs(n);n.da.add(3),await Ro(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Ol(n)}async function kS(t,e){const n=ge(t);e?(n.da.delete(2),await Ol(n)):e||(n.da.add(2),await Ro(n),n.Va.set("Unknown"))}function oi(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.oa(),new mS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:wS.bind(null,t),n_:TS.bind(null,t),i_:bS.bind(null,t),Y_:IS.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),Kh(t)?Wh(t):t.Va.set("Unknown")):(await t.fa.stop(),S1(t))})),t.fa}function kr(t){return t.ga||(t.ga=function(n,r,s){const i=ge(n);return i.oa(),new gS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:PS.bind(null,t),i_:xS.bind(null,t),na:RS.bind(null,t),ra:CS.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await Nl(t)):(await t.ga.stop(),t.Ia.length>0&&(Z(cs,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class Gh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Gh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qh(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),ii(t))return new se($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=xi(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class am{constructor(){this.pa=new ze(le.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ys(e,n,Us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class OS{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class NS{constructor(){this.queries=lm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=lm(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new se($.ABORTED,"Firestore shutting down"))}}function lm(){return new ms(t=>Y_(t),Sl)}async function x1(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new OS,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qh(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&Yh(n)}async function k1(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&Yh(n)}function DS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Yh(t){t.Ca.forEach(e=>{e.next()})}var bu,cm;(cm=bu||(bu={})).xa="default",cm.Cache="cache";class O1{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==bu.Cache}}/**
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
 */class N1{constructor(e){this.key=e}}class V1{constructor(e){this.key=e}}class MS{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=be(),this.mutatedKeys=be(),this.Za=X_(e),this.Xa=new Us(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new am,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),y=Pl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),b=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?P!==b&&(r.track({type:3,doc:y}),O=!0):this.ru(m,y)||(r.track({type:2,doc:y}),O=!0,(c&&this.Za(y,c)>0||u&&this.Za(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(c||u)&&(l=!0)),O&&(y?(o=o.add(y),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,p)=>function(y,P){const b=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:O})}};return b(y)-b(P)}(f.type,p.type)||this.Za(f.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new Ys(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new am,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=be(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new V1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new N1(r))}),n}au(e){this.Ha=e.$s,this.Ya=be();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Ys.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Xh="SyncEngine";class LS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FS{constructor(e){this.key=e,this.cu=!1}}class US{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new ms(l=>Y_(l),Sl),this.Pu=new Map,this.Tu=new Set,this.Iu=new ze(le.comparator),this.Eu=new Map,this.du=new jh,this.Au={},this.Ru=new Map,this.Vu=Qs.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function jS(t,e,n=!0){const r=j1(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await D1(r,e,n,!0),s}async function BS(t,e){const n=j1(t);await D1(n,e,!0,!1)}async function D1(t,e,n,r){const s=await aS(t.localStore,wn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await zS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&I1(t.remoteStore,s),l}async function zS(t,e,n,r,s){t.fu=(p,m,y)=>async function(b,O,x,N){let F=O.view.tu(x);F.Cs&&(F=await tm(b.localStore,O.query,!1).then(({documents:I})=>O.view.tu(I,F)));const z=N&&N.targetChanges.get(O.targetId),ee=N&&N.targetMismatches.get(O.targetId)!=null,pe=O.view.applyChanges(F,b.isPrimaryClient,z,ee);return hm(b,O.targetId,pe.ou),pe.snapshot}(t,p,m,y);const i=await tm(t.localStore,e,!0),o=new MS(e,i.$s),l=o.tu(i.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);hm(t,n,u.ou);const f=new LS(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function $S(t,e,n){const r=ge(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!Sl(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hh(r.remoteStore,s.targetId),Iu(r,s.targetId)}).catch(si)):(Iu(r,s.targetId),await wu(r.localStore,s.targetId,!0))}async function HS(t,e){const n=ge(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hh(n.remoteStore,r.targetId))}async function qS(t,e,n){const r=JS(t);try{const s=await function(o,l){const c=ge(o),u=et.now(),f=l.reduce((y,P)=>y.add(P.key),be());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let P=qn(),b=be();return c.Bs.getEntries(y,f).next(O=>{P=O,P.forEach((x,N)=>{N.isValidDocument()||(b=b.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,P)).next(O=>{p=O;const x=[];for(const N of l){const F=a4(N,p.get(N.key).overlayedDocument);F!=null&&x.push(new jr(N.key,F,$_(F.value.mapValue),on.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,x,l)}).next(O=>{m=O;const x=O.applyToLocalDocumentSet(p,b);return c.documentOverlayCache.saveOverlays(y,O.batchId,x)})}).then(()=>({batchId:m.batchId,changes:Z_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Au[o.currentUser.toKey()];u||(u=new ze(ve)),u=u.insert(l,c),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await Co(r,s.changes),await Nl(r.remoteStore)}catch(s){const i=Qh(s,"Failed to persist write");n.reject(i)}}async function M1(t,e){const n=ge(t);try{const r=await sS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?Oe(o.cu,14607):s.removedDocuments.size>0&&(Oe(o.cu,42227),o.cu=!1))}),await Co(n,r,e)}catch(r){await si(r)}}function um(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.Sa)m.Fa(l)&&(u=!0)}),u&&Yh(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ze(le.comparator);o=o.insert(i,Tt.newNoDocument(i,me.min()));const l=be().add(i),c=new xl(me.min(),new Map,new ze(ve),o,l);await M1(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),Jh(r)}else await wu(r.localStore,e,!1).then(()=>Iu(r,e,n)).catch(si)}async function KS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await rS(n.localStore,e);F1(n,r,null),L1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Co(n,s)}catch(s){await si(s)}}async function GS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Oe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);F1(r,e,n),L1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Co(r,s)}catch(s){await si(s)}}function L1(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function F1(t,e,n){const r=ge(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function Iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||U1(t,r)})}function U1(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(Hh(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),Jh(t))}function hm(t,e,n){for(const r of n)r instanceof N1?(t.du.addReference(r.key,e),QS(t,r)):r instanceof V1?(Z(Xh,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||U1(t,r.key)):ue(19791,{pu:r})}function QS(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(Z(Xh,"New document in limbo: "+n),t.Tu.add(r),Jh(t))}function Jh(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new le(qe.fromString(e)),r=t.Vu.next();t.Eu.set(r,new FS(n)),t.Iu=t.Iu.insert(n,r),I1(t.remoteStore,new mr(wn(Al(n.path)),r,"TargetPurposeLimboResolution",wl.le))}}async function Co(t,e,n){const r=ge(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=zh.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,u){const f=ge(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,m=>j.forEach(m.ds,y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>j.forEach(m.As,y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!ii(p))throw p;Z($h,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.xs.get(m),P=y.snapshotVersion,b=y.withLastLimboFreeSnapshotVersion(P);f.xs=f.xs.insert(m,b)}}}(r.localStore,i))}async function YS(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){Z(Xh,"User change. New user:",e.toKey());const r=await E1(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new se($.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Co(n,r.ks)}}function XS(t,e){const n=ge(t),r=n.Eu.get(e);if(r&&r.cu)return be().add(r.key);{let s=be();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function j1(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=M1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WS.bind(null,e),e.lu.Y_=VS.bind(null,e.eventManager),e.lu.gu=DS.bind(null,e.eventManager),e}function JS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GS.bind(null,e),e}class Ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return nS(this.persistence,new Z4,e.initialUser,this.serializer)}Su(e){return new v1(Bh.fi,this.serializer)}bu(e){return new cS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ja.provider={build:()=>new Ja};class ZS extends Ja{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Oe(this.persistence.referenceDelegate instanceof Ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new F4(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new v1(r=>Ya.fi(r,n),this.serializer)}}class Au{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YS.bind(null,this.syncEngine),await kS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NS}()}createDatastore(e){const n=kl(e.databaseInfo.databaseId),r=function(i){return new pS(i)}(e.databaseInfo);return function(i,o,l,c){return new _S(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ES(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>um(this.syncEngine,n,0),function(){return sm.C()?new sm:new uS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const p=new US(s,i,o,l,c,u);return f&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);Z(cs,"RemoteStore shutting down."),i.da.add(5),await Ro(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Au.provider={build:()=>new Au};/**
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
 */class B1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Or="FirestoreClient";class eP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=N_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await E1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tP(t);Z(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>om(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>om(e.remoteStore,s)),t._onlineComponents=e}async function tP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Or,"Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new Ja)}}else Z(Or,"Using default OfflineComponentProvider"),await Cc(t,new ZS(void 0));return t._offlineComponents}async function z1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Or,"Using user provided OnlineComponentProvider"),await fm(t,t._uninitializedComponentsProvider._online)):(Z(Or,"Using default OnlineComponentProvider"),await fm(t,new Au))),t._onlineComponents}function nP(t){return z1(t).then(e=>e.syncEngine)}async function Su(t){const e=await z1(t),n=e.eventManager;return n.onListen=jS.bind(null,e.syncEngine),n.onUnlisten=$S.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HS.bind(null,e.syncEngine),n}function rP(t,e,n={}){const r=new br;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new B1({next:m=>{f.xu(),o.enqueueAndForget(()=>k1(i,p));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new se($.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new se($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new O1(Al(l.path),f,{includeMetadataChanges:!0,Qa:!0});return x1(i,p)}(await Su(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dm=new Map;/**
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
 */function sP(t,e,n){if(!n)throw new se($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iP(t,e,n,r){if(e===!0&&r===!0)throw new se($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pm(t){if(!le.isDocumentKey(t))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zh(t);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const H1="firestore.googleapis.com",mm=!0;class gm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=H1,this.ssl=mm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:mm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<M4)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hA;switch(r.type){case"firstParty":return new mA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dm.get(n);r&&(Z("ComponentProvider","Removing Datastore"),dm.delete(n),r.terminate())}(this),Promise.resolve()}}function oP(t,e,n,r={}){var s;t=an(t,ef);const i=vo(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Dy(`https://${c}`),My("Firestore",!0)),o.host!==H1&&o.host!==c&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Sr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=vt.MOCK_USER;else{f=vw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(m)}t._authCredentials=new fA(new k_(f,p))}}/**
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
 */class Vl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vl(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class uo extends Vl{constructor(e,n,r){super(e,n,Al(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new le(e))}withConverter(e){return new uo(this.firestore,e,this._path)}}function tf(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=N_.newId()),sP("doc","path",e),t instanceof ef){const r=qe.fromString(e,...n);return pm(r),new Ut(t,null,new le(r))}{if(!(t instanceof Ut||t instanceof uo))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return pm(r),new Ut(t.firestore,t instanceof uo?t.converter:null,new le(r))}}/**
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
 */const ym="AsyncQueue";class _m{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new T1(this,"async_queue_retry"),this.rc=()=>{const r=Rc();r&&Z(ym,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=Rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=Rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new br;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!ii(e))throw e;Z(ym,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Hn("INTERNAL UNHANDLED ERROR: ",vm(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=Gh.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ue(47125,{cc:vm(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function vm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function Em(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends ef{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _m,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _m(e),this._firestoreClient=void 0,await e}}}function nf(t,e){const n=jy(),r=$a,s=vh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yw("firestore");i&&oP(s,...i)}return s}function rf(t){if(t._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aP(t),t._firestoreClient}function aP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new xA(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$1(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new eP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(dt.fromBase64String(e))}catch(n){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ml{constructor(e){this._methodName=e}}/**
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
 */class sf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const lP=/^__.*__$/;class cP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class q1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function W1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ic:t})}}class Ll{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Za(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(W1(this.Ic)&&lP.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class uP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kl(e)}bc(e,n,r,s=!1){return new Ll({Ic:e,methodName:n,wc:r,path:ht.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K1(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new uP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hP(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);lf("Data must be an object, but it was:",o,r);const l=G1(r,o);let c,u;if(i.merge)c=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Pu(e,p,n);if(!o.contains(m))throw new se($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Y1(f,m)||f.push(m)}c=new Ht(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new cP(new Ft(l),c,u)}class Fl extends Ml{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fl}}function fP(t,e,n){return new Ll({Ic:3,wc:e.settings.wc,methodName:t._methodName,Rc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class af extends Ml{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=fP(this,e,!0),r=this.Sc.map(i=>xo(i,n)),s=new Gs(r);return new r4(e.path,s)}isEqual(e){return e instanceof af&&Sr(this.Sc,e.Sc)}}function dP(t,e,n,r){const s=t.bc(1,e,n);lf("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Ur(r,(c,u)=>{const f=cf(e,c,n);u=Ge(u);const p=s.mc(f);if(u instanceof Fl)i.push(f);else{const m=xo(u,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new Ht(i);return new q1(o,l,s.fieldTransforms)}function pP(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[Pu(e,r,n)],c=[s];if(i.length%2!=0)throw new se($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Pu(e,i[m])),c.push(i[m+1]);const u=[],f=Ft.empty();for(let m=l.length-1;m>=0;--m)if(!Y1(u,l[m])){const y=l[m];let P=c[m];P=Ge(P);const b=o.mc(y);if(P instanceof Fl)u.push(y);else{const O=xo(P,b);O!=null&&(u.push(y),f.set(y,O))}}const p=new Ht(u);return new q1(f,p,o.fieldTransforms)}function xo(t,e){if(Q1(t=Ge(t)))return lf("Unsupported field value:",e,t),G1(t,e);if(t instanceof Ml)return function(r,s){if(!W1(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=xo(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e4(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Qa(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qa(s.serializer,i)}}if(r instanceof sf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xs)return{bytesValue:h1(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof of)return function(o,l){return{mapValue:{fields:{[B_]:{stringValue:z_},[Ha]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.gc("VectorValues must only contain numeric values.");return Dh(l.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${Zh(r)}`)}(t,e)}function G1(t,e){const n={};return D_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,s)=>{const i=xo(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Q1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof sf||t instanceof Xs||t instanceof Ut||t instanceof Ml||t instanceof of)}function lf(t,e,n){if(!Q1(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Zh(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function Pu(t,e,n){if((e=Ge(e))instanceof Dl)return e._internalPath;if(typeof e=="string")return cf(t,e);throw Za("Field path arguments must be of type string or ",t,!1,void 0,n)}const mP=new RegExp("[~\\*/\\[\\]]");function cf(t,e,n){if(e.search(mP)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Za(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new se($.INVALID_ARGUMENT,l+t+c)}function Y1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class X1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(J1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gP extends X1{data(){return super.data()}}function J1(t,e){return typeof e=="string"?cf(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}/**
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
 */function yP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _P{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ha].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new of(i)}convertGeoPoint(e){return new sf(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Oe(y1(r),9688,{name:e});const s=new ao(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Z1 extends X1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(J1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wa extends Z1{data(e={}){return super.data(e)}}class EP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wa(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new wa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new wa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:wP(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
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
 */function TP(t){t=an(t,Ut);const e=an(t.firestore,us);return rP(rf(e),t._key).then(n=>tv(e,t,n))}class ev extends _P{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function bP(t,e,n){t=an(t,Ut);const r=an(t.firestore,us),s=vP(t.converter,e);return uf(r,[hP(K1(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function Ni(t,e,n,...r){t=an(t,Ut);const s=an(t.firestore,us),i=K1(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Dl?pP(i,"updateDoc",t._key,e,n,r):dP(i,"updateDoc",t._key,e),uf(s,[o.toMutation(t._key,on.exists(!0))])}function IP(t){return uf(an(t.firestore,us),[new Mh(t._key,on.none())])}function AP(t,...e){var n,r,s;t=Ge(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Em(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Em(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof Ut)u=an(t.firestore,us),f=Al(t._key.path),c={next:p=>{e[o]&&e[o](tv(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=an(t,Vl);u=an(p.firestore,us),f=p._query;const m=new ev(u);c={next:y=>{e[o]&&e[o](new EP(u,m,p,y))},error:e[o+1],complete:e[o+2]},yP(t._query)}return function(m,y,P,b){const O=new B1(b),x=new O1(y,O,P);return m.asyncQueue.enqueueAndForget(async()=>x1(await Su(m),x)),()=>{O.xu(),m.asyncQueue.enqueueAndForget(async()=>k1(await Su(m),x))}}(rf(u),f,l,c)}function uf(t,e){return function(r,s){const i=new br;return r.asyncQueue.enqueueAndForget(async()=>qS(await nP(r),s,i)),i.promise}(rf(t),e)}function tv(t,e,n){const r=n.docs.get(e._key),s=new ev(t);return new Z1(t,s,e._key,r,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}function SP(...t){return new af("arrayUnion",t)}(function(e,n=!0){(function(s){ri=s})(ni),$s(new ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new us(new dA(r.getProvider("auth-internal")),new gA(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),wr(Ap,Sp,e),wr(Ap,Sp,"esm2017")})();async function pr(){const t=ys();await t.checkAuth();const e=t.user;if(e){const n=nf(),r=tf(n,"users",`user-${e.uid}`),i=(await TP(r)).data();return{db:n,user:e,docRef:r,data:i}}return{user:e}}const el=gh("taskStore",{state:()=>({tasks:[],plan:null}),getters:{getTodayTasks(){const t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),s=`${e}-${n}-${r}`,i=[];if(this.tasks){for(let o of this.tasks)(o==null?void 0:o.inProgressAt)===s&&i.push(o);return i}},getFailedTasks(){return this.tasks?this.tasks.filter(e=>e.status==="failed"):[]},getFinishedTasks(){return this.tasks?this.tasks.filter(e=>e.status==="done"):[]},getNotStartedTasks(){return this.tasks?this.tasks.filter(e=>e.status==="not started"):[]},getInProgressTasks(){return this.tasks?this.tasks.filter(e=>e.status==="In Progress"):[]}},actions:{async startRealtimeSync(){const{user:t}=await pr();if(t){const e=nf(),n=tf(e,"users",`user-${t.uid}`);AP(n,r=>{const s=r.data();s&&s.tasks?(this.tasks=s.tasks.map(i=>({...i})),this.plan=s.plan):this.tasks=[]})}},async updatePlane(t){const{docRef:e}=await pr();this.plane=t,await Ni(e,{plan:t})},async addTasks(t=null,e=null,n=null,r=null,s=null,i=null,o="none",l=null,c="#ef4444"){const{docRef:u,data:f}=await pr(),p=new Date,m=p.getFullYear(),y=String(p.getMonth()+1).padStart(2,"0"),P=String(p.getDate()).padStart(2,"0");await Ni(u,{tasks:SP({taskName:t,addAt:`${m}-${y}-${P}`,inProgressAt:e,deadline:n,description:r,priority:s,status:"not started",completionRate:0,steps:i,originalStepsCount:i.length,category:`${o}`,categoryColor:c,image:l,id:crypto.randomUUID()})})},async updateTask(t,e,n){try{const{docRef:r,data:s}=await pr(),i=s.tasks||[],o=i.findIndex(u=>u.id===t);if(o===-1)throw new Error(`Task with ID ${t} not found`);const l={...i[o],[e]:n,updatedAt:new Date().toISOString()},c=[...i];c[o]=l,await Ni(r,{tasks:c})}catch(r){console.error("❌ Failed to update task:",r.message,r)}},async removeTask(t){const{docRef:e,data:n}=await pr(),s=((n==null?void 0:n.tasks)||this.tasks||[]).filter(i=>i.id!==t);await Ni(e,{tasks:s})},resetTasksStore(){this.tasks=null}}});var PP="firebase",RP="11.9.0";/**
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
 */wr(PP,RP,"app");const CP={apiKey:"AIzaSyBwnXE4x__kmDgkWLSSFaZ7iAjj0IieK0o",authDomain:"todoapp-415e7.firebaseapp.com",projectId:"todoapp-415e7",storageBucket:"todoapp-415e7.firebasestorage.app",messagingSenderId:"911891889886",appId:"1:911891889886:web:55282e40770addb3f80c4f"},nv=Uy(CP),xc=ma(nv),ys=gh("authStore",{state:()=>({user:null}),actions:{checkAuth(){return new Promise((t,e)=>{const n=Xb(xc,r=>{this.user=r,n(),t(r)},e)})},async signUp(t,e,n,r){try{const s=await Hb(xc,t,e),i=nf(),l=tf(i,"users",`user-${s.user.uid}`);await bP(l,{tasks:[],theme:"light",plan:"Basic Plan"}),this.user=s.user,Ic(this.user,{displayName:`${n}`,photoURL:r})}catch(s){return s}},async signIn(t,e){try{const n=await qb(xc,t,e);this.user=n.user}catch{return new Error("You entered a wrong email or password.")}},async deleteAccount(){try{if(this.user){const t=ma(),e=el(),n=t.currentUser,{docRef:r}=await pr();e.resetTasksStore(),await IP(r),await Zb(n),this.user=null}}catch(t){console.error("delete error:",t.code,t.message)}},async updateUserImage(t,e){try{t&&await Ic(t,{photoURL:e})}catch(n){console.error("update User Image error:",n.code,n.message)}},async updateDisplayName(t,e){try{t&&await Ic(t,{displayName:e})}catch(n){console.error("update Display Name error:",n.code,n.message)}},async updateUserPassword(t,e){const r=ma().currentUser;if(!r||!r.email)return"⚠️ No user is signed in.";const s=ps.credential(r.email,t);try{return await $b(r,s),await Kb(r,e),"✅ Password updated successfully."}catch(i){switch(i.code){case"auth/wrong-password":return"❌ Old password is incorrect.";case"auth/invalid-credential":return"❌  Please check your old password.";case"auth/too-many-requests":return"❌ Too many attempts. Try again later.";case"auth/weak-password":return"❌ New password is too weak.";case"auth/requires-recent-login":return"❌ Please log in again to update your password.";default:return`❌ Something went wrong: ${i.message}`}}},async logOut(){const t=ma(),e=el();await Jb(t),e.resetTasksStore(),this.user=null}}}),Ii=document.getElementById("html"),xP=gh("themeStore",{state:()=>({theme:"light"}),actions:{async getTheme(){const{user:t,data:e}=await pr();if(t){this.theme=e.theme;const n=[...Ii.classList][0];Ii.classList.replace(n,this.theme)}},async toggleTheme(){const{user:t,docRef:e}=await pr(),n=[...Ii.classList][0];t&&e?(this.theme=n==="light"?"dark":"light",Ii.classList.replace(n,this.theme),await Ni(e,{theme:this.theme})):(this.theme=this.theme==="light"?"dark":"light",Ii.classList.replace(n,this.theme))}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof document<"u";function rv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&rv(t.default)}const xe=Object.assign;function kc(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Ki=()=>{},un=Array.isArray,sv=/#/g,OP=/&/g,NP=/\//g,VP=/=/g,DP=/\?/g,iv=/\+/g,MP=/%5B/g,LP=/%5D/g,ov=/%5E/g,FP=/%60/g,av=/%7B/g,UP=/%7C/g,lv=/%7D/g,jP=/%20/g;function hf(t){return encodeURI(""+t).replace(UP,"|").replace(MP,"[").replace(LP,"]")}function BP(t){return hf(t).replace(av,"{").replace(lv,"}").replace(ov,"^")}function Ru(t){return hf(t).replace(iv,"%2B").replace(jP,"+").replace(sv,"%23").replace(OP,"%26").replace(FP,"`").replace(av,"{").replace(lv,"}").replace(ov,"^")}function zP(t){return Ru(t).replace(VP,"%3D")}function $P(t){return hf(t).replace(sv,"%23").replace(DP,"%3F")}function HP(t){return t==null?"":$P(t).replace(NP,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const qP=/\/$/,WP=t=>t.replace(qP,"");function Oc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=YP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ho(o)}}function KP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&cv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!QP(t[n],e[n]))return!1;return!0}function QP(t,e){return un(t)?Tm(t,e):un(e)?Tm(e,t):t===e}function Tm(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function YP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fo;(function(t){t.pop="pop",t.push="push"})(fo||(fo={}));var Gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gi||(Gi={}));function XP(t){if(!t)if(Cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),WP(t)}const JP=/^[^#]+#/;function ZP(t,e){return t.replace(JP,"#")+e}function e3(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ul=()=>({left:window.scrollX,top:window.scrollY});function t3(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=e3(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bm(t,e){return(history.state?history.state.position-e:-1)+t}const Cu=new Map;function n3(t,e){Cu.set(t,e)}function r3(t){const e=Cu.get(t);return Cu.delete(t),e}let s3=()=>location.protocol+"//"+location.host;function uv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),wm(c,"")}return wm(n,t)+r+s}function i3(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=uv(t,location),P=n.value,b=e.value;let O=0;if(m){if(n.value=y,e.value=m,o&&o===P){o=null;return}O=b?m.position-b.position:0}else r(y);s.forEach(x=>{x(n.value,P,{delta:O,type:fo.pop,direction:O?O>0?Gi.forward:Gi.back:Gi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(y),y}function f(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:Ul()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Im(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ul():null}}function o3(t){const{history:e,location:n}=window,r={value:uv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:s3()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(c,u){const f=xe({},e.state,Im(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=xe({},s.value,e.state,{forward:c,scroll:Ul()});i(f.current,f,!0);const p=xe({},Im(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function a3(t){t=XP(t);const e=o3(t),n=i3(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:ZP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function l3(t){return typeof t=="string"||t&&typeof t=="object"}function hv(t){return typeof t=="string"||typeof t=="symbol"}const fv=Symbol("");var Am;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Am||(Am={}));function Zs(t,e){return xe(new Error,{type:t,[fv]:!0},e)}function xn(t,e){return t instanceof Error&&fv in t&&(e==null||!!(t.type&e))}const Sm="[^/]+?",c3={sensitive:!1,strict:!1,start:!0,end:!0},u3=/[.+*?^${}()[\]/\\]/g;function h3(t,e){const n=xe({},c3,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(u3,"\\$&"),y+=40;else if(m.type===1){const{value:P,repeatable:b,optional:O,regexp:x}=m;i.push({name:P,repeatable:b,optional:O});const N=x||Sm;if(N!==Sm){y+=10;try{new RegExp(`(${N})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${P}" (${N}): `+z.message)}}let F=b?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(F=O&&u.length<2?`(?:/${F})`:"/"+F),O&&(F+="?"),s+=F,y+=20,O&&(y+=-8),b&&(y+=-20),N===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",P=i[m-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===0)f+=y.value;else if(y.type===1){const{value:P,repeatable:b,optional:O}=y,x=P in u?u[P]:"";if(un(x)&&!b)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const N=un(x)?x.join("/"):x;if(!N)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function f3(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=f3(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pm(r))return 1;if(Pm(s))return-1}return s.length-r.length}function Pm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const d3={type:0,value:""},p3=/[a-zA-Z0-9_]/;function m3(t){if(!t)return[[]];if(t==="/")return[[d3]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:p3.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function g3(t,e,n){const r=h3(m3(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function y3(t,e){const n=[],r=new Map;e=km({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const P=!y,b=Cm(p);b.aliasOf=y&&y.record;const O=km(e,p),x=[b];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ee of z)x.push(Cm(xe({},b,{components:y?y.record.components:b.components,path:ee,aliasOf:y?y.record:b})))}let N,F;for(const z of x){const{path:ee}=z;if(m&&ee[0]!=="/"){const pe=m.record.path,I=pe[pe.length-1]==="/"?"":"/";z.path=m.record.path+(ee&&I+ee)}if(N=g3(z,m,O),y?y.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),P&&p.name&&!xm(N)&&o(p.name)),pv(N)&&c(N),b.children){const pe=b.children;for(let I=0;I<pe.length;I++)i(pe[I],N,y&&y.children[I])}y=y||N}return F?()=>{o(F)}:Ki}function o(p){if(hv(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=E3(p,n);n.splice(m,0,p),p.record.name&&!xm(p)&&r.set(p.record.name,p)}function u(p,m){let y,P={},b,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Zs(1,{location:p});O=y.record.name,P=xe(Rm(m.params,y.keys.filter(F=>!F.optional).concat(y.parent?y.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&Rm(p.params,y.keys.map(F=>F.name))),b=y.stringify(P)}else if(p.path!=null)b=p.path,y=n.find(F=>F.re.test(b)),y&&(P=y.parse(b),O=y.record.name);else{if(y=m.name?r.get(m.name):n.find(F=>F.re.test(m.path)),!y)throw Zs(1,{location:p,currentLocation:m});O=y.record.name,P=xe({},m.params,p.params),b=y.stringify(P)}const x=[];let N=y;for(;N;)x.unshift(N.record),N=N.parent;return{name:O,path:b,params:P,matched:x,meta:v3(x)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Rm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_3(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _3(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function v3(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function km(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function E3(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;dv(t,e[i])<0?r=i:n=i+1}const s=w3(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function w3(t){let e=t;for(;e=e.parent;)if(pv(e)&&dv(t,e)===0)return e}function pv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function T3(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(iv," "),o=i.indexOf("="),l=ho(o<0?i:i.slice(0,o)),c=o<0?null:ho(i.slice(o+1));if(l in e){let u=e[l];un(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Om(t){let e="";for(let n in t){const r=t[n];if(n=zP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&Ru(i)):[r&&Ru(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function b3(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const I3=Symbol(""),Nm=Symbol(""),jl=Symbol(""),ff=Symbol(""),xu=Symbol("");function Ai(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Zs(4,{from:n,to:e})):m instanceof Error?c(m):l3(m)?c(Zs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Nc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(rv(c)){const f=(c.__vccOpts||c)[e];f&&i.push(cr(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=kP(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&cr(y,n,r,o,l,s)()}))}}return i}function Vm(t){const e=Jt(jl),n=Jt(ff),r=Be(()=>{const c=Dt(t.to);return e.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Js.bind(null,f));if(m>-1)return m;const y=Dm(c[u-2]);return u>1&&Dm(f)===y&&p[p.length-1].path!==y?p.findIndex(Js.bind(null,c[u-2])):m}),i=Be(()=>s.value>-1&&R3(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&cv(n.params,r.value.params));function l(c={}){if(P3(c)){const u=e[Dt(t.replace)?"replace":"push"](Dt(t.to)).catch(Ki);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function A3(t){return t.length===1?t[0]:t}const S3=uh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Vm,setup(t,{slots:e}){const n=ns(Vm(t)),{options:r}=Jt(jl),s=Be(()=>({[Mm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&A3(e.default(n));return t.custom?i:mh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ku=S3;function P3(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function R3(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mm=(t,e,n)=>t??e??n,C3=uh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(xu),s=Be(()=>t.route||r.value),i=Jt(Nm,0),o=Be(()=>{let u=Dt(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Be(()=>s.value.matched[o.value]);la(Nm,Be(()=>o.value+1)),la(I3,l),la(xu,s);const c=yr();return _r(()=>[c.value,l.value,t.name],([u,f,p],[m,y,P])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Js(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Lm(n.default,{Component:m,route:u});const y=p.props[f],P=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=mh(m,xe({},P,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Lm(n.default,{Component:O,route:u})||O}}});function Lm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const x3=C3;function k3(t){const e=y3(t.routes,t),n=t.parseQuery||T3,r=t.stringifyQuery||Om,s=t.history,i=Ai(),o=Ai(),l=Ai(),c=t2(sr);let u=sr;Cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=kc.bind(null,M=>""+M),p=kc.bind(null,HP),m=kc.bind(null,ho);function y(M,J){let Y,te;return hv(M)?(Y=e.getRecordMatcher(M),te=J):te=M,e.addRoute(te,Y)}function P(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function b(){return e.getRoutes().map(M=>M.record)}function O(M){return!!e.getRecordMatcher(M)}function x(M,J){if(J=xe({},J||c.value),typeof M=="string"){const C=Oc(n,M,J.path),L=e.resolve({path:C.path},J),B=s.createHref(C.fullPath);return xe(C,L,{params:m(L.params),hash:ho(C.hash),redirectedFrom:void 0,href:B})}let Y;if(M.path!=null)Y=xe({},M,{path:Oc(n,M.path,J.path).path});else{const C=xe({},M.params);for(const L in C)C[L]==null&&delete C[L];Y=xe({},M,{params:p(C)}),J.params=p(J.params)}const te=e.resolve(Y,J),Se=M.hash||"";te.params=f(m(te.params));const E=KP(r,xe({},M,{hash:BP(Se),path:te.path})),T=s.createHref(E);return xe({fullPath:E,hash:Se,query:r===Om?b3(M.query):M.query||{}},te,{redirectedFrom:void 0,href:T})}function N(M){return typeof M=="string"?Oc(n,M,c.value.path):xe({},M)}function F(M,J){if(u!==M)return Zs(8,{from:J,to:M})}function z(M){return I(M)}function ee(M){return z(xe(N(M),{replace:!0}))}function pe(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let te=typeof Y=="function"?Y(M):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=N(te):{path:te},te.params={}),xe({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function I(M,J){const Y=u=x(M),te=c.value,Se=M.state,E=M.force,T=M.replace===!0,C=pe(Y);if(C)return I(xe(N(C),{state:typeof C=="object"?xe({},Se,C.state):Se,force:E,replace:T}),J||Y);const L=Y;L.redirectedFrom=J;let B;return!E&&GP(r,te,Y)&&(B=Zs(16,{to:L,from:te}),Kt(te,te,!0,!1)),(B?Promise.resolve(B):A(L,te)).catch(U=>xn(U)?xn(U,2)?U:en(U):we(U,L,te)).then(U=>{if(U){if(xn(U,2))return I(xe({replace:T},N(U.to),{state:typeof U.to=="object"?xe({},Se,U.to.state):Se,force:E}),J||L)}else U=R(L,te,!0,T,Se);return S(L,te,U),U})}function _(M,J){const Y=F(M,J);return Y?Promise.reject(Y):Promise.resolve()}function v(M){const J=Jn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function A(M,J){let Y;const[te,Se,E]=O3(M,J);Y=Nc(te.reverse(),"beforeRouteLeave",M,J);for(const C of te)C.leaveGuards.forEach(L=>{Y.push(cr(L,M,J))});const T=_.bind(null,M,J);return Y.push(T),kt(Y).then(()=>{Y=[];for(const C of i.list())Y.push(cr(C,M,J));return Y.push(T),kt(Y)}).then(()=>{Y=Nc(Se,"beforeRouteUpdate",M,J);for(const C of Se)C.updateGuards.forEach(L=>{Y.push(cr(L,M,J))});return Y.push(T),kt(Y)}).then(()=>{Y=[];for(const C of E)if(C.beforeEnter)if(un(C.beforeEnter))for(const L of C.beforeEnter)Y.push(cr(L,M,J));else Y.push(cr(C.beforeEnter,M,J));return Y.push(T),kt(Y)}).then(()=>(M.matched.forEach(C=>C.enterCallbacks={}),Y=Nc(E,"beforeRouteEnter",M,J,v),Y.push(T),kt(Y))).then(()=>{Y=[];for(const C of o.list())Y.push(cr(C,M,J));return Y.push(T),kt(Y)}).catch(C=>xn(C,8)?C:Promise.reject(C))}function S(M,J,Y){l.list().forEach(te=>v(()=>te(M,J,Y)))}function R(M,J,Y,te,Se){const E=F(M,J);if(E)return E;const T=J===sr,C=Cs?history.state:{};Y&&(te||T?s.replace(M.fullPath,xe({scroll:T&&C&&C.scroll},Se)):s.push(M.fullPath,Se)),c.value=M,Kt(M,J,Y,T),en()}let w;function it(){w||(w=s.listen((M,J,Y)=>{if(!hn.listening)return;const te=x(M),Se=pe(te);if(Se){I(xe(Se,{replace:!0,force:!0}),te).catch(Ki);return}u=te;const E=c.value;Cs&&n3(bm(E.fullPath,Y.delta),Ul()),A(te,E).catch(T=>xn(T,12)?T:xn(T,2)?(I(xe(N(T.to),{force:!0}),te).then(C=>{xn(C,20)&&!Y.delta&&Y.type===fo.pop&&s.go(-1,!1)}).catch(Ki),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),we(T,te,E))).then(T=>{T=T||R(te,E,!1),T&&(Y.delta&&!xn(T,8)?s.go(-Y.delta,!1):Y.type===fo.pop&&xn(T,20)&&s.go(-1,!1)),S(te,E,T)}).catch(Ki)}))}let xt=Ai(),Ve=Ai(),fe;function we(M,J,Y){en(M);const te=Ve.list();return te.length?te.forEach(Se=>Se(M,J,Y)):console.error(M),Promise.reject(M)}function jt(){return fe&&c.value!==sr?Promise.resolve():new Promise((M,J)=>{xt.add([M,J])})}function en(M){return fe||(fe=!M,it(),xt.list().forEach(([J,Y])=>M?Y(M):J()),xt.reset()),M}function Kt(M,J,Y,te){const{scrollBehavior:Se}=t;if(!Cs||!Se)return Promise.resolve();const E=!Y&&r3(bm(M.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return hl().then(()=>Se(M,J,E)).then(T=>T&&t3(T)).catch(T=>we(T,M,J))}const Ue=M=>s.go(M);let je;const Jn=new Set,hn={currentRoute:c,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:b,resolve:x,options:t,push:z,replace:ee,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ve.add,isReady:jt,install(M){const J=this;M.component("RouterLink",ku),M.component("RouterView",x3),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(c)}),Cs&&!je&&c.value===sr&&(je=!0,z(s.location).catch(Se=>{}));const Y={};for(const Se in sr)Object.defineProperty(Y,Se,{get:()=>c.value[Se],enumerable:!0});M.provide(jl,J),M.provide(ff,Ug(Y)),M.provide(xu,c);const te=M.unmount;Jn.add(M),M.unmount=function(){Jn.delete(M),Jn.size<1&&(u=sr,w&&w(),w=null,c.value=sr,je=!1,fe=!1),te()}}};function kt(M){return M.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return hn}function O3(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Js(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Js(u,c))||s.push(c))}return[n,r,s]}function mv(){return Jt(jl)}function N3(t){return Jt(ff)}const V3={class:"dark:bg-on-surface bg-light-secondary w-full pt-10"},D3={class:"container p-4 mx-auto"},M3={class:"flex items-center flex-wrap"},L3={class:"flex text-2xl"},F3={class:"mx-2 cursor-pointer"},U3={class:"mx-2 cursor-pointer"},j3={class:"mx-2 cursor-pointer"},B3={class:"mx-2 cursor-pointer"},z3={class:"grow"},$3={class:"text-on-primary w-full"},H3={key:0},q3={class:"dark:bg-primary bg-on-surface w-full py-2"},W3={class:"container mx-auto text-center text-on-primary font-bold"},K3={__name:"FooterCom",setup(t){const e=ys(),n=Be(()=>e.user);return(r,s)=>{const i=Bn("font-awesome-icon"),o=Bn("RouterLink");return Ee(),Ye("footer",V3,[D("div",D3,[D("ul",M3,[D("li",null,[s[0]||(s[0]=D("img",{src:Ry,width:"64px",alt:""},null,-1)),s[1]||(s[1]=D("p",{class:"text-on-primary md:w-md font-semibold my-5 text-[18px]"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolorem quod nesciunt sapiente perferendis a nulla minima repudiandae, placeat, ",-1)),D("ul",L3,[D("li",F3,[de(i,{icon:"fa-brands fa-instagram",class:"text-[#E1306C]"})]),D("li",U3,[de(i,{icon:"fa-brands fa-linkedin",class:"text-[#0A66C2]"})]),D("li",j3,[de(i,{icon:"fa-brands fa-x-twitter",class:"text-black"})]),D("li",B3,[de(i,{icon:"fa-brands fa-telegram",class:"text-[#229ED9]"})])])]),D("li",z3,[D("ul",$3,[D("li",null,[n.value?(Ee(),ct(o,{key:1,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/index"},{default:Nt(()=>s[3]||(s[3]=[He("go to dashbord")])),_:1})):(Ee(),ct(o,{key:0,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/"},{default:Nt(()=>s[2]||(s[2]=[He("Home")])),_:1}))]),n.value?nn("",!0):(Ee(),Ye("li",H3,[de(o,{class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/SignView"},{default:Nt(()=>s[4]||(s[4]=[He("sign Up")])),_:1})])),D("li",null,[n.value?(Ee(),ct(o,{key:1,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/index/contactUs"},{default:Nt(()=>s[6]||(s[6]=[He("contactUs")])),_:1})):(Ee(),ct(o,{key:0,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/#contactUs"},{default:Nt(()=>s[5]||(s[5]=[He("contactUs")])),_:1}))]),D("li",null,[n.value?(Ee(),ct(o,{key:0,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/aboutUS"},{default:Nt(()=>s[7]||(s[7]=[He("about US")])),_:1})):(Ee(),ct(o,{key:1,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/#aboutUs"},{default:Nt(()=>s[8]||(s[8]=[He("about US")])),_:1}))]),D("li",null,[de(o,{class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/faq"},{default:Nt(()=>s[9]||(s[9]=[He("FAQ")])),_:1})]),D("li",null,[n.value?(Ee(),ct(o,{key:1,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/index"},{default:Nt(()=>s[11]||(s[11]=[He("select Plan")])),_:1})):(Ee(),ct(o,{key:0,class:"py-4 block duration-100 font-semibold hover:bg-light-primary px-4",to:"/#selectPlan"},{default:Nt(()=>s[10]||(s[10]=[He("select Plan")])),_:1}))])])])])]),D("div",q3,[D("div",W3,[D("p",null,[s[12]||(s[12]=He(" Made with ")),de(i,{class:"text-red-500",icon:"heart"}),s[13]||(s[13]=He(" by ")),s[14]||(s[14]=D("a",{href:"https://github.com/HaitamMahmdi",target:"_blank"},"HaitamMahmdi",-1))])])])])}}},G3={class:"container mx-auto flex justify-between items-center"},Q3={class:"logo"},Y3={class:"flex items-center"},X3={key:0,class:"flex font-semibold"},J3={class:"text-primary"},Z3={class:"relative min-h-[100vh]"},eR={__name:"App",setup(t){const e=ys(),n=el(),r=xP(),s=N3(),i=Be(()=>e.user);return _r(()=>e.user,async o=>{o&&(n.startRealtimeSync(),await r.getTheme())},{immediate:!0}),(o,l)=>{const c=Bn("font-awesome-icon"),u=Bn("router-view");return Ee(),Ye(rt,null,[i.value?nn("",!0):(Ee(),Ye("header",{key:0,class:Lt([[Dt(r).theme==="light"?"bg-light-secondary":"bg-on-surface"],"w-full p-4"])},[D("div",G3,[D("div",Q3,[de(Dt(ku),{to:"/"},{default:Nt(()=>l[1]||(l[1]=[D("img",{src:Ry,width:"35px",alt:""},null,-1)])),_:1})]),D("div",Y3,[Dt(s).name!=="SignIn"?(Ee(),Ye("ul",X3,[D("li",J3,[de(Dt(ku),{to:"/SignView"},{default:Nt(()=>l[2]||(l[2]=[He("SignUp")])),_:1})])])):nn("",!0),D("div",null,[D("button",{onClick:l[0]||(l[0]=(...f)=>Dt(r).toggleTheme&&Dt(r).toggleTheme(...f)),class:"text-on-primary cursor-pointer ml-5 text-2xl"},[Dt(r).theme==="light"?(Ee(),ct(c,{key:0,icon:"moon"})):(Ee(),ct(c,{key:1,icon:"sun"}))])])])])],2)),D("main",Z3,[de(u)]),de(K3)],64)}}},tR="modulepreload",nR=function(t){return"/ToDoApp/"+t},Fm={},kn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=nR(u),u in Fm)return;Fm[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":tR,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((y,P)=>{m.addEventListener("load",y),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Um="/ToDoApp/user_default_profile_image/default.jpg",rR="/ToDoApp/user_default_profile_image/camionnette.jpg",sR="/ToDoApp/user_default_profile_image/camionnette_Night.jpg",iR="/ToDoApp/user_default_profile_image/cat.jpg",oR="/ToDoApp/user_default_profile_image/face.jpg",aR="/ToDoApp/user_default_profile_image/woman_face.jpg",lR=["for"],cR={class:"w-full relative"},uR=["type","placeholder","id","name","readonly"],hR={class:"mr-1"},Qr={__name:"InputComponent",props:wd({inputType:String,id:String,name:String,label:String,helperText:Boolean,placeholder:String,addValidateToText:Boolean,isRequired:Boolean,cusclass:String,inputReadonly:Boolean,lableStyle:String},{modelValue:{},modelModifiers:{}}),emits:wd(["isvalidVal"],["update:modelValue"]),setup(t,{emit:e}){const n=e,r=rE(t,"modelValue"),s=yr(null),i=yr(""),o=yr(!1),l=()=>{const c=/^[A-Za-z\s]+$/,u=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,f=/^(?=\S{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;if(!r.value&&t.isRequired){s.value=!1,i.value="This field is required!",n("isvalidVal",s.value);return}t.inputType==="email"&&(u.test(r.value)?(s.value=!0,i.value="Looks good!"):(s.value=!1,i.value="Please enter a valid email like example@gmail.com")),t.inputType==="text"&&t.addValidateToText&&(c.test(r.value)?(s.value=!0,i.value="Looks good!"):(s.value=!1,i.value="Name must contain letters only.")),t.inputType==="password"&&(f.test(r.value)?(s.value=!0,i.value="Looks good!"):(s.value=!1,i.value="Use 8–16 characters: uppercase, lowercase, number, and symbol!")),n("isvalidVal",s.value)};return(c,u)=>{const f=Bn("font-awesome-icon");return Ee(),Ye("div",ph(c.$attrs,{class:"flex flex-col relative"}),[D("label",{for:t.id||"text`",class:Lt([[t.lableStyle],"font-semibold mb-2"])},Rt(t.label),11,lR),D("div",cR,[Dn(D("input",{onInput:l,type:t.inputType==="password"?o.value?"text":"password":t.inputType,placeholder:t.placeholder||"","onUpdate:modelValue":u[0]||(u[0]=p=>r.value=p),id:t.id||"text",name:t.name||"text",class:Lt(["dark:bg-on-surface border pl-10 font-semibold",[s.value===null?"   border-on-surface dark:text-on-primary dark:focus:text-on-surface  placeholder:text-[#dddd]":s.value?"border-success   text-success  ":"border-error text-error  placeholder:text-error",t.cusclass,t.inputReadonly?"":"focus:bg-on-primary"]]),readonly:t.inputReadonly},null,42,uR),[[WE,r.value]]),N2(c.$slots,"namedSlot"),t.inputType==="password"?Dn((Ee(),ct(f,{key:0,onClick:u[1]||(u[1]=p=>o.value=!o.value),class:Lt([[s.value===null?"text-secondary peer-focus:text-on-surface":s.value?"text-success":"text-error"],"absolute text-2xl cursor-pointer left-2 top-3/6 transform -translate-y-2/4"]),icon:"eye"},null,8,["class"])),[[Yr,!o.value]]):nn("",!0),t.inputType==="password"?Dn((Ee(),ct(f,{key:1,icon:"eye-slash",class:Lt([[s.value===null?"text-on-primary peer-focus:text-on-surface":s.value?"text-success":"text-error"],"absolute text-2xl cursor-pointer left-2 top-3/6 transform -translate-y-2/4"]),onClick:u[2]||(u[2]=p=>o.value=!o.value)},null,8,["class"])),[[Yr,o.value]]):nn("",!0)]),t.helperText?(Ee(),Ye("div",{key:0,class:Lt(["flex items-center",[s.value===null?"hidden":s.value?" text-success":" text-error"]])},[Dn(de(f,{icon:"circle-check"},null,512),[[Yr,s.value]]),Dn(de(f,{icon:"circle-exclamation"},null,512),[[Yr,!s.value]]),D("p",hR,Rt(i.value),1)],2)):nn("",!0)],16)}}},fR={class:"bg-success w-24 h-24 p-5 text-on-primary rounded-full text-center flex items-center justify-center"},dR={class:"container max-sm:w-full mx-auto mt-5"},pR={class:"md:w-fit w-full mx-auto flex justify-center"},mR={class:"text-textColor text-center mb-5 max-sm:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"},gR={class:"min-h-[25rem] flex items-center justify-center relative"},yR={key:0,id:"firstPhase",ref:"firstPhase",class:"relative left-0 md:w-fit w-full"},_R={class:"flex max-sm:w-full max-sm:flex-col w-md mx-auto my-5 flex-wrap justify-between"},vR={class:"max-w-[48%] max-sm:max-w-full"},ER={class:"max-w-[48%] max-sm:max-w-full max-sm:mt-5"},wR={class:"w-md max-sm:w-full font-semibold text-center text-error mx-auto"},TR={class:"w-md mb-5 max-sm:w-full font-semibold text-center mx-auto mt-5"},bR={key:1,id:"secondPhase",ref:"secondPhase",class:"bg-transparent mx-auto max-w-md"},IR={class:"flex flex-wrap justify-center"},AR={key:2,ref:"thirdPhase",id:"thirdPhase",class:""},SR={class:"flex flex-col items-center"},PR={class:"w-md max-sm:w-full font-semibold text-center text-error mx-auto"},RR={class:"w-md max-sm:w-full pt-5 mx-auto flex flex-col justify-between"},CR={class:"flex flex-row-reverse justify-between"},xR={class:"text-on-primary font-semibold"},kR={class:"flex items-center mt-10 justify-center"},OR={__name:"SignView",setup(t){const e="/ToDoApp/",n=mv(),r=ys(),s=Be(()=>r.user);r.checkAuth();const i=yr(!1),o=ns({currentPhase:1,isLoginMode:!1,errorMessages:""}),l=ns({email:{val:"",isValidVal:null},password:{val:"",isValidVal:null},firstName:{val:"",isValidVal:null},lastName:{val:"",isValidVal:null},displayName:{val:"",isValidVal:null},profileImage:""}),c={"auth/email-already-in-use":"❌ This email is already registered. Try logging in instead.","auth/invalid-email":"❌ The email address is badly formatted. Please check and try again.","auth/operation-not-allowed":"❌ Sign-up with email/password is currently disabled. Please try again later.","auth/weak-password":"❌ Your password is too weak. It must be at least 6 characters."},u=async()=>{try{const P=l.email.isValidVal&&l.password.isValidVal&&l.firstName.isValidVal&&l.lastName.isValidVal,b=l.displayName.isValidVal&&l.profileImage;if(!P){o.errorMessages="❌ Please fill out all fields correctly.";return}if(o.currentPhase===3&&!b){o.errorMessages="❌ select an image and a valid display name. ";return}if(o.currentPhase<4&&(o.currentPhase+=1,o.errorMessages=""),o.currentPhase===4){const O=await r.signUp(l.email.val,l.password.val,l.displayName.val,l.profileImage);if(O instanceof Error){o.currentPhase=1,o.errorMessages=c[O.code];return}o.currentPhase="completed"}}catch(P){o.errorMessages=`🔥 Firebase error: ${P.code}`,console.error("❌ Error in goToNextPage:",P.code,P.message)}},f=async()=>{await r.signIn(l.email.val.trim().toLocaleLowerCase(),l.password.val)instanceof Error&&(o.errorMessages="❌ Email or password are wrong.")},p=yr(null),m=P=>{const b=P.target;p.value&&(l.profileImage=b.dataset.imagename,p.value.src=`${e}user_default_profile_image/${l.profileImage}.jpg`)},y=P=>{const b=P.currentTarget;b.dataset.clicked!=="false"?(b.classList.replace("text-on-primary","text-black"),b.classList.replace("bg-primary","bg-gray-300"),b.dataset.clicked="false"):(b.classList.replace("text-black","text-on-primary"),b.classList.replace("bg-gray-300","bg-primary"),b.dataset.clicked="true")};return _r(s,()=>{i.value=!0,setTimeout(()=>{n.push("/index")},1e3)}),(P,b)=>{const O=Bn("font-awesome-icon");return Ee(),Ye(rt,null,[D("div",{class:Lt([i.value?" opacity-100 z-100 h-[200vh]":"opacity-0 z-0","absolute w-full bg-light-primary flex flex-col items-center justify-start top-[-1.2rem] pt-20 left-0 dark:bg-on-surface dark:text-on-primary"])},[b[14]||(b[14]=D("h1",{class:"text-[clamp(3rem,5vw,8rem)] font-semibold"},"All Finished",-1)),D("div",fR,[de(O,{class:"text-[clamp(3rem,5vw,8rem)]",icon:["fas","check"]})])],2),D("div",dR,[D("div",pR,[o.currentPhase!="completed"?(Ee(),Ye("form",{key:0,onSubmit:b[12]||(b[12]=Jc(()=>{},["prevent"])),onKeydown:b[13]||(b[13]=XE(Jc(()=>{},["prevent"]),["enter"])),novalidate:"",action:"",class:"dark:text-white justify-between dark:bg-surface relative overflow-hidden flex max-sm:w-full p-4 sm:w-fit md:min-w-xl flex-col"},[D("h1",mR,Rt(o.isLoginMode?"signIn":"signUp"),1),D("div",gR,[o.currentPhase===1?(Ee(),Ye("div",yR,[b[15]||(b[15]=D("div",{class:"w-full sm:w-md relative mx-auto"},null,-1)),de(Qr,{modelValue:l.email.val,"onUpdate:modelValue":b[0]||(b[0]=x=>l.email.val=x),label:"email",inputType:"email",id:"newInput",name:"input",isRequired:!0,onIsvalidVal:b[1]||(b[1]=x=>l.email.isValidVal=x),lableStyle:"text-2xl",class:"md:w-md mb-5",cusclass:"px-5 w-full py-3",helperText:!0,addValidateToText:!0},null,8,["modelValue"]),de(Qr,{modelValue:l.password.val,"onUpdate:modelValue":b[2]||(b[2]=x=>l.password.val=x),label:"Password",inputType:"password",id:"newInput",name:"input",isRequired:!0,class:"md:w-md mb-5",onIsvalidVal:b[3]||(b[3]=x=>l.password.isValidVal=x),lableStyle:"text-2xl",cusclass:"px-5 w-full py-3",helperText:!0,addValidateToText:!0},null,8,["modelValue"]),Dn(D("div",_R,[D("div",vR,[de(Qr,{modelValue:l.firstName.val,"onUpdate:modelValue":b[4]||(b[4]=x=>l.firstName.val=x),label:"first name",inputType:"text",id:"newInput",name:"input",isRequired:!0,class:"w-full",onIsvalidVal:b[5]||(b[5]=x=>l.firstName.isValidVal=x),lableStyle:"text-2xl",cusclass:"px-5 w-full py-3",helperText:!0,addValidateToText:!0},null,8,["modelValue"])]),D("div",ER,[de(Qr,{modelValue:l.lastName.val,"onUpdate:modelValue":b[6]||(b[6]=x=>l.lastName.val=x),label:"last name",inputType:"text",id:"newInput",name:"input",isRequired:!0,class:"w-full",onIsvalidVal:b[7]||(b[7]=x=>l.lastName.isValidVal=x),lableStyle:"text-2xl",cusclass:"px-5 w-full py-3",helperText:!0,addValidateToText:!0},null,8,["modelValue"])])],512),[[Yr,!o.isLoginMode]]),D("p",wR,Rt(o.errorMessages),1),D("p",TR,[He(Rt(o.isLoginMode?"Don't have an account ?":"Already have an account ?")+" ",1),D("span",{onClick:b[8]||(b[8]=x=>o.isLoginMode=!o.isLoginMode),class:"text-primary cursor-pointer"},Rt(o.isLoginMode?"SignUp":"SignIn"),1)])],512)):nn("",!0),o.currentPhase===2?(Ee(),Ye("div",bR,[b[22]||(b[22]=D("h2",{class:"font-semibold text-center dark:text-on-primary text-3xl mb-5"}," How did you hear about us ? ",-1)),D("div",IR,[D("p",{onClick:y,"data-clicked":"false",class:"p-2 px-4 transition duration-75 text-black bg-gray-300 rounded-full m-2 cursor-pointer"},[de(O,{icon:"fa-brands fa-instagram",class:"text-[#E1306C]"}),b[16]||(b[16]=He(" Instagram "))]),D("p",{"data-clicked":"false",onClick:y,class:"p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"},[de(O,{icon:"fa-brands fa-youtube",class:"text-[#FF0000]"}),b[17]||(b[17]=He(" Youtube "))]),D("p",{onClick:y,"data-clicked":"false",class:"p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"},[de(O,{icon:"fa-brands fa-linkedin",class:"text-[#0A66C2]"}),b[18]||(b[18]=He(" Linkedin "))]),D("p",{onClick:y,"data-clicked":"false",class:"p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"},[de(O,{icon:"fa-brands fa-x-twitter",class:"text-black"}),b[19]||(b[19]=He(" Twitter "))]),D("p",{onClick:y,"data-clicked":"false",class:"p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"},[de(O,{icon:"fa-brands fa-telegram",class:"text-[#229ED9]"}),b[20]||(b[20]=He(" Telegram "))]),D("p",{onClick:y,"data-clicked":"false",class:"p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"},[de(O,{class:"text-[#FF4500]",icon:"fa-brands fa-reddit-alien"}),b[21]||(b[21]=He(" Reddit "))]),D("p",{onClick:y,"data-clicked":"false",class:"p-2 px-6 transition duration-75 text-black bg-gray-300 rounded-full m-2 cursor-pointer"}," Other ")])],512)):nn("",!0),o.currentPhase===3?(Ee(),Ye("div",AR,[D("div",SR,[D("img",{ref_key:"userImage",ref:p,src:Um,alt:"userImage",class:"w-40 h-40 mb-5 rounded-full"},null,512),D("div",null,[de(Qr,{modelValue:l.displayName.val,"onUpdate:modelValue":b[9]||(b[9]=x=>l.displayName.val=x),label:"last name",inputType:"text",id:"newInput",name:"input",isRequired:!0,class:"w-full",onIsvalidVal:b[10]||(b[10]=x=>l.displayName.isValidVal=x),lableStyle:"text-2xl",cusclass:"px-5 w-full py-3",helperText:!0,addValidateToText:!0},null,8,["modelValue"])]),D("ul",{class:"flex flex-wrap justify-center items-center mt-5"},[D("li",null,[D("img",{onClick:m,"data-imagename":"default",class:"w-16 h-16 rounded-full mx-5 md:mt-0 cursor-pointer mt-3",src:Um,alt:""})]),D("li",null,[D("img",{onClick:m,"data-imagename":"camionnette",class:"w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer",src:rR,alt:""})]),D("li",null,[D("img",{onClick:m,"data-imagename":"camionnette_Night",class:"w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer",src:sR,alt:""})]),D("li",null,[D("img",{onClick:m,"data-imagename":"cat",class:"w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer",src:iR,alt:""})]),D("li",null,[D("img",{onClick:m,class:"w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer","data-imagename":"face",src:oR,alt:""})]),D("li",null,[D("img",{onClick:m,"data-imagename":"woman_face",class:"w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer",src:aR,alt:""})])]),D("p",PR,Rt(o.errorMessages),1)])],512)):nn("",!0)]),Dn(D("button",{onClick:f,class:"dark:bg-on-surface bg-primary cursor-pointer font-semibold text-on-primary text-2xl block w-96 mx-auto px-3 py-4",id:"sbmitBotton"}," Submit ",512),[[Yr,o.isLoginMode]]),Dn(D("div",RR,[D("div",CR,[D("button",{onClick:u,class:"flex items-center w-24 justify-center rounded-2xl bg-on-surface p-2 cursor-pointer"},[D("p",xR,Rt(o.currentPhase<=2?"Next":"Submit"),1),o.currentPhase<=2?(Ee(),ct(O,{key:0,class:"text-primary ml-1 text-2xl",icon:"caret-right"})):nn("",!0)]),D("button",{onClick:b[11]||(b[11]=x=>o.currentPhase!==1?o.currentPhase-=1:""),class:"bg-on-secondary items-center min-w-24 text-black p-2 text-center cursor-pointer transition hover:text-white hover:bg-[#333] rounded-2xl"},b[23]||(b[23]=[D("p",{class:""},"Go Back",-1)]))]),D("div",kR,[D("div",{class:Lt([[o.currentPhase===1?"bg-primary":"bg-on-surface"],"flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"])}," 1 ",2),b[24]||(b[24]=D("div",{class:"w-5 bg-on-surface h-0.5"},null,-1)),D("div",{class:Lt([[o.currentPhase===2?"bg-primary":"bg-on-surface"],"flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"])}," 2 ",2),b[25]||(b[25]=D("div",{class:"w-5 bg-on-surface h-0.5"},null,-1)),D("div",{class:Lt([[o.currentPhase===3?"bg-primary":"bg-on-surface"],"flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"])}," 3 ",2)])],512),[[Yr,!o.isLoginMode]])],32)):nn("",!0)])])],64)}}},NR={class:"mb-5"},VR={class:"font-bold text-4xl"},DR={__name:"SliderCom",setup(t){const e=[{company:"TechNova",reaction:"Clean design and super intuitive."},{company:"Cloudbyte",reaction:"Fast, simple, and reliable tool."},{company:"Zenloop",reaction:"Exactly what we were missing."},{company:"PixelForge",reaction:"Elegant UI, great user flow."},{company:"Brightstack",reaction:"Works smoothly across all devices."},{company:"Codeflare",reaction:"Simple, smart, and well built."},{company:"Snapcore",reaction:"Productivity instantly went up."},{company:"NimbusX",reaction:"Easy to use and efficient."},{company:"Quantico",reaction:"Great UX, fast and responsive."},{company:"LoopNetics",reaction:"Feels polished and thoughtfully made."},{company:"TechNova",reaction:"Clean design and super intuitive."},{company:"Cloudbyte",reaction:"Fast, simple, and reliable tool."},{company:"Zenloop",reaction:"Exactly what we were missing."},{company:"PixelForge",reaction:"Elegant UI, great user flow."},{company:"Brightstack",reaction:"Works smoothly across all devices."},{company:"Codeflare",reaction:"Simple, smart, and well built."},{company:"Snapcore",reaction:"Productivity instantly went up."},{company:"NimbusX",reaction:"Easy to use and efficient."},{company:"Quantico",reaction:"Great UX, fast and responsive."},{company:"LoopNetics",reaction:"Feels polished and thoughtfully made."}];return(n,r)=>(Ee(),Ye(rt,null,Hc(e,(s,i)=>D("div",{class:Lt(["relative p-4 dark:text-on-primary animate-scroll text-center min-w-64 h-60 flex flex-col items-center justify-center",Number.isInteger(i/2)?"dark:bg-surface bg-light-secondary ":"dark:bg-on-surface bg-light-primary"]),key:i,id:"card"},[D("p",NR,Rt(s.reaction),1),D("h4",VR,Rt(s.company),1)],2)),64))}},MR={class:"py-4 px-2 text-center font-semibold text-[clamp(2.5rem,5vw,4rem)]"},LR={class:""},FR={class:"ml-2"},UR={class:"p-10 text-center flex justify-center items-center flex-col text-tiny font-semibold"},jR=["onClick"],BR={__name:"PlanComponent",setup(t){const e=el(),n=Be(()=>e.plan),r=ys(),s=Be(()=>r.user),i=[{title:"Basic Plan",price:"$0/month",features:["Up to 10 tasks","1 project","No file uploads","Basic support","Access from 1 device"]},{title:"Pro Plan",price:"$5/month",features:["Unlimited tasks","Up to 10 projects","File uploads","Priority support","Sync across 3 devices"]},{title:"Team Plan",price:"$15/month",features:["Team collaboration","Shared projects","Admin dashboard","File sharing","Unlimited devices"]}];return(o,l)=>{const c=Bn("font-awesome-icon"),u=Bn("Router-link");return Ee(),Ye("div",ph(o.$attrs,{class:"grid mx-5 mt-10 text-white justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] dark:text-on-primary gap-4"}),[(Ee(),Ye(rt,null,Hc(i,f=>D("div",{key:f,class:"dark:bg-on-surface bg-light-secondary"},[D("div",null,[D("div",MR,[D("h1",null,Rt(f.title),1),D("p",null,Rt(f.price),1)]),D("ul",null,[(Ee(!0),Ye(rt,null,Hc(f.features,(p,m)=>(Ee(),Ye("li",{class:"border-b hover:bg-Clickable hover:pl-4 transition dark:border-surface p-5",key:p},[D("p",LR,[de(c,{icon:"angle-right"}),de(c,{icon:"angle-right"}),D("span",FR,Rt(p),1)])]))),128))]),D("div",UR,[l[1]||(l[1]=D("p",{class:"mb-5"},"get the first time offer",-1)),s.value?(Ee(),Ye("button",{key:0,onClick:p=>o.$emit("updatePlan",f.title),class:"text-2xl cursor-pointer bg-Clickable py-4 px-8"},Rt(f.title===n.value?"this your current pay plan":"click me"),9,jR)):(Ee(),ct(u,{key:1,class:"text-2xl cursor-pointer bg-Clickable py-4 px-8",to:"/SignView"},{default:Nt(()=>l[0]||(l[0]=[He("click me")])),_:1}))])])])),64))],16)}}},zR={class:"grow text-center px-6"},$R={class:"md:min-w-3/6 mx-auto"},HR={class:"mt-10"},qR={__name:"ContactUsCom",setup(t){return(e,n)=>{const r=Bn("font-awesome-icon");return Ee(),Ye("form",{onSubmit:n[1]||(n[1]=Jc(()=>{},["prevent"])),action:"",class:"flex md:justify-between flex-wrap justify-center dark:text-on-primary"},[D("div",zR,[n[2]||(n[2]=D("h2",{class:"sectionTittle mb-10 font-bold"},"contact US",-1)),de(r,{icon:"phone",class:"text-[clamp(2.5rem,50vw,10rem)]"}),n[3]||(n[3]=D("div",{class:"mt-20 hidden mb-10 lg:block"},[D("input",{class:"bg-Clickable cursor-pointer text-on-primary w-2xs px-8 py-4",type:"reset",value:"submit"}),D("input",{class:"bg-light-primary cursor-pointer text-on-primary w-2xs px-8 py-4",type:"reset",value:"reset"})],-1))]),D("div",$R,[de(Qr,{label:"your email",inputType:"email",id:"newInput",name:"input",isRequired:!0,lableStyle:"text-3xl",cusclass:"px-5 w-full py-3",helperText:!0,addValidateToText:!0}),de(Qr,{label:"your message tittle",inputType:"email",id:"newInput",name:"input",isRequired:!0,lableStyle:"text-3xl",cusclass:"px-5 w-full py-3",class:"mt-10",helperText:!0,addValidateToText:!0}),D("div",HR,[n[4]||(n[4]=D("label",{class:"font-semibold mb-2 text-3xl",for:"Description"},"your message ",-1)),Dn(D("textarea",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.taskDescription=s),class:"dark:bg-on-surface focus:bg-on-primary border border-on-surface mt-4 font-semibold text-tiny dark:focus:bg-on-primary rounded-3xl h-96 dark:focus:text-on-surface p-5 lg:p-10 w-full",name:"Description",id:"Description"},null,512),[[Xc,e.taskDescription]])]),n[5]||(n[5]=D("div",{class:"mb-20 mt-5 mx-auto w-fit lg:hidden"},[D("input",{class:"bg-Clickable cursor-pointer block text-on-primary w-2xs px-8 py-4",type:"reset",value:"submit"}),D("input",{class:"bg-light-primary cursor-pointer mt-5 lg:mt-0 block text-on-primary w-2xs px-8 py-4",type:"reset",value:"reset"})],-1))])],32)}}},WR={id:"hero",class:"text-4xl h-[calc(100vh-67px)] relative bg-cover bg-no-repeat w-full bg-right bg-[#050b10] md:bg-[url(assets/landing2.png)]"},KR={class:"text-white md:text-left text-center p-1 sm:pl-4 container mx-auto relative top-3/6 md:top-2/5 transform -translate-y-3/6"},GR={class:"mx-auto sm:ml-5"},QR={id:"slider",class:"flex overflow-x-hidden animate- w-[calc(256px*20)]"},YR={class:"container mx-auto"},XR={id:"selectPlan",class:"my-10 py-10"},JR={id:"contactUs",class:"mb-10 mt-20"},ZR={__name:"Home",setup(t){const e=ys();e.checkAuth();const n=mv();return e.user&&n.push("/index"),(r,s)=>(Ee(),Ye(rt,null,[D("section",WR,[D("div",KR,[s[2]||(s[2]=D("h2",{class:"font-bold text-[clamp(1.5rem,5vw,3rem)] mb-10"}," Simple . Powerful . Friendly ",-1)),D("div",GR,[s[1]||(s[1]=D("ul",{class:"mb-10 text-[clamp(1.4rem,5vw,1.8rem)]"},[D("li",null,"Capture tasks at the speed of thought"),D("li",{class:"my-4"},"Stay organized and focused"),D("li",null,"Simplify your planning")],-1)),D("button",{onClick:s[0]||(s[0]=i=>Dt(n).push("/SignView")),class:"bg-primary px-4 text-2xl font-semibold py-2 rounded-2xl cursor-pointer"}," Start Now ")])])]),D("section",QR,[de(DR)]),D("section",YR,[D("section",XR,[s[3]||(s[3]=D("h2",{class:"dark:text-on-primary text-center font-bold text-[clamp(2.5rem,5vw,4rem)]"}," --- select a plan --- ",-1)),de(BR)]),s[4]||(s[4]=D("section",{id:"aboutUs",class:"dark:text-on-primary my-10 py-10"},[D("h2",{class:"text-center font-bold mb-2 text-[clamp(2.5rem,5vw,4rem)]"}," --- about us --- "),D("p",{class:"text-4xl text-center max-w-4xl mx-auto"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati vel quia nulla nobis alias mollitia illo impedit ipsum, hic porro provident dolorum repellat non error culpa nostrum corporis? Facilis, sit. ")],-1)),D("section",JR,[de(qR)])])],64))}},eC=[{name:"Home",path:"/",component:ZR},{name:"SignIn",path:"/SignView",component:OR},{name:"index",path:"/index",meta:{requiresAuth:!0},component:()=>kn(()=>import("./index-CLFfVbwy.js"),[]),children:[{path:"settings",name:"settings",component:()=>kn(()=>import("./SettingsView-Bpy0h4G9.js"),[])},{path:"addTask",name:"addTask",component:()=>kn(()=>import("./AddTaskView-DYa0aLmj.js"),[])},{path:"tasks",name:"tasks",component:()=>kn(()=>import("./TasksView-o0xSc_1R.js"),[])},{name:"faqs",path:"faqs",component:()=>kn(()=>import("./FAQ-CwDIjto8.js"),[])},{name:"contactUs",path:"contactUs",component:()=>kn(()=>import("./ContactUsView-D6OmqxFL.js"),[])},{name:"aboutUs",path:"/aboutUs",component:()=>kn(()=>import("./AboutUs-BbCCvC7P.js"),__vite__mapDeps([0,1]))}]},{name:"faq",path:"/faq",component:()=>kn(()=>import("./FAQ-CwDIjto8.js"),[])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>kn(()=>import("./404-CX12ULPP.js"),__vite__mapDeps([2,1]))}],gv=k3({history:a3("/ToDoApp/"),routes:eC,linkActiveClass:" dark:bg-on-surface bg-light-secondary",scrollBehavior(t){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}});gv.beforeEach(async(t,e,n)=>{const r=ys();await r.checkAuth();const s=!!r.user,i=t.matched.some(l=>l.meta.requiresAuth),o=t.matched.some(l=>l.meta.guestOnly);i&&!s?n("/SignView"):o&&s?n("/index"):n()});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function tC(t,e,n){return(e=rC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jm(Object(n),!0).forEach(function(r){tC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rC(t){var e=nC(t,"string");return typeof e=="symbol"?e:e+""}const Bm=()=>{};let df={},yv={},_v=null,vv={mark:Bm,measure:Bm};try{typeof window<"u"&&(df=window),typeof document<"u"&&(yv=document),typeof MutationObserver<"u"&&(_v=MutationObserver),typeof performance<"u"&&(vv=performance)}catch{}const{userAgent:zm=""}=df.navigator||{},Nr=df,Fe=yv,$m=_v,ia=vv;Nr.document;const Xn=!!Fe.documentElement&&!!Fe.head&&typeof Fe.addEventListener=="function"&&typeof Fe.createElement=="function",Ev=~zm.indexOf("MSIE")||~zm.indexOf("Trident/");var sC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,iC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,wv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},oC={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Tv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],It="classic",Bl="duotone",aC="sharp",lC="sharp-duotone",bv=[It,Bl,aC,lC],cC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},uC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},hC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),fC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},dC=["fak","fa-kit","fakd","fa-kit-duotone"],Hm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pC=["kit"],mC={kit:{"fa-kit":"fak"}},gC=["fak","fakd"],yC={kit:{fak:"fa-kit"}},qm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_C=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vC=["fak","fa-kit","fakd","fa-kit-duotone"],EC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},TC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ou={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},bC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Nu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._C,...bC],IC=["solid","regular","light","thin","duotone","brands"],Iv=[1,2,3,4,5,6,7,8,9,10],AC=Iv.concat([11,12,13,14,15,16,17,18,19,20]),SC=[...Object.keys(TC),...IC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oa.GROUP,oa.SWAP_OPACITY,oa.PRIMARY,oa.SECONDARY].concat(Iv.map(t=>"".concat(t,"x"))).concat(AC.map(t=>"w-".concat(t))),PC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Wn="___FONT_AWESOME___",Vu=16,Av="fa",Sv="svg-inline--fa",hs="data-fa-i2svg",Du="data-fa-pseudo-element",RC="data-fa-pseudo-element-pending",pf="data-prefix",mf="data-icon",Wm="fontawesome-i2svg",CC="async",xC=["HTML","HEAD","STYLE","SCRIPT"],Pv=(()=>{try{return!0}catch{return!1}})();function ko(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[It]}})}const Rv=q({},wv);Rv[It]=q(q(q(q({},{"fa-duotone":"duotone"}),wv[It]),Hm.kit),Hm["kit-duotone"]);const kC=ko(Rv),Mu=q({},fC);Mu[It]=q(q(q(q({},{duotone:"fad"}),Mu[It]),qm.kit),qm["kit-duotone"]);const Km=ko(Mu),Lu=q({},Ou);Lu[It]=q(q({},Lu[It]),yC.kit);const gf=ko(Lu),Fu=q({},wC);Fu[It]=q(q({},Fu[It]),mC.kit);ko(Fu);const OC=sC,Cv="fa-layers-text",NC=iC,VC=q({},cC);ko(VC);const DC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vc=oC,MC=[...pC,...SC],Qi=Nr.FontAwesomeConfig||{};function LC(t){var e=Fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function FC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Fe&&typeof Fe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=FC(LC(n));s!=null&&(Qi[r]=s)});const xv={styleDefault:"solid",familyDefault:It,cssPrefix:Av,replacementClass:Sv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qi.familyPrefix&&(Qi.cssPrefix=Qi.familyPrefix);const ei=q(q({},xv),Qi);ei.autoReplaceSvg||(ei.observeMutations=!1);const ne={};Object.keys(xv).forEach(t=>{Object.defineProperty(ne,t,{enumerable:!0,set:function(e){ei[t]=e,Yi.forEach(n=>n(ne))},get:function(){return ei[t]}})});Object.defineProperty(ne,"familyPrefix",{enumerable:!0,set:function(t){ei.cssPrefix=t,Yi.forEach(e=>e(ne))},get:function(){return ei.cssPrefix}});Nr.FontAwesomeConfig=ne;const Yi=[];function UC(t){return Yi.push(t),()=>{Yi.splice(Yi.indexOf(t),1)}}const ir=Vu,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jC(t){if(!t||!Xn)return;const e=Fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Fe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Fe.head.insertBefore(e,r),t}const BC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function po(){let t=12,e="";for(;t-- >0;)e+=BC[Math.random()*62|0];return e}function ai(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yf(t){return t.classList?ai(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function kv(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zC(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(kv(t[n]),'" '),"").trim()}function zl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function _f(t){return t.size!==gn.size||t.x!==gn.x||t.y!==gn.y||t.rotate!==gn.rotate||t.flipX||t.flipY}function $C(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function HC(t){let{transform:e,width:n=Vu,height:r=Vu,startCentered:s=!1}=t,i="";return s&&Ev?i+="translate(".concat(e.x/ir-n/2,"em, ").concat(e.y/ir-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):i+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),i+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var qC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ov(){const t=Av,e=Sv,n=ne.cssPrefix,r=ne.replacementClass;let s=qC;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let Gm=!1;function Dc(){ne.autoAddCss&&!Gm&&(jC(Ov()),Gm=!0)}var WC={mixout(){return{dom:{css:Ov,insertCss:Dc}}},hooks(){return{beforeDOMElementCreation(){Dc()},beforeI2svg(){Dc()}}}};const Kn=Nr||{};Kn[Wn]||(Kn[Wn]={});Kn[Wn].styles||(Kn[Wn].styles={});Kn[Wn].hooks||(Kn[Wn].hooks={});Kn[Wn].shims||(Kn[Wn].shims=[]);var yn=Kn[Wn];const Nv=[],Vv=function(){Fe.removeEventListener("DOMContentLoaded",Vv),tl=1,Nv.map(t=>t())};let tl=!1;Xn&&(tl=(Fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fe.readyState),tl||Fe.addEventListener("DOMContentLoaded",Vv));function KC(t){Xn&&(tl?setTimeout(t,0):Nv.push(t))}function Oo(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?kv(t):"<".concat(e," ").concat(zC(n),">").concat(r.map(Oo).join(""),"</").concat(e,">")}function Qm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Mc=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=l(f,e[u],u,e);return f};function GC(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Uu(t){const e=GC(t);return e.length===1?e[0].toString(16):null}function QC(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Ym(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function ju(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Ym(e);typeof yn.hooks.addPack=="function"&&!r?yn.hooks.addPack(t,Ym(e)):yn.styles[t]=q(q({},yn.styles[t]||{}),s),t==="fas"&&ju("fa",e)}const{styles:mo,shims:YC}=yn,Dv=Object.keys(gf),XC=Dv.reduce((t,e)=>(t[e]=Object.keys(gf[e]),t),{});let vf=null,Mv={},Lv={},Fv={},Uv={},jv={};function JC(t){return~MC.indexOf(t)}function ZC(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!JC(s)?s:null}const Bv=()=>{const t=r=>Mc(mo,(s,i,o)=>(s[o]=Mc(i,r,{}),s),{});Mv=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),Lv=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),jv=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in mo||ne.autoFetchSvg,n=Mc(YC,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Fv=n.names,Uv=n.unicodes,vf=$l(ne.styleDefault,{family:ne.familyDefault})};UC(t=>{vf=$l(t.styleDefault,{family:ne.familyDefault})});Bv();function Ef(t,e){return(Mv[t]||{})[e]}function e6(t,e){return(Lv[t]||{})[e]}function Jr(t,e){return(jv[t]||{})[e]}function zv(t){return Fv[t]||{prefix:null,iconName:null}}function t6(t){const e=Uv[t],n=Ef("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vr(){return vf}const $v=()=>({prefix:null,iconName:null,rest:[]});function n6(t){let e=It;const n=Dv.reduce((r,s)=>(r[s]="".concat(ne.cssPrefix,"-").concat(s),r),{});return bv.forEach(r=>{(t.includes(n[r])||t.some(s=>XC[r].includes(s)))&&(e=r)}),e}function $l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=It}=e,r=kC[n][t];if(n===Bl&&!t)return"fad";const s=Km[n][t]||Km[n][r],i=t in yn.styles?t:null;return s||i||null}function r6(t){let e=[],n=null;return t.forEach(r=>{const s=ZC(ne.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Xm(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Hl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Nu.concat(vC),i=Xm(t.filter(p=>s.includes(p))),o=Xm(t.filter(p=>!Nu.includes(p))),l=i.filter(p=>(r=p,!Tv.includes(p))),[c=null]=l,u=n6(i),f=q(q({},r6(o)),{},{prefix:$l(c,{family:u})});return q(q(q({},f),a6({values:t,family:u,styles:mo,config:ne,canonical:f,givenPrefix:r})),s6(n,r,f))}function s6(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?zv(s):{},o=Jr(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!mo.far&&mo.fas&&!ne.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const i6=bv.filter(t=>t!==It||t!==Bl),o6=Object.keys(Ou).filter(t=>t!==It).map(t=>Object.keys(Ou[t])).flat();function a6(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,l=n===Bl,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(c||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&i6.includes(n)&&(Object.keys(i).find(m=>o6.includes(m))||o.autoFetchSvg)){const m=hC.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=Jr(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Vr()||"fas"),r}class l6{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=q(q({},this.definitions[i]||{}),s[i]),ju(i,s[i]);const o=gf[It][i];o&&ju(o,s[i]),Bv()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=l)}),e[i][o]=l}),e}}let Jm=[],ks={};const js={},c6=Object.keys(js);function u6(t,e){let{mixoutsTo:n}=e;return Jm=t,ks={},Object.keys(js).forEach(r=>{c6.indexOf(r)===-1&&delete js[r]}),Jm.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ks[o]||(ks[o]=[]),ks[o].push(i[o])})}r.provides&&r.provides(js)}),n}function Bu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ks[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function fs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ks[t]||[]).forEach(i=>{i.apply(null,n)})}function Dr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return js[t]?js[t].apply(null,e):void 0}function zu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Vr();if(e)return e=Jr(n,e)||e,Qm(Hv.definitions,n,e)||Qm(yn.styles,n,e)}const Hv=new l6,h6=()=>{ne.autoReplaceSvg=!1,ne.observeMutations=!1,fs("noAuto")},f6={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xn?(fs("beforeI2svg",t),Dr("pseudoElements2svg",t),Dr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ne.autoReplaceSvg===!1&&(ne.autoReplaceSvg=!0),ne.observeMutations=!0,KC(()=>{p6({autoReplaceSvgRoot:e}),fs("watch",t)})}},d6={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Jr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=$l(t[0]);return{prefix:n,iconName:Jr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ne.cssPrefix,"-"))>-1||t.match(OC))){const e=Hl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Vr(),iconName:Jr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Vr();return{prefix:e,iconName:Jr(e,t)||t}}}},Wt={noAuto:h6,config:ne,dom:f6,parse:d6,library:Hv,findIconDefinition:zu,toHtml:Oo},p6=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Fe}=t;(Object.keys(yn.styles).length>0||ne.autoFetchSvg)&&Xn&&ne.autoReplaceSvg&&Wt.dom.i2svg({node:e})};function ql(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Oo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Xn)return;const n=Fe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function m6(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(_f(o)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=zl(q(q({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function g6(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ne.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},s),{},{id:o}),children:r}]}]}function wf(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:u,extra:f,watchable:p=!1}=t,{width:m,height:y}=n.found?n:e,P=gC.includes(r),b=[ne.replacementClass,s?"".concat(ne.cssPrefix,"-").concat(s):""].filter(ee=>f.classes.indexOf(ee)===-1).filter(ee=>ee!==""||!!ee).concat(f.classes).join(" ");let O={children:[],attributes:q(q({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const x=P&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};p&&(O.attributes[hs]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||po())},children:[l]}),delete O.attributes.title);const N=q(q({},O),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:q(q({},x),f.styles)}),{children:F,attributes:z}=n.found&&e.found?Dr("generateAbstractMask",N)||{children:[],attributes:{}}:Dr("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=F,N.attributes=z,o?g6(N):m6(N)}function Zm(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,c=q(q(q({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[hs]="");const u=q({},o.styles);_f(s)&&(u.transform=HC({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=zl(u);f.length>0&&(c.style=f);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function y6(t){const{content:e,title:n,extra:r}=t,s=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=zl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Lc}=yn;function $u(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ne.cssPrefix,"-").concat(Vc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ne.cssPrefix,"-").concat(Vc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ne.cssPrefix,"-").concat(Vc.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const _6={found:!1,width:512,height:512};function v6(t,e){!Pv&&!ne.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Hu(t,e){let n=e;return e==="fa"&&ne.styleDefault!==null&&(e=Vr()),new Promise((r,s)=>{if(n==="fa"){const i=zv(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Lc[e]&&Lc[e][t]){const i=Lc[e][t];return r($u(i))}v6(t,e),r(q(q({},_6),{},{icon:ne.showMissingIcons&&t?Dr("missingIconAbstract")||{}:{}}))})}const eg=()=>{},qu=ne.measurePerformance&&ia&&ia.mark&&ia.measure?ia:{mark:eg,measure:eg},Vi='FA "6.7.2"',E6=t=>(qu.mark("".concat(Vi," ").concat(t," begins")),()=>qv(t)),qv=t=>{qu.mark("".concat(Vi," ").concat(t," ends")),qu.measure("".concat(Vi," ").concat(t),"".concat(Vi," ").concat(t," begins"),"".concat(Vi," ").concat(t," ends"))};var Tf={begin:E6,end:qv};const Ta=()=>{};function tg(t){return typeof(t.getAttribute?t.getAttribute(hs):null)=="string"}function w6(t){const e=t.getAttribute?t.getAttribute(pf):null,n=t.getAttribute?t.getAttribute(mf):null;return e&&n}function T6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ne.replacementClass)}function b6(){return ne.autoReplaceSvg===!0?ba.replace:ba[ne.autoReplaceSvg]||ba.replace}function I6(t){return Fe.createElementNS("http://www.w3.org/2000/svg",t)}function A6(t){return Fe.createElement(t)}function Wv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?I6:A6}=e;if(typeof t=="string")return Fe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Wv(i,{ceFn:n}))}),r}function S6(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ba={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Wv(n),e)}),e.getAttribute(hs)===null&&ne.keepOriginalSource){let n=Fe.createComment(S6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~yf(e).indexOf(ne.replacementClass))return ba.replace(t);const r=new RegExp("".concat(ne.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===ne.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Oo(i)).join(`
`);e.setAttribute(hs,""),e.innerHTML=s}};function ng(t){t()}function Kv(t,e){const n=typeof e=="function"?e:Ta;if(t.length===0)n();else{let r=ng;ne.mutateApproach===CC&&(r=Nr.requestAnimationFrame||ng),r(()=>{const s=b6(),i=Tf.begin("mutate");t.map(s),i(),n()})}}let bf=!1;function Gv(){bf=!0}function Wu(){bf=!1}let nl=null;function rg(t){if(!$m||!ne.observeMutations)return;const{treeCallback:e=Ta,nodeCallback:n=Ta,pseudoElementsCallback:r=Ta,observeMutationsRoot:s=Fe}=t;nl=new $m(i=>{if(bf)return;const o=Vr();ai(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!tg(l.addedNodes[0])&&(ne.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&ne.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&tg(l.target)&&~DC.indexOf(l.attributeName))if(l.attributeName==="class"&&w6(l.target)){const{prefix:c,iconName:u}=Hl(yf(l.target));l.target.setAttribute(pf,c||o),u&&l.target.setAttribute(mf,u)}else T6(l.target)&&n(l.target)})}),Xn&&nl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function P6(){nl&&nl.disconnect()}function R6(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function C6(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Hl(yf(t));return s.prefix||(s.prefix=Vr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=e6(s.prefix,t.innerText)||Ef(s.prefix,Uu(t.innerText))),!s.iconName&&ne.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function x6(t){const e=ai(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ne.autoA11y&&(n?e["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(r||po()):(e["aria-hidden"]="true",e.focusable="false")),e}function k6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=C6(t),i=x6(t),o=Bu("parseNodeAttributes",{},t);let l=e.styleParser?R6(t):[];return q({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}const{styles:O6}=yn;function Qv(t){const e=ne.autoReplaceSvg==="nest"?sg(t,{styleParser:!1}):sg(t);return~e.extra.classes.indexOf(Cv)?Dr("generateLayersText",t,e):Dr("generateSvgReplacementMutation",t,e)}function N6(){return[...dC,...Nu]}function ig(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xn)return Promise.resolve();const n=Fe.documentElement.classList,r=f=>n.add("".concat(Wm,"-").concat(f)),s=f=>n.remove("".concat(Wm,"-").concat(f)),i=ne.autoFetchSvg?N6():Tv.concat(Object.keys(O6));i.includes("fa")||i.push("fa");const o=[".".concat(Cv,":not([").concat(hs,"])")].concat(i.map(f=>".".concat(f,":not([").concat(hs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=ai(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const c=Tf.begin("onTree"),u=l.reduce((f,p)=>{try{const m=Qv(p);m&&f.push(m)}catch(m){Pv||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(m=>{Kv(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(m=>{c(),p(m)})})}function V6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qv(t).then(n=>{n&&Kv([n],e)})}function D6(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:zu(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:zu(s||{})),t(r,q(q({},n),{},{mask:s}))}}const M6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:y}=t;return ql(q({type:"icon"},t),()=>(fs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ne.autoA11y&&(o?u["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(l||po()):(u["aria-hidden"]="true",u.focusable="false")),wf({icons:{main:$u(y),mask:s?$u(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:q(q({},gn),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:f,classes:c}})))};var L6={mixout(){return{icon:D6(M6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ig,t.nodeCallback=V6,t}}},provides(t){t.i2svg=function(e){const{node:n=Fe,callback:r=()=>{}}=e;return ig(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:u,maskId:f,extra:p}=n;return new Promise((m,y)=>{Promise.all([Hu(r,o),u.iconName?Hu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[b,O]=P;m([e,wf({icons:{main:b,mask:O},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:i,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=zl(o);l.length>0&&(r.style=l);let c;return _f(i)&&(c=Dr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},F6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ql({type:"layer"},()=>{fs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ne.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},U6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return ql({type:"counter",content:t},()=>(fs("beforeDOMElementCreation",{content:t,params:e}),y6({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ne.cssPrefix,"-layers-counter"),...r]}})))}}}},j6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return ql({type:"text",content:t},()=>(fs("beforeDOMElementCreation",{content:t,params:e}),Zm({content:t,transform:q(q({},gn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ne.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(Ev){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return ne.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Zm({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const B6=new RegExp('"',"ug"),og=[1105920,1112319],ag=q(q(q(q({},{FontAwesome:{normal:"fas",400:"fas"}}),uC),PC),EC),Ku=Object.keys(ag).reduce((t,e)=>(t[e.toLowerCase()]=ag[e],t),{}),z6=Object.keys(Ku).reduce((t,e)=>{const n=Ku[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function $6(t){const e=t.replace(B6,""),n=QC(e,0),r=n>=og[0]&&n<=og[1],s=e.length===2?e[0]===e[1]:!1;return{value:Uu(s?e[0]:e),isSecondary:r||s}}function H6(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Ku[n]||{})[s]||z6[n]}function lg(t,e){const n="".concat(RC).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=ai(t.children).filter(m=>m.getAttribute(Du)===e)[0],l=Nr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(NC),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let y=H6(c,f);const{value:P,isSecondary:b}=$6(m),O=u[0].startsWith("FontAwesome");let x=Ef(y,P),N=x;if(O){const F=t6(P);F.iconName&&F.prefix&&(x=F.iconName,y=F.prefix)}if(x&&!b&&(!o||o.getAttribute(pf)!==y||o.getAttribute(mf)!==N)){t.setAttribute(n,N),o&&t.removeChild(o);const F=k6(),{extra:z}=F;z.attributes[Du]=e,Hu(x,y).then(ee=>{const pe=wf(q(q({},F),{},{icons:{main:ee,mask:$v()},prefix:y,iconName:N,extra:z,watchable:!0})),I=Fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=pe.map(_=>Oo(_)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function q6(t){return Promise.all([lg(t,"::before"),lg(t,"::after")])}function W6(t){return t.parentNode!==document.head&&!~xC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Du)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function cg(t){if(Xn)return new Promise((e,n)=>{const r=ai(t.querySelectorAll("*")).filter(W6).map(q6),s=Tf.begin("searchPseudoElements");Gv(),Promise.all(r).then(()=>{s(),Wu(),e()}).catch(()=>{s(),Wu(),n()})})}var K6={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=cg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Fe}=e;ne.searchPseudoElements&&cg(n)}}};let ug=!1;var G6={mixout(){return{dom:{unwatch(){Gv(),ug=!0}}}},hooks(){return{bootstrap(){rg(Bu("mutationObserverCallbacks",{}))},noAuto(){P6()},watch(t){const{observeMutationsRoot:e}=t;ug?Wu():rg(Bu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const hg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Q6={mixout(){return{parse:{transform:t=>hg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=hg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:q({},m.outer),children:[{tag:"g",attributes:q({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:q(q({},n.icon.attributes),m.path)}]}]}}}};const Fc={x:0,y:0,width:"100%",height:"100%"};function fg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Y6(t){return t.tag==="g"?t.children:[t]}var X6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Hl(n.split(" ").map(s=>s.trim())):$v();return r.prefix||(r.prefix=Vr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:f,icon:p}=i,m=$C({transform:l,containerWidth:f,iconWidth:c}),y={tag:"rect",attributes:q(q({},Fc),{},{fill:"white"})},P=u.children?{children:u.children.map(fg)}:{},b={tag:"g",attributes:q({},m.inner),children:[fg(q({tag:u.tag,attributes:q(q({},u.attributes),m.path)},P))]},O={tag:"g",attributes:q({},m.outer),children:[b]},x="mask-".concat(o||po()),N="clip-".concat(o||po()),F={tag:"mask",attributes:q(q({},Fc),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,O]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Y6(p)},F]};return n.push(z,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(x,")")},Fc)}),{children:n,attributes:r}}}},J6={provides(t){let e=!1;Nr.matchMedia&&(e=Nr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:q(q({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=q(q({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:q(q({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:q(q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:q(q({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:q(q({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:q(q({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Z6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ex=[WC,L6,F6,U6,j6,K6,G6,Q6,X6,J6,Z6];u6(ex,{mixoutsTo:Wt});Wt.noAuto;Wt.config;const tx=Wt.library;Wt.dom;const Gu=Wt.parse;Wt.findIconDefinition;Wt.toHtml;const nx=Wt.icon;Wt.layer;Wt.text;Wt.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const rx={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},sx={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},ix={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},ox={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},ax={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},lx={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]},cx={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},ux={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},hx={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},fx={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},dx={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},px={prefix:"fas",iconName:"hourglass-start",icon:[384,512,["hourglass-1"],"f251","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM288 437l0 11L96 448l0-11c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"]},mx={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"]},gx={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},yx={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},_x={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},vx={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Ex={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},wx={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Tx={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},bx={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Ix={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ax={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},Sx={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Px={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Rx={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"]},Cx={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},xx={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},kx={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Ox={prefix:"fas",iconName:"exclamation",icon:[128,512,[10069,10071,61738],"21","M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Nx={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Vx={prefix:"fab",iconName:"reddit-alien",icon:[512,512,[],"f281","M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"]},Dx={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Mx={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},Lx={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Fx={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ux={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},jx={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};function dg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Ln(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dg(Object(n),!0).forEach(function(r){Ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zx(t){var e=Bx(t,"string");return typeof e=="symbol"?e:e+""}function rl(t){"@babel/helpers - typeof";return rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rl(t)}function Ot(t,e,n){return e=zx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $x(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Hx(t,e){if(t==null)return{};var n=$x(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var qx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yv={exports:{}};(function(t){(function(e){var n=function(x,N,F){if(!u(N)||p(N)||m(N)||y(N)||c(N))return N;var z,ee=0,pe=0;if(f(N))for(z=[],pe=N.length;ee<pe;ee++)z.push(n(x,N[ee],F));else{z={};for(var I in N)Object.prototype.hasOwnProperty.call(N,I)&&(z[x(I,F)]=n(x,N[I],F))}return z},r=function(x,N){N=N||{};var F=N.separator||"_",z=N.split||/(?=[A-Z])/;return x.split(z).join(F)},s=function(x){return P(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(N,F){return F?F.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var N=s(x);return N.substr(0,1).toUpperCase()+N.substr(1)},o=function(x,N){return r(x,N).toLowerCase()},l=Object.prototype.toString,c=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},f=function(x){return l.call(x)=="[object Array]"},p=function(x){return l.call(x)=="[object Date]"},m=function(x){return l.call(x)=="[object RegExp]"},y=function(x){return l.call(x)=="[object Boolean]"},P=function(x){return x=x-0,x===x},b=function(x,N){var F=N&&"process"in N?N.process:N;return typeof F!="function"?x:function(z,ee){return F(z,x,ee)}},O={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,N){return n(b(s,N),x)},decamelizeKeys:function(x,N){return n(b(o,N),x,N)},pascalizeKeys:function(x,N){return n(b(i,N),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(qx)})(Yv);var Wx=Yv.exports,Kx=["class","style"];function Gx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=Wx.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function Qx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Xv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Xv(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=Qx(f);break;case"style":c.style=Gx(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=Hx(n,Kx);return mh(t.tag,Ln(Ln(Ln({},e),{},{class:s.class,style:Ln(Ln({},s.style),o)},s.attrs),l),r)}var Jv=!1;try{Jv=!0}catch{}function Yx(){if(!Jv&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Uc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function Xx(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ot(Ot(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function pg(t){if(t&&rl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gu.icon)return Gu.icon(t);if(t===null)return null;if(rl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Jx=uh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Be(function(){return pg(e.icon)}),i=Be(function(){return Uc("classes",Xx(e))}),o=Be(function(){return Uc("transform",typeof e.transform=="string"?Gu.transform(e.transform):e.transform)}),l=Be(function(){return Uc("mask",pg(e.mask))}),c=Be(function(){return nx(s.value,Ln(Ln(Ln(Ln({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});_r(c,function(f){if(!f)return Yx("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=Be(function(){return c.value?Xv(c.value.abstract[0],{},r):null});return function(){return u.value}}});const Zv=ew(eR),Zx=rw();Zv.use(Zx);tx.add(vx,Px,wx,dx,px,Ax,Rx,rx,Ox,cx,fx,Ix,kx,hx,ax,Tx,mx,sx,Sx,lx,xx,Ex,_x,ix,gx,ox,ux,Cx,bx,yx,Fx,Ux,Mx,Lx,Dx,Nx,jx,Vx);Zv.use(gv).use(nv).component("font-awesome-icon",Jx).mount("#app");export{Lt as A,ns as B,Xc as C,Zu as D,XE as E,rt as F,T2 as G,A2 as H,x3 as R,BR as _,D as a,Be as b,Ye as c,xP as d,ys as e,yr as f,Dn as g,nn as h,de as i,ct as j,Bn as k,Nt as l,ph as m,Dt as n,Ee as o,N3 as p,He as q,N2 as r,mv as s,Rt as t,el as u,Yr as v,_r as w,Hc as x,Jc as y,Qr as z};
