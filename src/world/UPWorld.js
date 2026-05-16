import * as THREE from 'three'

// ── City teleport points ─────────────────────────────────────────
export const CITIES = {
  ayodhya:  { name:'Ayodhya',   sub:'Birthplace of Lord Ram · Sarayu River',   icon:'🛕', x: 28,  z:-18 },
  vrindavan:{ name:'Vrindavan', sub:'Leela Bhoomi of Shri Krishna',            icon:'🦚', x:-18,  z: 12 },
  agra:     { name:'Agra',      sub:'City of Taj Mahal · Yamuna River',        icon:'🕌', x:-28,  z: 26 },
  varanasi: { name:'Varanasi',  sub:'Kashi — Where Moksha dwells',             icon:'🪔', x: 50,  z:-10 },
  lucknow:  { name:'Lucknow',   sub:'Nawabi City · Capital of UP',             icon:'🏛️', x:  0,  z:  0 },
  mathura:  { name:'Mathura',   sub:'Janmabhoomi of Lord Krishna',             icon:'🎵', x:-16,  z:  6 },
  prayagraj:{ name:'Prayagraj', sub:'Triveni Sangam — Ganga Yamuna Saraswati', icon:'🌊', x: 38,  z: 14 },
}

// ── Monuments ───────────────────────────────────────────────────
const MONUMENTS = [
  { name:'Shri Ram Mandir',     icon:'🛕', desc:'Grand divine temple of Bhagwan Ram',       x:28, z:-20, type:'rammandir',  r:5 },
  { name:'Banke Bihari Mandir', icon:'🦚', desc:'Sacred temple of Shri Krishna, Vrindavan', x:-18,z: 8,  type:'temple',     r:4 },
  { name:'Taj Mahal',           icon:'🕌', desc:'Wonder of the World — Agra, 1653 CE',      x:-28,z: 28, type:'tajmahal',   r:6 },
  { name:'Kashi Vishwanath',    icon:'🪔', desc:'Jyotirlinga of Lord Shiva — Varanasi',     x: 50,z:-12, type:'temple',     r:4 },
  { name:'Rumi Darwaza',        icon:'🏛️', desc:'Nawabi gate of Lucknow — 1784 CE',         x:  1,z: -2, type:'arch',       r:3 },
  { name:'Agra Fort',           icon:'🏰', desc:'Mughal Red Fort — Agra, 1573 CE',          x:-25,z: 24, type:'fort',       r:5 },
  { name:'Triveni Sangam',      icon:'🌊', desc:'Sacred confluence of three rivers',        x: 38,z: 16, type:'sangam',     r:5 },
  { name:'Prem Mandir',         icon:'💜', desc:'White marble temple of divine love',       x:-20,z: 14, type:'premmandir', r:4 },
  { name:'Dasaswamedh Ghat',    icon:'🔥', desc:'Sacred ghat for evening Ganga Aarti',     x: 52,z: -8, type:'ghat',       r:4 },
]

// ── Road signs ──────────────────────────────────────────────────
const SIGNS = [
  { x:  8, z: -5,  text:'→ Ayodhya 28km', subtext:'Ram Mandir', yaw: 0.3 },
  { x: -8, z:  4,  text:'← Mathura 15km', subtext:'Krishna Janmabhoomi', yaw:-0.3 },
  { x:-14, z: 18,  text:'↓ Agra 22km',    subtext:'Taj Mahal', yaw: 0.1 },
  { x: 22, z:  6,  text:'→ Varanasi 45km',subtext:'Kashi Ghat', yaw: 0.5 },
  { x:  6, z: 10,  text:'↓ Prayagraj 32km',subtext:'Triveni Sangam', yaw:-0.2 },
  { x: -4, z:-10,  text:'↑ Lucknow 8km',  subtext:'Nawabi Capital', yaw: 0.0 },
  { x: 14, z: -8,  text:'→ Ayodhya 15km', subtext:'Sarayu Ghat', yaw: 0.2 },
  { x:-10, z: 10,  text:'← Vrindavan 8km',subtext:'Banke Bihari', yaw:-0.1 },
]

export default class UPWorld {
  constructor(exp) {
    this.exp   = exp; this.scene = exp.scene
    this.cities   = CITIES
    this._monuments = MONUMENTS
    this._riverVerts  = []
    this._flameMeshes = []
    this._diyaLights  = []
    this._heightData  = null
    this._foamParts   = []

    this._buildHeightmap()
    this._buildGround()
    this._buildUPBoundary()
    this._buildRivers()
    this._buildHighways()
    this._buildSignboards()
    this._buildCities()
    this._buildMonuments()
    this._buildStreetMarkets()
    this._buildVegetation()
    this._buildRocks()
  }

  // ── HEIGHTMAP (for physics bumps) ─────────────────────────────
  _buildHeightmap() {
    const SIZE = 256
    this._hmSize = SIZE
    this._hmData = new Float32Array(SIZE*SIZE)
    for(let z=0;z<SIZE;z++) for(let x=0;x<SIZE;x++) {
      const wx=(x/SIZE-0.5)*180, wz=(z/SIZE-0.5)*180
      let h = Math.sin(wx*0.12)*0.3 + Math.cos(wz*0.09)*0.25
      h    += Math.sin(wx*0.28+wz*0.18)*0.12
      // river valleys depression
      const gd = Math.abs(wx*0.25+wz*0.65-4)/8
      const yd = Math.abs(wx*0.70-wz*0.25+5)/6
      h -= Math.max(0,1-gd)*2.2
      h -= Math.max(0,1-yd)*1.8
      // road bumps (slightly raised)
      this._hmData[z*SIZE+x] = Math.max(-2.5, h)
    }
  }

  getHeight(wx, wz) {
    const S = this._hmSize
    const xi = Math.floor((wx/180+0.5)*S)
    const zi = Math.floor((wz/180+0.5)*S)
    const xc = Math.max(0,Math.min(S-1,xi)), zc = Math.max(0,Math.min(S-1,zi))
    return this._hmData[zc*S+xc]
  }

  // ── GROUND TERRAIN ─────────────────────────────────────────────
  _buildGround() {
    const W=200,D=200,segs=100
    const geo=new THREE.PlaneGeometry(W,D,segs,segs)
    geo.rotateX(-Math.PI/2)
    const pos=geo.attributes.position
    const colors=new Float32Array(pos.count*3)
    const green=new THREE.Color(0x4a7a2a), dry=new THREE.Color(0x8a7a4a), rvr=new THREE.Color(0x2a5a1a)
    for(let i=0;i<pos.count;i++){
      const x=pos.getX(i), z=pos.getZ(i)
      const h=this.getHeight(x,z)
      pos.setY(i,h)
      const c=h<-0.9?rvr:h<0.3?green:dry
      colors[i*3]=c.r;colors[i*3+1]=c.g;colors[i*3+2]=c.b
    }
    geo.setAttribute('color',new THREE.BufferAttribute(colors,3))
    geo.computeVertexNormals()
    const mat=new THREE.MeshStandardMaterial({vertexColors:true,roughness:0.90,metalness:0.0})
    const mesh=new THREE.Mesh(geo,mat)
    mesh.receiveShadow=true; this.scene.add(mesh)

    // Ocean base
    const ocean=new THREE.Mesh(new THREE.PlaneGeometry(600,600),
      new THREE.MeshStandardMaterial({color:0x005f8a,roughness:0.08,metalness:0.4}))
    ocean.rotation.x=-Math.PI/2; ocean.position.y=-0.8; this.scene.add(ocean)
  }

