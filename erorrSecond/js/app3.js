let switcher = document.getElementById('switcher');
let secBtnRob = document.getElementById('secBtnRob');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let placehold1 = document.getElementById('placehold1');
let placehold2 = document.getElementById('placehold2');


window.onload = function(){
  timeout();
}
setInterval(timeout,7500)

function timeout () {
  setTimeout(() => {
    switcher.classList.toggle("switch-on");
  },500);
  setTimeout(()=>{
    span1.classList.toggle('notActive-span');
    span2.classList.toggle('active-span');
    placehold1.classList.toggle('placegolder-notActive');
    placehold2.classList.toggle('place_notActive');
  },2500);
  setTimeout(()=>{
    secBtnRob.classList.toggle("active");
  },2500);
  setTimeout(()=>{
    secBtnRob.classList.toggle("animationButtons");
  },4500);
}

