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
  interval();
}
function interval(){
  setTimeout(pulseBtn,0);
  setTimeout(addValue,4000);
  setTimeout(pulseSecBtn,6000);
};
setInterval(() => {
  interval();
}, 5000);



  


