(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="182",Nn={ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_h=0,fl=1,vh=2,ua=1,xh=2,us=3,Hi=0,Ee=1,Je=2,pi=0,Fn=1,Me=2,pl=3,ml=4,yh=5,tn=100,Mh=101,Sh=102,bh=103,Eh=104,wh=200,Th=201,Ah=202,Ch=203,wr=204,Tr=205,Ph=206,Rh=207,Dh=208,Lh=209,Ih=210,Uh=211,Nh=212,Fh=213,Oh=214,Ar=0,Cr=1,Pr=2,Bn=3,Rr=4,Dr=5,Lr=6,Ir=7,Cc=0,Bh=1,zh=2,mi=0,Po=1,Ro=2,Do=3,Ra=4,Lo=5,Io=6,Uo=7,Pc=300,on=301,zn=302,Ur=303,Nr=304,Da=306,Fr=1e3,Ti=1001,Or=1002,be=1003,kh=1004,Us=1005,Ne=1006,za=1007,sn=1008,ze=1009,Rc=1010,Dc=1011,vs=1012,No=1013,_i=1014,li=1015,Qe=1016,Fo=1017,Oo=1018,xs=1020,Lc=35902,Ic=35899,Uc=1021,Nc=1022,ci=1023,Ri=1026,an=1027,Bo=1028,zo=1029,kn=1030,ko=1031,Vo=1033,da=33776,fa=33777,pa=33778,ma=33779,Br=35840,zr=35841,kr=35842,Vr=35843,Gr=36196,Hr=37492,Wr=37496,Xr=37488,$r=37489,jr=37490,qr=37491,Yr=37808,Kr=37809,Zr=37810,Jr=37811,Qr=37812,to=37813,eo=37814,io=37815,no=37816,so=37817,ao=37818,ro=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,mo=36285,go=36286,Vh=3200,Fc=0,Gh=1,ki="",Ye="srgb",Vn="srgb-linear",xa="linear",Yt="srgb",fn=7680,gl=519,Hh=512,Wh=513,Xh=514,Go=515,$h=516,jh=517,Ho=518,qh=519,_o=35044,_l="300 es",fi=2e3,ya=2001;function Oc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yh(){const s=ys("canvas");return s.style.display="block",s}const vl={};function Ma(...s){const t="THREE."+s.shift();console.log(t,...s)}function Pt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Gt(...s){const t="THREE."+s.shift();console.error(t,...s)}function Ms(...s){const t=s.join(" ");t in vl||(vl[t]=!0,Pt(...s))}function Kh(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}class hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const ps=Math.PI/180,Ss=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ft(s,t,e){return Math.max(t,Math.min(e,s))}function Wo(s,t){return(s%t+t)%t}function Zh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Jh(s,t,e){return s!==t?(e-s)/(t-s):0}function ms(s,t,e){return(1-e)*s+e*t}function Qh(s,t,e,i){return ms(s,t,1-Math.exp(-e*i))}function tu(s,t=1){return t-Math.abs(Wo(s,t*2)-t)}function eu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function iu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function nu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function su(s,t){return s+Math.random()*(t-s)}function au(s){return s*(.5-Math.random())}function ru(s){s!==void 0&&(xl=s);let t=xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(s){return s*ps}function lu(s){return s*Ss}function cu(s){return(s&s-1)===0&&s!==0}function hu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function uu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function du(s,t,e,i,n){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+i)/2),h=r((t+i)/2),u=a((t-i)/2),d=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _e={DEG2RAD:ps,RAD2DEG:Ss,generateUUID:Ai,clamp:Ft,euclideanModulo:Wo,mapLinear:Zh,inverseLerp:Jh,lerp:ms,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:iu,randInt:nu,randFloat:su,randFloatSpread:au,seededRandom:ru,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:ee,denormalize:oi};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*v;m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);f=Math.sin(f*x)/E,o=Math.sin(o*x)/E,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+v*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=a[r],d=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(a/2),d=l(i/2),p=l(n/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(n+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(r-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+n*c-a*l,this._y=n*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),h=2*(o*e-a*n),u=2*(a*i-r*e);return this.x=e+l*c+r*u-o*h,this.y=i+l*h+o*c-a*u,this.z=n+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new P,yl=new ln;class Ut{constructor(t,e,i,n,a,r,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c)}set(t,e,i,n,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],x=n[1],E=n[4],b=n[7],w=n[2],A=n[5],C=n[8];return a[0]=r*v+o*x+l*w,a[3]=r*m+o*E+l*A,a[6]=r*f+o*b+l*C,a[1]=c*v+h*x+u*w,a[4]=c*m+h*E+u*A,a[7]=c*f+h*b+u*C,a[2]=d*v+p*x+g*w,a[5]=d*m+p*E+g*A,a[8]=d*f+p*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*a*h+i*o*l+n*a*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,p=c*a-r*l,g=e*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*r)*v,t[3]=d*v,t[4]=(h*e-n*l)*v,t[5]=(n*a-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(r*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ut,Ml=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){const s={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(n,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Yt&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Yt&&(n.r=On(n.r),n.g=On(n.g),n.b=On(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ki?xa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,r){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Vn]:{primaries:t,whitePoint:i,transfer:xa,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:i,transfer:Yt,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),s}const Ht=fu();function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function On(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pn;class pu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{pn===void 0&&(pn=ys("canvas")),pn.width=t.width,pn.height=t.height;const n=pn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=pn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Ci(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mu=0;class Xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Ga(n[r].image)):a.push(Ga(n[r]))}else a=Ga(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let gu=0;const Ha=new P;class Re extends hn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,i=Ti,n=Ti,a=Ne,r=sn,o=ci,l=ze,c=Re.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ai(),this.name="",this.source=new Xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Pc;Re.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,n=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,b=(p+1)/2,w=(f+1)/2,A=(h+d)/4,C=(u+v)/4,L=(g+m)/4;return E>b&&E>w?E<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(E),n=A/i,a=C/i):b>w?b<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),i=A/n,a=L/n):w<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(w),i=C/a,n=L/a),this.set(i,n,a,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _u extends hn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const n={width:t,height:e,depth:i.depth},a=new Re(n);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Xo(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class We extends _u{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bc extends Re{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=be,this.minFilter=be,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vu extends Re{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=be,this.minFilter=be,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,si):si.fromBufferAttribute(a,r),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jn),Fs.subVectors(this.max,Jn),mn.subVectors(t.a,Jn),gn.subVectors(t.b,Jn),_n.subVectors(t.c,Jn),Di.subVectors(gn,mn),Li.subVectors(_n,gn),qi.subVectors(mn,_n);let e=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-qi.z,qi.y,Di.z,0,-Di.x,Li.z,0,-Li.x,qi.z,0,-qi.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-qi.y,qi.x,0];return!Wa(e,mn,gn,_n,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,mn,gn,_n,Fs))?!1:(Os.crossVectors(Di,Li),e=[Os.x,Os.y,Os.z],Wa(e,mn,gn,_n,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,Ns=new Wi,mn=new P,gn=new P,_n=new P,Di=new P,Li=new P,qi=new P,Jn=new P,Fs=new P,Os=new P,Yi=new P;function Wa(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){Yi.fromArray(s,a);const o=n.x*Math.abs(Yi.x)+n.y*Math.abs(Yi.y)+n.z*Math.abs(Yi.z),l=t.dot(Yi),c=e.dot(Yi),h=i.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xu=new Wi,Qn=new P,Xa=new P;class un{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):xu.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qn.subVectors(t,this.center);const e=Qn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Qn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qn.copy(t.center).add(Xa)),this.expandByPoint(Qn.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Mi=new P,$a=new P,Bs=new P,Ii=new P,ja=new P,zs=new P,qa=new P;class Ps{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){$a.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub($a);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Bs),o=Ii.dot(this.direction),l=-Ii.dot(Bs),c=Ii.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy($a).addScaledVector(Bs,d),p}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);const i=Mi.dot(this.direction),n=Mi.dot(Mi)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,i,n,a){ja.subVectors(e,t),zs.subVectors(i,t),qa.crossVectors(ja,zs);let r=this.direction.dot(qa),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ii.subVectors(this.origin,t);const l=o*this.direction.dot(zs.crossVectors(Ii,zs));if(l<0)return null;const c=o*this.direction.dot(ja.cross(Ii));if(c<0||l+c>r)return null;const h=-o*Ii.dot(qa);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,n,a,r,o,l,c,h,u,d,p,g,v,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c,h,u,d,p,g,v,m)}set(t,e,i,n,a,r,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/vn.setFromMatrixColumn(t,0).length(),a=1/vn.setFromMatrixColumn(t,1).length(),r=1/vn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,p=r*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-r*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=v-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yu,t,Mu)}lookAt(t,e,i){const n=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Ui.crossVectors(i,je),Ui.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Ui.crossVectors(i,je)),Ui.normalize(),ks.crossVectors(je,Ui),n[0]=Ui.x,n[4]=ks.x,n[8]=je.x,n[1]=Ui.y,n[5]=ks.y,n[9]=je.y,n[2]=Ui.z,n[6]=ks.z,n[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],x=i[3],E=i[7],b=i[11],w=i[15],A=n[0],C=n[4],L=n[8],y=n[12],S=n[1],R=n[5],F=n[9],B=n[13],X=n[2],H=n[6],G=n[10],z=n[14],K=n[3],ut=n[7],rt=n[11],dt=n[15];return a[0]=r*A+o*S+l*X+c*K,a[4]=r*C+o*R+l*H+c*ut,a[8]=r*L+o*F+l*G+c*rt,a[12]=r*y+o*B+l*z+c*dt,a[1]=h*A+u*S+d*X+p*K,a[5]=h*C+u*R+d*H+p*ut,a[9]=h*L+u*F+d*G+p*rt,a[13]=h*y+u*B+d*z+p*dt,a[2]=g*A+v*S+m*X+f*K,a[6]=g*C+v*R+m*H+f*ut,a[10]=g*L+v*F+m*G+f*rt,a[14]=g*y+v*B+m*z+f*dt,a[3]=x*A+E*S+b*X+w*K,a[7]=x*C+E*R+b*H+w*ut,a[11]=x*L+E*F+b*G+w*rt,a[15]=x*y+E*B+b*z+w*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15],x=l*p-c*d,E=o*p-c*u,b=o*d-l*u,w=r*p-c*h,A=r*d-l*h,C=r*u-o*h;return e*(v*x-m*E+f*b)-i*(g*x-m*w+f*A)+n*(g*E-v*w+f*C)-a*(g*b-v*A+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+r*m*p+h*l*f-r*d*f,b=h*v*c-g*u*c+g*o*p-r*v*p-h*o*f+r*u*f,w=g*u*l-h*v*l-g*o*d+r*v*d+h*o*m-r*u*m,A=e*x+i*E+n*b+a*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=x*C,t[1]=(v*d*a-u*m*a-v*n*p+i*m*p+u*n*f-i*d*f)*C,t[2]=(o*m*a-v*l*a+v*n*c-i*m*c-o*n*f+i*l*f)*C,t[3]=(u*l*a-o*d*a-u*n*c+i*d*c+o*n*p-i*l*p)*C,t[4]=E*C,t[5]=(h*m*a-g*d*a+g*n*p-e*m*p-h*n*f+e*d*f)*C,t[6]=(g*l*a-r*m*a-g*n*c+e*m*c+r*n*f-e*l*f)*C,t[7]=(r*d*a-h*l*a+h*n*c-e*d*c-r*n*p+e*l*p)*C,t[8]=b*C,t[9]=(g*u*a-h*v*a-g*i*p+e*v*p+h*i*f-e*u*f)*C,t[10]=(r*v*a-g*o*a+g*i*c-e*v*c-r*i*f+e*o*f)*C,t[11]=(h*o*a-r*u*a-h*i*c+e*u*c+r*i*p-e*o*p)*C,t[12]=w*C,t[13]=(h*v*n-g*u*n+g*i*d-e*v*d-h*i*m+e*u*m)*C,t[14]=(g*o*n-r*v*n-g*i*l+e*v*l+r*i*m-e*o*m)*C,t[15]=(r*u*n-h*o*n+h*i*l-e*u*l-r*i*d+e*o*d)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,p=a*h,g=a*u,v=r*h,m=r*u,f=o*u,x=l*c,E=l*h,b=l*u,w=i.x,A=i.y,C=i.z;return n[0]=(1-(v+f))*w,n[1]=(p+b)*w,n[2]=(g-E)*w,n[3]=0,n[4]=(p-b)*A,n[5]=(1-(d+f))*A,n[6]=(m+x)*A,n[7]=0,n[8]=(g+E)*C,n[9]=(m-x)*C,n[10]=(1-(d+v))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let a=vn.set(n[0],n[1],n[2]).length();const r=vn.set(n[4],n[5],n[6]).length(),o=vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),ai.copy(this);const c=1/a,h=1/r,u=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,e.setFromRotationMatrix(ai),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=fi,l=!1){const c=this.elements,h=2*a/(e-t),u=2*a/(i-n),d=(e+t)/(e-t),p=(i+n)/(i-n);let g,v;if(l)g=a/(r-a),v=r*a/(r-a);else if(o===fi)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===ya)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=fi,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),p=-(i+n)/(i-n);let g,v;if(l)g=1/(r-a),v=r/(r-a);else if(o===fi)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===ya)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const vn=new P,ai=new Kt,yu=new P(0,0,0),Mu=new P(1,1,1),Ui=new P,ks=new P,je=new P,bl=new Kt,El=new ln;class vi{constructor(t=0,e=0,i=0,n=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Su=0;const wl=new P,xn=new ln,Si=new Kt,Vs=new P,ts=new P,bu=new P,Eu=new ln,Tl=new P(1,0,0),Al=new P(0,1,0),Cl=new P(0,0,1),Pl={type:"added"},wu={type:"removed"},yn={type:"childadded",child:null},Ya={type:"childremoved",child:null};class De extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new P,e=new vi,i=new ln,n=new P(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xn.setFromAxisAngle(t,e),this.quaternion.multiply(xn),this}rotateOnWorldAxis(t,e){return xn.setFromAxisAngle(t,e),this.quaternion.premultiply(xn),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(Al,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(Al,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vs.copy(t):Vs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ts,Vs,this.up):Si.lookAt(Vs,ts,this.up),this.quaternion.setFromRotationMatrix(Si),n&&(Si.extractRotation(n.matrixWorld),xn.setFromRotationMatrix(Si),this.quaternion.premultiply(xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),yn.child=t,this.dispatchEvent(yn),yn.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wu),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),yn.child=t,this.dispatchEvent(yn),yn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}De.DEFAULT_UP=new P(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new P,bi=new P,Ka=new P,Ei=new P,Mn=new P,Sn=new P,Rl=new P,Za=new P,Ja=new P,Qa=new P,tr=new pe,er=new pe,ir=new pe;class ni{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ri.subVectors(t,e),n.cross(ri);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){ri.subVectors(n,e),bi.subVectors(i,e),Ka.subVectors(t,e);const r=ri.dot(ri),o=ri.dot(bi),l=ri.dot(Ka),c=bi.dot(bi),h=bi.dot(Ka),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,n,a,r,o,l){return this.getBarycoord(t,e,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ei.x),l.addScaledVector(r,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,e,i,n,a,r){return tr.setScalar(0),er.setScalar(0),ir.setScalar(0),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,i),ir.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(tr,a.x),r.addScaledVector(er,a.y),r.addScaledVector(ir,a.z),r}static isFrontFacing(t,e,i,n){return ri.subVectors(i,e),bi.subVectors(t,e),ri.cross(bi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ri.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return ni.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;Mn.subVectors(n,i),Sn.subVectors(a,i),Za.subVectors(t,i);const l=Mn.dot(Za),c=Sn.dot(Za);if(l<=0&&c<=0)return e.copy(i);Ja.subVectors(t,n);const h=Mn.dot(Ja),u=Sn.dot(Ja);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(Mn,r);Qa.subVectors(t,a);const p=Mn.dot(Qa),g=Sn.dot(Qa);if(g>=0&&p<=g)return e.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Sn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Rl.subVectors(a,n),o=(u-h)/(u-h+(p-g)),e.copy(n).addScaledVector(Rl,o);const f=1/(m+v+d);return r=v*f,o=d*f,e.copy(i).addScaledVector(Mn,r).addScaledVector(Sn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ht.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Ht.workingColorSpace){if(t=Wo(t,1),e=Ft(e,0,1),i=Ft(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=nr(r,a,t+1/3),this.g=nr(r,a,t),this.b=nr(r,a,t-1/3)}return Ht.colorSpaceToWorking(this,n),this}setStyle(t,e=Ye){function i(a){a!==void 0&&parseFloat(a)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=zc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Ht.workingToColorSpace(Ue.copy(this),t),Math.round(Ft(Ue.r*255,0,255))*65536+Math.round(Ft(Ue.g*255,0,255))*256+Math.round(Ft(Ue.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,n=Ue.g,a=Ue.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-i)/u+2;break;case a:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ye){Ht.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,n=Ue.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Gs);const i=ms(Ni.h,Gs.h,e),n=ms(Ni.s,Gs.s,e),a=ms(Ni.l,Gs.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new vt;vt.NAMES=zc;let Tu=0;class Xi extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Fn,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Tr,this.blendEquation=tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fn,this.stencilZFail=fn,this.stencilZPass=fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wr&&(i.blendSrc=this.blendSrc),this.blendDst!==Tr&&(i.blendDst=this.blendDst),this.blendEquation!==tn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pi extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new P,Hs=new lt;let Au=0;class re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_o,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array),a=ee(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),t}}class kc extends re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Vc extends re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class oe extends re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Cu=0;const ii=new Kt,sr=new De,bn=new P,qe=new Wi,es=new Wi,Ce=new P;class Zt extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oc(t)?Vc:kc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ut().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new oe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];qe.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(qe.min,es.min),qe.expandByPoint(Ce),Ce.addVectors(qe.max,es.max),qe.expandByPoint(Ce)):(qe.expandByPoint(es.min),qe.expandByPoint(es.max))}qe.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)Ce.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(Ce));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(bn.fromBufferAttribute(t,c),Ce.add(bn)),n=Math.max(n,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new re(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new P,l[L]=new P;const c=new P,h=new P,u=new P,d=new lt,p=new lt,g=new lt,v=new P,m=new P;function f(L,y,S){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),d.fromBufferAttribute(a,L),p.fromBufferAttribute(a,y),g.fromBufferAttribute(a,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(v),o[y].add(v),o[S].add(v),l[L].add(m),l[y].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,y=x.length;L<y;++L){const S=x[L],R=S.start,F=S.count;for(let B=R,X=R+F;B<X;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new P,b=new P,w=new P,A=new P;function C(L){w.fromBufferAttribute(n,L),A.copy(w);const y=o[L];E.copy(y),E.sub(w.multiplyScalar(w.dot(y))).normalize(),b.crossVectors(A,y);const R=b.dot(l[L])<0?-1:1;r.setXYZW(L,E.x,E.y,E.z,R)}for(let L=0,y=x.length;L<y;++L){const S=x[L],R=S.start,F=S.count;for(let B=R,X=R+F;B<X;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(n,a),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(n,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new re(d,h,u)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new Kt,Ki=new Ps,Ws=new un,Ll=new P,Xs=new P,$s=new P,js=new P,ar=new P,qs=new P,Il=new P,Ys=new P;class jt extends De{constructor(t=new Zt,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){qs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(ar.fromBufferAttribute(u,t),r?qs.addScaledVector(ar,h):qs.addScaledVector(ar.sub(e),h))}e.add(qs)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(a),Ki.copy(t.ray).recast(t.near),!(Ws.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Ws,Ll)===null||Ki.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Dl.copy(a).invert(),Ki.copy(t.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,w=E;b<w;b+=3){const A=o.getX(b),C=o.getX(b+1),L=o.getX(b+2);n=Ks(this,f,t,i,c,h,u,A,C,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);n=Ks(this,r,t,i,c,h,u,x,E,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,w=E;b<w;b+=3){const A=b,C=b+1,L=b+2;n=Ks(this,f,t,i,c,h,u,A,C,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,E=m+1,b=m+2;n=Ks(this,r,t,i,c,h,u,x,E,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Pu(s,t,e,i,n,a,r,o){let l;if(t.side===Ee?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,t.side===Hi,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:s}}function Ks(s,t,e,i,n,a,r,o,l,c){s.getVertexPosition(o,Xs),s.getVertexPosition(l,$s),s.getVertexPosition(c,js);const h=Pu(s,t,e,i,Xs,$s,js,Il);if(h){const u=new P;ni.getBarycoord(Il,Xs,$s,js,u),n&&(h.uv=ni.getInterpolatedAttribute(n,o,l,c,u,new lt)),a&&(h.uv1=ni.getInterpolatedAttribute(a,o,l,c,u,new lt)),r&&(h.normal=ni.getInterpolatedAttribute(r,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};ni.getNormal(Xs,$s,js,d.normal),h.face=d,h.barycoord=u}return h}class Rs extends Zt{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(v,m,f,x,E,b,w,A,C,L,y){const S=b/C,R=w/L,F=b/2,B=w/2,X=A/2,H=C+1,G=L+1;let z=0,K=0;const ut=new P;for(let rt=0;rt<G;rt++){const dt=rt*R-B;for(let kt=0;kt<H;kt++){const Ot=kt*S-F;ut[v]=Ot*x,ut[m]=dt*E,ut[f]=X,c.push(ut.x,ut.y,ut.z),ut[v]=0,ut[m]=0,ut[f]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(kt/C),u.push(1-rt/L),z+=1}}for(let rt=0;rt<L;rt++)for(let dt=0;dt<C;dt++){const kt=d+dt+H*rt,Ot=d+dt+H*(rt+1),fe=d+(dt+1)+H*(rt+1),de=d+(dt+1)+H*rt;l.push(kt,Ot,de),l.push(Ot,fe,de),K+=6}o.addGroup(p,K,y),p+=K,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Be(s){const t={};for(let e=0;e<s.length;e++){const i=Gn(s[e]);for(const n in i)t[n]=i[n]}return t}function Ru(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}const bs={clone:Gn,merge:Be};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ue extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gn(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hc extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new P,Ul=new lt,Nl=new lt;class Ke extends Hc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ul,Nl),e.subVectors(Nl,Ul)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const En=-90,wn=1;class Iu extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ke(En,wn,t,e);n.layers=this.layers,this.add(n);const a=new Ke(En,wn,t,e);a.layers=this.layers,this.add(a);const r=new Ke(En,wn,t,e);r.layers=this.layers,this.add(r);const o=new Ke(En,wn,t,e);o.layers=this.layers,this.add(o);const l=new Ke(En,wn,t,e);l.layers=this.layers,this.add(l);const c=new Ke(En,wn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wc extends Re{constructor(t=[],e=on,i,n,a,r,o,l,c,h){super(t,e,i,n,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xc extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Wc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Rs(5,5,5),a=new ue({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ee,blending:pi});a.uniforms.tEquirect.value=e;const r=new jt(n,a),o=e.minFilter;return e.minFilter===sn&&(e.minFilter=Ne),new Iu(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}class ke extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uu={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Nu extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $c{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_o,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,a=this.stride;n<a;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new P;class Hn{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array),a=ee(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return new re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wn extends Xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Tn;const is=new P,An=new P,Cn=new P,Pn=new lt,ns=new lt,jc=new Kt,Zs=new P,ss=new P,Js=new P,Fl=new lt,or=new lt,Ol=new lt;class Es extends De{constructor(t=new Wn){if(super(),this.isSprite=!0,this.type="Sprite",Tn===void 0){Tn=new Zt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $c(e,5);Tn.setIndex([0,1,2,0,2,3]),Tn.setAttribute("position",new Hn(i,3,0,!1)),Tn.setAttribute("uv",new Hn(i,2,3,!1))}this.geometry=Tn,this.material=t,this.center=new lt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),An.setFromMatrixScale(this.matrixWorld),jc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&An.multiplyScalar(-Cn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const r=this.center;Qs(Zs.set(-.5,-.5,0),Cn,r,An,n,a),Qs(ss.set(.5,-.5,0),Cn,r,An,n,a),Qs(Js.set(.5,.5,0),Cn,r,An,n,a),Fl.set(0,0),or.set(1,0),Ol.set(1,1);let o=t.ray.intersectTriangle(Zs,ss,Js,!1,is);if(o===null&&(Qs(ss.set(-.5,.5,0),Cn,r,An,n,a),or.set(0,1),o=t.ray.intersectTriangle(Zs,Js,ss,!1,is),o===null))return;const l=t.ray.origin.distanceTo(is);l<t.near||l>t.far||e.push({distance:l,point:is.clone(),uv:ni.getInterpolation(is,Zs,ss,Js,Fl,or,Ol,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qs(s,t,e,i,n,a){Pn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ns.x=a*Pn.x-n*Pn.y,ns.y=n*Pn.x+a*Pn.y):ns.copy(Pn),s.copy(t),s.x+=ns.x,s.y+=ns.y,s.applyMatrix4(jc)}class qc extends Re{constructor(t=null,e=1,i=1,n,a,r,o,l,c=be,h=be,u,d){super(null,r,o,l,c,h,n,a,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo extends re{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rn=new Kt,Bl=new Kt,ta=[],zl=new Wi,Fu=new Kt,as=new jt,rs=new un;class Ou extends jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Fu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Rn),zl.copy(t.boundingBox).applyMatrix4(Rn),this.boundingBox.union(zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Rn),rs.copy(t.boundingSphere).applyMatrix4(Rn),this.boundingSphere.union(rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(i),t.ray.intersectsSphere(rs)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Rn),Bl.multiplyMatrices(i,Rn),as.matrixWorld=Bl,as.raycast(t,ta);for(let r=0,o=ta.length;r<o;r++){const l=ta[r];l.instanceId=a,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(n*this.count),n,this.count,Bo,li));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lr=new P,Bu=new P,zu=new Ut;class Oi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=lr.subVectors(i,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(lr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zu.getNormalMatrix(t),n=this.coplanarPoint(lr).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new un,ku=new lt(.5,.5),ea=new P;class jo{constructor(t=new Oi,e=new Oi,i=new Oi,n=new Oi,a=new Oi,r=new Oi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi,i=!1){const n=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],d=a[6],p=a[7],g=a[8],v=a[9],m=a[10],f=a[11],x=a[12],E=a[13],b=a[14],w=a[15];if(n[0].setComponents(c-r,p-h,f-g,w-x).normalize(),n[1].setComponents(c+r,p+h,f+g,w+x).normalize(),n[2].setComponents(c+o,p+u,f+v,w+E).normalize(),n[3].setComponents(c-o,p-u,f-v,w-E).normalize(),i)n[4].setComponents(l,d,m,b).normalize(),n[5].setComponents(c-l,p-d,f-m,w-b).normalize();else if(n[4].setComponents(c-l,p-d,f-m,w-b).normalize(),e===fi)n[5].setComponents(c+l,p+d,f+m,w+b).normalize();else if(e===ya)n[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);const e=ku.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ea.x=n.normal.x>0?t.max.x:t.min.x,ea.y=n.normal.y>0?t.max.y:t.min.y,ea.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cn extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sa=new P,ba=new P,kl=new Kt,os=new Ps,ia=new un,cr=new P,Vl=new P;class Xn extends De{constructor(t=new Zt,e=new cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)Sa.fromBufferAttribute(e,n-1),ba.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Sa.distanceTo(ba);t.setAttribute("lineDistance",new oe(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(n),ia.radius+=a,t.ray.intersectsSphere(ia)===!1)return;kl.copy(n).invert(),os.copy(t.ray).applyMatrix4(kl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),x=h.getX(v+1),E=na(this,t,os,l,f,x,v);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=na(this,t,os,l,v,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=na(this,t,os,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=na(this,t,os,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function na(s,t,e,i,n,a,r){const o=s.geometry.attributes.position;if(Sa.fromBufferAttribute(o,n),ba.fromBufferAttribute(o,a),e.distanceSqToSegment(Sa,ba,cr,Vl)>i)return;cr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(cr);if(!(c<t.near||c>t.far))return{distance:c,point:Vl.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}class $n extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gl=new Kt,xo=new Ps,sa=new un,aa=new P;class ws extends De{constructor(t=new Zt,e=new $n){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(n),sa.radius+=a,t.ray.intersectsSphere(sa)===!1)return;Gl.copy(n).invert(),xo.copy(t.ray).applyMatrix4(Gl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);aa.fromBufferAttribute(u,m),Hl(aa,m,l,n,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,v=p;g<v;g++)aa.fromBufferAttribute(u,g),Hl(aa,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Hl(s,t,e,i,n,a,r){const o=xo.distanceSqToPoint(s);if(o<e){const l=new P;xo.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Wl extends Re{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=be,this.minFilter=be,this.generateMipmaps=!1,this.needsUpdate=!0}}class ti extends Re{constructor(t,e,i,n,a,r,o,l,c){super(t,e,i,n,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends Re{constructor(t,e,i=_i,n,a,r,o=be,l=be,c,h=Ri,u=1){if(h!==Ri&&h!==an)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vu extends Ts{constructor(t,e=_i,i=on,n,a,r=be,o=be,l,c=Ri){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yc extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qo extends Zt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new P,h=new lt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yo extends Zt{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=i/2;let f=0;x(),r===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(p,2));function x(){const b=new P,w=new P;let A=0;const C=(e-t)/i;for(let L=0;L<=a;L++){const y=[],S=L/a,R=S*(e-t)+t;for(let F=0;F<=n;F++){const B=F/n,X=B*l+o,H=Math.sin(X),G=Math.cos(X);w.x=R*H,w.y=-S*i+m,w.z=R*G,u.push(w.x,w.y,w.z),b.set(H,C,G).normalize(),d.push(b.x,b.y,b.z),p.push(B,1-S),y.push(g++)}v.push(y)}for(let L=0;L<n;L++)for(let y=0;y<a;y++){const S=v[y][L],R=v[y+1][L],F=v[y+1][L+1],B=v[y][L+1];(t>0||y!==0)&&(h.push(S,R,B),A+=3),(e>0||y!==a-1)&&(h.push(R,F,B),A+=3)}c.addGroup(f,A,0),f+=A}function E(b){const w=g,A=new lt,C=new P;let L=0;const y=b===!0?t:e,S=b===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const R=g;for(let F=0;F<=n;F++){const X=F/n*l+o,H=Math.cos(X),G=Math.sin(X);C.x=y*G,C.y=m*S,C.z=y*H,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=H*.5+.5,A.y=G*.5*S+.5,p.push(A.x,A.y),g++}for(let F=0;F<n;F++){const B=w+F,X=R+F;b===!0?h.push(X,X+1,B):h.push(X+1,X,B),L+=3}c.addGroup(f,L,b===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends Yo{constructor(t=1,e=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ds extends Zt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),c(i),h(),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(a.slice(),3)),this.setAttribute("uv",new oe(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new P,b=new P,w=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],E),p(e[A+1],b),p(e[A+2],w),l(E,b,w,x)}function l(x,E,b,w){const A=w+1,C=[];for(let L=0;L<=A;L++){C[L]=[];const y=x.clone().lerp(b,L/A),S=E.clone().lerp(b,L/A),R=A-L;for(let F=0;F<=R;F++)F===0&&L===A?C[L][F]=y:C[L][F]=y.clone().lerp(S,F/R)}for(let L=0;L<A;L++)for(let y=0;y<2*(A-L)-1;y++){const S=Math.floor(y/2);y%2===0?(d(C[L][S+1]),d(C[L+1][S]),d(C[L][S])):(d(C[L][S+1]),d(C[L+1][S+1]),d(C[L+1][S]))}}function c(x){const E=new P;for(let b=0;b<a.length;b+=3)E.x=a[b+0],E.y=a[b+1],E.z=a[b+2],E.normalize().multiplyScalar(x),a[b+0]=E.x,a[b+1]=E.y,a[b+2]=E.z}function h(){const x=new P;for(let E=0;E<a.length;E+=3){x.x=a[E+0],x.y=a[E+1],x.z=a[E+2];const b=m(x)/2/Math.PI+.5,w=f(x)/Math.PI+.5;r.push(b,1-w)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const E=r[x+0],b=r[x+2],w=r[x+4],A=Math.max(E,b,w),C=Math.min(E,b,w);A>.9&&C<.1&&(E<.2&&(r[x+0]+=1),b<.2&&(r[x+2]+=1),w<.2&&(r[x+4]+=1))}}function d(x){a.push(x.x,x.y,x.z)}function p(x,E){const b=x*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function g(){const x=new P,E=new P,b=new P,w=new P,A=new lt,C=new lt,L=new lt;for(let y=0,S=0;y<a.length;y+=9,S+=6){x.set(a[y+0],a[y+1],a[y+2]),E.set(a[y+3],a[y+4],a[y+5]),b.set(a[y+6],a[y+7],a[y+8]),A.set(r[S+0],r[S+1]),C.set(r[S+2],r[S+3]),L.set(r[S+4],r[S+5]),w.copy(x).add(E).add(b).divideScalar(3);const R=m(w);v(A,S+0,x,R),v(C,S+2,E,R),v(L,S+4,b,R)}}function v(x,E,b,w){w<0&&x.x===1&&(r[E]=x.x-1),b.x===0&&b.z===0&&(r[E]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.vertices,t.indices,t.radius,t.detail)}}class Gu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(n),e.push(a),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(a-1);const h=i[n],d=i[n+1]-h,p=(r-h)/d;return(n+p)/(a-1)}getTangent(t,e){let n=t-1e-4,a=t+1e-4;n<0&&(n=0),a>1&&(a=1);const r=this.getPoint(n),o=this.getPoint(a),l=e||(r.isVector2?new lt:new P);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,n=[],a=[],r=[],o=new P,l=new Kt;for(let p=0;p<=t;p++){const g=p/t;n[p]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),r[0].crossVectors(n[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ft(n[p-1].dot(n[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(n[p],a[p])}if(e===!0){let p=Math.acos(Ft(a[0].dot(a[t]),-1,1));p/=t,n[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),r[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Zo(){let s=0,t=0,e=0,i=0;function n(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){n(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,p*=h,n(r,o,d,p)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+i*o}}}const ra=new P,hr=new Zo,ur=new Zo,dr=new Zo;class Hu extends Gu{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,a=n.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%a]:(ra.subVectors(n[0],n[1]).add(n[0]),c=ra);const u=n[o%a],d=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(ra.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),hr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),ur.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),dr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(hr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ur.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),dr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(hr.calc(l),ur.calc(l),dr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class La extends Ds{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class Jo extends Ds{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class Ia extends Zt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*d-r;for(let E=0;E<c;E++){const b=E*u-a;g.push(b,-x,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const E=x+c*f,b=x+c*(f+1),w=x+1+c*(f+1),A=x+1+c*f;p.push(E,b,A),p.push(b,w,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ea extends Zt{constructor(t=.5,e=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/n,p=new P,g=new lt;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const f=a+m/i*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<n;v++){const m=v*(i+1);for(let f=0;f<i;f++){const x=f+m,E=x,b=x+i+1,w=x+i+2,A=x+1;o.push(E,b,A),o.push(b,w,A)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ze extends Zt{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const x=[],E=f/i;let b=0;f===0&&r===0?b=.5/e:f===i&&l===Math.PI&&(b=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(n+A*a)*Math.sin(r+E*o),u.y=t*Math.cos(r+E*o),u.z=t*Math.sin(n+A*a)*Math.sin(r+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+b,1-E),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<e;x++){const E=h[f][x+1],b=h[f][x],w=h[f+1][x],A=h[f+1][x+1];(f!==0||r>0)&&p.push(E,b,A),(f!==i-1||l<Math.PI)&&p.push(b,w,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qo extends Ds{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}class gs extends ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bi extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wu extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xu extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $u{constructor(t,e,i){const n=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ju=new $u;class tl{constructor(t){this.manager=t!==void 0?t:ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,a){i.load(t,n,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}tl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn=new WeakMap;class qu extends tl{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=fr.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0);else{let u=Dn.get(r);u===void 0&&(u=[],Dn.set(r,u)),u.push({onLoad:e,onError:n})}return r}const o=ys("img");function l(){h(),e&&e(this);const u=Dn.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Dn.delete(this),a.manager.itemEnd(t)}function c(u){h(),n&&n(u),fr.remove(`image:${t}`);const d=Dn.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}Dn.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fr.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}}class Yu extends tl{constructor(t){super(t)}load(t,e,i,n){const a=new Re,r=new qu(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},i,n),a}}class Kc extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const pr=new Kt,Xl=new P,$l=new P;class Ku{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=ze,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zu extends Ku{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}}class Ju extends Kc{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Zu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class el extends Hc{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qu extends Kc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class td extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const jl=new Kt;class ed{constructor(t,e,i=0,n=1/0){this.ray=new Ps(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,i=[]){return yo(t,this,i,e),i.sort(ql),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)yo(t[n],this,i,e);return i.sort(ql),i}}function ql(s,t){return s.distance-t.distance}function yo(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)yo(a[r],t,e,!0)}}class Yl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ft(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kl=new lt;class id{constructor(t=new lt(1/0,1/0),e=new lt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}let nd=class extends hn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Zl(s,t,e,i){const n=sd(i);switch(e){case Uc:return s*t;case Bo:return s*t/n.components*n.byteLength;case zo:return s*t/n.components*n.byteLength;case kn:return s*t*2/n.components*n.byteLength;case ko:return s*t*2/n.components*n.byteLength;case Nc:return s*t*3/n.components*n.byteLength;case ci:return s*t*4/n.components*n.byteLength;case Vo:return s*t*4/n.components*n.byteLength;case da:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zr:case Vr:return Math.max(s,16)*Math.max(t,8)/4;case Br:case kr:return Math.max(s,8)*Math.max(t,8)/2;case Gr:case Hr:case Xr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wr:case jr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case io:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ao:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ro:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case co:case ho:case uo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fo:case po:return Math.ceil(s/4)*Math.ceil(t/4)*8;case mo:case go:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sd(s){switch(s){case ze:case Rc:return{byteLength:1,components:1};case vs:case Dc:case Qe:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case _i:case No:case li:return{byteLength:4,components:1};case Lc:case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jc(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ad(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:r}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,af=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:rd,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:yd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Ed,color_fragment:wd,color_pars_fragment:Td,color_pars_vertex:Ad,color_vertex:Cd,common:Pd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Id,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:kd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:Jd,envmap_vertex:Gd,fog_vertex:Hd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:$d,gradientmap_pars_fragment:jd,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:Kd,lights_pars_begin:Zd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:af,lights_fragment_begin:rf,lights_fragment_maps:of,lights_fragment_end:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:vf,morphinstance_vertex:xf,morphcolor_vertex:yf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:bf,normal_fragment_begin:Ef,normal_fragment_maps:wf,normal_pars_fragment:Tf,normal_pars_vertex:Af,normal_vertex:Cf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:If,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:$f,skinning_pars_vertex:jf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:Kf,specularmap_pars_fragment:Zf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:ip,uv_pars_vertex:np,uv_vertex:sp,worldpos_vertex:ap,background_vert:rp,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distance_vert:pp,distance_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:yp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:Ep,meshmatcap_frag:wp,meshnormal_vert:Tp,meshnormal_frag:Ap,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Rp,meshphysical_frag:Dp,meshtoon_vert:Lp,meshtoon_frag:Ip,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:zp},ot={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},di={basic:{uniforms:Be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new vt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Be([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Be([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new vt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Be([ot.points,ot.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Be([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Be([ot.common,ot.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Be([ot.sprite,ot.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Be([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Be([ot.lights,ot.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};di.physical={uniforms:Be([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const oa={r:0,b:0,g:0},Ji=new vi,kp=new Kt;function Vp(s,t,e,i,n,a,r){const o=new vt(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function v(E){let b=!1;const w=g(E);w===null?f(o,l):w&&w.isColor&&(f(w,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,b){const w=g(b);w&&(w.isCubeTexture||w.mapping===Da)?(h===void 0&&(h=new jt(new Rs(1,1,1),new ue({name:"BackgroundCubeMaterial",uniforms:Gn(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ji.copy(b.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Ji)),h.material.toneMapped=Ht.getTransfer(w.colorSpace)!==Yt,(u!==w||d!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new jt(new Ia(2,2),new ue({name:"BackgroundMaterial",uniforms:Gn(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,b){E.getRGB(oa,Gc(s)),i.buffers.color.setClear(oa.r,oa.g,oa.b,b,r)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:x}}function Gp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let a=n,r=!1;function o(S,R,F,B,X){let H=!1;const G=u(B,F,R);a!==G&&(a=G,c(a.object)),H=p(S,B,F,X),H&&g(S,B,F,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,b(S,R,F,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,R,F){const B=F.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let H=X[R.id];H===void 0&&(H={},X[R.id]=H);let G=H[B];return G===void 0&&(G=d(l()),H[B]=G),G}function d(S){const R=[],F=[],B=[];for(let X=0;X<e;X++)R[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,R,F,B){const X=a.attributes,H=R.attributes;let G=0;const z=F.getAttributes();for(const K in z)if(z[K].location>=0){const rt=X[K];let dt=H[K];if(dt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;G++}return a.attributesNum!==G||a.index!==B}function g(S,R,F,B){const X={},H=R.attributes;let G=0;const z=F.getAttributes();for(const K in z)if(z[K].location>=0){let rt=H[K];rt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),X[K]=dt,G++}a.attributes=X,a.attributesNum=G,a.index=B}function v(){const S=a.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const F=a.newAttributes,B=a.enabledAttributes,X=a.attributeDivisors;F[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),X[S]!==R&&(s.vertexAttribDivisor(S,R),X[S]=R)}function x(){const S=a.newAttributes,R=a.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==S[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function E(S,R,F,B,X,H,G){G===!0?s.vertexAttribIPointer(S,R,F,X,H):s.vertexAttribPointer(S,R,F,B,X,H)}function b(S,R,F,B){v();const X=B.attributes,H=F.getAttributes(),G=R.defaultAttributeValues;for(const z in H){const K=H[z];if(K.location>=0){let ut=X[z];if(ut===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){const rt=ut.normalized,dt=ut.itemSize,kt=t.get(ut);if(kt===void 0)continue;const Ot=kt.buffer,fe=kt.type,de=kt.bytesPerElement,j=fe===s.INT||fe===s.UNSIGNED_INT||ut.gpuType===No;if(ut.isInterleavedBufferAttribute){const Z=ut.data,mt=Z.stride,It=ut.offset;if(Z.isInstancedInterleavedBuffer){for(let xt=0;xt<K.locationSize;xt++)f(K.location+xt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xt=0;xt<K.locationSize;xt++)m(K.location+xt);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let xt=0;xt<K.locationSize;xt++)E(K.location+xt,dt/K.locationSize,fe,rt,mt*de,(It+dt/K.locationSize*xt)*de,j)}else{if(ut.isInstancedBufferAttribute){for(let Z=0;Z<K.locationSize;Z++)f(K.location+Z,ut.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Z=0;Z<K.locationSize;Z++)m(K.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let Z=0;Z<K.locationSize;Z++)E(K.location+Z,dt/K.locationSize,fe,rt,dt*de,dt/K.locationSize*Z*de,j)}}else if(G!==void 0){const rt=G[z];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(K.location,rt);break;case 3:s.vertexAttrib3fv(K.location,rt);break;case 4:s.vertexAttrib4fv(K.location,rt);break;default:s.vertexAttrib1fv(K.location,rt)}}}}x()}function w(){L();for(const S in i){const R=i[S];for(const F in R){const B=R[F];for(const X in B)h(B[X].object),delete B[X];delete R[F]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const F in R){const B=R[F];for(const X in B)h(B[X].object),delete B[X];delete R[F]}delete i[S.id]}function C(S){for(const R in i){const F=i[R];if(F[S.id]===void 0)continue;const B=F[S.id];for(const X in B)h(B[X].object),delete B[X];delete F[S.id]}}function L(){y(),r=!0,a!==n&&(a=n,c(a.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Hp(s,t,e){let i;function n(c){i=c}function a(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wp(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){return!(C!==ci&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ze&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!L)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,maxSamples:w,samples:A}}function Xp(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new Oi,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||a&&!m)a?h(null):c();else{const x=a?0:i,E=x*4;let b=f.clippingState||null;l.value=b,b=h(g,d,E,p);for(let w=0;w!==E;++w)b[w]=e[w];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=p;E!==v;++E,b+=4)r.copy(u[E]).applyMatrix4(x,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $p(s){let t=new WeakMap;function e(r,o){return o===Ur?r.mapping=on:o===Nr&&(r.mapping=zn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ur||o===Nr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const Vi=4,Jl=[.125,.215,.35,.446,.526,.582],en=20,jp=256,ls=new el,Ql=new vt;let mr=null,gr=0,_r=0,vr=!1;const qp=new P;class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,a={}){const{size:r=256,position:o=qp}=a;mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mr,gr,_r),this._renderer.xr.enabled=vr,t.scissorTest=!1,Ln(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===on||t.mapping===zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Qe,format:ci,colorSpace:Vn,depthBuffer:!1},n=ec(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yp(a)),this._blurMaterial=Zp(a,t,e),this._ggxMaterial=Kp(a,t,e)}return n}_compileMaterial(t){const e=new jt(new Zt,t);this._renderer.compile(e,ls)}_sceneToCubeUV(t,e,i,n,a){const l=new Ke(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ql),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Rs,new Pi({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,f=!0):(m.color.copy(Ql),f=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[E],a.y,a.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[E],a.z)):(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[E]));const w=this._cubeSize;Ln(n,b*w,E>2?w:0,w,w),u.setRenderTarget(n),f&&u.render(v,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===on||t.mapping===zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const a=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Ln(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,ls)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Vi?i-g+Vi:0),f=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Ln(a,m,f,3*v,2*v),n.setRenderTarget(a),n.render(o,ls),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,Ln(t,m,f,3*v,2*v),n.setRenderTarget(t),n.render(o,ls)}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*en-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):en;m>en&&Pt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${en}`);const f=[];let x=0;for(let C=0;C<en;++C){const L=C/v,y=Math.exp(-L*L/2);f.push(y),C===0?x+=y:C<m&&(x+=2*y)}for(let C=0;C<f.length;C++)f[C]=f[C]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const b=this._sizeLods[n],w=3*b*(n>E-Vi?n-E+Vi:0),A=4*(this._cubeSize-b);Ln(e,w,A,3*b,2*b),l.setRenderTarget(e),l.render(u,ls)}}function Yp(s){const t=[],e=[],i=[];let n=s;const a=s-Vi+1+Jl.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);t.push(o);let l=1/o;r>s-Vi?l=Jl[r-s+Vi-1]:r===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),E=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,L=A>2?0:-1,y=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];x.set(y,v*g*A),E.set(d,m*g*A);const S=[A,A,A,A,A,A];b.set(S,f*g*A)}const w=new Zt;w.setAttribute("position",new re(x,v)),w.setAttribute("uv",new re(E,m)),w.setAttribute("faceIndex",new re(b,f)),i.push(new jt(w,null)),n>Vi&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ec(s,t,e){const i=new We(s,t,e);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ln(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Kp(s,t,e){return new ue({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zp(s,t,e){const i=new Float32Array(en),n=new P(0,1,0);return new ue({name:"SphericalGaussianBlur",defines:{n:en,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ic(){return new ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function nc(){return new ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jp(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ur||l===Nr,h=l===on||l===zn;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new tc(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new tc(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Qp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Ms("WebGLRenderer: "+i+" extension not supported."),n}}}function tm(s,t,e,i){const n={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete n[d.id];const p=a.get(d);p&&(t.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let E=0,b=x.length;E<b;E+=3){const w=x[E+0],A=x[E+1],C=x[E+2];d.push(w,A,A,C,C,w)}}else if(g!==void 0){const x=g.array;v=g.version;for(let E=0,b=x.length/3-1;E<b;E+=3){const w=E+0,A=E+1,C=E+2;d.push(w,A,A,C,C,w)}}else return;const m=new(Oc(d)?Vc:kc)(d,1);m.version=v;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function em(s,t,e){let i;function n(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,p){s.drawElements(i,p,a,d*r),e.update(p,i,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(i,p,a,d*r,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*v[x];e.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function im(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:Gt("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function nm(s,t,e){const i=new WeakMap,n=new pe;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let w=o.attributes.position.count*b,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*A*4*u),L=new Bc(C,w,A,u);L.type=li,L.needsUpdate=!0;const y=b*4;for(let R=0;R<u;R++){const F=f[R],B=x[R],X=E[R],H=w*A*4*R;for(let G=0;G<F.count;G++){const z=G*y;g===!0&&(n.fromBufferAttribute(F,G),C[H+z+0]=n.x,C[H+z+1]=n.y,C[H+z+2]=n.z,C[H+z+3]=0),v===!0&&(n.fromBufferAttribute(B,G),C[H+z+4]=n.x,C[H+z+5]=n.y,C[H+z+6]=n.z,C[H+z+7]=0),m===!0&&(n.fromBufferAttribute(X,G),C[H+z+8]=n.x,C[H+z+9]=n.y,C[H+z+10]=n.z,C[H+z+11]=X.itemSize===4?n.w:1)}}d={count:u,texture:L,size:new lt(w,A)},i.set(o,d),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function sm(s,t,e,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const am={[Po]:"LINEAR_TONE_MAPPING",[Ro]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[Io]:"AGX_TONE_MAPPING",[Uo]:"NEUTRAL_TONE_MAPPING",[Lo]:"CUSTOM_TONE_MAPPING"};function rm(s,t,e,i,n){const a=new We(t,e,{type:s,depthBuffer:i,stencilBuffer:n}),r=new We(t,e,{type:Qe,depthBuffer:!1,stencilBuffer:!1}),o=new Zt;o.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new oe([0,2,0,0,2,0],2));const l=new gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new jt(o,l),h=new el(-1,1,1,-1,0,1);let u=null,d=null,p=!1,g,v=null,m=[],f=!1;this.setSize=function(x,E){a.setSize(x,E),r.setSize(x,E);for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(x,E)}},this.setEffects=function(x){m=x,f=m.length>0&&m[0].isRenderPass===!0;const E=a.width,b=a.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(E,b)}},this.begin=function(x,E){if(p||x.toneMapping===mi&&m.length===0)return!1;if(v=E,E!==null){const b=E.width,w=E.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return f===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=mi,!0},this.hasRenderPass=function(){return f},this.end=function(x,E){x.toneMapping=g,p=!0;let b=a,w=r;for(let A=0;A<m.length;A++){const C=m[A];if(C.enabled!==!1&&(C.render(x,w,b,E),C.needsSwap!==!1)){const L=b;b=w,w=L}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},Ht.getTransfer(u)===Yt&&(l.defines.SRGB_TRANSFER="");const A=am[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(v),x.render(c,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),l.dispose()}}const Qc=new Re,Mo=new Ts(1,1),th=new Bc,eh=new vu,ih=new Wc,sc=[],ac=[],rc=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function Yn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=sc[n];if(a===void 0&&(a=new Float32Array(n),sc[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Na(s,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function om(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function um(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;lc.set(i),s.uniformMatrix2fv(this.addr,!1,lc),Te(e,i)}}function dm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;oc.set(i),s.uniformMatrix3fv(this.addr,!1,oc),Te(e,i)}}function fm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;rc.set(i),s.uniformMatrix4fv(this.addr,!1,rc),Te(e,i)}}function pm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function _m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function vm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function Mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function Sm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?(Mo.compareFunction=e.isReversedDepthBuffer()?Ho:Go,a=Mo):a=Qc,e.setTexture2D(t||a,n)}function bm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||eh,n)}function Em(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ih,n)}function wm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||th,n)}function Tm(s){switch(s){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return xm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}}function Am(s,t){s.uniform1fv(this.addr,t)}function Cm(s,t){const e=Yn(t,this.size,2);s.uniform2fv(this.addr,e)}function Pm(s,t){const e=Yn(t,this.size,3);s.uniform3fv(this.addr,e)}function Rm(s,t){const e=Yn(t,this.size,4);s.uniform4fv(this.addr,e)}function Dm(s,t){const e=Yn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lm(s,t){const e=Yn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Im(s,t){const e=Yn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Um(s,t){s.uniform1iv(this.addr,t)}function Nm(s,t){s.uniform2iv(this.addr,t)}function Fm(s,t){s.uniform3iv(this.addr,t)}function Om(s,t){s.uniform4iv(this.addr,t)}function Bm(s,t){s.uniform1uiv(this.addr,t)}function zm(s,t){s.uniform2uiv(this.addr,t)}function km(s,t){s.uniform3uiv(this.addr,t)}function Vm(s,t){s.uniform4uiv(this.addr,t)}function Gm(s,t,e){const i=this.cache,n=t.length,a=Na(e,n);we(i,a)||(s.uniform1iv(this.addr,a),Te(i,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=Mo:r=Qc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,a[o])}function Hm(s,t,e){const i=this.cache,n=t.length,a=Na(e,n);we(i,a)||(s.uniform1iv(this.addr,a),Te(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||eh,a[r])}function Wm(s,t,e){const i=this.cache,n=t.length,a=Na(e,n);we(i,a)||(s.uniform1iv(this.addr,a),Te(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||ih,a[r])}function Xm(s,t,e){const i=this.cache,n=t.length,a=Na(e,n);we(i,a)||(s.uniform1iv(this.addr,a),Te(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||th,a[r])}function $m(s){switch(s){case 5126:return Am;case 35664:return Cm;case 35665:return Pm;case 35666:return Rm;case 35674:return Dm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class jm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tm(e.type)}}class qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class Ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function cc(s,t){s.seq.push(t),s.map[t.id]=t}function Km(s,t,e){const i=s.name,n=i.length;for(xr.lastIndex=0;;){const a=xr.exec(i),r=xr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){cc(e,c===void 0?new jm(o,s,t):new qm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ym(o),cc(e,u)),e=u}}}class ga{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Km(o,l,this)}const n=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):a.push(r);n.length>0&&(this.seq=n.concat(a))}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function hc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Zm=37297;let Jm=0;function Qm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const uc=new Ut;function t0(s){Ht._getMatrix(uc,Ht.workingColorSpace,s);const t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(s)){case xa:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Qm(s.getShaderSource(t),o)}else return a}function e0(s,t){const e=t0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const i0={[Po]:"Linear",[Ro]:"Reinhard",[Do]:"Cineon",[Ra]:"ACESFilmic",[Io]:"AgX",[Uo]:"Neutral",[Lo]:"Custom"};function n0(s,t){const e=i0[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const la=new P;function s0(){Ht.getLuminanceCoefficients(la);const s=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function r0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function o0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function ds(s){return s!==""}function fc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(s){return s.replace(l0,h0)}const c0=new Map;function h0(s,t){let e=Nt[t];if(e===void 0){const i=c0.get(t);if(i!==void 0)e=Nt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(s){return s.replace(u0,d0)}function d0(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function gc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const f0={[ua]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function p0(s){return f0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m0={[on]:"ENVMAP_TYPE_CUBE",[zn]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};function g0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":m0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _0={[zn]:"ENVMAP_MODE_REFRACTION"};function v0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x0={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function y0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":x0[s.combine]||"ENVMAP_BLENDING_NONE"}function M0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function S0(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=p0(e),c=g0(e),h=v0(e),u=y0(e),d=M0(e),p=a0(e),g=r0(a),v=n.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),f.length>0&&(f+=`
`)):(m=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),f=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Nt.tonemapping_pars_fragment:"",e.toneMapping!==mi?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),r=So(r),r=fc(r,e),r=pc(r,e),o=So(o),o=fc(o,e),o=pc(o,e),r=mc(r),o=mc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=x+m+r,b=x+f+o,w=hc(n,n.VERTEX_SHADER,E),A=hc(n,n.FRAGMENT_SHADER,b);n.attachShader(v,w),n.attachShader(v,A),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function C(R){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(v)||"",B=n.getShaderInfoLog(w)||"",X=n.getShaderInfoLog(A)||"",H=F.trim(),G=B.trim(),z=X.trim();let K=!0,ut=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,w,A);else{const rt=dc(n,w,"vertex"),dt=dc(n,A,"fragment");Gt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+rt+`
`+dt)}else H!==""?Pt("WebGLProgram: Program Info Log:",H):(G===""||z==="")&&(ut=!1);ut&&(R.diagnostics={runnable:K,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:f}})}n.deleteShader(w),n.deleteShader(A),L=new ga(n,v),y=o0(n,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(v,Zm)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let b0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new w0(t),e.set(t,i)),i}}class w0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function T0(s,t,e,i,n,a,r){const o=new $o,l=new E0,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,F,B){const X=F.fog,H=B.geometry,G=y.isMeshStandardMaterial?F.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),K=z&&z.mapping===Da?z.image.height:null,ut=g[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&Pt("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=rt!==void 0?rt.length:0;let kt=0;H.morphAttributes.position!==void 0&&(kt=1),H.morphAttributes.normal!==void 0&&(kt=2),H.morphAttributes.color!==void 0&&(kt=3);let Ot,fe,de,j;if(ut){const Qt=di[ut];Ot=Qt.vertexShader,fe=Qt.fragmentShader}else Ot=y.vertexShader,fe=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);const Z=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),It=B.isInstancedMesh===!0,xt=B.isBatchedMesh===!0,Xt=!!y.map,Ae=!!y.matcap,Wt=!!z,Jt=!!y.aoMap,se=!!y.lightMap,Bt=!!y.bumpMap,ve=!!y.normalMap,D=!!y.displacementMap,xe=!!y.emissiveMap,qt=!!y.metalnessMap,le=!!y.roughnessMap,Mt=y.anisotropy>0,T=y.clearcoat>0,_=y.dispersion>0,U=y.iridescence>0,$=y.sheen>0,Y=y.transmission>0,W=Mt&&!!y.anisotropyMap,bt=T&&!!y.clearcoatMap,it=T&&!!y.clearcoatNormalMap,yt=T&&!!y.clearcoatRoughnessMap,Rt=U&&!!y.iridescenceMap,Q=U&&!!y.iridescenceThicknessMap,st=$&&!!y.sheenColorMap,_t=$&&!!y.sheenRoughnessMap,St=!!y.specularMap,nt=!!y.specularColorMap,zt=!!y.specularIntensityMap,I=Y&&!!y.transmissionMap,ht=Y&&!!y.thicknessMap,tt=!!y.gradientMap,ft=!!y.alphaMap,J=y.alphaTest>0,q=!!y.alphaHash,et=!!y.extensions;let Dt=mi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const ce={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:fe,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:xt,batchingColor:xt&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vn,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:Ae,envMap:Wt,envMapMode:Wt&&z.mapping,envMapCubeUVHeight:K,aoMap:Jt,lightMap:se,bumpMap:Bt,normalMap:ve,displacementMap:D,emissiveMap:xe,normalMapObjectSpace:ve&&y.normalMapType===Gh,normalMapTangentSpace:ve&&y.normalMapType===Fc,metalnessMap:qt,roughnessMap:le,anisotropy:Mt,anisotropyMap:W,clearcoat:T,clearcoatMap:bt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:_,iridescence:U,iridescenceMap:Rt,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:st,sheenRoughnessMap:_t,specularMap:St,specularColorMap:nt,specularIntensityMap:zt,transmission:Y,transmissionMap:I,thicknessMap:ht,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Fn&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:q,combine:y.combine,mapUv:Xt&&v(y.map.channel),aoMapUv:Jt&&v(y.aoMap.channel),lightMapUv:se&&v(y.lightMap.channel),bumpMapUv:Bt&&v(y.bumpMap.channel),normalMapUv:ve&&v(y.normalMap.channel),displacementMapUv:D&&v(y.displacementMap.channel),emissiveMapUv:xe&&v(y.emissiveMap.channel),metalnessMapUv:qt&&v(y.metalnessMap.channel),roughnessMapUv:le&&v(y.roughnessMap.channel),anisotropyMapUv:W&&v(y.anisotropyMap.channel),clearcoatMapUv:bt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(y.sheenRoughnessMap.channel),specularMapUv:St&&v(y.specularMap.channel),specularColorMapUv:nt&&v(y.specularColorMap.channel),specularIntensityMapUv:zt&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:ht&&v(y.thicknessMap.channel),alphaMapUv:ft&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ve||Mt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Xt||ft),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&Ht.getTransfer(y.map.colorSpace)===Yt,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(y.emissiveMap.colorSpace)===Yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===Ee,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&y.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(x(S,y),E(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const S=g[y.type];let R;if(S){const F=di[S];R=bs.clone(F.uniforms)}else R=y.uniforms;return R}function w(y,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new S0(s,S,y,a),h.push(R),u.set(S,R)),R}function A(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function A0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function C0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _c(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vc(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(u,d,p,g,v,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){const f=r(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=r(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||C0),i.length>1&&i.sort(d||_c),n.length>1&&n.sort(d||_c)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function P0(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new vc,s.set(i,[r])):n>=a.length?(r=new vc,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function R0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new vt};break;case"SpotLight":e={position:new P,direction:new P,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function D0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let L0=0;function I0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function U0(s){const t=new R0,e=D0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,a=new Kt,r=new Kt;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,E=0,b=0,w=0,A=0,C=0;c.sort(I0);for(let y=0,S=c.length;y<S;y++){const R=c[y],F=R.color,B=R.intensity,X=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===kn?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],B);C++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,K=e.get(R);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=R.shadow.matrix,x++}i.directional[p]=G,p++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=X,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[v]=G;const z=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[v]=z.matrix,R.castShadow){const K=e.get(R);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=H,b++}v++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const z=R.shadow,K=e.get(R);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(B),G.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==E||L.numSpotShadows!==b||L.numSpotMaps!==w||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=E,L.numSpotShadows=b,L.numSpotMaps=w,L.numLightProbes=C,i.version=L0++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const E=c[f];if(E.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),u++}else if(E.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function xc(s){const t=new U0(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function N0(s){let t=new WeakMap;function e(n,a=0){const r=t.get(n);let o;return r===void 0?(o=new xc(s),t.set(n,[o])):a>=r.length?(o=new xc(s),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],z0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],yc=new Kt,cs=new P,yr=new P;function k0(s,t,e){let i=new jo;const n=new lt,a=new lt,r=new pe,o=new Wu,l=new Xu,c={},h=e.maxTextureSize,u={[Hi]:Ee,[Ee]:Hi,[Je]:Je},d=new ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:F0,fragmentShader:O0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let f=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===xh&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=ua);const y=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(H=>H.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,H=A.length;X<H;X++){const G=A[X],z=G.shadow;if(z===void 0){Pt("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const K=z.getFrameExtents();if(n.multiply(K),a.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,z.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,z.mapSize.y=a.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===us){if(G.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new We(n.x,n.y,{format:kn,type:Qe,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Ts(n.x,n.y,li),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Ri,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=be,z.map.depthTexture.magFilter=be}else{G.isPointLight?(z.map=new Xc(n.x),z.map.depthTexture=new Vu(n.x,_i)):(z.map=new We(n.x,n.y),z.map.depthTexture=new Ts(n.x,n.y,_i)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Ri;const rt=s.state.buffers.depth.getReversed();this.type===ua?(z.map.depthTexture.compareFunction=rt?Ho:Go,z.map.depthTexture.minFilter=Ne,z.map.depthTexture.magFilter=Ne):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=be,z.map.depthTexture.magFilter=be)}z.camera.updateProjectionMatrix()}const ut=z.map.isWebGLCubeRenderTarget?6:1;for(let rt=0;rt<ut;rt++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,rt),s.clear();else{rt===0&&(s.setRenderTarget(z.map),s.clear());const dt=z.getViewport(rt);r.set(a.x*dt.x,a.y*dt.y,a.x*dt.z,a.y*dt.w),F.viewport(r)}if(G.isPointLight){const dt=z.camera,kt=z.matrix,Ot=G.distance||dt.far;Ot!==dt.far&&(dt.far=Ot,dt.updateProjectionMatrix()),cs.setFromMatrixPosition(G.matrixWorld),dt.position.copy(cs),yr.copy(dt.position),yr.add(B0[rt]),dt.up.copy(z0[rt]),dt.lookAt(yr),dt.updateMatrixWorld(),kt.makeTranslation(-cs.x,-cs.y,-cs.z),yc.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(yc,dt.coordinateSystem,dt.reversedDepth)}else z.updateMatrices(G);i=z.getFrustum(),b(C,L,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===us&&x(z,L),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,S,R)};function x(A,C){const L=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new We(n.x,n.y,{format:kn,type:Qe})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,L,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,L,p,v,null)}function E(A,C,L,y){let S=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=S.uuid,B=C.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let H=X[B];H===void 0&&(H=S.clone(),X[B]=H,C.addEventListener("dispose",w)),S=H}if(S.visible=C.visible,S.wireframe=C.wireframe,y===us?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=L}return S}function b(A,C,L,y,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===us)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const H=B.groups;for(let G=0,z=H.length;G<z;G++){const K=H[G],ut=X[K.materialIndex];if(ut&&ut.visible){const rt=E(A,ut,y,S);A.onBeforeShadow(s,A,C,L,B,rt,K),s.renderBufferDirect(L,null,B,rt,A,K),A.onAfterShadow(s,A,C,L,B,rt,K)}}}else if(X.visible){const H=E(A,X,y,S);A.onBeforeShadow(s,A,C,L,B,H,null),s.renderBufferDirect(L,null,B,H,A,null),A.onAfterShadow(s,A,C,L,B,H,null)}}const F=A.children;for(let B=0,X=F.length;B<X;B++)b(F[B],C,L,y,S)}function w(A){A.target.removeEventListener("dispose",w);for(const L in c){const y=c[L],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const V0={[Ar]:Cr,[Pr]:Lr,[Rr]:Ir,[Bn]:Dr,[Cr]:Ar,[Lr]:Pr,[Ir]:Rr,[Dr]:Bn};function G0(s,t){function e(){let I=!1;const ht=new pe;let tt=null;const ft=new pe(0,0,0,0);return{setMask:function(J){tt!==J&&!I&&(s.colorMask(J,J,J,J),tt=J)},setLocked:function(J){I=J},setClear:function(J,q,et,Dt,ce){ce===!0&&(J*=Dt,q*=Dt,et*=Dt),ht.set(J,q,et,Dt),ft.equals(ht)===!1&&(s.clearColor(J,q,et,Dt),ft.copy(ht))},reset:function(){I=!1,tt=null,ft.set(-1,0,0,0)}}}function i(){let I=!1,ht=!1,tt=null,ft=null,J=null;return{setReversed:function(q){if(ht!==q){const et=t.get("EXT_clip_control");q?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),ht=q;const Dt=J;J=null,this.setClear(Dt)}},getReversed:function(){return ht},setTest:function(q){q?Z(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(q){tt!==q&&!I&&(s.depthMask(q),tt=q)},setFunc:function(q){if(ht&&(q=V0[q]),ft!==q){switch(q){case Ar:s.depthFunc(s.NEVER);break;case Cr:s.depthFunc(s.ALWAYS);break;case Pr:s.depthFunc(s.LESS);break;case Bn:s.depthFunc(s.LEQUAL);break;case Rr:s.depthFunc(s.EQUAL);break;case Dr:s.depthFunc(s.GEQUAL);break;case Lr:s.depthFunc(s.GREATER);break;case Ir:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=q}},setLocked:function(q){I=q},setClear:function(q){J!==q&&(ht&&(q=1-q),s.clearDepth(q),J=q)},reset:function(){I=!1,tt=null,ft=null,J=null,ht=!1}}}function n(){let I=!1,ht=null,tt=null,ft=null,J=null,q=null,et=null,Dt=null,ce=null;return{setTest:function(Qt){I||(Qt?Z(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!I&&(s.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,hi,xi){(tt!==Qt||ft!==hi||J!==xi)&&(s.stencilFunc(Qt,hi,xi),tt=Qt,ft=hi,J=xi)},setOp:function(Qt,hi,xi){(q!==Qt||et!==hi||Dt!==xi)&&(s.stencilOp(Qt,hi,xi),q=Qt,et=hi,Dt=xi)},setLocked:function(Qt){I=Qt},setClear:function(Qt){ce!==Qt&&(s.clearStencil(Qt),ce=Qt)},reset:function(){I=!1,ht=null,tt=null,ft=null,J=null,q=null,et=null,Dt=null,ce=null}}}const a=new e,r=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,E=null,b=null,w=null,A=null,C=new vt(0,0,0),L=0,y=!1,S=null,R=null,F=null,B=null,X=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=z>=2);let ut=null,rt={};const dt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Ot=new pe().fromArray(dt),fe=new pe().fromArray(kt);function de(I,ht,tt,ft){const J=new Uint8Array(4),q=s.createTexture();s.bindTexture(I,q),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<tt;et++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ht+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return q}const j={};j[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),r.setFunc(Bn),Bt(!1),ve(fl),Z(s.CULL_FACE),Jt(pi);function Z(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function mt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function It(I,ht){return u[I]!==ht?(s.bindFramebuffer(I,ht),u[I]=ht,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function xt(I,ht){let tt=p,ft=!1;if(I){tt=d.get(ht),tt===void 0&&(tt=[],d.set(ht,tt));const J=I.textures;if(tt.length!==J.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let q=0,et=J.length;q<et;q++)tt[q]=s.COLOR_ATTACHMENT0+q;tt.length=J.length,ft=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,ft=!0);ft&&s.drawBuffers(tt)}function Xt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Ae={[tn]:s.FUNC_ADD,[Mh]:s.FUNC_SUBTRACT,[Sh]:s.FUNC_REVERSE_SUBTRACT};Ae[bh]=s.MIN,Ae[Eh]=s.MAX;const Wt={[wh]:s.ZERO,[Th]:s.ONE,[Ah]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[Ih]:s.SRC_ALPHA_SATURATE,[Dh]:s.DST_COLOR,[Ph]:s.DST_ALPHA,[Ch]:s.ONE_MINUS_SRC_COLOR,[Tr]:s.ONE_MINUS_SRC_ALPHA,[Lh]:s.ONE_MINUS_DST_COLOR,[Rh]:s.ONE_MINUS_DST_ALPHA,[Uh]:s.CONSTANT_COLOR,[Nh]:s.ONE_MINUS_CONSTANT_COLOR,[Fh]:s.CONSTANT_ALPHA,[Oh]:s.ONE_MINUS_CONSTANT_ALPHA};function Jt(I,ht,tt,ft,J,q,et,Dt,ce,Qt){if(I===pi){v===!0&&(mt(s.BLEND),v=!1);return}if(v===!1&&(Z(s.BLEND),v=!0),I!==yh){if(I!==m||Qt!==y){if((f!==tn||b!==tn)&&(s.blendEquation(s.FUNC_ADD),f=tn,b=tn),Qt)switch(I){case Fn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.ONE,s.ONE);break;case pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ml:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",I);break}else switch(I){case Fn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pl:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",I);break}x=null,E=null,w=null,A=null,C.set(0,0,0),L=0,m=I,y=Qt}return}J=J||ht,q=q||tt,et=et||ft,(ht!==f||J!==b)&&(s.blendEquationSeparate(Ae[ht],Ae[J]),f=ht,b=J),(tt!==x||ft!==E||q!==w||et!==A)&&(s.blendFuncSeparate(Wt[tt],Wt[ft],Wt[q],Wt[et]),x=tt,E=ft,w=q,A=et),(Dt.equals(C)===!1||ce!==L)&&(s.blendColor(Dt.r,Dt.g,Dt.b,ce),C.copy(Dt),L=ce),m=I,y=!1}function se(I,ht){I.side===Je?mt(s.CULL_FACE):Z(s.CULL_FACE);let tt=I.side===Ee;ht&&(tt=!tt),Bt(tt),I.blending===Fn&&I.transparent===!1?Jt(pi):Jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){S!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),S=I)}function ve(I){I!==_h?(Z(s.CULL_FACE),I!==R&&(I===fl?s.cullFace(s.BACK):I===vh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),R=I}function D(I){I!==F&&(G&&s.lineWidth(I),F=I)}function xe(I,ht,tt){I?(Z(s.POLYGON_OFFSET_FILL),(B!==ht||X!==tt)&&(s.polygonOffset(ht,tt),B=ht,X=tt)):mt(s.POLYGON_OFFSET_FILL)}function qt(I){I?Z(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function le(I){I===void 0&&(I=s.TEXTURE0+H-1),ut!==I&&(s.activeTexture(I),ut=I)}function Mt(I,ht,tt){tt===void 0&&(ut===null?tt=s.TEXTURE0+H-1:tt=ut);let ft=rt[tt];ft===void 0&&(ft={type:void 0,texture:void 0},rt[tt]=ft),(ft.type!==I||ft.texture!==ht)&&(ut!==tt&&(s.activeTexture(tt),ut=tt),s.bindTexture(I,ht||j[I]),ft.type=I,ft.texture=ht)}function T(){const I=rt[ut];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function $(){try{s.texSubImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function Y(){try{s.texSubImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function bt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function it(){try{s.texStorage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function yt(){try{s.texStorage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function Rt(){try{s.texImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function Q(){try{s.texImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function st(I){Ot.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ot.copy(I))}function _t(I){fe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),fe.copy(I))}function St(I,ht){let tt=c.get(ht);tt===void 0&&(tt=new WeakMap,c.set(ht,tt));let ft=tt.get(I);ft===void 0&&(ft=s.getUniformBlockIndex(ht,I.name),tt.set(I,ft))}function nt(I,ht){const ft=c.get(ht).get(I);l.get(ht)!==ft&&(s.uniformBlockBinding(ht,ft,I.__bindingPointIndex),l.set(ht,ft))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ut=null,rt={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,E=null,b=null,w=null,A=null,C=new vt(0,0,0),L=0,y=!1,S=null,R=null,F=null,B=null,X=null,Ot.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Z,disable:mt,bindFramebuffer:It,drawBuffers:xt,useProgram:Xt,setBlending:Jt,setMaterial:se,setFlipSided:Bt,setCullFace:ve,setLineWidth:D,setPolygonOffset:xe,setScissorTest:qt,activeTexture:le,bindTexture:Mt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Rt,texImage3D:Q,updateUBOMapping:St,uniformBlockBinding:nt,texStorage2D:it,texStorage3D:yt,texSubImage2D:$,texSubImage3D:Y,compressedTexSubImage2D:W,compressedTexSubImage3D:bt,scissor:st,viewport:_t,reset:zt}}function H0(s,t,e,i,n,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):ys("canvas")}function v(T,_,U){let $=1;const Y=Mt(T);if((Y.width>U||Y.height>U)&&($=U/Math.max(Y.width,Y.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor($*Y.width),bt=Math.floor($*Y.height);u===void 0&&(u=g(W,bt));const it=_?g(W,bt):u;return it.width=W,it.height=bt,it.getContext("2d").drawImage(T,0,0,W,bt),Pt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+bt+")."),it}else return"data"in T&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,_,U,$,Y=!1){if(T!==null){if(s[T]!==void 0)return s[T];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=_;if(_===s.RED&&(U===s.FLOAT&&(W=s.R32F),U===s.HALF_FLOAT&&(W=s.R16F),U===s.UNSIGNED_BYTE&&(W=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.R8UI),U===s.UNSIGNED_SHORT&&(W=s.R16UI),U===s.UNSIGNED_INT&&(W=s.R32UI),U===s.BYTE&&(W=s.R8I),U===s.SHORT&&(W=s.R16I),U===s.INT&&(W=s.R32I)),_===s.RG&&(U===s.FLOAT&&(W=s.RG32F),U===s.HALF_FLOAT&&(W=s.RG16F),U===s.UNSIGNED_BYTE&&(W=s.RG8)),_===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.RG8UI),U===s.UNSIGNED_SHORT&&(W=s.RG16UI),U===s.UNSIGNED_INT&&(W=s.RG32UI),U===s.BYTE&&(W=s.RG8I),U===s.SHORT&&(W=s.RG16I),U===s.INT&&(W=s.RG32I)),_===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.RGB8UI),U===s.UNSIGNED_SHORT&&(W=s.RGB16UI),U===s.UNSIGNED_INT&&(W=s.RGB32UI),U===s.BYTE&&(W=s.RGB8I),U===s.SHORT&&(W=s.RGB16I),U===s.INT&&(W=s.RGB32I)),_===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),U===s.UNSIGNED_INT&&(W=s.RGBA32UI),U===s.BYTE&&(W=s.RGBA8I),U===s.SHORT&&(W=s.RGBA16I),U===s.INT&&(W=s.RGBA32I)),_===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),_===s.RGBA){const bt=Y?xa:Ht.getTransfer($);U===s.FLOAT&&(W=s.RGBA32F),U===s.HALF_FLOAT&&(W=s.RGBA16F),U===s.UNSIGNED_BYTE&&(W=bt===Yt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function b(T,_){let U;return T?_===null||_===_i||_===xs?U=s.DEPTH24_STENCIL8:_===li?U=s.DEPTH32F_STENCIL8:_===vs&&(U=s.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_i||_===xs?U=s.DEPTH_COMPONENT24:_===li?U=s.DEPTH_COMPONENT32F:_===vs&&(U=s.DEPTH_COMPONENT16),U}function w(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==be&&T.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&h.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),S(_)}function L(T){const _=i.get(T);if(_.__webglInit===void 0)return;const U=T.source,$=d.get(U);if($){const Y=$[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(T),Object.keys($).length===0&&d.delete(U)}i.remove(T)}function y(T){const _=i.get(T);s.deleteTexture(_.__webglTexture);const U=T.source,$=d.get(U);delete $[_.__cacheKey],r.memory.textures--}function S(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Y=0;Y<_.__webglFramebuffer[$].length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[$][Y]);else s.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)s.deleteFramebuffer(_.__webglFramebuffer[$]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=T.textures;for(let $=0,Y=U.length;$<Y;$++){const W=i.get(U[$]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),r.memory.textures--),i.remove(U[$])}i.remove(T)}let R=0;function F(){R=0}function B(){const T=R;return T>=n.maxTextures&&Pt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),R+=1,T}function X(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function H(T,_){const U=i.get(T);if(T.isVideoTexture&&qt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const $=T.image;if($===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,T,_);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function G(T,_){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){j(U,T,_);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function z(T,_){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){j(U,T,_);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function K(T,_){const U=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){Z(U,T,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}const ut={[Fr]:s.REPEAT,[Ti]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},rt={[be]:s.NEAREST,[kh]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[za]:s.LINEAR_MIPMAP_NEAREST,[sn]:s.LINEAR_MIPMAP_LINEAR},dt={[Hh]:s.NEVER,[qh]:s.ALWAYS,[Wh]:s.LESS,[Go]:s.LEQUAL,[Xh]:s.EQUAL,[Ho]:s.GEQUAL,[$h]:s.GREATER,[jh]:s.NOTEQUAL};function kt(T,_){if(_.type===li&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===za||_.magFilter===Us||_.magFilter===sn||_.minFilter===Ne||_.minFilter===za||_.minFilter===Us||_.minFilter===sn)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ut[_.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ut[_.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ut[_.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,rt[_.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===be||_.minFilter!==Us&&_.minFilter!==sn||_.type===li&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ot(T,_){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const $=_.source;let Y=d.get($);Y===void 0&&(Y={},d.set($,Y));const W=X(_);if(W!==T.__cacheKey){Y[W]===void 0&&(Y[W]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,U=!0),Y[W].usedTimes++;const bt=Y[T.__cacheKey];bt!==void 0&&(Y[T.__cacheKey].usedTimes--,bt.usedTimes===0&&y(_)),T.__cacheKey=W,T.__webglTexture=Y[W].texture}return U}function fe(T,_,U){return Math.floor(Math.floor(T/U)/_)}function de(T,_,U,$){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,U,$,_.data);else{W.sort((Q,st)=>Q.start-st.start);let bt=0;for(let Q=1;Q<W.length;Q++){const st=W[bt],_t=W[Q],St=st.start+st.count,nt=fe(_t.start,_.width,4),zt=fe(st.start,_.width,4);_t.start<=St+1&&nt===zt&&fe(_t.start+_t.count-1,_.width,4)===nt?st.count=Math.max(st.count,_t.start+_t.count-st.start):(++bt,W[bt]=_t)}W.length=bt+1;const it=s.getParameter(s.UNPACK_ROW_LENGTH),yt=s.getParameter(s.UNPACK_SKIP_PIXELS),Rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Q=0,st=W.length;Q<st;Q++){const _t=W[Q],St=Math.floor(_t.start/4),nt=Math.ceil(_t.count/4),zt=St%_.width,I=Math.floor(St/_.width),ht=nt,tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,zt,I,ht,tt,U,$,_.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,it),s.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function j(T,_,U){let $=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=s.TEXTURE_3D);const Y=Ot(T,_),W=_.source;e.bindTexture($,T.__webglTexture,s.TEXTURE0+U);const bt=i.get(W);if(W.version!==bt.__version||Y===!0){e.activeTexture(s.TEXTURE0+U);const it=Ht.getPrimaries(Ht.workingColorSpace),yt=_.colorSpace===ki?null:Ht.getPrimaries(_.colorSpace),Rt=_.colorSpace===ki||it===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Q=v(_.image,!1,n.maxTextureSize);Q=le(_,Q);const st=a.convert(_.format,_.colorSpace),_t=a.convert(_.type);let St=E(_.internalFormat,st,_t,_.colorSpace,_.isVideoTexture);kt($,_);let nt;const zt=_.mipmaps,I=_.isVideoTexture!==!0,ht=bt.__version===void 0||Y===!0,tt=W.dataReady,ft=w(_,Q);if(_.isDepthTexture)St=b(_.format===an,_.type),ht&&(I?e.texStorage2D(s.TEXTURE_2D,1,St,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,St,Q.width,Q.height,0,st,_t,null));else if(_.isDataTexture)if(zt.length>0){I&&ht&&e.texStorage2D(s.TEXTURE_2D,ft,St,zt[0].width,zt[0].height);for(let J=0,q=zt.length;J<q;J++)nt=zt[J],I?tt&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,nt.width,nt.height,st,_t,nt.data):e.texImage2D(s.TEXTURE_2D,J,St,nt.width,nt.height,0,st,_t,nt.data);_.generateMipmaps=!1}else I?(ht&&e.texStorage2D(s.TEXTURE_2D,ft,St,Q.width,Q.height),tt&&de(_,Q,st,_t)):e.texImage2D(s.TEXTURE_2D,0,St,Q.width,Q.height,0,st,_t,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,St,zt[0].width,zt[0].height,Q.depth);for(let J=0,q=zt.length;J<q;J++)if(nt=zt[J],_.format!==ci)if(st!==null)if(I){if(tt)if(_.layerUpdates.size>0){const et=Zl(nt.width,nt.height,_.format,_.type);for(const Dt of _.layerUpdates){const ce=nt.data.subarray(Dt*et/nt.data.BYTES_PER_ELEMENT,(Dt+1)*et/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Dt,nt.width,nt.height,1,st,ce)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,nt.width,nt.height,Q.depth,st,nt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,St,nt.width,nt.height,Q.depth,0,nt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,nt.width,nt.height,Q.depth,st,_t,nt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,St,nt.width,nt.height,Q.depth,0,st,_t,nt.data)}else{I&&ht&&e.texStorage2D(s.TEXTURE_2D,ft,St,zt[0].width,zt[0].height);for(let J=0,q=zt.length;J<q;J++)nt=zt[J],_.format!==ci?st!==null?I?tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,nt.width,nt.height,st,nt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,St,nt.width,nt.height,0,nt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?tt&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,nt.width,nt.height,st,_t,nt.data):e.texImage2D(s.TEXTURE_2D,J,St,nt.width,nt.height,0,st,_t,nt.data)}else if(_.isDataArrayTexture)if(I){if(ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,St,Q.width,Q.height,Q.depth),tt)if(_.layerUpdates.size>0){const J=Zl(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const et=Q.data.subarray(q*J/Q.data.BYTES_PER_ELEMENT,(q+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,st,_t,et)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(_.isData3DTexture)I?(ht&&e.texStorage3D(s.TEXTURE_3D,ft,St,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)):e.texImage3D(s.TEXTURE_3D,0,St,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(_.isFramebufferTexture){if(ht)if(I)e.texStorage2D(s.TEXTURE_2D,ft,St,Q.width,Q.height);else{let J=Q.width,q=Q.height;for(let et=0;et<ft;et++)e.texImage2D(s.TEXTURE_2D,et,St,J,q,0,st,_t,null),J>>=1,q>>=1}}else if(zt.length>0){if(I&&ht){const J=Mt(zt[0]);e.texStorage2D(s.TEXTURE_2D,ft,St,J.width,J.height)}for(let J=0,q=zt.length;J<q;J++)nt=zt[J],I?tt&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,st,_t,nt):e.texImage2D(s.TEXTURE_2D,J,St,st,_t,nt);_.generateMipmaps=!1}else if(I){if(ht){const J=Mt(Q);e.texStorage2D(s.TEXTURE_2D,ft,St,J.width,J.height)}tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st,_t,Q)}else e.texImage2D(s.TEXTURE_2D,0,St,st,_t,Q);m(_)&&f($),bt.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Z(T,_,U){if(_.image.length!==6)return;const $=Ot(T,_),Y=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+U);const W=i.get(Y);if(Y.version!==W.__version||$===!0){e.activeTexture(s.TEXTURE0+U);const bt=Ht.getPrimaries(Ht.workingColorSpace),it=_.colorSpace===ki?null:Ht.getPrimaries(_.colorSpace),yt=_.colorSpace===ki||bt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,st=[];for(let q=0;q<6;q++)!Rt&&!Q?st[q]=v(_.image[q],!0,n.maxCubemapSize):st[q]=Q?_.image[q].image:_.image[q],st[q]=le(_,st[q]);const _t=st[0],St=a.convert(_.format,_.colorSpace),nt=a.convert(_.type),zt=E(_.internalFormat,St,nt,_.colorSpace),I=_.isVideoTexture!==!0,ht=W.__version===void 0||$===!0,tt=Y.dataReady;let ft=w(_,_t);kt(s.TEXTURE_CUBE_MAP,_);let J;if(Rt){I&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,zt,_t.width,_t.height);for(let q=0;q<6;q++){J=st[q].mipmaps;for(let et=0;et<J.length;et++){const Dt=J[et];_.format!==ci?St!==null?I?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,Dt.width,Dt.height,St,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,zt,Dt.width,Dt.height,0,Dt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,Dt.width,Dt.height,St,nt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,zt,Dt.width,Dt.height,0,St,nt,Dt.data)}}}else{if(J=_.mipmaps,I&&ht){J.length>0&&ft++;const q=Mt(st[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,zt,q.width,q.height)}for(let q=0;q<6;q++)if(Q){I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,st[q].width,st[q].height,St,nt,st[q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,zt,st[q].width,st[q].height,0,St,nt,st[q].data);for(let et=0;et<J.length;et++){const ce=J[et].image[q].image;I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,ce.width,ce.height,St,nt,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,zt,ce.width,ce.height,0,St,nt,ce.data)}}else{I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,St,nt,st[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,zt,St,nt,st[q]);for(let et=0;et<J.length;et++){const Dt=J[et];I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,St,nt,Dt.image[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,zt,St,nt,Dt.image[q])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),W.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function mt(T,_,U,$,Y,W){const bt=a.convert(U.format,U.colorSpace),it=a.convert(U.type),yt=E(U.internalFormat,bt,it,U.colorSpace),Rt=i.get(_),Q=i.get(U);if(Q.__renderTarget=_,!Rt.__hasExternalTextures){const st=Math.max(1,_.width>>W),_t=Math.max(1,_.height>>W);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,W,yt,st,_t,_.depth,0,bt,it,null):e.texImage2D(Y,W,yt,st,_t,0,bt,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),xe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Y,Q.__webglTexture,0,D(_)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Y,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,T),_.depthBuffer){const $=_.depthTexture,Y=$&&$.isDepthTexture?$.type:null,W=b(_.stencilBuffer,Y),bt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(_),W,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(_),W,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,W,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,T)}else{const $=_.textures;for(let Y=0;Y<$.length;Y++){const W=$[Y],bt=a.convert(W.format,W.colorSpace),it=a.convert(W.type),yt=E(W.internalFormat,bt,it,W.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(_),yt,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(_),yt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,yt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(T,_,U){const $=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(s.TEXTURE_CUBE_MAP,_.depthTexture);const Rt=a.convert(_.depthTexture.format),Q=a.convert(_.depthTexture.type);let st;_.depthTexture.format===Ri?st=s.DEPTH_COMPONENT24:_.depthTexture.format===an&&(st=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,st,_.width,_.height,0,Rt,Q,null)}}else H(_.depthTexture,0);const W=Y.__webglTexture,bt=D(_),it=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,yt=_.depthTexture.format===an?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ri)xe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,it,W,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,it,W,0);else if(_.depthTexture.format===an)xe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,it,W,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,it,W,0);else throw new Error("Unknown depthTexture format")}function Xt(T){const _=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Y)};$.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=$}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)xt(_.__webglFramebuffer[$],T,$);else{const $=T.texture.mipmaps;$&&$.length>0?xt(_.__webglFramebuffer[0],T,0):xt(_.__webglFramebuffer,T,0)}else if(U){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=s.createRenderbuffer(),It(_.__webglDepthbuffer[$],T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,W)}}else{const $=T.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),It(_.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,W)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(T,_,U){const $=i.get(T);_!==void 0&&mt($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Xt(T)}function Wt(T){const _=T.texture,U=i.get(T),$=i.get(_);T.addEventListener("dispose",C);const Y=T.textures,W=T.isWebGLCubeRenderTarget===!0,bt=Y.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=_.version,r.memory.textures++),W){U.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[it]=[];for(let yt=0;yt<_.mipmaps.length;yt++)U.__webglFramebuffer[it][yt]=s.createFramebuffer()}else U.__webglFramebuffer[it]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)U.__webglFramebuffer[it]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(bt)for(let it=0,yt=Y.length;it<yt;it++){const Rt=i.get(Y[it]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&xe(T)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let it=0;it<Y.length;it++){const yt=Y[it];U.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[it]);const Rt=a.convert(yt.format,yt.colorSpace),Q=a.convert(yt.type),st=E(yt.internalFormat,Rt,Q,yt.colorSpace,T.isXRRenderTarget===!0),_t=D(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,st,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,U.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),It(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),kt(s.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)mt(U.__webglFramebuffer[it][yt],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt);else mt(U.__webglFramebuffer[it],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(_)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,yt=Y.length;it<yt;it++){const Rt=Y[it],Q=i.get(Rt);let st=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),kt(st,Rt),mt(U.__webglFramebuffer,T,Rt,s.COLOR_ATTACHMENT0+it,st,0),m(Rt)&&f(st)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),kt(it,_),_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)mt(U.__webglFramebuffer[yt],T,_,s.COLOR_ATTACHMENT0,it,yt);else mt(U.__webglFramebuffer,T,_,s.COLOR_ATTACHMENT0,it,0);m(_)&&f(it),e.unbindTexture()}T.depthBuffer&&Xt(T)}function Jt(T){const _=T.textures;for(let U=0,$=_.length;U<$;U++){const Y=_[U];if(m(Y)){const W=x(T),bt=i.get(Y).__webglTexture;e.bindTexture(W,bt),f(W),e.unbindTexture()}}}const se=[],Bt=[];function ve(T){if(T.samples>0){if(xe(T)===!1){const _=T.textures,U=T.width,$=T.height;let Y=s.COLOR_BUFFER_BIT;const W=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(T),it=_.length>1;if(it)for(let Rt=0;Rt<_.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Rt=0;Rt<_.length;Rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const Q=i.get(_[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,U,$,0,0,U,$,Y,s.NEAREST),l===!0&&(se.length=0,Bt.length=0,se.push(s.COLOR_ATTACHMENT0+Rt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(W),Bt.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let Rt=0;Rt<_.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const Q=i.get(_[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function D(T){return Math.min(n.maxSamples,T.samples)}function xe(T){const _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qt(T){const _=r.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function le(T,_){const U=T.colorSpace,$=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Vn&&U!==ki&&(Ht.getTransfer(U)===Yt?($!==ci||Y!==ze)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",U)),_}function Mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Ae,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function W0(s,t){function e(i,n=ki){let a;const r=Ht.getTransfer(n);if(i===ze)return s.UNSIGNED_BYTE;if(i===Fo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ic)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rc)return s.BYTE;if(i===Dc)return s.SHORT;if(i===vs)return s.UNSIGNED_SHORT;if(i===No)return s.INT;if(i===_i)return s.UNSIGNED_INT;if(i===li)return s.FLOAT;if(i===Qe)return s.HALF_FLOAT;if(i===Uc)return s.ALPHA;if(i===Nc)return s.RGB;if(i===ci)return s.RGBA;if(i===Ri)return s.DEPTH_COMPONENT;if(i===an)return s.DEPTH_STENCIL;if(i===Bo)return s.RED;if(i===zo)return s.RED_INTEGER;if(i===kn)return s.RG;if(i===ko)return s.RG_INTEGER;if(i===Vo)return s.RGBA_INTEGER;if(i===da||i===fa||i===pa||i===ma)if(r===Yt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Br||i===zr||i===kr||i===Vr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Br)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gr||i===Hr||i===Wr||i===Xr||i===$r||i===jr||i===qr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gr||i===Hr)return r===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Wr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xr)return a.COMPRESSED_R11_EAC;if(i===$r)return a.COMPRESSED_SIGNED_R11_EAC;if(i===jr)return a.COMPRESSED_RG11_EAC;if(i===qr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yr||i===Kr||i===Zr||i===Jr||i===Qr||i===to||i===eo||i===io||i===no||i===so||i===ao||i===ro||i===oo||i===lo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Yr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===to)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===io)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===no)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ao)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ro)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===ho||i===uo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===co)return r===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===fo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===po)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===go)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Yc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ue({vertexShader:X0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends hn{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new j0,f={},x=e.getContextAttributes();let E=null,b=null;const w=[],A=[],C=new lt;let L=null;const y=new Ke;y.viewport=new pe;const S=new Ke;S.viewport=new pe;const R=[y,S],F=new td;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=w[j];return Z===void 0&&(Z=new rr,w[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=w[j];return Z===void 0&&(Z=new rr,w[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=w[j];return Z===void 0&&(Z=new rr,w[j]=Z),Z.getHandSpace()};function H(j){const Z=A.indexOf(j.inputSource);if(Z===-1)return;const mt=w[Z];mt!==void 0&&(mt.update(j.inputSource,j.frame,c||r),mt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",z);for(let j=0;j<w.length;j++){const Z=A[j];Z!==null&&(A[j]=null,w[j].disconnect(Z))}B=null,X=null,m.reset();for(const j in f)delete f[j];t.setRenderTarget(E),p=null,d=null,u=null,n=null,b=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",G),n.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,It=null,xt=null;x.depth&&(xt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=x.stencil?an:Ri,It=x.stencil?xs:_i);const Xt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Xt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new We(d.textureWidth,d.textureHeight,{format:ci,type:ze,depthTexture:new Ts(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,e,mt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new We(p.framebufferWidth,p.framebufferHeight,{format:ci,type:ze,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),de.setContext(n),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let Z=0;Z<j.removed.length;Z++){const mt=j.removed[Z],It=A.indexOf(mt);It>=0&&(A[It]=null,w[It].disconnect(mt))}for(let Z=0;Z<j.added.length;Z++){const mt=j.added[Z];let It=A.indexOf(mt);if(It===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=A.length){A.push(mt),It=Xt;break}else if(A[Xt]===null){A[Xt]=mt,It=Xt;break}if(It===-1)break}const xt=w[It];xt&&xt.connect(mt)}}const K=new P,ut=new P;function rt(j,Z,mt){K.setFromMatrixPosition(Z.matrixWorld),ut.setFromMatrixPosition(mt.matrixWorld);const It=K.distanceTo(ut),xt=Z.projectionMatrix.elements,Xt=mt.projectionMatrix.elements,Ae=xt[14]/(xt[10]-1),Wt=xt[14]/(xt[10]+1),Jt=(xt[9]+1)/xt[5],se=(xt[9]-1)/xt[5],Bt=(xt[8]-1)/xt[0],ve=(Xt[8]+1)/Xt[0],D=Ae*Bt,xe=Ae*ve,qt=It/(-Bt+ve),le=qt*-Bt;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(le),j.translateZ(qt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xt[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Mt=Ae+qt,T=Wt+qt,_=D-le,U=xe+(It-le),$=Jt*Wt/T*Mt,Y=se*Wt/T*Mt;j.projectionMatrix.makePerspective(_,U,$,Y,Mt,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function dt(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let Z=j.near,mt=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),F.near=S.near=y.near=Z,F.far=S.far=y.far=mt,(B!==F.near||X!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,X=F.far),F.layers.mask=j.layers.mask|6,y.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const It=j.parent,xt=F.cameras;dt(F,It);for(let Xt=0;Xt<xt.length;Xt++)dt(xt[Xt],It);xt.length===2?rt(F,y,S):F.projectionMatrix.copy(y.projectionMatrix),kt(j,F,It)};function kt(j,Z,mt){mt===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ss*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return f[j]};let Ot=null;function fe(j,Z){if(h=Z.getViewerPose(c||r),g=Z,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let It=!1;mt.length!==F.cameras.length&&(F.cameras.length=0,It=!0);for(let Wt=0;Wt<mt.length;Wt++){const Jt=mt[Wt];let se=null;if(p!==null)se=p.getViewport(Jt);else{const ve=u.getViewSubImage(d,Jt);se=ve.viewport,Wt===0&&(t.setRenderTargetTextures(b,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(b))}let Bt=R[Wt];Bt===void 0&&(Bt=new Ke,Bt.layers.enable(Wt),Bt.viewport=new pe,R[Wt]=Bt),Bt.matrix.fromArray(Jt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Jt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(se.x,se.y,se.width,se.height),Wt===0&&(F.matrix.copy(Bt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),It===!0&&F.cameras.push(Bt)}const xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Wt=u.getDepthInformation(mt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,n.renderState)}if(xt&&xt.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let Wt=0;Wt<mt.length;Wt++){const Jt=mt[Wt].camera;if(Jt){let se=f[Jt];se||(se=new Yc,f[Jt]=se);const Bt=u.getCameraImage(Jt);se.sourceTexture=Bt}}}}for(let mt=0;mt<w.length;mt++){const It=A[mt],xt=w[mt];It!==null&&xt!==void 0&&xt.update(It,Z,c||r)}Ot&&Ot(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const de=new Jc;de.setAnimationLoop(fe),this.setAnimationLoop=function(j){Ot=j},this.dispose=function(){}}}const Qi=new vi,Y0=new Kt;function K0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Gc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,E,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ee&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ee&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),E=x.envMap,b=x.envMapRotation;E&&(m.envMap.value=E,Qi.copy(b),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(Qi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ee&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Z0(s,t,e,i){let n={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const b=E.program;i.uniformBlockBinding(x,b)}function c(x,E){let b=n[x.id];b===void 0&&(g(x),b=h(x),n[x.id]=b,x.addEventListener("dispose",m));const w=E.program;i.updateUBOMapping(x,w);const A=t.render.frame;a[x.id]!==A&&(d(x),a[x.id]=A)}function h(x){const E=u();x.__bindingPointIndex=E;const b=s.createBuffer(),w=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,b),b}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const E=n[x.id],b=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,C=b.length;A<C;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,S=L.length;y<S;y++){const R=L[y];if(p(R,A,y,w)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let H=0;H<B.length;H++){const G=B[H],z=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,F+X,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,E,b,w){const A=x.value,C=E+"_"+b;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const L=w[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return w[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(x){const E=x.uniforms;let b=0;const w=16;for(let C=0,L=E.length;C<L;C++){const y=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,R=y.length;S<R;S++){const F=y[S],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,H=B.length;X<H;X++){const G=B[X],z=v(G),K=b%w,ut=K%z.boundary,rt=K+ut;b+=ut,rt!==0&&w-rt<z.storage&&(b+=w-rt),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=z.storage}}}const A=b%w;return A>0&&(b+=w-A),x.__size=b,x.__cache={},this}function v(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const b=r.indexOf(E.__bindingPointIndex);r.splice(b,1),s.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function f(){for(const x in n)s.deleteBuffer(n[x]);r=[],n={},a={}}return{bind:l,update:c,dispose:f}}const J0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function Q0(){return ui===null&&(ui=new qc(J0,16,16,kn,Qe),ui.name="DFG_LUT",ui.minFilter=Ne,ui.magFilter=Ne,ui.wrapS=Ti,ui.wrapT=Ti,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class tg{constructor(t={}){const{canvas:e=Yh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=ze}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const v=p,m=new Set([Vo,ko,zo]),f=new Set([ze,_i,vs,xs,Fo,Oo]),x=new Uint32Array(4),E=new Int32Array(4);let b=null,w=null;const A=[],C=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let S=!1;this._outputColorSpace=Ye;let R=0,F=0,B=null,X=-1,H=null;const G=new pe,z=new pe;let K=null;const ut=new vt(0);let rt=0,dt=e.width,kt=e.height,Ot=1,fe=null,de=null;const j=new pe(0,0,dt,kt),Z=new pe(0,0,dt,kt);let mt=!1;const It=new jo;let xt=!1,Xt=!1;const Ae=new Kt,Wt=new P,Jt=new pe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ve(){return B===null?Ot:1}let D=i;function xe(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),D===null){const N="webgl2";if(D=xe(N,M),D===null)throw xe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Gt("WebGLRenderer: "+M.message),M}let qt,le,Mt,T,_,U,$,Y,W,bt,it,yt,Rt,Q,st,_t,St,nt,zt,I,ht,tt,ft,J;function q(){qt=new Qp(D),qt.init(),tt=new W0(D,qt),le=new Wp(D,qt,t,tt),Mt=new G0(D,qt),le.reversedDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),T=new im(D),_=new A0,U=new H0(D,qt,Mt,_,le,tt,T),$=new $p(y),Y=new Jp(y),W=new ad(D),ft=new Gp(D,W),bt=new tm(D,W,T,ft),it=new sm(D,bt,W,T),zt=new nm(D,le,U),_t=new Xp(_),yt=new T0(y,$,Y,qt,le,ft,_t),Rt=new K0(y,_),Q=new P0,st=new N0(qt),nt=new Vp(y,$,Y,Mt,it,g,l),St=new k0(y,it,le),J=new Z0(D,T,le,Mt),I=new Hp(D,qt,T),ht=new em(D,qt,T),T.programs=yt.programs,y.capabilities=le,y.extensions=qt,y.properties=_,y.renderLists=Q,y.shadowMap=St,y.state=Mt,y.info=T}q(),v!==ze&&(L=new rm(v,e.width,e.height,n,a));const et=new q0(y,D);this.xr=et,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(M){M!==void 0&&(Ot=M,this.setSize(dt,kt,!1))},this.getSize=function(M){return M.set(dt,kt)},this.setSize=function(M,N,V=!0){if(et.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=M,kt=N,e.width=Math.floor(M*Ot),e.height=Math.floor(N*Ot),V===!0&&(e.style.width=M+"px",e.style.height=N+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(dt*Ot,kt*Ot).floor()},this.setDrawingBufferSize=function(M,N,V){dt=M,kt=N,Ot=V,e.width=Math.floor(M*V),e.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(v===ze){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,N,V,k){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,N,V,k),Mt.viewport(G.copy(j).multiplyScalar(Ot).round())},this.getScissor=function(M){return M.copy(Z)},this.setScissor=function(M,N,V,k){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,N,V,k),Mt.scissor(z.copy(Z).multiplyScalar(Ot).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){Mt.setScissorTest(mt=M)},this.setOpaqueSort=function(M){fe=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let k=0;if(M){let O=!1;if(B!==null){const at=B.texture.format;O=m.has(at)}if(O){const at=B.texture.type,pt=f.has(at),ct=nt.getClearColor(),gt=nt.getClearAlpha(),Et=ct.r,Ct=ct.g,wt=ct.b;pt?(x[0]=Et,x[1]=Ct,x[2]=wt,x[3]=gt,D.clearBufferuiv(D.COLOR,0,x)):(E[0]=Et,E[1]=Ct,E[2]=wt,E[3]=gt,D.clearBufferiv(D.COLOR,0,E))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),nt.dispose(),Q.dispose(),st.dispose(),_.dispose(),$.dispose(),Y.dispose(),it.dispose(),ft.dispose(),J.dispose(),yt.dispose(),et.dispose(),et.removeEventListener("sessionstart",rl),et.removeEventListener("sessionend",ol),$i.stop()};function Dt(M){M.preventDefault(),Ma("WebGLRenderer: Context Lost."),S=!0}function ce(){Ma("WebGLRenderer: Context Restored."),S=!1;const M=T.autoReset,N=St.enabled,V=St.autoUpdate,k=St.needsUpdate,O=St.type;q(),T.autoReset=M,St.enabled=N,St.autoUpdate=V,St.needsUpdate=k,St.type=O}function Qt(M){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function hi(M){const N=M.target;N.removeEventListener("dispose",hi),xi(N)}function xi(M){ch(M),_.remove(M)}function ch(M){const N=_.get(M).programs;N!==void 0&&(N.forEach(function(V){yt.releaseProgram(V)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,k,O,at){N===null&&(N=se);const pt=O.isMesh&&O.matrixWorld.determinant()<0,ct=uh(M,N,V,k,O);Mt.setMaterial(k,pt);let gt=V.index,Et=1;if(k.wireframe===!0){if(gt=bt.getWireframeAttribute(V),gt===void 0)return;Et=2}const Ct=V.drawRange,wt=V.attributes.position;let Vt=Ct.start*Et,ie=(Ct.start+Ct.count)*Et;at!==null&&(Vt=Math.max(Vt,at.start*Et),ie=Math.min(ie,(at.start+at.count)*Et)),gt!==null?(Vt=Math.max(Vt,0),ie=Math.min(ie,gt.count)):wt!=null&&(Vt=Math.max(Vt,0),ie=Math.min(ie,wt.count));const me=ie-Vt;if(me<0||me===1/0)return;ft.setup(O,k,ct,V,gt);let ge,ae=I;if(gt!==null&&(ge=W.get(gt),ae=ht,ae.setIndex(ge)),O.isMesh)k.wireframe===!0?(Mt.setLineWidth(k.wireframeLinewidth*ve()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(O.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),Mt.setLineWidth(Tt*ve()),O.isLineSegments?ae.setMode(D.LINES):O.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else O.isPoints?ae.setMode(D.POINTS):O.isSprite&&ae.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ms("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ae.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Tt=O._multiDrawStarts,te=O._multiDrawCounts,$t=O._multiDrawCount,Xe=gt?W.get(gt).bytesPerElement:1,dn=_.get(k).currentProgram.getUniforms();for(let $e=0;$e<$t;$e++)dn.setValue(D,"_gl_DrawID",$e),ae.render(Tt[$e]/Xe,te[$e])}else if(O.isInstancedMesh)ae.renderInstances(Vt,me,O.count);else if(V.isInstancedBufferGeometry){const Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,te=Math.min(V.instanceCount,Tt);ae.renderInstances(Vt,me,te)}else ae.render(Vt,me)};function al(M,N,V){M.transparent===!0&&M.side===Je&&M.forceSinglePass===!1?(M.side=Ee,M.needsUpdate=!0,Is(M,N,V),M.side=Hi,M.needsUpdate=!0,Is(M,N,V),M.side=Je):Is(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),w=st.get(V),w.init(N),C.push(w),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights();const k=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const at=O.material;if(at)if(Array.isArray(at))for(let pt=0;pt<at.length;pt++){const ct=at[pt];al(ct,V,O),k.add(ct)}else al(at,V,O),k.add(at)}),w=C.pop(),k},this.compileAsync=function(M,N,V=null){const k=this.compile(M,N,V);return new Promise(O=>{function at(){if(k.forEach(function(pt){_.get(pt).currentProgram.isReady()&&k.delete(pt)}),k.size===0){O(M);return}setTimeout(at,10)}qt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Fa=null;function hh(M){Fa&&Fa(M)}function rl(){$i.stop()}function ol(){$i.start()}const $i=new Jc;$i.setAnimationLoop(hh),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(M){Fa=M,et.setAnimationLoop(M),M===null?$i.stop():$i.start()},et.addEventListener("sessionstart",rl),et.addEventListener("sessionend",ol),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const V=et.enabled===!0&&et.isPresenting===!0,k=L!==null&&(B===null||V)&&L.begin(y,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,B),w=st.get(M,C.length),w.init(N),C.push(w),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),It.setFromProjectionMatrix(Ae,fi,N.reversedDepth),Xt=this.localClippingEnabled,xt=_t.init(this.clippingPlanes,Xt),b=Q.get(M,A.length),b.init(),A.push(b),et.enabled===!0&&et.isPresenting===!0){const pt=y.xr.getDepthSensingMesh();pt!==null&&Oa(pt,N,-1/0,y.sortObjects)}Oa(M,N,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(fe,de),Bt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Bt&&nt.addToRenderList(b,M),this.info.render.frame++,xt===!0&&_t.beginShadows();const O=w.state.shadowsArray;if(St.render(O,M,N),xt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&L.hasRenderPass())===!1){const pt=b.opaque,ct=b.transmissive;if(w.setupLights(),N.isArrayCamera){const gt=N.cameras;if(ct.length>0)for(let Et=0,Ct=gt.length;Et<Ct;Et++){const wt=gt[Et];cl(pt,ct,M,wt)}Bt&&nt.render(M);for(let Et=0,Ct=gt.length;Et<Ct;Et++){const wt=gt[Et];ll(b,M,wt,wt.viewport)}}else ct.length>0&&cl(pt,ct,M,N),Bt&&nt.render(M),ll(b,M,N)}B!==null&&F===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),k&&L.end(y),M.isScene===!0&&M.onAfterRender(y,M,N),ft.resetDefaultState(),X=-1,H=null,C.pop(),C.length>0?(w=C[C.length-1],xt===!0&&_t.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function Oa(M,N,V,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||It.intersectsSprite(M)){k&&Jt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);const pt=it.update(M),ct=M.material;ct.visible&&b.push(M,pt,ct,V,Jt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||It.intersectsObject(M))){const pt=it.update(M),ct=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Jt.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Jt.copy(pt.boundingSphere.center)),Jt.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(ct)){const gt=pt.groups;for(let Et=0,Ct=gt.length;Et<Ct;Et++){const wt=gt[Et],Vt=ct[wt.materialIndex];Vt&&Vt.visible&&b.push(M,pt,Vt,V,Jt.z,wt)}}else ct.visible&&b.push(M,pt,ct,V,Jt.z,null)}}const at=M.children;for(let pt=0,ct=at.length;pt<ct;pt++)Oa(at[pt],N,V,k)}function ll(M,N,V,k){const{opaque:O,transmissive:at,transparent:pt}=M;w.setupLightsView(V),xt===!0&&_t.setGlobalState(y.clippingPlanes,V),k&&Mt.viewport(G.copy(k)),O.length>0&&Ls(O,N,V),at.length>0&&Ls(at,N,V),pt.length>0&&Ls(pt,N,V),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function cl(M,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const Vt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new We(1,1,{generateMipmaps:!0,type:Vt?Qe:ze,minFilter:sn,samples:le.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}const at=w.state.transmissionRenderTarget[k.id],pt=k.viewport||G;at.setSize(pt.z*y.transmissionResolutionScale,pt.w*y.transmissionResolutionScale);const ct=y.getRenderTarget(),gt=y.getActiveCubeFace(),Et=y.getActiveMipmapLevel();y.setRenderTarget(at),y.getClearColor(ut),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),Bt&&nt.render(V);const Ct=y.toneMapping;y.toneMapping=mi;const wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),xt===!0&&_t.setGlobalState(y.clippingPlanes,k),Ls(M,V,k),U.updateMultisampleRenderTarget(at),U.updateRenderTargetMipmap(at),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ie=0,me=N.length;ie<me;ie++){const ge=N[ie],{object:ae,geometry:Tt,material:te,group:$t}=ge;if(te.side===Je&&ae.layers.test(k.layers)){const Xe=te.side;te.side=Ee,te.needsUpdate=!0,hl(ae,V,k,Tt,te,$t),te.side=Xe,te.needsUpdate=!0,Vt=!0}}Vt===!0&&(U.updateMultisampleRenderTarget(at),U.updateRenderTargetMipmap(at))}y.setRenderTarget(ct,gt,Et),y.setClearColor(ut,rt),wt!==void 0&&(k.viewport=wt),y.toneMapping=Ct}function Ls(M,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let O=0,at=M.length;O<at;O++){const pt=M[O],{object:ct,geometry:gt,group:Et}=pt;let Ct=pt.material;Ct.allowOverride===!0&&k!==null&&(Ct=k),ct.layers.test(V.layers)&&hl(ct,N,V,gt,Ct,Et)}}function hl(M,N,V,k,O,at){M.onBeforeRender(y,N,V,k,O,at),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,N,V,k,M,at),O.transparent===!0&&O.side===Je&&O.forceSinglePass===!1?(O.side=Ee,O.needsUpdate=!0,y.renderBufferDirect(V,N,k,O,M,at),O.side=Hi,O.needsUpdate=!0,y.renderBufferDirect(V,N,k,O,M,at),O.side=Je):y.renderBufferDirect(V,N,k,O,M,at),M.onAfterRender(y,N,V,k,O,at)}function Is(M,N,V){N.isScene!==!0&&(N=se);const k=_.get(M),O=w.state.lights,at=w.state.shadowsArray,pt=O.state.version,ct=yt.getParameters(M,O.state,at,N,V),gt=yt.getProgramCacheKey(ct);let Et=k.programs;k.environment=M.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(M.isMeshStandardMaterial?Y:$).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Et===void 0&&(M.addEventListener("dispose",hi),Et=new Map,k.programs=Et);let Ct=Et.get(gt);if(Ct!==void 0){if(k.currentProgram===Ct&&k.lightsStateVersion===pt)return dl(M,ct),Ct}else ct.uniforms=yt.getUniforms(M),M.onBeforeCompile(ct,y),Ct=yt.acquireProgram(ct,gt),Et.set(gt,Ct),k.uniforms=ct.uniforms;const wt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=_t.uniform),dl(M,ct),k.needsLights=fh(M),k.lightsStateVersion=pt,k.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ct,k.uniformsList=null,Ct}function ul(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=ga.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function dl(M,N){const V=_.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function uh(M,N,V,k,O){N.isScene!==!0&&(N=se),U.resetTextureUnits();const at=N.fog,pt=k.isMeshStandardMaterial?N.environment:null,ct=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Vn,gt=(k.isMeshStandardMaterial?Y:$).get(k.envMap||pt),Et=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ct=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!V.morphAttributes.position,Vt=!!V.morphAttributes.normal,ie=!!V.morphAttributes.color;let me=mi;k.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(me=y.toneMapping);const ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=ge!==void 0?ge.length:0,Tt=_.get(k),te=w.state.lights;if(xt===!0&&(Xt===!0||M!==H)){const Fe=M===H&&k.id===X;_t.setState(k,M,Fe)}let $t=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==te.state.version||Tt.outputColorSpace!==ct||O.isBatchedMesh&&Tt.batching===!1||!O.isBatchedMesh&&Tt.batching===!0||O.isBatchedMesh&&Tt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Tt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Tt.instancing===!1||!O.isInstancedMesh&&Tt.instancing===!0||O.isSkinnedMesh&&Tt.skinning===!1||!O.isSkinnedMesh&&Tt.skinning===!0||O.isInstancedMesh&&Tt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Tt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Tt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Tt.instancingMorph===!1&&O.morphTexture!==null||Tt.envMap!==gt||k.fog===!0&&Tt.fog!==at||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==_t.numPlanes||Tt.numIntersection!==_t.numIntersection)||Tt.vertexAlphas!==Et||Tt.vertexTangents!==Ct||Tt.morphTargets!==wt||Tt.morphNormals!==Vt||Tt.morphColors!==ie||Tt.toneMapping!==me||Tt.morphTargetsCount!==ae)&&($t=!0):($t=!0,Tt.__version=k.version);let Xe=Tt.currentProgram;$t===!0&&(Xe=Is(k,N,O));let dn=!1,$e=!1,Zn=!1;const he=Xe.getUniforms(),Ve=Tt.uniforms;if(Mt.useProgram(Xe.program)&&(dn=!0,$e=!0,Zn=!0),k.id!==X&&(X=k.id,$e=!0),dn||H!==M){Mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(D,"projectionMatrix",M.projectionMatrix),he.setValue(D,"viewMatrix",M.matrixWorldInverse);const Ge=he.map.cameraPosition;Ge!==void 0&&Ge.setValue(D,Wt.setFromMatrixPosition(M.matrixWorld)),le.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,$e=!0,Zn=!0)}if(Tt.needsLights&&(te.state.directionalShadowMap.length>0&&he.setValue(D,"directionalShadowMap",te.state.directionalShadowMap,U),te.state.spotShadowMap.length>0&&he.setValue(D,"spotShadowMap",te.state.spotShadowMap,U),te.state.pointShadowMap.length>0&&he.setValue(D,"pointShadowMap",te.state.pointShadowMap,U)),O.isSkinnedMesh){he.setOptional(D,O,"bindMatrix"),he.setOptional(D,O,"bindMatrixInverse");const Fe=O.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),he.setValue(D,"boneTexture",Fe.boneTexture,U))}O.isBatchedMesh&&(he.setOptional(D,O,"batchingTexture"),he.setValue(D,"batchingTexture",O._matricesTexture,U),he.setOptional(D,O,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",O._indirectTexture,U),he.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",O._colorsTexture,U));const ei=V.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&zt.update(O,V,Xe),($e||Tt.receiveShadow!==O.receiveShadow)&&(Tt.receiveShadow=O.receiveShadow,he.setValue(D,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ve.envMap.value=gt,Ve.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Ve.envMapIntensity.value=N.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Q0()),$e&&(he.setValue(D,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&dh(Ve,Zn),at&&k.fog===!0&&Rt.refreshFogUniforms(Ve,at),Rt.refreshMaterialUniforms(Ve,k,Ot,kt,w.state.transmissionRenderTarget[M.id]),ga.upload(D,ul(Tt),Ve,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ga.upload(D,ul(Tt),Ve,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(D,"center",O.center),he.setValue(D,"modelViewMatrix",O.modelViewMatrix),he.setValue(D,"normalMatrix",O.normalMatrix),he.setValue(D,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fe=k.uniformsGroups;for(let Ge=0,Ba=Fe.length;Ge<Ba;Ge++){const ji=Fe[Ge];J.update(ji,Xe),J.bind(ji,Xe)}}return Xe}function dh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function fh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,N,V){const k=_.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=N,_.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const V=_.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const ph=D.createFramebuffer();this.setRenderTarget=function(M,N=0,V=0){B=M,R=N,F=V;let k=null,O=!1,at=!1;if(M){const ct=_.get(M);if(ct.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(D.FRAMEBUFFER,ct.__webglFramebuffer),G.copy(M.viewport),z.copy(M.scissor),K=M.scissorTest,Mt.viewport(G),Mt.scissor(z),Mt.setScissorTest(K),X=-1;return}else if(ct.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(ct.__hasExternalTextures)U.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ct=M.depthTexture;if(ct.__boundDepthTexture!==Ct){if(Ct!==null&&_.has(Ct)&&(M.width!==Ct.image.width||M.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const gt=M.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(at=!0);const Et=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Et[N])?k=Et[N][V]:k=Et[N],O=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?k=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Et)?k=Et[V]:k=Et,G.copy(M.viewport),z.copy(M.scissor),K=M.scissorTest}else G.copy(j).multiplyScalar(Ot).floor(),z.copy(Z).multiplyScalar(Ot).floor(),K=mt;if(V!==0&&(k=ph),Mt.bindFramebuffer(D.FRAMEBUFFER,k)&&Mt.drawBuffers(M,k),Mt.viewport(G),Mt.scissor(z),Mt.setScissorTest(K),O){const ct=_.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ct.__webglTexture,V)}else if(at){const ct=N;for(let gt=0;gt<M.textures.length;gt++){const Et=_.get(M.textures[gt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+gt,Et.__webglTexture,V,ct)}}else if(M!==null&&V!==0){const ct=_.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ct.__webglTexture,V)}X=-1},this.readRenderTargetPixels=function(M,N,V,k,O,at,pt,ct=0){if(!(M&&M.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt){Mt.bindFramebuffer(D.FRAMEBUFFER,gt);try{const Et=M.textures[ct],Ct=Et.format,wt=Et.type;if(!le.textureFormatReadable(Ct)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(wt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&V>=0&&V<=M.height-O&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ct),D.readPixels(N,V,k,O,tt.convert(Ct),tt.convert(wt),at))}finally{const Et=B!==null?_.get(B).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,k,O,at,pt,ct=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt)if(N>=0&&N<=M.width-k&&V>=0&&V<=M.height-O){Mt.bindFramebuffer(D.FRAMEBUFFER,gt);const Et=M.textures[ct],Ct=Et.format,wt=Et.type;if(!le.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ct),D.readPixels(N,V,k,O,tt.convert(Ct),tt.convert(wt),0);const ie=B!==null?_.get(B).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,ie);const me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kh(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Vt),D.deleteSync(me),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){const k=Math.pow(2,-V),O=Math.floor(M.image.width*k),at=Math.floor(M.image.height*k),pt=N!==null?N.x:0,ct=N!==null?N.y:0;U.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,pt,ct,O,at),Mt.unbindTexture()};const mh=D.createFramebuffer(),gh=D.createFramebuffer();this.copyTextureToTexture=function(M,N,V=null,k=null,O=0,at=null){at===null&&(O!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=O,O=0):at=0);let pt,ct,gt,Et,Ct,wt,Vt,ie,me;const ge=M.isCompressedTexture?M.mipmaps[at]:M.image;if(V!==null)pt=V.max.x-V.min.x,ct=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,Ct=V.min.y,wt=V.isBox3?V.min.z:0;else{const ei=Math.pow(2,-O);pt=Math.floor(ge.width*ei),ct=Math.floor(ge.height*ei),M.isDataArrayTexture?gt=ge.depth:M.isData3DTexture?gt=Math.floor(ge.depth*ei):gt=1,Et=0,Ct=0,wt=0}k!==null?(Vt=k.x,ie=k.y,me=k.z):(Vt=0,ie=0,me=0);const ae=tt.convert(N.format),Tt=tt.convert(N.type);let te;N.isData3DTexture?(U.setTexture3D(N,0),te=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),te=D.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const $t=D.getParameter(D.UNPACK_ROW_LENGTH),Xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),$e=D.getParameter(D.UNPACK_SKIP_ROWS),Zn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wt);const he=M.isDataArrayTexture||M.isData3DTexture,Ve=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const ei=_.get(M),Fe=_.get(N),Ge=_.get(ei.__renderTarget),Ba=_.get(Fe.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let ji=0;ji<gt;ji++)he&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_.get(M).__webglTexture,O,wt+ji),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_.get(N).__webglTexture,at,me+ji)),D.blitFramebuffer(Et,Ct,pt,ct,Vt,ie,pt,ct,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||_.has(M)){const ei=_.get(M),Fe=_.get(N);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,mh),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,gh);for(let Ge=0;Ge<gt;Ge++)he?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ei.__webglTexture,O,wt+Ge):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ei.__webglTexture,O),Ve?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,at,me+Ge):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,at),O!==0?D.blitFramebuffer(Et,Ct,pt,ct,Vt,ie,pt,ct,D.COLOR_BUFFER_BIT,D.NEAREST):Ve?D.copyTexSubImage3D(te,at,Vt,ie,me+Ge,Et,Ct,pt,ct):D.copyTexSubImage2D(te,at,Vt,ie,Et,Ct,pt,ct);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ve?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(te,at,Vt,ie,me,pt,ct,gt,ae,Tt,ge.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(te,at,Vt,ie,me,pt,ct,gt,ae,ge.data):D.texSubImage3D(te,at,Vt,ie,me,pt,ct,gt,ae,Tt,ge):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,Vt,ie,pt,ct,ae,Tt,ge.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,Vt,ie,ge.width,ge.height,ae,ge.data):D.texSubImage2D(D.TEXTURE_2D,at,Vt,ie,pt,ct,ae,Tt,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$e),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zn),at===0&&N.generateMipmaps&&D.generateMipmap(te),Mt.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){R=0,F=0,B=null,Mt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}}const _a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Kn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eg=new el(-1,1,1,-1,0,1);class ig extends Zt{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const ng=new ig;class il{constructor(t){this._mesh=new jt(ng,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,eg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class sg extends Kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ue?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=bs.clone(t.uniforms),this.material=new ue({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new il(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mc extends Kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class ag extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class rg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sg(_a),this.copyPass.material.blending=pi,this.clock=new Zc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,a=this.passes.length;n<a;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mc!==void 0&&(r instanceof Mc?i=!0:r instanceof ag&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class og extends Kn{constructor(t,e,i=null,n=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const lg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class jn extends Kn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new We(a,r,{type:Qe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new We(a,r,{type:Qe});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new We(a,r,{type:Qe});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}const o=lg;this.highPassUniforms=bs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ue({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bs.clone(_a.uniforms),this.blendMaterial=new ue({uniforms:this.copyUniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,premultipliedAlpha:!0,blending:Me,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Pi,this._fsQuad=new il(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,n),this.renderTargetsVertical[a].setSize(i,n),this.separableBlurMaterials[a].uniforms.invSize.value=new lt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=jn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=jn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new ue({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ue({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}jn.BlurDirectionX=new lt(1,0);jn.BlurDirectionY=new lt(0,1);const ca={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class cg extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=bs.clone(ca.uniforms),this.material=new gs({name:ca.name,uniforms:this.uniforms,vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader}),this._fsQuad=new il(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class As extends jt{constructor(){super(As.Geometry,new Pi({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new P,e=new P,i=new Wl(16,16),n=new Wl(16,16);let a=ze;const r=As.Geometry,o=new gs({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new gs({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new jt(r,o),h=[],u=nn.Shader,d=new gs({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:n},color:{value:new vt(16777215)},scale:{value:new lt},screenPosition:{value:new P}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Me,transparent:!0,depthWrite:!1}),p=new jt(r,d);this.addElement=function(x){h.push(x)};const g=new lt,v=new lt,m=new id,f=new pe;this.onBeforeRender=function(x,E,b){x.getCurrentViewport(f);const w=x.getRenderTarget(),A=w!==null?w.texture.type:ze;a!==A&&(i.dispose(),n.dispose(),i.type=n.type=A,a=A);const C=f.w/f.z,L=f.z/2,y=f.w/2;let S=16/f.w;if(g.set(S*C,S),m.min.set(f.x,f.y),m.max.set(f.x+(f.z-16),f.y+(f.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(b.matrixWorldInverse),!(e.z>0)&&(t.copy(e).applyMatrix4(b.projectionMatrix),v.x=f.x+t.x*L+L-8,v.y=f.y+t.y*y+y-8,m.containsPoint(v))){x.copyFramebufferToTexture(i,v);let R=o.uniforms;R.scale.value=g,R.screenPosition.value=t,x.renderBufferDirect(b,null,r,o,c,null),x.copyFramebufferToTexture(n,v),R=l.uniforms,R.scale.value=g,R.screenPosition.value=t,x.renderBufferDirect(b,null,r,l,c,null);const F=-t.x*2,B=-t.y*2;for(let X=0,H=h.length;X<H;X++){const G=h[X],z=d.uniforms;z.color.value.copy(G.color),z.map.value=G.texture,z.screenPosition.value.x=t.x+F*G.distance,z.screenPosition.value.y=t.y+B*G.distance,S=G.size/f.w;const K=f.w/f.z;z.scale.value.set(S*K,S),d.uniformsNeedUpdate=!0,x.renderBufferDirect(b,null,r,d,p,null)}}},this.dispose=function(){o.dispose(),l.dispose(),d.dispose(),i.dispose(),n.dispose();for(let x=0,E=h.length;x<E;x++)h[x].texture.dispose()}}}class nn{constructor(t,e=1,i=0,n=new vt(16777215)){this.texture=t,this.size=e,this.distance=i,this.color=n}}nn.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};As.Geometry=function(){const s=new Zt,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new $c(t,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new Hn(e,3,0,!1)),s.setAttribute("uv",new Hn(e,2,3,!1)),s}();const Lt=10,At=.8,Le="https://www.solarsystemscope.com/textures/download",hg={name:"Sun",radius:5*At,color:16776960,emissiveColor:16755200,textureUrl:`${Le}/2k_sun.jpg`,facts:{type:"G-type Main-Sequence Star",diameter:"1,392,684 km",mass:"1.989 × 10³⁰ kg",temperature:"5,778 K (surface)",age:"4.6 billion years",composition:"73% Hydrogen, 25% Helium",gravity:"274 m/s²",escapeVelocity:"617.7 km/s"}},ug=[{name:"Mercury",radius:.38*At,distance:.39*Lt,orbitalPeriod:.24,rotationPeriod:58.6,axialTilt:.03,color:5921370,albedo:.068,textureUrl:`${Le}/2k_mercury.jpg`,atmosphere:null,moons:[],earthComparison:{sizeRatio:.383,gravityRatio:.38,massRatio:.055},facts:{type:"Terrestrial Planet",diameter:"4,879 km",dayLength:"176 Earth days",yearLength:"88 Earth days",moons:0,temperature:"-180°C to 430°C",atmosphere:"Minimal - trace amounts of oxygen, sodium, hydrogen",gravity:"3.7 m/s²",escapeVelocity:"4.3 km/s"}},{name:"Venus",radius:.95*At,distance:.72*Lt,orbitalPeriod:.62,rotationPeriod:-243,axialTilt:177.4,color:16775388,albedo:.77,textureUrl:`${Le}/2k_venus_surface.jpg`,atmosphereUrl:`${Le}/2k_venus_atmosphere.jpg`,atmosphere:{color:16764006,opacity:.6,scale:1.08},moons:[],earthComparison:{sizeRatio:.949,gravityRatio:.91,massRatio:.815},facts:{type:"Terrestrial Planet",diameter:"12,104 km",dayLength:"243 Earth days",yearLength:"225 Earth days",moons:0,temperature:"465°C average",atmosphere:"96% Carbon Dioxide, 3.5% Nitrogen",gravity:"8.87 m/s²",escapeVelocity:"10.36 km/s"}},{name:"Earth",radius:1*At,distance:1*Lt,orbitalPeriod:1,rotationPeriod:1,axialTilt:23.4,color:4286945,albedo:.3,textureUrl:`${Le}/2k_earth_daymap.jpg`,nightTextureUrl:`${Le}/2k_earth_nightmap.jpg`,normalMapUrl:`${Le}/2k_earth_normal_map.jpg`,specularMapUrl:`${Le}/2k_earth_specular_map.jpg`,cloudsUrl:`${Le}/2k_earth_clouds.jpg`,atmosphere:{color:6724095,opacity:.4,scale:1.025},moons:["Moon"],earthComparison:{sizeRatio:1,gravityRatio:1,massRatio:1},facts:{type:"Terrestrial Planet",diameter:"12,742 km",dayLength:"24 hours",yearLength:"365.25 days",moons:1,temperature:"-88°C to 58°C",atmosphere:"78% Nitrogen, 21% Oxygen, 1% Other",gravity:"9.81 m/s²",escapeVelocity:"11.19 km/s"}},{name:"Mars",radius:.53*At,distance:1.52*Lt,orbitalPeriod:1.88,rotationPeriod:1.03,axialTilt:25.2,color:13458524,albedo:.25,textureUrl:`${Le}/2k_mars.jpg`,normalMapUrl:"https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars_1k_normal.jpg",atmosphere:{color:16737860,opacity:.15,scale:1.02},moons:["Phobos","Deimos"],earthComparison:{sizeRatio:.532,gravityRatio:.38,massRatio:.107},facts:{type:"Terrestrial Planet",diameter:"6,779 km",dayLength:"24.6 hours",yearLength:"687 Earth days",moons:2,temperature:"-87°C to -5°C",atmosphere:"95% Carbon Dioxide, 2.7% Nitrogen",gravity:"3.71 m/s²",escapeVelocity:"5.03 km/s"}},{name:"Jupiter",radius:2.5*At,distance:5.2*Lt,orbitalPeriod:11.86,rotationPeriod:.41,axialTilt:3.1,color:13935988,albedo:.503,textureUrl:`${Le}/2k_jupiter.jpg`,atmosphere:{color:16768426,opacity:.2,scale:1.02},moons:["Io","Europa","Ganymede","Callisto"],hasRings:!0,ringType:"jupiter",ringBands:[{name:"Halo",inner:1.29,outer:1.71,color:8952234,opacity:.04},{name:"Main Ring",inner:1.71,outer:1.8,color:11171686,opacity:.08}],earthComparison:{sizeRatio:11.21,gravityRatio:2.53,massRatio:317.8},facts:{type:"Gas Giant",diameter:"139,820 km",dayLength:"9.9 hours",yearLength:"11.9 Earth years",moons:95,temperature:"-110°C (cloud tops)",atmosphere:"90% Hydrogen, 10% Helium",rings:"Faint dusty rings (discovered 1979)",gravity:"24.79 m/s²",escapeVelocity:"59.5 km/s"}},{name:"Saturn",radius:2.2*At,distance:9.5*Lt,orbitalPeriod:29.46,rotationPeriod:.45,axialTilt:26.7,color:16045453,albedo:.342,textureUrl:`${Le}/2k_saturn.jpg`,hasRings:!0,ringType:"saturn",ringBands:[{name:"D Ring",inner:1.11,outer:1.24,color:13421755,opacity:.15},{name:"C Ring",inner:1.24,outer:1.53,color:12303274,opacity:.35},{name:"B Ring",inner:1.53,outer:1.95,color:15654348,opacity:.85},{name:"Cassini Division",inner:1.95,outer:2.03,color:2236962,opacity:.05},{name:"A Ring",inner:2.03,outer:2.27,color:14535867,opacity:.7},{name:"F Ring",inner:2.32,outer:2.35,color:13417386,opacity:.25}],atmosphere:{color:16772812,opacity:.15,scale:1.02},moons:["Mimas","Enceladus","Tethys","Dione","Rhea","Titan","Iapetus"],earthComparison:{sizeRatio:9.45,gravityRatio:1.07,massRatio:95.16},facts:{type:"Gas Giant",diameter:"116,460 km",dayLength:"10.7 hours",yearLength:"29.5 Earth years",moons:146,temperature:"-140°C (cloud tops)",atmosphere:"96% Hydrogen, 3% Helium",rings:"Made of ice and rock particles",gravity:"10.44 m/s²",escapeVelocity:"35.5 km/s"}},{name:"Uranus",radius:1.6*At,distance:19.2*Lt,orbitalPeriod:84.01,rotationPeriod:-.72,axialTilt:97.8,color:11525109,albedo:.349,textureUrl:`${Le}/2k_uranus.jpg`,hasRings:!0,ringType:"uranus",ringBands:[{name:"Inner Rings (6,5,4,α,β)",inner:1.64,outer:1.75,color:3355443,opacity:.2},{name:"Inner Rings (η,γ,δ)",inner:1.75,outer:1.89,color:3815994,opacity:.25},{name:"Epsilon Ring",inner:1.98,outer:2.02,color:4210752,opacity:.35},{name:"Mu Ring",inner:3.75,outer:3.9,color:5596808,opacity:.08}],atmosphere:{color:10083839,opacity:.25,scale:1.03},moons:["Miranda","Ariel","Umbriel","Titania","Oberon"],earthComparison:{sizeRatio:4.01,gravityRatio:.89,massRatio:14.54},facts:{type:"Ice Giant",diameter:"50,724 km",dayLength:"17.2 hours",yearLength:"84 Earth years",moons:28,temperature:"-195°C",atmosphere:"83% Hydrogen, 15% Helium, 2% Methane",rings:"Faint ring system (13 known rings)",gravity:"8.69 m/s²",escapeVelocity:"21.3 km/s"}},{name:"Neptune",radius:1.5*At,distance:30.1*Lt,orbitalPeriod:164.8,rotationPeriod:.67,axialTilt:28.3,color:8308963,albedo:.29,textureUrl:`${Le}/2k_neptune.jpg`,hasRings:!0,ringType:"neptune",ringBands:[{name:"Galle Ring",inner:1.66,outer:1.74,color:5588019,opacity:.06},{name:"Le Verrier Ring",inner:2.13,outer:2.17,color:6706500,opacity:.1},{name:"Adams Ring",inner:2.52,outer:2.56,color:6706500,opacity:.12}],atmosphere:{color:4482815,opacity:.3,scale:1.03},moons:["Proteus","Triton","Nereid"],earthComparison:{sizeRatio:3.88,gravityRatio:1.14,massRatio:17.15},facts:{type:"Ice Giant",diameter:"49,244 km",dayLength:"16.1 hours",yearLength:"165 Earth years",moons:16,temperature:"-200°C",atmosphere:"80% Hydrogen, 19% Helium, 1% Methane",gravity:"11.15 m/s²",escapeVelocity:"23.5 km/s"}}],dg={name:"Moon",parent:"Earth",radius:.27*At,distance:2.5,orbitalPeriod:.0748,rotationPeriod:27.3,axialTilt:6.7,color:11184810,textureUrl:`${Le}/2k_moon.jpg`,facts:{type:"Natural Satellite",diameter:"3,474 km",orbitalPeriod:"27.3 Earth days",distanceFromEarth:"384,400 km",temperature:"-173°C to 127°C",atmosphere:"None (exosphere only)",gravity:"1.62 m/s²"}},Sc={Phobos:{name:"Phobos",parent:"Mars",radius:.08*At,distance:1.2,semiMajorAxisKm:9380,orbitalPeriod:.319,eccentricity:.015,inclination:1.1,realRadiusKm:11,color:9075306,facts:{type:"Natural Satellite",diameter:"22.2 km (irregular)",orbitalPeriod:"7.66 hours",distanceFromMars:"9,380 km",feature:"Orbits faster than Mars rotates",discoveredBy:"Asaph Hall, 1877"}},Deimos:{name:"Deimos",parent:"Mars",radius:.05*At,distance:2,semiMajorAxisKm:23460,orbitalPeriod:1.263,eccentricity:0,inclination:1.8,realRadiusKm:6,color:10127994,facts:{type:"Natural Satellite",diameter:"12.4 km (irregular)",orbitalPeriod:"30.3 hours",distanceFromMars:"23,460 km",feature:"Smallest known moon in solar system",discoveredBy:"Asaph Hall, 1877"}},Io:{name:"Io",parent:"Jupiter",radius:.3*At,distance:3.5,semiMajorAxisKm:421800,orbitalPeriod:1.769,eccentricity:.004,inclination:0,realRadiusKm:1822,color:16777028,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",facts:{type:"Natural Satellite",diameter:"3,643 km",orbitalPeriod:"1.77 days",distanceFromJupiter:"421,800 km",feature:"Most volcanically active body in solar system",volcanism:"400+ active volcanoes",discoveredBy:"Galileo Galilei, 1610"}},Europa:{name:"Europa",parent:"Jupiter",radius:.26*At,distance:5,semiMajorAxisKm:671100,orbitalPeriod:3.551,eccentricity:.009,inclination:.5,realRadiusKm:1561,color:13413e3,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg",facts:{type:"Natural Satellite",diameter:"3,122 km",orbitalPeriod:"3.55 days",distanceFromJupiter:"671,100 km",feature:"Subsurface ocean beneath ice shell",surface:"Smoothest surface in solar system",discoveredBy:"Galileo Galilei, 1610"}},Ganymede:{name:"Ganymede",parent:"Jupiter",radius:.42*At,distance:7,semiMajorAxisKm:1070400,orbitalPeriod:7.155,eccentricity:.001,inclination:.2,realRadiusKm:2634,color:8947848,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg",facts:{type:"Natural Satellite",diameter:"5,268 km",orbitalPeriod:"7.15 days",distanceFromJupiter:"1,070,400 km",feature:"Largest moon in the solar system",size:"Larger than Mercury",discoveredBy:"Galileo Galilei, 1610"}},Callisto:{name:"Callisto",parent:"Jupiter",radius:.38*At,distance:10,semiMajorAxisKm:1882700,orbitalPeriod:16.689,eccentricity:.007,inclination:.3,realRadiusKm:2410,color:5592405,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg",facts:{type:"Natural Satellite",diameter:"4,821 km",orbitalPeriod:"16.69 days",distanceFromJupiter:"1,882,700 km",feature:"Most heavily cratered object in solar system",surface:"Ancient, geologically dead",discoveredBy:"Galileo Galilei, 1610"}},Mimas:{name:"Mimas",parent:"Saturn",radius:.08*At,distance:2.5,semiMajorAxisKm:186e3,orbitalPeriod:.942,eccentricity:.02,inclination:1.6,realRadiusKm:198,color:13421772,facts:{type:"Natural Satellite",diameter:"396 km",orbitalPeriod:"22.6 hours",distanceFromSaturn:"186,000 km",feature:"Death Star moon - large Herschel crater",discoveredBy:"William Herschel, 1789"}},Enceladus:{name:"Enceladus",parent:"Saturn",radius:.1*At,distance:3.2,semiMajorAxisKm:238400,orbitalPeriod:1.37,eccentricity:.005,inclination:0,realRadiusKm:252,color:16777215,facts:{type:"Natural Satellite",diameter:"504 km",orbitalPeriod:"32.9 hours",distanceFromSaturn:"238,400 km",feature:"Active water geysers at south pole",surface:"Brightest object in solar system (albedo 1.0)",discoveredBy:"William Herschel, 1789"}},Tethys:{name:"Tethys",parent:"Saturn",radius:.14*At,distance:4,semiMajorAxisKm:295e3,orbitalPeriod:1.888,eccentricity:.001,inclination:1.1,realRadiusKm:533,color:14540253,facts:{type:"Natural Satellite",diameter:"1,066 km",orbitalPeriod:"1.89 days",distanceFromSaturn:"295,000 km",feature:"Ithaca Chasma - 2000km long canyon",discoveredBy:"Giovanni Cassini, 1684"}},Dione:{name:"Dione",parent:"Saturn",radius:.15*At,distance:5,semiMajorAxisKm:377700,orbitalPeriod:2.737,eccentricity:.002,inclination:0,realRadiusKm:562,color:12303291,facts:{type:"Natural Satellite",diameter:"1,123 km",orbitalPeriod:"2.74 days",distanceFromSaturn:"377,700 km",feature:"Ice cliffs and bright wispy terrain",discoveredBy:"Giovanni Cassini, 1684"}},Rhea:{name:"Rhea",parent:"Saturn",radius:.18*At,distance:6.5,semiMajorAxisKm:527200,orbitalPeriod:4.518,eccentricity:.001,inclination:.3,realRadiusKm:764,color:11184810,facts:{type:"Natural Satellite",diameter:"1,528 km",orbitalPeriod:"4.52 days",distanceFromSaturn:"527,200 km",feature:"Second largest Saturn moon",discoveredBy:"Giovanni Cassini, 1672"}},Titan:{name:"Titan",parent:"Saturn",radius:.42*At,distance:9,semiMajorAxisKm:1221900,orbitalPeriod:15.945,eccentricity:.029,inclination:.3,realRadiusKm:2575,color:14527078,atmosphere:{color:16755268,opacity:.5,scale:1.1},facts:{type:"Natural Satellite",diameter:"5,150 km",orbitalPeriod:"15.95 days",distanceFromSaturn:"1,221,900 km",feature:"Only moon with dense atmosphere",atmosphere:"95% Nitrogen, 5% Methane",surface:"Methane lakes and rivers",discoveredBy:"Christiaan Huygens, 1655"}},Iapetus:{name:"Iapetus",parent:"Saturn",radius:.16*At,distance:14,semiMajorAxisKm:3561700,orbitalPeriod:79.33,eccentricity:.028,inclination:7.6,realRadiusKm:735,color:6710886,facts:{type:"Natural Satellite",diameter:"1,470 km",orbitalPeriod:"79.3 days",distanceFromSaturn:"3,561,700 km",feature:"Two-tone coloring (black/white hemispheres)",surface:"Equatorial ridge 20km high",discoveredBy:"Giovanni Cassini, 1671"}},Miranda:{name:"Miranda",parent:"Uranus",radius:.1*At,distance:2.5,semiMajorAxisKm:129800,orbitalPeriod:1.413,eccentricity:.001,inclination:4.4,realRadiusKm:236,color:8947865,facts:{type:"Natural Satellite",diameter:"472 km",orbitalPeriod:"1.41 days",distanceFromUranus:"129,800 km",feature:"Verona Rupes - 20km tall cliff",surface:"Most varied terrain of any moon",discoveredBy:"Gerard Kuiper, 1948"}},Ariel:{name:"Ariel",parent:"Uranus",radius:.14*At,distance:3.5,semiMajorAxisKm:190900,orbitalPeriod:2.52,eccentricity:.001,inclination:0,realRadiusKm:579,color:10066329,facts:{type:"Natural Satellite",diameter:"1,158 km",orbitalPeriod:"2.52 days",distanceFromUranus:"190,900 km",feature:"Brightest Uranian moon",surface:"Extensive rift valleys",discoveredBy:"William Lassell, 1851"}},Umbriel:{name:"Umbriel",parent:"Uranus",radius:.14*At,distance:4.5,semiMajorAxisKm:266e3,orbitalPeriod:4.144,eccentricity:.004,inclination:.1,realRadiusKm:585,color:5592405,facts:{type:"Natural Satellite",diameter:"1,170 km",orbitalPeriod:"4.14 days",distanceFromUranus:"266,000 km",feature:"Darkest major Uranian moon",surface:"Heavily cratered, ancient",discoveredBy:"William Lassell, 1851"}},Titania:{name:"Titania",parent:"Uranus",radius:.18*At,distance:6,semiMajorAxisKm:436300,orbitalPeriod:8.706,eccentricity:.002,inclination:.1,realRadiusKm:789,color:8947848,facts:{type:"Natural Satellite",diameter:"1,578 km",orbitalPeriod:"8.71 days",distanceFromUranus:"436,300 km",feature:"Largest Uranian moon",surface:"Messina Chasma - 1500km canyon",discoveredBy:"William Herschel, 1787"}},Oberon:{name:"Oberon",parent:"Uranus",radius:.17*At,distance:8,semiMajorAxisKm:583400,orbitalPeriod:13.463,eccentricity:.002,inclination:.1,realRadiusKm:761,color:7829367,facts:{type:"Natural Satellite",diameter:"1,522 km",orbitalPeriod:"13.46 days",distanceFromUranus:"583,400 km",feature:"Outermost major Uranian moon",surface:"Dark floor craters with bright ejecta",discoveredBy:"William Herschel, 1787"}},Proteus:{name:"Proteus",parent:"Neptune",radius:.09*At,distance:2.5,semiMajorAxisKm:117600,orbitalPeriod:1.122,eccentricity:0,inclination:0,realRadiusKm:210,color:6710903,facts:{type:"Natural Satellite",diameter:"420 km (irregular)",orbitalPeriod:"26.9 hours",distanceFromNeptune:"117,600 km",feature:"Largest irregular moon in solar system",discoveredBy:"Voyager 2, 1989"}},Triton:{name:"Triton",parent:"Neptune",radius:.28*At,distance:5,semiMajorAxisKm:354800,orbitalPeriod:5.877,eccentricity:0,inclination:157.3,realRadiusKm:1353,color:14527146,retrograde:!0,facts:{type:"Natural Satellite",diameter:"2,706 km",orbitalPeriod:"5.88 days (retrograde)",distanceFromNeptune:"354,800 km",feature:"Only large moon with retrograde orbit",origin:"Captured Kuiper Belt object",surface:"Nitrogen geysers, -235°C",discoveredBy:"William Lassell, 1846"}},Nereid:{name:"Nereid",parent:"Neptune",radius:.07*At,distance:12,semiMajorAxisKm:5504e3,orbitalPeriod:360.13,eccentricity:.749,inclination:5.8,realRadiusKm:170,color:8947848,facts:{type:"Natural Satellite",diameter:"340 km",orbitalPeriod:"360.1 days",distanceFromNeptune:"5,504,000 km (average)",feature:"Most eccentric moon orbit (e=0.749)",orbit:"Ranges from 1.4 to 9.6 million km",discoveredBy:"Gerard Kuiper, 1949"}}},fg=[{name:"Ceres",radius:.15*At,distance:2.77*Lt,orbitalPeriod:4.6,rotationPeriod:.378,axialTilt:4,color:9079434,textureUrl:`${Le}/2k_ceres_fictional.jpg`,isDwarfPlanet:!0,classification:"IAU Dwarf Planet",semiMajorAxis:2.77,eccentricity:.079,inclination:10.6,longitudeOfAscendingNode:80.3,argumentOfPerihelion:73.6,meanAnomalyAtEpoch:95.99,epoch:2451545,earthComparison:{sizeRatio:.074,gravityRatio:.028,massRatio:16e-5},facts:{type:"Dwarf Planet",diameter:"940 km",dayLength:"9.07 hours",yearLength:"4.6 Earth years",location:"Asteroid Belt",feature:"Largest object in asteroid belt",discoveredBy:"Giuseppe Piazzi, 1801",gravity:"0.27 m/s²"}},{name:"Pluto",radius:.18*At,distance:39.5*Lt,orbitalPeriod:248,rotationPeriod:-6.39,axialTilt:122.5,color:14535850,textureUrl:`${Le}/2k_pluto.jpg`,isDwarfPlanet:!0,classification:"IAU Dwarf Planet",moons:["Charon"],semiMajorAxis:39.48,eccentricity:.2488,inclination:17.16,longitudeOfAscendingNode:110.3,argumentOfPerihelion:113.76,meanAnomalyAtEpoch:14.53,epoch:2451545,earthComparison:{sizeRatio:.186,gravityRatio:.063,massRatio:.0022},facts:{type:"Dwarf Planet",diameter:"2,377 km",dayLength:"6.39 Earth days",yearLength:"248 Earth years",moons:5,temperature:"-230°C",location:"Kuiper Belt",discoveredBy:"Clyde Tombaugh, 1930",gravity:"0.62 m/s²"}},{name:"Haumea",radius:.16*At,distance:43.22*Lt,orbitalPeriod:284.1,rotationPeriod:.163,axialTilt:126,color:13421772,isDwarfPlanet:!0,classification:"IAU Dwarf Planet",semiMajorAxis:43.22,eccentricity:.191,inclination:28.2,longitudeOfAscendingNode:122.1,argumentOfPerihelion:239.1,meanAnomalyAtEpoch:205,epoch:2451545,earthComparison:{sizeRatio:.122,gravityRatio:.045,massRatio:7e-4},facts:{type:"Dwarf Planet",diameter:"1,560 km (elongated)",dayLength:"3.9 hours",yearLength:"284 Earth years",moons:2,location:"Kuiper Belt",feature:"Elongated shape, has rings, fastest rotating",discoveredBy:"Brown, Rabinowitz, Trujillo, 2004",surface:"Crystalline water ice"}},{name:"Makemake",radius:.15*At,distance:45.56*Lt,orbitalPeriod:307.5,rotationPeriod:.94,axialTilt:29,color:14527112,isDwarfPlanet:!0,classification:"IAU Dwarf Planet",semiMajorAxis:45.56,eccentricity:.158,inclination:29,longitudeOfAscendingNode:79.6,argumentOfPerihelion:296.4,meanAnomalyAtEpoch:142,epoch:2451545,earthComparison:{sizeRatio:.112,gravityRatio:.042,massRatio:5e-4},facts:{type:"Dwarf Planet",diameter:"1,430 km",dayLength:"22.5 hours",yearLength:"308 Earth years",moons:1,location:"Kuiper Belt",feature:"Extremely cold, reddish-brown surface",discoveredBy:"Brown, Trujillo, Rabinowitz, 2005",surface:"Methane, ethane, nitrogen ices"}},{name:"Eris",radius:.19*At,distance:67.86*Lt,orbitalPeriod:559,rotationPeriod:1.08,axialTilt:78,color:15658734,isDwarfPlanet:!0,classification:"IAU Dwarf Planet",semiMajorAxis:67.86,eccentricity:.441,inclination:44,longitudeOfAscendingNode:35.9,argumentOfPerihelion:151.5,meanAnomalyAtEpoch:205,epoch:2451545,earthComparison:{sizeRatio:.182,gravityRatio:.082,massRatio:.0028},facts:{type:"Dwarf Planet",diameter:"2,326 km",dayLength:"25.9 hours",yearLength:"559 Earth years",moons:1,location:"Scattered Disc",feature:"Most massive known dwarf planet",discoveredBy:"Brown, Trujillo, Rabinowitz, 2005",surface:"Methane ice, extremely bright"}},{name:"Orcus",radius:.12*At,distance:39.4*Lt,orbitalPeriod:247.3,rotationPeriod:.44,axialTilt:20,color:10066329,isDwarfPlanet:!0,classification:"Dwarf Planet Candidate",semiMajorAxis:39.4,eccentricity:.22,inclination:20.6,longitudeOfAscendingNode:268.8,argumentOfPerihelion:72.3,meanAnomalyAtEpoch:167,epoch:2451545,facts:{type:"Dwarf Planet Candidate",diameter:"910 km",dayLength:"10.5 hours",yearLength:"247 Earth years",moons:1,location:"Kuiper Belt (Plutino)",feature:'"Anti-Pluto" - opposite orbital phase',discoveredBy:"Brown, Trujillo, Rabinowitz, 2004"}},{name:"Salacia",radius:.11*At,distance:42.18*Lt,orbitalPeriod:274,rotationPeriod:.27,axialTilt:24,color:7833770,isDwarfPlanet:!0,classification:"Dwarf Planet Candidate",semiMajorAxis:42.18,eccentricity:.106,inclination:23.9,longitudeOfAscendingNode:280,argumentOfPerihelion:311.5,meanAnomalyAtEpoch:120,epoch:2451545,facts:{type:"Dwarf Planet Candidate",diameter:"846 km",dayLength:"6.5 hours",yearLength:"274 Earth years",moons:1,location:"Kuiper Belt",feature:"Dark surface, possibly differentiated",discoveredBy:"Sheppard & Trujillo, 2004"}},{name:"Quaoar",radius:.13*At,distance:43.69*Lt,orbitalPeriod:288.8,rotationPeriod:.74,axialTilt:8,color:12290150,isDwarfPlanet:!0,classification:"Dwarf Planet Candidate",semiMajorAxis:43.69,eccentricity:.04,inclination:8,longitudeOfAscendingNode:189,argumentOfPerihelion:155,meanAnomalyAtEpoch:280,epoch:2451545,facts:{type:"Dwarf Planet Candidate",diameter:"1,098 km",dayLength:"17.7 hours",yearLength:"289 Earth years",moons:1,location:"Kuiper Belt",feature:"Has rings despite small size",discoveredBy:"Brown & Trujillo, 2002",surface:"Crystalline ice, ammonia hydrate"}},{name:"Gonggong",radius:.14*At,distance:66.9*Lt,orbitalPeriod:554,rotationPeriod:.93,axialTilt:31,color:13395558,isDwarfPlanet:!0,classification:"Dwarf Planet Candidate",semiMajorAxis:66.9,eccentricity:.503,inclination:30.7,longitudeOfAscendingNode:336.8,argumentOfPerihelion:207.2,meanAnomalyAtEpoch:105,epoch:2451545,facts:{type:"Dwarf Planet Candidate",diameter:"1,230 km",dayLength:"22.4 hours",yearLength:"554 Earth years",moons:1,location:"Scattered Disc",feature:"Very red, highly elliptical orbit",discoveredBy:"Schwamb, Brown, Rabinowitz, 2007",surface:"Methane ice, tholins"}},{name:"Sedna",radius:.13*At,distance:506.8*Lt,orbitalPeriod:11400,rotationPeriod:.43,axialTilt:12,color:14500932,isDwarfPlanet:!0,classification:"Dwarf Planet Candidate",semiMajorAxis:506.8,eccentricity:.855,inclination:11.9,longitudeOfAscendingNode:144.5,argumentOfPerihelion:311.5,meanAnomalyAtEpoch:358,epoch:2451545,isExtreme:!0,perihelion:76.2,aphelion:937.4,facts:{type:"Dwarf Planet Candidate",diameter:"~1,000 km",dayLength:"10.3 hours",yearLength:"11,400 Earth years",moons:0,location:"Inner Oort Cloud / Sednoid",feature:"Most distant known orbit, extremely red",discoveredBy:"Brown, Trujillo, Rabinowitz, 2003",surface:"Methane, nitrogen, water ice, tholins",orbit:"Perihelion 76 AU, Aphelion 937 AU"}}],pg={name:"Charon",parent:"Pluto",radius:.09*At,distance:1.5,orbitalPeriod:.0175,rotationPeriod:6.39,color:10066329,facts:{type:"Natural Satellite",diameter:"1,212 km",orbitalPeriod:"6.39 days",feature:"Tidally locked with Pluto (both face each other)",discoveredBy:"James Christy, 1978"}},mg={innerRadius:2.2*Lt,outerRadius:3.2*Lt,count:3e3,minSize:.02,maxSize:.08,color:8947848,verticalSpread:.5},gg=[{name:"Vesta",semiMajorAxis:2.362,eccentricity:.089,inclination:7.14,longitudeOfAscendingNode:103.9,argumentOfPerihelion:150.7,meanAnomalyAtEpoch:20.9,epoch:2451545,orbitalPeriod:3.63,rotationPeriod:5.342,diameter:525,radius:.06*At,color:14540236,albedo:.423,type:"V-type",facts:{type:"Asteroid (V-type)",diameter:"525 km",orbitalPeriod:"3.63 Earth years",rotationPeriod:"5.34 hours",feature:"Rheasilvia basin - 505km crater",surface:"Basaltic, brightest asteroid",discoveredBy:"Heinrich Olbers, 1807"}},{name:"Pallas",semiMajorAxis:2.773,eccentricity:.231,inclination:34.84,longitudeOfAscendingNode:173,argumentOfPerihelion:310,meanAnomalyAtEpoch:96.1,epoch:2451545,orbitalPeriod:4.61,rotationPeriod:7.81,diameter:511,radius:.058*At,color:6710903,albedo:.159,type:"B-type",facts:{type:"Asteroid (B-type)",diameter:"511 km",orbitalPeriod:"4.61 Earth years",rotationPeriod:"7.81 hours",feature:"Highest inclination of major asteroids (34.8°)",orbit:"Tilted 35° from ecliptic",discoveredBy:"Heinrich Olbers, 1802"}},{name:"Hygiea",semiMajorAxis:3.139,eccentricity:.112,inclination:3.83,longitudeOfAscendingNode:283.2,argumentOfPerihelion:312.3,meanAnomalyAtEpoch:156.4,epoch:2451545,orbitalPeriod:5.56,rotationPeriod:13.83,diameter:433,radius:.05*At,color:4473924,albedo:.072,type:"C-type",facts:{type:"Asteroid (C-type)",diameter:"433 km",orbitalPeriod:"5.56 Earth years",rotationPeriod:"13.83 hours",feature:"Nearly spherical from ancient impact",surface:"Smoothest large asteroid, very dark",discoveredBy:"Annibale de Gasparis, 1849"}},{name:"Interamnia",semiMajorAxis:3.062,eccentricity:.156,inclination:17.31,longitudeOfAscendingNode:280.3,argumentOfPerihelion:95.9,meanAnomalyAtEpoch:280.4,epoch:2451545,orbitalPeriod:5.35,rotationPeriod:8.73,diameter:332,radius:.04*At,color:3815994,albedo:.067,type:"F-type",facts:{type:"Asteroid (F-type)",diameter:"332 km",orbitalPeriod:"5.35 Earth years",rotationPeriod:"8.73 hours",feature:"Primitive organic-rich material",discoveredBy:"Vincenzo Cerulli, 1910"}},{name:"52 Europa",displayName:"Europa (Asteroid)",semiMajorAxis:3.095,eccentricity:.11,inclination:7.48,longitudeOfAscendingNode:128.6,argumentOfPerihelion:343.6,meanAnomalyAtEpoch:224.6,epoch:2451545,orbitalPeriod:5.45,rotationPeriod:5.63,diameter:319,radius:.038*At,color:3355443,albedo:.057,type:"C-type",facts:{type:"Asteroid (C-type)",diameter:"319 km",orbitalPeriod:"5.45 Earth years",rotationPeriod:"5.63 hours",feature:"Rubble pile structure, very porous",note:"Not to be confused with Jupiter's moon Europa",discoveredBy:"Hermann Goldschmidt, 1858"}},{name:"Davida",semiMajorAxis:3.168,eccentricity:.188,inclination:15.94,longitudeOfAscendingNode:107.6,argumentOfPerihelion:338.2,meanAnomalyAtEpoch:48.4,epoch:2451545,orbitalPeriod:5.63,rotationPeriod:5.13,diameter:298,radius:.036*At,color:4210752,albedo:.076,type:"C-type",facts:{type:"Asteroid (C-type)",diameter:"298 km",orbitalPeriod:"5.63 Earth years",rotationPeriod:"5.13 hours",feature:"Angular potato shape",discoveredBy:"Raymond Dugan, 1903"}},{name:"Sylvia",semiMajorAxis:3.485,eccentricity:.094,inclination:10.88,longitudeOfAscendingNode:73.1,argumentOfPerihelion:266.2,meanAnomalyAtEpoch:190.5,epoch:2451545,orbitalPeriod:6.49,rotationPeriod:5.18,diameter:271,radius:.034*At,color:2763306,albedo:.046,type:"X-type",facts:{type:"Asteroid (X-type)",diameter:"271 km",orbitalPeriod:"6.49 Earth years",rotationPeriod:"5.18 hours",feature:"Triple system with 2 moons (Romulus & Remus)",discoveredBy:"Norman Pogson, 1866"}},{name:"Eunomia",semiMajorAxis:2.643,eccentricity:.187,inclination:11.75,longitudeOfAscendingNode:293.2,argumentOfPerihelion:97.9,meanAnomalyAtEpoch:67.2,epoch:2451545,orbitalPeriod:4.3,rotationPeriod:6.08,diameter:270,radius:.034*At,color:11176038,albedo:.248,type:"S-type",facts:{type:"Asteroid (S-type)",diameter:"270 km",orbitalPeriod:"4.30 Earth years",rotationPeriod:"6.08 hours",feature:"Largest S-type asteroid",surface:"Reddish stony composition",discoveredBy:"Annibale de Gasparis, 1851"}},{name:"Euphrosyne",semiMajorAxis:3.149,eccentricity:.221,inclination:26.32,longitudeOfAscendingNode:31.1,argumentOfPerihelion:61.6,meanAnomalyAtEpoch:312.1,epoch:2451545,orbitalPeriod:5.61,rotationPeriod:5.53,diameter:268,radius:.034*At,color:2236962,albedo:.053,type:"C-type",facts:{type:"Asteroid (C-type)",diameter:"268 km",orbitalPeriod:"5.61 Earth years",rotationPeriod:"5.53 hours",feature:"Has a small moon, very dark",orbit:"High inclination (26.3°)",discoveredBy:"James Ferguson, 1854"}}],_g={innerRadius:30*Lt,outerRadius:50*Lt,count:1500,minSize:.01,maxSize:.04,color:4478378,verticalSpread:2,opacity:.3},vg={simulationStartDate:new Date("2024-01-01")},nh={name:"Halley's Comet",designation:"1P/Halley",semiMajorAxis:17.93,eccentricity:.9679,inclination:162.2,longitudeOfAscendingNode:59.07,argumentOfPerihelion:112.21,meanAnomalyAtEpoch:274.81,epoch:24399075e-1,meanMotion:.012982,orbitalPeriod:75.92,perihelion:.586,aphelion:35.28,lastPerihelion:new Date("1986-02-09"),nextPerihelion:new Date("2061-07-28"),facts:{type:"Periodic Comet (Halley-type)",designation:"1P/Halley",orbitalPeriod:"75.92 Earth years",perihelion:"0.586 AU (inside Venus orbit)",aphelion:"35.28 AU (past Neptune)",lastPerihelion:"February 9, 1986",nextPerihelion:"July 28, 2061",inclination:"162.2° (retrograde orbit)",composition:'Ice, dust, and rock ("dirty snowball")',nucleus:"~11 km × 8 km (potato-shaped)",discoveredBy:"Known since ancient times, orbit computed by Edmond Halley (1705)",feature:"Tail always points away from Sun due to solar wind"}};class xg{constructor(t){this.data=hg,this.textureLoader=t,this.group=new ke,this.group.name="Sun",this.group.userData={type:"celestialBody",name:"Sun",facts:this.data.facts,clickable:!0},this.sunMesh=null,this.coronaMesh=null,this.solarFlares=[],this.lensflare=null,this.pointLight=null,this.ambientLight=null,this.init()}init(){this.createSunSphere(),this.createCorona(),this.createSolarFlares(),this.createLensFlare(),this.createLights()}createSunSphere(){const t=new Ze(this.data.radius,64,64),e=new ue({uniforms:{time:{value:0},baseColor:{value:new vt(16768324)},glowColor:{value:new vt(16737792)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 baseColor;
        uniform vec3 glowColor;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        // Improved noise functions for sun surface
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 6; i++) {
            value += amplitude * noise(p * frequency);
            frequency *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          // Animated surface turbulence
          vec2 animatedUv = vUv * 6.0 + vec2(time * 0.03, time * 0.02);
          float turbulence = fbm(animatedUv);

          // Create granulation effect (convection cells)
          vec2 granuleUv = vUv * 20.0 + time * 0.01;
          float granules = fbm(granuleUv);
          granules = smoothstep(0.3, 0.7, granules);

          // Sunspot-like darker regions
          vec2 spotUv = vUv * 3.0 + time * 0.005;
          float spots = fbm(spotUv);
          spots = smoothstep(0.6, 0.8, spots) * 0.3;

          // Combine effects
          vec3 color = baseColor;
          color = mix(color, glowColor, turbulence * 0.4);
          color = mix(color, baseColor * 1.2, granules * 0.2);
          color = mix(color, vec3(0.8, 0.3, 0.1), spots);

          // Limb darkening effect
          float limb = dot(vNormal, vec3(0.0, 0.0, 1.0));
          limb = pow(max(0.0, limb), 0.4);
          color *= 0.6 + limb * 0.4;

          // Rim brightening for bloom
          float rim = 1.0 - limb;
          rim = pow(rim, 3.0);
          color += glowColor * rim * 0.3;

          // High intensity for bloom effect
          gl_FragColor = vec4(color * 1.8, 1.0);
        }
      `});this.sunMesh=new jt(t,e),this.sunMesh.userData=this.group.userData,this.group.add(this.sunMesh)}createCorona(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createRadialGradient(256,256,0,256,256,256);i.addColorStop(0,"rgba(255, 220, 150, 1)"),i.addColorStop(.15,"rgba(255, 180, 80, 0.9)"),i.addColorStop(.3,"rgba(255, 120, 40, 0.6)"),i.addColorStop(.5,"rgba(255, 80, 20, 0.3)"),i.addColorStop(.7,"rgba(255, 40, 0, 0.1)"),i.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=i,e.fillRect(0,0,512,512);const n=new ti(t),a=new Wn({map:n,transparent:!0,blending:Me,depthWrite:!1});this.coronaMesh=new Es(a),this.coronaMesh.scale.set(this.data.radius*3,this.data.radius*3,1),this.group.add(this.coronaMesh)}createSolarFlares(){for(let e=0;e<5;e++){const i=this.createSingleFlare(e/5);this.solarFlares.push(i),this.group.add(i.mesh)}}createSingleFlare(t){const e=document.createElement("canvas");e.width=256,e.height=512;const i=e.getContext("2d"),n=i.createLinearGradient(128,512,128,0);n.addColorStop(0,"rgba(255, 100, 50, 0.8)"),n.addColorStop(.3,"rgba(255, 150, 50, 0.6)"),n.addColorStop(.6,"rgba(255, 200, 100, 0.3)"),n.addColorStop(1,"rgba(255, 255, 200, 0)"),i.fillStyle=n,i.beginPath(),i.moveTo(64,512),i.quadraticCurveTo(0,256,64,0),i.quadraticCurveTo(128,128,192,0),i.quadraticCurveTo(256,256,192,512),i.closePath(),i.fill();const a=new ti(e),r=new Wn({map:a,transparent:!0,blending:Me,depthWrite:!1,opacity:.6}),o=new Es(r),l=t*Math.PI*2+Math.random()*.5,c={mesh:o,baseAngle:l,speed:.1+Math.random()*.2,scaleBase:.8+Math.random()*.4,phaseOffset:Math.random()*Math.PI*2,height:this.data.radius*(1.5+Math.random()*1.5)};return this.updateFlarePosition(c,0),c}updateFlarePosition(t,e){const i=t.baseAngle+Math.sin(e*.2+t.phaseOffset)*.2,n=t.height*(.8+Math.sin(e*t.speed+t.phaseOffset)*.3),a=t.scaleBase*(.7+Math.sin(e*t.speed*2+t.phaseOffset)*.4),r=this.data.radius*.95;t.mesh.position.x=Math.cos(i)*r,t.mesh.position.y=Math.sin(i)*r,t.mesh.position.z=0,t.mesh.scale.set(this.data.radius*.5*a,n*a,1),t.mesh.material.rotation=i-Math.PI/2;const o=.3+Math.sin(e*t.speed+t.phaseOffset)*.3;t.mesh.material.opacity=Math.max(0,o)}createLensFlare(){const t=this.createFlareTexture(256,"radial"),e=this.createFlareTexture(128,"ring"),i=this.createFlareTexture(64,"hex");this.lensflare=new As,this.lensflare.addElement(new nn(t,200,0,new vt(16777215))),this.lensflare.addElement(new nn(e,30,.6,new vt(16764040))),this.lensflare.addElement(new nn(e,35,.7,new vt(16755302))),this.lensflare.addElement(new nn(i,50,.9,new vt(16768426))),this.lensflare.addElement(new nn(i,30,1,new vt(16777164))),this.group.add(this.lensflare)}createFlareTexture(t,e){const i=document.createElement("canvas");i.width=t,i.height=t;const n=i.getContext("2d"),a=t/2;if(e==="radial"){const r=n.createRadialGradient(a,a,0,a,a,a);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.2,"rgba(255, 220, 150, 0.8)"),r.addColorStop(.4,"rgba(255, 180, 100, 0.4)"),r.addColorStop(.8,"rgba(255, 100, 50, 0.1)"),r.addColorStop(1,"rgba(255, 50, 0, 0)"),n.fillStyle=r,n.fillRect(0,0,t,t)}else if(e==="ring")n.strokeStyle="rgba(255, 200, 150, 0.5)",n.lineWidth=t*.1,n.beginPath(),n.arc(a,a,t*.35,0,Math.PI*2),n.stroke();else if(e==="hex"){n.fillStyle="rgba(255, 220, 180, 0.3)",n.beginPath();for(let r=0;r<6;r++){const o=r/6*Math.PI*2,l=a+Math.cos(o)*a*.8,c=a+Math.sin(o)*a*.8;r===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath(),n.fill()}return new ti(i)}createLights(){this.pointLight=new Ju(16777215,2.5,0,.1),this.pointLight.position.set(0,0,0),this.pointLight.castShadow=!1,this.group.add(this.pointLight),this.ambientLight=new Qu(4210752,.15),this.group.add(this.ambientLight)}getMesh(){return this.group}update(t,e){this.sunMesh&&this.sunMesh.material.uniforms&&(this.sunMesh.material.uniforms.time.value=e),this.sunMesh.rotation.y+=t*.05;const i=1+Math.sin(e*1.5)*.05;this.coronaMesh.scale.set(this.data.radius*3*i,this.data.radius*3*i,1),this.solarFlares.forEach(n=>{this.updateFlarePosition(n,e)}),this.solarFlares.forEach((n,a)=>{n.baseAngle+=t*.02*(a%2===0?1:-1)})}setLensFlareVisible(t){this.lensflare&&(this.lensflare.visible=t)}dispose(){this.sunMesh&&(this.sunMesh.geometry.dispose(),this.sunMesh.material.dispose()),this.coronaMesh&&(this.coronaMesh.material.map.dispose(),this.coronaMesh.material.dispose()),this.solarFlares.forEach(t=>{t.mesh.material.map.dispose(),t.mesh.material.dispose()}),this.lensflare&&this.lensflare.dispose()}}const sh=2451545,Gi=Math.PI/180,yg={Mercury:{a:.38709927,a_rate:37e-8,e:.20563593,e_rate:1906e-8,i:7.00497902,i_rate:-.00594749,L:252.2503235,L_rate:149472.67411175,wbar:77.45779628,wbar_rate:.16047689,omega:48.33076593,omega_rate:-.12534081},Venus:{a:.72333566,a_rate:39e-7,e:.00677672,e_rate:-4107e-8,i:3.39467605,i_rate:-7889e-7,L:181.9790995,L_rate:58517.81538729,wbar:131.60246718,wbar_rate:.00268329,omega:76.67984255,omega_rate:-.27769418},Earth:{a:1.00000261,a_rate:562e-8,e:.01671123,e_rate:-4392e-8,i:-1531e-8,i_rate:-.01294668,L:100.46457166,L_rate:35999.37244981,wbar:102.93768193,wbar_rate:.32327364,omega:0,omega_rate:0},Mars:{a:1.52371034,a_rate:1847e-8,e:.0933941,e_rate:7882e-8,i:1.84969142,i_rate:-.00813131,L:-4.55343205,L_rate:19140.30268499,wbar:-23.94362959,wbar_rate:.44441088,omega:49.55953891,omega_rate:-.29257343},Jupiter:{a:5.202887,a_rate:-11607e-8,e:.04838624,e_rate:-13253e-8,i:1.30439695,i_rate:-.00183714,L:34.39644051,L_rate:3034.74612775,wbar:14.72847983,wbar_rate:.21252668,omega:100.47390909,omega_rate:.20469106},Saturn:{a:9.53667594,a_rate:-.0012506,e:.05386179,e_rate:-50991e-8,i:2.48599187,i_rate:.00193609,L:49.95424423,L_rate:1222.49362201,wbar:92.59887831,wbar_rate:-.41897216,omega:113.66242448,omega_rate:-.28867794},Uranus:{a:19.18916464,a_rate:-.00196176,e:.04725744,e_rate:-4397e-8,i:.77263783,i_rate:-.00242939,L:313.23810451,L_rate:428.48202785,wbar:170.9542763,wbar_rate:.40805281,omega:74.01692503,omega_rate:.04240589},Neptune:{a:30.06992276,a_rate:26291e-8,e:.00859048,e_rate:5105e-8,i:1.77004347,i_rate:35372e-8,L:-55.12002969,L_rate:218.45945325,wbar:44.96476227,wbar_rate:-.32241464,omega:131.78422574,omega_rate:-.00508664},Pluto:{a:39.48211675,a_rate:-31596e-8,e:.2488273,e_rate:517e-7,i:17.14001206,i_rate:4818e-8,L:238.92903833,L_rate:145.20780515,wbar:224.06891629,wbar_rate:-.04062942,omega:110.30393684,omega_rate:-.01183482},Ceres:{a:2.7675,a_rate:0,e:.0758,e_rate:0,i:10.59,i_rate:0,L:153,L_rate:78.19,wbar:73,wbar_rate:0,omega:80.3,omega_rate:0},Haumea:{a:43.22,a_rate:0,e:.191,e_rate:0,i:28.2,i_rate:0,L:566.2,L_rate:1.27,wbar:361.2,wbar_rate:0,omega:122.1,omega_rate:0},Makemake:{a:45.56,a_rate:0,e:.158,e_rate:0,i:29,i_rate:0,L:518,L_rate:1.17,wbar:376,wbar_rate:0,omega:79.6,omega_rate:0},Eris:{a:67.86,a_rate:0,e:.441,e_rate:0,i:44,i_rate:0,L:392.4,L_rate:.64,wbar:187.4,wbar_rate:0,omega:35.9,omega_rate:0},Orcus:{a:39.4,a_rate:0,e:.22,e_rate:0,i:20.6,i_rate:0,L:508.1,L_rate:1.46,wbar:341.1,wbar_rate:0,omega:268.8,omega_rate:0},Salacia:{a:42.18,a_rate:0,e:.106,e_rate:0,i:23.9,i_rate:0,L:711.5,L_rate:1.31,wbar:591.5,wbar_rate:0,omega:280,omega_rate:0},Quaoar:{a:43.69,a_rate:0,e:.04,e_rate:0,i:8,i_rate:0,L:624,L_rate:1.25,wbar:344,wbar_rate:0,omega:189,omega_rate:0},Gonggong:{a:66.9,a_rate:0,e:.503,e_rate:0,i:30.7,i_rate:0,L:649,L_rate:.65,wbar:544,wbar_rate:0,omega:336.8,omega_rate:0},Sedna:{a:506.8,a_rate:0,e:.855,e_rate:0,i:11.9,i_rate:0,L:814,L_rate:.0316,wbar:456,wbar_rate:0,omega:144.5,omega_rate:0}},wi={a:.00257,e:.0549,i:5.145,L0:218.3164477,L_rate:481267.88123421,w0:83.3532465,w_rate:4069.0137287,omega0:125.0445479,omega_rate:-1934.1362891};function bc(s){const t=s.getUTCFullYear(),e=s.getUTCMonth()+1,i=s.getUTCDate(),n=s.getUTCHours(),a=s.getUTCMinutes(),r=s.getUTCSeconds(),o=(n+a/60+r/3600)/24;let l=t,c=e;c<=2&&(l-=1,c+=12);const h=Math.floor(l/100),u=2-h+Math.floor(h/4);return Math.floor(365.25*(l+4716))+Math.floor(30.6001*(c+1))+i+o+u-1524.5}function Mg(s){const t=Math.floor(s+.5),e=s+.5-t;let i;if(t<2299161)i=t;else{const x=Math.floor((t-186721625e-2)/36524.25);i=t+1+x-Math.floor(x/4)}const n=i+1524,a=Math.floor((n-122.1)/365.25),r=Math.floor(365.25*a),o=Math.floor((n-r)/30.6001),l=n-r-Math.floor(30.6001*o)+e,c=o<14?o-1:o-13,h=c>2?a-4716:a-4715,u=Math.floor(l),p=(l-u)*24,g=Math.floor(p),v=(p-g)*60,m=Math.floor(v),f=(v-m)*60;return new Date(Date.UTC(h,c-1,u,g,m,Math.floor(f)))}function rn(s){return s=s%360,s<0&&(s+=360),s}function ah(s,t){let e=s+t*Math.sin(s)*(1+t*Math.cos(s));const i=1e-10;let n=1,a=0;const r=30;for(;Math.abs(n)>i&&a<r;)n=(e-t*Math.sin(e)-s)/(1-t*Math.cos(e)),e-=n,a++;return e}function rh(s,t){const e=yg[s];if(!e)return console.warn(`No orbital elements for ${s}`),{x:0,y:0,z:0,r:0,theta:0};const i=(t-sh)/36525,n=e.a+e.a_rate*i,a=e.e+e.e_rate*i,r=(e.i+e.i_rate*i)*Gi,o=rn(e.L+e.L_rate*i),l=rn(e.wbar+e.wbar_rate*i),c=rn(e.omega+e.omega_rate*i),h=(l-c)*Gi,u=c*Gi,d=rn(o-l)*Gi,p=ah(d,a),g=Math.sqrt(1-a*a)*Math.sin(p)/(1-a*Math.cos(p)),v=(Math.cos(p)-a)/(1-a*Math.cos(p)),m=Math.atan2(g,v),f=n*(1-a*Math.cos(p)),x=f*Math.cos(m),E=f*Math.sin(m),b=Math.cos(h),w=Math.sin(h),A=Math.cos(u),C=Math.sin(u),L=Math.cos(r),y=Math.sin(r),S=(b*A-w*C*L)*x+(-w*A-b*C*L)*E,R=(b*C+w*A*L)*x+(-w*C+b*A*L)*E,F=w*y*x+b*y*E,B=Math.atan2(R,S);return{x:S,y:R,z:F,r:f,theta:B,trueAnomaly:m,meanAnomaly:d}}function Sg(s){const t=(s-sh)/36525,e=rn(wi.L0+wi.L_rate*t)*Gi,i=rn(wi.w0+wi.w_rate*t)*Gi,n=rn(wi.omega0+wi.omega_rate*t)*Gi,a=wi.i*Gi,r=wi.e,o=wi.a,l=e-i,c=ah(l,r),h=Math.sqrt(1-r*r)*Math.sin(c)/(1-r*Math.cos(c)),u=(Math.cos(c)-r)/(1-r*Math.cos(c)),d=Math.atan2(h,u),p=o*(1-r*Math.cos(c)),g=p*Math.cos(d),v=p*Math.sin(d),m=i-n,f=Math.cos(m),x=Math.sin(m),E=Math.cos(n),b=Math.sin(n),w=Math.cos(a),A=Math.sin(a),C=(f*E-x*b*w)*g+(-x*E-f*b*w)*v,L=(f*b+x*E*w)*g+(-x*b+f*E*w)*v,y=x*A*g+f*A*v,S=rh("Earth",s),R=S.x+C,F=S.y+L,B=Math.atan2(F,R),X=Math.atan2(S.y,S.x);let H=B-X;for(;H<0;)H+=2*Math.PI;for(;H>2*Math.PI;)H-=2*Math.PI;const G=H/(2*Math.PI);return{x:C,y:L,z:y,r:p,phase:G}}class Ec{constructor(t,e){this.data=t,this.textureLoader=e,this.orbitAngle=Math.random()*Math.PI*2,this.rotationAngle=0,this.currentJulianDate=null,this.useAccurateOrbits=!0,this.orbitGroup=new ke,this.axisGroup=new ke,this.planetMesh=null,this.planetGlow=null,this.atmosphereMesh=null,this.cloudsMesh=null,this.ringMesh=null,this.moons=[],this.orbitLine=null,this.orbitGroup.name=`${t.name}Orbit`,this.axisGroup.name=`${t.name}Axis`,this.init()}async init(){await this.createPlanetMesh(),this.applyAxialTilt(),this.createOrbitLine(),this.createPlanetGlow(),this.data.atmosphere&&this.createAtmosphere(),this.data.hasRings&&await this.createRings(),this.data.moons&&this.data.moons.length>0&&await this.createMoons(),this.data.cloudsUrl&&await this.createClouds(),this.orbitGroup.add(this.axisGroup)}async createPlanetMesh(){const t=new Ze(this.data.radius,64,64);let e;this.data.name==="Earth"&&this.data.nightTextureUrl?e=await this.createEarthMaterial(t):this.data.name==="Jupiter"?e=await this.createJupiterMaterial(t):e=await this.createAlbedoMaterial(),this.planetMesh=new jt(t,e),this.planetMesh.name=this.data.name,this.planetMesh.userData={type:"celestialBody",name:this.data.name,facts:this.data.facts,earthComparison:this.data.earthComparison,clickable:!0,isPlanet:!0,isDwarfPlanet:this.data.isDwarfPlanet||!1},this.planetMesh.position.x=this.data.distance,this.axisGroup.add(this.planetMesh)}async createEarthMaterial(){let t=null,e=null,i=null,n=null;try{t=await this.loadTexture(this.data.textureUrl)}catch{console.warn("Failed to load Earth day texture")}try{e=await this.loadTexture(this.data.nightTextureUrl)}catch{console.warn("Failed to load Earth night texture")}if(this.data.normalMapUrl)try{i=await this.loadTexture(this.data.normalMapUrl)}catch{}if(this.data.specularMapUrl)try{n=await this.loadTexture(this.data.specularMapUrl)}catch{}return!t||!e?new Bi({map:t,color:this.data.color}):new ue({uniforms:{dayTexture:{value:t},nightTexture:{value:e},normalMap:{value:i},specularMap:{value:n},sunDirection:{value:new P(1,0,0)},ambientIntensity:{value:.1}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform sampler2D normalMap;
        uniform sampler2D specularMap;
        uniform vec3 sunDirection;
        uniform float ambientIntensity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normal = normalize(vNormal);

          // Calculate sun direction relative to fragment
          vec3 toSun = normalize(-vWorldPosition);

          // Dot product for day/night blend (using world normal vs sun direction)
          float sunDot = dot(normal, sunDirection);

          // Smooth transition zone
          float dayFactor = smoothstep(-0.2, 0.3, sunDot);

          // Sample textures
          vec4 dayColor = texture2D(dayTexture, vUv);
          vec4 nightColor = texture2D(nightTexture, vUv);

          // Night color represents city lights - make them glow
          vec3 cityLights = nightColor.rgb * 2.0;  // Boost brightness

          // Day side: full day texture with lighting
          vec3 litDay = dayColor.rgb * (ambientIntensity + max(0.0, sunDot));

          // Night side: city lights only (no ambient to make lights stand out)
          vec3 litNight = cityLights * (1.0 - dayFactor) * 1.5;

          // Blend based on sun angle
          vec3 finalColor = litDay * dayFactor + litNight;

          // Add subtle blue atmospheric scattering on terminator
          float terminator = 1.0 - abs(sunDot);
          terminator = pow(terminator, 4.0);
          vec3 scatterColor = vec3(0.3, 0.5, 1.0) * terminator * 0.15;
          finalColor += scatterColor;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `})}async createJupiterMaterial(){let t=null;try{t=await this.loadTexture(this.data.textureUrl)}catch{console.warn("Failed to load Jupiter texture")}return t?(this.jupiterTimeUniform={value:0},new ue({uniforms:{baseTexture:{value:t},time:this.jupiterTimeUniform,sunDirection:{value:new P(1,0,0)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D baseTexture;
        uniform float time;
        uniform vec3 sunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        // Noise functions for storm animation
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec4 baseColor = texture2D(baseTexture, vUv);

          // Great Red Spot location (approximate)
          // The GRS is at about 22 degrees south latitude
          vec2 grsCenter = vec2(0.65, 0.38);  // UV coordinates
          float grsRadiusX = 0.08;
          float grsRadiusY = 0.04;

          // Calculate distance to GRS center (elliptical)
          vec2 toGrs = vUv - grsCenter;
          toGrs.x = mod(toGrs.x + 0.5, 1.0) - 0.5;  // Wrap around
          float grsDistance = length(vec2(toGrs.x / grsRadiusX, toGrs.y / grsRadiusY));

          // GRS effect
          if (grsDistance < 1.2) {
            // Swirling animation
            float angle = atan(toGrs.y, toGrs.x);
            float swirl = fbm(vec2(grsDistance * 8.0 + time * 0.5, angle * 2.0 + time * 0.3));

            // Red spot color
            vec3 grsColor = vec3(0.85, 0.35, 0.25);

            // Blend based on distance with swirl
            float blend = smoothstep(1.2, 0.3, grsDistance);
            blend *= 0.4 + swirl * 0.3;

            // Mix the GRS color with base
            baseColor.rgb = mix(baseColor.rgb, grsColor, blend);

            // Add swirling detail
            float detail = fbm(vec2(toGrs.x * 30.0 + time, toGrs.y * 30.0)) * 0.15;
            baseColor.rgb += vec3(detail, detail * 0.5, 0.0) * blend;
          }

          // Standard lighting
          vec3 normal = normalize(vNormal);
          float sunDot = max(0.1, dot(normal, sunDirection));
          vec3 finalColor = baseColor.rgb * sunDot;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `})):new Bi({color:this.data.color})}async createAlbedoMaterial(){let t=null,e=null;if(this.data.textureUrl)try{t=await this.loadTexture(this.data.textureUrl)}catch{console.warn(`Failed to load texture for ${this.data.name}, using color fallback`)}if(this.data.normalMapUrl)try{e=await this.loadTexture(this.data.normalMapUrl)}catch{}const i=this.data.albedo!==void 0?this.data.albedo:.3;return new ue({uniforms:{planetTexture:{value:t},normalMap:{value:e},hasTexture:{value:t!==null},hasNormalMap:{value:e!==null},baseColor:{value:new vt(this.data.color)},albedo:{value:i},sunDirection:{value:new P(1,0,0)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D planetTexture;
        uniform sampler2D normalMap;
        uniform bool hasTexture;
        uniform bool hasNormalMap;
        uniform vec3 baseColor;
        uniform float albedo;
        uniform vec3 sunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vViewPosition;

        void main() {
          // Get base color from texture or fallback
          vec3 surfaceColor;
          if (hasTexture) {
            surfaceColor = texture2D(planetTexture, vUv).rgb;
          } else {
            surfaceColor = baseColor;
          }

          // Get normal (optionally from normal map)
          vec3 normal = normalize(vNormal);

          // Calculate lighting
          float sunDot = dot(normal, sunDirection);

          // Diffuse lighting with albedo affecting brightness
          // Albedo determines how much light the surface reflects
          // Scale from 0.068 (Mercury) to 0.77 (Venus)
          float ambientLight = 0.08;  // Very dim ambient
          float diffuse = max(0.0, sunDot);

          // Apply albedo to affect overall brightness
          // Normalize albedo effect: Mercury (0.068) is very dark, Venus (0.77) is brightest
          // Use a scaled range so differences are visible but not extreme
          float albedoFactor = 0.4 + (albedo * 0.8);  // Range: 0.45 to 1.02

          // Final lighting calculation
          float lighting = ambientLight + (diffuse * albedoFactor);

          // Apply lighting to surface color
          vec3 finalColor = surfaceColor * lighting;

          // Slight boost to prevent completely black dark sides
          finalColor = max(finalColor, surfaceColor * 0.03);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `})}createAtmosphere(){const t=this.data.atmosphere,e=new Ze(this.data.radius*t.scale,64,64);this.atmosphereSunDirection={value:new P(1,0,0)};const n=this.data.name==="Earth"||this.data.name==="Venus"?.6:.3,a=new ue({uniforms:{atmosphereColor:{value:new vt(t.color)},intensity:{value:t.opacity},sunDirection:this.atmosphereSunDirection,scatterStrength:{value:n}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform vec3 sunDirection;
        uniform float scatterStrength;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;

        void main() {
          // Fresnel effect - glow stronger at edges
          vec3 viewDirection = normalize(-vPosition);
          float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
          fresnel = pow(fresnel, 2.0);

          // Calculate sun angle for scattering
          float sunDot = dot(vWorldNormal, sunDirection);

          // Terminator region (where day meets night)
          float terminator = 1.0 - abs(sunDot);
          terminator = pow(terminator, 3.0);

          // Sunset/sunrise colors - orange/red at terminator
          vec3 scatterColor = vec3(1.0, 0.5, 0.2);  // Orange-red
          vec3 dayColor = atmosphereColor;

          // Blend scatter color at terminator
          float scatterAmount = terminator * scatterStrength * fresnel;

          // Base atmosphere with scattering
          vec3 finalColor = dayColor * fresnel * intensity * 2.0;

          // Add warm scattering at the terminator (limb)
          finalColor += scatterColor * scatterAmount * 1.5;

          // Enhance glow on the sunlit side edge
          float sunlitEdge = max(0.0, sunDot) * fresnel;
          finalColor += dayColor * sunlitEdge * 0.3;

          float alpha = fresnel * intensity + scatterAmount * 0.5;

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,side:Ee,blending:Me,depthWrite:!1});this.atmosphereMesh=new jt(e,a),this.atmosphereMesh.position.copy(this.planetMesh.position),this.axisGroup.add(this.atmosphereMesh)}loadTexture(t){return new Promise((e,i)=>{this.textureLoader.load(t,n=>{n.colorSpace=Ye,e(n)},void 0,n=>i(n))})}applyAxialTilt(){const t=_e.degToRad(this.data.axialTilt);this.axisGroup.rotation.z=t}createOrbitLine(){const t=[];for(let o=0;o<=128;o++){const l=o/128*Math.PI*2;t.push(new P(Math.cos(l)*this.data.distance,0,Math.sin(l)*this.data.distance))}const i=new Zt().setFromPoints(t),n=this.data.distance<20,a=new vt(this.data.color).lerp(new vt(4473958),.7),r=new cn({color:this.data.isDwarfPlanet?6702182:a,transparent:!0,opacity:this.data.isDwarfPlanet?.25:.4,linewidth:n?2:1});this.orbitLine=new Xn(i,r),this.orbitLine.name=`${this.data.name}OrbitLine`}createPlanetGlow(){const t=new Ze(this.data.radius*1.15,32,32),e=new ue({uniforms:{glowColor:{value:new vt(this.data.color)},intensity:{value:.4}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        uniform float intensity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDirection = normalize(-vPosition);
          float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
          fresnel = pow(fresnel, 3.0);
          vec3 color = glowColor * fresnel * intensity;
          float alpha = fresnel * intensity * 0.6;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:Ee,blending:Me,depthWrite:!1});this.planetGlow=new jt(t,e),this.planetGlow.position.copy(this.planetMesh.position),this.axisGroup.add(this.planetGlow)}async createRings(){if(!this.data.ringBands||this.data.ringBands.length===0)return this.createLegacyRings();let t=1/0,e=0;this.data.ringBands.forEach(h=>{t=Math.min(t,h.inner),e=Math.max(e,h.outer)});const i=this.data.radius*t,n=this.data.radius*e,a=new Ea(i,n,128),r=a.attributes.position,o=a.attributes.uv;for(let h=0;h<r.count;h++){const u=r.getX(h),d=r.getY(h),g=(Math.sqrt(u*u+d*d)-i)/(n-i);o.setXY(h,g,.5)}const l=this.createAccurateRingTexture(t,e),c=new Bi({map:l,side:Je,transparent:!0,opacity:1,alphaTest:.01,depthWrite:!1});this.ringMesh=new jt(a,c),this.ringMesh.rotation.x=Math.PI/2,this.ringMesh.position.copy(this.planetMesh.position),this.ringMesh.renderOrder=1,this.axisGroup.add(this.ringMesh)}async createLegacyRings(){const t=this.data.radius*(this.data.ringInnerRadius||1.2),e=this.data.radius*(this.data.ringOuterRadius||2.3),i=new Ea(t,e,128),n=i.attributes.position,a=i.attributes.uv;for(let c=0;c<n.count;c++){const h=n.getX(c),u=n.getY(c),p=(Math.sqrt(h*h+u*u)-t)/(e-t);a.setXY(c,p,.5)}const r=this.createSaturnRingTexture(),o=this.data.ringOpacity||.9,l=new Bi({map:r,side:Je,transparent:!0,opacity:o});this.ringMesh=new jt(i,l),this.ringMesh.rotation.x=Math.PI/2,this.ringMesh.position.copy(this.planetMesh.position),this.axisGroup.add(this.ringMesh)}createAccurateRingTexture(t,e){const i=document.createElement("canvas");i.width=2048,i.height=64;const n=i.getContext("2d");n.clearRect(0,0,i.width,i.height);const a=e-t;return this.data.ringBands.forEach(r=>{const o=(r.inner-t)/a*i.width,l=(r.outer-t)/a*i.width,c=l-o,h=new vt(r.color),u=Math.floor(h.r*255),d=Math.floor(h.g*255),p=Math.floor(h.b*255),g=n.createLinearGradient(o,0,l,0),v=Math.min(.1,10/c);g.addColorStop(0,`rgba(${u}, ${d}, ${p}, 0)`),g.addColorStop(v,`rgba(${u}, ${d}, ${p}, ${r.opacity})`),g.addColorStop(.5,`rgba(${u}, ${d}, ${p}, ${r.opacity})`),g.addColorStop(1-v,`rgba(${u}, ${d}, ${p}, ${r.opacity})`),g.addColorStop(1,`rgba(${u}, ${d}, ${p}, 0)`),n.fillStyle=g,n.fillRect(o,0,c,i.height)}),this.addRingNoise(n,i.width,i.height),new ti(i)}addRingNoise(t,e,i){const n=this.data.ringType||"saturn";if(n==="saturn"){for(let a=0;a<5e3;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.15;t.fillStyle=`rgba(255, 255, 255, ${l})`,t.fillRect(r,o,1,1)}for(let a=0;a<2e3;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.1;t.fillStyle=`rgba(100, 80, 60, ${l})`,t.fillRect(r,o,2,1)}}else if(n==="jupiter")for(let a=0;a<500;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.05;t.fillStyle=`rgba(200, 150, 100, ${l})`,t.fillRect(r,o,1,1)}else if(n==="uranus")for(let a=0;a<300;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.08;t.fillStyle=`rgba(80, 80, 80, ${l})`,t.fillRect(r,o,1,1)}else if(n==="neptune")for(let a=0;a<200;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.04;t.fillStyle=`rgba(100, 80, 70, ${l})`,t.fillRect(r,o,1,1)}}createSaturnRingTexture(){const t=document.createElement("canvas");t.width=1024,t.height=64;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,1024,0);i.addColorStop(0,"rgba(200, 180, 150, 0.0)"),i.addColorStop(.05,"rgba(210, 190, 160, 0.7)"),i.addColorStop(.1,"rgba(200, 180, 150, 0.95)"),i.addColorStop(.15,"rgba(180, 160, 130, 0.2)"),i.addColorStop(.18,"rgba(180, 160, 130, 0.15)"),i.addColorStop(.22,"rgba(200, 180, 150, 0.9)"),i.addColorStop(.35,"rgba(220, 200, 170, 0.95)"),i.addColorStop(.45,"rgba(200, 180, 150, 0.85)"),i.addColorStop(.55,"rgba(180, 160, 140, 0.7)"),i.addColorStop(.65,"rgba(200, 180, 150, 0.8)"),i.addColorStop(.75,"rgba(190, 170, 145, 0.6)"),i.addColorStop(.85,"rgba(180, 160, 140, 0.4)"),i.addColorStop(.95,"rgba(170, 150, 130, 0.2)"),i.addColorStop(1,"rgba(160, 140, 120, 0.0)"),e.fillStyle=i,e.fillRect(0,0,1024,64);for(let n=0;n<3e3;n++){const a=Math.random()*1024,r=Math.random()*64,o=Math.random()*.2;e.fillStyle=`rgba(255, 255, 255, ${o})`,e.fillRect(a,r,1,1)}for(let n=0;n<1e3;n++){const a=Math.random()*1024,r=Math.random()*64,o=Math.random()*.15;e.fillStyle=`rgba(100, 80, 60, ${o})`,e.fillRect(a,r,2,1)}return new ti(t)}createUranusRingTexture(){const t=document.createElement("canvas");t.width=512,t.height=32;const e=t.getContext("2d");e.clearRect(0,0,512,32);const i=e.createLinearGradient(0,0,512,0);i.addColorStop(0,"rgba(80, 100, 130, 0.0)"),i.addColorStop(.15,"rgba(90, 110, 140, 0.15)"),i.addColorStop(.25,"rgba(70, 90, 120, 0.05)"),i.addColorStop(.35,"rgba(90, 110, 140, 0.2)"),i.addColorStop(.45,"rgba(80, 100, 130, 0.1)"),i.addColorStop(.55,"rgba(90, 110, 140, 0.25)"),i.addColorStop(.65,"rgba(80, 100, 130, 0.08)"),i.addColorStop(.75,"rgba(90, 110, 140, 0.15)"),i.addColorStop(.85,"rgba(80, 100, 130, 0.1)"),i.addColorStop(1,"rgba(70, 90, 120, 0.0)"),e.fillStyle=i,e.fillRect(0,0,512,32);for(let n=0;n<500;n++){const a=Math.random()*512,r=Math.random()*32,o=Math.random()*.1;e.fillStyle=`rgba(150, 170, 200, ${o})`,e.fillRect(a,r,1,1)}return new ti(t)}createProceduralRingTexture(){return this.createSaturnRingTexture()}createMoonPhaseMaterial(t,e){return this.moonSunDirection={value:new P(1,0,0)},new ue({uniforms:{moonTexture:{value:t},baseColor:{value:new vt(e||11184810)},sunDirection:this.moonSunDirection,hasTexture:{value:t?1:0}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D moonTexture;
        uniform vec3 baseColor;
        uniform vec3 sunDirection;
        uniform float hasTexture;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
          // Get base color from texture or fallback
          vec3 color;
          if (hasTexture > 0.5) {
            color = texture2D(moonTexture, vUv).rgb;
          } else {
            color = baseColor;
          }

          // Calculate sun illumination on the moon
          float sunDot = dot(vWorldNormal, sunDirection);

          // Sharp terminator for moon phases
          float illumination = smoothstep(-0.05, 0.1, sunDot);

          // Ambient lighting on dark side (earthshine effect)
          float ambient = 0.03;

          // Final illumination
          float finalLight = ambient + illumination * 0.97;

          // Apply lighting
          vec3 litColor = color * finalLight;

          gl_FragColor = vec4(litColor, 1.0);
        }
      `})}async createMoons(){for(const t of this.data.moons){let e;if(t==="Moon")e=dg;else if(t==="Charon")e=pg;else if(Sc[t])e=Sc[t];else continue;const i=await this.createSingleMoon(e);i&&this.moons.push(i)}}async createSingleMoon(t){const e=new Ze(t.radius,32,32);let i,n=null;if(t.textureUrl)try{n=await this.loadTexture(t.textureUrl)}catch{}if(t.name==="Moon"&&t.parent==="Earth")i=this.createMoonPhaseMaterial(n,t.color);else{const u={color:t.color};n&&(u.map=n),i=new Bi(u)}const a=new jt(e,i);a.name=t.name,a.userData={type:"celestialBody",name:t.name,facts:t.facts,clickable:!0,isMoon:!0,parent:this.data.name};const r=new ke;r.position.copy(this.planetMesh.position);const o=new ke;r.add(o);const l=t.inclination||0,c=_e.degToRad(l);o.rotation.x=c,o.add(a),a.position.x=t.distance;let h=null;if(t.atmosphere){const u=new Ze(t.radius*t.atmosphere.scale,32,32),d=new ue({uniforms:{atmosphereColor:{value:new vt(t.atmosphere.color)},intensity:{value:t.atmosphere.opacity}},vertexShader:`
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 atmosphereColor;
          uniform float intensity;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vec3 viewDirection = normalize(-vPosition);
            float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
            fresnel = pow(fresnel, 2.0);
            vec3 color = atmosphereColor * fresnel * intensity * 2.0;
            float alpha = fresnel * intensity;
            gl_FragColor = vec4(color, alpha);
          }
        `,transparent:!0,side:Ee,blending:Me,depthWrite:!1});h=new jt(u,d),a.add(h)}return this.axisGroup.add(r),{mesh:a,pivot:r,orbitPlane:o,data:t,meanAnomaly:Math.random()*Math.PI*2,orbitAngle:Math.random()*Math.PI*2,semiMajorAxis:t.distance,eccentricity:t.eccentricity||0,inclination:l,retrograde:t.retrograde||!1,orbitalPeriod:t.orbitalPeriod||1,atmosphereMesh:h}}solveKeplerEquation(t,e){if(e<.001)return t;let i=t+e*Math.sin(t);const n=1e-6;let a=0;const r=10;for(;a<r;){const o=(i-e*Math.sin(i)-t)/(1-e*Math.cos(i));if(i-=o,Math.abs(o)<n)break;a++}return i}calculateMoonPosition(t){const e=t.eccentricity,i=t.semiMajorAxis,n=this.solveKeplerEquation(t.meanAnomaly,e),a=Math.sqrt(1-e*e)*Math.sin(n)/(1-e*Math.cos(n)),r=(Math.cos(n)-e)/(1-e*Math.cos(n)),o=Math.atan2(a,r),l=i*(1-e*Math.cos(n)),c=l*Math.cos(o),h=l*Math.sin(o);return{x:c,z:h,trueAnomaly:o}}async createClouds(){const t=new Ze(this.data.radius*1.015,64,64);let e=null;try{e=await this.loadTexture(this.data.cloudsUrl)}catch{return}const i=new Bi({map:e,transparent:!0,opacity:.5,depthWrite:!1,alphaMap:e});this.cloudsMesh=new jt(t,i),this.cloudsMesh.position.copy(this.planetMesh.position),this.axisGroup.add(this.cloudsMesh)}getMesh(){return this.orbitGroup}getOrbitLine(){return this.orbitLine}getWorldPosition(){const t=new P;return this.planetMesh.getWorldPosition(t),t}getOrbitalPosition(){let t=_e.radToDeg(this.orbitAngle)%360;return t<0&&(t+=360),t}getDistanceFromSun(){return this.data.distance/10}getClickableObjects(){const t=[this.planetMesh];return this.moons.forEach(e=>t.push(e.mesh)),t}setPositionForDate(t){if(this.currentJulianDate=t,this.useAccurateOrbits){const e=rh(this.data.name,t);e&&(this.planetMesh.position.x=e.x*Lt,this.planetMesh.position.z=e.y*Lt,this.planetMesh.position.y=e.z*Lt,this.orbitAngle=e.theta,this.planetGlow&&this.planetGlow.position.copy(this.planetMesh.position),this.atmosphereMesh&&this.atmosphereMesh.position.copy(this.planetMesh.position),this.ringMesh&&this.ringMesh.position.copy(this.planetMesh.position),this.cloudsMesh&&this.cloudsMesh.position.copy(this.planetMesh.position),this.data.name==="Earth"&&this.updateMoonForDate(t))}}updateMoonForDate(t){const e=this.moons.find(n=>n.data.name==="Moon");if(!e)return;const i=Sg(t);i&&(e.mesh.position.x=i.x*Lt*15,e.mesh.position.z=i.y*Lt*15,e.mesh.position.y=i.z*Lt*15,e.mesh.material.uniforms&&e.mesh.material.uniforms.phase&&(e.mesh.material.uniforms.phase.value=i.phase),e.phase=i.phase)}update(t,e=1,i=0,n=null){if(n!==null&&this.useAccurateOrbits)this.setPositionForDate(n);else{const o=2*Math.PI/(this.data.orbitalPeriod*100);this.orbitAngle+=o*t*e,this.planetMesh.position.x=Math.cos(this.orbitAngle)*this.data.distance,this.planetMesh.position.z=Math.sin(this.orbitAngle)*this.data.distance}const a=this.data.rotationPeriod>0?1:-1,r=Math.abs(1/this.data.rotationPeriod)*t*e*.5;if(this.planetMesh.rotation.y+=r*a,this.planetMesh.material.uniforms&&this.planetMesh.material.uniforms.sunDirection){const o=new P(-this.planetMesh.position.x,0,-this.planetMesh.position.z).normalize();this.planetMesh.material.uniforms.sunDirection.value.copy(o)}if(this.jupiterTimeUniform&&(this.jupiterTimeUniform.value=i),this.planetGlow&&this.planetGlow.position.copy(this.planetMesh.position),this.atmosphereMesh&&(this.atmosphereMesh.position.copy(this.planetMesh.position),this.atmosphereSunDirection)){const o=new P(-this.planetMesh.position.x,0,-this.planetMesh.position.z).normalize();this.atmosphereSunDirection.value.copy(o)}if(this.ringMesh&&this.ringMesh.position.copy(this.planetMesh.position),this.cloudsMesh&&(this.cloudsMesh.position.copy(this.planetMesh.position),this.cloudsMesh.rotation.y+=r*1.15),this.moons.forEach(o=>{o.pivot.position.copy(this.planetMesh.position);const l=2*Math.PI/(o.orbitalPeriod*100),c=o.retrograde?-1:1;o.meanAnomaly+=l*t*e*c,o.meanAnomaly=o.meanAnomaly%(2*Math.PI),o.meanAnomaly<0&&(o.meanAnomaly+=2*Math.PI);const h=this.calculateMoonPosition(o);if(o.mesh.position.x=h.x,o.mesh.position.z=h.z,o.mesh.position.y=0,o.orbitAngle=h.trueAnomaly,o.mesh.rotation.y=h.trueAnomaly+Math.PI,o.mesh.material.uniforms&&o.mesh.material.uniforms.sunDirection){const u=new P;o.mesh.getWorldPosition(u);const d=new P(-u.x,-u.y,-u.z).normalize();o.mesh.material.uniforms.sunDirection.value.copy(d)}}),this.moonSunDirection){const o=new P(-this.planetMesh.position.x,0,-this.planetMesh.position.z).normalize();this.moonSunDirection.value.copy(o)}}dispose(){this.planetMesh&&(this.planetMesh.geometry.dispose(),this.planetMesh.material.dispose(),this.planetMesh.material.map&&this.planetMesh.material.map.dispose()),this.planetGlow&&(this.planetGlow.geometry.dispose(),this.planetGlow.material.dispose()),this.atmosphereMesh&&(this.atmosphereMesh.geometry.dispose(),this.atmosphereMesh.material.dispose()),this.ringMesh&&(this.ringMesh.geometry.dispose(),this.ringMesh.material.dispose()),this.cloudsMesh&&(this.cloudsMesh.geometry.dispose(),this.cloudsMesh.material.dispose()),this.orbitLine&&(this.orbitLine.geometry.dispose(),this.orbitLine.material.dispose()),this.moons.forEach(t=>{t.mesh.geometry.dispose(),t.mesh.material.dispose()})}}class bg{constructor(t){this.data=t,this.currentJulianDate=null,this.orbitAngle=0,this.asteroidMesh=null,this.orbitLine=null,this.orbitGroup=new ke,this.orbitGroup.name=`${t.name}Orbit`,this.init()}init(){this.createAsteroidMesh(),this.createOrbitLine()}createAsteroidMesh(){const t=new La(this.data.radius,2),e=t.attributes.position;for(let r=0;r<e.count;r++){const o=e.getX(r),l=e.getY(r),c=e.getZ(r),h=.9+Math.random()*.2;e.setXYZ(r,o*h,l*h,c*h)}t.computeVertexNormals();const i=this.data.albedo!==void 0?this.data.albedo:.1,n=new ue({uniforms:{baseColor:{value:new vt(this.data.color)},albedo:{value:i},sunDirection:{value:new P(1,0,0)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 baseColor;
        uniform float albedo;
        uniform vec3 sunDirection;

        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normal = normalize(vNormal);

          // Calculate lighting
          float sunDot = dot(normal, sunDirection);

          // Diffuse lighting with albedo affecting brightness
          float ambientLight = 0.08;
          float diffuse = max(0.0, sunDot);

          // Apply albedo to affect overall brightness
          // Brighter asteroids (Vesta) should be more visible
          float albedoFactor = 0.3 + (albedo * 1.0);

          // Final lighting calculation
          float lighting = ambientLight + (diffuse * albedoFactor);

          // Apply lighting to surface color
          vec3 finalColor = baseColor * lighting;

          // Slight boost to prevent completely black dark sides
          finalColor = max(finalColor, baseColor * 0.03);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `});this.asteroidMesh=new jt(t,n),this.asteroidMesh.name=this.data.displayName||this.data.name,this.asteroidMesh.userData={type:"celestialBody",name:this.data.displayName||this.data.name,facts:this.data.facts,clickable:!0,isAsteroid:!0};const a=this.data.semiMajorAxis*Lt;this.asteroidMesh.position.x=a,this.orbitGroup.add(this.asteroidMesh)}createOrbitLine(){const t=[],i=this.data.semiMajorAxis*Lt,n=this.data.eccentricity;for(let h=0;h<=128;h++){const u=h/128*Math.PI*2,d=i*(1-n*n)/(1+n*Math.cos(u));t.push(new P(Math.cos(u)*d,0,Math.sin(u)*d))}const a=new Zt().setFromPoints(t),r=new vt(this.data.color).lerp(new vt(8939076),.5),o=new cn({color:r,transparent:!0,opacity:.3});this.orbitLine=new Xn(a,o),this.orbitLine.name=`${this.data.name}OrbitLine`;const l=_e.degToRad(this.data.inclination||0),c=_e.degToRad(this.data.longitudeOfAscendingNode||0);this.orbitLine.rotation.x=l,this.orbitLine.rotation.y=c}solveKeplerEquation(t,e){if(e<.001)return t;let i=t+e*Math.sin(t);const n=1e-8;let a=0;const r=15;for(;a<r;){const o=(i-e*Math.sin(i)-t)/(1-e*Math.cos(i));if(i-=o,Math.abs(o)<n)break;a++}return i}calculatePosition(t){const e=this.data.semiMajorAxis,i=this.data.eccentricity,n=_e.degToRad(this.data.inclination||0),a=_e.degToRad(this.data.argumentOfPerihelion||0),r=_e.degToRad(this.data.longitudeOfAscendingNode||0),o=_e.degToRad(this.data.meanAnomalyAtEpoch||0),l=this.data.epoch||2451545,c=.9856076686/(e*Math.sqrt(e)),h=t-l,u=(o+_e.degToRad(c*h))%(2*Math.PI),d=this.solveKeplerEquation(u,i),p=Math.sqrt(1-i*i)*Math.sin(d)/(1-i*Math.cos(d)),g=(Math.cos(d)-i)/(1-i*Math.cos(d)),v=Math.atan2(p,g),m=e*(1-i*Math.cos(d)),f=Math.cos(r),x=Math.sin(r),E=Math.cos(a+v),b=Math.sin(a+v),w=Math.cos(n),A=Math.sin(n),C=m*(f*E-x*b*w),L=m*(x*E+f*b*w),y=m*b*A;return{x:C*Lt,y:y*Lt,z:L*Lt,theta:v}}getMesh(){return this.orbitGroup}getOrbitLine(){return this.orbitLine}getWorldPosition(){const t=new P;return this.asteroidMesh.getWorldPosition(t),t}getClickableObjects(){return[this.asteroidMesh]}update(t,e=1,i=0,n=null){if(n!==null){const o=this.calculatePosition(n);this.asteroidMesh.position.x=o.x,this.asteroidMesh.position.y=o.y,this.asteroidMesh.position.z=o.z,this.orbitAngle=o.theta}else{const o=2*Math.PI/(this.data.orbitalPeriod*100);this.orbitAngle+=o*t*e;const l=this.data.semiMajorAxis*Lt;this.asteroidMesh.position.x=Math.cos(this.orbitAngle)*l,this.asteroidMesh.position.z=Math.sin(this.orbitAngle)*l}const r=1/(this.data.rotationPeriod/24)*t*e*.5;if(this.asteroidMesh.rotation.y+=r,this.asteroidMesh.material.uniforms&&this.asteroidMesh.material.uniforms.sunDirection){const o=new P(-this.asteroidMesh.position.x,-this.asteroidMesh.position.y,-this.asteroidMesh.position.z).normalize();this.asteroidMesh.material.uniforms.sunDirection.value.copy(o)}}dispose(){this.asteroidMesh&&(this.asteroidMesh.geometry.dispose(),this.asteroidMesh.material.dispose()),this.orbitLine&&(this.orbitLine.geometry.dispose(),this.orbitLine.material.dispose())}}class Eg{constructor(t){this.data=t,this.visible=!0,this.terminated=!1,this.spacecraftMesh=null,this.glowMesh=null,this.trajectoryLine=null,this.trailLine=null,this.group=new ke,this.group.name=`${t.name}Group`,this.waypoints=t.waypoints.map(e=>({...e,timestamp:new Date(e.date).getTime()})),t.terminationDate&&(this.terminationTimestamp=new Date(t.terminationDate).getTime()),this.init()}init(){this.createSpacecraftMesh(),this.createTrajectoryLine()}createSpacecraftMesh(){const t=new Ze(.08,16,16),e=new Pi({color:this.data.color,transparent:!0,opacity:1});this.spacecraftMesh=new jt(t,e),this.spacecraftMesh.name=this.data.name,this.spacecraftMesh.userData={type:"celestialBody",name:this.data.name,facts:this.data.facts,clickable:!0,isSpacecraft:!0};const i=new Ze(.25,16,16),n=new ue({uniforms:{glowColor:{value:new vt(this.data.color)},intensity:{value:.8}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        uniform float intensity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDirection = normalize(-vPosition);
          float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
          fresnel = pow(fresnel, 2.0);
          vec3 color = glowColor * fresnel * intensity;
          float alpha = fresnel * intensity * 0.8;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:Ee,blending:Me,depthWrite:!1});this.glowMesh=new jt(i,n),this.spacecraftMesh.add(this.glowMesh),this.group.add(this.spacecraftMesh)}createTrajectoryLine(){const t=[];for(let e=0;e<this.waypoints.length;e++){const i=this.waypoints[e],n=this.waypointToPosition(i);t.push(n)}if(t.length>=2){const i=new Hu(t).getPoints(200),n=new Zt().setFromPoints(i),a=new cn({color:this.data.color,transparent:!0,opacity:.4,linewidth:1});this.trajectoryLine=new Xn(n,a),this.trajectoryLine.name=`${this.data.name}Trajectory`}}waypointToPosition(t){const e=t.distance*Lt,i=_e.degToRad(t.lat);let n;if(this.data.name==="Cassini"){const c=this.waypoints.indexOf(t);n=_e.degToRad(c*30)}else n=_e.degToRad(this.data.departureAngle||0);const a=e*Math.cos(i),r=Math.cos(n)*a,o=Math.sin(n)*a,l=e*Math.sin(i);return new P(r,l,o)}getPositionForDate(t){let e=null,i=null;for(let h=0;h<this.waypoints.length-1;h++)if(t>=this.waypoints[h].timestamp&&t<=this.waypoints[h+1].timestamp){e=this.waypoints[h],i=this.waypoints[h+1];break}if(!e&&t<this.waypoints[0].timestamp)return null;if(!e){const h=this.waypoints[this.waypoints.length-1];this.waypoints[this.waypoints.length-2];const u=(t-h.timestamp)/(1e3*60*60*24*365.25),d=this.data.velocity*31557600/1495978707e-1,p=h.distance+d*u;return this.waypointToPosition({distance:p,lat:h.lat})}const n=i.timestamp-e.timestamp,r=(t-e.timestamp)/n,o=r*r*(3-2*r),l=this.waypointToPosition(e),c=this.waypointToPosition(i);return new P().lerpVectors(l,c,o)}getCurrentEvent(t){for(let e=this.waypoints.length-1;e>=0;e--)if(t>=this.waypoints[e].timestamp)return this.waypoints[e].event;return"Pre-Launch"}getMesh(){return this.group}getTrajectoryLine(){return this.trajectoryLine}getWorldPosition(){const t=new P;return this.spacecraftMesh.getWorldPosition(t),t}getClickableObjects(){return[this.spacecraftMesh]}isVisibleAtDate(t){return!(t<this.waypoints[0].timestamp||this.terminationTimestamp&&t>this.terminationTimestamp)}update(t,e,i,n,a){a||(a=new Date);const r=a.getTime(),o=this.isVisibleAtDate(r);if(this.spacecraftMesh.visible=o,this.glowMesh.visible=o,!o)return;const l=this.getPositionForDate(r);if(l&&this.spacecraftMesh.position.copy(l),this.glowMesh.material.uniforms){const c=.7+Math.sin(i*2)*.15;this.glowMesh.material.uniforms.intensity.value=c}}dispose(){this.spacecraftMesh&&(this.spacecraftMesh.geometry.dispose(),this.spacecraftMesh.material.dispose()),this.glowMesh&&(this.glowMesh.geometry.dispose(),this.glowMesh.material.dispose()),this.trajectoryLine&&(this.trajectoryLine.geometry.dispose(),this.trajectoryLine.material.dispose())}}class wg{constructor(){this.data=mg,this.group=new ke,this.group.name="AsteroidBelt",this.asteroids=[],this.instancedMesh=null,this.dummy=new De,this.init()}init(){this.createAsteroids()}createAsteroids(){const t=[new La(1,0),new Jo(1,0),new Qo(1,0)],e=t[0],i=new Bi({color:this.data.color,roughness:.9,metalness:.1,flatShading:!0});this.instancedMesh=new Ou(e,i,this.data.count),this.instancedMesh.name="AsteroidInstances";for(let a=0;a<this.data.count;a++){const r=_e.randFloat(this.data.innerRadius,this.data.outerRadius),o=Math.random()*Math.PI*2,l=_e.randFloatSpread(this.data.verticalSpread),c=_e.randFloat(this.data.minSize,this.data.maxSize),h=Math.random()*Math.PI*2,u=Math.random()*Math.PI*2,d=Math.random()*Math.PI*2,p=.01/Math.sqrt(r/this.data.innerRadius);this.asteroids.push({radius:r,angle:o,verticalOffset:l,size:c,rotationX:h,rotationY:u,rotationZ:d,orbitalVelocity:p,rotationSpeed:_e.randFloat(.5,2)}),this.updateAsteroidMatrix(a)}const n=new Float32Array(this.data.count*3);for(let a=0;a<this.data.count;a++){const r=.5+Math.random()*.4;n[a*3]=r+Math.random()*.15,n[a*3+1]=r+Math.random()*.05,n[a*3+2]=r*.85}this.instancedMesh.instanceColor=new vo(n,3),this.group.add(this.instancedMesh),t[1].dispose(),t[2].dispose()}updateAsteroidMatrix(t){const e=this.asteroids[t],i=Math.cos(e.angle)*e.radius,n=Math.sin(e.angle)*e.radius,a=e.verticalOffset;this.dummy.position.set(i,a,n),this.dummy.rotation.set(e.rotationX,e.rotationY,e.rotationZ),this.dummy.scale.setScalar(e.size),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(t,this.dummy.matrix)}getMesh(){return this.group}update(t,e=1){for(let i=0;i<this.data.count;i++){const n=this.asteroids[i];n.angle+=n.orbitalVelocity*t*e,n.rotationX+=n.rotationSpeed*t*.1,n.rotationY+=n.rotationSpeed*t*.15,n.rotationZ+=n.rotationSpeed*t*.05,this.updateAsteroidMatrix(i)}this.instancedMesh.instanceMatrix.needsUpdate=!0}dispose(){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose())}}class Tg{constructor(){this.data=_g,this.group=new ke,this.group.name="KuiperBelt",this.particles=null,this.init()}init(){this.createParticles()}createParticles(){const t=new Float32Array(this.data.count*3),e=new Float32Array(this.data.count*3),i=new Float32Array(this.data.count);this.orbitalData=[];for(let h=0;h<this.data.count;h++){const u=_e.randFloat(this.data.innerRadius,this.data.outerRadius),d=Math.random()*Math.PI*2,p=_e.randFloatSpread(this.data.verticalSpread);this.orbitalData.push({radius:u,angle:d,verticalOffset:p,orbitalVelocity:.002/Math.sqrt(u/this.data.innerRadius)});const g=Math.cos(d)*u,v=Math.sin(d)*u;t[h*3]=g,t[h*3+1]=p,t[h*3+2]=v;const m=Math.random();m<.7?(e[h*3]=.3+Math.random()*.1,e[h*3+1]=.35+Math.random()*.1,e[h*3+2]=.5+Math.random()*.15):m<.85?(e[h*3]=.25+Math.random()*.1,e[h*3+1]=.3+Math.random()*.1,e[h*3+2]=.4+Math.random()*.1):(e[h*3]=.35+Math.random()*.1,e[h*3+1]=.3+Math.random()*.1,e[h*3+2]=.5+Math.random()*.15),i[h]=_e.randFloat(this.data.minSize,this.data.maxSize)*50}const n=new Zt;n.setAttribute("position",new re(t,3)),n.setAttribute("color",new re(e,3)),n.setAttribute("size",new re(i,1));const a=document.createElement("canvas");a.width=32,a.height=32;const r=a.getContext("2d"),o=r.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255, 255, 255, 1)"),o.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),o.addColorStop(.7,"rgba(255, 255, 255, 0.3)"),o.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=o,r.fillRect(0,0,32,32);const l=new ti(a),c=new $n({size:.5,vertexColors:!0,transparent:!0,opacity:this.data.opacity,sizeAttenuation:!0,blending:Me,map:l,depthWrite:!1});this.particles=new ws(n,c),this.particles.name="KuiperBeltParticles",this.group.add(this.particles)}getMesh(){return this.group}update(t,e=1){const i=this.particles.geometry.attributes.position.array;for(let n=0;n<this.data.count;n++){const a=this.orbitalData[n];a.angle+=a.orbitalVelocity*t*e;const r=Math.cos(a.angle)*a.radius,o=Math.sin(a.angle)*a.radius;i[n*3]=r,i[n*3+2]=o}this.particles.geometry.attributes.position.needsUpdate=!0}dispose(){this.particles&&(this.particles.geometry.dispose(),this.particles.material.dispose(),this.particles.material.map&&this.particles.material.map.dispose())}}class Ag{constructor(t={}){this.starCount=t.starCount||1e4,this.milkyWayStarCount=t.milkyWayStarCount||8e3,this.radius=t.radius||1e3,this.group=new ke,this.group.name="StarfieldGroup",this.geometry=null,this.material=null,this.mesh=null,this.milkyWayMesh=null,this.init()}init(){this.createMainStarfield(),this.createMilkyWay()}createMainStarfield(){this.geometry=new Zt;const t=new Float32Array(this.starCount*3),e=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount);for(let n=0;n<this.starCount;n++){const a=n*3,r=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1);t[a]=this.radius*Math.sin(o)*Math.cos(r),t[a+1]=this.radius*Math.sin(o)*Math.sin(r),t[a+2]=this.radius*Math.cos(o);const l=Math.random();l<.7?(e[a]=.9+Math.random()*.1,e[a+1]=.9+Math.random()*.1,e[a+2]=.9+Math.random()*.1):l<.85?(e[a]=.7+Math.random()*.2,e[a+1]=.8+Math.random()*.2,e[a+2]=1):(e[a]=1,e[a+1]=.8+Math.random()*.2,e[a+2]=.5+Math.random()*.3),i[n]=Math.random()*2+.5}this.geometry.setAttribute("position",new re(t,3)),this.geometry.setAttribute("color",new re(e,3)),this.geometry.setAttribute("size",new re(i,1)),this.material=new $n({size:1.5,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:Me}),this.mesh=new ws(this.geometry,this.material),this.mesh.name="Starfield",this.group.add(this.mesh)}createMilkyWay(){const t=new Zt,e=new Float32Array(this.milkyWayStarCount*3),i=new Float32Array(this.milkyWayStarCount*3),n=.35,a=Math.PI/6;for(let u=0;u<this.milkyWayStarCount;u++){const d=u*3,p=Math.random()*Math.PI*2,g=(Math.random()+Math.random()+Math.random()-1.5)*n,v=Math.PI/2+g;let m=this.radius*Math.sin(v)*Math.cos(p),f=this.radius*Math.sin(v)*Math.sin(p),x=this.radius*Math.cos(v);const E=Math.cos(a),b=Math.sin(a),w=f*E-x*b,A=f*b+x*E;e[d]=m,e[d+1]=w,e[d+2]=A;const C=.3+Math.random()*.4,L=Math.random();L<.4?(i[d]=C*1,i[d+1]=C*.95,i[d+2]=C*.85):L<.7?(i[d]=C*.9,i[d+1]=C*.95,i[d+2]=C*1):(i[d]=C*1,i[d+1]=C*.8,i[d+2]=C*.85)}t.setAttribute("position",new re(e,3)),t.setAttribute("color",new re(i,3));const r=document.createElement("canvas");r.width=32,r.height=32;const o=r.getContext("2d"),l=o.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.3,"rgba(255, 255, 255, 0.5)"),l.addColorStop(.7,"rgba(255, 255, 255, 0.1)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=l,o.fillRect(0,0,32,32);const c=new ti(r),h=new $n({size:2.5,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0,blending:Me,map:c,depthWrite:!1});this.milkyWayMesh=new ws(t,h),this.milkyWayMesh.name="MilkyWay",this.group.add(this.milkyWayMesh),this.createNebulaGlow()}createNebulaGlow(){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d"),n=i.createRadialGradient(128,128,0,128,128,128);n.addColorStop(0,"rgba(180, 160, 200, 0.3)"),n.addColorStop(.3,"rgba(160, 140, 180, 0.15)"),n.addColorStop(.6,"rgba(140, 120, 160, 0.05)"),n.addColorStop(1,"rgba(120, 100, 140, 0)"),i.fillStyle=n,i.fillRect(0,0,256,256);const a=new ti(e),r=new Wn({map:a,transparent:!0,blending:Me,depthWrite:!1,opacity:.3}),o=Math.PI/6;for(let l=0;l<20;l++){const c=new Es(r.clone()),h=l/20*Math.PI*2+Math.random()*.5,u=Math.PI/2+(Math.random()-.5)*.3;let d=this.radius*.95*Math.sin(u)*Math.cos(h),p=this.radius*.95*Math.sin(u)*Math.sin(h),g=this.radius*.95*Math.cos(u);const v=Math.cos(o),m=Math.sin(o),f=p*v-g*m,x=p*m+g*v;c.position.set(d,f,x);const E=100+Math.random()*150;c.scale.set(E,E,1);const b=Math.random();b<.4?c.material.color.setHex(13417437):b<.7?c.material.color.setHex(14535867):c.material.color.setHex(12307677),this.group.add(c)}}getMesh(){return this.group}update(t){this.group.rotation.y+=t*.001}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.milkyWayMesh&&(this.milkyWayMesh.geometry.dispose(),this.milkyWayMesh.material.dispose(),this.milkyWayMesh.material.map&&this.milkyWayMesh.material.map.dispose())}}const hs=Math.PI/180;class Cg{constructor(t={}){this.data=nh,this.semiMajorAxis=this.data.semiMajorAxis,this.eccentricity=this.data.eccentricity,this.inclination=this.data.inclination*hs,this.longitudeOfAscendingNode=this.data.longitudeOfAscendingNode*hs,this.argumentOfPerihelion=this.data.argumentOfPerihelion*hs,this.meanAnomalyAtEpoch=this.data.meanAnomalyAtEpoch*hs,this.epoch=this.data.epoch,this.meanMotion=this.data.meanMotion*hs,this.orbitalPeriod=this.data.orbitalPeriod,this.perihelion=this.data.perihelion,this.aphelion=this.data.aphelion,this.group=new ke,this.group.name="Halley's Comet",this.nucleus=null,this.hitbox=null,this.coma=null,this.dustTail=null,this.ionTail=null,this.orbitLine=null,this.currentJulianDate=null,this.dustTailCount=250,this.ionTailCount=150,this.init()}init(){this.createNucleus(),this.createHitbox(),this.createComa(),this.createDustTail(),this.createIonTail(),this.createOrbitLine()}solveKepler(t,e){t=t%(2*Math.PI),t<0&&(t+=2*Math.PI);let i=t+e*Math.sin(t)*(1+e*Math.cos(t));const n=1e-10;let a=1,r=0;const o=30;for(;Math.abs(a)>n&&r<o;)a=(i-e*Math.sin(i)-t)/(1-e*Math.cos(i)),i-=a,r++;return i}calculatePosition(t){const e=t-this.epoch,i=this.meanAnomalyAtEpoch+this.meanMotion*e,n=this.solveKepler(i,this.eccentricity),a=Math.sqrt(1-this.eccentricity*this.eccentricity)*Math.sin(n)/(1-this.eccentricity*Math.cos(n)),r=(Math.cos(n)-this.eccentricity)/(1-this.eccentricity*Math.cos(n)),o=Math.atan2(a,r),l=this.semiMajorAxis*(1-this.eccentricity*Math.cos(n)),c=l*Math.cos(o),h=l*Math.sin(o),u=Math.cos(this.argumentOfPerihelion),d=Math.sin(this.argumentOfPerihelion),p=Math.cos(this.longitudeOfAscendingNode),g=Math.sin(this.longitudeOfAscendingNode),v=Math.cos(this.inclination),m=Math.sin(this.inclination),f=(u*p-d*g*v)*c+(-d*p-u*g*v)*h,x=(u*g+d*p*v)*c+(-d*g+u*p*v)*h,E=d*m*c+u*m*h;return{x:f,y:x,z:E,r:l,trueAnomaly:o}}createNucleus(){const t=new Ze(.12,16,16),e=new Bi({color:2236962,roughness:.95,metalness:.05});this.nucleus=new jt(t,e),this.nucleus.name="Halley's Comet",this.nucleus.userData={type:"celestialBody",name:"Halley's Comet",clickable:!0,facts:this.data.facts},this.group.add(this.nucleus)}createHitbox(){const t=new Ze(2.5,16,16),e=new Pi({visible:!1,transparent:!0,opacity:0});this.hitbox=new jt(t,e),this.hitbox.name="Halley's Comet",this.hitbox.userData={type:"celestialBody",name:"Halley's Comet",clickable:!0,isComet:!0,facts:this.data.facts},this.group.add(this.hitbox)}createComa(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(200, 220, 255, 1)"),i.addColorStop(.2,"rgba(180, 200, 255, 0.8)"),i.addColorStop(.5,"rgba(150, 180, 255, 0.4)"),i.addColorStop(.8,"rgba(120, 150, 255, 0.1)"),i.addColorStop(1,"rgba(100, 130, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,128,128);const n=new ti(t),a=new Wn({map:n,transparent:!0,blending:Me,depthWrite:!1});this.coma=new Es(a),this.coma.scale.set(2,2,1),this.group.add(this.coma)}createDustTail(){const t=new Zt,e=new Float32Array(this.dustTailCount*3),i=new Float32Array(this.dustTailCount*3),n=new Float32Array(this.dustTailCount),a=[];for(let u=0;u<this.dustTailCount;u++)e[u*3]=0,e[u*3+1]=0,e[u*3+2]=0,i[u*3]=1,i[u*3+1]=.9+Math.random()*.1,i[u*3+2]=.7+Math.random()*.2,n[u]=.5+Math.random()*1,a.push({speed:.5+Math.random()*1.5,angle:(Math.random()-.5)*.3,offset:Math.random()*Math.PI*2});t.setAttribute("position",new re(e,3)),t.setAttribute("color",new re(i,3)),t.setAttribute("size",new re(n,1));const r=document.createElement("canvas");r.width=32,r.height=32;const o=r.getContext("2d"),l=o.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),l.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=l,o.fillRect(0,0,32,32);const c=new ti(r),h=new $n({size:.4,vertexColors:!0,transparent:!0,opacity:.35,map:c,blending:Me,depthWrite:!1,sizeAttenuation:!0});this.dustTail=new ws(t,h),this.dustTail.userData.velocities=a,this.group.add(this.dustTail)}createIonTail(){const t=new Zt,e=new Float32Array(this.ionTailCount*3),i=new Float32Array(this.ionTailCount*3);for(let c=0;c<this.ionTailCount;c++)e[c*3]=0,e[c*3+1]=0,e[c*3+2]=0,i[c*3]=.3+Math.random()*.2,i[c*3+1]=.5+Math.random()*.3,i[c*3+2]=1;t.setAttribute("position",new re(e,3)),t.setAttribute("color",new re(i,3));const n=document.createElement("canvas");n.width=32,n.height=32;const a=n.getContext("2d"),r=a.createRadialGradient(16,16,0,16,16,16);r.addColorStop(0,"rgba(100, 150, 255, 1)"),r.addColorStop(.3,"rgba(100, 150, 255, 0.6)"),r.addColorStop(.6,"rgba(100, 150, 255, 0.2)"),r.addColorStop(1,"rgba(100, 150, 255, 0)"),a.fillStyle=r,a.fillRect(0,0,32,32);const o=new ti(n),l=new $n({size:.25,vertexColors:!0,transparent:!0,opacity:.3,map:o,blending:Me,depthWrite:!1,sizeAttenuation:!0});this.ionTail=new ws(t,l),this.group.add(this.ionTail)}createOrbitLine(){const t=[];for(let a=0;a<=512;a++){const r=a/512*Math.PI*2,o=this.semiMajorAxis*(1-this.eccentricity*this.eccentricity)/(1+this.eccentricity*Math.cos(r)),l=o*Math.cos(r),c=o*Math.sin(r),h=Math.cos(this.argumentOfPerihelion),u=Math.sin(this.argumentOfPerihelion),d=Math.cos(this.longitudeOfAscendingNode),p=Math.sin(this.longitudeOfAscendingNode),g=Math.cos(this.inclination),v=Math.sin(this.inclination),m=(h*d-u*p*g)*l+(-u*d-h*p*g)*c,f=(h*p+u*d*g)*l+(-u*p+h*d*g)*c,x=u*v*l+h*v*c;t.push(new P(m*Lt,x*Lt,f*Lt))}const i=new Zt().setFromPoints(t),n=new cn({color:6710954,transparent:!0,opacity:.3});this.orbitLine=new Xn(i,n),this.orbitLine.name="Halley's Comet Orbit"}getMesh(){return this.group}getOrbitLine(){return this.orbitLine}getClickableObjects(){return[this.hitbox]}getWorldPosition(){const t=new P;return this.nucleus.getWorldPosition(t),t}setPositionForDate(t){this.currentJulianDate=t;const e=this.calculatePosition(t),i=e.x*Lt,n=e.z*Lt,a=e.y*Lt;this.nucleus.position.set(i,n,a),this.hitbox.position.copy(this.nucleus.position),this.coma.position.copy(this.nucleus.position);const o=(e.r-this.perihelion)/(this.aphelion-this.perihelion),c=25*Math.max(.1,1-o*.8),h=new P(i,n,a).normalize(),u=1.5+(1-o)*3;this.coma.scale.set(u,u,1),this.coma.material.opacity=.4+(1-o)*.5,this.updateDustTail(h,c,e.trueAnomaly),this.updateIonTail(h,c*1.5),this.dustTail.material.opacity=.1+(1-o)*.3,this.ionTail.material.opacity=.08+(1-o)*.25}update(t,e=1,i=0,n=null){n!==null&&this.setPositionForDate(n)}updateDustTail(t,e,i){const n=this.dustTail.geometry.attributes.position.array,a=this.dustTail.userData.velocities,r=new P(Math.sin(i+this.argumentOfPerihelion),0,-Math.cos(i+this.argumentOfPerihelion)).normalize();for(let o=0;o<this.dustTailCount;o++){const l=o/this.dustTailCount,c=a[o],h=l*l*.3,u=new P().copy(t).multiplyScalar(1-h).add(r.clone().multiplyScalar(h)).normalize(),d=l*e*c.speed,p=l*1.5*(Math.sin(c.offset+l*3)*.5+.5);n[o*3]=this.nucleus.position.x+u.x*d+(Math.random()-.5)*p,n[o*3+1]=this.nucleus.position.y+u.y*d+(Math.random()-.5)*p*.5,n[o*3+2]=this.nucleus.position.z+u.z*d+(Math.random()-.5)*p}this.dustTail.geometry.attributes.position.needsUpdate=!0}updateIonTail(t,e){const i=this.ionTail.geometry.attributes.position.array;for(let n=0;n<this.ionTailCount;n++){const a=n/this.ionTailCount,r=a*e,o=a*.4;i[n*3]=this.nucleus.position.x+t.x*r+(Math.random()-.5)*o,i[n*3+1]=this.nucleus.position.y+t.y*r+(Math.random()-.5)*o*.3,i[n*3+2]=this.nucleus.position.z+t.z*r+(Math.random()-.5)*o}this.ionTail.geometry.attributes.position.needsUpdate=!0}dispose(){this.nucleus&&(this.nucleus.geometry.dispose(),this.nucleus.material.dispose()),this.hitbox&&(this.hitbox.geometry.dispose(),this.hitbox.material.dispose()),this.coma&&(this.coma.material.map.dispose(),this.coma.material.dispose()),this.dustTail&&(this.dustTail.geometry.dispose(),this.dustTail.material.dispose(),this.dustTail.material.map.dispose()),this.ionTail&&(this.ionTail.geometry.dispose(),this.ionTail.material.dispose(),this.ionTail.material.map.dispose()),this.orbitLine&&(this.orbitLine.geometry.dispose(),this.orbitLine.material.dispose())}}const wc={type:"change"},nl={type:"start"},oh={type:"end"},ha=new Ps,Tc=new Oi,Pg=Math.cos(70*_e.DEG2RAD),Se=new P,He=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mr=1e-6;class Rg extends nd{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ln,this._lastTargetPosition=new P,this._quat=new ln().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new P,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new P,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lg.bind(this),this._onPointerDown=Dg.bind(this),this._onPointerUp=Ig.bind(this),this._onContextMenu=kg.bind(this),this._onMouseWheel=Fg.bind(this),this._onKeyDown=Og.bind(this),this._onTouchStart=Bg.bind(this),this._onTouchMove=zg.bind(this),this._onMouseDown=Ug.bind(this),this._onMouseMove=Ng.bind(this),this._interceptControlDown=Vg.bind(this),this._interceptControlUp=Gg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wc),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),n<-Math.PI?n+=He:n>Math.PI&&(n-=He),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Se.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<Pg?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Mr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mr||this._lastTargetPosition.distanceToSquared(this.target)>Mr?(this.dispatchEvent(wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Se.copy(n).sub(this.target);let a=Se.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,a=e-i.top,r=i.width,o=i.height;this._mouse.x=n/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Dg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Lg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ig(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(oh),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ug(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ne.DOLLY;break;case Nn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}break;case Nn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(nl)}function Ng(s){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Fg(s){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(s.preventDefault(),this.dispatchEvent(nl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(oh))}function Og(s){this.enabled!==!1&&this._handleKeyDown(s)}function Bg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case In.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ne.TOUCH_ROTATE;break;case In.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case In.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ne.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(nl)}function zg(s){switch(this._trackPointer(s),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ne.NONE}}function kg(s){this.enabled!==!1&&s.preventDefault()}function Vg(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class gi{constructor(t,e,i,n,a="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),gi.nextNameID=gi.nextNameID||0,this.$name.id=`lil-gui-name-${++gi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Hg extends gi{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function bo(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Wg={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:bo,toHexString:bo},Cs={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Xg={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,t,e=1){const i=Cs.fromHexString(s);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([s,t,e],i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return Cs.toHexString(n)}},$g={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const i=Cs.fromHexString(s);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:s,g:t,b:e},i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return Cs.toHexString(n)}},jg=[Wg,Cs,Xg,$g];function qg(s){return jg.find(t=>t.match(s))}class Yg extends gi{constructor(t,e,i,n){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qg(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=bo(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Sr extends gi{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Kg extends gi{constructor(t,e,i,n,a,r){super(t,e,i,"lil-number"),this._initInput(),this.min(n),this.max(a);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},i=x=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+x),this.$input.value=this.getValue())},n=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x)*-1))},a=x=>{this._inputFocused&&(x.preventDefault(),i(this._step*this._normalizeMouseWheel(x)))};let r=!1,o,l,c,h,u;const d=5,p=x=>{o=x.clientX,l=c=x.clientY,r=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=x=>{if(r){const E=x.clientX-o,b=x.clientY-l;Math.abs(b)>d?(x.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>d&&v()}if(!r){const E=x.clientY-c;u-=E*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=x.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(f,x,E,b,w)=>(f-x)/(E-x)*(w-b)+b,e=f=>{const x=this.$slider.getBoundingClientRect();let E=t(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(E)},i=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",a)},n=f=>{e(f.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a)};let r=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),r=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,r=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(r){const x=f.touches[0].clientX-o,E=f.touches[0].clientY-l;Math.abs(x)>Math.abs(E)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let v;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const E=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Zg extends gi{constructor(t,e,i,n){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Jg extends gi{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Qg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function t_(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ac=!1;class sl{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:a="Controls",closeFolders:r=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Ac&&o&&(t_(Qg),Ac=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=r}add(t,e,i,n,a){if(Object(i)===i)return new Zg(this,t,e,i);const r=t[e];switch(typeof r){case"number":return new Kg(this,t,e,i,n,a);case"boolean":return new Hg(this,t,e);case"string":return new Jg(this,t,e);case"function":return new Sr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,i=1){return new Yg(this,t,e,i)}addFolder(t){const e=new sl({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Sr||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Sr)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const br=[{date:"1940-08-01",name:"Jupiter-Saturn Triple Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"1952-02-25",name:"Total Solar Eclipse (3m 9s)",type:"eclipse",planets:["Earth"]},{date:"1955-06-20",name:"Longest Eclipse Until 2150 (7m 8s)",type:"eclipse",planets:["Earth"]},{date:"1961-02-15",name:"Great Conjunction (0.22° apart)",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"1962-02-05",name:"Five Planet Alignment + Eclipse",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn"]},{date:"1965-10-21",name:"Comet Ikeya-Seki (brightest of century)",type:"comet",planets:[]},{date:"1970-03-07",name:"Total Solar Eclipse - First Color TV",type:"eclipse",planets:["Earth"]},{date:"1973-06-30",name:"Total Solar Eclipse (7m 4s) - Concorde",type:"eclipse",planets:["Earth"]},{date:"1979-02-26",name:"Last US Eclipse Until 2017",type:"eclipse",planets:["Earth"]},{date:"1981-03-06",name:"Jupiter-Saturn Triple Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"1986-02-09",name:"Halley's Comet Perihelion",type:"comet",planets:[]},{date:"1991-07-11",name:"Eclipse of the Century (6m 53s)",type:"eclipse",planets:["Earth"]},{date:"1996-03-25",name:"Comet Hyakutake Close Pass",type:"comet",planets:[]},{date:"1997-04-01",name:"Comet Hale-Bopp Perihelion",type:"comet",planets:[]},{date:"1999-08-11",name:"Most-Viewed Eclipse - Europe",type:"eclipse",planets:["Earth"]},{date:"2003-08-27",name:"Mars Closest in 60,000 Years",type:"approach",planets:["Mars"]},{date:"2004-06-08",name:"Venus Transit",type:"transit",planets:["Venus"]},{date:"2009-07-22",name:"Longest Eclipse of 21st Century (6m 39s)",type:"eclipse",planets:["Earth"]},{date:"2012-06-06",name:"Venus Transit (last until 2117)",type:"transit",planets:["Venus"]},{date:"2016-08-27",name:"Venus-Jupiter Conjunction (4 arcmin)",type:"conjunction",planets:["Venus","Jupiter"]},{date:"2017-08-21",name:"Great American Eclipse",type:"eclipse",planets:["Earth"]},{date:"2018-07-31",name:"Mars Close Opposition",type:"approach",planets:["Mars"]},{date:"2020-12-21",name:'Great Conjunction (6 arcmin) "Christmas Star"',type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2024-04-08",name:"Great North American Eclipse (4m 28s)",type:"eclipse",planets:["Earth"]},{date:"2025-08-12",name:"Venus-Jupiter Conjunction",type:"conjunction",planets:["Venus","Jupiter"]},{date:"2025-08-18",name:"Six Planet Parade",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn","Uranus"]},{date:"2026-08-12",name:"Total Solar Eclipse - Spain",type:"eclipse",planets:["Earth"]},{date:"2027-08-02",name:"Eclipse of Century - Egypt (6m 23s)",type:"eclipse",planets:["Earth"]},{date:"2028-07-22",name:"Total Solar Eclipse - Sydney",type:"eclipse",planets:["Earth"]},{date:"2029-04-13",name:"Asteroid Apophis Close Flyby",type:"approach",planets:[]},{date:"2034-04-01",name:"Five Planet Alignment",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn"]},{date:"2035-09-02",name:"Total Solar Eclipse - Beijing",type:"eclipse",planets:["Earth"]},{date:"2035-09-15",name:"Mars Close Opposition",type:"approach",planets:["Mars"]},{date:"2040-09-08",name:"Five Planets Within 7° (rarest in 800 years)",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn"]},{date:"2045-08-12",name:"Great American Eclipse (6m 6s)",type:"eclipse",planets:["Earth"]},{date:"2060-04-08",name:"Great Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2061-07-28",name:"Halley's Comet Returns",type:"comet",planets:[]},{date:"2065-11-22",name:"Venus Occults Jupiter",type:"occultation",planets:["Venus","Jupiter"]},{date:"2080-03-15",name:"Great Conjunction (6 arcmin)",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2119-07-15",name:"Great Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2123-09-14",name:"Venus Occults Jupiter",type:"occultation",planets:["Venus","Jupiter"]}],Er={conjunction:"#ffdd44",alignment:"#4488ff",approach:"#ff8844",comet:"#44ddff",transit:"#aa66ff",occultation:"#aa66ff",eclipse:"#ff6633"};class e_{constructor(){this.audioContext=null,this.isInitialized=!1,this.isMuted=!0,this.masterVolume=.5,this.ambientVolume=.3,this.uiVolume=.5,this.masterGain=null,this.ambientGain=null,this.uiGain=null,this.ambientOscillators=[],this.ambientNoiseNode=null,this.planetFrequencies={Sun:55,Jupiter:82,Saturn:98,Uranus:110,Neptune:123,Earth:196,Venus:220,Mars:247,Mercury:330,Moon:392,Pluto:440,Ceres:523,Comet:587,default:262},this.currentFocusedBody=null,this.createAudioPrompt()}createAudioPrompt(){this.audioPrompt=document.createElement("div"),this.audioPrompt.id="audio-prompt",this.audioPrompt.innerHTML=`
      <div class="audio-prompt-content">
        <span class="audio-icon">&#127925;</span>
        <span>Click to enable sound</span>
      </div>
    `,this.audioPrompt.style.cssText=`
      position: fixed;
      bottom: 100px;
      right: 20px;
      background: rgba(10, 10, 30, 0.9);
      border: 1px solid rgba(100, 150, 255, 0.3);
      border-radius: 8px;
      padding: 12px 20px;
      color: #88ccff;
      font-size: 14px;
      cursor: pointer;
      z-index: 100;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    `,this.audioPrompt.addEventListener("mouseenter",()=>{this.audioPrompt.style.borderColor="rgba(100, 150, 255, 0.6)",this.audioPrompt.style.background="rgba(20, 20, 50, 0.95)"}),this.audioPrompt.addEventListener("mouseleave",()=>{this.audioPrompt.style.borderColor="rgba(100, 150, 255, 0.3)",this.audioPrompt.style.background="rgba(10, 10, 30, 0.9)"}),this.audioPrompt.addEventListener("click",()=>{this.enableAudio()}),document.body.appendChild(this.audioPrompt)}async enableAudio(){if(this.isInitialized){this.unmute();return}try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.setupGainNodes(),this.startAmbientSound(),this.isInitialized=!0,this.isMuted=!1,this.audioPrompt.style.opacity="0",setTimeout(()=>{this.audioPrompt.style.display="none"},300),this.playWelcomeChime()}catch(t){console.warn("Failed to initialize audio:",t)}}setupGainNodes(){this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.audioContext.destination),this.ambientGain=this.audioContext.createGain(),this.ambientGain.gain.value=this.ambientVolume,this.ambientGain.connect(this.masterGain),this.uiGain=this.audioContext.createGain(),this.uiGain.gain.value=this.uiVolume,this.uiGain.connect(this.masterGain)}startAmbientSound(){const t=this.audioContext.createOscillator();t.type="sine",t.frequency.value=40;const e=this.audioContext.createGain();e.gain.value=.15,t.connect(e),e.connect(this.ambientGain),t.start(),this.ambientOscillators.push({osc:t,gain:e});const i=this.audioContext.createOscillator();i.type="sine",i.frequency.value=20;const n=this.audioContext.createGain();n.gain.value=.1,i.connect(n),n.connect(this.ambientGain),i.start(),this.ambientOscillators.push({osc:i,gain:n});const a=this.audioContext.createOscillator();a.type="sine",a.frequency.value=2e3;const r=this.audioContext.createGain();r.gain.value=.01;const o=this.audioContext.createOscillator();o.type="sine",o.frequency.value=.05;const l=this.audioContext.createGain();l.gain.value=300,o.connect(l),l.connect(a.frequency),o.start(),a.connect(r),r.connect(this.ambientGain),a.start(),this.ambientOscillators.push({osc:a,gain:r,lfo:o}),this.createSpaceNoise()}createSpaceNoise(){const t=this.audioContext.sampleRate*2,e=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),i=e.getChannelData(0);for(let o=0;o<t;o++)i[o]=Math.random()*2-1;this.ambientNoiseNode=this.audioContext.createBufferSource(),this.ambientNoiseNode.buffer=e,this.ambientNoiseNode.loop=!0;const n=this.audioContext.createBiquadFilter();n.type="highpass",n.frequency.value=8e3;const a=this.audioContext.createBiquadFilter();a.type="lowpass",a.frequency.value=12e3;const r=this.audioContext.createGain();r.gain.value=.02,this.ambientNoiseNode.connect(n),n.connect(a),a.connect(r),r.connect(this.ambientGain),this.ambientNoiseNode.start()}playWelcomeChime(){const t=this.audioContext.currentTime;[261.63,329.63,392,523.25].forEach((i,n)=>{this.playNote(i,t+n*.15,.4,.15)})}playNote(t,e,i,n=.2){if(!this.isInitialized||this.isMuted)return;const a=this.audioContext.createOscillator();a.type="sine",a.frequency.value=t;const r=this.audioContext.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(n,e+.02),r.gain.exponentialRampToValueAtTime(.001,e+i),a.connect(r),r.connect(this.uiGain),a.start(e),a.stop(e+i+.1)}playSelectSound(t){if(!this.isInitialized||this.isMuted)return;const e=this.planetFrequencies[t]||this.planetFrequencies.default,i=this.audioContext.currentTime;this.playNote(e,i,.3,.25),this.playNote(e*1.5,i+.05,.25,.1),this.playNote(e*2,i+.02,.15,.08)}playFocusSound(t){if(!this.isInitialized||this.isMuted||this.currentFocusedBody===t)return;this.currentFocusedBody=t;const e=this.planetFrequencies[t]||this.planetFrequencies.default,i=this.audioContext.currentTime;this.playWhoosh(i,.5);const n=this.audioContext.createOscillator();n.type="sine",n.frequency.setValueAtTime(e*.5,i),n.frequency.exponentialRampToValueAtTime(e,i+.3);const a=this.audioContext.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.15,i+.1),a.gain.exponentialRampToValueAtTime(.001,i+.8),n.connect(a),a.connect(this.uiGain),n.start(i),n.stop(i+1),setTimeout(()=>{this.isMuted||(this.playNote(e,this.audioContext.currentTime,.5,.2),this.playNote(e*1.25,this.audioContext.currentTime+.1,.4,.1))},400)}playWhoosh(t,e){const i=this.audioContext.sampleRate*e,n=this.audioContext.createBuffer(1,i,this.audioContext.sampleRate),a=n.getChannelData(0);for(let c=0;c<i;c++)a[c]=Math.random()*2-1;const r=this.audioContext.createBufferSource();r.buffer=n;const o=this.audioContext.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(200,t),o.frequency.exponentialRampToValueAtTime(2e3,t+e*.7),o.frequency.exponentialRampToValueAtTime(500,t+e),o.Q.value=2;const l=this.audioContext.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.15,t+e*.2),l.gain.exponentialRampToValueAtTime(.001,t+e),r.connect(o),o.connect(l),l.connect(this.uiGain),r.start(t),r.stop(t+e)}playHoverSound(){if(!this.isInitialized||this.isMuted)return;const t=this.audioContext.currentTime;this.playNote(800,t,.08,.05)}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&this.masterGain.gain.linearRampToValueAtTime(this.masterVolume,this.audioContext.currentTime+.1)}setAmbientVolume(t){this.ambientVolume=Math.max(0,Math.min(1,t)),this.ambientGain&&this.ambientGain.gain.linearRampToValueAtTime(this.ambientVolume,this.audioContext.currentTime+.1)}setUIVolume(t){this.uiVolume=Math.max(0,Math.min(1,t)),this.uiGain&&this.uiGain.gain.linearRampToValueAtTime(this.uiVolume,this.audioContext.currentTime+.1)}mute(){this.isMuted=!0,this.masterGain&&this.masterGain.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+.1)}unmute(){if(!this.isInitialized){this.enableAudio();return}this.isMuted=!1,this.masterGain&&this.masterGain.gain.linearRampToValueAtTime(this.masterVolume,this.audioContext.currentTime+.1)}toggleMute(){return this.isMuted?this.unmute():this.mute(),this.isMuted}getMuteState(){return this.isMuted}dispose(){if(this.ambientOscillators.forEach(({osc:t,lfo:e})=>{try{t.stop(),e&&e.stop()}catch{}}),this.ambientNoiseNode)try{this.ambientNoiseNode.stop()}catch{}this.audioContext&&this.audioContext.close(),this.audioPrompt&&this.audioPrompt.parentNode&&this.audioPrompt.parentNode.removeChild(this.audioPrompt)}}class i_{constructor(t,e,i,n,a,r=[],o=[],l=[],c=null){this.camera=t,this.renderer=e,this.scene=i,this.planets=n,this.dwarfPlanets=r,this.majorAsteroids=o,this.spacecraft=l,this.sun=a,this.comet=c,this.settings={orbitSpeed:1,showLabels:!0,showOrbits:!0,showMinimap:!0,paused:!1,focusedPlanet:"None",audioMuted:!0,masterVolume:.5,ambientVolume:.3,uiVolume:.5},this.audioSystem=new e_,this.simulatedTime=0,this.startDate=new Date(vg.simulationStartDate),this.currentJulianDate=bc(this.startDate),this.raycaster=new ed,this.mouse=new lt,this.hoveredObject=null,this.selectedObject=null,this.selectedPlanet=null,this.isAnimating=!1,this.animationStart=null,this.animationDuration=1500,this.startPosition=new P,this.startTarget=new P,this.endPosition=new P,this.endTarget=new P,this.labels=[],this.outlineMaterial=new Pi({color:65535,side:Ee,transparent:!0,opacity:.5}),this.orbitControls=null,this.gui=null,this.minimapCanvas=null,this.minimapCtx=null,this.shownEventNotifications=new Set,this.activeNotifications=[],this.eventVisuals={activeEvents:new Map,conjunctionLines:[],planetGlows:new Map,originalScales:new Map},this.init()}init(){this.setupOrbitControls(),this.setupGUI(),this.setupEventListeners(),this.setupKeyboardShortcuts(),this.createLabels(),this.createTimeDisplay(),this.createMinimap(),this.createNotificationContainer()}setupOrbitControls(){this.orbitControls=new Rg(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.dampingFactor=.05,this.orbitControls.screenSpacePanning=!1,this.orbitControls.minDistance=2,this.orbitControls.maxDistance=800,this.orbitControls.maxPolarAngle=Math.PI,this.camera.position.set(30,20,50),this.orbitControls.target.set(0,0,0),this.orbitControls.update()}setupGUI(){this.gui=new sl({title:"Solar System Controls"});const t=this.gui.addFolder("Simulation");t.add(this.settings,"orbitSpeed",0,5,.1).name("Orbit Speed"),t.add(this.settings,"paused").name("Paused (Space)");const e=this.gui.addFolder("Display");e.add(this.settings,"showLabels").name("Show Labels").onChange(r=>this.toggleLabels(r)),e.add(this.settings,"showOrbits").name("Show Orbits").onChange(r=>this.toggleOrbits(r)),e.add(this.settings,"showMinimap").name("Show Mini-map").onChange(r=>this.toggleMinimap(r));const i=this.gui.addFolder("Camera"),n=["Sun",...this.planets.map(r=>r.data.name),...this.dwarfPlanets.map(r=>r.data.name),...this.majorAsteroids.map(r=>r.data.displayName||r.data.name),...this.spacecraft.map(r=>r.data.name),...this.comet?["Halley's Comet"]:[]];i.add(this.settings,"focusedPlanet",["None",...n]).name("Focus On").onChange(r=>this.focusByName(r));const a=this.gui.addFolder("Audio");a.add(this.settings,"audioMuted").name("Muted (M)").onChange(r=>{r?this.audioSystem.mute():this.audioSystem.unmute()}),a.add(this.settings,"masterVolume",0,1,.05).name("Master Volume").onChange(r=>this.audioSystem.setMasterVolume(r)),a.add(this.settings,"ambientVolume",0,1,.05).name("Ambient Volume").onChange(r=>this.audioSystem.setAmbientVolume(r)),a.add(this.settings,"uiVolume",0,1,.05).name("UI Sounds").onChange(r=>this.audioSystem.setUIVolume(r)),t.open(),e.open(),i.open(),a.open()}setupEventListeners(){this.renderer.domElement.addEventListener("mousemove",t=>this.onMouseMove(t)),this.renderer.domElement.addEventListener("click",t=>this.onClick(t)),document.getElementById("close-panel").addEventListener("click",()=>this.closeInfoPanel()),window.addEventListener("resize",()=>this.onWindowResize())}setupKeyboardShortcuts(){window.addEventListener("keydown",t=>{var e,i;if(t.target.tagName!=="INPUT")switch(t.key){case"0":this.focusByName("Sun");break;case"1":this.focusByName("Mercury");break;case"2":this.focusByName("Venus");break;case"3":this.focusByName("Earth");break;case"4":this.focusByName("Mars");break;case"5":this.focusByName("Jupiter");break;case"6":this.focusByName("Saturn");break;case"7":this.focusByName("Uranus");break;case"8":this.focusByName("Neptune");break;case"p":case"P":this.focusByName("Pluto");break;case"c":case"C":this.focusByName("Ceres");break;case"h":case"H":this.focusByName("Halley's Comet");break;case" ":t.preventDefault(),this.settings.paused=!this.settings.paused,(e=this.gui.controllersRecursive().find(n=>n.property==="paused"))==null||e.updateDisplay();break;case"r":case"R":this.resetCamera();break;case"Escape":this.closeInfoPanel();break;case"m":case"M":this.settings.audioMuted=this.audioSystem.toggleMute(),(i=this.gui.controllersRecursive().find(n=>n.property==="audioMuted"))==null||i.updateDisplay();break}})}focusByName(t){var a;if(this.settings.focusedPlanet=t,(a=this.gui.controllersRecursive().find(r=>r.property==="focusedPlanet"))==null||a.updateDisplay(),t==="None"){this.resetCamera();return}if(this.audioSystem.playFocusSound(t),t==="Sun"){this.focusOnObject(this.sun.getMesh()),this.showSunInfo();return}if(t==="Halley's Comet"&&this.comet){this.focusOnComet(),this.showCometInfo();return}let e=this.planets.find(r=>r.data.name===t);if(e||(e=this.dwarfPlanets.find(r=>r.data.name===t)),e){this.focusOnPlanet(e),this.showPlanetInfo(e);return}const i=this.majorAsteroids.find(r=>r.data.name===t||r.data.displayName===t||(r.data.displayName||r.data.name)===t);if(i){this.focusOnAsteroid(i),this.showAsteroidInfo(i);return}const n=this.spacecraft.find(r=>r.data.name===t);n&&(this.focusOnSpacecraft(n),this.showSpacecraftInfo(n))}createTimeDisplay(){const t=document.getElementById("app"),e=document.createElement("div");e.id="time-display",e.innerHTML=`
      <div class="time-date" id="sim-date">January 1, 2024</div>
      <div class="time-controls">
        <div class="event-markers" id="event-markers"></div>
        <input type="range" id="time-slider" min="-36500" max="36500" value="0" step="1">
        <div class="time-labels">
          <span>-100 years</span>
          <span>Now</span>
          <span>+100 years</span>
        </div>
      </div>
      <div class="event-tooltip" id="event-tooltip"></div>
    `,t.appendChild(e),document.getElementById("time-slider").addEventListener("input",n=>{this.simulatedTime=parseFloat(n.target.value)}),this.createEventMarkers()}createEventMarkers(){const t=document.getElementById("event-markers"),e=document.getElementById("event-tooltip"),i=-36500,n=36500,a=n-i;br.forEach(r=>{const o=new Date(r.date),l=Math.floor((o-this.startDate)/(1e3*60*60*24));if(l<i||l>n)return;const c=(l-i)/a*100,h=document.createElement("div");h.className="event-marker",h.style.left=`${c}%`,h.style.backgroundColor=Er[r.type]||"#ffffff",h.dataset.date=r.date,h.dataset.name=r.name,h.dataset.days=l,h.addEventListener("mouseenter",u=>{const d=o.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});e.innerHTML=`<strong>${d}</strong><br>${r.name}`,e.style.display="block";const p=h.getBoundingClientRect(),g=e.getBoundingClientRect(),v=t.getBoundingClientRect();let m=p.left+p.width/2-g.width/2;m=Math.max(v.left,Math.min(m,v.right-g.width)),e.style.left=`${m}px`,e.style.top=`${p.top-g.height-8}px`}),h.addEventListener("mouseleave",()=>{e.style.display="none"}),h.addEventListener("click",()=>{this.simulatedTime=l;const u=document.getElementById("time-slider");u&&(u.value=l),this.audioSystem.playSelectSound("event")}),t.appendChild(h)})}createNotificationContainer(){const t=document.getElementById("app"),e=document.createElement("div");e.id="event-notifications",t.appendChild(e)}checkEventProximity(){br.forEach(e=>{const i=new Date(e.date),n=Math.floor((i-this.startDate)/(1e3*60*60*24));if(Math.abs(this.simulatedTime-n)<=30){const r=`${e.date}-${e.name}`;this.shownEventNotifications.has(r)||(this.shownEventNotifications.add(r),this.showEventNotification(e,n))}})}showEventNotification(t,e){const i=document.getElementById("event-notifications");if(!i)return;const a=new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),r=Er[t.type]||"#88ccff",o=document.createElement("div");o.className="event-notification",o.innerHTML=`
      <div class="event-notification-icon" style="background-color: ${r};"></div>
      <div class="event-notification-content">
        <div class="event-notification-title">${t.name}</div>
        <div class="event-notification-date">${a}</div>
      </div>
      <div class="event-notification-actions">
        <button class="event-notification-jump">Jump to Date</button>
        <button class="event-notification-close">&times;</button>
      </div>
    `,i.appendChild(o),this.activeNotifications.push(o),requestAnimationFrame(()=>{o.classList.add("visible")}),o.querySelector(".event-notification-jump").addEventListener("click",()=>{this.simulatedTime=e;const h=document.getElementById("time-slider");h&&(h.value=e),this.audioSystem.playSelectSound("event"),this.dismissNotification(o)}),o.querySelector(".event-notification-close").addEventListener("click",()=>{this.dismissNotification(o)}),setTimeout(()=>{this.dismissNotification(o)},6e3)}dismissNotification(t){!t||!t.parentNode||(t.classList.remove("visible"),t.classList.add("hiding"),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t);const e=this.activeNotifications.indexOf(t);e>-1&&this.activeNotifications.splice(e,1)},300))}updateEventVisuals(t){const i=new Set;br.forEach(n=>{if(!n.planets||n.planets.length===0)return;const a=new Date(n.date),r=Math.floor((a-this.startDate)/(1e3*60*60*24)),o=Math.abs(this.simulatedTime-r);if(o<=30){const l=`${n.date}-${n.name}`;i.add(l);const c=1-o/30;this.eventVisuals.activeEvents.has(l)||this.createEventVisuals(n,l),this.updateEventVisualIntensity(n,l,c,t)}});for(const[n,a]of this.eventVisuals.activeEvents)i.has(n)||this.removeEventVisuals(n)}createEventVisuals(t,e){const i={event:t,lines:[],glows:[]},n=new vt(Er[t.type]||"#ffffff");if(t.type==="conjunction"||t.type==="occultation"){if(t.planets.length>=2){const a=new cn({color:n,transparent:!0,opacity:0,linewidth:2,blending:Me}),r=new Zt,o=new Float32Array(6);r.setAttribute("position",new re(o,3));const l=new Xn(r,a);l.frustumCulled=!1,this.scene.add(l),i.lines.push(l)}t.planets.forEach(a=>{const r=this.createPlanetEventGlow(a,n);r&&i.glows.push({planetName:a,glow:r})})}else if(t.type==="approach")t.planets.forEach(a=>{const r=this.createPlanetEventGlow(a,n,2);r&&i.glows.push({planetName:a,glow:r});const o=this.getPlanetByName(a);o&&o.planetMesh&&(this.eventVisuals.originalScales.has(a)||this.eventVisuals.originalScales.set(a,o.planetMesh.scale.clone()))});else if(t.type==="alignment"){const a=t.planets.map(r=>this.getPlanetByName(r)).filter(r=>r);for(let r=0;r<a.length-1;r++){const o=new cn({color:n,transparent:!0,opacity:0,linewidth:1,blending:Me}),l=new Zt,c=new Float32Array(6);l.setAttribute("position",new re(c,3));const h=new Xn(l,o);h.frustumCulled=!1,h.userData.planetIndices=[r,r+1],h.userData.planetNames=[t.planets[r],t.planets[r+1]],this.scene.add(h),i.lines.push(h)}t.planets.forEach(r=>{const o=this.createPlanetEventGlow(r,n,.6);o&&i.glows.push({planetName:r,glow:o})})}else if(t.type==="transit")t.planets.forEach(a=>{const r=this.createPlanetEventGlow(a,n,1.5);r&&i.glows.push({planetName:a,glow:r})});else if(t.type==="eclipse"){const a=this.getPlanetByName("Earth");if(a&&a.moons&&a.moons.length>0){const r=a.moons[0],o=new Ko(.15,2,16),l=new Pi({color:0,transparent:!0,opacity:0,side:Je,depthWrite:!1}),c=new jt(o,l);c.userData.type="eclipseShadowCone",this.scene.add(c),i.shadowCone=c;const h=new qo(.08,32),u=new Pi({color:0,transparent:!0,opacity:0,side:Je,depthWrite:!1}),d=new jt(h,u);d.userData.type="eclipseShadowSpot",this.scene.add(d),i.shadowSpot=d,i.moonMesh=r.mesh,i.earthPlanet=a;const p=this.createPlanetEventGlow("Earth",n,1.2);p&&i.glows.push({planetName:"Earth",glow:p})}}this.eventVisuals.activeEvents.set(e,i)}createPlanetEventGlow(t,e,i=1){const n=this.getPlanetByName(t);if(!n||!n.planetMesh)return null;const a=document.createElement("canvas");a.width=128,a.height=128;const r=a.getContext("2d"),o=Math.floor(e.r*255),l=Math.floor(e.g*255),c=Math.floor(e.b*255),h=r.createRadialGradient(64,64,0,64,64,64);h.addColorStop(0,`rgba(${o}, ${l}, ${c}, 0.8)`),h.addColorStop(.3,`rgba(${o}, ${l}, ${c}, 0.4)`),h.addColorStop(.6,`rgba(${o}, ${l}, ${c}, 0.15)`),h.addColorStop(1,`rgba(${o}, ${l}, ${c}, 0)`),r.fillStyle=h,r.fillRect(0,0,128,128);const u=new ti(a),d=new Wn({map:u,transparent:!0,opacity:0,blending:Me,depthWrite:!1}),p=new Es(d),g=n.data.radius*4*i;return p.scale.set(g,g,1),p.userData.baseSize=g,p.userData.intensityMultiplier=i,n.planetMesh.add(p),p}updateEventVisualIntensity(t,e,i,n){const a=this.eventVisuals.activeEvents.get(e);if(!a)return;const r=.7+.3*Math.sin(n*3),o=i*r;if((t.type==="conjunction"||t.type==="occultation")&&a.lines.length>0){const l=this.getPlanetByName(t.planets[0]),c=this.getPlanetByName(t.planets[1]);if(l&&c){const h=l.getWorldPosition(),u=c.getWorldPosition(),d=a.lines[0],p=d.geometry.attributes.position.array;p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=u.x,p[4]=u.y,p[5]=u.z,d.geometry.attributes.position.needsUpdate=!0,d.material.opacity=o*.6}}if(t.type==="alignment"&&a.lines.forEach(l=>{const c=l.userData.planetNames;if(c&&c.length===2){const h=this.getPlanetByName(c[0]),u=this.getPlanetByName(c[1]);if(h&&u){const d=h.getWorldPosition(),p=u.getWorldPosition(),g=l.geometry.attributes.position.array;g[0]=d.x,g[1]=d.y,g[2]=d.z,g[3]=p.x,g[4]=p.y,g[5]=p.z,l.geometry.attributes.position.needsUpdate=!0,l.material.opacity=o*.3}}}),a.glows.forEach(({planetName:l,glow:c})=>{if(c&&c.material){const h=o*(c.userData.intensityMultiplier||1);c.material.opacity=h*.8;const u=c.userData.baseSize||1,d=1+.15*Math.sin(n*4);c.scale.set(u*d,u*d,1)}}),t.type==="approach"&&t.planets.forEach(l=>{const c=this.getPlanetByName(l);if(c&&c.planetMesh){const h=this.eventVisuals.originalScales.get(l);if(h){const u=1+.2*i;c.planetMesh.scale.copy(h).multiplyScalar(u)}}}),t.type==="eclipse"&&a.shadowCone&&a.moonMesh&&a.earthPlanet){const l=new P;a.moonMesh.getWorldPosition(l);const c=a.earthPlanet.getWorldPosition(),h=new P().subVectors(c,l).normalize(),d=l.clone().add(h.clone().multiplyScalar(2/2));a.shadowCone.position.copy(d),a.shadowCone.lookAt(c),a.shadowCone.rotateX(Math.PI/2);const p=o*.5;a.shadowCone.material.opacity=p;const g=a.earthPlanet.data.radius,v=new P().copy(c).negate().normalize(),m=c.clone().add(v.clone().multiplyScalar(-g*1.01));a.shadowSpot.position.copy(m),a.shadowSpot.lookAt(c);const f=o*.7;a.shadowSpot.material.opacity=f;const x=.5+i*.5;a.shadowSpot.scale.set(x,x,1)}}removeEventVisuals(t){const e=this.eventVisuals.activeEvents.get(t);e&&(e.lines.forEach(i=>{this.scene.remove(i),i.geometry.dispose(),i.material.dispose()}),e.glows.forEach(({planetName:i,glow:n})=>{n&&n.parent&&(n.parent.remove(n),n.material.map&&n.material.map.dispose(),n.material.dispose())}),e.event.type==="approach"&&e.event.planets.forEach(i=>{const n=this.getPlanetByName(i),a=this.eventVisuals.originalScales.get(i);n&&n.planetMesh&&a&&n.planetMesh.scale.copy(a)}),e.shadowCone&&(this.scene.remove(e.shadowCone),e.shadowCone.geometry.dispose(),e.shadowCone.material.dispose()),e.shadowSpot&&(this.scene.remove(e.shadowSpot),e.shadowSpot.geometry.dispose(),e.shadowSpot.material.dispose()),this.eventVisuals.activeEvents.delete(t))}getPlanetByName(t){let e=this.planets.find(i=>i.data.name===t);return e||(e=this.dwarfPlanets.find(i=>i.data.name===t)),e}updateTimeDisplay(t){this.settings.paused||(this.simulatedTime+=t*this.settings.orbitSpeed*30);const e=new Date(this.startDate);e.setDate(e.getDate()+this.simulatedTime),this.currentJulianDate=bc(e);const i=document.getElementById("sim-date");if(i){const a={year:"numeric",month:"long",day:"numeric"};i.textContent=e.toLocaleDateString("en-US",a)}const n=document.getElementById("time-slider");n&&!n.matches(":active")&&(n.value=Math.max(-36500,Math.min(36500,this.simulatedTime))),this.checkEventProximity()}getJulianDate(){return this.currentJulianDate}createMinimap(){const t=document.getElementById("app"),e=document.createElement("div");e.id="minimap-container",e.innerHTML=`
      <div class="minimap-title">Top View</div>
      <canvas id="minimap" width="200" height="200"></canvas>
    `,t.appendChild(e),this.minimapCanvas=document.getElementById("minimap"),this.minimapCtx=this.minimapCanvas.getContext("2d")}updateMinimap(){if(!this.settings.showMinimap||!this.minimapCtx)return;const t=this.minimapCtx,e=this.minimapCanvas.width,i=this.minimapCanvas.height,n=e/2,a=i/2,r=35*Lt,o=(e/2-10)/r;t.fillStyle="rgba(0, 0, 20, 0.9)",t.fillRect(0,0,e,i),t.strokeStyle="rgba(100, 100, 150, 0.3)",t.lineWidth=.5,this.planets.forEach(h=>{const u=h.data.distance*o;t.beginPath(),t.arc(n,a,u,0,Math.PI*2),t.stroke()}),t.fillStyle="#ffdd44",t.beginPath(),t.arc(n,a,4,0,Math.PI*2),t.fill(),this.planets.forEach(h=>{const u=h.getWorldPosition(),d=n+u.x*o,p=a+u.z*o;t.fillStyle="#"+h.data.color.toString(16).padStart(6,"0"),t.beginPath(),t.arc(d,p,3,0,Math.PI*2),t.fill(),h.data.distance<20&&(t.fillStyle="rgba(255, 255, 255, 0.7)",t.font="8px sans-serif",t.fillText(h.data.name[0],d+4,p+3))}),this.dwarfPlanets.forEach(h=>{const u=h.getWorldPosition(),d=n+u.x*o,p=a+u.z*o;t.fillStyle="rgba(150, 150, 150, 0.8)",t.beginPath(),t.arc(d,p,2,0,Math.PI*2),t.fill()});const l=n+this.orbitControls.target.x*o,c=a+this.orbitControls.target.z*o;t.strokeStyle="#00ffff",t.lineWidth=1,t.beginPath(),t.arc(l,c,6,0,Math.PI*2),t.stroke()}toggleMinimap(t){const e=document.getElementById("minimap-container");e&&(e.style.display=t?"block":"none")}createLabels(){const t=document.getElementById("app"),e=this.createLabel("Sun");if(this.labels.push({element:e,object:this.sun.getMesh(),offset:new P(0,3,0)}),t.appendChild(e),this.planets.forEach(i=>{const n=this.createLabel(i.data.name);this.labels.push({element:n,planet:i,offset:new P(0,i.data.radius+.5,0)}),t.appendChild(n),i.moons.forEach(a=>{const r=this.createLabel(a.data.name);this.labels.push({element:r,moonMesh:a.mesh,offset:new P(0,a.data.radius+.2,0)}),t.appendChild(r)})}),this.dwarfPlanets.forEach(i=>{const n=this.createLabel(i.data.name);n.classList.add("dwarf-planet-label"),this.labels.push({element:n,planet:i,offset:new P(0,i.data.radius+.3,0)}),t.appendChild(n)}),this.majorAsteroids.forEach(i=>{const n=this.createLabel(i.data.displayName||i.data.name);n.classList.add("asteroid-label"),n.style.cursor="pointer",n.addEventListener("click",()=>{this.audioSystem.playSelectSound(i.data.name),this.showAsteroidInfo(i),this.focusOnAsteroid(i),this.audioSystem.playFocusSound(i.data.name)}),this.labels.push({element:n,asteroid:i,offset:new P(0,i.data.radius+.15,0)}),t.appendChild(n)}),this.spacecraft.forEach(i=>{const n=this.createLabel(i.data.name);n.classList.add("spacecraft-label"),n.style.cursor="pointer",n.addEventListener("click",()=>{this.audioSystem.playSelectSound(i.data.name),this.showSpacecraftInfo(i),this.focusOnSpacecraft(i),this.audioSystem.playFocusSound(i.data.name)}),this.labels.push({element:n,spacecraft:i,offset:new P(0,.4,0)}),t.appendChild(n)}),this.comet){const i=this.createLabel("Halley's Comet");i.style.cursor="pointer",i.addEventListener("click",()=>{this.selectCometFromLabel()}),this.labels.push({element:i,comet:this.comet,offset:new P(0,3,0)}),t.appendChild(i)}}createLabel(t){const e=document.createElement("div");return e.className="planet-label",e.textContent=t,e}updateLabels(){this.settings.showLabels&&this.labels.forEach(t=>{let e=new P;if(t.planet)e=t.planet.getWorldPosition(),e.add(t.offset);else if(t.moonMesh)t.moonMesh.getWorldPosition(e),e.add(t.offset);else if(t.asteroid)e=t.asteroid.getWorldPosition(),e.add(t.offset);else if(t.spacecraft){if(!t.spacecraft.spacecraftMesh.visible){t.element.style.display="none";return}e=t.spacecraft.getWorldPosition(),e.add(t.offset)}else t.comet?(e=t.comet.getWorldPosition(),e.add(t.offset)):t.object&&(t.object.getWorldPosition(e),e.add(t.offset));const i=e.clone().project(this.camera);if(i.z>1){t.element.style.display="none";return}const n=(i.x*.5+.5)*window.innerWidth,a=(-i.y*.5+.5)*window.innerHeight;t.element.style.display="block",t.element.style.left=`${n}px`,t.element.style.top=`${a}px`})}toggleLabels(t){this.labels.forEach(e=>{e.element.style.display=t?"block":"none"})}toggleOrbits(t){[...this.planets,...this.dwarfPlanets].forEach(e=>{e.orbitLine&&(e.orbitLine.visible=t)}),this.majorAsteroids.forEach(e=>{e.orbitLine&&(e.orbitLine.visible=t)}),this.spacecraft.forEach(e=>{e.trajectoryLine&&(e.trajectoryLine.visible=t)})}onMouseMove(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.getClickableObjects(),i=this.raycaster.intersectObjects(e);if(i.length>0){const n=i[0].object;this.hoveredObject!==n&&(this.removeHighlight(),this.hoveredObject=n,this.addHighlight(n),this.renderer.domElement.style.cursor="pointer",this.audioSystem.playHoverSound())}else this.removeHighlight(),this.hoveredObject=null,this.renderer.domElement.style.cursor="default"}onClick(t){if(this.isAnimating)return;this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.getClickableObjects(),i=this.raycaster.intersectObjects(e);if(i.length>0){const n=i[0].object;this.selectObject(n)}}getClickableObjects(){const t=[this.sun.sunMesh];return[...this.planets,...this.dwarfPlanets].forEach(e=>{t.push(...e.getClickableObjects())}),this.majorAsteroids.forEach(e=>{t.push(...e.getClickableObjects())}),this.spacecraft.forEach(e=>{t.push(...e.getClickableObjects())}),this.comet&&t.push(...this.comet.getClickableObjects()),t}addHighlight(t){if(!t.userData.clickable)return;const e=t.geometry.clone(),i=new jt(e,this.outlineMaterial);i.scale.multiplyScalar(1.1),i.name="highlight",t.add(i)}removeHighlight(){if(this.hoveredObject){const t=this.hoveredObject.getObjectByName("highlight");t&&(this.hoveredObject.remove(t),t.geometry.dispose())}}selectObject(t){this.selectedObject=t;const e=t.userData.name||"default";this.audioSystem.playSelectSound(e);let i=null;if(t.userData.name==="Sun"){this.showSunInfo(),this.focusOnObject(this.sun.getMesh()),this.audioSystem.playFocusSound("Sun");return}if(i=[...this.planets,...this.dwarfPlanets].find(n=>n.data.name===t.userData.name),i){this.showPlanetInfo(i),this.focusOnPlanet(i),this.audioSystem.playFocusSound(i.data.name);return}if(t.userData.isAsteroid){const n=this.majorAsteroids.find(a=>(a.data.displayName||a.data.name)===t.userData.name);if(n){this.showAsteroidInfo(n),this.focusOnAsteroid(n),this.audioSystem.playFocusSound(n.data.name);return}}if(t.userData.isSpacecraft){const n=this.spacecraft.find(a=>a.data.name===t.userData.name);if(n){this.showSpacecraftInfo(n),this.focusOnSpacecraft(n),this.audioSystem.playFocusSound(n.data.name);return}}for(const n of[...this.planets,...this.dwarfPlanets]){const a=n.moons.find(r=>r.data.name===t.userData.name);if(a){this.showMoonInfo(a,n),this.focusOnMoon(a),this.audioSystem.playFocusSound(a.data.name);return}}if(t.userData.isComet&&this.comet){this.showCometInfo(),this.focusOnComet(),this.audioSystem.playFocusSound("Halley's Comet");return}}showSunInfo(){const t=document.getElementById("info-panel"),e=document.getElementById("planet-name"),i=document.getElementById("planet-facts");e.textContent="Sun";let n='<div class="planet-icon sun-icon"></div>';const a=this.sun.data.facts;for(const[r,o]of Object.entries(a)){const l=r.charAt(0).toUpperCase()+r.slice(1).replace(/([A-Z])/g," $1");n+=`<p><strong>${l}:</strong> ${o}</p>`}i.innerHTML=n,t.classList.remove("hidden")}showPlanetInfo(t){this.selectedPlanet=t;const e=document.getElementById("info-panel"),i=document.getElementById("planet-name"),n=document.getElementById("planet-facts");i.textContent=t.data.name;let a=`<div class="planet-icon" style="background: #${t.data.color.toString(16).padStart(6,"0")};"></div>`;const r=t.getDistanceFromSun(),o=(r*1495978707e-1).toLocaleString();a+=`<div class="distance-indicator">
      <p><strong>Distance from Sun:</strong></p>
      <p>${r.toFixed(2)} AU (${o} km)</p>
    </div>`;const l=t.getOrbitalPosition();a+=`<p><strong>Orbital Position:</strong> ${l.toFixed(1)}°</p>`;const c=t.data.facts;for(const[h,u]of Object.entries(c)){const d=h.charAt(0).toUpperCase()+h.slice(1).replace(/([A-Z])/g," $1");a+=`<p><strong>${d}:</strong> ${u}</p>`}if(t.data.earthComparison){const h=t.data.earthComparison;a+=`<div class="earth-comparison">
        <p><strong>Compared to Earth:</strong></p>
        <p>Size: ${h.sizeRatio.toFixed(3)}x Earth</p>
        <p>Gravity: ${h.gravityRatio.toFixed(2)}x Earth</p>
        <p>Mass: ${h.massRatio.toFixed(4)}x Earth</p>
      </div>`}n.innerHTML=a,e.classList.remove("hidden")}showMoonInfo(t,e){const i=document.getElementById("info-panel"),n=document.getElementById("planet-name"),a=document.getElementById("planet-facts");n.textContent=t.data.name;let r='<div class="planet-icon moon-icon"></div>';r+=`<p><strong>Orbits:</strong> ${e.data.name}</p>`;const o=t.data.facts;for(const[l,c]of Object.entries(o)){const h=l.charAt(0).toUpperCase()+l.slice(1).replace(/([A-Z])/g," $1");r+=`<p><strong>${h}:</strong> ${c}</p>`}a.innerHTML=r,i.classList.remove("hidden")}showCometInfo(){if(!this.comet)return;const t=document.getElementById("info-panel"),e=document.getElementById("planet-name"),i=document.getElementById("planet-facts");e.textContent="Halley's Comet";let n='<div class="planet-icon" style="background: radial-gradient(circle, #aaddff, #4466aa);"></div>';n+=`<p><strong>Designation:</strong> ${this.comet.data.designation}</p>`,n+=`<div class="distance-indicator">
      <p><strong>Orbital Elements:</strong></p>
      <p>Period: ${this.comet.data.orbitalPeriod.toFixed(2)} years</p>
      <p>Perihelion: ${this.comet.data.perihelion.toFixed(3)} AU</p>
      <p>Aphelion: ${this.comet.data.aphelion.toFixed(2)} AU</p>
      <p>Eccentricity: ${this.comet.data.eccentricity.toFixed(4)}</p>
      <p>Inclination: ${this.comet.data.inclination.toFixed(2)}° (retrograde)</p>
    </div>`,n+=`<p><strong>Last Perihelion:</strong> ${this.comet.data.lastPerihelion.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>`,n+=`<p><strong>Next Perihelion:</strong> ${this.comet.data.nextPerihelion.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>`;const a=this.comet.data.facts;if(a)for(const[r,o]of Object.entries(a)){const l=r.charAt(0).toUpperCase()+r.slice(1).replace(/([A-Z])/g," $1");n+=`<p><strong>${l}:</strong> ${o}</p>`}i.innerHTML=n,t.classList.remove("hidden")}focusOnComet(){if(!this.comet)return;const t=this.comet.getWorldPosition();this.animateCameraTo(t,15)}selectCometFromLabel(){this.comet&&(this.audioSystem.playSelectSound("Halley's Comet"),this.showCometInfo(),this.focusOnComet(),this.audioSystem.playFocusSound("Halley's Comet"))}focusOnAsteroid(t){const e=t.getWorldPosition(),i=t.data.radius*10+3;this.animateCameraTo(e,i)}showAsteroidInfo(t){const e=document.getElementById("info-panel"),i=document.getElementById("planet-name"),n=document.getElementById("planet-facts");i.textContent=t.data.displayName||t.data.name;let a=`<div class="planet-icon" style="background: #${t.data.color.toString(16).padStart(6,"0")};"></div>`;a+=`<div class="distance-indicator">
      <p><strong>Orbital Elements:</strong></p>
      <p>Semi-major axis: ${t.data.semiMajorAxis.toFixed(3)} AU</p>
      <p>Eccentricity: ${t.data.eccentricity.toFixed(3)}</p>
      <p>Inclination: ${t.data.inclination.toFixed(2)}°</p>
      <p>Period: ${t.data.orbitalPeriod.toFixed(2)} years</p>
    </div>`,a+=`<p><strong>Spectral type:</strong> ${t.data.type}</p>`,a+=`<p><strong>Albedo:</strong> ${t.data.albedo.toFixed(3)}</p>`;const r=t.data.facts;if(r)for(const[o,l]of Object.entries(r)){const c=o.charAt(0).toUpperCase()+o.slice(1).replace(/([A-Z])/g," $1");a+=`<p><strong>${c}:</strong> ${l}</p>`}n.innerHTML=a,e.classList.remove("hidden")}focusOnSpacecraft(t){const e=t.getWorldPosition();this.animateCameraTo(e,5)}showSpacecraftInfo(t){const e=document.getElementById("info-panel"),i=document.getElementById("planet-name"),n=document.getElementById("planet-facts");i.textContent=t.data.name;const a=t.getCurrentEvent(this.getSimulationDate().getTime());let r=`<div class="planet-icon" style="background: radial-gradient(circle, #${t.data.color.toString(16).padStart(6,"0")}, #222);"></div>`;const o=t.data.active?"active":"inactive";r+=`<p class="spacecraft-status ${o}"><strong>Status:</strong> ${t.data.active?"Active":"Inactive"}</p>`,r+=`<p><strong>Current Phase:</strong> ${a}</p>`,t.data.velocity>0&&(r+=`<p><strong>Velocity:</strong> ${t.data.velocity} km/s</p>`);const l=t.data.facts;if(l)for(const[c,h]of Object.entries(l)){const u=c.charAt(0).toUpperCase()+c.slice(1).replace(/([A-Z])/g," $1");r+=`<p><strong>${u}:</strong> ${h}</p>`}n.innerHTML=r,e.classList.remove("hidden")}getSimulationDate(){return Mg(this.currentJulianDate)}closeInfoPanel(){document.getElementById("info-panel").classList.add("hidden"),this.selectedObject=null,this.selectedPlanet=null}focusOnPlanet(t){const e=t.getWorldPosition(),i=t.data.radius*5+2;this.animateCameraTo(e,i)}focusOnMoon(t){const e=new P;t.mesh.getWorldPosition(e),this.animateCameraTo(e,t.data.radius*8+1)}focusOnObject(t){const e=new P;t.getWorldPosition(e);const n=new Wi().setFromObject(t).getSize(new P),a=Math.max(n.x,n.y,n.z)*3;this.animateCameraTo(e,a)}animateCameraTo(t,e){this.isAnimating=!0,this.animationStart=performance.now(),this.startPosition.copy(this.camera.position),this.startTarget.copy(this.orbitControls.target),this.endTarget.copy(t);const i=new P().subVectors(this.camera.position,this.orbitControls.target).normalize();this.endPosition.copy(t).add(i.multiplyScalar(e))}resetCamera(){var t;this.settings.focusedPlanet="None",(t=this.gui.controllersRecursive().find(e=>e.property==="focusedPlanet"))==null||t.updateDisplay(),this.closeInfoPanel(),this.animateCameraTo(new P(0,0,0),60)}updateCameraAnimation(){if(!this.isAnimating)return;const t=performance.now()-this.animationStart,e=Math.min(t/this.animationDuration,1),i=1-Math.pow(1-e,3);this.camera.position.lerpVectors(this.startPosition,this.endPosition,i),this.orbitControls.target.lerpVectors(this.startTarget,this.endTarget,i),e>=1&&(this.isAnimating=!1)}updateDistanceDisplay(){if(!this.selectedPlanet)return;const t=document.querySelector(".distance-indicator p:last-child");if(t){const i=this.selectedPlanet.getDistanceFromSun(),n=(i*1495978707e-1).toLocaleString();t.textContent=`${i.toFixed(2)} AU (${n} km)`}const e=document.querySelector("#planet-facts p:nth-child(3)");if(e&&e.textContent.includes("Orbital Position")){const i=this.selectedPlanet.getOrbitalPosition();e.innerHTML=`<strong>Orbital Position:</strong> ${i.toFixed(1)}°`}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}getOrbitSpeed(){return this.settings.paused?0:this.settings.orbitSpeed}isPaused(){return this.settings.paused}update(t,e=0){this.orbitControls.update(),this.updateCameraAnimation(),this.updateLabels(),this.updateTimeDisplay(t),this.updateMinimap(),this.updateDistanceDisplay(),this.updateEventVisuals(e)}dispose(){this.orbitControls.dispose(),this.gui.destroy(),this.labels.forEach(i=>i.element.remove());const t=document.getElementById("time-display");t&&t.remove();const e=document.getElementById("minimap-container");e&&e.remove(),this.audioSystem&&this.audioSystem.dispose()}}const n_=[{name:"Voyager 1",active:!0,color:65416,departureAngle:260,waypoints:[{date:"1977-09-05",distance:1,lat:0,event:"Launch"},{date:"1979-03-05",distance:5.2,lat:0,event:"Jupiter Flyby"},{date:"1980-11-12",distance:9.5,lat:5,event:"Saturn Flyby"},{date:"1985-01-01",distance:25,lat:20,event:"Cruise"},{date:"1990-01-01",distance:40,lat:26,event:"Cruise"},{date:"1995-01-01",distance:58,lat:30,event:"Cruise"},{date:"2000-01-01",distance:76,lat:32,event:"Cruise"},{date:"2005-01-01",distance:94,lat:34,event:"Cruise"},{date:"2012-08-25",distance:121,lat:35,event:"Heliopause"},{date:"2020-01-01",distance:148,lat:35,event:"Interstellar"},{date:"2026-01-01",distance:169.4,lat:35,event:"Current"}],velocity:16.92,facts:{type:"Interplanetary Probe",launch:"September 5, 1977",status:"Active - Interstellar space",distance:"169.4 AU (25.3 billion km)",velocity:"16.92 km/s (3.57 AU/year)",milestone:"Reaches 1 light-day in November 2026",direction:"Constellation Ophiuchus, 35° above ecliptic",note:"Most distant human-made object"}},{name:"Voyager 2",active:!0,color:43775,departureAngle:300,waypoints:[{date:"1977-08-20",distance:1,lat:0,event:"Launch"},{date:"1979-07-09",distance:5.2,lat:0,event:"Jupiter Flyby"},{date:"1981-08-26",distance:9.5,lat:0,event:"Saturn Flyby"},{date:"1986-01-24",distance:19.2,lat:-5,event:"Uranus Flyby"},{date:"1989-08-25",distance:30.1,lat:-10,event:"Neptune Flyby"},{date:"1995-01-01",distance:52,lat:-25,event:"Cruise"},{date:"2000-01-01",distance:63,lat:-30,event:"Cruise"},{date:"2005-01-01",distance:80,lat:-34,event:"Cruise"},{date:"2010-01-01",distance:97,lat:-36,event:"Cruise"},{date:"2018-11-05",distance:119.7,lat:-38,event:"Heliopause"},{date:"2023-07-18",distance:137,lat:-38,event:"Overtakes Pioneer 10"},{date:"2026-01-01",distance:141.8,lat:-38,event:"Current"}],velocity:15.26,facts:{type:"Interplanetary Probe",launch:"August 20, 1977",status:"Active - Interstellar space",distance:"141.8 AU (21.2 billion km)",velocity:"15.26 km/s (3.22 AU/year)",unique:"Only spacecraft to visit all 4 gas giants",direction:"Constellation Pavo, 38° below ecliptic",heliopause:"Crossed November 5, 2018"}},{name:"Pioneer 10",active:!1,color:16755200,departureAngle:75,waypoints:[{date:"1972-03-02",distance:1,lat:0,event:"Launch"},{date:"1973-12-03",distance:5.2,lat:0,event:"Jupiter Flyby"},{date:"1980-01-01",distance:22,lat:2,event:"Cruise"},{date:"1990-01-01",distance:50,lat:3,event:"Cruise"},{date:"2000-01-01",distance:73,lat:3,event:"Cruise"},{date:"2003-01-23",distance:80,lat:3,event:"Last Signal"},{date:"2010-01-01",distance:102,lat:3,event:"Drifting"},{date:"2020-01-01",distance:126,lat:3,event:"Drifting"},{date:"2026-01-01",distance:140.2,lat:3,event:"Current"}],velocity:11.87,facts:{type:"Interplanetary Probe",launch:"March 2, 1972",status:"Inactive since January 2003",distance:"140.2 AU (21.0 billion km)",velocity:"11.87 km/s (2.50 AU/year)",historic:"First spacecraft to cross asteroid belt",firstJupiter:"First Jupiter flyby (December 3, 1973)",direction:"Constellation Taurus, near ecliptic plane",note:"Carries gold plaque for extraterrestrial contact"}},{name:"Pioneer 11",active:!1,color:16746496,departureAngle:280,waypoints:[{date:"1973-04-06",distance:1,lat:0,event:"Launch"},{date:"1974-12-02",distance:5.2,lat:0,event:"Jupiter Flyby"},{date:"1979-09-01",distance:9.5,lat:5,event:"Saturn Flyby"},{date:"1985-01-01",distance:25,lat:10,event:"Cruise"},{date:"1990-01-01",distance:35,lat:12,event:"Cruise"},{date:"1995-11-01",distance:44,lat:14,event:"Last Signal"},{date:"2000-01-01",distance:56,lat:14,event:"Drifting"},{date:"2010-01-01",distance:79,lat:14,event:"Drifting"},{date:"2020-01-01",distance:103,lat:14,event:"Drifting"},{date:"2026-01-01",distance:117.7,lat:14,event:"Current"}],velocity:11.13,facts:{type:"Interplanetary Probe",launch:"April 6, 1973",status:"Inactive since November 1995",distance:"117.7 AU (17.6 billion km)",velocity:"11.13 km/s (2.35 AU/year)",historic:"First spacecraft to visit Saturn",jupiterFlyby:"Closest Jupiter approach (43,000 km)",direction:"Constellation Scutum, 14° above ecliptic",note:"Discovered Saturn's F Ring"}},{name:"New Horizons",active:!0,color:16711935,departureAngle:290,waypoints:[{date:"2006-01-19",distance:1,lat:0,event:"Launch"},{date:"2007-02-28",distance:5.2,lat:0,event:"Jupiter Flyby"},{date:"2010-01-01",distance:16,lat:1,event:"Cruise"},{date:"2015-07-14",distance:33,lat:2,event:"Pluto Flyby"},{date:"2019-01-01",distance:43.4,lat:2,event:"Arrokoth Flyby"},{date:"2022-01-01",distance:52,lat:2,event:"Kuiper Belt"},{date:"2026-01-01",distance:63.6,lat:2,event:"Current"}],velocity:13.6,facts:{type:"Interplanetary Probe",launch:"January 19, 2006",status:"Active - Kuiper Belt Extended Mission",distance:"63.6 AU (9.5 billion km)",velocity:"13.60 km/s (2.87 AU/year)",speed:"Fastest launch velocity ever (16.26 km/s)",pluto:"First Pluto flyby (July 14, 2015)",arrokoth:"Most distant flyby ever (January 1, 2019)",direction:"Constellation Sagittarius, near ecliptic"}},{name:"Cassini",active:!1,terminated:!0,terminationDate:"2017-09-15",color:16776960,departureAngle:null,waypoints:[{date:"1997-10-15",distance:1,lat:0,event:"Launch"},{date:"1998-04-26",distance:.72,lat:0,event:"Venus Flyby 1"},{date:"1999-06-24",distance:.72,lat:0,event:"Venus Flyby 2"},{date:"1999-08-18",distance:1,lat:0,event:"Earth Flyby"},{date:"2000-12-30",distance:5.2,lat:0,event:"Jupiter Flyby"},{date:"2004-07-01",distance:9.5,lat:0,event:"Saturn Orbit Insertion"},{date:"2008-01-01",distance:9.5,lat:0,event:"Primary Mission"},{date:"2012-01-01",distance:9.5,lat:0,event:"Solstice Mission"},{date:"2017-09-15",distance:9.5,lat:0,event:"Grand Finale - End of Mission"}],velocity:0,facts:{type:"Saturn Orbiter",launch:"October 15, 1997",status:"Mission ended September 15, 2017",trajectory:"VVEJGA (Venus-Venus-Earth-Jupiter)",saturnArrival:"July 1, 2004",mission:"13 years orbiting Saturn (294 orbits)",end:"Plunged into Saturn atmosphere (Grand Finale)",discoveries:"Enceladus geysers, Titan methane lakes",note:"Deliberately destroyed to protect moons"}}];let Pe,qn,zi,Un,wa,Ta,Aa,Ca,Pa,Eo,wo,To,_s,fs,Ao,va;async function s_(){Ao=new Zc,va=new Yu,a_(),r_(),o_(),await l_(),c_(),h_(),lh()}function a_(){Pe=new Nu,Pe.background=new vt(8)}function r_(){qn=new Ke(60,window.innerWidth/window.innerHeight,.1,3e3),qn.position.set(30,20,50)}function o_(){const s=document.getElementById("solar-system");zi=new tg({canvas:s,antialias:!0,powerPreference:"high-performance"}),zi.setSize(window.innerWidth,window.innerHeight),zi.setPixelRatio(Math.min(window.devicePixelRatio,2)),zi.toneMapping=Ra,zi.toneMappingExposure=1.1,Un=new rg(zi);const t=new og(Pe,qn);Un.addPass(t);const e=new jn(new lt(window.innerWidth,window.innerHeight),.6,.5,.8);Un.addPass(e);const i=new cg;Un.addPass(i)}async function l_(){To=new Ag({starCount:2e4,radius:1200}),Pe.add(To.getMesh()),wa=new xg(va),Pe.add(wa.getMesh()),Ta=[];for(const s of ug){const t=new Ec(s,va);Ta.push(t),Pe.add(t.getMesh()),Pe.add(t.getOrbitLine())}Aa=[];for(const s of fg){const t=new Ec(s,va);Aa.push(t),Pe.add(t.getMesh()),Pe.add(t.getOrbitLine())}Ca=[];for(const s of gg){const t=new bg(s);Ca.push(t),Pe.add(t.getMesh()),Pe.add(t.getOrbitLine())}Pa=[];for(const s of n_){const t=new Eg(s);Pa.push(t),Pe.add(t.getMesh()),t.getTrajectoryLine()&&Pe.add(t.getTrajectoryLine())}await new Promise(s=>setTimeout(s,200)),Eo=new wg,Pe.add(Eo.getMesh()),wo=new Tg,Pe.add(wo.getMesh()),_s=new Cg(nh),Pe.add(_s.getMesh()),Pe.add(_s.getOrbitLine())}function c_(){fs=new i_(qn,zi,Pe,Ta,wa,Aa,Ca,Pa,_s)}function h_(){const s=document.getElementById("loading");s.classList.add("hidden"),setTimeout(()=>{s.style.display="none"},500)}function lh(){requestAnimationFrame(lh);const s=Ao.getDelta(),t=Ao.getElapsedTime(),e=fs.getOrbitSpeed(),i=fs.getJulianDate();wa.update(s,t),Ta.forEach(a=>{a.update(s,e,t,i)}),Aa.forEach(a=>{a.update(s,e,t,i)}),Ca.forEach(a=>{a.update(s,e,t,i)});const n=fs.getSimulationDate();Pa.forEach(a=>{a.update(s,e,t,i,n)}),Eo.update(s,e),wo.update(s,e),_s.update(s,e,t,i),To.update(s),fs.update(s,t),Un.render()}window.addEventListener("resize",()=>{qn.aspect=window.innerWidth/window.innerHeight,qn.updateProjectionMatrix(),zi.setSize(window.innerWidth,window.innerHeight),Un.setSize(window.innerWidth,window.innerHeight)});s_().catch(s=>{console.error("Failed to initialize solar system:",s),document.getElementById("loading").textContent="Failed to load solar system. Please refresh the page."});
