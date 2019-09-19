function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function clearForm(){
  document.querySelectorAll('form input')[0].value = '';
}


