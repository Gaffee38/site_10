let lableBtn = document.getElementById('lableBtn');
let secBtn = document.getElementById('secBtn');
let placehold1 = document.getElementById('placehold1');
let placehold2 = document.getElementById('placehold2');
function pulseBtn(){
  lableBtn.classList.toggle("animation_lable");
};
function addValue(){
  placehold1.classList.toggle('placegolder-notActive');
  placehold2.classList.toggle('place_notActive');
};
function pulseSecBtn(){
  secBtn.classList.toggle("animationButtons");
};


window.onload = function(){
  setTimeout(()=>{
    interval();
  },1000)
}
function interval(){
  setTimeout(pulseBtn,0);
  setTimeout(addValue,1000);
  setTimeout(pulseSecBtn,2500);
};
setInterval(() => {
  interval();
}, 4000);



  


