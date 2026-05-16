import * as THREE from 'three'

export default class Environment {
  constructor(exp) {
    this.exp = exp; this.scene = exp.scene
    this._mode = 'clear'
    this._buildSky(); this._buildLights(); this._buildStars()
    this._ltTimer = 0; this._nextLt = 5
  }

  _buildSky() {
    const geo = new THREE.SphereGeometry(1400,32,16); geo.scale(-1,1,1)
    this._skyMat = new THREE.ShaderMaterial({
      uniforms: {
        uZenith: { value: new THREE.Color(0x0d2a6e) },
        uHorizon:{ value: new THREE.Color(0x6aaed6) },
        uGlow:   { value: new THREE.Color(0xffd6a5) },
        uSunDir: { value: new THREE.Vector3(0.4,0.7,-0.6).normalize() },
      },
      vertexShader:`varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader:`
        uniform vec3 uZenith,uHorizon,uGlow,uSunDir; varying vec3 vD;
        void main(){
          float h=clamp(vD.y*0.5+0.5,0.0,1.0);
          vec3 c=mix(uGlow,uHorizon,smoothstep(0.0,0.22,h));
          c=mix(c,uZenith,smoothstep(0.18,0.75,h));
          float sun=pow(max(dot(normalize(vD),uSunDir),0.0),120.0);
          float halo=pow(max(dot(normalize(vD),uSunDir),0.0),8.0)*0.15;
          c+=vec3(1.0,0.95,0.55)*sun*3.0+vec3(1.0,0.8,0.4)*halo;
          gl_FragColor=vec4(c,1.0);
        }`,
      side:THREE.BackSide, depthWrite:false
    })
    this.scene.add(new THREE.Mesh(geo, this._skyMat))
    this._skyU = this._skyMat.uniforms
  }

  _buildLights() {
    this.sun = new THREE.DirectionalLight(0xfff3cc,2.0)
    this.sun.position.set(100,200,-60); this.sun.castShadow=true
    this.sun.shadow.mapSize.set(4096,4096)
    this.sun.shadow.camera.left=-220; this.sun.shadow.camera.right=220
    this.sun.shadow.camera.top=220; this.sun.shadow.camera.bottom=-220
    this.sun.shadow.camera.near=1; this.sun.shadow.camera.far=600
    this.sun.shadow.bias=-0.0004
    this.scene.add(this.sun)
    this.hemi=new THREE.HemisphereLight(0x87ceeb,0x6a9c3a,0.65); this.scene.add(this.hemi)
    this.ambient=new THREE.AmbientLight(0xffeedd,0.28); this.scene.add(this.ambient)
    this._flash=new THREE.PointLight(0xaabbff,0,3000); this._flash.position.set(0,300,0); this.scene.add(this._flash)
  }

  _buildStars() {
    const N=1400,pos=new Float32Array(N*3)
    for(let i=0;i<N;i++){
      const t=Math.random()*Math.PI*2, p=Math.random()*Math.PI, r=1200
      pos[i*3]=r*Math.sin(p)*Math.cos(t); pos[i*3+1]=Math.abs(r*Math.cos(p)); pos[i*3+2]=r*Math.sin(p)*Math.sin(t)
    }
    const geo=new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.BufferAttribute(pos,3))
    this._stars=new THREE.Points(geo,new THREE.PointsMaterial({color:0xffffff,size:1.6,sizeAttenuation:true}))
    this._stars.visible=false; this.scene.add(this._stars)
  }

  setMode(mode) {
    this._mode=mode
    const P={
      clear: {z:0x0d2a6e,h:0x6aaed6,g:0xffd6a5,si:2.0,sc:0xfff3cc,hi:0.65,fog:null},
      golden:{z:0x1a0a30,h:0xcc5500,g:0xff9933,si:1.0,sc:0xff8833,hi:0.45,fog:new THREE.Fog(0xffaa55,80,700)},
      rain:  {z:0x0a0a18,h:0x1a2a3a,g:0x3a4a5a,si:0.2,sc:0x8899aa,hi:0.35,fog:new THREE.Fog(0x5a6a7a,15,180)},
      storm: {z:0x050510,h:0x0a0a18,g:0x1a1a2a,si:0.05,sc:0x8888aa,hi:0.1,fog:new THREE.Fog(0x111122,8,100)},
      fog:   {z:0x8899aa,h:0xaabbcc,g:0xccddee,si:0.3,sc:0xaabbcc,hi:0.55,fog:new THREE.Fog(0xaabbcc,6,70)},
    }
    const p=P[mode]||P.clear
    this._skyU.uZenith.value.set(p.z); this._skyU.uHorizon.value.set(p.h); this._skyU.uGlow.value.set(p.g)
    this.sun.intensity=p.si; this.sun.color.set(p.sc); this.hemi.intensity=p.hi
    this.exp.scene.fog=p.fog; this._stars.visible=(mode==='storm')
  }

  triggerLightning() {
    this._flash.intensity=10; setTimeout(()=>this._flash.intensity=0,80)
    setTimeout(()=>{this._flash.intensity=6;setTimeout(()=>this._flash.intensity=0,55)},220)
  }

  update(elapsed) {
    const a=elapsed*0.018
    this.sun.position.set(Math.cos(a)*200,Math.abs(Math.sin(a))*260+50,Math.sin(a)*150)
    this._skyU.uSunDir.value.copy(this.sun.position).normalize()
    if(this._mode==='storm'){ this._ltTimer+=0.016; if(this._ltTimer>this._nextLt){this._ltTimer=0;this._nextLt=2+Math.random()*6;this.triggerLightning()} }
  }
}
