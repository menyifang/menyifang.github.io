(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function r(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Z=b.prototype}
function sa(){this.C=!1;this.o=null;this.j=void 0;this.i=1;this.m=this.s=0;this.v=this.l=null}
function ta(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
sa.prototype.N=function(a){this.j=a};
function ua(a,b){a.l={Rb:b,Xb:!0};a.i=a.s||a.m}
sa.prototype.return=function(a){this.l={return:a};this.i=this.m};
function v(a,b,c){a.i=c;return{value:b}}
sa.prototype.u=function(a){this.i=a};
function va(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function wa(a,b){a.i=b;a.s=0}
function xa(a){a.s=0;var b=a.l.Rb;a.l=null;return b}
function Aa(a){a.v=[a.l];a.s=0;a.m=0}
function Ba(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Xb?a.i=a.s||a.m:void 0!=b.u&&a.m<b.u?(a.i=b.u,a.l=null):a.i=a.m:a.i=0}
function Ca(a){this.i=new sa;this.j=a}
function Da(a,b){ta(a.i);var c=a.i.o;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.o=null,ua(a.i,g),Ga(a)}a.i.o=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ua(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Xb)throw b.Rb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ta(a.i);a.i.o?b=Ea(a,a.i.o.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){ta(a.i);a.i.o?b=Ea(a,a.i.o["throw"],b,a.i.N):(ua(a.i,b),b=Ga(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Ca(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return ma});
n("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.m()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.m=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.o(m)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.m)}};
b.prototype.K=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.G(g):this.s(g)}};
b.prototype.G=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.m=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.B()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.B=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.o();g.Ua(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(A){try{m(x(A))}catch(D){q(D)}}:u}
var m,q,t=new b(function(x,u){m=x;q=u});
this.Ua(k(g,m),k(h,q));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ua=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ua(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function t(A){return function(D){x[A]=D;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ua(t(x.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;da(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var t=q[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:q,index:h,entry:t}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.setPrototypeOf",function(a){return a||ra});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.tb=void 0;a.getInstance=function(){return a.tb?a.tb:a.tb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ua)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}xb=a}else xb=a}return xb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.l=b===Nb?a:""}
Mb.prototype.toString=function(){return this.l.toString()};
Mb.prototype.j=!0;Mb.prototype.i=function(){return this.l.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.l;Oa(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={},Qb=new Mb("about:invalid#zClosurez",Nb);function Rb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Rb().indexOf(a)}
;function Sb(){return C("Trident")||C("MSIE")}
function Tb(){return C("Firefox")||C("FxiOS")}
function Ub(){return C("Safari")&&!(Vb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Tb()||C("Silk")||C("Android"))}
function Vb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Vb()||Tb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Rb();if("Internet Explorer"===a){if(Sb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Vb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Tb()||"Safari"===a&&Ub()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function cc(a){this.l=bc===bc?a:"";this.j=!0}
cc.prototype.i=function(){return this.l.toString()};
cc.prototype.toString=function(){return this.l.toString()};function dc(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.j?b.i():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function ec(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=fc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function gc(){return fc("script[nonce]")}
var hc=/^[\w+/_-]+[=]{0,2}$/;function fc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&hc.test(a)?a:"":""}
;function ic(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function lc(a,b){return b.match(jc)[a]||null}
function mc(a){return kc(lc(3,a))}
function nc(a){var b=a.match(jc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function oc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function pc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)pc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function qc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)pc(a[b],a[b+1],c);return c.join("&")}
function rc(a){var b=[],c;for(c in a)pc(c,a[c],b);return b.join("&")}
function sc(a,b){var c=2==arguments.length?qc(arguments[1],0):qc(arguments,1);return oc(a,c)}
function wc(a,b){b=rc(b);return oc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return oc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Ac=/[?&]($|#)/;function Bc(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ac,"$1")}
;var Cc={};function Dc(a){if(a!==Cc)throw Error("requires a valid immutable API token");}
;function Ec(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Fc(){var a=Rb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Ec()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Rb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};
function Hc(a){var b=Ic;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Jc=C("Opera"),Kc=Sb(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Rb();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Ic={};
function Vc(){return Hc(function(){for(var a=0,b=Kb(String(Uc)).split("."),c=Kb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Lb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Lb(0==f[2].length,0==g[2].length)||Lb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Wc;if(y.document&&Kc){var Xc=Pc();Wc=Xc?Xc:parseInt(Uc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||C("iPod"),$c=C("iPad");Yb();Vb();var ad=Ub()&&!(Ec()||C("iPad")||C("iPod"));var bd={},cd=null;
function dd(a,b){Pa(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array,fd={};var gd;function hd(a){if(fd!==fd)throw Error("illegal external caller");this.ka=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
hd.prototype.isEmpty=function(){return null==this.ka};var id="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function jd(a,b){Object.isFrozen(a)||(id?a[id]|=b:void 0!==a.va?a.va|=b:Object.defineProperties(a,{va:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function kd(a){var b;id?b=a[id]:b=a.va;return null==b?0:b}
function ld(a){return Array.isArray(a)?!!(kd(a)&1):!1}
function md(a){jd(a,1);return a}
function nd(a){return Array.isArray(a)?!!(kd(a)&2):!1}
function rd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");jd(a,2)}
function sd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?jd(a,8):Object.isFrozen(a)||(id?a[id]&=-9:void 0!==a.va&&(a.va&=-9))}
;function td(a){return nd(a.J)}
function ud(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var vd,wd=Object.freeze(md([]));function xd(a){if(td(a))throw Error("Cannot mutate an immutable Message");}
var yd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function zd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Ad(a){y.setTimeout(function(){throw a;},0)}
;function Bd(a){return a.displayName||a.name||"unknown type name"}
function Cd(a,b){a instanceof b||Ad(Error("Expected instanceof "+Bd(b)+" but got "+(a&&Bd(a.constructor))));return a}
function Dd(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Ed(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(ed&&null!=a&&a instanceof Uint8Array)return dd(a);if(a instanceof hd){var b=a.ka;null!=b&&"string"!==typeof b&&(ed&&b instanceof Uint8Array?b=dd(b):(Oa(b),b=null));return null==b?"":a.ka=b}}}return a}
;function Fd(a,b){b=void 0===b?Gd:b;return Hd(a,b)}
function Id(a,b){if(null!=a){if(Array.isArray(a))a=Hd(a,b);else if(ud(a)){var c={},d;for(d in a)c[d]=Id(a[d],b);a=c}else a=b(a);return a}}
function Hd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Id(c[d],b);ld(a)&&md(c);return c}
function Jd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Ed(a);return Array.isArray(a)?Fd(a,Jd):a}
function Gd(a){return ed&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Kd(a){return a.j||(a.j=a.J[a.l+a.sa]={})}
function Ld(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.J[b+a.sa]}
function E(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||xd(a);b<a.l&&!d?a.J[b+a.sa]=c:Kd(a)[b]=c;return a}
function Md(a,b,c,d){c=void 0===c?!0:c;var e=Ld(a,b,d);Array.isArray(e)||(e=wd);if(td(a))c&&(rd(e),Object.freeze(e));else if(e===wd||nd(e))e=md(e.slice()),E(a,b,e,d);return e}
function Nd(a,b,c){a=Ld(a,b);return null==a?c:a}
function Od(a,b,c){null==c?c=wd:md(c);return E(a,b,c)}
function Pd(a,b,c,d){xd(a);(c=Qd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),E(a,c));return E(a,b,d)}
function Qd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Ld(a,e)&&(0!==c&&E(a,c,void 0,!1,!0),c=e)}return c}
function Rd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=Ld(a,c,f);b=Dd(h,b,d);void 0==b?d=g:(d&&b.J!==h&&E(a,c,b.J,f,!0),a.i[c]=b,td(a)&&rd(b.J),d=b)}}if(null==d)return d;td(d)&&!td(a)&&(d=d.Bb(Cc),E(a,c,d.J,e),a.i[c]=d);return d}
function Sd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=td(a),g=a.i[c];d=Md(a,c,!0,d);var h=f||nd(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var m=d[k];f=f||nd(m);m=Dd(m,b);void 0!==m&&(g.push(m),h&&rd(m.J))}a.i[c]=g;sd(d,!f)}b=h||e;e=nd(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),rd(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function Td(a,b,c,d){d=void 0===d?!1:d;var e=td(a);b=Sd(a,b,c,d,e);a=Md(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("cannot check mutability state of non-array");c=!(kd(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&td(d)&&!e&&(b[c]=b[c].Bb(Cc),a[c]=b[c].J);sd(a,!0)}return b}
function G(a,b,c,d){xd(a);a.i||(a.i={});b=null!=d?Cd(d,b).J:d;a.i[c]=d;return E(a,c,b)}
function Ud(a,b,c,d,e){xd(a);a.i||(a.i={});b=null!=e?Cd(e,b).J:e;a.i[c]=e;Pd(a,c,d,b)}
function Vd(a,b,c,d){xd(a);if(null!=d){var e=md([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Cd(d[g],b).J,f=f||nd(e[g]);a.i||(a.i={});a.i[c]=d;sd(e,!f)}else a.i&&(a.i[c]=void 0),e=wd;return E(a,c,e)}
function Wd(a,b,c,d){xd(a);var e=Sd(a,c,b,void 0,!1);c=null!=d?Cd(d,c):new c;a=Md(a,b);e.push(c);a.push(c.J);Dc(Cc);td(c)&&sd(a,!1)}
;function Xd(a,b,c){a||(a=Yd);Yd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.sa=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.J=a;a:{d=this.J.length;a=d-1;if(d&&(d=this.J[a],ud(d))){this.l=a-this.sa;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.sa),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.sa,(d=this.J[a])?Array.isArray(d)&&md(d):this.J[a]=wd;else{d=Kd(this);var e=d[a];e?Array.isArray(e)&&md(e):d[a]=wd}}
Xd.prototype.toJSON=function(){var a=this.J;return vd?a:Fd(a,Jd)};
function Zd(a){vd=!0;try{return JSON.stringify(a.toJSON(),$d)}finally{vd=!1}}
Xd.prototype.clone=function(){var a=Fd(this.J);Yd=a;a=new this.constructor(a);Yd=null;ae(a,this);return a};
Xd.prototype.isMutable=function(a){Dc(a);return!td(this)};
Xd.prototype.toString=function(){return this.J.toString()};
function $d(a,b){return Ed(b)}
function ae(a,b){b.Ia&&(a.Ia=b.Ia.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Td(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ae(f[g],e[g])}else(f=Rd(a,e.constructor,g,void 0,f))&&ae(f,e)}}}}
var Yd;function be(){Xd.apply(this,arguments)}
r(be,Xd);be.prototype.Bb=function(){return this};
if(yd){var ce={};Object.defineProperties(be,(ce[Symbol.hasInstance]=zd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ce))};function de(a){var b=this.i,c=this.j;return this.isRepeated?Td(a,b,c,!0):Rd(a,b,c,void 0,!0)}
;function ee(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.kb?md(a.slice()):a,Vd(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(ed&&d instanceof Uint8Array?e=d.length?new hd(new Uint8Array(d)):gd||(gd=new hd(null)):(Array.isArray(d)&&(e?rd(d):ld(d)&&f.kb&&(d=d.slice())),e=d),E(b,c,e))}
;function I(){be.apply(this,arguments)}
r(I,be);I.prototype.Bb=function(a){Dc(a);if(td(this)){a={kb:!0};var b=td(this);if(b&&!a.kb)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.Ia&&(c.Ia=this.Ia.slice());for(var d=this.J,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&ud(f))for(h in f){var g=+h;Number.isNaN(g)?Kd(c)[h]=f[h]:ee(this,c,g,f[h],b,a)}else ee(this,c,e-this.sa,f,b,a)}var h=c}else h=this;return h};
if(yd){var fe={};Object.defineProperties(I,(fe[Symbol.hasInstance]=zd(Object[Symbol.hasInstance]),fe))};function ge(a){this.Kb=a}
;function he(a,b,c){this.j=a;this.o=b;this.i=c||[];this.ya=new Map}
l=he.prototype;l.wc=function(a){var b=Ja.apply(1,arguments),c=this.nb(b);c?c.push(new ge(a)):this.lc(a,b)};
l.lc=function(a){this.ya.set(this.Sb(Ja.apply(1,arguments)),[new ge(a)])};
l.nb=function(){var a=this.Sb(Ja.apply(0,arguments));return this.ya.has(a)?this.ya.get(a):void 0};
l.Ic=function(){var a=this.nb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.ya.clear()};
l.Sb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ie(a,b){he.call(this,a,3,b)}
r(ie,he);ie.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Ic(b);d&&(c=d.Kb);this.lc(c+a,b)};function je(a,b){he.call(this,a,2,b)}
r(je,he);je.prototype.l=function(a){this.wc(a,Ja.apply(1,arguments))};function ke(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function le(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?le.apply(null,d):ke(d)}}
;function J(){this.N=this.N;this.C=this.C}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.D())};
function me(a,b){ne(a,Ya(ke,b))}
function ne(a,b){a.N?b():(a.C||(a.C=[]),a.C.push(b))}
J.prototype.D=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
oe.prototype.stopPropagation=function(){this.l=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function pe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=qe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,re[c])c=re[c];else{c=String(c);if(!re[c]){var f=/function\s+([^\(]+)/m.exec(c);re[c]=f?f[1]:"[Anonymous]"}c=re[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function qe(a,b){b||(b={});b[se(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[se(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=qe(a,b));return c}
function se(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var re={};var te=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function xe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(xe,oe);var ye={2:"touch",3:"pen",4:"mouse"};
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Mc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ye[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&xe.Z.preventDefault.call(this)};
xe.prototype.stopPropagation=function(){xe.Z.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.Z.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(1E6*Math.random()|0);var Ae=0;function Be(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ya=e;this.key=++Ae;this.Ka=this.Ta=!1}
function Ce(a){a.Ka=!0;a.listener=null;a.proxy=null;a.src=null;a.Ya=null}
;function De(a){this.src=a;this.listeners={};this.i=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.Ta=!1)):(b=new Be(b,this.src,f,!!d,e),b.Ta=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ka&&f.listener==b&&f.capture==!!c&&f.Ya==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.W(b,c,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new De(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)te||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.o.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Le(c),a&&a[ze])?a.o.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.Ka){var b=a.src;if(b&&b[ze])Fe(b.o,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.i&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.Ka)a=!0;else{b=new xe(b,this);var c=a.listener,d=a.Ya||a.src;a.Ta&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){J.call(this);this.o=new De(this);this.tc=this;this.la=null}
Za(Ue,J);Ue.prototype[ze]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.la;if(c){var d=[];for(var e=1;c;c=c.la)d.push(c),++e}a=a.tc;c=b.type||b;"string"===typeof b?b=new oe(b,a):b instanceof oe?b.target=b.target||a:(e=b,b=new oe(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=We(g,c,!0,b)&&e}b.l||(g=b.i=a,e=We(g,c,!0,b)&&e,b.l||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.D=function(){Ue.Z.D.call(this);if(this.o){var a=this.o,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.i--}}this.la=null};
Ue.prototype.W=function(a,b,c,d){return this.o.add(String(a),b,!1,c,d)};
function We(a,b,c,d){b=a.o.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ka&&g.capture==c){var h=g.listener,k=g.Ya||g.src;g.Ta&&Fe(a.o,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Xe(a,b){this.l=a;this.o=b;this.j=0;this.i=null}
Xe.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function Ye(a,b){a.o(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function Ze(a,b){return a+Math.random()*(b-a)}
;function $e(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=$e.prototype;l.clone=function(){return new $e(this.x,this.y)};
l.equals=function(a){return a instanceof $e&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function af(a,b){this.width=a;this.height=b}
l=af.prototype;l.clone=function(){return new af(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function bf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function cf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function df(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var ef;function ff(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=cf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Jb;c.Jb=null;e()}};
return function(e){d.next={Jb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function gf(){this.j=this.i=null}
gf.prototype.add=function(a,b){var c=hf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
gf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var hf=new Xe(function(){return new jf},function(a){return a.reset()});
function jf(){this.next=this.scope=this.i=null}
jf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
jf.prototype.reset=function(){this.next=this.scope=this.i=null};var kf,lf=!1,mf=new gf;function nf(a,b){kf||of();lf||(kf(),lf=!0);mf.add(a,b)}
function of(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);kf=function(){a.then(pf)}}else kf=function(){var b=pf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(ef||(ef=ff()),ef(b)):y.setImmediate(b)}}
function pf(){for(var a;a=mf.remove();){try{a.i.call(a.scope)}catch(b){Ad(b)}Ye(hf,a)}lf=!1}
;function qf(a){this.i=0;this.C=void 0;this.o=this.j=this.l=null;this.m=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){rf(b,2,c)},function(c){rf(b,3,c)})}catch(c){rf(this,3,c)}}
function sf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
sf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var tf=new Xe(function(){return new sf},function(a){a.reset()});
function uf(a,b,c){var d=tf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function vf(a){return new qf(function(b,c){c(a)})}
qf.prototype.then=function(a,b,c){return wf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
qf.prototype.$goog_Thenable=!0;l=qf.prototype;l.gb=function(a,b){return wf(this,null,a,b)};
l.catch=qf.prototype.gb;l.cancel=function(a){if(0==this.i){var b=new xf(a);nf(function(){yf(this,b)},this)}};
function yf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?yf(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):zf(c),Af(c,e,3,b)))}a.l=null}else rf(a,3,b)}
function Bf(a,b){a.j||2!=a.i&&3!=a.i||Cf(a);a.o?a.o.next=b:a.j=b;a.o=b}
function wf(a,b,c,d){var e=uf(null,null,null);e.i=new qf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof xf?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Bf(a,e);return e.i}
l.qd=function(a){this.i=0;rf(this,2,a)};
l.rd=function(a){this.i=0;rf(this,3,a)};
function rf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.qd,f=a.rd;if(d instanceof qf){Bf(d,uf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Df(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Cf(a),3!=b||c instanceof xf||Ef(a,c))}}
function Df(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Cf(a){a.s||(a.s=!0,nf(a.Gc,a))}
function zf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.o=null);return b}
l.Gc=function(){for(var a;a=zf(this);)Af(this,a,this.i,this.C);this.s=!1};
function Af(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.m;a=a.l)a.m=!1;if(b.i)b.i.l=null,Ff(b,c,d);else try{b.l?b.j.call(b.context):Ff(b,c,d)}catch(e){Gf.call(null,e)}Ye(tf,b)}
function Ff(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ef(a,b){a.m=!0;nf(function(){a.m&&Gf.call(null,b)})}
var Gf=Ad;function xf(a){ab.call(this,a)}
Za(xf,ab);xf.prototype.name="cancel";function Hf(a,b){Ue.call(this);this.l=a||1;this.j=b||y;this.m=Xa(this.od,this);this.s=Date.now()}
Za(Hf,Ue);l=Hf.prototype;l.enabled=!1;l.da=null;function If(a,b){a.l=b;a.da&&a.enabled?(a.stop(),a.start()):a.da&&a.stop()}
l.od=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.da=this.j.setTimeout(this.m,this.l-a):(this.da&&(this.j.clearTimeout(this.da),this.da=null),Ve(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.da||(this.da=this.j.setTimeout(this.m,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.da&&(this.j.clearTimeout(this.da),this.da=null)};
l.D=function(){Hf.Z.D.call(this);this.stop();delete this.j};
function Jf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Kf(a){this.C=a;this.i=new Map;this.s=new Set;this.l=0;this.o=100;this.flushInterval=3E4;this.j=new Hf(this.flushInterval);this.j.W("tick",this.ib,!1,this);this.m=!1}
l=Kf.prototype;l.jc=function(a){this.m=a;this.o=1};
function Lf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.o&&a.ib()}
l.ib=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.ya.size});
a.length&&this.C.flush(a,this.m);Mf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.xc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ie(a,b))};
l.Hb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new je(a,b))};
function Nf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Cb=function(a){this.qc.apply(this,[a,1].concat(ia(Ja.apply(1,arguments))))};
l.qc=function(a,b){var c=Ja.apply(2,arguments),d=Nf(this,a);d&&d instanceof ie&&(d.l(b,c),Lf(this))};
l.hb=function(a,b){var c=Ja.apply(2,arguments),d=Nf(this,a);d&&d instanceof je&&(d.l(b,c),Lf(this))};
function Mf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Of(a){this.i=a;this.i.Hb("/client_streamz/bg/fil",{mb:3,lb:"rk"})}
function Pf(a){this.i=a;this.i.xc("/client_streamz/bg/fsc",{mb:3,lb:"rk"})}
function Qf(a){this.i=a;this.i.Hb("/client_streamz/bg/fsl",{mb:3,lb:"rk"})}
;function Rf(a){I.call(this,a,-1,Sf)}
r(Rf,I);function Tf(a){I.call(this,a,-1,Uf)}
r(Tf,I);function Vf(a){I.call(this,a)}
r(Vf,I);function Wf(a){I.call(this,a)}
r(Wf,I);var Sf=[3,6,4],Uf=[1],Xf=[1,2,3],Yf=[1,2,3];function Zf(a){I.call(this,a,-1,$f)}
r(Zf,I);var $f=[1];function ag(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function bg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(t){for(var x=g,u=0;64>u;u+=4)x[u/4]=t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3];for(u=16;80>u;u++)t=x[u-3]^x[u-8]^x[u-14]^x[u-16],x[u]=(t<<1|t>>>31)&4294967295;t=e[0];var A=e[1],D=e[2],F=e[3],N=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var O=F^A&(D^F);var Q=1518500249}else O=A^D^F,Q=1859775393;else 60>u?(O=A&D|F&(A|D),Q=2400959708):(O=A^D^F,Q=3395469782);O=((t<<5|t>>>27)&4294967295)+O+N+Q+x[u]&4294967295;N=F;F=D;D=(A<<30|A>>>2)&4294967295;A=t;t=O}e[0]=e[0]+t&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+N&4294967295}
function c(t,x){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var u=[],A=0,D=t.length;A<D;++A)u.push(t.charCodeAt(A));t=u}x||(x=t.length);u=0;if(0==m)for(;u+64<x;)b(t.slice(u,u+64)),u+=64,q+=64;for(;u<x;)if(f[m++]=t[u++],q++,64==m)for(m=0,b(f);u+64<x;)b(t.slice(u,u+64)),u+=64,q+=64}
function d(){var t=[],x=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=x&255,x>>>=8;b(f);for(u=x=0;5>u;u++)for(var A=24;0<=A;A-=8)t[x++]=e[u]>>A&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Dc:function(){for(var t=d(),x="",u=0;u<t.length;u++)x+="0123456789ABCDEF".charAt(Math.floor(t[u]/16))+"0123456789ABCDEF".charAt(t[u]%16);return x}}}
;function cg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,dg(ag(d),a,c||null)].join(" "):null}
function dg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),eg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=eg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function eg(a){var b=bg();b.update(a);return b.Dc().toLowerCase()}
;var fg={};function gg(a){this.i=a||{cookie:""}}
l=gg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.uq;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ab}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ab:0,path:b,domain:c});return d};
l.qb=function(){return hg(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=hg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function hg(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ig=new gg("undefined"==typeof document?null:document);function jg(a){return!!fg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function kg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;jg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new gg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");jg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function lg(a,b,c,d){(a=y[a])||(a=(new gg(document)).get(b));return a?cg(a,c,d):null}
function mg(a,b){b=void 0===b?!1:b;var c=ag(String(y.location.href)),d=[];if(kg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new gg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?cg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&jg(b)&&((b=lg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=lg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ng(a){I.call(this,a,-1,og)}
r(ng,I);var og=[2];function pg(a){this.i=this.j=this.l=a}
pg.prototype.reset=function(){this.i=this.j=this.l};
pg.prototype.getValue=function(){return this.j};function qg(a){var b=[];rg(new sg,a,b);return b.join("")}
function sg(){}
function rg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),rg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),tg(d,c),c.push(":"),rg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":tg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ug={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},vg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function tg(a,b){b.push('"',a.replace(vg,function(c){var d=ug[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),ug[c]=d);return d}),'"')}
;function wg(){}
wg.prototype.i=null;wg.prototype.getOptions=function(){var a;(a=this.i)||(a={},xg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var yg;function zg(){}
Za(zg,wg);function Ag(a){return(a=xg(a))?new ActiveXObject(a):new XMLHttpRequest}
function xg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
yg=new zg;function Bg(a){Ue.call(this);this.headers=new Map;this.K=a||null;this.j=!1;this.G=this.A=null;this.m=this.T="";this.l=this.R=this.v=this.P=!1;this.s=0;this.B=null;this.ea="";this.X=this.Y=!1}
Za(Bg,Ue);var Cg=/^https?$/i,Dg=["POST","PUT"],Eg=[];function Fg(a,b,c,d,e,f,g){var h=new Bg;Eg.push(h);b&&h.W("complete",b);h.o.add("ready",h.Bc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.Y=g);h.send(a,c,d,e)}
l=Bg.prototype;l.Bc=function(){this.dispose();kb(Eg,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.m="";this.P=!1;this.j=!0;this.A=this.K?Ag(this.K):Ag(yg);this.G=this.K?this.K.getOptions():yg.getOptions();this.A.onreadystatechange=Xa(this.ac,this);try{this.getStatus(),this.R=!0,this.A.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Ig(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Dg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.ea&&(this.A.responseType=this.ea);"withCredentials"in this.A&&this.A.withCredentials!==this.Y&&(this.A.withCredentials=this.Y);try{Jg(this),0<this.s&&(this.X=Kg(this.A),this.getStatus(),this.X?(this.A.timeout=this.s,this.A.ontimeout=Xa(this.nc,this)):
this.B=Jf(this.nc,this.s,this)),this.getStatus(),this.v=!0,this.A.send(a),this.v=!1}catch(g){this.getStatus(),Ig(this,g)}};
function Kg(a){return Kc&&Vc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.nc=function(){"undefined"!=typeof Ma&&this.A&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),Ve(this,"timeout"),this.abort(8))};
function Ig(a,b){a.j=!1;a.A&&(a.l=!0,a.A.abort(),a.l=!1);a.m=b;Lg(a);Mg(a)}
function Lg(a){a.P||(a.P=!0,Ve(a,"complete"),Ve(a,"error"))}
l.abort=function(){this.A&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.A.abort(),this.l=!1,Ve(this,"complete"),Ve(this,"abort"),Mg(this))};
l.D=function(){this.A&&(this.j&&(this.j=!1,this.l=!0,this.A.abort(),this.l=!1),Mg(this,!0));Bg.Z.D.call(this)};
l.ac=function(){this.i()||(this.R||this.v||this.l?Ng(this):this.Qc())};
l.Qc=function(){Ng(this)};
function Ng(a){if(a.j&&"undefined"!=typeof Ma)if(a.G[1]&&4==Og(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Og(a))Jf(a.ac,0,a);else if(Ve(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Pg(a))Ve(a,"complete"),Ve(a,"success");else{try{var b=2<Og(a)?a.A.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Lg(a)}}finally{Mg(a)}}}
function Mg(a,b){if(a.A){Jg(a);var c=a.A,d=a.G[0]?function(){}:null;
a.A=null;a.G=null;b||Ve(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Jg(a){a.A&&a.X&&(a.A.ontimeout=null);a.B&&(y.clearTimeout(a.B),a.B=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==Og(this)};
function Pg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=lc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Cg.test(a?a.toLowerCase():"");c=b}return c}
function Og(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<Og(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function Qg(a){I.call(this,a)}
r(Qg,I);function Rg(a){I.call(this,a,-1,Sg)}
r(Rg,I);var Sg=[1];var Tg=["platform","platformVersion","architecture","model","uaFullVersion"];new Rg;function Ug(a){I.call(this,a)}
r(Ug,I);function Vg(a){I.call(this,a,31,Wg)}
r(Vg,I);var Wg=[3,20,27];function Xg(a){I.call(this,a,17,Yg)}
r(Xg,I);var Yg=[3,5];function Zg(a){I.call(this,a,6,$g)}
r(Zg,I);var $g=[5];function ah(a){I.call(this,a)}
r(ah,I);var bh;bh=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=de}(175237375,{lq:0},ah);function ch(a,b,c,d,e,f,g,h,k,m,q){Ue.call(this);var t=this;this.P="";this.l=[];this.Fb="";this.Gb=this.ra=-1;this.Qa=!1;this.G=this.m=null;this.B=0;this.uc=1;this.timeoutMillis=0;this.ea=!1;Ue.call(this);this.Eb=b||function(){};
this.v=new dh(a,f);this.sc=d;this.Pa=q;this.vc=Ya(Ze,0,1);this.T=e||null;this.K=c||null;this.X=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Fa=f||!1;!this.Fa&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Ec()||C("iPad")||C("iPod"))&&Fc());a=E(new Ug,1,1);eh(this.v,a);this.s=new pg(1E4);this.j=new Hf(this.s.getValue());me(this,this.j);m=fh(this,m);Je(this.j,"tick",m,!1,this);this.R=new Hf(6E5);me(this,this.R);Je(this.R,"tick",m,!1,this);this.X||this.R.start();
this.Fa||(Je(document,"visibilitychange",function(){"hidden"===document.visibilityState&&t.Y()}),Je(document,"pagehide",this.Y,!1,this))}
r(ch,Ue);function fh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
ch.prototype.D=function(){this.Y();Ue.prototype.D.call(this)};
function gh(a){a.T||(a.T=.01>a.vc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function hh(a,b){a.s=new pg(1>b?1:b);If(a.j,a.s.getValue())}
ch.prototype.log=function(a){a=a.clone();var b=this.uc++;E(a,21,b);this.P&&E(a,26,this.P);if(!Ld(a,1)){b=a;var c=Date.now().toString();E(b,1,c)}null!=Ld(a,15)||E(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,ng,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.B;this.l.push(a);Ve(this,new ih(a));this.X||this.j.enabled||this.j.start()};
ch.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.ea)jh(this);else{var d=Date.now();if(this.Gb>d&&this.ra<d)b&&b("throttled");else{var e=kh(this.v,this.l,this.B);d={};var f=this.Eb();f&&(d.Authorization=f);var g=gh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=xc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Fb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.B=0;var h=Zd(e),
k;this.G&&this.G.isSupported(h.length)&&(k=this.G.compress(h));var m={url:g,body:h,zc:1,yb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();If(c.j,c.s.getValue());if(u){var A=null;try{var D=JSON.parse(u.replace(")]}'\n",""));A=new Zg(D)}catch(F){}A&&(u=Number(Nd(A,1,"-1")),0<u&&(c.ra=Date.now(),c.Gb=c.ra+u),A=bh.l(A))&&(A=Nd(A,1,-1),-1!=A&&(c.Qa||hh(c,A)))}a&&a()},t=function(u,A){var D=Td(e,Vg,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));If(c.j,c.s.getValue());401===u&&f&&(c.Fb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=D.concat(c.l),c.X||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},x=function(){c.Pa?c.Pa.send(m,q,t):c.sc(m,q,t)};
k?k.then(function(u){m.yb["Content-Encoding"]="gzip";m.yb["Content-Type"]="application/binary";m.body=u;m.zc=2;x()},function(){x()}):x()}}}};
ch.prototype.Y=function(){this.flush()};
function jh(a){lh(a,function(b,c){b=xc(b,"format","json");b=window.navigator.sendBeacon(b,Zd(c));a.ea&&!b&&(a.ea=!1);return b})}
function lh(a,b){if(0!==a.l.length){var c=Bc(gh(a),"format");c=sc(c,"auth",a.Eb(),"authuser",a.K||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=kh(a.v,e,a.B);if(!b(c,f))break;a.B=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function ih(){oe.call(this,"event-logged",void 0)}
r(ih,oe);function dh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new Xg;E(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));eh(this,new Ug)}
function eh(a,b){G(a.i,Ug,1,b);Ld(b,1)||E(b,1,1);a.j||(b=mh(a),Ld(b,5)||E(b,5,a.locale));a.uach&&(b=mh(a),Rd(b,Rg,9)||G(b,Rg,9,a.uach))}
function nh(a,b){var c=void 0===c?Tg:c;b(window,c).then(function(d){a.uach=d;d=mh(a);G(d,Rg,9,a.uach);return!0}).catch(function(){return!1})}
function mh(a){a=Rd(a.i,Ug,1);var b=Rd(a,Qg,11);b||(b=new Qg,G(a,Qg,11,b));return b}
function kh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=E(a,4,d);b=Vd(a,Vg,3,b);c&&E(b,14,c);return b}
;function oh(a,b,c){Fg(a.url,function(d){d=d.target;if(Pg(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yb,a.timeoutMillis,a.withCredentials)}
;function ph(){this.l="https://play.google.com/log?format=json&hasfast=true";this.o=!1;this.s=oh;this.i=""}
;function qh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new ph;d.i="";""!=a&&(d.l=a);b&&(d.o=!0);c&&(d.j=c);a=new ch(1828,d.G?d.G:mg,"0",d.s,d.l,d.o,!1,d.R,void 0,void 0,d.C?d.C:void 0);d.v&&eh(a.v,d.v);d.j&&(b=d.j,c=mh(a.v),E(c,7,b));d.m&&(a.G=d.m);d.i&&(a.P=d.i);d.N&&((b=d.N)?(a.m||(a.m=new ng),b=Zd(b),E(a.m,4,b)):a.m&&E(a.m,4,void 0,!1));d.K&&(b=d.K,a.m||(a.m=new ng),Od(a.m,2,b));d.B&&(b=d.B,a.Qa=!0,hh(a,b));d.P&&nh(a.v,d.P);this.i=a}
qh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Zf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Rf;g=E(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].lb);g=Od(g,3,k);h=[];k=[];m=p(f.ya.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var t=f.o;for(var x=f.nb(q)||[],u=[],A=0;A<x.length;A++){var D=x[A];D=D&&D.Kb;var F=new Wf;switch(t){case 3:Pd(F,1,Yf,Number(D));break;case 2:Pd(F,2,Yf,Number(D))}u.push(F)}t=
u;for(x=0;x<t.length;x++){u=t[x];A=new Tf;u=G(A,Wf,2,u);A=q;D=[];F=f;for(var N=[],O=0;O<F.i.length;O++)N.push(F.i[O].mb);F=N;for(N=0;N<F.length;N++){O=F[N];var Q=A[N],ba=new Vf;switch(O){case 3:Pd(ba,1,Xf,String(Q));break;case 2:Pd(ba,2,Xf,Number(Q));break;case 1:Pd(ba,3,Xf,"true"==Q)}D.push(ba)}Vd(u,Vf,1,D);h.push(u)}}Vd(g,Tf,4,h);c.push(g);e.clear()}Vd(a,Rf,1,c);b=this.i;a instanceof Vg?b.log(a):(c=new Vg,a=Zd(a),a=E(c,8,a),b.log(a));this.i.flush()}};function rh(){this.m=sh();this.transport=new qh;this.i=new Kf(this.transport);this.o=new Of(this.i);this.j=new Pf(this.i);this.l=new Qf(this.i);this.Ba=window.document.location.hostname}
function sh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function th(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function uh(a){var b=this;this.Wa=!1;if(a.sq){var c;this.ta=null!=(c=a.ta)?c:new rh}c=a.program;a=a.globalName;var d=new th;this.j=d.promise;this.md=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.ta)){var h=sh()-g.m;g.o.i.hb("/client_streamz/bg/fil",h,g.Ba)}d.resolve({yc:e,jd:f})})},!0)).next().value;
this.hd=d.promise.then(function(){})}
uh.prototype.snapshot=function(a){var b=this;if(this.Wa)throw Error("Already disposed");var c=sh(),d;null!=(d=this.ta)&&d.j.i.Cb("/client_streamz/bg/fsc",d.Ba);return this.j.then(function(e){var f=e.yc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ta)){var m=sh()-c;k.l.i.hb("/client_streamz/bg/fsl",m,k.Ba)}g(h)},[a.Mb,
a.kd])})})};
uh.prototype.dispose=function(){var a;null!=(a=this.ta)&&a.i.ib();this.Wa=!0;this.j.then(function(b){(b=b.jd)&&b()})};
uh.prototype.i=function(){return this.Wa};var vh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function wh(a){this.isValid=a}
function xh(a){return new wh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var yh=[xh("data"),xh("http"),xh("https"),xh("mailto"),xh("ftp"),new wh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function zh(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Ah(a){var b=Bh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ch(){var a=[];Ah(function(b){a.push(b)});
return a}
var Bh={Fd:"allow-forms",Gd:"allow-modals",Hd:"allow-orientation-lock",Id:"allow-pointer-lock",Jd:"allow-popups",Kd:"allow-popups-to-escape-sandbox",Ld:"allow-presentation",Md:"allow-same-origin",Nd:"allow-scripts",Od:"allow-top-navigation",Pd:"allow-top-navigation-by-user-activation"},Dh=db(function(){return Ch()});
function Eh(){var a=Fh(),b={};fb(Dh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Gh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hh=(new Date).getTime();var Ih="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Ih);function Jh(a){Ue.call(this);var b=this;this.v=this.l=0;this.ba=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
aa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return v(e,Kh(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||Lh(this)}
r(Jh,Ue);function Mh(){var a=Nh;Jh.i||(Jh.i=new Jh(a));return Jh.i}
Jh.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.ba.aa(this.v);delete Jh.i};
Jh.prototype.L=function(){return this.j};
function Lh(a){a.v=a.ba.S(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Kh(a),3):v(c,Kh(a),3);Lh(a);c.i=0})},3E4)}
function Kh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.l=a.ba.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.s=void 0;a.l&&(a.ba.aa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?Ve(a,"networkstatus-online"):Ve(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:xa(h),g=!1,h.u(3)}})})}
;var Oh={Kh:"EMBEDDED_PLAYER_MODE_UNKNOWN",Hh:"EMBEDDED_PLAYER_MODE_DEFAULT",Jh:"EMBEDDED_PLAYER_MODE_PFP",Ih:"EMBEDDED_PLAYER_MODE_PFL"},Ph={Np:"WEB_DISPLAY_MODE_UNKNOWN",Jp:"WEB_DISPLAY_MODE_BROWSER",Lp:"WEB_DISPLAY_MODE_MINIMAL_UI",Mp:"WEB_DISPLAY_MODE_STANDALONE",Kp:"WEB_DISPLAY_MODE_FULLSCREEN"};function Qh(){this.data_=[];this.i=-1}
Qh.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Qh.prototype.get=function(a){return!!this.data_[a]};
function Rh(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Sh(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
Sh.prototype[Symbol.iterator]=function(){return this};
Sh.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Th(a,b){return new Sh(a,b)}
;function Uh(){this.blockSize=-1}
;function Vh(){this.blockSize=-1;this.blockSize=64;this.i=[];this.m=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.o=this.j=0;this.reset()}
Za(Vh,Uh);Vh.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.o=this.j=0};
function Wh(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Vh.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)Wh(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Wh(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Wh(this,e);f=0;break}}this.j=f;this.o+=b}};
Vh.prototype.digest=function(){var a=[],b=8*this.o;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Wh(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Xh(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yh(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Zh(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Xh(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function $h(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Zh(a,"inverted-hdpi")&&Yh(a,Array.prototype.filter.call(a.classList?a.classList:Xh(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ai(){}
ai.prototype.next=function(){return bi};
var bi={done:!0,value:void 0};function ci(a){return{value:a,done:!1}}
ai.prototype.fa=function(){return this};function di(a){if(a instanceof ei||a instanceof fi||a instanceof gi)return a;if("function"==typeof a.next)return new ei(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ei(function(){return a[Symbol.iterator]()});
if("function"==typeof a.fa)return new ei(function(){return a.fa()});
throw Error("Not an iterator or iterable.");}
function ei(a){this.j=a}
ei.prototype.fa=function(){return new fi(this.j())};
ei.prototype[Symbol.iterator]=function(){return new gi(this.j())};
ei.prototype.i=function(){return new gi(this.j())};
function fi(a){this.j=a}
r(fi,ai);fi.prototype.next=function(){return this.j.next()};
fi.prototype[Symbol.iterator]=function(){return new gi(this.j)};
fi.prototype.i=function(){return new gi(this.j)};
function gi(a){ei.call(this,function(){return a});
this.l=a}
r(gi,ei);gi.prototype.next=function(){return this.l.next()};function hi(a,b){this.j={};this.i=[];this.oa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hi)for(c=a.qb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=hi.prototype;l.qb=function(){ii(this);return this.i.concat()};
l.has=function(a){return ji(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ki;ii(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ki(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.oa=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return ji(this.j,a)?(delete this.j[a],--this.size,this.oa++,this.i.length>2*this.size&&ii(this),!0):!1};
function ii(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];ji(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],ji(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return ji(this.j,a)?this.j[a]:b};
l.set=function(a,b){ji(this.j,a)||(this.size+=1,this.i.push(a),this.oa++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.qb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new hi(this)};
l.keys=function(){return di(this.fa(!0)).i()};
l.values=function(){return di(this.fa(!1)).i()};
l.entries=function(){var a=this;return Th(this.keys(),function(b){return[b,a.get(b)]})};
l.fa=function(a){ii(this);var b=0,c=this.oa,d=this,e=new ai;e.next=function(){if(c!=d.oa)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return bi;var f=d.i[b++];return ci(a?f:d.j[f])};
return e};
function ji(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.o=[];this.m=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function li(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ea(b)}}
l.Ea=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.m?(this.o.push(a),this.j[a+1]=function(){}):(c&&kb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.qa=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];mi(this.j[g+1],this.j[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.m--,0<this.o.length&&0==this.m)for(;c=this.o.pop();)this.Ea(c)}}return 0!=e}return!1};
function mi(a,b,c){nf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Ea,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.D=function(){K.Z.D.call(this);this.clear();this.o.length=0};function ni(a){this.i=a}
ni.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,qg(b))};
ni.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ni.prototype.remove=function(a){this.i.remove(a)};function oi(a){this.i=a}
Za(oi,ni);function pi(a){this.data=a}
function qi(a){return void 0===a||a instanceof pi?a:new pi(a)}
oi.prototype.set=function(a,b){oi.Z.set.call(this,a,qi(b))};
oi.prototype.j=function(a){a=oi.Z.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
oi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ri(a){this.i=a}
Za(ri,oi);ri.prototype.set=function(a,b,c){if(b=qi(b)){if(c){if(c<Date.now()){ri.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ri.Z.set.call(this,a,b)};
ri.prototype.j=function(a){var b=ri.Z.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ri.prototype.remove.call(this,a);else return b}};function si(){}
;function ti(){}
Za(ti,si);ti.prototype[Symbol.iterator]=function(){return di(this.fa(!0)).i()};
ti.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ui(a){this.i=a}
Za(ui,ti);l=ui.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.fa=function(a){var b=0,c=this.i,d=new ai;d.next=function(){if(b>=c.length)return bi;var e=c.key(b++);if(a)return ci(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ci(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function vi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(vi,ui);function wi(a,b){this.j=a;this.i=null;var c;if(c=Kc)c=!(9<=Number(Yc));if(c){xi||(xi=new hi);this.i=xi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),xi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(wi,ti);var yi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xi=null;function zi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yi[b]})}
l=wi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(zi(a),b);Ai(this)};
l.get=function(a){a=this.i.getAttribute(zi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(zi(a));Ai(this)};
l.fa=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ai;d.next=function(){if(b>=c.length)return bi;var e=c[b++];if(a)return ci(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ci(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ai(this)};
function Ai(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bi(a,b){this.j=a;this.i=b+"::"}
Za(Bi,ti);Bi.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Bi.prototype.get=function(a){return this.j.get(this.i+a)};
Bi.prototype.remove=function(a){this.j.remove(this.i+a)};
Bi.prototype.fa=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ai;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return ci(a?e.slice(c.i.length):c.j.get(e))};
return d};function Ci(a){I.call(this,a)}
r(Ci,I);function Di(a){I.call(this,a)}
r(Di,I);Di.prototype.getKey=function(){return Ld(this,1)};
Di.prototype.getValue=function(){return Ld(this,2===Qd(this,Ei)?2:-1)};
Di.prototype.setValue=function(a){return Pd(this,2,Ei,a)};
var Ei=[2,3,4,5,6];function Fi(a){I.call(this,a)}
r(Fi,I);function Gi(a){I.call(this,a)}
r(Gi,I);function Hi(a){I.call(this,a,-1,Ii)}
r(Hi,I);var Ii=[2];function Ji(a){I.call(this,a,-1,Ki)}
r(Ji,I);Ji.prototype.getPlayerType=function(){return Ld(this,36)};
Ji.prototype.setHomeGroupInfo=function(a){return G(this,Hi,81,a)};
var Ki=[9,66,24,32,86,100,101];function Li(a){I.call(this,a,-1,Mi)}
r(Li,I);var Mi=[15,26,28];function Ni(a){I.call(this,a)}
r(Ni,I);Ni.prototype.setToken=function(a){return E(this,2,a)};function Oi(a){I.call(this,a,-1,Pi)}
r(Oi,I);Oi.prototype.setSafetyMode=function(a){return E(this,5,a)};
var Pi=[12];function Qi(a){I.call(this,a,-1,Ri)}
r(Qi,I);Qi.prototype.s=function(a){G(this,Ji,1,a)};
var Ri=[12];function Si(a){I.call(this,a,-1,Ti)}
r(Si,I);function Ui(a){I.call(this,a)}
r(Ui,I);Ui.prototype.getKey=function(){return Nd(this,1,"")};
Ui.prototype.getValue=function(){return Nd(this,2,"")};
Ui.prototype.setValue=function(a){return E(this,2,a)};
var Ti=[4,5];function Vi(a){I.call(this,a)}
r(Vi,I);function Wi(a){I.call(this,a)}
r(Wi,I);var Xi=[2,3,4];function Yi(a){I.call(this,a)}
r(Yi,I);Yi.prototype.getMessage=function(){return Nd(this,1,"")};function Zi(a){I.call(this,a)}
r(Zi,I);function $i(a){I.call(this,a)}
r($i,I);function aj(a){I.call(this,a,-1,bj)}
r(aj,I);var bj=[10,17];function cj(a){I.call(this,a)}
r(cj,I);function dj(a){I.call(this,a)}
r(dj,I);dj.prototype.V=function(a){E(this,1,a)};function ej(a){I.call(this,a)}
r(ej,I);function fj(a){I.call(this,a)}
r(fj,I);function gj(a){I.call(this,a)}
r(gj,I);function hj(a){I.call(this,a,-1,ij)}
r(hj,I);hj.prototype.getVideoData=function(){return Rd(this,gj,15)};
var ij=[4];function jj(a){I.call(this,a)}
r(jj,I);function kj(a,b){G(a,ej,1,b)}
jj.prototype.V=function(a){E(this,2,a)};
function lj(a){I.call(this,a)}
r(lj,I);function mj(a,b){G(a,ej,1,b)}
;function nj(a){I.call(this,a,-1,oj)}
r(nj,I);nj.prototype.V=function(a){E(this,1,a)};
function pj(a,b){G(a,ej,2,b)}
var oj=[3];function qj(a){I.call(this,a)}
r(qj,I);qj.prototype.V=function(a){E(this,1,a)};function rj(a){I.call(this,a)}
r(rj,I);rj.prototype.V=function(a){E(this,1,a)};function sj(a){I.call(this,a)}
r(sj,I);sj.prototype.V=function(a){E(this,1,a)};function tj(a){I.call(this,a)}
r(tj,I);tj.prototype.V=function(a){E(this,1,a)};function uj(a){I.call(this,a)}
r(uj,I);function vj(a){I.call(this,a)}
r(vj,I);function wj(a){I.call(this,a,-1,xj)}
r(wj,I);function yj(a,b){return E(a,1,b)}
wj.prototype.getPlayerType=function(){return Nd(this,7,0)};
wj.prototype.setVideoId=function(a){return E(this,19,a)};
function zj(a,b){return E(a,25,b)}
function Aj(a,b){Wd(a,68,Bj,b)}
function Bj(a){I.call(this,a)}
r(Bj,I);Bj.prototype.getId=function(){return Nd(this,2,"")};
var xj=[83,68];function Cj(a){I.call(this,a)}
r(Cj,I);function Dj(a){I.call(this,a)}
r(Dj,I);function Ej(a){I.call(this,a)}
r(Ej,I);function Fj(a){I.call(this,a,432)}
r(Fj,I);
var Gj=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Hj={Ki:0,vi:1,Bi:2,Ci:4,Hi:8,Di:16,Ei:32,Ji:64,Ii:128,xi:256,zi:512,Gi:1024,yi:2048,Ai:4096,wi:8192,Fi:16384};function Ij(a){I.call(this,a)}
r(Ij,I);function Jj(a){I.call(this,a)}
r(Jj,I);Jj.prototype.setVideoId=function(a){return Pd(this,1,Kj,a)};
Jj.prototype.getPlaylistId=function(){return Ld(this,2===Qd(this,Kj)?2:-1)};
var Kj=[1,2];function Lj(a){I.call(this,a,-1,Mj)}
r(Lj,I);var Mj=[3];function Nj(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Oj=y.window,kk,lk,mk=(null==Oj?void 0:null==(kk=Oj.yt)?void 0:kk.config_)||(null==Oj?void 0:null==(lk=Oj.ytcfg)?void 0:lk.data_)||{};z("yt.config_",mk);function nk(){Nj(mk,arguments)}
function L(a,b){return a in mk?mk[a]:b}
function ok(){var a=mk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=pk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function qk(a,b){a=pk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function rk(){return L("EXPERIMENTS_TOKEN","")}
function pk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function sk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var tk=[];function uk(a){tk.forEach(function(b){return b(a)})}
function vk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wk(b)}}:a}
function wk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),nk("ERRORS",e));uk(a)}
function xk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),nk("ERRORS",e))}
;function yk(){var a=zk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Ak(a){z("yt.ads.biscotti.lastId_",a)}
;var Bk=/^[\w.]*$/,Ck={q:!0,search_query:!0};function Dk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ek(f[0]||""),h=Ek(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,m=f[0],q=String(Dk);k.args=[{key:m,value:f[1],query:a,method:Fk==q?"unchanged":q}];Ck.hasOwnProperty(m)||xk(k)}}return c}
var Fk=String(Dk);function Gk(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Hk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Dk(a,"&")}
function Ik(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Hk(1<a.length?a[1]:a[0])):{}}
function Jk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Hk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function Kk(a){if(!b)var b=window.location.href;var c=lc(1,a),d=mc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?mc(b)==d&&(Number(lc(4,b))||null)==(Number(lc(4,a))||null):!0;return a}
function Ek(a){return a&&a.match(Bk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Lk(a){var b=Mk;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ya){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?vh:g;try{var h=g.history.length}catch(ya){h=0}e.u_his=h;var k;e.u_h=null==(k=vh.screen)?void 0:k.height;var m;e.u_w=null==(m=vh.screen)?void 0:m.width;var q;e.u_ah=null==(q=vh.screen)?void 0:q.availHeight;var t;e.u_aw=
null==(t=vh.screen)?void 0:t.availWidth;var x;e.u_cd=null==(x=vh.screen)?void 0:x.colorDepth}catch(ya){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(ya){}try{var D=h.outerWidth;var F=h.outerHeight}catch(ya){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ya){}try{var Q=h.screenLeft;var ba=h.screenTop}catch(ya){}try{N=h.innerWidth,O=h.innerHeight}catch(ya){}try{var ca=h.screen.availWidth;var V=h.screen.availTop}catch(ya){}u=[Q,ba,u,A,ca,V,D,F,N,O];try{var Ta=(b.i.top||window).document,za="CSS1Compat"==
Ta.compatMode?Ta.documentElement:Ta.body;var H=(new af(za.clientWidth,za.clientHeight)).round()}catch(ya){H=new af(-12245933,-12245933)}Ta=H;H={};var Fa=void 0===Fa?y:Fa;za=new Qh;Fa.SVGElement&&Fa.document.createElementNS&&za.set(0);A=Eh();A["allow-top-navigation-by-user-activation"]&&za.set(1);A["allow-popups-to-escape-sandbox"]&&za.set(2);Fa.crypto&&Fa.crypto.subtle&&za.set(3);Fa.TextDecoder&&Fa.TextEncoder&&za.set(4);Fa=Rh(za);H.bc=Fa;H.bih=Ta.height;H.biw=Ta.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!vh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Mk=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Gk(Lk(a))});Date.now();var Nk="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Ok(){if(!Nk)return null;var a=Nk();return"open"in a?a:null}
function Pk(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Qk(a,b){"function"===typeof a&&(a=vk(a));return window.setTimeout(a,b)}
function Rk(a){window.clearTimeout(a)}
;var Sk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Tk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Ih)),Uk=!1;
function Vk(a,b){b=void 0===b?{}:b;var c=Kk(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Sk){var f=L(Sk[e]);M("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=L("VISITOR_DATA"));!f||!c&&mc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!mc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!mc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!mc(a))b["X-YouTube-Ad-Signals"]=Gk(Lk());return b}
function Wk(a){var b=window.location.search,c=mc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!Kk(a)||(c=document.location.hostname);var d=kc(lc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Hk(b),f={};fb(Tk,function(g){e[g]&&(f[g]=e[g])});
return Jk(a,f||{},!1)}
function Xk(a,b){var c=b.format||"JSON";a=Yk(a,b);var d=Zk(a,b),e=!1,f=$k(a,function(k){if(!e){e=!0;h&&Rk(h);var m=Pk(k),q=null,t=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||t||x)q=al(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||y;m?b.onSuccess&&b.onSuccess.call(t,k,q):b.onError&&b.onError.call(t,k,q);b.onFinish&&b.onFinish.call(t,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Qk(function(){e||(e=!0,f.abort(),Rk(h),g.call(b.context||y,f))},d)}return f}
function Yk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Jk(a,b||{},!0);return a}
function Zk(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||mc(a)&&!b.withCredentials&&mc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Hk(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):rc(e));f=e||f&&!pb(f);!Uk&&f&&"POST"!=b.method&&(Uk=
!0,wk(Error("AJAX request with postData should use POST")));return e}
function al(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,xk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?bl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=cl(g)})}d&&dl(e);
return e}
function dl(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new cc(d)}else dl(a[b])}}
function bl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function cl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function $k(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ok();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Wk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Vk(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function el(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function fl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gl(a,b,c,d,e){ig.set(""+a,b,{ab:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function hl(a){return ig.get(""+a,void 0)}
function il(){if(!ig.isEnabled())return!1;if(!ig.isEmpty())return!0;ig.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==ig.get("TESTCOOKIESENABLED"))return!1;ig.remove("TESTCOOKIESENABLED");return!0}
;var jl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",jl);function kl(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=hl(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(jl[d]=c.toString())}}}
kl.prototype.get=function(a,b){ll(a);ml(a);a=void 0!==jl[a]?jl[a].toString():null;return null!=a?a:b?b:""};
kl.prototype.set=function(a,b){ll(a);ml(a);if(null==b)throw Error("ExpectedNotNull");jl[a]=b.toString()};
function nl(a){return!!((ol("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
kl.prototype.remove=function(a){ll(a);ml(a);delete jl[a]};
kl.prototype.clear=function(){for(var a in jl)delete jl[a]};
function ml(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ll(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ol(a){a=void 0!==jl[a]?jl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(kl);var pl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ql={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},rl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},sl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function tl(){var a=y.navigator;return a?a.connection:void 0}
function ul(){var a=tl();if(a){var b=pl[a.type||"unknown"]||"CONN_UNKNOWN";a=pl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function vl(){var a=tl();if(null!=a&&a.effectiveType)return sl.hasOwnProperty(a.effectiveType)?sl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function wl(){return"INNERTUBE_API_KEY"in mk&&"INNERTUBE_API_VERSION"in mk}
function xl(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),sb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ub:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Jc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Wb:L("INNERTUBE_CONTEXT_HL"),Vb:L("INNERTUBE_CONTEXT_GL"),Kc:L("INNERTUBE_HOST_OVERRIDE")||"",Mc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Lc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function yl(a){var b={client:{hl:a.Wb,gl:a.Vb,clientName:a.Ub,clientVersion:a.innertubeContextClientVersion,configInfo:a.sb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=rk();""!==c&&(b.client.experimentsToken=c);c=sk();0<c.length&&(b.request={internalExperimentFlags:c});zl(a,void 0,b);Al(void 0,b);Bl(a,void 0,b);Cl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Hk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Dl(a){var b=new Qi,c=new Ji;E(c,1,a.Wb);E(c,2,a.Vb);E(c,16,a.Jc);E(c,17,a.innertubeContextClientVersion);if(a.sb){var d=a.sb,e=new Fi;d.coldConfigData&&E(e,1,d.coldConfigData);d.appInstallData&&E(e,6,d.appInstallData);d.coldHashData&&E(e,3,d.coldHashData);d.hotHashData&&E(e,5,d.hotHashData);G(c,Fi,62,e)}(d=y.devicePixelRatio)&&1!=d&&E(c,65,d);d=rk();""!==d&&E(c,54,d);d=sk();if(0<d.length){e=new Li;for(var f=0;f<d.length;f++){var g=new Di;E(g,1,d[f].key);g.setValue(d[f].value);Wd(e,15,Di,
g)}G(b,Li,5,e)}zl(a,c);Al(c);Bl(a,c);Cl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Oi,E(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Hk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?E(c,12,e):"cmodel"===d?E(c,13,e):"cbr"===d?E(c,87,e):"cbrver"===d?E(c,88,e):"cos"===d?E(c,18,e):"cosver"===d?E(c,19,e):"cplatform"===d&&E(c,42,e);b.s(c);return b}
function zl(a,b,c){a=a.Ub;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Rd(b,Gi,96)||new Gi;var d=fl();d=Object.keys(Ph).indexOf(d);d=-1===d?null:d;null!==d&&E(c,3,d);G(b,Gi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=fl())}
function Al(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?E(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Bl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Rd(b,Fi,62))?d:new Fi;E(c,6,a.appInstallData);G(b,Fi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Cl(a,b){var c=ul();c&&(a?E(a,61,ql[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=vl())&&(a?E(a,94,rl[c]):b&&(b.client.effectiveConnectionType=c))}
function El(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.cq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().bq:b=mg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Fl(a){a=Object.assign({},a);delete a.Authorization;var b=mg();if(b){var c=new Vh;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=dd(c.digest(),3)}return a}
;function Gl(a){var b=new vi;(b=b.isAvailable()?a?new Bi(b,a):b:null)||(a=new wi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new ri(a):null;this.j=document.domain||window.location.hostname}
Gl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(qg(b))}catch(f){return}else e=escape(b);gl(a,e,c,this.j)};
Gl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=hl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Gl.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ig.remove(""+a,"/",void 0===b?"youtube.com":b)};var Hl=window,P=Hl.ytcsi&&Hl.ytcsi.now?Hl.ytcsi.now:Hl.performance&&Hl.performance.timing&&Hl.performance.now&&Hl.performance.timing.navigationStart?function(){return Hl.performance.timing.navigationStart+Hl.performance.now()}:function(){return(new Date).getTime()};var Il;function Jl(){Il||(Il=new Gl("yt.innertube"));return Il}
function Kl(a,b,c,d){if(d)return null;d=Jl().get("nextId",!0)||1;var e=Jl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fl(c),requestTime:Math.round(P())};Jl().set("nextId",d+1,86400,!0);Jl().set("requests",e,86400,!0);return d}
function Ll(a){var b=Jl().get("requests",!0)||{};delete b[a];Jl().set("requests",b,86400,!0)}
function Ml(a){var b=Jl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Fl(El(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Nl(a,d.method,e,{}));delete b[c]}}Jl().set("requests",b,86400,!0)}}
;function Ol(){}
function Pl(a,b){return Ql(a,0,b)}
Ol.prototype.S=function(a,b){return Ql(a,1,b)};
function Rl(a,b){Ql(a,2,b)}
function Sl(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Tl(){Ol.apply(this,arguments)}
r(Tl,Ol);function Ul(){Tl.i||(Tl.i=new Tl);return Tl.i}
function Ql(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Qk(a,c||0)}
Tl.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Rk(a)}};
Tl.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Tl.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Nh=Ul();var Vl=Zc||$c;function Wl(a){var b=Rb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Xl=function(){var a;return function(){a||(a=new Gl("ytidb"));return a}}();
function Yl(){var a;return null==(a=Xl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Zl=[],$l,am=!1;function bm(){var a={};for($l=new cm(void 0===a.handleError?dm:a.handleError,void 0===a.logEvent?em:a.logEvent);0<Zl.length;)switch(a=Zl.shift(),a.type){case "ERROR":$l.handleError(a.payload);break;case "EVENT":$l.logEvent(a.eventType,a.payload)}}
function fm(a){am||($l?$l.handleError(a):(Zl.push({type:"ERROR",payload:a}),10<Zl.length&&Zl.shift()))}
function gm(a,b){am||($l?$l.logEvent(a,b):(Zl.push({type:"EVENT",eventType:a,payload:b}),10<Zl.length&&Zl.shift()))}
;function R(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
r(R,Error);function hm(){try{return im(),!0}catch(a){return!1}}
function im(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new R("Datasync ID not set",void 0===a?"unknown":a);}
;function jm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function km(a){return a.substr(0,a.indexOf(":"))||a}
;var lm={},mm=(lm.AUTH_INVALID="No user identifier specified.",lm.EXPLICIT_ABORT="Transaction was explicitly aborted.",lm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",lm.MISSING_INDEX="Index not created.",lm.MISSING_OBJECT_STORES="Object stores not created.",lm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",lm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",lm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
lm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",lm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",lm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",lm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",lm),nm={},om=(nm.AUTH_INVALID="ERROR",nm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",nm.EXPLICIT_ABORT="IGNORED",nm.IDB_NOT_SUPPORTED="ERROR",nm.MISSING_INDEX=
"WARNING",nm.MISSING_OBJECT_STORES="ERROR",nm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",nm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",nm.QUOTA_EXCEEDED="WARNING",nm.QUOTA_MAYBE_EXCEEDED="WARNING",nm.UNKNOWN_ABORT="WARNING",nm.INCOMPATIBLE_DB_VERSION="WARNING",nm),pm={},qm=(pm.AUTH_INVALID=!1,pm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,pm.EXPLICIT_ABORT=!1,pm.IDB_NOT_SUPPORTED=!1,pm.MISSING_INDEX=!1,pm.MISSING_OBJECT_STORES=!1,pm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,pm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,pm.QUOTA_EXCEEDED=!1,pm.QUOTA_MAYBE_EXCEEDED=!0,pm.UNKNOWN_ABORT=!0,pm.INCOMPATIBLE_DB_VERSION=!1,pm);function rm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?mm[a]:c;d=void 0===d?om[a]:d;e=void 0===e?qm[a]:e;R.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,rm.prototype)}
r(rm,R);function sm(a,b){rm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},mm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,sm.prototype)}
r(sm,rm);function tm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,tm.prototype)}
r(tm,Error);var um=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function vm(a,b,c,d){b=km(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof rm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new rm("QUOTA_EXCEEDED",a);if(ad&&"UnknownError"===e.name)return new rm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof tm)return new rm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&um.some(function(f){return e.message.includes(f)}))return new rm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new rm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",cc:e.name})];e.level="WARNING";return e}
function wm(a,b,c){var d=Yl();return new rm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function xm(a){if(!a)throw Error();throw a;}
function ym(a){return a}
function zm(a){this.i=a}
function Am(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Am.all=function(a){return new Am(new zm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xa:0};f.xa<a.length;f={xa:f.xa},++f.xa)Am.resolve(a[f.xa]).then(function(g){return function(h){d[g.xa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Am.resolve=function(a){return new Am(new zm(function(b,c){a instanceof Am?a.then(b,c):b(a)}))};
Am.reject=function(a){return new Am(new zm(function(b,c){c(a)}))};
Am.prototype.then=function(a,b){var c=this,d=null!=a?a:ym,e=null!=b?b:xm;return new Am(new zm(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Bm(c,c,d,f,g)}),c.onRejected.push(function(){Cm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Bm(c,c,d,f,g):"REJECTED"===c.state.status&&Cm(c,c,e,f,g)}))};
Am.prototype.catch=function(a){return this.then(void 0,a)};
function Bm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Am?Dm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Am?Dm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Dm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Am?Dm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Em(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Fm(a){return new Promise(function(b,c){Em(a,b,c)})}
function Gm(a){return new Am(new zm(function(b,c){Em(a,b,c)}))}
;function Hm(a,b){return new Am(new zm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Im(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Im.prototype;l.add=function(a,b,c){return Jm(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Jm(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Jm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function Km(a,b,c){a=a.i.createObjectStore(b,c);return new Lm(a)}
l.delete=function(a,b){return Jm(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Jm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function Mm(a,b){return Jm(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Gm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Jm(a,b,c,d){var e,f,g,h,k,m,q,t,x,u,A,D;return w(function(F){switch(F.i){case 1:var N={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());va(F,4);m=a.i.transaction(b,e.mode);N=new Nm(m);N=Om(N,d);return v(F,N,6);case 6:return q=F.j,t=Math.round(P()),Pm(a,k,t,g,void 0,b.join(),e),F.return(q);case 4:x=xa(F);u=Math.round(P());A=vm(x,a.i.name,b.join(),a.i.version);
if((D=A instanceof rm&&!A.i)||g>=f)Pm(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function Pm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof rm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&gm("QUOTA_EXCEEDED",{dbName:km(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof rm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),gm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Qm(a,!1,d,f,b,g.tag),fm(e)):Qm(a,!0,d,f,b,g.tag)}
function Qm(a,b,c,d,e,f){gm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Lm(a){this.i=a}
l=Lm.prototype;l.add=function(a,b){return Gm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Gm(this.i.clear()).then(function(){})};
l.count=function(a){return Gm(this.i.count(a))};
function Rm(a,b){return Sm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Rm(this,a):Gm(this.i.delete(a))};
l.get=function(a){return Gm(this.i.get(a))};
l.index=function(a){try{return new Tm(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new tm(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function Sm(a,b,c){a=a.i.openCursor(b.query,b.direction);return Um(a).then(function(d){return Hm(d,c)})}
function Nm(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=rm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Om(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Nm.prototype.abort=function(){this.i.abort();this.j=!0;throw new rm("EXPLICIT_ABORT");};
Nm.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Lm(a),this.l.set(a,b));return b};
function Tm(a){this.i=a}
l=Tm.prototype;l.count=function(a){return Gm(this.i.count(a))};
l.delete=function(a){return Vm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Gm(this.i.get(a))};
l.getKey=function(a){return Gm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function Vm(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Um(a).then(function(d){return Hm(d,c)})}
function Wm(a,b){this.request=a;this.cursor=b}
function Um(a){return Gm(a).then(function(b){return b?new Wm(a,b):null})}
l=Wm.prototype;l.advance=function(a){this.cursor.advance(a);return Um(this.request)};
l.continue=function(a){this.cursor.continue(a);return Um(this.request)};
l.delete=function(){return Gm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Gm(this.cursor.update(a))};function Xm(a,b,c){return new Promise(function(d,e){function f(){x||(x=new Im(g.result,{closed:t}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.nd,q=c.upgrade,t=c.closed,x;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&gm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:km(a)});var A=f(),D=new Nm(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){gm("IDB_UNEXPECTEDLY_CLOSED",{dbName:km(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ym(a,b,c){c=void 0===c?{}:c;return Xm(a,b,c)}
function Zm(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Fm(c),4);
if(2!=g.i)return wa(g,0);f=xa(g);throw vm(f,a,"",-1);})}
;function $m(a){return new Promise(function(b){Rl(function(){b()},a)})}
function an(a,b){this.name=a;this.options=b;this.o=!0;this.s=this.m=0;this.j=500}
an.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Ym(a,b,c)};
an.prototype.delete=function(a){a=void 0===a?{}:a;return Zm(this.name,a)};
function bn(a,b){return new rm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function cn(a,b){if(!b)throw wm("openWithToken",km(a.name));return dn(a)}
function dn(a){function b(){var f,g,h,k,m,q,t,x,u,A;return w(function(D){switch(D.i){case 1:return g=null!=(f=Error().stack)?f:"",va(D,2),v(D,a.l(a.name,a.options.version,d),4);case 4:h=D.j;for(var F=a.options,N=[],O=p(Object.keys(F.Ja)),Q=O.next();!Q.done;Q=O.next()){Q=Q.value;var ba=F.Ja[Q],ca=void 0===ba.Vc?Number.MAX_VALUE:ba.Vc;!(h.i.version>=ba.jb)||h.i.version>=ca||h.i.objectStoreNames.contains(Q)||N.push(Q)}k=N;if(0===k.length){D.u(5);break}m=Object.keys(a.options.Ja);q=h.objectStoreNames();
if(a.s<qk("ytidb_reopen_db_retries",0))return a.s++,h.close(),fm(new rm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());if(!(a.m<qk("ytidb_remake_db_retries",1))){D.u(6);break}a.m++;if(!M("ytidb_remake_db_enable_backoff_delay")){D.u(7);break}return v(D,$m(a.j),8);case 8:a.j*=2;case 7:return v(D,a.delete(),9);case 9:return fm(new rm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());
case 6:throw new sm(q,m);case 5:return D.return(h);case 2:t=xa(D);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){D.u(10);break}return v(D,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:x=D.j;u=x.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw x.close(),
a.o=!1,bn(a,u);return D.return(x);case 10:throw c(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+g.substring(g.indexOf("\n")+1)),vm(t,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.o)throw bn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var en=new an("YtIdbMeta",{Ja:{databases:{jb:1}},upgrade:function(a,b){b(1)&&Km(a,"databases",{keyPath:"actualName"})}});
function fn(a,b){var c;return w(function(d){if(1==d.i)return v(d,cn(en,b),2);c=d.j;return d.return(Jm(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Gm(f.i.put(a,void 0)).then(function(){})})}))})}
function gn(a,b){var c;return w(function(d){if(1==d.i)return a?v(d,cn(en,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function hn(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],v(e,cn(en,b),2)):3!=e.i?(d=e.j,v(e,Jm(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return Sm(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function jn(a){return hn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function kn(a,b,c){return hn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function ln(a){var b,c;return w(function(d){if(1==d.i)return b=im("YtIdbMeta hasAnyMeta other"),v(d,hn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var mn,nn=new function(){}(new function(){});
function on(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=Yl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Vl)f=/WebKit\/([0-9]+)/.exec(Rb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Rb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,fn(d,nn),4);case 4:return v(e,gn("yt-idb-test-do-not-use",nn),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function pn(){if(void 0!==mn)return mn;am=!0;return mn=on().then(function(a){am=!1;var b;if(null!=(b=Xl())&&b.i){var c;b={hasSucceededOnce:(null==(c=Yl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Xl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function qn(){return B("ytglobal.idbToken_")||void 0}
function rn(){var a=qn();return a?Promise.resolve(a):pn().then(function(b){(b=b?nn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var sn=0;function tn(a,b){sn||(sn=Nh.S(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return v(h,rn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;va(h,3);return v(h,kn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,Zm(f.actualName),7);case 7:return v(h,gn(f.actualName,c),6);case 6:wa(h,4);break;case 3:g=xa(h),fm(g),d=!1;case 4:Nh.aa(sn),sn=0,d&&tn(a,b),h.i=0}})}))}
function un(){var a;return w(function(b){return 1==b.i?v(b,rn(),2):(a=b.j)?b.return(ln(a)):b.return(!1)})}
new th;function vn(a){if(!hm())throw a=new rm("AUTH_INVALID",{dbName:a}),fm(a),a;var b=im();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function wn(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,rn(),2);case 2:g=q.j;if(!g)throw h=wm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),fm(h),h;jm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:vn(a);va(q,3);return v(q,fn(k,g),5);case 5:return v(q,Ym(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=xa(q),va(q,7),v(q,gn(k.actualName,g),9);case 9:wa(q,
8);break;case 7:xa(q);case 8:throw m;}})}
function xn(a,b,c){c=void 0===c?{}:c;return wn(a,b,!1,c)}
function yn(a,b,c){c=void 0===c?{}:c;return wn(a,b,!0,c)}
function zn(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return v(e,rn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();jm(a);d=vn(a);return v(e,Zm(d.actualName,b),3)}return v(e,gn(d.actualName,c),0)})}
function An(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?v(e,Zm(d.actualName,b),2):v(e,gn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Bn(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return v(d,rn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();jm("LogsDatabaseV2");return v(d,jn(b),3)}c=d.j;return v(d,An(c,a,b),0)})}
function Cn(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return v(d,rn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();jm(a);return v(d,Zm(a,b),3)}return v(d,gn(a,c),0)})}
;function Dn(a){this.Sa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.Aa=function(){};
this.now=Date.now;this.Ha=!1;var b;this.mc=null!=(b=a.mc)?b:100;var c;this.ic=null!=(c=a.ic)?c:1;var d;this.fc=null!=(d=a.fc)?d:2592E6;var e;this.dc=null!=(e=a.dc)?e:12E4;var f;this.hc=null!=(f=a.hc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.Xa=!!a.Xa;var h;this.Va=null!=(h=a.Va)?h:.1;var k;this.cb=null!=(k=a.cb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Aa&&(this.Aa=a.Aa);a.Ha&&(this.Ha=a.Ha);a.Sa&&(this.Sa=a.Sa);this.I=a.I;this.ba=a.ba;this.O=a.O;this.M=a.M;this.ia=a.ia;this.xb=
a.xb;this.wb=a.wb;En(this)&&(!this.I||this.I("networkless_logging"))&&Fn(this)}
function Fn(a){En(a)&&!a.Ha&&(a.i=!0,a.Xa&&Math.random()<=a.Va&&a.O.Ac(a.H),Gn(a),a.M.L()&&a.Ma(),a.M.W(a.xb,a.Ma.bind(a)),a.M.W(a.wb,a.Ib.bind(a)))}
l=Dn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(En(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.H).then(function(e){d.id=e;c.M.L()&&Hn(c,d)}).catch(function(e){Hn(c,d);
In(c,e)})}else this.ia(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(En(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.L()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return v(k,d.O.set(e,d.H).catch(function(m){In(d,m)}),2);
f(g,h);k.i=0})}}this.ia(a,b,e.skipRetry)}else this.O.set(e,this.H).catch(function(g){d.ia(a,b,e.skipRetry);
In(d,g)})}else this.ia(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(En(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.za(d.id,c.H):e=!0;c.M.ha&&c.I&&c.I("vss_network_hint")&&c.M.ha(!0);f(g,h)};
this.ia(d.url,d.options);this.O.set(d,this.H).then(function(g){d.id=g;e&&c.O.za(d.id,c.H)}).catch(function(g){In(c,g)})}else this.ia(a,b)};
l.Ma=function(){var a=this;if(!En(this))throw wm("throttleSend");this.j||(this.j=this.ba.S(function(){var b;return w(function(c){if(1==c.i)return v(c,a.O.Tb("NEW",a.H),2);if(3!=c.i)return b=c.j,b?v(c,Hn(a,b),3):(a.Ib(),c.return());a.j&&(a.j=0,a.Ma());c.i=0})},this.mc))};
l.Ib=function(){this.ba.aa(this.j);this.j=0};
function Hn(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!En(a))throw c=wm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.Nc(b.id,a.H),3);case 3:(d=e.j)?b=d:a.Aa(Error("The request cannot be found in the database."));case 2:if(Jn(a,b,a.fc)){e.u(4);break}a.Aa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.za(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Kn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.za(b.id,a.H),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Kn(a,b){if(!En(a))throw wm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=Ln(f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.cb)){m.u(2);break}if(!a.M.ja){m.u(3);break}return v(m,a.M.ja(),3);case 3:if(a.M.L()){m.u(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.zb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.cb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.ic?v(m,a.O.zb(b.id,a.H),12):v(m,a.O.za(b.id,a.H),8);case 12:a.ba.S(function(){a.M.L()&&a.Ma()},a.hc);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.za(b.id,a.H),2);a.M.ha&&a.I&&a.I("vss_network_hint")&&a.M.ha(!0);d(e,f);h.i=0})};
return b}
function Jn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Gn(a){if(!En(a))throw wm("retryQueuedRequests");a.O.Tb("QUEUED",a.H).then(function(b){b&&!Jn(a,b,a.dc)?a.ba.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.zb(b.id,a.H),2);Gn(a);c.i=0})}):a.M.L()&&a.Ma()})}
function In(a,b){a.pc&&!a.M.L()?a.pc(b):a.handleError(b)}
function En(a){return!!a.H||a.Sa}
function Ln(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Mn(a,b){this.version=a;this.args=b}
;function Nn(a,b){this.topic=a;this.i=b}
Nn.prototype.toString=function(){return this.topic};var On=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ea;K.prototype.publish=K.prototype.qa;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",On);var Pn=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Pn);var Qn=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Qn);var Rn=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Rn);
z("ytPubsub2Pubsub2SkipSubKey",null);function Sn(a,b){var c=Tn();c&&c.publish.call(c,a.toString(),a,b)}
function Un(a){var b=Vn,c=Tn();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Pn[d])try{if(f&&b instanceof Nn&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.oa){var m=new h;h.oa=m.version}var q=h.oa}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var t=q.construct;
var x=k.args,u=x.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=x[k];var D=A}else D=[];f=t.call(q,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){wk(F)}},Rn[b.toString()]?B("yt.scheduler.instance")?Nh.S(g):Qk(g,0):g())});
Pn[d]=!0;Qn[b.toString()]||(Qn[b.toString()]=[]);Qn[b.toString()].push(d);return d}
function Wn(){var a=Xn,b=Un(function(c){a.apply(void 0,arguments);Yn(b)});
return b}
function Yn(a){var b=Tn();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete Pn[c]}))}
function Tn(){return B("ytPubsub2Pubsub2Instance")}
;function Zn(a,b){an.call(this,a,b);this.options=b;jm(a)}
r(Zn,an);function $n(a,b){var c;return function(){c||(c=new Zn(a,b));return c}}
Zn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ab?yn:xn)(a,b,Object.assign({},c))};
Zn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ab?Cn:zn)(this.name,a)};
function ao(a,b){return $n(a,b)}
;var bo;
function co(){if(bo)return bo();var a={};bo=ao("LogsDatabaseV2",{Ja:(a.LogsRequestsStore={jb:2},a),Ab:!1,upgrade:function(b,c,d){c(2)&&Km(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return bo()}
;function eo(a){return cn(co(),a)}
function fo(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,eo(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,Mm(d,e),3);f=g.j;c.pd=P();go(c);return g.return(f)})}
function ho(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,eo(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Jm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return Vm(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.pd=P();go(c);return m.return(k)})}
function io(a,b){var c;return w(function(d){if(1==d.i)return v(d,eo(b),2);c=d.j;return d.return(Jm(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Gm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function jo(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return v(e,eo(b),2);d=e.j;return e.return(Jm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Gm(g.i.put(h,void 0)).then(function(){return h})):Am.resolve(void 0)})}))})}
function ko(a,b){var c;return w(function(d){if(1==d.i)return v(d,eo(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function lo(a){var b,c;return w(function(d){if(1==d.i)return v(d,eo(a),2);b=d.j;c=P()-2592E6;return v(d,Jm(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return Sm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function mo(){return w(function(a){return v(a,Bn(),0)})}
function go(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Sn("nwl_transaction_latency_payload",a)}
;var no={},oo=ao("ServiceWorkerLogsDatabase",{Ja:(no.SWHealthLog={jb:1},no),Ab:!0,upgrade:function(a,b){b(1)&&Km(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function po(a){return cn(oo(),a)}
function qo(a){var b,c;return w(function(d){if(1==d.i)return v(d,po(a),2);b=d.j;c=P()-2592E6;return v(d,Jm(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return Sm(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ro(a){var b;return w(function(c){if(1==c.i)return v(c,po(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var so={},to=0;
function uo(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)$k(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))$k(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.o){var e=kc(lc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(zc),h=yc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(x){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var t=!0;break b}}catch(x){}t=!1}b=t?!0:!1}else b=!1;b||vo(a)}}
function vo(a){var b=new Image,c=""+to++;so[c]=b;b.onload=b.onerror=function(){delete so[c]};
b.src=a}
;function wo(){this.i=new Map;this.j=!1}
function xo(){if(!wo.i){var a=B("yt.networkRequestMonitor.instance")||new wo;z("yt.networkRequestMonitor.instance",a);wo.i=a}return wo.i}
wo.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
wo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
wo.prototype.removeParams=function(a){return a.split("?")[0]};
wo.prototype.removeParams=wo.prototype.removeParams;wo.prototype.isEndpointCFR=wo.prototype.isEndpointCFR;wo.prototype.requestComplete=wo.prototype.requestComplete;wo.getInstance=xo;var yo;function zo(){yo||(yo=new Gl("yt.offline"));return yo}
function Ao(a){if(M("offline_error_handling")){var b=zo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);zo().set("errors",b,2592E3,!0)}}
function Bo(){if(M("offline_error_handling")){var a=zo().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new R(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;wk(c)}zo().set("errors",{},2592E3,!0)}}}
;var Co=qk("network_polling_interval",3E4);function Do(){Ue.call(this);var a=this;this.G=0;this.v=this.m=!1;this.l=this.rb();M("use_shared_nsm")?(this.j=Mh(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.j.W("networkstatus-online",function(){a.l=!0;a.v&&Bo()}),this.j.W("networkstatus-offline",function(){a.l=!1}))):(Eo(this),Fo(this))}
r(Do,Ue);function Go(){if(!Do.i){var a=B("yt.networkStatusManager.instance")||new Do;z("yt.networkStatusManager.instance",a);Do.i=a}return Do.i}
l=Do.prototype;l.L=function(){if(M("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.L()}return this.l};
l.ha=function(a){if(M("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.Oc=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.G||Ho(this))};
l.rb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Ec=function(){this.v=!0};
l.W=function(a,b){return M("use_shared_nsm")&&this.j?this.j.W(a,b):Ue.prototype.W.call(this,a,b)};
function Fo(a){window.addEventListener("online",function(){return w(function(b){if(1==b.i)return v(b,a.ja(),2);a.v&&Bo();b.i=0})})}
function Eo(a){window.addEventListener("offline",function(){return w(function(b){return v(b,a.ja(),0)})})}
function Ho(a){a.G=Pl(function(){return w(function(b){if(1==b.i)return a.l?a.rb()||!a.m?b.u(3):v(b,a.ja(),3):v(b,a.ja(),3);Ho(a);b.i=0})},Co)}
l.ja=function(a){var b=this;if(M("use_shared_nsm")&&this.j){var c=Kh(this.j,a);c.then(function(d){M("use_cfr_monitor")&&xo().requestComplete("generate_204",d)});
return c}return this.s?this.s:this.s=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,va(k,2,3),e&&(b.B=Nh.S(function(){e.abort()},a||2E4)),v(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:Aa(k);M("use_cfr_monitor")&&xo().requestComplete("generate_204",h);b.s=void 0;b.B&&Nh.aa(b.B);h!==b.l&&(b.l=h,b.l&&b.m?Ve(b,"ytnetworkstatus-online"):b.m&&Ve(b,"ytnetworkstatus-offline"));d(h);Ba(k);break;case 2:xa(k),h=!1,k.u(3)}})})};
Do.prototype.sendNetworkCheckRequest=Do.prototype.ja;Do.prototype.listen=Do.prototype.W;Do.prototype.enableErrorFlushing=Do.prototype.Ec;Do.prototype.getWindowStatus=Do.prototype.rb;Do.prototype.monitorNetworkStatusChange=Do.prototype.Oc;Do.prototype.networkStatusHint=Do.prototype.ha;Do.prototype.isNetworkAvailable=Do.prototype.L;Do.getInstance=Go;function Io(a){a=void 0===a?{}:a;Ue.call(this);var b=this;this.l=this.B=0;this.m="ytnetworkstatus-offline";this.s="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.s="networkstatus-online");this.j=Go();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Pb);a.Yb&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.j))a.fb?(this.fb=a.fb,c(this.s,
function(){Jo(b,"publicytnetworkstatus-online")}),c(this.m,function(){Jo(b,"publicytnetworkstatus-offline")})):(c(this.s,function(){Ve(b,"publicytnetworkstatus-online")}),c(this.m,function(){Ve(b,"publicytnetworkstatus-offline")}))}
r(Io,Ue);Io.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Io.prototype.ha=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Io.prototype.ja=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&xo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ha((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.L())})):c?d.return(c(a)):d.return(!0)})};
function Jo(a,b){a.fb?a.l?(Nh.aa(a.B),a.B=Nh.S(function(){a.v!==b&&(Ve(a,b),a.v=b,a.l=P())},a.fb-(P()-a.l))):(Ve(a,b),a.v=b,a.l=P()):Ve(a,b)}
;var Ko;function Lo(){Dn.call(this,{O:{Ac:lo,za:ko,Tb:ho,Nc:io,zb:jo,set:fo},M:Mo(),handleError:wk,Aa:xk,ia:No,now:P,pc:Ao,ba:Ul(),xb:"publicytnetworkstatus-online",wb:"publicytnetworkstatus-offline",Xa:!0,Va:.1,cb:qk("potential_esf_error_limit",10),I:M,Ha:!(hm()&&Oo())});this.l=new th;M("networkless_immediately_drop_all_requests")&&mo();Cn("LogsDatabaseV2")}
r(Lo,Dn);function Po(){var a=B("yt.networklessRequestController.instance");a||(a=new Lo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&rn().then(function(b){a.H=b;Fn(a);a.l.resolve();a.Xa&&Math.random()<=a.Va&&a.H&&qo(a.H);M("networkless_immediately_drop_sw_health_store")&&Qo(a)}));
return a}
Lo.prototype.writeThenSend=function(a,b){b||(b={});hm()||(this.i=!1);Dn.prototype.writeThenSend.call(this,a,b)};
Lo.prototype.sendThenWrite=function(a,b,c){b||(b={});hm()||(this.i=!1);Dn.prototype.sendThenWrite.call(this,a,b,c)};
Lo.prototype.sendAndWrite=function(a,b){b||(b={});hm()||(this.i=!1);Dn.prototype.sendAndWrite.call(this,a,b)};
Lo.prototype.awaitInitialization=function(){return this.l.promise};
function Qo(a){var b;w(function(c){if(!a.H)throw b=wm("clearSWHealthLogsDb"),b;return c.return(ro(a.H).catch(function(d){a.handleError(d)}))})}
function No(a,b,c){M("use_cfr_monitor")&&Ro(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?uo(a):Xk(a,b)}
function Mo(){Ko||(Ko=new Io({Yb:!0,Pb:!0}));return Ko}
function Ro(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){xo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){xo().requestComplete(a,!0);d(e,f)}}
function Oo(){return"www.youtube-nocookie.com"!==mc(document.location.toString())}
;var So=!1,To=0,Uo=0,Vo,Wo=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:So,potentialEsfErrorCounter:Uo};z("ytNetworklessLoggingInitializationOptions",Wo);
function Xo(){var a;w(function(b){switch(b.i){case 1:return v(b,rn(),2);case 2:a=b.j;if(!a||!hm()&&!M("nwl_init_require_datasync_id_killswitch")||!Oo()){b.u(0);break}So=!0;Wo.isNwlInitialized=So;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,Po().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,Cn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,lo(a),8);case 8:return v(b,qo(a),7);case 7:Yo();Zo().L()&&$o();Zo().W("publicytnetworkstatus-online",
$o);Zo().W("publicytnetworkstatus-offline",ap);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,bp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,mo(),0);b.u(0)}})}
function cp(a,b){function c(d){var e=Zo().L();if(!dp()||!d||e&&M("vss_networkless_bypass_write"))ep(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};fo(f,d).then(function(g){f.id=g;Zo().L()&&fp(f)}).catch(function(g){fp(f);
Zo().L()?wk(g):Ao(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?rn().then(function(d){c(d)}):c(qn())}
function gp(a,b){function c(d){if(dp()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&xo().requestComplete(e.url,!0);void 0!==e.id?ko(e.id,d):f=!0;M("vss_network_hint")&&Zo().ha(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){xo().requestComplete(e.url,!1);h(k,m)}}ep(e.url,e.options);
fo(e,d).then(function(k){e.id=k;f&&ko(e.id,d)}).catch(function(k){Zo().L()?wk(k):Ao(k)})}else ep(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?rn().then(function(d){c(d)}):c(qn())}
function $o(){var a=qn();if(!a)throw wm("throttleSend");To||(To=Nh.S(function(){var b;return w(function(c){if(1==c.i)return v(c,ho("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,fp(b),3):(ap(),c.return());To&&(To=0,$o());c.i=0})},100))}
function ap(){Nh.aa(To);To=0}
function fp(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=qn();if(!b)throw c=wm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,io(a.id,b),3);case 3:(d=e.j)?a=d:xk(Error("The request cannot be found in the database."));case 2:if(hp(a,2592E6)){e.u(4);break}xk(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,ko(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=ip(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,ko(a.id,b),8);case 8:ep(a.url,a.options,!!a.skipRetry),e.i=0}})}
function ip(a){var b=qn();if(!b)throw wm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&xo().requestComplete(a.url,!1);g=Ln(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&jp()<=qk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||xo().isEndpointCFR(a.url))){m.u(3);break}return v(m,Zo().ja(),3);case 3:if(Zo().L()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,jo(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&jp()>qk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&Wo.potentialEsfErrorCounter++;Uo++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,jo(a.id,b),12):v(m,ko(a.id,b),8);case 12:Nh.S(function(){Zo().L()&&$o()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&xo().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,ko(a.id,b),2);M("vss_network_hint")&&Zo().ha(!0);d(e,f);h.i=0})};
return a}
function hp(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Yo(){var a=qn();if(!a)throw wm("retryQueuedRequests");ho("QUEUED",a).then(function(b){b&&!hp(b,12E4)?Nh.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,jo(b.id,a),2);Yo();c.i=0})}):Zo().L()&&$o()})}
function bp(){var a,b;return w(function(c){a=qn();if(!a)throw b=wm("clearSWHealthLogsDb"),b;return c.return(ro(a).catch(function(d){wk(d)}))})}
function Zo(){if(M("use_new_nwl"))return Mo();Vo||(Vo=new Io({Yb:!0,Pb:!0}));return Vo}
function ep(a,b,c){c&&0===Object.keys(b).length?uo(a):Xk(a,b)}
function dp(){return B("ytNetworklessLoggingInitializationOptions")?Wo.isNwlInitialized:So}
function jp(){return B("ytNetworklessLoggingInitializationOptions")?Wo.potentialEsfErrorCounter:Uo}
;function kp(a){var b=this;this.config_=null;a?this.config_=a:wl()&&(this.config_=xl());Pl(function(){Ml(b)},5E3)}
kp.prototype.isReady=function(){!this.config_&&wl()&&(this.config_=xl());return!!this.config_};
function Nl(a,b,c,d){function e(A){A=void 0===A?!1:A;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Kl(b,c,m,k)),D)){var F=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(O,Q){Ll(D);F(O,Q)};
c.onFetchSuccess=function(O,Q){Ll(D);N(O,Q)}}try{A&&d.retry&&!d.Zb.bypassNetworkless?(g.method="POST",d.Zb.writeThenSend?M("use_new_nwl_wts")?Po().writeThenSend(u,g):cp(u,g):M("use_new_nwl_saw")?Po().sendAndWrite(u,g):gp(u,g)):(g.method="POST",g.postParams||(g.postParams={}),Xk(u,g))}catch(O){if("InvalidAccessError"==O.name)D&&(Ll(D),D=0),xk(Error("An extension is blocking network request."));
else throw O;}D&&Pl(function(){Ml(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&xk(new R("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new R("innertube xhrclient not ready",b,c,d);wk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,D){if(d.onError)d.onError(D)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Kc)&&(h=f);var k=a.config_.Mc||!1,m=El(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},x=a.config_.Lc&&f;x=x&&f.startsWith("Bearer");x||(t.key=a.config_.innertubeApiKey);var u=Jk(""+h+q,t||{},!0);M("use_new_nwl")&&Po().i||!M("use_new_nwl")&&
dp()?pn().then(function(A){e(A)}):e(!1)}
;var lp={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},mp={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var np=0,Ep=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++np});var cq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function dq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in cq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function eq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
dq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
dq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
dq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",ob);var fq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",fq);
function gq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var hq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function iq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=gq(a,b,c,d);if(e)return e;e=++fq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new dq(h);if(!df(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new dq(h);
h.currentTarget=a;return c.call(a,h)};
g=vk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function jq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;var kq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function lq(a){this.B=a;this.j=null;this.m=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.o=0;this.K=iq(window,"mousemove",Xa(this.P,this));a=Xa(this.G,this);"function"===typeof a&&(a=vk(a));this.R=window.setInterval(a,25)}
Za(lq,J);lq.prototype.P=function(a){void 0===a.i&&eq(a);var b=a.i;void 0===a.j&&eq(a);this.j=new $e(b,a.j)};
lq.prototype.G=function(){if(this.j){var a=kq();if(0!=this.m){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.l[this.o]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.B();this.s=d}this.m=a;this.v=this.j;this.o=(this.o+1)%4}};
lq.prototype.D=function(){window.clearInterval(this.R);jq(this.K)};var mq={};
function nq(a){var b=void 0===a?{}:a;a=void 0===b.Sc?!1:b.Sc;b=void 0===b.Fc?!0:b.Fc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&oq();iq(document,"keydown",oq);iq(document,"keyup",oq);iq(document,"mousedown",oq);iq(document,"mouseup",oq);a?iq(window,"touchmove",function(){pq("touchmove",200)},{passive:!0}):(iq(window,"resize",function(){pq("resize",200)}),b&&iq(window,"scroll",function(){pq("scroll",200)}));
new lq(function(){pq("mouse",100)});
iq(document,"touchstart",oq,{passive:!0});iq(document,"touchend",oq,{passive:!0})}}
function pq(a,b){mq[a]||(mq[a]=!0,Nh.S(function(){oq();mq[a]=!1},b))}
function oq(){null==B("_lact",window)&&nq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function qq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var rq=y.ytPubsubPubsubInstance||new K,sq=y.ytPubsubPubsubSubscribedKeys||{},tq=y.ytPubsubPubsubTopicToKeys||{},uq=y.ytPubsubPubsubIsSynchronous||{};function vq(a,b){var c=wq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){sq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{uq[a]?f():Qk(f,0)}catch(g){wk(g)}},void 0);
sq[d]=!0;tq[a]||(tq[a]=[]);tq[a].push(d);return d}return 0}
function xq(a){var b=wq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete sq[c]}))}
function yq(a,b){var c=wq();c&&c.publish.apply(c,arguments)}
function zq(a){var b=wq();if(b)if(b.clear(a),a)Aq(a);else for(var c in tq)Aq(c)}
function wq(){return y.ytPubsubPubsubInstance}
function Aq(a){tq[a]&&(a=tq[a],fb(a,function(b){sq[b]&&delete sq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ea;K.prototype.publish=K.prototype.qa;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",rq);z("ytPubsubPubsubTopicToKeys",tq);z("ytPubsubPubsubIsSynchronous",uq);z("ytPubsubPubsubSubscribedKeys",sq);var Bq=y.window;Bq.ytExports||(Bq.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var Cq=qk("initial_gel_batch_timeout",2E3),Dq=Math.pow(2,16)-1,Eq=!1,Fq=void 0;function Gq(){this.l=this.i=this.j=0}
var Hq=new Gq,Iq=new Gq,Jq=!0,Kq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Kq);var Lq=new Map,Mq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Mq);var Nq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Nq);var Oq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Oq);
function Pq(){M("jspb_with_transport_leader")&&!Bq.ytExports.logging.transport.leaderChosen&&(Eq=Bq.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){Qq(void 0,void 0,!0)}))}
function Rq(a,b){Pq();if("log_event"===a.endpoint){Sq(a);var c=Tq(a),d=Kq.get(c)||[];Kq.set(c,d);d.push(a.payload);Uq(b,d,c)}}
function Vq(a,b){Pq();if("log_event"===a.endpoint){Sq(void 0,a);var c=Tq(a,!0);if(M("jspb_with_transport_leader")&&Eq){var d=Lq.get(c)||[];Lq.set(c,d);Bq.ytExports.logging.transport.leaderQueueLength++;d.push(a.payload);Uq(b,d,c,!0)}else d=Mq.get(c)||[],Mq.set(c,d),a=a.payload.toJSON(),d.push(a),Uq(b,d,c,!0)}}
function Uq(a,b,c,d){d=void 0===d?!1:d;a&&(Fq=new a);a=qk("tvhtml5_logging_max_batch")||qk("web_logging_max_batch")||100;var e=P(),f=d?Iq.l:Hq.l,g=Mq.get(c)||[];M("jspb_with_transport_leader")&&(Eq&&b.length+g.length>=a||!Eq&&Bq.ytExports.logging.transport.leaderQueueLength+b.length>=a)||b.length>=a?Qq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Wq(d),d?Iq.l=e:Hq.l=e)}
function Xq(a,b){Pq();if("log_event"===a.endpoint){Sq(a);var c=Tq(a),d=new Map;d.set(c,[a.payload]);b&&(Fq=new b);return new qf(function(e,f){Fq&&Fq.isReady()?Yq(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Zq(a,b){Pq();if("log_event"===a.endpoint){Sq(void 0,a);var c=Tq(a,!0),d=new Map,e=new Map;M("jspb_with_transport_leader")&&Eq?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(Fq=new b);return new qf(function(f){Fq&&Fq.isReady()?$q(d,e,f,{bypassNetworkless:!0},!0):f()})}}
function Tq(a,b){var c="";if(a.Ga)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Jj;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Pd(d,2,Kj,c.playlistId);Oq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Nq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Qq(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new qf(function(d,e){c?(Rk(Iq.j),Rk(Iq.i),Iq.i=0):(Rk(Hq.j),Rk(Hq.i),Hq.i=0);if(M("jspb_with_transport_leader")&&!Eq)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(Fq&&Fq.isReady())if(void 0!==b)if(c){e=new Map;var f=new Map,g=Mq.get(b)||[];e.set(b,g);M("jspb_with_transport_leader")&&(g=Lq.get(b)||[],f.set(b,g));$q(e,f,d,a);M("jspb_with_transport_leader")&&Lq.delete(b);Mq.delete(b)}else f=new Map,g=Kq.get(b)||[],f.set(b,
g),Yq(f,d,e,a),Kq.delete(b);else c?($q(Mq,Lq,d,a),Mq.clear(),M("jspb_with_transport_leader")&&Lq.clear()):(Yq(Kq,d,e,a),Kq.clear());else Wq(c),d()})}
function Wq(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Hq.i||a&&!Iq.i)){var b=Qk(function(){Qq({writeThenSend:!0},void 0,a)},6E4);
a?Iq.i=b:Hq.i=b}Rk(a?Iq.j:Hq.j);b=L("LOGGING_BATCH_TIMEOUT",qk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Jq&&(b=Cq);b=Qk(function(){Qq({writeThenSend:!0},void 0,a)},b);
a?Iq.j=b:Hq.j=b}
function Yq(a,b,c,d,e){var f=Fq;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=ub({context:yl(f.config_||xl())});k.events=q;(q=Nq[m])&&ar(k,m,q);delete Nq[m];m="visitorOnlyApprovedKey"===m;br(k,g,m);cr(d);q=function(){h--;h||b()};
var t=function(){h--;h||b()};
try{Nl(f,"log_event",k,dr(d,m,q,t,e)),Jq=!1}catch(x){wk(x),c()}}}
function $q(a,b,c,d,e){var f=Fq;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size+b.size,k=new Map([].concat(ia(a),ia(b)));k=p(k);for(var m=k.next();!m.done;m=k.next()){var q=p(m.value).next().value,t=a.get(q),x=b.get(q)||[];m=new Lj;var u=Dl(f.config_||xl());G(m,Qi,1,u);t=t?er(t):[];t=p(t);for(u=t.next();!u.done;u=t.next())Wd(m,3,Fj,u.value);x=p(x);for(t=x.next();!t.done;t=x.next())Wd(m,3,Fj,t.value);(x=Oq[q])&&fr(m,q,x);delete Oq[q];q="visitorOnlyApprovedKey"===q;gr(m,g,q);cr(d);m=Zd(m);q=dr(d,q,
function(){Bq.ytExports.logging.transport.leaderQueueLength=0;h--;h||c()},function(){Bq.ytExports.logging.transport.leaderQueueLength=0;
h--;h||c()},e);
q.headers={"Content-Type":"application/json+protobuf"};q.postBodyFormat="JSPB";q.postBody=m;Nl(f,"log_event","",q);Jq=!1}}
function cr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function dr(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Zb:a,Ga:b,gq:!!e,headers:{},postBodyFormat:"",postBody:""}}
function br(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=hr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function gr(a,b,c){E(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=hr();var d=new Ij;E(d,1,b);E(d,2,c);G(a,Ij,5,d)}}
function hr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Dq/2));a++;a>Dq&&(a=1);nk("BATCH_CLIENT_COUNTER",a);return a}
function ar(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function fr(a,b,c){if(Ld(c,1===Qd(c,Kj)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,Jj,4,c);a=Rd(a,Qi,1)||new Qi;c=Rd(a,Oi,3)||new Oi;var e=new Ni;e.setToken(b);E(e,1,d);Wd(c,12,Ni,e);G(a,Oi,3,c)}
function er(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Fj(a[c]))}catch(d){wk(new R("Transport failed to deserialize "+String(a[c])))}return b}
function Sq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var ir=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",ir);
function jr(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(mp[a]||lp[a])return}else if(M("lr_drop_other_payloads")&&mp[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=qq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ca&&(a=e.context,b=d.ca,b={index:kr(b),groupKey:b},a.sequence=b,d.Qb&&delete ir[d.ca]);(d.jc?Xq:Rq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
Ga:d.Ga},c)}
function lr(a){Qq(void 0,void 0,void 0===a?!1:a)}
function kr(a){ir[a]=a in ir?ir[a]+1:0;return ir[a]}
;function em(a,b,c){c=void 0===c?{}:c;var d=kp;L("ytLoggingEventsDefaultDisabled",!1)&&kp==kp&&(d=null);jr(a,b,d,c)}
;var mr=[{vb:function(a){return"Cannot read property '"+a.key+"'"},
bb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{vb:function(a){return"Cannot call '"+a.key+"'"},
bb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{vb:function(a){return a.key+" is not defined"},
bb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var or={na:[],ma:[{callback:nr,weight:500}]};function nr(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function pr(){this.ma=[];this.na=[]}
var qr;function rr(){if(!qr){var a=qr=new pr;a.na.length=0;a.ma.length=0;or.na&&a.na.push.apply(a.na,or.na);or.ma&&a.ma.push.apply(a.ma,or.ma)}return qr}
;var sr=new K;function tr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ur(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ur(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ur(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ur(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function vr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=wr(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=tr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?wr(e+".ve",f,g,h):0;d+=g;d+=wr(e,a[e],b,c);if(500<d)break}}else c[b]=xr(a),d+=c[b].length;else c[b]=xr(a),d+=c[b].length;return d}
function wr(a,b,c,d){c+="."+a;a=xr(b);d[c]=a;return c.length+a.length}
function xr(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var yr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",yr);function zr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());E(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=qq();d=new Ej;E(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ca){e=c.ca;var f=kr(e),g=new Dj;E(g,2,f);E(g,1,e);G(d,Dj,3,g);c.Qb&&delete yr[c.ca]}G(a,Ej,33,d);(c.jc?Zq:Vq)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Ga:c.Ga},b)}
;function Ar(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);zr(a,c?null:kp,b)}
;function Br(a,b){var c=new Fj;Ud(c,sj,72,Gj,a);Ar(c,b)}
function Cr(a,b,c){var d=new Fj;Ud(d,rj,73,Gj,a);c?zr(d,c,b):Ar(d,b)}
function Dr(a,b,c){var d=new Fj;Ud(d,qj,78,Gj,a);c?zr(d,c,b):Ar(d,b)}
function Er(a,b,c){var d=new Fj;Ud(d,tj,208,Gj,a);c?zr(d,c,b):Ar(d,b)}
function Fr(a,b,c){var d=new Fj;Ud(d,jj,156,Gj,a);c?zr(d,c,b):Ar(d,b)}
function Gr(a,b,c){var d=new Fj;Ud(d,nj,215,Gj,a);c?zr(d,c,b):Ar(d,b)}
function Hr(a,b,c){var d=new Fj;Ud(d,fj,111,Gj,a);c?zr(d,c,b):Ar(d,b)}
;var Ir=new Set,Jr=0,Kr=0,Lr=0,Mr=[],Nr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function dm(a){Or(a)}
function Pr(a){Or(a,"WARNING")}
function Or(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Jr)){var m=Mr,q=pe(a),t=q.message||"Unknown Error",x=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(x+": "+t)){var A=u.split("\n");A.shift();u=A.join("\n")}var D=q.lineNumber||"Not available",F=q.fileName||"Not available",N=u,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var Q=0;Q<a.args.length&&!(O=vr(a.args[Q],"params."+Q,g,O),500<=O);Q++);else if(a.hasOwnProperty("params")&&
a.params){var ba=a.params;if("object"===typeof a.params)for(var ca in ba){if(ba[ca]){var V="params."+ca,Ta=xr(ba[ca]);g[V]=Ta;O+=V.length+Ta.length;if(500<O)break}}else g.params=xr(ba)}if(m.length)for(var za=0;za<m.length&&!(O=vr(m[za],"params.context."+za,g,O),500<=O);za++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:t,name:x,lineNumber:D,fileName:F,stack:N,params:g,sampleWeight:1},Fa=Number(a.columnNumber);isNaN(Fa)||(H.lineNumber=H.lineNumber+
":"+Fa);if("IGNORED"===a.level)var ya=0;else a:{for(var op=rr(),pp=p(op.na),Pj=pp.next();!Pj.done;Pj=pp.next()){var qp=Pj.value;if(H.message&&H.message.match(qp.oq)){ya=qp.weight;break a}}for(var rp=p(op.ma),Qj=rp.next();!Qj.done;Qj=rp.next()){var sp=Qj.value;if(sp.callback(H)){ya=sp.weight;break a}}ya=1}H.sampleWeight=ya;for(var tp=p(mr),Rj=tp.next();!Rj.done;Rj=tp.next()){var Sj=Rj.value;if(Sj.bb[H.name])for(var up=p(Sj.bb[H.name]),Tj=up.next();!Tj.done;Tj=up.next()){var vp=Tj.value,Gg=H.message.match(vp.regexp);
if(Gg){H.params["params.error.original"]=Gg[0];for(var Uj=vp.groups,wp={},od=0;od<Uj.length;od++)wp[Uj[od]]=Gg[od+1],H.params["params.error."+Uj[od]]=Gg[od+1];H.message=Sj.vb(wp);break}}}H.params||(H.params={});var xp=rr();H.params["params.errorServiceSignature"]="msg="+xp.na.length+"&cb="+xp.ma.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Ir.has(H.message)){if("ERROR"===h){sr.qa("handleError",H);if(M("record_app_crashed_web")&&0===Lr&&1===H.sampleWeight)if(Lr++,M("errors_via_jspb")){var Vj=new cj;E(Vj,1,1);if(!M("report_client_error_with_app_crash_ks")){var yp=new Yi;E(yp,1,H.message);var zp=new Zi;G(zp,Yi,3,yp);var Ap=new $i;G(Ap,Zi,5,zp);var Bp=new aj;G(Bp,$i,9,Ap);G(Vj,aj,4,Bp)}var Cp=new Fj;Ud(Cp,cj,20,
Gj,Vj);Ar(Cp)}else{var Dp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Dp.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});em("appCrashed",Dp)}Kr++}else"WARNING"===h&&sr.qa("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var ue=h;if(M("errors_via_jspb")){if(Qr())var Fp=void 0;else{var pd=new Vi;E(pd,1,H.stack);H.fileName&&E(pd,4,H.fileName);var zb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==zb.length&&(1!==
zb.length||isNaN(Number(zb[0]))?2!==zb.length||isNaN(Number(zb[0]))||isNaN(Number(zb[1]))||(E(pd,2,Number(zb[0])),E(pd,3,Number(zb[1]))):E(pd,2,Number(zb[0])));var tc=new Yi;E(tc,1,H.message);E(tc,3,H.name);E(tc,6,H.sampleWeight);"ERROR"===ue?E(tc,2,2):"WARNING"===ue?E(tc,2,1):E(tc,2,0);var Wj=new Wi;E(Wj,1,!0);Ud(Wj,Vi,3,Xi,pd);var Wb=new Si;E(Wb,3,window.location.href);for(var Gp=L("FEXP_EXPERIMENTS",[]),Xj=0;Xj<Gp.length;Xj++){var Av=Gp[Xj];xd(Wb);Md(Wb,5).push(Av)}var Yj=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!ok()&&Yj)for(var Hp=p(Object.keys(Yj)),uc=Hp.next();!uc.done;uc=Hp.next()){var Ip=uc.value,Zj=new Ui;E(Zj,1,Ip);Zj.setValue(String(Yj[Ip]));Wd(Wb,4,Ui,Zj)}var ak=H.params;if(ak){var Jp=p(Object.keys(ak));for(uc=Jp.next();!uc.done;uc=Jp.next()){var Kp=uc.value,bk=new Ui;E(bk,1,"client."+Kp);bk.setValue(String(ak[Kp]));Wd(Wb,4,Ui,bk)}}var Lp=L("SERVER_NAME"),Mp=L("SERVER_VERSION");if(Lp&&Mp){var ck=new Ui;E(ck,1,"server.name");ck.setValue(Lp);Wd(Wb,4,Ui,ck);var dk=new Ui;E(dk,1,"server.version");
dk.setValue(Mp);Wd(Wb,4,Ui,dk)}var Hg=new Zi;G(Hg,Si,1,Wb);G(Hg,Wi,2,Wj);G(Hg,Yi,3,tc);Fp=Hg}var Np=Fp;if(!Np)break a;var Op=new Fj;Ud(Op,Zi,163,Gj,Np);Ar(Op)}else{if(Qr())var Pp=void 0;else{var ve={stackTrace:H.stack};H.fileName&&(ve.filename=H.fileName);var Ab=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Ab.length&&(1!==Ab.length||isNaN(Number(Ab[0]))?2!==Ab.length||isNaN(Number(Ab[0]))||isNaN(Number(Ab[1]))||(ve.lineNumber=Number(Ab[0]),ve.columnNumber=Number(Ab[1])):ve.lineNumber=
Number(Ab[0]));var ek={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===ue?ek.level="ERROR_LEVEL_ERROR":"WARNING"===ue&&(ek.level="ERROR_LEVEL_WARNNING");var Bv={isObfuscated:!0,browserStackInfo:ve},qd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(qd.experimentIds=L("FEXP_EXPERIMENTS"));var fk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!ok()&&fk)for(var Qp=p(Object.keys(fk)),vc=Qp.next();!vc.done;vc=Qp.next()){var Rp=
vc.value;qd.kvPairs.push({key:Rp,value:String(fk[Rp])})}var gk=H.params;if(gk){var Sp=p(Object.keys(gk));for(vc=Sp.next();!vc.done;vc=Sp.next()){var Tp=vc.value;qd.kvPairs.push({key:"client."+Tp,value:String(gk[Tp])})}}var Up=L("SERVER_NAME"),Vp=L("SERVER_VERSION");Up&&Vp&&(qd.kvPairs.push({key:"server.name",value:Up}),qd.kvPairs.push({key:"server.version",value:Vp}));Pp={errorMetadata:qd,stackTrace:Bv,logMessage:ek}}var Wp=Pp;if(!Wp)break a;em("clientError",Wp)}if("ERROR"===ue||M("errors_flush_gel_always_killswitch"))b:{if(M("web_fp_via_jspb")&&
(lr(!0),!M("web_fp_via_jspb_and_json")))break b;lr()}}if(!M("suppress_error_204_logging")){var we=H.params||{},Xb={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":we.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};we.version&&(Xb["client.version"]=we.version);if(Xb.postParams){H.stack&&(Xb.postParams.stack=H.stack);for(var Xp=p(Object.keys(we)),hk=Xp.next();!hk.done;hk=Xp.next()){var Yp=hk.value;
Xb.postParams["client."+Yp]=we[Yp]}var ik=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(ik)for(var Zp=p(Object.keys(ik)),jk=Zp.next();!jk.done;jk=Zp.next()){var $p=jk.value;Xb.postParams[$p]=ik[$p]}var aq=L("SERVER_NAME"),bq=L("SERVER_VERSION");aq&&bq&&(Xb.postParams["server.name"]=aq,Xb.postParams["server.version"]=bq)}Xk(L("ECATCHER_REPORT_HOST","")+"/error_204",Xb)}try{Ir.add(H.message)}catch(Zw){}Jr++}}}}
function Qr(){for(var a=p(Nr),b=a.next();!b.done;b=a.next())if(Wl(b.value.toLowerCase()))return!0;return!1}
function Rr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Sr(){this.register=new Map}
function Tr(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.rq("ABORTED")}
Sr.prototype.clear=function(){Tr(this);this.register.clear()};
var Ur=new Sr;var Vr=Date.now().toString();
function Wr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Vr)for(a=1,b=0;b<Vr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Vr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Xr=y.ytLoggingDocDocumentNonce_;Xr||(Xr=Wr(),z("ytLoggingDocDocumentNonce_",Xr));var Yr=Xr;var Zr={wh:0,ie:1,se:2,ol:3,yh:4,Ap:5,em:6,Jn:7,en:8,xn:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function $r(a){this.i=a}
function as(a){return new $r({trackingParams:a})}
$r.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
$r.prototype.getAsJspb=function(){var a=new ej;void 0!==this.i.trackingParams?E(a,1,this.i.trackingParams):(void 0!==this.i.veType&&E(a,2,this.i.veType),void 0!==this.i.veCounter&&E(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&E(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();G(a,ej,7,b)}void 0!==this.i.youtubeData&&G(a,Ci,8,this.i.jspbYoutubeData);return a};
$r.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
$r.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function bs(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function cs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ds(a){return L(cs(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",ds);function es(a){return(a=ds(void 0===a?0:a))?new $r({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function fs(){var a=L("csn-to-ctt-auth-info");a||(a={},nk("csn-to-ctt-auth-info",a));return a}
function gs(a){a=L(bs(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",gs);function hs(a,b,c){var d=fs();(c=gs(c))&&delete d[c];b&&(d[a]=b)}
function is(a){return fs()[a]}
z("yt_logging_screen.getCttAuthInfo",is);
function js(a,b,c,d){c=void 0===c?0:c;if(a!==L(bs(c))||b!==L(cs(c)))hs(a,d,c),nk(bs(c),a),nk(cs(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new fj;E(e,1,Yr);E(e,2,a);M("use_default_heartbeat_client")?Hr(e):Hr(e,void 0,kp)}else e={clientDocumentNonce:Yr,clientScreenNonce:a},M("use_default_heartbeat_client")?em("foregroundHeartbeatScreenAssociated",e):jr("foregroundHeartbeatScreenAssociated",e,kp)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
z("yt_logging_screen.setCurrentScreen",js);var ks=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",ks);function ls(a){Nj(ks,arguments)}
;var ms={he:3611,ud:27686,vd:85013,wd:23462,yd:42016,zd:62407,Ad:26926,xd:43781,Bd:51236,Cd:79148,Dd:50160,Ed:77504,Qd:87907,Rd:18630,Sd:54445,Td:80935,Ud:152172,Vd:105675,Wd:150723,Xd:37521,Yd:147285,Zd:47786,ae:98349,be:123695,ce:6827,de:29434,ee:7282,ge:124448,ke:32276,je:76278,le:147868,me:147869,ne:93911,oe:106531,pe:27259,qe:27262,re:27263,te:21759,ue:27107,we:62936,xe:49568,ye:38408,ze:80637,Ae:68727,Be:68728,Ce:80353,De:80356,Ee:74610,Fe:45707,Ge:83962,He:83970,Ie:46713,Je:89711,Ke:74612,Le:93265,
Me:74611,Ne:131380,Pe:128979,Qe:139311,Re:128978,Oe:131391,Se:105350,Ue:139312,Ve:134800,Te:131392,Xe:113533,Ye:93252,Ze:99357,bf:94521,cf:114252,df:113532,ef:94522,af:94583,ff:88E3,gf:139580,hf:93253,jf:93254,kf:94387,lf:94388,mf:93255,nf:97424,We:72502,pf:110111,qf:76019,sf:117092,tf:117093,rf:89431,uf:110466,vf:77240,wf:60508,xf:148123,yf:148124,zf:137401,Af:137402,Bf:137046,Cf:73393,Df:113534,Ef:92098,Ff:131381,Gf:84517,Hf:83759,If:80357,Jf:86113,Kf:72598,Lf:72733,Mf:107349,Nf:124275,Of:118203,
Pf:133275,Qf:152569,Rf:133274,Sf:133272,Tf:133273,Uf:133276,Vf:144507,Wf:143247,Xf:143248,Yf:143249,Zf:143250,ag:143251,cg:144401,eg:117431,dg:133797,fg:153964,gg:128572,hg:133405,ig:117429,jg:117430,kg:117432,lg:120080,mg:117259,ng:121692,og:145656,pg:145655,qg:145653,rg:145654,sg:145657,tg:132972,ug:133051,vg:133658,wg:132971,xg:97615,zg:143359,yg:143356,Bg:143361,Ag:143358,Dg:143360,Cg:143357,Eg:142303,Fg:143353,Gg:143354,Hg:144479,Ig:143355,Jg:31402,Lg:133624,Mg:146477,Ng:133623,Og:133622,Kg:133621,
Pg:84774,Qg:95117,Rg:150497,Sg:98930,Tg:98931,Ug:98932,Vg:43347,Wg:129889,Xg:149123,Yg:45474,Zg:100352,ah:84758,bh:98443,dh:117985,eh:74613,fh:74614,gh:64502,hh:136032,ih:74615,jh:74616,kh:122224,lh:74617,mh:77820,nh:74618,oh:93278,ph:93274,qh:93275,rh:93276,sh:22110,th:29433,uh:133798,vh:132295,xh:120541,zh:82047,Ah:113550,Bh:75836,Ch:75837,Dh:42352,Eh:84512,Fh:76065,Gh:75989,Lh:16623,Mh:32594,Nh:27240,Oh:32633,Ph:74858,Rh:3945,Qh:16989,Sh:45520,Th:25488,Uh:25492,Vh:25494,Wh:55760,Xh:14057,Yh:18451,
Zh:57204,ai:57203,bi:17897,ci:57205,di:18198,fi:17898,gi:17909,hi:43980,ii:46220,ji:11721,ki:147994,li:49954,mi:96369,ni:3854,oi:151633,ri:56251,si:25624,ti:152036,Li:16906,Mi:99999,Ni:68172,Oi:27068,Pi:47973,Qi:72773,Ri:26970,Si:26971,Ti:96805,Ui:17752,Vi:73233,Wi:109512,Xi:22256,Yi:14115,Zi:22696,aj:89278,bj:89277,cj:109513,dj:43278,ej:43459,fj:43464,gj:89279,hj:43717,ij:55764,jj:22255,kj:147912,lj:89281,mj:40963,nj:43277,oj:43442,pj:91824,qj:120137,rj:96367,sj:36850,tj:72694,uj:37414,vj:36851,
xj:124863,wj:121343,yj:73491,zj:54473,Aj:43375,Bj:46674,Cj:143815,Dj:139095,Ej:144402,Fj:149968,Gj:149969,Hj:32473,Ij:72901,Jj:72906,Kj:50947,Lj:50612,Mj:50613,Nj:50942,Oj:84938,Pj:84943,Qj:84939,Rj:84941,Sj:84944,Tj:84940,Uj:84942,Vj:35585,Wj:51926,Xj:79983,Yj:63238,Zj:18921,ak:63241,bk:57893,ck:41182,dk:135732,ek:33424,fk:22207,gk:42993,hk:36229,ik:22206,jk:22205,kk:18993,lk:19001,mk:18990,nk:18991,pk:18997,qk:18725,rk:19003,sk:36874,tk:44763,uk:33427,vk:67793,wk:22182,xk:37091,yk:34650,zk:50617,
Ak:47261,Bk:22287,Ck:25144,Dk:97917,Ek:62397,Fk:150871,Gk:150874,Hk:125598,Ik:137935,Jk:36961,Kk:108035,Lk:27426,Mk:27857,Nk:27846,Ok:27854,Pk:69692,Qk:61411,Rk:39299,Sk:38696,Tk:62520,Uk:36382,Vk:108701,Wk:50663,Xk:36387,Yk:14908,Zk:37533,al:105443,bl:61635,dl:62274,fl:133818,il:65702,jl:65703,kl:65701,ll:76256,ml:37671,nl:49953,pl:36216,ql:28237,rl:39553,sl:29222,ul:26107,vl:38050,wl:26108,yl:120745,xl:26109,zl:26110,Al:66881,Bl:28236,Cl:14586,Dl:57929,El:74723,Fl:44098,Gl:44099,Jl:23528,Kl:61699,
Hl:134104,Il:134103,Ll:59149,Ml:101951,Nl:97346,Ol:118051,Pl:95102,Ql:64882,Rl:119505,Sl:63595,Tl:63349,Ul:95101,Vl:75240,Wl:27039,Xl:68823,Yl:21537,Zl:83464,am:75707,bm:83113,cm:101952,dm:101953,fm:79610,gm:125755,hm:24402,im:24400,jm:32925,km:57173,lm:122502,mm:145268,nm:138480,om:64423,pm:64424,qm:33986,rm:100828,sm:129089,tm:21409,xm:135155,ym:135156,zm:135157,Am:135158,Bm:135159,Cm:135160,Dm:135161,Em:135162,Fm:135163,Gm:135164,Hm:135165,Im:135166,um:11070,vm:11074,wm:17880,Jm:14001,Lm:30709,
Mm:30707,Nm:30711,Om:30710,Pm:30708,Km:26984,Qm:146143,Rm:63648,Sm:63649,Tm:51879,Um:111059,Vm:5754,Wm:20445,Xm:151308,Ym:151152,an:130975,Zm:130976,bn:110386,cn:113746,dn:66557,fn:17310,gn:28631,hn:21589,jn:68012,kn:60480,ln:138664,mn:141121,nn:31571,pn:141978,qn:150105,rn:150106,sn:150107,tn:150108,un:76980,vn:41577,wn:45469,yn:38669,zn:13768,An:13777,Bn:141842,Cn:62985,Dn:4724,En:59369,Fn:43927,Gn:43928,Hn:12924,In:100355,Ln:56219,Mn:27669,Nn:10337,Kn:47896,On:122629,Qn:139723,Pn:139722,Rn:121258,
Sn:107598,Tn:127991,Un:96639,Vn:107536,Wn:130169,Xn:96661,Yn:145188,Zn:96658,ao:116646,bo:121122,co:96660,eo:127738,fo:127083,ho:147842,jo:104443,ko:96659,lo:147595,mo:106442,no:134840,oo:63667,po:63668,qo:63669,ro:130686,so:147036,to:78314,uo:147799,vo:148649,wo:55761,xo:127098,yo:134841,zo:96368,Ao:67374,Bo:48992,Co:146176,Do:49956,Eo:31961,Fo:26388,Go:23811,Ho:5E4,Io:126250,Jo:96370,Ko:47355,Lo:47356,Mo:37935,No:45521,Oo:21760,Po:83769,Qo:49977,Ro:49974,So:93497,To:93498,Uo:34325,Vo:140759,Wo:115803,
Xo:123707,Yo:100081,Zo:35309,ap:68314,bp:25602,cp:100339,ep:143516,fp:59018,gp:18248,hp:50625,ip:9729,jp:37168,kp:37169,lp:21667,mp:16749,np:18635,qp:39305,rp:18046,sp:53969,tp:8213,up:93926,vp:102852,wp:110099,xp:22678,yp:69076,zp:137575,Bp:139224,Cp:100856,Dp:154430,Ep:17736,Fp:3832,Gp:147111,Hp:55759,Ip:64031,Op:93044,Pp:93045,Qp:34388,Rp:17657,Sp:17655,Tp:39579,Up:39578,Vp:77448,Wp:8196,Xp:11357,Yp:69877,Zp:8197,aq:82039};function ns(){var a=tb(os),b;return(new qf(function(c,d){a.onSuccess=function(e){Pk(e)?c(new ps(e)):d(new qs("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new qs("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new qs("Request timed out","net.timeout",e))};
b=Xk("//googleads.g.doubleclick.net/pagead/id",a)})).gb(function(c){c instanceof xf&&b.abort();
return vf(c)})}
function qs(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(qs,ab);function ps(a){this.xhr=a}
;function rs(){this.i=0;this.ka=null}
rs.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ka))&&"function"===typeof a.then?a:ss(a):2===this.i&&b?(a=b.call(c,this.ka))&&"function"===typeof a.then?a:ts(a):this};
rs.prototype.getValue=function(){return this.ka};
rs.prototype.$goog_Thenable=!0;function ts(a){var b=new rs;a=void 0===a?null:a;b.i=2;b.ka=void 0===a?null:a;return b}
function ss(a){var b=new rs;a=void 0===a?null:a;b.i=1;b.ka=void 0===a?null:a;return b}
;function us(a,b){return{method:void 0===b?"POST":b,mode:Kk(a)?"same-origin":"cors",credentials:Kk(a)?"same-origin":"include"}}
;function vs(){if(kg()||Vl&&Wl("applewebkit")&&!Wl("version")&&(!Wl("safari")||Wl("gsa/"))||Oc&&Wl("version/"))return!0;if(M("enable_web_eom_visitor_data"))return L("EOM_VISITOR_DATA")?!1:!0;var a=L("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=hl("CONSENT"))?a.startsWith("YES+"):!0}
;function ws(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Oh)if(Oh[c]==b.embeddedPlayerMode){b=Oh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function xs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ys;this.isTimeout=a instanceof qs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof xf}
r(xs,ab);xs.prototype.name="BiscottiError";function ys(){ab.call(this,"Biscotti ID is missing from server")}
r(ys,ab);ys.prototype.name="BiscottiMissingError";var os={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},zs=null;
function zk(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return vf(Error("Biscotti id fetching has been disabled entirely."));if(!vs())return vf(Error("User has not consented - not fetching biscotti id."));var a=L("PLAYER_VARS",{});if("1"==rb(a))return vf(Error("Biscotti ID is not available in private embed mode"));if(M("embeds_web_disable_ads_for_pfl")&&ws(a))return vf(Error("Biscotti id fetching has been disabled for pfl."));zs||(zs=ns().then(As).gb(function(b){return Bs(2,b)}));
return zs}
function As(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ys;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ys;a=a.id;Ak(a);zs=ss(a);Cs(18E5,2);return a}
function Bs(a,b){b=new xs(b);Ak("");zs=ts(b);0<a&&Cs(12E4,a-1);throw b;}
function Cs(a,b){Qk(function(){ns().then(As,function(c){return Bs(b,c)}).gb(cb)},a)}
function Ds(){try{var a=B("yt.ads.biscotti.getId_");return a?a():zk()}catch(b){return vf(b)}}
;function Es(a){if("1"!=rb(L("PLAYER_VARS",{}))){a&&yk();try{Ds().then(function(){},function(){}),Qk(Es,18E5)}catch(b){wk(b)}}}
;function Fs(){this.ld=!0}
function Gs(a){var b={},c=mg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in mk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in mk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Hs=Symbol("injectionDeps");function Is(a){this.name=a}
Is.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Js(){this.key=Ks}
function Ls(){this.providers=new Map;this.i=new Map}
Ls.prototype.resolve=function(a){return a instanceof Js?Ms(this,a.key,[],!0):Ms(this,a,[])};
function Ms(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.td)var e=d.td;else if(d.sd)e=d[Hs]?Ns(a,d[Hs],c):[],e=d.sd.apply(d,ia(e));else if(d.oc){e=d.oc;var f=e[Hs]?Ns(a,e[Hs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.xq||a.i.set(b,e);
return e}
function Ns(a,b,c){return b?b.map(function(d){return d instanceof Js?Ms(a,d.key,c,!0):Ms(a,d,c)}):[]}
;var Os;var Ps={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Qs=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Rs(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;kc(lc(5,a));try{var b=Ik(a).theme;return Qs.get(b)||null}catch(c){}return null}
;function Ss(){this.i={};if(this.j=il()){var a=hl("CONSISTENCY");a&&Ts(this,{encryptedTokenJarContents:a})}}
Ss.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Ts(this,a)}};
function Ts(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&gl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Us=window.location.hostname.split(".").slice(-2).join(".");function Vs(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Ws(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Xs;Vs.getInstance=function(){Xs=B("yt.clientLocationService.instance");Xs||(Xs=new Vs,z("yt.clientLocationService.instance",Xs));return Xs};
Vs.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Vs.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Ws(this))&&this.i.set("yt-location-playability-token",a,15552E3):gl("YT_CL",JSON.stringify({loctok:a}),15552E3,Us,!0))};
function Ws(a){return void 0===a.i?new Gl("yt-client-location"):a.i}
Vs.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Vs.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Ys(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.La&&(c=b.La[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Cc&&(d=b.Cc[a.continuationCommand.request]))return d();for(var e in a)if(b.Lb[e]&&(a=b.Lb[e]))return a()}
;function Zs(a){return function(){return new a}}
;var $s={},at=($s.WEB_UNPLUGGED="^unplugged/",$s.WEB_UNPLUGGED_ONBOARDING="^unplugged/",$s.WEB_UNPLUGGED_OPS="^unplugged/",$s.WEB_UNPLUGGED_PUBLIC="^unplugged/",$s.WEB_CREATOR="^creator/",$s.WEB_KIDS="^kids/",$s.WEB_EXPERIMENTS="^experiments/",$s.WEB_MUSIC="^music/",$s.WEB_REMIX="^music/",$s.WEB_MUSIC_EMBEDDED_PLAYER="^music/",$s.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",$s);
function bt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=at[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(at).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function ct(){}
ct.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ps:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=ub(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;kl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";nl(165)?m="USER_INTERFACE_THEME_DARK":nl(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Rs()||m;h.userInterfaceTheme=k;if(!f){if(k=
ul())h.connectionType=k;M("web_log_effective_connection_type")&&(k=vl())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var t;q=null==(t=y.navigator)?void 0:t.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}t=Ik(y.location.href);!M("web_populate_internal_geo_killswitch")&&t.internalcountrycode&&(h.internalGeo=t.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
el.i&&(t=el.i,h.mainAppWebInfo.pwaInstallabilityStatus=!t.i&&t.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=fl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(t=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:t})),t=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:t}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var x=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Ta){}x=void 0}x&&(h.timeZone=x)}(x=rk())?h.experimentsToken=x:delete h.experimentsToken;x=sk();Ss.i||(Ss.i=new Ss);h=Ss.i.i;t=[];q=0;for(var u in h)t[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:x,consistencyTokenJars:t});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);x=kl.getInstance();u=nl(58);x=x.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);x&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=gs())&&(g.clientScreenNonce=f):!f&&(f=gs())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Vs.getInstance().setLocationOnInnerTubeContext(g);try{var A=Lk(),D=A.bid;delete A.bid;
g.adSignalsInfo={params:[],bid:D};var F=p(Object.entries(A));for(var N=F.next();!N.done;N=F.next()){var O=p(N.value),Q=O.next().value,ba=O.next().value;A=Q;D=ba;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+D})}}catch(Ta){Or(Ta)}F=g}else Or(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(N=this.i(a)){this.j(F,N,b);var ca;b="/youtubei/v1/"+bt(this.l());var V;(N=null==(ca=a.commandMetadata)?void 0:null==(V=ca.webCommandMetadata)?void 0:V.apiUrl)&&
(b=N);ca=b;(V=L("INNERTUBE_HOST_OVERRIDE"))&&(ca=String(V)+String(nc(ca)));V={};V.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(V.prettyPrint="false");ca=Jk(ca,V||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:ca,Ca:us(ca),ga:F,config:a};a.config.Ra?a.config.Ra.identity=c:a.config.Ra={identity:c};return a}Or(new R("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(ct.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});function dt(){}
r(dt,ct);dt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",Ca:us("/getDatasyncIdsEndpoint","GET"),ga:{}}};
dt.prototype.l=function(){return[]};
dt.prototype.i=function(){};
dt.prototype.j=function(){};var et={},ft=(et.GET_DATASYNC_IDS=Zs(dt),et);function gt(a){var b=Ja.apply(1,arguments);if(!ht(a)||b.some(function(d){return!ht(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())jt(a,c.value);return a}
function jt(a,b){for(var c in b)if(ht(b[c])){if(c in a&&!ht(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});jt(a[c],b[c])}else if(kt(b[c])){if(c in a&&!kt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);lt(a[c],b[c])}else a[c]=b[c];return a}
function lt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ht(c)?a.push(jt({},c)):kt(c)?a.push(lt([],c)):a.push(c);return a}
function ht(a){return"object"===typeof a&&!Array.isArray(a)}
function kt(a){return"object"===typeof a&&Array.isArray(a)}
;function mt(a,b){Mn.call(this,1,arguments);this.timer=b}
r(mt,Mn);var nt=new Nn("aft-recorded",mt);var ot=window;function pt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=ot.performance||ot.mozPerformance||ot.msPerformance||ot.webkitPerformance||new pt;var qt=!1,rt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function st(a){var b=tt(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function ut(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=vt(e.requestStart),e.responseEnd=vt(e.responseEnd),e.redirectStart=vt(e.redirectStart),e.redirectEnd=vt(e.redirectEnd),e.domainLookupEnd=vt(e.domainLookupEnd),e.connectStart=vt(e.connectStart),e.connectEnd=
vt(e.connectEnd),e.responseStart=vt(e.responseStart),e.secureConnectionStart=vt(e.secureConnectionStart),e.domainLookupStart=vt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function wt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function vt(a){return Math.round(wt()+a)}
function xt(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function zt(a){a=xt(a);a.info||(a.info={});return a.info}
function tt(a){a=xt(a);a.tick||(a.tick={});return a.tick}
function At(a){a=xt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Bt(a){a=At(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ct(a){var b=xt(a).nonce;b||(b=Wr(),xt(a).nonce=b);return b}
function Dt(a){var b=tt(a||""),c=st(a);c&&!qt&&(Sn(nt,new mt(Math.round(c-b._start),a)),qt=!0)}
function Et(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Et(a[d],b[d]))return!1;return!0}
;function Ft(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return vt(a.startTime)}a=S.timing;
return a.Pc?Math.max(0,a.Pc):0}
;function Gt(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Ht(a){a=a||"";var b=B("ytcsi.reference");b||(Gt(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Gt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},It=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",
T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch=
"LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",
T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",
T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Jt=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",
U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",
U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",
U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",
U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Kt="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Lt={},Mt=(Lt.ccs="CANARY_STATE_",Lt.mver="MEASUREMENT_VERSION_",Lt.pis="PLAYER_INITIALIZED_STATE_",Lt.yt_pt="LATENCY_PLAYER_",Lt.pa="LATENCY_ACTION_",Lt.ctop="TOP_ENTITY_TYPE_",Lt.yt_vst="VIDEO_STREAM_TYPE_",Lt),Nt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ot(a){return It[a]||"LATENCY_ACTION_UNKNOWN"}
function Pt(a,b,c){c=At(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Jt){c=Jt[a];0<=eb(Kt,c)&&(b=!!b);a in Mt&&"string"===typeof b&&(b=Mt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return gt({},d)}0<=eb(Nt,a)||Pr(new R("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,
LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,
LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,
LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,
LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,
LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,
LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,
LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,
LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,
LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,
LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,
LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";
W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";
W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";
W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Qt={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Qt[Qt.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Qt[Qt.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Qt[Qt.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Rt={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Rt[Rt.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Rt[Rt.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Rt[Rt.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Rt[Rt.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Rt[Rt.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Rt[Rt.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Rt[Rt.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Rt[Rt.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var St={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};St[St.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";St[St.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";St[St.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";St[St.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Tt={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Tt[Tt.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Tt[Tt.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Ut={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Ut[Ut.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Ut[Ut.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Ut[Ut.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Ut[Ut.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Ut[Ut.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Ut[Ut.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Vt={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Vt[Vt.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Vt[Vt.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Vt[Vt.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Vt[Vt.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Wt={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Wt[Wt.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Wt[Wt.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Wt[Wt.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Xt={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Xt[Xt.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Xt[Xt.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Xt[Xt.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Yt="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Zt=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Zt);function $t(){this.i=0}
function au(){$t.i||($t.i=new $t);return $t.i}
$t.prototype.tick=function(a,b,c,d){bu(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Cj,E(d,1,a),E(d,2,b),a=new Fj,Ud(a,Cj,5,Gj,d),Ar(a,c)):em("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
$t.prototype.info=function(a,b,c){var d=Object.keys(a).join("");bu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,em("latencyActionInfo",a,{cttAuthInfo:c}))};
$t.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));bu(this,"info_"+d+"_"+b)||(E(a,2,b),b={cttAuthInfo:c},c=new Fj,Ud(c,wj,7,Gj,a),Ar(c,b))};
$t.prototype.span=function(a,b,c){var d=Object.keys(a).join("");bu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,em("latencyActionSpan",a,{cttAuthInfo:c}))};
function bu(a,b){Zt[b]=Zt[b]||{count:0};var c=Zt[b];c.count++;c.time=P();a.i||(a.i=Pl(function(){var d=P(),e;for(e in Zt)Zt[e]&&6E4<d-Zt[e].time&&delete Zt[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new R("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Pr(c)),!0):!1}
;function cu(){var a=["ol"];Ht("").info.actionType="embed";a&&nk("TIMING_AFT_KEYS",a);nk("TIMING_ACTION","embed");du();a=zt();var b=Bt();if("cold"===a.yt_lt||"cold"===b.loadType){var c=tt(),d=At();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Pt(f,a[f]))&&!Et(Bt(),f)&&(gt(b,f),gt(e,f),c=!0);c&&eu(e)}z("ytglobal.timingready_",!0);a=L("TIMING_ACTION");B("ytglobal.timingready_")&&a&&"_start"in tt()&&
st()&&Dt()}
function fu(a,b,c,d){null!==b&&(zt(c)[a]=b,(a=Pt(a,b,c))&&eu(a,c,d))}
function eu(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Ht(b||""),gt(c.info,a),gt(Bt(b),a),c=Ct(b),b=xt(b).cttAuthInfo,au().info(a,c,b);else{c=new wj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":yj(c,W[a[e]]);break;case "clientActionNonce":E(c,2,a[e]);break;case "clientScreenNonce":E(c,4,a[e]);break;case "loadType":E(c,3,a[e]);break;case "isPrewarmedLaunch":E(c,92,a[e]);break;case "isFirstInstall":E(c,55,a[e]);break;case "networkType":E(c,
5,Qt[a[e]]);break;case "connectionType":E(c,26,X[a[e]]);break;case "detailedConnectionType":E(c,27,Y[a[e]]);break;case "isVisible":E(c,6,a[e]);break;case "playerType":E(c,7,Rt[a[e]]);break;case "clientPlaybackNonce":E(c,8,a[e]);break;case "adClientPlaybackNonce":E(c,28,a[e]);break;case "previousCpn":E(c,77,a[e]);break;case "targetCpn":E(c,76,a[e]);break;case "isMonetized":E(c,9,a[e]);break;case "isPrerollAllowed":E(c,16,a[e]);break;case "isPrerollShown":E(c,17,a[e]);break;case "adType":E(c,12,a[e]);
break;case "adTypesAllowed":E(c,36,a[e]);break;case "adNetworks":E(c,37,a[e]);break;case "previousAction":E(c,13,W[a[e]]);break;case "isRedSubscriber":E(c,14,a[e]);break;case "serverTimeMs":E(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":E(c,20,a[e]);break;case "targetVideoId":E(c,78,a[e]);break;case "adBreakType":E(c,21,St[a[e]]);break;case "isNavigation":zj(c,a[e]);break;case "viewportHeight":E(c,29,a[e]);break;case "viewportWidth":E(c,30,a[e]);break;case "screenHeight":E(c,
84,a[e]);break;case "screenWidth":E(c,85,a[e]);break;case "browseId":E(c,31,a[e]);break;case "isCacheHit":E(c,32,a[e]);break;case "httpProtocol":E(c,33,a[e]);break;case "transportProtocol":E(c,34,a[e]);break;case "searchQuery":E(c,41,a[e]);break;case "isContinuation":E(c,42,a[e]);break;case "availableProcessors":E(c,43,a[e]);break;case "sdk":E(c,44,a[e]);break;case "isLocalStream":E(c,45,a[e]);break;case "navigationRequestedSameUrl":E(c,64,a[e]);break;case "shellStartupDurationMs":E(c,70,a[e]);break;
case "appInstallDataAgeMs":E(c,73,a[e]);break;case "latencyActionError":E(c,71,Tt[a[e]]);break;case "actionStep":E(c,79,a[e]);break;case "jsHeapSizeLimit":E(c,80,a[e]);break;case "totalJsHeapSize":E(c,81,a[e]);break;case "usedJsHeapSize":E(c,82,a[e]);break;case "sourceVideoDurationMs":E(c,90,a[e]);break;case "videoOutputFrames":E(c,93,a[e]);break;case "adPrebufferedTimeSecs":E(c,39,a[e]);break;case "isLivestream":E(c,47,a[e]);break;case "liveStreamMode":E(c,91,Ut[a[e]]);break;case "adCpn2":E(c,48,
a[e]);break;case "adDaiDriftMillis":E(c,49,a[e]);break;case "videoStreamType":E(c,53,Vt[a[e]]);break;case "playbackRequiresTap":E(c,56,a[e]);break;case "performanceNavigationTiming":E(c,67,a[e]);break;case "transactionType":E(c,74,Wt[a[e]]);break;case "playerRotationType":E(c,101,Xt[a[e]]);break;case "allowedPreroll":E(c,10,a[e]);break;case "shownPreroll":E(c,11,a[e]);break;case "getHomeRequestId":E(c,57,a[e]);break;case "getSearchRequestId":E(c,60,a[e]);break;case "getPlayerRequestId":E(c,61,a[e]);
break;case "getWatchNextRequestId":E(c,62,a[e]);break;case "getBrowseRequestId":E(c,63,a[e]);break;case "getLibraryRequestId":E(c,66,a[e]);break;default:Yt.includes(f)&&wk(new R("Codegen laipb translator asked to translate message field",""+f))}}catch(g){wk(Error("Codegen laipb translator failed to set "+f))}}gu(c,b)}}
function gu(a,b){var c=At(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Ht(b||"").jspbInfo.push(a);c=Ct(b);b=xt(b).cttAuthInfo;au().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Ht(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=At(c);d.gelTicks&&(d.gelTicks[a]=!0);d=tt(c);e=b||P();d[a]=e;e=Ct(c);var f=xt(c).cttAuthInfo;if("_start"===a){var g=au();bu(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new uj,E(f,1,e),e=new Fj,Ud(e,uj,6,Gj,f),Ar(e,
b)):em("latencyActionBaselined",{clientActionNonce:e},b))}else au().tick(a,e,b,f);Dt(c);return d[a]}
function hu(){var a=Ct();requestAnimationFrame(function(){setTimeout(function(){a===Ct()&&Z("ol",void 0,void 0)},0)})}
function iu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Ep+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function du(){function a(f){var g=ut(),h=wt(),k=L("CSI_START_TIMESTAMP_MILLIS",0);0<k&&!M("embeds_web_enable_csi_start_override_killswitch")&&(h=k);h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=Ft();0<f&&Z("fpt",f);f=ut();f.isPerformanceNavigationTiming&&eu({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,
void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=wt()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));S&&"getEntriesByType"in S&&ju()}
var b=L("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=ku(b);gu(b);b=yj(zj(new wj,!0),W[Ot(L("TIMING_ACTION"))]);var c=L("PREVIOUS_ACTION");c&&E(b,13,W[Ot(c)]);(c=L("CLIENT_PROTOCOL"))&&E(b,33,c);(c=L("CLIENT_TRANSPORT"))&&E(b,34,c);(c=gs())&&"UNDEFINED_CSN"!==c&&E(b,4,c);c=iu();1!==c&&-1!==c||E(b,6,!0);c=zt();E(b,3,"cold");a(c);c=lu();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new vj;E(e,1,d);Wd(b,83,vj,e)}}gu(b)}else{for(c in b)b.hasOwnProperty(c)&&fu(c,b[c]);b=
{isNavigation:!0,actionType:Ot(L("TIMING_ACTION"))};if(c=L("PREVIOUS_ACTION"))b.previousAction=Ot(c);if(c=L("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=L("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=gs())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=iu();if(1===c||-1===c)b.isVisible=!0;c=zt();b.loadType="cold";a(c);c=lu();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});eu(b)}}
function ku(a){var b=new wj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetGuide_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetHome_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetPlayer_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetSearch_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;
case "GetSettings_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetTrending_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetWatchNext_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "yt_red":E(b,14,!!d);break;case "yt_ad":E(b,9,!!d)}}return b}
function mu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);gc()&&a.setAttribute("nonce",gc());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=wt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function lu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in rt)if(rt.hasOwnProperty(b)){var c=rt[b];mu(b,c)&&a.push(c)}return a}
function ju(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",vt(b.startTime)),Z("wffe",vt(b.responseEnd)))}
var nu=window;nu.ytcsi&&(nu.ytcsi.info=fu,nu.ytcsi.tick=Z);var ou="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" ");function pu(a,b,c,d){this.m=a;this.M=b;this.o=c;this.l=d;this.j=void 0;this.i=new Map;a.La||(a.La={});a.La=Object.assign({},ft,a.La)}
function qu(a,b,c,d){if(void 0!==pu.i){if(d=pu.i,a=[a!==d.m,b!==d.M,c!==d.o,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new R("InnerTubeTransportService is already initialized",a);
}else pu.i=new pu(a,b,c,d)}
function ru(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Ps:c;var d=Ys(b,a.m);if(!d)return vf(new R("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new qf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.Ca)?void 0:g.mode)?"cors":void 0;if(a.o.ld){var q=e.config,t;q=null==q?void 0:null==(t=q.Ra)?void 0:t.sessionIndex;t=Gs({sessionIndex:q});k=Object.assign({},su(h),t);return m.u(2)}return v(m,tu(e.config,
h),3)}2!=m.i&&(k=m.j);f(uu(a,e,k));m.i=0})}):vf(new R("Error: Failed to build request for command.",b))}
function uu(a,b,c){var d,e,f,g,h,k,m,q,t,x,u,A,D,F,N,O,Q,ba,ca;return w(function(V){switch(V.i){case 1:V.u(2);break;case 3:if((d=V.j)&&!d.isExpired())return V.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.qq(b.ga.context);if(null==(m=a.j)?0:m.wq(b.input,b.ga))return V.return(a.j.nq(b.input,b.ga));(x=null==(t=b.config)?void 0:t.Ba)&&a.i.has(x)&&M("web_memoize_inflight_requests")?q=a.i.get(x):(u=JSON.stringify(b.ga),
b.Ca=Object.assign({},b.Ca,{headers:c}),A=Object.assign({},b.Ca),"POST"===b.Ca.method&&(A=Object.assign({},A,{body:u})),(null==(D=b.config)?0:D.Wc)&&Z(b.config.Wc),F=function(){return a.M.fetch(b.input,A,b.config)},q=F(),x&&a.i.set(x,q));
return v(V,q,4);case 4:N=V.j;x&&a.i.has(x)&&a.i.delete(x);(null==(O=b.config)?0:O.Xc)&&Z(b.config.Xc);if(N||null==(Q=a.j)||!Q.hq(b.input,b.ga)){V.u(5);break}return v(V,a.j.mq(b.input,b.ga),6);case 6:N=V.j;case 5:if(N&&a.l)for(ba=p(ou),h=ba.next();!h.done;h=ba.next())ca=h.value,a.l[ca]&&a.l[ca].handleResponse(N,b);return V.return(N)}})}
function tu(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ra)?void 0:d.sessionIndex;var h=Gs({sessionIndex:e});if(!(h instanceof qf)){var k=new qf(cb);rf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},su(b),f)))})}
function su(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var vu=["share/get_web_player_share_panel"],wu=["feedback"],xu=["notification/modify_channel_preference"],yu=["browse/edit_playlist"],zu=["subscription/subscribe"],Au=["subscription/unsubscribe"];function Bu(){}
r(Bu,ct);Bu.prototype.l=function(){return zu};
Bu.prototype.i=function(a){return a.subscribeEndpoint};
Bu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Bu.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Cu(){}
r(Cu,ct);Cu.prototype.l=function(){return Au};
Cu.prototype.i=function(a){return a.unsubscribeEndpoint};
Cu.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Cu.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Du(){}
r(Du,ct);Du.prototype.l=function(){return wu};
Du.prototype.i=function(a){return a.feedbackEndpoint};
Du.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Du.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Eu(){}
r(Eu,ct);Eu.prototype.l=function(){return xu};
Eu.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Eu.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Fu(){}
r(Fu,ct);Fu.prototype.l=function(){return yu};
Fu.prototype.i=function(a){return a.playlistEditEndpoint};
Fu.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Gu(){}
r(Gu,ct);Gu.prototype.l=function(){return vu};
Gu.prototype.i=function(a){return a.webPlayerShareEntityServiceEndpoint};
Gu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Ks=new Is("NETWORK_SLI_TOKEN");function Hu(a){this.i=a}
Hu.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=kc(lc(5,Bc(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Pr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Pr(g)}))})};
Hu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Pr(new R("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Hu[Hs]=[new Js];var Iu=new Is("NETWORK_MANAGER_TOKEN");var Ju;function Ku(a){Mn.call(this,1,arguments);this.csn=a}
r(Ku,Mn);var Vn=new Nn("screen-created",Ku),Lu=[],Nu=Mu,Ou=0;function Pu(a,b,c,d,e,f,g){function h(){Pr(new R("newScreen() parent element does not have a VE - rootVe",b))}
var k=Nu();f=new $r({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,ca:k};if(M("il_via_jspb")){var m=new jj;m.V(k);kj(m,f.getAsJspb());c&&c.visualElement?(f=new lj,c.clientScreenNonce&&E(f,2,c.clientScreenNonce),mj(f,c.visualElement.getAsJspb()),g&&E(f,4,Hj[g]),G(m,lj,5,f)):c&&h();d&&E(m,3,d);Fr(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=
g)):c&&h(),d&&(f.cloneCsn=d),a?jr("screenCreated",f,a,e):em("screenCreated",f,e);Sn(Vn,new Ku(k));return k}
function Qu(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:is(b),
ca:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(pb(g)||!g.trackingParams&&!g.veType)&&Pr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new nj;h.V(b);pj(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();Wd(h,3,ej,k)});
"UNDEFINED_CSN"==b?Ru("visualElementAttached",h,f):Gr(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Ru("visualElementAttached",c,f):a?jr("visualElementAttached",c,a,f):em("visualElementAttached",c,f)}
function Mu(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return dd(b,3)}
function Ru(a,b,c){Lu.push({payloadName:a,payload:b,options:c});Ou||(Ou=Wn())}
function Xn(a){if(Lu){for(var b=p(Lu),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.V(a.csn),c.payloadName){case "screenCreated":Fr(c.payload,c.options);break;case "visualElementAttached":Gr(c.payload,c.options);break;case "visualElementShown":Br(c.payload,c.options);break;case "visualElementHidden":Cr(c.payload,c.options);break;case "visualElementGestured":Dr(c.payload,c.options);break;case "visualElementStateChanged":Er(c.payload,c.options);break;default:Pr(new R("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,jr(c.payloadName,c.payload,null,c.options);Lu.length=0}Ou=0}
;function Su(){this.j=new Set;this.i=new Set;this.l=new Map}
Su.prototype.s=function(){};
Su.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(Su);function Tu(){this.m=[];this.N=[];this.i=[];this.o=[];this.C=[];this.j=new Set;this.v=new Map}
Tu.prototype.s=function(a){this.client=a};
function Uu(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=gs(c),f=es(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Qu(a.client,e,f,[as(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Qu(a.client,e,f,[as(d.playerResponse.trackingParams)])}})}
function Vu(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.m.push([b,c]);else{var e=gs(d);c=c||es(d);e&&c&&Qu(a.client,e,c,[b])}}
Tu.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=gs(void 0===c?0:c)){a=this.client;var e=as(d);d={cttAuthInfo:is(c),ca:c};if(M("il_via_jspb")){var f=new qj;f.V(c);e=e.getAsJspb();G(f,ej,2,e);E(f,4,Hj.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);b&&G(f,hj,3);"UNDEFINED_CSN"==c?Ru("visualElementGestured",f,d):Dr(f,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(f.clientData=b),"UNDEFINED_CSN"==c?
Ru("visualElementGestured",f,d):a?jr("visualElementGestured",f,a,d):em("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Wu(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Xu(a,b,c);var f=es(c.layer);if(f){for(var g=p(a.m),h=g.next();!h.done;h=g.next())h=h.value,Vu(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=gs(g);var m=k[0]||es(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:is(h),ca:h};M("il_via_jspb")?(q=new tj,q.V(h),m=m.getAsJspb(),G(q,ej,2,m),"UNDEFINED_CSN"==h?Ru("visualElementStateChanged",q,k):Er(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?Ru("visualElementStateChanged",m,k):g?jr("visualElementStateChanged",m,g,k):em("visualElementStateChanged",m,k))}}}};
gs(c.layer)||a.l();if(c.Ob)for(var d=p(c.Ob),e=d.next();!e.done;e=d.next())Uu(a,e.value,c.layer);else Or(Error("Delayed screen needs a data promise."))}
function Xu(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Rc?c.Rc:c.layer;var e=gs(d);d=es(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Pu(a.client,b,f,c.Nb,c.cttAuthInfo,g,c.kq)}catch(m){Rr(m,{tq:b,rootVe:d,parentVisualElement:void 0,iq:e,pq:f,Nb:c.Nb});Or(m);return}js(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Zr));for(f=b.next();!f.done;f=b.next())if(gs(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:is(e),ca:e,Qb:g},M("il_via_jspb")?(h=new rj,h.V(e),d=d.getAsJspb(),G(h,ej,2,d),E(h,4,g?16:8),"UNDEFINED_CSN"==e?Ru("visualElementHidden",h,f):Cr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Ru("visualElementHidden",d,f):b?jr("visualElementHidden",d,b,f):em("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");eu({clientScreenNonce:k});Su.getInstance().clear();d=es(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:is(e),ca:e},M("il_via_jspb")?(b=new sj,b.V(e),f=d.getAsJspb(),G(b,ej,2,f),E(b,4,1),"UNDEFINED_CSN"==e?Ru("visualElementShown",b,k):Br(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?Ru("visualElementShown",b,k):em("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Vu(a,k,d,c.layer);for(c=0;c<a.o.length;c++){e=a.o[c];try{e()}catch(m){Or(m)}}for(c=a.o.length=0;c<a.C.length;c++){e=a.C[c];try{e()}catch(m){Or(m)}}}
;function Yu(){var a,b;return w(function(c){if(1==c.i)return a=pu.i,a?v(c,ru(a),2):(Pr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Pr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.jq);Pr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Zu=y.caches,$u;function av(a){var b=a.indexOf(":");return-1===b?{cc:a}:{cc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function bv(){return w(function(a){if(void 0!==$u)return a.return($u);$u=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return va(d,2),v(d,Zu.open("test-only"),4);case 4:return v(d,Zu.delete("test-only"),5);case 5:wa(d,3);break;case 2:if(c=xa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return($u)})}
function cv(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return v(k,bv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,Zu.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=av(f),h=g.datasyncId,!h||a.includes(h)||b.push(Zu.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function dv(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return v(h,bv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=im("cache contains other");return v(h,Zu.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=av(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ev(){try{return!!self.localStorage}catch(a){return!1}}
;function fv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function gv(a){if(ev()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=fv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function hv(){if(!ev())return!1;var a=im(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=fv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function iv(){Yu().then(function(a){a&&(tn(a),cv(a),gv(a))})}
function jv(){var a=new Io;Nh.S(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=im("clear");if(b.startsWith("V")){var g=[b];tn(g);cv(g);gv(g);return f.return()}c=hv();return v(f,dv(),3);case 3:return d=f.j,v(f,un(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.L()?iv():a.o.add("publicytnetworkstatus-online",iv,!0,void 0,void 0),f.i=0}})})}
;function kv(a){a&&(a.dataset?a.dataset[lv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function mv(a,b){return a?a.dataset?a.dataset[lv(b)]:a.getAttribute("data-"+b):null}
var nv={};function lv(a){return nv[a]||(nv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ov=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function qv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ov,""),c=c.replace(pv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else rv(a,b,c)}
function rv(a,b,c){c=void 0===c?null:c;var d=sv(a),e=document.getElementById(d),f=e&&mv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=vq(d,b),b=""+Ra(b),tv[b]=f),g||(e=uv(a,d,function(){mv(e,"loaded")||(kv(e),yq(d),Qk(Ya(zq,d),0))},c)))}
function uv(a,b,c,d){d=void 0===d?null:d;var e=cf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);zh(e,Jb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function vv(a){a=sv(a);var b=document.getElementById(a);b&&(zq(a),b.parentNode.removeChild(b))}
function wv(a,b){a&&b&&(a=""+Ra(b),(a=tv[a])&&xq(a))}
function sv(a){var b=document.createElement("a");dc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ic(a)}
var tv={};var xv=[],yv=!1;function zv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&vs()){var a=L("PLAYER_VARS",{});if(!("1"==rb(a)||M("embeds_web_disable_ads_for_pfl")&&ws(a))){var b=function(){yv=!0;"google_ad_status"in window?nk("DCLKSTAT",1):nk("DCLKSTAT",2)};
try{qv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}xv.push(Nh.S(function(){if(!(yv||"google_ad_status"in window)){try{wv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}yv=!0;nk("DCLKSTAT",3)}},5E3))}}}
function Cv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Dv(){this.state=1;this.i=null}
Dv.prototype.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=yb())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Jb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
Ev(this,e,d,a.program,b,c)}else Pr(Error("Cannot initialize botguard without program"))};
function Ev(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,qv(c,function(){window[g]?Fv(a,d,g,e):(a.state=3,vv(c),Pr(new R("Unable to load Botguard","from "+c)))},f)):b?(f=cf("SCRIPT"),f.textContent=b,f.nonce=gc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Fv(a,d,g,e):(a.state=4,Pr(new R("Unable to load Botguard from JS")))):Pr(new R("Unable to load VM; no url or JS provided"))}
Dv.prototype.isInitialized=function(){return!!this.i};
function Fv(a,b,c,d){a.state=5;try{var e=new uh({program:b,globalName:c});e.hd.then(function(){a.state=6;d&&d(b)});
Gv(a,e)}catch(f){a.state=7,f instanceof Error&&Pr(f)}}
Dv.prototype.invoke=function(a){a=void 0===a?{}:a;var b=this.i;if(b){var c={Mb:a};if(b.Wa)throw Error("Already disposed");a=sh();var d;null!=(d=b.ta)&&d.j.i.Cb("/client_streamz/bg/fsc",d.Ba);d=b.md([c.Mb,c.kd]);null!=(b=b.ta)&&(a=sh()-a,b.l.i.hb("/client_streamz/bg/fsl",a,b.Ba));b=d}else b=null;return b};
Dv.prototype.dispose=function(){Gv(this,null);this.state=8};
function Gv(a,b){ke(a.i);a.i=b}
;var Hv=new Dv;function Iv(){return Hv.isInitialized()}
function Jv(a){a=void 0===a?{}:a;return Hv.invoke(a)}
;function Kv(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Ul():d;this.o=c;this.l=d;this.j=new th;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Da:a.Da,Na:a.Na},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Na=d;a.Da=e;d=function(f){return function(){f.Da.ub();b.i[f.Na].eb=!0;b.i.every(function(g){return!0===g.eb})&&b.j.resolve()}}(a);
e=Ql(d,Lv(this,a.Da));this.i[a.Na]=Object.assign({},a.Da,{ub:d,Za:e})}}
function Mv(a){var b=Array.from(a.i.keys()).sort(function(d,e){return Lv(a,a.i[e])-Lv(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Za||c.eb||(a.l.aa(c.Za),Ql(c.ub,10))}
Kv.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Za||b.eb||this.l.aa(b.Za),b.eb=!0;this.j.resolve()};
function Lv(a,b){var c;return null!=(c=b.priority)?c:a.o}
;function Nv(a){this.state=a;this.plugins=[];this.s=void 0}
Nv.prototype.install=function(){this.plugins.push.apply(this.plugins,ia(Ja.apply(0,arguments)))};
Nv.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.F===a});
if(d){this.l&&(Mv(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ov(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ov(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Ul();var g={};e=p(e);for(var h=e.next();!h.done;g={Oa:g.Oa},h=e.next())g.Oa=h.value,Sl(function(k){return function(){k.Oa.callback.apply(k.Oa,ia(d))}}(g));
f=f.map(function(k){var m;return{ub:function(){k.callback.apply(k,ia(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new Kv(f))}}
fa.Object.defineProperties(Nv.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Pv(a){Nv.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.C=[{from:"document_active",F:"document_disposed_preventable",action:this.N},{from:"document_active",F:"document_disposed",action:this.o},{from:"document_disposed_preventable",F:"document_disposed",action:this.o},{from:"document_disposed_preventable",F:"flush_logs",action:this.m},{from:"document_disposed_preventable",F:"document_active",action:this.j},{from:"document_disposed",F:"flush_logs",action:this.m},
{from:"document_disposed",F:"document_active",action:this.j},{from:"document_disposed",F:"document_disposed",action:function(){}},
{from:"flush_logs",F:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(Pv,Nv);Pv.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Pv.prototype.o=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Pv.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Pv.prototype.j=function(){this.i=new Map};function Qv(a){Nv.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",F:"document_visible",action:this.j},{from:"document_visibility_unknown",F:"document_hidden",action:this.i},{from:"document_visibility_unknown",F:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",F:"document_backgrounded",action:this.o},{from:"document_visible",F:"document_hidden",action:this.i},{from:"document_visible",F:"document_foregrounded",action:this.m},
{from:"document_visible",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_hidden",action:this.i},{from:"document_foregrounded",F:"document_foregrounded",action:this.m},{from:"document_hidden",F:"document_visible",action:this.j},{from:"document_hidden",F:"document_backgrounded",action:this.o},{from:"document_hidden",F:"document_hidden",action:this.i},{from:"document_backgrounded",F:"document_hidden",action:this.i},
{from:"document_backgrounded",F:"document_backgrounded",action:this.o},{from:"document_backgrounded",F:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Qv,Nv);Qv.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Qv.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Qv.prototype.o=function(a,b){a(null==b?void 0:b.event)};
Qv.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Rv(){this.i=new Pv;this.j=new Qv}
Rv.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ia(a));this.j.install.apply(this.j,ia(a))};function Sv(){Rv.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.o},a))}
var Tv;r(Sv,Rv);Sv.prototype.o=function(){if(M("web_fp_via_jspb")){var a=new dj,b=gs();b&&a.V(b);b=new Fj;Ud(b,dj,380,Gj,a);Ar(b);M("web_fp_via_jspb_and_json")&&em("finalPayload",{csn:gs()})}else em("finalPayload",{csn:gs()})};
Sv.prototype.l=function(){Tr(Ur)};function Uv(){}
Uv.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new Uv,z("ytglobal.storage_",a));return a};
Uv.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Vv()):d.return()})};
function Vv(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",Uv);function cm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=qk("ytidb_transaction_ended_event_rate_limit",.02)}
cm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Wv(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function Wv(a,b){Uv.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Xv(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Xv(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function Xv(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Yv(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.o=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.v=function(e){a:if(!("*"!=d.o&&e.origin!=d.o||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.o=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.m&&(!d.s||0<=eb(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.j=this.m=null;window.addEventListener("message",this.v)}
r(Yv,J);Yv.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){xk(d)}}};
Yv.prototype.D=function(){window.removeEventListener("message",this.v);J.prototype.D.call(this)};function Zv(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new Yv(!!L("WIDGET_ID_ENFORCE")),b=this.Uc.bind(this);a.m=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=Zv.prototype;l.Uc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,$v(this,a)),this.l[a]=!0)):this.Db(a,b,c)};
l.Db=function(){};
function $v(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Hc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.pb());this.sendMessage("onReady");fb(this.j,this.kc,this);this.j=[]};
l.pb=function(){return null};
function aw(a,b){a.sendMessage("infoDelivery",b)}
l.kc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.kc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};function bw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function cw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function dw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ew(a){Zv.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.ed.bind(this));this.addEventListener("onVolumeChange",this.fd.bind(this));this.addEventListener("onApiChange",this.Yc.bind(this));this.addEventListener("onPlaybackQualityChange",this.bd.bind(this));this.addEventListener("onPlaybackRateChange",this.cd.bind(this));this.addEventListener("onStateChange",this.dd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.gd.bind(this))}
r(ew,Zv);l=ew.prototype;
l.Db=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&bw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=cw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=cw(e);break;case "loadPlaylist":case "cuePlaylist":e=dw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);bw(a)&&aw(this,this.pb())}};
l.onReady=function(){var a=this.Hc.bind(this);this.i.j=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.pb=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.dd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());aw(this,a)};
l.bd=function(a){aw(this,{playbackQuality:a})};
l.cd=function(a){aw(this,{playbackRate:a})};
l.Yc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.fd=function(){aw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.ed=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());aw(this,a)};
l.gd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};aw(this,a)};
l.dispose=function(){Zv.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function fw(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.ec,this)}
r(fw,J);l=fw.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.wa("RECEIVING"))};
l.wa=function(a,b){this.started&&!this.i()&&this.connection.wa(a,b)};
l.ec=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=gw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=hw(a,c))&&this.wa(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.Zc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.Zc=function(a,b){this.started&&!this.i()&&this.connection.wa(a,this.ob(a,b))};
l.ob=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.D=function(){var a=this.connection;a.i()||li(a.j,"command",this.ec,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function iw(a,b){fw.call(this,b);this.api=a;this.start()}
r(iw,fw);iw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
iw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function gw(a,b){switch(a){case "loadVideoById":return a=cw(b),[a];case "cueVideoById":return a=cw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=dw(b),[a];case "cuePlaylist":return a=dw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function hw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
iw.prototype.ob=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return fw.prototype.ob.call(this,a,b)};
iw.prototype.D=function(){fw.prototype.D.call(this);delete this.api};function jw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);me(this,this.j)}
Za(jw,J);jw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
jw.prototype.o=function(a,b){this.i()||this.j.qa.apply(this.j,arguments)};function kw(a,b,c){jw.call(this);this.l=a;this.destination=b;this.id=c}
r(kw,jw);kw.prototype.wa=function(a,b){this.i()||this.l.wa(this.destination,this.id,a,b)};
kw.prototype.D=function(){this.destination=this.l=null;jw.prototype.D.call(this)};function lw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=iq(window,"message",this.l.bind(this));this.connection=new kw(this,a,b);me(this,this.connection)}
r(lw,J);lw.prototype.wa=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(qg(a),this.origin))};
lw.prototype.l=function(a){var b;if(b=!this.i())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.i()||c.o("command",b.command,b.data,a.origin))}};
lw.prototype.D=function(){jq(this.j);this.destination=null;J.prototype.D.call(this)};function mw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
mw.prototype.clone=function(){var a=new mw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=tb(c):a[b]=c}return a};var nw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ow(a){a=a||"";if(window.spf){var b=a.match(nw);spf.style.load(a,b?b[1]:"",void 0)}else pw(a)}
function pw(a){var b=qw(a),c=document.getElementById(b),d=c&&mv(c,"loaded");d||c&&!d||(c=rw(a,b,function(){mv(c,"loaded")||(kv(c),yq(b),Qk(Ya(zq,b),0))}))}
function rw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jb(a);ec(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qw(a){var b=cf("A");Db("This URL is never added to the DOM");dc(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ic(a)}
;function sw(){J.call(this);this.j=[]}
r(sw,J);sw.prototype.D=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.D.call(this)};function tw(){sw.apply(this,arguments)}
r(tw,sw);function uw(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.ea=!1;this.api={};this.X=this.s=null;this.K=new K;this.j={};this.R=this.Y=this.elementId=this.ra=this.config=null;this.P=!1;this.o=this.B=null;this.la={};this.Pa=["onReady"];this.lastError=null;this.Fa=NaN;this.G={};this.Qa=new tw(this);this.T=0;this.l=this.m=a;me(this,this.K);vw(this);ww(this);me(this,this.Qa);c?this.T=Qk(function(){e.loadNewVideoConfig(c)},0):d&&(xw(this),yw(this))}
r(uw,J);l=uw.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(Rk(this.T),this.T=0);var b=a||{};b instanceof mw||(b=new mw(b));this.config=b;this.setConfig(a);yw(this);this.isReady()&&zw(this)}};
function xw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.ra=a;this.config=Aw(a);xw(this);if(!this.Y){var b;this.Y=Bw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Gh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Gh(Number(a)||a))};
function zw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Cw(a){var b=!0,c=Dw(a);c&&a.config&&(a=Ew(a),b=mv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function yw(a){if(!a.i()&&!a.P){var b=Cw(a);if(b&&"html5"===(Dw(a)?"html5":null))a.R="html5",a.isReady()||Fw(a);else if(Gw(a),a.R="html5",b&&a.o&&a.m)a.m.appendChild(a.o),Fw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Hw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Aw(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Fw(a)};
a.P=!0;b?a.B():(qv(Ew(a),a.B),(b=Iw(a))&&ow(b),Jw(a)&&!c&&z("yt.player.Application.create",null))}}}
function Dw(a){var b=bf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Fw(a){if(!a.i()){var b=Dw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Hw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Kw(a)}else a.Fa=Qk(function(){Fw(a)},50)}}
function Kw(a){vw(a);a.ea=!0;var b=Dw(a);if(b){a.s=Lw(a,b,"addEventListener");a.X=Lw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Lw(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);zw(a);a.Y&&a.Y(a.api);a.K.qa("onReady",a.api)}
function Lw(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Pr(f))}}}
function vw(a){a.ea=!1;if(a.X)for(var b in a.j)a.j.hasOwnProperty(b)&&a.X(b,a.j[b]);for(var c in a.G)a.G.hasOwnProperty(c)&&Rk(Number(c));a.G={};a.s=null;a.X=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.ea};
function ww(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){yq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){yq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Bw(this,b);d&&(0<=eb(this.Pa,a)||this.j[a]||(b=Mw(this,a),this.s&&this.s(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&Qk(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Bw(this,b))&&li(this.K,a,b)};
function Bw(a,b){var c=b;if("string"===typeof b){if(a.la[b])return a.la[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Or(f)}};
a.la[b]=c}return c?c:null}
function Mw(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=Qk(function(){if(!a.i()){try{a.K.qa(b,null!=d?d:void 0)}catch(h){Pr(new R("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.G,g=String(e);g in f&&delete f[g]}},0);
qb(a.G,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Dw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Gw(a){a.cancel();vw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Dw(a);b&&(Cw(a)||!Jw(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.B&&wv(Ew(this),this.B);Rk(this.Fa);this.P=!1};
l.D=function(){Gw(this);if(this.o&&this.config&&this.o.destroy)try{this.o.destroy()}catch(b){Or(b)}this.la=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.ra=this.config=this.api=null;delete this.m;delete this.l;J.prototype.D.call(this)};
function Jw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Ew(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Iw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Hw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Dk(c||"","&")[b]}
function Aw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var Nw={},Ow="player_uid_"+(1E9*Math.random()>>>0);function Pw(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?bf(d):d;var e=Ow+"_"+Ra(d),f=Nw[e];if(f&&c)return Qw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new uw(d,e,a,b);Nw[e]=f;yq("player-added",f.api);ne(f,function(){delete Nw[f.getId()]});
return f.api}
function Qw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Rw=null,Sw=null,Tw=null;function Uw(){var a=Rw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Vw(a,b,c){a="ST-"+ic(a).toString(36);b=b?rc(b):"";c=c||5;vs()&&gl(a,b,c)}
;function Ww(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=mc(window.location.href);g&&f.push(g);g=mc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),dc(f,d),d=f.href),d&&(d=nc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:gs()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Vw(d,b,h)}else Vw(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=wc(a,k)+m;var t=void 0===t?yh:t;a:{t=void 0===t?yh:t;for(k=0;k<t.length;++k)if(m=t[k],m instanceof wh&&m.isValid(a)){t=new Mb(a,Nb);break a}t=void 0}c.href=Ob(t||Qb)}return!0}
;z("yt.setConfig",nk);z("yt.config.set",nk);z("yt.setMsg",ls);z("yt.msgs.set",ls);z("yt.logging.errors.log",Or);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Es(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Ik(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));cu();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Ik(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Rw=Pw(a,c,!1)}else Rw=Pw(a);Rw.addEventListener("onVideoDataChange",Uw);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Tw=new ew(Rw):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Sw=new lw(window.parent,a,b),Tw=new iw(Rw,Sw.connection));
zv();M("ytidb_create_logger_embed_killswitch")||bm();a={};Tv||(Tv=new Sv);Tv.install((a.flush_logs={callback:function(){Qq()}},a));
M("embeds_web_enable_new_nwl")?Po():Xo();M("ytidb_clear_embedded_player")&&Nh.S(function(){var e;if(!Ju){Os||(Os=new Ls);var f=Os;var g={Tc:Iu,oc:Hu};f.providers.set(g.Tc,g);g={Lb:{feedbackEndpoint:Zs(Du),modifyChannelNotificationPreferenceEndpoint:Zs(Eu),playlistEditEndpoint:Zs(Fu),subscribeEndpoint:Zs(Bu),unsubscribeEndpoint:Zs(Cu),webPlayerShareEntityServiceEndpoint:Zs(Gu)}};var h=M("web_enable_client_location_service")?Vs.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){Fs.i||
(Fs.i=new Fs);var m=Fs.i}void 0===e&&(e=f.resolve(Iu));qu(g,e,m,k);Ju=pu.i}jv()})});
var Xw=vk(function(){hu();var a=kl.getInstance(),b=nl(119),c=1<window.devicePixelRatio;if(document.body&&Zh(document.body,"exp-invert-logo"))if(c&&!Zh(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Zh(d,"inverted-hdpi")){var e=Xh(d);Yh(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Zh(document.body,"inverted-hdpi")&&$h();if(b!=c){b="f"+(Math.floor(119/31)+1);d=ol(b)||0;d=c?d|67108864:d&-67108865;0==d?delete jl[b]:(c=d.toString(16),
jl[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in jl)d.push(f+"="+encodeURIComponent(String(jl[f])));gl(b,d.join("&"),63072E3,a.j,c)}Tu.i||(Tu.i=new Tu);a=Tu.i;f=16623;var g=void 0===g?{}:g;Object.values(ms).includes(f)||(Pr(new R("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.m=[];a.N=[];g.Ob?Wu(a,f,g):Xu(a,f,g)}),Yw=vk(function(){Rw&&Rw.sendAbandonmentPing&&Rw.sendAbandonmentPing();
L("PL_ATT")&&Hv.dispose();for(var a=Nh,b=0,c=xv.length;b<c;b++)a.aa(xv[b]);xv.length=0;vv("//static.doubleclick.net/instream/ad_status.js");yv=!1;nk("DCLKSTAT",0);le(Tw,Sw);Rw&&(Rw.removeEventListener("onVideoDataChange",Uw),Rw.destroy())});
window.addEventListener?(window.addEventListener("load",Xw),window.addEventListener("pagehide",Yw)):window.attachEvent&&(window.attachEvent("onload",Xw),window.attachEvent("onunload",Yw));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Iv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Jv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Cv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||Ww);
z("yt.util.activity.init",B("yt.util.activity.init")||nq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||qq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||oq);}).call(this);
