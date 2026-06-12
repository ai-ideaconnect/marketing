(function(){
  document.documentElement.classList.add('js');
  // scroll-spy for TOC
  var links=[].slice.call(document.querySelectorAll('.toc a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));}).filter(Boolean);
  if('IntersectionObserver' in window && secs.length){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var id='#'+en.target.id;
          links.forEach(function(a){a.classList.toggle('active', a.getAttribute('href')===id);});
        }
      });
    }, {rootMargin:'-20% 0px -70% 0px', threshold:0});
    secs.forEach(function(s){io.observe(s);});
  }
  // reveal
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rev=[].slice.call(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window && !rm){
    var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io2.unobserve(e.target);}});},{threshold:.15});
    rev.forEach(function(el){io2.observe(el);});
  } else { rev.forEach(function(el){el.classList.add('in');}); }
})();