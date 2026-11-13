document.addEventListener('DOMContentLoaded',()=>{const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear())

/* Contact form -> Web3Forms (free, no server needed on GitHub Pages) */
const form=document.getElementById('contact-form');
if(form){const status=form.querySelector('.form-status');const btn=form.querySelector('button[type=submit]');
form.addEventListener('submit',async e=>{e.preventDefault();
if(form.access_key.value.startsWith('YOUR_')){status.className='form-status err';status.textContent='Form not configured yet — add your Web3Forms access key.';return}
btn.disabled=true;status.className='form-status';status.textContent='Sending…';
try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});const d=await r.json();
if(d.success){form.reset();status.className='form-status ok';status.textContent='Thanks — we\'ve got your enquiry and will be in touch shortly.'}else throw new Error(d.message)}
catch(err){status.className='form-status err';status.textContent='Something went wrong. Please call 1300 947 473 or try again.'}
finally{btn.disabled=false}})}
});
