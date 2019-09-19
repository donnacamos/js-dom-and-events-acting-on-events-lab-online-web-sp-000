function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function clearForm(){
  document.querySelectorAll('form input')[0].value = '';
}

function retrieveEmployeeInformation(){
  const input = $('form input:first')[0];
  return input.value;
}

function addNewElementAsLi(){
  const name = retrieveEmployeeInformation();
  const ul = $('ul.employee-list')[0];
  const li = document.createElement('li')
  li.innerHTML = name;
  ul.appendChild(li);
}
