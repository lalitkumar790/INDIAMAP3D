export default class RathAudio {
  constructor() {
    this._ctx=null; this._ready=false; this._master=null
    this._hoofT=0; this._whinnyT=0; this._fluteT=null
    this._riverGain=null; this._templeGain=null; this._windGain=null
    this._riverSrc=null
  }

  init() {
    try {
      this._ctx=new(window.AudioContext||window.webkitAudioContext)()
      this._master=this._ctx.createGain(); this._master.gain.value=0.5; this._master.connect(this._ctx.destination)
      this._ready=true
      this._startTanpuraDrone()
      this._startRiverLoop()
      this._startWindLayer()
      setTimeout(()=>this._scheduleFlutePhrase(),800)
      setTimeout(()=>this._scheduleTempleChime(),4000)
      setTimeout(()=>this.playWhinny(),1200)
    } catch(e){console.warn('Audio:',e)}
  }

  // ── TANPURA DRONE ────────────────────────────────────────────
  _startTanpuraDrone() {
    const ctx=this._ctx
    ;[130.81,196.00,261.63,392.00].forEach((f,i)=>{
      const osc=ctx.createOscillator(); osc.type='sine'; osc.frequency.value=f
      const lfo=ctx.createOscillator(); lfo.type='sine'; lfo.frequency.value=0.15+i*.04
      const lg=ctx.createGain(); lg.gain.value=0.022; lfo.connect(lg); lg.connect(osc.frequency)
      const g=ctx.createGain(); g.gain.value=0.022
      const filt=ctx.createBiquadFilter(); filt.type='lowpass'; filt.frequency.value=700
      osc.connect(filt); filt.connect(g); g.connect(this._master)
      osc.start(); lfo.start()
    })
  }

  // ── RIVER SOUND (looping filtered noise) ─────────────────────
  _startRiverLoop() {
    const ctx=this._ctx
    const bufSec=3, N=ctx.sampleRate*bufSec
    const buf=ctx.createBuffer(1,N,ctx.sampleRate)
    const d=buf.getChannelData(0)
    for(let i=0;i<N;i++) d[i]=(Math.random()*2-1)

    const src=ctx.createBufferSource(); src.buffer=buf; src.loop=true
    const lo=ctx.createBiquadFilter(); lo.type='bandpass'; lo.frequency.value=400; lo.Q.value=0.4
    const lo2=ctx.createBiquadFilter(); lo2.type='highpass'; lo2.frequency.value=200
    // Modulate for babbling brook feel
    const lfo=ctx.createOscillator(); lfo.type='sine'; lfo.frequency.value=0.8
    const lg=ctx.createGain(); lg.gain.value=80; lfo.connect(lg); lg.connect(lo.frequency)
    const g=ctx.createGain(); g.gain.value=0.0  // starts silent, raised by proximity
    src.connect(lo); lo.connect(lo2); lo2.connect(g); g.connect(this._master)
    src.start(); lfo.start()
    this._riverGain=g

    // Gentle gurgle layer
    const lfo2=ctx.createOscillator(); lfo2.type='sine'; lfo2.frequency.value=2.2
    const lg2=ctx.createGain(); lg2.gain.value=0.012
    const osc=ctx.createOscillator(); osc.type='triangle'; osc.frequency.value=180
    lfo2.connect(lg2); lg2.connect(osc.frequency)
    const og=ctx.createGain(); og.gain.value=0.0
    osc.connect(og); og.connect(this._master)
    osc.start(); lfo2.start()
    this._riverOscGain=og
  }

  setRiverProximity(p) {
    if(!this._ready) return
    const t=this._ctx.currentTime
    const v=p*p*0.18
    if(this._riverGain) this._riverGain.gain.setTargetAtTime(v,t,0.5)
    if(this._riverOscGain) this._riverOscGain.gain.setTargetAtTime(v*0.06,t,0.5)
  }

  // ── WIND LAYER ───────────────────────────────────────────────
  _startWindLayer() {
    const ctx=this._ctx
    const N=ctx.sampleRate*2
    const buf=ctx.createBuffer(1,N,ctx.sampleRate)
    const d=buf.getChannelData(0); for(let i=0;i<N;i++) d[i]=(Math.random()*2-1)
    const src=ctx.createBufferSource(); src.buffer=buf; src.loop=true
    const filt=ctx.createBiquadFilter(); filt.type='lowpass'; filt.frequency.value=150
    const g=ctx.createGain(); g.gain.value=0.025
    src.connect(filt); filt.connect(g); g.connect(this._master)
    src.start(); this._windGain=g
  }

  setWindSpeed(spd) {
    if(!this._windGain||!this._ready) return
    this._windGain.gain.setTargetAtTime(0.02+spd*0.003,this._ctx.currentTime,0.4)
  }

  // ── BANSURI FLUTE ────────────────────────────────────────────
  _scheduleFlutePhrase() {
    if(!this._ready) return
    this._playFlutePhrase()
    this._fluteT=setTimeout(()=>this._scheduleFlutePhrase(),5000+Math.random()*8000)
  }

  _playFlutePhrase() {
    const ctx=this._ctx,now=ctx.currentTime
    // Raag Yaman / Bhairavi-inspired
    const phrases=[
      [{f:523.25,d:.5},{f:493.88,d:.3},{f:440,d:.4},{f:392,d:.65},{f:349.23,d:.4},{f:392,d:.3},{f:440,d:.5},{f:523.25,d:.8}],
      [{f:392,d:.4},{f:440,d:.35},{f:493.88,d:.4},{f:523.25,d:.5},{f:587.33,d:.35},{f:523.25,d:.4},{f:440,d:.5},{f:392,d:.9}],
      [{f:261.63,d:.6},{f:293.66,d:.4},{f:329.63,d:.4},{f:392,d:.55},{f:440,d:.4},{f:493.88,d:.4},{f:523.25,d:1.0}],
    ]
    const phrase=phrases[Math.floor(Math.random()*phrases.length)]
    let t=0
    phrase.forEach(n=>{ this._fluteNote(n.f,now+t,n.d,0.11); t+=n.d*.82 })
  }

  _fluteNote(freq,start,dur,vol) {
    const ctx=this._ctx
    const osc=ctx.createOscillator(); osc.type='triangle'
    osc.frequency.setValueAtTime(freq,start)
    osc.frequency.linearRampToValueAtTime(freq*1.006,start+0.09)
    osc.frequency.linearRampToValueAtTime(freq,start+0.22)
    const vib=ctx.createOscillator(); vib.type='sine'; vib.frequency.value=5.8
    const vg=ctx.createGain(); vg.gain.setValueAtTime(0,start); vg.gain.linearRampToValueAtTime(freq*.008,start+.18); vg.gain.linearRampToValueAtTime(0,start+dur)
    vib.connect(vg); vg.connect(osc.frequency)
    const env=ctx.createGain(); env.gain.setValueAtTime(0,start); env.gain.linearRampToValueAtTime(vol,start+0.065); env.gain.setValueAtTime(vol,start+dur-.12); env.gain.linearRampToValueAtTime(0,start+dur)
    // Breath noise
    const bN=ctx.sampleRate*dur|0; const bBuf=ctx.createBuffer(1,bN,ctx.sampleRate); const bd=bBuf.getChannelData(0); for(let i=0;i<bN;i++) bd[i]=(Math.random()*2-1)
    const bs=ctx.createBufferSource(); bs.buffer=bBuf
    const bf=ctx.createBiquadFilter(); bf.type='bandpass'; bf.frequency.value=freq*2.1; bf.Q.value=3
    const bg=ctx.createGain(); bg.gain.setValueAtTime(vol*.1,start); bg.gain.exponentialRampToValueAtTime(vol*.03,start+.12); bg.gain.linearRampToValueAtTime(0,start+dur)
    const delay=ctx.createDelay(.8); delay.delayTime.value=.32
    const dg=ctx.createGain(); dg.gain.value=.15
    osc.connect(env); env.connect(this._master); osc.connect(delay); delay.connect(dg); dg.connect(this._master)
    bs.connect(bf); bf.connect(bg); bg.connect(this._master)
    osc.start(start); osc.stop(start+dur+.15); vib.start(start); vib.stop(start+dur+.15); bs.start(start); bs.stop(start+dur+.08)
  }

  // ── TEMPLE CHIMES ────────────────────────────────────────────
  _scheduleTempleChime() {
    if(!this._ready) return
    this._playBell(); this._templeT=setTimeout(()=>this._scheduleTempleChime(),8000+Math.random()*15000)
  }

  _playBell() {
    const ctx=this._ctx,now=ctx.currentTime
    ;[880,1320,1760,2200].forEach((f,i)=>{
      const o=ctx.createOscillator(); o.type='sine'; o.frequency.value=f*(1+Math.random()*.015)
      const g=ctx.createGain(); g.gain.setValueAtTime(0,now+i*.06); g.gain.linearRampToValueAtTime(.05,now+i*.06+.01); g.gain.exponentialRampToValueAtTime(.0001,now+i*.06+4.0)
      o.connect(g); g.connect(this._master); o.start(now+i*.06); o.stop(now+i*.06+4.1)
    })
  }

  // ── SOFT HOOFBEATS ───────────────────────────────────────────
  _playHoof(vel) {
    if(!this._ready) return
    const ctx=this._ctx,now=ctx.currentTime
    const o=ctx.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(88,now); o.frequency.exponentialRampToValueAtTime(32,now+.11)
    const g=ctx.createGain(); g.gain.setValueAtTime(vel*.2,now); g.gain.exponentialRampToValueAtTime(.0001,now+.13)
    const f=ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=280
    o.connect(f); f.connect(g); g.connect(this._master); o.start(now); o.stop(now+.14)
  }

  playWhinny() {
    if(!this._ready) return
    const ctx=this._ctx,now=ctx.currentTime
    const o=ctx.createOscillator(); o.type='triangle'
    o.frequency.setValueAtTime(320,now); o.frequency.linearRampToValueAtTime(500,now+.22); o.frequency.linearRampToValueAtTime(360,now+.55); o.frequency.linearRampToValueAtTime(280,now+.88)
    const vib=ctx.createOscillator(); vib.type='sine'; vib.frequency.value=7.5
    const vg=ctx.createGain(); vg.gain.value=14; vib.connect(vg); vg.connect(o.frequency)
    const f=ctx.createBiquadFilter(); f.type='bandpass'; f.frequency.value=650; f.Q.value=1.4
    const g=ctx.createGain(); g.gain.setValueAtTime(0,now); g.gain.linearRampToValueAtTime(.09,now+.04); g.gain.setValueAtTime(.09,now+.6); g.gain.linearRampToValueAtTime(.0001,now+1.0)
    o.connect(f); f.connect(g); g.connect(this._master); o.start(now); o.stop(now+1.1); vib.start(now); vib.stop(now+1.1)
  }

  playBump() {
    if(!this._ready) return
    const ctx=this._ctx,now=ctx.currentTime
    const o=ctx.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(60,now); o.frequency.exponentialRampToValueAtTime(20,now+.2)
    const g=ctx.createGain(); g.gain.setValueAtTime(.3,now); g.gain.exponentialRampToValueAtTime(.0001,now+.22)
    o.connect(g); g.connect(this._master); o.start(now); o.stop(now+.23)
  }

  update(speed, delta) {
    if(!this._ready) return
    if(speed>0.8){ this._hoofT+=delta; const iv=Math.max(.07,.22-speed*.006); if(this._hoofT>=iv){this._hoofT=0;this._playHoof(Math.min(1,speed/18))} }
    this._whinnyT+=delta; if(speed>14&&this._whinnyT>14+Math.random()*12){this._whinnyT=0;this.playWhinny()}
    this.setWindSpeed(speed)
  }
}
