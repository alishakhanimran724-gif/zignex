 data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
gsap.registerPlugin(ScrollTrigger);
// CURSOR
const CUR=document.getElementById('CUR'),RING=document.getElementById('RING');
let rx=innerWidth/2,ry=innerHeight/2,cx=rx,cy=ry;
if(window.matchMedia('(hover:hover)').matches){
  document.addEventListener('mousemove',e=>{rx=e.clientX;ry=e.clientY;});
  (function loop(){cx+=(rx-cx)*.18;cy+=(ry-cy)*.18;
    if(CUR){CUR.style.left=rx+'px';CUR.style.top=ry+'px';}
    if(RING){RING.style.left=cx+'px';RING.style.top=cy+'px';}
    requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,.p-card,.tm-card,.testi-card,.svc-item,.i-stat').forEach(el=>{
    el.addEventListener('mouseenter',()=>{if(RING){RING.style.width='52px';RING.style.height='52px';RING.style.borderColor='#F0B429';}if(CUR){CUR.style.background='#F0B429';}});
    el.addEventListener('mouseleave',()=>{if(RING){RING.style.width='32px';RING.style.height='32px';RING.style.borderColor='#1A6FFF';}if(CUR){CUR.style.background='#1A6FFF';}});
  });
}
// NAV
const NAV=document.getElementById('NAV');
window.addEventListener('scroll',()=>NAV.classList.toggle('stuck',scrollY>60),{passive:true});
// HERO
gsap.timeline({delay:.1})
  .from('.hero-label',{opacity:0,y:20,duration:.6,ease:'power3.out'})
  .from('.hero-title .word',{opacity:0,y:60,skewY:3,stagger:.1,duration:.9,ease:'power4.out'},'-=.3')
  .from('.hero-bottom',{opacity:0,y:20,duration:.7,ease:'power3.out'},'-=.4');
// SCROLL REVEALS
gsap.utils.toArray('.rv').forEach(el=>{
  gsap.fromTo(el,{opacity:0,y:38},{opacity:1,y:0,duration:.8,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'}});
});
// PORTFOLIO
gsap.fromTo('.p-card',{opacity:0,scale:.95},{opacity:1,scale:1,stagger:.06,duration:.65,ease:'power2.out',
  scrollTrigger:{trigger:'#PGRID',start:'top 82%'}});
document.querySelectorAll('.fbtn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.f;
    document.querySelectorAll('.p-card').forEach(card=>{
      const show=f==='all'||card.dataset.c===f;
      gsap.to(card,{opacity:show?1:.12,scale:show?1:.95,duration:.3,ease:'power2.out'});
      card.style.pointerEvents=show?'auto':'none';
    });
  });
});
// COUNTERS
function cnt(id,target,suf){
  const el=document.getElementById(id);if(!el)return;
  const o={v:0};
  gsap.to(o,{v:target,duration:2,ease:'power2.out',
    onUpdate:()=>{el.textContent=Math.round(o.v)+(suf||'');},
    scrollTrigger:{trigger:'#band',start:'top 80%',once:true}});
}
cnt('b1',50,'+');cnt('b2',30,'+');cnt('s1',50);cnt('s2',30);cnt('s3',2);cnt('s4',5);
// FORM
const fbEl=document.getElementById('fb'),charN=document.getElementById('char-n');
if(fbEl&&charN){fbEl.addEventListener('input',()=>{const l=fbEl.value.length;charN.textContent=l;charN.style.color=l>550?'#EF4444':'';})}
async function submitCF(){
  const n=document.getElementById('fn').value.trim(),em=document.getElementById('fe').value.trim();
  const s=document.getElementById('fs').value,b=document.getElementById('fb').value.trim();
  document.querySelectorAll('.ferr').forEach(x=>x.textContent='');
  let ok=true;
  if(!n){document.getElementById('fe-n').textContent='Name required';ok=false;}
  if(!em||em.indexOf('@')<1){document.getElementById('fe-e').textContent='Valid email required';ok=false;}
  if(!s){document.getElementById('fe-s').textContent='Please select a service';ok=false;}
  if(!b){document.getElementById('fe-b').textContent='Brief required';ok=false;}
  if(!ok){gsap.to('.contact-form',{keyframes:[{x:-7},{x:7},{x:-5},{x:5},{x:0}],duration:.4,ease:'none'});return;}
  const btn=document.getElementById('CSUB');
  btn.disabled=true;btn.textContent='Sending...';
  await new Promise(r=>setTimeout(r,1800));
  document.getElementById('CF').style.display='none';
  const suc=document.getElementById('CF-success');suc.style.display='block';
  gsap.fromTo(suc,{opacity:0,y:20},{opacity:1,y:0,duration:.7,ease:'power3.out'});
  document.getElementById('CF').reset();if(charN)charN.textContent='0';
}
document.getElementById('CSUB')&&document.getElementById('CSUB').addEventListener('click',submitCF);
// FOOTER STARS
const FS=document.getElementById('FSTARS');
if(FS){for(let i=0;i<80;i++){const s=document.createElement('div');s.className='star';
  const sz=(Math.random()*2.2+.4).toFixed(1),op=(Math.random()*.5+.1).toFixed(2);
  s.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+(Math.random()*100).toFixed(1)+'%;top:'+(Math.random()*100).toFixed(1)+'%;--d:'+(Math.random()*3+1.5).toFixed(1)+'s;--dl:'+(Math.random()*5).toFixed(1)+'s;--op:'+op;
  FS.appendChild(s);}}
const SSH=document.getElementById('SSHOTS');
if(SSH){setInterval(()=>{const s=document.createElement('div');s.className='sstar';
  s.style.cssText='top:'+(Math.random()*60).toFixed(0)+'%;left:'+(Math.random()*80).toFixed(0)+'%;animation-duration:'+(Math.random()*1.5+.8).toFixed(2)+'s';
  SSH.appendChild(s);s.addEventListener('animationend',()=>s.remove());},2500);}
// HAMBURGER
const HAM=document.getElementById('HAM'),MOB=document.getElementById('MOB');
if(HAM&&MOB){
  HAM.addEventListener('click',()=>{MOB.classList.toggle('open');HAM.innerHTML=MOB.classList.contains('open')?'&times;':'&#9776;';});
  MOB.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{MOB.classList.remove('open');HAM.innerHTML='&#9776;';}));
}
// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});
});
// ACTIVE NAV
const navAs=document.querySelectorAll('#NLINKS a');
const secIds=['services','portfolio','about','team','testi','contact'];
window.addEventListener('scroll',()=>{
  let cur='';
  secIds.forEach(id=>{const el=document.getElementById(id);if(el&&scrollY>=el.offsetTop-140)cur=id;});
  navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});
// WA
setTimeout(()=>{const w=document.getElementById('wa-btn');if(w)w.classList.add('collapsed');},4000);
const waEl=document.getElementById('wa-btn');
if(waEl){waEl.addEventListener('mouseenter',function(){this.classList.remove('collapsed')});waEl.addEventListener('mouseleave',function(){setTimeout(()=>this.classList.add('collapsed'),2500);});}

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            navbar.style.boxShadow = window.pageYOffset > 0 ? '0 5px 30px rgba(0, 0, 0, 0.15)' : '0 2px 20px rgba(0, 0, 0, 0.05)';
        });

        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });

        document.querySelectorAll('.grid-item').forEach(item => {
            item.addEventListener('mouseenter', function() { this.style.zIndex = '10'; });
            item.addEventListener('mouseleave', function() { this.style.zIndex = '1'; });
        });
    