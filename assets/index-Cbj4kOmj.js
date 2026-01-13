(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="182",In={ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oh=0,nl=1,lh=2,la=1,ch=2,cs=3,Gi=0,Ae=1,ai=2,pi=0,Un=1,Se=2,sl=3,al=4,hh=5,Qi=100,uh=101,dh=102,fh=103,ph=104,mh=200,gh=201,_h=202,xh=203,xr=204,vr=205,vh=206,Mh=207,yh=208,Sh=209,bh=210,Eh=211,Th=212,wh=213,Ah=214,Mr=0,yr=1,Sr=2,Fn=3,br=4,Er=5,Tr=6,wr=7,xc=0,Ch=1,Rh=2,mi=0,So=1,bo=2,Eo=3,Aa=4,To=5,wo=6,Ao=7,vc=300,rn=301,On=302,Ar=303,Cr=304,Ca=306,Rr=1e3,wi=1001,Pr=1002,ye=1003,Ph=1004,Ls=1005,Ie=1006,Na=1007,nn=1008,Oe=1009,Mc=1010,yc=1011,ms=1012,Co=1013,_i=1014,oi=1015,je=1016,Ro=1017,Po=1018,gs=1020,Sc=35902,bc=35899,Ec=1021,Tc=1022,li=1023,Ri=1026,sn=1027,Do=1028,Lo=1029,Bn=1030,Io=1031,Uo=1033,ca=33776,ha=33777,ua=33778,da=33779,Dr=35840,Lr=35841,Ir=35842,Ur=35843,Nr=36196,Fr=37492,Or=37496,Br=37488,zr=37489,Vr=37490,kr=37491,Gr=37808,Hr=37809,Wr=37810,Xr=37811,$r=37812,Yr=37813,qr=37814,jr=37815,Kr=37816,Zr=37817,Jr=37818,Qr=37819,to=37820,eo=37821,io=36492,no=36494,so=36495,ao=36283,ro=36284,oo=36285,lo=36286,Dh=3200,wc=0,Lh=1,zi="",Ye="srgb",zn="srgb-linear",_a="linear",$t="srgb",un=7680,rl=519,Ih=512,Uh=513,Nh=514,No=515,Fh=516,Oh=517,Fo=518,Bh=519,co=35044,ol="300 es",di=2e3,xa=2001;function Ac(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function _s(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zh(){const s=_s("canvas");return s.style.display="block",s}const ll={};function va(...s){const t="THREE."+s.shift();console.log(t,...s)}function Rt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Vt(...s){const t="THREE."+s.shift();console.error(t,...s)}function xs(...s){const t=s.join(" ");t in ll||(ll[t]=!0,Rt(...s))}function Vh(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}class ln{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const us=Math.PI/180,vs=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function zt(s,t,e){return Math.max(t,Math.min(e,s))}function Oo(s,t){return(s%t+t)%t}function kh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Gh(s,t,e){return s!==t?(e-s)/(t-s):0}function ds(s,t,e){return(1-e)*s+e*t}function Hh(s,t,e,i){return ds(s,t,1-Math.exp(-e*i))}function Wh(s,t=1){return t-Math.abs(Oo(s,t*2)-t)}function Xh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $h(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Yh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qh(s,t){return s+Math.random()*(t-s)}function jh(s){return s*(.5-Math.random())}function Kh(s){s!==void 0&&(cl=s);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zh(s){return s*us}function Jh(s){return s*vs}function Qh(s){return(s&s-1)===0&&s!==0}function tu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function iu(s,t,e,i,n){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+i)/2),h=r((t+i)/2),u=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*h,o*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fi={DEG2RAD:us,RAD2DEG:vs,generateUUID:Ai,clamp:zt,euclideanModulo:Oo,mapLinear:kh,inverseLerp:Gh,lerp:ds,damp:Hh,pingpong:Wh,smoothstep:Xh,smootherstep:$h,randInt:Yh,randFloat:qh,randFloatSpread:jh,seededRandom:Kh,degToRad:Zh,radToDeg:Jh,isPowerOfTwo:Qh,ceilPowerOfTwo:tu,floorPowerOfTwo:eu,setQuaternionFromProperEuler:iu,normalize:Kt,denormalize:ri};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=a[r+0],p=a[r+1],_=a[r+2],x=a[r+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==_){let m=l*f+c*p+h*_+u*x;m<0&&(f=-f,p=-p,_=-_,x=-x,m=-m);let d=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);d=Math.sin(d*v)/b,o=Math.sin(o*v)/b,l=l*d+f*o,c=c*d+p*o,h=h*d+_*o,u=u*d+x*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+_*o,u=u*d+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=a[r],f=a[r+1],p=a[r+2],_=a[r+3];return t[e]=o*_+h*u+l*p-c*f,t[e+1]=l*_+h*f+c*u-o*p,t[e+2]=c*_+h*p+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(a/2),f=l(i/2),p=l(n/2),_=l(a/2);switch(r){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(n+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(r-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+n*c-a*l,this._y=n*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),h=2*(o*e-a*n),u=2*(a*i-r*e);return this.x=e+l*c+r*u-o*h,this.y=i+l*h+o*c-a*u,this.z=n+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new R,hl=new on;class Lt{constructor(t,e,i,n,a,r,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c)}set(t,e,i,n,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],_=i[8],x=n[0],m=n[3],d=n[6],v=n[1],b=n[4],E=n[7],w=n[2],A=n[5],C=n[8];return a[0]=r*x+o*v+l*w,a[3]=r*m+o*b+l*A,a[6]=r*d+o*E+l*C,a[1]=c*x+h*v+u*w,a[4]=c*m+h*b+u*A,a[7]=c*d+h*E+u*C,a[2]=f*x+p*v+_*w,a[5]=f*m+p*b+_*A,a[8]=f*d+p*E+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*a*h+i*o*l+n*a*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,f=o*l-h*a,p=c*a-r*l,_=e*u+i*f+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*r)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*a-o*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(r*e-i*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Lt,ul=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nu(){const s={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(n,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===$t&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===$t&&(n.r=Nn(n.r),n.g=Nn(n.g),n.b=Nn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zi?_a:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,r){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[zn]:{primaries:t,whitePoint:i,transfer:_a,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:i,transfer:$t,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),s}const kt=nu();function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let dn;class su{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dn===void 0&&(dn=_s("canvas")),dn.width=t.width,dn.height=t.height;const n=dn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=dn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_s("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Ci(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let au=0;class Bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Ba(n[r].image)):a.push(Ba(n[r]))}else a=Ba(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let ru=0;const za=new R;class Ce extends ln{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=wi,n=wi,a=Ie,r=nn,o=li,l=Oe,c=Ce.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Ai(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=vc;Ce.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,n=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,E=(p+1)/2,w=(d+1)/2,A=(h+f)/4,C=(u+x)/4,U=(_+m)/4;return b>E&&b>w?b<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(b),n=A/i,a=C/i):E>w?E<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),i=A/n,a=U/n):w<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(w),i=C/a,n=U/a),this.set(i,n,a,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends ln{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const n={width:t,height:e,depth:i.depth},a=new Ce(n);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Bo(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ge extends ou{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cc extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ye,this.minFilter=ye,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lu extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ye,this.minFilter=ye,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ei):ei.fromBufferAttribute(a,r),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kn),Us.subVectors(this.max,Kn),fn.subVectors(t.a,Kn),pn.subVectors(t.b,Kn),mn.subVectors(t.c,Kn),Pi.subVectors(pn,fn),Di.subVectors(mn,pn),Yi.subVectors(fn,mn);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-Yi.z,Yi.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,Yi.z,0,-Yi.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-Yi.y,Yi.x,0];return!Va(e,fn,pn,mn,Us)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,fn,pn,mn,Us))?!1:(Ns.crossVectors(Pi,Di),e=[Ns.x,Ns.y,Ns.z],Va(e,fn,pn,mn,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mi=[new R,new R,new R,new R,new R,new R,new R,new R],ei=new R,Is=new Hi,fn=new R,pn=new R,mn=new R,Pi=new R,Di=new R,Yi=new R,Kn=new R,Us=new R,Ns=new R,qi=new R;function Va(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){qi.fromArray(s,a);const o=n.x*Math.abs(qi.x)+n.y*Math.abs(qi.y)+n.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const cu=new Hi,Zn=new R,ka=new R;class cn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):cu.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zn.subVectors(t,this.center);const e=Zn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Zn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zn.copy(t.center).add(ka)),this.expandByPoint(Zn.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const yi=new R,Ga=new R,Fs=new R,Li=new R,Ha=new R,Os=new R,Wa=new R;class As{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ga.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(Ga);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Fs),o=Li.dot(this.direction),l=-Li.dot(Fs),c=Li.lengthSq(),h=Math.abs(1-r*r);let u,f,p,_;if(h>0)if(u=r*l-o,f=r*o-l,_=a*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,p=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ga).addScaledVector(Fs,f),p}intersectSphere(t,e){yi.subVectors(t.center,this.origin);const i=yi.dot(this.direction),n=yi.dot(yi)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,i,n,a){Ha.subVectors(e,t),Os.subVectors(i,t),Wa.crossVectors(Ha,Os);let r=this.direction.dot(Wa),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Li.subVectors(this.origin,t);const l=o*this.direction.dot(Os.crossVectors(Li,Os));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(Li));if(c<0||l+c>r)return null;const h=-o*Li.dot(Wa);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,i,n,a,r,o,l,c,h,u,f,p,_,x,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c,h,u,f,p,_,x,m)}set(t,e,i,n,a,r,o,l,c,h,u,f,p,_,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/gn.setFromMatrixColumn(t,0).length(),a=1/gn.setFromMatrixColumn(t,1).length(),r=1/gn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const f=r*h,p=r*u,_=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=_+p*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,_=c*h,x=c*u;e[0]=f+x*o,e[4]=_*o-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-_,e[6]=x+f*o,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,_=c*h,x=c*u;e[0]=f-x*o,e[4]=-r*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=r*h,e[9]=x-f*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,p=r*u,_=o*h,x=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,p=r*c,_=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=_*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*l,p=r*c,_=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=r*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,i){const n=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Ii.crossVectors(i,Xe),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Ii.crossVectors(i,Xe)),Ii.normalize(),Bs.crossVectors(Xe,Ii),n[0]=Ii.x,n[4]=Bs.x,n[8]=Xe.x,n[1]=Ii.y,n[5]=Bs.y,n[9]=Xe.y,n[2]=Ii.z,n[6]=Bs.z,n[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],v=i[3],b=i[7],E=i[11],w=i[15],A=n[0],C=n[4],U=n[8],M=n[12],S=n[1],D=n[5],V=n[9],z=n[13],$=n[2],W=n[6],G=n[10],O=n[14],K=n[3],ut=n[7],rt=n[11],dt=n[15];return a[0]=r*A+o*S+l*$+c*K,a[4]=r*C+o*D+l*W+c*ut,a[8]=r*U+o*V+l*G+c*rt,a[12]=r*M+o*z+l*O+c*dt,a[1]=h*A+u*S+f*$+p*K,a[5]=h*C+u*D+f*W+p*ut,a[9]=h*U+u*V+f*G+p*rt,a[13]=h*M+u*z+f*O+p*dt,a[2]=_*A+x*S+m*$+d*K,a[6]=_*C+x*D+m*W+d*ut,a[10]=_*U+x*V+m*G+d*rt,a[14]=_*M+x*z+m*O+d*dt,a[3]=v*A+b*S+E*$+w*K,a[7]=v*C+b*D+E*W+w*ut,a[11]=v*U+b*V+E*G+w*rt,a[15]=v*M+b*z+E*O+w*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],d=t[15],v=l*p-c*f,b=o*p-c*u,E=o*f-l*u,w=r*p-c*h,A=r*f-l*h,C=r*u-o*h;return e*(x*v-m*b+d*E)-i*(_*v-m*w+d*A)+n*(_*b-x*w+d*C)-a*(_*E-x*A+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],d=t[15],v=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,b=_*f*c-h*m*c-_*l*p+r*m*p+h*l*d-r*f*d,E=h*x*c-_*u*c+_*o*p-r*x*p-h*o*d+r*u*d,w=_*u*l-h*x*l-_*o*f+r*x*f+h*o*m-r*u*m,A=e*v+i*b+n*E+a*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(x*f*a-u*m*a-x*n*p+i*m*p+u*n*d-i*f*d)*C,t[2]=(o*m*a-x*l*a+x*n*c-i*m*c-o*n*d+i*l*d)*C,t[3]=(u*l*a-o*f*a-u*n*c+i*f*c+o*n*p-i*l*p)*C,t[4]=b*C,t[5]=(h*m*a-_*f*a+_*n*p-e*m*p-h*n*d+e*f*d)*C,t[6]=(_*l*a-r*m*a-_*n*c+e*m*c+r*n*d-e*l*d)*C,t[7]=(r*f*a-h*l*a+h*n*c-e*f*c-r*n*p+e*l*p)*C,t[8]=E*C,t[9]=(_*u*a-h*x*a-_*i*p+e*x*p+h*i*d-e*u*d)*C,t[10]=(r*x*a-_*o*a+_*i*c-e*x*c-r*i*d+e*o*d)*C,t[11]=(h*o*a-r*u*a-h*i*c+e*u*c+r*i*p-e*o*p)*C,t[12]=w*C,t[13]=(h*x*n-_*u*n+_*i*f-e*x*f-h*i*m+e*u*m)*C,t[14]=(_*o*n-r*x*n-_*i*l+e*x*l+r*i*m-e*o*m)*C,t[15]=(r*u*n-h*o*n+h*i*l-e*u*l-r*i*f+e*o*f)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,f=a*c,p=a*h,_=a*u,x=r*h,m=r*u,d=o*u,v=l*c,b=l*h,E=l*u,w=i.x,A=i.y,C=i.z;return n[0]=(1-(x+d))*w,n[1]=(p+E)*w,n[2]=(_-b)*w,n[3]=0,n[4]=(p-E)*A,n[5]=(1-(f+d))*A,n[6]=(m+v)*A,n[7]=0,n[8]=(_+b)*C,n[9]=(m-v)*C,n[10]=(1-(f+x))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let a=gn.set(n[0],n[1],n[2]).length();const r=gn.set(n[4],n[5],n[6]).length(),o=gn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),ii.copy(this);const c=1/a,h=1/r,u=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=di,l=!1){const c=this.elements,h=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let _,x;if(l)_=a/(r-a),x=r*a/(r-a);else if(o===di)_=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===xa)_=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=di,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),f=-(e+t)/(e-t),p=-(i+n)/(i-n);let _,x;if(l)_=1/(r-a),x=r/(r-a);else if(o===di)_=-2/(r-a),x=-(r+a)/(r-a);else if(o===xa)_=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const gn=new R,ii=new Zt,hu=new R(0,0,0),uu=new R(1,1,1),Ii=new R,Bs=new R,Xe=new R,fl=new Zt,pl=new on;class xi{constructor(t=0,e=0,i=0,n=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let du=0;const ml=new R,_n=new on,Si=new Zt,zs=new R,Jn=new R,fu=new R,pu=new on,gl=new R(1,0,0),_l=new R(0,1,0),xl=new R(0,0,1),vl={type:"added"},mu={type:"removed"},xn={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Re extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new R,e=new xi,i=new on,n=new R(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Lt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _n.setFromAxisAngle(t,e),this.quaternion.multiply(_n),this}rotateOnWorldAxis(t,e){return _n.setFromAxisAngle(t,e),this.quaternion.premultiply(_n),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zs.copy(t):zs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Jn,zs,this.up):Si.lookAt(zs,Jn,this.up),this.quaternion.setFromRotationMatrix(Si),n&&(Si.extractRotation(n.matrixWorld),_n.setFromRotationMatrix(Si),this.quaternion.premultiply(_n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),xn.child=t,this.dispatchEvent(xn),xn.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),xn.child=t,this.dispatchEvent(xn),xn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Re.DEFAULT_UP=new R(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new R,bi=new R,$a=new R,Ei=new R,vn=new R,Mn=new R,Ml=new R,Ya=new R,qa=new R,ja=new R,Ka=new de,Za=new de,Ja=new de;class Qe{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ni.subVectors(t,e),n.cross(ni);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){ni.subVectors(n,e),bi.subVectors(i,e),$a.subVectors(t,e);const r=ni.dot(ni),o=ni.dot(bi),l=ni.dot($a),c=bi.dot(bi),h=bi.dot($a),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,_=(r*h-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,n,a,r,o,l){return this.getBarycoord(t,e,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ei.x),l.addScaledVector(r,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,e,i,n,a,r){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,i),Ja.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(Ka,a.x),r.addScaledVector(Za,a.y),r.addScaledVector(Ja,a.z),r}static isFrontFacing(t,e,i,n){return ni.subVectors(i,e),bi.subVectors(t,e),ni.cross(bi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ni.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;vn.subVectors(n,i),Mn.subVectors(a,i),Ya.subVectors(t,i);const l=vn.dot(Ya),c=Mn.dot(Ya);if(l<=0&&c<=0)return e.copy(i);qa.subVectors(t,n);const h=vn.dot(qa),u=Mn.dot(qa);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(vn,r);ja.subVectors(t,a);const p=vn.dot(ja),_=Mn.dot(ja);if(_>=0&&p<=_)return e.copy(a);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Mn,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Ml.subVectors(a,n),o=(u-h)/(u-h+(p-_)),e.copy(n).addScaledVector(Ml,o);const d=1/(m+x+f);return r=x*d,o=f*d,e.copy(i).addScaledVector(vn,r).addScaledVector(Mn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Qa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,kt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=kt.workingColorSpace){if(t=Oo(t,1),e=zt(e,0,1),i=zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Qa(r,a,t+1/3),this.g=Qa(r,a,t),this.b=Qa(r,a,t-1/3)}return kt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ye){function i(a){a!==void 0&&parseFloat(a)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=Rc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return kt.workingToColorSpace(Le.copy(this),t),Math.round(zt(Le.r*255,0,255))*65536+Math.round(zt(Le.g*255,0,255))*256+Math.round(zt(Le.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Le.copy(this),e);const i=Le.r,n=Le.g,a=Le.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-i)/u+2;break;case a:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ye){kt.workingToColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,n=Le.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Vs);const i=ds(Ui.h,Vs.h,e),n=ds(Ui.s,Vs.s,e),a=ds(Ui.l,Vs.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Et;Et.NAMES=Rc;let gu=0;class Wi extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Un,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=vr,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=un,this.stencilZFail=un,this.stencilZPass=un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Un&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xr&&(i.blendSrc=this.blendSrc),this.blendDst!==vr&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==un&&(i.stencilFail=this.stencilFail),this.stencilZFail!==un&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==un&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $n extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new R,ks=new ht;let _u=0;class se{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_u++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=co,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array),a=Kt(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==co&&(t.usage=this.usage),t}}class Pc extends se{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dc extends se{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class me extends se{constructor(t,e,i){super(new Float32Array(t),e,i)}}let xu=0;const Je=new Zt,tr=new Re,yn=new R,$e=new Hi,Qn=new Hi,we=new R;class le extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Dc:Pc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Lt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new me(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];$e.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors($e.min,Qn.min),$e.expandByPoint(we),we.addVectors($e.max,Qn.max),$e.expandByPoint(we)):($e.expandByPoint(Qn.min),$e.expandByPoint(Qn.max))}$e.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)we.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(we));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(yn.fromBufferAttribute(t,c),we.add(yn)),n=Math.max(n,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new R,l[U]=new R;const c=new R,h=new R,u=new R,f=new ht,p=new ht,_=new ht,x=new R,m=new R;function d(U,M,S){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),f.fromBufferAttribute(a,U),p.fromBufferAttribute(a,M),_.fromBufferAttribute(a,S),h.sub(c),u.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),o[U].add(x),o[M].add(x),o[S].add(x),l[U].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let U=0,M=v.length;U<M;++U){const S=v[U],D=S.start,V=S.count;for(let z=D,$=D+V;z<$;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new R,E=new R,w=new R,A=new R;function C(U){w.fromBufferAttribute(n,U),A.copy(w);const M=o[U];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),E.crossVectors(A,M);const D=E.dot(l[U])<0?-1:1;r.setXYZW(U,b.x,b.y,b.z,D)}for(let U=0,M=v.length;U<M;++U){const S=v[U],D=S.start,V=S.count;for(let z=D,$=D+V;z<$;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const n=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,_),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(n,a),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)n.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,a),u.subVectors(n,a),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new se(f,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Zt,ji=new As,Gs=new cn,Sl=new R,Hs=new R,Ws=new R,Xs=new R,er=new R,$s=new R,bl=new R,Ys=new R;class ie extends Re{constructor(t=new le,e=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){$s.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(er.fromBufferAttribute(u,t),r?$s.addScaledVector(er,h):$s.addScaledVector(er.sub(e),h))}e.add($s)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(a),ji.copy(t.ray).recast(t.near),!(Gs.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Gs,Sl)===null||ji.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(yl.copy(a).invert(),ji.copy(t.ray).applyMatrix4(yl),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=r[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,w=b;E<w;E+=3){const A=o.getX(E),C=o.getX(E+1),U=o.getX(E+2);n=qs(this,d,t,i,c,h,u,A,C,U),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const v=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);n=qs(this,r,t,i,c,h,u,v,b,E),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=r[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,w=b;E<w;E+=3){const A=E,C=E+1,U=E+2;n=qs(this,d,t,i,c,h,u,A,C,U),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const v=m,b=m+1,E=m+2;n=qs(this,r,t,i,c,h,u,v,b,E),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function vu(s,t,e,i,n,a,r,o){let l;if(t.side===Ae?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,t.side===Gi,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:s}}function qs(s,t,e,i,n,a,r,o,l,c){s.getVertexPosition(o,Hs),s.getVertexPosition(l,Ws),s.getVertexPosition(c,Xs);const h=vu(s,t,e,i,Hs,Ws,Xs,bl);if(h){const u=new R;Qe.getBarycoord(bl,Hs,Ws,Xs,u),n&&(h.uv=Qe.getInterpolatedAttribute(n,o,l,c,u,new ht)),a&&(h.uv1=Qe.getInterpolatedAttribute(a,o,l,c,u,new ht)),r&&(h.normal=Qe.getInterpolatedAttribute(r,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};Qe.getNormal(Hs,Ws,Xs,f.normal),h.face=f,h.barycoord=u}return h}class Cs extends le{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,i,e,t,r,a,0),_("z","y","x",1,-1,i,e,-t,r,a,1),_("x","z","y",1,1,t,i,e,n,r,2),_("x","z","y",1,-1,t,i,-e,n,r,3),_("x","y","z",1,-1,t,e,i,n,a,4),_("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function _(x,m,d,v,b,E,w,A,C,U,M){const S=E/C,D=w/U,V=E/2,z=w/2,$=A/2,W=C+1,G=U+1;let O=0,K=0;const ut=new R;for(let rt=0;rt<G;rt++){const dt=rt*D-z;for(let Ot=0;Ot<W;Ot++){const Ut=Ot*S-V;ut[x]=Ut*v,ut[m]=dt*b,ut[d]=$,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[d]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Ot/C),u.push(1-rt/U),O+=1}}for(let rt=0;rt<U;rt++)for(let dt=0;dt<C;dt++){const Ot=f+dt+W*rt,Ut=f+dt+W*(rt+1),ue=f+(dt+1)+W*(rt+1),ce=f+(dt+1)+W*rt;l.push(Ot,Ut,ce),l.push(Ut,ue,ce),K+=6}o.addGroup(p,K,M),p+=K,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const i=Vn(s[e]);for(const n in i)t[n]=i[n]}return t}function Mu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Lc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const Ms={clone:Vn,merge:Fe};var yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class he extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vn(t.uniforms),this.uniformsGroups=Mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ic extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new R,El=new ht,Tl=new ht;class qe extends Ic{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,El,Tl),e.subVectors(Tl,El)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Sn=-90,bn=1;class bu extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new qe(Sn,bn,t,e);n.layers=this.layers,this.add(n);const a=new qe(Sn,bn,t,e);a.layers=this.layers,this.add(a);const r=new qe(Sn,bn,t,e);r.layers=this.layers,this.add(r);const o=new qe(Sn,bn,t,e);o.layers=this.layers,this.add(o);const l=new qe(Sn,bn,t,e);l.layers=this.layers,this.add(l);const c=new qe(Sn,bn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uc extends Ce{constructor(t=[],e=rn,i,n,a,r,o,l,c,h){super(t,e,i,n,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nc extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Uc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Cs(5,5,5),a=new he({name:"CubemapFromEquirect",uniforms:Vn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ae,blending:pi});a.uniforms.tEquirect.value=e;const r=new ie(n,a),o=e.minFilter;return e.minFilter===nn&&(e.minFilter=Ie),new bu(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}class ti extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eu={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ti;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Tu extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=co,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,a=this.stride;n<a;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new R;class kn{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array),a=Kt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gn extends Wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let En;const ts=new R,Tn=new R,wn=new R,An=new ht,es=new ht,Oc=new Zt,js=new R,is=new R,Ks=new R,wl=new ht,nr=new ht,Al=new ht;class ys extends Re{constructor(t=new Gn){if(super(),this.isSprite=!0,this.type="Sprite",En===void 0){En=new le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fc(e,5);En.setIndex([0,1,2,0,2,3]),En.setAttribute("position",new kn(i,3,0,!1)),En.setAttribute("uv",new kn(i,2,3,!1))}this.geometry=En,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tn.setFromMatrixScale(this.matrixWorld),Oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tn.multiplyScalar(-wn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const r=this.center;Zs(js.set(-.5,-.5,0),wn,r,Tn,n,a),Zs(is.set(.5,-.5,0),wn,r,Tn,n,a),Zs(Ks.set(.5,.5,0),wn,r,Tn,n,a),wl.set(0,0),nr.set(1,0),Al.set(1,1);let o=t.ray.intersectTriangle(js,is,Ks,!1,ts);if(o===null&&(Zs(is.set(-.5,.5,0),wn,r,Tn,n,a),nr.set(0,1),o=t.ray.intersectTriangle(js,Ks,is,!1,ts),o===null))return;const l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:Qe.getInterpolation(ts,js,is,Ks,wl,nr,Al,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zs(s,t,e,i,n,a){An.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(es.x=a*An.x-n*An.y,es.y=n*An.x+a*An.y):es.copy(An),s.copy(t),s.x+=es.x,s.y+=es.y,s.applyMatrix4(Oc)}class Bc extends Ce{constructor(t=null,e=1,i=1,n,a,r,o,l,c=ye,h=ye,u,f){super(null,r,o,l,c,h,n,a,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho extends se{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cn=new Zt,Cl=new Zt,Js=[],Rl=new Hi,wu=new Zt,ns=new ie,ss=new cn;class Au extends ie{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,wu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cn),Rl.copy(t.boundingBox).applyMatrix4(Cn),this.boundingBox.union(Rl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cn),ss.copy(t.boundingSphere).applyMatrix4(Cn),this.boundingSphere.union(ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(i),t.ray.intersectsSphere(ss)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Cn),Cl.multiplyMatrices(i,Cn),ns.matrixWorld=Cl,ns.raycast(t,Js);for(let r=0,o=Js.length;r<o;r++){const l=Js[r];l.instanceId=a,l.object=this,e.push(l)}Js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bc(new Float32Array(n*this.count),n,this.count,Do,oi));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sr=new R,Cu=new R,Ru=new Lt;class Fi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=sr.subVectors(i,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(sr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ru.getNormalMatrix(t),n=this.coplanarPoint(sr).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new cn,Pu=new ht(.5,.5),Qs=new R;class Vo{constructor(t=new Fi,e=new Fi,i=new Fi,n=new Fi,a=new Fi,r=new Fi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){const n=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],f=a[6],p=a[7],_=a[8],x=a[9],m=a[10],d=a[11],v=a[12],b=a[13],E=a[14],w=a[15];if(n[0].setComponents(c-r,p-h,d-_,w-v).normalize(),n[1].setComponents(c+r,p+h,d+_,w+v).normalize(),n[2].setComponents(c+o,p+u,d+x,w+b).normalize(),n[3].setComponents(c-o,p-u,d-x,w-b).normalize(),i)n[4].setComponents(l,f,m,E).normalize(),n[5].setComponents(c-l,p-f,d-m,w-E).normalize();else if(n[4].setComponents(c-l,p-f,d-m,w-E).normalize(),e===di)n[5].setComponents(c+l,p+f,d+m,w+E).normalize();else if(e===xa)n[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);const e=Pu.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Qs.x=n.normal.x>0?t.max.x:t.min.x,Qs.y=n.normal.y>0?t.max.y:t.min.y,Qs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ss extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ma=new R,ya=new R,Pl=new Zt,as=new As,ta=new cn,ar=new R,Dl=new R;class Sa extends Re{constructor(t=new le,e=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)Ma.fromBufferAttribute(e,n-1),ya.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ma.distanceTo(ya);t.setAttribute("lineDistance",new me(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(n),ta.radius+=a,t.ray.intersectsSphere(ta)===!1)return;Pl.copy(n).invert(),as.copy(t.ray).applyMatrix4(Pl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let x=p,m=_-1;x<m;x+=c){const d=h.getX(x),v=h.getX(x+1),b=ea(this,t,as,l,d,v,x);b&&e.push(b)}if(this.isLineLoop){const x=h.getX(_-1),m=h.getX(p),d=ea(this,t,as,l,x,m,_-1);d&&e.push(d)}}else{const p=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let x=p,m=_-1;x<m;x+=c){const d=ea(this,t,as,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){const x=ea(this,t,as,l,_-1,p,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ea(s,t,e,i,n,a,r){const o=s.geometry.attributes.position;if(Ma.fromBufferAttribute(o,n),ya.fromBufferAttribute(o,a),e.distanceSqToSegment(Ma,ya,ar,Dl)>i)return;ar.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ar);if(!(c<t.near||c>t.far))return{distance:c,point:Dl.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}class Hn extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ll=new Zt,uo=new As,ia=new cn,na=new R;class bs extends Re{constructor(t=new le,e=new Hn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(n),ia.radius+=a,t.ray.intersectsSphere(ia)===!1)return;Ll.copy(n).invert(),uo.copy(t.ray).applyMatrix4(Ll);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);na.fromBufferAttribute(u,m),Il(na,m,l,n,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let _=f,x=p;_<x;_++)na.fromBufferAttribute(u,_),Il(na,_,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Il(s,t,e,i,n,a,r){const o=uo.distanceSqToPoint(s);if(o<e){const l=new R;uo.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ul extends Ce{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=ye,this.minFilter=ye,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ke extends Ce{constructor(t,e,i,n,a,r,o,l,c){super(t,e,i,n,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Ce{constructor(t,e,i=_i,n,a,r,o=ye,l=ye,c,h=Ri,u=1){if(h!==Ri&&h!==sn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,n,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Du extends Es{constructor(t,e=_i,i=rn,n,a,r=ye,o=ye,l,c=Ri){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zc extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rs extends le{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),c(i),h(),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(a.slice(),3)),this.setAttribute("uv",new me(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new R,E=new R,w=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],b),p(e[A+1],E),p(e[A+2],w),l(b,E,w,v)}function l(v,b,E,w){const A=w+1,C=[];for(let U=0;U<=A;U++){C[U]=[];const M=v.clone().lerp(E,U/A),S=b.clone().lerp(E,U/A),D=A-U;for(let V=0;V<=D;V++)V===0&&U===A?C[U][V]=M:C[U][V]=M.clone().lerp(S,V/D)}for(let U=0;U<A;U++)for(let M=0;M<2*(A-U)-1;M++){const S=Math.floor(M/2);M%2===0?(f(C[U][S+1]),f(C[U+1][S]),f(C[U][S])):(f(C[U][S+1]),f(C[U+1][S+1]),f(C[U+1][S]))}}function c(v){const b=new R;for(let E=0;E<a.length;E+=3)b.x=a[E+0],b.y=a[E+1],b.z=a[E+2],b.normalize().multiplyScalar(v),a[E+0]=b.x,a[E+1]=b.y,a[E+2]=b.z}function h(){const v=new R;for(let b=0;b<a.length;b+=3){v.x=a[b+0],v.y=a[b+1],v.z=a[b+2];const E=m(v)/2/Math.PI+.5,w=d(v)/Math.PI+.5;r.push(E,1-w)}_(),u()}function u(){for(let v=0;v<r.length;v+=6){const b=r[v+0],E=r[v+2],w=r[v+4],A=Math.max(b,E,w),C=Math.min(b,E,w);A>.9&&C<.1&&(b<.2&&(r[v+0]+=1),E<.2&&(r[v+2]+=1),w<.2&&(r[v+4]+=1))}}function f(v){a.push(v.x,v.y,v.z)}function p(v,b){const E=v*3;b.x=t[E+0],b.y=t[E+1],b.z=t[E+2]}function _(){const v=new R,b=new R,E=new R,w=new R,A=new ht,C=new ht,U=new ht;for(let M=0,S=0;M<a.length;M+=9,S+=6){v.set(a[M+0],a[M+1],a[M+2]),b.set(a[M+3],a[M+4],a[M+5]),E.set(a[M+6],a[M+7],a[M+8]),A.set(r[S+0],r[S+1]),C.set(r[S+2],r[S+3]),U.set(r[S+4],r[S+5]),w.copy(v).add(b).add(E).divideScalar(3);const D=m(w);x(A,S+0,v,D),x(C,S+2,b,D),x(U,S+4,E,D)}}function x(v,b,E,w){w<0&&v.x===1&&(r[b]=v.x-1),E.x===0&&E.z===0&&(r[b]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.detail)}}class ko extends Rs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class Go extends Rs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Go(t.radius,t.detail)}}class Ra extends le{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,p=[],_=[],x=[],m=[];for(let d=0;d<h;d++){const v=d*f-r;for(let b=0;b<c;b++){const E=b*u-a;_.push(E,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const b=v+c*d,E=v+c*(d+1),w=v+1+c*(d+1),A=v+1+c*d;p.push(b,E,A),p.push(E,w,A)}this.setIndex(p),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.width,t.height,t.widthSegments,t.heightSegments)}}class ba extends le{constructor(t=.5,e=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/n,p=new R,_=new ht;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const d=a+m/i*r;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let x=0;x<n;x++){const m=x*(i+1);for(let d=0;d<i;d++){const v=d+m,b=v,E=v+i+1,w=v+i+2,A=v+1;o.push(b,E,A),o.push(E,w,A)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class si extends le{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new R,f=new R,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const v=[],b=d/i;let E=0;d===0&&r===0?E=.5/e:d===i&&l===Math.PI&&(E=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(n+A*a)*Math.sin(r+b*o),u.y=t*Math.cos(r+b*o),u.z=t*Math.sin(n+A*a)*Math.sin(r+b*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+E,1-b),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<e;v++){const b=h[d][v+1],E=h[d][v],w=h[d+1][v],A=h[d+1][v+1];(d!==0||r>0)&&p.push(b,E,A),(d!==i-1||l<Math.PI)&&p.push(E,w,A)}this.setIndex(p),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ho extends Rs{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ho(t.radius,t.detail)}}class fs extends he{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oi extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lu extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Iu extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Uu{constructor(t,e,i){const n=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Nu=new Uu;class Wo{constructor(t){this.manager=t!==void 0?t:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,a){i.load(t,n,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn=new WeakMap;class Fu extends Wo{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=rr.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0);else{let u=Rn.get(r);u===void 0&&(u=[],Rn.set(r,u)),u.push({onLoad:e,onError:n})}return r}const o=_s("img");function l(){h(),e&&e(this);const u=Rn.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}Rn.delete(this),a.manager.itemEnd(t)}function c(u){h(),n&&n(u),rr.remove(`image:${t}`);const f=Rn.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(u)}Rn.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),rr.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}}class Ou extends Wo{constructor(t){super(t)}load(t,e,i,n){const a=new Ce,r=new Fu(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},i,n),a}}class Vc extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const or=new Zt,Nl=new R,Fl=new R;class Bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Oe,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nl),Fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fl),e.updateMatrixWorld(),or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zu extends Bu{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}}class Vu extends Vc{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new zu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Xo extends Ic{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ku extends Vc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gu extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ol=new Zt;class Hu{constructor(t,e,i=0,n=1/0){this.ray=new As(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ol.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(t,e=!0,i=[]){return fo(t,this,i,e),i.sort(Bl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)fo(t[n],this,i,e);return i.sort(Bl),i}}function Bl(s,t){return s.distance-t.distance}function fo(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)fo(a[r],t,e,!0)}}class zl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vl=new ht;class Wu{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}let Xu=class extends ln{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Rt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function kl(s,t,e,i){const n=$u(i);switch(e){case Ec:return s*t;case Do:return s*t/n.components*n.byteLength;case Lo:return s*t/n.components*n.byteLength;case Bn:return s*t*2/n.components*n.byteLength;case Io:return s*t*2/n.components*n.byteLength;case Tc:return s*t*3/n.components*n.byteLength;case li:return s*t*4/n.components*n.byteLength;case Uo:return s*t*4/n.components*n.byteLength;case ca:case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lr:case Ur:return Math.max(s,16)*Math.max(t,8)/4;case Dr:case Ir:return Math.max(s,8)*Math.max(t,8)/2;case Nr:case Fr:case Br:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Or:case Vr:case kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case io:case no:case so:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ao:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*8;case oo:case lo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $u(s){switch(s){case Oe:case Mc:return{byteLength:1,components:1};case ms:case yc:case je:return{byteLength:2,components:1};case Ro:case Po:return{byteLength:2,components:4};case _i:case Co:case oi:return{byteLength:4,components:1};case Sc:case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gc(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Yu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:r}}var qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ju=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,od=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_d=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
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
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
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
#endif`,$d=`uniform sampler2D dfgLUT;
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
}`,Yd=`
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,If=`float getShadowMask() {
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
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
}`,ep=`#if DEPTH_PACKING == 3200
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
}`,ip=`#define DISTANCE
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
}`,np=`#define DISTANCE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,up=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,mp=`#define NORMAL
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
}`,gp=`#define PHONG
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
}`,_p=`#define PHONG
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
}`,xp=`#define STANDARD
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
}`,vp=`#define STANDARD
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
}`,Mp=`#define TOON
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
}`,yp=`#define TOON
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
}`,Sp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,wp=`uniform float rotation;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:qu,alphahash_pars_fragment:ju,alphamap_fragment:Ku,alphamap_pars_fragment:Zu,alphatest_fragment:Ju,alphatest_pars_fragment:Qu,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:id,batching_vertex:nd,begin_vertex:sd,beginnormal_vertex:ad,bsdfs:rd,iridescence_fragment:od,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:_d,cube_uv_reflection_fragment:xd,defaultnormal_vertex:vd,displacementmap_pars_vertex:Md,displacementmap_vertex:yd,emissivemap_fragment:Sd,emissivemap_pars_fragment:bd,colorspace_fragment:Ed,colorspace_pars_fragment:Td,envmap_fragment:wd,envmap_common_pars_fragment:Ad,envmap_pars_fragment:Cd,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Vd,envmap_vertex:Pd,fog_vertex:Dd,fog_pars_vertex:Ld,fog_fragment:Id,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Fd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Bd,lights_pars_begin:zd,lights_toon_fragment:kd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:$d,lights_fragment_begin:Yd,lights_fragment_maps:qd,lights_fragment_end:jd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Qd,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:af,metalnessmap_pars_fragment:rf,morphinstance_vertex:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:yf,opaque_fragment:Sf,packing:bf,premultiplied_alpha_fragment:Ef,project_vertex:Tf,dithering_fragment:wf,dithering_pars_fragment:Af,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Df,shadowmap_vertex:Lf,shadowmask_pars_fragment:If,skinbase_vertex:Uf,skinning_pars_vertex:Nf,skinning_vertex:Ff,skinnormal_vertex:Of,specularmap_fragment:Bf,specularmap_pars_fragment:zf,tonemapping_fragment:Vf,tonemapping_pars_fragment:kf,transmission_fragment:Gf,transmission_pars_fragment:Hf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:$f,worldpos_vertex:Yf,background_vert:qf,background_frag:jf,backgroundCube_vert:Kf,backgroundCube_frag:Zf,cube_vert:Jf,cube_frag:Qf,depth_vert:tp,depth_frag:ep,distance_vert:ip,distance_frag:np,equirect_vert:sp,equirect_frag:ap,linedashed_vert:rp,linedashed_frag:op,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:_p,meshphysical_vert:xp,meshphysical_frag:vp,meshtoon_vert:Mp,meshtoon_frag:yp,points_vert:Sp,points_frag:bp,shadow_vert:Ep,shadow_frag:Tp,sprite_vert:wp,sprite_frag:Ap},ot={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},ui={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};ui.physical={uniforms:Fe([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const sa={r:0,b:0,g:0},Zi=new xi,Cp=new Zt;function Rp(s,t,e,i,n,a,r){const o=new Et(0);let l=a===!0?0:1,c,h,u=null,f=0,p=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function x(b){let E=!1;const w=_(b);w===null?d(o,l):w&&w.isColor&&(d(w,1),E=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,E){const w=_(E);w&&(w.isCubeTexture||w.mapping===Ca)?(h===void 0&&(h=new ie(new Cs(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:Vn(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Zi.copy(E.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(Zi)),h.material.toneMapped=kt.getTransfer(w.colorSpace)!==$t,(u!==w||f!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ie(new Ra(2,2),new he({name:"BackgroundMaterial",uniforms:Vn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=kt.getTransfer(w.colorSpace)!==$t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(sa,Lc(s)),i.buffers.color.setClear(sa.r,sa.g,sa.b,E,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:x,addToRenderList:m,dispose:v}}function Pp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let a=n,r=!1;function o(S,D,V,z,$){let W=!1;const G=u(z,V,D);a!==G&&(a=G,c(a.object)),W=p(S,z,V,$),W&&_(S,z,V,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,E(S,D,V,z),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,D,V){const z=V.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let W=$[D.id];W===void 0&&(W={},$[D.id]=W);let G=W[z];return G===void 0&&(G=f(l()),W[z]=G),G}function f(S){const D=[],V=[],z=[];for(let $=0;$<e;$++)D[$]=0,V[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,D,V,z){const $=a.attributes,W=D.attributes;let G=0;const O=V.getAttributes();for(const K in O)if(O[K].location>=0){const rt=$[K];let dt=W[K];if(dt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;G++}return a.attributesNum!==G||a.index!==z}function _(S,D,V,z){const $={},W=D.attributes;let G=0;const O=V.getAttributes();for(const K in O)if(O[K].location>=0){let rt=W[K];rt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),$[K]=dt,G++}a.attributes=$,a.attributesNum=G,a.index=z}function x(){const S=a.newAttributes;for(let D=0,V=S.length;D<V;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const V=a.newAttributes,z=a.enabledAttributes,$=a.attributeDivisors;V[S]=1,z[S]===0&&(s.enableVertexAttribArray(S),z[S]=1),$[S]!==D&&(s.vertexAttribDivisor(S,D),$[S]=D)}function v(){const S=a.newAttributes,D=a.enabledAttributes;for(let V=0,z=D.length;V<z;V++)D[V]!==S[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function b(S,D,V,z,$,W,G){G===!0?s.vertexAttribIPointer(S,D,V,$,W):s.vertexAttribPointer(S,D,V,z,$,W)}function E(S,D,V,z){x();const $=z.attributes,W=V.getAttributes(),G=D.defaultAttributeValues;for(const O in W){const K=W[O];if(K.location>=0){let ut=$[O];if(ut===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){const rt=ut.normalized,dt=ut.itemSize,Ot=t.get(ut);if(Ot===void 0)continue;const Ut=Ot.buffer,ue=Ot.type,ce=Ot.bytesPerElement,Y=ue===s.INT||ue===s.UNSIGNED_INT||ut.gpuType===Co;if(ut.isInterleavedBufferAttribute){const Z=ut.data,mt=Z.stride,Dt=ut.offset;if(Z.isInstancedInterleavedBuffer){for(let xt=0;xt<K.locationSize;xt++)d(K.location+xt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xt=0;xt<K.locationSize;xt++)m(K.location+xt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let xt=0;xt<K.locationSize;xt++)b(K.location+xt,dt/K.locationSize,ue,rt,mt*ce,(Dt+dt/K.locationSize*xt)*ce,Y)}else{if(ut.isInstancedBufferAttribute){for(let Z=0;Z<K.locationSize;Z++)d(K.location+Z,ut.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Z=0;Z<K.locationSize;Z++)m(K.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let Z=0;Z<K.locationSize;Z++)b(K.location+Z,dt/K.locationSize,ue,rt,dt*ce,dt/K.locationSize*Z*ce,Y)}}else if(G!==void 0){const rt=G[O];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(K.location,rt);break;case 3:s.vertexAttrib3fv(K.location,rt);break;case 4:s.vertexAttrib4fv(K.location,rt);break;default:s.vertexAttrib1fv(K.location,rt)}}}}v()}function w(){U();for(const S in i){const D=i[S];for(const V in D){const z=D[V];for(const $ in z)h(z[$].object),delete z[$];delete D[V]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const V in D){const z=D[V];for(const $ in z)h(z[$].object),delete z[$];delete D[V]}delete i[S.id]}function C(S){for(const D in i){const V=i[D];if(V[S.id]===void 0)continue;const z=V[S.id];for(const $ in z)h(z[$].object),delete z[$];delete V[S.id]}}function U(){M(),r=!0,a!==n&&(a=n,c(a.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Dp(s,t,e){let i;function n(c){i=c}function a(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*f[x];e.update(_,i,1)}}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lp(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){return!(C!==li&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Oe&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!U)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:E,maxSamples:w,samples:A}}function Ip(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new Fi,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||n;return n=f,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!n||_===null||_.length===0||a&&!m)a?h(null):c();else{const v=a?0:i,b=v*4;let E=d.clippingState||null;l.value=E,E=h(_,f,b,p);for(let w=0;w!==b;++w)E[w]=e[w];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==x;++b,E+=4)r.copy(u[b]).applyMatrix4(v,o),r.normal.toArray(m,E),m[E+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Up(s){let t=new WeakMap;function e(r,o){return o===Ar?r.mapping=rn:o===Cr&&(r.mapping=On),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ar||o===Cr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Nc(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const Vi=4,Gl=[.125,.215,.35,.446,.526,.582],tn=20,Np=256,rs=new Xo,Hl=new Et;let lr=null,cr=0,hr=0,ur=!1;const Fp=new R;class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,a={}){const{size:r=256,position:o=Fp}=a;lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,cr,hr),this._renderer.xr.enabled=ur,t.scissorTest=!1,Pn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rn||t.mapping===On?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:je,format:li,colorSpace:zn,depthBuffer:!1},n=Xl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Op(a)),this._blurMaterial=zp(a,t,e),this._ggxMaterial=Bp(a,t,e)}return n}_compileMaterial(t){const e=new ie(new le,t);this._renderer.compile(e,rs)}_sceneToCubeUV(t,e,i,n,a){const l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Hl),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new Cs,new $n({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,d=!0):(m.color.copy(Hl),d=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[b],a.y,a.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[b]));const w=this._cubeSize;Pn(n,E*w,b>2?w:0,w,w),u.setRenderTarget(n),d&&u.render(x,l),u.render(t,l)}u.toneMapping=p,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===rn||t.mapping===On;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const a=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Pn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,rs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,p=u*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Vi?i-_+Vi:0),d=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,Pn(a,m,d,3*x,2*x),n.setRenderTarget(a),n.render(o,rs),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,Pn(t,m,d,3*x,2*x),n.setRenderTarget(t),n.render(o,rs)}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Vt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*tn-1),x=a/_,m=isFinite(a)?1+Math.floor(h*x):tn;m>tn&&Rt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tn}`);const d=[];let v=0;for(let C=0;C<tn;++C){const U=C/x,M=Math.exp(-U*U/2);d.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const E=this._sizeLods[n],w=3*E*(n>b-Vi?n-b+Vi:0),A=4*(this._cubeSize-E);Pn(e,w,A,3*E,2*E),l.setRenderTarget(e),l.render(u,rs)}}function Op(s){const t=[],e=[],i=[];let n=s;const a=s-Vi+1+Gl.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);t.push(o);let l=1/o;r>s-Vi?l=Gl[r-s+Vi-1]:r===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,d=1,v=new Float32Array(x*_*p),b=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,U=A>2?0:-1,M=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];v.set(M,x*_*A),b.set(f,m*_*A);const S=[A,A,A,A,A,A];E.set(S,d*_*A)}const w=new le;w.setAttribute("position",new se(v,x)),w.setAttribute("uv",new se(b,m)),w.setAttribute("faceIndex",new se(E,d)),i.push(new ie(w,null)),n>Vi&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Xl(s,t,e){const i=new Ge(s,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pn(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Bp(s,t,e){return new he({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Np,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zp(s,t,e){const i=new Float32Array(tn),n=new R(0,1,0);return new he({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function $l(){return new he({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Yl(){return new he({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function Vp(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ar||l===Cr,h=l===rn||l===On;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Wl(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new Wl(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function kp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&xs("WebGLRenderer: "+i+" extension not supported."),n}}}function Gp(s,t,e,i){const n={},a=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete n[f.id];const p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",r),n[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let b=0,E=v.length;b<E;b+=3){const w=v[b+0],A=v[b+1],C=v[b+2];f.push(w,A,A,C,C,w)}}else if(_!==void 0){const v=_.array;x=_.version;for(let b=0,E=v.length/3-1;b<E;b+=3){const w=b+0,A=b+1,C=b+2;f.push(w,A,A,C,C,w)}}else return;const m=new(Ac(f)?Dc:Pc)(f,1);m.version=x;const d=a.get(u);d&&t.remove(d),a.set(u,m)}function h(u){const f=a.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hp(s,t,e){let i;function n(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){s.drawElements(i,p,a,f*r),e.update(p,i,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(i,p,a,f*r,_),e.update(p,i,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,i,1)}function u(f,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/r,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v]*x[v];e.update(d,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:Vt("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xp(s,t,e){const i=new WeakMap,n=new de;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*A*4*u),U=new Cc(C,w,A,u);U.type=oi,U.needsUpdate=!0;const M=E*4;for(let D=0;D<u;D++){const V=d[D],z=v[D],$=b[D],W=w*A*4*D;for(let G=0;G<V.count;G++){const O=G*M;_===!0&&(n.fromBufferAttribute(V,G),C[W+O+0]=n.x,C[W+O+1]=n.y,C[W+O+2]=n.z,C[W+O+3]=0),x===!0&&(n.fromBufferAttribute(z,G),C[W+O+4]=n.x,C[W+O+5]=n.y,C[W+O+6]=n.z,C[W+O+7]=0),m===!0&&(n.fromBufferAttribute($,G),C[W+O+8]=n.x,C[W+O+9]=n.y,C[W+O+10]=n.z,C[W+O+11]=$.itemSize===4?n.w:1)}}f={count:u,texture:U,size:new ht(w,A)},i.set(o,f),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function $p(s,t,e,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const Yp={[So]:"LINEAR_TONE_MAPPING",[bo]:"REINHARD_TONE_MAPPING",[Eo]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[wo]:"AGX_TONE_MAPPING",[Ao]:"NEUTRAL_TONE_MAPPING",[To]:"CUSTOM_TONE_MAPPING"};function qp(s,t,e,i,n){const a=new Ge(t,e,{type:s,depthBuffer:i,stencilBuffer:n}),r=new Ge(t,e,{type:je,depthBuffer:!1,stencilBuffer:!1}),o=new le;o.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new me([0,2,0,0,2,0],2));const l=new fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ie(o,l),h=new Xo(-1,1,1,-1,0,1);let u=null,f=null,p=!1,_,x=null,m=[],d=!1;this.setSize=function(v,b){a.setSize(v,b),r.setSize(v,b);for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){m=v,d=m.length>0&&m[0].isRenderPass===!0;const b=a.width,E=a.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(b,E)}},this.begin=function(v,b){if(p||v.toneMapping===mi&&m.length===0)return!1;if(x=b,b!==null){const E=b.width,w=b.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return d===!1&&v.setRenderTarget(a),_=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return d},this.end=function(v,b){v.toneMapping=_,p=!0;let E=a,w=r;for(let A=0;A<m.length;A++){const C=m[A];if(C.enabled!==!1&&(C.render(v,w,E,b),C.needsSwap!==!1)){const U=E;E=w,w=U}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,l.defines={},kt.getTransfer(u)===$t&&(l.defines.SRGB_TRANSFER="");const A=Yp[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(x),v.render(c,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),l.dispose()}}const Hc=new Ce,po=new Es(1,1),Wc=new Cc,Xc=new lu,$c=new Uc,ql=[],jl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function Yn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=ql[n];if(a===void 0&&(a=new Float32Array(n),ql[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Da(s,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function Qp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Jl.set(i),s.uniformMatrix2fv(this.addr,!1,Jl),Ee(e,i)}}function tm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Zl.set(i),s.uniformMatrix3fv(this.addr,!1,Zl),Ee(e,i)}}function em(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Kl.set(i),s.uniformMatrix4fv(this.addr,!1,Kl),Ee(e,i)}}function im(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function rm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function hm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?(po.compareFunction=e.isReversedDepthBuffer()?Fo:No,a=po):a=Hc,e.setTexture2D(t||a,n)}function um(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Xc,n)}function dm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||$c,n)}function fm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Wc,n)}function pm(s){switch(s){case 5126:return jp;case 35664:return Kp;case 35665:return Zp;case 35666:return Jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return im;case 35667:case 35671:return nm;case 35668:case 35672:return sm;case 35669:case 35673:return am;case 5125:return rm;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(s,t){s.uniform1fv(this.addr,t)}function gm(s,t){const e=Yn(t,this.size,2);s.uniform2fv(this.addr,e)}function _m(s,t){const e=Yn(t,this.size,3);s.uniform3fv(this.addr,e)}function xm(s,t){const e=Yn(t,this.size,4);s.uniform4fv(this.addr,e)}function vm(s,t){const e=Yn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mm(s,t){const e=Yn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ym(s,t){const e=Yn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sm(s,t){s.uniform1iv(this.addr,t)}function bm(s,t){s.uniform2iv(this.addr,t)}function Em(s,t){s.uniform3iv(this.addr,t)}function Tm(s,t){s.uniform4iv(this.addr,t)}function wm(s,t){s.uniform1uiv(this.addr,t)}function Am(s,t){s.uniform2uiv(this.addr,t)}function Cm(s,t){s.uniform3uiv(this.addr,t)}function Rm(s,t){s.uniform4uiv(this.addr,t)}function Pm(s,t,e){const i=this.cache,n=t.length,a=Da(e,n);be(i,a)||(s.uniform1iv(this.addr,a),Ee(i,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=po:r=Hc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,a[o])}function Dm(s,t,e){const i=this.cache,n=t.length,a=Da(e,n);be(i,a)||(s.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Xc,a[r])}function Lm(s,t,e){const i=this.cache,n=t.length,a=Da(e,n);be(i,a)||(s.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||$c,a[r])}function Im(s,t,e){const i=this.cache,n=t.length,a=Da(e,n);be(i,a)||(s.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Wc,a[r])}function Um(s){switch(s){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return vm;case 35675:return Mm;case 35676:return ym;case 5124:case 35670:return Sm;case 35667:case 35671:return bm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Am;case 36295:return Cm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}class Nm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=pm(e.type)}}class Fm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Um(e.type)}}class Om{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Ql(s,t){s.seq.push(t),s.map[t.id]=t}function Bm(s,t,e){const i=s.name,n=i.length;for(dr.lastIndex=0;;){const a=dr.exec(i),r=dr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){Ql(e,c===void 0?new Nm(o,s,t):new Fm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Om(o),Ql(e,u)),e=u}}}class fa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Bm(o,l,this)}const n=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):a.push(r);n.length>0&&(this.seq=n.concat(a))}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function tc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const zm=37297;let Vm=0;function km(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const ec=new Lt;function Gm(s){kt._getMatrix(ec,kt.workingColorSpace,s);const t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(s)){case _a:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ic(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+km(s.getShaderSource(t),o)}else return a}function Hm(s,t){const e=Gm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Wm={[So]:"Linear",[bo]:"Reinhard",[Eo]:"Cineon",[Aa]:"ACESFilmic",[wo]:"AgX",[Ao]:"Neutral",[To]:"Custom"};function Xm(s,t){const e=Wm[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new R;function $m(){kt.getLuminanceCoefficients(aa);const s=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function qm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function hs(s){return s!==""}function nc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(s){return s.replace(Km,Jm)}const Zm=new Map;function Jm(s,t){let e=It[t];if(e===void 0){const i=Zm.get(t);if(i!==void 0)e=It[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return mo(e)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(s){return s.replace(Qm,tg)}function tg(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function rc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const eg={[la]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function ig(s){return eg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ng={[rn]:"ENVMAP_TYPE_CUBE",[On]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE_UV"};function sg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ng[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ag={[On]:"ENVMAP_MODE_REFRACTION"};function rg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ag[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const og={[xc]:"ENVMAP_BLENDING_MULTIPLY",[Ch]:"ENVMAP_BLENDING_MIX",[Rh]:"ENVMAP_BLENDING_ADD"};function lg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":og[s.combine]||"ENVMAP_BLENDING_NONE"}function cg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hg(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=ig(e),c=sg(e),h=rg(e),u=lg(e),f=cg(e),p=Ym(e),_=qm(a),x=n.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),d.length>0&&(d+=`
`)):(m=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),d=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?It.tonemapping_pars_fragment:"",e.toneMapping!==mi?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Hm("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),r=mo(r),r=nc(r,e),r=sc(r,e),o=mo(o),o=nc(o,e),o=sc(o,e),r=ac(r),o=ac(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=v+m+r,E=v+d+o,w=tc(n,n.VERTEX_SHADER,b),A=tc(n,n.FRAGMENT_SHADER,E);n.attachShader(x,w),n.attachShader(x,A),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(D){if(s.debug.checkShaderErrors){const V=n.getProgramInfoLog(x)||"",z=n.getShaderInfoLog(w)||"",$=n.getShaderInfoLog(A)||"",W=V.trim(),G=z.trim(),O=$.trim();let K=!0,ut=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,w,A);else{const rt=ic(n,w,"vertex"),dt=ic(n,A,"fragment");Vt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+rt+`
`+dt)}else W!==""?Rt("WebGLProgram: Program Info Log:",W):(G===""||O==="")&&(ut=!1);ut&&(D.diagnostics={runnable:K,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:d}})}n.deleteShader(w),n.deleteShader(A),U=new fa(n,x),M=jm(n,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(x,zm)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fg(t),e.set(t,i)),i}}class fg{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}}function pg(s,t,e,i,n,a,r){const o=new zo,l=new dg,c=new Set,h=[],u=new Map,f=n.logarithmicDepthBuffer;let p=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,V,z){const $=V.fog,W=z.geometry,G=M.isMeshStandardMaterial?V.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),K=O&&O.mapping===Ca?O.image.height:null,ut=_[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&Rt("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=rt!==void 0?rt.length:0;let Ot=0;W.morphAttributes.position!==void 0&&(Ot=1),W.morphAttributes.normal!==void 0&&(Ot=2),W.morphAttributes.color!==void 0&&(Ot=3);let Ut,ue,ce,Y;if(ut){const qt=ui[ut];Ut=qt.vertexShader,ue=qt.fragmentShader}else Ut=M.vertexShader,ue=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const Z=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Dt=z.isInstancedMesh===!0,xt=z.isBatchedMesh===!0,Ht=!!M.map,Te=!!M.matcap,Gt=!!O,Yt=!!M.aoMap,te=!!M.lightMap,Nt=!!M.bumpMap,ge=!!M.normalMap,P=!!M.displacementMap,_e=!!M.emissiveMap,Xt=!!M.metalnessMap,ae=!!M.roughnessMap,Mt=M.anisotropy>0,T=M.clearcoat>0,g=M.dispersion>0,I=M.iridescence>0,X=M.sheen>0,j=M.transmission>0,H=Mt&&!!M.anisotropyMap,St=T&&!!M.clearcoatMap,it=T&&!!M.clearcoatNormalMap,vt=T&&!!M.clearcoatRoughnessMap,Ct=I&&!!M.iridescenceMap,Q=I&&!!M.iridescenceThicknessMap,st=X&&!!M.sheenColorMap,_t=X&&!!M.sheenRoughnessMap,yt=!!M.specularMap,nt=!!M.specularColorMap,Ft=!!M.specularIntensityMap,L=j&&!!M.transmissionMap,ct=j&&!!M.thicknessMap,tt=!!M.gradientMap,ft=!!M.alphaMap,J=M.alphaTest>0,q=!!M.alphaHash,et=!!M.extensions;let Pt=mi;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pt=s.toneMapping);const re={shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:Ut,fragmentShader:ue,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:xt,batchingColor:xt&&z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,instancingMorph:Dt&&z.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:zn,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:Te,envMap:Gt,envMapMode:Gt&&O.mapping,envMapCubeUVHeight:K,aoMap:Yt,lightMap:te,bumpMap:Nt,normalMap:ge,displacementMap:P,emissiveMap:_e,normalMapObjectSpace:ge&&M.normalMapType===Lh,normalMapTangentSpace:ge&&M.normalMapType===wc,metalnessMap:Xt,roughnessMap:ae,anisotropy:Mt,anisotropyMap:H,clearcoat:T,clearcoatMap:St,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:g,iridescence:I,iridescenceMap:Ct,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:st,sheenRoughnessMap:_t,specularMap:yt,specularColorMap:nt,specularIntensityMap:Ft,transmission:j,transmissionMap:L,thicknessMap:ct,gradientMap:tt,opaque:M.transparent===!1&&M.blending===Un&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:q,combine:M.combine,mapUv:Ht&&x(M.map.channel),aoMapUv:Yt&&x(M.aoMap.channel),lightMapUv:te&&x(M.lightMap.channel),bumpMapUv:Nt&&x(M.bumpMap.channel),normalMapUv:ge&&x(M.normalMap.channel),displacementMapUv:P&&x(M.displacementMap.channel),emissiveMapUv:_e&&x(M.emissiveMap.channel),metalnessMapUv:Xt&&x(M.metalnessMap.channel),roughnessMapUv:ae&&x(M.roughnessMap.channel),anisotropyMapUv:H&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:st&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(M.sheenRoughnessMap.channel),specularMapUv:yt&&x(M.specularMap.channel),specularColorMapUv:nt&&x(M.specularColorMap.channel),specularIntensityMapUv:Ft&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:ft&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ge||Mt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Ht||ft),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&kt.getTransfer(M.map.colorSpace)===$t,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&kt.getTransfer(M.emissiveMap.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ai,flipSided:M.side===Ae,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:et&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&M.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),b(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const S=_[M.type];let D;if(S){const V=ui[S];D=Ms.clone(V.uniforms)}else D=M.uniforms;return D}function w(M,S){let D=u.get(S);return D!==void 0?++D.usedTimes:(D=new hg(s,S,M,a),h.push(D),u.set(S,D)),D}function A(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function C(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function mg(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function oc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function lc(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(u,f,p,_,x,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function o(u,f,p,_,x,m){const d=r(u,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?n.push(d):e.push(d)}function l(u,f,p,_,x,m){const d=r(u,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?n.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||gg),i.length>1&&i.sort(f||oc),n.length>1&&n.sort(f||oc)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function _g(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new lc,s.set(i,[r])):n>=a.length?(r=new lc,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function vg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Mg=0;function yg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sg(s){const t=new xg,e=vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const n=new R,a=new Zt,r=new Zt;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,v=0,b=0,E=0,w=0,A=0,C=0;c.sort(yg);for(let M=0,S=c.length;M<S;M++){const D=c[M],V=D.color,z=D.intensity,$=D.distance;let W=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bn?W=D.shadow.map.texture:W=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=V.r*z,u+=V.g*z,f+=V.b*z;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],z);C++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,K=e.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(V).multiplyScalar(z),G.distance=$,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[x]=G;const O=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,O.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=O.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=W,E++}x++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(V).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const O=D.shadow,K=e.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=D.shadow.matrix,b++}i.point[_]=G,_++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(z),G.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[d]=G,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==v||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==w||U.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,U.directionalLength=p,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=v,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=w,U.numLightProbes=C,i.version=Mg++)}function l(c,h){let u=0,f=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const b=c[d];if(b.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(m),u++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),_++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function cc(s){const t=new Sg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function bg(s){let t=new WeakMap;function e(n,a=0){const r=t.get(n);let o;return r===void 0?(o=new cc(s),t.set(n,[o])):a>=r.length?(o=new cc(s),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`,wg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Ag=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],hc=new Zt,os=new R,fr=new R;function Cg(s,t,e){let i=new Vo;const n=new ht,a=new ht,r=new de,o=new Lu,l=new Iu,c={},h=e.maxTextureSize,u={[Gi]:Ae,[Ae]:Gi,[ai]:ai},f=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new le;_.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ie(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let d=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===ch&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=la);const M=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),V=s.state;V.setBlending(pi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=d!==this.type;z&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(W=>W.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,W=A.length;$<W;$++){const G=A[$],O=G.shadow;if(O===void 0){Rt("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);const K=O.getFrameExtents();if(n.multiply(K),a.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,O.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,O.mapSize.y=a.y)),O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===cs){if(G.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ge(n.x,n.y,{format:Bn,type:je,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Es(n.x,n.y,oi),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ye,O.map.depthTexture.magFilter=ye}else{G.isPointLight?(O.map=new Nc(n.x),O.map.depthTexture=new Du(n.x,_i)):(O.map=new Ge(n.x,n.y),O.map.depthTexture=new Es(n.x,n.y,_i)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Ri;const rt=s.state.buffers.depth.getReversed();this.type===la?(O.map.depthTexture.compareFunction=rt?Fo:No,O.map.depthTexture.minFilter=Ie,O.map.depthTexture.magFilter=Ie):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ye,O.map.depthTexture.magFilter=ye)}O.camera.updateProjectionMatrix()}const ut=O.map.isWebGLCubeRenderTarget?6:1;for(let rt=0;rt<ut;rt++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,rt),s.clear();else{rt===0&&(s.setRenderTarget(O.map),s.clear());const dt=O.getViewport(rt);r.set(a.x*dt.x,a.y*dt.y,a.x*dt.z,a.y*dt.w),V.viewport(r)}if(G.isPointLight){const dt=O.camera,Ot=O.matrix,Ut=G.distance||dt.far;Ut!==dt.far&&(dt.far=Ut,dt.updateProjectionMatrix()),os.setFromMatrixPosition(G.matrixWorld),dt.position.copy(os),fr.copy(dt.position),fr.add(wg[rt]),dt.up.copy(Ag[rt]),dt.lookAt(fr),dt.updateMatrixWorld(),Ot.makeTranslation(-os.x,-os.y,-os.z),hc.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(hc,dt.coordinateSystem,dt.reversedDepth)}else O.updateMatrices(G);i=O.getFrustum(),E(C,U,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===cs&&v(O,U),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,D)};function v(A,C){const U=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ge(n.x,n.y,{format:Bn,type:je})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,U,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,U,p,x,null)}function b(A,C,U,M){let S=null;const D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=U.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=S.uuid,z=C.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let W=$[z];W===void 0&&(W=S.clone(),$[z]=W,C.addEventListener("dispose",w)),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,M===cs?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=s.properties.get(S);V.light=U}return S}function E(A,C,U,M,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===cs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const z=t.update(A),$=A.material;if(Array.isArray($)){const W=z.groups;for(let G=0,O=W.length;G<O;G++){const K=W[G],ut=$[K.materialIndex];if(ut&&ut.visible){const rt=b(A,ut,M,S);A.onBeforeShadow(s,A,C,U,z,rt,K),s.renderBufferDirect(U,null,z,rt,A,K),A.onAfterShadow(s,A,C,U,z,rt,K)}}}else if($.visible){const W=b(A,$,M,S);A.onBeforeShadow(s,A,C,U,z,W,null),s.renderBufferDirect(U,null,z,W,A,null),A.onAfterShadow(s,A,C,U,z,W,null)}}const V=A.children;for(let z=0,$=V.length;z<$;z++)E(V[z],C,U,M,S)}function w(A){A.target.removeEventListener("dispose",w);for(const U in c){const M=c[U],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Rg={[Mr]:yr,[Sr]:Tr,[br]:wr,[Fn]:Er,[yr]:Mr,[Tr]:Sr,[wr]:br,[Er]:Fn};function Pg(s,t){function e(){let L=!1;const ct=new de;let tt=null;const ft=new de(0,0,0,0);return{setMask:function(J){tt!==J&&!L&&(s.colorMask(J,J,J,J),tt=J)},setLocked:function(J){L=J},setClear:function(J,q,et,Pt,re){re===!0&&(J*=Pt,q*=Pt,et*=Pt),ct.set(J,q,et,Pt),ft.equals(ct)===!1&&(s.clearColor(J,q,et,Pt),ft.copy(ct))},reset:function(){L=!1,tt=null,ft.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,tt=null,ft=null,J=null;return{setReversed:function(q){if(ct!==q){const et=t.get("EXT_clip_control");q?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),ct=q;const Pt=J;J=null,this.setClear(Pt)}},getReversed:function(){return ct},setTest:function(q){q?Z(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(q){tt!==q&&!L&&(s.depthMask(q),tt=q)},setFunc:function(q){if(ct&&(q=Rg[q]),ft!==q){switch(q){case Mr:s.depthFunc(s.NEVER);break;case yr:s.depthFunc(s.ALWAYS);break;case Sr:s.depthFunc(s.LESS);break;case Fn:s.depthFunc(s.LEQUAL);break;case br:s.depthFunc(s.EQUAL);break;case Er:s.depthFunc(s.GEQUAL);break;case Tr:s.depthFunc(s.GREATER);break;case wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=q}},setLocked:function(q){L=q},setClear:function(q){J!==q&&(ct&&(q=1-q),s.clearDepth(q),J=q)},reset:function(){L=!1,tt=null,ft=null,J=null,ct=!1}}}function n(){let L=!1,ct=null,tt=null,ft=null,J=null,q=null,et=null,Pt=null,re=null;return{setTest:function(qt){L||(qt?Z(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(qt){ct!==qt&&!L&&(s.stencilMask(qt),ct=qt)},setFunc:function(qt,ci,vi){(tt!==qt||ft!==ci||J!==vi)&&(s.stencilFunc(qt,ci,vi),tt=qt,ft=ci,J=vi)},setOp:function(qt,ci,vi){(q!==qt||et!==ci||Pt!==vi)&&(s.stencilOp(qt,ci,vi),q=qt,et=ci,Pt=vi)},setLocked:function(qt){L=qt},setClear:function(qt){re!==qt&&(s.clearStencil(qt),re=qt)},reset:function(){L=!1,ct=null,tt=null,ft=null,J=null,q=null,et=null,Pt=null,re=null}}}const a=new e,r=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,v=null,b=null,E=null,w=null,A=null,C=new Et(0,0,0),U=0,M=!1,S=null,D=null,V=null,z=null,$=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=O>=1):K.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=O>=2);let ut=null,rt={};const dt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Ut=new de().fromArray(dt),ue=new de().fromArray(Ot);function ce(L,ct,tt,ft){const J=new Uint8Array(4),q=s.createTexture();s.bindTexture(L,q),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<tt;et++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ct+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return q}const Y={};Y[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),r.setFunc(Fn),Nt(!1),ge(nl),Z(s.CULL_FACE),Yt(pi);function Z(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function mt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Dt(L,ct){return u[L]!==ct?(s.bindFramebuffer(L,ct),u[L]=ct,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(L,ct){let tt=p,ft=!1;if(L){tt=f.get(ct),tt===void 0&&(tt=[],f.set(ct,tt));const J=L.textures;if(tt.length!==J.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let q=0,et=J.length;q<et;q++)tt[q]=s.COLOR_ATTACHMENT0+q;tt.length=J.length,ft=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,ft=!0);ft&&s.drawBuffers(tt)}function Ht(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const Te={[Qi]:s.FUNC_ADD,[uh]:s.FUNC_SUBTRACT,[dh]:s.FUNC_REVERSE_SUBTRACT};Te[fh]=s.MIN,Te[ph]=s.MAX;const Gt={[mh]:s.ZERO,[gh]:s.ONE,[_h]:s.SRC_COLOR,[xr]:s.SRC_ALPHA,[bh]:s.SRC_ALPHA_SATURATE,[yh]:s.DST_COLOR,[vh]:s.DST_ALPHA,[xh]:s.ONE_MINUS_SRC_COLOR,[vr]:s.ONE_MINUS_SRC_ALPHA,[Sh]:s.ONE_MINUS_DST_COLOR,[Mh]:s.ONE_MINUS_DST_ALPHA,[Eh]:s.CONSTANT_COLOR,[Th]:s.ONE_MINUS_CONSTANT_COLOR,[wh]:s.CONSTANT_ALPHA,[Ah]:s.ONE_MINUS_CONSTANT_ALPHA};function Yt(L,ct,tt,ft,J,q,et,Pt,re,qt){if(L===pi){x===!0&&(mt(s.BLEND),x=!1);return}if(x===!1&&(Z(s.BLEND),x=!0),L!==hh){if(L!==m||qt!==M){if((d!==Qi||E!==Qi)&&(s.blendEquation(s.FUNC_ADD),d=Qi,E=Qi),qt)switch(L){case Un:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Se:s.blendFunc(s.ONE,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case al:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",L);break}else switch(L){case Un:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Se:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sl:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",L);break}v=null,b=null,w=null,A=null,C.set(0,0,0),U=0,m=L,M=qt}return}J=J||ct,q=q||tt,et=et||ft,(ct!==d||J!==E)&&(s.blendEquationSeparate(Te[ct],Te[J]),d=ct,E=J),(tt!==v||ft!==b||q!==w||et!==A)&&(s.blendFuncSeparate(Gt[tt],Gt[ft],Gt[q],Gt[et]),v=tt,b=ft,w=q,A=et),(Pt.equals(C)===!1||re!==U)&&(s.blendColor(Pt.r,Pt.g,Pt.b,re),C.copy(Pt),U=re),m=L,M=!1}function te(L,ct){L.side===ai?mt(s.CULL_FACE):Z(s.CULL_FACE);let tt=L.side===Ae;ct&&(tt=!tt),Nt(tt),L.blending===Un&&L.transparent===!1?Yt(pi):Yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);const ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){S!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),S=L)}function ge(L){L!==oh?(Z(s.CULL_FACE),L!==D&&(L===nl?s.cullFace(s.BACK):L===lh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),D=L}function P(L){L!==V&&(G&&s.lineWidth(L),V=L)}function _e(L,ct,tt){L?(Z(s.POLYGON_OFFSET_FILL),(z!==ct||$!==tt)&&(s.polygonOffset(ct,tt),z=ct,$=tt)):mt(s.POLYGON_OFFSET_FILL)}function Xt(L){L?Z(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function ae(L){L===void 0&&(L=s.TEXTURE0+W-1),ut!==L&&(s.activeTexture(L),ut=L)}function Mt(L,ct,tt){tt===void 0&&(ut===null?tt=s.TEXTURE0+W-1:tt=ut);let ft=rt[tt];ft===void 0&&(ft={type:void 0,texture:void 0},rt[tt]=ft),(ft.type!==L||ft.texture!==ct)&&(ut!==tt&&(s.activeTexture(tt),ut=tt),s.bindTexture(L,ct||Y[L]),ft.type=L,ft.texture=ct)}function T(){const L=rt[ut];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function X(){try{s.texSubImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function j(){try{s.texSubImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function St(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function it(){try{s.texStorage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function vt(){try{s.texStorage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function Ct(){try{s.texImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function st(L){Ut.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ut.copy(L))}function _t(L){ue.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function yt(L,ct){let tt=c.get(ct);tt===void 0&&(tt=new WeakMap,c.set(ct,tt));let ft=tt.get(L);ft===void 0&&(ft=s.getUniformBlockIndex(ct,L.name),tt.set(L,ft))}function nt(L,ct){const ft=c.get(ct).get(L);l.get(ct)!==ft&&(s.uniformBlockBinding(ct,ft,L.__bindingPointIndex),l.set(ct,ft))}function Ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ut=null,rt={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,v=null,b=null,E=null,w=null,A=null,C=new Et(0,0,0),U=0,M=!1,S=null,D=null,V=null,z=null,$=null,Ut.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Z,disable:mt,bindFramebuffer:Dt,drawBuffers:xt,useProgram:Ht,setBlending:Yt,setMaterial:te,setFlipSided:Nt,setCullFace:ge,setLineWidth:P,setPolygonOffset:_e,setScissorTest:Xt,activeTexture:ae,bindTexture:Mt,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ct,texImage3D:Q,updateUBOMapping:yt,uniformBlockBinding:nt,texStorage2D:it,texStorage3D:vt,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:H,compressedTexSubImage3D:St,scissor:st,viewport:_t,reset:Ft}}function Dg(s,t,e,i,n,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):_s("canvas")}function x(T,g,I){let X=1;const j=Mt(T);if((j.width>I||j.height>I)&&(X=I/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(X*j.width),St=Math.floor(X*j.height);u===void 0&&(u=_(H,St));const it=g?_(H,St):u;return it.width=H,it.height=St,it.getContext("2d").drawImage(T,0,0,H,St),Rt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+H+"x"+St+")."),it}else return"data"in T&&Rt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){s.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,g,I,X,j=!1){if(T!==null){if(s[T]!==void 0)return s[T];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=g;if(g===s.RED&&(I===s.FLOAT&&(H=s.R32F),I===s.HALF_FLOAT&&(H=s.R16F),I===s.UNSIGNED_BYTE&&(H=s.R8)),g===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.R8UI),I===s.UNSIGNED_SHORT&&(H=s.R16UI),I===s.UNSIGNED_INT&&(H=s.R32UI),I===s.BYTE&&(H=s.R8I),I===s.SHORT&&(H=s.R16I),I===s.INT&&(H=s.R32I)),g===s.RG&&(I===s.FLOAT&&(H=s.RG32F),I===s.HALF_FLOAT&&(H=s.RG16F),I===s.UNSIGNED_BYTE&&(H=s.RG8)),g===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.RG8UI),I===s.UNSIGNED_SHORT&&(H=s.RG16UI),I===s.UNSIGNED_INT&&(H=s.RG32UI),I===s.BYTE&&(H=s.RG8I),I===s.SHORT&&(H=s.RG16I),I===s.INT&&(H=s.RG32I)),g===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.RGB8UI),I===s.UNSIGNED_SHORT&&(H=s.RGB16UI),I===s.UNSIGNED_INT&&(H=s.RGB32UI),I===s.BYTE&&(H=s.RGB8I),I===s.SHORT&&(H=s.RGB16I),I===s.INT&&(H=s.RGB32I)),g===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),I===s.UNSIGNED_INT&&(H=s.RGBA32UI),I===s.BYTE&&(H=s.RGBA8I),I===s.SHORT&&(H=s.RGBA16I),I===s.INT&&(H=s.RGBA32I)),g===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),g===s.RGBA){const St=j?_a:kt.getTransfer(X);I===s.FLOAT&&(H=s.RGBA32F),I===s.HALF_FLOAT&&(H=s.RGBA16F),I===s.UNSIGNED_BYTE&&(H=St===$t?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function E(T,g){let I;return T?g===null||g===_i||g===gs?I=s.DEPTH24_STENCIL8:g===oi?I=s.DEPTH32F_STENCIL8:g===ms&&(I=s.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===_i||g===gs?I=s.DEPTH_COMPONENT24:g===oi?I=s.DEPTH_COMPONENT32F:g===ms&&(I=s.DEPTH_COMPONENT16),I}function w(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ye&&T.minFilter!==Ie?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),U(g),g.isVideoTexture&&h.delete(g)}function C(T){const g=T.target;g.removeEventListener("dispose",C),S(g)}function U(T){const g=i.get(T);if(g.__webglInit===void 0)return;const I=T.source,X=f.get(I);if(X){const j=X[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(X).length===0&&f.delete(I)}i.remove(T)}function M(T){const g=i.get(T);s.deleteTexture(g.__webglTexture);const I=T.source,X=f.get(I);delete X[g.__cacheKey],r.memory.textures--}function S(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let j=0;j<g.__webglFramebuffer[X].length;j++)s.deleteFramebuffer(g.__webglFramebuffer[X][j]);else s.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)s.deleteFramebuffer(g.__webglFramebuffer[X]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let X=0,j=I.length;X<j;X++){const H=i.get(I[X]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),r.memory.textures--),i.remove(I[X])}i.remove(T)}let D=0;function V(){D=0}function z(){const T=D;return T>=n.maxTextures&&Rt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),D+=1,T}function $(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function W(T,g){const I=i.get(T);if(T.isVideoTexture&&Xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const X=T.image;if(X===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+g)}function G(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,g);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+g)}function O(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,g);return}e.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+g)}function K(T,g){const I=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Z(I,T,g);return}e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+g)}const ut={[Rr]:s.REPEAT,[wi]:s.CLAMP_TO_EDGE,[Pr]:s.MIRRORED_REPEAT},rt={[ye]:s.NEAREST,[Ph]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Ie]:s.LINEAR,[Na]:s.LINEAR_MIPMAP_NEAREST,[nn]:s.LINEAR_MIPMAP_LINEAR},dt={[Ih]:s.NEVER,[Bh]:s.ALWAYS,[Uh]:s.LESS,[No]:s.LEQUAL,[Nh]:s.EQUAL,[Fo]:s.GEQUAL,[Fh]:s.GREATER,[Oh]:s.NOTEQUAL};function Ot(T,g){if(g.type===oi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ie||g.magFilter===Na||g.magFilter===Ls||g.magFilter===nn||g.minFilter===Ie||g.minFilter===Na||g.minFilter===Ls||g.minFilter===nn)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ut[g.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ut[g.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ut[g.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,rt[g.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,rt[g.minFilter]),g.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,dt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ye||g.minFilter!==Ls&&g.minFilter!==nn||g.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ut(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const X=g.source;let j=f.get(X);j===void 0&&(j={},f.set(X,j));const H=$(g);if(H!==T.__cacheKey){j[H]===void 0&&(j[H]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,I=!0),j[H].usedTimes++;const St=j[T.__cacheKey];St!==void 0&&(j[T.__cacheKey].usedTimes--,St.usedTimes===0&&M(g)),T.__cacheKey=H,T.__webglTexture=j[H].texture}return I}function ue(T,g,I){return Math.floor(Math.floor(T/I)/g)}function ce(T,g,I,X){const H=T.updateRanges;if(H.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,I,X,g.data);else{H.sort((Q,st)=>Q.start-st.start);let St=0;for(let Q=1;Q<H.length;Q++){const st=H[St],_t=H[Q],yt=st.start+st.count,nt=ue(_t.start,g.width,4),Ft=ue(st.start,g.width,4);_t.start<=yt+1&&nt===Ft&&ue(_t.start+_t.count-1,g.width,4)===nt?st.count=Math.max(st.count,_t.start+_t.count-st.start):(++St,H[St]=_t)}H.length=St+1;const it=s.getParameter(s.UNPACK_ROW_LENGTH),vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let Q=0,st=H.length;Q<st;Q++){const _t=H[Q],yt=Math.floor(_t.start/4),nt=Math.ceil(_t.count/4),Ft=yt%g.width,L=Math.floor(yt/g.width),ct=nt,tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),e.texSubImage2D(s.TEXTURE_2D,0,Ft,L,ct,tt,I,X,g.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,it),s.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function Y(T,g,I){let X=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=s.TEXTURE_3D);const j=Ut(T,g),H=g.source;e.bindTexture(X,T.__webglTexture,s.TEXTURE0+I);const St=i.get(H);if(H.version!==St.__version||j===!0){e.activeTexture(s.TEXTURE0+I);const it=kt.getPrimaries(kt.workingColorSpace),vt=g.colorSpace===zi?null:kt.getPrimaries(g.colorSpace),Ct=g.colorSpace===zi||it===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Q=x(g.image,!1,n.maxTextureSize);Q=ae(g,Q);const st=a.convert(g.format,g.colorSpace),_t=a.convert(g.type);let yt=b(g.internalFormat,st,_t,g.colorSpace,g.isVideoTexture);Ot(X,g);let nt;const Ft=g.mipmaps,L=g.isVideoTexture!==!0,ct=St.__version===void 0||j===!0,tt=H.dataReady,ft=w(g,Q);if(g.isDepthTexture)yt=E(g.format===sn,g.type),ct&&(L?e.texStorage2D(s.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,yt,Q.width,Q.height,0,st,_t,null));else if(g.isDataTexture)if(Ft.length>0){L&&ct&&e.texStorage2D(s.TEXTURE_2D,ft,yt,Ft[0].width,Ft[0].height);for(let J=0,q=Ft.length;J<q;J++)nt=Ft[J],L?tt&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,nt.width,nt.height,st,_t,nt.data):e.texImage2D(s.TEXTURE_2D,J,yt,nt.width,nt.height,0,st,_t,nt.data);g.generateMipmaps=!1}else L?(ct&&e.texStorage2D(s.TEXTURE_2D,ft,yt,Q.width,Q.height),tt&&ce(g,Q,st,_t)):e.texImage2D(s.TEXTURE_2D,0,yt,Q.width,Q.height,0,st,_t,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,yt,Ft[0].width,Ft[0].height,Q.depth);for(let J=0,q=Ft.length;J<q;J++)if(nt=Ft[J],g.format!==li)if(st!==null)if(L){if(tt)if(g.layerUpdates.size>0){const et=kl(nt.width,nt.height,g.format,g.type);for(const Pt of g.layerUpdates){const re=nt.data.subarray(Pt*et/nt.data.BYTES_PER_ELEMENT,(Pt+1)*et/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Pt,nt.width,nt.height,1,st,re)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,nt.width,nt.height,Q.depth,st,nt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,yt,nt.width,nt.height,Q.depth,0,nt.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,nt.width,nt.height,Q.depth,st,_t,nt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,yt,nt.width,nt.height,Q.depth,0,st,_t,nt.data)}else{L&&ct&&e.texStorage2D(s.TEXTURE_2D,ft,yt,Ft[0].width,Ft[0].height);for(let J=0,q=Ft.length;J<q;J++)nt=Ft[J],g.format!==li?st!==null?L?tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,nt.width,nt.height,st,nt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,yt,nt.width,nt.height,0,nt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,nt.width,nt.height,st,_t,nt.data):e.texImage2D(s.TEXTURE_2D,J,yt,nt.width,nt.height,0,st,_t,nt.data)}else if(g.isDataArrayTexture)if(L){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,yt,Q.width,Q.height,Q.depth),tt)if(g.layerUpdates.size>0){const J=kl(Q.width,Q.height,g.format,g.type);for(const q of g.layerUpdates){const et=Q.data.subarray(q*J/Q.data.BYTES_PER_ELEMENT,(q+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,st,_t,et)}g.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(g.isData3DTexture)L?(ct&&e.texStorage3D(s.TEXTURE_3D,ft,yt,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)):e.texImage3D(s.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(g.isFramebufferTexture){if(ct)if(L)e.texStorage2D(s.TEXTURE_2D,ft,yt,Q.width,Q.height);else{let J=Q.width,q=Q.height;for(let et=0;et<ft;et++)e.texImage2D(s.TEXTURE_2D,et,yt,J,q,0,st,_t,null),J>>=1,q>>=1}}else if(Ft.length>0){if(L&&ct){const J=Mt(Ft[0]);e.texStorage2D(s.TEXTURE_2D,ft,yt,J.width,J.height)}for(let J=0,q=Ft.length;J<q;J++)nt=Ft[J],L?tt&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,st,_t,nt):e.texImage2D(s.TEXTURE_2D,J,yt,st,_t,nt);g.generateMipmaps=!1}else if(L){if(ct){const J=Mt(Q);e.texStorage2D(s.TEXTURE_2D,ft,yt,J.width,J.height)}tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st,_t,Q)}else e.texImage2D(s.TEXTURE_2D,0,yt,st,_t,Q);m(g)&&d(X),St.__version=H.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Z(T,g,I){if(g.image.length!==6)return;const X=Ut(T,g),j=g.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+I);const H=i.get(j);if(j.version!==H.__version||X===!0){e.activeTexture(s.TEXTURE0+I);const St=kt.getPrimaries(kt.workingColorSpace),it=g.colorSpace===zi?null:kt.getPrimaries(g.colorSpace),vt=g.colorSpace===zi||St===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ct=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,st=[];for(let q=0;q<6;q++)!Ct&&!Q?st[q]=x(g.image[q],!0,n.maxCubemapSize):st[q]=Q?g.image[q].image:g.image[q],st[q]=ae(g,st[q]);const _t=st[0],yt=a.convert(g.format,g.colorSpace),nt=a.convert(g.type),Ft=b(g.internalFormat,yt,nt,g.colorSpace),L=g.isVideoTexture!==!0,ct=H.__version===void 0||X===!0,tt=j.dataReady;let ft=w(g,_t);Ot(s.TEXTURE_CUBE_MAP,g);let J;if(Ct){L&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Ft,_t.width,_t.height);for(let q=0;q<6;q++){J=st[q].mipmaps;for(let et=0;et<J.length;et++){const Pt=J[et];g.format!==li?yt!==null?L?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,Pt.width,Pt.height,yt,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,Ft,Pt.width,Pt.height,0,Pt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,Pt.width,Pt.height,yt,nt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,Ft,Pt.width,Pt.height,0,yt,nt,Pt.data)}}}else{if(J=g.mipmaps,L&&ct){J.length>0&&ft++;const q=Mt(st[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Ft,q.width,q.height)}for(let q=0;q<6;q++)if(Q){L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,st[q].width,st[q].height,yt,nt,st[q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ft,st[q].width,st[q].height,0,yt,nt,st[q].data);for(let et=0;et<J.length;et++){const re=J[et].image[q].image;L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,re.width,re.height,yt,nt,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,Ft,re.width,re.height,0,yt,nt,re.data)}}else{L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,yt,nt,st[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ft,yt,nt,st[q]);for(let et=0;et<J.length;et++){const Pt=J[et];L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,yt,nt,Pt.image[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,Ft,yt,nt,Pt.image[q])}}}m(g)&&d(s.TEXTURE_CUBE_MAP),H.__version=j.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function mt(T,g,I,X,j,H){const St=a.convert(I.format,I.colorSpace),it=a.convert(I.type),vt=b(I.internalFormat,St,it,I.colorSpace),Ct=i.get(g),Q=i.get(I);if(Q.__renderTarget=g,!Ct.__hasExternalTextures){const st=Math.max(1,g.width>>H),_t=Math.max(1,g.height>>H);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,H,vt,st,_t,g.depth,0,St,it,null):e.texImage2D(j,H,vt,st,_t,0,St,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),_e(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,j,Q.__webglTexture,0,P(g)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,j,Q.__webglTexture,H),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(T,g,I){if(s.bindRenderbuffer(s.RENDERBUFFER,T),g.depthBuffer){const X=g.depthTexture,j=X&&X.isDepthTexture?X.type:null,H=E(g.stencilBuffer,j),St=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),H,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),H,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,H,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,T)}else{const X=g.textures;for(let j=0;j<X.length;j++){const H=X[j],St=a.convert(H.format,H.colorSpace),it=a.convert(H.type),vt=b(H.internalFormat,St,it,H.colorSpace);_e(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),vt,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),vt,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,vt,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(T,g,I){const X=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,g.depthTexture);const Ct=a.convert(g.depthTexture.format),Q=a.convert(g.depthTexture.type);let st;g.depthTexture.format===Ri?st=s.DEPTH_COMPONENT24:g.depthTexture.format===sn&&(st=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,st,g.width,g.height,0,Ct,Q,null)}}else W(g.depthTexture,0);const H=j.__webglTexture,St=P(g),it=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,vt=g.depthTexture.format===sn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ri)_e(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,it,H,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,vt,it,H,0);else if(g.depthTexture.format===sn)_e(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,it,H,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,vt,it,H,0);else throw new Error("Unknown depthTexture format")}function Ht(T){const g=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=X}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)xt(g.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?xt(g.__webglFramebuffer[0],T,0):xt(g.__webglFramebuffer,T,0)}else if(I){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=s.createRenderbuffer(),Dt(g.__webglDepthbuffer[X],T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,H)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Dt(g.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,H)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(T,g,I){const X=i.get(T);g!==void 0&&mt(X.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&Ht(T)}function Gt(T){const g=T.texture,I=i.get(T),X=i.get(g);T.addEventListener("dispose",C);const j=T.textures,H=T.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=g.version,r.memory.textures++),H){I.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[it]=[];for(let vt=0;vt<g.mipmaps.length;vt++)I.__webglFramebuffer[it][vt]=s.createFramebuffer()}else I.__webglFramebuffer[it]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)I.__webglFramebuffer[it]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(St)for(let it=0,vt=j.length;it<vt;it++){const Ct=i.get(j[it]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&_e(T)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const vt=j[it];I.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[it]);const Ct=a.convert(vt.format,vt.colorSpace),Q=a.convert(vt.type),st=b(vt.internalFormat,Ct,Q,vt.colorSpace,T.isXRRenderTarget===!0),_t=P(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,st,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,I.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(I.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)mt(I.__webglFramebuffer[it][vt],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt);else mt(I.__webglFramebuffer[it],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(g)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,vt=j.length;it<vt;it++){const Ct=j[it],Q=i.get(Ct);let st=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),Ot(st,Ct),mt(I.__webglFramebuffer,T,Ct,s.COLOR_ATTACHMENT0+it,st,0),m(Ct)&&d(st)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,X.__webglTexture),Ot(it,g),g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)mt(I.__webglFramebuffer[vt],T,g,s.COLOR_ATTACHMENT0,it,vt);else mt(I.__webglFramebuffer,T,g,s.COLOR_ATTACHMENT0,it,0);m(g)&&d(it),e.unbindTexture()}T.depthBuffer&&Ht(T)}function Yt(T){const g=T.textures;for(let I=0,X=g.length;I<X;I++){const j=g[I];if(m(j)){const H=v(T),St=i.get(j).__webglTexture;e.bindTexture(H,St),d(H),e.unbindTexture()}}}const te=[],Nt=[];function ge(T){if(T.samples>0){if(_e(T)===!1){const g=T.textures,I=T.width,X=T.height;let j=s.COLOR_BUFFER_BIT;const H=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(T),it=g.length>1;if(it)for(let Ct=0;Ct<g.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const vt=T.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ct=0;Ct<g.length;Ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[Ct]);const Q=i.get(g[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,I,X,0,0,I,X,j,s.NEAREST),l===!0&&(te.length=0,Nt.length=0,te.push(s.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&T.resolveDepthBuffer===!1&&(te.push(H),Nt.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let Ct=0;Ct<g.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,St.__webglColorRenderbuffer[Ct]);const Q=i.get(g[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function P(T){return Math.min(n.maxSamples,T.samples)}function _e(T){const g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Xt(T){const g=r.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function ae(T,g){const I=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==zn&&I!==zi&&(kt.getTransfer(I)===$t?(X!==li||j!==Oe)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",I)),g}function Mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=Te,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lg(s,t){function e(i,n=zi){let a;const r=kt.getTransfer(n);if(i===Oe)return s.UNSIGNED_BYTE;if(i===Ro)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Po)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Sc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===bc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mc)return s.BYTE;if(i===yc)return s.SHORT;if(i===ms)return s.UNSIGNED_SHORT;if(i===Co)return s.INT;if(i===_i)return s.UNSIGNED_INT;if(i===oi)return s.FLOAT;if(i===je)return s.HALF_FLOAT;if(i===Ec)return s.ALPHA;if(i===Tc)return s.RGB;if(i===li)return s.RGBA;if(i===Ri)return s.DEPTH_COMPONENT;if(i===sn)return s.DEPTH_STENCIL;if(i===Do)return s.RED;if(i===Lo)return s.RED_INTEGER;if(i===Bn)return s.RG;if(i===Io)return s.RG_INTEGER;if(i===Uo)return s.RGBA_INTEGER;if(i===ca||i===ha||i===ua||i===da)if(r===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ca)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ca)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dr||i===Lr||i===Ir||i===Ur)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Dr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ur)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nr||i===Fr||i===Or||i===Br||i===zr||i===Vr||i===kr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Nr||i===Fr)return r===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Or)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Br)return a.COMPRESSED_R11_EAC;if(i===zr)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Vr)return a.COMPRESSED_RG11_EAC;if(i===kr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gr||i===Hr||i===Wr||i===Xr||i===$r||i===Yr||i===qr||i===jr||i===Kr||i===Zr||i===Jr||i===Qr||i===to||i===eo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Gr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$r)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qr)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===to)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eo)return r===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===no||i===so)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===io)return r===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ao||i===ro||i===oo||i===lo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ao)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ro)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
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

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new zc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new he({vertexShader:Ig,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends ln{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Ng,d={},v=e.getContextAttributes();let b=null,E=null;const w=[],A=[],C=new ht;let U=null;const M=new qe;M.viewport=new de;const S=new qe;S.viewport=new de;const D=[M,S],V=new Gu;let z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=w[Y];return Z===void 0&&(Z=new ir,w[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=w[Y];return Z===void 0&&(Z=new ir,w[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=w[Y];return Z===void 0&&(Z=new ir,w[Y]=Z),Z.getHandSpace()};function W(Y){const Z=A.indexOf(Y.inputSource);if(Z===-1)return;const mt=w[Z];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||r),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",O);for(let Y=0;Y<w.length;Y++){const Z=A[Y];Z!==null&&(A[Y]=null,w[Y].disconnect(Z))}z=null,$=null,m.reset();for(const Y in d)delete d[Y];t.setRenderTarget(b),p=null,f=null,u=null,n=null,E=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",G),n.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Dt=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?sn:Ri,Dt=v.stencil?gs:_i);const Ht={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(Ht),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ge(f.textureWidth,f.textureHeight,{format:li,type:Oe,depthTexture:new Es(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,e,mt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ge(p.framebufferWidth,p.framebufferHeight,{format:li,type:Oe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),ce.setContext(n),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Y){for(let Z=0;Z<Y.removed.length;Z++){const mt=Y.removed[Z],Dt=A.indexOf(mt);Dt>=0&&(A[Dt]=null,w[Dt].disconnect(mt))}for(let Z=0;Z<Y.added.length;Z++){const mt=Y.added[Z];let Dt=A.indexOf(mt);if(Dt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=A.length){A.push(mt),Dt=Ht;break}else if(A[Ht]===null){A[Ht]=mt,Dt=Ht;break}if(Dt===-1)break}const xt=w[Dt];xt&&xt.connect(mt)}}const K=new R,ut=new R;function rt(Y,Z,mt){K.setFromMatrixPosition(Z.matrixWorld),ut.setFromMatrixPosition(mt.matrixWorld);const Dt=K.distanceTo(ut),xt=Z.projectionMatrix.elements,Ht=mt.projectionMatrix.elements,Te=xt[14]/(xt[10]-1),Gt=xt[14]/(xt[10]+1),Yt=(xt[9]+1)/xt[5],te=(xt[9]-1)/xt[5],Nt=(xt[8]-1)/xt[0],ge=(Ht[8]+1)/Ht[0],P=Te*Nt,_e=Te*ge,Xt=Dt/(-Nt+ge),ae=Xt*-Nt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Mt=Te+Xt,T=Gt+Xt,g=P-ae,I=_e+(Dt-ae),X=Yt*Gt/T*Mt,j=te*Gt/T*Mt;Y.projectionMatrix.makePerspective(g,I,X,j,Mt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let Z=Y.near,mt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),V.near=S.near=M.near=Z,V.far=S.far=M.far=mt,(z!==V.near||$!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,$=V.far),V.layers.mask=Y.layers.mask|6,M.layers.mask=V.layers.mask&3,S.layers.mask=V.layers.mask&5;const Dt=Y.parent,xt=V.cameras;dt(V,Dt);for(let Ht=0;Ht<xt.length;Ht++)dt(xt[Ht],Dt);xt.length===2?rt(V,M,S):V.projectionMatrix.copy(M.projectionMatrix),Ot(Y,V,Dt)};function Ot(Y,Z,mt){mt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Y){return d[Y]};let Ut=null;function ue(Y,Z){if(h=Z.getViewerPose(c||r),_=Z,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Dt=!1;mt.length!==V.cameras.length&&(V.cameras.length=0,Dt=!0);for(let Gt=0;Gt<mt.length;Gt++){const Yt=mt[Gt];let te=null;if(p!==null)te=p.getViewport(Yt);else{const ge=u.getViewSubImage(f,Yt);te=ge.viewport,Gt===0&&(t.setRenderTargetTextures(E,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(E))}let Nt=D[Gt];Nt===void 0&&(Nt=new qe,Nt.layers.enable(Gt),Nt.viewport=new de,D[Gt]=Nt),Nt.matrix.fromArray(Yt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Yt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(te.x,te.y,te.width,te.height),Gt===0&&(V.matrix.copy(Nt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Dt===!0&&V.cameras.push(Nt)}const xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const Gt=u.getDepthInformation(mt[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,n.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Gt=0;Gt<mt.length;Gt++){const Yt=mt[Gt].camera;if(Yt){let te=d[Yt];te||(te=new zc,d[Yt]=te);const Nt=u.getCameraImage(Yt);te.sourceTexture=Nt}}}}for(let mt=0;mt<w.length;mt++){const Dt=A[mt],xt=w[mt];Dt!==null&&xt!==void 0&&xt.update(Dt,Z,c||r)}Ut&&Ut(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const ce=new Gc;ce.setAnimationLoop(ue),this.setAnimationLoop=function(Y){Ut=Y},this.dispose=function(){}}}const Ji=new xi,Og=new Zt;function Bg(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Lc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,v,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),u(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(a(m,d),_(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),x(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ae&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ae&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d),b=v.envMap,E=v.envMapRotation;b&&(m.envMap.value=b,Ji.copy(E),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ae&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zg(s,t,e,i){let n={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const E=b.program;i.uniformBlockBinding(v,E)}function c(v,b){let E=n[v.id];E===void 0&&(_(v),E=h(v),n[v.id]=E,v.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(v,w);const A=t.render.frame;a[v.id]!==A&&(f(v),a[v.id]=A)}function h(v){const b=u();v.__bindingPointIndex=b;const E=s.createBuffer(),w=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function u(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=n[v.id],E=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,C=E.length;A<C;A++){const U=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,S=U.length;M<S;M++){const D=U[M];if(p(D,A,M,w)===!0){const V=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let W=0;W<z.length;W++){const G=z[W],O=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,V+$,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,$),$+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,b,E,w){const A=v.value,C=b+"_"+E;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const U=w[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return w[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function _(v){const b=v.uniforms;let E=0;const w=16;for(let C=0,U=b.length;C<U;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,D=M.length;S<D;S++){const V=M[S],z=Array.isArray(V.value)?V.value:[V.value];for(let $=0,W=z.length;$<W;$++){const G=z[$],O=x(G),K=E%w,ut=K%O.boundary,rt=K+ut;E+=ut,rt!==0&&w-rt<O.storage&&(E+=w-rt),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=O.storage}}}const A=E%w;return A>0&&(E+=w-A),v.__size=E,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const E=r.indexOf(b.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(n[b.id]),delete n[b.id],delete a[b.id]}function d(){for(const v in n)s.deleteBuffer(n[v]);r=[],n={},a={}}return{bind:l,update:c,dispose:d}}const Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function kg(){return hi===null&&(hi=new Bc(Vg,16,16,Bn,je),hi.name="DFG_LUT",hi.minFilter=Ie,hi.magFilter=Ie,hi.wrapS=wi,hi.wrapT=wi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class Gg{constructor(t={}){const{canvas:e=zh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Oe}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const x=p,m=new Set([Uo,Io,Lo]),d=new Set([Oe,_i,ms,gs,Ro,Po]),v=new Uint32Array(4),b=new Int32Array(4);let E=null,w=null;const A=[],C=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let S=!1;this._outputColorSpace=Ye;let D=0,V=0,z=null,$=-1,W=null;const G=new de,O=new de;let K=null;const ut=new Et(0);let rt=0,dt=e.width,Ot=e.height,Ut=1,ue=null,ce=null;const Y=new de(0,0,dt,Ot),Z=new de(0,0,dt,Ot);let mt=!1;const Dt=new Vo;let xt=!1,Ht=!1;const Te=new Zt,Gt=new R,Yt=new de,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function ge(){return z===null?Ut:1}let P=i;function _e(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",qt,!1),P===null){const N="webgl2";if(P=_e(N,y),P===null)throw _e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Vt("WebGLRenderer: "+y.message),y}let Xt,ae,Mt,T,g,I,X,j,H,St,it,vt,Ct,Q,st,_t,yt,nt,Ft,L,ct,tt,ft,J;function q(){Xt=new kp(P),Xt.init(),tt=new Lg(P,Xt),ae=new Lp(P,Xt,t,tt),Mt=new Pg(P,Xt),ae.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),T=new Wp(P),g=new mg,I=new Dg(P,Xt,Mt,g,ae,tt,T),X=new Up(M),j=new Vp(M),H=new Yu(P),ft=new Pp(P,H),St=new Gp(P,H,T,ft),it=new $p(P,St,H,T),Ft=new Xp(P,ae,I),_t=new Ip(g),vt=new pg(M,X,j,Xt,ae,ft,_t),Ct=new Bg(M,g),Q=new _g,st=new bg(Xt),nt=new Rp(M,X,j,Mt,it,_,l),yt=new Cg(M,it,ae),J=new zg(P,T,ae,Mt),L=new Dp(P,Xt,T),ct=new Hp(P,Xt,T),T.programs=vt.programs,M.capabilities=ae,M.extensions=Xt,M.properties=g,M.renderLists=Q,M.shadowMap=yt,M.state=Mt,M.info=T}q(),x!==Oe&&(U=new qp(x,e.width,e.height,n,a));const et=new Fg(M,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(y){y!==void 0&&(Ut=y,this.setSize(dt,Ot,!1))},this.getSize=function(y){return y.set(dt,Ot)},this.setSize=function(y,N,k=!0){if(et.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=y,Ot=N,e.width=Math.floor(y*Ut),e.height=Math.floor(N*Ut),k===!0&&(e.style.width=y+"px",e.style.height=N+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(dt*Ut,Ot*Ut).floor()},this.setDrawingBufferSize=function(y,N,k){dt=y,Ot=N,Ut=k,e.width=Math.floor(y*k),e.height=Math.floor(N*k),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(x===Oe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,N,k,B){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,k,B),Mt.viewport(G.copy(Y).multiplyScalar(Ut).round())},this.getScissor=function(y){return y.copy(Z)},this.setScissor=function(y,N,k,B){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,N,k,B),Mt.scissor(O.copy(Z).multiplyScalar(Ut).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){Mt.setScissorTest(mt=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,k=!0){let B=0;if(y){let F=!1;if(z!==null){const at=z.texture.format;F=m.has(at)}if(F){const at=z.texture.type,pt=d.has(at),lt=nt.getClearColor(),gt=nt.getClearAlpha(),bt=lt.r,At=lt.g,Tt=lt.b;pt?(v[0]=bt,v[1]=At,v[2]=Tt,v[3]=gt,P.clearBufferuiv(P.COLOR,0,v)):(b[0]=bt,b[1]=At,b[2]=Tt,b[3]=gt,P.clearBufferiv(P.COLOR,0,b))}else B|=P.COLOR_BUFFER_BIT}N&&(B|=P.DEPTH_BUFFER_BIT),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),nt.dispose(),Q.dispose(),st.dispose(),g.dispose(),X.dispose(),j.dispose(),it.dispose(),ft.dispose(),J.dispose(),vt.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ko),et.removeEventListener("sessionend",Zo),Xi.stop()};function Pt(y){y.preventDefault(),va("WebGLRenderer: Context Lost."),S=!0}function re(){va("WebGLRenderer: Context Restored."),S=!1;const y=T.autoReset,N=yt.enabled,k=yt.autoUpdate,B=yt.needsUpdate,F=yt.type;q(),T.autoReset=y,yt.enabled=N,yt.autoUpdate=k,yt.needsUpdate=B,yt.type=F}function qt(y){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ci(y){const N=y.target;N.removeEventListener("dispose",ci),vi(N)}function vi(y){Qc(y),g.remove(y)}function Qc(y){const N=g.get(y).programs;N!==void 0&&(N.forEach(function(k){vt.releaseProgram(k)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,k,B,F,at){N===null&&(N=te);const pt=F.isMesh&&F.matrixWorld.determinant()<0,lt=eh(y,N,k,B,F);Mt.setMaterial(B,pt);let gt=k.index,bt=1;if(B.wireframe===!0){if(gt=St.getWireframeAttribute(k),gt===void 0)return;bt=2}const At=k.drawRange,Tt=k.attributes.position;let Bt=At.start*bt,Jt=(At.start+At.count)*bt;at!==null&&(Bt=Math.max(Bt,at.start*bt),Jt=Math.min(Jt,(at.start+at.count)*bt)),gt!==null?(Bt=Math.max(Bt,0),Jt=Math.min(Jt,gt.count)):Tt!=null&&(Bt=Math.max(Bt,0),Jt=Math.min(Jt,Tt.count));const fe=Jt-Bt;if(fe<0||fe===1/0)return;ft.setup(F,B,lt,k,gt);let pe,ee=L;if(gt!==null&&(pe=H.get(gt),ee=ct,ee.setIndex(pe)),F.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*ge()),ee.setMode(P.LINES)):ee.setMode(P.TRIANGLES);else if(F.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),Mt.setLineWidth(wt*ge()),F.isLineSegments?ee.setMode(P.LINES):F.isLineLoop?ee.setMode(P.LINE_LOOP):ee.setMode(P.LINE_STRIP)}else F.isPoints?ee.setMode(P.POINTS):F.isSprite&&ee.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ee.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,jt=F._multiDrawCounts,Wt=F._multiDrawCount,He=gt?H.get(gt).bytesPerElement:1,hn=g.get(B).currentProgram.getUniforms();for(let We=0;We<Wt;We++)hn.setValue(P,"_gl_DrawID",We),ee.render(wt[We]/He,jt[We])}else if(F.isInstancedMesh)ee.renderInstances(Bt,fe,F.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,jt=Math.min(k.instanceCount,wt);ee.renderInstances(Bt,fe,jt)}else ee.render(Bt,fe)};function jo(y,N,k){y.transparent===!0&&y.side===ai&&y.forceSinglePass===!1?(y.side=Ae,y.needsUpdate=!0,Ds(y,N,k),y.side=Gi,y.needsUpdate=!0,Ds(y,N,k),y.side=ai):Ds(y,N,k)}this.compile=function(y,N,k=null){k===null&&(k=y),w=st.get(k),w.init(N),C.push(w),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),y!==k&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const B=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let pt=0;pt<at.length;pt++){const lt=at[pt];jo(lt,k,F),B.add(lt)}else jo(at,k,F),B.add(at)}),w=C.pop(),B},this.compileAsync=function(y,N,k=null){const B=this.compile(y,N,k);return new Promise(F=>{function at(){if(B.forEach(function(pt){g.get(pt).currentProgram.isReady()&&B.delete(pt)}),B.size===0){F(y);return}setTimeout(at,10)}Xt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let La=null;function th(y){La&&La(y)}function Ko(){Xi.stop()}function Zo(){Xi.start()}const Xi=new Gc;Xi.setAnimationLoop(th),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(y){La=y,et.setAnimationLoop(y),y===null?Xi.stop():Xi.start()},et.addEventListener("sessionstart",Ko),et.addEventListener("sessionend",Zo),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const k=et.enabled===!0&&et.isPresenting===!0,B=U!==null&&(z===null||k)&&U.begin(M,z);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,N,z),w=st.get(y,C.length),w.init(N),C.push(w),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Dt.setFromProjectionMatrix(Te,di,N.reversedDepth),Ht=this.localClippingEnabled,xt=_t.init(this.clippingPlanes,Ht),E=Q.get(y,A.length),E.init(),A.push(E),et.enabled===!0&&et.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&Ia(pt,N,-1/0,M.sortObjects)}Ia(y,N,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ue,ce),Nt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Nt&&nt.addToRenderList(E,y),this.info.render.frame++,xt===!0&&_t.beginShadows();const F=w.state.shadowsArray;if(yt.render(F,y,N),xt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&U.hasRenderPass())===!1){const pt=E.opaque,lt=E.transmissive;if(w.setupLights(),N.isArrayCamera){const gt=N.cameras;if(lt.length>0)for(let bt=0,At=gt.length;bt<At;bt++){const Tt=gt[bt];Qo(pt,lt,y,Tt)}Nt&&nt.render(y);for(let bt=0,At=gt.length;bt<At;bt++){const Tt=gt[bt];Jo(E,y,Tt,Tt.viewport)}}else lt.length>0&&Qo(pt,lt,y,N),Nt&&nt.render(y),Jo(E,y,N)}z!==null&&V===0&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),B&&U.end(M),y.isScene===!0&&y.onAfterRender(M,y,N),ft.resetDefaultState(),$=-1,W=null,C.pop(),C.length>0?(w=C[C.length-1],xt===!0&&_t.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function Ia(y,N,k,B){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Dt.intersectsSprite(y)){B&&Yt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);const pt=it.update(y),lt=y.material;lt.visible&&E.push(y,pt,lt,k,Yt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Dt.intersectsObject(y))){const pt=it.update(y),lt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Yt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Yt.copy(pt.boundingSphere.center)),Yt.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(lt)){const gt=pt.groups;for(let bt=0,At=gt.length;bt<At;bt++){const Tt=gt[bt],Bt=lt[Tt.materialIndex];Bt&&Bt.visible&&E.push(y,pt,Bt,k,Yt.z,Tt)}}else lt.visible&&E.push(y,pt,lt,k,Yt.z,null)}}const at=y.children;for(let pt=0,lt=at.length;pt<lt;pt++)Ia(at[pt],N,k,B)}function Jo(y,N,k,B){const{opaque:F,transmissive:at,transparent:pt}=y;w.setupLightsView(k),xt===!0&&_t.setGlobalState(M.clippingPlanes,k),B&&Mt.viewport(G.copy(B)),F.length>0&&Ps(F,N,k),at.length>0&&Ps(at,N,k),pt.length>0&&Ps(pt,N,k),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Qo(y,N,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Bt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Ge(1,1,{generateMipmaps:!0,type:Bt?je:Oe,minFilter:nn,samples:ae.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const at=w.state.transmissionRenderTarget[B.id],pt=B.viewport||G;at.setSize(pt.z*M.transmissionResolutionScale,pt.w*M.transmissionResolutionScale);const lt=M.getRenderTarget(),gt=M.getActiveCubeFace(),bt=M.getActiveMipmapLevel();M.setRenderTarget(at),M.getClearColor(ut),rt=M.getClearAlpha(),rt<1&&M.setClearColor(16777215,.5),M.clear(),Nt&&nt.render(k);const At=M.toneMapping;M.toneMapping=mi;const Tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),xt===!0&&_t.setGlobalState(M.clippingPlanes,B),Ps(y,k,B),I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Jt=0,fe=N.length;Jt<fe;Jt++){const pe=N[Jt],{object:ee,geometry:wt,material:jt,group:Wt}=pe;if(jt.side===ai&&ee.layers.test(B.layers)){const He=jt.side;jt.side=Ae,jt.needsUpdate=!0,tl(ee,k,B,wt,jt,Wt),jt.side=He,jt.needsUpdate=!0,Bt=!0}}Bt===!0&&(I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at))}M.setRenderTarget(lt,gt,bt),M.setClearColor(ut,rt),Tt!==void 0&&(B.viewport=Tt),M.toneMapping=At}function Ps(y,N,k){const B=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=y.length;F<at;F++){const pt=y[F],{object:lt,geometry:gt,group:bt}=pt;let At=pt.material;At.allowOverride===!0&&B!==null&&(At=B),lt.layers.test(k.layers)&&tl(lt,N,k,gt,At,bt)}}function tl(y,N,k,B,F,at){y.onBeforeRender(M,N,k,B,F,at),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(M,N,k,B,y,at),F.transparent===!0&&F.side===ai&&F.forceSinglePass===!1?(F.side=Ae,F.needsUpdate=!0,M.renderBufferDirect(k,N,B,F,y,at),F.side=Gi,F.needsUpdate=!0,M.renderBufferDirect(k,N,B,F,y,at),F.side=ai):M.renderBufferDirect(k,N,B,F,y,at),y.onAfterRender(M,N,k,B,F,at)}function Ds(y,N,k){N.isScene!==!0&&(N=te);const B=g.get(y),F=w.state.lights,at=w.state.shadowsArray,pt=F.state.version,lt=vt.getParameters(y,F.state,at,N,k),gt=vt.getProgramCacheKey(lt);let bt=B.programs;B.environment=y.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(y.isMeshStandardMaterial?j:X).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",ci),bt=new Map,B.programs=bt);let At=bt.get(gt);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===pt)return il(y,lt),At}else lt.uniforms=vt.getUniforms(y),y.onBeforeCompile(lt,M),At=vt.acquireProgram(lt,gt),bt.set(gt,At),B.uniforms=lt.uniforms;const Tt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=_t.uniform),il(y,lt),B.needsLights=nh(y),B.lightsStateVersion=pt,B.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function el(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=fa.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function il(y,N){const k=g.get(y);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function eh(y,N,k,B,F){N.isScene!==!0&&(N=te),I.resetTextureUnits();const at=N.fog,pt=B.isMeshStandardMaterial?N.environment:null,lt=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:zn,gt=(B.isMeshStandardMaterial?j:X).get(B.envMap||pt),bt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,At=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!k.morphAttributes.position,Bt=!!k.morphAttributes.normal,Jt=!!k.morphAttributes.color;let fe=mi;B.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(fe=M.toneMapping);const pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=pe!==void 0?pe.length:0,wt=g.get(B),jt=w.state.lights;if(xt===!0&&(Ht===!0||y!==W)){const Ue=y===W&&B.id===$;_t.setState(B,y,Ue)}let Wt=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==jt.state.version||wt.outputColorSpace!==lt||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==gt||B.fog===!0&&wt.fog!==at||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==_t.numPlanes||wt.numIntersection!==_t.numIntersection)||wt.vertexAlphas!==bt||wt.vertexTangents!==At||wt.morphTargets!==Tt||wt.morphNormals!==Bt||wt.morphColors!==Jt||wt.toneMapping!==fe||wt.morphTargetsCount!==ee)&&(Wt=!0):(Wt=!0,wt.__version=B.version);let He=wt.currentProgram;Wt===!0&&(He=Ds(B,N,F));let hn=!1,We=!1,jn=!1;const oe=He.getUniforms(),Be=wt.uniforms;if(Mt.useProgram(He.program)&&(hn=!0,We=!0,jn=!0),B.id!==$&&($=B.id,We=!0),hn||W!==y){Mt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),oe.setValue(P,"projectionMatrix",y.projectionMatrix),oe.setValue(P,"viewMatrix",y.matrixWorldInverse);const ze=oe.map.cameraPosition;ze!==void 0&&ze.setValue(P,Gt.setFromMatrixPosition(y.matrixWorld)),ae.logarithmicDepthBuffer&&oe.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,We=!0,jn=!0)}if(wt.needsLights&&(jt.state.directionalShadowMap.length>0&&oe.setValue(P,"directionalShadowMap",jt.state.directionalShadowMap,I),jt.state.spotShadowMap.length>0&&oe.setValue(P,"spotShadowMap",jt.state.spotShadowMap,I),jt.state.pointShadowMap.length>0&&oe.setValue(P,"pointShadowMap",jt.state.pointShadowMap,I)),F.isSkinnedMesh){oe.setOptional(P,F,"bindMatrix"),oe.setOptional(P,F,"bindMatrixInverse");const Ue=F.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),oe.setValue(P,"boneTexture",Ue.boneTexture,I))}F.isBatchedMesh&&(oe.setOptional(P,F,"batchingTexture"),oe.setValue(P,"batchingTexture",F._matricesTexture,I),oe.setOptional(P,F,"batchingIdTexture"),oe.setValue(P,"batchingIdTexture",F._indirectTexture,I),oe.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&oe.setValue(P,"batchingColorTexture",F._colorsTexture,I));const Ze=k.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&Ft.update(F,k,He),(We||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,oe.setValue(P,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Be.envMap.value=gt,Be.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Be.envMapIntensity.value=N.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=kg()),We&&(oe.setValue(P,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&ih(Be,jn),at&&B.fog===!0&&Ct.refreshFogUniforms(Be,at),Ct.refreshMaterialUniforms(Be,B,Ut,Ot,w.state.transmissionRenderTarget[y.id]),fa.upload(P,el(wt),Be,I)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fa.upload(P,el(wt),Be,I),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(P,"center",F.center),oe.setValue(P,"modelViewMatrix",F.modelViewMatrix),oe.setValue(P,"normalMatrix",F.normalMatrix),oe.setValue(P,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ue=B.uniformsGroups;for(let ze=0,Ua=Ue.length;ze<Ua;ze++){const $i=Ue[ze];J.update($i,He),J.bind($i,He)}}return He}function ih(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function nh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,N,k){const B=g.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),g.get(y.texture).__webglTexture=N,g.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const k=g.get(y);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const sh=P.createFramebuffer();this.setRenderTarget=function(y,N=0,k=0){z=y,D=N,V=k;let B=null,F=!1,at=!1;if(y){const lt=g.get(y);if(lt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(P.FRAMEBUFFER,lt.__webglFramebuffer),G.copy(y.viewport),O.copy(y.scissor),K=y.scissorTest,Mt.viewport(G),Mt.scissor(O),Mt.setScissorTest(K),$=-1;return}else if(lt.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(lt.__hasExternalTextures)I.rebindTextures(y,g.get(y.texture).__webglTexture,g.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(lt.__boundDepthTexture!==At){if(At!==null&&g.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}const gt=y.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(at=!0);const bt=g.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?B=bt[N][k]:B=bt[N],F=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?B=g.get(y).__webglMultisampledFramebuffer:Array.isArray(bt)?B=bt[k]:B=bt,G.copy(y.viewport),O.copy(y.scissor),K=y.scissorTest}else G.copy(Y).multiplyScalar(Ut).floor(),O.copy(Z).multiplyScalar(Ut).floor(),K=mt;if(k!==0&&(B=sh),Mt.bindFramebuffer(P.FRAMEBUFFER,B)&&Mt.drawBuffers(y,B),Mt.viewport(G),Mt.scissor(O),Mt.setScissorTest(K),F){const lt=g.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,lt.__webglTexture,k)}else if(at){const lt=N;for(let gt=0;gt<y.textures.length;gt++){const bt=g.get(y.textures[gt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+gt,bt.__webglTexture,k,lt)}}else if(y!==null&&k!==0){const lt=g.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,lt.__webglTexture,k)}$=-1},this.readRenderTargetPixels=function(y,N,k,B,F,at,pt,lt=0){if(!(y&&y.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt){Mt.bindFramebuffer(P.FRAMEBUFFER,gt);try{const bt=y.textures[lt],At=bt.format,Tt=bt.type;if(!ae.textureFormatReadable(At)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Tt)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-B&&k>=0&&k<=y.height-F&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+lt),P.readPixels(N,k,B,F,tt.convert(At),tt.convert(Tt),at))}finally{const bt=z!==null?g.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,N,k,B,F,at,pt,lt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt)if(N>=0&&N<=y.width-B&&k>=0&&k<=y.height-F){Mt.bindFramebuffer(P.FRAMEBUFFER,gt);const bt=y.textures[lt],At=bt.format,Tt=bt.type;if(!ae.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Bt),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+lt),P.readPixels(N,k,B,F,tt.convert(At),tt.convert(Tt),0);const Jt=z!==null?g.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Jt);const fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Vh(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Bt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Bt),P.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,k=0){const B=Math.pow(2,-k),F=Math.floor(y.image.width*B),at=Math.floor(y.image.height*B),pt=N!==null?N.x:0,lt=N!==null?N.y:0;I.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,pt,lt,F,at),Mt.unbindTexture()};const ah=P.createFramebuffer(),rh=P.createFramebuffer();this.copyTextureToTexture=function(y,N,k=null,B=null,F=0,at=null){at===null&&(F!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=F,F=0):at=0);let pt,lt,gt,bt,At,Tt,Bt,Jt,fe;const pe=y.isCompressedTexture?y.mipmaps[at]:y.image;if(k!==null)pt=k.max.x-k.min.x,lt=k.max.y-k.min.y,gt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,At=k.min.y,Tt=k.isBox3?k.min.z:0;else{const Ze=Math.pow(2,-F);pt=Math.floor(pe.width*Ze),lt=Math.floor(pe.height*Ze),y.isDataArrayTexture?gt=pe.depth:y.isData3DTexture?gt=Math.floor(pe.depth*Ze):gt=1,bt=0,At=0,Tt=0}B!==null?(Bt=B.x,Jt=B.y,fe=B.z):(Bt=0,Jt=0,fe=0);const ee=tt.convert(N.format),wt=tt.convert(N.type);let jt;N.isData3DTexture?(I.setTexture3D(N,0),jt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),jt=P.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),jt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Wt=P.getParameter(P.UNPACK_ROW_LENGTH),He=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hn=P.getParameter(P.UNPACK_SKIP_PIXELS),We=P.getParameter(P.UNPACK_SKIP_ROWS),jn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt);const oe=y.isDataArrayTexture||y.isData3DTexture,Be=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Ze=g.get(y),Ue=g.get(N),ze=g.get(Ze.__renderTarget),Ua=g.get(Ue.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,ze.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ua.__webglFramebuffer);for(let $i=0;$i<gt;$i++)oe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(y).__webglTexture,F,Tt+$i),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(N).__webglTexture,at,fe+$i)),P.blitFramebuffer(bt,At,pt,lt,Bt,Jt,pt,lt,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||g.has(y)){const Ze=g.get(y),Ue=g.get(N);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,ah),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,rh);for(let ze=0;ze<gt;ze++)oe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ze.__webglTexture,F,Tt+ze):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ze.__webglTexture,F),Be?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ue.__webglTexture,at,fe+ze):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ue.__webglTexture,at),F!==0?P.blitFramebuffer(bt,At,pt,lt,Bt,Jt,pt,lt,P.COLOR_BUFFER_BIT,P.NEAREST):Be?P.copyTexSubImage3D(jt,at,Bt,Jt,fe+ze,bt,At,pt,lt):P.copyTexSubImage2D(jt,at,Bt,Jt,bt,At,pt,lt);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Be?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(jt,at,Bt,Jt,fe,pt,lt,gt,ee,wt,pe.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(jt,at,Bt,Jt,fe,pt,lt,gt,ee,pe.data):P.texSubImage3D(jt,at,Bt,Jt,fe,pt,lt,gt,ee,wt,pe):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,at,Bt,Jt,pt,lt,ee,wt,pe.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,at,Bt,Jt,pe.width,pe.height,ee,pe.data):P.texSubImage2D(P.TEXTURE_2D,at,Bt,Jt,pt,lt,ee,wt,pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,He),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,jn),at===0&&N.generateMipmaps&&P.generateMipmap(jt),Mt.unbindTexture()},this.initRenderTarget=function(y){g.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){D=0,V=0,z=null,Mt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}const pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class qn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hg=new Xo(-1,1,1,-1,0,1);class Wg extends le{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const Xg=new Wg;class $o{constructor(t){this._mesh=new ie(Xg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Hg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $g extends qn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof he?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new he({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new $o(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class uc extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class Yg extends qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class qg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ht);this._width=i.width,this._height=i.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $g(pa),this.copyPass.material.blending=pi,this.clock=new kc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,a=this.passes.length;n<a;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uc!==void 0&&(r instanceof uc?i=!0:r instanceof Yg&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jg extends qn{constructor(t,e,i=null,n=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Et}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const Kg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Wn extends qn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(a,r,{type:je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ge(a,r,{type:je});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Ge(a,r,{type:je});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),r=Math.round(r/2)}const o=Kg;this.highPassUniforms=Ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new he({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ht(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ms.clone(pa.uniforms),this.blendMaterial=new he({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:Se,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new $n,this._fsQuad=new $o(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,n),this.renderTargetsVertical[a].setSize(i,n),this.separableBlurMaterials[a].uniforms.invSize.value=new ht(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new he({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new he({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Wn.BlurDirectionX=new ht(1,0);Wn.BlurDirectionY=new ht(0,1);const ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zg extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ms.clone(ra.uniforms),this.material=new fs({name:ra.name,uniforms:this.uniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this._fsQuad=new $o(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},kt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===So?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ao?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===To&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ts extends ie{constructor(){super(Ts.Geometry,new $n({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new R,e=new R,i=new Ul(16,16),n=new Ul(16,16);let a=Oe;const r=Ts.Geometry,o=new fs({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new fs({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new ie(r,o),h=[],u=en.Shader,f=new fs({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:n},color:{value:new Et(16777215)},scale:{value:new ht},screenPosition:{value:new R}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Se,transparent:!0,depthWrite:!1}),p=new ie(r,f);this.addElement=function(v){h.push(v)};const _=new ht,x=new ht,m=new Wu,d=new de;this.onBeforeRender=function(v,b,E){v.getCurrentViewport(d);const w=v.getRenderTarget(),A=w!==null?w.texture.type:Oe;a!==A&&(i.dispose(),n.dispose(),i.type=n.type=A,a=A);const C=d.w/d.z,U=d.z/2,M=d.w/2;let S=16/d.w;if(_.set(S*C,S),m.min.set(d.x,d.y),m.max.set(d.x+(d.z-16),d.y+(d.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(E.matrixWorldInverse),!(e.z>0)&&(t.copy(e).applyMatrix4(E.projectionMatrix),x.x=d.x+t.x*U+U-8,x.y=d.y+t.y*M+M-8,m.containsPoint(x))){v.copyFramebufferToTexture(i,x);let D=o.uniforms;D.scale.value=_,D.screenPosition.value=t,v.renderBufferDirect(E,null,r,o,c,null),v.copyFramebufferToTexture(n,x),D=l.uniforms,D.scale.value=_,D.screenPosition.value=t,v.renderBufferDirect(E,null,r,l,c,null);const V=-t.x*2,z=-t.y*2;for(let $=0,W=h.length;$<W;$++){const G=h[$],O=f.uniforms;O.color.value.copy(G.color),O.map.value=G.texture,O.screenPosition.value.x=t.x+V*G.distance,O.screenPosition.value.y=t.y+z*G.distance,S=G.size/d.w;const K=d.w/d.z;O.scale.value.set(S*K,S),f.uniformsNeedUpdate=!0,v.renderBufferDirect(E,null,r,f,p,null)}}},this.dispose=function(){o.dispose(),l.dispose(),f.dispose(),i.dispose(),n.dispose();for(let v=0,b=h.length;v<b;v++)h[v].texture.dispose()}}}class en{constructor(t,e=1,i=0,n=new Et(16777215)){this.texture=t,this.size=e,this.distance=i,this.color=n}}en.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};Ts.Geometry=function(){const s=new le,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new Fc(t,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new kn(e,3,0,!1)),s.setAttribute("uv",new kn(e,2,3,!1)),s}();const ne=10,ve=.8,Pe="https://www.solarsystemscope.com/textures/download",Jg={name:"Sun",radius:5*ve,color:16776960,emissiveColor:16755200,textureUrl:`${Pe}/2k_sun.jpg`,facts:{type:"G-type Main-Sequence Star",diameter:"1,392,684 km",mass:"1.989 × 10³⁰ kg",temperature:"5,778 K (surface)",age:"4.6 billion years",composition:"73% Hydrogen, 25% Helium",gravity:"274 m/s²",escapeVelocity:"617.7 km/s"}},Qg=[{name:"Mercury",radius:.38*ve,distance:.39*ne,orbitalPeriod:.24,rotationPeriod:58.6,axialTilt:.03,color:5921370,albedo:.068,textureUrl:`${Pe}/2k_mercury.jpg`,atmosphere:null,moons:[],earthComparison:{sizeRatio:.383,gravityRatio:.38,massRatio:.055},facts:{type:"Terrestrial Planet",diameter:"4,879 km",dayLength:"176 Earth days",yearLength:"88 Earth days",moons:0,temperature:"-180°C to 430°C",atmosphere:"Minimal - trace amounts of oxygen, sodium, hydrogen",gravity:"3.7 m/s²",escapeVelocity:"4.3 km/s"}},{name:"Venus",radius:.95*ve,distance:.72*ne,orbitalPeriod:.62,rotationPeriod:-243,axialTilt:177.4,color:16775388,albedo:.77,textureUrl:`${Pe}/2k_venus_surface.jpg`,atmosphereUrl:`${Pe}/2k_venus_atmosphere.jpg`,atmosphere:{color:16764006,opacity:.6,scale:1.08},moons:[],earthComparison:{sizeRatio:.949,gravityRatio:.91,massRatio:.815},facts:{type:"Terrestrial Planet",diameter:"12,104 km",dayLength:"243 Earth days",yearLength:"225 Earth days",moons:0,temperature:"465°C average",atmosphere:"96% Carbon Dioxide, 3.5% Nitrogen",gravity:"8.87 m/s²",escapeVelocity:"10.36 km/s"}},{name:"Earth",radius:1*ve,distance:1*ne,orbitalPeriod:1,rotationPeriod:1,axialTilt:23.4,color:4286945,albedo:.3,textureUrl:`${Pe}/2k_earth_daymap.jpg`,nightTextureUrl:`${Pe}/2k_earth_nightmap.jpg`,normalMapUrl:`${Pe}/2k_earth_normal_map.jpg`,specularMapUrl:`${Pe}/2k_earth_specular_map.jpg`,cloudsUrl:`${Pe}/2k_earth_clouds.jpg`,atmosphere:{color:6724095,opacity:.4,scale:1.025},moons:["Moon"],earthComparison:{sizeRatio:1,gravityRatio:1,massRatio:1},facts:{type:"Terrestrial Planet",diameter:"12,742 km",dayLength:"24 hours",yearLength:"365.25 days",moons:1,temperature:"-88°C to 58°C",atmosphere:"78% Nitrogen, 21% Oxygen, 1% Other",gravity:"9.81 m/s²",escapeVelocity:"11.19 km/s"}},{name:"Mars",radius:.53*ve,distance:1.52*ne,orbitalPeriod:1.88,rotationPeriod:1.03,axialTilt:25.2,color:13458524,albedo:.25,textureUrl:`${Pe}/2k_mars.jpg`,normalMapUrl:"https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars_1k_normal.jpg",atmosphere:{color:16737860,opacity:.15,scale:1.02},moons:["Phobos","Deimos"],earthComparison:{sizeRatio:.532,gravityRatio:.38,massRatio:.107},facts:{type:"Terrestrial Planet",diameter:"6,779 km",dayLength:"24.6 hours",yearLength:"687 Earth days",moons:2,temperature:"-87°C to -5°C",atmosphere:"95% Carbon Dioxide, 2.7% Nitrogen",gravity:"3.71 m/s²",escapeVelocity:"5.03 km/s"}},{name:"Jupiter",radius:2.5*ve,distance:5.2*ne,orbitalPeriod:11.86,rotationPeriod:.41,axialTilt:3.1,color:13935988,albedo:.503,textureUrl:`${Pe}/2k_jupiter.jpg`,atmosphere:{color:16768426,opacity:.2,scale:1.02},moons:["Io","Europa","Ganymede","Callisto"],hasRings:!0,ringType:"jupiter",ringBands:[{name:"Halo",inner:1.29,outer:1.71,color:8952234,opacity:.04},{name:"Main Ring",inner:1.71,outer:1.8,color:11171686,opacity:.08}],earthComparison:{sizeRatio:11.21,gravityRatio:2.53,massRatio:317.8},facts:{type:"Gas Giant",diameter:"139,820 km",dayLength:"9.9 hours",yearLength:"11.9 Earth years",moons:95,temperature:"-110°C (cloud tops)",atmosphere:"90% Hydrogen, 10% Helium",rings:"Faint dusty rings (discovered 1979)",gravity:"24.79 m/s²",escapeVelocity:"59.5 km/s"}},{name:"Saturn",radius:2.2*ve,distance:9.5*ne,orbitalPeriod:29.46,rotationPeriod:.45,axialTilt:26.7,color:16045453,albedo:.342,textureUrl:`${Pe}/2k_saturn.jpg`,hasRings:!0,ringType:"saturn",ringBands:[{name:"D Ring",inner:1.11,outer:1.24,color:13421755,opacity:.15},{name:"C Ring",inner:1.24,outer:1.53,color:12303274,opacity:.35},{name:"B Ring",inner:1.53,outer:1.95,color:15654348,opacity:.85},{name:"Cassini Division",inner:1.95,outer:2.03,color:2236962,opacity:.05},{name:"A Ring",inner:2.03,outer:2.27,color:14535867,opacity:.7},{name:"F Ring",inner:2.32,outer:2.35,color:13417386,opacity:.25}],atmosphere:{color:16772812,opacity:.15,scale:1.02},moons:["Titan"],earthComparison:{sizeRatio:9.45,gravityRatio:1.07,massRatio:95.16},facts:{type:"Gas Giant",diameter:"116,460 km",dayLength:"10.7 hours",yearLength:"29.5 Earth years",moons:146,temperature:"-140°C (cloud tops)",atmosphere:"96% Hydrogen, 3% Helium",rings:"Made of ice and rock particles",gravity:"10.44 m/s²",escapeVelocity:"35.5 km/s"}},{name:"Uranus",radius:1.6*ve,distance:19.2*ne,orbitalPeriod:84.01,rotationPeriod:-.72,axialTilt:97.8,color:11525109,albedo:.349,textureUrl:`${Pe}/2k_uranus.jpg`,hasRings:!0,ringType:"uranus",ringBands:[{name:"Inner Rings (6,5,4,α,β)",inner:1.64,outer:1.75,color:3355443,opacity:.2},{name:"Inner Rings (η,γ,δ)",inner:1.75,outer:1.89,color:3815994,opacity:.25},{name:"Epsilon Ring",inner:1.98,outer:2.02,color:4210752,opacity:.35},{name:"Mu Ring",inner:3.75,outer:3.9,color:5596808,opacity:.08}],atmosphere:{color:10083839,opacity:.25,scale:1.03},moons:[],earthComparison:{sizeRatio:4.01,gravityRatio:.89,massRatio:14.54},facts:{type:"Ice Giant",diameter:"50,724 km",dayLength:"17.2 hours",yearLength:"84 Earth years",moons:28,temperature:"-195°C",atmosphere:"83% Hydrogen, 15% Helium, 2% Methane",rings:"Faint ring system (13 known rings)",gravity:"8.69 m/s²",escapeVelocity:"21.3 km/s"}},{name:"Neptune",radius:1.5*ve,distance:30.1*ne,orbitalPeriod:164.8,rotationPeriod:.67,axialTilt:28.3,color:8308963,albedo:.29,textureUrl:`${Pe}/2k_neptune.jpg`,hasRings:!0,ringType:"neptune",ringBands:[{name:"Galle Ring",inner:1.66,outer:1.74,color:5588019,opacity:.06},{name:"Le Verrier Ring",inner:2.13,outer:2.17,color:6706500,opacity:.1},{name:"Adams Ring",inner:2.52,outer:2.56,color:6706500,opacity:.12}],atmosphere:{color:4482815,opacity:.3,scale:1.03},moons:[],earthComparison:{sizeRatio:3.88,gravityRatio:1.14,massRatio:17.15},facts:{type:"Ice Giant",diameter:"49,244 km",dayLength:"16.1 hours",yearLength:"165 Earth years",moons:16,temperature:"-200°C",atmosphere:"80% Hydrogen, 19% Helium, 1% Methane",gravity:"11.15 m/s²",escapeVelocity:"23.5 km/s"}}],t0={name:"Moon",parent:"Earth",radius:.27*ve,distance:2.5,orbitalPeriod:.0748,rotationPeriod:27.3,axialTilt:6.7,color:11184810,textureUrl:`${Pe}/2k_moon.jpg`,facts:{type:"Natural Satellite",diameter:"3,474 km",orbitalPeriod:"27.3 Earth days",distanceFromEarth:"384,400 km",temperature:"-173°C to 127°C",atmosphere:"None (exosphere only)",gravity:"1.62 m/s²"}},dc={Phobos:{name:"Phobos",parent:"Mars",radius:.05*ve,distance:1,orbitalPeriod:876e-6,rotationPeriod:.319,color:9139029,facts:{type:"Natural Satellite",diameter:"22.2 km",orbitalPeriod:"7.66 hours",discoveredBy:"Asaph Hall, 1877"}},Deimos:{name:"Deimos",parent:"Mars",radius:.03*ve,distance:1.8,orbitalPeriod:.00345,rotationPeriod:1.263,color:9143160,facts:{type:"Natural Satellite",diameter:"12.4 km",orbitalPeriod:"30.3 hours",discoveredBy:"Asaph Hall, 1877"}},Io:{name:"Io",parent:"Jupiter",radius:.28*ve,distance:3.5,orbitalPeriod:.00485,rotationPeriod:1.77,color:16777062,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",facts:{type:"Natural Satellite",diameter:"3,643 km",orbitalPeriod:"1.77 days",feature:"Most volcanically active body in solar system",discoveredBy:"Galileo Galilei, 1610"}},Europa:{name:"Europa",parent:"Jupiter",radius:.24*ve,distance:5,orbitalPeriod:.00972,rotationPeriod:3.55,color:13421823,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg",facts:{type:"Natural Satellite",diameter:"3,122 km",orbitalPeriod:"3.55 days",feature:"Subsurface ocean beneath ice shell",discoveredBy:"Galileo Galilei, 1610"}},Ganymede:{name:"Ganymede",parent:"Jupiter",radius:.41*ve,distance:7,orbitalPeriod:.0196,rotationPeriod:7.15,color:11184810,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg",facts:{type:"Natural Satellite",diameter:"5,268 km",orbitalPeriod:"7.15 days",feature:"Largest moon in the solar system",discoveredBy:"Galileo Galilei, 1610"}},Callisto:{name:"Callisto",parent:"Jupiter",radius:.37*ve,distance:10,orbitalPeriod:.0457,rotationPeriod:16.69,color:6710886,textureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg",facts:{type:"Natural Satellite",diameter:"4,821 km",orbitalPeriod:"16.69 days",feature:"Most heavily cratered object in solar system",discoveredBy:"Galileo Galilei, 1610"}},Titan:{name:"Titan",parent:"Saturn",radius:.4*ve,distance:6,orbitalPeriod:.0437,rotationPeriod:15.95,color:16764040,atmosphere:{color:16755268,opacity:.5,scale:1.1},facts:{type:"Natural Satellite",diameter:"5,150 km",orbitalPeriod:"15.95 days",feature:"Only moon with dense atmosphere",atmosphere:"95% Nitrogen, 5% Methane",discoveredBy:"Christiaan Huygens, 1655"}}},e0=[{name:"Ceres",radius:.15*ve,distance:2.77*ne,orbitalPeriod:4.6,rotationPeriod:.378,axialTilt:4,color:8947848,textureUrl:`${Pe}/2k_ceres_fictional.jpg`,isDwarfPlanet:!0,earthComparison:{sizeRatio:.074,gravityRatio:.028,massRatio:16e-5},facts:{type:"Dwarf Planet",diameter:"940 km",dayLength:"9.07 hours",yearLength:"4.6 Earth years",location:"Asteroid Belt",feature:"Largest object in asteroid belt",discoveredBy:"Giuseppe Piazzi, 1801",gravity:"0.27 m/s²"}},{name:"Pluto",radius:.18*ve,distance:39.5*ne,orbitalPeriod:248,rotationPeriod:-6.39,axialTilt:122.5,color:14535850,textureUrl:`${Pe}/2k_pluto.jpg`,isDwarfPlanet:!0,moons:["Charon"],earthComparison:{sizeRatio:.186,gravityRatio:.063,massRatio:.0022},facts:{type:"Dwarf Planet",diameter:"2,377 km",dayLength:"6.39 Earth days",yearLength:"248 Earth years",moons:5,temperature:"-230°C",location:"Kuiper Belt",discoveredBy:"Clyde Tombaugh, 1930",gravity:"0.62 m/s²"}}],i0={name:"Charon",parent:"Pluto",radius:.09*ve,distance:1.5,orbitalPeriod:.0175,rotationPeriod:6.39,color:10066329,facts:{type:"Natural Satellite",diameter:"1,212 km",orbitalPeriod:"6.39 days",feature:"Tidally locked with Pluto (both face each other)",discoveredBy:"James Christy, 1978"}},n0={innerRadius:2.2*ne,outerRadius:3.2*ne,count:3e3,minSize:.02,maxSize:.08,color:8947848,verticalSpread:.5},s0={innerRadius:30*ne,outerRadius:50*ne,count:1500,minSize:.01,maxSize:.04,color:4478378,verticalSpread:2,opacity:.3},a0={simulationStartDate:new Date("2024-01-01")},Yc={name:"Halley's Comet",designation:"1P/Halley",semiMajorAxis:17.93,eccentricity:.9679,inclination:162.2,longitudeOfAscendingNode:59.07,argumentOfPerihelion:112.21,meanAnomalyAtEpoch:274.81,epoch:24399075e-1,meanMotion:.012982,orbitalPeriod:75.92,perihelion:.586,aphelion:35.28,lastPerihelion:new Date("1986-02-09"),nextPerihelion:new Date("2061-07-28"),facts:{type:"Periodic Comet (Halley-type)",designation:"1P/Halley",orbitalPeriod:"75.92 Earth years",perihelion:"0.586 AU (inside Venus orbit)",aphelion:"35.28 AU (past Neptune)",lastPerihelion:"February 9, 1986",nextPerihelion:"July 28, 2061",inclination:"162.2° (retrograde orbit)",composition:'Ice, dust, and rock ("dirty snowball")',nucleus:"~11 km × 8 km (potato-shaped)",discoveredBy:"Known since ancient times, orbit computed by Edmond Halley (1705)",feature:"Tail always points away from Sun due to solar wind"}};class r0{constructor(t){this.data=Jg,this.textureLoader=t,this.group=new ti,this.group.name="Sun",this.group.userData={type:"celestialBody",name:"Sun",facts:this.data.facts,clickable:!0},this.sunMesh=null,this.coronaMesh=null,this.solarFlares=[],this.lensflare=null,this.pointLight=null,this.ambientLight=null,this.init()}init(){this.createSunSphere(),this.createCorona(),this.createSolarFlares(),this.createLensFlare(),this.createLights()}createSunSphere(){const t=new si(this.data.radius,64,64),e=new he({uniforms:{time:{value:0},baseColor:{value:new Et(16768324)},glowColor:{value:new Et(16737792)}},vertexShader:`
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
      `});this.sunMesh=new ie(t,e),this.sunMesh.userData=this.group.userData,this.group.add(this.sunMesh)}createCorona(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createRadialGradient(256,256,0,256,256,256);i.addColorStop(0,"rgba(255, 220, 150, 1)"),i.addColorStop(.15,"rgba(255, 180, 80, 0.9)"),i.addColorStop(.3,"rgba(255, 120, 40, 0.6)"),i.addColorStop(.5,"rgba(255, 80, 20, 0.3)"),i.addColorStop(.7,"rgba(255, 40, 0, 0.1)"),i.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=i,e.fillRect(0,0,512,512);const n=new Ke(t),a=new Gn({map:n,transparent:!0,blending:Se,depthWrite:!1});this.coronaMesh=new ys(a),this.coronaMesh.scale.set(this.data.radius*3,this.data.radius*3,1),this.group.add(this.coronaMesh)}createSolarFlares(){for(let e=0;e<5;e++){const i=this.createSingleFlare(e/5);this.solarFlares.push(i),this.group.add(i.mesh)}}createSingleFlare(t){const e=document.createElement("canvas");e.width=256,e.height=512;const i=e.getContext("2d"),n=i.createLinearGradient(128,512,128,0);n.addColorStop(0,"rgba(255, 100, 50, 0.8)"),n.addColorStop(.3,"rgba(255, 150, 50, 0.6)"),n.addColorStop(.6,"rgba(255, 200, 100, 0.3)"),n.addColorStop(1,"rgba(255, 255, 200, 0)"),i.fillStyle=n,i.beginPath(),i.moveTo(64,512),i.quadraticCurveTo(0,256,64,0),i.quadraticCurveTo(128,128,192,0),i.quadraticCurveTo(256,256,192,512),i.closePath(),i.fill();const a=new Ke(e),r=new Gn({map:a,transparent:!0,blending:Se,depthWrite:!1,opacity:.6}),o=new ys(r),l=t*Math.PI*2+Math.random()*.5,c={mesh:o,baseAngle:l,speed:.1+Math.random()*.2,scaleBase:.8+Math.random()*.4,phaseOffset:Math.random()*Math.PI*2,height:this.data.radius*(1.5+Math.random()*1.5)};return this.updateFlarePosition(c,0),c}updateFlarePosition(t,e){const i=t.baseAngle+Math.sin(e*.2+t.phaseOffset)*.2,n=t.height*(.8+Math.sin(e*t.speed+t.phaseOffset)*.3),a=t.scaleBase*(.7+Math.sin(e*t.speed*2+t.phaseOffset)*.4),r=this.data.radius*.95;t.mesh.position.x=Math.cos(i)*r,t.mesh.position.y=Math.sin(i)*r,t.mesh.position.z=0,t.mesh.scale.set(this.data.radius*.5*a,n*a,1),t.mesh.material.rotation=i-Math.PI/2;const o=.3+Math.sin(e*t.speed+t.phaseOffset)*.3;t.mesh.material.opacity=Math.max(0,o)}createLensFlare(){const t=this.createFlareTexture(256,"radial"),e=this.createFlareTexture(128,"ring"),i=this.createFlareTexture(64,"hex");this.lensflare=new Ts,this.lensflare.addElement(new en(t,200,0,new Et(16777215))),this.lensflare.addElement(new en(e,30,.6,new Et(16764040))),this.lensflare.addElement(new en(e,35,.7,new Et(16755302))),this.lensflare.addElement(new en(i,50,.9,new Et(16768426))),this.lensflare.addElement(new en(i,30,1,new Et(16777164))),this.group.add(this.lensflare)}createFlareTexture(t,e){const i=document.createElement("canvas");i.width=t,i.height=t;const n=i.getContext("2d"),a=t/2;if(e==="radial"){const r=n.createRadialGradient(a,a,0,a,a,a);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.2,"rgba(255, 220, 150, 0.8)"),r.addColorStop(.4,"rgba(255, 180, 100, 0.4)"),r.addColorStop(.8,"rgba(255, 100, 50, 0.1)"),r.addColorStop(1,"rgba(255, 50, 0, 0)"),n.fillStyle=r,n.fillRect(0,0,t,t)}else if(e==="ring")n.strokeStyle="rgba(255, 200, 150, 0.5)",n.lineWidth=t*.1,n.beginPath(),n.arc(a,a,t*.35,0,Math.PI*2),n.stroke();else if(e==="hex"){n.fillStyle="rgba(255, 220, 180, 0.3)",n.beginPath();for(let r=0;r<6;r++){const o=r/6*Math.PI*2,l=a+Math.cos(o)*a*.8,c=a+Math.sin(o)*a*.8;r===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath(),n.fill()}return new Ke(i)}createLights(){this.pointLight=new Vu(16777215,2.5,0,.1),this.pointLight.position.set(0,0,0),this.pointLight.castShadow=!1,this.group.add(this.pointLight),this.ambientLight=new ku(4210752,.15),this.group.add(this.ambientLight)}getMesh(){return this.group}update(t,e){this.sunMesh&&this.sunMesh.material.uniforms&&(this.sunMesh.material.uniforms.time.value=e),this.sunMesh.rotation.y+=t*.05;const i=1+Math.sin(e*1.5)*.05;this.coronaMesh.scale.set(this.data.radius*3*i,this.data.radius*3*i,1),this.solarFlares.forEach(n=>{this.updateFlarePosition(n,e)}),this.solarFlares.forEach((n,a)=>{n.baseAngle+=t*.02*(a%2===0?1:-1)})}setLensFlareVisible(t){this.lensflare&&(this.lensflare.visible=t)}dispose(){this.sunMesh&&(this.sunMesh.geometry.dispose(),this.sunMesh.material.dispose()),this.coronaMesh&&(this.coronaMesh.material.map.dispose(),this.coronaMesh.material.dispose()),this.solarFlares.forEach(t=>{t.mesh.material.map.dispose(),t.mesh.material.dispose()}),this.lensflare&&this.lensflare.dispose()}}const qc=2451545,ki=Math.PI/180,o0={Mercury:{a:.38709927,a_rate:37e-8,e:.20563593,e_rate:1906e-8,i:7.00497902,i_rate:-.00594749,L:252.2503235,L_rate:149472.67411175,wbar:77.45779628,wbar_rate:.16047689,omega:48.33076593,omega_rate:-.12534081},Venus:{a:.72333566,a_rate:39e-7,e:.00677672,e_rate:-4107e-8,i:3.39467605,i_rate:-7889e-7,L:181.9790995,L_rate:58517.81538729,wbar:131.60246718,wbar_rate:.00268329,omega:76.67984255,omega_rate:-.27769418},Earth:{a:1.00000261,a_rate:562e-8,e:.01671123,e_rate:-4392e-8,i:-1531e-8,i_rate:-.01294668,L:100.46457166,L_rate:35999.37244981,wbar:102.93768193,wbar_rate:.32327364,omega:0,omega_rate:0},Mars:{a:1.52371034,a_rate:1847e-8,e:.0933941,e_rate:7882e-8,i:1.84969142,i_rate:-.00813131,L:-4.55343205,L_rate:19140.30268499,wbar:-23.94362959,wbar_rate:.44441088,omega:49.55953891,omega_rate:-.29257343},Jupiter:{a:5.202887,a_rate:-11607e-8,e:.04838624,e_rate:-13253e-8,i:1.30439695,i_rate:-.00183714,L:34.39644051,L_rate:3034.74612775,wbar:14.72847983,wbar_rate:.21252668,omega:100.47390909,omega_rate:.20469106},Saturn:{a:9.53667594,a_rate:-.0012506,e:.05386179,e_rate:-50991e-8,i:2.48599187,i_rate:.00193609,L:49.95424423,L_rate:1222.49362201,wbar:92.59887831,wbar_rate:-.41897216,omega:113.66242448,omega_rate:-.28867794},Uranus:{a:19.18916464,a_rate:-.00196176,e:.04725744,e_rate:-4397e-8,i:.77263783,i_rate:-.00242939,L:313.23810451,L_rate:428.48202785,wbar:170.9542763,wbar_rate:.40805281,omega:74.01692503,omega_rate:.04240589},Neptune:{a:30.06992276,a_rate:26291e-8,e:.00859048,e_rate:5105e-8,i:1.77004347,i_rate:35372e-8,L:-55.12002969,L_rate:218.45945325,wbar:44.96476227,wbar_rate:-.32241464,omega:131.78422574,omega_rate:-.00508664},Pluto:{a:39.48211675,a_rate:-31596e-8,e:.2488273,e_rate:517e-7,i:17.14001206,i_rate:4818e-8,L:238.92903833,L_rate:145.20780515,wbar:224.06891629,wbar_rate:-.04062942,omega:110.30393684,omega_rate:-.01183482},Ceres:{a:2.7675,a_rate:0,e:.0758,e_rate:0,i:10.59,i_rate:0,L:153,L_rate:78.19,wbar:73,wbar_rate:0,omega:80.3,omega_rate:0}},Ti={a:.00257,e:.0549,i:5.145,L0:218.3164477,L_rate:481267.88123421,w0:83.3532465,w_rate:4069.0137287,omega0:125.0445479,omega_rate:-1934.1362891};function fc(s){const t=s.getUTCFullYear(),e=s.getUTCMonth()+1,i=s.getUTCDate(),n=s.getUTCHours(),a=s.getUTCMinutes(),r=s.getUTCSeconds(),o=(n+a/60+r/3600)/24;let l=t,c=e;c<=2&&(l-=1,c+=12);const h=Math.floor(l/100),u=2-h+Math.floor(h/4);return Math.floor(365.25*(l+4716))+Math.floor(30.6001*(c+1))+i+o+u-1524.5}function an(s){return s=s%360,s<0&&(s+=360),s}function jc(s,t){let e=s+t*Math.sin(s)*(1+t*Math.cos(s));const i=1e-10;let n=1,a=0;const r=30;for(;Math.abs(n)>i&&a<r;)n=(e-t*Math.sin(e)-s)/(1-t*Math.cos(e)),e-=n,a++;return e}function Kc(s,t){const e=o0[s];if(!e)return console.warn(`No orbital elements for ${s}`),{x:0,y:0,z:0,r:0,theta:0};const i=(t-qc)/36525,n=e.a+e.a_rate*i,a=e.e+e.e_rate*i,r=(e.i+e.i_rate*i)*ki,o=an(e.L+e.L_rate*i),l=an(e.wbar+e.wbar_rate*i),c=an(e.omega+e.omega_rate*i),h=(l-c)*ki,u=c*ki,f=an(o-l)*ki,p=jc(f,a),_=Math.sqrt(1-a*a)*Math.sin(p)/(1-a*Math.cos(p)),x=(Math.cos(p)-a)/(1-a*Math.cos(p)),m=Math.atan2(_,x),d=n*(1-a*Math.cos(p)),v=d*Math.cos(m),b=d*Math.sin(m),E=Math.cos(h),w=Math.sin(h),A=Math.cos(u),C=Math.sin(u),U=Math.cos(r),M=Math.sin(r),S=(E*A-w*C*U)*v+(-w*A-E*C*U)*b,D=(E*C+w*A*U)*v+(-w*C+E*A*U)*b,V=w*M*v+E*M*b,z=Math.atan2(D,S);return{x:S,y:D,z:V,r:d,theta:z,trueAnomaly:m,meanAnomaly:f}}function l0(s){const t=(s-qc)/36525,e=an(Ti.L0+Ti.L_rate*t)*ki,i=an(Ti.w0+Ti.w_rate*t)*ki,n=an(Ti.omega0+Ti.omega_rate*t)*ki,a=Ti.i*ki,r=Ti.e,o=Ti.a,l=e-i,c=jc(l,r),h=Math.sqrt(1-r*r)*Math.sin(c)/(1-r*Math.cos(c)),u=(Math.cos(c)-r)/(1-r*Math.cos(c)),f=Math.atan2(h,u),p=o*(1-r*Math.cos(c)),_=p*Math.cos(f),x=p*Math.sin(f),m=i-n,d=Math.cos(m),v=Math.sin(m),b=Math.cos(n),E=Math.sin(n),w=Math.cos(a),A=Math.sin(a),C=(d*b-v*E*w)*_+(-v*b-d*E*w)*x,U=(d*E+v*b*w)*_+(-v*E+d*b*w)*x,M=v*A*_+d*A*x,S=Kc("Earth",s),D=S.x+C,V=S.y+U,z=Math.atan2(V,D),$=Math.atan2(S.y,S.x);let W=z-$;for(;W<0;)W+=2*Math.PI;for(;W>2*Math.PI;)W-=2*Math.PI;const G=W/(2*Math.PI);return{x:C,y:U,z:M,r:p,phase:G}}class pc{constructor(t,e){this.data=t,this.textureLoader=e,this.orbitAngle=Math.random()*Math.PI*2,this.rotationAngle=0,this.currentJulianDate=null,this.useAccurateOrbits=!0,this.orbitGroup=new ti,this.axisGroup=new ti,this.planetMesh=null,this.planetGlow=null,this.atmosphereMesh=null,this.cloudsMesh=null,this.ringMesh=null,this.moons=[],this.orbitLine=null,this.orbitGroup.name=`${t.name}Orbit`,this.axisGroup.name=`${t.name}Axis`,this.init()}async init(){await this.createPlanetMesh(),this.applyAxialTilt(),this.createOrbitLine(),this.createPlanetGlow(),this.data.atmosphere&&this.createAtmosphere(),this.data.hasRings&&await this.createRings(),this.data.moons&&this.data.moons.length>0&&await this.createMoons(),this.data.cloudsUrl&&await this.createClouds(),this.orbitGroup.add(this.axisGroup)}async createPlanetMesh(){const t=new si(this.data.radius,64,64);let e;this.data.name==="Earth"&&this.data.nightTextureUrl?e=await this.createEarthMaterial(t):this.data.name==="Jupiter"?e=await this.createJupiterMaterial(t):e=await this.createAlbedoMaterial(),this.planetMesh=new ie(t,e),this.planetMesh.name=this.data.name,this.planetMesh.userData={type:"celestialBody",name:this.data.name,facts:this.data.facts,earthComparison:this.data.earthComparison,clickable:!0,isPlanet:!0,isDwarfPlanet:this.data.isDwarfPlanet||!1},this.planetMesh.position.x=this.data.distance,this.axisGroup.add(this.planetMesh)}async createEarthMaterial(){let t=null,e=null,i=null,n=null;try{t=await this.loadTexture(this.data.textureUrl)}catch{console.warn("Failed to load Earth day texture")}try{e=await this.loadTexture(this.data.nightTextureUrl)}catch{console.warn("Failed to load Earth night texture")}if(this.data.normalMapUrl)try{i=await this.loadTexture(this.data.normalMapUrl)}catch{}if(this.data.specularMapUrl)try{n=await this.loadTexture(this.data.specularMapUrl)}catch{}return!t||!e?new Oi({map:t,color:this.data.color}):new he({uniforms:{dayTexture:{value:t},nightTexture:{value:e},normalMap:{value:i},specularMap:{value:n},sunDirection:{value:new R(1,0,0)},ambientIntensity:{value:.1}},vertexShader:`
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
      `})}async createJupiterMaterial(){let t=null;try{t=await this.loadTexture(this.data.textureUrl)}catch{console.warn("Failed to load Jupiter texture")}return t?(this.jupiterTimeUniform={value:0},new he({uniforms:{baseTexture:{value:t},time:this.jupiterTimeUniform,sunDirection:{value:new R(1,0,0)}},vertexShader:`
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
      `})):new Oi({color:this.data.color})}async createAlbedoMaterial(){let t=null,e=null;if(this.data.textureUrl)try{t=await this.loadTexture(this.data.textureUrl)}catch{console.warn(`Failed to load texture for ${this.data.name}, using color fallback`)}if(this.data.normalMapUrl)try{e=await this.loadTexture(this.data.normalMapUrl)}catch{}const i=this.data.albedo!==void 0?this.data.albedo:.3;return new he({uniforms:{planetTexture:{value:t},normalMap:{value:e},hasTexture:{value:t!==null},hasNormalMap:{value:e!==null},baseColor:{value:new Et(this.data.color)},albedo:{value:i},sunDirection:{value:new R(1,0,0)}},vertexShader:`
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
      `})}createAtmosphere(){const t=this.data.atmosphere,e=new si(this.data.radius*t.scale,64,64);this.atmosphereSunDirection={value:new R(1,0,0)};const n=this.data.name==="Earth"||this.data.name==="Venus"?.6:.3,a=new he({uniforms:{atmosphereColor:{value:new Et(t.color)},intensity:{value:t.opacity},sunDirection:this.atmosphereSunDirection,scatterStrength:{value:n}},vertexShader:`
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
      `,transparent:!0,side:Ae,blending:Se,depthWrite:!1});this.atmosphereMesh=new ie(e,a),this.atmosphereMesh.position.copy(this.planetMesh.position),this.axisGroup.add(this.atmosphereMesh)}loadTexture(t){return new Promise((e,i)=>{this.textureLoader.load(t,n=>{n.colorSpace=Ye,e(n)},void 0,n=>i(n))})}applyAxialTilt(){const t=fi.degToRad(this.data.axialTilt);this.axisGroup.rotation.z=t}createOrbitLine(){const t=[];for(let o=0;o<=128;o++){const l=o/128*Math.PI*2;t.push(new R(Math.cos(l)*this.data.distance,0,Math.sin(l)*this.data.distance))}const i=new le().setFromPoints(t),n=this.data.distance<20,a=new Et(this.data.color).lerp(new Et(4473958),.7),r=new Ss({color:this.data.isDwarfPlanet?6702182:a,transparent:!0,opacity:this.data.isDwarfPlanet?.25:.4,linewidth:n?2:1});this.orbitLine=new Sa(i,r),this.orbitLine.name=`${this.data.name}OrbitLine`}createPlanetGlow(){const t=new si(this.data.radius*1.15,32,32),e=new he({uniforms:{glowColor:{value:new Et(this.data.color)},intensity:{value:.4}},vertexShader:`
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
      `,transparent:!0,side:Ae,blending:Se,depthWrite:!1});this.planetGlow=new ie(t,e),this.planetGlow.position.copy(this.planetMesh.position),this.axisGroup.add(this.planetGlow)}async createRings(){if(!this.data.ringBands||this.data.ringBands.length===0)return this.createLegacyRings();let t=1/0,e=0;this.data.ringBands.forEach(h=>{t=Math.min(t,h.inner),e=Math.max(e,h.outer)});const i=this.data.radius*t,n=this.data.radius*e,a=new ba(i,n,128),r=a.attributes.position,o=a.attributes.uv;for(let h=0;h<r.count;h++){const u=r.getX(h),f=r.getY(h),_=(Math.sqrt(u*u+f*f)-i)/(n-i);o.setXY(h,_,.5)}const l=this.createAccurateRingTexture(t,e),c=new Oi({map:l,side:ai,transparent:!0,opacity:1,alphaTest:.01,depthWrite:!1});this.ringMesh=new ie(a,c),this.ringMesh.rotation.x=Math.PI/2,this.ringMesh.position.copy(this.planetMesh.position),this.ringMesh.renderOrder=1,this.axisGroup.add(this.ringMesh)}async createLegacyRings(){const t=this.data.radius*(this.data.ringInnerRadius||1.2),e=this.data.radius*(this.data.ringOuterRadius||2.3),i=new ba(t,e,128),n=i.attributes.position,a=i.attributes.uv;for(let c=0;c<n.count;c++){const h=n.getX(c),u=n.getY(c),p=(Math.sqrt(h*h+u*u)-t)/(e-t);a.setXY(c,p,.5)}const r=this.createSaturnRingTexture(),o=this.data.ringOpacity||.9,l=new Oi({map:r,side:ai,transparent:!0,opacity:o});this.ringMesh=new ie(i,l),this.ringMesh.rotation.x=Math.PI/2,this.ringMesh.position.copy(this.planetMesh.position),this.axisGroup.add(this.ringMesh)}createAccurateRingTexture(t,e){const i=document.createElement("canvas");i.width=2048,i.height=64;const n=i.getContext("2d");n.clearRect(0,0,i.width,i.height);const a=e-t;return this.data.ringBands.forEach(r=>{const o=(r.inner-t)/a*i.width,l=(r.outer-t)/a*i.width,c=l-o,h=new Et(r.color),u=Math.floor(h.r*255),f=Math.floor(h.g*255),p=Math.floor(h.b*255),_=n.createLinearGradient(o,0,l,0),x=Math.min(.1,10/c);_.addColorStop(0,`rgba(${u}, ${f}, ${p}, 0)`),_.addColorStop(x,`rgba(${u}, ${f}, ${p}, ${r.opacity})`),_.addColorStop(.5,`rgba(${u}, ${f}, ${p}, ${r.opacity})`),_.addColorStop(1-x,`rgba(${u}, ${f}, ${p}, ${r.opacity})`),_.addColorStop(1,`rgba(${u}, ${f}, ${p}, 0)`),n.fillStyle=_,n.fillRect(o,0,c,i.height)}),this.addRingNoise(n,i.width,i.height),new Ke(i)}addRingNoise(t,e,i){const n=this.data.ringType||"saturn";if(n==="saturn"){for(let a=0;a<5e3;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.15;t.fillStyle=`rgba(255, 255, 255, ${l})`,t.fillRect(r,o,1,1)}for(let a=0;a<2e3;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.1;t.fillStyle=`rgba(100, 80, 60, ${l})`,t.fillRect(r,o,2,1)}}else if(n==="jupiter")for(let a=0;a<500;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.05;t.fillStyle=`rgba(200, 150, 100, ${l})`,t.fillRect(r,o,1,1)}else if(n==="uranus")for(let a=0;a<300;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.08;t.fillStyle=`rgba(80, 80, 80, ${l})`,t.fillRect(r,o,1,1)}else if(n==="neptune")for(let a=0;a<200;a++){const r=Math.random()*e,o=Math.random()*i,l=Math.random()*.04;t.fillStyle=`rgba(100, 80, 70, ${l})`,t.fillRect(r,o,1,1)}}createSaturnRingTexture(){const t=document.createElement("canvas");t.width=1024,t.height=64;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,1024,0);i.addColorStop(0,"rgba(200, 180, 150, 0.0)"),i.addColorStop(.05,"rgba(210, 190, 160, 0.7)"),i.addColorStop(.1,"rgba(200, 180, 150, 0.95)"),i.addColorStop(.15,"rgba(180, 160, 130, 0.2)"),i.addColorStop(.18,"rgba(180, 160, 130, 0.15)"),i.addColorStop(.22,"rgba(200, 180, 150, 0.9)"),i.addColorStop(.35,"rgba(220, 200, 170, 0.95)"),i.addColorStop(.45,"rgba(200, 180, 150, 0.85)"),i.addColorStop(.55,"rgba(180, 160, 140, 0.7)"),i.addColorStop(.65,"rgba(200, 180, 150, 0.8)"),i.addColorStop(.75,"rgba(190, 170, 145, 0.6)"),i.addColorStop(.85,"rgba(180, 160, 140, 0.4)"),i.addColorStop(.95,"rgba(170, 150, 130, 0.2)"),i.addColorStop(1,"rgba(160, 140, 120, 0.0)"),e.fillStyle=i,e.fillRect(0,0,1024,64);for(let n=0;n<3e3;n++){const a=Math.random()*1024,r=Math.random()*64,o=Math.random()*.2;e.fillStyle=`rgba(255, 255, 255, ${o})`,e.fillRect(a,r,1,1)}for(let n=0;n<1e3;n++){const a=Math.random()*1024,r=Math.random()*64,o=Math.random()*.15;e.fillStyle=`rgba(100, 80, 60, ${o})`,e.fillRect(a,r,2,1)}return new Ke(t)}createUranusRingTexture(){const t=document.createElement("canvas");t.width=512,t.height=32;const e=t.getContext("2d");e.clearRect(0,0,512,32);const i=e.createLinearGradient(0,0,512,0);i.addColorStop(0,"rgba(80, 100, 130, 0.0)"),i.addColorStop(.15,"rgba(90, 110, 140, 0.15)"),i.addColorStop(.25,"rgba(70, 90, 120, 0.05)"),i.addColorStop(.35,"rgba(90, 110, 140, 0.2)"),i.addColorStop(.45,"rgba(80, 100, 130, 0.1)"),i.addColorStop(.55,"rgba(90, 110, 140, 0.25)"),i.addColorStop(.65,"rgba(80, 100, 130, 0.08)"),i.addColorStop(.75,"rgba(90, 110, 140, 0.15)"),i.addColorStop(.85,"rgba(80, 100, 130, 0.1)"),i.addColorStop(1,"rgba(70, 90, 120, 0.0)"),e.fillStyle=i,e.fillRect(0,0,512,32);for(let n=0;n<500;n++){const a=Math.random()*512,r=Math.random()*32,o=Math.random()*.1;e.fillStyle=`rgba(150, 170, 200, ${o})`,e.fillRect(a,r,1,1)}return new Ke(t)}createProceduralRingTexture(){return this.createSaturnRingTexture()}createMoonPhaseMaterial(t,e){return this.moonSunDirection={value:new R(1,0,0)},new he({uniforms:{moonTexture:{value:t},baseColor:{value:new Et(e||11184810)},sunDirection:this.moonSunDirection,hasTexture:{value:t?1:0}},vertexShader:`
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
      `})}async createMoons(){for(const t of this.data.moons){let e;if(t==="Moon")e=t0;else if(t==="Charon")e=i0;else if(dc[t])e=dc[t];else continue;const i=await this.createSingleMoon(e);i&&this.moons.push(i)}}async createSingleMoon(t){const e=new si(t.radius,32,32);let i,n=null;if(t.textureUrl)try{n=await this.loadTexture(t.textureUrl)}catch{}if(t.name==="Moon"&&t.parent==="Earth")i=this.createMoonPhaseMaterial(n,t.color);else{const l={color:t.color};n&&(l.map=n),i=new Oi(l)}const a=new ie(e,i);a.name=t.name,a.userData={type:"celestialBody",name:t.name,facts:t.facts,clickable:!0,isMoon:!0,parent:this.data.name};const r=new ti;r.position.copy(this.planetMesh.position),r.add(a),a.position.x=t.distance;let o=null;if(t.atmosphere){const l=new si(t.radius*t.atmosphere.scale,32,32),c=new he({uniforms:{atmosphereColor:{value:new Et(t.atmosphere.color)},intensity:{value:t.atmosphere.opacity}},vertexShader:`
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
        `,transparent:!0,side:Ae,blending:Se,depthWrite:!1});o=new ie(l,c),a.add(o)}return this.axisGroup.add(r),{mesh:a,pivot:r,data:t,orbitAngle:Math.random()*Math.PI*2,atmosphereMesh:o}}async createClouds(){const t=new si(this.data.radius*1.015,64,64);let e=null;try{e=await this.loadTexture(this.data.cloudsUrl)}catch{return}const i=new Oi({map:e,transparent:!0,opacity:.5,depthWrite:!1,alphaMap:e});this.cloudsMesh=new ie(t,i),this.cloudsMesh.position.copy(this.planetMesh.position),this.axisGroup.add(this.cloudsMesh)}getMesh(){return this.orbitGroup}getOrbitLine(){return this.orbitLine}getWorldPosition(){const t=new R;return this.planetMesh.getWorldPosition(t),t}getOrbitalPosition(){let t=fi.radToDeg(this.orbitAngle)%360;return t<0&&(t+=360),t}getDistanceFromSun(){return this.data.distance/10}getClickableObjects(){const t=[this.planetMesh];return this.moons.forEach(e=>t.push(e.mesh)),t}setPositionForDate(t){if(this.currentJulianDate=t,this.useAccurateOrbits){const e=Kc(this.data.name,t);e&&(this.planetMesh.position.x=e.x*ne,this.planetMesh.position.z=e.y*ne,this.planetMesh.position.y=e.z*ne,this.orbitAngle=e.theta,this.planetGlow&&this.planetGlow.position.copy(this.planetMesh.position),this.atmosphereMesh&&this.atmosphereMesh.position.copy(this.planetMesh.position),this.ringMesh&&this.ringMesh.position.copy(this.planetMesh.position),this.cloudsMesh&&this.cloudsMesh.position.copy(this.planetMesh.position),this.data.name==="Earth"&&this.updateMoonForDate(t))}}updateMoonForDate(t){const e=this.moons.find(n=>n.data.name==="Moon");if(!e)return;const i=l0(t);i&&(e.mesh.position.x=i.x*ne*15,e.mesh.position.z=i.y*ne*15,e.mesh.position.y=i.z*ne*15,e.mesh.material.uniforms&&e.mesh.material.uniforms.phase&&(e.mesh.material.uniforms.phase.value=i.phase),e.phase=i.phase)}update(t,e=1,i=0,n=null){if(n!==null&&this.useAccurateOrbits)this.setPositionForDate(n);else{const o=2*Math.PI/(this.data.orbitalPeriod*100);this.orbitAngle+=o*t*e,this.planetMesh.position.x=Math.cos(this.orbitAngle)*this.data.distance,this.planetMesh.position.z=Math.sin(this.orbitAngle)*this.data.distance}const a=this.data.rotationPeriod>0?1:-1,r=Math.abs(1/this.data.rotationPeriod)*t*e*.5;if(this.planetMesh.rotation.y+=r*a,this.planetMesh.material.uniforms&&this.planetMesh.material.uniforms.sunDirection){const o=new R(-this.planetMesh.position.x,0,-this.planetMesh.position.z).normalize();this.planetMesh.material.uniforms.sunDirection.value.copy(o)}if(this.jupiterTimeUniform&&(this.jupiterTimeUniform.value=i),this.planetGlow&&this.planetGlow.position.copy(this.planetMesh.position),this.atmosphereMesh&&(this.atmosphereMesh.position.copy(this.planetMesh.position),this.atmosphereSunDirection)){const o=new R(-this.planetMesh.position.x,0,-this.planetMesh.position.z).normalize();this.atmosphereSunDirection.value.copy(o)}if(this.ringMesh&&this.ringMesh.position.copy(this.planetMesh.position),this.cloudsMesh&&(this.cloudsMesh.position.copy(this.planetMesh.position),this.cloudsMesh.rotation.y+=r*1.15),this.moons.forEach(o=>{o.pivot.position.copy(this.planetMesh.position);const l=2*Math.PI/(o.data.orbitalPeriod*100);if(o.orbitAngle+=l*t*e,o.mesh.position.x=Math.cos(o.orbitAngle)*o.data.distance,o.mesh.position.z=Math.sin(o.orbitAngle)*o.data.distance,o.mesh.rotation.y=o.orbitAngle,o.mesh.material.uniforms&&o.mesh.material.uniforms.sunDirection){const c=new R;o.mesh.getWorldPosition(c);const h=new R(-c.x,-c.y,-c.z).normalize();o.mesh.material.uniforms.sunDirection.value.copy(h)}}),this.moonSunDirection){const o=new R(-this.planetMesh.position.x,0,-this.planetMesh.position.z).normalize();this.moonSunDirection.value.copy(o)}}dispose(){this.planetMesh&&(this.planetMesh.geometry.dispose(),this.planetMesh.material.dispose(),this.planetMesh.material.map&&this.planetMesh.material.map.dispose()),this.planetGlow&&(this.planetGlow.geometry.dispose(),this.planetGlow.material.dispose()),this.atmosphereMesh&&(this.atmosphereMesh.geometry.dispose(),this.atmosphereMesh.material.dispose()),this.ringMesh&&(this.ringMesh.geometry.dispose(),this.ringMesh.material.dispose()),this.cloudsMesh&&(this.cloudsMesh.geometry.dispose(),this.cloudsMesh.material.dispose()),this.orbitLine&&(this.orbitLine.geometry.dispose(),this.orbitLine.material.dispose()),this.moons.forEach(t=>{t.mesh.geometry.dispose(),t.mesh.material.dispose()})}}class c0{constructor(){this.data=n0,this.group=new ti,this.group.name="AsteroidBelt",this.asteroids=[],this.instancedMesh=null,this.dummy=new Re,this.init()}init(){this.createAsteroids()}createAsteroids(){const t=[new ko(1,0),new Go(1,0),new Ho(1,0)],e=t[0],i=new Oi({color:this.data.color,roughness:.9,metalness:.1,flatShading:!0});this.instancedMesh=new Au(e,i,this.data.count),this.instancedMesh.name="AsteroidInstances";for(let a=0;a<this.data.count;a++){const r=fi.randFloat(this.data.innerRadius,this.data.outerRadius),o=Math.random()*Math.PI*2,l=fi.randFloatSpread(this.data.verticalSpread),c=fi.randFloat(this.data.minSize,this.data.maxSize),h=Math.random()*Math.PI*2,u=Math.random()*Math.PI*2,f=Math.random()*Math.PI*2,p=.01/Math.sqrt(r/this.data.innerRadius);this.asteroids.push({radius:r,angle:o,verticalOffset:l,size:c,rotationX:h,rotationY:u,rotationZ:f,orbitalVelocity:p,rotationSpeed:fi.randFloat(.5,2)}),this.updateAsteroidMatrix(a)}const n=new Float32Array(this.data.count*3);for(let a=0;a<this.data.count;a++){const r=.5+Math.random()*.4;n[a*3]=r+Math.random()*.15,n[a*3+1]=r+Math.random()*.05,n[a*3+2]=r*.85}this.instancedMesh.instanceColor=new ho(n,3),this.group.add(this.instancedMesh),t[1].dispose(),t[2].dispose()}updateAsteroidMatrix(t){const e=this.asteroids[t],i=Math.cos(e.angle)*e.radius,n=Math.sin(e.angle)*e.radius,a=e.verticalOffset;this.dummy.position.set(i,a,n),this.dummy.rotation.set(e.rotationX,e.rotationY,e.rotationZ),this.dummy.scale.setScalar(e.size),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(t,this.dummy.matrix)}getMesh(){return this.group}update(t,e=1){for(let i=0;i<this.data.count;i++){const n=this.asteroids[i];n.angle+=n.orbitalVelocity*t*e,n.rotationX+=n.rotationSpeed*t*.1,n.rotationY+=n.rotationSpeed*t*.15,n.rotationZ+=n.rotationSpeed*t*.05,this.updateAsteroidMatrix(i)}this.instancedMesh.instanceMatrix.needsUpdate=!0}dispose(){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose())}}class h0{constructor(){this.data=s0,this.group=new ti,this.group.name="KuiperBelt",this.particles=null,this.init()}init(){this.createParticles()}createParticles(){const t=new Float32Array(this.data.count*3),e=new Float32Array(this.data.count*3),i=new Float32Array(this.data.count);this.orbitalData=[];for(let h=0;h<this.data.count;h++){const u=fi.randFloat(this.data.innerRadius,this.data.outerRadius),f=Math.random()*Math.PI*2,p=fi.randFloatSpread(this.data.verticalSpread);this.orbitalData.push({radius:u,angle:f,verticalOffset:p,orbitalVelocity:.002/Math.sqrt(u/this.data.innerRadius)});const _=Math.cos(f)*u,x=Math.sin(f)*u;t[h*3]=_,t[h*3+1]=p,t[h*3+2]=x;const m=Math.random();m<.7?(e[h*3]=.3+Math.random()*.1,e[h*3+1]=.35+Math.random()*.1,e[h*3+2]=.5+Math.random()*.15):m<.85?(e[h*3]=.25+Math.random()*.1,e[h*3+1]=.3+Math.random()*.1,e[h*3+2]=.4+Math.random()*.1):(e[h*3]=.35+Math.random()*.1,e[h*3+1]=.3+Math.random()*.1,e[h*3+2]=.5+Math.random()*.15),i[h]=fi.randFloat(this.data.minSize,this.data.maxSize)*50}const n=new le;n.setAttribute("position",new se(t,3)),n.setAttribute("color",new se(e,3)),n.setAttribute("size",new se(i,1));const a=document.createElement("canvas");a.width=32,a.height=32;const r=a.getContext("2d"),o=r.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255, 255, 255, 1)"),o.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),o.addColorStop(.7,"rgba(255, 255, 255, 0.3)"),o.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=o,r.fillRect(0,0,32,32);const l=new Ke(a),c=new Hn({size:.5,vertexColors:!0,transparent:!0,opacity:this.data.opacity,sizeAttenuation:!0,blending:Se,map:l,depthWrite:!1});this.particles=new bs(n,c),this.particles.name="KuiperBeltParticles",this.group.add(this.particles)}getMesh(){return this.group}update(t,e=1){const i=this.particles.geometry.attributes.position.array;for(let n=0;n<this.data.count;n++){const a=this.orbitalData[n];a.angle+=a.orbitalVelocity*t*e;const r=Math.cos(a.angle)*a.radius,o=Math.sin(a.angle)*a.radius;i[n*3]=r,i[n*3+2]=o}this.particles.geometry.attributes.position.needsUpdate=!0}dispose(){this.particles&&(this.particles.geometry.dispose(),this.particles.material.dispose(),this.particles.material.map&&this.particles.material.map.dispose())}}class u0{constructor(t={}){this.starCount=t.starCount||1e4,this.milkyWayStarCount=t.milkyWayStarCount||8e3,this.radius=t.radius||1e3,this.group=new ti,this.group.name="StarfieldGroup",this.geometry=null,this.material=null,this.mesh=null,this.milkyWayMesh=null,this.init()}init(){this.createMainStarfield(),this.createMilkyWay()}createMainStarfield(){this.geometry=new le;const t=new Float32Array(this.starCount*3),e=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount);for(let n=0;n<this.starCount;n++){const a=n*3,r=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1);t[a]=this.radius*Math.sin(o)*Math.cos(r),t[a+1]=this.radius*Math.sin(o)*Math.sin(r),t[a+2]=this.radius*Math.cos(o);const l=Math.random();l<.7?(e[a]=.9+Math.random()*.1,e[a+1]=.9+Math.random()*.1,e[a+2]=.9+Math.random()*.1):l<.85?(e[a]=.7+Math.random()*.2,e[a+1]=.8+Math.random()*.2,e[a+2]=1):(e[a]=1,e[a+1]=.8+Math.random()*.2,e[a+2]=.5+Math.random()*.3),i[n]=Math.random()*2+.5}this.geometry.setAttribute("position",new se(t,3)),this.geometry.setAttribute("color",new se(e,3)),this.geometry.setAttribute("size",new se(i,1)),this.material=new Hn({size:1.5,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:Se}),this.mesh=new bs(this.geometry,this.material),this.mesh.name="Starfield",this.group.add(this.mesh)}createMilkyWay(){const t=new le,e=new Float32Array(this.milkyWayStarCount*3),i=new Float32Array(this.milkyWayStarCount*3),n=.35,a=Math.PI/6;for(let u=0;u<this.milkyWayStarCount;u++){const f=u*3,p=Math.random()*Math.PI*2,_=(Math.random()+Math.random()+Math.random()-1.5)*n,x=Math.PI/2+_;let m=this.radius*Math.sin(x)*Math.cos(p),d=this.radius*Math.sin(x)*Math.sin(p),v=this.radius*Math.cos(x);const b=Math.cos(a),E=Math.sin(a),w=d*b-v*E,A=d*E+v*b;e[f]=m,e[f+1]=w,e[f+2]=A;const C=.3+Math.random()*.4,U=Math.random();U<.4?(i[f]=C*1,i[f+1]=C*.95,i[f+2]=C*.85):U<.7?(i[f]=C*.9,i[f+1]=C*.95,i[f+2]=C*1):(i[f]=C*1,i[f+1]=C*.8,i[f+2]=C*.85)}t.setAttribute("position",new se(e,3)),t.setAttribute("color",new se(i,3));const r=document.createElement("canvas");r.width=32,r.height=32;const o=r.getContext("2d"),l=o.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.3,"rgba(255, 255, 255, 0.5)"),l.addColorStop(.7,"rgba(255, 255, 255, 0.1)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=l,o.fillRect(0,0,32,32);const c=new Ke(r),h=new Hn({size:2.5,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0,blending:Se,map:c,depthWrite:!1});this.milkyWayMesh=new bs(t,h),this.milkyWayMesh.name="MilkyWay",this.group.add(this.milkyWayMesh),this.createNebulaGlow()}createNebulaGlow(){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d"),n=i.createRadialGradient(128,128,0,128,128,128);n.addColorStop(0,"rgba(180, 160, 200, 0.3)"),n.addColorStop(.3,"rgba(160, 140, 180, 0.15)"),n.addColorStop(.6,"rgba(140, 120, 160, 0.05)"),n.addColorStop(1,"rgba(120, 100, 140, 0)"),i.fillStyle=n,i.fillRect(0,0,256,256);const a=new Ke(e),r=new Gn({map:a,transparent:!0,blending:Se,depthWrite:!1,opacity:.3}),o=Math.PI/6;for(let l=0;l<20;l++){const c=new ys(r.clone()),h=l/20*Math.PI*2+Math.random()*.5,u=Math.PI/2+(Math.random()-.5)*.3;let f=this.radius*.95*Math.sin(u)*Math.cos(h),p=this.radius*.95*Math.sin(u)*Math.sin(h),_=this.radius*.95*Math.cos(u);const x=Math.cos(o),m=Math.sin(o),d=p*x-_*m,v=p*m+_*x;c.position.set(f,d,v);const b=100+Math.random()*150;c.scale.set(b,b,1);const E=Math.random();E<.4?c.material.color.setHex(13417437):E<.7?c.material.color.setHex(14535867):c.material.color.setHex(12307677),this.group.add(c)}}getMesh(){return this.group}update(t){this.group.rotation.y+=t*.001}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.milkyWayMesh&&(this.milkyWayMesh.geometry.dispose(),this.milkyWayMesh.material.dispose(),this.milkyWayMesh.material.map&&this.milkyWayMesh.material.map.dispose())}}const ls=Math.PI/180;class d0{constructor(t={}){this.data=Yc,this.semiMajorAxis=this.data.semiMajorAxis,this.eccentricity=this.data.eccentricity,this.inclination=this.data.inclination*ls,this.longitudeOfAscendingNode=this.data.longitudeOfAscendingNode*ls,this.argumentOfPerihelion=this.data.argumentOfPerihelion*ls,this.meanAnomalyAtEpoch=this.data.meanAnomalyAtEpoch*ls,this.epoch=this.data.epoch,this.meanMotion=this.data.meanMotion*ls,this.orbitalPeriod=this.data.orbitalPeriod,this.perihelion=this.data.perihelion,this.aphelion=this.data.aphelion,this.group=new ti,this.group.name="Halley's Comet",this.nucleus=null,this.hitbox=null,this.coma=null,this.dustTail=null,this.ionTail=null,this.orbitLine=null,this.currentJulianDate=null,this.dustTailCount=250,this.ionTailCount=150,this.init()}init(){this.createNucleus(),this.createHitbox(),this.createComa(),this.createDustTail(),this.createIonTail(),this.createOrbitLine()}solveKepler(t,e){t=t%(2*Math.PI),t<0&&(t+=2*Math.PI);let i=t+e*Math.sin(t)*(1+e*Math.cos(t));const n=1e-10;let a=1,r=0;const o=30;for(;Math.abs(a)>n&&r<o;)a=(i-e*Math.sin(i)-t)/(1-e*Math.cos(i)),i-=a,r++;return i}calculatePosition(t){const e=t-this.epoch,i=this.meanAnomalyAtEpoch+this.meanMotion*e,n=this.solveKepler(i,this.eccentricity),a=Math.sqrt(1-this.eccentricity*this.eccentricity)*Math.sin(n)/(1-this.eccentricity*Math.cos(n)),r=(Math.cos(n)-this.eccentricity)/(1-this.eccentricity*Math.cos(n)),o=Math.atan2(a,r),l=this.semiMajorAxis*(1-this.eccentricity*Math.cos(n)),c=l*Math.cos(o),h=l*Math.sin(o),u=Math.cos(this.argumentOfPerihelion),f=Math.sin(this.argumentOfPerihelion),p=Math.cos(this.longitudeOfAscendingNode),_=Math.sin(this.longitudeOfAscendingNode),x=Math.cos(this.inclination),m=Math.sin(this.inclination),d=(u*p-f*_*x)*c+(-f*p-u*_*x)*h,v=(u*_+f*p*x)*c+(-f*_+u*p*x)*h,b=f*m*c+u*m*h;return{x:d,y:v,z:b,r:l,trueAnomaly:o}}createNucleus(){const t=new si(.12,16,16),e=new Oi({color:2236962,roughness:.95,metalness:.05});this.nucleus=new ie(t,e),this.nucleus.name="Halley's Comet",this.nucleus.userData={type:"celestialBody",name:"Halley's Comet",clickable:!0,facts:this.data.facts},this.group.add(this.nucleus)}createHitbox(){const t=new si(2.5,16,16),e=new $n({visible:!1,transparent:!0,opacity:0});this.hitbox=new ie(t,e),this.hitbox.name="Halley's Comet",this.hitbox.userData={type:"celestialBody",name:"Halley's Comet",clickable:!0,isComet:!0,facts:this.data.facts},this.group.add(this.hitbox)}createComa(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(200, 220, 255, 1)"),i.addColorStop(.2,"rgba(180, 200, 255, 0.8)"),i.addColorStop(.5,"rgba(150, 180, 255, 0.4)"),i.addColorStop(.8,"rgba(120, 150, 255, 0.1)"),i.addColorStop(1,"rgba(100, 130, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,128,128);const n=new Ke(t),a=new Gn({map:n,transparent:!0,blending:Se,depthWrite:!1});this.coma=new ys(a),this.coma.scale.set(2,2,1),this.group.add(this.coma)}createDustTail(){const t=new le,e=new Float32Array(this.dustTailCount*3),i=new Float32Array(this.dustTailCount*3),n=new Float32Array(this.dustTailCount),a=[];for(let u=0;u<this.dustTailCount;u++)e[u*3]=0,e[u*3+1]=0,e[u*3+2]=0,i[u*3]=1,i[u*3+1]=.9+Math.random()*.1,i[u*3+2]=.7+Math.random()*.2,n[u]=.5+Math.random()*1,a.push({speed:.5+Math.random()*1.5,angle:(Math.random()-.5)*.3,offset:Math.random()*Math.PI*2});t.setAttribute("position",new se(e,3)),t.setAttribute("color",new se(i,3)),t.setAttribute("size",new se(n,1));const r=document.createElement("canvas");r.width=32,r.height=32;const o=r.getContext("2d"),l=o.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),l.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=l,o.fillRect(0,0,32,32);const c=new Ke(r),h=new Hn({size:.4,vertexColors:!0,transparent:!0,opacity:.35,map:c,blending:Se,depthWrite:!1,sizeAttenuation:!0});this.dustTail=new bs(t,h),this.dustTail.userData.velocities=a,this.group.add(this.dustTail)}createIonTail(){const t=new le,e=new Float32Array(this.ionTailCount*3),i=new Float32Array(this.ionTailCount*3);for(let c=0;c<this.ionTailCount;c++)e[c*3]=0,e[c*3+1]=0,e[c*3+2]=0,i[c*3]=.3+Math.random()*.2,i[c*3+1]=.5+Math.random()*.3,i[c*3+2]=1;t.setAttribute("position",new se(e,3)),t.setAttribute("color",new se(i,3));const n=document.createElement("canvas");n.width=32,n.height=32;const a=n.getContext("2d"),r=a.createRadialGradient(16,16,0,16,16,16);r.addColorStop(0,"rgba(100, 150, 255, 1)"),r.addColorStop(.3,"rgba(100, 150, 255, 0.6)"),r.addColorStop(.6,"rgba(100, 150, 255, 0.2)"),r.addColorStop(1,"rgba(100, 150, 255, 0)"),a.fillStyle=r,a.fillRect(0,0,32,32);const o=new Ke(n),l=new Hn({size:.25,vertexColors:!0,transparent:!0,opacity:.3,map:o,blending:Se,depthWrite:!1,sizeAttenuation:!0});this.ionTail=new bs(t,l),this.group.add(this.ionTail)}createOrbitLine(){const t=[];for(let a=0;a<=512;a++){const r=a/512*Math.PI*2,o=this.semiMajorAxis*(1-this.eccentricity*this.eccentricity)/(1+this.eccentricity*Math.cos(r)),l=o*Math.cos(r),c=o*Math.sin(r),h=Math.cos(this.argumentOfPerihelion),u=Math.sin(this.argumentOfPerihelion),f=Math.cos(this.longitudeOfAscendingNode),p=Math.sin(this.longitudeOfAscendingNode),_=Math.cos(this.inclination),x=Math.sin(this.inclination),m=(h*f-u*p*_)*l+(-u*f-h*p*_)*c,d=(h*p+u*f*_)*l+(-u*p+h*f*_)*c,v=u*x*l+h*x*c;t.push(new R(m*ne,v*ne,d*ne))}const i=new le().setFromPoints(t),n=new Ss({color:6710954,transparent:!0,opacity:.3});this.orbitLine=new Sa(i,n),this.orbitLine.name="Halley's Comet Orbit"}getMesh(){return this.group}getOrbitLine(){return this.orbitLine}getClickableObjects(){return[this.hitbox]}getWorldPosition(){const t=new R;return this.nucleus.getWorldPosition(t),t}setPositionForDate(t){this.currentJulianDate=t;const e=this.calculatePosition(t),i=e.x*ne,n=e.z*ne,a=e.y*ne;this.nucleus.position.set(i,n,a),this.hitbox.position.copy(this.nucleus.position),this.coma.position.copy(this.nucleus.position);const o=(e.r-this.perihelion)/(this.aphelion-this.perihelion),c=25*Math.max(.1,1-o*.8),h=new R(i,n,a).normalize(),u=1.5+(1-o)*3;this.coma.scale.set(u,u,1),this.coma.material.opacity=.4+(1-o)*.5,this.updateDustTail(h,c,e.trueAnomaly),this.updateIonTail(h,c*1.5),this.dustTail.material.opacity=.1+(1-o)*.3,this.ionTail.material.opacity=.08+(1-o)*.25}update(t,e=1,i=0,n=null){n!==null&&this.setPositionForDate(n)}updateDustTail(t,e,i){const n=this.dustTail.geometry.attributes.position.array,a=this.dustTail.userData.velocities,r=new R(Math.sin(i+this.argumentOfPerihelion),0,-Math.cos(i+this.argumentOfPerihelion)).normalize();for(let o=0;o<this.dustTailCount;o++){const l=o/this.dustTailCount,c=a[o],h=l*l*.3,u=new R().copy(t).multiplyScalar(1-h).add(r.clone().multiplyScalar(h)).normalize(),f=l*e*c.speed,p=l*1.5*(Math.sin(c.offset+l*3)*.5+.5);n[o*3]=this.nucleus.position.x+u.x*f+(Math.random()-.5)*p,n[o*3+1]=this.nucleus.position.y+u.y*f+(Math.random()-.5)*p*.5,n[o*3+2]=this.nucleus.position.z+u.z*f+(Math.random()-.5)*p}this.dustTail.geometry.attributes.position.needsUpdate=!0}updateIonTail(t,e){const i=this.ionTail.geometry.attributes.position.array;for(let n=0;n<this.ionTailCount;n++){const a=n/this.ionTailCount,r=a*e,o=a*.4;i[n*3]=this.nucleus.position.x+t.x*r+(Math.random()-.5)*o,i[n*3+1]=this.nucleus.position.y+t.y*r+(Math.random()-.5)*o*.3,i[n*3+2]=this.nucleus.position.z+t.z*r+(Math.random()-.5)*o}this.ionTail.geometry.attributes.position.needsUpdate=!0}dispose(){this.nucleus&&(this.nucleus.geometry.dispose(),this.nucleus.material.dispose()),this.hitbox&&(this.hitbox.geometry.dispose(),this.hitbox.material.dispose()),this.coma&&(this.coma.material.map.dispose(),this.coma.material.dispose()),this.dustTail&&(this.dustTail.geometry.dispose(),this.dustTail.material.dispose(),this.dustTail.material.map.dispose()),this.ionTail&&(this.ionTail.geometry.dispose(),this.ionTail.material.dispose(),this.ionTail.material.map.dispose()),this.orbitLine&&(this.orbitLine.geometry.dispose(),this.orbitLine.material.dispose())}}const mc={type:"change"},Yo={type:"start"},Zc={type:"end"},oa=new As,gc=new Fi,f0=Math.cos(70*fi.DEG2RAD),Me=new R,Ve=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pr=1e-6;class p0 extends Xu{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new on,this._lastTargetPosition=new R,this._quat=new on().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zl,this._sphericalDelta=new zl,this._scale=1,this._panOffset=new R,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new R,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g0.bind(this),this._onPointerDown=m0.bind(this),this._onPointerUp=_0.bind(this),this._onContextMenu=E0.bind(this),this._onMouseWheel=M0.bind(this),this._onKeyDown=y0.bind(this),this._onTouchStart=S0.bind(this),this._onTouchMove=b0.bind(this),this._onMouseDown=x0.bind(this),this._onMouseMove=v0.bind(this),this._interceptControlDown=T0.bind(this),this._interceptControlUp=w0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mc),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Ve:i>Math.PI&&(i-=Ve),n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Me.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<f0?this.object.lookAt(this.target):(gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane(gc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pr||this._lastTargetPosition.distanceToSquared(this.target)>pr?(this.dispatchEvent(mc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Me.copy(n).sub(this.target);let a=Me.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,a=e-i.top,r=i.width,o=i.height;this._mouse.x=n/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function m0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function g0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function _0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zc),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function x0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case In.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Qt.DOLLY;break;case In.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Qt.ROTATE}break;case In.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Yo)}function v0(s){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function M0(s){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(s.preventDefault(),this.dispatchEvent(Yo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Zc))}function y0(s){this.enabled!==!1&&this._handleKeyDown(s)}function S0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Dn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Qt.TOUCH_ROTATE;break;case Dn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Dn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Qt.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Yo)}function b0(s){switch(this._trackPointer(s),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Qt.NONE}}function E0(s){this.enabled!==!1&&s.preventDefault()}function T0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function w0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class gi{constructor(t,e,i,n,a="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),gi.nextNameID=gi.nextNameID||0,this.$name.id=`lil-gui-name-${++gi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class A0 extends gi{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function go(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const C0={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:go,toHexString:go},ws={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},R0={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,t,e=1){const i=ws.fromHexString(s);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([s,t,e],i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return ws.toHexString(n)}},P0={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const i=ws.fromHexString(s);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:s,g:t,b:e},i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return ws.toHexString(n)}},D0=[C0,ws,R0,P0];function L0(s){return D0.find(t=>t.match(s))}class I0 extends gi{constructor(t,e,i,n){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=L0(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=go(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class mr extends gi{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class U0 extends gi{constructor(t,e,i,n,a,r){super(t,e,i,"lil-number"),this._initInput(),this.min(n),this.max(a);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+v),this.$input.value=this.getValue())},n=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},a=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))};let r=!1,o,l,c,h,u;const f=5,p=v=>{o=v.clientX,l=c=v.clientY,r=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",x)},_=v=>{if(r){const b=v.clientX-o,E=v.clientY-l;Math.abs(E)>f?(v.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>f&&x()}if(!r){const b=v.clientY-c;u-=b*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",x)},m=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(d,v,b,E,w)=>(d-v)/(b-v)*(w-E)+E,e=d=>{const v=this.$slider.getBoundingClientRect();let b=t(d,v.left,v.right,this._min,this._max);this._snapClampSetValue(b)},i=d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",a)},n=d=>{e(d.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a)};let r=!1,o,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),r=!1},h=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,r=!0):c(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=d=>{if(r){const v=d.touches[0].clientX-o,b=d.touches[0].clientY-l;Math.abs(v)>Math.abs(b)?c(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else d.preventDefault(),e(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),_=400;let x;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const b=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(p,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class N0 extends gi{constructor(t,e,i,n){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class F0 extends gi{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var O0=`.lil-gui {
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
}`;function B0(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let _c=!1;class qo{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:a="Controls",closeFolders:r=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!_c&&o&&(B0(O0),_c=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=r}add(t,e,i,n,a){if(Object(i)===i)return new N0(this,t,e,i);const r=t[e];switch(typeof r){case"number":return new U0(this,t,e,i,n,a);case"boolean":return new A0(this,t,e);case"string":return new F0(this,t,e);case"function":return new mr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,i=1){return new I0(this,t,e,i)}addFolder(t){const e=new qo({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof mr||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof mr)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const gr=[{date:"1940-08-01",name:"Jupiter-Saturn Triple Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"1961-02-15",name:"Great Conjunction (0.22° apart)",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"1962-02-05",name:"Five Planet Alignment + Eclipse",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn"]},{date:"1965-10-21",name:"Comet Ikeya-Seki (brightest of century)",type:"comet",planets:[]},{date:"1981-03-06",name:"Jupiter-Saturn Triple Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"1986-02-09",name:"Halley's Comet Perihelion",type:"comet",planets:[]},{date:"1996-03-25",name:"Comet Hyakutake Close Pass",type:"comet",planets:[]},{date:"1997-04-01",name:"Comet Hale-Bopp Perihelion",type:"comet",planets:[]},{date:"2003-08-27",name:"Mars Closest in 60,000 Years",type:"approach",planets:["Mars"]},{date:"2004-06-08",name:"Venus Transit",type:"transit",planets:["Venus"]},{date:"2012-06-06",name:"Venus Transit (last until 2117)",type:"transit",planets:["Venus"]},{date:"2016-08-27",name:"Venus-Jupiter Conjunction (4 arcmin)",type:"conjunction",planets:["Venus","Jupiter"]},{date:"2018-07-31",name:"Mars Close Opposition",type:"approach",planets:["Mars"]},{date:"2020-12-21",name:'Great Conjunction (6 arcmin) "Christmas Star"',type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2025-08-12",name:"Venus-Jupiter Conjunction",type:"conjunction",planets:["Venus","Jupiter"]},{date:"2025-08-18",name:"Six Planet Parade",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn","Uranus"]},{date:"2029-04-13",name:"Asteroid Apophis Close Flyby",type:"approach",planets:[]},{date:"2034-04-01",name:"Five Planet Alignment",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn"]},{date:"2035-09-15",name:"Mars Close Opposition",type:"approach",planets:["Mars"]},{date:"2040-09-08",name:"Five Planets Within 7° (rarest in 800 years)",type:"alignment",planets:["Mercury","Venus","Mars","Jupiter","Saturn"]},{date:"2060-04-08",name:"Great Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2061-07-28",name:"Halley's Comet Returns",type:"comet",planets:[]},{date:"2065-11-22",name:"Venus Occults Jupiter",type:"occultation",planets:["Venus","Jupiter"]},{date:"2080-03-15",name:"Great Conjunction (6 arcmin)",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2119-07-15",name:"Great Conjunction",type:"conjunction",planets:["Jupiter","Saturn"]},{date:"2123-09-14",name:"Venus Occults Jupiter",type:"occultation",planets:["Venus","Jupiter"]}],_r={conjunction:"#ffdd44",alignment:"#4488ff",approach:"#ff8844",comet:"#44ddff",transit:"#aa66ff",occultation:"#aa66ff"};class z0{constructor(){this.audioContext=null,this.isInitialized=!1,this.isMuted=!0,this.masterVolume=.5,this.ambientVolume=.3,this.uiVolume=.5,this.masterGain=null,this.ambientGain=null,this.uiGain=null,this.ambientOscillators=[],this.ambientNoiseNode=null,this.planetFrequencies={Sun:55,Jupiter:82,Saturn:98,Uranus:110,Neptune:123,Earth:196,Venus:220,Mars:247,Mercury:330,Moon:392,Pluto:440,Ceres:523,Comet:587,default:262},this.currentFocusedBody=null,this.createAudioPrompt()}createAudioPrompt(){this.audioPrompt=document.createElement("div"),this.audioPrompt.id="audio-prompt",this.audioPrompt.innerHTML=`
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
    `,this.audioPrompt.addEventListener("mouseenter",()=>{this.audioPrompt.style.borderColor="rgba(100, 150, 255, 0.6)",this.audioPrompt.style.background="rgba(20, 20, 50, 0.95)"}),this.audioPrompt.addEventListener("mouseleave",()=>{this.audioPrompt.style.borderColor="rgba(100, 150, 255, 0.3)",this.audioPrompt.style.background="rgba(10, 10, 30, 0.9)"}),this.audioPrompt.addEventListener("click",()=>{this.enableAudio()}),document.body.appendChild(this.audioPrompt)}async enableAudio(){if(this.isInitialized){this.unmute();return}try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.setupGainNodes(),this.startAmbientSound(),this.isInitialized=!0,this.isMuted=!1,this.audioPrompt.style.opacity="0",setTimeout(()=>{this.audioPrompt.style.display="none"},300),this.playWelcomeChime()}catch(t){console.warn("Failed to initialize audio:",t)}}setupGainNodes(){this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.audioContext.destination),this.ambientGain=this.audioContext.createGain(),this.ambientGain.gain.value=this.ambientVolume,this.ambientGain.connect(this.masterGain),this.uiGain=this.audioContext.createGain(),this.uiGain.gain.value=this.uiVolume,this.uiGain.connect(this.masterGain)}startAmbientSound(){const t=this.audioContext.createOscillator();t.type="sine",t.frequency.value=40;const e=this.audioContext.createGain();e.gain.value=.15,t.connect(e),e.connect(this.ambientGain),t.start(),this.ambientOscillators.push({osc:t,gain:e});const i=this.audioContext.createOscillator();i.type="sine",i.frequency.value=20;const n=this.audioContext.createGain();n.gain.value=.1,i.connect(n),n.connect(this.ambientGain),i.start(),this.ambientOscillators.push({osc:i,gain:n});const a=this.audioContext.createOscillator();a.type="sine",a.frequency.value=2e3;const r=this.audioContext.createGain();r.gain.value=.01;const o=this.audioContext.createOscillator();o.type="sine",o.frequency.value=.05;const l=this.audioContext.createGain();l.gain.value=300,o.connect(l),l.connect(a.frequency),o.start(),a.connect(r),r.connect(this.ambientGain),a.start(),this.ambientOscillators.push({osc:a,gain:r,lfo:o}),this.createSpaceNoise()}createSpaceNoise(){const t=this.audioContext.sampleRate*2,e=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),i=e.getChannelData(0);for(let o=0;o<t;o++)i[o]=Math.random()*2-1;this.ambientNoiseNode=this.audioContext.createBufferSource(),this.ambientNoiseNode.buffer=e,this.ambientNoiseNode.loop=!0;const n=this.audioContext.createBiquadFilter();n.type="highpass",n.frequency.value=8e3;const a=this.audioContext.createBiquadFilter();a.type="lowpass",a.frequency.value=12e3;const r=this.audioContext.createGain();r.gain.value=.02,this.ambientNoiseNode.connect(n),n.connect(a),a.connect(r),r.connect(this.ambientGain),this.ambientNoiseNode.start()}playWelcomeChime(){const t=this.audioContext.currentTime;[261.63,329.63,392,523.25].forEach((i,n)=>{this.playNote(i,t+n*.15,.4,.15)})}playNote(t,e,i,n=.2){if(!this.isInitialized||this.isMuted)return;const a=this.audioContext.createOscillator();a.type="sine",a.frequency.value=t;const r=this.audioContext.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(n,e+.02),r.gain.exponentialRampToValueAtTime(.001,e+i),a.connect(r),r.connect(this.uiGain),a.start(e),a.stop(e+i+.1)}playSelectSound(t){if(!this.isInitialized||this.isMuted)return;const e=this.planetFrequencies[t]||this.planetFrequencies.default,i=this.audioContext.currentTime;this.playNote(e,i,.3,.25),this.playNote(e*1.5,i+.05,.25,.1),this.playNote(e*2,i+.02,.15,.08)}playFocusSound(t){if(!this.isInitialized||this.isMuted||this.currentFocusedBody===t)return;this.currentFocusedBody=t;const e=this.planetFrequencies[t]||this.planetFrequencies.default,i=this.audioContext.currentTime;this.playWhoosh(i,.5);const n=this.audioContext.createOscillator();n.type="sine",n.frequency.setValueAtTime(e*.5,i),n.frequency.exponentialRampToValueAtTime(e,i+.3);const a=this.audioContext.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.15,i+.1),a.gain.exponentialRampToValueAtTime(.001,i+.8),n.connect(a),a.connect(this.uiGain),n.start(i),n.stop(i+1),setTimeout(()=>{this.isMuted||(this.playNote(e,this.audioContext.currentTime,.5,.2),this.playNote(e*1.25,this.audioContext.currentTime+.1,.4,.1))},400)}playWhoosh(t,e){const i=this.audioContext.sampleRate*e,n=this.audioContext.createBuffer(1,i,this.audioContext.sampleRate),a=n.getChannelData(0);for(let c=0;c<i;c++)a[c]=Math.random()*2-1;const r=this.audioContext.createBufferSource();r.buffer=n;const o=this.audioContext.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(200,t),o.frequency.exponentialRampToValueAtTime(2e3,t+e*.7),o.frequency.exponentialRampToValueAtTime(500,t+e),o.Q.value=2;const l=this.audioContext.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.15,t+e*.2),l.gain.exponentialRampToValueAtTime(.001,t+e),r.connect(o),o.connect(l),l.connect(this.uiGain),r.start(t),r.stop(t+e)}playHoverSound(){if(!this.isInitialized||this.isMuted)return;const t=this.audioContext.currentTime;this.playNote(800,t,.08,.05)}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&this.masterGain.gain.linearRampToValueAtTime(this.masterVolume,this.audioContext.currentTime+.1)}setAmbientVolume(t){this.ambientVolume=Math.max(0,Math.min(1,t)),this.ambientGain&&this.ambientGain.gain.linearRampToValueAtTime(this.ambientVolume,this.audioContext.currentTime+.1)}setUIVolume(t){this.uiVolume=Math.max(0,Math.min(1,t)),this.uiGain&&this.uiGain.gain.linearRampToValueAtTime(this.uiVolume,this.audioContext.currentTime+.1)}mute(){this.isMuted=!0,this.masterGain&&this.masterGain.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+.1)}unmute(){if(!this.isInitialized){this.enableAudio();return}this.isMuted=!1,this.masterGain&&this.masterGain.gain.linearRampToValueAtTime(this.masterVolume,this.audioContext.currentTime+.1)}toggleMute(){return this.isMuted?this.unmute():this.mute(),this.isMuted}getMuteState(){return this.isMuted}dispose(){if(this.ambientOscillators.forEach(({osc:t,lfo:e})=>{try{t.stop(),e&&e.stop()}catch{}}),this.ambientNoiseNode)try{this.ambientNoiseNode.stop()}catch{}this.audioContext&&this.audioContext.close(),this.audioPrompt&&this.audioPrompt.parentNode&&this.audioPrompt.parentNode.removeChild(this.audioPrompt)}}class V0{constructor(t,e,i,n,a,r=[],o=null){this.camera=t,this.renderer=e,this.scene=i,this.planets=n,this.dwarfPlanets=r,this.sun=a,this.comet=o,this.settings={orbitSpeed:1,showLabels:!0,showOrbits:!0,showMinimap:!0,paused:!1,focusedPlanet:"None",audioMuted:!0,masterVolume:.5,ambientVolume:.3,uiVolume:.5},this.audioSystem=new z0,this.simulatedTime=0,this.startDate=new Date(a0.simulationStartDate),this.currentJulianDate=fc(this.startDate),this.raycaster=new Hu,this.mouse=new ht,this.hoveredObject=null,this.selectedObject=null,this.selectedPlanet=null,this.isAnimating=!1,this.animationStart=null,this.animationDuration=1500,this.startPosition=new R,this.startTarget=new R,this.endPosition=new R,this.endTarget=new R,this.labels=[],this.outlineMaterial=new $n({color:65535,side:Ae,transparent:!0,opacity:.5}),this.orbitControls=null,this.gui=null,this.minimapCanvas=null,this.minimapCtx=null,this.shownEventNotifications=new Set,this.activeNotifications=[],this.eventVisuals={activeEvents:new Map,conjunctionLines:[],planetGlows:new Map,originalScales:new Map},this.init()}init(){this.setupOrbitControls(),this.setupGUI(),this.setupEventListeners(),this.setupKeyboardShortcuts(),this.createLabels(),this.createTimeDisplay(),this.createMinimap(),this.createNotificationContainer()}setupOrbitControls(){this.orbitControls=new p0(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.dampingFactor=.05,this.orbitControls.screenSpacePanning=!1,this.orbitControls.minDistance=2,this.orbitControls.maxDistance=800,this.orbitControls.maxPolarAngle=Math.PI,this.camera.position.set(30,20,50),this.orbitControls.target.set(0,0,0),this.orbitControls.update()}setupGUI(){this.gui=new qo({title:"Solar System Controls"});const t=this.gui.addFolder("Simulation");t.add(this.settings,"orbitSpeed",0,5,.1).name("Orbit Speed"),t.add(this.settings,"paused").name("Paused (Space)");const e=this.gui.addFolder("Display");e.add(this.settings,"showLabels").name("Show Labels").onChange(r=>this.toggleLabels(r)),e.add(this.settings,"showOrbits").name("Show Orbits").onChange(r=>this.toggleOrbits(r)),e.add(this.settings,"showMinimap").name("Show Mini-map").onChange(r=>this.toggleMinimap(r));const i=this.gui.addFolder("Camera"),n=["Sun",...this.planets.map(r=>r.data.name),...this.dwarfPlanets.map(r=>r.data.name),...this.comet?["Halley's Comet"]:[]];i.add(this.settings,"focusedPlanet",["None",...n]).name("Focus On").onChange(r=>this.focusByName(r));const a=this.gui.addFolder("Audio");a.add(this.settings,"audioMuted").name("Muted (M)").onChange(r=>{r?this.audioSystem.mute():this.audioSystem.unmute()}),a.add(this.settings,"masterVolume",0,1,.05).name("Master Volume").onChange(r=>this.audioSystem.setMasterVolume(r)),a.add(this.settings,"ambientVolume",0,1,.05).name("Ambient Volume").onChange(r=>this.audioSystem.setAmbientVolume(r)),a.add(this.settings,"uiVolume",0,1,.05).name("UI Sounds").onChange(r=>this.audioSystem.setUIVolume(r)),t.open(),e.open(),i.open(),a.open()}setupEventListeners(){this.renderer.domElement.addEventListener("mousemove",t=>this.onMouseMove(t)),this.renderer.domElement.addEventListener("click",t=>this.onClick(t)),document.getElementById("close-panel").addEventListener("click",()=>this.closeInfoPanel()),window.addEventListener("resize",()=>this.onWindowResize())}setupKeyboardShortcuts(){window.addEventListener("keydown",t=>{var e,i;if(t.target.tagName!=="INPUT")switch(t.key){case"0":this.focusByName("Sun");break;case"1":this.focusByName("Mercury");break;case"2":this.focusByName("Venus");break;case"3":this.focusByName("Earth");break;case"4":this.focusByName("Mars");break;case"5":this.focusByName("Jupiter");break;case"6":this.focusByName("Saturn");break;case"7":this.focusByName("Uranus");break;case"8":this.focusByName("Neptune");break;case"p":case"P":this.focusByName("Pluto");break;case"c":case"C":this.focusByName("Ceres");break;case"h":case"H":this.focusByName("Halley's Comet");break;case" ":t.preventDefault(),this.settings.paused=!this.settings.paused,(e=this.gui.controllersRecursive().find(n=>n.property==="paused"))==null||e.updateDisplay();break;case"r":case"R":this.resetCamera();break;case"Escape":this.closeInfoPanel();break;case"m":case"M":this.settings.audioMuted=this.audioSystem.toggleMute(),(i=this.gui.controllersRecursive().find(n=>n.property==="audioMuted"))==null||i.updateDisplay();break}})}focusByName(t){var i;if(this.settings.focusedPlanet=t,(i=this.gui.controllersRecursive().find(n=>n.property==="focusedPlanet"))==null||i.updateDisplay(),t==="None"){this.resetCamera();return}if(this.audioSystem.playFocusSound(t),t==="Sun"){this.focusOnObject(this.sun.getMesh()),this.showSunInfo();return}if(t==="Halley's Comet"&&this.comet){this.focusOnComet(),this.showCometInfo();return}let e=this.planets.find(n=>n.data.name===t);e||(e=this.dwarfPlanets.find(n=>n.data.name===t)),e&&(this.focusOnPlanet(e),this.showPlanetInfo(e))}createTimeDisplay(){const t=document.getElementById("app"),e=document.createElement("div");e.id="time-display",e.innerHTML=`
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
    `,t.appendChild(e),document.getElementById("time-slider").addEventListener("input",n=>{this.simulatedTime=parseFloat(n.target.value)}),this.createEventMarkers()}createEventMarkers(){const t=document.getElementById("event-markers"),e=document.getElementById("event-tooltip"),i=-36500,n=36500,a=n-i;gr.forEach(r=>{const o=new Date(r.date),l=Math.floor((o-this.startDate)/(1e3*60*60*24));if(l<i||l>n)return;const c=(l-i)/a*100,h=document.createElement("div");h.className="event-marker",h.style.left=`${c}%`,h.style.backgroundColor=_r[r.type]||"#ffffff",h.dataset.date=r.date,h.dataset.name=r.name,h.dataset.days=l,h.addEventListener("mouseenter",u=>{const f=o.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});e.innerHTML=`<strong>${f}</strong><br>${r.name}`,e.style.display="block";const p=h.getBoundingClientRect(),_=e.getBoundingClientRect(),x=t.getBoundingClientRect();let m=p.left+p.width/2-_.width/2;m=Math.max(x.left,Math.min(m,x.right-_.width)),e.style.left=`${m}px`,e.style.top=`${p.top-_.height-8}px`}),h.addEventListener("mouseleave",()=>{e.style.display="none"}),h.addEventListener("click",()=>{this.simulatedTime=l;const u=document.getElementById("time-slider");u&&(u.value=l),this.audioSystem.playSelectSound("event")}),t.appendChild(h)})}createNotificationContainer(){const t=document.getElementById("app"),e=document.createElement("div");e.id="event-notifications",t.appendChild(e)}checkEventProximity(){gr.forEach(e=>{const i=new Date(e.date),n=Math.floor((i-this.startDate)/(1e3*60*60*24));if(Math.abs(this.simulatedTime-n)<=30){const r=`${e.date}-${e.name}`;this.shownEventNotifications.has(r)||(this.shownEventNotifications.add(r),this.showEventNotification(e,n))}})}showEventNotification(t,e){const i=document.getElementById("event-notifications");if(!i)return;const a=new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),r=_r[t.type]||"#88ccff",o=document.createElement("div");o.className="event-notification",o.innerHTML=`
      <div class="event-notification-icon" style="background-color: ${r};"></div>
      <div class="event-notification-content">
        <div class="event-notification-title">${t.name}</div>
        <div class="event-notification-date">${a}</div>
      </div>
      <div class="event-notification-actions">
        <button class="event-notification-jump">Jump to Date</button>
        <button class="event-notification-close">&times;</button>
      </div>
    `,i.appendChild(o),this.activeNotifications.push(o),requestAnimationFrame(()=>{o.classList.add("visible")}),o.querySelector(".event-notification-jump").addEventListener("click",()=>{this.simulatedTime=e;const h=document.getElementById("time-slider");h&&(h.value=e),this.audioSystem.playSelectSound("event"),this.dismissNotification(o)}),o.querySelector(".event-notification-close").addEventListener("click",()=>{this.dismissNotification(o)}),setTimeout(()=>{this.dismissNotification(o)},6e3)}dismissNotification(t){!t||!t.parentNode||(t.classList.remove("visible"),t.classList.add("hiding"),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t);const e=this.activeNotifications.indexOf(t);e>-1&&this.activeNotifications.splice(e,1)},300))}updateEventVisuals(t){const i=new Set;gr.forEach(n=>{if(!n.planets||n.planets.length===0)return;const a=new Date(n.date),r=Math.floor((a-this.startDate)/(1e3*60*60*24)),o=Math.abs(this.simulatedTime-r);if(o<=30){const l=`${n.date}-${n.name}`;i.add(l);const c=1-o/30;this.eventVisuals.activeEvents.has(l)||this.createEventVisuals(n,l),this.updateEventVisualIntensity(n,l,c,t)}});for(const[n,a]of this.eventVisuals.activeEvents)i.has(n)||this.removeEventVisuals(n)}createEventVisuals(t,e){const i={event:t,lines:[],glows:[]},n=new Et(_r[t.type]||"#ffffff");if(t.type==="conjunction"||t.type==="occultation"){if(t.planets.length>=2){const a=new Ss({color:n,transparent:!0,opacity:0,linewidth:2,blending:Se}),r=new le,o=new Float32Array(6);r.setAttribute("position",new se(o,3));const l=new Sa(r,a);l.frustumCulled=!1,this.scene.add(l),i.lines.push(l)}t.planets.forEach(a=>{const r=this.createPlanetEventGlow(a,n);r&&i.glows.push({planetName:a,glow:r})})}else if(t.type==="approach")t.planets.forEach(a=>{const r=this.createPlanetEventGlow(a,n,2);r&&i.glows.push({planetName:a,glow:r});const o=this.getPlanetByName(a);o&&o.planetMesh&&(this.eventVisuals.originalScales.has(a)||this.eventVisuals.originalScales.set(a,o.planetMesh.scale.clone()))});else if(t.type==="alignment"){const a=t.planets.map(r=>this.getPlanetByName(r)).filter(r=>r);for(let r=0;r<a.length-1;r++){const o=new Ss({color:n,transparent:!0,opacity:0,linewidth:1,blending:Se}),l=new le,c=new Float32Array(6);l.setAttribute("position",new se(c,3));const h=new Sa(l,o);h.frustumCulled=!1,h.userData.planetIndices=[r,r+1],h.userData.planetNames=[t.planets[r],t.planets[r+1]],this.scene.add(h),i.lines.push(h)}t.planets.forEach(r=>{const o=this.createPlanetEventGlow(r,n,.6);o&&i.glows.push({planetName:r,glow:o})})}else t.type==="transit"&&t.planets.forEach(a=>{const r=this.createPlanetEventGlow(a,n,1.5);r&&i.glows.push({planetName:a,glow:r})});this.eventVisuals.activeEvents.set(e,i)}createPlanetEventGlow(t,e,i=1){const n=this.getPlanetByName(t);if(!n||!n.planetMesh)return null;const a=document.createElement("canvas");a.width=128,a.height=128;const r=a.getContext("2d"),o=Math.floor(e.r*255),l=Math.floor(e.g*255),c=Math.floor(e.b*255),h=r.createRadialGradient(64,64,0,64,64,64);h.addColorStop(0,`rgba(${o}, ${l}, ${c}, 0.8)`),h.addColorStop(.3,`rgba(${o}, ${l}, ${c}, 0.4)`),h.addColorStop(.6,`rgba(${o}, ${l}, ${c}, 0.15)`),h.addColorStop(1,`rgba(${o}, ${l}, ${c}, 0)`),r.fillStyle=h,r.fillRect(0,0,128,128);const u=new Ke(a),f=new Gn({map:u,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),p=new ys(f),_=n.data.radius*4*i;return p.scale.set(_,_,1),p.userData.baseSize=_,p.userData.intensityMultiplier=i,n.planetMesh.add(p),p}updateEventVisualIntensity(t,e,i,n){const a=this.eventVisuals.activeEvents.get(e);if(!a)return;const r=.7+.3*Math.sin(n*3),o=i*r;if((t.type==="conjunction"||t.type==="occultation")&&a.lines.length>0){const l=this.getPlanetByName(t.planets[0]),c=this.getPlanetByName(t.planets[1]);if(l&&c){const h=l.getWorldPosition(),u=c.getWorldPosition(),f=a.lines[0],p=f.geometry.attributes.position.array;p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=u.x,p[4]=u.y,p[5]=u.z,f.geometry.attributes.position.needsUpdate=!0,f.material.opacity=o*.6}}t.type==="alignment"&&a.lines.forEach(l=>{const c=l.userData.planetNames;if(c&&c.length===2){const h=this.getPlanetByName(c[0]),u=this.getPlanetByName(c[1]);if(h&&u){const f=h.getWorldPosition(),p=u.getWorldPosition(),_=l.geometry.attributes.position.array;_[0]=f.x,_[1]=f.y,_[2]=f.z,_[3]=p.x,_[4]=p.y,_[5]=p.z,l.geometry.attributes.position.needsUpdate=!0,l.material.opacity=o*.3}}}),a.glows.forEach(({planetName:l,glow:c})=>{if(c&&c.material){const h=o*(c.userData.intensityMultiplier||1);c.material.opacity=h*.8;const u=c.userData.baseSize||1,f=1+.15*Math.sin(n*4);c.scale.set(u*f,u*f,1)}}),t.type==="approach"&&t.planets.forEach(l=>{const c=this.getPlanetByName(l);if(c&&c.planetMesh){const h=this.eventVisuals.originalScales.get(l);if(h){const u=1+.2*i;c.planetMesh.scale.copy(h).multiplyScalar(u)}}})}removeEventVisuals(t){const e=this.eventVisuals.activeEvents.get(t);e&&(e.lines.forEach(i=>{this.scene.remove(i),i.geometry.dispose(),i.material.dispose()}),e.glows.forEach(({planetName:i,glow:n})=>{n&&n.parent&&(n.parent.remove(n),n.material.map&&n.material.map.dispose(),n.material.dispose())}),e.event.type==="approach"&&e.event.planets.forEach(i=>{const n=this.getPlanetByName(i),a=this.eventVisuals.originalScales.get(i);n&&n.planetMesh&&a&&n.planetMesh.scale.copy(a)}),this.eventVisuals.activeEvents.delete(t))}getPlanetByName(t){let e=this.planets.find(i=>i.data.name===t);return e||(e=this.dwarfPlanets.find(i=>i.data.name===t)),e}updateTimeDisplay(t){this.settings.paused||(this.simulatedTime+=t*this.settings.orbitSpeed*30);const e=new Date(this.startDate);e.setDate(e.getDate()+this.simulatedTime),this.currentJulianDate=fc(e);const i=document.getElementById("sim-date");if(i){const a={year:"numeric",month:"long",day:"numeric"};i.textContent=e.toLocaleDateString("en-US",a)}const n=document.getElementById("time-slider");n&&!n.matches(":active")&&(n.value=Math.max(-36500,Math.min(36500,this.simulatedTime))),this.checkEventProximity()}getJulianDate(){return this.currentJulianDate}createMinimap(){const t=document.getElementById("app"),e=document.createElement("div");e.id="minimap-container",e.innerHTML=`
      <div class="minimap-title">Top View</div>
      <canvas id="minimap" width="200" height="200"></canvas>
    `,t.appendChild(e),this.minimapCanvas=document.getElementById("minimap"),this.minimapCtx=this.minimapCanvas.getContext("2d")}updateMinimap(){if(!this.settings.showMinimap||!this.minimapCtx)return;const t=this.minimapCtx,e=this.minimapCanvas.width,i=this.minimapCanvas.height,n=e/2,a=i/2,r=35*ne,o=(e/2-10)/r;t.fillStyle="rgba(0, 0, 20, 0.9)",t.fillRect(0,0,e,i),t.strokeStyle="rgba(100, 100, 150, 0.3)",t.lineWidth=.5,this.planets.forEach(h=>{const u=h.data.distance*o;t.beginPath(),t.arc(n,a,u,0,Math.PI*2),t.stroke()}),t.fillStyle="#ffdd44",t.beginPath(),t.arc(n,a,4,0,Math.PI*2),t.fill(),this.planets.forEach(h=>{const u=h.getWorldPosition(),f=n+u.x*o,p=a+u.z*o;t.fillStyle="#"+h.data.color.toString(16).padStart(6,"0"),t.beginPath(),t.arc(f,p,3,0,Math.PI*2),t.fill(),h.data.distance<20&&(t.fillStyle="rgba(255, 255, 255, 0.7)",t.font="8px sans-serif",t.fillText(h.data.name[0],f+4,p+3))}),this.dwarfPlanets.forEach(h=>{const u=h.getWorldPosition(),f=n+u.x*o,p=a+u.z*o;t.fillStyle="rgba(150, 150, 150, 0.8)",t.beginPath(),t.arc(f,p,2,0,Math.PI*2),t.fill()});const l=n+this.orbitControls.target.x*o,c=a+this.orbitControls.target.z*o;t.strokeStyle="#00ffff",t.lineWidth=1,t.beginPath(),t.arc(l,c,6,0,Math.PI*2),t.stroke()}toggleMinimap(t){const e=document.getElementById("minimap-container");e&&(e.style.display=t?"block":"none")}createLabels(){const t=document.getElementById("app"),e=this.createLabel("Sun");if(this.labels.push({element:e,object:this.sun.getMesh(),offset:new R(0,3,0)}),t.appendChild(e),this.planets.forEach(i=>{const n=this.createLabel(i.data.name);this.labels.push({element:n,planet:i,offset:new R(0,i.data.radius+.5,0)}),t.appendChild(n),i.moons.forEach(a=>{const r=this.createLabel(a.data.name);this.labels.push({element:r,moonMesh:a.mesh,offset:new R(0,a.data.radius+.2,0)}),t.appendChild(r)})}),this.dwarfPlanets.forEach(i=>{const n=this.createLabel(i.data.name);n.classList.add("dwarf-planet-label"),this.labels.push({element:n,planet:i,offset:new R(0,i.data.radius+.3,0)}),t.appendChild(n)}),this.comet){const i=this.createLabel("Halley's Comet");i.style.cursor="pointer",i.addEventListener("click",()=>{this.selectCometFromLabel()}),this.labels.push({element:i,comet:this.comet,offset:new R(0,3,0)}),t.appendChild(i)}}createLabel(t){const e=document.createElement("div");return e.className="planet-label",e.textContent=t,e}updateLabels(){this.settings.showLabels&&this.labels.forEach(t=>{let e=new R;t.planet?(e=t.planet.getWorldPosition(),e.add(t.offset)):t.moonMesh?(t.moonMesh.getWorldPosition(e),e.add(t.offset)):t.comet?(e=t.comet.getWorldPosition(),e.add(t.offset)):t.object&&(t.object.getWorldPosition(e),e.add(t.offset));const i=e.clone().project(this.camera);if(i.z>1){t.element.style.display="none";return}const n=(i.x*.5+.5)*window.innerWidth,a=(-i.y*.5+.5)*window.innerHeight;t.element.style.display="block",t.element.style.left=`${n}px`,t.element.style.top=`${a}px`})}toggleLabels(t){this.labels.forEach(e=>{e.element.style.display=t?"block":"none"})}toggleOrbits(t){[...this.planets,...this.dwarfPlanets].forEach(e=>{e.orbitLine&&(e.orbitLine.visible=t)})}onMouseMove(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.getClickableObjects(),i=this.raycaster.intersectObjects(e);if(i.length>0){const n=i[0].object;this.hoveredObject!==n&&(this.removeHighlight(),this.hoveredObject=n,this.addHighlight(n),this.renderer.domElement.style.cursor="pointer",this.audioSystem.playHoverSound())}else this.removeHighlight(),this.hoveredObject=null,this.renderer.domElement.style.cursor="default"}onClick(t){if(this.isAnimating)return;this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.getClickableObjects(),i=this.raycaster.intersectObjects(e);if(i.length>0){const n=i[0].object;this.selectObject(n)}}getClickableObjects(){const t=[this.sun.sunMesh];return[...this.planets,...this.dwarfPlanets].forEach(e=>{t.push(...e.getClickableObjects())}),this.comet&&t.push(...this.comet.getClickableObjects()),t}addHighlight(t){if(!t.userData.clickable)return;const e=t.geometry.clone(),i=new ie(e,this.outlineMaterial);i.scale.multiplyScalar(1.1),i.name="highlight",t.add(i)}removeHighlight(){if(this.hoveredObject){const t=this.hoveredObject.getObjectByName("highlight");t&&(this.hoveredObject.remove(t),t.geometry.dispose())}}selectObject(t){this.selectedObject=t;const e=t.userData.name||"default";this.audioSystem.playSelectSound(e);let i=null;if(t.userData.name==="Sun"){this.showSunInfo(),this.focusOnObject(this.sun.getMesh()),this.audioSystem.playFocusSound("Sun");return}if(i=[...this.planets,...this.dwarfPlanets].find(n=>n.data.name===t.userData.name),i){this.showPlanetInfo(i),this.focusOnPlanet(i),this.audioSystem.playFocusSound(i.data.name);return}for(const n of[...this.planets,...this.dwarfPlanets]){const a=n.moons.find(r=>r.data.name===t.userData.name);if(a){this.showMoonInfo(a,n),this.focusOnMoon(a),this.audioSystem.playFocusSound(a.data.name);return}}if(t.userData.isComet&&this.comet){this.showCometInfo(),this.focusOnComet(),this.audioSystem.playFocusSound("Halley's Comet");return}}showSunInfo(){const t=document.getElementById("info-panel"),e=document.getElementById("planet-name"),i=document.getElementById("planet-facts");e.textContent="Sun";let n='<div class="planet-icon sun-icon"></div>';const a=this.sun.data.facts;for(const[r,o]of Object.entries(a)){const l=r.charAt(0).toUpperCase()+r.slice(1).replace(/([A-Z])/g," $1");n+=`<p><strong>${l}:</strong> ${o}</p>`}i.innerHTML=n,t.classList.remove("hidden")}showPlanetInfo(t){this.selectedPlanet=t;const e=document.getElementById("info-panel"),i=document.getElementById("planet-name"),n=document.getElementById("planet-facts");i.textContent=t.data.name;let a=`<div class="planet-icon" style="background: #${t.data.color.toString(16).padStart(6,"0")};"></div>`;const r=t.getDistanceFromSun(),o=(r*1495978707e-1).toLocaleString();a+=`<div class="distance-indicator">
      <p><strong>Distance from Sun:</strong></p>
      <p>${r.toFixed(2)} AU (${o} km)</p>
    </div>`;const l=t.getOrbitalPosition();a+=`<p><strong>Orbital Position:</strong> ${l.toFixed(1)}°</p>`;const c=t.data.facts;for(const[h,u]of Object.entries(c)){const f=h.charAt(0).toUpperCase()+h.slice(1).replace(/([A-Z])/g," $1");a+=`<p><strong>${f}:</strong> ${u}</p>`}if(t.data.earthComparison){const h=t.data.earthComparison;a+=`<div class="earth-comparison">
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
    </div>`,n+=`<p><strong>Last Perihelion:</strong> ${this.comet.data.lastPerihelion.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>`,n+=`<p><strong>Next Perihelion:</strong> ${this.comet.data.nextPerihelion.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>`;const a=this.comet.data.facts;if(a)for(const[r,o]of Object.entries(a)){const l=r.charAt(0).toUpperCase()+r.slice(1).replace(/([A-Z])/g," $1");n+=`<p><strong>${l}:</strong> ${o}</p>`}i.innerHTML=n,t.classList.remove("hidden")}focusOnComet(){if(!this.comet)return;const t=this.comet.getWorldPosition();this.animateCameraTo(t,15)}selectCometFromLabel(){this.comet&&(this.audioSystem.playSelectSound("Halley's Comet"),this.showCometInfo(),this.focusOnComet(),this.audioSystem.playFocusSound("Halley's Comet"))}closeInfoPanel(){document.getElementById("info-panel").classList.add("hidden"),this.selectedObject=null,this.selectedPlanet=null}focusOnPlanet(t){const e=t.getWorldPosition(),i=t.data.radius*5+2;this.animateCameraTo(e,i)}focusOnMoon(t){const e=new R;t.mesh.getWorldPosition(e),this.animateCameraTo(e,t.data.radius*8+1)}focusOnObject(t){const e=new R;t.getWorldPosition(e);const n=new Hi().setFromObject(t).getSize(new R),a=Math.max(n.x,n.y,n.z)*3;this.animateCameraTo(e,a)}animateCameraTo(t,e){this.isAnimating=!0,this.animationStart=performance.now(),this.startPosition.copy(this.camera.position),this.startTarget.copy(this.orbitControls.target),this.endTarget.copy(t);const i=new R().subVectors(this.camera.position,this.orbitControls.target).normalize();this.endPosition.copy(t).add(i.multiplyScalar(e))}resetCamera(){var t;this.settings.focusedPlanet="None",(t=this.gui.controllersRecursive().find(e=>e.property==="focusedPlanet"))==null||t.updateDisplay(),this.closeInfoPanel(),this.animateCameraTo(new R(0,0,0),60)}updateCameraAnimation(){if(!this.isAnimating)return;const t=performance.now()-this.animationStart,e=Math.min(t/this.animationDuration,1),i=1-Math.pow(1-e,3);this.camera.position.lerpVectors(this.startPosition,this.endPosition,i),this.orbitControls.target.lerpVectors(this.startTarget,this.endTarget,i),e>=1&&(this.isAnimating=!1)}updateDistanceDisplay(){if(!this.selectedPlanet)return;const t=document.querySelector(".distance-indicator p:last-child");if(t){const i=this.selectedPlanet.getDistanceFromSun(),n=(i*1495978707e-1).toLocaleString();t.textContent=`${i.toFixed(2)} AU (${n} km)`}const e=document.querySelector("#planet-facts p:nth-child(3)");if(e&&e.textContent.includes("Orbital Position")){const i=this.selectedPlanet.getOrbitalPosition();e.innerHTML=`<strong>Orbital Position:</strong> ${i.toFixed(1)}°`}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}getOrbitSpeed(){return this.settings.paused?0:this.settings.orbitSpeed}isPaused(){return this.settings.paused}update(t,e=0){this.orbitControls.update(),this.updateCameraAnimation(),this.updateLabels(),this.updateTimeDisplay(t),this.updateMinimap(),this.updateDistanceDisplay(),this.updateEventVisuals(e)}dispose(){this.orbitControls.dispose(),this.gui.destroy(),this.labels.forEach(i=>i.element.remove());const t=document.getElementById("time-display");t&&t.remove();const e=document.getElementById("minimap-container");e&&e.remove(),this.audioSystem&&this.audioSystem.dispose()}}let ke,Xn,Bi,Ln,Ea,Ta,wa,_o,xo,vo,ps,ma,Mo,ga;async function k0(){Mo=new kc,ga=new Ou,G0(),H0(),W0(),await X0(),$0(),Y0(),Jc()}function G0(){ke=new Tu,ke.background=new Et(8)}function H0(){Xn=new qe(60,window.innerWidth/window.innerHeight,.1,3e3),Xn.position.set(30,20,50)}function W0(){const s=document.getElementById("solar-system");Bi=new Gg({canvas:s,antialias:!0,powerPreference:"high-performance"}),Bi.setSize(window.innerWidth,window.innerHeight),Bi.setPixelRatio(Math.min(window.devicePixelRatio,2)),Bi.toneMapping=Aa,Bi.toneMappingExposure=1.1,Ln=new qg(Bi);const t=new jg(ke,Xn);Ln.addPass(t);const e=new Wn(new ht(window.innerWidth,window.innerHeight),.6,.5,.8);Ln.addPass(e);const i=new Zg;Ln.addPass(i)}async function X0(){vo=new u0({starCount:2e4,radius:1200}),ke.add(vo.getMesh()),Ea=new r0(ga),ke.add(Ea.getMesh()),Ta=[];for(const s of Qg){const t=new pc(s,ga);Ta.push(t),ke.add(t.getMesh()),ke.add(t.getOrbitLine())}wa=[];for(const s of e0){const t=new pc(s,ga);wa.push(t),ke.add(t.getMesh()),ke.add(t.getOrbitLine())}await new Promise(s=>setTimeout(s,200)),_o=new c0,ke.add(_o.getMesh()),xo=new h0,ke.add(xo.getMesh()),ps=new d0(Yc),ke.add(ps.getMesh()),ke.add(ps.getOrbitLine())}function $0(){ma=new V0(Xn,Bi,ke,Ta,Ea,wa,ps)}function Y0(){const s=document.getElementById("loading");s.classList.add("hidden"),setTimeout(()=>{s.style.display="none"},500)}function Jc(){requestAnimationFrame(Jc);const s=Mo.getDelta(),t=Mo.getElapsedTime(),e=ma.getOrbitSpeed(),i=ma.getJulianDate();Ea.update(s,t),Ta.forEach(n=>{n.update(s,e,t,i)}),wa.forEach(n=>{n.update(s,e,t,i)}),_o.update(s,e),xo.update(s,e),ps.update(s,e,t,i),vo.update(s),ma.update(s,t),Ln.render()}window.addEventListener("resize",()=>{Xn.aspect=window.innerWidth/window.innerHeight,Xn.updateProjectionMatrix(),Bi.setSize(window.innerWidth,window.innerHeight),Ln.setSize(window.innerWidth,window.innerHeight)});k0().catch(s=>{console.error("Failed to initialize solar system:",s),document.getElementById("loading").textContent="Failed to load solar system. Please refresh the page."});
