

const img = document.querySelectorAll('.header-slider ul img');
const prew_btn = document.getElementsByClassName('control_prev')[0];
const next_btn = document.getElementsByClassName('control_next')[0];
let n = 0;


function changeSlider(){
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
        
    }
    img[n].style.display = 'block';
}
changeSlider();

prew_btn.addEventListener("click", ()=>{
    if(n > 0){
      n--;
    }else{
        n=img.length -1;
    }
    changeSlider();
})
next_btn.addEventListener("click", ()=>{
    if(n < img.length - 1){
      n++;
    }else{
        n=0;
    }
    changeSlider();
})
const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) =>{
        evt.preventDefault();
        item.scrllLeft += evt.deltaY;
    })
}


