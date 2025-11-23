// Mobile nav toggle
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(!toggle || !nav) return;

  toggle.addEventListener('click', ()=>{
    const open = getComputedStyle(nav).display !== 'none';
    nav.style.display = open ? 'none' : 'flex';
  });
})();

// Timeline reveal on scroll
(function(){
  const items = document.querySelectorAll('.timeline-item');
  if(!items.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.2});
  items.forEach(i => io.observe(i));
})();

// Subtle hover lift for buttons (magnetic-lite)
(function(){
  const btns = document.querySelectorAll('.btn-primary, .btn-ghost');
  btns.forEach(btn=>{
    btn.addEventListener('mousemove', e=>{
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.02}px, ${y*0.02}px)`;
    });
    btn.addEventListener('mouseleave', ()=> btn.style.transform = 'translate(0,0)');
  });
})();
