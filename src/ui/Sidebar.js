export default class Sidebar {
  constructor(exp) {
    this.exp=exp
    document.querySelectorAll('.city-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        if(!exp.started)return
        document.querySelectorAll('.city-btn').forEach(b=>b.classList.remove('active'))
        btn.classList.add('active'); exp.teleportTo(btn.dataset.city)
      })
    })
    document.querySelectorAll('.state-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        if(btn.classList.contains('soon')){
          const b=btn.querySelector('.state-badge'); const o=b.textContent; b.textContent='🚧 Coming soon...'; setTimeout(()=>b.textContent=o,1800)
        }
      })
    })
  }
}
