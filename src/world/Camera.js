import * as THREE from 'three'

export default class Camera {
  constructor(exp) {
    this.exp = exp
    this.instance = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 0.1, 3000)
    this.instance.position.set(0, 14, 20)
    exp.scene.add(this.instance)

    this._pos  = new THREE.Vector3(0, 14, 20)
    this._look = new THREE.Vector3()
    this._shake = new THREE.Vector3()
    this._shakeDecay = 0
    this._windShake  = 0
  }

  addShake(amount) { this._shakeDecay = Math.max(this._shakeDecay, amount) }

  update(rath, delta) {
    const rathPos = rath.group.position
    const spd     = Math.abs(rath.speed)
    const dist = 16, height = 7

    const ix = rathPos.x - Math.sin(rath.yaw)*dist
    const iy = rathPos.y + height
    const iz = rathPos.z - Math.cos(rath.yaw)*dist

    const t = Math.min(delta*4.5, 1)
    this._pos.x += (ix - this._pos.x) * t
    this._pos.y += (iy - this._pos.y) * t
    this._pos.z += (iz - this._pos.z) * t

    this._look.x += (rathPos.x + Math.sin(rath.yaw)*5 - this._look.x) * Math.min(delta*6,1)
    this._look.y += (rathPos.y + 2.8 - this._look.y) * Math.min(delta*6,1)
    this._look.z += (rathPos.z + Math.cos(rath.yaw)*5 - this._look.z) * Math.min(delta*6,1)

    // Physics bump shake
    if (this._shakeDecay > 0) {
      this._shakeDecay *= 0.88
      this._shake.set(
        (Math.random()-0.5)*this._shakeDecay*0.5,
        Math.random()*this._shakeDecay*0.4,
        (Math.random()-0.5)*this._shakeDecay*0.3
      )
    } else { this._shake.setScalar(0) }

    // Wind shake at high speed
    this._windShake = spd > 12 ? Math.sin(Date.now()*0.012)*(spd-12)*0.006 : 0

    this.instance.position.set(
      this._pos.x + this._shake.x,
      this._pos.y + this._shake.y + this._windShake,
      this._pos.z + this._shake.z
    )
    this.instance.lookAt(this._look)
  }
}
