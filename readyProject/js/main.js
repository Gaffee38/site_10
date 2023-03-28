const item = document.getElementById('item')
const button = document.getElementById('button')
const blocker = document.getElementById('blocker')
function btnOnclick (){
  item.classList.toggle('item_active')
  blocker.classList.toggle('notActive')
  button.classList.toggle('active')
}