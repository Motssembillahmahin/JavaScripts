TodoList = [
  {
  item : 'Do code',
  dueData : '4/10/22',
}]
displayItems();
function Todo(){
  let inputElement = document.querySelector('#input-type');
  let InputData = inputElement.value;
  let timeInputElement = document.querySelector('#data');
  let InputTime = timeInputElement.value;
  TodoList.push({item : InputData, dueData:  InputTime});
  inputElement.value = '';
  timeInputElement.value = '';
  displayItems();
}

function displayItems() {
  let displayItems = document.querySelector('#showing-value');
  let newhtml = '';
  for (let i = 0; i < TodoList.length; i++){
    let todoitem = TodoList[i].item;
    let tododate = TodoList[i].dueData;
    newhtml += `
    <span>${todoitem}</span>
    <span>${tododate}</span>
    <button class= 'button-delete' onclick = 'TodoList.splice(${i}, 1);
    displayItems();'> Delete </button>  
    `
  }
  displayItems.innerHTML = newhtml;
}
console.log(TodoList)