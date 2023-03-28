let lableBtn = document.getElementById('lableBtn');
let secBtn = document.getElementById('secBtn');
let inputText = document.getElementById('inputText');
function pulseBtn(){
  lableBtn.classList.toggle("animation_lable");
};
function addValue(){
  inputText.setAttribute('value','NamePicture');
};
function removeAttr(){
  inputText.removeAttribute('value','NamePicture');
}
function pulseSecBtn(){
  secBtn.classList.toggle("animationButtons");
};


window.onload = function(){
  interval();
}
function interval(){
  setTimeout(pulseBtn,0);
  setTimeout(addValue,2000);
  setTimeout(pulseSecBtn,4000);
  setTimeout(removeAttr,5000);
};
setInterval(() => {
  interval();
}, 5000);



  


