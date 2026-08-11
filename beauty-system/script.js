const c=PORTFOLIO.beauty,stage=document.querySelector('#stage');
document.title=c.title;
['edition','eyebrow','heading','accent','intro','chapter','chapterTitle','chapterText'].forEach(id=>document.querySelector(`#${id}`).textContent=c[id]);
c.products.forEach((p,n)=>{
  const button=document.createElement('button');
  button.className='product'; button.ariaLabel=p.name;
  button.style.cssText=`--d:${p.depth};--n:${n}`;
  button.innerHTML=`<img src="${p.image}" alt=""><span class="fallback"></span><label>${String(n+1).padStart(2,'0')} · ${p.name}</label>`;
  button.querySelector('img').onerror=e=>e.currentTarget.hidden=true;
  stage.append(button);
});
stage.onpointermove=e=>{const r=stage.getBoundingClientRect();stage.style.setProperty('--x',((e.clientX-r.left)/r.width-.5)*2);stage.style.setProperty('--y',((e.clientY-r.top)/r.height-.5)*2)};
stage.onpointerleave=()=>{stage.style.setProperty('--x',0);stage.style.setProperty('--y',0)};
