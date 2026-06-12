(function(){
  document.documentElement.classList.add('js');
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- FAQ ---- */
  var faqs=[
    ['Is IdeaConnect free to use?','Yes — creating a profile, sharing ideas, and discovering people is free. We\'ll introduce optional premium tools for power users and funds later, but the core experience stays free.'],
    ['Who is IdeaConnect for?','Three groups, one community: idea owners looking for momentum, investors hunting for early signal, and collaborators searching for projects worth their skills.'],
    ['How do you protect my idea?','You control visibility on every post — public, connections-only, or private draft. You decide how much to share, and safety tools like report, block, and private accounts are built in.'],
    ['When does the app launch?','We\'re rolling out in early access now, region by region. Join the waitlist and you\'ll be first in line on both iOS and Android.'],
    ['Can investors contact me directly?','Only with your intent. Interest and messages flow through mutual signals, so conversations start when both sides opt in — no cold spam.']
  ];
  var list=document.getElementById('faqList');
  if(list){
    faqs.forEach(function(f,i){
      var item=document.createElement('div'); item.className='qa'+(i===0?' open':'');
      item.innerHTML='<button class="qa-q">'+f[0]+'<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button><div class="qa-a"><p>'+f[1]+'</p></div>';
      list.appendChild(item);
    });
    list.addEventListener('click', function(e){
      var btn=e.target.closest('.qa-q'); if(!btn) return;
      var qa=btn.parentElement, a=qa.querySelector('.qa-a');
      var open=qa.classList.contains('open');
      list.querySelectorAll('.qa').forEach(function(x){ x.classList.remove('open'); x.querySelector('.qa-a').style.maxHeight='0'; });
      if(!open){ qa.classList.add('open'); a.style.maxHeight=a.scrollHeight+'px'; }
    });
    // open first
    var first=list.querySelector('.qa.open .qa-a'); if(first) first.style.maxHeight=first.scrollHeight+'px';
  }

  /* ---- nav scroll state ---- */
  var nav=document.getElementById('nav');
  function onScroll(){ if(window.scrollY>40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* ---- reveal on scroll ---- */
  var reveals=[].slice.call(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window && !rm){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {threshold:.18, rootMargin:'0px 0px -8% 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---- hero parallax (pointer) ---- */
  var stage=document.getElementById('heroStage');
  if(stage && !rm && window.matchMedia('(min-width:901px)').matches){
    var phones=[].slice.call(stage.querySelectorAll('.phone-img'));
    var tx=0,ty=0,cx=0,cy=0;
    stage.addEventListener('mousemove', function(e){
      var r=stage.getBoundingClientRect();
      tx=((e.clientX-r.left)/r.width-.5);
      ty=((e.clientY-r.top)/r.height-.5);
    });
    stage.addEventListener('mouseleave', function(){ tx=0; ty=0; });
    (function loop(){
      cx+=(tx-cx)*.06; cy+=(ty-cy)*.06;
      phones.forEach(function(p){
        var d=parseFloat(p.getAttribute('data-depth')||'14');
        p.style.setProperty('--px', (cx*d).toFixed(2)+'px');
        p.style.setProperty('--py', (cy*d).toFixed(2)+'px');
      });
      requestAnimationFrame(loop);
    })();
  }
})();