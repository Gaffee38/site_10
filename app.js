let lableBtn = document.getElementById('lableBtn');
let secBtn = document.getElementById('secBtn');
let inputText = document.getElementById('inputText');
function pulseBtn(){
  lableBtn.classList.toggle("animation_lable");
};
function addValue(){
  inputText.setAttribute('value','NamePicture');
  const attr = inputText.getAttribute('value');
  if (attr == 'NamePicture'){
    setTimeout(function() {
      inputText.removeAttribute('value','NamePicture');
    },5000)
  }
};
function pulseSecBtn(){
  secBtn.classList.toggle("animationButtons");
};


window.onload = function(){
  interval();
}
function interval(){
  setTimeout(pulseBtn,0);
  setTimeout(addValue,3000);
  setTimeout(pulseSecBtn,6000);
  setInterval(()=> {
    window.location.reload();
  },9000)
};

  


