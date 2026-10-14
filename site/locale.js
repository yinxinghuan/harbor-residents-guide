const key='harbor-guide-language';
const page=document.documentElement.lang.startsWith('en')?'en':'zh';
let saved;
try{saved=localStorage.getItem(key);}catch{}
const preferred=saved==='zh'||saved==='en'?saved:(page==='zh'&& !navigator.language.toLowerCase().startsWith('zh')?'en':page);
if(preferred!==page){
  const planning=/\/plans(?:\.en)?\.html$/.test(location.pathname);
  const target=planning?(preferred==='en'?'plans.en.html':'plans.html'):(preferred==='en'?'en.html':'index.html');
  location.replace(new URL(target+location.search+location.hash,location.href));
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-lang-choice]').forEach(link=>link.addEventListener('click',()=>{
    try{localStorage.setItem(key,link.dataset.langChoice);}catch{}
    const name=document.querySelector('#resident-dialog[open] #detail-name')?.textContent;
    if(name)try{sessionStorage.setItem('harbor-guide-open-resident',name);}catch{}
  }));
});
