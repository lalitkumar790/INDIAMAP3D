export default class RathControls {
  constructor() {
    this.forward = this.backward = this.left = this.right = false
    this._cd = 0
    const map = { ArrowUp:'forward',KeyS:'forward',ArrowDown:'backward',KeyX:'backward',ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right' }
    window.addEventListener('keydown', e => { if(map[e.code]){this[map[e.code]]=true;e.preventDefault()} })
    window.addEventListener('keyup',   e => { if(map[e.code]) this[map[e.code]]=false })
  }
}
