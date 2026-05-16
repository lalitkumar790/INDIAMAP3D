(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="167",yc=0,Ta=1,wc=2,Lo=1,Io=2,an=3,Sn=0,be=1,fe=2,vn=0,oi=1,ba=2,Aa=3,Ra=4,Ec=5,In=100,Tc=101,bc=102,Ac=103,Rc=104,Cc=200,Pc=201,Lc=202,Ic=203,Mr=204,Sr=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Bc=211,zc=212,kc=213,Vc=214,Gc=0,Hc=1,Wc=2,Ms=3,Xc=4,qc=5,Yc=6,Kc=7,Do=0,Jc=1,$c=2,xn=0,Zc=1,jc=2,Qc=3,Uo=4,tl=5,el=6,nl=7,No=300,hi=301,ui=302,yr=303,wr=304,Cs=306,Er=1e3,Nn=1001,Tr=1002,ze=1003,il=1004,zi=1005,We=1006,zs=1007,Fn=1008,ln=1009,Fo=1010,Oo=1011,Li=1012,sa=1013,Bn=1014,on=1015,Ii=1016,ra=1017,aa=1018,di=1020,Bo=35902,zo=1021,ko=1022,Xe=1023,Vo=1024,Go=1025,ci=1026,fi=1027,Ho=1028,oa=1029,Wo=1030,ca=1031,la=1033,ps=33776,ms=33777,gs=33778,_s=33779,br=35840,Ar=35841,Rr=35842,Cr=35843,Pr=36196,Lr=37492,Ir=37496,Dr=37808,Ur=37809,Nr=37810,Fr=37811,Or=37812,Br=37813,zr=37814,kr=37815,Vr=37816,Gr=37817,Hr=37818,Wr=37819,Xr=37820,qr=37821,vs=36492,Yr=36494,Kr=36495,Xo=36283,Jr=36284,$r=36285,Zr=36286,sl=3200,rl=3201,qo=0,al=1,_n="",Ye="srgb",yn="srgb-linear",ha="display-p3",Ps="display-p3-linear",Ss="linear",Qt="srgb",ys="rec709",ws="p3",Gn=7680,Ca=519,ol=512,cl=513,ll=514,Yo=515,hl=516,ul=517,dl=518,fl=519,Pa=35044,La="300 es",cn=2e3,Es=2001;class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,jr=180/Math.PI;function Di(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function pl(s,t){return(s%t+t)%t}function Vs(s,t,e){return(1-e)*s+e*t}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],u=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],v=i[4],S=i[7],A=i[2],T=i[5],b=i[8];return r[0]=a*_+o*x+c*A,r[3]=a*m+o*v+c*T,r[6]=a*f+o*S+c*b,r[1]=l*_+h*x+d*A,r[4]=l*m+h*v+d*T,r[7]=l*f+h*S+d*b,r[2]=p*_+u*x+g*A,r[5]=p*m+u*v+g*T,r[8]=p*f+u*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,u=l*r-a*c,g=e*d+n*p+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=p*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=u*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ot;function Ko(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ml(){const s=Ts("canvas");return s.style.display="block",s}const Ia={};function Ai(s){s in Ia||(Ia[s]=!0,console.warn(s))}function gl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Da=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ua=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vi={[yn]:{transfer:Ss,primaries:ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ye]:{transfer:Qt,primaries:ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ps]:{transfer:Ss,primaries:ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ua),fromReference:s=>s.applyMatrix3(Da)},[ha]:{transfer:Qt,primaries:ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ua),fromReference:s=>s.applyMatrix3(Da).convertLinearToSRGB()}},_l=new Set([yn,Ps]),Kt={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_l.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=vi[t].toReference,i=vi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return vi[s].primaries},getTransfer:function(s){return s===_n?Ss:vi[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(vi[t].luminanceCoefficients)}};function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hn;class vl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Ts("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xl=0;class Jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ws(i[a].image)):r.push(Ws(i[a]))}else r=Ws(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ml=0;class Pe extends mi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Nn,i=Nn,r=We,a=Fn,o=Xe,c=ln,l=Pe.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=Di(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==No)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Er:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Er:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=No;Pe.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(u+1)/2,A=(f+1)/2,T=(h+p)/4,b=(d+_)/4,I=(g+m)/4;return v>S&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=b/n):S>A?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=b/r,i=I/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(p-h)/x,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sl extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $o extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yl extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const p=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==p||l!==u||h!==g){let m=1-o;const f=c*p+l*u+h*g+d*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,f*x);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const S=o*x;if(c=c*m+p*S,l=l*m+u*S,h=h*m+g*S,d=d*m+_*S,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],p=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*u-l*p,t[e+1]=c*g+h*p+l*d-o*u,t[e+2]=l*g+h*u+o*p-c*d,t[e+3]=h*g-o*d-c*p-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),p=c(n/2),u=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d-p*u*g;break;case"YXZ":this._x=p*h*d+l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d+p*u*g;break;case"ZXY":this._x=p*h*d-l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d-p*u*g;break;case"ZYX":this._x=p*h*d-l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d+p*u*g;break;case"YZX":this._x=p*h*d+l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d-p*u*g;break;case"XZY":this._x=p*h*d-l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){const u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new R,Na=new Ui;class Ni{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xi),Vi.subVectors(this.max,xi),Wn.subVectors(t.a,xi),Xn.subVectors(t.b,xi),qn.subVectors(t.c,xi),un.subVectors(Xn,Wn),dn.subVectors(qn,Xn),En.subVectors(Wn,qn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-En.z,En.y,un.z,0,-un.x,dn.z,0,-dn.x,En.z,0,-En.x,-un.y,un.x,0,-dn.y,dn.x,0,-En.y,En.x,0];return!qs(e,Wn,Xn,qn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!qs(e,Wn,Xn,qn,Vi))?!1:(Gi.crossVectors(un,dn),e=[Gi.x,Gi.y,Gi.z],qs(e,Wn,Xn,qn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tn=[new R,new R,new R,new R,new R,new R,new R,new R],Ve=new R,ki=new Ni,Wn=new R,Xn=new R,qn=new R,un=new R,dn=new R,En=new R,xi=new R,Vi=new R,Gi=new R,Tn=new R;function qs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Tn.fromArray(s,r);const o=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),c=t.dot(Tn),l=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const wl=new Ni,Mi=new R,Ys=new R;class Fi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Ys)),this.expandByPoint(Mi.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new R,Ks=new R,Hi=new R,fn=new R,Js=new R,Wi=new R,$s=new R;class ua{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ks.copy(t).add(e).multiplyScalar(.5),Hi.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Ks);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hi),o=fn.dot(this.direction),c=-fn.dot(Hi),l=fn.lengthSq(),h=Math.abs(1-a*a);let d,p,u,g;if(h>0)if(d=a*c-o,p=a*o-c,g=r*h,d>=0)if(p>=-g)if(p<=g){const _=1/h;d*=_,p*=_,u=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ks).addScaledVector(Hi,p),u}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,i,r){Js.subVectors(e,t),Wi.subVectors(n,t),$s.crossVectors(Js,Wi);let a=this.direction.dot($s),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,t);const c=o*this.direction.dot(Wi.crossVectors(fn,Wi));if(c<0)return null;const l=o*this.direction.dot(Js.cross(fn));if(l<0||c+l>a)return null;const h=-o*fn.dot($s);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,a,o,c,l,h,d,p,u,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,p,u,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,p,u,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=u,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),a=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*h,u=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+g*l,e[5]=p-_*l,e[9]=-o*c,e[2]=_-p*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,u=c*d,g=l*h,_=l*d;e[0]=p+_*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=_+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,u=c*d,g=l*h,_=l*d;e[0]=p-_*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,u=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-u,e[8]=p*l+_,e[1]=c*d,e[5]=_*l+p,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,u=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-p*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+g,e[10]=p-_*d}else if(t.order==="XZY"){const p=a*c,u=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+_,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=_*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(El,t,Tl)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),pn.crossVectors(n,De),pn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),pn.crossVectors(n,De)),pn.normalize(),Xi.crossVectors(De,pn),i[0]=pn.x,i[4]=Xi.x,i[8]=De.x,i[1]=pn.y,i[5]=Xi.y,i[9]=De.y,i[2]=pn.z,i[6]=Xi.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],u=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],S=n[11],A=n[15],T=i[0],b=i[4],I=i[8],w=i[12],M=i[1],L=i[5],O=i[9],B=i[13],W=i[2],X=i[6],H=i[10],K=i[14],G=i[3],ot=i[7],ut=i[11],Mt=i[15];return r[0]=a*T+o*M+c*W+l*G,r[4]=a*b+o*L+c*X+l*ot,r[8]=a*I+o*O+c*H+l*ut,r[12]=a*w+o*B+c*K+l*Mt,r[1]=h*T+d*M+p*W+u*G,r[5]=h*b+d*L+p*X+u*ot,r[9]=h*I+d*O+p*H+u*ut,r[13]=h*w+d*B+p*K+u*Mt,r[2]=g*T+_*M+m*W+f*G,r[6]=g*b+_*L+m*X+f*ot,r[10]=g*I+_*O+m*H+f*ut,r[14]=g*w+_*B+m*K+f*Mt,r[3]=x*T+v*M+S*W+A*G,r[7]=x*b+v*L+S*X+A*ot,r[11]=x*I+v*O+S*H+A*ut,r[15]=x*w+v*B+S*K+A*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],u=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-i*l*d-r*o*p+n*l*p+i*o*u-n*c*u)+_*(+e*c*u-e*l*p+r*a*p-i*a*u+i*l*h-r*c*h)+m*(+e*l*d-e*o*u-r*a*d+n*a*u+r*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*p+i*a*d-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],u=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=d*m*l-_*p*l+_*c*u-o*m*u-d*c*f+o*p*f,v=g*p*l-h*m*l-g*c*u+a*m*u+h*c*f-a*p*f,S=h*_*l-g*d*l+g*o*u-a*_*u-h*o*f+a*d*f,A=g*d*c-h*_*c-g*o*p+a*_*p+h*o*m-a*d*m,T=e*x+n*v+i*S+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=x*b,t[1]=(_*p*r-d*m*r-_*i*u+n*m*u+d*i*f-n*p*f)*b,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*b,t[3]=(d*c*r-o*p*r-d*i*l+n*p*l+o*i*u-n*c*u)*b,t[4]=v*b,t[5]=(h*m*r-g*p*r+g*i*u-e*m*u-h*i*f+e*p*f)*b,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*f-e*c*f)*b,t[7]=(a*p*r-h*c*r+h*i*l-e*p*l-a*i*u+e*c*u)*b,t[8]=S*b,t[9]=(g*d*r-h*_*r-g*n*u+e*_*u+h*n*f-e*d*f)*b,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*b,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*u-e*o*u)*b,t[12]=A*b,t[13]=(h*_*i-g*d*i+g*n*p-e*_*p-h*n*m+e*d*m)*b,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*b,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*p+e*o*p)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,u=r*h,g=r*d,_=a*h,m=a*d,f=o*d,x=c*l,v=c*h,S=c*d,A=n.x,T=n.y,b=n.z;return i[0]=(1-(_+f))*A,i[1]=(u+S)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(u-S)*T,i[5]=(1-(p+f))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(g+v)*b,i[9]=(m-x)*b,i[10]=(1-(p+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Yn.set(i[0],i[1],i[2]).length();const a=Yn.set(i[4],i[5],i[6]).length(),o=Yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const l=1/r,h=1/a,d=1/o;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=d,Ge.elements[9]*=d,Ge.elements[10]*=d,e.setFromRotationMatrix(Ge),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=cn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let u,g;if(o===cn)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Es)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=cn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),p=(e+t)*l,u=(n+i)*h;let g,_;if(o===cn)g=(a+r)*d,_=-2*d;else if(o===Es)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new R,Ge=new ee,El=new R(0,0,0),Tl=new R(1,1,1),pn=new R,Xi=new R,De=new R,Fa=new ee,Oa=new Ui;class $e{constructor(t=0,e=0,n=0,i=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],p=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bl=0;const Ba=new R,Kn=new Ui,nn=new ee,qi=new R,Si=new R,Al=new R,Rl=new Ui,za=new R(1,0,0),ka=new R(0,1,0),Va=new R(0,0,1),Ga={type:"added"},Cl={type:"removed"},Jn={type:"childadded",child:null},Zs={type:"childremoved",child:null};class pe extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new R,e=new $e,n=new Ui,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ot}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return Ba.copy(t).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qi.copy(t):qi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Si,qi,this.up):nn.lookAt(qi,Si,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(nn),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ga),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cl),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ga),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,Al),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Rl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new R(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new R,sn=new R,js=new R,rn=new R,$n=new R,Zn=new R,Ha=new R,Qs=new R,tr=new R,er=new R;class Je{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){He.subVectors(i,e),sn.subVectors(n,e),js.subVectors(t,e);const a=He.dot(He),o=He.dot(sn),c=He.dot(js),l=sn.dot(sn),h=sn.dot(js),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,u=(l*c-o*h)*p,g=(a*h-o*c)*p;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),sn.subVectors(t,e),He.cross(sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),He.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;$n.subVectors(i,n),Zn.subVectors(r,n),Qs.subVectors(t,n);const c=$n.dot(Qs),l=Zn.dot(Qs);if(c<=0&&l<=0)return e.copy(n);tr.subVectors(t,i);const h=$n.dot(tr),d=Zn.dot(tr);if(h>=0&&d<=h)return e.copy(i);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector($n,a);er.subVectors(t,r);const u=$n.dot(er),g=Zn.dot(er);if(g>=0&&u<=g)return e.copy(r);const _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Zn,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Ha.subVectors(r,i),o=(d-h)/(d-h+(u-g)),e.copy(i).addScaledVector(Ha,o);const f=1/(m+_+p);return a=_*f,o=p*f,e.copy(n).addScaledVector($n,a).addScaledVector(Zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=pl(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nr(a,r,t+1/3),this.g=nr(a,r,t),this.b=nr(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=jo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Kt.fromWorkingColorSpace(we.copy(this),t),Math.round(Se(we.r*255,0,255))*65536+Math.round(Se(we.g*255,0,255))*256+Math.round(Se(we.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,r=we.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ye){Kt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Yi);const n=Vs(mn.h,Yi.h,e),i=Vs(mn.s,Yi.s,e),r=Vs(mn.l,Yi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Rt;Rt.NAMES=jo;let Pl=0;class kn extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=oi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Te extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new R,Ki=new ht;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ai("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ki.fromBufferAttribute(this,e),Ki.applyMatrix3(t),this.setXY(e,Ki.x,Ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}}class Qo extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ll=0;const Oe=new ee,ir=new pe,jn=new R,Ue=new Ni,yi=new Ni,_e=new R;class ae extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ko(t)?tc:Qo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ue.min,yi.min),Ue.expandByPoint(_e),_e.addVectors(Ue.max,yi.max),Ue.expandByPoint(_e)):(Ue.expandByPoint(yi.min),Ue.expandByPoint(yi.max))}Ue.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_e.fromBufferAttribute(o,l),c&&(jn.fromBufferAttribute(t,l),_e.add(jn)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new R,c[I]=new R;const l=new R,h=new R,d=new R,p=new ht,u=new ht,g=new ht,_=new R,m=new R;function f(I,w,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),p.fromBufferAttribute(r,I),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),u.sub(p),g.sub(p);const L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(L),o[I].add(_),o[w].add(_),o[M].add(_),c[I].add(m),c[w].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,w=x.length;I<w;++I){const M=x[I],L=M.start,O=M.count;for(let B=L,W=L+O;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new R,S=new R,A=new R,T=new R;function b(I){A.fromBufferAttribute(i,I),T.copy(A);const w=o[I];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(T,w);const L=S.dot(c[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,w=x.length;I<w;++I){const M=x[I],L=M.start,O=M.count;for(let B=L,W=L+O;B<W;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let p=0,u=t.count;p<u;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,u=e.count;p<u;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let u=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[u++]}return new Ae(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],u=t(p,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new ee,bn=new ua,Ji=new Fi,Xa=new R,Qn=new R,ti=new R,ei=new R,sr=new R,$i=new R,Zi=new ht,ji=new ht,Qi=new ht,qa=new R,Ya=new R,Ka=new R,ts=new R,es=new R;class P extends pe{constructor(t=new ae,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){$i.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(sr.fromBufferAttribute(d,t),a?$i.addScaledVector(sr,h):$i.addScaledVector(sr.sub(e),h))}e.add($i)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),bn.copy(t.ray).recast(t.near),!(Ji.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Ji,Xa)===null||bn.origin.distanceToSquared(Xa)>(t.far-t.near)**2))&&(Wa.copy(r).invert(),bn.copy(t.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=a[m.materialIndex],x=Math.max(m.start,u.start),v=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=x,A=v;S<A;S+=3){const T=o.getX(S),b=o.getX(S+1),I=o.getX(S+2);i=ns(this,f,t,n,l,h,d,T,b,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=ns(this,a,t,n,l,h,d,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=a[m.materialIndex],x=Math.max(m.start,u.start),v=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let S=x,A=v;S<A;S+=3){const T=S,b=S+1,I=S+2;i=ns(this,f,t,n,l,h,d,T,b,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;i=ns(this,a,t,n,l,h,d,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Il(s,t,e,n,i,r,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Sn,o),c===null)return null;es.copy(o),es.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:s}}function ns(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Qn),s.getVertexPosition(c,ti),s.getVertexPosition(l,ei);const h=Il(s,t,e,n,Qn,ti,ei,ts);if(h){i&&(Zi.fromBufferAttribute(i,o),ji.fromBufferAttribute(i,c),Qi.fromBufferAttribute(i,l),h.uv=Je.getInterpolation(ts,Qn,ti,ei,Zi,ji,Qi,new ht)),r&&(Zi.fromBufferAttribute(r,o),ji.fromBufferAttribute(r,c),Qi.fromBufferAttribute(r,l),h.uv1=Je.getInterpolation(ts,Qn,ti,ei,Zi,ji,Qi,new ht)),a&&(qa.fromBufferAttribute(a,o),Ya.fromBufferAttribute(a,c),Ka.fromBufferAttribute(a,l),h.normal=Je.getInterpolation(ts,Qn,ti,ei,qa,Ya,Ka,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};Je.getNormal(Qn,ti,ei,d.normal),h.face=d}return h}class gt extends ae{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function g(_,m,f,x,v,S,A,T,b,I,w){const M=S/b,L=A/I,O=S/2,B=A/2,W=T/2,X=b+1,H=I+1;let K=0,G=0;const ot=new R;for(let ut=0;ut<H;ut++){const Mt=ut*L-B;for(let Vt=0;Vt<X;Vt++){const $t=Vt*M-O;ot[_]=$t*x,ot[m]=Mt*v,ot[f]=W,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[f]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Vt/b),d.push(1-ut/I),K+=1}}for(let ut=0;ut<I;ut++)for(let Mt=0;Mt<b;Mt++){const Vt=p+Mt+X*ut,$t=p+Mt+X*(ut+1),q=p+(Mt+1)+X*(ut+1),tt=p+(Mt+1)+X*ut;c.push(Vt,$t,tt),c.push($t,q,tt),G+=6}o.addGroup(u,G,w),u+=G,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const n=pi(s[e]);for(const i in n)t[i]=n[i]}return t}function Dl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Ul={clone:pi,merge:Ee};var Nl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nl,this.fragmentShader=Fl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=Dl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let nc=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const gn=new R,Ja=new ht,$a=new ht;class Ne extends nc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,Ja,$a),e.subVectors($a,Ja)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class Ol extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new Ne(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Ne(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Ne(ni,ii,t,e);o.layers=this.layers,this.add(o);const c=new Ne(ni,ii,t,e);c.layers=this.layers,this.add(c);const l=new Ne(ni,ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,p,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ic extends Pe{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gt(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:vn});r.uniforms.tEquirect.value=e;const a=new P(i,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=We),new Ol(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const rr=new R,zl=new R,kl=new Ot;class Pn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rr.subVectors(n,e).cross(zl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kl.getNormalMatrix(t),i=this.coplanarPoint(rr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Fi,is=new R;class da{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],p=i[7],u=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,p-l,m-u,S-f).normalize(),n[1].setComponents(c+r,p+l,m+u,S+f).normalize(),n[2].setComponents(c+a,p+h,m+g,S+x).normalize(),n[3].setComponents(c-a,p-h,m-g,S-x).normalize(),n[4].setComponents(c-o,p-d,m-_,S-v).normalize(),e===cn)n[5].setComponents(c+o,p+d,m+_,S+v).normalize();else if(e===Es)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(is.x=i.normal.x>0?t.max.x:t.min.x,is.y=i.normal.y>0?t.max.y:t.min.y,is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Vl(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c._updateRange,p=c.updateRanges;if(s.bindBuffer(l,o),d.count===-1&&p.length===0&&s.bufferSubData(l,0,h),p.length!==0){for(let u=0,g=p.length;u<g;u++){const _=p[u];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Be extends ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,p=e/c,u=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*p-a;for(let v=0;v<l;v++){const S=v*d-r;g.push(S,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const v=x+l*f,S=x+l*(f+1),A=x+1+l*(f+1),T=x+1+l*f;u.push(v,S,T),u.push(S,A,T)}this.setIndex(u),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hl=`#ifdef USE_ALPHAHASH
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
#endif`,Wl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ql=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kl=`#ifdef USE_AOMAP
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
#endif`,Jl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$l=`#ifdef USE_BATCHING
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
#endif`,Zl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ql=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eh=`#ifdef USE_IRIDESCENCE
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
#endif`,nh=`#ifdef USE_BUMPMAP
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
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uh=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fh=`vec3 transformedNormal = objectNormal;
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
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
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
}`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dh=`uniform bool receiveShadow;
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
#endif`,Uh=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zh=`#if defined( USE_POINTS_UV )
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
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iu=`#ifdef USE_MORPHTARGETS
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
#endif`,su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hu=`#ifdef USE_NORMALMAP
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
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bu=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
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
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
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
#endif`,Lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Du=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uu=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`#include <common>
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
}`,Ku=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ju=`#define DISTANCE
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
}`,$u=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`uniform float scale;
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
}`,td=`uniform vec3 diffuse;
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
}`,ed=`#include <common>
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#define LAMBERT
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
}`,sd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rd=`#define MATCAP
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
}`,ad=`#define MATCAP
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
}`,od=`#define NORMAL
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
}`,cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ld=`#define PHONG
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
}`,hd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ud=`#define STANDARD
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
}`,dd=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,fd=`#define TOON
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
}`,pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,md=`uniform float size;
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#include <common>
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
}`,vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Md=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Gl,alphahash_pars_fragment:Hl,alphamap_fragment:Wl,alphamap_pars_fragment:Xl,alphatest_fragment:ql,alphatest_pars_fragment:Yl,aomap_fragment:Kl,aomap_pars_fragment:Jl,batching_pars_vertex:$l,batching_vertex:Zl,begin_vertex:jl,beginnormal_vertex:Ql,bsdfs:th,iridescence_fragment:eh,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:rh,clipping_planes_vertex:ah,color_fragment:oh,color_pars_fragment:ch,color_pars_vertex:lh,color_vertex:hh,common:uh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:fh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:vh,colorspace_pars_fragment:xh,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:yh,envmap_pars_vertex:wh,envmap_physical_pars_fragment:Uh,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:bh,fog_fragment:Ah,fog_pars_fragment:Rh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Dh,lights_toon_fragment:Nh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:Bh,lights_physical_fragment:zh,lights_physical_pars_fragment:kh,lights_fragment_begin:Vh,lights_fragment_maps:Gh,lights_fragment_end:Hh,logdepthbuf_fragment:Wh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:Yh,map_fragment:Kh,map_pars_fragment:Jh,map_particle_fragment:$h,map_particle_pars_fragment:Zh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Qh,morphinstance_vertex:tu,morphcolor_vertex:eu,morphnormal_vertex:nu,morphtarget_pars_vertex:iu,morphtarget_vertex:su,normal_fragment_begin:ru,normal_fragment_maps:au,normal_pars_fragment:ou,normal_pars_vertex:cu,normal_vertex:lu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:gu,premultiplied_alpha_fragment:_u,project_vertex:vu,dithering_fragment:xu,dithering_pars_fragment:Mu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:yu,shadowmap_pars_fragment:wu,shadowmap_pars_vertex:Eu,shadowmap_vertex:Tu,shadowmask_pars_fragment:bu,skinbase_vertex:Au,skinning_pars_vertex:Ru,skinning_vertex:Cu,skinnormal_vertex:Pu,specularmap_fragment:Lu,specularmap_pars_fragment:Iu,tonemapping_fragment:Du,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:Bu,uv_vertex:zu,worldpos_vertex:ku,background_vert:Vu,background_frag:Gu,backgroundCube_vert:Hu,backgroundCube_frag:Wu,cube_vert:Xu,cube_frag:qu,depth_vert:Yu,depth_frag:Ku,distanceRGBA_vert:Ju,distanceRGBA_frag:$u,equirect_vert:Zu,equirect_frag:ju,linedashed_vert:Qu,linedashed_frag:td,meshbasic_vert:ed,meshbasic_frag:nd,meshlambert_vert:id,meshlambert_frag:sd,meshmatcap_vert:rd,meshmatcap_frag:ad,meshnormal_vert:od,meshnormal_frag:cd,meshphong_vert:ld,meshphong_frag:hd,meshphysical_vert:ud,meshphysical_frag:dd,meshtoon_vert:fd,meshtoon_frag:pd,points_vert:md,points_frag:gd,shadow_vert:_d,shadow_frag:vd,sprite_vert:xd,sprite_frag:Md},rt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Ke={basic:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ee([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ee([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ee([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ee([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ee([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ee([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ee([rt.common,rt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ee([rt.lights,rt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ke.physical={uniforms:Ee([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ss={r:0,b:0,g:0},Rn=new $e,Sd=new ee;function yd(s,t,e,n,i,r,a){const o=new Rt(0);let c=r===!0?0:1,l,h,d=null,p=0,u=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?f(o,c):S&&S.isColor&&(f(S,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Cs)?(h===void 0&&(h=new P(new gt(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:pi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rn.copy(v.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sd.makeRotationFromEuler(Rn)),h.material.toneMapped=Kt.getTransfer(S.colorSpace)!==Qt,(d!==S||p!==S.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,p=S.version,u=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new P(new Be(2,2),new Ze({name:"BackgroundMaterial",uniforms:pi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(S.colorSpace)!==Qt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,v){x.getRGB(ss,ec(s)),n.buffers.color.setClear(ss.r,ss.g,ss.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(o,c)},render:_,addToRenderList:m}}function wd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,a=!1;function o(M,L,O,B,W){let X=!1;const H=d(B,O,L);r!==H&&(r=H,l(r.object)),X=u(M,B,O,W),X&&g(M,B,O,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(M,L,O,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,L,O){const B=O.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[L.id];X===void 0&&(X={},W[L.id]=X);let H=X[B];return H===void 0&&(H=p(c()),X[B]=H),H}function p(M){const L=[],O=[],B=[];for(let W=0;W<e;W++)L[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function u(M,L,O,B){const W=r.attributes,X=L.attributes;let H=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){const ut=W[G];let Mt=X[G];if(Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),ut===void 0||ut.attribute!==Mt||Mt&&ut.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function g(M,L,O,B){const W={},X=L.attributes;let H=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){let ut=X[G];ut===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const Mt={};Mt.attribute=ut,ut&&ut.data&&(Mt.data=ut.data),W[G]=Mt,H++}r.attributes=W,r.attributesNum=H,r.index=B}function _(){const M=r.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const O=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;O[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),W[M]!==L&&(s.vertexAttribDivisor(M,L),W[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==M[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function v(M,L,O,B,W,X,H){H===!0?s.vertexAttribIPointer(M,L,O,W,X):s.vertexAttribPointer(M,L,O,B,W,X)}function S(M,L,O,B){_();const W=B.attributes,X=O.getAttributes(),H=L.defaultAttributeValues;for(const K in X){const G=X[K];if(G.location>=0){let ot=W[K];if(ot===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const ut=ot.normalized,Mt=ot.itemSize,Vt=t.get(ot);if(Vt===void 0)continue;const $t=Vt.buffer,q=Vt.type,tt=Vt.bytesPerElement,_t=q===s.INT||q===s.UNSIGNED_INT||ot.gpuType===sa;if(ot.isInterleavedBufferAttribute){const ft=ot.data,It=ft.stride,Bt=ot.offset;if(ft.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)f(G.location+kt,ft.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let kt=0;kt<G.locationSize;kt++)v(G.location+kt,Mt/G.locationSize,q,ut,It*tt,(Bt+Mt/G.locationSize*kt)*tt,_t)}else{if(ot.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)f(G.location+ft,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ft=0;ft<G.locationSize;ft++)m(G.location+ft);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ft=0;ft<G.locationSize;ft++)v(G.location+ft,Mt/G.locationSize,q,ut,Mt*tt,Mt/G.locationSize*ft*tt,_t)}}else if(H!==void 0){const ut=H[K];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(G.location,ut);break;case 3:s.vertexAttrib3fv(G.location,ut);break;case 4:s.vertexAttrib4fv(G.location,ut);break;default:s.vertexAttrib1fv(G.location,ut)}}}}x()}function A(){I();for(const M in n){const L=n[M];for(const O in L){const B=L[O];for(const W in B)h(B[W].object),delete B[W];delete L[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const O in L){const B=L[O];for(const W in B)h(B[W].object),delete B[W];delete L[O]}delete n[M.id]}function b(M){for(const L in n){const O=n[L];if(O[M.id]===void 0)continue;const B=O[M.id];for(const W in B)h(B[W].object),delete B[W];delete O[M.id]}}function I(){w(),a=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Ed(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function c(l,h,d,p){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<p.length;_++)e.update(g,n,p[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Td(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Xe&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const b=T===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ln&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==on&&!b)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=u>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:A}}function bd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Pn,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const u=d.length!==0||p||n!==0||i;return i=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,v=x*4;let S=f.clippingState||null;c.value=S,S=h(g,p,v,u);for(let A=0;A!==v;++A)S[A]=e[A];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=u+_*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=u;v!==_;++v,S+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ad(s){let t=new WeakMap;function e(a,o){return o===yr?a.mapping=hi:o===wr&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yr||o===wr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Bl(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class rc extends nc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,Za=[.125,.215,.35,.446,.526,.582],Dn=20,ar=new rc,ja=new Rt;let or=null,cr=0,lr=0,hr=!1;const Ln=(1+Math.sqrt(5))/2,si=1/Ln,Qa=[new R(-Ln,si,0),new R(Ln,si,0),new R(-si,0,Ln),new R(si,0,Ln),new R(0,Ln,-si),new R(0,Ln,si),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class to{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){or=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(or,cr,lr),this._renderer.xr.enabled=hr,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),or=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ii,format:Xe,colorSpace:yn,depthBuffer:!1},i=eo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rd(r)),this._blurMaterial=Cd(r,t,e)}return i}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,i){const o=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ja),h.toneMapping=xn,h.autoClear=!1;const u=new Te({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new P(new gt,u);let _=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(ja),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;rs(i,x*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hi||t.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new P(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qa[(i-r-1)%Qa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new P(this._lodPlanes[i],l),p=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Dn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Dn;m>Dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dn}`);const f=[];let x=0;for(let b=0;b<Dn;++b){const I=b/_,w=Math.exp(-I*I/2);f.push(w),b===0?x+=w:b<m&&(x+=2*w)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const S=this._sizeLods[i],A=3*S*(i>v-ri?i-v+ri:0),T=4*(this._cubeSize-S);rs(e,A,T,3*S,2*S),c.setRenderTarget(e),c.render(d,ar)}}function Rd(s){const t=[],e=[],n=[];let i=s;const r=s-ri+1+Za.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ri?c=Za[a-s+ri-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*u),v=new Float32Array(m*g*u),S=new Float32Array(f*g*u);for(let T=0;T<u;T++){const b=T%3*2/3-1,I=T>2?0:-1,w=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];x.set(w,_*g*T),v.set(p,m*g*T);const M=[T,T,T,T,T,T];S.set(M,f*g*T)}const A=new ae;A.setAttribute("position",new Ae(x,_)),A.setAttribute("uv",new Ae(v,m)),A.setAttribute("faceIndex",new Ae(S,f)),t.push(A),i>ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eo(s,t,e){const n=new zn(s,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Cd(s,t,e){const n=new Float32Array(Dn),i=new R(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function no(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function io(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Pd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yr||c===wr,h=c===hi||c===ui;if(l||h){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new to(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new to(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ld(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Id(s,t,e,n){const i={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}p.removeEventListener("dispose",a),delete i[p.id];const u=r.get(p);u&&(t.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)t.update(p[g],s.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const p=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const x=u.array;_=u.version;for(let v=0,S=x.length;v<S;v+=3){const A=x[v+0],T=x[v+1],b=x[v+2];p.push(A,T,T,b,b,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const A=v+0,T=v+1,b=v+2;p.push(A,T,T,b,b,A)}}else return;const m=new(Ko(p)?tc:Qo)(p,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const p=r.get(d);if(p){const u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Dd(s,t,e){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,u){s.drawElements(n,u,r,p*a),e.update(u,n,1)}function l(p,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,p*a,g),e.update(u,n,g))}function h(p,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=u[f];e.update(m,n,1)}function d(p,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/a,u[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,p,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=u[x];for(let x=0;x<_.length;x++)e.update(f,n,_[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ud(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nd(s,t,e){const n=new WeakMap,i=new te;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var u=M;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*T*4*d),I=new $o(b,A,T,d);I.type=on,I.needsUpdate=!0;const w=S*4;for(let L=0;L<d;L++){const O=f[L],B=x[L],W=v[L],X=A*T*4*L;for(let H=0;H<O.count;H++){const K=H*w;g===!0&&(i.fromBufferAttribute(O,H),b[X+K+0]=i.x,b[X+K+1]=i.y,b[X+K+2]=i.z,b[X+K+3]=0),_===!0&&(i.fromBufferAttribute(B,H),b[X+K+4]=i.x,b[X+K+5]=i.y,b[X+K+6]=i.z,b[X+K+7]=0),m===!0&&(i.fromBufferAttribute(W,H),b[X+K+8]=i.x,b[X+K+9]=i.y,b[X+K+10]=i.z,b[X+K+11]=W.itemSize===4?i.w:1)}}p={count:d,texture:I,size:new ht(A,T)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function Fd(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class ac extends Pe{constructor(t,e,n,i,r,a,o,c,l,h=ci){if(h!==ci&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=Bn),n===void 0&&h===fi&&(n=di),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const oc=new Pe,so=new ac(1,1),cc=new $o,lc=new yl,hc=new ic,ro=[],ao=[],oo=new Float32Array(16),co=new Float32Array(9),lo=new Float32Array(4);function gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ro[i];if(r===void 0&&(r=new Float32Array(i),ro[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ls(s,t){let e=ao[t];e===void 0&&(e=new Int32Array(t),ao[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Od(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Vd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;lo.set(n),s.uniformMatrix2fv(this.addr,!1,lo),ge(e,n)}}function Gd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;co.set(n),s.uniformMatrix3fv(this.addr,!1,co),ge(e,n)}}function Hd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;oo.set(n),s.uniformMatrix4fv(this.addr,!1,oo),ge(e,n)}}function Wd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Xd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Yd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Kd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function $d(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function jd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(so.compareFunction=Yo,r=so):r=oc,e.setTexture2D(t||r,i)}function Qd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lc,i)}function tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hc,i)}function ef(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cc,i)}function nf(s){switch(s){case 5126:return Od;case 35664:return Bd;case 35665:return zd;case 35666:return kd;case 35674:return Vd;case 35675:return Gd;case 35676:return Hd;case 5124:case 35670:return Wd;case 35667:case 35671:return Xd;case 35668:case 35672:return qd;case 35669:case 35673:return Yd;case 5125:return Kd;case 36294:return Jd;case 36295:return $d;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Qd;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return ef}}function sf(s,t){s.uniform1fv(this.addr,t)}function rf(s,t){const e=gi(t,this.size,2);s.uniform2fv(this.addr,e)}function af(s,t){const e=gi(t,this.size,3);s.uniform3fv(this.addr,e)}function of(s,t){const e=gi(t,this.size,4);s.uniform4fv(this.addr,e)}function cf(s,t){const e=gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function lf(s,t){const e=gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hf(s,t){const e=gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function uf(s,t){s.uniform1iv(this.addr,t)}function df(s,t){s.uniform2iv(this.addr,t)}function ff(s,t){s.uniform3iv(this.addr,t)}function pf(s,t){s.uniform4iv(this.addr,t)}function mf(s,t){s.uniform1uiv(this.addr,t)}function gf(s,t){s.uniform2uiv(this.addr,t)}function _f(s,t){s.uniform3uiv(this.addr,t)}function vf(s,t){s.uniform4uiv(this.addr,t)}function xf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||oc,r[a])}function Mf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||lc,r[a])}function Sf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hc,r[a])}function yf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||cc,r[a])}function wf(s){switch(s){case 5126:return sf;case 35664:return rf;case 35665:return af;case 35666:return of;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return yf}}class Ef{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nf(e.type)}}class Tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wf(e.type)}}class bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function ho(s,t){s.seq.push(t),s.map[t.id]=t}function Af(s,t,e){const n=s.name,i=n.length;for(ur.lastIndex=0;;){const r=ur.exec(n),a=ur.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ho(e,l===void 0?new Ef(o,s,t):new Tf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new bf(o),ho(e,d)),e=d}}}class xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Af(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function uo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Rf=37297;let Cf=0;function Pf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Lf(s){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(s);let n;switch(t===e?n="":t===ws&&e===ys?n="LinearDisplayP3ToLinearSRGB":t===ys&&e===ws&&(n="LinearSRGBToLinearDisplayP3"),s){case yn:case Ps:return[n,"LinearTransferOETF"];case Ye:case ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pf(s.getShaderSource(t),a)}else return i}function If(s,t){const e=Lf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Df(s,t){let e;switch(t){case Zc:e="Linear";break;case jc:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case Uo:e="ACESFilmic";break;case el:e="AgX";break;case nl:e="Neutral";break;case tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const as=new R;function Uf(){Kt.getLuminanceCoefficients(as);const s=as.x.toFixed(4),t=as.y.toFixed(4),e=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bi).join(`
`)}function Ff(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Of(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function bi(s){return s!==""}function po(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(s){return s.replace(Bf,kf)}const zf=new Map;function kf(s,t){let e=Ft[t];if(e===void 0){const n=zf.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qr(e)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(s){return s.replace(Vf,Gf)}function Gf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _o(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Hf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function Wf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hi:case ui:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ui:t="ENVMAP_MODE_REFRACTION";break}return t}function qf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Do:t="ENVMAP_BLENDING_MULTIPLY";break;case Jc:t="ENVMAP_BLENDING_MIX";break;case $c:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Hf(e),l=Wf(e),h=Xf(e),d=qf(e),p=Yf(e),u=Nf(e),g=Ff(r),_=i.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bi).join(`
`),f.length>0&&(f+=`
`)):(m=[_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),f=[_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==xn?Df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,If("linearToOutputTexel",e.outputColorSpace),Uf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bi).join(`
`)),a=Qr(a),a=po(a,e),a=mo(a,e),o=Qr(o),o=po(o,e),o=mo(o,e),a=go(a),o=go(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+a,S=x+f+o,A=uo(i,i.VERTEX_SHADER,v),T=uo(i,i.FRAGMENT_SHADER,S);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(T).trim();let X=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const K=fo(i,A,"vertex"),G=fo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+K+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:X,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(A),i.deleteShader(T),I=new xs(i,_),w=Of(i,_)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Rf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Jf=0;class $f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zf(t),e.set(t,n)),n}}class Zf{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function jf(s,t,e,n,i,r,a){const o=new Zo,c=new $f,l=new Set,h=[],d=i.logarithmicDepthBuffer,p=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,O,B){const W=O.fog,X=B.geometry,H=w.isMeshStandardMaterial?O.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),G=K&&K.mapping===Cs?K.image.height:null,ot=g[w.type];w.precision!==null&&(u=i.getMaxPrecision(w.precision),u!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=ut!==void 0?ut.length:0;let Vt=0;X.morphAttributes.position!==void 0&&(Vt=1),X.morphAttributes.normal!==void 0&&(Vt=2),X.morphAttributes.color!==void 0&&(Vt=3);let $t,q,tt,_t;if(ot){const Wt=Ke[ot];$t=Wt.vertexShader,q=Wt.fragmentShader}else $t=w.vertexShader,q=w.fragmentShader,c.update(w),tt=c.getVertexShaderID(w),_t=c.getFragmentShaderID(w);const ft=s.getRenderTarget(),It=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,kt=!!w.map,ie=!!w.matcap,D=!!K,oe=!!w.aoMap,Jt=!!w.lightMap,Zt=!!w.bumpMap,yt=!!w.normalMap,ce=!!w.displacementMap,Pt=!!w.emissiveMap,Dt=!!w.metalnessMap,C=!!w.roughnessMap,y=w.anisotropy>0,V=w.clearcoat>0,Z=w.dispersion>0,Q=w.iridescence>0,$=w.sheen>0,wt=w.transmission>0,at=y&&!!w.anisotropyMap,pt=V&&!!w.clearcoatMap,Nt=V&&!!w.clearcoatNormalMap,et=V&&!!w.clearcoatRoughnessMap,dt=Q&&!!w.iridescenceMap,Gt=Q&&!!w.iridescenceThicknessMap,Ct=$&&!!w.sheenColorMap,mt=$&&!!w.sheenRoughnessMap,Lt=!!w.specularMap,zt=!!w.specularColorMap,ne=!!w.specularIntensityMap,U=wt&&!!w.transmissionMap,nt=wt&&!!w.thicknessMap,Y=!!w.gradientMap,J=!!w.alphaMap,st=w.alphaTest>0,Tt=!!w.alphaHash,Ht=!!w.extensions;let le=xn;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(le=s.toneMapping);const xe={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:$t,fragmentShader:q,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:yn,alphaToCoverage:!!w.alphaToCoverage,map:kt,matcap:ie,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:Jt,bumpMap:Zt,normalMap:yt,displacementMap:p&&ce,emissiveMap:Pt,normalMapObjectSpace:yt&&w.normalMapType===al,normalMapTangentSpace:yt&&w.normalMapType===qo,metalnessMap:Dt,roughnessMap:C,anisotropy:y,anisotropyMap:at,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:Q,iridescenceMap:dt,iridescenceThicknessMap:Gt,sheen:$,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Lt,specularColorMap:zt,specularIntensityMap:ne,transmission:wt,transmissionMap:U,thicknessMap:nt,gradientMap:Y,opaque:w.transparent===!1&&w.blending===oi&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:st,alphaHash:Tt,combine:w.combine,mapUv:kt&&_(w.map.channel),aoMapUv:oe&&_(w.aoMap.channel),lightMapUv:Jt&&_(w.lightMap.channel),bumpMapUv:Zt&&_(w.bumpMap.channel),normalMapUv:yt&&_(w.normalMap.channel),displacementMapUv:ce&&_(w.displacementMap.channel),emissiveMapUv:Pt&&_(w.emissiveMap.channel),metalnessMapUv:Dt&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:at&&_(w.anisotropyMap.channel),clearcoatMapUv:pt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(w.sheenRoughnessMap.channel),specularMapUv:Lt&&_(w.specularMap.channel),specularColorMapUv:zt&&_(w.specularColorMap.channel),specularIntensityMapUv:ne&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:nt&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(yt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(kt||J),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:kt&&w.map.isVideoTexture===!0&&Kt.getTransfer(w.map.colorSpace)===Qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fe,flipSided:w.side===be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(x(M,w),v(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const M=g[w.type];let L;if(M){const O=Ke[M];L=Ul.clone(O.uniforms)}else L=w.uniforms;return L}function A(w,M){let L;for(let O=0,B=h.length;O<B;O++){const W=h[O];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Kf(s,M,w,r),h.push(L)),L}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function b(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:A,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:I}}function Qf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function tp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,p,u,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=u,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,p,u,g,_,m){const f=a(d,p,u,g,_,m);u.transmission>0?n.push(f):u.transparent===!0?i.push(f):e.push(f)}function c(d,p,u,g,_,m){const f=a(d,p,u,g,_,m);u.transmission>0?n.unshift(f):u.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,p){e.length>1&&e.sort(d||tp),n.length>1&&n.sort(p||vo),i.length>1&&i.sort(p||vo)}function h(){for(let d=t,p=s.length;d<p;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function ep(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new xo,s.set(n,[a])):i>=r.length?(a=new xo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function np(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Rt};break;case"SpotLight":e={position:new R,direction:new R,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sp=0;function rp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ap(s){const t=new np,e=ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new ee,a=new ee;function o(l){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,g=0,_=0,m=0,f=0,x=0,v=0,S=0,A=0,T=0,b=0;l.sort(rp);for(let w=0,M=l.length;w<M;w++){const L=l[w],O=L.color,B=L.intensity,W=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B,d+=O.g*B,p+=O.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],B);b++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=X,n.directionalShadowMatrix[u]=L.shadow.matrix,x++}n.directional[u]=H,u++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const K=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,S++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==S||I.numSpotMaps!==A||I.numLightProbes!==b)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,I.directionalLength=u,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=S,I.numSpotMaps=A,I.numLightProbes=b,n.version=sp++)}function c(l,h){let d=0,p=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const v=l[f];if(v.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=n.spot[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Mo(s){const t=new ap(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function op(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Mo(s),t.set(i,[o])):r>=a.length?(o=new Mo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class cp extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lp extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,up=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dp(s,t,e){let n=new da;const i=new ht,r=new ht,a=new te,o=new cp({depthPacking:rl}),c=new lp,l={},h=e.maxTextureSize,d={[Sn]:be,[be]:Sn,[fe]:fe},p=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:hp,fragmentShader:up}),u=p.clone();u.defines.HORIZONTAL_PASS=1;const g=new ae;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new P(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let f=this.type;this.render=function(T,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==an&&this.type===an,W=f===an&&this.type!==an;for(let X=0,H=T.length;X<H;X++){const K=T[X],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ot=G.getFrameExtents();if(i.multiply(ot),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||B===!0||W===!0){const Mt=this.type!==an?{minFilter:ze,magFilter:ze}:{};G.map!==null&&G.map.dispose(),G.map=new zn(i.x,i.y,Mt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ut=G.getViewportCount();for(let Mt=0;Mt<ut;Mt++){const Vt=G.getViewport(Mt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),O.viewport(a),G.updateMatrices(K,Mt),n=G.getFrustum(),S(b,I,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===an&&x(G,I),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,L)};function x(T,b){const I=t.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(i.x,i.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,I,p,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,I,u,_,null)}function v(T,b,I,w){let M=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=M.uuid,B=b.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let X=W[B];X===void 0&&(X=M.clone(),W[B]=X,b.addEventListener("dispose",A)),M=X}if(M.visible=b.visible,M.wireframe=b.wireframe,w===an?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=I}return M}function S(T,b,I,w,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===an)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const B=t.update(T),W=T.material;if(Array.isArray(W)){const X=B.groups;for(let H=0,K=X.length;H<K;H++){const G=X[H],ot=W[G.materialIndex];if(ot&&ot.visible){const ut=v(T,ot,w,M);T.onBeforeShadow(s,T,b,I,B,ut,G),s.renderBufferDirect(I,null,B,ut,T,G),T.onAfterShadow(s,T,b,I,B,ut,G)}}}else if(W.visible){const X=v(T,W,w,M);T.onBeforeShadow(s,T,b,I,B,X,null),s.renderBufferDirect(I,null,B,X,T,null),T.onAfterShadow(s,T,b,I,B,X,null)}}const O=T.children;for(let B=0,W=O.length;B<W;B++)S(O[B],b,I,w,M)}function A(T){T.target.removeEventListener("dispose",A);for(const I in l){const w=l[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function fp(s){function t(){let U=!1;const nt=new te;let Y=null;const J=new te(0,0,0,0);return{setMask:function(st){Y!==st&&!U&&(s.colorMask(st,st,st,st),Y=st)},setLocked:function(st){U=st},setClear:function(st,Tt,Ht,le,xe){xe===!0&&(st*=le,Tt*=le,Ht*=le),nt.set(st,Tt,Ht,le),J.equals(nt)===!1&&(s.clearColor(st,Tt,Ht,le),J.copy(nt))},reset:function(){U=!1,Y=null,J.set(-1,0,0,0)}}}function e(){let U=!1,nt=null,Y=null,J=null;return{setTest:function(st){st?_t(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(st){nt!==st&&!U&&(s.depthMask(st),nt=st)},setFunc:function(st){if(Y!==st){switch(st){case Gc:s.depthFunc(s.NEVER);break;case Hc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case qc:s.depthFunc(s.GEQUAL);break;case Yc:s.depthFunc(s.GREATER);break;case Kc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=st}},setLocked:function(st){U=st},setClear:function(st){J!==st&&(s.clearDepth(st),J=st)},reset:function(){U=!1,nt=null,Y=null,J=null}}}function n(){let U=!1,nt=null,Y=null,J=null,st=null,Tt=null,Ht=null,le=null,xe=null;return{setTest:function(Wt){U||(Wt?_t(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(Wt){nt!==Wt&&!U&&(s.stencilMask(Wt),nt=Wt)},setFunc:function(Wt,Qe,qe){(Y!==Wt||J!==Qe||st!==qe)&&(s.stencilFunc(Wt,Qe,qe),Y=Wt,J=Qe,st=qe)},setOp:function(Wt,Qe,qe){(Tt!==Wt||Ht!==Qe||le!==qe)&&(s.stencilOp(Wt,Qe,qe),Tt=Wt,Ht=Qe,le=qe)},setLocked:function(Wt){U=Wt},setClear:function(Wt){xe!==Wt&&(s.clearStencil(Wt),xe=Wt)},reset:function(){U=!1,nt=null,Y=null,J=null,st=null,Tt=null,Ht=null,le=null,xe=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],u=null,g=!1,_=null,m=null,f=null,x=null,v=null,S=null,A=null,T=new Rt(0,0,0),b=0,I=!1,w=null,M=null,L=null,O=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=H>=2);let G=null,ot={};const ut=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),Vt=new te().fromArray(ut),$t=new te().fromArray(Mt);function q(U,nt,Y,J){const st=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(U,Tt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Y;Ht++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(nt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return Tt}const tt={};tt[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),r.setFunc(Ms),Zt(!1),yt(Ta),_t(s.CULL_FACE),oe(vn);function _t(U){l[U]!==!0&&(s.enable(U),l[U]=!0)}function ft(U){l[U]!==!1&&(s.disable(U),l[U]=!1)}function It(U,nt){return h[U]!==nt?(s.bindFramebuffer(U,nt),h[U]=nt,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Bt(U,nt){let Y=p,J=!1;if(U){Y=d.get(nt),Y===void 0&&(Y=[],d.set(nt,Y));const st=U.textures;if(Y.length!==st.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,Ht=st.length;Tt<Ht;Tt++)Y[Tt]=s.COLOR_ATTACHMENT0+Tt;Y.length=st.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function kt(U){return u!==U?(s.useProgram(U),u=U,!0):!1}const ie={[In]:s.FUNC_ADD,[Tc]:s.FUNC_SUBTRACT,[bc]:s.FUNC_REVERSE_SUBTRACT};ie[Ac]=s.MIN,ie[Rc]=s.MAX;const D={[Cc]:s.ZERO,[Pc]:s.ONE,[Lc]:s.SRC_COLOR,[Mr]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Nc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Ic]:s.ONE_MINUS_SRC_COLOR,[Sr]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[Bc]:s.CONSTANT_COLOR,[zc]:s.ONE_MINUS_CONSTANT_COLOR,[kc]:s.CONSTANT_ALPHA,[Vc]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(U,nt,Y,J,st,Tt,Ht,le,xe,Wt){if(U===vn){g===!0&&(ft(s.BLEND),g=!1);return}if(g===!1&&(_t(s.BLEND),g=!0),U!==Ec){if(U!==_||Wt!==I){if((m!==In||v!==In)&&(s.blendEquation(s.FUNC_ADD),m=In,v=In),Wt)switch(U){case oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.ONE,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ra:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ra:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,x=null,S=null,A=null,T.set(0,0,0),b=0,_=U,I=Wt}return}st=st||nt,Tt=Tt||Y,Ht=Ht||J,(nt!==m||st!==v)&&(s.blendEquationSeparate(ie[nt],ie[st]),m=nt,v=st),(Y!==f||J!==x||Tt!==S||Ht!==A)&&(s.blendFuncSeparate(D[Y],D[J],D[Tt],D[Ht]),f=Y,x=J,S=Tt,A=Ht),(le.equals(T)===!1||xe!==b)&&(s.blendColor(le.r,le.g,le.b,xe),T.copy(le),b=xe),_=U,I=!1}function Jt(U,nt){U.side===fe?ft(s.CULL_FACE):_t(s.CULL_FACE);let Y=U.side===be;nt&&(Y=!Y),Zt(Y),U.blending===oi&&U.transparent===!1?oe(vn):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){w!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),w=U)}function yt(U){U!==yc?(_t(s.CULL_FACE),U!==M&&(U===Ta?s.cullFace(s.BACK):U===wc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),M=U}function ce(U){U!==L&&(X&&s.lineWidth(U),L=U)}function Pt(U,nt,Y){U?(_t(s.POLYGON_OFFSET_FILL),(O!==nt||B!==Y)&&(s.polygonOffset(nt,Y),O=nt,B=Y)):ft(s.POLYGON_OFFSET_FILL)}function Dt(U){U?_t(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+W-1),G!==U&&(s.activeTexture(U),G=U)}function y(U,nt,Y){Y===void 0&&(G===null?Y=s.TEXTURE0+W-1:Y=G);let J=ot[Y];J===void 0&&(J={type:void 0,texture:void 0},ot[Y]=J),(J.type!==U||J.texture!==nt)&&(G!==Y&&(s.activeTexture(Y),G=Y),s.bindTexture(U,nt||tt[U]),J.type=U,J.texture=nt)}function V(){const U=ot[G];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(U){Vt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function mt(U){$t.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function Lt(U,nt){let Y=c.get(nt);Y===void 0&&(Y=new WeakMap,c.set(nt,Y));let J=Y.get(U);J===void 0&&(J=s.getUniformBlockIndex(nt,U.name),Y.set(U,J))}function zt(U,nt){const J=c.get(nt).get(U);o.get(nt)!==J&&(s.uniformBlockBinding(nt,J,U.__bindingPointIndex),o.set(nt,J))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},G=null,ot={},h={},d=new WeakMap,p=[],u=null,g=!1,_=null,m=null,f=null,x=null,v=null,S=null,A=null,T=new Rt(0,0,0),b=0,I=!1,w=null,M=null,L=null,O=null,B=null,Vt.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:_t,disable:ft,bindFramebuffer:It,drawBuffers:Bt,useProgram:kt,setBlending:oe,setMaterial:Jt,setFlipSided:Zt,setCullFace:yt,setLineWidth:ce,setPolygonOffset:Pt,setScissorTest:Dt,activeTexture:C,bindTexture:y,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:dt,texImage3D:Gt,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:Nt,texStorage3D:et,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Ct,viewport:mt,reset:ne}}function So(s,t,e,n){const i=pp(n);switch(e){case zo:return s*t;case Vo:return s*t;case Go:return s*t*2;case Ho:return s*t/i.components*i.byteLength;case oa:return s*t/i.components*i.byteLength;case Wo:return s*t*2/i.components*i.byteLength;case ca:return s*t*2/i.components*i.byteLength;case ko:return s*t*3/i.components*i.byteLength;case Xe:return s*t*4/i.components*i.byteLength;case la:return s*t*4/i.components*i.byteLength;case ps:case ms:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gs:case _s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ar:case Cr:return Math.max(s,16)*Math.max(t,8)/4;case br:case Rr:return Math.max(s,8)*Math.max(t,8)/2;case Pr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Br:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case qr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vs:case Yr:case Kr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xo:case Jr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $r:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pp(s){switch(s){case ln:case Fo:return{byteLength:1,components:1};case Li:case Oo:case Ii:return{byteLength:2,components:1};case ra:case aa:return{byteLength:2,components:4};case Bn:case sa:case on:return{byteLength:4,components:1};case Bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function mp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let d;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return u?new OffscreenCanvas(C,y):Ts("canvas")}function _(C,y,V){let Z=1;const Q=Dt(C);if((Q.width>V||Q.height>V)&&(Z=V/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Z*Q.width),wt=Math.floor(Z*Q.height);d===void 0&&(d=g($,wt));const at=y?g($,wt):d;return at.width=$,at.height=wt,at.getContext("2d").drawImage(C,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+wt+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ze&&C.minFilter!==We}function f(C){s.generateMipmap(C)}function x(C,y,V,Z,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=y;if(y===s.RED&&(V===s.FLOAT&&($=s.R32F),V===s.HALF_FLOAT&&($=s.R16F),V===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.R8UI),V===s.UNSIGNED_SHORT&&($=s.R16UI),V===s.UNSIGNED_INT&&($=s.R32UI),V===s.BYTE&&($=s.R8I),V===s.SHORT&&($=s.R16I),V===s.INT&&($=s.R32I)),y===s.RG&&(V===s.FLOAT&&($=s.RG32F),V===s.HALF_FLOAT&&($=s.RG16F),V===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RG8UI),V===s.UNSIGNED_SHORT&&($=s.RG16UI),V===s.UNSIGNED_INT&&($=s.RG32UI),V===s.BYTE&&($=s.RG8I),V===s.SHORT&&($=s.RG16I),V===s.INT&&($=s.RG32I)),y===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),y===s.RGBA){const wt=Q?Ss:Kt.getTransfer(Z);V===s.FLOAT&&($=s.RGBA32F),V===s.HALF_FLOAT&&($=s.RGBA16F),V===s.UNSIGNED_BYTE&&($=wt===Qt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(C,y){let V;return C?y===null||y===Bn||y===di?V=s.DEPTH24_STENCIL8:y===on?V=s.DEPTH32F_STENCIL8:y===Li&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bn||y===di?V=s.DEPTH_COMPONENT24:y===on?V=s.DEPTH_COMPONENT32F:y===Li&&(V=s.DEPTH_COMPONENT16),V}function S(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==We?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&h.delete(y)}function T(C){const y=C.target;y.removeEventListener("dispose",T),w(y)}function b(C){const y=n.get(C);if(y.__webglInit===void 0)return;const V=C.source,Z=p.get(V);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(C),Object.keys(Z).length===0&&p.delete(V)}n.remove(C)}function I(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const V=C.source,Z=p.get(V);delete Z[y.__cacheKey],a.memory.textures--}function w(C){const y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let Q=0;Q<y.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let Z=0,Q=V.length;Z<Q;Z++){const $=n.get(V[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(C)}let M=0;function L(){M=0}function O(){const C=M;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),M+=1,C}function B(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function W(C,y){const V=n.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(V,C,y);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function X(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){$t(V,C,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function H(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){$t(V,C,y);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function K(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){q(V,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}const G={[Er]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},ot={[ze]:s.NEAREST,[il]:s.NEAREST_MIPMAP_NEAREST,[zi]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[zs]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},ut={[ol]:s.NEVER,[fl]:s.ALWAYS,[cl]:s.LESS,[Yo]:s.LEQUAL,[ll]:s.EQUAL,[dl]:s.GEQUAL,[hl]:s.GREATER,[ul]:s.NOTEQUAL};function Mt(C,y){if(y.type===on&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===We||y.magFilter===zs||y.magFilter===zi||y.magFilter===Fn||y.minFilter===We||y.minFilter===zs||y.minFilter===zi||y.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,G[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,G[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,G[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ot[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ot[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ze||y.minFilter!==zi&&y.minFilter!==Fn||y.type===on&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Vt(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let Q=p.get(Z);Q===void 0&&(Q={},p.set(Z,Q));const $=B(y);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[$].usedTimes++;const wt=Q[C.__cacheKey];wt!==void 0&&(Q[C.__cacheKey].usedTimes--,wt.usedTimes===0&&I(y)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return V}function $t(C,y,V){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=Vt(C,y),$=y.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+V);const wt=n.get($);if($.version!==wt.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);const at=Kt.getPrimaries(Kt.workingColorSpace),pt=y.colorSpace===_n?null:Kt.getPrimaries(y.colorSpace),Nt=y.colorSpace===_n||at===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let et=_(y.image,!1,i.maxTextureSize);et=Pt(y,et);const dt=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type);let Ct=x(y.internalFormat,dt,Gt,y.colorSpace,y.isVideoTexture);Mt(Z,y);let mt;const Lt=y.mipmaps,zt=y.isVideoTexture!==!0,ne=wt.__version===void 0||Q===!0,U=$.dataReady,nt=S(y,et);if(y.isDepthTexture)Ct=v(y.format===fi,y.type),ne&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Ct,et.width,et.height,0,dt,Gt,null));else if(y.isDataTexture)if(Lt.length>0){zt&&ne&&e.texStorage2D(s.TEXTURE_2D,nt,Ct,Lt[0].width,Lt[0].height);for(let Y=0,J=Lt.length;Y<J;Y++)mt=Lt[Y],zt?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,dt,Gt,mt.data):e.texImage2D(s.TEXTURE_2D,Y,Ct,mt.width,mt.height,0,dt,Gt,mt.data);y.generateMipmaps=!1}else zt?(ne&&e.texStorage2D(s.TEXTURE_2D,nt,Ct,et.width,et.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,dt,Gt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,et.width,et.height,0,dt,Gt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){zt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,Ct,Lt[0].width,Lt[0].height,et.depth);for(let Y=0,J=Lt.length;Y<J;Y++)if(mt=Lt[Y],y.format!==Xe)if(dt!==null)if(zt){if(U)if(y.layerUpdates.size>0){const st=So(mt.width,mt.height,y.format,y.type);for(const Tt of y.layerUpdates){const Ht=mt.data.subarray(Tt*st/mt.data.BYTES_PER_ELEMENT,(Tt+1)*st/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,Tt,mt.width,mt.height,1,dt,Ht,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,et.depth,dt,mt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ct,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,et.depth,dt,Gt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ct,mt.width,mt.height,et.depth,0,dt,Gt,mt.data)}else{zt&&ne&&e.texStorage2D(s.TEXTURE_2D,nt,Ct,Lt[0].width,Lt[0].height);for(let Y=0,J=Lt.length;Y<J;Y++)mt=Lt[Y],y.format!==Xe?dt!==null?zt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,dt,Gt,mt.data):e.texImage2D(s.TEXTURE_2D,Y,Ct,mt.width,mt.height,0,dt,Gt,mt.data)}else if(y.isDataArrayTexture)if(zt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,Ct,et.width,et.height,et.depth),U)if(y.layerUpdates.size>0){const Y=So(et.width,et.height,y.format,y.type);for(const J of y.layerUpdates){const st=et.data.subarray(J*Y/et.data.BYTES_PER_ELEMENT,(J+1)*Y/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,dt,Gt,st)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,Gt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,dt,Gt,et.data);else if(y.isData3DTexture)zt?(ne&&e.texStorage3D(s.TEXTURE_3D,nt,Ct,et.width,et.height,et.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,Gt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,dt,Gt,et.data);else if(y.isFramebufferTexture){if(ne)if(zt)e.texStorage2D(s.TEXTURE_2D,nt,Ct,et.width,et.height);else{let Y=et.width,J=et.height;for(let st=0;st<nt;st++)e.texImage2D(s.TEXTURE_2D,st,Ct,Y,J,0,dt,Gt,null),Y>>=1,J>>=1}}else if(Lt.length>0){if(zt&&ne){const Y=Dt(Lt[0]);e.texStorage2D(s.TEXTURE_2D,nt,Ct,Y.width,Y.height)}for(let Y=0,J=Lt.length;Y<J;Y++)mt=Lt[Y],zt?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,dt,Gt,mt):e.texImage2D(s.TEXTURE_2D,Y,Ct,dt,Gt,mt);y.generateMipmaps=!1}else if(zt){if(ne){const Y=Dt(et);e.texStorage2D(s.TEXTURE_2D,nt,Ct,Y.width,Y.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Gt,et)}else e.texImage2D(s.TEXTURE_2D,0,Ct,dt,Gt,et);m(y)&&f(Z),wt.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function q(C,y,V){if(y.image.length!==6)return;const Z=Vt(C,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);const $=n.get(Q);if(Q.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);const wt=Kt.getPrimaries(Kt.workingColorSpace),at=y.colorSpace===_n?null:Kt.getPrimaries(y.colorSpace),pt=y.colorSpace===_n||wt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let J=0;J<6;J++)!Nt&&!et?dt[J]=_(y.image[J],!0,i.maxCubemapSize):dt[J]=et?y.image[J].image:y.image[J],dt[J]=Pt(y,dt[J]);const Gt=dt[0],Ct=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Lt=x(y.internalFormat,Ct,mt,y.colorSpace),zt=y.isVideoTexture!==!0,ne=$.__version===void 0||Z===!0,U=Q.dataReady;let nt=S(y,Gt);Mt(s.TEXTURE_CUBE_MAP,y);let Y;if(Nt){zt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Lt,Gt.width,Gt.height);for(let J=0;J<6;J++){Y=dt[J].mipmaps;for(let st=0;st<Y.length;st++){const Tt=Y[st];y.format!==Xe?Ct!==null?zt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st,Lt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st,0,0,Tt.width,Tt.height,Ct,mt,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st,Lt,Tt.width,Tt.height,0,Ct,mt,Tt.data)}}}else{if(Y=y.mipmaps,zt&&ne){Y.length>0&&nt++;const J=Dt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Lt,J.width,J.height)}for(let J=0;J<6;J++)if(et){zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,dt[J].width,dt[J].height,Ct,mt,dt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Lt,dt[J].width,dt[J].height,0,Ct,mt,dt[J].data);for(let st=0;st<Y.length;st++){const Ht=Y[st].image[J].image;zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st+1,0,0,Ht.width,Ht.height,Ct,mt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st+1,Lt,Ht.width,Ht.height,0,Ct,mt,Ht.data)}}else{zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,mt,dt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Lt,Ct,mt,dt[J]);for(let st=0;st<Y.length;st++){const Tt=Y[st];zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st+1,0,0,Ct,mt,Tt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st+1,Lt,Ct,mt,Tt.image[J])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),$.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function tt(C,y,V,Z,Q,$){const wt=r.convert(V.format,V.colorSpace),at=r.convert(V.type),pt=x(V.internalFormat,wt,at,V.colorSpace);if(!n.get(y).__hasExternalTextures){const et=Math.max(1,y.width>>$),dt=Math.max(1,y.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,pt,et,dt,y.depth,0,wt,at,null):e.texImage2D(Q,$,pt,et,dt,0,wt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,n.get(V).__webglTexture,0,Zt(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,n.get(V).__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(C,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=v(y.stencilBuffer,Q),wt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Zt(y);yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,$,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,C)}else{const Z=y.textures;for(let Q=0;Q<Z.length;Q++){const $=Z[Q],wt=r.convert($.format,$.colorSpace),at=r.convert($.type),pt=x($.internalFormat,wt,at,$.colorSpace),Nt=Zt(y);V&&yt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,pt,y.width,y.height):yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt,pt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Z=n.get(y.depthTexture).__webglTexture,Q=Zt(y);if(y.depthTexture.format===ci)yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(y.depthTexture.format===fi)yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function It(C){const y=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ft(y.__webglFramebuffer,C)}else if(V){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=s.createRenderbuffer(),_t(y.__webglDepthbuffer[Z],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),_t(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,y,V){const Z=n.get(C);y!==void 0&&tt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&It(C)}function kt(C){const y=C.texture,V=n.get(C),Z=n.get(y);C.addEventListener("dispose",T);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let pt=0;pt<y.mipmaps.length;pt++)V.__webglFramebuffer[at][pt]=s.createFramebuffer()}else V.__webglFramebuffer[at]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)V.__webglFramebuffer[at]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(wt)for(let at=0,pt=Q.length;at<pt;at++){const Nt=n.get(Q[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&yt(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const pt=Q[at];V.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Nt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),dt=x(pt.internalFormat,Nt,et,pt.colorSpace,C.isXRRenderTarget===!0),Gt=Zt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,V.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)tt(V.__webglFramebuffer[at][pt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else tt(V.__webglFramebuffer[at],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,pt=Q.length;at<pt;at++){const Nt=Q[at],et=n.get(Nt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Mt(s.TEXTURE_2D,Nt),tt(V.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Nt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Mt(at,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)tt(V.__webglFramebuffer[pt],C,y,s.COLOR_ATTACHMENT0,at,pt);else tt(V.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,at,0);m(y)&&f(at),e.unbindTexture()}C.depthBuffer&&It(C)}function ie(C){const y=C.textures;for(let V=0,Z=y.length;V<Z;V++){const Q=y[V];if(m(Q)){const $=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,wt=n.get(Q).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}const D=[],oe=[];function Jt(C){if(C.samples>0){if(yt(C)===!1){const y=C.textures,V=C.width,Z=C.height;let Q=s.COLOR_BUFFER_BIT;const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(C),at=y.length>1;if(at)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const Nt=n.get(y[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,V,Z,0,0,V,Z,Q,s.NEAREST),c===!0&&(D.length=0,oe.length=0,D.push(s.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(D.push($),oe.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const Nt=n.get(y[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Zt(C){return Math.min(i.maxSamples,C.samples)}function yt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ce(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Pt(C,y){const V=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==yn&&V!==_n&&(Kt.getTransfer(V)===Qt?(Z!==Xe||Q!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Bt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=yt}function gp(s,t){function e(n,i=_n){let r;const a=Kt.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===ra)return s.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fo)return s.BYTE;if(n===Oo)return s.SHORT;if(n===Li)return s.UNSIGNED_SHORT;if(n===sa)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Ii)return s.HALF_FLOAT;if(n===zo)return s.ALPHA;if(n===ko)return s.RGB;if(n===Xe)return s.RGBA;if(n===Vo)return s.LUMINANCE;if(n===Go)return s.LUMINANCE_ALPHA;if(n===ci)return s.DEPTH_COMPONENT;if(n===fi)return s.DEPTH_STENCIL;if(n===Ho)return s.RED;if(n===oa)return s.RED_INTEGER;if(n===Wo)return s.RG;if(n===ca)return s.RG_INTEGER;if(n===la)return s.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===br||n===Ar||n===Rr||n===Cr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===br)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pr||n===Lr||n===Ir)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pr||n===Lr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ir)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dr||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===kr||n===Vr||n===Gr||n===Hr||n===Wr||n===Xr||n===qr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ur)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Or)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Br)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vs||n===Yr||n===Kr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vs)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===Jr||n===$r||n===Zr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class _p extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class de extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&p>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mp=`
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

}`;class Sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Pe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:xp,fragmentShader:Mp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yp extends mi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,g=null;const _=new Sp,m=e.getContextAttributes();let f=null,x=null;const v=[],S=[],A=new ht;let T=null;const b=new Ne;b.layers.enable(1),b.viewport=new te;const I=new Ne;I.layers.enable(2),I.viewport=new te;const w=[b,I],M=new _p;M.layers.enable(1),M.layers.enable(2);let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=v[q];return tt===void 0&&(tt=new dr,v[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=v[q];return tt===void 0&&(tt=new dr,v[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=v[q];return tt===void 0&&(tt=new dr,v[q]=tt),tt.getHandSpace()};function B(q){const tt=S.indexOf(q.inputSource);if(tt===-1)return;const _t=v[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let q=0;q<v.length;q++){const tt=S[q];tt!==null&&(S[q]=null,v[q].disconnect(tt))}L=null,O=null,_.reset(),t.setRenderTarget(f),u=null,p=null,d=null,i=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new zn(u.framebufferWidth,u.framebufferHeight,{format:Xe,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?fi:ci,_t=m.stencil?di:Bn);const It={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(It),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new zn(p.textureWidth,p.textureHeight,{format:Xe,type:ln,depthTexture:new ac(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let tt=0;tt<q.removed.length;tt++){const _t=q.removed[tt],ft=S.indexOf(_t);ft>=0&&(S[ft]=null,v[ft].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){const _t=q.added[tt];let ft=S.indexOf(_t);if(ft===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=S.length){S.push(_t),ft=Bt;break}else if(S[Bt]===null){S[Bt]=_t,ft=Bt;break}if(ft===-1)break}const It=v[ft];It&&It.connect(_t)}}const H=new R,K=new R;function G(q,tt,_t){H.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const ft=H.distanceTo(K),It=tt.projectionMatrix.elements,Bt=_t.projectionMatrix.elements,kt=It[14]/(It[10]-1),ie=It[14]/(It[10]+1),D=(It[9]+1)/It[5],oe=(It[9]-1)/It[5],Jt=(It[8]-1)/It[0],Zt=(Bt[8]+1)/Bt[0],yt=kt*Jt,ce=kt*Zt,Pt=ft/(-Jt+Zt),Dt=Pt*-Jt;tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=kt+Pt,y=ie+Pt,V=yt-Dt,Z=ce+(ft-Dt),Q=D*ie/y*C,$=oe*ie/y*C;q.projectionMatrix.makePerspective(V,Z,Q,$,C,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ot(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),M.near=I.near=b.near=q.near,M.far=I.far=b.far=q.far,(L!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,O=M.far,b.near=L,b.far=O,I.near=L,I.far=O,b.updateProjectionMatrix(),I.updateProjectionMatrix(),q.updateProjectionMatrix());const tt=q.parent,_t=M.cameras;ot(M,tt);for(let ft=0;ft<_t.length;ft++)ot(_t[ft],tt);_t.length===2?G(M,b,I):M.projectionMatrix.copy(b.projectionMatrix),ut(q,M,tt)};function ut(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Mt=null;function Vt(q,tt){if(h=tt.getViewerPose(l||a),g=tt,h!==null){const _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let ft=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let Bt=0;Bt<_t.length;Bt++){const kt=_t[Bt];let ie=null;if(u!==null)ie=u.getViewport(kt);else{const oe=d.getViewSubImage(p,kt);ie=oe.viewport,Bt===0&&(t.setRenderTargetTextures(x,oe.colorTexture,p.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(x))}let D=w[Bt];D===void 0&&(D=new Ne,D.layers.enable(Bt),D.viewport=new te,w[Bt]=D),D.matrix.fromArray(kt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(kt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ie.x,ie.y,ie.width,ie.height),Bt===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(D)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){const Bt=d.getDepthInformation(_t[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let _t=0;_t<v.length;_t++){const ft=S[_t],It=v[_t];ft!==null&&It!==void 0&&It.update(ft,tt,l||a)}Mt&&Mt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const $t=new sc;$t.setAnimationLoop(Vt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const Cn=new $e,wp=new ee;function Ep(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ec(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&u(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,Cn.copy(S),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),m.envMapRotation.value.setFromMatrix4(wp.makeRotationFromEuler(Cn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function l(x,v){let S=i[x.id];S===void 0&&(g(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const T=t.render.frame;r[x.id]!==T&&(p(x),r[x.id]=T)}function h(x){const v=d();x.__bindingPointIndex=v;const S=s.createBuffer(),A=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=i[x.id],S=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,b=S.length;T<b;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,M=I.length;w<M;w++){const L=I[w];if(u(L,T,w,A)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let X=0;X<B.length;X++){const H=B[X],K=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(x,v,S,A){const T=x.value,b=v+"_"+S;if(A[b]===void 0)return typeof T=="number"||typeof T=="boolean"?A[b]=T:A[b]=T.clone(),!0;{const I=A[b];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[b]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){const v=x.uniforms;let S=0;const A=16;for(let b=0,I=v.length;b<I;b++){const w=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,L=w.length;M<L;M++){const O=w[M],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,X=B.length;W<X;W++){const H=B[W],K=_(H),G=S%A,ot=G%K.boundary,ut=G+ot;S+=ot,ut!==0&&A-ut<K.storage&&(S+=A-ut),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=K.storage}}}const T=S%A;return T>0&&(S+=A-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class bp{constructor(t={}){const{canvas:e=ml(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=xn,this.toneMappingExposure=1;const v=this;let S=!1,A=0,T=0,b=null,I=-1,w=null;const M=new te,L=new te;let O=null;const B=new Rt(0);let W=0,X=e.width,H=e.height,K=1,G=null,ot=null;const ut=new te(0,0,X,H),Mt=new te(0,0,X,H);let Vt=!1;const $t=new da;let q=!1,tt=!1;const _t=new ee,ft=new R,It=new te,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ie(){return b===null?K:1}let D=n;function oe(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){const N="webgl2";if(D=oe(N,E),D===null)throw oe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Jt,Zt,yt,ce,Pt,Dt,C,y,V,Z,Q,$,wt,at,pt,Nt,et,dt,Gt,Ct,mt,Lt,zt,ne;function U(){Jt=new Ld(D),Jt.init(),Lt=new gp(D,Jt),Zt=new Td(D,Jt,t,Lt),yt=new fp(D),ce=new Ud(D),Pt=new Qf,Dt=new mp(D,Jt,yt,Pt,Zt,Lt,ce),C=new Ad(v),y=new Pd(v),V=new Vl(D),zt=new wd(D,V),Z=new Id(D,V,ce,zt),Q=new Fd(D,Z,V,ce),Gt=new Nd(D,Zt,Dt),Nt=new bd(Pt),$=new jf(v,C,y,Jt,Zt,zt,Nt),wt=new Ep(v,Pt),at=new ep,pt=new op(Jt),dt=new yd(v,C,y,yt,Q,p,c),et=new dp(v,Q,Zt),ne=new Tp(D,ce,Zt,yt),Ct=new Ed(D,Jt,ce),mt=new Dd(D,Jt,ce),ce.programs=$.programs,v.capabilities=Zt,v.extensions=Jt,v.properties=Pt,v.renderLists=at,v.shadowMap=et,v.state=yt,v.info=ce}U();const nt=new yp(v,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(X,H,!1))},this.getSize=function(E){return E.set(X,H)},this.setSize=function(E,N,z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,H=N,e.width=Math.floor(E*K),e.height=Math.floor(N*K),z===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*K,H*K).floor()},this.setDrawingBufferSize=function(E,N,z){X=E,H=N,K=z,e.width=Math.floor(E*z),e.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,N,z,k){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,N,z,k),yt.viewport(M.copy(ut).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,N,z,k){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,N,z,k),yt.scissor(L.copy(Mt).multiplyScalar(K).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(E){yt.setScissorTest(Vt=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(E=!0,N=!0,z=!0){let k=0;if(E){let F=!1;if(b!==null){const it=b.texture.format;F=it===la||it===ca||it===oa}if(F){const it=b.texture.type,ct=it===ln||it===Bn||it===Li||it===di||it===ra||it===aa,vt=dt.getClearColor(),xt=dt.getClearAlpha(),bt=vt.r,At=vt.g,Et=vt.b;ct?(u[0]=bt,u[1]=At,u[2]=Et,u[3]=xt,D.clearBufferuiv(D.COLOR,0,u)):(g[0]=bt,g[1]=At,g[2]=Et,g[3]=xt,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",st,!1),at.dispose(),pt.dispose(),Pt.dispose(),C.dispose(),y.dispose(),Q.dispose(),zt.dispose(),ne.dispose(),$.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",qe),nt.removeEventListener("sessionend",va),wn.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ce.autoReset,N=et.enabled,z=et.autoUpdate,k=et.needsUpdate,F=et.type;U(),ce.autoReset=E,et.enabled=N,et.autoUpdate=z,et.needsUpdate=k,et.type=F}function st(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){const N=E.target;N.removeEventListener("dispose",Tt),Ht(N)}function Ht(E){le(E),Pt.remove(E)}function le(E){const N=Pt.get(E).programs;N!==void 0&&(N.forEach(function(z){$.releaseProgram(z)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,k,F,it){N===null&&(N=Bt);const ct=F.isMesh&&F.matrixWorld.determinant()<0,vt=vc(E,N,z,k,F);yt.setMaterial(k,ct);let xt=z.index,bt=1;if(k.wireframe===!0){if(xt=Z.getWireframeAttribute(z),xt===void 0)return;bt=2}const At=z.drawRange,Et=z.attributes.position;let Xt=At.start*bt,se=(At.start+At.count)*bt;it!==null&&(Xt=Math.max(Xt,it.start*bt),se=Math.min(se,(it.start+it.count)*bt)),xt!==null?(Xt=Math.max(Xt,0),se=Math.min(se,xt.count)):Et!=null&&(Xt=Math.max(Xt,0),se=Math.min(se,Et.count));const re=se-Xt;if(re<0||re===1/0)return;zt.setup(F,k,vt,z,xt);let Le,qt=Ct;if(xt!==null&&(Le=V.get(xt),qt=mt,qt.setIndex(Le)),F.isMesh)k.wireframe===!0?(yt.setLineWidth(k.wireframeLinewidth*ie()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(F.isLine){let St=k.linewidth;St===void 0&&(St=1),yt.setLineWidth(St*ie()),F.isLineSegments?qt.setMode(D.LINES):F.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else F.isPoints?qt.setMode(D.POINTS):F.isSprite&&qt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const St=F._multiDrawStarts,Me=F._multiDrawCounts,Yt=F._multiDrawCount,ke=xt?V.get(xt).bytesPerElement:1,Vn=Pt.get(k).currentProgram.getUniforms();for(let Ie=0;Ie<Yt;Ie++)Vn.setValue(D,"_gl_DrawID",Ie),qt.render(St[Ie]/ke,Me[Ie])}else if(F.isInstancedMesh)qt.renderInstances(Xt,re,F.count);else if(z.isInstancedBufferGeometry){const St=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Me=Math.min(z.instanceCount,St);qt.renderInstances(Xt,re,Me)}else qt.render(Xt,re)};function xe(E,N,z){E.transparent===!0&&E.side===fe&&E.forceSinglePass===!1?(E.side=be,E.needsUpdate=!0,Bi(E,N,z),E.side=Sn,E.needsUpdate=!0,Bi(E,N,z),E.side=fe):Bi(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),m=pt.get(z),m.init(N),x.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const k=new Set;return E.traverse(function(F){const it=F.material;if(it)if(Array.isArray(it))for(let ct=0;ct<it.length;ct++){const vt=it[ct];xe(vt,z,F),k.add(vt)}else xe(it,z,F),k.add(it)}),x.pop(),m=null,k},this.compileAsync=function(E,N,z=null){const k=this.compile(E,N,z);return new Promise(F=>{function it(){if(k.forEach(function(ct){Pt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){F(E);return}setTimeout(it,10)}Jt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Wt=null;function Qe(E){Wt&&Wt(E)}function qe(){wn.stop()}function va(){wn.start()}const wn=new sc;wn.setAnimationLoop(Qe),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(E){Wt=E,nt.setAnimationLoop(E),E===null?wn.stop():wn.start()},nt.addEventListener("sessionstart",qe),nt.addEventListener("sessionend",va),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,b),m=pt.get(E,x.length),m.init(N),x.push(m),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$t.setFromProjectionMatrix(_t),tt=this.localClippingEnabled,q=Nt.init(this.clippingPlanes,tt),_=at.get(E,f.length),_.init(),f.push(_),nt.enabled===!0&&nt.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&Ns(it,N,-1/0,v.sortObjects)}Ns(E,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,ot),kt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,kt&&dt.addToRenderList(_,E),this.info.render.frame++,q===!0&&Nt.beginShadows();const z=m.state.shadowsArray;et.render(z,E,N),q===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,F=_.transmissive;if(m.setupLights(),N.isArrayCamera){const it=N.cameras;if(F.length>0)for(let ct=0,vt=it.length;ct<vt;ct++){const xt=it[ct];Ma(k,F,E,xt)}kt&&dt.render(E);for(let ct=0,vt=it.length;ct<vt;ct++){const xt=it[ct];xa(_,E,xt,xt.viewport)}}else F.length>0&&Ma(k,F,E,N),kt&&dt.render(E),xa(_,E,N);b!==null&&(Dt.updateMultisampleRenderTarget(b),Dt.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(v,E,N),zt.resetDefaultState(),I=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&Nt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ns(E,N,z,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$t.intersectsSprite(E)){k&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const ct=Q.update(E),vt=E.material;vt.visible&&_.push(E,ct,vt,z,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$t.intersectsObject(E))){const ct=Q.update(E),vt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),It.copy(ct.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(vt)){const xt=ct.groups;for(let bt=0,At=xt.length;bt<At;bt++){const Et=xt[bt],Xt=vt[Et.materialIndex];Xt&&Xt.visible&&_.push(E,ct,Xt,z,It.z,Et)}}else vt.visible&&_.push(E,ct,vt,z,It.z,null)}}const it=E.children;for(let ct=0,vt=it.length;ct<vt;ct++)Ns(it[ct],N,z,k)}function xa(E,N,z,k){const F=E.opaque,it=E.transmissive,ct=E.transparent;m.setupLightsView(z),q===!0&&Nt.setGlobalState(v.clippingPlanes,z),k&&yt.viewport(M.copy(k)),F.length>0&&Oi(F,N,z),it.length>0&&Oi(it,N,z),ct.length>0&&Oi(ct,N,z),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Ma(E,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new zn(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Ii:ln,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const it=m.state.transmissionRenderTarget[k.id],ct=k.viewport||M;it.setSize(ct.z,ct.w);const vt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),kt&&dt.render(z);const xt=v.toneMapping;v.toneMapping=xn;const bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),q===!0&&Nt.setGlobalState(v.clippingPlanes,k),Oi(E,z,k),Dt.updateMultisampleRenderTarget(it),Dt.updateRenderTargetMipmap(it),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Et=0,Xt=N.length;Et<Xt;Et++){const se=N[Et],re=se.object,Le=se.geometry,qt=se.material,St=se.group;if(qt.side===fe&&re.layers.test(k.layers)){const Me=qt.side;qt.side=be,qt.needsUpdate=!0,Sa(re,z,k,Le,qt,St),qt.side=Me,qt.needsUpdate=!0,At=!0}}At===!0&&(Dt.updateMultisampleRenderTarget(it),Dt.updateRenderTargetMipmap(it))}v.setRenderTarget(vt),v.setClearColor(B,W),bt!==void 0&&(k.viewport=bt),v.toneMapping=xt}function Oi(E,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,it=E.length;F<it;F++){const ct=E[F],vt=ct.object,xt=ct.geometry,bt=k===null?ct.material:k,At=ct.group;vt.layers.test(z.layers)&&Sa(vt,N,z,xt,bt,At)}}function Sa(E,N,z,k,F,it){E.onBeforeRender(v,N,z,k,F,it),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.transparent===!0&&F.side===fe&&F.forceSinglePass===!1?(F.side=be,F.needsUpdate=!0,v.renderBufferDirect(z,N,k,F,E,it),F.side=Sn,F.needsUpdate=!0,v.renderBufferDirect(z,N,k,F,E,it),F.side=fe):v.renderBufferDirect(z,N,k,F,E,it),E.onAfterRender(v,N,z,k,F,it)}function Bi(E,N,z){N.isScene!==!0&&(N=Bt);const k=Pt.get(E),F=m.state.lights,it=m.state.shadowsArray,ct=F.state.version,vt=$.getParameters(E,F.state,it,N,z),xt=$.getProgramCacheKey(vt);let bt=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?y:C).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",Tt),bt=new Map,k.programs=bt);let At=bt.get(xt);if(At!==void 0){if(k.currentProgram===At&&k.lightsStateVersion===ct)return wa(E,vt),At}else vt.uniforms=$.getUniforms(E),E.onBeforeCompile(vt,v),At=$.acquireProgram(vt,xt),bt.set(xt,At),k.uniforms=vt.uniforms;const Et=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=Nt.uniform),wa(E,vt),k.needsLights=Mc(E),k.lightsStateVersion=ct,k.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=At,k.uniformsList=null,At}function ya(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function wa(E,N){const z=Pt.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function vc(E,N,z,k,F){N.isScene!==!0&&(N=Bt),Dt.resetTextureUnits();const it=N.fog,ct=k.isMeshStandardMaterial?N.environment:null,vt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yn,xt=(k.isMeshStandardMaterial?y:C).get(k.envMap||ct),bt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,At=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color;let re=xn;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(re=v.toneMapping);const Le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qt=Le!==void 0?Le.length:0,St=Pt.get(k),Me=m.state.lights;if(q===!0&&(tt===!0||E!==w)){const Fe=E===w&&k.id===I;Nt.setState(k,E,Fe)}let Yt=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Me.state.version||St.outputColorSpace!==vt||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==xt||k.fog===!0&&St.fog!==it||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Nt.numPlanes||St.numIntersection!==Nt.numIntersection)||St.vertexAlphas!==bt||St.vertexTangents!==At||St.morphTargets!==Et||St.morphNormals!==Xt||St.morphColors!==se||St.toneMapping!==re||St.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,St.__version=k.version);let ke=St.currentProgram;Yt===!0&&(ke=Bi(k,N,F));let Vn=!1,Ie=!1,Fs=!1;const he=ke.getUniforms(),hn=St.uniforms;if(yt.useProgram(ke.program)&&(Vn=!0,Ie=!0,Fs=!0),k.id!==I&&(I=k.id,Ie=!0),Vn||w!==E){he.setValue(D,"projectionMatrix",E.projectionMatrix),he.setValue(D,"viewMatrix",E.matrixWorldInverse);const Fe=he.map.cameraPosition;Fe!==void 0&&Fe.setValue(D,ft.setFromMatrixPosition(E.matrixWorld)),Zt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ie=!0,Fs=!0)}if(F.isSkinnedMesh){he.setOptional(D,F,"bindMatrix"),he.setOptional(D,F,"bindMatrixInverse");const Fe=F.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),he.setValue(D,"boneTexture",Fe.boneTexture,Dt))}F.isBatchedMesh&&(he.setOptional(D,F,"batchingTexture"),he.setValue(D,"batchingTexture",F._matricesTexture,Dt),he.setOptional(D,F,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",F._indirectTexture,Dt),he.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",F._colorsTexture,Dt));const Os=z.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Gt.update(F,z,ke),(Ie||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,he.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(hn.envMap.value=xt,hn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(hn.envMapIntensity.value=N.environmentIntensity),Ie&&(he.setValue(D,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&xc(hn,Fs),it&&k.fog===!0&&wt.refreshFogUniforms(hn,it),wt.refreshMaterialUniforms(hn,k,K,H,m.state.transmissionRenderTarget[E.id]),xs.upload(D,ya(St),hn,Dt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xs.upload(D,ya(St),hn,Dt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(D,"center",F.center),he.setValue(D,"modelViewMatrix",F.modelViewMatrix),he.setValue(D,"normalMatrix",F.normalMatrix),he.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fe=k.uniformsGroups;for(let Bs=0,Sc=Fe.length;Bs<Sc;Bs++){const Ea=Fe[Bs];ne.update(Ea,ke),ne.bind(Ea,ke)}}return ke}function xc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Mc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,N,z){Pt.get(E.texture).__webglTexture=N,Pt.get(E.depthTexture).__webglTexture=z;const k=Pt.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const z=Pt.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){b=E,A=N,T=z;let k=!0,F=null,it=!1,ct=!1;if(E){const xt=Pt.get(E);xt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):xt.__webglFramebuffer===void 0?Dt.setupRenderTarget(E):xt.__hasExternalTextures&&Dt.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);const bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ct=!0);const At=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(At[N])?F=At[N][z]:F=At[N],it=!0):E.samples>0&&Dt.useMultisampledRTT(E)===!1?F=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(At)?F=At[z]:F=At,M.copy(E.viewport),L.copy(E.scissor),O=E.scissorTest}else M.copy(ut).multiplyScalar(K).floor(),L.copy(Mt).multiplyScalar(K).floor(),O=Vt;if(yt.bindFramebuffer(D.FRAMEBUFFER,F)&&k&&yt.drawBuffers(E,F),yt.viewport(M),yt.scissor(L),yt.setScissorTest(O),it){const xt=Pt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,z)}else if(ct){const xt=Pt.get(E.texture),bt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,bt)}I=-1},this.readRenderTargetPixels=function(E,N,z,k,F,it,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){yt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const xt=E.texture,bt=xt.format,At=xt.type;if(!Zt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&z>=0&&z<=E.height-F&&D.readPixels(N,z,k,F,Lt.convert(bt),Lt.convert(At),it)}finally{const xt=b!==null?Pt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,k,F,it,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){yt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const xt=E.texture,bt=xt.format,At=xt.type;if(!Zt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-k&&z>=0&&z<=E.height-F){const Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(N,z,k,F,Lt.convert(bt),Lt.convert(At),0),D.flush();const Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await gl(D,Xt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it)}finally{D.deleteBuffer(Et),D.deleteSync(Xt)}return it}}finally{const xt=b!==null?Pt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(E,N=null,z=0){E.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(E.image.width*k),it=Math.floor(E.image.height*k),ct=N!==null?N.x:0,vt=N!==null?N.y:0;Dt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ct,vt,F,it),yt.unbindTexture()},this.copyTextureToTexture=function(E,N,z=null,k=null,F=0){E.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let it,ct,vt,xt,bt,At;z!==null?(it=z.max.x-z.min.x,ct=z.max.y-z.min.y,vt=z.min.x,xt=z.min.y):(it=E.image.width,ct=E.image.height,vt=0,xt=0),k!==null?(bt=k.x,At=k.y):(bt=0,At=0);const Et=Lt.convert(N.format),Xt=Lt.convert(N.type);Dt.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),re=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Le=D.getParameter(D.UNPACK_SKIP_PIXELS),qt=D.getParameter(D.UNPACK_SKIP_ROWS),St=D.getParameter(D.UNPACK_SKIP_IMAGES),Me=E.isCompressedTexture?E.mipmaps[F]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,bt,At,it,ct,Et,Xt,Me.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,bt,At,Me.width,Me.height,Et,Me.data):D.texSubImage2D(D.TEXTURE_2D,F,bt,At,it,ct,Et,Xt,Me),D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,St),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z=null,k=null,F=0){E.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0);let it,ct,vt,xt,bt,At,Et,Xt,se;const re=E.isCompressedTexture?E.mipmaps[F]:E.image;z!==null?(it=z.max.x-z.min.x,ct=z.max.y-z.min.y,vt=z.max.z-z.min.z,xt=z.min.x,bt=z.min.y,At=z.min.z):(it=re.width,ct=re.height,vt=re.depth,xt=0,bt=0,At=0),k!==null?(Et=k.x,Xt=k.y,se=k.z):(Et=0,Xt=0,se=0);const Le=Lt.convert(N.format),qt=Lt.convert(N.type);let St;if(N.isData3DTexture)Dt.setTexture3D(N,0),St=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Dt.setTexture2DArray(N,0),St=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Me=D.getParameter(D.UNPACK_ROW_LENGTH),Yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ke=D.getParameter(D.UNPACK_SKIP_PIXELS),Vn=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(St,F,Et,Xt,se,it,ct,vt,Le,qt,re.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(St,F,Et,Xt,se,it,ct,vt,Le,re.data):D.texSubImage3D(St,F,Et,Xt,se,it,ct,vt,Le,qt,re),D.pixelStorei(D.UNPACK_ROW_LENGTH,Me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),F===0&&N.generateMipmaps&&D.generateMipmap(St),yt.unbindTexture()},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&Dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Dt.setTextureCube(E,0):E.isData3DTexture?Dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Dt.setTexture2DArray(E,0):Dt.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ha?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Ps?"display-p3":"srgb"}}class ai{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new ai(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ap extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ta extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bs=new R,As=new R,yo=new ee,wi=new ua,os=new Fi,fr=new R,wo=new R;class uc extends pe{constructor(t=new ae,e=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)bs.fromBufferAttribute(e,i-1),As.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=bs.distanceTo(As);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),os.radius+=r,t.ray.intersectsSphere(os)===!1)return;yo.copy(i).invert(),wi.copy(t.ray).applyMatrix4(yo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=l){const f=h.getX(_),x=h.getX(_+1),v=cs(this,t,wi,c,f,x);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(u),f=cs(this,t,wi,c,_,m);f&&e.push(f)}}else{const u=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=l){const f=cs(this,t,wi,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=cs(this,t,wi,c,g-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cs(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(bs.fromBufferAttribute(a,i),As.fromBufferAttribute(a,r),e.distanceSqToSegment(bs,As,fr,wo)>n)return;fr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(fr);if(!(c<t.near||c>t.far))return{distance:c,point:wo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class Rp extends uc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Is extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eo=new ee,ea=new ua,ls=new Fi,hs=new R;class pa extends pe{constructor(t=new ae,e=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;Eo.copy(i).invert(),ea.copy(t.ray).applyMatrix4(Eo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=p,_=u;g<_;g++){const m=l.getX(g);hs.fromBufferAttribute(d,m),To(hs,m,c,i,t,e,this)}}else{const p=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=p,_=u;g<_;g++)hs.fromBufferAttribute(d,g),To(hs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function To(s,t,e,n,i,r,a){const o=ea.distanceSqToPoint(s);if(o<e){const c=new R;ea.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class je{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],p=n[i+1]-h,u=(a-h)/p;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ht:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],a=[],o=new R,c=new ee;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Se(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Se(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],u*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ma extends je{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,u=l-this.aY;c=p*h-u*d+this.aX,l=p*d+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cp extends ma{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ga(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,u*=h,i(a,o,p,u)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const us=new R,pr=new ga,mr=new ga,gr=new ga;class On extends je{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(us.subVectors(i[0],i[1]).add(i[0]),l=us);const d=i[o%r],p=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(us.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=us),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pr.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,g,_,m),mr.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,g,_,m),gr.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(pr.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),mr.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),gr.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(pr.calc(c),mr.calc(c),gr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Pp(s,t){const e=1-s;return e*e*t}function Lp(s,t){return 2*(1-s)*s*t}function Ip(s,t){return s*s*t}function Ri(s,t,e,n){return Pp(s,t)+Lp(s,e)+Ip(s,n)}function Dp(s,t){const e=1-s;return e*e*e*t}function Up(s,t){const e=1-s;return 3*e*e*s*t}function Np(s,t){return 3*(1-s)*s*s*t}function Fp(s,t){return s*s*s*t}function Ci(s,t,e,n,i){return Dp(s,t)+Up(s,e)+Np(s,n)+Fp(s,i)}class dc extends je{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ci(t,i.x,r.x,a.x,o.x),Ci(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Op extends je{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ci(t,i.x,r.x,a.x,o.x),Ci(t,i.y,r.y,a.y,o.y),Ci(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fc extends je{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bp extends je{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pc extends je{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ri(t,i.x,r.x,a.x),Ri(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends je{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ri(t,i.x,r.x,a.x),Ri(t,i.y,r.y,a.y),Ri(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(bo(o,c.x,l.x,h.x,d.x),bo(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var na=Object.freeze({__proto__:null,ArcCurve:Cp,CatmullRomCurve3:On,CubicBezierCurve:dc,CubicBezierCurve3:Op,EllipseCurve:ma,LineCurve:fc,LineCurve3:Bp,QuadraticBezierCurve:pc,QuadraticBezierCurve3:mc,SplineCurve:gc});class zp extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new na[i.type]().fromJSON(i))}return this}}class kp extends zp{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fc(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new pc(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new dc(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new ma(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ds extends ae{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Se(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new R,p=new ht,u=new R,g=new R,_=new R;let m=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,u.x=f*1,u.y=-m,u.z=f*0,_.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,u.x=f*1,u.y=-m,u.z=f*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),c.push(u.x,u.y,u.z),_.copy(g)}for(let x=0;x<=e;x++){const v=n+x*h*i,S=Math.sin(v),A=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*S,d.y=t[T].y,d.z=t[T].x*A,a.push(d.x,d.y,d.z),p.x=x/e,p.y=T/(t.length-1),o.push(p.x,p.y);const b=c[3*T+0]*S,I=c[3*T+1],w=c[3*T+0]*A;l.push(b,I,w)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const S=v+x*t.length,A=S,T=S+t.length,b=S+t.length+1,I=S+1;r.push(A,T,I),r.push(b,I,T)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.points,t.segments,t.phiStart,t.phiLength)}}class Pi extends Ds{constructor(t=1,e=1,n=4,i=8){const r=new kp;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Pi(t.radius,t.length,t.capSegments,t.radialSegments)}}class lt extends ae{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],p=[],u=[];let g=0;const _=[],m=n/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(u,2));function x(){const S=new R,A=new R;let T=0;const b=(e-t)/n;for(let I=0;I<=r;I++){const w=[],M=I/r,L=M*(e-t)+t;for(let O=0;O<=i;O++){const B=O/i,W=B*c+o,X=Math.sin(W),H=Math.cos(W);A.x=L*X,A.y=-M*n+m,A.z=L*H,d.push(A.x,A.y,A.z),S.set(X,b,H).normalize(),p.push(S.x,S.y,S.z),u.push(B,1-M),w.push(g++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const M=_[w][I],L=_[w+1][I],O=_[w+1][I+1],B=_[w][I+1];h.push(M,L,B),h.push(L,O,B),T+=6}l.addGroup(f,T,0),f+=T}function v(S){const A=g,T=new ht,b=new R;let I=0;const w=S===!0?t:e,M=S===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*M,0),p.push(0,M,0),u.push(.5,.5),g++;const L=g;for(let O=0;O<=i;O++){const W=O/i*c+o,X=Math.cos(W),H=Math.sin(W);b.x=w*H,b.y=m*M,b.z=w*X,d.push(b.x,b.y,b.z),p.push(0,M,0),T.x=X*.5+.5,T.y=H*.5*M+.5,u.push(T.x,T.y),g++}for(let O=0;O<i;O++){const B=A+O,W=L+O;S===!0?h.push(W,W+1,B):h.push(W+1,W,B),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ce extends lt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ce(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _a extends ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new R,S=new R,A=new R;for(let T=0;T<e.length;T+=3)u(e[T+0],v),u(e[T+1],S),u(e[T+2],A),c(v,S,A,x)}function c(x,v,S,A){const T=A+1,b=[];for(let I=0;I<=T;I++){b[I]=[];const w=x.clone().lerp(S,I/T),M=v.clone().lerp(S,I/T),L=T-I;for(let O=0;O<=L;O++)O===0&&I===T?b[I][O]=w:b[I][O]=w.clone().lerp(M,O/L)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){const M=Math.floor(w/2);w%2===0?(p(b[I][M+1]),p(b[I+1][M]),p(b[I][M])):(p(b[I][M+1]),p(b[I+1][M+1]),p(b[I+1][M]))}}function l(x){const v=new R;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(x),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const x=new R;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const S=m(x)/2/Math.PI+.5,A=f(x)/Math.PI+.5;a.push(S,1-A)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const v=a[x+0],S=a[x+2],A=a[x+4],T=Math.max(v,S,A),b=Math.min(v,S,A);T>.9&&b<.1&&(v<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function p(x){r.push(x.x,x.y,x.z)}function u(x,v){const S=x*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const x=new R,v=new R,S=new R,A=new R,T=new ht,b=new ht,I=new ht;for(let w=0,M=0;w<r.length;w+=9,M+=6){x.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),A.copy(x).add(v).add(S).divideScalar(3);const L=m(A);_(T,M+0,x,L),_(b,M+2,v,L),_(I,M+4,S,L)}}function _(x,v,S,A){A<0&&x.x===1&&(a[v]=x.x-1),S.x===0&&S.z===0&&(a[v]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.vertices,t.indices,t.radius,t.details)}}class Rs extends _a{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rs(t.radius,t.detail)}}class Ut extends ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,p=new R,u=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const T=A/e;d.x=-t*Math.cos(i+T*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(i+T*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),m.push(T+S,1-v),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],S=h[f][x],A=h[f+1][x],T=h[f+1][x+1];(f!==0||a>0)&&u.push(v,S,T),(f!==n-1||c<Math.PI)&&u.push(S,A,T)}this.setIndex(u),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ve extends ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,d=new R,p=new R;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const _=g/i*r,m=u/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const _=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,f=(i+1)*(u-1)+g,x=(i+1)*u+g;a.push(_,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mn extends ae{constructor(t=new mc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,l=new ht;let h=new R;const d=[],p=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(u,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),x(),f()}function m(v){h=t.getPointAt(v/e,h);const S=a.normals[v],A=a.binormals[v];for(let T=0;T<=i;T++){const b=T/i*Math.PI*2,I=Math.sin(b),w=-Math.cos(b);c.x=w*S.x+I*A.x,c.y=w*S.y+I*A.y,c.z=w*S.z+I*A.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let S=1;S<=i;S++){const A=(i+1)*(v-1)+(S-1),T=(i+1)*v+(S-1),b=(i+1)*v+S,I=(i+1)*(v-1)+S;g.push(A,T,I),g.push(T,b,I)}}function x(){for(let v=0;v<=e;v++)for(let S=0;S<=i;S++)l.x=v/e,l.y=S/i,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mn(new na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class j extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Us extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vp extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _r=new ee,Ao=new R,Ro=new R;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ao.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ao),Ro.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ro),e.updateMatrixWorld(),_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Co=new ee,Ei=new R,vr=new R;class Gp extends _c{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ei),vr.copy(n.position),vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vr),n.updateMatrixWorld(),i.makeTranslation(-Ei.x,-Ei.y,-Ei.z),Co.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co)}}class Un extends Us{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hp extends _c{constructor(){super(new rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wp extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Hp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xp extends Us{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Po(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Po();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Po(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);class Yp{constructor(t){this.exp=t,this.instance=new Ne(55,window.innerWidth/window.innerHeight,.1,3e3),this.instance.position.set(0,14,20),t.scene.add(this.instance),this._pos=new R(0,14,20),this._look=new R,this._shake=new R,this._shakeDecay=0,this._windShake=0}addShake(t){this._shakeDecay=Math.max(this._shakeDecay,t)}update(t,e){const n=t.group.position,i=Math.abs(t.speed),r=16,a=7,o=n.x-Math.sin(t.yaw)*r,c=n.y+a,l=n.z-Math.cos(t.yaw)*r,h=Math.min(e*4.5,1);this._pos.x+=(o-this._pos.x)*h,this._pos.y+=(c-this._pos.y)*h,this._pos.z+=(l-this._pos.z)*h,this._look.x+=(n.x+Math.sin(t.yaw)*5-this._look.x)*Math.min(e*6,1),this._look.y+=(n.y+2.8-this._look.y)*Math.min(e*6,1),this._look.z+=(n.z+Math.cos(t.yaw)*5-this._look.z)*Math.min(e*6,1),this._shakeDecay>0?(this._shakeDecay*=.88,this._shake.set((Math.random()-.5)*this._shakeDecay*.5,Math.random()*this._shakeDecay*.4,(Math.random()-.5)*this._shakeDecay*.3)):this._shake.setScalar(0),this._windShake=i>12?Math.sin(Date.now()*.012)*(i-12)*.006:0,this.instance.position.set(this._pos.x+this._shake.x,this._pos.y+this._shake.y+this._windShake,this._pos.z+this._shake.z),this.instance.lookAt(this._look)}}class Kp{constructor(t){this.exp=t,this.scene=t.scene,this._mode="clear",this._buildSky(),this._buildLights(),this._buildStars(),this._ltTimer=0,this._nextLt=5}_buildSky(){const t=new Ut(1400,32,16);t.scale(-1,1,1),this._skyMat=new Ze({uniforms:{uZenith:{value:new Rt(862830)},uHorizon:{value:new Rt(6991574)},uGlow:{value:new Rt(16766629)},uSunDir:{value:new R(.4,.7,-.6).normalize()}},vertexShader:"varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uZenith,uHorizon,uGlow,uSunDir; varying vec3 vD;
        void main(){
          float h=clamp(vD.y*0.5+0.5,0.0,1.0);
          vec3 c=mix(uGlow,uHorizon,smoothstep(0.0,0.22,h));
          c=mix(c,uZenith,smoothstep(0.18,0.75,h));
          float sun=pow(max(dot(normalize(vD),uSunDir),0.0),120.0);
          float halo=pow(max(dot(normalize(vD),uSunDir),0.0),8.0)*0.15;
          c+=vec3(1.0,0.95,0.55)*sun*3.0+vec3(1.0,0.8,0.4)*halo;
          gl_FragColor=vec4(c,1.0);
        }`,side:be,depthWrite:!1}),this.scene.add(new P(t,this._skyMat)),this._skyU=this._skyMat.uniforms}_buildLights(){this.sun=new Wp(16774092,2),this.sun.position.set(100,200,-60),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.camera.left=-220,this.sun.shadow.camera.right=220,this.sun.shadow.camera.top=220,this.sun.shadow.camera.bottom=-220,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=600,this.sun.shadow.bias=-4e-4,this.scene.add(this.sun),this.hemi=new Vp(8900331,6986810,.65),this.scene.add(this.hemi),this.ambient=new Xp(16772829,.28),this.scene.add(this.ambient),this._flash=new Un(11189247,0,3e3),this._flash.position.set(0,300,0),this.scene.add(this._flash)}_buildStars(){const e=new Float32Array(4200);for(let i=0;i<1400;i++){const r=Math.random()*Math.PI*2,a=Math.random()*Math.PI,o=1200;e[i*3]=o*Math.sin(a)*Math.cos(r),e[i*3+1]=Math.abs(o*Math.cos(a)),e[i*3+2]=o*Math.sin(a)*Math.sin(r)}const n=new ae;n.setAttribute("position",new Ae(e,3)),this._stars=new pa(n,new Is({color:16777215,size:1.6,sizeAttenuation:!0})),this._stars.visible=!1,this.scene.add(this._stars)}setMode(t){this._mode=t;const e={clear:{z:862830,h:6991574,g:16766629,si:2,sc:16774092,hi:.65,fog:null},golden:{z:1706544,h:13391104,g:16750899,si:1,sc:16746547,hi:.45,fog:new ai(16755285,80,700)},rain:{z:657944,h:1714746,g:3820122,si:.2,sc:8952234,hi:.35,fog:new ai(5925498,15,180)},storm:{z:328976,h:657944,g:1710634,si:.05,sc:8947882,hi:.1,fog:new ai(1118498,8,100)},fog:{z:8952234,h:11189196,g:13426158,si:.3,sc:11189196,hi:.55,fog:new ai(11189196,6,70)}},n=e[t]||e.clear;this._skyU.uZenith.value.set(n.z),this._skyU.uHorizon.value.set(n.h),this._skyU.uGlow.value.set(n.g),this.sun.intensity=n.si,this.sun.color.set(n.sc),this.hemi.intensity=n.hi,this.exp.scene.fog=n.fog,this._stars.visible=t==="storm"}triggerLightning(){this._flash.intensity=10,setTimeout(()=>this._flash.intensity=0,80),setTimeout(()=>{this._flash.intensity=6,setTimeout(()=>this._flash.intensity=0,55)},220)}update(t){const e=t*.018;this.sun.position.set(Math.cos(e)*200,Math.abs(Math.sin(e))*260+50,Math.sin(e)*150),this._skyU.uSunDir.value.copy(this.sun.position).normalize(),this._mode==="storm"&&(this._ltTimer+=.016,this._ltTimer>this._nextLt&&(this._ltTimer=0,this._nextLt=2+Math.random()*6,this.triggerLightning()))}}const Ti={ayodhya:{name:"Ayodhya",sub:"Birthplace of Lord Ram · Sarayu River",icon:"🛕",x:28,z:-18},vrindavan:{name:"Vrindavan",sub:"Leela Bhoomi of Shri Krishna",icon:"🦚",x:-18,z:12},agra:{name:"Agra",sub:"City of Taj Mahal · Yamuna River",icon:"🕌",x:-28,z:26},varanasi:{name:"Varanasi",sub:"Kashi — Where Moksha dwells",icon:"🪔",x:50,z:-10},lucknow:{name:"Lucknow",sub:"Nawabi City · Capital of UP",icon:"🏛️",x:0,z:0},mathura:{name:"Mathura",sub:"Janmabhoomi of Lord Krishna",icon:"🎵",x:-16,z:6},prayagraj:{name:"Prayagraj",sub:"Triveni Sangam — Ganga Yamuna Saraswati",icon:"🌊",x:38,z:14}},ds=[{name:"Shri Ram Mandir",icon:"🛕",desc:"Grand divine temple of Bhagwan Ram",x:28,z:-20,type:"rammandir",r:5},{name:"Banke Bihari Mandir",icon:"🦚",desc:"Sacred temple of Shri Krishna, Vrindavan",x:-18,z:8,type:"temple",r:4},{name:"Taj Mahal",icon:"🕌",desc:"Wonder of the World — Agra, 1653 CE",x:-28,z:28,type:"tajmahal",r:6},{name:"Kashi Vishwanath",icon:"🪔",desc:"Jyotirlinga of Lord Shiva — Varanasi",x:50,z:-12,type:"temple",r:4},{name:"Rumi Darwaza",icon:"🏛️",desc:"Nawabi gate of Lucknow — 1784 CE",x:1,z:-2,type:"arch",r:3},{name:"Agra Fort",icon:"🏰",desc:"Mughal Red Fort — Agra, 1573 CE",x:-25,z:24,type:"fort",r:5},{name:"Triveni Sangam",icon:"🌊",desc:"Sacred confluence of three rivers",x:38,z:16,type:"sangam",r:5},{name:"Prem Mandir",icon:"💜",desc:"White marble temple of divine love",x:-20,z:14,type:"premmandir",r:4},{name:"Dasaswamedh Ghat",icon:"🔥",desc:"Sacred ghat for evening Ganga Aarti",x:52,z:-8,type:"ghat",r:4}],Jp=[{x:8,z:-5,text:"→ Ayodhya 28km",subtext:"Ram Mandir",yaw:.3},{x:-8,z:4,text:"← Mathura 15km",subtext:"Krishna Janmabhoomi",yaw:-.3},{x:-14,z:18,text:"↓ Agra 22km",subtext:"Taj Mahal",yaw:.1},{x:22,z:6,text:"→ Varanasi 45km",subtext:"Kashi Ghat",yaw:.5},{x:6,z:10,text:"↓ Prayagraj 32km",subtext:"Triveni Sangam",yaw:-.2},{x:-4,z:-10,text:"↑ Lucknow 8km",subtext:"Nawabi Capital",yaw:0},{x:14,z:-8,text:"→ Ayodhya 15km",subtext:"Sarayu Ghat",yaw:.2},{x:-10,z:10,text:"← Vrindavan 8km",subtext:"Banke Bihari",yaw:-.1}];class $p{constructor(t){this.exp=t,this.scene=t.scene,this.cities=Ti,this._monuments=ds,this._riverVerts=[],this._flameMeshes=[],this._diyaLights=[],this._heightData=null,this._foamParts=[],this._buildHeightmap(),this._buildGround(),this._buildUPBoundary(),this._buildRivers(),this._buildHighways(),this._buildSignboards(),this._buildCities(),this._buildMonuments(),this._buildStreetMarkets(),this._buildVegetation(),this._buildRocks()}_buildHeightmap(){this._hmSize=256,this._hmData=new Float32Array(256*256);for(let e=0;e<256;e++)for(let n=0;n<256;n++){const i=(n/256-.5)*180,r=(e/256-.5)*180;let a=Math.sin(i*.12)*.3+Math.cos(r*.09)*.25;a+=Math.sin(i*.28+r*.18)*.12;const o=Math.abs(i*.25+r*.65-4)/8,c=Math.abs(i*.7-r*.25+5)/6;a-=Math.max(0,1-o)*2.2,a-=Math.max(0,1-c)*1.8,this._hmData[e*256+n]=Math.max(-2.5,a)}}getHeight(t,e){const n=this._hmSize,i=Math.floor((t/180+.5)*n),r=Math.floor((e/180+.5)*n),a=Math.max(0,Math.min(n-1,i)),o=Math.max(0,Math.min(n-1,r));return this._hmData[o*n+a]}_buildGround(){const i=new Be(200,200,100,100);i.rotateX(-Math.PI/2);const r=i.attributes.position,a=new Float32Array(r.count*3),o=new Rt(4880938),c=new Rt(9075274),l=new Rt(2775578);for(let u=0;u<r.count;u++){const g=r.getX(u),_=r.getZ(u),m=this.getHeight(g,_);r.setY(u,m);const f=m<-.9?l:m<.3?o:c;a[u*3]=f.r,a[u*3+1]=f.g,a[u*3+2]=f.b}i.setAttribute("color",new Ae(a,3)),i.computeVertexNormals();const h=new j({vertexColors:!0,roughness:.9,metalness:0}),d=new P(i,h);d.receiveShadow=!0,this.scene.add(d);const p=new P(new Be(600,600),new j({color:24458,roughness:.08,metalness:.4}));p.rotation.x=-Math.PI/2,p.position.y=-.8,this.scene.add(p)}_buildUPBoundary(){const t=[[-52,-48],[-38,-50],[-20,-52],[-5,-54],[12,-52],[28,-48],[45,-42],[55,-30],[60,-18],[62,-5],[60,8],[55,18],[48,26],[40,30],[30,32],[18,30],[8,28],[-2,26],[-12,24],[-22,22],[-30,18],[-36,12],[-40,4],[-44,-6],[-48,-18],[-52,-32],[-52,-48]],e=t.map(([r,a])=>new R(r,.3,a)),n=new ae().setFromPoints(e),i=new ta({color:13934615,transparent:!0,opacity:.5,linewidth:2});this.scene.add(new Rp(n,i)),t.forEach(([r,a],o)=>{if(o%3!==0)return;const c=new P(new Ut(.18,5,5),new Te({color:16107586,transparent:!0,opacity:.6}));c.position.set(r,.4,a),this.scene.add(c)})}_buildRivers(){this._buildRiver("ganga",1731482,2263244,[[-65,-52],[-45,-35],[-22,-14],[0,2],[22,-2],[40,-6],[52,-8],[68,-9]],4.5),this._buildRiver("yamuna",1727114,1734587,[[-35,-58],[-30,-42],[-26,-28],[-22,-10],[-20,0],[-16,8],[-12,18],[-4,20],[8,18],[22,14],[38,14]],3.2),this._buildRiver("sarayu",2783914,3381708,[[10,-22],[18,-20],[26,-18],[34,-18],[42,-20],[52,-22]],2.2)}_buildRiver(t,e,n,i,r){const a=new On(i.map(([p,u])=>new R(p,-.25,u))),o=a.getPoints(160),c=new Mn(a,160,r,6,!1),l=new Ze({uniforms:{uTime:{value:0},uColor1:{value:new Rt(e)},uColor2:{value:new Rt(n)},uFoam:{value:new Rt(11197951)}},vertexShader:`
        uniform float uTime;
        varying vec2 vUV; varying float vFoam;
        void main(){
          vUV=uv;
          vec3 p=position;
          p.y+=sin(p.x*0.4+uTime*2.0)*0.12+sin(p.z*0.3+uTime*1.5)*0.08;
          vFoam=abs(sin(p.x*0.6+uTime*3.0+p.z*0.4))*0.5;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
        }`,fragmentShader:`
        uniform vec3 uColor1,uColor2,uFoam; uniform float uTime;
        varying vec2 vUV; varying float vFoam;
        void main(){
          float flow=fract(vUV.y*3.0-uTime*0.6);
          vec3 c=mix(uColor1,uColor2,flow*0.6+0.2);
          c=mix(c,uFoam,vFoam*0.3);
          float edge=smoothstep(0.0,0.15,vUV.x)*smoothstep(1.0,0.85,vUV.x);
          gl_FragColor=vec4(c,edge*0.92);
        }`,transparent:!0,side:fe,depthWrite:!1}),h=new P(c,l);this.scene.add(h),this._riverVerts.push(l),[-1,1].forEach(p=>{const u=o.map(m=>{const f=new R(-m.z,0,m.x).normalize().multiplyScalar(p*(r+.8));return new R(m.x+f.x,-.05,m.z+f.z)}),g=new Mn(new On(u),100,.65,4,!1),_=new j({color:11571296,roughness:.95});this.scene.add(new P(g,_))});const d=40;for(let p=0;p<d;p++){const u=p/d,g=a.getPoint(u),_=new P(new Ut(.12+Math.random()*.1,5,5),new Te({color:14544639,transparent:!0,opacity:.55}));_.position.set(g.x+(Math.random()-.5)*r*1.4,-.1,g.z+(Math.random()-.5)*r*1.4),_.userData={baseX:_.position.x,baseZ:_.position.z,t:u,curve:a,speed:.02+Math.random()*.03},this.scene.add(_),this._foamParts.push(_)}t==="ganga"&&this._buildGhats(o,42,-8,12),t==="sarayu"&&this._buildGhats(o,28,-18,6)}_buildGhats(t,e,n,i){const r=new j({color:13945002,roughness:.8}),a=new j({color:13404228,roughness:.7}),o=new Te({color:16737792});for(let c=0;c<i;c++){const l=c*2.8-i*1.4;for(let h=0;h<6;h++){const d=new P(new gt(2.4,.22,1+h*.35),r);d.position.set(e+l,-.06+h*.2,n+1.2+h*.7),d.receiveShadow=d.castShadow=!0,this.scene.add(d)}if(c%2===0){const h=new P(new lt(.06,.08,2.2,6),a);h.position.set(e+l,1.1,n+1.5),this.scene.add(h);const d=new P(new Ut(.15,6,6),o);d.position.set(e+l,2.3,n+1.5),this.scene.add(d),this._flameMeshes.push(d);const p=new Un(16737792,.7,10);p.position.copy(d.position),this.scene.add(p),this._diyaLights.push(p);const u=new P(new lt(.08,.1,.05,8),new j({color:13408580}));u.position.set(e+l+(Math.random()-.5)*1.5,1.12,n+2.5+Math.random()),this.scene.add(u);const g=new P(new Ut(.06,5,5),o);g.position.set(u.position.x,1.22,u.position.z),this.scene.add(g),this._flameMeshes.push(g);const _=new Un(16746496,.4,5);_.position.copy(g.position),this.scene.add(_),this._diyaLights.push(_)}}for(let c=0;c<3;c++){const l=new P(new gt(1.2,.3,.5),new j({color:8018490,roughness:.9}));l.position.set(e+(c-1)*4,-.1,n-2);const h=new P(new Be(.5,.9),new j({color:16772829,side:fe}));h.position.set(0,.65,0),l.add(h),l.userData.boatBase={x:l.position.x,z:l.position.z},this.scene.add(l),this._foamParts.push({type:"boat",mesh:l,phase:c*2.1})}}_buildHighways(){[{pts:[[0,0],[-10,8],[-18,15],[-26,22],[-28,26]],w:1,col:4473924,name:"Agra Expressway"},{pts:[[0,0],[8,-4],[18,-9],[26,-15],[28,-18]],w:.9,col:4473924,name:"Ayodhya Marg"},{pts:[[0,0],[12,-2],[26,-6],[38,-8],[50,-10]],w:1,col:4473924,name:"Varanasi Expressway"},{pts:[[0,0],[-8,4],[-14,6],[-18,6]],w:.8,col:5592405,name:"Mathura Road"},{pts:[[0,0],[8,6],[18,10],[28,12],[38,14]],w:.85,col:5592405,name:"Prayagraj Marg"},{pts:[[-18,6],[-20,10],[-20,14],[-20,14]],w:.7,col:6710886,name:"Vrindavan Road"}].forEach(e=>{const n=e.pts.map(([d,p])=>new R(d,.08,p)),i=new On(n),r=new Mn(i,80,e.w*.5,4,!1),a=new j({color:e.col,roughness:.9}),o=new P(r,a);o.receiveShadow=!0,this.scene.add(o);const c=i.getPoints(50),l=new ta({color:14535748,transparent:!0,opacity:.6}),h=new ae().setFromPoints(c);this.scene.add(new uc(h,l)),c.forEach((d,p)=>{p%8===0&&[-1,1].forEach(u=>{const g=p<c.length-1?Math.atan2(c[p+1].x-d.x,c[p+1].z-d.z):0,_=new P(new lt(.045,.055,2.8,6),new j({color:8947848}));_.position.set(d.x+Math.cos(g+Math.PI/2)*u*e.w*.7,1.4,d.z-Math.sin(g+Math.PI/2)*u*e.w*.7),this.scene.add(_);const m=new P(new Ut(.1,5,5),new Te({color:16777130}));m.position.set(_.position.x,2.9,_.position.z),this.scene.add(m)})})})}_buildSignboards(){const t=new j({color:8947848,roughness:.8}),e=new j({color:26146,roughness:.6}),n=new j({color:16777215,roughness:.5}),i=new Te({color:16776960});Jp.forEach(r=>{const a=new de;a.position.set(r.x,0,r.z),a.rotation.y=r.yaw,[-.55,.55].forEach(u=>{const g=new P(new lt(.06,.07,3.2,6),t);g.position.set(u,1.6,0),g.castShadow=!0,a.add(g)});const o=new P(new gt(2.4,.9,.1),e);o.position.set(0,2.9,0),o.castShadow=!0,a.add(o);const c=new P(new gt(2.44,.94,.08),new j({color:16777215,roughness:.5}));c.position.set(0,2.9,-.02),a.add(c);const l=new P(new gt(2.38,.88,.08),e);l.position.set(0,2.9,.01),a.add(l);const h=new P(new gt(2,.12,.12),n);h.position.set(0,3.1,.06),a.add(h);const d=new P(new gt(1.6,.1,.12),new j({color:13421772}));d.position.set(0,2.75,.06),a.add(d);const p=new P(new Ce(.18,.35,4),i);p.rotation.z=r.text.startsWith("→")?-Math.PI/2:r.text.startsWith("←")?Math.PI/2:r.text.startsWith("↑")?Math.PI:0,p.position.set(r.text.startsWith("→")?.9:r.text.startsWith("←")?-.9:0,2.9,.08),a.add(p);for(let u=0;u<4;u++){const g=new P(new gt(.12,.12,.12),new Te({color:16729088}));g.position.set(-.75+u*.5,2.46,.07),a.add(g)}a.userData.sign=r,this.scene.add(a)})}_buildCities(){Object.entries(Ti).forEach(([t,e])=>{const n=new j({color:13154448,roughness:.9}),i=new P(new lt(7,7,.12,20),n);i.position.set(e.x,.06,e.z),i.receiveShadow=!0,this.scene.add(i);const r=[13408631,14531464,12298888,11180407,13404245,14527078];for(let c=0;c<16;c++){const l=c/16*Math.PI*2,h=2.8+Math.random()*3.2,d=e.x+Math.cos(l)*h,p=e.z+Math.sin(l)*h,u=.7+Math.random()*3,g=.5+Math.random()*.9,_=new j({color:r[c%r.length],roughness:.85}),m=new P(new gt(g,u,g),_);m.position.set(d,u/2+.06,p),m.castShadow=m.receiveShadow=!0,this.scene.add(m);const f=new P(new gt(g+.1,.1,g+.1),new j({color:12298888,roughness:.7}));if(f.position.set(d,u+.11,p),this.scene.add(f),u>1.5){const x=new Te({color:16777130,transparent:!0,opacity:.8});for(let v=0;v<Math.floor(u);v++){const S=new P(new Be(.2,.25),x);S.position.set(d,.8+v*.9,p+g*.51),this.scene.add(S)}}}const a=new P(new Ut(.25,8,8),new Te({color:16107586,transparent:!0,opacity:.55}));a.position.set(e.x,5,e.z),this.scene.add(a);const o=new Un(16107586,.7,14);o.position.set(e.x,3,e.z),this.scene.add(o)})}_buildMonuments(){ds.forEach(t=>{let e;switch(t.type){case"rammandir":e=this._makeRamMandir();break;case"tajmahal":e=this._makeTajMahal();break;case"temple":e=this._makeTemple();break;case"fort":e=this._makeFort();break;case"arch":e=this._makeArch();break;case"premmandir":e=this._makePremMandir();break;case"sangam":e=this._makeSangam();break;case"ghat":e=null;break;default:e=this._makeTemple()}e&&(e.position.set(t.x,.5,t.z),this.scene.add(e));const n=new P(new Ut(.2,8,8),new Te({color:16107586,transparent:!0,opacity:.75}));n.position.set(t.x,7.5,t.z),this.scene.add(n),t._orb=n;const i=new Un(16768392,.9,18);i.position.set(t.x,2,t.z),this.scene.add(i)})}_makeRamMandir(){const t=new de,e=new j({color:16049352,roughness:.4,metalness:.04}),n=new j({color:13934615,metalness:.9,roughness:.1});new j({color:13386786,roughness:.65}),[6.5,5.5,4.8,4].forEach((u,g)=>{const _=new P(new gt(u*1.5,.4,u),e);_.position.y=g*.32,_.castShadow=_.receiveShadow=!0,t.add(_)});const i=1.28,r=1.2,a=e;[-2.5,-1.5,-.5,.5,1.5,2.5].forEach(u=>{[-2,2].forEach(g=>{const _=new P(new lt(.1,.13,r,8),a);_.position.set(u,i+r/2,g),_.castShadow=!0,t.add(_);const m=new P(new gt(.28,.12,.28),e);m.position.set(u,i+r+.06,g),t.add(m)})});const o=new P(new gt(4.8,1.1,3.2),e);o.position.y=i+.55,o.castShadow=!0,t.add(o);const c=i+1.1,l=(u,g,_,m)=>{const f=new P(new gt(_,_*.4,_),e);f.position.set(u,m+_*.2,g),t.add(f);let x=m+_*.4,v=_*.48;for(let b=0;b<11;b++){const I=new P(new lt(v,v+_*.025,_*.2,12),e);if(I.position.set(u,x,g),I.castShadow=!0,t.add(I),b%2===0){const w=new P(new lt(v*.96,v*.96,_*.04,12),new j({color:14733488,roughness:.5}));w.position.set(u,x+_*.1,g),t.add(w)}x+=_*.18,v-=_*.038,v<_*.08&&(v=_*.08)}const S=new P(new lt(v+_*.04,v+_*.04,_*.15,12),n);S.position.set(u,x,g),t.add(S);const A=new P(new Ut(_*.12,8,8),n);A.position.set(u,x+_*.2,g),t.add(A);const T=new P(new Ce(_*.05,_*.3,6),n);T.position.set(u,x+_*.38,g),t.add(T)};l(0,0,1.6,c),[[-1.4,-.9],[1.4,-.9],[-1.4,.9],[1.4,.9]].forEach(([u,g])=>l(u,g,.75,c)),[[-.7,1.5],[.7,1.5]].forEach(([u,g])=>l(u,g,.55,i));for(let u=0;u<7;u++){const g=new P(new gt(5-u*.15,.28,.55),e);g.position.set(0,u*.26,2.4+u*.48),t.add(g)}const h=new j({color:15653584,roughness:.7});[[0,-4.5,14,.5],[0,4.5,14,.5],[-7,0,.5,8],[7,0,.5,8]].forEach(([u,g,_,m])=>{const f=new P(new gt(_,1.2,m),h);f.position.set(u,.6,g),f.castShadow=!0,t.add(f)});const d=new P(new lt(.03,.03,1.5,5),n);d.position.set(0,10.5,0),t.add(d);const p=new P(new Be(.9,.55),new j({color:16737792,side:fe}));return p.position.set(.45,11.3,0),t.add(p),p.userData.isFlag=!0,this._ramFlag=p,t}_makeTajMahal(){const t=new de,e=new j({color:16315631,roughness:.18,metalness:.06}),n=new j({color:13934615,metalness:.92,roughness:.08}),i=new j({color:13386786,roughness:.7}),r=new j({color:4495820,roughness:.02,metalness:.9});new j({color:9139029,roughness:.9});const a=new P(new gt(10,.55,10),e);a.receiveShadow=a.castShadow=!0,t.add(a);for(let v=0;v<32;v++){const S=v/32*Math.PI*2,A=new P(new lt(.12,.12,.65,6),e);A.position.set(Math.cos(S)*4.9,.6,Math.sin(S)*4.9),t.add(A)}const o=new P(new gt(7.5,.5,7.5),e);o.position.y=.52,t.add(o);const c=new lt(2.8,2.9,1.4,8),l=new P(c,e);l.position.y=1.22,l.castShadow=!0,t.add(l),[[0,2.5,0],[0,-2.5,Math.PI],[2.5,0,Math.PI/2],[-2.5,0,-Math.PI/2]].forEach(([v,S,A])=>{const T=new P(new gt(2.2,1.4,.18),e);T.position.set(v,1.42,S),T.rotation.y=A,T.castShadow=!0,t.add(T);const b=new P(new ve(.75,.12,8,18,Math.PI*.85),e);b.rotation.z=Math.PI,b.position.set(v,2.4,S),b.rotation.y=A,t.add(b);const I=new P(new gt(2.18,.12,.12),i);I.position.set(v,.88,S+.06),I.rotation.y=A,t.add(I);const w=new P(new gt(2.18,.08,.12),i);w.position.set(v,1.85,S+.06),w.rotation.y=A,t.add(w)});const h=new P(new lt(1.35,1.38,.75,16),e);h.position.y=2.12,h.castShadow=!0,t.add(h);const d=[];for(let v=0;v<=22;v++){const S=v/22,A=S*Math.PI,T=Math.sin(A)*(1+.42*Math.sin(A*1.4));d.push(new ht(T*1.25,Math.cos(A)*1.55+1.55))}const p=new Ds(d,22),u=new P(p,e);u.position.y=2.38,u.castShadow=!0,t.add(u),[[-1.8,-1.8],[-1.8,1.8],[1.8,-1.8],[1.8,1.8]].forEach(([v,S])=>{const A=new P(new lt(.34,.36,.38,10),e);A.position.set(v,2.02,S),t.add(A);const T=new P(new Ut(.36,12,8,0,Math.PI*2,0,Math.PI*.55),e);T.position.set(v,2.25,S),t.add(T);const b=new P(new Ce(.05,.28,6),n);b.position.set(v,2.64,S),t.add(b)});const g=new P(new Ut(.12,8,8),n);g.position.y=5.62,t.add(g);const _=new P(new Ce(.065,.55,8),n);_.position.y=5.9,t.add(_),[[-4.2,-4.2],[-4.2,4.2],[4.2,-4.2],[4.2,4.2]].forEach(([v,S])=>{for(let O=0;O<3;O++){const B=new P(new lt(.28,.3,.26,12),e);B.position.set(v,O*.3,S),t.add(B)}const A=new P(new lt(.2,.28,4.8,12),e);A.position.set(v,3,S),A.castShadow=!0,t.add(A);const T=new P(new lt(.35,.35,.2,14),e);T.position.set(v,5.55,S),t.add(T);const b=new P(new ve(.32,.04,5,14),e);b.rotation.x=Math.PI/2,b.position.set(v,5.7,S),t.add(b);const I=new P(new lt(.14,.2,1.1,10),e);I.position.set(v,6.2,S),t.add(I);const w=new P(new Ut(.2,10,7,0,Math.PI*2,0,Math.PI*.65),e);w.position.set(v,6.82,S),t.add(w);const M=new P(new Ce(.055,.42,7),n);M.position.set(v,7.1,S),t.add(M);const L=new P(new Ut(.06,6,6),n);L.position.set(v,6.78,S),t.add(L)});const m=new P(new gt(1.2,.1,6),r);m.position.set(0,.44,5.5),t.add(m),[-.7,.7].forEach(v=>{[3,4.5,6.5,8].forEach(S=>{const A=new P(new lt(.06,.1,.8,6),new j({color:5913114}));A.position.set(v,.4,S),this.scene.add(A);const T=new P(new Ce(.3,1.8,7),new j({color:1727018,roughness:.9}));T.position.set(v,1.7,S),this.scene.add(T)})});const f=new P(new gt(5,3.5,.7),i);f.position.set(0,1.75,9.5),f.castShadow=!0,t.add(f);const x=new P(new ve(1.1,.15,8,18,Math.PI),new j({color:14505267,roughness:.6}));return x.rotation.z=Math.PI,x.position.set(0,3.7,9.5),t.add(x),[[-2.2,9.5],[2.2,9.5]].forEach(([v,S])=>{const A=new P(new lt(.45,.5,3.8,10),i);A.position.set(v,1.9,S),A.castShadow=!0,t.add(A);const T=new P(new Ut(.5,10,7,0,Math.PI*2,0,Math.PI/2),i);T.position.set(v,3.9,S),t.add(T)}),t}_makeTemple(){const t=new de,e=new j({color:14522692,roughness:.65}),n=new j({color:13934615,metalness:.9}),i=new P(new gt(3.8,.55,3.8),e);i.castShadow=i.receiveShadow=!0,t.add(i);const r=new P(new gt(2,1.2,2),e);r.position.y=.87,r.castShadow=!0,t.add(r);let a=1.48,o=.9;for(let l=0;l<10;l++){const h=new P(new lt(o,o+.028,.22,12),e);h.position.y=a,t.add(h),a+=.18,o-=.065,o<.1&&(o=.1)}const c=new P(new Ut(.14,8,8),n);return c.position.set(0,a,0),t.add(c),[[-.9,-.9],[-.9,.9],[.9,-.9],[.9,.9]].forEach(([l,h])=>{const d=new P(new lt(.12,.14,1.2,8),e);d.position.set(l,.87,h),t.add(d)}),t}_makeFort(){const t=new de,e=new j({color:13386786,roughness:.88}),n=new j({color:16737860,roughness:.7});[[-4,0,8.5,3.2,.6],[4,0,8.5,3.2,.6],[0,-4,.6,3.2,8.5],[0,4,.6,3.2,8.5]].forEach(([c,l,h,d,p])=>{const u=new P(new gt(h,d,p),e);u.position.set(c,d/2,l),u.castShadow=u.receiveShadow=!0,t.add(u)});for(let c=0;c<16;c++){const l=c/16*Math.PI*2,h=new P(new gt(.45,.55,.45),e);h.position.set(Math.cos(l)*4,3.48,Math.sin(l)*4),t.add(h)}[[-3.5,-3.5],[-3.5,3.5],[3.5,-3.5],[3.5,3.5]].forEach(([c,l])=>{const h=new P(new lt(.6,.65,3.8,10),e);h.position.set(c,1.9,l),h.castShadow=!0,t.add(h);const d=new P(new Ce(.68,.75,10),n);d.position.set(c,3.95,l),t.add(d)});const i=new P(new gt(1.8,3.2,.7),e);i.position.set(0,1.6,4.3),t.add(i);const r=new P(new ve(.7,.12,8,16,Math.PI),n);r.rotation.z=Math.PI,r.position.set(0,3.3,4.3),t.add(r);const a=new P(new gt(4,2,4),new j({color:16444375,roughness:.5}));a.position.y=1,t.add(a);const o=new P(new Ut(.7,12,8,0,Math.PI*2,0,Math.PI/2),new j({color:13934615,metalness:.8}));return o.position.y=2.4,t.add(o),t}_makeArch(){const t=new de,e=new j({color:13404228,roughness:.7}),n=new j({color:13934615,metalness:.7});[-1.4,1.4].forEach(a=>{const o=new P(new lt(.65,.75,5.5,10),e);o.position.set(a,2.75,0),o.castShadow=!0,t.add(o)});const i=new P(new gt(4.6,.9,.75),e);i.position.y=5.65,t.add(i);const r=new P(new ve(1.15,.14,10,20,Math.PI),n);return r.rotation.z=Math.PI,r.position.y=5.6,t.add(r),[-1.3,0,1.3].forEach(a=>{const o=new P(new Ut(.18,8,6,0,Math.PI*2,0,Math.PI/2),e);o.position.set(a,6.2,0),t.add(o)}),t}_makePremMandir(){const t=new de,e=new j({color:16777215,roughness:.2,metalness:.05}),n=new j({color:13934615,metalness:.9});new j({color:16755438,roughness:.5});const i=new P(new gt(6.5,.65,5),e);i.castShadow=!0,i.receiveShadow=!0,t.add(i);const r=new P(new gt(3.8,1.1,3.2),e);r.position.y=.87,t.add(r);const a=new P(new lt(.9,.95,.55,14),e);a.position.y=1.65,t.add(a);const o=new P(new Ut(.92,16,10,0,Math.PI*2,0,Math.PI*.57),e);o.position.y=1.95,t.add(o);const c=new P(new Ut(.1,8,8),n);c.position.y=2.92,t.add(c),[[-1.6,-1.4],[-1.6,1.4],[1.6,-1.4],[1.6,1.4]].forEach(([l,h])=>{const d=new P(new lt(.35,.4,2.2,10),e);d.position.set(l,1.85,h),t.add(d);const p=new P(new Ut(.36,10,7,0,Math.PI*2,0,Math.PI*.55),e);p.position.set(l,2.98,h),t.add(p)});for(let l=0;l<7;l++){const h=new P(new lt(.1,.12,1.12,8),e);h.position.set(-1.35+l*.45,.87,1.65),t.add(h)}return t}_makeSangam(){const t=new de,e=new P(new lt(4,4,.3,20),new j({color:13945002,roughness:.8}));t.add(e);const n=new P(new lt(.2,.25,5,8),new j({color:13404228}));n.position.y=2.5,t.add(n);const i=new P(new Ut(.45,10,8),new j({color:13934615,metalness:.8}));i.position.y=5.25,t.add(i),[-.3,.3].forEach(r=>{const a=new P(new Be(.7,.45),new j({color:16737792,side:fe}));a.position.set(r+.35,5.5,0),t.add(a)});for(let r=0;r<4;r++){const a=new P(new gt(1.5,.25,.55),new j({color:8018490,roughness:.9}));a.position.set(Math.cos(r*Math.PI/2)*3,-.05,Math.sin(r*Math.PI/2)*3),t.add(a)}return t}_buildStreetMarkets(){[{x:5,z:-2},{x:-5,z:2},{x:20,z:-12},{x:-14,z:8},{x:10,z:4},{x:-8,z:-4},{x:32,z:-16},{x:42,z:-6}].forEach(e=>this._buildMarketStall(e.x,e.z))}_buildMarketStall(t,e){const n=[16729088,13378048,17544,26146,8930304,4456584,13395456],i=Math.floor(Math.random()*n.length),r=n[i],a=new j({color:r,roughness:.8,side:fe}),o=new j({color:16777215,roughness:.8,side:fe}),c=new j({color:8018490,roughness:.9});[-.9,.9].forEach(_=>{[-.5,.5].forEach(m=>{const f=new P(new lt(.05,.06,1.6,6),c);f.position.set(t+_,.8,e+m),f.castShadow=!0,this.scene.add(f)})});const l=new ae,h=new Float32Array([t-1.1,1.85,e-.65,t-1.1,1.3,e-.65,t+1.1,1.3,e-.65,t-1.1,1.85,e-.65,t+1.1,1.3,e-.65,t+1.1,1.85,e-.65,t-1.1,1.85,e+.65,t+1.1,1.85,e+.65,t+1.1,1.3,e+.65,t-1.1,1.85,e+.65,t+1.1,1.3,e+.65,t-1.1,1.3,e+.65,t-1.1,1.85,e-.65,t-1.1,1.85,e+.65,t-1.1,1.3,e-.65,t-1.1,1.85,e+.65,t-1.1,1.3,e+.65,t-1.1,1.3,e-.65,t+1.1,1.85,e-.65,t+1.1,1.3,e-.65,t+1.1,1.85,e+.65,t+1.1,1.85,e+.65,t+1.1,1.3,e-.65,t+1.1,1.3,e+.65,t-1.1,1.85,e-.65,t+1.1,1.85,e-.65,t+1.1,1.85,e+.65,t-1.1,1.85,e-.65,t+1.1,1.85,e+.65,t-1.1,1.85,e+.65]);l.setAttribute("position",new Ae(h,3)),l.computeVertexNormals();const d=new P(l,a);d.castShadow=!0,this.scene.add(d);for(let _=0;_<10;_++){const m=t-1+_*.22,f=new P(new gt(.04,.18,.04),o);f.position.set(m,1.22,e-.66),this.scene.add(f)}const p=new P(new gt(1.6,.08,.7),c);p.position.set(t,.95,e),p.castShadow=!0,this.scene.add(p);const u=[16729088,16755200,16711816,43775,4508740];for(let _=0;_<5;_++){const m=new P(Math.random()<.5?new Ut(.1+Math.random()*.08,5,5):new gt(.14,.12,.14),new j({color:u[_%u.length],roughness:.7}));m.position.set(t-.55+_*.28,1.05,e+(Math.random()-.5)*.3),this.scene.add(m)}for(let _=0;_<4;_++){const m=new P(new Be(.25,.5),new j({color:u[_%u.length],side:fe,roughness:.8}));m.position.set(t-.55+_*.38,1.58,e-.6),this.scene.add(m)}const g=new Un(16772812,.4,6);g.position.set(t,1.8,e),this.scene.add(g)}_buildVegetation(){for(let t=0;t<400;t++){const e=(Math.random()-.5)*170,n=(Math.random()-.5)*170,i=Object.values(Ti).some(o=>Math.abs(o.x-e)<6&&Math.abs(o.z-n)<6),r=ds.some(o=>Math.abs(o.x-e)<7&&Math.abs(o.z-n)<7);if(i||r)continue;const a=this.getHeight(e,n);a<-1.2||this._plantTree(e,a+.05,n)}for(let t=0;t<10;t++){const e=(Math.random()-.5)*120,n=(Math.random()-.5)*120;this._addField(e,n,5933594,6,5)}for(let t=0;t<12;t++){const e=(Math.random()-.5)*120,n=(Math.random()-.5)*120;this._addField(e,n,13150266,5,5)}}_plantTree(t,e,n){const i=[{tC:5913114,cC:2980410,cR:.42,tH:1.2},{tC:4861984,cC:1727018,cR:.36,tH:.7,cGeo:"cone"},{tC:6965802,cC:3836458,cR:.38,tH:1}],r=i[Math.floor(Math.random()*i.length)],a=r.tH+Math.random()*.7,o=new P(new lt(.06,.1,a,5),new j({color:r.tC}));o.position.set(t,e+a/2,n),o.castShadow=!0,this.scene.add(o);const c=new Rt(r.cC).lerp(new Rt(8965188),Math.random()*.35),l=r.cGeo==="cone"?new Ce(r.cR,r.cR*2.5,6):new Rs(r.cR+Math.random()*.22,0),h=new P(l,new j({color:c,roughness:.92,flatShading:!0}));h.position.set(t,e+a+r.cR*.8,n),h.castShadow=!0,this.scene.add(h)}_addField(t,e,n,i,r){const a=new j({color:n,roughness:.95});for(let o=0;o<i;o++)for(let c=0;c<r;c++){const l=.35+Math.random()*.3,h=new P(new gt(.28,l,.28),a);h.position.set(t+o*.65-i*.3,l/2+.05,e+c*.65-r*.3),this.scene.add(h)}}_buildRocks(){this._rocks=[];for(let t=0;t<60;t++){const e=(Math.random()-.5)*160,n=(Math.random()-.5)*160;if(Math.abs(e)<2||Math.abs(n)<2||Object.values(Ti).some(d=>Math.abs(d.x-e)<8&&Math.abs(d.z-n)<8))continue;const a=this.getHeight(e,n),o=.25+Math.random()*.5,c=new Rs(o,0),l=new j({color:8947840,roughness:.95,flatShading:!0}),h=new P(c,l);h.position.set(e,a+o*.4,n),h.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),h.castShadow=h.receiveShadow=!0,this.scene.add(h),this._rocks.push({pos:new R(e,a+o*.4,n),radius:o*1.4})}}update(t){this._riverVerts.forEach(e=>{e.uniforms&&(e.uniforms.uTime.value=t)}),this._flameMeshes.forEach((e,n)=>{const i=.88+.12*Math.sin(t*9+n*1.4);e.scale.setScalar(i)}),this._diyaLights.forEach((e,n)=>{e.intensity=.5+.25*Math.sin(t*7+n*1.7)}),this._foamParts.forEach((e,n)=>{e.type==="boat"?(e.mesh.position.y=-.1+Math.sin(t*.8+e.phase)*.06,e.mesh.rotation.z=Math.sin(t*.5+e.phase)*.04):e&&e.position&&e.userData&&(e.position.x=e.userData.baseX+Math.sin(t*.9+n*.4)*.25,e.position.y=-.06+Math.sin(t*1.5+n*.7)*.04,e.position.z=e.userData.baseZ+Math.cos(t*.6+n*.3)*.2)}),this._ramFlag&&(this._ramFlag.rotation.y=Math.sin(t*3)*.4,this._ramFlag.rotation.z=Math.sin(t*2.2)*.08)}checkProximity(t,e){if(this._isOutsideUP(t))return e.showBorderWarning(),0;let n=null,i=999;ds.forEach(c=>{const l=Math.sqrt((t.x-c.x)**2+(t.z-c.z)**2);l<i&&(i=l,n={m:c,d:l}),c._orb&&c._orb.scale.setScalar(1+Math.sin(Date.now()*.002)*.15)}),n&&n.d<n.m.r+5&&e.showMonument(n.m,Math.round(n.d*3)+"m");let r=null,a=999;Object.entries(Ti).forEach(([c,l])=>{const h=Math.sqrt((t.x-l.x)**2+(t.z-l.z)**2);h<a&&(a=h,r={k:c,c:l,d:h})}),r&&r.d<10&&e.setLocation(r.c.name,r.c.sub,r.c.icon);let o=0;return this._rocks.forEach(c=>{const l=Math.sqrt((t.x-c.pos.x)**2+(t.z-c.pos.z)**2);l<c.radius+.8&&(o=Math.max(o,(c.radius+.8-l)*2))}),o}_isOutsideUP(t){const e=[[-52,-48],[-38,-50],[-20,-52],[-5,-54],[12,-52],[28,-48],[45,-42],[55,-30],[60,-18],[62,-5],[60,8],[55,18],[48,26],[40,30],[30,32],[18,30],[8,28],[-2,26],[-12,24],[-22,22],[-30,18],[-36,12],[-40,4],[-44,-6],[-48,-18],[-52,-32]];let n=!1;const i=e.length;for(let r=0,a=i-1;r<i;a=r++){const[o,c]=e[r],[l,h]=e[a];c>t.z!=h>t.z&&t.x<(l-o)*(t.z-c)/(h-c)+o&&(n=!n)}return!n}getRiverProximity(t){const e=[[[-65,-52],[68,-9]],[[-35,-58],[38,14]]];let n=999;return e.forEach(([i,r])=>{const a=r[0]-i[0],o=r[1]-i[1],c=Math.sqrt(a*a+o*o),l=Math.max(0,Math.min(1,((t.x-i[0])*a+(t.z-i[1])*o)/(c*c))),h=i[0]+l*a,d=i[1]+l*o,p=Math.sqrt((t.x-h)**2+(t.z-d)**2);n=Math.min(n,p)}),Math.max(0,1-n/18)}}const fs=.92,xr=.05;class Zp{constructor(t){this.exp=t,this.scene=t.scene,this.group=new de,this.speed=0,this.yaw=0,this.maxSpeed=22,this.accel=13,this.brakeF=20,this.drag=5.5,this.turnSpd=1.5,this.group.position.set(28,fs+xr,-18),this.scene.add(this.group),this._phase=0,this._flagP=0,this._wheels=[],this._horses=[],this._flag=null,this._build(),this._buildDust()}_build(){this._buildChariot(),this._buildHorses(),this._buildKrishna(),this._buildArjuna()}_buildChariot(){const t=new de,e=new j({color:13934615,metalness:.88,roughness:.12}),n=new j({color:16315631,roughness:.25,metalness:.06}),i=new j({color:2757120,roughness:.85}),r=new j({color:13378048,roughness:.6,side:fe}),a=new j({color:1127372,roughness:.6,metalness:.1}),o=new P(new lt(.08,.08,3.4,8),i);o.rotation.z=Math.PI/2,o.position.set(0,0,.3),t.add(o),this._axle=o,[-1.68,1.68].forEach(O=>{const B=this._makeWheel(e,i,n);B.position.set(O,0,.3),B.rotation.y=Math.PI/2,t.add(B),this._wheels.push(B)});const c=.08,l=.32,h=new P(new gt(2.9,l,2.1),i);h.position.set(0,c+l/2,.2),h.castShadow=h.receiveShadow=!0,t.add(h);const d=new P(new gt(2.92,.06,2.12),e);d.position.set(0,c+.01,.2),t.add(d);const p=new P(new gt(2.92,.06,2.12),e);p.position.set(0,c+l+.01,.2),t.add(p);const u=c+l,g=new P(new gt(2.6,.055,1.85),a);g.position.set(0,u+.025,.2),t.add(g),[-1,1].forEach(O=>{const B=new P(new gt(.1,1,1.85),i);B.position.set(O*1.22,u+.5,.2),B.castShadow=!0,t.add(B);const W=new P(new gt(.14,.08,1.88),e);W.position.set(O*1.22,u+1.04,.2),t.add(W);const X=new P(new gt(.14,.06,1.88),e);X.position.set(O*1.22,u+.04,.2),t.add(X),[-.6,0,.6].forEach(H=>{const K=new P(new lt(.18,.18,.04,8),e);K.rotation.z=Math.PI/2,K.position.set(O*1.28,u+.5,H+.2),t.add(K);for(let G=0;G<8;G++){const ot=G/8*Math.PI*2,ut=new P(new gt(.04,.02,.1),e);ut.position.set(O*1.29,u+.5+Math.sin(ot)*.22,H+.2+Math.cos(ot)*.22),t.add(ut)}})});const _=new P(new gt(2.3,.22,.5),i);_.position.set(0,u-.08,1.2),t.add(_);const m=new P(new gt(2.32,.06,.52),e);m.position.set(0,u+.08,1.2),t.add(m);const f=this._makeChakra(e,i);f.position.set(0,u+.5,-1),t.add(f);const x=new P(new lt(.07,.07,5.2,8),i);x.rotation.x=Math.PI/2,x.position.set(0,u-.08,3.8),t.add(x);const v=new P(new lt(.06,.06,2.4,8),e);v.rotation.z=Math.PI/2,v.position.set(0,u-.05,6.3),t.add(v);const S=u+1,A=3.2,T=new P(new lt(.06,.06,A,8),e);T.position.set(0,S+A/2,-.1),t.add(T);const b=S+A;[{r:2,y:b,col:n},{r:1.5,y:b+.38,col:n},{r:1,y:b+.68,col:n}].forEach(O=>{const B=new P(new lt(O.r,O.r*1.1,.09,22),O.col);B.position.set(0,O.y,-.1),t.add(B);const W=new P(new ve(O.r,.04,5,22),e);W.rotation.x=Math.PI/2,W.position.set(0,O.y+.04,-.1),t.add(W);for(let X=0;X<28;X++){const H=X/28*Math.PI*2,K=new P(new gt(.04,.24,.04),r);K.position.set(Math.cos(H)*O.r*.96,O.y-.15,-.1+Math.sin(H)*O.r*.96),t.add(K)}});const I=new P(new Ut(.45,14,8,0,Math.PI*2,0,Math.PI*.52),n);I.position.set(0,b+.9,-.1),t.add(I);const w=new P(new Ut(.1,8,8),e);w.position.set(0,b+1.35,-.1),t.add(w);const M=new P(new lt(.03,.03,1.1,6),e);M.position.set(0,b+1.5,-.1),t.add(M),this._flag=new P(new Be(.75,.48),new j({color:16737792,side:fe})),this._flag.position.set(.38,b+1.96,-.1),t.add(this._flag);const L=new P(new lt(.1,.1,.01,8),new Te({color:16755200}));L.rotation.x=Math.PI/2,L.position.set(.2,b+1.96,-.09),t.add(L),this.group.add(t),this._bodyG=t}_makeWheel(t,e,n){const i=new de,r=fs;i.add(new P(new ve(r,.095,10,32),e));const a=new P(new ve(r,.038,6,32),t);a.position.z=.065,i.add(a);const o=new P(new lt(.18,.18,.24,12),t);i.add(o);const c=new P(new Ut(.13,8,8),t);c.position.z=.13,i.add(c);for(let l=0;l<8;l++){const h=l/8*Math.PI*2,d=new P(new gt(.04,.03,.12),t);d.position.set(Math.sin(h)*.22,Math.cos(h)*.22,.14),i.add(d)}for(let l=0;l<16;l++){const h=l/16*Math.PI*2,d=l%2===0,p=r-.18,u=new P(new lt(d?.045:.026,d?.045:.026,p,6),d?t:e);u.rotation.z=h+Math.PI/2,u.position.set(Math.sin(h)*p/2,Math.cos(h)*p/2,0),i.add(u)}for(let l=0;l<24;l++){const h=l/24*Math.PI*2,d=new P(new gt(.05,.05,.14),t);d.position.set(Math.sin(h)*r*.93,Math.cos(h)*r*.93,.05),d.rotation.z=h,i.add(d)}return i}_makeChakra(t,e){const n=new de,i=1.2,r=new P(new lt(i*1.05,i*1.05,.065,32),e);r.rotation.z=Math.PI/2,r.position.x=-.04,n.add(r);const a=new P(new ve(i,.1,10,32),t);a.rotation.y=Math.PI/2,n.add(a);for(let c=0;c<24;c++){const l=c/24*Math.PI*2,h=new P(new gt(.038,.038,i-.15),t);h.position.set(0,Math.sin(l)*(i-.15)/2,Math.cos(l)*(i-.15)/2),h.rotation.x=-l,n.add(h)}const o=new P(new lt(.2,.2,.22,12),t);return o.rotation.z=Math.PI/2,n.add(o),n}_buildHorses(){const t=-.9700000000000001;[{x:-.75,label:"Shveta"},{x:.75,label:"Sugriva"}].forEach((e,n)=>{const i=this._makeHorse();i.position.set(e.x,t+.5,5.2+n%2*.15),this.group.add(i),this._horses.push({group:i,baseY:t+.5,phase:n*Math.PI}),[-1,1].forEach(r=>{const a=new j({color:13386752,roughness:.7}),o=[new R(e.x+r*.1,t+.85,5.2),new R(e.x*.6+r*.08,t+1.1,3),new R(r*.15,t+1.35,1)],c=new On(o),l=new Mn(c,20,.015,4,!1);this.group.add(new P(l,a))})})}_makeHorse(){const t=new de,e=new j({color:16316661,roughness:.75,metalness:.04}),n=new j({color:15261904,roughness:.85}),i=new j({color:13417386,roughness:.7}),r=new j({color:13934615,metalness:.88}),a=new Te({color:3346688}),o=new P(new Pi(.32,.82,5,10),e);o.rotation.x=Math.PI/2,o.castShadow=!0,t.add(o);const c=new P(new Ut(.34,8,7),e);c.scale.set(1,.9,.8),c.position.set(0,.06,.34),t.add(c);const l=new P(new Ut(.35,8,7),e);l.scale.set(1,.96,.9),l.position.set(0,.04,-.42),t.add(l);const h=new P(new lt(.15,.2,.68,8),e);h.rotation.x=-Math.PI/4,h.position.set(0,.38,.5),h.castShadow=!0,t.add(h);const d=new P(new gt(.22,.34,.46),e);d.position.set(0,.8,.88),d.rotation.x=-.15,d.castShadow=!0,t.add(d);const p=new P(new gt(.17,.22,.3),e);p.position.set(0,.72,1.13),t.add(p),[-.06,.06].forEach(f=>{const x=new P(new Ut(.028,5,5),new j({color:16764091,roughness:.8}));x.position.set(f,.67,1.28),t.add(x)}),[-.11,.11].forEach(f=>{const x=new P(new Ut(.04,6,6),new j({color:16777215}));x.position.set(f,.82,1.08),t.add(x);const v=new P(new Ut(.028,6,6),a);v.position.set(f,.82,1.1),t.add(v)}),[-.09,.09].forEach(f=>{const x=new P(new Ce(.05,.18,5),e);x.position.set(f,1.08,.84),x.rotation.z=f>0?-.22:.22,t.add(x)});for(let f=0;f<10;f++){const x=new P(new Pi(.04,.2,3,5),n);x.position.set(.06,.5+f*.06,.58+f*.05),x.rotation.x=-.45,t.add(x)}for(let f=0;f<9;f++){const x=new P(new Pi(.045-f*.003,.22,3,4),n);x.position.set((Math.random()-.5)*.1,-.04-f*.14,-.56-f*.1),x.rotation.x=.32,t.add(x)}const u=[{x:-.14,z:.34,f:!0},{x:.14,z:.34,f:!0},{x:-.14,z:-.34,f:!1},{x:.14,z:-.34,f:!1}];u.forEach(f=>{const x=new de,v=new P(new lt(.082,.062,.42,7),e);v.position.y=-.21,v.castShadow=!0,x.add(v);const S=new P(new Ut(.07,6,6),e);S.position.y=-.44,x.add(S);const A=new P(new lt(.055,.04,.4,6),new j({color:15261904,roughness:.8}));A.position.y=-.66,A.castShadow=!0,x.add(A);const T=new P(new Ut(.044,5,5),e);T.position.y=-.88,x.add(T);const b=new P(new gt(.12,.09,.15),i);b.position.y=-.98,x.add(b),x.position.set(f.x,-.08,f.z),x.userData.front=f.f,t.add(x)});const g=new P(new lt(.026,.026,.78,4),r);g.rotation.z=Math.PI/2,g.position.set(0,.15,.1),t.add(g);const _=new P(new ve(.26,.025,6,16),r);_.rotation.y=Math.PI/2,_.position.set(0,.24,.38),t.add(_);const m=new P(new Ut(.07,6,6),new j({color:16729088,metalness:.9}));m.position.set(0,.92,1),t.add(m),u.forEach(f=>{const x=new P(new ve(.07,.02,5,12),r);x.rotation.x=Math.PI/2,x.position.set(f.x,-.88,f.z),t.add(x)});for(let f=0;f<5;f++){const x=new P(new Ce(.025,.22,4),new j({color:f%2===0?16729088:16755200,side:fe}));x.position.set((f-2)*.06,1.25,.82+f*.01),t.add(x)}return t}_buildKrishna(){const t=fs+xr,n=t+.08+.32+.055-t,i=new de,r=new j({color:2767498,roughness:.8}),a=new j({color:16768256,roughness:.6}),o=new j({color:13934615,metalness:.9});new j({color:16775408,roughness:.5});const c=new j({color:26146,roughness:.7});[-.1,.1].forEach(A=>{const T=new P(new lt(.095,.085,.55,8),a);T.position.set(A,n+.28,-.45),T.castShadow=!0,i.add(T)});const l=new P(new lt(.24,.22,.44,12),a);l.position.set(0,n+.62,-.45),i.add(l);const h=new P(new lt(.2,.24,.6,12),r);h.position.set(0,n+1.04,-.45),h.castShadow=!0,i.add(h);const d=new P(new ve(.18,.025,5,18),new j({color:16763904,roughness:.7}));d.rotation.x=Math.PI/2,d.position.set(0,n+.96,-.45),i.add(d);const p=new P(new lt(.1,.14,.18,8),r);p.position.set(0,n+1.38,-.45),i.add(p);const u=new P(new Ut(.22,14,12),r);u.position.set(0,n+1.64,-.45),u.castShadow=!0,i.add(u);const g=new P(new lt(.15,.22,.3,10),o);g.position.set(0,n+1.89,-.45),i.add(g);for(let A=0;A<5;A++){const T=A/5*Math.PI*2,b=new P(new Ce(.04,.22,5),o);b.position.set(Math.cos(T)*.14,n+2.1,-.45+Math.sin(T)*.14),i.add(b)}const _=new P(new lt(.012,.012,.6,4),c);_.rotation.z=.15,_.position.set(.05,n+2.32,-.45),i.add(_);const m=new P(new lt(.12,.12,.015,10),new j({color:17578,metalness:.6}));m.rotation.x=.3,m.position.set(.14,n+2.6,-.45),i.add(m);for(let A=0;A<8;A++){const T=A/8*Math.PI*2,b=new P(new gt(.025,.01,.14),c);b.position.set(.14+Math.cos(T)*.1,n+2.6+Math.sin(T)*.06,-.45),b.rotation.z=T,i.add(b)}[-.09,.09].forEach(A=>{const T=new P(new Ut(.035,6,6),new j({color:16777215}));T.position.set(A,n+1.66,-.24),i.add(T);const b=new P(new Ut(.024,6,6),new Te({color:1118481}));b.position.set(A,n+1.66,-.23),i.add(b)});const f=new P(new gt(.024,.08,.018),new Te({color:16777198}));f.position.set(0,n+1.7,-.24),i.add(f),[-1,1].forEach(A=>{const T=new P(new lt(.08,.07,.44,7),r);T.rotation.z=A*Math.PI/5,T.position.set(A*.28,n+1.2,-.36),i.add(T);const b=new P(new lt(.065,.055,.4,6),r);b.rotation.set(.4,0,A*Math.PI/6),b.position.set(A*.45,n+.98,-.2),i.add(b);const I=new P(new Ut(.07,8,8),r);I.position.set(A*.58,n+.85,-.1),i.add(I);const w=new P(new gt(.14,.02,.02),new j({color:13386752}));w.position.set(A*.6,n+.85,-.06),i.add(w)});const x=new P(new ve(.16,.02,6,20),o);x.rotation.x=Math.PI/2,x.position.set(0,n+1.36,-.45),i.add(x),[-.2,.2].forEach(A=>{const T=new P(new ve(.075,.018,5,12),o);T.rotation.z=Math.PI/2,T.position.set(A,n+1.08,-.34),i.add(T)});const v=new P(new ve(.1,.03,6,20),new j({color:16763904,metalness:.95,emissive:16763904,emissiveIntensity:.3}));v.rotation.x=Math.PI/2,v.position.set(-.65,n+.82,-.08),i.add(v);const S=new Un(4482815,.6,5);S.position.set(0,n+1.5,-.45),this.group.add(S),this.group.add(i),this._krishna=i}_buildArjuna(){const t=fs+xr,n=t+.08+.32+.055-t,i=new de,r=new j({color:12609584,roughness:.8}),a=new j({color:2245802,roughness:.65}),o=new j({color:13934615,metalness:.88}),c=new j({color:8012834,roughness:.85}),l=-.5;[-.1,.1].forEach(M=>{const L=new P(new lt(.09,.08,.58,8),a);L.position.set(M,n+.29,l),L.castShadow=!0,i.add(L)});const h=new P(new lt(.23,.2,.44,12),a);h.position.set(0,n+.64,l),i.add(h);const d=new P(new lt(.22,.26,.62,12),new j({color:8947848,metalness:.7,roughness:.35}));d.position.set(0,n+1.06,l),d.castShadow=!0,i.add(d);const p=new P(new ve(.24,.02,5,12),o);p.rotation.x=Math.PI/2,p.position.set(0,n+.98,l),i.add(p);const u=new P(new lt(.09,.13,.18,8),r);u.position.set(0,n+1.4,l),i.add(u);const g=new P(new Ut(.21,14,12),r);g.position.set(0,n+1.65,l),g.castShadow=!0,i.add(g);const _=new P(new lt(.16,.22,.28,10),new j({color:8947848,metalness:.8}));_.position.set(0,n+1.87,l),i.add(_);const m=new P(new Ut(.18,10,8,0,Math.PI*2,0,Math.PI/2),new j({color:8947848,metalness:.8}));m.position.set(0,n+1.98,l),i.add(m);const f=new P(new Ce(.04,.25,5),o);f.position.set(0,n+2.14,l),i.add(f);const x=new On([new R(-.08,n+.7,l-.2),new R(-.22,n+1.1,l-.25),new R(-.2,n+1.5,l-.22),new R(-.08,n+1.9,l-.18)]),v=new Mn(x,20,.025,6,!1),S=new P(v,c);i.add(S);const A=[new R(-.08,n+.72,l-.18),new R(-.14,n+1.3,l-.16),new R(-.08,n+1.88,l-.16)],T=new Mn(new On(A),10,.008,4,!1);i.add(new P(T,new j({color:14540253,roughness:.5})));const b=new P(new lt(.08,.08,.55,8),c);b.rotation.x=Math.PI/8,b.position.set(.25,n+1.1,l+.22),i.add(b);for(let M=0;M<3;M++){const L=new P(new lt(.008,.008,.55,4),new j({color:14540219}));L.rotation.x=Math.PI/8,L.position.set(.22+M*.04,n+1.35,l+.22),i.add(L)}const I=new P(new lt(.075,.065,.44,7),new j({color:8947848,metalness:.5}));I.rotation.z=-Math.PI/5,I.position.set(-.26,n+1.2,l),i.add(I);const w=new P(new lt(.075,.065,.42,7),new j({color:8947848,metalness:.5}));w.rotation.z=Math.PI/4,w.position.set(.3,n+1.15,l),i.add(w),this.group.add(i),this._arjuna=i}_buildDust(){this._dPos=new Float32Array(120*3),this._dV=Array.from({length:120},()=>({vx:0,vy:0,vz:0,max:0,life:0}));const e=new ae;e.setAttribute("position",new Ae(this._dPos,3)),this._dPts=new pa(e,new Is({color:13940842,size:.2,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this._dPts),this._dI=0}_spawnDust(){const t=this._dI%this._dV.length;this._dI++;const e=this.group.position,n=this._dV[t];n.life=0,n.max=.65+Math.random()*.95,n.vx=(Math.random()-.5)*3,n.vy=Math.random()*2.2,n.vz=(Math.random()-.5)*3,this._dPos[t*3]=e.x+(Math.random()-.5)*1.2,this._dPos[t*3+1]=.08,this._dPos[t*3+2]=e.z+(Math.random()-.5)*1.2}update(t,e){const n=Math.abs(this.speed);if(n>.25&&(e.left&&(this.yaw+=this.turnSpd*t),e.right&&(this.yaw-=this.turnSpd*t)),this.group.rotation.y=this.yaw,e.forward)this.speed=Math.min(this.speed+this.accel*t,this.maxSpeed);else if(e.backward)this.speed=Math.max(this.speed-this.brakeF*t*.45,-this.maxSpeed*.25);else{const r=Math.sign(this.speed)*this.drag*t;this.speed=Math.abs(this.speed)<.04?0:this.speed-r}this.group.position.x+=Math.sin(this.yaw)*this.speed*t,this.group.position.z+=Math.cos(this.yaw)*this.speed*t,this.group.position.x=Math.max(-88,Math.min(88,this.group.position.x)),this.group.position.z=Math.max(-88,Math.min(88,this.group.position.z));const i=this.speed*t;this._wheels.forEach(r=>r.rotation.z-=i*.9),this._phase+=t*Math.max(.7,n*.38),this._horses.forEach(r=>{const a=this._phase+r.phase,o=Math.sin(a*4)*.075*Math.min(1,n/6),c=Math.sin(a*4+.45)*.06*Math.min(1,n/6);r.group.position.y=r.baseY+o,r.group.rotation.x=c,r.group.children.forEach(l=>{if(l.userData.front!==void 0){const h=l.userData.front?a:a+Math.PI;l.rotation.x=Math.sin(h*2)*.4*Math.min(1,n/5)}})}),this._flagP+=t*3.5,this._flag&&(this._flag.rotation.y=Math.sin(this._flagP)*.38,this._flag.rotation.z=Math.sin(this._flagP*.7)*.1),this._krishna&&(this._krishna.rotation.x=-.06+n*.005,this._krishna.rotation.z=Math.sin(this._phase*2)*.022*Math.min(1,n/10)),this._arjuna&&(this._arjuna.position.z=-.5+Math.sin(this._phase*1.5)*.015),n>1.5&&Math.random()<Math.min(.9,(n-1.5)/8)&&this._spawnDust(),this._dV.forEach((r,a)=>{if(!r.max)return;r.life+=t;const o=r.life/r.max;o<1&&(this._dPos[a*3]+=r.vx*t*(1-o),this._dPos[a*3+1]+=r.vy*t*(1-o*.8),this._dPos[a*3+2]+=r.vz*t*(1-o))}),this._dPts.geometry.attributes.position.needsUpdate=!0}}class jp{constructor(t){this.exp=t,this.current="clear",this._buildRain(),document.querySelectorAll(".wx").forEach(e=>e.addEventListener("click",()=>{document.querySelectorAll(".wx").forEach(n=>n.classList.remove("active")),e.classList.add("active"),this.set(e.dataset.wx)})),window.addEventListener("keydown",e=>{if(e.key.toLowerCase()!=="r")return;const n=["clear","golden","rain","storm","fog"],i=n[(n.indexOf(this.current)+1)%n.length];this.set(i),document.querySelectorAll(".wx").forEach(r=>r.classList.toggle("active",r.dataset.wx===i))})}_buildRain(){const e=new Float32Array(15e3);this._rv=new Float32Array(5e3);for(let i=0;i<5e3;i++)e[i*3]=(Math.random()-.5)*140,e[i*3+1]=Math.random()*80,e[i*3+2]=(Math.random()-.5)*140,this._rv[i]=22+Math.random()*14;const n=new ae;n.setAttribute("position",new Ae(e,3)),this._rp=e,this._rg=n,this._rm=new Is({color:11193582,size:.07,transparent:!0,opacity:.7,depthWrite:!1}),this._rain=new pa(n,this._rm),this._rain.visible=!1,this.exp.scene.add(this._rain)}set(t){this.current=t,this.exp.env.setMode(t),this._rain.visible=t==="rain"||t==="storm",this._rm.opacity=t==="storm"?.9:.7}update(t,e){if(!this._rain.visible)return;const n=this.current==="storm"?5:0;for(let i=0;i<this._rv.length;i++)this._rp[i*3]+=n*.016,this._rp[i*3+1]-=this._rv[i]*.016,this._rp[i*3+1]<-2&&(this._rp[i*3]=e.x+(Math.random()-.5)*120,this._rp[i*3+1]=e.y+60+Math.random()*20,this._rp[i*3+2]=e.z+(Math.random()-.5)*120);this._rg.attributes.position.needsUpdate=!0}}class Qp{constructor(){this._ctx=null,this._ready=!1,this._master=null,this._hoofT=0,this._whinnyT=0,this._fluteT=null,this._riverGain=null,this._templeGain=null,this._windGain=null,this._riverSrc=null}init(){try{this._ctx=new(window.AudioContext||window.webkitAudioContext),this._master=this._ctx.createGain(),this._master.gain.value=.5,this._master.connect(this._ctx.destination),this._ready=!0,this._startTanpuraDrone(),this._startRiverLoop(),this._startWindLayer(),setTimeout(()=>this._scheduleFlutePhrase(),800),setTimeout(()=>this._scheduleTempleChime(),4e3),setTimeout(()=>this.playWhinny(),1200)}catch(t){console.warn("Audio:",t)}}_startTanpuraDrone(){const t=this._ctx;[130.81,196,261.63,392].forEach((e,n)=>{const i=t.createOscillator();i.type="sine",i.frequency.value=e;const r=t.createOscillator();r.type="sine",r.frequency.value=.15+n*.04;const a=t.createGain();a.gain.value=.022,r.connect(a),a.connect(i.frequency);const o=t.createGain();o.gain.value=.022;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=700,i.connect(c),c.connect(o),o.connect(this._master),i.start(),r.start()})}_startRiverLoop(){const t=this._ctx,e=3,n=t.sampleRate*e,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let m=0;m<n;m++)r[m]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=i,a.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=400,o.Q.value=.4;const c=t.createBiquadFilter();c.type="highpass",c.frequency.value=200;const l=t.createOscillator();l.type="sine",l.frequency.value=.8;const h=t.createGain();h.gain.value=80,l.connect(h),h.connect(o.frequency);const d=t.createGain();d.gain.value=0,a.connect(o),o.connect(c),c.connect(d),d.connect(this._master),a.start(),l.start(),this._riverGain=d;const p=t.createOscillator();p.type="sine",p.frequency.value=2.2;const u=t.createGain();u.gain.value=.012;const g=t.createOscillator();g.type="triangle",g.frequency.value=180,p.connect(u),u.connect(g.frequency);const _=t.createGain();_.gain.value=0,g.connect(_),_.connect(this._master),g.start(),p.start(),this._riverOscGain=_}setRiverProximity(t){if(!this._ready)return;const e=this._ctx.currentTime,n=t*t*.18;this._riverGain&&this._riverGain.gain.setTargetAtTime(n,e,.5),this._riverOscGain&&this._riverOscGain.gain.setTargetAtTime(n*.06,e,.5)}_startWindLayer(){const t=this._ctx,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=150;const o=t.createGain();o.gain.value=.025,r.connect(a),a.connect(o),o.connect(this._master),r.start(),this._windGain=o}setWindSpeed(t){!this._windGain||!this._ready||this._windGain.gain.setTargetAtTime(.02+t*.003,this._ctx.currentTime,.4)}_scheduleFlutePhrase(){this._ready&&(this._playFlutePhrase(),this._fluteT=setTimeout(()=>this._scheduleFlutePhrase(),5e3+Math.random()*8e3))}_playFlutePhrase(){const t=this._ctx,e=t.currentTime,n=[[{f:523.25,d:.5},{f:493.88,d:.3},{f:440,d:.4},{f:392,d:.65},{f:349.23,d:.4},{f:392,d:.3},{f:440,d:.5},{f:523.25,d:.8}],[{f:392,d:.4},{f:440,d:.35},{f:493.88,d:.4},{f:523.25,d:.5},{f:587.33,d:.35},{f:523.25,d:.4},{f:440,d:.5},{f:392,d:.9}],[{f:261.63,d:.6},{f:293.66,d:.4},{f:329.63,d:.4},{f:392,d:.55},{f:440,d:.4},{f:493.88,d:.4},{f:523.25,d:1}]],i=n[Math.floor(Math.random()*n.length)];let r=0;i.forEach(a=>{this._fluteNote(a.f,e+r,a.d,.11),r+=a.d*.82})}_fluteNote(t,e,n,i){const r=this._ctx,a=r.createOscillator();a.type="triangle",a.frequency.setValueAtTime(t,e),a.frequency.linearRampToValueAtTime(t*1.006,e+.09),a.frequency.linearRampToValueAtTime(t,e+.22);const o=r.createOscillator();o.type="sine",o.frequency.value=5.8;const c=r.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t*.008,e+.18),c.gain.linearRampToValueAtTime(0,e+n),o.connect(c),c.connect(a.frequency);const l=r.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(i,e+.065),l.gain.setValueAtTime(i,e+n-.12),l.gain.linearRampToValueAtTime(0,e+n);const h=r.sampleRate*n|0,d=r.createBuffer(1,h,r.sampleRate),p=d.getChannelData(0);for(let x=0;x<h;x++)p[x]=Math.random()*2-1;const u=r.createBufferSource();u.buffer=d;const g=r.createBiquadFilter();g.type="bandpass",g.frequency.value=t*2.1,g.Q.value=3;const _=r.createGain();_.gain.setValueAtTime(i*.1,e),_.gain.exponentialRampToValueAtTime(i*.03,e+.12),_.gain.linearRampToValueAtTime(0,e+n);const m=r.createDelay(.8);m.delayTime.value=.32;const f=r.createGain();f.gain.value=.15,a.connect(l),l.connect(this._master),a.connect(m),m.connect(f),f.connect(this._master),u.connect(g),g.connect(_),_.connect(this._master),a.start(e),a.stop(e+n+.15),o.start(e),o.stop(e+n+.15),u.start(e),u.stop(e+n+.08)}_scheduleTempleChime(){this._ready&&(this._playBell(),this._templeT=setTimeout(()=>this._scheduleTempleChime(),8e3+Math.random()*15e3))}_playBell(){const t=this._ctx,e=t.currentTime;[880,1320,1760,2200].forEach((n,i)=>{const r=t.createOscillator();r.type="sine",r.frequency.value=n*(1+Math.random()*.015);const a=t.createGain();a.gain.setValueAtTime(0,e+i*.06),a.gain.linearRampToValueAtTime(.05,e+i*.06+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+i*.06+4),r.connect(a),a.connect(this._master),r.start(e+i*.06),r.stop(e+i*.06+4.1)})}_playHoof(t){if(!this._ready)return;const e=this._ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(88,n),i.frequency.exponentialRampToValueAtTime(32,n+.11);const r=e.createGain();r.gain.setValueAtTime(t*.2,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.13);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=280,i.connect(a),a.connect(r),r.connect(this._master),i.start(n),i.stop(n+.14)}playWhinny(){if(!this._ready)return;const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.linearRampToValueAtTime(500,e+.22),n.frequency.linearRampToValueAtTime(360,e+.55),n.frequency.linearRampToValueAtTime(280,e+.88);const i=t.createOscillator();i.type="sine",i.frequency.value=7.5;const r=t.createGain();r.gain.value=14,i.connect(r),r.connect(n.frequency);const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=650,a.Q.value=1.4;const o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.09,e+.04),o.gain.setValueAtTime(.09,e+.6),o.gain.linearRampToValueAtTime(1e-4,e+1),n.connect(a),a.connect(o),o.connect(this._master),n.start(e),n.stop(e+1.1),i.start(e),i.stop(e+1.1)}playBump(){if(!this._ready)return;const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(60,e),n.frequency.exponentialRampToValueAtTime(20,e+.2);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(i),i.connect(this._master),n.start(e),n.stop(e+.23)}update(t,e){if(this._ready){if(t>.8){this._hoofT+=e;const n=Math.max(.07,.22-t*.006);this._hoofT>=n&&(this._hoofT=0,this._playHoof(Math.min(1,t/18)))}this._whinnyT+=e,t>14&&this._whinnyT>14+Math.random()*12&&(this._whinnyT=0,this.playWhinny()),this.setWindSpeed(t)}}}class tm{constructor(){this.forward=this.backward=this.left=this.right=!1,this._cd=0;const t={ArrowUp:"forward",KeyS:"forward",ArrowDown:"backward",KeyX:"backward",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",e=>{t[e.code]&&(this[t[e.code]]=!0,e.preventDefault())}),window.addEventListener("keyup",e=>{t[e.code]&&(this[t[e.code]]=!1)})}}class em{constructor(t){this.exp=t,this._locName=document.getElementById("loc-name"),this._locSub=document.getElementById("loc-sub"),this._locIcon=document.getElementById("loc-icon"),this._sNum=document.getElementById("speedo-num"),this._sFill=document.getElementById("speedo-fill"),this._monPopup=document.getElementById("mon-popup"),this._monIcon=document.getElementById("mon-icon-el"),this._monTitle=document.getElementById("mon-title"),this._monDesc=document.getElementById("mon-desc"),this._monDist=document.getElementById("mon-dist"),this._miniWrap=document.getElementById("minimap-wrap"),this._mini=document.getElementById("minimap"),this._miniCtx=this._mini.getContext("2d"),this._showMini=!1,this._monTimer=0,this._monVis=!1,this._curLoc="",this._borderWarnT=0,window.addEventListener("keydown",e=>{e.key.toLowerCase()==="m"&&(this._showMini=!this._showMini,this._miniWrap.classList.toggle("hidden",!this._showMini))})}setLocation(t,e,n){t!==this._curLoc&&(this._curLoc=t,this._locName.textContent=t,this._locSub.textContent=e,this._locIcon.textContent=n)}showMonument(t,e){this._monTimer=4500,this._monVis||(this._monVis=!0,this._monPopup.classList.remove("hidden")),this._monIcon.textContent=t.icon,this._monTitle.textContent=t.name,this._monDesc.textContent=t.desc,this._monDist.textContent=e?`~${e} away`:""}showBorderWarning(){this._borderWarnT=2e3,this._locName.textContent="⚠ Uttar Pradesh Border",this._locSub.textContent="Turn back — beyond UP boundary",this._locIcon.textContent="🛑"}update(t){const e=Math.abs(t.speed),n=Math.round(e*3.6);this._sNum.textContent=n;const i=Math.min(e/t.maxSpeed,1),r=i*Math.PI,a=45,o=50,c=55,l=o+a*Math.cos(Math.PI-r),h=c-a*Math.sin(Math.PI-r),d=r>Math.PI?1:0;this._sFill.setAttribute("d",i<.01?"M10,55 A45,45 0 0,1 10,55":`M10,55 A45,45 0 ${d},1 ${l.toFixed(1)},${h.toFixed(1)}`),this._monVis&&(this._monTimer-=16,this._monTimer<=0&&(this._monVis=!1,this._monPopup.classList.add("hidden"))),this._showMini&&this._drawMini(t)}_drawMini(t){const e=this._miniCtx,n=200,i=200,r=1.6,a=n/2,o=i/2;e.clearRect(0,0,n,i),e.fillStyle="rgba(5,2,0,0.92)",e.fillRect(0,0,n,i);const c=[[-52,-48],[-38,-50],[-20,-52],[-5,-54],[12,-52],[28,-48],[45,-42],[55,-30],[60,-18],[62,-5],[60,8],[55,18],[48,26],[40,30],[30,32],[18,30],[8,28],[-2,26],[-12,24],[-22,22],[-30,18],[-36,12],[-40,4],[-44,-6],[-48,-18],[-52,-32],[-52,-48]];e.beginPath(),c.forEach(([p,u],g)=>{const _=a+p*r,m=o+u*r;g?e.lineTo(_,m):e.moveTo(_,m)}),e.strokeStyle="rgba(245,166,35,0.5)",e.lineWidth=1.5,e.stroke(),e.strokeStyle="rgba(30,130,200,0.55)",e.lineWidth=3,e.beginPath(),e.moveTo(a-65*r,o-52*r),e.bezierCurveTo(a,o,a+40*r,o,a+68*r,o-9*r),e.stroke(),e.lineWidth=2,e.beginPath(),e.moveTo(a-35*r,o-58*r),e.bezierCurveTo(a-10*r,o+5*r,a+15*r,o+10*r,a+38*r,o+14*r),e.stroke();const{CITIES:l}=this.exp.world;Object.values(l).forEach(p=>{const u=a+p.x*r,g=o+p.z*r;e.beginPath(),e.arc(u,g,3.5,0,Math.PI*2),e.fillStyle="rgba(245,166,35,0.85)",e.fill()});const h=a+t.group.position.x*r,d=o+t.group.position.z*r;e.beginPath(),e.arc(h,d,6,0,Math.PI*2),e.fillStyle="#f5a623",e.fill(),e.strokeStyle="#fff",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.moveTo(h,d),e.lineTo(h+Math.sin(t.yaw)*12,d+Math.cos(t.yaw)*12),e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=2,e.stroke()}}class nm{constructor(t){this.exp=t,document.querySelectorAll(".city-btn").forEach(e=>{e.addEventListener("click",()=>{t.started&&(document.querySelectorAll(".city-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),t.teleportTo(e.dataset.city))})}),document.querySelectorAll(".state-btn").forEach(e=>{e.addEventListener("click",()=>{if(e.classList.contains("soon")){const n=e.querySelector(".state-badge"),i=n.textContent;n.textContent="🚧 Coming soon...",setTimeout(()=>n.textContent=i,1800)}})})}}class im{constructor(t){this.canvas=t,this.scene=new Ap,this.clock=new qp,this.started=!1,this.renderer=new bp({canvas:t,antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Io,this.renderer.toneMapping=Uo,this.renderer.toneMappingExposure=1.05,this.renderer.setClearColor(8900331),this.controls=new tm,this.camera=new Yp(this),this.env=new Kp(this),this.world=new $p(this),this.rath=new Zp(this),this.weather=new jp(this),this.audio=new Qp,this.hud=new em(this),this.sidebar=new nm(this),document.getElementById("start-btn").addEventListener("click",()=>{this.audio.init(),this.started=!0;const e=document.getElementById("title-screen");e.classList.add("fade-out"),setTimeout(()=>e.classList.add("hidden"),900),document.getElementById("location-banner").classList.remove("hidden")}),window.addEventListener("resize",()=>{this.camera.instance.aspect=window.innerWidth/window.innerHeight,this.camera.instance.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this._loop()}teleportTo(t){const e=this.world.cities[t];e&&(this.rath.group.position.set(e.x,.93,e.z),this.rath.speed=0,this.rath.yaw=0,this.hud.setLocation(e.name,e.sub,e.icon),this.audio._ready&&(this.audio.playWhinny(),setTimeout(()=>this.audio._playBell&&this.audio._playBell(),500)))}_loop(){requestAnimationFrame(this._loop.bind(this));const t=Math.min(this.clock.getDelta(),.05),e=this.clock.getElapsedTime();if(this.started){this.rath.update(t,this.controls);const n=this.rath.group.position,i=this.world.getHeight(n.x,n.z),r=.89,a=Math.max(i+r,r),o=n.y;n.y+=(a-n.y)*Math.min(t*8,1);const c=Math.abs(n.y-o)*40;c>.06&&(this.camera.addShake(c*3),c>.12&&this.audio._ready&&this.audio.playBump());const l=this.world.checkProximity(n,this.hud);l>0&&(this.camera.addShake(l*2),this.rath.speed*=.7,this.audio._ready&&this.audio.playBump());const h=this.world.getRiverProximity(n);this.audio._ready&&this.audio.setRiverProximity(h),this.audio.update(Math.abs(this.rath.speed),t),this.hud.update(this.rath)}this.camera.update(this.rath,t),this.weather.update(e,this.camera.instance.position),this.env.update(e),this.world.update(e),this.renderer.render(this.scene,this.camera.instance)}}window.addEventListener("DOMContentLoaded",()=>{window._exp=new im(document.getElementById("canvas"))});
