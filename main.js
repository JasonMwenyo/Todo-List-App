const ulItem = document.querySelector('ul');
const inputText = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',function(){
  let inputValue = inputText.value; //store input value
  inputText.value = ''; //empty the input area
  
  //Create elements
  let listItem = document.createElement('li');
  let spanAttr = document.createElement('span');
  let deleteBtn = document.createElement('button');

  //Append Span and Delete to listItem
  listItem.appendChild(spanAttr);
  listItem.appendChild(deleteBtn);

  spanAttr.textContent = inputValue;
  deleteBtn.textContent = 'Delete';

  //number 9
  let unOrderedList = document.querySelector('ul');
  unOrderedList.appendChild(listItem);
  
  deleteBtn.addEventListener('click', function(){
    unOrderedList.removeChild(listItem);
    inputText.focus();
  });

  inputText.focus();
});
