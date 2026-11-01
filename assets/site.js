(function(){
var nav=document.querySelector('nav');function s(){nav&&nav.classList.toggle('scrolled',window.scrollY>40)}
document.addEventListener('scroll',s,{passive:true});s();
var r=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in-view');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
r.forEach(function(el){io.observe(el)})}else{r.forEach(function(el){el.classList.add('in-view')})}
document.querySelectorAll('.faq-item').forEach(function(it){var q=it.querySelector('.faq-question'),a=it.querySelector('.faq-answer');
a.style.overflow='hidden';a.style.maxHeight='0px';a.style.opacity='0';a.style.transition='max-height .4s ease, opacity .3s ease';
q.setAttribute('role','button');q.setAttribute('tabindex','0');
function t(){var o=it.classList.toggle('open');a.style.maxHeight=o?a.scrollHeight+'px':'0px';a.style.opacity=o?'1':'0'}
q.addEventListener('click',t);q.addEventListener('keydown',function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();t()}})});
})();