  // ── UP BOUNDARY (proper non-square state shape) ───────────────
  _buildUPBoundary() {
    // Approximate UP boundary points (world coords, scaled)
    const bpts = [
      [-52,-48],[-38,-50],[-20,-52],[ -5,-54],[12,-52],[28,-48],[45,-42],
      [ 55,-30],[60,-18],[62,-5],[60,8],[55,18],[48,26],[40,30],
      [ 30,32],[18,30],[8,28],[-2,26],[-12,24],[-22,22],[-30,18],
      [-36,12],[-40,4],[-44,-6],[-48,-18],[-52,-32],[-52,-48]
    ]
    const pts3 = bpts.map(([x,z])=>new THREE.Vector3(x,0.3,z))
    const geo  = new THREE.BufferGeometry().setFromPoints(pts3)
    const mat  = new THREE.LineBasicMaterial({color:0xd4a017,transparent:true,opacity:0.5,linewidth:2})
    this.scene.add(new THREE.LineLoop(geo,mat))

    // Subtle boundary glow markers
    bpts.forEach(([x,z],i)=>{
      if(i%3!==0)return
      const m=new THREE.Mesh(new THREE.SphereGeometry(0.18,5,5),
        new THREE.MeshBasicMaterial({color:0xf5c842,transparent:true,opacity:0.6}))
      m.position.set(x,0.4,z); this.scene.add(m)
    })
  }

  // ── RIVERS (Ganga + Yamuna + Sarayu) ─────────────────────────
  _buildRivers() {
    // Ganga — wide, flows east
    this._buildRiver('ganga', 0x1a6b9a, 0x2288cc, [
      [-65,-52],[-45,-35],[-22,-14],[0,2],[22,-2],[40,-6],[52,-8],[68,-9]
    ], 4.5)

    // Yamuna — narrower, meets Ganga at Prayagraj
    this._buildRiver('yamuna', 0x1a5a8a, 0x1a77bb, [
      [-35,-58],[-30,-42],[-26,-28],[-22,-10],[-20,0],[-16,8],[-12,18],[-4,20],[8,18],[22,14],[38,14]
    ], 3.2)

    // Sarayu (near Ayodhya)
    this._buildRiver('sarayu', 0x2a7aaa, 0x3399cc, [
      [10,-22],[18,-20],[26,-18],[34,-18],[42,-20],[52,-22]
    ], 2.2)
  }

