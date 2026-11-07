(function(){
var f=document.getElementById('qform');if(f){
 var g=document.getElementById('q-geo'),loc=document.getElementById('q-loc');
 if(g){g.addEventListener('click',function(){if(!navigator.geolocation){g.textContent='Location not available, please type it';return}
  g.textContent='Finding you…';navigator.geolocation.getCurrentPosition(function(p){
   loc.value='https://maps.google.com/?q='+p.coords.latitude.toFixed(5)+','+p.coords.longitude.toFixed(5);g.textContent='✓ Location added'},
   function(){g.textContent='Couldn’t get location, please type it'},{enableHighAccuracy:true,timeout:10000})})}
 f.addEventListener('submit',function(ev){ev.preventDefault();var v=function(i){return (document.getElementById(i).value||'').trim()};
  var lines=['Hi, I’d like a quote please.','Name: '+v('q-name')];
  if(v('q-reg'))lines.push('Reg: '+v('q-reg'));lines.push('Tyre size: '+(v('q-size')||'Not sure (can send photo)'));
  lines.push('Service: '+v('q-svc'),'Location: '+v('q-loc'),'When: '+v('q-when'));if(v('q-cab')!=='No')lines.push('Vehicle: '+v('q-cab'));
  window.open('https://wa.me/447500303190?text='+encodeURIComponent(lines.join('\n')),'_blank')})}
})();