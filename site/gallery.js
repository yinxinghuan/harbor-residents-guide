const dialog=document.querySelector('#screen-dialog');
const close=document.querySelector('#screen-close');
const pane=document.querySelector('#screen-pane');
const picture=document.querySelector('#screen-picture');
const title=document.querySelector('#screen-title');
let returnFocus=null,previousOverflow='',pageLocked=false;

document.querySelectorAll('.hg-scene__open').forEach(button=>{
  button.addEventListener('click',()=>{
    const source=button.querySelector('img');
    const img=new Image();
    img.addEventListener('error',()=>{
      const message=document.createElement('p');
      message.textContent='游玩画面暂时无法显示，请稍后再试。';
      picture.replaceChildren(message);
    },{once:true});
    img.src=source.getAttribute('src');
    img.alt=source.alt;
    img.width=390;
    img.height=844;
    img.draggable=false;
    picture.replaceChildren(img);
    title.textContent=button.dataset.caption;
    returnFocus=button;
    previousOverflow=document.body.style.overflow;
    pageLocked=true;
    document.body.style.overflow='hidden';
    dialog.showModal();
    pane.scrollTop=0;
    pane.scrollLeft=0;
    close.focus({preventScroll:true});
  });
});

function restore(){
  if(!pageLocked)return;
  document.body.style.overflow=previousOverflow;
  pageLocked=false;
  if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});
}
function dismiss(){dialog.close();restore();}
close.addEventListener('click',dismiss);
dialog.addEventListener('cancel',event=>{event.preventDefault();dismiss();});
dialog.addEventListener('close',()=>{if(!dialog.open)restore();});
