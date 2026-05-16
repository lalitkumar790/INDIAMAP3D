export default class HUD {
  constructor(exp) {
    this.exp=exp
    this._locName=document.getElementById('loc-name')
    this._locSub=document.getElementById('loc-sub')
    this._locIcon=document.getElementById('loc-icon')
    this._sNum=document.getElementById('speedo-num')
    this._sFill=document.getElementById('speedo-fill')
    this._monPopup=document.getElementById('mon-popup')
    this._monIcon=document.getElementById('mon-icon-el')
    this._monTitle=document.getElementById('mon-title')
    this._monDesc=document.getElementById('mon-desc')
    this._monDist=document.getElementById('mon-dist')
    this._miniWrap=document.getElementById('minimap-wrap')
    this._mini=document.getElementById('minimap')
    this._miniCtx=this._mini.getContext('2d')
    this._showMini=false; this._monTimer=0; this._monVis=false; this._curLoc=''; this._borderWarnT=0
    window.addEventListener('keydown',e=>{ if(e.key.toLowerCase()==='m'){this._showMini=!this._showMini;this._miniWrap.classList.toggle('hidden',!this._showMini)} })
  }

  setLocation(name,sub,icon) {
    if(name===this._curLoc)return; this._curLoc=name
    this._locName.textContent=name; this._locSub.textContent=sub; this._locIcon.textContent=icon
  }

  showMonument(mon,dist) {
    this._monTimer=4500; if(!this._monVis){this._monVis=true;this._monPopup.classList.remove('hidden')}
    this._monIcon.textContent=mon.icon; this._monTitle.textContent=mon.name
    this._monDesc.textContent=mon.desc; this._monDist.textContent=dist?`~${dist} away`:''
  }

  showBorderWarning() {
    this._borderWarnT=2000; this._locName.textContent='⚠ Uttar Pradesh Border'; this._locSub.textContent='Turn back — beyond UP boundary'; this._locIcon.textContent='🛑'
  }

  update(rath) {
    const spd=Math.abs(rath.speed), kmh=Math.round(spd*3.6)
    this._sNum.textContent=kmh
    const pct=Math.min(spd/rath.maxSpeed,1),angle=pct*Math.PI
    const r=45,cx=50,cy=55,x=cx+r*Math.cos(Math.PI-angle),y=cy-r*Math.sin(Math.PI-angle)
    const large=angle>Math.PI?1:0
    this._sFill.setAttribute('d',pct<.01?`M10,55 A45,45 0 0,1 10,55`:`M10,55 A45,45 0 ${large},1 ${x.toFixed(1)},${y.toFixed(1)}`)
    if(this._monVis){this._monTimer-=16;if(this._monTimer<=0){this._monVis=false;this._monPopup.classList.add('hidden')}}
    if(this._showMini) this._drawMini(rath)
  }

  _drawMini(rath) {
    const ctx=this._miniCtx,W=200,H=200,sc=1.6,cx=W/2,cy=H/2
    ctx.clearRect(0,0,W,H)
    ctx.fillStyle='rgba(5,2,0,0.92)'; ctx.fillRect(0,0,W,H)

    // UP boundary
    const bpts=[[-52,-48],[-38,-50],[-20,-52],[-5,-54],[12,-52],[28,-48],[45,-42],[55,-30],[60,-18],[62,-5],[60,8],[55,18],[48,26],[40,30],[30,32],[18,30],[8,28],[-2,26],[-12,24],[-22,22],[-30,18],[-36,12],[-40,4],[-44,-6],[-48,-18],[-52,-32],[-52,-48]]
    ctx.beginPath(); bpts.forEach(([x,z],i)=>{ const px=cx+x*sc,py=cy+z*sc; i?ctx.lineTo(px,py):ctx.moveTo(px,py) })
    ctx.strokeStyle='rgba(245,166,35,0.5)'; ctx.lineWidth=1.5; ctx.stroke()

    // Rivers
    ctx.strokeStyle='rgba(30,130,200,0.55)'; ctx.lineWidth=3; ctx.beginPath()
    ctx.moveTo(cx-65*sc,cy-52*sc); ctx.bezierCurveTo(cx,cy,cx+40*sc,cy,cx+68*sc,cy-9*sc); ctx.stroke()
    ctx.lineWidth=2; ctx.beginPath()
    ctx.moveTo(cx-35*sc,cy-58*sc); ctx.bezierCurveTo(cx-10*sc,cy+5*sc,cx+15*sc,cy+10*sc,cx+38*sc,cy+14*sc); ctx.stroke()

    // Cities
    const {CITIES}=this.exp.world
    Object.values(CITIES).forEach(c=>{
      const px=cx+c.x*sc,py=cy+c.z*sc
      ctx.beginPath(); ctx.arc(px,py,3.5,0,Math.PI*2)
      ctx.fillStyle='rgba(245,166,35,0.85)'; ctx.fill()
    })

    // Rath
    const rx=cx+rath.group.position.x*sc,ry=cy+rath.group.position.z*sc
    ctx.beginPath(); ctx.arc(rx,ry,6,0,Math.PI*2)
    ctx.fillStyle='#f5a623'; ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=1.5; ctx.stroke()
    ctx.beginPath(); ctx.moveTo(rx,ry)
    ctx.lineTo(rx+Math.sin(rath.yaw)*12,ry+Math.cos(rath.yaw)*12)
    ctx.strokeStyle='rgba(255,255,255,0.9)'; ctx.lineWidth=2; ctx.stroke()
  }
}
