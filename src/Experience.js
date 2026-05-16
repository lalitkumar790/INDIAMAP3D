import * as THREE from 'three'
import Camera      from './world/Camera.js'
import Environment from './world/Environment.js'
import UPWorld     from './world/UPWorld.js'
import SuryaRath   from './world/SuryaRath.js'
import Weather     from './world/Weather.js'
import RathAudio   from './audio/RathAudio.js'
import Controls    from './controls/RathControls.js'
import HUD         from './ui/HUD.js'
import Sidebar     from './ui/Sidebar.js'

export default class Experience {
  constructor(canvas) {
    this.canvas=canvas; this.scene=new THREE.Scene(); this.clock=new THREE.Clock(); this.started=false

    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,logarithmicDepthBuffer:true})
    this.renderer.setSize(window.innerWidth,window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    this.renderer.shadowMap.enabled=true; this.renderer.shadowMap.type=THREE.PCFSoftShadowMap
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure=1.05
    this.renderer.setClearColor(0x87ceeb)

    this.controls=new Controls()
    this.camera  =new Camera(this)
    this.env     =new Environment(this)
    this.world   =new UPWorld(this)
    this.rath    =new SuryaRath(this)
    this.weather =new Weather(this)
    this.audio   =new RathAudio()
    this.hud     =new HUD(this)
    this.sidebar =new Sidebar(this)

    document.getElementById('start-btn').addEventListener('click',()=>{
      this.audio.init(); this.started=true
      const ts=document.getElementById('title-screen')
      ts.classList.add('fade-out'); setTimeout(()=>ts.classList.add('hidden'),900)
      document.getElementById('location-banner').classList.remove('hidden')
    })

    window.addEventListener('resize',()=>{
      this.camera.instance.aspect=window.innerWidth/window.innerHeight
      this.camera.instance.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth,window.innerHeight)
    })

    this._loop()
  }

  teleportTo(city) {
    const c=this.world.cities[city]; if(!c) return
    this.rath.group.position.set(c.x,0.93,c.z)
    this.rath.speed=0; this.rath.yaw=0
    this.hud.setLocation(c.name,c.sub,c.icon)
    if(this.audio._ready){this.audio.playWhinny();setTimeout(()=>this.audio._playBell&&this.audio._playBell(),500)}
  }

  _loop() {
    requestAnimationFrame(this._loop.bind(this))
    const delta=Math.min(this.clock.getDelta(),.05)
    const elapsed=this.clock.getElapsedTime()

    if(this.started){
      this.rath.update(delta,this.controls)

      // ── PHYSICS: terrain height + rock bumps ──
      const wp=this.rath.group.position
      const terrH=this.world.getHeight(wp.x,wp.z)
      const WHEEL_R=0.89
      const targetY=Math.max(terrH+WHEEL_R,WHEEL_R)
      const prevY=wp.y
      wp.y+=(targetY-wp.y)*Math.min(delta*8,1)
      const bump=Math.abs(wp.y-prevY)*40
      if(bump>0.06){
        this.camera.addShake(bump*3)
        if(bump>0.12&&this.audio._ready) this.audio.playBump()
      }

      // Rock collision bump
      const rockBump=this.world.checkProximity(wp,this.hud)
      if(rockBump>0){
        this.camera.addShake(rockBump*2)
        this.rath.speed*=0.7
        if(this.audio._ready) this.audio.playBump()
      }

      // River proximity for audio
      const riverP=this.world.getRiverProximity(wp)
      if(this.audio._ready) this.audio.setRiverProximity(riverP)

      this.audio.update(Math.abs(this.rath.speed),delta)
      this.hud.update(this.rath)
    }

    this.camera.update(this.rath,delta)
    this.weather.update(elapsed,this.camera.instance.position)
    this.env.update(elapsed)
    this.world.update(elapsed)

    this.renderer.render(this.scene,this.camera.instance)
  }
}