  _buildRiver(id, colA, colB, pts2d, width) {
    const curve = new THREE.CatmullRomCurve3(pts2d.map(([x,z])=>new THREE.Vector3(x,-0.25,z)))
    const tPts  = curve.getPoints(160)

    // ── Main water surface using ShaderMaterial for wave animation ──
    const tubeGeo = new THREE.TubeGeometry(curve, 160, width, 6, false)
    const waterMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:    { value: 0 },
        uColor1:  { value: new THREE.Color(colA) },
        uColor2:  { value: new THREE.Color(colB) },
        uFoam:    { value: new THREE.Color(0xaaddff) },
      },
      vertexShader:`
        uniform float uTime;
        varying vec2 vUV; varying float vFoam;
        void main(){
          vUV=uv;
          vec3 p=position;
          p.y+=sin(p.x*0.4+uTime*2.0)*0.12+sin(p.z*0.3+uTime*1.5)*0.08;
          vFoam=abs(sin(p.x*0.6+uTime*3.0+p.z*0.4))*0.5;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
        }`,
      fragmentShader:`
        uniform vec3 uColor1,uColor2,uFoam; uniform float uTime;
        varying vec2 vUV; varying float vFoam;
        void main(){
          float flow=fract(vUV.y*3.0-uTime*0.6);
          vec3 c=mix(uColor1,uColor2,flow*0.6+0.2);
          c=mix(c,uFoam,vFoam*0.3);
          float edge=smoothstep(0.0,0.15,vUV.x)*smoothstep(1.0,0.85,vUV.x);
          gl_FragColor=vec4(c,edge*0.92);
        }`,
      transparent:true, side:THREE.DoubleSide, depthWrite:false
    })
    const river = new THREE.Mesh(tubeGeo, waterMat)
    this.scene.add(river)
    this._riverVerts.push(waterMat)

    // ── Banks (sandy/muddy edges) ──
    ;[-1,1].forEach(s=>{
      const bankPts=tPts.map(p=>{
        const off=new THREE.Vector3(-p.z,0,p.x).normalize().multiplyScalar(s*(width+0.8))
        return new THREE.Vector3(p.x+off.x,-0.05,p.z+off.z)
      })
      const bg=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bankPts),100,0.65,4,false)
      const bm=new THREE.MeshStandardMaterial({color:0xb09060,roughness:0.95})
      this.scene.add(new THREE.Mesh(bg,bm))
    })

    // ── Foam particles along river ──
    const foamCount=40
    for(let i=0;i<foamCount;i++){
      const t=i/foamCount; const p=curve.getPoint(t)
      const foam=new THREE.Mesh(
        new THREE.SphereGeometry(0.12+Math.random()*0.1,5,5),
        new THREE.MeshBasicMaterial({color:0xddeeff,transparent:true,opacity:0.55})
      )
      foam.position.set(p.x+(Math.random()-0.5)*width*1.4,-0.1,p.z+(Math.random()-0.5)*width*1.4)
      foam.userData={baseX:foam.position.x,baseZ:foam.position.z,t,curve,speed:0.02+Math.random()*0.03}
      this.scene.add(foam); this._foamParts.push(foam)
    }

    // ── Ghats (bathing steps) at Varanasi & Ayodhya ──
    if(id==='ganga') this._buildGhats(tPts, 42, -8, 12)
    if(id==='sarayu') this._buildGhats(tPts, 28, -18, 6)
  }

  _buildGhats(riverPts, cx, cz, count) {
    const smat=new THREE.MeshStandardMaterial({color:0xd4c8aa,roughness:0.8})
    const dmat=new THREE.MeshStandardMaterial({color:0xcc8844,roughness:0.7})
    const saffM=new THREE.MeshBasicMaterial({color:0xff6600})

    for(let g=0;g<count;g++){
      const ox=g*2.8-count*1.4
      // 6 steps
      for(let s=0;s<6;s++){
        const step=new THREE.Mesh(new THREE.BoxGeometry(2.4,0.22,1.0+s*0.35),smat)
        step.position.set(cx+ox,-0.06+s*0.2,cz+1.2+s*0.7)
        step.receiveShadow=step.castShadow=true; this.scene.add(step)
      }
      // Lamp post
      if(g%2===0){
        const post=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.08,2.2,6),dmat)
        post.position.set(cx+ox,1.1,cz+1.5); this.scene.add(post)
        const lamp=new THREE.Mesh(new THREE.SphereGeometry(0.15,6,6),saffM)
        lamp.position.set(cx+ox,2.3,cz+1.5); this.scene.add(lamp)
        this._flameMeshes.push(lamp)
        const pl=new THREE.PointLight(0xff6600,0.7,10)
        pl.position.copy(lamp.position); this.scene.add(pl)
        this._diyaLights.push(pl)
        // Diya on ghat step
        const diya=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.1,0.05,8),
          new THREE.MeshStandardMaterial({color:0xcc9944}))
        diya.position.set(cx+ox+(Math.random()-0.5)*1.5,1.12,cz+2.5+Math.random())
        this.scene.add(diya)
        const diyaFlame=new THREE.Mesh(new THREE.SphereGeometry(0.06,5,5),saffM)
        diyaFlame.position.set(diya.position.x,1.22,diya.position.z)
        this.scene.add(diyaFlame); this._flameMeshes.push(diyaFlame)
        const dl=new THREE.PointLight(0xff8800,0.4,5)
        dl.position.copy(diyaFlame.position); this.scene.add(dl); this._diyaLights.push(dl)
      }
    }

    // Boat on river
    for(let b=0;b<3;b++){
      const boat=new THREE.Mesh(new THREE.BoxGeometry(1.2,0.3,0.5),
        new THREE.MeshStandardMaterial({color:0x7a5a3a,roughness:0.9}))
      boat.position.set(cx+(b-1)*4,-0.1,cz-2)
      const sail=new THREE.Mesh(new THREE.PlaneGeometry(0.5,0.9),
        new THREE.MeshStandardMaterial({color:0xffeedd,side:THREE.DoubleSide}))
      sail.position.set(0,0.65,0); boat.add(sail)
      boat.userData.boatBase={x:boat.position.x,z:boat.position.z}
      this.scene.add(boat); this._foamParts.push({type:'boat',mesh:boat,phase:b*2.1})
    }
  }

  // ── HIGHWAYS ─────────────────────────────────────────────────
  _buildHighways() {
    const roads = [
      { pts:[[0,0],[-10,8],[-18,15],[-26,22],[-28,26]], w:1.0, col:0x444444, name:'Agra Expressway' },
      { pts:[[0,0],[8,-4],[18,-9],[26,-15],[28,-18]],   w:0.9, col:0x444444, name:'Ayodhya Marg' },
      { pts:[[0,0],[12,-2],[26,-6],[38,-8],[50,-10]],   w:1.0, col:0x444444, name:'Varanasi Expressway' },
      { pts:[[0,0],[-8,4],[-14,6],[-18,6]],             w:0.8, col:0x555555, name:'Mathura Road' },
      { pts:[[0,0],[8,6],[18,10],[28,12],[38,14]],      w:0.85,col:0x555555, name:'Prayagraj Marg' },
      { pts:[[-18,6],[-20,10],[-20,14],[-20,14]],       w:0.7, col:0x666666, name:'Vrindavan Road' },
    ]
    roads.forEach(r=>{
      const pts=r.pts.map(([x,z])=>new THREE.Vector3(x,0.08,z))
      const curve=new THREE.CatmullRomCurve3(pts)
      const geo=new THREE.TubeGeometry(curve,80,r.w*0.5,4,false)
      const mat=new THREE.MeshStandardMaterial({color:r.col,roughness:0.9})
      const road=new THREE.Mesh(geo,mat); road.receiveShadow=true; this.scene.add(road)

      // Center line
      const subpts=curve.getPoints(50)
      const lineMat=new THREE.LineBasicMaterial({color:0xddcc44,transparent:true,opacity:0.6})
      const lineGeo=new THREE.BufferGeometry().setFromPoints(subpts)
      this.scene.add(new THREE.Line(lineGeo,lineMat))

      // Lamp posts along road every ~10 units
      subpts.forEach((p,i)=>{
        if(i%8!==0)return
        ;[-1,1].forEach(side=>{
          const angle=i<subpts.length-1?Math.atan2(subpts[i+1].x-p.x,subpts[i+1].z-p.z):0
          const lp=new THREE.Mesh(new THREE.CylinderGeometry(0.045,0.055,2.8,6),
            new THREE.MeshStandardMaterial({color:0x888888}))
          lp.position.set(p.x+Math.cos(angle+Math.PI/2)*side*r.w*0.7,1.4,p.z-Math.sin(angle+Math.PI/2)*side*r.w*0.7)
          this.scene.add(lp)
          const bulb=new THREE.Mesh(new THREE.SphereGeometry(0.1,5,5),
            new THREE.MeshBasicMaterial({color:0xffffaa}))
          bulb.position.set(lp.position.x,2.9,lp.position.z); this.scene.add(bulb)
        })
      })
    })
  }

  // ── SIGNBOARDS ───────────────────────────────────────────────
  _buildSignboards() {
    const postMat=new THREE.MeshStandardMaterial({color:0x888888,roughness:0.8})
    const boardMat=new THREE.MeshStandardMaterial({color:0x006622,roughness:0.6})
    const txtMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.5})
    const arrowMat=new THREE.MeshBasicMaterial({color:0xffff00})

    SIGNS.forEach(sign=>{
      const g=new THREE.Group()
      g.position.set(sign.x,0,sign.z)
      g.rotation.y=sign.yaw

      // Two posts
      ;[-0.55,0.55].forEach(x=>{
        const post=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.07,3.2,6),postMat)
        post.position.set(x,1.6,0); post.castShadow=true; g.add(post)
      })

      // Main sign board (green like Indian highway signs)
      const board=new THREE.Mesh(new THREE.BoxGeometry(2.4,0.9,0.1),boardMat)
      board.position.set(0,2.9,0); board.castShadow=true; g.add(board)

      // White border strip
      const border=new THREE.Mesh(new THREE.BoxGeometry(2.44,0.94,0.08),
        new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.5}))
      border.position.set(0,2.9,-0.02); g.add(border)
      const inner=new THREE.Mesh(new THREE.BoxGeometry(2.38,0.88,0.08),boardMat)
      inner.position.set(0,2.9,0.01); g.add(inner)

      // Destination text (simple box stand-in for actual text)
      const textBar=new THREE.Mesh(new THREE.BoxGeometry(2.0,0.12,0.12),txtMat)
      textBar.position.set(0,3.1,0.06); g.add(textBar)
      const textBar2=new THREE.Mesh(new THREE.BoxGeometry(1.6,0.1,0.12),
        new THREE.MeshStandardMaterial({color:0xcccccc}))
      textBar2.position.set(0,2.75,0.06); g.add(textBar2)

      // Arrow indicator (yellow chevron)
      const arrow=new THREE.Mesh(new THREE.ConeGeometry(0.18,0.35,4),arrowMat)
      arrow.rotation.z=sign.text.startsWith('→')?-Math.PI/2:sign.text.startsWith('←')?Math.PI/2:sign.text.startsWith('↑')?Math.PI:0
      arrow.position.set(sign.text.startsWith('→')?0.9:sign.text.startsWith('←')?-0.9:0,2.9,0.08)
      g.add(arrow)

      // Reflector strips (bottom of sign)
      for(let r=0;r<4;r++){
        const ref=new THREE.Mesh(new THREE.BoxGeometry(0.12,0.12,0.12),
          new THREE.MeshBasicMaterial({color:0xff4400}))
        ref.position.set(-0.75+r*0.5,2.46,0.07); g.add(ref)
      }

      g.userData.sign=sign; this.scene.add(g)
    })
  }

  // ── CITY ZONES ────────────────────────────────────────────────
  _buildCities() {
    Object.entries(CITIES).forEach(([k,c])=>{
      // Ground platform
      const gmat=new THREE.MeshStandardMaterial({color:0xc8b890,roughness:0.9})
      const base=new THREE.Mesh(new THREE.CylinderGeometry(7,7,0.12,20),gmat)
      base.position.set(c.x,0.06,c.z); base.receiveShadow=true; this.scene.add(base)

      // Buildings cluster
      const bPalette=[0xcc9977,0xddbb88,0xbbaa88,0xaa9977,0xcc8855,0xddaa66]
      for(let i=0;i<16;i++){
        const a=(i/16)*Math.PI*2, r=2.8+Math.random()*3.2
        const bx=c.x+Math.cos(a)*r, bz=c.z+Math.sin(a)*r
        const bh=0.7+Math.random()*3.0, bw=0.5+Math.random()*0.9
        const bmat=new THREE.MeshStandardMaterial({color:bPalette[i%bPalette.length],roughness:0.85})
        const bld=new THREE.Mesh(new THREE.BoxGeometry(bw,bh,bw),bmat)
        bld.position.set(bx,bh/2+0.06,bz); bld.castShadow=bld.receiveShadow=true; this.scene.add(bld)

        // Flat roof
        const roof=new THREE.Mesh(new THREE.BoxGeometry(bw+0.1,0.1,bw+0.1),
          new THREE.MeshStandardMaterial({color:0xbbaa88,roughness:0.7}))
        roof.position.set(bx,bh+0.11,bz); this.scene.add(roof)

        // Windows
        if(bh>1.5){
          const winMat=new THREE.MeshBasicMaterial({color:0xffffaa,transparent:true,opacity:0.8})
          for(let w=0;w<Math.floor(bh);w++){
            const win=new THREE.Mesh(new THREE.PlaneGeometry(0.2,0.25),winMat)
            win.position.set(bx,0.8+w*0.9,bz+bw*0.51); this.scene.add(win)
          }
        }
      }

      // City glow beacon
      const glow=new THREE.Mesh(new THREE.SphereGeometry(0.25,8,8),
        new THREE.MeshBasicMaterial({color:0xf5c842,transparent:true,opacity:0.55}))
      glow.position.set(c.x,5,c.z); this.scene.add(glow)
      const pl=new THREE.PointLight(0xf5c842,0.7,14); pl.position.set(c.x,3,c.z); this.scene.add(pl)
    })
  }

  // ── MONUMENTS ────────────────────────────────────────────────
  _buildMonuments() {
    MONUMENTS.forEach(mon=>{
      let g; switch(mon.type){
        case 'rammandir':  g=this._makeRamMandir(); break
        case 'tajmahal':   g=this._makeTajMahal();  break
        case 'temple':     g=this._makeTemple();     break
        case 'fort':       g=this._makeFort();       break
        case 'arch':       g=this._makeArch();       break
        case 'premmandir': g=this._makePremMandir(); break
        case 'sangam':     g=this._makeSangam();     break
        case 'ghat':       g=null; break
        default: g=this._makeTemple()
      }
      if(g){ g.position.set(mon.x,0.5,mon.z); this.scene.add(g) }

      // Floating icon orb
      const orb=new THREE.Mesh(new THREE.SphereGeometry(0.2,8,8),
        new THREE.MeshBasicMaterial({color:0xf5c842,transparent:true,opacity:0.75}))
      orb.position.set(mon.x,7.5,mon.z); this.scene.add(orb); mon._orb=orb
      const pl=new THREE.PointLight(0xffdd88,0.9,18); pl.position.set(mon.x,2,mon.z); this.scene.add(pl)
    })
  }

  // ── RAM MANDIR (based on actual reference image - Nagara style) ─
  _makeRamMandir() {
    const g   = new THREE.Group()
    const s   = new THREE.MeshStandardMaterial({color:0xf4e4c8,roughness:0.4,metalness:0.04})
    const gol = new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.9,roughness:0.1})
    const red = new THREE.MeshStandardMaterial({color:0xcc4422,roughness:0.65})

    // Grand terraced base — 4 platforms like reference image
    ;[6.5,5.5,4.8,4.0].forEach((w,i)=>{
      const plat=new THREE.Mesh(new THREE.BoxGeometry(w*1.5,0.4,w),s)
      plat.position.y=i*0.32; plat.castShadow=plat.receiveShadow=true; g.add(plat)
    })
    const baseTopY=1.28

    // Colonnade pillars around base (rows of pillars like reference)
    const colH=1.2, colMat=s
    ;[-2.5,-1.5,-0.5,0.5,1.5,2.5].forEach(x=>{
      ;[-2.0,2.0].forEach(z=>{
        const col=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.13,colH,8),colMat)
        col.position.set(x,baseTopY+colH/2,z); col.castShadow=true; g.add(col)
        const cap=new THREE.Mesh(new THREE.BoxGeometry(0.28,0.12,0.28),s)
        cap.position.set(x,baseTopY+colH+0.06,z); g.add(cap)
      })
    })

    // Mandapa (hall) body
    const mandapa=new THREE.Mesh(new THREE.BoxGeometry(4.8,1.1,3.2),s)
    mandapa.position.y=baseTopY+0.55; mandapa.castShadow=true; g.add(mandapa)
    const mandTopY=baseTopY+1.1

    // Helper: add Nagara shikhara
    const addShikhara=(x,z,scl,baseY)=>{
      // Stacked amalaka rings — signature Nagara style
      const base=new THREE.Mesh(new THREE.BoxGeometry(scl,scl*0.4,scl),s)
      base.position.set(x,baseY+scl*0.2,z); g.add(base)
      let y=baseY+scl*0.4, r=scl*0.48
      for(let i=0;i<11;i++){
        const ring=new THREE.Mesh(new THREE.CylinderGeometry(r,r+scl*0.025,scl*0.2,12),s)
        ring.position.set(x,y,z); ring.castShadow=true; g.add(ring)
        // Horizontal groove bands (characteristic of Nagara architecture)
        if(i%2===0){
          const groove=new THREE.Mesh(new THREE.CylinderGeometry(r*0.96,r*0.96,scl*0.04,12),
            new THREE.MeshStandardMaterial({color:0xe0d0b0,roughness:0.5}))
          groove.position.set(x,y+scl*0.1,z); g.add(groove)
        }
        y+=scl*0.18; r-=scl*0.038; if(r<scl*0.08)r=scl*0.08
      }
      // Amalaka (ribbed disc at top)
      const am=new THREE.Mesh(new THREE.CylinderGeometry(r+scl*0.04,r+scl*0.04,scl*0.15,12),gol)
      am.position.set(x,y,z); g.add(am)
      // Kalasha
      const kal=new THREE.Mesh(new THREE.SphereGeometry(scl*0.12,8,8),gol)
      kal.position.set(x,y+scl*0.2,z); g.add(kal)
      const fin=new THREE.Mesh(new THREE.ConeGeometry(scl*0.05,scl*0.3,6),gol)
      fin.position.set(x,y+scl*0.38,z); g.add(fin)
    }

    // Central main shikhara (tallest)
    addShikhara(0,0,1.6,mandTopY)
    // Four corner shikharas
    ;[[-1.4,-0.9],[ 1.4,-0.9],[-1.4,0.9],[1.4,0.9]].forEach(([x,z])=>addShikhara(x,z,0.75,mandTopY))
    // Front mini shikharas
    ;[[-0.7,1.5],[0.7,1.5]].forEach(([x,z])=>addShikhara(x,z,0.55,baseTopY))

    // Grand staircase (front)
    for(let st=0;st<7;st++){
      const step=new THREE.Mesh(new THREE.BoxGeometry(5.0-st*0.15,0.28,0.55),s)
      step.position.set(0,st*0.26,2.4+st*0.48); g.add(step)
    }

    // Temple wall boundary
    const wallMat=new THREE.MeshStandardMaterial({color:0xeedad0,roughness:0.7})
    ;[
      [0,-4.5,14,0.5],  // front
      [0, 4.5,14,0.5],  // back
      [-7,0,0.5,8],     // left
      [ 7,0,0.5,8],     // right
    ].forEach(([x,z,w,d])=>{
      const wall=new THREE.Mesh(new THREE.BoxGeometry(w,1.2,d),wallMat)
      wall.position.set(x,0.6,z); wall.castShadow=true; g.add(wall)
    })

    // Saffron flag on main shikhara
    const fp=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,1.5,5),gol)
    fp.position.set(0,10.5,0); g.add(fp)
    const flag=new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.55),
      new THREE.MeshStandardMaterial({color:0xff6600,side:THREE.DoubleSide}))
    flag.position.set(0.45,11.3,0); g.add(flag)
    flag.userData.isFlag=true; this._ramFlag=flag

    return g
  }

  // ── TAJ MAHAL (based on reference image) ─────────────────────
  _makeTajMahal() {
    const g   = new THREE.Group()
    const wm  = new THREE.MeshStandardMaterial({color:0xf8f4ef,roughness:0.18,metalness:0.06})
    const gm  = new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.92,roughness:0.08})
    const rm  = new THREE.MeshStandardMaterial({color:0xcc4422,roughness:0.7})
    const wt  = new THREE.MeshStandardMaterial({color:0x4499cc,roughness:0.02,metalness:0.9})
    const bm  = new THREE.MeshStandardMaterial({color:0x8B7355,roughness:0.9})

    // Grand outer platform
    const outerPlat=new THREE.Mesh(new THREE.BoxGeometry(10,0.55,10),wm)
    outerPlat.receiveShadow=outerPlat.castShadow=true; g.add(outerPlat)
    // Platform edge detail
    for(let i=0;i<32;i++){
      const a=(i/32)*Math.PI*2
      const knob=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,0.65,6),wm)
      knob.position.set(Math.cos(a)*4.9,0.6,Math.sin(a)*4.9); g.add(knob)
    }

    // Raised inner platform
    const innerPlat=new THREE.Mesh(new THREE.BoxGeometry(7.5,0.5,7.5),wm)
    innerPlat.position.y=0.52; g.add(innerPlat)

    // Octagonal base of main mausoleum
    const octGeo=new THREE.CylinderGeometry(2.8,2.9,1.4,8)
    const oct=new THREE.Mesh(octGeo,wm); oct.position.y=1.22; oct.castShadow=true; g.add(oct)

    // 4 facade arches (iwan)
    ;[[0,2.5,0],[0,-2.5,Math.PI],[2.5,0,Math.PI/2],[-2.5,0,-Math.PI/2]].forEach(([x,z,ry])=>{
      const fac=new THREE.Mesh(new THREE.BoxGeometry(2.2,1.4,0.18),wm)
      fac.position.set(x,1.42,z); fac.rotation.y=ry; fac.castShadow=true; g.add(fac)
      // Pointed arch
      const torus=new THREE.Mesh(new THREE.TorusGeometry(0.75,0.12,8,18,Math.PI*0.85),wm)
      torus.rotation.z=Math.PI; torus.position.set(x,2.4,z); torus.rotation.y=ry; g.add(torus)
      // Decorative inlay bands (red/floral)
      const band=new THREE.Mesh(new THREE.BoxGeometry(2.18,0.12,0.12),rm)
      band.position.set(x,0.88,z+0.06); band.rotation.y=ry; g.add(band)
      const band2=new THREE.Mesh(new THREE.BoxGeometry(2.18,0.08,0.12),rm)
      band2.position.set(x,1.85,z+0.06); band2.rotation.y=ry; g.add(band2)
    })

    // Drum
    const drum=new THREE.Mesh(new THREE.CylinderGeometry(1.35,1.38,0.75,16),wm)
    drum.position.y=2.12; drum.castShadow=true; g.add(drum)

    // Main bulbous onion dome (LatheGeometry for authentic profile)
    const dPts=[]
    for(let i=0;i<=22;i++){
      const t=i/22, a=t*Math.PI
      const bulge=Math.sin(a)*(1+0.42*Math.sin(a*1.4))
      dPts.push(new THREE.Vector2(bulge*1.25,Math.cos(a)*1.55+1.55))
    }
    const domeGeo=new THREE.LatheGeometry(dPts,22)
    const dome=new THREE.Mesh(domeGeo,wm); dome.position.y=2.38; dome.castShadow=true; g.add(dome)

    // 4 corner kiosks (chhatris) on main platform
    ;[[-1.8,-1.8],[-1.8,1.8],[1.8,-1.8],[1.8,1.8]].forEach(([x,z])=>{
      const cDrum=new THREE.Mesh(new THREE.CylinderGeometry(0.34,0.36,0.38,10),wm)
      cDrum.position.set(x,2.02,z); g.add(cDrum)
      const cDome=new THREE.Mesh(new THREE.SphereGeometry(0.36,12,8,0,Math.PI*2,0,Math.PI*0.55),wm)
      cDome.position.set(x,2.25,z); g.add(cDome)
      const cFin=new THREE.Mesh(new THREE.ConeGeometry(0.05,0.28,6),gm)
      cFin.position.set(x,2.64,z); g.add(cFin)
    })

    // Main finial
    const kal=new THREE.Mesh(new THREE.SphereGeometry(0.12,8,8),gm)
    kal.position.y=5.62; g.add(kal)
    const fin=new THREE.Mesh(new THREE.ConeGeometry(0.065,0.55,8),gm)
    fin.position.y=5.9; g.add(fin)

    // 4 TALL MINARETS
    ;[[-4.2,-4.2],[-4.2,4.2],[4.2,-4.2],[4.2,4.2]].forEach(([x,z])=>{
      // Base rings (3 decorated rings)
      for(let r=0;r<3;r++){
        const ring=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.30,0.26,12),wm)
        ring.position.set(x,r*0.3,z); g.add(ring)
      }
      // Main shaft (tapering)
      const shaft=new THREE.Mesh(new THREE.CylinderGeometry(0.20,0.28,4.8,12),wm)
      shaft.position.set(x,3.0,z); shaft.castShadow=true; g.add(shaft)
      // Balcony
      const bal=new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,0.2,14),wm)
      bal.position.set(x,5.55,z); g.add(bal)
      // Balcony rail
      const rail=new THREE.Mesh(new THREE.TorusGeometry(0.32,0.04,5,14),wm)
      rail.rotation.x=Math.PI/2; rail.position.set(x,5.7,z); g.add(rail)
      // Upper shaft
      const us=new THREE.Mesh(new THREE.CylinderGeometry(0.14,0.20,1.1,10),wm)
      us.position.set(x,6.2,z); g.add(us)
      // Minaret dome (small bulbous)
      const md=new THREE.Mesh(new THREE.SphereGeometry(0.20,10,7,0,Math.PI*2,0,Math.PI*0.65),wm)
      md.position.set(x,6.82,z); g.add(md)
      // Minaret finial
      const mf=new THREE.Mesh(new THREE.ConeGeometry(0.055,0.42,7),gm)
      mf.position.set(x,7.1,z); g.add(mf)
      const mk=new THREE.Mesh(new THREE.SphereGeometry(0.06,6,6),gm)
      mk.position.set(x,6.78,z); g.add(mk)
    })

    // Reflection pool (long, leading to gateway)
    const pool=new THREE.Mesh(new THREE.BoxGeometry(1.2,0.1,6.0),wt)
    pool.position.set(0,0.44,5.5); g.add(pool)
    // Cypress trees along pool
    ;[-0.7,0.7].forEach(x=>{
      ;[3.0,4.5,6.5,8.0].forEach(z=>{
        const trunk=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.1,0.8,6),
          new THREE.MeshStandardMaterial({color:0x5a3a1a}))
        trunk.position.set(x,0.4,z); this.scene.add(trunk)
        const tree=new THREE.Mesh(new THREE.ConeGeometry(0.3,1.8,7),
          new THREE.MeshStandardMaterial({color:0x1a5a2a,roughness:0.9}))
        tree.position.set(x,1.7,z); this.scene.add(tree)
      })
    })

    // Red sandstone gateway (Darwaza-i-Rauza)
    const gate=new THREE.Mesh(new THREE.BoxGeometry(5.0,3.5,0.7),rm)
    gate.position.set(0,1.75,9.5); gate.castShadow=true; g.add(gate)
    const gArch=new THREE.Mesh(new THREE.TorusGeometry(1.1,0.15,8,18,Math.PI),
      new THREE.MeshStandardMaterial({color:0xdd5533,roughness:0.6}))
    gArch.rotation.z=Math.PI; gArch.position.set(0,3.7,9.5); g.add(gArch)
    // 4 corner towers on gateway
    ;[[-2.2,9.5],[2.2,9.5]].forEach(([x,z])=>{
      const gt=new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.5,3.8,10),rm)
      gt.position.set(x,1.9,z); gt.castShadow=true; g.add(gt)
      const gc=new THREE.Mesh(new THREE.SphereGeometry(0.5,10,7,0,Math.PI*2,0,Math.PI/2),rm)
      gc.position.set(x,3.9,z); g.add(gc)
    })

    return g
  }

  _makeTemple() {
    const g=new THREE.Group()
    const m=new THREE.MeshStandardMaterial({color:0xdd9944,roughness:0.65})
    const gm=new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.9})
    const tbase=new THREE.Mesh(new THREE.BoxGeometry(3.8,0.55,3.8),m); tbase.castShadow=tbase.receiveShadow=true; g.add(tbase)
    const sanctum=new THREE.Mesh(new THREE.BoxGeometry(2.0,1.2,2.0),m)
    sanctum.position.y=0.87; sanctum.castShadow=true; g.add(sanctum)
    let y=1.48,r=0.90
    for(let i=0;i<10;i++){
      const ring=new THREE.Mesh(new THREE.CylinderGeometry(r,r+0.028,0.22,12),m)
      ring.position.y=y; g.add(ring); y+=0.18; r-=0.065; if(r<0.1)r=0.1
    }
    const kal=new THREE.Mesh(new THREE.SphereGeometry(0.14,8,8),gm); kal.position.set(0,y,0); g.add(kal)
    ;[[-0.9,-0.9],[-0.9,0.9],[0.9,-0.9],[0.9,0.9]].forEach(([x,z])=>{
      const pil=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.14,1.2,8),m); pil.position.set(x,0.87,z); g.add(pil)
    })
    return g
  }

  _makeFort() {
    const g=new THREE.Group()
    const rm=new THREE.MeshStandardMaterial({color:0xcc4422,roughness:0.88})
    const sm=new THREE.MeshStandardMaterial({color:0xff6644,roughness:0.7})
    ;[[-4,0,8.5,3.2,0.6],[4,0,8.5,3.2,0.6],[0,-4,0.6,3.2,8.5],[0,4,0.6,3.2,8.5]].forEach(([x,z,w,h,d])=>{
      const wall=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),rm)
      wall.position.set(x,h/2,z); wall.castShadow=wall.receiveShadow=true; g.add(wall)
    })
    for(let b=0;b<16;b++){const a=(b/16)*Math.PI*2;const mer=new THREE.Mesh(new THREE.BoxGeometry(0.45,0.55,0.45),rm);mer.position.set(Math.cos(a)*4,3.48,Math.sin(a)*4);g.add(mer)}
    ;[[-3.5,-3.5],[-3.5,3.5],[3.5,-3.5],[3.5,3.5]].forEach(([x,z])=>{
      const t=new THREE.Mesh(new THREE.CylinderGeometry(0.6,0.65,3.8,10),rm)
      t.position.set(x,1.9,z); t.castShadow=true; g.add(t)
      const c=new THREE.Mesh(new THREE.ConeGeometry(0.68,0.75,10),sm)
      c.position.set(x,3.95,z); g.add(c)
    })
    const gate=new THREE.Mesh(new THREE.BoxGeometry(1.8,3.2,0.7),rm)
    gate.position.set(0,1.6,4.3); g.add(gate)
    const ga=new THREE.Mesh(new THREE.TorusGeometry(0.7,0.12,8,16,Math.PI),sm)
    ga.rotation.z=Math.PI; ga.position.set(0,3.3,4.3); g.add(ga)
    const pal=new THREE.Mesh(new THREE.BoxGeometry(4,2,4),new THREE.MeshStandardMaterial({color:0xfaebd7,roughness:0.5}))
    pal.position.y=1; g.add(pal)
    const pd=new THREE.Mesh(new THREE.SphereGeometry(0.7,12,8,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.8}))
    pd.position.y=2.4; g.add(pd)
    return g
  }

  _makeArch() {
    const g=new THREE.Group()
    const m=new THREE.MeshStandardMaterial({color:0xcc8844,roughness:0.7})
    const gm=new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.7})
    ;[-1.4,1.4].forEach(x=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(0.65,0.75,5.5,10),m);p.position.set(x,2.75,0);p.castShadow=true;g.add(p)})
    const beam=new THREE.Mesh(new THREE.BoxGeometry(4.6,0.9,0.75),m); beam.position.y=5.65; g.add(beam)
    const tor=new THREE.Mesh(new THREE.TorusGeometry(1.15,0.14,10,20,Math.PI),gm); tor.rotation.z=Math.PI; tor.position.y=5.6; g.add(tor)
    ;[-1.3,0,1.3].forEach(x=>{const d=new THREE.Mesh(new THREE.SphereGeometry(0.18,8,6,0,Math.PI*2,0,Math.PI/2),m);d.position.set(x,6.2,0);g.add(d)})
    return g
  }

  _makePremMandir() {
    const g=new THREE.Group()
    const wm=new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.2,metalness:0.05})
    const gm=new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.9})
    const pm=new THREE.MeshStandardMaterial({color:0xffaaee,roughness:0.5})
    const base=new THREE.Mesh(new THREE.BoxGeometry(6.5,0.65,5),wm); base.castShadow=true; base.receiveShadow=true; g.add(base)
    const body=new THREE.Mesh(new THREE.BoxGeometry(3.8,1.1,3.2),wm); body.position.y=0.87; g.add(body)
    const drum=new THREE.Mesh(new THREE.CylinderGeometry(0.9,0.95,0.55,14),wm); drum.position.y=1.65; g.add(drum)
    const dome=new THREE.Mesh(new THREE.SphereGeometry(0.92,16,10,0,Math.PI*2,0,Math.PI*0.57),wm); dome.position.y=1.95; g.add(dome)
    const kal=new THREE.Mesh(new THREE.SphereGeometry(0.1,8,8),gm); kal.position.y=2.92; g.add(kal)
    ;[[-1.6,-1.4],[-1.6,1.4],[1.6,-1.4],[1.6,1.4]].forEach(([x,z])=>{
      const s=new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.4,2.2,10),wm); s.position.set(x,1.85,z); g.add(s)
      const sc=new THREE.Mesh(new THREE.SphereGeometry(0.36,10,7,0,Math.PI*2,0,Math.PI*0.55),wm); sc.position.set(x,2.98,z); g.add(sc)
    })
    for(let i=0;i<7;i++){const pil=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.12,1.12,8),wm);pil.position.set(-1.35+i*0.45,0.87,1.65);g.add(pil)}
    return g
  }

  _makeSangam() {
    const g=new THREE.Group()
    // Confluence platform
    const plat=new THREE.Mesh(new THREE.CylinderGeometry(4,4,0.3,20),
      new THREE.MeshStandardMaterial({color:0xd4c8aa,roughness:0.8}))
    g.add(plat)
    // Sacred post (Akshayavat-style)
    const post=new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.25,5,8),
      new THREE.MeshStandardMaterial({color:0xcc8844}))
    post.position.y=2.5; g.add(post)
    const top=new THREE.Mesh(new THREE.SphereGeometry(0.45,10,8),
      new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.8}))
    top.position.y=5.25; g.add(top)
    // Flags
    ;[-0.3,0.3].forEach(x=>{
      const flag=new THREE.Mesh(new THREE.PlaneGeometry(0.7,0.45),
        new THREE.MeshStandardMaterial({color:0xff6600,side:THREE.DoubleSide}))
      flag.position.set(x+0.35,5.5,0); g.add(flag)
    })
    // Boats
    for(let b=0;b<4;b++){
      const boat=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.25,0.55),
        new THREE.MeshStandardMaterial({color:0x7a5a3a,roughness:0.9}))
      boat.position.set(Math.cos(b*Math.PI/2)*3,-0.05,Math.sin(b*Math.PI/2)*3); g.add(boat)
    }
    return g
  }

  // ── STREET MARKETS ────────────────────────────────────────────
  _buildStreetMarkets() {
    const marketSpots=[
      {x:5,z:-2},{x:-5,z:2},{x:20,z:-12},{x:-14,z:8},{x:10,z:4},{x:-8,z:-4},{x:32,z:-16},{x:42,z:-6}
    ]
    marketSpots.forEach(pos=>this._buildMarketStall(pos.x,pos.z))
  }

  _buildMarketStall(cx,cz) {
    const tentColors=[0xff4400,0xcc2200,0x004488,0x006622,0x884400,0x440088,0xcc6600]
    const rnd=Math.floor(Math.random()*tentColors.length)
    const col=tentColors[rnd]
    const tentMat=new THREE.MeshStandardMaterial({color:col,roughness:0.8,side:THREE.DoubleSide})
    const stripeMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.8,side:THREE.DoubleSide})
    const woodMat=new THREE.MeshStandardMaterial({color:0x7a5a3a,roughness:0.9})

    // Tent posts
    ;[-0.9,0.9].forEach(x=>{
      ;[-0.5,0.5].forEach(z=>{
        const post=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.06,1.6,6),woodMat)
        post.position.set(cx+x,0.8,cz+z); post.castShadow=true; this.scene.add(post)
      })
    })

    // Tent roof (canopy)
    const roofGeo=new THREE.BufferGeometry()
    const roofVerts=new Float32Array([
      // Front-left slope
      cx-1.1,1.85,cz-0.65, cx-1.1,1.3,cz-0.65, cx+1.1,1.3,cz-0.65,
      cx-1.1,1.85,cz-0.65, cx+1.1,1.3,cz-0.65, cx+1.1,1.85,cz-0.65,
      // Back slope
      cx-1.1,1.85,cz+0.65, cx+1.1,1.85,cz+0.65, cx+1.1,1.3,cz+0.65,
      cx-1.1,1.85,cz+0.65, cx+1.1,1.3,cz+0.65, cx-1.1,1.3,cz+0.65,
      // Left side
      cx-1.1,1.85,cz-0.65, cx-1.1,1.85,cz+0.65, cx-1.1,1.3,cz-0.65,
      cx-1.1,1.85,cz+0.65, cx-1.1,1.3,cz+0.65, cx-1.1,1.3,cz-0.65,
      // Right side
      cx+1.1,1.85,cz-0.65, cx+1.1,1.3,cz-0.65, cx+1.1,1.85,cz+0.65,
      cx+1.1,1.85,cz+0.65, cx+1.1,1.3,cz-0.65, cx+1.1,1.3,cz+0.65,
      // Top ridge
      cx-1.1,1.85,cz-0.65, cx+1.1,1.85,cz-0.65, cx+1.1,1.85,cz+0.65,
      cx-1.1,1.85,cz-0.65, cx+1.1,1.85,cz+0.65, cx-1.1,1.85,cz+0.65,
    ])
    roofGeo.setAttribute('position',new THREE.BufferAttribute(roofVerts,3))
    roofGeo.computeVertexNormals()
    const tent=new THREE.Mesh(roofGeo,tentMat); tent.castShadow=true; this.scene.add(tent)

    // Tent fringe
    for(let f=0;f<10;f++){
      const fx=cx-1.0+f*0.22
      const fringe=new THREE.Mesh(new THREE.BoxGeometry(0.04,0.18,0.04),stripeMat)
      fringe.position.set(fx,1.22,cz-0.66); this.scene.add(fringe)
    }

    // Counter/table
    const table=new THREE.Mesh(new THREE.BoxGeometry(1.6,0.08,0.7),woodMat)
    table.position.set(cx,0.95,cz); table.castShadow=true; this.scene.add(table)

    // Goods on table (colorful items)
    const goodColors=[0xff4400,0xffaa00,0xff0088,0x00aaff,0x44cc44]
    for(let g=0;g<5;g++){
      const good=new THREE.Mesh(
        Math.random()<0.5?new THREE.SphereGeometry(0.1+Math.random()*0.08,5,5):new THREE.BoxGeometry(0.14,0.12,0.14),
        new THREE.MeshStandardMaterial({color:goodColors[g%goodColors.length],roughness:0.7})
      )
      good.position.set(cx-0.55+g*0.28,1.05,cz+(Math.random()-0.5)*0.3)
      this.scene.add(good)
    }

    // Hanging cloth strips
    for(let h=0;h<4;h++){
      const hang=new THREE.Mesh(new THREE.PlaneGeometry(0.25,0.5),
        new THREE.MeshStandardMaterial({color:goodColors[h%goodColors.length],side:THREE.DoubleSide,roughness:0.8}))
      hang.position.set(cx-0.55+h*0.38,1.58,cz-0.6); this.scene.add(hang)
    }

    // Small ambient light
    const sl=new THREE.PointLight(0xffeecc,0.4,6); sl.position.set(cx,1.8,cz); this.scene.add(sl)
  }

  // ── VEGETATION ────────────────────────────────────────────────
  _buildVegetation() {
    for(let i=0;i<400;i++){
      const x=(Math.random()-.5)*170, z=(Math.random()-.5)*170
      const nearCity=Object.values(CITIES).some(c=>Math.abs(c.x-x)<6&&Math.abs(c.z-z)<6)
      const nearMon=MONUMENTS.some(m=>Math.abs(m.x-x)<7&&Math.abs(m.z-z)<7)
      if(nearCity||nearMon) continue
      const h=this.getHeight(x,z); if(h<-1.2) continue
      this._plantTree(x,h+0.05,z)
    }
    // Sugarcane fields
    for(let f=0;f<10;f++){const fx=(Math.random()-.5)*120,fz=(Math.random()-.5)*120;this._addField(fx,fz,0x5a8a1a,6,5)}
    // Wheat fields
    for(let f=0;f<12;f++){const fx=(Math.random()-.5)*120,fz=(Math.random()-.5)*120;this._addField(fx,fz,0xc8a83a,5,5)}
  }

  _plantTree(x,y,z){
    const types=[
      {tC:0x5a3a1a,cC:0x2d7a3a,cR:0.42,tH:1.2},
      {tC:0x4a3020,cC:0x1a5a2a,cR:0.36,tH:0.7,cGeo:'cone'},
      {tC:0x6a4a2a,cC:0x3a8a2a,cR:0.38,tH:1.0},
    ]
    const t=types[Math.floor(Math.random()*types.length)]
    const th=t.tH+Math.random()*0.7
    const trunk=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.1,th,5),
      new THREE.MeshStandardMaterial({color:t.tC}))
    trunk.position.set(x,y+th/2,z); trunk.castShadow=true; this.scene.add(trunk)
    const green=new THREE.Color(t.cC).lerp(new THREE.Color(0x88cc44),Math.random()*.35)
    const cGeo=t.cGeo==='cone'?new THREE.ConeGeometry(t.cR,t.cR*2.5,6):new THREE.DodecahedronGeometry(t.cR+Math.random()*.22,0)
    const canopy=new THREE.Mesh(cGeo,new THREE.MeshStandardMaterial({color:green,roughness:0.92,flatShading:true}))
    canopy.position.set(x,y+th+t.cR*.8,z); canopy.castShadow=true; this.scene.add(canopy)
  }

  _addField(cx,cz,color,rows,cols){
    const mat=new THREE.MeshStandardMaterial({color,roughness:0.95})
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){
      const h=0.35+Math.random()*.3
      const blade=new THREE.Mesh(new THREE.BoxGeometry(0.28,h,0.28),mat)
      blade.position.set(cx+r*.65-rows*.3,h/2+.05,cz+c*.65-cols*.3); this.scene.add(blade)
    }
  }

  // ── ROCKS (physics obstacles) ─────────────────────────────────
  _buildRocks() {
    this._rocks=[]
    for(let i=0;i<60;i++){
      const x=(Math.random()-.5)*160, z=(Math.random()-.5)*160
      const nearRoad=Math.abs(x)<2||Math.abs(z)<2; if(nearRoad) continue
      const nearCity=Object.values(CITIES).some(c=>Math.abs(c.x-x)<8&&Math.abs(c.z-z)<8); if(nearCity) continue
      const h=this.getHeight(x,z)
      const rs=0.25+Math.random()*.5
      const geo=new THREE.DodecahedronGeometry(rs,0)
      const mat=new THREE.MeshStandardMaterial({color:0x888880,roughness:0.95,flatShading:true})
      const rock=new THREE.Mesh(geo,mat)
      rock.position.set(x,h+rs*.4,z); rock.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0)
      rock.castShadow=rock.receiveShadow=true; this.scene.add(rock)
      this._rocks.push({pos:new THREE.Vector3(x,h+rs*.4,z),radius:rs*1.4})
    }
  }

  // ── UPDATE ────────────────────────────────────────────────────
  update(elapsed) {
    // River wave animation
    this._riverVerts.forEach(m=>{ if(m.uniforms) m.uniforms.uTime.value=elapsed })

    // Diya flicker
    this._flameMeshes.forEach((f,i)=>{
      const fl=0.88+.12*Math.sin(elapsed*9+i*1.4); f.scale.setScalar(fl)
    })
    this._diyaLights.forEach((l,i)=>{
      l.intensity=0.5+.25*Math.sin(elapsed*7+i*1.7)
    })

    // Foam particles float (gentle bobbing, no drift)
    this._foamParts.forEach((fp,i)=>{
      if(fp.type==='boat'){
        fp.mesh.position.y=-0.1+Math.sin(elapsed*0.8+fp.phase)*0.06
        fp.mesh.rotation.z=Math.sin(elapsed*0.5+fp.phase)*0.04
      } else if(fp && fp.position && fp.userData){
        // gentle side sway along river
        fp.position.x=fp.userData.baseX+Math.sin(elapsed*0.9+i*0.4)*0.25
        fp.position.y=-0.06+Math.sin(elapsed*1.5+i*0.7)*0.04
        fp.position.z=fp.userData.baseZ+Math.cos(elapsed*0.6+i*0.3)*0.2
      }
    })

    // Flag wave
    if(this._ramFlag){
      this._ramFlag.rotation.y=Math.sin(elapsed*3)*0.4
      this._ramFlag.rotation.z=Math.sin(elapsed*2.2)*0.08
    }
  }

  // ── PROXIMITY CHECK ───────────────────────────────────────────
  checkProximity(rathPos, hud) {
    // State border check
    if(this._isOutsideUP(rathPos)){
      hud.showBorderWarning(); return 0
    }

    // Monument proximity
    let nearest=null, minD=999
    MONUMENTS.forEach(m=>{
      const d=Math.sqrt((rathPos.x-m.x)**2+(rathPos.z-m.z)**2)
      if(d<minD){minD=d;nearest={m,d}}
      if(m._orb) m._orb.scale.setScalar(1+Math.sin(Date.now()*.002)*.15)
    })
    if(nearest&&nearest.d<nearest.m.r+5) hud.showMonument(nearest.m,Math.round(nearest.d*3)+'m')

    // City proximity
    let nearCity=null, minCD=999
    Object.entries(CITIES).forEach(([k,c])=>{
      const d=Math.sqrt((rathPos.x-c.x)**2+(rathPos.z-c.z)**2)
      if(d<minCD){minCD=d;nearCity={k,c,d}}
    })
    if(nearCity&&nearCity.d<10) hud.setLocation(nearCity.c.name,nearCity.c.sub,nearCity.c.icon)

    // Rock collision (return bump force)
    let bumpForce=0
    this._rocks.forEach(r=>{
      const d=Math.sqrt((rathPos.x-r.pos.x)**2+(rathPos.z-r.pos.z)**2)
      if(d<r.radius+0.8) bumpForce=Math.max(bumpForce,(r.radius+0.8-d)*2)
    })
    return bumpForce
  }

  _isOutsideUP(pos) {
    // Rough UP bounding polygon check
    const bpts=[[-52,-48],[-38,-50],[-20,-52],[-5,-54],[12,-52],[28,-48],[45,-42],[55,-30],[60,-18],[62,-5],[60,8],[55,18],[48,26],[40,30],[30,32],[18,30],[8,28],[-2,26],[-12,24],[-22,22],[-30,18],[-36,12],[-40,4],[-44,-6],[-48,-18],[-52,-32]]
    let inside=false; const n=bpts.length
    for(let i=0,j=n-1;i<n;j=i++){
      const [xi,zi]=bpts[i],[xj,zj]=bpts[j]
      if(((zi>pos.z)!==(zj>pos.z))&&(pos.x<(xj-xi)*(pos.z-zi)/(zj-zi)+xi)) inside=!inside
    }
    return !inside
  }

  getRiverProximity(rathPos) {
    // Returns 0-1 closeness to any river
    const riverPts=[
      [[-65,-52],[68,-9]],  // ganga approx
      [[-35,-58],[38,14]],  // yamuna approx
    ]
    let minD=999
    riverPts.forEach(([a,b])=>{
      const dx=b[0]-a[0],dz=b[1]-a[1],len=Math.sqrt(dx*dx+dz*dz)
      const t=Math.max(0,Math.min(1,((rathPos.x-a[0])*dx+(rathPos.z-a[1])*dz)/(len*len)))
      const px=a[0]+t*dx,pz=a[1]+t*dz
      const d=Math.sqrt((rathPos.x-px)**2+(rathPos.z-pz)**2)
      minD=Math.min(minD,d)
    })
    return Math.max(0,1-minD/18)
  }
}
