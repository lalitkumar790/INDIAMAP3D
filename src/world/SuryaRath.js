import * as THREE from 'three'

const WR = 0.92   // wheel radius — bottom of wheel touches y=0
const GC = 0.05   // ground clearance

export default class SuryaRath {
  constructor(exp) {
    this.exp=exp; this.scene=exp.scene
    this.group=new THREE.Group()
    this.speed=0; this.yaw=0; this.maxSpeed=22; this.accel=13; this.brakeF=20; this.drag=5.5; this.turnSpd=1.5
    this.group.position.set(28, WR+GC, -18)
    this.scene.add(this.group)
    this._phase=0; this._flagP=0; this._wheels=[]; this._horses=[]; this._flag=null
    this._build(); this._buildDust()
  }

  _build() { this._buildChariot(); this._buildHorses(); this._buildKrishna(); this._buildArjuna() }

  // ── DIVINE NANDIGHOSH CHARIOT ──────────────────────────────────
  _buildChariot() {
    const G   = new THREE.Group()
    const gol = new THREE.MeshStandardMaterial({color:0xd4a017,metalness:0.88,roughness:0.12})
    const wht = new THREE.MeshStandardMaterial({color:0xf8f4ef,roughness:0.25,metalness:0.06})
    const dar = new THREE.MeshStandardMaterial({color:0x2a1200,roughness:0.85})
    const red = new THREE.MeshStandardMaterial({color:0xcc2200,roughness:0.6,side:THREE.DoubleSide})
    const sky = new THREE.MeshStandardMaterial({color:0x1133cc,roughness:0.6,metalness:0.1})

    // ── Axle (at y=0, the wheel center height) ──
    const axle=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,3.4,8),dar)
    axle.rotation.z=Math.PI/2; axle.position.set(0,0,.3); G.add(axle); this._axle=axle

    // ── Two Konark-style divine wheels ──
    ;[-1.68,1.68].forEach(s=>{
      const w=this._makeWheel(gol,dar,wht)
      w.position.set(s,0,.3); w.rotation.y=Math.PI/2; G.add(w); this._wheels.push(w)
    })

    // ── Chariot platform (sits above axle) ──
    // Platform base y = 0.08 (just above axle center)
    const platBase=0.08, platH=0.32
    const plat=new THREE.Mesh(new THREE.BoxGeometry(2.9,platH,2.1),dar)
    plat.position.set(0,platBase+platH/2,.2); plat.castShadow=plat.receiveShadow=true; G.add(plat)

    // Gold inlay on platform edge
    const inlay=new THREE.Mesh(new THREE.BoxGeometry(2.92,.06,2.12),gol)
    inlay.position.set(0,platBase+.01,.2); G.add(inlay)
    const inlay2=new THREE.Mesh(new THREE.BoxGeometry(2.92,.06,2.12),gol)
    inlay2.position.set(0,platBase+platH+.01,.2); G.add(inlay2)

    const floorY=platBase+platH   // ≈ 0.40 — top of platform

    // Floor board (divine blue)
    const floor=new THREE.Mesh(new THREE.BoxGeometry(2.6,.055,1.85),sky)
    floor.position.set(0,floorY+.025,.2); G.add(floor)

    // ── Side walls with ornate carving effect ──
    ;[-1,1].forEach(s=>{
      // Main wall
      const wall=new THREE.Mesh(new THREE.BoxGeometry(.1,1.0,1.85),dar)
      wall.position.set(s*1.22,floorY+.5,.2); wall.castShadow=true; G.add(wall)
      // Gold top trim
      const trim=new THREE.Mesh(new THREE.BoxGeometry(.14,.08,1.88),gol)
      trim.position.set(s*1.22,floorY+1.04,.2); G.add(trim)
      // Gold bottom trim
      const btrim=new THREE.Mesh(new THREE.BoxGeometry(.14,.06,1.88),gol)
      btrim.position.set(s*1.22,floorY+.04,.2); G.add(btrim)
      // Lotus panel carvings (raised discs)
      ;[-0.6,0,0.6].forEach(z=>{
        const lotus=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,.04,8),gol)
        lotus.rotation.z=Math.PI/2; lotus.position.set(s*1.28,floorY+.5,z+.2); G.add(lotus)
        // Petals
        for(let p=0;p<8;p++){
          const a=(p/8)*Math.PI*2
          const petal=new THREE.Mesh(new THREE.BoxGeometry(.04,.02,.1),gol)
          petal.position.set(s*1.29,floorY+.5+Math.sin(a)*.22,z+.2+Math.cos(a)*.22); G.add(petal)
        }
      })
    })

    // ── Front bow (curved divine profile) ──
    const bow=new THREE.Mesh(new THREE.BoxGeometry(2.3,.22,.5),dar)
    bow.position.set(0,floorY-.08,1.2); G.add(bow)
    const bowG=new THREE.Mesh(new THREE.BoxGeometry(2.32,.06,.52),gol)
    bowG.position.set(0,floorY+.08,1.2); G.add(bowG)

    // ── Large Dharma Chakra rear panel ──
    const chakra=this._makeChakra(gol,dar)
    chakra.position.set(0,floorY+.5,-1.0); G.add(chakra)

    // ── Shaft to horses ──
    const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,5.2,8),dar)
    shaft.rotation.x=Math.PI/2; shaft.position.set(0,floorY-.08,3.8); G.add(shaft)
    const yoke=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,2.4,8),gol)
    yoke.rotation.z=Math.PI/2; yoke.position.set(0,floorY-.05,6.3); G.add(yoke)

    // ── Divine Chhatri (parasol) — 3 tiers ──
    const poleY=floorY+1.0, poleH=3.2
    const pole=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,poleH,8),gol)
    pole.position.set(0,poleY+poleH/2,-.1); G.add(pole)
    const topY=poleY+poleH   // ≈ 4.6

    ;[{r:2.0,y:topY,col:wht},{r:1.5,y:topY+.38,col:wht},{r:1.0,y:topY+.68,col:wht}].forEach(p=>{
      const disc=new THREE.Mesh(new THREE.CylinderGeometry(p.r,p.r*1.1,.09,22),p.col)
      disc.position.set(0,p.y,-.1); G.add(disc)
      // Gold rim
      const rim=new THREE.Mesh(new THREE.TorusGeometry(p.r,.04,5,22),gol)
      rim.rotation.x=Math.PI/2; rim.position.set(0,p.y+.04,-.1); G.add(rim)
      // Saffron fringe
      for(let f=0;f<28;f++){
        const a=(f/28)*Math.PI*2
        const fr=new THREE.Mesh(new THREE.BoxGeometry(.04,.24,.04),red)
        fr.position.set(Math.cos(a)*p.r*.96,p.y-.15,-.1+Math.sin(a)*p.r*.96); G.add(fr)
      }
    })

    // Cap dome
    const cap=new THREE.Mesh(new THREE.SphereGeometry(.45,14,8,0,Math.PI*2,0,Math.PI*.52),wht)
    cap.position.set(0,topY+.9,-.1); G.add(cap)
    const kal=new THREE.Mesh(new THREE.SphereGeometry(.1,8,8),gol)
    kal.position.set(0,topY+1.35,-.1); G.add(kal)

    // Divine flag (Hanuman flag / monkey banner)
    const fp=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,1.1,6),gol)
    fp.position.set(0,topY+1.5,-.1); G.add(fp)
    this._flag=new THREE.Mesh(new THREE.PlaneGeometry(.75,.48),
      new THREE.MeshStandardMaterial({color:0xff6600,side:THREE.DoubleSide}))
    this._flag.position.set(.38,topY+1.96,-.1); G.add(this._flag)

    // Hanuman symbol on flag (orange circle)
    const sym=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.01,8),
      new THREE.MeshBasicMaterial({color:0xffaa00}))
    sym.rotation.x=Math.PI/2; sym.position.set(.2,topY+1.96,-.09); G.add(sym)

    this.group.add(G); this._bodyG=G
  }

  _makeWheel(gol,dar,wht) {
    const wg=new THREE.Group(), R=WR
    // Tyre
    wg.add(new THREE.Mesh(new THREE.TorusGeometry(R,.095,10,32),dar))
    // Gold outer band
    const gr=new THREE.Mesh(new THREE.TorusGeometry(R,.038,6,32),gol); gr.position.z=.065; wg.add(gr)
    // Hub assembly
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,.24,12),gol); wg.add(hub)
    const hubCap=new THREE.Mesh(new THREE.SphereGeometry(.13,8,8),gol); hubCap.position.z=.13; wg.add(hubCap)
    // Lotus on hub face
    for(let p=0;p<8;p++){
      const a=(p/8)*Math.PI*2; const pet=new THREE.Mesh(new THREE.BoxGeometry(.04,.03,.12),gol)
      pet.position.set(Math.sin(a)*.22,Math.cos(a)*.22,.14); wg.add(pet)
    }
    // 16 alternating spokes (thick+thin) like Konark
    for(let s=0;s<16;s++){
      const a=(s/16)*Math.PI*2, thick=s%2===0
      const len=R-.18; const sp=new THREE.Mesh(
        new THREE.CylinderGeometry(thick?.045:.026,thick?.045:.026,len,6),
        thick?gol:dar)
      sp.rotation.z=a+Math.PI/2; sp.position.set(Math.sin(a)*len/2,Math.cos(a)*len/2,0); wg.add(sp)
    }
    // Rim notches (decorative carvings)
    for(let c=0;c<24;c++){
      const a=(c/24)*Math.PI*2
      const nt=new THREE.Mesh(new THREE.BoxGeometry(.05,.05,.14),gol)
      nt.position.set(Math.sin(a)*R*.93,Math.cos(a)*R*.93,.05); nt.rotation.z=a; wg.add(nt)
    }
    return wg
  }

  _makeChakra(gol,dar) {
    const g=new THREE.Group(), R=1.2
    // Back plate
    const back=new THREE.Mesh(new THREE.CylinderGeometry(R*1.05,R*1.05,.065,32),dar)
    back.rotation.z=Math.PI/2; back.position.x=-.04; g.add(back)
    // Rim
    const rim=new THREE.Mesh(new THREE.TorusGeometry(R,.1,10,32),gol)
    rim.rotation.y=Math.PI/2; g.add(rim)
    // 24 spokes
    for(let s=0;s<24;s++){
      const a=(s/24)*Math.PI*2; const sp=new THREE.Mesh(new THREE.BoxGeometry(.038,.038,R-.15),gol)
      sp.position.set(0,Math.sin(a)*(R-.15)/2,Math.cos(a)*(R-.15)/2); sp.rotation.x=-a; g.add(sp)
    }
    // Hub
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.22,12),gol)
    hub.rotation.z=Math.PI/2; g.add(hub)
    return g
  }

  // ── 2 DIVINE WHITE HORSES (Shveta + Sugriva) ─────────────────
  _buildHorses() {
    const groundOff=-(WR+GC)  // local y to put horse feet at world y=0
    ;[{x:-.75,label:'Shveta'},{x:.75,label:'Sugriva'}].forEach((cfg,i)=>{
      const h=this._makeHorse()
      h.position.set(cfg.x,groundOff+.5,5.2+(i%2)*.15)
      this.group.add(h)
      this._horses.push({group:h,baseY:groundOff+.5,phase:i*Math.PI})

      // Reins — two lines per horse
      ;[-1,1].forEach(side=>{
        const reinMat=new THREE.MeshStandardMaterial({color:0xcc4400,roughness:.7})
        // Back rein (to charioteer)
        const pts=[
          new THREE.Vector3(cfg.x+side*.1,groundOff+.85,5.2),
          new THREE.Vector3(cfg.x*0.6+side*.08,groundOff+1.1,3.0),
          new THREE.Vector3(side*.15,groundOff+1.35,1.0)
        ]
        const curve=new THREE.CatmullRomCurve3(pts)
        const rGeo=new THREE.TubeGeometry(curve,20,.015,4,false)
        this.group.add(new THREE.Mesh(rGeo,reinMat))
      })
    })
  }

  _makeHorse() {
    const g=new THREE.Group()
    // Pure white divine horses
    const wm=new THREE.MeshStandardMaterial({color:0xf8f8f5,roughness:.75,metalness:.04})
    const mane=new THREE.MeshStandardMaterial({color:0xe8e0d0,roughness:.85})
    const hoof=new THREE.MeshStandardMaterial({color:0xccbbaa,roughness:.7})
    const gold=new THREE.MeshStandardMaterial({color:0xd4a017,metalness:.88})
    const eye=new THREE.MeshBasicMaterial({color:0x331100})

    // Body (capsule, horizontal)
    const body=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.82,5,10),wm)
    body.rotation.x=Math.PI/2; body.castShadow=true; g.add(body)

    // Chest
    const chest=new THREE.Mesh(new THREE.SphereGeometry(.34,8,7),wm)
    chest.scale.set(1,.9,.8); chest.position.set(0,.06,.34); g.add(chest)

    // Hindquarters (slightly larger)
    const hq=new THREE.Mesh(new THREE.SphereGeometry(.35,8,7),wm)
    hq.scale.set(1,.96,.9); hq.position.set(0,.04,-.42); g.add(hq)

    // Neck (arched proud posture)
    const neck=new THREE.Mesh(new THREE.CylinderGeometry(.15,.20,.68,8),wm)
    neck.rotation.x=-Math.PI/4; neck.position.set(0,.38,.5); neck.castShadow=true; g.add(neck)

    // Head (noble proportions)
    const head=new THREE.Mesh(new THREE.BoxGeometry(.22,.34,.46),wm)
    head.position.set(0,.8,.88); head.rotation.x=-.15; head.castShadow=true; g.add(head)

    // Snout
    const snout=new THREE.Mesh(new THREE.BoxGeometry(.17,.22,.30),wm)
    snout.position.set(0,.72,1.13); g.add(snout)

    // Nostrils
    ;[-.06,.06].forEach(x=>{
      const n=new THREE.Mesh(new THREE.SphereGeometry(.028,5,5),
        new THREE.MeshStandardMaterial({color:0xffccbb,roughness:.8}))
      n.position.set(x,.67,1.28); g.add(n)
    })

    // Eyes (large, expressive)
    ;[-.11,.11].forEach(x=>{
      const ew=new THREE.Mesh(new THREE.SphereGeometry(.04,6,6),new THREE.MeshStandardMaterial({color:0xffffff}))
      ew.position.set(x,.82,1.08); g.add(ew)
      const ep=new THREE.Mesh(new THREE.SphereGeometry(.028,6,6),eye)
      ep.position.set(x,.82,1.1); g.add(ep)
    })

    // Ears
    ;[-.09,.09].forEach(x=>{
      const ear=new THREE.Mesh(new THREE.ConeGeometry(.05,.18,5),wm)
      ear.position.set(x,1.08,.84); ear.rotation.z=x>.0?-.22:.22; g.add(ear)
    })

    // Flowing mane
    for(let m=0;m<10;m++){
      const mn=new THREE.Mesh(new THREE.CapsuleGeometry(.04,.2,3,5),mane)
      mn.position.set(.06,.5+m*.06,.58+m*.05); mn.rotation.x=-.45; g.add(mn)
    }

    // Tail (flowing)
    for(let t=0;t<9;t++){
      const tail=new THREE.Mesh(new THREE.CapsuleGeometry(.045-t*.003,.22,3,4),mane)
      tail.position.set((Math.random()-.5)*.1,-.04-t*.14,-.56-t*.1); tail.rotation.x=.32; g.add(tail)
    }

    // 4 Legs — feet at y=-0.5 (body center is at local y=0, horse group placed with center at y=0.5)
    const legDefs=[{x:-.14,z:.34,f:true},{x:.14,z:.34,f:true},{x:-.14,z:-.34,f:false},{x:.14,z:-.34,f:false}]
    legDefs.forEach(ld=>{
      const lg=new THREE.Group()
      const up=new THREE.Mesh(new THREE.CylinderGeometry(.082,.062,.42,7),wm); up.position.y=-.21; up.castShadow=true; lg.add(up)
      const kn=new THREE.Mesh(new THREE.SphereGeometry(.07,6,6),wm); kn.position.y=-.44; lg.add(kn)
      const lo=new THREE.Mesh(new THREE.CylinderGeometry(.055,.04,.40,6),new THREE.MeshStandardMaterial({color:0xe8e0d0,roughness:.8})); lo.position.y=-.66; lo.castShadow=true; lg.add(lo)
      const fe=new THREE.Mesh(new THREE.SphereGeometry(.044,5,5),wm); fe.position.y=-.88; lg.add(fe)
      const hf=new THREE.Mesh(new THREE.BoxGeometry(.12,.09,.15),hoof); hf.position.y=-.98; lg.add(hf)
      lg.position.set(ld.x,-.08,ld.z); lg.userData.front=ld.f; g.add(lg)
    })

    // Divine golden harness & decorations
    const harn=new THREE.Mesh(new THREE.CylinderGeometry(.026,.026,.78,4),gold)
    harn.rotation.z=Math.PI/2; harn.position.set(0,.15,.1); g.add(harn)
    // Neck strap
    const nstrap=new THREE.Mesh(new THREE.TorusGeometry(.26,.025,6,16),gold)
    nstrap.rotation.y=Math.PI/2; nstrap.position.set(0,.24,.38); g.add(nstrap)
    // Forehead jewel
    const jewel=new THREE.Mesh(new THREE.SphereGeometry(.07,6,6),new THREE.MeshStandardMaterial({color:0xff4400,metalness:.9}))
    jewel.position.set(0,.92,1.0); g.add(jewel)
    // Gold anklets
    legDefs.forEach(ld=>{
      const anklet=new THREE.Mesh(new THREE.TorusGeometry(.07,.02,5,12),gold)
      anklet.rotation.x=Math.PI/2; anklet.position.set(ld.x,-.88,ld.z); g.add(anklet)
    })

    // Plumed head decoration (divine horses have feather plumes)
    for(let p=0;p<5;p++){
      const plume=new THREE.Mesh(new THREE.ConeGeometry(.025,.22,4),
        new THREE.MeshStandardMaterial({color:p%2===0?0xff4400:0xffaa00,side:THREE.DoubleSide}))
      plume.position.set((p-2)*.06,1.25,.82+p*.01); g.add(plume)
    }

    return g
  }

  // ── KRISHNA (charioteer, blue divine form) ────────────────────
  _buildKrishna() {
    const groundOff=WR+GC  // world height of group center
    const floorH=groundOff+0.08+0.32+0.055  // floorY in world
    const fy=floorH-groundOff  // local y of floor surface ≈ 0.455

    const g=new THREE.Group()
    const skin=new THREE.MeshStandardMaterial({color:0x2a3a8a,roughness:.8})  // divine blue
    const yell=new THREE.MeshStandardMaterial({color:0xffdd00,roughness:.6})
    const gold=new THREE.MeshStandardMaterial({color:0xd4a017,metalness:.9})
    const wht=new THREE.MeshStandardMaterial({color:0xfff8f0,roughness:.5})
    const peacock=new THREE.MeshStandardMaterial({color:0x006622,roughness:.7})

    // Legs + dhoti (yellow pitambara)
    ;[-.1,.1].forEach(x=>{
      const leg=new THREE.Mesh(new THREE.CylinderGeometry(.095,.085,.55,8),yell)
      leg.position.set(x,fy+.28,-.45); leg.castShadow=true; g.add(leg)
    })
    const dhoti=new THREE.Mesh(new THREE.CylinderGeometry(.24,.22,.44,12),yell)
    dhoti.position.set(0,fy+.62,-.45); g.add(dhoti)

    // Torso (blue divine skin, muscular)
    const torso=new THREE.Mesh(new THREE.CylinderGeometry(.2,.24,.6,12),skin)
    torso.position.set(0,fy+1.04,-.45); torso.castShadow=true; g.add(torso)

    // Vaijayanti mala (flower garland)
    const mala=new THREE.Mesh(new THREE.TorusGeometry(.18,.025,5,18),
      new THREE.MeshStandardMaterial({color:0xffcc00,roughness:.7}))
    mala.rotation.x=Math.PI/2; mala.position.set(0,fy+.96,-.45); g.add(mala)

    // Neck
    const neck=new THREE.Mesh(new THREE.CylinderGeometry(.1,.14,.18,8),skin)
    neck.position.set(0,fy+1.38,-.45); g.add(neck)

    // Head (divine blue)
    const head=new THREE.Mesh(new THREE.SphereGeometry(.22,14,12),skin)
    head.position.set(0,fy+1.64,-.45); head.castShadow=true; g.add(head)

    // Mukuta (crown) with peacock feather
    const crown=new THREE.Mesh(new THREE.CylinderGeometry(.15,.22,.3,10),gold)
    crown.position.set(0,fy+1.89,-.45); g.add(crown)
    for(let i=0;i<5;i++){
      const a=(i/5)*Math.PI*2
      const sp=new THREE.Mesh(new THREE.ConeGeometry(.04,.22,5),gold)
      sp.position.set(Math.cos(a)*.14,fy+2.1,-.45+Math.sin(a)*.14); g.add(sp)
    }
    // Peacock feather (signature of Krishna)
    const stem=new THREE.Mesh(new THREE.CylinderGeometry(.012,.012,.6,4),peacock)
    stem.rotation.z=.15; stem.position.set(.05,fy+2.32,-.45); g.add(stem)
    const featherDisc=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,.015,10),
      new THREE.MeshStandardMaterial({color:0x0044aa,metalness:.6}))
    featherDisc.rotation.x=.3; featherDisc.position.set(.14,fy+2.6,-.45); g.add(featherDisc)
    for(let f=0;f<8;f++){
      const a=(f/8)*Math.PI*2
      const fbar=new THREE.Mesh(new THREE.BoxGeometry(.025,.01,.14),peacock)
      fbar.position.set(.14+Math.cos(a)*.1,fy+2.6+Math.sin(a)*.06,-.45); fbar.rotation.z=a; g.add(fbar)
    }

    // Eyes (divine, slightly larger)
    ;[-.09,.09].forEach(x=>{
      const ew=new THREE.Mesh(new THREE.SphereGeometry(.035,6,6),new THREE.MeshStandardMaterial({color:0xffffff}))
      ew.position.set(x,fy+1.66,-.24); g.add(ew)
      const ep=new THREE.Mesh(new THREE.SphereGeometry(.024,6,6),new THREE.MeshBasicMaterial({color:0x111111}))
      ep.position.set(x,fy+1.66,-.23); g.add(ep)
    })

    // Tilak on forehead
    const tilak=new THREE.Mesh(new THREE.BoxGeometry(.024,.08,.018),
      new THREE.MeshBasicMaterial({color:0xffffee}))
    tilak.position.set(0,fy+1.7,-.24); g.add(tilak)

    // Arms holding reins forward
    ;[-1,1].forEach(s=>{
      const up=new THREE.Mesh(new THREE.CylinderGeometry(.08,.07,.44,7),skin)
      up.rotation.z=s*Math.PI/5; up.position.set(s*.28,fy+1.2,-.36); g.add(up)
      const lo=new THREE.Mesh(new THREE.CylinderGeometry(.065,.055,.4,6),skin)
      lo.rotation.set(.4,0,s*Math.PI/6); lo.position.set(s*.45,fy+.98,-.2); g.add(lo)
      const hand=new THREE.Mesh(new THREE.SphereGeometry(.07,8,8),skin)
      hand.position.set(s*.58,fy+.85,-.1); g.add(hand)
      // Reins in hand
      const rein=new THREE.Mesh(new THREE.BoxGeometry(.14,.02,.02),
        new THREE.MeshStandardMaterial({color:0xcc4400}))
      rein.position.set(s*.6,fy+.85,-.06); g.add(rein)
    })

    // Necklace + armlets
    const haar=new THREE.Mesh(new THREE.TorusGeometry(.16,.02,6,20),gold)
    haar.rotation.x=Math.PI/2; haar.position.set(0,fy+1.36,-.45); g.add(haar)
    ;[-.2,.2].forEach(x=>{
      const arm=new THREE.Mesh(new THREE.TorusGeometry(.075,.018,5,12),gold)
      arm.rotation.z=Math.PI/2; arm.position.set(x,fy+1.08,-.34); g.add(arm)
    })

    // Sudarshana Chakra (glowing divine disc on finger)
    const chakraG=new THREE.Mesh(new THREE.TorusGeometry(.1,.03,6,20),
      new THREE.MeshStandardMaterial({color:0xffcc00,metalness:.95,emissive:0xffcc00,emissiveIntensity:.3}))
    chakraG.rotation.x=Math.PI/2; chakraG.position.set(-.65,fy+.82,-.08); g.add(chakraG)

    // Divine glow aura
    const aura=new THREE.PointLight(0x4466ff,.6,5)
    aura.position.set(0,fy+1.5,-.45); this.group.add(aura)

    this.group.add(g); this._krishna=g
  }

  // ── ARJUNA (warrior, standing with bow) ───────────────────────
  _buildArjuna() {
    const groundOff=WR+GC
    const floorH=groundOff+0.08+0.32+0.055
    const fy=floorH-groundOff

    const g=new THREE.Group()
    const skin=new THREE.MeshStandardMaterial({color:0xc06830,roughness:.8})
    const blue=new THREE.MeshStandardMaterial({color:0x2244aa,roughness:.65})
    const gold=new THREE.MeshStandardMaterial({color:0xd4a017,metalness:.88})
    const brown=new THREE.MeshStandardMaterial({color:0x7a4422,roughness:.85})

    // Positioned slightly behind Krishna, standing
    const zOff=-.5

    ;[-.1,.1].forEach(x=>{
      const leg=new THREE.Mesh(new THREE.CylinderGeometry(.09,.08,.58,8),blue)
      leg.position.set(x,fy+.29,zOff); leg.castShadow=true; g.add(leg)
    })
    const kilt=new THREE.Mesh(new THREE.CylinderGeometry(.23,.2,.44,12),blue)
    kilt.position.set(0,fy+.64,zOff); g.add(kilt)
    // Armour (chest plate)
    const chest=new THREE.Mesh(new THREE.CylinderGeometry(.22,.26,.62,12),
      new THREE.MeshStandardMaterial({color:0x888888,metalness:.7,roughness:.35}))
    chest.position.set(0,fy+1.06,zOff); chest.castShadow=true; g.add(chest)
    // Gold armour trim
    const trim=new THREE.Mesh(new THREE.TorusGeometry(.24,.02,5,12),gold)
    trim.rotation.x=Math.PI/2; trim.position.set(0,fy+.98,zOff); g.add(trim)

    const neck=new THREE.Mesh(new THREE.CylinderGeometry(.09,.13,.18,8),skin)
    neck.position.set(0,fy+1.4,zOff); g.add(neck)
    const head=new THREE.Mesh(new THREE.SphereGeometry(.21,14,12),skin)
    head.position.set(0,fy+1.65,zOff); head.castShadow=true; g.add(head)
    // Warrior helmet/crown
    const helmet=new THREE.Mesh(new THREE.CylinderGeometry(.16,.22,.28,10),
      new THREE.MeshStandardMaterial({color:0x888888,metalness:.8}))
    helmet.position.set(0,fy+1.87,zOff); g.add(helmet)
    const helCap=new THREE.Mesh(new THREE.SphereGeometry(.18,10,8,0,Math.PI*2,0,Math.PI/2),
      new THREE.MeshStandardMaterial({color:0x888888,metalness:.8}))
    helCap.position.set(0,fy+1.98,zOff); g.add(helCap)
    const crest=new THREE.Mesh(new THREE.ConeGeometry(.04,.25,5),gold)
    crest.position.set(0,fy+2.14,zOff); g.add(crest)

    // Bow (Gandiva)
    const bowCurve=new THREE.CatmullRomCurve3([
      new THREE.Vector3(-.08,fy+.7,zOff-.2),
      new THREE.Vector3(-.22,fy+1.1,zOff-.25),
      new THREE.Vector3(-.2,fy+1.5,zOff-.22),
      new THREE.Vector3(-.08,fy+1.9,zOff-.18),
    ])
    const bowGeo=new THREE.TubeGeometry(bowCurve,20,.025,6,false)
    const bow=new THREE.Mesh(bowGeo,brown); g.add(bow)
    // Bowstring
    const strPts=[new THREE.Vector3(-.08,fy+.72,zOff-.18),new THREE.Vector3(-.14,fy+1.3,zOff-.16),new THREE.Vector3(-.08,fy+1.88,zOff-.16)]
    const strGeo=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(strPts),10,.008,4,false)
    g.add(new THREE.Mesh(strGeo,new THREE.MeshStandardMaterial({color:0xdddddd,roughness:.5})))

    // Quiver of arrows on back
    const quiver=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.55,8),brown)
    quiver.rotation.x=Math.PI/8; quiver.position.set(.25,fy+1.1,zOff+.22); g.add(quiver)
    for(let a=0;a<3;a++){
      const arrow=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,.55,4),
        new THREE.MeshStandardMaterial({color:0xddddbb}))
      arrow.rotation.x=Math.PI/8; arrow.position.set(.22+a*.04,fy+1.35,zOff+.22); g.add(arrow)
    }

    // Right arm up holding bow
    const armR=new THREE.Mesh(new THREE.CylinderGeometry(.075,.065,.44,7),
      new THREE.MeshStandardMaterial({color:0x888888,metalness:.5}))
    armR.rotation.z=-Math.PI/5; armR.position.set(-.26,fy+1.2,zOff); g.add(armR)

    // Left arm
    const armL=new THREE.Mesh(new THREE.CylinderGeometry(.075,.065,.42,7),
      new THREE.MeshStandardMaterial({color:0x888888,metalness:.5}))
    armL.rotation.z=Math.PI/4; armL.position.set(.3,fy+1.15,zOff); g.add(armL)

    this.group.add(g); this._arjuna=g
  }

  // ── DUST ─────────────────────────────────────────────────────
  _buildDust() {
    const N=120; this._dPos=new Float32Array(N*3); this._dV=Array.from({length:N},()=>({vx:0,vy:0,vz:0,max:0,life:0}))
    const geo=new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.BufferAttribute(this._dPos,3))
    this._dPts=new THREE.Points(geo,new THREE.PointsMaterial({color:0xd4b86a,size:.2,transparent:true,opacity:.5,depthWrite:false}))
    this.scene.add(this._dPts); this._dI=0
  }

  _spawnDust(){
    const i=this._dI%this._dV.length; this._dI++; const p=this.group.position; const v=this._dV[i]
    v.life=0; v.max=.65+Math.random()*.95; v.vx=(Math.random()-.5)*3; v.vy=Math.random()*2.2; v.vz=(Math.random()-.5)*3
    this._dPos[i*3]=p.x+(Math.random()-.5)*1.2; this._dPos[i*3+1]=.08; this._dPos[i*3+2]=p.z+(Math.random()-.5)*1.2
  }

  // ── UPDATE ────────────────────────────────────────────────────
  update(delta,controls) {
    const spd=Math.abs(this.speed)
    if(spd>.25){
      if(controls.left) this.yaw+=this.turnSpd*delta
      if(controls.right) this.yaw-=this.turnSpd*delta
    }
    this.group.rotation.y=this.yaw

    if(controls.forward) this.speed=Math.min(this.speed+this.accel*delta,this.maxSpeed)
    else if(controls.backward) this.speed=Math.max(this.speed-this.brakeF*delta*.45,-this.maxSpeed*.25)
    else { const d=Math.sign(this.speed)*this.drag*delta; this.speed=Math.abs(this.speed)<.04?0:this.speed-d }

    this.group.position.x+=Math.sin(this.yaw)*this.speed*delta
    this.group.position.z+=Math.cos(this.yaw)*this.speed*delta
    this.group.position.x=Math.max(-88,Math.min(88,this.group.position.x))
    this.group.position.z=Math.max(-88,Math.min(88,this.group.position.z))

    // Wheel spin
    const sp=this.speed*delta; this._wheels.forEach(w=>w.rotation.z-=sp*.9)

    // Horse gallop animation
    this._phase+=delta*Math.max(.7,spd*.38)
    this._horses.forEach(h=>{
      const t=this._phase+h.phase
      const bob=Math.sin(t*4)*.075*Math.min(1,spd/6)
      const tilt=Math.sin(t*4+.45)*.06*Math.min(1,spd/6)
      h.group.position.y=h.baseY+bob; h.group.rotation.x=tilt
      h.group.children.forEach(c=>{ if(c.userData.front!==undefined){ const lp=c.userData.front?t:t+Math.PI; c.rotation.x=Math.sin(lp*2)*.4*Math.min(1,spd/5) } })
    })

    // Flag wave
    this._flagP+=delta*3.5
    if(this._flag){ this._flag.rotation.y=Math.sin(this._flagP)*.38; this._flag.rotation.z=Math.sin(this._flagP*.7)*.1 }

    // Krishna lean + subtle breathing
    if(this._krishna){ this._krishna.rotation.x=-.06+spd*.005; this._krishna.rotation.z=Math.sin(this._phase*2)*.022*Math.min(1,spd/10) }
    if(this._arjuna){ this._arjuna.position.z=-.5+Math.sin(this._phase*1.5)*.015 }

    // Dust
    if(spd>1.5&&Math.random()<Math.min(.9,(spd-1.5)/8)) this._spawnDust()
    this._dV.forEach((v,i)=>{
      if(!v.max)return; v.life+=delta; const t=v.life/v.max
      if(t<1){this._dPos[i*3]+=v.vx*delta*(1-t);this._dPos[i*3+1]+=v.vy*delta*(1-t*.8);this._dPos[i*3+2]+=v.vz*delta*(1-t)}
    })
    this._dPts.geometry.attributes.position.needsUpdate=true
  }
}
