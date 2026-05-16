import * as THREE from 'three'
export default class Weather {
  constructor(exp) {
    this.exp=exp; this.current='clear'
    this._buildRain()
    document.querySelectorAll('.wx').forEach(b=>b.addEventListener('click',()=>{
      document.querySelectorAll('.wx').forEach(x=>x.classList.remove('active')); b.classList.add('active'); this.set(b.dataset.wx)
    }))
    window.addEventListener('keydown',e=>{ if(e.key.toLowerCase()!=='r')return; const o=['clear','golden','rain','storm','fog']; const n=o[(o.indexOf(this.current)+1)%o.length]; this.set(n); document.querySelectorAll('.wx').forEach(b=>b.classList.toggle('active',b.dataset.wx===n)) })
  }
  _buildRain(){
    const N=5000,pos=new Float32Array(N*3); this._rv=new Float32Array(N)
    for(let i=0;i<N;i++){pos[i*3]=(Math.random()-.5)*140;pos[i*3+1]=Math.random()*80;pos[i*3+2]=(Math.random()-.5)*140;this._rv[i]=22+Math.random()*14}
    const geo=new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.BufferAttribute(pos,3))
    this._rp=pos; this._rg=geo
    this._rm=new THREE.PointsMaterial({color:0xaaccee,size:0.07,transparent:true,opacity:0.7,depthWrite:false})
    this._rain=new THREE.Points(geo,this._rm); this._rain.visible=false; this.exp.scene.add(this._rain)
  }
  set(mode){
    this.current=mode; this.exp.env.setMode(mode)
    this._rain.visible=(mode==='rain'||mode==='storm')
    this._rm.opacity=mode==='storm'?0.9:0.7
  }
  update(elapsed,camPos){
    if(!this._rain.visible)return
    const wx=this.current==='storm'?5:0
    for(let i=0;i<this._rv.length;i++){
      this._rp[i*3]+=wx*0.016; this._rp[i*3+1]-=this._rv[i]*0.016
      if(this._rp[i*3+1]<-2){this._rp[i*3]=camPos.x+(Math.random()-.5)*120;this._rp[i*3+1]=camPos.y+60+Math.random()*20;this._rp[i*3+2]=camPos.z+(Math.random()-.5)*120}
    }
    this._rg.attributes.position.needsUpdate=true
  }
}
