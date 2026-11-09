const data=JSON.parse(document.querySelector('#ag-systems-data').textContent);
const dialog=document.querySelector('#ag-system-dialog'),close=document.querySelector('#ag-system-close');
let returnFocus=null,previousOverflow='',locked=false;
document.querySelectorAll('.ag-card-open').forEach(button=>button.addEventListener('click',()=>{
  const item=data.items[Number(button.dataset.system)];if(!item)return;
  document.querySelector('#ag-system-title').textContent=item.name;
  document.querySelector('#ag-system-body').replaceChildren(...item.paragraphs.map((value,i)=>{
    const section=document.createElement('section'),h=document.createElement('h3'),p=document.createElement('p');
    h.textContent=data.labels[i];p.textContent=value;section.append(h,p);return section;
  }));
  returnFocus=button;previousOverflow=document.body.style.overflow;locked=true;
  document.body.style.overflow='hidden';dialog.showModal();dialog.scrollTop=0;close.focus({preventScroll:true});
}));
function restore(){if(!locked)return;document.body.style.overflow=previousOverflow;locked=false;returnFocus?.focus({preventScroll:true});}
function dismiss(){dialog.close();restore();}
close.addEventListener('click',dismiss);
dialog.addEventListener('cancel',event=>{event.preventDefault();dismiss();});
dialog.addEventListener('close',()=>{if(!dialog.open)restore();});
