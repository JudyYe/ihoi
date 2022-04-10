(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function ra(){this.C=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
ra.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={tb:b,yb:!0};a.h=a.m||a.o}
ra.prototype.return=function(a){this.j={return:a};this.h=this.o};
function t(a,b,c){a.h=c;return{value:b}}
ra.prototype.s=function(a){this.h=a};
function wa(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function xa(a,b){a.h=b;a.m=0}
function ya(a){a.m=0;var b=a.j.tb;a.j=null;return b}
function za(a){a.A=[a.j];a.m=0;a.o=0}
function Aa(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.yb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Ba(a){this.h=new ra;this.i=a}
function Ea(a,b){sa(a.h);var c=a.h.l;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.C=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Ga(a)}a.h.l=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.C=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.C=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.yb)throw b.tb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){sa(a.h);a.h.l?b=Fa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ga(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Fa(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Ba(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.C=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.T),reject:g(this.o)}};
b.prototype.T=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.m(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.na(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.L()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ia(h.resolve,h.reject)};
b.prototype.na=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(C,v){return"function"==typeof C?function(E){try{m(C(E))}catch(F){q(F)}}:v}
var m,q,u=new b(function(C,v){m=C;q=v});
this.Ia(k(g,m),k(h,q));return u};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ia=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ia(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function u(E){return function(F){C[E]=F;v--;0==v&&m(C)}}
var C=[],v=0;do C.push(void 0),v++,d(k.value).Ia(u(C.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ha(h.data_,m))for(h=0;h<q.length;h++){var u=q[h];if(k!==k&&u.key!==u.key||k===u.key)return{id:m,list:q,index:h,entry:u}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
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
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function z(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){a.bb=void 0;a.getInstance=function(){return a.bb?a.bb:a.bb=new a}}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.No=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Ob=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(){var a=A("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){x.console&&x.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.j=a===Bb&&b||""}
Ab.prototype.i=!0;Ab.prototype.h=function(){return this.j};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a){this.j=Db===Db?a:"";this.i=!0}
Eb.prototype.h=function(){return this.j.toString()};
Eb.prototype.toString=function(){return this.j.toString()};function Fb(a,b){this.j=b===Gb?a:""}
Fb.prototype.i=!0;Fb.prototype.h=function(){return this.j.toString()};
Fb.prototype.toString=function(){return this.j+""};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.j;Na(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Mb(a,b){this.j=b===Nb?a:""}
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
Mb.prototype.toString=function(){return this.j.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Na(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={};function Qb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function B(a){return-1!=Qb().indexOf(a)}
;function Rb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")||B("Silk")}
;var Sb={};function Tb(a){this.j=Sb===Sb?a:"";this.i=!0}
Tb.prototype.h=function(){return this.j.toString()};
Tb.prototype.toString=function(){return this.j.toString()};function Ub(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.i?b.h():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function Vb(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=Wb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Xb(){return Wb("script[nonce]")}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Wb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a)?a:"":""}
;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,mc=/[?&]($|#)/;function nc(a){for(var b=a.search(ic),c=0,d,e=[];0<=(d=hc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.slice(c));return e.join("").replace(mc,"$1")}
;function oc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function pc(a){pc[" "](a);return a}
pc[" "]=function(){};var qc=B("Opera"),rc=B("Trident")||B("MSIE"),sc=B("Edge"),tc=B("Gecko")&&!(-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),uc=-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"),vc=B("Android");function wc(){var a=x.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=Qb();if(tc)return/rv:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(rc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(x.document&&rc){var Dc=wc();Cc=Dc?Dc:parseInt(Bc,10)||void 0}else Cc=void 0;var Ec=Cc;var Fc=oc()||B("iPod"),Gc=B("iPad");!B("Android")||Rb();Rb();var Hc=B("Safari")&&!(Rb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(oc()||B("iPad")||B("iPod"));var Ic={},Jc=null;
function Kc(a,b){Pa(a);void 0===b&&(b=0);if(!Jc){Jc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ic[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Jc[h]&&(Jc[h]=g)}}}b=Ic[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Lc="undefined"!==typeof Uint8Array;var Mc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Nc(a,b){Object.isFrozen(a)||(Mc?a[Mc]|=b:void 0!==a.Ma?a.Ma|=b:Object.defineProperties(a,{Ma:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Oc(a){var b;Mc?b=a[Mc]:b=a.Ma;return null==b?0:b}
function Pc(a){Nc(a,1);return a}
function Qc(a){return Array.isArray(a)?!!(Oc(a)&2):!1}
function Rc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Nc(a,2)}
;function Sc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Tc,Uc=Object.freeze(Pc([]));function Vc(a){if(Qc(a.G))throw Error("Cannot mutate an immutable Message");}
var Wc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function $c(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function ad(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Lc&&null!=a&&a instanceof Uint8Array)return Kc(a)}return a}
;function bd(a,b){b=void 0===b?cd:b;return dd(a,b)}
function ed(a,b){if(null!=a){if(Array.isArray(a))a=dd(a,b);else if(Sc(a)){var c={},d;for(d in a)c[d]=ed(a[d],b);a=c}else a=b(a);return a}}
function dd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ed(c[d],b);Array.isArray(a)&&Oc(a)&1&&Pc(c);return c}
function fd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=ad(a);return Array.isArray(a)?bd(a,fd):a}
function cd(a){return Lc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function gd(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.G[b+a.j]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Vc(a);b<a.l&&!d?a.G[b+a.j]=c:(a.i||(a.i=a.G[a.l+a.j]={}))[b]=c;return a}
function hd(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=gd(a,b,d);null==e&&(e=Uc);if(Qc(a.G))c&&(Rc(e),Object.freeze(e));else if(e===Uc||Qc(e))e=Pc(e.slice()),D(a,b,e,d);return e}
function id(a,b,c,d){Vc(a);(c=jd(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),D(a,c));return D(a,b,d)}
function jd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=gd(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function kd(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=gd(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Qc(a.G)&&Rc(b.G);return a.h[c]=b}
function ld(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Qc(a.G),f=a.h[c];if(!f){d=hd(a,c,!0,d);f=[];e=e||Qc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Rc(f[g].G);e&&(Rc(f),Object.freeze(f));a.h[c]=f}return f}
function H(a,b,c,d){d=void 0===d?!1:d;Vc(a);a.h||(a.h={});var e=c?c.G:c;a.h[b]=c;return D(a,b,e,d)}
function md(a,b,c,d){Vc(a);a.h||(a.h={});var e=d?d.G:d;a.h[b]=d;id(a,b,c,e)}
function nd(a,b,c,d){var e=void 0===e?!1:e;Vc(a);e=ld(a,c,b,e);c=d?d:new c;a=hd(a,b);e.push(c);a.push(c.G)}
function od(a,b){a=gd(a,b);return null==a?"":a}
;function pd(a,b,c){a||(a=qd);qd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Sc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.G[a])?Array.isArray(d)&&Pc(d):this.G[a]=Uc;else{d=this.i||(this.i=this.G[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Pc(e):d[a]=Uc}}
pd.prototype.toJSON=function(){var a=this.G;return Tc?a:bd(a,fd)};
function rd(a){Tc=!0;try{return JSON.stringify(a.toJSON(),sd)}finally{Tc=!1}}
pd.prototype.clone=function(){var a=bd(this.G);qd=a;a=new this.constructor(a);qd=null;td(a,this);return a};
pd.prototype.toString=function(){return this.G.toString()};
function sd(a,b){return ad(b)}
function td(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=ld(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)td(f[g],e[g])}else(f=kd(a,e.constructor,g,void 0,f))&&td(f,e)}}}}
var qd;function ud(){pd.apply(this,arguments)}
r(ud,pd);if(Wc){var vd={};Object.defineProperties(ud,(vd[Symbol.hasInstance]=$c(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),vd))};function wd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;Vc(a);if(b){var e=Pc([]);for(var f=0;f<b.length;f++)e[f]=b[f].G;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Uc;a=D(a,c,e,d)}else a=H(a,c,b,!0);return a}
;function J(){ud.apply(this,arguments)}
r(J,ud);if(Wc){var xd={};Object.defineProperties(J,(xd[Symbol.hasInstance]=$c(Object[Symbol.hasInstance]),xd))};function yd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new yd;this.j=c.promise;this.l=p((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Nb:d,wc:e})})},!0)).next().value;
this.vc=c.promise.then(function(){})}
zd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Nb;return new Promise(function(d){c(function(e){d(e)},[a.ob,
a.xc])})})};
zd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.wc)&&a()})};
zd.prototype.h=function(){return this.i};var Ad=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bd={};function Cd(){}
function Dd(a){this.h=a}
r(Dd,Cd);Dd.prototype.toString=function(){return this.h};
var Ed=new Dd("about:invalid#zTSz",Bd);function Fd(a){if(a instanceof Cd)if(a instanceof Dd)a=a.h;else throw Error("");else a=Ob(a);return a}
;function Gd(a,b){a.src=Hb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Hd.prototype;l.clone=function(){return new Hd(this.x,this.y)};
l.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Id(a,b){this.width=a;this.height=b}
l=Id.prototype;l.clone=function(){return new Id(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Kd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Md(a){var b=Nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Od(){var a=[];Md(function(b){a.push(b)});
return a}
var Nd={Oc:"allow-forms",Pc:"allow-modals",Qc:"allow-orientation-lock",Rc:"allow-pointer-lock",Sc:"allow-popups",Tc:"allow-popups-to-escape-sandbox",Uc:"allow-presentation",Vc:"allow-same-origin",Wc:"allow-scripts",Xc:"allow-top-navigation",Yc:"allow-top-navigation-by-user-activation"},Pd=cb(function(){return Od()});
function Qd(){var a=Rd(),b={};eb(Pd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Rd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Sd(a){this.isValid=a}
function Td(a){return new Sd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ud=[Td("data"),Td("http"),Td("https"),Td("mailto"),Td("ftp"),new Sd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Vd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Wd=(new Date).getTime();function $d(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ae="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" ");fa(ae);function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var C=g,v=0;64>v;v+=4)C[v/4]=u[v]<<24|u[v+1]<<16|u[v+2]<<8|u[v+3];for(v=16;80>v;v++)u=C[v-3]^C[v-8]^C[v-14]^C[v-16],C[v]=(u<<1|u>>>31)&4294967295;u=e[0];var E=e[1],F=e[2],I=e[3],R=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=I^E&(F^I);var S=1518500249}else O=E^F^I,S=1859775393;else 60>v?(O=E&F|I&(E|F),S=2400959708):(O=E^F^I,S=3395469782);O=((u<<5|u>>>27)&4294967295)+O+R+S+C[v]&4294967295;R=I;I=F;F=(E<<30|E>>>2)&4294967295;E=u;u=O}e[0]=e[0]+u&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+R&4294967295}
function c(u,C){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var v=[],E=0,F=u.length;E<F;++E)v.push(u.charCodeAt(E));u=v}C||(C=u.length);v=0;if(0==m)for(;v+64<C;)b(u.slice(v,v+64)),v+=64,q+=64;for(;v<C;)if(f[m++]=u[v++],q++,64==m)for(m=0,b(f);v+64<C;)b(u.slice(v,v+64)),v+=64,q+=64}
function d(){var u=[],C=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=C&255,C>>>=8;b(f);for(v=C=0;5>v;v++)for(var E=24;0<=E;E-=8)u[C++]=e[v]>>E&255;return u}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Rb:function(){for(var u=d(),C="",v=0;v<u.length;v++)C+="0123456789ABCDEF".charAt(Math.floor(u[v]/16))+"0123456789ABCDEF".charAt(u[v]%16);return C}}}
;function ce(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,de($d(d),a,c||null)].join(" "):null}
function de(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),ee(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ee(a){var b=be();b.update(a);return b.Rb().toLowerCase()}
;var fe={};function ge(a){this.h=a||{cookie:""}}
l=ge.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Oa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Zo;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Oa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Oa:0,path:b,domain:c});return d};
l.Ya=function(){return he(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=he(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function he(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ie=new ge("undefined"==typeof document?null:document);function je(a){return!!fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ke(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;je(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new ge(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");je(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function le(a,b,c,d){(a=x[a])||(a=(new ge(document)).get(b));return a?ce(a,c,d):null}
function me(a){var b=void 0===b?!1:b;var c=$d(String(x.location.href)),d=[];if(ke(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new ge(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&je(b)&&((b=le("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=le("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ne(a){if(Wc){var b={};Object.defineProperties(a,(b[Symbol.hasInstance]=$c(Object[Symbol.hasInstance]),b))}}
;function oe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function pe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?pe.apply(null,d):oe(d)}}
;function K(){this.C=this.C;this.o=this.o}
K.prototype.C=!1;K.prototype.h=function(){return this.C};
K.prototype.dispose=function(){this.C||(this.C=!0,this.I())};
function qe(a,b){a.C?b():(a.o||(a.o=[]),a.o.push(b))}
K.prototype.I=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function re(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
re.prototype.stopPropagation=function(){this.j=!0};
re.prototype.preventDefault=function(){this.defaultPrevented=!0};function se(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=te(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ue[c])c=ue[c];else{c=String(c);if(!ue[c]){var f=/function\s+([^\(]+)/m.exec(c);ue[c]=f?f[1]:"[Anonymous]"}c=ue[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function te(a,b){b||(b={});b[ve(a)]=!0;var c=a.stack||"";(a=a.Ob)&&!b[ve(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=te(a,b));return c}
function ve(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ue={};var we=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",function(){},b),x.removeEventListener("test",function(){},b)}catch(c){}return a}();function xe(a,b){re.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(xe,re);var ye={2:"touch",3:"pen",4:"mouse"};
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ye[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&xe.aa.preventDefault.call(this)};
xe.prototype.stopPropagation=function(){xe.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(1E6*Math.random()|0);var Ae=0;function Be(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++Ae;this.ya=this.Ha=!1}
function Ce(a){a.ya=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null}
;function De(a){this.src=a;this.listeners={};this.h=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.Ha=!1)):(b=new Be(b,this.src,f,!!d,e),b.Ha=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ya&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.W(b,c,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new De(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)we||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.l.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Le(c),a&&a[ze])?a.l.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.ya){var b=a.src;if(b&&b[ze])Fe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.h&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.ya)a=!0;else{b=new xe(b,this);var c=a.listener,d=a.La||a.src;a.Ha&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){K.call(this);this.l=new De(this);this.Y=this;this.L=null}
Ya(Ue,K);Ue.prototype[ze]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.Y;c=b.type||b;"string"===typeof b?b=new re(b,a):b instanceof re?b.target=b.target||a:(e=b,b=new re(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=We(g,c,!0,b)&&e}b.j||(g=b.h=a,e=We(g,c,!0,b)&&e,b.j||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.I=function(){Ue.aa.I.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.h--}}this.L=null};
Ue.prototype.W=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function We(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ya&&g.capture==c){var h=g.listener,k=g.La||g.src;g.Ha&&Fe(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Xe(a){Ue.call(this);var b=this;this.A=this.j=0;this.V=null!=a?a:{N:function(e,f){return setTimeout(e,f)},
U:clearTimeout};var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return t(e,Ye(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Ze(this)}
r(Xe,Ue);function $e(){var a=af;Xe.h||(Xe.h=new Xe(a));return Xe.h}
Xe.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.V.U(this.A);delete Xe.h};
Xe.prototype.H=function(){return this.i};
function Ze(a){a.A=a.V.N(function(){var b;return w(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):t(c,Ye(a),3):t(c,Ye(a),3);Ze(a);c.h=0})},3E4)}
function Ye(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.V.N(function(){d.abort()},b||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.u=void 0;a.j&&(a.V.U(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Ve(a,"networkstatus-online"):Ve(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.s(3)}})})}
;var bf={xo:"WEB_DISPLAY_MODE_UNKNOWN",to:"WEB_DISPLAY_MODE_BROWSER",vo:"WEB_DISPLAY_MODE_MINIMAL_UI",wo:"WEB_DISPLAY_MODE_STANDALONE",uo:"WEB_DISPLAY_MODE_FULLSCREEN"};function cf(){this.data_=[];this.h=-1}
cf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
cf.prototype.get=function(a){return!!this.data_[a]};
function df(a){-1==a.h&&(a.h=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ef(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ef.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ff(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var gf;function hf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Kd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.mb;c.mb=null;e()}};
return function(e){d.next={mb:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function jf(a){x.setTimeout(function(){throw a;},0)}
;function kf(){this.i=this.h=null}
kf.prototype.add=function(a,b){var c=lf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
kf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var lf=new ef(function(){return new mf},function(a){return a.reset()});
function mf(){this.next=this.scope=this.h=null}
mf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
mf.prototype.reset=function(){this.next=this.scope=this.h=null};function nf(a,b){of||pf();qf||(of(),qf=!0);rf.add(a,b)}
var of;function pf(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);of=function(){a.then(sf)}}else of=function(){var b=sf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!B("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(gf||(gf=hf()),gf(b)):x.setImmediate(b)}}
var qf=!1,rf=new kf;function sf(){for(var a;a=rf.remove();){try{a.h.call(a.scope)}catch(b){jf(b)}ff(lf,a)}qf=!1}
;function tf(a,b){this.h=a[x.Symbol.iterator]();this.i=b}
tf.prototype[Symbol.iterator]=function(){return this};
tf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function uf(a,b){return new tf(a,b)}
;function vf(){this.blockSize=-1}
;function wf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(wf,vf);wf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)xf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xf(this,e);f=0;break}}this.i=f;this.l+=b}};
wf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;xf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Af(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Bf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Af(a,"inverted-hdpi")&&zf(a,Array.prototype.filter.call(a.classList?a.classList:yf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Cf(){}
Cf.prototype.next=function(){return Df};
var Df={done:!0,value:void 0};function Ef(a){return{value:a,done:!1}}
Cf.prototype.Z=function(){return this};function Ff(a){if(a instanceof Gf||a instanceof Hf||a instanceof If)return a;if("function"==typeof a.next)return new Gf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Gf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Z)return new Gf(function(){return a.Z()});
throw Error("Not an iterator or iterable.");}
function Gf(a){this.i=a}
Gf.prototype.Z=function(){return new Hf(this.i())};
Gf.prototype[Symbol.iterator]=function(){return new If(this.i())};
Gf.prototype.h=function(){return new If(this.i())};
function Hf(a){this.i=a}
r(Hf,Cf);Hf.prototype.next=function(){return this.i.next()};
Hf.prototype[Symbol.iterator]=function(){return new If(this.i)};
Hf.prototype.h=function(){return new If(this.i)};
function If(a){Gf.call(this,function(){return a});
this.j=a}
r(If,Gf);If.prototype.next=function(){return this.j.next()};function Jf(a,b){this.i={};this.h=[];this.ia=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Jf)for(c=a.Ya(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Jf.prototype;l.Ya=function(){Kf(this);return this.h.concat()};
l.has=function(a){return Lf(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Mf;Kf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Mf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ia=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Lf(this.i,a)?(delete this.i[a],--this.size,this.ia++,this.h.length>2*this.size&&Kf(this),!0):!1};
function Kf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Lf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Lf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Lf(this.i,a)?this.i[a]:b};
l.set=function(a,b){Lf(this.i,a)||(this.size+=1,this.h.push(a),this.ia++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Ya(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Jf(this)};
l.keys=function(){return Ff(this.Z(!0)).h()};
l.values=function(){return Ff(this.Z(!1)).h()};
l.entries=function(){var a=this;return uf(this.keys(),function(b){return[b,a.get(b)]})};
l.Z=function(a){Kf(this);var b=0,c=this.ia,d=this,e=new Cf;e.next=function(){if(c!=d.ia)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Df;var f=d.h[b++];return Ef(a?f:d.i[f])};
return e};
function Lf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Pf(a){var b=[];Qf(new Rf,a,b);return b.join("")}
function Rf(){}
function Qf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Sf(d,c),c.push(":"),Qf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Sf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Tf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Uf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Sf(a,b){b.push('"',a.replace(Uf,function(c){var d=Tf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Tf[c]=d);return d}),'"')}
;function Vf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Wf(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Xf(b,2,c)},function(c){Xf(b,3,c)})}catch(c){Xf(this,3,c)}}
function Yf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Yf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Zf=new ef(function(){return new Yf},function(a){a.reset()});
function $f(a,b,c){var d=Zf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function ag(a){return new Wf(function(b,c){c(a)})}
Wf.prototype.then=function(a,b,c){return bg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Wf.prototype.$goog_Thenable=!0;function cg(a,b){return bg(a,null,b)}
Wf.prototype.cancel=function(a){if(0==this.h){var b=new dg(a);nf(function(){eg(this,b)},this)}};
function eg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?eg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):fg(c),gg(c,e,3,b)))}a.j=null}else Xf(a,3,b)}
function hg(a,b){a.i||2!=a.h&&3!=a.h||ig(a);a.l?a.l.next=b:a.i=b;a.l=b}
function bg(a,b,c,d){var e=$f(null,null,null);e.h=new Wf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof dg?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;hg(a,e);return e.h}
Wf.prototype.A=function(a){this.h=0;Xf(this,2,a)};
Wf.prototype.L=function(a){this.h=0;Xf(this,3,a)};
function Xf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof Wf){hg(d,$f(e||bb,f||null,a));var g=!0}else if(Vf(d))d.then(e,f,a),g=!0;else{if(Qa(d))try{var h=d.then;if("function"===typeof h){jg(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.C=c,a.h=b,a.j=null,ig(a),3!=b||c instanceof dg||kg(a,c))}}
function jg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ig(a){a.m||(a.m=!0,nf(a.u,a))}
function fg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Wf.prototype.u=function(){for(var a;a=fg(this);)gg(this,a,this.h,this.C);this.m=!1};
function gg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,lg(b,c,d);else try{b.j?b.i.call(b.context):lg(b,c,d)}catch(e){mg.call(null,e)}ff(Zf,b)}
function lg(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function kg(a,b){a.o=!0;nf(function(){a.o&&mg.call(null,b)})}
var mg=jf;function dg(a){$a.call(this,a)}
Ya(dg,$a);dg.prototype.name="cancel";function L(a){K.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Ya(L,K);l=L.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function ng(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ta(b)}}
l.ta=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ja=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];og(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ta(c)}}return 0!=e}return!1};
function og(a,b,c){nf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ta,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.I=function(){L.aa.I.call(this);this.clear();this.l.length=0};function pg(a){this.h=a}
pg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Pf(b))};
pg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pg.prototype.remove=function(a){this.h.remove(a)};function qg(a){this.h=a}
Ya(qg,pg);function rg(a){this.data=a}
function sg(a){return void 0===a||a instanceof rg?a:new rg(a)}
qg.prototype.set=function(a,b){qg.aa.set.call(this,a,sg(b))};
qg.prototype.i=function(a){a=qg.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function tg(a){this.h=a}
Ya(tg,qg);tg.prototype.set=function(a,b,c){if(b=sg(b)){if(c){if(c<Date.now()){tg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}tg.aa.set.call(this,a,b)};
tg.prototype.i=function(a){var b=tg.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())tg.prototype.remove.call(this,a);else return b}};function ug(){}
;function vg(){}
Ya(vg,ug);vg.prototype[Symbol.iterator]=function(){return Ff(this.Z(!0)).h()};
vg.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function wg(a){this.h=a}
Ya(wg,vg);l=wg.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Z=function(a){var b=0,c=this.h,d=new Cf;d.next=function(){if(b>=c.length)return Df;var e=c.key(b++);if(a)return Ef(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ef(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function xg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Ya(xg,wg);function yg(a,b){this.i=a;this.h=null;var c;if(c=rc)c=!(9<=Number(Ec));if(c){zg||(zg=new Jf);this.h=zg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),zg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(yg,vg);var Ag={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zg=null;function Bg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ag[b]})}
l=yg.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Bg(a),b);Cg(this)};
l.get=function(a){a=this.h.getAttribute(Bg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Bg(a));Cg(this)};
l.Z=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Cf;d.next=function(){if(b>=c.length)return Df;var e=c[b++];if(a)return Ef(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ef(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Cg(this)};
function Cg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Dg(a,b){this.i=a;this.h=b+"::"}
Ya(Dg,vg);Dg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Dg.prototype.get=function(a){return this.i.get(this.h+a)};
Dg.prototype.remove=function(a){this.i.remove(this.h+a)};
Dg.prototype.Z=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Cf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ef(a?e.slice(c.h.length):c.i.get(e))};
return d};function Eg(a){J.call(this,a)}
r(Eg,J);Eg.prototype.getKey=function(){return gd(this,1)};
Eg.prototype.getValue=function(){return gd(this,2===jd(this,Fg)?2:-1)};
Eg.prototype.setValue=function(a){return id(this,2,Fg,a)};
var Fg=[2,3,4,5,6];function Gg(a){J.call(this,a)}
r(Gg,J);function Hg(a){J.call(this,a)}
r(Hg,J);function Ig(a){J.call(this,a,-1,Jg)}
r(Ig,J);Ig.prototype.getPlayerType=function(){return gd(this,36)};
Ig.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Jg=[9,66,24,32,86,100,101];function Kg(a){J.call(this,a,-1,Lg)}
r(Kg,J);var Lg=[15,26,28];function Mg(a){J.call(this,a)}
r(Mg,J);Mg.prototype.setToken=function(a){return D(this,2,a)};function Ng(a){J.call(this,a,-1,Og)}
r(Ng,J);Ng.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Og=[12];function Pg(a){J.call(this,a,-1,Qg)}
r(Pg,J);var Qg=[12];function Rg(a){J.call(this,a,-1,Sg)}
r(Rg,J);function Tg(a){J.call(this,a)}
r(Tg,J);Tg.prototype.getKey=function(){return od(this,1)};
Tg.prototype.getValue=function(){return od(this,2)};
Tg.prototype.setValue=function(a){return D(this,2,a)};
var Sg=[4,5];function Ug(a){J.call(this,a)}
r(Ug,J);function Vg(a){J.call(this,a)}
r(Vg,J);var Wg=[2,3];function Xg(a){J.call(this,a)}
r(Xg,J);Xg.prototype.getMessage=function(){return od(this,1)};function Yg(a){J.call(this,a)}
r(Yg,J);function Zg(a){J.call(this,a)}
r(Zg,J);function $g(a){J.call(this,a,-1,ah)}
r($g,J);var ah=[10,17];function bh(a){J.call(this,a)}
r(bh,J);function ch(a){J.call(this,a)}
r(ch,J);ch.prototype.S=function(a){D(this,1,a)};function dh(a){J.call(this,a)}
r(dh,J);function eh(a){J.call(this,a)}
r(eh,J);function fh(a){J.call(this,a)}
r(fh,J);function gh(a,b){H(a,1,b)}
fh.prototype.S=function(a){D(this,2,a)};
function hh(a){J.call(this,a)}
r(hh,J);function ih(a,b){H(a,1,b)}
;function jh(a){J.call(this,a,-1,kh)}
r(jh,J);jh.prototype.S=function(a){D(this,1,a)};
function lh(a,b){H(a,2,b)}
var kh=[3];function mh(a){J.call(this,a)}
r(mh,J);mh.prototype.S=function(a){D(this,1,a)};function nh(a){J.call(this,a)}
r(nh,J);nh.prototype.S=function(a){D(this,1,a)};function oh(a){J.call(this,a)}
r(oh,J);oh.prototype.S=function(a){D(this,1,a)};function ph(a){J.call(this,a)}
r(ph,J);function qh(a){J.call(this,a)}
r(qh,J);function rh(a){J.call(this,a,-1,sh)}
r(rh,J);rh.prototype.getPlayerType=function(){var a=gd(this,7);return null==a?0:a};
rh.prototype.setVideoId=function(a){return D(this,19,a)};
function th(a,b){nd(a,68,uh,b)}
function uh(a){J.call(this,a)}
r(uh,J);uh.prototype.getId=function(){return od(this,2)};
var sh=[83,68];function vh(a){J.call(this,a)}
r(vh,J);function wh(a){J.call(this,a)}
r(wh,J);function xh(a){J.call(this,a)}
r(xh,J);function yh(a){J.call(this,a,431)}
r(yh,J);
var zh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,117];var Ah={Gh:0,rh:1,xh:2,yh:4,Dh:8,zh:16,Ah:32,Fh:64,Eh:128,th:256,vh:512,Ch:1024,uh:2048,wh:4096,sh:8192,Bh:16384};function Bh(a){J.call(this,a)}
r(Bh,J);function Ch(a){J.call(this,a)}
r(Ch,J);Ch.prototype.setVideoId=function(a){return id(this,1,Dh,a)};
Ch.prototype.getPlaylistId=function(){return gd(this,2===jd(this,Dh)?2:-1)};
var Dh=[1,2];function Eh(a){J.call(this,a,-1,Fh)}
r(Eh,J);var Fh=[3];function Gh(a){J.call(this,a,1)}
r(Gh,J);function Hh(a){J.call(this,a)}
r(Hh,J);var Ih;Ih=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=wd}(406606992,{Ro:0},Hh);function Jh(){Hh.apply(this,arguments)}
r(Jh,Hh);ne(Jh);function Kh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Lh=x.window,Mh,Nh,Oh=(null==Lh?void 0:null==(Mh=Lh.yt)?void 0:Mh.config_)||(null==Lh?void 0:null==(Nh=Lh.ytcfg)?void 0:Nh.data_)||{},Ph,Qh=(null==Lh?void 0:null==(Ph=Lh.ytcfg)?void 0:Ph.obfuscatedData_)||[];function Rh(){Gh.apply(this,arguments)}
r(Rh,Gh);ne(Rh);var Sh=new Rh(Qh),Th=Oh.EXPERIMENT_FLAGS;if(!Th||!Th.jspb_i18n_extension){var Uh=new Jh;Ih.i(Sh,Uh)}y("yt.config_",Oh);y("yt.configJspb_",Qh);function Vh(){Kh(Oh,arguments)}
function A(a,b){return a in Oh?Oh[a]:b}
function Wh(){var a=Oh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Xh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Yh(a,b){a=Xh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Zh(){return A("EXPERIMENTS_TOKEN","")}
function Xh(a){var b=A("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:A("EXPERIMENT_FLAGS",{})[a]}
function $h(){var a=[],b=A("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=A("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ai=[];function bi(a){ai.forEach(function(b){return b(a)})}
function ci(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){di(b)}}:a}
function di(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=A("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Vh("ERRORS",e));bi(a)}
function ei(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=A("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Vh("ERRORS",e))}
;function fi(){var a=gi;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a)}
function hi(a){y("yt.ads.biscotti.lastId_",a)}
;var ii=/^[\w.]*$/,ji={q:!0,search_query:!0};function ki(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=li(f[0]||""),h=li(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(u){var k=u,m=f[0],q=String(ki);k.args=[{key:m,value:f[1],query:a,method:mi==q?"unchanged":q}];ji.hasOwnProperty(m)||ei(k)}}return c}
var mi=String(ki);function ni(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function oi(a){"?"==a.charAt(0)&&(a=a.substr(1));return ki(a,"&")}
function pi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),oi(1<a.length?a[1]:a[0])):{}}
function qi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=oi(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function ri(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function li(a){return a&&a.match(ii)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function si(a){var b=ti;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Wd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ad:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Ad.screen)?void 0:k.height;var m;e.u_w=null==(m=Ad.screen)?void 0:m.width;var q;e.u_ah=null==(q=Ad.screen)?void 0:q.availHeight;var u;e.u_aw=
null==(u=Ad.screen)?void 0:u.availWidth;var C;e.u_cd=null==(C=Ad.screen)?void 0:C.colorDepth}catch(ua){}h=b.h;try{var v=h.screenX;var E=h.screenY}catch(ua){}try{var F=h.outerWidth;var I=h.outerHeight}catch(ua){}try{var R=h.innerWidth;var O=h.innerHeight}catch(ua){}try{var S=h.screenLeft;var ka=h.screenTop}catch(ua){}try{R=h.innerWidth,O=h.innerHeight}catch(ua){}try{var N=h.screen.availWidth;var Ca=h.screen.availTop}catch(ua){}v=[S,ka,v,E,N,Ca,F,I,R,O];try{var Oa=(b.h.top||window).document,va="CSS1Compat"==
Oa.compatMode?Oa.documentElement:Oa.body;var G=(new Id(va.clientWidth,va.clientHeight)).round()}catch(ua){G=new Id(-12245933,-12245933)}Oa=G;G={};var Da=void 0===Da?x:Da;va=new cf;Da.SVGElement&&Da.document.createElementNS&&va.set(0);E=Qd();E["allow-top-navigation-by-user-activation"]&&va.set(1);E["allow-popups-to-escape-sandbox"]&&va.set(2);Da.crypto&&Da.crypto.subtle&&va.set(3);Da.TextDecoder&&Da.TextEncoder&&va.set(4);Da=df(va);G.bc=Da;G.bih=Oa.height;G.biw=Oa.width;G.brdim=v.join();b=b.i;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Ad.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ti=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ni(si(a))});Date.now();var ui="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function vi(){if(!ui)return null;var a=ui();return"open"in a?a:null}
function wi(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function xi(a,b){"function"===typeof a&&(a=ci(a));return window.setTimeout(a,b)}
function yi(a){window.clearTimeout(a)}
;var zi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ai="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(ae)),Bi=!1;
function Xi(a,b){b=void 0===b?{}:b;var c=ri(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in zi){var f=A(zi[e]);!f||!c&&cc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=
g)}if(c||!cc(a))b["X-YouTube-Ad-Signals"]=ni(si());return b}
function Yi(a){var b=window.location.search,c=cc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!ri(a)||(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=oi(b),f={};eb(Ai,function(g){e[g]&&(f[g]=e[g])});
return qi(a,f||{},!1)}
function Zi(a,b){var c=b.format||"JSON";a=$i(a,b);var d=aj(a,b),e=!1,f=bj(a,function(k){if(!e){e=!0;h&&yi(h);var m=wi(k),q=null,u=400<=k.status&&500>k.status,C=500<=k.status&&600>k.status;if(m||u||C)q=cj(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};u=b.context||x;m?b.onSuccess&&b.onSuccess.call(u,k,q):b.onError&&b.onError.call(u,k,q);b.onFinish&&b.onFinish.call(u,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=xi(function(){e||(e=!0,f.abort(),yi(h),g.call(b.context||x,f))},d)}return f}
function $i(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=A("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=qi(a,b||{},!0);return a}
function aj(a,b){var c=A("XSRF_FIELD_NAME"),d=A("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=A("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=oi(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!ob(f);!Bi&&f&&"POST"!=b.method&&(Bi=
!0,di(Error("AJAX request with postData should use POST")));return e}
function cj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ei(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?dj(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ej(g)})}d&&fj(e);
return e}
function fj(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new Tb(d)}else fj(a[b])}}
function dj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ej(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function bj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ci(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=vi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Yi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Xi(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function gj(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function hj(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function ij(a,b,c,d,e){ie.set(""+a,b,{Oa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function jj(a){return ie.get(""+a,void 0)}
function kj(){if(!ie.isEnabled())return!1;if(!ie.isEmpty())return!0;ie.set("TESTCOOKIESENABLED","1",{Oa:60});if("1"!==ie.get("TESTCOOKIESENABLED"))return!1;ie.remove("TESTCOOKIESENABLED");return!0}
;var lj=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",lj);function mj(){this.h=A("ALT_PREF_COOKIE_NAME","PREF");this.i=A("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=jj(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(lj[d]=c.toString())}}}
mj.prototype.get=function(a,b){nj(a);oj(a);a=void 0!==lj[a]?lj[a].toString():null;return null!=a?a:b?b:""};
mj.prototype.set=function(a,b){nj(a);oj(a);if(null==b)throw Error("ExpectedNotNull");lj[a]=b.toString()};
function pj(a){return!!((qj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
mj.prototype.remove=function(a){nj(a);oj(a);delete lj[a]};
mj.prototype.clear=function(){for(var a in lj)delete lj[a]};
function oj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function nj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function qj(a){a=void 0!==lj[a]?lj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ma(mj);var rj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},sj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},tj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},uj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function vj(){var a=x.navigator;return a?a.connection:void 0}
function wj(){var a=vj();if(a){var b=rj[a.type||"unknown"]||"CONN_UNKNOWN";a=rj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function xj(){var a=vj();if(null!=a&&a.effectiveType)return uj.hasOwnProperty(a.effectiveType)?uj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function yj(){return"INNERTUBE_API_KEY"in Oh&&"INNERTUBE_API_VERSION"in Oh}
function zj(){return{innertubeApiKey:A("INNERTUBE_API_KEY"),innertubeApiVersion:A("INNERTUBE_API_VERSION"),ab:A("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),vb:A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vb:A("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:A("INNERTUBE_CONTEXT_CLIENT_VERSION"),xb:A("INNERTUBE_CONTEXT_HL"),wb:A("INNERTUBE_CONTEXT_GL"),Wb:A("INNERTUBE_HOST_OVERRIDE")||"",Yb:!!A("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xb:!!A("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:A("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Aj(a){var b={client:{hl:a.xb,gl:a.wb,clientName:a.vb,clientVersion:a.innertubeContextClientVersion,configInfo:a.ab}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Zh();""!==c&&(b.client.experimentsToken=c);c=$h();0<c.length&&(b.request={internalExperimentFlags:c});Bj(a,void 0,b);Cj(void 0,b);Dj(a,void 0,b);Ej(void 0,b);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:A("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(oi(A("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Fj(a){var b=new Pg,c=new Ig;D(c,1,a.xb);D(c,2,a.wb);D(c,16,a.Vb);D(c,17,a.innertubeContextClientVersion);if(a.ab){var d=a.ab,e=new Gg;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);H(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&D(c,65,d);d=Zh();""!==d&&D(c,54,d);d=$h();if(0<d.length){e=new Kg;for(var f=0;f<d.length;f++){var g=new Eg;D(g,1,d[f].key);g.setValue(d[f].value);nd(e,15,Eg,g)}H(b,
5,e)}Bj(a,c);Cj(c);Dj(a,c);Ej(c);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Ng,D(a,3,A("DELEGATED_SESSION_ID")));a=p(Object.entries(oi(A("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);H(b,1,c);return b}
function Bj(a,b,c){a=a.vb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=kd(b,Hg,96)||new Hg;var d=hj();d=Object.keys(bf).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=hj())}
function Cj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Dj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=kd(b,Gg,62))?d:new Gg;D(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ej(a,b){var c=wj();c&&(a?D(a,61,sj[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=xj())&&(a?D(a,94,tj[c]):b&&(b.client.effectiveConnectionType=c))}
function Gj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":A("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||A("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Mo||A("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().Lo:b=me([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=A("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return d}
;function Hj(a){a=Object.assign({},a);delete a.Authorization;var b=me();if(b){var c=new wf;c.update(A("INNERTUBE_API_KEY"));c.update(b);a.hash=Kc(c.digest(),3)}return a}
;function Ij(a){var b=new xg;(b=b.isAvailable()?a?new Dg(b,a):b:null)||(a=new yg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new tg(a):null;this.i=document.domain||window.location.hostname}
Ij.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Pf(b))}catch(f){return}else e=escape(b);ij(a,e,c,this.i)};
Ij.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=jj(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ij.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ie.remove(""+a,"/",void 0===b?"youtube.com":b)};var Jj=window,P=Jj.ytcsi&&Jj.ytcsi.now?Jj.ytcsi.now:Jj.performance&&Jj.performance.timing&&Jj.performance.now&&Jj.performance.timing.navigationStart?function(){return Jj.performance.timing.navigationStart+Jj.performance.now()}:function(){return(new Date).getTime()};var Kj;function Lj(){Kj||(Kj=new Ij("yt.innertube"));return Kj}
function Mj(a,b,c,d){if(d)return null;d=Lj().get("nextId",!0)||1;var e=Lj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Hj(c),requestTime:Math.round(P())};Lj().set("nextId",d+1,86400,!0);Lj().set("requests",e,86400,!0);return d}
function Nj(a){var b=Lj().get("requests",!0)||{};delete b[a];Lj().set("requests",b,86400,!0)}
function Oj(a){var b=Lj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Hj(Gj(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Pj(a,d.method,e,{}));delete b[c]}}Lj().set("requests",b,86400,!0)}}
;function Qj(){}
function Rj(a,b){return Sj(a,0,b)}
Qj.prototype.N=function(a,b){return Sj(a,1,b)};
function Tj(a,b){Sj(a,2,b)}
function Uj(a){var b=z("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Vj(){Qj.apply(this,arguments)}
r(Vj,Qj);function Wj(){Vj.h||(Vj.h=new Vj);return Vj.h}
function Sj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):xi(a,c||0)}
Vj.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=z("yt.scheduler.instance.cancelJob");b?b(a):yi(a)}};
Vj.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
Vj.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};var af=Wj();var Xj=Fc||Gc;function Yj(a){var b=Qb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Zj=function(){var a;return function(){a||(a=new Ij("ytidb"));return a}}();
function ak(){var a;return null==(a=Zj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var bk=[],ck,dk=!1;function ek(){var a={};for(ck=new fk(void 0===a.handleError?gk:a.handleError,void 0===a.logEvent?hk:a.logEvent);0<bk.length;)switch(a=bk.shift(),a.type){case "ERROR":ck.handleError(a.payload);break;case "EVENT":ck.logEvent(a.eventType,a.payload)}}
function ik(a){dk||(ck?ck.handleError(a):(bk.push({type:"ERROR",payload:a}),10<bk.length&&bk.shift()))}
function jk(a,b){dk||(ck?ck.logEvent(a,b):(bk.push({type:"EVENT",eventType:a,payload:b}),10<bk.length&&bk.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function kk(){try{return lk(),!0}catch(a){return!1}}
function lk(a){if(void 0!==A("DATASYNC_ID"))return A("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function mk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function nk(a){return a.substr(0,a.indexOf(":"))||a}
;var ok={},pk=(ok.AUTH_INVALID="No user identifier specified.",ok.EXPLICIT_ABORT="Transaction was explicitly aborted.",ok.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ok.MISSING_INDEX="Index not created.",ok.MISSING_OBJECT_STORES="Object stores not created.",ok.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ok.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ok.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ok.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ok.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ok.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ok.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ok),qk={},rk=(qk.AUTH_INVALID="ERROR",qk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",qk.EXPLICIT_ABORT="IGNORED",qk.IDB_NOT_SUPPORTED="ERROR",qk.MISSING_INDEX=
"WARNING",qk.MISSING_OBJECT_STORES="ERROR",qk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",qk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",qk.QUOTA_EXCEEDED="WARNING",qk.QUOTA_MAYBE_EXCEEDED="WARNING",qk.UNKNOWN_ABORT="WARNING",qk.INCOMPATIBLE_DB_VERSION="WARNING",qk),sk={},tk=(sk.AUTH_INVALID=!1,sk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,sk.EXPLICIT_ABORT=!1,sk.IDB_NOT_SUPPORTED=!1,sk.MISSING_INDEX=!1,sk.MISSING_OBJECT_STORES=!1,sk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,sk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,sk.QUOTA_EXCEEDED=!1,sk.QUOTA_MAYBE_EXCEEDED=!0,sk.UNKNOWN_ABORT=!0,sk.INCOMPATIBLE_DB_VERSION=!1,sk);function uk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?pk[a]:c;d=void 0===d?rk[a]:d;e=void 0===e?tk[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,uk.prototype)}
r(uk,Q);function vk(a,b){uk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},pk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,vk.prototype)}
r(vk,uk);function wk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,wk.prototype)}
r(wk,Error);var xk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function yk(a,b,c,d){b=nk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof uk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new uk("QUOTA_EXCEEDED",a);if(Hc&&"UnknownError"===e.name)return new uk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof wk)return new uk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&xk.some(function(f){return e.message.includes(f)}))return new uk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new uk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Bb:e.name})];e.level="WARNING";return e}
function zk(a,b,c){var d=ak();return new uk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ak(a){if(!a)throw Error();throw a;}
function Bk(a){return a}
function Ck(a){this.h=a}
function Dk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Dk.all=function(a){return new Dk(new Ck(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ma:0};f.ma<a.length;f={ma:f.ma},++f.ma)Ek(Dk.resolve(a[f.ma]).then(function(g){return function(h){d[g.ma]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Dk.resolve=function(a){return new Dk(new Ck(function(b,c){a instanceof Dk?a.then(b,c):b(a)}))};
Dk.reject=function(a){return new Dk(new Ck(function(b,c){c(a)}))};
Dk.prototype.then=function(a,b){var c=this,d=null!=a?a:Bk,e=null!=b?b:Ak;return new Dk(new Ck(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Fk(c,c,d,f,g)}),c.onRejected.push(function(){Gk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Fk(c,c,d,f,g):"REJECTED"===c.state.status&&Gk(c,c,e,f,g)}))};
function Ek(a,b){a.then(void 0,b)}
function Fk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Dk?Hk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Gk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Dk?Hk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Dk?Hk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ik(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Jk(a){return new Promise(function(b,c){Ik(a,b,c)})}
function Kk(a){return new Dk(new Ck(function(b,c){Ik(a,b,c)}))}
;function Lk(a,b){return new Dk(new Ck(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Mk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
l=Mk.prototype;l.add=function(a,b,c){return Nk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Nk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Nk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Ok(a,b,c){a=a.h.createObjectStore(b,c);return new Pk(a)}
l.delete=function(a,b){return Nk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Nk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Qk(a,b){return Nk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Kk(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Nk(a,b,c,d){var e,f,g,h,k,m,q,u,C,v,E,F;return w(function(I){switch(I.h){case 1:var R={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){I.s(3);break}g++;k=Math.round(P());wa(I,4);m=a.h.transaction(b,e.mode);R=new Rk(m);R=Sk(R,d);return t(I,R,6);case 6:return q=I.i,u=Math.round(P()),Tk(a,k,u,g,void 0,b.join(),e),I.return(q);case 4:C=ya(I);v=Math.round(P());E=yk(C,a.h.name,b.join(),a.h.version);
if((F=E instanceof uk&&!E.h)||g>=f)Tk(a,k,v,g,E,b.join(),e),h=E;I.s(2);break;case 3:return I.return(Promise.reject(h))}})}
function Tk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof uk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&jk("QUOTA_EXCEEDED",{dbName:nk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof uk&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),jk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Uk(a,!1,d,f,b,g.tag),ik(e)):Uk(a,!0,d,f,b,g.tag)}
function Uk(a,b,c,d,e,f){jk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Pk(a){this.h=a}
l=Pk.prototype;l.add=function(a,b){return Kk(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Kk(this.h.clear()).then(function(){})};
l.count=function(a){return Kk(this.h.count(a))};
function Vk(a,b){return Wk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Vk(this,a):Kk(this.h.delete(a))};
l.get=function(a){return Kk(this.h.get(a))};
l.index=function(a){try{return new Xk(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new wk(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function Wk(a,b,c){a=a.h.openCursor(b.query,b.direction);return Yk(a).then(function(d){return Lk(d,c)})}
function Rk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=uk;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Sk(a,b){var c=new Promise(function(d,e){try{Ek(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Rk.prototype.abort=function(){this.h.abort();this.i=!0;throw new uk("EXPLICIT_ABORT");};
Rk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Pk(a),this.j.set(a,b));return b};
function Xk(a){this.h=a}
l=Xk.prototype;l.count=function(a){return Kk(this.h.count(a))};
l.delete=function(a){return Zk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Kk(this.h.get(a))};
l.getKey=function(a){return Kk(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function Zk(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Yk(a).then(function(d){return Lk(d,c)})}
function $k(a,b){this.request=a;this.cursor=b}
function Yk(a){return Kk(a).then(function(b){return b?new $k(a,b):null})}
l=$k.prototype;l.advance=function(a){this.cursor.advance(a);return Yk(this.request)};
l.continue=function(a){this.cursor.continue(a);return Yk(this.request)};
l.delete=function(){return Kk(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Kk(this.cursor.update(a))};function al(a,b,c){return new Promise(function(d,e){function f(){C||(C=new Mk(g.result,{closed:u}));return C}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.zc,q=c.upgrade,u=c.closed,C;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&jk("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:nk(a)});var E=f(),F=new Rk(g.transaction);
q&&q(E,function(I){return v.oldVersion<I&&v.newVersion>=I},F);
F.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){jk("IDB_UNEXPECTEDLY_CLOSED",{dbName:nk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function bl(a,b,c){c=void 0===c?{}:c;return al(a,b,c)}
function cl(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,Jk(c),4);
if(2!=g.h)return xa(g,0);f=ya(g);throw yk(f,a,"",-1);})}
;function dl(a){return new Promise(function(b){Tj(function(){b()},a)})}
function el(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
el.prototype.j=function(a,b,c){c=void 0===c?{}:c;return bl(a,b,c)};
el.prototype.delete=function(a){a=void 0===a?{}:a;return cl(this.name,a)};
function fl(a,b){return new uk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function gl(a,b){if(!b)throw zk("openWithToken",nk(a.name));return a.open()}
el.prototype.open=function(){function a(){var f,g,h,k,m,q,u,C,v,E;return w(function(F){switch(F.h){case 1:return g=null!=(f=Error().stack)?f:"",wa(F,2),t(F,c.j(c.name,c.options.version,e),4);case 4:h=F.i;for(var I=c.options,R=[],O=p(Object.keys(I.xa)),S=O.next();!S.done;S=O.next()){S=S.value;var ka=I.xa[S],N=void 0===ka.ic?Number.MAX_VALUE:ka.ic;!(h.h.version>=ka.Va)||h.h.version>=N||h.h.objectStoreNames.contains(S)||R.push(S)}k=R;if(0===k.length){F.s(5);break}m=Object.keys(c.options.xa);q=h.objectStoreNames();
if(c.m<Yh("ytidb_reopen_db_retries",0))return c.m++,h.close(),ik(new uk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());if(!(c.o<Yh("ytidb_remake_db_retries",1))){F.s(6);break}c.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.s(7);break}return t(F,dl(c.i),8);case 8:c.i*=2;case 7:return t(F,c.delete(),9);case 9:return ik(new uk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());
case 6:throw new vk(q,m);case 5:return F.return(h);case 2:u=ya(F);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){F.s(10);break}return t(F,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:C=F.i;v=C.h.version;if(void 0!==c.options.version&&v>c.options.version+1)throw C.close(),
c.l=!1,fl(c,v);return F.return(C);case 10:throw b(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+g.substring(g.indexOf("\n")+1)),yk(u,c.name,"",null!=(E=c.options.version)?E:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw fl(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,zc:b,upgrade:this.options.upgrade};return this.h=d=a()};var hl=new el("YtIdbMeta",{xa:{databases:{Va:1}},upgrade:function(a,b){b(1)&&Ok(a,"databases",{keyPath:"actualName"})}});
function il(a,b){var c;return w(function(d){if(1==d.h)return t(d,gl(hl,b),2);c=d.i;return d.return(Nk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Kk(f.h.put(a,void 0)).then(function(){})})}))})}
function jl(a,b){var c;return w(function(d){if(1==d.h)return a?t(d,gl(hl,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function kl(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],t(e,gl(hl,b),2)):3!=e.h?(d=e.i,t(e,Nk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return Wk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ll(a){return kl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function ml(a,b,c){return kl(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function nl(a){var b,c;return w(function(d){if(1==d.h)return b=lk("YtIdbMeta hasAnyMeta other"),t(d,kl(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var ol,pl=new function(){}(new function(){});
function ql(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=ak();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Xj)f=/WebKit\/([0-9]+)/.exec(Qb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Qb()),f=!(f&&602<=parseInt(f[1],10)));if(f||sc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(e,il(d,pl),4);case 4:return t(e,jl("yt-idb-test-do-not-use",pl),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function rl(){if(void 0!==ol)return ol;dk=!0;return ol=ql().then(function(a){dk=!1;var b;if(null!=(b=Zj())&&b.h){var c;b={hasSucceededOnce:(null==(c=ak())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Zj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function sl(){return z("ytglobal.idbToken_")||void 0}
function tl(){var a=sl();return a?Promise.resolve(a):rl().then(function(b){(b=b?pl:void 0)&&y("ytglobal.idbToken_",b);return b})}
;var ul=0;function vl(a,b){ul||(ul=af.N(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return t(h,tl(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return t(h,ml(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.s(6);break}f=e[0];return t(h,cl(f.actualName),7);case 7:return t(h,jl(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),ik(g),d=!1;case 4:af.U(ul),ul=0,d&&vl(a,b),h.h=0}})}))}
function wl(){var a;return w(function(b){return 1==b.h?t(b,tl(),2):(a=b.i)?b.return(nl(a)):b.return(!1)})}
new yd;function xl(a){if(!kk())throw a=new uk("AUTH_INVALID",{dbName:a}),ik(a),a;var b=lk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function yl(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",t(q,tl(),2);case 2:g=q.i;if(!g)throw h=zk("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ik(h),h;mk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:xl(a);wa(q,3);return t(q,il(k,g),5);case 5:return t(q,bl(k.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=ya(q),wa(q,7),t(q,jl(k.actualName,g),9);case 9:xa(q,
8);break;case 7:ya(q);case 8:throw m;}})}
function zl(a,b,c){c=void 0===c?{}:c;return yl(a,b,!1,c)}
function Al(a,b,c){c=void 0===c?{}:c;return yl(a,b,!0,c)}
function Bl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return t(e,tl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();mk(a);d=xl(a);return t(e,cl(d.actualName,b),3)}return t(e,jl(d.actualName,c),0)})}
function Cl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?t(e,cl(d.actualName,b),2):t(e,jl(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Dl(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return t(d,tl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();mk("LogsDatabaseV2");return t(d,ll(b),3)}c=d.i;return t(d,Cl(c,a,b),0)})}
function El(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return t(d,tl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();mk(a);return t(d,cl(a,b),3)}return t(d,jl(a,c),0)})}
;function Fl(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.qa=function(){};
this.now=Date.now;this.wa=!1;var b;this.Ib=null!=(b=a.Ib)?b:100;var c;this.Gb=null!=(c=a.Gb)?c:1;var d;this.Eb=null!=(d=a.Eb)?d:2592E6;var e;this.Cb=null!=(e=a.Cb)?e:12E4;var f;this.Fb=null!=(f=a.Fb)?f:5E3;var g;this.v=null!=(g=a.v)?g:void 0;this.Ka=!!a.Ka;var h;this.Ja=null!=(h=a.Ja)?h:.1;var k;this.Qa=null!=(k=a.Qa)?k:10;a.handleError&&(this.handleError=a.handleError);a.qa&&(this.qa=a.qa);a.wa&&(this.wa=a.wa);this.D=a.D;this.V=a.V;this.K=a.K;this.J=a.J;this.da=a.da;this.gb=a.gb;this.fb=a.fb;this.v&&
(!this.D||this.D("networkless_logging"))&&Gl(this)}
function Gl(a){a.v&&!a.wa&&(a.h=!0,a.Ka&&Math.random()<=a.Ja&&a.K.Pb(a.v),Hl(a),a.J.H()&&a.Aa(),a.J.W(a.gb,a.Aa.bind(a)),a.J.W(a.fb,a.lb.bind(a)))}
l=Fl.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.v).then(function(e){d.id=e;c.J.H()&&Il(c,d)}).catch(function(e){Il(c,d);
Jl(c,e)})}else this.da(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return t(k,d.K.set(e,d.v).catch(function(m){Jl(d,m)}),2);
f(g,h);k.h=0})}}this.da(a,b,e.skipRetry)}else this.K.set(e,this.v).catch(function(g){d.da(a,b,e.skipRetry);
Jl(d,g)})}else this.da(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.oa(d.id,c.v):e=!0;c.J.ca&&c.D&&c.D("vss_network_hint")&&c.J.ca(!0);f(g,h)};
this.da(d.url,d.options);this.K.set(d,this.v).then(function(g){d.id=g;e&&c.K.oa(d.id,c.v)}).catch(function(g){Jl(c,g)})}else this.da(a,b)};
l.Aa=function(){var a=this;if(!this.v)throw zk("throttleSend");this.i||(this.i=this.V.N(function(){var b;return w(function(c){if(1==c.h)return t(c,a.K.ub("NEW",a.v),2);if(3!=c.h)return b=c.i,b?t(c,Il(a,b),3):(a.lb(),c.return());a.i&&(a.i=0,a.Aa());c.h=0})},this.Ib))};
l.lb=function(){this.V.U(this.i);this.i=0};
function Il(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=zk("immediateSend"),c;if(void 0===b.id){e.s(2);break}return t(e,a.K.Zb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.qa(Error("The request cannot be found in the database."));case 2:if(Kl(a,b,a.Eb)){e.s(4);break}a.qa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return t(e,a.K.oa(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Ll(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return t(e,a.K.oa(b.id,a.v),8);case 8:a.da(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Ll(a,b){if(!a.v)throw zk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:g=Ml(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Qa)){m.s(2);break}if(!a.J.ea){m.s(3);break}return t(m,a.J.ea(),3);case 3:if(a.J.H()){m.s(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.s(6);break}return t(m,a.K.hb(b.id,a.v,!1),6);case 6:return m.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Qa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.s(8);break}return b.sendCount<a.Gb?t(m,a.K.hb(b.id,a.v),12):t(m,a.K.oa(b.id,a.v),8);case 12:a.V.N(function(){a.J.H()&&a.Aa()},a.Fb);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):t(h,a.K.oa(b.id,a.v),2);a.J.ca&&a.D&&a.D("vss_network_hint")&&a.J.ca(!0);d(e,f);h.h=0})};
return b}
function Kl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Hl(a){if(!a.v)throw zk("retryQueuedRequests");a.K.ub("QUEUED",a.v).then(function(b){b&&!Kl(a,b,a.Cb)?a.V.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,a.K.hb(b.id,a.v),2);Hl(a);c.h=0})}):a.J.H()&&a.Aa()})}
function Jl(a,b){a.Kb&&!a.J.H()?a.Kb(b):a.handleError(b)}
function Ml(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Nl(a,b){this.version=a;this.args=b}
;function Ol(a,b){this.topic=a;this.h=b}
Ol.prototype.toString=function(){return this.topic};var Pl=z("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ta;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;y("ytPubsub2Pubsub2Instance",Pl);var Ql=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Ql);var Rl=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Rl);var Sl=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Sl);
y("ytPubsub2Pubsub2SkipSubKey",null);function Tl(a,b){var c=Ul();c&&c.publish.call(c,a.toString(),a,b)}
function Vl(a){var b=Wl,c=Ul();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Ql[d])try{if(f&&b instanceof Ol&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ia){var m=new h;h.ia=m.version}var q=h.ia}catch(I){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var u=q.construct;
var C=k.args,v=C.length;if(0<v){var E=Array(v);for(k=0;k<v;k++)E[k]=C[k];var F=E}else F=[];f=u.call(q,h,F)}catch(I){throw I.message="yt.pubsub2.Data.deserialize(): "+I.message,I;}}catch(I){throw I.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+I.message,I;}a.call(window,f)}catch(I){di(I)}},Sl[b.toString()]?z("yt.scheduler.instance")?af.N(g):xi(g,0):g())});
Ql[d]=!0;Rl[b.toString()]||(Rl[b.toString()]=[]);Rl[b.toString()].push(d);return d}
function Xl(){var a=Yl,b=Vl(function(c){a.apply(void 0,arguments);Zl(b)});
return b}
function Zl(a){var b=Ul();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete Ql[c]}))}
function Ul(){return z("ytPubsub2Pubsub2Instance")}
;function $l(a,b){el.call(this,a,b);this.options=b;mk(a)}
r($l,el);function am(a,b){var c;return function(){c||(c=new $l(a,b));return c}}
$l.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.ib?Al:zl)(a,b,Object.assign({},c))};
$l.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.ib?El:Bl)(this.name,a)};
function bm(a,b){return am(a,b)}
;var cm;
function dm(){if(cm)return cm();var a={};cm=bm("LogsDatabaseV2",{xa:(a.LogsRequestsStore={Va:2},a),ib:!1,upgrade:function(b,c,d){c(2)&&Ok(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return cm()}
;function em(a){return gl(dm(),a)}
function fm(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,em(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:A("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,Qk(d,e),3);f=g.i;c.Ac=P();gm(c);return g.return(f)})}
function hm(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,em(b),2);if(3!=m.h)return d=m.i,e=A("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,Nk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(q){return Zk(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(u){u.getValue()&&(k=u.getValue(),"NEW"===a&&(k.status="QUEUED",
u.update(k)))})}),3);
c.Ac=P();gm(c);return m.return(k)})}
function im(a,b){var c;return w(function(d){if(1==d.h)return t(d,em(b),2);c=d.i;return d.return(Nk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Kk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function jm(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return t(e,em(b),2);d=e.i;return e.return(Nk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Kk(g.h.put(h,void 0)).then(function(){return h})):Dk.resolve(void 0)})}))})}
function km(a,b){var c;return w(function(d){if(1==d.h)return t(d,em(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function lm(a){var b,c;return w(function(d){if(1==d.h)return t(d,em(a),2);b=d.i;c=P()-2592E6;return t(d,Nk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return Wk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function mm(){return w(function(a){return t(a,Dl(),0)})}
function gm(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Tl("nwl_transaction_latency_payload",a)}
;var nm={},om=bm("ServiceWorkerLogsDatabase",{xa:(nm.SWHealthLog={Va:1},nm),ib:!0,upgrade:function(a,b){b(1)&&Ok(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function pm(a){return gl(om(),a)}
function qm(a){var b,c;return w(function(d){if(1==d.h)return t(d,pm(a),2);b=d.i;c=P()-2592E6;return t(d,Nk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return Wk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function rm(a){var b;return w(function(c){if(1==c.h)return t(c,pm(a),2);b=c.i;return t(c,b.clear("SWHealthLog"),0)})}
;var sm={},tm=0;
function um(a){var b=void 0===b?"":b;if(a)if(b)bj(a,void 0,"POST",b);else if(A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))bj(a,void 0,"GET","");else{b:{try{var c=new ab({url:a});if(c.j&&c.i||c.l){var d=ac(bc(5,a)),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(ic),g=hc(a,0,"ri",f);if(0>g)var h=null;else{var k=a.indexOf("&",g);if(0>k||k>f)k=f;h=decodeURIComponent(a.slice(g+3,-1!==k?k:0).replace(/\+/g," "))}e="1"!==h}var m=!e;break b}}catch(u){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,
"")){var q=!0;break b}}catch(u){}q=!1}b=q?!0:!1}else b=!1;b||vm(a)}}
function vm(a){var b=new Image,c=""+tm++;sm[c]=b;b.onload=b.onerror=function(){delete sm[c]};
b.src=a}
;function wm(){this.h=new Map;this.i=!1}
function xm(){if(!wm.h){var a=z("yt.networkRequestMonitor.instance")||new wm;y("yt.networkRequestMonitor.instance",a);wm.h=a}return wm.h}
wm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
wm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
wm.prototype.removeParams=function(a){return a.split("?")[0]};
wm.prototype.removeParams=wm.prototype.removeParams;wm.prototype.isEndpointCFR=wm.prototype.isEndpointCFR;wm.prototype.requestComplete=wm.prototype.requestComplete;wm.getInstance=xm;var ym;function zm(){ym||(ym=new Ij("yt.offline"));return ym}
function Am(a){if(M("offline_error_handling")){var b=zm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);zm().set("errors",b,2592E3,!0)}}
function Bm(){if(M("offline_error_handling")){var a=zm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;di(c)}zm().set("errors",{},2592E3,!0)}}}
;var Cm=Yh("network_polling_interval",3E4);function Dm(){Ue.call(this);var a=this;this.T=0;this.A=this.m=!1;this.j=this.Za();M("use_shared_nsm")?(this.i=$e(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.W("networkstatus-online",function(){a.j=!0;a.A&&Bm()}),this.i.W("networkstatus-offline",function(){a.j=!1}))):(Em(this),Fm(this))}
r(Dm,Ue);function Gm(){if(!Dm.h){var a=z("yt.networkStatusManager.instance")||new Dm;y("yt.networkStatusManager.instance",a);Dm.h=a}return Dm.h}
l=Dm.prototype;l.H=function(){if(M("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.H()}return this.j};
l.ca=function(a){if(M("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
l.ac=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.T||Hm(this))};
l.Za=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Sb=function(){this.A=!0};
l.W=function(a,b){return M("use_shared_nsm")&&this.i?this.i.W(a,b):Ue.prototype.W.call(this,a,b)};
function Fm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return t(b,a.ea(),2);a.A&&Bm();b.h=0})})}
function Em(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.ea(),0)})})}
function Hm(a){a.T=Rj(function(){return w(function(b){if(1==b.h)return a.j?a.Za()||!a.m?b.s(3):t(b,a.ea(),3):t(b,a.ea(),3);Hm(a);b.h=0})},Cm)}
l.ea=function(a){var b=this;if(M("use_shared_nsm")&&this.i){var c=Ye(this.i,a);c.then(function(d){M("use_cfr_monitor")&&xm().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.M=af.N(function(){e.abort()},a||2E4)),t(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&xm().requestComplete("generate_204",h);b.u=void 0;b.M&&af.U(b.M);h!==b.j&&(b.j=h,b.j&&b.m?Ve(b,"ytnetworkstatus-online"):b.m&&Ve(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.s(3)}})})};
Dm.prototype.sendNetworkCheckRequest=Dm.prototype.ea;Dm.prototype.listen=Dm.prototype.W;Dm.prototype.enableErrorFlushing=Dm.prototype.Sb;Dm.prototype.getWindowStatus=Dm.prototype.Za;Dm.prototype.monitorNetworkStatusChange=Dm.prototype.ac;Dm.prototype.networkStatusHint=Dm.prototype.ca;Dm.prototype.isNetworkAvailable=Dm.prototype.H;Dm.getInstance=Gm;function Im(a){a=void 0===a?{}:a;Ue.call(this);var b=this;this.j=this.M=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=Gm();var c=z("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.rb);a.zb&&(c=z("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=z("yt.networkStatusManager.instance.listen").bind(this.i))a.Sa?(this.Sa=a.Sa,c(this.u,
function(){Jm(b,"publicytnetworkstatus-online")}),c(this.m,function(){Jm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Ve(b,"publicytnetworkstatus-online")}),c(this.m,function(){Ve(b,"publicytnetworkstatus-offline")}))}
r(Im,Ue);Im.prototype.H=function(){var a=z("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Im.prototype.ca=function(a){var b=z("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Im.prototype.ea=function(a){var b=this,c;return w(function(d){c=z("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return M("skip_network_check_if_cfr")&&xm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function Jm(a,b){a.Sa?a.j?(af.U(a.M),a.M=af.N(function(){a.A!==b&&(Ve(a,b),a.A=b,a.j=P())},a.Sa-(P()-a.j))):(Ve(a,b),a.A=b,a.j=P()):Ve(a,b)}
;var Km;function Lm(){Fl.call(this,{K:{Pb:lm,oa:km,ub:hm,Zb:im,hb:jm,set:fm},J:Mm(),handleError:di,qa:ei,da:Nm,now:P,Kb:Am,V:Wj(),gb:"publicytnetworkstatus-online",fb:"publicytnetworkstatus-offline",Ka:!0,Ja:.1,Qa:Yh("potential_esf_error_limit",10),D:M,wa:!(kk()&&Om())});this.j=new yd;M("networkless_immediately_drop_all_requests")&&mm();El("LogsDatabaseV2")}
r(Lm,Fl);function Pm(){var a=z("yt.networklessRequestController.instance");a||(a=new Lm,y("yt.networklessRequestController.instance",a),M("networkless_logging")&&tl().then(function(b){a.v=b;Gl(a);a.j.resolve();a.Ka&&Math.random()<=a.Ja&&a.v&&qm(a.v);M("networkless_immediately_drop_sw_health_store")&&Qm(a)}));
return a}
Lm.prototype.writeThenSend=function(a,b){b||(b={});kk()||(this.h=!1);Fl.prototype.writeThenSend.call(this,a,b)};
Lm.prototype.sendThenWrite=function(a,b,c){b||(b={});kk()||(this.h=!1);Fl.prototype.sendThenWrite.call(this,a,b,c)};
Lm.prototype.sendAndWrite=function(a,b){b||(b={});kk()||(this.h=!1);Fl.prototype.sendAndWrite.call(this,a,b)};
Lm.prototype.awaitInitialization=function(){return this.j.promise};
function Qm(a){var b;w(function(c){if(!a.v)throw b=zk("clearSWHealthLogsDb"),b;return c.return(rm(a.v).catch(function(d){a.handleError(d)}))})}
function Nm(a,b,c){M("use_cfr_monitor")&&Rm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?um(a):Zi(a,b)}
function Mm(){Km||(Km=new Im({zb:!0,rb:!0}));return Km}
function Rm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){xm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){xm().requestComplete(a,!0);d(e,f)}}
function Om(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==cc(document.location.toString()):!0}
;var Sm=!1,Tm=0,Um=0,Vm,Wm=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Sm,potentialEsfErrorCounter:Um};y("ytNetworklessLoggingInitializationOptions",Wm);
function Xm(){var a;w(function(b){switch(b.h){case 1:return t(b,tl(),2);case 2:a=b.i;if(!a||!kk()&&!M("nwl_init_require_datasync_id_killswitch")||!Om()){b.s(0);break}Sm=!0;Wm.isNwlInitialized=Sm;if(!M("use_new_nwl_initialization")){b.s(4);break}return t(b,Pm().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,El("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return t(b,lm(a),8);case 8:return t(b,qm(a),7);case 7:Ym();Zm().H()&&$m();Zm().W("publicytnetworkstatus-online",
$m);Zm().W("publicytnetworkstatus-offline",an);if(!M("networkless_immediately_drop_sw_health_store")){b.s(10);break}return t(b,bn(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,mm(),0);b.s(0)}})}
function cn(a,b){function c(d){var e=Zm().H();if(!dn()||!d||e&&M("vss_networkless_bypass_write"))en(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};fm(f,d).then(function(g){f.id=g;Zm().H()&&fn(f)}).catch(function(g){fn(f);
Zm().H()?di(g):Am(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?tl().then(function(d){c(d)}):c(sl())}
function gn(a,b){function c(d){if(dn()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&xm().requestComplete(e.url,!0);void 0!==e.id?km(e.id,d):f=!0;M("vss_network_hint")&&Zm().ca(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){xm().requestComplete(e.url,!1);h(k,m)}}en(e.url,e.options);
fm(e,d).then(function(k){e.id=k;f&&km(e.id,d)}).catch(function(k){Zm().H()?di(k):Am(k)})}else en(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?tl().then(function(d){c(d)}):c(sl())}
function $m(){var a=sl();if(!a)throw zk("throttleSend");Tm||(Tm=af.N(function(){var b;return w(function(c){if(1==c.h)return t(c,hm("NEW",a),2);if(3!=c.h)return b=c.i,b?t(c,fn(b),3):(an(),c.return());Tm&&(Tm=0,$m());c.h=0})},100))}
function an(){af.U(Tm);Tm=0}
function fn(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=sl();if(!b)throw c=zk("immediateSend"),c;if(void 0===a.id){e.s(2);break}return t(e,im(a.id,b),3);case 3:(d=e.i)?a=d:ei(Error("The request cannot be found in the database."));case 2:if(hn(a,2592E6)){e.s(4);break}ei(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return t(e,km(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=jn(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return t(e,km(a.id,b),8);case 8:en(a.url,a.options,!!a.skipRetry),e.h=0}})}
function jn(a){var b=sl();if(!b)throw zk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:M("use_cfr_monitor")&&xm().requestComplete(a.url,!1);g=Ml(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&kn()<=Yh("potential_esf_error_limit",10))){m.s(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||xm().isEndpointCFR(a.url))){m.s(3);break}return t(m,Zm().ea(),3);case 3:if(Zm().H()){m.s(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.s(6);break}return t(m,jm(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&kn()>Yh("potential_esf_error_limit",10))return m.return();z("ytNetworklessLoggingInitializationOptions")&&Wm.potentialEsfErrorCounter++;Um++;if(void 0===(null==(k=a)?void 0:k.id)){m.s(8);break}return 1>a.sendCount?t(m,jm(a.id,b),12):t(m,km(a.id,b),8);case 12:af.N(function(){Zm().H()&&$m()},5E3);
case 8:c(e,f),m.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return M("use_cfr_monitor")&&xm().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):t(h,km(a.id,b),2);M("vss_network_hint")&&Zm().ca(!0);d(e,f);h.h=0})};
return a}
function hn(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Ym(){var a=sl();if(!a)throw zk("retryQueuedRequests");hm("QUEUED",a).then(function(b){b&&!hn(b,12E4)?af.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,jm(b.id,a),2);Ym();c.h=0})}):Zm().H()&&$m()})}
function bn(){var a,b;return w(function(c){a=sl();if(!a)throw b=zk("clearSWHealthLogsDb"),b;return c.return(rm(a).catch(function(d){di(d)}))})}
function Zm(){if(M("use_new_nwl"))return Mm();Vm||(Vm=new Im({zb:!0,rb:!0}));return Vm}
function en(a,b,c){c&&0===Object.keys(b).length?um(a):Zi(a,b)}
function dn(){return z("ytNetworklessLoggingInitializationOptions")?Wm.isNwlInitialized:Sm}
function kn(){return z("ytNetworklessLoggingInitializationOptions")?Wm.potentialEsfErrorCounter:Um}
;function ln(a){var b=this;this.config_=null;a?this.config_=a:yj()&&(this.config_=zj());Rj(function(){Oj(b)},5E3)}
ln.prototype.isReady=function(){!this.config_&&yj()&&(this.config_=zj());return!!this.config_};
function Pj(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=Mj(b,c,m,k)),F)){var I=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(O,S){Nj(F);I(O,S)};
c.onFetchSuccess=function(O,S){Nj(F);R(O,S)}}try{E&&d.retry&&!d.Ab.bypassNetworkless?(g.method="POST",d.Ab.writeThenSend?M("use_new_nwl_wts")?Pm().writeThenSend(v,g):cn(v,g):M("use_new_nwl_saw")?Pm().sendAndWrite(v,g):gn(v,g)):(g.method="POST",g.postParams||(g.postParams={}),Zi(v,g))}catch(O){if("InvalidAccessError"==O.name)F&&(Nj(F),F=0),ei(Error("An extension is blocking network request."));
else throw O;}F&&Rj(function(){Oj(a)},5E3)}
!A("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ei(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);di(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Wb)&&(h=f);var k=a.config_.Yb||!1,m=Gj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,u={alt:"json"},C=a.config_.Xb&&f;C=C&&f.startsWith("Bearer");C||(u.key=a.config_.innertubeApiKey);var v=qi(""+h+q,u||{},!0);M("use_new_nwl")&&Pm().h||!M("use_new_nwl")&&
dn()?rl().then(function(E){e(E)}):e(!1)}
;var mn={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},nn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var on=0,pn=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++on});var qn={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rn(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qn||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function sn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
rn.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rn.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rn.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",nb);var tn=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",tn);
function un(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vn=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function wn(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=un(a,b,c,d);if(e)return e;e=++tn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rn(h);if(!Ld(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rn(h);
h.currentTarget=a;return c.call(a,h)};
g=ci(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function xn(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var yn=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function zn(a){this.L=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.T=wn(window,"mousemove",Wa(this.Y,this));a=Wa(this.M,this);"function"===typeof a&&(a=ci(a));this.fa=window.setInterval(a,25)}
Ya(zn,K);zn.prototype.Y=function(a){void 0===a.h&&sn(a);var b=a.h;void 0===a.i&&sn(a);this.i=new Hd(b,a.i)};
zn.prototype.M=function(){if(this.i){var a=yn();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
zn.prototype.I=function(){window.clearInterval(this.fa);xn(this.T)};var An={};
function Bn(a){var b=void 0===a?{}:a;a=void 0===b.ec?!1:b.ec;b=void 0===b.Tb?!0:b.Tb;if(null==z("_lact",window)){var c=parseInt(A("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Cn();wn(document,"keydown",Cn);wn(document,"keyup",Cn);wn(document,"mousedown",Cn);wn(document,"mouseup",Cn);a?wn(window,"touchmove",function(){Dn("touchmove",200)},{passive:!0}):(wn(window,"resize",function(){Dn("resize",200)}),b&&wn(window,"scroll",function(){Dn("scroll",200)}));
new zn(function(){Dn("mouse",100)});
wn(document,"touchstart",Cn,{passive:!0});wn(document,"touchend",Cn,{passive:!0})}}
function Dn(a,b){An[a]||(An[a]=!0,af.N(function(){Cn();An[a]=!1},b))}
function Cn(){null==z("_lact",window)&&Bn();var a=Date.now();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function En(){var a=z("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Fn=x.ytPubsubPubsubInstance||new L,Gn=x.ytPubsubPubsubSubscribedKeys||{},Hn=x.ytPubsubPubsubTopicToKeys||{},In=x.ytPubsubPubsubIsSynchronous||{};function Jn(a,b){var c=Kn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Gn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{In[a]?f():xi(f,0)}catch(g){di(g)}},void 0);
Gn[d]=!0;Hn[a]||(Hn[a]=[]);Hn[a].push(d);return d}return 0}
function Ln(a){var b=Kn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete Gn[c]}))}
function Mn(a,b){var c=Kn();c&&c.publish.apply(c,arguments)}
function co(a){var b=Kn();if(b)if(b.clear(a),a)Co(a);else for(var c in Hn)Co(c)}
function Kn(){return x.ytPubsubPubsubInstance}
function Co(a){Hn[a]&&(a=Hn[a],eb(a,function(b){Gn[b]&&delete Gn[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ta;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;y("ytPubsubPubsubInstance",Fn);y("ytPubsubPubsubTopicToKeys",Hn);y("ytPubsubPubsubIsSynchronous",In);y("ytPubsubPubsubSubscribedKeys",Gn);var Do=Yh("initial_gel_batch_timeout",2E3),Eo=Math.pow(2,16)-1,Fo=void 0;function Go(){this.j=this.h=this.i=0}
var Ho=new Go,Io=new Go,Jo=!0,Ko=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",Ko);var Lo=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",Lo);var Mo=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Mo);var No=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",No);
function Oo(a,b){if("log_event"===a.endpoint){var c=Po(a),d=Ko.get(c)||[];Ko.set(c,d);d.push(a.payload);Qo(b,d,c)}}
function Ro(a,b){if("log_event"===a.endpoint){var c=Po(a,!0),d=Lo.get(c)||[];Lo.set(c,d);a=rd(a.payload);d.push(a);Qo(b,d,c,!0)}}
function Qo(a,b,c,d){d=void 0===d?!1:d;a&&(Fo=new a);a=Yh("tvhtml5_logging_max_batch")||Yh("web_logging_max_batch")||100;var e=P(),f=d?Io.j:Ho.j;b.length>=a?So({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(To(d),d?Io.j=e:Ho.j=e)}
function Uo(a,b){if("log_event"===a.endpoint){var c=Po(a),d=new Map;d.set(c,[a.payload]);b&&(Fo=new b);return new Wf(function(e){Fo&&Fo.isReady()?Vo(d,e,{bypassNetworkless:!0},!0):e()})}}
function Wo(a,b){if("log_event"===a.endpoint){var c=Po(a,!0),d=new Map;d.set(c,[rd(a.payload)]);b&&(Fo=new b);return new Wf(function(e){Fo&&Fo.isReady()?Xo(d,e,{bypassNetworkless:!0},!0):e()})}}
function Po(a,b){var c="";if(a.va)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ch;c.videoId?d.setVideoId(c.videoId):c.playlistId&&id(d,2,Dh,c.playlistId);No[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Mo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function So(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Wf(function(d){c?(yi(Io.i),yi(Io.h),Io.h=0):(yi(Ho.i),yi(Ho.h),Ho.h=0);if(Fo&&Fo.isReady())if(void 0!==b)if(c){var e=new Map,f=Lo.get(b)||[];e.set(b,f);Xo(e,d,a);Lo.delete(b)}else e=new Map,f=Ko.get(b)||[],e.set(b,f),Vo(e,d,a),Ko.delete(b);else c?(Xo(Lo,d,a),Lo.clear()):(Vo(Ko,d,a),Ko.clear());else To(c),d()})}
function To(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Ho.h||a&&!Io.h)){var b=xi(function(){So({writeThenSend:!0},void 0,a)},6E4);
a?Io.h=b:Ho.h=b}yi(a?Io.i:Ho.i);b=A("LOGGING_BATCH_TIMEOUT",Yh("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Jo&&(b=Do);b=xi(function(){So({writeThenSend:!0},void 0,a)},b);
a?Io.i=b:Ho.i=b}
function Vo(a,b,c,d){var e=Fo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=vb({context:Aj(e.config_||zj())});k.events=m;(m=Mo[h])&&Yo(k,h,m);delete Mo[h];h="visitorOnlyApprovedKey"===h;Zo(k,f,h);$o(c);Pj(e,"log_event",k,ap(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Jo=!1}}
function Xo(a,b,c,d){var e=Fo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=new Eh;var q=Fj(e.config_||zj());H(k,1,q);m=bp(m);for(q=0;q<m.length;q++)nd(k,3,yh,m[q]);(m=No[h])&&cp(k,h,m);delete No[h];h="visitorOnlyApprovedKey"===h;dp(k,f,h);$o(c);k=rd(k);h=ap(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Pj(e,"log_event","",h);Jo=!1}}
function $o(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function ap(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ab:a,va:b,Oo:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Zo(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=A("EVENT_ID"))&&(c=ep(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function dp(a,b,c){D(a,2,b);if(!c&&(b=A("EVENT_ID"))){c=ep();var d=new Bh;D(d,1,b);D(d,2,c);H(a,5,d)}}
function ep(){var a=A("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Eo/2));a++;a>Eo&&(a=1);Vh("BATCH_CLIENT_COUNTER",a);return a}
function Yo(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function cp(a,b,c){if(gd(c,1===jd(c,Dh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=kd(a,Pg,1)||new Pg;c=kd(a,Ng,3)||new Ng;var e=new Mg;e.setToken(b);D(e,1,d);nd(c,12,Mg,e);H(a,3,c)}
function bp(a){for(var b=[],c=0;c<a.length;c++)try{var d=b,e=d.push;var f=String(a[c]),g=yh;if(null==f||""==f)var h=new g;else{var k=JSON.parse(f);if(!Array.isArray(k))throw Error("Expected to deserialize an Array but got "+Na(k)+": "+k);qd=k;var m=new g(k);qd=null;h=m}e.call(d,h)}catch(q){di(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var fp=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",fp);
function gp(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(nn[a]||mn[a])return}else if(M("lr_drop_other_payloads")&&nn[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=En();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.X&&(a=e.context,b=d.X,b={index:hp(b),groupKey:b},a.sequence=b,d.sb&&delete fp[d.X]);(d.nc?Uo:Oo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
va:d.va},c)}
function hp(a){fp[a]=a in fp?fp[a]+1:0;return fp[a]}
;function hk(a,b,c){c=void 0===c?{}:c;var d=ln;A("ytLoggingEventsDefaultDisabled",!1)&&ln==ln&&(d=null);gp(a,b,d,c)}
;var ip=[{eb:function(a){return"Cannot read property '"+a.key+"'"},
Pa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{eb:function(a){return"Cannot call '"+a.key+"'"},
Pa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{eb:function(a){return a.key+" is not defined"},
Pa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var kp={ha:[],ga:[{ka:jp,weight:500}]};function jp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function lp(){this.ga=[];this.ha=[]}
var mp;function np(){if(!mp){var a=mp=new lp;a.ha.length=0;a.ga.length=0;kp.ha&&a.ha.push.apply(a.ha,kp.ha);kp.ga&&a.ga.push.apply(a.ga,kp.ga)}return mp}
;var op=new L;function pp(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=qp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=qp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=qp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function qp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function rp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=sp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=pp(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?sp(e+".ve",f,g,h):0;d+=g;d+=sp(e,a[e],b,c);if(500<d)break}}else c[b]=tp(a),d+=c[b].length;else c[b]=tp(a),d+=c[b].length;return d}
function sp(a,b,c,d){c+="."+a;a=tp(b);d[c]=a;return c.length+a.length}
function tp(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var up=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",up);function vp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=En();d=new xh;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.X){e=c.X;var f=hp(e),g=new wh;D(g,2,f);D(g,1,e);H(d,3,g);c.sb&&delete up[c.X]}H(a,33,d);(c.nc?Wo:Ro)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,va:c.va},b)}
;function wp(a,b){b=void 0===b?{}:b;var c=!1;A("ytLoggingEventsDefaultDisabled",!1)&&ln===ln&&(c=!0);vp(a,c?null:ln,b)}
;function xp(a,b,c){var d=new yh;md(d,73,zh,a);c?vp(d,c,b):wp(d,b)}
function yp(a,b,c){var d=new yh;md(d,78,zh,a);c?vp(d,c,b):wp(d,b)}
function zp(a,b,c){var d=new yh;md(d,208,zh,a);c?vp(d,c,b):wp(d,b)}
function Ap(a,b,c){var d=new yh;md(d,156,zh,a);c?vp(d,c,b):wp(d,b)}
function Bp(a,b,c){var d=new yh;md(d,215,zh,a);c?vp(d,c,b):wp(d,b)}
function Cp(a,b,c){var d=new yh;md(d,111,zh,a);c?vp(d,c,b):wp(d,b)}
;var Dp=new Set,Ep=0,Fp=0,Gp=0,Hp=[],Ip=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function gk(a){Jp(a)}
function Kp(a){Jp(a,"WARNING")}
function Jp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||A("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||A("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Ep)){var m=Hp,q=se(a),u=q.message||"Unknown Error",C=q.name||"UnknownError",v=q.stack||a.i||"Not available";if(v.startsWith(C+": "+u)){var E=v.split("\n");E.shift();v=E.join("\n")}var F=q.lineNumber||"Not available",I=q.fileName||"Not available",R=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=rp(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ka=a.params;if("object"===typeof a.params)for(var N in ka){if(ka[N]){var Ca="params."+N,Oa=tp(ka[N]);g[Ca]=Oa;O+=Ca.length+Oa.length;if(500<O)break}}else g.params=tp(ka)}if(m.length)for(var va=0;va<m.length&&!(O=rp(m[va],"params.context."+va,g,O),500<=O);va++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:u,name:C,lineNumber:F,fileName:I,stack:R,params:g,sampleWeight:1},Da=Number(a.columnNumber);isNaN(Da)||(G.lineNumber=G.lineNumber+
":"+Da);if("IGNORED"===a.level)var ua=0;else a:{for(var Nn=np(),On=p(Nn.ha),Ci=On.next();!Ci.done;Ci=On.next()){var Pn=Ci.value;if(G.message&&G.message.match(Pn.To)){ua=Pn.weight;break a}}for(var Qn=p(Nn.ga),Di=Qn.next();!Di.done;Di=Qn.next()){var Rn=Di.value;if(Rn.ka(G)){ua=Rn.weight;break a}}ua=1}G.sampleWeight=ua;for(var Sn=p(ip),Ei=Sn.next();!Ei.done;Ei=Sn.next()){var Fi=Ei.value;if(Fi.Pa[G.name])for(var Tn=p(Fi.Pa[G.name]),Gi=Tn.next();!Gi.done;Gi=Tn.next()){var Un=Gi.value,Nf=G.message.match(Un.regexp);
if(Nf){G.params["params.error.original"]=Nf[0];for(var Hi=Un.groups,Vn={},Xc=0;Xc<Hi.length;Xc++)Vn[Hi[Xc]]=Nf[Xc+1],G.params["params.error."+Hi[Xc]]=Nf[Xc+1];G.message=Fi.eb(Vn);break}}}G.params||(G.params={});var Wn=np();G.params["params.errorServiceSignature"]="msg="+Wn.ha.length+"&cb="+Wn.ga.length;G.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Cb("sample").constructor!==
Ab&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!Dp.has(G.message)){if("ERROR"===h){op.ja("handleError",G);if(M("record_app_crashed_web")&&0===Gp&&1===G.sampleWeight)if(Gp++,M("errors_via_jspb")){var Ii=new bh;D(Ii,1,1);if(!M("report_client_error_with_app_crash_ks")){var Xn=new Xg;D(Xn,1,G.message);var Yn=new Yg;H(Yn,3,Xn);var Zn=new Zg;H(Zn,5,Yn);var $n=new $g;H($n,9,Zn);H(Ii,4,$n)}var ao=new yh;md(ao,20,zh,Ii);wp(ao)}else{var bo=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(bo.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});hk("appCrashed",bo)}Fp++}else"WARNING"===h&&op.ja("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var Xd=h;if(M("errors_via_jspb")){if(Lp())var eo=void 0;else{var Yc=new Ug;D(Yc,1,G.stack);G.fileName&&D(Yc,4,G.fileName);var qb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==qb.length&&(1!==qb.length||isNaN(Number(qb[0]))?
2!==qb.length||isNaN(Number(qb[0]))||isNaN(Number(qb[1]))||(D(Yc,2,Number(qb[0])),D(Yc,3,Number(qb[1]))):D(Yc,2,Number(qb[0])));var jc=new Xg;D(jc,1,G.message);D(jc,3,G.name);D(jc,6,G.sampleWeight);"ERROR"===Xd?D(jc,2,2):"WARNING"===Xd?D(jc,2,1):D(jc,2,0);var Ji=new Vg;D(Ji,1,!0);md(Ji,3,Wg,Yc);var Jb=new Rg;D(Jb,3,window.location.href);for(var fo=A("FEXP_EXPERIMENTS",[]),Ki=0;Ki<fo.length;Ki++){var wt=fo[Ki];Vc(Jb);hd(Jb,5).push(wt)}var Li=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Wh()&&Li)for(var go=
p(Object.keys(Li)),kc=go.next();!kc.done;kc=go.next()){var ho=kc.value,Mi=new Tg;D(Mi,1,ho);Mi.setValue(String(Li[ho]));nd(Jb,4,Tg,Mi)}var Ni=G.params;if(Ni){var io=p(Object.keys(Ni));for(kc=io.next();!kc.done;kc=io.next()){var jo=kc.value,Oi=new Tg;D(Oi,1,"client."+jo);Oi.setValue(String(Ni[jo]));nd(Jb,4,Tg,Oi)}}var ko=A("SERVER_NAME"),lo=A("SERVER_VERSION");if(ko&&lo){var Pi=new Tg;D(Pi,1,"server.name");Pi.setValue(ko);nd(Jb,4,Tg,Pi);var Qi=new Tg;D(Qi,1,"server.version");Qi.setValue(lo);nd(Jb,
4,Tg,Qi)}var Of=new Yg;H(Of,1,Jb);H(Of,2,Ji);H(Of,3,jc);eo=Of}var mo=eo;if(!mo)break a;var no=new yh;md(no,163,zh,mo);wp(no)}else{if(Lp())var oo=void 0;else{var Yd={stackTrace:G.stack};G.fileName&&(Yd.filename=G.fileName);var rb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==rb.length&&(1!==rb.length||isNaN(Number(rb[0]))?2!==rb.length||isNaN(Number(rb[0]))||isNaN(Number(rb[1]))||(Yd.lineNumber=Number(rb[0]),Yd.columnNumber=Number(rb[1])):Yd.lineNumber=Number(rb[0]));var Ri={level:"ERROR_LEVEL_UNKNOWN",
message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===Xd?Ri.level="ERROR_LEVEL_ERROR":"WARNING"===Xd&&(Ri.level="ERROR_LEVEL_WARNNING");var xt={isObfuscated:!0,browserStackInfo:Yd},Zc={pageUrl:window.location.href,kvPairs:[]};A("FEXP_EXPERIMENTS")&&(Zc.experimentIds=A("FEXP_EXPERIMENTS"));var Si=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Wh()&&Si)for(var po=p(Object.keys(Si)),lc=po.next();!lc.done;lc=po.next()){var qo=lc.value;Zc.kvPairs.push({key:qo,value:String(Si[qo])})}var Ti=
G.params;if(Ti){var ro=p(Object.keys(Ti));for(lc=ro.next();!lc.done;lc=ro.next()){var so=lc.value;Zc.kvPairs.push({key:"client."+so,value:String(Ti[so])})}}var to=A("SERVER_NAME"),uo=A("SERVER_VERSION");to&&uo&&(Zc.kvPairs.push({key:"server.name",value:to}),Zc.kvPairs.push({key:"server.version",value:uo}));oo={errorMetadata:Zc,stackTrace:xt,logMessage:Ri}}var vo=oo;if(!vo)break a;hk("clientError",vo)}("ERROR"===Xd||M("errors_flush_gel_always_killswitch"))&&So(void 0,void 0,!1)}if(!M("suppress_error_204_logging")){var Zd=
G.params||{},Kb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":Zd.name},postParams:{url:A("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};Zd.version&&(Kb["client.version"]=Zd.version);if(Kb.postParams){G.stack&&(Kb.postParams.stack=G.stack);for(var wo=p(Object.keys(Zd)),Ui=wo.next();!Ui.done;Ui=wo.next()){var xo=Ui.value;Kb.postParams["client."+xo]=Zd[xo]}var Vi=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Vi)for(var yo=
p(Object.keys(Vi)),Wi=yo.next();!Wi.done;Wi=yo.next()){var zo=Wi.value;Kb.postParams[zo]=Vi[zo]}var Ao=A("SERVER_NAME"),Bo=A("SERVER_VERSION");Ao&&Bo&&(Kb.postParams["server.name"]=Ao,Kb.postParams["server.version"]=Bo)}Zi(A("ECATCHER_REPORT_HOST","")+"/error_204",Kb)}try{Dp.add(G.message)}catch(Xu){}Ep++}}}}
function Lp(){for(var a=p(Ip),b=a.next();!b.done;b=a.next())if(Yj(b.value.toLowerCase()))return!0;return!1}
function Mp(a){var b=Ja.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;function Np(){this.register=new Map}
function Op(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Wo("ABORTED")}
Np.prototype.clear=function(){Op(this);this.register.clear()};
var Pp=new Np;var Qp=Date.now().toString();
function Rp(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Qp)for(a=1,b=0;b<Qp.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Qp.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Sp=x.ytLoggingDocDocumentNonce_;Sp||(Sp=Rp(),y("ytLoggingDocDocumentNonce_",Sp));var Tp=Sp;var Up={Bg:0,qd:1,Ad:2,fk:3,Dg:4,lo:5,Vk:6,wm:7,Yl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Vp(a){this.h=a}
function Wp(a){return new Vp({trackingParams:a})}
Vp.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Vp.prototype.getAsJspb=function(){var a=new dh;void 0!==this.h.trackingParams?D(a,1,this.h.trackingParams):(void 0!==this.h.veType&&D(a,2,this.h.veType),void 0!==this.h.veCounter&&D(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&D(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();H(a,7,b)}void 0!==this.h.youtubeData&&H(a,8,this.h.jspbYoutubeData);return a};
Vp.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Vp.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Xp(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Yp(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Zp(a){return A(Yp(void 0===a?0:a))}
y("yt_logging_screen.getRootVeType",Zp);function $p(a){return(a=Zp(void 0===a?0:a))?new Vp({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function aq(){var a=A("csn-to-ctt-auth-info");a||(a={},Vh("csn-to-ctt-auth-info",a));return a}
function bq(a){a=A(Xp(void 0===a?0:a));if(!a&&!A("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
y("yt_logging_screen.getCurrentCsn",bq);function cq(a,b,c){var d=aq();(c=bq(c))&&delete d[c];b&&(d[a]=b)}
function dq(a){return aq()[a]}
y("yt_logging_screen.getCttAuthInfo",dq);
function eq(a,b,c,d){c=void 0===c?0:c;if(a!==A(Xp(c))||b!==A(Yp(c)))cq(a,d,c),Vh(Xp(c),a),Vh(Yp(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new eh;D(e,1,Tp);D(e,2,a);M("use_default_heartbeat_client")?Cp(e):Cp(e,void 0,ln)}else e={clientDocumentNonce:Tp,clientScreenNonce:a},M("use_default_heartbeat_client")?hk("foregroundHeartbeatScreenAssociated",e):gp("foregroundHeartbeatScreenAssociated",e,ln)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
y("yt_logging_screen.setCurrentScreen",eq);var fq=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",fq);function gq(a){Kh(fq,arguments)}
;var hq={pd:3611,Dc:27686,Ec:85013,Fc:23462,Hc:42016,Ic:62407,Jc:26926,Gc:43781,Kc:51236,Lc:79148,Mc:50160,Nc:77504,Zc:87907,bd:18630,cd:54445,dd:80935,ed:105675,fd:37521,gd:147285,hd:47786,jd:98349,kd:123695,ld:6827,md:29434,nd:7282,od:124448,sd:32276,rd:76278,td:147868,ud:147869,vd:93911,wd:106531,xd:27259,yd:27262,zd:27263,Bd:21759,Cd:27107,Dd:62936,Ed:49568,Fd:38408,Gd:80637,Hd:68727,Id:68728,Jd:80353,Kd:80356,Ld:74610,Md:45707,Nd:83962,Od:83970,Pd:46713,Qd:89711,Rd:74612,Sd:93265,Td:74611,Ud:131380,
Wd:128979,Xd:139311,Yd:128978,Vd:131391,Zd:105350,be:139312,ce:134800,ae:131392,ee:113533,ge:93252,he:99357,je:94521,ke:114252,le:113532,me:94522,ie:94583,ne:88E3,oe:139580,pe:93253,qe:93254,re:94387,se:94388,te:93255,ue:97424,de:72502,we:110111,xe:76019,ze:117092,Ae:117093,ye:89431,Be:110466,Ce:77240,De:60508,Ee:148123,Fe:148124,Ge:137401,He:137402,Ie:137046,Je:73393,Ke:113534,Le:92098,Me:131381,Ne:84517,Oe:83759,Pe:80357,Qe:86113,Re:72598,Se:72733,Te:107349,Ue:124275,Ve:118203,We:133275,Xe:133274,
Ye:133272,Ze:133273,af:133276,bf:144507,cf:143247,df:143248,ef:143249,ff:143250,gf:143251,hf:144401,kf:117431,jf:133797,lf:128572,mf:133405,nf:117429,pf:117430,qf:117432,rf:120080,sf:117259,tf:121692,uf:145656,vf:145655,wf:145653,xf:145654,yf:145657,zf:132972,Af:133051,Bf:133658,Cf:132971,Df:97615,Ff:143359,Ef:143356,Hf:143361,Gf:143358,Jf:143360,If:143357,Kf:142303,Lf:143353,Mf:143354,Nf:144479,Of:143355,Pf:31402,Rf:133624,Sf:146477,Tf:133623,Uf:133622,Qf:133621,Vf:84774,Wf:95117,Xf:98930,Yf:98931,
Zf:98932,ag:43347,cg:129889,dg:149123,eg:45474,fg:100352,gg:84758,hg:98443,ig:117985,jg:74613,kg:74614,lg:64502,mg:136032,ng:74615,og:74616,pg:122224,qg:74617,rg:77820,sg:74618,tg:93278,ug:93274,vg:93275,wg:93276,xg:22110,yg:29433,zg:133798,Ag:132295,Cg:120541,Eg:82047,Fg:113550,Gg:75836,Hg:75837,Ig:42352,Jg:84512,Kg:76065,Lg:75989,Mg:16623,Ng:32594,Og:27240,Pg:32633,Qg:74858,Sg:3945,Rg:16989,Tg:45520,Ug:25488,Vg:25492,Wg:25494,Xg:55760,Yg:14057,Zg:18451,ah:57204,bh:57203,dh:17897,eh:57205,fh:18198,
gh:17898,hh:17909,ih:43980,jh:46220,kh:11721,lh:147994,mh:49954,nh:96369,oh:3854,ph:56251,qh:25624,Hh:16906,Ih:99999,Jh:68172,Kh:27068,Lh:47973,Mh:72773,Nh:26970,Oh:26971,Ph:96805,Qh:17752,Rh:73233,Sh:109512,Th:22256,Uh:14115,Vh:22696,Wh:89278,Xh:89277,Yh:109513,Zh:43278,ai:43459,bi:43464,ci:89279,di:43717,fi:55764,gi:22255,hi:147912,ii:89281,ji:40963,ki:43277,li:43442,mi:91824,ni:120137,oi:96367,ri:36850,si:72694,ti:37414,vi:36851,xi:124863,wi:121343,yi:73491,zi:54473,Ai:43375,Bi:46674,Ci:143815,
Di:139095,Ei:144402,Fi:32473,Gi:72901,Hi:72906,Ii:50947,Ji:50612,Ki:50613,Li:50942,Mi:84938,Ni:84943,Oi:84939,Pi:84941,Qi:84944,Ri:84940,Si:84942,Ti:35585,Ui:51926,Vi:79983,Wi:63238,Xi:18921,Yi:63241,Zi:57893,aj:41182,bj:135732,cj:33424,dj:22207,ej:42993,fj:36229,gj:22206,hj:22205,ij:18993,jj:19001,kj:18990,lj:18991,mj:18997,nj:18725,oj:19003,pj:36874,qj:44763,rj:33427,sj:67793,tj:22182,uj:37091,vj:34650,wj:50617,xj:47261,yj:22287,zj:25144,Aj:97917,Bj:62397,Cj:125598,Dj:137935,Ej:36961,Fj:108035,
Gj:27426,Hj:27857,Ij:27846,Jj:27854,Kj:69692,Lj:61411,Mj:39299,Nj:38696,Oj:62520,Pj:36382,Qj:108701,Rj:50663,Sj:36387,Tj:14908,Uj:37533,Vj:105443,Wj:61635,Xj:62274,Yj:133818,Zj:65702,ak:65703,bk:65701,ck:76256,dk:37671,ek:49953,gk:36216,hk:28237,ik:39553,jk:29222,kk:26107,lk:38050,mk:26108,pk:120745,nk:26109,qk:26110,rk:66881,sk:28236,tk:14586,uk:57929,vk:74723,wk:44098,xk:44099,Ak:23528,Bk:61699,yk:134104,zk:134103,Ck:59149,Dk:101951,Ek:97346,Fk:118051,Gk:95102,Hk:64882,Ik:119505,Jk:63595,Kk:63349,
Lk:95101,Mk:75240,Nk:27039,Ok:68823,Pk:21537,Qk:83464,Rk:75707,Sk:83113,Tk:101952,Uk:101953,Wk:79610,Xk:125755,Yk:24402,Zk:24400,al:32925,bl:57173,dl:122502,fl:145268,il:138480,jl:64423,kl:64424,ll:33986,ml:100828,nl:129089,ol:21409,sl:135155,ul:135156,vl:135157,wl:135158,xl:135159,yl:135160,zl:135161,Al:135162,Bl:135163,Cl:135164,Dl:135165,El:135166,pl:11070,ql:11074,rl:17880,Fl:14001,Hl:30709,Il:30707,Jl:30711,Kl:30710,Ll:30708,Gl:26984,Ml:146143,Nl:63648,Ol:63649,Pl:51879,Ql:111059,Rl:5754,Sl:20445,
Ul:130975,Tl:130976,Vl:110386,Wl:113746,Xl:66557,Zl:17310,am:28631,bm:21589,cm:68012,dm:60480,em:138664,fm:141121,gm:31571,hm:141978,im:76980,jm:41577,km:45469,lm:38669,mm:13768,nm:13777,om:141842,pm:62985,qm:4724,rm:59369,sm:43927,tm:43928,um:12924,vm:100355,ym:56219,zm:27669,Am:10337,xm:47896,Bm:122629,Dm:139723,Cm:139722,Em:121258,Fm:107598,Gm:127991,Hm:96639,Im:107536,Jm:130169,Km:96661,Lm:145188,Mm:96658,Nm:116646,Om:121122,Pm:96660,Qm:127738,Rm:127083,Sm:147842,Tm:104443,Um:96659,Vm:147595,
Wm:106442,Xm:134840,Ym:63667,Zm:63668,an:63669,bn:130686,cn:147036,dn:78314,en:147799,fn:55761,gn:127098,hn:134841,jn:96368,kn:67374,ln:48992,mn:146176,nn:49956,pn:31961,qn:26388,rn:23811,sn:5E4,tn:126250,un:96370,vn:47355,wn:47356,xn:37935,yn:45521,zn:21760,An:83769,Bn:49977,Cn:49974,Dn:93497,En:93498,Fn:34325,Gn:140759,Hn:115803,In:123707,Jn:100081,Kn:35309,Ln:68314,Mn:25602,Nn:100339,On:143516,Pn:59018,Qn:18248,Rn:50625,Sn:9729,Tn:37168,Un:37169,Vn:21667,Wn:16749,Xn:18635,Yn:39305,Zn:18046,ao:53969,
bo:8213,co:93926,eo:102852,fo:110099,ho:22678,jo:69076,ko:137575,mo:139224,no:100856,oo:17736,po:3832,qo:147111,ro:55759,so:64031,yo:93044,zo:93045,Ao:34388,Bo:17657,Co:17655,Do:39579,Eo:39578,Fo:77448,Go:8196,Ho:11357,Io:69877,Jo:8197,Ko:82039};function iq(){var a=ub(jq),b;return cg(new Wf(function(c,d){a.onSuccess=function(e){wi(e)?c(new kq(e)):d(new lq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new lq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new lq("Request timed out","net.timeout",e))};
b=Zi("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof dg&&b.abort();
return ag(c)})}
function lq(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(lq,$a);function kq(a){this.xhr=a}
;function mq(){this.i=0;this.h=null}
mq.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Vf(a)?a:nq(a)):2===this.i&&b?(a=b.call(c,this.h),Vf(a)?a:oq(a)):this};
mq.prototype.getValue=function(){return this.h};
mq.prototype.$goog_Thenable=!0;function oq(a){var b=new mq;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function nq(a){var b=new mq;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function pq(){if(ke()||Xj&&Yj("applewebkit")&&!Yj("version")&&(!Yj("safari")||Yj("gsa/"))||vc&&Yj("version/"))return!0;if(M("enable_web_eom_visitor_data"))return A("EOM_VISITOR_DATA")?!1:!0;var a=A("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=jj("CONSENT"))?a.startsWith("YES+"):!0}
;function qq(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof rq;this.isTimeout=a instanceof lq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof dg}
r(qq,$a);qq.prototype.name="BiscottiError";function rq(){$a.call(this,"Biscotti ID is missing from server")}
r(rq,$a);rq.prototype.name="BiscottiMissingError";var jq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},sq=null;function gi(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return ag(Error("Biscotti id fetching has been disabled entirely."));if(!pq())return ag(Error("User has not consented - not fetching biscotti id."));if("1"==sb())return ag(Error("Biscotti ID is not available in private embed mode"));sq||(sq=cg(iq().then(tq),function(a){return uq(2,a)}));
return sq}
function tq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new rq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new rq;a=a.id;hi(a);sq=nq(a);vq(18E5,2);return a}
function uq(a,b){b=new qq(b);hi("");sq=oq(b);0<a&&vq(12E4,a-1);throw b;}
function vq(a,b){xi(function(){cg(iq().then(tq,function(c){return uq(b,c)}),bb)},a)}
function wq(){try{var a=z("yt.ads.biscotti.getId_");return a?a():gi()}catch(b){return ag(b)}}
;function xq(a){if("1"!=sb()){a&&fi();try{wq().then(function(){},function(){}),xi(xq,18E5)}catch(b){di(b)}}}
;function yq(){this.yc=!0}
function zq(a){var b={},c=me([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(A("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Oh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Oh&&(b["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return b}
;var Aq=Symbol("injectionDeps");function Bq(a){this.name=a}
Bq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Cq(){this.key=Dq}
function Eq(){this.providers=new Map;this.h=new Map}
Eq.prototype.resolve=function(a){return a instanceof Cq?Fq(this,a.key,[],!0):Fq(this,a,[])};
function Fq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Cc)var e=d.Cc;else if(d.Bc)e=d[Aq]?Gq(a,d[Aq],c):[],e=d.Bc.apply(d,fa(e));else if(d.Jb){e=d.Jb;var f=e[Aq]?Gq(a,e[Aq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ap||a.h.set(b,e);
return e}
function Gq(a,b,c){return b?b.map(function(d){return d instanceof Cq?Fq(a,d.key,c,!0):Fq(a,d,c)}):[]}
;var Hq;var Iq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Jq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Kq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=pi(a).theme;return Jq.get(b)||null}catch(c){}return null}
;function Lq(){this.h={};if(this.i=kj()){var a=jj("CONSISTENCY");a&&Mq(this,{encryptedTokenJarContents:a})}}
Lq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.ba.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Mq(this,a)}};
function Mq(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&ij("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Nq=window.location.hostname.split(".").slice(-2).join(".");function Oq(){var a=A("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===A("INNERTUBE_CLIENT_NAME")&&(this.h=Pq(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Qq;Oq.getInstance=function(){Qq=z("yt.clientLocationService.instance");Qq||(Qq=new Oq,y("yt.clientLocationService.instance",Qq));return Qq};
Oq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Oq.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===A("INNERTUBE_CLIENT_NAME")?(this.h=Pq(this))&&this.h.set("yt-location-playability-token",a,15552E3):ij("YT_CL",JSON.stringify({loctok:a}),15552E3,Nq,!0))};
function Pq(a){return void 0===a.h?new Ij("yt-client-location"):a.h}
Oq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Oq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Rq(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.za&&(c=b.za[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Qb&&(d=b.Qb[a.continuationCommand.request]))return d();for(var e in a)if(b.nb[e]&&(a=b.nb[e]))return a()}
;function Sq(a){return function(){return new a}}
;var Tq={},Uq=(Tq.WEB_UNPLUGGED="^unplugged/",Tq.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Tq.WEB_UNPLUGGED_OPS="^unplugged/",Tq.WEB_UNPLUGGED_PUBLIC="^unplugged/",Tq.WEB_CREATOR="^creator/",Tq.WEB_KIDS="^kids/",Tq.WEB_EXPERIMENTS="^experiments/",Tq.WEB_MUSIC="^music/",Tq.WEB_REMIX="^music/",Tq.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Tq.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Tq);
function Vq(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Uq[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Uq).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Wq(a,b){return{method:void 0===b?"POST":b,mode:ri(a)?"same-origin":"cors",credentials:ri(a)?"same-origin":"include"}}
;function Xq(){}
Xq.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Iq:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=A("INNERTUBE_CONTEXT");if(g){g=vb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=A("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;mj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";pj(165)?m="USER_INTERFACE_THEME_DARK":pj(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Kq()||m;h.userInterfaceTheme=k;if(!f){if(k=
wj())h.connectionType=k;M("web_log_effective_connection_type")&&(k=xj())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=x.navigator)?0:q.deviceMemory)){var u;q=null==(u=x.navigator)?void 0:u.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}u=pi(x.location.href);!M("web_populate_internal_geo_killswitch")&&u.internalcountrycode&&(h.internalGeo=u.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},M("kevlar_woffle")&&
gj.h&&(h.mainAppWebInfo.pwaInstallabilityStatus=gj.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=hj(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(u=A("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:u})),u=A("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:u}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var C=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Oa){}C=void 0}C&&(h.timeZone=C)}(C=Zh())?h.experimentsToken=C:delete h.experimentsToken;C=$h();Lq.h||(Lq.h=new Lq);h=Lq.h.h;u=[];q=0;for(var v in h)u[q++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:C,consistencyTokenJars:u});!M("web_prequest_context_killswitch")&&(v=A("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);C=mj.getInstance();v=pj(58);C=C.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);C&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=bq())&&(g.clientScreenNonce=f):!f&&(f=bq())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=z("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Oq.getInstance().setLocationOnInnerTubeContext(g);try{var E=si(),F=E.bid;delete E.bid;g.adSignalsInfo={params:[],bid:F};
var I=p(Object.entries(E));for(var R=I.next();!R.done;R=I.next()){var O=p(R.value),S=O.next().value,ka=O.next().value;E=S;F=ka;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:E,value:""+F})}}catch(Oa){Jp(Oa)}I=g}else Jp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),I={};I={context:I};if(R=this.h(a)){this.i(I,R,b);var N;b="/youtubei/v1/"+Vq(this.j());var Ca;(a=null==(N=a.commandMetadata)?void 0:null==(Ca=N.webCommandMetadata)?void 0:Ca.apiUrl)&&(b=a);N=b;(Ca=A("INNERTUBE_HOST_OVERRIDE"))&&
(N=String(Ca)+String(dc(N)));Ca={};Ca.key=A("INNERTUBE_API_KEY");M("json_condensed_response")&&(Ca.prettyPrint="false");N=qi(N,Ca||{},!1);N={input:N,ra:Wq(N),ba:I,config:Object.assign({},void 0)};N.config.Ga?N.config.Ga.identity=c:N.config.Ga={identity:c};return N}Jp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Xq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Yq(){}
r(Yq,Xq);Yq.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ra:Wq("/getDatasyncIdsEndpoint","GET"),ba:{}}};
Yq.prototype.j=function(){return[]};
Yq.prototype.h=function(){};
Yq.prototype.i=function(){};var Zq={},$q=(Zq.GET_DATASYNC_IDS=Sq(Yq),Zq);function ar(a){var b=Ja.apply(1,arguments);if(!br(a)||b.some(function(e){return!br(e)}))throw Error("Only objects may be merged.");
var c=a;b=p(b);for(var d=b.next();!d.done;d=b.next())cr(c,d.value);return c}
function cr(a,b){for(var c in b)if(br(b[c])){if(c in a&&!br(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});cr(a[c],b[c])}else if(dr(b[c])){if(c in a&&!dr(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);er(a[c],b[c])}else a[c]=b[c];return a}
function er(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,br(c)?a.push(cr({},c)):dr(c)?a.push(er([],c)):a.push(c);return a}
function br(a){return"object"===typeof a&&!Array.isArray(a)}
function dr(a){return"object"===typeof a&&Array.isArray(a)}
;function fr(a,b){Nl.call(this,1,arguments);this.timer=b}
r(fr,Nl);var gr=new Ol("aft-recorded",fr);var hr=window;function ir(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var T=hr.performance||hr.mozPerformance||hr.msPerformance||hr.webkitPerformance||new ir;var jr=!1,kr={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||bb,T);function lr(a){var b=mr(a);if(b.aft)return b.aft;a=A((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function nr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==T?void 0:null==(a=T.getEntriesByType)?void 0:null==(b=a.call(T,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=or(e.requestStart),e.responseEnd=or(e.responseEnd),e.redirectStart=or(e.redirectStart),e.redirectEnd=or(e.redirectEnd),e.domainLookupEnd=or(e.domainLookupEnd),e.connectStart=or(e.connectStart),e.connectEnd=or(e.connectEnd),e.responseStart=or(e.responseStart),
e.secureConnectionStart=or(e.secureConnectionStart),e.domainLookupStart=or(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=T.timing}else a=T.timing;return a}
function pr(){return M("csi_use_time_origin")&&T.timeOrigin?Math.floor(T.timeOrigin):T.timing.navigationStart}
function or(a){return Math.round(pr()+a)}
function qr(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},y("ytcsi."+(a||"")+"data_",b));return b}
function rr(a){a=qr(a);a.info||(a.info={});return a.info}
function mr(a){a=qr(a);a.tick||(a.tick={});return a.tick}
function sr(a){a=qr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function tr(a){a=sr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ur(a){var b=qr(a).nonce;b||(b=Rp(),qr(a).nonce=b);return b}
function vr(a){var b=mr(a||""),c=lr(a);c&&!jr&&(Tl(gr,new fr(Math.round(c-b._start),a)),jr=!0)}
function wr(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!wr(a[d],b[d]))return!1;return!0}
;function xr(){if(T.getEntriesByType){var a=T.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return or(a.startTime)}a=T.timing;
return a.cc?Math.max(0,a.cc):0}
;function yr(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a),y("ytcsi.reference",{}));return a}
function zr(a){a=a||"";var b=z("ytcsi.reference");b||(yr(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=yr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},Ar=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",
U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",U.results="LATENCY_ACTION_RESULTS",
U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},Br=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",
V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",
V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",
V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm=
"shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",
V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),Cr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Dr={},Er=(Dr.ccs="CANARY_STATE_",Dr.mver="MEASUREMENT_VERSION_",Dr.pis="PLAYER_INITIALIZED_STATE_",Dr.yt_pt="LATENCY_PLAYER_",Dr.pa="LATENCY_ACTION_",Dr.ctop="TOP_ENTITY_TYPE_",Dr.yt_vst="VIDEO_STREAM_TYPE_",Dr),Fr="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Gr(a){return Ar[a]||"LATENCY_ACTION_UNKNOWN"}
function Hr(a,b,c){c=sr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Br){c=Br[a];0<=db(Cr,c)&&(b=!!b);a in Er&&"string"===typeof b&&(b=Er[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return ar({},d)}0<=db(Fr,a)||Kp(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,
LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,
LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,
LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,
LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,
LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,
LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,
LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";
W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";
W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";
W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";
W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";
W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";
W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";
W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";
W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";
var Ir={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Ir[Ir.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Ir[Ir.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Ir[Ir.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};
X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";
X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Jr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Jr[Jr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Jr[Jr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Jr[Jr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Jr[Jr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Jr[Jr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Jr[Jr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Jr[Jr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Jr[Jr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Kr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Kr[Kr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Kr[Kr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Kr[Kr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Kr[Kr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Lr={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Lr[Lr.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Lr[Lr.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Mr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Mr[Mr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Mr[Mr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Mr[Mr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Mr[Mr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Mr[Mr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Mr[Mr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Nr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Nr[Nr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Nr[Nr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Nr[Nr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Nr[Nr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Or={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Or[Or.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Or[Or.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Or[Or.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Pr={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Pr[Pr.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Pr[Pr.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Pr[Pr.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Qr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Rr=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Rr);function Sr(){this.h=0}
function Tr(){Sr.h||(Sr.h=new Sr);return Sr.h}
Sr.prototype.tick=function(a,b,c,d){Ur(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new vh,D(d,1,a),D(d,2,b),a=new yh,md(a,5,zh,d),wp(a,c)):hk("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Sr.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Ur(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,hk("latencyActionInfo",a,{cttAuthInfo:c}))};
Sr.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Ur(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new yh,md(c,7,zh,a),wp(c,b))};
Sr.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Ur(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,hk("latencyActionSpan",a,{cttAuthInfo:c}))};
function Ur(a,b){Rr[b]=Rr[b]||{count:0};var c=Rr[b];c.count++;c.time=P();a.h||(a.h=Rj(function(){var d=P(),e;for(e in Rr)Rr[e]&&6E4<d-Rr[e].time&&delete Rr[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Kp(c)),!0):!1}
;function Vr(){var a=["ol"];zr("").info.actionType="embed";a&&Vh("TIMING_AFT_KEYS",a);Vh("TIMING_ACTION","embed");Wr();a=rr();var b=tr();if("cold"===a.yt_lt||"cold"===b.loadType){var c=mr(),d=sr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Hr(f,a[f]))&&!wr(tr(),f)&&(ar(b,f),ar(e,f),c=!0);c&&Xr(e)}y("ytglobal.timingready_",!0);a=A("TIMING_ACTION");z("ytglobal.timingready_")&&a&&"_start"in mr()&&
lr()&&vr()}
function Yr(a,b,c,d){null!==b&&(rr(c)[a]=b,(a=Hr(a,b,c))&&Xr(a,c,d))}
function Xr(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=zr(b||""),ar(c.info,a),ar(tr(b),a),c=ur(b),b=qr(b).cttAuthInfo,Tr().info(a,c,b);else{c=new rh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,Ir[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,Jr[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,Kr[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,Lr[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,Mr[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,
a[e]);break;case "videoStreamType":D(c,53,Nr[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,Or[a[e]]);break;case "playerRotationType":D(c,101,Pr[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,
a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:Qr.includes(f)&&di(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){di(Error("Codegen laipb translator failed to set "+f))}}Zr(c,b)}}
function Zr(a,b){var c=sr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);zr(b||"").jspbInfo.push(a);c=ur(b);b=qr(b).cttAuthInfo;Tr().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;T.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),T.mark(d))}zr(c||"").tick[a]=b||P();d=sr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=mr(c);var e=b||P();d[a]=e;e=ur(c);var f=qr(c).cttAuthInfo;if("_start"===a){var g=Tr();Ur(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new ph,D(f,1,e),e=new yh,md(e,6,zh,f),wp(e,b)):hk("latencyActionBaselined",{clientActionNonce:e},b))}else Tr().tick(a,e,b,f);vr(c);return d[a]}
function $r(){var a=ur();requestAnimationFrame(function(){setTimeout(function(){a===ur()&&Z("ol",void 0,void 0)},0)})}
function as(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=pn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Wr(){function a(f){var g=nr(),h=pr();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=xr();0<f&&Z("fpt",f);f=nr();f.isPerformanceNavigationTiming&&Xr({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,
void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=pr()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));T&&"getEntriesByType"in T&&bs()}
var b=A("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=cs(b);Zr(b);b=new rh;D(b,25,!0);D(b,1,W[Gr(A("TIMING_ACTION"))]);var c=A("PREVIOUS_ACTION");c&&D(b,13,W[Gr(c)]);(c=A("CLIENT_PROTOCOL"))&&D(b,33,c);(c=A("CLIENT_TRANSPORT"))&&D(b,34,c);(c=bq())&&"UNDEFINED_CSN"!==c&&D(b,4,c);c=as();1!==c&&-1!==c||D(b,6,!0);c=rr();D(b,3,"cold");a(c);c=ds();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new qh;D(e,1,d);nd(b,83,qh,e)}}Zr(b)}else{for(c in b)b.hasOwnProperty(c)&&Yr(c,b[c]);
b={isNavigation:!0,actionType:Gr(A("TIMING_ACTION"))};if(c=A("PREVIOUS_ACTION"))b.previousAction=Gr(c);if(c=A("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=A("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=bq())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=as();if(1===c||-1===c)b.isVisible=!0;c=rr();b.loadType="cold";a(c);c=ds();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});Xr(b)}}
function cs(a){var b=new rh;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "GetGuide_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "GetHome_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "GetPlayer_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "GetSearch_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;
case "GetSettings_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "GetTrending_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "GetWatchNext_rid":e=new uh;D(e,1,c);D(e,2,String(d));th(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}return b}
function es(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=T.getEntriesByName(c))&&a[0]&&(a=a[0],c=pr(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ds(){var a=[];if(document.querySelector&&T&&T.getEntriesByName)for(var b in kr)if(kr.hasOwnProperty(b)){var c=kr[b];es(b,c)&&a.push(c)}return a}
function bs(){var a=window.location.protocol,b=T.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",or(b.startTime)),Z("wffe",or(b.responseEnd)))}
var fs=window;fs.ytcsi&&(fs.ytcsi.info=Yr,fs.ytcsi.tick=Z);var gs=["consistency","mss","client_location","entities","store"];function hs(a,b,c,d){this.o=a;this.J=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.za||(a.za={});a.za=Object.assign({},$q,a.za)}
function is(a,b,c,d){if(void 0!==hs.h){if(d=hs.h,a=[a!==d.o,b!==d.J,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else hs.h=new hs(a,b,c,d)}
function js(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Iq:c;var d=Rq(b,a.o);if(!d)return ag(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new Wf(function(f){var g,h,k;return w(function(m){if(1==m.h){h="cors"===(null==(g=e.ra)?void 0:g.mode)?"cors":void 0;if(a.l.yc){var q=e.config,u;q=null==q?void 0:null==(u=q.Ga)?void 0:u.sessionIndex;u=zq({sessionIndex:q});k=Object.assign({},ks(h),u);return m.s(2)}return t(m,ls(e.config,
h),3)}2!=m.h&&(k=m.i);f(ms(a,e,k));m.h=0})}):ag(new Q("Error: Failed to build request for command.",b))}
function ms(a,b,c){var d,e,f,g,h,k,m,q,u,C,v,E,F,I,R,O,S,ka;return w(function(N){switch(N.h){case 1:N.s(2);break;case 3:if((d=N.i)&&!d.isExpired())return N.return(Promise.resolve(d.h()));case 2:if((f=null==(e=b.config)?void 0:e.Xo)&&a.h.has(f)&&M("web_memoize_inflight_requests"))return N.return(a.h.get(f));if(null==(g=b)?0:null==(h=g.ba)?0:h.context)for(k=p([]),m=k.next();!m.done;m=k.next())q=m.value,q.Vo(b.ba.context);if(null==(u=a.i)?0:u.l(b.input,b.ba))return N.return(a.i.j(b.input,b.ba));C=JSON.stringify(b.ba);
b.ra=Object.assign({},b.ra,{headers:c});v=Object.assign({},b.ra);"POST"===b.ra.method&&(v=Object.assign({},v,{body:C}));(null==(E=b.config)?0:E.jc)&&Z(b.config.jc);F=a.J.fetch(b.input,v,b.config);f&&a.h.set(f,F);return t(N,F,4);case 4:I=N.i;f&&a.h.has(f)&&a.h.delete(f);(null==(R=b.config)?0:R.kc)&&Z(b.config.kc);if(I||null==(O=a.i)||!O.h(b.input,b.ba)){N.s(5);break}return t(N,a.i.i(b.input,b.ba),6);case 6:I=N.i;case 5:if(I&&a.j)for(S=p(gs),m=S.next();!m.done;m=S.next())ka=m.value,a.j[ka]&&a.j[ka].handleResponse(I,
b);return N.return(I)}})}
function ls(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ga)?void 0:d.sessionIndex;var h=zq({sessionIndex:e});if(!(h instanceof Wf)){var k=new Wf(bb);Xf(k,2,h);h=k}return t(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},ks(b),f)))})}
function ks(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=A("EOM_VISITOR_DATA"):A("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=A("VISITOR_DATA"));"cors"!==a&&((a=A("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=A("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=A("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=
A("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var ns=["share/get_web_player_share_panel"],os=["feedback"],ps=["notification/modify_channel_preference"],qs=["browse/edit_playlist"],rs=["subscription/subscribe"],ss=["subscription/unsubscribe"];function ts(){}
r(ts,Xq);ts.prototype.j=function(){return rs};
ts.prototype.h=function(a){return a.subscribeEndpoint};
ts.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(ts.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function us(){}
r(us,Xq);us.prototype.j=function(){return ss};
us.prototype.h=function(a){return a.unsubscribeEndpoint};
us.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(us.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vs(){}
r(vs,Xq);vs.prototype.j=function(){return os};
vs.prototype.h=function(a){return a.feedbackEndpoint};
vs.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(vs.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ws(){}
r(ws,Xq);ws.prototype.j=function(){return ps};
ws.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
ws.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function xs(){}
r(xs,Xq);xs.prototype.j=function(){return qs};
xs.prototype.h=function(a){return a.playlistEditEndpoint};
xs.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ys(){}
r(ys,Xq);ys.prototype.j=function(){return ns};
ys.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
ys.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Dq=new Bq("NETWORK_SLI_TOKEN");function zs(a){this.h=a}
zs.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.h&&(d=ac(bc(5,nc(a)))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Kp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Kp(g)}))})};
zs.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.failure(),b=b.then(function(c){Kp(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
zs[Aq]=[new Cq];var As=new Bq("NETWORK_MANAGER_TOKEN");var Bs;function Cs(a){Nl.call(this,1,arguments);this.csn=a}
r(Cs,Nl);var Wl=new Ol("screen-created",Cs),Ds=[],Fs=Es,Gs=0;function Hs(a,b,c,d,e,f,g){function h(){Kp(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Fs();f=new Vp({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,X:k};if(M("il_via_jspb")){var m=new fh;m.S(k);gh(m,f.getAsJspb());c&&c.visualElement?(f=new hh,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),ih(f,c.visualElement.getAsJspb()),g&&D(f,4,Ah[g]),H(m,5,f)):c&&h();d&&D(m,3,d);Ap(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?gp("screenCreated",f,a,e):hk("screenCreated",f,e);Tl(Wl,new Cs(k));return k}
function Is(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:dq(b),
X:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Kp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new jh;h.S(b);lh(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();nd(h,3,dh,k)});
"UNDEFINED_CSN"==b?Js("visualElementAttached",h,f):Bp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Js("visualElementAttached",c,f):a?gp("visualElementAttached",c,a,f):hk("visualElementAttached",c,f)}
function Es(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Kc(b,3)}
function Js(a,b,c){Ds.push({payloadName:a,payload:b,options:c});Gs||(Gs=Xl())}
function Yl(a){if(Ds){for(var b=p(Ds),c=b.next();!c.done;c=b.next()){var d=c.value;if(d.payload)if(M("il_via_jspb"))switch(d.payload.S(a.csn),d.payloadName){case "screenCreated":Ap(d.payload,d.options);break;case "visualElementAttached":Bp(d.payload,d.options);break;case "visualElementShown":c=d.payload;d=d.options;var e=new yh;md(e,72,zh,c);wp(e,d);break;case "visualElementHidden":xp(d.payload,d.options);break;case "visualElementGestured":yp(d.payload,d.options);break;case "visualElementStateChanged":zp(d.payload,
d.options);break;default:Kp(new Q("flushQueue unable to map payloadName to JSPB setter"))}else d.payload.csn=a.csn,gp(d.payloadName,d.payload,null,d.options)}Ds.length=0}Gs=0}
;function Ks(){this.i=new Set;this.h=new Set;this.j=new Map}
Ks.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ma(Ks);function Ls(){this.o=[];this.C=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Ms(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=bq(c),f=$p(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Is(a.client,e,f,[Wp(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Is(a.client,e,f,[Wp(d.playerResponse.trackingParams)])}})}
function Ns(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=bq(d);c=c||$p(d);e&&c&&Is(a.client,e,c,[b])}}
Ls.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=bq(void 0===c?0:c)){a=this.client;var e=Wp(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:dq(c),X:c};if(M("il_via_jspb")){var g=new mh;g.S(c);e=e.getAsJspb();H(g,2,e);D(g,4,Ah[f]);b&&H(g,3);"UNDEFINED_CSN"==c?Js("visualElementGestured",g,d):yp(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Js("visualElementGestured",f,d):a?gp("visualElementGestured",
f,a,d):hk("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Os(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Ps(a,b,c);var f=$p(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Ns(a,h[0],h[1]||f,c.layer);f=p(a.C);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=bq(g);var m=k[0]||$p(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:dq(h),X:h};M("il_via_jspb")?(q=new oh,q.S(h),m=m.getAsJspb(),H(q,2,m),"UNDEFINED_CSN"==h?Js("visualElementStateChanged",q,k):zp(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?Js("visualElementStateChanged",m,k):g?gp("visualElementStateChanged",m,g,k):hk("visualElementStateChanged",m,k))}}}};
bq(c.layer)||a.j();if(c.qb)for(var d=p(c.qb),e=d.next();!e.done;e=d.next())Ms(a,e.value,c.layer);else Jp(Error("Delayed screen needs a data promise."))}
function Ps(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.dc?c.dc:c.layer;var e=bq(d);d=$p(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=A("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Hs(a.client,b,f,c.pb,c.cttAuthInfo,g,c.So)}catch(m){Mp(m,{Yo:b,rootVe:d,parentVisualElement:void 0,Po:e,Uo:f,pb:c.pb});Jp(m);return}eq(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Up));for(f=b.next();!f.done;f=b.next())if(bq(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:dq(e),X:e,sb:g},M("il_via_jspb")?(h=new nh,h.S(e),d=d.getAsJspb(),H(h,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?Js("visualElementHidden",h,f):xp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Js("visualElementHidden",d,f):b?gp("visualElementHidden",d,b,f):hk("visualElementHidden",
d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Xr({clientScreenNonce:k});Ks.getInstance().clear();d=$p(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e={cttAuthInfo:dq(k),X:k},M("il_via_jspb")?(b=new nh,b.S(k),f=d.getAsJspb(),H(b,2,f),D(b,4,1),"UNDEFINED_CSN"==k?Js("visualElementShown",b,e):(k=new yh,md(k,72,zh,b),wp(k,e))):(b={csn:k,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==k?Js("visualElementShown",b,e):
hk("visualElementShown",b,e)));a.i.delete(c.layer||0);a.j=void 0;e=p(a.u);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Ns(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){Jp(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Jp(m)}}}
;function Qs(){var a,b;return w(function(c){if(1==c.h)return a=hs.h,a?t(c,js(a),2):(Kp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.i)return b.errorMetadata?(Jp(Error("Datasync IDs fetch responded with "+b.errorMetadata.code+": "+b.error)),c.return(void 0)):c.return(b.Qo);Kp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Rs=x.caches,Ss;function Ts(a){var b=a.indexOf(":");return-1===b?{Bb:a}:{Bb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Us(){return w(function(a){if(void 0!==Ss)return a.return(Ss);Ss=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return wa(d,2),t(d,Rs.open("test-only"),4);case 4:return t(d,Rs.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Ss)})}
function Vs(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return t(k,Us(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return t(k,Rs.keys(),3)}c=k.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ts(f),h=g.datasyncId,!h||a.includes(h)||b.push(Rs.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Ws(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return t(h,Us(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=lk("cache contains other");return t(h,Rs.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ts(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Xs(){try{return!!self.localStorage}catch(a){return!1}}
;function Ys(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Zs(a){if(Xs()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ys(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function $s(){if(!Xs())return!1;var a=lk(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Ys(c.value),void 0!==c&&c!==a)return!0;return!1}
;function at(){Qs().then(function(a){a&&(vl(a),Vs(a),Zs(a))})}
function bt(){var a=new Im;af.N(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.s(2);break}b=lk("clear");if(b.startsWith("V")){var g=[b];vl(g);Vs(g);Zs(g);return f.return()}c=$s();return t(f,Ws(),3);case 3:return d=f.i,t(f,wl(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.H()?at():a.l.add("publicytnetworkstatus-online",at,!0,void 0,void 0),f.h=0}})})}
;function ct(a){a&&(a.dataset?a.dataset[dt("loaded")]="true":a.setAttribute("data-loaded","true"))}
function et(a,b){return a?a.dataset?a.dataset[dt(b)]:a.getAttribute("data-"+b):null}
var ft={};function dt(a){return ft[a]||(ft[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var gt=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ht=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function jt(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(gt,""),c=c.replace(ht,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else kt(a,b,c)}
function kt(a,b,c){c=void 0===c?null:c;var d=lt(a),e=document.getElementById(d),f=e&&et(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Jn(d,b),b=""+Ra(b),mt[b]=f),g||(e=nt(a,d,function(){et(e,"loaded")||(ct(e),Mn(d),xi(Xa(co,d),0))},c)))}
function nt(a,b,c,d){d=void 0===d?null:d;var e=Kd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gd(e,Ib(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ot(a){a=lt(a);var b=document.getElementById(a);b&&(co(a),b.parentNode.removeChild(b))}
function pt(a,b){a&&b&&(a=""+Ra(b),(a=mt[a])&&Ln(a))}
function lt(a){var b=document.createElement("a");Ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var mt={};var qt=[],rt=!1;function st(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&pq()&&"1"!=sb()){var a=function(){rt=!0;"google_ad_status"in window?Vh("DCLKSTAT",1):Vh("DCLKSTAT",2)};
try{jt("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}qt.push(af.N(function(){if(!(rt||"google_ad_status"in window)){try{pt("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}rt=!0;Vh("DCLKSTAT",3)}},5E3))}}
function tt(){var a=Number(A("DCLKSTAT",0));return isNaN(a)?0:a}
;function ut(){this.state=1;this.h=null}
l=ut.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Cb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=zb())?f.createScript(e):e,e=(new Eb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),d=Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());vt(this,e,
d,a.program,b,c)}else Kp(Error("Cannot initialize botguard without program"))};
function vt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,jt(c,function(){window[g]?zt(a,d,g,e):(a.state=3,ot(c),Kp(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Kd("SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?zt(a,d,g,e):(a.state=4,Kp(new Q("Unable to load Botguard from JS")))):Kp(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function zt(a,b,c,d){a.state=5;try{var e=new zd({program:b,globalName:c});e.vc.then(function(){a.state=6;d&&d(b)});
At(a,e)}catch(f){a.state=7,f instanceof Error&&Kp(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={ob:a};if(b.i)throw Error("Already disposed");b=b.l([a.ob,a.xc])}else b=null;return b};
l.dispose=function(){At(this,null);this.state=8};
function At(a,b){oe(a.h);a.h=b}
;var Bt=new ut;function Ct(){return Bt.isInitialized()}
function Dt(a){a=void 0===a?{}:a;return Bt.invoke(a)}
;function Et(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Wj():d;this.l=c;this.j=d;this.i=new yd;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={sa:a.sa,Ba:a.Ba},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ba=d;a.sa=e;d=function(f){return function(){f.sa.cb();b.h[f.Ba].Ra=!0;b.h.every(function(g){return!0===g.Ra})&&b.i.resolve()}}(a);
e=Sj(d,Ft(this,a.sa));this.h[a.Ba]=Object.assign({},a.sa,{cb:d,Na:e})}}
function Gt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Ft(a,a.h[e])-Ft(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Na||c.Ra||(a.j.U(c.Na),Sj(c.cb,10))}
Et.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Na||b.Ra||this.j.U(b.Na),b.Ra=!0;this.i.resolve()};
function Ft(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Ht(a){this.state=a;this.plugins=[];this.m=void 0}
Ht.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ja.apply(0,arguments)))};
Ht.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(Gt(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(It(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function It(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Wj();var g={};e=p(e);for(var h=e.next();!h.done;g={Ca:g.Ca},h=e.next())g.Ca=h.value,Uj(function(k){return function(){k.Ca.ka.apply(k.Ca,fa(d))}}(g));
f=f.map(function(k){var m;return{cb:function(){k.ka.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new Et(f))}}
da.Object.defineProperties(Ht.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Jt(a){Ht.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.C=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(Jt,Ht);Jt.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Jt.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Jt.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Jt.prototype.i=function(){this.h=new Map};function Kt(a){Ht.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Kt,Ht);Kt.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Kt.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Kt.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Kt.prototype.o=function(a,b){a(null==b?void 0:b.event)};function Lt(){this.h=new Jt;this.i=new Kt}
Lt.prototype.install=function(){var a=Ja.apply(0,arguments);this.h.install.apply(this.h,fa(a));this.i.install.apply(this.i,fa(a))};function Mt(){Lt.call(this);var a={};this.install((a.document_disposed={ka:this.j},a));a={};this.install((a.flush_logs={ka:this.l},a))}
var Nt;r(Mt,Lt);Mt.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new ch,b=bq();b&&a.S(b);b=new yh;md(b,380,zh,a);wp(b);M("web_fp_via_jspb_and_json")&&hk("finalPayload",{csn:bq()})}else hk("finalPayload",{csn:bq()})};
Mt.prototype.j=function(){Op(Pp)};function Ot(){}
Ot.getInstance=function(){var a=z("ytglobal.storage_");a||(a=new Ot,y("ytglobal.storage_",a));return a};
Ot.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Pt()):d.return()})};
function Pt(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Ot);function fk(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Yh("ytidb_transaction_ended_event_rate_limit",.02)}
fk.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Qt(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Qt(a,b){Ot.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Rt(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Rt(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Rt(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var St=window;
function Tt(){var a=St.uaChPolyfill.state;if(0===a.type)hk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Jp(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);hk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),hk("clientHintsPolyfillDiagnostics",
b))}}
var Ut=!1;function Vt(){var a;1===(null==(a=St.uaChPolyfill)?void 0:a.state.type)?Ut||(St.uaChPolyfill.onReady=Vt,Ut=!0):St.uaChPolyfill&&Tt()}
;function Wt(a,b,c){K.call(this);var d=this;c=c||A("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.L="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.L=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=db(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(Wt,K);Wt.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.L)}catch(d){ei(d)}}};
Wt.prototype.I=function(){window.removeEventListener("message",this.A);K.prototype.I.call(this)};function Xt(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Wt(!!A("WIDGET_ID_ENFORCE")),b=this.hc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=A("WIDGET_ID"))this.h.sessionId=a}
l=Xt.prototype;l.hc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Yt(this,a)),this.j[a]=!0)):this.jb(a,b,c)};
l.jb=function(){};
function Yt(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Ub=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Xa());this.sendMessage("onReady");eb(this.i,this.Hb,this);this.i=[]};
l.Xa=function(){return null};
function Zt(a,b){a.sendMessage("infoDelivery",b)}
l.Hb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Hb({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function $t(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function au(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function bu(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function cu(a){Xt.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.sc.bind(this));this.addEventListener("onVolumeChange",this.tc.bind(this));this.addEventListener("onApiChange",this.lc.bind(this));this.addEventListener("onPlaybackQualityChange",this.oc.bind(this));this.addEventListener("onPlaybackRateChange",this.pc.bind(this));this.addEventListener("onStateChange",this.qc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.uc.bind(this))}
r(cu,Xt);l=cu.prototype;
l.jb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&$t(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=au(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=au(e);break;case "loadPlaylist":case "cuePlaylist":e=bu(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);$t(a)&&Zt(this,this.Xa())}};
l.onReady=function(){var a=this.Ub.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Xa=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.qc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Zt(this,a)};
l.oc=function(a){Zt(this,{playbackQuality:a})};
l.pc=function(a){Zt(this,{playbackRate:a})};
l.lc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.tc=function(){Zt(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.sc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Zt(this,a)};
l.uc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Zt(this,a)};
l.dispose=function(){Xt.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function du(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Db,this)}
r(du,K);l=du.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.la("RECEIVING"))};
l.la=function(a,b){this.started&&!this.h()&&this.connection.la(a,b)};
l.Db=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=eu(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=fu(a,c))&&this.la(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.mc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.mc=function(a,b){this.started&&!this.h()&&this.connection.la(a,this.Wa(a,b))};
l.Wa=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.I=function(){var a=this.connection;a.h()||ng(a.i,"command",this.Db,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.I.call(this)};function gu(a,b){du.call(this,b);this.api=a;this.start()}
r(gu,du);gu.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
gu.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function eu(a,b){switch(a){case "loadVideoById":return a=au(b),[a];case "cueVideoById":return a=au(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=bu(b),[a];case "cuePlaylist":return a=bu(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function fu(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
gu.prototype.Wa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return du.prototype.Wa.call(this,a,b)};
gu.prototype.I=function(){du.prototype.I.call(this);delete this.api};function hu(a){a=void 0===a?!1:a;K.call(this);this.i=new L(a);qe(this,Xa(oe,this.i))}
Ya(hu,K);hu.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
hu.prototype.l=function(a,b){this.h()||this.i.ja.apply(this.i,arguments)};function iu(a,b,c){hu.call(this);this.j=a;this.destination=b;this.id=c}
r(iu,hu);iu.prototype.la=function(a,b){this.h()||this.j.la(this.destination,this.id,a,b)};
iu.prototype.I=function(){this.destination=this.j=null;hu.prototype.I.call(this)};function ju(a,b,c){K.call(this);this.destination=a;this.origin=c;this.i=wn(window,"message",this.j.bind(this));this.connection=new iu(this,a,b);qe(this,Xa(oe,this.connection))}
r(ju,K);ju.prototype.la=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Pf(a),this.origin))};
ju.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
ju.prototype.I=function(){xn(this.i);this.destination=null;K.prototype.I.call(this)};function ku(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ku.prototype.clone=function(){var a=new ku,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=ub(c):a[b]=c}return a};var lu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function mu(a){a=a||"";if(window.spf){var b=a.match(lu);spf.style.load(a,b?b[1]:"",void 0)}else nu(a)}
function nu(a){var b=ou(a),c=document.getElementById(b),d=c&&et(c,"loaded");d||c&&!d||(c=pu(a,b,function(){et(c,"loaded")||(ct(c),Mn(b),xi(Xa(co,b),0))}))}
function pu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ib(a);Vb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ou(a){var b=Kd("A");Cb("This URL is never added to the DOM");Ub(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function qu(){K.call(this);this.i=[]}
r(qu,K);qu.prototype.I=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ka,void 0)}K.prototype.I.call(this)};function ru(){qu.apply(this,arguments)}
r(ru,qu);function su(a,b,c,d){K.call(this);var e=this;this.M=b;this.webPlayerContextConfig=d;this.Ta=!1;this.api={};this.Da=this.u=null;this.T=new L;this.i={};this.fa=this.Ea=this.elementId=this.Ua=this.config=null;this.Y=!1;this.l=this.A=null;this.Fa={};this.Lb=["onReady"];this.lastError=null;this.kb=NaN;this.L={};this.Mb=new ru(this);this.na=0;this.j=this.m=a;qe(this,Xa(oe,this.T));tu(this);uu(this);qe(this,Xa(oe,this.Mb));c?this.na=xi(function(){e.loadNewVideoConfig(c)},0):d&&(vu(this),wu(this))}
r(su,K);l=su.prototype;l.getId=function(){return this.M};
l.loadNewVideoConfig=function(a){if(!this.h()){this.na&&(yi(this.na),this.na=0);var b=a||{};b instanceof ku||(b=new ku(b));this.config=b;this.setConfig(a);wu(this);this.isReady()&&xu(this)}};
function vu(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.M,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.M:a.config.attrs.id=a.M);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Ua=a;this.config=yu(a);vu(this);if(!this.Ea){var b;this.Ea=zu(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Vd(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Vd(Number(a)||a))};
function xu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Au(a){var b=!0,c=Bu(a);c&&a.config&&(a=Cu(a),b=et(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function wu(a){if(!a.h()&&!a.Y){var b=Au(a);if(b&&"html5"===(Bu(a)?"html5":null))a.fa="html5",a.isReady()||Du(a);else if(Eu(a),a.fa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Du(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Fu(a,"player_bootstrap_method")?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.config?yu(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Du(a)};
a.Y=!0;b?a.A():(jt(Cu(a),a.A),(b=Gu(a))&&mu(b),Hu(a)&&!c&&y("yt.player.Application.create",null))}}}
function Bu(a){var b=Jd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Du(a){if(!a.h()){var b=Bu(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Fu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Iu(a)}else a.kb=xi(function(){Du(a)},50)}}
function Iu(a){tu(a);a.Ta=!0;var b=Bu(a);if(b){a.u=Ju(a,b,"addEventListener");a.Da=Ju(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ju(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);xu(a);a.Ea&&a.Ea(a.api);a.T.ja("onReady",a.api)}
function Ju(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Kp(f))}}}
function tu(a){a.Ta=!1;if(a.Da)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Da(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&yi(Number(c));a.L={};a.u=null;a.Da=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ua};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ta};
function uu(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Mn("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Mn("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=zu(this,b);d&&(0<=db(this.Lb,a)||this.i[a]||(b=Ku(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&xi(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=zu(this,b))&&ng(this.T,a,b)};
function zu(a,b){var c=b;if("string"===typeof b){if(a.Fa[b])return a.Fa[b];c=function(){var d=Ja.apply(0,arguments),e=z(b);if(e)try{e.apply(x,d)}catch(f){Jp(f)}};
a.Fa[b]=c}return c?c:null}
function Ku(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;x[c]=function(d){var e=xi(function(){if(!a.h()){a.T.ja(b,null!=d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
pb(a.L,String(e))};
return c}
l.getPlayerType=function(){return this.fa||(Bu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Eu(a){a.cancel();tu(a);a.fa=null;a.config&&(a.config.loaded=!1);var b=Bu(a);b&&(Au(a)||!Hu(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&pt(Cu(this),this.A);yi(this.kb);this.Y=!1};
l.I=function(){Eu(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Jp(b)}this.Fa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.Ua=this.config=this.api=null;delete this.m;delete this.j;K.prototype.I.call(this)};
function Hu(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Cu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Gu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Fu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===ki(c||"","&")[b]}
function yu(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Lu={},Mu="player_uid_"+(1E9*Math.random()>>>0);function Nu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Jd(d):d;var e=Mu+"_"+Ra(d),f=Lu[e];if(f&&c)return Ou(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new su(d,e,a,b);Lu[e]=f;Mn("player-added",f.api);qe(f,function(){delete Lu[f.getId()]});
return f.api}
function Ou(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Pu=null,Qu=null,Ru=null;function Su(){var a=Pu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Tu(a,b,c){a="ST-"+Zb(a).toString(36);b=b?fc(b):"";c=c||5;pq()&&ij(a,b,c)}
;function Uu(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=A("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=A("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=cc(window.location.href);g&&f.push(g);g=cc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Ub(f,d),d=f.href),d&&(d=dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:bq()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Tu(d,b,h)}else Tu(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=gc(a,k)+m;var u=void 0===u?Ud:u;a:{u=void 0===u?Ud:u;for(k=0;k<u.length;++k)if(m=u[k],m instanceof Sd&&m.isValid(a)){u=new Dd(a,Bd);break a}u=void 0}c.href=Fd(u||Ed)}return!0}
;y("yt.setConfig",Vh);y("yt.config.set",Vh);y("yt.setMsg",gq);y("yt.msgs.set",gq);y("yt.logging.errors.log",Jp);
y("writeEmbed",function(){var a=A("PLAYER_CONFIG");if(!a){var b=A("PLAYER_VARS");b&&(a={args:b})}xq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=A("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=pi(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Vr();if((c=A("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=pi(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Pu=Nu(a,c,!1)}else Pu=Nu(a);Pu.addEventListener("onVideoDataChange",Su);a=A("POST_MESSAGE_ID","player");A("ENABLE_JS_API")?Ru=new cu(Pu):A("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Qu=new ju(window.parent,a,b),Ru=new gu(Pu,Qu.connection));
st();M("ytidb_create_logger_embed_killswitch")||ek();a={};Nt||(Nt=new Mt);Nt.install((a.flush_logs={ka:function(){So()}},a));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Pm():Xm());M("embeds_enable_ua_ch_polyfill")&&Vt();M("ytidb_clear_embedded_player")&&af.N(function(){var e;if(!Bs){Hq||(Hq=new Eq);var f=Hq;var g={fc:As,Jb:zs};f.providers.set(g.fc,g);g={nb:{feedbackEndpoint:Sq(vs),modifyChannelNotificationPreferenceEndpoint:Sq(ws),playlistEditEndpoint:Sq(xs),subscribeEndpoint:Sq(ts),unsubscribeEndpoint:Sq(us),webPlayerShareEntityServiceEndpoint:Sq(ys)}};var h=M("web_enable_client_location_service")?
Oq.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){yq.h||(yq.h=new yq);var m=yq.h}void 0===e&&(e=f.resolve(As));is(g,e,m,k);Bs=hs.h}bt()})});
var Vu=ci(function(){$r();var a=mj.getInstance(),b=pj(119),c=1<window.devicePixelRatio;if(document.body&&Af(document.body,"exp-invert-logo"))if(c&&!Af(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Af(d,"inverted-hdpi")){var e=yf(d);zf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Af(document.body,"inverted-hdpi")&&Bf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=qj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete lj[b]:(c=d.toString(16),
lj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in lj)d.push(f+"="+encodeURIComponent(String(lj[f])));ij(b,d.join("&"),63072E3,a.i,c)}Ls.h||(Ls.h=new Ls);a=Ls.h;f=16623;var g=void 0===g?{}:g;Object.values(hq).includes(f)||(Kp(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.C=[];g.qb?Os(a,f,g):Ps(a,f,g)}),Wu=ci(function(){Pu&&Pu.sendAbandonmentPing&&Pu.sendAbandonmentPing();
A("PL_ATT")&&Bt.dispose();for(var a=af,b=0,c=qt.length;b<c;b++)a.U(qt[b]);qt.length=0;ot("//static.doubleclick.net/instream/ad_status.js");rt=!1;Vh("DCLKSTAT",0);pe(Ru,Qu);Pu&&(Pu.removeEventListener("onVideoDataChange",Su),Pu.destroy())});
window.addEventListener?(window.addEventListener("load",Vu),window.addEventListener("pagehide",Wu)):window.attachEvent&&(window.attachEvent("onload",Vu),window.attachEvent("onunload",Wu));y("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Ct);y("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Dt);y("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||tt);y("yt.player.exports.navigate",z("yt.player.exports.navigate")||Uu);
y("yt.util.activity.init",z("yt.util.activity.init")||Bn);y("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||En);y("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Cn);}).call(this);
